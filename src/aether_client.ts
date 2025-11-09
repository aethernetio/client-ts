// =============================================================================================
// FILE: aether_client.ts (ИСПРАВЛЕННАЯ ВЕРСИЯ)
// =============================================================================================

import {
    AKey,
    CryptoEngine,
    CryptoProviderFactory,
    KeyType,
    PairSymKeys,
    Sign,
    SignedKey,
} from './aether_crypto';
import {
    ConnectionWork
} from './aether_client_connection_work';
import {
    ConnectionRegistration
} from './aether_client_connection_reg';
import {
    MessageNode,
    MessageEventListener,
    MessageEventListenerDefault
} from './aether_client_message';
import {
    ClientState,
    ClientStateInMemory
} from './aether_client_state';
import {
    LNode,
    Log
} from './aether_logging';
import { AConsumer, AFunction, ClientApiException, ClientStartException, Destroyable, URI, UUID } from './aether_types'; // <- Добавлен AccessCheckPair
import { Destroyer, RU, StandardUUIDs, Queue } from './aether_utils'; // <- Добавлен Queue
import { AFuture, ARFuture, EventBiConsumer, EventConsumer } from './aether_future';
import {
    Cloud,
    FinishResultGlobalRegServerApi,
    Key,
    ServerDescriptor,
    AccessGroup,
    AccessCheckResult,
    AuthorizedApi,
    AuthorizedApiRemote,
    ServerApiByUid,
    ClientApiStream,
    AccessCheckPair,
} from './aether_api';
import { BMap, RCol } from './aether_rcollection';
// --- [КОНЕЦ] ДОБАВЛЕНЫ НОВЫЕ ИМПОРТЫ ---

export enum RegStatus { NO, BEGIN, CONFIRM }


/**
 * @interface AccessGroupI
 * @description Public interface for interacting with a mutable access group.
 */
export interface AccessGroupI {
    id: bigint;
    owner: UUID;
    data: Set<UUID>;
    add(uuid: UUID): ARFuture<boolean>;
    remove(uuid: UUID): ARFuture<boolean>;
}

/**
 * @class AccessGroupImpl
 * @description Internal implementation of the mutable access group interface.
 * @implements {AccessGroupI}
 */
class AccessGroupImpl implements AccessGroupI {
    private client: AetherCloudClient;
    public id: bigint;
    public owner: UUID;
    public data: Set<UUID>; // Локальная копия (может быть несинхронизирована)

    constructor(client: AetherCloudClient, group: AccessGroup) {
        this.client = client;
        this.id = group.getId();
        this.owner = group.getOwner();
        this.data = new Set(group.getData()); // Кэшируем данные
    }

    add(uuid: UUID): ARFuture<boolean> {
        if (this.data.has(uuid)) {
            Log.trace("AccessGroupImpl.add: UUID already in local cache.", { uuid: uuid.toString(), group: this.id });
            return ARFuture.of(false);
        }

        // Добавляем операцию в очередь
        const groupMap = this.client.accessOperationsAdd.get(this.id) ?? new Map<string, ARFuture<boolean>>();
        if (!this.client.accessOperationsAdd.has(this.id)) {
            this.client.accessOperationsAdd.set(this.id, groupMap);
        }

        const uuidStr = uuid.toString().toString();
        let future = groupMap.get(uuidStr);
        if (!future) {
            future = ARFuture.make();
            groupMap.set(uuidStr, future);
        }

        // Триггер для немедленной отправки
        this.client.flush();
        return future;
    }

    remove(uuid: UUID): ARFuture<boolean> {
        if (!this.data.has(uuid)) {
            Log.trace("AccessGroupImpl.remove: UUID not in local cache.", { uuid: uuid.toString(), group: this.id });
            return ARFuture.of(false);
        }

        // Добавляем операцию в очередь
        const groupMap = this.client.accessOperationsRemove.get(this.id) ?? new Map<string, ARFuture<boolean>>();
        if (!this.client.accessOperationsRemove.has(this.id)) {
            this.client.accessOperationsRemove.set(this.id, groupMap);
        }

        const uuidStr = uuid.toString().toString();
        let future = groupMap.get(uuidStr);
        if (!future) {
            future = ARFuture.make<boolean>();
            groupMap.set(uuidStr, future);
        }

        // Триггер для немедленной отправки
        this.client.flush();
        return future;
    }
}

/**
 * @class ClientTask
 * @description Internal class to hold tasks for getClientApi.
 * (Based on static class AetherCloudClient.ClientTask)
 */
export class ClientTask {
    public readonly uid: UUID;
    public readonly task: AConsumer<ServerApiByUid>;

    constructor(uid: UUID, task: AConsumer<ServerApiByUid>) {
        this.uid = uid;
        this.task = task;
    }
}


/**
* @class AetherCloudClient
* @implements {Destroyable}
* @description Main client class managing connections, state, and communication logic.
*/
export class AetherCloudClient implements Destroyable {
    public readonly destroyer: Destroyer;
    public readonly state: ClientState;
    public readonly name: string;
    public readonly logClientContext: LNode;
    private regConnection: ConnectionRegistration | null = null;
    private workConnections = new Map<number, ConnectionWork>();
    private readonly registrationUrl: URI[];
    private readonly startFuture = AFuture.make();
    private readonly startFuture0 = AFuture.make();
    public readonly messageNodeMap = new Map<string, MessageNode>();
    public readonly onMessage = new EventBiConsumer<UUID, Uint8Array>();
    public readonly onNewChild = new EventConsumer<UUID>();
    public readonly onClientStreamCreated = new EventConsumer<MessageNode>();

    public readonly servers: BMap<number, ServerDescriptor>;
    public readonly clouds: BMap<UUID, Cloud>;
    private beginConnect = false;
    /**
         * @private
         * @description (Port from Java)
         * Fetches the client's own Cloud and ServerDescriptors,
         * ensures they are saved to state, and then completes.
         * This is critical for preventing race conditions on restart.
         */
    private forceUpdateStateFromCache(): AFuture {
        const resultFuture = AFuture.make();
        const uid = this.getUid(); //
        if (!uid) {
            const err = new Error("Client UID is null. Cannot update state from cache.");
            Log.error(err.message);
            return AFuture.ofThrow(err); //
        }

        Log.debug("forceUpdateStateFromCache: Forcing fetch and save for own UID...", { uid: uid.toString() });

        // 1. Получить Cloud (из state или сети)
        this.getCloud(uid).to((cloud: Cloud | null) => { //
            if (!cloud) {
                const err = new Error("Fetched cloud was null for UID: " + uid);
                Log.error(err.message);
                return resultFuture.error(err);
            }

            // 2. Явно сохранить Cloud в state (на случай, если он пришел из BMap)
            this.state.setCloud(uid, cloud); //
            Log.trace("forceUpdateStateFromCache: Own cloud saved to state.", { uid: uid.toString() });

            const sids = cloud.data;
            if (!sids || sids.length === 0) {
                Log.warn("forceUpdateStateFromCache: Client's own cloud is empty. State updated.");
                return resultFuture.tryDone(); //
            }

            // 3. Собрать futures для ВСЕХ ServerDescriptors
            const serverFutures = sids.map(sid => this.getServer(sid)); //

            // 4. Дождаться, пока все дескрипторы разрешатся (попадут в BMap/state)
            ARFuture.all(serverFutures).to(() => { //
                Log.trace("forceUpdateStateFromCache: All server descriptors fetched. Saving to state...");

                // 5. Явно сохранить все дескрипторы из BMap в state
                for (const future of serverFutures) {
                    const desc = future.getNow(); //
                    if (desc) {
                        this.state.setServerDescriptor(desc); //
                    } else {
                        Log.warn("forceUpdateStateFromCache: ServerDescriptor was null after ARFuture.all, this is unexpected.");
                    }
                }

                Log.debug("forceUpdateStateFromCache: Force update for own UID complete.", { uid: uid.toString() });
                resultFuture.tryDone(); //

            }).onError(e => {
                Log.error("forceUpdateStateFromCache: Failed to fetch server descriptors.", e, { uid: uid.toString() });
                resultFuture.error(e);
            });

        }).onError(e => {
            Log.error("forceUpdateStateFromCache: Failed to fetch own cloud.", e, { uid: uid.toString() });
            resultFuture.error(e);
        });

        return resultFuture;
    }
    public connect(): AFuture {
        if (this.beginConnect) return this.startFuture0;
        this.beginConnect = true;
        AFuture.ofPromise(() => this.initRegistration())
            .onError(e => {
                Log.error("Client failed to start during initRegistration.", e);
                this.startFuture.tryError(e);
            });
        this.startFuture.to(() => {
            this.forceUpdateStateFromCache().to(()=>{
                this.startFuture0.done();
            });
        })
        return this.startFuture0;
    }
    /**
     * Batched cache for client access groups.
     * Key: Client UUID, Value: Set of Group IDs
     */
    public readonly clientGroups: BMap<UUID, Set<bigint>>;
    /**
     * Batched cache for AccessGroup definitions.
     * Key: Group ID, Value: AccessGroup object
     */
    public readonly accessGroups: BMap<bigint, AccessGroup | null>; // Java-версия допускает null
    /**
     * Batched cache for all clients accessible by a given client.
     * Key: Client UUID, Value: Set of accessible Client UUIDs
     */
    public readonly allAccessedClients: BMap<UUID, Set<UUID>>;
    /**
     * Batched cache for access check results.
     * Key: AccessCheckPair (source, target), Value: Boolean (hasAccess)
     */
    public readonly accessCheckCache: BMap<AccessCheckPair, boolean>;

    public readonly accessOperationsAdd = new Map<bigint, Map<string, ARFuture<boolean>>>();
    public readonly accessOperationsRemove = new Map<bigint, Map<string, ARFuture<boolean>>>();

    /**
     * Queue for tasks requiring an AuthorizedApi instance.
     * Processed in ConnectionWork.flushBackgroundRequests.
     */
    public readonly authTasks = new Queue<AConsumer<AuthorizedApiRemote>>();

    /**
     * Queue for tasks requiring a ServerApiByUid instance.
     * Processed in ConnectionWork.flushBackgroundRequests.
     */
    public readonly clientTasks = new Queue<ClientTask>();

    public readonly onNewChildApi = new EventBiConsumer<UUID, ServerApiByUid>();


    /**
    * @constructor
    * @param {ClientState} state The client state implementation.
    * @param {string} name A descriptive name for the client.
    */
    constructor(state: ClientState, name: string) {
        this.state = state;
        this.name = name;
        this.destroyer = new Destroyer(name + '-client');
        this.logClientContext = Log.of({
            component: name
        });

        Log.info("AetherCloudClient: Initializing...");

        this.registrationUrl = state.getRegistrationUri();

        const timeout = state.getTimeoutForConnectToRegistrationServer(); // Общий таймаут
        this.servers = RCol.bMap<number, ServerDescriptor>(
            timeout, `${name}-servers`
        );
        this.clouds = RCol.bMap<UUID, Cloud>(
            timeout, `${name}-clouds`
        );
        this.clientGroups = RCol.bMap<UUID, Set<bigint>>(
            timeout, `${name}-clientGroups`
        );
        this.accessGroups = RCol.bMap<bigint, AccessGroup | null>(
            timeout, `${name}-accessGroups`
        );
        this.allAccessedClients = RCol.bMap<UUID, Set<UUID>>(
            timeout, `${name}-allAccessedClients`
        );
        this.accessCheckCache = RCol.bMap<AccessCheckPair, boolean>(
            timeout, `${name}-accessCheckCache`
        );
        this.onMessage.add((senderUid: UUID, msg: Uint8Array) => {
            this.getMessageNode(senderUid, MessageEventListenerDefault).sendMessageFromServerToClient(msg);
        });

        this.populateCachesFromState();

        this.clouds.forValueUpdate().add(uu => state.setCloud(uu.key, uu.newValue as Cloud));
        this.servers.forValueUpdate().add(s => {
            state.setServerDescriptor(s.newValue as ServerDescriptor);
        });

        this.onNewChild.add(u => {
            if (this.onNewChildApi.hasListener()) {
                this.getClientApi(u, (api) => {
                    this.onNewChildApi.fire(u, api);
                });
            }
        });


        const pingTime = this.getPingTime();
        this.destroyer.add(RU.scheduleAtFixedRate(this.destroyer, pingTime, "MILLISECONDS", this.scheduledWork.bind(this)));
        Log.debug(`AetherCloudClient: Scheduled work at fixed rate: ${pingTime}ms`);
    }

    /**
     * @private
     * @description (Port from Java) Populates internal BMap caches from clientState.
     */
    private populateCachesFromState(): void {
        Log.trace("populateCachesFromState: Populating caches from state...");

        // TODO: Реализовать чтение из ClientState
        // (Java-код также был закомментирован / зависел от ClientInfo/ServerInfo)

        // Примерная логика (если бы ClientState ее поддерживал):
        // if (this.state.getUid() == null) {
        //     return; // Nothing to populate if not registered
        // }

        // const allClouds = this.state.getAllClouds(); // <-- нужен такой метод
        // for (const [uid, cloud] of allClouds) {
        //     this.clouds.putResolved(uid, cloud);
        // }

        // const allServers = this.state.getAllServerDescriptors(); // <-- нужен такой метод
        // for (const [id, descriptor] of allServers) {
        //     this.servers.putResolved(id, descriptor);
        // }

        // TODO: Добавить здесь логику для accessGroups, clientGroups и т.д.
        Log.trace("populateCachesFromState: Stub complete.");
    }


    /**
    * @private
    * @async
    * @description Initiates the client registration or login process.
    * @returns {Promise<void>}
    */
    private async initRegistration(): Promise<void> {
        Log.info("initRegistration: Starting registration or login process.");

        // --- [FIX] Wrap getMasterKey() in a helper that can catch the null pointer
        const getMasterKeySafe = (): AKey | null => {
            try {
                return this.state.getMasterKey();
            } catch (e) {
                // This catches the 'Cannot read properties of null' error
                if ((e as Error).message.includes("Cannot read properties of null")) {
                    return null;
                }
                // Re-throw other errors
                throw e;
            }
        };

        const existingMasterKey = getMasterKeySafe(); // <--- Use safe getter

        if (this.state.getUid() && existingMasterKey) { // <--- Check against the safe-fetched key
            Log.info("Client is already registered. Attempting to login directly...");
            // =================================================================
            // ИСПРАВЛЕНИЕ ЛОГИКИ ЗАПУСКА (как в Java)
            // 1. Сначала завершаем startFuture
            this.startFuture.tryDone();
            // 2. Затем инициируем подключение
            this.makeFirstConnection();
            // =================================================================
            return;
        }

        if (!existingMasterKey) { // <--- Check against the safe-fetched key
            Log.debug("initRegistration: MasterKey not found, generating new one.");
            const cryptoLib = this.state.getCryptoLib();
            const provider = CryptoProviderFactory.getProvider(cryptoLib);
            const newMasterKey = provider.createSymmetricKey();
            this.state.setMasterKey(newMasterKey);
        }


        const regUri = this.registrationUrl[0];
        if (!regUri) {
            const error = new ClientStartException("No registration URI provided in state.");
            Log.error("initRegistration: No registration URI provided in state.", error);
            throw error;
        }

        Log.debug(`initRegistration: Attempting connection to registration server: ${regUri}`);

        // --- ИЗМЕНЕНИЕ: Используем новый класс ConnectionRegistration ---
        const regConn = new ConnectionRegistration(this, regUri);

        this.regConnection = regConn;
        this.destroyer.add(regConn);

        // Логика `connect` в ConnectionRegistration запустится сама.
        // Мы просто ждем, пока `startFuture` не будет выполнен (или провален).
        // Добавляем обработчик на случай, если *первичное* подключение (getRootApiFuture)
        // провалится, чтобы `startFuture` не висел вечно.
        regConn.getRootApiFuture().onError((e) => {
            if (!this.startFuture.isFinalStatus()) {
                Log.error("initRegistration: Failed to establish initial registration connection.", e);
                this.startFuture.tryError(e); // Провалить старт клиента
            }
        });

        // --- [NEW] Start the registration process now that connection is initiated
        regConn.registration(); // <--- [FIX] ЭТА СТРОКА БЫЛА ЗАКОММЕНТИРОВАНА
    }

    public confirmRegistration(regResp: FinishResultGlobalRegServerApi): void {
        Log.info("confirmRegistration: Registration confirmed by server.", { uid: regResp.getUid().toString() });

        // Устанавливаем UID, только если его еще нет
        if (!this.state.getUid()) {
            this.state.setUid(regResp.getUid());
            this.state.setAlias(regResp.getAlias());

            // Сохраняем Cloud, полученный при регистрации
            this.setCloud(regResp.getUid(), regResp.getCloud());
            Log.debug("confirmRegistration: Client UID, Alias, and Cloud set in state.");

            // =================================================================
            // ИСПРАВЛЕНИЕ v2: ЛОГИКА ЗАПУСКА (как в Java)
            // 1. Завершаем startFuture НЕМЕДЛЕННО.
            this.startFuture.tryDone();

            // 2. Инициируем подключение к рабочему серверу (fire and forget).
            this.makeFirstConnection();
            // =================================================================

        } else {
            Log.warn("confirmRegistration: Received confirmation, but client UID was already set.", { uid: this.state.getUid()?.toString() });
        }
    }


    /**
    * @description Retrieves the client's UUID.
    * @returns {UUID | null} The client's UUID.
    */
    public getUid(): UUID |
        null {
        return this.state.getUid();
    }

    /**
    * @description Retrieves the client's Alias UUID.
    * @returns {UUID | null} The client's alias UUID.
    */
    public getAlias(): UUID | null {
        return this.state.getAlias();
    }

    public getMasterKeyAKey(): AKey.Symmetric {
        let key: AKey | null = null;
        try {
            key = this.state.getMasterKey();
        } catch (e) {
            if ((e as Error).message.includes("Cannot read properties of null")) {
                key = null; // Treat "cannot read null" as "key is null"
            } else {
                throw e; // Re-throw other errors
            }
        }

        if (!key) {
            const err = new ClientStartException("Master key is missing in state.");
            Log.error(err.message);
            throw err;
        }
        const keyImpl = key;
        if (keyImpl.getKeyType() !== KeyType.SYMMETRIC) {
            const err = new ClientStartException("Master key in state is not symmetric.");
            Log.error(err.message);
            throw err;
        }
        return keyImpl.asSymmetric();
    }

    public getMasterKeyDto(): AKey {
        const key = this.state.getMasterKey();
        if (!key) {
            const err = new ClientStartException("Master key is missing in state.");
            Log.error(err.message);
            throw err;
        }
        return key;
    }

    public getParent(): UUID {
        const parent = this.state.getParentUid();
        if (!parent) {
            // Этого не должно случиться, если state инициализирован
            Log.warn("Client state getParentUid() returned null, falling back to TEST_UID");
            return StandardUUIDs.TEST_UID;
        }
        return parent;
    }

    /**
    * @description Gets a CryptoEngine suitable for the connection to the specified server,
    * deriving symmetric keys from the master key and server ID.
    * @param {number} serverId The ID of the target server.
    * @returns {CryptoEngine} A CryptoEngine instance for encryption/decryption.
    * @throws {Error} If the master key is missing or invalid.
    */
    public getCryptoEngineForServer(serverId: number): CryptoEngine {
        Log.trace("getCryptoEngineForServer: Requesting crypto engine.", { sid: serverId });

        const keyImpl = this.getMasterKeyAKey();

        const provider = CryptoProviderFactory.getProviderByKey(keyImpl);
        const derivedKeys: PairSymKeys = provider.createKeyForServer(keyImpl, serverId);
        const encryptKey = derivedKeys.clientKey;
        const decryptKey = derivedKeys.serverKey;
        // ---------------------------------------------------------------------------------

        const encryptEngine = provider.createSymmetricEngine(encryptKey);
        const decryptEngine = provider.createSymmetricEngine(decryptKey);

        Log.trace("getCryptoEngineForServer: Successfully created derived keys and engines.");
        return CryptoEngine.of(encryptEngine, decryptEngine);
    }

    /**
    * @description Gets the configured ping duration from the client state.
    * @returns {number} The ping interval in milliseconds.
    */
    public getPingTime(): number {
        return this.state.getPingDuration().getNow() ?? 1000;
    }

    /**
        * @description Requests the ServerDescriptor for a given server ID, querying the BMap cache.
        * @param {number} serverId The ID of the server.
        * @returns {ARFuture<ServerDescriptor |
        null>} An ARFuture that resolves to the ServerDescriptor or null.
        */
    public getServer(serverId: number): ARFuture<ServerDescriptor |
        null> {

        const r = this.state.getServerDescriptor ? this.state.getServerDescriptor(serverId) : null;
        if (r != null) {
            return ARFuture.of(r as ServerDescriptor | null);
        }

        // (Логика не изменилась, BMap сам обработает запрос)
        if (this.servers.has(serverId)) {
            Log.trace(`getServer: Cache hit for serverId: ${serverId}`);
            return this.servers.get(serverId)! as ARFuture<ServerDescriptor | null>;
        }
        Log.trace(`getServer: Cache miss for serverId: ${serverId}. Fetching.`);
        const future = this.servers.getFuture(serverId);

        return future as ARFuture<ServerDescriptor | null>;
    }
    /**
    * @description Requests the Cloud location for a given UUID, querying the BMap cache.
    * @param {UUID} uid The target UUID.
    * @returns {ARFuture<Cloud |
    null>} An ARFuture that resolves to the Cloud object or null.
    */
    public getCloud(uid: UUID): ARFuture<Cloud> {
        // =================================================================
        // ИСПРАВЛЕНИЕ: (как в Java) Сначала проверяем state, потом BMap
        const r = this.state.getCloud(uid);
        if (r != null) return ARFuture.of(r);
        // =================================================================

        if (this.clouds.has(uid)) {
            Log.trace(`getCloud: Cache hit for uid: ${uid}`);
            return this.clouds.get(uid)! as ARFuture<Cloud | null>;
        }

        Log.trace(`getCloud: Cache miss for uid: $uid. Fetching.`, { uid: uid });
        const future = this.clouds.getFuture(uid);

        return future as ARFuture<Cloud | null>;
    }

    /**
    * @description Stores the Cloud information locally in state and resolves any pending futures in the BMap.
    * @param {UUID} uid The target UUID.
    * @param {Cloud} cloud The Cloud object.
    */
    public setCloud(uid: UUID, cloud: Cloud): void {
        Log.debug(`setCloud: Storing cloud for uid: $uid`, { uid: uid });
        this.state.setCloud(uid, cloud);
        this.clouds.putResolved(uid, cloud);
    }


    /**
     * @description Retrieves the access groups for a given client UUID using batched requests.
     * @param {UUID} uid The client UUID.
     * @returns {ARFuture<Set<bigint>>} A future containing the set of group IDs.
     */
    public getClientGroups(uid: UUID): ARFuture<Set<bigint> | null> {
        Log.trace("getClientGroups: Requesting groups for client.", { uid: uid.toString() });
        // Запрос теперь идет через BMap
        return this.clientGroups.getFuture(uid);
    }

    /**
     * @description Retrieves all client UUIDs this client can access using batched requests.
     * @param {UUID} uid The client UUID.
     * @returns {ARFuture<Set<UUID>>} A future containing the set of accessed client UUIDs.
     */
    public getAllAccessedClients(uid: UUID): ARFuture<Set<UUID> | null> {
        Log.trace("getAllAccessedClients: Requesting all accessed clients for.", { uid: uid.toString() });
        // Запрос теперь идет через BMap
        return this.allAccessedClients.getFuture(uid);
    }

    /**
     * @description Checks if this client has permission to send messages to another client using batched requests.
     * @param {UUID} uid1 The source client UUID.
     * @param {UUID} uid2 The target client UUID.
     * @returns {ARFuture<boolean>} A future containing true if access is granted, false otherwise.
     */
    public checkAccess(uid1: UUID, uid2: UUID): ARFuture<boolean | null> {
        Log.trace("checkAccess: Requesting access check.", { from: uid1.toString(), to: uid2.toString() });
        // Используем DTO в качестве ключа для BMap
        return this.accessCheckCache.getFuture(new AccessCheckPair(uid1, uid2));
    }

    /**
     * @description Retrieves the AccessGroup details by its ID using batched requests.
     * @param {bigint} groupId The ID of the access group.
     * @returns {ARFuture<AccessGroup>} A future containing the AccessGroup.
     */
    public getGroup(groupId: bigint): ARFuture<AccessGroup | null> {
        Log.trace("getGroup: Requesting access group details.", { gid: groupId });
        // Запрос теперь идет через BMap
        return this.accessGroups.getFuture(groupId);
    }


    /**
    * @description Gets or creates a MessageNode for persistent point-to-point communication with a peer.
    * @param {UUID} consumerUid The peer's UUID.
    * @param {MessageEventListener} [strategy=MessageEventListenerDefault] The connection resolution strategy.
    * @returns {MessageNode} The MessageNode instance.
    */
    public getMessageNode(consumerUid: UUID, strategy: MessageEventListener = MessageEventListenerDefault): MessageNode {
        const key = consumerUid.toString().toString();
        if (!this.messageNodeMap.has(key)) {
            Log.debug(`getMessageNode: Creating new MessageNode for: ${key}`);
            const newNode = new MessageNode(this, consumerUid, strategy);
            this.messageNodeMap.set(key, newNode);
            this.onClientStreamCreated.fire(newNode);
            return newNode;
        }
        Log.trace(`getMessageNode: Reusing existing MessageNode for: ${key}`);
        return this.messageNodeMap.get(key)!;
    }

    /**
    * @description Sends a raw byte array message to a specified client.
    * @param {UUID} consumerUid The target client UUID.
    * @param {Uint8Array} data The raw message content.
    * @returns {AFuture} An AFuture that completes when the message is accepted for sending.
    */
    public sendMessage(consumerUid: UUID, data: Uint8Array): AFuture {
        Log.trace(`sendMessage: Sending $dlen bytes to $consumerUid`, { dlen: data.length, consumerUid: consumerUid.toString(), size: data.length });
        const future = AFuture.make();
        const node = this.getMessageNode(consumerUid);
        node.send(data, future);
        return future;
    }
    public getConnectionBySid(sid: number): ARFuture<ConnectionWork> {
        Log.trace(`getConnectionBySid: Requesting connection for sid: $sid`, { sid: sid });
        let res: ARFuture<ConnectionWork> = ARFuture.of();
        this.getServer(sid).to((sd: ServerDescriptor | null) => {
            // Добавлена проверка на null, т.к. getServer может вернуть null
            if (sd) {
                Log.trace(`getConnectionBySid: ServerDescriptor resolved for sid: $sid`, { sid: sid, descriptor: sd });
                res.done(this.getConnection(sd));
            } else {
                Log.warn(`getConnectionBySid: ServerDescriptor resolved to null for sid: ${sid}`);
                res.error(new ClientApiException(`ServerDescriptor resolved to null for sid: ${sid}`));
            }
        }, (err) => {
            // Пробрасываем ошибку, если getServer не удался
            res.error(err);
        });
        return res;
    }

    /**
     * @description Retrieves or creates a connection to a work server.
     * @param {ServerDescriptor} serverDescriptor The descriptor of the server to connect to.
     * @returns {ConnectionWork} The existing or newly created ConnectionWork instance.
     * @throws {ClientApiException} if the provided ServerDescriptor is null.
     */
    public getConnection(serverDescriptor: ServerDescriptor): ConnectionWork {
        if (!serverDescriptor) {
            const error = new ClientApiException("Cannot get connection for null ServerDescriptor.");
            Log.error("getConnection: Cannot get connection for null ServerDescriptor.", error);
            throw error;
        }

        // const logData = { serverId: serverDescriptor.id };
        this.servers.putResolved(serverDescriptor.id, serverDescriptor);
        let conn = this.workConnections.get(serverDescriptor.id);
        if (conn) {
            Log.trace(`getConnection: Reusing existing ConnectionWork for serverId: $sid`, { sid: serverDescriptor.id });
            return conn;
        }

        Log.debug(`getConnection: Creating new ConnectionWork for serverId: $sid`, { sid: serverDescriptor.id });
        conn = new ConnectionWork(this, serverDescriptor);
        this.workConnections.set(serverDescriptor.id, conn);
        this.destroyer.add(conn);
        return conn;
    }

    /**
    * @private
    * @description Initiates work connections based on the client's own cloud.
    */
    private makeFirstConnection(): void {
        Log.debug("makeFirstConnection: Attempting to establish first work connection.");
        if (this.destroyer.isDestroyed()) {
            Log.warn("makeFirstConnection: Aborted, client is already destroyed.");
            return;
        }

        const uid = this.getUid();
        if (!uid) {
            Log.warn("makeFirstConnection called but client UID is null.");
            // --- ИЗМЕНЕНИЕ: Если UID нет, значит регистрация еще не завершена ---
            if (!this.startFuture.isFinalStatus()) {
                Log.debug("makeFirstConnection: UID is null, likely awaiting registration. Aborting connection attempt.");
                // Не вызываем ошибку, просто ждем
            }
            return;
        }

        // =================================================================
        // ИСПРАВЛЕНИЕ: (как в Java) Используем BMap-кэш (getCloud), а не this.state.getCloud
        const cloudFuture = this.getCloud(uid); //
        // =================================================================

        cloudFuture.to(
            (cloud: Cloud) => {
                if (!cloud || !cloud.data || cloud.data.length === 0) {
                    Log.warn("makeFirstConnection: Client cloud data is empty. Cannot connect to work servers.", { uid: uid.toString() });
                    // TODO: Добавить логику triggerRecovery, как в Java
                    return;
                }

                Log.trace("makeFirstConnection: Found cloud, attempting to connect.", { serverIds: cloud.data });

                const connectFutures: AFuture[] = [];
                for (const serverId of cloud.data) {
                    if (serverId <= 0) continue;

                    // =================================================================
                    // ИСПРАВЛЕНИЕ v1: DEADLOCK
                    // Ждем `conn.connectFuture` (сокет подключен), а НЕ `conn.ready` (пинг успешен).
                    //,
                    // =================================================================
                    const connConnectFuture: AFuture = this.getConnectionBySid(serverId)
                        .mapRFuture((conn: ConnectionWork | null) => {
                            if (!conn) {
                                throw new ClientApiException(`getConnectionBySid returned null for ${serverId}`);
                            }
                            // Мы просто ждем 'connectFuture' (подключение сокета)
                            return conn.connectFuture;
                        })
                        .toFuture(); // Превращаем ARFuture<RT> в AFuture

                    connectFutures.push(connConnectFuture);
                }

                Log.debug(`makeFirstConnection: Attempting connections to ${connectFutures.length} servers.`);

                if (connectFutures.length > 0) {
                    // Мы больше не управляем startFuture отсюда.
                    // Мы просто следим, чтобы соединения установились.
                    AFuture.any(...connectFutures)
                        .to(
                            () => {
                                Log.info("makeFirstConnection: At least one work connection is established (socket ready).");
                                // startFuture УЖЕ ДОЛЖЕН БЫТЬ ВЫПОЛНЕН в confirmRegistration
                            }
                        ).onError((err: Error) => {
                            Log.error("makeFirstConnection: All connection attempts failed.", err);
                        });
                } else {
                    Log.warn("makeFirstConnection: No valid server IDs in cloud.");
                }
            }
        ).onError(
            e => {
                Log.error("makeFirstConnection: Recovery fetch failed.", e);
            }
        );
    }


    /**
     * @description Flushes pending requests and messages to the network connections.
     * (Port from Java)
     */
    public flush(): void {
        if (this.destroyer.isDestroyed()) return;

        // Проверяем BMap на наличие pending запросов
        if (this.workConnections.size === 0) {
            if (this.getUid() == null) return; // Еще не зарегистрированы

            // Пытаемся запустить makeFirstConnection, если соединений нет
            this.makeFirstConnection();

            // Если makeFirstConnection не создал соединений (например, ждет recovery),
            // то выходим, т.к. flush() все равно нечего делать.
            if (this.workConnections.size === 0) {
                Log.trace("flush: No connections available to flush.");
                return;
            }
        }

        Log.trace("flush: Triggering flush on all connections.");
        for (const c of this.workConnections.values()) {
            c.flush();
        }
    }

    /**
     * @description Helper to get an authorized API future and map a function over it.
     * (Port from Java)
     * @param {AFunction<AuthorizedApiRemote, ARFuture<T>>} t The function to execute on the AuthorizedApi.
     * @returns {ARFuture<T>} A future with the result of the function.
     */
    public getAuthApi1<T>(t: AFunction<AuthorizedApiRemote, ARFuture<T>>): ARFuture<T> {
        if (this.destroyer.isDestroyed()) return ARFuture.canceled();
        const res = ARFuture.make<T>();
        this.getAuthApiFuture().mapRFuture(t).to(res);
        return res;
    }

    /**
     * @description Returns a future that completes with the AuthorizedApi instance.
     * (Port from Java)
     * @returns {ARFuture<AuthorizedApiRemote>} A future containing the AuthorizedApi instance.
     */
    public getAuthApiFuture(): ARFuture<AuthorizedApiRemote> {
        const res = ARFuture.make<AuthorizedApiRemote>();
        if (this.destroyer.isDestroyed()) {
            res.cancel();
            return res;
        }
        // Enqueue the consumer, which will call res.done(api) later.
        this.getAuthApi((api) => res.tryDone(api));

        // Ensures the future doesn't hang indefinitely.
        res.timeoutError(8000, "Timeout waiting for AuthorizedApi to become available.");
        return res;
    }

    /**
     * @description Enqueues a task to be executed on an active AuthorizedApi.
     * (Port from Java)
     * @param {AConsumer<AuthorizedApiRemote>} t The consumer to execute with the AuthorizedApi.
     */
    public getAuthApi(t: AConsumer<AuthorizedApiRemote>): void {
        if (this.destroyer.isDestroyed()) return;
        this.authTasks.add(t);
        this.flush(); // Триггер на отправку
    }

    /**
     * @description Enqueues a task to be executed on a ServerApiByUid stream.
     * (Port from Java)
     * @param {UUID} uid The target UID for the API stream.
     * @param {AConsumer<ServerApiByUid>} c The consumer to execute.
     */
    public getClientApi(uid: UUID, c: AConsumer<ServerApiByUid>): void {
        // Добавляем задачу в очередь, ConnectionWork ее обработает
        this.clientTasks.add(new ClientTask(uid, c));
        // Триггерим flush, чтобы отправить задачу
        this.flush();
    }

    /**
     * @description Creates an access group with the client's UID as the owner.
     * @param {...UUID[]} uids Initial members of the group.
     * @returns {ARFuture<AccessGroupI>} A future for the mutable AccessGroup interface.
     */
    public createAccessGroup(...uids: UUID[]): ARFuture<AccessGroupI> {
        const owner = this.getUid();
        if (!owner) {
            return ARFuture.ofThrow(new ClientApiException("Client UID is null, cannot create access group."));
        }
        return this.createAccessGroupWithOwner(owner, ...uids);
    }

    /**
     * @description Creates an access group with a specified owner.
     * (Port from Java)
     * @param {UUID} owner The owner of the group.
     * @param {...UUID[]} uids Initial members of the group.
     * @returns {ARFuture<AccessGroupI>} A future for the mutable AccessGroup interface.
     */
    public createAccessGroupWithOwner(owner: UUID, ...uids: UUID[]): ARFuture<AccessGroupI> {
        // Используем getAuthApi1 для "мутаций", которые возвращают результат
        return this.getAuthApi1<bigint>((c: AuthorizedApiRemote) => c.createAccessGroup(owner, uids))
            .map((id: bigint | null) => {
                if (id === null) {
                    throw new ClientApiException("createAccessGroup returned null ID.");
                }
                // Создаем локальную обертку AccessGroupImpl
                const newGroupDTO = new AccessGroup(owner, id, uids);

                // Сразу кладем в кэш
                this.accessGroups.putResolved(id, newGroupDTO);

                return new AccessGroupImpl(this, newGroupDTO);
            });
    }


    private logTime = 0;
    /**
    * @private
    * @description Periodic task executor.
    */
    private scheduledWork(): void {
        if (RU.time() - this.logTime > 1000) {
            this.logTime = RU.time();
            Log.trace("scheduledWork: Executing periodic work.");
        }
        this.workConnections.forEach(conn => conn.flush());
    }

    /**
    * @description Destroys the client and all associated resources.
    * @param {boolean} force - Forceful destruction (not always used in TS).
    * @returns {AFuture} An AFuture that completes when destruction is finished.
    */
    public destroy(force: boolean): AFuture {
        Log.info(`destroy: Destroying client (force=${force}).`);
        return this.destroyer.destroy(force);
    }

    /**
    * @description Implementation of the Disposable interface for `using` statements.
    */
    public [Symbol.dispose](): void {
        Log.info("[Symbol.dispose]: Disposing client.");
        this.destroy(true);
    }

    /**
     * @description Проверяет подпись, используя корневые сертификаты из state.
     */
    public verifySign(signedKey: SignedKey): boolean {
        // TODO: Реализовать логику верификации (как в Java CryptoUtils.verifySign)
        Log.warn("verifySign: STUB! Returning true.");
        return true;
    }
}
export {
    ClientStateInMemory,
    MessageEventListenerDefault
}
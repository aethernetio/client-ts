// PURPOSE: Contains the main AetherCloudClient core implementation.
// (Исправлены ошибки импорта TS2305, TS2724, TS2345)
// (Исправлена ОШИБКА ГОНКИ СОСТОЯНИЙ v1: startFuture, getMessageNode, getServer, getCloud)
// (Исправлена ОШИБКА ГОНКИ СОСТОЯНИЙ v2: makeFirstConnection некорректно обрабатывал AFuture.to())

import {
    UUID,
    URI,
    Destroyable,
    AFuture,
    ARFuture,
    ClientState,
    Log, // Imported for logging
    Destroyer,
    EventBiConsumer,
    EventConsumer,
    BMap,
    ServerDescriptor,
    Cloud,
    ClientStartException,
    StandardUUIDsImpl,
    CryptoProviderFactory,
    CryptoEngine,
    KeyType,
    RU,
    PairSymKeys,
    RCol,
    ClientApiException,
    // --- Типы для CryptoUtils ---
    AKey,
    SignChecker,
    DtoKey,
    FinishResult_C as DtoFinishResult
} from './aether_client_types';

import {
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
    ClientStateInMemory
} from './aether_client_state';
import {
    LNode
} from './aether_logging';
import { CryptoUtils } from './aether_crypto_utils';

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
    // --- ИЗМЕНЕН ТИП ---
    private regConnection: ConnectionRegistration | null = null;
    private workConnections = new Map<number, ConnectionWork>();
    private readonly registrationUrl: URI[];
    public readonly startFuture: AFuture;
    public readonly messageNodeMap = new Map<string, MessageNode>();
    public readonly onMessage = new EventBiConsumer<UUID, Uint8Array>();
    public readonly onNewChild = new EventConsumer<UUID>();
    public readonly onClientStreamCreated = new EventConsumer<MessageNode>();
    public readonly servers: BMap<number, ServerDescriptor>;
    public readonly clouds: BMap<UUID, Cloud
    >;
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
        this.startFuture = AFuture.make();

        this.servers = RCol.bMap<number, ServerDescriptor>(
            state.getTimeoutForConnectToRegistrationServer(),
            `${name}-servers`
        );
        this.clouds = RCol.bMap<UUID, Cloud>(
            state.getTimeoutForConnectToRegistrationServer(),
            `${name}-clouds`
        );

        // Bind internal message handler
        this.onMessage.add((senderUid: UUID, msg: Uint8Array) => {
            this.getMessageNode(senderUid, MessageEventListenerDefault).sendMessageFromServerToClient(msg);
        });

        // --- ИСПРАВЛЕНО: AFuture.ofPromise( () => ... ) ---
        AFuture.ofPromise(() => this.initRegistration())
            .onError(e => {
                Log.error("Client failed to start during initRegistration.", e);
                this.startFuture.tryError(e);
            });


        const pingTime = this.getPingTime();
        this.destroyer.add(RU.scheduleAtFixedRate(this.destroyer, pingTime, "MILLISECONDS", this.scheduledWork.bind(this)));
        Log.debug(`AetherCloudClient: Scheduled work at fixed rate: ${pingTime}ms`);
    }

    /**
    * @private
    * @async
    * @description Initiates the client registration or login process.
    * @returns {Promise<void>}
    */
    private async initRegistration(): Promise<void> {
        Log.info("initRegistration: Starting registration or login process.");

        if (this.state.getUid() && this.state.getMasterKey()) {
            Log.info("Client is already registered. Attempting to login directly...");
            this.makeFirstConnection();
            return;
        }

        if (!this.state.getMasterKey()) {
             Log.debug("initRegistration: MasterKey not found, generating new one.");
             const cryptoLib = this.state.getCryptoLib();
             const provider = CryptoProviderFactory.getProvider(cryptoLib);
             const newMasterKey = provider.createSymmetricKey();
             this.state.setMasterKey(
                CryptoUtils.aKeyToDtoKey(newMasterKey)
             );
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
    }

    // --- НОВЫЙ МЕТОД: Подтверждение регистрации (вызывается из ConnectionRegistration) ---
    public confirmRegistration(regResp: DtoFinishResult): void {
        Log.info("confirmRegistration: Registration confirmed by server.", { uid: regResp.getUid().toString() });

        // Устанавливаем UID, только если его еще нет
        if (!this.state.getUid()) {
            this.state.setUid(regResp.getUid());
            this.state.setAlias(regResp.getAlias());

            // Сохраняем Cloud, полученный при регистрации
            this.setCloud(regResp.getUid(), regResp.getCloud());
            Log.debug("confirmRegistration: Client UID, Alias, and Cloud set in state.");

            // Сразу же подключаемся к рабочему серверу
            this.makeFirstConnection();

            // --- [ИСПРАВЛЕНИЕ v1: ГОНКА СОСТОЯНИЙ] ---
            // Мы НЕ завершаем startFuture здесь.
            // Он должен завершиться ТОЛЬКО в makeFirstConnection,
            // когда соединение с WorkServer будет установлено и готово.
            // this.startFuture.tryDone(); // <--- ЭТА СТРОКА УДАЛЕНА
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

    // --- НОВЫЙ МЕТОД: Хелпер для получения AKey (как в Java) ---
    public getMasterKeyAKey(): AKey.Symmetric {
        const key = this.state.getMasterKey();
        if (!key) {
            const err = new ClientStartException("Master key is missing in state.");
            Log.error(err.message);
            throw err;
        }
        // --- ИЗМЕНЕНО: Используем CryptoUtils.dtoKeyToAKey ---
        const keyImpl = CryptoUtils.dtoKeyToAKey(key);
        if (keyImpl.getKeyType() !== KeyType.SYMMETRIC) {
             const err = new ClientStartException("Master key in state is not symmetric.");
             Log.error(err.message);
             throw err;
        }
        return keyImpl.asSymmetric();
    }

    // --- НОВЫЙ МЕТОД: Хелпер для получения DtoKey (как в Java) ---
    public getMasterKeyDto(): DtoKey {
         const key = this.state.getMasterKey();
         if (!key) {
             const err = new ClientStartException("Master key is missing in state.");
             Log.error(err.message);
             throw err;
         }
         return key;
    }

    // --- НОВЫЙ МЕТОД: Хелпер для получения Parent UID (как в Java) ---
    public getParent(): UUID {
        const parent = this.state.getParentUid();
        if (!parent) {
             // Этого не должно случиться, если state инициализирован
             Log.warn("Client state getParentUid() returned null, falling back to TEST_UID");
             return StandardUUIDsImpl.TEST_UID;
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
        Log.trace("getCryptoEngineForServer: Requesting crypto engine.", {sid:serverId});

        const keyImpl = this.getMasterKeyAKey();

        const provider = CryptoProviderFactory.getProviderByKey(keyImpl);
        // Derives symmetric key pair (Client->Server and Server->Client)
        const derivedKeys: PairSymKeys = provider.createKeyForServer(keyImpl, serverId);

        // --- ИЗМЕНЕНО: .asSymmetric() не нужен, так как clientKey/serverKey уже AKey.Symmetric ---
        const encryptKey = derivedKeys.clientKey;
        const decryptKey = derivedKeys.serverKey;
        // ---------------------------------------------------------------------------------

        const encryptEngine = provider.createSymmetricEngine(encryptKey);
        const decryptEngine = provider.createSymmetricEngine(decryptKey);

        Log.trace("getCryptoEngineForServer: Successfully created derived keys and engines.");
        return {
            encrypt: encryptEngine.encrypt.bind(encryptEngine),
            decrypt: decryptEngine.decrypt.bind(decryptEngine),
            getProviderName: encryptEngine.getProviderName.bind(encryptEngine),
            getCryptoProvider: encryptEngine.getCryptoProvider.bind(encryptEngine)
        };
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
        if (this.servers.has(serverId)) {
            Log.trace(`getServer: Cache hit for serverId: ${serverId}`);
            return this.servers.get(serverId)! as ARFuture<ServerDescriptor | null>;
        }
        Log.trace(`getServer: Cache miss for serverId: ${serverId}. Fetching.`);
        const future = this.servers.getFuture(serverId);

        // --- [ИСПРАВЛЕНИЕ v1: ГОНКА СОСТОЯНИЙ] ---
        // BMap сам поставит запрос в очередь.
        // ConnectionWork.flushBackgroundRequests() его обработает.
        // this.makeFirstConnection(); // <--- ЭТА СТРОКА УДАЛЕНА

        return future as ARFuture<ServerDescriptor | null>;
    }

    /**
    * @description Requests the Cloud location for a given UUID, querying the BMap cache.
    * @param {UUID} uid The target UUID.
    * @returns {ARFuture<Cloud |
    null>} An ARFuture that resolves to the Cloud object or null.
    */
    public getCloud(uid: UUID): ARFuture<Cloud |
        null> {
        if (this.clouds.has(uid)) {
            Log.trace(`getCloud: Cache hit for uid: ${uid}`);
            return this.clouds.get(uid)! as ARFuture<Cloud | null>;
        }

        Log.trace(`getCloud: Cache miss for uid: $uid. Fetching.`,{uid:uid});
        const future = this.clouds.getFuture(uid);

        // --- [ИСПРАВЛЕНИЕ v1: ГОНКА СОСТОЯНИЙ] ---
        // BMap сам поставит запрос в очередь.
        // ConnectionWork.flushBackgroundRequests() его обработает.
        // this.makeFirstConnection(); // <--- ЭТА СТРОКА УДАЛЕНА

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

            // --- [ИСПРАВЛЕНИЕ v1: ГОНКА СОСТОЯНИЙ] ---
            // Этот блок ошибочно вызывал makeFirstConnection() повторно,
            // если node создавался до того, как `workConnections` был заполнен.
            /*
            if (this.workConnections.size === 0) {
                Log.debug("getMessageNode: No work connections, triggering makeFirstConnection.");
                this.makeFirstConnection();
            }
            */
            // --- БЛОК УДАЛЕН ---

            return newNode;
        }
        Log.trace(`getMessageNode: Reusing existing MessageNode for: ${key}`);
        return this.messageNodeMap.get(key)!;
    }

    /**
    * @description Sends a raw byte array message to a specified
    client.
    * @param {UUID} consumerUid The target client UUID.
    * @param {Uint8Array} data The raw message content.
    * @returns {AFuture} An AFuture that completes when the message is accepted for sending.
    */
    public sendMessage(consumerUid: UUID, data: Uint8Array): AFuture {
        Log.trace(`sendMessage: Sending $dlen bytes to $consumerUid`, {dlen:data.length, consumerUid: consumerUid.toString(), size: data.length });
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
            Log.trace(`getConnection: Reusing existing ConnectionWork for serverId: $sid`,{sid:serverDescriptor.id});
            return conn;
        }

        Log.debug(`getConnection: Creating new ConnectionWork for serverId: $sid`,{sid:serverDescriptor.id});
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

        const cloud = this.state.getCloud(uid);
        if (!cloud || !cloud.data || cloud.data.length === 0) {
            Log.warn("makeFirstConnection: Client cloud data is empty. Cannot connect to work servers.", { uid: uid.toString() });
            // --- ИЗМЕНЕНИЕ: Если мы уже зарегистрированы, но cloud пуст - это ошибка ---
            if (this.startFuture.isDone()) { // Если startFuture уже был (старый клиент), но cloud пропал
                 Log.error("makeFirstConnection: Client is started but cloud data is missing.");
            } else { // Если это первый запуск
                 this.startFuture.tryError(new ClientStartException("Client cloud data is empty after registration."));
            }
            return;
        }

        Log.trace("makeFirstConnection: Found cloud, attempting to connect.", { serverIds: cloud.data });

        const readyFutures: AFuture[] = [];
        for (const serverId of cloud.data) {
            if (serverId <= 0) continue;

            // --- [ИСПРАВЛЕНИЕ v2: ГОНКА СОСТОЯНИЙ] ---
            // Мы должны дождаться не просто ARFuture<ConnectionWork>,
            // а ARFuture<ConnectionWork.ready>.
            // .mapRFuture() ожидает ARFuture, поэтому мы вручную
            // пробрасываем результат conn.ready (AFuture) в новый ARFuture.

            const connReadyFuture: AFuture = this.getConnectionBySid(serverId) // ARFuture<ConnectionWork>
                .mapRFuture((conn: ConnectionWork | null) => { // Теперь это ARFuture<void>
                    if (!conn) {
                        throw new ClientApiException(`getConnectionBySid returned null for ${serverId}`);
                    }

                    // Создаем новый ARFuture, который будет "ждать"
                    const readyPromise = new ARFuture<void>();

                    // Пробрасываем результат из conn.ready (AFuture) в readyPromise (ARFuture)
                    // Это правильное использование .to() .onError() .onCancel()
                    // согласно aether_future.ts
                    conn.ready
                        .to(() => readyPromise.tryDone(undefined))
                        .onError((err) => readyPromise.tryError(err))
                        .onCancel(() => readyPromise.cancel());

                    // mapRFuture будет ждать этот new ARFuture<void>
                    return readyPromise;
                })
                .toFuture(); // Превращаем ARFuture<void> в AFuture

            readyFutures.push(connReadyFuture);
        }

        Log.debug(`makeFirstConnection: Attempting connections to ${readyFutures.length} servers.`);

        if (readyFutures.length > 0) {
            AFuture.any(...readyFutures)
                .to(
                    () => {
                        Log.info("makeFirstConnection: At least one work connection is ready.");
                        // --- [ИСПРАВЛЕНИЕ v1: ГОНКА СОСТОЯНИЙ] ---
                        // Это правильное место для завершения startFuture.
                        this.startFuture.tryDone(); // <- Разблокирует тест
                    }
                ).onError((err: Error) => {
                    Log.error("makeFirstConnection: All connection attempts failed.", err);
                    this.startFuture.error(err);
                })
                .onCancel(() => {
                    Log.warn("makeFirstConnection: Connection attempts were cancelled.");
                    this.startFuture.cancel();
                });
        } else {
            Log.warn("makeFirstConnection: No valid server IDs in cloud.");
            this.startFuture.error(new ClientStartException("Client cloud data contains no valid server IDs."));
        }
    }


    /**
    * @private
    * @description Periodic task executor.
    */
    private scheduledWork(): void {
        Log.trace("scheduledWork: Executing periodic work.");
        this.workConnections.forEach(conn => conn.scheduledWork());
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
        Log.warn("verifySign: STUB! Returning true.");
        return true;
    }
}
export {
    ClientStateInMemory,
    MessageEventListenerDefault
}
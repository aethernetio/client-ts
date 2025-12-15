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
    ClientState
} from './aether_client_state';
import {
    LNode,
    Log
} from './aether_logging';
import { AConsumer, AFunction, ClientApiException, ClientStartException, Destroyable, URI, UUID } from './aether_types';
import { Destroyer, RU, StandardUUIDs, Queue } from './aether_utils';
import { AFuture, ARFuture, EventBiConsumer, EventConsumer } from './aether_future';
import {
    Cloud,
    FinishResult,
    ServerDescriptor,
    AccessGroup,
    AuthorizedApiRemote,
    ServerApiByUid,
    AccessCheckPair,
} from './aether_api';
import { BMap, RCol } from './aether_rcollection';
import { applySodium } from './aether_crypto_sodium';

/**
 * @enum RegStatus
 * @description Registration status enumeration
 */
export enum RegStatus { NO, BEGIN, CONFIRM }

/**
 * @interface AccessGroupI
 * @description Public interface for interacting with a mutable access group
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
 * @description Internal implementation of the mutable access group interface
 * @implements {AccessGroupI}
 */
class AccessGroupImpl implements AccessGroupI {
    private client: AetherCloudClient;
    public id: bigint;
    public owner: UUID;
    public data: Set<UUID>;

    /**
     * @constructor
     * @param {AetherCloudClient} client Client instance
     * @param {AccessGroup} group Access group
     */
    constructor(client: AetherCloudClient, group: AccessGroup) {
        this.client = client;
        this.id = group.getId();
        this.owner = group.getOwner();
        this.data = new Set(group.getData());
    }

    /**
     * @method add
     * @description Add UUID to access group
     * @param {UUID} uuid UUID to add
     * @returns {ARFuture<boolean>} Future indicating success
     */
    add(uuid: UUID): ARFuture<boolean> {
        if (this.data.has(uuid)) {
            Log.trace("AccessGroupImpl.add: UUID already in local cache", { uuid: uuid.toString(), group: this.id });
            return ARFuture.of(false);
        }

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

        this.client.flush();
        return future;
    }

    /**
     * @method remove
     * @description Remove UUID from access group
     * @param {UUID} uuid UUID to remove
     * @returns {ARFuture<boolean>} Future indicating success
     */
    remove(uuid: UUID): ARFuture<boolean> {
        if (!this.data.has(uuid)) {
            Log.trace("AccessGroupImpl.remove: UUID not in local cache", { uuid: uuid.toString(), group: this.id });
            return ARFuture.of(false);
        }

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

        this.client.flush();
        return future;
    }
}

/**
 * @class ClientTask
 * @description Internal class to hold tasks for getClientApi
 */
export class ClientTask {
    public readonly uid: UUID;
    public readonly task: AConsumer<ServerApiByUid>;

    /**
     * @constructor
     * @param {UUID} uid Client UUID
     * @param {AConsumer<ServerApiByUid>} task Task to execute
     */
    constructor(uid: UUID, task: AConsumer<ServerApiByUid>) {
        this.uid = uid;
        this.task = task;
    }
}

/**
 * @class AetherCloudClient
 * @description Main client class managing connections, state, and communication logic
 * @implements {Destroyable}
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
     * Batched cache for client access groups
     * Key: Client UUID, Value: Set of Group IDs
     */
    public readonly clientGroups: BMap<UUID, Set<bigint>>;

    /**
     * Batched cache for AccessGroup definitions
     * Key: Group ID, Value: AccessGroup object
     */
    public readonly accessGroups: BMap<bigint, AccessGroup | null>;

    /**
     * Batched cache for all clients accessible by a given client
     * Key: Client UUID, Value: Set of accessible Client UUIDs
     */
    public readonly allAccessedClients: BMap<UUID, Set<UUID>>;

    /**
     * Batched cache for access check results
     * Key: AccessCheckPair (source, target), Value: Boolean (hasAccess)
     */
    public readonly accessCheckCache: BMap<AccessCheckPair, boolean>;
    public readonly accessOperationsAdd = new Map<bigint, Map<string, ARFuture<boolean>>>();
    public readonly accessOperationsRemove = new Map<bigint, Map<string, ARFuture<boolean>>>();
    public readonly authTasks = new Queue<AConsumer<AuthorizedApiRemote>>();
    public readonly clientTasks = new Queue<ClientTask>();
    public readonly onNewChildApi = new EventBiConsumer<UUID, ServerApiByUid>();

    /**
     * @constructor
     * @param {ClientState} state Client state implementation
     * @param {string} name Descriptive name for the client
     */
    constructor(state: ClientState, name: string) {
        this.state = state;
        this.name = name;
        this.destroyer = new Destroyer(name + '-client');
        this.logClientContext = Log.of({
            component: name
        });

        Log.info("AetherCloudClient: Initializing");

        this.registrationUrl = state.getRegistrationUri();

        const timeout = state.getTimeoutForConnectToRegistrationServer();
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
        Log.debug("AetherCloudClient: Scheduled work at fixed rate",{pingTime:pingTime});
    }

    /**
     * @private
     * @method populateCachesFromState
     * @description Populate internal BMap caches from clientState
     */
    private populateCachesFromState(): void {
        Log.trace("populateCachesFromState: Populating caches from state");
        Log.trace("populateCachesFromState: Stub complete");
    }

    /**
     * @method connect
     * @description Connect client to server
     * @returns {AFuture} Future indicating connection completion
     */
    public connect(): AFuture {
        if (this.beginConnect) {
            return this.startFuture0;
        }
        this.beginConnect = true;
        AFuture.ofPromise(() => this.initRegistration())
            .onError(e => {
                Log.error("Client failed to start during initRegistration", e);
                this.startFuture.tryError(e);
            });
        this.startFuture.to(() => {
            this.forceUpdateStateFromCache().to(() => {
                this.startFuture0.done();
            });
        })
        return this.startFuture0;
    }

    /**
     * @private
     * @method forceUpdateStateFromCache
     * @description Force update state from cache
     * @returns {AFuture} Future indicating completion
     */
    private forceUpdateStateFromCache(): AFuture {
        const resultFuture = AFuture.make();
        const uid = this.getUid();
        if (!uid) {
            const err = new Error("Client UID is null. Cannot update state from cache.");
            Log.error(err.message);
            return AFuture.ofThrow(err);
        }

        Log.debug("forceUpdateStateFromCache: Forcing fetch and save for own UID", { uid: uid.toString() });

        this.getCloud(uid).to((cloud: Cloud | null) => {
            if (!cloud) {
                const err = new Error("Fetched cloud was null for UID: " + uid);
                Log.error(err.message);
                return resultFuture.error(err);
            }

            this.state.setCloud(uid, cloud);
            Log.trace("forceUpdateStateFromCache: Own cloud saved to state", { uid: uid.toString() });

            const sids = cloud.data;
            if (!sids || sids.length === 0) {
                Log.warn("forceUpdateStateFromCache: Client's own cloud is empty. State updated");
                return resultFuture.tryDone();
            }

            const serverFutures = sids.map(sid => this.getServer(sid));

            ARFuture.all(serverFutures).to(() => {
                Log.trace("forceUpdateStateFromCache: All server descriptors fetched. Saving to state");

                for (const future of serverFutures) {
                    const desc = future.getNow();
                    if (desc) {
                        this.state.setServerDescriptor(desc);
                    } else {
                        Log.warn("forceUpdateStateFromCache: ServerDescriptor was null after ARFuture.all");
                    }
                }

                Log.debug("forceUpdateStateFromCache: Force update for own UID complete", { uid: uid.toString() });
                resultFuture.tryDone();

            }).onError(e => {
                Log.error("forceUpdateStateFromCache: Failed to fetch server descriptors", e, { uid: uid.toString() });
                resultFuture.error(e);
            });

        }).onError(e => {
            Log.error("forceUpdateStateFromCache: Failed to fetch own cloud", e, { uid: uid.toString() });
            resultFuture.error(e);
        });

        return resultFuture;
    }

    /**
     * @private
     * @async
     * @method initRegistration
     * @description Initiate client registration or login process
     */
    private async initRegistration(): Promise<void> {
        Log.info("initRegistration: Starting registration or login process");

        const getMasterKeySafe = (): AKey | null => {
            try {
                return this.state.getMasterKey();
            } catch (e) {
                if ((e as Error).message.includes("Cannot read properties of null")) {
                    return null;
                }
                throw e;
            }
        };

        const existingMasterKey = getMasterKeySafe();

        if (this.state.getUid() && existingMasterKey) {
            Log.info("Client is already registered. Attempting to login directly");
            this.startFuture.tryDone();
            this.makeFirstConnection();
            return;
        }

        if (!existingMasterKey) {
            Log.debug("initRegistration: MasterKey not found, generating new one");
            const cryptoLib = this.state.getCryptoLib();
            const provider = CryptoProviderFactory.getProvider(cryptoLib);
            const newMasterKey = provider.createSymmetricKey();
            this.state.setMasterKey(newMasterKey);
        }

        const regUri = this.registrationUrl[0];
        if (!regUri) {
            const error = new ClientStartException("No registration URI provided in state");
            Log.error("initRegistration: No registration URI provided in state", error);
            throw error;
        }

        Log.debug("initRegistration: Attempting connection to registration server",{regUri:regUri});

        const regConn = new ConnectionRegistration(this, regUri);

        this.regConnection = regConn;
        this.destroyer.add(regConn);

        regConn.getRootApiFuture().onError((e) => {
            if (!this.startFuture.isFinalStatus()) {
                Log.error("initRegistration: Failed to establish initial registration connection", e);
                this.startFuture.tryError(e);
            }
        });

        regConn.registration();
    }

    /**
     * @method confirmRegistration
     * @description Confirm registration completion
     * @param {FinishResult} regResp Registration response
     */
    public confirmRegistration(regResp: FinishResult): void {
        Log.info("confirmRegistration: Registration confirmed by server", { uid: regResp.getUid().toString() });

        if (!this.state.getUid()) {
            this.state.setUid(regResp.getUid());
            this.state.setAlias(regResp.getAlias());

            this.setCloud(regResp.getUid(), regResp.getCloud());
            Log.debug("confirmRegistration: Client UID, Alias, and Cloud set in state");

            this.startFuture.tryDone();

            this.makeFirstConnection();

        } else {
            Log.warn("confirmRegistration: Received confirmation, but client UID was already set", { uid: this.state.getUid()?.toString() });
        }
    }

    /**
     * @method getUid
     * @description Get client UUID
     * @returns {UUID | null} Client UUID
     */
    public getUid(): UUID | null {
        return this.state.getUid();
    }

    /**
     * @method getAlias
     * @description Get client alias
     * @returns {UUID | null} Client alias
     */
    public getAlias(): UUID | null {
        return this.state.getAlias();
    }

    /**
     * @method getMasterKeyAKey
     * @description Get master key as symmetric key
     * @returns {AKey.Symmetric} Master symmetric key
     */
    public getMasterKeyAKey(): AKey.Symmetric {
        let key: AKey | null = null;
        try {
            key = this.state.getMasterKey();
        } catch (e) {
            if ((e as Error).message.includes("Cannot read properties of null")) {
                key = null;
            } else {
                throw e;
            }
        }

        if (!key) {
            const err = new ClientStartException("Master key is missing in state");
            Log.error(err.message);
            throw err;
        }
        const keyImpl = key;
        if (keyImpl.getKeyType() !== KeyType.SYMMETRIC) {
            const err = new ClientStartException("Master key in state is not symmetric");
            Log.error(err.message);
            throw err;
        }
        return keyImpl.asSymmetric();
    }

    /**
     * @method getMasterKeyDto
     * @description Get master key as DTO
     * @returns {AKey} Master key
     */
    public getMasterKeyDto(): AKey {
        const key = this.state.getMasterKey();
        if (!key) {
            const err = new ClientStartException("Master key is missing in state");
            Log.error(err.message);
            throw err;
        }
        return key;
    }

    /**
     * @method getParent
     * @description Get parent UUID
     * @returns {UUID} Parent UUID
     */
    public getParent(): UUID {
        const parent = this.state.getParentUid();
        if (!parent) {
            Log.warn("Client state getParentUid() returned null, falling back to TEST_UID");
            return StandardUUIDs.TEST_UID;
        }
        return parent;
    }

    /**
     * @method getCryptoEngineForServer
     * @description Get crypto engine for server
     * @param {number} serverId Server ID
     * @returns {CryptoEngine} Crypto engine
     */
    public getCryptoEngineForServer(serverId: number): CryptoEngine {
        Log.debug("getCryptoEngineForServer: Requesting crypto engine", { sid: serverId });

        const keyImpl = this.getMasterKeyAKey();

        const provider = CryptoProviderFactory.getProviderByKey(keyImpl);
        const derivedKeys: PairSymKeys = provider.createKeyForServer(keyImpl, serverId);
        const encryptKey = derivedKeys.clientKey;
        const decryptKey = derivedKeys.serverKey;

        const encryptEngine = provider.createSymmetricEngine(encryptKey);
        const decryptEngine = provider.createSymmetricEngine(decryptKey);

        Log.trace("getCryptoEngineForServer: Successfully created derived keys and engines");
        return CryptoEngine.of(encryptEngine, decryptEngine);
    }

    /**
     * @method getPingTime
     * @description Get ping interval
     * @returns {number} Ping interval in milliseconds
     */
    public getPingTime(): number {
        return this.state.getPingDuration().getNow() ?? 1000;
    }

    /**
     * @method getServer
     * @description Get server descriptor
     * @param {number} serverId Server ID
     * @returns {ARFuture<ServerDescriptor | null>} Server descriptor future
     */
    public getServer(serverId: number): ARFuture<ServerDescriptor | null> {

        const r = this.state.getServerDescriptor ? this.state.getServerDescriptor(serverId) : null;
        if (r != null) {
            return ARFuture.of(r as ServerDescriptor | null);
        }

        if (this.servers.has(serverId)) {
            Log.trace("getServer: Cache hit",{serverId:serverId});
            return this.servers.get(serverId)! as ARFuture<ServerDescriptor | null>;
        }
        Log.trace("getServer: Cache miss",{serverId:serverId});
        const future = this.servers.getFuture(serverId);

        return future as ARFuture<ServerDescriptor | null>;
    }

    /**
     * @method getCloud
     * @description Get cloud data
     * @param {UUID} uid Client UUID
     * @returns {ARFuture<Cloud>} Cloud data future
     */
    public getCloud(uid: UUID): ARFuture<Cloud> {
        const r = this.state.getCloud(uid);
        if (r != null) {
            return ARFuture.of(r);
        }

        if (this.clouds.has(uid)) {
            Log.trace("getCloud: Cache hit",{uid:uid});
            return this.clouds.get(uid)! as ARFuture<Cloud | null>;
        }

        Log.trace("getCloud: Cache miss", { uid: uid });
        const future = this.clouds.getFuture(uid);

        return future as ARFuture<Cloud | null>;
    }

    /**
     * @method setCloud
     * @description Set cloud data
     * @param {UUID} uid Client UUID
     * @param {Cloud} cloud Cloud data
     */
    public setCloud(uid: UUID, cloud: Cloud): void {
        Log.debug("setCloud: Storing cloud", { uid: uid });
        this.state.setCloud(uid, cloud);
        this.clouds.putResolved(uid, cloud);
    }

    /**
     * @method getClientGroups
     * @description Get client groups
     * @param {UUID} uid Client UUID
     * @returns {ARFuture<Set<bigint> | null>} Client groups future
     */
    public getClientGroups(uid: UUID): ARFuture<Set<bigint> | null> {
        Log.trace("getClientGroups: Requesting groups for client", { uid: uid.toString() });
        return this.clientGroups.getFuture(uid);
    }

    /**
     * @method getAllAccessedClients
     * @description Get all accessed clients
     * @param {UUID} uid Client UUID
     * @returns {ARFuture<Set<UUID> | null>} Accessed clients future
     */
    public getAllAccessedClients(uid: UUID): ARFuture<Set<UUID> | null> {
        Log.trace("getAllAccessedClients: Requesting all accessed clients", { uid: uid.toString() });
        return this.allAccessedClients.getFuture(uid);
    }

    /**
     * @method checkAccess
     * @description Check access between clients
     * @param {UUID} uid1 Source client UUID
     * @param {UUID} uid2 Target client UUID
     * @returns {ARFuture<boolean | null>} Access check result future
     */
    public checkAccess(uid1: UUID, uid2: UUID): ARFuture<boolean | null> {
        Log.trace("checkAccess: Requesting access check", { from: uid1.toString(), to: uid2.toString() });
        return this.accessCheckCache.getFuture(new AccessCheckPair(uid1, uid2));
    }

    /**
     * @method getGroup
     * @description Get access group
     * @param {bigint} groupId Group ID
     * @returns {ARFuture<AccessGroup | null>} Access group future
     */
    public getGroup(groupId: bigint): ARFuture<AccessGroup | null> {
        Log.trace("getGroup: Requesting access group details", { gid: groupId });
        return this.accessGroups.getFuture(groupId);
    }

    /**
     * @method getMessageNode
     * @description Get or create message node
     * @param {UUID} consumerUid Peer UUID
     * @param {MessageEventListener} strategy Connection resolution strategy
     * @returns {MessageNode} Message node
     */
    public getMessageNode(consumerUid: UUID, strategy: MessageEventListener = MessageEventListenerDefault): MessageNode {
        const key = consumerUid.toString().toString();
        if (!this.messageNodeMap.has(key)) {
            Log.debug("getMessageNode: Creating new MessageNode",{key:key});
            const newNode = new MessageNode(this, consumerUid, strategy);
            this.messageNodeMap.set(key, newNode);
            this.onClientStreamCreated.fire(newNode);
            return newNode;
        }
        Log.trace("getMessageNode: Reusing existing MessageNode",{key:key});
        return this.messageNodeMap.get(key)!;
    }

    /**
     * @method sendMessage
     * @description Send message to client
     * @param {UUID} consumerUid Target client UUID
     * @param {Uint8Array} data Message data
     * @returns {AFuture} Send completion future
     */
    public sendMessage(consumerUid: UUID, data: Uint8Array): AFuture {
        Log.trace("sendMessage: Sending bytes", { dlen: data.length, consumerUid: consumerUid.toString(), size: data.length });
        const future = AFuture.make();
        const node = this.getMessageNode(consumerUid);
        node.send(data, future);
        return future;
    }

    /**
     * @method getConnectionBySid
     * @description Get connection by server ID
     * @param {number} sid Server ID
     * @returns {ARFuture<ConnectionWork>} Connection future
     */
    public getConnectionBySid(sid: number): ARFuture<ConnectionWork> {
        Log.trace("getConnectionBySid: Requesting connection", { sid: sid });
        let res: ARFuture<ConnectionWork> = ARFuture.of();
        this.getServer(sid).to((sd: ServerDescriptor | null) => {
            if (sd) {
                Log.trace("getConnectionBySid: ServerDescriptor resolved", { sid: sid, descriptor: sd });
                res.done(this.getConnection(sd));
            } else {
                Log.warn("getConnectionBySid: ServerDescriptor resolved to null",{sid:sid});
                res.error(new ClientApiException(`ServerDescriptor resolved to null for sid: ${sid}`));
            }
        }, (err) => {
            res.error(err);
        });
        return res;
    }

    /**
     * @method getConnection
     * @description Get or create connection to server
     * @param {ServerDescriptor} serverDescriptor Server descriptor
     * @returns {ConnectionWork} Connection
     */
    public getConnection(serverDescriptor: ServerDescriptor): ConnectionWork {
        if (!serverDescriptor) {
            const error = new ClientApiException("Cannot get connection for null ServerDescriptor");
            Log.error("getConnection: Cannot get connection for null ServerDescriptor", error);
            throw error;
        }

        this.servers.putResolved(serverDescriptor.id, serverDescriptor);
        let conn = this.workConnections.get(serverDescriptor.id);
        if (conn) {
            Log.trace("getConnection: Reusing existing ConnectionWork", { sid: serverDescriptor.id });
            return conn;
        }

        Log.debug("getConnection: Creating new ConnectionWork", { sid: serverDescriptor.id });
        conn = new ConnectionWork(this, serverDescriptor);
        this.workConnections.set(serverDescriptor.id, conn);
        this.destroyer.add(conn);
        return conn;
    }

    /**
     * @private
     * @method makeFirstConnection
     * @description Initiate first connection to work server
     */
    private makeFirstConnection(): void {
        Log.debug("makeFirstConnection: Attempting to establish first work connection");
        if (this.destroyer.isDestroyed()) {
            Log.warn("makeFirstConnection: Aborted, client is already destroyed");
            return;
        }

        const uid = this.getUid();
        if (!uid) {
            Log.warn("makeFirstConnection called but client UID is null");
            if (!this.startFuture.isFinalStatus()) {
                Log.debug("makeFirstConnection: UID is null, likely awaiting registration. Aborting connection attempt");
            }
            return;
        }

        const cloudFuture = this.getCloud(uid);

        cloudFuture.to(
            (cloud: Cloud) => {
                if (!cloud || !cloud.data || cloud.data.length === 0) {
                    Log.warn("makeFirstConnection: Client cloud data is empty. Cannot connect to work servers", { uid: uid.toString() });
                    return;
                }

                Log.trace("makeFirstConnection: Found cloud, attempting to connect", { serverIds: cloud.data });

                const connectFutures: AFuture[] = [];
                for (const serverId of cloud.data) {
                    if (serverId <= 0) {
                        continue;
                    }

                    const connConnectFuture: AFuture = this.getConnectionBySid(serverId)
                        .mapRFuture((conn: ConnectionWork | null) => {
                            if (!conn) {
                                throw new ClientApiException(`getConnectionBySid returned null for ${serverId}`);
                            }
                            return conn.connectFuture;
                        })
                        .toFuture();

                    connectFutures.push(connConnectFuture);
                }

                Log.debug("makeFirstConnection: Attempting connections to servers", { count: connectFutures.length });

                if (connectFutures.length > 0) {
                    AFuture.any(...connectFutures)
                        .to(
                            () => {
                                Log.info("makeFirstConnection: At least one work connection is established");
                            }
                        ).onError((err: Error) => {
                            Log.error("makeFirstConnection: All connection attempts failed", err);
                        });
                } else {
                    Log.warn("makeFirstConnection: No valid server IDs in cloud");
                }
            }
        ).onError(
            e => {
                Log.error("makeFirstConnection: Recovery fetch failed", e);
            }
        );
    }

    /**
     * @method flush
     * @description Flush pending requests and messages
     */
    public flush(): void {
        if (this.destroyer.isDestroyed()) {
            return;
        }

        if (this.workConnections.size === 0) {
            if (this.getUid() == null) {
                return;
            }

            this.makeFirstConnection();

            if (this.workConnections.size === 0) {
                Log.trace("flush: No connections available to flush");
                return;
            }
        }

        Log.trace("flush: Triggering flush on all connections");
        for (const c of this.workConnections.values()) {
            c.flush();
        }
    }

    /**
     * @method getAuthApi1
     * @description Get authorized API with function mapping
     * @param {AFunction<AuthorizedApiRemote, ARFuture<T>>} t Function to execute
     * @returns {ARFuture<T>} Result future
     */
    public getAuthApi1<T>(t: AFunction<AuthorizedApiRemote, ARFuture<T>>): ARFuture<T> {
        if (this.destroyer.isDestroyed()) {
            return ARFuture.canceled();
        }
        const res = ARFuture.make<T>();
        this.getAuthApiFuture().mapRFuture(t).to(res);
        return res;
    }

    /**
     * @method getAuthApiFuture
     * @description Get authorized API future
     * @returns {ARFuture<AuthorizedApiRemote>} Authorized API future
     */
    public getAuthApiFuture(): ARFuture<AuthorizedApiRemote> {
        const res = ARFuture.make<AuthorizedApiRemote>();
        if (this.destroyer.isDestroyed()) {
            res.cancel();
            return res;
        }
        this.getAuthApi((api) => res.tryDone(api));

        res.timeoutError(8000, "Timeout waiting for AuthorizedApi to become available");
        return res;
    }

    /**
     * @method getAuthApi
     * @description Get authorized API
     * @param {AConsumer<AuthorizedApiRemote>} t Consumer to execute
     */
    public getAuthApi(t: AConsumer<AuthorizedApiRemote>): void {
        if (this.destroyer.isDestroyed()) {
            return;
        }
        this.authTasks.add(t);
        this.flush();
    }

    /**
     * @method getClientApi
     * @description Get client API
     * @param {UUID} uid Target UUID
     * @param {AConsumer<ServerApiByUid>} c Consumer to execute
     */
    public getClientApi(uid: UUID, c: AConsumer<ServerApiByUid>): void {
        this.clientTasks.add(new ClientTask(uid, c));
        this.flush();
    }

    /**
     * @method createAccessGroup
     * @description Create access group
     * @param {...UUID[]} uids Initial members
     * @returns {ARFuture<AccessGroupI>} Access group future
     */
    public createAccessGroup(...uids: UUID[]): ARFuture<AccessGroupI> {
        const owner = this.getUid();
        if (!owner) {
            return ARFuture.ofThrow(new ClientApiException("Client UID is null, cannot create access group"));
        }
        return this.createAccessGroupWithOwner(owner, ...uids);
    }

    /**
     * @method createAccessGroupWithOwner
     * @description Create access group with owner
     * @param {UUID} owner Owner UUID
     * @param {...UUID[]} uids Initial members
     * @returns {ARFuture<AccessGroupI>} Access group future
     */
    public createAccessGroupWithOwner(owner: UUID, ...uids: UUID[]): ARFuture<AccessGroupI> {
        return this.getAuthApi1<bigint>((c: AuthorizedApiRemote) => c.createAccessGroup(owner, uids))
            .map((id: bigint | null) => {
                if (id === null) {
                    throw new ClientApiException("createAccessGroup returned null ID");
                }
                const newGroupDTO = new AccessGroup(owner, id, uids);

                this.accessGroups.putResolved(id, newGroupDTO);

                return new AccessGroupImpl(this, newGroupDTO);
            });
    }

    private logTime = 0;

    /**
     * @private
     * @method scheduledWork
     * @description Execute scheduled work with connection health monitoring
     */
    private scheduledWork(): void {
        if (RU.time() - this.logTime > 1000) {
            this.logTime = RU.time();
            Log.trace("scheduledWork: Executing periodic work");
        }

        const deadConnections: number[] = [];
        this.workConnections.forEach((conn, serverId) => {
            if (conn.connectFuture.isError()) {
                // [Fix] Access getErrorTimestamp directly from connection object, not the future
                const errorTime = conn.getErrorTimestamp();
                if (errorTime && RU.time() - errorTime > 30000) {
                    Log.warn("Removing dead connection", {
                        serverId,
                        error: conn.connectFuture.getError()?.message
                    });
                    deadConnections.push(serverId);
                }
            }

            if (conn.connectFuture.isDone() && !conn.connectFuture.isError()) {
                conn.scheduledWork();
            }
        });

        deadConnections.forEach(serverId => {
            const conn = this.workConnections.get(serverId);
            if (conn) {
                // [Fix] Use destroy(true) instead of close()
                conn.destroy(true);
                this.workConnections.delete(serverId);
            }
        });

        if (this.workConnections.size === 0 && this.getUid() && !this.destroyer.isDestroyed()) {
            const hasActiveWork = Array.from(this.workConnections.values())
                .some(conn => conn.connectFuture.isDone() && !conn.connectFuture.isError());

            if (!hasActiveWork) {
                Log.info("No active work connections, attempting to reconnect");
                this.makeFirstConnection();
            }
        }
    }

    /**
     * @method destroy
     * @description Destroy client
     * @param {boolean} force Force destruction
     * @returns {AFuture} Destruction completion future
     */
    public destroy(force: boolean): AFuture {
        Log.info("destroy: Destroying client",{force:force});
        return this.destroyer.destroy(force);
    }

    /**
     * @method verifySign
     * @description Verify signature (stub)
     * @param {SignedKey} signedKey Signed key
     * @returns {boolean} True if verified
     */
    public verifySign(signedKey: SignedKey): boolean {
        Log.warn("verifySign: STUB! Returning true");
        return true;
    }
}

export * as aetherApi from './aether_api';
export * from './aether_utils';
export * from './aether_future';
export * from './aether_logging';
export * from './aether_types';
export * from './aether_client_message';
export * from './aether_client_state';
export * from './aether_astring';
export * from './aether_fastmeta';
export * from './aether_fastmeta_net';
export * from './aether_datainout';
export * from './aether_rcollection';
export {applySodium} from './aether_crypto_sodium';
export * as aCrypto from './aether_crypto';
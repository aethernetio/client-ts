// FILE: aether_client.ts
// PURPOSE: Contains the main AetherCloudClient core implementation.

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
    RegistrationRootApi,
    RegistrationRootApiRemote,
    StandardUUIDsImpl,
    CryptoProviderFactory,
    CryptoEngine,
    KeyType,
    DtoKey,
    RU,
    PairSymKeys,
    RCol,
    FastMetaApi,
    ClientApiException
} from './aether_client_types';
import {
    Connection
} from './aether_client_connection_base';
import {
    ConnectionWork
} from './aether_client_connection_work';
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
import { dtoKeyToAKey } from './aether_key_util';
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
    private regConnection: Connection<RegistrationRootApi, RegistrationRootApiRemote> | null = null;
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

        Log.info("AetherCloudClient: Initializing...", this.logClientContext.data);

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
        // Start registration and scheduled tasks
        AFuture.ofPromise(() => this.initRegistration())
            .to(this.startFuture)
            .onError(e => this.startFuture.error(e));

        const pingTime = this.getPingTime();
        this.destroyer.add(RU.scheduleAtFixedRate(this.destroyer, pingTime, "MILLISECONDS", this.scheduledWork.bind(this)));
        Log.debug(`AetherCloudClient: Scheduled work at fixed rate: ${pingTime}ms`, this.logClientContext.data);
    }

    /**
    * @private
    * @async
    * @description Initiates the client registration or login process.
    * @returns {Promise<void>}
    */
    private async initRegistration(): Promise<void> {
        Log.info("initRegistration: Starting registration or login process.", this.logClientContext.data);
        if (this.state.getUid() && this.state.getMasterKey()) {
            Log.info("Client is already registered. Attempting to login directly...", this.logClientContext.data);
            this.makeFirstConnection();
            return;
        }


        const regUri = this.registrationUrl[0];
        if (!regUri) {
            const error = new ClientStartException("No registration URI provided in state.");
            Log.error("initRegistration: No registration URI provided in state.", error, this.logClientContext.data);
            throw error;
        }

        Log.debug(`initRegistration: Attempting connection to registration server: ${regUri}`, this.logClientContext.data);
        const regConn = new Connection(
            this, regUri, RegistrationRootApi.META as FastMetaApi<RegistrationRootApi, RegistrationRootApiRemote>, RegistrationRootApi.META as FastMetaApi<RegistrationRootApi, RegistrationRootApiRemote>
        ) as Connection<RegistrationRootApi, RegistrationRootApiRemote>;
        this.regConnection = regConn;
        this.destroyer.add(regConn);

        const remoteApi = await regConn.getRootApiFuture().toPromise();
        Log.info("Connected to registration server. Retrieving key.", this.logClientContext.data);

        const cryptoLib = this.state.getCryptoLib();
        await remoteApi.getAsymmetricPublicKey(cryptoLib).toPromise();

        Log.warn("Registration successful (simulated). Proceeding to work phase.", this.logClientContext.data);
        this.state.setUid(StandardUUIDsImpl.TEST_UID);
        this.state.setAlias(StandardUUIDsImpl.TEST_UID);
        /** Use Sodium DTO as the explicit master key DTO */
        const stubKeyData = new Uint8Array(32).fill(1);
        const apiModule = require('./aether_api');
        const DtoConstructor = cryptoLib === apiModule.CryptoLib.SODIUM
            ? apiModule.SodiumChacha20Poly1305
            : apiModule.HydrogenSecretBox;
        const stubMasterKeyDto: DtoKey = new DtoConstructor(stubKeyData);

        this.state.setMasterKey(stubMasterKeyDto);
        Log.debug("initRegistration: State UID and MasterKey set (simulated).", this.logClientContext.data);

        this.makeFirstConnection();
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

    /**
    * @description Gets a CryptoEngine suitable for the connection to the specified server,
    * deriving symmetric keys from the master key and server ID.
    * @param {number} serverId The ID of the target server.
    * @returns {CryptoEngine} A CryptoEngine instance for encryption/decryption.
    * @throws {Error} If the master key is missing or invalid.
    */
    public getCryptoEngineForServer(serverId: number): CryptoEngine {
        const logData = { ...this.logClientContext.data, serverId };
        Log.trace("getCryptoEngineForServer: Requesting crypto engine.", logData);

        const key = this.state.getMasterKey();
        if (!key) {
            const error = new Error("Master key is missing.");
            Log.error("getCryptoEngineForServer: Master key is missing.", error, logData);
            throw error;
        }

        const keyImpl = dtoKeyToAKey(key);
        if (keyImpl.getKeyType() !== KeyType.SYMMETRIC) {
            const error = new Error("Master key is not symmetric.");
            Log.error("getCryptoEngineForServer: Master key is not symmetric.", error, logData);
            throw error;
        }

        const provider = CryptoProviderFactory.getProviderByKey(keyImpl);
        // Derives symmetric key pair (Client->Server and Server->Client)
        const derivedKeys: PairSymKeys = provider.createKeyForServer(keyImpl.asSymmetric(), serverId);

        const encryptKey = derivedKeys.clientKey.asSymmetric();
        const decryptKey = derivedKeys.serverKey.asSymmetric();
        const encryptEngine = provider.createSymmetricEngine(encryptKey);
        const decryptEngine = provider.createSymmetricEngine(decryptKey);

        Log.trace("getCryptoEngineForServer: Successfully created derived keys and engines.", logData);
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
        const logData = { ...this.logClientContext.data, serverId };
        if (this.servers.has(serverId)) {
            Log.trace(`getServer: Cache hit for serverId: ${serverId}`, logData);
            return this.servers.get(serverId)! as ARFuture<ServerDescriptor | null>;
        }
        Log.trace(`getServer: Cache miss for serverId: ${serverId}. Fetching.`, logData);
        const future = this.servers.getFuture(serverId);
        this.makeFirstConnection();
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
        const logData = { ...this.logClientContext.data, targetUid: uid.toString() };
        if (this.clouds.has(uid)) {
            Log.trace(`getCloud: Cache hit for uid: ${uid}`, logData);
            return this.clouds.get(uid)! as ARFuture<Cloud | null>;
        }

        Log.trace(`getCloud: Cache miss for uid: ${uid}. Fetching.`, logData);
        const future = this.clouds.getFuture(uid);
        this.makeFirstConnection();
        return future as ARFuture<Cloud | null>;
    }

    /**
    * @description Stores the Cloud information locally in state and resolves any pending futures in the BMap.
    * @param {UUID} uid The target UUID.
    * @param {Cloud} cloud The Cloud object.
    */
    public setCloud(uid: UUID, cloud: Cloud): void {
        Log.debug(`setCloud: Storing cloud for uid: ${uid}`, { ...this.logClientContext.data, targetUid: uid.toString(), cloudData: cloud.data });
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
        const logData = { ...this.logClientContext.data, consumerUid: key };
        if (!this.messageNodeMap.has(key)) {
            Log.debug(`getMessageNode: Creating new MessageNode for: ${key}`, logData);
            const newNode = new MessageNode(this, consumerUid, strategy);
            this.messageNodeMap.set(key, newNode);
            this.onClientStreamCreated.fire(newNode);
            if (this.workConnections.size === 0) {
                Log.debug("getMessageNode: No work connections, triggering makeFirstConnection.", logData);
                this.makeFirstConnection();
            }
            return newNode;
        }
        Log.trace(`getMessageNode: Reusing existing MessageNode for: ${key}`, logData);
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
        Log.trace(`sendMessage: Sending ${data.length} bytes to ${consumerUid}`, { ...this.logClientContext.data, consumerUid: consumerUid.toString(), size: data.length });
        const future = AFuture.make();
        const node = this.getMessageNode(consumerUid);
        node.send(data, future);
        return future;
    }
    public getConnectionBySid(sid: number): ARFuture<ConnectionWork> {
        Log.trace(`getConnectionBySid: Requesting connection for sid: ${sid}`, { ...this.logClientContext.data, serverId: sid });
        let res: ARFuture<ConnectionWork> = ARFuture.of();
        this.getServer(sid).to((sd:ServerDescriptor) => {
            Log.trace(`getConnectionBySid: ServerDescriptor resolved for sid: ${sid}`, { ...this.logClientContext.data, serverId: sid, descriptor: sd });
            res.done(this.getConnection(sd));
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
            Log.error("getConnection: Cannot get connection for null ServerDescriptor.", error, this.logClientContext.data);
            throw error;
        }

        const logData = { ...this.logClientContext.data, serverId: serverDescriptor.id };
        this.servers.putResolved(serverDescriptor.id, serverDescriptor);
        let conn = this.workConnections.get(serverDescriptor.id);
        if (conn) {
            Log.trace(`getConnection: Reusing existing ConnectionWork for serverId: ${serverDescriptor.id}`, logData);
            return conn;
        }

        Log.debug(`getConnection: Creating new ConnectionWork for serverId: ${serverDescriptor.id}`, logData);
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
        Log.debug("makeFirstConnection: Attempting to establish first work connection.", this.logClientContext.data);
        if (this.destroyer.isDestroyed()) {
            Log.warn("makeFirstConnection: Aborted, client is already destroyed.", this.logClientContext.data);
            return;
        }

        const uid = this.getUid();
        if (!uid) {
            Log.warn("makeFirstConnection called but client UID is null.", this.logClientContext.data);
            return;
        }

        const cloud = this.state.getCloud(uid);
        if (!cloud || !cloud.data || cloud.data.length === 0) {
            Log.warn("makeFirstConnection: Client cloud data is empty. Cannot connect to work servers.", { ...this.logClientContext.data, uid: uid.toString() });
            return;
        }

        Log.trace("makeFirstConnection: Found cloud, attempting to connect.", { ...this.logClientContext.data, serverIds: cloud.data });

        const readyFutures: AFuture[] = [];
        for (const serverId of cloud.data) {
            if (serverId <= 0) continue;
            readyFutures.push(this.getConnectionBySid(serverId).toFuture());
        }

        Log.debug(`makeFirstConnection: Attempting connections to ${readyFutures.length} servers.`, this.logClientContext.data);

        if (readyFutures.length > 0) {
            AFuture.any(...readyFutures)
                .to(
                    () => {
                        Log.info("makeFirstConnection: At least one work connection is ready.", this.logClientContext.data);
                        this.startFuture.tryDone();
                    }
                ).onError((err: Error) => {
                    Log.error("makeFirstConnection: All connection attempts failed.", err, this.logClientContext.data);
                    this.startFuture.error(err);
                })
                .onCancel(() => {
                    Log.warn("makeFirstConnection: Connection attempts were cancelled.", this.logClientContext.data);
                    this.startFuture.cancel();
                });
        } else {
            Log.warn("makeFirstConnection: No valid server IDs in cloud.", this.logClientContext.data);
            this.startFuture.error(new ClientStartException("Client cloud data contains no valid server IDs."));
        }
    }


    /**
    * @private
    * @description Periodic task executor.
    */
    private scheduledWork(): void {
        Log.trace("scheduledWork: Executing periodic work.", this.logClientContext.data);
        this.workConnections.forEach(conn => conn.scheduledWork());
    }

    /**
    * @description Destroys the client and all associated resources.
    * @param {boolean} force - Forceful destruction (not always used in TS).
    * @returns {AFuture} An AFuture that completes when destruction is finished.
    */
    public destroy(force: boolean): AFuture {
        Log.info(`destroy: Destroying client (force=${force}).`, this.logClientContext.data);
        return this.destroyer.destroy(force);
    }

    /**
    * @description Implementation of the Disposable interface for `using` statements.
    */
    public [Symbol.dispose](): void {
        Log.info("[Symbol.dispose]: Disposing client.", this.logClientContext.data);
        this.destroy(true);
    }
}
export {
    ClientStateInMemory,
    MessageEventListenerDefault
}
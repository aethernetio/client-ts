// FILE: aether_client.ts
// PURPOSE: Contains the main AetherCloudClient core implementation.

import {
    UUID,
    URI,
    Destroyable,
    AFuture,
    ARFuture,
    ClientState,
    Log,
    LNode,
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
    AKey,
    DtoKey,
    CryptoLib,
    RU,
    PairSymKeys,
    RCol
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

import { dtoKeyToAKey } from './aether_key_util';
/**
* @class AetherCloudClient
* @implements {Destroyable}
* @description Main client class managing connections, state, and communication
logic.
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

        this.destroyer.add(RU.scheduleAtFixedRate(this.destroyer, this.getPingTime(), "MILLISECONDS", this.scheduledWork.bind(this)));
    }

    /**
    * @private
    * @async
    * @description Initiates the client registration or login process.
    * @returns {Promise<void>}
    */
    private async initRegistration(): Promise<void> {
        /** @ignore */
        using _l = Log.context(this.logClientContext);
        if (this.state.getUid() && this.state.getMasterKey()) {
            Log.info("Client is already registered. Attempting to login directly...");
            this.makeFirstConnection();
            return;
        }


        const regUri = this.registrationUrl[0];
        if (!regUri) {
            throw new ClientStartException("No registration URI provided in state.");
        }

        /** @type {Connection<RegistrationRootApi, RegistrationRootApiRemote>} */
        const regConn = new Connection(
            this, regUri, RegistrationRootApi.META as any, RegistrationRootApi.META as any
        ) as Connection<RegistrationRootApi, RegistrationRootApiRemote>;
        this.regConnection = regConn;
        this.destroyer.add(regConn);

        const remoteApi = await regConn.getRootApiFuture().toPromise();
        Log.info("Connected to registration server. Retrieving key.");

        const cryptoLib = this.state.getCryptoLib();
        const signedKey = await remoteApi.getAsymmetricPublicKey(cryptoLib).toPromise();

        Log.warn("Registration successful (simulated). Proceeding to work phase.");
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
        const key = this.state.getMasterKey();
        if (!key) throw new Error("Master key is missing.");

        const keyImpl = dtoKeyToAKey(key);
        if (keyImpl.getKeyType() !== KeyType.SYMMETRIC) throw new Error("Master key is not symmetric.");

        const provider = CryptoProviderFactory.getProviderByKey(keyImpl);
        // Derives symmetric key pair (Client->Server and Server->Client)
        const derivedKeys: PairSymKeys = provider.createKeyForServer(keyImpl.asSymmetric(), serverId);

        const encryptKey = derivedKeys.clientKey.asSymmetric();
        const decryptKey = derivedKeys.serverKey.asSymmetric();

        const encryptEngine = provider.createSymmetricEngine(encryptKey);
        const decryptEngine = provider.createSymmetricEngine(decryptKey);
        return {
            /** @inheritDoc */
            encrypt: encryptEngine.encrypt.bind(encryptEngine),
            /** @inheritDoc */
            decrypt: decryptEngine.decrypt.bind(decryptEngine),
            /** @inheritDoc */
            getProviderName: encryptEngine.getProviderName.bind(encryptEngine),
            /** @inheritDoc */
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
            return this.servers.get(serverId)! as ARFuture<ServerDescriptor | null>;
        }
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
        if (this.clouds.has(uid)) {
            return this.clouds.get(uid)! as ARFuture<Cloud | null>;
        }

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
        const key = consumerUid.toString();
        if (!this.messageNodeMap.has(key)) {
            const newNode = new MessageNode(this, consumerUid, strategy);
            this.messageNodeMap.set(key, newNode);
            this.onClientStreamCreated.fire(newNode);
            if (this.workConnections.size === 0) {
                this.makeFirstConnection();
            }
            return newNode;
        }
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
        const future = AFuture.make();
        const node = this.getMessageNode(consumerUid);
        node.send(data, future);
        return future;
    }

    /**
    * @private
    * @description Placeholder method to initiate work connections (not fully implemented in snippet).
    */
    private makeFirstConnection(): void {
        // TODO: This logic needs to be fully implemented based on Java behavior
        // (e.g., get cloud, get server, create ConnectionWork)
        Log.trace("makeFirstConnection called (implementation pending)");
    }

    /**
    * @private
    * @description Periodic task executor.
    */
    private scheduledWork(): void {
        // TODO: Implement periodic work (e.g., flushing work connections)
        // Log.trace("Scheduled work executing...");
        this.workConnections.forEach(conn => conn.scheduledWork());
    }

    /**
    * @description Destroys the client and all associated resources.
    * @param {boolean} force - Forceful destruction (not always used in TS).
    * @returns {AFuture} An AFuture that completes when destruction is finished.
    */
    public destroy(force: boolean): AFuture {
        return this.destroyer.destroy(force);
    }

    /**
    * @description Implementation of the Disposable interface for `using` statements.
    */
    public [Symbol.dispose](): void {
        this.destroy(true);
    }
}
export {
    ClientStateInMemory,
    MessageEventListenerDefault
}

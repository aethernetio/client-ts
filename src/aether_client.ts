// =============================================================================================
// FILE: aether_client.ts
// PURPOSE: Contains Client State, Connection abstractions, and the AetherCloudClient core.
// DEPENDENCIES: aether_types.ts, aether_utils.ts, aether_logging.ts, aether_future.ts,
//               aether_rcollection.ts, aether_crypto.ts, aether_fastmeta.ts, aether_api.ts
// (Refactored based on Java sources)
// =============================================================================================

import {
    UUID, URI, AtomicLong, AtomicReference, ConcurrentLinkedQueue_C, Destroyable, AConsumer, AFunction, ABiConsumer,
    ClientStartException, ClientApiException, ClientTimeoutException, ARunnable, Disposable
} from './aether_types';
import { Log, LNode } from './aether_logging';
import { RU, Destroyer, StandardUUIDsImpl, HexUtils } from './aether_utils';
import {
    AFuture, ARFuture, AMFuture, EventConsumer, EventBiConsumer, createAMFuture, ARFutureWithFlag
} from './aether_future';
import { BMap, RCol, RMap } from './aether_rcollection';
import {
    SignedKey as CryptoSignedKey,
    SignChecker,
    KeyUtil,
    CryptoEngine,
    CryptoProviderFactory,
    AKey,
    SignedKeyUtil,
    KeyType,
    PairAsymKeys,
    PairSignKeys,
    Signer,
    Sign,
    SignedKey,
    Key as CryptoKey // Alias to avoid clash with DtoKey
} from './aether_crypto';
import {
    FastMetaClient, FastMetaApi, FastApiContext, RemoteApi, RemoteApiFuture, FastApiContextLocal
} from './aether_fastmeta';
import {
    // DTOs and Enums
    Key as DtoKey, CryptoLib, Cloud, ServerDescriptor, FinishResultGlobalRegServerApi as FinishResult_C,
    WorkProofDTO, PowMethod, Message, AccessGroup, ClientInfo as ClientInfoDTO,
    SignedKey as DtoSignedKey,
    AetherCodec,
    UUIDAndCloud,
    ClientStateForSave,

    // APIs
    ClientApiUnsafe, LoginApi, LoginApiRemote, RegistrationRootApi, RegistrationRootApiRemote,
    ClientApiRegUnsafe,
    ServerRegistrationApi, ServerRegistrationApiStream, ServerRegistrationApiRemote,
    GlobalApiRegistrationServerRegistrationApi, GlobalRegClientApi,
    GlobalRegClientApiStream, GlobalRegServerApi, GlobalRegServerApiRemote,
    ClientApiRegSafe, ClientApiRegSafeStream,
    LoginStream, AuthorizedApi, AuthorizedApiRemote, ClientApiSafe,
    ClientApiStream, LoginClientStream,
    ServerApiByUid, ServerApiByUidRemote,

    // Concrete IP Address types
    IPAddressV4, IPAddressV6, IPAddress, AllCustomMeta // Import AllCustomMeta for array serializers
} from './aether_api';
import { DataInOut, DataInOutStatic } from './aether_datainout';
import { FastMetaClientWebSocket } from './aether_fastmeta_websocket';

// =============================================================================================
// Helper Types / Enums
// =============================================================================================

/**
 * Represents the current registration status of the client.
 */
export enum RegStatus {
    /** No registration attempt made or previous attempt failed. */
    NO,
    /** Registration process initiated. */
    BEGIN,
    /** Registration successfully confirmed by the server. */
    CONFIRM
}

// =============================================================================================
// SECTION 11: CLIENT INTERFACES, BASE CLASSES, AND TYPES
// =============================================================================================

/**
 * Interface defining the methods to access and modify the client's persistent state.
 */
export interface ClientState {
    /** Gets the client's unique identifier. Returns null if not registered. */
    getUid(): UUID | null;
    /** Sets the client's unique identifier. */
    setUid(uid: UUID): void;
    /** Gets the client's alias identifier. Returns null if not set or not registered. */
    getAlias(): UUID | null;
    /** Sets the client's alias identifier. */
    setAlias(alias: UUID | null): void;
    /** Sets the client's master symmetric key. */
    setMasterKey(key: DtoKey): void;
    /** Gets the client's master symmetric key. Returns null if not set. */
    getMasterKey(): DtoKey | null;
    /** Gets or creates information holder for a specific server ID. */
    getServerInfo(sid: number): ClientState.ServerInfo;
    /** Gets the cached ServerDescriptor for a server ID, if available. */
    getServerDescriptor(serverId: number): ServerDescriptor | null;
    /** Gets or creates information holder for a specific client UUID. */
    getClientInfo(uid: UUID): ClientState.ClientInfo;
    /** Sets the cloud information for a specific client UUID. */
    setCloud(uid: UUID, cloud: Cloud): void;
    /** Gets the cached cloud information for a specific client UUID, if available. */
    getCloud(uid: UUID): Cloud | null;
    /** Gets the list of known registration server URIs. */
    getRegistrationUri(): URI[];
    /** Gets the reactive future representing the desired ping interval. */
    getPingDuration(): AMFuture<number>;
    /** Gets the UUID of the client's parent. */
    getParentUid(): UUID;
    /** Sets the UUID of the client's parent. */
    setParentUid(uid: UUID): void;
    /** Gets the preferred cryptographic library for this client. */
    getCryptoLib(): CryptoLib;
    /** Gets the set of trusted root signers for verifying server keys. */
    getRootSigners(): Set<SignChecker>;
    /** Gets the timeout (in ms) for connecting to a registration server. */
    getTimeoutForConnectToRegistrationServer(): number;
    /** Gets the number of registration servers to attempt connection with simultaneously. */
    getCountServersForRegistration(): number;
    /** Serializes the current client state into a byte array. */
    save(): Uint8Array;
    /** Loads the client state from a byte array. */
    load(data: Uint8Array): void;
}
export namespace ClientState {
    /** Holds information about a known server. */
    export interface ServerInfo {
        /** Gets the server ID. */
        getServerId(): number;
        /** Gets the cached ServerDescriptor, if available. */
        getDescriptor(): ServerDescriptor | null;
        /** Sets the ServerDescriptor for this server. */
        setDescriptor(serverDescriptor: ServerDescriptor): void;
    }
    /** Holds information about another known client. */
    export interface ClientInfo {
        /** Gets the client's UUID. */
        getUid(): UUID;
        /** Gets the cached Cloud information, if available. */
        getCloud(): Cloud | null;
        /** Sets the Cloud information for this client. */
        setCloud(cloud: Cloud): void;
    }
}

// --- ClientStateInMemory Implementation ---
/**
 * In-memory implementation of the ClientState interface.
 * @implements {ClientState}
 */
export class ClientStateInMemory implements ClientState {
    private uid: UUID | null = null;
    private alias: UUID | null = null;
    private masterKey: DtoKey | null = null;
    private servers = new Map<number, ClientState.ServerInfo>();
    private clients = new Map<string, ClientState.ClientInfoMutable>(); // Use mutable internal class
    private registrationUris: URI[] = [];
    private pingDuration = createAMFuture<number>(1000); // Default 1 second
    private parentUid: UUID;
    private cryptoLib: CryptoLib = CryptoLib.HYDROGEN;
    private rootSigners: Set<SignChecker> = new Set();
    private timeoutForConnectToRegistrationServer = 5000; // Default 5 seconds
    private countServersForRegistration = 1; // Default 1 server

    /**
     * Creates an instance of ClientStateInMemory.
     * Can be initialized either with registration details or by loading from saved data.
     * @param {UUID | Uint8Array | null} arg1 - Parent UUID, saved state data (Uint8Array), or null.
     * @param {URI[]} [arg2] - List of registration URIs (required if arg1 is UUID).
     * @param {Set<SignChecker>} [arg3] - Initial set of root signers.
     * @param {CryptoLib} [arg4] - Preferred crypto library.
     */
    constructor(arg1: UUID | Uint8Array | null, arg2?: URI[], arg3?: Set<SignChecker>, arg4?: CryptoLib) {
        if (arg1 instanceof Uint8Array) {
            // Constructor used for loading from saved state
            this.parentUid = StandardUUIDsImpl.ANONYMOUS_UID; // Placeholder, will be overwritten by load()
            this.load(arg1);
        } else if (arg1 instanceof UUID && arg2 instanceof Array) {
            // Constructor used for initial setup
            if (!arg1) throw new Error("Parent UID cannot be null for initial setup");
            this.parentUid = arg1;
            this.registrationUris = arg2.slice(); // Copy array
            this.uid = null; // Not registered yet
            this.cryptoLib = arg4 ?? CryptoLib.HYDROGEN;
            if (arg3) this.rootSigners = new Set(arg3);
            this.addDefaultRootSigners();
        } else if (arg1 === null && arg2 instanceof Array) {
             // Allow null parent for anonymous client setup if needed by logic downstream
             this.parentUid = StandardUUIDsImpl.ANONYMOUS_UID; // Default if null explicitly passed
             this.registrationUris = arg2.slice();
             this.uid = null;
             this.cryptoLib = arg4 ?? CryptoLib.HYDROGEN;
             if (arg3) this.rootSigners = new Set(arg3);
             this.addDefaultRootSigners();
        }
         else {
             throw new Error("Invalid ClientStateInMemory constructor arguments");
        }
        // Ensure parentUid is set after potential load
        if (!this.parentUid && this.uid) {
            Log.warn("Parent UID was missing after loading state, defaulting to ANONYMOUS_UID");
            this.parentUid = StandardUUIDsImpl.ANONYMOUS_UID;
        } else if (!this.parentUid) {
            // This should ideally not happen if constructors are used correctly
             Log.error("Parent UID is mandatory and was not provided or loaded correctly.", new Error("Missing Parent UID"));
             this.parentUid = StandardUUIDsImpl.ANONYMOUS_UID; // Fallback
        }
    }


    /**
     * Adds default known root signers if they are not already present.
     * @private
     */
    private addDefaultRootSigners(): void {
        const defaultSigners = [
            "SODIUM:4F202A94AB729FE9B381613AE77A8A7D89EDAB9299C3320D1A0B994BA710CCEB", // Key string includes type implicitly
            "HYDROGEN:883B4D7E0FB04A38CA12B3A451B00942048858263EE6E6D61150F2EF15F40343"
        ];
        const existingKeys = new Set(Array.from(this.rootSigners).map(s => s.getPublicKey().keyToString()));

        for (const keyString of defaultSigners) {
             // Extract public key part for comparison
             const pubKeyString = keyString.includes(':') ? keyString.split(':').slice(0, 2).join(':') + ':' + keyString.split(':')[2] : keyString;
             let found = false;
             for(const existing of existingKeys){
                 if (existing.toUpperCase().endsWith(pubKeyString.split(':')[2].toUpperCase())){
                     found = true;
                     break;
                 }
             }
            if (!found) {
                try {
                    this.rootSigners.add(SignChecker.of(keyString));
                } catch (e) {
                    Log.error("Failed to add default root signer", e as Error, { keyString });
                }
            }
        }
    }

    /** @inheritdoc */
    getUid(): UUID | null { return this.uid; }
    /** @inheritdoc */
    setUid(uid: UUID): void { this.uid = uid; }
    /** @inheritdoc */
    getAlias(): UUID | null { return this.alias; }
    /** @inheritdoc */
    setAlias(alias: UUID | null): void { this.alias = alias; }
    /** @inheritdoc */
    setMasterKey(key: DtoKey): void { this.masterKey = key; }
    /** @inheritdoc */
    getMasterKey(): DtoKey | null { return this.masterKey; }

    /** @inheritdoc */
    getServerInfo(sid: number): ClientState.ServerInfo {
        if (!this.servers.has(sid)) {
            // Use the nested ServerInfo class implementation
            this.servers.set(sid, new ClientStateInMemory.ServerInfo(sid));
        }
        return this.servers.get(sid)!;
    }

    /** @inheritdoc */
    getServerDescriptor(serverId: number): ServerDescriptor | null {
        // Ensure serverId is positive
         if (serverId <= 0) {
            Log.warn("getServerDescriptor called with invalid serverId", { serverId });
            return null;
         }
        return this.servers.get(serverId)?.getDescriptor() ?? null;
    }

    /** @inheritdoc */
    getClientInfo(uid: UUID): ClientState.ClientInfoMutable {
        const key = uid.toString();
        if (!this.clients.has(key)) {
             // Use the nested ClientInfoMutable class implementation
            this.clients.set(key, new ClientStateInMemory.ClientInfoMutable(uid));
        }
        return this.clients.get(key)!;
    }

    /** @inheritdoc */
    setCloud(uid: UUID, cloud: Cloud): void {
        this.getClientInfo(uid).setCloud(cloud);
        // Note: Java version had a separate saveCloud method, merged here for simplicity
    }

    /** @inheritdoc */
    getCloud(uid: UUID): Cloud | null {
        if (!uid) {
            Log.warn("getCloud called with null or undefined UID");
            return null;
        }
        return this.getClientInfo(uid).getCloud();
    }

    /** @inheritdoc */
    getRegistrationUri(): URI[] { return [...this.registrationUris]; } // Return a copy
    /** @inheritdoc */
    getPingDuration(): AMFuture<number> { return this.pingDuration; }
    /** @inheritdoc */
    getParentUid(): UUID { return this.parentUid; }
    /** @inheritdoc */
    setParentUid(uid: UUID): void { this.parentUid = uid; }
    /** @inheritdoc */
    getCryptoLib(): CryptoLib { return this.cryptoLib; }
    /** @inheritdoc */
    getRootSigners(): Set<SignChecker> { return new Set(this.rootSigners); } // Return a copy
    /** @inheritdoc */
    getTimeoutForConnectToRegistrationServer(): number { return this.timeoutForConnectToRegistrationServer; }
    /** @inheritdoc */
    getCountServersForRegistration(): number { return this.countServersForRegistration; }

    /** @inheritdoc */
    save(): Uint8Array {
        if (!this.uid || !this.alias || !this.masterKey || !this.parentUid) {
            throw new Error(`Client state incomplete for saving. Missing: ${
                [!this.uid ? 'uid' : '', !this.alias ? 'alias' : '', !this.masterKey ? 'masterKey' : '', !this.parentUid ? 'parentUid' : ''].filter(s=>s).join(', ')
            }`);
        }

        const dtoRootSigners: DtoKey[] = [];
         for (const rs of this.rootSigners) {
            try {
                 // Convert AKey.SignPublic to DtoKey
                 const dtoKey = KeyUtil.of(rs.getPublicKey()); // Pass AKey, expect DtoKey
                 dtoRootSigners.push(dtoKey);
            } catch (e) {
                 Log.error("Failed to convert root signer public key to DTO Key during save", e as Error, { signerKey: rs.getPublicKey().keyToString() });
            }
         }


        const dto = new ClientStateForSave(
            this.registrationUris.slice(),
            Array.from(this.servers.values()).map(s => s.getDescriptor()).filter((d): d is ServerDescriptor => d !== null),
            Array.from(this.clients.values())
                .filter(c => c.getCloud() !== null)
                .map(c => new ClientInfoDTO(c.getUid(), c.getCloud()!)),
            dtoRootSigners,
            this.cryptoLib,
            this.pingDuration.getNow() ?? 1000,
            this.parentUid,
            this.countServersForRegistration,
            this.timeoutForConnectToRegistrationServer,
            this.uid,
            this.alias,
            this.masterKey
        );

        // Use DataInOut for serialization to match Java's save() method
        const d = new DataInOut();
        ClientStateForSave.META.serialize(null as any, dto, d); // Use STUB context
        return d.toArray();
    }

    /** @inheritdoc */
    load(data: Uint8Array): void {
        try {
            // Use DataInOutStatic for deserialization
            const dto = ClientStateForSave.META.deserialize(null as any, new DataInOutStatic(data)); // Use STUB context

            this.uid = dto.uid;
            this.alias = dto.alias;
            this.parentUid = dto.parentUid;
            this.masterKey = dto.masterKey;
            this.cryptoLib = dto.cryptoLib;
            this.countServersForRegistration = dto.countServersForRegistration;
            this.timeoutForConnectToRegistrationServer = dto.timeoutForConnectToRegistrationServer;
            this.pingDuration.set(dto.pingDuration);
            this.registrationUris = dto.registrationUri.slice();

            this.servers.clear();
            dto.servers.forEach((sd: ServerDescriptor) => this.getServerInfo(sd.id).setDescriptor(sd));

            this.clients.clear();
            dto.clients.forEach((ci: ClientInfoDTO) => this.getClientInfo(ci.uid).setCloud(ci.cloud));

            this.rootSigners.clear();
            dto.rootSigners.forEach((k: DtoKey) => {
                try {
                    // Convert DtoKey to AKey, then to SignChecker
                    const akey = KeyUtil.of(k); // Pass DtoKey, expect AKey
                    if (akey && akey.getKeyType() === KeyType.SIGN_PUBLIC) {
                        const checker = akey.asSignPublicKey().toSignChecker();
                        if (checker) this.rootSigners.add(checker);
                         else { Log.warn("Failed to create SignChecker from loaded root signer AKey", { key: k }); }
                    } else {
                        Log.warn("Loaded root signer is not a SIGN_PUBLIC key", { key: k });
                    }
                } catch (e) {
                     Log.error("Failed to load/convert root signer DTO Key", e as Error, { key: k });
                }
            });
            this.addDefaultRootSigners(); // Ensure defaults are present

             if (!this.parentUid) {
                 Log.warn("Parent UID was missing after loading state, defaulting to ANONYMOUS_UID");
                 this.parentUid = StandardUUIDsImpl.ANONYMOUS_UID;
             }

        } catch (e) {
             Log.error("Failed to load client state", e as Error);
             throw new Error(`Unparsable state: ${(e as Error).message}`);
        }
    }

    /**
     * Internal mutable implementation for ServerInfo.
     * @implements {ClientState.ServerInfo}
     */
    static ServerInfo = class implements ClientState.ServerInfo {
        readonly sid: number;
        descriptor: ServerDescriptor | null = null;

        /** Creates ServerInfo for a given server ID. */
        constructor(sidOrDescriptor: number | ServerDescriptor) {
            if (typeof sidOrDescriptor === 'number') {
                this.sid = sidOrDescriptor;
            } else {
                 this.sid = sidOrDescriptor.id;
                 this.descriptor = sidOrDescriptor;
            }
        }
        /** @inheritdoc */
        getServerId(): number { return this.sid; }
        /** @inheritdoc */
        getDescriptor(): ServerDescriptor | null { return this.descriptor; }
        /** @inheritdoc */
        setDescriptor(serverDescriptor: ServerDescriptor): void { this.descriptor = serverDescriptor; }
    }

    /**
     * Internal mutable implementation for ClientInfo.
     * @implements {ClientState.ClientInfo}
     */
    static ClientInfoMutable = class implements ClientState.ClientInfo {
        readonly uid: UUID;
        cloud: Cloud | null = null;

        /** Creates ClientInfoMutable from DTO. */
        constructor(uidOrDto: UUID | ClientInfoDTO, cloud?: Cloud) {
             if (uidOrDto instanceof UUID) {
                this.uid = uidOrDto;
                this.cloud = cloud ?? null;
            } else { // It's a DTO
                 this.uid = uidOrDto.uid;
                 this.cloud = uidOrDto.cloud;
            }
        }
        /** @inheritdoc */
        getUid(): UUID { return this.uid; }
        /** @inheritdoc */
        getCloud(): Cloud | null { return this.cloud; }
        /** @inheritdoc */
        setCloud(cloud: Cloud): void { this.cloud = cloud; }
    }
}

// --- MessageNode Implementation ---
/**
 * Represents a communication channel node for sending/receiving messages to/from a specific peer (consumer).
 * Manages outgoing connections and incoming/outgoing message buffers.
 */
export class MessageNode {
    /** Set of active outgoing connections used by this node. */
    public readonly connectionsOut: Set<ConnectionWork> = new Set();
    /** Queue for outgoing messages waiting to be sent. */
    public readonly bufferOut = new ConcurrentLinkedQueue_C<{ data: Uint8Array, future: AFuture }>(); // Java: Value<byte[]>
    /** Event consumer for incoming messages received for this node. */
    public readonly bufferIn = new EventConsumer<{ data: Uint8Array }>(); // Java: EventConsumerWithQueue<Value<byte[]>>
    /** The UUID of the peer this node communicates with. */
    public readonly consumerUUID: UUID;
    /** Reference to the parent AetherCloudClient instance. */
    public readonly client: AetherCloudClient;
    /** The strategy defining how connections are resolved and managed for this node. */
    public strategy: MessageEventListener; // Java: volatile

    /**
     * Creates a new MessageNode.
     * @param {AetherCloudClient} client - The parent client instance.
     * @param {UUID} consumerId - The UUID of the peer.
     * @param {MessageEventListener} strategy - The connection management strategy.
     */
    constructor(client: AetherCloudClient, consumerId: UUID, strategy: MessageEventListener) {
        using _l = Log.context({ // Add context for constructor logging
             component: "MessageNode",
             uidFrom: client.getUid()?.toString() ?? "N/A",
             uidTo: consumerId.toString()
        });
        Log.trace("Creating MessageNode");
        this.client = client;
        this.consumerUUID = consumerId;
        this.strategy = strategy;

        // Asynchronously fetch the consumer's cloud information and inform the strategy
        client.getCloud(consumerId).to(
            (c: Cloud | null) => {
                if (c) {
                    try { this.strategy.setConsumerCloud(this, c); }
                    catch(e) { Log.error("Error in strategy.setConsumerCloud", e as Error, { consumer: consumerId }); }
                } else {
                    Log.warn("Consumer cloud resolved to null", { consumer: consumerId });
                    // Optionally: Handle case where cloud is not found (e.g., error future)
                }
            },
            (err: Error) => Log.error("Failed to get consumer cloud in MessageNode constructor", err, { consumer: consumerId })
        );
    }

    /**
     * Sends a message to the consumer associated with this node.
     * The message is buffered and sent via available connections.
     * @param {Uint8Array} data - The message payload.
     * @param {AFuture} future - A future that will be completed upon successful queuing/sending or errored on failure.
     */
    public send(data: Uint8Array, future: AFuture): void {
        const message = { data, future };
        this.bufferOut.add(message);
        Log.trace("MessageNode: Added message to bufferOut", { consumer: this.consumerUUID.toString(), size: data.length });

        let sentImmediately = false;
        // Try sending immediately on existing connections
        this.connectionsOut.forEach(conn => {
             // Check if connection is ready before attempting to send
             if (conn.connectFuture.isDone() && !conn.connectFuture.isError()) {
                if (this.trySendDirectly(conn, message)) {
                    sentImmediately = true;
                    conn.flush(); // Flush the connection that accepted the message
                }
             } else {
                 Log.trace("MessageNode: Connection not ready, message remains buffered", { consumer: this.consumerUUID.toString(), server: conn.uri });
             }
        });

        if (!sentImmediately && this.connectionsOut.size > 0) {
            Log.trace("MessageNode: Message buffered, waiting for connection flush", { consumer: this.consumerUUID.toString() });
        } else if (this.connectionsOut.size === 0) {
            Log.trace("MessageNode: Message buffered, no connections yet. Triggering first connection.", { consumer: this.consumerUUID.toString() });
            this.client.makeFirstConnection(); // Ensure a connection attempt is made if none exist
        }
    }

    /**
     * Attempts to queue a message for sending on a specific connection via its AuthorizedApi.
     * @param {ConnectionWork} conn - The connection to use.
     * @param {{ data: Uint8Array, future: AFuture }} message - The message and its future.
     * @returns {boolean} True if the message was successfully queued, false otherwise.
     * @private
     */
    private trySendDirectly(conn: ConnectionWork, message: { data: Uint8Array, future: AFuture }): boolean {
        using _l = Log.context({ // Add context for trySendDirectly logging
             component: "MessageNode",
             uidFrom: this.client.getUid()?.toString() ?? "N/A",
             uidTo: this.consumerUUID.toString(),
             server: conn.uri
        });
        try {
            // Queue the sendMessage call using the connection's RemoteApiFuture
            conn.remoteApiFutureAuth.run((api: AuthorizedApiRemote, sendFuture: AFuture) => {
                Log.trace("MessageNode: Queuing message via remoteApiFutureAuth.run");
                // The actual sending happens when the apiSafeCtx is flushed
                api.sendMessage(new Message(this.consumerUUID, message.data))
                   .to(sendFuture); // Link the API call future to the flush future
            });
            // Immediately mark the original future as done, as it's successfully queued.
            // The actual send completion is handled by the flush mechanism.
            message.future.tryDone();
            Log.trace("MessageNode: Message successfully queued for connection");
            return true;
        } catch (e) {
            Log.error("Error queueing message for direct send", e as Error);
            message.future.error(e as Error); // Error the original future
            return false;
        }
    }

    /**
     * Resolves a server ID and passes the descriptor to the strategy.
     * @param {number} serverId - The ID of the server to resolve.
     */
    public addConsumerServerOutById(serverId: number): void {
         using _l = Log.context({ component: "MessageNode", uidTo: this.consumerUUID.toString() });
        this.client.getServer(serverId).to(
            (sd: ServerDescriptor | null) => {
                 if (sd) {
                     try { this.strategy.onResolveConsumerServer(this, sd); }
                     catch(e) { Log.error("Error in strategy.onResolveConsumerServer", e as Error, { serverId }); }
                 } else { Log.warn("Server descriptor resolved to null", { serverId }); }
            },
            (err: Error) => Log.error("Failed to resolve server ID in addConsumerServerOutById", err, { serverId })
        );
    }

    /**
     * Passes a resolved server descriptor directly to the strategy to get a connection.
     * @param {ServerDescriptor} serverDescriptor - The resolved server descriptor.
     */
    public addConsumerServerOutByDescriptor(serverDescriptor: ServerDescriptor): void {
         using _l = Log.context({ component: "MessageNode", uidTo: this.consumerUUID.toString() });
         try {
             this.strategy.onResolveConsumerConnection(this, this.client.getConnection(serverDescriptor));
         } catch(e) {
              Log.error("Error in strategy.onResolveConsumerConnection", e as Error, { serverId: serverDescriptor.id });
         }
    }

    /**
     * Adds a connection to the set of outgoing connections for this node and sends buffered messages.
     * @param {ConnectionWork} conn - The connection to add.
     */
    public addConsumerConnectionOut(conn: ConnectionWork): void {
        using _l = Log.context({ component: "MessageNode", uidTo: this.consumerUUID.toString(), server: conn.uri });
        if (this.connectionsOut.has(conn)) {
             Log.trace("Connection already added, skipping.");
             return; // Already added
        }
        this.connectionsOut.add(conn);
        Log.debug("Added outgoing connection for messages");

        // Attempt to send buffered messages on the new connection
        const requeue: { data: Uint8Array, future: AFuture }[] = [];
        let message: { data: Uint8Array, future: AFuture } | undefined;
        let sentCount = 0;
        while ((message = this.bufferOut.poll()) !== undefined) {
             // Check if connection is ready before sending buffered message
             if (conn.connectFuture.isDone() && !conn.connectFuture.isError()) {
                Log.trace("Sending buffered message on new connection");
                if (!this.trySendDirectly(conn, message)) {
                    // If send fails, put it back at the front and stop processing for this connection
                    requeue.push(message);
                    Log.warn("Failed to queue buffered message, requeuing and stopping send loop for this connection.");
                    break;
                } else {
                     sentCount++;
                }
             } else {
                  // Connection not ready, put back and stop processing
                  requeue.push(message);
                  Log.trace("Connection not ready while sending buffered messages, requeuing.");
                  break;
             }
        }

        // Re-add any messages that couldn't be sent (including those after a failed send)
        // Add them back to the front of the queue
         while ((message = this.bufferOut.poll()) !== undefined) {
            requeue.push(message);
         }
        requeue.reverse().forEach(msg => this.bufferOut.add(msg)); // addFirst equivalent

        if (requeue.length > 0) {
            Log.warn(`Requeued ${requeue.length} messages after adding connection.`);
        }
        // Flush connection if at least one message was successfully sent/queued
        if (sentCount > 0) {
            Log.trace("Flushing connection after sending buffered messages");
            conn.flush();
        }
    }

    /**
     * Removes a connection from the set of outgoing connections.
     * @param {ConnectionWork} conn - The connection to remove.
     */
    public removeConsumerConnectionOut(conn: ConnectionWork): void {
         using _l = Log.context({ component: "MessageNode", uidTo: this.consumerUUID.toString(), server: conn.uri });
        if(this.connectionsOut.delete(conn)) {
            Log.trace("Removed outgoing connection");
        }
    }

    /**
     * Called by the connection when a message arrives from the server for this consumer.
     * Fires the `bufferIn` event.
     * @param {Uint8Array} data - The message payload. (Corresponds to Value<byte[]> in Java)
     */
    public sendMessageFromServerToClient(data: Uint8Array): void {
         using _l = Log.context({ component: "MessageNode", uidTo: this.consumerUUID.toString() });
        Log.trace("Received message from server");
        this.bufferIn.fire({ data }); // Pass data directly
    }

    /**
     * Gets the UUID of the consumer peer.
     * @returns {UUID} The consumer UUID.
     */
    public getConsumerUUID(): UUID { return this.consumerUUID; }
}

// --- MessageEventListener Interface & Default Implementation ---
/**
 * Defines the strategy for resolving connections for a MessageNode.
 */
export interface MessageEventListener {
    /** Called when the cloud information for the consumer is resolved. */
    setConsumerCloud(messageNode: MessageNode, cloud: Cloud): void;
    /** Called when a server descriptor for the consumer is resolved. */
    onResolveConsumerServer(messageNode: MessageNode, serverDescriptor: ServerDescriptor): void;
    /** Called when a connection to a consumer's server is established or retrieved. */
    onResolveConsumerConnection(messageNode: MessageNode, connection: ConnectionWork): void;
}

/**
 * Default implementation of MessageEventListener. Connects to the first server found in the cloud.
 */
export const MessageEventListenerDefault: MessageEventListener = {
    /** Connects to the first server listed in the cloud. */
    setConsumerCloud: (messageNode: MessageNode, cloud: Cloud) => {
        using _l = Log.context({ component: "MsgEvListenerDefault", uidTo: messageNode.consumerUUID.toString() });
        Log.trace("setConsumerCloud called", { cloudDataLength: cloud?.data?.length ?? 0 });
        if (cloud?.data && cloud.data.length > 0) {
            messageNode.addConsumerServerOutById(cloud.data[0]); // Connect to the first server
        } else {
            Log.warn("Received null or empty cloud, cannot establish connection.", { consumer: messageNode.consumerUUID.toString() });
            // Maybe error the futures in bufferOut?
            let msg;
            while((msg = messageNode.bufferOut.poll()) !== undefined) {
                 msg.future.error(new Error(`Could not resolve cloud/server for consumer ${messageNode.consumerUUID}`));
            }
        }
    },
    /** Passes the resolved server descriptor to the next step. */
    onResolveConsumerServer: (messageNode: MessageNode, serverDescriptor: ServerDescriptor) => {
        using _l = Log.context({ component: "MsgEvListenerDefault", uidTo: messageNode.consumerUUID.toString() });
        Log.trace("onResolveConsumerServer called", { serverId: serverDescriptor.id });
        messageNode.addConsumerServerOutByDescriptor(serverDescriptor);
    },
    /** Adds the resolved connection to the MessageNode. */
    onResolveConsumerConnection: (messageNode: MessageNode, connection: ConnectionWork) => {
         using _l = Log.context({ component: "MsgEvListenerDefault", uidTo: messageNode.consumerUUID.toString() });
        Log.trace("onResolveConsumerConnection called", { serverUri: connection.uri });
        messageNode.addConsumerConnectionOut(connection);
    },
};

// --- Connection Abstract Class ---
/**
 * Base class for client connections (Registration and Work).
 * Manages the underlying FastMetaClient and connection lifecycle.
 * @template LT - Local API type.
 * @template RT - Remote API type.
 * @implements {Destroyable}
 */
export abstract class Connection<LT, RT extends RemoteApi> implements Destroyable {
    protected readonly client: AetherCloudClient;
    /** The URI of the connected server. */
    public readonly uri: URI;
    /** Future that completes when the connection is established and the root remote API is ready. */
    public readonly connectFuture: ARFuture<RT>;
    protected readonly fastMetaClient: FastMetaClient<LT, RT>;
    protected rootApi: RT | null = null; // Java: volatile

    /**
     * Initializes the connection process.
     * @param {AetherCloudClient} client - The parent client instance.
     * @param {URI} uri - The server URI to connect to.
     * @param {FastMetaApi<LT, any>} localApiMeta - Metadata for the local API implementation.
     * @param {FastMetaApi<any, RT>} remoteApiMeta - Metadata for the remote API interface.
     * @param {FastMetaClient<LT, RT>} [clientImpl] - Optional specific FastMetaClient implementation (defaults to WebSocket).
     */
    constructor(
        client: AetherCloudClient,
        uri: URI,
        localApiMeta: FastMetaApi<LT, any>,
        remoteApiMeta: FastMetaApi<any, RT>,
        clientImpl?: FastMetaClient<LT, RT>
    ) {
        if (!uri) throw new Error("Connection URI cannot be null");
        this.uri = uri;
        this.client = client;
        // Default to WebSocket client if no specific implementation is provided
        this.fastMetaClient = clientImpl || new FastMetaClientWebSocket<LT, RT>();
        this.connectFuture = ARFuture.of<RT>(); // Create the future

        // Check if client is already destroyed
        if (client.destroyer.isDestroyed()) {
            Log.warn("Attempting to create connection on destroyed client", { uri: this.uri });
            this.fastMetaClient.close();
            this.connectFuture.cancel();
            this.rootApi = null;
            return;
        }

        client.destroyer.add(this); // Add this connection to the client's destroyer
        client.destroyer.add(this.fastMetaClient); // Add the underlying transport client too

        // The 'localApi' provided to FastMetaClient is 'this' instance,
        // as Connection implements the required local API (e.g., ClientApiUnsafe).
        const localApi = this as unknown as LT;

        Log.debug("Connection: Initiating connect...", { uri: this.uri });

        // Start the connection process using FastMetaClient
        this.fastMetaClient.connect(uri, localApiMeta, remoteApiMeta,
            // This function is the `localApiProvider` - it receives the RemoteApi (RT)
            // and should return the LocalApi (LT) instance.
            (remoteApi: RT) => {
                this.rootApi = remoteApi; // Store the obtained RemoteApi
                return localApi; // Return 'this' instance which implements LT
            })
            // `connect` returns ARFuture<FastApiContextLocal<LT>>
            // We map it to get the RT instance stored in rootApi.
            .map((_context: FastApiContextLocal<LT>): RT => {
                if (!this.rootApi) {
                     // This should ideally not happen if connect succeeds
                     throw new Error("Root API not set after successful connection context creation.");
                }
                 Log.debug("Connection: FastMeta connect successful, remote API ready.", { uri: this.uri });
                 return this.rootApi;
            })
            // Pipe the result (RT) or error to our public connectFuture
            .to(
                (remoteApiInstance: RT) => this.connectFuture.tryDone(remoteApiInstance),
                (err: Error) => {
                     Log.error("Connection failed", err, { uri: this.uri });
                     this.connectFuture.error(new ClientStartException(`Connection to ${this.uri} failed`, err));
                }
            )
            .onCancel(() => {
                 Log.warn("Connection cancelled", { uri: this.uri });
                 this.connectFuture.cancel();
            });
    }

    /**
     * Gets the root remote API instance. May return null if connection is not yet established.
     * @returns {RT | null} The remote API instance or null.
     */
    public getRootApi(): RT | null {
        if (!this.connectFuture.isDone()) {
            Log.warn("Accessing rootApi before connection is established", { uri: this.uri });
        }
        return this.rootApi;
    }

    /**
     * Gets the future that completes when the root remote API is ready.
     * @returns {ARFuture<RT>} The future for the remote API.
     */
    public getRootApiFuture(): ARFuture<RT> {
        return this.connectFuture;
    }

    /** @inheritdoc */
    public destroy(force: boolean): AFuture {
        using _l = Log.context({ component: "Connection", uri: this.uri });
        Log.info("Destroying Connection");
        // Close the underlying transport client
        return this.fastMetaClient.close(); // Java: fastMetaClient.destroy(force)
    }

    /** @inheritdoc */
    [Symbol.dispose](): void {
        this.destroy(true).onError(e => Log.error("Error during Connection dispose/destroy", e, { uri: this.uri }));
    }

    /** Checks equality based on the connection URI. */
    public equals(other: any): boolean {
        if (this === other) return true;
        if (other == null || !(other instanceof Connection)) return false;
        return this.uri === other.uri;
    }

    /** Calculates hash code based on the connection URI. */
    public hashCode(): number {
        // Simple string hash function
        let hash = 0;
        for (let i = 0; i < this.uri.length; i++) {
            const char = this.uri.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
}

// --- ConnectionWork Implementation ---
/**
 * Represents a working connection to an Aether server after successful login/authentication.
 * Implements the `ClientApiUnsafe` for receiving server->client messages.
 * Manages the `AuthorizedApiRemote` for client->server communication.
 * @extends {Connection<ClientApiUnsafe, LoginApiRemote>}
 * @implements {ClientApiUnsafe}
 */
export class ConnectionWork extends Connection<ClientApiUnsafe, LoginApiRemote> implements ClientApiUnsafe {
    /** Timestamp of the last successful ping response from the server. */
    public readonly lastBackPing = new AtomicLong(Number.MAX_SAFE_INTEGER);
    /** Future that completes when the connection is fully authenticated and ready for authorized operations. */
    public readonly ready = createAMFuture<ConnectionWork>(); // Should be completed after successful login/auth
    /** Local implementation for handling server->client messages within the authorized context. */
    readonly apiSafe: ClientApiSafe;
    /** FastApiContext for managing the authorized API calls. */
    readonly apiSafeCtx: FastApiContext;
    /** CryptoEngine specific to this server connection (derived from master key). */
    readonly cryptoEngine: CryptoEngine;
    /** RemoteApiFuture managing calls to the AuthorizedApi. */
    readonly remoteApiFutureAuth = new RemoteApiFuture<AuthorizedApiRemote>(AuthorizedApi.META); // Renamed from 'remoteApiFuture'
    private readonly serverDescriptor: ServerDescriptor;
    /** Flag to prevent concurrent flush operations. */
    readonly inProcess = new AtomicReference<boolean>(false); // Java: AtomicBoolean
    /** Status flag (meaning potentially specific to application logic using it). */
    basicStatus: boolean = false;
    /** Timestamp of the last work/flush execution. */
    lastWorkTime: number = 0;
    /** Flag indicating if the initial authentication/ping has completed. */
    firstAuth: boolean = false; // Java: volatile

    /**
     * Creates a new ConnectionWork instance.
     * @param {AetherCloudClient} client - The parent client instance.
     * @param {ServerDescriptor} s - The descriptor of the server to connect to.
     */
    constructor(client: AetherCloudClient, s: ServerDescriptor) {
        const uri = ConnectionWork.getUriFromServerDescriptor(s, AetherCodec.WEBSOCKET); // Defaulting to WebSocket
        if (!uri) {
            throw new ClientStartException(`Could not determine a valid WebSocket URI for ServerDescriptor ID ${s.id}`);
        }
        super(client, uri, ClientApiUnsafe.META, LoginApi.META); // Connects using LoginApi
        this.cryptoEngine = client.getCryptoEngineForServer(s.id);
        this.serverDescriptor = s;
        this.apiSafe = new MyClientApiSafe(client); // Instantiate inner class
        this.basicStatus = false;

        // Add a permanent task to the AuthorizedApi future to flush background requests
        this.remoteApiFutureAuth.addPermanent((a: AuthorizedApiRemote, f: AFuture) => {
            // Using Log.context ensures context is set for the duration of the block
            using _l = Log.context(client.logClientContext);
            try {
                this.flushBackgroundRequests(a, f);
            } catch (e) {
                 Log.error("Error in permanent remoteApiFutureAuth task (flushBackgroundRequests)", e as Error, { server: this.uri });
                 // Decide if the future 'f' should be errored here
                 // f.error(e as Error); // This might stop subsequent flushes if not handled carefully
            }
        });

        // Create the context for authorized API calls
        this.apiSafeCtx = new FastApiContext();

        // Override the flush method for the authorized context
        this.apiSafeCtx.flush = (sendFuture: AFuture): void => {
            using _l_flush = Log.context(this.client.logClientContext);
            Log.trace("apiSafeCtx.flush initiated", { server: this.uri });

             // Check if there's anything to send before proceeding
             // Use `this` as the sender object for BMap checks
            if (this.remoteApiFutureAuth.isEmpty() && !client.clouds.isRequestsFor(this) && !client.servers.isRequestsFor(this)) {
                Log.trace("apiSafeCtx.flush: Nothing to send.", { server: this.uri });
                sendFuture.tryDone();
                return;
            }

            // Get the root Login API (which should be ready if we are flushing apiSafeCtx)
            this.getRootApiFuture().to(
                (loginApi: LoginApiRemote | null) => { // Java: api
                    if (!loginApi) {
                        const errMsg = "Root Login API is not available during apiSafeCtx flush";
                        Log.error(errMsg, undefined, { server: this.uri });
                        sendFuture.error(new Error(errMsg));
                        return;
                    }

                    // Execute pending calls on the AuthorizedApi and gather data
                    this.remoteApiFutureAuth.executeAll(this.apiSafeCtx, sendFuture); // Pass sendFuture here? Java does.
                    const dataToSend = this.apiSafeCtx.remoteDataToArrayAsArray(); // Java: remoteDataToArray()

                    if (dataToSend.length === 0) {
                        Log.trace("apiSafeCtx.flush: No data generated by remoteApiFutureAuth.executeAll.", { server: this.uri });
                        // If executeAll didn't error sendFuture, we should mark it done.
                        if(!sendFuture.isFinalStatus()) sendFuture.tryDone();
                        return;
                    }

                    Log.trace(`apiSafeCtx.flush: Encrypting ${dataToSend.length} bytes for LoginStream`, { server: this.uri });
                    // Create the LoginStream with encrypted data
                    const loginStream = LoginStream.fromRemoteBytes(
                        this.cryptoEngine.encrypt.bind(this.cryptoEngine),
                        dataToSend
                    );

                    const alias = this.client.getAlias();
                    if (!alias) {
                         const errMsg = "Client alias is not set, cannot login via apiSafeCtx flush.";
                         Log.error(errMsg, undefined, { server: this.uri });
                        sendFuture.error(new Error(errMsg));
                        return;
                    }

                    // Call loginByAlias on the root Login API
                    Log.trace("apiSafeCtx.flush: Calling loginByAlias", { server: this.uri });
                    loginApi.loginByAlias(alias, loginStream);

                    // Flush the root connection to send the loginByAlias call
                    loginApi.flush(sendFuture); // Pass the original future
                     Log.trace("apiSafeCtx.flush: Root API flushed", { server: this.uri });

                },
                (err: Error) => { // Error getting root Login API
                    Log.error("apiSafeCtx.flush: Failed to get root Login API", err, { server: this.uri });
                    sendFuture.error(new ClientApiException("Failed to get Root Login API for apiSafeCtx flush", err));
                }
            ).onCancel(() => { // Cancellation getting root Login API
                 Log.warn("apiSafeCtx.flush: Get root Login API future was cancelled", { server: this.uri });
                sendFuture.cancel();
            });
        };

        // Mark connection as ready once the underlying connectFuture completes
        this.connectFuture.to(
             () => { this.ready.set(this); }, // On success
             (err) => { this.ready.error(err); } // On error
        );
    }

    /**
     * Flushes background requests (cloud/server resolution, messages, ping) via the AuthorizedApi.
     * @param {AuthorizedApiRemote} a - The authorized API instance.
     * @param {AFuture} sendFuture - The future associated with the flush operation.
     * @private
     */
    private flushBackgroundRequests(a: AuthorizedApiRemote, sendFuture: AFuture): void {
        using _l = Log.context({ component: "ConnectionWork", server: this.uri });
         try {
             // 1. Cloud Requests
             // Pass `this` as the sender object
             const requestCloud = this.client.clouds.getRequestsFor(UUID, this); // Assuming BMapImpl handles UUID constructor
             if (requestCloud.length > 0) {
                 Log.trace("Flushing cloud requests", { count: requestCloud.length });
                 a.resolverClouds(requestCloud);
             }

             // 2. Server Requests
              // Pass `this` as the sender object, use null placeholder for primitive key type
             const requestServersObjects = this.client.servers.getRequestsFor(null as any, this);
             if (requestServersObjects.length > 0) {
                 Log.trace("Flushing server requests", { count: requestServersObjects.length });
                 // Java converts Integer[] to short[]. TS directly uses number[].
                 // Assuming the TS API `resolverServers` expects `number[]` directly.
                  //const serverIds = requestServersObjects.map(id => id); // Direct mapping if API expects number[]
                  // If API expects something else (like Cloud DTO), adjust here. Let's assume number[] for now.
                 // Need to check the generated aether_api.ts for resolverServers parameter type.
                 // It expects `number[]` which maps to `short[]` in java via serialization.
                 a.resolverServers(requestServersObjects);
             }

             // 3. Message Stream Logic
             let messagesToSend: Message[] | null = null;
             const futuresToComplete: AFuture[] = []; // Futures linked to the original sendMessage calls
             // Map<consumerUuidString, Array<{ data: Uint8Array, future: AFuture }>>
             const messagesToRequeue: Map<string, { data: Uint8Array, future: AFuture }[]> = new Map();

             for (const m of this.client.messageNodeMap.values()) {
                 if (m.connectionsOut.has(this)) {
                     const messagesFromNode: { data: Uint8Array, future: AFuture }[] = [];
                     let msgEntry: { data: Uint8Array, future: AFuture } | undefined;
                     // Drain the buffer for this node/connection pair
                     while ((msgEntry = m.bufferOut.poll()) !== undefined) {
                         messagesFromNode.push(msgEntry);
                     }

                     if (messagesFromNode.length > 0) {
                         const consumerUuidString = m.consumerUUID.toString();
                         Log.debug(`Preparing ${messagesFromNode.length} messages client to server`, {
                             uidFrom: this.client.getUid()?.toString(),
                             uidTo: consumerUuidString,
                             count: messagesFromNode.length });

                         if (messagesToSend === null) messagesToSend = [];

                         messagesFromNode.forEach(val => {
                             messagesToSend!.push(new Message(m.consumerUUID, val.data));
                             futuresToComplete.push(val.future); // Track original futures
                         });
                         // Store messages for potential requeueing
                         messagesToRequeue.set(consumerUuidString, messagesFromNode);
                     }
                 }
             }

             if (messagesToSend !== null && messagesToSend.length > 0) {
                 Log.trace(`Flushing ${messagesToSend.length} messages`);
                 const messageSendFuture: AFuture = a.sendMessages(messagesToSend);

                 // Handle completion/error/cancellation of the batch send
                 messageSendFuture.to(
                     () => { // Success
                          Log.trace("Message batch send successful");
                         futuresToComplete.forEach(f => f.tryDone()); // Complete original futures
                     },
                     (err: Error) => { // Error
                         Log.error("Failed to send message batch, requeuing", err);
                         messagesToRequeue.forEach((msgs, consumerUuidString) => {
                             const node = this.client.messageNodeMap.get(consumerUuidString);
                             if (node) {
                                  // Re-add messages to the front of the buffer
                                 msgs.reverse().forEach(msg => node.bufferOut.add(msg)); // addFirst equivalent
                             }
                             // Error the original futures
                             msgs.forEach(msg => msg.future.error(err));
                         });
                         if (!sendFuture.isFinalStatus()) sendFuture.error(err); // Error the main flush future
                     }
                 ).onCancel(() => { // Cancellation
                      Log.warn("Message batch sending cancelled, requeuing");
                     messagesToRequeue.forEach((msgs, consumerUuidString) => {
                         const node = this.client.messageNodeMap.get(consumerUuidString);
                         if (node) {
                             msgs.reverse().forEach(msg => node.bufferOut.add(msg));
                         }
                         // Cancel the original futures
                         msgs.forEach(msg => msg.future.cancel());
                     });
                      if (!sendFuture.isFinalStatus()) sendFuture.cancel(); // Cancel the main flush future
                 });
             } else {
                  // No messages to send, ensure main future completes if not already done by errors/cancellations
                 // if(!sendFuture.isFinalStatus()) sendFuture.tryDone(); // Be careful not to complete it if linked futures might still error it.
             }

             // 4. Ping Logic
             if (!this.firstAuth) {
                 Log.trace("Sending initial ping");
                 a.ping(0).to( // Send ping with 0 duration hint
                     () => { // Ping successful
                         Log.trace("Initial ping successful");
                         this.firstAuth = true;
                         this.lastBackPing.set(RU.time()); // Update last ping time on success
                         if (!this.ready.isDone()) this.ready.set(this); // Mark connection as fully ready
                     },
                     (err: Error) => { // Ping failed
                         Log.warn("Initial ping failed", err);
                         // Don't set firstAuth = true
                         // Consider if connection should be marked as not ready or retried
                         if (!this.ready.isDone()) this.ready.error(err); // Error the ready future if ping fails initially
                     }
                 );
             }
             // Optional: Add periodic ping logic here if needed, based on getNextPing() etc.

             // Ensure the main flush future completes if no async operations are pending or errored it
             // If messages were sent, their future handles the completion/error/cancel.
             // If only metadata requests were sent, complete the main future now.
             if (messagesToSend === null && !sendFuture.isFinalStatus()) {
                 sendFuture.tryDone();
             }

         } catch (e) {
             Log.error("Error during flushBackgroundRequests", e as Error);
              if (!sendFuture.isFinalStatus()) sendFuture.error(e as Error);
         }
    }


    /**
     * Handles incoming `sendSafeApiDataMulti` calls (currently unsupported).
     * @param {number} _backId - The back ID.
     * @param {LoginClientStream} _data - The stream data.
     * @returns {AFuture} An errored future.
     */
    sendSafeApiDataMulti(_backId: number, _data: LoginClientStream): AFuture {
        const err = new Error("UnsupportedOperationException: sendSafeApiDataMulti is not supported in TS client");
        Log.error(err.message, err, { server: this.uri });
        return AFuture.ofThrow(err);
    }

    /**
     * Handles incoming `sendSafeApiData` calls, decrypts the stream, and processes commands.
     * @param {LoginClientStream} data - The incoming stream data.
     * @returns {AFuture} A future that completes when processing is done or fails.
     */
    sendSafeApiData(data: LoginClientStream): AFuture {
         const future = AFuture.make();
         using _l = Log.context({ component: "ConnectionWork", server: this.uri });
         try {
             Log.trace(`Received sendSafeApiData stream (${data.data.length} bytes)`);
             // Decrypt and accept the stream using the authorized context and API implementation
             data.accept(this.apiSafeCtx, this.cryptoEngine.decrypt.bind(this.cryptoEngine), this.apiSafe);
             Log.trace("sendSafeApiData stream processed successfully");
             future.tryDone();
         } catch (e) {
             Log.error("Error processing incoming sendSafeApiData stream", e as Error);
             future.error(e as Error);
         }
         return future;
    }

    /**
     * Gets the ServerDescriptor associated with this connection.
     * @returns {ServerDescriptor} The server descriptor.
     */
    public getServerDescriptor(): ServerDescriptor {
        return this.serverDescriptor;
    }

    /**
     * Returns a string representation of the connection.
     * @returns {string} String representation.
     */
    override toString(): string {
        // Use the static helper to get URI, default to raw descriptor if URI fails
        const uri = ConnectionWork.getUriFromServerDescriptor(this.serverDescriptor, AetherCodec.WEBSOCKET) ?? `serverID=${this.serverDescriptor.id}`;
        return `work(${uri})`;
    }

    /**
     * Sets the basic status flag (application-specific meaning).
     * @param {boolean} basic - The new status.
     */
    public setBasic(basic: boolean): void {
        this.basicStatus = basic;
    }

    /**
     * Calculates the time elapsed since the last successful ping response.
     * @returns {number} Time in milliseconds.
     */
    public lifeTime(): number {
        return RU.time() - this.lastBackPing.get();
    }

    /**
     * Performs scheduled work, typically flushing the connection if needed and not already processing.
     * Intended to be called periodically.
     */
    public scheduledWork(): void {
        const t = RU.time();
        // Throttle: Don't run too frequently, and only run if not already processing
        if ((t - this.lastWorkTime < this.client.getPingTime() || !this.inProcess.compareAndSet(false, true))) {
             // Log why it didn't run if needed for debugging
             if (t - this.lastWorkTime < this.client.getPingTime()) {
                // Log.trace("Scheduled work skipped: Too soon since last work", { server: this.uri });
             } else if(this.inProcess.get() === true) {
                 // Log.trace("Scheduled work skipped: Already in process", { server: this.uri });
             }
             return;
        }

        using _l = Log.context({ component: "ConnectionWork", server: this.uri });
        Log.trace("Executing scheduledWork (flush)");
        this.lastWorkTime = t;
        const f = AFuture.make();
        // Ensure inProcess is reset when flush completes or fails
        f.addListener(() => this.inProcess.set(false));
        // Add timeout for the flush operation itself
        f.timeoutError(2, `scheduledWork flush timeout on ${this.uri}`); // Java used timeout() which doesn't error future

        // Perform the flush using the authorized context
        this.apiSafeCtx.flush(f);
    }

    /**
     * Immediately attempts to flush the connection if not already processing.
     */
    public flush(): void {
        // Only run if not already processing
        if (!this.inProcess.compareAndSet(false, true)) {
             Log.trace("Flush skipped: Already in process", { server: this.uri });
            return;
        }

        using _l = Log.context({ component: "ConnectionWork", server: this.uri });
        Log.trace("Executing explicit flush");
        this.lastWorkTime = RU.time(); // Update last work time
        const f = AFuture.make();
        // Ensure inProcess is reset when flush completes or fails
        f.addListener(() => this.inProcess.set(false));
        // Add timeout for the flush operation itself
        f.timeoutError(2, `explicit flush timeout on ${this.uri}`); // Java used timeout()

        // Perform the flush using the authorized context
        this.apiSafeCtx.flush(f);
    }

    /**
     * Gets a suitable URI (WebSocket preferred) from a ServerDescriptor.
     * @param {ServerDescriptor} sd - The server descriptor.
     * @param {AetherCodec} preferredCodec - The preferred codec (e.g., WEBSOCKET).
     * @returns {URI | null} The determined URI or null if none found.
     * @static
     * @private
     */
    private static getUriFromServerDescriptor(sd: ServerDescriptor, preferredCodec: AetherCodec): URI | null {
        if (!sd || !sd.ipAddress || !sd.ipAddress.addresses || sd.ipAddress.addresses.length === 0) {
             Log.warn("Cannot get URI from invalid ServerDescriptor", { serverId: sd?.id });
             return null;
        }
        let fallbackUri: URI | null = null;
        for (const addrInfo of sd.ipAddress.addresses) {
            for (const cap of addrInfo.coderAndPorts) {
                const ipString = ConnectionWork.ipAddressToString(addrInfo.address);
                if (ipString) {
                    const scheme = cap.codec === AetherCodec.WEBSOCKET ? 'wss' : 'tcp'; // Prefer wss for WebSocket
                    const uri = `${scheme}://${ipString}:${cap.port}`;
                    if (cap.codec === preferredCodec) {
                        return uri; // Return preferred codec immediately
                    }
                    if (!fallbackUri) fallbackUri = uri; // Store first valid URI as fallback
                }
            }
        }
        if (!fallbackUri) Log.warn("No valid URI found in ServerDescriptor", { serverId: sd.id });
        return fallbackUri;
    }

    /**
     * Converts an IPAddress DTO to its string representation.
     * @param {IPAddress} ipAddr - The IP address DTO.
     * @returns {string | null} The string representation or null if invalid.
     * @static
     * @private
     */
    private static ipAddressToString(ipAddr: IPAddress): string | null {
        try {
            if (ipAddr instanceof IPAddressV4) {
                if (ipAddr.data && ipAddr.data.length === 4) {
                    return Array.from(ipAddr.data).join('.');
                }
            } else if (ipAddr instanceof IPAddressV6) {
                // Basic IPv6 formatting (not fully compliant with RFC 5952 shortening)
                if (ipAddr.data && ipAddr.data.length === 16) {
                    const parts: string[] = [];
                    for (let i = 0; i < 16; i += 2) {
                        parts.push(((ipAddr.data[i] << 8) | ipAddr.data[i + 1]).toString(16));
                    }
                    // Very basic :: replacement attempt (only for single longest run of zeros)
                    let ipStr = parts.join(':');
                    // Find longest sequence of ":0:" or ":0000:" etc.
                     let longestSeq = "";
                     ipStr.replace(/(?::(?:0:)+)/g, (match) => {
                         if (match.length > longestSeq.length) longestSeq = match;
                         return match;
                     });
                     // Replace only the first occurrence of the longest sequence
                     if (longestSeq.length > 2) { // Check if more than one zero block
                         ipStr = ipStr.replace(longestSeq, longestSeq === ipStr ? "::" : ":"); // Handle all zeros case
                     }
                    return ipStr;
                } else if (ipAddr.data && ipAddr.data.length === 6){ // Handle potential non-standard length from Java?
                     Log.warn("IPAddressV6 has unexpected data length 6, returning hex.", { data: HexUtils.toHexString(ipAddr.data) });
                     return HexUtils.toHexString(ipAddr.data); // Or handle as error?
                }
            }
        } catch (e) {
             Log.error("Error formatting IPAddress", e as Error, { ipAddrData: (ipAddr as any)?.data });
        }

        Log.error("Unknown or invalid IPAddress format provided to ipAddressToString", undefined, { ipAddrType: (ipAddr as any)?.constructor?.name, dataLength: (ipAddr as any)?.data?.length });
        return null;
    }
}

/**
 * Local implementation of the `ClientApiSafe` interface, handling messages received from the server
 * within the authorized context (after login).
 * @implements {ClientApiSafe}
 */
class MyClientApiSafe implements ClientApiSafe {
    private readonly client: AetherCloudClient;

    /** Creates an instance of MyClientApiSafe. */
    constructor(client: AetherCloudClient) {
        this.client = client;
    }

    /** @inheritdoc (Not fully implemented) */
    changeParent(_uid: UUID): AFuture {
        Log.warn("MyClientApiSafe.changeParent not implemented");
        return AFuture.of(); // Return completed future
    }

    /** @inheritdoc (Not fully implemented) */
    changeAlias(_alias: UUID): AFuture {
        Log.warn("MyClientApiSafe.changeAlias not implemented");
        return AFuture.of();
    }

     /** @inheritdoc */
     newChild(uid: UUID): AFuture {
         using _l = Log.context(this.client.logClientContext);
         Log.trace("MyClientApiSafe.newChild received", { childUid: uid.toString() });
         this.client.onNewChild.fire(uid); // Fire event for external listeners
         return AFuture.of();
     }


    /** @inheritdoc */
    sendMessages(msg: Message[]): AFuture {
         using _l = Log.context(this.client.logClientContext);
        Log.trace("receive messages", { count: msg.length });
        for (const m of msg) {
            const targetUid = m.getUid(); // Java uses getUid()
            const sourceUid = this.client.getUid(); // Assuming message is for this client
            Log.trace("receive message", { uidFrom: targetUid?.toString(), uidTo: sourceUid?.toString() }); // Corrected logging order
            if (targetUid) {
                // Get MessageNode for the *sender* (m.getUid()) and fire message into its input buffer
                this.client.getMessageNode(targetUid, MessageEventListenerDefault)
                          .sendMessageFromServerToClient(m.getData()); // Java uses Value.of()
            } else {
                 Log.warn("Received message with null target UID", { messageDataLength: m.getData()?.length });
            }
        }
        return AFuture.of(); // Indicate processing started
    }

    /** @inheritdoc */
    sendServerDescriptor(v: ServerDescriptor): AFuture {
         using _l = Log.context(this.client.logClientContext);
        Log.trace("MyClientApiSafe.sendServerDescriptor received", { serverId: v.id });
        // Use BMap's putResolved to update cache and notify listeners
        this.client.servers.putResolved(v.id, v);
        return AFuture.of();
    }

     /** @inheritdoc */
     sendServerDescriptors(serverDescriptors: ServerDescriptor[]): AFuture {
         using _l = Log.context(this.client.logClientContext);
         Log.trace("MyClientApiSafe.sendServerDescriptors received", { count: serverDescriptors.length });
         serverDescriptors.forEach(c => this.sendServerDescriptor(c)); // Reuse single descriptor logic
         return AFuture.of();
     }


    /** @inheritdoc */
    sendCloud(uid: UUID, cloud: Cloud): AFuture {
         using _l = Log.context(this.client.logClientContext);
        Log.trace("MyClientApiSafe.sendCloud received", { uid: uid.toString(), cloudDataLength: cloud?.data?.length });
        this.client.setCloud(uid, cloud); // Use client's method which calls BMap.putResolved
        return AFuture.of();
    }

     /** @inheritdoc */
     sendClouds(clouds: UUIDAndCloud[]): AFuture {
         using _l = Log.context(this.client.logClientContext);
         Log.trace("MyClientApiSafe.sendClouds received", { count: clouds.length });
         clouds.forEach(c => this.sendCloud(c.getUid(), c.getCloud())); // Reuse single cloud logic
         return AFuture.of();
     }

    /** @inheritdoc (Not fully implemented) */
    requestTelemetry(): AFuture {
        Log.warn("MyClientApiSafe.requestTelemetry not implemented");
        return AFuture.of();
    }
}

// --- ConnectionRegistration Implementation ---
/**
 * Represents a connection specifically for the client registration process.
 * Implements the `ClientApiRegUnsafe` for receiving server->client messages during registration.
 * Manages the multi-step registration handshake using `RegistrationRootApiRemote`.
 * @extends {Connection<ClientApiRegUnsafe, RegistrationRootApiRemote>}
 * @implements {ClientApiRegUnsafe}
 */
export class ConnectionRegistration extends Connection<ClientApiRegUnsafe, RegistrationRootApiRemote> implements ClientApiRegUnsafe {
    /** Temporary symmetric key used during registration steps. */
    private readonly tempKey: AKey.Symmetric;
    /** DTO representation of the temporary symmetric key. */
    private readonly tempKeyNative: DtoKey; // Java: KeySymmetric
    /** CryptoEngine derived from the temporary symmetric key. */
    private readonly tempKeyCp: CryptoEngine;
    /** Context for handling safe (symmetrically encrypted with tempKey) messages from server. */
    private readonly ctxSafe = new FastApiContext();
    /** Context for handling global (asymmetrically encrypted with global key) messages from server. */
    private readonly globalCtx = new FastApiContext();
    /** CryptoEngine derived from the global key and master key for global communication. */
    private gcp: CryptoEngine | null = null; // Global Crypto Provider

    /**
     * Creates a new ConnectionRegistration instance and starts the connection process.
     * @param {AetherCloudClient} client - The parent client instance.
     * @param {URI} uri - The URI of the registration server.
     */
    constructor(client: AetherCloudClient, uri: URI) {
        super(client, uri, ClientApiRegUnsafe.META, RegistrationRootApi.META); // Root API is RegistrationRootApi
        using _l = Log.context({ component: "ConnectionRegistration", uri: this.uri });
        Log.info("Initializing registration connection.");

        // Generate temporary symmetric key for this registration attempt
        const cryptoProvider = CryptoProviderFactory.getProvider(client.getCryptLib().toString());
        this.tempKey = cryptoProvider.createSymmetricKey();
        const tempKeyDto = KeyUtil.of(this.tempKey); // Convert AKey -> DtoKey
         if (!tempKeyDto) throw new ClientStartException("Failed to create DTO for temporary key");
        this.tempKeyNative = tempKeyDto;
        this.tempKeyCp = this.tempKey.toCryptoEngine();

        // Override flush methods - they shouldn't normally be called directly for these contexts
        this.ctxSafe.flush = (sendFuture: AFuture): void => {
             Log.warn("ctxSafe flush called unexpectedly during registration", { uri: this.uri });
             // In Java, this just logged "test". We'll mark done but log warning.
            sendFuture.tryDone();
        };
        this.globalCtx.flush = (sendFuture: AFuture): void => {
             Log.warn("globalCtx flush called unexpectedly during registration", { uri: this.uri });
            sendFuture.tryDone();
        };

        // Start the connection and registration process
        this.connect();
    }

    /**
     * Initiates the connection and the first step of the registration handshake.
     * @private
     */
    private connect(): void {
        using _l = Log.context({ component: "ConnectionRegistration", uri: this.uri });
        Log.debug("Starting async registration process.");

        this.getRootApiFuture().to(
            (api: RegistrationRootApiRemote | null) => { // API is RegistrationRootApiRemote
                if (!api) {
                    const errMsg = "Registration connection failed: Root API is null after connection attempt.";
                    Log.error(errMsg, undefined, { uri: this.uri });
                    this.client.startFuture.error(new ClientStartException(errMsg));
                    return;
                }
                Log.debug("TCP connection successful, requesting asymmetric public key.");
                // Step 1: Get Server's Asymmetric Public Key
                api.getAsymmetricPublicKey(this.client.getCryptLib())
                    .to(
                        (signedKeyDTO: DtoSignedKey) => {
                            // Proceed to the main registration process upon receiving the key
                            this.regProcess(signedKeyDTO);
                        },
                        (err: Error) => { // Error getting public key
                            Log.error("Failed to get server asymmetric public key.", err, { uri: this.uri });
                            this.client.startFuture.error(new ClientApiException("Registration failed: Could not get server public key.", err));
                        }
                    ).onCancel(() => { // Cancelled getting public key
                        Log.warn("Asymmetric public key request cancelled.", { uri: this.uri });
                        if (!this.client.startFuture.isFinalStatus()) this.client.startFuture.cancel();
                    });
                // Flush the root connection to send the getAsymmetricPublicKey call
                api.flush();
                 Log.trace("Flushed root API for getAsymmetricPublicKey request.");
            },
            (e: Error) => { // Error during initial connection
                Log.error("Initial registration connection failed.", e, { uri: this.uri });
                // Don't error startFuture here, connect() handles retries
            }
        ).onCancel(() => { // Connection cancelled
             Log.warn("Initial registration connection cancelled.", { uri: this.uri });
            if (!this.client.startFuture.isFinalStatus()) this.client.startFuture.cancel();
        });
    }

    /**
     * Executes the multi-step registration process after obtaining the server's public key.
     * @param {DtoSignedKey} signedKeyDTO - The signed public key received from the server.
     * @private
     */
    private regProcess(signedKeyDTO: DtoSignedKey): void {
        using _l = Log.context({ component: "ConnectionRegistration", uri: this.uri });
        Log.info("Asymmetric public key received, starting registration steps.");

        // Verify the server's key signature
        let signedKey: CryptoSignedKey;
        try {
            signedKey = SignedKeyUtil.of(signedKeyDTO); // Convert DTO -> Crypto Interface
            if (!this.client.verifySign(signedKey)) {
                Log.error("Server key signature verification failed.", { signedKey: signedKey.toString() });
                this.client.startFuture.error(new ClientStartException("Registration failed: Server key verification failed."));
                return;
            }
             Log.info("Server key signature verified successfully.");
        } catch (e) {
             Log.error("Error processing/verifying server signed key", e as Error, { dto: signedKeyDTO });
             this.client.startFuture.error(new ClientStartException("Registration failed: Could not process server key.", e as Error));
            return;
        }

        // Create CryptoEngine for encrypting streams to the server using its public key
        const asymCE = signedKey.key.asAsymmetric().toCryptoEngine();

        // Get the root API again (should be ready)
        this.getRootApiFuture().to(
            (api: RegistrationRootApiRemote | null) => {
                if (!api) {
                    const errMsg = "Root API became null during regProcess.";
                    Log.error(errMsg, undefined, { uri: this.uri });
                    this.client.startFuture.error(new ClientStartException(`Registration failed: ${errMsg}`));
                    return;
                }

                // --- Step 2: Request WorkProofData ---
                Log.debug("Step 2: Requesting WorkProofData");
                const serverRegApiFuture1 = new RemoteApiFuture<ServerRegistrationApiRemote>(ServerRegistrationApi.META);

                // Define the call within the future
                serverRegApiFuture1.runRes(
                    (apiInner1: ServerRegistrationApiRemote): ARFuture<WorkProofDTO> =>
                        apiInner1.requestWorkProofData(this.client.getParent(), PowMethod.AE_BCRYPT_CRC32, this.tempKeyNative)
                )
                .timeoutError(this.client.getClientState().getTimeoutForConnectToRegistrationServer() / 1000, "Timeout requesting WorkProofData") // Use configured timeout
                .to(
                    (wpd: WorkProofDTO) => { // Success callback for WorkProofData
                        Log.info("Step 2 successful: WorkProofData received. Starting PoW calculation.");

                        // --- Step 3: Perform PoW and Send Keys ---
                        let globalSignedKey: CryptoSignedKey;
                         try {
                             globalSignedKey = SignedKeyUtil.of(wpd.globalKey); // Convert DTO -> Crypto Interface
                             if (!this.client.verifySign(globalSignedKey)) {
                                 Log.error("Global key signature verification failed.", { globalKey: globalSignedKey.toString() });
                                 this.client.startFuture.error(new ClientStartException("Registration failed: Global key verification failed."));
                                 return;
                             }
                              Log.info("Global key signature verified successfully.");
                         } catch (e) {
                              Log.error("Error processing/verifying global signed key", e as Error, { dto: wpd.globalKey });
                              this.client.startFuture.error(new ClientStartException("Registration failed: Could not process global key.", e as Error));
                             return;
                         }


                        // Create CryptoEngine for the nested global stream
                        this.gcp = CryptoEngine.of(
                            globalSignedKey.key.asAsymmetric().toCryptoEngine(), // Public key from WPD
                            this.client.getMasterKey().toCryptoEngine()          // Client's master private key
                        );

                        // --- Placeholder for Proof-of-Work ---
                        Log.warn("Proof-of-Work calculation is NOT IMPLEMENTED. Using placeholder passwords.");
                        const passwords = [12345]; // Placeholder - Replace with actual PoW calculation
                        // const passwords = WorkProofUtil.generateProofOfWorkPool(...) // Requires porting WorkProofUtil

                        Log.debug("Step 3: Sending PoW results and keys.");
                        const serverRegApiFuture2 = new RemoteApiFuture<ServerRegistrationApiRemote>(ServerRegistrationApi.META);

                        // Define the 'registration' call with the nested 'globalApi' stream
                        serverRegApiFuture2.run((apiInner2: ServerRegistrationApiRemote) => {

                            // --- Define the nested Global API stream ---
                            const globalRegServerApiFuture = new RemoteApiFuture<GlobalRegServerApiRemote>(GlobalRegServerApi.META);

                            // Call setMasterKey within the global stream
                            globalRegServerApiFuture.run((gapi: GlobalRegServerApiRemote) => {
                                 const masterKeyDto = KeyUtil.of(this.client.getMasterKey()); // AKey -> DtoKey
                                 if (!masterKeyDto) {
                                      Log.error("Failed to convert master key to DTO for setMasterKey");
                                      // Error handling: maybe error the startFuture?
                                      return; // Stop processing this path
                                 }
                                gapi.setMasterKey(masterKeyDto); // Send client's master key

                                // Call finish within the global stream
                                gapi.finish()
                                    .timeoutError(this.client.getClientState().getTimeoutForConnectToRegistrationServer() / 1000, "Timeout waiting for registration finish response")
                                    .to(
                                        (finishResult: FinishResult_C) => { // Success callback for finish
                                            Log.trace("Step 3 substep successful: registration 'finish' response received.");

                                            // --- FIX FOR DEADLOCK / Step 4 Initiation ---
                                            // 1. Confirm registration immediately - this unblocks the main client startFuture
                                            try {
                                                 this.client.confirmRegistration(finishResult);
                                                 Log.info("Registration confirmed. Client startFuture potentially unblocked.");
                                            } catch (e) {
                                                 Log.error("Error during confirmRegistration", e as Error);
                                                 // If confirm fails, error the main future
                                                 if (!this.client.startFuture.isFinalStatus()) {
                                                      this.client.startFuture.error(new ClientApiException("Failed during registration confirmation", e as Error));
                                                 }
                                                 return; // Stop processing
                                            }


                                            // 2. Initiate Step 4 (resolveServers) asynchronously.
                                            // This happens *after* confirmRegistration.
                                            Log.debug("Step 4: Requesting server resolution.");
                                            const serverRegApiFuture3 = new RemoteApiFuture<ServerRegistrationApiRemote>(ServerRegistrationApi.META);

                                            serverRegApiFuture3.runRes(
                                                (apiInner3: ServerRegistrationApiRemote): ARFuture<ServerDescriptor[]> => {
                                                    Log.trace("Calling resolveServers", { servers: finishResult.cloud });
                                                    return apiInner3.resolveServers(finishResult.cloud);
                                                })
                                                .timeoutError(this.client.getClientState().getTimeoutForConnectToRegistrationServer() / 1000, "Timeout resolving servers after registration")
                                                .to(
                                                    (servers: ServerDescriptor[]) => { // Success resolving servers
                                                        Log.info(`Step 4 successful: Resolved ${servers.length} servers.`);
                                                        servers.forEach(s => {
                                                             Log.trace("Storing resolved server descriptor", { serverId: s.id });
                                                             this.client.servers.putResolved(s.id, s);
                                                        });
                                                        // Registration is fully complete here. startFuture should already be done.
                                                         Log.info("Registration process fully completed successfully.");
                                                    },
                                                    (err: Error) => { // Error resolving servers
                                                        Log.error("Failed to resolve servers after registration.", err);
                                                        // startFuture might already be done, but log error.
                                                        // Consider if client state needs cleanup or retry logic.
                                                        // If startFuture isn't done, error it.
                                                        if (!this.client.startFuture.isFinalStatus()) {
                                                             this.client.startFuture.error(new ClientApiException("Registration failed: Could not resolve servers.", err));
                                                        }
                                                    }
                                                );

                                            // Create and send the stream for resolveServers
                                            const stream3 = ServerRegistrationApiStream.fromRemote(
                                                this.ctxSafe, // Use safe context
                                                asymCE.encrypt.bind(asymCE), // Encrypt with server's asym key
                                                serverRegApiFuture3,
                                                AFuture.make() // Future for stream creation itself
                                            );
                                            api.enter(this.client.getCryptLib(), stream3);
                                            api.flush(); // Flush the root connection for the enter call
                                            Log.trace("Flushed root API for resolveServers request.");
                                            // ----------------------------------------------------

                                        },
                                        (err: Error) => { // Error callback for finish
                                            Log.error("Global API 'finish' call failed.", err);
                                            this.client.startFuture.error(new ClientApiException("Registration failed: Global finish step failed.", err));
                                        }
                                    );
                            });

                            // Create the GlobalApiStream (encrypts with gcp)
                            const globalApiStream = GlobalApiRegistrationServerRegistrationApi.fromRemote(
                                this.globalCtx,
                                this.gcp.encrypt.bind(this.gcp), // Encrypt using derived global engine
                                globalRegServerApiFuture,
                                AFuture.make() // Future for stream creation
                            );

                            // Call registration on the server registration API
                            apiInner2.registration(
                                wpd.salt,
                                wpd.suffix,
                                passwords,
                                this.client.getParent(),
                                this.tempKeyNative, // Send temp symmetric key again
                                globalApiStream // Send the nested, encrypted global stream
                            );
                        }); // End of serverRegApiFuture2.run

                        // Create and send the stream for the 'registration' call
                        const stream2 = ServerRegistrationApiStream.fromRemote(
                            this.ctxSafe, // Use safe context
                            asymCE.encrypt.bind(asymCE), // Encrypt with server's asym key
                            serverRegApiFuture2,
                            AFuture.make() // Future for stream creation
                        );
                        api.enter(this.client.getCryptLib(), stream2);
                        api.flush(); // Flush the root connection to send this 'enter' call
                         Log.trace("Flushed root API for registration request.");

                    }, // End of success callback for WorkProofData
                    (err: Error) => { // Error callback for WorkProofData
                        Log.error("Failed to request WorkProofData.", err);
                        this.client.startFuture.error(new ClientApiException("Registration failed: Could not get WorkProofData.", err));
                    }
                ); // End of .to() for requestWorkProofData

                // Create and send the stream for the 'requestWorkProofData' call
                const stream1 = ServerRegistrationApiStream.fromRemote(
                    this.ctxSafe, // Use safe context
                    asymCE.encrypt.bind(asymCE), // Encrypt with server's asym key
                    serverRegApiFuture1,
                    AFuture.make() // Future for stream creation itself
                );
                api.enter(this.client.getCryptLib(), stream1);
                api.flush(); // Flush the root connection to send this first 'enter' call
                 Log.trace("Flushed root API for requestWorkProofData request.");

            }, // End of success callback for getRootApiFuture
            (e: Error) => { // Error callback for getRootApiFuture in regProcess
                Log.error("Root API not available for regProcess.", e, { uri: this.uri });
                // Don't error startFuture here, connect handles retries/failures
            }
        ); // End of .to() for getRootApiFuture
    }

    /**
     * Handles incoming `enterGlobal` calls from the server during registration.
     * @param {GlobalRegClientApiStream} stream - The incoming stream.
     * @returns {AFuture} A future indicating processing completion/failure.
     */
    enterGlobal(stream: GlobalRegClientApiStream): AFuture {
        const future = AFuture.make();
        using _l = Log.context({ component: "ConnectionRegistration", uri: this.uri });
        try {
            if (!this.gcp) {
                throw new Error("Global crypto provider (gcp) not initialized before receiving enterGlobal.");
            }
            Log.trace(`Received enterGlobal stream (${stream.data.length} bytes)`);
            // Create an empty local API object as GlobalRegClientApi has no methods
            const emptyApi: GlobalRegClientApi = {};
            // Decrypt and process the stream
            stream.accept(this.globalCtx, this.gcp.decrypt.bind(this.gcp), emptyApi);
             Log.trace("enterGlobal stream processed.");
            future.tryDone();
        } catch (e) {
            Log.error("Error processing enterGlobal stream", e as Error);
            future.error(e as Error);
        }
        return future;
    }

    /**
     * Handles incoming `enter` calls (for ClientApiRegSafe) from the server during registration.
     * @param {ClientApiRegSafeStream} stream - The incoming stream.
     * @returns {AFuture} A future indicating processing completion/failure.
     */
    enter(stream: ClientApiRegSafeStream): AFuture {
        const future = AFuture.make();
         using _l = Log.context({ component: "ConnectionRegistration", uri: this.uri });
        try {
            Log.trace(`Received enter (ClientApiRegSafe) stream (${stream.data.length} bytes)`);
            // Create an empty local API object as ClientApiRegSafe has no methods
            const emptyApi: ClientApiRegSafe = {};
            // Decrypt using the temporary symmetric key and process
            stream.accept(this.ctxSafe, this.tempKeyCp.decrypt.bind(this.tempKeyCp), emptyApi);
             Log.trace("enter (ClientApiRegSafe) stream processed.");
            future.tryDone();
        } catch (e) {
            Log.error("Error processing enter (ClientApiRegSafe) stream", e as Error);
            future.error(e as Error);
        }
        return future;
    }
}


// =========================================================================
// AetherCloudClient Implementation
// =========================================================================
/**
 * Main client class for connecting to and interacting with the Aether Cloud.
 * Handles connections, registration, API access, and message streaming.
 * @implements {Destroyable}
 */
export class AetherCloudClient implements Destroyable {
    /** Future that completes when the client is successfully started (registered and connected). */
    public readonly startFuture = AFuture.make();
    /** Event fired when a new MessageNode is created for communication with a peer. */
    public readonly onClientStream = new EventConsumer<MessageNode>(); // Java: EventConsumerWithQueue
    /** Manages cleanup of resources associated with this client. */
    public readonly destroyer: Destroyer;
    /** Logging context specific to this client instance. */
    readonly logClientContext: LNode;
    /** Map of active work connections, keyed by server ID. */
    readonly connections = new Map<number, ConnectionWork>();
    /** Asynchronous map caching Cloud information for known UUIDs. */
    readonly clouds: BMap<UUID, Cloud>;
    /** Asynchronous map caching ServerDescriptors for known server IDs. */
    readonly servers: BMap<number, ServerDescriptor>;
    /** Current registration status of the client. */
    readonly regStatus = new AtomicReference<RegStatus>(RegStatus.NO);
    /** Map of active message nodes, keyed by consumer UUID string. */
    readonly messageNodeMap = new Map<string, MessageNode>();
    /** Event fired when the server notifies the client of a new child. */
    readonly onNewChild = new EventConsumer<UUID>();
    /** Event fired when a new child is added *and* its ServerApiByUid is resolved. */
    readonly onNewChildApi = new EventBiConsumer<UUID, ServerApiByUid>(); // ServerApiByUid is local interface

    private readonly clientState: ClientState;
    /** Flag to ensure the connection process is initiated only once. */
    private readonly startConnection = new AtomicReference<boolean>(false); // Java: AtomicBoolean
    /** Default timeout in seconds for certain async operations. */
    private readonly timeout1 = 5;
    /** Optional descriptive name for this client instance (used in logging). */
    private name: string | null;

    /**
     * Creates an instance of AetherCloudClient.
     * @param {ClientState} store - The storage mechanism for the client's state.
     * @param {string | null} [name] - An optional name for the client instance.
     */
    constructor(store: ClientState, name?: string | null) {
        this.name = name ?? null;
        this.logClientContext = Log.context({ SystemComponent: "Client", ClientName: this.name ?? 'Unnamed' }).node;
        using _l = Log.context(this.logClientContext); // Set context for constructor duration

        this.clientState = store;
        this.destroyer = new Destroyer(`AetherCloudClient-${this.name ?? 'Unnamed'}`);
        // Ensure connections are closed when the client is destroyed
        this.destroyer.add({ [Symbol.dispose]: () => { this.closeConnections(); }}); // Wrap closeConnections

        // Initialize BMaps for clouds and servers
        this.clouds = RCol.bMap<UUID, Cloud>(2000, "CloudCache");
        this.servers = RCol.bMap<number, ServerDescriptor>(2000, "ServerCache");

        // --- Setup Listeners for BMap Updates ---
        // When a cloud is resolved/updated in the BMap, save it to the persistent state
        this.clouds.forValueUpdate().add((update: RMap.Update<UUID, Cloud>) => {
            using _l_cloud = Log.context(this.logClientContext);
            Log.trace("Cloud cache updated via forValueUpdate, saving to state.", { uid: update.key.toString() });
            store.setCloud(update.key, update.newValue);
        });
        // When a server descriptor is resolved/updated, save it to the persistent state
        this.servers.forValueUpdate().add((update: RMap.Update<number, ServerDescriptor>) => {
            using _l_server = Log.context(this.logClientContext);
            Log.trace("Server cache updated via forValueUpdate, saving to state.", { serverId: update.key });
            store.getServerInfo(update.key).setDescriptor(update.newValue);
        });

        // When a new child is notified, try to get its API and fire the onNewChildApi event
        this.onNewChild.add((u: UUID) => {
            if (this.onNewChildApi.hasListener()) {
                 using _l_child = Log.context(this.logClientContext);
                 Log.trace("New child detected, attempting to get its API", { childUid: u.toString() });
                this.getClientApi(u).to(
                    (api) => { // API resolved successfully
                        if (api) {
                             Log.trace("API for new child resolved, firing event", { childUid: u.toString() });
                             this.onNewChildApi.fire(u, api); // Fire with resolved API
                        } else {
                             Log.warn("API resolved to null for new child", { childUid: u.toString() });
                        }
                    },
                    (err: Error) => Log.error("Failed to get Client API for new child", err, { childUid: u.toString() })
                );
            }
        });

        // Initiate connection process
        this.connect();
    }

    /**
     * Closes all active work connections.
     * @returns {AFuture} A future that completes when all connections are closed.
     * @private
     */
    private closeConnections(): AFuture {
        using _l = Log.context(this.logClientContext);
        Log.info("Closing all client work connections...");
        const closeFutures = Array.from(this.connections.values()).map(c => c.destroy(true)); // Destroy each connection
        this.connections.clear(); // Clear the map
        return AFuture.all(...closeFutures); // Return a future that waits for all closes
    }

    /**
     * Retrieves the access groups a client belongs to.
     * @param {UUID} uid - The client UUID.
     * @returns {ARFuture<Set<number>>} A future containing the set of group IDs.
     */
    public getClientGroups(uid: UUID): ARFuture<Set<number>> {
        return this.getAuthApiFuture().mapRFuture(
             // API expects UUID, returns number[] -> convert to Set<number>
             a => a.getAccessGroups(uid).map(groupIds => new Set(groupIds ?? []))
        );
    }

    /**
     * Retrieves all client UUIDs that the specified client has access to (via groups).
     * @param {UUID} uid - The client UUID.
     * @returns {ARFuture<Set<UUID>>} A future containing the set of accessible client UUIDs.
     */
    public getAllAccessedClients(uid: UUID): ARFuture<Set<UUID>> {
        return this.getAuthApiFuture().mapRFuture(
            // API expects UUID, returns UUID[] -> convert to Set<UUID>
            a => a.getAllAccessedClients(uid).map(uids => new Set(uids ?? []))
        );
    }

    /**
     * Checks if one client has permission to send messages to another.
     * @param {UUID} uid1 - The source client UUID.
     * @param {UUID} uid2 - The target client UUID.
     * @returns {ARFuture<boolean>} A future containing true if access is granted, false otherwise.
     */
    public checkAccess(uid1: UUID, uid2: UUID): ARFuture<boolean> {
        return this.getAuthApiFuture().mapRFuture(a => a.checkAccessForSendMessage2(uid1, uid2));
    }

    /**
     * Retrieves the details of an AccessGroup by its ID.
     * @param {number} groupId - The ID of the access group.
     * @returns {ARFuture<AccessGroup>} A future containing the AccessGroup DTO.
     */
    public getGroup(groupId: number): ARFuture<AccessGroup> {
        // Note: Java returns AccessGroupI, TS returns the DTO AccessGroup directly
        return this.getAuthApiFuture().mapRFuture(a => a.getAccessGroup(groupId));
    }

     /**
      * Creates a new access group owned by the current client.
      * @param {...UUID} uids - UUIDs to initially add to the group.
      * @returns {ARFuture<AccessGroup>} A future containing the newly created AccessGroup.
      * @experimental Might need AccessGroupI equivalent in TS if stateful operations are needed.
      */
     public createAccessGroup(...uids: UUID[]): ARFuture<AccessGroup> {
         const owner = this.getUid();
         if (!owner) return ARFuture.ofThrow(new ClientApiException("Client not registered, cannot create access group."));
         return this.createAccessGroupWithOwner(owner, ...uids);
     }

     /**
      * Creates a new access group with a specified owner.
      * @param {UUID} owner - The UUID of the group owner.
      * @param {...UUID} uids - UUIDs to initially add to the group.
      * @returns {ARFuture<AccessGroup>} A future containing the newly created AccessGroup.
      * @experimental Might need AccessGroupI equivalent in TS if stateful operations are needed.
      */
     public createAccessGroupWithOwner(owner: UUID, ...uids: UUID[]): ARFuture<AccessGroup> {
        // Directly returning the DTO after creation. Java returned AccessGroupImpl.
        return this.getAuthApiFuture().mapRFuture(api =>
             api.createAccessGroup(owner, uids)
                .map(id => new AccessGroup(owner, id, uids)) // Construct DTO with result ID
        );
     }


    /**
     * Gets the client state storage interface.
     * @returns {ClientState} The client state.
     */
    public getClientState(): ClientState { return this.clientState; }

    /**
     * Gets the optional name of this client instance.
     * @returns {string | null} The client name.
     */
    public getName(): string | null { return this.name; }

    /**
     * Sets the optional name of this client instance.
     * @param {string | null} name - The new client name.
     */
    public setName(name: string | null): void { this.name = name; }

    /**
     * Retrieves the server descriptor by its ID, using the BMap cache.
     * @param {number} id - The server ID.
     * @returns {ARFuture<ServerDescriptor>} A future containing the ServerDescriptor.
     */
    public getServer(id: number): ARFuture<ServerDescriptor> {
        if (id <= 0) {
            Log.warn("getServer called with invalid ID", { serverId: id });
            return ARFuture.ofThrow(new Error(`Invalid server ID: ${id}`));
        }
        const res = this.servers.getFuture(id);
        // Add timeout with error propagation
        res.timeoutError(this.timeout1, `Timeout waiting for server description: ${id}. Request pending or failed.`);
        return res;
    }

    /**
     * Resolves server descriptors for a given UUID's cloud and calls a consumer for each.
     * @param {UUID} uid - The UUID whose cloud servers are needed.
     * @param {AConsumer<ServerDescriptor>} consumer - The callback to execute for each resolved descriptor.
     */
    public getServerDescriptorForUid(uid: UUID, consumer: AConsumer<ServerDescriptor>): void {
        using _l = Log.context(this.logClientContext);
        if (this.destroyer.isDestroyed()) {
            Log.warn("getServerDescriptorForUid called on destroyed client", { uid: uid.toString() });
            return;
        }

        // Optimization: If it's our own UID, use the local state directly
        if (uid.toString() === this.getUid()?.toString()) {
            Log.trace("Resolving servers for own UID from local state", { uid: uid.toString() });
            const cloud = this.clientState.getCloud(uid);
            if (cloud && cloud.data && cloud.data.length > 0) {
                cloud.data.forEach(serverId => {
                    this.servers.getFuture(serverId) // Use BMap to get future
                        .to(
                            sd => { if(sd) consumer(sd); else Log.warn("Own cloud server descriptor resolved to null", { serverId }); },
                            err => Log.error("Error resolving own cloud server descriptor", err, { serverId })
                        );
                });
            } else {
                 Log.warn("Own cloud data is missing or empty in local state", { uid: uid.toString() });
                 // Maybe trigger re-registration or error? For now, just warn.
            }
            return;
        }

        // For other UUIDs, use the BMap `getCloud` process
        Log.trace("Resolving servers for other UID via cloud cache/request", { uid: uid.toString() });
        this.getCloud(uid).to(
            (cloud: Cloud | null) => {
                if (!cloud || !cloud.data || cloud.data.length === 0) {
                    Log.warn("No cloud data found for UID during getServerDescriptorForUid", { uid: uid.toString() });
                    return; // No servers to resolve
                }
                 Log.trace(`Found cloud for UID, resolving ${cloud.data.length} servers`, { uid: uid.toString() });
                const serverFutures = cloud.data.map(serverId => this.getServer(serverId)); // getServer uses BMap

                // Wait for all server futures for this cloud
                ARFuture.all(serverFutures)
                    .to(
                        (descriptors: (ServerDescriptor | null)[]) => {
                             Log.trace(`Resolved ${descriptors.filter(d=>d).length} servers for UID`, { uid: uid.toString() });
                             descriptors.forEach(d => { if (d) { try { consumer(d); } catch(e) { Log.error("Error in server descriptor consumer", e as Error, {uid: uid.toString(), serverId: d.id}); }} });
                        }
                    )
                    .onError( (err: Error) => Log.error("Error resolving servers for UID's cloud", err, { uid: uid.toString() }) )
                    .timeoutError(this.timeout1, `Timeout resolving all servers for cloud of ${uid.toString()}`);
            },
            (err: Error) => Log.warn("Timeout or error resolving cloud for UID", err, { uid: uid.toString() }) // Error from getCloud
        );
    }

    /**
     * Gets or creates a ConnectionWork instance for the given ServerDescriptor.
     * @param {ServerDescriptor} serverDescriptor - The descriptor of the target server.
     * @returns {ConnectionWork} The existing or newly created connection.
     * @throws {ClientApiException} if serverDescriptor is null.
     * @throws {ClientStartException} if the client is destroyed during connection creation.
     */
    getConnection(serverDescriptor: ServerDescriptor): ConnectionWork {
        if (!serverDescriptor) {
            throw new ClientApiException("Cannot get connection for null ServerDescriptor.");
        }
        // Ensure the descriptor is in the BMap cache
        this.servers.putResolved(serverDescriptor.id, serverDescriptor);

        let connection = this.connections.get(serverDescriptor.id);
        if (!connection) {
            using _l = Log.context(this.logClientContext);
            Log.debug("Creating new ConnectionWork", { serverId: serverDescriptor.id });
            connection = new ConnectionWork(this, serverDescriptor);
            this.connections.set(serverDescriptor.id, connection);

            // Double check destruction after creation attempt
            if (this.destroyer.isDestroyed()) {
                Log.warn("Client destroyed during connection creation, destroying new connection.", { serverId: serverDescriptor.id });
                connection.destroy(true); // Destroy the newly created connection
                this.connections.delete(serverDescriptor.id); // Remove it from the map
                throw new ClientStartException("Client destroyed during connection creation");
            }
             Log.info("Created and added new connection", { serverId: serverDescriptor.id, uri: connection.uri });
        }
        return connection;
    }


    /**
     * Initiates the client connection process (registration or connection to work servers).
     * Ensures the process is started only once.
     * @returns {AFuture} The `startFuture` which completes when the client is ready.
     */
    public connect(): AFuture {
        if (!this.startConnection.compareAndSet(false, true)) {
            Log.debug("Connect called, but connection process already started.");
            return this.startFuture; // Already started or starting
        }

        using _l = Log.context(this.logClientContext);
        Log.info("AetherCloudClient connect() initiated.");

        // Start the recursive connection logic with a retry limit
        this._connectInternal(10); // Start with 10 retry attempts

        // Add logging for startFuture completion/failure/cancellation
        this.startFuture.to(
            () => { // Success
                using _l_done = Log.context(this.logClientContext);
                Log.info("AetherCloudClient started successfully.");
                // Schedule periodic flush after successful start
                 RU.scheduleAtFixedRate(this.destroyer, this.getPingTime() / 3, "MILLISECONDS", this.flush.bind(this)); // Adjust frequency?
            },
            (e: Error) => { // Error
                using _l_err = Log.context(this.logClientContext);
                Log.error("Client failed to start", e);
            }
        ).onCancel(() => { // Cancelled
             using _l_cancel = Log.context(this.logClientContext);
             Log.warn("Client start was cancelled");
        });

        return this.startFuture;
    }

    /**
     * Internal recursive logic for connection attempts (registration or work server connection).
     * @param {number} step - The number of remaining retry attempts.
     * @private
     */
    private _connectInternal(step: number): void {
        using _l = Log.context(this.logClientContext);

        if (this.destroyer.isDestroyed()) {
             Log.warn("_connectInternal called on destroyed client. Cancelling startFuture.");
            if (!this.startFuture.isFinalStatus()) this.startFuture.cancel();
            return;
        }
        if (step <= 0) {
            Log.error(`All connection attempts (${10}) failed.`);
            if (!this.startFuture.isFinalStatus()) {
                this.startFuture.error(new ClientStartException(`All connection attempts failed to register or connect after ${10} tries.`));
            }
            return;
        }

        const currentUid = this.getUid();

        if (currentUid === null) {
            // --- Registration Logic ---
            if (this.regStatus.compareAndSet(RegStatus.NO, RegStatus.BEGIN)) {
                Log.info("Starting registration process...");
                const uris = this.clientState.getRegistrationUri();
                if (!uris || uris.length === 0) {
                    const errMsg = "Registration URI list is empty.";
                    Log.error(errMsg);
                    if (!this.startFuture.isFinalStatus()) this.startFuture.error(new ClientStartException(errMsg));
                    this.regStatus.set(RegStatus.NO); // Reset status
                    return;
                }

                const timeoutForConnect = this.clientState.getTimeoutForConnectToRegistrationServer();
                const countServers = Math.min(uris.length, this.clientState.getCountServersForRegistration());

                try {
                    // Shuffle URIs and take the first 'countServers'
                    const shuffledUris = [...uris]; // Create a copy
                    for (let i = shuffledUris.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [shuffledUris[i], shuffledUris[j]] = [shuffledUris[j], shuffledUris[i]]; // Fisher-Yates shuffle
                    }

                    Log.debug(`Attempting registration with ${countServers} servers`, { uris: shuffledUris.slice(0, countServers) });

                    // Create ConnectionRegistration instances and get their connect futures
                    const regFutures = shuffledUris.slice(0, countServers).map(uri => {
                        using _l_conn = Log.context(this.logClientContext);
                        Log.debug("Creating ConnectionRegistration", { uri });
                        try {
                             const regConn = new ConnectionRegistration(this, uri);
                             return regConn.connectFuture.toFuture(); // Convert ARFuture<RT> to AFuture
                        } catch (connErr) {
                             Log.error("Error creating ConnectionRegistration", connErr as Error, { uri });
                             return AFuture.ofThrow(connErr as Error); // Return failed future
                        }
                    });

                    // Wait for any registration connection to succeed
                    const anyRegFuture = AFuture.any(...regFutures);

                    // If any succeeds, the startFuture will be completed by confirmRegistration
                    // If all fail or are cancelled, handle that here
                    anyRegFuture.onError((err: Error) => {
                         using _l_err = Log.context(this.logClientContext);
                         Log.error(`All ${countServers} registration connection attempts failed. Retrying...`, err);
                         this.regStatus.set(RegStatus.NO); // Reset status for retry
                         RU.schedule(4000, () => this._connectInternal(step - 1)); // Schedule retry
                    });

                    anyRegFuture.onCancel(() => {
                         using _l_cancel = Log.context(this.logClientContext);
                         Log.warn("All registration connection attempts were cancelled.");
                         // Don't retry automatically on cancel, let startFuture handle it if needed
                          if (!this.startFuture.isFinalStatus()) this.startFuture.cancel();
                    });

                    // Overall timeout for any connection to succeed
                    let timeoutDisposer: Disposable | null = null;
                     const timeoutAction = () => {
                         timeoutDisposer = null; // Clear disposer ref
                         if (!anyRegFuture.isFinalStatus() && this.regStatus.get() === RegStatus.BEGIN) { // Check status too
                            using _l_timeout = Log.context(this.logClientContext);
                            Log.error(`Timeout (${timeoutForConnect}ms) waiting for any registration connection. Retrying...`, { uris: shuffledUris.slice(0, countServers) });
                            anyRegFuture.cancel(); // Cancel the 'any' future
                            regFutures.forEach(f => f.cancel()); // Cancel individual futures
                            this.regStatus.set(RegStatus.NO); // Reset status for retry
                            RU.schedule(4000, () => this._connectInternal(step - 1)); // Schedule retry
                         }
                     };
                    timeoutDisposer = RU.schedule(timeoutForConnect, timeoutAction);


                    // Clean up timeout if any future completes or startFuture finishes
                     const cleanupTimeout = () => { if(timeoutDisposer) timeoutDisposer[Symbol.dispose](); timeoutDisposer = null; };
                     anyRegFuture.addListener(cleanupTimeout);
                     this.startFuture.addListener(cleanupTimeout); // Also stop timeout if client is destroyed/start completes early


                } catch (e) {
                    Log.error("Fatal error during registration setup.", e as Error);
                    if (!this.startFuture.isFinalStatus()) {
                        this.startFuture.error(new ClientStartException("Fatal error during registration setup.", e as Error));
                    }
                    this.regStatus.set(RegStatus.NO); // Reset status
                }
            } else {
                Log.debug("Registration already in progress or completed, waiting for status change.", { currentStatus: this.regStatus.get() });
            }
        } else {
            // --- Work Server Connection Logic ---
            Log.info("Client already registered, connecting to own cloud...");
            try {
                const cloud = this.clientState.getCloud(currentUid);
                if (!cloud || !cloud.data || cloud.data.length === 0) {
                    const errMsg = "Client registered but cloud data is missing or empty. Attempting re-registration logic.";
                    Log.error(errMsg, undefined, { uid: currentUid.toString() });
                    // Reset state and retry registration
                    this.clientState.setUid(null!); // Force re-registration
                    this.clientState.setAlias(null);
                    this.regStatus.set(RegStatus.NO);
                    this._connectInternal(step - 1); // Retry immediately
                    return;
                }

                Log.debug(`Found ${cloud.data.length} servers in own cloud. Attempting connection...`, { uid: currentUid.toString() });

                // Attempt to connect to servers in the cloud
                const connectFutures: ARFuture<LoginApiRemote>[] = cloud.data.map(serverId => {
                    const serverDesc = this.clientState.getServerDescriptor(serverId);
                    if (serverDesc) {
                         using _l_conn = Log.context(this.logClientContext);
                         Log.debug("Connecting to work server in own cloud", { serverId });
                         try {
                              // Get or create connection and return its root API future
                             return this.getConnection(serverDesc).getRootApiFuture();
                         } catch (connErr) {
                              Log.error("Error creating/getting connection for own cloud server", connErr as Error, { serverId });
                              return ARFuture.ofThrow<LoginApiRemote>(connErr as Error); // Failed future
                         }
                    } else {
                         // Server descriptor not cached, try resolving it first
                         Log.warn("ServerDescriptor missing for own cloud server, attempting resolution", { serverId });
                         return this.getServer(serverId) // Use BMap to resolve
                                   .mapRFuture( (resolvedDesc: ServerDescriptor | null): ARFuture<LoginApiRemote> => {
                                       if(resolvedDesc) {
                                            using _l_conn = Log.context(this.logClientContext);
                                            Log.debug("Resolved descriptor, connecting to work server", { serverId });
                                             try {
                                                 return this.getConnection(resolvedDesc).getRootApiFuture();
                                             } catch (connErr) {
                                                 Log.error("Error creating/getting connection after resolving descriptor", connErr as Error, { serverId });
                                                 return ARFuture.ofThrow<LoginApiRemote>(connErr as Error);
                                             }
                                       } else {
                                            const errMsg = `Failed to resolve ServerDescriptor for own cloud server ${serverId}`;
                                            Log.error(errMsg);
                                            return ARFuture.ofThrow<LoginApiRemote>(new Error(errMsg));
                                       }
                                   });
                    }
                }); // End of map

                // Wait for *any* connection future to complete successfully
                AFuture.any(...connectFutures.map(f => f.toFuture())) // Convert ARFuture[] to AFuture[] for any()
                  .to(
                    () => { // At least one connection succeeded
                      using _l_conn_ok = Log.context(this.logClientContext);
                      Log.info("Successfully connected to at least one work server in own cloud.");
                      // If the main startFuture hasn't failed/cancelled, mark it as done
                      if (!this.startFuture.isFinalStatus()) this.startFuture.tryDone();
                      this.startScheduledTask(); // Start background tasks
                    },
                    (err: Error) => { // All connection attempts failed
                      using _l_conn_err = Log.context(this.logClientContext);
                      Log.error("Failed to connect to any work server in own cloud. Retrying...", err);
                      // Schedule a retry
                      RU.schedule(5000, () => this._connectInternal(step - 1));
                    }
                  )
                  .timeoutError(10, `Timeout connecting to own cloud servers for UID ${currentUid.toString()}`); // Add timeout

            } catch (e) {
                Log.error("Fatal error during connection to own cloud.", e as Error);
                if (!this.startFuture.isFinalStatus()) {
                    this.startFuture.error(new ClientStartException("Fatal error during connection to own cloud.", e as Error));
                }
                // Consider retry here as well? Or let the outer mechanism handle it.
                // RU.schedule(5000, () => this._connectInternal(step - 1));
            }
        } // End of else (Work Server Connection)
    } // End of _connectInternal

  /**
   * Placeholder method called after successful client start to initiate background tasks.
   * @private
   */
  private startScheduledTask(): void {
    using _l = Log.context(this.logClientContext);
    Log.debug("Client started, initiating scheduled background tasks (like flush).");
    // The actual scheduling is now done in the `connect()` method's success handler
    // This method remains as a potential hook if needed later.
  }

  /**
   * Retrieves the client's unique identifier (UUID).
   * @returns {UUID | null} The client's UUID, or null if not registered.
   */
  public getUid(): UUID | null {
    return this.clientState.getUid();
  }

  /**
   * Returns a future that completes with the AuthorizedApi instance for making authenticated calls.
   * Handles potential delays if connections are not yet ready.
   * @returns {ARFuture<AuthorizedApiRemote>} A future resolving to the authorized API.
   */
  public getAuthApiFuture(): ARFuture<AuthorizedApiRemote> {
    const resultFuture = ARFuture.of<AuthorizedApiRemote>();
    using _l = Log.context(this.logClientContext);

    if (this.destroyer.isDestroyed()) {
      Log.warn("getAuthApiFuture called on destroyed client.");
      resultFuture.cancel();
      return resultFuture;
    }

    // Wait for the client to start successfully
    this.startFuture.to(
      () => { // Client started successfully
        Log.trace("Client started, attempting to get Authorized API.");
        // Find an active, ready connection
        const activeConnections = Array.from(this.connections.values())
          .filter(c => c.connectFuture.isDone() && !c.connectFuture.isError() && c.firstAuth); // Check firstAuth flag too

        if (activeConnections.length > 0) {
          const firstConnWork = activeConnections[0];
          Log.trace(`Using connection ${firstConnWork.uri} to get Authorized API.`);
          // Use runRes to extract the API instance from the RemoteApiFuture
          const apiGetter = firstConnWork.remoteApiFutureAuth.runRes(
            (api: AuthorizedApiRemote): ARFuture<AuthorizedApiRemote> => ARFuture.of(api)
          );
          // Pipe the result to the main future with a timeout
          apiGetter.to(resultFuture) // Automatically handles success, error, cancel
            .timeoutError(this.timeout1, `Timeout getting AuthorizedApi from connection ${firstConnWork.uri}`);
        } else {
          Log.warn("getAuthApiFuture called, but no active and authenticated connections available. Triggering connection check/attempt.");
          // Try to establish a connection if none are ready
          this.makeFirstConnection();
          // Retry getting the API after a short delay
          RU.schedule(500, () => {
            if (!resultFuture.isFinalStatus()) {
              Log.trace("Retrying getAuthApiFuture after delay.");
              this.getAuthApiFuture().to(resultFuture); // Chain the retry result
            }
          });
          // Add a longer timeout for the case where connection needs to be established
          resultFuture.timeoutError(this.timeout1 + 5, "Timeout waiting for any connection to become active for getAuthApiFuture"); // Increased timeout
        }
      },
      (e: Error) => { // Client failed to start
        Log.error("Client not started, cannot get Authorized API.", e);
        resultFuture.error(new ClientApiException("Client not started, cannot get Authorized API.", e));
      }
    ).onCancel(() => { // Client start was cancelled
       Log.warn("Client start was cancelled, cannot get Authorized API.");
      resultFuture.cancel();
    });

    return resultFuture;
  }

  /**
   * Executes a consumer function when the AuthorizedApi is available.
   * Logs errors that occur within the consumer.
   * @param {AConsumer<AuthorizedApiRemote>} consumer - The function to execute.
   */
  public getAuthApi(consumer: AConsumer<AuthorizedApiRemote>): void {
    if (this.destroyer.isDestroyed()) return;
    this.getAuthApiFuture().to(
      api => { try { consumer(api); } catch (e) { Log.error("Error in getAuthApi consumer", e as Error); } },
      err => Log.error("Error providing AuthorizedApi to consumer in getAuthApi", err)
    );
  }

  /**
   * Executes an asynchronous function that takes the AuthorizedApi and returns a future.
   * @template T
   * @param {AFunction<AuthorizedApiRemote, ARFuture<T>>} func - The asynchronous function to execute.
   * @returns {ARFuture<T>} A future representing the result of the provided function.
   */
  public getAuthApi1<T>(func: AFunction<AuthorizedApiRemote, ARFuture<T>>): ARFuture<T> {
    if (this.destroyer.isDestroyed()) return ARFuture.canceled<T>();
    // Chain the function execution onto the future that provides the API
    return this.getAuthApiFuture().mapRFuture(func);
  }

  /**
   * Flushes pending data (API calls, messages) across all active connections.
   * Also triggers `makeFirstConnection` if flushing is needed but no connections exist.
   */
  public flush(): void {
    using _l = Log.context(this.logClientContext);
    if (this.destroyer.isDestroyed()) return;

    // Check if a connection attempt is needed
    const needsConnection = this.messageNodeMap.size > 0 || this.servers.isRequests() || this.clouds.isRequests();
    if (this.connections.size === 0 && needsConnection) {
      Log.debug("Flush needed but no connections, attempting to make first connection.");
      this.makeFirstConnection();
    }

    // Flush all existing connections that are ready
    this.connections.forEach(c => {
      // Only flush connections that are fully connected and authenticated
      if (c.connectFuture.isDone() && !c.connectFuture.isError() && c.firstAuth) {
        Log.trace("Flushing connection", { uri: c.uri });
        c.flush(); // Call the explicit flush on ConnectionWork
      } else {
        Log.trace("Skipping flush for connection not yet ready/authenticated", { uri: c.uri, connected: c.connectFuture.isDone(), error: c.connectFuture.isError(), authenticated: c.firstAuth });
      }
    });
  }

  /**
   * Attempts to establish the first connection to a server in the client's own cloud.
   * Called when a flush is needed but no connections exist.
   */
  makeFirstConnection(): void {
    using _l = Log.context(this.logClientContext);
    if (this.destroyer.isDestroyed() || this.connections.size > 0) {
       Log.trace("Skipping makeFirstConnection", { destroyed: this.destroyer.isDestroyed(), connections: this.connections.size });
      return; // Don't proceed if destroyed or connections already exist
    }

    const uid = this.getUid();
    if (uid === null) {
      Log.warn("Cannot make first connection: client not registered (UID is null). Triggering connect process.");
      this.connect(); // Re-trigger connect if not registered
      return;
    }

    const cloud = this.clientState.getCloud(uid);
    if (cloud === null || cloud.data.length === 0) {
      Log.warn("Cannot make first connection: own cloud data is missing or empty.", { uid: uid.toString() });
      // Potentially trigger re-registration or error handling
      // this.clientState.setUid(null!); this.regStatus.set(RegStatus.NO); this.connect();
      return;
    }

    // Try connecting to the first server in the cloud
    const serverId = cloud.data[0];
    Log.debug("Making first connection to server", { serverId });

    this.getServer(serverId) // Use BMap to resolve/get descriptor
      .to(
        (descriptor: ServerDescriptor | null) => {
          if (descriptor && !this.connections.has(serverId)) { // Double-check if connection was created concurrently
            Log.info("Establishing first connection via resolved descriptor", { serverId });
            try {
               this.getConnection(descriptor); // Get or create connection
            } catch (e) {
               Log.error("Error creating first connection", e as Error, { serverId });
            }
          } else if (!descriptor) {
            Log.error("Failed to get ServerDescriptor for first connection attempt", undefined, { serverId });
          } else {
             Log.trace("Connection already exists for first connection attempt server", { serverId });
          }
        },
        (err: Error) => Log.warn("Failed to get ServerDescriptor for first connection", err, { serverId })
      )
      // Timeout already handled by getServer()
  }

  /**
   * Gets a list of currently active work connections.
   * @returns {ConnectionWork[]} An array of active connections.
   */
  public getConnections(): ConnectionWork[] {
    return Array.from(this.connections.values());
  }

  /**
   * Retrieves the Cloud descriptor for a given UUID, using the BMap cache/request mechanism.
   * @param {UUID} uid - The UUID of the cloud owner.
   * @returns {ARFuture<Cloud | null>} A future containing the Cloud descriptor or null if not found/error.
   */
  public getCloud(uid: UUID): ARFuture<Cloud | null> {
    using _l = Log.context(this.logClientContext);
    if (this.destroyer.isDestroyed()) {
      Log.warn("getCloud called on destroyed client", { uid: uid.toString() });
      return ARFuture.canceled<Cloud | null>();
    }

    // Check local state first (might be own cloud or recently fetched)
    const cachedCloud = this.clientState.getCloud(uid);
    if (cachedCloud) {
      Log.trace("Returning cached cloud from clientState", { uid: uid.toString() });
      return ARFuture.of(cachedCloud);
    }

    // Use BMap to get future (will request if not available)
    Log.trace("Requesting cloud via BMap", { uid: uid.toString() });
    const res = this.clouds.getFuture(uid); // Returns ARFutureWithFlag<Cloud>

    // Add timeout with error propagation
    res.timeoutError(this.timeout1 + 2, `Timeout getting cloud for: ${uid.toString()}`); // Slightly longer timeout

    // Map ARFutureWithFlag<Cloud> to ARFuture<Cloud | null> for the public API
    return res.map(cloud => cloud ?? null); // Map done state to value or null
  }

  /**
   * Gets the current ping interval in milliseconds.
   * @returns {number} The ping interval.
   */
  public getPingTime(): number {
    // Use default if AMFuture hasn't resolved yet
    return this.clientState.getPingDuration().getNow() ?? 1000;
  }

  /**
   * Checks if the client is currently registered (has a UID).
   * @returns {boolean} True if registered, false otherwise.
   */
  public isRegistered(): boolean {
    return this.clientState.getUid() !== null;
  }

  /**
   * Confirms the registration process using the result from the server.
   * Updates the client state and completes the `startFuture`.
   * @param {FinishResult_C} regResp - The registration result DTO.
   */
  public confirmRegistration(regResp: FinishResult_C): void {
    using _l = Log.context(this.logClientContext);
    // Ensure registration is in the correct state to be confirmed
    if (!this.regStatus.compareAndSet(RegStatus.BEGIN, RegStatus.CONFIRM)) {
       Log.info("Registration already confirmed or not in BEGIN state", { regDataAlias: regResp.alias.toString(), currentStatus: this.regStatus.get() });
       // If already confirmed, still update cloud/state info just in case
       if (this.regStatus.get() === RegStatus.CONFIRM) {
         Log.info("Re-confirming registration details", { uid: regResp.uid.toString() });
         this.clouds.putResolved(regResp.uid, regResp.cloud); // Update cloud cache
         this.clientState.setUid(regResp.uid); // Update state
         this.clientState.setAlias(regResp.alias); // Update state
         this.ensureOwnCloudConnections(regResp.cloud); // Re-check connections
       }
       // If status was NO, something went wrong, log error?
       if (this.regStatus.get() === RegStatus.NO) {
         Log.error("confirmRegistration called while status was NO.", undefined, { regRespAlias: regResp.alias.toString() });
       }
       return; // Don't proceed if CAS failed
    }

    Log.info("Confirming registration...", { uid: regResp.uid.toString(), alias: regResp.alias.toString() });

    // Update BMap cache (triggers state saving via listener)
    this.clouds.putResolved(regResp.uid, regResp.cloud);

    // Update volatile state directly
    this.clientState.setUid(regResp.uid);
    this.clientState.setAlias(regResp.alias);

    Log.info("Received own cloud", { cloud: regResp.cloud });

    // Ensure connections to the newly assigned cloud servers are established
    this.ensureOwnCloudConnections(regResp.cloud);

    // Complete the main client start future
    if (!this.startFuture.isFinalStatus()) {
      Log.info("Marking client startFuture as done due to registration confirmation.");
      this.startFuture.tryDone();
    } else {
      Log.warn("startFuture was already final when confirmRegistration completed.");
    }
  }

  /**
   * Ensures connections are established to servers listed in the client's own cloud.
   * Called after registration confirmation or during initial connect if already registered.
   * @param {Cloud} cloud - The client's own cloud data.
   * @private
   */
  private ensureOwnCloudConnections(cloud: Cloud): void {
    using _l = Log.context(this.logClientContext);
    if (cloud?.data?.length > 0) {
      Log.debug(`Ensuring connections to ${cloud.data.length} own cloud servers`);
      cloud.data.forEach(serverId => {
        this.getServer(serverId) // Use BMap to resolve descriptor
          .to(
            (sd: ServerDescriptor | null) => {
              if (sd) {
                Log.trace("Getting/creating connection for own cloud server", { serverId });
                try {
                  this.getConnection(sd); // Get or create
                } catch (e) {
                  Log.error("Error ensuring connection to own cloud server", e as Error, { serverId });
                }
              } else {
                Log.warn("Failed to get descriptor for own cloud server", { serverId });
              }
            },
            (err: Error) => Log.warn("Failed to get/connect to own cloud server after registration", err, { serverId })
          );
      });
    } else {
      Log.warn("Own cloud data is empty after registration confirmation.");
      // If startFuture isn't done yet, this is a critical error
      if (!this.startFuture.isFinalStatus()) {
        this.startFuture.error(new ClientStartException("Registration confirmed but received empty cloud data."));
      }
    }
  }

  /**
   * Gets or creates a MessageNode for communication with the specified peer UUID.
   * @param {UUID} uid - The UUID of the peer.
   * @param {MessageEventListener} [strategy=MessageEventListenerDefault] - The strategy for connection management.
   * @returns {MessageNode} The existing or newly created MessageNode.
   * @throws {Error} if uid is null or undefined.
   */
  public getMessageNode(uid: UUID): MessageNode;
  public getMessageNode(uid: UUID, strategy: MessageEventListener): MessageNode;
  public getMessageNode(uid: UUID, strategy?: MessageEventListener): MessageNode {
    using _l = Log.context(this.logClientContext);
    Log.debug("getMessageNode for", { uid: uid?.toString() });
    if (!uid) throw new Error("UUID cannot be null for getMessageNode");

    const uuidString = uid.toString();
    let node = this.messageNodeMap.get(uuidString);

    if (!node) {
      const actualStrategy = strategy ?? MessageEventListenerDefault;
      Log.debug("Creating new MessageNode", { uid: uuidString });
      node = new MessageNode(this, uid, actualStrategy);
      this.messageNodeMap.set(uuidString, node);
      // Fire event after creation and adding to map
      try { this.onClientStream.fire(node); } catch (e) { Log.error("Error firing onClientStream event", e as Error); }
    } else if (strategy && node.strategy !== strategy) {
      // Update strategy if a new one is provided for an existing node (matches Java behavior implicitly)
      Log.trace("MessageNode already exists, updating strategy.", { uid: uuidString });
      node.strategy = strategy;
    }
    return node;
  }

  /** @inheritdoc */
  destroy(force: boolean): AFuture {
    using _l = Log.context(this.logClientContext);
    Log.info(`Destroying AetherCloudClient (${this.name ?? 'Unnamed'}) force=${force}`);
    // The destroyer handles closing connections via the added listener
    const destroyFuture = this.destroyer.destroy(force);
    destroyFuture
      .onError((e: Error) => Log.error("Error during AetherCloudClient destroy.", e as Error))
      .onCancel(() => Log.warn("AetherCloudClient destroy was cancelled."));
     // Ensure startFuture is cancelled if destroy is called before start completes
     if (!this.startFuture.isFinalStatus()) {
       this.startFuture.cancel();
     }
    return destroyFuture;
  }

  /** @inheritdoc */
  [Symbol.dispose](): void {
    this.destroy(true); // Force destroy on synchronous dispose
  }

  /**
   * Checks if the client has successfully registered and has at least one active connection.
   * @returns {boolean} True if connected and authenticated, false otherwise.
   */
  public isConnected(): boolean {
    return this.getUid() !== null && // Must be registered
        this.connections.size > 0 && // Must have at least one connection entry
        Array.from(this.connections.values()).some(c => c.connectFuture.isDone() && !c.connectFuture.isError() && c.firstAuth); // At least one must be connected and authenticated
  }

  /**
   * Gets the parent UUID of this client.
   * @returns {UUID} The parent UUID.
   * @throws {Error} if the parent UID is not set in the client state.
   */
  public getParent(): UUID {
    const parent = this.clientState.getParentUid();
    if (!parent) {
       Log.error("Parent UID not set in client state", new Error("Missing Parent UID"));
       throw new Error("Parent UID not set in client state");
    }
    return parent;
  }

  /**
   * Gets the client's master symmetric key as an AKey object.
   * If no key exists or the stored key is invalid, a new one is generated and saved.
   * @returns {AKey.Symmetric} The master symmetric key.
   */
  public getMasterKey(): AKey.Symmetric {
    const dtoKey = this.clientState.getMasterKey();
    if (dtoKey) {
      try {
        // Convert DTO Key -> AKey
        const aKey = KeyUtil.of(dtoKey);
        if (aKey.getKeyType() === KeyType.SYMMETRIC) {
          return aKey.asSymmetric();
        } else {
           Log.warn("Stored master key is not of type SYMMETRIC. Generating new key.", { storedKeyType: KeyType[aKey.getKeyType()] });
        }
      } catch (e) {
        Log.error("Error converting stored master key, generating new one.", e as Error);
      }
    }

    // Generate a new key if none exists or conversion failed
    Log.warn("Generating new master key as none was found or existing was invalid.");
    const cryptoProvider = CryptoProviderFactory.getProvider(this.getCryptLib().toString());
    const newKey = cryptoProvider.createSymmetricKey();
    // Convert AKey -> DTO Key and save
    const newDtoKey = KeyUtil.of(newKey);
    if (newDtoKey) {
      this.clientState.setMasterKey(newDtoKey);
    } else {
       Log.error("Failed to convert newly generated master key to DTO Key. State not updated.");
    }
    return newKey;
  }

  /**
   * Waits synchronously for the client to start (complete registration/connection).
   * Use with caution, prefer asynchronous operations.
   * @param {number} timeoutSeconds - Maximum time to wait in seconds.
   * @returns {this} The client instance.
   * @throws {ClientTimeoutException} if the client doesn't start within the timeout.
   * @throws {Error} if the startFuture completes with an error.
   */
  public waitStart(timeoutSeconds: number): this {
    // Note: This uses the synchronous waitDone which is generally discouraged in JS/TS.
    Log.warn("Using synchronous waitStart. Prefer asynchronous alternatives.");
    const success = this.startFuture.waitDone(timeoutSeconds); // waitDone returns boolean
    if (!success) {
      throw new ClientTimeoutException(`Client failed to start within ${timeoutSeconds} seconds.`);
    }
    if (this.startFuture.isError()) {
      Log.error("Client start completed with error", this.startFuture.getError()!);
      throw this.startFuture.getError()!; // Re-throw the error
    }
     if (this.startFuture.isCanceled()) {
       throw new Error("Client start was cancelled.");
     }
    return this;
  }

  /** Gets the preferred cryptographic library. */
  public getCryptLib(): CryptoLib { return this.clientState.getCryptoLib(); }
  /** Gets the client's alias UUID, if registered. */
  public getAlias(): UUID | null { return this.clientState.getAlias(); }

  /**
   * Registers a callback to be executed for every incoming message from any peer.
   * @param {ABiConsumer<UUID, Uint8Array>} consumer - Callback function receiving sender UUID and message data.
   */
  public onMessage(consumer: ABiConsumer<UUID, Uint8Array>): void {
    // When a new MessageNode is created...
    this.onClientStream.add((m: MessageNode) => {
      // ...add a listener to its incoming buffer (`bufferIn`).
      m.bufferIn.add((d: { data: Uint8Array }) => {
        try {
          consumer(m.getConsumerUUID(), d.data); // Call the provided consumer
        } catch (e) {
          Log.error("Error in global onMessage consumer", e as Error, { consumerUUID: m.getConsumerUUID().toString() });
        }
      });
    });
  }

  /**
   * Registers a callback executed whenever a new MessageNode is created.
   * @param {AConsumer<MessageNode>} consumer - The callback function.
   */
  public onClientStreamCreated(consumer: AConsumer<MessageNode>): void {
    this.onClientStream.add(consumer);
  }

  /**
   * Registers a callback executed when the server notifies about a new child client.
   * @param {AConsumer<UUID>} consumer - The callback function receiving the child's UUID.
   */
  public onNewChildAdded(consumer: AConsumer<UUID>): void {
    this.onNewChild.add(consumer);
  }

  /**
   * Retrieves the ServerApiByUid for interacting with another client.
   * @param {UUID} uid - The UUID of the target client.
   * @returns {ARFuture<ServerApiByUidRemote | null>} A future resolving to the remote API proxy, or null/error.
   */
  public getClientApi(uid: UUID): ARFuture<ServerApiByUidRemote | null> {
    const result = ARFuture.of<ServerApiByUidRemote | null>();
    using _l = Log.context(this.logClientContext);

    if (this.destroyer.isDestroyed()) {
      Log.warn("getClientApi called on destroyed client", { targetUid: uid.toString() });
      result.cancel();
      return result;
    }

    Log.debug("Requesting Client API for", { targetUid: uid.toString() });

    this.getAuthApiFuture().to(
      (authApi: AuthorizedApiRemote | null) => { // Got Authorized API
        if (!authApi) {
          const errMsg = "Failed to get Authorized API to request Client API";
          Log.error(errMsg, undefined, { targetUid: uid.toString() });
          result.error(new ClientApiException(errMsg));
          return;
        }

        // Create context and future for the ServerApiByUid call
        const clientApiCtx = new FastApiContext(); // Context to gather ServerApiByUid calls
        const clientApiFuture = new RemoteApiFuture<ServerApiByUidRemote>(ServerApiByUid.META);

        // This run block captures the *remote* proxy instance when it's created by the framework.
        // It doesn't actually execute API calls here.
        clientApiFuture.run((serverApiProxy: ServerApiByUidRemote) => {
          Log.debug("Successfully received ServerApiByUid remote proxy instance", { targetUid: uid.toString() });
          // Resolve the main result future with the obtained proxy
          result.tryDone(serverApiProxy);
        });

        // Create the stream wrapper for the ServerApiByUid calls
        // This stream will contain the *request* to the server asking for the API.
        const clientStream = ClientApiStream.fromRemote(
          clientApiCtx,
          clientApiFuture, // The future containing the calls (just `run` in this case)
          AFuture.make() // Future for stream creation
        );

        // Call the `client` method on the Authorized API, passing the target UID and the stream
        Log.debug("Calling authApi.client() to request API", { targetUid: uid.toString() });
        authApi.client(uid, clientStream);

        // Flush the Authorized API to send the request
        authApi.flush();
        Log.trace("Flushed Authorized API for getClientApi request");

        // Add timeout for the overall operation
        result.timeoutError(this.timeout1, `Timeout getting Client API for ${uid.toString()}`);
      },
      (err: Error) => { // Failed to get Authorized API
        Log.error("Failed to get Authorized API needed to request Client API", err, { targetUid: uid.toString() });
        result.error(new ClientApiException("Could not get Authorized API to request Client API.", err));
      }
    ).onCancel(() => { // Cancelled getting Authorized API
      Log.warn("Get Authorized API cancelled while requesting Client API", { targetUid: uid.toString() });
      result.cancel();
    });

    return result;
  }

  /**
   * Verifies a signed key using the client's trusted root signers.
   * @param {CryptoSignedKey} signedKey - The signed key object (from aether_crypto).
   * @returns {boolean} True if the signature is valid according to any root signer, false otherwise.
   */
  public verifySign(signedKey: CryptoSignedKey): boolean {
    const signers = this.clientState.getRootSigners();
    if (signers.size === 0) {
      Log.warn("Cannot verify signature: No root signers configured.");
      return false;
    }
    for (const checker of signers) {
      try {
        // Use the check method directly on the CryptoSignedKey object
        if (signedKey.check(checker)) {
          Log.trace("Signature verified successfully", { signer: checker.getPublicKey().keyToString() });
          return true;
        }
      } catch (e) {
        Log.warn("Error checking signature with one signer", e as Error, { signer: checker.getPublicKey().keyToString() });
      }
    }
    Log.warn("Signature verification failed against all root signers.", { key: signedKey.key.keyToString() });
    return false;
  }

  /**
   * Sends a message to the specified peer UUID.
   * @param {UUID} uid - The UUID of the recipient.
   * @param {Uint8Array} message - The message payload.
   * @returns {AFuture} A future that completes when the message is queued for sending.
   */
  public sendMessage(uid: UUID, message: Uint8Array): AFuture;
  /**
   * Sends a message with an associated future to the specified peer UUID. (Internal use primarily)
   * @param {UUID} uid - The UUID of the recipient.
   * @param {{ data: Uint8Array, future: AFuture }} message - The message data and future.
   */
  public sendMessage(uid: UUID, message: { data: Uint8Array, future: AFuture }): void;
  /** Implementation */
  public sendMessage(uid: UUID, message: Uint8Array | { data: Uint8Array, future: AFuture }): AFuture | void {
    using _l = Log.context(this.logClientContext);
    try {
      const node = this.getMessageNode(uid); // Get or create the node
      if (message instanceof Uint8Array) {
        // Public API: create future and send
        const future = AFuture.make();
        node.send(message, future); // Use the node's send method
        return future;
      } else {
        // Internal API: send pre-packaged data and future
        node.send(message.data, message.future);
      }
    } catch (e) {
       Log.error("Error initiating sendMessage", e as Error, { targetUid: uid.toString() });
       if (message instanceof Uint8Array) {
        return AFuture.ofThrow(e as Error); // Return errored future for public API
       } else {
         message.future.error(e as Error); // Error the provided future
       }
    }
  }


  /**
   * Creates a CryptoEngine specific to a server connection using key derivation.
   * @param {number} serverId - The ID of the server.
   * @returns {CryptoEngine} The derived crypto engine.
   */
  public getCryptoEngineForServer(serverId: number): CryptoEngine {
    const masterKey = this.getMasterKey(); // Get AKey.Symmetric
    const provider = masterKey.getCryptoProvider();
    // Derive the key for the client-side encryption *to* this server
    const derivedKey = provider.createKeyForClient(masterKey, serverId);
    return derivedKey.asSymmetric().toCryptoEngine(); // Get engine from derived symmetric key
  }

  /**
   * Placeholder for getting the next ping interval (not fully implemented).
   * @returns {number} Always returns 0 currently.
   */
  public getNextPing(): number {
    // TODO: Implement logic based on last ping times, connection status etc.
    return 0; // Placeholder like Java stub
  }

  /**
   * Updates the cloud information for a specific UUID in the BMap cache.
   * This triggers the `forValueUpdate` listener which saves the state.
   * @param {UUID} uid - The UUID of the cloud owner.
   * @param {Cloud} cloud - The new cloud data.
   */
  public setCloud(uid: UUID, cloud: Cloud): void {
    using _l = Log.context(this.logClientContext);
    Log.trace("setCloud called, putting resolved value into BMap", { uid: uid.toString() });
    this.clouds.putResolved(uid, cloud); // Use BMap method
  }

  /**
   * Static factory method to create an AetherCloudClient instance.
   * @param {ClientState} state - The client state storage implementation.
   * @returns {AetherCloudClient} A new client instance.
   */
  public static of(state: ClientState): AetherCloudClient {
    return new AetherCloudClient(state);
  }
} // End of AetherCloudClient class

// Helper class for queuing client API tasks (from Java)
class ClientTask {
  readonly uid: UUID;
  readonly task: AConsumer<ServerApiByUid>; // Assuming ServerApiByUid is the local interface type

  constructor(uid: UUID, task: AConsumer<ServerApiByUid>) {
    this.uid = uid;
    this.task = task;
  }
}
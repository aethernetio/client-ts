// =============================================================================================
// FILE: aether_client.ts
// PURPOSE: Contains Client State, Connection abstractions, and the AetherCloudClient core.
// DEPENDENCIES: aether_types.ts, aether_utils.ts, aether_logging.ts, aether_future.ts,
//               aether_rcollection.ts, aether_crypto.ts, aether_fastmeta.ts, aether_api.ts
// (ИСПРАВЛЕННАЯ ВЕРСИЯ - Fixed remaining inspection errors)
// =============================================================================================

import {
    UUID, URI, AtomicLong, AtomicReference, ConcurrentLinkedQueue_C, Destroyable, AConsumer, AFunction, ABiConsumer,
    ClientStartException, ClientApiException, ClientTimeoutException, ARunnable // Added ARunnable back from types
} from './aether_types'; // Corrected ARunnable import source
import { Log, LNode } from './aether_logging';
import { RU, Destroyer, StandardUUIDsImpl, HexUtils } from './aether_utils';
import {
    AFuture, ARFuture, AMFuture, EventConsumer, EventBiConsumer, createAMFuture
    // Removed ARunnable from here, now imported from aether_types
} from './aether_future';
// --- ИСПРАВЛЕНО: Import RMap namespace ---
import { BMap, RCol, RMap } from './aether_rcollection'; // Import RMap namespace
import {
    SignedKey as CryptoSignedKey,
    SignChecker,
    KeyUtil,
    CryptoEngine,
    CryptoProviderFactory,
    AKey,
    // PairAsymKeys, // Unused
    // PairSignKeys, // Unused
    // Signer,       // Unused
    SignedKeyUtil,
    KeyType
} from './aether_crypto';
import {
    FastMetaClient, FastMetaApi, FastApiContext, RemoteApi, RemoteApiFuture, FastApiContextLocal
} from './aether_fastmeta';
import {
    // DTOs and Enums
    Key as DtoKey, CryptoLib, Cloud, ServerDescriptor, FinishResultGlobalRegServerApi as FinishResult_C,
    WorkProofDTO, PowMethod, Message, AccessGroup, ClientInfo as ClientInfoDTO,
    SignedKey as DtoSignedKey, // DtoSign unused
    AetherCodec,
    UUIDAndCloud, // Status unused
    ClientStateForSave,

    // APIs
    ClientApiUnsafe, LoginApi, LoginApiRemote, RegistrationRootApi, RegistrationRootApiRemote,
    ClientApiRegUnsafe, // ClientApiRegUnsafeRemote unused
    ServerRegistrationApi, ServerRegistrationApiStream, ServerRegistrationApiRemote,
    GlobalApiRegistrationServerRegistrationApi, GlobalRegClientApi, // GlobalRegClientApiRemote unused
    GlobalRegClientApiStream, GlobalRegServerApi, GlobalRegServerApiRemote,
    ClientApiRegSafe, ClientApiRegSafeStream, // ClientApiRegSafeRemote unused
    LoginStream, AuthorizedApi, AuthorizedApiRemote, ClientApiSafe, // ClientApiSafeRemote unused
    ClientApiStream, LoginClientStream,
    ServerApiByUid, // ServerApiByUidClient unused
    ServerApiByUidRemote,

    // Concrete IP Address types
    IPAddressV4, IPAddressV6
} from './aether_api';
import { DataInOut, DataInOutStatic } from './aether_datainout';
import { FastMetaClientWebSocket } from './aether_fastmeta_websocket';

// =============================================================================================
// Helper Types / Enums
// =============================================================================================

export enum RegStatus { NO, BEGIN, CONFIRM }

// =============================================================================================
// SECTION 11: CLIENT INTERFACES, BASE CLASSES, AND TYPES
// =============================================================================================

export interface ClientState {
    getUid(): UUID | null; setUid(uid: UUID): void;
    getAlias(): UUID | null; setAlias(alias: UUID | null): void;
    setMasterKey(key: DtoKey): void;
    getMasterKey(): DtoKey | null;
    getServerInfo(sid: number): ClientState.ServerInfo;
    getServerDescriptor(serverId: number): ServerDescriptor | null;
    getClientInfo(uid: UUID): ClientState.ClientInfo;
    setCloud(uid: UUID, cloud: Cloud): void;
    getCloud(uid: UUID): Cloud | null;
    getRegistrationUri(): URI[];
    getPingDuration(): AMFuture<number>;
    getParentUid(): UUID;
    setParentUid(uid: UUID): void;
    getCryptoLib(): CryptoLib;
    getRootSigners(): Set<SignChecker>;
    getTimeoutForConnectToRegistrationServer(): number;
    getCountServersForRegistration(): number;
    save(): Uint8Array;
    load(data: Uint8Array): void;
}
export namespace ClientState {
    export interface ServerInfo {
        getServerId(): number;
        getDescriptor(): ServerDescriptor | null;
        setDescriptor(serverDescriptor: ServerDescriptor): void;
    }
    export interface ClientInfo {
        getUid(): UUID;
        getCloud(): Cloud | null;
        setCloud(cloud: Cloud): void;
    }
}

// --- ClientStateInMemory Implementation ---
export class ClientStateInMemory implements ClientState {
    private uid: UUID | null = null;
    private alias: UUID | null = null;
    private masterKey: DtoKey | null = null;
    private servers = new Map<number, ClientState.ServerInfo>();
    private clients = new Map<string, ClientState.ClientInfo>();
    private registrationUris: URI[] = [];
    private pingDuration = createAMFuture<number>(1000);
    private parentUid: UUID;
    private cryptoLib: CryptoLib = CryptoLib.HYDROGEN;
    private rootSigners: Set<SignChecker> = new Set();
    private timeoutForConnectToRegistrationServer = 5000;
    private countServersForRegistration = 1;

    constructor(arg1: UUID | Uint8Array | null, arg2?: URI[], arg3?: Set<SignChecker>, arg4?: CryptoLib) {
        if (arg1 instanceof Uint8Array) {
            this.parentUid = StandardUUIDsImpl.ANONYMOUS_UID; // Placeholder until load sets it
            this.load(arg1);
        } else if (arg1 instanceof UUID && arg2 instanceof Array) {
            this.parentUid = arg1;
            this.registrationUris = arg2.slice();
            this.uid = null;
            this.cryptoLib = arg4 ?? CryptoLib.HYDROGEN;
            if (arg3) this.rootSigners = new Set(arg3);
            this.addDefaultRootSigners();
        } else {
             throw new Error("Invalid ClientStateInMemory constructor arguments");
        }
        if (!this.parentUid && this.uid) { Log.warn("Parent UID was missing after loading state, defaulting to ANONYMOUS_UID"); this.parentUid = StandardUUIDsImpl.ANONYMOUS_UID; }
        else if (!this.parentUid) { throw new Error("Parent UID is mandatory and was not provided or loaded."); }
    }


    private addDefaultRootSigners(): void {
        if (!Array.from(this.rootSigners).some(s => s.getPublicKey().keyToString() === "SODIUM:SIGN_PUBLIC:4F202A94AB729FE9B381613AE77A8A7D89EDAB9299C3320D1A0B994BA710CCEB")) { this.rootSigners.add(SignChecker.of("SODIUM:4F202A94AB729FE9B381613AE77A8A7D89EDAB9299C3320D1A0B994BA710CCEB")); }
        if (!Array.from(this.rootSigners).some(s => s.getPublicKey().keyToString() === "HYDROGEN:SIGN_PUBLIC:883B4D7E0FB04A38CA12B3A451B00942048858263EE6E6D61150F2EF15F40343")) { this.rootSigners.add(SignChecker.of("HYDROGEN:883B4D7E0FB04A38CA12B3A451B00942048858263EE6E6D61150F2EF15F40343")); }
    }

    getUid(): UUID | null { return this.uid; }
    setUid(uid: UUID): void { this.uid = uid; }
    getAlias(): UUID | null { return this.alias; }
    setAlias(alias: UUID | null): void { this.alias = alias; }
    setMasterKey(key: DtoKey): void { this.masterKey = key; }
    getMasterKey(): DtoKey | null { return this.masterKey; }

    getServerInfo(sid: number): ClientState.ServerInfo {
        if (!this.servers.has(sid)) {
            const serverData: { serverId: number, descriptor: ServerDescriptor | null } = { serverId: sid, descriptor: null };
            const serverInfo: ClientState.ServerInfo = { getServerId: () => serverData.serverId, getDescriptor: () => serverData.descriptor, setDescriptor: (desc: ServerDescriptor) => { serverData.descriptor = desc; } };
            this.servers.set(sid, serverInfo);
        }
        return this.servers.get(sid)!;
    }
    getServerDescriptor(serverId: number): ServerDescriptor | null { return this.servers.get(serverId)?.getDescriptor() ?? null; }
    getClientInfo(uid: UUID): ClientState.ClientInfo {
        const key = uid.toString();
        if (!this.clients.has(key)) {
             const clientData: { uid: UUID, cloud: Cloud | null } = { uid: uid, cloud: null };
            const clientInfo: ClientState.ClientInfo = { getUid: () => clientData.uid, getCloud: () => clientData.cloud, setCloud: (cloud: Cloud) => { clientData.cloud = cloud; } };
            this.clients.set(key, clientInfo);
        }
        return this.clients.get(key)!;
    }
    setCloud(uid: UUID, cloud: Cloud): void { this.getClientInfo(uid).setCloud(cloud); }
    getCloud(uid: UUID): Cloud | null { return this.getClientInfo(uid).getCloud(); }
    getRegistrationUri(): URI[] { return [...this.registrationUris]; }
    getPingDuration(): AMFuture<number> { return this.pingDuration; }
    getParentUid(): UUID { return this.parentUid; }
    setParentUid(uid: UUID): void { this.parentUid = uid; }
    getCryptoLib(): CryptoLib { return this.cryptoLib; }
    getRootSigners(): Set<SignChecker> { return new Set(this.rootSigners); }
    getTimeoutForConnectToRegistrationServer(): number { return this.timeoutForConnectToRegistrationServer; }
    getCountServersForRegistration(): number { return this.countServersForRegistration; }

    save(): Uint8Array {
        if (!this.uid || !this.alias || !this.masterKey) { throw new Error("Client state incomplete for saving."); }

        // --- ИСПРАВЛЕНО: Use KeyUtil.of(AKey) which returns DtoKey ---
        const dtoRootSigners = Array.from(this.rootSigners)
                                  .map((rs): DtoKey | null => KeyUtil.of(rs.getPublicKey())) // Should return DtoKey | null
                                  .filter((k): k is DtoKey => k !== null);

        const dto = new ClientStateForSave(
            this.registrationUris.slice(),
            Array.from(this.servers.values()).map(s => s.getDescriptor()).filter((d): d is ServerDescriptor => d !== null),
            Array.from(this.clients.values()).filter(c => c.getCloud() !== null).map(c => new ClientInfoDTO(c.getUid(), c.getCloud()!)),
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
        return ClientStateForSave.META.serializeToBytes(dto);
    }

    load(data: Uint8Array): void {
        try {
            const dto = ClientStateForSave.META.deserializeFromBytes(data);
            this.uid = dto.uid;
            this.alias = dto.alias;
            this.parentUid = dto.parentUid;
            this.masterKey = dto.masterKey;
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
                // --- ИСПРАВЛЕНО: Use KeyUtil.of(DtoKey) which returns AKey ---
                const akey = KeyUtil.of(k); // k is DtoKey here, should return AKey | null
                if (akey && akey.getKeyType() === KeyType.SIGN_PUBLIC) {
                    const checker = akey.asSignPublicKey().toSignChecker();
                    if (checker) this.rootSigners.add(checker);
                } else {
                    // --- ИСПРАВЛЕНО: Remove k.toString() ---
                    Log.warn("Failed to load root signer", { key: k /* Removed .toString() */ });
                }
            });
            this.addDefaultRootSigners();
             if (!this.parentUid) { Log.warn("Parent UID was missing after loading state, defaulting to ANONYMOUS_UID"); this.parentUid = StandardUUIDsImpl.ANONYMOUS_UID; }
        } catch (e) { Log.error("Failed to load client state", e as Error); throw new Error("Unparsable state"); }
    }
}

// --- MessageNode Implementation ---
export class MessageNode {
    public readonly connectionsOut: Set<ConnectionWork> = new Set();
    public readonly bufferOut = new ConcurrentLinkedQueue_C<{ data: Uint8Array, future: AFuture }>();
    public readonly bufferIn = new EventConsumer<{ data: Uint8Array }>();
    public readonly consumerUUID: UUID;
    public readonly client: AetherCloudClient;
    public readonly strategy: MessageEventListener;

    constructor(client: AetherCloudClient, consumerId: UUID, strategy: MessageEventListener) {
        Log.trace("open message node", { client: client.getName(), uidTo: consumerId, uidFrom: client.getUid() });
        this.client = client;
        this.consumerUUID = consumerId;
        this.strategy = strategy;
        client.getCloud(consumerId).to(
            (c: Cloud | null) => { if (c) this.strategy.setConsumerCloud(this, c); else Log.warn("Consumer cloud resolved to null", { consumer: consumerId }); },
            (err: Error) => Log.error("Failed to get consumer cloud in MessageNode constructor", err, { consumer: consumerId })
        );
    }

    public send(data: Uint8Array, future: AFuture): void {
        const message = { data, future }; this.bufferOut.add(message);
        Log.trace("MessageNode: Added message to bufferOut", { consumer: this.consumerUUID.toString(), size: data.length });
        let sentImmediately = false;
        this.connectionsOut.forEach(conn => { if (this.trySendDirectly(conn, message)) { sentImmediately = true; conn.flush(); } });
        if (!sentImmediately && this.connectionsOut.size > 0) Log.trace("MessageNode: Message buffered, waiting for connection flush", { consumer: this.consumerUUID.toString() });
        else if (this.connectionsOut.size === 0) { Log.trace("MessageNode: Message buffered, no connections yet", { consumer: this.consumerUUID.toString() }); this.client.makeFirstConnection(); }
    }

    private trySendDirectly(conn: ConnectionWork, message: { data: Uint8Array, future: AFuture }): boolean {
        try {
            conn.remoteApiFutureAuth.run((api: AuthorizedApiRemote, sendFuture: AFuture) => { Log.trace("MessageNode: Queuing message via remoteApiFuture", { consumer: this.consumerUUID.toString(), server: conn.uri }); api.sendMessage(new Message(this.consumerUUID, message.data)).to(sendFuture); });
            message.future.tryDone(); return true;
        } catch (e) { Log.error("Error queueing message for direct send", e as Error, { consumer: this.consumerUUID.toString(), server: conn.uri }); message.future.error(e as Error); return false; }
    }

    public addConsumerServerOutById(serverId: number): void { this.client.getServer(serverId).to( (sd: ServerDescriptor | null) => { if(sd) this.strategy.onResolveConsumerServer(this, sd); else Log.warn("Server descriptor resolved to null", { serverId });}, (err: Error) => Log.error("Failed to resolve server ID in addConsumerServerOutById", err, { serverId }) ); }
    public addConsumerServerOutByDescriptor(serverDescriptor: ServerDescriptor): void { this.strategy.onResolveConsumerConnection(this, this.client.getConnection(serverDescriptor)); }

    public addConsumerConnectionOut(conn: ConnectionWork): void {
        if (this.connectionsOut.has(conn)) return; this.connectionsOut.add(conn); Log.debug("add connection out for messages uid=$uid", { uid: this.consumerUUID.toString() });
        const requeue: { data: Uint8Array, future: AFuture }[] = []; let message: { data: Uint8Array, future: AFuture } | undefined;
        while ((message = this.bufferOut.poll()) !== undefined) { Log.trace("MessageNode: Sending buffered message on new connection", { consumer: this.consumerUUID.toString(), server: conn.uri }); if (!this.trySendDirectly(conn, message)) { requeue.push(message); break; } }
        requeue.reverse().forEach(msg => this.bufferOut.add(msg)); if (requeue.length > 0) Log.warn("MessageNode: Requeued messages after adding connection", { count: requeue.length, consumer: this.consumerUUID.toString(), server: conn.uri });
        if (requeue.length < (this.bufferOut.length + requeue.length)) conn.flush();
    }

    public removeConsumerConnectionOut(conn: ConnectionWork): void { this.connectionsOut.delete(conn); Log.trace("MessageNode: Removed connection", { consumer: this.consumerUUID.toString(), server: conn.uri }); }
    public sendMessageFromServerToClient(data: Uint8Array): void { Log.trace("sendMessageFromServerToClient"); this.bufferIn.fire({ data }); }
    public getConsumerUUID(): UUID { return this.consumerUUID; }
}

// --- MessageEventListener Interface & Default Implementation ---
export interface MessageEventListener {
    setConsumerCloud(messageNode: MessageNode, cloud: Cloud): void;
    onResolveConsumerServer(messageNode: MessageNode, serverDescriptor: ServerDescriptor): void;
    onResolveConsumerConnection(messageNode: MessageNode, connection: ConnectionWork): void;
}
export const MessageEventListenerDefault: MessageEventListener = {
    setConsumerCloud: (messageNode: MessageNode, cloud: Cloud) => { Log.trace("DefaultEventListener: setConsumerCloud", { consumer: messageNode.consumerUUID.toString(), cloudData: cloud?.data }); if (cloud?.data && cloud.data.length > 0) messageNode.addConsumerServerOutById(cloud.data[0]); else Log.warn("DefaultEventListener: Received null/empty cloud", { consumer: messageNode.consumerUUID.toString() }); },
    onResolveConsumerServer: (messageNode: MessageNode, serverDescriptor: ServerDescriptor) => { Log.trace("DefaultEventListener: onResolveConsumerServer", { consumer: messageNode.consumerUUID.toString(), serverId: serverDescriptor.id }); messageNode.addConsumerServerOutByDescriptor(serverDescriptor); },
    onResolveConsumerConnection: (messageNode: MessageNode, connection: ConnectionWork) => { Log.trace("DefaultEventListener: onResolveConsumerConnection", { consumer: messageNode.consumerUUID.toString(), serverUri: connection.uri }); messageNode.addConsumerConnectionOut(connection); },
};

// --- Connection Abstract Class ---
export abstract class Connection<LT, RT extends RemoteApi> implements Destroyable {
    protected readonly client: AetherCloudClient; public readonly uri: URI; public readonly connectFuture: ARFuture<RT>; protected readonly fastMetaClient: FastMetaClient<LT, RT>; protected rootApi: RT | null = null;
    constructor( client: AetherCloudClient, uri: URI, localApiMeta: FastMetaApi<LT, any>, remoteApiMeta: FastMetaApi<any, RT>, clientImpl?: FastMetaClient<LT, RT> ) {
        if (!uri) throw new Error("Connection URI cannot be null"); this.uri = uri; this.client = client; this.fastMetaClient = clientImpl || new FastMetaClientWebSocket<LT, RT>(); this.connectFuture = ARFuture.of<RT>();
        if (client.destroyer.isDestroyed()) { this.fastMetaClient.close(); this.connectFuture.cancel(); this.rootApi = null; return; }
        client.destroyer.add(this); client.destroyer.add(this.fastMetaClient); const localApi = this as unknown as LT; Log.debug("Connection: Initiating connect...", { uri: this.uri });
        this.fastMetaClient.connect(uri, localApiMeta, remoteApiMeta, (remoteApi: RT) => { this.rootApi = remoteApi; return localApi; }) .map((_context: FastApiContextLocal<LT>) => { if (!this.rootApi) throw new Error("Root API not set after successful connection context creation."); Log.debug("Connection: FastMeta connect successful, remote API ready.", { uri: this.uri }); return this.rootApi; }) .to( (remoteApiInstance: RT) => this.connectFuture.tryDone(remoteApiInstance), (err: Error) => this.connectFuture.error(err) ) .onCancel(() => this.connectFuture.cancel());
    }
    public getRootApi(): RT | null { if (!this.connectFuture.isDone()) Log.warn("Accessing rootApi before connection is established", { uri: this.uri }); return this.rootApi; }
    public getRootApiFuture(): ARFuture<RT> { return this.connectFuture; }
    public destroy(_force: boolean): AFuture { Log.info("Destroying Connection", { uri: this.uri }); return this.fastMetaClient.close(); } // _force unused
    [Symbol.dispose](): void { this.destroy(true).onError(e => Log.error("Error during Connection dispose/destroy", e, { uri: this.uri })); }
    public equals(other: any): boolean { if (this === other) return true; if (other == null || !(other instanceof Connection)) return false; return this.uri === other.uri; }
    public hashCode(): number { let hash = 0; for (let i = 0; i < this.uri.length; i++) { const char = this.uri.charCodeAt(i); hash = ((hash << 5) - hash) + char; hash |= 0; } return hash; }
}

// --- ConnectionWork Implementation ---
export class ConnectionWork extends Connection<ClientApiUnsafe, LoginApiRemote> implements ClientApiUnsafe {
    public readonly lastBackPing = new AtomicLong(Number.MAX_SAFE_INTEGER); public readonly ready = createAMFuture<ConnectionWork>(); readonly apiSafe: ClientApiSafe; readonly apiSafeCtx: FastApiContext; readonly cryptoEngine: CryptoEngine; readonly remoteApiFutureAuth = new RemoteApiFuture<AuthorizedApiRemote>(AuthorizedApi.META); private readonly serverDescriptor: ServerDescriptor; private readonly inProcess = new AtomicReference<boolean>(false); basicStatus: boolean = false; lastWorkTime: number = 0; firstAuth: boolean = false;
    constructor(client: AetherCloudClient, s: ServerDescriptor) {
        const uri = ConnectionWork.getUriFromServerDescriptor(s, AetherCodec.TCP); if (!uri) throw new ClientStartException(`Could not determine URI for ServerDescriptor ID ${s.id}`);
        super(client, uri, ClientApiUnsafe.META, LoginApi.META); this.cryptoEngine = client.getCryptoEngineForServer(s.id); this.serverDescriptor = s; this.apiSafe = new MyClientApiSafe(client);
        this.remoteApiFutureAuth.addPermanent((a: AuthorizedApiRemote, f: AFuture) => { try { const contextLog = Log.context(client.logClientContext); this.flushBackgroundRequests(a, f); contextLog[Symbol.dispose](); } catch (e) { Log.error("Error in permanent remoteApiFutureAuth task (flushBackgroundRequests)", e as Error); } });
        this.apiSafeCtx = new FastApiContext();
        this.apiSafeCtx.flush = (sendFuture: AFuture) => {
             const contextLog = Log.context(this.client.logClientContext); if (this.remoteApiFutureAuth.isEmpty() && !client.clouds.isRequestsFor(this) && !client.servers.isRequestsFor(this)) { sendFuture.tryDone(); contextLog[Symbol.dispose](); return; }
             this.getRootApiFuture().to( (api: LoginApiRemote) => { if (!api) { sendFuture.error(new Error("Root Login API is not available during flush")); contextLog[Symbol.dispose](); return; }
                     this.remoteApiFutureAuth.executeAll(this.apiSafeCtx, sendFuture); const dataToSend = this.apiSafeCtx.remoteDataToArrayAsArray(); if (dataToSend.length === 0) { sendFuture.tryDone(); contextLog[Symbol.dispose](); return; }
                     const loginStream = LoginStream.fromRemoteBytes(this.cryptoEngine.encrypt.bind(this.cryptoEngine), dataToSend); const alias = this.client.getAlias(); if (!alias) { sendFuture.error(new Error("Client alias is not set, cannot login.")); contextLog[Symbol.dispose](); return; }
                     api.loginByAlias(alias, loginStream); api.flush(sendFuture); contextLog[Symbol.dispose](); },
                 (err: Error) => { sendFuture.error(new ClientApiException("Failed to get Root Login API for flush", err)); contextLog[Symbol.dispose](); } ).onCancel(() => { sendFuture.cancel(); contextLog[Symbol.dispose](); });
        };
    }
    private static getUriFromServerDescriptor(sd: ServerDescriptor, codec: AetherCodec): URI | null { if (!sd || !sd.ipAddress || !sd.ipAddress.addresses || sd.ipAddress.addresses.length === 0) return null; for (const addrInfo of sd.ipAddress.addresses) { for (const cap of addrInfo.coderAndPorts) { if (cap.codec === codec) { const ipString = ConnectionWork.ipAddressToString(addrInfo.address); if (ipString) { const scheme = codec === AetherCodec.WEBSOCKET ? 'ws' : 'tcp'; return `${scheme}://${ipString}:${cap.port}`; } } } } return null; }
    private static ipAddressToString(ipAddr: import("./aether_api").IPAddress): string | null { if (ipAddr instanceof IPAddressV4) { if (ipAddr.data && ipAddr.data.length === 4) return Array.from(ipAddr.data).join('.'); } else if (ipAddr instanceof IPAddressV6) { if (ipAddr.data && ipAddr.data.length === 16) { const parts: string[] = []; for (let i = 0; i < 16; i += 2) parts.push(((ipAddr.data[i] << 8) | ipAddr.data[i+1]).toString(16)); return parts.join(':'); } else if (ipAddr.data && ipAddr.data.length === 6) { Log.warn("IPAddressV6 has unexpected data length 6"); return HexUtils.toHexString(ipAddr.data); } } Log.error("Unknown or invalid IPAddress format", undefined, { ipAddr }); return null; }
    private flushBackgroundRequests(a: AuthorizedApiRemote, sendFuture: AFuture): void {
         try {
             // --- ИСПРАВЛЕНО: Pass constructor to getRequestsFor ---
             const requestCloud = this.client.clouds.getRequestsFor(UUID, this);
             if (requestCloud.length > 0) { Log.trace("Flushing cloud requests", { count: requestCloud.length, server: this.uri }); a.resolverClouds(requestCloud); }
             // --- ИСПРАВЛЕНО: Pass constructor (or primitive type) to getRequestsFor ---
             // For primitive number, we can't pass `Number`, need a workaround or adjust BMap
             // Assuming BMapImpl internally handles primitive keys or expects a placeholder
             // Let's pass null as a placeholder, BMapImpl needs to handle this
             const requestServers = this.client.servers.getRequestsFor(null as any, this); // Pass null placeholder
             if (requestServers.length > 0) { Log.trace("Flushing server requests", { count: requestServers.length, server: this.uri }); const serverIds = requestServers.map(id => id); a.resolverServers(serverIds); }

             let messagesToSend: Message[] | null = null; const futuresToComplete: AFuture[] = []; const messagesToRequeue: Map<string, { data: Uint8Array, future: AFuture }[]> = new Map();
             for (const m of this.client.messageNodeMap.values()) {
                 if (m.connectionsOut.has(this)) {
                     const messagesFromNode: { data: Uint8Array, future: AFuture }[] = []; let msgEntry: { data: Uint8Array, future: AFuture } | undefined;
                     while ((msgEntry = m.bufferOut.poll()) !== undefined) messagesFromNode.push(msgEntry);
                     if (messagesFromNode.length > 0) { const consumerUuidString = m.consumerUUID.toString(); Log.debug("Preparing messages client to server", { uidFrom: this.client.getUid()?.toString(), uidTo: consumerUuidString, count: messagesFromNode.length }); if (messagesToSend === null) messagesToSend = []; messagesFromNode.forEach(val => { messagesToSend!.push(new Message(m.consumerUUID, val.data)); futuresToComplete.push(val.future); }); messagesToRequeue.set(consumerUuidString, messagesFromNode); }
                 }
             }
             if (messagesToSend !== null && messagesToSend.length > 0) {
                  Log.trace("Flushing messages", { count: messagesToSend.length, server: this.uri }); const messageSendFuture = a.sendMessages(messagesToSend);
                  messageSendFuture.to( () => futuresToComplete.forEach(f => f.tryDone()) ) // Separate success callback
                                 .onError( (err: Error) => { Log.error("Failed to send messages, requeuing", err, { server: this.uri }); messagesToRequeue.forEach((msgs, consumerUuidString) => { const node = this.client.messageNodeMap.get(consumerUuidString); if (node) msgs.reverse().forEach(msg => node.bufferOut.add(msg)); msgs.forEach(msg => msg.future.error(err)); }); sendFuture.error(err); } ) // Separate onError
                                 .onCancel(() => { Log.warn("Message sending cancelled, requeuing", { server: this.uri }); messagesToRequeue.forEach((msgs, consumerUuidString) => { const node = this.client.messageNodeMap.get(consumerUuidString); if (node) msgs.reverse().forEach(msg => node.bufferOut.add(msg)); msgs.forEach(msg => msg.future.cancel()); }); sendFuture.cancel(); });
             }
             // --- ИСПРАВЛЕНО: Use onError chaining ---
             if (!this.firstAuth) { Log.trace("Sending initial ping", { server: this.uri }); a.ping(0).to(() => { Log.trace("Initial ping successful", { server: this.uri }); this.firstAuth = true; }).onError((err: Error) => Log.warn("Initial ping failed", err, { server: this.uri })); }
         } catch (e) { Log.error("Error during flushBackgroundRequests", e as Error, { server: this.uri }); sendFuture.error(e as Error); }
    }
    sendSafeApiDataMulti(_backId: number, _data: LoginClientStream): AFuture { const err = new Error("UnsupportedOperationException: sendSafeApiDataMulti"); Log.error(err.message, err); return AFuture.ofThrow(err); }
    sendSafeApiData(data: LoginClientStream): AFuture { const future = AFuture.make(); try { data.accept(this.apiSafeCtx, this.cryptoEngine.decrypt.bind(this.cryptoEngine), this.apiSafe); future.tryDone(); } catch (e) { Log.error("Error processing sendSafeApiData", e as Error, { server: this.uri }); future.error(e as Error); } return future; }
    public getServerDescriptor(): ServerDescriptor { return this.serverDescriptor; }
    override toString(): string { const uri = ConnectionWork.getUriFromServerDescriptor(this.serverDescriptor, AetherCodec.TCP); return `work(${uri})`; }
    public setBasic(basic: boolean): void { this.basicStatus = basic; }
    public lifeTime(): number { return RU.time() - this.lastBackPing.get(); }
    public scheduledWork(): void { const t = RU.time(); if ((t - this.lastWorkTime < this.client.getPingTime() || !this.inProcess.compareAndSet(false, true))) return; this.lastWorkTime = t; const f = AFuture.make(); f.addListener(() => this.inProcess.set(false)); f.timeoutError(2, "connection work flush 1 timeout"); this.apiSafeCtx.flush(f); }
    public flush(): void { if (!this.inProcess.compareAndSet(false, true)) return; this.lastWorkTime = RU.time(); const f = AFuture.make(); f.addListener(() => this.inProcess.set(false)); f.timeoutError(2, "connection work flush 2 timeout"); this.apiSafeCtx.flush(f); }
}

// --- Nested MyClientApiSafe Implementation ---
class MyClientApiSafe implements ClientApiSafe {
    private readonly client: AetherCloudClient; constructor(client: AetherCloudClient) { this.client = client; }
    changeParent(_uid: UUID): AFuture { Log.warn("MyClientApiSafe.changeParent not implemented"); return AFuture.of(); }
    changeAlias(_alias: UUID): AFuture { Log.warn("MyClientApiSafe.changeAlias not implemented"); return AFuture.of(); }
    newChild(uid: UUID): AFuture { Log.trace("MyClientApiSafe.newChild received", { childUid: uid.toString() }); this.client.onNewChild.fire(uid); return AFuture.of(); }
    sendMessages(msg: Message[]): AFuture { Log.trace("receive messages", { count: msg.length }); for (const m of msg) { Log.trace("receive message", { uid1: this.client.getUid()?.toString(), uid2: m.uid.toString() }); this.client.getMessageNode(m.uid, MessageEventListenerDefault).sendMessageFromServerToClient(m.data); } return AFuture.of(); }
    sendServerDescriptor(v: ServerDescriptor): AFuture { Log.trace("MyClientApiSafe.sendServerDescriptor received", { serverId: v.id }); this.client.servers.putResolved(v.id, v); return AFuture.of(); }
    sendServerDescriptors(serverDescriptors: ServerDescriptor[]): AFuture { Log.trace("MyClientApiSafe.sendServerDescriptors received", { count: serverDescriptors.length }); serverDescriptors.forEach(c => this.sendServerDescriptor(c)); return AFuture.of(); }
    sendCloud(uid: UUID, cloud: Cloud): AFuture { Log.trace("MyClientApiSafe.sendCloud received", { uid: uid.toString() }); this.client.setCloud(uid, cloud); return AFuture.of(); }
    sendClouds(clouds: UUIDAndCloud[]): AFuture { Log.trace("MyClientApiSafe.sendClouds received", { count: clouds.length }); clouds.forEach(c => this.sendCloud(c.uid, c.cloud)); return AFuture.of(); }
    requestTelemetry(): AFuture { Log.warn("MyClientApiSafe.requestTelemetry not implemented"); return AFuture.of(); }
}

// --- ConnectionRegistration Implementation ---
export class ConnectionRegistration extends Connection<ClientApiRegUnsafe, RegistrationRootApiRemote> implements ClientApiRegUnsafe {
    private readonly tempKey: AKey.Symmetric; private readonly tempKeyNative: DtoKey; private readonly tempKeyCp: CryptoEngine; private readonly ctxSafe = new FastApiContext(); private readonly globalCtx = new FastApiContext(); private gcp: CryptoEngine | null = null;
    constructor(client: AetherCloudClient, uri: URI) {
        super(client, uri, ClientApiRegUnsafe.META, RegistrationRootApi.META); const cryptoProvider = CryptoProviderFactory.getProvider(client.getCryptLib().toString()); this.tempKey = cryptoProvider.createSymmetricKey();
        // --- ИСПРАВЛЕНО: Explicit Cast for KeyUtil.of ---
        this.tempKeyNative = KeyUtil.of(this.tempKey) as DtoKey; // Explicit cast
        this.tempKeyCp = this.tempKey.toCryptoEngine(); this.ctxSafe.flush = (sendFuture: AFuture) => { Log.debug("ctxSafe flush called (likely unused)"); sendFuture.tryDone(); }; this.globalCtx.flush = (sendFuture: AFuture) => { Log.debug("globalCtx flush called (likely unused)"); sendFuture.tryDone(); };
        this.connect();
    }
    private connect(): void {
        Log.debug("RegConn: Starting async registration process.", { uri: this.uri }); this.getRootApiFuture().to( (api: RegistrationRootApiRemote) => { if (!api) { Log.error("RegConn: Root API is null?"); this.client.startFuture.error(new ClientStartException("Registration connection failed: Root API null")); return; } Log.debug("RegConn: TCP connection successful, requesting asymmetric key.", { uri: this.uri }); api.getAsymmetricPublicKey(this.client.getCryptLib()) .to( (signedKeyDTO: DtoSignedKey) => this.regProcess(signedKeyDTO), (err: Error) => { Log.error("RegConn: Failed to get asymmetric public key.", err, { uri: this.uri }); this.client.startFuture.error(new ClientApiException("Registration failed: Could not get server public key.", err)); } ).onCancel(() => { Log.warn("RegConn: Asymmetric public key request cancelled.", { uri: this.uri }); this.client.startFuture.cancel(); }); api.flush(); }, (e: Error) => { Log.error("RegConn: Initial connection failed.", e, { uri: this.uri }); } ).onCancel(() => { Log.warn("RegConn: Initial connection cancelled.", { uri: this.uri }); this.client.startFuture.cancel(); });
    }
    private regProcess(signedKeyDTO: DtoSignedKey): void {
        Log.info("RegConn: Asym public key was received.");
        // --- ИСПРАВЛЕНО: Cast input to SignedKeyUtil.of ---
        const signedKey = SignedKeyUtil.of(signedKeyDTO as any) as CryptoSignedKey; // Cast input and output
        if (!this.client.verifySign(signedKey)) { Log.error("RegConn: Key verification failed.", { signedKey: signedKey.toString() }); this.client.startFuture.error(new ClientStartException("Registration failed: Server key verification failed.")); return; }
        const asymCE = signedKey.key.asAsymmetric().toCryptoEngine();
        this.getRootApiFuture().to( (api: RegistrationRootApiRemote) => { if (!api) { Log.error("RegConn: Root API became null during regProcess."); this.client.startFuture.error(new ClientStartException("Registration failed: Root API lost.")); return; }
            const serverRegApiFuture1 = new RemoteApiFuture<ServerRegistrationApiRemote>(ServerRegistrationApi.META);
            serverRegApiFuture1.runRes((apiInner1: ServerRegistrationApiRemote): ARFuture<WorkProofDTO> => apiInner1.requestWorkProofData(this.client.getParent(), PowMethod.AE_BCRYPT_CRC32, this.tempKeyNative)) .timeoutError(5, "RegConn: timeout requestWorkProofData") .to( (wpd: WorkProofDTO) => { Log.info("RegConn: WorkProofData received. Starting PoW calculation.");
                    // --- ИСПРАВЛЕНО: Cast input to SignedKeyUtil.of ---
                    const globalSignedKey = SignedKeyUtil.of(wpd.globalKey as any) as CryptoSignedKey; // Cast input and output
                    if (!this.client.verifySign(globalSignedKey)) { Log.error("RegConn: Global key verification failed."); this.client.startFuture.error(new ClientStartException("Registration failed: Global key verification failed.")); return; }
                    this.gcp = CryptoEngine.of(globalSignedKey.key.asAsymmetric().toCryptoEngine(), this.client.getMasterKey().toCryptoEngine()); const passwords = [12345]; Log.info("RegConn: PoW calculation placeholder complete.");
                    const serverRegApiFuture2 = new RemoteApiFuture<ServerRegistrationApiRemote>(ServerRegistrationApi.META);
                    serverRegApiFuture2.run((apiInner2: ServerRegistrationApiRemote) => { const globalRegServerApiFuture = new RemoteApiFuture<GlobalRegServerApiRemote>(GlobalRegServerApi.META);
                        globalRegServerApiFuture.run((gapi: GlobalRegServerApiRemote) => {
                            // --- ИСПРАВЛЕНО: Explicit Cast for KeyUtil.of ---
                            gapi.setMasterKey(KeyUtil.of(this.client.getMasterKey()) as DtoKey); // Explicit cast
                            gapi.finish() .to( (finishResult: FinishResult_C) => { Log.trace("RegConn: registration step finish received."); const serverRegApiFuture3 = new RemoteApiFuture<ServerRegistrationApiRemote>(ServerRegistrationApi.META); serverRegApiFuture3.runRes((apiInner3: ServerRegistrationApiRemote): ARFuture<ServerDescriptor[]> => { Log.trace("RegConn: registration step resolve servers", { servers: finishResult.cloud }); return apiInner3.resolveServers(finishResult.cloud); }) .to( (servers: ServerDescriptor[]) => { Log.trace("RegConn: Resolved servers received", { count: servers.length }); servers.forEach(s => this.client.servers.putResolved(s.id, s)); this.client.confirmRegistration(finishResult); Log.info("RegConn: Registration finished successfully."); }, (err: Error) => { Log.error("RegConn: Failed to resolve servers.", err); this.client.startFuture.error(new ClientApiException("Registration failed: Could not resolve servers.", err)); } ); const stream3 = ServerRegistrationApiStream.fromRemote(this.ctxSafe, asymCE.encrypt.bind(asymCE), serverRegApiFuture3, AFuture.make()); api.enter(this.client.getCryptLib(), stream3); api.flush(); }, (err: Error) => { Log.error("RegConn: Global API finish failed.", err); this.client.startFuture.error(new ClientApiException("Registration failed: Global finish step failed.", err)); } ); });
                        const globalApiStream = GlobalApiRegistrationServerRegistrationApi.fromRemote(this.globalCtx, this.gcp!.encrypt.bind(this.gcp!), globalRegServerApiFuture, AFuture.make()); apiInner2.registration(wpd.salt, wpd.suffix, passwords, this.client.getParent(), this.tempKeyNative, globalApiStream); });
                     const stream2 = ServerRegistrationApiStream.fromRemote(this.ctxSafe, asymCE.encrypt.bind(asymCE), serverRegApiFuture2, AFuture.make()); api.enter(this.client.getCryptLib(), stream2); api.flush(); }, (err: Error) => { Log.error("RegConn: Failed to request WorkProofData.", err); this.client.startFuture.error(new ClientApiException("Registration failed: Could not get WorkProofData.", err)); } );
            const stream1 = ServerRegistrationApiStream.fromRemote(this.ctxSafe, asymCE.encrypt.bind(asymCE), serverRegApiFuture1, AFuture.make()); api.enter(this.client.getCryptLib(), stream1); api.flush(); }, (e: Error) => { Log.error("RegConn: Root API not available for regProcess.", e); } );
    }
    enterGlobal(stream: GlobalRegClientApiStream): AFuture { const future = AFuture.make(); try { if (!this.gcp) throw new Error("Global crypto provider (gcp) not initialized."); const emptyApi: GlobalRegClientApi = {}; stream.accept(this.globalCtx, this.gcp.decrypt.bind(this.gcp), emptyApi); future.tryDone(); } catch(e) { Log.error("Error processing enterGlobal", e as Error); future.error(e as Error); } return future; }
    enter(stream: ClientApiRegSafeStream): AFuture { const future = AFuture.make(); try { const emptyApi: ClientApiRegSafe = {}; stream.accept(this.ctxSafe, this.tempKeyCp.decrypt.bind(this.tempKeyCp), emptyApi); future.tryDone(); } catch(e) { Log.error("Error processing enter (ClientApiRegSafeStream)", e as Error); future.error(e as Error); } return future; }
}

// =========================================================================
// AetherCloudClient Implementation
// =========================================================================
export class AetherCloudClient implements Destroyable {
    public readonly startFuture = AFuture.make(); public readonly onClientStream = new EventConsumer<MessageNode>(); public readonly destroyer: Destroyer; readonly logClientContext: LNode; readonly connections = new Map<number, ConnectionWork>(); readonly clouds: BMap<UUID, Cloud>; readonly servers: BMap<number, ServerDescriptor>; readonly regStatus = new AtomicReference<RegStatus>(RegStatus.NO); readonly messageNodeMap = new Map<string, MessageNode>(); readonly onNewChild = new EventConsumer<UUID>(); readonly onNewChildApi = new EventBiConsumer<UUID, ServerApiByUid>();
    private readonly clientState: ClientState; private readonly startConnection = new AtomicReference<boolean>(false); private readonly timeout1 = 5; private name: string | null;
    constructor(store: ClientState, name?: string | null) {
        this.name = name ?? null; this.logClientContext = Log.context({ SystemComponent: "Client", ClientName: name ?? 'Unnamed' }).node; const contextLog = Log.context(this.logClientContext); this.clientState = store; this.destroyer = new Destroyer(`AetherCloudClient-${name ?? 'Unnamed'}`); this.destroyer.add(this.closeConnections.bind(this)); this.clouds = RCol.bMap<UUID, Cloud>(2000, "CloudCache"); this.servers = RCol.bMap<number, ServerDescriptor>(2000, "ServerCache");
        this.clouds.forValueUpdate().add((update: RMap.Update<UUID, Cloud>) => { Log.trace("Cloud cache updated via forValueUpdate", { uid: update.key.toString() }); store.setCloud(update.key, update.newValue); }); this.servers.forValueUpdate().add((update: RMap.Update<number, ServerDescriptor>) => { Log.trace("Server cache updated via forValueUpdate", { serverId: update.key }); store.getServerInfo(update.key).setDescriptor(update.newValue); });
        this.onNewChild.add((u: UUID) => { if (this.onNewChildApi.hasListener()) this.getClientApi(u).to( (api) => { if (api) this.onNewChildApi.fire(u, api); }, (err: Error) => Log.error("Failed to get Client API for new child", err, { childUid: u.toString() }) ); }); this.connect(); contextLog[Symbol.dispose]();
    }
    private closeConnections(): AFuture { Log.info("Closing all client connections..."); const closeFutures = Array.from(this.connections.values()).map(c => c.destroy(true)); this.connections.clear(); return AFuture.all(...closeFutures); }
    public getClientGroups(uid: UUID): ARFuture<Set<number>> { return this.getAuthApiFuture().mapRFuture(a => a.getAccessGroups(uid).map(groupIds => new Set(groupIds))); }
    public getAllAccessedClients(uid: UUID): ARFuture<Set<UUID>> { return this.getAuthApiFuture().mapRFuture(a => a.getAllAccessedClients(uid).map(uids => new Set(uids))); }
    public checkAccess(uid1: UUID, uid2: UUID): ARFuture<boolean> { return this.getAuthApiFuture().mapRFuture(a => a.checkAccessForSendMessage2(uid1, uid2)); }
    public getGroup(groupId: number): ARFuture<AccessGroup> { return this.getAuthApiFuture().mapRFuture(a => a.getAccessGroup(groupId)); }
    public getClientState(): ClientState { return this.clientState; }
    public getName(): string | null { return this.name; }
    public setName(name: string | null): void { this.name = name; }
    public getServer(id: number): ARFuture<ServerDescriptor> { const res = this.servers.getFuture(id); res.timeoutError(5, `Timeout waiting for server description: ${id}. Request pending or failed.`); return res; }
    public getServerDescriptorForUid(uid: UUID, consumer: AConsumer<ServerDescriptor>): void {
         if (this.destroyer.isDestroyed()) return;
         this.getCloud(uid).to(
             (cloud: Cloud | null) => {
                 if (!cloud || !cloud.data || cloud.data.length === 0) { Log.warn("No cloud data found for UID during getServerDescriptorForUid", { uid: uid.toString() }); return; }
                 const serverFutures = cloud.data.map(serverId => this.getServer(serverId));
                 ARFuture.all(serverFutures)
                     // --- ИСПРАВЛЕНО: Use proper .to() chaining ---
                     .to( (descriptors: (ServerDescriptor | null)[]) => descriptors.forEach(d => { if(d) consumer(d); }) )
                     .onError( (err: Error) => Log.error("Error resolving servers for UID", err, { uid: uid.toString() }) )
                     .timeoutError(this.timeout1, `Timeout resolving all servers for cloud of ${uid.toString()}`);
             },
             (err: Error) => Log.warn("Timeout or error resolving cloud for UID", err, { uid: uid.toString() })
         );
    }
    getConnection(serverDescriptor: ServerDescriptor): ConnectionWork { if (!serverDescriptor) throw new ClientApiException("Cannot get connection for null ServerDescriptor."); this.servers.putResolved(serverDescriptor.id, serverDescriptor); let connection = this.connections.get(serverDescriptor.id); if (!connection) { const contextLog = Log.context(this.logClientContext); Log.debug("Creating new ConnectionWork", { serverId: serverDescriptor.id }); connection = new ConnectionWork(this, serverDescriptor); this.connections.set(serverDescriptor.id, connection); contextLog[Symbol.dispose](); if (this.destroyer.isDestroyed()) { connection.destroy(true); this.connections.delete(serverDescriptor.id); throw new ClientStartException("Client destroyed during connection creation"); } } return connection; }
    public connect(): AFuture { if (!this.startConnection.compareAndSet(false, true)) return this.startFuture; Log.info("AetherCloudClient connect() initiated."); this._connectInternal(10); this.startFuture.to( () => { Log.info("AetherCloudClient started successfully."); RU.scheduleAtFixedRate(this.destroyer, 300, "MILLISECONDS", this.flush.bind(this)); }, (e: Error) => Log.error("Client failed to start", e) ).onCancel(() => Log.warn("Client start was cancelled")); return this.startFuture; }
    private _connectInternal(step: number): void {
        if (this.destroyer.isDestroyed()) { this.startFuture.cancel(); return; } if (step <= 0) { Log.error("All connection attempts failed."); if (!this.startFuture.isFinalStatus()) this.startFuture.error(new ClientStartException("All connection attempts failed to register or connect.")); return; }
        const currentUid = this.getUid();
        if (currentUid === null) { if (this.regStatus.compareAndSet(RegStatus.NO, RegStatus.BEGIN)) { Log.info("Starting registration process..."); const uris = this.clientState.getRegistrationUri(); if (!uris || uris.length === 0) { Log.error("Registration URI list is empty."); if (!this.startFuture.isFinalStatus()) this.startFuture.error(new ClientStartException("Registration URI list is empty.")); return; } const timeoutForConnect = this.clientState.getTimeoutForConnectToRegistrationServer(); const countServers = Math.min(uris.length, this.clientState.getCountServersForRegistration());
            try { const shuffledUris = [...uris]; for (let i = shuffledUris.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [shuffledUris[i], shuffledUris[j]] = [shuffledUris[j], shuffledUris[i]]; } const regFutures = shuffledUris.slice(0, countServers).map(uri => { const contextLog = Log.context(this.logClientContext); Log.debug("Attempting registration connection", { uri }); const regConn = new ConnectionRegistration(this, uri); contextLog[Symbol.dispose](); return regConn.connectFuture.toFuture(); }); const anyRegFuture = AFuture.any(...regFutures); anyRegFuture.onError((err: Error) => Log.error(`All ${countServers} registration connection attempts failed.`, err)); anyRegFuture.onCancel(() => { Log.warn("All registration connection attempts were cancelled."); if (!this.startFuture.isFinalStatus()) this.startFuture.cancel(); }); const timeoutFuture = AFuture.make(); const timer = RU.schedule(timeoutForConnect, () => { if (!anyRegFuture.isFinalStatus() && !this.startFuture.isFinalStatus()) { Log.error(`Timeout (${timeoutForConnect}ms) waiting for any registration connection. Retrying...`, { uris }); anyRegFuture.cancel(); regFutures.forEach(f => f.cancel()); this.regStatus.set(RegStatus.NO); RU.schedule(4000, () => this._connectInternal(step - 1)); timeoutFuture.tryDone(); } }); anyRegFuture.addListener(_ => { timer[Symbol.dispose](); timeoutFuture.tryDone(); }); this.startFuture.addListener(_ => { timer[Symbol.dispose](); timeoutFuture.tryDone(); }); } catch (e) { Log.error("Fatal error during registration setup.", e as Error); if (!this.startFuture.isFinalStatus()) this.startFuture.error(new ClientStartException("Fatal error during registration setup.", e as Error)); } } else Log.debug("Registration already in progress or completed."); }
        else { Log.info("Client already registered, connecting to own cloud..."); try { const cloud = this.clientState.getCloud(currentUid); if (!cloud || !cloud.data || cloud.data.length === 0) { Log.error("Client registered but cloud data is missing. Attempting re-registration logic.", { uid: currentUid.toString() }); this.clientState.setUid(null!); this.regStatus.set(RegStatus.NO); this._connectInternal(step -1); return; } const connectPromises = cloud.data.map(serverId => { const serverDesc = this.clientState.getServerDescriptor(serverId); if (serverDesc) { Log.debug("Connecting to work server in own cloud", { serverId }); const conn = this.getConnection(serverDesc); return conn.getRootApiFuture(); } else { Log.warn("ServerDescriptor missing for own cloud server", { serverId }); return this.getServer(serverId).map(() => null); } });
            AFuture.any(...connectPromises.map(f => f.toFuture()))
                // --- ИСПРАВЛЕНО: Use proper .to() chaining ---
                .to( () => { Log.info("Successfully connected to at least one work server in own cloud."); if (!this.startFuture.isFinalStatus()) this.startFuture.tryDone(); this.startScheduledTask(); } )
                .onError( (err: Error) => { Log.error("Failed to connect to any work server in own cloud. Retrying...", err); RU.schedule(5000, () => this._connectInternal(step - 1)); } )
                .timeoutError(10, "Timeout connecting to own cloud servers"); } catch (e) { Log.error("Fatal error during connection to own cloud.", e as Error); if (!this.startFuture.isFinalStatus()) this.startFuture.error(new ClientStartException("Fatal error during connection to own cloud.", e as Error)); }
        }
    }

    private startScheduledTask(): void { Log.debug("Starting scheduled background tasks (e.g., flush)."); }
    public getUid(): UUID | null { return this.clientState.getUid(); }

    public getAuthApiFuture(): ARFuture<AuthorizedApiRemote> {
        const resultFuture = ARFuture.of<AuthorizedApiRemote>(); if (this.destroyer.isDestroyed()) { resultFuture.cancel(); return resultFuture; }
        this.startFuture.to(() => { const activeConnections = Array.from(this.connections.values()).filter(c => c.connectFuture.isDone()); if (activeConnections.length > 0) { const firstConnWork = activeConnections[0]; const apiGetter = ARFuture.of<AuthorizedApiRemote>(); firstConnWork.remoteApiFutureAuth.runRes((api: AuthorizedApiRemote): ARFuture<AuthorizedApiRemote> => ARFuture.of(api)).to(apiGetter); apiGetter.to(resultFuture).timeoutError(this.timeout1, `Timeout getting AuthorizedApi from connection ${firstConnWork.uri}`); } else { Log.warn("getAuthApiFuture called, but no active connections available."); this.makeFirstConnection(); RU.schedule(500, () => { if (!resultFuture.isFinalStatus()) this.getAuthApiFuture().to(resultFuture); }); resultFuture.timeoutError(this.timeout1 + 1, "Timeout waiting for any connection to become active for getAuthApiFuture"); } }).onError((e: Error) => resultFuture.error(new ClientApiException("Client not started, cannot get Auth API.", e)) ) .onCancel(() => resultFuture.cancel()); return resultFuture;
    }

    public getAuthApi(consumer: AConsumer<AuthorizedApiRemote>): void { if (this.destroyer.isDestroyed()) return; this.getAuthApiFuture().to(consumer, (err: Error) => Log.error("Error providing AuthorizedApi to consumer", err)); }
    public getAuthApi1<T>(func: AFunction<AuthorizedApiRemote, ARFuture<T>>): ARFuture<T> { if (this.destroyer.isDestroyed()) return ARFuture.canceled<T>(); return this.getAuthApiFuture().mapRFuture(func); }

    public flush(): void {
         if (this.destroyer.isDestroyed()) return; const needsConnection = this.messageNodeMap.size > 0 || this.servers.isRequests() || this.clouds.isRequests(); if (this.connections.size === 0 && needsConnection) { Log.debug("Flush needed but no connections, attempting to make first connection."); this.makeFirstConnection(); }
         this.connections.forEach(c => { if (c.getRootApiFuture().isDone()) c.flush(); else Log.trace("Skipping flush for connection not yet ready", { uri: c.uri }); });
    }

    makeFirstConnection(): void {
        if (this.destroyer.isDestroyed() || this.connections.size > 0) return; const uid = this.getUid(); if (uid === null) { Log.warn("Cannot make first connection: client not registered (UID is null). Triggering connect."); this.connect(); return; }
        const cloud = this.clientState.getCloud(uid); if (cloud === null || cloud.data.length === 0) { Log.warn("Cannot make first connection: own cloud data is missing.", { uid: uid.toString() }); this.clientState.setUid(null!); this.regStatus.set(RegStatus.NO); this.connect(); return; }
        const serverId = cloud.data[0]; Log.debug("Making first connection to server", { serverId });
        this.getServer(serverId)
            // --- ИСПРАВЛЕНО: Use proper .to() chaining ---
            .to( (descriptor: ServerDescriptor | null) => { if (descriptor && !this.connections.has(serverId)) { Log.info("Establishing first connection via descriptor", { serverId }); this.getConnection(descriptor); } else if (!descriptor) { Log.error("Failed to get ServerDescriptor for first connection attempt", undefined, { serverId }); } } )
            .onError( (err: Error) => Log.warn("Failed to get ServerDescriptor for first connection", err, { serverId }) )
            .timeoutError(this.timeout1, `Timeout getting descriptor for first connection server ${serverId}`);
    }

    public getConnections(): ConnectionWork[] { return Array.from(this.connections.values()); }
    public getCloud(uid: UUID): ARFuture<Cloud | null> { if (this.destroyer.isDestroyed()) return ARFuture.canceled<Cloud | null>(); const cachedCloud = this.clientState.getCloud(uid); if (cachedCloud) return ARFuture.of(cachedCloud); const res = this.clouds.getFuture(uid); res.timeoutError(4, `Timeout getting cloud for: ${uid.toString()}`); return res as ARFuture<Cloud | null>; }
    public getPingTime(): number { return this.clientState.getPingDuration().getNow() ?? 1000; }
    public isRegistered(): boolean { return this.clientState.getUid() !== null; }
    public confirmRegistration(regResp: FinishResult_C): void { if (!this.regStatus.compareAndSet(RegStatus.BEGIN, RegStatus.CONFIRM)) { Log.info("Registration already confirmed or not in BEGIN state", { regDataAlias: regResp.alias.toString() }); if (this.regStatus.get() === RegStatus.CONFIRM) { this.clouds.putResolved(regResp.uid, regResp.cloud); this.clientState.setUid(regResp.uid); this.clientState.setAlias(regResp.alias); Log.info("Re-confirmed registration details", { uid: regResp.uid.toString() }); this.ensureOwnCloudConnections(regResp.cloud); } return; } Log.info("Confirming registration...", { uid: regResp.uid.toString(), alias: regResp.alias.toString() }); this.clouds.putResolved(regResp.uid, regResp.cloud); this.clientState.setUid(regResp.uid); this.clientState.setAlias(regResp.alias); Log.info("Received own cloud", { cloud: regResp.cloud }); this.ensureOwnCloudConnections(regResp.cloud); if (!this.startFuture.isFinalStatus()) this.startFuture.tryDone(); else Log.warn("startFuture was already final when confirmRegistration completed."); }
    private ensureOwnCloudConnections(cloud: Cloud): void { if (cloud?.data?.length > 0) { Log.debug("Ensuring connections to own cloud servers", { count: cloud.data.length }); cloud.data.forEach(serverId => { this.getServer(serverId)
        // --- ИСПРАВЛЕНО: Use proper .to() chaining ---
        .to( (sd: ServerDescriptor | null) => { if (sd) this.getConnection(sd); } )
        .onError( (err: Error) => Log.warn("Failed to get/connect to own cloud server after registration", err, { serverId }) ); }); } else { Log.warn("Own cloud data is empty after registration confirmation."); if (!this.startFuture.isFinalStatus()) this.startFuture.error(new ClientStartException("Registration confirmed but received empty cloud data.")); } }
    public getMessageNode(uid: UUID): MessageNode; public getMessageNode(uid: UUID, strategy: MessageEventListener): MessageNode; public getMessageNode(uid: UUID, strategy?: MessageEventListener): MessageNode { Log.debug("getMessageNode for", { uid: uid.toString() }); if (!uid) throw new Error("UUID cannot be null for getMessageNode"); const uuidString = uid.toString(); let node = this.messageNodeMap.get(uuidString); if (!node) { const actualStrategy = strategy ?? MessageEventListenerDefault; node = new MessageNode(this, uid, actualStrategy); this.messageNodeMap.set(uuidString, node); this.onClientStream.fire(node); } else if (strategy && node.strategy !== strategy) Log.trace("MessageNode already exists, ignoring new strategy provided.", { uid: uuidString }); return node; }
    destroy(force: boolean): AFuture { Log.info(`Destroying AetherCloudClient (${this.name ?? 'Unnamed'}) force=${force}`); const destroyFuture = this.destroyer.destroy(force); destroyFuture.onError((e: Error) => Log.error("Error during AetherCloudClient destroy.", e as Error)).onCancel(() => Log.warn("AetherCloudClient destroy was cancelled.")); return destroyFuture; }
    [Symbol.dispose](): void { this.destroy(true); } public isConnected(): boolean { return this.getUid() !== null && this.connections.size > 0 && Array.from(this.connections.values()).some(c => c.connectFuture.isDone()); }
    public getParent(): UUID { const parent = this.clientState.getParentUid(); if (!parent) throw new Error("Parent UID not set in client state"); return parent; }
    public getMasterKey(): AKey.Symmetric {
        const dtoKey = this.clientState.getMasterKey();
        if (dtoKey) { try {
            // --- ИСПРАВЛЕНО: Explicitly cast DtoKey for KeyUtil.of ---
            return KeyUtil.of(dtoKey as any).asSymmetric(); // Cast to bypass strict check
         } catch (e) { Log.error("Error converting stored master key, generating new one.", e as Error); } }
        const cryptoProvider = CryptoProviderFactory.getProvider(this.getCryptLib().toString()); const newKey = cryptoProvider.createSymmetricKey();
        // --- ИСПРАВЛЕНО: Explicitly cast AKey for KeyUtil.of ---
        this.clientState.setMasterKey(KeyUtil.of(newKey as any) as DtoKey); // Cast input and output
        Log.warn("Generated new master key as none was found or existing was invalid."); return newKey;
    }
    public waitStart(timeoutSeconds: number): AetherCloudClient { this.startFuture.waitDone(timeoutSeconds); if (!this.startFuture.isDone()) throw new ClientTimeoutException(`Client failed to start within ${timeoutSeconds} seconds.`); return this; }
    public getCryptLib(): CryptoLib { return this.clientState.getCryptoLib(); } public getAlias(): UUID | null { return this.clientState.getAlias(); }
    public onMessage(consumer: ABiConsumer<UUID, Uint8Array>): void { this.onClientStream.add((m: MessageNode) => m.bufferIn.add((d: { data: Uint8Array }) => { try { consumer(m.getConsumerUUID(), d.data); } catch (e) { Log.error("Error in onMessage consumer", e as Error, { consumerUUID: m.getConsumerUUID().toString() }); } })); }
    public onClientStreamCreated(consumer: AConsumer<MessageNode>): void { this.onClientStream.add(consumer); } public onNewChildAdded(consumer: AConsumer<UUID>): void { this.onNewChild.add(consumer); }
    public getClientApi(uid: UUID): ARFuture<ServerApiByUidRemote | null> { const result = ARFuture.of<ServerApiByUidRemote | null>(); if (this.destroyer.isDestroyed()) { result.cancel(); return result; } Log.debug("Requesting Client API for", { targetUid: uid.toString() }); this.getAuthApiFuture().to( (authApi: AuthorizedApiRemote) => { if (!authApi) { result.error(new Error("Failed to get Authorized API to request Client API")); return; } const clientApiCtx = new FastApiContext(); const clientApiFuture = new RemoteApiFuture<ServerApiByUidRemote>(ServerApiByUid.META); clientApiFuture.run((serverApi: ServerApiByUidRemote) => { Log.debug("Successfully received ServerApiByUid remote instance", { targetUid: uid.toString() }); result.tryDone(serverApi); }); const clientStream = ClientApiStream.fromRemote(clientApiCtx, clientApiFuture, AFuture.make()); Log.debug("Calling authApi.client()", { targetUid: uid.toString() }); authApi.client(uid, clientStream); authApi.flush(); result.timeoutError(this.timeout1, `Timeout getting Client API for ${uid.toString()}`); }, (err: Error) => { Log.error("Failed to get Authorized API", err, { targetUid: uid.toString() }); result.error(new ClientApiException("Could not get Auth API to request Client API.", err)); } ).onCancel(() => result.cancel()); return result; }
    public verifySign(signedKey: CryptoSignedKey): boolean { const signers = this.clientState.getRootSigners(); for (const checker of signers) { try { if (signedKey.check(checker)) return true; } catch (e) { Log.warn("Error checking signature with one signer", e as Error); } } return false; }
    public sendMessage(uid: UUID, message: Uint8Array): AFuture; public sendMessage(uid: UUID, message: { data: Uint8Array, future: AFuture }): void; public sendMessage(uid: UUID, message: Uint8Array | { data: Uint8Array, future: AFuture }): AFuture | void { const node = this.getMessageNode(uid); if (message instanceof Uint8Array) { const future = AFuture.make(); node.send(message, future); return future; } else { node.send(message.data, message.future); } }
    public getCryptoEngineForServer(serverId: number): CryptoEngine { const k = this.getMasterKey(); const intServerId = Math.trunc(serverId); return k.getCryptoProvider().createKeyForClient(k, intServerId).asSymmetric().toCryptoEngine(); }
    public getNextPing(): number { return 0; }
    public setCloud(uid: UUID, cloud: Cloud): void { Log.trace("setCloud called", { uid: uid.toString() }); this.clouds.putResolved(uid, cloud); }
    public static of(state: ClientState): AetherCloudClient { return new AetherCloudClient(state); }
}
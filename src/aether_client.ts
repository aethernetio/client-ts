// =============================================================================================
// FILE: aether.client.ts
// PURPOSE: Contains Client State, Connection abstractions, and the AetherCloudClient core.
// DEPENDENCIES: aether.types.ts, aether.utils.ts, aether.logging.ts, aether.future.ts,
//               aether.rcollection.ts, aether.crypto.ts, aether.fastmeta.ts
// =============================================================================================

import {
    UUID, URI, Key, CryptoLib, SignChecker, Cloud, ServerDescriptor, FinishResult_C,
    RegStatus_C, ClientApiUnsafe, ServerDescriptor_C, AtomicLong, AtomicReference,
    ConcurrentLinkedQueue_C, Destroyable, AConsumer, AFunction, ASupplier, Value_C,
    LoginApiRemote, RegistrationRootApiRemote, RemoteApi, ClientStartException
} from './aether_types';
import { LogFacade, LNode } from './aether_logging';
import { RU, Destroyer, StandardUUIDsImpl } from './aether_utils';
import {
    AFuture, ARFuture, AMFuture, AFutureImpl, ARFutureImpl, EventConsumer, AMFutureImpl
} from './aether_future';
import { BMap, RMap, RCol } from './aether_rcollection';
import { SignedKey, SignedKeyUtil } from './aether_crypto';
import { FastMetaClient, FastMetaApi, FastApiContextLocal } from './aether_fastmeta';

// =============================================================================================
// SECTION 11: CLIENT INTERFACES, BASE CLASSES, AND TYPES (Cont.)
// =============================================================================================

export interface ClientState {
    getUid(): UUID | null; setUid(uid: UUID): void;
    getAlias(): UUID | null; setAlias(alias: UUID | null): void;
    setMasterKey(key: Key): void;
    getMasterKey(): Key | null;
    getServerInfo(sid: number): ClientState.ServerInfo;
    getServerDescriptor(serverId: number): ServerDescriptor | null;
    getClientInfo(uid: UUID): ClientState.ClientInfo;
    setCloud(uid: UUID, cloud: Cloud): void;
    getCloud(uid: UUID): Cloud | null;
    getRegistrationUri(): URI[];
    getPingDuration(): AMFuture<number>;
    getParentUid(): UUID;
    getCryptoLib(): CryptoLib;
    getRootSigners(): Set<SignChecker>;
    getTimeoutForConnectToRegistrationServer(): number;
    getCountServersForRegistration(): number;
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

export class ClientStateInMemory implements ClientState {
    private uid: UUID | null;
    private alias: UUID | null = null;
    private masterKey: Key | null = null;
    private servers = new Map<number, ClientState.ServerInfo>();
    private clients = new Map<string, ClientState.ClientInfo>();
    private registrationUris: URI[];
    private pingDuration = AMFutureImpl.completed(0);
    private parentUid: UUID;
    private cryptoLib: CryptoLib = 'HYDROGEN';
    private rootSigners: Set<SignChecker> = new Set();
    private timeoutForConnectToRegistrationServer = 5000;
    private countServersForRegistration = 1;


    constructor(initialUid: UUID | null, uris: string[]) {
        this.uid = initialUid;
        this.registrationUris = uris.slice();
        this.parentUid = StandardUUIDsImpl.ROOT_UID;
    }

    getUid(): UUID | null { return this.uid; }
    setUid(uid: UUID): void { this.uid = uid; }
    getAlias(): UUID | null { return this.alias; }
    setAlias(alias: UUID | null): void { this.alias = alias; }
    setMasterKey(key: Key): void { this.masterKey = key; }
    getMasterKey(): Key | null { return this.masterKey; }

    getServerInfo(sid: number): ClientState.ServerInfo {
        if (!this.servers.has(sid)) {
            const serverData = {
                serverId: sid,
                descriptor: null as ServerDescriptor | null,
                getServerId: () => sid,
                getDescriptor: () => serverData.descriptor,
                setDescriptor: (desc: ServerDescriptor) => { serverData.descriptor = desc; }
            };
            this.servers.set(sid, serverData);
        }
        return this.servers.get(sid)!;
    }

    getServerDescriptor(serverId: number): ServerDescriptor | null {
        return this.servers.get(serverId)?.getDescriptor() ?? null;
    }

    getClientInfo(uid: UUID): ClientState.ClientInfo {
        const key = uid.toString();
        if (!this.clients.has(key)) {
            const clientData = {
                uid: uid,
                cloud: null as Cloud | null,
                getUid: () => uid,
                getCloud: () => clientData.cloud,
                setCloud: (cloud: Cloud) => { clientData.cloud = cloud; }
            };
            this.clients.set(key, clientData);
        }
        return this.clients.get(key)!;
    }

    setCloud(uid: UUID, cloud: Cloud): void { this.getClientInfo(uid).setCloud(cloud); }
    getCloud(uid: UUID): Cloud | null { return this.getClientInfo(uid).getCloud(); }
    getRegistrationUri(): URI[] { return [...this.registrationUris]; }
    getPingDuration(): AMFuture<number> { return this.pingDuration; }
    getParentUid(): UUID { return this.parentUid; }
    getCryptoLib(): CryptoLib { return this.cryptoLib; }
    getRootSigners(): Set<SignChecker> { return this.rootSigners; }
    getTimeoutForConnectToRegistrationServer(): number { return this.timeoutForConnectToRegistrationServer; }
    getCountServersForRegistration(): number { return this.countServersForRegistration; }
}

export class MessageNode {
    public readonly connectionsOut: Set<any> = new Set();
    public readonly bufferOut: ConcurrentLinkedQueue_C<Value_C<Uint8Array>> = new ConcurrentLinkedQueue_C();
    public readonly bufferIn: EventConsumer<Value_C<Uint8Array>> = new EventConsumer();
    public readonly consumer: UUID;

    constructor(consumerId: UUID) { this.consumer = consumerId; }
    addConsumerConnectionOut(conn: any): void {
        this.connectionsOut.add(conn);
        let msg: Value_C<Uint8Array> | undefined;
        while ((msg = this.bufferOut.poll()) !== undefined) {
            try { (conn as any).send(msg.data); } catch (e) { LogFacade.error("Error sending buffered message via connection consumer", e as Error); }
        }
    }
    removeConsumerConnectionOut(conn: any): void { this.connectionsOut.delete(conn); }
    sendMessageFromServerToClient(data: Value_C<Uint8Array>): void { this.bufferIn.fire(data); }
}

export interface MessageEventListener {
    setConsumerCloud(messageNode: MessageNode, cloud: Cloud): void;
    onResolveConsumerServer(messageNode: MessageNode, serverDescriptor: ServerDescriptor): void;
    onResolveConsumerConnection(messageNode: MessageNode, connection: any): void;
}
export const MessageEventListenerDefault: MessageEventListener = {
    setConsumerCloud: (messageNode, cloud) => { /* ... */ },
    onResolveConsumerServer: (messageNode, serverDescriptor) => { /* ... */ },
    onResolveConsumerConnection: (messageNode, connection) => { /* ... */ },
};

export abstract class Connection<LT, RT extends RemoteApi> implements Destroyable {
    protected readonly client: AetherCloudClient;
    protected readonly uri: URI;
    public readonly connectFuture: ARFuture<RT> = ARFutureImpl.of();
    protected readonly fastMetaClient: FastMetaClient<LT, RT>;
    protected rootApi: RT | null = null;

    constructor(client: AetherCloudClient, uri: URI, localApiMeta: FastMetaApi<LT, any>, remoteApiMeta: FastMetaApi<any, RT>, clientImpl: FastMetaClient<LT, RT>) {
        this.uri = uri;
        this.client = client;
        this.fastMetaClient = clientImpl;

        client.destroyer.add(this as unknown as Destroyable);
        client.destroyer.add(fastMetaClient as unknown as Destroyable);

        const localApi = RU.cast<LT>(this);

        this.fastMetaClient.connect(uri, localApiMeta, remoteApiMeta, (r: RT) => {
            this.rootApi = r;
            return localApi;
        }).to((ctx: FastApiContextLocal<LT>) => ctx.localApi).map(remoteApiMeta.makeRemote).to(this.connectFuture as unknown as ARFuture<any>);
    }

    public getRootApiFuture(): ARFuture<RT> { return this.connectFuture; }
    public destroy(force: boolean): AFuture {
        LogFacade.info(`Destroying Connection to ${this.uri}`);
        return this.fastMetaClient.close();
    }
}

export class ConnectionWork extends Connection<ClientApiUnsafe, LoginApiRemote> {
    public readonly lastBackPing: AtomicLong = new AtomicLong(Date.now());
    public readonly ready: ARFuture<ConnectionWork> = ARFutureImpl.of();
    public readonly serverDescriptor: ServerDescriptor_C;

    constructor(client: AetherCloudClient, s: ServerDescriptor_C, clientImpl: FastMetaClient<ClientApiUnsafe, LoginApiRemote>) {
        // Placeholder for correct META types. Assuming ClientApiUnsafe.META and LoginApi.META
        const localApiMeta: FastMetaApi<ClientApiUnsafe, any> = {} as any;
        const remoteApiMeta: FastMetaApi<any, LoginApiRemote> = {} as any;
        super(client, s.getIpAddress().getURI('TCP'), localApiMeta, remoteApiMeta, clientImpl);
        this.serverDescriptor = s;
    }
}

export class ConnectionRegistration extends Connection<any, RegistrationRootApiRemote> {
    constructor(client: AetherCloudClient, uri: URI, clientImpl: FastMetaClient<any, RegistrationRootApiRemote>) {
        // Placeholder for correct META types.
        const localApiMeta: FastMetaApi<any, any> = {} as any;
        const remoteApiMeta: FastMetaApi<any, RegistrationRootApiRemote> = {} as any;
        super(client, uri, localApiMeta, remoteApiMeta, clientImpl);
    }
}


export class AetherCloudClient implements Destroyable {
    public readonly startFuture: AFuture = AFutureImpl.make();
    public readonly destroyer: Destroyer;
    public readonly logClientContext: LNode;
    public readonly clouds: BMap<UUID, Cloud>;
    public readonly servers: BMap<number, ServerDescriptor>;
    public readonly messageNodeMap: Map<string, MessageNode> = new Map();
    public readonly onNewChild: EventConsumer<UUID> = new EventConsumer();
    public readonly regStatus: AtomicReference<RegStatus_C> = new AtomicReference(RegStatus_C.NO);
    private readonly clientState: ClientState;
    private currentUid: UUID | null;
    private readonly startConnection: AtomicReference<boolean> = new AtomicReference(false);


    constructor(store: ClientState, name: string = "AetherClient") {
        this.logClientContext = LogFacade.createContext("SystemComponent", name);
        this.clientState = store;
        this.currentUid = store.getUid();
        this.destroyer = new Destroyer(name);

        this.clouds = RCol.bMap(2000, `${name}-CloudCache`);
        this.servers = RCol.bMap(2000, `${name}-ServerCache`);
        this.destroyer.add(this.clouds);
        this.destroyer.add(this.servers);

        // --- Initialization Logic (Ported from AetherCloudClient.java) ---

        // 1. Listeners: save Cloud/Descriptor to store
        this.clouds.forValueUpdate().add((update: RMap.Update<UUID, Cloud>) => {
            if (update.newValue !== null) { this.clientState.setCloud(update.key, update.newValue); }
        });
        this.servers.forValueUpdate().add((update: RMap.Update<number, ServerDescriptor>) => {
            if (update.newValue !== null) {
                this.clientState.getServerInfo(update.key).setDescriptor(update.newValue);
            }
        });

        // 2. onNewChild Listener (Placeholder for ServerApiByUid)
        this.onNewChild.add((u: UUID) => {
            // Placeholder: client.getClientApi(u, api => { client.onNewChildApi.fire(u, api); });
        });

        // 3. Initial connection attempt
        this.connect();

        // 4. Start scheduled flush task upon successful connection
        this.startFuture.to(() => {
            RU.scheduleAtFixedRate(this.destroyer, 3, "MILLISECONDS", () => this.flush());
        }).onError(e => {
            LogFacade.error("Client failed to start", e as Error);
        }).onCancel(() => {
            LogFacade.warn("Client start was cancelled");
        });
    }

    public getUid(): UUID | null { return this.currentUid; }
    public getCryptLib(): CryptoLib { return this.clientState.getCryptoLib(); }
    public getParent(): UUID { return this.clientState.getParentUid(); }
    public getPingTime(): number { return this.clientState.getPingDuration().getNow() || 0; }
    public verifySign(_signedKey: SignedKey): boolean { return SignedKeyUtil.verifySign(_signedKey, this.clientState.getRootSigners()); }

    public getServer(id: number): ARFuture<ServerDescriptor> {
        const cached = this.clientState.getServerDescriptor(id);
        if (cached) return ARFutureImpl.of(cached);

        const res = this.servers.getFuture(id);
        res.timeoutMs(5000, () => { LogFacade.warn("Timeout waiting for server description", { id }); });
        // Placeholder for resolution logic: executeAuthorizedApi(api => api.resolverServers([id]))
        return res;
    }

    public getCloud(uid: UUID): ARFuture<Cloud> {
        const cached = this.clientState.getCloud(uid);
        if (cached) return ARFutureImpl.of(cached);

        const res = this.clouds.getFuture(uid);
        res.timeoutError(4, `Timeout getting cloud: ${uid.toString()}`);
        // Placeholder for resolution logic: executeAuthorizedApi(api => api.resolverClouds([uid]))
        return res;
    }

    public setCloud(uid: UUID, cloud: Cloud): void { this.clouds.putResolved(uid, cloud); }

    public connect(): AFuture {
        if (!this.startConnection.compareAndSet(false, true)) return this.startFuture;
        this.connectInternal(10);
        return this.startFuture;
    }

    private connectInternal(step: number): void {
        if (this.destroyer.isDestroyed()) { this.startFuture.cancel(); return; }
        if (step === 0) {
            if (!this.startFuture.isFinalStatus()) { this.startFuture.error(new ClientStartException("All connection attempts failed.")); }
            return;
        }

        if (this.getUid() === null || this.regStatus.get() !== RegStatus_C.CONFIRM) {
            if (this.regStatus.compareAndSet(RegStatus_C.NO, RegStatus_C.BEGIN)) {
                const uris = this.clientState.getRegistrationUri();
                if (!uris || uris.length === 0) {
                    if (!this.startFuture.isFinalStatus()) { this.startFuture.error(new ClientStartException("Registration URI list is void.")); }
                    return;
                }
                const timeoutForConnect = this.clientState.getTimeoutForConnectToRegistrationServer();
                const countServers = Math.min(uris.length, this.clientState.getCountServersForRegistration());

                const startFutures: AFuture[] = RU.flow.map(uris, (uri: URI) => {
                    // Placeholder for actual FastMetaClient implementation
                    const clientImpl: FastMetaClient<any, RegistrationRootApiRemote> = {} as any;
                    return new ConnectionRegistration(this, uri, clientImpl).connectFuture.toFuture();
                }).slice(0, countServers); // Simplified flow filter

                const anyFuture = AFutureImpl.all(...startFutures);
                anyFuture.to(() => this.startFuture.tryDone())
                         .onError(this.startFuture.error.bind(this.startFuture))
                         .onCancel(this.startFuture.cancel.bind(this.startFuture));

                anyFuture.timeoutMs(timeoutForConnect, () => {
                    LogFacade.error("Failed to connect to registration server.");
                    RU.schedule(4000, () => this.connectInternal(step - 1));
                });
            }
        } else {
            try {
                // Logic for connecting to own cloud
                const uid = this.getUid()!;
                this.getCloud(uid).to((cloud: Cloud) => {
                    const serverId = (cloud as any)?.data?.[0];
                    if (serverId) {
                        this.getServer(serverId).to((descriptor: ServerDescriptor) => {
                            // Placeholder for getConnection
                            // this.getConnection(descriptor);
                            this.startFuture.tryDone();
                        });
                    } else {
                        throw new ClientStartException("Could not determine server ID from own cloud.");
                    }
                });
            } catch (e) {
                LogFacade.error("Fatal error during connection to own cloud.", e as Error);
                if (!this.startFuture.isFinalStatus()) { this.startFuture.error(new ClientStartException("Fatal error during connection to own cloud.", e as Error)); }
            }
        }
    }

    public confirmRegistration(regResp: FinishResult_C): void {
        if (!this.regStatus.compareAndSet(RegStatus_C.BEGIN, RegStatus_C.CONFIRM)) {
            LogFacade.info("Already registration", { regData: regResp });
            return;
        }

        const newUid = regResp.getUid();
        const newAlias = regResp.getAlias();
        const cloud = regResp.getCloud();

        this.clouds.putResolved(newUid, cloud);
        this.clientState.setUid(newUid);
        this.clientState.setAlias(newAlias);
        this.currentUid = newUid;

        // FIX: Ensure immediate connection to WorkServer after registration
        const serverId = (cloud as any)?.data?.[0];
        if (serverId) {
            this.getServer(serverId).to((descriptor: ServerDescriptor) => {
                // this.getConnection(descriptor); // Placeholder
            });
        }

        this.startFuture.tryDone();
    }

    public flush(): void {
        // Placeholder for full flush logic:
        // 1. Check if connections exist.
        // 2. Check if clouds.isRequests() or servers.isRequests().
        // 3. If no connections but requests exist, call makeFirstConnection.
        // 4. Call c.flush() on all active connections.
    }

    public destroy(force: boolean): AFuture {
        return this.destroyer.destroy(force);
    }
}
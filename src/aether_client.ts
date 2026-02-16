/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export { MessageNode, MessageEventListener } from './aether_client_message';
import { ClientState, ClientStateInMemory } from './aether_client_state';
import {
    AKey,
    CryptoEngine,
    CryptoProviderFactory,
    SignedKey,
    PairSymKeys
} from './aether_crypto';
import {
    ConnectionWork
} from './aether_client_connection_work';
import {
    ConnectionRegistration
} from './aether_client_connection_reg';
import {
    LNode,
    Log
} from './aether_logging';
import { AConsumer, ClientApiException, ClientStartException, Destroyable, URI, UUID } from './aether_types';
import { Destroyer, RU, Queue } from './aether_utils';
import { AFuture, ARFuture, EventBiConsumer, EventConsumer } from './aether_future';
import {
    Cloud,
    FinishResult,
    ServerDescriptor,
    AccessGroup,
    AuthorizedApiRemote,
    ServerApiByUid,
    AccessCheckPair,
    CryptoLib,
} from './aether_api';
import { BMap, RCol } from './aether_rcollection';
import { ClientCloud, CloudPriorityManager } from "./aether_client_cloud_priority";
import { MessageEventListener, MessageEventListenerDefault, MessageNode } from './aether_client_message';
import { CryptoUtils } from './aether_crypto_utils';

export enum RegStatus { NO, BEGIN, CONFIRM }

export interface AccessGroupI {
    id: bigint;
    owner: UUID;
    data: Set<UUID>;
    add(uuid: UUID): ARFuture<boolean>;
    remove(uuid: UUID): ARFuture<boolean>;
}

class AccessGroupImpl implements AccessGroupI {
    public id: bigint;
    public owner: UUID;
    public data: Set<UUID>;

    constructor(private client: AetherCloudClient, group: AccessGroup) {
        this.id = group.getId();
        this.owner = group.getOwner();
        this.data = new Set(group.getData());
    }

    add(uuid: UUID): ARFuture<boolean> {
        if (this.data.has(uuid)) return ARFuture.of(false);
        const groupMap = this.client.accessOperationsAdd.get(this.id) ?? new Map<string, ARFuture<boolean>>();
        if (!this.client.accessOperationsAdd.has(this.id)) this.client.accessOperationsAdd.set(this.id, groupMap);
        const uuidStr: string = uuid.toString();
        let future = groupMap.get(uuidStr);
        if (!future) {
            future = ARFuture.make<boolean>();
            groupMap.set(uuidStr, future);
        }
        this.client.flush();
        return future;
    }

    remove(uuid: UUID): ARFuture<boolean> {
        if (!this.data.has(uuid)) return ARFuture.of(false);
        const groupMap = this.client.accessOperationsRemove.get(this.id) ?? new Map<string, ARFuture<boolean>>();
        if (!this.client.accessOperationsRemove.has(this.id)) this.client.accessOperationsRemove.set(this.id, groupMap);
        const uuidStr: string = uuid.toString();
        let future = groupMap.get(uuidStr);
        if (!future) {
            future = ARFuture.make<boolean>();
            groupMap.set(uuidStr, future);
        }
        this.client.flush();
        return future;
    }
}

export class ClientTask {
    constructor(public readonly uid: UUID, public readonly task: AConsumer<ServerApiByUid>) { }
}

export class AetherCloudClient implements Destroyable {
    private static readonly RECOVERY_RETRY_DELAY_MS = 10000;
    public readonly startFuture = AFuture.make();
    public readonly destroyer = new Destroyer("AetherCloudClient");
    public readonly isRecoveryInProgress = { value: false };
    public readonly recoveryFuture = AFuture.make();
    public readonly logClientContext: LNode;

    private readonly connections = new Map<number, ConnectionWork>();
    private readonly regStatus = { value: RegStatus.NO };
    public readonly servers: BMap<number, ServerDescriptor>;
    public readonly clouds: BMap<UUID, ClientCloud>;
    public readonly clientGroups: BMap<UUID, Set<bigint>>;
    public readonly accessGroups: BMap<bigint, AccessGroup | null>;
    public readonly allAccessedClients: BMap<UUID, Set<UUID>>;
    public readonly accessCheckCache: BMap<AccessCheckPair, boolean>;
    getParent(): UUID {
        return this.state.getParentUid();
    }
    public readonly messageNodeMap = new Map<string, MessageNode>();
    public readonly onNewChild = new EventConsumer<UUID>();
    public readonly onNewChildApi = new EventBiConsumer<UUID, ServerApiByUid>();
    public readonly onClientStreamCreated = new EventConsumer<MessageNode>();

    public readonly onMessage = new EventBiConsumer<UUID, Uint8Array>();



    public readonly accessOperationsAdd = new Map<bigint, Map<string, ARFuture<boolean>>>();
    public readonly accessOperationsRemove = new Map<bigint, Map<string, ARFuture<boolean>>>();
    public readonly clientTasks = new Queue<ClientTask>();
    public readonly authTasks = new Queue<AConsumer<AuthorizedApiRemote>>();

    public readonly priorityManager = new CloudPriorityManager();
    public readonly state: ClientState;
    private readonly connectionRegistrations = new Set<ConnectionRegistration>();
    private beginConnect = false;
    private name: string | null;
    public getCryptoLib(): CryptoLib {
        return CryptoLib.SODIUM
    }
    constructor(state: ClientState, name: string | null = null) {
        this.state = state;
        this.name = name;
        this.logClientContext = Log.of({ component: "Client", clientName: name });

        this.clouds = RCol.bMap<UUID, ClientCloud>(30000, "CloudCache");
        this.servers = RCol.bMap<number, ServerDescriptor>(30000, "ServerCache");
        this.clientGroups = RCol.bMap<UUID, Set<bigint>>(30000, "ClientGroupsCache");
        this.accessGroups = RCol.bMap<bigint, AccessGroup | null>(30000, "AccessGroupsCache");
        this.allAccessedClients = RCol.bMap<UUID, Set<UUID>>(30000, "AllAccessedClientsCache");
        this.accessCheckCache = RCol.bMap<AccessCheckPair, boolean>(30000, "AccessCheckCache");

        this.destroyer.add((_: boolean) => this.closeConnections());
        this.populateCachesFromState();

        this.onNewChild.add((u: UUID) => {
            if (this.onNewChildApi.hasListener()) {
                this.getClientApi(u, (api: ServerApiByUid) => this.onNewChildApi.fire(u, api));
            }
        });

        this.startFuture.to(() => this.startScheduledTask());
        this.connect();
    }

    private closeConnections(): void {
        this.connections.forEach((c: ConnectionWork) => c.destroy(true));
        this.connections.clear();
    }

    public populateCachesFromState(): void {
        if (!this.getUid()) return;
        for (const c of this.state.getClientInfoAll()) {
            if (c.getCloud()) {
                const cloud: Cloud = c.getCloud()!.toCloud();
                this.priorityManager.updateCloudFromWork(c.getUid(), cloud);
                this.clouds.put(c.getUid(), new ClientCloud(c.getUid(), cloud));
                this.state.setCloud(c.getUid(), c.getCloud()!);
            }
        }
        for (const s of this.state.getServerInfoAll()) {
            if (s.getDescriptor()) this.putServerDescriptor(s.getDescriptor()!);
        }
    }

    public connect(): AFuture {
        if (this.beginConnect) return this.startFuture;
        this.beginConnect = true;
        this.connectStep(1);
        return this.startFuture;
    }

    private connectStep(step: number): void {
        if (this.destroyer.isDestroyed()) {
            this.startFuture.tryError(new Error("is destroyed"));
            return;
        }
        if (step === 0) {
            if (!this.startFuture.isDone()) {
                this.startFuture.tryError(new ClientStartException("All connection attempts failed."));
            }
            return;
        }

        if (!this.getUid()) {
            if (this.regStatus.value === RegStatus.NO) {
                this.regStatus.value = RegStatus.BEGIN;
                const regs: ConnectionRegistration[] = this.makeConnectionReg();
                const timeout: number = this.state.getTimeoutForConnectToRegistrationServer();

                const anyFuture: AFuture = AFuture.any(...regs.map((r: ConnectionRegistration) => r.registration()));
                anyFuture.to(() => this.startScheduledTask()).onError((e: Error) => this.startFuture.tryError(e));
                anyFuture.timeoutMs(timeout, () => {
                    Log.warn("Failed to connect to registration server", { uris: this.state.getRegistrationUri() });
                    RU.schedule(5000, () => this.connectStep(step));
                });
            }
        } else {
            try {
                const uid: UUID = this.getUid()!;
                const cloudData = this.state.getCloud(uid);
                const cloud: Cloud | null = cloudData ? cloudData.toCloud() : null;

                if (!cloud) {
                    Log.info("Recovery required: Cloud missing from cache.");
                    this.triggerRecovery().to(this.startFuture);
                    return;
                }

                let isCacheMissingDescriptors = false;
                for (const sid of cloud.data) {
                    if (!this.servers.getFuture(sid).getNow()) {
                        isCacheMissingDescriptors = true;
                        break;
                    }
                }

                if (isCacheMissingDescriptors) {
                    Log.info("Recovery required: ServerDescriptors missing.");
                    this.triggerRecovery().to(this.startFuture);
                    return;
                }

                this.makeFirstConnection();
                this.startFuture.tryDone();
            } catch (e: any) {
                Log.error("Fatal error during connection to cloud", e);
                this.startFuture.tryError(e);
            }
        }
    }

    private makeConnectionReg(): ConnectionRegistration[] {
        if (this.connectionRegistrations.size === 0) {
            const uris: URI[] = this.state.getRegistrationUri();
            uris.slice(0, 3).forEach((uri: URI) => {
                const reg = new ConnectionRegistration(this, uri);
                this.connectionRegistrations.add(reg);
            });
        }
        return [...this.connectionRegistrations];
    }

    public makeFirstConnection(): void {
        if (this.destroyer.isDestroyed()) return;
        const uid: UUID | null = this.getUid();
        if (!uid) return;

        this.getCloud(uid).to((cloud: Cloud) => {
            if (!cloud || !cloud.data.length) {
                this.triggerRecovery();
                return;
            }
            const orderedSids: number[] = this.priorityManager.getOrderedSids(uid, cloud);
            for (const sid of orderedSids) {
                this.getServer(sid).to((descriptor: ServerDescriptor | null) => {
                    if (!descriptor) return;
                    const conn: ConnectionWork = this.getConnection(descriptor);
                    if (sid === orderedSids[0]) {
                        conn.connectFuture.to(() => this.startFuture.tryDone());
                    }
                }).onError(() => {
                    this.priorityManager.demote(uid, sid);
                    if (sid === orderedSids[0]) this.makeFirstConnection();
                });
            }
        });
    }

    public triggerRecovery(): AFuture {
        if (this.isRecoveryInProgress.value) return this.recoveryFuture;
        this.isRecoveryInProgress.value = true;
        Log.info("Starting recovery process...");

        const regs: ConnectionRegistration[] = this.makeConnectionReg();
        const uid: UUID | null = this.getUid();
        const cloudData = uid ? this.state.getCloud(uid) : null;
        const cloud: Cloud | null = cloudData ? cloudData.toCloud() : null;
        let aaa = regs.map((c: ConnectionRegistration) => c.resolveCloudPublic(cloud));
        const recoveryFutureLocal: AFuture = AFuture.any(...aaa);
        recoveryFutureLocal.to(() => {
            Log.info("Recovery successful.");
            this.isRecoveryInProgress.value = false;
            this.recoveryFuture.tryDone();
        }).onError((e: Error) => {
            Log.error("Recovery attempt failed.", e);
            RU.schedule(AetherCloudClient.RECOVERY_RETRY_DELAY_MS, () => { this.isRecoveryInProgress.value = false; });
        });
        return recoveryFutureLocal;
    }

    public getConnection(serverDescriptor: ServerDescriptor): ConnectionWork {
        if (!serverDescriptor) throw new ClientApiException("Descriptor is null");
        const sid: number = serverDescriptor.id;
        this.putServerDescriptor(serverDescriptor);

        let conn = this.connections.get(sid);
        if (!conn) {
            conn = new ConnectionWork(this, serverDescriptor);
            conn.stateListeners.add((isWritable: boolean) => {
                if (!isWritable) {
                    const uid: UUID | null = this.getUid();
                    if (uid) {
                        Log.info("Connection lost. Demoting SID.", { sid });
                        this.priorityManager.demote(uid, sid);
                        this.makeFirstConnection();
                    }
                }
            });
            this.connections.set(sid, conn);
            this.destroyer.add(conn);
        }
        return conn;
    }

    public getCloud(uid: UUID): ARFuture<Cloud> {
        const r = this.state.getCloud(uid);
        if (r) return ARFuture.of(r.toCloud());

        const res = ARFuture.make<Cloud>();
        this.clouds.getFuture(uid).to((v: ClientCloud) => {
            if (v) res.done(v.toCloud());
        }).onError((e: Error) => {
            Log.error("timeout get cloud", { uid });
            res.error(e);
        });
        return res;
    }

    public getServer(id: number): ARFuture<ServerDescriptor> {
        const res: ARFuture<ServerDescriptor> = this.servers.getFuture(id);
        res.timeoutMs(7, () => Log.warn("Timeout waiting for server description", { id }));
        return res;
    }

    public putServerDescriptor(s: ServerDescriptor): void {
        this.servers.put(s.id, s);
        this.state.getServerInfo(s.id).setDescriptor(s);
    }

    /**
     * Updates the cloud configuration for a specific UID.
     * @param uid The client UUID.
     * @param cloud The cloud configuration.
     */
    public setCloud(uid: UUID, cloud: Cloud): void {
        this.clouds.put(uid, new ClientCloud(uid, cloud));
    }

    /**
     * Retrieves the current client alias from state.
     * @returns The alias UUID or null.
     */
    public getAlias(): UUID | null {
        return this.state.getAlias();
    }


    public getUid(): UUID | null { return this.state.getUid(); }

    public getMasterKey(): AKey.Symmetric {
        const key: AKey | null = this.state.getMasterKey();
        if (key) return key.asSymmetric();
        const libName: string = this.state.getCryptoLib().toString();
        const newKey: AKey.Symmetric = CryptoProviderFactory.getProvider(libName).createSymmetricKey();
        this.state.setMasterKey(newKey);
        return newKey;
    }

    public getCryptoEngineForServer(serverId: number): CryptoEngine {
        const k: AKey.Symmetric = this.getMasterKey();
        const kk: PairSymKeys = k.getCryptoProvider().createKeyForServer(k, serverId);
        return CryptoEngine.of(kk.clientKey.toCryptoEngine(), kk.serverKey.toCryptoEngine());
    }

    public getPingTime(): number { return this.state.getPingDuration().getNow() ?? 1000; }

    public getMessageNode(uid: UUID, strategy: MessageEventListener = MessageEventListenerDefault): MessageNode {
        const key: string = uid.toString();
        let node = this.messageNodeMap.get(key);
        if (!node) {
            node = new MessageNode(this, uid, strategy);
            this.messageNodeMap.set(key, node);
            this.onClientStreamCreated.fire(node);
        }
        return node;
    }

    public getClientApi(uid: UUID, c: AConsumer<ServerApiByUid>): void {
        this.clientTasks.add(new ClientTask(uid, c));
        this.flush();
    }

    public getAuthApi(t: AConsumer<AuthorizedApiRemote>): void {
        if (!this.destroyer.isDestroyed()) {
            this.authTasks.add(t);
        }
    }

    public flush(): void {
        if (this.connections.size === 0 && this.getUid()) {
            const cloud = this.state.getCloud(this.getUid()!);
            if (cloud) this.makeFirstConnection();
        }
        this.connections.forEach((c: ConnectionWork) => c.flush());
    }

    private startScheduledTask(): void {
        RU.scheduleAtFixedRate(this.destroyer, 3, "MILLISECONDS", () => this.flush());
    }

    public createAccessGroupWithOwner(owner: UUID, ...uids: UUID[]): ARFuture<AccessGroupI> {
        const res = ARFuture.make<AccessGroupI>();
        this.getAuthApi((c: AuthorizedApiRemote) => {
            c.createAccessGroup(owner, uids).to((id: bigint) => {
                if (!id) return res.error(new Error("Null ID"));
                const dto = new AccessGroup(owner, id, uids);
                this.accessGroups.put(id, dto);
                res.done(new AccessGroupImpl(this, dto));
            });
        });
        return res;
    }

    public forceUpdateStateFromCache(): AFuture {
        const res = AFuture.make();
        const uid: UUID | null = this.getUid();
        if (!uid) return AFuture.ofThrow(new Error("Not registered"));

        this.getCloud(uid).to((cloud: Cloud) => {
            this.state.setCloud(uid, new ClientCloud(uid, cloud));
            const futures: ARFuture<ServerDescriptor>[] = cloud.data.map((sid: number) => this.getServer(sid));
            ARFuture.all(futures).to(() => {
                cloud.data.forEach((sid: number) => {
                    const d: ServerDescriptor | null = this.servers.getFuture(sid).getNow();
                    if (d) this.state.getServerInfo(sid).setDescriptor(d);
                });
                res.done();
            }).onError((e: Error) => res.error(e));
        }).onError((e: Error) => res.error(e));
        return res;
    }

    public confirmRegistration(regResp: FinishResult): void {
        if (this.regStatus.value === RegStatus.CONFIRM) {
            Log.info("Already registered");
            return;
        }
        this.regStatus.value = RegStatus.CONFIRM;

        this.clouds.put(regResp.getUid(), new ClientCloud(regResp.getUid(), regResp.getCloud()!));
        this.state.setUid(regResp.getUid());
        this.state.setAlias(regResp.getAlias());

        const cloud: Cloud | null = regResp.getCloud();
        if (cloud && cloud.data.length > 0) {
            cloud.data.forEach((sid: number) => this.getServer(sid).to((d: ServerDescriptor | null) => {
                if (d) this.getConnection(d);
            }));
        };

        this.onMessage.fire(regResp.getUid(), new Uint8Array());
        this.startFuture.tryDone();
    }

    public verifySign(signedKey: SignedKey): boolean {
        return CryptoUtils.verifySignInternal(signedKey, this.state.getRootSigners());
    }

    public sendMessage(uid: UUID, data: Uint8Array): AFuture {
        return this.getMessageNode(uid, MessageEventListenerDefault).send(data);
    }

    public destroy(force: boolean): AFuture {
        return this.destroyer.destroy(force);
    }
}
export * from './aether_client_state';
export * from './aether_client_message';
export * from './aether_fastmeta';
export * from './aether_astring';
export * from './aether_types';
export * from './aether_future';
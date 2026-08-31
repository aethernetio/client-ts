/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export { MessageNode, MessageEventListener } from "./aether_client_message";
import { ClientState, ClientStateInMemory } from "./aether_client_state";
import { ClientStateInLocalStorage } from "./aether_client_state_localstorage";
import {
    AKey,
    CryptoEngine,
    CryptoProviderFactory,
    SignedKey,
    PairSymKeys,
} from "./aether_crypto";
import { ConnectionWork } from "./aether_client_connection_work";
import { ConnectionRegistration } from "./aether_client_connection_reg";
import { LNode, Log } from "./aether_logging";
import {
    AConsumer,
    ClientApiException,
    ClientStartException,
    Destroyable,
    URI,
    UUID,
} from "./aether_types";
import { Destroyer, RU, Queue, StandardUUIDs } from "./aether_utils";
import {
    AFuture,
    ARFuture,
    EventBiConsumer,

    EventConsumer,
    EventConsumerWithQueue,

} from "./aether_future";
import {
    Cloud,
    CloudConfig,
    AppliedConfig,
    FinishResult,
    ServerDescriptor,
    AccessGroup,
    AuthorizedApiRemote,
    ServerApiByUid,

    ServerApiByUidClient,
    ServerDescriptorWithGeo,

    AccessCheckPair,
    CryptoLib,

    IpInfo,
    WebRtcSession,

} from "./aether_api";


import {
    BMap,
    CustomHashMap,
    CustomHashSet,
    RCol,
} from "./aether_rcollection";

import {
    ClientCloud,
    CloudPriorityManager,
} from "./aether_client_cloud_priority";
import {
    MessageEventListener,
    MessageEventListenerDefault,
    MessageNode,
} from "./aether_client_message";
import { CryptoUtils } from "./aether_crypto_utils";
import { FastMetaApi, MetaContext, RemoteApi } from "./aether_fastmeta";
import { time, info, error, clear, warn } from "console";
import { get } from "http";
import { connect } from "http2";
import { add } from "libsodium-wrappers";
import { send } from "process";
import { aetherApi } from "./aether_client";

export enum RegStatus {
    NO,
    BEGIN,
    CONFIRM,
}

export interface AccessGroupI {
    id: UUID;
    owner: UUID;
    data: Set<UUID>;
    contains(uuid: UUID): ARFuture<boolean>;
}

export class AccessGroupImpl implements AccessGroupI {
    public id: UUID;
    public owner: UUID;
    public data: Set<UUID>;

    constructor(group: AccessGroup) {
        this.id = group.id;
        this.owner = group.owner;

        this.data =
            new CustomHashSet<UUID>(
                group.data,
            );

    }

    contains(uuid: UUID): ARFuture<boolean> {
        return ARFuture.of(this.data.has(uuid));
    }
}

export class AetherCloudClient implements Destroyable {
    private static readonly RECOVERY_RETRY_DELAY_MS = 10000;
    public readonly startFuture = AFuture.make();

    public readonly destroyer =
        new Destroyer("AetherCloudClient");

    private startScheduledTaskStarted = false;

    public readonly isRecoveryInProgress = { value: false };
    private isConnecting = false;
    public readonly recoveryFuture = AFuture.make();
    public readonly logClientContext: LNode;

    private readonly connections = new Map<number, ConnectionWork>();
    private readonly regStatus = { value: RegStatus.NO };
    public readonly servers: BMap<number, ServerDescriptor>;
    public readonly clouds: BMap<UUID, ClientCloud>;
    public readonly clientGroups: BMap<UUID, Set<UUID>>;
    public readonly accessGroups: BMap<UUID, AccessGroup | null>;
    public readonly allAccessedClients: BMap<UUID, Set<UUID>>;
    public readonly accessCheckCache: BMap<AccessCheckPair, boolean>;
    getParent(): UUID {
        return this.state.getParentUid();
    }

public readonly messageNodeMap =
        new CustomHashMap<UUID, MessageNode>();

    private webRtcMessageNode: MessageNode | null = null;
    public readonly onNewChild = new EventConsumer<UUID>();


    public readonly onClientStreamCreated =
        new EventConsumerWithQueue<MessageNode>();



    public readonly onMessage =
        new EventBiConsumer<UUID, Uint8Array>(
            () => {
                this.onMessageMethod(
                    (
                        uid: UUID,
                        data: Uint8Array,
                    ) => {
                        this.onMessage.fire(
                            uid,
                            data,
                        );
                    },
                );
            },
        );


    public readonly onNewChildApi = new EventBiConsumer<UUID, ServerApiByUid>();


public readonly accessOperationsAdd =
        new CustomHashMap<
            UUID,
            CustomHashMap<UUID, ARFuture<boolean>>
        >();
    public readonly accessOperationsRemove =
        new CustomHashMap<
            UUID,
            CustomHashMap<UUID, ARFuture<boolean>>
        >();


    public readonly appliedConfigsRequests = new BMap<AppliedConfig, boolean>(
        "AppliedConfigsRequests",
        5000,
        10000,
    );
    private readonly anyConnection = ARFuture.make<
        ConnectionWork | ConnectionRegistration
    >();

    public readonly authTasks = new Queue<AConsumer<AuthorizedApiRemote>>();

    public readonly priorityManager = new CloudPriorityManager();
    public readonly state: ClientState;
    private readonly connectionRegistrations =
        new Set<ConnectionRegistration>();
    private beginConnect = false;
    private name: string | null;

    private readonly loginApiVersion: number;

    private readonly lastSecond: number;


    public getCryptoLib(): CryptoLib {
        return this.state.getCryptoLib();
    }



    constructor(
        state?: ClientState,
        name?: string | null,
        loginApiVersion: number = 0,
    ) {

        if (!state) {
            if (typeof localStorage !== "undefined") {
                state = new ClientStateInLocalStorage(
                    StandardUUIDs.ANONYMOUS_UID,
                    ["tcp://registration.aethernet.io:9010"],
                );
            } else {
                state = new ClientStateInMemory(StandardUUIDs.ANONYMOUS_UID, [
                    "tcp://registration.aethernet.io:9010",
                ]);
            }
        }


        if (loginApiVersion < 0) {
            throw new Error(
                `loginApiVersion must be non-negative: ${loginApiVersion}`,
            );
        }


        this.state = state;
        this.name = name ?? null;

        this.loginApiVersion = loginApiVersion;

        this.lastSecond = Math.floor(RU.time() / 1000);
        this.logClientContext = Log.of({
            component: "Client",
            clientName: name,
        });

        this.clouds = RCol.bMap<UUID, ClientCloud>(30000, "CloudCache");
        this.servers = RCol.bMap<number, ServerDescriptor>(
            30000,
            "ServerCache",
        );
        this.clientGroups = RCol.bMap<UUID, Set<UUID>>(
            30000,
            "ClientGroupsCache",
        );
        this.accessGroups = RCol.bMap<UUID, AccessGroup | null>(
            30000,
            "AccessGroupsCache",
        );
        this.allAccessedClients = RCol.bMap<UUID, Set<UUID>>(
            30000,
            "AllAccessedClientsCache",
        );
        this.accessCheckCache = RCol.bMap<AccessCheckPair, boolean>(
            30000,
            "AccessCheckCache",
        );

        this.destroyer.add((_: boolean) => this.closeConnections());
        this.populateCachesFromState();

        this.onNewChild.add((u: UUID) => {
            if (this.onNewChildApi.hasListener()) {
                //                    TODO Я удалил очередь задач. Нужно сделать прямой выбор ConnectionWork
                //                    this.getClientApi(u, (api: ServerApiByUid) => this.onNewChildApi.fire(u, api));
            }
        });

        this.startFuture.toRunnable(() => this.startScheduledTask());
        this.startFuture.toRunnable(() => {
            this.forceUpdateStateFromCache().toRunnable(() =>
                this.state.saveState(),
            );
        });
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
            this.startFuture.tryError(
                new Error("is destroyed"),
            );
            return;
        }

        if (step === 0) {
            if (!this.startFuture.isDone()) {
                this.startFuture.tryError(
                    new ClientStartException(
                        "All connection attempts failed.",
                    ),
                );
            }
            return;
        }

        if (!this.getUid()) {
            if (this.regStatus.value === RegStatus.NO) {
                this.regStatus.value = RegStatus.BEGIN;

                const regs: ConnectionRegistration[] =
                    this.makeConnectionReg();
                const timeout: number =
                    this.state
                        .getTimeoutForConnectToRegistrationServer();


                const anyFuture: AFuture = AFuture.any(
                    ...regs.map(
                        (
                            registration:
                                ConnectionRegistration,
                        ) =>
                            registration.registration(),
                    ),
                );

                let registrationTimedOut = false;

                anyFuture.toRunnable(
                    () => this.startScheduledTask(),
                );

                anyFuture.onError(
                    (error: Error) => {
                        if (!registrationTimedOut) {
                            this.startFuture.tryError(
                                error,
                            );
                        }
                    },
                );

                anyFuture.timeoutMs(
                    timeout,
                    () => {
                        registrationTimedOut = true;

                        if (
                            this.regStatus.value
                            === RegStatus.BEGIN
                        ) {
                            this.regStatus.value =
                                RegStatus.NO;
                        }

                        Log.warn(
                            "Failed to connect to registration server",
                            {
                                uris:
                                    this.state
                                        .getRegistrationUri(),
                            },
                        );

                        RU.schedule(
                            this.destroyer,
                            100,
                            () =>
                                this.connectStep(step),
                        );
                    },
                    this.destroyer,
                );


            }

            return;
        }

        try {
            const uid: UUID = this.getUid()!;
            const cloudData =
                this.state.getCloud(uid);
            const cloud: Cloud | null =
                cloudData
                    ? cloudData.toCloud()
                    : null;

            if (cloud === null) {
                Log.info(
                    "Recovery required: Cloud missing from cache.",
                );
                this.triggerRecovery()
                    .pipeTo(this.startFuture);
                return;
            }

            let hasServerDescriptor = false;

            if (cloud.data.length > 0) {
                for (const sid of cloud.data) {
                    if (
                        this.servers
                            .getFuture(sid)
                            .getNow() !== null
                    ) {
                        hasServerDescriptor = true;
                        break;
                    }
                }
            }

            const isCacheMissingDescriptors =
                cloud.data.length > 0
                && !hasServerDescriptor;

            if (isCacheMissingDescriptors) {
                Log.info(
                    "Recovery required: ServerDescriptors missing.",
                );
                this.triggerRecovery()
                    .pipeTo(this.startFuture);
                return;
            }

            this.makeFirstConnection();
            this.startFuture.tryDone();
        } catch (error) {
            Log.error(
                "Fatal error during connection to cloud",
                error as Error,
            );
            this.startFuture.tryError(
                error as Error,
            );
        }
    }

    private makeConnectionReg(): ConnectionRegistration[] {
        if (this.connectionRegistrations.size === 0) {
            const uris: URI[] = this.state.getRegistrationUri();

            uris.slice(0, 3).forEach((uri: URI) => {
                const reg = new ConnectionRegistration(this, uri);
                this.anyConnection.tryDone(reg);
                this.connectionRegistrations.add(reg);
            });
        }
        return [...this.connectionRegistrations];
    }


    public makeFirstConnection(): void {
        if (this.destroyer.isDestroyed()) {
            return;
        }

        const uid = this.getUid();
        if (!uid) {
            return;
        }

        this.getCloud(uid).toConsumer((cloud: Cloud) => {
            if (
                !cloud
                || cloud.data.length === 0
            ) {
                this.triggerRecovery();
                return;
            }

            const orderedSids =
                this.priorityManager.getOrderedSids(
                    uid,
                    cloud,
                );

            for (const sid of orderedSids) {
                this.getServer(sid)
                    .toConsumer(
                        (
                            descriptor:
                                ServerDescriptor
                                | null,
                        ) => {
                            if (!descriptor) {
                                return;
                            }

                            this.getConnection(descriptor);

                            if (
                                sid
                                === orderedSids[0]
                            ) {
                                this.startFuture.tryDone();
                            }
                        },
                    )
                    .onError(() => {
                        this.priorityManager.demote(
                            uid,
                            sid,
                        );

                        if (
                            sid
                            === orderedSids[0]
                        ) {
                            this.makeFirstConnection();
                        }
                    });
            }
        });
    }


    public triggerRecovery(): AFuture {
        if (this.destroyer.isDestroyed()) return AFuture.completed();
        if (this.isRecoveryInProgress.value) return this.recoveryFuture;
        this.isRecoveryInProgress.value = true;
        Log.info("Starting recovery process...");

        const regs: ConnectionRegistration[] = this.makeConnectionReg();
        const uid: UUID | null = this.getUid();
        const cloudData = uid ? this.state.getCloud(uid) : null;
        const cloud: Cloud | null = cloudData ? cloudData.toCloud() : null;
        let recoveryFutureLocal: AFuture;
        const uidLocal = uid;
        if (cloud != null) {
            // Есть облако в кэше - пытаемся разрешить сервера
            recoveryFutureLocal = AFuture.any(
                ...regs.map((c) => c.resolveCloudPublic(cloud)),
            );
        } else {
            // Нет облака - выполняем полную регистрацию заново
            Log.info(
                "Cloud missing from cache, performing full re-registration.",
            );
            if (!uidLocal) {
                recoveryFutureLocal = AFuture.ofThrow(
                    new Error("No UID, cannot register"),
                );
            } else {
                // Сбрасываем статус регистрации, чтобы confirmRegistration могла выполниться
                this.regStatus.value = RegStatus.BEGIN;
                const regDone = AFuture.any(
                    ...regs.map((c) => c.registration()),
                );
                recoveryFutureLocal = regDone.pipeTo(
                    this.clouds.getFuture(uidLocal).toFuture(),
                );
            }
        }
        recoveryFutureLocal
            .toRunnable(() => {
                Log.info("Recovery successful.");
                this.isRecoveryInProgress.value = false;
                this.recoveryFuture.tryDone();
            })
            .onError((e: Error) => {
                Log.error("Recovery attempt failed.", e);
                RU.schedule(
                    this.destroyer,
                    AetherCloudClient.RECOVERY_RETRY_DELAY_MS,
                    () => {
                        this.isRecoveryInProgress.value = false;
                    },
                );
            });
        return recoveryFutureLocal;
    }

    public getConnection(
        serverDescriptor: ServerDescriptor,
    ): ConnectionWork {
        if (!serverDescriptor) {
            throw new ClientApiException(
                "Cannot get connection for null ServerDescriptor.",
            );
        }

        const sid = serverDescriptor.getId();
        this.putServerDescriptor(serverDescriptor);

        let connection = this.connections.get(sid);
        if (connection) {
            return connection;
        }

        connection = new ConnectionWork(
            this,
            serverDescriptor,
        );

        connection.stateListeners.add(
            (isWritable: boolean) => {
                if (isWritable) {
                    return;
                }

                const uid = this.getUid();
                if (!uid) {
                    return;
                }

                Log.info(
                    "Connection to server failed or lost. Demoting SID and attempting failover.",
                    { sid },
                );

                this.priorityManager.demote(
                    uid,
                    sid,
                );
                this.makeFirstConnection();
            },
        );

        this.connections.set(
            sid,
            connection,
        );
        this.anyConnection.tryDone(connection);

        return connection;
    }



    /**
     * Ensures that connections for all supplied server descriptors are created
     * before returning.
     *
     * ConnectionWork starts its transport connection from the constructor, so
     * creating the whole set first allows independent WebSocket handshakes to
     * proceed concurrently instead of being serialized by caller-side work.
     */

    public connectServers(
        serverDescriptors: ServerDescriptor[],
    ): ConnectionWork[] {
        const connections: ConnectionWork[] = [];

        for (const serverDescriptor of serverDescriptors) {
            connections.push(
                this.getConnection(serverDescriptor),
            );
        }

        /*
         * getConnection() caches every descriptor in ClientState.
         * Persist the whole batch only after every transport has
         * already been started so storage I/O cannot serialize
         * WebSocket startup.
         */
        if (
            serverDescriptors.length > 0
            && this.state
        ) {
            this.state.saveState();
        }

        return connections;
    }

    /**
     * Returns server descriptors restored from persistent client state.
     *
     * Applications may use these descriptors to speculatively start
     * transports while refreshing the authoritative server list.
     */
    public getKnownServerDescriptors(): ServerDescriptor[] {
        const descriptors: ServerDescriptor[] = [];

        for (
            const serverInfo
            of this.state.getServerInfoAll()
        ) {
            const descriptor =
                serverInfo.getDescriptor();

            if (descriptor) {
                descriptors.push(descriptor);
            }
        }

        return descriptors;
    }




    public getAnyConnection(): ARFuture<
        ConnectionWork | ConnectionRegistration
    > {
        return this.anyConnection;
    }

    public getCloud(uid: UUID): ARFuture<Cloud> {
        const r = this.state.getCloud(uid);
        if (r) return ARFuture.of(r.toCloud());

        const res = ARFuture.make<Cloud>();
        this.clouds
            .getFuture(uid)
            .to((v: ClientCloud) => {
                if (v) res.done(v.toCloud());
            })
            .onError((e: Error) => {
                Log.error("timeout get cloud", { uid });
                res.error(e);
            });
        return res;
    }

    public getServer(id: number): ARFuture<ServerDescriptor> {
        const res: ARFuture<ServerDescriptor> = this.servers.getFuture(id);
        res.timeoutMs(
            7000,
            () => Log.warn("Timeout waiting for server description", { id }),
            this.destroyer,
        );
        return res;
    }

    public getServerDescriptorForUid(
        uid: UUID,
        t: AConsumer<ServerDescriptor>,
    ): void {
        if (this.destroyer.isDestroyed()) return;
        if (uid.equals(this.getUid())) {
            const cloud = this.state.getCloud(uid);
            if (!cloud) return;
            for (const pp of cloud.getOrderedSids()) {
                this.servers.getFuture(pp).to((v: ServerDescriptor) => t(v));
            }
            return;
        }
        this.getCloud(uid).to((p: Cloud) => {
            for (const pp of p.data) {
                this.servers.getFuture(pp).to((v: ServerDescriptor) => t(v));
            }
        });
    }

    public getClientGroups(uid: UUID): ARFuture<Set<UUID>> {
        return this.clientGroups.getFuture(uid);
    }

    public getAllAccessedClients(uid: UUID): ARFuture<Set<UUID>> {
        return this.allAccessedClients.getFuture(uid);
    }

    public checkAccess(uid1: UUID, uid2: UUID): ARFuture<boolean> {
        return this.accessCheckCache.getFuture(new AccessCheckPair(uid1, uid2));
    }
    public createAccessGroup(...uids: UUID[]): ARFuture<AccessGroupI> {
        return this.createAccessGroupWithOwner(this.getUid()!, ...uids);
    }

    public getGroup(groupId: UUID): ARFuture<AccessGroup> {
        return this.accessGroups.getFuture(groupId) as ARFuture<AccessGroup>;
    }

    public getClientState(): ClientState {
        return this.state;
    }

    public getName(): string | null {
        return this.name;
    }


    public getLoginApiVersion(): number {
        return this.loginApiVersion;
    }


    public setName(name: string): void {
        this.name = name;
    }

    public getAuthApiFuture(): ARFuture<AuthorizedApiRemote> {
        const result =
            ARFuture.make<AuthorizedApiRemote>();

        if (this.destroyer.isDestroyed()) {
            result.cancel();
            return result;
        }

        this.getAuthApi(
            (api: AuthorizedApiRemote) =>
                result.tryDone(api),
        );

        result.timeoutError(
            8,
            "Timeout waiting for AuthorizedApi.",
        );

        return result;
    }
    public getAuthApi1<T>(
        t: (api: AuthorizedApiRemote) => ARFuture<T>,
    ): ARFuture<T> {
        if (this.destroyer.isDestroyed())
            return ARFuture.ofThrow(new Error("Client is destroyed"));
        const res = ARFuture.make<T>();
        this.getAuthApiFuture().mapRFuture(t).to(res);
        return res;
    }

    public getConnections(): ConnectionWork[] {
        return Array.from(this.connections.values());
    }

    public isRegistered(): boolean {
        return this.state.getUid() != null;
    }

    public isConnected(): boolean {
        return this.getUid() != null;
    }

    public openStreamToClientDetails(
        uid: UUID,
        strategy: MessageEventListener,
    ): MessageNode {
        return this.getMessageNode(uid, strategy);
    }

    public onNewChildren(consumer: AConsumer<UUID>): void {
        this.onNewChild.add(consumer);
    }

    // onMessage is a public field (EventBiConsumer), not a method in TS

    public onClientStream(consumer: AConsumer<MessageNode>): void {
        this.onClientStreamCreated.add(consumer);
    }


    public onMessageMethod(
        consumer: (uid: UUID, data: Uint8Array) => void,
    ): void {
        this.onClientStream((messageNode: MessageNode) => {
            messageNode.bufferIn.add((data: Uint8Array) => {
                consumer(
                    messageNode.getConsumerUUID(),
                    data,
                );
            });
        });
    }


    public putServerDescriptor(s: ServerDescriptor): void {
        this.servers.put(s.id, s);
        this.state.getServerInfo(s.id).setDescriptor(s);
    }


    public getServers(): ARFuture<ServerDescriptorWithGeo[]> {
        return this.getAuthApi1(
            (api: AuthorizedApiRemote) => api.getServers(),
        );
    }




    public measureServerPingMs(sid: number): ARFuture<number> {
        const connection = this.connections.get(sid);
        if (!connection || !connection.isWritable()) {
            return ARFuture.ofThrow(
                new Error(
                    `No writable connection for SID ${sid}.`,
                ),
            );
        }

        return connection.measurePingMs();
    }




    public getMyIp(): ARFuture<IpInfo> {
        const result = ARFuture.make<IpInfo>();
        this.getMyIp0(result);
        return result;
    }

    private requestMyIp(
        connection:
            ConnectionWork
            | ConnectionRegistration,
        result: ARFuture<IpInfo>,
    ): void {
        if (result.isDone()) {
            return;
        }

        const api = connection.getRootApi();

        if (
            !api
            || !connection.isWritable()
        ) {
            this.retryGetMyIp(result);
            return;
        }

        api.getMyIp()
            .to((ipInfo: IpInfo) => {
                result.tryDone(ipInfo);
            })
            .onError(() => {
                if (!result.isDone()) {
                    this.retryGetMyIp(result);
                }
            });
    }

    private getMyIp0(result: ARFuture<IpInfo>): void {
        if (
            result.isDone()
            || this.destroyer.isDestroyed()
        ) {
            return;
        }

        const connections =
            Array.from(
                this.connections.values(),
            );

        for (const connection of connections) {
            if (connection.isWritable()) {
                this.requestMyIp(
                    connection,
                    result,
                );
                return;
            }
        }

        const pendingConnections =
            connections.filter(
                connection =>
                    !connection
                        .connectFuture
                        .isFinalStatus(),
            );


        if (pendingConnections.length > 0) {
            const firstWritable =
                AFuture.make();

            let failedConnections = 0;

            for (
                const connection
                of pendingConnections
            ) {
                connection.connectFuture
                    .toRunnable(() => {
                        firstWritable.tryDone();
                    })
                    .onError(() => {
                        failedConnections++;

                        if (
                            failedConnections
                            === pendingConnections.length
                        ) {
                            firstWritable.tryError(
                                new Error(
                                    "All pending connections failed while waiting for getMyIp."
                                )
                            );
                        }
                    });
            }

            firstWritable
                .toRunnable(() => {
                    if (!result.isDone()) {
                        this.getMyIp0(result);
                    }
                })
                .onError(() => {
                    if (!result.isDone()) {
                        this.retryGetMyIp(result);
                    }
                });

            return;

        }

        this.getAnyConnection()
            .to(
                (
                    connection:
                        ConnectionWork
                        | ConnectionRegistration,
                ) => {
                    if (result.isDone()) {
                        return;
                    }

                    if (connection.isWritable()) {
                        this.requestMyIp(
                            connection,
                            result,
                        );
                        return;
                    }

                    if (
                        !connection
                            .connectFuture
                            .isFinalStatus()
                    ) {
                        connection.connectFuture
                            .toRunnable(() => {
                                if (!result.isDone()) {
                                    this.getMyIp0(result);
                                }
                            })
                            .onError(() => {
                                if (!result.isDone()) {
                                    this.retryGetMyIp(
                                        result,
                                    );
                                }
                            });

                        return;
                    }

                    this.retryGetMyIp(result);
                },
            )
            .onError(() => {
                if (!result.isDone()) {
                    this.retryGetMyIp(result);
                }
            });
    }

    private retryGetMyIp(result: ARFuture<IpInfo>): void {
        if (this.destroyer.isDestroyed()) return;

        RU.schedule(
            this.destroyer,
            500,
            () => {
                if (!result.isDone()) {
                    this.getMyIp0(result);
                }
            },
        );
    }


    public reportAppliedConfig(configs: AppliedConfig[]): void {
        for (const ac of configs) {
            const cc = this.clouds.getNow(ac.getSubjectUid());
            if (cc && ac.getConfigVersion() > cc.getConfirmedConfigVersion()) {
                cc.updateConfirmedConfigVersion(ac.getConfigVersion());
            }
            this.appliedConfigsRequests.put(ac, true);
        }
    }

    public requestCloudConfig(subjectUid: UUID): void {
        const cc = this.clouds.getNow(subjectUid);
        const version = cc ? cc.getConfigVersion() - 1n : -1n;
        this.appliedConfigsRequests.getFuture(
            new AppliedConfig(subjectUid, version),
        );
    }

    /**
     * Updates the cloud configuration for a specific UID.
     * @param uid The client UUID.
     * @param cloud The cloud configuration.
     */

    public setCloud(uid: UUID, cloud: Cloud): void {
        const cc = this.clouds.getNow(uid);
        if (cc) {
            cc.applyCloudConfig(
                new CloudConfig(uid, 0n, cloud),
                this.appliedConfigsRequests,
            );
        } else {
            this.clouds.put(uid, new ClientCloud(uid, cloud));
        }
    }

    /**
     * Retrieves the current client alias from state.
     * @returns The alias UUID or null.
     */
    public getAlias(): UUID | null {
        return this.state.getAlias();
    }

    public getUid(): UUID | null {
        return this.state.getUid();
    }

    public getMasterKey(): AKey.Symmetric {
        const res2 = this.state.getMasterKey();
        if (res2) return CryptoUtils.of(res2).asSymmetric();
        const res = CryptoProviderFactory.getProvider(
            this.getCryptoLib().toString(),
        ).createSymmetricKey();
        this.state.setMasterKey(CryptoUtils.of(res));
        return res;
    }

    public getCryptoEngineForServer(serverId: number): CryptoEngine {
        const k: AKey.Symmetric = this.getMasterKey();
        const kk: PairSymKeys = k
            .getCryptoProvider()
            .createKeyForServer(k, serverId);
        return CryptoEngine.of(
            kk.clientKey.toCryptoEngine(),
            kk.serverKey.toCryptoEngine(),
        );
    }

    public getPingTime(): number {
        return this.state.getPingDuration().getNow() ?? 1000;
    }



    public getMessageNode(
        uid: UUID,
        strategy: MessageEventListener = MessageEventListenerDefault,
    ): MessageNode {
        let node = this.messageNodeMap.get(uid);

        if (!node) {
            node = new MessageNode(
                this,
                uid,
                strategy,
            );
            this.messageNodeMap.set(uid, node);
            this.onClientStreamCreated.fire(node);
        }

        return node;
    }





    public getClientApi(uid: UUID): ARFuture<ServerApiByUid>;
    public getClientApi(
        uid: UUID,
        callback: AConsumer<ServerApiByUid>,
    ): void;
    public getClientApi(
        uid: UUID,
        callback?: AConsumer<ServerApiByUid>,
    ): ARFuture<ServerApiByUid> | void {
        if (callback) {
            this.getAuthApi((api: AuthorizedApiRemote) => {
                callback(
                    api.openClient(
                        uid,
                        () => ServerApiByUidClient.EMPTY,
                        (data: Uint8Array) => data,
                        "byClient",
                        uid,
                    ),
                );
            });
            return;
        }

        const result = ARFuture.make<ServerApiByUid>();
        this.getClientApi(
            uid,
            (api: ServerApiByUid) => result.tryDone(api),
        );
        result.timeoutError(
            8,
            "Timeout waiting for ServerApiByUid.",
        );
        return result;
    }



    public getAuthApi(t: AConsumer<AuthorizedApiRemote>): void {
        if (!this.destroyer.isDestroyed()) {
            this.authTasks.add(t);
        }
    }

    public flush(): void {
        if (this.destroyer.isDestroyed()) return;
        if (this.connections.size === 0 && this.getUid()) {
            const cloud = this.state.getCloud(this.getUid()!);
            if (cloud) this.makeFirstConnection();
        }
        this.clouds.checkTimeouts();
        this.servers.checkTimeouts();
        this.clientGroups.checkTimeouts();
        this.accessGroups.checkTimeouts();
        this.allAccessedClients.checkTimeouts();
        this.accessCheckCache.checkTimeouts();
        this.connections.forEach((c: ConnectionWork) =>
            c.flushBackgroundRequests(),
        );
    }

    private startScheduledTask(): void {
        if (this.startScheduledTaskStarted) {
            return;
        }

        this.startScheduledTaskStarted = true;

        RU.scheduleAtFixedRate(
            this.destroyer,
            3,
            "MILLISECONDS",
            () => this.flush(),
        );
    }

    public createAccessGroupWithOwner(
        owner: UUID,
        ...uids: UUID[]
    ): ARFuture<AccessGroupI> {
        return this.getAuthApi1((c) => c.createAccessGroup(owner, uids)).map(

            (id) =>
                new AccessGroupImpl(
                    new AccessGroup(id, RU.timeSeconds(), owner, uids),
                ),

        );
    }

    public forceUpdateStateFromCache(): AFuture {
        const res = AFuture.make();
        const uid: UUID | null = this.getUid();
        if (!uid) return AFuture.ofThrow(new Error("Not registered"));

        this.getCloud(uid)
            .to((cloud: Cloud) => {
                this.state.setCloud(uid, new ClientCloud(uid, cloud));
                const futures: ARFuture<ServerDescriptor>[] = cloud.data.map(
                    (sid: number) => this.getServer(sid),
                );
                ARFuture.all(futures)
                    .to(() => {
                        cloud.data.forEach((sid: number) => {
                            const d: ServerDescriptor | null = this.servers
                                .getFuture(sid)
                                .getNow();
                            if (d)
                                this.state.getServerInfo(sid).setDescriptor(d);
                        });
                        res.done();
                    })
                    .onError((e: Error) => res.error(e));
            })
            .onError((e: Error) => res.error(e));
        return res;
    }


    public confirmRegistration(regResp: FinishResult): void {
        if (this.regStatus.value !== RegStatus.BEGIN) {
            Log.info("Already registration");
            return;
        }
        this.regStatus.value = RegStatus.CONFIRM;

        const uid = regResp.getUid();
        const cloud = regResp.getCloud();

        Log.info("confirm registration", { uid });

        this.clouds.put(
            uid,
            new ClientCloud(uid, cloud),
        );
        this.state.setCloud(
            uid,
            new ClientCloud(uid, cloud),
        );
        this.state.setUid(uid);
        this.state.setAlias(regResp.getAlias());

        if (cloud && cloud.data.length > 0) {
            for (const serverId of cloud.data) {
                this.getServer(serverId)
                    .to((descriptor: ServerDescriptor) => {
                        if (descriptor) {
                            this.getConnection(descriptor);
                        }
                    });
            }
        }

        this.startFuture.tryDone();
    }


    public verifySign(signedKey: SignedKey): boolean {
        return CryptoUtils.verifySignInternal(
            signedKey,
            this.state.getRootSigners(),
        );
    }

    public sendMessage(uid: UUID, data: Uint8Array): AFuture {
        return this.getMessageNode(uid, MessageEventListenerDefault).send(data);
    }

    public tryAcquireWebRtcMessageNode(node: MessageNode): boolean {
        if (this.destroyer.isDestroyed()) return false;
        if (this.webRtcMessageNode && this.webRtcMessageNode !== node) return false;
        this.webRtcMessageNode = node;
        return true;
    }

    public releaseWebRtcMessageNode(node: MessageNode): void {
        if (this.webRtcMessageNode === node) this.webRtcMessageNode = null;
    }

    public requestWebRtcSession(uid: UUID): ARFuture<WebRtcSession> {
        const result = ARFuture.make<WebRtcSession>();
        result.timeoutMs(
            5000,
            () => result.tryError(new Error(
                `Timed out requesting WebRTC session for ${uid.toAString()}`,
            )),
            this.destroyer,
        );

        this.getServerDescriptorForUid(uid, (descriptor: ServerDescriptor) => {
            if (result.isFinalStatus()) return;
            try {
                const connection = this.connections.get(descriptor.id)
                    ?? this.getConnection(descriptor);
                const request = connection.authorizedApi.requestWebRtcSession(uid);
                connection.authorizedApi.flush();
                request.to((session: WebRtcSession) => {
                    if (session) result.tryDone(session);
                });
            } catch (error) {
                Log.warn('Failed to request WebRTC session', {
                    error,
                    uid: uid.toAString().toString(),
                    serverId: descriptor.id,
                });
            }
        });
        return result;
    }

    public publishWebRtcSession(session: WebRtcSession): AFuture {
        const result = AFuture.make();
        const uid = this.getUid();
        if (!uid) return result.error(new Error('Client is not registered'));

        this.getCloud(uid)
            .to((cloud: Cloud) => {
                if (!cloud?.data?.length) {
                    result.tryError(new Error('Client cloud is empty'));
                    return;
                }

                const publishes = cloud.data.map((serverId: number) => {
                    const published = AFuture.make();
                    this.getServer(serverId)
                        .to((descriptor: ServerDescriptor) => {
                            try {
                                const connection = this.connections.get(serverId)
                                    ?? this.getConnection(descriptor);
                                connection.authorizedApi.publishWebRtcSession(session);
                                connection.authorizedApi.flush();
                                published.tryDone();
                            } catch (error) {
                                published.tryError(error as Error);
                            }
                        })
                        .onError((error: Error) => published.tryError(error));
                    return published;
                });
                AFuture.all(...publishes).pipeTo(result);
            })
            .onError((error: Error) => result.tryError(error));
        return result;
    }


    public getNextPing(): number {
        return 0;
    }

    public static of(state: ClientState): AetherCloudClient {
        return new AetherCloudClient(state);
    }
    private static readonly DEFAULT_REG_URI =
        "wss://dbservice.aethernet.io:9013";

    public static asClient<LT, RT extends RemoteApi>(
        parentUid: UUID,
        name: string,
        localMeta: FastMetaApi<LT, any>,
        remoteMeta: FastMetaApi<any, RT>,
        localApiFactory: (remoteApi: RT) => LT,
    ): AetherCloudClient {
        return AetherCloudClient.asClient2(
            parentUid,
            AetherCloudClient.DEFAULT_REG_URI,
            name,
            localMeta,
            remoteMeta,
            localApiFactory,
        );
    }

    public static asClient2<LT, RT extends RemoteApi>(
        parentUid: UUID,
        regUri: string,
        name: string,
        localMeta: FastMetaApi<LT, any>,
        remoteMeta: FastMetaApi<any, RT>,
        localApiFactory: (remoteApi: RT) => LT,
    ): AetherCloudClient {
        const state = new ClientStateInLocalStorage(
            parentUid,
            [regUri],
            undefined,
            undefined,
            "state-" + name,
        );
        const client = new AetherCloudClient(state, name);
        client.startFuture.toRunnable(() => {
            const node = client.getMessageNode(parentUid);
            node.toApiR(localMeta, (ctx) => {
                const remoteApi = ctx.makeRemote(remoteMeta);
                return localApiFactory(remoteApi);
            });
        });
        return client;
    }

    public static asClient3<LT, RT extends RemoteApi>(
        state: ClientState,
        name: string,
        localMeta: FastMetaApi<LT, any>,
        remoteMeta: FastMetaApi<any, RT>,
        localApiFactory: (remoteApi: RT) => LT,
    ): AetherCloudClient {
        const client = new AetherCloudClient(state, name);
        client.startFuture.toRunnable(() => {
            const node = client.getMessageNode(state.getParentUid());
            node.toApiR(localMeta, (ctx) => {
                const remoteApi = ctx.makeRemote(remoteMeta);
                return localApiFactory(remoteApi);
            });
        });
        return client;
    }

    public static asServer<LT>(
        parentUid: UUID,
        name: string,
        serviceMeta: FastMetaApi<LT, any>,
        localApiFactory: (ctx: MetaContext) => LT,
    ): AetherCloudClient {
        return AetherCloudClient.asServer2(
            parentUid,
            AetherCloudClient.DEFAULT_REG_URI,
            name,
            serviceMeta,
            localApiFactory,
        );
    }

    public static asServer2<LT>(
        parentUid: UUID,
        regUri: string,
        name: string,
        serviceMeta: FastMetaApi<LT, any>,
        localApiFactory: (ctx: MetaContext) => LT,
    ): AetherCloudClient {
        const state = new ClientStateInLocalStorage(
            parentUid,
            [regUri],
            undefined,
            undefined,
            "state-" + name,
        );
        const client = new AetherCloudClient(state, name);
        client.onClientStream((node: MessageNode) => {
            node.toApiR(serviceMeta, localApiFactory);
        });
        return client;
    }

    public static asServer3<LT>(
        state: ClientState,
        name: string,
        serviceMeta: FastMetaApi<LT, any>,
        localApiFactory: (ctx: MetaContext) => LT,
    ): AetherCloudClient {
        const client = new AetherCloudClient(state, name);
        client.onClientStream((node: MessageNode) => {
            node.toApiR(serviceMeta, localApiFactory);
        });
        return client;
    }

    public destroy(force: boolean): AFuture {
        return this.destroyer.destroy(force);
    }
}
export * from "./aether_client_state";
export * from "./aether_client_message";
export * from "./aether_fastmeta";
export * from "./aether_astring";
export * from "./aether_types";
export * from "./aether_future";
export * from "./aether_utils";
export * from "./aether_logging";
export * from "./aether_rcollection";
export * as aetherApi from "./aether_api";
export * from "./aether_crypto";
export * from "./aether_crypto_sodium";
export * from "./aether_client_state_localstorage";
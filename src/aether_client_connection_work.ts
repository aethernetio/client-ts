import { ConnectionBase, getUriFromServerDescriptor } from './aether_client_connection_base';
import { AetherCloudClient } from './aether_client';

import {
    AccessGroup,
    AccessCheckResult,
    AetherCodec,
    AppliedConfig,
    AuthorizedApi,
    AuthorizedApiRemote,
    ClientApiSafe,

    ClientInteractionClientStream,
    ServerApiByUidClient,

    ClientApiUnsafe,
    Cloud,
    CloudConfig,
    LoginApi,
    LoginApiRemote,
    LoginClientStream,
    LoginStream,
    Message,
    ServerDescriptor,
    UUIDAndCloud,
    AccessCheckPair,
} from './aether_api';


import { AtomicLong, ClientStartException, UUID } from './aether_types';
import { AFuture, ARFuture } from './aether_future';
import { Log } from './aether_logging';
import { MetaContextBase, RemoteApiFuture } from './aether_fastmeta';
import { CryptoEngine } from './aether_crypto';
import { RU } from './aether_utils';
import { MessageNode } from './aether_client_message';
import { ClientCloud } from './aether_client_cloud_priority';


import {
    PingAttemptGate,
    PingRttHistory,
} from './aether_client_ping_rtt';



import {
    CustomHashMap,
    CustomHashSet,
} from './aether_rcollection';



/**
 * @class MyClientApiSafe
 * @description Local implementation of the ClientApiSafe interface
 */
export class MyClientApiSafe implements ClientApiSafe {
    private readonly client: AetherCloudClient;
    private readonly connection: ConnectionWork;

    constructor(client: AetherCloudClient, connection: ConnectionWork) {
        this.client = client;
        this.connection = connection;
    }

    /**
     * @method sendAccessGroups
     * @description Handle incoming access groups
     * @param {AccessGroup[]} groups Access groups
     * @returns {AFuture} Completion future
     */
    public sendAccessGroups(
        groups: AccessGroup[],
    ): void {
        Log.debug(
            "Received AccessGroups",
            {count: groups.length},
        );

        for (const group of groups) {
            if (group !== null) {
                this.client.accessGroups.put(
                    group.getId(),
                    group,
                );
            }
        }
    }

    /**
     * @method sendAccessGroupForClient
     * @description Handle access groups for specific client
     * @param {UUID} uid Client UUID
     * @param {bigint[]} groups Group IDs
     * @returns {AFuture} Completion future
     */
    public sendAccessGroupForClient(
        uid: UUID,
        groups: UUID[],
    ): void {
        Log.debug(
            "Received AccessGroups for client",
            {uid},
        );


        this.client.clientGroups.put(
            uid,
            new CustomHashSet<UUID>(
                groups,
            ),
        );

    }

    /**
     * Confirms addition of items to access group and updates cache.
     * Ported from ConnectionWork.java
     */
    public addItemsToAccessGroup(
        id: UUID,
        groups: UUID[],
    ): void {
        Log.debug(
            "Server confirmed ADD items to group",
            {id},
        );


const futures =
            this.client.accessOperationsAdd.get(id);

        if (futures) {
            for (const uid of groups) {
                const future = futures.get(uid);
                if (future) {
                    futures.delete(uid);
                    future.tryDone(true);
                }
            }

            if (futures.size === 0) {
                this.client.accessOperationsAdd.delete(id);
            }
        }


        this.client.accessGroups
            .getFuture(id)
            .to((group: AccessGroup | null) => {
                if (group === null) {
                    return;
                }


const values =
                    new CustomHashMap<UUID, UUID>();

                for (const uid of group.getData()) {
                    values.set(uid, uid);
                }

                for (const uid of groups) {
                    values.set(uid, uid);
                }


                this.client.accessGroups.put(
                    id,
                    new AccessGroup(
                        group.getId(),
                        RU.timeSeconds(),
                        group.getOwner(),
                        Array.from(values.values()),
                    ),
                );
            });
    }

    /**
     * Confirms removal of items from access group and updates cache.
     * Ported from ConnectionWork.java
     */
    public removeItemsFromAccessGroup(
        id: UUID,
        groups: UUID[],
    ): void {
        Log.debug(
            "Server confirmed REMOVE items from group",
            {id},
        );


const futures =
            this.client.accessOperationsRemove.get(id);

        if (futures) {
            for (const uid of groups) {
                const future = futures.get(uid);
                if (future) {
                    futures.delete(uid);
                    future.tryDone(true);
                }
            }

            if (futures.size === 0) {
                this.client.accessOperationsRemove.delete(id);
            }
        }



const removed =
            new CustomHashMap<UUID, true>();
        for (const uid of groups) {
            removed.set(uid, true);
        }


        this.client.accessGroups
            .getFuture(id)
            .to((group: AccessGroup | null) => {
                if (group === null) {
                    return;
                }


const remaining =
                    group.getData().filter(
                        (uid) => !removed.has(uid),
                    );


                this.client.accessGroups.put(
                    id,
                    new AccessGroup(
                        group.getId(),
                        RU.timeSeconds(),
                        group.getOwner(),
                        remaining,
                    ),
                );
            });
    }


    /**
     * @method addItemsToAccessGroup
     * @description Handle addition to access group
     * @param {bigint} id Group ID
     * @param {UUID[]} groups UUIDs to add
     * @returns {AFuture} Completion future
     */

    /**
     * @method addAccessGroupsToClient
     * @description Handle addition of access groups to client
     * @param {UUID} uid Client UUID
     * @param {bigint[]} groups Group IDs to add
     * @returns {AFuture} Completion future
     */
    public addAccessGroupsToClient(
        uid: UUID,
        _groups: UUID[],
    ): void {
        Log.debug(
            "Server pushed ADD groups to client",
            {uid},
        );

        this.client.clientGroups
            .getFuture(uid)
            .to((_existingGroups: Set<UUID> | null) => {
                // TODO in ClientApiSafeImpl.java.
            });
    }

    /**
     * @method removeAccessGroupsFromClient
     * @description Handle removal of access groups from client
     * @param {UUID} uid Client UUID
     * @param {bigint[]} groups Group IDs to remove
     * @returns {AFuture} Completion future
     */
    public removeAccessGroupsFromClient(
        uid: UUID,
        _groups: UUID[],
    ): void {
        Log.debug(
            "Server pushed REMOVE groups from client",
            {uid},
        );

        this.client.clientGroups
            .getFuture(uid)
            .to((_existingGroups: Set<UUID> | null) => {
                // TODO in ClientApiSafeImpl.java.
            });
    }

    /**
     * @method sendAllAccessedClients
     * @description Handle all accessed clients
     * @param {UUID} uid Client UUID
     * @param {UUID[]} accessedClients Accessed client UUIDs
     * @returns {AFuture} Completion future
     */
    public sendAllAccessedClients(
        uid: UUID,
        accessedClients: UUID[],
    ): void {
        Log.debug(
            "Received AccessedClients",
            {
                count: accessedClients.length,
                uid,
            },
        );


        this.client.allAccessedClients.put(
            uid,
            new CustomHashSet<UUID>(
                accessedClients,
            ),
        );

    }

    /**
     * @method sendAccessCheckResults
     * @description Handle access check results
     * @param {AccessCheckResult[]} results Access check results
     * @returns {AFuture} Completion future
     */
    public sendAccessCheckResults(
        results: AccessCheckResult[],
    ): void {
        Log.debug(
            "Received AccessCheckResults",
            {count: results.length},
        );

        for (const result of results) {
            if (result !== null) {
                this.client.accessCheckCache.put(
                    new AccessCheckPair(
                        result.getSourceUid(),
                        result.getTargetUid(),
                    ),
                    result.isHasAccess(),
                );
            }
        }
    }

    /**
     * @method changeParent
     * @description Handle parent change (not implemented)
     * @param {UUID} _uid Parent UUID
     * @returns {AFuture} Completion future
     */
    public changeParent(_uid: UUID): void {
    }

    /**
     * @method changeAlias
     * @description Handle alias change (not implemented)
     * @param {UUID} _alias Alias UUID
     * @returns {AFuture} Completion future
     */
    public changeAlias(_alias: UUID): void {
    }

    /**
    /**
     * @method newChildren
     * @description Handle new children notification (Ported from ConnectionWork.java)
     */
    public newChildren(
        uids: UUID[],
    ): void {
        for (const uid of uids) {
            this.client.onNewChild.fire(uid);
        }
    }





    public sendMessage(
        message: Message,
    ): void {
        Log.info(
            "ClientApiSafe.sendMessage received",
            {

                localUid:
                    this.client.getUid()
                        ?.toString(),
                remoteUid:
                    message.getUid()
                        .toString(),

                dataLength:
                    message.getData().length,
            },
        );

        this.client
            .getMessageNode(
                message.getUid(),
            )
            .sendMessageFromServerToClient(
                message.getData(),
            );
    }




    /**
     * Processes incoming messages and promotes connection priority.
     * Ported from ConnectionWork.java
     */
    public sendMessages(
        messages: Message[],
    ): void {
        Log.trace(
            "receive messages",
            {count: messages.length},
        );

        const uid = this.client.getUid()!;
        const serverId =
            this.connection
                .getServerDescriptor()
                .getId();

        this.client.priorityManager.promote(
            uid,
            serverId,
        );

        this.client.priorityManager.promote(
            uid,
            serverId,
        );

        for (const message of messages) {
            this.sendMessage(message);
        }
    }



    /**
     * @method sendServerDescriptor
     * @description Handle server descriptor
     * @param {ServerDescriptor} v Server descriptor
     * @returns {AFuture} Completion future
     */
    public sendServerDescriptor(
        descriptor: ServerDescriptor,
    ): void {
        this.client.putServerDescriptor(
            descriptor,
        );
    }

    /**
     * @method sendServerDescriptors
     * @description Handle multiple server descriptors
     * @param {ServerDescriptor[]} serverDescriptors Server descriptors
     * @returns {AFuture} Completion future
     */
    public sendServerDescriptors(
        descriptors: ServerDescriptor[],
    ): void {
        for (const descriptor of descriptors) {
            this.sendServerDescriptor(
                descriptor,
            );
        }
    }

    /**
     * @method sendCloud
     * @description Handle cloud data
     * @param {UUID} uid Client UUID
     * @param {Cloud} cloud Cloud data
     * @returns {AFuture} Completion future
     */

    sendCloud(uidAndCloud: UUIDAndCloud): void {
        Log.trace("sendCloud received", { component: "MyClientApiSafe", uid: uidAndCloud.getUid() });
        this.client.setCloud(uidAndCloud.getUid(), uidAndCloud.getCloud());
    }


    /**
     * @method sendClouds
     * @description Handle multiple cloud data
     * @param {UUIDAndCloud[]} clouds Cloud data array
     * @returns {AFuture} Completion future
     */
    public sendClouds(
        clouds: UUIDAndCloud[],
    ): void {
        for (const cloud of clouds) {
            this.sendCloud(cloud);
        }
    }

    /**
     * @method requestTelemetry
     * @description Handle telemetry request (not implemented)
     * @returns {AFuture} Completion future
     */
    public requestTelemetry(): void {
    }

    public sendCloudConfigs(
        configs: CloudConfig[],
    ): void {
        Log.debug("receive clouds");

        for (const config of configs) {
            const clientCloud =
                this.client.clouds.getNow(
                    config.getSubjectUid(),
                );

            if (clientCloud !== null) {
                clientCloud.applyCloudConfig(
                    config,
                    this.client.appliedConfigsRequests,
                );
            } else {
                this.client.clouds.put(
                    config.getSubjectUid(),
                    new ClientCloud(
                        config.getSubjectUid(),
                        config.getCloud(),
                    ),
                );

            }
        }
    }


    public clientInteraction(
        uid: UUID,
        stream: ClientInteractionClientStream,
    ): void {
        stream
            .asIn()
            .keys(
                () => ServerApiByUidClient.EMPTY,
                "byClient",
                uid,
            )
            .accept();
    }


}


/**
 * @class ConnectionWork
 * @description Represents a working connection to an Aether server after successful login/authentication
 * @extends {ConnectionBase<ClientApiUnsafe, LoginApiRemote>}
 * @implements {ClientApiUnsafe}
 */
export class ConnectionWork extends ConnectionBase<ClientApiUnsafe, LoginApiRemote> implements ClientApiUnsafe {
    public readonly lastBackPing = new AtomicLong(Number.MAX_SAFE_INTEGER);

    readonly cryptoEngine: CryptoEngine;

    readonly authorizedApiV0: AuthorizedApiRemote;
    authorizedApi: AuthorizedApiRemote;
    private negotiatedLoginApiVersion = -1;


    private readonly serverDescriptor: ServerDescriptor;

    basicStatus: boolean;

    private readonly pingRttHistory =
        new PingRttHistory();

    private readonly pingAttemptGate =
        new PingAttemptGate();

    private nextPingAtMs = 0;

    firstAuth: boolean = false;





    private negotiateLoginApiVersion(): void {
        if (this.negotiatedLoginApiVersion !== -1) {
            return;
        }

        const v0 = this.authorizedApiV0;
        if (v0 == null) {
            return;
        }

        const version = this.client.getLoginApiVersion();

        if (version === 0) {
            this.authorizedApi = v0;
            this.negotiatedLoginApiVersion = 0;
            return;
        }

        if (version === 1) {
            v0.switchVersion(1);
            this.authorizedApi = LoginStream.V1.api(v0);
            this.negotiatedLoginApiVersion = 1;
            return;
        }

        throw new Error(
            `Unsupported LoginStream API version: ${version}`,
        );
    }



    protected override onConnectionStateChanged(
        isWritable: boolean,
    ): void {

        this.firstAuth = false;

        if (!isWritable) {
            this.negotiatedLoginApiVersion = -1;
            if (this.authorizedApiV0 != null) {
                this.authorizedApi = this.authorizedApiV0;
            }
        }

        if (this.cryptoEngine == null) {
            Log.warn(
                "onConnectionStateChanged called before cryptoEngine initialized, deferring flush",
            );
            this.stateListeners.fire(isWritable);
            return;
        }

        if (isWritable) {
            this.nextPingAtMs = 0;
            this.negotiateLoginApiVersion();

            Log.info(
                "Network restored. Resetting auth state and forcing flush.",
                {
                    uri: this.uri,
                    loginApiVersion: this.negotiatedLoginApiVersion,
                },
            );
        } else {
            this.pingAttemptGate.reset();
        }


        this.stateListeners.fire(isWritable);
    }


    /**
     * @constructor
     * @param {AetherCloudClient} client Client instance
     * @param {ServerDescriptor} s Server descriptor
     */
    constructor(client: AetherCloudClient, s: ServerDescriptor) {

        const isBrowser = typeof window !== 'undefined' || typeof self !== 'undefined';

        let uri: string | null = null;

        uri = getUriFromServerDescriptor(s, AetherCodec.WSS);
        if (!uri) {
            uri = getUriFromServerDescriptor(s, AetherCodec.WS);
        }

        if (!uri) {
            throw new ClientStartException(`Could not determine a valid WebSocket URI for ServerDescriptor ID ${s.id}.`);
        }



        Log.trace("try connect to work server: " + uri, { uri: uri });
        super(client, uri, ClientApiUnsafe.META, LoginApi.META);
        this.cryptoEngine = client.getCryptoEngineForServer(s.id);

        if (this.cryptoEngine == null) {
            Log.error("ConnectionWork: cryptoEngine is null for server " + s.id + ". Authentication will fail.");
        }
        this.serverDescriptor = s;
        this.basicStatus = false;

        this.authorizedApiV0 = this.getRootApi()!.openLoginByAlias(
            client.getAlias()!,
            () => new MyClientApiSafe(client, this),
            (data: Uint8Array) => this.cryptoEngine.encrypt(data),
            "loginByAlias",
        );
        this.authorizedApi = this.authorizedApiV0;
        this.negotiateLoginApiVersion();



    }


    public flushBackgroundRequests(): void {
        const a = this.authorizedApi;

        for (const uid of this.client.clouds.pollAllRequests()) {
            const cc = this.client.clouds.getNow(uid);
            const version = cc ? cc.getConfigVersion() - 1n : -1n;
            this.client.appliedConfigsRequests.getFuture(new AppliedConfig(uid, version));
        }

        for (const cc of this.client.clouds.values()) {
            if (cc.getConfigVersion() > cc.getConfirmedConfigVersion()) {
                this.client.appliedConfigsRequests.getFuture(new AppliedConfig(cc.getUid(), cc.getConfigVersion()));
            }
        }

        const pendingList: AppliedConfig[] = [];
        let req: AppliedConfig | null;
        while ((req = this.client.appliedConfigsRequests.pollNextRequest()) != null) {
            pendingList.push(req);
        }
        if (pendingList.length > 0) {
            a.reportAppliedConfig(pendingList);
        }


        const requestServers = this.client.servers.pollAllRequests();
        if (requestServers.length > 0) {
            const serverIds = new Int16Array(requestServers.map((id: number) => id));
            a.resolverServers(serverIds as any);
        }

        const requestClientGroups = this.client.clientGroups.pollAllRequests();
        if (requestClientGroups.length > 0) a.requestAccessGroupsForClients(requestClientGroups as UUID[]);

        const requestAccessGroups = this.client.accessGroups.pollAllRequests();
        if (requestAccessGroups.length > 0) {
            const groupIds = requestAccessGroups.map((id: UUID) => id);
            a.requestAccessGroupsItems(groupIds);
        }

        const requestAllAccessed = this.client.allAccessedClients.pollAllRequests();
        if (requestAllAccessed.length > 0) a.requestAllAccessedClients(requestAllAccessed as UUID[]);

        const requestAccessCheck = this.client.accessCheckCache.pollAllRequests();
        if (requestAccessCheck.length > 0) a.requestAccessCheck(requestAccessCheck);

        for (const [groupId, uidsMap] of this.client.accessOperationsAdd) {
const uidsToAdd = Array.from(uidsMap.keys());
            if (uidsToAdd.length > 0) {
                Log.debug("Flushing ADD request for group " + groupId + ": " + uidsToAdd);
                a.addItemsToAccessGroup(groupId, uidsToAdd);
            }
        }
        for (const [groupId, uidsMap] of this.client.accessOperationsRemove) {
const uidsToRemove = Array.from(uidsMap.keys());
            if (uidsToRemove.length > 0) {
                Log.debug("Flushing REMOVE request for group " + groupId + ": " + uidsToRemove);
                a.removeItemsFromAccessGroup(groupId, uidsToRemove);
            }
        }
        while (true) {
            const t = this.client.authTasks.poll();
            if (!t) break;
            t(a);
        }


        for (const m of this.client.messageNodeMap.values()) {
            if (!m.connectionsOut.has(this)) {
                continue;
            }

            const nodeMessages:
                Array<{data: Uint8Array, future: AFuture}> = [];
            let currentBatchSize = 0;
            const MAX_BATCH_BYTES = 512 * 1024;

            while (true) {
                const pending = m.bufferOut.peekFirst();

                if (
                    !pending
                    || currentBatchSize
                        + pending.data.length
                        > MAX_BATCH_BYTES
                ) {
                    break;
                }

                const polled = m.bufferOut.pollFirst();
                if (!polled) {
                    break;
                }

                nodeMessages.push(polled);
                currentBatchSize += polled.data.length;
            }

            if (nodeMessages.length === 0) {
                continue;
            }


            Log.info(
                "MessageNode sending data through connection",
                {
                    uidFrom: this.client.getUid(),
                    uidTo: m.consumerUUID,
                    messages: nodeMessages.length,
                    bytes: currentBatchSize
                }
            );


            for (const pending of nodeMessages) {
                try {
                    a.sendMessageWithResult(
                        new Message(
                            m.consumerUUID,
                            pending.data,
                        ),
                    ).to(() => {
                        pending.future.tryDone();
                    }).onError((error: Error) => {
                        pending.future.tryError(error);
                    });
                } catch (error) {
                    pending.future.tryError(
                        error instanceof Error
                            ? error
                            : new Error(String(error)),
                    );
                }
            }
        }


        this.scheduledWork();
    }


    public sendSafeApiDataMulti(
        _backId: number,
        _data: LoginClientStream,
    ): void {
        throw new Error(
            "UnsupportedOperationException",
        );
    }



    public sendSafeApiData(
        data: LoginClientStream,
    ): void {
        data.asIn()
            .convert(
                (value: Uint8Array) => {
                    try {
                        const decrypted =
                            this.cryptoEngine.decrypt(value);

                        Log.info(
                            "ConnectionWork safe frame received",
                            {
                                encryptedLength:
                                    value.length,
                                decryptedLength:
                                    decrypted.length,
                                firstByte:
                                    decrypted.length > 0
                                        ? decrypted[0]
                                        : -1,
                            },
                        );

                        return decrypted;
                    } catch (error) {
                        Log.error(
                            "ConnectionWork safe frame decryption failed",
                            error instanceof Error
                                ? error
                                : new Error(String(error)),
                            {
                                encryptedLength:
                                    value.length,
                            },
                        );

                        throw error;
                    }
                },
            )
            .ctx(
                this.authorizedApi
                    .getFastMetaContext(),
            )
            .accept();
    }



    public getServerDescriptor(): ServerDescriptor {
        return this.serverDescriptor;
    }

    public toAString(): string {
        const uri =
            getUriFromServerDescriptor(
                this.serverDescriptor,
                AetherCodec.TCP,
            );

        return `work(${uri})`;
    }

    public setBasic(basic: boolean): void {
        this.basicStatus = basic;
    }

    public lifeTime(): number {
        return RU.time() - this.lastBackPing.get();
    }



    private resolvedPingIntervalMs(): number {
        const pingInterval =
            this.client.getPingTime();

        return pingInterval > 0
            ? pingInterval
            : 6_000;
    }

    private scheduleNextPing(
        sentAtMs: number,
        fullPingIntervalMs: number,
    ): void {
        const delayMs =
            this.pingRttHistory.nextPingDelayMs(
                fullPingIntervalMs,
            );

        this.nextPingAtMs =
            sentAtMs + delayMs;
    }

    private recordSuccessfulPingRtt(
        startedMs: number,
        sentAtMs: number,
        fullPingIntervalMs: number,
    ): number {
        const rttMs =
            Math.max(
                0.001,
                performance.now() - startedMs,
            );

        this.pingRttHistory.record(
            rttMs,
        );

        this.scheduleNextPing(
            sentAtMs,
            fullPingIntervalMs,
        );

        return rttMs;
    }

    private measuredRxWindowMs(
        fullPingIntervalMs: number,
    ): number {
        return Math.max(
            fullPingIntervalMs * 5,
            5_000,
        );
    }

    private backgroundRxWindowMs(
        fullPingIntervalMs: number,
    ): number {
        const isBrowser =
            typeof window !== 'undefined'
            || typeof self !== 'undefined';

        return isBrowser
            ? Math.max(
                fullPingIntervalMs * 5,
                60_000,
            )
            : fullPingIntervalMs;
    }





    private beginPingAttempt(): number | null {
        return this.pingAttemptGate.begin();
    }

    private completePingAttempt(
        token: number,
    ): boolean {
        return this.pingAttemptGate.complete(
            token,
        );
    }

    private startPingTimeout(
        token: number,
        onTimeout: () => void,
    ): void {
        RU.schedule(
            null,
            5_000,
            () => {
                if (
                    !this.completePingAttempt(
                        token,
                    )
                ) {
                    return;
                }

                this.firstAuth = false;

                onTimeout();
            },
        );
    }




    public measurePingMs(): ARFuture<number> {
        const result =
            ARFuture.make<number>();

        const waitDeadline =
            RU.time() + 5_000;

        const tryStart = (): void => {
            const pingToken =
                this.beginPingAttempt();

            if (pingToken == null) {
                if (
                    RU.time() >= waitDeadline
                ) {
                    result.tryError(
                        new Error(
                            "Timeout waiting for idle connection before measured ping",
                        ),
                    );
                    return;
                }

                RU.schedule(
                    null,
                    1,
                    tryStart,
                );
                return;
            }

            const fullPingIntervalMs =
                this.resolvedPingIntervalMs();

            const rxWindowMs =
                this.measuredRxWindowMs(
                    fullPingIntervalMs,
                );

            const sentAtMs =
                RU.time();

            const startedMs =
                performance.now();

            this.scheduleNextPing(
                sentAtMs,
                fullPingIntervalMs,
            );

            this.startPingTimeout(
                pingToken,
                () => result.tryError(
                    new Error(
                        "Timeout waiting for measured ping response",
                    ),
                ),
            );

            try {
                this.authorizedApi.ping(
                    BigInt(
                        fullPingIntervalMs,
                    ),
                    BigInt(
                        rxWindowMs,
                    ),
                ).to(() => {
                    if (
                        !this.completePingAttempt(
                            pingToken,
                        )
                    ) {
                        return;
                    }

                    const rttMs =
                        this.recordSuccessfulPingRtt(
                            startedMs,
                            sentAtMs,
                            fullPingIntervalMs,
                        );

                    this.firstAuth = true;

                    result.tryDone(
                        rttMs,
                    );
                }).onError(
                    (error: Error) => {
                        if (
                            !this.completePingAttempt(
                                pingToken,
                            )
                        ) {
                            return;
                        }

                        this.firstAuth = false;
                        result.tryError(error);
                    },
                );
            } catch (error) {
                if (
                    !this.completePingAttempt(
                        pingToken,
                    )
                ) {
                    return;
                }

                this.firstAuth = false;

                result.tryError(
                    error instanceof Error
                        ? error
                        : new Error(
                            String(error),
                        ),
                );
            }
        };

        tryStart();

        return result;
    }






    public scheduledWork(): void {
        const now =
            RU.time();

        if (
            this.nextPingAtMs !== 0
            && now < this.nextPingAtMs
        ) {
            return;
        }

        if (!this.isWritable()) {
            return;
        }

        const pingToken =
            this.beginPingAttempt();

        if (pingToken == null) {
            return;
        }

        const fullPingIntervalMs =
            this.resolvedPingIntervalMs();

        const rxWindowMs =
            this.backgroundRxWindowMs(
                fullPingIntervalMs,
            );

        const sentAtMs =
            RU.time();

        const startedMs =
            performance.now();

        this.scheduleNextPing(
            sentAtMs,
            fullPingIntervalMs,
        );

        this.startPingTimeout(
            pingToken,
            () => Log.warn(
                "Ping response timed out, will retry after ping interval",
            ),
        );

        try {
            this.authorizedApi.ping(
                BigInt(
                    fullPingIntervalMs,
                ),
                BigInt(
                    rxWindowMs,
                ),
            ).to(() => {
                if (
                    !this.completePingAttempt(
                        pingToken,
                    )
                ) {
                    return;
                }

                const rttMs =
                    this.recordSuccessfulPingRtt(
                        startedMs,
                        sentAtMs,
                        fullPingIntervalMs,
                    );

                this.firstAuth = true;

                Log.debug(
                    "Ping response received",
                    {
                        nextConnectMsDuration:
                            fullPingIntervalMs,
                        rxWindowMs,
                        rttMs,
                        nextPingAtMs:
                            this.nextPingAtMs,
                    },
                );
            }).onError(
                (error: Error) => {
                    if (
                        !this.completePingAttempt(
                            pingToken,
                        )
                    ) {
                        return;
                    }

                    this.firstAuth = false;

                    Log.warn(
                        "Ping failed, will retry after ping interval",
                        error,
                    );
                },
            );
        } catch (error) {
            if (
                !this.completePingAttempt(
                    pingToken,
                )
            ) {
                return;
            }

            this.firstAuth = false;

            Log.warn(
                "Failed to send ping, will retry after ping interval",
                error instanceof Error
                    ? error
                    : new Error(
                        String(error),
                    ),
            );
        }
    }



}
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


import { AtomicLong, AtomicReference,  ClientStartException, UUID } from './aether_types';
import { AFuture } from './aether_future';
import { Log } from './aether_logging';
import { MetaContextBase, RemoteApiFuture } from './aether_fastmeta';
import { CryptoEngine } from './aether_crypto';
import { RU } from './aether_utils';
import { MessageNode } from './aether_client_message';
import { ClientCloud } from './aether_client_cloud_priority';

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
                        ?.toAString()
                        .toString(),
                remoteUid:
                    message.getUid()
                        .toAString()
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
    readonly authorizedApi: AuthorizedApiRemote;
    private readonly serverDescriptor: ServerDescriptor;
    private readonly inProcess = new AtomicReference<boolean>(false);
    basicStatus: boolean;
    lastWorkTime: number = 0;
    firstAuth: boolean = false;


    protected override onConnectionStateChanged(
        isWritable: boolean,
    ): void {
        if (this.cryptoEngine == null) {
            Log.warn(
                "onConnectionStateChanged called before cryptoEngine initialized, deferring flush",
            );
            this.stateListeners.fire(isWritable);
            return;
        }

        if (isWritable) {
            this.lastWorkTime = 0;
            this.firstAuth = false;

            Log.info(
                "Network restored. Resetting auth state and forcing flush.",
                {uri: this.uri},
            );
        } else {
            this.firstAuth = false;
            this.inProcess.set(false);
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
        this.authorizedApi = this.getRootApi()!.openLoginByAlias(client.getAlias()!, 
            () => new MyClientApiSafe(client, this), 
            (data: Uint8Array) => this.cryptoEngine.encrypt(data), 
            "loginByAlias");


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

    public scheduledWork(): void {
        const now = RU.time();

        let pingInterval =
            this.client.getPingTime();

        if (pingInterval <= 0) {
            pingInterval = 6_000;
        }

        if (
            this.lastWorkTime !== 0
            && now - this.lastWorkTime < pingInterval
        ) {
            return;
        }

        if (
            !this.isWritable()
            || !this.inProcess.compareAndSet(false, true)
        ) {
            return;
        }


        this.lastWorkTime = now;

        const isBrowser =
            typeof window !== 'undefined'
            || typeof self !== 'undefined';

        const advertisedUapDuration =
            isBrowser
                ? Math.max(
                    pingInterval * 5,
                    60_000,
                )
                : pingInterval;

        const advertisedUapDurationBigInt =
            BigInt(advertisedUapDuration);


        try {
            this.authorizedApi.ping(

                advertisedUapDurationBigInt,
                advertisedUapDurationBigInt,

            ).to(() => {
                this.firstAuth = true;
                this.inProcess.set(false);

                Log.debug(
                    "Ping response received",
                    {

                        nextConnectMsDuration: advertisedUapDuration,
                        rxWindowMs: advertisedUapDuration,

                    },
                );
            }).onError((error: Error) => {
                this.firstAuth = false;
                this.inProcess.set(false);

                Log.warn(
                    "Ping failed, will retry after ping interval",
                    error,
                );
            });
        } catch (error) {
            this.firstAuth = false;
            this.inProcess.set(false);

            Log.warn(
                "Failed to send ping, will retry after ping interval",
                error instanceof Error
                    ? error
                    : new Error(String(error)),
            );
        }
    }

}
import { Connection, getUriFromServerDescriptor } from './aether_client_connection_base';
import { AetherCloudClient, ClientTask } from './aether_client';
import {
    AccessGroup,
    AccessCheckResult,
    AetherCodec,
    AuthorizedApi,
    AuthorizedApiRemote,
    ClientApiSafe,
    ClientApiUnsafe,
    Cloud,
    LoginApi,
    LoginApiRemote,
    LoginClientStream,
    LoginStream,
    Message,
    ServerDescriptor,
    UUIDAndCloud,
    AccessCheckPair,
    ClientApiStream,
    ServerApiByUid,
} from './aether_api';
import { AtomicLong, AtomicReference, ClientApiException, ClientStartException, UUID } from './aether_types';
import { AFuture } from './aether_future';
import { Log } from './aether_logging';
import { FastApiContext, RemoteApiFuture } from './aether_fastmeta';
import { ConnectionState } from './aether_fastmeta_net';
import { CryptoEngine } from './aether_crypto';
import { RU } from './aether_utils';
import { MessageNode } from './aether_client_message';

/**
 * @class MyClientApiSafe
 * @description Local implementation of the ClientApiSafe interface
 */
class MyClientApiSafe implements ClientApiSafe {
    private readonly client: AetherCloudClient;

    /**
     * @constructor
     * @param {AetherCloudClient} client Client instance
     */
    constructor(client: AetherCloudClient) {
        this.client = client;
    }

    /**
     * @method sendAccessGroups
     * @description Handle incoming access groups
     * @param {AccessGroup[]} groups Access groups
     * @returns {AFuture} Completion future
     */
    sendAccessGroups(groups: AccessGroup[]): AFuture {
        Log.debug("Received AccessGroups", { component: "MyClientApiSafe", gLen: groups.length });
        for (const group of groups) {
            if (group) {
                this.client.accessGroups.putResolved(group.getId(), group);
            }
        }
        return AFuture.of();
    }

    /**
     * @method sendAccessGroupForClient
     * @description Handle access groups for specific client
     * @param {UUID} uid Client UUID
     * @param {bigint[]} groups Group IDs
     * @returns {AFuture} Completion future
     */
    sendAccessGroupForClient(uid: UUID, groups: bigint[]): AFuture {
        Log.debug("Received AccessGroups for client", { component: "MyClientApiSafe", uid: uid });
        this.client.clientGroups.putResolved(uid, new Set(groups));
        return AFuture.of();
    }

    /**
     * @method addItemsToAccessGroup
     * @description Handle addition to access group
     * @param {bigint} id Group ID
     * @param {UUID[]} groups UUIDs to add
     * @returns {AFuture} Completion future
     */
    addItemsToAccessGroup(id: bigint, groups: UUID[]): AFuture {
        Log.debug("Server confirmed ADD items to group", { component: "MyClientApiSafe", gid: id, count: groups.length });
        const futures = this.client.accessOperationsAdd.get(id);
        if (futures) {
            for (const uid of groups) {
                const uidStr = uid.toString().toString();
                const future = futures.get(uidStr);
                if (future) {
                    futures.delete(uidStr);
                    future.tryDone(true);
                }
            }
            if (futures.size === 0) {
                this.client.accessOperationsAdd.delete(id);
            }
        }

        this.client.accessGroups.getFuture(id).to((group: AccessGroup | null) => {
            if (group) {
                const newUuids = new Set(group.getData());
                groups.forEach(uid => newUuids.add(uid));
                const newGroup = new AccessGroup(group.getOwner(), group.getId(), Array.from(newUuids));
                this.client.accessGroups.putResolved(id, newGroup);
            }
        });
        return AFuture.of();
    }

    /**
     * @method removeItemsFromAccessGroup
     * @description Handle removal from access group
     * @param {bigint} id Group ID
     * @param {UUID[]} groups UUIDs to remove
     * @returns {AFuture} Completion future
     */
    removeItemsFromAccessGroup(id: bigint, groups: UUID[]): AFuture {
        Log.debug("Server confirmed REMOVE items from group", { component: "MyClientApiSafe", gid: id, count: groups.length });
        const futures = this.client.accessOperationsRemove.get(id);
        if (futures) {
            for (const uid of groups) {
                const uidStr = uid.toString().toString();
                const future = futures.get(uidStr);
                if (future) {
                    futures.delete(uidStr);
                    future.tryDone(true);
                }
            }
            if (futures.size === 0) {
                this.client.accessOperationsRemove.delete(id);
            }
        }

        this.client.accessGroups.getFuture(id).to((group: AccessGroup | null) => {
            if (group) {
                const groupsToRemoveSet = new Set(groups.map(u => u.toString().toString()));
                const filteredUuids = group.getData().filter((u: UUID) => !groupsToRemoveSet.has(u.toString().toString()));
                const newGroup = new AccessGroup(group.getOwner(), group.getId(), filteredUuids);
                this.client.accessGroups.putResolved(id, newGroup);
            }
        });
        return AFuture.of();
    }

    /**
     * @method addAccessGroupsToClient
     * @description Handle addition of access groups to client
     * @param {UUID} uid Client UUID
     * @param {bigint[]} groups Group IDs to add
     * @returns {AFuture} Completion future
     */
    addAccessGroupsToClient(uid: UUID, groups: bigint[]): AFuture {
        Log.debug("Server pushed ADD groups to client", { component: "MyClientApiSafe", uid: uid });
        this.client.clientGroups.getFuture(uid).to((existingGroups: Set<bigint> | null) => {
            const newGroups = existingGroups ? new Set(existingGroups) : new Set<bigint>();
            for (const g of groups) {
                newGroups.add(g);
            }
            this.client.clientGroups.putResolved(uid, newGroups);
        });
        return AFuture.of();
    }

    /**
     * @method removeAccessGroupsFromClient
     * @description Handle removal of access groups from client
     * @param {UUID} uid Client UUID
     * @param {bigint[]} groups Group IDs to remove
     * @returns {AFuture} Completion future
     */
    removeAccessGroupsFromClient(uid: UUID, groups: bigint[]): AFuture {
        Log.debug("Server pushed REMOVE groups from client", { component: "MyClientApiSafe", uid: uid });
        this.client.clientGroups.getFuture(uid).to((existingGroups: Set<bigint> | null) => {
            if (existingGroups) {
                const newGroups = new Set(existingGroups);
                for (const g of groups) {
                    newGroups.delete(g);
                }
                this.client.clientGroups.putResolved(uid, newGroups);
            }
        });
        return AFuture.of();
    }

    /**
     * @method sendAllAccessedClients
     * @description Handle all accessed clients
     * @param {UUID} uid Client UUID
     * @param {UUID[]} accessedClients Accessed client UUIDs
     * @returns {AFuture} Completion future
     */
    sendAllAccessedClients(uid: UUID, accessedClients: UUID[]): AFuture {
        Log.debug("Received AccessedClients", { component: "MyClientApiSafe", count: accessedClients.length, uid: uid });
        this.client.allAccessedClients.putResolved(uid, new Set(accessedClients));
        return AFuture.of();
    }

    /**
     * @method sendAccessCheckResults
     * @description Handle access check results
     * @param {AccessCheckResult[]} results Access check results
     * @returns {AFuture} Completion future
     */
    sendAccessCheckResults(results: AccessCheckResult[]): AFuture {
        Log.debug("Received AccessCheckResults", { component: "MyClientApiSafe", count: results.length });
        for (const result of results) {
            if (result) {
                this.client.accessCheckCache.putResolved(
                    new AccessCheckPair(result.getSourceUid(), result.getTargetUid()),
                    result.isHasAccess()
                );
            }
        }
        return AFuture.of();
    }

    /**
     * @method changeParent
     * @description Handle parent change (not implemented)
     * @param {UUID} _uid Parent UUID
     * @returns {AFuture} Completion future
     */
    changeParent(_uid: UUID): AFuture {
        Log.warn("MyClientApiSafe.changeParent not implemented");
        return AFuture.of();
    }

    /**
     * @method changeAlias
     * @description Handle alias change (not implemented)
     * @param {UUID} _alias Alias UUID
     * @returns {AFuture} Completion future
     */
    changeAlias(_alias: UUID): AFuture {
        Log.warn("MyClientApiSafe.changeAlias not implemented");
        return AFuture.of();
    }

    /**
     * @method newChild
     * @description Handle new child notification
     * @param {UUID} uid Child UUID
     * @returns {AFuture} Completion future
     */
    newChild(uid: UUID): AFuture {
        Log.trace("newChild received", { component: "MyClientApiSafe", uid: uid });
        this.client.onNewChild.fire(uid);
        return AFuture.of();
    }

    /**
     * @method sendMessages
     * @description Handle incoming messages
     * @param {Message[]} msg Messages
     * @returns {AFuture} Completion future
     */
    sendMessages(msg: Message[]): AFuture {
        Log.trace("receive messages", { component: "MyClientApiSafe", count: msg.length });
        for (const m of msg) {
            const senderUid = m.getUid();
            Log.trace("receive message", {
                targetUid: this.client.getUid(),
                sourceUid: senderUid,
                dataLen: m.getData().length
            });
            if (senderUid) {
                this.client.onMessage.fire(senderUid, m.getData());
            } else {
                Log.warn("Received message with null sender UID");
            }
        }
        return AFuture.of();
    }

    /**
     * @method sendServerDescriptor
     * @description Handle server descriptor
     * @param {ServerDescriptor} v Server descriptor
     * @returns {AFuture} Completion future
     */
    sendServerDescriptor(v: ServerDescriptor): AFuture {
        Log.trace("sendServerDescriptor received", { component: "MyClientApiSafe", serverId: v.id });
        this.client.servers.putResolved(v.id, v);
        return AFuture.of();
    }

    /**
     * @method sendServerDescriptors
     * @description Handle multiple server descriptors
     * @param {ServerDescriptor[]} serverDescriptors Server descriptors
     * @returns {AFuture} Completion future
     */
    sendServerDescriptors(serverDescriptors: ServerDescriptor[]): AFuture {
        Log.trace("sendServerDescriptors received", { component: "MyClientApiSafe", count: serverDescriptors.length });
        serverDescriptors.forEach(c => this.sendServerDescriptor(c));
        return AFuture.of();
    }

    /**
     * @method sendCloud
     * @description Handle cloud data
     * @param {UUID} uid Client UUID
     * @param {Cloud} cloud Cloud data
     * @returns {AFuture} Completion future
     */
    sendCloud(uid: UUID, cloud: Cloud): AFuture {
        Log.trace("sendCloud received", { component: "MyClientApiSafe", uid: uid });
        this.client.setCloud(uid, cloud);
        return AFuture.of();
    }

    /**
     * @method sendClouds
     * @description Handle multiple cloud data
     * @param {UUIDAndCloud[]} clouds Cloud data array
     * @returns {AFuture} Completion future
     */
    sendClouds(clouds: UUIDAndCloud[]): AFuture {
        Log.trace("sendClouds received", { component: "MyClientApiSafe", count: clouds.length });
        clouds.forEach(c => this.sendCloud(c.getUid(), c.getCloud()));
        return AFuture.of();
    }

    /**
     * @method requestTelemetry
     * @description Handle telemetry request (not implemented)
     * @returns {AFuture} Completion future
     */
    requestTelemetry(): AFuture {
        Log.warn("MyClientApiSafe.requestTelemetry not implemented");
        return AFuture.of();
    }
}

/**
 * @class ConnectionWork
 * @description Represents a working connection to an Aether server after successful login/authentication
 * @extends {Connection<ClientApiUnsafe, LoginApiRemote>}
 * @implements {ClientApiUnsafe}
 */
export class ConnectionWork extends Connection<ClientApiUnsafe, LoginApiRemote> implements ClientApiUnsafe {
    public readonly lastBackPing = new AtomicLong(Number.MAX_SAFE_INTEGER);
    public readonly ready = AFuture.make();
    readonly apiSafe: ClientApiSafe;
    readonly apiSafeCtx: FastApiContext;
    readonly cryptoEngine: CryptoEngine;
    readonly remoteApiFutureAuth = new RemoteApiFuture<AuthorizedApiRemote>(AuthorizedApi.META);
    private readonly serverDescriptor: ServerDescriptor;
    readonly inProcess = new AtomicReference<boolean>(false);
    basicStatus: boolean = false;
    lastWorkTime: number = 0;
    firstAuth: boolean = false;
    private _errorTimestamp: number = 0;

    /**
     * @private
     * @method hasPendingMessages
     * @description Check if there are pending messages
     * @returns {boolean} True if pending messages exist
     */
    private hasPendingMessages(): boolean {
        for (const m of this.client.messageNodeMap.values()) {
            if (m.connectionsOut.has(this) && !m.bufferOut.isEmpty()) {
                return true;
            }
        }
        return false;
    }

    /**
     * @constructor
     * @param {AetherCloudClient} client Client instance
     * @param {ServerDescriptor} s Server descriptor
     */
    constructor(client: AetherCloudClient, s: ServerDescriptor) {
        const isBrowser = typeof window !== 'undefined' || typeof self !== 'undefined';
        const loc = typeof window !== 'undefined' ? window.location : (typeof self !== 'undefined' ? self.location : null);
        const isHttps = isBrowser && loc && loc.protocol === 'https:';

        let uri: string | null = null;

        if (isHttps) {
            uri = getUriFromServerDescriptor(s, AetherCodec.WSS);

            if (!uri) {
                Log.warn("ConnectionWork: HTTPS environment requires WSS with a Domain Name. Server only provided IPs or non-WSS endpoints.", { serverId: s.id });
            }
        } else {
            uri = getUriFromServerDescriptor(s, AetherCodec.WS);
            if (!uri) {
                uri = getUriFromServerDescriptor(s, AetherCodec.WSS);
            }
        }

        if (!uri) {
            throw new ClientStartException(`Could not determine a valid WebSocket URI for ServerDescriptor ID ${s.id}. IsHttps: ${isHttps}`);
        }

        Log.trace("try connect to work server: " + uri, { uri: uri });
        super(client, uri, ClientApiUnsafe.META, LoginApi.META);
        this.cryptoEngine = client.getCryptoEngineForServer(s.id);
        this.serverDescriptor = s;
        this.apiSafe = new MyClientApiSafe(client);

        this.remoteApiFutureAuth.addPermanent((a: AuthorizedApiRemote, f: AFuture) => {
            try {
                this.flushBackgroundRequests(a, f);
            } catch (e) {
                Log.error("Error in permanent remoteApiFutureAuth task", e as Error);
            }
        });

        this.apiSafeCtx = new FastApiContext();

        this.apiSafeCtx.flush = (sendFuture?: AFuture): AFuture => {
            if (!sendFuture) {
                sendFuture = AFuture.make();
            }
            const hasBMapRequests = this.client.clouds.isRequestsFor(this as unknown as object) ||
                this.client.servers.isRequestsFor(this as unknown as object) ||
                this.client.clientGroups.isRequestsFor(this as unknown as object) ||
                this.client.accessGroups.isRequestsFor(this as unknown as object) ||
                this.client.allAccessedClients.isRequestsFor(this as unknown as object) ||
                this.client.accessCheckCache.isRequestsFor(this as unknown as object);

            if (this.remoteApiFutureAuth.isEmpty() &&
                !hasBMapRequests &&
                !this.hasPendingMessages() &&
                this.client.accessOperationsAdd.size === 0 &&
                this.client.accessOperationsRemove.size === 0 &&
                this.client.authTasks.isEmpty() &&
                this.client.clientTasks.isEmpty()
            ) {
                sendFuture.tryDone();
                return sendFuture;
            }

            if (!this.connectFuture.isDone()) {
                sendFuture.error(new ClientApiException("Cannot flush apiSafeCtx: Root connection not ready."));
                return sendFuture;
            }
            if (this.connectFuture.isError()) {
                sendFuture.error(new ClientApiException("Cannot flush apiSafeCtx: Root connection failed.", this.connectFuture.getError() ?? undefined));
                return sendFuture;
            }

            const loginApi = this.getRootApi();

            if (!loginApi) {
                const errMsg = "Root Login API is null even after connectFuture completed successfully during apiSafeCtx flush";
                Log.error(errMsg);
                sendFuture.error(new Error(errMsg));
                return sendFuture;
            }

            this.remoteApiFutureAuth.executeAll(this.apiSafeCtx, sendFuture);
            const dataToSend = this.apiSafeCtx.remoteDataToArrayAsArray();

            if (dataToSend.length === 0) {
                if (!sendFuture.isFinalStatus()) {
                    sendFuture.tryDone();
                }
                return sendFuture;
            }

            Log.trace("apiSafeCtx.flush: Encrypting bytes for LoginStream", { len: dataToSend.length });
            const loginStream = LoginStream.fromRemoteBytes(
                this.cryptoEngine.encrypt.bind(this.cryptoEngine),
                dataToSend
            );

            const alias = this.client.getAlias();
            if (!alias) {
                const errMsg = "Client alias is not set, cannot login via apiSafeCtx flush.";
                Log.error(errMsg);
                sendFuture.error(new Error(errMsg));
                return sendFuture;
            }

            Log.trace("apiSafeCtx.flush: Calling loginByAlias");
            loginApi.loginByAlias(alias, loginStream);
            loginApi.flush(sendFuture);
            Log.trace("apiSafeCtx.flush: Root API flushed");
            return sendFuture;
        };

        this.connectFuture.to(
            () => { }
        ).onError((err: Error) => {
            this._errorTimestamp = RU.time();
            this.ready.error(err);
        }).onCancel(() => {
            this.ready.cancel();
        });
    }

    /**
     * @method getErrorTimestamp
     * @description Get timestamp when connection entered error state
     * @returns {number} Timestamp
     */
    public getErrorTimestamp(): number {
        return this._errorTimestamp;
    }

    /**
     * @private
     * @method flushCloudRequests
     * @description Flush cloud requests
     * @param {AuthorizedApiRemote} a Authorized API
     */
    private flushCloudRequests(a: AuthorizedApiRemote): void {
        const requestCloud = this.client.clouds.getRequestsFor(this as unknown as object);
        if (requestCloud.length > 0) {
            Log.trace("Flushing cloud requests", {
                component: "ConnectionWork",
                server: this.uri,
                count: requestCloud.length,
                uids: requestCloud
            });
            a.resolveClouds(requestCloud);
        }
    }

    /**
     * @private
     * @method flushServerRequests
     * @description Flush server requests
     * @param {AuthorizedApiRemote} a Authorized API
     */
    private flushServerRequests(a: AuthorizedApiRemote): void {
        const requestServersObjects = this.client.servers.getRequestsFor(this as unknown as object);
        if (requestServersObjects.length > 0) {
            const serverIds = requestServersObjects.map(id => Number(id));
            Log.trace("Flushing server requests", {
                component: "ConnectionWork",
                server: this.uri,
                count: serverIds.length,
                sids: serverIds
            });
            a.resolverServers(serverIds);
        }
    }

    /**
     * @private
     * @method flushMessageQueue
     * @description Flush message queue
     * @param {AuthorizedApiRemote} a Authorized API
     * @param {AFuture} sendFuture Send future
     * @returns {boolean} True if messages were sent
     */
    private flushMessageQueue(a: AuthorizedApiRemote, sendFuture: AFuture): boolean {
        let messagesToSend: Message[] | null = null;
        const futuresToComplete: AFuture[] = [];

        const messagesToRequeue: Map<MessageNode, { data: Uint8Array, future: AFuture }[]> = new Map();

        for (const m of this.client.messageNodeMap.values()) {
            if (m.connectionsOut.has(this)) {
                const messagesFromNode: { data: Uint8Array, future: AFuture }[] = [];
                let msgEntry: { data: Uint8Array, future: AFuture } | undefined;

                let currentBatchSize = 0;
                const MAX_BATCH_BYTES = 256 * 1024; // 256 KB
                while ((msgEntry = m.bufferOut.peek()) && (currentBatchSize + msgEntry.data.length < MAX_BATCH_BYTES)) {
                    msgEntry = m.bufferOut.poll()!;
                    currentBatchSize += msgEntry.data.length;
                    Log.trace("read message from bufferOut", { data: msgEntry.data, uid: m.consumerUUID });
                    messagesFromNode.push(msgEntry);
                }

                if (messagesFromNode.length > 0) {
                    const consumerUuidString = m.consumerUUID.toString().toString();
                    Log.debug("Preparing messages client to server", {
                        component: "ConnectionWork",
                        server: this.uri,
                        uidFrom: this.client.getUid(),
                        uidTo: consumerUuidString,
                        count: messagesFromNode.length
                    });

                    if (messagesToSend === null) {
                        messagesToSend = [];
                    }

                    messagesFromNode.forEach(val => {
                        messagesToSend!.push(new Message(m.consumerUUID, val.data));
                        futuresToComplete.push(val.future);
                    });
                    messagesToRequeue.set(m, messagesFromNode);
                }
            }
        }

        if (messagesToSend !== null && messagesToSend.length > 0) {
            Log.trace("Flushing messages", {
                component: "ConnectionWork",
                server: this.uri,
                count: messagesToSend.length
            });

            sendFuture.to(
                () => {
                    Log.trace("Message batch send successful", { component: "ConnectionWork", server: this.uri });
                     this.client.priorityManager.promote(this.client.getUid()!, this.serverDescriptor.id);
                    futuresToComplete.forEach(f => f.tryDone());
                }).onError(
                    (err: Error) => {
                        Log.error("Failed to send message batch, requeuing", err, { component: "ConnectionWork", server: this.uri });
                         this.client.priorityManager.demote(this.client.getUid()!, this.serverDescriptor.id);
                        messagesToRequeue.forEach((msgs, node) => {
                            msgs.reverse().forEach(msg => node.bufferOut.add(msg));
                            msgs.forEach(msg => msg.future.error(err));
                        });
                    }
                ).onCancel(() => {
                    Log.warn("Message batch sending cancelled, requeuing", { component: "ConnectionWork", server: this.uri });
                    messagesToRequeue.forEach((msgs, node) => {
                        msgs.reverse().forEach(msg => node.bufferOut.add(msg));
                        msgs.forEach(msg => msg.future.cancel());
                    });
                });

            a.sendMessages(messagesToSend);

            return true;
        }

        if (this.hasPendingMessages()) {
                RU.schedule(10, () => this.flush()); // Даем браузеру "дышать" 10мс
        }
        return false;
    }

    /**
     * @private
     * @method flushPing
     * @description Flush ping with enhanced timeout handling
     * @param {AuthorizedApiRemote} a Authorized API
     */
    private flushPing(a: AuthorizedApiRemote): void {
        if (!this.firstAuth) {
            Log.trace("Sending initial ping", { component: "ConnectionWork", server: this.uri });
            const pingFuture = a.ping(0n);

            pingFuture.timeoutError(30, "Ping timeout");

            pingFuture.to(
                () => {
                    Log.trace("Initial ping successful", { component: "ConnectionWork", server: this.uri });
                    this.firstAuth = true;
                    this.lastBackPing.set(RU.time());
                    if (!this.ready.isDone()) {
                        this.ready.tryDone();
                    }
                }
            ).onError(
                (err: Error) => {
                    Log.warn("Initial ping failed", {
                        component: "ConnectionWork",
                        server: this.uri,
                        error: err.message
                    });

                    if (!this.ready.isDone()) {
                        this.ready.tryError(err);
                    }

                    this._errorTimestamp = RU.time();

                    this.firstAuth = false;

                    Log.info("Ping failure detected, scheduling reconnection");
                    if (this.connectFuture.isDone()) {
                        this.rootApi = null;
                        this.inProcess.set(false);
                    }
                }
            );
        }
    }

    /**
     * @private
     * @method flushBackgroundRequests
     * @description Flush all background requests
     * @param {AuthorizedApiRemote} a Authorized API
     * @param {AFuture} sendFuture Send future
     */
    private flushBackgroundRequests(a: AuthorizedApiRemote, sendFuture: AFuture): void {
        try {
            this.flushCloudRequests(a);
            this.flushServerRequests(a);

            const requestClientGroups = this.client.clientGroups.getRequestsFor(this as unknown as object);
            if (requestClientGroups.length > 0) {
                a.requestAccessGroupsForClients(requestClientGroups);
            }

            const requestAccessGroups = this.client.accessGroups.getRequestsFor(this as unknown as object);
            if (requestAccessGroups.length > 0) {
                a.requestAccessGroupsItems(requestAccessGroups);
            }

            const requestAllAccessed = this.client.allAccessedClients.getRequestsFor(this as unknown as object);
            if (requestAllAccessed.length > 0) {
                a.requestAllAccessedClients(requestAllAccessed);
            }

            const requestAccessCheck = this.client.accessCheckCache.getRequestsFor(this as unknown as object);
            if (requestAccessCheck.length > 0) {
                a.requestAccessCheck(requestAccessCheck);
            }

            for (const [groupId, groupMap] of this.client.accessOperationsAdd.entries()) {
                const uidsToAdd = Array.from(groupMap.keys()).map(s => UUID.fromString(s));
                if (uidsToAdd.length > 0) {
                    Log.debug("Flushing ADD request", { gid: groupId, uids: uidsToAdd });
                    a.addItemsToAccessGroup(groupId, uidsToAdd);
                }
            }

            for (const [groupId, groupMap] of this.client.accessOperationsRemove.entries()) {
                const uidsToRemove = Array.from(groupMap.keys()).map(s => UUID.fromString(s));
                if (uidsToRemove.length > 0) {
                    Log.debug("Flushing REMOVE request", { gid: groupId, uids: uidsToRemove });
                    a.removeItemsFromAccessGroup(groupId, uidsToRemove);
                }
            }

            let authTask;
            while ((authTask = this.client.authTasks.poll())) {
                authTask(a);
            }

            let clientTask: ClientTask | undefined;
            while ((clientTask = this.client.clientTasks.poll())) {
                const task = clientTask;
                a.client(task.uid, ClientApiStream.fromRemoteConsumer(this.apiSafeCtx, (api) => {
                    task.task(api as unknown as ServerApiByUid);
                }));
            }

            const messagesSent = this.flushMessageQueue(a, sendFuture);

            this.flushPing(a);

            if (!messagesSent && !sendFuture.isFinalStatus()) {
                sendFuture.tryDone();
            }

        } catch (e) {
            Log.error("Error during flushBackgroundRequests", e as Error, { component: "ConnectionWork", server: this.uri });
            if (!sendFuture.isFinalStatus()) {
                sendFuture.error(e as Error);
            }
        }
    }

    /**
     * @method sendSafeApiDataMulti
     * @description Handle multi-part safe API data (not supported)
     * @param {number} _backId Back ID
     * @param {LoginClientStream} _data Login client stream
     * @returns {AFuture} Completion future
     */
    sendSafeApiDataMulti(_backId: number, _data: LoginClientStream): AFuture {
        const err = new Error("UnsupportedOperationException: sendSafeApiDataMulti is not supported in TS client");
        Log.error("UnsupportedOperationException", err);
        return AFuture.ofThrow(err);
    }

    /**
     * @method sendSafeApiData
     * @description Handle safe API data
     * @param {LoginClientStream} data Login client stream
     * @returns {AFuture} Completion future
     */
    sendSafeApiData(data: LoginClientStream): AFuture {
        const future = AFuture.make();
        try {
            Log.trace("Received sendSafeApiData stream", {
                component: "ConnectionWork",
                server: this.uri,
                dataLen: data.data.length
            });
            data.accept(this.apiSafeCtx, this.cryptoEngine.decrypt.bind(this.cryptoEngine), this.apiSafe);
            Log.trace("sendSafeApiData stream processed successfully", { component: "ConnectionWork", server: this.uri });
            future.tryDone();
        } catch (e) {
            Log.error("Error processing incoming sendSafeApiData stream", e as Error, { component: "ConnectionWork", server: this.uri });
            future.error(e as Error);
        }
        return future;
    }

    /**
     * @method getServerDescriptor
     * @description Get server descriptor
     * @returns {ServerDescriptor} Server descriptor
     */
    public getServerDescriptor(): ServerDescriptor {
        return this.serverDescriptor;
    }

    /**
     * @method toString
     * @description Get string representation
     * @returns {string} String representation
     */
    override toString(): string {
        const uri = getUriFromServerDescriptor(this.serverDescriptor, AetherCodec.WS) ?? `serverID=${this.serverDescriptor.id}`;
        return `work(${uri})`;
    }

    /**
     * @method setBasic
     * @description Set basic status
     * @param {boolean} basic Basic status
     */
    public setBasic(basic: boolean): void {
        this.basicStatus = basic;
    }

    /**
     * @method lifeTime
     * @description Get connection lifetime
     * @returns {number} Lifetime in milliseconds
     */
    public lifeTime(): number {
        return RU.time() - this.lastBackPing.get();
    }

    private logTime = 0;

    /**
     * @method scheduledWork
     * @description Execute scheduled work with connection health checks
     */
    public scheduledWork(): void {
        const t = RU.time();
        const pingInterval = this.client.getPingTime();

        if (this.connectFuture.isError() && !this.isReconnecting()) {
            Log.info("Connection in error state, attempting recovery", {
                component: "ConnectionWork",
                server: this.uri
            });
            this.inProcess.set(false);
            return;
        }

        if ((t - this.lastWorkTime < pingInterval) || !this.inProcess.compareAndSet(false, true)) {
            return;
        }

        if (RU.time() - this.logTime > 1000) {
            this.logTime = RU.time();
            Log.trace("Executing scheduledWork on server", {
                component: "ConnectionWork",
                server: this.uri
            });
        }

        this.lastWorkTime = t;
        const f = AFuture.make();
        f.addListener(() => this.inProcess.set(false));
        f.timeoutError(Math.max(5, pingInterval / 1000 * 2),
            `scheduledWork flush timeout on ${this.uri}`);

        this.apiSafeCtx.flush(f);
    }

    /**
     * @private
     * @method isReconnecting
     * @description Check if connection is reconnecting
     * @returns {boolean} True if reconnecting
     */
    private isReconnecting(): boolean {
        const client = this.fastMetaClient as any;
        return client?.wsClient?.getConnectionState() === ConnectionState.RECONNECTING;
    }

    /**
     * @method flush
     * @description Flush connection
     */
    public flush(): void {
        if (!this.inProcess.compareAndSet(false, true)) {
            return;
        }

        const rootFuture = this.getRootApiFuture();
        const isReady = rootFuture.isDone();
        const isFailed = rootFuture.isError();
        const isCancelled = rootFuture.isCanceled();
        if (!isReady || isFailed || isCancelled || !this.rootApi) {
            this.inProcess.set(false);
            return;
        }

        this.lastWorkTime = RU.time();
        const f = AFuture.make();
        f.addListener(() => this.inProcess.set(false));
        f.timeoutError(5, `explicit flush timeout on ${this.uri}`);

        this.apiSafeCtx.flush(f);
    }
}
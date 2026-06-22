import { ConnectionBase, getUriFromServerDescriptor } from './aether_client_connection_base';
import { AetherCloudClient } from './aether_client';
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
} from './aether_api';
import { AtomicLong, AtomicReference,  ClientStartException, UUID } from './aether_types';
import { AFuture } from './aether_future';
import { Log } from './aether_logging';
import { MetaContextBase, RemoteApiFuture } from './aether_fastmeta';
import { CryptoEngine } from './aether_crypto';
import { RU } from './aether_utils';
import { MessageNode } from './aether_client_message';
import { MessageBatcher } from './MessageBatcher';

/**
 * @class MyClientApiSafe
 * @description Local implementation of the ClientApiSafe interface
 */
class MyClientApiSafe implements ClientApiSafe {
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
    sendAccessGroups(groups: AccessGroup[]): AFuture {
        Log.debug("Received AccessGroups", { component: "MyClientApiSafe", gLen: groups.length });
        for (const group of groups) {
            if (group) {
                this.client.accessGroups.put(group.getId(), group);
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
        this.client.clientGroups.put(uid, new Set(groups));
        return AFuture.of();
    }

    /**
     * Confirms addition of items to access group and updates cache.
     * Ported from ConnectionWork.java
     */
    public addItemsToAccessGroup(id: bigint, groups: UUID[]): AFuture {
        Log.debug("Server confirmed ADD items to group", { id: id.toString() });
        const futures = this.client.accessOperationsAdd.get(id);
        if (futures) {
            for (const uid of groups) {
                const future = futures.get(uid.toString());
                if (future) {
                    future.tryDone(true);
                    futures.delete(uid.toString());
                }
            }
            if (futures.size === 0) this.client.accessOperationsAdd.delete(id);
        }


        // Update local cache
            this.client.accessGroups.getFuture(id).to((group: AccessGroup | null) => {
                if (group) {
                    const newUuids = new Set([...group.getData(), ...groups]);
                    const newGroup = new AccessGroup(group.getOwner(), group.getId(), Array.from(newUuids));
                    this.client.accessGroups.put(id, newGroup);
                }
            });
        return AFuture.completed();
    }

    /**
     * Confirms removal of items from access group and updates cache.
     * Ported from ConnectionWork.java
     */
    public removeItemsFromAccessGroup(id: bigint, groups: UUID[]): AFuture {
        Log.debug("Server confirmed REMOVE items from group", { id: id.toString() });
        const futures = this.client.accessOperationsRemove.get(id);
        if (futures) {
            for (const uid of groups) {
                const future = futures.get(uid.toString());
                if (future) {
                    future.tryDone(true);
                    futures.delete(uid.toString());
                }
            }
            if (futures.size === 0) this.client.accessOperationsRemove.delete(id);
        }

            this.client.accessGroups.getFuture(id).to((group: AccessGroup | null) => {
            if (group) {
                const currentUuids = new Set(group.getData());
                for (const uid of groups) currentUuids.delete(uid);
                const newGroup = new AccessGroup(group.getOwner(), group.getId(), Array.from(currentUuids) as UUID[]);
                this.client.accessGroups.put(id, newGroup);
            }
        });
        return AFuture.completed();
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
    addAccessGroupsToClient(uid: UUID, groups: bigint[]): AFuture {
        Log.debug("Server pushed ADD groups to client", { component: "MyClientApiSafe", uid: uid });
        this.client.clientGroups.getFuture(uid).to((existingGroups: Set<bigint> | null) => {
            const newGroups = existingGroups ? new Set(existingGroups) : new Set<bigint>();
            for (const g of groups) {
                newGroups.add(g);
            }
            this.client.clientGroups.put(uid, newGroups);
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
                this.client.clientGroups.put(uid, newGroups);
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
        this.client.allAccessedClients.put(uid, new Set(accessedClients));
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
                this.client.accessCheckCache.put(
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
    /**
     * @method newChildren
     * @description Handle new children notification (Ported from ConnectionWork.java)
     */
    newChildren(uids: UUID[]): void {
        Log.trace("newChildren received", { component: "MyClientApiSafe", count: uids.length });
        for (const u of uids) {
            this.client.onNewChild.fire(u);
        }
    }

    sendMessage(msg: Message): void {
        // Обрабатывается в sendMessages
    }

    /**
     * Processes incoming messages and promotes connection priority.
     * Ported from ConnectionWork.java
     */

    public sendMessages(msg: Message[]): AFuture {
        Log.trace(`receive messages: ${msg.length}`);
        const uid = this.client.getUid();
        if (uid) {
            this.client.priorityManager.promote(uid, this.connection.getServerDescriptor().id);
        }

        for (const m of msg) {
            Log.info("Incoming message", {
                from: m.uid,
                to: uid,
                data: Array.from(m.data),
                connection: this.connection.uri
            });
            try {
                Log.info("sendMessages: calling getMessageNode for ", { uid:m.uid });
                const node = this.client.getMessageNode(m.uid);
                Log.info("sendMessages: got node, calling sendMessageFromServerToClient");
                node.sendMessageFromServerToClient(m.data);
                Log.info("sendMessages: after sendMessageFromServerToClient");
            } catch (e) {
                Log.error("sendMessages: exception while processing message", e as Error, { from: m.uid.toString() });
            }
        }

        return AFuture.completed();
    }


    /**
     * @method sendServerDescriptor
     * @description Handle server descriptor
     * @param {ServerDescriptor} v Server descriptor
     * @returns {AFuture} Completion future
     */
    sendServerDescriptor(v: ServerDescriptor): AFuture {
        Log.trace("sendServerDescriptor received", { component: "MyClientApiSafe", serverId: v.id });
        this.client.servers.put(v.id, v);
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
    sendClouds(clouds: UUIDAndCloud[]): AFuture {
        Log.trace("sendClouds received", { component: "MyClientApiSafe", count: clouds.length });
        clouds.forEach(c => this.sendCloud(c));
        this.client.flush();
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
 * @extends {ConnectionBase<ClientApiUnsafe, LoginApiRemote>}
 * @implements {ClientApiUnsafe}
 */
export class ConnectionWork extends ConnectionBase<ClientApiUnsafe, LoginApiRemote> implements ClientApiUnsafe {
    public readonly lastBackPing = new AtomicLong(Number.MAX_SAFE_INTEGER);
    public readonly ready = AFuture.make();
    readonly cryptoEngine: CryptoEngine;
    readonly authorizedApi: AuthorizedApiRemote;
    private readonly serverDescriptor: ServerDescriptor;
    private readonly inProcess = new AtomicReference<boolean>(false);
    basicStatus: boolean;
    lastWorkTime: number = 0;
    firstAuth: boolean = false;
    private _errorTimestamp: number = 0;

    protected override onConnectionStateChanged(isWritable: boolean): void {
        if (this.cryptoEngine == null) {
            Log.warn("onConnectionStateChanged called before cryptoEngine initialized, deferring flush");
            this.stateListeners.fire(isWritable);
            return;
        }
        if (isWritable) {
            Log.info("Network restored. Resetting auth state and forcing flush.", { uri: this.uri });
            this.firstAuth = false;
        } else {
            this.firstAuth = false;
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

        if (this.cryptoEngine == null) {
            Log.error("ConnectionWork: cryptoEngine is null for server " + s.id + ". Authentication will fail.");
        }
        this.serverDescriptor = s;
        this.basicStatus = false;
        this.authorizedApi = this.getRootApi()!.openLoginByAlias(client.getAlias()!, 
            () => new MyClientApiSafe(client, this), 
            (data: Uint8Array) => this.cryptoEngine.encrypt(data), 
            "loginByAlias");

        this.connectFuture.onError((err: Error) => {
            this._errorTimestamp = RU.time();
            this.ready.error(err);
        });
    }

    public flushBackgroundRequests(): void {
        const a = this.authorizedApi;
        const requestCloud = this.client.clouds.pollAllRequests();
        if (requestCloud.length > 0) a.resolveClouds(requestCloud as UUID[]);

        const requestServers = this.client.servers.pollAllRequests();
        if (requestServers.length > 0) {
            const serverIds = new Int16Array(requestServers.map((id: number) => id));
            a.resolverServers(serverIds as any);
        }

        const requestClientGroups = this.client.clientGroups.pollAllRequests();
        if (requestClientGroups.length > 0) a.requestAccessGroupsForClients(requestClientGroups as UUID[]);

        const requestAccessGroups = this.client.accessGroups.pollAllRequests();
        if (requestAccessGroups.length > 0) {
            const groupIds = requestAccessGroups.map((id: bigint) => id);
            a.requestAccessGroupsItems(groupIds);
        }

        const requestAllAccessed = this.client.allAccessedClients.pollAllRequests();
        if (requestAllAccessed.length > 0) a.requestAllAccessedClients(requestAllAccessed as UUID[]);

        const requestAccessCheck = this.client.accessCheckCache.pollAllRequests();
        if (requestAccessCheck.length > 0) a.requestAccessCheck(requestAccessCheck);

        for (const [groupId, uidsMap] of this.client.accessOperationsAdd) {
            const uidsToAdd = Array.from(uidsMap.keys()).map(k => UUID.fromString(k));
            if (uidsToAdd.length > 0) {
                Log.debug("Flushing ADD request for group " + groupId + ": " + uidsToAdd);
                a.addItemsToAccessGroup(groupId, uidsToAdd);
            }
        }
        for (const [groupId, uidsMap] of this.client.accessOperationsRemove) {
            const uidsToRemove = Array.from(uidsMap.keys()).map(k => UUID.fromString(k));
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

        const messagesForSend: Message[] = [];
        const messagesForSend2: Array<{data: Uint8Array, future: AFuture}> = [];
        const tasksForCancelMessages: Array<() => void> = [];

        for (const m of this.client.messageNodeMap.values()) {
            if (m.connectionsOut.has(this)) {
                const nodeMessages: Array<{data: Uint8Array, future: AFuture}> = [];
                let currentBatchSize = 0;
                const MAX_BATCH_BYTES = 512 * 1024;
                while (true) {
                    const entry = m.bufferOut.peekFirst();
                    if (!entry || (currentBatchSize + entry.data.length > MAX_BATCH_BYTES)) break;
                    const polled = m.bufferOut.pollFirst();
                    if (polled) {
                        nodeMessages.push(polled);
                        currentBatchSize += polled.data.length;
                    }
                }
                if (nodeMessages.length > 0) {
                    Log.debug("message send client to server: " + this.client.getUid() + " -> " + m.consumerUUID);
                    for (const v of nodeMessages) {
                        messagesForSend.push(new Message(m.consumerUUID, v.data));
                    }
                    messagesForSend2.push(...nodeMessages);
                    tasksForCancelMessages.push(() => {
                        m.bufferOut.addAll(nodeMessages);
                    });
                }
            }
        }

        const sendFuture = AFuture.make();
        sendFuture.to(() => {
            const uid = this.client.getUid();
            if (uid) this.client.priorityManager.promote(uid, this.getServerDescriptor().id);
            for (const v of messagesForSend2) {
                v.future.done();
            }
        }).onError(() => {
            for (const cancel of tasksForCancelMessages) {
                cancel();
            }
        });

        if (messagesForSend.length > 0) {
            const batcher = new MessageBatcher();
            for (const msg of messagesForSend) {
                batcher.add(msg.uid, msg.data);
            }
            batcher.flush(a);
        }

        if (!this.firstAuth) {
            this.firstAuth = true;
            a.ping(0n).to(() => {
                Log.debug("First ping response received. Marking connection ready.");
            }).onError((e: Error) => {
                Log.warn("First ping failed, will retry.", e);
                this.firstAuth = false;
            });
        }
    }

    sendSafeApiDataMulti(_backId: number, _data: LoginClientStream): AFuture {
        const err = new Error("UnsupportedOperationException: sendSafeApiDataMulti is not supported in TS client");
        Log.error("UnsupportedOperationException", err);
        return AFuture.ofThrow(err);
    }

    sendSafeApiData(data: LoginClientStream): AFuture {
        const future = AFuture.make();
        try {
            Log.info("Received sendSafeApiData stream", {
                component: "ConnectionWork",
                server: this.uri,
                dataLen: data.data.length
            });
            data.asIn()
                .convert((d: Uint8Array) => this.cryptoEngine.decrypt(d))
                .ctx(this.authorizedApi.getFastMetaContext())
                .accept();
            Log.info("sendSafeApiData stream processed successfully", { component: "ConnectionWork", server: this.uri });
            future.tryDone();
        } catch (e) {
            Log.error("Error processing incoming sendSafeApiData stream", e as Error, { component: "ConnectionWork", server: this.uri });
            future.error(e as Error);
        }
        return future;
    }

    public getServerDescriptor(): ServerDescriptor {
        return this.serverDescriptor;
    }

    public toAString(): string {
        const uri = getUriFromServerDescriptor(this.serverDescriptor, AetherCodec.WS) ?? `serverID=${this.serverDescriptor.id}`;
        return `work(${uri})`;
    }

    public setBasic(basic: boolean): void {
        this.basicStatus = basic;
    }

    public lifeTime(): number {
        return RU.time() - this.lastBackPing.get();
    }

    public scheduledWork(): void {
        const t = RU.time();
        if ((t - this.lastWorkTime < this.client.getPingTime() || !this.inProcess.compareAndSet(false, true))) return;
        this.lastWorkTime = t;
        const f = AFuture.make();
        f.timeout(2, () => {
            Log.warn("connection work flush 1 timeout");
        });
    }

}
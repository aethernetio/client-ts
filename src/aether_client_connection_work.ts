import { Connection, getUriFromServerDescriptor } from './aether_client_connection_base';
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
import { FastApiContext, FlushReport, RemoteApiFuture } from './aether_fastmeta';
import { CryptoEngine } from './aether_crypto';
import { RU } from './aether_utils';
import { MessageNode } from './aether_client_message';

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
            Log.trace("receive message", { to: uid?.toString(), from: m.uid.toString() });
            this.client.getMessageNode(m.uid).sendMessageFromServerToClient(m.data);
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

    protected override onConnectionStateChanged(isWritable: boolean): void {
        if (isWritable) {
            this.firstAuth = false;
            this.flush();
        } else {
            this.firstAuth = false;
        }
        this.stateListeners.fire(isWritable);
    }




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
        this.apiSafe = new MyClientApiSafe(client, this);

        this.remoteApiFutureAuth.addPermanent((a: AuthorizedApiRemote, f: AFuture) => {
            try {
                this.flushBackgroundRequests(a, f);
            } catch (e) {
                Log.error("Error in permanent remoteApiFutureAuth task", e as Error);
            }
        });

        this.apiSafeCtx = new FastApiContext();

        this.apiSafeCtx.flush = (report: any): void => {
            const loginApi = this.getRootApi();
            if (!loginApi) {
                report.abort();
                return;
            }

            const sendFuture = AFuture.make();
            // Сначала собираем все фоновые запросы (clouds, servers, groups) как в Java
            this.flushBackgroundRequests(this.apiSafeCtx.makeRemote(AuthorizedApi.META), sendFuture);
            
            // Выполняем все накопленные задачи AuthorizedApi
            this.remoteApiFutureAuth.executeAll(this.apiSafeCtx, sendFuture);
            
            const dataToSend = this.apiSafeCtx.remoteDataToArrayAsArray();

            // Если данных нет и фоновых запросов не было - завершаем
            if (dataToSend.length === 0) {
                report.done();
                return;
            }

            const loginStream = LoginStream.remoteBytes(this.cryptoEngine.encrypt.bind(this.cryptoEngine), dataToSend);
            const alias = this.client.getAlias();
            if (!alias) {
                report.abort();
                return;
            }

            loginApi.loginByAlias(alias, loginStream);
            loginApi.flush(report);
        };

        this.connectFuture.to(
            () => { }
        ).onError((err: Error) => {
            this._errorTimestamp = RU.time();
            this.ready.error(err);
        }).cancel();
        this.ready.cancel();
    }


    private flushBackgroundRequests(a: AuthorizedApiRemote, f: AFuture): void {
        const requestCloud = this.client.clouds.pollAllRequests();
        if (requestCloud.length > 0) a.resolveClouds(requestCloud);

        const requestServers = this.client.servers.pollAllRequests();
        if (requestServers.length > 0) a.resolverServers(Array.from(requestServers));

        const requestClientGroups = this.client.clientGroups.pollAllRequests();
        if (requestClientGroups.length > 0) a.requestAccessGroupsForClients(Array.from(requestClientGroups));

        const requestAccessGroups = this.client.accessGroups.pollAllRequests();
        if (requestAccessGroups.length > 0) a.requestAccessGroupsItems(Array.from(requestAccessGroups));

        const messagesForSend2: Array<{data: Uint8Array, future: AFuture}> = [];
        const MAX_BATCH_BYTES = 512 * 1024;
        let currentBatchSize = 0;

        for (const m of this.client.messageNodeMap.values()) {
            if (m.connectionsOut.has(this)) {
                while (true) {
                    const entry = m.bufferOut.peekFirst();
                    if (!entry || (currentBatchSize + entry.data.length > MAX_BATCH_BYTES)) break;
                    const polled = m.bufferOut.pollFirst();
                    if (polled) {
                        messagesForSend2.push(polled);
                        currentBatchSize += polled.data.length;
                    }
                }
            }
        }

        if (messagesForSend2.length > 0) {
            a.sendMessages(messagesForSend2.map(v => new Message(this.client.getUid()!, v.data)));
        }

        f.to(() => {
            const uid = this.client.getUid();
            if (uid) this.client.priorityManager.promote(uid, this.getServerDescriptor().id);
            messagesForSend2.forEach(v => v.future.done());
        }).onError(() => {
            // Rollback messages in reverse order to maintain sequence
            for (let i = messagesForSend2.length - 1; i >= 0; i--) {
                const item = messagesForSend2[i];
                for (const node of this.client.messageNodeMap.values()) {
                    if (node.connectionsOut.has(this)) {
                        node.bufferOut.addFirst(item);
                        break;
                    }
                }
            }
        });
    }
    /**
     * Aggregates pending requests into batches and sends them via AuthorizedApi.
     * Ported from ConnectionWork.java
     */
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
    public toAString(): string {
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

    public scheduledWork(): void {
        const t = RU.time();
        if ((t - this.lastWorkTime < this.client.getPingTime() || !this.inProcess.compareAndSet(false, true))) {
            return;
        }
        this.lastWorkTime = t;
        this.apiSafeCtx.flush(FlushReport.STUB);
        this.inProcess.set(false);
    }

    public flush(): void {
        if (!this.apiSafeCtx) return;
        if (!this.inProcess.compareAndSet(false, true)) return;
        this.lastWorkTime = RU.time();
        this.apiSafeCtx.flush(FlushReport.STUB);
        this.inProcess.set(false);
    }




}
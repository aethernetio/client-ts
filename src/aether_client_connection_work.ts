// =============================================================================================
// FILE: aether_client_connection_work.ts
// PURPOSE: Contains ConnectionWork and MyClientApiSafe implementation.
// DEPENDENCIES: aether_client_types.ts, aether_client_connection_base.ts, aether_client_core.ts (for AetherCloudClient)
// =============================================================================================
// Import necessary types from aether_client_types.ts (assuming it's in the same directory)
import {
    UUID, AtomicLong, AtomicReference, ARFutureWithFlag, ClientApiSafe, ClientApiUnsafe, ServerDescriptor,
    LoginApiRemote, FastApiContext, CryptoEngine, LoginStream, ClientApiException, AFuture, Message,
    AuthorizedApiRemote, AuthorizedApi, LoginApi, AetherCodec, Cloud, UUIDAndCloud, Log, LNode, RU,
    RemoteApiFuture, CryptoProviderFactory, KeyType, LoginClientStream, ClientStartException
} from './aether_client_types';
// Import types from other split files
import { Connection, getUriFromServerDescriptor } from './aether_client_connection_base';
import { AetherCloudClient } from './aether_client';
import { MessageEventListenerDefault } from './aether_client_message';


/**
 * Local implementation of the `ClientApiSafe` interface, handling messages received from the server.
 */
class MyClientApiSafe implements ClientApiSafe {
    private readonly client: AetherCloudClient;

    constructor(client: AetherCloudClient) {
        this.client = client;
    }

    changeParent(_uid: UUID): AFuture {
        Log.warn("MyClientApiSafe.changeParent not implemented");
        return AFuture.of();
    }

    changeAlias(_alias: UUID): AFuture {
        Log.warn("MyClientApiSafe.changeAlias not implemented");
        return AFuture.of();
    }

     newChild(uid: UUID): AFuture {
         // --- FIX: Correct logger usage ---
         using _l = Log.context({ ...this.client.logClientContext.data, component: "MyClientApiSafe" }); // Combine existing context data if needed
         Log.trace("newChild received", {uid: uid.toString()});
         // --- End Fix ---
         this.client.onNewChild.fire(uid);
         return AFuture.of();
     }


    sendMessages(msg: Message[]): AFuture {
         // --- FIX: Correct logger usage ---
         using _l = Log.context({ ...this.client.logClientContext.data, component: "MyClientApiSafe" });
         Log.trace("receive messages", {count: msg.length});
         // --- End Fix ---
        for (const m of msg) {
            const targetUid = m.getUid(); // In DTO, this is the ORIGINAL SENDER from SERVER's perspective for received messages
            const sourceUid = this.client.getUid(); // This client's UID
            Log.trace("receive message", {targetUid: targetUid?.toString(), sourceUid: sourceUid?.toString(), dataLen: m.getData().length});
            if (targetUid) {
                // When receiving, fire the onMessage event using the SENDER's UID.
                this.client.onMessage.fire(targetUid, m.getData());
            } else {
                 Log.warn("Received message with null target/sender UID");
            }
        }
        return AFuture.of();
    }

    sendServerDescriptor(v: ServerDescriptor): AFuture {
         // --- FIX: Correct logger usage ---
         using _l = Log.context({ ...this.client.logClientContext.data, component: "MyClientApiSafe" });
         Log.trace("sendServerDescriptor received", {serverId: v.id});
         // --- End Fix ---
        this.client.servers.putResolved(v.id, v);
        return AFuture.of();
    }

     sendServerDescriptors(serverDescriptors: ServerDescriptor[]): AFuture {
         // --- FIX: Correct logger usage ---
         using _l = Log.context({ ...this.client.logClientContext.data, component: "MyClientApiSafe" });
         Log.trace("sendServerDescriptors received", {count: serverDescriptors.length});
         // --- End Fix ---
         serverDescriptors.forEach(c => this.sendServerDescriptor(c));
         return AFuture.of();
     }


    sendCloud(uid: UUID, cloud: Cloud): AFuture {
         // --- FIX: Correct logger usage ---
         using _l = Log.context({ ...this.client.logClientContext.data, component: "MyClientApiSafe" });
         Log.trace("sendCloud received", {uid: uid.toString()});
         // --- End Fix ---
        this.client.setCloud(uid, cloud);
        return AFuture.of();
    }

     sendClouds(clouds: UUIDAndCloud[]): AFuture {
         // --- FIX: Correct logger usage ---
         using _l = Log.context({ ...this.client.logClientContext.data, component: "MyClientApiSafe" });
         Log.trace("sendClouds received", {count: clouds.length});
         // --- End Fix ---
         clouds.forEach(c => this.sendCloud(c.getUid(), c.getCloud()));
         return AFuture.of();
     }

    requestTelemetry(): AFuture {
        Log.warn("MyClientApiSafe.requestTelemetry not implemented");
        return AFuture.of();
    }
}


// --- ConnectionWork Implementation ---
/**
 * Represents a working connection to an Aether server after successful login/authentication.
 */
export class ConnectionWork extends Connection<ClientApiUnsafe, LoginApiRemote> implements ClientApiUnsafe { // <-- EXPORTED
    public readonly lastBackPing = new AtomicLong(Number.MAX_SAFE_INTEGER);
    public readonly ready = new ARFutureWithFlag<ConnectionWork>();
    readonly apiSafe: ClientApiSafe;
    readonly apiSafeCtx: FastApiContext;
    readonly cryptoEngine: CryptoEngine;
    readonly remoteApiFutureAuth = new RemoteApiFuture<AuthorizedApiRemote>(AuthorizedApi.META);
    private readonly serverDescriptor: ServerDescriptor;
    readonly inProcess = new AtomicReference<boolean>(false);
    basicStatus: boolean = false;
    lastWorkTime: number = 0;
    firstAuth: boolean = false;

    constructor(client: AetherCloudClient, s: ServerDescriptor) {
        const uri = getUriFromServerDescriptor(s, AetherCodec.WEBSOCKET);
        if (!uri) {
            throw new ClientStartException(`Could not determine a valid WebSocket URI for ServerDescriptor ID ${s.id}`);
        }
        super(client, uri, ClientApiUnsafe.META, LoginApi.META);
        this.cryptoEngine = client.getCryptoEngineForServer(s.id);
        this.serverDescriptor = s;
        this.apiSafe = new MyClientApiSafe(client);

        this.remoteApiFutureAuth.addPermanent((a: AuthorizedApiRemote, f: AFuture) => {
             // Combine context data correctly if needed, or just use client's context
             using _l = Log.context(client.logClientContext);
            try {
                this.flushBackgroundRequests(a, f);
            } catch (e) {
                 Log.error("Error in permanent remoteApiFutureAuth task (flushBackgroundRequests)", e as Error);
            }
        });

        this.apiSafeCtx = new FastApiContext();

        this.apiSafeCtx.flush = (sendFuture: AFuture): void => {
            // --- FIX: Correct Log.context call ---
            // Create a new data object merging parent context data (if available) and new data
            const parentData = this.client.logClientContext?.data ? Object.fromEntries(this.client.logClientContext.data) : {};
            using _l_flush = Log.context({ ...parentData, component: "ConnectionWorkFlush", uri: this.uri });
            // --- End Fix ---
            Log.trace("apiSafeCtx.flush initiated");

            if (this.remoteApiFutureAuth.isEmpty() && !client.clouds.isRequestsFor(this) && !client.servers.isRequestsFor(this)) {
                Log.trace("apiSafeCtx.flush: Nothing to send.");
                sendFuture.tryDone();
                return;
            }

            // Check if connection is ready before attempting to get root API
            if (!this.connectFuture.isDone()) {
                 Log.warn("apiSafeCtx.flush: Root connection not established yet. Skipping flush.");
                 sendFuture.error(new ClientApiException("Cannot flush apiSafeCtx: Root connection not ready."));
                 return;
            }
             if (this.connectFuture.isError()) {
                  Log.warn("apiSafeCtx.flush: Root connection failed. Skipping flush.");
                  sendFuture.error(new ClientApiException("Cannot flush apiSafeCtx: Root connection failed.", this.connectFuture.getError() ?? undefined));
                  return;
             }


            // Now safe to get the root API
            const loginApi = this.getRootApi(); // rootApi is set by the time connectFuture is done

            if (!loginApi) {
                const errMsg = "Root Login API is null even after connectFuture completed successfully during apiSafeCtx flush";
                Log.error(errMsg);
                sendFuture.error(new Error(errMsg)); // Should ideally not happen
                return;
            }

            this.remoteApiFutureAuth.executeAll(this.apiSafeCtx, sendFuture);
            const dataToSend = this.apiSafeCtx.remoteDataToArrayAsArray();

            if (dataToSend.length === 0) {
                Log.trace("apiSafeCtx.flush: No data generated by remoteApiFutureAuth.executeAll.");
                if(!sendFuture.isFinalStatus()) sendFuture.tryDone();
                return;
            }

            Log.trace(`apiSafeCtx.flush: Encrypting ${dataToSend.length} bytes for LoginStream`);
            const loginStream = LoginStream.fromRemoteBytes(
                this.cryptoEngine.encrypt.bind(this.cryptoEngine),
                dataToSend
            );

            const alias = this.client.getAlias();
            if (!alias) {
                 const errMsg = "Client alias is not set, cannot login via apiSafeCtx flush.";
                 Log.error(errMsg);
                sendFuture.error(new Error(errMsg));
                return;
            }

            Log.trace("apiSafeCtx.flush: Calling loginByAlias");
            loginApi.loginByAlias(alias, loginStream);
            // Flush the underlying connection (which uses the FastMetaClient's flush)
            loginApi.flush(sendFuture); // Pass the future along
             Log.trace("apiSafeCtx.flush: Root API flushed");
        };

        this.connectFuture.to(
() => {}, // No direct success handler here, wait for first ping
             (err: Error) => { this.ready.tryError(err); } // Propagate connection error to ready
        ).onCancel(() => { this.ready.cancel(); }); // Propagate cancellation
    }

    /**
     * Flushes background requests (cloud/server resolution, messages, ping) via the AuthorizedApi.
     */
    private flushBackgroundRequests(a: AuthorizedApiRemote, sendFuture: AFuture): void {
        using _l = Log.context({ component: "ConnectionWork", server: this.uri });
         try {
             // 1. Cloud Requests
             const requestCloud = this.client.clouds.getRequestsFor(null as any, this);
             if (requestCloud.length > 0) {
Log.trace("Flushing cloud requests", { count: requestCloud.length, uids: requestCloud.map((u: UUID) => u.toString()) });
                 a.resolverClouds(requestCloud);
             }

             // 2. Server Requests
             const requestServersObjects = this.client.servers.getRequestsFor(null as any, this);
             if (requestServersObjects.length > 0) {
                 Log.trace("Flushing server requests", { count: requestServersObjects.length, sids: requestServersObjects });
                 a.resolverServers(requestServersObjects);
             }

             // 3. Message Stream Logic
             let messagesToSend: Message[] | null = null;
             const futuresToComplete: AFuture[] = [];
             const messagesToRequeue: Map<string, { data: Uint8Array, future: AFuture }[]> = new Map();

             for (const m of this.client.messageNodeMap.values()) {
                 if (m.connectionsOut.has(this)) {
                     const messagesFromNode: { data: Uint8Array, future: AFuture }[] = [];
                     let msgEntry: { data: Uint8Array, future: AFuture } | undefined;

                     while ((msgEntry = m.bufferOut.poll()) !== undefined) {
                         messagesFromNode.push(msgEntry);
                     }

                     if (messagesFromNode.length > 0) {
                         const consumerUuidString = m.consumerUUID.toString();
                         Log.debug("Preparing messages client to server", {
                             uidFrom: this.client.getUid()?.toString(),
                             uidTo: consumerUuidString,
                             count: messagesFromNode.length });

                         if (messagesToSend === null) messagesToSend = [];

                         messagesFromNode.forEach(val => {
                             messagesToSend!.push(new Message(m.consumerUUID, val.data));
                             futuresToComplete.push(val.future);
                         });
                         // Temporarily store messages in case sending fails and they need requeueing
                         messagesToRequeue.set(consumerUuidString, messagesFromNode);
                     }
                 }
             }

             if (messagesToSend !== null && messagesToSend.length > 0) {
                 Log.trace(`Flushing ${messagesToSend.length} messages`);
                 const messageSendFuture: AFuture = a.sendMessages(messagesToSend);

                 messageSendFuture.to(
                     () => {
                          Log.trace("Message batch send successful");
                         futuresToComplete.forEach(f => f.tryDone());
                         messagesToRequeue.clear(); // Clear messages from requeue map on success
                     }).onError(
                     (err: Error) => {
                         Log.error("Failed to send message batch, requeuing", err);
                         messagesToRequeue.forEach((msgs, consumerUuidString) => {
                             const node = this.client.messageNodeMap.get(consumerUuidString);
                             if (node) {
                                 msgs.reverse().forEach(msg => node.bufferOut.add(msg));
                             }
                             msgs.forEach(msg => msg.future.error(err));
                         });
                         if (!sendFuture.isFinalStatus()) sendFuture.error(err);
                     }
                 ).onCancel(() => {
                      Log.warn("Message batch sending cancelled, requeuing");
                     messagesToRequeue.forEach((msgs, consumerUuidString) => {
                         const node = this.client.messageNodeMap.get(consumerUuidString);
                         if (node) {
                              msgs.reverse().forEach(msg => node.bufferOut.add(msg));
                         }
                         msgs.forEach(msg => msg.future.cancel());
                     });
                      if (!sendFuture.isFinalStatus()) sendFuture.cancel();
                 });
             }

             // 4. Ping Logic
             if (!this.firstAuth) {
                 Log.trace("Sending initial ping");
                 a.ping(0).to(
                     () => {
                         Log.trace("Initial ping successful");
                         this.firstAuth = true;
                         this.lastBackPing.set(RU.time());
                         if (!this.ready.isDone()) this.ready.tryDone(this);
                     }).onError(
                     (err: Error) => {
                         Log.warn("Initial ping failed", err);
                         if (!this.ready.isDone()) this.ready.tryError(err);
                         this.firstAuth = false; // Reset flag
                     }
                 );
             } else {
                 // Regular ping logic could go here
             }

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
     */
    sendSafeApiDataMulti(_backId: number, _data: LoginClientStream): AFuture {
        const err = new Error("UnsupportedOperationException: sendSafeApiDataMulti is not supported in TS client");
        Log.error("UnsupportedOperationException", err);
        return AFuture.ofThrow(err);
    }

    /**
     * Handles incoming `sendSafeApiData` calls, decrypts the stream, and processes commands.
     */
    sendSafeApiData(data: LoginClientStream): AFuture {
         const future = AFuture.make();
         using _l = Log.context({ component: "ConnectionWork", server: this.uri });
         try {
             Log.trace("Received sendSafeApiData stream", {dataLen: data.data.length});
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
     */
    public getServerDescriptor(): ServerDescriptor {
        return this.serverDescriptor;
    }

    /**
     * Returns a string representation of the connection.
     */
    override toString(): string {
        const uri = getUriFromServerDescriptor(this.serverDescriptor, AetherCodec.WEBSOCKET) ?? `serverID=${this.serverDescriptor.id}`;
        return `work(${uri})`;
    }

    /**
     * Sets the basic status flag (application-specific meaning).
     */
    public setBasic(basic: boolean): void {
        this.basicStatus = basic;
    }

    /**
     * Calculates the time elapsed since the last successful ping response.
     */
    public lifeTime(): number {
        return RU.time() - this.lastBackPing.get();
    }

    /**
     * Performs scheduled work, typically flushing the connection if needed and not already processing.
     */
    public scheduledWork(): void {
        const t = RU.time();
        const timeSinceLastPing = t - this.lastBackPing.get();
        const pingInterval = this.client.getPingTime();
        if ((t - this.lastWorkTime < pingInterval && timeSinceLastPing < pingInterval * 3) || !this.inProcess.compareAndSet(false, true)) {
             return;
        }

        using _l = Log.context({ component: "ConnectionWork", server: this.uri });
        Log.trace("Executing scheduledWork (flush)");
        this.lastWorkTime = t;
        const f = AFuture.make();
        f.addListener(() => this.inProcess.set(false));
        f.timeoutError(Math.max(5, pingInterval / 1000 * 2), `scheduledWork flush timeout on ${this.uri}`);

        this.apiSafeCtx.flush(f);
    }

    /**
     * Immediately attempts to flush the connection if not already processing.
     */
    public flush(): void {
        if (!this.inProcess.compareAndSet(false, true)) {
             Log.trace("Flush skipped: Already in process");
            return;
        }

        const rootFuture = this.getRootApiFuture();
        // --- FIX: Use public methods to check status ---
        const isReady = rootFuture.isDone();
        const isFailed = rootFuture.isError();
        const isCancelled = rootFuture.isCanceled();
        if (!isReady || isFailed || isCancelled || !this.rootApi) {
             Log.warn("Flush skipped: Root API not available or connection closed/errored.", {uri: this.uri, isReady, isFailed, isCancelled, hasRootApi: !!this.rootApi});
             this.inProcess.set(false);
             // Optionally trigger reconnect or cleanup here
             return;
        }
        // --- End Fix ---

        using _l = Log.context({ component: "ConnectionWork", server: this.uri });
        Log.trace("Executing explicit flush");
        this.lastWorkTime = RU.time();
        const f = AFuture.make();
        f.addListener(() => this.inProcess.set(false));
        f.timeoutError(5, `explicit flush timeout on ${this.uri}`); // Shorter timeout

        this.apiSafeCtx.flush(f);
    }
}
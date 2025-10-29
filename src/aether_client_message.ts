// FILE: aether_client_message.ts
// PURPOSE: Contains MessageNode, MessageEventListener, and MessageEventListenerDefault.
// DEPENDENCIES: aether_client_types.ts, aether_client_connection_work.ts, aether_client_core.ts (for AetherCloudClient)
// =============================================================================================
import {
    UUID, URI, ConcurrentLinkedQueue_C, AFuture, EventConsumer, Cloud, Log, LNode, Message, AuthorizedApiRemote
} from './aether_client_types';
import { ServerDescriptor } from './aether_client_types';
import type { ConnectionWork } from './aether_client_connection_work';
import { AetherCloudClient } from './aether_client';


// --- MessageEventListener Interface & Default Implementation ---
export interface MessageEventListener {
    setConsumerCloud(messageNode: MessageNode, cloud: Cloud): void;
    onResolveConsumerServer(messageNode: MessageNode, serverDescriptor: ServerDescriptor): void;
    onResolveConsumerConnection(messageNode: MessageNode, connection: ConnectionWork): void;
}

export const MessageEventListenerDefault: MessageEventListener = {
    setConsumerCloud: (messageNode: MessageNode, cloud: Cloud) => {
        using _l = Log.context({ component: "MsgEvListenerDefault", uidTo: messageNode.consumerUUID.toString() });
        Log.trace("setConsumerCloud called");
        if (cloud?.data && cloud.data.length > 0) {
            messageNode.addConsumerServerOutById(cloud.data[0]);
        } else {
            Log.warn("Received null or empty cloud, cannot establish connection.", { cloud });
            let msg;
            while((msg = messageNode.bufferOut.poll()) !== undefined) {
                 msg.future.error(new Error(`Could not resolve cloud/server for consumer ${messageNode.consumerUUID}`));
            }
        }
    },
    onResolveConsumerServer: (messageNode: MessageNode, serverDescriptor: ServerDescriptor) => {
        using _l = Log.context({ component: "MsgEvListenerDefault", uidTo: messageNode.consumerUUID.toString() });
        Log.trace("onResolveConsumerServer called", { serverId: serverDescriptor.id });
        messageNode.addConsumerServerOutByDescriptor(serverDescriptor);
    },
    onResolveConsumerConnection: (messageNode: MessageNode, connection: ConnectionWork) => {
         using _l = Log.context({ component: "MsgEvListenerDefault", uidTo: messageNode.consumerUUID.toString() });
        Log.trace("onResolveConsumerConnection called", { uri: connection.uri });
        messageNode.addConsumerConnectionOut(connection);
    },
};

// --- MessageNode Implementation ---
export class MessageNode {
    public readonly connectionsOut: Set<ConnectionWork> = new Set();
    public readonly bufferOut = new ConcurrentLinkedQueue_C<{ data: Uint8Array, future: AFuture }>();
    public readonly bufferIn = new EventConsumer<{ data: Uint8Array }>();
    public readonly consumerUUID: UUID;
    public readonly client: AetherCloudClient;
    public strategy: MessageEventListener;

    constructor(client: AetherCloudClient, consumerId: UUID, strategy: MessageEventListener) {
        using _l = Log.context({
             component: "MessageNode",
             uidFrom: client.getUid()?.toString() ?? "N/A",
             uidTo: consumerId.toString()
        });
        Log.trace("Creating MessageNode");
        this.client = client;
        this.consumerUUID = consumerId;
        this.strategy = strategy;

        this.client.getCloud(consumerId).to(
            (c: Cloud | null) => { // Explicit type
                if (c) {
                    try { this.strategy.setConsumerCloud(this, c); }
                    catch(e) { Log.error("Error in strategy.setConsumerCloud", e as Error); }
                } else {
                    Log.warn("Consumer cloud resolved to null");
                    let msg;
                    while((msg = this.bufferOut.poll()) !== undefined) {
                         msg.future.error(new Error(`Could not resolve cloud for consumer ${this.consumerUUID}`));
                    }
                }
            }).onError( // <-- Use onError
            (err: Error) => { // <-- Explicit Error type
                 Log.error("Failed to get consumer cloud in MessageNode constructor", err);
                 let msg;
                 while((msg = this.bufferOut.poll()) !== undefined) {
                      msg.future.error(new Error(`Failed to get cloud for consumer ${this.consumerUUID}: ${err.message}`));
                 }
            }
        );
    }

    public send(data: Uint8Array, future: AFuture): AFuture {
        const message = { data, future };
        this.bufferOut.add(message);
        Log.trace("MessageNode: Added message to bufferOut");

        let sentImmediately = false;
        this.connectionsOut.forEach(conn => {
             if (conn.ready.isDone() && !conn.ready.isError()) {
                if (this.trySendDirectly(conn, message)) {
                    sentImmediately = true;
                }
             } else {
                 Log.trace("MessageNode: Connection not fully ready, message remains buffered");
                 // --- FIX: Use onError and add Error type ---
                 conn.connectFuture.onError((err: Error) => Log.warn("Connection future failed while sending", err));
                 // --- End Fix ---
             }
        });

        if (sentImmediately) {
             Log.trace("MessageNode: Message queued for immediate send via an existing connection.");
        } else if (this.connectionsOut.size > 0) {
            Log.trace("MessageNode: Message buffered, waiting for connection flush or readiness.");
        } else if (this.connectionsOut.size === 0) {
            Log.trace("MessageNode: Message buffered, no connections yet. Cloud resolution should trigger connection attempt.");
        }
        return future;
    }

    private trySendDirectly(conn: ConnectionWork, message: { data: Uint8Array, future: AFuture }): boolean {
        using _l = Log.context({
             component: "MessageNode",
             uidFrom: this.client.getUid()?.toString() ?? "N/A",
             uidTo: this.consumerUUID.toString(),
             server: conn.uri
        });
        try {
            if (conn.ready.isDone() && !conn.ready.isError()) {
                conn.remoteApiFutureAuth.run((api: AuthorizedApiRemote, _sendFuture: AFuture) => {
                    Log.trace("MessageNode: Queuing message via remoteApiFutureAuth.run");
                    api.sendMessage(new Message(this.consumerUUID, message.data))
                       .to(
                            () => { message.future.tryDone(); }
                       )
                       .onError(
                            // --- FIX: Add explicit Error type ---
                            (err: Error) => { message.future.error(err); }
                            // --- End Fix ---
                       )
                       .onCancel(() => { message.future.cancel(); });
                });
                Log.trace("MessageNode: Message successfully queued via AuthorizedApi");
                conn.flush();
                return true;
            } else {
                 Log.trace("MessageNode: Connection not ready/authenticated, skipping direct send.");
                 return false;
            }
        } catch (e) {
            Log.error("Error queueing message for direct send", e as Error);
            message.future.error(e as Error);
            return false;
        }
    }

    public addConsumerServerOutById(serverId: number): void {
         using _l = Log.context({ component: "MessageNode", uidTo: this.consumerUUID.toString() });
        this.client.getServer(serverId).to(
            (sd: ServerDescriptor | null) => {
                 if (sd) {
                     try { this.strategy.onResolveConsumerServer(this, sd); }
                     catch(e) { Log.error("Error in strategy.onResolveConsumerServer", e as Error, { serverId }); }
                 } else { Log.warn("Server descriptor resolved to null", { serverId }); }
            }).onError(
            (err: Error) => Log.error("Failed to resolve server ID in addConsumerServerOutById", err, { serverId })
        );
    }

    public addConsumerServerOutByDescriptor(serverDescriptor: ServerDescriptor): void {
         using _l = Log.context({ component: "MessageNode", uidTo: this.consumerUUID.toString() });
         try {
             const connection = this.client.getConnection(serverDescriptor);
             this.strategy.onResolveConsumerConnection(this, connection);
         } catch(e) {
              Log.error("Error resolving/passing connection in addConsumerServerOutByDescriptor", e as Error);
         }
    }

    public addConsumerConnectionOut(conn: ConnectionWork): void {
        using _l = Log.context({ component: "MessageNode", uidTo: this.consumerUUID.toString(), server: conn.uri });
        if (this.connectionsOut.has(conn)) {
             Log.trace("Connection already added, skipping.");
             return;
        }
        this.connectionsOut.add(conn);
        Log.debug("Added outgoing connection for messages");

        conn.ready.to(() => {
             Log.trace("Connection became ready, attempting to send buffered messages.", { bufferSize: this.bufferOut.length });
             const requeue: { data: Uint8Array, future: AFuture }[] = [];
             let message: { data: Uint8Array, future: AFuture } | undefined;
             let sentCount = 0;
             while ((message = this.bufferOut.poll()) !== undefined) {
                 if (this.trySendDirectly(conn, message)) {
                     sentCount++;
                 } else {
                     requeue.push(message);
                     Log.warn("Failed to send message via newly ready connection, requeuing.");
                     break;
                 }
             }
             while ((message = this.bufferOut.poll()) !== undefined) {
                 requeue.push(message);
             }
             if (requeue.length > 0) {
                 Log.warn(`Requeued ${requeue.length} messages after attempting send on ready connection.`);
                 requeue.reverse().forEach(msg => this.bufferOut.add(msg));
             }
             if (sentCount > 0) {
                 Log.trace(`Sent ${sentCount} buffered messages via connection ${conn.uri}`);
             }
        })
        .onError((err: Error) => Log.warn("Error waiting for connection readiness in addConsumerConnectionOut", err)); // Add Error type

        conn.connectFuture.onError((err: Error) => { // Add Error type
            Log.warn("Connection failed after being added to MessageNode, removing.", err);
            this.removeConsumerConnectionOut(conn);
        });
    }


    public removeConsumerConnectionOut(conn: ConnectionWork): void {
         using _l = Log.context({ component: "MessageNode", uidTo: this.consumerUUID.toString(), server: conn.uri });
        if(this.connectionsOut.delete(conn)) {
            Log.trace("Removed outgoing connection");
            if (this.connectionsOut.size === 0 && this.bufferOut.length > 0) {
                Log.warn("Last connection removed, triggering cloud resolution again for buffered messages.");
                this.client.getCloud(this.consumerUUID).to( (c: Cloud | null) => { if (c) this.strategy.setConsumerCloud(this, c); });
            }
        }
    }

    public sendMessageFromServerToClient(data: Uint8Array): void {
         using _l = Log.context({ component: "MessageNode", uidTo: this.consumerUUID.toString() });
        Log.trace("Received message from server");
        this.bufferIn.fire({ data });
    }

    public getConsumerUUID(): UUID { return this.consumerUUID; }
}
// FILE: aether_client_message.ts
// PURPOSE: Contains MessageNode, MessageEventListener, and MessageEventListenerDefault.
// DEPENDENCIES: aether_client_types.ts, aether_client_connection_work.ts, aether_client_core.ts (for AetherCloudClient)
// =============================================================================================
import {
    UUID, ConcurrentLinkedQueue_C, AFuture, EventConsumer, Cloud, Log, Message, AuthorizedApiRemote
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
        Log.trace("setConsumerCloud called", { component: "MsgEvListenerDefault", uidTo: messageNode.consumerUUID.toString() });
        if (cloud?.data && cloud.data.length > 0) {
            messageNode.addConsumerServerOutById(cloud.data[0]);
        } else {
            Log.warn("Received null or empty cloud, cannot establish connection.", { cloud });
            let msg;
            while ((msg = messageNode.bufferOut.poll()) !== undefined) {
                msg.future.error(new Error(`Could not resolve cloud/server for consumer ${messageNode.consumerUUID}`));
            }
        }
    },
    onResolveConsumerServer: (messageNode: MessageNode, serverDescriptor: ServerDescriptor) => {
        Log.trace("onResolveConsumerServer called", { component: "MsgEvListenerDefault", uidTo: messageNode.consumerUUID.toString(), serverId: serverDescriptor.id });
        messageNode.addConsumerServerOutByDescriptor(serverDescriptor);
    },
    onResolveConsumerConnection: (messageNode: MessageNode, connection: ConnectionWork) => {
        Log.trace("onResolveConsumerConnection called", { component: "MsgEvListenerDefault", uidTo: messageNode.consumerUUID.toString(), uri: connection.uri });
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
        Log.trace("Creating MessageNode", {
            component: "MessageNode",
            uidFrom: client.getUid()?.toString() ?? "N/A",
            uidTo: consumerId.toString()
        });
        this.client = client;
        this.consumerUUID = consumerId;
        this.strategy = strategy;

        this.client.getCloud(consumerId).to(
            (c: Cloud | null) => { // Explicit type
                if (c) {
                    try { this.strategy.setConsumerCloud(this, c); }
                    catch (e) { Log.error("Error in strategy.setConsumerCloud", e as Error); }
                } else {
                    Log.warn("Consumer cloud resolved to null");
                    let msg;
                    while ((msg = this.bufferOut.poll()) !== undefined) {
                        msg.future.error(new Error(`Could not resolve cloud for consumer ${this.consumerUUID}`));
                    }
                }
            }).onError( // <-- Use onError
                (err: Error) => { // <-- Explicit Error type
                    Log.error("Failed to get consumer cloud in MessageNode constructor", err);
                    let msg;
                    while ((msg = this.bufferOut.poll()) !== undefined) {
                        msg.future.error(new Error(`Failed to get cloud for consumer ${this.consumerUUID}: ${err.message}`));
                    }
                }
            );
    }

    public send(data: Uint8Array, future: AFuture): AFuture {
        const message = { data, future };
        this.bufferOut.add(message);
        Log.trace("MessageNode: Added message to bufferOut");

        // --- FIX: Removed immediate send logic ---
        // The logic block that iterated connectionsOut and called trySendDirectly
        // has been removed to prevent double-sends.
        // The ConnectionWork.flushBackgroundRequests (now flushMessageQueue)
        // is solely responsible for polling this bufferOut queue and sending.

        if (this.connectionsOut.size === 0) {
            Log.trace("MessageNode: Message buffered, no connections yet. Cloud resolution should trigger connection attempt.");
        }
        return future;
    }

    private trySendDirectly(conn: ConnectionWork, message: { data: Uint8Array, future: AFuture }): boolean {
        try {
            if (conn.ready.isDone() && !conn.ready.isError()) {
                conn.remoteApiFutureAuth.run((api: AuthorizedApiRemote) => {
                    Log.trace("MessageNode: Queuing message via remoteApiFutureAuth.run", {
                        component: "MessageNode",
                        uidFrom: this.client.getUid()?.toString() ?? "N/A",
                        uidTo: this.consumerUUID.toString(),
                        server: conn.uri
                    });
                    api.sendMessage(new Message(this.consumerUUID, message.data))
                        .to(
                            () => { message.future.tryDone(); }
                        )
                        .onError(
                            // --- FIX: Add explicit Error type ---
                            (err: Error) => { message.future.error(err); }
                        )
                        .onCancel(() => { message.future.cancel(); });
                });
                Log.trace("MessageNode: Message successfully queued via AuthorizedApi", { component: "MessageNode", server: conn.uri });
                conn.flush();
                return true;
            } else {
                Log.trace("MessageNode: Connection not ready/authenticated, skipping direct send.", { component: "MessageNode", server: conn.uri });
                return false;
            }
        } catch (e) {
            Log.error("Error queueing message for direct send", e as Error, {
                component: "MessageNode",
                uidTo: this.consumerUUID.toString(),
                server: conn.uri
            });
            message.future.error(e as Error);
            return false;
        }
    }

    public addConsumerServerOutById(serverId: number): void {
        this.client.getServer(serverId).to(
            (sd: ServerDescriptor | null) => {
                if (sd) {
                    try { this.strategy.onResolveConsumerServer(this, sd); }
                    catch (e) { Log.error("Error in strategy.onResolveConsumerServer", e as Error, { serverId }); }
                } else { Log.warn("Server descriptor resolved to null", { serverId }); }
            }).onError(
                (err: Error) => Log.error("Failed to resolve server ID in addConsumerServerOutById", err, { serverId })
            );
    }

    public addConsumerServerOutByDescriptor(serverDescriptor: ServerDescriptor): void {
        try {
            const connection = this.client.getConnection( serverDescriptor);
            this.strategy.onResolveConsumerConnection(this, connection);
        } catch (e) {
            Log.error("Error resolving/passing connection in addConsumerServerOutByDescriptor", e as Error);
        }
    }

    public addConsumerConnectionOut(conn: ConnectionWork): void {
        if (this.connectionsOut.has(conn)) {
            Log.trace("Connection already added, skipping.", { component: "MessageNode", uidTo: this.consumerUUID.toString(), server: conn.uri });
            return;
        }
        this.connectionsOut.add(conn);
        Log.debug("Added outgoing connection for messages", { component: "MessageNode", uidTo: this.consumerUUID.toString(), server: conn.uri });

        conn.ready.to(() => {
            Log.trace("Connection became ready, attempting to send buffered messages.", { component: "MessageNode", bufferSize: this.bufferOut.length });
            const requeue: { data: Uint8Array, future: AFuture }[] = [];
            let message: { data: Uint8Array, future: AFuture } | undefined;
            let sentCount = 0;
            while ((message = this.bufferOut.poll()) !== undefined) {
                if (this.trySendDirectly(conn, message)) {
                    sentCount++;
                } else {
                    requeue.push(message);
                    Log.warn("Failed to send message via newly ready connection, requeuing.", { component: "MessageNode" });
                    break;
                }
            }
            while ((message = this.bufferOut.poll()) !== undefined) {
                requeue.push(message);
            }
            if (requeue.length > 0) {
                Log.warn(`Requeued ${requeue.length} messages after attempting send on ready connection.`, { component: "MessageNode" });
                requeue.reverse().forEach(msg => this.bufferOut.add(msg));
            }
            if (sentCount > 0) {
                Log.trace(`Sent ${sentCount} buffered messages via connection ${conn.uri}`, { component: "MessageNode" });
            }
        })
            .onError((err: Error) => Log.warn("Error waiting for connection readiness in addConsumerConnectionOut", err)); // Add Error type

        conn.connectFuture.onError((err: Error) => { // Add Error type
            Log.warn("Connection failed after being added to MessageNode, removing.",  { component: "MessageNode" });
            this.removeConsumerConnectionOut(conn);
        });
    }


    public removeConsumerConnectionOut(conn: ConnectionWork): void {
        if (this.connectionsOut.delete(conn)) {
            Log.trace("Removed outgoing connection", { component: "MessageNode", uidTo: this.consumerUUID.toString(), server: conn.uri });
            if (this.connectionsOut.size === 0 && this.bufferOut.length > 0) {
                Log.warn("Last connection removed, triggering cloud resolution again for buffered messages.", { component: "MessageNode" });
                this.client.getCloud(this.consumerUUID).to((c: Cloud | null) => { if (c) this.strategy.setConsumerCloud(this, c); });
            }
        }
    }

    public sendMessageFromServerToClient(data: Uint8Array): void {
        Log.trace("Received message from server", { component: "MessageNode", uidTo: this.consumerUUID.toString() });
        this.bufferIn.fire({ data });
    }

    public getConsumerUUID(): UUID { return this.consumerUUID; }
}
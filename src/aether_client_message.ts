// FILE: aether_client_message.ts
// PURPOSE: Contains MessageNode, MessageEventListener, and MessageEventListenerDefault.
// DEPENDENCIES: aether_client_types.ts, aether_client_connection_work.ts, aether_client_core.ts (for AetherCloudClient)
// =============================================================================================
import type { ConnectionWork } from './aether_client_connection_work';
import { AetherCloudClient } from './aether_client';
import { AuthorizedApiRemote, Cloud, Message, ServerDescriptor } from './aether_api';
import { Log } from './aether_logging';
import { AFuture, EventConsumer } from './aether_future';
import { UUID } from './aether_types';
import { Queue } from './aether_utils';


// --- MessageEventListener Interface & Default Implementation ---

/**
 * @interface MessageEventListener
 * @description Defines the strategy for resolving connections for a MessageNode.
 */
export interface MessageEventListener {
    /**
     * @description Called when the consumer's Cloud object is resolved.
     * @param {MessageNode} messageNode The node managing the connection.
     * @param {Cloud} cloud The resolved cloud data.
     */
    setConsumerCloud(messageNode: MessageNode, cloud: Cloud): void;

    /**
     * @description Called when a ServerDescriptor (server details) is resolved from a server ID.
     * @param {MessageNode} messageNode The node managing the connection.
     * @param {ServerDescriptor} serverDescriptor The resolved server descriptor.
     */
    onResolveConsumerServer(messageNode: MessageNode, serverDescriptor: ServerDescriptor): void;

    /**
     * @description Called when a ConnectionWork (active connection) is resolved from a ServerDescriptor.
     * @param {MessageNode} messageNode The node managing the connection.
     * @param {ConnectionWork} connection The resolved, active work connection.
     */
    onResolveConsumerConnection(messageNode: MessageNode, connection: ConnectionWork): void;
}

/**
 * @description Default implementation of the connection resolution strategy.
 */
export const MessageEventListenerDefault: MessageEventListener = {
    /**
     * @description Default strategy for handling a resolved Cloud.
     * It attempts to resolve the first server ID listed in the cloud data.
     */
    setConsumerCloud: (messageNode: MessageNode, cloud: Cloud) => {
        Log.trace("setConsumerCloud called", { component: "MsgEvListenerDefault", uidTo: messageNode.consumerUUID.toString() });
        if (cloud?.data?.length > 0) {
            // Attempt to connect using the first server ID in the cloud
            messageNode.addConsumerServerOutById(cloud.data[0]);
        } else {
            // No servers found for this consumer
            Log.warn("Received null or empty cloud, cannot establish connection.", { cloud });
            let msg;
            // Error out any messages that were buffered waiting for this
            while ((msg = messageNode.bufferOut.poll()) !== undefined) {
                msg.future.error(new Error(`Could not resolve cloud/server for consumer ${messageNode.consumerUUID}`));
            }
        }
    },

    /**
     * @description Default strategy for handling a resolved ServerDescriptor.
     * It attempts to get or create an active connection using the descriptor.
     */
    onResolveConsumerServer: (messageNode: MessageNode, serverDescriptor: ServerDescriptor) => {
        Log.trace("onResolveConsumerServer called", { component: "MsgEvListenerDefault", uidTo: messageNode.consumerUUID.toString(), serverId: serverDescriptor.id });
        messageNode.addConsumerServerOutByDescriptor(serverDescriptor);
    },

    /**
     * @description Default strategy for handling a resolved ConnectionWork.
     * It adds the connection to the MessageNode's set of outgoing connections.
     */
    onResolveConsumerConnection: (messageNode: MessageNode, connection: ConnectionWork) => {
        Log.trace("onResolveConsumerConnection called", { component: "MsgEvListenerDefault", uidTo: messageNode.consumerUUID.toString(), uri: connection.uri });
        messageNode.addConsumerConnectionOut(connection);
    },
};

/**
 * @class MessageNode
 * @description Manages message buffers and connection resolution for a specific peer (consumer).
 */
export class MessageNode {
    /**
     * @description The set of active connections that can be used to send messages to the consumer.
     */
    public readonly connectionsOut: Set<ConnectionWork> = new Set();

    /**
     * @description Queue for outgoing messages waiting to be sent.
     */
    public readonly bufferOut = new Queue<{ data: Uint8Array, future: AFuture }>();

    /**
     * @description Event emitter for incoming messages received from this consumer.
     */
    public readonly bufferIn = new EventConsumer<{ data: Uint8Array }>();

    /**
     * @description The UUID of the peer this node communicates with.
     */
    public readonly consumerUUID: UUID;

    /**
     * @description Reference to the main AetherCloudClient.
     */
    public readonly client: AetherCloudClient;

    /**
     * @description The connection resolution strategy instance.
     */
    public strategy: MessageEventListener;

    /**
     * @constructor
     * @param {AetherCloudClient} client The main client instance.
     * @param {UUID} consumerId The UUID of the peer.
     * @param {MessageEventListener} strategy The strategy for resolving connections.
     */
    constructor(client: AetherCloudClient, consumerId: UUID, strategy: MessageEventListener) {
        Log.trace("Creating MessageNode", {
            component: "MessageNode",
            uidFrom: client.getUid()?.toString() ?? "N/A",
            uidTo: consumerId.toString()
        });
        this.client = client;
        this.consumerUUID = consumerId;
        this.strategy = strategy;

        // Start the connection resolution process by fetching the consumer's cloud
        this.client.getCloud(consumerId).to(
            (c: Cloud | null) => {
                if (c) {
                    try { this.strategy.setConsumerCloud(this, c); }
                    catch (e) { Log.error("Error in strategy.setConsumerCloud", e as Error); }
                } else {
                    // Cloud resolution failed or returned null
                    Log.warn("Consumer cloud resolved to null");
                    let msg;
                    // Error out any buffered messages
                    while ((msg = this.bufferOut.poll()) !== undefined) {
                        msg.future.error(new Error(`Could not resolve cloud for consumer ${this.consumerUUID}`));
                    }
                }
            }).onError(
                (err: Error) => {
                    // Failed to even request the cloud
                    Log.error("Failed to get consumer cloud in MessageNode constructor", err);
                    let msg;
                    while ((msg = this.bufferOut.poll()) !== undefined) {
                        msg.future.error(new Error(`Failed to get cloud for consumer ${this.consumerUUID}: ${err.message}`));
                    }
                }
            );
    }

    /**
     * @description Adds an outgoing message to the buffer.
     * The message will be sent by a ConnectionWork's flush cycle.
     * @param {Uint8Array} data The message payload.
     * @param {AFuture} future The future to complete when the message is successfully sent or fails.
     * @returns {AFuture} The same future that was passed in.
     */
    public send(data: Uint8Array, future: AFuture): AFuture {
        const message = { data, future };
        this.bufferOut.add(message);
        Log.trace("MessageNode: Added message to bufferOut");

        // NOTE: Direct sending logic was removed.
        // ConnectionWork.flushMessageQueue is now solely responsible
        // for polling this bufferOut queue and sending.

        if (this.connectionsOut.size === 0) {
            Log.trace("MessageNode: Message buffered, no connections yet. Cloud resolution should trigger connection attempt.");
        }
        return future;
    }

    // --- private trySendDirectly method was removed ---
    // This logic is now handled entirely by ConnectionWork.flushMessageQueue

    /**
     * @description Attempts to resolve a ServerDescriptor by its ID.
     * @param {number} serverId The server's ID.
     */
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

    /**
     * @description Attempts to resolve a ConnectionWork from a ServerDescriptor.
     * @param {ServerDescriptor} serverDescriptor The server's descriptor.
     */
    public addConsumerServerOutByDescriptor(serverDescriptor: ServerDescriptor): void {
        try {
            // Get or create the active connection for this server
            const connection = this.client.getConnection(serverDescriptor);
            this.strategy.onResolveConsumerConnection(this, connection);
        } catch (e) {
            Log.error("Error resolving/passing connection in addConsumerServerOutByDescriptor", e as Error);
        }
    }

    /**
     * @description Registers an active connection as a valid route for sending messages.
     * @param {ConnectionWork} conn The active connection.
     */
    public addConsumerConnectionOut(conn: ConnectionWork): void {
            // This logic matches the updated Java version.
            // We just add the connection to the Set.
            // The ConnectionWork's flushMessageQueue will poll this node's buffer.
            if (this.connectionsOut.has(conn)) {
                Log.trace("Connection already added, skipping.", { component: "MessageNode", uidTo: this.consumerUUID.toString(), server: conn.uri });
                return;
            }
            this.connectionsOut.add(conn);
            Log.debug("Added outgoing connection for messages", { component: "MessageNode", uidTo: this.consumerUUID.toString(), server: conn.uri });
    }

    /**
     * @description Removes a connection (e.g., if it disconnects).
     * @param {ConnectionWork} conn The connection to remove.
     */
    public removeConsumerConnectionOut(conn: ConnectionWork): void {
        if (this.connectionsOut.delete(conn)) {
            Log.trace("Removed outgoing connection", { component: "MessageNode", uidTo: this.consumerUUID.toString(), server: conn.uri });
            // If this was the last connection and we still have messages,
            // try to resolve the cloud again to find a new connection.
            if (this.connectionsOut.size === 0 && this.bufferOut.size() > 0) {
                Log.warn("Last connection removed, triggering cloud resolution again for buffered messages.", { component: "MessageNode" });
                this.client.getCloud(this.consumerUUID).to((c: Cloud | null) => { if (c) this.strategy.setConsumerCloud(this, c); });
            }
        }
    }

    /**
     * @description Called by ConnectionWork when an incoming message is received from this peer.
     * @param {Uint8Array} data The incoming message payload.
     */
    public sendMessageFromServerToClient(data: Uint8Array): void {
        Log.trace("Received message from server", { component: "MessageNode", uidTo: this.consumerUUID.toString() });
        this.bufferIn.fire({ data });
    }

    /**
     * @description Gets the UUID of the peer.
     * @returns {UUID} The consumer's UUID.
     */
    public getConsumerUUID(): UUID { return this.consumerUUID; }
}
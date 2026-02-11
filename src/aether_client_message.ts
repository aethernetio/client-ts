// FILE: aether_client_message.ts (V2 - С МЕТОДАМИ toApi)
// =============================================================================================
import type { ConnectionWork } from './aether_client_connection_work';
import { AetherCloudClient } from './aether_client';
import { AuthorizedApiRemote, Cloud, Message, ServerDescriptor } from './aether_api';
import { Log } from './aether_logging';
import { AFuture, ARFuture, EventConsumer } from './aether_future';
import { AConsumer, AFunction, UUID } from './aether_types';
import { Queue } from './aether_utils';

// --- [НОВЫЕ ИМПОРТЫ] ---
// Эти импорты нужны для методов toApi
import {
    FastApiContext,
    FastApiContextLocal,
    FastFutureContext,
    FastMetaApi,
    FlushReport,
} from './aether_fastmeta';
import { DataInOutStatic } from './aether_datainout';
// -----------------------

/**
 * @interface MessageEventListener
 * (Без изменений)
 */
export interface MessageEventListener {
    setConsumerCloud(messageNode: MessageNode, cloud: Cloud): void;
    onResolveConsumerServer(messageNode: MessageNode, serverDescriptor: ServerDescriptor): void;
    onResolveConsumerConnection(messageNode: MessageNode, connection: ConnectionWork): void;
}

/**
 * @description Default implementation of the connection resolution strategy.
 * (Без изменений)
 */
export const MessageEventListenerDefault: MessageEventListener = {
    setConsumerCloud: (messageNode: MessageNode, cloud: Cloud) => {
        // ... (логика без изменений) ...
        Log.debug("Strategy: setConsumerCloud called", { component: "MsgEvListenerDefault", uidTo: messageNode.consumerUUID.toAString() });
        if (cloud?.data?.length > 0) {
            Log.debug("Strategy: Cloud has servers. Requesting server descriptor...", { component: "MsgEvListenerDefault", serverId: cloud.data[0] });
            messageNode.addConsumerServerOutById(cloud.data[0]);
        } else {
            Log.warn("Received null or empty cloud, cannot establish connection.", { cloud });
            let msg;
            while ((msg = messageNode.bufferOut.poll())) {
                msg.future.error(new Error(`Could not resolve cloud/server for consumer ${messageNode.consumerUUID}`));
            }
        }
    },
    onResolveConsumerServer: (messageNode: MessageNode, serverDescriptor: ServerDescriptor) => {
        // ... (логика без изменений) ...
        Log.debug("Strategy: onResolveConsumerServer called", { component: "MsgEvListenerDefault", uidTo: messageNode.consumerUUID.toAString(), serverId: serverDescriptor.id });
        messageNode.addConsumerServerOutByDescriptor(serverDescriptor);
    },
    onResolveConsumerConnection: (messageNode: MessageNode, connection: ConnectionWork) => {
        // ... (логика без изменений) ...
        Log.debug("Strategy: onResolveConsumerConnection called", { component: "MsgEvListenerDefault", uidTo: messageNode.consumerUUID.toAString(), uri: connection.uri });
        messageNode.addConsumerConnectionOut(connection);
    },
};

/**
 * @class MessageNode
 * (Без изменений... до `send`)
 */
export class MessageNode {
    public readonly connectionsOut: Set<ConnectionWork> = new Set();
    public readonly bufferOut = new Queue<{ data: Uint8Array, future: AFuture }>();
    public readonly bufferIn = new EventConsumer<{ data: Uint8Array }>();
    public readonly consumerUUID: UUID;
    public readonly client: AetherCloudClient;
     private static readonly MAX_BUFFER_SIZE = 1000;
    public strategy: MessageEventListener;

    constructor(client: AetherCloudClient, consumerId: UUID, strategy: MessageEventListener) {
        // ... (логика конструктора без изменений) ...
        Log.trace("Creating MessageNode", {
            component: "MessageNode",
            uidFrom: client.getUid()?.toAString() ?? "N/A",
            uidTo: consumerId.toAString()
        });
        this.client = client;
        this.consumerUUID = consumerId;
        this.strategy = strategy;

        this.client.getCloud(consumerId).to(
            (c: Cloud | null) => {
                if (c) {
                    Log.debug("Cloud resolution SUCCESS", { component: "MessageNode", uidTo: this.consumerUUID.toAString(), cloudData: c.data });
                    try { this.strategy.setConsumerCloud(this, c); }
                    catch (e) { Log.error("Error in strategy.setConsumerCloud", e as Error); }
                } else {
                    Log.warn("Cloud resolution FAILED (result was null)", { component: "MessageNode", uidTo: this.consumerUUID.toAString() });
                    let msg;
                    while ((msg = this.bufferOut.poll())) {
                        msg.future.error(new Error(`Could not resolve cloud for consumer ${this.consumerUUID}`));
                    }
                }
            }).onError(
                (err: Error) => {
                    Log.error("Cloud resolution FAILED (exception thrown)", err, { component: "MessageNode", uidTo: this.consumerUUID.toAString() });
                    let msg;
                    while ((msg = this.bufferOut.poll())) {
                        msg.future.error(new Error(`Failed to get cloud for consumer ${this.consumerUUID}: ${err.message}`));
                    }
                }
            );
    }

    // --- [ИЗМЕНЕНО] Добавлен оверлод 'send(data)' из Java ---

    /**
     * @description Добавляет сообщение в очередь, *требуя* существующий AFuture.
     * (Оригинальный метод)
     */
    public send(data: Uint8Array, future: AFuture): AFuture;
    /**
     * @description Добавляет сообщение в очередь, *создавая* новый AFuture.
     * (Портировано из MessageNode.java)
     */
    public send(data: Uint8Array): AFuture;

    // Реализация
    public send(data: Uint8Array, future?: AFuture): AFuture {
        const sendFuture = future ?? AFuture.make();
        
        if (this.bufferOut.size() >= 50) {
            const oldest = this.bufferOut.poll();
            if (oldest) {
                Log.warn("MessageNode: Buffer pressure, dropping oldest message", { uidTo: this.consumerUUID.toAString() });
                oldest.future.error(new Error("Outgoing message queue overflow"));
            }
        }

        const message = { data, future: sendFuture };
        if (this.bufferOut.size() < MessageNode.MAX_BUFFER_SIZE) {
            this.bufferOut.add(message);
        } else {
             sendFuture.error(new Error("Critical buffer overflow"));
        }
        Log.trace("MessageNode: Added message to bufferOut");

// Timeout moved to overflow logic

        if (this.connectionsOut.size === 0) {
            Log.trace("MessageNode: Message buffered, no connections yet.");
        }
        return sendFuture;
    }

    // --- (Методы addConsumer... без изменений) ---
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
            const connection = this.client.getConnection(serverDescriptor);
            this.strategy.onResolveConsumerConnection(this, connection);
        } catch (e) {
            Log.error("Error resolving/passing connection in addConsumerServerOutByDescriptor", e as Error);
        }
    }
    public addConsumerConnectionOut(conn: ConnectionWork): void {
            Log.debug("Attempting to add connection to connectionsOut", { component: "MessageNode", uidTo: this.consumerUUID.toAString(), server: conn.uri, currentSize: this.connectionsOut.size });
            if (this.connectionsOut.has(conn)) {
                Log.trace("Connection already added, skipping.", { component: "MessageNode", uidTo: this.consumerUUID.toAString(), server: conn.uri });
                return;
            }
            this.connectionsOut.add(conn);
            Log.info("SUCCESS: Added new outgoing connection", { component: "MessageNode", uidTo: this.consumerUUID.toAString(), server: conn.uri, newSize: this.connectionsOut.size });
    }
    public removeConsumerConnectionOut(conn: ConnectionWork): void {
        if (this.connectionsOut.delete(conn)) {
            Log.warn("Removing outgoing connection", { component: "MessageNode", uidTo: this.consumerUUID.toAString(), server: conn.uri, newSize: this.connectionsOut.size });
            if (this.connectionsOut.size === 0 && this.bufferOut.size() > 0) {
                Log.warn("Last connection removed, triggering cloud resolution again for buffered messages.", { component: "MessageNode" });
                this.client.getCloud(this.consumerUUID).to((c: Cloud | null) => { if (c) this.strategy.setConsumerCloud(this, c); });
            }
        }
    }
    public sendMessageFromServerToClient(data: Uint8Array): void {
        Log.trace("Received message from server", { component: "MessageNode", uidTo: this.consumerUUID.toAString() });
        this.bufferIn.fire({ data });
    }
    public toConsumer(o: AConsumer<Uint8Array>): void {
        this.bufferIn.add((msg: { data: Uint8Array }) => o(msg.data));
    }
    public getConsumerUUID(): UUID { return this.consumerUUID; }


    // --- [НОВЫЕ МЕТОДЫ] Портировано из MessageNode.java ---

    /**
     * @description Привязывает входящие данные (bufferIn) к локальной реализации API.
     */
    public toApiWithCtx<LT>(
        ctx: FastFutureContext,
        metaLt: FastMetaApi<LT, any>,
        localApi: LT
    ): void {
        this.bufferIn.add((msg: { data: Uint8Array }) => {
            (ctx as any).localDataIn?.(metaLt, localApi, msg.data);
        });
    }

    /**
     * @description Создает FastApiContext, который flushes данные через этот MessageNode.
     */
    public toApiWithFactory<LT>(
        metaLt: FastMetaApi<LT, any>,
        localApiFactory: AFunction<FastApiContextLocal<LT>, LT>
    ): FastApiContextLocal<LT> {
        const node = this;
        const ctx = new class extends FastApiContextLocal<LT> {
            constructor() {
                super(localApiFactory);
            }
            public override flush(report: FlushReport): void {
                const data = this.remoteDataToArrayAsArray();
                if (data.length === 0) {
                    report.done();
                    return;
                }
                node.send(data).to(() => {
                    report.done();
                }).onError((err: Error) => {
                    Log.error("MessageNode toApi flush error", err);
                    report.abort();
                });
                node.client.flush();
            }
        }();
        this.toApiWithCtx(ctx, metaLt, ctx.localApi);
        return ctx;
    }


    /**
     * @description Создает FastApiContext, который "промывает" (flushes) данные через этот MessageNode,
     * используя фабрику для создания локального API.
     * (Портировано из MessageNode.java)
     */
    public toApiR<LT>(
        metaLt: FastMetaApi<LT, any>,
        localApiFactory: AFunction<FastApiContextLocal<LT>, LT>
    ): FastApiContextLocal<LT> {
        const nodeSend = this.send.bind(this);

        const ctx = new (class extends FastApiContextLocal<LT> {
            constructor() {
                super(localApiFactory); // Передаем фабрику
            }
            override flush(sendFuture?: FlushReport): void {
                const d = this.remoteDataToArrayAsArray();
                if (d.length > 0) {
                    nodeSend(d).to(sendFuture); // Используем send(data)
                } else {
                    sendFuture.done();
                }
            }
        })();

        // ctx.localApi теперь засетапен
        this.toApiWithCtx(ctx, metaLt, ctx.localApi);
        return ctx;
    }

    /**
     * @description Привязывает входящие данные (bufferIn) к локальной реализации API.
     * (Портировано из MessageNode.java)
     */
}
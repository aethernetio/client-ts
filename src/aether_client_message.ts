import type { ConnectionWork } from './aether_client_connection_work';
import { AetherCloudClient } from './aether_client';
import { Cloud, ServerDescriptor } from './aether_api';
import { DataInOutStatic } from './aether_datainout';
import {
    AutoFlushContext,
    FastMetaApi,
    MetaContext,
} from './aether_fastmeta';
import { MessageNodeWebRtcPeer } from './aether_fastmeta_webrtc';
import { AFuture, EventConsumer } from './aether_future';
import { Log } from './aether_logging';
import { AConsumer, UUID } from './aether_types';
import { Queue } from './aether_utils';

export interface MessageEventListener {
    setConsumerCloud(messageNode: MessageNode, cloud: Cloud): void;
    onResolveConsumerServer(
        messageNode: MessageNode,
        serverDescriptor: ServerDescriptor,
    ): void;
    onResolveConsumerConnection(
        messageNode: MessageNode,
        connection: ConnectionWork,
    ): void;
}

export const MessageEventListenerDefault: MessageEventListener = {
    setConsumerCloud: (messageNode: MessageNode, cloud: Cloud) => {
        if (cloud?.data?.length > 0) {
            messageNode.addConsumerServerOutById(cloud.data[0]);
            return;
        }
        messageNode.failBufferedMessages(
            new Error(`Could not resolve server for ${messageNode.consumerUUID.toAString()}`),
        );
    },
    onResolveConsumerServer: (
        messageNode: MessageNode,
        serverDescriptor: ServerDescriptor,
    ) => messageNode.addConsumerServerOutByDescriptor(serverDescriptor),
    onResolveConsumerConnection: (
        messageNode: MessageNode,
        connection: ConnectionWork,
    ) => messageNode.addConsumerConnectionOut(connection),
};

interface BufferedMessage {
    data: Uint8Array;
    future: AFuture;
}

export class MessageNode {
    private static readonly MAX_BUFFER_SIZE = 1000;
    private static readonly PRESSURE_BUFFER_SIZE = 50;

    public readonly connectionsOut = new Set<ConnectionWork>();
    public readonly bufferOut = new Queue<BufferedMessage>();
    public readonly bufferIn = new EventConsumer<{ data: Uint8Array }>();
    public readonly consumerUUID: UUID;
    public readonly client: AetherCloudClient;
    public strategy: MessageEventListener;

    private webRtcPeer: MessageNodeWebRtcPeer | null = null;
    private webRtcStarted = false;

    public constructor(
        client: AetherCloudClient,
        consumerId: UUID,
        strategy: MessageEventListener,
    ) {
        this.client = client;
        this.consumerUUID = consumerId;
        this.strategy = strategy;

        this.resolveConsumerCloud();
        this.client.startFuture.to(() => this.startWebRtc());
        this.startWebRtc();
    }

    public send(data: Uint8Array, future: AFuture): AFuture;
    public send(data: Uint8Array): AFuture;
    public send(data: Uint8Array, future?: AFuture): AFuture {
        const sendFuture = future ?? AFuture.make();
        if (!data || data.length === 0) {
            sendFuture.tryDone();
            return sendFuture;
        }

        this.startWebRtc();
        if (this.webRtcPeer?.send(data)) {
            sendFuture.tryDone();
            return sendFuture;
        }

        this.enqueue({ data: Uint8Array.from(data), future: sendFuture });
        this.client.flush();
        return sendFuture;
    }

    public addConsumerServerOutById(serverId: number): void {
        this.client.getServer(serverId)
            .to((descriptor: ServerDescriptor) => {
                if (descriptor) {
                    this.strategy.onResolveConsumerServer(this, descriptor);
                }
            })
            .onError((error: Error) => {
                Log.error('Failed to resolve MessageNode server', error, { serverId });
            });
    }

    public addConsumerServerOutByDescriptor(
        serverDescriptor: ServerDescriptor,
    ): void {
        try {
            this.strategy.onResolveConsumerConnection(
                this,
                this.client.getConnection(serverDescriptor),
            );
        } catch (error) {
            Log.error('Failed to resolve MessageNode connection', error as Error);
        }
    }

    public addConsumerConnectionOut(connection: ConnectionWork): void {
        if (this.connectionsOut.has(connection)) return;
        this.connectionsOut.add(connection);
        this.client.flush();
    }

    public removeConsumerConnectionOut(connection: ConnectionWork): void {
        if (!this.connectionsOut.delete(connection)) return;
        if (this.connectionsOut.size === 0 && !this.bufferOut.isEmpty()) {
            this.resolveConsumerCloud();
        }
    }

    public sendMessageFromServerToClient(data: Uint8Array): void {
        try {
            this.bufferIn.fire({ data: Uint8Array.from(data) });
        } catch (error) {
            Log.error('MessageNode incoming message failed', error as Error, {
                uid: this.consumerUUID.toAString().toString(),
            });
        }
    }

    public toConsumer(consumer: AConsumer<Uint8Array>): void {
        if (this.bufferIn.hasListener()) throw new Error('Already add listener');
        this.bufferIn.add((message) => consumer(message.data));
    }

    public getConsumerUUID(): UUID {
        return this.consumerUUID;
    }

    public failBufferedMessages(error: Error): void {
        let message: BufferedMessage | null;
        while ((message = this.bufferOut.pollFirst()) !== null) {
            message.future.tryError(error);
        }
    }

    public toApiWithCtx<LT>(
        ctx: MetaContext,
        metaLt: FastMetaApi<LT, any>,
        localApi: LT,
    ): void {
        this.bufferIn.add((message) => {
            metaLt.makeLocal_fromDataIn(
                ctx,
                new DataInOutStatic(message.data),
                localApi,
            );
        });
    }

    public toApiWithFactory<LT>(
        metaLt: FastMetaApi<LT, any>,
        localApiFactory: (ctx: MetaContext) => LT,
    ): MetaContext {
        const ctx = new AutoFlushContext();
        ctx.localApi = localApiFactory(ctx);
        ctx.onFlushData((data: Uint8Array) => {
            if (data.length > 0) this.send(data);
        });
        this.toApiWithCtx(ctx, metaLt, ctx.localApi);
        return ctx;
    }

    public toApiR<LT>(
        metaLt: FastMetaApi<LT, any>,
        localApiFactory: (ctx: MetaContext) => LT,
    ): MetaContext {
        return this.toApiWithFactory(metaLt, localApiFactory);
    }

    private enqueue(message: BufferedMessage): void {
        if (this.bufferOut.size() >= MessageNode.PRESSURE_BUFFER_SIZE) {
            const oldest = this.bufferOut.pollFirst();
            oldest?.future.tryError(new Error('Outgoing message queue overflow'));
        }
        if (this.bufferOut.size() >= MessageNode.MAX_BUFFER_SIZE) {
            message.future.tryError(new Error('Critical buffer overflow'));
            return;
        }
        this.bufferOut.add(message);
    }

    private resolveConsumerCloud(): void {
        this.client.getCloud(this.consumerUUID)
            .to((cloud: Cloud) => this.strategy.setConsumerCloud(this, cloud))
            .onError((error: Error) => {
                this.failBufferedMessages(new Error(
                    `Failed to get cloud for ${this.consumerUUID.toAString()}: ${error.message}`,
                ));
            });
    }

    private startWebRtc(): void {
        if (
            this.webRtcStarted
            || this.client.destroyer.isDestroyed()
            || !MessageNodeWebRtcPeer.isSupported()
        ) return;

        const localUid = this.client.getUid();
        if (!localUid || localUid.equals(this.consumerUUID)) return;
        if (!this.client.tryAcquireWebRtcMessageNode(this)) return;

        this.webRtcStarted = true;
        const peer = new MessageNodeWebRtcPeer(
            localUid,
            this.consumerUUID,
            {
                signaling: {
                    publish: (session) => this.client.publishWebRtcSession(session),
                    request: (uid) => this.client.requestWebRtcSession(uid),
                },
                onData: (data) => this.sendMessageFromServerToClient(data),
                onOpen: () => this.flushBufferedToWebRtc(),
            },
        );
        this.webRtcPeer = peer;
        this.client.destroyer.add((force: boolean) => {
            this.client.releaseWebRtcMessageNode(this);
            return peer.destroy(force);
        });
        peer.start();
    }

    private flushBufferedToWebRtc(): void {
        const peer = this.webRtcPeer;
        if (!peer?.isOpen()) return;

        while (true) {
            const message = this.bufferOut.pollFirst();
            if (!message) break;
            if (!peer.send(message.data)) {
                this.bufferOut.addFirst(message);
                break;
            }
            message.future.tryDone();
        }
    }
}

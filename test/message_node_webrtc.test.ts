import { IceCandidate, WebRtcSession } from '../src/aether_api';
import { MessageNode } from '../src/aether_client_message';
import {
    MessageNodeWebRtcPeer,
    WebRtcSignaling,
} from '../src/aether_fastmeta_webrtc';
import { AFuture, ARFuture } from '../src/aether_future';
import { UUID } from '../src/aether_types';
import { Destroyer } from '../src/aether_utils';

class FakeDataChannel {
    public readyState: RTCDataChannelState = 'connecting';
    public binaryType: BinaryType = 'arraybuffer';
    public onopen: ((event: Event) => void) | null = null;
    public onmessage: ((event: MessageEvent) => void) | null = null;
    public onclose: ((event: Event) => void) | null = null;
    public onerror: ((event: Event) => void) | null = null;
    public readonly sent: Uint8Array[] = [];

    public send(data: ArrayBuffer): void {
        this.sent.push(new Uint8Array(data));
    }

    public open(): void {
        this.readyState = 'open';
        this.onopen?.(new Event('open'));
    }

    public receive(data: Uint8Array): void {
        const copy = Uint8Array.from(data);
        this.onmessage?.({ data: copy.buffer } as MessageEvent);
    }

    public close(): void {
        this.readyState = 'closed';
    }
}

class FakePeerConnection {
    public static readonly instances: FakePeerConnection[] = [];

    public localDescription: RTCSessionDescription | null = null;
    public remoteDescription: RTCSessionDescription | null = null;
    public iceGatheringState: RTCIceGatheringState = 'complete';
    public connectionState: RTCPeerConnectionState = 'new';
    public onicecandidate: ((event: RTCPeerConnectionIceEvent) => void) | null = null;
    public ondatachannel: ((event: RTCDataChannelEvent) => void) | null = null;
    public onconnectionstatechange: ((event: Event) => void) | null = null;
    public readonly channel = new FakeDataChannel();
    public readonly remoteCandidates: RTCIceCandidateInit[] = [];

    public constructor(_configuration?: RTCConfiguration) {
        FakePeerConnection.instances.push(this);
    }

    public createDataChannel(_label: string): RTCDataChannel {
        return this.channel as unknown as RTCDataChannel;
    }

    public createOffer(): Promise<RTCSessionDescriptionInit> {
        return Promise.resolve({
            type: 'offer',
            sdp: 'v=0\r\na=setup:actpass\r\n',
        });
    }

    public createAnswer(): Promise<RTCSessionDescriptionInit> {
        return Promise.resolve({
            type: 'answer',
            sdp: 'v=0\r\na=setup:active\r\n',
        });
    }

    public setLocalDescription(
        description: RTCSessionDescriptionInit,
    ): Promise<void> {
        this.localDescription = description as RTCSessionDescription;
        return Promise.resolve();
    }

    public setRemoteDescription(
        description: RTCSessionDescriptionInit,
    ): Promise<void> {
        this.remoteDescription = description as RTCSessionDescription;
        return Promise.resolve();
    }

    public addIceCandidate(candidate: RTCIceCandidateInit): Promise<void> {
        this.remoteCandidates.push(candidate);
        return Promise.resolve();
    }

    public addEventListener(): void {
        // ICE gathering is already complete in tests.
    }

    public removeEventListener(): void {
        // ICE gathering is already complete in tests.
    }

    public close(): void {
        this.connectionState = 'closed';
    }
}

const encoder = new TextEncoder();
const session = (
    type: 'offer' | 'answer',
    candidates: IceCandidate[] = [],
    sessionId = 'test-session',
): WebRtcSession => new WebRtcSession(
    encoder.encode(
        type === 'offer'
            ? 'v=0\r\na=setup:actpass\r\n'
            : 'v=0\r\na=setup:active\r\n',
    ),
    [
        new IceCandidate(encoder.encode(JSON.stringify({
            aetherSessionId: sessionId,
        }))),
        ...candidates,
    ],
);

const flushPromises = async (): Promise<void> => {
    await new Promise<void>((resolve) => setImmediate(resolve));
    await new Promise<void>((resolve) => setImmediate(resolve));
};

describe('MessageNode WebRTC transport', () => {
    const originalPeerConnection = globalThis.RTCPeerConnection;

    beforeEach(() => {
        FakePeerConnection.instances.length = 0;
        (globalThis as any).RTCPeerConnection = FakePeerConnection;
    });

    afterAll(() => {
        (globalThis as any).RTCPeerConnection = originalPeerConnection;
    });

    test('initiator publishes offer, accepts answer and exchanges bytes', async () => {
        const published: WebRtcSession[] = [];
        const received: Uint8Array[] = [];
        const signaling: WebRtcSignaling = {
            publish: (value) => {
                published.push(value);
                return AFuture.completed();
            },
            request: () => {
                const metadata = JSON.parse(
                    new TextDecoder().decode(
                        published[0].getCandidates()[0].getData(),
                    ),
                );
                return ARFuture.of(session(
                    'answer',
                    [],
                    metadata.aetherSessionId,
                ));
            },
        };
        const onOpen = jest.fn();
        const peer = new MessageNodeWebRtcPeer(
            UUID.of('00000000-0000-0000-0000-000000000001'),
            UUID.of('00000000-0000-0000-0000-000000000002'),
            {
                signaling,
                onData: (data) => received.push(data),
                onOpen,
            },
        );

        peer.start();
        await flushPromises();

        const pc = FakePeerConnection.instances[0];
        expect(published).toHaveLength(1);
        expect(new TextDecoder().decode(published[0].getSdp()))
            .toContain('a=setup:actpass');
        expect(pc.remoteDescription?.type).toBe('answer');

        pc.channel.open();
        expect(onOpen).toHaveBeenCalledTimes(1);
        expect(peer.send(new Uint8Array([1, 2, 3]))).toBe(true);
        expect(Array.from(pc.channel.sent[0])).toEqual([1, 2, 3]);

        pc.channel.receive(new Uint8Array([4, 5]));
        await flushPromises();
        expect(Array.from(received[0])).toEqual([4, 5]);

        await peer.destroy(true).toPromise();
    });

    test('answerer accepts offer and publishes answer', async () => {
        const published: WebRtcSession[] = [];
        const signaling: WebRtcSignaling = {
            publish: (value) => {
                published.push(value);
                return AFuture.completed();
            },
            request: () => ARFuture.of(session('offer')),
        };
        const peer = new MessageNodeWebRtcPeer(
            UUID.of('00000000-0000-0000-0000-000000000002'),
            UUID.of('00000000-0000-0000-0000-000000000001'),
            {
                signaling,
                onData: () => undefined,
                onOpen: () => undefined,
            },
        );

        peer.start();
        await flushPromises();

        const pc = FakePeerConnection.instances[0];
        expect(pc.remoteDescription?.type).toBe('offer');
        expect(published).toHaveLength(1);
        expect(new TextDecoder().decode(published[0].getSdp()))
            .toContain('a=setup:active');
        expect(JSON.parse(new TextDecoder().decode(
            published[0].getCandidates()[0].getData(),
        )).aetherSessionId).toBe('test-session');

        await peer.destroy(true).toPromise();
    });

    test('rejects an answer from an older negotiation', () => {
        const peer = new MessageNodeWebRtcPeer(
            UUID.of('00000000-0000-0000-0000-000000000001'),
            UUID.of('00000000-0000-0000-0000-000000000002'),
            {
                signaling: {
                    publish: () => AFuture.completed(),
                    request: () => ARFuture.of(session('answer')),
                },
                onData: () => undefined,
                onOpen: () => undefined,
            },
        );

        expect((peer as any).matchesDescriptionType(
            session('answer', [], 'old-session'),
            'answer',
            'new-session',
        )).toBe(false);
        expect((peer as any).matchesDescriptionType(
            session('answer', [], 'new-session'),
            'answer',
            'new-session',
        )).toBe(true);
    });

    test('MessageNode prefers direct channel and keeps cloud fallback', () => {
        (globalThis as any).RTCPeerConnection = undefined;
        const flush = jest.fn();
        const client = {
            destroyer: new Destroyer('test-client'),
            startFuture: AFuture.completed(),
            getUid: () => UUID.of('00000000-0000-0000-0000-000000000001'),
            getCloud: () => ARFuture.of({ data: [] }),
            flush,
            tryAcquireWebRtcMessageNode: () => false,
        } as any;
        const node = new MessageNode(
            client,
            UUID.of('00000000-0000-0000-0000-000000000002'),
            {
                setConsumerCloud: () => undefined,
                onResolveConsumerServer: () => undefined,
                onResolveConsumerConnection: () => undefined,
            },
        );
        const directSend = jest.fn(() => true);
        (node as any).webRtcStarted = true;
        (node as any).webRtcPeer = {
            isOpen: () => true,
            send: directSend,
        };

        const directFuture = node.send(new Uint8Array([7]));
        expect(directFuture.isDone()).toBe(true);
        expect(node.bufferOut.isEmpty()).toBe(true);

        directSend.mockReturnValue(false);
        const fallbackFuture = node.send(new Uint8Array([8]));
        expect(fallbackFuture.isFinalStatus()).toBe(false);
        expect(node.bufferOut.size()).toBe(1);
        expect(flush).toHaveBeenCalled();

        directSend.mockReturnValue(true);
        (node as any).flushBufferedToWebRtc();
        expect(fallbackFuture.isDone()).toBe(true);
        expect(node.bufferOut.isEmpty()).toBe(true);
    });
});

import { IceCandidate, WebRtcSession } from './aether_api';
import { AFuture, ARFuture } from './aether_future';
import { Destroyable, UUID } from './aether_types';
import { Log } from './aether_logging';

export interface WebRtcSignaling {
    publish(session: WebRtcSession): AFuture;
    request(uid: UUID): ARFuture<WebRtcSession>;
}

export interface MessageNodeWebRtcOptions {
    signaling: WebRtcSignaling;
    onData(data: Uint8Array): void;
    onOpen(): void;
}

export class MessageNodeWebRtcPeer implements Destroyable {
    private static readonly RETRY_DELAY_MS = 2000;
    private static readonly REQUEST_TIMEOUT_MS = 6000;
    private static readonly ICE_GATHER_TIMEOUT_MS = 3000;
    private static readonly CHANNEL_OPEN_TIMEOUT_MS = 15000;
    private static readonly SESSION_ID_FIELD = 'aetherSessionId';

    private readonly initiator: boolean;
    private peerConnection: RTCPeerConnection | null = null;
    private dataChannel: RTCDataChannel | null = null;
    private retryTimer: ReturnType<typeof setTimeout> | null = null;
    private openTimer: ReturnType<typeof setTimeout> | null = null;
    private readonly localCandidates = new WeakMap<RTCPeerConnection, IceCandidate[]>();
    private generation = 0;
    private destroyed = false;
    private started = false;

    public constructor(
        private readonly localUid: UUID,
        private readonly remoteUid: UUID,
        private readonly options: MessageNodeWebRtcOptions,
    ) {
        this.initiator = this.uuidText(localUid) < this.uuidText(remoteUid);
    }

    public static isSupported(): boolean {
        return typeof globalThis.RTCPeerConnection === 'function';
    }

    public start(): void {
        if (this.destroyed || this.started || !MessageNodeWebRtcPeer.isSupported()) return;
        this.started = true;
        void this.connect(++this.generation);
    }

    public isOpen(): boolean {
        return this.dataChannel?.readyState === 'open';
    }

    public send(data: Uint8Array): boolean {
        if (!this.isOpen() || !this.dataChannel) return false;
        try {
            const copy = Uint8Array.from(data);
            this.dataChannel.send(copy.buffer);
            return true;
        } catch (error) {
            Log.warn('WebRTC direct message send failed', {
                error,
                uidTo: this.uuidText(this.remoteUid),
            });
            this.scheduleReconnect();
            return false;
        }
    }

    public destroy(_force: boolean): AFuture {
        this.destroyed = true;
        this.generation++;
        this.clearRetry();
        this.clearOpenTimeout();
        this.closeConnection();
        return AFuture.completed();
    }

    private async connect(generation: number): Promise<void> {
        try {
            this.closeConnection();
            const pc = this.createPeerConnection(generation);
            this.peerConnection = pc;

            if (this.initiator) {
                this.attachDataChannel(pc.createDataChannel('message-node'), generation);
                const sessionId = this.createSessionId();
                await this.createAndPublishOffer(pc, generation, sessionId);
                await this.waitForRemoteAnswer(pc, generation, sessionId);
            } else {
                await this.waitForRemoteOffer(pc, generation);
            }
            this.scheduleOpenTimeout(generation);
        } catch (error) {
            if (!this.isCurrent(generation)) return;
            Log.warn('WebRTC MessageNode connection failed', {
                error,
                uidFrom: this.uuidText(this.localUid),
                uidTo: this.uuidText(this.remoteUid),
            });
            this.scheduleReconnect();
        }
    }

    private createPeerConnection(generation: number): RTCPeerConnection {
        const pc = new RTCPeerConnection({
            iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
        });

        this.localCandidates.set(pc, []);
        pc.onicecandidate = (event: RTCPeerConnectionIceEvent) => {
            if (!event.candidate || !this.isCurrent(generation)) return;
            const candidate = typeof event.candidate.toJSON === 'function'
                ? event.candidate.toJSON()
                : {
                    candidate: event.candidate.candidate,
                    sdpMid: event.candidate.sdpMid,
                    sdpMLineIndex: event.candidate.sdpMLineIndex,
                    usernameFragment: event.candidate.usernameFragment,
                };
            this.localCandidates.get(pc)?.push(
                new IceCandidate(this.encode(JSON.stringify(candidate))),
            );
        };
        pc.ondatachannel = (event: RTCDataChannelEvent) => {
            if (this.isCurrent(generation)) this.attachDataChannel(event.channel, generation);
        };
        pc.onconnectionstatechange = () => {
            if (!this.isCurrent(generation)) return;
            if (pc.connectionState === 'failed' || pc.connectionState === 'closed') {
                this.scheduleReconnect();
            }
        };
        return pc;
    }

    private attachDataChannel(channel: RTCDataChannel, generation: number): void {
        this.dataChannel = channel;
        channel.binaryType = 'arraybuffer';
        channel.onopen = () => {
            if (!this.isCurrent(generation)) return;
            this.clearOpenTimeout();
            Log.debug('WebRTC MessageNode channel opened', {
                uidTo: this.uuidText(this.remoteUid),
            });
            this.options.onOpen();
        };
        channel.onmessage = (event: MessageEvent) => {
            if (!this.isCurrent(generation)) return;
            void this.handleIncomingData(event.data);
        };
        channel.onclose = () => {
            if (this.isCurrent(generation)) this.scheduleReconnect();
        };
        channel.onerror = () => {
            if (this.isCurrent(generation)) this.scheduleReconnect();
        };
    }

    private async createAndPublishOffer(
        pc: RTCPeerConnection,
        generation: number,
        sessionId: string,
    ): Promise<void> {
        const offer = await pc.createOffer();
        this.ensureCurrent(generation);
        await pc.setLocalDescription(offer);
        await this.waitForIceGathering(pc, generation);
        await this.publishLocalSession(pc, generation, sessionId);
    }

    private async waitForRemoteAnswer(
        pc: RTCPeerConnection,
        generation: number,
        sessionId: string,
    ): Promise<void> {
        const session = await this.requestRemoteSession(
            generation,
            'answer',
            sessionId,
        );
        this.ensureCurrent(generation);
        await pc.setRemoteDescription({
            type: 'answer',
            sdp: this.decode(session.getSdp()),
        });
        await this.addRemoteCandidates(pc, session, generation);
    }

    private async waitForRemoteOffer(
        pc: RTCPeerConnection,
        generation: number,
    ): Promise<void> {
        const session = await this.requestRemoteSession(generation, 'offer');
        this.ensureCurrent(generation);
        const sessionId = this.getSessionId(session);
        if (!sessionId) throw new Error('WebRTC offer has no negotiation id');
        await pc.setRemoteDescription({
            type: 'offer',
            sdp: this.decode(session.getSdp()),
        });
        await this.addRemoteCandidates(pc, session, generation);

        const answer = await pc.createAnswer();
        this.ensureCurrent(generation);
        await pc.setLocalDescription(answer);
        await this.waitForIceGathering(pc, generation);
        await this.publishLocalSession(pc, generation, sessionId);
    }

    private async requestRemoteSession(
        generation: number,
        expectedType: RTCSdpType,
        expectedSessionId?: string,
    ): Promise<WebRtcSession> {
        while (this.isCurrent(generation)) {
            try {
                const session = await this.options.signaling
                    .request(this.remoteUid)
                    .toPromise(MessageNodeWebRtcPeer.REQUEST_TIMEOUT_MS);
                if (
                    this.matchesDescriptionType(
                        session,
                        expectedType,
                        expectedSessionId,
                    )
                ) return session;
            } catch {
                // The remote peer may not have published its session yet.
            }
            await this.delay(MessageNodeWebRtcPeer.RETRY_DELAY_MS, generation);
        }
        throw new Error('WebRTC negotiation canceled');
    }

    private matchesDescriptionType(
        session: WebRtcSession | null,
        expectedType: RTCSdpType,
        expectedSessionId?: string,
    ): session is WebRtcSession {
        if (!session?.getSdp()?.length) return false;
        const sessionId = this.getSessionId(session);
        if (!sessionId) return false;
        if (expectedSessionId && sessionId !== expectedSessionId) return false;

        const sdp = this.decode(session.getSdp());
        if (expectedType === 'offer') return /(?:^|\r?\n)a=setup:actpass(?:\r?\n|$)/.test(sdp);
        if (expectedType === 'answer') {
            return /(?:^|\r?\n)a=setup:(?:active|passive)(?:\r?\n|$)/.test(sdp);
        }
        return true;
    }

    private async publishLocalSession(
        pc: RTCPeerConnection,
        generation: number,
        sessionId: string,
    ): Promise<void> {
        this.ensureCurrent(generation);
        const description = pc.localDescription;
        if (!description?.sdp) throw new Error('Local WebRTC description is missing');

        const candidates = this.extractCandidates(pc, sessionId);
        const session = new WebRtcSession(this.encode(description.sdp), candidates);
        await this.options.signaling.publish(session).toPromise(
            MessageNodeWebRtcPeer.REQUEST_TIMEOUT_MS,
        );
        this.ensureCurrent(generation);
    }

    private extractCandidates(
        pc: RTCPeerConnection,
        sessionId: string,
    ): IceCandidate[] {
        return [
            new IceCandidate(this.encode(JSON.stringify({
                [MessageNodeWebRtcPeer.SESSION_ID_FIELD]: sessionId,
            }))),
            ...(this.localCandidates.get(pc) ?? []),
        ];
    }

    private getSessionId(session: WebRtcSession): string | null {
        for (const value of session.getCandidates()) {
            try {
                const candidate = JSON.parse(this.decode(value.getData()));
                const sessionId = candidate?.[
                    MessageNodeWebRtcPeer.SESSION_ID_FIELD
                ];
                if (typeof sessionId === 'string' && sessionId.length > 0) {
                    return sessionId;
                }
            } catch {
                // Real ICE candidates are also JSON and are handled elsewhere.
            }
        }
        return null;
    }

    private async addRemoteCandidates(
        pc: RTCPeerConnection,
        session: WebRtcSession,
        generation: number,
    ): Promise<void> {
        for (const value of session.getCandidates()) {
            this.ensureCurrent(generation);
            try {
                const candidate = JSON.parse(this.decode(value.getData()));
                if (
                    typeof candidate?.[
                        MessageNodeWebRtcPeer.SESSION_ID_FIELD
                    ] === 'string'
                ) continue;
                await pc.addIceCandidate(candidate);
            } catch (error) {
                Log.warn('Ignoring invalid WebRTC ICE candidate', { error });
            }
        }
    }

    private waitForIceGathering(
        pc: RTCPeerConnection,
        generation: number,
    ): Promise<void> {
        if (pc.iceGatheringState === 'complete') return Promise.resolve();

        return new Promise<void>((resolve, reject) => {
            let completed = false;
            const finish = (): void => {
                if (completed) return;
                completed = true;
                clearTimeout(timeout);
                pc.removeEventListener('icegatheringstatechange', listener);
                if (this.isCurrent(generation)) resolve();
                else reject(new Error('WebRTC negotiation canceled'));
            };
            const listener = (): void => {
                if (pc.iceGatheringState === 'complete') finish();
            };
            const timeout = setTimeout(
                finish,
                MessageNodeWebRtcPeer.ICE_GATHER_TIMEOUT_MS,
            );
            pc.addEventListener('icegatheringstatechange', listener);
        });
    }

    private async handleIncomingData(value: unknown): Promise<void> {
        if (value instanceof ArrayBuffer) {
            this.options.onData(new Uint8Array(value));
            return;
        }
        if (value instanceof Uint8Array) {
            this.options.onData(Uint8Array.from(value));
            return;
        }
        if (typeof Blob !== 'undefined' && value instanceof Blob) {
            this.options.onData(new Uint8Array(await value.arrayBuffer()));
        }
    }

    private scheduleReconnect(): void {
        if (this.destroyed || this.retryTimer) return;
        this.generation++;
        this.clearOpenTimeout();
        this.closeConnection();
        this.retryTimer = setTimeout(() => {
            this.retryTimer = null;
            if (!this.destroyed) void this.connect(++this.generation);
        }, MessageNodeWebRtcPeer.RETRY_DELAY_MS);
    }

    private scheduleOpenTimeout(generation: number): void {
        this.clearOpenTimeout();
        this.openTimer = setTimeout(() => {
            this.openTimer = null;
            if (this.isCurrent(generation) && !this.isOpen()) {
                Log.warn('WebRTC MessageNode channel open timed out', {
                    uidFrom: this.uuidText(this.localUid),
                    uidTo: this.uuidText(this.remoteUid),
                });
                this.scheduleReconnect();
            }
        }, MessageNodeWebRtcPeer.CHANNEL_OPEN_TIMEOUT_MS);
    }

    private clearOpenTimeout(): void {
        if (!this.openTimer) return;
        clearTimeout(this.openTimer);
        this.openTimer = null;
    }

    private closeConnection(): void {
        const channel = this.dataChannel;
        const pc = this.peerConnection;
        this.dataChannel = null;
        this.peerConnection = null;

        if (channel) {
            channel.onopen = null;
            channel.onmessage = null;
            channel.onclose = null;
            channel.onerror = null;
            try { channel.close(); } catch { /* ignored */ }
        }
        if (pc) {
            pc.onicecandidate = null;
            pc.ondatachannel = null;
            pc.onconnectionstatechange = null;
            try { pc.close(); } catch { /* ignored */ }
        }
    }

    private clearRetry(): void {
        if (!this.retryTimer) return;
        clearTimeout(this.retryTimer);
        this.retryTimer = null;
    }

    private delay(ms: number, generation: number): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.isCurrent(generation)) resolve();
                else reject(new Error('WebRTC negotiation canceled'));
            }, ms);
        });
    }

    private ensureCurrent(generation: number): void {
        if (!this.isCurrent(generation)) throw new Error('WebRTC negotiation canceled');
    }

    private isCurrent(generation: number): boolean {
        return !this.destroyed && generation === this.generation;
    }

    private createSessionId(): string {
        return UUID.randomUUID().toAString().toString();
    }

    private encode(value: string): Uint8Array {
        return new TextEncoder().encode(value);
    }

    private decode(value: Uint8Array): string {
        return new TextDecoder().decode(value);
    }

    private uuidText(value: UUID): string {
        return value.toAString().toString();
    }
}

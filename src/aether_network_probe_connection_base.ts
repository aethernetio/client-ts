import {
    AConsumer,
    Destroyable,
    URI,
} from './aether_types';
import {
    AetherCodec,
    IPAddress,
    IPAddressV4,
    IPAddressV6,
    IPAddressWeb,
    ServerDescriptor,
} from './aether_api';
import { Log } from './aether_logging';
import {
    FastMetaApi,
    MetaContext,
    RemoteApi,
} from './aether_fastmeta';
import { AFuture, EventConsumer } from './aether_future';
import { FastMetaNet } from './aether_fastmeta_net';
import type { Destroyer } from './aether_utils';

/**
 * The transport layer needs only lifecycle ownership from the client.
 * Keeping this interface local prevents the probe transport from importing
 * the full AetherCloudClient barrel.
 */
export interface NetworkProbeConnectionOwner {
    readonly destroyer: Destroyer;
}

export function probeIpAddressToString(ipAddr: IPAddress): string | null {
    try {
        if (ipAddr instanceof IPAddressV4) {
            if (ipAddr.data?.length === 4) {
                return Array.from(ipAddr.data).join('.');
            }
        } else if (ipAddr instanceof IPAddressV6) {
            if (ipAddr.data?.length === 16) {
                const parts: string[] = [];
                for (let i = 0; i < 16; i += 2) {
                    parts.push(((ipAddr.data[i] << 8) | ipAddr.data[i + 1]).toString(16));
                }

                // Compress the longest zero run. This mirrors the universal
                // client's URI selection without importing its connection base.
                let bestStart = -1;
                let bestLength = 0;
                let runStart = -1;
                for (let i = 0; i <= parts.length; i++) {
                    if (i < parts.length && parts[i] === '0') {
                        if (runStart < 0) runStart = i;
                    } else if (runStart >= 0) {
                        const length = i - runStart;
                        if (length > bestLength) {
                            bestStart = runStart;
                            bestLength = length;
                        }
                        runStart = -1;
                    }
                }

                if (bestLength > 1) {
                    const before = parts.slice(0, bestStart).join(':');
                    const after = parts.slice(bestStart + bestLength).join(':');
                    if (!before && !after) return '::';
                    if (!before) return `::${after}`;
                    if (!after) return `${before}::`;
                    return `${before}::${after}`;
                }
                return parts.join(':');
            }
        } else if (ipAddr instanceof IPAddressWeb) {
            if (ipAddr.data?.length) {
                return new TextDecoder().decode(ipAddr.data);
            }
        }
    } catch (error) {
        Log.warn('Network probe failed to format IP address', { error });
    }
    return null;
}

export function probeUriFromServerDescriptor(
    descriptor: ServerDescriptor,
    preferredCodec: AetherCodec,
): URI | null {
    if (!descriptor?.ipAddress?.addresses?.length) return null;

    for (const addressInfo of descriptor.ipAddress.addresses) {
        const host = probeIpAddressToString(addressInfo.address);
        if (!host) continue;

        const isIpv4 = /^(\d{1,3}\.){3}\d{1,3}$/.test(host);
        const isIpv6 = host.includes(':');
        const isRawIp = isIpv4 || isIpv6;

        for (const capability of addressInfo.coderAndPorts) {
            if (capability.codec !== preferredCodec) continue;
            // Browser WSS certificates are hostname based in the current
            // deployment, so preserve the universal client's raw-IP rule.
            if (capability.codec === AetherCodec.WSS && isRawIp) continue;

            const scheme = capability.codec === AetherCodec.WSS
                ? 'wss'
                : capability.codec === AetherCodec.WS
                    ? 'ws'
                    : capability.codec === AetherCodec.TCP
                        ? 'tcp'
                        : capability.codec === AetherCodec.UDP
                            ? 'udp'
                            : null;
            if (!scheme) continue;

            const hostPart = isIpv6 ? `[${host}]` : host;
            return `${scheme}://${hostPart}:${capability.port}`;
        }
    }

    return null;
}

/**
 * Minimal FastMeta transport base used only by the browser network probe.
 * It is deliberately independent from AetherCloudClient.
 */
export class NetworkProbeConnectionBase<LT, RT extends RemoteApi>
implements Destroyable {
    protected readonly client: NetworkProbeConnectionOwner;
    public readonly uri: URI;
    public readonly connectFuture: AFuture;
    protected readonly metaContext: MetaContext | null;
    protected rootApi: RT | null = null;
    public readonly stateListeners = new EventConsumer<boolean>();

    public constructor(
        client: NetworkProbeConnectionOwner,
        uri: URI,
        localApiMeta: FastMetaApi<LT, any>,
        remoteApiMeta: FastMetaApi<any, RT>,
    ) {
        this.client = client;
        this.uri = uri;
        this.connectFuture = AFuture.make();

        if (client.destroyer.isDestroyed()) {
            this.metaContext = null;
            this.connectFuture.tryError(new Error('Network probe client is destroyed'));
            return;
        }

        client.destroyer.add(this);
        const localApi = this as unknown as LT;
        this.rootApi = FastMetaNet.INSTANCE
            .get()
            .makeClientWithRemote(
                uri,
                localApiMeta,
                remoteApiMeta,
                () => localApi,
            );
        this.metaContext = this.rootApi.getFastMetaContext();
        this.metaContext.onWritable((isWritable: boolean) => {
            this.onConnectionStateChanged(isWritable);
            if (isWritable) this.connectFuture.tryDone();
            this.stateListeners.fire(isWritable);
        });
    }

    public getRootApi(): RT | null {
        return this.rootApi;
    }

    public isWritable(): boolean {
        return this.metaContext !== null && this.metaContext.isActive();
    }

    protected onConnectionStateChanged(_isWritable: boolean): void {}

    public destroy(_force: boolean): AFuture {
        return this.metaContext ? this.metaContext.close() : AFuture.completed();
    }
}

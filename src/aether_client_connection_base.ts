// =============================================================================================
// FILE: aether_client_connection_base.ts
// PURPOSE: Contains the Connection base class and IP address utility functions.
// DEPENDENCIES: aether_types.ts, aether_client.ts, aether_api.ts, aether_logging.ts,
//               aether_fastmeta.ts
// =============================================================================================

import {
    ClientStartException,
    Destroyable,
    URI,
    AFunction,
    AConsumer
} from './aether_types'
import { AetherCloudClient } from './aether_client';
import { AetherCodec, IPAddress, IPAddressV4, IPAddressV6, IPAddressWeb, ServerDescriptor } from './aether_api';
import { Log } from './aether_logging';

import {
    FastMetaApi,
    RemoteApi,
    MetaContext
} from './aether_fastmeta';

import { AFuture, ARFuture, EventConsumer } from './aether_future';
import { FastMetaNet } from './aether_fastmeta_net';

/**
 * @description Converts an IPAddress DTO to its string representation.
 * @param {IPAddress} ipAddr The IPAddress object from the API.
 * @returns {string | null} A string representation (e.g., "1.2.3.4", "[::1]", or "example.com") or null if invalid.
 */
export function ipAddressToString(ipAddr: IPAddress): string | null {
    Log.trace("Formatting IPAddress", { ipAddress: ipAddr });
    try {
        if (ipAddr instanceof IPAddressV4) {
            if (ipAddr.data && ipAddr.data.length === 4) {
                return Array.from(ipAddr.data).join('.');
            }
        } else if (ipAddr instanceof IPAddressV6) {
            if (ipAddr.data && ipAddr.data.length === 16) {
                const parts: string[] = [];
                for (let i = 0; i < 16; i += 2) {
                    parts.push(((ipAddr.data[i] << 8) | ipAddr.data[i + 1]).toString(16));
                }
                let ipStr = parts.join(':');

                // --- Start IPv6 compression logic ---
                let longestSeq = "";
                let currentSeq = "";
                ipStr.split(':').forEach(part => {
                    if (part === '0') {
                        currentSeq += ":0";
                    } else {
                        if (currentSeq.length > longestSeq.length) {
                            longestSeq = currentSeq;
                        }
                        currentSeq = "";
                    }
                });
                if (currentSeq.length > longestSeq.length) {
                    longestSeq = currentSeq;
                }

                if (longestSeq.length > 2) {
                    if (ipStr === longestSeq.substring(1)) {
                        ipStr = "::";
                    } else if (ipStr.startsWith(longestSeq.substring(1) + ":")) {
                        ipStr = ipStr.replace(longestSeq.substring(1) + ":", "::");
                    } else if (ipStr.endsWith(":" + longestSeq.substring(1))) {
                        ipStr = ipStr.replace(":" + longestSeq.substring(1), "::");
                    } else {
                        ipStr = ipStr.replace(longestSeq, ":");
                    }
                }
                // --- End IPv6 compression logic ---
                return ipStr;
            }
        } else if (ipAddr instanceof IPAddressWeb) {
            // [FIX] Обработка DNS имени в IPAddressWeb
            if (ipAddr.data && ipAddr.data.length > 0) {
                try {
                    // Используем TextDecoder для декодирования UTF-8 байтов в строку
                    return new TextDecoder().decode(ipAddr.data);
                } catch (e) {
                    Log.error("Failed to decode IPAddressWeb data", e as Error);
                    return null;
                }
            }
        }
    } catch (e) {
        Log.error("Error formatting IPAddress", e as Error, { ipAddress: ipAddr });
    }

    Log.error("Unknown or invalid IPAddress format provided to ipAddressToString", { ipAddress: ipAddr });
    return null;
}

/**
 * @description Gets a suitable URI (WebSocket preferred) from a ServerDescriptor.
 * @param {ServerDescriptor} sd The server descriptor.
 * @param {AetherCodec} preferredCodec The preferred codec (e.g., WSS).
 * @returns {URI | null} A full URI string (e.g., "wss://[::1]:9010") or null if none found.
 */

export function getUriFromServerDescriptor(
    sd: ServerDescriptor,
    preferredCodec: AetherCodec,
): URI | null {
    Log.trace(
        "Getting URI from ServerDescriptor",
        {
            serverId: sd?.id,
            preferredCodec,
        },
    );

    if (
        !sd
        || !sd.ipAddress
        || !sd.ipAddress.addresses
        || sd.ipAddress.addresses.length === 0
    ) {
        Log.warn(
            "Cannot get URI from invalid ServerDescriptor",
            { serverId: sd?.id },
        );
        return null;
    }

    for (const addrInfo of sd.ipAddress.addresses) {
        const ipString =
            ipAddressToString(addrInfo.address);

        if (!ipString) {
            continue;
        }

        const isIPv4 =
            /^(\d{1,3}\.){3}\d{1,3}$/.test(ipString);
        const isIPv6 = ipString.includes(':');
        const isRawIP = isIPv4 || isIPv6;

        for (const cap of addrInfo.coderAndPorts) {
            if (cap.codec !== preferredCodec) {
                continue;
            }

            if (
                cap.codec === AetherCodec.WSS
                && isRawIP
            ) {
                Log.trace(
                    "Skipping WSS for raw IP address",
                    {
                        ip: ipString,
                        port: cap.port,
                    },
                );
                continue;
            }

            const hostString =
                isIPv6 ? `[${ipString}]` : ipString;

            let scheme: string;
            switch (cap.codec) {
                case AetherCodec.WS:
                    scheme = 'ws';
                    break;
                case AetherCodec.WSS:
                    scheme = 'wss';
                    break;
                case AetherCodec.UDP:
                    scheme = 'udp';
                    break;
                case AetherCodec.TCP:
                    scheme = 'tcp';
                    break;
                default:
                    continue;
            }

            const uri =
                `${scheme}://${hostString}:${cap.port}`;

            Log.trace(
                `Found preferred URI: ${uri}`,
                {
                    serverId: sd.id,
                    uri,
                },
            );

            return uri;
        }
    }

    Log.trace(
        "Requested codec is absent in ServerDescriptor",
        {
            serverId: sd.id,
            preferredCodec,
        },
    );

    return null;
}



/**
 * @class Connection
 * @template LT - The local API interface.
 * @template RT - The remote API interface.
 * @implements {Destroyable}
 * @description Base class for client connections (Registration and Work).
 */

export class ConnectionBase<LT, RT extends RemoteApi> implements Destroyable {

    protected readonly client: AetherCloudClient;
    public readonly uri: URI;
    public readonly connectFuture: AFuture;
    protected readonly metaContext: MetaContext | null;
    protected rootApi: RT | null = null;
    public readonly stateListeners = new EventConsumer<boolean>();
    protected readonly logCtxData: any;






    public constructor(
        client: AetherCloudClient,
        uri: URI,
        localApiMeta: FastMetaApi<LT, any>,
        remoteApiMeta: FastMetaApi<any, RT>,
    ) {
        this.uri = uri;
        this.client = client;
        this.logCtxData = {
            uri: uri.toString(),
        };
        this.connectFuture = AFuture.make();

        if (client.destroyer.isDestroyed()) {
            this.connectFuture.tryError(
                new Error("Client is destroyed"),
            );
            this.rootApi = null;
            this.metaContext = null;
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

        this.metaContext =
            (this.rootApi as any)
                .getFastMetaContext();

        this.metaContext.onWritable(
            (isWritable: boolean) => {
                this.onConnectionStateChanged(
                    isWritable,
                );

                if (isWritable) {
                    this.connectFuture.tryDone();
                } else {
                    Log.trace(
                        "Connection lost.",
                        {uri},
                    );
                }
            },
        );
    }




    /**
     * @description Gets the root remote API instance.
     * @returns {RT | null} The remote API instance or null if not connected.
     */
    public getRootApi(): RT | null {
        if (!this.connectFuture.isDone()) {
//             Log.warn("Accessing rootApi before connection attempt is complete (may be null).", this.logCtxData);
        }
        return this.rootApi;
    }

    /**
     * @description Gets the future that completes when the root remote API is ready.
     * @returns {ARFuture<RT>} The future for the remote API.
     */
    public getRootApiFuture(): AFuture {
        return this.connectFuture;
    }

    /** * @description Destroys the connection and underlying network client.
     * @param {boolean} _force - Not currently used in this implementation.
     * @returns {AFuture} A future that completes when the connection is closed.
     * @inheritdoc
     */

    public destroy(_force: boolean): AFuture {
        if (this.metaContext === null) {
            return AFuture.completed();
        }

        return this.metaContext.close();
    }



    /**
     * @description Checks equality based on the connection URI.
     * @param {unknown} other - The object to compare with.
     * @returns {boolean} True if the URIs are identical.
     */
    public equals(other: unknown): boolean {
        if (this === other) return true;
        if (other == null || !(other instanceof ConnectionBase)) return false;
        return this.uri === (other as ConnectionBase<any, any>).uri;
    }

    /** * @description Calculates hash code based on the connection URI.
     * @returns {number} The hash code.
     */
    public hashCode(): number {
        let hash = 0;
        for (let i = 0; i < this.uri.length; i++) {
            const char = this.uri.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0;
        }
        return hash;
    }

    protected onConnectionStateChanged(isWritable: boolean): void {
        // To be overridden by subclasses
    }


    public isWritable(): boolean {
        return this.metaContext !== null &&
            this.metaContext.isActive();
    }



}
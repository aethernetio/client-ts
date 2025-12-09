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
// [FIX] Добавлен импорт IPAddressWeb
import { AetherCodec, IPAddress, IPAddressV4, IPAddressV6, IPAddressWeb, ServerDescriptor } from './aether_api';
import { Log } from './aether_logging';
import {
    FastMetaApi,
    RemoteApi
} from './aether_fastmeta';
import { AFuture, ARFuture } from './aether_future';
import { FastMetaClient, FastMetaNet } from './aether_fastmeta_net';

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
export function getUriFromServerDescriptor(sd: ServerDescriptor, preferredCodec: AetherCodec): URI | null {
    Log.trace("Getting URI from ServerDescriptor", { serverId: sd?.id, preferredCodec });
    if (!sd || !sd.ipAddress || !sd.ipAddress.addresses || sd.ipAddress.addresses.length === 0) {
        Log.warn("Cannot get URI from invalid ServerDescriptor", { serverId: sd?.id });
        return null;
    }

    let fallbackUri: URI | null = null;

    for (const addrInfo of sd.ipAddress.addresses) {
        for (const cap of addrInfo.coderAndPorts) {
            const ipString = ipAddressToString(addrInfo.address);
            if (ipString) {
                // [NOTE] IPAddressWeb не является инстансом IPAddressV6, поэтому скобки [] не добавятся.
                // Это корректно для доменных имен (например, wss://example.com:443).
                const hostString = addrInfo.address instanceof IPAddressV6 ? `[${ipString}]` : ipString;
                const scheme = cap.codec === AetherCodec.WS ? 'ws' : (cap.codec === AetherCodec.WSS ? 'wss' : 'tcp');
                const uri = `${scheme}://${hostString}:${cap.port}`;

                if (cap.codec === preferredCodec) {
                    Log.trace(`Found preferred URI: $uri`, { serverId: sd.id, uri: uri });
                    return uri;
                }
                if (!fallbackUri) {
                    fallbackUri = uri;
                }
            }
        }
    }

    if (!fallbackUri) {
        Log.warn("No valid URI found in ServerDescriptor", { serverId: sd.id });
    } else {
        Log.trace(`Using fallback URI: $fallbackUri`, { serverId: sd.id, fallbackUri: fallbackUri });
    }
    return fallbackUri;
}


/**
 * @class Connection
 * @template LT - The local API interface.
 * @template RT - The remote API interface.
 * @implements {Destroyable}
 * @description Base class for client connections (Registration and Work).
 */
export class Connection<LT, RT extends RemoteApi> implements Destroyable {

    /**
     * @description Reference to the main client instance.
     * @protected
     * @type {AetherCloudClient}
     */
    protected readonly client: AetherCloudClient;

    /** * @description The URI of the connected server.
     * @type {URI}
     */
    public readonly uri: URI;

    /** * @description Future that completes when the connection is established and the root remote API is ready.
     * @type {ARFuture<RT>}
     */
    public readonly connectFuture: ARFuture<RT>;

    /** * @description The underlying FastMeta client implementation.
     * @protected
     * @type {FastMetaClient<LT, RT>}
     */
    protected readonly fastMetaClient: FastMetaClient<LT, RT> | null;

    /** * @description The root remote API instance, available after connectFuture completes.
     * @protected
     * @type {(RT | null)}
     */
    protected rootApi: RT | null = null;

    /** * @description Base logging context for this connection instance.
     * @protected
     * @type {*}
     */
    protected readonly logCtxData: any;

    /**
     * @constructor
     * @param {AetherCloudClient} client The main client instance.
     * @param {URI} uri The server URI to connect to.
     * @param {FastMetaApi<LT, any>} localApiMeta The META object for the local API implementation.
     * @param {FastMetaApi<unknown, RT>} remoteApiMeta The META object for the remote API.
     */
    constructor(
        client: AetherCloudClient,
        uri: URI,
        localApiMeta: FastMetaApi<LT, any>,
        remoteApiMeta: FastMetaApi<unknown, RT>
    ) {
        if (!uri) throw new Error("Connection URI cannot be null");
        this.uri = uri;
        this.client = client;
        this.logCtxData = { component: "Connection", uri: this.uri };
        this.connectFuture = ARFuture.of<RT>();

        Log.debug("Connection: Initializing...", this.logCtxData);

        if (client.destroyer.isDestroyed()) {
            Log.warn("Attempting to create connection on destroyed client", this.logCtxData);
            this.connectFuture.cancel();
            this.rootApi = null;
            this.fastMetaClient = null;
            return;
        }

        client.destroyer.add(this);

        const localApi = this as unknown as LT;

        /**
         * @description Provides the local API implementation to the network layer.
         * @type {AFunction<RT, LT>}
         */
        const localApiProvider: AFunction<RT, LT> = (remoteApi: RT) => {
            this.rootApi = remoteApi;
            return localApi;
        };

        /**
         * @description Callback for the network layer to report connection status.
         * @type {AConsumer<boolean>}
         */
        const writableConsumer: AConsumer<boolean> = (isWritable: boolean) => {
            if (isWritable) {
                if (this.rootApi) {
                    this.connectFuture.tryDone(this.rootApi);
                } else {
                    Log.error("Connection is writable but rootApi was not set.", this.logCtxData);
                    this.connectFuture.tryError(new Error("Connection established but rootApi is null."));
                }
            } else {
                Log.warn("Connection lost.", this.logCtxData);
                // TODO: Implement connection loss handling if necessary
            }
        };

        this.fastMetaClient = FastMetaNet.INSTANCE.get().makeClient(
            uri,
            localApiMeta,
            remoteApiMeta,
            localApiProvider,
            writableConsumer
        );

        client.destroyer.add(this.fastMetaClient);
    }

    /**
     * @description Gets the root remote API instance.
     * @returns {RT | null} The remote API instance or null if not connected.
     */
    public getRootApi(): RT | null {
        if (!this.connectFuture.isDone()) {
            Log.warn("Accessing rootApi before connection attempt is complete (may be null).", this.logCtxData);
        }
        return this.rootApi;
    }

    /**
     * @description Gets the future that completes when the root remote API is ready.
     * @returns {ARFuture<RT>} The future for the remote API.
     */
    public getRootApiFuture(): ARFuture<RT> {
        return this.connectFuture;
    }

    /** * @description Destroys the connection and underlying network client.
     * @param {boolean} _force - Not currently used in this implementation.
     * @returns {AFuture} A future that completes when the connection is closed.
     * @inheritdoc
     */
    public destroy(_force: boolean): AFuture {
        Log.info("Destroying Connection", this.logCtxData);
        if (!this.connectFuture.isFinalStatus()) {
            Log.trace("Cancelling connectFuture during destroy.", this.logCtxData);
            this.connectFuture.cancel();
        }

        if (this.fastMetaClient) {
            return this.fastMetaClient.destroy(_force);
        } else {
            return AFuture.completed();
        }
    }

    /** * @description Checks equality based on the connection URI.
     * @param {unknown} other - The object to compare with.
     * @returns {boolean} True if the URIs are identical.
     */
    public equals(other: unknown): boolean {
        if (this === other) return true;
        if (other == null || !(other instanceof Connection)) return false;
        return this.uri === (other as Connection<any, any>).uri;
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
}
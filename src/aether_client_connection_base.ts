// =============================================================================================
// FILE: aether_client_connection_base.ts
// PURPOSE: Contains the Connection base class (NOW NON-ABSTRACT) and IP address utility functions.
// DEPENDENCIES: aether_client_types.ts, aether_client_core.ts (for AetherCloudClient)
// =============================================================================================
// Import necessary types from aether_client_types.ts (assuming it's in the same directory)
import {ClientStartException} from './aether_types'
import {
    URI, Destroyable, AFuture, ARFuture, Log, FastMetaClient, FastMetaApi,
    FastApiContextLocal, ServerDescriptor, AetherCodec, IPAddress, IPAddressV4, IPAddressV6, RemoteApi
} from './aether_client_types'; // Re-exporting from aether_client_types
import { AetherCloudClient } from './aether_client'; // Assuming AetherCloudClient is available
import { FastMetaClientWebSocket } from './aether_client_types'; // Re-exporting from aether_client_types


/**
 * Converts an IPAddress DTO to its string representation.
 */
export function ipAddressToString(ipAddr: IPAddress): string | null {
    Log.trace("Formatting IPAddress", { ipAddress: ipAddr }); // <-- CHANGED
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
                 if (currentSeq.length > longestSeq.length) { // Check trailing sequence
                    longestSeq = currentSeq;
                 }

                 if (longestSeq.length > 2) { // Need at least two zeros (:0:0:)
                     if (ipStr === longestSeq.substring(1)) { // All zeros
                        ipStr = "::";
                     } else if (ipStr.startsWith(longestSeq.substring(1) + ":")) { // Leading zeros
                          ipStr = ipStr.replace(longestSeq.substring(1) + ":","::");
                     } else if (ipStr.endsWith(":" + longestSeq.substring(1))) { // Trailing zeros
                          ipStr = ipStr.replace(":" + longestSeq.substring(1),"::");
                     } else { // Middle zeros
                         ipStr = ipStr.replace(longestSeq, ":");
                     }
                 }
                return ipStr;
            }
        }
    } catch (e) {
         Log.error("Error formatting IPAddress", e as Error, { ipAddress: ipAddr }); // <-- CHANGED
    }

    Log.error("Unknown or invalid IPAddress format provided to ipAddressToString", { ipAddress: ipAddr }); // <-- CHANGED
    return null;
}

/**
 * Gets a suitable URI (WebSocket preferred) from a ServerDescriptor.
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
                 const hostString = addrInfo.address instanceof IPAddressV6 ? `[${ipString}]` : ipString;
                const scheme = cap.codec === AetherCodec.WEBSOCKET ? 'wss' : 'tcp'; // Assuming wss for WebSocket
                const uri = `${scheme}://${hostString}:${cap.port}`;
                if (cap.codec === preferredCodec) {
                    Log.trace(`Found preferred URI: ${uri}`, { serverId: sd.id });
                    return uri;
                }
                if (!fallbackUri) fallbackUri = uri;
            }
        }
     }
    if (!fallbackUri) {
        Log.warn("No valid URI found in ServerDescriptor", { serverId: sd.id });
    } else {
        Log.trace(`Using fallback URI: ${fallbackUri}`, { serverId: sd.id });
    }
    return fallbackUri;
}


// --- Connection Class (REMOVED abstract) ---
/**
 * Base class for client connections (Registration and Work).
 */
export class Connection<LT, RT extends RemoteApi> implements Destroyable { // <-- REMOVED abstract
    protected readonly client: AetherCloudClient;
    /** The URI of the connected server. */
    public readonly uri: URI;
    /** Future that completes when the connection is established and the root remote API is ready. */
    public readonly connectFuture: ARFuture<RT>;
    protected readonly fastMetaClient: FastMetaClient<LT, RT>;
    protected rootApi: RT | null = null; // Java: volatile
    /** Base logging context for this connection instance. */
    protected readonly logCtxData: any;

    constructor(
        client: AetherCloudClient,
         uri: URI,
        localApiMeta: FastMetaApi<LT, any>,
        remoteApiMeta: FastMetaApi<unknown, RT>,
        clientImpl?: FastMetaClient<LT, RT>
    ) {
        if (!uri) throw new Error("Connection URI cannot be null");
        this.uri = uri;
        this.client = client;
        // Set up logging context for this specific connection
        this.logCtxData = { ...client.logClientContext.data, component: "Connection", uri: this.uri };

        Log.debug("Connection: Initializing...", this.logCtxData);

        this.fastMetaClient = clientImpl || new FastMetaClientWebSocket<LT, RT>();
        this.connectFuture = ARFuture.of<RT>();

        if (client.destroyer.isDestroyed()) {
            Log.warn("Attempting to create connection on destroyed client", this.logCtxData);
            this.fastMetaClient.close();
            this.connectFuture.cancel();
            this.rootApi = null;
            return;
        }

        client.destroyer.add(this);
        client.destroyer.add(this.fastMetaClient);

        const localApi = this as unknown as LT;


        Log.debug("Connection: Initiating connect...", this.logCtxData);

        this.fastMetaClient.connect(uri, localApiMeta, remoteApiMeta,
            (remoteApi: RT) => {
                 this.rootApi = remoteApi;
                return localApi; // Return the created/cast localApi instance
            })
            .map((_context: FastApiContextLocal<LT>): RT => {
                if (!this.rootApi) {
                     // This should ideally not happen if connect succeeded
                     Log.error("Root API not set after successful connection context creation.", this.logCtxData);
                     throw new Error("Root API not set after successful connection context creation.");
                }
                 Log.debug("Connection: FastMeta connect successful, remote API ready.", this.logCtxData);
                 return this.rootApi;
            })
            .to(
                (remoteApiInstance: RT) => this.connectFuture.tryDone(remoteApiInstance),
                (err: Error) => {
                     Log.error("Connection failed", err, this.logCtxData);
                     this.connectFuture.error(new ClientStartException(`Connection to ${this.uri} failed`, err));
                }
            )
            .onCancel(() => {
                 Log.warn("Connection cancelled", this.logCtxData);
                 this.connectFuture.cancel();
            });
    }

    /**
     * Gets the root remote API instance.
     * @returns {RT | null} The remote API instance or null.
     */
    public getRootApi(): RT | null {
        if (!this.connectFuture.isFinalStatus()) {
             Log.warn("Accessing rootApi before connection attempt is complete (may be null or error).", this.logCtxData);
        }
        return this.rootApi;
    }

    /**
     * Gets the future that completes when the root remote API is ready.
     * @returns {ARFuture<RT>} The future for the remote API.
     */
    public getRootApiFuture(): ARFuture<RT> {
        return this.connectFuture;
    }

    /** @inheritdoc */
    public destroy(_force: boolean): AFuture {
        Log.info("Destroying Connection", this.logCtxData);
        if (!this.connectFuture.isFinalStatus()) {
             Log.trace("Cancelling connectFuture during destroy.", this.logCtxData);
             this.connectFuture.cancel();
        }
        return this.fastMetaClient.close();
    }

    /** @inheritdoc */
    [Symbol.dispose](): void {
        Log.info("Disposing Connection", this.logCtxData);
        this.destroy(true).onError(e => Log.error("Error during Connection dispose/destroy", e, this.logCtxData));
    }

    /** Checks equality based on the connection URI. */
    public equals(other: unknown): boolean {
        if (this === other) return true;
        if (other == null || !(other instanceof Connection)) return false;
        return this.uri === other.uri;
    }

    /** Calculates hash code based on the connection URI. */
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
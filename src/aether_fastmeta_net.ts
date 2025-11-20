import { AFuture, ARFuture } from './aether_future';
import {
    Destroyable,
    URI,
    AFunction,
    AConsumer,
    ClientStartException,
    ClientApiException
} from './aether_types';
import {
    FastMetaApi,
    RemoteApi,
    FastFutureContext,
    FastApiContextLocal,
    SerializerPackNumber,
    DeserializerPackNumber
} from './aether_fastmeta';
import { Log, LNode } from './aether_logging';
import { DataInOut } from './aether_datainout';
import WebSocket from 'isomorphic-ws';

// =============================================================================================
// SECTION 1: FastMetaNet and related Network Interfaces
// =============================================================================================

/**
 * @interface FastMetaNet
 * @description Factory interface for creating FastMeta network clients and servers.
 */
export interface FastMetaNet {
    makeClient<LT, RT extends RemoteApi>(
        uri: URI,
        lt: FastMetaApi<LT, any>,
        rt: FastMetaApi<any, RT>,
        localApi: AFunction<RT, LT>,
        writableConsumer: AConsumer<boolean>
    ): FastMetaClient<LT, RT>;

    makeServer<LT, RT extends RemoteApi>(
        uri: URI,
        localApiMeta: FastMetaApi<LT, any>,
        remoteApiMeta: FastMetaApi<any, RT>,
        handler: FastMetaServer.Handler<LT, RT>
    ): FastMetaServer<LT, RT>;
}

export namespace FastMetaNet {
    /**
     * @interface Connection
     * @implements {Destroyable}
     * @description Represents an active network connection.
     */
    export interface Connection<LT, RT extends RemoteApi> extends Destroyable {
        read(): void;
        stopRead(): void;
        write(data: Uint8Array): AFuture;
        getLocalApi(): LT;
        getRemoteApi(): RT;
        isWritable(): boolean;
        getMetaContext(): FastFutureContext;
    }

    /**
     * @class DefaultFastMetaNetImpl
     * @implements {FastMetaNet}
     * @description Default implementation using WebSocket for clients.
     * @internal
     */
    class DefaultFastMetaNetImpl implements FastMetaNet {
        public makeClient<LT, RT extends RemoteApi>(
            uri: URI,
            lt: FastMetaApi<LT, any>,
            rt: FastMetaApi<any, RT>,
            localApi: AFunction<RT, LT>,
            writableConsumer: AConsumer<boolean>
        ): FastMetaClient<LT, RT> {
            return new FastMetaClientAdapter<LT, RT>(
                uri,
                lt,
                rt,
                localApi,
                writableConsumer
            );
        }

        public makeServer<LT, RT extends RemoteApi>(
            _uri: URI,
            _localApiMeta: FastMetaApi<LT, any>,
            _remoteApiMeta: FastMetaApi<any, RT>,
            _handler: FastMetaServer.Handler<LT, RT>
        ): FastMetaServer<LT, RT> {
            throw new Error("Server implementation (makeServer) is not supported in this FastMetaNet build.");
        }
    }

    /**
     * @description Singleton instance container for FastMetaNet.
     */
    class Instance {
        private static _instance: FastMetaNet | null = null;

        public static get(): FastMetaNet {
            if (!this._instance) {
                this._instance = new DefaultFastMetaNetImpl();
            }
            return this._instance;
        }
    }

    export const INSTANCE = Instance;
}

export interface FastMetaClient<LT, RT extends RemoteApi> extends FastMetaNet.Connection<LT, RT> {
    flush(sendFuture: AFuture): void;
}

export interface FastMetaServer<LT, RT extends RemoteApi> extends Destroyable {
    stop(): AFuture;
    handlers(): Iterable<FastMetaNet.Connection<LT, RT>>;
}

export namespace FastMetaServer {
    export interface Handler<LT, RT extends RemoteApi> {
        onNewConnection(connection: FastMetaNet.Connection<LT, RT>): LT;
        onConnectionClose(connection: FastMetaNet.Connection<LT, RT>): void;
    }
}

// =============================================================================================
// SECTION 2: Enhanced WebSocket Implementation with Robust Binary Data Handling
// =============================================================================================

/**
 * @interface ReconnectConfig
 * @description Configuration for WebSocket auto-reconnect logic.
 * @internal
 */
interface ReconnectConfig {
    maxAttempts: number;
    baseDelay: number;
    maxDelay: number;
    backoffMultiplier: number;
}

/**
 * @enum ConnectionState
 * @description Business-logic level connection state.
 */
export enum ConnectionState {
    CONNECTING = 'connecting',
    CONNECTED = 'connected',
    DISCONNECTED = 'disconnected',
    RECONNECTING = 'reconnecting'
}

/**
 * @class FastMetaClientWebSocket
 * @description Universal WebSocket implementation with robust binary data handling
 * that works reliably in Browser, Node.js, and Jest environments.
 * @internal
 */
class FastMetaClientWebSocket<LT, RT extends RemoteApi> implements Destroyable {
    private websocket: WebSocket | null = null;
    private context: FastApiContextLocal<LT> | null = null;
    private connectFuture: ARFuture<FastApiContextLocal<LT>>;
    private log: LNode;
    private uri: URI = "";
    private localApiMeta: FastMetaApi<LT, any> | null = null;
    private localApiProvider: AFunction<RT, LT> | null = null;
    private remoteApiMeta: FastMetaApi<any, RT> | null = null;
    private receiveBuffer: DataInOut = new DataInOut();
    private reconnectConfig: ReconnectConfig;
    private reconnectAttempts: number = 0;
    private reconnectTimeout: NodeJS.Timeout | null = null;
    private isManualClose: boolean = false;
    private isReconnecting: boolean = false;
    private connectionState: ConnectionState = ConnectionState.DISCONNECTED;
    private stateChangeCallbacks: Array<(state: ConnectionState) => void> = [];
    private closeFuture: AFuture | null = null;

    /**
     * @private
     * @type {boolean}
     * @description Universal environment detection that works in all contexts
     */
    private readonly isNodeEnv: boolean;

    private connectionStats = {
        connected: false,
        lastConnectTime: 0,
        totalReconnects: 0,
        connectionUri: "",
        totalBytesReceived: 0,
        totalBytesSent: 0,
        totalMessagesReceived: 0,
        totalMessagesSent: 0
    };

    constructor(reconnectConfig?: Partial<ReconnectConfig>) {
        this.log = Log.of({ component: 'FastMetaClientWebSocket' });
        this.connectFuture = ARFuture.of<FastApiContextLocal<LT>>();

        // Universal environment detection
        this.isNodeEnv = typeof process !== 'undefined' &&
                        process.versions != null &&
                        process.versions.node != null;

        this.reconnectConfig = {
            maxAttempts: 5,
            baseDelay: 1000,
            maxDelay: 30000,
            backoffMultiplier: 2,
            ...reconnectConfig
        };

        Log.debug("FastMetaClientWebSocket initialized", {
            isNodeEnv: this.isNodeEnv,
            hasProcess: typeof process !== 'undefined',
            hasVersions: typeof process !== 'undefined' && process.versions != null
        });
    }

    public connect(
        uri: URI,
        localApiMeta: FastMetaApi<LT, any>,
        remoteApiMeta: FastMetaApi<any, RT>,
        localApiProvider: AFunction<RT, LT>
    ): ARFuture<FastApiContextLocal<LT>> {
        using _l = Log.context(this.log);
        Log.info("Connecting...", { uri });

        if (this.websocket || !this.connectFuture.isNotDone()) {
            Log.warn("Connect called on an already connecting or connected client.", { uri });
            return this.connectFuture;
        }

        this.uri = uri;
        this.connectionStats.connectionUri = uri;
        this.localApiMeta = localApiMeta;
        this.remoteApiMeta = remoteApiMeta;
        this.localApiProvider = localApiProvider;
        this.isManualClose = false;

        this.setConnectionState(ConnectionState.CONNECTING);
        this.createWebSocketConnection();

        return this.connectFuture;
    }

    /**
     * @private
     * @description Creates WebSocket with universal binary type handling
     */
    private createWebSocketConnection(): void {
        using _l = Log.context(this.log);

        try {
            Log.debug("Creating WebSocket connection", {
                uri: this.uri,
                environment: this.isNodeEnv ? 'Node.js' : 'Browser'
            });

            this.websocket = new WebSocket(this.uri);

            // Universal binary type setting that works in all environments
            if (this.isNodeEnv) {
                // In Node.js/Jest, use 'nodebuffer' for best compatibility
                (this.websocket as any).binaryType = "nodebuffer";
            } else {
                // In browser, use 'arraybuffer'
            this.websocket.binaryType = "arraybuffer";
            }

            this.setupUniversalEventHandlers();
            Log.debug("WebSocket created successfully");

        } catch (e) {
            const error = e as Error;
            Log.error("Failed to create WebSocket", error, { uri: this.uri });
            this.handleConnectionError(new ClientStartException(
                `Failed to create WebSocket: ${error.message}`,
                error
            ));
        }
    }

    /**
     * @private
     * @description Universal event handler setup that works in all environments
     */
    private setupUniversalEventHandlers(): void {
        if (!this.websocket) return;

        // Standard WebSocket events
        this.websocket.onopen = () => {
            this.handleOpen();
        };

        this.websocket.onerror = (event: Event) => {
            this.handleErrorEvent(event);
        };

        this.websocket.onclose = (event: CloseEvent) => {
            this.handleCloseEvent(event);
        };

        // Universal message handler with robust binary data extraction
        this.websocket.onmessage = (event: MessageEvent) => {
            this.handleUniversalMessage(event);
        };

        // Additional Node.js specific handlers for 'ws' library
        if (this.isNodeEnv && this.websocket) {
            const ws = this.websocket as any;

            if (typeof ws.on === 'function') {
                ws.on('error', (error: Error) => {
                    Log.debug("WebSocket 'error' event (Node.js)", { error: error.message });
                    this.handleConnectionError(new ClientApiException(
                        `WebSocket error (Node.js): ${error.message}`,
                        error
                    ));
                });
            }
        }
    }

    /**
     * @private
     * @description Universal message handler that extracts binary data from any environment
     * @param {MessageEvent} event The message event
     */
    private handleUniversalMessage(event: MessageEvent): void {
        using _l = Log.context(this.log);

        if (!this.context || !this.localApiMeta) {
            Log.warn("Received WebSocket message, but context or localApiMeta is not initialized");
            return;
        }

        try {
            let binaryData: Uint8Array;

            // Universal binary data extraction that works in all environments
            const data = event.data;

            // Debug logging for data type analysis
            Log.trace("WebSocket message received", {
                dataType: typeof data,
                constructor: data?.constructor?.name,
                isArrayBuffer: data instanceof ArrayBuffer,
                isBuffer: typeof Buffer !== 'undefined' && data instanceof Buffer,
                isBlob: data instanceof Blob,
                hasByteLength: data && typeof data.byteLength === 'number',
                hasLength: data && typeof data.length === 'number'
            });

            // Environment-specific data extraction
            if (this.isNodeEnv) {
                // Node.js/Jest environment
                if (typeof Buffer !== 'undefined' && data instanceof Buffer) {
                    binaryData = new Uint8Array(data);
                } else if (data instanceof ArrayBuffer) {
                    binaryData = new Uint8Array(data);
                } else if (data && typeof data === 'object' && data.buffer instanceof ArrayBuffer) {
                    // Handle TypedArray views
                    binaryData = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
                } else if (data && typeof data === 'object' && typeof data.byteLength === 'number') {
                    // Handle ArrayBuffer-like objects
                    binaryData = new Uint8Array(data);
                } else {
                    Log.warn("Unsupported binary data format in Node.js", {
                        constructor: data?.constructor?.name,
                        type: typeof data
                    });
                return;
                }
            } else {
                // Browser environment
                if (data instanceof ArrayBuffer) {
                    binaryData = new Uint8Array(data);
                } else if (data instanceof Blob) {
                    this.convertBlobToArrayBuffer(data);
                return;
                } else if (data && typeof data === 'object' && data.buffer instanceof ArrayBuffer) {
                    binaryData = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
            } else {
                    Log.warn("Unsupported binary data format in Browser", {
                        constructor: data?.constructor?.name,
                        type: typeof data
                });
                return;
            }
            }

            this.processBinaryData(binaryData);

        } catch (e) {
            Log.error("Error processing WebSocket message", e as Error, {
                dataType: typeof event.data,
                constructor: event.data?.constructor?.name
            });
        }
    }

    /**
     * @private
     * @description Converts Blob to ArrayBuffer (browser only)
     * @param {Blob} blob The blob to convert
     */
    private async convertBlobToArrayBuffer(blob: Blob): Promise<void> {
        using _l = Log.context(this.log);

        try {
            const arrayBuffer = await blob.arrayBuffer();
            const binaryData = new Uint8Array(arrayBuffer);
            this.processBinaryData(binaryData);
        } catch (e) {
            Log.error("Error converting blob to ArrayBuffer", e as Error);
        }
    }

    /**
     * @private
     * @description Processes binary data with frame parsing
     * @param {Uint8Array} binaryData The binary data to process
     */
    private processBinaryData(binaryData: Uint8Array): void {
        using _l = Log.context(this.log);

        this.connectionStats.totalBytesReceived += binaryData.length;
        this.connectionStats.totalMessagesReceived++;

        Log.trace("Processing binary data", {
            bytes: binaryData.length,
            totalBytesReceived: this.connectionStats.totalBytesReceived
        });

        // Write to receive buffer
        this.receiveBuffer.write(binaryData);

        // Process complete frames
        while (this.receiveBuffer.getSizeForRead() > 0) {
            const originalReadPos = this.receiveBuffer.getReadPos();

            try {
                // Try to read frame length (minimum 4 bytes needed)
                if (this.receiveBuffer.getSizeForRead() < 4) {
                    this.receiveBuffer.setReadPos(originalReadPos);
                    break;
                }

                const payloadSize = Number(DeserializerPackNumber.INSTANCE.put(this.receiveBuffer));

                // Check if we have complete frame
                if (this.receiveBuffer.getSizeForRead() >= payloadSize) {
                    const payload = this.receiveBuffer.readBytes(payloadSize);
                    Log.trace("Processing complete frame", {
                        frameSize: payloadSize,
                        remainingBuffer: this.receiveBuffer.getSizeForRead()
                    });

                    // Process frame through local API
                    try {
                    this.localApiMeta.makeLocal_fromBytes_ctxLocal(this.context, payload);
                    } catch (processingError) {
                        Log.error("Error processing frame payload", processingError as Error);
                    }

                } else {
                    // Incomplete frame, wait for more data
                    this.receiveBuffer.setReadPos(originalReadPos);
                    break;
                }

            } catch (e) {
                Log.error("Error parsing frame from receive buffer", e as Error);
                // Reset buffer on parsing error
                this.receiveBuffer.clear();
                break;
            }
        }
    }

    /**
     * @private
     * @description Handles WebSocket open event
     */
    private handleOpen(): void {
        this.log = Log.of({
            component: 'FastMetaClientWebSocket',
            connectionUri: this.uri
        });

        using _l = Log.context(this.log);
        Log.info("WebSocket connection established");

        this.reconnectAttempts = 0;
        this.isReconnecting = false;
        this.connectionStats.connected = true;
        this.connectionStats.lastConnectTime = Date.now();
        this.connectionStats.totalReconnects++;

        if (!this.remoteApiMeta || !this.localApiProvider || !this.websocket) {
            const err = new ClientStartException("Internal state error: API metadata or websocket missing during onOpen");
            Log.error(err.message, err);
            this.connectFuture.error(err);
            this.close();
            return;
        }

        try {
            const context = new FastApiContextLocal<LT>((self: FastApiContextLocal<LT>) => {
                const remoteApi = this.remoteApiMeta!.makeRemote(self);
                const localApi = this.localApiProvider!(remoteApi);
                return localApi;
            });

            this.context = context;

            // Override flush method for WebSocket-specific sending
            this.context.flush = (sendFuture?: AFuture): AFuture => {
                if (!sendFuture) {
                    sendFuture = AFuture.make();
                }

                using _l_flush = Log.context(this.log);

                try {
                    if (this.websocket && this.isConnected()) {
                        const dataArray = context.remoteDataToArrayAsArray();

                        if (dataArray.length > 0) {
                            Log.trace("Flushing data to WebSocket", { bytes: dataArray.length });

                            // Create frame with length prefix
                            const frameBuffer = new DataInOut();
                            SerializerPackNumber.INSTANCE.put(frameBuffer, dataArray.length);
                            frameBuffer.write(dataArray);
                            const finalBytesToSend = frameBuffer.toArray();

                            this.connectionStats.totalBytesSent += finalBytesToSend.length;
                            this.connectionStats.totalMessagesSent++;

                            this.sendWebSocketData(finalBytesToSend, sendFuture);
                        } else {
                            Log.trace("Flush called, but no data to send");
                            sendFuture.tryDone();
                        }
                    } else {
                        Log.warn("Flush called, but WebSocket is not open", {
                            reconnecting: this.isReconnecting,
                            readyState: this.websocket?.readyState
                        });
                        sendFuture.error(new Error("WebSocket is not open"));
                    }
                } catch (e) {
                    Log.error("Error during WebSocket flush preparation", e as Error);
                    this.handleConnectionError(e as Error);
                    sendFuture.error(e as Error);
                }

                return sendFuture;
            };

            this.connectFuture.tryDone(this.context);
            this.setConnectionState(ConnectionState.CONNECTED);

        } catch (e) {
            Log.error("Error during connection setup (onOpen)", e as Error);
            this.connectFuture.error(new ClientStartException(
                "Failed to setup context onOpen",
                e as Error
            ));
            this.scheduleReconnect();
        }
    }

    /**
     * @private
     * @description Universal WebSocket data sending that works in all environments
     * @param {Uint8Array} data The data to send
     * @param {AFuture} sendFuture The future to complete based on send result
     */
    private sendWebSocketData(data: Uint8Array, sendFuture: AFuture): void {
        if (!this.websocket) {
            sendFuture.error(new Error("WebSocket not available"));
            return;
        }

        try {
            // Environment-specific send methods
            if (this.isNodeEnv) {
                // Node.js 'ws' library with callback support
                (this.websocket as any).send(data, (sendError: Error) => {
                    if (sendError) {
                        Log.error("Error sending data through WebSocket (Node.js)", sendError);
                        this.handleConnectionError(sendError);
                        sendFuture.error(sendError);
                    } else {
                        Log.trace("Binary frame sent successfully (Node.js)", {
                            totalBytes: data.length
                        });
                        sendFuture.tryDone();
                    }
                });
            } else {
                // Browser environment (fire-and-forget)
                this.websocket.send(data);
                Log.trace("Binary frame sent (Browser)", {
                    totalBytes: data.length
                });
                sendFuture.tryDone();
            }
        } catch (e) {
            const error = e as Error;
            Log.error("Error during WebSocket send operation", error);
            this.handleConnectionError(error);
            sendFuture.error(error);
        }
    }

    /**
     * @private
     * @description Handles WebSocket error events
     * @param {Event} event The error event
     */
    private handleErrorEvent(event: Event): void {
        using _l = Log.context(this.log);

        const error = (event as ErrorEvent).error ||
                     new Error(`WebSocket error event: ${event.type}`);

        Log.error("WebSocket error event", error);
        this.handleConnectionError(new ClientApiException(
            `WebSocket error: ${error.message}`,
            error
        ));
    }

    /**
     * @private
     * @description Handles WebSocket close events
     * @param {CloseEvent} event The close event
     */
    private handleCloseEvent(event: CloseEvent): void {
        using _l = Log.context(this.log);

        Log.info("WebSocket connection closed", {
            code: event.code,
            reason: event.reason,
            wasClean: event.wasClean
        });

        this.connectionStats.connected = false;
        this.setConnectionState(ConnectionState.DISCONNECTED);

        if (!this.connectFuture.isFinalStatus()) {
            this.connectFuture.error(new ClientApiException(
                `WebSocket closed unexpectedly (Code: ${event.code}, Reason: ${event.reason})`
            ));
        }

        // Cleanup resources
        this.context?.close();
        this.context = null;
        this.websocket = null;

        if (this.closeFuture) {
            this.closeFuture.tryDone();
            this.closeFuture = null;
        }

        // Attempt reconnect if not manually closed
        if (!this.isManualClose && !this.isReconnecting) {
            this.scheduleReconnect();
        }
    }

    /**
     * @private
     * @description Handles connection errors and initiates reconnection
     * @param {Error} error The connection error
     */
    private handleConnectionError(error: Error): void {
        using _l = Log.context(this.log);
        Log.error("Connection error", error);

        if (!this.connectFuture.isFinalStatus()) {
            this.connectFuture.error(error);
        }

        if (this.closeFuture && !this.closeFuture.isFinalStatus()) {
            this.closeFuture.tryError(error);
            this.closeFuture = null;
        }

        this.connectionStats.connected = false;
        this.setConnectionState(ConnectionState.DISCONNECTED);

        if (!this.isManualClose) {
            this.scheduleReconnect();
        }
    }

    /**
     * @private
     * @description Checks if WebSocket is connected
     * @returns {boolean} True if connected
     */
    private isConnected(): boolean {
        return this.websocket !== null && this.websocket.readyState === WebSocket.OPEN;
    }

    /**
     * @private
     * @description Schedules auto-reconnect with exponential backoff
     */
    private scheduleReconnect(): void {
        using _l = Log.context(this.log);

        if (this.isManualClose || this.reconnectAttempts >= this.reconnectConfig.maxAttempts) {
            if (!this.isManualClose) {
                Log.info("Auto-reconnect stopped: max attempts reached", {
                    maxAttemptsReached: this.reconnectAttempts >= this.reconnectConfig.maxAttempts,
                    totalAttempts: this.reconnectAttempts
                });
            }
            this.setConnectionState(ConnectionState.DISCONNECTED);
            return;
        }

        this.reconnectAttempts++;
        this.isReconnecting = true;
        const delay = this.calculateReconnectDelay();

        Log.info("Scheduling auto-reconnect", {
            attempt: this.reconnectAttempts,
            maxAttempts: this.reconnectConfig.maxAttempts,
            delayMs: delay
        });

        this.setConnectionState(ConnectionState.RECONNECTING);

        this.reconnectTimeout = setTimeout(() => {
            if (this.isManualClose) return;
            Log.info("Attempting auto-reconnect", { attempt: this.reconnectAttempts });
            this.connectFuture = ARFuture.of<FastApiContextLocal<LT>>();
            this.createWebSocketConnection();
        }, delay);
    }

    /**
     * @private
     * @description Calculates reconnect delay using exponential backoff
     * @returns {number} Delay in milliseconds
     */
    private calculateReconnectDelay(): number {
        const delay = this.reconnectConfig.baseDelay *
            Math.pow(this.reconnectConfig.backoffMultiplier, this.reconnectAttempts - 1);
        return Math.min(delay, this.reconnectConfig.maxDelay);
    }

    /**
     * @private
     * @description Sets connection state and notifies listeners
     * @param {ConnectionState} state The new state
     */
    private setConnectionState(state: ConnectionState): void {
        if (this.connectionState !== state) {
            this.connectionState = state;
            Log.debug("Connection state changed", { state: state });

            // Notify state change callbacks with error protection
            this.stateChangeCallbacks.forEach(callback => {
                try {
                    callback(state);
                } catch (e) {
                    Log.error("Error in connection state callback", e as Error);
                }
            });
        }
    }

    public onStateChange(callback: (state: ConnectionState) => void): void {
        this.stateChangeCallbacks.push(callback);
    }

    public getConnectionState(): ConnectionState {
        return this.connectionState;
    }

    public close(): AFuture {
        using _l = Log.context(this.log);
        Log.info("Closing FastMetaClientWebSocket");

        if (this.closeFuture) {
            return this.closeFuture;
        }

        this.closeFuture = AFuture.make();
        this.isManualClose = true;
        this.isReconnecting = false;

        // Clear any pending reconnect
        if (this.reconnectTimeout) {
            clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = null;
        }

        // Cancel connection future if still pending
        if (!this.connectFuture.isFinalStatus()) {
            this.connectFuture.cancel();
        }

        // Cleanup context
        this.context?.close();
        this.context = null;

        // Close WebSocket if available
        if (this.websocket) {
            try {
                if (this.websocket.readyState === WebSocket.OPEN ||
                    this.websocket.readyState === WebSocket.CONNECTING) {
                    Log.debug("Initiating WebSocket close (code 1000)");
                    this.websocket.close(1000, "Client initiated close");
                } else {
                    Log.debug("WebSocket already closing or closed", {
                        state: this.websocket.readyState
                    });
                    this.closeFuture.tryDone();
                }
            } catch (e) {
                Log.warn("Error during WebSocket close", e as Error);
                this.closeFuture.tryError(e as Error);
            }
        } else {
            Log.debug("Close called but no WebSocket instance exists");
            this.closeFuture.tryDone();
        }

        this.connectionStats.connected = false;
        this.reconnectAttempts = 0;

        return this.closeFuture;
    }

    public getConnectionStats(): any {
        return {
            ...this.connectionStats,
            reconnectAttempts: this.reconnectAttempts,
            isReconnecting: this.isReconnecting,
            isManualClose: this.isManualClose,
            connectionState: this.connectionState,
            environment: this.isNodeEnv ? 'Node.js' : 'Browser'
        };
    }

    public getContext(): FastApiContextLocal<LT> | null {
        return this.context;
    }

    public getLocalApi(): LT {
        if (!this.context) throw new Error("Cannot getLocalApi: context is not initialized");
        return this.context.localApi;
    }

    public getRemoteApi(): RT {
        if (!this.context) throw new Error("Cannot getRemoteApi: context is not initialized");
        const remote = this.remoteApiMeta?.makeRemote(this.context);
        if (!remote) throw new Error("Cannot getRemoteApi: failed to create remote from context");
        return remote;
    }

    public destroy(force: boolean): AFuture {
        return this.close();
    }

    [Symbol.dispose](): void {
        this.destroy(true);
    }
}

// =============================================================================================
// SECTION 3: FastMetaClientAdapter
// =============================================================================================

/**
 * @class FastMetaClientAdapter
 * @implements {FastMetaClient<LT, RT>}
 * @description Adapter that implements FastMetaClient interface
 * @internal
 */
class FastMetaClientAdapter<LT, RT extends RemoteApi> implements FastMetaClient<LT, RT> {
    private readonly wsClient: FastMetaClientWebSocket<LT, RT>;
    private readonly writableConsumer: AConsumer<boolean>;
    private context: FastApiContextLocal<LT> | null = null;
    private readonly log: LNode;
    private readonly contextFuture: ARFuture<FastApiContextLocal<LT>>;

    constructor(
        uri: URI,
        lt: FastMetaApi<LT, any>,
        rt: FastMetaApi<any, RT>,
        localApiProvider: AFunction<RT, LT>,
        writableConsumer: AConsumer<boolean>
    ) {
        this.writableConsumer = writableConsumer;
        this.log = Log.of({ component: "FastMetaClientAdapter", uri: uri });

        this.wsClient = new FastMetaClientWebSocket<LT, RT>();

        // Forward connection state changes to writable consumer
        this.wsClient.onStateChange((state) => {
            try {
                this.writableConsumer(state === ConnectionState.CONNECTED);
            } catch (e) {
                Log.error("Error in writableConsumer callback", e as Error);
            }
        });

        this.contextFuture = this.wsClient.connect(uri, lt, rt, localApiProvider);

        this.contextFuture.to((ctx: FastApiContextLocal<LT>) => {
            this.context = ctx;
        }).onError((error) => {
            Log.error("Failed to establish connection context", error);
            this.context = null;
        });
    }

    public flush(sendFuture: AFuture): void {
        if (this.context) {
            this.context.flush(sendFuture);
        } else {
            Log.warn("Flush called, but client context is not available", {
                uri: this.wsClient.getConnectionStats().connectionUri
            });
            sendFuture.error(new Error("Cannot flush: client context not available"));
        }
    }

    public close(): AFuture {
        this.context = null;
        return this.wsClient.close();
    }

    public destroy(force: boolean): AFuture {
        this.context = null;
        return this.wsClient.destroy(force);
    }

    [Symbol.dispose](): void {
        this.destroy(true);
    }

    public getLocalApi(): LT {
        const ctx = this.context;
        if (!ctx) {
            throw new Error("Cannot getLocalApi: context is not initialized or connection failed");
        }
        return ctx.localApi;
    }

    public getRemoteApi(): RT {
        const ctx = this.context;
        if (!ctx) {
            throw new Error("Cannot getRemoteApi: context is not initialized or connection failed");
        }
        return this.wsClient.getRemoteApi();
    }

    public getMetaContext(): FastFutureContext {
        const ctx = this.context;
        if (!ctx) {
            throw new Error("Cannot getMetaContext: context is not initialized or connection failed");
        }
        return ctx;
    }

    public isWritable(): boolean {
        return this.wsClient.getConnectionState() === ConnectionState.CONNECTED;
    }

    public read(): void {
        // No-op for WebSocket
    }

    public stopRead(): void {
        // No-op for WebSocket
    }

    public write(data: Uint8Array): AFuture {
        const ctx = this.context;
        if (!ctx) {
            const err = new Error("Cannot write: context is not initialized");
            Log.warn(err.message);
            return AFuture.ofThrow(err);
        }

        // Create frame with length prefix
        const frameBuffer = new DataInOut();
        SerializerPackNumber.INSTANCE.put(frameBuffer, data.length);
        frameBuffer.write(data);
        const finalBytesToSend = frameBuffer.toArray();

        // Use WebSocket directly for low-level write
        const ws = (this.wsClient as any).websocket;
        if (ws && ws.readyState === WebSocket.OPEN) {
            try {
                ws.send(finalBytesToSend);
                return AFuture.completed();
            } catch (e) {
                return AFuture.ofThrow(e as Error);
            }
        } else {
            return AFuture.ofThrow(new Error("WebSocket is not open for writing"));
        }
    }
}
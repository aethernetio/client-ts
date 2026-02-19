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
    DeserializerPackNumber,
    FlushReport
} from './aether_fastmeta';
import { Log, LNode } from './aether_logging';
import { DataInOut } from './aether_datainout';

/**
 * @interface IUniversalWebSocket
 * @description Universal WebSocket interface for browser and Node.js environments
 */
interface IUniversalWebSocket {
    onopen: ((event: any) => void) | null;
    onerror: ((event: any) => void) | null;
    onclose: ((event: any) => void) | null;
    onmessage: ((event: any) => void) | null;
    readonly readyState: number;
    close(code?: number, reason?: string): void;
    send(data: any): void;
}

/**
 * @class BrowserWebSocketWrapper
 * @description WebSocket wrapper for browser environments
 * @implements {IUniversalWebSocket}
 */
class BrowserWebSocketWrapper implements IUniversalWebSocket {
    public ws: WebSocket;

    /**
     * @constructor
     * @param {string} uri WebSocket URI
     */
    constructor(uri: string) {
        let WS: any = null;
        if (typeof globalThis !== 'undefined' && (globalThis as any).WebSocket) {
            WS = (globalThis as any).WebSocket;
        } else if (typeof window !== 'undefined' && (window as any).WebSocket) {
            WS = (window as any).WebSocket;
        } else if (typeof self !== 'undefined' && (self as any).WebSocket) {
            WS = (self as any).WebSocket;
        }

        if (!WS) {
            throw new Error("Browser WebSocket implementation not found");
        }

        this.ws = new WS(uri);
        try {
            this.ws.binaryType = "arraybuffer";
        } catch (e) {
            /**
             * Safari might throw here, but usually arraybuffer is supported
             * This is intentionally left empty as it's a non-critical optimization
             */
        }
    }

    set onopen(handler: ((event: any) => void) | null) { this.ws.onopen = handler; }
    get onopen() { return this.ws.onopen; }
    set onerror(handler: ((event: any) => void) | null) { this.ws.onerror = handler; }
    get onerror() { return this.ws.onerror; }
    set onclose(handler: ((event: any) => void) | null) { this.ws.onclose = handler; }
    get onclose() { return this.ws.onclose; }
    set onmessage(handler: ((event: any) => void) | null) { this.ws.onmessage = handler; }
    get onmessage() { return this.ws.onmessage; }
    get readyState() { return this.ws.readyState; }
    close(code?: number, reason?: string) { this.ws.close(code, reason); }
    send(data: any) { this.ws.send(data); }
}

/**
 * @class NodeWebSocketWrapper
 * @description WebSocket wrapper for Node.js environments
 * @implements {IUniversalWebSocket}
 */
class NodeWebSocketWrapper implements IUniversalWebSocket {
    public ws: any;

    /**
     * @constructor
     * @param {string} uri WebSocket URI
     */
    constructor(uri: string) {
        try {
            const wsModule = require('ws');
            const WS = wsModule.default || wsModule;
            this.ws = new WS(uri);
            this.ws.binaryType = "nodebuffer";
        } catch (e) {
            throw e;
        }
    }

    set onopen(handler: ((event: any) => void) | null) { this.ws.onopen = handler; }
    get onopen() { return this.ws.onopen; }
    set onerror(handler: ((event: any) => void) | null) { this.ws.onerror = handler; }
    get onerror() { return this.ws.onerror; }
    set onclose(handler: ((event: any) => void) | null) { this.ws.onclose = handler; }
    get onclose() { return this.ws.onclose; }
    set onmessage(handler: ((event: any) => void) | null) { this.ws.onmessage = handler; }
    get onmessage() { return this.ws.onmessage; }
    get readyState() { return this.ws.readyState; }

    /**
     * @method close
     * @description Close the WebSocket connection
     * @param {number} code Close code
     * @param {string} reason Close reason
     */
    close(code?: number, reason?: string) {
        this.ws.close(code, reason);
    }

    /**
     * @method send
     * @description Send data through WebSocket with error handling
     * @param {any} data Data to send
     */
    send(data: any) {
        this.ws.send(data, (err: Error | undefined) => {
            if (err) {
                Log.error("Node WebSocket send error", err);
                if (this.onerror) {
                    this.onerror({ error: err } as any);
                }
            }
        });
    }

    /**
     * @method attachNodeErrorListener
     * @description Attach error listener for Node.js specific error events
     * @param {(err: Error) => void} callback Error callback
     */
    public attachNodeErrorListener(callback: (err: Error) => void) {
        if (this.ws.on) {
            this.ws.on('error', callback);
        }
    }
}

/**
 * @class WebSocketFactory
 * @description Factory for creating WebSocket instances based on environment
 */
class WebSocketFactory {
    static isNode: boolean | null = null;

    /**
     * @static
     * @method create
     * @description Create appropriate WebSocket wrapper for environment
     * @param {string} uri WebSocket URI
     * @returns {IUniversalWebSocket} WebSocket instance
     */
    static create(uri: string): IUniversalWebSocket {
        if (this.isNode === null) {
            const isBrowser = typeof window !== 'undefined' || typeof self !== 'undefined';
            const hasProcess = typeof process !== 'undefined';
            this.isNode = !isBrowser && hasProcess && process.versions != null && process.versions.node != null;
        }

        if (this.isNode) {
            return new NodeWebSocketWrapper(uri);
        } else {
            return new BrowserWebSocketWrapper(uri);
        }
    }

    /**
     * @static
     * @method isNodeEnv
     * @description Check if running in Node.js environment
     * @returns {boolean} True if in Node.js environment
     */
    static isNodeEnv(): boolean {
        return this.isNode === true;
    }
}

/**
 * @interface FastMetaNet
 * @description Network abstraction for FastMeta protocol
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

/**
 * @namespace FastMetaNet
 * @description Namespace for FastMetaNet interfaces
 */
export namespace FastMetaNet {
    /**
     * @interface Connection
     * @description Connection interface for FastMetaNet
     */
    export interface Connection<LT, RT extends RemoteApi> extends Destroyable {
        read(): void;
        stopRead(): void;
        write(data: Uint8Array,report:FlushReport): void;
        getLocalApi(): LT;
        getRemoteApi(): RT;
        isWritable(): boolean;
        getMetaContext(): FastFutureContext;
    }

    /**
     * @class DefaultFastMetaNetImpl
     * @description Default implementation of FastMetaNet
     * @implements {FastMetaNet}
     */
    class DefaultFastMetaNetImpl implements FastMetaNet {
        /**
         * @method makeClient
         * @description Create FastMeta client
         * @template LT Local API type
         * @template RT Remote API type
         */
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

        /**
         * @method makeServer
         * @description Create FastMeta server (not supported in this build)
         */
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
     * @class Instance
     * @description Singleton instance holder
     */
    class Instance {
        private static _instance: FastMetaNet | null = null;

        /**
         * @static
         * @method get
         * @description Get singleton instance
         * @returns {FastMetaNet} FastMetaNet instance
         */
        public static get(): FastMetaNet {
            if (!this._instance) {
                this._instance = new DefaultFastMetaNetImpl();
            }
            return this._instance;
        }
    }
    export const INSTANCE = Instance;
}
/**
 * @interface FastMetaClient
 * @description FastMeta client interface
 */
export interface FastMetaClient<LT, RT extends RemoteApi> extends FastMetaNet.Connection<LT, RT> {
    flush(sendFuture: FlushReport): void;
}

/**
 * @interface FastMetaServer
 * @description FastMeta server interface
 */
export interface FastMetaServer<LT, RT extends RemoteApi> extends Destroyable {
    stop(): AFuture;
    handlers(): Iterable<FastMetaNet.Connection<LT, RT>>;
}

/**
 * @namespace FastMetaServer
 * @description Namespace for FastMetaServer interfaces
 */
export namespace FastMetaServer {
    /**
     * @interface Handler
     * @description Server connection handler interface
     */
    export interface Handler<LT, RT extends RemoteApi> {
        onNewConnection(connection: FastMetaNet.Connection<LT, RT>): LT;
        onConnectionClose(connection: FastMetaNet.Connection<LT, RT>): void;
    }
}

/**
 * @interface ReconnectConfig
 * @description Configuration for reconnection behavior
 */
interface ReconnectConfig {
    maxAttempts: number;
    baseDelay: number;
    maxDelay: number;
    backoffMultiplier: number;
}

/**
 * @enum ConnectionState
 * @description Connection state enumeration
 */
export enum ConnectionState {
    CONNECTING = 'connecting',
    CONNECTED = 'connected',
    DISCONNECTED = 'disconnected',
    RECONNECTING = 'reconnecting'
}

/**
 * @class FastMetaClientWebSocket
 * @description WebSocket-based FastMeta client implementation
 * @implements {Destroyable}
 */
class FastMetaClientWebSocket<LT, RT extends RemoteApi> implements Destroyable {
    public websocket: IUniversalWebSocket | null = null;
    public context: FastApiContextLocal<LT> | null = null;
    public connectFuture: ARFuture<FastApiContextLocal<LT>>;
    public log: LNode;
    public uri: URI = "";
    public localApiMeta: FastMetaApi<LT, any> | null = null;
    public localApiProvider: AFunction<RT, LT> | null = null;
    public remoteApiMeta: FastMetaApi<any, RT> | null = null;
    public receiveBuffer: DataInOut = new DataInOut();
    public reconnectConfig: ReconnectConfig;
    public reconnectAttempts: number = 0;
    public reconnectTimeout: NodeJS.Timeout | null = null;
    private connectTimeout: NodeJS.Timeout | null = null;
    public isManualClose: boolean = false;
    public isReconnecting: boolean = false;
    public connectionState: ConnectionState = ConnectionState.DISCONNECTED;
    public stateChangeCallbacks: Array<(state: ConnectionState) => void> = [];
    public closeFuture: AFuture | null = null;

    /**
     * @property connectionStats
     * @description Connection statistics tracking
     */
    public connectionStats = {
        connected: false,
        lastConnectTime: 0,
        totalReconnects: 0,
        connectionUri: "",
        totalBytesReceived: 0,
        totalBytesSent: 0,
        totalMessagesReceived: 0,
        totalMessagesSent: 0
    };

    /**
     * @constructor
     * @param {Partial<ReconnectConfig>} reconnectConfig Reconnection configuration
     */
    constructor(reconnectConfig?: Partial<ReconnectConfig>) {
        this.log = Log.of({ component: 'FastMetaClientWebSocket' });
        this.connectFuture = ARFuture.of<FastApiContextLocal<LT>>();
        this.reconnectConfig = {
            maxAttempts: 0,
            baseDelay: 500,
            maxDelay: 2000,
            backoffMultiplier: 1.5,
            ...reconnectConfig
        };

        if (this.reconnectConfig.maxDelay > 2000) {
            this.reconnectConfig.maxDelay = 2000;
        }

        Log.info("FastMetaClientWebSocket initialized with infinite reconnection strategy");
    }

    private startConnectTimeout(): void {
        this.clearConnectTimeout();
        this.connectTimeout = setTimeout(() => {
            if (!this.connectFuture.isFinalStatus()) {
                this.connectFuture.error(new Error("Connection timeout"));
            }
        }, 10000);
    }

    private clearConnectTimeout(): void {
        if (this.connectTimeout) {
            clearTimeout(this.connectTimeout);
            this.connectTimeout = null;
        }
    }


    /**
     * @method connect
     * @description Establish WebSocket connection
     * @param {URI} uri Connection URI
     * @param {FastMetaApi<LT, any>} localApiMeta Local API metadata
     * @param {FastMetaApi<any, RT>} remoteApiMeta Remote API metadata
     * @param {AFunction<RT, LT>} localApiProvider Local API provider function
     * @returns {ARFuture<FastApiContextLocal<LT>>} Future resolving to connection context
     */
    public connect(
        uri: URI,
        localApiMeta: FastMetaApi<LT, any>,
        remoteApiMeta: FastMetaApi<any, RT>,
        localApiProvider: AFunction<RT, LT>
    ): ARFuture<FastApiContextLocal<LT>> {
        Log.info("connect() called", { uri });

        try {
            if (this.websocket || !this.connectFuture.isNotDone()) {
                Log.warn("Connect called on already connecting or connected client", { uri });
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
        this.startConnectTimeout();

            return this.connectFuture;
        } catch (e) {
            Log.error("Critical crash inside connect()", e as Error);
            throw e;
        }
    }

    /**
     * @method write
     * @description Write data through WebSocket connection
     * @param {Uint8Array} data Data to write
     * @returns {AFuture} Future indicating write completion
     */
    public write(data: Uint8Array, report:FlushReport): void {
        try {
            if (!this.websocket || !this.isConnected()) {
                report.abort();
                return ;
            }
            const frameBuffer = new DataInOut();
            SerializerPackNumber.INSTANCE.put(frameBuffer, data.length);
            frameBuffer.write(data);
            const finalBytesToSend = frameBuffer.toArray();

            this.connectionStats.totalBytesSent += finalBytesToSend.length;
            this.connectionStats.totalMessagesSent++;
            this.sendWebSocketData(finalBytesToSend, report);
        } catch (e) {
            report.abort();
        }
    }

    /**
     * @method createWebSocketConnection
     * @description Create new WebSocket connection
     */
    private createWebSocketConnection(): void {
        if (this.isManualClose) return;
        try {
            Log.debug("Creating WebSocket");
            this.websocket = WebSocketFactory.create(this.uri);
            this.setupUniversalEventHandlers();
            Log.debug("WebSocket created");
        } catch (e) {
            const error = e as Error;
            Log.error("Failed to create WebSocket", { message: error.message });
            this.handleConnectionError(new ClientStartException(`Failed to create WebSocket: ${error.message}`, error));
        }
    }

    /**
     * @method setupUniversalEventHandlers
     * @description Set up event handlers for WebSocket events
     */
    private setupUniversalEventHandlers(): void {
        if (!this.websocket) {
            return;
        }
        this.websocket.onopen = () => this.handleOpen();
        this.websocket.onerror = (event: any) => this.handleErrorEvent(event);
        this.websocket.onclose = (event: any) => this.handleCloseEvent(event);
        this.websocket.onmessage = (event: any) => this.handleUniversalMessage(event);

        if (WebSocketFactory.isNodeEnv() && this.websocket instanceof NodeWebSocketWrapper) {
            this.websocket.attachNodeErrorListener((error: Error) => {
                this.handleConnectionError(new ClientApiException(`WebSocket error (Node.js): ${error.message}`, error));
            });
        }
    }

    /**
     * @method handleUniversalMessage
     * @description Handle incoming WebSocket messages
     * @param {MessageEvent} event Message event
     */
    private handleUniversalMessage(event: MessageEvent): void {
        if (!this.context || !this.localApiMeta) {
            return;
        }

        try {
            let binaryData: Uint8Array;
            const data = event.data;

            if (WebSocketFactory.isNodeEnv()) {
                if (typeof Buffer !== 'undefined' && data instanceof Buffer) {
                    binaryData = new Uint8Array(data);
                } else if (data instanceof ArrayBuffer) {
                    binaryData = new Uint8Array(data);
                } else if (data && typeof data === 'object' && data.buffer instanceof ArrayBuffer) {
                    binaryData = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
                } else if (data && typeof data === 'object' && typeof data.byteLength === 'number') {
                    binaryData = new Uint8Array(data);
                } else {
                    return;
                }
            } else {
                if (data instanceof ArrayBuffer) {
                    binaryData = new Uint8Array(data);
                } else if (typeof Blob !== 'undefined' && data instanceof Blob) {
                    this.convertBlobToArrayBuffer(data);
                    return;
                } else if (data && typeof data === 'object' && data.buffer instanceof ArrayBuffer) {
                    binaryData = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
                } else {
                    return;
                }
            }
            this.processBinaryData(binaryData);
        } catch (e) {
            Log.error("Error processing WebSocket message", e as Error);
        }
    }

    /**
     * @method convertBlobToArrayBuffer
     * @description Convert Blob to ArrayBuffer for processing
     * @param {Blob} blob Blob to convert
     */
    private async convertBlobToArrayBuffer(blob: Blob): Promise<void> {
        try {
            if (typeof blob.arrayBuffer === 'function') {
                const arrayBuffer = await blob.arrayBuffer();
                this.processBinaryData(new Uint8Array(arrayBuffer));
            } else {
                const reader = new FileReader();
                reader.onload = () => {
                    if (reader.result instanceof ArrayBuffer) {
                        this.processBinaryData(new Uint8Array(reader.result));
                    }
                };
                reader.readAsArrayBuffer(blob);
            }
        } catch (e) {
            Log.error("Error converting blob to ArrayBuffer", e as Error);
        }
    }

    /**
     * @method processBinaryData
     * @description Process incoming binary data
     * @param {Uint8Array} binaryData Binary data to process
     */
    private processBinaryData(binaryData: Uint8Array): void {
        this.connectionStats.totalBytesReceived += binaryData.length;
        this.connectionStats.totalMessagesReceived++;
        this.receiveBuffer.write(binaryData);

        while (this.receiveBuffer.getSizeForRead() > 0) {
            const originalReadPos = this.receiveBuffer.getReadPos();
            try {
                if (this.receiveBuffer.getSizeForRead() < 4) {
                    this.receiveBuffer.setReadPos(originalReadPos);
                    break;
                }
                const payloadSize = Number(DeserializerPackNumber.INSTANCE.put(this.receiveBuffer));
                if (this.receiveBuffer.getSizeForRead() >= payloadSize) {
                    const payload = this.receiveBuffer.readBytes(payloadSize);
                    try {
                        this.localApiMeta!.makeLocal_fromBytes_ctxLocal(this.context!, payload);
                    } catch (processingError) {
                        Log.error("Error processing frame", processingError as Error);
                    }
                } else {
                    this.receiveBuffer.setReadPos(originalReadPos);
                    break;
                }
            } catch (e) {
                Log.error("Error parsing frame", e as Error);
                this.receiveBuffer.clear();
                break;
            }
        }
    }

    /**
     * @method handleOpen
     * @description Handle WebSocket open event
     */
    private handleOpen(): void {
        this.resetConnectionState();

        this.log = Log.of({ component: 'FastMetaClientWebSocket', connectionUri: this.uri });
        Log.info("WebSocket connection established");
        this.reconnectAttempts = 0;
        this.isReconnecting = false;
        this.connectionStats.connected = true;
        this.connectionStats.lastConnectTime = Date.now();
        this.connectionStats.totalReconnects++;

        if (!this.remoteApiMeta || !this.localApiProvider || !this.websocket) {
            this.connectFuture.error(new ClientStartException("Internal state error"));
            this.close();
            return;
        }

        try {
            const context = new FastApiContextLocal<LT>((self: FastApiContextLocal<LT>) => {
                const remoteApi = this.remoteApiMeta!.makeRemote(self);
                return this.localApiProvider!(remoteApi);
            });

            this.context = context;

            this.context.flush = (sendFuture?: FlushReport) => {
                if (!sendFuture) {
                    sendFuture = FlushReport.STUB;
                }
                try {
                    if (this.websocket && this.isConnected()) {
                        const dataArray = context.remoteDataToArrayAsArray();
                        if (dataArray.length > 0) {
                            const frameBuffer = new DataInOut();
                            SerializerPackNumber.INSTANCE.put(frameBuffer, dataArray.length);
                            frameBuffer.write(dataArray);
                            const finalBytesToSend = frameBuffer.toArray();
                            this.connectionStats.totalBytesSent += finalBytesToSend.length;
                            this.connectionStats.totalMessagesSent++;
                            this.sendWebSocketData(finalBytesToSend, sendFuture);
                        } else {
                            sendFuture.done();
                        }
                    } else {
                        sendFuture.abort();
                    }
                } catch (e) {
                    sendFuture.abort();
                }
            };

            this.connectFuture.tryDone(this.context);
            this.setConnectionState(ConnectionState.CONNECTED);
        } catch (e) {
            Log.error("Error during connection setup", e as Error);
            this.connectFuture.error(new ClientStartException("Failed to setup context", e as Error));
            this.scheduleReconnect();
        this.clearConnectTimeout();
        }
    }

    /**
     * @method sendWebSocketData
     * @description Send data through WebSocket
     * @param {Uint8Array} data Data to send
     * @param {AFuture} sendFuture Future to complete when sent
     */
    private sendWebSocketData(data: Uint8Array, sendFuture: FlushReport): void {
        if (!this.websocket) {
            sendFuture.abort();
            return;
        }
        try {
            this.websocket.send(data);
            sendFuture.done();
        } catch (e) {
            sendFuture.abort();
        }
    }

    /**
     * @method handleErrorEvent
     * @description Handle WebSocket error event
     * @param {any} event Error event
     */
    private handleErrorEvent(event: any): void {
        const error = event.error || new Error(`WebSocket error event: ${event.type || 'unknown'}`);
        Log.error("WebSocket error event", error);
        this.handleConnectionError(new ClientApiException(`WebSocket error: ${error.message}`, error));
    }

    /**
     * @method handleCloseEvent
     * @description Handle WebSocket close event
     * @param {any} event Close event
     */
    private handleCloseEvent(event: any): void {
        Log.info("WebSocket connection closed", { code: event.code });
        this.connectionStats.connected = false;
        this.setConnectionState(ConnectionState.DISCONNECTED);
        if (!this.connectFuture.isFinalStatus()) {
            this.connectFuture.error(new ClientApiException("WebSocket closed unexpectedly"));
        }
        this.context?.close();
        this.context = null;
        this.websocket = null;
        if (this.closeFuture) {
            this.closeFuture.tryDone();
            this.closeFuture = null;
        }
        if (!this.isManualClose && !this.isReconnecting) {
            this.scheduleReconnect();
        }
    }

    /**
     * @method handleConnectionError
     * @description Handle connection error
     * @param {Error} error Error that occurred
     */
    private handleConnectionError(error: Error): void {
        Log.error("Connection error", error);

        if (this.isReconnecting) {
            Log.debug("Already reconnecting, skipping duplicate reconnect");
            return;
        }

        if (!this.connectFuture.isFinalStatus()) {
            this.connectFuture.error(error);
        }
        if (this.closeFuture && !this.closeFuture.isFinalStatus()) {
            this.closeFuture.tryError(error);
            this.closeFuture = null;
        }
        this.connectionStats.connected = false;
        this.setConnectionState(ConnectionState.DISCONNECTED);

        this.context?.close();
        this.context = null;

        if (!this.isManualClose) {
            this.scheduleReconnect();
        }
    }

    /**
     * @method isConnected
     * @description Check if WebSocket is connected
     * @returns {boolean} True if connected
     */
    private isConnected(): boolean {
        return this.websocket !== null && this.websocket.readyState === 1;
    }

    /**
     * @method resetConnectionState
     * @description Reset connection state for reconnection
     */
    private resetConnectionState(): void {
        this.receiveBuffer.clear();
        this.context?.close();
        this.context = null;
        if (this.reconnectTimeout) {
            clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = null;
        }
        this.isReconnecting = false;
        Log.info("Connection state reset for reconnection");
    }

    /**
     * @method scheduleReconnect
     * @description Schedule reconnection attempt
     */
    private scheduleReconnect(): void {
        if (this.isManualClose) {
            this.setConnectionState(ConnectionState.DISCONNECTED);
            return;
        }

        if (this.reconnectTimeout) {
            return;
        }

        this.reconnectAttempts++;
        this.isReconnecting = true;
        this.setConnectionState(ConnectionState.RECONNECTING);

        const attemptForDelay = Math.min(this.reconnectAttempts, 30);
        const delay = this.calculateReconnectDelay(attemptForDelay);

        Log.info("Scheduling reconnect", {
            attempt: this.reconnectAttempts,
            delayMs: delay,
            uri: this.uri
        });

        this.performScheduleReconnect(delay);
    }

    /**
     * @method performScheduleReconnect
     * @description Helper method to set up the reconnection timeout
     * @param {number} delay Reconnection delay in milliseconds
     */
    private performScheduleReconnect(delay: number): void {
        this.reconnectTimeout = setTimeout(() => {
            this.executeReconnect();
        }, delay);
    }

    /**
     * @method executeReconnect
     * @description Execute the reconnection logic after delay
     */
    private executeReconnect(): void {
        this.reconnectTimeout = null;
        if (this.isManualClose) {
            return;
        }

        if (this.connectFuture.isFinalStatus()) {
            this.connectFuture = ARFuture.of<FastApiContextLocal<LT>>();
        }

        if (this.websocket) {
            try {
                this.websocket.onopen = null;
                this.websocket.onerror = null;
                this.websocket.onclose = null;
                this.websocket.onmessage = null;
                this.websocket.close(1000, "Reconnecting");
            } catch (e) {
            }
            this.websocket = null;
        }

        this.isReconnecting = false;
        this.createWebSocketConnection();
    }

    /**
     * @method calculateReconnectDelay
     * @description Calculate reconnection delay with exponential backoff
     * @param {number} attempts Number of attempts
     * @returns {number} Delay in milliseconds
     */
    private calculateReconnectDelay(attempts: number): number {
        const delay = this.reconnectConfig.baseDelay *
            Math.pow(this.reconnectConfig.backoffMultiplier, attempts - 1);
        return Math.min(delay, this.reconnectConfig.maxDelay);
    }

    /**
     * @method setConnectionState
     * @description Set connection state and notify listeners
     * @param {ConnectionState} state New connection state
     */
    private setConnectionState(state: ConnectionState): void {
        if (this.connectionState !== state) {
            this.connectionState = state;
            this.stateChangeCallbacks.forEach(cb => cb(state));
        }
    }

    /**
     * @method onStateChange
     * @description Register connection state change callback
     * @param {(state: ConnectionState) => void} callback State change callback
     */
    public onStateChange(callback: (state: ConnectionState) => void): void {
        this.stateChangeCallbacks.push(callback);
    }

    /**
     * @method getConnectionState
     * @description Get current connection state
     * @returns {ConnectionState} Current connection state
     */
    public getConnectionState(): ConnectionState {
        return this.connectionState;
    }

    /**
     * @method close
     * @description Close connection gracefully
     * @returns {AFuture} Future indicating close completion
     */
    public close(): AFuture {
        Log.info("Closing FastMetaClientWebSocket", { uri: this.uri });
        if (this.closeFuture) {
            return this.closeFuture;
        }

        this.closeFuture = AFuture.make();
        this.isManualClose = true;
        this.isReconnecting = false;

        if (this.reconnectTimeout) {
            clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = null;
        }

        if (!this.connectFuture.isFinalStatus()) {
            this.connectFuture.cancel();
        }

        this.context?.close();
        this.context = null;

        if (this.websocket) {
            try {
                this.websocket.onopen = null;
                this.websocket.onerror = null;
                this.websocket.onmessage = null;
                this.websocket.onclose = (event: any) => {
                    Log.debug("WebSocket closed during client close");
                    this.websocket = null;
                    if (this.closeFuture && !this.closeFuture.isFinalStatus()) {
                        this.closeFuture.tryDone();
                    }
                };
                this.websocket.close(1000, "Client initiated close");
            } catch (e) {
                Log.error("Error closing WebSocket", e as Error);
                this.websocket = null;
                if (this.closeFuture) {
                    this.closeFuture.tryDone();
                }
            }
        } else {
            if (this.closeFuture && !this.closeFuture.isFinalStatus()) {
                this.closeFuture.tryDone();
            }
        }

        this.connectionStats.connected = false;
        // Safety timeout to prevent hanging close future
        const closeTimeout = setTimeout(() => {
            if (this.closeFuture && !this.closeFuture.isFinalStatus()) {
                Log.warn("Close future timed out, forcing completion");
                this.closeFuture.tryDone();
            }
        }, 5000);
        this.closeFuture.to(() => clearTimeout(closeTimeout)).onError(() => clearTimeout(closeTimeout));

        this.reconnectAttempts = 0;
        this.setConnectionState(ConnectionState.DISCONNECTED);

        return this.closeFuture;
    }

    /**
     * @method getConnectionStats
     * @description Get connection statistics
     * @returns {any} Connection statistics
     */
    public getConnectionStats(): any {
        return { ...this.connectionStats };
    }

    /**
     * @method getContext
     * @description Get connection context
     * @returns {FastApiContextLocal<LT> | null} Connection context or null
     */
    public getContext(): FastApiContextLocal<LT> | null {
        return this.context;
    }

    /**
     * @method getLocalApi
     * @description Get local API instance
     * @returns {LT} Local API instance
     */
    public getLocalApi(): LT {
        return this.context!.localApi;
    }

    /**
     * @method getRemoteApi
     * @description Get remote API instance
     * @returns {RT} Remote API instance
     */
    public getRemoteApi(): RT {
        return this.remoteApiMeta!.makeRemote(this.context!);
    }

    /**
     * @method destroy
     * @description Destroy connection
     * @param {boolean} force Force destruction
     * @returns {AFuture} Future indicating destruction completion
     */
    public destroy(force: boolean): AFuture {
        return this.close();
    }
}

/**
 * @class FastMetaClientAdapter
 * @description Adapter for FastMeta client
 * @implements {FastMetaClient<LT, RT>}
 */
class FastMetaClientAdapter<LT, RT extends RemoteApi> implements FastMetaClient<LT, RT> {
    public wsClient: FastMetaClientWebSocket<LT, RT>;
    public writableConsumer: AConsumer<boolean>;
    public context: FastApiContextLocal<LT> | null = null;
    public log: LNode;
    public contextFuture: ARFuture<FastApiContextLocal<LT>>;

    /**
     * @constructor
     * @param {URI} uri Connection URI
     * @param {FastMetaApi<LT, any>} lt Local API metadata
     * @param {FastMetaApi<any, RT>} rt Remote API metadata
     * @param {AFunction<RT, LT>} localApiProvider Local API provider function
     * @param {AConsumer<boolean>} writableConsumer Write status consumer
     */
    constructor(
        uri: URI,
        lt: FastMetaApi<LT, any>,
        rt: FastMetaApi<any, RT>,
        localApiProvider: AFunction<RT, LT>,
        writableConsumer: AConsumer<boolean>
    ) {
        this.writableConsumer = writableConsumer;
        this.log = Log.of({ component: "FastMetaClientAdapter", uri: uri });

        Log.info("FastMetaClientAdapter init");

        this.wsClient = new FastMetaClientWebSocket<LT, RT>();

        this.wsClient.onStateChange((state) => {
            this.writableConsumer(state === ConnectionState.CONNECTED);
        });

        Log.info("Calling wsClient.connect");
        this.contextFuture = this.wsClient.connect(uri, lt, rt, localApiProvider);

        this.contextFuture.to((ctx: FastApiContextLocal<LT>) => {
            this.context = ctx;
        }).onError((error) => {
            Log.error("Failed to establish connection context", error);
        });
    }

    public flush(sendFuture: FlushReport): void {
        this.context?.flush(sendFuture);
    }

    public close(): AFuture {
        return this.wsClient.close();
    }

    public destroy(force: boolean): AFuture {
        return this.wsClient.destroy(force);
    }

    public getLocalApi(): LT {
        return this.context!.localApi;
    }

    public getRemoteApi(): RT {
        return this.wsClient.getRemoteApi();
    }

    public getMetaContext(): FastFutureContext {
        return this.context!;
    }

    public isWritable(): boolean {
        return this.wsClient.getConnectionState() === ConnectionState.CONNECTED;
    }

    public read(): void { }

    public stopRead(): void { }

    public write(data: Uint8Array,report:FlushReport): void {
        return this.wsClient.write(data,report);
    }
}
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
    MetaContext,
    MetaContextLocal,
    SerializerPackNumber,
    DeserializerPackNumber,
} from './aether_fastmeta';

import { Log, LNode } from './aether_logging';
import { DataInOut } from './aether_datainout';
import { Destroyer } from './aether_utils';

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
    makeClient<LT>(
        uri: URI,
        localApiMeta: FastMetaApi<LT, any>,
        localApiFactory: (ctx: MetaContext) => LT
    ): MetaContext;

    makeServer<LT>(
        uri: URI,
        localApiMeta: FastMetaApi<LT, any>,
        contextConfigurator: (ctx: MetaContext) => LT
    ): FastMetaServer<LT>;
}



/**
 * @namespace FastMetaNet
 * @description Namespace for FastMetaNet interfaces
 */
export namespace FastMetaNet {


    /**
     * @class DefaultFastMetaNetImpl
     * @description Default implementation of FastMetaNet
     * @implements {FastMetaNet}
     */
    class DefaultFastMetaNetImpl implements FastMetaNet {
        /**
         * @method makeClient
         * @description Create FastMeta client, returning MetaContext
         */
        public makeClient<LT>(
            uri: URI,
            localApiMeta: FastMetaApi<LT, any>,
            localApiFactory: (ctx: MetaContext) => LT
        ): MetaContext {
            return new FastMetaClientAdapter<LT>(
                uri,
                localApiMeta,
                localApiFactory
            );
        }

        /**
         * @method makeClientWithRemote
         * @description Create FastMeta client with full RemoteApi support
         */
        public makeClientWithRemote<LT, RT extends RemoteApi>(
            uri: URI,
            localApiMeta: FastMetaApi<LT, any>,
            remoteApiMeta: FastMetaApi<any, RT>,
            localApiFactory: (ctx: MetaContext) => LT
        ): RT {
            const c = this.makeClient(uri, localApiMeta, localApiFactory);
            return c.makeRemote(remoteApiMeta);
        }

        /**
         * @method makeServer
         * @description Create FastMeta server (not supported in this build)
         */
        public makeServer<LT>(
            _uri: URI,
            _localApiMeta: FastMetaApi<LT, any>,
            _contextConfigurator: (ctx: MetaContext) => LT
        ): FastMetaServer<LT> {
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
 * @interface FastMetaServer
 * @description FastMeta server interface
 */
export interface FastMetaServer<LT> extends Destroyable {
    ready(): AFuture;
    stop(): AFuture;
    handlers(): Iterable<MetaContext>;
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

class FastMetaClientWebSocket<LT> implements Destroyable {
    public websocket: IUniversalWebSocket | null = null;
    public context: MetaContextLocal<LT> | null = null;
    public connectFuture: ARFuture<MetaContextLocal<LT>>;
    public destroyer: Destroyer = new Destroyer("FastMetaClientWebSocket");
    public log: LNode;
    public uri: URI = "";
    public localApiMeta: FastMetaApi<LT, any> | null = null;
    public localApiFactory: ((ctx: MetaContext) => LT) | null = null;

    public receiveBuffer: DataInOut = new DataInOut();
    public reconnectConfig: ReconnectConfig;
    public reconnectAttempts: number = 0;
    public reconnectTimeout: any | null = null;
    private connectTimeout: any | null = null;
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
        this.connectFuture = ARFuture.of<MetaContextLocal<LT>>();
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
        }, 30000);
        this.destroyer.add({ destroy: () => { 
            if (this.connectTimeout) { 
                clearTimeout(this.connectTimeout); 
                this.connectTimeout = null; 
            } 
            return AFuture.completed();
        } });
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
     * @param {(ctx: MetaContext) => LT} localApiFactory Local API factory function
     * @returns {ARFuture<MetaContextLocal<LT>>} Future resolving to connection context
     */
    public connect(
        uri: URI,
        localApiMeta: FastMetaApi<LT, any>,
        localApiFactory: (ctx: MetaContext) => LT
    ): ARFuture<MetaContextLocal<LT>> {
        Log.info("connect() called", { uri });

        try {
            if (this.websocket || !this.connectFuture.isNotDone()) {
                Log.warn("Connect called on already connecting or connected client", { uri });
                return this.connectFuture;
            }

            this.uri = uri;
            this.connectionStats.connectionUri = uri;
            this.localApiMeta = localApiMeta;
            this.localApiFactory = localApiFactory;
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
     */
    public write(data: Uint8Array): void {
        try {
            if (!this.websocket || !this.isConnected()) {
                return;
            }
            const frameBuffer = new DataInOut();
            SerializerPackNumber.INSTANCE.put(frameBuffer, data.length);
            frameBuffer.write(data);
            const finalBytesToSend = frameBuffer.toArray();

            this.connectionStats.totalBytesSent += finalBytesToSend.length;
            this.connectionStats.totalMessagesSent++;
            this.sendWebSocketData(finalBytesToSend);
        } catch (e) {
            // silently ignore write errors
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

        if (!this.localApiFactory || !this.websocket) {
            this.connectFuture.error(new ClientStartException("Internal state error"));
            this.close();
            return;
        }

        try {
            this.context = new MetaContextLocal<LT>((ctx) => {
                return this.localApiFactory!(ctx);
            });
            this.context.onFlushData((dataArray) => {
                if (this.websocket && this.isConnected()) {
                    const frameBuffer = new DataInOut();
                    SerializerPackNumber.INSTANCE.put(frameBuffer, dataArray.length);
                    frameBuffer.write(dataArray);
                    this.connectionStats.totalBytesSent += frameBuffer.getSizeForRead();
                    this.connectionStats.totalMessagesSent++;
                    this.sendWebSocketData(frameBuffer.toArray());
                }
            });

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
     */
    private sendWebSocketData(data: Uint8Array): void {
        if (!this.websocket) {
            return;
        }
        try {
            this.websocket.send(data);
        } catch (e) {
            // silently ignore send errors
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
        this.destroyer.add({
            destroy: (force: boolean) => {
                if (this.reconnectTimeout) {
                    clearTimeout(this.reconnectTimeout);
                    this.reconnectTimeout = null;
                }
                return AFuture.completed();
            }
        });
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
            this.connectFuture = ARFuture.of<MetaContextLocal<LT>>();
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
        this.destroyer.add({
            destroy: (force: boolean) => {
                clearTimeout(closeTimeout);
                return AFuture.completed();
            }
        });
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
     * @returns {MetaContextLocal<LT> | null} Connection context or null
     */
    public getContext(): MetaContextLocal<LT> | null {
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
     * @description Get remote API instance via context
     * @param {FastMetaApi<any, RT>} remoteApiMeta Remote API metadata
     * @returns {RT} Remote API instance
     */
    public getRemoteApi<RT extends RemoteApi>(remoteApiMeta: FastMetaApi<any, RT>): RT {
        return this.context!.makeRemote(remoteApiMeta);
    }


    /**
     * @method destroy
     * @description Destroy connection
     * @param {boolean} force Force destruction
     * @returns {AFuture} Future indicating destruction completion
     */
    public destroy(force: boolean): AFuture {
        this.isManualClose = true;
        if (this.reconnectTimeout) {
            clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = null;
        }
        if (this.connectTimeout) {
            clearTimeout(this.connectTimeout);
            this.connectTimeout = null;
        }
        return this.close();
    }
}


/**
 * @class FastMetaClientAdapter
 * @description Adapter for FastMeta client wrapping WebSocket transport
 */

class FastMetaClientAdapter<LT> implements MetaContext {
    public wsClient: FastMetaClientWebSocket<LT>;
    public context: MetaContext | null = null;
    public log: LNode;
    public contextFuture: ARFuture<MetaContext>;

    constructor(
        uri: URI,
        lt: FastMetaApi<LT, any>,
        localApiFactory: (ctx: MetaContext) => LT
    ) {
        this.log = Log.of({ component: "FastMetaClientAdapter", uri: uri });
        Log.info("FastMetaClientAdapter init");
        this.wsClient = new FastMetaClientWebSocket<LT>();
        Log.info("Calling wsClient.connect");
        this.contextFuture = this.wsClient.connect(uri, lt, localApiFactory);
        this.contextFuture.to((ctx: MetaContext) => {
            this.context = ctx;
        }).onError((error) => {
            Log.error("Failed to establish connection context", error);
        });
    }

    // MetaContext delegation
    sendToRemote(data: Uint8Array): void { this.context!.sendToRemote(data); }
    regFuture(worker: import('./aether_fastmeta').FutureRec): number { return this.context!.regFuture(worker); }
    regLocalFuture(): void { this.context!.regLocalFuture(); }
    getFuture(requestId: number): import('./aether_fastmeta').FutureRec | undefined { return this.context!.getFuture(requestId); }
    sendResultToRemote(requestId: number, data: Uint8Array): void { this.context!.sendResultToRemote(requestId, data); }
    sendResultToRemoteNoData(requestId: number): void { this.context!.sendResultToRemoteNoData(requestId); }
    remoteDataToArray(out: import('./aether_datainout').DataOut): void { this.context!.remoteDataToArray(out); }
    remoteDataToArrayAsArray(): Uint8Array { return this.context!.remoteDataToArrayAsArray(); }
    flush(): void { this.context?.flush(); }
    isEmpty(): boolean { return this.context ? this.context.isEmpty() : true; }
    size(): number { return this.context ? this.context.size() : 0; }
    close(): AFuture { return this.wsClient.close(); }
    isActive(): boolean { return this.context ? this.context.isActive() : false; }
    isLocked(): boolean { return this.context ? this.context.isLocked() : false; }
    lock(): import('./aether_fastmeta').AutoCloseable | null { return this.context ? this.context.lock() : null; }
    onFlush(flushAction: () => void): void { this.context?.onFlush(flushAction); }
    onFlushData(c: (data: Uint8Array) => void): void { this.context?.onFlushData(c); }
    findContext(factory: (ctx: MetaContext) => any, ...keys: any[]): MetaContext { return this.context!.findContext(factory, ...keys); }
    getLocalApi(): any { return this.context!.getLocalApi(); }
    onWritable(listener: (writable: boolean) => void): void { this.context?.onWritable(listener); }
    fireWritable(writable: boolean): void { this.context?.fireWritable(writable); }
    invokeLocalMethodBefore(methodName: string, argsNames: string[], argsValues: any[]): void { this.context?.invokeLocalMethodBefore(methodName, argsNames, argsValues); }
    invokeLocalMethodAfter(methodName: string, result: any, argsNames: string[], argsValues: any[]): void { this.context?.invokeLocalMethodAfter(methodName, result, argsNames, argsValues); }
    invokeRemoteMethodAfter(methodName: string, result: any, argsNames: string[], argsValues: any[]): void { this.context?.invokeRemoteMethodAfter(methodName, result, argsNames, argsValues); }
    makeRemote<RT extends RemoteApi>(meta: FastMetaApi<any, RT>): RT { return this.context!.makeRemote(meta); }

    getRemoteApi<RT extends RemoteApi>(remoteApiMeta: FastMetaApi<any, RT>): RT {
        return this.wsClient.getRemoteApi(remoteApiMeta);
    }
    getMetaContext(): MetaContext { return this; }
    write(data: Uint8Array): void { this.wsClient.write(data); }
    destroy(force: boolean): AFuture { return this.wsClient.destroy(force); }
}
// FILE: aether_fastmeta_net.ts
// PURPOSE: Contains the FastMetaNet factory interface, related network interfaces,
//          and the default WebSocket implementation (FastMetaClientWebSocket).
// =P============================================================================================

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
// (Based on FastMetaNet.java, FastMetaClient.java, FastMetaServer.java)
// =============================================================================================

/**
 * @interface FastMetaNet
 * @description Factory interface for creating FastMeta network clients and servers.
 */
export interface FastMetaNet {
    /**
     * @description Creates a new FastMeta client instance.
     * @template LT - The type of the local API (what the client implements and receives).
     * @template RT - The type of the remote API (what the client calls and sends).
     * @param {URI} uri The URI of the server to connect to.
     * @param {FastMetaApi<LT, any>} lt The META object for the local API.
     * @param {FastMetaApi<any, RT>} rt The META object for the remote API.
     * @param {AFunction<RT, LT>} localApi A provider function that creates the local API instance.
     * @param {AConsumer<boolean>} writableConsumer A callback that reports connection status (writable/unwritable).
     * @returns {FastMetaClient<LT, RT>} A new client instance that immediately starts connecting.
     */
    makeClient<LT, RT extends RemoteApi>(
        uri: URI,
        lt: FastMetaApi<LT, any>,
        rt: FastMetaApi<any, RT>,
        localApi: AFunction<RT, LT>,
        writableConsumer: AConsumer<boolean>
    ): FastMetaClient<LT, RT>;

    /**
     * @description Creates a new FastMeta server instance.
     * @template LT - The type of the local API (what the server implements and receives).
     * @template RT - The type of the remote API (what the server calls and sends).
     * @param {URI} uri The URI to bind the server to.
     * @param {FastMetaApi<LT, any>} localApiMeta The META object for the local API.
     * @param {FastMetaApi<any, RT>} remoteApiMeta The META object for the remote API.
     * @param {FastMetaServer.Handler<LT, RT>} handler The handler for server events (new connection, close).
     * @returns {FastMetaServer<LT, RT>} A new server instance.
     */
    makeServer<LT, RT extends RemoteApi>(
        uri: URI,
        localApiMeta: FastMetaApi<LT, any>,
        remoteApiMeta: FastMetaApi<any, RT>,
        handler: FastMetaServer.Handler<LT, RT>
    ): FastMetaServer<LT, RT>;
}

/**
 * @namespace FastMetaNet
 * @description Contains nested interfaces and the singleton instance for FastMetaNet.
 */
export namespace FastMetaNet {

    /**
     * @interface Connection
     * @implements {Destroyable}
     * @description Represents an active network connection (e.g., a single WebSocket).
     * @template LT - The type of the local API.
     * @template RT - The type of the remote API.
     */
    export interface Connection<LT, RT extends RemoteApi> extends Destroyable {
        /**
         * @description Resumes reading data from the socket (if paused).
         */
        read(): void;

        /**
         * @description Pauses reading data from the socket (for backpressure).
         */
        stopRead(): void;

        /**
         * @description Writes raw byte data to the socket.
         * @param {Uint8Array} data The data to send.
         * @returns {AFuture} A future that completes when the write is accepted.
         */
        write(data: Uint8Array): AFuture;

        /**
         * @description Gets the local API implementation associated with this connection.
         * @returns {LT} The local API instance.
         */
        getLocalApi(): LT;

        /**
         * @description Gets the remote API proxy for this connection.
         * @returns {RT} The remote API proxy.
         */
        getRemoteApi(): RT;

        /**
         * @description Checks if the connection is currently writable.
         * @returns {boolean} True if writable, false otherwise.
         */
        isWritable(): boolean;

        /**
         * @description Gets the FastFutureContext associated with this connection.
         * @returns {FastFutureContext} The context.
         */
        getMetaContext(): FastFutureContext;
    }

    /**
     * @class DefaultFastMetaNetImpl
     * @implements {FastMetaNet}
     * @description Default implementation of FastMetaNet that uses WebSocket for clients
     * and throws errors for server creation.
     * @internal
     */
    class DefaultFastMetaNetImpl implements FastMetaNet {

        /**
         * @inheritdoc
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
         * @inheritdoc
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
     * @description Singleton instance container for FastMetaNet.
     */
    class Instance {
        private static _instance: FastMetaNet | null = null;

        /**
         * @description Gets the singleton instance of FastMetaNet.
         * @returns {FastMetaNet} The instance.
         */
        public static get(): FastMetaNet {
            if (!this._instance) {
                this._instance = new DefaultFastMetaNetImpl();
            }
            return this._instance;
        }
    }

    /**
     * @description Public singleton accessor for the FastMetaNet factory.
     */
    export const INSTANCE = Instance;
}

/**
 * @interface FastMetaClient
 * @implements {FastMetaNet.Connection<LT, RT>}
 * @description Interface for a FastMeta client connection.
 * It combines the Connection interface with the client-specific `flush` method.
 */
export interface FastMetaClient<LT, RT extends RemoteApi> extends FastMetaNet.Connection<LT, RT> {
    /**
     * @description Flushes any queued data on the underlying context.
     * @param {AFuture} sendFuture A future to complete based on the flush attempt.
     */
    flush(sendFuture: AFuture): void;
}

/**
 * @interface FastMetaServer
 * @implements {Destroyable}
 * @description Interface for a FastMeta server.
 * @template LT - The type of the local API (what the server implements).
 * @template RT - The type of the remote API (what the server calls).
 */
export interface FastMetaServer<LT, RT extends RemoteApi> extends Destroyable {

    /**
     * @description Stops the server.
     * @returns {AFuture} A future that completes when the server is stopped.
     */
    stop(): AFuture;

    /**
     * @description Gets an iterable collection of all active connections.
     * @returns {Iterable<FastMetaNet.Connection<LT, RT>>} An iterable of connections.
     */
    handlers(): Iterable<FastMetaNet.Connection<LT, RT>>;
}

/**
 * @namespace FastMetaServer
 * @description Contains nested interfaces for the FastMetaServer.
 */
export namespace FastMetaServer {
    /**
     * @interface Handler
     * @description Handler for server events (new connection, connection close).
     * @template LT - The type of the local API.
     * @template RT - The type of the remote API.
     */
    export interface Handler<LT, RT extends RemoteApi> {
        /**
         * @description Called when a new client connects.
         * @param {FastMetaNet.Connection<LT, RT>} connection The new connection.
         * @returns {LT} The local API implementation instance for this specific connection.
         */
        onNewConnection(connection: FastMetaNet.Connection<LT, RT>): LT;

        /**
         * @description Called when a client connection closes.
         * @param {FastMetaNet.Connection<LT, RT>} connection The connection that closed.
         */
        onConnectionClose(connection: FastMetaNet.Connection<LT, RT>): void;
    }
}


// =============================================================================================
// SECTION 2: FastMetaClientWebSocket Implementation
// (This is the class from aether_fastmeta_websocket.ts, now internal to this file)
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
 * @description WebSocket-based transport implementation with auto-reconnect.
 * This class is the concrete implementation used by the DefaultFastMetaNet.
 * It is *not* intended to be used directly by Connection, but by the FastMetaClientAdapter.
 * @internal
 */
class FastMetaClientWebSocket<LT, RT extends RemoteApi> implements Destroyable {

    /**
     * @private
     * @type {(WebSocket | null)}
     */
    private websocket: WebSocket | null = null;

    /**
     * @private
     * @type {(FastApiContextLocal<LT> | null)}
     */
    private context: FastApiContextLocal<LT> | null = null;

    /**
     * @private
     * @type {ARFuture<FastApiContextLocal<LT>>}
     */
    private connectFuture: ARFuture<FastApiContextLocal<LT>>;

    /**
     * @private
     * @type {LNode}
     */
    private log: LNode;

    /**
     * @private
     * @type {URI}
     */
    private uri: URI = "";

    /**
     * @private
     * @type {(FastMetaApi<LT, any> | null)}
     */
    private localApiMeta: FastMetaApi<LT, any> | null = null;

    /**
     * @private
     * @type {(AFunction<RT, LT> | null)}
     */
    private localApiProvider: AFunction<RT, LT> | null = null;

    /**
     * @private
     * @type {(FastMetaApi<any, RT> | null)}
     */
    private remoteApiMeta: FastMetaApi<any, RT> | null = null;

    /**
     * @private
     * @type {DataInOut}
     */
    private receiveBuffer: DataInOut = new DataInOut();

    /**
     * @private
     * @type {ReconnectConfig}
     */
    private reconnectConfig: ReconnectConfig = {
        maxAttempts: 5,
        baseDelay: 1000,
        maxDelay: 30000,
        backoffMultiplier: 2
    };

    /**
     * @private
     * @type {number}
     */
    private reconnectAttempts: number = 0;

    /**
     * @private
     * @type {(NodeJS.Timeout | null)}
     */
    private reconnectTimeout: NodeJS.Timeout | null = null;

    /**
     * @private
     * @type {boolean}
     */
    private isManualClose: boolean = false;

    /**
     * @private
     * @type {boolean}
     */
    private isReconnecting: boolean = false;

    /**
     * @private
     * @type {ConnectionState}
     */
    private connectionState: ConnectionState = ConnectionState.DISCONNECTED;

    /**
     * @private
     * @type {Array<(state: ConnectionState) => void>}
     */
    private stateChangeCallbacks: Array<(state: ConnectionState) => void> = [];

    /**
     * @private
     * @type {*}
     */
    private connectionStats = {
        connected: false,
        lastConnectTime: 0,
        totalReconnects: 0,
        connectionUri: ""
    };

    /**
     * @constructor
     * @param {Partial<ReconnectConfig>} [reconnectConfig] Optional reconnect config override.
     */
    constructor(reconnectConfig?: Partial<ReconnectConfig>) {
        this.log = Log.of({ component: 'FastMetaClientWebSocket' });
        this.connectFuture = ARFuture.of<FastApiContextLocal<LT>>();

        if (reconnectConfig) {
            this.reconnectConfig = { ...this.reconnectConfig, ...reconnectConfig };
        }
    }

    /**
     * @description Initiates the connection.
     * @param {URI} uri The server URI.
     * @param {FastMetaApi<LT, any>} localApiMeta The local API META.
     * @param {FastMetaApi<any, RT>} remoteApiMeta The remote API META.
     * @param {AFunction<RT, LT>} localApiProvider The local API provider.
     * @returns {ARFuture<FastApiContextLocal<LT>>} A future that resolves with the context on connection.
     */
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
     * @description Creates and configures a new WebSocket connection.
     */
    private createWebSocketConnection(): void {
        using _l = Log.context(this.log);

        try {
            Log.debug("Creating 'isomorphic-ws' transport.");
            this.websocket = new WebSocket(this.uri);
            this.websocket.binaryType = "arraybuffer";
            this.setupEventHandlers();
            Log.debug("'isomorphic-ws' WebSocket created successfully.");
        } catch (e) {
            Log.error("Failed to create 'isomorphic-ws' WebSocket", e as Error, { uri: this.uri });
            this.handleConnectionError(new ClientStartException(`Failed to create WebSocket: ${(e as Error).message}`, e as Error));
        }
    }

    /**
     * @private
     * @description Attaches event listeners to the WebSocket.
     */
    private setupEventHandlers(): void {
        if (!this.websocket) return;

        this.websocket.onopen = () => {
            this.handleOpen();
        };

        this.websocket.onmessage = (event: WebSocket.MessageEvent) => {
            let data: Buffer | ArrayBuffer | string;
            if (typeof Buffer !== 'undefined' && event.data instanceof Buffer) {
                data = event.data;
            } else if (event.data instanceof ArrayBuffer) {
                data = event.data;
            } else if (typeof event.data === 'string') {
                data = event.data;
            } else {
                data = event.data as any;
            }
            this.handleMessage(data);
        };

        this.websocket.onerror = (event: WebSocket.ErrorEvent) => {
            const error = event.error || new Error('WebSocket error');
            this.handleError(error);
        };

        this.websocket.onclose = (event: WebSocket.CloseEvent) => {
            this.handleClose(event.code, event.reason);
        };
    }

    // Файл: aether_fastmeta_net.ts
    // Внутри класса: FastMetaClientWebSocket

    /**
     * @private
     * @description Called when the WebSocket connection is successfully opened.
     */
    private handleOpen(): void {
        this.log = Log.of({
            component: 'FastMetaClientWebSocket',
            connectionUri: this.uri
        });

        using _l = Log.context(this.log);
        Log.info("WebSocket connection established.");

        this.reconnectAttempts = 0;
        this.isReconnecting = false;
        this.connectionStats.connected = true;
        this.connectionStats.lastConnectTime = Date.now();
        this.connectionStats.totalReconnects++;

        // --- [RACE CONDITION FIX] ---
        // DO NOT set state to CONNECTED here.
        // this.setConnectionState(ConnectionState.CONNECTED); // <--- [MOVED]

        if (!this.remoteApiMeta || !this.localApiProvider || !this.websocket) {
            const err = new ClientStartException("Internal state error: API metadata or websocket missing during onOpen.");
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

            this.context.flush = (sendFuture: AFuture) => {
                using _l_flush = Log.context(this.log);
                try {
                    if (this.websocket && this.isConnected()) {
                        const dataArray = context.remoteDataToArrayAsArray();

                        if (dataArray.length > 0) {
                            Log.trace(`Flushing ${dataArray.length} bytes (raw payload).`);
                            const frameBuffer = new DataInOut();
                            SerializerPackNumber.INSTANCE.put(frameBuffer, dataArray.length);
                            frameBuffer.write(dataArray);
                            const finalBytesToSend = frameBuffer.toArray();

                            // --- [НАЧАЛО ИСПРАВЛЕНИЯ] ---

                            // Проверяем арность (количество аргументов) функции send.
                            // В Node.js (ws) она > 1 (data, options, cb).
                            // В браузере (native) она == 1 (data).
                            const hasCallbackSupport = this.websocket.send.length > 1;

                            if (hasCallbackSupport) {
                                // СРЕДА NODE.JS: Используем колбэк для обратной связи (backpressure)
                                Log.trace("Using Node.js 'send' with callback.");
                                this.websocket!.send(finalBytesToSend, (sendError: Error) => {
                                    if (sendError) {
                                        // Ошибка при отправке (асинхронная)
                                        Log.error("Error sending data through WebSocket (async)", sendError);
                                        this.handleConnectionError(sendError);
                                        sendFuture.error(sendError);
                                    } else {
                                        // Успешная асинхронная отправка
                                        Log.debug("Binary frame sent successfully (async)", { totalBytes: finalBytesToSend.length });
                                        sendFuture.tryDone();
                                    }
                                });
                            } else {
                                // СРЕДА БРАУЗЕРА: "Fire-and-forget".
                                // Отправка в браузере синхронно бросает ошибку, если не может
                                // даже поставить данные в очередь.
                                // Мы не можем ждать подтверждения, поэтому завершаем future СРАЗУ.
                                Log.trace("Using Browser 'send' (fire-and-forget).");

                                // `send` бросит ошибку СИНХРОННО, если что-то не так,
                                // и она будет поймана внешним `catch (e)`
                                this.websocket!.send(finalBytesToSend);

                                // Если `send` не бросил ошибку, считаем, что flush успешен.
                                Log.debug("Binary frame sent (fire-and-forget)", { totalBytes: finalBytesToSend.length });
                                sendFuture.tryDone();
                            }
                            // --- [КОНЕЦ ИСПРАВЛЕНИЯ] ---

                        } else {
                            Log.trace("Flush called, but no data to send.");
                            sendFuture.tryDone();
                        }
                    } else {
                        Log.warn("Flush called, but WebSocket is not open.", {
                            reconnecting: this.isReconnecting
                        });
                        sendFuture.error(new Error("WebSocket is not open."));
                    }
                } catch (e) {
                    // Этот catch теперь ловит:
                    // 1. Ошибки подготовки (dataArray, frameBuffer)
                    // 2. СИНХРОННЫЕ ошибки от `send()` в браузере
                    // 3. (Маловероятно) Синхронные ошибки от `send()` в Node.js
                    Log.error("Error during WebSocket flush preparation or sync send", e as Error);
                    this.handleConnectionError(e as Error);
                    sendFuture.error(e as Error);
                }
            };

            this.connectFuture.tryDone(this.context);

            this.setConnectionState(ConnectionState.CONNECTED);

        } catch (e) {
            Log.error("Error during connection setup (onOpen)", e as Error);
            this.connectFuture.error(new ClientStartException("Failed to setup context onOpen", e as Error));
            this.scheduleReconnect();
        }
    }
    /**
     * @private
     * @description Called when a message is received from the WebSocket.
     * @param {Buffer | ArrayBuffer | string} data The incoming data.
     */
    private handleMessage(data: Buffer | ArrayBuffer | string): void {
        using _l = Log.context(this.log);

        if (!this.context || !this.localApiMeta) {
            Log.warn("Received WebSocket message, but context or localApiMeta is not initialized. Ignoring.");
            return;
        }

        let binaryData: Uint8Array;

        try {
            if (typeof Buffer !== 'undefined' && data instanceof Buffer) {
                binaryData = new Uint8Array(data);
            } else if (data instanceof ArrayBuffer) {
                binaryData = new Uint8Array(data);
            } else if (typeof data === 'string') {
                Log.warn("Received text message, but expected binary data. Ignoring.");
                return;
            } else {
                Log.warn(`Received unknown data type: ${typeof data}. Ignoring.`);
                return;
            }

            Log.trace(`Received ${binaryData.length} bytes chunk from WebSocket.`);
            this.receiveBuffer.write(binaryData);

            while (true) {
                if (this.receiveBuffer.isEmpty()) {
                    break;
                }
                const originalReadPos = this.receiveBuffer.getReadPos();
                let payloadSize = 0;
                try {
                    payloadSize = Number(DeserializerPackNumber.INSTANCE.put(this.receiveBuffer));
                } catch (e) {
                    this.receiveBuffer.setReadPos(originalReadPos);
                    Log.trace("Waiting for more data to read frame length.");
                    break;
                }

                if (this.receiveBuffer.getSizeForRead() >= payloadSize) {
                    const payload = this.receiveBuffer.readBytes(payloadSize);
                    Log.trace(`Successfully parsed frame of ${payloadSize} bytes.`);
                    try {
                        this.localApiMeta.makeLocal_fromBytes_ctxLocal(this.context, payload);
                    } catch (processingError) {
                        Log.error("Error processing frame payload", processingError as Error);
                    }
                } else {
                    this.receiveBuffer.setReadPos(originalReadPos);
                    Log.trace(`Waiting for more data (need ${payloadSize}, have ${this.receiveBuffer.getSizeForRead()}).`);
                    break;
                }
            }
        } catch (e) {
            Log.error("Error processing incoming WebSocket message.", e as Error);
        }
    }

    /**
     * @private
     * @description Called on a WebSocket error.
     * @param {Error} error The WebSocket error.
     */
    private handleError(error: Error): void {
        using _l = Log.context(this.log);
        Log.error("WebSocket error", error);
        this.handleConnectionError(new ClientApiException(`WebSocket error: ${error.message}`, error));
    }

    private handleClose(code: number, reason: string): void {
        using _l = Log.context(this.log);
        Log.info("WebSocket connection closed.", {
            code,
            reason,
            wasClean: code === 1000
        });

        this.connectionStats.connected = false;
        this.setConnectionState(ConnectionState.DISCONNECTED); // <--- Важно

        if (!this.connectFuture.isFinalStatus()) {
            this.connectFuture.error(new ClientApiException(`WebSocket closed unexpectedly (Code: ${code}, Reason: ${reason})`));
        }

        this.context?.close();
        this.context = null;
        this.websocket = null; // Гарантированно обнуляем здесь

        // --- [НАЧАЛО ИСПРАВЛЕНИЯ] ---
        // Завершаем future, который был возвращен методом close()
        if (this.closeFuture) {
            this.closeFuture.tryDone();
            this.closeFuture = null;
        }
        // --- [КОНЕЦ ИСПРАВЛЕНИЯ] ---

        if (!this.isManualClose && !this.isReconnecting) {
            this.scheduleReconnect();
        }
    }

    /**
     * @private
     * @description Handles connection errors and initiates reconnection logic.
     * @param {Error} error The connection error.
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
        // This will trigger the writableConsumer in the adapter
        this.setConnectionState(ConnectionState.DISCONNECTED);

        if (!this.isManualClose) {
            this.scheduleReconnect();
        }
    }

    /**
     * @private
     * @description Checks if the WebSocket is connected (readyState OPEN).
     * @returns {boolean} True if connected.
     */
    private isConnected(): boolean {
        return this.websocket !== null && this.websocket.readyState === WebSocket.OPEN;
    }

    /**
     * @private
     * @description Schedules an auto-reconnect attempt with exponential backoff.
     */
    private scheduleReconnect(): void {
        using _l = Log.context(this.log);

        if (this.isManualClose || this.reconnectAttempts >= this.reconnectConfig.maxAttempts) {
            Log.info("Auto-reconnect stopped", {
                manualClose: this.isManualClose,
                maxAttemptsReached: this.reconnectAttempts >= this.reconnectConfig.maxAttempts,
                totalAttempts: this.reconnectAttempts
            });
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
            Log.info("Attempting auto-reconnect...", { attempt: this.reconnectAttempts });
            this.connectFuture = ARFuture.of<FastApiContextLocal<LT>>();
            this.createWebSocketConnection();
        }, delay);
    }

    /**
     * @private
     * @description Calculates the reconnect delay.
     * @returns {number} The delay in milliseconds.
     */
    private calculateReconnectDelay(): number {
        const delay = this.reconnectConfig.baseDelay *
            Math.pow(this.reconnectConfig.backoffMultiplier, this.reconnectAttempts - 1);
        return Math.min(delay, this.reconnectConfig.maxDelay);
    }

    /**
     * @private
     * @description Sets the connection state and notifies listeners.
     * @param {ConnectionState} state The new state.
     */
    private setConnectionState(state: ConnectionState): void {
        if (this.connectionState !== state) {
            this.connectionState = state;
            Log.debug(`Connection state changed: ${state}`);
            this.stateChangeCallbacks.forEach(callback => {
                try {
                    callback(state);
                } catch (e) {
                    Log.error("Error in connection state callback", e as Error);
                }
            });
        }
    }

    /**
     * @description Subscribes to connection state changes.
     * @param {(state: ConnectionState) => void} callback The callback function.
     */
    public onStateChange(callback: (state: ConnectionState) => void): void {
        this.stateChangeCallbacks.push(callback);
    }

    /**
     * @description Gets the current connection state.
     * @returns {ConnectionState} The current state.
     */
    public getConnectionState(): ConnectionState {
        return this.connectionState;
    }
    private closeFuture: AFuture | null = null;
    /**
     * @description Closes the connection manually.
     * @returns {AFuture} A future that completes when the close operation is initiated.
     */
    public close(): AFuture {
        using _l = Log.context(this.log);
        Log.info("Closing FastMetaClientWebSocket...");

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
                // Только пытаемся закрыть, если он OPEN или CONNECTING
                if (this.websocket.readyState === WebSocket.OPEN || this.websocket.readyState === WebSocket.CONNECTING) {
                    Log.debug("Initiating WebSocket close (code 1000)...");
                    this.websocket.close(1000, "Client initiated close");
                } else {
                    Log.debug("WebSocket already closing or closed.", { state: this.websocket.readyState });
                    this.closeFuture.tryDone();
                }
            } catch (e) {
                Log.warn("Error during WebSocket close", e as Error);
                this.closeFuture.tryError(e as Error);
            }
        } else {
            Log.debug("Close called but no WebSocket instance exists.");
            this.closeFuture.tryDone();
        }

        this.connectionStats.connected = false;
        this.reconnectAttempts = 0;

        return this.closeFuture;
    }
    /**
     * @description Gets connection statistics.
     * @returns {*} An object with connection stats.
     */
    public getConnectionStats(): any {
        return {
            ...this.connectionStats,
            reconnectAttempts: this.reconnectAttempts,
            isReconnecting: this.isReconnecting,
            isManualClose: this.isManualClose,
            connectionState: this.connectionState
        };
    }

    /**
     * @description Gets the current context.
     * @returns {FastApiContextLocal<LT> | null} The context or null.
     */
    public getContext(): FastApiContextLocal<LT> | null {
        return this.context;
    }

    /**
     * @description Gets the local API instance.
     * @returns {LT} The local API.
     * @throws {Error} If the context is not initialized.
     */
    public getLocalApi(): LT {
        if (!this.context) throw new Error("Cannot getLocalApi: context is not initialized.");
        return this.context.localApi;
    }

    /**
     * @description Gets the remote API instance.
     * @returns {RT} The remote API.
     * @throws {Error} If the context is not initialized.
     */
    public getRemoteApi(): RT {
        if (!this.context) throw new Error("Cannot getRemoteApi: context is not initialized.");
        const remote = this.remoteApiMeta?.makeRemote(this.context);
        if (!remote) throw new Error("Cannot getRemoteApi: failed to create remote from context.");
        return remote;
    }

    /**
     * @inheritdoc
     */
    public destroy(force: boolean): AFuture {
        return this.close();
    }

    /**
     * @inheritdoc
     */
    [Symbol.dispose](): void {
        this.destroy(true);
    }
}


// =============================================================================================
// SECTION 3: FastMetaClientAdapter
// (This is the adapter that implements FastMetaClient and wraps FastMetaClientWebSocket)
// =============================================================================================

/**
 * @class FastMetaClientAdapter
 * @implements {FastMetaClient<LT, RT>}
 * @description An adapter that implements the `FastMetaClient` interface (which matches the Java design)
 * by wrapping and managing the `FastMetaClientWebSocket` implementation.
 * @internal
 */
class FastMetaClientAdapter<LT, RT extends RemoteApi> implements FastMetaClient<LT, RT> {

    /**
     * @private
     * @readonly
     * @type {FastMetaClientWebSocket<LT, RT>}
     */
    private readonly wsClient: FastMetaClientWebSocket<LT, RT>;

    /**
     * @private
     * @readonly
     * @type {AConsumer<boolean>}
     */
    private readonly writableConsumer: AConsumer<boolean>;

    /**
     * @private
     * @type {(FastApiContextLocal<LT> | null)}
     */
    private context: FastApiContextLocal<LT> | null = null;

    /**
     * @private
     * @readonly
     * @type {LNode}
     */
    private readonly log: LNode;

    /**
     * @private
     * @readonly
     * @type {ARFuture<FastApiContextLocal<LT>>}
     */
    private readonly contextFuture: ARFuture<FastApiContextLocal<LT>>;

    /**
     * @constructor
     * @param {URI} uri The server URI.
     * @param {FastMetaApi<LT, any>} lt The local API META.
     * @param {FastMetaApi<any, RT>} rt The remote API META.
     * @param {AFunction<RT, LT>} localApiProvider The local API provider function.
     * @param {AConsumer<boolean>} writableConsumer The connection status callback.
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

        this.wsClient = new FastMetaClientWebSocket<LT, RT>();
        this.wsClient.onStateChange((state) => {
            this.writableConsumer(state === 'connected');
        });

        this.contextFuture = this.wsClient.connect(uri, lt, rt, localApiProvider);

        this.contextFuture.to((ctx: FastApiContextLocal<LT>) => {
            this.context = ctx;
        }).onError(() => {
            this.context = null;
        });
    }

    /**
     * @inheritdoc
     */
    public flush(sendFuture: AFuture): void {
        if (this.context) {
            this.context.flush(sendFuture);
        } else {
            Log.warn("Flush called, but client context is not available (not connected or connection lost).", { uri: this.wsClient.getConnectionStats().connectionUri });
            sendFuture.error(new Error("Cannot flush: client context not available."));
        }
    }

    /**
     * @inheritdoc
     */
    public close(): AFuture {
        this.context = null;
        return this.wsClient.close();
    }

    /**
     * @inheritdoc
     */
    public destroy(force: boolean): AFuture {
        this.context = null;
        return this.wsClient.destroy(force);
    }

    /**
     * @inheritdoc
     */
    [Symbol.dispose](): void {
        this.destroy(true);
    }

    /**
     * @inheritdoc
     * @throws {Error} If the context is not initialized.
     */
    public getLocalApi(): LT {
        const ctx = this.context;
        if (!ctx) {
            throw new Error("Cannot getLocalApi: context is not initialized or connection failed.");
        }
        return ctx.localApi;
    }

    /**
     * @inheritdoc
     * @throws {Error} If the context is not initialized.
     */
    public getRemoteApi(): RT {
        const ctx = this.context;
        if (!ctx) {
            throw new Error("Cannot getRemoteApi: context is not initialized or connection failed.");
        }
        return this.wsClient.getRemoteApi();
    }

    /**
     * @inheritdoc
     */
    public getMetaContext(): FastFutureContext {
        const ctx = this.context;
        if (!ctx) {
            throw new Error("Cannot getMetaContext: context is not initialized or connection failed.");
        }
        return ctx;
    }

    /**
     * @inheritdoc
     */
    public isWritable(): boolean {
        return this.wsClient.getConnectionState() === ConnectionState.CONNECTED;
    }

    /**
     * @inheritdoc
     */
    public read(): void {
        // No-op for WebSocket
    }

    /**
     * @inheritdoc
     */
    public stopRead(): void {
        // No-op for WebSocket
    }

    /**
     * @inheritdoc
     * @throws {Error} If the context is not initialized.
     */
    public write(data: Uint8Array): AFuture {
        const ctx = this.context;
        if (!ctx) {
            const err = new Error("Cannot write: context is not initialized.");
            Log.warn(err.message);
            return AFuture.ofThrow(err);
        }

        const frameBuffer = new DataInOut();
        SerializerPackNumber.INSTANCE.put(frameBuffer, data.length);
        frameBuffer.write(data);
        const finalBytesToSend = frameBuffer.toArray();

        const ws = (this.wsClient as any).websocket; // Access private member
        if (ws && ws.readyState === WebSocket.OPEN) {
            try {
                ws.send(finalBytesToSend);
                return AFuture.completed();
            } catch (e) {
                return AFuture.ofThrow(e as Error);
            }
        } else {
            return AFuture.ofThrow(new Error("WebSocket is not open for writing."));
        }
    }
}
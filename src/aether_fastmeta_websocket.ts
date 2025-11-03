// FILE: aether_fastmeta_websocket.ts
// PURPOSE: WebSocket-based implementation of FastMetaClient with auto-reconnect and binary data support.
// =============================================================================================

import {
    URI, AFunction,
    ClientStartException, ClientApiException
} from './aether_types';
import { Log, LNode } from './aether_logging';
import { AFuture, ARFuture } from './aether_future';
import {
    FastMetaClient, FastMetaApi, RemoteApi, FastApiContextLocal,
    SerializerPackNumber,
    DeserializerPackNumber,
} from './aether_fastmeta';
import { DataInOut } from './aether_datainout';
import WebSocket from 'isomorphic-ws';

interface ReconnectConfig {
    maxAttempts: number;
    baseDelay: number;
    maxDelay: number;
    backoffMultiplier: number;
}

/**
 * Состояние соединения для бизнес-логики
 */
export enum ConnectionState {
    CONNECTING = 'connecting',
    CONNECTED = 'connected',
    DISCONNECTED = 'disconnected',
    RECONNECTING = 'reconnecting'
}

/**
 * Реализация FastMetaClient, использующая isomorphic-ws для транспорта
 * с поддержкой автоматического переподключения и бинарных данных.
 */
export class FastMetaClientWebSocket<LT, RT extends RemoteApi> implements FastMetaClient<LT, RT> {

    private websocket: WebSocket | null = null;
    private context: FastApiContextLocal<LT> | null = null;
    private connectFuture: ARFuture<FastApiContextLocal<LT>>;

    private log: LNode;

    private uri: URI = "";
    private localApiMeta: FastMetaApi<LT, any> | null = null;
    private localApiProvider: AFunction<RT, LT> | null = null;
    private remoteApiMeta: FastMetaApi<any, RT> | null = null;

    private receiveBuffer: DataInOut = new DataInOut();

    private reconnectConfig: ReconnectConfig = {
        maxAttempts: 5,
        baseDelay: 1000,
        maxDelay: 30000,
        backoffMultiplier: 2
    };
    private reconnectAttempts: number = 0;
    private reconnectTimeout: NodeJS.Timeout | null = null;
    private isManualClose: boolean = false;
    private isReconnecting: boolean = false;

    // Состояние соединения для бизнес-логики
    private connectionState: ConnectionState = ConnectionState.DISCONNECTED;
    private stateChangeCallbacks: Array<(state: ConnectionState) => void> = [];

    private connectionStats = {
        connected: false,
        lastConnectTime: 0,
        totalReconnects: 0
    };

    constructor(reconnectConfig?: Partial<ReconnectConfig>) {
        this.log = Log.of({ component: 'FastMetaClientWebSocket' });
        this.connectFuture = ARFuture.of<FastApiContextLocal<LT>>();

        if (reconnectConfig) {
            this.reconnectConfig = { ...this.reconnectConfig, ...reconnectConfig };
        }
    }

    /**
     * @inheritdoc
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
        this.localApiMeta = localApiMeta;
        this.remoteApiMeta = remoteApiMeta;
        this.localApiProvider = localApiProvider;
        this.isManualClose = false;

        this.setConnectionState(ConnectionState.CONNECTING);
        this.createWebSocketConnection();

        return this.connectFuture;
    }

    /**
     * Создает новое WebSocket соединение
     */
    private createWebSocketConnection(): void {
        using _l = Log.context(this.log);

        try {
            Log.debug("Creating 'isomorphic-ws' transport.");

            this.websocket = new WebSocket(this.uri);

            // Устанавливаем binaryType для корректной работы с бинарными данными
            if (typeof this.websocket.binaryType !== 'undefined') {
                this.websocket.binaryType = "arraybuffer";
            }

            this.setupEventHandlers();
            Log.debug("'isomorphic-ws' WebSocket created successfully.");

        } catch (e) {
            Log.error("Failed to create 'isomorphic-ws' WebSocket", e as Error, { uri: this.uri });
            this.handleConnectionError(new ClientStartException(`Failed to create WebSocket: ${(e as Error).message}`, e as Error));
        }
    }

    /**
     * Настраивает обработчики событий для 'isomorphic-ws'
     */
    private setupEventHandlers(): void {
        if (!this.websocket) return;

        this.websocket.onopen = () => {
            this.handleOpen();
        };

        this.websocket.onmessage = (event: WebSocket.MessageEvent) => {
            // Обрабатываем разные типы данных, которые может вернуть isomorphic-ws
            let data: Buffer | ArrayBuffer | string;

            if (typeof Buffer !== 'undefined' && event.data instanceof Buffer) {
                data = event.data;
            } else if (event.data instanceof ArrayBuffer) {
                data = event.data;
            } else if (typeof event.data === 'string') {
                data = event.data;
            } else {
                // Для других типов пытаемся преобразовать
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

    /**
     * Вызывается при успешном открытии WebSocket соединения.
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

        this.setConnectionState(ConnectionState.CONNECTED);

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

            // Настраиваем flush с обработкой ошибок отправки
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

                            // Обрабатываем возможные ошибки отправки
                            try {
                                this.websocket!.send(finalBytesToSend);
                                Log.debug("Binary frame sent successfully", { totalBytes: finalBytesToSend.length });
                                sendFuture.tryDone();
                            } catch (sendError) {
                                Log.error("Error sending data through WebSocket", sendError as Error);
                                this.handleConnectionError(sendError as Error);
                                sendFuture.error(sendError as Error);
                            }
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
                    Log.error("Error during WebSocket flush", e as Error);
                    this.handleConnectionError(e as Error);
                    sendFuture.error(e as Error);
                }
            };

            this.connectFuture.tryDone(this.context);

        } catch (e) {
            Log.error("Error during connection setup (onOpen)", e as Error);
            this.connectFuture.error(new ClientStartException("Failed to setup context onOpen", e as Error));
            this.scheduleReconnect();
        }
    }

    /**
     * Вызывается при получении сообщения от WebSocket.
     */
    private handleMessage(data: Buffer | ArrayBuffer | string): void {
        using _l = Log.context(this.log);

        if (!this.context || !this.localApiMeta) {
            Log.warn("Received WebSocket message, but context or localApiMeta is not initialized. Ignoring.");
            return;
        }

        let binaryData: Uint8Array;

        try {
            // Конвертируем в Uint8Array независимо от платформы
            if (typeof Buffer !== 'undefined' && data instanceof Buffer) {
                binaryData = new Uint8Array(data);
            } else if (data instanceof ArrayBuffer) {
                binaryData = new Uint8Array(data);
            } else if (typeof data === 'string') {
                // Если пришли текстовые данные, игнорируем (ожидаем бинарные)
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
                    payloadSize = DeserializerPackNumber.INSTANCE.put(this.receiveBuffer);
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
                        // Продолжаем обработку следующих фреймов даже при ошибке в одном
                    }

                } else {
                    this.receiveBuffer.setReadPos(originalReadPos);
                    Log.trace(`Waiting for more data (need ${payloadSize}, have ${this.receiveBuffer.getSizeForRead()}).`);
                    break;
                }
            }

        } catch (e) {
            Log.error("Error processing incoming WebSocket message.", e as Error);
            // Не прерываем соединение при ошибках обработки сообщений
        }
    }

    /**
     * Вызывается при ошибке WebSocket.
     */
    private handleError(error: Error): void {
        using _l = Log.context(this.log);
        Log.error("WebSocket error", error);
        // Ошибка обрабатывается, но не пробрасывается в прикладной код
        this.handleConnectionError(new ClientApiException(`WebSocket error: ${error.message}`, error));
    }

    /**
     * Вызывается при закрытии WebSocket соединения.
     */
    private handleClose(code: number, reason: string): void {
        using _l = Log.context(this.log);

        Log.info("WebSocket connection closed.", {
            code,
            reason,
            wasClean: code === 1000
        });

        this.connectionStats.connected = false;
        this.setConnectionState(ConnectionState.DISCONNECTED);

        if (!this.connectFuture.isFinalStatus()) {
            this.connectFuture.error(new ClientApiException(`WebSocket closed unexpectedly (Code: ${code}, Reason: ${reason})`));
        }

        this.context?.close();
        this.context = null;
        this.websocket = null;

        if (!this.isManualClose && !this.isReconnecting) {
            this.scheduleReconnect();
        }
    }

    /**
     * Обработка ошибок соединения с логикой переподключения
     */
    private handleConnectionError(error: Error): void {
        using _l = Log.context(this.log);
        Log.error("Connection error", error);

        // Если future еще не завершен (ошибка до onOpen)
        if (!this.connectFuture.isFinalStatus()) {
            this.connectFuture.error(error);
        }

        this.connectionStats.connected = false;
        this.setConnectionState(ConnectionState.DISCONNECTED);

        // Запускаем переподключение, если это не ручное закрытие
        if (!this.isManualClose) {
            this.scheduleReconnect();
        }
    }

    /**
     * Проверяет, активно ли соединение
     */
    private isConnected(): boolean {
        return this.websocket !== null && this.websocket.readyState === WebSocket.OPEN;
    }

    /**
     * Планирует автоматическое переподключение
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
            this.createWebSocketConnection();
        }, delay);
    }

    /**
     * Вычисляет задержку для переподключения с экспоненциальной отсрочкой
     */
    private calculateReconnectDelay(): number {
        const delay = this.reconnectConfig.baseDelay *
            Math.pow(this.reconnectConfig.backoffMultiplier, this.reconnectAttempts - 1);
        return Math.min(delay, this.reconnectConfig.maxDelay);
    }

    /**
     * Устанавливает состояние соединения и уведомляет подписчиков
     */
    private setConnectionState(state: ConnectionState): void {
        if (this.connectionState !== state) {
            this.connectionState = state;
            Log.debug(`Connection state changed: ${state}`);

            // Уведомляем подписчиков
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
     * Подписывается на изменения состояния соединения
     */
    public onStateChange(callback: (state: ConnectionState) => void): void {
        this.stateChangeCallbacks.push(callback);
    }

    /**
     * Проверяет, можно ли отправлять данные
     */
    public canSend(): boolean {
        return this.connectionState === ConnectionState.CONNECTED && this.isConnected();
    }

    /**
     * Получает текущее состояние соединения
     */
    public getConnectionState(): ConnectionState {
        return this.connectionState;
    }

    /**
     * @inheritdoc
     */
    public close(): AFuture {
        using _l = Log.context(this.log);
        Log.info("Closing FastMetaClientWebSocket...");

        this.isManualClose = true;
        this.isReconnecting = false;
        this.setConnectionState(ConnectionState.DISCONNECTED);

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

                if (this.websocket.readyState === WebSocket.OPEN || this.websocket.readyState === WebSocket.CONNECTING) {
                    this.websocket.close(1000, "Client initiated close");
                }
            } catch (e) {
                Log.warn("Error during WebSocket close", e as Error);
            }
            this.websocket = null;
        }

        this.connectionStats.connected = false;
        this.reconnectAttempts = 0;

        return AFuture.of();
    }

    /**
     * Получить статистику соединения
     */
    public getConnectionStats() {
        return {
            ...this.connectionStats,
            reconnectAttempts: this.reconnectAttempts,
            isReconnecting: this.isReconnecting,
            isManualClose: this.isManualClose,
            connectionState: this.connectionState
        };
    }

    /**
     * Обновить конфигурацию переподключения
     */
    public updateReconnectConfig(config: Partial<ReconnectConfig>): void {
        this.reconnectConfig = { ...this.reconnectConfig, ...config };
    }

    /**
     * Принудительно переподключиться
     */
    public reconnect(): void {
        using _l = Log.context(this.log);
        Log.info("Manual reconnect requested");
        this.close();
        this.isManualClose = false;
        this.createWebSocketConnection();
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
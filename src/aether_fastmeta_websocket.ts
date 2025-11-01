// =============================================================================================
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
    FastMetaClient, FastMetaApi, RemoteApi, FastApiContext, FastApiContextLocal
} from './aether_fastmeta';
import { DataInOutStatic } from './aether_datainout';
import { UniversalWebSocket } from 'universal-ws';

/**
 * Конфигурация автоматического переподключения
 */
interface ReconnectConfig {
    maxAttempts: number;
    baseDelay: number;
    maxDelay: number;
    backoffMultiplier: number;
}

/**
 * Реализация FastMetaClient, использующая UniversalWebSocket для транспорта
 * с поддержкой автоматического переподключения и бинарных данных.
 */
export class FastMetaClientWebSocket<LT, RT extends RemoteApi> implements FastMetaClient<LT, RT> {

    private websocket: UniversalWebSocket | null = null;
    private context: FastApiContextLocal<LT> | null = null;
    private connectFuture: ARFuture<FastApiContextLocal<LT>>;

    private log: LNode;

    private uri: URI = "";
    private localApiMeta: FastMetaApi<LT, any> | null = null;
    private localApiProvider: AFunction<RT, LT> | null = null;
    private remoteApiMeta: FastMetaApi<any, RT> | null = null;

    // Переменные для автоматического переподключения
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

    // Статистика соединения
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

        this.createWebSocketConnection();

        return this.connectFuture;
    }

    /**
     * Создает новое WebSocket соединение
     */
    private createWebSocketConnection(): void {
        using _l = Log.context(this.log);

        try {
            Log.debug("Creating UniversalWebSocket transport.");

            // Создаем UniversalWebSocket - используем базовый конструктор
            this.websocket = new UniversalWebSocket(this.uri);

            // Устанавливаем обработчики событий через методы подписки
            this.setupEventHandlers();

            Log.debug("UniversalWebSocket created successfully.");

        } catch (e) {
            Log.error("Failed to create UniversalWebSocket", e as Error, { uri: this.uri });
            this.handleConnectionError(new ClientStartException(`Failed to create WebSocket: ${(e as Error).message}`, e as Error));
        }
    }

    /**
     * Настраивает обработчики событий для UniversalWebSocket
     */
    private setupEventHandlers(): void {
        if (!this.websocket) return;

        // Подписываемся на события
        this.websocket.on('open', () => {
            this.handleOpen();
        });

        this.websocket.on('message', (data: Buffer | ArrayBuffer | string) => {
            this.handleMessage(data);
        });

        this.websocket.on('error', (error: Error) => {
            this.handleError(error);
        });

        this.websocket.on('close', (code: number, reason: string) => {
            this.handleClose(code, reason);
        });
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

        // Сбрасываем счетчик переподключений при успешном соединении
        this.reconnectAttempts = 0;
        this.isReconnecting = false;
        this.connectionStats.connected = true;
        this.connectionStats.lastConnectTime = Date.now();
        this.connectionStats.totalReconnects++;

        if (!this.remoteApiMeta || !this.localApiProvider || !this.websocket) {
            const err = new ClientStartException("Internal state error: API metadata or websocket missing during onOpen.");
            Log.error(err.message, err);
            this.connectFuture.error(err);
            this.close();
            return;
        }

        try {
            // Создаем контекст
            const context = new FastApiContextLocal<LT>((self: FastApiContextLocal<LT>) => {
                const remoteApi = this.remoteApiMeta!.makeRemote(self);
                const localApi = this.localApiProvider!(remoteApi);
                return localApi;
            });

            this.context = context;

            // Переопределяем flush для отправки бинарных данных
            this.context.flush = (sendFuture: AFuture) => {
                using _l_flush = Log.context(this.log);
                try {
                    if (this.websocket && this.isConnected()) {
                        const dataArray = context.remoteDataToArrayAsArray();
                        if (dataArray.length > 0) {
                            Log.trace(`Flushing ${dataArray.length} bytes to WebSocket.`);

                            // Конвертируем в Buffer для отправки (universal-ws работает с Buffer)
                            const buffer = Buffer.from(dataArray);

                            // Отправляем бинарные данные
                            this.websocket!.send(null,buffer);
                            Log.debug("Binary data sent successfully", { bytes: dataArray.length });
                            sendFuture.tryDone();
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
                    sendFuture.error(e as Error);
                }
            };

            // Сообщаем об успешном подключении
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
            Log.warn("Received WebSocket message, but context or localApiMeta is not initialized. Ignoring.", {
                dataType: typeof data,
                isBuffer: data instanceof Buffer,
                isArrayBuffer: data instanceof ArrayBuffer
            });
            return;
        }

        let binaryData: Uint8Array;

        try {
            // Конвертируем различные форматы в Uint8Array
            if (data instanceof Buffer) {
                binaryData = new Uint8Array(data);
            } else if (data instanceof ArrayBuffer) {
                binaryData = new Uint8Array(data);
            } else if (typeof data === 'string') {
                Log.warn("Received text message, but expected binary data. Ignoring.", {
                    message: data
                });
                return;
            } else {
                Log.warn("Received unknown data format. Ignoring.", {
                });
                return;
            }

            Log.trace(`Received ${binaryData.length} bytes of binary data from WebSocket.`);

            // Обрабатываем бинарные данные
            this.localApiMeta.makeLocal_fromBytes_ctxLocal(this.context, binaryData);

        } catch (e) {
            Log.error("Error processing incoming WebSocket binary message.", e as Error);
        }
    }

    /**
     * Вызывается при ошибке WebSocket.
     */
    private handleError(error: Error): void {
        using _l = Log.context(this.log);

        Log.error("WebSocket error", error);
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

        // Если future еще не завершен (соединение закрылось до onOpen)
        if (!this.connectFuture.isFinalStatus()) {
            this.connectFuture.error(new ClientApiException(`WebSocket closed unexpectedly (Code: ${code}, Reason: ${reason})`));
        }

        this.context?.close();
        this.context = null;
        this.websocket = null;

        // Запускаем переподключение, если это не ручное закрытие
        if (!this.isManualClose && !this.isReconnecting) {
            this.scheduleReconnect();
        }
    }

    /**
     * Обработка ошибок соединения с логикой переподключения
     */
    private handleConnectionError(error: Error): void {
        using _l = Log.context(this.log);

        // Если future еще не завершен (ошибка до onOpen)
        if (!this.connectFuture.isFinalStatus()) {
            this.connectFuture.error(error);
        }

        this.connectionStats.connected = false;

        // Запускаем переподключение, если это не ручное закрытие
        if (!this.isManualClose) {
            this.scheduleReconnect();
        }
    }

    /**
     * Проверяет, активно ли соединение
     */
    private isConnected(): boolean {
        return this.connectionStats.connected && this.websocket !== null;
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
     * @inheritdoc
     */
    public close(): AFuture {
        using _l = Log.context(this.log);

        Log.info("Closing FastMetaClientWebSocket...");

        this.isManualClose = true;
        this.isReconnecting = false;

        // Очищаем таймер переподключения
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
                // Убираем все обработчики
                this.websocket.removeAllListeners();
                // Закрываем соединение
                this.websocket.close(1000, "Client initiated close");
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
            isManualClose: this.isManualClose
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
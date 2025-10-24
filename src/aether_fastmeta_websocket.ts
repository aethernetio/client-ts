// =============================================================================================
// FILE: aether_fastmeta_websocket.ts
// PURPOSE: WebSocket-based implementation of FastMetaClient.
// DEPENDENCIES: aether.types.ts, aether.logging.ts, aether.future.ts,
//               aether.fastmeta.ts, aether_datainout.ts
// (ИСПРАВЛЕННАЯ ВЕРСИЯ - Полный код с импортом ошибок)
// =============================================================================================

import {
    UUID, URI, Destroyable, AFunction,
    // --- ИСПРАВЛЕНО: Импортируем ошибки ---
    ClientStartException, ClientApiException
} from './aether_types';
import { Log, LNode } from './aether_logging';
import { AFuture, ARFuture } from './aether_future'; // Используем новые AFuture/ARFuture
import {
    FastMetaClient, FastMetaApi, RemoteApi, FastApiContext, FastApiContextLocal
} from './aether_fastmeta';
import { DataInOutStatic } from './aether_datainout'; // Используем новое имя

// Убедитесь, что 'WebSocket' доступен в вашей среде (в браузере - глобально, для Node.js - 'import WebSocket from 'ws';')
// Этот код предполагает наличие глобального WebSocket или совместимого типа.
declare const WebSocket: {
    new(url: string | URL, protocols?: string | string[]): WebSocket;
    prototype: WebSocket;
    readonly CONNECTING: 0;
    readonly OPEN: 1;
    readonly CLOSING: 2;
    readonly CLOSED: 3;
};

/**
 * Реализация FastMetaClient, использующая WebSocket для транспорта.
 */
export class FastMetaClientWebSocket<LT, RT extends RemoteApi> implements FastMetaClient<LT, RT> {

    private websocket: WebSocket | null = null;
    private context: FastApiContextLocal<LT> | null = null;
    private connectFuture: ARFuture<FastApiContextLocal<LT>>;
    private readonly log: LNode;
    private uri: URI = "";
    private localApiMeta: FastMetaApi<LT, any> | null = null;
    private localApiProvider: AFunction<RT, LT> | null = null;
    private remoteApiMeta: FastMetaApi<any, RT> | null = null;

    constructor() {
        this.log = Log.context({ component: 'FastMetaClientWebSocket' }).node;
        this.connectFuture = ARFuture.of<FastApiContextLocal<LT>>(); // Создаем future
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
        using _l = Log.context(this.log); // Устанавливаем контекст логгирования
        Log.info("Connecting...", { uri });

        if (this.websocket || !this.connectFuture.isNotDone()) {
            Log.warn("Connect called on an already connecting or connected client.", { uri });
            return this.connectFuture;
        }

        this.uri = uri;
        this.localApiMeta = localApiMeta;
        this.remoteApiMeta = remoteApiMeta;
        this.localApiProvider = localApiProvider;

        try {
            // 1. Создаем WebSocket
            this.websocket = new WebSocket(this.uri);
            this.websocket.binaryType = "arraybuffer";

            // 2. Устанавливаем обработчики
            this.websocket.onopen = this.handleOpen.bind(this);
            this.websocket.onmessage = this.handleMessage.bind(this);
            this.websocket.onerror = this.handleError.bind(this);
            this.websocket.onclose = this.handleClose.bind(this);

        } catch (e) {
            Log.error("Failed to create WebSocket", e as Error, { uri });
            this.connectFuture.error(new ClientStartException(`Failed to create WebSocket: ${(e as Error).message}`, e as Error));
        }

        return this.connectFuture;
    }

    /**
     * Вызывается при успешном открытии WebSocket соединения.
     */
    private handleOpen(): void {
        using _l = Log.context(this.log);
        Log.info("WebSocket connection established.", { uri: this.uri });

        if (!this.remoteApiMeta || !this.localApiProvider || !this.websocket) {
            const err = new ClientStartException("Internal state error: API metadata or websocket missing during onOpen.");
            Log.error(err.message, err);
            this.connectFuture.error(err);
            this.close(); // Закрываем
            return;
        }

        try {
            // 3. Создаем контекст.
            // Используем функцию-провайдер для отложенной инициализации localApi
            const context = new FastApiContextLocal<LT>((self: FastApiContextLocal<LT>) => {
                // 4. Создаем remoteApi, используя сам контекст
                const remoteApi = this.remoteApiMeta!.makeRemote(self);
                // 5. Создаем localApi, передавая ему remoteApi
                const localApi = this.localApiProvider!(remoteApi);
                return localApi;
            });

            this.context = context;

            // 6. Переопределяем flush контекста, чтобы он отправлял данные в WebSocket
            this.context.flush = (sendFuture: AFuture) => {
                using _l_flush = Log.context(this.log); // Контекст лога для flush
                try {
                    if (this.websocket && this.websocket.readyState === WebSocket.OPEN) {
                        const dataArray = context.remoteDataToArrayAsArray();
                        if (dataArray.length > 0) {
                            Log.trace(`Flushing ${dataArray.length} bytes to WebSocket.`);
                            this.websocket.send(dataArray);
                        } else {
                             Log.trace("Flush called, but no data to send.");
                        }
                        sendFuture.tryDone();
                    } else {
                        Log.warn("Flush called, but WebSocket is not open.", { state: this.websocket?.readyState });
                        sendFuture.error(new Error("WebSocket is not open."));
                    }
                } catch (e) {
                    Log.error("Error during WebSocket flush", e as Error);
                    sendFuture.error(e as Error);
                }
            };

            // 7. Сообщаем об успехе подключения
            this.connectFuture.tryDone(this.context);

        } catch (e) {
             Log.error("Error during connection setup (onOpen)", e as Error);
             this.connectFuture.error(new ClientStartException("Failed to setup context onOpen", e as Error));
             this.close(); // Закрываем соединение
        }
    }

    /**
     * Вызывается при получении сообщения (бинарных данных) от WebSocket.
     */
    private handleMessage(event: MessageEvent): void {
        using _l = Log.context(this.log);
        if (!this.context || !this.localApiMeta) {
            Log.warn("Received WebSocket message, but context or localApiMeta is not initialized. Ignoring.", { dataLength: (event.data as ArrayBuffer)?.byteLength });
            return;
        }

        if (!(event.data instanceof ArrayBuffer)) {
             Log.warn("Received non-ArrayBuffer WebSocket message. Ignoring.", { type: typeof event.data });
             return;
        }

        try {
            const data = new Uint8Array(event.data);
            Log.trace(`Received ${data.length} bytes from WebSocket.`);

            // 8. Передаем данные в makeLocal_fromBytes_ctxLocal
            this.localApiMeta.makeLocal_fromBytes_ctxLocal(this.context, data);

        } catch (e) {
             Log.error("Error processing incoming WebSocket message.", e as Error);
        }
    }

    /**
     * Вызывается при ошибке WebSocket.
     */
    private handleError(event: Event | ErrorEvent): void {
        using _l = Log.context(this.log);
        const errorMessage = (event instanceof ErrorEvent) ? event.message : "WebSocket connection error.";
        const errorCause = (event instanceof ErrorEvent) ? event.error : (event as any as Error);

        const err = new ClientApiException(errorMessage, errorCause);
        Log.error(err.message, err);

        // Если future еще не завершен (ошибка до onOpen), завершаем его с ошибкой.
        if (!this.connectFuture.isFinalStatus()) {
            this.connectFuture.error(err);
        }

        // Очищаем ресурсы
        this.context?.close();
        this.context = null;
        this.websocket = null;
    }

    /**
     * Вызывается при закрытии WebSocket соединения.
     */
    private handleClose(event: CloseEvent): void {
        using _l = Log.context(this.log);
        Log.info("WebSocket connection closed.", { code: event.code, reason: event.reason, wasClean: event.wasClean });

        // Если future еще не завершен (соединение закрылось до onOpen), завершаем его с ошибкой.
        if (!this.connectFuture.isFinalStatus()) {
             this.connectFuture.error(new ClientApiException(`WebSocket closed unexpectedly (Code: ${event.code})`));
        }

        // Очищаем ресурсы
        this.context?.close(); // Закрываем контекст (очищает futures)
        this.context = null;
        this.websocket = null;
    }

    /**
     * @inheritdoc
     */
    public close(): AFuture {
        using _l = Log.context(this.log);
        Log.info("Closing FastMetaClientWebSocket...");

        // Отменяем future, если он еще не завершен
        if (!this.connectFuture.isFinalStatus()) {
            this.connectFuture.cancel();
        }

        // Закрываем контекст
        this.context?.close();
        this.context = null;

        // Закрываем WebSocket
        if (this.websocket) {
            try {
                // Удаляем обработчики, чтобы избежать вызова handleClose
                this.websocket.onopen = null;
                this.websocket.onmessage = null;
                this.websocket.onerror = null;
                this.websocket.onclose = null;

                if (this.websocket.readyState === WebSocket.OPEN || this.websocket.readyState === WebSocket.CONNECTING) {
                    this.websocket.close(1000, "Client initiated close");
                }
            } catch (e) {
                 Log.warn("Error during WebSocket close", e as Error);
            }
            this.websocket = null;
        }

        return AFuture.of(); // Возвращаем немедленно завершенный future
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
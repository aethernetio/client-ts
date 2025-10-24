import { FastFutureContext, FastMeta, FutureRec, BytesConverter } from './aether_fastmeta';
import {  AFuture, ARFuture } from './aether_future';
import { DataIn, DataOut, DataInOutStatic, DataInOut } from './aether_datainout';
import { UUID, Disposable, AConsumer } from './aether_types'; // Добавлен AConsumer
import {
    ServerRegistrationApi,
    PowMethod,
    Key,
    SodiumSignPublic,
    SodiumCurvePrivate,
    GlobalApiRegistrationServerRegistrationApi, // <-- ИСПРАВЛЕННЫЙ ИМПОРТ
    WorkProofDTO,
    CryptoLib,
    SignedKey,
    Sign,
    SignAE_ED25519,
    GlobalRegServerApi,
    GlobalRegServerApiRemote,
    ServerDescriptor, // <-- Добавлен импорт ServerDescriptor
    Cloud
} from './aether_api'; // Импортируем сгенерированные типы
import { mock } from 'jest-mock-extended'; // Для мокирования интерфейсов/классов

// Используем MockFastFutureContext из предыдущего примера
class MockFastFutureContext implements FastFutureContext {
    sentData: Uint8Array | null = null;
    registeredFutures: Map<number, FutureRec> = new Map();
    lastRequestId = 0;
    closed = false;
    // --- Добавлено для отслеживания отправленных результатов ---
    sentResults = new Map<number, Uint8Array | null>(); // requestId -> data (null for NoData)

    sendToRemote(data: Uint8Array): void {
        console.log(`Mock sendToRemote called with ${data.length} bytes.`);
        this.sentData = data; // Сохраняем последние отправленные данные
    }

    regFuture(worker: FutureRec): number {
        this.lastRequestId++;
        console.log(`Mock regFuture called. Returning requestId: ${this.lastRequestId}`);
        this.registeredFutures.set(this.lastRequestId, worker);
        return this.lastRequestId;
    }

    getFuture(requestId: number): FutureRec | undefined {
        // Важно: В реальном сценарии future удаляется после получения ответа.
        // Для простоты теста мы его не удаляем, чтобы можно было вызвать onDone/onError.
        // В более сложных тестах может потребоваться удаление.
        return this.registeredFutures.get(requestId); // Для тестов просто возвращаем
    }

    // --- Добавлено: Mock реализация для отправки результатов ---
    sendResultToRemote(requestId: number, data: Uint8Array): void {
         this.sentResults.set(requestId, data);
         // В реальном коде здесь была бы отправка через sendToRemote,
         // но для теста просто сохраняем результат.
         const d = new DataInOut();
         FastMeta.META_COMMAND.serialize(this, 0, d); // Command ID 0 for result
         FastMeta.META_REQUEST_ID.serialize(this, requestId, d);
         if (data.length > 0) d.write(data);
         this.sendToRemote(d.toArray()); // Имитируем отправку результата как обычное сообщение
    }

     sendResultToRemoteNoData(requestId: number): void {
         this.sentResults.set(requestId, null);
         const d = new DataInOut();
         FastMeta.META_COMMAND.serialize(this, 0, d); // Command ID 0 for result
         FastMeta.META_REQUEST_ID.serialize(this, requestId, d);
         this.sendToRemote(d.toArray());// Имитируем отправку результата как обычное сообщение
    }

    // --- Остальные методы заглушки ---
    regLocalFuture(): void {}
    remoteDataToArray(_out: DataOut): void {}
    remoteDataToArrayAsArray(): Uint8Array { return new Uint8Array(0); }
    flush(_sendFuture: AFuture): void {}
    isEmpty(): boolean { return true; }
    size(): number { return 0; }
    close(): AFuture { this.closed = true; return AFuture.of(); }
    destroy(_force: boolean): AFuture { return this.close(); }
    [Symbol.dispose](): void { this.close(); }
    invokeLocalMethodBefore() {}
    invokeLocalMethodAfter() {}
    invokeRemoteMethodAfter() {}
}

// --- Mock Реализация ServerRegistrationApi ---
const mockServerApi: ServerRegistrationApi = {
    // Шпионим за методом registration
    registration: jest.fn((
        _salt: string,
        _suffix: string,
        _passwords: number[],
        _parent: UUID,
        _returnKey: Key,
        _globalApi: GlobalApiRegistrationServerRegistrationApi // <-- ИСПРАВЛЕНО ИМЯ ТИПА
    ): AFuture => {
        console.log("MockServerApi: registration called");
        // Ничего не возвращаем, т.к. метод void
        return AFuture.of(); // Возвращаем завершенный AFuture
    }),
    requestWorkProofData: jest.fn((
         _parent: UUID,
         _powMethods: PowMethod,
         _returnKey: Key
    ): ARFuture<WorkProofDTO> => {
        // Реализация не нужна для этого теста
        console.log("MockServerApi: requestWorkProofData called (returning error)");
        return ARFuture.ofThrow(new Error("Not implemented in mock"));
    }),
    resolveServers: jest.fn((
        _serverIds: Cloud // <-- Тип импортирован из aether_api
    ): ARFuture<ServerDescriptor[]> => { // <-- Тип импортирован из aether_api
        // Реализация не нужна для этого теста
         console.log("MockServerApi: resolveServers called (returning error)");
        return ARFuture.ofThrow(new Error("Not implemented in mock"));
    }),
};

// --- Mock BytesConverter (просто возвращает данные как есть) ---
const mockCryptoProvider: BytesConverter = (data: Uint8Array): Uint8Array => {
    console.log(`MockCryptoProvider: Passthrough ${data.length} bytes`);
    return data;
};


describe('ServerRegistrationApi makeRemote/makeLocal Interaction', () => {
    test('Calling registration on remote should trigger makeLocal on server', () => {
        // --- Клиентская сторона ---
        const clientCtx = new MockFastFutureContext();
        const remoteApi = ServerRegistrationApi.META.makeRemote(clientCtx);

        // Готовим аргументы
        const salt = "test-salt";
        const suffix = "testsuffix";
        const passwords = [123, 456];
        const parent = UUID.fromString("11111111-e89b-12d3-a456-426614174000");
        const returnKey = new SodiumCurvePrivate(new Uint8Array(32).fill(2));

        // Создаем GlobalApiRegistrationServerRegistrationApi:
        const globalCtxClient = new MockFastFutureContext();
        const dummyGlobalApiConsumer: AConsumer<GlobalRegServerApiRemote> = (_api) => {}; // Пустой consumer
        // Используем правильный статический метод правильного класса
        const globalApiStreamToSend = GlobalApiRegistrationServerRegistrationApi.fromRemoteConsumer( // <--- ИСПРАВЛЕННОЕ ИМЯ КЛАССА
            globalCtxClient,
            mockCryptoProvider,
            dummyGlobalApiConsumer
        );

        // Вызываем метод на удаленном API
        remoteApi.registration(salt, suffix, passwords, parent, returnKey, globalApiStreamToSend);

        // Проверяем, что клиент отправил данные
        expect(clientCtx.sentData).not.toBeNull();
        const requestData = clientCtx.sentData!;

        // --- Серверная сторона ---
        const serverCtx = new MockFastFutureContext();
        const requestDataIn = new DataInOutStatic(requestData);

        // Вызываем makeLocal для обработки запроса
        ServerRegistrationApi.META.makeLocal_fromDataIn(serverCtx, requestDataIn, mockServerApi);

        // --- Проверки ---
        expect(mockServerApi.registration).toHaveBeenCalledTimes(1);

        // Проверяем аргументы, полученные mock-сервером
        const receivedArgs = (mockServerApi.registration as jest.Mock).mock.calls[0];

        expect(receivedArgs[0]).toEqual(salt);
        expect(receivedArgs[1]).toEqual(suffix);
        expect(receivedArgs[2]).toEqual(passwords);
        expect(receivedArgs[3]).toBeInstanceOf(UUID);
        expect((receivedArgs[3] as UUID).toString()).toEqual(parent.toString());
        expect(receivedArgs[4]).toBeInstanceOf(SodiumCurvePrivate); // Проверяем тип ключа
        expect((receivedArgs[4] as SodiumCurvePrivate).data).toEqual((returnKey as SodiumCurvePrivate).data);
        expect(receivedArgs[5]).toBeInstanceOf(GlobalApiRegistrationServerRegistrationApi); // <--- ИСПРАВЛЕННОЕ ИМЯ КЛАССА
        // Сравниваем внутренние данные Stream (должны совпадать с тем, что было сериализовано клиентом)
        expect((receivedArgs[5] as GlobalApiRegistrationServerRegistrationApi).data).toEqual(globalApiStreamToSend.data); // <--- ИСПРАВЛЕННОЕ ИМЯ КЛАССА
    });

    // --- Тест для requestWorkProofData с обработкой Future ---
     test('requestWorkProofData future should resolve with correct data when server responds', async () => {
        const clientCtx = new MockFastFutureContext();
        const remoteApi = ServerRegistrationApi.META.makeRemote(clientCtx);

        // Входные данные для вызова API
        const testParentUUID = UUID.fromString("22222222-e89b-12d3-a456-426614174000");
        const testPowMethod = PowMethod.AE_BCRYPT_CRC32;
        const testReturnKey = new SodiumSignPublic(new Uint8Array(32).fill(3));

        // Ожидаемый ответ от сервера (фейковый)
        const expectedSalt = "server-salt";
        const expectedSuffix = "serversuffix";
        const expectedPoolSize = 8;
        const expectedMaxHash = 1000;
        const expectedGlobalKey = new SignedKey(
            new SodiumSignPublic(new Uint8Array(32).fill(4)),
            new SignAE_ED25519(new Uint8Array(64).fill(5))
        );
        const expectedResponseDTO = new WorkProofDTO(
            expectedSalt, expectedSuffix, expectedPoolSize, expectedMaxHash, expectedGlobalKey
        );

        // Создаем промис, который разрешится при вызове колбэка future
        const responsePromise = new Promise<WorkProofDTO>((resolve, reject) => {
            // Вызываем метод API
            const futureResult = remoteApi.requestWorkProofData(testParentUUID, testPowMethod, testReturnKey);

            // Регистрируем колбэки для обработки ответа
            futureResult.to(
                (receivedDto: WorkProofDTO) => {
                    console.log("Future resolved (onDone callback executed)");
                    resolve(receivedDto); // Разрешаем промис с полученным DTO
                },
                (error: Error) => {
                    console.error("Future errored (onError callback executed)");
                    reject(error); // Отклоняем промис при ошибке
                }
            );

             // --- Имитация ответа сервера ---
             // Небольшая задержка, чтобы убедиться, что .to() успел зарегистрировать колбэки
             setTimeout(() => {
                const requestId = clientCtx.lastRequestId; // Получаем ID, который вернул regFuture
                const futureRec = clientCtx.getFuture(requestId);

                if (futureRec) {
                    console.log(`Simulating server response for requestId: ${requestId}`);
                    // Сериализуем фейковый ответ
                    const responseDataOut = new DataInOut();
                    WorkProofDTO.META.serialize(clientCtx, expectedResponseDTO, responseDataOut); // Используем META самого DTO
                    const responseBytes = responseDataOut.toArray();

                    // "Отправляем" ответ клиенту, вызывая onDone
                    futureRec.onDone(new DataInOutStatic(responseBytes));
                } else {
                    reject(new Error(`FutureRec not found for requestId: ${requestId}`));
                }
             }, 50); // Небольшая задержка

        });

        // Ожидаем разрешения промиса (т.е. выполнения колбэка future.to())
        await expect(responsePromise).resolves.toBeDefined();

        // Проверяем, что полученные данные соответствуют ожидаемым
        const receivedDto = await responsePromise;
        expect(receivedDto).toBeInstanceOf(WorkProofDTO);
        expect(receivedDto.salt).toEqual(expectedSalt);
        expect(receivedDto.suffix).toEqual(expectedSuffix);
        expect(receivedDto.poolSize).toEqual(expectedPoolSize);
        expect(receivedDto.maxHashVal).toEqual(expectedMaxHash);
        expect(receivedDto.globalKey).toBeInstanceOf(SignedKey);
        expect((receivedDto.globalKey.key as SodiumSignPublic).data).toEqual((expectedGlobalKey.key as SodiumSignPublic).data);
        expect((receivedDto.globalKey.sign as SignAE_ED25519).data).toEqual((expectedGlobalKey.sign as SignAE_ED25519).data);

        console.log("Test completed successfully, future resolved with correct DTO.");
    });

     // Можно добавить тест для проверки onError
     test('requestWorkProofData future should reject when server responds with error', async () => {
         const clientCtx = new MockFastFutureContext();
         const remoteApi = ServerRegistrationApi.META.makeRemote(clientCtx);

         const testParentUUID = UUID.fromString("33333333-e89b-12d3-a456-426614174000");
         const testPowMethod = PowMethod.AE_BCRYPT_CRC32;
         const testReturnKey = new SodiumSignPublic(new Uint8Array(32).fill(6));

         // Ожидаемая ошибка (просто строка для примера, в реальности должен быть сериализованный объект ошибки)
         const expectedErrorMessage = "Server-side error occurred";


         const errorPromise = new Promise<Error>((resolve, reject) => {
             const futureResult = remoteApi.requestWorkProofData(testParentUUID, testPowMethod, testReturnKey);

             futureResult.to(
                 (_receivedDto: WorkProofDTO) => {
                     reject(new Error("Future resolved unexpectedly"));
                 },
                 (error: Error) => {
                     console.log("Future errored (onError callback executed)");
                     resolve(error); // Разрешаем промис с ошибкой
                 }
             );

             // --- Имитация ответа сервера с ошибкой ---
             setTimeout(() => {
                 const requestId = clientCtx.lastRequestId;
                 const futureRec = clientCtx.getFuture(requestId);
                 if (futureRec) {
                     console.log(`Simulating server ERROR response for requestId: ${requestId}`);
                     // Сериализуем фейковую ошибку (просто строку для примера)
                     const errorDataOut = new DataInOut();
                     // В реальном коде здесь была бы сериализация объекта ошибки через его META
                     // Используем META_STRING для имитации потока байт с ошибкой
                     const errorBytes = FastMeta.META_STRING.serializeToBytes(expectedErrorMessage);

                     // "Отправляем" ошибку клиенту
                     futureRec.onError(new DataInOutStatic(errorBytes));
                 } else {
                     reject(new Error(`FutureRec not found for requestId: ${requestId}`));
                 }
             }, 50);
         });

         // Ожидаем отклонения промиса
         await expect(errorPromise).resolves.toBeInstanceOf(Error);
         // Проверим сообщение об ошибке, созданное в onError future-а
         // (т.к. мы не сериализовали настоящий объект ошибки, стандартный onError создаст generic Error)
         const error = await errorPromise;
         expect(error.message).toContain("Remote call failed without a typed exception"); // Или проверяем конкретный тип ошибки, если throws указан в YAML
         console.log("Test completed successfully, future rejected as expected.");

     });
});
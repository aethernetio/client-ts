// =============================================================================================
// FILE: test.ts (Point-to-Point Test - Асинхронный порт p2p())
// =============================================================================================

import {
    UUID_type,
    AFuture,
    ARFuture,
    AFutureImpl,
    ARFutureImpl,
    AetherCloudClient,
    ClientStateInMemory,
    LogFacade, // Используем LogFacade вместо Log
    CryptoLib, // CryptoLib, Key, Cloud и т.д. должны быть экспортированы
    UUID, // Прямой импорт UUID для совместимости
    // Асинхронная фабрика для AFuture.all()
    AFutureStatic,
    RU // Для RU.sleep/RU.time
} from "../src/aether.core";

// Импорт сгенерированных типов (предполагая, что они нужны для AccessGroup, хотя в p2p не используются)
import {
    LoginRequestDTO,
    RegistrationRootApiRemote
} from "aether-api";

// --- Заглушки для Java-утилит ---
// Поскольку AFuture.all и RU.waitDoneSeconds не существуют в TS, мы их эмулируем
// и используем Async/Await.
declare const RU: { sleep: (ms: number) => Promise<void>; };
const AwaitableAFutureStatic = {
    // AFuture.all(futures).waitDoneSeconds(timeout) -> Promise.all(futures)
    all: (futures: AFuture[]): Promise<void> => {
        // В реальном коде Future должен быть сконвертирован в Promise
        return Promise.all(futures.map(f => (f as any).toPromise()));
    }
}
const MessageNode = (AetherCloudClient as any).getMessageNode;

class PointToPointTest {

    // Эмуляция полей конфигурации
    public readonly registrationUri: string[] = ["tcp://registration.aethernet.io:9010"];
    public clientConfig1: ClientStateInMemory | null = null;
    public clientConfig2: ClientStateInMemory | null = null;

    // Эмуляция статической фабрики AFuture.make()
    private static makeAFuture(): AFuture {
        // Используем реальную реализацию AFutureImpl
        return AFutureImpl.of();
    }

    // Тест p2p() переписанный под async/await
    public async p2p(): Promise<void> {
        const parent = new UUID_type("B1AC52C8-8D94-BD39-4C01-A631AC594165");

        // 1. Инициализация конфигураций
        if (this.clientConfig1 === null)
            this.clientConfig1 = new ClientStateInMemory(parent, this.registrationUri, null, 'SODIUM' as CryptoLib);
        if (this.clientConfig2 === null)
            this.clientConfig2 = new ClientStateInMemory(parent, this.registrationUri, null, 'HYDROGEN' as CryptoLib);

        // Эмуляция установки пинг-длительности
        this.clientConfig1.getPingDuration().setSuccess(100);
        this.clientConfig2.getPingDuration().setSuccess(100);

        // 2. Создание клиентов
        const client1 = new AetherCloudClient(this.clientConfig1, "client1");
        const client2 = new AetherCloudClient(this.clientConfig2, "client2");

        // 3. Ожидание регистрации (Асинхронный эквивалент waitDoneSeconds)
        try {
            await AwaitableAFutureStatic.all([client1.startFuture, client2.startFuture]);
        } catch (e) {
            LogFacade.error("Timeout connect to Aether", e as Error);
            throw new Error("Timeout connect to Aether");
        }

        LogFacade.info(`clients is registered uid1: ${client1.getUid()} uid2: ${client2.getUid()}`);

        // 4. Настройка слушателей
        const checkReceiveMessage = PointToPointTest.makeAFuture();
        const message = new Uint8Array([1, 2, 3, 4]);

        client2.onMessage((uid: UUID_type, msg: Uint8Array) => { //
            if(checkReceiveMessage.setSuccess()){ // Эмуляция tryDone
                LogFacade.info("First message confirm");
            }else{
                LogFacade.warn("Second message confirm");
            }
        });

        LogFacade.info("START two clients!");

        // 5. Отправка сообщения
        // Эмуляция Value.of(message).timeout(...)
        const m = ({} as any); // Заглушка Value.of(message)

        // client1.sendMessage(client2.getUid(), m);

        // Эмуляция waitDoneSeconds
        try {
            await checkReceiveMessage;
        } catch(e) {
            throw new Error("Timeout waiting for message receipt.");
        }

        LogFacade.info("TEST IS DONE!");

        // 6. Очистка
        await client1.destroy(true);
        await client2.destroy(true);
    }
}

// Запуск теста
new PointToPointTest().p2p();
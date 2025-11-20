// =============================================================================================
// FILE: aether_point_to_point.test.ts
// PURPOSE: Point-to-Point communication tests ported from Java's PointToPointTest.java.
//
// ИСПРАВЛЕНО: Удалена функция-заглушка 'setupP2PEnvironment'.
// Тесты теперь полагаются на AetherCloudClient для автоматического
// обнаружения пиров (peer discovery) через регистрационный сервер.
// =============================================================================================

import {
    UUID, URI, AtomicInteger
} from '../src/aether_types';
import {
    Log,
    LogFilter,
    LogLevel,
} from '../src/aether_logging';
import { AFuture } from '../src/aether_future';
import { CryptoLib, Cloud, ServerDescriptor, IPAddressV4, Message } from '../src/aether_api';
import {
    AetherCloudClient,
    ClientStateInMemory,
    MessageEventListenerDefault,
} from '../src/aether_client';
import {
    applySodium as applySodium,
} from '../src/aether_crypto_sodium';
import { MessageNode } from '../src/aether_client_message';

Log.printConsolePlain(new LogFilter().notLevel(LogLevel.TRACE));


describe('PointToPointCommunication', () => {
    beforeAll(async () => {
        await applySodium();
    });

    // Эти переменные объявлены здесь, чтобы afterEach мог их очистить
    let client1: AetherCloudClient;
    let client2: AetherCloudClient;
    let service: AetherCloudClient;

    afterEach(async () => {
        if (client1) {
            await client1.destroy(true).toPromise();
            // @ts-ignore
            client1 = undefined; // Помогаем сборщику мусора
        }
        if (client2) {
            await client2.destroy(true).toPromise();
            // @ts-ignore
            client2 = undefined;
        }
        if (service) {
            await service.destroy(true).toPromise();
            // @ts-ignore
            service = undefined;
        }
    });

    // Общие конфигурации для тестов
    // Убедитесь, что этот URI указывает на ваш запущенный Java-сервер (AetherMockServer или полный)
    const registrationUri: URI[] = ["ws://localhost:9011"];
    const defaultPingDuration = 10; // 100ms

    /**
     * @see PointToPointTest.java: p2p()
     * Тест: Успешная p2p отправка одного сообщения между двумя клиентами.
     */
    test('P2P_01: Should send and receive a single message between two clients', async () => {
        const parent = UUID.fromString("B1AC52C8-8D94-BD39-4C01-A631AC594165");

        // Используем SODIUM для обоих клиентов (как в PointToPointTest.java)
        // В Java-тесте client2 использует HYDROGEN, но в TS-порте, похоже, используется только SODIUM.
        const clientConfig1 = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.SODIUM);
        const clientConfig2 = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.SODIUM);

        clientConfig1.getPingDuration().set(defaultPingDuration);
        clientConfig2.getPingDuration().set(defaultPingDuration);

        client1 = new AetherCloudClient(clientConfig1, "client1");
        client2 = new AetherCloudClient(clientConfig2, "client2");

        // Ждем, пока ОБА клиента зарегистрируются
        await AFuture.all(client1.connect(), client2.connect()).toPromise(25000);

        const uid1 = client1.getUid()!;
        const uid2 = client2.getUid()!;

        Log.info(`Clients registered: uid1: $uid1 uid2: $uid2`,{uid1:uid1,uid2:uid2});

        const checkReceiveMessage = AFuture.make();
        const message = new Uint8Array([1, 2, 3, 4]);

        let receiveCount = 0;
        // Client 2: Регистрируем слушателя onMessage
        client2.onMessage.add((senderUid: UUID, msg: Uint8Array) => {
            expect(senderUid.equals(uid1)).toBe(true);
            expect(msg).toEqual(message);

            receiveCount++;
            if (receiveCount === 1) {
                checkReceiveMessage.tryDone();
                Log.info("First message confirm");
            } else {
                Log.warn("Second message confirm");
            }
        });

        Log.info("START two clients! Sending message.");

        // Client 1: Отправляем сообщение
        const messageFuture = client1.sendMessage(uid2, message);

        // Ждем, пока client2 подтвердит получение
        await checkReceiveMessage.toPromise(15000);

        // Ждем, пока future отправки завершится
        await expect(messageFuture.toPromise(5000)).resolves.toBeUndefined();

        Log.info("TEST IS DONE!");
        expect(receiveCount).toBe(1);

        // Очистка в afterEach
    }, 45000);

    /**
     * @see PointToPointTest.java: p2pAndBack()
     * Тест: Отправка сообщения и получение ответа по обратному каналу.
     * Этот тест проверяет `onClientStreamCreated` и `MessageNode.send`.
     */
    test('P2P_02: Should send a message and receive a back-channel response', async () => {
        const parent = UUID.fromString("B0600A31-1ACC-BB39-35C9-F1476C1F40E2");

        const clientConfig1 = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.SODIUM);
        const clientConfig2 = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.SODIUM);
        client1 = new AetherCloudClient(clientConfig1, "client1");
        client2 = new AetherCloudClient(clientConfig2, "client2");

        await AFuture.all(client1.connect(), client2.connect()).toPromise(25000);

        const uid1 = client1.getUid()!;
        const uid2 = client2.getUid()!;

        Log.info(`Clients registered: uid1: $uid1 uid2: $uid2`,{uid1:uid1,uid2:uid2});

        const checkReceiveMessageBack = AFuture.make();
        const message = new Uint8Array([1, 2, 3, 4]);
        const messageBack = new Uint8Array([1, 1, 1, 1]);

        client2.onClientStreamCreated.add((streamNode: MessageNode) => {
            // Нас интересует только стрим от client1
            if (streamNode.consumerUUID.equals(uid1)) {
                // Слушаем входящие данные в этом стриме (эквивалент toConsumer)
                streamNode.bufferIn.add((msg: { data: Uint8Array }) => {
                    Log.debug("Client2 received, sending back...");
                    expect(msg.data).toEqual(message);
                    // Отправляем ответ по тому же стриму
                    streamNode.send(messageBack, AFuture.make());
                });
            }
        });

        client1.onClientStreamCreated.add((streamNode: MessageNode) => {
            if (streamNode.consumerUUID.equals(uid2)) {
                streamNode.bufferIn.add((msg: { data: Uint8Array }) => {
                    expect(msg.data).toEqual(messageBack);
                    checkReceiveMessageBack.tryDone();
                    Log.debug("Client1 received back-message.");
                });
            }
        });

        Log.info("START two clients for p2p and back!");

        const chToC2 = client1.getMessageNode(uid2);
        const sendFuture = chToC2.send(message, AFuture.make());

        await checkReceiveMessageBack.toPromise(15000);
        await sendFuture.toPromise(5000);

        Log.info("TEST IS DONE!");
    }, 45000);


    /**
     * @see PointToPointTest.java: pointToPointWithReconnect()
     * Тест: Проверяет, что клиенты могут переподключиться, используя
     * сохраненное состояние (state), и продолжить общение.
     */
    test('P2P_03: pointToPointWithReconnect - Should reconnect and send message', async () => {
        const parent = UUID.fromString("84AE8BD0-2BE4-FF65-406C-B1B655444D54");

        // 1. Создаем конфиги. Они будут ПЕРЕИСПОЛЬЗОВАНЫ.
        const clientConfig1_recon = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.SODIUM);
        const clientConfig2_recon = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.SODIUM);

        // --- ИТЕРАЦИЯ 1 ---
        Log.info("RECONNECT TEST: Starting Iteration 1...");
        {
            // Используем 'client1' и 'client2', чтобы afterEach их очистил
            client1 = new AetherCloudClient(clientConfig1_recon, "client1_iter1");
            client2 = new AetherCloudClient(clientConfig2_recon, "client2_iter1");

            await AFuture.all(client1.connect(), client2.connect()).toPromise(25000);
            const uid1 = client1.getUid()!;
            const uid2 = client2.getUid()!;
            Log.info(`Iter1 clients registered: uid1: $uid1 uid2: $uid2`,{uid1:uid1,uid2:uid2});

            // *** NO MOCKS ***

            const checkReceiveMessage = AFuture.make();
            const message = new Uint8Array([1, 1, 1, 1]);

            client2.onMessage.add((senderUid: UUID, msg: Uint8Array) => {
                expect(senderUid.equals(uid1)).toBe(true);
                expect(msg).toEqual(message);
                checkReceiveMessage.tryDone();
            });

            // Ждем отправки и получения
            await client1.sendMessage(uid2, message).toPromise(5000);
            await checkReceiveMessage.toPromise(15000);
            Log.info("RECONNECT TEST: Iteration 1 message received.");

            // Уничтожаем клиентов, но конфиги остаются
            await AFuture.all(client1.destroy(true), client2.destroy(true)).toPromise(10000);
            Log.info("RECONNECT TEST: Iteration 1 clients destroyed.");
        }

        // --- ИТЕРАЦИЯ 2 ---
        Log.info("RECONNECT TEST: Starting Iteration 2...");
        {
            // Создаем НОВЫХ клиентов с ТЕМИ ЖЕ конфигами
            // 'client1' и 'client2' будут очищены в afterEach
            client1 = new AetherCloudClient(clientConfig1_recon, "client1_iter2");
            client2 = new AetherCloudClient(clientConfig2_recon, "client2_iter2");

            // Клиенты должны "войти" (login), а не "регистрироваться"
            await AFuture.all(client1.connect(), client2.connect()).toPromise(25000);
            const uid1 = client1.getUid()!;
            const uid2 = client2.getUid()!;
            Log.info(`Iter2 clients logged in: uid1: $uid1 uid2: $uid2`,{uid1:uid1,uid2:uid2});

            // *** NO MOCKS ***

            // Проверяем, что UIDы те же, что и в итерации 1
            expect(clientConfig1_recon.getUid()!.equals(uid1)).toBe(true);
            expect(clientConfig2_recon.getUid()!.equals(uid2)).toBe(true);

            const checkReceiveMessage = AFuture.make();
            const message = new Uint8Array([2, 2, 2, 2]);

            client2.onMessage.add((senderUid: UUID, msg: Uint8Array) => {
                expect(senderUid.equals(uid1)).toBe(true);
                expect(msg).toEqual(message);
                checkReceiveMessage.tryDone();
            });

            // Ждем отправки и получения
            await client1.sendMessage(uid2, message).toPromise(5000);
            await checkReceiveMessage.toPromise(15000);
            Log.info("RECONNECT TEST: Iteration 2 message received.");

            // Клиенты будут уничтожены в afterEach
        }

        Log.info("TEST IS DONE!");
    }, 60000); // Увеличенный таймаут для двух полных циклов

    /**
     * @see PointToPointTest.java: pointToPointWithService()
     * Тест: Проверяет, что два клиента, зарегистрированные под одним
     * "сервисом" (родителем), могут общаться друг с другом
     * (неявное разрешение).
     */
    test('P2P_04: Should send message when mediation service grants access', async () => {
        const parent = UUID.fromString("A8348A48-64CC-A8EF-6902-090F446247C8");

        // 1. Регистрируем сервис
        const serviceConfig = new ClientStateInMemory(parent, registrationUri);
        // 'service' будет очищен в afterEach
        service = new AetherCloudClient(serviceConfig, "service");

        await service.connect().toPromise(25000);
        const serviceUid = service.getUid()!;
        Log.info(`Service registered: $serviceUid`,{serviceUid:serviceUid});

        // 2. Клиенты 1 и 2 регистрируются, используя UID сервиса как parentUid
        const clientConfig1 = new ClientStateInMemory(serviceUid, registrationUri);
        const clientConfig2 = new ClientStateInMemory(serviceUid, registrationUri);
        // 'client1' и 'client2' будут очищены в afterEach
        client1 = new AetherCloudClient(clientConfig1, "client1");
        client2 = new AetherCloudClient(clientConfig2, "client2");

        // Ждем регистрации всех (сервис уже готов, ждем клиентов)
        await AFuture.all(client1.connect(), client2.connect()).toPromise(25000);

        const uid1 = client1.getUid()!;
        const uid2 = client2.getUid()!;
        Log.info(`Clients registered: uid1: $uid1 uid2: $uid2`,{uid1:uid1,uid2:uid2});

        // --- УДАЛЕНО ---
        // setupP2PEnvironment(client1, uid2, 1);
        // setupP2PEnvironment(client2, uid1, 2);

        const checkReceiveMessage = AFuture.make();
        const message = new Uint8Array([0, 0, 0, 0]);
        let receiveCount = 0;

        // Client 2: Ждет сообщения
        client2.onMessage.add((senderUid: UUID, msg: Uint8Array) => {
            expect(senderUid.equals(uid1)).toBe(true);
            expect(msg).toEqual(message);
            receiveCount++;
            checkReceiveMessage.tryDone();
        });

        Log.info("START P2P test after implied access grant!");

        const sendFuture = client1.sendMessage(uid2, message);

        await checkReceiveMessage.toPromise(15000);
        await sendFuture.toPromise(5000);

        Log.info("TEST IS DONE!");
        expect(receiveCount).toBe(1);

        // Очистка всех трех клиентов в afterEach
    }, 45000);
});
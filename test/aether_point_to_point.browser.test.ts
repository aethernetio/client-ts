import { expect } from 'chai';
import {
    UUID, URI
} from '../src/aether_types';
import {
    Log, LNode
} from '../src/aether_logging';
import { AFuture } from '../src/aether_future';
import { CryptoLib } from '../src/aether_api';
import {
    AetherCloudClient,
    ClientStateInMemory,
    MessageEventListenerDefault,
} from '../src/aether_client';
import {
    applySodium as applySodium,
} from '../src/aether_crypto_sodium';
import { MessageNode } from '../src/aether_client_message';

// Включаем логгирование в консоль
Log.printConsoleColored((node: LNode) => {
    const level = node.getLevel();
    return level !== 'TRACE';
//     return true;
});


describe('PointToPointCommunication', () => {
    // Используем 'before' (стандарт Mocha)
    before(async () => {
        await applySodium();
    });

    // Эти переменные объявлены здесь, чтобы afterEach мог их очистить
    let client1: AetherCloudClient;
    let client2: AetherCloudClient;
    let service: AetherCloudClient;

    afterEach(async () => {
        // Эта функция будет вызываться после КАЖДОГО теста
        // и гарантированно очистит ресурсы
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
    // Используем 'it' и 'async function' для 'this.timeout'
    it('P2P_01: Should send and receive a single message between two clients', async function() {
        this.timeout(45000); // Установка таймаута для Mocha

        const parent = UUID.fromString("B1AC52C8-8D94-BD39-4C01-A631AC594165");

        const clientConfig1 = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.SODIUM);
        const clientConfig2 = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.SODIUM);

        clientConfig1.getPingDuration().set(defaultPingDuration);
        clientConfig2.getPingDuration().set(defaultPingDuration);

        client1 = new AetherCloudClient(clientConfig1, "client1");
        client2 = new AetherCloudClient(clientConfig2, "client2");

        await AFuture.all(client1.connect(), client2.connect()).toPromise(25000);

        const uid1 = client1.getUid()!;
        const uid2 = client2.getUid()!;

        Log.info(`Clients registered: uid1: $uid1 uid2: $uid2`,{uid1:uid1,uid2:uid2});

        const checkReceiveMessage = AFuture.make();
        const message = new Uint8Array([1, 2, 3, 4]);

        let receiveCount = 0;
        client2.onMessage.add((senderUid: UUID, msg: Uint8Array) => {
            // Синтаксис Chai
            expect(senderUid.equals(uid1)).to.be.true;
            expect(msg).to.deep.equal(message); // .toEqual -> .to.deep.equal для массивов

            receiveCount++;
            if (receiveCount === 1) {
                checkReceiveMessage.tryDone();
                Log.info("First message confirm");
            } else {
                Log.warn("Second message confirm");
            }
        });

        Log.info("START two clients! Sending message.");

        const messageFuture = client1.sendMessage(uid2, message);

        await messageFuture.toPromise(5000);

        await checkReceiveMessage.toPromise(15000);

        Log.info("TEST IS DONE!");
        // Синтаксис Chai
        expect(receiveCount).to.equal(1); // .toBe -> .to.equal для примитивов
    });

    /**
     * @see PointToPointTest.java: p2pAndBack()
     * Тест: Отправка сообщения и получение ответа по обратному каналу.
     */
    it('P2P_02: Should send a message and receive a back-channel response', async function() {
        this.timeout(45000);

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
            if (streamNode.consumerUUID.equals(uid1)) {
                streamNode.bufferIn.add((msg: { data: Uint8Array }) => {
                    Log.debug("Client2 received, sending back...");
                    expect(msg.data).to.deep.equal(message); // .toEqual -> .to.deep.equal
                    streamNode.send(messageBack, AFuture.make());
                });
            }
        });

        client1.onClientStreamCreated.add((streamNode: MessageNode) => {
            if (streamNode.consumerUUID.equals(uid2)) {
                streamNode.bufferIn.add((msg: { data: Uint8Array }) => {
                    expect(msg.data).to.deep.equal(messageBack); // .toEqual -> .to.deep.equal
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
    });


    /**
     * @see PointToPointTest.java: pointToPointWithReconnect()
     * Тест: Проверяет, что клиенты могут переподключиться.
     */
    it('P2P_03: pointToPointWithReconnect - Should reconnect and send message', async function() {
        this.timeout(60000); // Увеличенный таймаут

        const parent = UUID.fromString("84AE8BD0-2BE4-FF65-406C-B1B655444D54");

        const clientConfig1_recon = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.SODIUM);
        const clientConfig2_recon = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.SODIUM);

        // --- ИТЕРАЦИЯ 1 ---
        Log.info("RECONNECT TEST: Starting Iteration 1...");
        {
            client1 = new AetherCloudClient(clientConfig1_recon, "client1_iter1");
            client2 = new AetherCloudClient(clientConfig2_recon, "client2_iter1");

            await AFuture.all(client1.connect(), client2.connect()).toPromise(25000);
            const uid1 = client1.getUid()!;
            const uid2 = client2.getUid()!;
            Log.info(`Iter1 clients registered: uid1: $uid1 uid2: $uid2`,{uid1:uid1,uid2:uid2});

            const checkReceiveMessage = AFuture.make();
            const message = new Uint8Array([1, 1, 1, 1]);

            client2.onMessage.add((senderUid: UUID, msg: Uint8Array) => {
                expect(senderUid.equals(uid1)).to.be.true;
                expect(msg).to.deep.equal(message);
                checkReceiveMessage.tryDone();
            });

            await client1.sendMessage(uid2, message).toPromise(5000);
            await checkReceiveMessage.toPromise(15000);
            Log.info("RECONNECT TEST: Iteration 1 message received.");

            await AFuture.all(client1.destroy(true), client2.destroy(true)).toPromise(10000);
            Log.info("RECONNECT TEST: Iteration 1 clients destroyed.");
        }

        // --- ИТЕРАЦИЯ 2 ---
        Log.info("RECONNECT TEST: Starting Iteration 2...");
        {
            client1 = new AetherCloudClient(clientConfig1_recon, "client1_iter2");
            client2 = new AetherCloudClient(clientConfig2_recon, "client2_iter2");

            await AFuture.all(client1.connect(), client2.connect()).toPromise(25000);
            const uid1 = client1.getUid()!;
            const uid2 = client2.getUid()!;
            Log.info(`Iter2 clients logged in: uid1: $uid1 uid2: $uid2`,{uid1:uid1,uid2:uid2});

            expect(clientConfig1_recon.getUid()!.equals(uid1)).to.be.true;
            expect(clientConfig2_recon.getUid()!.equals(uid2)).to.be.true;

            const checkReceiveMessage = AFuture.make();
            const message = new Uint8Array([2, 2, 2, 2]);

            client2.onMessage.add((senderUid: UUID, msg: Uint8Array) => {
                expect(senderUid.equals(uid1)).to.be.true;
                expect(msg).to.deep.equal(message);
                checkReceiveMessage.tryDone();
            });

            await client1.sendMessage(uid2, message).toPromise(5000);
            await checkReceiveMessage.toPromise(15000);
            Log.info("RECONNECT TEST: Iteration 2 message received.");
        }

        Log.info("TEST IS DONE!");
    });

    /**
     * @see PointToPointTest.java: pointToPointWithService()
     * Тест: Проверяет, что два клиента под одним сервисом могут общаться.
     */
    it('P2P_04: Should send message when mediation service grants access', async function() {
        this.timeout(45000);

        const parent = UUID.fromString("A8348A48-64CC-A8EF-6902-090F446247C8");

        // 1. Регистрируем сервис
        const serviceConfig = new ClientStateInMemory(parent, registrationUri);
        service = new AetherCloudClient(serviceConfig, "service");

        await service.connect().toPromise(25000);
        const serviceUid = service.getUid()!;
        Log.info(`Service registered: $serviceUid`,{serviceUid:serviceUid});

        // 2. Клиенты 1 и 2 регистрируются, используя UID сервиса как parentUid
        const clientConfig1 = new ClientStateInMemory(serviceUid, registrationUri);
        const clientConfig2 = new ClientStateInMemory(serviceUid, registrationUri);
        client1 = new AetherCloudClient(clientConfig1, "client1");
        client2 = new AetherCloudClient(clientConfig2, "client2");

        await AFuture.all(client1.connect(), client2.connect()).toPromise(25000);

        const uid1 = client1.getUid()!;
        const uid2 = client2.getUid()!;
        Log.info(`Clients registered: uid1: $uid1 uid2: $uid2`,{uid1:uid1,uid2:uid2});

        const checkReceiveMessage = AFuture.make();
        const message = new Uint8Array([0, 0, 0, 0]);
        let receiveCount = 0;

        client2.onMessage.add((senderUid: UUID, msg: Uint8Array) => {
            expect(senderUid.equals(uid1)).to.be.true;
            expect(msg).to.deep.equal(message);
            receiveCount++;
            checkReceiveMessage.tryDone();
        });

        Log.info("START P2P test after implied access grant!");

        const sendFuture = client1.sendMessage(uid2, message);

        await checkReceiveMessage.toPromise(15000);
        await sendFuture.toPromise(5000);

        Log.info("TEST IS DONE!");
        expect(receiveCount).to.equal(1);
    });
});
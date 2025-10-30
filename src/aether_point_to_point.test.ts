// =============================================================================================
// FILE: aether_point_to_point.test.ts
// PURPOSE: Point-to-Point communication tests ported from Java's PointToPointTest.java.
// =============================================================================================

/** @ignore */
import './aether_crypto_sodium';

import {
    UUID, URI, AtomicLong, AtomicInteger, AConsumer, ABiConsumer, AtomicReference,
    ClientStartException, ClientApiException
} from './aether_types';
import {
Log, LogLevel } from './aether_logging';
import { RU, StandardUUIDsImpl } from './aether_utils';
import { AFuture, ARFuture, AMFuture } from './aether_future';
import { AccessGroup, CryptoLib, Message, Cloud, ServerDescriptor } from './aether_api';
import {
    AetherCloudClient,
    ClientStateInMemory,
    MessageEventListenerDefault,
} from './aether_client';
import { ConnectionWork } from './aether_client_connection_work';


// --- Вспомогательный класс, имитирующий Value/MValue из Java ---
/**
 * Basic Value class mimicking io.aether.utils.streams.Value
 * @template T
 */
class Value<T> {
    public data: T;
    public future: AFuture;
    private timeoutHandle: ReturnType<typeof setTimeout> | null = null;
    private onRejectHandler: ((owner: any, blockId: number) => void) | null =
null;

    /**
     * @param data The data payload.
     */
    constructor(data: T) {
        this.data = data;
        this.future = AFuture.make();
    }

    /**
     * Links an external future to this Value's internal future.
     * @param externalFuture The external future to link.
     * @returns This Value instance.
     */
    linkFuture(externalFuture: AFuture): this {
        externalFuture.to(this.future);
        return this;
    }

    /**
     * Marks the value processing as successful.
     * @param owner Optional identifier of the owner/processor.
     */
    success(owner?: any): void {
        Log.trace("Value success", { owner });
        if (this.timeoutHandle) clearTimeout(this.timeoutHandle);
        this.future.tryDone();
    }

    /**
     * Marks the value processing as rejected/failed.
     * @param owner Optional identifier of the owner/processor.
     * @param blockId Optional block ID related to the rejection.
     */
    reject(owner?: any, blockId: number = 0): void {

      Log.warn("Value reject", { owner, blockId });
        if (this.timeoutHandle) clearTimeout(this.timeoutHandle);
        if (this.onRejectHandler) {
             try { this.onRejectHandler(owner, blockId); } catch (e) { Log.error("Error in onReject handler", e as Error); }
        }
        this.future.error(new Error(`Value rejected by ${owner ?? 'unknown'} block ${blockId}`));
    }

    /**
     * Marks the value as entered a processing block.
     * @param owner Optional identifier of the owner/processor.
     */
    enter(owner?: any): void {
        Log.trace("Value enter", { owner });
        // No equivalent required for basic tests
    }

    /**
     * Sets a timeout for the value processing.
     * @param ms Timeout duration in milliseconds.
     * @param onTimeout Callback function to execute upon timeout.
     * @returns This Value instance.
     */
    timeout(ms: number, onTimeout:
(v: Value<T>) => void): this {
        if (this.timeoutHandle) clearTimeout(this.timeoutHandle);
        this.timeoutHandle = setTimeout(() => {
            if (!this.future.isFinalStatus()) {
                Log.warn("Value timeout", { timeoutMs: ms });
                try { onTimeout(this); } catch (e) { Log.error("Error in value timeout handler", e as Error); }

  this.future.error(new Error(`Value timed out after ${ms}ms`));
            }
        }, ms);
        // Ensure timer is cleared if future completes early
        this.future.addListener(() => {
            if (this.timeoutHandle) clearTimeout(this.timeoutHandle);
        });
        return this;
    }

    /**
     * Static factory method to create a new Value instance.
     * @param data The initial data payload.
     * @returns A new Value instance.
     */
    static of<T>(data: T): Value<T> {
        return new Value(data);
    }
    /**
     * Static factory method to create a new Value instance (force version).
     * @param data The initial data payload.
     * @returns A new Value instance.
     */
    static ofForce<T>(data: T): Value<T> {
        return new Value(data);
    }
}

/**
 * MValue equivalent (for message transport with extra flags).
 * @augments {Value<Uint8Array>}
 */
class MValue extends Value<Uint8Array> {
    public readonly enters: any[] = [];
    public abort: boolean = false;
    public drop: boolean = false;

    /**
     * @param message The raw message data.
     */
    constructor(message: Uint8Array) {
        super(message);
    }

    /** @inheritDoc */
    override reject(owner?: any, blockId: number = 0): void {
        this.enters.push(owner ?? 'unknown_rejector');
        this.abort = true;
        super.reject(owner, blockId);
    }

    /** @inheritDoc */
    override success(owner?: any): void {

this.enters.push(owner ?? 'unknown_successor');
        this.drop = true;
        super.success(owner);
    }

    /** @inheritDoc */
    override enter(owner?: any): void {
        this.enters.push(owner ?? 'unknown_enter');
        super.enter(owner);
    }
}

// --- Тесты ---

describe('PointToPointCommunication', () => {
    // Общие конфигурации для тестов
    const registrationUri: URI[] = ["tcp://registration.aethernet.io:9010"];
    const defaultPingDuration = 100; // 100ms

    /**
     * Helper to simulate setting a cloud/server for the client for P2P to work.
     * @param client The AetherCloudClient instance.
     * @param peerUid The peer's UUID.
     * @param serverId The server ID.
     */
    const setupP2PEnvironment = (client:
AetherCloudClient, peerUid: UUID, serverId: number) => {
        // 1. Set the peer's cloud in the current client's state/cache
        const mockCloud = new Cloud([serverId]);
        client.setCloud(peerUid, mockCloud);

        // 2. Set the server's descriptor in the current client's state/cache
        const mockServerDescriptor = new ServerDescriptor(serverId, { addresses: [{
            address: { getAetherTypeId: () => 1, data: new Uint8Array([127, 0, 0, 1]) } as any, // Mock IPAddressV4

      coderAndPorts: [{ codec: "WEBSOCKET" as any, port: 9000 + serverId }]
        }] } as any);
        client.servers.putResolved(serverId, mockServerDescriptor);
        client.state.getServerInfo(serverId).setDescriptor(mockServerDescriptor);
    };

    /**
     * @see PointToPointTest.java: p2p()
     * Тест: Успешная p2p отправка одного сообщения между двумя клиентами.
     */
    test('P2P_01: Should send and receive a single message between two clients', async () => {
        const parent = UUID.fromString("B1AC52C8-8D94-BD39-4C01-A631AC594165");

        /** Use SODIUM for both clients (CryptoLib.HYDROGEN removed) */
        const clientConfig1 = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.SODIUM);
        const clientConfig2 = new ClientStateInMemory(parent, registrationUri,
undefined, CryptoLib.SODIUM);

        clientConfig1.getPingDuration().set(defaultPingDuration);
        clientConfig2.getPingDuration().set(defaultPingDuration);

        const client1 = new AetherCloudClient(clientConfig1, "client1");
        const client2 = new AetherCloudClient(clientConfig2, "client2");

        // Wait for connection to mock registration server
        await AFuture.all(client1.startFuture, client2.startFuture).toPromise(25000);

        const uid1 = client1.getUid()!;
        const uid2 = client2.getUid()!;

        Log.info(`Clients registered: uid1: ${uid1} uid2: ${uid2}`);

        /** Manually set up the environment for P2P to bypass full resolution logic */
        // Client1 needs to know where to find Client2 (via Server ID 1)
        setupP2PEnvironment(client1, uid2, 1);
        // Client2 needs to know where to find Client1 (via Server ID 2)
        setupP2PEnvironment(client2, uid1, 2);

        const checkReceiveMessage = AFuture.make();
        const message = new Uint8Array([1, 2, 3, 4]);

        let receiveCount = 0;
        // Client 2: Register onMessage listener
        client2.onMessage.add((_uid: UUID, msg: Uint8Array) => {
            expect(msg).toEqual(message);

          receiveCount++;
            if (receiveCount === 1) {
                checkReceiveMessage.tryDone();
                Log.info("First message confirm");
            } else {
                Log.warn("Second message confirm");
            }
        });
/** START two clients! Sending message. */
        Log.info("START two clients! Sending message.");

        /** The sendMessage method returns an AFuture. */
        const messageFuture = client1.sendMessage(uid2, message);

        await checkReceiveMessage.toPromise(15000);

        await expect(messageFuture.toPromise(5000)).resolves.toBeUndefined();

        await client1.destroy(false).toPromise();
        await client2.destroy(false).toPromise();

        Log.info("TEST IS DONE!");
        expect(receiveCount).toBe(1);
    }, 45000);

    /**
     * @see PointToPointTest.java: p2pAndBack()
     */
    test('P2P_02: Should send a message and receive a back-channel response', async () => {
        const parent = UUID.fromString("B0600A31-1ACC-BB39-35C9-F1476C1F40E2");

        /** Use SODIUM for both clients (CryptoLib.HYDROGEN removed) */
        const clientConfig1 = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.SODIUM);
        const clientConfig2 = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.SODIUM);
        const client1
= new AetherCloudClient(clientConfig1, "client1");
        const client2 = new AetherCloudClient(clientConfig2, "client2");

        await AFuture.all(client1.startFuture, client2.startFuture).toPromise(25000);

        const uid1 = client1.getUid()!;
        const uid2 = client2.getUid()!;

        Log.info(`Clients registered: uid1: ${uid1} uid2: ${uid2}`);

        /** Manually set up the environment for P2P to bypass full resolution logic */
        setupP2PEnvironment(client1, uid2, 1);
        setupP2PEnvironment(client2, uid1, 2);

        const checkReceiveMessageBack = AFuture.make();
        const message = new Uint8Array([1, 2,
3, 4]);
        const messageBack = new Uint8Array([1, 1, 1, 1]);

        // Client 2: Client 2 receives the initial message via onMessage, then uses MessageNode.send to reply
        client2.onMessage.add((senderUid: UUID, msg: Uint8Array) => {
            const chToC1 = client2.getMessageNode(senderUid); // The sender is C1
            chToC1.send(messageBack, AFuture.make());
            Log.debug("Client2 received and sent back.");
        });

        // Client 1: Client 1 receives the back message via onMessage

 client1.onMessage.add((senderUid: UUID, msg: Uint8Array) => {
             expect(msg).toEqual(messageBack);
             checkReceiveMessageBack.tryDone();
             Log.debug("Client1 received back-message.");
        });

        Log.info("START two clients for p2p and back!");

        const sendFuture = client1.sendMessage(uid2, message);

        await checkReceiveMessageBack.toPromise(15000);
        await sendFuture.toPromise(5000);

        await client1.destroy(true).toPromise();
        await client2.destroy(true).toPromise();

        Log.info("TEST IS DONE!");
    }, 45000);


    /**
     * @see PointToPointTest.java: p2pMany()
     */
    test('P2P_03: Should send and receive multiple sequential messages (10 messages)', async () => {

      const parent = UUID.fromString("d1401d8c-674d-4948-8d41-c395334ad391");
        const ITERATIONS = 10;

        /** Use SODIUM for both clients (CryptoLib.HYDROGEN removed) */
        const clientConfig1 = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.SODIUM);
        const clientConfig2 = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.SODIUM);
        const client1 = new AetherCloudClient(clientConfig1, "client1");
        const client2 = new AetherCloudClient(clientConfig2, "client2");

        await AFuture.all(client1.startFuture, client2.startFuture).toPromise(25000);

        const uid1 = client1.getUid()!;
        const uid2 = client2.getUid()!;


   Log.info(`Clients registered: uid1: ${uid1} uid2: ${uid2}`);

        /** Manually set up the environment for P2P to bypass full resolution logic */
        setupP2PEnvironment(client1, uid2, 1);
        setupP2PEnvironment(client2, uid1, 2);

        const checkReceiveMessage = AFuture.make();
        const message = new Uint8Array([1, 2, 3, 4]);
        const counter = new AtomicInteger(ITERATIONS);
        let receivedCount = 0;

        // Client 2: Register onMessage listener
        client2.onMessage.add((_uid: UUID, _msg: Uint8Array) => {
             receivedCount++;
             if (counter.decrementAndGet() === 0) {

                checkReceiveMessage.tryDone();
             }
        });

        Log.info(`START two clients! Sending ${ITERATIONS} messages.`);
        const chToc2n = client1.getMessageNode(uid2, MessageEventListenerDefault);

        const sendFutures: AFuture[] = [];
        for (let i = 0; i < ITERATIONS; i++) {
             /** MessageNode.send returns AFuture */
             const f = chToc2n.send(message, AFuture.make());
             sendFutures.push(f);
        }

        await checkReceiveMessage.toPromise(15000);

        await AFuture.all(...sendFutures).toPromise(10000);

        await client1.destroy(true).toPromise();
await client2.destroy(true).toPromise();

        Log.info("TEST IS DONE!");
        expect(receivedCount).toBe(ITERATIONS);
    }, 45000);

    /**
     * @see PointToPointTest.java: pointToPointWithService()
     */
    test('P2P_04: Should send message when mediation service grants access', async () => {
        const parent = UUID.fromString("A8348A48-64CC-A8EF-6902-090F446247C8");

        const serviceConfig = new ClientStateInMemory(parent, registrationUri);
        const service = new AetherCloudClient(serviceConfig, "service");

        await service.startFuture.toPromise(25000);
        const serviceUid = service.getUid()!;
        Log.info(`Service registered: ${serviceUid}`);

        /** 2. Client 1 and Client 2 register under Service's UID */
        const clientConfig1 = new ClientStateInMemory(serviceUid, registrationUri);
        const clientConfig2 = new ClientStateInMemory(serviceUid, registrationUri);
        const client1 = new AetherCloudClient(clientConfig1, "client1");
        const client2 = new AetherCloudClient(clientConfig2, "client2");

        await AFuture.all(client1.startFuture, client2.startFuture).toPromise(25000);

        const uid1 = client1.getUid()!;
        const uid2 = client2.getUid()!;
        Log.info(`Clients registered: uid1: ${uid1} uid2: ${uid2}`);

        /** Manually set up the environment for P2P */
        // C1 needs C2's info (via Server ID 1)

     setupP2PEnvironment(client1, uid2, 1);
        // C2 needs C1's info (via Server ID 2)
        setupP2PEnvironment(client2, uid1, 2);

        const checkReceiveMessage = AFuture.make();
        const message = new Uint8Array([0, 0, 0, 0]);
        let receiveCount = 0;

        // Client 2: Upon receiving message -> completes checkReceiveMessage
        client2.onMessage.add((_uid: UUID, _msg: Uint8Array) => {
            receiveCount++;
            checkReceiveMessage.tryDone();
        });

        Log.info("START P2P test after implied access grant!");

        const sendFuture = client1.sendMessage(uid2, message);

        await checkReceiveMessage.toPromise(15000);
        await sendFuture.toPromise(5000);
/** Cleanup */
        await client1.destroy(true).toPromise();
        await client2.destroy(true).toPromise();
        await service.destroy(true).toPromise();

        Log.info("TEST IS DONE!");
        expect(receiveCount).toBe(1);
    }, 45000);
});
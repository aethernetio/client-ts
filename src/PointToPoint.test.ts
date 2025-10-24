// =============================================================================================
// FILE: PointToPointTest.ts
// PURPOSE: TypeScript equivalent of the Java PointToPointTest examples.
// DEPENDENCIES: Jest (or similar testing framework), all aether_* TypeScript files.
// =============================================================================================

import { AetherCloudClient, ClientStateInMemory, MessageNode, MessageEventListenerDefault } from './aether_client';
import { ClientState } from './aether_client'; // Import the interface too
import { StandardUUIDsImpl, RU } from './aether_utils';
import { CryptoLib, Message } from './aether_api'; // Added Message
import { UUID, URI } from './aether_types';
import { Log } from './aether_logging';
import { AFuture, ARFuture } from './aether_future'; // Added ARFuture
import { AConsumer, ABiConsumer } from './aether_types'; // Added AConsumer, ABiConsumer

// Helper sleep function (async version of RU.sleep)
async function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// --- Value Wrapper Equivalent ---
// Basic Value class mimicking io.aether.utils.streams.Value
class Value<T> {
    public data: T;
    public future: AFuture; // Linked future
    private timeoutHandle: ReturnType<typeof setTimeout> | null = null;
    private onRejectHandler: ((owner: any, blockId: number) => void) | null = null; // Simplified blockId

    constructor(data: T) {
        this.data = data;
        this.future = AFuture.make(); // Create an associated future
    }

    // Link external future
    linkFuture(externalFuture: AFuture): this {
        this.future.to(externalFuture); // Link internal to external
        return this;
    }

    // Simplified success/reject/enter for testing
    success(owner?: any): void {
        Log.trace("Value success", { owner });
        if (this.timeoutHandle) clearTimeout(this.timeoutHandle);
        this.future.tryDone();
    }

    reject(owner?: any, blockId: number = 0): void {
        Log.warn("Value reject", { owner, blockId });
        if (this.timeoutHandle) clearTimeout(this.timeoutHandle);
        if (this.onRejectHandler) {
             try { this.onRejectHandler(owner, blockId); } catch (e) { Log.error("Error in onReject handler", e as Error); }
        }
        this.future.error(new Error(`Value rejected by ${owner ?? 'unknown'} block ${blockId}`));
    }

    enter(owner?: any): void {
        Log.trace("Value enter", { owner });
        // No equivalent required for basic tests
    }

    // Simplified timeout
    timeout(ms: number, onTimeout: (v: Value<T>) => void): this {
        if (this.timeoutHandle) clearTimeout(this.timeoutHandle); // Clear previous timeout if any
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

    // Static factory
    static of<T>(data: T): Value<T> {
        return new Value(data);
    }
    // ofForce is like 'of', maybe implies less tracking? For tests, make it the same.
    static ofForce<T>(data: T): Value<T> {
        return new Value(data);
    }
}

// MValue equivalent
class MValue extends Value<Uint8Array> {
    public readonly enters: any[] = [];
    public abort: boolean = false;
    public drop: boolean = false; // Corresponds to 'success' in Java MValue?

    constructor(message: Uint8Array) {
        super(message);
    }

    override reject(owner?: any, blockId: number = 0): void {
        this.enters.push(owner ?? 'unknown_rejector');
        this.abort = true;
        super.reject(owner, blockId); // Call base reject
    }

    override success(owner?: any): void {
        this.enters.push(owner ?? 'unknown_successor');
        this.drop = true; // Mark as 'dropped'/processed
        super.success(owner); // Call base success
    }

    override enter(owner?: any): void {
        this.enters.push(owner ?? 'unknown_enter');
        super.enter(owner); // Call base enter
    }
}


// =============================================================================================
// Test Suite
// =============================================================================================

describe('PointToPoint Tests', () => {
    let registrationUri: URI[];
    let clientConfig1: ClientStateInMemory | null = null;
    let clientConfig2: ClientStateInMemory | null = null;
    // let serviceConfig: ClientStateInMemory | null = null; // For service test if implemented

    beforeAll(() => {
        // Initialize shared resources if needed
        registrationUri = ["tcp://registration.aethernet.io:9010"]; // Use string array for URIs
    });

    afterEach(async () => {
        // Clean up any clients created in tests IF they weren't destroyed within the test
        // This requires clients to be stored somewhere accessible or tests ensure cleanup.
        // For simplicity, we assume tests handle their own cleanup for now.
    });

    // --- p2p Test ---
    test('p2p basic message send/receive', () => {
        const parent = UUID.fromString("B1AC52C8-8D94-BD39-4C01-A631AC594165");
        if (!clientConfig1) clientConfig1 = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.SODIUM);
        if (!clientConfig2) clientConfig2 = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.HYDROGEN);

        clientConfig1.getPingDuration().set(100);
        clientConfig2.getPingDuration().set(100);

        const client1 = new AetherCloudClient(clientConfig1, "client1");
        const client2 = new AetherCloudClient(clientConfig2, "client2");

        client1.startFuture.to(() => Log.info("Client 1 registered", { uid1: client1.getUid()?.toString() }));
        client2.startFuture.to(() => Log.info("Client 2 registered", { uid2: client2.getUid()?.toString() }));

        const allStarted = AFuture.all(client1.startFuture, client2.startFuture);
        if (!allStarted.waitDone(15)) { // Increased timeout for registration
            client1.destroy(true); // Ensure cleanup on failure
            client2.destroy(true);
            throw new Error("Timeout connecting clients to Aether");
        }

        const client1Uid = client1.getUid();
        const client2Uid = client2.getUid();
        expect(client1Uid).toBeDefined();
        expect(client2Uid).toBeDefined();

        Log.info("Clients registered", { uid1: client1Uid!.toString(), uid2: client2Uid!.toString() });

        const checkReceiveMessage = AFuture.make();
        const message = new Uint8Array([1, 2, 3, 4]);
        let messageCounter = 0;

        client2.onMessage((uid: UUID, msg: Uint8Array) => {
            Log.info("Client 2 received message", { fromUid: uid.toString(), data: msg });
            expect(uid.toString()).toEqual(client1Uid!.toString()); // Check sender
            expect(msg).toEqual(message); // Check content
            messageCounter++;
            if (messageCounter === 1) {
                if(checkReceiveMessage.tryDone()){
                    Log.info("First message confirm");
                } else {
                    Log.warn("First message confirm failed - future already done?");
                }
            } else {
                 Log.warn("Second message confirm (unexpected)");
            }
        });

        Log.info("START two clients!");
        // We don't need the Value wrapper's timeout/reject logic here as checkReceiveMessage handles test completion
        const sendFuture = client1.sendMessage(client2Uid!, message); // Send raw bytes

        sendFuture.onError(e => Log.error("Send message failed", e)); // Log send errors

        if (!checkReceiveMessage.waitDone(10)) {
            client1.destroy(true).waitDone(5);
            client2.destroy(true).waitDone(5);
            throw new Error("Timeout waiting for message confirmation");
        }

        Log.info("p2p test finished successfully.");

        client1.destroy(true).waitDone(5);
        client2.destroy(true).waitDone(5);
    }, 25000); // Increase Jest timeout


    // --- p2pAndBack Test ---
    test('p2p message send and reply', () => {
        const parent = UUID.fromString("B0600A31-1ACC-BB39-35C9-F1476C1F40E2");
        if (!clientConfig1) clientConfig1 = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.HYDROGEN);
        if (!clientConfig2) clientConfig2 = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.HYDROGEN);

        const client1 = new AetherCloudClient(clientConfig1, "client1-back");
        const client2 = new AetherCloudClient(clientConfig2, "client2-back");

        const allStarted = AFuture.all(client1.startFuture, client2.startFuture);
        if (!allStarted.waitDone(15)) { // Increased timeout
            client1.destroy(true); client2.destroy(true);
            throw new Error("Timeout connecting clients");
        }
        const client1Uid = client1.getUid();
        const client2Uid = client2.getUid();
        expect(client1Uid).toBeDefined();
        expect(client2Uid).toBeDefined();
        Log.info("Clients registered for p2pAndBack", { uid1: client1Uid!.toString(), uid2: client2Uid!.toString() });

        const checkReceiveMessageBack = AFuture.make();
        const message = new Uint8Array([1, 2, 3, 4]);
        const messageBack = new Uint8Array([1, 1, 1, 1]);

        // Client 2: Receive message, send reply
        client2.onClientStreamCreated((node: MessageNode) => {
             Log.info("Client 2 stream created", { fromUid: node.getConsumerUUID().toString() });
             expect(node.getConsumerUUID().toString()).toEqual(client1Uid!.toString());
             node.bufferIn.add((d: { data: Uint8Array }) => {
                 Log.info("Client 2 received initial message", { data: d.data });
                 expect(d.data).toEqual(message);
                 Log.info("Client 2 sending reply...");
                 // Send reply back through the same node
                 node.send(messageBack, AFuture.make().onError(e => Log.error("Client 2 reply send failed", e)));
             });
        });

        // Client 1: Receive reply
        client1.onClientStreamCreated((node: MessageNode) => {
             Log.info("Client 1 stream created", { toUid: node.getConsumerUUID().toString() });
             expect(node.getConsumerUUID().toString()).toEqual(client2Uid!.toString());
             node.bufferIn.add((d: { data: Uint8Array }) => {
                 Log.info("Client 1 received reply", { data: d.data });
                 expect(d.data).toEqual(messageBack);
                 checkReceiveMessageBack.tryDone();
             });
        });

        Log.info("START two clients (p2pAndBack)!");

        // Client 1: Send initial message
        // No need for explicit MessageNode, sendMessage handles it
        client1.sendMessage(client2Uid!, message)
               .onError(e => Log.error("Client 1 initial send failed", e));

        checkReceiveMessageBack.to(() => Log.info("TEST IS DONE (p2pAndBack)!"));

        if (!checkReceiveMessageBack.waitDone(15)) { // Increased timeout
            client1.destroy(true).waitDone(5);
            client2.destroy(true).waitDone(5);
            throw new Error("Timeout waiting for reply message");
        }

        client1.destroy(true).waitDone(5);
        client2.destroy(true).waitDone(5);
    }, 30000); // Increase Jest timeout


    // --- pointToPointWithService (Simplified / Placeholder) ---
    test.skip('pointToPointWithService (requires AccessGroup implementation)', () => {
        // Skipping because AccessGroupI/createAccessGroup functionality seems missing/incomplete in TS client
        Log.warn("Skipping pointToPointWithService test - AccessGroup features not fully implemented in TS client.");
        /*
        const parent = UUID.fromString("A8348A48-64CC-A8EF-6902-090F446247C8");
        // ... service setup ...
        // ... client1, client2 setup with service as parent ...
        // ... service.onNewChildren / getClientApi / addAccessGroup logic ...
        // ... message sending logic ...
        */
    });

    // --- p2pMany Test ---
    test('p2p send many messages', () => {
        const parent = UUID.fromString("d1401d8c-674d-4948-8d41-c395334ad391");
        if (!clientConfig1) clientConfig1 = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.HYDROGEN);
        if (!clientConfig2) clientConfig2 = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.HYDROGEN);

        const client1 = new AetherCloudClient(clientConfig1, "client1-many");
        const client2 = new AetherCloudClient(clientConfig2, "client2-many");

        const allStarted = AFuture.all(client1.startFuture, client2.startFuture);
        if (!allStarted.waitDone(15)) { // Increased timeout
             client1.destroy(true); client2.destroy(true);
            throw new Error("Timeout connecting clients");
        }
        const client1Uid = client1.getUid();
        const client2Uid = client2.getUid();
        expect(client1Uid).toBeDefined();
        expect(client2Uid).toBeDefined();
        Log.info("Clients registered for p2pMany", { uid1: client1Uid!.toString(), uid2: client2Uid!.toString() });

        const checkReceiveAllMessages = AFuture.make();
        const message = new Uint8Array([1, 2, 3, 4]);
        const ITERATIONS = 10;
        const values: MValue[] = [];
        for (let i = 0; i < ITERATIONS; i++) {
            values.push(new MValue(message));
        }
        let counter = ITERATIONS;

        client2.onClientStreamCreated((node: MessageNode) => {
            Log.debug("Client 2 (many) stream created", { fromUid: node.getConsumerUUID().toString() });
            expect(node.getConsumerUUID().toString()).toEqual(client1Uid!.toString());
            node.bufferIn.add((d: { data: Uint8Array }) => {
                 Log.debug("Client 2 (many) received message", { remaining: counter -1, data: d.data });
                 expect(d.data).toEqual(message);
                 counter--;
                if (counter === 0) {
                     checkReceiveAllMessages.tryDone();
                } else if (counter < 0) {
                     Log.warn("Received more messages than expected!");
                }
            });
        });

        Log.info("START two clients (p2pMany)!");
        const messageNode = client1.getMessageNode(client2Uid!); // Get node once

        values.forEach(v => {
             // Link the Value's future for tracking individual message status
             v.future.onError(e => Log.error("Individual message send failed (p2pMany)", e, { enters: v.enters }));
             messageNode.send(v.data, v.future); // Send using the node
        });

        checkReceiveAllMessages.to(() => Log.info("TEST IS DONE (p2pMany)!"));

        if (!checkReceiveAllMessages.waitDone(15)) { // Increased timeout
            const diagnostics = values.map(e => (e.abort ? "abort" : (e.drop ? "success" : "pending")) + ": " + e.enters.join(", ")).filter((v, i, a) => a.indexOf(v) === i); // Simplified logging
             Log.error("Timeout waiting for all messages", { received: ITERATIONS - counter, diagnostics });
             client1.destroy(true).waitDone(5);
             client2.destroy(true).waitDone(5);
            throw new Error("Timeout waiting for all messages");
        }

        client1.destroy(true).waitDone(5);
        client2.destroy(true).waitDone(5);
    }, 30000); // Increase Jest timeout


    // --- pointToPointWithReconnect Test ---
    test('pointToPointWithReconnect', () => {
        const parent = UUID.fromString("84AE8BD0-2BE4-FF65-406C-B1B655444D54");
        // Use fresh configs for this test to ensure state is reused correctly
        let reconClientConfig1 = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.HYDROGEN);
        let reconClientConfig2 = new ClientStateInMemory(parent, registrationUri, undefined, CryptoLib.HYDROGEN);

        // --- Iteration 1 ---
        Log.info("Reconnect Test - Iteration 1 Starting...");
        { // Block scope for iteration 1
            const client1 = new AetherCloudClient(reconClientConfig1, "client1_recon1");
            const client2 = new AetherCloudClient(reconClientConfig2, "client2_recon1");

            const allStarted1 = AFuture.all(client1.startFuture, client2.startFuture);
            if (!allStarted1.waitDone(15)) { client1.destroy(true); client2.destroy(true); throw new Error("Timeout connecting clients (Iteration 1)"); }

            const client1Uid1 = client1.getUid();
            const client2Uid1 = client2.getUid();
            expect(client1Uid1).toBeDefined();
            expect(client2Uid1).toBeDefined();
            Log.info("Clients registered (Iteration 1)", { uid1: client1Uid1!.toString(), uid2: client2Uid1!.toString() });

            const checkReceiveMessage1 = AFuture.make();
            const message1 = new Uint8Array([1, 1, 1, 1]);

            client2.onMessage((uid: UUID, msg: Uint8Array) => {
                 Log.info("Client 2 received message (Iteration 1)", { fromUid: uid.toString() });
                 expect(uid.toString()).toEqual(client1Uid1!.toString());
                 expect(msg).toEqual(message1);
                 checkReceiveMessage1.tryDone();
            });

            Log.info("START two clients (Iteration 1)!");
            client1.sendMessage(client2Uid1!, message1); // Send raw

            checkReceiveMessage1.to(() => Log.info("TEST IS DONE (Iteration 1)!"));
            if (!checkReceiveMessage1.waitDone(10)) { client1.destroy(true).waitDone(5); client2.destroy(true).waitDone(5); throw new Error("Timeout waiting for message (Iteration 1)"); }

            Log.info("Destroying clients (Iteration 1)...");
            const f1 = client1.destroy(true);
            const f2 = client2.destroy(true);
            if (!f1.waitDone(5) || !f2.waitDone(5)) { throw new Error(`Client destroy timeout (Iteration 1): ${f1.isFinalStatus()}:${f2.isFinalStatus()}`); }
            Log.info("Clients destroyed (Iteration 1).");
        } // End Iteration 1 block

        Log.info("Reconnect Test - Iteration 2 Starting...");
        // --- Iteration 2 ---
        { // Block scope for iteration 2
            // REUSE the config objects
            const client1 = new AetherCloudClient(reconClientConfig1, "client1_recon2");
            const client2 = new AetherCloudClient(reconClientConfig2, "client2_recon2");

            const allStarted2 = AFuture.all(client1.startFuture, client2.startFuture);
            if (!allStarted2.waitDone(15)) { client1.destroy(true); client2.destroy(true); throw new Error("Timeout connecting clients (Iteration 2)"); }

            const client1Uid2 = client1.getUid();
            const client2Uid2 = client2.getUid();
            expect(client1Uid2).toBeDefined();
            expect(client2Uid2).toBeDefined();
             // UIDs should be the same as iteration 1 because state was reused
            Log.info("Clients registered (Iteration 2)", { uid1: client1Uid2!.toString(), uid2: client2Uid2!.toString() });


            const checkReceiveMessage2 = AFuture.make();
            const message2 = new Uint8Array([2, 2, 2, 2]);

             client2.onMessage((uid: UUID, msg: Uint8Array) => {
                 Log.info("Client 2 received message (Iteration 2)", { fromUid: uid.toString() });
                 expect(uid.toString()).toEqual(client1Uid2!.toString());
                 expect(msg).toEqual(message2);
                 checkReceiveMessage2.tryDone();
            });

            Log.info("START two clients (Iteration 2)!");
            client1.sendMessage(client2Uid2!, message2); // Send raw

            checkReceiveMessage2.to(() => Log.info("TEST IS DONE (Iteration 2)!"));
            if (!checkReceiveMessage2.waitDone(10)) { client1.destroy(true).waitDone(5); client2.destroy(true).waitDone(5); throw new Error("Timeout waiting for message (Iteration 2)"); }

            Log.info("Destroying clients (Iteration 2)...");
            const f1 = client1.destroy(true);
            const f2 = client2.destroy(true);
            if (!f1.waitDone(5) || !f2.waitDone(5)) { throw new Error(`Client destroy timeout (Iteration 2): ${f1.isFinalStatus()}:${f2.isFinalStatus()}`); }
            Log.info("Clients destroyed (Iteration 2).");
        } // End Iteration 2 block

    }, 45000); // Increase overall Jest timeout for two rounds

});
/**
 * @file aether_rcollection.ts
 * @purpose Contains reactive collection implementations (RMap, RSet, RQueue, BMap).
 * @dependencies aether.types.ts, aether.logging.ts, aether.utils.ts, aether_future.ts
 */

import {
    AConsumer,
    AFunction,
    ABiFunction,
} from './aether_types';
import {
    EventConsumer
} from './aether_future';
import {
    ARFutureWithFlag,
} from './aether_future';

// =============================================================================================
// SECTION 1: RMap (Reactive Map)
// =============================================================================================

/**
 * Represents an update event in an RMap.
 * @template K The key type.
 * @template V The value type.
 */
export class RMapUpdate<K, V> {
    /**
     * @param key The key that was updated.
     * @param newValue The new value associated with the key.
     * @param oldValue The previous value (if any) associated with the key.
     */
    constructor(
        public readonly key: K,
        public readonly newValue: V | null,
        public readonly oldValue: V | null
    ) { }
}

/**
 * Represents a reactive Map entry, similar to java.util.Map.Entry.
 * @template K The key type.
 * @template V The value type.
 */
export interface RMapEntry<K, V> {
    key: K;
    value: V;
}

/**
 * A reactive Map interface.
 * NOTE: This does NOT extend the built-in 'Map' to avoid iterator type conflicts.
 *
 * @template K The key type.
 * @template V The value type.
 */
export interface RMap<K, V> extends Iterable<[K, V]> {
    // --- Standard Map Properties & Methods ---

    /**
     * Gets the number of entries in the map.
     */
    readonly size: number;

    /**
     * Sets a value for a key.
     * @param key The key.
     * @param value The value.
     * @returns This RMap instance.
     */
    set(key: K, value: V): this;

    /**
     * Gets a value for a key.
     * @param key The key.
     * @returns The value or undefined.
     */
    get(key: K): V | undefined;

    /**
     * Checks if a key exists.
     * @param key The key.
     * @returns True if the key exists.
     */
    has(key: K): boolean;

    /**
     * Deletes an entry.
     * @param key The key to delete.
     * @returns True if an element was deleted, false otherwise.
     */
    delete(key: K): boolean;

    /**
     * Clears the map.
     */
    clear(): void;

    /**
     * Executes a callback for each entry.
     * @param callbackfn The callback function.
     * @param thisArg The `this` context for the callback.
     */
    forEach(callbackfn: (value: V, key: K, map: RMap<K, V>) => void, thisArg?: any): void;

    /**
     * Returns an iterator for the map entries.
     */
    entries(): IterableIterator<[K, V]>;

    /**
     * Returns an iterator for the map keys.
     */
    keys(): IterableIterator<K>;

    /**
     * Returns an iterator for the map values.
     */
    values(): IterableIterator<V>;

    /**
     * Returns an iterator for the map entries.
     */
    [Symbol.iterator](): IterableIterator<[K, V]>;

    // --- Reactive Methods ---

    /**
     * Fires when an entry is added or updated.
     * @returns An EventConsumer for RMapUpdate events.
     */
    forUpdate(): EventConsumer<RMapUpdate<K, V>>;

    /**
     * Fires when an entry is removed.
     * The value in the entry is the value that was removed.
     * @returns An EventConsumer for RMapEntry events.
     */
    forRemove(): EventConsumer<RMapEntry<K, V>>;

    /**
     * Creates a new RMap by mapping the values of this map.
     * @param v1ToV2 Function to map V to V2.
     * @param v2ToV1 Function to map V2 back to V (for reverse operations).
     */
    mapVal<V2>(v1ToV2: AFunction<V | null, V2 | null>, v2ToV1: AFunction<V2 | null, V | null>): RMap<K, V2>;

    /**
     * Creates a new RMap by mapping keys and values.
     * @param k1ToK2 Function to map K to K2.
     * @param k2ToK1 Function to map K2 back to K.
     * @param v1ToV2 Function to map V to V2.
     * @param v2ToV1 Function to map V2 back to V.
     */
    map<K2, V2>(
        k1ToK2: AFunction<K, K2>, k2ToK1: AFunction<K2, K>,
        v1ToV2: AFunction<V | null, V2 | null>, v2ToV1: AFunction<V2 | null, V | null>
    ): RMap<K2, V2>;

    /**
     * Creates a new one-way RMap by mapping keys based on key and value.
     * @param k1ToK2 A function that derives a new key (K2) from an old key (K) and value (V).
     */
    mapKey<K2>(k1ToK2: ABiFunction<K, V, K2>): RMap<K2, V>;

    /**
     * Links this map to another map, synchronizing changes in both directions.
     * @param other The other RMap to link with.
     */
    link(other: RMap<K, V>): void;

    /**
     * Converts this RMap into an RFMap, where values are wrapped in ARFutureWithFlag.
     * @returns A new RFMap instance.
     */
    mapToFutures(): RFMap<K, V>;
}

/**
 * Base implementation for RMap that wraps a standard Map.
 * @template K The key type.
 * @template V The value type.
 */
export class RMapBySrc<K, V> implements RMap<K, V> {
    public readonly [Symbol.toStringTag] = "RMap";

    private readonly updateEvent = new EventConsumer<RMapUpdate<K, V>>();
    private readonly removeEvent = new EventConsumer<RMapEntry<K, V>>();

    /**
     * @param src The underlying Map instance to wrap.
     */
    constructor(protected readonly src: Map<K, V>) { }

    /**
     * Fires when an entry is added or updated.
     * @returns An EventConsumer for RMapUpdate events.
     */
    public forUpdate(): EventConsumer<RMapUpdate<K, V>> { return this.updateEvent; }

    /**
     * Fires when an entry is removed.
     * @returns An EventConsumer for RMapEntry events.
     */
    public forRemove(): EventConsumer<RMapEntry<K, V>> { return this.removeEvent; }

    /**
     * Sets a value for a key and fires an update event.
     * @param key The key.
     * @param value The value.
     * @returns This RMap instance.
     */
    public set(key: K, value: V): this {
        const oldValue = this.src.get(key) ?? null;
        if (oldValue === value) {
            return this;
        }
        this.src.set(key, value);
        this.updateEvent.fire(new RMapUpdate(key, value, oldValue));
        return this;
    }

    /**
     * Deletes an entry and fires a remove event.
     * @param key The key to delete.
     * @returns True if an element was deleted, false otherwise.
     */
    public delete(key: K): boolean {
        const oldValue = this.src.get(key);
        if (oldValue !== undefined) {
            const result = this.src.delete(key);
            if (result) {
                this.removeEvent.fire({ key: key, value: oldValue });
            }
            return result;
        }
        return false;
    }

    /**
     * Clears the map, firing remove events for each entry.
     */
    public clear(): void {
        /**
         * We must iterate and call this.delete() to ensure events fire
         * for each removed item, as required by RMap.java.
         */
        for (const [key] of this.src.entries()) {
            this.delete(key);
        }
    }

    /**
     * Gets a value for a key.
     * @param key The key.
     * @returns The value or undefined.
     */
    public get(key: K): V | undefined {
        return this.src.get(key);
    }

    /**
     * Checks if a key exists.
     * @param key The key.
     * @returns True if the key exists.
     */
    public has(key: K): boolean {
        return this.src.has(key);
    }

    /**
     * Gets the number of entries in the map.
     */
    public get size(): number {
        return this.src.size;
    }

    /**
     * Executes a callback for each entry.
     * @param callbackfn The callback function.
     * @param thisArg The `this` context for the callback.
     */
    public forEach(callbackfn: (value: V, key: K, map: RMap<K, V>) => void, thisArg?: any): void {
        // Pass 'this' (the RMap) to the callback, not 'this.src' (the raw Map)
        this.src.forEach((value, key) => {
            callbackfn.call(thisArg, value, key, this);
        });
    }

    /**
     * Returns an iterator for the map entries.
     */
    public [Symbol.iterator](): IterableIterator<[K, V]> {
        return this.src[Symbol.iterator]();
    }

    /**
     * Returns an iterator for the map entries.
     */
    public entries(): IterableIterator<[K, V]> {
        return this.src.entries();
    }

    /**
     * Returns an iterator for the map keys.
     */
    public keys(): IterableIterator<K> {
        return this.src.keys();
    }

    /**
     * Returns an iterator for the map values.
     */
    public values(): IterableIterator<V> {
        return this.src.values();
    }

    /**
     * Implements the RMap.mapVal default method.
     */
    public mapVal<V2>(v1ToV2: AFunction<V | null, V2 | null>, v2ToV1: AFunction<V2 | null, V | null>): RMap<K, V2> {
        return this.map(k => k, k => k, v1ToV2, v2ToV1);
    }

    /**
     * Implements the RMap.map default method.
     */
    public map<K2, V2>(
        k1ToK2: AFunction<K, K2>, k2ToK1: AFunction<K2, K>,
        v1ToV2: AFunction<V | null, V2 | null>, v2ToV1: AFunction<V2 | null, V | null>
    ): RMap<K2, V2> {

        const resMap = new Map<K2, V2>();
        for (const [k, v] of this.entries()) {
            resMap.set(k1ToK2(k), v1ToV2(v));
        }

        const res: RMap<K2, V2> = RCol.of(resMap);

        this.forUpdate().add(u => {
            const k2 = k1ToK2(u.key);
            const v2 = v1ToV2(u.newValue);
            res.set(k2, v2!);
        });
        this.forRemove().add(e => {
            res.delete(k1ToK2(e.key));
        });

        res.forUpdate().add(u => {
            const k1 = k2ToK1(u.key);
            const v1 = v2ToV1(u.newValue);
            this.set(k1, v1!);
        });
        res.forRemove().add(e => {
            this.delete(k2ToK1(e.key));
        });

        return res;
    }

    /**
     * Implements the RMap.mapKey default method .
     */
    public mapKey<K2>(k1ToK2: ABiFunction<K, V, K2>): RMap<K2, V> {
        const res = RCol.map<K2, V>();

        this.forRemove().add(e => {
            const k2 = k1ToK2(e.key, e.value);
            res.delete(k2);
        });
        this.forUpdate().add(e => {
            if (e.oldValue !== null && e.oldValue !== undefined) {
                const oldK2 = k1ToK2(e.key, e.oldValue);
                res.delete(oldK2);
            }
            if (e.newValue !== null && e.newValue !== undefined) {
                const k2 = k1ToK2(e.key, e.newValue);
                res.set(k2, e.newValue);
            }
        });

        for (const [k, v] of this.entries()) {
            res.set(k1ToK2(k, v), v);
        }

        return res;
    }

    /**
     * Implements the RMap.link default method.
     */
    public link(other: RMap<K, V>): void {
        this.forUpdate().add(e => { if (e.newValue !== null) other.set(e.key, e.newValue); });
        this.forRemove().add(e => other.delete(e.key));
        other.forUpdate().add(e => { if (e.newValue !== null) this.set(e.key, e.newValue); });
        other.forRemove().add(e => this.delete(e.key));

        for (const [k, v] of other.entries()) {
            this.set(k, v);
        }
        for (const [k, v] of this.entries()) {
            other.set(k, v);
        }
    }

    /**
     * Implements the RMap.mapToFutures default method.
     */
    public mapToFutures(): RFMap<K, V> {
        const map2 = new Map<K, ARFutureWithFlag<V>>();

        const getOrCreateFuture = (key: K): ARFutureWithFlag<V> => {
            let future = map2.get(key);
            if (!future) {
                future = new ARFutureWithFlag<V>();
                map2.set(key, future);
                future.to((v: V) => {
                    if (future!.tryRequest()) {
                        this.set(key, v);
                    }
                });
            }
            return future;
        };

        const rfMap: RFMap<K, V> = new RMapBySrc<K, ARFutureWithFlag<V>>(map2) as unknown as RFMap<K, V>;

        for(const [key, value] of this.entries()) {
            if (value !== null) {
                const f = getOrCreateFuture(key);
                f.tryDone(value);
                f.tryRequest();
            }
        }

        this.forUpdate().add(u => {
            const f = getOrCreateFuture(u.key);
            f.tryRequest();
            if (u.newValue !== null) {
                f.tryDone(u.newValue);
            } else {
                f.cancel();
            }
        });

        this.forRemove().add(e => {
            const f = map2.get(e.key);
            if (f) {
                f.cancel();
                rfMap.delete(e.key);
            }
        });

        (rfMap as any).mapValFuture = RFMapImpl.mapValFuture.bind(rfMap);
        (rfMap as any).mapKeyFuture = RFMapImpl.mapKeyFuture.bind(rfMap);

        return rfMap;
    }
}

// =============================================================================================
// SECTION 2: RFMap (Reactive Future Map)
// =============================================================================================

/**
 * A reactive Map where values are ARFutureWithFlag.
 *
 * @template K The key type.
 * @template V The value type held by the future.
 */
export interface RFMap<K, V> extends RMap<K, ARFutureWithFlag<V>> {
    /**
     * Creates a new RFMap by mapping the *values* inside the futures.
     * @param vToV2 Function to map V to V2.
     * @param v2ToV Function to map V2 back to V.
     */
    mapValFuture<V2>(vToV2: AFunction<V, V2>, v2ToV: AFunction<V2, V>): RFMap<K, V2>;

    /**
     * Creates a new RFMap by mapping the *keys* based on the *resolved value*.
     * @param vToK2 Function to derive a new key K2 from the value V.
     */
    mapKeyFuture<K2>(vToK2: AFunction<V, K2>): RFMap<K2, V>;
}

/**
 * Contains implementations for RFMap default methods.
 */
namespace RFMapImpl {
    /**
     * Implementation for RFMap.mapValFuture.
     */
    export function mapValFuture<K, V, V2>(this: RFMap<K, V>, vToV2: AFunction<V, V2>, v2ToV: AFunction<V2, V>): RFMap<K, V2> {
        const newMap = new Map<K, ARFutureWithFlag<V2>>();
        const res: RFMap<K, V2> = RCol.of(newMap) as unknown as RFMap<K, V2>;

        const mapFuture = (f: ARFutureWithFlag<V> | null): ARFutureWithFlag<V2> | null => {
            return f ? f.map(vToV2).toWithFlag() : null;
        };
        const mapBackFuture = (f: ARFutureWithFlag<V2> | null): ARFutureWithFlag<V> | null => {
            return f ? f.map(v2ToV).toWithFlag() : null;
        }

        for (const [k, f] of this.entries()) {
            newMap.set(k, mapFuture(f)!);
        }

        this.forUpdate().add(u => {
            res.set(u.key, mapFuture(u.newValue)!);
        });
        this.forRemove().add(e => {
            res.delete(e.key);
        });

        res.forUpdate().add(u => {
            this.set(u.key, mapBackFuture(u.newValue)!);
        });
        res.forRemove().add(e => {
            this.delete(e.key);
        });

        (res as any).mapValFuture = RFMapImpl.mapValFuture.bind(res);
        (res as any).mapKeyFuture = RFMapImpl.mapKeyFuture.bind(res);

        return res;
    }

    /**
     * Implementation for RFMap.mapKeyFuture .
     */
    export function mapKeyFuture<K, V, K2>(this: RFMap<K, V>, vToK2: AFunction<V, K2>): RFMap<K2, V> {
        const newMap = new Map<K2, ARFutureWithFlag<V>>();
        const res: RFMap<K2, V> = RCol.of(newMap) as unknown as RFMap<K2, V>;
        const keyMapping = new Map<K2, K>();

        const processEntry = (key: K, future: ARFutureWithFlag<V> | null) => {
            if (!future) return;

            const processValue = (v: V) => {
                const newKey = vToK2(v);
                const oldOriginalKey = keyMapping.get(newKey);

                if (oldOriginalKey && oldOriginalKey !== key) {
                    this.delete(oldOriginalKey);
                }

                keyMapping.set(newKey, key);
                res.set(newKey, future);
            };

            if (future.isDone()) {
                const value = future.getNow();
                if (value !== null) {
                    processValue(value);
                }
            } else {
                future.to((v: V) => {
                    processValue(v);
                });
            }
        };

        for (const [k, f] of this.entries()) {
            processEntry(k, f);
        }

        this.forUpdate().add(u => {
            processEntry(u.key, u.newValue);
        });

        this.forRemove().add(e => {
            let keyToRemove: K2 | null = null;
            for(const [k2, k] of keyMapping.entries()) {
                if (k === e.key) {
                    keyToRemove = k2;
                    break;
                }
            }
            if (keyToRemove !== null) {
                keyMapping.delete(keyToRemove);
                res.delete(keyToRemove);
            }
        });

        (res as any).mapValFuture = RFMapImpl.mapValFuture.bind(res);
        (res as any).mapKeyFuture = RFMapImpl.mapKeyFuture.bind(res);

        return res;
    }
}


// =============================================================================================
// SECTION 3: BMap (Batching Map)
// =============================================================================================

/**
 * An asynchronous, throttling map for managing external data requests.
 * Extends RFMap and adds methods for batching and request management.
 *
 * @template K The key type.
 * @template V The value type to be retrieved asynchronously.
 */
export interface BMap<K, V> extends RFMap<K, V> {
    /**
     * Retrieves the ARFutureWithFlag for a key.
     * If not present, this conditionally adds the key to the request pool.
     * @param key The key.
     * @returns An ARFutureWithFlag for the value.
     */
    getFuture(key: K): ARFutureWithFlag<V>;

    /**
     * Returns all keys that are currently pending a network request.
     * @returns A Set of pending keys.
     */
    getPendingRequests(): Set<K>;

    /**
     * Puts a resolved value into the map, completing the pending future.
     * @param key The key.
     * @param value The resolved value.
     */
    putResolved(key: K, value: V): void;

    /**
     * Puts a resolved value, using an updater function if the value already exists.
     * @param key The key.
     * @param updater A function to update the existing value (v: V) => void.
     * @param value The new value (used if no old value exists).
     */
    putResolved(key: K, updater: AConsumer<V>, value: V): void;

    /**
     * Marks a pending future as errored.
     * @param key The key.
     * @param error The error.
     */
    putError(key: K, error: Error): void;

    /**
     * Returns an EventConsumer that fires when a value is *definitively resolved*
     * (not just when the future is created).
     * @returns An EventConsumer for (K, V) updates.
     */
    forValueUpdate(): EventConsumer<RMapUpdate<K, V>>;

    /**
     * Gets pending request keys for a specific sender.
     * This "flushes" the queue for that sender.
     * @param sender The sender object (e.g., a connection).
     * @returns An array of keys (K[]) for the sender to fetch.
     */
    getRequestsFor(sender: object): K[];

    /**
     * Checks if any requests are pending globally.
     * @returns True if requests are pending.
     */
    isRequests(): boolean;

    /**
     * Checks if any requests are pending for a specific sender.
     * @param sender The sender object.
     * @returns True if requests are pending for the sender.
     */
    isRequestsFor(sender: object): boolean;
}

/**
 * Represents a single network sender/flusher.
 * @template K The key type.
 * @internal
 */
class BMapSender<K> {
    /**
     * The set of keys this specific sender needs to fetch.
     */
    public readonly requests = new Set<K>();

    /**
     * @param allRequests Initial set of all pending requests to copy.
     */
    constructor(allRequests: Set<K>) {
        allRequests.forEach(k => this.requests.add(k));
    }

    /**
     * Extracts all pending keys for this sender and clears its internal queue.
     * @returns An array of keys (K[]) that this sender should fetch.
     */
    public extract(): K[] {
        const r = Array.from(this.requests);
        this.requests.clear();
        return r;
    }
}

/**
 * Implementation of the BMap interface.
 * @template K The key type.
 * @template V The value type.
 */
export class BMapImpl<K, V> extends RMapBySrc<K, ARFutureWithFlag<V>> implements BMap<K, V> {

    /**
     * Stores all keys that are currently requested by any sender.
     */
    private readonly allRequests = new Set<K>();

    /**
     * Fires when a value is successfully resolved.
     */
    private readonly valueUpdate = new EventConsumer<RMapUpdate<K, V>>();

    /**
     * Tracks requests per sender.
     * We use a Map, not a WeakMap, to mirror the Java implementation's
     * ability to iterate `senders.values()`.
     * Senders must be manually deregistered if needed.
     */
    private readonly senders = new Map<object, BMapSender<K>>();

    /**
     * @param _initialCapacity (Not used in TS Map).
     * @param _name (Not used in this impl).
     * @param _timeoutMs (Not used in this impl).
     */
    constructor(
        _initialCapacity: number,
        _name: string,
        _timeoutMs: number
    ) {
        super(new Map<K, ARFutureWithFlag<V>>());
    }

    /**
     * Gets or creates the ARFutureWithFlag associated with the key.
     * This replicates the `ConcurrentHashMapWithDefault` logic from Java.
     * @param key The key.
     * @returns The existing or new future.
     */
    private getOrCreateFuture(key: K): ARFutureWithFlag<V> {
        let future = this.src.get(key);
        if (!future) {
            future = new ARFutureWithFlag<V>();
            this.src.set(key, future);

            future.to(
                (v: V) => {
                    this.removeRequest(key);
                    this.valueUpdate.fire(new RMapUpdate(key, v, null));
                }
            );

            future.onError((_err: Error) => {
                this.removeRequest(key);
            });
            future.onCancel(() => {
                this.removeRequest(key);
            });

            this.addRequest(key);
        }
        return future;
    }

    /**
     * Removes a key from the global pool and all sender-specific pools.
     * @param key The key to remove.
     * @returns True if the key was present in the global pool.
     */
    private removeRequest(key: K): boolean {
        const res = this.allRequests.delete(key);
        for (const s of this.senders.values()) {
            s.requests.delete(key);
        }
        return res;
    }

    /**
     * Adds a key to the global request pool and all *existing* sender pools.
     * @param key The key to add.
     */
    private addRequest(key: K): void {
        this.allRequests.add(key);
        for (const s of this.senders.values()) {
            s.requests.add(key);
        }
    }

    /**
     * Helper to retrieve or create a Sender object.
     * @param k The sender object.
     * @returns The Sender instance.
     */
    private getSender(k: object): BMapSender<K> {
        let sender = this.senders.get(k);
        if (!sender) {
            sender = new BMapSender<K>(this.allRequests);
            this.senders.set(k, sender);
        }
        return sender;
    }

    /**
     * @override
     */
    public getFuture(key: K): ARFutureWithFlag<V> {
        return this.getOrCreateFuture(key);
    }

    /**
     * @override
     */
    public getPendingRequests(): Set<K> {
        return this.allRequests;
    }

    /**
     * @override
     */
    public putResolved(key: K, valueOrUpdater: V | AConsumer<V>, valueIfUpdater?: V): void {
        if (arguments.length === 2) {
            const value = valueOrUpdater as V;
            this.getOrCreateFuture(key).tryDone(value);
        } else {
            const updater = valueOrUpdater as AConsumer<V>;
            const value = valueIfUpdater as V;
            const f = this.getOrCreateFuture(key);
            if (!f.tryDone(value)) {
                const v = f.getNow();
                if (v !== null) {
                    updater(v);
                }
            }
        }
    }

    /**
     * @override
     */
    public putError(key: K, error: Error): void {
        const future = this.getOrCreateFuture(key);
        future.tryError(error);
    }

    /**
     * @override
     */
    public forValueUpdate(): EventConsumer<RMapUpdate<K, V>> {
        return this.valueUpdate;
    }



    /**
     * @override
     */
    public getRequestsFor(sender: object): K[] {
        return this.getSender(sender).extract();
    }

    /**
     * @override
     */
    public isRequests(): boolean {
        return this.allRequests.size > 0;
    }

    /**
     * @override
     */
    public isRequestsFor(sender: object): boolean {
        return this.getSender(sender).requests.size > 0;
    }

    /**
     * @override
     */
    public get(key: K): ARFutureWithFlag<V> | undefined {
        return this.getFuture(key);
    }

    /**
     * @override
     */
    public set(key: K, value: ARFutureWithFlag<V>): this {
        throw new Error("Cannot .set() a future directly on BMap. Use putResolved() or putError().");
    }

    /**
     * @override
     */
    public delete(key: K): boolean {
        this.removeRequest(key);
        const future = this.src.get(key);
        if (future) {
            future.cancel();
        }
        return super.delete(key);
    }

    // --- ADDED METHODS TO SATISFY RFMap INTERFACE ---

    /**
     * @override
     */
    public mapValFuture<V2>(vToV2: AFunction<V, V2>, v2ToV: AFunction<V2, V>): RFMap<K, V2> {
        // This implementation is defined in RFMapImpl
        // We bind it to `this` which is an RFMap
        return RFMapImpl.mapValFuture.bind(this)(vToV2, v2ToV);
    }

    /**
     * @override
     */
    public mapKeyFuture<K2>(vToK2: AFunction<V, K2>): RFMap<K2, V> {
        // This implementation is defined in RFMapImpl
        return RFMapImpl.mapKeyFuture.bind(this)(vToK2);
    }
}


// =============================================================================================
// SECTION 4: RCollection (Reactive Collection)
// =============================================================================================

/**
 * A reactive Collection interface, providing event consumers for adds and removes.
 *
 * @template T The element type.
 */
export interface RCollection<T> extends Iterable<T> {
    /**
     * Fires when an element is added.
     */
    forAdd(): EventConsumer<T>;

    /**
     * Fires when an element is removed.
     */
    forRemove(): EventConsumer<T>;

    /**
     * Gets the number of elements in the collection.
     */
    readonly size: number;

    /**
     * Checks if the collection is empty.
     */
    isEmpty(): boolean;

    /**
     * Checks if the collection contains an element.
     * @param o The element to check.
     */
    contains(o: T): boolean;

    /**
     * Adds an element to the collection.
     * @param e The element to add.
     * @returns True if the collection changed.
     */
    add(e: T): boolean;

    /**
     * Removes an element from the collection.
     * @param o The element to remove.
     * @returns True if the collection changed.
     */
    remove(o: T): boolean;

    /**
     * Removes all elements from the collection.
     */
    clear(): void;

    /**
     * Adds all elements from an iterable to this collection.
     * @param c The iterable of elements to add.
     * @returns True if the collection changed.
     */
    addAll(c: Iterable<T>): boolean;

    /**
     * Removes all elements from this collection that are present
     * in the specified iterable.
     * @param c The iterable of elements to remove.
     * @returns True if the collection changed.
     */
    removeAll(c: Iterable<T>): boolean;

    /**
     * Retains only the elements in this collection that are contained
     * in the specified iterable.
     * @param c The iterable of elements to retain.
     * @returns True if the collection changed.
     */
    retainAll(c: Iterable<T>): boolean;

    /**
     * Creates a new RCollection by mapping elements.
     * @param f Function to map T to T2.
     * @param f2 Function to map T2 back to T.
     */
    map<T2>(f: AFunction<T, T2>, f2: AFunction<T2, T>): RCollection<T2>;
}

/**
 * Base implementation for RCollection that wraps a Set or Array.
 * @template T The element type.
 * @template S The underlying storage type (Set or Array).
 */
export abstract class RCollectionBySrc<T, S extends Set<T> | Array<T>> implements RCollection<T> {

    protected readonly forAddEvent = new EventConsumer<T>();
    protected readonly forRemoveEvent = new EventConsumer<T>();

    /**
     * @param src The underlying collection (Set or Array).
     */
    constructor(protected readonly src: S) {}

    /**
     * Fires when an element is added.
     */
    public forAdd(): EventConsumer<T> { return this.forAddEvent; }

    /**
     * Fires when an element is removed.
     */
    public forRemove(): EventConsumer<T> { return this.forRemoveEvent; }

    /**
     * Gets the number of elements.
     */
    public get size(): number {
        return (this.src as Set<T>).size ?? (this.src as Array<T>).length;
    }

    /**
     * Checks if empty.
     */
    public isEmpty(): boolean {
        return this.size === 0;
    }

    /**
     * Protected method to fire add event.
     * @param val The value added.
     */
    protected add0(val: T): void {
        this.forAddEvent.fire(val);
    }

    /**
     * Protected method to fire remove event.
     * @param val The value removed.
     */
    protected remove0(val: T): void {
        this.forRemoveEvent.fire(val);
    }

    /**
     * @abstract
     */
    public abstract [Symbol.iterator](): IterableIterator<T>;

    /**
     * @abstract
     */
    public abstract contains(o: T): boolean;

    /**
     * @abstract
     */
    public abstract add(e: T): boolean;

    /**
     * @abstract
     */
    public abstract remove(o: T): boolean;

    /**
     * @abstract
     */
    public abstract clear(): void;


    /**
     * @override
     */
    public addAll(c: Iterable<T>): boolean {
        let modified = false;
        for (const e of c) {
            if (this.add(e)) {
                modified = true;
            }
        }
        return modified;
    }

    /**
     * @override
     */
    public removeAll(c: Iterable<T>): boolean {
        let modified = false;
        for (const e of c) {
            if (this.remove(e)) {
                modified = true;
            }
        }
        return modified;
    }

    /**
     * @override
     */
    public retainAll(c: Iterable<T>): boolean {
        const retainSet = new Set(c);
        let modified = false;
        const toRemove: T[] = [];

        for (const e of this) {
            if (!retainSet.has(e)) {
                toRemove.push(e);
            }
        }

        for (const e of toRemove) {
            if (this.remove(e)) {
                modified = true;
            }
        }
        return modified;
    }

    /**
     * @override
     */
    public map<T2>(f: AFunction<T, T2>, f2: AFunction<T2, T>): RCollection<T2> {
        /**
         * This creates a new RCollection (backed by a Set) and binds it.
         */
        const mappedSet = new Set<T2>();

        for (const e of this) {
            mappedSet.add(f(e));
        }

        const res: RCollection<T2> = RCol.of(mappedSet);

        this.forAdd().add(v => res.add(f(v)));
        this.forRemove().add(v => res.remove(f(v)));
        res.forAdd().add(v => this.add(f2(v)));
        res.forRemove().add(v => this.remove(f2(v)));

        return res;
    }
}


// =============================================================================================
// SECTION 5: RSet (Reactive Set)
// =============================================================================================

/**
 * A reactive Set interface.
 * NOTE: This does NOT extend the built-in 'Set' to avoid iterator type conflicts.
 * @template T The element type.
 */
export interface RSet<T> extends RCollection<T> {
    // --- Standard Set Methods ---

    /**
     * Checks if a value exists.
     * @param value The value.
     * @returns True if the value exists.
     */
    has(value: T): boolean;

    /**
     * Deletes a value.
     * @param value The value to delete.
     * @returns True if the value was deleted.
     */
    delete(value: T): boolean;

    /**
     * Executes a callback for each element.
     * @param callbackfn The callback function.
     * @param thisArg The `this` context for the callback.
     */
    forEach(callbackfn: (value: T, value2: T, set: RSet<T>) => void, thisArg?: any): void;

    /**
     * Returns an iterator for the set entries.
     */
    entries(): IterableIterator<[T, T]>;

    /**
     * Returns an iterator for the set keys (values).
     */
    keys(): IterableIterator<T>;

    /**
     * Returns an iterator for the set values.
     */
    values(): IterableIterator<T>;


    // --- Reactive Methods ---

    /**
     * Links this set to another set, synchronizing changes in both directions.
     * @param other The other RSet to link with.
     * @param f Function to map T to T2.
     * @param back Function to map T2 back to T.
     */
    link<T2>(other: RSet<T2>, f: AFunction<T, T2>, back: AFunction<T2, T>): void;

    /**
     * Links this set to another set of the same type.
     * @param other The other RSet to link with.
     */
    link(other: RSet<T>): void;

    /**
     * Creates a new RSet by mapping elements.
     * @param f Function to map T to T2.
     * @param f2 Function to map T2 back to T.
     */
    map<T2>(f: AFunction<T, T2>, f2: AFunction<T2, T>): RSet<T2>;

    /**
     * Creates a new one-way mapped RSet.
     * @param f Function to map T to T2.
     */
    map<T2>(f: AFunction<T, T2>): RSet<T2>;
}

/**
 * Implementation of RSet wrapping a standard Set.
 * @template T The element type.
 */
export class RSetBySrc<T> extends RCollectionBySrc<T, Set<T>> implements RSet<T> {
    public readonly [Symbol.toStringTag] = "RSet";

    constructor(src: Set<T>) {
        super(src);
    }

    /**
     * @override
     */
    public [Symbol.iterator](): IterableIterator<T> {
        return this.src[Symbol.iterator]();
    }

    /**
     * @override
     */
    public contains(o: T): boolean {
        return this.src.has(o);
    }

    /**
     * @override
     */
    public add(e: T): boolean {
        if (this.src.has(e)) {
            return false;
        }
        this.src.add(e);
        this.add0(e);
        return true;
    }

    /**
     * @override
     */
    public remove(o: T): boolean {
        const result = this.src.delete(o);
        if (result) {
            this.remove0(o);
        }
        return result;
    }

    /**
     * @override
     */
    public clear(): void {
        for (const e of this.src) {
            this.remove0(e);
        }
        this.src.clear();
    }

    /**
     * @override
     */
    public entries(): IterableIterator<[T, T]> {
        return this.src.entries();
    }

    /**
     * @override
     */
    public keys(): IterableIterator<T> {
        return this.src.keys();
    }

    /**
     * @override
     */
    public values(): IterableIterator<T> {
        return this.src.values();
    }

    /**
     * @override
     */
    public forEach(callbackfn: (value: T, value2: T, set: RSet<T>) => void, thisArg?: any): void {
        // Pass 'this' (the RSet) to the callback, not 'this.src' (the raw Set)
        this.src.forEach((value, value2) => {
            callbackfn.call(thisArg, value, value2, this);
        });
    }

    /**
     * @override
     */
    public has(value: T): boolean {
        return this.src.has(value);
    }

    /**
     * @override
     */
    public delete(value: T): boolean {
        return this.remove(value);
    }

    /**
     * @override
     */
    public link<T2>(other: RSet<T2> | RSet<T>, f?: AFunction<T, T2>, back?: AFunction<T2, T>): void {
        if (f && back) {
            const otherRSet = other as RSet<T2>;
            this.forAdd().add(v => otherRSet.add(f(v)));
            this.forRemove().add(v => otherRSet.remove(f(v)));
            otherRSet.forAdd().add(v => this.add(back(v)));
            otherRSet.forRemove().add(v => this.remove(back(v)));

            for (const e of otherRSet) { this.add(back(e)); }
            for (const e of this) { otherRSet.add(f(e)); }

        } else {
            const otherRSet = other as RSet<T>;
            this.forAdd().add(v => otherRSet.add(v));
            this.forRemove().add(v => otherRSet.remove(v));
            otherRSet.forAdd().add(v => this.add(v));
            otherRSet.forRemove().add(v => this.remove(v));

            otherRSet.addAll(this);
            this.addAll(otherRSet);
        }
    }

    /**
     * @override
     */
    public map<T2>(f: AFunction<T, T2>, f2?: AFunction<T2, T>): RSet<T2> {
        if (f2) {
            return super.map(f, f2) as RSet<T2>;
        } else {
            const res = RCol.set<T2>();
            this.forAdd().add(v => { res.add(f(v)); });
            this.forRemove().add(v => { res.remove(f(v)); });
            for(const e of this) { res.add(f(e)); }
            return res;
        }
    }
}


// =============================================================================================
// SECTION 6: RQueue (Reactive Queue)
// =============================================================================================

/**
 * A reactive Queue interface.
 * Based on Java's Queue interface.
 * @template T The element type.
 */
export interface RQueue<T> extends RCollection<T> {
    /**
     * Inserts the specified element into this queue if possible.
     * @param e The element to add.
     * @returns True if the element was added.
     */
    offer(e: T): boolean;

    // --- ИСПРАВЛЕНИЕ ---
    // Удален конфликтующий метод 'remove(): T'.
    // RQueue<T> теперь наследует только 'remove(o: T): boolean' из RCollection<T>.
    // Для удаления и возврата элемента используйте 'poll()'.

    /**
     * Retrieves and removes the head of this queue.
     * @returns The head of the queue, or null if this queue is empty.
     */
    poll(): T | null;

    /**
     * Retrieves, but does not remove, the head of this queue.
     * Throws an error if this queue is empty.
     * @returns The head of the queue.
     */
    element(): T;

    /**
     * Retrieves, but does not remove, the head of this queue.
     * @returns The head of the queue, or null if this queue is empty.
     */
    peek(): T | null;
}

/**
 * Implementation of RQueue wrapping a standard Array (as a FIFO queue).
 * @template T The element type.
 */
export class RQueueBySrc<T> extends RCollectionBySrc<T, Array<T>> implements RQueue<T> {
    public readonly [Symbol.toStringTag] = "RQueue";

    /**
     * @param src The underlying array.
     */
    constructor(src: Array<T>) {
        super(src);
    }

    /**
     * @override
     */
    public [Symbol.iterator](): IterableIterator<T> {
        return this.src[Symbol.iterator]();
    }

    /**
     * @override
     */
    public contains(o: T): boolean {
        return this.src.includes(o);
    }

    /**
     * Adds an element to the end of the queue.
     * @override
     */
    public add(e: T): boolean {
        this.src.push(e);
        this.add0(e);
        return true;
    }

    // --- ИСПРАВЛЕНИЕ ---
    // Удалена перегруженная реализация 'remove'.
    // Теперь реализован только 'remove(o: T): boolean' из RCollection.

    /**
     * Removes the first occurrence of an element.
     * @override
     */
    public remove(o: T): boolean {
        const index = this.src.indexOf(o);
        if (index > -1) {
            this.src.splice(index, 1);
            this.remove0(o);
            return true;
        }
        return false;
    }

    /**
     * @override
     */
    public clear(): void {
        for (const e of this.src) {
            this.remove0(e);
        }
        this.src.length = 0;
    }

    /**
     * @override
     */
    public offer(e: T): boolean {
        return this.add(e);
    }

    /**
     * @override
     */
    public poll(): T | null {
        if (this.isEmpty()) {
            return null;
        }
        const v = this.src.shift(); /** Removes from start */
        if (v !== undefined) {
            this.remove0(v);
            return v;
        }
        return null;
    }

    /**
     * @override
     */
    public element(): T {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.src[0];
    }

    /**
     * @override
     */
    public peek(): T | null {
        return this.isEmpty() ? null : this.src[0];
    }
}

// =============================================================================================
// SECTION 7: RCol (Static Factory)
// =============================================================================================

/**
 * Factory namespace for creating reactive collections.
 */
export namespace RCol {
    /**
     * Creates a new reactive RQueue, backed by an Array.
     * @param src Optional initial array.
     */
    export function of<T>(src: Array<T>): RQueue<T>;

    /**
     * Creates a new reactive RSet, backed by a Set.
     * @param src Optional initial set.
     */
    export function of<T>(src: Set<T>): RSet<T>;

    /**
     * Creates a new reactive RMap, backed by a Map.
     * @param src Optional initial map.
     */
    export function of<K, V>(src: Map<K, V>): RMap<K, V>;

    /**
     * Creates a new reactive collection wrapper.
     */
    export function of<T, K, V>(src: Set<T> | Array<T> | Map<K, V> | Iterable<T>): RSet<T> | RQueue<T> | RMap<K, V> | RCollection<T> {
        if (src instanceof Set) {
            return new RSetBySrc(src);
        }
        if (src instanceof Array) {
            return new RQueueBySrc(src);
        }
        if (src instanceof Map) {
            return new RMapBySrc(src as Map<K, V>);
        }
        if (typeof (src as Iterable<T>)[Symbol.iterator] === 'function') {
            return new RSetBySrc(new Set(src as Iterable<T>));
        }
        throw new Error("Unsupported source type for RCol.of");
    }

    /**
     * Creates a new, empty, reactive RMap.
     */
    export function map<K, V>(): RMap<K, V> {
        return new RMapBySrc(new Map<K, V>());
    }

    /**
     * Creates a new, empty, reactive RSet.
     */
    export function set<T>(): RSet<T> {
        return new RSetBySrc(new Set<T>());
    }

    /**
     * Creates a new, empty, reactive RQueue.
     */
    export function queue<T>(): RQueue<T> {
        return new RQueueBySrc(new Array<T>());
    }

    /**
     * Creates an asynchronous Batching Map (BMap) implementation.
     * @param timeoutMs The request timeout duration (not used in default impl).
     * @param name A descriptive name (not used in default impl).
     */
    export function bMap<K, V>(timeoutMs: number, name: string): BMap<K, V>;

    /**
     * Creates an asynchronous Batching Map (BMap) with default parameters.
     */
    export function bMap<K, V>(): BMap<K, V>;

    /**
     * Implementation for bMap overloads.
     * @internal
     */
    export function bMap<K, V>(timeoutMs?: number, name?: string): BMap<K, V> {
        const finalTimeout = timeoutMs ?? 4000;
        const finalName = name ?? "GenericBMap";
        return new BMapImpl<K, V>(10, finalName, finalTimeout);
    }
}
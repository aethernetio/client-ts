// =============================================================================================
// FILE: aether.rcollection.ts
// PURPOSE: Contains all Reactive Collection (RCollection, RMap, BMap) interfaces and implementations.
// DEPENDENCIES: aether.types.ts, aether.future.ts, aether.logging.ts, aether.utils.ts
// =============================================================================================

import {
    AConsumer, AFunction, ABiFunction,
} from './aether_types';
import {
    EventConsumer, ARFutureWithFlag, AFuture,
    ARFuture
} from './aether_future';
import { RU } from './aether_utils';

// --- AFunction Stub Utility ---
const AFunctionStub = {
    /**
     * Creates a stub function that throws an error if called.
     * This is used for function parameters that should never be executed in a unidirectional map.
     */
    stub: <T1, R1>(): AFunction<T1, R1> => {
        return (() => {
            throw new Error("AFunction stub called, this function should not be executed.");
        }) as AFunction<T1, R1>;
    }
};

// =============================================================================================
// SECTION 8: RCOLLECTIONS INTERFACES AND IMPLEMENTATION
// =============================================================================================

// --- RCol Namespace (Hoisted to the top to resolve scoping errors) ---
export namespace RCol {
    export function set<T>(): RSet<T> { return new RSetBySrc(new Set<T>()); }
    export function map<K, V>(): RMap<K, V> { return new RMapBySrc(new Map<K, V>()); }
    export function collection<T>(): RCollection<T> { return new RCollectionBySrc(new Array<T>()); }
    /**
     * Creates an asynchronous Batching Map (BMap) implementation.
     * @param timeoutMs The request timeout duration in milliseconds.
     * @param name A descriptive name for logging purposes.
     */
    export function bMap<K, V>(timeoutMs: number, name: string): BMap<K, V> {
        return new BMapImpl<K, V>(10, name, timeoutMs);
    }
    /**
     * Internal utility to wrap an RFMap implementation with default interface methods.
     */
    export function rfMapImpl<K, V>(map: RFMap<K, V>): RFMap<K, V> & RFMapDefaultImpl<K, V> {
        return new RFMapDefaultImpl(map) as RFMap<K, V> & RFMapDefaultImpl<K, V>;
    }
}

// NOTE: Destroyable removed from all collection interfaces as requested.
export interface RCollection<T> extends Iterable<T> {
    // Collection methods
    contains(o: any): boolean;
    add(e: T): boolean;
    remove(o: any): boolean;
    clear(): void;
    addAll(c: Array<T>): boolean;
    [Symbol.iterator](): IterableIterator<T>;

    // RCollection methods
    readonly forAdd: EventConsumer<T>;
    readonly forRemove: EventConsumer<T>;
    /**
     * Creates a reactive, bi-directional mapped collection.
     * @param f Function to map source type T to target type T2.
     * @param f2 Function to map target type T2 back to source type T (required for modification).
     */
    map<T2>(f: AFunction<T, T2>, f2: AFunction<T2, T>): RCollection<T2>;
    readonly size: number;
}
export namespace RCollection {
    export interface Update<T> { newValue: T; oldValue: T; }
}

// Full RMap interface definition including namespace
export interface RMap<K, V> { // Destroyable removed
    // Map methods (explicitly defined)
    get(key: K): V | undefined;
    set(key: K, value: V): this;
    delete(key: K): boolean;
    has(key: K): boolean;
    clear(): void;
    forEach(callbackfn: (value: V, key: K, map: RMap<K, V>) => void, thisArg?: any): void;
    keys(): IterableIterator<K>;
    values(): IterableIterator<V>;
    entries(): IterableIterator<[K, V]>;
    [Symbol.iterator](): IterableIterator<[K, V]>;

    // RMap methods
    get size(): number;
    forUpdate(): EventConsumer<RMap.Update<K, V>>;
    forRemove(): EventConsumer<RMap.Entry<K, V>>;

    /**
     * Converts a standard RMap (V) into an RFMap (ARFutureWithFlag<V>).
     * This method is only available on base RMap implementations, not RFMap/BMap.
     */
    mapToFutures(): RFMap<K, V>;

    /**
     * Creates a reactive map with mapped values (bi-directional).
     * @param v1ToV2 Function to map old value V to new value V2.
     * @param v2ToV1 Function to map new value V2 back to old value V.
     */
    mapVal<V2>(v1ToV2: AFunction<V, V2>, v2ToV1: AFunction<V2, V>): RMap<K, V2>;

    /**
     * Creates a reactive map with mapped values (unidirectional, modifications not supported).
     * @param v1ToV2 Function to map old value V to new value V2.
     */
    mapVal<V2>(v1ToV2: AFunction<V, V2>): RMap<K, V2>;

    /**
     * Creates a reactive map with mapped keys and values (bi-directional).
     * @param k1ToK2 Function to map source key K to target key K2.
     * @param k2ToK1 Function to map target key K2 back to source key K.
     * @param v1ToV2 Function to map source value V to target value V2.
     * @param v2ToV1 Function to map target value V2 back to source value V.
     */
    map<K2, V2>(k1ToK2: AFunction<K, K2>, k2ToK1: AFunction<K2, K>, v1ToV2: AFunction<V, V2>, v2ToV1: AFunction<V2, V>): RMap<K2, V2>;

    /**
     * Creates a reactive map with mapped keys based on key and value (read-only key mapping).
     * @param k1ToK2 Function to map source key K and value V to target key K2.
     */
    mapKey<K2>(k1ToK2: ABiFunction<K, V, K2>): RMap<K2, V>;
}
// Associated namespace for RMap internal types (Entry/Update)
export namespace RMap {
    export interface Entry<K, V> { key: K; value: V; }
    export interface Update<K, V> { key: K; newValue: V; oldValue: V; }
}

export interface RFMap<K, V> extends RMap<K, ARFutureWithFlag<V>> {

    /**
     * Creates a reactive map with mapped futures' resolved values.
     * @param vToV2 Function to map resolved value V to new resolved value V2.
     * @param v2ToV Function to map new resolved value V2 back to old resolved value V.
     */
    mapValFuture<V2>(vToV2: AFunction<V, V2>, v2ToV: AFunction<V2, V>): RFMap<K, V2>;

    /**
     * Creates a reactive map with keys mapped based on resolved values.
     * @param vToK2 Function to map resolved value V to new key K2.
     * @param vToK Function to map resolved value V to original key K.
     */
    mapKeyFuture<K2>(vToK2: AFunction<V, K2>, vToK: AFunction<V, K>): RFMap<K2, V>;

    /**
     * Creates a reactive map with mapped keys and resolved values (bi-directional).
     */
    mapFuture<K2, V2>(kToK2: AFunction<K, K2>, k2ToK: AFunction<K2, K>, vToV2: AFunction<V, V2>, v2ToV: AFunction<V2, V>): RFMap<K2, V2>;
}
export interface BMap<K, V> extends RFMap<K, V> {
    /**
     * Retrieves the ARFutureWithFlag associated with the key. If not present, creates one
     * and adds the key to the global request pool.
     */
    getFuture(key: K): ARFutureWithFlag<V>;

    /**
     * Puts a fully resolved value into the map, fulfilling any waiting future.
     */
    putResolved(key: K, value: V): void;

    /**
     * Marks the future for a key as completed with an error.
     */
    putError(key: K, error: Error): void;

    /**
     * Returns an EventConsumer that fires when a value in the map is definitively resolved.
     */
    forValueUpdate(): EventConsumer<RMap.Update<K, V>>;

    /**
     * Returns a set of keys that currently require fetching from the external service (globally).
     */
    getPendingRequests(): Set<K>;

    /**
     * Returns an array of keys queued for network submission by this specific sender.
     * This acts as the 'flush' operation for the sender.
     * @param elementType The class constructor for the key type.
     * @param sender The object responsible for sending the network request.
     */
    getRequestsFor(elementType: new (...args: any[]) => K, sender: Object): K[];

    /**
     * Checks if there is any work available globally.
     */
    isRequests(): boolean;

    /**
     * Checks if there are any pending requests for the specified sender.
     */
    isRequestsFor(sender: Object): boolean;
}

export interface RSet<T> extends RCollection<T> {
    map<T2>(f: AFunction<T, T2>, f2: AFunction<T2, T>): RSet<T2>;
    map<T2>(f: AFunction<T, T2>): RSet<T2>;
}

export class RCollectionBySrc<T> implements RCollection<T> {
    public readonly forAdd: EventConsumer<T>;
    public readonly forRemove: EventConsumer<T>;
    protected readonly src: T[] | Set<T>;

    constructor(src: T[] | Set<T>) {
        this.src = src;
        this.forAdd = new EventConsumer<T>();
        this.forRemove = new EventConsumer<T>();
    }
    public get size(): number { return Array.isArray(this.src) ? this.src.length : (this.src as Set<T>).size; }
    public contains(o: any): boolean { return Array.isArray(this.src) ? this.src.includes(o) : (this.src as Set<T>).has(o); }
    public add(e: T): boolean {
        let added = false;
        if (Array.isArray(this.src)) {
            if (!this.src.includes(e)) { this.src.push(e); added = true; }
        } else {
            const sizeBefore = (this.src as Set<T>).size;
            (this.src as Set<T>).add(e);
            if ((this.src as Set<T>).size > sizeBefore) { added = true; }
        }

        if (added) this.forAdd.fire(e);
        return added;
    }
    public remove(o: any): boolean {
        let removed = false;
        if (Array.isArray(this.src)) {
            const index = this.src.indexOf(o);
            if (index > -1) { this.src.splice(index, 1); removed = true; }
        } else {
            removed = (this.src as Set<T>).delete(o);
        }
        if (removed) this.forRemove.fire(o as T);
        return removed;
    }
    public clear(): void {
        if (this.size === 0) return;
        const items = Array.from(this.src);
        Array.isArray(this.src) ? this.src.length = 0 : (this.src as Set<T>).clear();
        for (const item of items) { this.forRemove.fire(item); }
    }
    public map<T2>(f: AFunction<T, T2>, f2: AFunction<T2, T>): RCollection<T2> {
        const self = this;
        const res = RCol.collection<T2>();

        self.forAdd.add((v: T) => res.add(f(v)));
        self.forRemove.add((v: T) => res.remove(f(v)));
        res.forAdd.add((v: T2) => self.add(f2(v)));
        res.forRemove.add((v: T2) => self.remove(f2(v)));

        for (const e of self) { res.add(f(e)); }

        return res;
    }
    public addAll(c: Array<T>): boolean {
        let res = false;
        for (const v of c) { res = this.add(v) || res; }
        return res;
    }
    public [Symbol.iterator](): IterableIterator<T> { return this.src[Symbol.iterator](); }
}

export class RSetBySrc<T> extends RCollectionBySrc<T> implements RSet<T> {
    constructor(src: Set<T>) { super(src); }
    override add(e: T): boolean {
        const srcSet = this.src as Set<T>;
        if (!srcSet.has(e)) {
            srcSet.add(e);
            this.forAdd.fire(e);
            return true;
        }
        return false;
    }
    map<T2>(f: AFunction<T, T2>, back: AFunction<T2, T>): RSet<T2>;
    map<T2>(f: AFunction<T, T2>): RSet<T2>;
    map<T2>(f: AFunction<T, T2>, back?: AFunction<T2, T>): RSet<T2> {
        const self = this;
        if (back) {
            const res = RCol.set<T2>();
            self.forAdd.add((v: T) => res.add(f(v)));
            self.forRemove.add((v: T) => res.remove(f(v)));
            res.forAdd.add((v: T2) => self.add(back(v)));
            res.forRemove.add((v: T2) => self.remove(back(v)));
            for (const e of self.src as Set<T>) { res.add(f(e)); }
            return res;
        }

        const res = RCol.set<T2>();
        this.forAdd.add((v: T) => res.add(f(v)));
        this.forRemove.add((v: T) => res.remove(f(v)));
        for (const v of this.src as Set<T>) { res.add(f(v)); }
        return res;
    }
}

export class RMapBySrc<K, V> implements RMap<K, V> {
    private readonly _forUpdate: EventConsumer<RMap.Update<K, V>> = new EventConsumer<RMap.Update<K, V>>();
    private readonly _forRemove: EventConsumer<RMap.Entry<K, V>> = new EventConsumer<RMap.Entry<K, V>>();
    private readonly src: Map<K, V>;

    constructor(src: Map<K, V>) { this.src = src; }

    // RMap methods
    public forUpdate(): EventConsumer<RMap.Update<K, V>> { return this._forUpdate; }
    public forRemove(): EventConsumer<RMap.Entry<K, V>> { return this._forRemove; }
    public mapToFutures(): RFMap<K, V> {
        const targetRfMap = RCol.bMap<K, V>(5000, `mappedFutures`);
        this.forEach((v, k) => { if (v !== null && v !== undefined) { targetRfMap.putResolved(k, v); } });
        this.forUpdate().add((update: RMap.Update<K, V>) => {
            if (update.newValue !== undefined && update.newValue !== null) targetRfMap.putResolved(update.key, update.newValue);
        });
        this.forRemove().add((entry: RMap.Entry<K, V>) => { targetRfMap.delete(entry.key); });
        return targetRfMap;
    }

    public mapVal<V2>(v1ToV2: AFunction<V, V2>, v2ToV1: AFunction<V2, V>): RMap<K, V2>;
    public mapVal<V2>(v1ToV2: AFunction<V, V2>): RMap<K, V2>;
    public mapVal<V2>(v1ToV2: AFunction<V, V2>, v2ToV1?: AFunction<V2, V>): RMap<K, V2> {
        const _stubK = AFunctionStub.stub<K, K>();
        const backV = v2ToV1 ?? (() => { throw new Error("UnsupportedOperationException"); });
        return this.map(_stubK, _stubK, v1ToV2, backV);
    }

    public map<K2, V2>(k1ToK2: AFunction<K, K2>, k2ToK1: AFunction<K2, K>, v1ToV2: AFunction<V, V2>, v2ToV1: AFunction<V2, V>): RMap<K2, V2> {
        const self = this;
        return new (class implements RMap<K2, V2> {
            private readonly _forUpdate = new EventConsumer<RMap.Update<K2, V2>>();
            private readonly _forRemove = new EventConsumer<RMap.Entry<K2, V2>>();
            private mapData: Map<K2, V2> = new Map();

            constructor() {
                self.forUpdate().add(u => {
                    const k2 = k1ToK2(u.key);
                    const v2New = u.newValue !== undefined && u.newValue !== null ? v1ToV2(u.newValue) : undefined;
                    const v2Old = u.oldValue !== undefined && u.oldValue !== null ? v1ToV2(u.oldValue) : undefined;
                    this.mapData.set(k2, v2New!);
                    this._forUpdate.fire({ key: k2, newValue: v2New, oldValue: v2Old } as RMap.Update<K2, V2>);
                });
                self.forRemove().add(u => {
                    const k2 = k1ToK2(u.key);
                    const v2 = u.value !== undefined && u.value !== null ? v1ToV2(u.value) : undefined;
                    this.mapData.delete(k2);
                    this._forRemove.fire({ key: k2, value: v2 } as RMap.Entry<K2, V2>);
                });
                self.forEach((v, k) => this.mapData.set(k1ToK2(k), v1ToV2(v)));
            }

            // --- RMap Interface Implementation (Methods) ---
            public forUpdate(): EventConsumer<RMap.Update<K2, V2>> { return this._forUpdate; }
            public forRemove(): EventConsumer<RMap.Entry<K2, V2>> { return this._forRemove; }

            // Map methods
            get size(): number { return self.size; }
            get(key: K2): V2 | undefined { return this.mapData.get(key); }
            set(key: K2, value: V2): this { self.set(k2ToK1(key), v2ToV1(value)); return this; }
            delete(key: K2): boolean { return self.delete(k2ToK1(key)); }
            has(key: K2): boolean { return self.has(k2ToK1(key)); }
            clear(): void { self.clear(); }
            public forEach(callbackfn: (value: V2, key: K2, map: RMap<K2, V2>) => void, _thisArg?: any): void {
                this.mapData.forEach((v, k) => callbackfn.call(_thisArg, v, k, this), _thisArg);
            }
            public keys(): IterableIterator<K2> { return this.mapData.keys(); }
            public values(): IterableIterator<V2> { return this.mapData.values(); }
            public entries(): IterableIterator<[K2, V2]> { return this.mapData.entries(); }
            public [Symbol.iterator](): IterableIterator<[K2, V2]> { return this.mapData.entries(); }

            // RMap delegates
            mapToFutures(): RFMap<K2, V2> { throw new Error("mapToFutures() is not implemented on mapped RMap."); }

            // mapVal: Implement both overloads
            public mapVal<V3>(v1ToV2: AFunction<V2, V3>, v2ToV1: AFunction<V3, V2>): RMap<K2, V3>;
            public mapVal<V3>(v1ToV2: AFunction<V2, V3>): RMap<K2, V3>;
            public mapVal<V3>(v1ToV2: AFunction<V2, V3>, v2ToV1?: AFunction<V3, V2>): RMap<K2, V3> {
                const _stubK = AFunctionStub.stub<K2, K2>();
                const backV = v2ToV1 ?? AFunctionStub.stub<V3, V2>();
                return this.map(_stubK, _stubK, v1ToV2, backV);
            }

            // map: Single, complete signature implementation
            public map<K3, V3>(_k1ToK2: AFunction<K2, K3>, _k2ToK1: AFunction<K3, K2>, _v1ToV2: AFunction<V2, V3>, _v2ToV1: AFunction<V3, V2>): RMap<K3, V3> {
                 throw new Error("Recursive map implementation needed.");
            }

            mapKey<K3>(_k1ToK2: ABiFunction<K2, V2, K3>): RMap<K3, V2> { throw new Error("Method not implemented."); }
        }) as RMap<K2, V2>;
    }
    public mapKey<K2>(k1ToK2: ABiFunction<K, V, K2>): RMap<K2, V> {
        const res = RCol.map<K2, V>();
        this.forRemove().add(e => {
            if (e.value) {
                const _k2 = k1ToK2(e.key, e.value);
                res.delete(_k2);
            }
        });
        this.forUpdate().add(e => {
            if (e.newValue) {
                const k2 = k1ToK2(e.key, e.newValue);
                res.set(k2, e.newValue);
            }
        });
        this.forEach((v, k) => res.set(k1ToK2(k, v), v));
        return res;
    }

    // Map methods (implementation)
    public get(key: K): V | undefined { return this.src.get(key); }
    public set(key: K, value: V): this {
        const old = this.src.get(key);
        this.src.set(key, value);
        if (old !== value) { this._forUpdate.fire({ key, newValue: value, oldValue: old } as RMap.Update<K, V>); }
        return this;
    }
    public delete(key: K): boolean {
        const old = this.src.get(key);
        const removed = this.src.delete(key);
        if (removed) { this._forRemove.fire({ key, value: old } as RMap.Entry<K, V>); }
        return removed;
    }
    public has(key: K): boolean { return this.src.has(key); }
    public get size(): number { return this.src.size; }
    public clear(): void {
        if (this.size === 0) return;
        const entries = Array.from(this.src.entries());
        this.src.clear();
        for (const [key, value] of entries) { this._forRemove.fire({ key, value }); }
    }
    public forEach(callbackfn: (value: V, key: K, map: RMap<K, V>) => void, _thisArg?: any): void { this.src.forEach((v, k) => callbackfn.call(_thisArg, v, k, this), _thisArg); }
    public [Symbol.iterator](): IterableIterator<[K, V]> { return this.src.entries(); }
    public keys(): IterableIterator<K> { return this.src.keys(); }
    public values(): IterableIterator<V> { return this.src.values(); }
    public entries(): IterableIterator<[K, V]> { return this.src.entries(); }
}

class Sender<K> {
    public readonly requests: Set<K> = new RU.ConcurrentHashSet();
    constructor(allRequests: Set<K>) { allRequests.forEach(k => this.requests.add(k)); }
    public extract(_elementType: new (...args: any[]) => K): K[] {
        const r: K[] = Array.from(this.requests);
        this.requests.clear();
        return r;
    }
}

export class BMapImpl<K, V> implements BMap<K, V> {
    private readonly _forUpdate: EventConsumer<RMap.Update<K, ARFutureWithFlag<V>>> = new EventConsumer();
    private readonly _forRemove: EventConsumer<RMap.Entry<K, ARFutureWithFlag<V>>> = new EventConsumer();
    private readonly _forValueUpdate: EventConsumer<RMap.Update<K, V>> = new EventConsumer<RMap.Update<K, V>>();
    private readonly allRequests: Set<K> = new RU.ConcurrentHashSet();
    private readonly senders: WeakMap<Object, Sender<K>> = new WeakMap();
    private readonly data: Map<K, ARFutureWithFlag<V>> = new Map();
    private readonly timeoutMs: number;
    // Removed unused private readonly _name: string;

    constructor(_initialCapacity: number, _name: string, timeoutMs: number = 5000) {
        this.timeoutMs = timeoutMs;
    }
    private getSender(key: Object): Sender<K> {
        let sender = this.senders.get(key);
        if (!sender) {
            sender = new Sender<K>(this.allRequests);
            this.senders.set(key, sender);
        }
        return sender;
    }
    private removeRequest(key: K): boolean { return this.allRequests.delete(key); }
    private addRequest(key: K): void { if (!this.allRequests.has(key)) { this.allRequests.add(key); } }

    // BMap/RFMap methods
    public getFuture(key: K): ARFutureWithFlag<V> {
        let future = this.data.get(key);
        if (!future) {
            future = new ARFutureWithFlag<V>();
            const onFinalize = (f: ARFutureWithFlag<V>) => {
                this.removeRequest(key);
                if (f.isDone()) {
                    const resolvedValue = f.getNow();
                    this._forValueUpdate.fire({ key: key, newValue: resolvedValue, oldValue: null } as RMap.Update<K, V>);
                }
            };
            future.addListener(onFinalize as AConsumer<ARFutureWithFlag<V>>);
            if (this.timeoutMs > 0) future.timeoutError(this.timeoutMs / 1000, `BMap future timeout for key: ${key}`);
            this.data.set(key, future);
            this.addRequest(key);
            this._forUpdate.fire({ key, newValue: future, oldValue: undefined } as RMap.Update<K, ARFutureWithFlag<V>>);
        }
        return future;
    }
    public putResolved(key: K, value: V): void {
        const future = this.getFuture(key);
        const oldValue = future.isDone() ? future.getNow() : null;
        const resolvedNow = future.tryDone(value);
        if (resolvedNow) { this._forValueUpdate.fire({ key: key, newValue: value, oldValue: oldValue } as RMap.Update<K, V>); }
    }
    public putError(key: K, error: Error): void {
        const future = this.getFuture(key);
        future.tryError(error);
        this.removeRequest(key);
    }
    public forValueUpdate(): EventConsumer<RMap.Update<K, V>> { return this._forValueUpdate; }
    public getPendingRequests(): Set<K> { return this.allRequests; }
    public getRequestsFor(elementType: new (...args: any[]) => K, sender: Object): K[] {
        return this.getSender(sender).extract(elementType);
    }
    public isRequests(): boolean { return this.allRequests.size > 0; }
    public isRequestsFor(sender: Object): boolean {
        const s = this.senders.get(sender);
        return s ? s.requests.size > 0 : false;
    }
    public forUpdate(): EventConsumer<RMap.Update<K, ARFutureWithFlag<V>>> { return this._forUpdate; }
    public forRemove(): EventConsumer<RMap.Entry<K, ARFutureWithFlag<V>>> { return this._forRemove; }

    // RMap methods (implemented to satisfy RMap<K, ARFutureWithFlag<V>> contract)
    public mapToFutures(): RFMap<K, ARFutureWithFlag<V>> { throw new Error("mapToFutures() is not implemented on BMapImpl."); }
    public mapVal<V2>(_v1ToV2: AFunction<ARFutureWithFlag<V>, V2>, _v2ToV1?: AFunction<V2, ARFutureWithFlag<V>>): RMap<K, V2> { throw new Error("Method not implemented for BMap/RFMap."); }
    public map<K2, V2>(_k1ToK2: AFunction<K, K2>, _k2ToK1: AFunction<K2, K>, _v1ToV2: AFunction<ARFutureWithFlag<V>, V2>, _v2ToV1: AFunction<V2, ARFutureWithFlag<V>>): RMap<K2, V2> { throw new Error("Method not implemented for BMap/RFMap."); }
    public mapKey<K2>(_k1ToK2: ABiFunction<K, ARFutureWithFlag<V>, K2>): RMap<K2, ARFutureWithFlag<V>> { throw new Error("Method not implemented for BMap/RFMap."); }

    // RFMap methods (delegated/implemented)
    public mapValFuture<V2>(vToV2: AFunction<V, V2>, v2ToV: AFunction<V2, V>): RFMap<K, V2> {
         return (this as unknown as BMapImpl<K, V>).mapValFuture(vToV2, v2ToV);
    }
    public mapKeyFuture<K2>(vToK2: AFunction<V, K2>, vToK: AFunction<V, K>): RFMap<K2, V> {
        return RCol.rfMapImpl(this as unknown as RFMap<K, V>).mapKeyFuture(vToK2, vToK);
    }
    public mapFuture<K2, V2>(kToK2: AFunction<K, K2>, k2ToK: AFunction<K2, K>, vToV2: AFunction<V, V2>, v2ToV: AFunction<V2, V>): RFMap<K2, V2> {
        return RCol.rfMapImpl(this as unknown as RFMap<K, V>).mapFuture(kToK2, k2ToK, vToV2, v2ToV);
    }

    // Map methods
    public get size(): number { return this.data.size; }
    public get(key: K): ARFutureWithFlag<V> | undefined { return this.data.get(key); }
    public set(_key: K, _value: ARFutureWithFlag<V>): this { throw new Error("UnsupportedOperationException: Cannot put ARFutureWithFlag directly to BMapImpl"); }
    public delete(key: K): boolean {
        const future = this.data.get(key);
        const wasPresent = this.data.delete(key);
        if (wasPresent) {
            this.removeRequest(key);
            future?.cancel();
            this._forRemove.fire({ key, value: future } as RMap.Entry<K, ARFutureWithFlag<V>>);
        }
        return wasPresent;
    }
    public has(key: K): boolean { return this.data.has(key); }
    public clear(): void { this.destroyResources(); }
    public forEach(callbackfn: (value: ARFutureWithFlag<V>, key: K, map: RMap<K, ARFutureWithFlag<V>>) => void, _thisArg?: any): void { this.data.forEach((v, k) => callbackfn.call(_thisArg, v, k, this as unknown as RMap<K, ARFutureWithFlag<V>>), _thisArg); }
    public [Symbol.iterator](): IterableIterator<[K, ARFutureWithFlag<V>]> { return this.data.entries(); }
    public keys(): IterableIterator<K> { return this.data.keys(); }
    public values(): IterableIterator<ARFutureWithFlag<V>> { return this.data.values(); }
    public entries(): IterableIterator<[K, ARFutureWithFlag<V>]> { return this.data.entries(); }

    // Cleanup logic extracted from destroy
    private destroyResources(): AFuture {
        this.data.forEach((future, key) => { future.cancel(); this.removeRequest(key); this._forRemove.fire({ key, value: future } as RMap.Entry<K, ARFutureWithFlag<V>>); });
        this.data.clear();
        this.allRequests.clear();
        this._forUpdate.listeners.clear(); this._forRemove.listeners.clear(); this._forValueUpdate.listeners.clear();
        return AFuture.of();
    }
}

class RFMapDefaultImpl<K, V> implements RFMap<K, V> {
    private readonly self: RFMap<K, V>;

    constructor(self: RFMap<K, V>) { this.self = self; }

    // Delegate Map methods
    get(key: K): ARFutureWithFlag<V> | undefined { return this.self.get(key); }
    set(key: K, value: ARFutureWithFlag<V>): this { this.self.set(key, value); return this; }
    delete(key: K): boolean { return this.self.delete(key); }
    has(key: K): boolean { return this.self.has(key); }
    get size(): number { return this.self.size; }
    clear(): void { this.self.clear(); }
    forEach(callbackfn: (value: ARFutureWithFlag<V>, key: K, map: RMap<K, ARFutureWithFlag<V>>) => void, _thisArg?: any): void { this.self.forEach(callbackfn, _thisArg); }
    [Symbol.iterator](): IterableIterator<[K, ARFutureWithFlag<V>]> { return this.self[Symbol.iterator](); }
    keys(): IterableIterator<K> { return this.self.keys(); }
    values(): IterableIterator<ARFutureWithFlag<V>> { return this.self.values(); }
    entries(): IterableIterator<[K, ARFutureWithFlag<V>]> { return this.self.entries(); }

    // Delegate RMap methods
    forUpdate(): EventConsumer<RMap.Update<K, ARFutureWithFlag<V>>> { return this.self.forUpdate(); }
    forRemove(): EventConsumer<RMap.Entry<K, ARFutureWithFlag<V>>> { return this.self.forRemove(); }
    mapToFutures(): RFMap<K, ARFutureWithFlag<V>> { throw new Error("mapToFutures() is not implemented on RFMapDefaultImpl."); }
    mapVal<V2>(_v1ToV2: AFunction<ARFutureWithFlag<V>, V2>, _v2ToV1?: AFunction<V2, ARFutureWithFlag<V>>): RMap<K, V2> { throw new Error("Method not implemented for RFMapDefaultImpl."); }
    map<K2, V2>(_k1ToK2: AFunction<K, K2>, _k2ToK1: AFunction<K2, K>, _v1ToV2: AFunction<ARFutureWithFlag<V>, V2>, _v2ToV1: AFunction<V2, ARFutureWithFlag<V>>): RMap<K2, V2> { throw new Error("Method not implemented for RFMapDefaultImpl."); }
    mapKey<K2>(_k1ToK2: ABiFunction<K, ARFutureWithFlag<V>, K2>): RMap<K2, ARFutureWithFlag<V>> { throw new Error("Method not implemented for RFMapDefaultImpl."); }

    // RFMap methods (implementations)
    public mapValFuture<V2>(vToV2: AFunction<V, V2>, v2ToV: AFunction<V2, V>): RFMap<K, V2> {
        return (this.self as any).mapValFuture(vToV2, v2ToV);
    }
    public mapKeyFuture<K2>(vToK2: AFunction<V, K2>, vToK: AFunction<V, K>): RFMap<K2, V> {
        // NOTE: vToK is currently unused in the implemented logic, matching the Java source.
        const self = this.self;
        const mappedKeys = new Map<K2, K>();

        self.forEach((future, originalKey) => {
            if (future.isDone()) {
                const value = future.getNow();
                if (value !== null) mappedKeys.set(vToK2(value), originalKey);
            }
        });

        return new (class implements RFMap<K2, V> {
            private readonly _forUpdate = new EventConsumer<RMap.Update<K2, ARFutureWithFlag<V>>>();
            private readonly _forRemove = new EventConsumer<RMap.Entry<K2, ARFutureWithFlag<V>>>();

            constructor() {
                self.forUpdate().add(u => {
                    u.newValue?.to((v: V): void => {
                        const newKey = vToK2(v);
                        const oldOriginalKey = mappedKeys.get(newKey);
                        if (oldOriginalKey !== undefined && oldOriginalKey !== u.key) { self.delete(oldOriginalKey); }
                        mappedKeys.set(newKey, u.key);
                        this._forUpdate.fire({ key: newKey, newValue: u.newValue, oldValue: u.oldValue } as RMap.Update<K2, ARFutureWithFlag<V>>);
                    });
                });
                self.forRemove().add(e => {
                    e.value?.to((v: V): void => {
                        const k2 = vToK2(v);
                        if (mappedKeys.get(k2) === e.key) {
                            mappedKeys.delete(k2);
                            this._forRemove.fire({ key: k2, value: e.value } as RMap.Entry<K2, ARFutureWithFlag<V>>);
                        }
                    }, (_e: Error): void => { /* ignore error */ });
                });
            }

            // Map methods
            get size(): number { return mappedKeys.size; }
            get(key: K2): ARFutureWithFlag<V> | undefined {
                const originalKey = mappedKeys.get(key);
                return originalKey !== undefined ? self.get(originalKey) : undefined;
            }
            set(key: K2, value: ARFutureWithFlag<V>): this { throw new Error("Cannot put directly to mapped RFMap"); }
            delete(key: K2): boolean {
                const originalKey = mappedKeys.get(key);
                if (originalKey !== undefined) {
                    const removed = self.delete(originalKey);
                    if (removed) mappedKeys.delete(key);
                    return removed;
                }
                return false;
            }
            has(key: K2): boolean { return mappedKeys.has(key); }
            clear(): void { mappedKeys.forEach(k => self.delete(k)); mappedKeys.clear(); }
            forEach(callbackfn: (value: ARFutureWithFlag<V>, key: K2, map: RMap<K2, ARFutureWithFlag<V>>) => void, _thisArg?: any): void { mappedKeys.forEach((originalKey, key) => callbackfn.call(_thisArg, self.get(originalKey)!, key, this as unknown as RMap<K2, ARFutureWithFlag<V>>)); }
            [Symbol.iterator](): IterableIterator<[K2, ARFutureWithFlag<V>]> {
                const entriesIterator = function* (m: Map<K2, K>, src: RFMap<K, V>): IterableIterator<[K2, ARFutureWithFlag<V>]> {
                    for (const [k2, k] of m.entries()) {
                        yield [k2, src.get(k)!];
                    }
                };
                return entriesIterator(mappedKeys, self);
            }
            keys(): IterableIterator<K2> { return mappedKeys.keys(); }
            public values(): IterableIterator<ARFutureWithFlag<V>> {
                const valuesIterator = function* (m: Map<K2, K>, src: RFMap<K, V>): IterableIterator<ARFutureWithFlag<V>> {
                    for (const originalKey of m.values()) {
                        yield src.get(originalKey)!;
                    }
                };
                return valuesIterator(mappedKeys, self);
            }
            entries(): IterableIterator<[K2, ARFutureWithFlag<V>]> {
                const entriesIterator = function* (m: Map<K2, K>, src: RFMap<K, V>): IterableIterator<[K2, ARFutureWithFlag<V>]> {
                    for (const [k2, k] of m.entries()) {
                        yield [k2, src.get(k)!];
                    }
                };
                return entriesIterator(mappedKeys, self);
            }

            // RMap/RFMap methods
            public forUpdate(): EventConsumer<RMap.Update<K2, ARFutureWithFlag<V>>> { return this._forUpdate; }
            public forRemove(): EventConsumer<RMap.Entry<K2, ARFutureWithFlag<V>>> { return this._forRemove; }
            mapToFutures(): RFMap<K2, ARFutureWithFlag<V>> { throw new Error("mapToFutures() is not implemented on mapped RFMap."); }
            mapVal<V2>(_v1ToV2: AFunction<ARFutureWithFlag<V>, V2>, _v2ToV1?: AFunction<V2, ARFutureWithFlag<V>>): RMap<K2, V2> { throw new Error("Method not implemented for RFMapDefaultImpl."); }
            map<K3, V2>(_k1ToK2: AFunction<K2, K3>, _k2ToK1: AFunction<K3, K2>, _v1ToV2: AFunction<ARFutureWithFlag<V>, V2>, _v2ToV1: AFunction<V2, ARFutureWithFlag<V>>): RMap<K3, V2> { throw new Error("Method not implemented for RFMapDefaultImpl."); }
            mapKey<K3>(_k1ToK2: ABiFunction<K2, ARFutureWithFlag<V>, K3>): RMap<K3, ARFutureWithFlag<V>> { throw new Error("Method not implemented for RFMapDefaultImpl."); }

            // RFMap methods: Delegate mapKeyFuture/mapFuture using the correct `this` (K2)
            mapValFuture<V2>(vToV2: AFunction<V, V2>, v2ToV: AFunction<V2, V>): RFMap<K2, V2> { return RCol.rfMapImpl(this).mapValFuture(vToV2, v2ToV); }
            mapKeyFuture<K3>(vToK2: AFunction<V, K3>, vToK: AFunction<V, K2>): RFMap<K3, V> {
                 return RCol.rfMapImpl(this as unknown as RFMap<K2, V>).mapKeyFuture(vToK2, vToK as AFunction<V, K2>);
            }
            mapFuture<K3, V2>(kToK2: AFunction<K2, K3>, k2ToK: AFunction<K3, K2>, vToV2: AFunction<V, V2>, v2ToV: AFunction<V2, V>): RFMap<K3, V2> {
                 return RCol.rfMapImpl(this as unknown as RFMap<K2, V>).mapFuture(kToK2, k2ToK, vToV2, v2ToV);
            }
        }) as RFMap<K2, V>;
    }

    public mapFuture<K2, V2>(kToK2: AFunction<K, K2>, k2ToK: AFunction<K2, K>, vToV2: AFunction<V, V2>, v2ToV: AFunction<V2, V>): RFMap<K2, V2> {
        // FIX: Explicit return types for lambdas to avoid 'any' compilation error.
        // NOTE: k2ToK is unused in the implemented logic, matching the Java source.
        return this.mapKeyFuture(
            (_v: V): K2 => kToK2(null!) as K2,
            (_v: V): K => null! as K
        ).mapValFuture(vToV2, v2ToV);
    }
}
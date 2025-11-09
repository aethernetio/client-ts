/**
 * @file aether_rcollection.ts
 * @purpose Contains reactive collection implementations (RMap, RSet, RQueue, BMap).
 * @dependencies aether.types.ts, aether.logging.ts, aether.utils.ts, aether_future.ts
 *
 * @version 4.0.0
 * @description Убраны ограничения `extends JObj`.
 * CustomHashMap теперь использует гибридный подход:
 * 1. .hashCode()/.equals() для объектов, где они есть.
 * 2. Стандартное хеширование/сравнение для примитивов (number, string, bigint).
 * 3. `allRequests` и `BMapSender.requests` в BMapImpl используют CustomHashMap.
 */

import {
    AConsumer,
    AFunction,
    ABiFunction,
    JObj // Интерфейс JObj используется только для type-guard
} from './aether_types';
import {
    EventConsumer
} from './aether_future';
import {
    ARFutureWithFlag,
} from './aether_future';
import { Log } from './aether_logging';

// =============================================================================================
// SECTION 0: CustomHashMap (Гибридная реализация HashMap)
// =============================================================================================

/**
 * Внутренняя реализация HashMap, использующая .hashCode() и .equals()
 * для объектов (если они есть) и стандартную логику для примитивов.
 * @template K The key type.
 * @template V The value type.
 */
class CustomHashMap<K, V> {
    // Карта: hashCode -> "Бакет" (массив пар [ключ, значение])
    private buckets = new Map<number, Array<[K, V]>>();
    private _size = 0;

    constructor(initialEntries?: Iterable<[K, V]>) {
        if (initialEntries) {
            for (const [key, value] of initialEntries) {
                this.set(key, value);
            }
        }
    }

    /**
     * Возвращает хэш-код для ключа.
     * Проверяет наличие .hashCode(), иначе использует хэш от String(key).
     */
    private _getHash(key: K): number {
        if (key === null || key === undefined) return 0;

        // 1. Объект с JObj-контрактом
        if (typeof key === 'object' && typeof (key as any).hashCode === 'function') {
            return (key as any).hashCode();
        }

        // 2. Примитивы
        if (typeof key === 'number') {
            return key | 0; // Простой хэш для чисел
        }

        if (typeof key === 'bigint') {
            const hash = key ^ (key >> 32n); // Java's Long.hashCode
            return Number(hash & 0xFFFFFFFFn) | 0;
        }

        if (typeof key === 'string') {
            let hash = 0;
            for (let i = 0; i < key.length; i++) {
                hash = (31 * hash + key.charCodeAt(i)) | 0;
            }
            return hash;
        }

        // 3. Fallback для других типов (boolean, etc.)
        const s = String(key);
        let hash = 0;
        for (let i = 0; i < s.length; i++) {
            hash = (31 * hash + s.charCodeAt(i)) | 0;
        }
        return hash;
    }

    /**
     * Сравнивает два ключа на равенство.
     * Проверяет наличие .equals(), иначе использует ===.
     */
    private _isEqual(keyA: K, keyB: K): boolean {
        if (keyA === keyB) return true;
        if (keyA === null || keyA === undefined) return (keyB === null || keyB === undefined);
        if (keyB === null || keyB === undefined) return false;

        // 1. Объект с JObj-контрактом
        if (typeof keyA === 'object' && typeof (keyA as any).equals === 'function') {
            return (keyA as any).equals(keyB);
        }

        // 2. Примитивы (уже покрыты ===, но на всякий случай)
        // (bigint === bigint) работает корректно для значений
        // (number === number) работает корректно
        // (string === string) работает корректно

        // 3. Fallback (разные объекты без .equals)
        return false;
    }

    set(key: K, value: V): this {
        const hash = this._getHash(key);
        let bucket = this.buckets.get(hash);

        if (!bucket) {
            // Новый бакет
            this.buckets.set(hash, [[key, value]]);
            this._size++;
            return this;
        }

        // Бакет существует, ищем ключ
        for (const entry of bucket) {
            if (this._isEqual(entry[0], key)) {
                // Ключ найден, обновляем значение
                entry[1] = value;
                return this;
            }
        }

        // Ключ не найден, добавляем новую пару (коллизия)
        bucket.push([key, value]);
        this._size++;
        return this;
    }

    get(key: K): V | undefined {
        const bucket = this.buckets.get(this._getHash(key));
        if (!bucket) {
            return undefined;
        }

        for (const entry of bucket) {
            if (this._isEqual(entry[0], key)) {
                return entry[1]; // Ключ найден
            }
        }

        return undefined; // Ключ не найден в бакете
    }

    has(key: K): boolean {
        const bucket = this.buckets.get(this._getHash(key));
        if (!bucket) {
            return false;
        }
        for (const entry of bucket) {
            if (this._isEqual(entry[0], key)) {
                return true;
            }
        }
        return false;
    }

    delete(key: K): boolean {
        const hash = this._getHash(key);
        const bucket = this.buckets.get(hash);
        if (!bucket) {
            return false;
        }

        for (let i = 0; i < bucket.length; i++) {
            if (this._isEqual(bucket[i][0], key)) {
                // Ключ найден, удаляем
                bucket.splice(i, 1);
                this._size--;
                // Если бакет пуст, удаляем и его
                if (bucket.length === 0) {
                    this.buckets.delete(hash);
                }
                return true;
            }
        }

        return false; // Ключ не найден
    }

    get size(): number {
        return this._size;
    }

    clear(): void {
        this.buckets.clear();
        this._size = 0;
    }

    // --- Iterators ---

    *entries(): IterableIterator<[K, V]> {
        for (const bucket of this.buckets.values()) {
            yield* bucket;
        }
    }

    *[Symbol.iterator](): IterableIterator<[K, V]> {
        yield* this.entries();
    }

    *keys(): IterableIterator<K> {
        for (const bucket of this.buckets.values()) {
            for (const entry of bucket) {
                yield entry[0];
            }
        }
    }

    *values(): IterableIterator<V> {
        for (const bucket of this.buckets.values()) {
            for (const entry of bucket) {
                yield entry[1];
            }
        }
    }

    forEach(callbackfn: (value: V, key: K, map: this) => void, thisArg?: any): void {
        for (const bucket of this.buckets.values()) {
            for (const [key, value] of bucket) {
                callbackfn.call(thisArg, value, key, this);
            }
        }
    }
}


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
 * @template K The key type.
 * @template V The value type.
 */
export interface RMap<K, V> extends Iterable<[K, V]> {
    // --- Standard Map Properties & Methods ---
    readonly size: number;
    set(key: K, value: V): this;
    get(key: K): V | undefined;
    has(key: K): boolean;
    delete(key: K): boolean;
    clear(): void;
    forEach(callbackfn: (value: V, key: K, map: RMap<K, V>) => void, thisArg?: any): void;
    entries(): IterableIterator<[K, V]>;
    keys(): IterableIterator<K>;
    values(): IterableIterator<V>;
    [Symbol.iterator](): IterableIterator<[K, V]>;

    // --- Reactive Methods ---
    forUpdate(): EventConsumer<RMapUpdate<K, V>>;
    forRemove(): EventConsumer<RMapEntry<K, V>>;
    mapVal<V2>(v1ToV2: AFunction<V | null, V2 | null>, v2ToV1: AFunction<V2 | null, V | null>): RMap<K, V2>;
    map<K2, V2>(
        k1ToK2: AFunction<K, K2>, k2ToK1: AFunction<K2, K>,
        v1ToV2: AFunction<V | null, V2 | null>, v2ToV1: AFunction<V2 | null, V | null>
    ): RMap<K2, V2>;
    mapKey<K2>(k1ToK2: ABiFunction<K, V, K2>): RMap<K2, V>;
    link(other: RMap<K, V>): void;
    mapToFutures(): RFMap<K, V>;
}

/**
 * Base implementation for RMap that wraps a **CustomHashMap**.
 * @template K The key type.
 * @template V The value type.
 */
export class RMapBySrc<K, V> implements RMap<K, V> {
    public readonly [Symbol.toStringTag] = "RMap";

    private readonly updateEvent = new EventConsumer<RMapUpdate<K, V>>();
    private readonly removeEvent = new EventConsumer<RMapEntry<K, V>>();

    /**
     * @param src The underlying CustomHashMap instance to wrap.
     */
    constructor(protected readonly src: CustomHashMap<K, V>) { }

    public forUpdate(): EventConsumer<RMapUpdate<K, V>> { return this.updateEvent; }
    public forRemove(): EventConsumer<RMapEntry<K, V>> { return this.removeEvent; }

    /**
     * Внутренний метод сравнения, используется в mapKeyFuture
     */
    protected _isEqual(keyA: any, keyB: any): boolean {
        if (keyA === keyB) return true;
        if (keyA === null || keyA === undefined) return (keyB === null || keyB === undefined);
        if (keyB === null || keyB === undefined) return false;

        // 1. Объект с JObj-контрактом
        if (typeof keyA === 'object' && typeof (keyA as any).equals === 'function') {
            return (keyA as any).equals(keyB);
        }

        return false;
    }


    public set(key: K, value: V): this {
        const oldValue = this.src.get(key) ?? null;
        if (oldValue === value || (oldValue !== null && this._isEqual(oldValue, value))) {
            return this;
        }
        this.src.set(key, value);
        this.updateEvent.fire(new RMapUpdate(key, value, oldValue));
        return this;
    }

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

    public clear(): void {
        for (const [key, value] of this.src.entries()) {
            // Must fire event for each removed item
            this.removeEvent.fire({ key: key, value: value });
        }
        this.src.clear();
    }

    public get(key: K): V | undefined {
        return this.src.get(key);
    }

    public has(key: K): boolean {
        return this.src.has(key);
    }

    public get size(): number {
        return this.src.size;
    }

    public forEach(callbackfn: (value: V, key: K, map: RMap<K, V>) => void, thisArg?: any): void {
        this.src.forEach((value, key) => {
            callbackfn.call(thisArg, value, key, this);
        });
    }

    public [Symbol.iterator](): IterableIterator<[K, V]> {
        return this.src[Symbol.iterator]();
    }

    public entries(): IterableIterator<[K, V]> {
        return this.src.entries();
    }

    public keys(): IterableIterator<K> {
        return this.src.keys();
    }

    public values(): IterableIterator<V> {
        return this.src.values();
    }

    public mapVal<V2>(v1ToV2: AFunction<V | null, V2 | null>, v2ToV1: AFunction<V2 | null, V | null>): RMap<K, V2> {
        return this.map(k => k, k => k, v1ToV2, v2ToV1);
    }

    public map<K2, V2>(
        k1ToK2: AFunction<K, K2>, k2ToK1: AFunction<K2, K>,
        v1ToV2: AFunction<V | null, V2 | null>, v2ToV1: AFunction<V2 | null, V | null>
    ): RMap<K2, V2> {

        const resMap = new CustomHashMap<K2, V2>();
        for (const [k, v] of this.entries()) {
            resMap.set(k1ToK2(k), v1ToV2(v)!);
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

    public mapToFutures(): RFMap<K, V> {
        const map2 = new CustomHashMap<K, ARFutureWithFlag<V>>();

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

        for (const [key, value] of this.entries()) {
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
 * @template K The key type.
 * @template V The value type held by the future.
 */
export interface RFMap<K, V> extends RMap<K, ARFutureWithFlag<V>> {
    mapValFuture<V2>(vToV2: AFunction<V, V2>, v2ToV: AFunction<V2, V>): RFMap<K, V2>;
    mapKeyFuture<K2>(vToK2: AFunction<V, K2>): RFMap<K2, V>;
}

/**
 * Contains implementations for RFMap default methods.
 */
namespace RFMapImpl {

    /**
     * Внутренняя (private) функция. Не экспортируется.
     */
    const _isEqual = (keyA: any, keyB: any): boolean => {
        if (keyA === keyB) return true;
        if (keyA === null || keyA === undefined) return (keyB === null || keyB === undefined);
        if (keyB === null || keyB === undefined) return false;

        if (typeof keyA === 'object' && typeof (keyA as any).equals === 'function') {
            return (keyA as any).equals(keyB);
        }

        return false;
    };


    /**
     * Implementation for RFMap.mapValFuture.
     */
    export function mapValFuture<K, V, V2>(this: RFMap<K, V>, vToV2: AFunction<V, V2>, v2ToV: AFunction<V2, V>): RFMap<K, V2> {
        const newMap = new CustomHashMap<K, ARFutureWithFlag<V2>>();
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
        const newMap = new CustomHashMap<K2, ARFutureWithFlag<V>>();
        const res: RFMap<K2, V> = RCol.of(newMap) as unknown as RFMap<K2, V>;
        const keyMapping = new CustomHashMap<K2, K>();

        const processEntry = (key: K, future: ARFutureWithFlag<V> | null) => {
            if (!future) return;

            const processValue = (v: V) => {
                const newKey = vToK2(v);
                const oldOriginalKey = keyMapping.get(newKey);

                // *** ИСПРАВЛЕНИЕ: Используем локальный _isEqual ***
                if (oldOriginalKey && !_isEqual(oldOriginalKey, key)) {
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
            for (const [k2, k] of keyMapping.entries()) {
                // *** ИСПРАВЛЕНИЕ: Используем локальный _isEqual ***
                if (_isEqual(k, e.key)) {
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
 * @template K The key type.
 * @template V The value type to be retrieved asynchronously.
 */
export interface BMap<K, V> extends RFMap<K, V> {
    getFuture(key: K): ARFutureWithFlag<V>;
    getPendingRequests(): Set<K>; // Возвращает JS Set
    putResolved(key: K, value: V): void;
    putResolved(key: K, updater: AConsumer<V>, value: V): void;
    putError(key: K, error: Error): void;
    forValueUpdate(): EventConsumer<RMapUpdate<K, V>>;
    getRequestsFor(sender: object): K[];
    isRequests(): boolean;
    isRequestsFor(sender: object): boolean;
}

/**
 * Represents a single network sender/flusher.
 * @template K The key type.
 * @internal
 */
class BMapSender<K> {
    /**
     * **ИЗМЕНЕНО:** Используем CustomHashMap как HashSet
     */
    public readonly requests = new CustomHashMap<K, true>();

    constructor(allRequests: CustomHashMap<K, true>) {
        allRequests.forEach((_v, k) => this.requests.set(k, true));
    }

    public extract(): K[] {
        const r = Array.from(this.requests.keys());
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
     * **ИЗМЕНЕНО:** Используем CustomHashMap как HashSet
     */
    private readonly allRequests = new CustomHashMap<K, true>();

    private readonly valueUpdate = new EventConsumer<RMapUpdate<K, V>>();

    /**
     * **ОСТАВЛЕНО:** Используем стандартный `Map`.
     * Ключи - это объекты `ConnectionWork` (sender), для них
     * нам нужно равенство по ССЫЛКЕ (===).
     */
    private readonly senders = new Map<object, BMapSender<K>>();

    constructor(
        _initialCapacity: number,
        _name: string,
        _timeoutMs: number
    ) {
        super(new CustomHashMap<K, ARFutureWithFlag<V>>());
    }

    private getOrCreateFuture(key: K): ARFutureWithFlag<V> {
        let future = this.src.get(key); // `get` из CustomHashMap
        if (!future) {
            future = new ARFutureWithFlag<V>();
            this.src.set(key, future); // `set` из CustomHashMap

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

    private removeRequest(key: K): boolean {
        // `delete` из CustomHashMap
        const res = this.allRequests.delete(key);
        for (const s of this.senders.values()) {
            s.requests.delete(key);
        }
        return res;
    }

    private addRequest(key: K): void {
        // `set` из CustomHashMap
        this.allRequests.set(key, true);
        for (const s of this.senders.values()) {
            s.requests.set(key, true);
        }
    }

    private getSender(k: object): BMapSender<K> {
        // `get`/`set` для `senders` использует ===
        let sender = this.senders.get(k);
        if (!sender) {
            sender = new BMapSender<K>(this.allRequests);
            this.senders.set(k, sender);
        }
        return sender;
    }

    public getFuture(key: K): ARFutureWithFlag<V> {
        return this.getOrCreateFuture(key);
    }

    public getPendingRequests(): Set<K> {
        return new Set(this.allRequests.keys());
    }

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

    public putError(key: K, error: Error): void {
        const future = this.getOrCreateFuture(key);
        future.tryError(error);
    }

    public forValueUpdate(): EventConsumer<RMapUpdate<K, V>> {
        return this.valueUpdate;
    }

    public getRequestsFor(sender: object): K[] {
        return this.getSender(sender).extract();
    }

    public isRequests(): boolean {
        return this.allRequests.size > 0;
    }

    public isRequestsFor(sender: object): boolean {
        // Мы не можем просто проверить `this.senders.has(sender)`,
        // т.к. sender мог быть создан, но очередь его пуста.
        // `getSender` создаст его, если его нет, и мы проверим его .requests.size
        return this.getSender(sender).requests.size > 0;
    }

    public get(key: K): ARFutureWithFlag<V> | undefined {
        return this.getFuture(key);
    }

    public set(key: K, value: ARFutureWithFlag<V>): this {
        throw new Error("Cannot .set() a future directly on BMap. Use putResolved() or putError().");
    }

    public delete(key: K): boolean {
        this.removeRequest(key);
        const future = this.src.get(key); // `get` из CustomHashMap
        if (future) {
            future.cancel();
        }
        return super.delete(key); // `delete` из RMapBySrc
    }

    // --- ADDED METHODS TO SATISFY RFMap INTERFACE ---

    public mapValFuture<V2>(vToV2: AFunction<V, V2>, v2ToV: AFunction<V2, V>): RFMap<K, V2> {
        return RFMapImpl.mapValFuture.bind(this)(vToV2, v2ToV);
    }

    public mapKeyFuture<K2>(vToK2: AFunction<V, K2>): RFMap<K2, V> {
        return RFMapImpl.mapKeyFuture.bind(this)(vToK2);
    }
}


// =============================================================================================
// SECTION 4: RCollection (Reactive Collection)
// =============================================================================================

/**
 * A reactive Collection interface.
 * @template T The element type.
 */
export interface RCollection<T> extends Iterable<T> {
    forAdd(): EventConsumer<T>;
    forRemove(): EventConsumer<T>;
    readonly size: number;
    isEmpty(): boolean;
    contains(o: T): boolean;
    add(e: T): boolean;
    remove(o: T): boolean;
    clear(): void;
    addAll(c: Iterable<T>): boolean;
    removeAll(c: Iterable<T>): boolean;
    retainAll(c: Iterable<T>): boolean;
    map<T2>(f: AFunction<T, T2>, f2: AFunction<T2, T>): RCollection<T2>;
}

/**
 * Base implementation for RCollection.
 * @template T The element type.
 * @template S The underlying storage type.
 */
export abstract class RCollectionBySrc<T, S extends Set<T> | Array<T> | CustomHashMap<T, any>> implements RCollection<T> {

    protected readonly forAddEvent = new EventConsumer<T>();
    protected readonly forRemoveEvent = new EventConsumer<T>();

    constructor(protected readonly src: S) { }

    public forAdd(): EventConsumer<T> { return this.forAddEvent; }
    public forRemove(): EventConsumer<T> { return this.forRemoveEvent; }

    public get size(): number {
        if (this.src instanceof CustomHashMap) {
            return this.src.size;
        }
        return (this.src as Set<T>).size ?? (this.src as Array<T>).length;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    protected add0(val: T): void {
        this.forAddEvent.fire(val);
    }

    protected remove0(val: T): void {
        this.forRemoveEvent.fire(val);
    }

    public abstract [Symbol.iterator](): IterableIterator<T>;
    public abstract contains(o: T): boolean;
    public abstract add(e: T): boolean;
    public abstract remove(o: T): boolean;
    public abstract clear(): void;


    public addAll(c: Iterable<T>): boolean {
        let modified = false;
        for (const e of c) {
            if (this.add(e)) {
                modified = true;
            }
        }
        return modified;
    }

    public removeAll(c: Iterable<T>): boolean {
        let modified = false;
        for (const e of c) {
            if (this.remove(e)) {
                modified = true;
            }
        }
        return modified;
    }

    public retainAll(c: Iterable<T>): boolean {
        // Используем стандартный Set для retainSet, т.к. JObj не гарантирован
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

    public map<T2>(f: AFunction<T, T2>, f2: AFunction<T2, T>): RCollection<T2> {
        // Используем стандартный Set для mappedSet
        const mappedSet = new Set<T2>();
        for (const e of this) {
            mappedSet.add(f(e));
        }
        // RCol.of(Set) вернет RSetBySrc<T2, CustomHashMap<T2, true>>
        // что требует T2 extends JObj.
        // Меняем на RCol.queue()
        const res: RCollection<T2> = RCol.queue<T2>();
        mappedSet.forEach(e => res.add(e));


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
 * @template T The element type.
 */
export interface RSet<T> extends RCollection<T> {
    has(value: T): boolean;
    delete(value: T): boolean;
    forEach(callbackfn: (value: T, value2: T, set: RSet<T>) => void, thisArg?: any): void;
    entries(): IterableIterator<[T, T]>;
    keys(): IterableIterator<T>;
    values(): IterableIterator<T>;
    link<T2>(other: RSet<T2>, f: AFunction<T, T2>, back: AFunction<T2, T>): void;
    link(other: RSet<T>): void;
    map<T2>(f: AFunction<T, T2>, f2: AFunction<T2, T>): RSet<T2>;
    map<T2>(f: AFunction<T, T2>): RSet<T2>;
}

/**
 * Implementation of RSet wrapping a **CustomHashMap**.
 * @template T The element type.
 */
export class RSetBySrc<T> extends RCollectionBySrc<T, CustomHashMap<T, true>> implements RSet<T> {
    public readonly [Symbol.toStringTag] = "RSet";

    constructor(src: CustomHashMap<T, true>) {
        super(src);
    }

    public [Symbol.iterator](): IterableIterator<T> {
        return this.src.keys();
    }
    public contains(o: T): boolean {
        return this.src.has(o);
    }
    public add(e: T): boolean {
        if (this.src.has(e)) {
            return false;
        }
        this.src.set(e, true);
        this.add0(e);
        return true;
    }
    public remove(o: T): boolean {
        const result = this.src.delete(o);
        if (result) {
            this.remove0(o);
        }
        return result;
    }
    public clear(): void {
        for (const e of this.src.keys()) {
            this.remove0(e);
        }
        this.src.clear();
    }
    public *entries(): IterableIterator<[T, T]> {
        for (const k of this.src.keys()) {
            yield [k, k];
        }
    }
    public keys(): IterableIterator<T> {
        return this.src.keys();
    }
    public values(): IterableIterator<T> {
        return this.src.keys();
    }
    public forEach(callbackfn: (value: T, value2: T, set: RSet<T>) => void, thisArg?: any): void {
        this.src.forEach((_v, k) => {
            callbackfn.call(thisArg, k, k, this);
        });
    }
    public has(value: T): boolean {
        return this.src.has(value);
    }
    public delete(value: T): boolean {
        return this.remove(value);
    }

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

    public map<T2>(f: AFunction<T, T2>, f2?: AFunction<T2, T>): RSet<T2> {
        if (f2) {
            return super.map(f, f2) as RSet<T2>;
        } else {
            const res = RCol.set<T2>();
            this.forAdd().add(v => { res.add(f(v)); });
            this.forRemove().add(v => { res.remove(f(v)); });
            for (const e of this) { res.add(f(e)); }
            return res;
        }
    }
}


// =============================================================================================
// SECTION 6: RQueue (Reactive Queue)
// =============================================================================================

/**
 * A reactive Queue interface.
 * @template T The element type.
 */
export interface RQueue<T> extends RCollection<T> {
    offer(e: T): boolean;
    poll(): T | null;
    element(): T;
    peek(): T | null;
}

/**
 * Implementation of RQueue wrapping a standard Array (as a FIFO queue).
 * @template T The element type.
 */
export class RQueueBySrc<T> extends RCollectionBySrc<T, Array<T>> implements RQueue<T> {
    public readonly [Symbol.toStringTag] = "RQueue";

    constructor(src: Array<T>) {
        super(src);
    }
    public [Symbol.iterator](): IterableIterator<T> {
        return this.src[Symbol.iterator]();
    }
    public contains(o: T): boolean {
        return this.src.includes(o);
    }
    public add(e: T): boolean {
        this.src.push(e);
        this.add0(e);
        return true;
    }
    public remove(o: T): boolean {
        const index = this.src.indexOf(o);
        if (index > -1) {
            this.src.splice(index, 1);
            this.remove0(o);
            return true;
        }
        return false;
    }
    public clear(): void {
        for (const e of this.src) {
            this.remove0(e);
        }
        this.src.length = 0;
    }
    public offer(e: T): boolean {
        return this.add(e);
    }
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
    public element(): T {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.src[0];
    }
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
    export function of<T>(src: Array<T>): RQueue<T>;
    export function of<T>(src: Set<T>): RSet<T>;
    export function of<K, V>(src: Map<K, V>): RMap<K, V>;
    export function of<K, V>(src: CustomHashMap<K, V>): RMap<K, V>;
    export function of<T>(src: Iterable<T>): RSet<T>;
    export function of<T, K, V>(
        src: Set<T> | Array<T> | Map<K, V> | CustomHashMap<K, V> | Iterable<T>
    ): RSet<T> | RQueue<T> | RMap<K, V> | RCollection<T> {

        if (src instanceof Array) {
            return new RQueueBySrc(src);
        }
        if (src instanceof CustomHashMap) {
            return new RMapBySrc(src as CustomHashMap<K, V>);
        }
        if (src instanceof Map) {
            return new RMapBySrc(new CustomHashMap<K, V>(src.entries()));
        }
        if (src instanceof Set) {
            const customMap = new CustomHashMap<T, true>();
            src.forEach(e => customMap.set(e, true));
            return new RSetBySrc(customMap);
        }
        if (typeof (src as Iterable<T>)[Symbol.iterator] === 'function') {
            const customMap = new CustomHashMap<T, true>();
            for (const e of (src as Iterable<T>)) {
                customMap.set(e, true);
            }
            return new RSetBySrc(customMap);
        }
        throw new Error("Unsupported source type for RCol.of");
    }

    /**
     * Creates a new, empty, reactive RMap (backed by CustomHashMap).
     */
    export function map<K, V>(): RMap<K, V> {
        return new RMapBySrc(new CustomHashMap<K, V>());
    }

    /**
     * Creates a new, empty, reactive RSet (backed by CustomHashMap).
     */
    export function set<T>(): RSet<T> {
        return new RSetBySrc(new CustomHashMap<T, true>());
    }

    /**
     * Creates a new, empty, reactive RQueue.
     */
    export function queue<T>(): RQueue<T> {
        return new RQueueBySrc(new Array<T>());
    }

    export function bMap<K, V>(timeoutMs: number, name: string): BMap<K, V>;
    export function bMap<K, V>(): BMap<K, V>;
    export function bMap<K, V>(timeoutMs?: number, name?: string): BMap<K, V> {
        const finalTimeout = timeoutMs ?? 4000;
        const finalName = name ?? "GenericBMap";
        return new BMapImpl<K, V>(10, finalName, finalTimeout);
    }
}
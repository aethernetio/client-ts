/* eslint-disable @typescript-eslint/no-explicit-any */
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
    AFunction,
    ABiFunction,
    Tuple2
} from './aether_types';
import {
    ARFuture,
    EventConsumer,
    Future,
} from './aether_future';
import {
    ARFutureWithFlag,
} from './aether_future';
import { Log } from './aether_logging';
import { Queue, RU } from './aether_utils';

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
/**
 * Высокопроизводительный асинхронный кеш.
 * Портирован из Java версии io.aether.utils.rcollections.BMap
 */
export class BMap<K, V> {
    private static readonly ERROR_ENTRY = new Error("Queue overflow");
    private static readonly networkTimeout = new Error("Network timeout");
    public static secondTimeout = 5;

    private readonly map = new Map<K, BMap.BMapEntry<V>>();
    private readonly toRequestQueue = new Queue<K>();
    private readonly abandonedInRequestQueue: Error;

    private readonly mapName: string;
    private readonly globalTimeoutMs: number;
    private readonly maxQueueSize: number;

    // Статистика (аналог LongAdder)
    private _hits = 0;
    private _misses = 0;
    private _timeouts = 0;
    private _overflows = 0;
    public has(key: K): boolean {
        return this.map.has(key);
    }
    constructor(name: string, timeout: number, maxQueueSize: number) {
        this.mapName = name;
        this.globalTimeoutMs = timeout > 0 ? timeout : 10;
        this.maxQueueSize = maxQueueSize > 0 ? maxQueueSize : 10000;
        this.abandonedInRequestQueue = new Error(`Abandoned in request queue: ${name}`);
    }

    public putError(key: K, e: Error): void {
        const entry = this.map.get(key);
        if (entry) {
            this.map.delete(key);
            // В JS Queue нет эффективного удаления по значению,
            // логика pollNextRequest сама пропустит удаленные из Map ключи.
            entry.fail(RU.timeSeconds(), e);
        }
    }

    public getFuture(key: K): ARFuture<V>;
    public getFuture(timeout: number, key: K): ARFuture<V>;
    public getFuture(arg1: any, arg2?: any): ARFuture<V> {
        if (arg2 !== undefined) {
            return this.get(arg2).toFuture(arg1);
        }
        return this.get(arg1).toFuture(BMap.secondTimeout);
    }

    public getAllAsFuture<E>(timeout: number, keys: K[], resultConverter: AFunction<V[], E>): ARFuture<E> {
        const res = ARFuture.make<E>();
        this.getAll(timeout, keys, {
            onResolved: (value: V[]) => {
                try {
                    res.done(resultConverter(value));
                } catch (e) {
                    res.tryError(e as Error);
                }
            },
            onError: (time: number, error: Error) => res.tryError(error)
        });
        return res;
    }

    public getAll(timeout: number, keys: K[], result: Future<V[]>): void {
        if (!keys || keys.length === 0) {
            result.onResolved([]);
            return;
        }

        const size = keys.length;
        const data: V[] = new Array(size);
        let firstError: Error | null = null;
        let remaining = size;

        for (let i = 0; i < size && firstError === null; i++) {
            const index = i;
            const entry = this.get(keys[i]);

            if (entry.isResolved()) {
                data[index] = entry.value!;
                if (--remaining === 0 && firstError === null) {
                    result.onResolved(data);
                }
                continue;
            }

            if (entry.isError()) {
                firstError = entry.getError()!;
                remaining = 0;
                result.onError(0, firstError);
                return;
            }

            entry.listen(timeout, {
                onResolved: (value: V) => {
                    if (firstError !== null) return;
                    data[index] = value;
                    if (--remaining === 0) {
                        result.onResolved(data);
                    }
                },
                onError: (time: number, error: Error) => {
                    if (firstError === null) {
                        firstError = error;
                        remaining = 0;
                        result.onError(time, error);
                    }
                }
            });
        }
    }

    public getTryAll(timeout: number, keys: K[], result: Future<Tuple2<V[], Error[]>>): void {
        if (!keys || keys.length === 0) {
            result.onResolved([[], []]);
            return;
        }

        const size = keys.length;
        const values: V[] = new Array(size);
        const errors: Error[] = new Array(size);
        let remaining = size;

        const checkComplete = () => {
            if (--remaining === 0) {
                result.onResolved([values, errors]);
            }
        };

        for (let i = 0; i < size; i++) {
            const index = i;
            const entry = this.get(keys[i]);

            if (entry.isResolved()) {
                values[index] = entry.value!;
                checkComplete();
                continue;
            }

            if (entry.isError()) {
                errors[index] = entry.getError()!;
                checkComplete();
                continue;
            }

            entry.listen(timeout, {
                onResolved: (value: V) => {
                    values[index] = value;
                    checkComplete();
                },
                onError: (time: number, error: Error) => {
                    errors[index] = error;
                    checkComplete();
                }
            });
        }
    }

    public get(key: K): BMap.BMapEntry<V> {
        let entry = this.map.get(key);
        if (entry) {
            if (entry.value !== null) this._hits++;
            return entry;
        }

        this._misses++;
        if (this.toRequestQueue.size() >= this.maxQueueSize) {
            this._overflows++;
            const errEntry = new BMap.BMapEntry<V>(BMap.ERROR_ENTRY);
            // Не сохраняем ошибку переполнения в мапу, чтобы была возможность повторить позже
            return errEntry;
        }

        const newEntry = new BMap.BMapEntry<V>(null);
        this.map.set(key, newEntry);
        this.toRequestQueue.add(key);
        return newEntry;
    }

    public pollAllRequests(): K[] {
        const res: K[] = [];
        while (!this.toRequestQueue.isEmpty()) {
            const req = this.pollNextRequest();
            if (req !== null) res.push(req);
        }
        return res;
    }

    public pollNextRequest(): K | null {
        const key = this.toRequestQueue.poll();
        if (key === undefined || key === null) return null;

        const entry = this.map.get(key);
        if (entry) {
            if (entry.value !== null) return this.pollNextRequest();
            entry.sentAt = Date.now();
            return key;
        }
        return this.pollNextRequest();
    }

    public put(key: K, value: V): void {
        let entry = this.map.get(key);
        if (!entry) {
            entry = new BMap.BMapEntry<V>(null);
            this.map.set(key, entry);
        }
        entry.resolve(value);
    }
    public checkTimeouts(): void {
            const now = Date.now();
            const t = RU.timeSeconds();

            for (const [key, entry] of this.map.entries()) {

                if (entry.value !== null || entry.isError()) {
                    continue;
                }

                if (entry.sentAt > 0) {
                    if (now - entry.sentAt > this.globalTimeoutMs) {
                        if (this.map.has(key) && this.map.get(key) === entry) {
                            this.map.delete(key);
                            this._timeouts++;
                            entry.fail(t, BMap.networkTimeout);
                        }
                    }
                } else if (now - entry.requestedAt > this.globalTimeoutMs * 4) {
                    if (this.map.has(key) && this.map.get(key) === entry) {
                        this.map.delete(key);
                        entry.fail(t, this.abandonedInRequestQueue);
                    }
                }
            }
        }

    public size(): number {
        return this.map.size;
    }
    public printStats(): void {
        let pendingInMap = 0;
        for (const e of this.map.values()) {
            if (e.value === null && !e.isError()) pendingInMap++;
        }

        const inQueue = this.toRequestQueue.size();
        Log.info(`BMap Stats [${this.mapName}]`, {
            total_cache: this.map.size,
            queue_pending: inQueue,
            network_waiting: (pendingInMap - inQueue),
            hits: this._hits,
            misses: this._misses,
            overflows: this._overflows,
            timeouts: this._timeouts
        });

        // Сброс счетчиков как в java sumThenReset()
        this._hits = 0; this._misses = 0; this._overflows = 0; this._timeouts = 0;
    }

    public values(): Iterable<V> {
        const self = this;
        return {
            *[Symbol.iterator]() {
                for (const entry of self.map.values()) {
                    if (entry.value !== null) yield entry.value;
                }
            }
        };
    }
}

/**
 * Внутренние компоненты BMap
 */
export namespace BMap {

    export class BMapEntry<V> {
        public readonly requestedAt: number;
        public value: V | null = null;
        public sentAt: number = 0;

        private readonly listeners: Future<V>[] = [];
        private readonly errorMessage: Error | null;

        constructor(error: Error | null) {
            this.requestedAt = Date.now();
            this.errorMessage = error;
        }

        public isError(): boolean {
            return this.errorMessage !== null;
        }

        public getError(): Error | null {
            return this.errorMessage;
        }

        public isResolved(): boolean {
            return this.value !== null;
        }

        public toFuture(timeout: number = BMap.secondTimeout): ARFuture<V> {
            if (this.isResolved()) return ARFuture.of(this.value!);
            const res = ARFuture.make<V>();
            this.listen(timeout, Future.of(res));
            return res;
        }

        public listen(timeout: number, listener: Future<V>): void {
            if (this.isError()) {
                listener.onError(0, this.errorMessage!);
                return;
            }
            if (this.value !== null) {
                listener.onResolved(this.value);
                return;
            }

            const deadline = RU.timeSeconds() + timeout;
            let finalized = false;

            const internalListener: Future<V> = {
                onResolved: (v: V) => {
                    if (!finalized) {
                        finalized = true;
                        listener.onResolved(v);
                    }
                },
                onError: (time: number, err: Error) => {
                    if (!finalized) {
                        if (RU.timeSeconds() > deadline) {
                            finalized = true;
                            listener.onError(time, err);
                        } else {
                            // Если не вышли за дедлайн, остаемся в очереди (логика Java)
                            this.listeners.push(internalListener);
                        }
                    }
                }
            };

            this.listeners.push(internalListener);

            // Double check
            if (this.value !== null) {
                this.resolve(this.value);
            }
        }

        resolve(val: V): void {
            this.value = val;
            let l: Future<V> | undefined;
            while ((l = this.listeners.shift())) {
                l.onResolved(val);
            }
        }

        fail(time: number, error: Error): void {
            let l: Future<V> | undefined;
            while ((l = this.listeners.shift())) {
                l.onError(time, error);
            }
        }

        public getNow(): V | null {
            return this.value;
        }
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
        return new BMap<K, V>(finalName,10, finalTimeout);
    }
}
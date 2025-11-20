/**
 * @file aether.types.ts
 * @purpose Contains core, low-level types and functional interface definitions.
 */

import { AFuture } from './aether_future';
import { AString, ToString } from './aether_astring';

/** Basic Types */
export type Uint8Array = globalThis.Uint8Array;
export type URI = string;

// Helper interface for Java-like Object behavior
export interface JObj {
    hashCode(): number;
    equals(obj: any): boolean;
}

/**
 * General Utilities for Java-JS compatibility
 */
export class AetherUtils {
    /**
     * Null-safe equality check.
     * Handles null, undefined, and objects implementing .equals()
     */
    static safeEquals(a: any, b: any): boolean {
        if (a === b) return true;
        if (a === null || a === undefined || b === null || b === undefined) return false;
        if (typeof a.equals === 'function') {
            return a.equals(b);
        }
        return false;
    }

    static hashCode(obj: any): number {
        if (obj === null || obj === undefined) return 0;
        if (typeof obj.hashCode === 'function') return obj.hashCode();
        if (typeof obj === 'string') {
            let h = 0;
            for (let i = 0; i < obj.length; i++) h = Math.imul(31, h) + obj.charCodeAt(i) | 0;
            return h;
        }
        if (typeof obj === 'number') return obj | 0;
        return 0;
    }
}

/**
 * A basic UUID implementation.
 */
export class UUID implements ToString, JObj {
    data!: Uint8Array;

    /**
     * Creates a UUID from a standard string representation.
     */
    static fromString(uuidString: string): UUID {
        const uuidRegex = /^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i;
        const match = uuidRegex.exec(uuidString);

        if (!match) {
            throw new Error(`Invalid UUID string format: ${uuidString}`);
        }

        const hex = match.slice(1).join('');
        const data = new Uint8Array(16);
        for (let i = 0; i < 16; i++) {
            data[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
        }
        const uuid = new UUID();
        uuid.data = data;
        return uuid;
    }

    static of(str: string): UUID {
        return UUID.fromString(str);
    }

    /**
     * Generates a random UUID (v4).
     * Uses crypto.randomUUID if available, otherwise a Math.random fallback.
     */
    static randomUUID(): UUID {
        if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
            return UUID.fromString(crypto.randomUUID());
        }

        // Fallback implementation (RFC4122)
        const str = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        return UUID.fromString(str);
    }

    toString(s?: AString): AString {
        if (!s) s = AString.of();
        if (!this.data || this.data.length !== 16) {
            // Fallback for empty/invalid UUIDs to avoid crashes in logs
            s.add("00000000-0000-0000-0000-000000000000");
            return s;
        }
        let hexParts: string[] = [];
        for (let i = 0; i < 16; i++) {
            hexParts.push(this.data[i].toString(16).padStart(2, '0'));
        }
        s.add([
            hexParts.slice(0, 4).join(''),
            hexParts.slice(4, 6).join(''),
            hexParts.slice(6, 8).join(''),
            hexParts.slice(8, 10).join(''),
            hexParts.slice(10, 16).join(''),
        ].join('-'));
        return s;
    }

    equals(other: any): boolean {
        if (this === other) return true;
        if (!(other instanceof UUID)) return false;
        if (!this.data || !other.data) return false;
        if (this.data.length !== other.data.length) return false;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] !== other.data[i]) return false;
        }
        return true;
    }

    hashCode(): number {
        if (!this.data || this.data.length !== 16) return 0;
        const view = new DataView(this.data.buffer, this.data.byteOffset, this.data.byteLength);
        const int1 = view.getInt32(0, false);
        const int2 = view.getInt32(4, false);
        const int3 = view.getInt32(8, false);
        const int4 = view.getInt32(12, false);
        const hash = int1 ^ int2 ^ int3 ^ int4;
        return hash | 0;
    }
}

/** Functional Interface Types */
export type ARunnable = () => void;
export type Executor = (task: ARunnable) => void;
export type APredicate<T> = (val: T) => boolean;
export type ABiPredicate<T1, T2> = (val1: T1, val2: T2) => boolean;
export type ASupplier<T> = () => T;
export type AFunction<A, B> = (a: A) => B;
export type AConsumer<T> = (t: T) => void;
export type ABiConsumer<T, U> = (t: T, u: U) => void;
export type ABiFunction<T, U, R> = (t: T, u: U) => R;

/** Tuples */
export type Tuple2<T1, T2> = [T1, T2];

export namespace AConsumer_T {
    export const EMPTY: AConsumer<unknown> = () => { /* no-op */ };
    export function stub<E>(): AConsumer<E> { return EMPTY; }
}

export namespace WeakConsumer_T {
    export type WeakConsumer<T> = AConsumer<T> & {
        _isWeak: true;
        _weakOriginalTask: AConsumer<T>;
        _weakRef: WeakRef<AConsumer<T>>;
    };

    function isWeakConsumer<T>(c: AConsumer<T>): c is WeakConsumer<T> {
        return (c as WeakConsumer<T>)?._isWeak === true;
    }

    export function create<T>(task: AConsumer<T>): AConsumer<T> {
        const ref = new WeakRef(task);
        const weakConsumerFunc = (t: T) => { ref.deref()?.(t); };
        (weakConsumerFunc as WeakConsumer<T>)._isWeak = true;
        (weakConsumerFunc as WeakConsumer<T>)._weakOriginalTask = task;
        (weakConsumerFunc as WeakConsumer<T>)._weakRef = ref;
        return weakConsumerFunc;
    }

    export function isGarbageCollected<T>(c: AConsumer<T>): boolean {
        if (isWeakConsumer(c)) {
            return c._weakRef.deref() === undefined;
        }
        return false;
    }
}

/** Atomic Types (Enhanced JS Implementation) */
export class AtomicInteger {
    private value: number;
    constructor(initial: number) { this.value = initial; }
    public incrementAndGet(): number { return ++this.value; }
    public decrementAndGet(): number { return --this.value; }
    public getAndIncrement(): number { return this.value++; }
    public getAndDecrement(): number { return this.value--; }
    public addAndGet(delta: number): number { this.value += delta; return this.value; }
    public getAndAdd(delta: number): number { const old = this.value; this.value += delta; return old; }
    public get(): number { return this.value; }
    public set(v: number): void { this.value = v; }
    public getAndSet(v: number): number { const old = this.value; this.value = v; return old; }
    public compareAndSet(expect: number, update: number): boolean {
        if (this.value === expect) { this.value = update; return true; }
        return false;
    }
}

export class AtomicReference<T> {
    private value: T;
    constructor(initial: T) { this.value = initial; }
    public get(): T { return this.value; }
    public set(v: T): void { this.value = v; }
    public getAndSet(v: T): T { const old = this.value; this.value = v; return old; }
    public compareAndSet(expect: T, update: T): boolean {
        if (this.value === expect) { this.value = update; return true; }
        return false;
    }
}

export class AtomicLong {
    private value: number;
    constructor(initial: number) { this.value = initial; }
    public get(): number { return this.value; }
    public set(v: number): void { this.value = v; }
    public incrementAndGet(): number { return ++this.value; }
    public decrementAndGet(): number { return --this.value; }
    public getAndIncrement(): number { return this.value++; }
    public getAndDecrement(): number { return this.value--; }
    public compareAndSet(expect: number, update: number): boolean {
        if (this.value === expect) { this.value = update; return true; }
        return false;
    }
    public addAndGet(delta: number): number { this.value += delta; return this.value; }
    public getAndAdd(delta: number): number { const old = this.value; this.value += delta; return old; }
}

/** Concurrency/Collection Stubs (Simple JS Implementation) */

export class ConcurrentLinkedQueue_C<T> {
    private items: T[] = [];
    public add(item: T): void { this.items.push(item); }
    public offer(item: T): boolean { this.items.push(item); return true; }
    public poll(): T | undefined { return this.items.shift(); }
    public peek(): T | undefined { return this.items[0]; }
    public isEmpty(): boolean { return this.items.length === 0; }
    public clear(): void { this.items = []; }
    public get length(): number { return this.items.length; }
    public size(): number { return this.items.length; }
    public removeIf(predicate: APredicate<T>): boolean {
        const originalLength = this.items.length;
        this.items = this.items.filter(i => !predicate(i));
        return this.items.length !== originalLength;
    }
}

export class ConcurrentHashMap_C<K, V> {
    private map = new Map<K, V>();

    public put(key: K, value: V): V | undefined {
        const old = this.map.get(key);
        this.map.set(key, value);
        return old;
    }
    public get(key: K): V | undefined { return this.map.get(key); }
    public remove(key: K): V | undefined {
        const old = this.map.get(key);
        this.map.delete(key);
        return old;
    }
    public containsKey(key: K): boolean { return this.map.has(key); }
    public clear(): void { this.map.clear(); }
    public size(): number { return this.map.size; }
    public putIfAbsent(key: K, value: V): V | undefined {
        if (!this.map.has(key)) {
            this.map.set(key, value);
            return undefined;
        }
        return this.map.get(key);
    }
    public computeIfAbsent(key: K, mappingFunction: (k: K) => V): V {
        if (!this.map.has(key)) {
            const newValue = mappingFunction(key);
            this.map.set(key, newValue);
            return newValue;
        }
        return this.map.get(key)!;
    }
    public values(): V[] { return Array.from(this.map.values()); }
    public keys(): K[] { return Array.from(this.map.keys()); }
}

export class CopyOnWriteArrayList_C<T> {
    private items: T[] = [];

    public add(item: T): void { this.items.push(item); }
    public remove(item: T): boolean {
        const idx = this.items.indexOf(item);
        if (idx !== -1) {
            this.items.splice(idx, 1);
            return true;
        }
        return false;
    }
    public get(index: number): T { return this.items[index]; }
    public size(): number { return this.items.length; }
    public forEach(action: AConsumer<T>): void { this.items.forEach(action); }
    public toArray(): T[] { return [...this.items]; }
}


/** Resource Management */
export interface Disposable {
    [Symbol.dispose](): void;
}

export interface Destroyable extends Disposable {
    destroy(force: boolean): AFuture;
}

/** Exceptions */
export class ClientStartException extends Error {
    constructor(message: string, cause?: Error) {
        super(message);
        if (cause) this.cause = cause;
        this.name = 'ClientStartException';
    }
}

export class ClientApiException extends Error {
    constructor(message: string, cause?: Error) {
        super(message);
        if (cause) this.cause = cause;
        this.name = 'ClientApiException';
    }
}

export class ClientTimeoutException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ClientTimeoutException';
    }
}
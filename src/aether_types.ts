/**
 * @file aether.types.ts
 * @purpose Contains core, low-level types and functional interface definitions.
 */

import { AFuture } from './aether_future'; // <-- Импорт AFuture для Destroyable
import { AString, ToString } from './aether_astring'
/** Basic Types */
export type Uint8Array = globalThis.Uint8Array;

/**
 * A basic UUID implementation.
 */
// Предполагается, что интерфейс ToString и класс AString
// (или их аналоги) определены где-то в вашем проекте.
// interface ToString { ... }
// declare class AString { ... }

export class UUID implements ToString, JObj {
    static fromString(uuidString: string): UUID {
        const uuidRegex = /^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i;
        const match = uuidRegex.exec(uuidString);

        if (!match) {
            throw new Error(`Invalid UUID string format: ${uuidString}`);
        }

        const hex = match.slice(1).join(''); // match[1]...match[5]
        const data = new Uint8Array(16);
        for (let i = 0; i < 16; i++) {
            data[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
        }
        const uuid = new UUID();
        uuid.data = data;
        return uuid;
    }

    data!: Uint8Array;

    toString(s?: AString): AString {
        if(!s)s=AString.of(); // Предполагаем, что AString.of() существует
        if (!this.data || this.data.length !== 16) {
            throw new Error('UUID data is missing or incorrect size.');
        }
        let hexParts: string[] = [];
        for (let i = 0; i < 16; i++) {
            hexParts.push(this.data[i].toString(16).padStart(2, '0'));
        }
        s.add([ // Предполагаем, что s.add() принимает массив
            hexParts.slice(0, 4).join(''),
            hexParts.slice(4, 6).join(''),
            hexParts.slice(6, 8).join(''),
            hexParts.slice(8, 10).join(''),
            hexParts.slice(10, 16).join(''),
        ].join('-'));
        return s;
    }


    /**
     * Проверяет, равен ли этот UUID другому объекту.
     * Два UUID равны, если все 16 байт их данных идентичны.
     * @param other Другой объект для сравнения.
     * @returns true, если объекты равны, иначе false.
     */
    equals(other: any): boolean {
        if (this === other) {
            return true; // Тот же самый экземпляр
        }

        // Проверка, что other является экземпляром UUID и у него есть данные
        if (!(other instanceof UUID) || !other.data) {
            return false;
        }

        // У этого экземпляра тоже должны быть данные
        if (!this.data) {
            return false;
        }

        // UUID должны иметь одинаковую длину (16 байт)
        if (this.data.length !== other.data.length) {
            return false;
        }

        // Побайтное сравнение
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] !== other.data[i]) {
                return false; // Найдено различие
            }
        }

        return true; // Все байты совпадают
    }

    /**
     * Вычисляет 32-битный хеш-код для этого UUID.
     * * Реализация основана на стандартном подходе для 128-битных
     * идентификаторов: 16 байт делятся на четыре 32-битных
     * числа, которые затем складываются по XOR.
     * * @returns 32-битное число (хеш-код).
     */
    hashCode(): number {
        if (!this.data || this.data.length !== 16) {
            return 0; // Хеш-код для невалидного или пустого UUID
        }

        // Используем DataView для эффективного чтения 32-битных чисел
        // из 16-байтного буфера Uint8Array
        const view = new DataView(this.data.buffer, this.data.byteOffset, this.data.byteLength);

        // Читаем 4 части по 32 бита (4 байта).
        // false означает big-endian (сетевой порядок байт),
        // что является стандартом для многих форматов UUID.
        const int1 = view.getInt32(0, false);
        const int2 = view.getInt32(4, false);
        const int3 = view.getInt32(8, false);
        const int4 = view.getInt32(12, false);

        // Складываем все части по XOR, чтобы получить 32-битный хеш
        const hash = int1 ^ int2 ^ int3 ^ int4;

        // | 0 гарантирует, что результат является 32-битным
        // знаковым целым числом, как это принято в Java/C#.
        return hash | 0;
    }
}
export type URI = string; // <-- EXPORTED

/** Functional Interface Types */
export type ARunnable = () => void;
export type Executor = (task: ARunnable) => void;
export type APredicate<T> = (val: T) => boolean;
export type ASupplier<T> = () => T;
export type AFunction<A, B> = (a: A) => B;
export type AConsumer<T> = (t: T) => void;
export type ABiConsumer<T, U> = (t: T, u: U) => void;
export type ABiFunction<T, U, R> = (t: T, u: U) => R;

/** Tuples */
export type Tuple2<T1, T2> = [T1, T2];

/**
 * A namespace for AConsumer utilities, mirroring Java's AConsumer interface statics.
 */
export namespace AConsumer_T {
    /**
     * A consumer that does nothing.
     */
    export const EMPTY: AConsumer<unknown> = () => { /* no-op */ };

    /**
     * Returns a typed empty consumer.
     * @template E The type.
     * @returns An empty consumer.
     */
    export function stub<E>(): AConsumer<E> {
        return EMPTY;
    }
}

/**
 * A type guard and helper namespace for Weak Consumers.
 * This creates a function that acts as an AConsumer but holds a WeakRef
 * to the original task, allowing it to be garbage collected.
 */
export namespace WeakConsumer_T {
    /**
     * A type representing a callable AConsumer that is also a weak wrapper.
     * @internal
     */
    export type WeakConsumer<T> = AConsumer<T> & {
        _isWeak: true;
        _weakOriginalTask: AConsumer<T>;
        _weakRef: WeakRef<AConsumer<T>>;
    };

    /**
     * Type guard to check if a consumer is a weak consumer.
     * @param c The consumer to check.
     * @returns True if it is a WeakConsumer.
     */
    function isWeakConsumer<T>(c: AConsumer<T>): c is WeakConsumer<T> {
        return (c as WeakConsumer<T>)?._isWeak === true;
    }

    /**
     * Creates a new weak consumer function.
     * @param task The original AConsumer to wrap.
     * @returns A new AConsumer function that holds a WeakRef to the task.
     */
    export function create<T>(task: AConsumer<T>): AConsumer<T> {
        const ref = new WeakRef(task);

        /**
         * This is the callable function that will be stored in the listener set.
         */
        const weakConsumerFunc = (t: T) => {
            ref.deref()?.(t);
        };

        /**
         * Tag the function with properties needed by EventConsumer.
         */
        (weakConsumerFunc as WeakConsumer<T>)._isWeak = true;
        (weakConsumerFunc as WeakConsumer<T>)._weakOriginalTask = task;
        (weakConsumerFunc as WeakConsumer<T>)._weakRef = ref;

        return weakConsumerFunc;
    }

    /**
     * Checks if a consumer is a weak consumer and its reference is dead.
     * @param c The consumer to check.
     * @returns True if the consumer is weak and its target has been garbage collected.
     */
    export function isGarbageCollected<T>(c: AConsumer<T>): boolean {
        if (isWeakConsumer(c)) {
            return c._weakRef.deref() === undefined;
        }
        return false;
    }
}


/** Atomic Types (Simple JS Implementation) */
export class AtomicInteger {
    private value: number;
    constructor(initial: number) { this.value = initial; }
    public incrementAndGet(): number { return ++this.value; }
    public decrementAndGet(): number { return --this.value; }
    public addAndGet(delta: number): number { this.value += delta; return this.value; }
    public get(): number { return this.value; }
    public set(v: number): void { this.value = v; }
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
    public compareAndSet(expect: number, update: number): boolean {
        if (this.value === expect) { this.value = update; return true; }
        return false;
    }
    public addAndGet(delta: number): number {
        this.value += delta;
        return this.value;
    }
}

/** Concurrency Stubs (Simple JS Implementation) */
export class ConcurrentLinkedQueue_C<T> {
    private items: T[] = [];
    public add(item: T): void { this.items.push(item); }
    public poll(): T | undefined { return this.items.shift(); }
    public isEmpty(): boolean { return this.items.length === 0; }
    public clear(): void { this.items = []; }
    public get length(): number { return this.items.length; }
}

/** Resource Management (Java/TS) */

/**
 * Синхронный интерфейс освобождения ресурсов (соответствует нативному).
 */
export interface Disposable {
    [Symbol.dispose](): void;
}

/**
 * Асинхронный интерфейс освобождения ресурсов (аналог нативного AsyncDisposable,
 * но адаптированный для AFuture и параметра 'force').
 */
export interface Destroyable extends Disposable {
    destroy(force: boolean): AFuture; // <-- Уточнен тип
}

/** Exception related to client startup and connection issues. */
export class ClientStartException extends Error { // <-- EXPORTED
    constructor(message: string, cause?: Error) {
        super(message);
        if (cause) this.cause = cause;
        this.name = 'ClientStartException';
    }
}

/** Exception related to errors occurring during API requests. */
export class ClientApiException extends Error {
    constructor(message: string, cause?: Error) {
        super(message);
        if (cause) this.cause = cause;
        this.name = 'ClientApiException';
    }
}

/** Exception related to internal asynchronous operation timeouts. */
export class ClientTimeoutException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ClientTimeoutException';
    }
}

export interface JObj {
    hashCode(): number;
    equals(obj:any): boolean;
}
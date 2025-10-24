// =============================================================================================
// FILE: aether.types.ts (Полностью восстановленное и исправленное содержимое)
// =============================================================================================

/** Basic Types */
export type Uint8Array = globalThis.Uint8Array;
export class UUID {
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
    toString(): string {
        if (!this.data || this.data.length !== 16) {
            throw new Error('UUID data is missing or incorrect size.');
        }
        let hexParts: string[] = [];
        for (let i = 0; i < 16; i++) {
            hexParts.push(this.data[i].toString(16).padStart(2, '0'));
        }
        return [
            hexParts.slice(0, 4).join(''),
            hexParts.slice(4, 6).join(''),
            hexParts.slice(6, 8).join(''),
            hexParts.slice(8, 10).join(''),
            hexParts.slice(10, 16).join(''),
        ].join('-');
    }
}
export type URI = string;

export type ARunnable = () => void;
export type Executor = (task: ARunnable) => void;
export type APredicate<T> = (val: T) => boolean;
export type ASupplier<T> = () => T;
export type AFunction<A, B> = (a: A) => B;
export type AConsumer<T> = (t: T) => void;
export type ABiConsumer<T, U> = (t: T, u: U) => void;
export type ABiFunction<T, U, R> = (t: T, u: U) => R;
export type Tuple2<T1, T2> = [T1, T2];

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
}
export class ConcurrentLinkedQueue_C<T> {
    private items: T[] = [];
    public add(item: T): void { this.items.push(item); }
    public poll(): T | undefined { return this.items.shift(); }
    public isEmpty(): boolean { return this.items.length === 0; }
    public clear(): void { this.items = []; }
    public get length(): number { return this.items.length; }
}
export type ScheduledFuture_C = {
    cancel(mayInterruptIfRunning: boolean): boolean;
    isDone(): boolean;
};

/** Resource Management (Java/TS) */
export interface Disposable {
    [Symbol.dispose](): void;
}
export interface AutoCloseable {
    close(): void;
}
export interface Destroyable extends Disposable {
    destroy(force: boolean): any; // AFuture | void | etc.
}

// --- ИСПРАВЛЕНО: Добавлены классы ошибок ---

/** Exception related to client startup and connection issues. */
export class ClientStartException extends Error {
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
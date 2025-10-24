// =============================================================================================
// FILE: aether_future.ts
// PURPOSE: Contains all Future (AFuture, ARFuture, AMFuture) implementations and EventConsumer.
// DEPENDENCIES: aether.types.ts, aether.logging.ts, aether.utils.ts
// (ИСПРАВЛЕННАЯ ВЕРСИЯ - Refactored: Merged Impl, Added toPromise, Fixed AMFuture map)
// =============================================================================================

import {
    Disposable, ARunnable, ASupplier, AConsumer, ABiConsumer, AFunction,
    Executor, Tuple2,
} from './aether_types';
import { RU } from './aether_utils';
import { Log } from './aether_logging';

// =============================================================================================
// SECTION 5: SLOTS (Event) IMPLEMENTATION
// =============================================================================================

export class EventConsumer<T> {
    public readonly listeners: Set<AConsumer<T>> = new Set();

    public once(task: AConsumer<T>): void {
        (task as any)['onceFlag'] = true;
        this.add(task);
    }

    public add(listener: AConsumer<T>): void {
        this.listeners.add(Log.wrap(listener));
    }

    public remove(listener: AConsumer<T>): void {
        let toDelete: AConsumer<T> | null = null;
        for (const existing of this.listeners) {
            // TODO: This comparison might fail if Log.wrap returns a new function identity
            if (existing === listener || (existing as any).__original === listener) {
                toDelete = existing;
                break;
            }
        }
        if (toDelete) { this.listeners.delete(toDelete); }
    }

    public fire(v: T): void {
        const currentListeners = Array.from(this.listeners);
        const toRemove: AConsumer<T>[] = [];
        for (const l of currentListeners) {
            if (!this.listeners.has(l)) continue;
            try {
                const onceFlag = (l as any)['onceFlag'] as boolean;
                if (onceFlag) {
                    toRemove.push(l); // Remove after iteration
                    l(v);
                } else {
                    l(v);
                }
            } catch (e) { console.error("Error firing event listener:", e); }
        }
        toRemove.forEach(l => this.listeners.delete(l));
    }
    public hasListener(): boolean { return this.listeners.size > 0; }
}

export class EventBiConsumer<T1, T2> {
    private readonly listeners: Set<ABiConsumer<T1, T2>> = new Set();
    public add(listener: ABiConsumer<T1, T2>): void { this.listeners.add(Log.wrap(listener)); }
    public remove(listener: ABiConsumer<T1, T2>): void { /* ... (similar logic to EventConsumer.remove) ... */ }
    public hasListener(): boolean { return this.listeners.size > 0; }
    public fire(v1: T1, v2: T2): void {
        this.listeners.forEach(l => {
            try { l(v1, v2); } catch (e) { console.error("Error firing bi-event listener:", e); }
        });
    }
}

// --- AMFuture Implementation ---
export interface AMFuture<T> extends AConsumer<T> {
    readonly eventConsumer: EventConsumer<T>;
    refresh(): void;
    set(value: T): boolean;
    map<V2>(f: AFunction<T, V2>): AMFuture<V2>;
    once(task: AConsumer<T>, msOrSeconds: number, timeoutTask: ARunnable): void;
    toOnce(task: AConsumer<T>): void;
    once(task: AConsumer<T>): void;
    addWeak(task: AConsumer<T>): void;
    add(task: AConsumer<T>): void;
    remove(task: AConsumer<T>): void;
    getNow(): T | null;
    mapToARFuture(): ARFuture<T>;
    isDone(): boolean;
}

class AMFutureBase<T> {
    public readonly eventConsumer: EventConsumer<T>;
    private value: T | null;

    constructor(value?: T) {
        this.value = value === undefined ? null : value;
        this.eventConsumer = new EventConsumer<T>();
    }

    public refresh(): void {
        if (this.value !== null && this.value !== undefined) {
            this.eventConsumer.fire(this.value);
        }
    }

    public accept: AConsumer<T> = (value: T) => { this.set(value); };

    public set(value: T): boolean {
        const oldValue = this.value;
        if (oldValue === value && value !== null && value !== undefined) { return false; }

        if (oldValue === null || oldValue === undefined) {
            if (this.value === null || this.value === undefined) {
                this.value = value;
                this.eventConsumer.fire(value);
                return true;
            } else {
                return this.set(value);
            }
        } else {
            this.value = value;
            this.eventConsumer.fire(value);
            return true;
        }
    }

    public map<V2>(f: AFunction<T, V2>): AMFuture<V2> {
        const res = createAMFuture<V2>();
        this.add((v: T) => {
            try {
                // --- ИСПРАВЛЕНО: Вызываем res как функцию ---
                res(f(v));
            } catch (e) { console.error("Error in AMFuture map function:", e); }
        });
        if (this.value !== null && this.value !== undefined) {
            try {
                // --- ИСПРАВЛЕНО: Вызываем res как функцию ---
                res(f(this.value));
            } catch (e) { console.error("Error in AMFuture map function (initial value):", e); }
        }
        return res;
    }

    public once(task: AConsumer<T>, msOrSeconds: number, timeoutTask: ARunnable): void;
    public once(task: AConsumer<T>): void;
    public once(taskOrT2: AConsumer<T>, msOrSeconds?: number, timeoutTask?: ARunnable): void {
        if (typeof msOrSeconds === 'number' && typeof timeoutTask === 'function') {
            const ms = msOrSeconds > 1000000 ? msOrSeconds : msOrSeconds * 1000;
            const task = taskOrT2 as AConsumer<T>;
            let timerDisposer: Disposable | null = null;
            let executed = false;
            const wrappedTask = Log.wrap(task);
            (wrappedTask as any).onceFlag = true;
            const removeListener = () => this.eventConsumer.remove(wrappedTask);

            timerDisposer = RU.schedule(ms, () => {
                timerDisposer = null;
                if (!executed) {
                    executed = true;
                    try { timeoutTask(); removeListener(); } catch (e) { Log.error(e as Error); }
                }
            });

            this.eventConsumer.add(wrappedTask);
            if (this.value !== null && this.value !== undefined && !executed) {
                executed = true;
                timerDisposer?.[Symbol.dispose]();
                try { wrappedTask(this.value); } // fire() сам удалит
                catch (e) { Log.error(e as Error); removeListener(); }
            }
        } else if (typeof taskOrT2 === 'function' && arguments.length === 1) {
            this.toOnce(taskOrT2 as AConsumer<T>);
        } else { throw new Error("Invalid arguments for AMFuture.once"); }
    }

    public toOnce(task: AConsumer<T>): void {
        const wrappedTask = Log.wrap(task);
        (wrappedTask as any).onceFlag = true;
        this.eventConsumer.add(wrappedTask);
        if (this.value !== null && this.value !== undefined) {
            try { wrappedTask(this.value); } // fire() сам удалит
            catch (e) { Log.error(e as Error); this.eventConsumer.remove(wrappedTask); }
        }
    }

    public addWeak(task: AConsumer<T>): void { Log.warn("AMFuture.addWeak not implemented."); this.add(task); }
    public add(task: AConsumer<T>): void {
        const wrappedTask = Log.wrap(task);
        this.eventConsumer.add(wrappedTask);
        if (this.value !== null && this.value !== undefined) {
            try { wrappedTask(this.value); } catch (e) { Log.error(e as Error); }
        }
    }
    public remove(task: AConsumer<T>): void { this.eventConsumer.remove(task); }
    public getNow(): T | null { return this.value ?? null; }
    public mapToARFuture(): ARFuture<T> {
        if (this.value !== null && this.value !== undefined) return ARFuture.of(this.value);
        const res = new ARFuture<T>();
        this.once((value: T) => res.tryDone(value));
        return res;
    }
    public isDone(): boolean { return this.value !== null && this.value !== undefined; }
}

export function createAMFuture<T>(initialValue?: T): AMFuture<T> {
    const instance = new AMFutureBase<T>(initialValue);
    const consumerFunction = instance.accept.bind(instance) as AConsumer<T>;
    return Object.assign(consumerFunction, {
        eventConsumer: instance.eventConsumer,
        refresh: instance.refresh.bind(instance),
        set: instance.set.bind(instance),
        map: instance.map.bind(instance),
        once: instance.once.bind(instance),
        toOnce: instance.toOnce.bind(instance),
        addWeak: instance.addWeak.bind(instance),
        add: instance.add.bind(instance),
        remove: instance.remove.bind(instance),
        getNow: instance.getNow.bind(instance),
        mapToARFuture: instance.mapToARFuture.bind(instance),
        isDone: instance.isDone.bind(instance),
    }) as AMFuture<T>;
}

export namespace AMFuture {
    export function completed<T>(value: T): AMFuture<T> {
        const res = createAMFuture<T>();
        res.set(value);
        return res;
    }
}


// =============================================================================================
// SECTION 3: FUTURE IMPLEMENTATION (Refactored)
// =============================================================================================

enum FutureStatus { PENDING, DONE, ERROR, CANCELED }

abstract class AFutureBaseImpl<Self extends AFutureBaseImpl<Self>> {
    protected status: FutureStatus = FutureStatus.PENDING;
    protected errorValue: Error | null = null;
    protected listeners: AConsumer<Self>[] = [];

    public isFinalStatus(): boolean { return this.status !== FutureStatus.PENDING; }
    public isError(): boolean { return this.status === FutureStatus.ERROR; }
    public isDone(): boolean { return this.status === FutureStatus.DONE; }
    public isCanceled(): boolean { return this.status === FutureStatus.CANCELED; }
    public isNotDone(): boolean { return this.status !== FutureStatus.PENDING; }
    public getError(): Error | null { return this.errorValue; }

    public error(e: Error): Self {
        if (this.status === FutureStatus.PENDING) { this.errorValue = e; }
        this.resolve(FutureStatus.ERROR);
        return this as unknown as Self;
    }
    public setError(e: Error): void { this.error(e); }
    public cancel(): void { this.resolve(FutureStatus.CANCELED); }

    protected resolve(newStatus: FutureStatus): boolean {
        if (this.status !== FutureStatus.PENDING) return false;
        this.status = newStatus;
        const currentListeners = [...this.listeners];
        this.listeners = [];
        currentListeners.forEach(l => {
            try { Log.wrap(l)(this as unknown as Self); }
            catch (e) { console.error("Error executing future listener:", e); }
        });
        return true;
    }

    public addListener(l: AConsumer<Self>): boolean {
        if (this.isFinalStatus()) {
            try { l(this as unknown as Self); }
            catch (e) { console.error("Error executing immediate future listener:", e); }
            return false;
        }
        this.listeners.push(l);
        return true;
    }
    public onCancel(l: ARunnable): Self { this.addListener(f => { if (f.isCanceled()) l(); }); return this as unknown as Self; }
    public onError(l: AConsumer<Error>): Self { this.addListener(f => { if (f.isError() && f.getError()) l(f.getError()!); }); return this as unknown as Self; }

    public abstract to(...args: any[]): Self;

    public waitSuccessful(_timeout?: number): boolean { console.warn("waitSuccessful is sync."); return this.isDone(); }
    public waitDone(_timeout?: number): boolean { console.warn("waitDone is sync."); return this.isFinalStatus(); }

    public timeoutError(seconds: number, text: string): Self {
        const ms = seconds * 1000;
        const timerDisposer = RU.schedule(ms, () => {
            if (!this.isFinalStatus()) { this.error(new Error(`Timeout: ${text} after ${seconds}s`)); }
        });
        this.addListener(_ => timerDisposer[Symbol.dispose]());
        return this as unknown as Self;
    }
    public timeoutMs(ms: number, task: ARunnable): Self {
        const timerDisposer = RU.schedule(ms, () => {
            if (!this.isFinalStatus()) {
                try { task(); } catch (e) { Log.error("Error in future timeout task", e as Error); }
                this.cancel();
            }
        });
        this.addListener(_ => timerDisposer[Symbol.dispose]());
        return this as unknown as Self;
    }

    // --- ИЗМЕНЕНИЕ: Добавлен toPromise ---
    public toPromise(timeoutMs?: number): Promise<any> { // 'any' because AFuture has no value
        return new Promise((resolve, reject) => {
            let timerDisposer: Disposable | undefined;
            let timedOut = false;
            const cleanUp = () => { if (timerDisposer) { timerDisposer[Symbol.dispose](); timerDisposer = undefined; } };

            if (timeoutMs !== undefined && timeoutMs > 0) {
                timerDisposer = RU.schedule(timeoutMs, () => {
                    timedOut = true;
                    if (!this.isFinalStatus()) {
                        // Не отменяем future, просто режектим промис
                        reject(new Error(`Future timed out after ${timeoutMs}ms`));
                    }
                });
            }

            // --- Немедленная проверка ---
            if (this.isFinalStatus()) {
                cleanUp();
                if (this.isDone()) resolve(undefined); // AFuture resolves with undefined
                else if (this.isError()) reject(this.getError() ?? new Error("Future failed"));
                else if (this.isCanceled()) reject(new Error("Future was canceled"));
                return; // Уже завершен
            }

            // --- Добавляем слушателя ---
            this.addListener(f => {
                if (timedOut) return; // Уже был таймаут
                cleanUp();
                if (f.isDone()) resolve(undefined);
                else if (f.isError()) reject(f.getError() ?? new Error("Future failed"));
                else if (f.isCanceled()) reject(new Error("Future was canceled"));
            });
        });
    }

    public destroy(_force: boolean): AFuture { this.cancel(); return AFuture.of(); }
    [Symbol.dispose](): void { this.destroy(true); }
}

// --- Класс AFuture ---
export class AFuture extends AFutureBaseImpl<AFuture> {
    public done(): void { this.resolve(FutureStatus.DONE); }
    public tryDone(): boolean { return this.resolve(FutureStatus.DONE); }

    public and(f: AFuture): AFuture {
        const res = new AFuture();
        let count = 2; // Ожидаем 2 завершения
        let firstError: Error | null = null;
        let canceled = false;
        const checkDone = (self: AFutureBaseImpl<any>) => {
            if (res.isFinalStatus()) return; // Результат уже определен
            if (self.isError()) firstError = firstError ?? self.getError();
            if (self.isCanceled()) canceled = true;
            count--;
            if (count === 0) { // Оба завершились
                if (canceled) res.cancel();
                else if (firstError) res.error(firstError);
                else res.tryDone();
            }
        };
        this.addListener(checkDone);
        f.addListener(checkDone);
        res.onCancel(() => { this.cancel(); f.cancel(); });
        return res;
    }

    public apply(t: ARunnable): AFuture { this.to(t); return this; }

    public mapRFuture<T>(t: ASupplier<T>): ARFuture<T> {
        const res = new ARFuture<T>();
        this.to(
            () => { try { res.tryDone(t()); } catch (e) { res.error(e as Error); } }
        ).onError(
            (err: Error) => res.error(err)
        ).onCancel(() => res.cancel());
        return res;
    }

    public to(executor: Executor, t: ARunnable): AFuture;
    public to(t: ARunnable): AFuture;
    public to(f: AFuture): AFuture;
    public to(...args: any[]): AFuture {
        const first = args[0]; const second = args[1];

        if (args.length === 1 && first instanceof AFutureBaseImpl) {
            const f = first as AFuture;
            this.addListener(self => {
                if (self.isDone()) f.tryDone();
                else if (self.isError()) f.error(self.getError()!);
                else if (self.isCanceled()) f.cancel();
            });
            this.onCancel(() => f.cancel());
            return this;
        }

        const taskRunnable = (typeof first === 'function' ? first : second) as ARunnable;
        const executor = (typeof first !== 'function' ? first : undefined) as Executor | undefined;

        if (!taskRunnable || typeof taskRunnable !== 'function' || (taskRunnable.length !== 0 && taskRunnable.length !== undefined)) {
            throw new Error("Invalid arguments for AFuture.to (runnable variant)");
        }
        const taskToRun: ARunnable = () => { if (this.isDone()) { try { taskRunnable(); } catch (e) { Log.error("Error in future ARunnable task", e as Error); } } };
        this.addListener(_f => {
            if (executor) { try { executor(taskToRun); } catch (e) { Log.error("Error submitting task to executor", e as Error); } }
            else { taskToRun(); }
        });
        return this;
    }

    public static make(): AFuture { return new AFuture(); }
    public static of(e?: Error): AFuture { const f = new AFuture(); if (e) f.error(e); else f.tryDone(); return f; }
    public static ofThrow(e: Error): AFuture { const f = new AFuture(); f.error(e); return f; }
    public static completed(): AFuture { return AFuture.of(); }
    public static canceled(): AFuture { const f = new AFuture(); f.cancel(); return f; }

    public static all(...futures: AFutureBaseImpl<any>[]): AFuture {
        const result = new AFuture();
        let count = futures.length;
        let firstError: Error | null = null;
        let canceled = false;
        if (count === 0) { result.tryDone(); return result; }

        const checkDone = (self: AFutureBaseImpl<any>) => {
            if (result.isFinalStatus()) return;
            if (self.isError()) firstError = firstError ?? self.getError();
            if (self.isCanceled()) canceled = true;
            count--;
            if (count === 0) {
                if (canceled) result.cancel();
                else if (firstError) result.error(firstError);
                else result.tryDone();
            }
        };
        futures.forEach(f => f.addListener(checkDone));
        result.onCancel(() => futures.forEach(f => f.cancel()));
        return result;
    }

    public static any(...futures: AFutureBaseImpl<any>[]): AFuture {
        const result = AFuture.make();
        if (futures.length === 0) { result.cancel(); return result; }
        let errorCount = 0;
        let cancelCount = 0;

        const onComplete = () => { if (!result.isFinalStatus()) { result.tryDone(); futures.forEach(f => f.cancel()); } };
        const onError = (err: Error) => {
            if (!result.isFinalStatus()) {
                errorCount++;
                if (errorCount + cancelCount === futures.length) { // Все упали или отменились
                    result.error(err); // Завершаем с последней ошибкой
                }
            }
        };
        const onCancel = () => {
            if (!result.isFinalStatus()) {
                cancelCount++;
                if (errorCount + cancelCount === futures.length) { // Все упали или отменились
                    result.cancel(); // Завершаем с отменой
                }
            }
        };
        futures.forEach(f => f.to(onComplete).onError(onError).onCancel(onCancel));
        return result;
    }
}

// --- Класс ARFuture<T> ---
export class ARFuture<T> extends AFutureBaseImpl<ARFuture<T>> {
    private value: T | null = null;

    public toWithFlag(): ARFutureWithFlag<T> { const ff = new ARFutureWithFlag<T>(); this.to(ff); return ff; }

    public done(value: T): void { if (this.status === FutureStatus.PENDING) this.value = value; this.resolve(FutureStatus.DONE); }
    public tryDone(value: T): boolean { if (this.status === FutureStatus.PENDING) { this.value = value; return this.resolve(FutureStatus.DONE); } return false; }

    public get(_timeout?: number): T {
        if (this.isDone() && this.value !== null) return this.value;
        if (this.isError()) throw this.errorValue ?? new Error("Future failed");
        if (this.isCanceled()) throw new Error("Future was canceled");
        throw new Error("Future not done (get() called on pending future)");
    }
    public getNow(): T | null { return (this.isDone() && this.value !== null) ? this.value : null; }
    public getNowElse(elseValue: T): T { return (this.isDone() && this.value !== null) ? this.value : elseValue; }

    public toFuture(): AFuture { const f = AFuture.make(); this.to(f); return f; }

    public and<T2>(f2: ARFuture<T2>): ARFuture<Tuple2<T, T2>> {
        const res = new ARFuture<Tuple2<T, T2>>();
        AFuture.all(this, f2).to(
            () => {
                if (this.isDone() && f2.isDone()) { res.tryDone([this.getNow()!, f2.getNow()!]); }
                else { res.error(new Error("Internal error in ARFuture.and")); }
            }
        ).onError((err: Error) => res.error(err))
            .onCancel(() => res.cancel());
        return res;
    }

    public map<E>(func: AFunction<T, E>): ARFuture<E> {
        const res = new ARFuture<E>();
        this.to(
            (value: T) => { try { res.tryDone(func(value)); } catch (e) { res.error(e as Error); } },
            (error: Error) => res.error(error)
        ).onCancel(() => res.cancel());
        return res;
    }

    public mapRFuture<E>(func: AFunction<T, ARFuture<E>>): ARFuture<E> {
        const res = new ARFuture<E>();
        this.to(
            (value: T) => {
                try { const nextFuture = func(value); nextFuture.to(res); } // to(ARFuture)
                catch (e) { res.error(e as Error); }
            },
            (error: Error) => res.error(error)
        ).onCancel(() => res.cancel());
        return res;
    }

    public apply(c: AConsumer<T> | ARunnable): ARFuture<T> {
        this.to((value: T) => {
            try {
                if (typeof c === 'function' && (c.length === 1 || c.length === 0)) { // Принимаем AConsumer (1) или ARunnable (0)
                    (c as AConsumer<T>)(value); // ARunnable также сработает, value будет проигнорирован
                }
            } catch (e) { Log.error("Error in ARFuture.apply", e as Error); }
        });
        return this;
    }

    public decompose<E>(): ARFuture<E> { Log.warn("ARFuture.decompose is unsafe."); return this as any; }
    public decomposeFuture(): AFuture { return this as any; }

    public to(executor: Executor, t: ARunnable): ARFuture<T>;
    public to(t: ARunnable): ARFuture<T>;
    public to(onDone: AConsumer<T>): ARFuture<T>;
    public to(onDone: AConsumer<T>, onError: AConsumer<Error>): ARFuture<T>;
    public to(f: ARFuture<T>): ARFuture<T>;
    public to(f: AFuture): ARFuture<T>;
    public to(task: AConsumer<T>, timeout: number, onTimeout: ARunnable): ARFuture<T>;
    public to(...args: any[]): ARFuture<T> {
        const first = args[0]; const second = args[1]; const third = args[2];

        // 1. to(onDone: AConsumer<T>)
        if (typeof first === 'function' && first.length === 1 && args.length === 1) {
            this.addListener(f => { if (f.isDone()) (first as AConsumer<T>)(f.getNow()!); });
            return this;
        }
        // 2. to(onDone: AConsumer<T>, onError: AConsumer<Error>)
        else if (typeof first === 'function' && first.length === 1 && typeof second === 'function' && second.length === 1 && args.length === 2) {
            this.addListener(f => {
                if (f.isDone()) (first as AConsumer<T>)(f.getNow()!);
                else if (f.isError() && f.getError()) (second as AConsumer<Error>)(f.getError()!);
            });
            return this;
        }
        // 3. to(task: AConsumer<T>, timeout: number, onTimeout: ARunnable)
        else if (typeof first === 'function' && first.length === 1 && typeof second === 'number' && typeof third === 'function' && args.length === 3) {
            const task = first as AConsumer<T>;
            const timeoutMs = second > 1000000 ? second : second * 1000;
            const onTimeout = third as ARunnable;
            let timedOut = false;
            const timerDisposer = RU.schedule(timeoutMs, () => { timedOut = true; try { onTimeout(); } catch (e) { Log.error("Error in .to() timeout task", e as Error); } });
            this.addListener(f => {
                timerDisposer[Symbol.dispose]();
                if (!timedOut && f.isDone()) { task(f.getNow()!); }
            });
            return this;
        }
        // 4. to(f: ARFuture<T> | AFuture)
        else if (first instanceof AFutureBaseImpl && args.length === 1) {
            const f = first as AFuture;
            this.addListener(self => {
                if (self.isDone()) {
                    const fAsArFuture = f as unknown as ARFuture<T>;
                    if (fAsArFuture.tryDone && fAsArFuture.tryDone.length === 1) { fAsArFuture.tryDone(self.getNow()!); }
                    else { f.tryDone(); }
                } else if (self.isError()) { f.error(self.getError()!); }
                else if (self.isCanceled()) { f.cancel(); }
            });
            this.onCancel(() => f.cancel());
            return this;
        }
        // 5. to(t: ARunnable) or to(executor: Executor, t: ARunnable)
        else {
            const taskRunnable = (typeof first === 'function' ? first : second) as ARunnable;
            const executor = (typeof first !== 'function' ? first : undefined) as Executor | undefined;
            if (!taskRunnable || typeof taskRunnable !== 'function' || (taskRunnable.length !== 0 && taskRunnable.length !== undefined)) { throw new Error("Invalid arguments for ARFuture.to (runnable)"); }
            const taskToRun = () => { if (this.isDone()) { try { taskRunnable(); } catch (e) { Log.error("Error in future ARunnable task", e as Error); } } };
            this.addListener(_f => {
                if (executor) { try { executor(taskToRun); } catch (e) { Log.error("Error submitting task to executor", e as Error); } }
                else { taskToRun(); }
            });
            return this;
        }
    }

    public override toPromise(timeoutMs?: number): Promise<T> {
        return new Promise((resolve, reject) => {
            let timerDisposer: Disposable | undefined;
            let timedOut = false;
            const cleanUp = () => { if (timerDisposer) { timerDisposer[Symbol.dispose](); timerDisposer = undefined; } };
            if (timeoutMs !== undefined && timeoutMs > 0) {
                timerDisposer = RU.schedule(timeoutMs, () => {
                    timedOut = true;
                    if (!this.isFinalStatus()) { reject(new Error(`Future timed out after ${timeoutMs}ms`)); }
                });
            }
            if (this.isFinalStatus()) {
                cleanUp();
                if (this.isDone()) resolve(this.getNow()!);
                else if (this.isError()) reject(this.getError() ?? new Error("Future failed"));
                else if (this.isCanceled()) reject(new Error("Future canceled"));
                return;
            }
            this.addListener(f => {
                if (timedOut) return;
                cleanUp();
                if (f.isDone()) resolve(f.getNow()!);
                else if (f.isError()) reject(f.getError() ?? new Error("Future failed"));
                else if (f.isCanceled()) reject(new Error("Future canceled"));
            });
        });
    }

    public static of<T>(value?: T): ARFuture<T> { const f = new ARFuture<T>(); if (value !== undefined) f.done(value); return f; }
    public static canceled<T>(): ARFuture<T> { const f = new ARFuture<T>(); f.cancel(); return f; }
    public static ofThrow<T>(throwable: Error): ARFuture<T> { const f = new ARFuture<T>(); f.error(throwable); return f; }
    public static all<T>(list: Array<ARFuture<T>>): ARFuture<Array<T>> {
        const futures = list;
        if (futures.length === 0) { return ARFuture.of([]); }
        const result = new ARFuture<T[]>();
        const results: (T | null)[] = new Array(futures.length).fill(null);
        AFuture.all(...futures).to(
            () => { futures.forEach((f, index) => { results[index] = f.getNow(); }); result.tryDone(results as T[]); },

        ).onError((err: Error) => result.error(err))
            .onCancel(() => result.cancel());
        return result;
    }
}

// --- Класс ARFutureWithFlag<T> ---
export class ARFutureWithFlag<T> extends ARFuture<T> {
    private requested: boolean = false;
    public tryRequest(): boolean { if (this.isFinalStatus() || this.requested) return false; this.requested = true; return true; }
    public tryError(error: Error): boolean { const initialStatus = this.status; this.error(error); return initialStatus === FutureStatus.PENDING && this.status === FutureStatus.ERROR; }
    protected override resolve(newStatus: FutureStatus): boolean { const success = super.resolve(newStatus); if (success) this.requested = false; return success; }
}
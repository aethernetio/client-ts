// =============================================================================================
// FILE: aether.future.ts
// PURPOSE: Contains all Future (AFuture, ARFuture, AMFuture) interfaces and implementations,
//          as well as EventConsumer (Slots).
// DEPENDENCIES: aether.types.ts, aether.logging.ts, aether.utils.ts
// =============================================================================================

import {
    Disposable, ARunnable, ASupplier, AConsumer, ABiConsumer, AFunction,
    Executor, Tuple2,
} from './aether_types';
import { RU } from './aether_utils';
import { Log } from './aether_logging';

// =============================================================================================
// SECTION 2: FUTURE INTERFACES
// =============================================================================================
export interface AFutureBase<Self extends AFutureBase<Self>>  {
    waitSuccessful(timeout?: number): boolean;
    waitDone(timeout?: number): boolean;
    onCancel(l: ARunnable): Self;
    onError(l: AConsumer<Error>): Self;
    isFinalStatus(): boolean;
    isError(): boolean;
    error(e: Error): Self;
    getError(): Error | null;
    setError(e: Error): void;
    isNotDone(): boolean;
    isDone(): boolean;
    isCanceled(): boolean;
    cancel(): void;
    timeoutError(seconds: number, text: string): Self;
    timeoutMs(ms: number, task: ARunnable): Self;
    addListener(l: AConsumer<Self>): boolean;
    to(executor: Executor, t: ARunnable): Self;
    to(t: ARunnable): Self;
}

export interface AFuture extends AFutureBase<AFuture> {
    done(): void;
    tryDone(): boolean;
    and(f: AFuture): AFuture;
    apply(t: ARunnable): AFuture;
    mapRFuture<T>(t: ASupplier<T>): ARFuture<T>;

    to(executor: Executor, t: ARunnable): AFuture;
    to(t: ARunnable): AFuture;
    to(f: AFuture): AFuture;
    make(): AFuture;
    completed(): AFuture;
    canceled(): AFuture;
    of(e?: Error): AFuture;
    ofThrow(e: Error): AFuture;
}

export interface ARFuture<T> extends AFutureBase<ARFuture<T>> {
    toWithFlag(): ARFutureWithFlag<T>;
    done(value: T): void;
    tryDone(value: T): boolean;
    get(): T;
    get(timeout: number): T;
    getNow(): T | null;
    getNowElse(elseValue: T): T;

    to(executor: Executor, t: ARunnable): ARFuture<T>;
    to(t: ARunnable): ARFuture<T>;
    to(onDone: AConsumer<T>): ARFuture<T>;
    to(onDone: AConsumer<T>, onError: AConsumer<Error>): ARFuture<T>;
    to(f: ARFuture<T>): ARFuture<T>;
    to(f: AFuture): ARFuture<T>;
    to(task: AConsumer<T>, timeout: number, onTimeout: ARunnable): ARFuture<T>;

    toFuture(): AFuture;
    and<T2>(f: ARFuture<T2>): ARFuture<Tuple2<T, T2>>;
    map<E>(f: AFunction<T, E>): ARFuture<E>;
    mapRFuture<E>(f: AFunction<T, ARFuture<E>>): ARFuture<E>;
    apply(c: AConsumer<T> | ARunnable): ARFuture<T>;
    decompose<E>(): ARFuture<E>;
    decomposeFuture(): AFuture;

    of(value?: T): ARFuture<T>;
    canceled(): ARFuture<T>;
    ofThrow(throwable: Error): ARFuture<T>;
}
export interface ARFutureWithFlag<T> extends ARFuture<T> {
    tryRequest(): boolean;
    tryError(error: Error): boolean;
}

export interface AMFuture<T> extends AConsumer<T> {
    eventConsumer: EventConsumer<T>;
    refresh(): void;
    set(value: T): boolean;
    map<V2>(f: AFunction<T, V2>): AMFuture<V2>;
    once(task: AConsumer<T>, msOrSeconds: number, timeoutTask: ARunnable): void;
    toOnce(task: AConsumer<T>): void;
    once(task: AConsumer<T>): void;
    addWeak(task: AConsumer<T>): void;
    add(task: AConsumer<T>): void;
    getNow(): T | null;
    mapToARFuture(): ARFuture<T>;
    isDone(): boolean;
}


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
            if (existing === listener) { toDelete = existing; break; }
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
                if(onceFlag){
                    l(v);
                    toRemove.push(l);
                }else{
                    l(v);
                }
            } catch (e) {
                console.error("Error firing event listener:", e);
            }
        }
        toRemove.forEach(l => this.listeners.delete(l));
    }


    public hasListener(): boolean { return this.listeners.size > 0; }
}

export class EventBiConsumer<T1, T2> {
    private readonly listeners: Set<ABiConsumer<T1, T2>> = new Set();

    public add(listener: ABiConsumer<T1, T2>): void {
        this.listeners.add(Log.wrap(listener));
    }
    public hasListener(): boolean { return this.listeners.size > 0; }
    public fire(v1: T1, v2: T2): void {
        const currentListeners = Array.from(this.listeners);
        for (const l of currentListeners) {
            if (!this.listeners.has(l)) continue;
            try { l(v1, v2); } catch (e) { console.error("Error firing bi-event listener:", e); }
        }
    }
}

// --- AMFuture Implementation ---

class AMFutureBase<T> {
    public eventConsumer: EventConsumer<T>;
    private value: T | null;

    constructor(value?: T) {
        this.value = value === undefined ? null : value;
        this.eventConsumer = new EventConsumer<T>();
    }

    public refresh(): void {
        if (this.value !== null) {
            this.eventConsumer.fire(this.value);
        }
    }

    public accept: AConsumer<T> = (value: T) => { this.set(value); };

    public set(value: T): boolean {
        const oldValue = this.value;
        if (oldValue === value) { return false; }
        this.value = value;
        this.eventConsumer.fire(value);
        return true;
    }

    public map<V2>(f: AFunction<T, V2>): AMFuture<V2> {
        const res = createAMFuture<V2>();
        this.add((v: T) => { try { res.set(f(v)); } catch (e) { console.error("Error in AMFuture map function:", e); } });
        if (this.value !== null) { try { res.set(f(this.value)); } catch (e) { console.error("Error in AMFuture map function (initial value):", e); } }
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
            (task as any)['onceFlag']=true;

            timerDisposer = RU.schedule(ms, () => {
                timerDisposer = null;
                if (!executed) {
                    executed = true;
                    try { timeoutTask(); this.eventConsumer.remove(task); } catch (e) { Log.error(e as Error); }
                }
            });

            this.eventConsumer.once(task);
            if (this.value !== null) {
                try { task(this.value); } catch (e) { Log.error(e as Error); timerDisposer?.[Symbol.dispose](); this.eventConsumer.remove(task); }
            }

        } else if (typeof taskOrT2 === 'function' && arguments.length === 1) {
            this.toOnce(taskOrT2 as AConsumer<T>);
        } else {
            throw new Error("Invalid arguments for AMFuture.once");
        }
    }

    public toOnce(task: AConsumer<T>): void {
        (task as any)['onceFlag']=true;
        this.once(task);
    }

    public addWeak(task: AConsumer<T>): void {
        console.warn("AMFuture.addWeak is not truly weak in this JS implementation.");
        this.add(task);
    }

    public add(task: AConsumer<T>): void {
        this.eventConsumer.add(task);
        if (this.value !== null) {
            try { Log.wrap(task)(this.value); } catch (e) { Log.error(e as Error); }
        }
    }

    public getNow(): T | null { return this.value; }

    public mapToARFuture(): ARFuture<T> {
        if (this.value !== null) return ARFutureImpl.of(this.value);
        const res = new ARFutureImpl<T>();
        this.once((value: T) => res.tryDone(value));
        return res;
    }

    public isDone(): boolean { return this.value !== null; }
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
        getNow: instance.getNow.bind(instance),
        mapToARFuture: instance.mapToARFuture.bind(instance),
        isDone: instance.isDone.bind(instance),
        accept: consumerFunction
    }) as AMFuture<T>;
}

export namespace AMFutureImpl {
    export function completed<T>(value: T): AMFuture<T> {
        const res = createAMFuture<T>();
        res.set(value);
        return res;
    }
}


// =============================================================================================
// SECTION 3: FUTURE IMPLEMENTATION
// =============================================================================================

enum FutureStatus { PENDING, DONE, ERROR, CANCELED }

abstract class AFutureBaseImpl<Self extends AFutureBase<Self>> {
    protected status: FutureStatus = FutureStatus.PENDING;
    protected errorValue: Error | null = null;
    protected listeners: AConsumer<Self>[] = [];

    public isFinalStatus(): boolean { return this.status !== FutureStatus.PENDING; }
    public isError(): boolean { return this.status === FutureStatus.ERROR; }
    public isDone(): boolean { return this.status === FutureStatus.DONE; }
    public isCanceled(): boolean { return this.status === FutureStatus.CANCELED; }
    public isNotDone(): boolean { return this.status !== FutureStatus.DONE; }
    public getError(): Error | null { return this.errorValue; }

    public error(e: Error): Self { this.resolve(FutureStatus.ERROR, e); return this as unknown as Self; }
    public setError(e: Error): void { this.error(e); }
    public cancel(): void { this.resolve(FutureStatus.CANCELED); }
    protected resolve(newStatus: FutureStatus, error?: Error): boolean {
        if (this.status !== FutureStatus.PENDING) return false;
        this.status = newStatus;
        if (error) this.errorValue = error;
        const currentListeners = [...this.listeners];
        this.listeners = [];
        currentListeners.forEach(l => {
            try {
                Log.wrap(l as AConsumer<AFutureBase<Self>>)(this as unknown as Self)
            } catch (e) {
                console.error("Error executing future listener:", e);
            }
        });
        return true;
    }

    public addListener(l: AConsumer<Self>): boolean {
        if (this.isFinalStatus()) {
            try {
                l(this as unknown as Self);
            } catch (e) {
                console.error("Error executing immediate future listener:", e);
            }
            return false;
        }
        this.listeners.push(l);
        return true;
    }

    public onCancel(l: ARunnable): Self {
        this.addListener(f => { if (f.isCanceled()) l(); });
        return this as unknown as Self;
    }

    public onError(l: AConsumer<Error>): Self {
        this.addListener(f => { if (f.isError() && f.getError()) l(f.getError()!); });
        return this as unknown as Self;
    }

    public abstract to(...args: any[]): Self;

    public waitSuccessful(_timeout?: number): boolean {
        console.warn("waitSuccessful is not implemented asynchronously in TS.");
        return this.isFinalStatus();
    }
    public waitDone(_timeout?: number): boolean {
        console.warn("waitDone is not implemented asynchronously in TS.");
        return this.isFinalStatus();
    }

    public timeoutError(seconds: number, text: string): Self {
        RU.schedule(seconds * 1000, () => {
            if (this.isNotDone()) {
                this.error(new Error(`Timeout: ${text} after ${seconds}s`));
            }
        });
        return this as unknown as Self;
    }
    public timeoutMs(ms: number, task: ARunnable): Self {
        RU.schedule(ms, () => {
            if (this.isNotDone()) {
                try { task(); } catch (e) { Log.error("Error in future timeout task", e as Error); }
                this.cancel();
            }
        });
        return this as unknown as Self;
    }
    public destroy(_force: boolean): AFuture { this.cancel(); return AFutureImpl.of(); }
}

export class AFutureImpl extends AFutureBaseImpl<AFuture> implements AFuture {
    public done(): void { this.resolve(FutureStatus.DONE); }
    public tryDone(): boolean { return this.resolve(FutureStatus.DONE); }
    public and(f: AFuture): AFuture {
         const res = new AFutureImpl();
         let count = 0;
         let firstError: Error | null = null;
         let canceled = false;
         const checkDone = () => {
             count++;
             if (count === 2 && !res.isFinalStatus()) {
                  if (canceled) res.cancel();
                  else if (firstError) res.error(firstError);
                  else res.tryDone();
             }
         };
         const onError = (e: Error) => { if (!res.isFinalStatus()) { if(!firstError) firstError = e; checkDone(); } };
         const onCancel = () => { if (!res.isFinalStatus()) { canceled = true; checkDone(); } };

         this.to(checkDone).onError(onError).onCancel(onCancel);
         f.to(checkDone).onError(onError).onCancel(onCancel);
         return res;
     }
    public apply(t: ARunnable): AFuture {
         if(this.isDone()) {
              try { t(); } catch(e) { Log.error("Error in AFuture.apply", e as Error); }
         }
         return this;
     }
    public mapRFuture<T>(t: ASupplier<T>): ARFuture<T> {
         const res = new ARFutureImpl<T>();
         this.to(
             () => { try { res.tryDone(t()); } catch(e) { res.error(e as Error); } }
         ).onError(
             (err: Error) => res.error(err)
         ).onCancel(() => res.cancel());
         return res;
     }

    public to(executor: Executor, t: ARunnable): AFuture;
    public to(t: ARunnable): AFuture;
    public to(f: AFuture): AFuture;
    public to(...args: any[]): AFuture {
        const first = args[0];
        const second = args[1];

        if (args.length === 1 && first && typeof (first as AFuture).addListener === 'function') {
             const f = first as AFuture;
             this.addListener(self => {
                 if (self.isDone()) f.tryDone();
                 else if (self.isError()) f.error(self.getError()!);
                 else if (self.isCanceled()) f.cancel();
             });
             return this;
        }

        const taskRunnable = (typeof first === 'function' ? first : second) as ARunnable;
        const executor = (typeof first !== 'function' ? first : undefined) as Executor | undefined;

        if(!taskRunnable) {
             throw new Error("Invalid arguments for AFuture.to (runnable)");
        }

        const taskToRun:ARunnable = () => {
             if (this.isDone()) {
                 try { taskRunnable(); } catch(e) { Log.error("Error in future ARunnable task", e as Error); }
             }
        };

        this.addListener(_f => {
            if (executor) {
                 try { executor(taskToRun); } catch(e) { Log.error("Error submitting future task to executor", e as Error); }
            } else {
                taskToRun();
            }
        });
        return this;
    }

    public static make(): AFuture { return new AFutureImpl(); }
    public static of(e?: Error): AFuture {
        const f = new AFutureImpl();
        if (e) { f.error(e); } else { f.done(); }
        return f;
    }
    public static ofThrow(e: Error): AFuture { const f = new AFutureImpl(); f.error(e); return f; }
    public static completed(): AFuture { return AFutureImpl.of(); }
    public static canceled(): AFuture { const f = new AFutureImpl(); f.cancel(); return f; }

    public make(): AFuture { return AFutureImpl.make(); }
    public completed(): AFuture { return AFutureImpl.completed(); }
    public canceled(): AFuture { return AFutureImpl.canceled(); }
    public of(e?: Error): AFuture { return AFutureImpl.of(e); }
    public ofThrow(e: Error): AFuture { return AFutureImpl.ofThrow(e); }

    public static all(...futures: AFuture[]): AFuture {
        const result = new AFutureImpl();
        let count = 0;
        let firstError: Error | null = null;
        let canceled = false;

        if (futures.length === 0) {
             result.tryDone();
             return result;
        }

        futures.forEach(f => {
             f.to(
                 () => {
                     if (result.isFinalStatus()) return;
                     count++;
                     if (count === futures.length) {
                         result.tryDone();
                     }
                 }
             ).onError(
                 (error: Error) => {
                     if (result.isFinalStatus()) return;
                     if (!firstError) firstError = error;
                     result.error(error);
                 }
             ).onCancel(() => {
                 if (result.isFinalStatus()) return;
                 canceled = true;
                 result.cancel();
             });
        });
        return result;
     }
}

export class ARFutureImpl<T> extends AFutureBaseImpl<ARFuture<T>> implements ARFuture<T> {
    private value: T | null = null;

    public toWithFlag(): ARFutureWithFlag<T> {
        const flagFuture = new ARFutureWithFlagImpl<T>();
        this.to(flagFuture as unknown as ARFuture<T>);
        if (this.isDone()) flagFuture.tryDone(this.value as T);
        else if (this.isError()) flagFuture.tryError(this.getError()!);
        else if (this.isCanceled()) flagFuture.cancel();
        return flagFuture;
    }

    public done(value: T): void { this.resolve(FutureStatus.DONE, undefined); this.value = value; }
    public tryDone(value: T): boolean {
        const resolved = this.resolve(FutureStatus.DONE, undefined);
        if(resolved) this.value = value;
        return resolved;
    }
    public get(_timeout?: number): T {
        if (this.status === FutureStatus.DONE) return this.value as T;
        throw new Error("Future not done (get() called)");
    }
    public getNow(): T | null { return this.isDone() ? this.value as T : null; }
    public getNowElse(elseValue: T): T { return this.isDone() ? this.value as T : elseValue; }
    public toFuture(): AFuture {
        const f = AFutureImpl.make();
        this.to(f);
        return f;
     }
    public and<T2>(f2: ARFuture<T2>): ARFuture<Tuple2<T, T2>> {
        const res = new ARFutureImpl<Tuple2<T, T2>>();
        ARFutureImpl.all([this as ARFuture<any>, f2 as ARFuture<any>]).to(
            (value: any[]) => res.tryDone(value as Tuple2<T, T2>),
            (err: Error) => res.error(err)
        ).onCancel(() => res.cancel());
        return res;
    }
    public map<E>(func: AFunction<T, E>): ARFuture<E> {
        const res = new ARFutureImpl<E>();
        this.to(
            (value: T) => { try { res.tryDone(func(value)); } catch(e) { res.error(e as Error); } },
            (error: Error) => res.error(error)
        ).onCancel(() => res.cancel());
        return res;
    }
    public mapRFuture<E>(func: AFunction<T, ARFuture<E>>): ARFuture<E> {
        const res = new ARFutureImpl<E>();
        this.to(
            (value: T) => {
                try {
                     const nextFuture = func(value);
                     nextFuture.to(res as unknown as ARFuture<any>);
                 } catch(e) {
                     res.error(e as Error);
                 }
             },
            (error: Error) => res.error(error)
        ).onCancel(() => res.cancel());
        return res;
    }

    public apply(c: AConsumer<T> | ARunnable): ARFuture<T> {
        this.to((value: T) => {
             try {
                if (typeof c === 'function' && c.length === 1) {
                    (c as AConsumer<T>)(value);
                } else {
                    (c as ARunnable)();
                }
             } catch(e) {
                 Log.error("Error in ARFuture.apply callback", e as Error);
             }
        });
        return this;
    }

    public decompose<E>(): ARFuture<E> {
        Log.warn("ARFuture.decompose is unsafe.");
        return this as unknown as ARFuture<E>;
    }
    public decomposeFuture(): AFuture {
        return this as unknown as AFuture;
    }

    public to(executor: Executor, t: ARunnable): ARFuture<T>;
    public to(t: ARunnable): ARFuture<T>;
    public to(onDone: AConsumer<T>): ARFuture<T>;
    public to(onDone: AConsumer<T>, onError: AConsumer<Error>): ARFuture<T>;
    public to(f: ARFuture<T>): ARFuture<T>;
    public to(f: AFuture): ARFuture<T>;
    public to(task: AConsumer<T>, timeout: number, onTimeout: ARunnable): ARFuture<T>;
    public to(...args: any[]): ARFuture<T> {
        const first = args[0];
        const second = args[1];
        const third = args[2];

        if (typeof first === 'function' && first.length === 1 && args.length === 1) {
            this.addListener(f => { if (f.isDone()) (first as AConsumer<T>)(f.getNow()!); });
            return this;
        }
        else if (typeof first === 'function' && first.length === 1 && typeof second === 'function' && second.length === 1 && args.length === 2) {
            this.addListener(f => {
                if (f.isDone()) (first as AConsumer<T>)(f.getNow()!);
                else if (f.isError() && f.getError()) (second as AConsumer<Error>)(f.getError()!);
            });
            return this;
        }
        else if (typeof first === 'function' && first.length === 1 && typeof second === 'number' && typeof third === 'function' && args.length === 3) {
            this.addListener(f => { if (f.isDone()) (first as AConsumer<T>)(f.getNow()!); });
            return this;
        }
        else if (first && typeof (first as AFuture).addListener === 'function' && args.length === 1) {
            const f = first as AFuture;
            this.addListener(self => {
                if (self.isDone()) {
                    const fAsArFuture = f as unknown as ARFuture<T>;
                    if (fAsArFuture.tryDone && typeof fAsArFuture.tryDone === 'function') {
                        fAsArFuture.tryDone(self.getNow()!);
                    } else { f.tryDone(); }
                } else if (self.isError()) { f.error(self.getError()!); }
                else if (self.isCanceled()) { f.cancel(); }
            });
            return this;
        }
        else {
            const taskRunnable = (typeof first === 'function' ? first : second) as ARunnable;
            const executor = (typeof first !== 'function' ? first : undefined) as Executor | undefined;

            if(!taskRunnable) { throw new Error("Invalid arguments for ARFuture.to (runnable)"); }

            const taskToRun = () => {
                 if (this.isDone()) {
                     try { taskRunnable(); } catch(e) { Log.error("Error in future ARunnable task", e as Error); }
                 }
            };

            this.addListener(_f => {
                if (executor) {
                     try { executor(taskToRun); } catch(e) { Log.error("Error submitting future task to executor", e as Error); }
                } else {
                    taskToRun();
                }
            });
            return this;
        }
    }

    public static of<T>(value?: T): ARFuture<T> { const f = new ARFutureImpl<T>(); if (value !== undefined) f.tryDone(value as T); return f; }
    public static canceled<T>(): ARFuture<T> { const f = new ARFutureImpl<T>(); f.cancel(); return f; }
    public static ofThrow<T>(throwable: Error): ARFuture<T> { const f = new ARFutureImpl<T>(); f.error(throwable); return f; }
    public static all<T>(list: Array<ARFuture<T>>): ARFuture<Array<T>> {
        const futures = list;
        if (futures.length === 0) { return ARFutureImpl.of([]); }

        const result = new ARFutureImpl<T[]>();
        const results: T[] = new Array(futures.length);
        let count = 0;

        futures.forEach((f, index) => {
             f.to(
                 (value: T) => {
                     if (result.isFinalStatus()) return;
                     results[index] = value;
                     count++;
                     if (count === futures.length) result.tryDone(results);
                 },
                 (error: Error) => {
                     if (result.isFinalStatus()) return;
                     result.error(error);
                 }
             ).onCancel(() => { if (result.isNotDone()) result.cancel(); });
        });
        return result;
    }

    public of(value?: T): ARFuture<T> { return ARFutureImpl.of(value); }
    public canceled(): ARFuture<T> { return ARFutureImpl.canceled(); }
    public ofThrow(throwable: Error): ARFuture<T> { return ARFutureImpl.ofThrow(throwable); }
}

export class ARFutureWithFlagImpl<T> extends ARFutureImpl<T> implements ARFutureWithFlag<T> {
    private requested: boolean = false;
    public tryRequest(): boolean {
        if (this.isFinalStatus() || this.requested) return false;
        this.requested = true;
        return true;
    }
    public tryError(error: Error): boolean {
        return this.error(error) === this;
    }
}
/**
 * @file aether_future.ts
 * @purpose Contains all Future (AFuture, ARFuture, AMFuture) implementations and EventConsumer.
 * @dependencies aether_types.ts, aether_logging.ts, aether_utils.ts
 */

import {
    Disposable, ARunnable, ASupplier, AConsumer, ABiConsumer, AFunction,
    Executor, Tuple2,
    WeakConsumer_T, /** <-- IMPORTED */
} from './aether_types';
import { RU } from './aether_utils';
import { Log } from './aether_logging';

// =============================================================================================
// SECTION 1: SLOTS (Event) IMPLEMENTATION
// =============================================================================================

/**
 * Manages and fires events for a single type.
 * @template T The type of the event value.
 */
export class EventConsumer<T> {
    /**
     * The set of all registered listeners.
     */
    public readonly listeners: Set<AConsumer<T>> = new Set();

    /**
     * Adds a listener that will be executed only once.
     * @param task The listener function.
     */
    public once(task: AConsumer<T>): void {
        (task as any)['_onceFlag'] = true;
        this.add(task);
    }

    /**
     * Adds a persistent listener.
     * @param listener The listener function.
     */
    public add(listener: AConsumer<T>): void {
        this.listeners.add(Log.wrap(listener));
    }

    /**
     * Removes a listener.
     * This handles removing raw listeners, wrapped listeners, and WeakConsumer listeners.
     * @param listener The original listener function to remove.
     */
    public remove(listener: AConsumer<T>): void {
        let toDelete: AConsumer<T> | null = null;
        for (const existing of this.listeners) {
            /**
             * 'existing' could be:
             * 1. The raw listener (listener)
             * 2. The wrapped listener (Log.wrap(listener))
             * 3. The weak wrapper (WeakConsumer_T.create(...))
             */
            if (existing === listener) {
                /** Case 1: Raw listener */
                toDelete = existing;
                break;
            }

            if ((existing as any).__original === listener) {
                /** Case 2: Log.wrap(listener) */
                toDelete = existing;
                break;
            }

            /** Case 3: Check if it's a weak consumer matching the listener */
            const weakOriginal = (existing as any)._weakOriginalTask;
            if (weakOriginal) {
                if (weakOriginal === listener || (weakOriginal as any).__original === listener) {
                    toDelete = existing;
                    break;
                }
            }
        }
        if (toDelete) { this.listeners.delete(toDelete); }
    }

    /**
     * Fires the event, notifying all listeners.
     * This also cleans up 'once' listeners and garbage-collected 'weak' listeners.
     * @param v The value to pass to the listeners.
     */
    public fire(v: T): void {
        const currentListeners = Array.from(this.listeners);
        const toRemove: AConsumer<T>[] = [];

        for (const l of currentListeners) {
            if (!this.listeners.has(l)) continue; /** Was removed during firing */
            try {
                const onceFlag = (l as any)['_onceFlag'] as boolean;

                if (onceFlag) {
                    toRemove.push(l); /** Mark for removal after firing */
                    l(v);
                } else if (WeakConsumer_T.isGarbageCollected(l)) {
                    toRemove.push(l); /** Mark GC'd weak listener for removal */
                } else {
                    l(v);
                }
            } catch (e) { console.error("Error firing event listener:", e); }
        }

        /** Clean up 'once' and 'weak' listeners */
        toRemove.forEach(l => this.listeners.delete(l));
    }

    /**
     * Checks if any listeners are registered.
     * @returns True if at least one listener exists.
     */
    public hasListener(): boolean { return this.listeners.size > 0; }
}

/**
 * Manages and fires events for two types.
 * @template T1 The type of the first event value.
 * @template T2 The type of the second event value.
 */
export class EventBiConsumer<T1, T2> {
    private readonly listeners: Set<ABiConsumer<T1, T2>> = new Set();

    /**
     * Adds a persistent listener.
     * @param listener The listener function.
     */
    public add(listener: ABiConsumer<T1, T2>): void { this.listeners.add(Log.wrap(listener)); }

    /**
     * Removes a listener.
     * @param listener The listener function to remove.
     */
    public remove(listener: ABiConsumer<T1, T2>): void {
        let toDelete: ABiConsumer<T1, T2> | null = null;
        for (const existing of this.listeners) {
            /** Check for the listener or the original wrapped listener */
            if (existing === listener || (existing as any).__original === listener) {
                toDelete = existing;
                break;
            }
        }
        if (toDelete) { this.listeners.delete(toDelete); }
    }

    /**
     * Checks if any listeners are registered.
     * @returns True if at least one listener exists.
     */
    public hasListener(): boolean { return this.listeners.size > 0; }

    /**
     * Fires the event, notifying all listeners.
     * @param v1 The first value to pass to the listeners.
     * @param v2 The second value to pass to the listeners.
     */
    public fire(v1: T1, v2: T2): void {
        this.listeners.forEach(l => {
            try { l(v1, v2); } catch (e) { console.error("Error firing bi-event listener:", e); }
        });
    }
}

// --- AMFuture Implementation ---

/**
 * A mutable future (or "slot") that holds a value and fires events on change.
 * This is a "callable" object: you can call it like a function `myAMFuture(newValue)`
 * to set its value.
 *
 * @template T The type of the value.
 */
export interface AMFuture<T> extends AConsumer<T> {
    /**
     * Event consumer that fires when the value is set or changed.
     */
    readonly eventConsumer: EventConsumer<T>;

    /**
     * Re-fires the event with the current value, if one exists.
     */
    refresh(): void;

    /**
     * Sets the value and fires the event.
     * Returns true if the value was changed or set for the first time.
     * @param value The new value.
     * @returns True if the value was set or changed.
     */
    set(value: T): boolean;

    /**
     * Creates a new, mapped AMFuture.
     * @param f The mapping function.
     * @template V2 The new type.
     * @returns A new AMFuture of type V2.
     */
    map<V2>(f: AFunction<T, V2>): AMFuture<V2>;

    /**
     * Adds a one-time listener with a timeout.
     * @param task The listener function.
     * @param msOrSeconds Timeout in milliseconds or seconds.
     * @param timeoutTask A runnable to execute if the timeout occurs first.
     */
    once(task: AConsumer<T>, msOrSeconds: number, timeoutTask: ARunnable): void;

    /**
     * Adds a one-time listener. Fires immediately if the value is already set.
     * @param task The listener function.
     */
    once(task: AConsumer<T>): void;

    /**
     * Alias for `once(task)`.
     * @param task The listener function.
     */
    toOnce(task: AConsumer<T>): void;

    /**
     * Adds a weak listener. The listener will be automatically removed
     * by the EventConsumer when it is garbage collected.
     * @param task The listener function.
     */
    addWeak(task: AConsumer<T>): void;

    /**
     * Adds a persistent listener. Fires immediately if the value is already set.
     * @param task The listener function.
     */
    add(task: AConsumer<T>): void;

    /**
     * Removes a listener.
     * @param task The listener function to remove.
     */
    remove(task: AConsumer<T>): void;

    /**
     * Gets the current value, or null if not set.
     * @returns The current value or null.
     */
    getNow(): T | null;

    /**
     * Converts this AMFuture to an ARFuture.
     * If the value is already set, returns a completed ARFuture.
     * Otherwise, returns a new ARFuture that completes when this AMFuture is set.
     * @returns An ARFuture.
     */
    mapToARFuture(): ARFuture<T>;

    /**
     * Checks if the value has been set.
     * @returns True if the value is not null/undefined.
     */
    isDone(): boolean;
}

/**
 * Base class for AMFuture implementation details.
 * @internal
 */
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

        /**
         * This complex block mimics the Java VarHandle.compareAndSet
         * to ensure `fire` happens only on the thread that successfully sets
         * the value from null. In JS, it's less critical but preserved.
         */
        if (oldValue === null || oldValue === undefined) {
            if (this.value === null || this.value === undefined) {
                this.value = value;
                this.eventConsumer.fire(value);
                return true;
            } else {
                /** Lost the "race" (e.g., recursive call), try again */
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
                /** Call `res` as a function to set its value */
                res(f(v));
            } catch (e) { console.error("Error in AMFuture map function:", e); }
        });
        if (this.value !== null && this.value !== undefined) {
            try {
                /** Call `res` for the initial value */
                res(f(this.value));
            } catch (e) { console.error("Error in AMFuture map function (initial value):", e); }
        }
        return res;
    }

    public once(task: AConsumer<T>, msOrSeconds: number, timeoutTask: ARunnable): void;
    public once(task: AConsumer<T>): void;
    public once(taskOrT2: AConsumer<T>, msOrSeconds?: number, timeoutTask?: ARunnable): void {
        /** Overload: (task, ms, timeoutTask) */
        if (typeof msOrSeconds === 'number' && typeof timeoutTask === 'function') {
            const ms = msOrSeconds > 1000000 ? msOrSeconds : msOrSeconds * 1000;
            const task = taskOrT2 as AConsumer<T>;
            let timerDisposer: Disposable | null = null;
            let executed = false;
            const wrappedTask = Log.wrap(task);
            (wrappedTask as any)['_onceFlag'] = true;
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
                try { wrappedTask(this.value); } /** fire() will handle removal */
                catch (e) { Log.error(e as Error); removeListener(); }
            }
        }
        /** Overload: (task) */
        else if (typeof taskOrT2 === 'function' && arguments.length === 1) {
            this.toOnce(taskOrT2 as AConsumer<T>);
        } else { throw new Error("Invalid arguments for AMFuture.once"); }
    }

    public toOnce(task: AConsumer<T>): void {
        const wrappedTask = Log.wrap(task);
        (wrappedTask as any)['_onceFlag'] = true;
        this.eventConsumer.add(wrappedTask);
        if (this.value !== null && this.value !== undefined) {
            try { wrappedTask(this.value); } /** fire() will handle removal */
            catch (e) { Log.error(e as Error); this.eventConsumer.remove(wrappedTask); }
        }
    }

    public addWeak(task: AConsumer<T>): void {
        const wrappedTask = Log.wrap(task);
        /** Create the weak wrapper */
        const weakTask = WeakConsumer_T.create(wrappedTask);
        this.eventConsumer.add(weakTask);

        /** Fire immediately if value exists */
        if (this.value !== null && this.value !== undefined) {
            try { weakTask(this.value); } catch (e) { Log.error(e as Error); }
        }
    }

    public add(task: AConsumer<T>): void {
        const wrappedTask = Log.wrap(task);
        this.eventConsumer.add(wrappedTask);
        if (this.value !== null && this.value !== undefined) {
            try { wrappedTask(this.value); } catch (e) { Log.error(e as Error); }
        }
    }

    public remove(task: AConsumer<T>): void {
        this.eventConsumer.remove(task);
    }

    public getNow(): T | null { return this.value ?? null; }

    public mapToARFuture(): ARFuture<T> {
        if (this.value !== null && this.value !== undefined) {
            return ARFuture.of(this.value);
        }
        const res = new ARFuture<T>();
        this.once((value: T) => res.tryDone(value));
        return res;
    }

    public isDone(): boolean { return this.value !== null && this.value !== undefined; }
}

/**
 * Factory function to create a new AMFuture instance.
 * @param initialValue An optional initial value.
 * @returns A callable AMFuture instance.
 */
export function createAMFuture<T>(initialValue?: T): AMFuture<T> {
    const instance = new AMFutureBase<T>(initialValue);
    /** Create the callable function */
    const consumerFunction = instance.accept.bind(instance) as AConsumer<T>;
    /** Assign all public properties from the base class to the function object */
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

/**
 * Namespace for AMFuture static methods.
 */
export namespace AMFuture {
    /**
     * Creates a new AMFuture that is already completed with the given value.
     * @param value The completed value.
     * @returns A new, completed AMFuture.
     */
    export function completed<T>(value: T): AMFuture<T> {
        const res = createAMFuture<T>();
        res.set(value);
        return res;
    }
}


// =============================================================================================
// SECTION 2: FUTURE IMPLEMENTATION (Refactored)
// =============================================================================================

/**
 * Internal enum for future status.
 * @internal
 */
enum FutureStatus { PENDING, DONE, ERROR, CANCELED }

/**
 * Base class for AFuture and ARFuture.
 * @internal
 */
abstract class AFutureBaseImpl<Self extends AFutureBaseImpl<Self>> {
    protected status: FutureStatus = FutureStatus.PENDING;
    protected errorValue: Error | null = null;
    protected listeners: AConsumer<Self>[] = [];

    /**
     * Checks if the future is in a final state (DONE, ERROR, or CANCELED).
     * @returns True if the future is finalized.
     */
    public isFinalStatus(): boolean { return this.status !== FutureStatus.PENDING; }

    /**
     * Checks if the future completed with an error.
     * @returns True if the status is ERROR.
     */
    public isError(): boolean { return this.status === FutureStatus.ERROR; }

    /**
     * Checks if the future completed successfully.
     * @returns True if the status is DONE.
     */
    public isDone(): boolean { return this.status === FutureStatus.DONE; }

    /**
     * Checks if the future was canceled.
     * @returns True if the status is CANCELED.
     */
    public isCanceled(): boolean { return this.status === FutureStatus.CANCELED; }

    /**
     * Checks if the future is *not* successfully completed.
     * @returns True if PENDING, ERROR, or CANCELED.
     */
    public isNotDone(): boolean { return this.status !== FutureStatus.DONE; }

    /**
     * Gets the error if the future is in an error state.
     * @returns The Error object or null.
     */
    public getError(): Error | null { return this.errorValue; }

    public tryError(e: Error): boolean {
        if (this.status === FutureStatus.PENDING) {
            this.errorValue = e;
            this.resolve(FutureStatus.ERROR);
            return true;
        }
        return false;
    }
    /**
     * Completes the future with an error.
     * @param e The error.
     * @returns This future instance.
     */
    public error(e: Error): Self {
        if (this.status === FutureStatus.PENDING) {
            this.errorValue = e;
            this.resolve(FutureStatus.ERROR);
        }
        return this as unknown as Self;
    }

    /**
     * Alias for `error(e)`.
     * @param e The error.
     */
    public setError(e: Error): void { this.error(e); }

    /**
     * Cancels the future.
     */
    public cancel(): void { this.resolve(FutureStatus.CANCELED); }

    /**
     * Resolves the future with a new status and notifies listeners.
     * @param newStatus The final status.
     * @returns True if the status was changed, false if already finalized.
     */
    protected resolve(newStatus: FutureStatus): boolean {
        if (this.status !== FutureStatus.PENDING) return false;
        this.status = newStatus;
        /** Notify listeners */
        const currentListeners = [...this.listeners];
        this.listeners = []; /** Clear listeners *before* firing */
        currentListeners.forEach(l => {
            try { Log.wrap(l)(this as unknown as Self); }
            catch (e) { console.error("Error executing future listener:", e); }
        });
        return true;
    }

    /**
     * Adds a listener to be called when the future is finalized.
     * If the future is already finalized, the listener is called immediately.
     * @param l The listener function.
     * @returns True if the listener was added (future was pending), false otherwise.
     */
    public addListener(l: AConsumer<Self>): boolean {
        if (this.isFinalStatus()) {
            try { l(this as unknown as Self); }
            catch (e) { console.error("Error executing immediate future listener:", e); }
            return false;
        }
        this.listeners.push(l);
        return true;
    }

    /**
     * Adds a listener to be called only if the future is canceled.
     * @param l The runnable to execute on cancellation.
     * @returns This future instance.
     */
    public onCancel(l: ARunnable): Self {
        this.addListener(f => { if (f.isCanceled()) l(); });
        return this as unknown as Self;
    }

    /**
     * Adds a listener to be called only if the future errors.
     * @param l The consumer to accept the error.
     * @returns This future instance.
     */
    public onError(l: AConsumer<Error>): Self {
        this.addListener(f => { if (f.isError() && f.getError()) l(f.getError()!); });
        return this as unknown as Self;
    }

    /**
     * Abstract method for `to` implementations.
     */
    public abstract to(...args: any[]): Self;

    /**
     * @deprecated Synchronous waiting is not supported in JavaScript. Use .toPromise() with async/await.
     */
    public waitSuccessful(_timeout?: number): boolean {
        console.warn("AFutureBase.waitSuccessful is synchronous and not supported in JavaScript. Use .toPromise() instead.");
        return this.isDone();
    }

    /**
     * @deprecated Synchronous waiting is not supported in JavaScript. Use .toPromise() with async/await.
     */
    public waitDone(_timeout?: number): boolean {
        console.warn("AFutureBase.waitDone is synchronous and not supported in JavaScript. Use .toPromise() instead.");
        return this.isFinalStatus();
    }

    /**
     * Sets a timeout to mark the future as an error.
     * @param seconds The timeout duration in seconds.
     * @param text The error message to use.
     * @returns This future instance.
     */
    public timeoutError(seconds: number, text: string): Self {
        const ms = seconds * 1000;
        const timerDisposer = RU.schedule(ms, () => {
            if (!this.isFinalStatus()) {
                this.error(new Error(`Timeout: ${text} after ${seconds}s`));
            }
        });
        /** Clean up the timer if the future completes first */
        this.addListener(_ => timerDisposer[Symbol.dispose]());
        return this as unknown as Self;
    }

    /**
     * Sets a timeout to execute a task and cancel the future.
     * @param ms The timeout duration in milliseconds.
     * @param task The task to run on timeout.
     * @returns This future instance.
     */
    public timeoutMs(ms: number, task: ARunnable): Self {
        const timerDisposer = RU.schedule(ms, () => {
            if (!this.isFinalStatus()) {
                try { task(); } catch (e) { Log.error("Error in future timeout task", e as Error); }
                this.cancel(); /** Cancel after task */
            }
        });
        /** Clean up the timer if the future completes first */
        this.addListener(_ => timerDisposer[Symbol.dispose]());
        return this as unknown as Self;
    }

    /**
     * Converts this future to a native JavaScript Promise.
     * @param timeoutMs Optional timeout in milliseconds for the promise.
     * @returns A Promise that resolves or rejects based on the future's state.
     */
    public toPromise(timeoutMs?: number): Promise<any> { /** 'any' because AFuture has no value */
        return new Promise((resolve, reject) => {
            let timerDisposer: Disposable | undefined;
            let timedOut = false;
            const cleanUp = () => { if (timerDisposer) { timerDisposer[Symbol.dispose](); timerDisposer = undefined; } };

            if (timeoutMs !== undefined && timeoutMs > 0) {
                timerDisposer = RU.schedule(timeoutMs, () => {
                    timedOut = true;
                    if (!this.isFinalStatus()) {
                        /** Reject the promise, but don't cancel the underlying future */
                        reject(new Error(`Future timed out after ${timeoutMs}ms`));
                    }
                });
            }

            /** Check immediate status */
            if (this.isFinalStatus()) {
                cleanUp();
                if (this.isDone()) resolve(undefined); /** AFuture resolves with undefined */
                else if (this.isError()) reject(this.getError() ?? new Error("Future failed"));
                else if (this.isCanceled()) reject(new Error("Future was canceled"));
                return;
            }

            /** Add listener */
            this.addListener(f => {
                if (timedOut) return; /** Timed out first */
                cleanUp();
                if (f.isDone()) resolve(undefined);
                else if (f.isError()) reject(f.getError() ?? new Error("Future failed"));
                else if (f.isCanceled()) reject(new Error("Future was canceled"));
            });
        });
    }

    /**
     * Destroys the future, canceling it.
     * @param _force (Not used).
     * @returns A completed AFuture.
     */
    public destroy(_force: boolean): AFuture {
        this.cancel();
        return AFuture.of(); /** Returns a *new* completed future */
    }

    /**
     * Implements the Disposable interface.
     */
    [Symbol.dispose](): void { this.destroy(true); }
}

/**
 * An asynchronous operation that completes with no return value (void).
 */
export class AFuture extends AFutureBaseImpl<AFuture> {
    /**
     * Marks the future as successfully completed.
     */
    public done(): void { this.resolve(FutureStatus.DONE); }

    /**
     * Attempts to mark the future as successfully completed.
     * @returns True if the status was changed, false if already finalized.
     */
    public tryDone(): boolean { return this.resolve(FutureStatus.DONE); }

    /**
     * Creates a new AFuture that completes when both this and the given future complete.
     * @param f The other future.
     * @returns A new AFuture.
     */
    public and(f: AFuture): AFuture {
        return AFuture.all(this, f);
    }

    /**
     * Executes a task upon successful completion.
     * @param t The runnable task.
     * @returns This future instance.
     */
    public apply(t: ARunnable): AFuture {
        this.to(t);
        return this;
    }

    /**
     * Maps the successful completion of this void future to a result-carrying future.
     * @param t The supplier function to generate the result.
     * @template T The type of the result.
     * @returns An ARFuture with the result.
     */
    public mapRFuture<T>(t: ASupplier<T>): ARFuture<T> {
        const res = new ARFuture<T>();
        this.to(
            () => { try { res.tryDone(t()); } catch (e) { res.error(e as Error); } }
        ).onError(
            (err: Error) => res.error(err)
        ).onCancel(() => res.cancel());
        return res;
    }

    /**
     * Executes a runnable task on a given executor upon successful completion.
     * @param executor The executor to run the task on.
     * @param t The runnable task.
     * @returns This future instance.
     */
    public to(executor: Executor, t: ARunnable): AFuture;
    /**
     * Executes a runnable task upon successful completion.
     * @param t The runnable task.
     * @returns This future instance.
     */
    public to(t: ARunnable): AFuture;
    /**
     * Propagates the result of this future to another future.
     * @param f The target future.
     * @returns This future instance.
     */
    public to(f: AFuture): AFuture;
    public to(...args: any[]): AFuture {
        const first = args[0]; const second = args[1];

        /** Overload: to(f: AFuture) */
        if (args.length === 1 && first instanceof AFutureBaseImpl) {
            const f = first as AFuture;
            this.addListener(self => {
                if (self.isDone()) f.tryDone();
                else if (self.isError()) f.error(self.getError()!);
                else if (self.isCanceled()) f.cancel();
            });
            this.onCancel(() => f.cancel()); /** Propagate cancellation */
            return this;
        }

        /** Overload: to(t: ARunnable) or to(executor: Executor, t: ARunnable) */
        const taskRunnable = (typeof first === 'function' ? first : second) as ARunnable;
        const executor = (typeof first !== 'function' ? first : undefined) as Executor | undefined;

        if (!taskRunnable || typeof taskRunnable !== 'function' || (taskRunnable.length !== 0 && taskRunnable.length !== undefined)) {
            /** Check for developer error. AConsumer<T> has length 1. */
            throw new Error("Invalid arguments for AFuture.to (runnable variant)");
        }
        const taskToRun: ARunnable = () => {
            if (this.isDone()) {
                try { taskRunnable(); } catch (e) { Log.error("Error in future ARunnable task", e as Error); }
            }
        };

        this.addListener(_f => {
            if (executor) {
                try { executor(taskToRun); } catch (e) { Log.error("Error submitting task to executor", e as Error); }
            } else {
                taskToRun();
            }
        });
        return this;
    }

    /**
     * Creates an AFuture that completes when the given promise resolves or rejects.
     * @param f A supplier function that returns a Promise.
     * @returns A new AFuture.
     */
    public static ofPromise(f: ASupplier<Promise<any>>): AFuture {
        const future = new AFuture();
        try {
            f().then(
                () => future.tryDone(),
                (e: any) => future.error(e instanceof Error ? e : new Error(String(e)))
            );
        } catch (e) {
            future.error(e as Error);
        }
        return future;
    }

    /**
     * Creates a new, pending AFuture.
     * @returns A new AFuture.
     */
    public static make(): AFuture { return new AFuture(); }

    /**
     * Creates a completed AFuture or one completed with an error.
     * @param e Optional error to complete with.
     * @returns A new, finalized AFuture.
     */
    public static of(e?: Error): AFuture {
        const f = new AFuture();
        if (e) f.error(e);
        else f.tryDone();
        return f;
    }

    /**
     * Creates a new AFuture completed with an error.
     * @param e The error.
     * @returns A new, errored AFuture.
     */
    public static ofThrow(e: Error): AFuture {
        const f = new AFuture();
        f.error(e);
        return f;
    }

    /**
     * Returns a statically completed AFuture.
     * @returns A completed AFuture.
     */
    public static completed(): AFuture { return AFuture.of(); }

    /**
     * Returns a statically canceled AFuture.
     * @returns A canceled AFuture.
     */
    public static canceled(): AFuture {
        const f = new AFuture();
        f.cancel();
        return f;
    }

    /**
     * Returns an AFuture that completes when all provided futures complete.
     * If any future errors or is canceled, the resulting future errors or is canceled.
     * @param futures The futures to wait for.
     * @returns A new AFuture.
     */
    public static all(...futures: AFutureBaseImpl<any>[]): AFuture {
        const result = new AFuture();
        let count = futures.length;
        let firstError: Error | null = null;
        let canceled = false;
        if (count === 0) {
            result.tryDone();
            return result;
        }

        const checkDone = (self: AFutureBaseImpl<any>) => {
            if (result.isFinalStatus()) return; /** Result already determined */
            if (self.isError()) firstError = firstError ?? self.getError();
            if (self.isCanceled()) canceled = true;

            count--;
            if (count === 0) { /** All futures are finalized */
                if (canceled) result.cancel();
                else if (firstError) result.error(firstError);
                else result.tryDone();
            }
        };

        futures.forEach(f => f.addListener(checkDone));
        /** Propagate cancellation */
        result.onCancel(() => futures.forEach(f => f.cancel()));
        return result;
    }

    /**
     * Returns an AFuture that completes when *any* provided future completes successfully.
     * If all futures error or are canceled, the resulting future errors or is canceled.
     * @param futures The futures to wait for.
     * @returns A new AFuture.
     */
    public static any(...futures: AFutureBaseImpl<any>[]): AFuture {
        const result = AFuture.make();
        if (futures.length === 0) {
            result.cancel(); /** No futures, so it can't complete */
            return result;
        }
        let errorCount = 0;
        let cancelCount = 0;

        const onComplete = () => {
            if (!result.isFinalStatus()) {
                result.tryDone();
                /** Cancel all others */
                futures.forEach(f => f.cancel());
            }
        };
        const onError = (err: Error) => {
            if (!result.isFinalStatus()) {
                errorCount++;
                if (errorCount + cancelCount === futures.length) {
                    /** All futures have failed or been canceled */
                    result.error(err); /** Complete with the last error */
                }
            }
        };
        const onCancel = () => {
            if (!result.isFinalStatus()) {
                cancelCount++;
                if (errorCount + cancelCount === futures.length) {
                    /** All futures have failed or been canceled */
                    result.cancel();
                }
            }
        };

        futures.forEach(f => f.to(onComplete).onError(onError).onCancel(onCancel));
        return result;
    }
}

/**
 * An asynchronous operation that completes with a result value of type T.
 * @template T The type of the result value.
 */
export class ARFuture<T> extends AFutureBaseImpl<ARFuture<T>> {
    private value: T | null = null;

    /**
     * Converts this ARFuture to an ARFutureWithFlag.
     * @returns A new ARFutureWithFlag.
     */
    public toWithFlag(): ARFutureWithFlag<T> {
        const ff = new ARFutureWithFlag<T>();
        this.to(ff); /** Propagates result */
        return ff;
    }

    /**
     * Marks the future as successfully completed with a value.
     * @param value The result value.
     */
    public done(value: T): void {
        if (this.status === FutureStatus.PENDING) this.value = value;
        this.resolve(FutureStatus.DONE);
    }

    /**
     * Attempts to mark the future as successfully completed with a value.
     * @param value The result value.
     * @returns True if the status was changed, false if already finalized.
     */
    public tryDone(value: T): boolean {
        if (this.status === FutureStatus.PENDING) {
            this.value = value;
            return this.resolve(FutureStatus.DONE);
        }
        return false;
    }

    /**
     * Gets the result value.
     * Throws an error if the future is not successfully completed.
     * @param _timeout (Not used in JS implementation).
     * @returns The result value.
     */
    public get(_timeout?: number): T {
        if (this.isDone() && this.value !== null) return this.value;
        if (this.isError()) throw this.errorValue ?? new Error("Future failed");
        if (this.isCanceled()) throw new Error("Future was canceled");
        /** This differs from Java, which would block. */
        throw new Error("ARFuture.get() called on a pending future in JavaScript.");
    }

    /**
     * Gets the result value if successfully completed, otherwise null.
     * @returns The result value or null.
     */
    public getNow(): T | null {
        return (this.isDone() && this.value !== null) ? this.value : null;
    }

    /**
     * Gets the result value if successfully completed, otherwise returns a default.
     * @param elseValue The value to return if not done.
     * @returns The result value or elseValue.
     */
    public getNowElse(elseValue: T): T {
        return (this.isDone() && this.value !== null) ? this.value : elseValue;
    }

    /**
     * Converts this result-carrying future to a void future.
     * @returns A new AFuture.
     */
    public toFuture(): AFuture {
        const f = AFuture.make();
        this.to(f); /** Propagates result (done/error/cancel) */
        return f;
    }

    /**
     * Combines this future with another, creating a new future for the tuple of results.
     * @param f2 The other future.
     * @template T2 The type of the other future's result.
     * @returns A new ARFuture holding a Tuple2 [T, T2].
     */
    public and<T2>(f2: ARFuture<T2>): ARFuture<Tuple2<T, T2>> {
        const res = new ARFuture<Tuple2<T, T2>>();
        /** Wait for both to finalize */
        AFuture.all(this, f2).to(
            () => {
                /**
                 * This 'to' only fires if AFuture.all() is 'DONE'
                 * which means both this and f2 must be 'DONE'.
                 */
                if (this.isDone() && f2.isDone()) {
                    res.tryDone([this.getNow()!, f2.getNow()!]);
                } else {
                    /** This should be unreachable */
                    res.error(new Error("Internal error in ARFuture.and"));
                }
            }
        ).onError((err: Error) => res.error(err)) /** Propagate error from all() */
            .onCancel(() => res.cancel());       /** Propagate cancel from all() */
        return res;
    }

    /**
     * Transforms the successful result of this future into a new ARFuture.
     * @param func The mapping function.
     * @template E The new result type.
     * @returns A new ARFuture.
     */
    public map<E>(func: AFunction<T, E>): ARFuture<E> {
        const res = new ARFuture<E>();
        this.to(
            (value: T) => {
                try { res.tryDone(func(value)); }
                catch (e) { res.error(e as Error); }
            },
            (error: Error) => res.error(error)
        ).onCancel(() => res.cancel());
        return res;
    }

    /**
     * Chains this future with another async operation.
     * @param func A function that takes the result T and returns a new ARFuture<E>.
     * @template E The new result type.
     * @returns A new ARFuture.
     */
    public mapRFuture<E>(func: AFunction<T, ARFuture<E>>): ARFuture<E> {
        const res = new ARFuture<E>();
        this.to(
            (value: T) => {
                try {
                    const nextFuture = func(value);
                    nextFuture.to(res); /** Propagate the result of the *next* future to res */
                }
                catch (e) { res.error(e as Error); }
            },
            (error: Error) => res.error(error)
        ).onCancel(() => res.cancel());
        return res;
    }

    /**
     * Executes a task upon successful completion, preserving the original result.
     * @param c A consumer (AConsumer<T>) or a runnable (ARunnable).
     * @returns This future instance.
     */
    public apply(c: AConsumer<T> | ARunnable): ARFuture<T> {
        this.to((value: T) => {
            try {
                /**
                 * This will call AConsumer<T> with the value,
                 * or ARunnable without the value.
                 */
                (c as AConsumer<T>)(value);
            } catch (e) { Log.error("Error in ARFuture.apply", e as Error); }
        });
        return this;
    }

    /**
     * Assumes this future's value (T) is *also* an ARFuture (e.g., ARFuture<ARFuture<E>>)
     * and unwraps it, propagating the inner future's result.
     * @template E The type of the inner future's result.
     * @returns A new ARFuture<E>.
     */
    public decompose<E>(): ARFuture<E> {
        const res = new ARFuture<E>();
        this.addListener(self => {
            if (self.isDone()) {
                try {
                    const innerFuture = self.getNow() as unknown as ARFuture<E>;
                    if (innerFuture && typeof innerFuture.addListener === 'function') {
                        /** Propagate the inner future's result to the new one */
                        innerFuture.to(res);
                    } else {
                        /** The value was not a future, this is an error */
                        res.error(new Error("Decompose failed: value is not an ARFuture"));
                    }
                } catch (e) {
                    res.error(e as Error);
                }
            } else if (self.isError()) {
                res.error(self.getError()!);
            } else if (self.isCanceled()) {
                res.cancel();
            }
        });
        return res;
    }

    /**
     * Executes a runnable task on a given executor upon successful completion.
     * @param executor The executor to run the task on.
     * @param t The runnable task.
     * @returns This future instance.
     */
    public to(executor: Executor, t: ARunnable): ARFuture<T>;
    /**
     * Executes a runnable task upon successful completion.
     * @param t The runnable task.
     * @returns This future instance.
     */
    public to(t: ARunnable): ARFuture<T>;
    /**
     * Adds a listener for successful completion.
     * @param onDone The consumer that accepts the result.
     * @returns This future instance.
     */
    public to(onDone: AConsumer<T>): ARFuture<T>;
    /**
     * Adds listeners for successful completion and error.
     * @param onDone The consumer that accepts the result.
     * @param onError The consumer that accepts the error.
     * @returns This future instance.
     */
    public to(onDone: AConsumer<T>, onError: AConsumer<Error>): ARFuture<T>;
    /**
     * Propagates the result (value, error, or cancel) to another ARFuture.
     * @param f The target ARFuture.
     * @returns This future instance.
     */
    public to(f: ARFuture<T>): ARFuture<T>;
    /**
     * Propagates the result (done, error, or cancel) to an AFuture.
     * @param f The target AFuture.
     * @returns This future instance.
     */
    public to(f: AFuture): ARFuture<T>;
    /**
     * Adds a listener for success with a timeout.
     * @param task The consumer that accepts the result.
     * @param timeout The timeout (seconds or ms > 1000000).
     * @param onTimeout The runnable to execute on timeout.
     * @returns This future instance.
     */
    public to(task: AConsumer<T>, timeout: number, onTimeout: ARunnable): ARFuture<T>;
    public to(...args: any[]): ARFuture<T> {
        const first = args[0]; const second = args[1]; const third = args[2];

        /** 1. to(onDone: AConsumer<T>) */
        if (typeof first === 'function' && first.length === 1 && args.length === 1) {
            this.addListener(f => { if (f.isDone()) (first as AConsumer<T>)(f.getNow()!); });
            return this;
        }
        /** 2. to(onDone: AConsumer<T>, onError: AConsumer<Error>) */
        else if (typeof first === 'function' && first.length === 1 && typeof second === 'function' && second.length === 1 && args.length === 2) {
            this.addListener(f => {
                if (f.isDone()) (first as AConsumer<T>)(f.getNow()!);
                else if (f.isError() && f.getError()) (second as AConsumer<Error>)(f.getError()!);
            });
            return this;
        }
        /** 3. to(task: AConsumer<T>, timeout: number, onTimeout: ARunnable) */
        else if (typeof first === 'function' && first.length === 1 && typeof second === 'number' && typeof third === 'function' && args.length === 3) {
            const task = first as AConsumer<T>;
            const timeoutMs = second > 1000000 ? second : second * 1000;
            const onTimeout = third as ARunnable;
            let timedOut = false;
            const timerDisposer = RU.schedule(timeoutMs, () => {
                timedOut = true;
                try { onTimeout(); } catch (e) { Log.error("Error in .to() timeout task", e as Error); }
            });
            this.addListener(f => {
                timerDisposer[Symbol.dispose](); /** Clean up timer */
                if (!timedOut && f.isDone()) {
                    task(f.getNow()!);
                }
            });
            return this;
        }
        /** 4. to(f: ARFuture<T> | AFuture) */
        else if (first instanceof AFutureBaseImpl && args.length === 1) {
            const f = first as AFuture;
            this.addListener(self => {
                if (self.isDone()) {
                    /** Check if f is an ARFuture by checking for tryDone(value) */
                    const fAsArFuture = f as unknown as ARFuture<T>;
                    if (fAsArFuture.tryDone && fAsArFuture.tryDone.length === 1) {
                        fAsArFuture.tryDone(self.getNow()!);
                    } else {
                        /** It's a plain AFuture */
                        f.tryDone();
                    }
                } else if (self.isError()) {
                    f.error(self.getError()!);
                } else if (self.isCanceled()) {
                    f.cancel();
                }
            });
            this.onCancel(() => f.cancel()); /** Propagate cancellation */
            return this;
        }
        /** 5. to(t: ARunnable) or to(executor: Executor, t: ARunnable) */
        else {
            const taskRunnable = (typeof first === 'function' ? first : second) as ARunnable;
            const executor = (typeof first !== 'function' ? first : undefined) as Executor | undefined;
            if (!taskRunnable || typeof taskRunnable !== 'function' || (taskRunnable.length !== 0 && taskRunnable.length !== undefined)) {
                throw new Error("Invalid arguments for ARFuture.to (runnable)");
            }
            const taskToRun = () => {
                if (this.isDone()) { /** Only run if 'done' */
                    try { taskRunnable(); } catch (e) { Log.error("Error in future ARunnable task", e as Error); }
                }
            };
            this.addListener(_f => {
                if (executor) {
                    try { executor(taskToRun); } catch (e) { Log.error("Error submitting task to executor", e as Error); }
                } else {
                    taskToRun();
                }
            });
            return this;
        }
    }

    /**
     * Converts this future to a native JavaScript Promise.
     * @param timeoutMs Optional timeout in milliseconds for the promise.
     * @returns A Promise<T> that resolves or rejects based on the future's state.
     */
    public override toPromise(timeoutMs?: number): Promise<T> {
        return new Promise((resolve, reject) => {
            let timerDisposer: Disposable | undefined;
            let timedOut = false;
            const cleanUp = () => { if (timerDisposer) { timerDisposer[Symbol.dispose](); timerDisposer = undefined; } };

            if (timeoutMs !== undefined && timeoutMs > 0) {
                timerDisposer = RU.schedule(timeoutMs, () => {
                    timedOut = true;
                    if (!this.isFinalStatus()) {
                        reject(new Error(`Future timed out after ${timeoutMs}ms`));
                    }
                });
            }

            /** Check immediate status */
            if (this.isFinalStatus()) {
                cleanUp();
                if (this.isDone()) resolve(this.getNow()!);
                else if (this.isError()) reject(this.getError() ?? new Error("Future failed"));
                else if (this.isCanceled()) reject(new Error("Future canceled"));
                return;
            }

            /** Add listener */
            this.addListener(f => {
                if (timedOut) return;
                cleanUp();
                if (f.isDone()) resolve(f.getNow()!);
                else if (f.isError()) reject(f.getError() ?? new Error("Future failed"));
                else if (f.isCanceled()) reject(new Error("Future canceled"));
            });
        });
    }

    /**
     * Creates a new, pending ARFuture, or a completed one if a value is provided.
     * @param value Optional initial value to complete with.
     * @returns A new ARFuture.
     */
    public static of<T>(value?: T): ARFuture<T> {
        const f = new ARFuture<T>();
        if (value !== undefined) f.done(value);
        return f;
    }

    /**
     * Returns a statically canceled ARFuture.
     * @returns A new, canceled ARFuture.
     */
    public static canceled<T>(): ARFuture<T> {
        const f = new ARFuture<T>();
        f.cancel();
        return f;
    }

    /**
     * Creates a new ARFuture completed with an error.
     * @param throwable The error.
     * @returns A new, errored ARFuture.
     */
    public static ofThrow<T>(throwable: Error): ARFuture<T> {
        const f = new ARFuture<T>();
        f.error(throwable);
        return f;
    }

    /**
     * Returns an ARFuture that completes with an array of all results.
     * If any future errors or is canceled, the resulting future errors or is canceled.
     * @param list The array of futures.
     * @returns A new ARFuture holding an array of results.
     */
    public static all<T>(list: Array<ARFuture<T>>): ARFuture<Array<T>> {
        const futures = list;
        if (futures.length === 0) {
            return ARFuture.of([]);
        }
        const result = new ARFuture<T[]>();
        const results: (T | null)[] = new Array(futures.length).fill(null);

        /** Wait for all to finalize */
        AFuture.all(...futures).to(
            () => {
                /** If all() is 'DONE', all futures in the list must be 'DONE' */
                futures.forEach((f, index) => {
                    results[index] = f.getNow();
                });
                result.tryDone(results as T[]);
            }
        ).onError((err: Error) => result.error(err)) /** Propagate error */
            .onCancel(() => result.cancel());       /** Propagate cancel */
        return result;
    }
}

/**
 * An ARFuture that includes a `tryRequest` flag, often used in
 * reactive maps (like BMap) to prevent re-fetching.
 * @template T The type of the result value.
 */
export class ARFutureWithFlag<T> extends ARFuture<T> {
    private requested: boolean = false;

    /**
     * Attempts to set the "requested" flag.
     * @returns True if the flag was set (was false), false otherwise.
     */
    public tryRequest(): boolean {
        if (this.isFinalStatus() || this.requested) return false;
        this.requested = true;
        return true;
    }

    /**
     * Attempts to complete the future with an error.
     * @param error The error.
     * @returns True if the status was changed, false if already finalized.
     */
    public tryError(error: Error): boolean {
        const initialStatus = this.status;
        this.error(error);
        /** Returns true only if this call *caused* the error state */
        return initialStatus === FutureStatus.PENDING && this.status === FutureStatus.ERROR;
    }

    /**
     * @override
     */
    protected resolve(newStatus: FutureStatus): boolean {
        const success = super.resolve(newStatus);
        if (success) {
            /** Reset the request flag when the future is finalized */
            this.requested = false;
        }
        return success;
    }
}
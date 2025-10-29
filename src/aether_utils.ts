// =============================================================================================
// FILE: aether.utils.ts
// PURPOSE: Contains low-level utilities, HexUtils, Destroyer, and RU (Runtime Utilities).
// DEPENDENCIES: aether.types.ts, aether.future.ts, aether.logging.ts
// =============================================================================================

import {
    ConcurrentLinkedQueue_C, Disposable, ARunnable, AConsumer,
    AFunction, AtomicReference, AtomicLong,
    Destroyable, UUID, ASupplier,
} from './aether_types';
import { Log } from './aether_logging';
import { AFuture } from './aether_future';
import { AString } from './aether_astring';

// --- HexUtils ---
export const HexUtils = {
    HEX_ARRAY: "0123456789ABCDEF".split(''),
    HEX_MAP: "0123456789ABCDEF".split('').reduce((acc, char, index) => ({ ...acc, [char]: index }), {}) as { [key: string]: number },
    hexToBytes(s: string): Uint8Array {
        const charSequence = s as string;
        if (!s || s.length % 2 !== 0) throw new Error(`Invalid hex string (null, empty, or odd length): "${s}"`);
        const byteArray = new Uint8Array(charSequence.length / 2);
        for (let i = 0; i < charSequence.length; i = i + 2) {
            const c1 = HexUtils.HEX_MAP[charSequence[i].toUpperCase()];
            const c2 = HexUtils.HEX_MAP[charSequence[i + 1].toUpperCase()];
            if (c1 === undefined || c2 === undefined) throw new Error(`Invalid hex character: ${charSequence.substring(i, i + 2)}`);
            byteArray[i / 2] = ((c1 << 4) | c2);
        }
        return byteArray;
    },
    toHexString(bytes: Uint8Array | number[] | null | undefined, offset?: number, endIndex?: number, result?:AString): string | void {
        if (!bytes) {
             if (result) { result.addNull(); return; } else { return "null"; }
        }
        const dataBytes = bytes instanceof Uint8Array ? bytes : Uint8Array.from(bytes);
        const start = offset === undefined ? 0 : offset;
        const end = endIndex === undefined ? dataBytes.length : endIndex;
        if(result){
            for (let i = start; i < end; i++) {
                const v = dataBytes[i] & 0xFF;
                result.addChar(HexUtils.HEX_ARRAY[v >>> 4]);
                result.addChar(HexUtils.HEX_ARRAY[v & 0x0F]);
            }
            return;
        }else{
            let res: string[] = [];
            for (let i = start; i < end; i++) {
                const v = dataBytes[i] & 0xFF;
                res.push(HexUtils.HEX_ARRAY[v >>> 4]);
                res.push(HexUtils.HEX_ARRAY[v & 0x0F]);
            }
            return res.join('');
        }
    }
};

// =============================================================================================
// DESTROYER
// =============================================================================================

type ScheduledFuture_C = { cancel: (f: boolean) => void, destroy: (f: boolean) => AFuture };
type AutoCloseable = { close: () => void };

export class Destroyer implements Destroyable {
    public readonly name: string;
    private readonly queue: ConcurrentLinkedQueue_C<Disposable> = new ConcurrentLinkedQueue_C();
    private destroyFuture: AtomicReference<AFuture | null> = new AtomicReference(null);

    constructor(name: string) { this.name = name; }

    public isDestroyed(): boolean { return this.destroyFuture.get() !== null; }

    public add(destroyable: Destroyable | ScheduledFuture_C | AutoCloseable | Disposable): void {
        if (typeof (destroyable as Disposable)[Symbol.dispose] === 'function') {
             this.queue.add(destroyable as Disposable);
        } else if (typeof (destroyable as Destroyable).destroy === 'function') {
             this.queue.add(destroyable as Destroyable);
        }
        else if (typeof (destroyable as ScheduledFuture_C).cancel === 'function' && typeof (destroyable as ScheduledFuture_C).destroy === 'function') {
            const os = destroyable as ScheduledFuture_C;
            const wrapped: Destroyable = {
                destroy: (force: boolean) => { os.cancel(force); return AFuture.of(); },
                [Symbol.dispose]: () => os.cancel(true),
            };
            this.queue.add(wrapped);
        } else if (typeof (destroyable as AutoCloseable).close === 'function') {
            const os = destroyable as AutoCloseable;
            const wrapped: Destroyable = {
                destroy: (force: boolean) => {
                    if (force) {
                        try { os.close(); } catch (e) { Log.warn("destroy exception", { error: e as Error }); }
                        return AFuture.of();
                    } else {
                        try { os.close(); return AFuture.of(); }
                        catch (e) { return AFuture.ofThrow(e as Error); }
                    }
                },
                [Symbol.dispose]: () => { try { os.close(); } catch (e) { Log.warn("close exception", { error: e as Error }); } }
            };
            this.queue.add(wrapped);
        } else {
             // --- FIX: Correct logger call ---
            Log.error("Attempted to add non-Disposable/Destroyable/AutoCloseable/ScheduledFuture to Destroyer", { object: destroyable });
             // --- End Fix ---
        }
    }

    public destroy(force: boolean): AFuture {
        const res = AFuture.make();
        if (!this.destroyFuture.compareAndSet(null, res)) {
            return this.destroyFuture.get()!;
        }

        const destroyTasks: AFuture[] = [];
        let e: Disposable | undefined;
        while ((e = this.queue.poll()) !== undefined) {
            try {
                if (typeof (e as Destroyable).destroy === 'function') {
                     destroyTasks.push((e as Destroyable).destroy(force).timeoutError(5, `Timeout destroying unit: ${e.toString()}`));
                } else if (typeof (e as Disposable)[Symbol.dispose] === 'function') {
                     (e as Disposable)[Symbol.dispose]();
                } else {
                     // --- FIX: Correct logger call ---
                     Log.warn("Object in Destroyer queue has no destroy or dispose method", { object: e });
                     // --- End Fix ---
                }
            } catch (err) {
                 Log.error("Error during destroy/dispose call", { error: err as Error, object: e});
            }
        }

        const allDestroy = AFuture.all(...destroyTasks);

        allDestroy.to(() => { if (res.tryDone()) { /* done */ } })
            .onError(e => res.error(e));

        res.timeoutError(5, `Timeout destroying all units in Destroyer[${this.name}]`);
        return res;
    }
    public [Symbol.dispose](): void { this.destroy(true); }
}

// =============================================================================================
// RU - Runtime Utilities
// =============================================================================================

export const RU = {
    AtomicLong: AtomicLong,
    AtomicReference: AtomicReference,
    ConcurrentHashMap: Map,
    ConcurrentLinkedQueue: ConcurrentLinkedQueue_C,
    ConcurrentHashSet: Set,

    time: (): number => Date.now(),
    schedule: (ms: number, task: ARunnable): Disposable => {
        const timer = setTimeout(Log.wrap(task), ms);
        return { [Symbol.dispose]: () => clearTimeout(timer) };
    },
    scheduleAtFixedRate: (resTo: Destroyable, period: number, timeUnit: "MILLISECONDS" | "SECONDS", t: ARunnable): ScheduledFuture_C => {
        const periodMs = period * (timeUnit === "SECONDS" ? 1000 : 1);
        const wrappedTask = Log.wrap(t);
        const timer = setInterval(wrappedTask, periodMs);

        const scheduledFuture = {
            cancel: (_f: boolean) => clearInterval(timer),
            destroy: (_f: boolean) => { clearInterval(timer); return AFuture.of(); }
        } as ScheduledFuture_C;

        if (resTo && typeof (resTo as Destroyer).add === 'function') {
             (resTo as Destroyer).add(scheduledFuture);
        } else {
             Log.warn("scheduleAtFixedRate: Provided 'resTo' is not a Destroyer. Timer will not be automatically cleaned up.");
        }

        return scheduledFuture;
    },
    cast: <T>(t: any): T => t as T,
    error: <T>(e: Error): T => { Log.error(e); throw e; },

    readAll: <T>(q: ConcurrentLinkedQueue_C<T>, o: AConsumer<T>) => {
        let element: T | undefined;
        while ((element = q.poll()) !== undefined) {
            try { o(element); } catch(err) { Log.error("Error processing item in readAll", { error: err as Error, item: element}); }
        }
    },
};

// =============================================================================================
// Standard UUIDs
// =============================================================================================

export const StandardUUIDsImpl: { ROOT_UID: UUID; TEST_UID: UUID; ANONYMOUS_UID: UUID; } = {
    ROOT_UID: UUID.fromString("ed307ca7-8369-4342-91ee-60c8fc6f9b6b"),
    TEST_UID: UUID.fromString("3ac93165-3d37-4970-87a6-fa4ee27744e4"),
    ANONYMOUS_UID: UUID.fromString("237e2dc0-21a4-4e83-8184-c43052f93b79"),
};
// =============================================================================================
// FILE: aether.utils.ts
// PURPOSE: Contains low-level utilities, HexUtils, Destroyer, and RU (Runtime Utilities).
// DEPENDENCIES: aether.types.ts, aether.future.ts, aether.logging.ts
// =============================================================================================

import {
    ConcurrentLinkedQueue_C, Disposable, ARunnable, AConsumer,
    AFunction, AtomicReference, AtomicLong,
    Destroyable, UUID,
} from './aether_types';
import { Log } from './aether_logging';
import { AFuture, AFutureImpl } from './aether_future';
import { AString } from './aether_astring';

// --- HexUtils (needed by DataIO) ---
export const HexUtils = {
    HEX_ARRAY: "0123456789ABCDEF".split(''),
    HEX_MAP: "0123456789ABCDEF".split('').reduce((acc, char, index) => ({ ...acc, [char]: index }), {}) as { [key: string]: number },
    hexToBytes(s: string): Uint8Array {
        const charSequence = s as string;
        if (charSequence.length % 2 !== 0) throw new Error("Invalid hex string (odd length)");
        const byteArray = new Uint8Array(charSequence.length / 2);
        for (let i = 0; i < charSequence.length; i = i + 2) {
            const c1 = HexUtils.HEX_MAP[charSequence[i].toUpperCase()];
            const c2 = HexUtils.HEX_MAP[charSequence[i + 1].toUpperCase()];
            if (c1 === undefined || c2 === undefined) throw new Error(`Invalid hex character: ${charSequence.substring(i, i + 2)}`);
            byteArray[i / 2] = ((c1 << 4) | c2);
        }
        return byteArray;
    },
    toHexString(bytes: Uint8Array, offset?: number, endIndex?: number, result?:AString): string {
        const start = offset === undefined ? 0 : offset;
        const end = endIndex === undefined ? bytes.length : endIndex;
        if(result){
            let res: string[] = [];
            for (let i = start; i < end; i++) {
                const v = bytes[i] & 0xFF;
                res.push(HexUtils.HEX_ARRAY[v >>> 4]);
                res.push(HexUtils.HEX_ARRAY[v & 0x0F]);
            }
            return res.join('');
        }else{
            for (let i = start; i < end; i++) {
                const v = bytes[i] & 0xFF;
                result.add(HexUtils.HEX_ARRAY[v >>> 4]);
                result.add(HexUtils.HEX_ARRAY[v & 0x0F]);
            }
            return;
        }
    }
};

// =============================================================================================
// SECTION 10: DESTROYER, RU, AND UTILS
// =============================================================================================

type ScheduledFuture_C = { cancel: (f: boolean) => void, destroy: (f: boolean) => AFuture };
type AutoCloseable = { close: () => void };

export class Destroyer implements Destroyable {
    public readonly name: string;
    private readonly queue: ConcurrentLinkedQueue_C<Disposable> = new ConcurrentLinkedQueue_C();
    private destroyFuture: AtomicReference<AFuture | null> = new AtomicReference(null);

    constructor(name: string) { this.name = name; }

    public isDestroyed(): boolean { return this.destroyFuture.get() !== null; }

    public add(destroyable: Destroyable | ScheduledFuture_C | AutoCloseable): void {
        let wrapped: Disposable;

        if (typeof (destroyable as Destroyable).destroy === 'function') {
            wrapped = destroyable as Destroyable;
        } else if (typeof (destroyable as ScheduledFuture_C).cancel === 'function' && typeof (destroyable as ScheduledFuture_C).destroy === 'function') {
            const os = destroyable as ScheduledFuture_C;
            wrapped = {
                destroy: (force: boolean) => { os.cancel(force); return AFutureImpl.of(); },
                [Symbol.dispose]: () => os.cancel(true),
            } as Destroyable;
        } else if (typeof (destroyable as AutoCloseable).close === 'function') {
            const os = destroyable as AutoCloseable;
            wrapped = {
                destroy: (force: boolean) => {
                    if (force) {
                        try { os.close(); } catch (e) { Log.warn("destroy exception", e as Error); }
                        return AFutureImpl.of();
                    } else {
                        try { os.close(); return AFutureImpl.of(); }
                        catch (e) { return AFutureImpl.ofThrow(e as Error); }
                    }
                },
                [Symbol.dispose]: () => { try { os.close(); } catch (e) { Log.warn("close exception", e as Error); } }
            } as Destroyable;
        } else {
            // Treat as generic Disposable with Symbol.dispose
            wrapped = destroyable as Disposable;
        }

        this.queue.add(wrapped);
    }

    public destroy(force: boolean): AFuture {
        const res = AFutureImpl.make();
        if (!this.destroyFuture.compareAndSet(null, res)) {
            return this.destroyFuture.get()!;
        }

        const destroyTasks: AFuture[] = [];
        let e: Disposable | undefined;
        while ((e = this.queue.poll()) !== undefined) {
            if (typeof (e as any).destroy === 'function') {
                 destroyTasks.push((e as any).destroy(force).timeoutError(5, `Timeout destroying unit: ${e.toString()}`));
            } else {
                 try { (e as Disposable)[Symbol.dispose](); } catch (err) { Log.error("Error disposing unit", err as Error); }
            }
        }

        const allDestroy = AFutureImpl.all(...destroyTasks);

        allDestroy.to(() => { if (res.tryDone()) { /* done */ } })
            .onError(e => res.error(e));

        res.timeoutError(5, `Timeout destroying all units in Destroyer[${this.name}]`);
        return res;
    }
    public [Symbol.dispose](): void { this.destroy(true); }
}

export const RU = {
    AtomicLong: AtomicLong,
    AtomicReference: AtomicReference,
    ConcurrentHashMap: Map,
    ConcurrentLinkedQueue: ConcurrentLinkedQueue_C,
    ConcurrentHashSet: Set,

    time: (): number => Date.now(),
    schedule: (ms: number, task: ARunnable): Disposable => {
        const timer = setTimeout(task, ms);
        return { [Symbol.dispose]: () => clearTimeout(timer) };
    },
    scheduleAtFixedRate: (resTo: Destroyable, period: number, timeUnit: "MILLISECONDS" | "SECONDS", t: ARunnable): ScheduledFuture_C => {
        const periodMs = period * (timeUnit === "SECONDS" ? 1000 : 1);
        const wrappedTask = Log.wrap(t);
        const timer = setInterval(wrappedTask, periodMs);

        const scheduledFuture = {
            cancel: (_f: boolean) => clearInterval(timer),
            destroy: (_f: boolean) => { clearInterval(timer); return AFutureImpl.of(); }
        } as ScheduledFuture_C;

        (resTo as Destroyer).add(scheduledFuture);
        return scheduledFuture;
    },
    cast: <T>(t: any): T => t as T,
    error: <T>(e: Error): T => { Log.error(e); throw e; },

    readAll: <T>(q: ConcurrentLinkedQueue_C<T>, o: AConsumer<T>) => {
        let element: T | undefined;
        while ((element = q.poll()) !== undefined) {
            o(element);
        }
    },
};

// =============================================================================================
// SECTION 11: STANDARD UUIDS
// =============================================================================================

export const StandardUUIDsImpl: { ROOT_UID: UUID; TEST_UID: UUID; ANONYMOUS_UID: UUID; } = {
    ROOT_UID: UUID.fromString("ed307ca7-8369-4342-91ee-60c8fc6f9b6b"),
    TEST_UID: UUID.fromString("3ac93165-3d37-4970-87a6-fa4ee27744e4"),
    ANONYMOUS_UID: UUID.fromString("237e2dc0-21a4-4e83-8184-c43052f93b79"),
};
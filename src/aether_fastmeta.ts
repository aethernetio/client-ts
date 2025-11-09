// =============================================================================================
// FILE: aether.fastmeta.ts
// PURPOSE: Contains Fast Meta API interfaces and implementation (FastFutureContext, FastMeta, PackNumber).
// DEPENDENCIES: aether.types.ts, aether.datainout.ts, aether.future.ts, aether.logging.ts
// (ИСПРАВЛЕННАЯ ВЕРСИЯ - Added logging hooks)
// =============================================================================================

import {
    Uint8Array, AtomicInteger, ConcurrentLinkedQueue_C, AFunction,
    ABiConsumer, ABiFunction, Destroyable, AConsumer,
    UUID, URI,
} from './aether_types';

import { AFuture, ARFuture } from './aether_future';
import { DataIn, DataInOut, DataInOutStatic, DataOut } from './aether_datainout';
import { Log, LNode, LogData } from './aether_logging';

// --- Java equivalents for text processing ---
const TEXT_ENCODER = new TextEncoder();
const TEXT_DECODER_UTF8 = new TextDecoder('utf-8');

// =============================================================================================
// SECTION 7.1: PACKED NUMBER SERIALIZATION (Port of SerializerPackNumber.java)
// =============================================================================================

export class SerializerPackNumber {
    public static readonly INSTANCE = new SerializerPackNumber();
    private static readonly u8 = 251;
    private static readonly pow8_shift = 8;
    private static readonly pow8_mask = 0xff;
    private static readonly u16 = 1515;
    private static readonly pow16_shift = 16;
    private static readonly pow16_mask = 0xFFFF;
    private static readonly u32 = 1049835;
    private static readonly pow32 = 4294967296;
    private static readonly u64 = 1099511630835;
    private static readonly pow32_mask = 0xFFFFFFFF;

    public put(out: DataOut, value: number): void {
        const v = Math.trunc(value);

        if (v < SerializerPackNumber.u8) {
            out.writeByte(v);
        } else if (v < SerializerPackNumber.u16) {
            const temp = v - SerializerPackNumber.u8;
            out.writeByte((((temp >> SerializerPackNumber.pow8_shift) & 0xff) + SerializerPackNumber.u8));
            out.writeByte(temp & SerializerPackNumber.pow8_mask);
        } else if (v < SerializerPackNumber.u32) {
            out.writeByte(255);
            const temp = v - SerializerPackNumber.u16;
            out.writeByte(((temp >> SerializerPackNumber.pow16_shift) - SerializerPackNumber.u8 + SerializerPackNumber.u16));
            out.writeShort(temp & SerializerPackNumber.pow16_mask);
        } else if (v < SerializerPackNumber.u64) {
            out.writeByte(255);
            out.writeByte(255);
            const temp = v - SerializerPackNumber.u32;

            const high = Math.floor(temp / SerializerPackNumber.pow32);
            const low = temp & SerializerPackNumber.pow32_mask;

            const shortVal = high - SerializerPackNumber.u16 + SerializerPackNumber.u32;
            out.writeShort(shortVal);
            out.writeInt(low);
        } else {
            throw new Error("IllegalStateException: Value exceeds u64 limit.");
        }
    }
}


// =============================================================================================
// SECTION 7.2: PACKED NUMBER DESERIALIZATION (Port of DeserializerPackNumber.java)
// =============================================================================================

export class DeserializerPackNumber {
    public static readonly INSTANCE = new DeserializerPackNumber();
    private static readonly u8 = 251;
    private static readonly pow8_shift = 8;
    private static readonly u16 = 1515;
    private static readonly pow16_shift = 16;
    private static readonly u32 = 1049835;
    private static readonly pow32_shift = 32;
    private static readonly u64 = 1099511630835;

    public put(dataIn: DataIn): number {
        let val = dataIn.readUByte();

        if (val < DeserializerPackNumber.u8) {
            return val;
        }

        const v8 = dataIn.readUByte();
        val = ((val - DeserializerPackNumber.u8) << DeserializerPackNumber.pow8_shift) + DeserializerPackNumber.u8 + v8;

        if (val < DeserializerPackNumber.u16) {
            return val;
        }

        const f16 = dataIn.readUShort();
        val = ((val - DeserializerPackNumber.u16) << DeserializerPackNumber.pow16_shift) + DeserializerPackNumber.u16 + f16;

        if (val < DeserializerPackNumber.u32) {
            return val;
        }

        const f32 = dataIn.readUInt();
        val = ((val - DeserializerPackNumber.u32) * Math.pow(2, DeserializerPackNumber.pow32_shift)) + DeserializerPackNumber.u32 + f32;


        if (val < DeserializerPackNumber.u64) {
            return val;
        }

        throw new Error("IllegalStateException: Value exceeds u64 limit.");
    }
}


// =============================================================================================
// SECTION 7.3: FASTMETA TYPES (Port of FastMetaType.java & FastMeta.java)
// =============================================================================================

/** Port of FastMetaType.java (interface) */
export interface FastMetaType<T> {
    serialize(ctx: FastFutureContext, obj: T, out: DataOut): void;
    deserialize(ctx: FastFutureContext, dataIn: DataIn): T;

    // Default methods
    serializeToBytes(obj: T): Uint8Array;
    deserializeFromBytes(data: Uint8Array): T;
    loadFromFile(file: string): T;
}

const FastMetaTypeImpl = {
    serializeToBytes: function<T>(this: FastMetaType<T>, obj: T): Uint8Array {
        const d = new DataInOut();
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
    } as FastMetaType<any>['serializeToBytes'],
    deserializeFromBytes: function<T>(this: FastMetaType<T>, data: Uint8Array): T {
        const d = new DataInOutStatic(data);
        return this.deserialize(FastFutureContextStub, d);
    } as FastMetaType<any>['deserializeFromBytes'],
    loadFromFile: function<T>(this: FastMetaType<T>, _file: string): T {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
    } as FastMetaType<any>['loadFromFile'],
};

type FastMetaTypeWithDefaults<T> = FastMetaType<T> & typeof FastMetaTypeImpl;


/** Port of FastMeta.java (interface/object) */
export const FastMeta: { [key: string]: FastMetaTypeWithDefaults<any> } = {
    // --- Single Primitives ---
    META_BOOLEAN: {
        serialize: (_ctx, obj, out) => out.writeBoolean(obj),
        deserialize: (_ctx, dataIn) => dataIn.readBoolean(),
        ...FastMetaTypeImpl,
    } as FastMetaTypeWithDefaults<boolean>,

    META_BYTE: {
        serialize: (_ctx, obj, out) => out.writeByte(obj),
        deserialize: (_ctx, dataIn) => dataIn.readByte(),
        ...FastMetaTypeImpl,
    } as FastMetaTypeWithDefaults<number>,

    META_SHORT: {
        serialize: (_ctx, obj, out) => out.writeShort(obj),
        deserialize: (_ctx, dataIn) => dataIn.readShort(),
        ...FastMetaTypeImpl,
    } as FastMetaTypeWithDefaults<number>,

    META_INT: {
        serialize: (_ctx, obj, out) => out.writeInt(obj),
        deserialize: (_ctx, dataIn) => dataIn.readInt(),
        ...FastMetaTypeImpl,
    } as FastMetaTypeWithDefaults<number>,

    META_LONG: {
        serialize: (_ctx, obj, out) => out.writeLong(obj),
        deserialize: (_ctx, dataIn) => dataIn.readLong(),
        ...FastMetaTypeImpl,
    } as FastMetaTypeWithDefaults<bigint>,

    META_FLOAT: {
        serialize: (_ctx, obj, out) => out.writeFloat(obj),
        deserialize: (_ctx, dataIn) => dataIn.readFloat(),
        ...FastMetaTypeImpl,
    } as FastMetaTypeWithDefaults<number>,

    META_DOUBLE: {
        serialize: (_ctx, obj, out) => out.writeDouble(obj),
        deserialize: (_ctx, dataIn) => dataIn.readDouble(),
        ...FastMetaTypeImpl,
    } as FastMetaTypeWithDefaults<number>,

    META_DATE: {
        serialize: (_ctx, obj, out) => out.writeLong(obj.getTime()),
        deserialize: (_ctx, dataIn) => new Date(Number(dataIn.readLong())),
        ...FastMetaTypeImpl,
    } as FastMetaTypeWithDefaults<Date>,

    // --- Packed Integer ---
    META_PACK: {
        serialize: (_ctx, obj, out) => SerializerPackNumber.INSTANCE.put(out, obj),
        deserialize: (_ctx, dataIn) => DeserializerPackNumber.INSTANCE.put(dataIn),
        ...FastMetaTypeImpl,
    } as FastMetaTypeWithDefaults<number>,

    // --- Common Object Types ---
    META_STRING: {
        serialize: (_ctx, obj, out) => {
            const ar = TEXT_ENCODER.encode(obj);
            SerializerPackNumber.INSTANCE.put(out, ar.length);
            out.write(ar);
        },
        deserialize: (_ctx, dataIn) => {
            const len = DeserializerPackNumber.INSTANCE.put(dataIn);
            const ar = dataIn.readBytes(len);
            return TEXT_DECODER_UTF8.decode(ar);
        },
        ...FastMetaTypeImpl,
    } as FastMetaTypeWithDefaults<string>,

    META_UUID: {
        serialize: (_ctx, obj: UUID, out) => {
            if (!obj || !obj.data || obj.data.length !== 16) throw new Error("Invalid UUID object for serialization");
            out.write(obj.data);
        },
        deserialize: (_ctx, dataIn) => {
            const data = dataIn.readBytes(16);
            if (data.length !== 16) throw new Error("Could not read 16 bytes for UUID");
            const uuid = new UUID();
            uuid.data = data;
            return uuid;
        },
        ...FastMetaTypeImpl,
    } as FastMetaTypeWithDefaults<UUID>,

    META_URI: {
        serialize: (_ctx, obj, out) => {
            const ar = TEXT_ENCODER.encode(obj);
            SerializerPackNumber.INSTANCE.put(out, ar.length);
            out.write(ar);
        },
        deserialize: (_ctx, dataIn) => {
            const len = DeserializerPackNumber.INSTANCE.put(dataIn);
            const ar = dataIn.readBytes(len);
            const uriString = TEXT_DECODER_UTF8.decode(ar);
            return uriString as URI;
        },
        ...FastMetaTypeImpl,
    } as FastMetaTypeWithDefaults<URI>,

    // --- Primitive Arrays (Only META_ARRAY_BYTE included for consistency) ---
    META_ARRAY_BYTE: {
        serialize: (_ctx, ar, out) => {
            SerializerPackNumber.INSTANCE.put(out, ar.length);
            out.write(ar);
        },
        deserialize: (_ctx, dataIn) => {
            const len = DeserializerPackNumber.INSTANCE.put(dataIn);
            return dataIn.readBytes(len);
        },
        ...FastMetaTypeImpl,
    } as FastMetaTypeWithDefaults<Uint8Array>,

    // --- Internal Types ---
    META_REQUEST_ID: {
        serialize: (_ctx, ar, out) => out.writeInt(ar),
        deserialize: (_ctx, dataIn) => dataIn.readInt(),
        ...FastMetaTypeImpl,
    } as FastMetaTypeWithDefaults<number>,

    META_COMMAND: {
        serialize: (_ctx, ar, out) => out.writeByte(ar),
        deserialize: (_ctx, dataIn) => dataIn.readUByte(),
        ...FastMetaTypeImpl,
    } as FastMetaTypeWithDefaults<number>,
};


// =============================================================================================
// SECTION 7.4: FAST META & REMOTE API INTERFACES AND IMPLEMENTATIONS
// =============================================================================================

/** Minimal definition required by FastMetaApi (Port of RemoteApi.java). */
export interface RemoteApi {
    flush(sendFuture: AFuture): void;
    flush(): void;
    getFastMetaContext(): FastFutureContext;
}

/** Type alias for Java's BytesConverter (Port of BytesConverter.java). */
export type BytesConverter = (data: Uint8Array) => Uint8Array;

/** Port of FutureRec.java - using dataIn instead of reserved word 'in'. */
export interface FutureRec {
    onDone(dataIn: DataIn): void;
    onError(dataIn: DataIn): void;
}

/** * Port of FastFutureContext.java (interface). */
export interface FastFutureContext extends Destroyable {
    sendToRemote(data: Uint8Array): void;

    regFuture(worker: FutureRec): number;
    regLocalFuture(): void;
    getFuture(requestId: number): FutureRec | undefined;

    sendResultToRemote(requestId: number, data: Uint8Array): void;
    sendResultToRemoteNoData(requestId: number): void;

    remoteDataToArray(out: DataOut): void;
    remoteDataToArrayAsArray(): Uint8Array;

    flush(sendFuture: AFuture): void;
    isEmpty(): boolean;
    size(): number;
    close(): AFuture;

    // --- ADDED: Logging Hooks (from FastFutureContext.java) ---
    invokeLocalMethodBefore(methodName: string, argsNames: string[], argsValues: any[]): void;
    invokeLocalMethodAfter(methodName: string, result: AFuture | ARFuture<any> | null, argsNames: string[], argsValues: any[]): void;
    invokeRemoteMethodAfter(methodName: string, result: AFuture | ARFuture<any> | null, argsNames: string[], argsValues: any[]): void;
}

// STUB implementation (based on FastFutureContext.STUB in Java)
const FastFutureContextStub: FastFutureContext = {
    sendToRemote: (_data: Uint8Array) => { /* no-op */ },
    sendResultToRemote: (_requestId: number, _data: Uint8Array) => { /* no-op */ },
    sendResultToRemoteNoData: (_requestId: number) => { /* no-op */ },
    regFuture: (_worker: FutureRec) => 0,
    regLocalFuture: () => { /* no-op */ },
    getFuture: (_requestId: number) => { throw new Error("UnsupportedOperationException"); },
    flush: (_sendFuture: AFuture) => { throw new Error("UnsupportedOperationException"); },
    remoteDataToArray: (_out: DataOut) => { /* no-op */ },
    remoteDataToArrayAsArray: () => new Uint8Array(0),
    isEmpty: () => true,
    size: () => 0,
    close: () => AFuture.completed(),
    destroy: (_force: boolean) => AFuture.of(),
    [Symbol.dispose]: () => {},

    // --- ADDED: STUB Logging Hooks ---
    invokeLocalMethodBefore: (_methodName, _argsNames, _argsValues) => { /* no-op */ },
    invokeLocalMethodAfter: (_methodName, _result, _argsNames, _argsValues) => { /* no-op */ },
    invokeRemoteMethodAfter: (_methodName, _result, _argsNames, _argsValues) => { /* no-op */ },
};

// --- FastMetaApi Interface (Port of FastMetaApi.java) ---
// --- FIX: Renamed overloaded methods ---
export interface FastMetaApi<T, R extends RemoteApi> {
    /** Creates a remote implementation of the API */
    makeRemote(localApi: FastFutureContext): R;

    /** Creates a local handler from DataIn stream */
    makeLocal_fromDataIn(ctx: FastFutureContext, dataIn: DataIn, localApi: T): void;

    /** Implements Java's default makeLocal(FastApiContextLocal, byte[]) */
    makeLocal_fromBytes_ctxLocal(ctx: FastApiContextLocal<T>, data: Uint8Array): void;

    /** Implements Java's default makeLocal(FastFutureContext, byte[], T) */
    makeLocal_fromBytes_ctx(ctx: FastFutureContext, data: Uint8Array, localApi: T): void;
}


// --- FastApiContext Implementation (Port of FastApiContext.java) ---
export class FastApiContext implements FastFutureContext {
    private futures: Map<number, FutureRec> = new Map();
    private futuresCounter: AtomicInteger = new AtomicInteger(0);
    private toRemote: ConcurrentLinkedQueue_C<Uint8Array> = new ConcurrentLinkedQueue_C();
    private returnTasks: AtomicInteger = new AtomicInteger(0);
    private sizeBytes: AtomicInteger = new AtomicInteger(0);

    // Implementation of Destroyable
    public destroy(_force: boolean): AFuture { return this.close(); }
    public [Symbol.dispose](): void { this.close(); }

    public getFuture(requestId: number): FutureRec | undefined {
        const future = this.futures.get(requestId);
        this.futures.delete(requestId);
        return future;
    }

    public regLocalFuture(): void { this.returnTasks.incrementAndGet(); }

    public sendResultToRemoteNoData(requestId: number): void {
        this.sendResultToRemote(requestId, new Uint8Array(0));
    }

    public sendResultToRemote(requestId: number, data: Uint8Array): void {
        const d = new DataInOut();

        FastMeta.META_COMMAND.serialize(FastFutureContextStub, 0, d);
        FastMeta.META_REQUEST_ID.serialize(FastFutureContextStub, requestId, d);

        if (data.length > 0) {
            d.write(data);
        }

        this.sendToRemote(d.toArray());

        if (this.returnTasks.decrementAndGet() === 0) {
            this.flush(AFuture.make());
        }
    }

    public sendToRemote(data: Uint8Array): void {
        this.toRemote.add(data);
        this.sizeBytes.addAndGet(data.length);
    }

    public isEmpty(): boolean { return this.toRemote.isEmpty(); }

    public size(): number { return this.sizeBytes.get(); }

    public remoteDataToArrayAsArray(): Uint8Array {
        const out = new DataInOut();
        this.remoteDataToArray(out);
        return out.toArray();
    }



    public remoteDataToArray(out: DataOut): void {
        let data: Uint8Array | undefined;
        while ((data = this.toRemote.poll()) !== undefined) {
            out.write(data);
        }
        this.sizeBytes.set(0);
    }

    public regFuture(worker: FutureRec): number {
        const r = this.futuresCounter.incrementAndGet();
        this.futures.set(r, worker);
        return r;
    }

    public flush(sendFuture: AFuture): void {
        sendFuture.tryDone();
    }

    public close(): AFuture {
        this.futures.clear();
        this.toRemote.clear();
        this.sizeBytes.set(0);
        this.returnTasks.set(0);
        return AFuture.of();
    }

    public makeRemote<RT, RT2 extends RemoteApi>(meta: FastMetaApi<RT, RT2>): RT2 {
        return meta.makeRemote(this);
    }

    // --- ADDED: Logging Hook Implementations (Ported from FastFutureContext.java defaults) ---
    public invokeLocalMethodBefore(methodName: string, argsNames: string[], argsValues: any[]): void {
            // ИСПРАВЛЕНО: Создаем объект LogData
            const logData: LogData = {
                "methodName": methodName
            };
            for (let i = 0; i < argsNames.length; i++) {
                logData[`arg_${argsNames[i]}`] = argsValues[i];
            }
            Log.trace(`cmd local before: ${methodName}`, logData);
    }

    public invokeLocalMethodAfter(methodName: string, result: AFuture | ARFuture<any> | null, argsNames: string[], argsValues: any[]): void {
            // ИСПРАВЛЕНО: Создаем объект LogData
            const logData: LogData = {
                "methodName": methodName,
                "result": result
            };
            for (let i = 0; i < argsNames.length; i++) {
                logData[`arg_${argsNames[i]}`] = argsValues[i];
            }
            Log.trace(`cmd local after : ${methodName}`, logData);
    }

    public invokeRemoteMethodAfter(methodName: string, result: AFuture | ARFuture<any> | null, argsNames: string[], argsValues: any[]): void {
        // 1. Сразу создаем объект LogData
        const logData: LogData = {
            "methodName": methodName,
            "result": result
        };

        // 2. Добавляем аргументы в этот же объект
        for (let i = 0; i < argsNames.length; i++) {
            logData[`arg_${argsNames[i]}`] = argsValues[i];
        }

        // 3. Передаем готовый объект в Log.trace
        Log.trace(`cmd remote      : ${methodName}`, logData);
    }
}


// --- FastApiContextLocal Implementation (Port of FastApiContextLocal.java) ---
export class FastApiContextLocal<LT> extends FastApiContext {
    public readonly localApi: LT;

    constructor(localApi: LT | AFunction<FastApiContextLocal<LT>, LT>) {
        super();
        if (typeof localApi === 'function') {
            this.localApi = (localApi as AFunction<FastApiContextLocal<LT>, LT>)(this);
        } else {
            this.localApi = localApi;
        }
    }
}

// --- [DELETED] ---
// --- FastMetaClient, FastMetaServer, ServerHandler, ServerConnection ---
// --- [DELETED] ---


// --- RemoteApiFuture Implementation (Port of RemoteApiFuture.java) ---
export class RemoteApiFuture<T extends RemoteApi> {
    private readonly queue: ConcurrentLinkedQueue_C<ABiConsumer<T, AFuture>> = new ConcurrentLinkedQueue_C();
    private readonly permanent: Set<ABiConsumer<T, AFuture>> = new Set();
    private readonly meta: FastMetaApi<any, T>;
    private readonly logContext: LNode;

    constructor(meta: FastMetaApi<any, T>) {
        this.meta = meta;
        this.logContext = Log.of({Component: "RemoteApiFuture"});
    }

    public run(t: AConsumer<T>): void;
    public run(t: ABiConsumer<T, AFuture>): void;
    public run(t: AConsumer<T> | ABiConsumer<T, AFuture>): void {
        if (t.length === 1) {
            this.queue.add(Log.wrap((a, _f) => (t as AConsumer<T>)(a)));
        } else {
            this.queue.add(Log.wrap(t as ABiConsumer<T, AFuture>));
        }
    }

    public runRes<R>(t: AFunction<T, ARFuture<R>>): ARFuture<R>;
    public runRes<R>(t: ABiFunction<T, AFuture, ARFuture<R>>): ARFuture<R>;
    public runRes<R>(t: AFunction<T, ARFuture<R>> | ABiFunction<T, AFuture, ARFuture<R>>): ARFuture<R> {
        const res = ARFuture.of<R>();
        this.run((a: T, f: AFuture) => {
            let nextFuture: ARFuture<R>;
            try {
                if (t.length === 1) {
                    nextFuture = (t as AFunction<T, ARFuture<R>>)(a);
                } else {
                    nextFuture = (t as ABiFunction<T, AFuture, ARFuture<R>>)(a, f);
                }
                nextFuture.to(res as ARFuture<R>); // Ensure result is piped correctly
            } catch (e) {
                res.error(e as Error); // Handle errors during function execution
            }
        });
        return res;
    }

    public executeAll(ctx: FastFutureContext, sendFuture: AFuture): void {
        using ll=Log.context( this.logContext);
        try {
            const api = this.meta.makeRemote(ctx);

            let e: ABiConsumer<T, AFuture> | undefined;
            while ((e = this.queue.poll()) !== undefined) {
                 try { e(api, sendFuture); } catch (err) { Log.error("Error executing queued RemoteApiFuture task.", err as Error); }
            }

            for (const t of this.permanent) {
                 try { t(api, sendFuture); } catch (err) { Log.error("Error executing permanent RemoteApiFuture task.", err as Error); }
            }
        } catch (e) {
            Log.error("Error creating remote API or executing RemoteApiFuture tasks.", e as Error);
        } finally {
            // Optional: Cleanup logic if needed
        }
    }

    public addPermanent(task: AConsumer<T>): void;
    public addPermanent(task: ABiConsumer<T, AFuture>): void;
    public addPermanent(task: AConsumer<T> | ABiConsumer<T, AFuture>): void {
        if (task.length === 1) {
            this.permanent.add((a, _f) => (task as AConsumer<T>)(a));
        } else {
            this.permanent.add(task as ABiConsumer<T, AFuture>);
        }
    }

    public isEmpty(): boolean {
        return this.queue.isEmpty() && this.permanent.size === 0;
    }

    public size(): number {
        return this.queue.length + this.permanent.size;
    }
}
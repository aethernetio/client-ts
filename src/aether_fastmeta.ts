// @ts-nocheck

import {
    AtomicInteger, ConcurrentLinkedQueue_C, AFunction,
    ABiConsumer, ABiFunction, Destroyable, AConsumer,
    UUID, URI,
} from './aether_types';


import { AFuture, ARFuture } from './aether_future';
import { DataIn, DataInOut, DataInOutStatic, DataOut } from './aether_datainout';
import { Log, LNode, LogData } from './aether_logging';
import { AString, ToString } from './aether_astring';

const TEXT_ENCODER = new TextEncoder();
const TEXT_DECODER_UTF8 = new TextDecoder('utf-8');




export class SerializerPackNumber {
    public static readonly INSTANCE = new SerializerPackNumber();
    private static readonly u8: bigint = 251n;
    private static readonly pow8_mask: bigint = 0xffn;
    private static readonly pow8_shift: bigint = 8n;
    private static readonly k8ReservedFor16: bigint = 16n;
    private static readonly k16ReservedFor32: bigint = 256n;
    private static readonly pow32: bigint = 4294967296n;
    private static readonly u16: bigint = 5n * 256n + SerializerPackNumber.u8 - SerializerPackNumber.k8ReservedFor16;
    private static readonly u32: bigint = 1024n * 1024n + SerializerPackNumber.u16 - SerializerPackNumber.k16ReservedFor32;
    private static readonly u64: bigint = SerializerPackNumber.u32 + SerializerPackNumber.pow32 * SerializerPackNumber.k16ReservedFor32;
    private static readonly pow16_mask: bigint = 0xFFFFn;
    private static readonly pow16_shift: bigint = 16n;
    private static readonly pow32_shift: bigint = 32n;
    private static readonly pow32_mask: bigint = 0xFFFFFFFFn;

    public put(out: DataOut, val: number | bigint): void {
        const v = BigInt(val);

        if (v < SerializerPackNumber.u8) {
            out.writeByte(Number(v));
        } else if (v < SerializerPackNumber.u16) {
            out.writeByte(Number((((v - SerializerPackNumber.u8) >> SerializerPackNumber.pow8_shift) & 0xffn) + SerializerPackNumber.u8));
            out.writeByte(Number((v - SerializerPackNumber.u8) & SerializerPackNumber.pow8_mask));
        } else if (v < SerializerPackNumber.u32) {
            out.writeByte(255);
            out.writeByte(Number(((v - SerializerPackNumber.u16) >> SerializerPackNumber.pow16_shift) - SerializerPackNumber.u8 + SerializerPackNumber.u16));
            out.writeShort(Number((v - SerializerPackNumber.u16) & SerializerPackNumber.pow16_mask));
        } else if (v < SerializerPackNumber.u64) {
            out.writeByte(255);
            out.writeByte(255);
            out.writeShort(Number(((v - SerializerPackNumber.u32) >> SerializerPackNumber.pow32_shift) - SerializerPackNumber.u16 + SerializerPackNumber.u32));
            out.writeInt(Number((v - SerializerPackNumber.u32) & SerializerPackNumber.pow32_mask));
        } else {
            throw new Error("Value too large for SerializerPackNumber: " + v);
        }
    }
}

export class DeserializerPackNumber {
    public static readonly INSTANCE = new DeserializerPackNumber();
    private static readonly u8: bigint = 251n;
    private static readonly pow8_shift: bigint = 8n;
    private static readonly k8ReservedFor16: bigint = 16n;
    private static readonly k16ReservedFor32: bigint = 256n;
    private static readonly pow32: bigint = 4294967296n;
    private static readonly u16: bigint = 5n * 256n + DeserializerPackNumber.u8 - DeserializerPackNumber.k8ReservedFor16;
    private static readonly u32: bigint = 1024n * 1024n + DeserializerPackNumber.u16 - DeserializerPackNumber.k16ReservedFor32;
    private static readonly u64: bigint = DeserializerPackNumber.u32 + DeserializerPackNumber.pow32 * DeserializerPackNumber.k16ReservedFor32;
    private static readonly pow16_shift: bigint = 16n;
    private static readonly pow32_shift: bigint = 32n;

    public put(in_: DataIn): bigint {
        let val = BigInt(in_.readUByte());
        if (val < DeserializerPackNumber.u8) {
            return val;
        }
        let v = BigInt(in_.readUByte());
        val = ((val - DeserializerPackNumber.u8) << DeserializerPackNumber.pow8_shift) + DeserializerPackNumber.u8 + v;
        if (val < DeserializerPackNumber.u16) {
            return val;
        }
        let f = BigInt(in_.readUShort());
        val = ((val - DeserializerPackNumber.u16) << DeserializerPackNumber.pow16_shift) + DeserializerPackNumber.u16 + f;
        if (val < DeserializerPackNumber.u32) {
            return val;
        }
        let f1 = BigInt(in_.readUInt());
        val = ((val - DeserializerPackNumber.u32) << DeserializerPackNumber.pow32_shift) + DeserializerPackNumber.u32 + f1;
        if (val < DeserializerPackNumber.u64) {
            return val;
        }
        throw new Error("Value too large for DeserializerPackNumber (marker > u64)");
    }
}


/**
 * Interface for future callbacks.
 */
export interface FutureRec {
    onDone(dataIn: DataIn): void;
    onError(dataIn: DataIn): void;
}


export class SecurityConnectionDropException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "SecurityConnectionDropException";
    }
}


export class AetherException extends Error {
    constructor(message?: string, cause?: unknown) {
        super(message);
        this.name = "AetherException";
        if (cause !== undefined) {
            (this as Error & { cause?: unknown }).cause = cause;
        }
    }
}



/**
 * Interface for the Aether protocol context, managing futures and serialization.
 */

export interface MetaContext extends ToString {
    sendToRemote(data: Uint8Array | LazyPacket): void;

    regFuture(worker: FutureRec): number;
    regLocalFuture(): void;
    getFuture(requestId: number): FutureRec;

    sendResultToRemote(requestId: number, data: Uint8Array): void;
    sendResultToRemoteNoData(requestId: number): void;

    remoteDataToArray(out: DataOut): void;
    remoteDataToArrayAsArray(): Uint8Array;
    flush(): void;

    isEmpty(): boolean;
    size(): number;
    close(): AFuture;

    isActive(): boolean;
    isLocked(): boolean;
    lock(): AutoCloseable | null;
    onFlush(flushAction: () => void): void;
    onFlushData(c: (data: Uint8Array) => void): void;
    findContext(factory: (ctx: MetaContext) => any, ...keys: any[]): MetaContext;
    getProperty(key: number): any;
    getLocalApi(): any;

    onWritable(listener: (writable: boolean) => void): void;
    onFirstWritable(listener: () => void): void;
    fireWritable(writable: boolean): void;
    connectionContext(): MetaContext;


    invokeLocalMethodBefore(methodName: string, argsNames: string[], argsValues: any[]): void;
    invokeLocalMethodAfter(methodName: string, result: any, argsNames: string[], argsValues: any[]): void;

    invokeRemoteMethodAfter(methodName: string, result: any, argsNames: string[], argsValues: any[]): void;
    makeRemote<RT extends RemoteApi, RT2 extends RemoteApi>(meta: FastMetaApi<RT, RT2>): RT2;
}



export interface AutoCloseable {
    close(): void;
}


export interface LazyPacket {
    size(): number;
    serialize(out: DataOut): void;
}

export namespace LazyPacket {
    export function fromBytes(data: Uint8Array): LazyPacket {
        return {
            size: (): number => data.length,
            serialize: (out: DataOut): void => out.write(data),
        };
    }
}

export interface SyncMapChannel<K, V> {
    onFlushData(c: (data: Uint8Array) => void): void;
    receiveFromMultiplexor(data: Uint8Array): void;
}


export interface CollapsiblePacket extends LazyPacket {
    collapsibleKey(): unknown;
}




/**
 * A stub implementation of MetaContext for synchronous operations.
 */

export const FastFutureContextStub: MetaContext = {

    sendToRemote: (_data: Uint8Array | LazyPacket) => {},
    sendResultToRemote: (
        _requestId: number,
        _data: Uint8Array,
    ) => {},
    sendResultToRemoteNoData: (
        _requestId: number,
    ) => {},

    regFuture: (worker: FutureRec) => 0,
    regLocalFuture: () => { /* no-op */ },
    getProperty: (_key: number) => null,
    getFuture: (requestId: number) => { throw new Error("UnsupportedOperationException"); },
    flush: () => {},
    remoteDataToArray: (out: DataOut) => { /* no-op */ },
    remoteDataToArrayAsArray: () => new Uint8Array(0),
    isEmpty: () => true,
    size: () => 0,
    close: () => AFuture.completed(),
    isActive: () => true,
    isLocked: () => false,
    lock: () => null,
    onFlush: (_flushAction: () => void) => {},
    onFlushData: (_c: (data: Uint8Array) => void) => {},

    findContext: (
        _factory: (ctx: MetaContext) => any,
        ..._keys: any[]
    ) => null as unknown as MetaContext,

    getLocalApi: () => null,

    onWritable: (_listener: (writable: boolean) => void) => {},
    onFirstWritable: (_listener: () => void) => {},
    fireWritable: (_writable: boolean) => {},
    connectionContext: () => FastFutureContextStub,

    toAString: (s: AString) =>
        s.add("FastApiCtx(qs:0)"),


    invokeLocalMethodBefore: (_methodName, _argsNames, _argsValues) => { /* no-op */ },
    invokeLocalMethodAfter: (_methodName, _result, _argsNames, _argsValues) => { /* no-op */ },

    invokeRemoteMethodAfter: (_methodName, _result, _argsNames, _argsValues) => { /* no-op */ },

    makeRemote: <RT, RT2 extends RemoteApi>(
        meta: FastMetaApi<RT, RT2>,
    ): RT2 => meta.makeRemote(FastFutureContextStub),

}




/**
 * The main interface for all Aether protocol type metadata.
 */
export interface FastMetaType<T> {
    serialize(ctx: MetaContext, obj: T, out: DataOut): void;
    deserialize(ctx: MetaContext, dataIn: DataIn): T;

    serializeToBytes(obj: T): Uint8Array;
    deserializeFromBytes(data: Uint8Array): T;

    loadFromFile(file: string): T;

    metaHashCode(obj: any | null | undefined): number;
    metaEquals(v1: any | null | undefined, v2: any | null | undefined): boolean;

    metaToString(obj: T | null | undefined, res: AString): void;
}


export interface FastMetaHierarchyType {
    getAetherTypeId(): number;
}


/**
 * Interface for a remote API endpoint.
 */


export interface RemoteApi {
    destroy(force: boolean): AFuture;
    flush(): void;
    getFastMetaContext(): MetaContext;
}



/**
 * Interface for API metadata, handling remote/local creation.
 */


export interface FastMetaApi<T, R extends RemoteApi> {
    makeRemote(ctx: MetaContext): R;
    makeLocal(ctx: MetaContext, dataIn: DataIn): void;
    isValidCommand(commandId: number): boolean;
    makeLocal_fromDataIn(
        ctx: MetaContext,
        dataIn: DataIn,
        localApi: T,
    ): void;
    makeLocal_fromBytes_ctxLocal(
        ctx: MetaContextLocal<T>,
        data: Uint8Array,
    ): void;
    makeLocal_fromBytes_ctx(
        ctx: MetaContext,
        data: Uint8Array,
        localApi: T,
    ): void;
}



/**
 * A function type for converting byte arrays.
 */
export type BytesConverter = (data: Uint8Array) => Uint8Array;


export interface DataInOutPool {
    acquire(): DataInOut | null;
    release(data: DataInOut): void;
}



/**
 * Helper class for an Array of T, utilizing the element's FastMetaType.
 * This is an internal implementation detail for FastMeta.getMetaArray.
 */
class UniversalMetaArrayImpl<T> implements FastMetaType<T[]> {
    private readonly elementMeta: FastMetaType<T>;

    constructor(elementMeta: FastMetaType<T>) {
        this.elementMeta = elementMeta;
    }

    serialize(ctx: MetaContext, obj: T[], out: DataOut): void {
        SerializerPackNumber.INSTANCE.put(out, obj.length);
        for (const el of obj) {
            this.elementMeta.serialize(ctx, el, out);
        }
    }

    deserialize(ctx: MetaContext, dataIn: DataIn): T[] {
        const len = Number(DeserializerPackNumber.INSTANCE.put(dataIn));

        if (this.elementMeta === FastMeta.META_BYTE) {
            return dataIn.readBytes(len) as T[];
        }

        const ar = new Array<T>(len);
        for (let i = 0; i < len; i++) {
            ar[i] = this.elementMeta.deserialize(ctx, dataIn);
        }
        return ar;
    }

    serializeToBytes(obj: T[]): Uint8Array {
        const d = new DataInOut();
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
    }

    deserializeFromBytes(data: Uint8Array): T[] {
        const d = new DataInOutStatic(data);
        return this.deserialize(FastFutureContextStub, d);
    }

    loadFromFile(_file: string): T[] {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
    }

    metaHashCode(obj: T[] | null | undefined): number {
        if (obj === null || obj === undefined) return 0;


        if (this.elementMeta === FastMeta.META_BYTE) {
            const arr = obj as unknown as Uint8Array;
            let hash = 1;

            for (let i = 0; i < arr.length; i++) {
                const signedByte =
                    arr[i] > 127
                        ? arr[i] - 256
                        : arr[i];
                hash = (
                    31 * hash +
                    signedByte
                ) | 0;
            }
            return hash;
        }


        let hash = 1;
        for (const el of obj) {
            hash = (31 * hash + this.elementMeta.metaHashCode(el)) | 0;
        }
        return hash;
    }


    metaEquals(
        v1: T[] | null | undefined,
        v2: any | null | undefined,
    ): boolean {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) {
            return v2 === null || v2 === undefined;
        }
        if (v2 === null || v2 === undefined) return false;

        if (this.elementMeta === FastMeta.META_BYTE) {
            if (
                !(v1 instanceof Uint8Array) ||
                !(v2 instanceof Uint8Array)
            ) {
                return false;
            }
            if (v1.length !== v2.length) return false;
            for (let i = 0; i < v1.length; i++) {
                if (v1[i] !== v2[i]) return false;
            }
            return true;
        }

        if (!Array.isArray(v2) || v1.length !== v2.length) {
            return false;
        }
        for (let i = 0; i < v1.length; i++) {
            if (!this.elementMeta.metaEquals(v1[i], v2[i])) {
                return false;
            }
        }
        return true;
    }


    metaToString(obj: T[] | null | undefined, res: AString): void {
        if (obj === null || obj === undefined) { res.add('null'); return; }

        if (this.elementMeta === FastMeta.META_BYTE) {
            res.add('byte[').add((obj as unknown as Uint8Array).length).add(']');
            return;
        }

        res.add('[');
        let first = true;
        for (const el of obj) {
            if (!first) res.add(', ');
            this.elementMeta.metaToString(el, res);
            first = false;
        }
        res.add(']');
    }
}


/**
 * Central class containing FastMetaType for all primitive and standard types.
 */
export class FastMeta {

    public static readonly META_BOOLEAN: FastMetaType<boolean> = new class implements FastMetaType<boolean> {
        serialize(_ctx: MetaContext, obj: boolean, out: DataOut): void { out.writeBoolean(obj); }
        deserialize(_ctx: MetaContext, dataIn: DataIn): boolean { return dataIn.readBoolean(); }
        metaHashCode(obj: boolean | null | undefined): number {
            if (obj === null || obj === undefined) return 0;
            return obj ? 1231 : 1237;
        }
        metaEquals(v1: boolean | null | undefined, v2: any | null | undefined): boolean {
            return v1 === v2;
        }
        metaToString(obj: boolean | null | undefined, res: AString): void { res.add(String(obj)); }
        serializeToBytes(obj: boolean): Uint8Array {
            const d = new DataInOut(); this.serialize(FastFutureContextStub, obj, d); return d.toArray();
        }
        deserializeFromBytes(data: Uint8Array): boolean {
            const d = new DataInOutStatic(data); return this.deserialize(FastFutureContextStub, d);
        }
        loadFromFile(_file: string): boolean { throw new Error("UnsupportedOperationException"); }
    };

    public static readonly META_BYTE: FastMetaType<number> = new class implements FastMetaType<number> {
        serialize(_ctx: MetaContext, obj: number, out: DataOut): void { out.writeByte(obj); }
        deserialize(_ctx: MetaContext, in_: DataIn): number { return in_.readByte(); }
        metaHashCode(obj: number | null | undefined): number {
            if (obj === null || obj === undefined) return 0;
            return (obj | 0);
        }
        metaEquals(v1: number | null | undefined, v2: any | null | undefined): boolean {
            return v1 === v2;
        }
        metaToString(obj: number | null | undefined, res: AString): void { res.add(String(obj)); }
        serializeToBytes(obj: number): Uint8Array {
            const d = new DataInOut(); this.serialize(FastFutureContextStub, obj, d); return d.toArray();
        }
        deserializeFromBytes(data: Uint8Array): number {
            const d = new DataInOutStatic(data); return this.deserialize(FastFutureContextStub, d);
        }
        loadFromFile(_f: string): number { throw new Error("UnsupportedOperationException"); }
    };

    public static readonly META_SHORT: FastMetaType<number> = new class implements FastMetaType<number> {
        serialize(_ctx: MetaContext, obj: number, out: DataOut): void { out.writeShort(obj); }
        deserialize(_ctx: MetaContext, in_: DataIn): number { return in_.readShort(); }
        metaHashCode(obj: number | null | undefined): number {
            if (obj === null || obj === undefined) return 0;
            return (obj | 0);
        }
        metaEquals(v1: number | null | undefined, v2: any | null | undefined): boolean {
            return v1 === v2;
        }
        metaToString(obj: number | null | undefined, res: AString): void { res.add(String(obj)); }
        serializeToBytes(obj: number): Uint8Array {
            const d = new DataInOut(); this.serialize(FastFutureContextStub, obj, d); return d.toArray();
        }
        deserializeFromBytes(data: Uint8Array): number {
            const d = new DataInOutStatic(data); return this.deserialize(FastFutureContextStub, d);
        }
        loadFromFile(_f: string): number { throw new Error("UnsupportedOperationException"); }
    };

    public static readonly META_INT: FastMetaType<number> = new class implements FastMetaType<number> {
        serialize(_ctx: MetaContext, obj: number, out: DataOut): void { out.writeInt(obj); }
        deserialize(_ctx: MetaContext, in_: DataIn): number { return in_.readInt(); }
        metaHashCode(obj: number | null | undefined): number {
            if (obj === null || obj === undefined) return 0;
            return (obj | 0);
        }
        metaEquals(v1: number | null | undefined, v2: any | null | undefined): boolean {
            return v1 === v2;
        }
        metaToString(obj: number | null | undefined, res: AString): void { res.add(String(obj)); }
        serializeToBytes(obj: number): Uint8Array {
            const d = new DataInOut(); this.serialize(FastFutureContextStub, obj, d); return d.toArray();
        }
        deserializeFromBytes(data: Uint8Array): number {
            const d = new DataInOutStatic(data); return this.deserialize(FastFutureContextStub, d);
        }
        loadFromFile(_f: string): number { throw new Error("UnsupportedOperationException"); }
    };

    public static readonly META_LONG: FastMetaType<bigint> = new class implements FastMetaType<bigint> {
        serialize(_ctx: MetaContext, obj: bigint, out: DataOut): void { out.writeLong(obj); }
        deserialize(_ctx: MetaContext, in_: DataIn): bigint { return in_.readLong(); }
        metaHashCode(obj: bigint | null | undefined): number {
            if (obj === null || obj === undefined) return 0;
            const hash = obj ^ (obj >> 32n);
            return Number(hash & 0xFFFFFFFFn) | 0;
        }
        metaEquals(v1: bigint | null | undefined, v2: any | null | undefined): boolean {
            return v1 === v2;
        }
        metaToString(obj: bigint | null | undefined, res: AString): void { res.add(String(obj)); }
        serializeToBytes(obj: bigint): Uint8Array {
            const d = new DataInOut(); this.serialize(FastFutureContextStub, obj, d); return d.toArray();
        }
        deserializeFromBytes(data: Uint8Array): bigint {
            const d = new DataInOutStatic(data); return this.deserialize(FastFutureContextStub, d);
        }
        loadFromFile(_file: string): bigint { throw new Error("UnsupportedOperationException"); }
    };

    public static readonly META_FLOAT: FastMetaType<number> = new class implements FastMetaType<number> {
        serialize(_ctx: MetaContext, obj: number, out: DataOut): void { out.writeFloat(obj); }
        deserialize(_ctx: MetaContext, in_: DataIn): number { return in_.readFloat(); }
        metaHashCode(obj: number | null | undefined): number {
            if (obj === null || obj === undefined) return 0;
            const buf = new ArrayBuffer(4);
            new Float32Array(buf)[0] = obj;
            return new Int32Array(buf)[0];
        }
        metaEquals(v1: number | null | undefined, v2: any | null | undefined): boolean {
            return v1 === v2;
        }
        metaToString(obj: number | null | undefined, res: AString): void { res.add(String(obj)); }
        serializeToBytes(obj: number): Uint8Array {
            const d = new DataInOut(); this.serialize(FastFutureContextStub, obj, d); return d.toArray();
        }
        deserializeFromBytes(data: Uint8Array): number {
            const d = new DataInOutStatic(data); return this.deserialize(FastFutureContextStub, d);
        }
        loadFromFile(_file: string): number { throw new Error("UnsupportedOperationException"); }
    };

    public static readonly META_DOUBLE: FastMetaType<number> = new class implements FastMetaType<number> {
        serialize(_ctx: MetaContext, obj: number, out: DataOut): void { out.writeDouble(obj); }
        deserialize(_ctx: MetaContext, in_: DataIn): number { return in_.readDouble(); }
        metaHashCode(obj: number | null | undefined): number {
            if (obj === null || obj === undefined) return 0;
            const buf = new ArrayBuffer(8);
            new Float64Array(buf)[0] = obj;
            const longView = new BigInt64Array(buf)[0];
            const hash = longView ^ (longView >> 32n);
            return Number(hash & 0xFFFFFFFFn) | 0;
        }
        metaEquals(v1: number | null | undefined, v2: any | null | undefined): boolean {
            return v1 === v2;
        }
        metaToString(obj: number | null | undefined, res: AString): void { res.add(String(obj)); }
        serializeToBytes(obj: number): Uint8Array {
            const d = new DataInOut(); this.serialize(FastFutureContextStub, obj, d); return d.toArray();
        }
        deserializeFromBytes(data: Uint8Array): number {
            const d = new DataInOutStatic(data); return this.deserialize(FastFutureContextStub, d);
        }
        loadFromFile(_file: string): number { throw new Error("UnsupportedOperationException"); }
    };

    public static readonly META_DATE: FastMetaType<Date> = new class implements FastMetaType<Date> {
        serialize(_ctx: MetaContext, obj: Date, out: DataOut): void { out.writeLong(obj.getTime()); }
        deserialize(_ctx: MetaContext, in_: DataIn): Date { return new Date(Number(in_.readLong())); }
        metaHashCode(obj: Date | null | undefined): number {
            if (obj === null || obj === undefined) return 0;
            const time = BigInt(obj.getTime());
            const hash = time ^ (time >> 32n);
            return Number(hash & 0xFFFFFFFFn) | 0;
        }
        metaEquals(v1: Date | null | undefined, v2: any | null | undefined): boolean {
            if (v1 === v2) return true;
            if (v1 === null || v1 === undefined || v2 === null || v2 === undefined) return false;
            if (!(v2 instanceof Date)) return false;
            return v1.getTime() === v2.getTime();
        }
        metaToString(obj: Date | null | undefined, res: AString): void { res.add(obj ? obj.toISOString() : "null"); }
        serializeToBytes(obj: Date): Uint8Array {
            const d = new DataInOut(); this.serialize(FastFutureContextStub, obj, d); return d.toArray();
        }
        deserializeFromBytes(data: Uint8Array): Date {
            const d = new DataInOutStatic(data); return this.deserialize(FastFutureContextStub, d);
        }
        loadFromFile(_file: string): Date { throw new Error("UnsupportedOperationException"); }
    };


    public static readonly META_PACK:
        FastMetaType<bigint> =
        new class implements FastMetaType<bigint> {
            serialize(
                _ctx: MetaContext,
                obj: bigint,
                out: DataOut,
            ): void {
                SerializerPackNumber.INSTANCE.put(out, obj);
            }

            deserialize(
                _ctx: MetaContext,
                dataIn: DataIn,
            ): bigint {
                return DeserializerPackNumber.INSTANCE.put(dataIn);
            }

            metaHashCode(
                obj: bigint | null | undefined,
            ): number {
                if (obj === null || obj === undefined) return 0;
                const hash = obj ^ (obj >> 32n);
                return Number(hash & 0xFFFFFFFFn) | 0;
            }

            metaEquals(
                v1: bigint | null | undefined,
                v2: any | null | undefined,
            ): boolean {
                return v1 === v2;
            }

            metaToString(
                obj: bigint | null | undefined,
                res: AString,
            ): void {
                res.add(String(obj));
            }

            serializeToBytes(obj: bigint): Uint8Array {
                const data = new DataInOut();
                this.serialize(
                    FastFutureContextStub,
                    obj,
                    data,
                );
                return data.toArray();
            }

            deserializeFromBytes(
                data: Uint8Array,
            ): bigint {
                const input = new DataInOutStatic(data);
                return this.deserialize(
                    FastFutureContextStub,
                    input,
                );
            }

            loadFromFile(_file: string): bigint {
                throw new Error(
                    "UnsupportedOperationException",
                );
            }
        };


    public static readonly META_STRING: FastMetaType<string> = new class implements FastMetaType<string> {
        serialize(_ctx: MetaContext, obj: string, out: DataOut): void {
            const ar = TEXT_ENCODER.encode(obj);
            SerializerPackNumber.INSTANCE.put(out, ar.length);
            out.write(ar);
        }
        deserialize(_ctx: MetaContext, dataIn: DataIn): string {
            const len = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
            const ar = dataIn.readBytes(len);
            return TEXT_DECODER_UTF8.decode(ar);
        }
        metaHashCode(obj: string | null | undefined): number {
            if (obj === null || obj === undefined) return 0;
            let hash = 0;
            for (let i = 0; i < obj.length; i++) {
                hash = (31 * hash + obj.charCodeAt(i)) | 0;
            }
            return hash;
        }
        metaEquals(v1: string | null | undefined, v2: any | null | undefined): boolean {
            return v1 === v2;
        }
        metaToString(obj: string | null | undefined, res: AString): void { res.add(String(obj)); }
        serializeToBytes(obj: string): Uint8Array {
            const d = new DataInOut(); this.serialize(FastFutureContextStub, obj, d); return d.toArray();
        }
        deserializeFromBytes(data: Uint8Array): string {
            const d = new DataInOutStatic(data); return this.deserialize(FastFutureContextStub, d);
        }
        loadFromFile(_file: string): string { throw new Error("UnsupportedOperationException"); }
    };

    public static readonly META_UUID: FastMetaType<UUID> = new class implements FastMetaType<UUID> {
        serialize(_ctx: MetaContext, obj: UUID, out: DataOut): void {
            if (!obj || !obj.data || obj.data.length !== 16) {
                if (obj && typeof (obj as any).getMostSignificantBits === 'function') {
                    const view = new DataView(new ArrayBuffer(16));
                    view.setBigInt64(0, (obj as any).getMostSignificantBits(), false);
                    view.setBigInt64(8, (obj as any).getLeastSignificantBits(), false);
                    out.write(new Uint8Array(view.buffer));
                    return;
                }
                throw new Error("Invalid UUID object for serialization. 'data' field missing or wrong length.");
            }
            out.write(obj.data);
        }

        deserialize(_ctx: MetaContext, dataIn: DataIn): UUID {
            const data = dataIn.readBytes(16);
            if (data.length !== 16) throw new Error("Could not read 16 bytes for UUID");

            const uuid = new UUID();
            uuid.data = data;

            const view = new DataView(data.buffer, data.byteOffset, 16);
            uuid.mostSignificantBits = view.getBigInt64(0, false);
            uuid.leastSignificantBits = view.getBigInt64(8, false);

            return uuid;
        }

        metaHashCode(obj: UUID | null | undefined): number {
            if (obj === null || obj === undefined) return 0;

            let high: bigint;
            let low: bigint;

            if (obj.data && obj.data.length === 16) {
                const view = new DataView(obj.data.buffer, obj.data.byteOffset);
                high = view.getBigInt64(0, false);
                low = view.getBigInt64(8, false);
            } else if (typeof (obj as any).getMostSignificantBits === 'function') {
                high = (obj as any).getMostSignificantBits();
                low = (obj as any).getLeastSignificantBits();
            } else {
                return 0;
            }

            const xor = high ^ low;
            const hash = xor ^ (xor >> 32n);
            return Number(hash & 0xFFFFFFFFn) | 0;
        }

        metaEquals(v1: UUID | null | undefined, v2: any | null | undefined): boolean {
            if (v1 === v2) return true;
            if (v1 === null || v1 === undefined || v2 === null || v2 === undefined) return false;

            if (v1.data && v2.data) {
                if (!(v2 instanceof UUID)) return false;
                const d1 = v1.data;
                const d2 = v2.data;

                if (d1 === d2) return true;
                if (d1.length !== 16 || d2.length !== 16) return false;

                for (let i = 0; i < 16; i++) {
                    if (d1[i] !== d2[i]) return false;
                }
                return true;
            }

            if (typeof (v1 as any).getMostSignificantBits === 'function' &&
                typeof (v2 as any).getMostSignificantBits === 'function') {
                return (v1 as any).getMostSignificantBits() === (v2 as any).getMostSignificantBits() &&
                    (v1 as any).getLeastSignificantBits() === (v2 as any).getLeastSignificantBits();
            }

            return false;
        }
        metaToString(obj: UUID | null | undefined, res: AString): void { res.add(obj ? obj.toAString() : "null"); }
        serializeToBytes(obj: UUID): Uint8Array {
            const d = new DataInOut(); this.serialize(FastFutureContextStub, obj, d); return d.toArray();
        }
        deserializeFromBytes(data: Uint8Array): UUID {
            const d = new DataInOutStatic(data); return this.deserialize(FastFutureContextStub, d);
        }
        loadFromFile(_file: string): UUID { throw new Error("UnsupportedOperationException"); }
    };

    public static readonly META_URI: FastMetaType<URI> = new class implements FastMetaType<URI> {
        serialize(_ctx: MetaContext, obj: URI, out: DataOut): void {
            const ar = TEXT_ENCODER.encode(obj);
            SerializerPackNumber.INSTANCE.put(out, ar.length);
            out.write(ar);
        }
        deserialize(_ctx: MetaContext, dataIn: DataIn): URI {
            const len = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
            const ar = dataIn.readBytes(len);
            const uriString = TEXT_DECODER_UTF8.decode(ar);
            return uriString as URI;
        }
        metaHashCode(obj: URI | null | undefined): number {
            if (obj === null || obj === undefined) return 0;
            let hash = 0;
            for (let i = 0; i < obj.length; i++) {
                hash = (31 * hash + obj.charCodeAt(i)) | 0;
            }
            return hash;
        }
        metaEquals(v1: URI | null | undefined, v2: any | null | undefined): boolean {
            return v1 === v2;
        }
        metaToString(obj: URI | null | undefined, res: AString): void { res.add(String(obj)); }
        serializeToBytes(obj: URI): Uint8Array {
            const d = new DataInOut(); this.serialize(FastFutureContextStub, obj, d); return d.toArray();
        }
        deserializeFromBytes(data: Uint8Array): URI {
            const d = new DataInOutStatic(data); return this.deserialize(FastFutureContextStub, d);
        }
        loadFromFile(_file: string): URI { throw new Error("UnsupportedOperationException"); }
    };

    public static readonly META_REQUEST_ID: FastMetaType<number> = new class implements FastMetaType<number> {
        serialize(_ctx: MetaContext, ar: number, out: DataOut): void { out.writeInt(ar); }

        deserialize(
            _ctx: MetaContext,
            dataIn: DataIn,
        ): number {
            try {
                return dataIn.readInt();
            } catch (_error) {
                throw new SecurityConnectionDropException(
                    "bad buffer for read request id. Data: " +
                        String(dataIn),
                );
            }
        }

        metaHashCode(obj: number | null | undefined): number {
            if (obj === null || obj === undefined) return 0;
            return (obj | 0);
        }
        metaEquals(v1: number | null | undefined, v2: any | null | undefined): boolean {
            return v1 === v2;
        }
        metaToString(obj: number | null | undefined, res: AString): void { res.add(String(obj)); }
        serializeToBytes(obj: number): Uint8Array {
            const d = new DataInOut(); this.serialize(FastFutureContextStub, obj, d); return d.toArray();
        }
        deserializeFromBytes(data: Uint8Array): number {
            const d = new DataInOutStatic(data); return this.deserialize(FastFutureContextStub, d);
        }
        loadFromFile(_file: string): number { throw new Error("UnsupportedOperationException"); }
    };

    public static readonly META_COMMAND: FastMetaType<number> = new class implements FastMetaType<number> {
        serialize(_ctx: MetaContext, ar: number, out: DataOut): void { out.writeByte(ar); }

        deserialize(
            _ctx: MetaContext,
            dataIn: DataIn,
        ): number {
            try {
                return dataIn.readUByte();
            } catch (_error) {
                throw new SecurityConnectionDropException(
                    "bad buffer",
                );
            }
        }

        metaHashCode(obj: number | null | undefined): number {
            if (obj === null || obj === undefined) return 0;
            return (obj | 0);
        }
        metaEquals(v1: number | null | undefined, v2: any | null | undefined): boolean {
            return v1 === v2;
        }
        metaToString(obj: number | null | undefined, res: AString): void { res.add(String(obj)); }
        serializeToBytes(obj: number): Uint8Array {
            const d = new DataInOut(); this.serialize(FastFutureContextStub, obj, d); return d.toArray();
        }
        deserializeFromBytes(data: Uint8Array): number {
            const d = new DataInOutStatic(data); return this.deserialize(FastFutureContextStub, d);
        }
        loadFromFile(_file: string): number { throw new Error("UnsupportedOperationException"); }
    };

    private static readonly metaArrayCache = new Map<FastMetaType<any>, FastMetaType<any[]>>();

    /**
     * Returns or creates a FastMetaType for an array T[] based on the element's FastMetaType<T>.
     * @param elementMeta - The FastMetaType of the array element.
     * @returns FastMetaType<T[]>
     */
    public static getMetaArray<T>(elementMeta: FastMetaType<T>): FastMetaType<T[]> {
        if (this.metaArrayCache.has(elementMeta)) {
            return this.metaArrayCache.get(elementMeta) as FastMetaType<T[]>;
        }

        const newMeta = new UniversalMetaArrayImpl(elementMeta);
        this.metaArrayCache.set(elementMeta, newMeta);
        return newMeta;
    }

    /**
     * Returns the FastMetaType for a byte array (Uint8Array). Delegates to getMetaArray.
     */
    public static get META_ARRAY_BYTE(): FastMetaType<Uint8Array> {
        return this.getMetaArray(this.META_BYTE) as FastMetaType<Uint8Array>;
    }


    public static get META_ARRAY_BOOLEAN():
        FastMetaType<boolean[]> {
        return this.getMetaArray(this.META_BOOLEAN);
    }

    public static get META_ARRAY_SHORT():
        FastMetaType<number[]> {
        return this.getMetaArray(this.META_SHORT);
    }

    public static get META_ARRAY_INT():
        FastMetaType<number[]> {
        return this.getMetaArray(this.META_INT);
    }

    public static get META_ARRAY_LONG():
        FastMetaType<bigint[]> {
        return this.getMetaArray(this.META_LONG);
    }

    public static get META_ARRAY_UUID():
        FastMetaType<UUID[]> {
        return this.getMetaArray(this.META_UUID);
    }

    public static get META_ARRAY_URI():
        FastMetaType<URI[]> {
        return this.getMetaArray(this.META_URI);
    }


    public static readonly META_SET_LONG:
        FastMetaType<Set<bigint>> =
        new class implements FastMetaType<Set<bigint>> {
            serialize(
                ctx: MetaContext,
                obj: Set<bigint>,
                out: DataOut,
            ): void {
                FastMeta.META_ARRAY_LONG.serialize(
                    ctx,
                    Array.from(obj),
                    out,
                );
            }

            deserialize(
                ctx: MetaContext,
                dataIn: DataIn,
            ): Set<bigint> {
                return new Set(
                    FastMeta.META_ARRAY_LONG.deserialize(
                        ctx,
                        dataIn,
                    ),
                );
            }

            metaHashCode(
                obj: Set<bigint> | null | undefined,
            ): number {
                if (obj === null || obj === undefined) return 0;

                let hash = 0;
                for (const value of obj) {
                    hash = (
                        hash +
                        FastMeta.META_LONG.metaHashCode(value)
                    ) | 0;
                }
                return hash;
            }

            metaEquals(
                v1: Set<bigint> | null | undefined,
                v2: any | null | undefined,
            ): boolean {
                if (v1 === v2) return true;
                if (
                    v1 === null ||
                    v1 === undefined ||
                    !(v2 instanceof Set) ||
                    v1.size !== v2.size
                ) {
                    return false;
                }

                for (const value of v1) {
                    if (!v2.has(value)) return false;
                }
                return true;
            }

            metaToString(
                obj: Set<bigint> | null | undefined,
                res: AString,
            ): void {
                if (obj === null || obj === undefined) {
                    res.add("null");
                    return;
                }

                res
                    .add("[")
                    .add(Array.from(obj).map(String).join(", "))
                    .add("]");
            }

            serializeToBytes(obj: Set<bigint>): Uint8Array {
                const data = new DataInOut();
                this.serialize(FastFutureContextStub, obj, data);
                return data.toArray();
            }

            deserializeFromBytes(
                data: Uint8Array,
            ): Set<bigint> {
                return this.deserialize(
                    FastFutureContextStub,
                    new DataInOutStatic(data),
                );
            }

            loadFromFile(_file: string): Set<bigint> {
                throw new Error("UnsupportedOperationException");
            }
        };
}



/**
 * Implementation of MetaContextBase.
 */

export class MetaContextBase implements MetaContext {
    protected futures: Map<number, FutureRec> = new Map();
    protected futuresCounter: AtomicInteger = new AtomicInteger(0);
    protected toRemote: ConcurrentLinkedQueue_C<LazyPacket> = new ConcurrentLinkedQueue_C();
    protected returnTasks: AtomicInteger = new AtomicInteger(0);
    protected sizeBytes: AtomicInteger = new AtomicInteger(0);

    private childContexts:
        Array<{ keys: any[]; context: MetaContextBase }> = [];
    private childContextCreations: any[][] = [];
    private _lock: (() => void) | null = null;
    private writableListener:
        ((writable: boolean) => void) | null = null;
    private firstWritableFlag = false;
    private flushAction: (() => void) | null = null;

    public localApi: any = null;
    protected parent: MetaContextBase | null = null;
    private retired = false;

    public getLocalApi(): any { return this.localApi; }

    public setLocalApi(localApi: any): void {
        if (localApi === null || localApi === undefined) {
            throw new Error("Local API must not be null");
        }
        this.localApi = localApi;
    }

    public toAString(sb: AString): AString {
        return sb
            .add("FastApiCtx(qs:")
            .add(this.toRemote.size())
            .add(")");
    }

    public getProperty(_key: number): any { return null; }


    public isActive(): boolean {
        return !this.retired &&
            (this.parent === null || this.parent.isActive());
    }


    public isLocked(): boolean { return this._lock !== null; }


    public lock(): AutoCloseable | null {
        if (this.isLocked()) {
            throw new Error("Already locked");
        }

        let closed = false;
        const unlock = () => {
            if (closed) return;
            closed = true;
            if (this._lock !== unlock) return;

            this._lock = null;
            if (!this.isEmpty()) this.notifyDataAdded();
        };

        this._lock = unlock;
        return { close: unlock };
    }


    public onFlush(flushAction: () => void): void {
        this.flushAction = flushAction;
    }

    public onFlushData(c: (data: Uint8Array) => void): void {
        this.onFlush(() => {
            if (this.isEmpty()) return;
            const d = this.remoteDataToArrayAsArray();
            if (d.length === 0) return;
            c(d);
        });
    }


    public findContext(
        factory: (ctx: MetaContext) => any,
        ...keys: any[]
    ): MetaContext {
        if (typeof factory !== "function") {
            throw new Error("Context factory must not be null");
        }

        const existing = this.childContexts.find((entry) =>
            this.contextKeysEqual(entry.keys, keys),
        );
        if (existing) return existing.context;

        if (this.childContextCreations.some((activeKeys) =>
            this.contextKeysEqual(activeKeys, keys),
        )) {
            throw new Error(
                "Recursive context initialization for the same key",
            );
        }

        const storedKeys = keys.slice();
        this.childContextCreations.push(storedKeys);
        try {
            const ctx = this.createChildContext();
            if (!ctx) {
                throw new Error("createChildContext() returned null");
            }

            ctx.parent = this;
            const configuredApi = factory(ctx);
            if (configuredApi !== null && configuredApi !== undefined) {
                ctx.localApi = configuredApi;
            }
            if (ctx.localApi === null || ctx.localApi === undefined) {
                throw new Error(
                    "Context factory did not configure local API",
                );
            }

            this.childContexts.push({
                keys: storedKeys,
                context: ctx,
            });
            return ctx;
        } finally {
            this.childContextCreations.pop();
        }
    }

    private contextKeysEqual(left: any[], right: any[]): boolean {
        if (left.length !== right.length) return false;

        for (let i = 0; i < left.length; i++) {
            if (left[i] === right[i]) continue;
            if (left[i] === null || left[i] === undefined) return false;
            if (
                typeof left[i].equals !== "function" ||
                !left[i].equals(right[i])
            ) {
                return false;
            }
        }

        return true;
    }


    protected createChildContext(): MetaContextBase {
        return new MetaContextBase();
    }


    public onWritable(listener: (writable: boolean) => void): void {
        this.writableListener = listener;
        listener(this.isActive());
    }

    public onFirstWritable(listener: () => void): void {
        this.onWritable((writable) => {
            if (writable && !this.firstWritableFlag) {
                this.firstWritableFlag = true;
                listener();
            }
        });
    }

    public fireWritable(writable: boolean): void {
        const listener = this.writableListener;
        if (listener) listener(writable);

        for (const entry of this.childContexts) {
            entry.context.fireWritable(writable);
        }
    }

    public connectionContext(): MetaContext {
        return this.parent === null
            ? this
            : this.parent.connectionContext();
    }


    public flush(): void {
        if (this.isLocked()) return;
        if (this.parent !== null) {
            this.parent.flush();
            return;
        }
        this.runFlushLifecycle();
    }

    protected runFlushLifecycle(): void {
        if (this.isLocked()) return;

        for (const entry of this.childContexts) {
            if (!entry.context.isEmpty()) {
                entry.context.runFlushLifecycle();
            }
        }

        if (this.flushAction) {
            this.flushAction();
        }
    }


    public getFuture(requestId: number): FutureRec {
        if (requestId <= 0) {
            throw new SecurityConnectionDropException(
                `Invalid response request ID: ${requestId}`,
            );
        }

        const registry = this.futureRegistry();
        const future = registry.futures.get(requestId);
        registry.futures.delete(requestId);

        if (!future) {
            throw new SecurityConnectionDropException(
                `Unknown or duplicate response request ID: ${requestId}`,
            );
        }

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
            this.flush();
        }
    }




    public sendToRemote(
        data: Uint8Array | LazyPacket,
    ): void {
        if (data === null || data === undefined) {
            throw new Error("Packet must not be null");
        }
        if (this.retired) return;

        const source = data instanceof Uint8Array
            ? LazyPacket.fromBytes(data.slice())
            : data;
        const guardedPacket: LazyPacket = {
            size: () => source.size(),
            serialize: (out: DataOut): void => {
                if (!this.retired) source.serialize(out);
            },
        };

        this.toRemote.add(guardedPacket);
        if (this.retired) {
            this.toRemote.remove(guardedPacket);
            return;
        }
        this.notifyDataAdded();
    }



    protected notifyDataAdded(): void {
        if (this.parent) {
            this.parent.notifyDataAdded();
        }
    }



    public isEmpty(): boolean {
        if (this.retired || this.isLocked()) return true;
        if (!this.toRemote.isEmpty()) return false;
        for (const entry of this.childContexts) {
            if (!entry.context.isEmpty()) return false;
        }
        return true;
    }




    public size(): number {
        if (this.retired) return 0;
        let s = 0;
        for (const packet of this.toRemote.values()) {
            s += packet.size();
        }
        for (const entry of this.childContexts) {
            s += entry.context.size();
        }
        return s;
    }


    protected acquireDataOut(): DataInOut {
        return new DataInOut();
    }

    protected releaseDataOut(_out: DataInOut): void {
    }





    public remoteDataToArrayAsArray(): Uint8Array {
        const out = this.acquireDataOut();

        try {
            this.remoteDataToArray(out);
            return out.toArray();
        } finally {
            this.releaseDataOut(out);
        }
    }



    public remoteDataToArray(out: DataOut): void {
        let packet: LazyPacket | undefined;
        while ((packet = this.toRemote.poll()) !== undefined) {
            packet.serialize(out);
        }
        this.sizeBytes.set(0);
    }



    public regFuture(worker: FutureRec): number {
        if (!worker) throw new Error("Future callback must not be null");
        const registry = this.futureRegistry();

        for (let attempts = 0; attempts < 0x7fffffff; attempts++) {
            let requestId = registry.futuresCounter.incrementAndGet();
            if (requestId > 0x7fffffff || requestId <= 0) {
                registry.futuresCounter.set(1);
                requestId = 1;
            }
            if (!registry.futures.has(requestId)) {
                registry.futures.set(requestId, worker);
                return requestId;
            }
        }

        throw new Error("No free FastMeta request IDs are available");
    }

    private futureRegistry(): MetaContextBase {
        let registry: MetaContextBase = this;
        const visited = new Set<MetaContextBase>();

        while (registry.parent instanceof MetaContextBase) {
            if (visited.has(registry)) {
                throw new Error("MetaContext parent cycle detected");
            }
            visited.add(registry);
            registry = registry.parent;
        }

        return registry;
    }


    public retire(): void {
        if (this.retired) return;

        this.retired = true;
        this.toRemote.clear();
        this.sizeBytes.set(0);
        this.fireWritable(false);
    }




    public close(): AFuture {
        return AFuture.completed();
    }


    public makeRemote<RT, RT2 extends RemoteApi>(meta: FastMetaApi<RT, RT2>): RT2 {
        return meta.makeRemote(this);
    }

    public localDataIn<T>(meta: FastMetaApi<T, any>, localApi: T, dataIn: DataIn): void {
        Log.info("localDataIn called", { meta: meta?.constructor?.name });
        meta.makeLocal_fromDataIn(this, dataIn, localApi);
    }

    public invokeLocalMethodBefore(methodName: string, argsNames: string[], argsValues: any[]): void {
        const logData: LogData = { "methodName": methodName };
        for (let i = 0; i < argsNames.length; i++) {
            logData[`arg_${argsNames[i]}`] = argsValues[i];
        }
        Log.trace(`cmd local before: $methodName`, logData);
    }

    public invokeLocalMethodAfter(methodName: string, result: AFuture | ARFuture<any> | null, argsNames: string[], argsValues: any[]): void {
        const logData: LogData = { "methodName": methodName, "result": result };
        for (let i = 0; i < argsNames.length; i++) {
            logData[`arg_${argsNames[i]}`] = argsValues[i];
        }
        Log.trace(`cmd local after : $methodName`, logData);
    }

    public invokeRemoteMethodAfter(methodName: string, result: AFuture | ARFuture<any> | null, argsNames: string[], argsValues: any[]): void {
        const logData: LogData = { "methodName": methodName, "result": result };
        for (let i = 0; i < argsNames.length; i++) {
            logData[`arg_${argsNames[i]}`] = argsValues[i];
        }
        Log.trace(`cmd remote      : $methodName`, logData);
    }
}


/**
 * AutoFlushContext — автоматически сбрасывает данные по таймеру.
 * Используется для WebSocket-соединений чтобы не дёргать flush() вручную.
 */
export class AutoFlushContext extends MetaContextBase {

    private readonly minPeriodMs: number;
    private readonly maxPeriodMs: number;
    private readonly maxSize: number;
    private lastDataTime: number = Date.now();
    private flushTask: ReturnType<typeof setTimeout> | null = null;
    private flushTaskGeneration = 0;
    private writable: boolean = true;

    constructor(
        minPeriodMs: number = 1,
        maxPeriodMs: number = 100,
        maxSize: number = 65536,
    ) {
        super();
        this.minPeriodMs = minPeriodMs;
        this.maxPeriodMs = maxPeriodMs;
        this.maxSize = maxSize;
        this.startFlushTimer();
    }


    protected override notifyDataAdded(): void {
        this.lastDataTime = Date.now();
        this.startFlushTimer();
        super.notifyDataAdded();
    }


    public override isActive(): boolean {
        return this.size() < this.maxSize;
    }



    private startFlushTimer(): void {
        if (!this.writable || this.flushTask !== null) {
            return;
        }

        const generation = ++this.flushTaskGeneration;
        const flushAction = () => {
            try {
                if (!this.isEmpty()) {
                    this.flush();
                }
            } finally {
                if (
                    generation !==
                    this.flushTaskGeneration
                ) {
                    return;
                }

                this.flushTask = null;

                if (this.writable && !this.isEmpty()) {
                    this.startFlushTimer();
                }
            }
        };

        this.flushTask = setTimeout(
            flushAction,
            this.minPeriodMs,
        );
    }


    public override fireWritable(w: boolean): void {
        this.writable = w;
        if (w) {
            this.startFlushTimer();
            if (!this.isEmpty()) this.flush();
        } else {
            this.stopFlushTimer();
        }
        super.fireWritable(w);
    }



    private stopFlushTimer(): void {
        ++this.flushTaskGeneration;

        const old = this.flushTask;
        this.flushTask = null;

        if (old !== null) {
            clearTimeout(old);
        }
    }

}

export class PooledAutoFlushContext
    extends AutoFlushContext {
    private readonly bufferPool: DataInOutPool;

    constructor(
        _destroyer: unknown,
        bufferPool: DataInOutPool,
        minPeriodMs: number = 1,
        maxPeriodMs: number = 100,
        maxSize: number = 65536,
    ) {
        super(minPeriodMs, maxPeriodMs, maxSize);
        this.bufferPool = bufferPool;
    }

    protected override acquireDataOut(): DataInOut {
        return this.bufferPool.acquire() ??
            super.acquireDataOut();
    }

    protected override releaseDataOut(
        out: DataInOut,
    ): void {
        this.bufferPool.release(out);
    }

    protected override createChildContext():
        MetaContextBase {
        const pool = this.bufferPool;

        return new class extends MetaContextBase {
            protected override acquireDataOut():
                DataInOut {
                return pool.acquire() ??
                    super.acquireDataOut();
            }

            protected override releaseDataOut(
                out: DataInOut,
            ): void {
                pool.release(out);
            }
        }();
    }
}




/**
 * Implementation of MetaContext for a local API instance.
 */

export class MetaContextLocal<LT> extends MetaContextBase {
    public readonly localApi: LT;

    constructor(localApi: LT | ((ctx: MetaContextLocal<LT>) => LT)) {
        super();
        if (typeof localApi === 'function') {
            this.localApi = (localApi as (ctx: MetaContextLocal<LT>) => LT)(this);
        } else {
            this.localApi = localApi;
        }
    }
}


/**
 * Manages executing tasks against a RemoteApi instance.
 */
export class RemoteApiFuture<T extends RemoteApi> {
    private readonly queue: ConcurrentLinkedQueue_C<ABiConsumer<T, AFuture>> = new ConcurrentLinkedQueue_C();
    private readonly permanent: Set<ABiConsumer<T, AFuture>> = new Set();
    private readonly meta: FastMetaApi<any, T>;
    private readonly logContext: LNode;

    constructor(meta: FastMetaApi<any, T>) {
        this.meta = meta;
        this.logContext = Log.of({ Component: "RemoteApiFuture" });
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
                nextFuture.to(res as ARFuture<R>);
            } catch (e) {
                res.error(e as Error);
            }
        });
        return res;
    }

    public executeAll(ctx: MetaContext, sendFuture: AFuture): void {
        let ll = Log.context(this.logContext);
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
            ll.destroy(true);
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

export * from './aether_datainout';
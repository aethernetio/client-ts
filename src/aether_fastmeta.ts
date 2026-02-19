// @ts-nocheck
import {
    Uint8Array, AtomicInteger, ConcurrentLinkedQueue_C, AFunction,
    ABiConsumer, ABiFunction, Destroyable, AConsumer,
    UUID, URI,
} from './aether_types';

import { AFuture, ARFuture } from './aether_future';
import { DataIn, DataInOut, DataInOutStatic, DataOut } from './aether_datainout';
import { Log, LNode, LogData } from './aether_logging';
import { AString } from './aether_astring';

const TEXT_ENCODER = new TextEncoder();
const TEXT_DECODER_UTF8 = new TextDecoder('utf-8');
export abstract class FlushReport {
    public static STUB= new class extends FlushReport{
        report(ignore:boolean){

        }
    };
    public abstract report(done: boolean): void;
    public done() {
        this.report(true);
    }
    public abort() {
        this.report(false);
    }

}

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

/**
 * Interface for the Aether protocol context, managing futures and serialization.
 */
export interface FastFutureContext extends Destroyable {
    sendToRemote(data: Uint8Array): void;

    regFuture(worker: FutureRec): number;
    regLocalFuture(): void;
    getFuture(requestId: number): FutureRec | undefined;

    sendResultToRemote(requestId: number, data: Uint8Array): void;
    sendResultToRemoteNoData(requestId: number): void;

    remoteDataToArray(out: DataOut): void;
    remoteDataToArrayAsArray(): Uint8Array;
    flush(report: FlushReport): void;

    isEmpty(): boolean;
    size(): number;
    close(): AFuture;

    invokeLocalMethodBefore(methodName: string, argsNames: string[], argsValues: any[]): void;
    invokeLocalMethodAfter(methodName: string, result: any, argsNames: string[], argsValues: any[]): void;
    invokeRemoteMethodAfter(methodName: string, result: any, argsNames: string[], argsValues: any[]): void;
}

/**
 * A stub implementation of FastFutureContext for synchronous operations.
 */
export const FastFutureContextStub: FastFutureContext = {
    sendToRemote: (data: Uint8Array) => { throw new Error("Context is a stub and cannot send data."); },
    sendResultToRemote: (requestId: number, data: Uint8Array) => { throw new Error("Context is a stub and cannot send result."); },
    sendResultToRemoteNoData: (requestId: number) => { throw new Error("Context is a stub and cannot send result."); },
    regFuture: (worker: FutureRec) => 0,
    regLocalFuture: () => { /* no-op */ },
    getFuture: (requestId: number) => { throw new Error("UnsupportedOperationException"); },
    flush: (report: FlushReport) => { report(true); },
    remoteDataToArray: (out: DataOut) => { /* no-op */ },
    remoteDataToArrayAsArray: () => new Uint8Array(0),
    isEmpty: () => true,
    size: () => 0,
    close: () => AFuture.completed(),
    destroy: (_force: boolean) => AFuture.of(),
    invokeLocalMethodBefore: (_methodName, _argsNames, _argsValues) => { /* no-op */ },
    invokeLocalMethodAfter: (_methodName, _result, _argsNames, _argsValues) => { /* no-op */ },
    invokeRemoteMethodAfter: (_methodName, _result, _argsNames, _argsValues) => { /* no-op */ },
};


/**
 * The main interface for all Aether protocol type metadata.
 */
export interface FastMetaType<T> {
    serialize(ctx: FastFutureContext, obj: T, out: DataOut): void;
    deserialize(ctx: FastFutureContext, dataIn: DataIn): T;

    serializeToBytes(obj: T): Uint8Array;
    deserializeFromBytes(data: Uint8Array): T;

    loadFromFile(file: string): T;

    metaHashCode(obj: any | null | undefined): number;
    metaEquals(v1: any | null | undefined, v2: any | null | undefined): boolean;

    metaToString(obj: T | null | undefined, res: AString): void;
}

/**
 * Interface for a remote API endpoint.
 */
export interface RemoteApi {
    flush(report: FlushReport): void;
    getFastMetaContext(): FastFutureContext;
}

/**
 * Interface for API metadata, handling remote/local creation.
 */
export interface FastMetaApi<T, R extends RemoteApi> {
    makeRemote(localApi: FastFutureContext): R;
    makeLocal_fromDataIn(ctx: FastFutureContext, dataIn: DataIn, localApi: T): void;
    makeLocal_fromBytes_ctxLocal(ctx: FastApiContextLocal<T>, data: Uint8Array): void;
    makeLocal_fromBytes_ctx(ctx: FastFutureContext, data: Uint8Array, localApi: T): void;
}

/**
 * A function type for converting byte arrays.
 */
export type BytesConverter = (data: Uint8Array) => Uint8Array;


/**
 * Helper class for an Array of T, utilizing the element's FastMetaType.
 * This is an internal implementation detail for FastMeta.getMetaArray.
 */
class UniversalMetaArrayImpl<T> implements FastMetaType<T[]> {
    private readonly elementMeta: FastMetaType<T>;

    constructor(elementMeta: FastMetaType<T>) {
        this.elementMeta = elementMeta;
    }

    serialize(ctx: FastFutureContext, obj: T[], out: DataOut): void {
        SerializerPackNumber.INSTANCE.put(out, obj.length);
        for (const el of obj) {
            this.elementMeta.serialize(ctx, el, out);
        }
    }

    deserialize(ctx: FastFutureContext, dataIn: DataIn): T[] {
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
                hash = (31 * hash + arr[i]) | 0;
            }
            return hash;
        }

        let hash = 1;
        for (const el of obj) {
            hash = (31 * hash + this.elementMeta.metaHashCode(el)) | 0;
        }
        return hash;
    }

    metaEquals(v1: T[] | null | undefined, v2: any | null | undefined): boolean {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !Array.isArray(v2)) return false;

        if (this.elementMeta === FastMeta.META_BYTE) {
            const arr1 = v1 as unknown as Uint8Array;
            const arr2 = v2 as unknown as Uint8Array;
            if (!(v2 instanceof Uint8Array)) return false;
            if (arr1.length !== arr2.length) return false;
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
        }

        if (v1.length !== v2.length) return false;

        for (let i = 0; i < v1.length; i++) {
            if (!this.elementMeta.metaEquals(v1[i], v2[i])) return false;
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
        serialize(_ctx: FastFutureContext, obj: boolean, out: DataOut): void { out.writeBoolean(obj); }
        deserialize(_ctx: FastFutureContext, dataIn: DataIn): boolean { return dataIn.readBoolean(); }
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
        serialize(_ctx: FastFutureContext, obj: number, out: DataOut): void { out.writeByte(obj); }
        deserialize(_ctx: FastFutureContext, in_: DataIn): number { return in_.readByte(); }
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
        serialize(_ctx: FastFutureContext, obj: number, out: DataOut): void { out.writeShort(obj); }
        deserialize(_ctx: FastFutureContext, in_: DataIn): number { return in_.readShort(); }
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
        serialize(_ctx: FastFutureContext, obj: number, out: DataOut): void { out.writeInt(obj); }
        deserialize(_ctx: FastFutureContext, in_: DataIn): number { return in_.readInt(); }
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
        serialize(_ctx: FastFutureContext, obj: bigint, out: DataOut): void { out.writeLong(obj); }
        deserialize(_ctx: FastFutureContext, in_: DataIn): bigint { return in_.readLong(); }
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
        serialize(_ctx: FastFutureContext, obj: number, out: DataOut): void { out.writeFloat(obj); }
        deserialize(_ctx: FastFutureContext, in_: DataIn): number { return in_.readFloat(); }
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
        serialize(_ctx: FastFutureContext, obj: number, out: DataOut): void { out.writeDouble(obj); }
        deserialize(_ctx: FastFutureContext, in_: DataIn): number { return in_.readDouble(); }
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
        serialize(_ctx: FastFutureContext, obj: Date, out: DataOut): void { out.writeLong(obj.getTime()); }
        deserialize(_ctx: FastFutureContext, in_: DataIn): Date { return new Date(Number(in_.readLong())); }
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

    public static readonly META_PACK: FastMetaType<number> = new class implements FastMetaType<number> {
        serialize(_ctx: FastFutureContext, obj: number, out: DataOut): void { SerializerPackNumber.INSTANCE.put(out, obj); }
        deserialize(_ctx: FastFutureContext, dataIn: DataIn): number { return Number(DeserializerPackNumber.INSTANCE.put(dataIn)); }
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

    public static readonly META_STRING: FastMetaType<string> = new class implements FastMetaType<string> {
        serialize(_ctx: FastFutureContext, obj: string, out: DataOut): void {
            const ar = TEXT_ENCODER.encode(obj);
            SerializerPackNumber.INSTANCE.put(out, ar.length);
            out.write(ar);
        }
        deserialize(_ctx: FastFutureContext, dataIn: DataIn): string {
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
        serialize(_ctx: FastFutureContext, obj: UUID, out: DataOut): void {
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

        deserialize(_ctx: FastFutureContext, dataIn: DataIn): UUID {
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
        serialize(_ctx: FastFutureContext, obj: URI, out: DataOut): void {
            const ar = TEXT_ENCODER.encode(obj);
            SerializerPackNumber.INSTANCE.put(out, ar.length);
            out.write(ar);
        }
        deserialize(_ctx: FastFutureContext, dataIn: DataIn): URI {
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
        serialize(_ctx: FastFutureContext, ar: number, out: DataOut): void { out.writeInt(ar); }
        deserialize(_ctx: FastFutureContext, dataIn: DataIn): number { return dataIn.readInt(); }
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
        serialize(_ctx: FastFutureContext, ar: number, out: DataOut): void { out.writeByte(ar); }
        deserialize(_ctx: FastFutureContext, dataIn: DataIn): number { return dataIn.readUByte(); }
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
}


/**
 * Implementation of FastApiContext.
 */
export class FastApiContext implements FastFutureContext {
    private futures: Map<number, FutureRec> = new Map();
    private futuresCounter: AtomicInteger = new AtomicInteger(0);
    private toRemote: ConcurrentLinkedQueue_C<Uint8Array> = new ConcurrentLinkedQueue_C();
    private returnTasks: AtomicInteger = new AtomicInteger(0);
    private sizeBytes: AtomicInteger = new AtomicInteger(0);

    public destroy(_force: boolean): AFuture { return this.close(); }
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
    public flush(report: FlushReport): void {
        const data = this.remoteDataToArrayAsArray();
        if (data.length === 0) {
            report(true);
            return;
        }
        this.sendToRemote(data);
        report(true);
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

    public localDataIn<T>(meta: FastMetaApi<T, any>, localApi: T, dataIn: DataIn): void {
        Log.info("localDataIn called", { meta: meta?.constructor?.name });
        meta.makeLocal(this, dataIn, localApi);
    }


    public invokeLocalMethodBefore(methodName: string, argsNames: string[], argsValues: any[]): void {
        const logData: LogData = {
            "methodName": methodName
        };
        for (let i = 0; i < argsNames.length; i++) {
            logData[`arg_${argsNames[i]}`] = argsValues[i];
        }
        Log.trace(`cmd local before: $methodName`, logData);
    }

    public invokeLocalMethodAfter(methodName: string, result: AFuture | ARFuture<any> | null, argsNames: string[], argsValues: any[]): void {
        const logData: LogData = {
            "methodName": methodName,
            "result": result
        };
        for (let i = 0; i < argsNames.length; i++) {
            logData[`arg_${argsNames[i]}`] = argsValues[i];
        }
        Log.trace(`cmd local after : $methodName`, logData);
    }

    public invokeRemoteMethodAfter(methodName: string, result: AFuture | ARFuture<any> | null, argsNames: string[], argsValues: any[]): void {
        const logData: LogData = {
            "methodName": methodName,
            "result": result
        };

        for (let i = 0; i < argsNames.length; i++) {
            logData[`arg_${argsNames[i]}`] = argsValues[i];
        }

        Log.trace(`cmd remote      : $methodName`, logData);
    }
}

/**
 * Implementation of FastApiContext for a local API instance.
 */
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

    public executeAll(ctx: FastFutureContext, sendFuture: AFuture): void {
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
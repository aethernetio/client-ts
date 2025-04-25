import {io} from "./aether-api";
import {sodium} from "./aether-crypt";
import Cloud = io.aether.common.Cloud;
import Key = io.aether.common.Key;
import KeyType = io.aether.common.KeyType;
import CryptoLib = io.aether.common.CryptoLib;

declare global {
    interface Map {
        computeIfAbsent<K, V>(key: K, f: (k: K) => V): V;
    }

    interface Uint8Array {
        equals(val: Uint8Array): boolean;
    }

    interface ArrayBuffer {

        resize(newSize: number): ArrayBuffer;

        equals(val: ArrayBuffer): boolean;
    }

    interface Array<T> {
        shuffle(): Array<T>;
    }

    namespace io {
        namespace aether {
            namespace common {
                class KeyType {
                    getCryptoLib(): CryptoLib;
                }
            }
        }
    }
}
Array.prototype.shuffle = function <T>(): Array<T> {
    let currentIndex = this.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [this[currentIndex], this[randomIndex]] = [
            this[randomIndex], this[currentIndex]];
    }
    return this;
}
Uint8Array.prototype.equals = function (val: Uint8Array) {
    if (this.byteLength != val.byteLength) return false;
    for (let i = 0; i != val.byteLength; i++) {
        if (this[i] != val[i]) return false;
    }
    return true;
}
ArrayBuffer.prototype.resize = function (newSize: number) {
    let destBuffer = new ArrayBuffer(newSize);
    new Uint8Array(destBuffer).set(new Uint8Array(this));
    return destBuffer;
}
ArrayBuffer.prototype.equals = function (val: ArrayBuffer) {
    if (this.byteLength != val.byteLength) return false;
    return new Uint8Array(this).equals(new Uint8Array(val));
}
Map.prototype.computeIfAbsent = function (key, f) {
    if (this.has(key)) {
        return this.get(key);
    }
    let res = f(key);
    this.set(key, res);
    return res;
}

export class Log {
    static info(val: any) {

    }

    static error(val: any) {

    }

    static trace(val: any) {

    }

    static debug(val: any) {

    }
}

export class Aether {
}

export interface AetherStore {
    getUid(): UUID;

    setUid(uid: UUID): void;

    getCloud(uid: UUID): Cloud

    getMasterKey(): Key;
}

interface CryptoProvider {
    encode(data: Uint8Array): Uint8Array;

    decode(data: Uint8Array): Uint8Array;
}

KeyType.prototype.getCryptoLib = function () {
    switch (this.cryptoLib) {
        case "SODIUM":
            return CryptoLib.SODIUM;
        case "HYDROGEN":
            return CryptoLib.HYDROGEN;
        default:
            throw new Error("Unknown cryptoLib: " + this.cryptoLib);
    }
}

export enum AetherCodec {
    BINARY,
    WEBSOCKET
}

export interface ApiNode<LT, RT, C> {

}

export interface CryptoNode {

}

export interface SC<T> {

}

export class SCD<T> {
    data: Uint8Array;

    constructor(data: Uint8Array) {
        this.data = data;
    }
}

export type ValueListener = (owner: any) => void;

export class Value<T> {
    readonly data: T;
    readonly force: boolean;
    readonly listener: ValueListener;

    constructor(data: T, force: boolean, listener: ValueListener) {
        this.data = data;
        this.force = force;
        this.listener = listener;
    }

    static of<E>(data: E): Value<E> {
        return new Value<E>(data, false, () => {
        });
    }

    link(l: ValueListener): Value<T> {
        return new Value<T>(this.data, this.force, (o) => {
            this.listener(o);
            l(o);
        });
    }
}

export interface GateI<TWrite> {

}

export interface Gate<TRead, TWrite> extends GateI<TWrite> {

}

export enum CryptoLib {SODIUM, HYDROGEN}

export class Nonce {
    static readonly crypto_aead_chacha20poly1305_NPUBBYTES = 8;
    private static readonly BYTE_MAX_VALUE = 127;
    private static readonly BYTE_MIN_VALUE = -127;
    readonly data: Uint8Array;

    constructor(data: (ArrayBuffer | Uint8Array)) {
        if (data instanceof ArrayBuffer) {
            data = new Uint8Array(data);
        }
        this.data = data as Uint8Array;
    }

    static of(size?: number | string): Nonce {
        if (typeof size == 'undefined') {
            let buf = new Uint8Array(Nonce.crypto_aead_chacha20poly1305_NPUBBYTES);
            RND.nextBytes(buf);
            return new Nonce(buf);
        }
        if (typeof size == 'string') {
            return new Nonce(base64ToArrayBuffer(size));
        } else if (typeof size == 'number') {
            return new Nonce(new Uint8Array(size));
        } else {
            throw new Error();
        }
    }

    size(): number {
        return this.data.byteLength;
    }

    writeTo(target: Uint8Array, offset: number): void {
        Arrays.copyTo(this.data, 0, target, offset, this.data.byteLength);
    }

    readFrom(src: Uint8Array, offset: number): void {
        Arrays.copyTo(src, offset, this.data, 0, this.data.byteLength);
    }

    inc(): void {
        for (let i = 0; i < this.size(); i++) {
            let v = this.data[i];
            if (v == Nonce.BYTE_MAX_VALUE) {
                this.data[i] = Nonce.BYTE_MIN_VALUE;
            } else {
                this.data[i] = (v + 1) & 0xff;
                return;
            }
        }
    }
}

export class KeySize {
    static CHACHA20POLY1305: 32;
    static ENCODED_CHACHA20POLY1305: 80;
    static CRYPTO_BOX_PUBLIC: 32;
    static CRYPTO_BOX_PRIVATE: 32;
    static CRYPTO_SIGN_PUBLIC: 32;
    static CRYPTO_SIGN_PRIVATE: 64;
}

export class ChaCha20Poly1305Pair {
    static readonly NONCE_LEN = 8;
    static readonly crypto_aead_chacha20poly1305_ABYTES = 16;
    private readonly nonceLocal: Nonce;
    private readonly nonceRemote: Nonce;
    private readonly keyLocal: Key;
    private readonly keyRemote: Key;

    constructor(keyLocal: Key, keyRemote: Key, nonceLocal: Nonce) {
        console.assert(keyLocal != null && keyLocal.getData().byteLength == KeySize.CHACHA20POLY1305, "Local key is bad: " + keyLocal);
        console.assert(keyRemote != null && keyRemote.getData().byteLength == KeySize.CHACHA20POLY1305, "Remote key is bad: " + keyRemote);
        this.keyLocal = keyLocal;
        this.keyRemote = keyRemote;
        console.assert(nonceLocal.size() == ChaCha20Poly1305Pair.NONCE_LEN);
        this.nonceLocal = nonceLocal;
        this.nonceRemote = Nonce.of();
    }

    static forClientAndServer(key: Key, nonce: Nonce): ChaCha20Poly1305Pair {
        console.assert(key != null);
        return new ChaCha20Poly1305Pair(key, key, nonce);
    }


    static forClient(masterKey: Key, serverId: number, nonce: Nonce): ChaCha20Poly1305Pair {
        let keyLocal = ChaCha20Poly1305Pair.generateSyncClientKeyByMasterKey(masterKey, serverId);
        let keyRemote = ChaCha20Poly1305Pair.generateSyncServerKeyByMasterKey(masterKey, serverId);
        return new ChaCha20Poly1305Pair(keyLocal, keyRemote, nonce);
    }

    static generateSyncClientKeyByMasterKey(masterKey: Key, serverId: number): Key {
        return masterKey;//TODO
    }

    static generateSyncServerKeyByMasterKey(masterKey: Key, serverId: number): Key {
        return masterKey;//TODO
    }

    getNonceLocal(): Nonce {
        return this.nonceLocal;
    }

    getNonceRemote(): Nonce {
        return this.nonceRemote;
    }

    getKeyLocal(): Key {
        return this.keyLocal;
    }

    getKeyRemote(): Key {
        return this.keyRemote;
    }

    decode(data: Uint8Array): Uint8Array {
        if (data.byteLength == 0) return data;
        this.nonceRemote.readFrom(data, data.byteLength - ChaCha20Poly1305Pair.NONCE_LEN);
        return sodium.syncDecrypt(new Uint8Array(data, 0, data.byteLength - ChaCha20Poly1305Pair.NONCE_LEN), this.keyRemote.getData(), this.nonceRemote.data);
    }

    encode(data: Uint8Array, dataLength: number = -1): Uint8Array {
        if (dataLength == -1) dataLength = data.byteLength;
        console.assert(dataLength <= data.byteLength && dataLength > 0, dataLength);
        let outSize = dataLength + ChaCha20Poly1305Pair.crypto_aead_chacha20poly1305_ABYTES;
        let output = sodium.syncCrypt(data, this.keyLocal.getData(), this.nonceLocal.data);
        let output2 = Arrays.copyOf(output, output.byteLength + ChaCha20Poly1305Pair.NONCE_LEN);
        this.nonceLocal.writeTo(output2, outSize);
        this.nonceLocal.inc();
        return output2;
    }
}

export interface ASerializer {
    staticSize(): boolean;

    calcSize(v?: any): number;

    put(out: DataIO, value: any): void;
}

export type ADeserializer<T> = (data: DataIO) => T;

export class UUID {
    value: Uint8Array;

    constructor(value: Uint8Array) {
        this.value = value;
    }

    equals(o: UUID): boolean {
        return this.value.equals(o.value);
    }
}

export namespace meta {
    export interface SerializeContext {
        regValue(val: Value<any>): void;

        regRFuture(val: RFuture, meta: MetaType<RFuture<any>>): Int16;

        regFuture(val: Future): Int16;

        getRFuture(reqId: Int16): RFuture<any>;

        getFuture(reqId: Int16): Future;
    }

    export interface MetaType<T> {
        serialize(ctx: SerializeContext, out: DataIO, value: T): void;

        deserialize(ctx: SerializeContext, inData: DataIO): T;
    }

    export interface MetaApi<T> {
        callFromRemote(ctx: SerializeContext, inData: DataIO): void;

        makeRemote(ctx: SerializeContext): T;
    }

    export let PackInt: MetaType<number> = new class PackInt implements meta.MetaType<number> {
        static readonly u8: bigint = 251n;
        static readonly pow8_mask = 0xffn;
        static readonly pow8_shift: bigint = 8n;
        static readonly pow8: bigint = 256n;
        static readonly k8ReservedFor16: bigint = 16n;
        static readonly k16ReservedFor32: bigint = 256n;
        static readonly pow32: bigint = 4n * 1024n * 1024n * 1024n;
        static readonly u16: bigint = 5n * 256n + PackInt.u8 - PackInt.k8ReservedFor16;  // 1515
        static readonly u32: bigint = 1024n * 1024n + PackInt.u16 - PackInt.k16ReservedFor32;  // 1 049 835
        static readonly u64: bigint = PackInt.u32 + PackInt.pow32 * PackInt.k16ReservedFor32;
        static pow16_mask: bigint = 0xFFFFn;
        static pow16_shift: bigint = 16n;
        static pow16: bigint = 65536n;
        static pow32_shift: bigint = 32n;
        static pow32_mask: bigint = 0xFFFFFFFFn;

        deserialize(ctx: meta.SerializeContext, inData: DataIO): number {
            return undefined;
        }

        serialize(ctx: meta.SerializeContext, out: DataIO, v: number): void {

        }
    }

    export function makeObj<T>(m: any): MetaType<T> {
        return null;
    }

    export function makeEnum<T>(m: T): MetaType<keyof T> {
        let keys = Object.keys(m) as Array<keyof T>;
        return new class implements meta.MetaType<keyof T> {
            deserialize(ctx: meta.SerializeContext, inData: DataIO): keyof T {
                return keys[inData.readByte()];
            }

            serialize(ctx: meta.SerializeContext, out: DataIO, value: keyof T): void {
                out.writeByte(keys.indexOf(value));
            }
        }
    }

    export function makeSet<T>(m: MetaType<T>): MetaType<Set<T>> {
        return new class implements meta.MetaType<Set<T>> {
            deserialize(ctx: meta.SerializeContext, inData: DataIO): Set<T> {
                let size = PackInt.deserialize(ctx, inData);
                let res: Set<T> = new Set<T>();
                for (let i = 0; i < size; i++) {
                    res.add(m.deserialize(ctx, inData));
                }
                return res;
            }

            serialize(ctx: meta.SerializeContext, out: DataIO, value: Set<T>): void {
                PackInt.serialize(ctx, out, value.size);
                for (let e of value) {
                    m.serialize(ctx, out, e);
                }
            }
        };
    }

    export function makeList<T>(m: MetaType<T>): MetaType<Array<T>> {
        return new class implements meta.MetaType<Array<T>> {
            deserialize(ctx: meta.SerializeContext, inData: DataIO): Array<T> {
                let size = PackInt.deserialize(ctx, inData);
                let res: Array<T> = new Array<T>();
                for (let i = 0; i < size; i++) {
                    res.push(m.deserialize(ctx, inData));
                }
                return res;
            }

            serialize(ctx: meta.SerializeContext, out: DataIO, value: Array<T>): void {
                PackInt.serialize(ctx, out, value.length);
                for (let e of value) {
                    m.serialize(ctx, out, e);
                }
            }
        };
    }

    export function makeSList<T>(m: MetaType<T>, size: number): MetaType<Array<T>> {
        return new class implements meta.MetaType<Array<T>> {
            deserialize(ctx: meta.SerializeContext, inData: DataIO): Array<T> {
                let res: Array<T> = new Array<T>();
                for (let i = 0; i < size; i++) {
                    res.push(m.deserialize(ctx, inData));
                }
                return res;
            }

            serialize(ctx: meta.SerializeContext, out: DataIO, value: Array<T>): void {
                for (let e of value) {
                    m.serialize(ctx, out, e);
                }
            }
        };
    }

    export function makeRFuture<T>(m: MetaType<T>): MetaType<RFuture<T>> {
        return new class implements meta.MetaType<RFuture<T>> {
            deserialize(ctx: meta.SerializeContext, inData: DataIO): RFuture<T> {
                let reqId = inData.readShort();
                let val = m.deserialize(ctx, inData);
                let f = ctx.getRFuture(reqId);
                f.done(val);
                return f;
            }

            serialize(ctx: meta.SerializeContext, out: DataIO, value: RFuture<T>): void {
                let reqId = ctx.regRFuture(value, this);
                out.writeShort(reqId);
            }
        };
    }

    export function makeValue<T>(m: MetaType<T>): MetaType<Value<T>> {
        return new class implements meta.MetaType<Value<T>> {
            deserialize(ctx: meta.SerializeContext, inData: DataIO): Value<T> {
                return Value.of(m.deserialize(ctx, inData));
            }

            serialize(ctx: meta.SerializeContext, out: DataIO, value: Value<T>): void {
                m.serialize(ctx, out, value.data);
            }
        };
    }

    export function makeApi<T>(m: any): MetaType<T> {
        return null;
    }

    export function makeSC<T>(): MetaType<SC<T>> {
        return null;
    }

    export function makeSCD<T>(): MetaType<SCD<T>> {
        return new class implements meta.MetaType<SCD<T>> {
            deserialize(ctx: meta.SerializeContext, inData: DataIO): SCD<T> {
                return new SCD<T>(MUint8Array.deserialize(ctx, inData));
            }

            serialize(ctx: meta.SerializeContext, out: DataIO, value: SCD<T>): void {
                MUint8Array.serialize(ctx, out, value.data);
            }
        };
    }

    export const MCryptoLib = makeEnum(CryptoLib);
    export const MAetherCodec = makeEnum(AetherCodec);
    export const MDate: MetaType<Date> = new class implements meta.MetaType<Date> {
        deserialize(ctx: meta.SerializeContext, inData: DataIO): Date {
            let ms = MInt64.deserialize(ctx, inData);
            return new Date(ms);
        }

        serialize(ctx: meta.SerializeContext, out: DataIO, value: Date): void {
        }
    }
    export const MInt8 = new class extends MetaType<number> {
        constructor() {
            super();
            this.serializer = new SerializerInt8();
            this.deserializer = (inData) => inData.readByte();
        }
    };
    export const MInt16: MetaType<number> = new class implements meta.MetaType<number> {
        deserialize(ctx: meta.SerializeContext, inData: DataIO): number {
            return undefined;
        }

        serialize(ctx: meta.SerializeContext, out: DataIO, value: number): void {
        }
    }
    export const MInt32: MetaType<Int32> = new class implements meta.MetaType<Int32> {
        deserialize(ctx: meta.SerializeContext, inData: DataIO): Int32 {
            return inData.readInt();
        }

        serialize(ctx: meta.SerializeContext, out: DataIO, value: Int32): void {
            out.writeInt(value);
        }
    }
    export const MInt64: MetaType<Int64> = new class implements meta.MetaType<Int64> {
        deserialize(ctx: meta.SerializeContext, inData: DataIO): Int64 {
            return inData.readLong();
        }

        serialize(ctx: meta.SerializeContext, out: DataIO, value: Int64): void {
            out.writeLong(value);
        }
    }
    export const MBoolean: MetaType<boolean> = new class implements meta.MetaType<boolean> {
        deserialize(ctx: meta.SerializeContext, inData: DataIO): boolean {
            return inData.readBoolean();
        }

        serialize(ctx: meta.SerializeContext, out: DataIO, value: boolean): void {
            out.writeBoolean(value);
        }
    }
    export const MUint8Array: MetaType<Uint8Array> = new class implements meta.MetaType<Uint8Array> {
        deserialize(ctx: meta.SerializeContext, inData: DataIO): Uint8Array {
            let size = PackInt.deserialize(ctx, inData);
            return inData.read(size);
        }

        serialize(ctx: meta.SerializeContext, out: DataIO, value: Uint8Array): void {
            PackInt.serialize(ctx, out, value.byteLength);
            out.writeArray(value);
        }
    }
    export const MUint16Array: MetaType<Uint16Array> = new class implements meta.MetaType<Uint16Array> {
        deserialize(ctx: meta.SerializeContext, inData: DataIO): Uint16Array {
            let size = PackInt.deserialize(ctx, inData);
            return new Uint16Array(inData.read(size * 2).buffer);
        }

        serialize(ctx: meta.SerializeContext, out: DataIO, value: Uint16Array): void {
            PackInt.serialize(ctx, out, value.length);
            out.writeArray(new Uint8Array(value.buffer));
        }
    }
    export const MUint32Array: MetaType<Uint32Array> = new class implements meta.MetaType<Uint32Array> {
        deserialize(ctx: meta.SerializeContext, inData: DataIO): Uint32Array {
            let size = PackInt.deserialize(ctx, inData);
            return new Uint32Array(inData.read(size * 4).buffer);
        }

        serialize(ctx: meta.SerializeContext, out: DataIO, value: Uint32Array): void {
            PackInt.serialize(ctx, out, value.length);
            out.writeArray(new Uint8Array(value.buffer));
        }
    }
    export const MUint64Array: MetaType<BigUint64Array> = new class implements meta.MetaType<BigUint64Array> {
        deserialize(ctx: meta.SerializeContext, inData: DataIO): BigUint64Array {
            let size = PackInt.deserialize(ctx, inData);
            return new BigUint64Array(inData.read(size * 8).buffer);
        }

        serialize(ctx: meta.SerializeContext, out: DataIO, value: BigUint64Array): void {
            PackInt.serialize(ctx, out, value.length);
            out.writeArray(new Uint8Array(value.buffer));
        }
    }

    export const MString: MetaType<string> = new class MString implements meta.MetaType<string> {
        static readonly texe = new TextEncoder();
        static readonly tdec = new TextDecoder();

        deserialize(ctx: meta.SerializeContext, inData: DataIO): string {
            return tdec.decode(MUint8Array.deserialize(ctx, inData));
        }

        serialize(ctx: meta.SerializeContext, out: DataIO, value: string): void {
            MUint8Array.serialize(ctx, out, SerializerString.texe.encode(value));
        }
    }
    // export const MString:MetaType<string> = new class extends MetaType<string> {
    //     constructor() {
    //         super();
    //         this.serializer = new SerializerString();
    //         this.deserializer = (inData) => DeserializerString(inData);
    //     }
    // };
    export const MUUID: MetaType<UUID> = new class implements meta.MetaType<UUID> {
        deserialize(ctx: meta.SerializeContext, inData: DataIO): UUID {
            return new UUID(MUint8Array.deserialize(ctx, inData));
        }

        serialize(ctx: meta.SerializeContext, out: DataIO, value: UUID): void {
            MUint8Array.serialize(ctx, out, value.value);
        }
    }
}
export type RequestId = number;

export class ResultUnit {
    reqId: RequestId;
    value: any;
    serializer: ASerializer;

    constructor(reqId: RequestId, value: any, serializer: ASerializer = null) {
        this.reqId = reqId;
        this.value = value;
        this.serializer = serializer;
    }
}

export class ExceptionUnit {
    reqId: number;
    exception: AetherException;

    constructor(reqId: RequestId, exception: AetherException) {
        this.reqId = reqId;
        this.exception = exception;
    }
}

export enum ErrorId {
    UNKNOWN,
    NO_AUTH,
    UNKNOWN_ALIAS,
    NO_ACCESS,
    BAD_CMD,
    BAD_SIZE,
    BAD_ARGUMENTS,
    BAD_TYPE,
    ALREADY_REGISTRATION,
    BAD_CRYPT_TYPE,
    INNER_EXCEPTION
}

export type Int8 = number;

export type Int16 = number;

export type Int32 = number;

export type Int64 = bigint;

export type Time = Int64;

abstract class DeserializerNumber<length> {
    index = 0;
    value = 0;

    put(dataIn: DataIO): boolean {
        while (dataIn.isReadable() && this.index < length) {
            this.value |= dataIn.readUByte() << 8 * (this.index++);
        }
        return this.index === length;
    }

    reset() {
        this.index = 0;
        this.value = 0;
    }
}

export class DeserializerInt16Stream extends DeserializerNumber<2> {
}

export class DeserializerInt32Stream extends DeserializerNumber<4> {
}

export class DeserializerSizeStream {
    private readonly deserializerShort = new DeserializerInt16Stream();
    private readonly deserializerInt = new DeserializerInt32Stream();
    private val: bigint;
    private state: number = 0;

    get value(): any {
        return this.val;
    }

    put(inData: DataIO): boolean {
        while (inData.isReadable()) {
            switch (this.state) {
                case 0 :
                    this.val = BigInt(inData.readUByte());
                    if (this.val < PackIntConstants.u8) {
                        return true;
                    }
                    this.state = 1;
                    break;
                case 1 :
                    let v = BigInt(inData.readUByte());
                    this.val = ((this.val - PackIntConstants.u8) << PackIntConstants.pow8_shift) + PackIntConstants.u8 + v;
                    if (this.val < PackIntConstants.u16) {
                        return true;
                    }
                    this.state = 2;
                    break;
                case 2:
                    if (this.deserializerShort.put(inData)) {
                        let f = BigInt(this.deserializerShort.value) & 0xffffn;
                        this.val = ((this.val - PackIntConstants.u16) << PackIntConstants.pow16_shift) + PackIntConstants.u16 + f;
                        if (this.val < PackIntConstants.u32) {
                            return true;
                        } else {
                            this.state = 3;
                        }
                    } else {
                        return false;
                    }
                    break;
                case 3 :
                    if (this.deserializerInt.put(inData)) {
                        let f1 = BigInt(this.deserializerInt.value) & 0xffffffffn;
                        this.val = ((this.val - PackIntConstants.u32) << PackIntConstants.pow32_shift) + PackIntConstants.u32 + f1;
                        if (this.val < PackIntConstants.u64) {
                            return true;
                        }
                        throw new AetherException();
                    } else {
                        return false;
                    }
            }
        }
        return false;
    }

    reset(): void {
        this.state = 0;
        this.val = 0n;
        this.deserializerInt.reset();
        this.deserializerShort.reset();
    }

}

export function base64ToArrayBuffer(base64: string): Uint8Array {
    let binaryString = atob(base64);
    let bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}

export type Consumer<T> = (value: T) => void;
export type Supplier<T> = () => T;
export class SlotConsumer<T> {
    protected listeners: Consumer<T>[];

    add(listener: Consumer<T>) {
        this.listeners.push(listener);
    }

    fire(value: T) {
        for (let listener of this.listeners) {
            listener(value);
        }
    }
}
export class SlotConsumerWithValue<T> extends SlotConsumer<T> {
    value: T;

    add(listener: Consumer<T>) {
        this.listeners.push(listener);
        if (this.value) {
            listener(this.value);
        }
    }

    fire(value: T) {
        this.value = value;
        super.fire(value);
    }
}



export class AetherException extends Error {
    errorId: ErrorId;
    requestId: number;
    logId: number;

    constructor(errorId?: ErrorId, text?: string) {
        super(text);
        this.errorId = errorId;
    }
}

export type Queue<T> = Array<T>;

export class DataIO {
    dataView: DataView;
    posRead = 0;
    posWrite = 0;

    constructor(arg?: (ArrayBuffer | Uint8Array | number)) {
        if (arg instanceof ArrayBuffer) {
            this.dataView = new DataView(arg as ArrayBuffer);
            this.posWrite = this.dataView.byteLength;
            this.posRead = 0;
        } else if (arg instanceof Uint8Array) {
            this.dataView = new DataView((arg as Uint8Array).buffer);
            this.posWrite = this.dataView.byteLength;
            this.posRead = 0;
        } else if (typeof arg == 'number') {
            if (!arg) {
                arg = 50;
            }
            this.dataView = new DataView(new ArrayBuffer(arg as number));
        } else if (arg == null) {
            arg = 50;
            this.dataView = new DataView(new ArrayBuffer(arg));
        }
    }

    clear() {
        this.posRead = 0;
        this.posWrite = 0;
    }

    reset() {
        this.clear();
    }

    subArray(length: number): ArrayBuffer {
        if (length > this.getSizeForRead()) {
            throw new Error(`length subarray: ${length} but available is ${this.getSizeForRead()}`);
        }
        let r = this.posRead;
        this.posRead += length;
        return this.dataView.buffer.slice(r, r + length);
    }

    toArray(): Uint8Array {
        if (this.posRead === 0 && this.posWrite === this.dataView.byteLength) return new Uint8Array(this.dataView.buffer);
        return new Uint8Array(this.dataView.buffer, this.posRead, this.posWrite - this.posRead);
    }

    checkSize(addSize: number) {
        if (this.posWrite + addSize > this.dataView.byteLength) {
            this.dataView = new DataView(this.dataView.buffer.resize((this.posWrite + addSize) * 1.5));
        }
    }

    writeData(data: DataIO) {
        assert(data instanceof DataIO);
        if (data.isEmpty()) return;
        this.writeArray(data.dataView, data.posRead, data.getSizeForRead());
    }

    writeByteBI(val: bigint): void {
        this.writeByte(Number(val));
    }

    writeBoolean(val: boolean): void {
        this.writeByte(val ? 1 : 0);
    }

    writeByte(val: number): void {
        this.checkSize(1);
        this.dataView.setInt8(this.posWrite, val);
        this.posWrite++;
    }

    writeArray(array: (Uint8Array | ArrayBuffer | DataView), offset?: number, length?: number) {
        if (!offset) offset = 0;
        if (!length) length = array.byteLength;
        this.checkSize(length);
        if (array instanceof ArrayBuffer) {
            array = new Uint8Array(array);
        }
        if (array instanceof Uint8Array) {
            for (let i = 0; i < length; i++) {
                this.dataView.setUint8(this.posWrite, array[offset + i]);
                this.posWrite++;
            }
            return;
        } else if (array instanceof DataView) {
            for (let i = 0; i < length; i++) {
                this.dataView.setUint8(this.posWrite, array.getUint8(offset + i));
                this.posWrite++;
            }
            return;
        }
        throw new Error();
    }

    writeShortBI(val: bigint): void {
        this.writeShort(Number(val));
    }

    writeShort(val: number): void {
        this.checkSize(2);
        this.dataView.setInt16(this.posWrite, val, true);
        this.posWrite += 2;
    }

    writeIntBI(val: bigint): void {
        this.writeInt(Number(val));
    }

    writeInt(val: number): void {
        this.checkSize(4);
        this.dataView.setInt32(this.posWrite, val, true);
        this.posWrite += 4;
    }

    writeLong(val: bigint): void {
        this.checkSize(8);
        if (typeof (val) === 'number') val = BigInt(val);
        this.dataView.setBigInt64(this.posWrite, val, true);
        this.posWrite += 8;
    }

    isReadable(): boolean {
        return this.getSizeForRead() > 0;
    }

    getSizeForRead(): number {
        return this.posWrite - this.posRead;
    }

    isEmpty(): boolean {
        return !this.isReadable();
    }

    readByte(): number {
        if (this.posRead + 1 > this.posWrite) {
            throw new Error(`posRead(${this.posRead} > posWrite(${this.posWrite}))`);
        }
        let res = this.dataView.getInt8(this.posRead);
        this.posRead += 1;
        return res;
    }

    readUByte(): number {
        if (this.posRead + 1 > this.posWrite) {
            throw new Error(`posRead(${this.posRead} > posWrite(${this.posWrite}))`);
        }
        let res = this.dataView.getUint8(this.posRead);
        this.posRead += 1;
        return res;
    }

    readShort(): number {
        let endPos = this.posRead + 2;
        if (endPos > this.posWrite) {
            throw new Error(`posRead(${endPos} > posWrite(${this.posWrite}))`);
        }
        let res = this.dataView.getInt16(this.posRead, true);
        this.posRead = endPos;
        return res;
    }

    readUShort(): number {
        let endPos = this.posRead + 2;
        if (endPos > this.posWrite) {
            throw new Error(`posRead(${endPos} > posWrite(${this.posWrite}))`);
        }
        let res = this.dataView.getUint16(this.posRead, true);
        this.posRead = endPos;
        return res;
    }

    readInt(): Int32 {
        let endPos = this.posRead + 4;
        if (endPos >= this.posWrite) {
            throw new Error(`posRead(${endPos} > posWrite(${this.posWrite}))`);
        }
        let res = this.dataView.getInt32(this.posRead, true);
        this.posRead = endPos;
        return res;
    }

    readUInt(): number {
        let endPos = this.posRead + 4;
        if (endPos >= this.posWrite) {
            throw new Error(`posRead(${endPos} > posWrite(${this.posWrite}))`);
        }
        let res = this.dataView.getUint32(this.posRead, true);
        this.posRead = endPos;
        return res;
    }

    readLong(): bigint {
        let endPos = this.posRead + 8;
        if (endPos > this.posWrite) {
            throw new Error(`posRead(${endPos} > posWrite(${this.posWrite}))`);
        }
        let res = this.dataView.getBigInt64(this.posRead, true);
        this.posRead = endPos;
        return res;
    }

    readULong(): bigint {
        let endPos = this.posRead + 8;
        if (endPos > this.posWrite) {
            throw new Error(`posRead(${endPos} > posWrite(${this.posWrite}))`);
        }
        let res = this.dataView.getBigUint64(this.posRead, true);
        this.posRead = endPos;
        return res;
    }

    read(size: number): Uint8Array {
        let result = new Uint8Array(this.dataView.buffer, this.posRead, this.posRead + size);
        this.posRead += size;
        this.checkPositions();
        return result;
    }

    readPackInt(): number {
        return Number(this.readPackLong());
    }

    readPackLong(): bigint {
        let val: bigint;
        val = BigInt(this.readUByte());
        if (val < PackIntConstants.u8) {
            return val;
        }
        let v = BigInt(this.readUByte());
        val = ((val - PackIntConstants.u8) << PackIntConstants.pow8_shift) + PackIntConstants.u8 + v;
        if (val < PackIntConstants.u16) {
            return val;
        }
        let f = BigInt(this.readUShort()) & 0xffffn;
        val = ((val - PackIntConstants.u16) << PackIntConstants.pow16_shift) + PackIntConstants.u16 + f;
        if (val < PackIntConstants.u32) {
            return val;
        }
        let f1 = BigInt(this.readInt()) & 0xffffffffn;
        val = ((val - PackIntConstants.u32) << PackIntConstants.pow32_shift) + PackIntConstants.u32 + f1;
        if (val < PackIntConstants.u64) {
            return val;
        }
        throw new AetherException();
    }

    writePackInt(v: number) {
        this.writePackLong(BigInt(v));
    }

    writePackLong(vv: bigint) {
        if (vv < PackIntConstants.u8) {
            this.writeByteBI(vv);
        } else if (vv < PackIntConstants.u16) {
            this.writeByteBI((((vv - PackIntConstants.u8) >> PackIntConstants.pow8_shift) & 0xffn) + PackIntConstants.u8);
            this.writeByteBI((vv - PackIntConstants.u8) & PackIntConstants.pow8_mask);
        } else if (vv < PackIntConstants.u32) {
            this.writeByte(255);
            this.writeByteBI((((vv - PackIntConstants.u16) >> PackIntConstants.pow16_shift) - PackIntConstants.u8 + PackIntConstants.u16));
            this.writeShortBI(((vv - PackIntConstants.u16) & PackIntConstants.pow16_mask));
        } else if (vv < PackIntConstants.u64) {
            this.writeByte(255);
            this.writeByte(255);
            this.writeShortBI((((vv - PackIntConstants.u32) >> PackIntConstants.pow32_shift) - PackIntConstants.u16 + PackIntConstants.u32));
            this.writeIntBI(((vv - PackIntConstants.u32) & PackIntConstants.pow32_mask));
        }
    }

    readArray<T>(size: number, elDeserializer: (inData: DataIO) => T): T[] {
        let result: T[] = [];
        for (let i = 0; i < size; i++) {
            result.push(elDeserializer(this));
        }
        return result;
    }

    readBoolean(): boolean {
        return this.readByte() != 0;
    }

    private checkPositions() {
        if (this.posRead == this.posWrite) {
            this.posRead = 0;
            this.posWrite = 0;
        }
        assert(this.posRead < this.posWrite);
    }
}

export namespace PackIntConstants {
    export const u8 = 251n;
    export const pow8_mask = 0xFFn;
    export const pow8_shift: bigint = 8n;
    export const pow8 = 256n;
    export const k8ReservedFor16: bigint = 16n;
    export const k16ReservedFor32: bigint = 256n;
    export const pow32: bigint = 4n * 1024n * 1024n * 1024n;
    export const u16: bigint = 5n * 256n + u8 - k8ReservedFor16;  // 1515
    export const u32: bigint = 1024n * 1024n + u16 - k16ReservedFor32;  // 1 049 835
    export const u64: bigint = u32 + pow32 * k16ReservedFor32;
    // maximum supported value is (1 Tb + 1 Mb + 1515 - 1)
    export const pow16_mask = 0xFFFFn;
    export const pow16_shift: bigint = 16n;
    export const pow16 = 65536n;
    export const pow32_shift: bigint = 32n;
    export const pow32_mask = 0xFFFFFFFFn;
}

export const UNS_ERROR = "Unsupported operation exception";

export function assert(flag: boolean, hint: String = "unknown") {
    if (!flag) {
        console.log("assert error: " + hint);
        throw new Error(hint.toString());
    }
}

export function equals<T extends (ArrayBuffer | DataView | Uint8Array)>(data1: T, data2: T): boolean {
    if (data1 instanceof ArrayBuffer) {
        if (data1.byteLength !== data2.byteLength) return false;
        let a1 = new Uint8Array(data1 as ArrayBuffer);
        let a2 = new Uint8Array(data2 as ArrayBuffer);
        for (let i = 0; i < this.byteLength; i++) {
            if (a1[i] !== a2[i]) return false;
        }
        return true;
    } else if (data1 instanceof DataView) {
        let d1 = data1 as DataView;
        let d2 = data2 as DataView;
        if (data1.byteLength !== data2.byteLength) return false;
        for (let i = 0; i < this.byteLength; i++) {
            if (d1.getUint8(i) !== d2.getUint8(i)) return false;
        }
        return true;
    } else if (data1 instanceof Uint8Array) {
        let d1 = data1 as Uint8Array;
        let d2 = data2 as Uint8Array;
        if (data1.byteLength !== data2.byteLength) return false;
        for (let i = 0; i < this.byteLength; i++) {
            if (d1[i] !== d2[i]) return false;
        }
        return true;
    }
}

export type AFunction<A, R> = (arg: A) => R;

export class Future {

}

export class RFuture<T> {
    private listeners: Consumer<T>[] = []
    private listenersErrors: Consumer<Error>[] = []
    private _valueError: Error;
    private prom: Promise<T>;

    constructor(value: T = null) {
        if (typeof value !== 'undefined') {
            if (value instanceof Error) {
                this._valueError = value;
            } else {
                this._value = value;
            }
        }
    }

    private _value: T;

    get value(): T {
        return this._value;
    }

    set value(value: T) {
        if (this._value || this._valueError) return;
        this._valueError = null;
        let old = this._value;
        this._value = value;
        if (this._value !== old) {
            this.listeners.forEach(listener => listener(this._value));
        }
    }

    static completed<T>(value: T): RFuture<T> {
        return new RFuture<T>(value);
    }

    static any<T>(futures: Array<RFuture<T>>): RFuture<T> {
        for (let f of futures) {
            if (f.isDone()) return f;
        }
        let result = new RFuture<T>();
        for (let f of futures) {
            f.to(v => result.tryDone(v));
        }
        return result;
    }

    static all<T>(futures: Array<RFuture<T>>): RFuture<Array<T>> {
        let resArray:Array<T> = [];
        let result = new RFuture<Array<T>>();
        let counter = futures.length;
        for (let i = 0; i < futures.length; i++) {
            let f = futures[i];
            f.to(v => {
                resArray[i] = v;
                counter--;
                if (counter == 0) {
                    result.done(resArray);
                }
            });
        }
        return result;
    }

    to(listener: Consumer<T>) {
        this.add(listener);
        return this;
    }

    then(listener: Consumer<T>) {
        this.add(listener);
        return this;
    }

    async promise() {
        if (!this.prom) {
            this.prom = new Promise((resolve, reject) => {
                if (this.isDone()) {
                    resolve(this._value);
                } else if (this.isError()) {
                    reject(this._valueError);
                } else {
                    this.add((v) => resolve(v));
                    this.catch((e) => reject(e));
                }
            });
            this.prom.catch(e => {
                console.log("some error: " + e);
            });
        }
        return this.prom;
    }

    resolve(value: T) {
        this.value = value;
    }

    done(value: T) {
        this.resolve(value);
    }

    timeoutSeconds(time: number, task: Consumer<RFuture<T>>) {
        setTimeout((self) => {
            if (self.isNotDone()) {
                task(self);
            }
        }, time, this);
    }

    isDone(): boolean {
        return typeof this._value !== 'undefined' && this._value != null;
    }

    isNotDone(): boolean {
        return !this.isDone();
    }

    isError(): boolean {
        return typeof this._valueError !== 'undefined' && this._valueError != null;
    }

    map<E>(f: AFunction<T, E>): RFuture<E> {
        let result = new Future<E>();
        this.add(v => {
            result.value = f(v);
        });
        return result;
    }

    catch(e: Consumer<Error>) {
        this.listenersErrors.push(e);
        if (this.isError()) {
            e(this._valueError);
        }
    }

    throw(e: Error) {
        this._value = null;
        this._valueError = e;
        this.listenersErrors.forEach(v => v(e));
    }

    add(listener: Consumer<RFuture<T>>) {
        assert(typeof listener === 'function');
        this.listeners.push(listener);
        if (this.isDone()) {
            listener(this);
        }
    }

    tryDone(value: T): boolean {
        if (this._value != null) return false;
        this.done(value);
        return true;
    }

    isFinalStatus() {
        return this.isDone() || this.isError();
    }

    timeoutError(seconds: number, s: string): RFuture<T> {
        let self = this;
        setTimeout(() => {
            if (!self.isFinalStatus()) {
                console.log("Timeout: " + s);
            }
        }, seconds * 1000);
        return this;
    }

    getError(): Error {
        return this._value as Error;
    }

    timeout(seconds: number, f: () => void) {
        let self = this;
        setTimeout(() => {
            if (!self.isFinalStatus()) {
                f();
            }
        }, seconds * 1000);
        return this;
    }
}

export function currentTime(): Time {
    return BigInt(Date.now());
}

export namespace RND {
    export function nextBytes(buf: (ArrayBuffer | Uint8Array)) {
        if (buf instanceof ArrayBuffer) {
            buf = new Uint8Array(buf);
        }
        for (let i = 0; i < buf.byteLength; i++) {
            buf[i] = Math.floor(Math.random() * 0xff);
        }
    }
}

export class Arrays {
    static copyOf(srcBuffer: Uint8Array, newSize: number): Uint8Array {
        let destBuffer = new Uint8Array(newSize);
        Arrays.copyTo(srcBuffer, 0, destBuffer, 0, newSize);
        return destBuffer;
    }

    static copyTo(srcBuffer: Uint8Array, srcOffset: number, destBuffer: Uint8Array, destOffset: number, length: number): void {
        new Uint8Array(destBuffer, destOffset, length).set(new Uint8Array(srcBuffer, srcOffset, length));
    }
}

export function streamOf<T>(data: Iterable<T>): Stream<T> {
    let it = data[Symbol.iterator]();
    return new class extends Stream<T> {
        nxt: IteratorResult<T>;

        hasNext(): boolean {
            if (!this.nxt) {
                this.nxt = it.next();
            }
            return !this.nxt.done;
        }

        next(): T {
            if (!this.nxt) {
                this.nxt = it.next();
            }
            let res = this.nxt.value;
            this.nxt = null;
            return res;
        }
    }
}

export abstract class Stream<T> implements Iterable<T> {
    abstract next(): T;

    abstract hasNext(): boolean;

    [Symbol.iterator](): Iterator<T> {
        let self = this;
        return new class implements Iterator<T> {
            next(...args: []): IteratorResult<T, any> {
                return {
                    done: !self.hasNext(),
                    value: self.next()
                } as IteratorResult<T>;
            }
        }
    }

    filterCheckAndAdd(s: Set<T>): Stream<T> {
        return this.filter(v => {
            if (s.has(v)) return false;
            s.add(v);
            return true;
        });
    }

    filter(f: (v: T) => boolean): Stream<T> {
        let self = this;
        return new class extends Stream<T> {
            private temp: T;
            private flag: boolean;

            hasNext(): boolean {
                if (this.flag) return true;
                while (self.hasNext()) {
                    let v = self.next();
                    if (f(v)) {
                        this.temp = v;
                        this.flag = true;
                        return true;
                    }
                }
                return false;
            }

            next(): T {
                if (this.flag) {
                    this.flag = false;
                    return this.temp;
                } else {
                    throw new Error("Check hasNext");
                }
            }
        }
    }

    shuffle(): Stream<T> {
        return streamOf(this.toArray().shuffle());
    }

    map<R>(f: (T) => R): Stream<R> {
        let self = this;
        return new class extends Stream<R> {
            hasNext(): boolean {
                return self.hasNext();
            }

            next(): R {
                return f(self.next());
            }
        }
    }

    toArray(): Array<T> {
        let res = [];
        while (this.hasNext()) {
            res.push(this.next());
        }
        return res;
    }

    toSet(): Set<T> {
        let res = new Set<T>();
        while (this.hasNext()) {
            res.add(this.next());
        }
        return res;
    }

    toMap<K, V>(kf: (T) => K, vf: (T) => V): Map<K, V> {
        let res = new Map<K, V>();
        while (this.hasNext()) {
            let v = this.next();
            res.set(kf(v), vf(v));
        }
        return res;
    }

    first(): T {
        assert(this.hasNext());
        return this.next();
    }

    limit(v: number): Stream<T> {
        let self = this;
        return new class extends Stream<T> {
            hasNext(): boolean {
                return v > 0 && self.hasNext();
            }

            next(): T {
                v--;
                return self.next();
            }
        }
    }
}

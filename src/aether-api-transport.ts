import {aether, aether as gates} from "./aether-gates";
import {aether as aetherUtils} from "./aether-utils";
import RFuture = aetherUtils.utils.RFuture;
import Future = aetherUtils.utils.Future;
import Value = gates.gates.Value;
import GateI = gates.gates.GateI;
import FGate = gates.gates.FGate;
import DataIO = aetherUtils.utils.DataIO;
import Int8 = aetherUtils.utils.Int8;
import Int16 = aetherUtils.utils.Int16;
import Int32 = aetherUtils.utils.Int32;
import Int64 = aetherUtils.utils.Int64;

export namespace aether.transport {
    import MetaApi = aether.transport.meta.MetaApi;

    import EventRun = aetherUtils.utils.EventRun;
    import MetaType = transport.meta.MetaType;
    import ValueListener = aether.gates.ValueListener;
    import ValueListenerEmpty = aether.gates.ValueListenerEmpty;

    export interface SerializeContext {
        regValue(val: ValueListener): void;

        regRFuture<T>(val: RFuture<T>, meta: meta.MetaType<T>): Int16;

        regFuture(val: Future): Int16;

        getRFuture(reqId: Int16): RFuture<any>;

        getFuture(reqId: Int16): Future;
    }

    export interface SC<T> {

    }

    export class SCD<T> {
        data: Uint8Array;

        constructor(data: Uint8Array) {
            this.data = data;
        }
    }

    export namespace meta {

        export interface MetaType<T> {
            serialize(ctx: SerializeContext, out: DataIO, value: T): void;

            deserialize(ctx: SerializeContext, inData: DataIO): T;
        }

        export interface MetaArg {
            name: string;
            type: MetaType<any>;
        }

        export interface MetaMethod {
            get name: string;
            get returnType: MetaType<any>;
            get args: Array<MetaArg>;
        }

        export interface MetaApi<T> {
            get methods: Array<MetaMethod>;

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

            deserialize(ctx: SerializeContext, inData: DataIO): number {
                return undefined;
            }

            serialize(ctx: SerializeContext, out: DataIO, v: number): void {

            }
        }

        export function makeObj<T>(m: any): MetaType<T> {
            return null;
        }

        export function makeEnum<T>(m: T): MetaType<keyof T> {
            let keys = Object.keys(m) as Array<keyof T>;
            return new class implements meta.MetaType<keyof T> {
                deserialize(ctx: SerializeContext, inData: DataIO): keyof T {
                    return keys[inData.readByte()];
                }

                serialize(ctx: SerializeContext, out: DataIO, value: keyof T): void {
                    out.writeByte(keys.indexOf(value));
                }
            }
        }

        export function makeSet<T>(m: MetaType<T>): MetaType<Set<T>> {
            return new class implements meta.MetaType<Set<T>> {
                deserialize(ctx: SerializeContext, inData: DataIO): Set<T> {
                    let size = PackInt.deserialize(ctx, inData);
                    let res: Set<T> = new Set<T>();
                    for (let i = 0; i < size; i++) {
                        res.add(m.deserialize(ctx, inData));
                    }
                    return res;
                }

                serialize(ctx: SerializeContext, out: DataIO, value: Set<T>): void {
                    PackInt.serialize(ctx, out, value.size);
                    for (let e of value) {
                        m.serialize(ctx, out, e);
                    }
                }
            };
        }

        export function makeList<T>(m: MetaType<T>): MetaType<Array<T>> {
            return new class implements meta.MetaType<Array<T>> {
                deserialize(ctx: SerializeContext, inData: DataIO): Array<T> {
                    let size = PackInt.deserialize(ctx, inData);
                    let res: Array<T> = new Array<T>();
                    for (let i = 0; i < size; i++) {
                        res.push(m.deserialize(ctx, inData));
                    }
                    return res;
                }

                serialize(ctx: SerializeContext, out: DataIO, value: Array<T>): void {
                    PackInt.serialize(ctx, out, value.length);
                    for (let e of value) {
                        m.serialize(ctx, out, e);
                    }
                }
            };
        }

        export function makeSList<T>(m: MetaType<T>, size: number): MetaType<Array<T>> {
            return new class implements meta.MetaType<Array<T>> {
                deserialize(ctx: SerializeContext, inData: DataIO): Array<T> {
                    let res: Array<T> = new Array<T>();
                    for (let i = 0; i < size; i++) {
                        res.push(m.deserialize(ctx, inData));
                    }
                    return res;
                }

                serialize(ctx: SerializeContext, out: DataIO, value: Array<T>): void {
                    for (let e of value) {
                        m.serialize(ctx, out, e);
                    }
                }
            };
        }

        export function makeSBytes(size: number): MetaType<Uint8Array> {
            return new class implements meta.MetaType<Uint8Array> {
                deserialize(ctx: SerializeContext, inData: DataIO): Uint8Array {
                    return inData.read(size);
                }

                serialize(ctx: SerializeContext, out: DataIO, value: Uint8Array): void {
                    if (!value) {
                        throw new Error();
                    }
                    if (value.byteLength != size) {
                        throw new Error("Bad length for static array");
                    }
                    out.writeArray(value);
                }
            };
        }

        export function makeRFuture<T>(m: MetaType<T>): MetaType<RFuture<T>> {
            return new class implements meta.MetaType<RFuture<T>> {
                deserialize(ctx: SerializeContext, inData: DataIO): RFuture<T> {
                    let reqId = inData.readShort();
                    let val = m.deserialize(ctx, inData);
                    let f = ctx.getRFuture(reqId);
                    f.done(val);
                    return f;
                }

                serialize(ctx: SerializeContext, out: DataIO, value: RFuture<T>): void {
                    let reqId = ctx.regRFuture(value, m);
                    out.writeShort(reqId);
                }
            };
        }

        export function makeValue<T>(m: MetaType<T>): MetaType<Value<T>> {
            return new class implements meta.MetaType<Value<T>> {
                deserialize(ctx: SerializeContext, inData: DataIO): Value<T> {
                    return Value.of(m.deserialize(ctx, inData));
                }

                serialize(ctx: SerializeContext, out: DataIO, value: Value<T>): void {
                    ctx.regValue(value.listener);
                    m.serialize(ctx, out, value.data);
                }
            };
        }

        export function makeApi<T>(m: any): MetaApi<T> {
            return null;
        }

        export function makeSC<T>(): MetaType<SC<T>> {
            return null;
        }

        export function makeSCD<T>(): MetaType<SCD<T>> {
            return new class implements meta.MetaType<SCD<T>> {
                deserialize(ctx: SerializeContext, inData: DataIO): SCD<T> {
                    return new SCD<T>(MUint8Array.deserialize(ctx, inData));
                }

                serialize(ctx: SerializeContext, out: DataIO, value: SCD<T>): void {
                    MUint8Array.serialize(ctx, out, value.data);
                }
            };
        }

        export const MFuture: MetaType<Future> = new class implements MetaType<Future> {
            deserialize(ctx: SerializeContext, inData: DataIO): Future {
                return undefined;
            }

            serialize(ctx: SerializeContext, out: DataIO, value: Future): void {
            }
        }
        export const MDate: MetaType<Date> = new class implements MetaType<Date> {
            deserialize(ctx: SerializeContext, inData: DataIO): Date {
                let ms = MInt64.deserialize(ctx, inData);
                return new Date(Number(ms));
            }

            serialize(ctx: SerializeContext, out: DataIO, value: Date): void {
            }
        }
        export const MInt8: MetaType<Int8> = new class implements MetaType<Int8> {
            deserialize(ctx: SerializeContext, inData: DataIO): Int8 {
                return undefined;
            }

            serialize(ctx: SerializeContext, out: DataIO, value: Int8): void {
            }
        }
        export const MInt16: MetaType<number> = new class implements MetaType<number> {
            deserialize(ctx: SerializeContext, inData: DataIO): number {
                return undefined;
            }

            serialize(ctx: SerializeContext, out: DataIO, value: number): void {
            }
        }
        export const MInt32: MetaType<Int32> = new class implements MetaType<Int32> {
            deserialize(ctx: SerializeContext, inData: DataIO): Int32 {
                return inData.readInt();
            }

            serialize(ctx: SerializeContext, out: DataIO, value: Int32): void {
                out.writeInt(value);
            }
        }
        export const MInt64: MetaType<Int64> = new class implements MetaType<Int64> {
            deserialize(ctx: SerializeContext, inData: DataIO): Int64 {
                return inData.readLong();
            }

            serialize(ctx: SerializeContext, out: DataIO, value: Int64): void {
                out.writeLong(value);
            }
        }
        export const MRequestId = MInt16;
        export const MBoolean: MetaType<boolean> = new class implements MetaType<boolean> {
            deserialize(ctx: SerializeContext, inData: DataIO): boolean {
                return inData.readBoolean();
            }

            serialize(ctx: SerializeContext, out: DataIO, value: boolean): void {
                out.writeBoolean(value);
            }
        }
        export const MUint8Array: MetaType<Uint8Array> = new class implements meta.MetaType<Uint8Array> {
            deserialize(ctx: SerializeContext, inData: DataIO): Uint8Array {
                let size = PackInt.deserialize(ctx, inData);
                return inData.read(size);
            }

            serialize(ctx: SerializeContext, out: DataIO, value: Uint8Array): void {
                PackInt.serialize(ctx, out, value.byteLength);
                out.writeArray(value);
            }
        }
        export const MUint16Array: MetaType<Uint16Array> = new class implements meta.MetaType<Uint16Array> {
            deserialize(ctx: SerializeContext, inData: DataIO): Uint16Array {
                let size = PackInt.deserialize(ctx, inData);
                return new Uint16Array(inData.read(size * 2).buffer);
            }

            serialize(ctx: SerializeContext, out: DataIO, value: Uint16Array): void {
                PackInt.serialize(ctx, out, value.length);
                out.writeArray(new Uint8Array(value.buffer));
            }
        }
        export const MUint32Array: MetaType<Uint32Array> = new class implements meta.MetaType<Uint32Array> {
            deserialize(ctx: SerializeContext, inData: DataIO): Uint32Array {
                let size = PackInt.deserialize(ctx, inData);
                return new Uint32Array(inData.read(size * 4).buffer);
            }

            serialize(ctx: SerializeContext, out: DataIO, value: Uint32Array): void {
                PackInt.serialize(ctx, out, value.length);
                out.writeArray(new Uint8Array(value.buffer));
            }
        }
        export const MUint64Array: MetaType<BigUint64Array> = new class implements meta.MetaType<BigUint64Array> {
            deserialize(ctx: SerializeContext, inData: DataIO): BigUint64Array {
                let size = PackInt.deserialize(ctx, inData);
                return new BigUint64Array(inData.read(size * 8).buffer);
            }

            serialize(ctx: SerializeContext, out: DataIO, value: BigUint64Array): void {
                PackInt.serialize(ctx, out, value.length);
                out.writeArray(new Uint8Array(value.buffer));
            }
        }

        export const MString: MetaType<string> = new class MString implements meta.MetaType<string> {
            static readonly texe = new TextEncoder();
            static readonly tdec = new TextDecoder();

            deserialize(ctx: SerializeContext, inData: DataIO): string {
                return MString.tdec.decode(MUint8Array.deserialize(ctx, inData));
            }

            serialize(ctx: SerializeContext, out: DataIO, value: string): void {
                MUint8Array.serialize(ctx, out, MString.texe.encode(value));
            }
        }

    }

    class ApiStream extends FGate<Uint8Array, Uint8Array> {

    }

    class ResultUnit<T> {
        readonly future: RFuture<T> | Future;
        readonly meta: MetaType<T>;

        constructor(future: RFuture<T> | Future, meta: MetaType<T>) {
            this.future = future;
            this.meta = meta;
        }
    }

    export class ApiGate<LT, RT> extends FGate<Uint8Array, Uint8Array> implements SerializeContext {
        readonly lt: MetaApi<LT>;
        readonly rt: MetaApi<RT>;
        readonly localApi: LT;
        readonly remote: RT;
        private reqIdCounter: Int16;
        private toRemoteValues = ValueListenerEmpty;
        private toRemote = new DataIO();

        constructor(lt: MetaApi<LT>, rt: MetaApi<RT>, localApi: LT,
                    readonly onRequestData = new EventRun(),
                    readonly onClose = new EventRun(),
                    readonly streams = new Map<Int16, ApiStream>(),
                    readonly results = new Map<Int16, ResultUnit<any>>()
        ) {
            super(new class implements GateI<Uint8Array> {
                fGate: FGate<any, any>;

                isWritable(): boolean {
                    return true;
                }

                requestData(): void {
                    onRequestData.fire();
                    for (let s of streams.values()) {
                        s.inside.requestData();
                    }
                }

                send(val: Value<Uint8Array>): void {
                    let inData = new DataIO(val.data);
                    let ctx = this.fGate as unknown as SerializeContext;
                    while (inData.isReadable()) {
                        let cmdId = inData.readByte();
                        let reqId: Int16 = 0;
                        switch (cmdId) {
                            case 0://result
                                reqId = meta.MRequestId.deserialize(ctx, inData)
                                let unitRes = results.get(reqId);
                                unitRes.future.done(unitRes.meta.deserialize(ctx, inData));
                                break;
                            case 1://exception
                                reqId = meta.MRequestId.deserialize(ctx, inData)
                                let unitError = results.get(reqId);
                                unitError.future.error(unitError.meta.deserialize(ctx, inData));
                                break;
                        }
                    }
                }
            })
            this.lt = lt;
            this.rt = rt;
            this.localApi = localApi;
            let r = {};
            let self = this;
            for (let m of rt.methods) {
                r[m.name] = function () {
                    let out = self.toRemote;
                    for (let i = 0; i < m.args.length; i++) {
                        let a = arguments[i];
                        if (a == null || typeof a == 'undefined') {
                            throw new Error("Argument [" + m.args[i].name + "] is null");
                        }
                        m.args[i].type.serialize(self, out, a);
                    }
                }
            }
            this.remote = r as RT;
        }

        flush(): void {
            let b = this.toRemote.toArray().copy();
            this.toRemote.reset();
            this.inside.send(Value.ofFlush(b, this.toRemoteValues));
        }

        getFuture(reqId: Int16): Future {
            return this.results.get(reqId).future as Future;
        }

        getRFuture<T>(reqId: Int16): RFuture<T> {
            return this.results.get(reqId).future as RFuture<T>;
        }

        regFuture(val: Future): Int16 {
            let res = this.reqIdCounter++;
            this.results.set(res, new ResultUnit(val, meta.MFuture));
            return res;
        }

        regRFuture<T>(val: RFuture<T>, meta: MetaType<T>): Int16 {
            let res = this.reqIdCounter++;
            this.results.set(res, new ResultUnit(val, meta));
            return res;
        }

        regValue(val: ValueListener): void {
            if (val && val != ValueListenerEmpty) {
                let old = this.toRemoteValues;
                this.toRemoteValues = (o) => {
                    old(o);
                    val(o);
                };
            }
        }

    }

    export class WSGate extends FGate<Uint8Array, Uint8Array> {
        constructor(url: URL, private readonly ws: WebSocket = new WebSocket(url)) {
            super(new class implements GateI<Uint8Array> {
                fGate: FGate<any, any>;

                isWritable(): boolean {
                    return ws.readyState == WebSocket.OPEN;
                }

                requestData(): void {

                }

                send(val: Value<Uint8Array>): void {
                    ws.send(val.data);
                }
            });
            this.ws.onopen = e => {
                this.inside.requestData();
            };
        };
    }
}


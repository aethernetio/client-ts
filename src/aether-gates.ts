import {aether as aetherUtils} from "./aether-utils";
import {aether as aetherTran} from "./aether-api-transport";

export namespace aether.gates {
    import RFuture = aetherUtils.utils.RFuture;
    import MFuture = aetherUtils.utils.MFuture;
    import DataIO = aetherUtils.utils.DataIO;
    import DeserializerSizeStream = aetherUtils.utils.DeserializerSizeStream;
    import RemoteApi = aetherTran.transport.RemoteApi;

    export interface Value<T> {
        get priority(): number;

        get force(): boolean;

        get requestData(): boolean;

        get data(): T;

        get close(): boolean;

        abort(): void;

        drop(): void;

        get isData(): boolean;
    }

    export abstract class ValueMap<T> implements Value<T> {
        readonly parent: Value<any>;

        protected constructor(parent: Value<any>) {
            this.parent = parent;
        }

        get close(): boolean {
            return this.parent.close;
        }

        get isData(): boolean {
            return this.parent.isData;
        }

        abstract get data(): T ;

        get force(): boolean {
            return this.parent.force;
        }

        get priority(): number {
            return this.parent.priority;
        }

        get requestData(): boolean {
            return this.parent.requestData;
        }

        abort(): void {
            this.parent.abort();
        }

        drop(): void {
            this.parent.drop();
        }
    }

    export abstract class ValueA<T> implements Value<T> {
        get close(): boolean {
            return false;
        }

        get isData(): boolean {
            return false;
        }

        get data(): T {
            return null;
        }

        get force(): boolean {
            return false;
        }

        get priority(): number {
            return 0;
        }

        get requestData(): boolean {
            return false;
        }

        static of<T>(val: T): Value<T> {
            return new class extends ValueA<T> {
                get data(): T {
                    return val;
                }

                get isData(): boolean {
                    return true;
                }
            };
        }

        abort(): void {
        }

        drop(): void {
        }

    }

    export let ValueRequestData: Value<any> = new class extends aether.gates.ValueA<any> {
        get requestData(): boolean {
            return true;
        }
    };

    export interface GateI<T> {
        send(val: Value<T>): void;
    }

    export abstract class Gate<TRead, TWrite> implements GateI<TWrite> {
        public abstract get link(): Gate<TWrite, TRead>;

        public abstract set link(g: Gate<TWrite, TRead> | FGate<TRead, TWrite>);

        toApi<LT, RT>(lt: aetherTran.transport.meta.MetaApi<LT>, rt: aetherTran.transport.meta.MetaApi<RT>, localApi: LT): aetherTran.transport.ApiGate<LT, RT> {
            let res = new aetherTran.transport.ApiGate(lt, rt, localApi);
            res.outside.link = this as Gate<Uint8Array, Uint8Array>;
            return res;
        }

        toSubApi<RT>(remoteApi: RemoteApi<RT>, t: (api: RT, data: Value<TRead>) => void) {
            remoteApi.apiGate.onRequestData.add(() => this.send(ValueRequestData));
            this.link = new FGate(v => {
                remoteApi.run((a) => {
                    t(a, v);
                });
            });
        }

        toConsumerValue(f: (v: Value<TRead>) => void): Gate<TRead, TWrite> {
            this.link = new FGate<TRead, TWrite>(val => f(val));
            return this;
        }

        toConsumer(f: (v: TRead) => void): Gate<TRead, TWrite> {
            this.link = new FGate<TRead, TWrite>(val => {
                f(val.data);
                val.drop();
            });
            return this;
        }

        mapWrite<TWrite2>(f: (v: Value<TWrite2>) => Value<TWrite>): Gate<TRead, TWrite2> {
            return this.map<TRead, TWrite2>(v => f(v), v => v);
        }

        mapRead<TRead2>(f: (v: Value<TRead>) => Value<TRead2>): Gate<TRead2, TWrite> {
            return this.map<TRead2, TWrite>(v => v, v => f(v));
        }

        map<TRead2, TWrite2>(fRead: (v: Value<TWrite2>) => Value<TWrite>,
                             fWrite: (v: Value<TRead>) => Value<TRead2>): Gate<TRead2, TWrite2> {
            let gg = new Array<FGate<TWrite2, TRead2>>();
            let gIn = new FGate<TRead, TWrite>(val => gg[0].inside.send(fWrite(val)));
            this.link = gIn.outside;
            let gOut = new FGate<TWrite2, TRead2>(val => gIn.inside.send(fRead(val)));
            gg[0] = gOut;
            return gOut.outside;
        }

        mapWriteAsync<TWrite2>(f: (v: Value<TWrite2>) => RFuture<Value<TWrite>>): Gate<TRead, TWrite2> {
            return this.mapAsync<TRead, TWrite2>(v => f(v), v => RFuture.completed(v));
        }

        mapReadAsync<TRead2>(f: (v: Value<TRead>) => RFuture<Value<TRead2>>): Gate<TRead2, TWrite> {
            return this.mapAsync<TRead2, TWrite>(v => RFuture.completed(v), v => f(v));
        }

        mapAsync<TRead2, TWrite2>(fRead: (v: Value<TWrite2>) => RFuture<Value<TWrite>>,
                                  fWrite: (v: Value<TRead>) => RFuture<Value<TRead2>>): Gate<TRead2, TWrite2> {
            let gIn = new FGate<TRead, TWrite>(val => {
                let future = fWrite(val);
                if (future) {
                    future.to(v => {
                        gOut.inside.send(v)
                    });
                }
            });
            this.link = gIn.outside;
            let gOut = new FGate<TWrite2, TRead2>(val => {
                let future = fRead(val);
                if (future) {
                    future.to(v => gIn.inside.send(v))
                }
            });
            return gOut.outside;
        }

        accumPack(): Gate<Uint8Array, Uint8Array> {
            return this.accum(true);
        }

        accumUnPack(): Gate<Uint8Array, Uint8Array> {
            return this.accum(false);
        }

        abstract send(val: gates.Value<TWrite>): void;

        private accum(pack: boolean): Gate<Uint8Array, Uint8Array> {
            let gIn = new FGate<Uint8Array, Uint8Array>(val => {
                gOut.inside.send(new class extends ValueA<Uint8Array> {
                    get data(): Uint8Array {
                        let d = new DataIO();
                        d.writePackInt(val.data.byteLength);
                        d.writeArray(val.data);
                        return d.toArray();
                    }

                    get isData(): boolean {
                        return true;
                    }
                });
            });
            let size: number = 0;
            let buf: DataIO = new DataIO(200);
            let packIntDeser = new DeserializerSizeStream();
            let gOut = new FGate<Uint8Array, Uint8Array>(val => {
                let d = new DataIO(val.data);
                let dropCounter = 0;
                while (d.isReadable()) {
                    if (size == 0) {
                        if (packIntDeser.put(d)) {
                            size = packIntDeser.value;
                            packIntDeser.reset();
                        }
                    }
                    if (size > d.getSizeForRead()) {
                        size -= d.getSizeForRead();
                        buf.writeData(d);
                    } else if (size <= d.getSizeForRead()) {
                        buf.writeData(d, buf.getSizeForWrite());
                        size = 0;
                    }
                    let dd = buf.toArray();
                    dropCounter++;
                    buf.reset();
                    gIn.inside.send(new class implements Value<Uint8Array> {
                        get close(): boolean {
                            return val.close;
                        }

                        get data(): Uint8Array {
                            return dd;
                        }

                        get isData(): boolean {
                            return true;
                        }

                        get force(): boolean {
                            return val.force;
                        }

                        get priority(): number {
                            return val.priority;
                        }

                        get requestData(): boolean {
                            return val.requestData;
                        }

                        abort(): void {
                            throw new Error();
                        }

                        drop(): void {
                            if (dropCounter-- == 0) {
                                val.drop();
                            }
                        }
                    });
                }
            });
            if (pack) {
                this.link = gIn.outside  as Gate<TWrite,TRead>;
                return gOut.outside;
            } else {
                this.link = gOut.outside as Gate<TWrite,TRead>;
                return gIn.outside;
            }
        }
    }

    export function insertValueToBuffer(q: Array<Value<any>>, val: Value<any>): void {
        let p = val.priority;
        for (let i = q.length - 1; i >= 0; i--) {
            if (q[i].priority >= p) {
                q.splice(i + 1, 0, val);
                return;
            }
        }
        q.push(val);
    }

    export class BufferGate<TUp, TDown> {
        readonly up: Gate<TUp, TDown>;
        readonly down: Gate<TDown, TUp>;
        private fUp: FGate<TUp, TDown>;
        private fDown: FGate<TDown, TUp>;
        private bufferUp: Array<Value<TUp>>;
        private bufferDown: Array<Value<TDown>>;

        constructor() {
            let self = this;
            this.fUp = new FGate<TUp, TDown>(val => {
                insertValueToBuffer(self.bufferUp, val);
                self.flushUp();
            });
            this.fDown = new FGate<TDown, TUp>(val => {
                insertValueToBuffer(self.bufferDown, val);
                self.flushDown();
            });
            this.up = this.fDown.outside;
            this.down = this.fUp.outside;
        }

        private flushDown(): void {
            while (this.fDown.outside.link && this.bufferDown.length != 0) {
                this.fDown.inside.send(this.bufferUp.shift());
            }
        }

        private flushUp(): void {
            while (this.fUp.outside.link && this.bufferUp.length != 0) {
                this.fUp.inside.send(this.bufferDown.shift());
            }
        }
    }

    export class FGate<TRead, TWrite> {
        readonly outside: Gate<TWrite, TRead>;
        readonly inside: GateI<TWrite>;
        private readonly acceptor: (val: Value<TRead>, fg?: FGate<TRead, TWrite>) => void;
        private side: Gate<TRead, TWrite>;

        constructor(acceptor: (val: Value<TRead>, fg?: FGate<TRead, TWrite>) => void) {
            this.acceptor = acceptor;
            let self = this;
            this.inside = new class implements GateI<TWrite> {
                send(val: Value<TWrite>): void {
                    if (self.side) {
                        self.side.send(val);
                    } else {
                        throw new Error("stream is not writable");
                    }
                }
            };
            this.outside = new class extends Gate<TWrite, TRead> {
                get link(): Gate<TRead, TWrite> {
                    return self.side;
                }

                set link(g: Gate<TRead, TWrite> | FGate<TWrite, TRead>) {
                    if (g instanceof FGate) {
                        self.side = g.outside;
                    } else {
                        self.side = g;
                    }
                }

                send(val: gates.Value<TRead>): void {
                    acceptor(val);
                }
            }
        }
    }

    export class KeyVal<K, V> {
        key: K;
        val: V;

        constructor(key: K, val: V) {
            this.key = key;
            this.val = val;
        }
    }

    export class MapGate<K, V> {
        private cache: Map<K, MFuture<V>>;
        private readonly outputs: Array<FGate<V, K>>;
        private readonly requests: Array<FGate<K, KeyVal<K, V>>>;

        constructor(private readonly keyGetter: (v: V) => K) {
        }

        addOutput(g?: Gate<V, K>): Gate<K, V> {
            let self = this;
            let firstRequestData = true;
            let gg = new FGate<V, K>((val, fGate) => {
                let d = val.data;
                if (d) {
                    self.setVal(val.data);
                }
                val.drop();
                if (val.requestData) {
                    if (firstRequestData) {
                        firstRequestData = false;
                        for (let e of self.cache.entries()) {
                            if (e[1].isNotDone()) {
                                fGate.inside.send(ValueA.of(e[0]));
                            }
                        }
                    }
                }
            });
            if (g) {
                g.link = gg.outside;
            }
            this.outputs.push(gg);
            return gg.outside;
        }

        addRequest(g?: Gate<K, KeyVal<K, V>>): Gate<KeyVal<K, V>, K> {
            let self = this;
            let firstRequestData = true;
            let gg = new FGate<K, KeyVal<K, V>>((key, fGate) => {
                self.get(key.data).to((v: V) => {
                    let kv = new KeyVal(key.data, v);
                    fGate.inside.send(ValueA.of(kv));
                    if (key.requestData) {
                        if (firstRequestData) {
                            firstRequestData = false;
                            for (let e of self.cache.entries()) {
                                if (e[1].isDone()) {
                                    let kv = new KeyVal(e[0], e[1].value);
                                    fGate.inside.send(ValueA.of(kv));
                                }
                            }
                        }
                    }
                });
            })
            if (g) g.link = gg;
            this.requests.push(gg);
            return gg.outside;
        }

        get(key: K): MFuture<V> {
            let f = this.cache.get(key);
            if (f === undefined) {
                f = new MFuture();
                this.outputs.forEach(g => g.inside.send(ValueA.of(key)));
                f.to(v => {
                    this.requests.forEach(g => {
                        g.inside.send(new class extends ValueA<KeyVal<K, V>> {
                            get data(): KeyVal<K, V> {
                                return new KeyVal(key, v);
                            }
                        });
                    });
                });
                this.cache.set(key, f);
            }
            return f;
        }

        setVal(val: V) {
            this.set(this.keyGetter(val), val);
        }

        set(key: K, val: V) {
            let f = this.cache.get(key);
            if (f === undefined) {
                f = new MFuture();
                this.cache.set(key, f);
            }
            f.set(val);
        }
    }
}

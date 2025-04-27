import {aether as aetherUtils} from "./aether-utils";
import {aether as aetherTran} from "./aether-api-transport";

export namespace aether {
    export namespace gates {
        import RFuture = aetherUtils.utils.RFuture;
        import DataIO = aetherUtils.utils.DataIO;
        import DeserializerSizeStream = aetherUtils.utils.DeserializerSizeStream;
        export type ValueListener = (owner: any) => void;
        export let ValueListenerEmpty:ValueListener=(o)=>{};
        export class Value<T> {
            readonly data: T;
            readonly force: boolean;
            readonly listener: ValueListener;

            constructor(data: T, force: boolean, listener: ValueListener=ValueListenerEmpty) {
                this.data = data;
                this.force = force;
                this.listener = listener;
            }

            static of<E>(data: E,listener:ValueListener=ValueListenerEmpty): Value<E> {
                return new Value<E>(data, false, listener);
            }
            static ofFlush<E>(data: E, listener:ValueListener=ValueListenerEmpty): Value<E> {
                return new Value<E>(data, true, listener);
            }

            map<E>(newVal: E): Value<E> {
                return new Value(newVal, this.force, this.listener);
            }

            link(l: ValueListener): Value<T> {
                return new Value<T>(this.data, this.force, (o) => {
                    this.listener(o);
                    l(o);
                });
            }
        }

        export interface GateI<T> {
            fGate: FGate<any, any>;

            send(val: Value<T>): void;

            requestData(): void;

            isWritable(): boolean;
        }

        export abstract class Gate<TRead, TWrite> implements GateI<TWrite> {
            fGate: aether.gates.FGate<any, any>;

            public abstract get link(): Gate<TRead, TWrite>;

            public abstract set link(g: Gate<TRead, TWrite>);
            toApi<LT, RT>(lt: aetherTran.transport.meta.MetaApi<LT>, rt: aetherTran.transport.meta.MetaApi<RT>, localApi: LT): aetherTran.transport.ApiGate<LT, RT>{
                let res=new  aetherTran.transport.ApiGate(lt,rt,localApi);
                res.outside.link=this;
                return res;
            }
            toConsumerValue(f: (v: Value<TWrite>) => void): Gate<TRead, TWrite> {
                let g = new FGate<TWrite, TRead>(new class implements gates.GateI<TWrite> {
                    fGate: aether.gates.FGate<any, any>;

                    isWritable(): boolean {
                        return true;
                    }

                    requestData(): void {
                    }

                    send(val: Value<TWrite>): void {
                        f(val);
                    }
                });
                this.link = g.outside;
                return this;
            }

            mapWrite<TWrite2>(f: (v: Value<TWrite>) => Value<TWrite2>): Gate<TWrite2, TRead> {
                let gIn = new FGate<TWrite, TRead>(new class implements gates.GateI<TWrite> {
                    fGate: aether.gates.FGate<any, any>;

                    isWritable(): boolean {
                        return gOut.inside.isWritable();
                    }

                    requestData(): void {
                        gOut.inside.requestData();
                    }

                    send(val: Value<TWrite>): void {
                        gOut.inside.send(f(val));
                    }
                });
                this.link = gIn.outside;
                let gOut = new FGate<TRead, TWrite2>(new class implements gates.GateI<TRead> {
                    fGate: aether.gates.FGate<any, any>;

                    isWritable(): boolean {
                        return gIn.inside.isWritable();
                    }

                    requestData(): void {
                        gIn.inside.requestData();
                    }

                    send(val: Value<TRead>): void {
                        gIn.inside.send(val);
                    }
                });
                return gOut.outside;
            }

            mapRead<TRead2>(f: (v: Value<TRead2>) => Value<TRead>): Gate<TWrite, TRead2> {
                let gIn = new FGate<TWrite, TRead>(new class implements gates.GateI<TWrite> {
                    fGate: aether.gates.FGate<any, any>;

                    isWritable(): boolean {
                        return gOut.inside.isWritable();
                    }

                    requestData(): void {
                        gOut.inside.requestData();
                    }

                    send(val: Value<TWrite>): void {
                        gOut.inside.send(val);
                    }
                });
                this.link = gIn.outside;
                let gOut = new FGate<TRead2, TWrite>(new class implements gates.GateI<TRead2> {
                    fGate: aether.gates.FGate<any, any>;

                    isWritable(): boolean {
                        return true;
                    }

                    requestData(): void {
                    }

                    send(val: Value<TRead2>): void {
                        gIn.inside.send(f(val));
                    }
                });
                return gOut.outside;
            }

            map<TRead2, TWrite2>(fRead: (v: Value<TRead2>) => Value<TRead>,
                                 fWrite: (v: Value<TWrite>) => Value<TWrite2>): Gate<TWrite2, TRead2> {
                let gIn = new FGate<TWrite, TRead>(new class implements gates.GateI<TWrite> {
                    fGate: aether.gates.FGate<any, any>;

                    isWritable(): boolean {
                        return gOut.inside.isWritable();
                    }

                    requestData(): void {
                        gOut.inside.requestData();
                    }

                    send(val: Value<TWrite>): void {
                        gOut.inside.send(fWrite(val));
                    }
                });
                this.link = gIn.outside;
                let gOut = new FGate<TRead2, TWrite2>(new class implements gates.GateI<TRead2> {
                    fGate: aether.gates.FGate<any, any>;

                    isWritable(): boolean {
                        return true;
                    }

                    requestData(): void {
                    }

                    send(val: Value<TRead2>): void {
                        gIn.inside.send(fRead(val));
                    }
                });
                return gOut.outside;
            }

            mapWriteAsync<TWrite2>(f: (v: Value<TWrite>) => RFuture<Value<TWrite2>>): Gate<TWrite2, TRead> {
                let gIn = new FGate<TWrite, TRead>(new class implements gates.GateI<TWrite> {
                    fGate: aether.gates.FGate<any, any>;

                    isWritable(): boolean {
                        return gOut.inside.isWritable();
                    }

                    requestData(): void {
                        gOut.inside.requestData();
                    }

                    send(val: Value<TWrite>): void {
                        let future = f(val);
                        if (future) {
                            future.to(v => gOut.inside.send(v))
                        }
                    }
                });
                this.link = gIn.outside;
                let gOut = new FGate<TRead, TWrite2>(new class implements gates.GateI<TRead> {
                    fGate: aether.gates.FGate<any, any>;

                    isWritable(): boolean {
                        return gIn.inside.isWritable();
                    }

                    requestData(): void {
                        gIn.inside.requestData();
                    }

                    send(val: Value<TRead>): void {
                        gIn.inside.send(val);
                    }
                });
                return gOut.outside;
            }

            mapReadAsync<TRead2>(f: (v: Value<TRead2>) => RFuture<Value<TRead>>): Gate<TWrite, TRead2> {
                let gIn = new FGate<TWrite, TRead>(new class implements gates.GateI<TWrite> {
                    fGate: aether.gates.FGate<any, any>;

                    isWritable(): boolean {
                        return gOut.inside.isWritable();
                    }

                    requestData(): void {
                        gOut.inside.requestData();
                    }

                    send(val: Value<TWrite>): void {
                        gOut.inside.send(val);
                    }
                });
                this.link = gIn.outside;
                let gOut = new FGate<TRead2, TWrite>(new class implements gates.GateI<TRead2> {
                    fGate: aether.gates.FGate<any, any>;

                    isWritable(): boolean {
                        return true;
                    }

                    requestData(): void {
                    }

                    send(val: Value<TRead2>): void {
                        let future = f(val);
                        if (future) {
                            future.to(v => gIn.inside.send(v))
                        }
                    }
                });
                return gOut.outside;
            }

            mapAsync<TRead2, TWrite2>(fRead: (v: Value<TRead2>) => RFuture<Value<TRead>>,
                                      fWrite: (v: Value<TWrite>) => RFuture<Value<TWrite2>>): Gate<TWrite2, TRead2> {
                let gIn = new FGate<TWrite, TRead>(new class implements gates.GateI<TWrite> {
                    fGate: aether.gates.FGate<any, any>;

                    isWritable(): boolean {
                        return gOut.inside.isWritable();
                    }

                    requestData(): void {
                        gOut.inside.requestData();
                    }

                    send(val: Value<TWrite>): void {
                        let future = fWrite(val);
                        if (future) {
                            future.to(v => gOut.inside.send(v));
                        }
                    }
                });
                this.link = gIn.outside;
                let gOut = new FGate<TRead2, TWrite2>(new class implements gates.GateI<TRead2> {
                    fGate: aether.gates.FGate<any, any>;

                    isWritable(): boolean {
                        return true;
                    }

                    requestData(): void {
                    }

                    send(val: Value<TRead2>): void {
                        let future = fRead(val);
                        if (future) {
                            future.to(v => gIn.inside.send(v))
                        }
                    }
                });
                return gOut.outside;
            }

            private accum(pack:boolean): Gate<Uint8Array, Uint8Array> {
                let gIn = new FGate<Uint8Array, Uint8Array>(new class implements gates.GateI<Uint8Array> {
                    fGate: aether.gates.FGate<any, any>;

                    isWritable(): boolean {
                        return gOut.inside.isWritable();
                    }

                    requestData(): void {
                        gOut.inside.requestData();
                    }

                    send(val: Value<Uint8Array>): void {
                        let d = new DataIO();
                        d.writePackInt(val.data.byteLength);
                        d.writeArray(val.data);
                        gOut.inside.send(Value.of(d.toArray()));
                    }
                });
                let gOut = new FGate<Uint8Array, Uint8Array>(new class implements gates.GateI<Uint8Array> {
                    fGate: aether.gates.FGate<any, any>;
                    private size: number = 0;
                    private readonly buf: DataIO = new DataIO(200);
                    private packIntDeser = new DeserializerSizeStream();

                    isWritable(): boolean {
                        return true;
                    }

                    requestData(): void {
                    }

                    send(val: Value<Uint8Array>): void {
                        let d = new DataIO(val.data);
                        while (d.isReadable()) {
                            if (this.size == 0) {
                                if (this.packIntDeser.put(d)) {
                                    this.size = this.packIntDeser.value;
                                    this.packIntDeser.reset();
                                }
                            }
                            if (this.size > d.getSizeForRead()) {
                                this.size -= d.getSizeForRead();
                                this.buf.writeData(d);
                            } else if (this.size <= d.getSizeForRead()) {
                                this.buf.writeData(d, this.buf.getSizeForWrite());
                                this.size=0;
                            }
                            let vv=val.map(this.buf.toArray());
                            this.buf.reset();
                            gIn.inside.send(vv);
                        }
                    }
                });
                if(pack){
                    this.link = gIn.outside;
                    return gOut.outside;
                }else{
                    this.link = gOut.outside;
                    return gIn.outside;
                }
            }
            accumPack(): Gate<Uint8Array, Uint8Array>{
                return this.accum(true);
            }
            accumUnPack(): Gate<Uint8Array, Uint8Array>{
                return this.accum(false);
            }
            abstract isWritable(): boolean;

            abstract requestData(): void;

            abstract send(val: gates.Value<TWrite>): void;
        }
        export class BufferGate<TUp,TDown>{
            private fUp:FGate<TUp,TDown>;
            private fDown:FGate<TDown,TUp>;
            private bufferUp:Array<Value<TUp>>;
            private bufferDown:Array<Value<TDown>>;
            readonly up:Gate<TUp,TDown>;
            readonly down:Gate<TDown,TUp>;
            private flushDown():void{
                while (this.fDown.inside.isWritable()&&this.bufferDown.length!=0){
                    this.fDown.inside.send(this.bufferDown.shift());
                }
            }
            private flushUp():void{
                while (this.fUp.inside.isWritable()&&this.bufferUp.length!=0){
                    this.fUp.inside.send(this.bufferUp.shift());
                }
            }
            constructor() {
                let self=this;
                this.fUp=new FGate<TUp,TDown>(new class implements GateI<TUp> {
                    fGate: FGate<any, any>;

                    isWritable(): boolean {
                        return true;
                    }

                    requestData(): void {
                        self.flushDown();
                    }

                    send(val: Value<TUp>): void {
                        self.bufferUp.push(val);
                        self.flushUp();
                    }
                });
                this.fDown=new FGate<TDown,TUp>(new class implements GateI<TDown> {
                    fGate: FGate<any, any>;

                    isWritable(): boolean {
                        return true;
                    }

                    requestData(): void {
                        self.flushUp();
                    }

                    send(val: Value<TDown>): void {
                        self.bufferDown.push(val);
                        self.flushDown();
                    }
                });
            }
        }
        export class FGate<TRead, TWrite> {
            readonly outside: Gate<TWrite, TRead>;
            readonly inside: GateI<TWrite>;
            private readonly acceptor: GateI<TRead>;
            private side: Gate<TWrite, TRead>;

            constructor(acceptor: gates.GateI<TRead>) {
                this.acceptor = acceptor;
                let self = this;
                this.inside = new class implements aether.gates.GateI<TWrite> {
                    fGate: aether.gates.FGate<any, any>;

                    isWritable(): boolean {
                        if (self.side) {
                            return self.side.isWritable();
                        }
                        return false;
                    }

                    requestData(): void {
                        if (self.side) {
                            return self.side.requestData();
                        }
                    }

                    send(val: aether.gates.Value<TWrite>): void {
                        if (self.side) {
                            self.side.send(val);
                        } else {
                            throw new Error("stream is not writable");
                        }
                    }
                };
                acceptor.fGate = this;
                this.outside = new class extends Gate<TWrite, TRead> {
                    get link(): Gate<TWrite, TRead> {
                        return self.side;
                    }

                    set link(g: Gate<TWrite, TRead>) {
                        self.side = g;
                        g.requestData();
                        self.acceptor.requestData();
                    }

                    isWritable(): boolean {
                        return acceptor.isWritable();
                    }

                    requestData(): void {
                    }

                    send(val: gates.Value<TRead>): void {
                        acceptor.send(val);
                    }
                }
            }
        }

    }
}

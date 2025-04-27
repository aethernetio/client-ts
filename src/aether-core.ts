import {aether as aetherGates} from "./aether-gates";
import {aether, aether as aetherApi} from "./aether-api";
import {aether as aUtils} from "./aether-utils";
import {aether as aetherTran} from "./aether-api-transport";
import {sodium} from "./aether-crypt";
import Cloud = aetherApi.common.Cloud;
import Key = aetherApi.crypt.Key;
import DataIO = aUtils.utils.DataIO;
import MUint8Array = aetherTran.transport.meta.MUint8Array;
import MetaType = aetherTran.transport.meta.MetaType;
import SerializeContext = aetherTran.transport.SerializeContext;
import Gate = aetherGates.gates.Gate;
import MetaApi = aetherTran.transport.MetaApi;
import ApiGate = aetherTran.transport.ApiGate;



export namespace aether {

    import base64ToArrayBuffer = aUtils.utils.base64ToArrayBuffer;

    interface CryptoProvider {
        encode(data: Uint8Array): Uint8Array;

        decode(data: Uint8Array): Uint8Array;
    }

    export enum AetherCodec {
        BINARY,
        WEBSOCKET
    }

    export interface ApiNode<LT, RT, C> {

    }

    export interface CryptoNode {

    }
    export interface CryptoProvider {
        encode(data:Uint8Array):Uint8Array;
        decode(data:Uint8Array):Uint8Array;
    }

    export enum CryptoLib {SODIUM, HYDROGEN}

    export class UUID {
        value: Uint8Array;

        constructor(value: Uint8Array) {
            this.value = value;
        }

        equals(o: UUID): boolean {
            return this.value.equals(o.value);
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

    export const MUUID: MetaType<UUID> = new class implements MetaType<UUID> {
        deserialize(ctx: SerializeContext, inData: DataIO): UUID {
            return new UUID(MUint8Array.deserialize(ctx, inData));
        }

        serialize(ctx: SerializeContext, out: DataIO, value: UUID): void {
            MUint8Array.serialize(ctx, out, value.value);
        }
    }
    export const MAetherCodec = aetherTran.transport.meta.makeEnum(AetherCodec);
    export const MCryptoLib = aetherTran.transport.meta.makeEnum(CryptoLib);

    export const UNS_ERROR = "Unsupported operation exception";

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

    export interface AetherStore {
        getUid(): UUID;

        setUid(uid: UUID): void;

        getCloud(uid: UUID): Cloud;
        setCloud(uid: UUID,Cloud):void;

        getMasterKey(): Key;
    }
    import Future=aUtils.utils.Future;
    import AuthorizedApi = aetherApi.clientServerApi.serverApi.AuthorizedApi;
    import RFuture = aUtils.utils.RFuture;
    import WSGate = aetherTran.transport.WSGate;
    import Gate=aetherGates.gates.Gate;
    import BufferGate=aetherGates.gates.BufferGate;
    import ClientApiSafe = aether.clientServerApi.clientApi.ClientApiSafe;
    import ClientApiSafe_META = aetherApi.clientServerApi.clientApi.ClientApiSafe_META;
    import AuthorizedApi_META = aetherApi.clientServerApi.serverApi.AuthorizedApi_META;
    import Value = aetherGates.gates.Value;
    abstract class Connection{
        ws:WSGate;
        protected constructor(url:URL) {
            this.ws = new WSGate(url);
            this.onConnect(this.ws.outside.accumUnPack());
        }
        abstract onConnect(g:Gate<Uint8Array,Uint8Array>):void;
    }
    class ConnectionWork extends Connection {
        buf=new BufferGate();
        auth:ApiGate<ClientApiSafe,AuthorizedApi>;
        constructor(url: URL) {
            super(url);
            this.auth=this.buf.down.toApi<ClientApiSafe,AuthorizedApi>(ClientApiSafe_META,AuthorizedApi_META,new class implements aether.clientServerApi.clientApi.ClientApiSafe {
                changeAlias(alias: aether.UUID): void {
                }

                changeParent(uid: aether.UUID): void {
                }

                newChild(uid: aether.UUID): void {
                }

                sendCloud(uid: aether.UUID, cloud: aether.common.Cloud): void {
                }

                sendMessage(uid: aether.UUID, data: Value<Uint8Array>): void {
                }

                sendServerDescriptor(v: aetherApi.common.ServerDescriptor): void {
                }
            });
        }

        getAetherAuthApi():AuthorizedApi{
            return this.auth.remote;
        }
        onConnect(g: Gate<Uint8Array, Uint8Array>) {
            this.buf.down.link=g;
        }
    }
    class ConnectionReg{

    }
    type ServerId=utils.Int16;
    export class AetherCloudClient {
        readonly store:AetherStore;
        private readonly connectionsWork: Map<ServerId,RFuture<ConnectionWork>>;
        private readonly connectionsWork: Map<UUID,RFuture<Cloud>>;
        private register():Future{
            return null;
        }
        getCloud(uid:UUID):RFuture<Cloud>{

        }
        getConnectionWork():RFuture<ConnectionWork>{
            if(this.connectionsWork.size==0){
                new ConnectionWork();
            }
            return RFuture.any<ConnectionWork>(this.connectionsWork.values());
        }
        getAetherAuthApi():RFuture<AuthorizedApi>{
            return this.getConnectionWork().map(c=>c.getAetherAuthApi());
        }
        connect():Future{
            return Future.of(sodium.sodium.ready).mapComposite(()=>{
                if(this.store.getUid()){//is registered

                }else{
                    return this.register()
                }
            });
        }
    }


}
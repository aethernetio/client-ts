import {aether as aetherGates} from "./aether-gates";
import {aether as aetherApi} from "./aether-api";
import {aether as aUtils} from "./aether-utils";
import {aether as aetherTran} from "./aether-api-transport";
import {sodium} from "./aether-crypt";
import Cloud = aetherApi.common.Cloud;
import Key = aetherApi.crypt.Key;
import DataIO = aUtils.utils.DataIO;
import MUint8Array = aetherTran.transport.meta.MUint8Array;
import MetaType = aetherTran.transport.meta.MetaType;
import SerializeContext = aetherTran.transport.SerializeContext;
import ApiGate = aetherTran.transport.ApiGate;
import RemoteApi = aetherTran.transport.RemoteApi;
import ValueMap = aetherGates.gates.ValueMap;
import RSetSrc = aUtils.utils.RSetSrc;


export namespace aether {

    import Future = aUtils.utils.Future;
    import AuthorizedApi = aetherApi.clientServerApi.serverApi.AuthorizedApi;
    import WSGate = aetherTran.transport.WSGate;
    import Gate = aetherGates.gates.Gate;
    import BufferGate = aetherGates.gates.BufferGate;
    import ClientApiSafe = aetherApi.clientServerApi.clientApi.ClientApiSafe;
    import ClientApiSafe_META = aetherApi.clientServerApi.clientApi.ClientApiSafe_META;
    import AuthorizedApi_META = aetherApi.clientServerApi.serverApi.AuthorizedApi_META;
    import Value = aetherGates.gates.Value;
    import MapGate = aetherGates.gates.MapGate;
    import UUIDAndCloud = aetherApi.common.UUIDAndCloud;
    import MFuture = aUtils.utils.MFuture;
    import Int16 = aUtils.utils.Int16;
    import ServerDescriptor = aetherApi.common.ServerDescriptor;
    import Int64 = aUtils.utils.Int64;

    export enum AetherCodec {
        BINARY,
        WEBSOCKET
    }

    export interface ApiNode<LT, RT, C> {

    }

    export interface CryptoNode {

    }

    export interface CryptoProvider {
        encode(data: Uint8Array): Uint8Array;

        decode(data: Uint8Array): Uint8Array;
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

    export class AccessGroup extends RSetSrc<UUID> {
        id: Int64;
        owner: UUID;
    }

    export interface AetherStore {
        parent: UUID;
        uid: UUID;
        clouds: Map<UUID, Cloud>;
        servers: Map<ServerId, ServerDescriptor>;
        accessGroups: Map<Int64, AccessGroup>;
        masterKey: Key;
    }

    export class AetherStoreInMemory implements AetherStore {
        accessGroups = new Map<Int64, aether.AccessGroup>;
        clouds = new Map<UUID, Cloud>;
        masterKey: Key;
        parent: UUID;
        servers = new Map<ServerId, ServerDescriptor>;
        uid: UUID;

    }

    abstract class Connection {
        ws: WSGate;

        protected constructor(client: AetherCloudClient, url: URL) {
            this.ws = new WSGate(url);
            this.onConnect(this.ws.outside.accumUnPack());
        }

        abstract onConnect(g: Gate<Uint8Array, Uint8Array>): void;
    }

    class ConnectionWork extends Connection {
        buf = new BufferGate();
        auth: ApiGate<ClientApiSafe, AuthorizedApi>;

        constructor(public readonly serverId: ServerId, client: AetherCloudClient, url: URL) {
            super(client, url);
            this.auth = this.buf.down.toApi<ClientApiSafe, AuthorizedApi>(ClientApiSafe_META, AuthorizedApi_META,
                new class implements ClientApiSafe {
                    changeAlias(alias: aether.UUID): void {
                    }

                    changeParent(uid: aether.UUID): void {
                        client.store.parent = uid;
                    }

                    newChild(uid: aether.UUID): void {
                    }

                    sendCloud(uid: aether.UUID, cloud: Cloud): void {
                    }

                    sendMessage(uid: aether.UUID, data: Value<Uint8Array>): void {
                    }

                    sendServerDescriptor(v: aetherApi.common.ServerDescriptor): void {
                    }
                });
        }

        getAetherAuthApi(): RemoteApi<AuthorizedApi> {
            return this.auth.remote;
        }

        onConnect(g: Gate<Uint8Array, Uint8Array>) {
            this.buf.down.link = g;
        }
    }

    class ConnectionReg extends Connection {

        constructor(client: aether.AetherCloudClient, url: URL) {
            super(client, url);
        }

        onConnect(g: Gate<Uint8Array, Uint8Array>): void {
        }
    }

    type ServerId = Int16;

    export class AetherCloudClient {
        private readonly connectionsWork: MapGate<ServerId, ConnectionWork> = new MapGate(cw => cw.serverId);
        private readonly clouds = new MapGate<UUID, UUIDAndCloud>((c: UUIDAndCloud) => c.uid as UUID);
        private readonly servers = new MapGate<Int16, ServerDescriptor>(c => c.id);

        constructor(public readonly store: AetherStore) {
            this.clouds.addRequest().toConsumer(v => {
                this.store.clouds.set(v.key, v.val.cloud);
            });
            this.servers.addRequest().toConsumer(v => {
                this.store.servers.set(v.key, v.val);
            });
            this.getAetherAuthApi().to(r => {
                this.clouds.addOutput().toSubApi(r, (api, d) => {
                    api.resolverClouds(new class extends ValueMap<Array<UUID>> {
                        constructor() {
                            super(d);
                        }

                        get data(): Array<UUID> {
                            return [d.data];
                        }
                    });
                });
                this.servers.addOutput().toSubApi(r, (api, d) => {
                    api.resolverServers(new class extends ValueMap<Uint16Array> {
                        constructor() {
                            super(d);
                        }

                        get data(): Uint16Array {
                            let ar = new Uint16Array(1);
                            ar[0] = d.data;
                            return ar;
                        }
                    });
                });
            });
        }

        getCloud(uid: UUID): MFuture<Cloud> {
            return this.clouds.get(uid).map(c => c.cloud);
        }

        getUid(): UUID {
            return this.store.uid;
        }

        getConnectionWork(serverId?: Int16): MFuture<ConnectionWork> {
            if (serverId) {
                return this.connectionsWork.get(serverId);
            }
            return this.getCloud(this.getUid()).mapComposite(c => {
                let serverId2: Int16 = c.data[0];
                return this.getConnectionWork(serverId2);
            });
        }

        getAetherAuthApi(): MFuture<RemoteApi<AuthorizedApi>> {
            return this.getConnectionWork().map(c => c.getAetherAuthApi());
        }

        connect(): Future {
            return Future.of(sodium.sodium.ready).mapComposite(() => {
                if (this.store.uid) {//is registered
                    return this.getConnectionWork().toRFuture().toFuture()
                } else {
                    return this.register()
                }
            });
        }

        private register(): Future {
            return null;
        }
    }


}
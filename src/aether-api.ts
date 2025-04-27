import {aether as aetherCore} from "./aether-core";
import {aether as aetherUtils} from "./aether-utils";
import {aether as aetherTrans} from "./aether-api-transport";
import {aether as aetherGates} from "./aether-gates";
import Meta = aetherTrans.transport.meta;
import Int8 = aetherUtils.utils.Int8;
import Int16 = aetherUtils.utils.Int16;
import Int64 = aetherUtils.utils.Int64;
import SC = aetherTrans.transport.SC;
import SCD = aetherTrans.transport.SCD;
import Value = aetherGates.gates.Value;
import Gate = aetherGates.gates.Gate;
import RFuture = aetherUtils.utils.RFuture;
import Future = aetherUtils.utils.Future;
import makeObj = Meta.makeObj;
import makeApi = Meta.makeApi;
import makeList = Meta.makeList;
import makeSet = Meta.makeSet;
import makeSBytes = Meta.makeSBytes;
import makeValue = Meta.makeValue;
import makeSC = Meta.makeSC;
import makeSCD = Meta.makeSCD;
import makeRFuture = Meta.makeRFuture;
import MBoolean = Meta.MBoolean;
import MDate = Meta.MDate;
import MInt8 = Meta.MInt8;
import MInt16 = Meta.MInt16;
import MInt64 = Meta.MInt64;
import MFuture = Meta.MFuture;
import MUint8Array = Meta.MUint8Array;
import MUint16Array = Meta.MUint16Array;

export namespace aether {
    export namespace common {

        export class Cloud {
            data: Uint16Array;
        }

        export let Cloud_META = makeObj<Cloud>({f: [{n: "data", t: MUint16Array}]});

        export abstract class IPAddress {
        }

        export let IPAddress_META = makeObj<IPAddress>({c: {"0": iPAddress.V4_META, "1": iPAddress.V6_META}});

        export class CoderAndPort {
            codec: AetherCodec;
            port: Int16;
        }

        export let CoderAndPort_META = makeObj<CoderAndPort>({
            f: [{n: "codec", t: MAetherCodec}, {
                n: "port",
                t: MInt16
            }]
        });

        export class IPAddressAndPorts {
            address: IPAddress;
            coderAndPorts: Array<CoderAndPort>;
        }

        export let IPAddressAndPorts_META = makeObj<IPAddressAndPorts>({
            f: [{
                n: "address",
                t: IPAddress_META
            }, {n: "coderAndPorts", t: makeList<CoderAndPort>(CoderAndPort_META)}]
        });

        export class IPAddressAndPortsList {
            addresses: Array<IPAddressAndPorts>;
        }

        export let IPAddressAndPortsList_META = makeObj<IPAddressAndPortsList>({
            f: [{
                n: "addresses",
                t: makeList<IPAddressAndPorts>(IPAddressAndPorts_META)
            }]
        });

        export class ServerDescriptor {
            id: Int16;
            ipAddress: IPAddressAndPortsList;
        }

        export let ServerDescriptor_META = makeObj<ServerDescriptor>({
            f: [{n: "id", t: MInt16}, {
                n: "ipAddress",
                t: IPAddressAndPortsList_META
            }]
        });

        export class AccessGroup {
            id: Int64;
            data: Set<UUID>;
            owner: UUID;
        }

        export let AccessGroup_META = makeObj<AccessGroup>({
            f: [{n: "id", t: MInt64}, {
                n: "data",
                t: makeSet<UUID>(MUUID)
            }, {n: "owner", t: MUUID}]
        });

        export class UUIDAndCloud {
            uid: UUID;
            cloud: Cloud;
        }

        export let UUIDAndCloud_META = makeObj<UUIDAndCloud>({f: [{n: "uid", t: MUUID}, {n: "cloud", t: Cloud_META}]});
        export namespace iPAddress {

            export class V4 extends IPAddress {
                data: Uint8Array;
            }

            export let V4_META = makeObj<iPAddress.V4>({f: [{n: "data", t: makeSBytes(4)}]});

            export class V6 extends IPAddress {
                data: Uint8Array;
            }

            export let V6_META = makeObj<iPAddress.V6>({f: [{n: "data", t: makeSBytes(6)}]});
        }
    }
    export namespace clientServerRegApi {
        export namespace serverRegistryApi {

            export interface RegistrationRootApi {

                getAsymmetricPublicKey(cryptoLib: CryptoLib): RFuture<crypt.SignedKey>;

                enter(cryptoLib: CryptoLib, st: Value<Uint8Array>): void;
            }

            export let RegistrationRootApi_META = makeApi<RegistrationRootApi>([{
                n: "getAsymmetricPublicKey",
                id: 3,
                a: [{n: "cryptoLib", t: MCryptoLib}],
                r: makeRFuture<crypt.SignedKey>(crypt.SignedKey_META)
            }, {
                n: "enter",
                id: 4,
                a: [{n: "cryptoLib", t: MCryptoLib}, {n: "st", t: makeValue<Uint8Array>(MUint8Array)}]
            }]);
        }
    }
    export namespace clientServerApi {
        export namespace serverApi {

            export interface ServerApiByUidClient {
            }

            export let ServerApiByUidClient_META = makeApi<ServerApiByUidClient>([]);

            export interface ServerApiByUid {

                getBalance(): RFuture<Int64>;

                getBeneficiary(): RFuture<UUID>;

                setBeneficiary(uid: UUID): Future;

                getBlockTime(): RFuture<Date>;

                onlineTime(): RFuture<Date>;

                addAccessGroup(groupId: Int64): RFuture<boolean>;

                removeAccessGroup(groupId: Int64): RFuture<boolean>;

                unblock(): Future;

                getParent(): RFuture<UUID>;

                block(): Future;

                setParent(uid: UUID): Future;

                createTime(): RFuture<Date>;

                getPosition(): RFuture<common.Cloud>;
            }

            export let ServerApiByUid_META = makeApi<ServerApiByUid>([{
                n: "getBalance",
                id: 3,
                a: [],
                r: makeRFuture<Int64>(MInt64)
            }, {n: "getBeneficiary", id: 15, a: [], r: makeRFuture<UUID>(MUUID)}, {
                n: "setBeneficiary",
                id: 16,
                a: [{n: "uid", t: MUUID}],
                r: MFuture
            }, {n: "getBlockTime", id: 17, a: [], r: makeRFuture<Date>(MDate)}, {
                n: "onlineTime",
                id: 20,
                a: [],
                r: makeRFuture<Date>(MDate)
            }, {
                n: "addAccessGroup",
                id: 21,
                a: [{n: "groupId", t: MInt64}],
                r: makeRFuture<boolean>(MBoolean)
            }, {
                n: "removeAccessGroup",
                id: 22,
                a: [{n: "groupId", t: MInt64}],
                r: makeRFuture<boolean>(MBoolean)
            }, {n: "unblock", id: 18, a: [], r: MFuture}, {
                n: "getParent",
                id: 14,
                a: [],
                r: makeRFuture<UUID>(MUUID)
            }, {n: "block", id: 6, a: [], r: MFuture}, {
                n: "setParent",
                id: 4,
                a: [{n: "uid", t: MUUID}],
                r: MFuture
            }, {n: "createTime", id: 19, a: [], r: makeRFuture<Date>(MDate)}, {
                n: "getPosition",
                id: 7,
                a: [],
                r: makeRFuture<common.Cloud>(common.Cloud_META)
            }]);

            export interface AuthorizedApi {

                backId(id: Int8): void;

                ping(nextConnectMsDuration: Int64): Future;

                clientSelf(): RFuture<SC<Gate<ServerApiByUidClient, ServerApiByUid>>>;

                createAccessGroup(owner: UUID, uids: Array<UUID>): RFuture<Int64>;

                addToAccessGroup(groupId: Int64, uid: UUID): RFuture<boolean>;

                removeFromAccessGroup(groupId: Int64, uid: UUID): RFuture<boolean>;

                checkAccessForSendMessage(uid: UUID): Future;

                resolverServers(sid: Value<Uint16Array>): void;

                resolverClouds(uids: Value<Array<UUID>>): void;

                getAccessGroups(uid: UUID): RFuture<Set<Int64>>;

                getAccessGroup(groupId: Int64): RFuture<common.AccessGroup>;

                getAllAccessedClients(uid: UUID): RFuture<Set<UUID>>;

                checkAccessForSendMessage2(uid1: UUID, uid2: UUID): RFuture<boolean>;

                sendMessage(uid: UUID, data: Value<Uint8Array>): void;

                resolvers(servers: SC<Gate<Int16, common.ServerDescriptor>>, clouds: SC<Gate<UUID, common.UUIDAndCloud>>): void;

                client(uid: UUID): RFuture<SC<Gate<ServerApiByUidClient, ServerApiByUid>>>;
            }

            export let AuthorizedApi_META = makeApi<AuthorizedApi>([{
                n: "backId",
                id: 5,
                a: [{n: "id", t: MInt8}]
            }, {n: "ping", id: 6, a: [{n: "nextConnectMsDuration", t: MInt64}], r: MFuture}, {
                n: "clientSelf",
                id: 8,
                a: [],
                r: makeRFuture<SC<Gate<ServerApiByUidClient, ServerApiByUid>>>(makeSC<Gate<ServerApiByUidClient, ServerApiByUid>>())
            }, {
                n: "createAccessGroup",
                id: 13,
                a: [{n: "owner", t: MUUID}, {n: "uids", t: makeList<UUID>(MUUID)}],
                r: makeRFuture<Int64>(MInt64)
            }, {
                n: "addToAccessGroup",
                id: 14,
                a: [{n: "groupId", t: MInt64}, {n: "uid", t: MUUID}],
                r: makeRFuture<boolean>(MBoolean)
            }, {
                n: "removeFromAccessGroup",
                id: 15,
                a: [{n: "groupId", t: MInt64}, {n: "uid", t: MUUID}],
                r: makeRFuture<boolean>(MBoolean)
            }, {n: "checkAccessForSendMessage", id: 16, a: [{n: "uid", t: MUUID}], r: MFuture}, {
                n: "resolverServers",
                id: 17,
                a: [{n: "sid", t: makeValue<Uint16Array>(MUint16Array)}]
            }, {
                n: "resolverClouds",
                id: 18,
                a: [{n: "uids", t: makeValue<Array<UUID>>(makeList<UUID>(MUUID))}]
            }, {
                n: "getAccessGroups",
                id: 19,
                a: [{n: "uid", t: MUUID}],
                r: makeRFuture<Set<Int64>>(makeSet<Int64>(MInt64))
            }, {
                n: "getAccessGroup",
                id: 20,
                a: [{n: "groupId", t: MInt64}],
                r: makeRFuture<common.AccessGroup>(common.AccessGroup_META)
            }, {
                n: "getAllAccessedClients",
                id: 21,
                a: [{n: "uid", t: MUUID}],
                r: makeRFuture<Set<UUID>>(makeSet<UUID>(MUUID))
            }, {
                n: "checkAccessForSendMessage2",
                id: 22,
                a: [{n: "uid1", t: MUUID}, {n: "uid2", t: MUUID}],
                r: makeRFuture<boolean>(MBoolean)
            }, {
                n: "sendMessage",
                id: 10,
                a: [{n: "uid", t: MUUID}, {n: "data", t: makeValue<Uint8Array>(MUint8Array)}]
            }, {
                n: "resolvers",
                id: 12,
                a: [{n: "servers", t: makeSC<Gate<Int16, common.ServerDescriptor>>()}, {
                    n: "clouds",
                    t: makeSC<Gate<UUID, common.UUIDAndCloud>>()
                }]
            }, {
                n: "client",
                id: 7,
                a: [{n: "uid", t: MUUID}],
                r: makeRFuture<SC<Gate<ServerApiByUidClient, ServerApiByUid>>>(makeSC<Gate<ServerApiByUidClient, ServerApiByUid>>())
            }]);

            export interface LoginApi {

                loginByUID(st: SC<ApiNode<clientApi.ClientApiSafe, AuthorizedApi, CryptoNode>>, uid: UUID): void;

                loginByAlias(st: SC<ApiNode<clientApi.ClientApiSafe, AuthorizedApi, CryptoNode>>, alias: UUID): void;

                getTimeUTC(): RFuture<Int64>;

                loginByUID2(uid: UUID, data: SCD<ApiNode<clientApi.ClientApiSafe, AuthorizedApi, CryptoNode>>): void;

                loginByAlias2(alias: UUID, data: SCD<ApiNode<clientApi.ClientApiSafe, AuthorizedApi, CryptoNode>>): void;
            }

            export let LoginApi_META = makeApi<LoginApi>([{
                n: "loginByUID",
                id: 3,
                a: [{n: "st", t: makeSC<ApiNode<clientApi.ClientApiSafe, AuthorizedApi, CryptoNode>>()}, {
                    n: "uid",
                    t: MUUID
                }]
            }, {
                n: "loginByAlias",
                id: 4,
                a: [{n: "st", t: makeSC<ApiNode<clientApi.ClientApiSafe, AuthorizedApi, CryptoNode>>()}, {
                    n: "alias",
                    t: MUUID
                }]
            }, {n: "getTimeUTC", id: 5, a: [], r: makeRFuture<Int64>(MInt64)}, {
                n: "loginByUID2",
                id: 6,
                a: [{n: "uid", t: MUUID}, {
                    n: "data",
                    t: makeSCD<ApiNode<clientApi.ClientApiSafe, AuthorizedApi, CryptoNode>>()
                }]
            }, {
                n: "loginByAlias2",
                id: 7,
                a: [{n: "alias", t: MUUID}, {
                    n: "data",
                    t: makeSCD<ApiNode<clientApi.ClientApiSafe, AuthorizedApi, CryptoNode>>()
                }]
            }]);
        }
        export namespace clientApi {

            export interface ClientApiUnsafe {

                sendSafeApiDataMulti(backId: Int8, data: Value<Uint8Array>): void;

                sendSafeApiData(data: Value<Uint8Array>): void;
            }

            export let ClientApiUnsafe_META = makeApi<ClientApiUnsafe>([{
                n: "sendSafeApiDataMulti",
                id: 6,
                a: [{n: "backId", t: MInt8}, {n: "data", t: makeValue<Uint8Array>(MUint8Array)}]
            }, {n: "sendSafeApiData", id: 7, a: [{n: "data", t: makeValue<Uint8Array>(MUint8Array)}]}]);

            export interface ClientApiSafe {

                sendCloud(uid: UUID, cloud: common.Cloud): void;

                changeParent(uid: UUID): void;

                changeAlias(alias: UUID): void;

                sendMessage(uid: UUID, data: Value<Uint8Array>): void;

                sendServerDescriptor(v: common.ServerDescriptor): void;

                newChild(uid: UUID): void;
            }

            export let ClientApiSafe_META = makeApi<ClientApiSafe>([{
                n: "sendCloud",
                id: 12,
                a: [{n: "uid", t: MUUID}, {n: "cloud", t: common.Cloud_META}]
            }, {n: "changeParent", id: 4, a: [{n: "uid", t: MUUID}]}, {
                n: "changeAlias",
                id: 5,
                a: [{n: "alias", t: MUUID}]
            }, {
                n: "sendMessage",
                id: 10,
                a: [{n: "uid", t: MUUID}, {n: "data", t: makeValue<Uint8Array>(MUint8Array)}]
            }, {n: "sendServerDescriptor", id: 11, a: [{n: "v", t: common.ServerDescriptor_META}]}, {
                n: "newChild",
                id: 6,
                a: [{n: "uid", t: MUUID}]
            }]);
        }
    }
    export namespace crypt {

        export abstract class Key {
            public abstract get data(): Uint8Array;
        }

        export let Key_META = makeObj<Key>({
            c: {
                "0": key.SodiumCurvePublic_META,
                "2": key.SodiumChacha20Poly1305_META,
                "6": key.HydrogenSignPrivate_META,
                "4": key.SodiumSignPrivate_META,
                "8": key.HydrogenCurvePrivate_META,
                "9": key.HydrogenSecretBox_META,
                "1": key.SodiumCurvePrivate_META,
                "3": key.SodiumSignPublic_META,
                "7": key.HydrogenCurvePublic_META,
                "5": key.HydrogenSignPublic_META
            }
        });

        export abstract class Sign {
            public abstract get data(): Uint8Array;
        }

        export let Sign_META = makeObj<Sign>({c: {"0": sign.AE_ED25519_META, "1": sign.HYDROGEN_META}});

        export class SignedKey {
            key: Key;
            sign: Sign;
        }

        export let SignedKey_META = makeObj<SignedKey>({f: [{n: "key", t: Key_META}, {n: "sign", t: Sign_META}]});
        export namespace sign {

            export class AE_ED25519 extends Sign {
                data: Uint8Array;
            }

            export let AE_ED25519_META = makeObj<sign.AE_ED25519>({f: [{n: "data", t: makeSBytes(64)}]});

            export class HYDROGEN extends Sign {
                data: Uint8Array;
            }

            export let HYDROGEN_META = makeObj<sign.HYDROGEN>({f: [{n: "data", t: makeSBytes(64)}]});
        }
        export namespace key {

            export class SodiumCurvePublic extends Key {
                data: Uint8Array;
            }

            export let SodiumCurvePublic_META = makeObj<key.SodiumCurvePublic>({f: [{n: "data", t: makeSBytes(32)}]});

            export class SodiumChacha20Poly1305 extends Key {
                data: Uint8Array;
            }

            export let SodiumChacha20Poly1305_META = makeObj<key.SodiumChacha20Poly1305>({
                f: [{
                    n: "data",
                    t: makeSBytes(32)
                }]
            });

            export class HydrogenSignPrivate extends Key {
                data: Uint8Array;
            }

            export let HydrogenSignPrivate_META = makeObj<key.HydrogenSignPrivate>({
                f: [{
                    n: "data",
                    t: makeSBytes(64)
                }]
            });

            export class SodiumSignPrivate extends Key {
                data: Uint8Array;
            }

            export let SodiumSignPrivate_META = makeObj<key.SodiumSignPrivate>({f: [{n: "data", t: makeSBytes(64)}]});

            export class HydrogenCurvePrivate extends Key {
                data: Uint8Array;
            }

            export let HydrogenCurvePrivate_META = makeObj<key.HydrogenCurvePrivate>({
                f: [{
                    n: "data",
                    t: makeSBytes(32)
                }]
            });

            export class HydrogenSecretBox extends Key {
                data: Uint8Array;
            }

            export let HydrogenSecretBox_META = makeObj<key.HydrogenSecretBox>({f: [{n: "data", t: makeSBytes(32)}]});

            export class SodiumCurvePrivate extends Key {
                data: Uint8Array;
            }

            export let SodiumCurvePrivate_META = makeObj<key.SodiumCurvePrivate>({f: [{n: "data", t: makeSBytes(32)}]});

            export class SodiumSignPublic extends Key {
                data: Uint8Array;
            }

            export let SodiumSignPublic_META = makeObj<key.SodiumSignPublic>({f: [{n: "data", t: makeSBytes(32)}]});

            export class HydrogenCurvePublic extends Key {
                data: Uint8Array;
            }

            export let HydrogenCurvePublic_META = makeObj<key.HydrogenCurvePublic>({
                f: [{
                    n: "data",
                    t: makeSBytes(32)
                }]
            });

            export class HydrogenSignPublic extends Key {
                data: Uint8Array;
            }

            export let HydrogenSignPublic_META = makeObj<key.HydrogenSignPublic>({f: [{n: "data", t: makeSBytes(32)}]});
        }
    }
}

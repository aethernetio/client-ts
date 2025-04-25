import {
    AetherCodec,
    ApiNode,
    CryptoLib,
    CryptoNode,
    Date,
    Future,
    Gate,
    Int16,
    Int64,
    List,
    meta,
    RFuture,
    SC,
    SCD,
    Set,
    UUID,
    Value,
} from "./aether";

export namespace io {
    export namespace aether {
        export namespace common {
            export class IPAddress {
            }

            export let IPAddress_META = meta.obj({
                f: [],
                c: {"0": io.aether.common.iPAddress.V4_META, "1": io.aether.common.iPAddress.V6_META}
            });

            export class CoderAndPort {
                public codec: AetherCodec;
                public port: Int16;
            }

            export let CoderAndPort_META = meta.obj({
                f: [{n: "codec", t: meta.AetherCodec}, {
                    n: "port",
                    t: meta.Int16
                }]
            });

            export class IPAddressAndPorts {
                public address: io.aether.common.IPAddress;
                public coderAndPorts: List<io.aether.common.CoderAndPort>;
            }

            export let IPAddressAndPorts_META = meta.obj({
                f: [{
                    n: "address",
                    t: io.aether.common.IPAddress_META
                }, {n: "coderAndPorts", t: meta.SList(io.aether.common.CoderAndPort_META)}]
            });

            export class IPAddressAndPortsList {
                public addresses: List<io.aether.common.IPAddressAndPorts>;
            }

            export let IPAddressAndPortsList_META = meta.obj({
                f: [{
                    n: "addresses",
                    t: meta.SList(io.aether.common.IPAddressAndPorts_META)
                }]
            });

            export class ServerDescriptor {
                public id: Int16;
                public ipAddress: io.aether.common.IPAddressAndPortsList;
            }

            export let ServerDescriptor_META = meta.obj({
                f: [{n: "id", t: meta.Int16}, {
                    n: "ipAddress",
                    t: io.aether.common.IPAddressAndPortsList_META
                }]
            });

            export class Cloud {
                public data: Uint16Array;
            }

            export let Cloud_META = meta.obj({f: [{n: "data", t: meta.Uint16Array}]});

            export class UUIDAndCloud {
                public uid: UUID;
                public cloud: io.aether.common.Cloud;
            }

            export let UUIDAndCloud_META = meta.obj({
                f: [{n: "uid", t: meta.UUID}, {
                    n: "cloud",
                    t: io.aether.common.Cloud_META
                }]
            });

            export class AccessGroup {
                public id: Int64;
                public data: Set<UUID>;
                public owner: UUID;
            }

            export let AccessGroup_META = meta.obj({
                f: [{n: "id", t: meta.Int64}, {
                    n: "data",
                    t: meta.Set(meta.UUID)
                }, {n: "owner", t: meta.UUID}]
            });
            export namespace iPAddress {
                export class V4 extends io.aether.common.IPAddress {
                    public data: Uint8Array;
                }

                export let V4_META = meta.obj({f: [{n: "data", t: meta.Uint8Array}]});

                export class V6 extends io.aether.common.IPAddress {
                    public data: Uint8Array;
                }

                export let V6_META = meta.obj({f: [{n: "data", t: meta.Uint8Array}]});
            }
        }
        export namespace clientServerRegApi {
            export namespace serverRegistryApi {
                export interface RegistrationRootApi {
                    enter(cryptoLib: CryptoLib, st: Value<Uint8Array>): void;

                    getAsymmetricPublicKey(cryptoLib: CryptoLib): RFuture<io.aether.crypt.SignedKey>;
                }

                export let RegistrationRootApi_META = meta.Api([{
                    n: "enter",
                    id: 4,
                    a: [{n: "cryptoLib", t: meta.CryptoLib}, {n: "st", t: meta.Value(meta.Uint8Array)}]
                }, {
                    n: "getAsymmetricPublicKey",
                    id: 3,
                    a: [{n: "cryptoLib", t: meta.CryptoLib}],
                    r: meta.RFuture(io.aether.crypt.SignedKey_META)
                }]);
            }
        }
        export namespace clientServerApi {
            export namespace serverApi {
                export interface ServerApiByUidClient {
                }

                export let ServerApiByUidClient_META = meta.Api([]);

                export interface ServerApiByUid {
                    getPosition(): RFuture<io.aether.common.Cloud>;

                    getParent(): RFuture<UUID>;

                    block(): Future;

                    setParent(uid: UUID): Future;

                    createTime(): RFuture<Date>;

                    getBalance(): RFuture<Int64>;

                    getBeneficiary(): RFuture<UUID>;

                    setBeneficiary(uid: UUID): Future;

                    getBlockTime(): RFuture<Date>;

                    unblock(): Future;

                    onlineTime(): RFuture<Date>;

                    addAccessGroup(groupId: Int64): RFuture<boolean>;

                    removeAccessGroup(groupId: Int64): RFuture<boolean>;
                }

                export let ServerApiByUid_META = meta.Api([{
                    n: "getPosition",
                    id: 7,
                    a: [],
                    r: meta.RFuture(io.aether.common.Cloud_META)
                }, {n: "getParent", id: 14, a: [], r: meta.RFuture(meta.UUID)}, {
                    n: "block",
                    id: 6,
                    a: [],
                    r: meta.Future
                }, {n: "setParent", id: 4, a: [{n: "uid", t: meta.UUID}], r: meta.Future}, {
                    n: "createTime",
                    id: 19,
                    a: [],
                    r: meta.RFuture(meta.Date)
                }, {n: "getBalance", id: 3, a: [], r: meta.RFuture(meta.Int64)}, {
                    n: "getBeneficiary",
                    id: 15,
                    a: [],
                    r: meta.RFuture(meta.UUID)
                }, {n: "setBeneficiary", id: 16, a: [{n: "uid", t: meta.UUID}], r: meta.Future}, {
                    n: "getBlockTime",
                    id: 17,
                    a: [],
                    r: meta.RFuture(meta.Date)
                }, {n: "unblock", id: 18, a: [], r: meta.Future}, {
                    n: "onlineTime",
                    id: 20,
                    a: [],
                    r: meta.RFuture(meta.Date)
                }, {
                    n: "addAccessGroup",
                    id: 21,
                    a: [{n: "groupId", t: meta.Int64}],
                    r: meta.RFuture(meta.Boolean)
                }, {
                    n: "removeAccessGroup",
                    id: 22,
                    a: [{n: "groupId", t: meta.Int64}],
                    r: meta.RFuture(meta.Boolean)
                }]);

                export interface AuthorizedApi {
                    resolvers(servers: SC<Gate<Int16, io.aether.common.ServerDescriptor>>, clouds: SC<Gate<UUID, io.aether.common.UUIDAndCloud>>): void;

                    ping(nextConnectMsDuration: Int64): Future;

                    client(uid: UUID): RFuture<SC<Gate<io.aether.clientServerApi.serverApi.ServerApiByUidClient, io.aether.clientServerApi.serverApi.ServerApiByUid>>>;

                    clientSelf(): RFuture<SC<Gate<io.aether.clientServerApi.serverApi.ServerApiByUidClient, io.aether.clientServerApi.serverApi.ServerApiByUid>>>;

                    sendMessage(uid: UUID, data: Value<Uint8Array>): void;

                    createAccessGroup(owner: UUID, uids: List<UUID>): RFuture<Int64>;

                    addToAccessGroup(groupId: Int64, uid: UUID): RFuture<boolean>;

                    removeFromAccessGroup(groupId: Int64, uid: UUID): RFuture<boolean>;

                    checkAccessForSendMessage(uid: UUID): Future;

                    resolverServers(sid: Value<Uint16Array>): void;

                    resolverClouds(uids: Value<List<UUID>>): void;

                    getAccessGroups(uid: UUID): RFuture<Set<Int64>>;

                    getAccessGroup(groupId: Int64): RFuture<io.aether.common.AccessGroup>;

                    getAllAccessedClients(uid: UUID): RFuture<Set<UUID>>;

                    checkAccessForSendMessage2(uid1: UUID, uid2: UUID): RFuture<boolean>;
                }

                export let AuthorizedApi_META = meta.Api([{
                    n: "resolvers",
                    id: 12,
                    a: [{n: "servers", t: meta.SC()}, {n: "clouds", t: meta.SC()}]
                }, {n: "ping", id: 6, a: [{n: "nextConnectMsDuration", t: meta.Int64}], r: meta.Future}, {
                    n: "client",
                    id: 7,
                    a: [{n: "uid", t: meta.UUID}],
                    r: meta.RFuture(meta.SC())
                }, {n: "clientSelf", id: 8, a: [], r: meta.RFuture(meta.SC())}, {
                    n: "sendMessage",
                    id: 10,
                    a: [{n: "uid", t: meta.UUID}, {n: "data", t: meta.Value(meta.Uint8Array)}]
                }, {
                    n: "createAccessGroup",
                    id: 13,
                    a: [{n: "owner", t: meta.UUID}, {n: "uids", t: meta.SList(meta.UUID)}],
                    r: meta.RFuture(meta.Int64)
                }, {
                    n: "addToAccessGroup",
                    id: 14,
                    a: [{n: "groupId", t: meta.Int64}, {n: "uid", t: meta.UUID}],
                    r: meta.RFuture(meta.Boolean)
                }, {
                    n: "removeFromAccessGroup",
                    id: 15,
                    a: [{n: "groupId", t: meta.Int64}, {n: "uid", t: meta.UUID}],
                    r: meta.RFuture(meta.Boolean)
                }, {
                    n: "checkAccessForSendMessage",
                    id: 16,
                    a: [{n: "uid", t: meta.UUID}],
                    r: meta.Future
                }, {
                    n: "resolverServers",
                    id: 17,
                    a: [{n: "sid", t: meta.Value(meta.Uint16Array)}]
                }, {
                    n: "resolverClouds",
                    id: 18,
                    a: [{n: "uids", t: meta.Value(meta.SList(meta.UUID))}]
                }, {
                    n: "getAccessGroups",
                    id: 19,
                    a: [{n: "uid", t: meta.UUID}],
                    r: meta.RFuture(meta.Set(meta.Int64))
                }, {
                    n: "getAccessGroup",
                    id: 20,
                    a: [{n: "groupId", t: meta.Int64}],
                    r: meta.RFuture(io.aether.common.AccessGroup_META)
                }, {
                    n: "getAllAccessedClients",
                    id: 21,
                    a: [{n: "uid", t: meta.UUID}],
                    r: meta.RFuture(meta.Set(meta.UUID))
                }, {
                    n: "checkAccessForSendMessage2",
                    id: 22,
                    a: [{n: "uid1", t: meta.UUID}, {n: "uid2", t: meta.UUID}],
                    r: meta.RFuture(meta.Boolean)
                }]);

                export interface LoginApi {
                    loginByUID(st: SC<ApiNode<io.aether.clientServerApi.clientApi.ClientApiSafe, io.aether.clientServerApi.serverApi.AuthorizedApi, CryptoNode>>, uid: UUID): void;

                    loginByAlias(st: SC<ApiNode<io.aether.clientServerApi.clientApi.ClientApiSafe, io.aether.clientServerApi.serverApi.AuthorizedApi, CryptoNode>>, alias: UUID): void;

                    getTimeUTC(): RFuture<Int64>;

                    loginByUID2(uid: UUID, data: SCD<ApiNode<io.aether.clientServerApi.clientApi.ClientApiSafe, io.aether.clientServerApi.serverApi.AuthorizedApi, CryptoNode>>): void;

                    loginByAlias2(alias: UUID, data: SCD<ApiNode<io.aether.clientServerApi.clientApi.ClientApiSafe, io.aether.clientServerApi.serverApi.AuthorizedApi, CryptoNode>>): void;
                }

                export let LoginApi_META = meta.Api([{
                    n: "loginByUID",
                    id: 3,
                    a: [{n: "st", t: meta.SC()}, {n: "uid", t: meta.UUID}]
                }, {
                    n: "loginByAlias",
                    id: 4,
                    a: [{n: "st", t: meta.SC()}, {n: "alias", t: meta.UUID}]
                }, {n: "getTimeUTC", id: 5, a: [], r: meta.RFuture(meta.Int64)}, {
                    n: "loginByUID2",
                    id: 6,
                    a: [{n: "uid", t: meta.UUID}, {n: "data", t: meta.SCD()}]
                }, {n: "loginByAlias2", id: 7, a: [{n: "alias", t: meta.UUID}, {n: "data", t: meta.SCD()}]}]);
            }
            export namespace clientApi {
                export interface ClientApiUnsafe {
                    sendSafeApiData(uid: UUID, data: Value<Uint8Array>): void;
                }

                export let ClientApiUnsafe_META = meta.Api([{
                    n: "sendSafeApiData",
                    id: 6,
                    a: [{n: "uid", t: meta.UUID}, {n: "data", t: meta.Value(meta.Uint8Array)}]
                }]);

                export interface ClientApiSafe {
                    newChild(uid: UUID): void;

                    changeParent(uid: UUID): void;

                    changeAlias(alias: UUID): void;

                    sendMessage(uid: UUID, data: Value<Uint8Array>): void;

                    sendServerDescriptor(v: io.aether.common.ServerDescriptor): void;

                    sendCloud(uid: UUID, cloud: io.aether.common.Cloud): void;
                }

                export let ClientApiSafe_META = meta.Api([{
                    n: "newChild",
                    id: 6,
                    a: [{n: "uid", t: meta.UUID}]
                }, {n: "changeParent", id: 4, a: [{n: "uid", t: meta.UUID}]}, {
                    n: "changeAlias",
                    id: 5,
                    a: [{n: "alias", t: meta.UUID}]
                }, {
                    n: "sendMessage",
                    id: 10,
                    a: [{n: "uid", t: meta.UUID}, {n: "data", t: meta.Value(meta.Uint8Array)}]
                }, {
                    n: "sendServerDescriptor",
                    id: 11,
                    a: [{n: "v", t: io.aether.common.ServerDescriptor_META}]
                }, {
                    n: "sendCloud",
                    id: 12,
                    a: [{n: "uid", t: meta.UUID}, {n: "cloud", t: io.aether.common.Cloud_META}]
                }]);
            }
        }
        export namespace crypt {
            export class Key {
            }

            export let Key_META = meta.obj({
                f: [],
                c: {
                    "0": io.aether.crypt.key.SodiumCurvePublic_META,
                    "2": io.aether.crypt.key.SodiumChacha20Poly1305_META,
                    "6": io.aether.crypt.key.HydrogenSignPrivate_META,
                    "4": io.aether.crypt.key.SodiumSignPrivate_META,
                    "8": io.aether.crypt.key.HydrogenCurvePrivate_META,
                    "9": io.aether.crypt.key.HydrogenSecretBox_META,
                    "1": io.aether.crypt.key.SodiumCurvePrivate_META,
                    "3": io.aether.crypt.key.SodiumSignPublic_META,
                    "7": io.aether.crypt.key.HydrogenCurvePublic_META,
                    "5": io.aether.crypt.key.HydrogenSignPublic_META
                }
            });

            export class Sign {
            }

            export let Sign_META = meta.obj({
                f: [],
                c: {"0": io.aether.crypt.sign.AE_ED25519_META, "1": io.aether.crypt.sign.HYDROGEN_META}
            });

            export class SignedKey {
                public key: io.aether.crypt.Key;
                public sign: io.aether.crypt.Sign;
            }

            export let SignedKey_META = meta.obj({
                f: [{n: "key", t: io.aether.crypt.Key_META}, {
                    n: "sign",
                    t: io.aether.crypt.Sign_META
                }]
            });
            export namespace sign {
                export class AE_ED25519 extends io.aether.crypt.Sign {
                    public sign: Uint8Array;
                }

                export let AE_ED25519_META = meta.obj({f: [{n: "sign", t: meta.Uint8Array}]});

                export class HYDROGEN extends io.aether.crypt.Sign {
                    public sign: Uint8Array;
                }

                export let HYDROGEN_META = meta.obj({f: [{n: "sign", t: meta.Uint8Array}]});
            }
            export namespace key {
                export class SodiumCurvePublic extends io.aether.crypt.Key {
                    public data: Uint8Array;
                }

                export let SodiumCurvePublic_META = meta.obj({f: [{n: "data", t: meta.Uint8Array}]});

                export class SodiumChacha20Poly1305 extends io.aether.crypt.Key {
                    public data: Uint8Array;
                }

                export let SodiumChacha20Poly1305_META = meta.obj({f: [{n: "data", t: meta.Uint8Array}]});

                export class HydrogenSignPrivate extends io.aether.crypt.Key {
                    public data: Uint8Array;
                }

                export let HydrogenSignPrivate_META = meta.obj({f: [{n: "data", t: meta.Uint8Array}]});

                export class SodiumSignPrivate extends io.aether.crypt.Key {
                    public data: Uint8Array;
                }

                export let SodiumSignPrivate_META = meta.obj({f: [{n: "data", t: meta.Uint8Array}]});

                export class HydrogenCurvePrivate extends io.aether.crypt.Key {
                    public data: Uint8Array;
                }

                export let HydrogenCurvePrivate_META = meta.obj({f: [{n: "data", t: meta.Uint8Array}]});

                export class HydrogenSecretBox extends io.aether.crypt.Key {
                    public data: Uint8Array;
                }

                export let HydrogenSecretBox_META = meta.obj({f: [{n: "data", t: meta.Uint8Array}]});

                export class SodiumCurvePrivate extends io.aether.crypt.Key {
                    public data: Uint8Array;
                }

                export let SodiumCurvePrivate_META = meta.obj({f: [{n: "data", t: meta.Uint8Array}]});

                export class SodiumSignPublic extends io.aether.crypt.Key {
                    public data: Uint8Array;
                }

                export let SodiumSignPublic_META = meta.obj({f: [{n: "data", t: meta.Uint8Array}]});

                export class HydrogenCurvePublic extends io.aether.crypt.Key {
                    public data: Uint8Array;
                }

                export let HydrogenCurvePublic_META = meta.obj({f: [{n: "data", t: meta.Uint8Array}]});

                export class HydrogenSignPublic extends io.aether.crypt.Key {
                    public data: Uint8Array;
                }

                export let HydrogenSignPublic_META = meta.obj({f: [{n: "data", t: meta.Uint8Array}]});
            }
        }
    }
}


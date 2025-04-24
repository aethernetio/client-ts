import {
    AetherCodec,
    ApiNode,
    buildMetaApi,
    buildMetaObj,
    CryptoLib,
    CryptoNode,
    Date,
    Future,
    Gate,
    Int16,
    Int16_META,
    Int64,
    Int64_META,
    SC,
    SCD,
    UUID,
    UUID_META,
    Value
} from "./aether";

export namespace io {
    export namespace aether {
        export namespace common {
            export class IPAddress {
            }

            export let IPAddress_META = buildMetaObj({f: []});

            export class CoderAndPort {
                public codec: AetherCodec;
                public port: Int16;
            }

            export let CoderAndPort_META = buildMetaObj({
                f: [{n: "codec", t: AetherCodec_META}, {
                    n: "port",
                    t: Int16_META
                }]
            });

            export class IPAddressAndPorts {
                public address: io.aether.common.IPAddress;
                public coderAndPorts: Array<io.aether.common.CoderAndPort>;
            }

            export let IPAddressAndPorts_META = buildMetaObj({
                f: [{
                    n: "address",
                    t: io.aether.common.IPAddress_META
                }, {n: "coderAndPorts", t: Array_io_aether_common_CoderAndPort__META}]
            });

            export class IPAddressAndPortsList {
                public addresses: Array<io.aether.common.IPAddressAndPorts>;
            }

            export let IPAddressAndPortsList_META = buildMetaObj({
                f: [{
                    n: "addresses",
                    t: Array_io_aether_common_IPAddressAndPorts__META
                }]
            });

            export class ServerDescriptor {
                public id: Int16;
                public ipAddress: io.aether.common.IPAddressAndPortsList;
            }

            export let ServerDescriptor_META = buildMetaObj({
                f: [{n: "id", t: Int16_META}, {
                    n: "ipAddress",
                    t: io.aether.common.IPAddressAndPortsList_META
                }]
            });

            export class Cloud {
                public data: Uint16Array;
            }

            export let Cloud_META = buildMetaObj({f: [{n: "data", t: Uint16Array_META}]});

            export class UUIDAndCloud {
                public uid: UUID;
                public cloud: io.aether.common.Cloud;
            }

            export let UUIDAndCloud_META = buildMetaObj({
                f: [{n: "uid", t: UUID_META}, {
                    n: "cloud",
                    t: io.aether.common.Cloud_META
                }]
            });

            export class AccessGroup {
                public id: Int64;
                public data: Set<UUID>;
                public owner: UUID;
            }

            export let AccessGroup_META = buildMetaObj({
                f: [{n: "id", t: Int64_META}, {
                    n: "data",
                    t: Set_UUID__META
                }, {n: "owner", t: UUID_META}]
            });
        }
        export namespace clientServerRegApi {
            export namespace serverRegistryApi {
                export interface RegistrationRootApi {
                    enter(cryptoLib: CryptoLib, st: Value<Uint8Array>): void;

                    getAsymmetricPublicKey(cryptoLib: CryptoLib): Future<io.aether.crypt.SignedKey>;
                }

                export let RegistrationRootApi_META = buildMetaApi([{
                    n: "enter",
                    id: 4,
                    a: [{n: "cryptoLib", t: CryptoLib_META}, {n: "st", t: Value_Uint8Array__META}]
                }, {n: "getAsymmetricPublicKey", id: 3, a: [{n: "cryptoLib", t: CryptoLib_META}]}]);
            }
        }
        export namespace clientServerApi {
            export namespace serverApi {
                export interface ServerApiByUidClient {
                }

                export let ServerApiByUidClient_META = buildMetaApi([]);

                export interface ServerApiByUid {
                    getPosition(): Future<io.aether.common.Cloud>;

                    getParent(): Future<UUID>;

                    block(): Future<any>;

                    setParent(uid: UUID): Future<any>;

                    createTime(): Future<Date>;

                    getBalance(): Future<Int64>;

                    getBeneficiary(): Future<UUID>;

                    setBeneficiary(uid: UUID): Future<any>;

                    getBlockTime(): Future<Date>;

                    unblock(): Future<any>;

                    onlineTime(): Future<Date>;

                    addAccessGroup(groupId: Int64): Future<boolean>;

                    removeAccessGroup(groupId: Int64): Future<boolean>;
                }

                export let ServerApiByUid_META = buildMetaApi([{n: "getPosition", id: 7, a: []}, {
                    n: "getParent",
                    id: 14,
                    a: []
                }, {n: "block", id: 6, a: []}, {n: "setParent", id: 4, a: [{n: "uid", t: UUID_META}]}, {
                    n: "createTime",
                    id: 19,
                    a: []
                }, {n: "getBalance", id: 3, a: []}, {n: "getBeneficiary", id: 15, a: []}, {
                    n: "setBeneficiary",
                    id: 16,
                    a: [{n: "uid", t: UUID_META}]
                }, {n: "getBlockTime", id: 17, a: []}, {n: "unblock", id: 18, a: []}, {
                    n: "onlineTime",
                    id: 20,
                    a: []
                }, {n: "addAccessGroup", id: 21, a: [{n: "groupId", t: Int64_META}]}, {
                    n: "removeAccessGroup",
                    id: 22,
                    a: [{n: "groupId", t: Int64_META}]
                }]);

                export interface AuthorizedApi {
                    resolvers(servers: SC<Gate<Int16, io.aether.common.ServerDescriptor>>, clouds: SC<Gate<UUID, io.aether.common.UUIDAndCloud>>): void;

                    sendMessage(uid: UUID, data: Value<Uint8Array>): void;

                    createAccessGroup(owner: UUID, uids: Array<UUID>): Future<Int64>;

                    addToAccessGroup(groupId: Int64, uid: UUID): Future<boolean>;

                    removeFromAccessGroup(groupId: Int64, uid: UUID): Future<boolean>;

                    checkAccessForSendMessage(uid: UUID): Future<any>;

                    resolverServers(sid: Value<Uint16Array>): void;

                    resolverClouds(uids: Value<Array<UUID>>): void;

                    getAccessGroups(uid: UUID): Future<Set<Int64>>;

                    getAccessGroup(groupId: Int64): Future<io.aether.common.AccessGroup>;

                    getAllAccessedClients(uid: UUID): Future<Set<UUID>>;

                    checkAccessForSendMessage2(uid1: UUID, uid2: UUID): Future<boolean>;

                    ping(nextConnectMsDuration: Int64): Future<any>;

                    client(uid: UUID): Future<SC<Gate<io.aether.clientServerApi.serverApi.ServerApiByUidClient, io.aether.clientServerApi.serverApi.ServerApiByUid>>>;

                    clientSelf(): Future<SC<Gate<io.aether.clientServerApi.serverApi.ServerApiByUidClient, io.aether.clientServerApi.serverApi.ServerApiByUid>>>;
                }

                export let AuthorizedApi_META = buildMetaApi([{
                    n: "resolvers",
                    id: 12,
                    a: [{n: "servers", t: SC_Gate_Int16_io_aether_common_ServerDescriptor___META}, {
                        n: "clouds",
                        t: SC_Gate_UUID_io_aether_common_UUIDAndCloud___META
                    }]
                }, {
                    n: "sendMessage",
                    id: 10,
                    a: [{n: "uid", t: UUID_META}, {n: "data", t: Value_Uint8Array__META}]
                }, {
                    n: "createAccessGroup",
                    id: 13,
                    a: [{n: "owner", t: UUID_META}, {n: "uids", t: Array_UUID__META}]
                }, {
                    n: "addToAccessGroup",
                    id: 14,
                    a: [{n: "groupId", t: Int64_META}, {n: "uid", t: UUID_META}]
                }, {
                    n: "removeFromAccessGroup",
                    id: 15,
                    a: [{n: "groupId", t: Int64_META}, {n: "uid", t: UUID_META}]
                }, {n: "checkAccessForSendMessage", id: 16, a: [{n: "uid", t: UUID_META}]}, {
                    n: "resolverServers",
                    id: 17,
                    a: [{n: "sid", t: Value_Uint16Array__META}]
                }, {n: "resolverClouds", id: 18, a: [{n: "uids", t: Value_Array_UUID___META}]}, {
                    n: "getAccessGroups",
                    id: 19,
                    a: [{n: "uid", t: UUID_META}]
                }, {n: "getAccessGroup", id: 20, a: [{n: "groupId", t: Int64_META}]}, {
                    n: "getAllAccessedClients",
                    id: 21,
                    a: [{n: "uid", t: UUID_META}]
                }, {
                    n: "checkAccessForSendMessage2",
                    id: 22,
                    a: [{n: "uid1", t: UUID_META}, {n: "uid2", t: UUID_META}]
                }, {n: "ping", id: 6, a: [{n: "nextConnectMsDuration", t: Int64_META}]}, {
                    n: "client",
                    id: 7,
                    a: [{n: "uid", t: UUID_META}]
                }, {n: "clientSelf", id: 8, a: []}]);

                export interface LoginApi {
                    loginByUID(st: SC<ApiNode<io.aether.clientServerApi.clientApi.ClientApiSafe, io.aether.clientServerApi.serverApi.AuthorizedApi, CryptoNode>>, uid: UUID): void;

                    loginByAlias(st: SC<ApiNode<io.aether.clientServerApi.clientApi.ClientApiSafe, io.aether.clientServerApi.serverApi.AuthorizedApi, CryptoNode>>, alias: UUID): void;

                    getTimeUTC(): Future<Int64>;

                    loginByUID2(uid: UUID, data: SCD<ApiNode<io.aether.clientServerApi.clientApi.ClientApiSafe, io.aether.clientServerApi.serverApi.AuthorizedApi, CryptoNode>>): void;

                    loginByAlias2(alias: UUID, data: SCD<ApiNode<io.aether.clientServerApi.clientApi.ClientApiSafe, io.aether.clientServerApi.serverApi.AuthorizedApi, CryptoNode>>): void;
                }

                export let LoginApi_META = buildMetaApi([{
                    n: "loginByUID",
                    id: 3,
                    a: [{
                        n: "st",
                        t: SC_ApiNode_io_aether_clientServerApi_clientApi_ClientApiSafe_io_aether_clientServerApi_serverApi_AuthorizedApi_CryptoNode___META
                    }, {n: "uid", t: UUID_META}]
                }, {
                    n: "loginByAlias",
                    id: 4,
                    a: [{
                        n: "st",
                        t: SC_ApiNode_io_aether_clientServerApi_clientApi_ClientApiSafe_io_aether_clientServerApi_serverApi_AuthorizedApi_CryptoNode___META
                    }, {n: "alias", t: UUID_META}]
                }, {n: "getTimeUTC", id: 5, a: []}, {
                    n: "loginByUID2",
                    id: 6,
                    a: [{n: "uid", t: UUID_META}, {
                        n: "data",
                        t: SCD_ApiNode_io_aether_clientServerApi_clientApi_ClientApiSafe_io_aether_clientServerApi_serverApi_AuthorizedApi_CryptoNode___META
                    }]
                }, {
                    n: "loginByAlias2",
                    id: 7,
                    a: [{n: "alias", t: UUID_META}, {
                        n: "data",
                        t: SCD_ApiNode_io_aether_clientServerApi_clientApi_ClientApiSafe_io_aether_clientServerApi_serverApi_AuthorizedApi_CryptoNode___META
                    }]
                }]);
            }
            export namespace clientApi {
                export interface ClientApiUnsafe {
                    sendSafeApiData(uid: UUID, data: Value<Uint8Array>): void;
                }

                export let ClientApiUnsafe_META = buildMetaApi([{
                    n: "sendSafeApiData",
                    id: 6,
                    a: [{n: "uid", t: UUID_META}, {n: "data", t: Value_Uint8Array__META}]
                }]);

                export interface ClientApiSafe {
                    newChild(uid: UUID): void;

                    changeParent(uid: UUID): void;

                    changeAlias(alias: UUID): void;

                    sendMessage(uid: UUID, data: Value<Uint8Array>): void;

                    sendServerDescriptor(v: io.aether.common.ServerDescriptor): void;

                    sendCloud(uid: UUID, cloud: io.aether.common.Cloud): void;
                }

                export let ClientApiSafe_META = buildMetaApi([{
                    n: "newChild",
                    id: 6,
                    a: [{n: "uid", t: UUID_META}]
                }, {n: "changeParent", id: 4, a: [{n: "uid", t: UUID_META}]}, {
                    n: "changeAlias",
                    id: 5,
                    a: [{n: "alias", t: UUID_META}]
                }, {
                    n: "sendMessage",
                    id: 10,
                    a: [{n: "uid", t: UUID_META}, {n: "data", t: Value_Uint8Array__META}]
                }, {
                    n: "sendServerDescriptor",
                    id: 11,
                    a: [{n: "v", t: io.aether.common.ServerDescriptor_META}]
                }, {
                    n: "sendCloud",
                    id: 12,
                    a: [{n: "uid", t: UUID_META}, {n: "cloud", t: io.aether.common.Cloud_META}]
                }]);
            }
        }
        export namespace crypt {
            export class Key {
            }

            export let Key_META = buildMetaObj({f: []});

            export class Sign {
            }

            export let Sign_META = buildMetaObj({f: []});

            export class SignedKey {
                public key: io.aether.crypt.Key;
                public sign: io.aether.crypt.Sign;
            }

            export let SignedKey_META = buildMetaObj({
                f: [{n: "key", t: io.aether.crypt.Key_META}, {
                    n: "sign",
                    t: io.aether.crypt.Sign_META
                }]
            });
        }
    }
}


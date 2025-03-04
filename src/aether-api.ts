import {Int8, Int16, Int32, Int64, meta,
    MetaTypeArray,MetaTypeArrayStatic,AResult, UUID,MetaType,MetaTypeObject,MetaTypeObjectSealed,MetaTypeEnum,MetaApi,MetaMethod,MetaMethodWithResult,MetaMethodSubApi,MetaMethodSubApiWithResult,MetaField,ResultUnit,ExceptionUnit,AetherException,ApiResultConsumer,Future} from "./aether";
export namespace io{
    export namespace aether{
        export namespace common{
            export enum CryptoLib{SODIUM,HYDROGEN}export enum ZipType{NONE,ZIP}export class KeyType{constructor(readonly cryptoLib){}static readonly SODIUM_SIGN_PUBLIC=new KeyType("SODIUM");static readonly SODIUM_SIGN_PRIVATE=new KeyType("SODIUM");static readonly HYDROGEN_SIGN_PUBLIC=new KeyType("HYDROGEN");static readonly HYDROGEN_SIGN_PRIVATE=new KeyType("HYDROGEN");static readonly SODIUM_CHACHA20POLY1305=new KeyType("SODIUM");static readonly SODIUM_CURVE25519_PUBLIC=new KeyType("SODIUM");static readonly SODIUM_CURVE25519_PRIVATE=new KeyType("SODIUM");static readonly HYDROGEN_CURVE_PUBLIC=new KeyType("HYDROGEN");static readonly HYDROGEN_CURVE_PRIVATE=new KeyType("HYDROGEN");static readonly HYDROGEN_SECRET_BOX=new KeyType("HYDROGEN");}
            export  abstract class Key {
                abstract getData():Uint8Array;abstract getType():io.aether.common.KeyType;}

            export  abstract class Sign {
            }

            export class SignedKey {
                constructor(key:io.aether.common.Key,sign:io.aether.common.Sign){this.key=key;this.sign=sign;}
                key:io.aether.common.Key;
                sign:io.aether.common.Sign;
            }

            export  abstract class IPAddress {
            }
            export class AetherCodec{constructor(readonly name){}static readonly BINARY=new AetherCodec("tcp");static readonly WEBSOCKET=new AetherCodec("ws");}
            export class CoderAndPort {
                constructor(codec:io.aether.common.AetherCodec,port:Int16){this.codec=codec;this.port=port;}
                codec:io.aether.common.AetherCodec;
                port:Int16;
            }

            export class IPAddressAndPorts {
                address:io.aether.common.IPAddress;
                coderAndPorts:Array<io.aether.common.CoderAndPort>;
            }

            export class IPAddressAndPortsList {
                addresses:Array<io.aether.common.IPAddressAndPorts>;
            }

            export  abstract class KeysByCryptoLib <T>{
                base:Array<io.aether.common.keysByCryptoLib.Rec<T>>;
            }

            export class KeysBase {
                base:Array<io.aether.common.KeysByCryptoLib<any>>;
            }

            export class ServerDescriptor {
                constructor(id:Int16,ipAddress:io.aether.common.IPAddressAndPortsList,keys:io.aether.common.KeysBase){this.id=id;this.ipAddress=ipAddress;this.keys=keys;}
                id:Int16;
                ipAddress:io.aether.common.IPAddressAndPortsList;
                keys:io.aether.common.KeysBase;
            }

            export const CryptoLib_META=new MetaTypeEnum(io.aether.common.CryptoLib);

            export const ZipType_META=new MetaTypeEnum(io.aether.common.ZipType);

            export const Key_META=new MetaTypeObjectSealed<io.aether.common.Key>(io.aether.common.Key,[[io.aether.common.key.SodiumCurvePublic_META,0],[io.aether.common.key.SodiumChacha20Poly1305_META,2],[io.aether.common.key.HydrogenSignPrivate_META,6],[io.aether.common.key.SodiumSignPrivate_META,4],[io.aether.common.key.HydrogenCurvePrivate_META,8],[io.aether.common.key.HydrogenSecretBox_META,9],[io.aether.common.key.SodiumCurvePrivate_META,1],[io.aether.common.key.SodiumSignPublic_META,3],[io.aether.common.key.HydrogenCurvePublic_META,7],[io.aether.common.key.HydrogenSignPublic_META,5]]);
            export const Sign_META=new MetaTypeObjectSealed<io.aether.common.Sign>(io.aether.common.Sign,[[io.aether.common.sign.AE_ED25519_META,0],[io.aether.common.sign.HYDROGEN_META,1]]);
            export const SignedKey_META=new MetaTypeObject<io.aether.common.SignedKey>(io.aether.common.SignedKey,[[io.aether.common.Key_META,"key"],[io.aether.common.Sign_META,"sign"]]);

            export const IPAddress_META=new MetaTypeObjectSealed<io.aether.common.IPAddress>(io.aether.common.IPAddress,[[io.aether.common.iPAddress.V4_META,0],[io.aether.common.iPAddress.V6_META,1]]);
            export const AetherCodec_META=new MetaTypeEnum(io.aether.common.AetherCodec);

            export const CoderAndPort_META=new MetaTypeObject<io.aether.common.CoderAndPort>(io.aether.common.CoderAndPort,[[io.aether.common.AetherCodec_META,"codec"],[meta.Int16,"port"]]);

            export const IPAddressAndPorts_META=new MetaTypeObject<io.aether.common.IPAddressAndPorts>(io.aether.common.IPAddressAndPorts,[[io.aether.common.IPAddress_META,"address"],[new MetaTypeArray(io.aether.common.CoderAndPort_META),"coderAndPorts"]]);

            export const IPAddressAndPortsList_META=new MetaTypeObject<io.aether.common.IPAddressAndPortsList>(io.aether.common.IPAddressAndPortsList,[[new MetaTypeArray(io.aether.common.IPAddressAndPorts_META),"addresses"]]);

            export const KeysByCryptoLib_Object_META=new MetaTypeObjectSealed<io.aether.common.KeysByCryptoLib<any>>(io.aether.common.KeysByCryptoLib,[[io.aether.common.keysByCryptoLib.Hydrogen_META,0],[io.aether.common.keysByCryptoLib.Sodium_META,1]]);
            export const KeysBase_META=new MetaTypeObject<io.aether.common.KeysBase>(io.aether.common.KeysBase,[[new MetaTypeArray(io.aether.common.KeysByCryptoLib_Object_META),"base"]]);

            export const ServerDescriptor_META=new MetaTypeObject<io.aether.common.ServerDescriptor>(io.aether.common.ServerDescriptor,[[meta.Int16,"id"],[io.aether.common.IPAddressAndPortsList_META,"ipAddress"],[io.aether.common.KeysBase_META,"keys"]]);

            export class Cloud {
                constructor(data:Array<Int16>){this.data=data;}
                data:Array<Int16>;
            }

            export class ServerDescriptorLite {
                constructor(id:Int16,ipAddress:io.aether.common.IPAddressAndPortsList){this.id=id;this.ipAddress=ipAddress;}
                id:Int16;
                ipAddress:io.aether.common.IPAddressAndPortsList;
            }

            export class Message {
                id:Int16;
                time:Int64;
                data:Uint8Array;
                uid:UUID;
            }

            export const ServerDescriptorLite_META=new MetaTypeObject<io.aether.common.ServerDescriptorLite>(io.aether.common.ServerDescriptorLite,[[meta.Int16,"id"],[io.aether.common.IPAddressAndPortsList_META,"ipAddress"]]);

            export const Message_META=new MetaTypeObject<io.aether.common.Message>(io.aether.common.Message,[[meta.Int16,"id"],[meta.Int64,"time"],[meta.Int8Array,"data"],[meta.UUID,"uid"]]);

            export const Cloud_META=new MetaTypeObject<io.aether.common.Cloud>(io.aether.common.Cloud,[[meta.Int16Array,"data"]]);
            export enum Status{NEW,LOCK,CONFIRMED,IMMEDIATE,DONE,CANCELED}
            export class MoneyOperation {
                id:Int64;
                from:UUID;
                to:UUID;
                amount:Int64;
                time:Int64;
                credit:boolean;
                status:io.aether.common.Status;
            }

            export const Status_META=new MetaTypeEnum(io.aether.common.Status);

            export const MoneyOperation_META=new MetaTypeObject<io.aether.common.MoneyOperation>(io.aether.common.MoneyOperation,[[meta.Int64,"id"],[meta.UUID,"from"],[meta.UUID,"to"],[meta.Int64,"amount"],[meta.Int64,"time"],[meta.Boolean,"credit"],[io.aether.common.Status_META,"status"]]);
            export namespace iPAddress{

                export class V4  extends io.aether.common.IPAddress{
                    data:Uint8Array;
                }

                export const V4_META=new MetaTypeObject<io.aether.common.iPAddress.V4>(io.aether.common.iPAddress.V4,[[new MetaTypeArrayStatic(meta.Int8,4),"data"]]);

                export class V6  extends io.aether.common.IPAddress{
                    data:Uint8Array;
                }

                export const V6_META=new MetaTypeObject<io.aether.common.iPAddress.V6>(io.aether.common.iPAddress.V6,[[new MetaTypeArrayStatic(meta.Int8,6),"data"]]);
            }
            export namespace sign{

                export class AE_ED25519  extends io.aether.common.Sign{
                    sign:Uint8Array;
                }

                export const AE_ED25519_META=new MetaTypeObject<io.aether.common.sign.AE_ED25519>(io.aether.common.sign.AE_ED25519,[[new MetaTypeArrayStatic(meta.Int8,64),"sign"]]);

                export class HYDROGEN  extends io.aether.common.Sign{
                    sign:Uint8Array;
                }

                export const HYDROGEN_META=new MetaTypeObject<io.aether.common.sign.HYDROGEN>(io.aether.common.sign.HYDROGEN,[[new MetaTypeArrayStatic(meta.Int8,64),"sign"]]);
            }
            export namespace keysByCryptoLib{

                export class Rec <T>{
                    constructor(key:io.aether.common.Key,sign:any){this.key=key;this.sign=sign;}
                    key:io.aether.common.Key;
                    sign:T;
                }

                export class Hydrogen  extends io.aether.common.KeysByCryptoLib<Uint8Array>{
                }

                export const Rec_byteArray_META=new MetaTypeObject<io.aether.common.keysByCryptoLib.Rec<Uint8Array>>(io.aether.common.keysByCryptoLib.Rec,[[io.aether.common.Key_META,"key"],[new MetaTypeArrayStatic(meta.Int8,64),"sign"]]);

                export const Hydrogen_META=new MetaTypeObject<io.aether.common.keysByCryptoLib.Hydrogen>(io.aether.common.keysByCryptoLib.Hydrogen,[[new MetaTypeArray(io.aether.common.keysByCryptoLib.Rec_byteArray_META),"base"]]);

                export class Sodium  extends io.aether.common.KeysByCryptoLib<Uint8Array>{
                }

                export const Sodium_META=new MetaTypeObject<io.aether.common.keysByCryptoLib.Sodium>(io.aether.common.keysByCryptoLib.Sodium,[[new MetaTypeArray(io.aether.common.keysByCryptoLib.Rec_byteArray_META),"base"]]);
            }
            export namespace key{

                export class SodiumCurvePublic  extends io.aether.common.Key{
                    getData():Uint8Array{return this.data;}getType():io.aether.common.KeyType{ return io.aether.common.KeyType.SODIUM_CURVE25519_PUBLIC;}   data:Uint8Array;
                }

                export const SodiumCurvePublic_META=new MetaTypeObject<io.aether.common.key.SodiumCurvePublic>(io.aether.common.key.SodiumCurvePublic,[[new MetaTypeArrayStatic(meta.Int8,32),"data"]]);

                export class SodiumChacha20Poly1305  extends io.aether.common.Key{
                    getData():Uint8Array{return this.data;}getType():io.aether.common.KeyType{ return io.aether.common.KeyType.SODIUM_CHACHA20POLY1305;}   data:Uint8Array;
                }

                export const SodiumChacha20Poly1305_META=new MetaTypeObject<io.aether.common.key.SodiumChacha20Poly1305>(io.aether.common.key.SodiumChacha20Poly1305,[[new MetaTypeArrayStatic(meta.Int8,32),"data"]]);

                export class HydrogenSignPrivate  extends io.aether.common.Key{
                    getData():Uint8Array{return this.data;}getType():io.aether.common.KeyType{ return io.aether.common.KeyType.HYDROGEN_SIGN_PRIVATE;}   data:Uint8Array;
                }

                export const HydrogenSignPrivate_META=new MetaTypeObject<io.aether.common.key.HydrogenSignPrivate>(io.aether.common.key.HydrogenSignPrivate,[[new MetaTypeArrayStatic(meta.Int8,64),"data"]]);

                export class SodiumSignPrivate  extends io.aether.common.Key{
                    getData():Uint8Array{return this.data;}getType():io.aether.common.KeyType{ return io.aether.common.KeyType.SODIUM_SIGN_PRIVATE;}   data:Uint8Array;
                }

                export const SodiumSignPrivate_META=new MetaTypeObject<io.aether.common.key.SodiumSignPrivate>(io.aether.common.key.SodiumSignPrivate,[[new MetaTypeArrayStatic(meta.Int8,64),"data"]]);

                export class HydrogenCurvePrivate  extends io.aether.common.Key{
                    getData():Uint8Array{return this.data;}getType():io.aether.common.KeyType{ return io.aether.common.KeyType.HYDROGEN_CURVE_PRIVATE;}   data:Uint8Array;
                }

                export const HydrogenCurvePrivate_META=new MetaTypeObject<io.aether.common.key.HydrogenCurvePrivate>(io.aether.common.key.HydrogenCurvePrivate,[[new MetaTypeArrayStatic(meta.Int8,32),"data"]]);

                export class HydrogenSecretBox  extends io.aether.common.Key{
                    getData():Uint8Array{return this.data;}getType():io.aether.common.KeyType{ return io.aether.common.KeyType.HYDROGEN_SECRET_BOX;}   data:Uint8Array;
                }

                export const HydrogenSecretBox_META=new MetaTypeObject<io.aether.common.key.HydrogenSecretBox>(io.aether.common.key.HydrogenSecretBox,[[new MetaTypeArrayStatic(meta.Int8,32),"data"]]);

                export class SodiumCurvePrivate  extends io.aether.common.Key{
                    getData():Uint8Array{return this.data;}getType():io.aether.common.KeyType{ return io.aether.common.KeyType.SODIUM_CURVE25519_PRIVATE;}   data:Uint8Array;
                }

                export const SodiumCurvePrivate_META=new MetaTypeObject<io.aether.common.key.SodiumCurvePrivate>(io.aether.common.key.SodiumCurvePrivate,[[new MetaTypeArrayStatic(meta.Int8,32),"data"]]);

                export class SodiumSignPublic  extends io.aether.common.Key{
                    getData():Uint8Array{return this.data;}getType():io.aether.common.KeyType{ return io.aether.common.KeyType.SODIUM_SIGN_PUBLIC;}   data:Uint8Array;
                }

                export const SodiumSignPublic_META=new MetaTypeObject<io.aether.common.key.SodiumSignPublic>(io.aether.common.key.SodiumSignPublic,[[new MetaTypeArrayStatic(meta.Int8,32),"data"]]);

                export class HydrogenCurvePublic  extends io.aether.common.Key{
                    getData():Uint8Array{return this.data;}getType():io.aether.common.KeyType{ return io.aether.common.KeyType.HYDROGEN_CURVE_PUBLIC;}   data:Uint8Array;
                }

                export const HydrogenCurvePublic_META=new MetaTypeObject<io.aether.common.key.HydrogenCurvePublic>(io.aether.common.key.HydrogenCurvePublic,[[new MetaTypeArrayStatic(meta.Int8,32),"data"]]);

                export class HydrogenSignPublic  extends io.aether.common.Key{
                    getData():Uint8Array{return this.data;}getType():io.aether.common.KeyType{ return io.aether.common.KeyType.HYDROGEN_SIGN_PUBLIC;}   data:Uint8Array;
                }

                export const HydrogenSignPublic_META=new MetaTypeObject<io.aether.common.key.HydrogenSignPublic>(io.aether.common.key.HydrogenSignPublic,[[new MetaTypeArrayStatic(meta.Int8,32),"data"]]);
            }
        }
        export namespace api{

            export class Mode {
                constructor(crypt:io.aether.common.CryptoLib,zip:io.aether.common.ZipType){this.crypt=crypt;this.zip=zip;}
                crypt:io.aether.common.CryptoLib;
                zip:io.aether.common.ZipType;
            }
            export interface EncryptionApi<SubApi> extends ApiResultConsumer{
                setMode(mode:io.aether.api.Mode):void;
                symmetric():SubApi;
                asymmetric():SubApi;
                setCryptoLib(cryptoLib:io.aether.common.CryptoLib):void;
            }

            export const Mode_META=new MetaTypeObject<io.aether.api.Mode>(io.aether.api.Mode,[[io.aether.common.CryptoLib_META,"crypt"],[io.aether.common.ZipType_META,"zip"]]);
            export interface AResultSet<T>{
                remove():void;
                limit(limit:Int32):void;
                filter(predicate:io.aether.api.expressions.Expression):void;
                order(comparator:io.aether.api.expressions.Expression):void;
                select():Future<Array<T>>;
                selectAll():Future<Array<T>>;
                resetParameters():void;
            }

            export const AResultSet_UUID_META=new MetaApi<io.aether.api.AResultSet<UUID>>(new MetaMethodWithResult<Array<UUID>>(4,"select",meta.UUIDArray),new MetaMethodWithResult<Array<UUID>>(5,"selectAll",meta.UUIDArray),new MetaMethod(7,"filter",new MetaField<io.aether.api.expressions.Expression>(io.aether.api.expressions.Expression_META,"predicate")),new MetaMethod(8,"order",new MetaField<io.aether.api.expressions.Expression>(io.aether.api.expressions.Expression_META,"comparator")),new MetaMethod(6,"remove"),new MetaMethod(9,"resetParameters"),new MetaMethod(3,"limit",new MetaField<Int32>(meta.Int32,"limit")));

            export const AResultSet_Message_META=new MetaApi<io.aether.api.AResultSet<io.aether.common.Message>>(new MetaMethodWithResult<Array<io.aether.common.Message>>(4,"select",new MetaTypeArray(io.aether.common.Message_META)),new MetaMethodWithResult<Array<io.aether.common.Message>>(5,"selectAll",new MetaTypeArray(io.aether.common.Message_META)),new MetaMethod(7,"filter",new MetaField<io.aether.api.expressions.Expression>(io.aether.api.expressions.Expression_META,"predicate")),new MetaMethod(8,"order",new MetaField<io.aether.api.expressions.Expression>(io.aether.api.expressions.Expression_META,"comparator")),new MetaMethod(6,"remove"),new MetaMethod(9,"resetParameters"),new MetaMethod(3,"limit",new MetaField<Int32>(meta.Int32,"limit")));

            export const EncryptionApi_AuthorizedApi_META=new MetaApi<io.aether.api.EncryptionApi<io.aether.api.serverApi.AuthorizedApi>>(new MetaMethod(100,"setMode",new MetaField<io.aether.api.Mode>(io.aether.api.Mode_META,"mode")),new MetaMethodSubApi<io.aether.api.serverApi.AuthorizedApi>(5,"asymmetric",false,false,io.aether.api.serverApi.AuthorizedApi_META),new MetaMethod(1,"sendException",new MetaField<ExceptionUnit>(meta.ExceptionUnit,"unit")),new MetaMethodSubApi<io.aether.api.serverApi.AuthorizedApi>(4,"symmetric",false,false,io.aether.api.serverApi.AuthorizedApi_META),new MetaMethod(0,"sendResult",new MetaField<ResultUnit>(meta.ResultUnit,"unit")),new MetaMethod(99,"setCryptoLib",new MetaField<io.aether.common.CryptoLib>(io.aether.common.CryptoLib_META,"cryptoLib")));
            export namespace serverApi{
                export interface ServerApiByUid{
                    getPosition():Future<io.aether.common.Cloud>;
                    block():void;
                    setParent(uid:UUID):void;
                    children():io.aether.api.AResultSet<UUID>;
                    getBalance():Future<Int64>;
                    setKey(key:io.aether.common.Key):void;
                    grantAccessRights():void;
                    denyAccessRight():void;
                    sendMessage(id:Int32,time:Int64,data:Uint8Array):Future<boolean>;
                }
                export interface AuthorizedApi extends ApiResultConsumer{
                    messages():io.aether.api.AResultSet<io.aether.common.Message>;
                    client(uid:UUID):io.aether.api.serverApi.ServerApiByUid;
                    createClient(parent:UUID,key:io.aether.common.Key):Future<io.aether.api.serverRegistryApi.RegistrationResponse>;
                    clientSelf():io.aether.api.serverApi.ServerApiByUid;
                    sendMessage(message:io.aether.common.Message):Future<boolean>;
                    addMoneyOperation(moneyOperation:io.aether.common.MoneyOperation):void;
                    getServerDescriptor(data:Array<Int32>):Future<Array<io.aether.common.ServerDescriptor>>;
                    getCloud(uid:UUID):Future<io.aether.common.Cloud>;
                }
                export interface LoginApi{
                    loginByUID(uid:UUID):io.aether.api.EncryptionApi<io.aether.api.serverApi.AuthorizedApi>;
                    loginByAlias(alias:UUID):io.aether.api.EncryptionApi<io.aether.api.serverApi.AuthorizedApi>;
                }

                export const ServerApiByUid_META=new MetaApi<io.aether.api.serverApi.ServerApiByUid>(new MetaMethod(8,"setKey",new MetaField<io.aether.common.Key>(io.aether.common.Key_META,"key")),new MetaMethodWithResult<boolean>(5,"sendMessage",meta.Boolean,new MetaField<Int32>(meta.Int32,"id"),new MetaField<Int64>(meta.Int64,"time"),new MetaField<Uint8Array>(meta.Int8Array,"data")),new MetaMethod(6,"block"),new MetaMethod(4,"setParent",new MetaField<UUID>(meta.UUID,"uid")),new MetaMethodSubApi<io.aether.api.AResultSet<UUID>>(11,"children",false,false,io.aether.api.AResultSet_UUID_META),new MetaMethod(12,"grantAccessRights"),new MetaMethod(13,"denyAccessRight"),new MetaMethodWithResult<io.aether.common.Cloud>(7,"getPosition",io.aether.common.Cloud_META),new MetaMethodWithResult<Int64>(3,"getBalance",meta.Int64));

                export const AuthorizedApi_META=new MetaApi<io.aether.api.serverApi.AuthorizedApi>(new MetaMethodSubApi<io.aether.api.serverApi.ServerApiByUid>(8,"clientSelf",false,false,io.aether.api.serverApi.ServerApiByUid_META),new MetaMethodWithResult<io.aether.api.serverRegistryApi.RegistrationResponse>(3,"createClient",io.aether.api.serverRegistryApi.RegistrationResponse_META,new MetaField<UUID>(meta.UUID,"parent"),new MetaField<io.aether.common.Key>(io.aether.common.Key_META,"key")),new MetaMethod(1,"sendException",new MetaField<ExceptionUnit>(meta.ExceptionUnit,"unit")),new MetaMethodWithResult<Array<io.aether.common.ServerDescriptor>>(12,"getServerDescriptor",new MetaTypeArray(io.aether.common.ServerDescriptor_META),new MetaField<Array<Int32>>(meta.Int32Array,"data")),new MetaMethod(0,"sendResult",new MetaField<ResultUnit>(meta.ResultUnit,"unit")),new MetaMethodSubApi<io.aether.api.AResultSet<io.aether.common.Message>>(6,"messages",false,true,io.aether.api.AResultSet_Message_META),new MetaMethodSubApi<io.aether.api.serverApi.ServerApiByUid>(7,"client",false,false,io.aether.api.serverApi.ServerApiByUid_META,new MetaField<UUID>(meta.UUID,"uid")),new MetaMethodWithResult<boolean>(9,"sendMessage",meta.Boolean,new MetaField<io.aether.common.Message>(io.aether.common.Message_META,"message")),new MetaMethod(11,"addMoneyOperation",new MetaField<io.aether.common.MoneyOperation>(io.aether.common.MoneyOperation_META,"moneyOperation")),new MetaMethodWithResult<io.aether.common.Cloud>(13,"getCloud",io.aether.common.Cloud_META,new MetaField<UUID>(meta.UUID,"uid")));

                export const LoginApi_META=new MetaApi<io.aether.api.serverApi.LoginApi>(new MetaMethodSubApi<io.aether.api.EncryptionApi<io.aether.api.serverApi.AuthorizedApi>>(4,"loginByAlias",false,false,io.aether.api.EncryptionApi_AuthorizedApi_META,new MetaField<UUID>(meta.UUID,"alias")),new MetaMethodSubApi<io.aether.api.EncryptionApi<io.aether.api.serverApi.AuthorizedApi>>(3,"loginByUID",false,false,io.aether.api.EncryptionApi_AuthorizedApi_META,new MetaField<UUID>(meta.UUID,"uid")));
            }
            export namespace expressions{

                export  abstract class Expression {
                }

                export  abstract class BinOperator  extends io.aether.api.expressions.Expression{
                    left:io.aether.api.expressions.Expression;
                    right:io.aether.api.expressions.Expression;
                }

                export class Add  extends io.aether.api.expressions.BinOperator{
                }

                export const Add_META=new MetaTypeObject<io.aether.api.expressions.Add>(io.aether.api.expressions.Add,[[io.aether.api.expressions.Expression_META,"left"],[io.aether.api.expressions.Expression_META,"right"]]);

                export class Div  extends io.aether.api.expressions.BinOperator{
                }

                export const Div_META=new MetaTypeObject<io.aether.api.expressions.Div>(io.aether.api.expressions.Div,[[io.aether.api.expressions.Expression_META,"left"],[io.aether.api.expressions.Expression_META,"right"]]);

                export class LiteralArrayBoolean  extends io.aether.api.expressions.Expression{
                    value:Array<boolean>;
                }

                export const LiteralArrayBoolean_META=new MetaTypeObject<io.aether.api.expressions.LiteralArrayBoolean>(io.aether.api.expressions.LiteralArrayBoolean,[[new MetaTypeArray(meta.Boolean),"value"]]);

                export class Gte  extends io.aether.api.expressions.BinOperator{
                }

                export const Gte_META=new MetaTypeObject<io.aether.api.expressions.Gte>(io.aether.api.expressions.Gte,[[io.aether.api.expressions.Expression_META,"left"],[io.aether.api.expressions.Expression_META,"right"]]);

                export class LiteralInt8  extends io.aether.api.expressions.Expression{
                    value:Int8;
                }

                export const LiteralInt8_META=new MetaTypeObject<io.aether.api.expressions.LiteralInt8>(io.aether.api.expressions.LiteralInt8,[[meta.Int8,"value"]]);

                export class LiteralInt64  extends io.aether.api.expressions.Expression{
                    value:Int64;
                }

                export const LiteralInt64_META=new MetaTypeObject<io.aether.api.expressions.LiteralInt64>(io.aether.api.expressions.LiteralInt64,[[meta.Int64,"value"]]);

                export class LiteralInt16  extends io.aether.api.expressions.Expression{
                    value:Int16;
                }

                export const LiteralInt16_META=new MetaTypeObject<io.aether.api.expressions.LiteralInt16>(io.aether.api.expressions.LiteralInt16,[[meta.Int16,"value"]]);

                export class LiteralInt32  extends io.aether.api.expressions.Expression{
                    value:Int32;
                }

                export const LiteralInt32_META=new MetaTypeObject<io.aether.api.expressions.LiteralInt32>(io.aether.api.expressions.LiteralInt32,[[meta.Int32,"value"]]);

                export class LiteralArrayInt32  extends io.aether.api.expressions.Expression{
                    value:Array<Int32>;
                }

                export const LiteralArrayInt32_META=new MetaTypeObject<io.aether.api.expressions.LiteralArrayInt32>(io.aether.api.expressions.LiteralArrayInt32,[[meta.Int32Array,"value"]]);

                export class LiteralArrayInt64  extends io.aether.api.expressions.Expression{
                    value:Array<Int64>;
                }

                export const LiteralArrayInt64_META=new MetaTypeObject<io.aether.api.expressions.LiteralArrayInt64>(io.aether.api.expressions.LiteralArrayInt64,[[meta.Int64Array,"value"]]);

                export class LiteralBoolean  extends io.aether.api.expressions.Expression{
                    value:boolean;
                }

                export const LiteralBoolean_META=new MetaTypeObject<io.aether.api.expressions.LiteralBoolean>(io.aether.api.expressions.LiteralBoolean,[[meta.Boolean,"value"]]);

                export class LiteralArrayInt8  extends io.aether.api.expressions.Expression{
                    value:Uint8Array;
                }

                export const LiteralArrayInt8_META=new MetaTypeObject<io.aether.api.expressions.LiteralArrayInt8>(io.aether.api.expressions.LiteralArrayInt8,[[meta.Int8Array,"value"]]);

                export class And  extends io.aether.api.expressions.BinOperator{
                }

                export const And_META=new MetaTypeObject<io.aether.api.expressions.And>(io.aether.api.expressions.And,[[io.aether.api.expressions.Expression_META,"left"],[io.aether.api.expressions.Expression_META,"right"]]);

                export class Gt  extends io.aether.api.expressions.BinOperator{
                }

                export const Gt_META=new MetaTypeObject<io.aether.api.expressions.Gt>(io.aether.api.expressions.Gt,[[io.aether.api.expressions.Expression_META,"left"],[io.aether.api.expressions.Expression_META,"right"]]);

                export class LiteralArrayInt16  extends io.aether.api.expressions.Expression{
                    value:Array<Int16>;
                }

                export const LiteralArrayInt16_META=new MetaTypeObject<io.aether.api.expressions.LiteralArrayInt16>(io.aether.api.expressions.LiteralArrayInt16,[[meta.Int16Array,"value"]]);

                export class Invoke  extends io.aether.api.expressions.Expression{
                    cmdId:Int8;
                    arguments:Array<io.aether.api.expressions.Expression>;
                }

                export const Invoke_META=new MetaTypeObject<io.aether.api.expressions.Invoke>(io.aether.api.expressions.Invoke,[[meta.Int8,"cmdId"],[new MetaTypeArray(io.aether.api.expressions.Expression_META),"arguments"]]);

                export class Lt  extends io.aether.api.expressions.BinOperator{
                }

                export const Lt_META=new MetaTypeObject<io.aether.api.expressions.Lt>(io.aether.api.expressions.Lt,[[io.aether.api.expressions.Expression_META,"left"],[io.aether.api.expressions.Expression_META,"right"]]);

                export class Lte  extends io.aether.api.expressions.BinOperator{
                }

                export const Lte_META=new MetaTypeObject<io.aether.api.expressions.Lte>(io.aether.api.expressions.Lte,[[io.aether.api.expressions.Expression_META,"left"],[io.aether.api.expressions.Expression_META,"right"]]);

                export class Not  extends io.aether.api.expressions.Expression{
                    target:io.aether.api.expressions.Expression;
                }

                export const Not_META=new MetaTypeObject<io.aether.api.expressions.Not>(io.aether.api.expressions.Not,[[io.aether.api.expressions.Expression_META,"target"]]);

                export class Mul  extends io.aether.api.expressions.BinOperator{
                }

                export const Mul_META=new MetaTypeObject<io.aether.api.expressions.Mul>(io.aether.api.expressions.Mul,[[io.aether.api.expressions.Expression_META,"left"],[io.aether.api.expressions.Expression_META,"right"]]);

                export class Variable  extends io.aether.api.expressions.Expression{
                    position:Int32;
                }

                export const Variable_META=new MetaTypeObject<io.aether.api.expressions.Variable>(io.aether.api.expressions.Variable,[[meta.Int32,"position"]]);

                export class Sub  extends io.aether.api.expressions.BinOperator{
                }

                export const Sub_META=new MetaTypeObject<io.aether.api.expressions.Sub>(io.aether.api.expressions.Sub,[[io.aether.api.expressions.Expression_META,"left"],[io.aether.api.expressions.Expression_META,"right"]]);

                export class Or  extends io.aether.api.expressions.BinOperator{
                }

                export const Or_META=new MetaTypeObject<io.aether.api.expressions.Or>(io.aether.api.expressions.Or,[[io.aether.api.expressions.Expression_META,"left"],[io.aether.api.expressions.Expression_META,"right"]]);

                export const Expression_META=new MetaTypeObjectSealed<io.aether.api.expressions.Expression>(io.aether.api.expressions.Expression,[[io.aether.api.expressions.Add_META,0],[io.aether.api.expressions.Div_META,2],[io.aether.api.expressions.LiteralArrayBoolean_META,6],[io.aether.api.expressions.Gte_META,4],[io.aether.api.expressions.LiteralInt8_META,15],[io.aether.api.expressions.LiteralInt64_META,14],[io.aether.api.expressions.LiteralInt16_META,12],[io.aether.api.expressions.LiteralInt32_META,13],[io.aether.api.expressions.LiteralArrayInt32_META,8],[io.aether.api.expressions.LiteralArrayInt64_META,9],[io.aether.api.expressions.LiteralBoolean_META,11],[io.aether.api.expressions.LiteralArrayInt8_META,10],[io.aether.api.expressions.And_META,1],[io.aether.api.expressions.Gt_META,3],[io.aether.api.expressions.LiteralArrayInt16_META,7],[io.aether.api.expressions.Invoke_META,5],[io.aether.api.expressions.Lt_META,16],[io.aether.api.expressions.Lte_META,17],[io.aether.api.expressions.Not_META,19],[io.aether.api.expressions.Mul_META,18],[io.aether.api.expressions.Variable_META,22],[io.aether.api.expressions.Sub_META,21],[io.aether.api.expressions.Or_META,20]]);}
            export namespace clientApi{
                export interface ClientApiSafe extends ApiResultConsumer{
                    updateCloud(uid:UUID,cloud:io.aether.common.Cloud):void;
                    updateServers(serverDescriptors:Array<io.aether.common.ServerDescriptor>):void;
                    newChildren(newChildren:Array<UUID>):void;
                    confirmRegistration(registrationResponse:io.aether.api.serverRegistryApi.RegistrationResponseLite):void;
                    pushMessage(message:io.aether.common.Message):void;
                }
                export interface ClientApiUnsafe extends io.aether.api.EncryptionApi<io.aether.api.clientApi.ClientApiSafe>{
                    sendServerKeys(asymPublicKey:io.aether.common.SignedKey,signKey:io.aether.common.SignedKey):void;
                }

                export const ClientApiSafe_META=new MetaApi<io.aether.api.clientApi.ClientApiSafe>(new MetaMethod(28,"confirmRegistration",new MetaField<io.aether.api.serverRegistryApi.RegistrationResponseLite>(io.aether.api.serverRegistryApi.RegistrationResponseLite_META,"registrationResponse")),new MetaMethod(12,"pushMessage",new MetaField<io.aether.common.Message>(io.aether.common.Message_META,"message")),new MetaMethod(1,"sendException",new MetaField<ExceptionUnit>(meta.ExceptionUnit,"unit")),new MetaMethod(27,"newChildren",new MetaField<Array<UUID>>(meta.UUIDArray,"newChildren")),new MetaMethod(0,"sendResult",new MetaField<ResultUnit>(meta.ResultUnit,"unit")),new MetaMethod(13,"updateCloud",new MetaField<UUID>(meta.UUID,"uid"),new MetaField<io.aether.common.Cloud>(io.aether.common.Cloud_META,"cloud")),new MetaMethod(14,"updateServers",new MetaField<Array<io.aether.common.ServerDescriptor>>(new MetaTypeArray(io.aether.common.ServerDescriptor_META),"serverDescriptors")));

                export const ClientApiUnsafe_META=new MetaApi<io.aether.api.clientApi.ClientApiUnsafe>(new MetaMethod(100,"setMode",new MetaField<io.aether.api.Mode>(io.aether.api.Mode_META,"mode")),new MetaMethodSubApi<io.aether.api.clientApi.ClientApiSafe>(5,"asymmetric",false,false,io.aether.api.clientApi.ClientApiSafe_META),new MetaMethod(1,"sendException",new MetaField<ExceptionUnit>(meta.ExceptionUnit,"unit")),new MetaMethodSubApi<io.aether.api.clientApi.ClientApiSafe>(4,"symmetric",false,false,io.aether.api.clientApi.ClientApiSafe_META),new MetaMethod(0,"sendResult",new MetaField<ResultUnit>(meta.ResultUnit,"unit")),new MetaMethod(66,"sendServerKeys",new MetaField<io.aether.common.SignedKey>(io.aether.common.SignedKey_META,"asymPublicKey"),new MetaField<io.aether.common.SignedKey>(io.aether.common.SignedKey_META,"signKey")),new MetaMethod(99,"setCryptoLib",new MetaField<io.aether.common.CryptoLib>(io.aether.common.CryptoLib_META,"cryptoLib")));
            }
            export namespace serverRegistryApi{
                export interface GlobalRegApi{
                    finish():void;
                    setMasterKey(key:io.aether.common.Key):void;
                }
                export interface GlobalRegApiRoot extends io.aether.api.EncryptionApi<io.aether.api.serverRegistryApi.GlobalRegApi>{
                }
                export enum PowMethod{AE_BCRYPT_CRC32}
                export class WorkProofDTO {
                    constructor(salt:string,suffix:string,poolSize:Int8,maxHashVal:Int32,globalKey:io.aether.common.SignedKey){this.salt=salt;this.suffix=suffix;this.poolSize=poolSize;this.maxHashVal=maxHashVal;this.globalKey=globalKey;}
                    salt:string;
                    suffix:string;
                    poolSize:Int8;
                    maxHashVal:Int32;
                    globalKey:io.aether.common.SignedKey;
                }

                export class RegistrationRequest {
                    constructor(masterKey:io.aether.common.Key){this.masterKey=masterKey;}
                    masterKey:io.aether.common.Key;
                }

                export class RegistrationResponse {
                    constructor(alias:UUID,uid:UUID,cloud:Array<io.aether.common.ServerDescriptor>){this.alias=alias;this.uid=uid;this.cloud=cloud;}
                    alias:UUID;
                    uid:UUID;
                    cloud:Array<io.aether.common.ServerDescriptor>;
                }
                export interface PerformPowerBCryptApi extends ApiResultConsumer{
                    registration(parent:UUID,salt:string,suffix:string,passwords:Array<Int32>,returnKey:io.aether.common.Key):io.aether.api.serverRegistryApi.GlobalRegApiRoot;
                    requestWorkProofData(parent:UUID,powMethods:io.aether.api.serverRegistryApi.PowMethod,key:io.aether.common.Key,cryptoLib:io.aether.common.CryptoLib):Future<io.aether.api.serverRegistryApi.WorkProofDTO>;
                    registrationWithUid(uid:UUID,request:io.aether.api.serverRegistryApi.RegistrationRequest):Future<io.aether.api.serverRegistryApi.RegistrationResponse>;
                    requestWorkProofData2(parent:UUID,cryptoLib:io.aether.common.CryptoLib):Future<io.aether.api.serverRegistryApi.WorkProofDTO>;
                }
                export interface RootApi extends io.aether.api.EncryptionApi<io.aether.api.serverRegistryApi.PerformPowerBCryptApi>{
                    getAsymmetricPublicKey(cryptoLib:io.aether.common.CryptoLib):Future<io.aether.common.SignedKey>;
                }

                export const WorkProofDTO_META=new MetaTypeObject<io.aether.api.serverRegistryApi.WorkProofDTO>(io.aether.api.serverRegistryApi.WorkProofDTO,[[meta.String,"salt"],[meta.String,"suffix"],[meta.Int8,"poolSize"],[meta.Int32,"maxHashVal"],[io.aether.common.SignedKey_META,"globalKey"]]);

                export const PowMethod_META=new MetaTypeEnum(io.aether.api.serverRegistryApi.PowMethod);

                export const GlobalRegApi_META=new MetaApi<io.aether.api.serverRegistryApi.GlobalRegApi>(new MetaMethod(3,"setMasterKey",new MetaField<io.aether.common.Key>(io.aether.common.Key_META,"key")),new MetaMethod(4,"finish"));

                export const GlobalRegApiRoot_META=new MetaApi<io.aether.api.serverRegistryApi.GlobalRegApiRoot>(new MetaMethod(100,"setMode",new MetaField<io.aether.api.Mode>(io.aether.api.Mode_META,"mode")),new MetaMethodSubApi<io.aether.api.serverRegistryApi.GlobalRegApi>(5,"asymmetric",false,false,io.aether.api.serverRegistryApi.GlobalRegApi_META),new MetaMethod(1,"sendException",new MetaField<ExceptionUnit>(meta.ExceptionUnit,"unit")),new MetaMethodSubApi<io.aether.api.serverRegistryApi.GlobalRegApi>(4,"symmetric",false,false,io.aether.api.serverRegistryApi.GlobalRegApi_META),new MetaMethod(0,"sendResult",new MetaField<ResultUnit>(meta.ResultUnit,"unit")),new MetaMethod(99,"setCryptoLib",new MetaField<io.aether.common.CryptoLib>(io.aether.common.CryptoLib_META,"cryptoLib")));

                export const RegistrationResponse_META=new MetaTypeObject<io.aether.api.serverRegistryApi.RegistrationResponse>(io.aether.api.serverRegistryApi.RegistrationResponse,[[meta.UUID,"alias"],[meta.UUID,"uid"],[new MetaTypeArray(io.aether.common.ServerDescriptor_META),"cloud"]]);

                export const RegistrationRequest_META=new MetaTypeObject<io.aether.api.serverRegistryApi.RegistrationRequest>(io.aether.api.serverRegistryApi.RegistrationRequest,[[io.aether.common.Key_META,"masterKey"]]);

                export const PerformPowerBCryptApi_META=new MetaApi<io.aether.api.serverRegistryApi.PerformPowerBCryptApi>(new MetaMethod(1,"sendException",new MetaField<ExceptionUnit>(meta.ExceptionUnit,"unit")),new MetaMethodWithResult<io.aether.api.serverRegistryApi.WorkProofDTO>(2,"requestWorkProofData",io.aether.api.serverRegistryApi.WorkProofDTO_META,new MetaField<UUID>(meta.UUID,"parent"),new MetaField<io.aether.api.serverRegistryApi.PowMethod>(io.aether.api.serverRegistryApi.PowMethod_META,"powMethods"),new MetaField<io.aether.common.Key>(io.aether.common.Key_META,"key"),new MetaField<io.aether.common.CryptoLib>(io.aether.common.CryptoLib_META,"cryptoLib")),new MetaMethod(0,"sendResult",new MetaField<ResultUnit>(meta.ResultUnit,"unit")),new MetaMethodSubApi<io.aether.api.serverRegistryApi.GlobalRegApiRoot>(3,"registration",true,false,io.aether.api.serverRegistryApi.GlobalRegApiRoot_META,new MetaField<UUID>(meta.UUID,"parent"),new MetaField<string>(meta.String,"salt"),new MetaField<string>(meta.String,"suffix"),new MetaField<Array<Int32>>(meta.Int32Array,"passwords"),new MetaField<io.aether.common.Key>(io.aether.common.Key_META,"returnKey")),new MetaMethodWithResult<io.aether.api.serverRegistryApi.WorkProofDTO>(7,"requestWorkProofData2",io.aether.api.serverRegistryApi.WorkProofDTO_META,new MetaField<UUID>(meta.UUID,"parent"),new MetaField<io.aether.common.CryptoLib>(io.aether.common.CryptoLib_META,"cryptoLib")),new MetaMethodWithResult<io.aether.api.serverRegistryApi.RegistrationResponse>(4,"registrationWithUid",io.aether.api.serverRegistryApi.RegistrationResponse_META,new MetaField<UUID>(meta.UUID,"uid"),new MetaField<io.aether.api.serverRegistryApi.RegistrationRequest>(io.aether.api.serverRegistryApi.RegistrationRequest_META,"request")));

                export const RootApi_META=new MetaApi<io.aether.api.serverRegistryApi.RootApi>(new MetaMethod(100,"setMode",new MetaField<io.aether.api.Mode>(io.aether.api.Mode_META,"mode")),new MetaMethodSubApi<io.aether.api.serverRegistryApi.PerformPowerBCryptApi>(5,"asymmetric",false,false,io.aether.api.serverRegistryApi.PerformPowerBCryptApi_META),new MetaMethod(1,"sendException",new MetaField<ExceptionUnit>(meta.ExceptionUnit,"unit")),new MetaMethodSubApi<io.aether.api.serverRegistryApi.PerformPowerBCryptApi>(4,"symmetric",false,false,io.aether.api.serverRegistryApi.PerformPowerBCryptApi_META),new MetaMethod(0,"sendResult",new MetaField<ResultUnit>(meta.ResultUnit,"unit")),new MetaMethodWithResult<io.aether.common.SignedKey>(2,"getAsymmetricPublicKey",io.aether.common.SignedKey_META,new MetaField<io.aether.common.CryptoLib>(io.aether.common.CryptoLib_META,"cryptoLib")),new MetaMethod(99,"setCryptoLib",new MetaField<io.aether.common.CryptoLib>(io.aether.common.CryptoLib_META,"cryptoLib")));

                export class RegistrationResponseLite {
                    constructor(alias:UUID,uid:UUID,cloud:Array<io.aether.common.ServerDescriptorLite>){this.alias=alias;this.uid=uid;this.cloud=cloud;}
                    alias:UUID;
                    uid:UUID;
                    cloud:Array<io.aether.common.ServerDescriptorLite>;
                }

                export const RegistrationResponseLite_META=new MetaTypeObject<io.aether.api.serverRegistryApi.RegistrationResponseLite>(io.aether.api.serverRegistryApi.RegistrationResponseLite,[[meta.UUID,"alias"],[meta.UUID,"uid"],[new MetaTypeArray(io.aether.common.ServerDescriptorLite_META),"cloud"]]);
            }
        }
    }
}

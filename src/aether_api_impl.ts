import  {
    AFuture, ARFuture, DataIn, DataOut, DataInOut, DataInOutStatic, FastMetaType, MetaContext, FastMeta, SerializerPackNumber, DeserializerPackNumber, RemoteApi, FastMetaApi, FastFutureContextStub, UUID, URI, AString, BytesConverter,
}
from './aether_client';
import  {
    AetherCodec, ClientActivityType, CryptoLib, PowMethod, Status, AetherTypeDescriptor, IPAddress, Key, KeyAsymmetric, KeyAsymmetricPrivate, KeyAsymmetricPublic, KeySign, KeySignPrivate, KeySignPublic, KeySymmetric, PairKeys, Sign, Telemetry, WorkProofConfig, AccessCheckPair, AccessCheckResult, AccessGroup, AetherApiDefinition, AetherArgumentDescriptor, AetherArrayType, AetherBaseType, AetherFieldDescriptor, AetherMethodDescriptor, AetherModuleDescriptor, AetherNullableType, AetherStreamType, AetherStructDescriptor, AppliedConfig, ClientActivity, ClientConnectionInfo, ClientInfo, ClientLogEntry, ClientStateForSave, Cloud, CloudConfig, CloudWeight, CoderAndPort, FinishResult, HydrogenCurvePrivate, HydrogenCurvePublic, HydrogenSecretBox, HydrogenSignPrivate, HydrogenSignPublic, IPAddressAndPorts, IPAddressAndPortsList, IPAddressV4, IPAddressV6, IPAddressWeb, IpInfo, KeyValuePair, Message, MessageInfo, MoneyOperation, PairKeysAsym, PairKeysAsymSigned, PairKeysSign, ServerDescriptor, ServerDescriptorWithGeo, SignAE_ED25519, SignedKey, SignHYDROGEN, SodiumChacha20Poly1305, SodiumCurvePrivate, SodiumCurvePublic, SodiumSignPrivate, SodiumSignPublic, TelemetryCPP, Uap, UUIDAndCloud, WorkProofBCrypt, WorkProofDTO, ClientApiRegSafeStream, ClientApiStream, ClientInteractionClientStream, GlobalApiStream, GlobalRegClientApiStream, LoginClientStream, LoginStream, ServerRegistrationApiStream, ClientApiUnsafe, ClientApiSafe, AuthorizedApi, LoginApi, ServerApiByUidClient, ServerApiByUid, ClientApiRegSafe, GlobalRegClientApi, ClientApiRegUnsafe, GlobalRegServerApi, ServerRegistrationApi, RegistrationRootApi, ClientApiUnsafeRemote, ClientApiSafeRemote, AuthorizedApiRemote, LoginApiRemote, ServerApiByUidClientRemote, ServerApiByUidRemote, ClientApiRegSafeRemote, GlobalRegClientApiRemote, ClientApiRegUnsafeRemote, GlobalRegServerApiRemote, ServerRegistrationApiRemote, RegistrationRootApiRemote
}
from './aether_api';
// This is always relative
export class AetherCodecMetaImpl implements FastMetaType<AetherCodec>  {
    private readonly values = ['TCP', 'UDP', 'WS', 'WSS'];
    serialize(_sCtx: MetaContext, obj: AetherCodec, out: DataOut): void  {
        out.writeByte(this.values.indexOf(obj as string));
        
    }
    deserialize(_sCtx: MetaContext, in_: DataIn): AetherCodec  {
        const ordinal = in_.readUByte();
        if (ordinal < 0 || ordinal >= this.values.length) throw new Error(`Invalid ordinal $ {
            ordinal
        }
        for enum AetherCodec`);
        return this.values[ordinal] as AetherCodec;
        
    }
    metaHashCode(obj: AetherCodec | null | undefined): number  {
        return FastMeta.META_STRING.metaHashCode(obj as string);
        
    }
    metaEquals(v1: AetherCodec | null | undefined, v2: any | null | undefined): boolean  {
        return FastMeta.META_STRING.metaEquals(v1 as string, v2);
        
    }
    metaToString(obj: AetherCodec | null | undefined, res: AString): void  {
        res.add(obj as string);
        
    }
    public serializeToBytes(obj: AetherCodec): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AetherCodec  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AetherCodec  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientActivityTypeMetaImpl implements FastMetaType<ClientActivityType>  {
    private readonly values = ['CONNECT', 'DISCONNECT', 'MESSAGE_SEND', 'MESSAGE_RECEIVE', 'COMMAND_EXEC', 'API_CALL'];
    serialize(_sCtx: MetaContext, obj: ClientActivityType, out: DataOut): void  {
        out.writeByte(this.values.indexOf(obj as string));
        
    }
    deserialize(_sCtx: MetaContext, in_: DataIn): ClientActivityType  {
        const ordinal = in_.readUByte();
        if (ordinal < 0 || ordinal >= this.values.length) throw new Error(`Invalid ordinal $ {
            ordinal
        }
        for enum ClientActivityType`);
        return this.values[ordinal] as ClientActivityType;
        
    }
    metaHashCode(obj: ClientActivityType | null | undefined): number  {
        return FastMeta.META_STRING.metaHashCode(obj as string);
        
    }
    metaEquals(v1: ClientActivityType | null | undefined, v2: any | null | undefined): boolean  {
        return FastMeta.META_STRING.metaEquals(v1 as string, v2);
        
    }
    metaToString(obj: ClientActivityType | null | undefined, res: AString): void  {
        res.add(obj as string);
        
    }
    public serializeToBytes(obj: ClientActivityType): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientActivityType  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientActivityType  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class CryptoLibMetaImpl implements FastMetaType<CryptoLib>  {
    private readonly values = ['SODIUM', 'HYDROGEN'];
    serialize(_sCtx: MetaContext, obj: CryptoLib, out: DataOut): void  {
        out.writeByte(this.values.indexOf(obj as string));
        
    }
    deserialize(_sCtx: MetaContext, in_: DataIn): CryptoLib  {
        const ordinal = in_.readUByte();
        if (ordinal < 0 || ordinal >= this.values.length) throw new Error(`Invalid ordinal $ {
            ordinal
        }
        for enum CryptoLib`);
        return this.values[ordinal] as CryptoLib;
        
    }
    metaHashCode(obj: CryptoLib | null | undefined): number  {
        return FastMeta.META_STRING.metaHashCode(obj as string);
        
    }
    metaEquals(v1: CryptoLib | null | undefined, v2: any | null | undefined): boolean  {
        return FastMeta.META_STRING.metaEquals(v1 as string, v2);
        
    }
    metaToString(obj: CryptoLib | null | undefined, res: AString): void  {
        res.add(obj as string);
        
    }
    public serializeToBytes(obj: CryptoLib): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): CryptoLib  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): CryptoLib  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class PowMethodMetaImpl implements FastMetaType<PowMethod>  {
    private readonly values = ['AE_BCRYPT_CRC32'];
    serialize(_sCtx: MetaContext, obj: PowMethod, out: DataOut): void  {
        out.writeByte(this.values.indexOf(obj as string));
        
    }
    deserialize(_sCtx: MetaContext, in_: DataIn): PowMethod  {
        const ordinal = in_.readUByte();
        if (ordinal < 0 || ordinal >= this.values.length) throw new Error(`Invalid ordinal $ {
            ordinal
        }
        for enum PowMethod`);
        return this.values[ordinal] as PowMethod;
        
    }
    metaHashCode(obj: PowMethod | null | undefined): number  {
        return FastMeta.META_STRING.metaHashCode(obj as string);
        
    }
    metaEquals(v1: PowMethod | null | undefined, v2: any | null | undefined): boolean  {
        return FastMeta.META_STRING.metaEquals(v1 as string, v2);
        
    }
    metaToString(obj: PowMethod | null | undefined, res: AString): void  {
        res.add(obj as string);
        
    }
    public serializeToBytes(obj: PowMethod): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): PowMethod  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): PowMethod  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class StatusMetaImpl implements FastMetaType<Status>  {
    private readonly values = ['PENDING', 'COMPLETED', 'FAILED'];
    serialize(_sCtx: MetaContext, obj: Status, out: DataOut): void  {
        out.writeByte(this.values.indexOf(obj as string));
        
    }
    deserialize(_sCtx: MetaContext, in_: DataIn): Status  {
        const ordinal = in_.readUByte();
        if (ordinal < 0 || ordinal >= this.values.length) throw new Error(`Invalid ordinal $ {
            ordinal
        }
        for enum Status`);
        return this.values[ordinal] as Status;
        
    }
    metaHashCode(obj: Status | null | undefined): number  {
        return FastMeta.META_STRING.metaHashCode(obj as string);
        
    }
    metaEquals(v1: Status | null | undefined, v2: any | null | undefined): boolean  {
        return FastMeta.META_STRING.metaEquals(v1 as string, v2);
        
    }
    metaToString(obj: Status | null | undefined, res: AString): void  {
        res.add(obj as string);
        
    }
    public serializeToBytes(obj: Status): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): Status  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): Status  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AetherTypeDescriptorMetaImpl implements FastMetaType<AetherTypeDescriptor>  {
    serialize(sCtx_0: MetaContext, obj_1: AetherTypeDescriptor, _out_2: DataOut): void  {
        const typeId = typeof (obj_1 as any).getAetherTypeId === 'function' ? obj_1.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'AetherTypeDescriptor' with invalid type id $ {
            typeId
        }
        `);
        _out_2.writeByte(typeId);
        switch(typeId)  {
            case 1: (AetherBaseType as any).META_BODY.serialize(sCtx_0, obj_1 as any as AetherBaseType, _out_2);
            break;
            case 2: (AetherArrayType as any).META_BODY.serialize(sCtx_0, obj_1 as any as AetherArrayType, _out_2);
            break;
            case 3: (AetherStreamType as any).META_BODY.serialize(sCtx_0, obj_1 as any as AetherStreamType, _out_2);
            break;
            case 4: (AetherNullableType as any).META_BODY.serialize(sCtx_0, obj_1 as any as AetherNullableType, _out_2);
            break;
            default: throw new Error(`Cannot serialize 'AetherTypeDescriptor' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_0: MetaContext, in__3: DataIn): AetherTypeDescriptor  {
        const typeId = in__3.readUByte();
        switch(typeId)  {
            case 1: return (AetherBaseType as any).META_BODY.deserialize(sCtx_0, in__3) as any as AetherTypeDescriptor;
            case 2: return (AetherArrayType as any).META_BODY.deserialize(sCtx_0, in__3) as any as AetherTypeDescriptor;
            case 3: return (AetherStreamType as any).META_BODY.deserialize(sCtx_0, in__3) as any as AetherTypeDescriptor;
            case 4: return (AetherNullableType as any).META_BODY.deserialize(sCtx_0, in__3) as any as AetherTypeDescriptor;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'AetherTypeDescriptor'`);
            
        }
        
    }
    metaHashCode(obj: AetherTypeDescriptor | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: return (AetherBaseType as any).META.metaHashCode(obj as any as AetherBaseType);
            case 2: return (AetherArrayType as any).META.metaHashCode(obj as any as AetherArrayType);
            case 3: return (AetherStreamType as any).META.metaHashCode(obj as any as AetherStreamType);
            case 4: return (AetherNullableType as any).META.metaHashCode(obj as any as AetherNullableType);
            default: throw new Error(`Cannot hashCode 'AetherTypeDescriptor' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: AetherTypeDescriptor | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 1: return (AetherBaseType as any).META.metaEquals(v1 as any as AetherBaseType, v2);
            case 2: return (AetherArrayType as any).META.metaEquals(v1 as any as AetherArrayType, v2);
            case 3: return (AetherStreamType as any).META.metaEquals(v1 as any as AetherStreamType, v2);
            case 4: return (AetherNullableType as any).META.metaEquals(v1 as any as AetherNullableType, v2);
            default: throw new Error(`Cannot equals 'AetherTypeDescriptor' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: AetherTypeDescriptor | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: (AetherBaseType as any).META.metaToString(obj as any as AetherBaseType, res);
            break;
            case 2: (AetherArrayType as any).META.metaToString(obj as any as AetherArrayType, res);
            break;
            case 3: (AetherStreamType as any).META.metaToString(obj as any as AetherStreamType, res);
            break;
            case 4: (AetherNullableType as any).META.metaToString(obj as any as AetherNullableType, res);
            break;
            default: throw new Error(`Cannot toString 'AetherTypeDescriptor' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: AetherTypeDescriptor): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AetherTypeDescriptor  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AetherTypeDescriptor  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class IPAddressMetaImpl implements FastMetaType<IPAddress>  {
    serialize(sCtx_4: MetaContext, obj_5: IPAddress, _out_6: DataOut): void  {
        const typeId = typeof (obj_5 as any).getAetherTypeId === 'function' ? obj_5.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'IPAddress' with invalid type id $ {
            typeId
        }
        `);
        _out_6.writeByte(typeId);
        switch(typeId)  {
            case 1: (IPAddressV4 as any).META_BODY.serialize(sCtx_4, obj_5 as any as IPAddressV4, _out_6);
            break;
            case 2: (IPAddressV6 as any).META_BODY.serialize(sCtx_4, obj_5 as any as IPAddressV6, _out_6);
            break;
            case 3: (IPAddressWeb as any).META_BODY.serialize(sCtx_4, obj_5 as any as IPAddressWeb, _out_6);
            break;
            default: throw new Error(`Cannot serialize 'IPAddress' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_4: MetaContext, in__7: DataIn): IPAddress  {
        const typeId = in__7.readUByte();
        switch(typeId)  {
            case 1: return (IPAddressV4 as any).META_BODY.deserialize(sCtx_4, in__7) as any as IPAddress;
            case 2: return (IPAddressV6 as any).META_BODY.deserialize(sCtx_4, in__7) as any as IPAddress;
            case 3: return (IPAddressWeb as any).META_BODY.deserialize(sCtx_4, in__7) as any as IPAddress;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'IPAddress'`);
            
        }
        
    }
    metaHashCode(obj: IPAddress | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: return (IPAddressV4 as any).META.metaHashCode(obj as any as IPAddressV4);
            case 2: return (IPAddressV6 as any).META.metaHashCode(obj as any as IPAddressV6);
            case 3: return (IPAddressWeb as any).META.metaHashCode(obj as any as IPAddressWeb);
            default: throw new Error(`Cannot hashCode 'IPAddress' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: IPAddress | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 1: return (IPAddressV4 as any).META.metaEquals(v1 as any as IPAddressV4, v2);
            case 2: return (IPAddressV6 as any).META.metaEquals(v1 as any as IPAddressV6, v2);
            case 3: return (IPAddressWeb as any).META.metaEquals(v1 as any as IPAddressWeb, v2);
            default: throw new Error(`Cannot equals 'IPAddress' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: IPAddress | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: (IPAddressV4 as any).META.metaToString(obj as any as IPAddressV4, res);
            break;
            case 2: (IPAddressV6 as any).META.metaToString(obj as any as IPAddressV6, res);
            break;
            case 3: (IPAddressWeb as any).META.metaToString(obj as any as IPAddressWeb, res);
            break;
            default: throw new Error(`Cannot toString 'IPAddress' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: IPAddress): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): IPAddress  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): IPAddress  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class KeyMetaImpl implements FastMetaType<Key>  {
    serialize(sCtx_8: MetaContext, obj_9: Key, _out_10: DataOut): void  {
        const typeId = typeof (obj_9 as any).getAetherTypeId === 'function' ? obj_9.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'Key' with invalid type id $ {
            typeId
        }
        `);
        _out_10.writeByte(typeId);
        switch(typeId)  {
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_8, obj_9 as any as SodiumChacha20Poly1305, _out_10);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_8, obj_9 as any as HydrogenSecretBox, _out_10);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_8, obj_9 as any as HydrogenCurvePublic, _out_10);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_8, obj_9 as any as SodiumCurvePublic, _out_10);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_8, obj_9 as any as HydrogenCurvePrivate, _out_10);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_8, obj_9 as any as SodiumCurvePrivate, _out_10);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_8, obj_9 as any as SodiumSignPublic, _out_10);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_8, obj_9 as any as HydrogenSignPublic, _out_10);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_8, obj_9 as any as SodiumSignPrivate, _out_10);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_8, obj_9 as any as HydrogenSignPrivate, _out_10);
            break;
            default: throw new Error(`Cannot serialize 'Key' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_8: MetaContext, in__11: DataIn): Key  {
        const typeId = in__11.readUByte();
        switch(typeId)  {
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_8, in__11) as any as Key;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_8, in__11) as any as Key;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_8, in__11) as any as Key;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_8, in__11) as any as Key;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_8, in__11) as any as Key;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_8, in__11) as any as Key;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_8, in__11) as any as Key;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_8, in__11) as any as Key;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_8, in__11) as any as Key;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_8, in__11) as any as Key;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'Key'`);
            
        }
        
    }
    metaHashCode(obj: Key | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 6: return (SodiumChacha20Poly1305 as any).META.metaHashCode(obj as any as SodiumChacha20Poly1305);
            case 3: return (HydrogenSecretBox as any).META.metaHashCode(obj as any as HydrogenSecretBox);
            case 2: return (HydrogenCurvePublic as any).META.metaHashCode(obj as any as HydrogenCurvePublic);
            case 8: return (SodiumCurvePublic as any).META.metaHashCode(obj as any as SodiumCurvePublic);
            case 1: return (HydrogenCurvePrivate as any).META.metaHashCode(obj as any as HydrogenCurvePrivate);
            case 7: return (SodiumCurvePrivate as any).META.metaHashCode(obj as any as SodiumCurvePrivate);
            case 10: return (SodiumSignPublic as any).META.metaHashCode(obj as any as SodiumSignPublic);
            case 5: return (HydrogenSignPublic as any).META.metaHashCode(obj as any as HydrogenSignPublic);
            case 9: return (SodiumSignPrivate as any).META.metaHashCode(obj as any as SodiumSignPrivate);
            case 4: return (HydrogenSignPrivate as any).META.metaHashCode(obj as any as HydrogenSignPrivate);
            default: throw new Error(`Cannot hashCode 'Key' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: Key | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 6: return (SodiumChacha20Poly1305 as any).META.metaEquals(v1 as any as SodiumChacha20Poly1305, v2);
            case 3: return (HydrogenSecretBox as any).META.metaEquals(v1 as any as HydrogenSecretBox, v2);
            case 2: return (HydrogenCurvePublic as any).META.metaEquals(v1 as any as HydrogenCurvePublic, v2);
            case 8: return (SodiumCurvePublic as any).META.metaEquals(v1 as any as SodiumCurvePublic, v2);
            case 1: return (HydrogenCurvePrivate as any).META.metaEquals(v1 as any as HydrogenCurvePrivate, v2);
            case 7: return (SodiumCurvePrivate as any).META.metaEquals(v1 as any as SodiumCurvePrivate, v2);
            case 10: return (SodiumSignPublic as any).META.metaEquals(v1 as any as SodiumSignPublic, v2);
            case 5: return (HydrogenSignPublic as any).META.metaEquals(v1 as any as HydrogenSignPublic, v2);
            case 9: return (SodiumSignPrivate as any).META.metaEquals(v1 as any as SodiumSignPrivate, v2);
            case 4: return (HydrogenSignPrivate as any).META.metaEquals(v1 as any as HydrogenSignPrivate, v2);
            default: throw new Error(`Cannot equals 'Key' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: Key | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 6: (SodiumChacha20Poly1305 as any).META.metaToString(obj as any as SodiumChacha20Poly1305, res);
            break;
            case 3: (HydrogenSecretBox as any).META.metaToString(obj as any as HydrogenSecretBox, res);
            break;
            case 2: (HydrogenCurvePublic as any).META.metaToString(obj as any as HydrogenCurvePublic, res);
            break;
            case 8: (SodiumCurvePublic as any).META.metaToString(obj as any as SodiumCurvePublic, res);
            break;
            case 1: (HydrogenCurvePrivate as any).META.metaToString(obj as any as HydrogenCurvePrivate, res);
            break;
            case 7: (SodiumCurvePrivate as any).META.metaToString(obj as any as SodiumCurvePrivate, res);
            break;
            case 10: (SodiumSignPublic as any).META.metaToString(obj as any as SodiumSignPublic, res);
            break;
            case 5: (HydrogenSignPublic as any).META.metaToString(obj as any as HydrogenSignPublic, res);
            break;
            case 9: (SodiumSignPrivate as any).META.metaToString(obj as any as SodiumSignPrivate, res);
            break;
            case 4: (HydrogenSignPrivate as any).META.metaToString(obj as any as HydrogenSignPrivate, res);
            break;
            default: throw new Error(`Cannot toString 'Key' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: Key): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): Key  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): Key  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class KeyAsymmetricMetaImpl implements FastMetaType<KeyAsymmetric>  {
    serialize(sCtx_12: MetaContext, obj_14: KeyAsymmetric, _out_15: DataOut): void  {
        const typeId = typeof (obj_14 as any).getAetherTypeId === 'function' ? obj_14.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeyAsymmetric' with invalid type id $ {
            typeId
        }
        `);
        _out_15.writeByte(typeId);
        switch(typeId)  {
            default: throw new Error(`Cannot serialize 'KeyAsymmetric' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_13: MetaContext, in__16: DataIn): KeyAsymmetric  {
        const typeId = in__16.readUByte();
        switch(typeId)  {
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'KeyAsymmetric'`);
            
        }
        
    }
    metaHashCode(obj: KeyAsymmetric | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            default: throw new Error(`Cannot hashCode 'KeyAsymmetric' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: KeyAsymmetric | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            default: throw new Error(`Cannot equals 'KeyAsymmetric' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: KeyAsymmetric | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            default: throw new Error(`Cannot toString 'KeyAsymmetric' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: KeyAsymmetric): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): KeyAsymmetric  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): KeyAsymmetric  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class KeyAsymmetricPrivateMetaImpl implements FastMetaType<KeyAsymmetricPrivate>  {
    serialize(sCtx_17: MetaContext, obj_19: KeyAsymmetricPrivate, _out_20: DataOut): void  {
        const typeId = typeof (obj_19 as any).getAetherTypeId === 'function' ? obj_19.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeyAsymmetricPrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_20.writeByte(typeId);
        switch(typeId)  {
            default: throw new Error(`Cannot serialize 'KeyAsymmetricPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_18: MetaContext, in__21: DataIn): KeyAsymmetricPrivate  {
        const typeId = in__21.readUByte();
        switch(typeId)  {
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'KeyAsymmetricPrivate'`);
            
        }
        
    }
    metaHashCode(obj: KeyAsymmetricPrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            default: throw new Error(`Cannot hashCode 'KeyAsymmetricPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: KeyAsymmetricPrivate | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            default: throw new Error(`Cannot equals 'KeyAsymmetricPrivate' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: KeyAsymmetricPrivate | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            default: throw new Error(`Cannot toString 'KeyAsymmetricPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: KeyAsymmetricPrivate): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): KeyAsymmetricPrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): KeyAsymmetricPrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class KeyAsymmetricPublicMetaImpl implements FastMetaType<KeyAsymmetricPublic>  {
    serialize(sCtx_22: MetaContext, obj_24: KeyAsymmetricPublic, _out_25: DataOut): void  {
        const typeId = typeof (obj_24 as any).getAetherTypeId === 'function' ? obj_24.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeyAsymmetricPublic' with invalid type id $ {
            typeId
        }
        `);
        _out_25.writeByte(typeId);
        switch(typeId)  {
            default: throw new Error(`Cannot serialize 'KeyAsymmetricPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_23: MetaContext, in__26: DataIn): KeyAsymmetricPublic  {
        const typeId = in__26.readUByte();
        switch(typeId)  {
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'KeyAsymmetricPublic'`);
            
        }
        
    }
    metaHashCode(obj: KeyAsymmetricPublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            default: throw new Error(`Cannot hashCode 'KeyAsymmetricPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: KeyAsymmetricPublic | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            default: throw new Error(`Cannot equals 'KeyAsymmetricPublic' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: KeyAsymmetricPublic | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            default: throw new Error(`Cannot toString 'KeyAsymmetricPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: KeyAsymmetricPublic): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): KeyAsymmetricPublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): KeyAsymmetricPublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class KeySignMetaImpl implements FastMetaType<KeySign>  {
    serialize(sCtx_27: MetaContext, obj_29: KeySign, _out_30: DataOut): void  {
        const typeId = typeof (obj_29 as any).getAetherTypeId === 'function' ? obj_29.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeySign' with invalid type id $ {
            typeId
        }
        `);
        _out_30.writeByte(typeId);
        switch(typeId)  {
            default: throw new Error(`Cannot serialize 'KeySign' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_28: MetaContext, in__31: DataIn): KeySign  {
        const typeId = in__31.readUByte();
        switch(typeId)  {
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'KeySign'`);
            
        }
        
    }
    metaHashCode(obj: KeySign | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            default: throw new Error(`Cannot hashCode 'KeySign' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: KeySign | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            default: throw new Error(`Cannot equals 'KeySign' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: KeySign | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            default: throw new Error(`Cannot toString 'KeySign' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: KeySign): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): KeySign  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): KeySign  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class KeySignPrivateMetaImpl implements FastMetaType<KeySignPrivate>  {
    serialize(sCtx_32: MetaContext, obj_34: KeySignPrivate, _out_35: DataOut): void  {
        const typeId = typeof (obj_34 as any).getAetherTypeId === 'function' ? obj_34.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeySignPrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_35.writeByte(typeId);
        switch(typeId)  {
            default: throw new Error(`Cannot serialize 'KeySignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_33: MetaContext, in__36: DataIn): KeySignPrivate  {
        const typeId = in__36.readUByte();
        switch(typeId)  {
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'KeySignPrivate'`);
            
        }
        
    }
    metaHashCode(obj: KeySignPrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            default: throw new Error(`Cannot hashCode 'KeySignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: KeySignPrivate | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            default: throw new Error(`Cannot equals 'KeySignPrivate' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: KeySignPrivate | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            default: throw new Error(`Cannot toString 'KeySignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: KeySignPrivate): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): KeySignPrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): KeySignPrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class KeySignPublicMetaImpl implements FastMetaType<KeySignPublic>  {
    serialize(sCtx_37: MetaContext, obj_39: KeySignPublic, _out_40: DataOut): void  {
        const typeId = typeof (obj_39 as any).getAetherTypeId === 'function' ? obj_39.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeySignPublic' with invalid type id $ {
            typeId
        }
        `);
        _out_40.writeByte(typeId);
        switch(typeId)  {
            default: throw new Error(`Cannot serialize 'KeySignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_38: MetaContext, in__41: DataIn): KeySignPublic  {
        const typeId = in__41.readUByte();
        switch(typeId)  {
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'KeySignPublic'`);
            
        }
        
    }
    metaHashCode(obj: KeySignPublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            default: throw new Error(`Cannot hashCode 'KeySignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: KeySignPublic | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            default: throw new Error(`Cannot equals 'KeySignPublic' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: KeySignPublic | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            default: throw new Error(`Cannot toString 'KeySignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: KeySignPublic): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): KeySignPublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): KeySignPublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class KeySymmetricMetaImpl implements FastMetaType<KeySymmetric>  {
    serialize(sCtx_42: MetaContext, obj_44: KeySymmetric, _out_45: DataOut): void  {
        const typeId = typeof (obj_44 as any).getAetherTypeId === 'function' ? obj_44.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeySymmetric' with invalid type id $ {
            typeId
        }
        `);
        _out_45.writeByte(typeId);
        switch(typeId)  {
            default: throw new Error(`Cannot serialize 'KeySymmetric' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_43: MetaContext, in__46: DataIn): KeySymmetric  {
        const typeId = in__46.readUByte();
        switch(typeId)  {
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'KeySymmetric'`);
            
        }
        
    }
    metaHashCode(obj: KeySymmetric | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            default: throw new Error(`Cannot hashCode 'KeySymmetric' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: KeySymmetric | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            default: throw new Error(`Cannot equals 'KeySymmetric' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: KeySymmetric | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            default: throw new Error(`Cannot toString 'KeySymmetric' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: KeySymmetric): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): KeySymmetric  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): KeySymmetric  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class PairKeysMetaImpl implements FastMetaType<PairKeys>  {
    serialize(sCtx_47: MetaContext, obj_48: PairKeys, _out_49: DataOut): void  {
        const typeId = typeof (obj_48 as any).getAetherTypeId === 'function' ? obj_48.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeys' with invalid type id $ {
            typeId
        }
        `);
        _out_49.writeByte(typeId);
        switch(typeId)  {
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_47, obj_48 as any as PairKeysSign, _out_49);
            break;
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_47, obj_48 as any as PairKeysAsym, _out_49);
            break;
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_47, obj_48 as any as PairKeysAsymSigned, _out_49);
            break;
            default: throw new Error(`Cannot serialize 'PairKeys' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_47: MetaContext, in__50: DataIn): PairKeys  {
        const typeId = in__50.readUByte();
        switch(typeId)  {
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_47, in__50) as any as PairKeys;
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_47, in__50) as any as PairKeys;
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_47, in__50) as any as PairKeys;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'PairKeys'`);
            
        }
        
    }
    metaHashCode(obj: PairKeys | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 3: return (PairKeysSign as any).META.metaHashCode(obj as any as PairKeysSign);
            case 1: return (PairKeysAsym as any).META.metaHashCode(obj as any as PairKeysAsym);
            case 2: return (PairKeysAsymSigned as any).META.metaHashCode(obj as any as PairKeysAsymSigned);
            default: throw new Error(`Cannot hashCode 'PairKeys' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: PairKeys | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 3: return (PairKeysSign as any).META.metaEquals(v1 as any as PairKeysSign, v2);
            case 1: return (PairKeysAsym as any).META.metaEquals(v1 as any as PairKeysAsym, v2);
            case 2: return (PairKeysAsymSigned as any).META.metaEquals(v1 as any as PairKeysAsymSigned, v2);
            default: throw new Error(`Cannot equals 'PairKeys' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: PairKeys | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 3: (PairKeysSign as any).META.metaToString(obj as any as PairKeysSign, res);
            break;
            case 1: (PairKeysAsym as any).META.metaToString(obj as any as PairKeysAsym, res);
            break;
            case 2: (PairKeysAsymSigned as any).META.metaToString(obj as any as PairKeysAsymSigned, res);
            break;
            default: throw new Error(`Cannot toString 'PairKeys' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: PairKeys): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): PairKeys  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): PairKeys  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SignMetaImpl implements FastMetaType<Sign>  {
    serialize(sCtx_51: MetaContext, obj_52: Sign, _out_53: DataOut): void  {
        const typeId = typeof (obj_52 as any).getAetherTypeId === 'function' ? obj_52.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'Sign' with invalid type id $ {
            typeId
        }
        `);
        _out_53.writeByte(typeId);
        switch(typeId)  {
            case 1: (SignAE_ED25519 as any).META_BODY.serialize(sCtx_51, obj_52 as any as SignAE_ED25519, _out_53);
            break;
            case 2: (SignHYDROGEN as any).META_BODY.serialize(sCtx_51, obj_52 as any as SignHYDROGEN, _out_53);
            break;
            default: throw new Error(`Cannot serialize 'Sign' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_51: MetaContext, in__54: DataIn): Sign  {
        const typeId = in__54.readUByte();
        switch(typeId)  {
            case 1: return (SignAE_ED25519 as any).META_BODY.deserialize(sCtx_51, in__54) as any as Sign;
            case 2: return (SignHYDROGEN as any).META_BODY.deserialize(sCtx_51, in__54) as any as Sign;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'Sign'`);
            
        }
        
    }
    metaHashCode(obj: Sign | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: return (SignAE_ED25519 as any).META.metaHashCode(obj as any as SignAE_ED25519);
            case 2: return (SignHYDROGEN as any).META.metaHashCode(obj as any as SignHYDROGEN);
            default: throw new Error(`Cannot hashCode 'Sign' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: Sign | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 1: return (SignAE_ED25519 as any).META.metaEquals(v1 as any as SignAE_ED25519, v2);
            case 2: return (SignHYDROGEN as any).META.metaEquals(v1 as any as SignHYDROGEN, v2);
            default: throw new Error(`Cannot equals 'Sign' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: Sign | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: (SignAE_ED25519 as any).META.metaToString(obj as any as SignAE_ED25519, res);
            break;
            case 2: (SignHYDROGEN as any).META.metaToString(obj as any as SignHYDROGEN, res);
            break;
            default: throw new Error(`Cannot toString 'Sign' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: Sign): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): Sign  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): Sign  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class TelemetryMetaImpl implements FastMetaType<Telemetry>  {
    serialize(sCtx_55: MetaContext, obj_56: Telemetry, _out_57: DataOut): void  {
        const typeId = typeof (obj_56 as any).getAetherTypeId === 'function' ? obj_56.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'Telemetry' with invalid type id $ {
            typeId
        }
        `);
        _out_57.writeByte(typeId);
        switch(typeId)  {
            case 1: (TelemetryCPP as any).META_BODY.serialize(sCtx_55, obj_56 as any as TelemetryCPP, _out_57);
            break;
            default: throw new Error(`Cannot serialize 'Telemetry' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_55: MetaContext, in__58: DataIn): Telemetry  {
        const typeId = in__58.readUByte();
        switch(typeId)  {
            case 1: return (TelemetryCPP as any).META_BODY.deserialize(sCtx_55, in__58) as any as Telemetry;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'Telemetry'`);
            
        }
        
    }
    metaHashCode(obj: Telemetry | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: return (TelemetryCPP as any).META.metaHashCode(obj as any as TelemetryCPP);
            default: throw new Error(`Cannot hashCode 'Telemetry' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: Telemetry | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 1: return (TelemetryCPP as any).META.metaEquals(v1 as any as TelemetryCPP, v2);
            default: throw new Error(`Cannot equals 'Telemetry' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: Telemetry | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: (TelemetryCPP as any).META.metaToString(obj as any as TelemetryCPP, res);
            break;
            default: throw new Error(`Cannot toString 'Telemetry' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: Telemetry): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): Telemetry  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): Telemetry  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class WorkProofConfigMetaImpl implements FastMetaType<WorkProofConfig>  {
    serialize(sCtx_59: MetaContext, obj_60: WorkProofConfig, _out_61: DataOut): void  {
        const typeId = typeof (obj_60 as any).getAetherTypeId === 'function' ? obj_60.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'WorkProofConfig' with invalid type id $ {
            typeId
        }
        `);
        _out_61.writeByte(typeId);
        switch(typeId)  {
            case 1: (WorkProofBCrypt as any).META_BODY.serialize(sCtx_59, obj_60 as any as WorkProofBCrypt, _out_61);
            break;
            default: throw new Error(`Cannot serialize 'WorkProofConfig' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_59: MetaContext, in__62: DataIn): WorkProofConfig  {
        const typeId = in__62.readUByte();
        switch(typeId)  {
            case 1: return (WorkProofBCrypt as any).META_BODY.deserialize(sCtx_59, in__62) as any as WorkProofConfig;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'WorkProofConfig'`);
            
        }
        
    }
    metaHashCode(obj: WorkProofConfig | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: return (WorkProofBCrypt as any).META.metaHashCode(obj as any as WorkProofBCrypt);
            default: throw new Error(`Cannot hashCode 'WorkProofConfig' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: WorkProofConfig | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 1: return (WorkProofBCrypt as any).META.metaEquals(v1 as any as WorkProofBCrypt, v2);
            default: throw new Error(`Cannot equals 'WorkProofConfig' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: WorkProofConfig | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: (WorkProofBCrypt as any).META.metaToString(obj as any as WorkProofBCrypt, res);
            break;
            default: throw new Error(`Cannot toString 'WorkProofConfig' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: WorkProofConfig): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): WorkProofConfig  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): WorkProofConfig  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AccessCheckPairMetaBodyImpl implements FastMetaType<AccessCheckPair>  {
    serialize(sCtx_63: MetaContext, obj_64: AccessCheckPair, _out_65: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_63, obj_64.sourceUid, _out_65);
        FastMeta.META_UUID.serialize(sCtx_63, obj_64.targetUid, _out_65);
        
    }
    deserialize(sCtx_63: MetaContext, in__66: DataIn): AccessCheckPair  {
        let sourceUid_67: UUID;
        let targetUid_68: UUID;
        sourceUid_67 = FastMeta.META_UUID.deserialize(sCtx_63, in__66);
        targetUid_68 = FastMeta.META_UUID.deserialize(sCtx_63, in__66);
        return new AccessCheckPair(sourceUid_67, targetUid_68);
        
    }
    metaHashCode(obj: AccessCheckPair | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.sourceUid);
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.targetUid);
        return hash | 0;
        
    }
    metaEquals(v1: AccessCheckPair | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AccessCheckPair)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.sourceUid, v2.sourceUid)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.targetUid, v2.targetUid)) return false;
        return true;
        
    }
    metaToString(obj: AccessCheckPair | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AccessCheckPair(');
        res.add('sourceUid:').add(obj.sourceUid);
        res.add(', ');
        res.add('targetUid:').add(obj.targetUid);
        res.add(')');
        
    }
    public serializeToBytes(obj: AccessCheckPair): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AccessCheckPair  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AccessCheckPair  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AccessCheckResultMetaBodyImpl implements FastMetaType<AccessCheckResult>  {
    serialize(sCtx_69: MetaContext, obj_70: AccessCheckResult, _out_71: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_69, obj_70.sourceUid, _out_71);
        FastMeta.META_UUID.serialize(sCtx_69, obj_70.targetUid, _out_71);
        _out_71.writeBoolean(obj_70.hasAccess);
        
    }
    deserialize(sCtx_69: MetaContext, in__72: DataIn): AccessCheckResult  {
        let sourceUid_73: UUID;
        let targetUid_74: UUID;
        let hasAccess_75: boolean;
        sourceUid_73 = FastMeta.META_UUID.deserialize(sCtx_69, in__72);
        targetUid_74 = FastMeta.META_UUID.deserialize(sCtx_69, in__72);
        hasAccess_75 = in__72.readBoolean();
        return new AccessCheckResult(sourceUid_73, targetUid_74, hasAccess_75);
        
    }
    metaHashCode(obj: AccessCheckResult | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.sourceUid);
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.targetUid);
        hash = 37 * hash + FastMeta.META_BOOLEAN.metaHashCode(obj.hasAccess);
        return hash | 0;
        
    }
    metaEquals(v1: AccessCheckResult | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AccessCheckResult)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.sourceUid, v2.sourceUid)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.targetUid, v2.targetUid)) return false;
        if (!FastMeta.META_BOOLEAN.metaEquals(v1.hasAccess, v2.hasAccess)) return false;
        return true;
        
    }
    metaToString(obj: AccessCheckResult | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AccessCheckResult(');
        res.add('sourceUid:').add(obj.sourceUid);
        res.add(', ');
        res.add('targetUid:').add(obj.targetUid);
        res.add(', ');
        res.add('hasAccess:').add(obj.hasAccess);
        res.add(')');
        
    }
    public serializeToBytes(obj: AccessCheckResult): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AccessCheckResult  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AccessCheckResult  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AccessGroupMetaBodyImpl implements FastMetaType<AccessGroup>  {
    serialize(sCtx_76: MetaContext, obj_77: AccessGroup, _out_78: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_76, obj_77.owner, _out_78);
        _out_78.writeLong(obj_77.id);
        SerializerPackNumber.INSTANCE.put(_out_78, obj_77.data.length);
        for (const el_80 of obj_77.data)  {
            FastMeta.META_UUID.serialize(sCtx_76, el_80, _out_78);
            
        }
        
    }
    deserialize(sCtx_76: MetaContext, in__79: DataIn): AccessGroup  {
        let owner_81: UUID;
        let id_82: bigint;
        let data_83: UUID[];
        owner_81 = FastMeta.META_UUID.deserialize(sCtx_76, in__79);
        id_82 = in__79.readLong();
        const len_85 = Number(DeserializerPackNumber.INSTANCE.put(in__79));
        data_83 = new Array<UUID>(len_85);
        for (let idx_84 = 0;
        idx_84 < len_85;
        idx_84++)  {
            data_83[idx_84] = FastMeta.META_UUID.deserialize(sCtx_76, in__79);
            
        }
        return new AccessGroup(owner_81, id_82, data_83);
        
    }
    metaHashCode(obj: AccessGroup | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.owner);
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.id);
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: AccessGroup | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AccessGroup)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.owner, v2.owner)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.id, v2.id)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: AccessGroup | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AccessGroup(');
        res.add('owner:').add(obj.owner);
        res.add(', ');
        res.add('id:').add(obj.id);
        res.add(', ');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: AccessGroup): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AccessGroup  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AccessGroup  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AetherApiDefinitionMetaBodyImpl implements FastMetaType<AetherApiDefinition>  {
    serialize(sCtx_86: MetaContext, obj_87: AetherApiDefinition, _out_88: DataOut): void  {
        let _mask: number = 0;
        if (obj_87.docId === null) _mask |= 1;
        _out_88.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_88, obj_87.id);
        SerializerPackNumber.INSTANCE.put(_out_88, obj_87.nameId);
        SerializerPackNumber.INSTANCE.put(_out_88, obj_87.methods.length);
        for (const el_90 of obj_87.methods)  {
            AetherMethodDescriptor.META.serialize(sCtx_86, el_90, _out_88);
            
        }
        if (obj_87.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_88, obj_87.docId);
            
        }
        
    }
    deserialize(sCtx_86: MetaContext, in__89: DataIn): AetherApiDefinition  {
        let id_91: bigint;
        let nameId_92: bigint;
        let methods_93: AetherMethodDescriptor[];
        let docId_94: bigint | null;
        const _mask = in__89.readByte();
        id_91 = DeserializerPackNumber.INSTANCE.put(in__89);
        nameId_92 = DeserializerPackNumber.INSTANCE.put(in__89);
        const len_96 = Number(DeserializerPackNumber.INSTANCE.put(in__89));
        methods_93 = new Array<AetherMethodDescriptor>(len_96);
        for (let idx_95 = 0;
        idx_95 < len_96;
        idx_95++)  {
            methods_93[idx_95] = AetherMethodDescriptor.META.deserialize(sCtx_86, in__89);
            
        }
        if (((_mask & 1) === 0))  {
            docId_94 = DeserializerPackNumber.INSTANCE.put(in__89);
            
        }
        else  {
            docId_94 = null;
            
        }
        return new AetherApiDefinition(id_91, nameId_92, methods_93, docId_94);
        
    }
    metaHashCode(obj: AetherApiDefinition | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.id);
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.nameId);
        hash = 37 * hash + FastMeta.getMetaArray(AetherMethodDescriptor.META).metaHashCode(obj.methods);
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.docId);
        return hash | 0;
        
    }
    metaEquals(v1: AetherApiDefinition | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AetherApiDefinition)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.id, v2.id)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.nameId, v2.nameId)) return false;
        if (!FastMeta.getMetaArray(AetherMethodDescriptor.META).metaEquals(v1.methods, v2.methods)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.docId, v2.docId)) return false;
        return true;
        
    }
    metaToString(obj: AetherApiDefinition | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AetherApiDefinition(');
        res.add('id:').add(obj.id);
        res.add(', ');
        res.add('nameId:').add(obj.nameId);
        res.add(', ');
        res.add('methods:').add(obj.methods);
        res.add(', ');
        res.add('docId:').add(obj.docId);
        res.add(')');
        
    }
    public serializeToBytes(obj: AetherApiDefinition): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AetherApiDefinition  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AetherApiDefinition  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AetherArgumentDescriptorMetaBodyImpl implements FastMetaType<AetherArgumentDescriptor>  {
    serialize(sCtx_97: MetaContext, obj_98: AetherArgumentDescriptor, _out_99: DataOut): void  {
        let _mask: number = 0;
        if (obj_98.docId === null) _mask |= 1;
        _out_99.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_99, obj_98.nameId);
        SerializerPackNumber.INSTANCE.put(_out_99, obj_98.typeId);
        if (obj_98.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_99, obj_98.docId);
            
        }
        
    }
    deserialize(sCtx_97: MetaContext, in__100: DataIn): AetherArgumentDescriptor  {
        let nameId_101: bigint;
        let typeId_102: bigint;
        let docId_103: bigint | null;
        const _mask = in__100.readByte();
        nameId_101 = DeserializerPackNumber.INSTANCE.put(in__100);
        typeId_102 = DeserializerPackNumber.INSTANCE.put(in__100);
        if (((_mask & 1) === 0))  {
            docId_103 = DeserializerPackNumber.INSTANCE.put(in__100);
            
        }
        else  {
            docId_103 = null;
            
        }
        return new AetherArgumentDescriptor(nameId_101, typeId_102, docId_103);
        
    }
    metaHashCode(obj: AetherArgumentDescriptor | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.nameId);
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.typeId);
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.docId);
        return hash | 0;
        
    }
    metaEquals(v1: AetherArgumentDescriptor | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AetherArgumentDescriptor)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.nameId, v2.nameId)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.typeId, v2.typeId)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.docId, v2.docId)) return false;
        return true;
        
    }
    metaToString(obj: AetherArgumentDescriptor | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AetherArgumentDescriptor(');
        res.add('nameId:').add(obj.nameId);
        res.add(', ');
        res.add('typeId:').add(obj.typeId);
        res.add(', ');
        res.add('docId:').add(obj.docId);
        res.add(')');
        
    }
    public serializeToBytes(obj: AetherArgumentDescriptor): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AetherArgumentDescriptor  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AetherArgumentDescriptor  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AetherArrayTypeMetaBodyImpl implements FastMetaType<AetherArrayType>  {
    serialize(sCtx_104: MetaContext, obj_105: AetherArrayType, _out_106: DataOut): void  {
        let _mask: number = 0;
        if (obj_105.docId === null) _mask |= 1;
        _out_106.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_106, obj_105.id);
        if (obj_105.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_106, obj_105.docId);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_106, obj_105.elementTypeId);
        
    }
    deserialize(sCtx_104: MetaContext, in__107: DataIn): AetherArrayType  {
        let id_108: bigint;
        let docId_109: bigint | null;
        let elementTypeId_110: bigint;
        const _mask = in__107.readByte();
        id_108 = DeserializerPackNumber.INSTANCE.put(in__107);
        if (((_mask & 1) === 0))  {
            docId_109 = DeserializerPackNumber.INSTANCE.put(in__107);
            
        }
        else  {
            docId_109 = null;
            
        }
        elementTypeId_110 = DeserializerPackNumber.INSTANCE.put(in__107);
        return new AetherArrayType(id_108, docId_109, elementTypeId_110);
        
    }
    metaHashCode(obj: AetherArrayType | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.id);
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.docId);
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.elementTypeId);
        return hash | 0;
        
    }
    metaEquals(v1: AetherArrayType | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AetherArrayType)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.id, v2.id)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.docId, v2.docId)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.elementTypeId, v2.elementTypeId)) return false;
        return true;
        
    }
    metaToString(obj: AetherArrayType | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AetherArrayType(');
        res.add('id:').add(obj.id);
        res.add(', ');
        res.add('docId:').add(obj.docId);
        res.add(', ');
        res.add('elementTypeId:').add(obj.elementTypeId);
        res.add(', ');
        res.add('kind:').add(obj.getKind());
        res.add(')');
        
    }
    public serializeToBytes(obj: AetherArrayType): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AetherArrayType  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AetherArrayType  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AetherArrayTypeMetaImpl implements FastMetaType<AetherArrayType>  {
    serialize(sCtx_111: MetaContext, obj_112: AetherArrayType, _out_113: DataOut): void  {
        const typeId = typeof (obj_112 as any).getAetherTypeId === 'function' ? obj_112.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'AetherArrayType' with invalid type id $ {
            typeId
        }
        `);
        _out_113.writeByte(typeId);
        switch(typeId)  {
            case 2: (AetherArrayType as any).META_BODY.serialize(sCtx_111, obj_112 as any as AetherArrayType, _out_113);
            break;
            case 1: (AetherBaseType as any).META_BODY.serialize(sCtx_111, obj_112 as any as AetherBaseType, _out_113);
            break;
            case 3: (AetherStreamType as any).META_BODY.serialize(sCtx_111, obj_112 as any as AetherStreamType, _out_113);
            break;
            case 4: (AetherNullableType as any).META_BODY.serialize(sCtx_111, obj_112 as any as AetherNullableType, _out_113);
            break;
            default: throw new Error(`Cannot serialize 'AetherArrayType' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_111: MetaContext, in__114: DataIn): AetherArrayType  {
        const typeId = in__114.readUByte();
        switch(typeId)  {
            case 2: return (AetherArrayType as any).META_BODY.deserialize(sCtx_111, in__114) as any as AetherArrayType;
            case 1: return (AetherBaseType as any).META_BODY.deserialize(sCtx_111, in__114) as any as AetherArrayType;
            case 3: return (AetherStreamType as any).META_BODY.deserialize(sCtx_111, in__114) as any as AetherArrayType;
            case 4: return (AetherNullableType as any).META_BODY.deserialize(sCtx_111, in__114) as any as AetherArrayType;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'AetherArrayType'`);
            
        }
        
    }
    metaHashCode(obj: AetherArrayType | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 2: return (AetherArrayType as any).META_BODY.metaHashCode(obj as any as AetherArrayType);
            case 1: return (AetherBaseType as any).META.metaHashCode(obj as any as AetherBaseType);
            case 3: return (AetherStreamType as any).META.metaHashCode(obj as any as AetherStreamType);
            case 4: return (AetherNullableType as any).META.metaHashCode(obj as any as AetherNullableType);
            default: throw new Error(`Cannot hashCode 'AetherArrayType' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: AetherArrayType | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 2: return (AetherArrayType as any).META_BODY.metaEquals(v1 as any as AetherArrayType, v2);
            case 1: return (AetherBaseType as any).META.metaEquals(v1 as any as AetherBaseType, v2);
            case 3: return (AetherStreamType as any).META.metaEquals(v1 as any as AetherStreamType, v2);
            case 4: return (AetherNullableType as any).META.metaEquals(v1 as any as AetherNullableType, v2);
            default: throw new Error(`Cannot equals 'AetherArrayType' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: AetherArrayType | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 2: (AetherArrayType as any).META_BODY.metaToString(obj as any as AetherArrayType, res);
            break;
            case 1: (AetherBaseType as any).META.metaToString(obj as any as AetherBaseType, res);
            break;
            case 3: (AetherStreamType as any).META.metaToString(obj as any as AetherStreamType, res);
            break;
            case 4: (AetherNullableType as any).META.metaToString(obj as any as AetherNullableType, res);
            break;
            default: throw new Error(`Cannot toString 'AetherArrayType' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: AetherArrayType): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AetherArrayType  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AetherArrayType  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AetherBaseTypeMetaBodyImpl implements FastMetaType<AetherBaseType>  {
    serialize(sCtx_115: MetaContext, obj_116: AetherBaseType, _out_117: DataOut): void  {
        let _mask: number = 0;
        if (obj_116.docId === null) _mask |= 1;
        _out_117.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_117, obj_116.id);
        if (obj_116.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_117, obj_116.docId);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_117, obj_116.nameId);
        
    }
    deserialize(sCtx_115: MetaContext, in__118: DataIn): AetherBaseType  {
        let id_119: bigint;
        let docId_120: bigint | null;
        let nameId_121: bigint;
        const _mask = in__118.readByte();
        id_119 = DeserializerPackNumber.INSTANCE.put(in__118);
        if (((_mask & 1) === 0))  {
            docId_120 = DeserializerPackNumber.INSTANCE.put(in__118);
            
        }
        else  {
            docId_120 = null;
            
        }
        nameId_121 = DeserializerPackNumber.INSTANCE.put(in__118);
        return new AetherBaseType(id_119, docId_120, nameId_121);
        
    }
    metaHashCode(obj: AetherBaseType | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.id);
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.docId);
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.nameId);
        return hash | 0;
        
    }
    metaEquals(v1: AetherBaseType | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AetherBaseType)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.id, v2.id)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.docId, v2.docId)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.nameId, v2.nameId)) return false;
        return true;
        
    }
    metaToString(obj: AetherBaseType | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AetherBaseType(');
        res.add('id:').add(obj.id);
        res.add(', ');
        res.add('docId:').add(obj.docId);
        res.add(', ');
        res.add('nameId:').add(obj.nameId);
        res.add(', ');
        res.add('kind:').add(obj.getKind());
        res.add(')');
        
    }
    public serializeToBytes(obj: AetherBaseType): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AetherBaseType  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AetherBaseType  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AetherBaseTypeMetaImpl implements FastMetaType<AetherBaseType>  {
    serialize(sCtx_122: MetaContext, obj_123: AetherBaseType, _out_124: DataOut): void  {
        const typeId = typeof (obj_123 as any).getAetherTypeId === 'function' ? obj_123.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'AetherBaseType' with invalid type id $ {
            typeId
        }
        `);
        _out_124.writeByte(typeId);
        switch(typeId)  {
            case 1: (AetherBaseType as any).META_BODY.serialize(sCtx_122, obj_123 as any as AetherBaseType, _out_124);
            break;
            case 2: (AetherArrayType as any).META_BODY.serialize(sCtx_122, obj_123 as any as AetherArrayType, _out_124);
            break;
            case 3: (AetherStreamType as any).META_BODY.serialize(sCtx_122, obj_123 as any as AetherStreamType, _out_124);
            break;
            case 4: (AetherNullableType as any).META_BODY.serialize(sCtx_122, obj_123 as any as AetherNullableType, _out_124);
            break;
            default: throw new Error(`Cannot serialize 'AetherBaseType' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_122: MetaContext, in__125: DataIn): AetherBaseType  {
        const typeId = in__125.readUByte();
        switch(typeId)  {
            case 1: return (AetherBaseType as any).META_BODY.deserialize(sCtx_122, in__125) as any as AetherBaseType;
            case 2: return (AetherArrayType as any).META_BODY.deserialize(sCtx_122, in__125) as any as AetherBaseType;
            case 3: return (AetherStreamType as any).META_BODY.deserialize(sCtx_122, in__125) as any as AetherBaseType;
            case 4: return (AetherNullableType as any).META_BODY.deserialize(sCtx_122, in__125) as any as AetherBaseType;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'AetherBaseType'`);
            
        }
        
    }
    metaHashCode(obj: AetherBaseType | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: return (AetherBaseType as any).META_BODY.metaHashCode(obj as any as AetherBaseType);
            case 2: return (AetherArrayType as any).META.metaHashCode(obj as any as AetherArrayType);
            case 3: return (AetherStreamType as any).META.metaHashCode(obj as any as AetherStreamType);
            case 4: return (AetherNullableType as any).META.metaHashCode(obj as any as AetherNullableType);
            default: throw new Error(`Cannot hashCode 'AetherBaseType' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: AetherBaseType | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 1: return (AetherBaseType as any).META_BODY.metaEquals(v1 as any as AetherBaseType, v2);
            case 2: return (AetherArrayType as any).META.metaEquals(v1 as any as AetherArrayType, v2);
            case 3: return (AetherStreamType as any).META.metaEquals(v1 as any as AetherStreamType, v2);
            case 4: return (AetherNullableType as any).META.metaEquals(v1 as any as AetherNullableType, v2);
            default: throw new Error(`Cannot equals 'AetherBaseType' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: AetherBaseType | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: (AetherBaseType as any).META_BODY.metaToString(obj as any as AetherBaseType, res);
            break;
            case 2: (AetherArrayType as any).META.metaToString(obj as any as AetherArrayType, res);
            break;
            case 3: (AetherStreamType as any).META.metaToString(obj as any as AetherStreamType, res);
            break;
            case 4: (AetherNullableType as any).META.metaToString(obj as any as AetherNullableType, res);
            break;
            default: throw new Error(`Cannot toString 'AetherBaseType' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: AetherBaseType): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AetherBaseType  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AetherBaseType  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AetherFieldDescriptorMetaBodyImpl implements FastMetaType<AetherFieldDescriptor>  {
    serialize(sCtx_126: MetaContext, obj_127: AetherFieldDescriptor, _out_128: DataOut): void  {
        let _mask: number = 0;
        if (obj_127.docId === null) _mask |= 1;
        _out_128.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_128, obj_127.nameId);
        SerializerPackNumber.INSTANCE.put(_out_128, obj_127.typeId);
        if (obj_127.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_128, obj_127.docId);
            
        }
        
    }
    deserialize(sCtx_126: MetaContext, in__129: DataIn): AetherFieldDescriptor  {
        let nameId_130: bigint;
        let typeId_131: bigint;
        let docId_132: bigint | null;
        const _mask = in__129.readByte();
        nameId_130 = DeserializerPackNumber.INSTANCE.put(in__129);
        typeId_131 = DeserializerPackNumber.INSTANCE.put(in__129);
        if (((_mask & 1) === 0))  {
            docId_132 = DeserializerPackNumber.INSTANCE.put(in__129);
            
        }
        else  {
            docId_132 = null;
            
        }
        return new AetherFieldDescriptor(nameId_130, typeId_131, docId_132);
        
    }
    metaHashCode(obj: AetherFieldDescriptor | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.nameId);
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.typeId);
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.docId);
        return hash | 0;
        
    }
    metaEquals(v1: AetherFieldDescriptor | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AetherFieldDescriptor)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.nameId, v2.nameId)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.typeId, v2.typeId)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.docId, v2.docId)) return false;
        return true;
        
    }
    metaToString(obj: AetherFieldDescriptor | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AetherFieldDescriptor(');
        res.add('nameId:').add(obj.nameId);
        res.add(', ');
        res.add('typeId:').add(obj.typeId);
        res.add(', ');
        res.add('docId:').add(obj.docId);
        res.add(')');
        
    }
    public serializeToBytes(obj: AetherFieldDescriptor): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AetherFieldDescriptor  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AetherFieldDescriptor  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AetherMethodDescriptorMetaBodyImpl implements FastMetaType<AetherMethodDescriptor>  {
    serialize(sCtx_133: MetaContext, obj_134: AetherMethodDescriptor, _out_135: DataOut): void  {
        let _mask: number = 0;
        if (obj_134.docId === null) _mask |= 1;
        _out_135.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_135, obj_134.nameId);
        SerializerPackNumber.INSTANCE.put(_out_135, obj_134.args.length);
        for (const el_137 of obj_134.args)  {
            AetherArgumentDescriptor.META.serialize(sCtx_133, el_137, _out_135);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_135, obj_134.returnTypeId);
        if (obj_134.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_135, obj_134.docId);
            
        }
        
    }
    deserialize(sCtx_133: MetaContext, in__136: DataIn): AetherMethodDescriptor  {
        let nameId_138: bigint;
        let args_139: AetherArgumentDescriptor[];
        let returnTypeId_140: bigint;
        let docId_141: bigint | null;
        const _mask = in__136.readByte();
        nameId_138 = DeserializerPackNumber.INSTANCE.put(in__136);
        const len_143 = Number(DeserializerPackNumber.INSTANCE.put(in__136));
        args_139 = new Array<AetherArgumentDescriptor>(len_143);
        for (let idx_142 = 0;
        idx_142 < len_143;
        idx_142++)  {
            args_139[idx_142] = AetherArgumentDescriptor.META.deserialize(sCtx_133, in__136);
            
        }
        returnTypeId_140 = DeserializerPackNumber.INSTANCE.put(in__136);
        if (((_mask & 1) === 0))  {
            docId_141 = DeserializerPackNumber.INSTANCE.put(in__136);
            
        }
        else  {
            docId_141 = null;
            
        }
        return new AetherMethodDescriptor(nameId_138, args_139, returnTypeId_140, docId_141);
        
    }
    metaHashCode(obj: AetherMethodDescriptor | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.nameId);
        hash = 37 * hash + FastMeta.getMetaArray(AetherArgumentDescriptor.META).metaHashCode(obj.args);
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.returnTypeId);
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.docId);
        return hash | 0;
        
    }
    metaEquals(v1: AetherMethodDescriptor | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AetherMethodDescriptor)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.nameId, v2.nameId)) return false;
        if (!FastMeta.getMetaArray(AetherArgumentDescriptor.META).metaEquals(v1.args, v2.args)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.returnTypeId, v2.returnTypeId)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.docId, v2.docId)) return false;
        return true;
        
    }
    metaToString(obj: AetherMethodDescriptor | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AetherMethodDescriptor(');
        res.add('nameId:').add(obj.nameId);
        res.add(', ');
        res.add('args:').add(obj.args);
        res.add(', ');
        res.add('returnTypeId:').add(obj.returnTypeId);
        res.add(', ');
        res.add('docId:').add(obj.docId);
        res.add(')');
        
    }
    public serializeToBytes(obj: AetherMethodDescriptor): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AetherMethodDescriptor  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AetherMethodDescriptor  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AetherModuleDescriptorMetaBodyImpl implements FastMetaType<AetherModuleDescriptor>  {
    serialize(sCtx_144: MetaContext, obj_145: AetherModuleDescriptor, _out_146: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_146, obj_145.stringPool.length);
        for (const el_148 of obj_145.stringPool)  {
            const stringBytes_149 = new TextEncoder().encode(el_148);
            SerializerPackNumber.INSTANCE.put(_out_146, stringBytes_149.length);
            _out_146.write(stringBytes_149);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_146, obj_145.typeRegistry.length);
        for (const el_151 of obj_145.typeRegistry)  {
            AetherTypeDescriptor.META.serialize(sCtx_144, el_151, _out_146);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_146, obj_145.structs.length);
        for (const el_152 of obj_145.structs)  {
            AetherStructDescriptor.META.serialize(sCtx_144, el_152, _out_146);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_146, obj_145.apis.length);
        for (const el_153 of obj_145.apis)  {
            AetherApiDefinition.META.serialize(sCtx_144, el_153, _out_146);
            
        }
        
    }
    deserialize(sCtx_144: MetaContext, in__147: DataIn): AetherModuleDescriptor  {
        let stringPool_154: string[];
        let typeRegistry_155: AetherTypeDescriptor[];
        let structs_156: AetherStructDescriptor[];
        let apis_157: AetherApiDefinition[];
        const len_159 = Number(DeserializerPackNumber.INSTANCE.put(in__147));
        stringPool_154 = new Array<string>(len_159);
        for (let idx_158 = 0;
        idx_158 < len_159;
        idx_158++)  {
            let stringBytes_160: Uint8Array;
            const len_162 = Number(DeserializerPackNumber.INSTANCE.put(in__147));
            const bytes_163 = in__147.readBytes(len_162);
            stringBytes_160 = bytes_163;
            stringPool_154[idx_158] = new TextDecoder('utf-8').decode(stringBytes_160);
            
        }
        const len_165 = Number(DeserializerPackNumber.INSTANCE.put(in__147));
        typeRegistry_155 = new Array<AetherTypeDescriptor>(len_165);
        for (let idx_164 = 0;
        idx_164 < len_165;
        idx_164++)  {
            typeRegistry_155[idx_164] = AetherTypeDescriptor.META.deserialize(sCtx_144, in__147);
            
        }
        const len_167 = Number(DeserializerPackNumber.INSTANCE.put(in__147));
        structs_156 = new Array<AetherStructDescriptor>(len_167);
        for (let idx_166 = 0;
        idx_166 < len_167;
        idx_166++)  {
            structs_156[idx_166] = AetherStructDescriptor.META.deserialize(sCtx_144, in__147);
            
        }
        const len_169 = Number(DeserializerPackNumber.INSTANCE.put(in__147));
        apis_157 = new Array<AetherApiDefinition>(len_169);
        for (let idx_168 = 0;
        idx_168 < len_169;
        idx_168++)  {
            apis_157[idx_168] = AetherApiDefinition.META.deserialize(sCtx_144, in__147);
            
        }
        return new AetherModuleDescriptor(stringPool_154, typeRegistry_155, structs_156, apis_157);
        
    }
    metaHashCode(obj: AetherModuleDescriptor | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_STRING).metaHashCode(obj.stringPool);
        hash = 37 * hash + FastMeta.getMetaArray(AetherTypeDescriptor.META).metaHashCode(obj.typeRegistry);
        hash = 37 * hash + FastMeta.getMetaArray(AetherStructDescriptor.META).metaHashCode(obj.structs);
        hash = 37 * hash + FastMeta.getMetaArray(AetherApiDefinition.META).metaHashCode(obj.apis);
        return hash | 0;
        
    }
    metaEquals(v1: AetherModuleDescriptor | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AetherModuleDescriptor)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_STRING).metaEquals(v1.stringPool, v2.stringPool)) return false;
        if (!FastMeta.getMetaArray(AetherTypeDescriptor.META).metaEquals(v1.typeRegistry, v2.typeRegistry)) return false;
        if (!FastMeta.getMetaArray(AetherStructDescriptor.META).metaEquals(v1.structs, v2.structs)) return false;
        if (!FastMeta.getMetaArray(AetherApiDefinition.META).metaEquals(v1.apis, v2.apis)) return false;
        return true;
        
    }
    metaToString(obj: AetherModuleDescriptor | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AetherModuleDescriptor(');
        res.add('stringPool:').add(obj.stringPool);
        res.add(', ');
        res.add('typeRegistry:').add(obj.typeRegistry);
        res.add(', ');
        res.add('structs:').add(obj.structs);
        res.add(', ');
        res.add('apis:').add(obj.apis);
        res.add(')');
        
    }
    public serializeToBytes(obj: AetherModuleDescriptor): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AetherModuleDescriptor  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AetherModuleDescriptor  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AetherNullableTypeMetaBodyImpl implements FastMetaType<AetherNullableType>  {
    serialize(sCtx_170: MetaContext, obj_171: AetherNullableType, _out_172: DataOut): void  {
        let _mask: number = 0;
        if (obj_171.docId === null) _mask |= 1;
        _out_172.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_172, obj_171.id);
        if (obj_171.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_172, obj_171.docId);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_172, obj_171.wrappedTypeId);
        
    }
    deserialize(sCtx_170: MetaContext, in__173: DataIn): AetherNullableType  {
        let id_174: bigint;
        let docId_175: bigint | null;
        let wrappedTypeId_176: bigint;
        const _mask = in__173.readByte();
        id_174 = DeserializerPackNumber.INSTANCE.put(in__173);
        if (((_mask & 1) === 0))  {
            docId_175 = DeserializerPackNumber.INSTANCE.put(in__173);
            
        }
        else  {
            docId_175 = null;
            
        }
        wrappedTypeId_176 = DeserializerPackNumber.INSTANCE.put(in__173);
        return new AetherNullableType(id_174, docId_175, wrappedTypeId_176);
        
    }
    metaHashCode(obj: AetherNullableType | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.id);
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.docId);
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.wrappedTypeId);
        return hash | 0;
        
    }
    metaEquals(v1: AetherNullableType | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AetherNullableType)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.id, v2.id)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.docId, v2.docId)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.wrappedTypeId, v2.wrappedTypeId)) return false;
        return true;
        
    }
    metaToString(obj: AetherNullableType | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AetherNullableType(');
        res.add('id:').add(obj.id);
        res.add(', ');
        res.add('docId:').add(obj.docId);
        res.add(', ');
        res.add('wrappedTypeId:').add(obj.wrappedTypeId);
        res.add(', ');
        res.add('kind:').add(obj.getKind());
        res.add(')');
        
    }
    public serializeToBytes(obj: AetherNullableType): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AetherNullableType  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AetherNullableType  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AetherNullableTypeMetaImpl implements FastMetaType<AetherNullableType>  {
    serialize(sCtx_177: MetaContext, obj_178: AetherNullableType, _out_179: DataOut): void  {
        const typeId = typeof (obj_178 as any).getAetherTypeId === 'function' ? obj_178.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'AetherNullableType' with invalid type id $ {
            typeId
        }
        `);
        _out_179.writeByte(typeId);
        switch(typeId)  {
            case 4: (AetherNullableType as any).META_BODY.serialize(sCtx_177, obj_178 as any as AetherNullableType, _out_179);
            break;
            case 1: (AetherBaseType as any).META_BODY.serialize(sCtx_177, obj_178 as any as AetherBaseType, _out_179);
            break;
            case 2: (AetherArrayType as any).META_BODY.serialize(sCtx_177, obj_178 as any as AetherArrayType, _out_179);
            break;
            case 3: (AetherStreamType as any).META_BODY.serialize(sCtx_177, obj_178 as any as AetherStreamType, _out_179);
            break;
            default: throw new Error(`Cannot serialize 'AetherNullableType' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_177: MetaContext, in__180: DataIn): AetherNullableType  {
        const typeId = in__180.readUByte();
        switch(typeId)  {
            case 4: return (AetherNullableType as any).META_BODY.deserialize(sCtx_177, in__180) as any as AetherNullableType;
            case 1: return (AetherBaseType as any).META_BODY.deserialize(sCtx_177, in__180) as any as AetherNullableType;
            case 2: return (AetherArrayType as any).META_BODY.deserialize(sCtx_177, in__180) as any as AetherNullableType;
            case 3: return (AetherStreamType as any).META_BODY.deserialize(sCtx_177, in__180) as any as AetherNullableType;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'AetherNullableType'`);
            
        }
        
    }
    metaHashCode(obj: AetherNullableType | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 4: return (AetherNullableType as any).META_BODY.metaHashCode(obj as any as AetherNullableType);
            case 1: return (AetherBaseType as any).META.metaHashCode(obj as any as AetherBaseType);
            case 2: return (AetherArrayType as any).META.metaHashCode(obj as any as AetherArrayType);
            case 3: return (AetherStreamType as any).META.metaHashCode(obj as any as AetherStreamType);
            default: throw new Error(`Cannot hashCode 'AetherNullableType' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: AetherNullableType | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 4: return (AetherNullableType as any).META_BODY.metaEquals(v1 as any as AetherNullableType, v2);
            case 1: return (AetherBaseType as any).META.metaEquals(v1 as any as AetherBaseType, v2);
            case 2: return (AetherArrayType as any).META.metaEquals(v1 as any as AetherArrayType, v2);
            case 3: return (AetherStreamType as any).META.metaEquals(v1 as any as AetherStreamType, v2);
            default: throw new Error(`Cannot equals 'AetherNullableType' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: AetherNullableType | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 4: (AetherNullableType as any).META_BODY.metaToString(obj as any as AetherNullableType, res);
            break;
            case 1: (AetherBaseType as any).META.metaToString(obj as any as AetherBaseType, res);
            break;
            case 2: (AetherArrayType as any).META.metaToString(obj as any as AetherArrayType, res);
            break;
            case 3: (AetherStreamType as any).META.metaToString(obj as any as AetherStreamType, res);
            break;
            default: throw new Error(`Cannot toString 'AetherNullableType' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: AetherNullableType): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AetherNullableType  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AetherNullableType  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AetherStreamTypeMetaBodyImpl implements FastMetaType<AetherStreamType>  {
    serialize(sCtx_181: MetaContext, obj_182: AetherStreamType, _out_183: DataOut): void  {
        let _mask: number = 0;
        if (obj_182.docId === null) _mask |= 1;
        _out_183.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_183, obj_182.id);
        if (obj_182.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_183, obj_182.docId);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_183, obj_182.apiId);
        _out_183.writeBoolean(obj_182.isCrypto);
        
    }
    deserialize(sCtx_181: MetaContext, in__184: DataIn): AetherStreamType  {
        let id_185: bigint;
        let docId_186: bigint | null;
        let apiId_187: bigint;
        let isCrypto_188: boolean;
        const _mask = in__184.readByte();
        id_185 = DeserializerPackNumber.INSTANCE.put(in__184);
        if (((_mask & 1) === 0))  {
            docId_186 = DeserializerPackNumber.INSTANCE.put(in__184);
            
        }
        else  {
            docId_186 = null;
            
        }
        apiId_187 = DeserializerPackNumber.INSTANCE.put(in__184);
        isCrypto_188 = in__184.readBoolean();
        return new AetherStreamType(id_185, docId_186, apiId_187, isCrypto_188);
        
    }
    metaHashCode(obj: AetherStreamType | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.id);
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.docId);
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.apiId);
        hash = 37 * hash + FastMeta.META_BOOLEAN.metaHashCode(obj.isCrypto);
        return hash | 0;
        
    }
    metaEquals(v1: AetherStreamType | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AetherStreamType)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.id, v2.id)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.docId, v2.docId)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.apiId, v2.apiId)) return false;
        if (!FastMeta.META_BOOLEAN.metaEquals(v1.isCrypto, v2.isCrypto)) return false;
        return true;
        
    }
    metaToString(obj: AetherStreamType | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AetherStreamType(');
        res.add('id:').add(obj.id);
        res.add(', ');
        res.add('docId:').add(obj.docId);
        res.add(', ');
        res.add('apiId:').add(obj.apiId);
        res.add(', ');
        res.add('isCrypto:').add(obj.isCrypto);
        res.add(', ');
        res.add('kind:').add(obj.getKind());
        res.add(')');
        
    }
    public serializeToBytes(obj: AetherStreamType): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AetherStreamType  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AetherStreamType  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AetherStreamTypeMetaImpl implements FastMetaType<AetherStreamType>  {
    serialize(sCtx_189: MetaContext, obj_190: AetherStreamType, _out_191: DataOut): void  {
        const typeId = typeof (obj_190 as any).getAetherTypeId === 'function' ? obj_190.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'AetherStreamType' with invalid type id $ {
            typeId
        }
        `);
        _out_191.writeByte(typeId);
        switch(typeId)  {
            case 3: (AetherStreamType as any).META_BODY.serialize(sCtx_189, obj_190 as any as AetherStreamType, _out_191);
            break;
            case 1: (AetherBaseType as any).META_BODY.serialize(sCtx_189, obj_190 as any as AetherBaseType, _out_191);
            break;
            case 2: (AetherArrayType as any).META_BODY.serialize(sCtx_189, obj_190 as any as AetherArrayType, _out_191);
            break;
            case 4: (AetherNullableType as any).META_BODY.serialize(sCtx_189, obj_190 as any as AetherNullableType, _out_191);
            break;
            default: throw new Error(`Cannot serialize 'AetherStreamType' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_189: MetaContext, in__192: DataIn): AetherStreamType  {
        const typeId = in__192.readUByte();
        switch(typeId)  {
            case 3: return (AetherStreamType as any).META_BODY.deserialize(sCtx_189, in__192) as any as AetherStreamType;
            case 1: return (AetherBaseType as any).META_BODY.deserialize(sCtx_189, in__192) as any as AetherStreamType;
            case 2: return (AetherArrayType as any).META_BODY.deserialize(sCtx_189, in__192) as any as AetherStreamType;
            case 4: return (AetherNullableType as any).META_BODY.deserialize(sCtx_189, in__192) as any as AetherStreamType;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'AetherStreamType'`);
            
        }
        
    }
    metaHashCode(obj: AetherStreamType | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 3: return (AetherStreamType as any).META_BODY.metaHashCode(obj as any as AetherStreamType);
            case 1: return (AetherBaseType as any).META.metaHashCode(obj as any as AetherBaseType);
            case 2: return (AetherArrayType as any).META.metaHashCode(obj as any as AetherArrayType);
            case 4: return (AetherNullableType as any).META.metaHashCode(obj as any as AetherNullableType);
            default: throw new Error(`Cannot hashCode 'AetherStreamType' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: AetherStreamType | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 3: return (AetherStreamType as any).META_BODY.metaEquals(v1 as any as AetherStreamType, v2);
            case 1: return (AetherBaseType as any).META.metaEquals(v1 as any as AetherBaseType, v2);
            case 2: return (AetherArrayType as any).META.metaEquals(v1 as any as AetherArrayType, v2);
            case 4: return (AetherNullableType as any).META.metaEquals(v1 as any as AetherNullableType, v2);
            default: throw new Error(`Cannot equals 'AetherStreamType' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: AetherStreamType | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 3: (AetherStreamType as any).META_BODY.metaToString(obj as any as AetherStreamType, res);
            break;
            case 1: (AetherBaseType as any).META.metaToString(obj as any as AetherBaseType, res);
            break;
            case 2: (AetherArrayType as any).META.metaToString(obj as any as AetherArrayType, res);
            break;
            case 4: (AetherNullableType as any).META.metaToString(obj as any as AetherNullableType, res);
            break;
            default: throw new Error(`Cannot toString 'AetherStreamType' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: AetherStreamType): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AetherStreamType  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AetherStreamType  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AetherStructDescriptorMetaBodyImpl implements FastMetaType<AetherStructDescriptor>  {
    serialize(sCtx_193: MetaContext, obj_194: AetherStructDescriptor, _out_195: DataOut): void  {
        let _mask: number = 0;
        if (obj_194.parentTypeId === null) _mask |= 1;
        if (obj_194.docId === null) _mask |= (1 << 1);
        _out_195.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_195, obj_194.baseTypeId);
        if (obj_194.parentTypeId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_195, obj_194.parentTypeId);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_195, obj_194.fields.length);
        for (const el_197 of obj_194.fields)  {
            AetherFieldDescriptor.META.serialize(sCtx_193, el_197, _out_195);
            
        }
        if (obj_194.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_195, obj_194.docId);
            
        }
        
    }
    deserialize(sCtx_193: MetaContext, in__196: DataIn): AetherStructDescriptor  {
        let baseTypeId_198: bigint;
        let parentTypeId_199: bigint | null;
        let fields_200: AetherFieldDescriptor[];
        let docId_201: bigint | null;
        const _mask = in__196.readByte();
        baseTypeId_198 = DeserializerPackNumber.INSTANCE.put(in__196);
        if (((_mask & 1) === 0))  {
            parentTypeId_199 = DeserializerPackNumber.INSTANCE.put(in__196);
            
        }
        else  {
            parentTypeId_199 = null;
            
        }
        const len_203 = Number(DeserializerPackNumber.INSTANCE.put(in__196));
        fields_200 = new Array<AetherFieldDescriptor>(len_203);
        for (let idx_202 = 0;
        idx_202 < len_203;
        idx_202++)  {
            fields_200[idx_202] = AetherFieldDescriptor.META.deserialize(sCtx_193, in__196);
            
        }
        if (((_mask & (1 << 1)) === 0))  {
            docId_201 = DeserializerPackNumber.INSTANCE.put(in__196);
            
        }
        else  {
            docId_201 = null;
            
        }
        return new AetherStructDescriptor(baseTypeId_198, parentTypeId_199, fields_200, docId_201);
        
    }
    metaHashCode(obj: AetherStructDescriptor | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.baseTypeId);
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.parentTypeId);
        hash = 37 * hash + FastMeta.getMetaArray(AetherFieldDescriptor.META).metaHashCode(obj.fields);
        hash = 37 * hash + FastMeta.META_PACK.metaHashCode(obj.docId);
        return hash | 0;
        
    }
    metaEquals(v1: AetherStructDescriptor | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AetherStructDescriptor)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.baseTypeId, v2.baseTypeId)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.parentTypeId, v2.parentTypeId)) return false;
        if (!FastMeta.getMetaArray(AetherFieldDescriptor.META).metaEquals(v1.fields, v2.fields)) return false;
        if (!FastMeta.META_PACK.metaEquals(v1.docId, v2.docId)) return false;
        return true;
        
    }
    metaToString(obj: AetherStructDescriptor | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AetherStructDescriptor(');
        res.add('baseTypeId:').add(obj.baseTypeId);
        res.add(', ');
        res.add('parentTypeId:').add(obj.parentTypeId);
        res.add(', ');
        res.add('fields:').add(obj.fields);
        res.add(', ');
        res.add('docId:').add(obj.docId);
        res.add(')');
        
    }
    public serializeToBytes(obj: AetherStructDescriptor): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AetherStructDescriptor  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AetherStructDescriptor  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AppliedConfigMetaBodyImpl implements FastMetaType<AppliedConfig>  {
    serialize(sCtx_204: MetaContext, obj_205: AppliedConfig, _out_206: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_204, obj_205.subjectUid, _out_206);
        _out_206.writeLong(obj_205.configVersion);
        
    }
    deserialize(sCtx_204: MetaContext, in__207: DataIn): AppliedConfig  {
        let subjectUid_208: UUID;
        let configVersion_209: bigint;
        subjectUid_208 = FastMeta.META_UUID.deserialize(sCtx_204, in__207);
        configVersion_209 = in__207.readLong();
        return new AppliedConfig(subjectUid_208, configVersion_209);
        
    }
    metaHashCode(obj: AppliedConfig | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.subjectUid);
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.configVersion);
        return hash | 0;
        
    }
    metaEquals(v1: AppliedConfig | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AppliedConfig)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.subjectUid, v2.subjectUid)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.configVersion, v2.configVersion)) return false;
        return true;
        
    }
    metaToString(obj: AppliedConfig | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AppliedConfig(');
        res.add('subjectUid:').add(obj.subjectUid);
        res.add(', ');
        res.add('configVersion:').add(obj.configVersion);
        res.add(')');
        
    }
    public serializeToBytes(obj: AppliedConfig): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AppliedConfig  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AppliedConfig  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientActivityMetaBodyImpl implements FastMetaType<ClientActivity>  {
    serialize(sCtx_210: MetaContext, obj_211: ClientActivity, _out_212: DataOut): void  {
        let _mask: number = 0;
        if (obj_211.serverId === null) _mask |= 1;
        _out_212.writeByte(_mask);
        _out_212.writeLong(obj_211.timestamp);
        ClientActivityType.META.serialize(sCtx_210, obj_211.type, _out_212);
        FastMeta.META_UUID.serialize(sCtx_210, obj_211.clientUid, _out_212);
        const stringBytes_214 = new TextEncoder().encode(obj_211.details);
        SerializerPackNumber.INSTANCE.put(_out_212, stringBytes_214.length);
        _out_212.write(stringBytes_214);
        if (obj_211.serverId !== null)  {
            _out_212.writeShort(obj_211.serverId);
            
        }
        
    }
    deserialize(sCtx_210: MetaContext, in__213: DataIn): ClientActivity  {
        let timestamp_216: bigint;
        let type_217: ClientActivityType;
        let clientUid_218: UUID;
        let details_219: string;
        let serverId_220: number | null;
        const _mask = in__213.readByte();
        timestamp_216 = in__213.readLong();
        type_217 = ClientActivityType.META.deserialize(sCtx_210, in__213);
        clientUid_218 = FastMeta.META_UUID.deserialize(sCtx_210, in__213);
        let stringBytes_221: Uint8Array;
        const len_223 = Number(DeserializerPackNumber.INSTANCE.put(in__213));
        const bytes_224 = in__213.readBytes(len_223);
        stringBytes_221 = bytes_224;
        details_219 = new TextDecoder('utf-8').decode(stringBytes_221);
        if (((_mask & 1) === 0))  {
            serverId_220 = in__213.readShort();
            
        }
        else  {
            serverId_220 = null;
            
        }
        return new ClientActivity(timestamp_216, type_217, clientUid_218, details_219, serverId_220);
        
    }
    metaHashCode(obj: ClientActivity | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.timestamp);
        hash = 37 * hash + ClientActivityType.META.metaHashCode(obj.type);
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.clientUid);
        hash = 37 * hash + FastMeta.META_STRING.metaHashCode(obj.details);
        hash = 37 * hash + FastMeta.META_SHORT.metaHashCode(obj.serverId);
        return hash | 0;
        
    }
    metaEquals(v1: ClientActivity | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientActivity)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.timestamp, v2.timestamp)) return false;
        if (!ClientActivityType.META.metaEquals(v1.type, v2.type)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.clientUid, v2.clientUid)) return false;
        if (!FastMeta.META_STRING.metaEquals(v1.details, v2.details)) return false;
        if (!FastMeta.META_SHORT.metaEquals(v1.serverId, v2.serverId)) return false;
        return true;
        
    }
    metaToString(obj: ClientActivity | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientActivity(');
        res.add('timestamp:').add(obj.timestamp);
        res.add(', ');
        res.add('type:').add(obj.type);
        res.add(', ');
        res.add('clientUid:').add(obj.clientUid);
        res.add(', ');
        res.add('details:').add(obj.details);
        res.add(', ');
        res.add('serverId:').add(obj.serverId);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientActivity): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientActivity  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientActivity  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientConnectionInfoMetaBodyImpl implements FastMetaType<ClientConnectionInfo>  {
    serialize(sCtx_225: MetaContext, obj_226: ClientConnectionInfo, _out_227: DataOut): void  {
        let _mask: number = 0;
        if (obj_226.disconnectedAt === null) _mask |= 1;
        _out_227.writeByte(_mask);
        _out_227.writeLong(obj_226.connectedAt);
        if (obj_226.disconnectedAt !== null)  {
            _out_227.writeLong(obj_226.disconnectedAt);
            
        }
        _out_227.writeShort(obj_226.serverId);
        SerializerPackNumber.INSTANCE.put(_out_227, obj_226.context.length);
        for (const el_229 of obj_226.context)  {
            KeyValuePair.META.serialize(sCtx_225, el_229, _out_227);
            
        }
        const stringBytes_230 = new TextEncoder().encode(obj_226.protocol);
        SerializerPackNumber.INSTANCE.put(_out_227, stringBytes_230.length);
        _out_227.write(stringBytes_230);
        
    }
    deserialize(sCtx_225: MetaContext, in__228: DataIn): ClientConnectionInfo  {
        let connectedAt_232: bigint;
        let disconnectedAt_233: bigint | null;
        let serverId_234: number;
        let context_235: KeyValuePair[];
        let protocol_236: string;
        const _mask = in__228.readByte();
        connectedAt_232 = in__228.readLong();
        if (((_mask & 1) === 0))  {
            disconnectedAt_233 = in__228.readLong();
            
        }
        else  {
            disconnectedAt_233 = null;
            
        }
        serverId_234 = in__228.readShort();
        const len_238 = Number(DeserializerPackNumber.INSTANCE.put(in__228));
        context_235 = new Array<KeyValuePair>(len_238);
        for (let idx_237 = 0;
        idx_237 < len_238;
        idx_237++)  {
            context_235[idx_237] = KeyValuePair.META.deserialize(sCtx_225, in__228);
            
        }
        let stringBytes_239: Uint8Array;
        const len_241 = Number(DeserializerPackNumber.INSTANCE.put(in__228));
        const bytes_242 = in__228.readBytes(len_241);
        stringBytes_239 = bytes_242;
        protocol_236 = new TextDecoder('utf-8').decode(stringBytes_239);
        return new ClientConnectionInfo(connectedAt_232, disconnectedAt_233, serverId_234, context_235, protocol_236);
        
    }
    metaHashCode(obj: ClientConnectionInfo | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.connectedAt);
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.disconnectedAt);
        hash = 37 * hash + FastMeta.META_SHORT.metaHashCode(obj.serverId);
        hash = 37 * hash + FastMeta.getMetaArray(KeyValuePair.META).metaHashCode(obj.context);
        hash = 37 * hash + FastMeta.META_STRING.metaHashCode(obj.protocol);
        return hash | 0;
        
    }
    metaEquals(v1: ClientConnectionInfo | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientConnectionInfo)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.connectedAt, v2.connectedAt)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.disconnectedAt, v2.disconnectedAt)) return false;
        if (!FastMeta.META_SHORT.metaEquals(v1.serverId, v2.serverId)) return false;
        if (!FastMeta.getMetaArray(KeyValuePair.META).metaEquals(v1.context, v2.context)) return false;
        if (!FastMeta.META_STRING.metaEquals(v1.protocol, v2.protocol)) return false;
        return true;
        
    }
    metaToString(obj: ClientConnectionInfo | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientConnectionInfo(');
        res.add('connectedAt:').add(obj.connectedAt);
        res.add(', ');
        res.add('disconnectedAt:').add(obj.disconnectedAt);
        res.add(', ');
        res.add('serverId:').add(obj.serverId);
        res.add(', ');
        res.add('context:').add(obj.context);
        res.add(', ');
        res.add('protocol:').add(obj.protocol);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientConnectionInfo): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientConnectionInfo  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientConnectionInfo  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientInfoMetaBodyImpl implements FastMetaType<ClientInfo>  {
    serialize(sCtx_243: MetaContext, obj_244: ClientInfo, _out_245: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_243, obj_244.uid, _out_245);
        Cloud.META.serialize(sCtx_243, obj_244.cloud, _out_245);
        SerializerPackNumber.INSTANCE.put(_out_245, obj_244.weights.length);
        for (const el_247 of obj_244.weights)  {
            CloudWeight.META.serialize(sCtx_243, el_247, _out_245);
            
        }
        
    }
    deserialize(sCtx_243: MetaContext, in__246: DataIn): ClientInfo  {
        let uid_248: UUID;
        let cloud_249: Cloud;
        let weights_250: CloudWeight[];
        uid_248 = FastMeta.META_UUID.deserialize(sCtx_243, in__246);
        cloud_249 = Cloud.META.deserialize(sCtx_243, in__246);
        const len_252 = Number(DeserializerPackNumber.INSTANCE.put(in__246));
        weights_250 = new Array<CloudWeight>(len_252);
        for (let idx_251 = 0;
        idx_251 < len_252;
        idx_251++)  {
            weights_250[idx_251] = CloudWeight.META.deserialize(sCtx_243, in__246);
            
        }
        return new ClientInfo(uid_248, cloud_249, weights_250);
        
    }
    metaHashCode(obj: ClientInfo | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + Cloud.META.metaHashCode(obj.cloud);
        hash = 37 * hash + FastMeta.getMetaArray(CloudWeight.META).metaHashCode(obj.weights);
        return hash | 0;
        
    }
    metaEquals(v1: ClientInfo | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientInfo)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!Cloud.META.metaEquals(v1.cloud, v2.cloud)) return false;
        if (!FastMeta.getMetaArray(CloudWeight.META).metaEquals(v1.weights, v2.weights)) return false;
        return true;
        
    }
    metaToString(obj: ClientInfo | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientInfo(');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('cloud:').add(obj.cloud);
        res.add(', ');
        res.add('weights:').add(obj.weights);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientInfo): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientInfo  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientInfo  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientLogEntryMetaBodyImpl implements FastMetaType<ClientLogEntry>  {
    serialize(sCtx_253: MetaContext, obj_254: ClientLogEntry, _out_255: DataOut): void  {
        _out_255.writeLong(obj_254.timestamp);
        const stringBytes_257 = new TextEncoder().encode(obj_254.level);
        SerializerPackNumber.INSTANCE.put(_out_255, stringBytes_257.length);
        _out_255.write(stringBytes_257);
        const stringBytes_259 = new TextEncoder().encode(obj_254.message);
        SerializerPackNumber.INSTANCE.put(_out_255, stringBytes_259.length);
        _out_255.write(stringBytes_259);
        SerializerPackNumber.INSTANCE.put(_out_255, obj_254.context.length);
        for (const el_261 of obj_254.context)  {
            KeyValuePair.META.serialize(sCtx_253, el_261, _out_255);
            
        }
        
    }
    deserialize(sCtx_253: MetaContext, in__256: DataIn): ClientLogEntry  {
        let timestamp_262: bigint;
        let level_263: string;
        let message_264: string;
        let context_265: KeyValuePair[];
        timestamp_262 = in__256.readLong();
        let stringBytes_266: Uint8Array;
        const len_268 = Number(DeserializerPackNumber.INSTANCE.put(in__256));
        const bytes_269 = in__256.readBytes(len_268);
        stringBytes_266 = bytes_269;
        level_263 = new TextDecoder('utf-8').decode(stringBytes_266);
        let stringBytes_270: Uint8Array;
        const len_272 = Number(DeserializerPackNumber.INSTANCE.put(in__256));
        const bytes_273 = in__256.readBytes(len_272);
        stringBytes_270 = bytes_273;
        message_264 = new TextDecoder('utf-8').decode(stringBytes_270);
        const len_275 = Number(DeserializerPackNumber.INSTANCE.put(in__256));
        context_265 = new Array<KeyValuePair>(len_275);
        for (let idx_274 = 0;
        idx_274 < len_275;
        idx_274++)  {
            context_265[idx_274] = KeyValuePair.META.deserialize(sCtx_253, in__256);
            
        }
        return new ClientLogEntry(timestamp_262, level_263, message_264, context_265);
        
    }
    metaHashCode(obj: ClientLogEntry | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.timestamp);
        hash = 37 * hash + FastMeta.META_STRING.metaHashCode(obj.level);
        hash = 37 * hash + FastMeta.META_STRING.metaHashCode(obj.message);
        hash = 37 * hash + FastMeta.getMetaArray(KeyValuePair.META).metaHashCode(obj.context);
        return hash | 0;
        
    }
    metaEquals(v1: ClientLogEntry | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientLogEntry)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.timestamp, v2.timestamp)) return false;
        if (!FastMeta.META_STRING.metaEquals(v1.level, v2.level)) return false;
        if (!FastMeta.META_STRING.metaEquals(v1.message, v2.message)) return false;
        if (!FastMeta.getMetaArray(KeyValuePair.META).metaEquals(v1.context, v2.context)) return false;
        return true;
        
    }
    metaToString(obj: ClientLogEntry | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientLogEntry(');
        res.add('timestamp:').add(obj.timestamp);
        res.add(', ');
        res.add('level:').add(obj.level);
        res.add(', ');
        res.add('message:').add(obj.message);
        res.add(', ');
        res.add('context:').add(obj.context);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientLogEntry): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientLogEntry  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientLogEntry  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientStateForSaveMetaBodyImpl implements FastMetaType<ClientStateForSave>  {
    serialize(sCtx_276: MetaContext, obj_277: ClientStateForSave, _out_278: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_278, obj_277.registrationUri.length);
        for (const el_280 of obj_277.registrationUri)  {
            FastMeta.META_URI.serialize(sCtx_276, el_280, _out_278);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_278, obj_277.servers.length);
        for (const el_281 of obj_277.servers)  {
            ServerDescriptor.META.serialize(sCtx_276, el_281, _out_278);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_278, obj_277.clients.length);
        for (const el_282 of obj_277.clients)  {
            ClientInfo.META.serialize(sCtx_276, el_282, _out_278);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_278, obj_277.rootSigners.length);
        for (const el_283 of obj_277.rootSigners)  {
            Key.META.serialize(sCtx_276, el_283, _out_278);
            
        }
        CryptoLib.META.serialize(sCtx_276, obj_277.cryptoLib, _out_278);
        _out_278.writeLong(obj_277.pingDuration);
        FastMeta.META_UUID.serialize(sCtx_276, obj_277.parentUid, _out_278);
        _out_278.writeInt(obj_277.countServersForRegistration);
        _out_278.writeLong(obj_277.timeoutForConnectToRegistrationServer);
        FastMeta.META_UUID.serialize(sCtx_276, obj_277.uid, _out_278);
        FastMeta.META_UUID.serialize(sCtx_276, obj_277.alias, _out_278);
        Key.META.serialize(sCtx_276, obj_277.masterKey, _out_278);
        
    }
    deserialize(sCtx_276: MetaContext, in__279: DataIn): ClientStateForSave  {
        let registrationUri_284: URI[];
        let servers_285: ServerDescriptor[];
        let clients_286: ClientInfo[];
        let rootSigners_287: Key[];
        let cryptoLib_288: CryptoLib;
        let pingDuration_289: bigint;
        let parentUid_290: UUID;
        let countServersForRegistration_291: number;
        let timeoutForConnectToRegistrationServer_292: bigint;
        let uid_293: UUID;
        let alias_294: UUID;
        let masterKey_295: Key;
        const len_297 = Number(DeserializerPackNumber.INSTANCE.put(in__279));
        registrationUri_284 = new Array<URI>(len_297);
        for (let idx_296 = 0;
        idx_296 < len_297;
        idx_296++)  {
            registrationUri_284[idx_296] = FastMeta.META_URI.deserialize(sCtx_276, in__279);
            
        }
        const len_299 = Number(DeserializerPackNumber.INSTANCE.put(in__279));
        servers_285 = new Array<ServerDescriptor>(len_299);
        for (let idx_298 = 0;
        idx_298 < len_299;
        idx_298++)  {
            servers_285[idx_298] = ServerDescriptor.META.deserialize(sCtx_276, in__279);
            
        }
        const len_301 = Number(DeserializerPackNumber.INSTANCE.put(in__279));
        clients_286 = new Array<ClientInfo>(len_301);
        for (let idx_300 = 0;
        idx_300 < len_301;
        idx_300++)  {
            clients_286[idx_300] = ClientInfo.META.deserialize(sCtx_276, in__279);
            
        }
        const len_303 = Number(DeserializerPackNumber.INSTANCE.put(in__279));
        rootSigners_287 = new Array<Key>(len_303);
        for (let idx_302 = 0;
        idx_302 < len_303;
        idx_302++)  {
            rootSigners_287[idx_302] = Key.META.deserialize(sCtx_276, in__279);
            
        }
        cryptoLib_288 = CryptoLib.META.deserialize(sCtx_276, in__279);
        pingDuration_289 = in__279.readLong();
        parentUid_290 = FastMeta.META_UUID.deserialize(sCtx_276, in__279);
        countServersForRegistration_291 = in__279.readInt();
        timeoutForConnectToRegistrationServer_292 = in__279.readLong();
        uid_293 = FastMeta.META_UUID.deserialize(sCtx_276, in__279);
        alias_294 = FastMeta.META_UUID.deserialize(sCtx_276, in__279);
        masterKey_295 = Key.META.deserialize(sCtx_276, in__279);
        return new ClientStateForSave(registrationUri_284, servers_285, clients_286, rootSigners_287, cryptoLib_288, pingDuration_289, parentUid_290, countServersForRegistration_291, timeoutForConnectToRegistrationServer_292, uid_293, alias_294, masterKey_295);
        
    }
    metaHashCode(obj: ClientStateForSave | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_URI).metaHashCode(obj.registrationUri);
        hash = 37 * hash + FastMeta.getMetaArray(ServerDescriptor.META).metaHashCode(obj.servers);
        hash = 37 * hash + FastMeta.getMetaArray(ClientInfo.META).metaHashCode(obj.clients);
        hash = 37 * hash + FastMeta.getMetaArray(Key.META).metaHashCode(obj.rootSigners);
        hash = 37 * hash + CryptoLib.META.metaHashCode(obj.cryptoLib);
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.pingDuration);
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.parentUid);
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.countServersForRegistration);
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.timeoutForConnectToRegistrationServer);
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.alias);
        hash = 37 * hash + Key.META.metaHashCode(obj.masterKey);
        return hash | 0;
        
    }
    metaEquals(v1: ClientStateForSave | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientStateForSave)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_URI).metaEquals(v1.registrationUri, v2.registrationUri)) return false;
        if (!FastMeta.getMetaArray(ServerDescriptor.META).metaEquals(v1.servers, v2.servers)) return false;
        if (!FastMeta.getMetaArray(ClientInfo.META).metaEquals(v1.clients, v2.clients)) return false;
        if (!FastMeta.getMetaArray(Key.META).metaEquals(v1.rootSigners, v2.rootSigners)) return false;
        if (!CryptoLib.META.metaEquals(v1.cryptoLib, v2.cryptoLib)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.pingDuration, v2.pingDuration)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.parentUid, v2.parentUid)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.countServersForRegistration, v2.countServersForRegistration)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.timeoutForConnectToRegistrationServer, v2.timeoutForConnectToRegistrationServer)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.alias, v2.alias)) return false;
        if (!Key.META.metaEquals(v1.masterKey, v2.masterKey)) return false;
        return true;
        
    }
    metaToString(obj: ClientStateForSave | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientStateForSave(');
        res.add('registrationUri:').add(obj.registrationUri);
        res.add(', ');
        res.add('servers:').add(obj.servers);
        res.add(', ');
        res.add('clients:').add(obj.clients);
        res.add(', ');
        res.add('rootSigners:').add(obj.rootSigners);
        res.add(', ');
        res.add('cryptoLib:').add(obj.cryptoLib);
        res.add(', ');
        res.add('pingDuration:').add(obj.pingDuration);
        res.add(', ');
        res.add('parentUid:').add(obj.parentUid);
        res.add(', ');
        res.add('countServersForRegistration:').add(obj.countServersForRegistration);
        res.add(', ');
        res.add('timeoutForConnectToRegistrationServer:').add(obj.timeoutForConnectToRegistrationServer);
        res.add(', ');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('alias:').add(obj.alias);
        res.add(', ');
        res.add('masterKey:').add(obj.masterKey);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientStateForSave): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientStateForSave  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientStateForSave  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class CloudMetaBodyImpl implements FastMetaType<Cloud>  {
    serialize(sCtx_304: MetaContext, obj_305: Cloud, _out_306: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_306, obj_305.data.length);
        for (const el_308 of obj_305.data)  {
            _out_306.writeShort(el_308);
            
        }
        
    }
    deserialize(sCtx_304: MetaContext, in__307: DataIn): Cloud  {
        let data_309: number[];
        const len_311 = Number(DeserializerPackNumber.INSTANCE.put(in__307));
        data_309 = new Array<number>(len_311);
        for (let idx_310 = 0;
        idx_310 < len_311;
        idx_310++)  {
            data_309[idx_310] = in__307.readShort();
            
        }
        return new Cloud(data_309);
        
    }
    metaHashCode(obj: Cloud | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_SHORT).metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: Cloud | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof Cloud)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_SHORT).metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: Cloud | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('Cloud(');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: Cloud): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): Cloud  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): Cloud  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class CloudConfigMetaBodyImpl implements FastMetaType<CloudConfig>  {
    serialize(sCtx_312: MetaContext, obj_313: CloudConfig, _out_314: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_312, obj_313.subjectUid, _out_314);
        _out_314.writeLong(obj_313.configVersion);
        Cloud.META.serialize(sCtx_312, obj_313.cloud, _out_314);
        
    }
    deserialize(sCtx_312: MetaContext, in__315: DataIn): CloudConfig  {
        let subjectUid_316: UUID;
        let configVersion_317: bigint;
        let cloud_318: Cloud;
        subjectUid_316 = FastMeta.META_UUID.deserialize(sCtx_312, in__315);
        configVersion_317 = in__315.readLong();
        cloud_318 = Cloud.META.deserialize(sCtx_312, in__315);
        return new CloudConfig(subjectUid_316, configVersion_317, cloud_318);
        
    }
    metaHashCode(obj: CloudConfig | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.subjectUid);
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.configVersion);
        hash = 37 * hash + Cloud.META.metaHashCode(obj.cloud);
        return hash | 0;
        
    }
    metaEquals(v1: CloudConfig | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof CloudConfig)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.subjectUid, v2.subjectUid)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.configVersion, v2.configVersion)) return false;
        if (!Cloud.META.metaEquals(v1.cloud, v2.cloud)) return false;
        return true;
        
    }
    metaToString(obj: CloudConfig | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('CloudConfig(');
        res.add('subjectUid:').add(obj.subjectUid);
        res.add(', ');
        res.add('configVersion:').add(obj.configVersion);
        res.add(', ');
        res.add('cloud:').add(obj.cloud);
        res.add(')');
        
    }
    public serializeToBytes(obj: CloudConfig): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): CloudConfig  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): CloudConfig  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class CloudWeightMetaBodyImpl implements FastMetaType<CloudWeight>  {
    serialize(sCtx_319: MetaContext, obj_320: CloudWeight, _out_321: DataOut): void  {
        _out_321.writeShort(obj_320.sid);
        _out_321.writeLong(obj_320.weight);
        
    }
    deserialize(sCtx_319: MetaContext, in__322: DataIn): CloudWeight  {
        let sid_323: number;
        let weight_324: bigint;
        sid_323 = in__322.readShort();
        weight_324 = in__322.readLong();
        return new CloudWeight(sid_323, weight_324);
        
    }
    metaHashCode(obj: CloudWeight | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_SHORT.metaHashCode(obj.sid);
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.weight);
        return hash | 0;
        
    }
    metaEquals(v1: CloudWeight | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof CloudWeight)) return false;
        if (!FastMeta.META_SHORT.metaEquals(v1.sid, v2.sid)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.weight, v2.weight)) return false;
        return true;
        
    }
    metaToString(obj: CloudWeight | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('CloudWeight(');
        res.add('sid:').add(obj.sid);
        res.add(', ');
        res.add('weight:').add(obj.weight);
        res.add(')');
        
    }
    public serializeToBytes(obj: CloudWeight): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): CloudWeight  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): CloudWeight  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class CoderAndPortMetaBodyImpl implements FastMetaType<CoderAndPort>  {
    serialize(sCtx_325: MetaContext, obj_326: CoderAndPort, _out_327: DataOut): void  {
        AetherCodec.META.serialize(sCtx_325, obj_326.codec, _out_327);
        _out_327.writeShort(obj_326.port);
        
    }
    deserialize(sCtx_325: MetaContext, in__328: DataIn): CoderAndPort  {
        let codec_329: AetherCodec;
        let port_330: number;
        codec_329 = AetherCodec.META.deserialize(sCtx_325, in__328);
        port_330 = in__328.readShort();
        return new CoderAndPort(codec_329, port_330);
        
    }
    metaHashCode(obj: CoderAndPort | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + AetherCodec.META.metaHashCode(obj.codec);
        hash = 37 * hash + FastMeta.META_SHORT.metaHashCode(obj.port);
        return hash | 0;
        
    }
    metaEquals(v1: CoderAndPort | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof CoderAndPort)) return false;
        if (!AetherCodec.META.metaEquals(v1.codec, v2.codec)) return false;
        if (!FastMeta.META_SHORT.metaEquals(v1.port, v2.port)) return false;
        return true;
        
    }
    metaToString(obj: CoderAndPort | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('CoderAndPort(');
        res.add('codec:').add(obj.codec);
        res.add(', ');
        res.add('port:').add(obj.port);
        res.add(')');
        
    }
    public serializeToBytes(obj: CoderAndPort): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): CoderAndPort  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): CoderAndPort  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class FinishResultMetaBodyImpl implements FastMetaType<FinishResult>  {
    serialize(sCtx_331: MetaContext, obj_332: FinishResult, _out_333: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_331, obj_332.alias, _out_333);
        FastMeta.META_UUID.serialize(sCtx_331, obj_332.uid, _out_333);
        Cloud.META.serialize(sCtx_331, obj_332.cloud, _out_333);
        
    }
    deserialize(sCtx_331: MetaContext, in__334: DataIn): FinishResult  {
        let alias_335: UUID;
        let uid_336: UUID;
        let cloud_337: Cloud;
        alias_335 = FastMeta.META_UUID.deserialize(sCtx_331, in__334);
        uid_336 = FastMeta.META_UUID.deserialize(sCtx_331, in__334);
        cloud_337 = Cloud.META.deserialize(sCtx_331, in__334);
        return new FinishResult(alias_335, uid_336, cloud_337);
        
    }
    metaHashCode(obj: FinishResult | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.alias);
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + Cloud.META.metaHashCode(obj.cloud);
        return hash | 0;
        
    }
    metaEquals(v1: FinishResult | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof FinishResult)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.alias, v2.alias)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!Cloud.META.metaEquals(v1.cloud, v2.cloud)) return false;
        return true;
        
    }
    metaToString(obj: FinishResult | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('FinishResult(');
        res.add('alias:').add(obj.alias);
        res.add(', ');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('cloud:').add(obj.cloud);
        res.add(')');
        
    }
    public serializeToBytes(obj: FinishResult): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): FinishResult  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): FinishResult  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenCurvePrivateMetaBodyImpl implements FastMetaType<HydrogenCurvePrivate>  {
    serialize(sCtx_338: MetaContext, obj_339: HydrogenCurvePrivate, _out_340: DataOut): void  {
        if (obj_339.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_339.data must be 32 but was $ {
            obj_339.data.length
        }
        `);
        _out_340.write(obj_339.data);
        
    }
    deserialize(sCtx_338: MetaContext, in__341: DataIn): HydrogenCurvePrivate  {
        let data_343: Uint8Array;
        const len_345 = 32;
        const bytes_346 = in__341.readBytes(len_345);
        data_343 = bytes_346;
        return new HydrogenCurvePrivate(data_343);
        
    }
    metaHashCode(obj: HydrogenCurvePrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: HydrogenCurvePrivate | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof HydrogenCurvePrivate)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: HydrogenCurvePrivate | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('HydrogenCurvePrivate(');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: HydrogenCurvePrivate): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenCurvePrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenCurvePrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenCurvePrivateMetaImpl implements FastMetaType<HydrogenCurvePrivate>  {
    serialize(sCtx_347: MetaContext, obj_348: HydrogenCurvePrivate, _out_349: DataOut): void  {
        const typeId = typeof (obj_348 as any).getAetherTypeId === 'function' ? obj_348.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenCurvePrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_349.writeByte(typeId);
        switch(typeId)  {
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_347, obj_348 as any as HydrogenCurvePrivate, _out_349);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_347, obj_348 as any as SodiumChacha20Poly1305, _out_349);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_347, obj_348 as any as HydrogenSecretBox, _out_349);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_347, obj_348 as any as HydrogenCurvePublic, _out_349);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_347, obj_348 as any as SodiumCurvePublic, _out_349);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_347, obj_348 as any as SodiumCurvePrivate, _out_349);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_347, obj_348 as any as SodiumSignPublic, _out_349);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_347, obj_348 as any as HydrogenSignPublic, _out_349);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_347, obj_348 as any as SodiumSignPrivate, _out_349);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_347, obj_348 as any as HydrogenSignPrivate, _out_349);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenCurvePrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_347: MetaContext, in__350: DataIn): HydrogenCurvePrivate  {
        const typeId = in__350.readUByte();
        switch(typeId)  {
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePrivate;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePrivate;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePrivate;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePrivate;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'HydrogenCurvePrivate'`);
            
        }
        
    }
    metaHashCode(obj: HydrogenCurvePrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: return (HydrogenCurvePrivate as any).META_BODY.metaHashCode(obj as any as HydrogenCurvePrivate);
            case 6: return (SodiumChacha20Poly1305 as any).META.metaHashCode(obj as any as SodiumChacha20Poly1305);
            case 3: return (HydrogenSecretBox as any).META.metaHashCode(obj as any as HydrogenSecretBox);
            case 2: return (HydrogenCurvePublic as any).META.metaHashCode(obj as any as HydrogenCurvePublic);
            case 8: return (SodiumCurvePublic as any).META.metaHashCode(obj as any as SodiumCurvePublic);
            case 7: return (SodiumCurvePrivate as any).META.metaHashCode(obj as any as SodiumCurvePrivate);
            case 10: return (SodiumSignPublic as any).META.metaHashCode(obj as any as SodiumSignPublic);
            case 5: return (HydrogenSignPublic as any).META.metaHashCode(obj as any as HydrogenSignPublic);
            case 9: return (SodiumSignPrivate as any).META.metaHashCode(obj as any as SodiumSignPrivate);
            case 4: return (HydrogenSignPrivate as any).META.metaHashCode(obj as any as HydrogenSignPrivate);
            default: throw new Error(`Cannot hashCode 'HydrogenCurvePrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: HydrogenCurvePrivate | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 1: return (HydrogenCurvePrivate as any).META_BODY.metaEquals(v1 as any as HydrogenCurvePrivate, v2);
            case 6: return (SodiumChacha20Poly1305 as any).META.metaEquals(v1 as any as SodiumChacha20Poly1305, v2);
            case 3: return (HydrogenSecretBox as any).META.metaEquals(v1 as any as HydrogenSecretBox, v2);
            case 2: return (HydrogenCurvePublic as any).META.metaEquals(v1 as any as HydrogenCurvePublic, v2);
            case 8: return (SodiumCurvePublic as any).META.metaEquals(v1 as any as SodiumCurvePublic, v2);
            case 7: return (SodiumCurvePrivate as any).META.metaEquals(v1 as any as SodiumCurvePrivate, v2);
            case 10: return (SodiumSignPublic as any).META.metaEquals(v1 as any as SodiumSignPublic, v2);
            case 5: return (HydrogenSignPublic as any).META.metaEquals(v1 as any as HydrogenSignPublic, v2);
            case 9: return (SodiumSignPrivate as any).META.metaEquals(v1 as any as SodiumSignPrivate, v2);
            case 4: return (HydrogenSignPrivate as any).META.metaEquals(v1 as any as HydrogenSignPrivate, v2);
            default: throw new Error(`Cannot equals 'HydrogenCurvePrivate' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: HydrogenCurvePrivate | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: (HydrogenCurvePrivate as any).META_BODY.metaToString(obj as any as HydrogenCurvePrivate, res);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META.metaToString(obj as any as SodiumChacha20Poly1305, res);
            break;
            case 3: (HydrogenSecretBox as any).META.metaToString(obj as any as HydrogenSecretBox, res);
            break;
            case 2: (HydrogenCurvePublic as any).META.metaToString(obj as any as HydrogenCurvePublic, res);
            break;
            case 8: (SodiumCurvePublic as any).META.metaToString(obj as any as SodiumCurvePublic, res);
            break;
            case 7: (SodiumCurvePrivate as any).META.metaToString(obj as any as SodiumCurvePrivate, res);
            break;
            case 10: (SodiumSignPublic as any).META.metaToString(obj as any as SodiumSignPublic, res);
            break;
            case 5: (HydrogenSignPublic as any).META.metaToString(obj as any as HydrogenSignPublic, res);
            break;
            case 9: (SodiumSignPrivate as any).META.metaToString(obj as any as SodiumSignPrivate, res);
            break;
            case 4: (HydrogenSignPrivate as any).META.metaToString(obj as any as HydrogenSignPrivate, res);
            break;
            default: throw new Error(`Cannot toString 'HydrogenCurvePrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: HydrogenCurvePrivate): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenCurvePrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenCurvePrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenCurvePublicMetaBodyImpl implements FastMetaType<HydrogenCurvePublic>  {
    serialize(sCtx_351: MetaContext, obj_352: HydrogenCurvePublic, _out_353: DataOut): void  {
        if (obj_352.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_352.data must be 32 but was $ {
            obj_352.data.length
        }
        `);
        _out_353.write(obj_352.data);
        
    }
    deserialize(sCtx_351: MetaContext, in__354: DataIn): HydrogenCurvePublic  {
        let data_356: Uint8Array;
        const len_358 = 32;
        const bytes_359 = in__354.readBytes(len_358);
        data_356 = bytes_359;
        return new HydrogenCurvePublic(data_356);
        
    }
    metaHashCode(obj: HydrogenCurvePublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: HydrogenCurvePublic | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof HydrogenCurvePublic)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: HydrogenCurvePublic | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('HydrogenCurvePublic(');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: HydrogenCurvePublic): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenCurvePublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenCurvePublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenCurvePublicMetaImpl implements FastMetaType<HydrogenCurvePublic>  {
    serialize(sCtx_360: MetaContext, obj_361: HydrogenCurvePublic, _out_362: DataOut): void  {
        const typeId = typeof (obj_361 as any).getAetherTypeId === 'function' ? obj_361.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenCurvePublic' with invalid type id $ {
            typeId
        }
        `);
        _out_362.writeByte(typeId);
        switch(typeId)  {
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_360, obj_361 as any as HydrogenCurvePublic, _out_362);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_360, obj_361 as any as SodiumChacha20Poly1305, _out_362);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_360, obj_361 as any as HydrogenSecretBox, _out_362);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_360, obj_361 as any as SodiumCurvePublic, _out_362);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_360, obj_361 as any as HydrogenCurvePrivate, _out_362);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_360, obj_361 as any as SodiumCurvePrivate, _out_362);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_360, obj_361 as any as SodiumSignPublic, _out_362);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_360, obj_361 as any as HydrogenSignPublic, _out_362);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_360, obj_361 as any as SodiumSignPrivate, _out_362);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_360, obj_361 as any as HydrogenSignPrivate, _out_362);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenCurvePublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_360: MetaContext, in__363: DataIn): HydrogenCurvePublic  {
        const typeId = in__363.readUByte();
        switch(typeId)  {
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenCurvePublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenCurvePublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenCurvePublic;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenCurvePublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenCurvePublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenCurvePublic;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenCurvePublic;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenCurvePublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenCurvePublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenCurvePublic;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'HydrogenCurvePublic'`);
            
        }
        
    }
    metaHashCode(obj: HydrogenCurvePublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 2: return (HydrogenCurvePublic as any).META_BODY.metaHashCode(obj as any as HydrogenCurvePublic);
            case 6: return (SodiumChacha20Poly1305 as any).META.metaHashCode(obj as any as SodiumChacha20Poly1305);
            case 3: return (HydrogenSecretBox as any).META.metaHashCode(obj as any as HydrogenSecretBox);
            case 8: return (SodiumCurvePublic as any).META.metaHashCode(obj as any as SodiumCurvePublic);
            case 1: return (HydrogenCurvePrivate as any).META.metaHashCode(obj as any as HydrogenCurvePrivate);
            case 7: return (SodiumCurvePrivate as any).META.metaHashCode(obj as any as SodiumCurvePrivate);
            case 10: return (SodiumSignPublic as any).META.metaHashCode(obj as any as SodiumSignPublic);
            case 5: return (HydrogenSignPublic as any).META.metaHashCode(obj as any as HydrogenSignPublic);
            case 9: return (SodiumSignPrivate as any).META.metaHashCode(obj as any as SodiumSignPrivate);
            case 4: return (HydrogenSignPrivate as any).META.metaHashCode(obj as any as HydrogenSignPrivate);
            default: throw new Error(`Cannot hashCode 'HydrogenCurvePublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: HydrogenCurvePublic | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 2: return (HydrogenCurvePublic as any).META_BODY.metaEquals(v1 as any as HydrogenCurvePublic, v2);
            case 6: return (SodiumChacha20Poly1305 as any).META.metaEquals(v1 as any as SodiumChacha20Poly1305, v2);
            case 3: return (HydrogenSecretBox as any).META.metaEquals(v1 as any as HydrogenSecretBox, v2);
            case 8: return (SodiumCurvePublic as any).META.metaEquals(v1 as any as SodiumCurvePublic, v2);
            case 1: return (HydrogenCurvePrivate as any).META.metaEquals(v1 as any as HydrogenCurvePrivate, v2);
            case 7: return (SodiumCurvePrivate as any).META.metaEquals(v1 as any as SodiumCurvePrivate, v2);
            case 10: return (SodiumSignPublic as any).META.metaEquals(v1 as any as SodiumSignPublic, v2);
            case 5: return (HydrogenSignPublic as any).META.metaEquals(v1 as any as HydrogenSignPublic, v2);
            case 9: return (SodiumSignPrivate as any).META.metaEquals(v1 as any as SodiumSignPrivate, v2);
            case 4: return (HydrogenSignPrivate as any).META.metaEquals(v1 as any as HydrogenSignPrivate, v2);
            default: throw new Error(`Cannot equals 'HydrogenCurvePublic' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: HydrogenCurvePublic | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 2: (HydrogenCurvePublic as any).META_BODY.metaToString(obj as any as HydrogenCurvePublic, res);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META.metaToString(obj as any as SodiumChacha20Poly1305, res);
            break;
            case 3: (HydrogenSecretBox as any).META.metaToString(obj as any as HydrogenSecretBox, res);
            break;
            case 8: (SodiumCurvePublic as any).META.metaToString(obj as any as SodiumCurvePublic, res);
            break;
            case 1: (HydrogenCurvePrivate as any).META.metaToString(obj as any as HydrogenCurvePrivate, res);
            break;
            case 7: (SodiumCurvePrivate as any).META.metaToString(obj as any as SodiumCurvePrivate, res);
            break;
            case 10: (SodiumSignPublic as any).META.metaToString(obj as any as SodiumSignPublic, res);
            break;
            case 5: (HydrogenSignPublic as any).META.metaToString(obj as any as HydrogenSignPublic, res);
            break;
            case 9: (SodiumSignPrivate as any).META.metaToString(obj as any as SodiumSignPrivate, res);
            break;
            case 4: (HydrogenSignPrivate as any).META.metaToString(obj as any as HydrogenSignPrivate, res);
            break;
            default: throw new Error(`Cannot toString 'HydrogenCurvePublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: HydrogenCurvePublic): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenCurvePublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenCurvePublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenSecretBoxMetaBodyImpl implements FastMetaType<HydrogenSecretBox>  {
    serialize(sCtx_364: MetaContext, obj_365: HydrogenSecretBox, _out_366: DataOut): void  {
        if (obj_365.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_365.data must be 32 but was $ {
            obj_365.data.length
        }
        `);
        _out_366.write(obj_365.data);
        
    }
    deserialize(sCtx_364: MetaContext, in__367: DataIn): HydrogenSecretBox  {
        let data_369: Uint8Array;
        const len_371 = 32;
        const bytes_372 = in__367.readBytes(len_371);
        data_369 = bytes_372;
        return new HydrogenSecretBox(data_369);
        
    }
    metaHashCode(obj: HydrogenSecretBox | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: HydrogenSecretBox | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof HydrogenSecretBox)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: HydrogenSecretBox | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('HydrogenSecretBox(');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: HydrogenSecretBox): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenSecretBox  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenSecretBox  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenSecretBoxMetaImpl implements FastMetaType<HydrogenSecretBox>  {
    serialize(sCtx_373: MetaContext, obj_374: HydrogenSecretBox, _out_375: DataOut): void  {
        const typeId = typeof (obj_374 as any).getAetherTypeId === 'function' ? obj_374.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenSecretBox' with invalid type id $ {
            typeId
        }
        `);
        _out_375.writeByte(typeId);
        switch(typeId)  {
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_373, obj_374 as any as HydrogenSecretBox, _out_375);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_373, obj_374 as any as SodiumChacha20Poly1305, _out_375);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_373, obj_374 as any as HydrogenCurvePublic, _out_375);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_373, obj_374 as any as SodiumCurvePublic, _out_375);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_373, obj_374 as any as HydrogenCurvePrivate, _out_375);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_373, obj_374 as any as SodiumCurvePrivate, _out_375);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_373, obj_374 as any as SodiumSignPublic, _out_375);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_373, obj_374 as any as HydrogenSignPublic, _out_375);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_373, obj_374 as any as SodiumSignPrivate, _out_375);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_373, obj_374 as any as HydrogenSignPrivate, _out_375);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenSecretBox' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_373: MetaContext, in__376: DataIn): HydrogenSecretBox  {
        const typeId = in__376.readUByte();
        switch(typeId)  {
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSecretBox;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSecretBox;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSecretBox;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSecretBox;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSecretBox;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSecretBox;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSecretBox;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSecretBox;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSecretBox;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSecretBox;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'HydrogenSecretBox'`);
            
        }
        
    }
    metaHashCode(obj: HydrogenSecretBox | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 3: return (HydrogenSecretBox as any).META_BODY.metaHashCode(obj as any as HydrogenSecretBox);
            case 6: return (SodiumChacha20Poly1305 as any).META.metaHashCode(obj as any as SodiumChacha20Poly1305);
            case 2: return (HydrogenCurvePublic as any).META.metaHashCode(obj as any as HydrogenCurvePublic);
            case 8: return (SodiumCurvePublic as any).META.metaHashCode(obj as any as SodiumCurvePublic);
            case 1: return (HydrogenCurvePrivate as any).META.metaHashCode(obj as any as HydrogenCurvePrivate);
            case 7: return (SodiumCurvePrivate as any).META.metaHashCode(obj as any as SodiumCurvePrivate);
            case 10: return (SodiumSignPublic as any).META.metaHashCode(obj as any as SodiumSignPublic);
            case 5: return (HydrogenSignPublic as any).META.metaHashCode(obj as any as HydrogenSignPublic);
            case 9: return (SodiumSignPrivate as any).META.metaHashCode(obj as any as SodiumSignPrivate);
            case 4: return (HydrogenSignPrivate as any).META.metaHashCode(obj as any as HydrogenSignPrivate);
            default: throw new Error(`Cannot hashCode 'HydrogenSecretBox' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: HydrogenSecretBox | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 3: return (HydrogenSecretBox as any).META_BODY.metaEquals(v1 as any as HydrogenSecretBox, v2);
            case 6: return (SodiumChacha20Poly1305 as any).META.metaEquals(v1 as any as SodiumChacha20Poly1305, v2);
            case 2: return (HydrogenCurvePublic as any).META.metaEquals(v1 as any as HydrogenCurvePublic, v2);
            case 8: return (SodiumCurvePublic as any).META.metaEquals(v1 as any as SodiumCurvePublic, v2);
            case 1: return (HydrogenCurvePrivate as any).META.metaEquals(v1 as any as HydrogenCurvePrivate, v2);
            case 7: return (SodiumCurvePrivate as any).META.metaEquals(v1 as any as SodiumCurvePrivate, v2);
            case 10: return (SodiumSignPublic as any).META.metaEquals(v1 as any as SodiumSignPublic, v2);
            case 5: return (HydrogenSignPublic as any).META.metaEquals(v1 as any as HydrogenSignPublic, v2);
            case 9: return (SodiumSignPrivate as any).META.metaEquals(v1 as any as SodiumSignPrivate, v2);
            case 4: return (HydrogenSignPrivate as any).META.metaEquals(v1 as any as HydrogenSignPrivate, v2);
            default: throw new Error(`Cannot equals 'HydrogenSecretBox' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: HydrogenSecretBox | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 3: (HydrogenSecretBox as any).META_BODY.metaToString(obj as any as HydrogenSecretBox, res);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META.metaToString(obj as any as SodiumChacha20Poly1305, res);
            break;
            case 2: (HydrogenCurvePublic as any).META.metaToString(obj as any as HydrogenCurvePublic, res);
            break;
            case 8: (SodiumCurvePublic as any).META.metaToString(obj as any as SodiumCurvePublic, res);
            break;
            case 1: (HydrogenCurvePrivate as any).META.metaToString(obj as any as HydrogenCurvePrivate, res);
            break;
            case 7: (SodiumCurvePrivate as any).META.metaToString(obj as any as SodiumCurvePrivate, res);
            break;
            case 10: (SodiumSignPublic as any).META.metaToString(obj as any as SodiumSignPublic, res);
            break;
            case 5: (HydrogenSignPublic as any).META.metaToString(obj as any as HydrogenSignPublic, res);
            break;
            case 9: (SodiumSignPrivate as any).META.metaToString(obj as any as SodiumSignPrivate, res);
            break;
            case 4: (HydrogenSignPrivate as any).META.metaToString(obj as any as HydrogenSignPrivate, res);
            break;
            default: throw new Error(`Cannot toString 'HydrogenSecretBox' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: HydrogenSecretBox): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenSecretBox  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenSecretBox  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenSignPrivateMetaBodyImpl implements FastMetaType<HydrogenSignPrivate>  {
    serialize(sCtx_377: MetaContext, obj_378: HydrogenSignPrivate, _out_379: DataOut): void  {
        if (obj_378.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_378.data must be 64 but was $ {
            obj_378.data.length
        }
        `);
        _out_379.write(obj_378.data);
        
    }
    deserialize(sCtx_377: MetaContext, in__380: DataIn): HydrogenSignPrivate  {
        let data_382: Uint8Array;
        const len_384 = 64;
        const bytes_385 = in__380.readBytes(len_384);
        data_382 = bytes_385;
        return new HydrogenSignPrivate(data_382);
        
    }
    metaHashCode(obj: HydrogenSignPrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: HydrogenSignPrivate | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof HydrogenSignPrivate)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: HydrogenSignPrivate | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('HydrogenSignPrivate(');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: HydrogenSignPrivate): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenSignPrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenSignPrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenSignPrivateMetaImpl implements FastMetaType<HydrogenSignPrivate>  {
    serialize(sCtx_386: MetaContext, obj_387: HydrogenSignPrivate, _out_388: DataOut): void  {
        const typeId = typeof (obj_387 as any).getAetherTypeId === 'function' ? obj_387.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenSignPrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_388.writeByte(typeId);
        switch(typeId)  {
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_386, obj_387 as any as HydrogenSignPrivate, _out_388);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_386, obj_387 as any as SodiumChacha20Poly1305, _out_388);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_386, obj_387 as any as HydrogenSecretBox, _out_388);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_386, obj_387 as any as HydrogenCurvePublic, _out_388);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_386, obj_387 as any as SodiumCurvePublic, _out_388);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_386, obj_387 as any as HydrogenCurvePrivate, _out_388);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_386, obj_387 as any as SodiumCurvePrivate, _out_388);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_386, obj_387 as any as SodiumSignPublic, _out_388);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_386, obj_387 as any as HydrogenSignPublic, _out_388);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_386, obj_387 as any as SodiumSignPrivate, _out_388);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenSignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_386: MetaContext, in__389: DataIn): HydrogenSignPrivate  {
        const typeId = in__389.readUByte();
        switch(typeId)  {
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPrivate;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPrivate;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPrivate;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPrivate;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'HydrogenSignPrivate'`);
            
        }
        
    }
    metaHashCode(obj: HydrogenSignPrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 4: return (HydrogenSignPrivate as any).META_BODY.metaHashCode(obj as any as HydrogenSignPrivate);
            case 6: return (SodiumChacha20Poly1305 as any).META.metaHashCode(obj as any as SodiumChacha20Poly1305);
            case 3: return (HydrogenSecretBox as any).META.metaHashCode(obj as any as HydrogenSecretBox);
            case 2: return (HydrogenCurvePublic as any).META.metaHashCode(obj as any as HydrogenCurvePublic);
            case 8: return (SodiumCurvePublic as any).META.metaHashCode(obj as any as SodiumCurvePublic);
            case 1: return (HydrogenCurvePrivate as any).META.metaHashCode(obj as any as HydrogenCurvePrivate);
            case 7: return (SodiumCurvePrivate as any).META.metaHashCode(obj as any as SodiumCurvePrivate);
            case 10: return (SodiumSignPublic as any).META.metaHashCode(obj as any as SodiumSignPublic);
            case 5: return (HydrogenSignPublic as any).META.metaHashCode(obj as any as HydrogenSignPublic);
            case 9: return (SodiumSignPrivate as any).META.metaHashCode(obj as any as SodiumSignPrivate);
            default: throw new Error(`Cannot hashCode 'HydrogenSignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: HydrogenSignPrivate | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 4: return (HydrogenSignPrivate as any).META_BODY.metaEquals(v1 as any as HydrogenSignPrivate, v2);
            case 6: return (SodiumChacha20Poly1305 as any).META.metaEquals(v1 as any as SodiumChacha20Poly1305, v2);
            case 3: return (HydrogenSecretBox as any).META.metaEquals(v1 as any as HydrogenSecretBox, v2);
            case 2: return (HydrogenCurvePublic as any).META.metaEquals(v1 as any as HydrogenCurvePublic, v2);
            case 8: return (SodiumCurvePublic as any).META.metaEquals(v1 as any as SodiumCurvePublic, v2);
            case 1: return (HydrogenCurvePrivate as any).META.metaEquals(v1 as any as HydrogenCurvePrivate, v2);
            case 7: return (SodiumCurvePrivate as any).META.metaEquals(v1 as any as SodiumCurvePrivate, v2);
            case 10: return (SodiumSignPublic as any).META.metaEquals(v1 as any as SodiumSignPublic, v2);
            case 5: return (HydrogenSignPublic as any).META.metaEquals(v1 as any as HydrogenSignPublic, v2);
            case 9: return (SodiumSignPrivate as any).META.metaEquals(v1 as any as SodiumSignPrivate, v2);
            default: throw new Error(`Cannot equals 'HydrogenSignPrivate' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: HydrogenSignPrivate | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 4: (HydrogenSignPrivate as any).META_BODY.metaToString(obj as any as HydrogenSignPrivate, res);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META.metaToString(obj as any as SodiumChacha20Poly1305, res);
            break;
            case 3: (HydrogenSecretBox as any).META.metaToString(obj as any as HydrogenSecretBox, res);
            break;
            case 2: (HydrogenCurvePublic as any).META.metaToString(obj as any as HydrogenCurvePublic, res);
            break;
            case 8: (SodiumCurvePublic as any).META.metaToString(obj as any as SodiumCurvePublic, res);
            break;
            case 1: (HydrogenCurvePrivate as any).META.metaToString(obj as any as HydrogenCurvePrivate, res);
            break;
            case 7: (SodiumCurvePrivate as any).META.metaToString(obj as any as SodiumCurvePrivate, res);
            break;
            case 10: (SodiumSignPublic as any).META.metaToString(obj as any as SodiumSignPublic, res);
            break;
            case 5: (HydrogenSignPublic as any).META.metaToString(obj as any as HydrogenSignPublic, res);
            break;
            case 9: (SodiumSignPrivate as any).META.metaToString(obj as any as SodiumSignPrivate, res);
            break;
            default: throw new Error(`Cannot toString 'HydrogenSignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: HydrogenSignPrivate): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenSignPrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenSignPrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenSignPublicMetaBodyImpl implements FastMetaType<HydrogenSignPublic>  {
    serialize(sCtx_390: MetaContext, obj_391: HydrogenSignPublic, _out_392: DataOut): void  {
        if (obj_391.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_391.data must be 32 but was $ {
            obj_391.data.length
        }
        `);
        _out_392.write(obj_391.data);
        
    }
    deserialize(sCtx_390: MetaContext, in__393: DataIn): HydrogenSignPublic  {
        let data_395: Uint8Array;
        const len_397 = 32;
        const bytes_398 = in__393.readBytes(len_397);
        data_395 = bytes_398;
        return new HydrogenSignPublic(data_395);
        
    }
    metaHashCode(obj: HydrogenSignPublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: HydrogenSignPublic | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof HydrogenSignPublic)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: HydrogenSignPublic | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('HydrogenSignPublic(');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: HydrogenSignPublic): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenSignPublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenSignPublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenSignPublicMetaImpl implements FastMetaType<HydrogenSignPublic>  {
    serialize(sCtx_399: MetaContext, obj_400: HydrogenSignPublic, _out_401: DataOut): void  {
        const typeId = typeof (obj_400 as any).getAetherTypeId === 'function' ? obj_400.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenSignPublic' with invalid type id $ {
            typeId
        }
        `);
        _out_401.writeByte(typeId);
        switch(typeId)  {
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_399, obj_400 as any as HydrogenSignPublic, _out_401);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_399, obj_400 as any as SodiumChacha20Poly1305, _out_401);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_399, obj_400 as any as HydrogenSecretBox, _out_401);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_399, obj_400 as any as HydrogenCurvePublic, _out_401);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_399, obj_400 as any as SodiumCurvePublic, _out_401);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_399, obj_400 as any as HydrogenCurvePrivate, _out_401);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_399, obj_400 as any as SodiumCurvePrivate, _out_401);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_399, obj_400 as any as SodiumSignPublic, _out_401);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_399, obj_400 as any as SodiumSignPrivate, _out_401);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_399, obj_400 as any as HydrogenSignPrivate, _out_401);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenSignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_399: MetaContext, in__402: DataIn): HydrogenSignPublic  {
        const typeId = in__402.readUByte();
        switch(typeId)  {
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_399, in__402) as any as HydrogenSignPublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_399, in__402) as any as HydrogenSignPublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_399, in__402) as any as HydrogenSignPublic;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_399, in__402) as any as HydrogenSignPublic;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_399, in__402) as any as HydrogenSignPublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_399, in__402) as any as HydrogenSignPublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_399, in__402) as any as HydrogenSignPublic;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_399, in__402) as any as HydrogenSignPublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_399, in__402) as any as HydrogenSignPublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_399, in__402) as any as HydrogenSignPublic;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'HydrogenSignPublic'`);
            
        }
        
    }
    metaHashCode(obj: HydrogenSignPublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 5: return (HydrogenSignPublic as any).META_BODY.metaHashCode(obj as any as HydrogenSignPublic);
            case 6: return (SodiumChacha20Poly1305 as any).META.metaHashCode(obj as any as SodiumChacha20Poly1305);
            case 3: return (HydrogenSecretBox as any).META.metaHashCode(obj as any as HydrogenSecretBox);
            case 2: return (HydrogenCurvePublic as any).META.metaHashCode(obj as any as HydrogenCurvePublic);
            case 8: return (SodiumCurvePublic as any).META.metaHashCode(obj as any as SodiumCurvePublic);
            case 1: return (HydrogenCurvePrivate as any).META.metaHashCode(obj as any as HydrogenCurvePrivate);
            case 7: return (SodiumCurvePrivate as any).META.metaHashCode(obj as any as SodiumCurvePrivate);
            case 10: return (SodiumSignPublic as any).META.metaHashCode(obj as any as SodiumSignPublic);
            case 9: return (SodiumSignPrivate as any).META.metaHashCode(obj as any as SodiumSignPrivate);
            case 4: return (HydrogenSignPrivate as any).META.metaHashCode(obj as any as HydrogenSignPrivate);
            default: throw new Error(`Cannot hashCode 'HydrogenSignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: HydrogenSignPublic | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 5: return (HydrogenSignPublic as any).META_BODY.metaEquals(v1 as any as HydrogenSignPublic, v2);
            case 6: return (SodiumChacha20Poly1305 as any).META.metaEquals(v1 as any as SodiumChacha20Poly1305, v2);
            case 3: return (HydrogenSecretBox as any).META.metaEquals(v1 as any as HydrogenSecretBox, v2);
            case 2: return (HydrogenCurvePublic as any).META.metaEquals(v1 as any as HydrogenCurvePublic, v2);
            case 8: return (SodiumCurvePublic as any).META.metaEquals(v1 as any as SodiumCurvePublic, v2);
            case 1: return (HydrogenCurvePrivate as any).META.metaEquals(v1 as any as HydrogenCurvePrivate, v2);
            case 7: return (SodiumCurvePrivate as any).META.metaEquals(v1 as any as SodiumCurvePrivate, v2);
            case 10: return (SodiumSignPublic as any).META.metaEquals(v1 as any as SodiumSignPublic, v2);
            case 9: return (SodiumSignPrivate as any).META.metaEquals(v1 as any as SodiumSignPrivate, v2);
            case 4: return (HydrogenSignPrivate as any).META.metaEquals(v1 as any as HydrogenSignPrivate, v2);
            default: throw new Error(`Cannot equals 'HydrogenSignPublic' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: HydrogenSignPublic | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 5: (HydrogenSignPublic as any).META_BODY.metaToString(obj as any as HydrogenSignPublic, res);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META.metaToString(obj as any as SodiumChacha20Poly1305, res);
            break;
            case 3: (HydrogenSecretBox as any).META.metaToString(obj as any as HydrogenSecretBox, res);
            break;
            case 2: (HydrogenCurvePublic as any).META.metaToString(obj as any as HydrogenCurvePublic, res);
            break;
            case 8: (SodiumCurvePublic as any).META.metaToString(obj as any as SodiumCurvePublic, res);
            break;
            case 1: (HydrogenCurvePrivate as any).META.metaToString(obj as any as HydrogenCurvePrivate, res);
            break;
            case 7: (SodiumCurvePrivate as any).META.metaToString(obj as any as SodiumCurvePrivate, res);
            break;
            case 10: (SodiumSignPublic as any).META.metaToString(obj as any as SodiumSignPublic, res);
            break;
            case 9: (SodiumSignPrivate as any).META.metaToString(obj as any as SodiumSignPrivate, res);
            break;
            case 4: (HydrogenSignPrivate as any).META.metaToString(obj as any as HydrogenSignPrivate, res);
            break;
            default: throw new Error(`Cannot toString 'HydrogenSignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: HydrogenSignPublic): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenSignPublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenSignPublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class IPAddressAndPortsMetaBodyImpl implements FastMetaType<IPAddressAndPorts>  {
    serialize(sCtx_403: MetaContext, obj_404: IPAddressAndPorts, _out_405: DataOut): void  {
        IPAddress.META.serialize(sCtx_403, obj_404.address, _out_405);
        SerializerPackNumber.INSTANCE.put(_out_405, obj_404.coderAndPorts.length);
        for (const el_407 of obj_404.coderAndPorts)  {
            CoderAndPort.META.serialize(sCtx_403, el_407, _out_405);
            
        }
        
    }
    deserialize(sCtx_403: MetaContext, in__406: DataIn): IPAddressAndPorts  {
        let address_408: IPAddress;
        let coderAndPorts_409: CoderAndPort[];
        address_408 = IPAddress.META.deserialize(sCtx_403, in__406);
        const len_411 = Number(DeserializerPackNumber.INSTANCE.put(in__406));
        coderAndPorts_409 = new Array<CoderAndPort>(len_411);
        for (let idx_410 = 0;
        idx_410 < len_411;
        idx_410++)  {
            coderAndPorts_409[idx_410] = CoderAndPort.META.deserialize(sCtx_403, in__406);
            
        }
        return new IPAddressAndPorts(address_408, coderAndPorts_409);
        
    }
    metaHashCode(obj: IPAddressAndPorts | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + IPAddress.META.metaHashCode(obj.address);
        hash = 37 * hash + FastMeta.getMetaArray(CoderAndPort.META).metaHashCode(obj.coderAndPorts);
        return hash | 0;
        
    }
    metaEquals(v1: IPAddressAndPorts | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof IPAddressAndPorts)) return false;
        if (!IPAddress.META.metaEquals(v1.address, v2.address)) return false;
        if (!FastMeta.getMetaArray(CoderAndPort.META).metaEquals(v1.coderAndPorts, v2.coderAndPorts)) return false;
        return true;
        
    }
    metaToString(obj: IPAddressAndPorts | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('IPAddressAndPorts(');
        res.add('address:').add(obj.address);
        res.add(', ');
        res.add('coderAndPorts:').add(obj.coderAndPorts);
        res.add(')');
        
    }
    public serializeToBytes(obj: IPAddressAndPorts): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): IPAddressAndPorts  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): IPAddressAndPorts  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class IPAddressAndPortsListMetaBodyImpl implements FastMetaType<IPAddressAndPortsList>  {
    serialize(sCtx_412: MetaContext, obj_413: IPAddressAndPortsList, _out_414: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_414, obj_413.addresses.length);
        for (const el_416 of obj_413.addresses)  {
            IPAddressAndPorts.META.serialize(sCtx_412, el_416, _out_414);
            
        }
        
    }
    deserialize(sCtx_412: MetaContext, in__415: DataIn): IPAddressAndPortsList  {
        let addresses_417: IPAddressAndPorts[];
        const len_419 = Number(DeserializerPackNumber.INSTANCE.put(in__415));
        addresses_417 = new Array<IPAddressAndPorts>(len_419);
        for (let idx_418 = 0;
        idx_418 < len_419;
        idx_418++)  {
            addresses_417[idx_418] = IPAddressAndPorts.META.deserialize(sCtx_412, in__415);
            
        }
        return new IPAddressAndPortsList(addresses_417);
        
    }
    metaHashCode(obj: IPAddressAndPortsList | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(IPAddressAndPorts.META).metaHashCode(obj.addresses);
        return hash | 0;
        
    }
    metaEquals(v1: IPAddressAndPortsList | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof IPAddressAndPortsList)) return false;
        if (!FastMeta.getMetaArray(IPAddressAndPorts.META).metaEquals(v1.addresses, v2.addresses)) return false;
        return true;
        
    }
    metaToString(obj: IPAddressAndPortsList | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('IPAddressAndPortsList(');
        res.add('addresses:').add(obj.addresses);
        res.add(')');
        
    }
    public serializeToBytes(obj: IPAddressAndPortsList): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): IPAddressAndPortsList  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): IPAddressAndPortsList  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class IPAddressV4MetaBodyImpl implements FastMetaType<IPAddressV4>  {
    serialize(sCtx_420: MetaContext, obj_421: IPAddressV4, _out_422: DataOut): void  {
        if (obj_421.data.length !== 4) throw new Error(`IllegalStateException: Array length for obj_421.data must be 4 but was $ {
            obj_421.data.length
        }
        `);
        _out_422.write(obj_421.data);
        
    }
    deserialize(sCtx_420: MetaContext, in__423: DataIn): IPAddressV4  {
        let data_425: Uint8Array;
        const len_427 = 4;
        const bytes_428 = in__423.readBytes(len_427);
        data_425 = bytes_428;
        return new IPAddressV4(data_425);
        
    }
    metaHashCode(obj: IPAddressV4 | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: IPAddressV4 | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof IPAddressV4)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: IPAddressV4 | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('IPAddressV4(');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: IPAddressV4): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): IPAddressV4  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): IPAddressV4  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class IPAddressV4MetaImpl implements FastMetaType<IPAddressV4>  {
    serialize(sCtx_429: MetaContext, obj_430: IPAddressV4, _out_431: DataOut): void  {
        const typeId = typeof (obj_430 as any).getAetherTypeId === 'function' ? obj_430.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'IPAddressV4' with invalid type id $ {
            typeId
        }
        `);
        _out_431.writeByte(typeId);
        switch(typeId)  {
            case 1: (IPAddressV4 as any).META_BODY.serialize(sCtx_429, obj_430 as any as IPAddressV4, _out_431);
            break;
            case 2: (IPAddressV6 as any).META_BODY.serialize(sCtx_429, obj_430 as any as IPAddressV6, _out_431);
            break;
            case 3: (IPAddressWeb as any).META_BODY.serialize(sCtx_429, obj_430 as any as IPAddressWeb, _out_431);
            break;
            default: throw new Error(`Cannot serialize 'IPAddressV4' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_429: MetaContext, in__432: DataIn): IPAddressV4  {
        const typeId = in__432.readUByte();
        switch(typeId)  {
            case 1: return (IPAddressV4 as any).META_BODY.deserialize(sCtx_429, in__432) as any as IPAddressV4;
            case 2: return (IPAddressV6 as any).META_BODY.deserialize(sCtx_429, in__432) as any as IPAddressV4;
            case 3: return (IPAddressWeb as any).META_BODY.deserialize(sCtx_429, in__432) as any as IPAddressV4;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'IPAddressV4'`);
            
        }
        
    }
    metaHashCode(obj: IPAddressV4 | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: return (IPAddressV4 as any).META_BODY.metaHashCode(obj as any as IPAddressV4);
            case 2: return (IPAddressV6 as any).META.metaHashCode(obj as any as IPAddressV6);
            case 3: return (IPAddressWeb as any).META.metaHashCode(obj as any as IPAddressWeb);
            default: throw new Error(`Cannot hashCode 'IPAddressV4' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: IPAddressV4 | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 1: return (IPAddressV4 as any).META_BODY.metaEquals(v1 as any as IPAddressV4, v2);
            case 2: return (IPAddressV6 as any).META.metaEquals(v1 as any as IPAddressV6, v2);
            case 3: return (IPAddressWeb as any).META.metaEquals(v1 as any as IPAddressWeb, v2);
            default: throw new Error(`Cannot equals 'IPAddressV4' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: IPAddressV4 | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: (IPAddressV4 as any).META_BODY.metaToString(obj as any as IPAddressV4, res);
            break;
            case 2: (IPAddressV6 as any).META.metaToString(obj as any as IPAddressV6, res);
            break;
            case 3: (IPAddressWeb as any).META.metaToString(obj as any as IPAddressWeb, res);
            break;
            default: throw new Error(`Cannot toString 'IPAddressV4' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: IPAddressV4): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): IPAddressV4  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): IPAddressV4  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class IPAddressV6MetaBodyImpl implements FastMetaType<IPAddressV6>  {
    serialize(sCtx_433: MetaContext, obj_434: IPAddressV6, _out_435: DataOut): void  {
        if (obj_434.data.length !== 16) throw new Error(`IllegalStateException: Array length for obj_434.data must be 16 but was $ {
            obj_434.data.length
        }
        `);
        _out_435.write(obj_434.data);
        
    }
    deserialize(sCtx_433: MetaContext, in__436: DataIn): IPAddressV6  {
        let data_438: Uint8Array;
        const len_440 = 16;
        const bytes_441 = in__436.readBytes(len_440);
        data_438 = bytes_441;
        return new IPAddressV6(data_438);
        
    }
    metaHashCode(obj: IPAddressV6 | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: IPAddressV6 | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof IPAddressV6)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: IPAddressV6 | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('IPAddressV6(');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: IPAddressV6): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): IPAddressV6  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): IPAddressV6  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class IPAddressV6MetaImpl implements FastMetaType<IPAddressV6>  {
    serialize(sCtx_442: MetaContext, obj_443: IPAddressV6, _out_444: DataOut): void  {
        const typeId = typeof (obj_443 as any).getAetherTypeId === 'function' ? obj_443.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'IPAddressV6' with invalid type id $ {
            typeId
        }
        `);
        _out_444.writeByte(typeId);
        switch(typeId)  {
            case 2: (IPAddressV6 as any).META_BODY.serialize(sCtx_442, obj_443 as any as IPAddressV6, _out_444);
            break;
            case 1: (IPAddressV4 as any).META_BODY.serialize(sCtx_442, obj_443 as any as IPAddressV4, _out_444);
            break;
            case 3: (IPAddressWeb as any).META_BODY.serialize(sCtx_442, obj_443 as any as IPAddressWeb, _out_444);
            break;
            default: throw new Error(`Cannot serialize 'IPAddressV6' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_442: MetaContext, in__445: DataIn): IPAddressV6  {
        const typeId = in__445.readUByte();
        switch(typeId)  {
            case 2: return (IPAddressV6 as any).META_BODY.deserialize(sCtx_442, in__445) as any as IPAddressV6;
            case 1: return (IPAddressV4 as any).META_BODY.deserialize(sCtx_442, in__445) as any as IPAddressV6;
            case 3: return (IPAddressWeb as any).META_BODY.deserialize(sCtx_442, in__445) as any as IPAddressV6;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'IPAddressV6'`);
            
        }
        
    }
    metaHashCode(obj: IPAddressV6 | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 2: return (IPAddressV6 as any).META_BODY.metaHashCode(obj as any as IPAddressV6);
            case 1: return (IPAddressV4 as any).META.metaHashCode(obj as any as IPAddressV4);
            case 3: return (IPAddressWeb as any).META.metaHashCode(obj as any as IPAddressWeb);
            default: throw new Error(`Cannot hashCode 'IPAddressV6' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: IPAddressV6 | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 2: return (IPAddressV6 as any).META_BODY.metaEquals(v1 as any as IPAddressV6, v2);
            case 1: return (IPAddressV4 as any).META.metaEquals(v1 as any as IPAddressV4, v2);
            case 3: return (IPAddressWeb as any).META.metaEquals(v1 as any as IPAddressWeb, v2);
            default: throw new Error(`Cannot equals 'IPAddressV6' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: IPAddressV6 | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 2: (IPAddressV6 as any).META_BODY.metaToString(obj as any as IPAddressV6, res);
            break;
            case 1: (IPAddressV4 as any).META.metaToString(obj as any as IPAddressV4, res);
            break;
            case 3: (IPAddressWeb as any).META.metaToString(obj as any as IPAddressWeb, res);
            break;
            default: throw new Error(`Cannot toString 'IPAddressV6' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: IPAddressV6): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): IPAddressV6  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): IPAddressV6  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class IPAddressWebMetaBodyImpl implements FastMetaType<IPAddressWeb>  {
    serialize(sCtx_446: MetaContext, obj_447: IPAddressWeb, _out_448: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_448, obj_447.data.length);
        _out_448.write(obj_447.data);
        
    }
    deserialize(sCtx_446: MetaContext, in__449: DataIn): IPAddressWeb  {
        let data_451: Uint8Array;
        const len_453 = Number(DeserializerPackNumber.INSTANCE.put(in__449));
        const bytes_454 = in__449.readBytes(len_453);
        data_451 = bytes_454;
        return new IPAddressWeb(data_451);
        
    }
    metaHashCode(obj: IPAddressWeb | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: IPAddressWeb | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof IPAddressWeb)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: IPAddressWeb | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('IPAddressWeb(');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: IPAddressWeb): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): IPAddressWeb  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): IPAddressWeb  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class IPAddressWebMetaImpl implements FastMetaType<IPAddressWeb>  {
    serialize(sCtx_455: MetaContext, obj_456: IPAddressWeb, _out_457: DataOut): void  {
        const typeId = typeof (obj_456 as any).getAetherTypeId === 'function' ? obj_456.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'IPAddressWeb' with invalid type id $ {
            typeId
        }
        `);
        _out_457.writeByte(typeId);
        switch(typeId)  {
            case 3: (IPAddressWeb as any).META_BODY.serialize(sCtx_455, obj_456 as any as IPAddressWeb, _out_457);
            break;
            case 1: (IPAddressV4 as any).META_BODY.serialize(sCtx_455, obj_456 as any as IPAddressV4, _out_457);
            break;
            case 2: (IPAddressV6 as any).META_BODY.serialize(sCtx_455, obj_456 as any as IPAddressV6, _out_457);
            break;
            default: throw new Error(`Cannot serialize 'IPAddressWeb' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_455: MetaContext, in__458: DataIn): IPAddressWeb  {
        const typeId = in__458.readUByte();
        switch(typeId)  {
            case 3: return (IPAddressWeb as any).META_BODY.deserialize(sCtx_455, in__458) as any as IPAddressWeb;
            case 1: return (IPAddressV4 as any).META_BODY.deserialize(sCtx_455, in__458) as any as IPAddressWeb;
            case 2: return (IPAddressV6 as any).META_BODY.deserialize(sCtx_455, in__458) as any as IPAddressWeb;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'IPAddressWeb'`);
            
        }
        
    }
    metaHashCode(obj: IPAddressWeb | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 3: return (IPAddressWeb as any).META_BODY.metaHashCode(obj as any as IPAddressWeb);
            case 1: return (IPAddressV4 as any).META.metaHashCode(obj as any as IPAddressV4);
            case 2: return (IPAddressV6 as any).META.metaHashCode(obj as any as IPAddressV6);
            default: throw new Error(`Cannot hashCode 'IPAddressWeb' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: IPAddressWeb | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 3: return (IPAddressWeb as any).META_BODY.metaEquals(v1 as any as IPAddressWeb, v2);
            case 1: return (IPAddressV4 as any).META.metaEquals(v1 as any as IPAddressV4, v2);
            case 2: return (IPAddressV6 as any).META.metaEquals(v1 as any as IPAddressV6, v2);
            default: throw new Error(`Cannot equals 'IPAddressWeb' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: IPAddressWeb | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 3: (IPAddressWeb as any).META_BODY.metaToString(obj as any as IPAddressWeb, res);
            break;
            case 1: (IPAddressV4 as any).META.metaToString(obj as any as IPAddressV4, res);
            break;
            case 2: (IPAddressV6 as any).META.metaToString(obj as any as IPAddressV6, res);
            break;
            default: throw new Error(`Cannot toString 'IPAddressWeb' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: IPAddressWeb): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): IPAddressWeb  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): IPAddressWeb  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class IpInfoMetaBodyImpl implements FastMetaType<IpInfo>  {
    serialize(sCtx_459: MetaContext, obj_460: IpInfo, _out_461: DataOut): void  {
        IPAddress.META.serialize(sCtx_459, obj_460.ip, _out_461);
        _out_461.writeShort(obj_460.port);
        _out_461.writeDouble(obj_460.latitude);
        _out_461.writeDouble(obj_460.longitude);
        
    }
    deserialize(sCtx_459: MetaContext, in__462: DataIn): IpInfo  {
        let ip_463: IPAddress;
        let port_464: number;
        let latitude_465: number;
        let longitude_466: number;
        ip_463 = IPAddress.META.deserialize(sCtx_459, in__462);
        port_464 = in__462.readShort();
        latitude_465 = in__462.readDouble();
        longitude_466 = in__462.readDouble();
        return new IpInfo(ip_463, port_464, latitude_465, longitude_466);
        
    }
    metaHashCode(obj: IpInfo | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + IPAddress.META.metaHashCode(obj.ip);
        hash = 37 * hash + FastMeta.META_SHORT.metaHashCode(obj.port);
        hash = 37 * hash + FastMeta.META_DOUBLE.metaHashCode(obj.latitude);
        hash = 37 * hash + FastMeta.META_DOUBLE.metaHashCode(obj.longitude);
        return hash | 0;
        
    }
    metaEquals(v1: IpInfo | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof IpInfo)) return false;
        if (!IPAddress.META.metaEquals(v1.ip, v2.ip)) return false;
        if (!FastMeta.META_SHORT.metaEquals(v1.port, v2.port)) return false;
        if (!FastMeta.META_DOUBLE.metaEquals(v1.latitude, v2.latitude)) return false;
        if (!FastMeta.META_DOUBLE.metaEquals(v1.longitude, v2.longitude)) return false;
        return true;
        
    }
    metaToString(obj: IpInfo | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('IpInfo(');
        res.add('ip:').add(obj.ip);
        res.add(', ');
        res.add('port:').add(obj.port);
        res.add(', ');
        res.add('latitude:').add(obj.latitude);
        res.add(', ');
        res.add('longitude:').add(obj.longitude);
        res.add(')');
        
    }
    public serializeToBytes(obj: IpInfo): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): IpInfo  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): IpInfo  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class KeyValuePairMetaBodyImpl implements FastMetaType<KeyValuePair>  {
    serialize(sCtx_467: MetaContext, obj_468: KeyValuePair, _out_469: DataOut): void  {
        const stringBytes_471 = new TextEncoder().encode(obj_468.key);
        SerializerPackNumber.INSTANCE.put(_out_469, stringBytes_471.length);
        _out_469.write(stringBytes_471);
        const stringBytes_473 = new TextEncoder().encode(obj_468.value);
        SerializerPackNumber.INSTANCE.put(_out_469, stringBytes_473.length);
        _out_469.write(stringBytes_473);
        
    }
    deserialize(sCtx_467: MetaContext, in__470: DataIn): KeyValuePair  {
        let _key_475: string;
        let value_476: string;
        let stringBytes_477: Uint8Array;
        const len_479 = Number(DeserializerPackNumber.INSTANCE.put(in__470));
        const bytes_480 = in__470.readBytes(len_479);
        stringBytes_477 = bytes_480;
        _key_475 = new TextDecoder('utf-8').decode(stringBytes_477);
        let stringBytes_481: Uint8Array;
        const len_483 = Number(DeserializerPackNumber.INSTANCE.put(in__470));
        const bytes_484 = in__470.readBytes(len_483);
        stringBytes_481 = bytes_484;
        value_476 = new TextDecoder('utf-8').decode(stringBytes_481);
        return new KeyValuePair(_key_475, value_476);
        
    }
    metaHashCode(obj: KeyValuePair | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_STRING.metaHashCode(obj.key);
        hash = 37 * hash + FastMeta.META_STRING.metaHashCode(obj.value);
        return hash | 0;
        
    }
    metaEquals(v1: KeyValuePair | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof KeyValuePair)) return false;
        if (!FastMeta.META_STRING.metaEquals(v1.key, v2.key)) return false;
        if (!FastMeta.META_STRING.metaEquals(v1.value, v2.value)) return false;
        return true;
        
    }
    metaToString(obj: KeyValuePair | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('KeyValuePair(');
        res.add('key:').add(obj.key);
        res.add(', ');
        res.add('value:').add(obj.value);
        res.add(')');
        
    }
    public serializeToBytes(obj: KeyValuePair): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): KeyValuePair  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): KeyValuePair  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class MessageMetaBodyImpl implements FastMetaType<Message>  {
    serialize(sCtx_485: MetaContext, obj_486: Message, _out_487: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_485, obj_486.uid, _out_487);
        SerializerPackNumber.INSTANCE.put(_out_487, obj_486.data.length);
        _out_487.write(obj_486.data);
        
    }
    deserialize(sCtx_485: MetaContext, in__488: DataIn): Message  {
        let uid_490: UUID;
        let data_491: Uint8Array;
        uid_490 = FastMeta.META_UUID.deserialize(sCtx_485, in__488);
        const len_493 = Number(DeserializerPackNumber.INSTANCE.put(in__488));
        const bytes_494 = in__488.readBytes(len_493);
        data_491 = bytes_494;
        return new Message(uid_490, data_491);
        
    }
    metaHashCode(obj: Message | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: Message | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof Message)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: Message | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('Message(');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: Message): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): Message  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): Message  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class MessageInfoMetaBodyImpl implements FastMetaType<MessageInfo>  {
    serialize(sCtx_495: MetaContext, obj_496: MessageInfo, _out_497: DataOut): void  {
        _out_497.writeLong(obj_496.timestamp);
        FastMeta.META_UUID.serialize(sCtx_495, obj_496.fromUid, _out_497);
        FastMeta.META_UUID.serialize(sCtx_495, obj_496.toUid, _out_497);
        _out_497.writeInt(obj_496.size);
        FastMeta.META_UUID.serialize(sCtx_495, obj_496.messageId, _out_497);
        
    }
    deserialize(sCtx_495: MetaContext, in__498: DataIn): MessageInfo  {
        let timestamp_499: bigint;
        let fromUid_500: UUID;
        let toUid_501: UUID;
        let size_502: number;
        let messageId_503: UUID;
        timestamp_499 = in__498.readLong();
        fromUid_500 = FastMeta.META_UUID.deserialize(sCtx_495, in__498);
        toUid_501 = FastMeta.META_UUID.deserialize(sCtx_495, in__498);
        size_502 = in__498.readInt();
        messageId_503 = FastMeta.META_UUID.deserialize(sCtx_495, in__498);
        return new MessageInfo(timestamp_499, fromUid_500, toUid_501, size_502, messageId_503);
        
    }
    metaHashCode(obj: MessageInfo | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.timestamp);
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.fromUid);
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.toUid);
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.size);
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.messageId);
        return hash | 0;
        
    }
    metaEquals(v1: MessageInfo | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof MessageInfo)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.timestamp, v2.timestamp)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.fromUid, v2.fromUid)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.toUid, v2.toUid)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.size, v2.size)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.messageId, v2.messageId)) return false;
        return true;
        
    }
    metaToString(obj: MessageInfo | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('MessageInfo(');
        res.add('timestamp:').add(obj.timestamp);
        res.add(', ');
        res.add('fromUid:').add(obj.fromUid);
        res.add(', ');
        res.add('toUid:').add(obj.toUid);
        res.add(', ');
        res.add('size:').add(obj.size);
        res.add(', ');
        res.add('messageId:').add(obj.messageId);
        res.add(')');
        
    }
    public serializeToBytes(obj: MessageInfo): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): MessageInfo  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): MessageInfo  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class MoneyOperationMetaBodyImpl implements FastMetaType<MoneyOperation>  {
    serialize(sCtx_504: MetaContext, obj_505: MoneyOperation, _out_506: DataOut): void  {
        _out_506.writeLong(obj_505.id);
        FastMeta.META_UUID.serialize(sCtx_504, obj_505.from, _out_506);
        FastMeta.META_UUID.serialize(sCtx_504, obj_505.to, _out_506);
        _out_506.writeLong(obj_505.amount);
        _out_506.writeLong(obj_505.time);
        _out_506.writeBoolean(obj_505.credit);
        Status.META.serialize(sCtx_504, obj_505.status, _out_506);
        
    }
    deserialize(sCtx_504: MetaContext, in__507: DataIn): MoneyOperation  {
        let id_508: bigint;
        let from_509: UUID;
        let to_510: UUID;
        let amount_511: bigint;
        let time_512: bigint;
        let credit_513: boolean;
        let status_514: Status;
        id_508 = in__507.readLong();
        from_509 = FastMeta.META_UUID.deserialize(sCtx_504, in__507);
        to_510 = FastMeta.META_UUID.deserialize(sCtx_504, in__507);
        amount_511 = in__507.readLong();
        time_512 = in__507.readLong();
        credit_513 = in__507.readBoolean();
        status_514 = Status.META.deserialize(sCtx_504, in__507);
        return new MoneyOperation(id_508, from_509, to_510, amount_511, time_512, credit_513, status_514);
        
    }
    metaHashCode(obj: MoneyOperation | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.id);
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.from);
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.to);
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.amount);
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.time);
        hash = 37 * hash + FastMeta.META_BOOLEAN.metaHashCode(obj.credit);
        hash = 37 * hash + Status.META.metaHashCode(obj.status);
        return hash | 0;
        
    }
    metaEquals(v1: MoneyOperation | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof MoneyOperation)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.id, v2.id)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.from, v2.from)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.to, v2.to)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.amount, v2.amount)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.time, v2.time)) return false;
        if (!FastMeta.META_BOOLEAN.metaEquals(v1.credit, v2.credit)) return false;
        if (!Status.META.metaEquals(v1.status, v2.status)) return false;
        return true;
        
    }
    metaToString(obj: MoneyOperation | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('MoneyOperation(');
        res.add('id:').add(obj.id);
        res.add(', ');
        res.add('from:').add(obj.from);
        res.add(', ');
        res.add('to:').add(obj.to);
        res.add(', ');
        res.add('amount:').add(obj.amount);
        res.add(', ');
        res.add('time:').add(obj.time);
        res.add(', ');
        res.add('credit:').add(obj.credit);
        res.add(', ');
        res.add('status:').add(obj.status);
        res.add(')');
        
    }
    public serializeToBytes(obj: MoneyOperation): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): MoneyOperation  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): MoneyOperation  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class PairKeysAsymMetaBodyImpl implements FastMetaType<PairKeysAsym>  {
    serialize(sCtx_515: MetaContext, obj_516: PairKeysAsym, _out_517: DataOut): void  {
        Key.META.serialize(sCtx_515, obj_516.privateKey, _out_517);
        Key.META.serialize(sCtx_515, obj_516.publicKey, _out_517);
        
    }
    deserialize(sCtx_515: MetaContext, in__518: DataIn): PairKeysAsym  {
        let privateKey_519: Key;
        let publicKey_520: Key;
        privateKey_519 = Key.META.deserialize(sCtx_515, in__518);
        publicKey_520 = Key.META.deserialize(sCtx_515, in__518);
        return new PairKeysAsym(privateKey_519, publicKey_520);
        
    }
    metaHashCode(obj: PairKeysAsym | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + Key.META.metaHashCode(obj.privateKey);
        hash = 37 * hash + Key.META.metaHashCode(obj.publicKey);
        return hash | 0;
        
    }
    metaEquals(v1: PairKeysAsym | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof PairKeysAsym)) return false;
        if (!Key.META.metaEquals(v1.privateKey, v2.privateKey)) return false;
        if (!Key.META.metaEquals(v1.publicKey, v2.publicKey)) return false;
        return true;
        
    }
    metaToString(obj: PairKeysAsym | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('PairKeysAsym(');
        res.add('privateKey:').add(obj.privateKey);
        res.add(', ');
        res.add('publicKey:').add(obj.publicKey);
        res.add(')');
        
    }
    public serializeToBytes(obj: PairKeysAsym): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): PairKeysAsym  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): PairKeysAsym  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class PairKeysAsymMetaImpl implements FastMetaType<PairKeysAsym>  {
    serialize(sCtx_521: MetaContext, obj_522: PairKeysAsym, _out_523: DataOut): void  {
        const typeId = typeof (obj_522 as any).getAetherTypeId === 'function' ? obj_522.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeysAsym' with invalid type id $ {
            typeId
        }
        `);
        _out_523.writeByte(typeId);
        switch(typeId)  {
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_521, obj_522 as any as PairKeysAsym, _out_523);
            break;
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_521, obj_522 as any as PairKeysSign, _out_523);
            break;
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_521, obj_522 as any as PairKeysAsymSigned, _out_523);
            break;
            default: throw new Error(`Cannot serialize 'PairKeysAsym' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_521: MetaContext, in__524: DataIn): PairKeysAsym  {
        const typeId = in__524.readUByte();
        switch(typeId)  {
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_521, in__524) as any as PairKeysAsym;
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_521, in__524) as any as PairKeysAsym;
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_521, in__524) as any as PairKeysAsym;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'PairKeysAsym'`);
            
        }
        
    }
    metaHashCode(obj: PairKeysAsym | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: return (PairKeysAsym as any).META_BODY.metaHashCode(obj as any as PairKeysAsym);
            case 3: return (PairKeysSign as any).META.metaHashCode(obj as any as PairKeysSign);
            case 2: return (PairKeysAsymSigned as any).META.metaHashCode(obj as any as PairKeysAsymSigned);
            default: throw new Error(`Cannot hashCode 'PairKeysAsym' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: PairKeysAsym | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 1: return (PairKeysAsym as any).META_BODY.metaEquals(v1 as any as PairKeysAsym, v2);
            case 3: return (PairKeysSign as any).META.metaEquals(v1 as any as PairKeysSign, v2);
            case 2: return (PairKeysAsymSigned as any).META.metaEquals(v1 as any as PairKeysAsymSigned, v2);
            default: throw new Error(`Cannot equals 'PairKeysAsym' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: PairKeysAsym | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: (PairKeysAsym as any).META_BODY.metaToString(obj as any as PairKeysAsym, res);
            break;
            case 3: (PairKeysSign as any).META.metaToString(obj as any as PairKeysSign, res);
            break;
            case 2: (PairKeysAsymSigned as any).META.metaToString(obj as any as PairKeysAsymSigned, res);
            break;
            default: throw new Error(`Cannot toString 'PairKeysAsym' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: PairKeysAsym): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): PairKeysAsym  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): PairKeysAsym  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class PairKeysAsymSignedMetaBodyImpl implements FastMetaType<PairKeysAsymSigned>  {
    serialize(sCtx_525: MetaContext, obj_526: PairKeysAsymSigned, _out_527: DataOut): void  {
        Key.META.serialize(sCtx_525, obj_526.privateKey, _out_527);
        SignedKey.META.serialize(sCtx_525, obj_526.publicKey, _out_527);
        
    }
    deserialize(sCtx_525: MetaContext, in__528: DataIn): PairKeysAsymSigned  {
        let privateKey_529: Key;
        let publicKey_530: SignedKey;
        privateKey_529 = Key.META.deserialize(sCtx_525, in__528);
        publicKey_530 = SignedKey.META.deserialize(sCtx_525, in__528);
        return new PairKeysAsymSigned(privateKey_529, publicKey_530);
        
    }
    metaHashCode(obj: PairKeysAsymSigned | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + Key.META.metaHashCode(obj.privateKey);
        hash = 37 * hash + SignedKey.META.metaHashCode(obj.publicKey);
        return hash | 0;
        
    }
    metaEquals(v1: PairKeysAsymSigned | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof PairKeysAsymSigned)) return false;
        if (!Key.META.metaEquals(v1.privateKey, v2.privateKey)) return false;
        if (!SignedKey.META.metaEquals(v1.publicKey, v2.publicKey)) return false;
        return true;
        
    }
    metaToString(obj: PairKeysAsymSigned | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('PairKeysAsymSigned(');
        res.add('privateKey:').add(obj.privateKey);
        res.add(', ');
        res.add('publicKey:').add(obj.publicKey);
        res.add(')');
        
    }
    public serializeToBytes(obj: PairKeysAsymSigned): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): PairKeysAsymSigned  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): PairKeysAsymSigned  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class PairKeysAsymSignedMetaImpl implements FastMetaType<PairKeysAsymSigned>  {
    serialize(sCtx_531: MetaContext, obj_532: PairKeysAsymSigned, _out_533: DataOut): void  {
        const typeId = typeof (obj_532 as any).getAetherTypeId === 'function' ? obj_532.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeysAsymSigned' with invalid type id $ {
            typeId
        }
        `);
        _out_533.writeByte(typeId);
        switch(typeId)  {
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_531, obj_532 as any as PairKeysAsymSigned, _out_533);
            break;
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_531, obj_532 as any as PairKeysSign, _out_533);
            break;
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_531, obj_532 as any as PairKeysAsym, _out_533);
            break;
            default: throw new Error(`Cannot serialize 'PairKeysAsymSigned' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_531: MetaContext, in__534: DataIn): PairKeysAsymSigned  {
        const typeId = in__534.readUByte();
        switch(typeId)  {
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_531, in__534) as any as PairKeysAsymSigned;
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_531, in__534) as any as PairKeysAsymSigned;
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_531, in__534) as any as PairKeysAsymSigned;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'PairKeysAsymSigned'`);
            
        }
        
    }
    metaHashCode(obj: PairKeysAsymSigned | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 2: return (PairKeysAsymSigned as any).META_BODY.metaHashCode(obj as any as PairKeysAsymSigned);
            case 3: return (PairKeysSign as any).META.metaHashCode(obj as any as PairKeysSign);
            case 1: return (PairKeysAsym as any).META.metaHashCode(obj as any as PairKeysAsym);
            default: throw new Error(`Cannot hashCode 'PairKeysAsymSigned' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: PairKeysAsymSigned | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 2: return (PairKeysAsymSigned as any).META_BODY.metaEquals(v1 as any as PairKeysAsymSigned, v2);
            case 3: return (PairKeysSign as any).META.metaEquals(v1 as any as PairKeysSign, v2);
            case 1: return (PairKeysAsym as any).META.metaEquals(v1 as any as PairKeysAsym, v2);
            default: throw new Error(`Cannot equals 'PairKeysAsymSigned' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: PairKeysAsymSigned | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 2: (PairKeysAsymSigned as any).META_BODY.metaToString(obj as any as PairKeysAsymSigned, res);
            break;
            case 3: (PairKeysSign as any).META.metaToString(obj as any as PairKeysSign, res);
            break;
            case 1: (PairKeysAsym as any).META.metaToString(obj as any as PairKeysAsym, res);
            break;
            default: throw new Error(`Cannot toString 'PairKeysAsymSigned' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: PairKeysAsymSigned): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): PairKeysAsymSigned  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): PairKeysAsymSigned  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class PairKeysSignMetaBodyImpl implements FastMetaType<PairKeysSign>  {
    serialize(sCtx_535: MetaContext, obj_536: PairKeysSign, _out_537: DataOut): void  {
        Key.META.serialize(sCtx_535, obj_536.privateKey, _out_537);
        Key.META.serialize(sCtx_535, obj_536.publicKey, _out_537);
        
    }
    deserialize(sCtx_535: MetaContext, in__538: DataIn): PairKeysSign  {
        let privateKey_539: Key;
        let publicKey_540: Key;
        privateKey_539 = Key.META.deserialize(sCtx_535, in__538);
        publicKey_540 = Key.META.deserialize(sCtx_535, in__538);
        return new PairKeysSign(privateKey_539, publicKey_540);
        
    }
    metaHashCode(obj: PairKeysSign | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + Key.META.metaHashCode(obj.privateKey);
        hash = 37 * hash + Key.META.metaHashCode(obj.publicKey);
        return hash | 0;
        
    }
    metaEquals(v1: PairKeysSign | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof PairKeysSign)) return false;
        if (!Key.META.metaEquals(v1.privateKey, v2.privateKey)) return false;
        if (!Key.META.metaEquals(v1.publicKey, v2.publicKey)) return false;
        return true;
        
    }
    metaToString(obj: PairKeysSign | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('PairKeysSign(');
        res.add('privateKey:').add(obj.privateKey);
        res.add(', ');
        res.add('publicKey:').add(obj.publicKey);
        res.add(')');
        
    }
    public serializeToBytes(obj: PairKeysSign): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): PairKeysSign  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): PairKeysSign  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class PairKeysSignMetaImpl implements FastMetaType<PairKeysSign>  {
    serialize(sCtx_541: MetaContext, obj_542: PairKeysSign, _out_543: DataOut): void  {
        const typeId = typeof (obj_542 as any).getAetherTypeId === 'function' ? obj_542.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeysSign' with invalid type id $ {
            typeId
        }
        `);
        _out_543.writeByte(typeId);
        switch(typeId)  {
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_541, obj_542 as any as PairKeysSign, _out_543);
            break;
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_541, obj_542 as any as PairKeysAsym, _out_543);
            break;
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_541, obj_542 as any as PairKeysAsymSigned, _out_543);
            break;
            default: throw new Error(`Cannot serialize 'PairKeysSign' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_541: MetaContext, in__544: DataIn): PairKeysSign  {
        const typeId = in__544.readUByte();
        switch(typeId)  {
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_541, in__544) as any as PairKeysSign;
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_541, in__544) as any as PairKeysSign;
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_541, in__544) as any as PairKeysSign;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'PairKeysSign'`);
            
        }
        
    }
    metaHashCode(obj: PairKeysSign | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 3: return (PairKeysSign as any).META_BODY.metaHashCode(obj as any as PairKeysSign);
            case 1: return (PairKeysAsym as any).META.metaHashCode(obj as any as PairKeysAsym);
            case 2: return (PairKeysAsymSigned as any).META.metaHashCode(obj as any as PairKeysAsymSigned);
            default: throw new Error(`Cannot hashCode 'PairKeysSign' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: PairKeysSign | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 3: return (PairKeysSign as any).META_BODY.metaEquals(v1 as any as PairKeysSign, v2);
            case 1: return (PairKeysAsym as any).META.metaEquals(v1 as any as PairKeysAsym, v2);
            case 2: return (PairKeysAsymSigned as any).META.metaEquals(v1 as any as PairKeysAsymSigned, v2);
            default: throw new Error(`Cannot equals 'PairKeysSign' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: PairKeysSign | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 3: (PairKeysSign as any).META_BODY.metaToString(obj as any as PairKeysSign, res);
            break;
            case 1: (PairKeysAsym as any).META.metaToString(obj as any as PairKeysAsym, res);
            break;
            case 2: (PairKeysAsymSigned as any).META.metaToString(obj as any as PairKeysAsymSigned, res);
            break;
            default: throw new Error(`Cannot toString 'PairKeysSign' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: PairKeysSign): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): PairKeysSign  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): PairKeysSign  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerDescriptorMetaBodyImpl implements FastMetaType<ServerDescriptor>  {
    serialize(sCtx_545: MetaContext, obj_546: ServerDescriptor, _out_547: DataOut): void  {
        _out_547.writeShort(obj_546.id);
        IPAddressAndPortsList.META.serialize(sCtx_545, obj_546.ipAddress, _out_547);
        
    }
    deserialize(sCtx_545: MetaContext, in__548: DataIn): ServerDescriptor  {
        let id_549: number;
        let ipAddress_550: IPAddressAndPortsList;
        id_549 = in__548.readShort();
        ipAddress_550 = IPAddressAndPortsList.META.deserialize(sCtx_545, in__548);
        return new ServerDescriptor(id_549, ipAddress_550);
        
    }
    metaHashCode(obj: ServerDescriptor | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_SHORT.metaHashCode(obj.id);
        hash = 37 * hash + IPAddressAndPortsList.META.metaHashCode(obj.ipAddress);
        return hash | 0;
        
    }
    metaEquals(v1: ServerDescriptor | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerDescriptor)) return false;
        if (!FastMeta.META_SHORT.metaEquals(v1.id, v2.id)) return false;
        if (!IPAddressAndPortsList.META.metaEquals(v1.ipAddress, v2.ipAddress)) return false;
        return true;
        
    }
    metaToString(obj: ServerDescriptor | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerDescriptor(');
        res.add('id:').add(obj.id);
        res.add(', ');
        res.add('ipAddress:').add(obj.ipAddress);
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerDescriptor): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerDescriptor  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerDescriptor  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerDescriptorWithGeoMetaBodyImpl implements FastMetaType<ServerDescriptorWithGeo>  {
    serialize(sCtx_551: MetaContext, obj_552: ServerDescriptorWithGeo, _out_553: DataOut): void  {
        _out_553.writeShort(obj_552.id);
        IPAddressAndPortsList.META.serialize(sCtx_551, obj_552.ipAddress, _out_553);
        _out_553.writeDouble(obj_552.latitude);
        _out_553.writeDouble(obj_552.longitude);
        
    }
    deserialize(sCtx_551: MetaContext, in__554: DataIn): ServerDescriptorWithGeo  {
        let id_555: number;
        let ipAddress_556: IPAddressAndPortsList;
        let latitude_557: number;
        let longitude_558: number;
        id_555 = in__554.readShort();
        ipAddress_556 = IPAddressAndPortsList.META.deserialize(sCtx_551, in__554);
        latitude_557 = in__554.readDouble();
        longitude_558 = in__554.readDouble();
        return new ServerDescriptorWithGeo(id_555, ipAddress_556, latitude_557, longitude_558);
        
    }
    metaHashCode(obj: ServerDescriptorWithGeo | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_SHORT.metaHashCode(obj.id);
        hash = 37 * hash + IPAddressAndPortsList.META.metaHashCode(obj.ipAddress);
        hash = 37 * hash + FastMeta.META_DOUBLE.metaHashCode(obj.latitude);
        hash = 37 * hash + FastMeta.META_DOUBLE.metaHashCode(obj.longitude);
        return hash | 0;
        
    }
    metaEquals(v1: ServerDescriptorWithGeo | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerDescriptorWithGeo)) return false;
        if (!FastMeta.META_SHORT.metaEquals(v1.id, v2.id)) return false;
        if (!IPAddressAndPortsList.META.metaEquals(v1.ipAddress, v2.ipAddress)) return false;
        if (!FastMeta.META_DOUBLE.metaEquals(v1.latitude, v2.latitude)) return false;
        if (!FastMeta.META_DOUBLE.metaEquals(v1.longitude, v2.longitude)) return false;
        return true;
        
    }
    metaToString(obj: ServerDescriptorWithGeo | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerDescriptorWithGeo(');
        res.add('id:').add(obj.id);
        res.add(', ');
        res.add('ipAddress:').add(obj.ipAddress);
        res.add(', ');
        res.add('latitude:').add(obj.latitude);
        res.add(', ');
        res.add('longitude:').add(obj.longitude);
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerDescriptorWithGeo): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerDescriptorWithGeo  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerDescriptorWithGeo  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SignAE_ED25519MetaBodyImpl implements FastMetaType<SignAE_ED25519>  {
    serialize(sCtx_559: MetaContext, obj_560: SignAE_ED25519, _out_561: DataOut): void  {
        if (obj_560.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_560.data must be 64 but was $ {
            obj_560.data.length
        }
        `);
        _out_561.write(obj_560.data);
        
    }
    deserialize(sCtx_559: MetaContext, in__562: DataIn): SignAE_ED25519  {
        let data_564: Uint8Array;
        const len_566 = 64;
        const bytes_567 = in__562.readBytes(len_566);
        data_564 = bytes_567;
        return new SignAE_ED25519(data_564);
        
    }
    metaHashCode(obj: SignAE_ED25519 | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: SignAE_ED25519 | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof SignAE_ED25519)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: SignAE_ED25519 | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('SignAE_ED25519(');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: SignAE_ED25519): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SignAE_ED25519  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SignAE_ED25519  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SignAE_ED25519MetaImpl implements FastMetaType<SignAE_ED25519>  {
    serialize(sCtx_568: MetaContext, obj_569: SignAE_ED25519, _out_570: DataOut): void  {
        const typeId = typeof (obj_569 as any).getAetherTypeId === 'function' ? obj_569.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SignAE_ED25519' with invalid type id $ {
            typeId
        }
        `);
        _out_570.writeByte(typeId);
        switch(typeId)  {
            case 1: (SignAE_ED25519 as any).META_BODY.serialize(sCtx_568, obj_569 as any as SignAE_ED25519, _out_570);
            break;
            case 2: (SignHYDROGEN as any).META_BODY.serialize(sCtx_568, obj_569 as any as SignHYDROGEN, _out_570);
            break;
            default: throw new Error(`Cannot serialize 'SignAE_ED25519' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_568: MetaContext, in__571: DataIn): SignAE_ED25519  {
        const typeId = in__571.readUByte();
        switch(typeId)  {
            case 1: return (SignAE_ED25519 as any).META_BODY.deserialize(sCtx_568, in__571) as any as SignAE_ED25519;
            case 2: return (SignHYDROGEN as any).META_BODY.deserialize(sCtx_568, in__571) as any as SignAE_ED25519;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'SignAE_ED25519'`);
            
        }
        
    }
    metaHashCode(obj: SignAE_ED25519 | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: return (SignAE_ED25519 as any).META_BODY.metaHashCode(obj as any as SignAE_ED25519);
            case 2: return (SignHYDROGEN as any).META.metaHashCode(obj as any as SignHYDROGEN);
            default: throw new Error(`Cannot hashCode 'SignAE_ED25519' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: SignAE_ED25519 | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 1: return (SignAE_ED25519 as any).META_BODY.metaEquals(v1 as any as SignAE_ED25519, v2);
            case 2: return (SignHYDROGEN as any).META.metaEquals(v1 as any as SignHYDROGEN, v2);
            default: throw new Error(`Cannot equals 'SignAE_ED25519' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: SignAE_ED25519 | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: (SignAE_ED25519 as any).META_BODY.metaToString(obj as any as SignAE_ED25519, res);
            break;
            case 2: (SignHYDROGEN as any).META.metaToString(obj as any as SignHYDROGEN, res);
            break;
            default: throw new Error(`Cannot toString 'SignAE_ED25519' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: SignAE_ED25519): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SignAE_ED25519  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SignAE_ED25519  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SignedKeyMetaBodyImpl implements FastMetaType<SignedKey>  {
    serialize(sCtx_572: MetaContext, obj_573: SignedKey, _out_574: DataOut): void  {
        Key.META.serialize(sCtx_572, obj_573.key, _out_574);
        Sign.META.serialize(sCtx_572, obj_573.sign, _out_574);
        
    }
    deserialize(sCtx_572: MetaContext, in__575: DataIn): SignedKey  {
        let _key_576: Key;
        let sign_577: Sign;
        _key_576 = Key.META.deserialize(sCtx_572, in__575);
        sign_577 = Sign.META.deserialize(sCtx_572, in__575);
        return new SignedKey(_key_576, sign_577);
        
    }
    metaHashCode(obj: SignedKey | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + Key.META.metaHashCode(obj.key);
        hash = 37 * hash + Sign.META.metaHashCode(obj.sign);
        return hash | 0;
        
    }
    metaEquals(v1: SignedKey | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof SignedKey)) return false;
        if (!Key.META.metaEquals(v1.key, v2.key)) return false;
        if (!Sign.META.metaEquals(v1.sign, v2.sign)) return false;
        return true;
        
    }
    metaToString(obj: SignedKey | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('SignedKey(');
        res.add('key:').add(obj.key);
        res.add(', ');
        res.add('sign:').add(obj.sign);
        res.add(')');
        
    }
    public serializeToBytes(obj: SignedKey): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SignedKey  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SignedKey  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SignHYDROGENMetaBodyImpl implements FastMetaType<SignHYDROGEN>  {
    serialize(sCtx_578: MetaContext, obj_579: SignHYDROGEN, _out_580: DataOut): void  {
        if (obj_579.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_579.data must be 64 but was $ {
            obj_579.data.length
        }
        `);
        _out_580.write(obj_579.data);
        
    }
    deserialize(sCtx_578: MetaContext, in__581: DataIn): SignHYDROGEN  {
        let data_583: Uint8Array;
        const len_585 = 64;
        const bytes_586 = in__581.readBytes(len_585);
        data_583 = bytes_586;
        return new SignHYDROGEN(data_583);
        
    }
    metaHashCode(obj: SignHYDROGEN | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: SignHYDROGEN | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof SignHYDROGEN)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: SignHYDROGEN | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('SignHYDROGEN(');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: SignHYDROGEN): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SignHYDROGEN  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SignHYDROGEN  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SignHYDROGENMetaImpl implements FastMetaType<SignHYDROGEN>  {
    serialize(sCtx_587: MetaContext, obj_588: SignHYDROGEN, _out_589: DataOut): void  {
        const typeId = typeof (obj_588 as any).getAetherTypeId === 'function' ? obj_588.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SignHYDROGEN' with invalid type id $ {
            typeId
        }
        `);
        _out_589.writeByte(typeId);
        switch(typeId)  {
            case 2: (SignHYDROGEN as any).META_BODY.serialize(sCtx_587, obj_588 as any as SignHYDROGEN, _out_589);
            break;
            case 1: (SignAE_ED25519 as any).META_BODY.serialize(sCtx_587, obj_588 as any as SignAE_ED25519, _out_589);
            break;
            default: throw new Error(`Cannot serialize 'SignHYDROGEN' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_587: MetaContext, in__590: DataIn): SignHYDROGEN  {
        const typeId = in__590.readUByte();
        switch(typeId)  {
            case 2: return (SignHYDROGEN as any).META_BODY.deserialize(sCtx_587, in__590) as any as SignHYDROGEN;
            case 1: return (SignAE_ED25519 as any).META_BODY.deserialize(sCtx_587, in__590) as any as SignHYDROGEN;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'SignHYDROGEN'`);
            
        }
        
    }
    metaHashCode(obj: SignHYDROGEN | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 2: return (SignHYDROGEN as any).META_BODY.metaHashCode(obj as any as SignHYDROGEN);
            case 1: return (SignAE_ED25519 as any).META.metaHashCode(obj as any as SignAE_ED25519);
            default: throw new Error(`Cannot hashCode 'SignHYDROGEN' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: SignHYDROGEN | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 2: return (SignHYDROGEN as any).META_BODY.metaEquals(v1 as any as SignHYDROGEN, v2);
            case 1: return (SignAE_ED25519 as any).META.metaEquals(v1 as any as SignAE_ED25519, v2);
            default: throw new Error(`Cannot equals 'SignHYDROGEN' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: SignHYDROGEN | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 2: (SignHYDROGEN as any).META_BODY.metaToString(obj as any as SignHYDROGEN, res);
            break;
            case 1: (SignAE_ED25519 as any).META.metaToString(obj as any as SignAE_ED25519, res);
            break;
            default: throw new Error(`Cannot toString 'SignHYDROGEN' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: SignHYDROGEN): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SignHYDROGEN  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SignHYDROGEN  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumChacha20Poly1305MetaBodyImpl implements FastMetaType<SodiumChacha20Poly1305>  {
    serialize(sCtx_591: MetaContext, obj_592: SodiumChacha20Poly1305, _out_593: DataOut): void  {
        if (obj_592.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_592.data must be 32 but was $ {
            obj_592.data.length
        }
        `);
        _out_593.write(obj_592.data);
        
    }
    deserialize(sCtx_591: MetaContext, in__594: DataIn): SodiumChacha20Poly1305  {
        let data_596: Uint8Array;
        const len_598 = 32;
        const bytes_599 = in__594.readBytes(len_598);
        data_596 = bytes_599;
        return new SodiumChacha20Poly1305(data_596);
        
    }
    metaHashCode(obj: SodiumChacha20Poly1305 | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: SodiumChacha20Poly1305 | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof SodiumChacha20Poly1305)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: SodiumChacha20Poly1305 | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('SodiumChacha20Poly1305(');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: SodiumChacha20Poly1305): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumChacha20Poly1305  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumChacha20Poly1305  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumChacha20Poly1305MetaImpl implements FastMetaType<SodiumChacha20Poly1305>  {
    serialize(sCtx_600: MetaContext, obj_601: SodiumChacha20Poly1305, _out_602: DataOut): void  {
        const typeId = typeof (obj_601 as any).getAetherTypeId === 'function' ? obj_601.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumChacha20Poly1305' with invalid type id $ {
            typeId
        }
        `);
        _out_602.writeByte(typeId);
        switch(typeId)  {
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_600, obj_601 as any as SodiumChacha20Poly1305, _out_602);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_600, obj_601 as any as HydrogenSecretBox, _out_602);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_600, obj_601 as any as HydrogenCurvePublic, _out_602);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_600, obj_601 as any as SodiumCurvePublic, _out_602);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_600, obj_601 as any as HydrogenCurvePrivate, _out_602);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_600, obj_601 as any as SodiumCurvePrivate, _out_602);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_600, obj_601 as any as SodiumSignPublic, _out_602);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_600, obj_601 as any as HydrogenSignPublic, _out_602);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_600, obj_601 as any as SodiumSignPrivate, _out_602);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_600, obj_601 as any as HydrogenSignPrivate, _out_602);
            break;
            default: throw new Error(`Cannot serialize 'SodiumChacha20Poly1305' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_600: MetaContext, in__603: DataIn): SodiumChacha20Poly1305  {
        const typeId = in__603.readUByte();
        switch(typeId)  {
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_600, in__603) as any as SodiumChacha20Poly1305;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_600, in__603) as any as SodiumChacha20Poly1305;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_600, in__603) as any as SodiumChacha20Poly1305;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_600, in__603) as any as SodiumChacha20Poly1305;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_600, in__603) as any as SodiumChacha20Poly1305;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_600, in__603) as any as SodiumChacha20Poly1305;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_600, in__603) as any as SodiumChacha20Poly1305;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_600, in__603) as any as SodiumChacha20Poly1305;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_600, in__603) as any as SodiumChacha20Poly1305;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_600, in__603) as any as SodiumChacha20Poly1305;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'SodiumChacha20Poly1305'`);
            
        }
        
    }
    metaHashCode(obj: SodiumChacha20Poly1305 | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.metaHashCode(obj as any as SodiumChacha20Poly1305);
            case 3: return (HydrogenSecretBox as any).META.metaHashCode(obj as any as HydrogenSecretBox);
            case 2: return (HydrogenCurvePublic as any).META.metaHashCode(obj as any as HydrogenCurvePublic);
            case 8: return (SodiumCurvePublic as any).META.metaHashCode(obj as any as SodiumCurvePublic);
            case 1: return (HydrogenCurvePrivate as any).META.metaHashCode(obj as any as HydrogenCurvePrivate);
            case 7: return (SodiumCurvePrivate as any).META.metaHashCode(obj as any as SodiumCurvePrivate);
            case 10: return (SodiumSignPublic as any).META.metaHashCode(obj as any as SodiumSignPublic);
            case 5: return (HydrogenSignPublic as any).META.metaHashCode(obj as any as HydrogenSignPublic);
            case 9: return (SodiumSignPrivate as any).META.metaHashCode(obj as any as SodiumSignPrivate);
            case 4: return (HydrogenSignPrivate as any).META.metaHashCode(obj as any as HydrogenSignPrivate);
            default: throw new Error(`Cannot hashCode 'SodiumChacha20Poly1305' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: SodiumChacha20Poly1305 | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.metaEquals(v1 as any as SodiumChacha20Poly1305, v2);
            case 3: return (HydrogenSecretBox as any).META.metaEquals(v1 as any as HydrogenSecretBox, v2);
            case 2: return (HydrogenCurvePublic as any).META.metaEquals(v1 as any as HydrogenCurvePublic, v2);
            case 8: return (SodiumCurvePublic as any).META.metaEquals(v1 as any as SodiumCurvePublic, v2);
            case 1: return (HydrogenCurvePrivate as any).META.metaEquals(v1 as any as HydrogenCurvePrivate, v2);
            case 7: return (SodiumCurvePrivate as any).META.metaEquals(v1 as any as SodiumCurvePrivate, v2);
            case 10: return (SodiumSignPublic as any).META.metaEquals(v1 as any as SodiumSignPublic, v2);
            case 5: return (HydrogenSignPublic as any).META.metaEquals(v1 as any as HydrogenSignPublic, v2);
            case 9: return (SodiumSignPrivate as any).META.metaEquals(v1 as any as SodiumSignPrivate, v2);
            case 4: return (HydrogenSignPrivate as any).META.metaEquals(v1 as any as HydrogenSignPrivate, v2);
            default: throw new Error(`Cannot equals 'SodiumChacha20Poly1305' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: SodiumChacha20Poly1305 | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.metaToString(obj as any as SodiumChacha20Poly1305, res);
            break;
            case 3: (HydrogenSecretBox as any).META.metaToString(obj as any as HydrogenSecretBox, res);
            break;
            case 2: (HydrogenCurvePublic as any).META.metaToString(obj as any as HydrogenCurvePublic, res);
            break;
            case 8: (SodiumCurvePublic as any).META.metaToString(obj as any as SodiumCurvePublic, res);
            break;
            case 1: (HydrogenCurvePrivate as any).META.metaToString(obj as any as HydrogenCurvePrivate, res);
            break;
            case 7: (SodiumCurvePrivate as any).META.metaToString(obj as any as SodiumCurvePrivate, res);
            break;
            case 10: (SodiumSignPublic as any).META.metaToString(obj as any as SodiumSignPublic, res);
            break;
            case 5: (HydrogenSignPublic as any).META.metaToString(obj as any as HydrogenSignPublic, res);
            break;
            case 9: (SodiumSignPrivate as any).META.metaToString(obj as any as SodiumSignPrivate, res);
            break;
            case 4: (HydrogenSignPrivate as any).META.metaToString(obj as any as HydrogenSignPrivate, res);
            break;
            default: throw new Error(`Cannot toString 'SodiumChacha20Poly1305' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: SodiumChacha20Poly1305): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumChacha20Poly1305  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumChacha20Poly1305  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumCurvePrivateMetaBodyImpl implements FastMetaType<SodiumCurvePrivate>  {
    serialize(sCtx_604: MetaContext, obj_605: SodiumCurvePrivate, _out_606: DataOut): void  {
        if (obj_605.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_605.data must be 32 but was $ {
            obj_605.data.length
        }
        `);
        _out_606.write(obj_605.data);
        
    }
    deserialize(sCtx_604: MetaContext, in__607: DataIn): SodiumCurvePrivate  {
        let data_609: Uint8Array;
        const len_611 = 32;
        const bytes_612 = in__607.readBytes(len_611);
        data_609 = bytes_612;
        return new SodiumCurvePrivate(data_609);
        
    }
    metaHashCode(obj: SodiumCurvePrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: SodiumCurvePrivate | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof SodiumCurvePrivate)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: SodiumCurvePrivate | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('SodiumCurvePrivate(');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: SodiumCurvePrivate): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumCurvePrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumCurvePrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumCurvePrivateMetaImpl implements FastMetaType<SodiumCurvePrivate>  {
    serialize(sCtx_613: MetaContext, obj_614: SodiumCurvePrivate, _out_615: DataOut): void  {
        const typeId = typeof (obj_614 as any).getAetherTypeId === 'function' ? obj_614.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumCurvePrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_615.writeByte(typeId);
        switch(typeId)  {
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_613, obj_614 as any as SodiumCurvePrivate, _out_615);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_613, obj_614 as any as SodiumChacha20Poly1305, _out_615);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_613, obj_614 as any as HydrogenSecretBox, _out_615);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_613, obj_614 as any as HydrogenCurvePublic, _out_615);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_613, obj_614 as any as SodiumCurvePublic, _out_615);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_613, obj_614 as any as HydrogenCurvePrivate, _out_615);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_613, obj_614 as any as SodiumSignPublic, _out_615);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_613, obj_614 as any as HydrogenSignPublic, _out_615);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_613, obj_614 as any as SodiumSignPrivate, _out_615);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_613, obj_614 as any as HydrogenSignPrivate, _out_615);
            break;
            default: throw new Error(`Cannot serialize 'SodiumCurvePrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_613: MetaContext, in__616: DataIn): SodiumCurvePrivate  {
        const typeId = in__616.readUByte();
        switch(typeId)  {
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_613, in__616) as any as SodiumCurvePrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_613, in__616) as any as SodiumCurvePrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_613, in__616) as any as SodiumCurvePrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_613, in__616) as any as SodiumCurvePrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_613, in__616) as any as SodiumCurvePrivate;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_613, in__616) as any as SodiumCurvePrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_613, in__616) as any as SodiumCurvePrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_613, in__616) as any as SodiumCurvePrivate;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_613, in__616) as any as SodiumCurvePrivate;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_613, in__616) as any as SodiumCurvePrivate;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'SodiumCurvePrivate'`);
            
        }
        
    }
    metaHashCode(obj: SodiumCurvePrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 7: return (SodiumCurvePrivate as any).META_BODY.metaHashCode(obj as any as SodiumCurvePrivate);
            case 6: return (SodiumChacha20Poly1305 as any).META.metaHashCode(obj as any as SodiumChacha20Poly1305);
            case 3: return (HydrogenSecretBox as any).META.metaHashCode(obj as any as HydrogenSecretBox);
            case 2: return (HydrogenCurvePublic as any).META.metaHashCode(obj as any as HydrogenCurvePublic);
            case 8: return (SodiumCurvePublic as any).META.metaHashCode(obj as any as SodiumCurvePublic);
            case 1: return (HydrogenCurvePrivate as any).META.metaHashCode(obj as any as HydrogenCurvePrivate);
            case 10: return (SodiumSignPublic as any).META.metaHashCode(obj as any as SodiumSignPublic);
            case 5: return (HydrogenSignPublic as any).META.metaHashCode(obj as any as HydrogenSignPublic);
            case 9: return (SodiumSignPrivate as any).META.metaHashCode(obj as any as SodiumSignPrivate);
            case 4: return (HydrogenSignPrivate as any).META.metaHashCode(obj as any as HydrogenSignPrivate);
            default: throw new Error(`Cannot hashCode 'SodiumCurvePrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: SodiumCurvePrivate | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 7: return (SodiumCurvePrivate as any).META_BODY.metaEquals(v1 as any as SodiumCurvePrivate, v2);
            case 6: return (SodiumChacha20Poly1305 as any).META.metaEquals(v1 as any as SodiumChacha20Poly1305, v2);
            case 3: return (HydrogenSecretBox as any).META.metaEquals(v1 as any as HydrogenSecretBox, v2);
            case 2: return (HydrogenCurvePublic as any).META.metaEquals(v1 as any as HydrogenCurvePublic, v2);
            case 8: return (SodiumCurvePublic as any).META.metaEquals(v1 as any as SodiumCurvePublic, v2);
            case 1: return (HydrogenCurvePrivate as any).META.metaEquals(v1 as any as HydrogenCurvePrivate, v2);
            case 10: return (SodiumSignPublic as any).META.metaEquals(v1 as any as SodiumSignPublic, v2);
            case 5: return (HydrogenSignPublic as any).META.metaEquals(v1 as any as HydrogenSignPublic, v2);
            case 9: return (SodiumSignPrivate as any).META.metaEquals(v1 as any as SodiumSignPrivate, v2);
            case 4: return (HydrogenSignPrivate as any).META.metaEquals(v1 as any as HydrogenSignPrivate, v2);
            default: throw new Error(`Cannot equals 'SodiumCurvePrivate' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: SodiumCurvePrivate | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 7: (SodiumCurvePrivate as any).META_BODY.metaToString(obj as any as SodiumCurvePrivate, res);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META.metaToString(obj as any as SodiumChacha20Poly1305, res);
            break;
            case 3: (HydrogenSecretBox as any).META.metaToString(obj as any as HydrogenSecretBox, res);
            break;
            case 2: (HydrogenCurvePublic as any).META.metaToString(obj as any as HydrogenCurvePublic, res);
            break;
            case 8: (SodiumCurvePublic as any).META.metaToString(obj as any as SodiumCurvePublic, res);
            break;
            case 1: (HydrogenCurvePrivate as any).META.metaToString(obj as any as HydrogenCurvePrivate, res);
            break;
            case 10: (SodiumSignPublic as any).META.metaToString(obj as any as SodiumSignPublic, res);
            break;
            case 5: (HydrogenSignPublic as any).META.metaToString(obj as any as HydrogenSignPublic, res);
            break;
            case 9: (SodiumSignPrivate as any).META.metaToString(obj as any as SodiumSignPrivate, res);
            break;
            case 4: (HydrogenSignPrivate as any).META.metaToString(obj as any as HydrogenSignPrivate, res);
            break;
            default: throw new Error(`Cannot toString 'SodiumCurvePrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: SodiumCurvePrivate): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumCurvePrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumCurvePrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumCurvePublicMetaBodyImpl implements FastMetaType<SodiumCurvePublic>  {
    serialize(sCtx_617: MetaContext, obj_618: SodiumCurvePublic, _out_619: DataOut): void  {
        if (obj_618.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_618.data must be 32 but was $ {
            obj_618.data.length
        }
        `);
        _out_619.write(obj_618.data);
        
    }
    deserialize(sCtx_617: MetaContext, in__620: DataIn): SodiumCurvePublic  {
        let data_622: Uint8Array;
        const len_624 = 32;
        const bytes_625 = in__620.readBytes(len_624);
        data_622 = bytes_625;
        return new SodiumCurvePublic(data_622);
        
    }
    metaHashCode(obj: SodiumCurvePublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: SodiumCurvePublic | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof SodiumCurvePublic)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: SodiumCurvePublic | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('SodiumCurvePublic(');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: SodiumCurvePublic): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumCurvePublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumCurvePublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumCurvePublicMetaImpl implements FastMetaType<SodiumCurvePublic>  {
    serialize(sCtx_626: MetaContext, obj_627: SodiumCurvePublic, _out_628: DataOut): void  {
        const typeId = typeof (obj_627 as any).getAetherTypeId === 'function' ? obj_627.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumCurvePublic' with invalid type id $ {
            typeId
        }
        `);
        _out_628.writeByte(typeId);
        switch(typeId)  {
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_626, obj_627 as any as SodiumCurvePublic, _out_628);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_626, obj_627 as any as SodiumChacha20Poly1305, _out_628);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_626, obj_627 as any as HydrogenSecretBox, _out_628);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_626, obj_627 as any as HydrogenCurvePublic, _out_628);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_626, obj_627 as any as HydrogenCurvePrivate, _out_628);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_626, obj_627 as any as SodiumCurvePrivate, _out_628);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_626, obj_627 as any as SodiumSignPublic, _out_628);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_626, obj_627 as any as HydrogenSignPublic, _out_628);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_626, obj_627 as any as SodiumSignPrivate, _out_628);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_626, obj_627 as any as HydrogenSignPrivate, _out_628);
            break;
            default: throw new Error(`Cannot serialize 'SodiumCurvePublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_626: MetaContext, in__629: DataIn): SodiumCurvePublic  {
        const typeId = in__629.readUByte();
        switch(typeId)  {
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_626, in__629) as any as SodiumCurvePublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_626, in__629) as any as SodiumCurvePublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_626, in__629) as any as SodiumCurvePublic;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_626, in__629) as any as SodiumCurvePublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_626, in__629) as any as SodiumCurvePublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_626, in__629) as any as SodiumCurvePublic;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_626, in__629) as any as SodiumCurvePublic;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_626, in__629) as any as SodiumCurvePublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_626, in__629) as any as SodiumCurvePublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_626, in__629) as any as SodiumCurvePublic;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'SodiumCurvePublic'`);
            
        }
        
    }
    metaHashCode(obj: SodiumCurvePublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 8: return (SodiumCurvePublic as any).META_BODY.metaHashCode(obj as any as SodiumCurvePublic);
            case 6: return (SodiumChacha20Poly1305 as any).META.metaHashCode(obj as any as SodiumChacha20Poly1305);
            case 3: return (HydrogenSecretBox as any).META.metaHashCode(obj as any as HydrogenSecretBox);
            case 2: return (HydrogenCurvePublic as any).META.metaHashCode(obj as any as HydrogenCurvePublic);
            case 1: return (HydrogenCurvePrivate as any).META.metaHashCode(obj as any as HydrogenCurvePrivate);
            case 7: return (SodiumCurvePrivate as any).META.metaHashCode(obj as any as SodiumCurvePrivate);
            case 10: return (SodiumSignPublic as any).META.metaHashCode(obj as any as SodiumSignPublic);
            case 5: return (HydrogenSignPublic as any).META.metaHashCode(obj as any as HydrogenSignPublic);
            case 9: return (SodiumSignPrivate as any).META.metaHashCode(obj as any as SodiumSignPrivate);
            case 4: return (HydrogenSignPrivate as any).META.metaHashCode(obj as any as HydrogenSignPrivate);
            default: throw new Error(`Cannot hashCode 'SodiumCurvePublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: SodiumCurvePublic | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 8: return (SodiumCurvePublic as any).META_BODY.metaEquals(v1 as any as SodiumCurvePublic, v2);
            case 6: return (SodiumChacha20Poly1305 as any).META.metaEquals(v1 as any as SodiumChacha20Poly1305, v2);
            case 3: return (HydrogenSecretBox as any).META.metaEquals(v1 as any as HydrogenSecretBox, v2);
            case 2: return (HydrogenCurvePublic as any).META.metaEquals(v1 as any as HydrogenCurvePublic, v2);
            case 1: return (HydrogenCurvePrivate as any).META.metaEquals(v1 as any as HydrogenCurvePrivate, v2);
            case 7: return (SodiumCurvePrivate as any).META.metaEquals(v1 as any as SodiumCurvePrivate, v2);
            case 10: return (SodiumSignPublic as any).META.metaEquals(v1 as any as SodiumSignPublic, v2);
            case 5: return (HydrogenSignPublic as any).META.metaEquals(v1 as any as HydrogenSignPublic, v2);
            case 9: return (SodiumSignPrivate as any).META.metaEquals(v1 as any as SodiumSignPrivate, v2);
            case 4: return (HydrogenSignPrivate as any).META.metaEquals(v1 as any as HydrogenSignPrivate, v2);
            default: throw new Error(`Cannot equals 'SodiumCurvePublic' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: SodiumCurvePublic | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 8: (SodiumCurvePublic as any).META_BODY.metaToString(obj as any as SodiumCurvePublic, res);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META.metaToString(obj as any as SodiumChacha20Poly1305, res);
            break;
            case 3: (HydrogenSecretBox as any).META.metaToString(obj as any as HydrogenSecretBox, res);
            break;
            case 2: (HydrogenCurvePublic as any).META.metaToString(obj as any as HydrogenCurvePublic, res);
            break;
            case 1: (HydrogenCurvePrivate as any).META.metaToString(obj as any as HydrogenCurvePrivate, res);
            break;
            case 7: (SodiumCurvePrivate as any).META.metaToString(obj as any as SodiumCurvePrivate, res);
            break;
            case 10: (SodiumSignPublic as any).META.metaToString(obj as any as SodiumSignPublic, res);
            break;
            case 5: (HydrogenSignPublic as any).META.metaToString(obj as any as HydrogenSignPublic, res);
            break;
            case 9: (SodiumSignPrivate as any).META.metaToString(obj as any as SodiumSignPrivate, res);
            break;
            case 4: (HydrogenSignPrivate as any).META.metaToString(obj as any as HydrogenSignPrivate, res);
            break;
            default: throw new Error(`Cannot toString 'SodiumCurvePublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: SodiumCurvePublic): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumCurvePublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumCurvePublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumSignPrivateMetaBodyImpl implements FastMetaType<SodiumSignPrivate>  {
    serialize(sCtx_630: MetaContext, obj_631: SodiumSignPrivate, _out_632: DataOut): void  {
        if (obj_631.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_631.data must be 64 but was $ {
            obj_631.data.length
        }
        `);
        _out_632.write(obj_631.data);
        
    }
    deserialize(sCtx_630: MetaContext, in__633: DataIn): SodiumSignPrivate  {
        let data_635: Uint8Array;
        const len_637 = 64;
        const bytes_638 = in__633.readBytes(len_637);
        data_635 = bytes_638;
        return new SodiumSignPrivate(data_635);
        
    }
    metaHashCode(obj: SodiumSignPrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: SodiumSignPrivate | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof SodiumSignPrivate)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: SodiumSignPrivate | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('SodiumSignPrivate(');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: SodiumSignPrivate): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumSignPrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumSignPrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumSignPrivateMetaImpl implements FastMetaType<SodiumSignPrivate>  {
    serialize(sCtx_639: MetaContext, obj_640: SodiumSignPrivate, _out_641: DataOut): void  {
        const typeId = typeof (obj_640 as any).getAetherTypeId === 'function' ? obj_640.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumSignPrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_641.writeByte(typeId);
        switch(typeId)  {
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_639, obj_640 as any as SodiumSignPrivate, _out_641);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_639, obj_640 as any as SodiumChacha20Poly1305, _out_641);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_639, obj_640 as any as HydrogenSecretBox, _out_641);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_639, obj_640 as any as HydrogenCurvePublic, _out_641);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_639, obj_640 as any as SodiumCurvePublic, _out_641);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_639, obj_640 as any as HydrogenCurvePrivate, _out_641);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_639, obj_640 as any as SodiumCurvePrivate, _out_641);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_639, obj_640 as any as SodiumSignPublic, _out_641);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_639, obj_640 as any as HydrogenSignPublic, _out_641);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_639, obj_640 as any as HydrogenSignPrivate, _out_641);
            break;
            default: throw new Error(`Cannot serialize 'SodiumSignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_639: MetaContext, in__642: DataIn): SodiumSignPrivate  {
        const typeId = in__642.readUByte();
        switch(typeId)  {
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_639, in__642) as any as SodiumSignPrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_639, in__642) as any as SodiumSignPrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_639, in__642) as any as SodiumSignPrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_639, in__642) as any as SodiumSignPrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_639, in__642) as any as SodiumSignPrivate;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_639, in__642) as any as SodiumSignPrivate;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_639, in__642) as any as SodiumSignPrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_639, in__642) as any as SodiumSignPrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_639, in__642) as any as SodiumSignPrivate;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_639, in__642) as any as SodiumSignPrivate;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'SodiumSignPrivate'`);
            
        }
        
    }
    metaHashCode(obj: SodiumSignPrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 9: return (SodiumSignPrivate as any).META_BODY.metaHashCode(obj as any as SodiumSignPrivate);
            case 6: return (SodiumChacha20Poly1305 as any).META.metaHashCode(obj as any as SodiumChacha20Poly1305);
            case 3: return (HydrogenSecretBox as any).META.metaHashCode(obj as any as HydrogenSecretBox);
            case 2: return (HydrogenCurvePublic as any).META.metaHashCode(obj as any as HydrogenCurvePublic);
            case 8: return (SodiumCurvePublic as any).META.metaHashCode(obj as any as SodiumCurvePublic);
            case 1: return (HydrogenCurvePrivate as any).META.metaHashCode(obj as any as HydrogenCurvePrivate);
            case 7: return (SodiumCurvePrivate as any).META.metaHashCode(obj as any as SodiumCurvePrivate);
            case 10: return (SodiumSignPublic as any).META.metaHashCode(obj as any as SodiumSignPublic);
            case 5: return (HydrogenSignPublic as any).META.metaHashCode(obj as any as HydrogenSignPublic);
            case 4: return (HydrogenSignPrivate as any).META.metaHashCode(obj as any as HydrogenSignPrivate);
            default: throw new Error(`Cannot hashCode 'SodiumSignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: SodiumSignPrivate | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 9: return (SodiumSignPrivate as any).META_BODY.metaEquals(v1 as any as SodiumSignPrivate, v2);
            case 6: return (SodiumChacha20Poly1305 as any).META.metaEquals(v1 as any as SodiumChacha20Poly1305, v2);
            case 3: return (HydrogenSecretBox as any).META.metaEquals(v1 as any as HydrogenSecretBox, v2);
            case 2: return (HydrogenCurvePublic as any).META.metaEquals(v1 as any as HydrogenCurvePublic, v2);
            case 8: return (SodiumCurvePublic as any).META.metaEquals(v1 as any as SodiumCurvePublic, v2);
            case 1: return (HydrogenCurvePrivate as any).META.metaEquals(v1 as any as HydrogenCurvePrivate, v2);
            case 7: return (SodiumCurvePrivate as any).META.metaEquals(v1 as any as SodiumCurvePrivate, v2);
            case 10: return (SodiumSignPublic as any).META.metaEquals(v1 as any as SodiumSignPublic, v2);
            case 5: return (HydrogenSignPublic as any).META.metaEquals(v1 as any as HydrogenSignPublic, v2);
            case 4: return (HydrogenSignPrivate as any).META.metaEquals(v1 as any as HydrogenSignPrivate, v2);
            default: throw new Error(`Cannot equals 'SodiumSignPrivate' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: SodiumSignPrivate | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 9: (SodiumSignPrivate as any).META_BODY.metaToString(obj as any as SodiumSignPrivate, res);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META.metaToString(obj as any as SodiumChacha20Poly1305, res);
            break;
            case 3: (HydrogenSecretBox as any).META.metaToString(obj as any as HydrogenSecretBox, res);
            break;
            case 2: (HydrogenCurvePublic as any).META.metaToString(obj as any as HydrogenCurvePublic, res);
            break;
            case 8: (SodiumCurvePublic as any).META.metaToString(obj as any as SodiumCurvePublic, res);
            break;
            case 1: (HydrogenCurvePrivate as any).META.metaToString(obj as any as HydrogenCurvePrivate, res);
            break;
            case 7: (SodiumCurvePrivate as any).META.metaToString(obj as any as SodiumCurvePrivate, res);
            break;
            case 10: (SodiumSignPublic as any).META.metaToString(obj as any as SodiumSignPublic, res);
            break;
            case 5: (HydrogenSignPublic as any).META.metaToString(obj as any as HydrogenSignPublic, res);
            break;
            case 4: (HydrogenSignPrivate as any).META.metaToString(obj as any as HydrogenSignPrivate, res);
            break;
            default: throw new Error(`Cannot toString 'SodiumSignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: SodiumSignPrivate): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumSignPrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumSignPrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumSignPublicMetaBodyImpl implements FastMetaType<SodiumSignPublic>  {
    serialize(sCtx_643: MetaContext, obj_644: SodiumSignPublic, _out_645: DataOut): void  {
        if (obj_644.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_644.data must be 32 but was $ {
            obj_644.data.length
        }
        `);
        _out_645.write(obj_644.data);
        
    }
    deserialize(sCtx_643: MetaContext, in__646: DataIn): SodiumSignPublic  {
        let data_648: Uint8Array;
        const len_650 = 32;
        const bytes_651 = in__646.readBytes(len_650);
        data_648 = bytes_651;
        return new SodiumSignPublic(data_648);
        
    }
    metaHashCode(obj: SodiumSignPublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: SodiumSignPublic | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof SodiumSignPublic)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: SodiumSignPublic | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('SodiumSignPublic(');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: SodiumSignPublic): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumSignPublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumSignPublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumSignPublicMetaImpl implements FastMetaType<SodiumSignPublic>  {
    serialize(sCtx_652: MetaContext, obj_653: SodiumSignPublic, _out_654: DataOut): void  {
        const typeId = typeof (obj_653 as any).getAetherTypeId === 'function' ? obj_653.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumSignPublic' with invalid type id $ {
            typeId
        }
        `);
        _out_654.writeByte(typeId);
        switch(typeId)  {
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_652, obj_653 as any as SodiumSignPublic, _out_654);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_652, obj_653 as any as SodiumChacha20Poly1305, _out_654);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_652, obj_653 as any as HydrogenSecretBox, _out_654);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_652, obj_653 as any as HydrogenCurvePublic, _out_654);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_652, obj_653 as any as SodiumCurvePublic, _out_654);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_652, obj_653 as any as HydrogenCurvePrivate, _out_654);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_652, obj_653 as any as SodiumCurvePrivate, _out_654);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_652, obj_653 as any as HydrogenSignPublic, _out_654);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_652, obj_653 as any as SodiumSignPrivate, _out_654);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_652, obj_653 as any as HydrogenSignPrivate, _out_654);
            break;
            default: throw new Error(`Cannot serialize 'SodiumSignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_652: MetaContext, in__655: DataIn): SodiumSignPublic  {
        const typeId = in__655.readUByte();
        switch(typeId)  {
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_652, in__655) as any as SodiumSignPublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_652, in__655) as any as SodiumSignPublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_652, in__655) as any as SodiumSignPublic;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_652, in__655) as any as SodiumSignPublic;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_652, in__655) as any as SodiumSignPublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_652, in__655) as any as SodiumSignPublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_652, in__655) as any as SodiumSignPublic;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_652, in__655) as any as SodiumSignPublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_652, in__655) as any as SodiumSignPublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_652, in__655) as any as SodiumSignPublic;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'SodiumSignPublic'`);
            
        }
        
    }
    metaHashCode(obj: SodiumSignPublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 10: return (SodiumSignPublic as any).META_BODY.metaHashCode(obj as any as SodiumSignPublic);
            case 6: return (SodiumChacha20Poly1305 as any).META.metaHashCode(obj as any as SodiumChacha20Poly1305);
            case 3: return (HydrogenSecretBox as any).META.metaHashCode(obj as any as HydrogenSecretBox);
            case 2: return (HydrogenCurvePublic as any).META.metaHashCode(obj as any as HydrogenCurvePublic);
            case 8: return (SodiumCurvePublic as any).META.metaHashCode(obj as any as SodiumCurvePublic);
            case 1: return (HydrogenCurvePrivate as any).META.metaHashCode(obj as any as HydrogenCurvePrivate);
            case 7: return (SodiumCurvePrivate as any).META.metaHashCode(obj as any as SodiumCurvePrivate);
            case 5: return (HydrogenSignPublic as any).META.metaHashCode(obj as any as HydrogenSignPublic);
            case 9: return (SodiumSignPrivate as any).META.metaHashCode(obj as any as SodiumSignPrivate);
            case 4: return (HydrogenSignPrivate as any).META.metaHashCode(obj as any as HydrogenSignPrivate);
            default: throw new Error(`Cannot hashCode 'SodiumSignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: SodiumSignPublic | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 10: return (SodiumSignPublic as any).META_BODY.metaEquals(v1 as any as SodiumSignPublic, v2);
            case 6: return (SodiumChacha20Poly1305 as any).META.metaEquals(v1 as any as SodiumChacha20Poly1305, v2);
            case 3: return (HydrogenSecretBox as any).META.metaEquals(v1 as any as HydrogenSecretBox, v2);
            case 2: return (HydrogenCurvePublic as any).META.metaEquals(v1 as any as HydrogenCurvePublic, v2);
            case 8: return (SodiumCurvePublic as any).META.metaEquals(v1 as any as SodiumCurvePublic, v2);
            case 1: return (HydrogenCurvePrivate as any).META.metaEquals(v1 as any as HydrogenCurvePrivate, v2);
            case 7: return (SodiumCurvePrivate as any).META.metaEquals(v1 as any as SodiumCurvePrivate, v2);
            case 5: return (HydrogenSignPublic as any).META.metaEquals(v1 as any as HydrogenSignPublic, v2);
            case 9: return (SodiumSignPrivate as any).META.metaEquals(v1 as any as SodiumSignPrivate, v2);
            case 4: return (HydrogenSignPrivate as any).META.metaEquals(v1 as any as HydrogenSignPrivate, v2);
            default: throw new Error(`Cannot equals 'SodiumSignPublic' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: SodiumSignPublic | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 10: (SodiumSignPublic as any).META_BODY.metaToString(obj as any as SodiumSignPublic, res);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META.metaToString(obj as any as SodiumChacha20Poly1305, res);
            break;
            case 3: (HydrogenSecretBox as any).META.metaToString(obj as any as HydrogenSecretBox, res);
            break;
            case 2: (HydrogenCurvePublic as any).META.metaToString(obj as any as HydrogenCurvePublic, res);
            break;
            case 8: (SodiumCurvePublic as any).META.metaToString(obj as any as SodiumCurvePublic, res);
            break;
            case 1: (HydrogenCurvePrivate as any).META.metaToString(obj as any as HydrogenCurvePrivate, res);
            break;
            case 7: (SodiumCurvePrivate as any).META.metaToString(obj as any as SodiumCurvePrivate, res);
            break;
            case 5: (HydrogenSignPublic as any).META.metaToString(obj as any as HydrogenSignPublic, res);
            break;
            case 9: (SodiumSignPrivate as any).META.metaToString(obj as any as SodiumSignPrivate, res);
            break;
            case 4: (HydrogenSignPrivate as any).META.metaToString(obj as any as HydrogenSignPrivate, res);
            break;
            default: throw new Error(`Cannot toString 'SodiumSignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: SodiumSignPublic): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumSignPublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumSignPublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class TelemetryCPPMetaBodyImpl implements FastMetaType<TelemetryCPP>  {
    serialize(sCtx_656: MetaContext, obj_657: TelemetryCPP, _out_658: DataOut): void  {
        _out_658.writeInt(obj_657.utm_id);
        SerializerPackNumber.INSTANCE.put(_out_658, obj_657.blob.length);
        _out_658.write(obj_657.blob);
        const stringBytes_661 = new TextEncoder().encode(obj_657.lib_version);
        SerializerPackNumber.INSTANCE.put(_out_658, stringBytes_661.length);
        _out_658.write(stringBytes_661);
        const stringBytes_663 = new TextEncoder().encode(obj_657.os);
        SerializerPackNumber.INSTANCE.put(_out_658, stringBytes_663.length);
        _out_658.write(stringBytes_663);
        const stringBytes_665 = new TextEncoder().encode(obj_657.compiler);
        SerializerPackNumber.INSTANCE.put(_out_658, stringBytes_665.length);
        _out_658.write(stringBytes_665);
        
    }
    deserialize(sCtx_656: MetaContext, in__659: DataIn): TelemetryCPP  {
        let utm_id_667: number;
        let blob_668: Uint8Array;
        let lib_version_669: string;
        let os_670: string;
        let compiler_671: string;
        utm_id_667 = in__659.readInt();
        const len_673 = Number(DeserializerPackNumber.INSTANCE.put(in__659));
        const bytes_674 = in__659.readBytes(len_673);
        blob_668 = bytes_674;
        let stringBytes_675: Uint8Array;
        const len_677 = Number(DeserializerPackNumber.INSTANCE.put(in__659));
        const bytes_678 = in__659.readBytes(len_677);
        stringBytes_675 = bytes_678;
        lib_version_669 = new TextDecoder('utf-8').decode(stringBytes_675);
        let stringBytes_679: Uint8Array;
        const len_681 = Number(DeserializerPackNumber.INSTANCE.put(in__659));
        const bytes_682 = in__659.readBytes(len_681);
        stringBytes_679 = bytes_682;
        os_670 = new TextDecoder('utf-8').decode(stringBytes_679);
        let stringBytes_683: Uint8Array;
        const len_685 = Number(DeserializerPackNumber.INSTANCE.put(in__659));
        const bytes_686 = in__659.readBytes(len_685);
        stringBytes_683 = bytes_686;
        compiler_671 = new TextDecoder('utf-8').decode(stringBytes_683);
        return new TelemetryCPP(utm_id_667, blob_668, lib_version_669, os_670, compiler_671);
        
    }
    metaHashCode(obj: TelemetryCPP | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.utm_id);
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.blob);
        hash = 37 * hash + FastMeta.META_STRING.metaHashCode(obj.lib_version);
        hash = 37 * hash + FastMeta.META_STRING.metaHashCode(obj.os);
        hash = 37 * hash + FastMeta.META_STRING.metaHashCode(obj.compiler);
        return hash | 0;
        
    }
    metaEquals(v1: TelemetryCPP | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof TelemetryCPP)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.utm_id, v2.utm_id)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.blob, v2.blob)) return false;
        if (!FastMeta.META_STRING.metaEquals(v1.lib_version, v2.lib_version)) return false;
        if (!FastMeta.META_STRING.metaEquals(v1.os, v2.os)) return false;
        if (!FastMeta.META_STRING.metaEquals(v1.compiler, v2.compiler)) return false;
        return true;
        
    }
    metaToString(obj: TelemetryCPP | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('TelemetryCPP(');
        res.add('utm_id:').add(obj.utm_id);
        res.add(', ');
        res.add('blob:').add(obj.blob);
        res.add(', ');
        res.add('lib_version:').add(obj.lib_version);
        res.add(', ');
        res.add('os:').add(obj.os);
        res.add(', ');
        res.add('compiler:').add(obj.compiler);
        res.add(')');
        
    }
    public serializeToBytes(obj: TelemetryCPP): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): TelemetryCPP  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): TelemetryCPP  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class TelemetryCPPMetaImpl implements FastMetaType<TelemetryCPP>  {
    serialize(sCtx_687: MetaContext, obj_688: TelemetryCPP, _out_689: DataOut): void  {
        const typeId = typeof (obj_688 as any).getAetherTypeId === 'function' ? obj_688.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'TelemetryCPP' with invalid type id $ {
            typeId
        }
        `);
        _out_689.writeByte(typeId);
        switch(typeId)  {
            case 1: (TelemetryCPP as any).META_BODY.serialize(sCtx_687, obj_688 as any as TelemetryCPP, _out_689);
            break;
            default: throw new Error(`Cannot serialize 'TelemetryCPP' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_687: MetaContext, in__690: DataIn): TelemetryCPP  {
        const typeId = in__690.readUByte();
        switch(typeId)  {
            case 1: return (TelemetryCPP as any).META_BODY.deserialize(sCtx_687, in__690) as any as TelemetryCPP;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'TelemetryCPP'`);
            
        }
        
    }
    metaHashCode(obj: TelemetryCPP | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: return (TelemetryCPP as any).META_BODY.metaHashCode(obj as any as TelemetryCPP);
            default: throw new Error(`Cannot hashCode 'TelemetryCPP' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: TelemetryCPP | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 1: return (TelemetryCPP as any).META_BODY.metaEquals(v1 as any as TelemetryCPP, v2);
            default: throw new Error(`Cannot equals 'TelemetryCPP' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: TelemetryCPP | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: (TelemetryCPP as any).META_BODY.metaToString(obj as any as TelemetryCPP, res);
            break;
            default: throw new Error(`Cannot toString 'TelemetryCPP' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: TelemetryCPP): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): TelemetryCPP  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): TelemetryCPP  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class UapMetaBodyImpl implements FastMetaType<Uap>  {
    serialize(sCtx_691: MetaContext, obj_692: Uap, _out_693: DataOut): void  {
        _out_693.writeLong(obj_692.deltaMs);
        _out_693.writeLong(obj_692.lastReadTimestamp);
        
    }
    deserialize(sCtx_691: MetaContext, in__694: DataIn): Uap  {
        let deltaMs_695: bigint;
        let lastReadTimestamp_696: bigint;
        deltaMs_695 = in__694.readLong();
        lastReadTimestamp_696 = in__694.readLong();
        return new Uap(deltaMs_695, lastReadTimestamp_696);
        
    }
    metaHashCode(obj: Uap | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.deltaMs);
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.lastReadTimestamp);
        return hash | 0;
        
    }
    metaEquals(v1: Uap | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof Uap)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.deltaMs, v2.deltaMs)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.lastReadTimestamp, v2.lastReadTimestamp)) return false;
        return true;
        
    }
    metaToString(obj: Uap | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('Uap(');
        res.add('deltaMs:').add(obj.deltaMs);
        res.add(', ');
        res.add('lastReadTimestamp:').add(obj.lastReadTimestamp);
        res.add(')');
        
    }
    public serializeToBytes(obj: Uap): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): Uap  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): Uap  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class UUIDAndCloudMetaBodyImpl implements FastMetaType<UUIDAndCloud>  {
    serialize(sCtx_697: MetaContext, obj_698: UUIDAndCloud, _out_699: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_697, obj_698.uid, _out_699);
        Cloud.META.serialize(sCtx_697, obj_698.cloud, _out_699);
        
    }
    deserialize(sCtx_697: MetaContext, in__700: DataIn): UUIDAndCloud  {
        let uid_701: UUID;
        let cloud_702: Cloud;
        uid_701 = FastMeta.META_UUID.deserialize(sCtx_697, in__700);
        cloud_702 = Cloud.META.deserialize(sCtx_697, in__700);
        return new UUIDAndCloud(uid_701, cloud_702);
        
    }
    metaHashCode(obj: UUIDAndCloud | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + Cloud.META.metaHashCode(obj.cloud);
        return hash | 0;
        
    }
    metaEquals(v1: UUIDAndCloud | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof UUIDAndCloud)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!Cloud.META.metaEquals(v1.cloud, v2.cloud)) return false;
        return true;
        
    }
    metaToString(obj: UUIDAndCloud | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('UUIDAndCloud(');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('cloud:').add(obj.cloud);
        res.add(')');
        
    }
    public serializeToBytes(obj: UUIDAndCloud): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): UUIDAndCloud  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): UUIDAndCloud  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class WorkProofBCryptMetaBodyImpl implements FastMetaType<WorkProofBCrypt>  {
    serialize(sCtx_703: MetaContext, obj_704: WorkProofBCrypt, _out_705: DataOut): void  {
        _out_705.writeByte(obj_704.costBCrypt);
        _out_705.writeByte(obj_704.poolSize);
        _out_705.writeInt(obj_704.maxHashVal);
        
    }
    deserialize(sCtx_703: MetaContext, in__706: DataIn): WorkProofBCrypt  {
        let costBCrypt_707: number;
        let poolSize_708: number;
        let maxHashVal_709: number;
        costBCrypt_707 = in__706.readByte();
        poolSize_708 = in__706.readByte();
        maxHashVal_709 = in__706.readInt();
        return new WorkProofBCrypt(costBCrypt_707, poolSize_708, maxHashVal_709);
        
    }
    metaHashCode(obj: WorkProofBCrypt | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_BYTE.metaHashCode(obj.costBCrypt);
        hash = 37 * hash + FastMeta.META_BYTE.metaHashCode(obj.poolSize);
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.maxHashVal);
        return hash | 0;
        
    }
    metaEquals(v1: WorkProofBCrypt | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof WorkProofBCrypt)) return false;
        if (!FastMeta.META_BYTE.metaEquals(v1.costBCrypt, v2.costBCrypt)) return false;
        if (!FastMeta.META_BYTE.metaEquals(v1.poolSize, v2.poolSize)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.maxHashVal, v2.maxHashVal)) return false;
        return true;
        
    }
    metaToString(obj: WorkProofBCrypt | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('WorkProofBCrypt(');
        res.add('costBCrypt:').add(obj.costBCrypt);
        res.add(', ');
        res.add('poolSize:').add(obj.poolSize);
        res.add(', ');
        res.add('maxHashVal:').add(obj.maxHashVal);
        res.add(')');
        
    }
    public serializeToBytes(obj: WorkProofBCrypt): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): WorkProofBCrypt  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): WorkProofBCrypt  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class WorkProofBCryptMetaImpl implements FastMetaType<WorkProofBCrypt>  {
    serialize(sCtx_710: MetaContext, obj_711: WorkProofBCrypt, _out_712: DataOut): void  {
        const typeId = typeof (obj_711 as any).getAetherTypeId === 'function' ? obj_711.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'WorkProofBCrypt' with invalid type id $ {
            typeId
        }
        `);
        _out_712.writeByte(typeId);
        switch(typeId)  {
            case 1: (WorkProofBCrypt as any).META_BODY.serialize(sCtx_710, obj_711 as any as WorkProofBCrypt, _out_712);
            break;
            default: throw new Error(`Cannot serialize 'WorkProofBCrypt' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_710: MetaContext, in__713: DataIn): WorkProofBCrypt  {
        const typeId = in__713.readUByte();
        switch(typeId)  {
            case 1: return (WorkProofBCrypt as any).META_BODY.deserialize(sCtx_710, in__713) as any as WorkProofBCrypt;
            default: throw new Error(`Bad type id $ {
                typeId
            }
            for type 'WorkProofBCrypt'`);
            
        }
        
    }
    metaHashCode(obj: WorkProofBCrypt | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: return (WorkProofBCrypt as any).META_BODY.metaHashCode(obj as any as WorkProofBCrypt);
            default: throw new Error(`Cannot hashCode 'WorkProofBCrypt' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    metaEquals(v1: WorkProofBCrypt | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        const typeId1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const typeId2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (typeId1 === -1 || typeId1 !== typeId2) return false;
        switch(typeId1)  {
            case 1: return (WorkProofBCrypt as any).META_BODY.metaEquals(v1 as any as WorkProofBCrypt, v2);
            default: throw new Error(`Cannot equals 'WorkProofBCrypt' with unknown type id $ {
                typeId1
            }
            `);
            
        }
        
    }
    metaToString(obj: WorkProofBCrypt | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: (WorkProofBCrypt as any).META_BODY.metaToString(obj as any as WorkProofBCrypt, res);
            break;
            default: throw new Error(`Cannot toString 'WorkProofBCrypt' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    public serializeToBytes(obj: WorkProofBCrypt): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): WorkProofBCrypt  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): WorkProofBCrypt  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class WorkProofDTOMetaBodyImpl implements FastMetaType<WorkProofDTO>  {
    serialize(sCtx_714: MetaContext, obj_715: WorkProofDTO, _out_716: DataOut): void  {
        const stringBytes_718 = new TextEncoder().encode(obj_715.salt);
        SerializerPackNumber.INSTANCE.put(_out_716, stringBytes_718.length);
        _out_716.write(stringBytes_718);
        const stringBytes_720 = new TextEncoder().encode(obj_715.suffix);
        SerializerPackNumber.INSTANCE.put(_out_716, stringBytes_720.length);
        _out_716.write(stringBytes_720);
        _out_716.writeByte(obj_715.poolSize);
        _out_716.writeInt(obj_715.maxHashVal);
        SignedKey.META.serialize(sCtx_714, obj_715.globalKey, _out_716);
        
    }
    deserialize(sCtx_714: MetaContext, in__717: DataIn): WorkProofDTO  {
        let salt_722: string;
        let suffix_723: string;
        let poolSize_724: number;
        let maxHashVal_725: number;
        let globalKey_726: SignedKey;
        let stringBytes_727: Uint8Array;
        const len_729 = Number(DeserializerPackNumber.INSTANCE.put(in__717));
        const bytes_730 = in__717.readBytes(len_729);
        stringBytes_727 = bytes_730;
        salt_722 = new TextDecoder('utf-8').decode(stringBytes_727);
        let stringBytes_731: Uint8Array;
        const len_733 = Number(DeserializerPackNumber.INSTANCE.put(in__717));
        const bytes_734 = in__717.readBytes(len_733);
        stringBytes_731 = bytes_734;
        suffix_723 = new TextDecoder('utf-8').decode(stringBytes_731);
        poolSize_724 = in__717.readByte();
        maxHashVal_725 = in__717.readInt();
        globalKey_726 = SignedKey.META.deserialize(sCtx_714, in__717);
        return new WorkProofDTO(salt_722, suffix_723, poolSize_724, maxHashVal_725, globalKey_726);
        
    }
    metaHashCode(obj: WorkProofDTO | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_STRING.metaHashCode(obj.salt);
        hash = 37 * hash + FastMeta.META_STRING.metaHashCode(obj.suffix);
        hash = 37 * hash + FastMeta.META_BYTE.metaHashCode(obj.poolSize);
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.maxHashVal);
        hash = 37 * hash + SignedKey.META.metaHashCode(obj.globalKey);
        return hash | 0;
        
    }
    metaEquals(v1: WorkProofDTO | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof WorkProofDTO)) return false;
        if (!FastMeta.META_STRING.metaEquals(v1.salt, v2.salt)) return false;
        if (!FastMeta.META_STRING.metaEquals(v1.suffix, v2.suffix)) return false;
        if (!FastMeta.META_BYTE.metaEquals(v1.poolSize, v2.poolSize)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.maxHashVal, v2.maxHashVal)) return false;
        if (!SignedKey.META.metaEquals(v1.globalKey, v2.globalKey)) return false;
        return true;
        
    }
    metaToString(obj: WorkProofDTO | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('WorkProofDTO(');
        res.add('salt:').add(obj.salt);
        res.add(', ');
        res.add('suffix:').add(obj.suffix);
        res.add(', ');
        res.add('poolSize:').add(obj.poolSize);
        res.add(', ');
        res.add('maxHashVal:').add(obj.maxHashVal);
        res.add(', ');
        res.add('globalKey:').add(obj.globalKey);
        res.add(')');
        
    }
    public serializeToBytes(obj: WorkProofDTO): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): WorkProofDTO  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): WorkProofDTO  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiRegSafeStreamMetaImpl implements FastMetaType<ClientApiRegSafeStream>  {
    serialize(ctx: MetaContext, obj: ClientApiRegSafeStream, out: DataOut): void  {
        if (obj instanceof ClientApiRegSafeStream.Out)  {
            const outObj = obj as any;
            if (outObj.deferredFactory)  {
                const childCtx = ctx.findContext(outObj.deferredFactory, outObj.deferredKeys || []);
                const remoteApi = childCtx.makeRemote((ClientApiRegSafe as any).META);
                outObj.deferredRemoteGenerator(remoteApi);
                const raw = childCtx.remoteDataToArrayAsArray();
                outObj.data = outObj.cryptoConverter ? outObj.cryptoConverter(raw) : raw;
                
            }
            
        }
        FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out);
        
    }
    deserialize(ctx: MetaContext, in_: DataIn): ClientApiRegSafeStream  {
        try  {
            const data = FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_);
            return new ClientApiRegSafeStream.In(data, ctx) as any as ClientApiRegSafeStream;
            
        }
        catch (e)  {
            throw new Error("Stream error: " + (e as Error).message);
            
        }
        
    }
    metaHashCode(obj: ClientApiRegSafeStream | null | undefined): number  {
        return FastMeta.META_ARRAY_BYTE.metaHashCode(obj?.data);
        
    }
    metaEquals(v1: ClientApiRegSafeStream | null | undefined, v2: any | null | undefined): boolean  {
        return FastMeta.META_ARRAY_BYTE.metaEquals(v1?.data, (v2 instanceof ClientApiRegSafeStream) ? v2.data : v2);
        
    }
    metaToString(obj: ClientApiRegSafeStream | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiRegSafeStream(').add('data:').add(obj.data).add(')');
        
    }
    public serializeToBytes(obj: ClientApiRegSafeStream): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiRegSafeStream  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiRegSafeStream  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiStreamMetaImpl implements FastMetaType<ClientApiStream>  {
    serialize(ctx: MetaContext, obj: ClientApiStream, out: DataOut): void  {
        if (obj instanceof ClientApiStream.Out)  {
            const outObj = obj as any;
            if (outObj.deferredFactory)  {
                const childCtx = ctx.findContext(outObj.deferredFactory, outObj.deferredKeys || []);
                const remoteApi = childCtx.makeRemote((ServerApiByUid as any).META);
                outObj.deferredRemoteGenerator(remoteApi);
                outObj.data = childCtx.remoteDataToArrayAsArray();
                
            }
            
        }
        FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out);
        
    }
    deserialize(ctx: MetaContext, in_: DataIn): ClientApiStream  {
        try  {
            const data = FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_);
            return new ClientApiStream.In(data, ctx) as any as ClientApiStream;
            
        }
        catch (e)  {
            throw new Error("Stream error: " + (e as Error).message);
            
        }
        
    }
    metaHashCode(obj: ClientApiStream | null | undefined): number  {
        return FastMeta.META_ARRAY_BYTE.metaHashCode(obj?.data);
        
    }
    metaEquals(v1: ClientApiStream | null | undefined, v2: any | null | undefined): boolean  {
        return FastMeta.META_ARRAY_BYTE.metaEquals(v1?.data, (v2 instanceof ClientApiStream) ? v2.data : v2);
        
    }
    metaToString(obj: ClientApiStream | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiStream(').add('data:').add(obj.data).add(')');
        
    }
    public serializeToBytes(obj: ClientApiStream): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiStream  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiStream  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientInteractionClientStreamMetaImpl implements FastMetaType<ClientInteractionClientStream>  {
    serialize(ctx: MetaContext, obj: ClientInteractionClientStream, out: DataOut): void  {
        if (obj instanceof ClientInteractionClientStream.Out)  {
            const outObj = obj as any;
            if (outObj.deferredFactory)  {
                const childCtx = ctx.findContext(outObj.deferredFactory, outObj.deferredKeys || []);
                const remoteApi = childCtx.makeRemote((ServerApiByUidClient as any).META);
                outObj.deferredRemoteGenerator(remoteApi);
                outObj.data = childCtx.remoteDataToArrayAsArray();
                
            }
            
        }
        FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out);
        
    }
    deserialize(ctx: MetaContext, in_: DataIn): ClientInteractionClientStream  {
        try  {
            const data = FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_);
            return new ClientInteractionClientStream.In(data, ctx) as any as ClientInteractionClientStream;
            
        }
        catch (e)  {
            throw new Error("Stream error: " + (e as Error).message);
            
        }
        
    }
    metaHashCode(obj: ClientInteractionClientStream | null | undefined): number  {
        return FastMeta.META_ARRAY_BYTE.metaHashCode(obj?.data);
        
    }
    metaEquals(v1: ClientInteractionClientStream | null | undefined, v2: any | null | undefined): boolean  {
        return FastMeta.META_ARRAY_BYTE.metaEquals(v1?.data, (v2 instanceof ClientInteractionClientStream) ? v2.data : v2);
        
    }
    metaToString(obj: ClientInteractionClientStream | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientInteractionClientStream(').add('data:').add(obj.data).add(')');
        
    }
    public serializeToBytes(obj: ClientInteractionClientStream): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientInteractionClientStream  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientInteractionClientStream  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class GlobalApiStreamMetaImpl implements FastMetaType<GlobalApiStream>  {
    serialize(ctx: MetaContext, obj: GlobalApiStream, out: DataOut): void  {
        if (obj instanceof GlobalApiStream.Out)  {
            const outObj = obj as any;
            if (outObj.deferredFactory)  {
                const childCtx = ctx.findContext(outObj.deferredFactory, outObj.deferredKeys || []);
                const remoteApi = childCtx.makeRemote((GlobalRegServerApi as any).META);
                outObj.deferredRemoteGenerator(remoteApi);
                const raw = childCtx.remoteDataToArrayAsArray();
                outObj.data = outObj.cryptoConverter ? outObj.cryptoConverter(raw) : raw;
                
            }
            
        }
        FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out);
        
    }
    deserialize(ctx: MetaContext, in_: DataIn): GlobalApiStream  {
        try  {
            const data = FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_);
            return new GlobalApiStream.In(data, ctx) as any as GlobalApiStream;
            
        }
        catch (e)  {
            throw new Error("Stream error: " + (e as Error).message);
            
        }
        
    }
    metaHashCode(obj: GlobalApiStream | null | undefined): number  {
        return FastMeta.META_ARRAY_BYTE.metaHashCode(obj?.data);
        
    }
    metaEquals(v1: GlobalApiStream | null | undefined, v2: any | null | undefined): boolean  {
        return FastMeta.META_ARRAY_BYTE.metaEquals(v1?.data, (v2 instanceof GlobalApiStream) ? v2.data : v2);
        
    }
    metaToString(obj: GlobalApiStream | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('GlobalApiStream(').add('data:').add(obj.data).add(')');
        
    }
    public serializeToBytes(obj: GlobalApiStream): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): GlobalApiStream  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): GlobalApiStream  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class GlobalRegClientApiStreamMetaImpl implements FastMetaType<GlobalRegClientApiStream>  {
    serialize(ctx: MetaContext, obj: GlobalRegClientApiStream, out: DataOut): void  {
        if (obj instanceof GlobalRegClientApiStream.Out)  {
            const outObj = obj as any;
            if (outObj.deferredFactory)  {
                const childCtx = ctx.findContext(outObj.deferredFactory, outObj.deferredKeys || []);
                const remoteApi = childCtx.makeRemote((GlobalRegClientApi as any).META);
                outObj.deferredRemoteGenerator(remoteApi);
                const raw = childCtx.remoteDataToArrayAsArray();
                outObj.data = outObj.cryptoConverter ? outObj.cryptoConverter(raw) : raw;
                
            }
            
        }
        FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out);
        
    }
    deserialize(ctx: MetaContext, in_: DataIn): GlobalRegClientApiStream  {
        try  {
            const data = FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_);
            return new GlobalRegClientApiStream.In(data, ctx) as any as GlobalRegClientApiStream;
            
        }
        catch (e)  {
            throw new Error("Stream error: " + (e as Error).message);
            
        }
        
    }
    metaHashCode(obj: GlobalRegClientApiStream | null | undefined): number  {
        return FastMeta.META_ARRAY_BYTE.metaHashCode(obj?.data);
        
    }
    metaEquals(v1: GlobalRegClientApiStream | null | undefined, v2: any | null | undefined): boolean  {
        return FastMeta.META_ARRAY_BYTE.metaEquals(v1?.data, (v2 instanceof GlobalRegClientApiStream) ? v2.data : v2);
        
    }
    metaToString(obj: GlobalRegClientApiStream | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('GlobalRegClientApiStream(').add('data:').add(obj.data).add(')');
        
    }
    public serializeToBytes(obj: GlobalRegClientApiStream): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): GlobalRegClientApiStream  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): GlobalRegClientApiStream  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class LoginClientStreamMetaImpl implements FastMetaType<LoginClientStream>  {
    serialize(ctx: MetaContext, obj: LoginClientStream, out: DataOut): void  {
        if (obj instanceof LoginClientStream.Out)  {
            const outObj = obj as any;
            if (outObj.deferredFactory)  {
                const childCtx = ctx.findContext(outObj.deferredFactory, outObj.deferredKeys || []);
                const remoteApi = childCtx.makeRemote((ClientApiSafe as any).META);
                outObj.deferredRemoteGenerator(remoteApi);
                const raw = childCtx.remoteDataToArrayAsArray();
                outObj.data = outObj.cryptoConverter ? outObj.cryptoConverter(raw) : raw;
                
            }
            
        }
        FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out);
        
    }
    deserialize(ctx: MetaContext, in_: DataIn): LoginClientStream  {
        try  {
            const data = FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_);
            return new LoginClientStream.In(data, ctx) as any as LoginClientStream;
            
        }
        catch (e)  {
            throw new Error("Stream error: " + (e as Error).message);
            
        }
        
    }
    metaHashCode(obj: LoginClientStream | null | undefined): number  {
        return FastMeta.META_ARRAY_BYTE.metaHashCode(obj?.data);
        
    }
    metaEquals(v1: LoginClientStream | null | undefined, v2: any | null | undefined): boolean  {
        return FastMeta.META_ARRAY_BYTE.metaEquals(v1?.data, (v2 instanceof LoginClientStream) ? v2.data : v2);
        
    }
    metaToString(obj: LoginClientStream | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('LoginClientStream(').add('data:').add(obj.data).add(')');
        
    }
    public serializeToBytes(obj: LoginClientStream): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): LoginClientStream  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): LoginClientStream  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class LoginStreamMetaImpl implements FastMetaType<LoginStream>  {
    serialize(ctx: MetaContext, obj: LoginStream, out: DataOut): void  {
        if (obj instanceof LoginStream.Out)  {
            const outObj = obj as any;
            if (outObj.deferredFactory)  {
                const childCtx = ctx.findContext(outObj.deferredFactory, outObj.deferredKeys || []);
                const remoteApi = childCtx.makeRemote((AuthorizedApi as any).META);
                outObj.deferredRemoteGenerator(remoteApi);
                const raw = childCtx.remoteDataToArrayAsArray();
                outObj.data = outObj.cryptoConverter ? outObj.cryptoConverter(raw) : raw;
                
            }
            
        }
        FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out);
        
    }
    deserialize(ctx: MetaContext, in_: DataIn): LoginStream  {
        try  {
            const data = FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_);
            return new LoginStream.In(data, ctx) as any as LoginStream;
            
        }
        catch (e)  {
            throw new Error("Stream error: " + (e as Error).message);
            
        }
        
    }
    metaHashCode(obj: LoginStream | null | undefined): number  {
        return FastMeta.META_ARRAY_BYTE.metaHashCode(obj?.data);
        
    }
    metaEquals(v1: LoginStream | null | undefined, v2: any | null | undefined): boolean  {
        return FastMeta.META_ARRAY_BYTE.metaEquals(v1?.data, (v2 instanceof LoginStream) ? v2.data : v2);
        
    }
    metaToString(obj: LoginStream | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('LoginStream(').add('data:').add(obj.data).add(')');
        
    }
    public serializeToBytes(obj: LoginStream): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): LoginStream  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): LoginStream  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerRegistrationApiStreamMetaImpl implements FastMetaType<ServerRegistrationApiStream>  {
    serialize(ctx: MetaContext, obj: ServerRegistrationApiStream, out: DataOut): void  {
        if (obj instanceof ServerRegistrationApiStream.Out)  {
            const outObj = obj as any;
            if (outObj.deferredFactory)  {
                const childCtx = ctx.findContext(outObj.deferredFactory, outObj.deferredKeys || []);
                const remoteApi = childCtx.makeRemote((ServerRegistrationApi as any).META);
                outObj.deferredRemoteGenerator(remoteApi);
                const raw = childCtx.remoteDataToArrayAsArray();
                outObj.data = outObj.cryptoConverter ? outObj.cryptoConverter(raw) : raw;
                
            }
            
        }
        FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out);
        
    }
    deserialize(ctx: MetaContext, in_: DataIn): ServerRegistrationApiStream  {
        try  {
            const data = FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_);
            return new ServerRegistrationApiStream.In(data, ctx) as any as ServerRegistrationApiStream;
            
        }
        catch (e)  {
            throw new Error("Stream error: " + (e as Error).message);
            
        }
        
    }
    metaHashCode(obj: ServerRegistrationApiStream | null | undefined): number  {
        return FastMeta.META_ARRAY_BYTE.metaHashCode(obj?.data);
        
    }
    metaEquals(v1: ServerRegistrationApiStream | null | undefined, v2: any | null | undefined): boolean  {
        return FastMeta.META_ARRAY_BYTE.metaEquals(v1?.data, (v2 instanceof ServerRegistrationApiStream) ? v2.data : v2);
        
    }
    metaToString(obj: ServerRegistrationApiStream | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerRegistrationApiStream(').add('data:').add(obj.data).add(')');
        
    }
    public serializeToBytes(obj: ServerRegistrationApiStream): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerRegistrationApiStream  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerRegistrationApiStream  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiUnsafeMetaImpl implements FastMetaApi<ClientApiUnsafe, ClientApiUnsafeRemote>  {
    makeLocal_fromDataIn(ctx: MetaContext, dataIn: DataIn, localApi: ClientApiUnsafe): void  {
        while(dataIn.isReadable())  {
            const commandId = dataIn.readUByte();
            switch(commandId)  {
                case 0:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onDone(dataIn);
                    break;
                    
                }
                case 1:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onError(dataIn);
                    break;
                    
                }
                case 3:  {
                    let backId_736: number;
                    let data_737: LoginClientStream;
                    backId_736 = dataIn.readByte();
                    data_737 = LoginClientStream.META.deserialize(ctx, dataIn);
                    const argsNames_738: string[] = ["backId", "data"];
                    const argsValues_739: any[] = [backId_736, data_737];
                    ctx.invokeLocalMethodBefore("sendSafeApiDataMulti", argsNames_738, argsValues_739);
                    localApi.sendSafeApiDataMulti(backId_736, data_737);
                    ctx.invokeLocalMethodAfter("sendSafeApiDataMulti", null, argsNames_738, argsValues_739);
                    break;
                    
                }
                case 4:  {
                    let data_741: LoginClientStream;
                    data_741 = LoginClientStream.META.deserialize(ctx, dataIn);
                    const argsNames_742: string[] = ["data"];
                    const argsValues_743: any[] = [data_741];
                    ctx.invokeLocalMethodBefore("sendSafeApiData", argsNames_742, argsValues_743);
                    localApi.sendSafeApiData(data_741);
                    ctx.invokeLocalMethodAfter("sendSafeApiData", null, argsNames_742, argsValues_743);
                    break;
                    
                }
                default: throw new Error(`Unknown command ID: $ {
                    commandId
                }
                `);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ClientApiUnsafe): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_744: MetaContext): ClientApiUnsafeRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_744.flush();
                
            }
            , getFastMetaContext: () => sCtx_744, sendSafeApiDataMulti: (backId: number, data: LoginClientStream): void =>  {
                const dataOut_746 = new DataInOut();
                dataOut_746.writeByte(3);
                const argsNames_748: string[] = ["backId", "data"];
                const argsValues_749: any[] = [backId, data];
                sCtx_744.invokeRemoteMethodAfter("sendSafeApiDataMulti", null, argsNames_748, argsValues_749);
                dataOut_746.writeByte(backId);
                LoginClientStream.META.serialize(sCtx_744, data, dataOut_746);
                sCtx_744.sendToRemote(dataOut_746.toArray());
                
            }
            , sendSafeApiData: (data: LoginClientStream): void =>  {
                const dataOut_751 = new DataInOut();
                dataOut_751.writeByte(4);
                const argsNames_753: string[] = ["data"];
                const argsValues_754: any[] = [data];
                sCtx_744.invokeRemoteMethodAfter("sendSafeApiData", null, argsNames_753, argsValues_754);
                LoginClientStream.META.serialize(sCtx_744, data, dataOut_751);
                sCtx_744.sendToRemote(dataOut_751.toArray());
                
            }
            , openSendSafeApiDataMulti(backId: number, factory: (api: ClientApiSafeRemote) => any, converter: BytesConverter, ...keys: any[]): ClientApiSafeRemote  {
                return sCtx_744.findContext(ctx =>  {
                    ctx.onFlushData(data => this.sendSafeApiDataMulti(backId, LoginClientStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((ClientApiSafe as any).META));
                    
                }
                , ...keys).makeRemote((ClientApiSafe as any).META) as ClientApiSafeRemote;
                
            }
            , openSendSafeApiData(factory: (api: ClientApiSafeRemote) => any, converter: BytesConverter, ...keys: any[]): ClientApiSafeRemote  {
                return sCtx_744.findContext(ctx =>  {
                    ctx.onFlushData(data => this.sendSafeApiData(LoginClientStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((ClientApiSafe as any).META));
                    
                }
                , ...keys).makeRemote((ClientApiSafe as any).META) as ClientApiSafeRemote;
                
            }
            , 
        };
        return remoteApiImpl as ClientApiUnsafeRemote;
        
    }
    isValidCommand(commandId: number): boolean  {
        switch(commandId)  {
            case 0: // META_RESULT
            case 1: // META_ERROR
            case 3: // sendSafeApiDataMulti
            case 4: // sendSafeApiData
            return true;
            default: return false;
            
        }
        
    }
    
}
export class ClientApiSafeMetaImpl implements FastMetaApi<ClientApiSafe, ClientApiSafeRemote>  {
    makeLocal_fromDataIn(ctx: MetaContext, dataIn: DataIn, localApi: ClientApiSafe): void  {
        while(dataIn.isReadable())  {
            const commandId = dataIn.readUByte();
            switch(commandId)  {
                case 0:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onDone(dataIn);
                    break;
                    
                }
                case 1:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onError(dataIn);
                    break;
                    
                }
                case 3:  {
                    let uid_756: UUID;
                    uid_756 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_757: string[] = ["uid"];
                    const argsValues_758: any[] = [uid_756];
                    ctx.invokeLocalMethodBefore("changeParent", argsNames_757, argsValues_758);
                    localApi.changeParent(uid_756);
                    ctx.invokeLocalMethodAfter("changeParent", null, argsNames_757, argsValues_758);
                    break;
                    
                }
                case 4:  {
                    let alias_760: UUID;
                    alias_760 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_761: string[] = ["alias"];
                    const argsValues_762: any[] = [alias_760];
                    ctx.invokeLocalMethodBefore("changeAlias", argsNames_761, argsValues_762);
                    localApi.changeAlias(alias_760);
                    ctx.invokeLocalMethodAfter("changeAlias", null, argsNames_761, argsValues_762);
                    break;
                    
                }
                case 5:  {
                    let uids_764: UUID[];
                    const len_766 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_764 = new Array<UUID>(len_766);
                    for (let idx_765 = 0;
                    idx_765 < len_766;
                    idx_765++)  {
                        uids_764[idx_765] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_767: string[] = ["uids"];
                    const argsValues_768: any[] = [uids_764];
                    ctx.invokeLocalMethodBefore("newChildren", argsNames_767, argsValues_768);
                    localApi.newChildren(uids_764);
                    ctx.invokeLocalMethodAfter("newChildren", null, argsNames_767, argsValues_768);
                    break;
                    
                }
                case 6:  {
                    let msg_770: Message[];
                    const len_772 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_770 = new Array<Message>(len_772);
                    for (let idx_771 = 0;
                    idx_771 < len_772;
                    idx_771++)  {
                        msg_770[idx_771] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_773: string[] = ["msg"];
                    const argsValues_774: any[] = [msg_770];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_773, argsValues_774);
                    localApi.sendMessages(msg_770);
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_773, argsValues_774);
                    break;
                    
                }
                case 7:  {
                    let serverDescriptor_776: ServerDescriptor;
                    serverDescriptor_776 = ServerDescriptor.META.deserialize(ctx, dataIn);
                    const argsNames_777: string[] = ["serverDescriptor"];
                    const argsValues_778: any[] = [serverDescriptor_776];
                    ctx.invokeLocalMethodBefore("sendServerDescriptor", argsNames_777, argsValues_778);
                    localApi.sendServerDescriptor(serverDescriptor_776);
                    ctx.invokeLocalMethodAfter("sendServerDescriptor", null, argsNames_777, argsValues_778);
                    break;
                    
                }
                case 8:  {
                    let serverDescriptors_780: ServerDescriptor[];
                    const len_782 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    serverDescriptors_780 = new Array<ServerDescriptor>(len_782);
                    for (let idx_781 = 0;
                    idx_781 < len_782;
                    idx_781++)  {
                        serverDescriptors_780[idx_781] = ServerDescriptor.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_783: string[] = ["serverDescriptors"];
                    const argsValues_784: any[] = [serverDescriptors_780];
                    ctx.invokeLocalMethodBefore("sendServerDescriptors", argsNames_783, argsValues_784);
                    localApi.sendServerDescriptors(serverDescriptors_780);
                    ctx.invokeLocalMethodAfter("sendServerDescriptors", null, argsNames_783, argsValues_784);
                    break;
                    
                }
                case 9:  {
                    let uidAndCloud_786: UUIDAndCloud;
                    uidAndCloud_786 = UUIDAndCloud.META.deserialize(ctx, dataIn);
                    const argsNames_787: string[] = ["uidAndCloud"];
                    const argsValues_788: any[] = [uidAndCloud_786];
                    ctx.invokeLocalMethodBefore("sendCloud", argsNames_787, argsValues_788);
                    localApi.sendCloud(uidAndCloud_786);
                    ctx.invokeLocalMethodAfter("sendCloud", null, argsNames_787, argsValues_788);
                    break;
                    
                }
                case 10:  {
                    let clouds_790: UUIDAndCloud[];
                    const len_792 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    clouds_790 = new Array<UUIDAndCloud>(len_792);
                    for (let idx_791 = 0;
                    idx_791 < len_792;
                    idx_791++)  {
                        clouds_790[idx_791] = UUIDAndCloud.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_793: string[] = ["clouds"];
                    const argsValues_794: any[] = [clouds_790];
                    ctx.invokeLocalMethodBefore("sendClouds", argsNames_793, argsValues_794);
                    localApi.sendClouds(clouds_790);
                    ctx.invokeLocalMethodAfter("sendClouds", null, argsNames_793, argsValues_794);
                    break;
                    
                }
                case 11:  {
                    const argsNames_796: string[] = [];
                    const argsValues_797: any[] = [];
                    ctx.invokeLocalMethodBefore("requestTelemetry", argsNames_796, argsValues_797);
                    localApi.requestTelemetry();
                    ctx.invokeLocalMethodAfter("requestTelemetry", null, argsNames_796, argsValues_797);
                    break;
                    
                }
                case 12:  {
                    let groups_799: AccessGroup[];
                    const len_801 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_799 = new Array<AccessGroup>(len_801);
                    for (let idx_800 = 0;
                    idx_800 < len_801;
                    idx_800++)  {
                        groups_799[idx_800] = AccessGroup.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_802: string[] = ["groups"];
                    const argsValues_803: any[] = [groups_799];
                    ctx.invokeLocalMethodBefore("sendAccessGroups", argsNames_802, argsValues_803);
                    localApi.sendAccessGroups(groups_799);
                    ctx.invokeLocalMethodAfter("sendAccessGroups", null, argsNames_802, argsValues_803);
                    break;
                    
                }
                case 13:  {
                    let uid_805: UUID;
                    let groups_806: bigint[];
                    uid_805 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_808 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_806 = new Array<bigint>(len_808);
                    for (let idx_807 = 0;
                    idx_807 < len_808;
                    idx_807++)  {
                        groups_806[idx_807] = dataIn.readLong();
                        
                    }
                    const argsNames_809: string[] = ["uid", "groups"];
                    const argsValues_810: any[] = [uid_805, groups_806];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_809, argsValues_810);
                    localApi.sendAccessGroupForClient(uid_805, groups_806);
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_809, argsValues_810);
                    break;
                    
                }
                case 14:  {
                    let id_812: bigint;
                    let groups_813: UUID[];
                    id_812 = dataIn.readLong();
                    const len_815 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_813 = new Array<UUID>(len_815);
                    for (let idx_814 = 0;
                    idx_814 < len_815;
                    idx_814++)  {
                        groups_813[idx_814] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_816: string[] = ["id", "groups"];
                    const argsValues_817: any[] = [id_812, groups_813];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_816, argsValues_817);
                    localApi.addItemsToAccessGroup(id_812, groups_813);
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_816, argsValues_817);
                    break;
                    
                }
                case 15:  {
                    let id_819: bigint;
                    let groups_820: UUID[];
                    id_819 = dataIn.readLong();
                    const len_822 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_820 = new Array<UUID>(len_822);
                    for (let idx_821 = 0;
                    idx_821 < len_822;
                    idx_821++)  {
                        groups_820[idx_821] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_823: string[] = ["id", "groups"];
                    const argsValues_824: any[] = [id_819, groups_820];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_823, argsValues_824);
                    localApi.removeItemsFromAccessGroup(id_819, groups_820);
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_823, argsValues_824);
                    break;
                    
                }
                case 16:  {
                    let uid_826: UUID;
                    let groups_827: bigint[];
                    uid_826 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_829 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_827 = new Array<bigint>(len_829);
                    for (let idx_828 = 0;
                    idx_828 < len_829;
                    idx_828++)  {
                        groups_827[idx_828] = dataIn.readLong();
                        
                    }
                    const argsNames_830: string[] = ["uid", "groups"];
                    const argsValues_831: any[] = [uid_826, groups_827];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_830, argsValues_831);
                    localApi.addAccessGroupsToClient(uid_826, groups_827);
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_830, argsValues_831);
                    break;
                    
                }
                case 17:  {
                    let uid_833: UUID;
                    let groups_834: bigint[];
                    uid_833 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_836 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_834 = new Array<bigint>(len_836);
                    for (let idx_835 = 0;
                    idx_835 < len_836;
                    idx_835++)  {
                        groups_834[idx_835] = dataIn.readLong();
                        
                    }
                    const argsNames_837: string[] = ["uid", "groups"];
                    const argsValues_838: any[] = [uid_833, groups_834];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_837, argsValues_838);
                    localApi.removeAccessGroupsFromClient(uid_833, groups_834);
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_837, argsValues_838);
                    break;
                    
                }
                case 18:  {
                    let uid_840: UUID;
                    let accessedClients_841: UUID[];
                    uid_840 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_843 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    accessedClients_841 = new Array<UUID>(len_843);
                    for (let idx_842 = 0;
                    idx_842 < len_843;
                    idx_842++)  {
                        accessedClients_841[idx_842] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_844: string[] = ["uid", "accessedClients"];
                    const argsValues_845: any[] = [uid_840, accessedClients_841];
                    ctx.invokeLocalMethodBefore("sendAllAccessedClients", argsNames_844, argsValues_845);
                    localApi.sendAllAccessedClients(uid_840, accessedClients_841);
                    ctx.invokeLocalMethodAfter("sendAllAccessedClients", null, argsNames_844, argsValues_845);
                    break;
                    
                }
                case 19:  {
                    let results_847: AccessCheckResult[];
                    const len_849 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    results_847 = new Array<AccessCheckResult>(len_849);
                    for (let idx_848 = 0;
                    idx_848 < len_849;
                    idx_848++)  {
                        results_847[idx_848] = AccessCheckResult.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_850: string[] = ["results"];
                    const argsValues_851: any[] = [results_847];
                    ctx.invokeLocalMethodBefore("sendAccessCheckResults", argsNames_850, argsValues_851);
                    localApi.sendAccessCheckResults(results_847);
                    ctx.invokeLocalMethodAfter("sendAccessCheckResults", null, argsNames_850, argsValues_851);
                    break;
                    
                }
                case 20:  {
                    let msg_853: Message;
                    msg_853 = Message.META.deserialize(ctx, dataIn);
                    const argsNames_854: string[] = ["msg"];
                    const argsValues_855: any[] = [msg_853];
                    ctx.invokeLocalMethodBefore("sendMessage", argsNames_854, argsValues_855);
                    localApi.sendMessage(msg_853);
                    ctx.invokeLocalMethodAfter("sendMessage", null, argsNames_854, argsValues_855);
                    break;
                    
                }
                case 21:  {
                    let configs_857: CloudConfig[];
                    const len_859 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    configs_857 = new Array<CloudConfig>(len_859);
                    for (let idx_858 = 0;
                    idx_858 < len_859;
                    idx_858++)  {
                        configs_857[idx_858] = CloudConfig.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_860: string[] = ["configs"];
                    const argsValues_861: any[] = [configs_857];
                    ctx.invokeLocalMethodBefore("sendCloudConfigs", argsNames_860, argsValues_861);
                    localApi.sendCloudConfigs(configs_857);
                    ctx.invokeLocalMethodAfter("sendCloudConfigs", null, argsNames_860, argsValues_861);
                    break;
                    
                }
                default: throw new Error(`Unknown command ID: $ {
                    commandId
                }
                `);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ClientApiSafe): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_862: MetaContext): ClientApiSafeRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_862.flush();
                
            }
            , getFastMetaContext: () => sCtx_862, changeParent: (uid: UUID): void =>  {
                const dataOut_864 = new DataInOut();
                dataOut_864.writeByte(3);
                const argsNames_866: string[] = ["uid"];
                const argsValues_867: any[] = [uid];
                sCtx_862.invokeRemoteMethodAfter("changeParent", null, argsNames_866, argsValues_867);
                FastMeta.META_UUID.serialize(sCtx_862, uid, dataOut_864);
                sCtx_862.sendToRemote(dataOut_864.toArray());
                
            }
            , changeAlias: (alias: UUID): void =>  {
                const dataOut_869 = new DataInOut();
                dataOut_869.writeByte(4);
                const argsNames_871: string[] = ["alias"];
                const argsValues_872: any[] = [alias];
                sCtx_862.invokeRemoteMethodAfter("changeAlias", null, argsNames_871, argsValues_872);
                FastMeta.META_UUID.serialize(sCtx_862, alias, dataOut_869);
                sCtx_862.sendToRemote(dataOut_869.toArray());
                
            }
            , newChildren: (uids: UUID[]): void =>  {
                const dataOut_874 = new DataInOut();
                dataOut_874.writeByte(5);
                const argsNames_876: string[] = ["uids"];
                const argsValues_877: any[] = [uids];
                sCtx_862.invokeRemoteMethodAfter("newChildren", null, argsNames_876, argsValues_877);
                SerializerPackNumber.INSTANCE.put(dataOut_874, uids.length);
                for (const el_878 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_862, el_878, dataOut_874);
                    
                }
                sCtx_862.sendToRemote(dataOut_874.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_880 = new DataInOut();
                dataOut_880.writeByte(6);
                const argsNames_882: string[] = ["msg"];
                const argsValues_883: any[] = [msg];
                sCtx_862.invokeRemoteMethodAfter("sendMessages", null, argsNames_882, argsValues_883);
                SerializerPackNumber.INSTANCE.put(dataOut_880, msg.length);
                for (const el_884 of msg)  {
                    Message.META.serialize(sCtx_862, el_884, dataOut_880);
                    
                }
                sCtx_862.sendToRemote(dataOut_880.toArray());
                
            }
            , sendServerDescriptor: (serverDescriptor: ServerDescriptor): void =>  {
                const dataOut_886 = new DataInOut();
                dataOut_886.writeByte(7);
                const argsNames_888: string[] = ["serverDescriptor"];
                const argsValues_889: any[] = [serverDescriptor];
                sCtx_862.invokeRemoteMethodAfter("sendServerDescriptor", null, argsNames_888, argsValues_889);
                ServerDescriptor.META.serialize(sCtx_862, serverDescriptor, dataOut_886);
                sCtx_862.sendToRemote(dataOut_886.toArray());
                
            }
            , sendServerDescriptors: (serverDescriptors: ServerDescriptor[]): void =>  {
                const dataOut_891 = new DataInOut();
                dataOut_891.writeByte(8);
                const argsNames_893: string[] = ["serverDescriptors"];
                const argsValues_894: any[] = [serverDescriptors];
                sCtx_862.invokeRemoteMethodAfter("sendServerDescriptors", null, argsNames_893, argsValues_894);
                SerializerPackNumber.INSTANCE.put(dataOut_891, serverDescriptors.length);
                for (const el_895 of serverDescriptors)  {
                    ServerDescriptor.META.serialize(sCtx_862, el_895, dataOut_891);
                    
                }
                sCtx_862.sendToRemote(dataOut_891.toArray());
                
            }
            , sendCloud: (uidAndCloud: UUIDAndCloud): void =>  {
                const dataOut_897 = new DataInOut();
                dataOut_897.writeByte(9);
                const argsNames_899: string[] = ["uidAndCloud"];
                const argsValues_900: any[] = [uidAndCloud];
                sCtx_862.invokeRemoteMethodAfter("sendCloud", null, argsNames_899, argsValues_900);
                UUIDAndCloud.META.serialize(sCtx_862, uidAndCloud, dataOut_897);
                sCtx_862.sendToRemote(dataOut_897.toArray());
                
            }
            , sendClouds: (clouds: UUIDAndCloud[]): void =>  {
                const dataOut_902 = new DataInOut();
                dataOut_902.writeByte(10);
                const argsNames_904: string[] = ["clouds"];
                const argsValues_905: any[] = [clouds];
                sCtx_862.invokeRemoteMethodAfter("sendClouds", null, argsNames_904, argsValues_905);
                SerializerPackNumber.INSTANCE.put(dataOut_902, clouds.length);
                for (const el_906 of clouds)  {
                    UUIDAndCloud.META.serialize(sCtx_862, el_906, dataOut_902);
                    
                }
                sCtx_862.sendToRemote(dataOut_902.toArray());
                
            }
            , requestTelemetry: (): void =>  {
                const dataOut_908 = new DataInOut();
                dataOut_908.writeByte(11);
                const argsNames_910: string[] = [];
                const argsValues_911: any[] = [];
                sCtx_862.invokeRemoteMethodAfter("requestTelemetry", null, argsNames_910, argsValues_911);
                sCtx_862.sendToRemote(dataOut_908.toArray());
                
            }
            , sendAccessGroups: (groups: AccessGroup[]): void =>  {
                const dataOut_913 = new DataInOut();
                dataOut_913.writeByte(12);
                const argsNames_915: string[] = ["groups"];
                const argsValues_916: any[] = [groups];
                sCtx_862.invokeRemoteMethodAfter("sendAccessGroups", null, argsNames_915, argsValues_916);
                SerializerPackNumber.INSTANCE.put(dataOut_913, groups.length);
                for (const el_917 of groups)  {
                    AccessGroup.META.serialize(sCtx_862, el_917, dataOut_913);
                    
                }
                sCtx_862.sendToRemote(dataOut_913.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_919 = new DataInOut();
                dataOut_919.writeByte(13);
                const argsNames_921: string[] = ["uid", "groups"];
                const argsValues_922: any[] = [uid, groups];
                sCtx_862.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_921, argsValues_922);
                FastMeta.META_UUID.serialize(sCtx_862, uid, dataOut_919);
                SerializerPackNumber.INSTANCE.put(dataOut_919, groups.length);
                for (const el_923 of groups)  {
                    dataOut_919.writeLong(el_923);
                    
                }
                sCtx_862.sendToRemote(dataOut_919.toArray());
                
            }
            , addItemsToAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_925 = new DataInOut();
                dataOut_925.writeByte(14);
                const argsNames_927: string[] = ["id", "groups"];
                const argsValues_928: any[] = [id, groups];
                sCtx_862.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_927, argsValues_928);
                dataOut_925.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_925, groups.length);
                for (const el_929 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_862, el_929, dataOut_925);
                    
                }
                sCtx_862.sendToRemote(dataOut_925.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_931 = new DataInOut();
                dataOut_931.writeByte(15);
                const argsNames_933: string[] = ["id", "groups"];
                const argsValues_934: any[] = [id, groups];
                sCtx_862.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_933, argsValues_934);
                dataOut_931.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_931, groups.length);
                for (const el_935 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_862, el_935, dataOut_931);
                    
                }
                sCtx_862.sendToRemote(dataOut_931.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_937 = new DataInOut();
                dataOut_937.writeByte(16);
                const argsNames_939: string[] = ["uid", "groups"];
                const argsValues_940: any[] = [uid, groups];
                sCtx_862.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_939, argsValues_940);
                FastMeta.META_UUID.serialize(sCtx_862, uid, dataOut_937);
                SerializerPackNumber.INSTANCE.put(dataOut_937, groups.length);
                for (const el_941 of groups)  {
                    dataOut_937.writeLong(el_941);
                    
                }
                sCtx_862.sendToRemote(dataOut_937.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_943 = new DataInOut();
                dataOut_943.writeByte(17);
                const argsNames_945: string[] = ["uid", "groups"];
                const argsValues_946: any[] = [uid, groups];
                sCtx_862.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_945, argsValues_946);
                FastMeta.META_UUID.serialize(sCtx_862, uid, dataOut_943);
                SerializerPackNumber.INSTANCE.put(dataOut_943, groups.length);
                for (const el_947 of groups)  {
                    dataOut_943.writeLong(el_947);
                    
                }
                sCtx_862.sendToRemote(dataOut_943.toArray());
                
            }
            , sendAllAccessedClients: (uid: UUID, accessedClients: UUID[]): void =>  {
                const dataOut_949 = new DataInOut();
                dataOut_949.writeByte(18);
                const argsNames_951: string[] = ["uid", "accessedClients"];
                const argsValues_952: any[] = [uid, accessedClients];
                sCtx_862.invokeRemoteMethodAfter("sendAllAccessedClients", null, argsNames_951, argsValues_952);
                FastMeta.META_UUID.serialize(sCtx_862, uid, dataOut_949);
                SerializerPackNumber.INSTANCE.put(dataOut_949, accessedClients.length);
                for (const el_953 of accessedClients)  {
                    FastMeta.META_UUID.serialize(sCtx_862, el_953, dataOut_949);
                    
                }
                sCtx_862.sendToRemote(dataOut_949.toArray());
                
            }
            , sendAccessCheckResults: (results: AccessCheckResult[]): void =>  {
                const dataOut_955 = new DataInOut();
                dataOut_955.writeByte(19);
                const argsNames_957: string[] = ["results"];
                const argsValues_958: any[] = [results];
                sCtx_862.invokeRemoteMethodAfter("sendAccessCheckResults", null, argsNames_957, argsValues_958);
                SerializerPackNumber.INSTANCE.put(dataOut_955, results.length);
                for (const el_959 of results)  {
                    AccessCheckResult.META.serialize(sCtx_862, el_959, dataOut_955);
                    
                }
                sCtx_862.sendToRemote(dataOut_955.toArray());
                
            }
            , sendMessage: (msg: Message): void =>  {
                const dataOut_961 = new DataInOut();
                dataOut_961.writeByte(20);
                const argsNames_963: string[] = ["msg"];
                const argsValues_964: any[] = [msg];
                sCtx_862.invokeRemoteMethodAfter("sendMessage", null, argsNames_963, argsValues_964);
                Message.META.serialize(sCtx_862, msg, dataOut_961);
                sCtx_862.sendToRemote(dataOut_961.toArray());
                
            }
            , sendCloudConfigs: (configs: CloudConfig[]): void =>  {
                const dataOut_966 = new DataInOut();
                dataOut_966.writeByte(21);
                const argsNames_968: string[] = ["configs"];
                const argsValues_969: any[] = [configs];
                sCtx_862.invokeRemoteMethodAfter("sendCloudConfigs", null, argsNames_968, argsValues_969);
                SerializerPackNumber.INSTANCE.put(dataOut_966, configs.length);
                for (const el_970 of configs)  {
                    CloudConfig.META.serialize(sCtx_862, el_970, dataOut_966);
                    
                }
                sCtx_862.sendToRemote(dataOut_966.toArray());
                
            }
            , 
        };
        return remoteApiImpl as ClientApiSafeRemote;
        
    }
    isValidCommand(commandId: number): boolean  {
        switch(commandId)  {
            case 0: // META_RESULT
            case 1: // META_ERROR
            case 3: // changeParent
            case 4: // changeAlias
            case 5: // newChildren
            case 6: // sendMessages
            case 7: // sendServerDescriptor
            case 8: // sendServerDescriptors
            case 9: // sendCloud
            case 10: // sendClouds
            case 11: // requestTelemetry
            case 12: // sendAccessGroups
            case 13: // sendAccessGroupForClient
            case 14: // addItemsToAccessGroup
            case 15: // removeItemsFromAccessGroup
            case 16: // addAccessGroupsToClient
            case 17: // removeAccessGroupsFromClient
            case 18: // sendAllAccessedClients
            case 19: // sendAccessCheckResults
            case 20: // sendMessage
            case 21: // sendCloudConfigs
            return true;
            default: return false;
            
        }
        
    }
    
}
export class AuthorizedApiMetaImpl implements FastMetaApi<AuthorizedApi, AuthorizedApiRemote>  {
    makeLocal_fromDataIn(ctx: MetaContext, dataIn: DataIn, localApi: AuthorizedApi): void  {
        while(dataIn.isReadable())  {
            const commandId = dataIn.readUByte();
            switch(commandId)  {
                case 0:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onDone(dataIn);
                    break;
                    
                }
                case 1:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onError(dataIn);
                    break;
                    
                }
                case 3:  {
                    let id_972: number;
                    id_972 = dataIn.readByte();
                    const argsNames_973: string[] = ["id"];
                    const argsValues_974: any[] = [id_972];
                    ctx.invokeLocalMethodBefore("backId", argsNames_973, argsValues_974);
                    localApi.backId(id_972);
                    ctx.invokeLocalMethodAfter("backId", null, argsNames_973, argsValues_974);
                    break;
                    
                }
                case 4:  {
                    const reqId_975 = dataIn.readInt();
                    let nextConnectMsDuration_976: bigint;
                    let rxWindowMs_977: bigint;
                    nextConnectMsDuration_976 = dataIn.readLong();
                    rxWindowMs_977 = dataIn.readLong();
                    const argsNames_978: string[] = ["nextConnectMsDuration", "rxWindowMs"];
                    const argsValues_979: any[] = [nextConnectMsDuration_976, rxWindowMs_977];
                    ctx.invokeLocalMethodBefore("ping", argsNames_978, argsValues_979);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.ping(nextConnectMsDuration_976, rxWindowMs_977);
                    ctx.invokeLocalMethodAfter("ping", resultFuture, argsNames_978, argsValues_979);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_975);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    let uid_981: UUID;
                    let stream_982: ClientApiStream;
                    uid_981 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    stream_982 = ClientApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_983: string[] = ["uid", "stream"];
                    const argsValues_984: any[] = [uid_981, stream_982];
                    ctx.invokeLocalMethodBefore("client", argsNames_983, argsValues_984);
                    localApi.client(uid_981, stream_982);
                    ctx.invokeLocalMethodAfter("client", null, argsNames_983, argsValues_984);
                    break;
                    
                }
                case 6:  {
                    let msg_986: Message;
                    msg_986 = Message.META.deserialize(ctx, dataIn);
                    const argsNames_987: string[] = ["msg"];
                    const argsValues_988: any[] = [msg_986];
                    ctx.invokeLocalMethodBefore("sendMessage", argsNames_987, argsValues_988);
                    localApi.sendMessage(msg_986);
                    ctx.invokeLocalMethodAfter("sendMessage", null, argsNames_987, argsValues_988);
                    break;
                    
                }
                case 7:  {
                    let msg_990: Message[];
                    const len_992 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_990 = new Array<Message>(len_992);
                    for (let idx_991 = 0;
                    idx_991 < len_992;
                    idx_991++)  {
                        msg_990[idx_991] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_993: string[] = ["msg"];
                    const argsValues_994: any[] = [msg_990];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_993, argsValues_994);
                    localApi.sendMessages(msg_990);
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_993, argsValues_994);
                    break;
                    
                }
                case 37:  {
                    let uids_996: UUID[];
                    let data_997: Uint8Array;
                    const len_999 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_996 = new Array<UUID>(len_999);
                    for (let idx_998 = 0;
                    idx_998 < len_999;
                    idx_998++)  {
                        uids_996[idx_998] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const len_1001 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1002 = dataIn.readBytes(len_1001);
                    data_997 = bytes_1002;
                    const argsNames_1003: string[] = ["uids", "data"];
                    const argsValues_1004: any[] = [uids_996, data_997];
                    ctx.invokeLocalMethodBefore("sendMulticast", argsNames_1003, argsValues_1004);
                    localApi.sendMulticast(uids_996, data_997);
                    ctx.invokeLocalMethodAfter("sendMulticast", null, argsNames_1003, argsValues_1004);
                    break;
                    
                }
                case 39:  {
                    const reqId_1005 = dataIn.readInt();
                    let msg_1006: Message;
                    msg_1006 = Message.META.deserialize(ctx, dataIn);
                    const argsNames_1007: string[] = ["msg"];
                    const argsValues_1008: any[] = [msg_1006];
                    ctx.invokeLocalMethodBefore("sendMessageWithResult", argsNames_1007, argsValues_1008);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.sendMessageWithResult(msg_1006);
                    ctx.invokeLocalMethodAfter("sendMessageWithResult", resultFuture, argsNames_1007, argsValues_1008);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1005);
                        
                    }
                    );
                    break;
                    
                }
                case 8:  {
                    const reqId_1009 = dataIn.readInt();
                    let owner_1010: UUID;
                    let uids_1011: UUID[];
                    owner_1010 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1013 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1011 = new Array<UUID>(len_1013);
                    for (let idx_1012 = 0;
                    idx_1012 < len_1013;
                    idx_1012++)  {
                        uids_1011[idx_1012] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1014: string[] = ["owner", "uids"];
                    const argsValues_1015: any[] = [owner_1010, uids_1011];
                    ctx.invokeLocalMethodBefore("createAccessGroup", argsNames_1014, argsValues_1015);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.createAccessGroup(owner_1010, uids_1011);
                    ctx.invokeLocalMethodAfter("createAccessGroup", resultFuture, argsNames_1014, argsValues_1015);
                    resultFuture.to((v_1017: bigint) =>  {
                        const data_1016 = new DataInOut();
                        data_1016.writeLong(v_1017);
                        ctx.sendResultToRemote(reqId_1009, data_1016.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_1018 = dataIn.readInt();
                    let groupId_1019: bigint;
                    let uid_1020: UUID;
                    groupId_1019 = dataIn.readLong();
                    uid_1020 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1021: string[] = ["groupId", "uid"];
                    const argsValues_1022: any[] = [groupId_1019, uid_1020];
                    ctx.invokeLocalMethodBefore("addToAccessGroup", argsNames_1021, argsValues_1022);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.addToAccessGroup(groupId_1019, uid_1020);
                    ctx.invokeLocalMethodAfter("addToAccessGroup", resultFuture, argsNames_1021, argsValues_1022);
                    resultFuture.to((v_1024: boolean) =>  {
                        const data_1023 = new DataInOut();
                        data_1023.writeBoolean(v_1024);
                        ctx.sendResultToRemote(reqId_1018, data_1023.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_1025 = dataIn.readInt();
                    let groupId_1026: bigint;
                    let uid_1027: UUID;
                    groupId_1026 = dataIn.readLong();
                    uid_1027 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1028: string[] = ["groupId", "uid"];
                    const argsValues_1029: any[] = [groupId_1026, uid_1027];
                    ctx.invokeLocalMethodBefore("removeFromAccessGroup", argsNames_1028, argsValues_1029);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.removeFromAccessGroup(groupId_1026, uid_1027);
                    ctx.invokeLocalMethodAfter("removeFromAccessGroup", resultFuture, argsNames_1028, argsValues_1029);
                    resultFuture.to((v_1031: boolean) =>  {
                        const data_1030 = new DataInOut();
                        data_1030.writeBoolean(v_1031);
                        ctx.sendResultToRemote(reqId_1025, data_1030.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_1032 = dataIn.readInt();
                    let uid_1033: UUID;
                    uid_1033 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1034: string[] = ["uid"];
                    const argsValues_1035: any[] = [uid_1033];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage", argsNames_1034, argsValues_1035);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.checkAccessForSendMessage(uid_1033);
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage", resultFuture, argsNames_1034, argsValues_1035);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1032);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    let sid_1037: number[];
                    const len_1039 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    sid_1037 = new Array<number>(len_1039);
                    for (let idx_1038 = 0;
                    idx_1038 < len_1039;
                    idx_1038++)  {
                        sid_1037[idx_1038] = dataIn.readShort();
                        
                    }
                    const argsNames_1040: string[] = ["sid"];
                    const argsValues_1041: any[] = [sid_1037];
                    ctx.invokeLocalMethodBefore("resolverServers", argsNames_1040, argsValues_1041);
                    localApi.resolverServers(sid_1037);
                    ctx.invokeLocalMethodAfter("resolverServers", null, argsNames_1040, argsValues_1041);
                    break;
                    
                }
                case 13:  {
                    let uids_1043: UUID[];
                    const len_1045 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1043 = new Array<UUID>(len_1045);
                    for (let idx_1044 = 0;
                    idx_1044 < len_1045;
                    idx_1044++)  {
                        uids_1043[idx_1044] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1046: string[] = ["uids"];
                    const argsValues_1047: any[] = [uids_1043];
                    ctx.invokeLocalMethodBefore("resolveClouds", argsNames_1046, argsValues_1047);
                    localApi.resolveClouds(uids_1043);
                    ctx.invokeLocalMethodAfter("resolveClouds", null, argsNames_1046, argsValues_1047);
                    break;
                    
                }
                case 38:  {
                    let configs_1049: AppliedConfig[];
                    const len_1051 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    configs_1049 = new Array<AppliedConfig>(len_1051);
                    for (let idx_1050 = 0;
                    idx_1050 < len_1051;
                    idx_1050++)  {
                        configs_1049[idx_1050] = AppliedConfig.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1052: string[] = ["configs"];
                    const argsValues_1053: any[] = [configs_1049];
                    ctx.invokeLocalMethodBefore("reportAppliedConfig", argsNames_1052, argsValues_1053);
                    localApi.reportAppliedConfig(configs_1049);
                    ctx.invokeLocalMethodAfter("reportAppliedConfig", null, argsNames_1052, argsValues_1053);
                    break;
                    
                }
                case 14:  {
                    const reqId_1054 = dataIn.readInt();
                    let uid_1055: UUID;
                    uid_1055 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1056: string[] = ["uid"];
                    const argsValues_1057: any[] = [uid_1055];
                    ctx.invokeLocalMethodBefore("getAccessGroups", argsNames_1056, argsValues_1057);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAccessGroups(uid_1055);
                    ctx.invokeLocalMethodAfter("getAccessGroups", resultFuture, argsNames_1056, argsValues_1057);
                    resultFuture.to((v_1059: bigint[]) =>  {
                        const data_1058 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1058, v_1059.length);
                        for (const el_1060 of v_1059)  {
                            data_1058.writeLong(el_1060);
                            
                        }
                        ctx.sendResultToRemote(reqId_1054, data_1058.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_1061 = dataIn.readInt();
                    let groupId_1062: bigint;
                    groupId_1062 = dataIn.readLong();
                    const argsNames_1063: string[] = ["groupId"];
                    const argsValues_1064: any[] = [groupId_1062];
                    ctx.invokeLocalMethodBefore("getAccessGroup", argsNames_1063, argsValues_1064);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAccessGroup(groupId_1062);
                    ctx.invokeLocalMethodAfter("getAccessGroup", resultFuture, argsNames_1063, argsValues_1064);
                    resultFuture.to((v_1066: AccessGroup) =>  {
                        const data_1065 = new DataInOut();
                        AccessGroup.META.serialize(ctx, v_1066, data_1065);
                        ctx.sendResultToRemote(reqId_1061, data_1065.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 16:  {
                    const reqId_1067 = dataIn.readInt();
                    let uid_1068: UUID;
                    uid_1068 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1069: string[] = ["uid"];
                    const argsValues_1070: any[] = [uid_1068];
                    ctx.invokeLocalMethodBefore("getAllAccessedClients", argsNames_1069, argsValues_1070);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAllAccessedClients(uid_1068);
                    ctx.invokeLocalMethodAfter("getAllAccessedClients", resultFuture, argsNames_1069, argsValues_1070);
                    resultFuture.to((v_1072: UUID[]) =>  {
                        const data_1071 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1071, v_1072.length);
                        for (const el_1073 of v_1072)  {
                            FastMeta.META_UUID.serialize(ctx, el_1073, data_1071);
                            
                        }
                        ctx.sendResultToRemote(reqId_1067, data_1071.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 17:  {
                    const reqId_1074 = dataIn.readInt();
                    let uid1_1075: UUID;
                    let uid2_1076: UUID;
                    uid1_1075 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid2_1076 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1077: string[] = ["uid1", "uid2"];
                    const argsValues_1078: any[] = [uid1_1075, uid2_1076];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage2", argsNames_1077, argsValues_1078);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.checkAccessForSendMessage2(uid1_1075, uid2_1076);
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage2", resultFuture, argsNames_1077, argsValues_1078);
                    resultFuture.to((v_1080: boolean) =>  {
                        const data_1079 = new DataInOut();
                        data_1079.writeBoolean(v_1080);
                        ctx.sendResultToRemote(reqId_1074, data_1079.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 18:  {
                    let telemetry_1082: Telemetry;
                    telemetry_1082 = Telemetry.META.deserialize(ctx, dataIn);
                    const argsNames_1083: string[] = ["telemetry"];
                    const argsValues_1084: any[] = [telemetry_1082];
                    ctx.invokeLocalMethodBefore("sendTelemetry", argsNames_1083, argsValues_1084);
                    localApi.sendTelemetry(telemetry_1082);
                    ctx.invokeLocalMethodAfter("sendTelemetry", null, argsNames_1083, argsValues_1084);
                    break;
                    
                }
                case 19:  {
                    let uids_1086: UUID[];
                    const len_1088 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1086 = new Array<UUID>(len_1088);
                    for (let idx_1087 = 0;
                    idx_1087 < len_1088;
                    idx_1087++)  {
                        uids_1086[idx_1087] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1089: string[] = ["uids"];
                    const argsValues_1090: any[] = [uids_1086];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsForClients", argsNames_1089, argsValues_1090);
                    localApi.requestAccessGroupsForClients(uids_1086);
                    ctx.invokeLocalMethodAfter("requestAccessGroupsForClients", null, argsNames_1089, argsValues_1090);
                    break;
                    
                }
                case 20:  {
                    let ids_1092: bigint[];
                    const len_1094 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    ids_1092 = new Array<bigint>(len_1094);
                    for (let idx_1093 = 0;
                    idx_1093 < len_1094;
                    idx_1093++)  {
                        ids_1092[idx_1093] = dataIn.readLong();
                        
                    }
                    const argsNames_1095: string[] = ["ids"];
                    const argsValues_1096: any[] = [ids_1092];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsItems", argsNames_1095, argsValues_1096);
                    localApi.requestAccessGroupsItems(ids_1092);
                    ctx.invokeLocalMethodAfter("requestAccessGroupsItems", null, argsNames_1095, argsValues_1096);
                    break;
                    
                }
                case 22:  {
                    let uid_1098: UUID;
                    let groups_1099: bigint[];
                    uid_1098 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1101 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1099 = new Array<bigint>(len_1101);
                    for (let idx_1100 = 0;
                    idx_1100 < len_1101;
                    idx_1100++)  {
                        groups_1099[idx_1100] = dataIn.readLong();
                        
                    }
                    const argsNames_1102: string[] = ["uid", "groups"];
                    const argsValues_1103: any[] = [uid_1098, groups_1099];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_1102, argsValues_1103);
                    localApi.sendAccessGroupForClient(uid_1098, groups_1099);
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_1102, argsValues_1103);
                    break;
                    
                }
                case 23:  {
                    let id_1105: bigint;
                    let groups_1106: UUID[];
                    id_1105 = dataIn.readLong();
                    const len_1108 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1106 = new Array<UUID>(len_1108);
                    for (let idx_1107 = 0;
                    idx_1107 < len_1108;
                    idx_1107++)  {
                        groups_1106[idx_1107] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1109: string[] = ["id", "groups"];
                    const argsValues_1110: any[] = [id_1105, groups_1106];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_1109, argsValues_1110);
                    localApi.addItemsToAccessGroup(id_1105, groups_1106);
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_1109, argsValues_1110);
                    break;
                    
                }
                case 24:  {
                    let id_1112: bigint;
                    let groups_1113: UUID[];
                    id_1112 = dataIn.readLong();
                    const len_1115 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1113 = new Array<UUID>(len_1115);
                    for (let idx_1114 = 0;
                    idx_1114 < len_1115;
                    idx_1114++)  {
                        groups_1113[idx_1114] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1116: string[] = ["id", "groups"];
                    const argsValues_1117: any[] = [id_1112, groups_1113];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_1116, argsValues_1117);
                    localApi.removeItemsFromAccessGroup(id_1112, groups_1113);
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_1116, argsValues_1117);
                    break;
                    
                }
                case 25:  {
                    let uid_1119: UUID;
                    let groups_1120: bigint[];
                    uid_1119 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1122 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1120 = new Array<bigint>(len_1122);
                    for (let idx_1121 = 0;
                    idx_1121 < len_1122;
                    idx_1121++)  {
                        groups_1120[idx_1121] = dataIn.readLong();
                        
                    }
                    const argsNames_1123: string[] = ["uid", "groups"];
                    const argsValues_1124: any[] = [uid_1119, groups_1120];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_1123, argsValues_1124);
                    localApi.addAccessGroupsToClient(uid_1119, groups_1120);
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_1123, argsValues_1124);
                    break;
                    
                }
                case 26:  {
                    let uid_1126: UUID;
                    let groups_1127: bigint[];
                    uid_1126 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1129 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1127 = new Array<bigint>(len_1129);
                    for (let idx_1128 = 0;
                    idx_1128 < len_1129;
                    idx_1128++)  {
                        groups_1127[idx_1128] = dataIn.readLong();
                        
                    }
                    const argsNames_1130: string[] = ["uid", "groups"];
                    const argsValues_1131: any[] = [uid_1126, groups_1127];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_1130, argsValues_1131);
                    localApi.removeAccessGroupsFromClient(uid_1126, groups_1127);
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_1130, argsValues_1131);
                    break;
                    
                }
                case 27:  {
                    let uids_1133: UUID[];
                    const len_1135 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1133 = new Array<UUID>(len_1135);
                    for (let idx_1134 = 0;
                    idx_1134 < len_1135;
                    idx_1134++)  {
                        uids_1133[idx_1134] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1136: string[] = ["uids"];
                    const argsValues_1137: any[] = [uids_1133];
                    ctx.invokeLocalMethodBefore("requestAllAccessedClients", argsNames_1136, argsValues_1137);
                    localApi.requestAllAccessedClients(uids_1133);
                    ctx.invokeLocalMethodAfter("requestAllAccessedClients", null, argsNames_1136, argsValues_1137);
                    break;
                    
                }
                case 28:  {
                    let requests_1139: AccessCheckPair[];
                    const len_1141 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    requests_1139 = new Array<AccessCheckPair>(len_1141);
                    for (let idx_1140 = 0;
                    idx_1140 < len_1141;
                    idx_1140++)  {
                        requests_1139[idx_1140] = AccessCheckPair.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1142: string[] = ["requests"];
                    const argsValues_1143: any[] = [requests_1139];
                    ctx.invokeLocalMethodBefore("requestAccessCheck", argsNames_1142, argsValues_1143);
                    localApi.requestAccessCheck(requests_1139);
                    ctx.invokeLocalMethodAfter("requestAccessCheck", null, argsNames_1142, argsValues_1143);
                    break;
                    
                }
                case 29:  {
                    const reqId_1144 = dataIn.readInt();
                    let uid_1145: UUID;
                    let fromTime_1146: bigint;
                    let toTime_1147: bigint;
                    let limit_1148: number;
                    uid_1145 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    fromTime_1146 = dataIn.readLong();
                    toTime_1147 = dataIn.readLong();
                    limit_1148 = dataIn.readInt();
                    const argsNames_1149: string[] = ["uid", "fromTime", "toTime", "limit"];
                    const argsValues_1150: any[] = [uid_1145, fromTime_1146, toTime_1147, limit_1148];
                    ctx.invokeLocalMethodBefore("getClientActivity", argsNames_1149, argsValues_1150);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getClientActivity(uid_1145, fromTime_1146, toTime_1147, limit_1148);
                    ctx.invokeLocalMethodAfter("getClientActivity", resultFuture, argsNames_1149, argsValues_1150);
                    resultFuture.to((v_1152: ClientActivity[]) =>  {
                        const data_1151 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1151, v_1152.length);
                        for (const el_1153 of v_1152)  {
                            ClientActivity.META.serialize(ctx, el_1153, data_1151);
                            
                        }
                        ctx.sendResultToRemote(reqId_1144, data_1151.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 30:  {
                    const reqId_1154 = dataIn.readInt();
                    let uid_1155: UUID;
                    let query_1156: string;
                    let limit_1157: number;
                    uid_1155 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    let stringBytes_1158: Uint8Array;
                    const len_1160 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1161 = dataIn.readBytes(len_1160);
                    stringBytes_1158 = bytes_1161;
                    query_1156 = new TextDecoder('utf-8').decode(stringBytes_1158);
                    limit_1157 = dataIn.readInt();
                    const argsNames_1162: string[] = ["uid", "query", "limit"];
                    const argsValues_1163: any[] = [uid_1155, query_1156, limit_1157];
                    ctx.invokeLocalMethodBefore("searchClientLogs", argsNames_1162, argsValues_1163);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.searchClientLogs(uid_1155, query_1156, limit_1157);
                    ctx.invokeLocalMethodAfter("searchClientLogs", resultFuture, argsNames_1162, argsValues_1163);
                    resultFuture.to((v_1165: ClientLogEntry[]) =>  {
                        const data_1164 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1164, v_1165.length);
                        for (const el_1166 of v_1165)  {
                            ClientLogEntry.META.serialize(ctx, el_1166, data_1164);
                            
                        }
                        ctx.sendResultToRemote(reqId_1154, data_1164.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 31:  {
                    const reqId_1167 = dataIn.readInt();
                    let uid_1168: UUID;
                    let limit_1169: number;
                    uid_1168 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    limit_1169 = dataIn.readInt();
                    const argsNames_1170: string[] = ["uid", "limit"];
                    const argsValues_1171: any[] = [uid_1168, limit_1169];
                    ctx.invokeLocalMethodBefore("getClientConnections", argsNames_1170, argsValues_1171);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getClientConnections(uid_1168, limit_1169);
                    ctx.invokeLocalMethodAfter("getClientConnections", resultFuture, argsNames_1170, argsValues_1171);
                    resultFuture.to((v_1173: ClientConnectionInfo[]) =>  {
                        const data_1172 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1172, v_1173.length);
                        for (const el_1174 of v_1173)  {
                            ClientConnectionInfo.META.serialize(ctx, el_1174, data_1172);
                            
                        }
                        ctx.sendResultToRemote(reqId_1167, data_1172.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 32:  {
                    const reqId_1175 = dataIn.readInt();
                    let uid_1176: UUID;
                    let fromTime_1177: bigint;
                    let toTime_1178: bigint;
                    let limit_1179: number;
                    uid_1176 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    fromTime_1177 = dataIn.readLong();
                    toTime_1178 = dataIn.readLong();
                    limit_1179 = dataIn.readInt();
                    const argsNames_1180: string[] = ["uid", "fromTime", "toTime", "limit"];
                    const argsValues_1181: any[] = [uid_1176, fromTime_1177, toTime_1178, limit_1179];
                    ctx.invokeLocalMethodBefore("getClientMessages", argsNames_1180, argsValues_1181);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getClientMessages(uid_1176, fromTime_1177, toTime_1178, limit_1179);
                    ctx.invokeLocalMethodAfter("getClientMessages", resultFuture, argsNames_1180, argsValues_1181);
                    resultFuture.to((v_1183: MessageInfo[]) =>  {
                        const data_1182 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1182, v_1183.length);
                        for (const el_1184 of v_1183)  {
                            MessageInfo.META.serialize(ctx, el_1184, data_1182);
                            
                        }
                        ctx.sendResultToRemote(reqId_1175, data_1182.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 33:  {
                    let delayMillis_1186: bigint;
                    delayMillis_1186 = dataIn.readLong();
                    const argsNames_1187: string[] = ["delayMillis"];
                    const argsValues_1188: any[] = [delayMillis_1186];
                    ctx.invokeLocalMethodBefore("setNextReadDelay", argsNames_1187, argsValues_1188);
                    localApi.setNextReadDelay(delayMillis_1186);
                    ctx.invokeLocalMethodAfter("setNextReadDelay", null, argsNames_1187, argsValues_1188);
                    break;
                    
                }
                case 34:  {
                    const reqId_1189 = dataIn.readInt();
                    let uid_1190: UUID;
                    uid_1190 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1191: string[] = ["uid"];
                    const argsValues_1192: any[] = [uid_1190];
                    ctx.invokeLocalMethodBefore("getUap", argsNames_1191, argsValues_1192);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getUap(uid_1190);
                    ctx.invokeLocalMethodAfter("getUap", resultFuture, argsNames_1191, argsValues_1192);
                    resultFuture.to((v_1194: Uap) =>  {
                        const data_1193 = new DataInOut();
                        Uap.META.serialize(ctx, v_1194, data_1193);
                        ctx.sendResultToRemote(reqId_1189, data_1193.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 36:  {
                    const argsNames_1196: string[] = [];
                    const argsValues_1197: any[] = [];
                    ctx.invokeLocalMethodBefore("pullMessages", argsNames_1196, argsValues_1197);
                    localApi.pullMessages();
                    ctx.invokeLocalMethodAfter("pullMessages", null, argsNames_1196, argsValues_1197);
                    break;
                    
                }
                default: throw new Error(`Unknown command ID: $ {
                    commandId
                }
                `);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: AuthorizedApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1198: MetaContext): AuthorizedApiRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1198.flush();
                
            }
            , getFastMetaContext: () => sCtx_1198, backId: (id: number): void =>  {
                const dataOut_1200 = new DataInOut();
                dataOut_1200.writeByte(3);
                const argsNames_1202: string[] = ["id"];
                const argsValues_1203: any[] = [id];
                sCtx_1198.invokeRemoteMethodAfter("backId", null, argsNames_1202, argsValues_1203);
                dataOut_1200.writeByte(id);
                sCtx_1198.sendToRemote(dataOut_1200.toArray());
                
            }
            , ping: (nextConnectMsDuration: bigint, rxWindowMs: bigint): AFuture =>  {
                const dataOut_1205 = new DataInOut();
                dataOut_1205.writeByte(4);
                const argsNames_1207: string[] = ["nextConnectMsDuration", "rxWindowMs"];
                const argsValues_1208: any[] = [nextConnectMsDuration, rxWindowMs];
                const result_1206 = AFuture.make();
                sCtx_1198.invokeRemoteMethodAfter("ping", result_1206, argsNames_1207, argsValues_1208);
                const reqId_1204 = sCtx_1198.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1206 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1206.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1205.writeInt(reqId_1204);
                dataOut_1205.writeLong(nextConnectMsDuration);
                dataOut_1205.writeLong(rxWindowMs);
                sCtx_1198.sendToRemote(dataOut_1205.toArray());
                return result_1206;
                
            }
            , client: (uid: UUID, stream: ClientApiStream): void =>  {
                const dataOut_1210 = new DataInOut();
                dataOut_1210.writeByte(5);
                const argsNames_1212: string[] = ["uid", "stream"];
                const argsValues_1213: any[] = [uid, stream];
                sCtx_1198.invokeRemoteMethodAfter("client", null, argsNames_1212, argsValues_1213);
                FastMeta.META_UUID.serialize(sCtx_1198, uid, dataOut_1210);
                ClientApiStream.META.serialize(sCtx_1198, stream, dataOut_1210);
                sCtx_1198.sendToRemote(dataOut_1210.toArray());
                
            }
            , sendMessage: (msg: Message): void =>  {
                const dataOut_1215 = new DataInOut();
                dataOut_1215.writeByte(6);
                const argsNames_1217: string[] = ["msg"];
                const argsValues_1218: any[] = [msg];
                sCtx_1198.invokeRemoteMethodAfter("sendMessage", null, argsNames_1217, argsValues_1218);
                Message.META.serialize(sCtx_1198, msg, dataOut_1215);
                sCtx_1198.sendToRemote(dataOut_1215.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_1220 = new DataInOut();
                dataOut_1220.writeByte(7);
                const argsNames_1222: string[] = ["msg"];
                const argsValues_1223: any[] = [msg];
                sCtx_1198.invokeRemoteMethodAfter("sendMessages", null, argsNames_1222, argsValues_1223);
                SerializerPackNumber.INSTANCE.put(dataOut_1220, msg.length);
                for (const el_1224 of msg)  {
                    Message.META.serialize(sCtx_1198, el_1224, dataOut_1220);
                    
                }
                sCtx_1198.sendToRemote(dataOut_1220.toArray());
                
            }
            , sendMulticast: (uids: UUID[], data: Uint8Array): void =>  {
                const dataOut_1226 = new DataInOut();
                dataOut_1226.writeByte(37);
                const argsNames_1228: string[] = ["uids", "data"];
                const argsValues_1229: any[] = [uids, data];
                sCtx_1198.invokeRemoteMethodAfter("sendMulticast", null, argsNames_1228, argsValues_1229);
                SerializerPackNumber.INSTANCE.put(dataOut_1226, uids.length);
                for (const el_1230 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1198, el_1230, dataOut_1226);
                    
                }
                SerializerPackNumber.INSTANCE.put(dataOut_1226, data.length);
                dataOut_1226.write(data);
                sCtx_1198.sendToRemote(dataOut_1226.toArray());
                
            }
            , sendMessageWithResult: (msg: Message): AFuture =>  {
                const dataOut_1233 = new DataInOut();
                dataOut_1233.writeByte(39);
                const argsNames_1235: string[] = ["msg"];
                const argsValues_1236: any[] = [msg];
                const result_1234 = AFuture.make();
                sCtx_1198.invokeRemoteMethodAfter("sendMessageWithResult", result_1234, argsNames_1235, argsValues_1236);
                const reqId_1232 = sCtx_1198.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1234 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1234.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1233.writeInt(reqId_1232);
                Message.META.serialize(sCtx_1198, msg, dataOut_1233);
                sCtx_1198.sendToRemote(dataOut_1233.toArray());
                return result_1234;
                
            }
            , createAccessGroup: (owner: UUID, uids: UUID[]): ARFuture<bigint> =>  {
                const dataOut_1238 = new DataInOut();
                dataOut_1238.writeByte(8);
                const argsNames_1240: string[] = ["owner", "uids"];
                const argsValues_1241: any[] = [owner, uids];
                const result_1239 = ARFuture.of<bigint>();
                sCtx_1198.invokeRemoteMethodAfter("createAccessGroup", result_1239, argsNames_1240, argsValues_1241);
                const reqId_1237 = sCtx_1198.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1239 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_1198, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1239.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1238.writeInt(reqId_1237);
                FastMeta.META_UUID.serialize(sCtx_1198, owner, dataOut_1238);
                SerializerPackNumber.INSTANCE.put(dataOut_1238, uids.length);
                for (const el_1242 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1198, el_1242, dataOut_1238);
                    
                }
                sCtx_1198.sendToRemote(dataOut_1238.toArray());
                return result_1239;
                
            }
            , addToAccessGroup: (groupId: bigint, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_1244 = new DataInOut();
                dataOut_1244.writeByte(9);
                const argsNames_1246: string[] = ["groupId", "uid"];
                const argsValues_1247: any[] = [groupId, uid];
                const result_1245 = ARFuture.of<boolean>();
                sCtx_1198.invokeRemoteMethodAfter("addToAccessGroup", result_1245, argsNames_1246, argsValues_1247);
                const reqId_1243 = sCtx_1198.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1245 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1198, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1245.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1244.writeInt(reqId_1243);
                dataOut_1244.writeLong(groupId);
                FastMeta.META_UUID.serialize(sCtx_1198, uid, dataOut_1244);
                sCtx_1198.sendToRemote(dataOut_1244.toArray());
                return result_1245;
                
            }
            , removeFromAccessGroup: (groupId: bigint, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_1249 = new DataInOut();
                dataOut_1249.writeByte(10);
                const argsNames_1251: string[] = ["groupId", "uid"];
                const argsValues_1252: any[] = [groupId, uid];
                const result_1250 = ARFuture.of<boolean>();
                sCtx_1198.invokeRemoteMethodAfter("removeFromAccessGroup", result_1250, argsNames_1251, argsValues_1252);
                const reqId_1248 = sCtx_1198.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1250 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1198, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1250.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1249.writeInt(reqId_1248);
                dataOut_1249.writeLong(groupId);
                FastMeta.META_UUID.serialize(sCtx_1198, uid, dataOut_1249);
                sCtx_1198.sendToRemote(dataOut_1249.toArray());
                return result_1250;
                
            }
            , checkAccessForSendMessage: (uid: UUID): AFuture =>  {
                const dataOut_1254 = new DataInOut();
                dataOut_1254.writeByte(11);
                const argsNames_1256: string[] = ["uid"];
                const argsValues_1257: any[] = [uid];
                const result_1255 = AFuture.make();
                sCtx_1198.invokeRemoteMethodAfter("checkAccessForSendMessage", result_1255, argsNames_1256, argsValues_1257);
                const reqId_1253 = sCtx_1198.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1255 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1255.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1254.writeInt(reqId_1253);
                FastMeta.META_UUID.serialize(sCtx_1198, uid, dataOut_1254);
                sCtx_1198.sendToRemote(dataOut_1254.toArray());
                return result_1255;
                
            }
            , resolverServers: (sid: number[]): void =>  {
                const dataOut_1259 = new DataInOut();
                dataOut_1259.writeByte(12);
                const argsNames_1261: string[] = ["sid"];
                const argsValues_1262: any[] = [sid];
                sCtx_1198.invokeRemoteMethodAfter("resolverServers", null, argsNames_1261, argsValues_1262);
                SerializerPackNumber.INSTANCE.put(dataOut_1259, sid.length);
                for (const el_1263 of sid)  {
                    dataOut_1259.writeShort(el_1263);
                    
                }
                sCtx_1198.sendToRemote(dataOut_1259.toArray());
                
            }
            , resolveClouds: (uids: UUID[]): void =>  {
                const dataOut_1265 = new DataInOut();
                dataOut_1265.writeByte(13);
                const argsNames_1267: string[] = ["uids"];
                const argsValues_1268: any[] = [uids];
                sCtx_1198.invokeRemoteMethodAfter("resolveClouds", null, argsNames_1267, argsValues_1268);
                SerializerPackNumber.INSTANCE.put(dataOut_1265, uids.length);
                for (const el_1269 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1198, el_1269, dataOut_1265);
                    
                }
                sCtx_1198.sendToRemote(dataOut_1265.toArray());
                
            }
            , reportAppliedConfig: (configs: AppliedConfig[]): void =>  {
                const dataOut_1271 = new DataInOut();
                dataOut_1271.writeByte(38);
                const argsNames_1273: string[] = ["configs"];
                const argsValues_1274: any[] = [configs];
                sCtx_1198.invokeRemoteMethodAfter("reportAppliedConfig", null, argsNames_1273, argsValues_1274);
                SerializerPackNumber.INSTANCE.put(dataOut_1271, configs.length);
                for (const el_1275 of configs)  {
                    AppliedConfig.META.serialize(sCtx_1198, el_1275, dataOut_1271);
                    
                }
                sCtx_1198.sendToRemote(dataOut_1271.toArray());
                
            }
            , getAccessGroups: (uid: UUID): ARFuture<bigint[]> =>  {
                const dataOut_1277 = new DataInOut();
                dataOut_1277.writeByte(14);
                const argsNames_1279: string[] = ["uid"];
                const argsValues_1280: any[] = [uid];
                const result_1278 = ARFuture.of<bigint[]>();
                sCtx_1198.invokeRemoteMethodAfter("getAccessGroups", result_1278, argsNames_1279, argsValues_1280);
                const reqId_1276 = sCtx_1198.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1278 as ARFuture<bigint[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_LONG).deserialize(sCtx_1198, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1278.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1277.writeInt(reqId_1276);
                FastMeta.META_UUID.serialize(sCtx_1198, uid, dataOut_1277);
                sCtx_1198.sendToRemote(dataOut_1277.toArray());
                return result_1278;
                
            }
            , getAccessGroup: (groupId: bigint): ARFuture<AccessGroup> =>  {
                const dataOut_1282 = new DataInOut();
                dataOut_1282.writeByte(15);
                const argsNames_1284: string[] = ["groupId"];
                const argsValues_1285: any[] = [groupId];
                const result_1283 = ARFuture.of<AccessGroup>();
                sCtx_1198.invokeRemoteMethodAfter("getAccessGroup", result_1283, argsNames_1284, argsValues_1285);
                const reqId_1281 = sCtx_1198.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1283 as ARFuture<AccessGroup>).tryDone(AccessGroup.META.deserialize(sCtx_1198, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1283.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1282.writeInt(reqId_1281);
                dataOut_1282.writeLong(groupId);
                sCtx_1198.sendToRemote(dataOut_1282.toArray());
                return result_1283;
                
            }
            , getAllAccessedClients: (uid: UUID): ARFuture<UUID[]> =>  {
                const dataOut_1287 = new DataInOut();
                dataOut_1287.writeByte(16);
                const argsNames_1289: string[] = ["uid"];
                const argsValues_1290: any[] = [uid];
                const result_1288 = ARFuture.of<UUID[]>();
                sCtx_1198.invokeRemoteMethodAfter("getAllAccessedClients", result_1288, argsNames_1289, argsValues_1290);
                const reqId_1286 = sCtx_1198.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1288 as ARFuture<UUID[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_UUID).deserialize(sCtx_1198, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1288.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1287.writeInt(reqId_1286);
                FastMeta.META_UUID.serialize(sCtx_1198, uid, dataOut_1287);
                sCtx_1198.sendToRemote(dataOut_1287.toArray());
                return result_1288;
                
            }
            , checkAccessForSendMessage2: (uid1: UUID, uid2: UUID): ARFuture<boolean> =>  {
                const dataOut_1292 = new DataInOut();
                dataOut_1292.writeByte(17);
                const argsNames_1294: string[] = ["uid1", "uid2"];
                const argsValues_1295: any[] = [uid1, uid2];
                const result_1293 = ARFuture.of<boolean>();
                sCtx_1198.invokeRemoteMethodAfter("checkAccessForSendMessage2", result_1293, argsNames_1294, argsValues_1295);
                const reqId_1291 = sCtx_1198.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1293 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1198, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1293.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1292.writeInt(reqId_1291);
                FastMeta.META_UUID.serialize(sCtx_1198, uid1, dataOut_1292);
                FastMeta.META_UUID.serialize(sCtx_1198, uid2, dataOut_1292);
                sCtx_1198.sendToRemote(dataOut_1292.toArray());
                return result_1293;
                
            }
            , sendTelemetry: (telemetry: Telemetry): void =>  {
                const dataOut_1297 = new DataInOut();
                dataOut_1297.writeByte(18);
                const argsNames_1299: string[] = ["telemetry"];
                const argsValues_1300: any[] = [telemetry];
                sCtx_1198.invokeRemoteMethodAfter("sendTelemetry", null, argsNames_1299, argsValues_1300);
                Telemetry.META.serialize(sCtx_1198, telemetry, dataOut_1297);
                sCtx_1198.sendToRemote(dataOut_1297.toArray());
                
            }
            , requestAccessGroupsForClients: (uids: UUID[]): void =>  {
                const dataOut_1302 = new DataInOut();
                dataOut_1302.writeByte(19);
                const argsNames_1304: string[] = ["uids"];
                const argsValues_1305: any[] = [uids];
                sCtx_1198.invokeRemoteMethodAfter("requestAccessGroupsForClients", null, argsNames_1304, argsValues_1305);
                SerializerPackNumber.INSTANCE.put(dataOut_1302, uids.length);
                for (const el_1306 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1198, el_1306, dataOut_1302);
                    
                }
                sCtx_1198.sendToRemote(dataOut_1302.toArray());
                
            }
            , requestAccessGroupsItems: (ids: bigint[]): void =>  {
                const dataOut_1308 = new DataInOut();
                dataOut_1308.writeByte(20);
                const argsNames_1310: string[] = ["ids"];
                const argsValues_1311: any[] = [ids];
                sCtx_1198.invokeRemoteMethodAfter("requestAccessGroupsItems", null, argsNames_1310, argsValues_1311);
                SerializerPackNumber.INSTANCE.put(dataOut_1308, ids.length);
                for (const el_1312 of ids)  {
                    dataOut_1308.writeLong(el_1312);
                    
                }
                sCtx_1198.sendToRemote(dataOut_1308.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_1314 = new DataInOut();
                dataOut_1314.writeByte(22);
                const argsNames_1316: string[] = ["uid", "groups"];
                const argsValues_1317: any[] = [uid, groups];
                sCtx_1198.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_1316, argsValues_1317);
                FastMeta.META_UUID.serialize(sCtx_1198, uid, dataOut_1314);
                SerializerPackNumber.INSTANCE.put(dataOut_1314, groups.length);
                for (const el_1318 of groups)  {
                    dataOut_1314.writeLong(el_1318);
                    
                }
                sCtx_1198.sendToRemote(dataOut_1314.toArray());
                
            }
            , addItemsToAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_1320 = new DataInOut();
                dataOut_1320.writeByte(23);
                const argsNames_1322: string[] = ["id", "groups"];
                const argsValues_1323: any[] = [id, groups];
                sCtx_1198.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_1322, argsValues_1323);
                dataOut_1320.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_1320, groups.length);
                for (const el_1324 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1198, el_1324, dataOut_1320);
                    
                }
                sCtx_1198.sendToRemote(dataOut_1320.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_1326 = new DataInOut();
                dataOut_1326.writeByte(24);
                const argsNames_1328: string[] = ["id", "groups"];
                const argsValues_1329: any[] = [id, groups];
                sCtx_1198.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_1328, argsValues_1329);
                dataOut_1326.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_1326, groups.length);
                for (const el_1330 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1198, el_1330, dataOut_1326);
                    
                }
                sCtx_1198.sendToRemote(dataOut_1326.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_1332 = new DataInOut();
                dataOut_1332.writeByte(25);
                const argsNames_1334: string[] = ["uid", "groups"];
                const argsValues_1335: any[] = [uid, groups];
                sCtx_1198.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_1334, argsValues_1335);
                FastMeta.META_UUID.serialize(sCtx_1198, uid, dataOut_1332);
                SerializerPackNumber.INSTANCE.put(dataOut_1332, groups.length);
                for (const el_1336 of groups)  {
                    dataOut_1332.writeLong(el_1336);
                    
                }
                sCtx_1198.sendToRemote(dataOut_1332.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_1338 = new DataInOut();
                dataOut_1338.writeByte(26);
                const argsNames_1340: string[] = ["uid", "groups"];
                const argsValues_1341: any[] = [uid, groups];
                sCtx_1198.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_1340, argsValues_1341);
                FastMeta.META_UUID.serialize(sCtx_1198, uid, dataOut_1338);
                SerializerPackNumber.INSTANCE.put(dataOut_1338, groups.length);
                for (const el_1342 of groups)  {
                    dataOut_1338.writeLong(el_1342);
                    
                }
                sCtx_1198.sendToRemote(dataOut_1338.toArray());
                
            }
            , requestAllAccessedClients: (uids: UUID[]): void =>  {
                const dataOut_1344 = new DataInOut();
                dataOut_1344.writeByte(27);
                const argsNames_1346: string[] = ["uids"];
                const argsValues_1347: any[] = [uids];
                sCtx_1198.invokeRemoteMethodAfter("requestAllAccessedClients", null, argsNames_1346, argsValues_1347);
                SerializerPackNumber.INSTANCE.put(dataOut_1344, uids.length);
                for (const el_1348 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1198, el_1348, dataOut_1344);
                    
                }
                sCtx_1198.sendToRemote(dataOut_1344.toArray());
                
            }
            , requestAccessCheck: (requests: AccessCheckPair[]): void =>  {
                const dataOut_1350 = new DataInOut();
                dataOut_1350.writeByte(28);
                const argsNames_1352: string[] = ["requests"];
                const argsValues_1353: any[] = [requests];
                sCtx_1198.invokeRemoteMethodAfter("requestAccessCheck", null, argsNames_1352, argsValues_1353);
                SerializerPackNumber.INSTANCE.put(dataOut_1350, requests.length);
                for (const el_1354 of requests)  {
                    AccessCheckPair.META.serialize(sCtx_1198, el_1354, dataOut_1350);
                    
                }
                sCtx_1198.sendToRemote(dataOut_1350.toArray());
                
            }
            , getClientActivity: (uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<ClientActivity[]> =>  {
                const dataOut_1356 = new DataInOut();
                dataOut_1356.writeByte(29);
                const argsNames_1358: string[] = ["uid", "fromTime", "toTime", "limit"];
                const argsValues_1359: any[] = [uid, fromTime, toTime, limit];
                const result_1357 = ARFuture.of<ClientActivity[]>();
                sCtx_1198.invokeRemoteMethodAfter("getClientActivity", result_1357, argsNames_1358, argsValues_1359);
                const reqId_1355 = sCtx_1198.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1357 as ARFuture<ClientActivity[]>).tryDone(FastMeta.getMetaArray(ClientActivity.META).deserialize(sCtx_1198, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1357.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1356.writeInt(reqId_1355);
                FastMeta.META_UUID.serialize(sCtx_1198, uid, dataOut_1356);
                dataOut_1356.writeLong(fromTime);
                dataOut_1356.writeLong(toTime);
                dataOut_1356.writeInt(limit);
                sCtx_1198.sendToRemote(dataOut_1356.toArray());
                return result_1357;
                
            }
            , searchClientLogs: (uid: UUID, query: string, limit: number): ARFuture<ClientLogEntry[]> =>  {
                const dataOut_1361 = new DataInOut();
                dataOut_1361.writeByte(30);
                const argsNames_1363: string[] = ["uid", "query", "limit"];
                const argsValues_1364: any[] = [uid, query, limit];
                const result_1362 = ARFuture.of<ClientLogEntry[]>();
                sCtx_1198.invokeRemoteMethodAfter("searchClientLogs", result_1362, argsNames_1363, argsValues_1364);
                const reqId_1360 = sCtx_1198.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1362 as ARFuture<ClientLogEntry[]>).tryDone(FastMeta.getMetaArray(ClientLogEntry.META).deserialize(sCtx_1198, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1362.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1361.writeInt(reqId_1360);
                FastMeta.META_UUID.serialize(sCtx_1198, uid, dataOut_1361);
                const stringBytes_1365 = new TextEncoder().encode(query);
                SerializerPackNumber.INSTANCE.put(dataOut_1361, stringBytes_1365.length);
                dataOut_1361.write(stringBytes_1365);
                dataOut_1361.writeInt(limit);
                sCtx_1198.sendToRemote(dataOut_1361.toArray());
                return result_1362;
                
            }
            , getClientConnections: (uid: UUID, limit: number): ARFuture<ClientConnectionInfo[]> =>  {
                const dataOut_1368 = new DataInOut();
                dataOut_1368.writeByte(31);
                const argsNames_1370: string[] = ["uid", "limit"];
                const argsValues_1371: any[] = [uid, limit];
                const result_1369 = ARFuture.of<ClientConnectionInfo[]>();
                sCtx_1198.invokeRemoteMethodAfter("getClientConnections", result_1369, argsNames_1370, argsValues_1371);
                const reqId_1367 = sCtx_1198.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1369 as ARFuture<ClientConnectionInfo[]>).tryDone(FastMeta.getMetaArray(ClientConnectionInfo.META).deserialize(sCtx_1198, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1369.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1368.writeInt(reqId_1367);
                FastMeta.META_UUID.serialize(sCtx_1198, uid, dataOut_1368);
                dataOut_1368.writeInt(limit);
                sCtx_1198.sendToRemote(dataOut_1368.toArray());
                return result_1369;
                
            }
            , getClientMessages: (uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<MessageInfo[]> =>  {
                const dataOut_1373 = new DataInOut();
                dataOut_1373.writeByte(32);
                const argsNames_1375: string[] = ["uid", "fromTime", "toTime", "limit"];
                const argsValues_1376: any[] = [uid, fromTime, toTime, limit];
                const result_1374 = ARFuture.of<MessageInfo[]>();
                sCtx_1198.invokeRemoteMethodAfter("getClientMessages", result_1374, argsNames_1375, argsValues_1376);
                const reqId_1372 = sCtx_1198.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1374 as ARFuture<MessageInfo[]>).tryDone(FastMeta.getMetaArray(MessageInfo.META).deserialize(sCtx_1198, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1374.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1373.writeInt(reqId_1372);
                FastMeta.META_UUID.serialize(sCtx_1198, uid, dataOut_1373);
                dataOut_1373.writeLong(fromTime);
                dataOut_1373.writeLong(toTime);
                dataOut_1373.writeInt(limit);
                sCtx_1198.sendToRemote(dataOut_1373.toArray());
                return result_1374;
                
            }
            , setNextReadDelay: (delayMillis: bigint): void =>  {
                const dataOut_1378 = new DataInOut();
                dataOut_1378.writeByte(33);
                const argsNames_1380: string[] = ["delayMillis"];
                const argsValues_1381: any[] = [delayMillis];
                sCtx_1198.invokeRemoteMethodAfter("setNextReadDelay", null, argsNames_1380, argsValues_1381);
                dataOut_1378.writeLong(delayMillis);
                sCtx_1198.sendToRemote(dataOut_1378.toArray());
                
            }
            , getUap: (uid: UUID): ARFuture<Uap> =>  {
                const dataOut_1383 = new DataInOut();
                dataOut_1383.writeByte(34);
                const argsNames_1385: string[] = ["uid"];
                const argsValues_1386: any[] = [uid];
                const result_1384 = ARFuture.of<Uap>();
                sCtx_1198.invokeRemoteMethodAfter("getUap", result_1384, argsNames_1385, argsValues_1386);
                const reqId_1382 = sCtx_1198.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1384 as ARFuture<Uap>).tryDone(Uap.META.deserialize(sCtx_1198, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1384.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1383.writeInt(reqId_1382);
                FastMeta.META_UUID.serialize(sCtx_1198, uid, dataOut_1383);
                sCtx_1198.sendToRemote(dataOut_1383.toArray());
                return result_1384;
                
            }
            , pullMessages: (): void =>  {
                const dataOut_1388 = new DataInOut();
                dataOut_1388.writeByte(36);
                const argsNames_1390: string[] = [];
                const argsValues_1391: any[] = [];
                sCtx_1198.invokeRemoteMethodAfter("pullMessages", null, argsNames_1390, argsValues_1391);
                sCtx_1198.sendToRemote(dataOut_1388.toArray());
                
            }
            , openClient(uid: UUID, factory: (api: ServerApiByUidRemote) => any, converter: BytesConverter, ...keys: any[]): ServerApiByUidRemote  {
                return sCtx_1198.findContext(ctx =>  {
                    ctx.onFlushData(data => this.client(uid, ClientApiStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((ServerApiByUid as any).META));
                    
                }
                , ...keys).makeRemote((ServerApiByUid as any).META) as ServerApiByUidRemote;
                
            }
            , 
        };
        return remoteApiImpl as AuthorizedApiRemote;
        
    }
    isValidCommand(commandId: number): boolean  {
        switch(commandId)  {
            case 0: // META_RESULT
            case 1: // META_ERROR
            case 3: // backId
            case 4: // ping
            case 5: // client
            case 6: // sendMessage
            case 7: // sendMessages
            case 37: // sendMulticast
            case 39: // sendMessageWithResult
            case 8: // createAccessGroup
            case 9: // addToAccessGroup
            case 10: // removeFromAccessGroup
            case 11: // checkAccessForSendMessage
            case 12: // resolverServers
            case 13: // resolveClouds
            case 38: // reportAppliedConfig
            case 14: // getAccessGroups
            case 15: // getAccessGroup
            case 16: // getAllAccessedClients
            case 17: // checkAccessForSendMessage2
            case 18: // sendTelemetry
            case 19: // requestAccessGroupsForClients
            case 20: // requestAccessGroupsItems
            case 22: // sendAccessGroupForClient
            case 23: // addItemsToAccessGroup
            case 24: // removeItemsFromAccessGroup
            case 25: // addAccessGroupsToClient
            case 26: // removeAccessGroupsFromClient
            case 27: // requestAllAccessedClients
            case 28: // requestAccessCheck
            case 29: // getClientActivity
            case 30: // searchClientLogs
            case 31: // getClientConnections
            case 32: // getClientMessages
            case 33: // setNextReadDelay
            case 34: // getUap
            case 36: // pullMessages
            return true;
            default: return false;
            
        }
        
    }
    
}
export class LoginApiMetaImpl implements FastMetaApi<LoginApi, LoginApiRemote>  {
    makeLocal_fromDataIn(ctx: MetaContext, dataIn: DataIn, localApi: LoginApi): void  {
        while(dataIn.isReadable())  {
            const commandId = dataIn.readUByte();
            switch(commandId)  {
                case 0:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onDone(dataIn);
                    break;
                    
                }
                case 1:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onError(dataIn);
                    break;
                    
                }
                case 3:  {
                    const reqId_1392 = dataIn.readInt();
                    const argsNames_1393: string[] = [];
                    const argsValues_1394: any[] = [];
                    ctx.invokeLocalMethodBefore("getTimeUTC", argsNames_1393, argsValues_1394);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getTimeUTC();
                    ctx.invokeLocalMethodAfter("getTimeUTC", resultFuture, argsNames_1393, argsValues_1394);
                    resultFuture.to((v_1396: bigint) =>  {
                        const data_1395 = new DataInOut();
                        data_1395.writeLong(v_1396);
                        ctx.sendResultToRemote(reqId_1392, data_1395.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let uid_1398: UUID;
                    let data_1399: LoginStream;
                    uid_1398 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_1399 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsNames_1400: string[] = ["uid", "data"];
                    const argsValues_1401: any[] = [uid_1398, data_1399];
                    ctx.invokeLocalMethodBefore("loginByUID", argsNames_1400, argsValues_1401);
                    localApi.loginByUID(uid_1398, data_1399);
                    ctx.invokeLocalMethodAfter("loginByUID", null, argsNames_1400, argsValues_1401);
                    break;
                    
                }
                case 5:  {
                    let alias_1403: UUID;
                    let data_1404: LoginStream;
                    alias_1403 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_1404 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsNames_1405: string[] = ["alias", "data"];
                    const argsValues_1406: any[] = [alias_1403, data_1404];
                    ctx.invokeLocalMethodBefore("loginByAlias", argsNames_1405, argsValues_1406);
                    localApi.loginByAlias(alias_1403, data_1404);
                    ctx.invokeLocalMethodAfter("loginByAlias", null, argsNames_1405, argsValues_1406);
                    break;
                    
                }
                case 6:  {
                    const reqId_1407 = dataIn.readInt();
                    const argsNames_1408: string[] = [];
                    const argsValues_1409: any[] = [];
                    ctx.invokeLocalMethodBefore("getMyIp", argsNames_1408, argsValues_1409);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getMyIp();
                    ctx.invokeLocalMethodAfter("getMyIp", resultFuture, argsNames_1408, argsValues_1409);
                    resultFuture.to((v_1411: IpInfo) =>  {
                        const data_1410 = new DataInOut();
                        IpInfo.META.serialize(ctx, v_1411, data_1410);
                        ctx.sendResultToRemote(reqId_1407, data_1410.toArray());
                        
                    }
                    );
                    break;
                    
                }
                default: throw new Error(`Unknown command ID: $ {
                    commandId
                }
                `);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: LoginApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1412: MetaContext): LoginApiRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1412.flush();
                
            }
            , getFastMetaContext: () => sCtx_1412, getTimeUTC: (): ARFuture<bigint> =>  {
                const dataOut_1414 = new DataInOut();
                dataOut_1414.writeByte(3);
                const argsNames_1416: string[] = [];
                const argsValues_1417: any[] = [];
                const result_1415 = ARFuture.of<bigint>();
                sCtx_1412.invokeRemoteMethodAfter("getTimeUTC", result_1415, argsNames_1416, argsValues_1417);
                const reqId_1413 = sCtx_1412.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1415 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_1412, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1415.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1414.writeInt(reqId_1413);
                sCtx_1412.sendToRemote(dataOut_1414.toArray());
                return result_1415;
                
            }
            , loginByUID: (uid: UUID, data: LoginStream): void =>  {
                const dataOut_1419 = new DataInOut();
                dataOut_1419.writeByte(4);
                const argsNames_1421: string[] = ["uid", "data"];
                const argsValues_1422: any[] = [uid, data];
                sCtx_1412.invokeRemoteMethodAfter("loginByUID", null, argsNames_1421, argsValues_1422);
                FastMeta.META_UUID.serialize(sCtx_1412, uid, dataOut_1419);
                LoginStream.META.serialize(sCtx_1412, data, dataOut_1419);
                sCtx_1412.sendToRemote(dataOut_1419.toArray());
                
            }
            , loginByAlias: (alias: UUID, data: LoginStream): void =>  {
                const dataOut_1424 = new DataInOut();
                dataOut_1424.writeByte(5);
                const argsNames_1426: string[] = ["alias", "data"];
                const argsValues_1427: any[] = [alias, data];
                sCtx_1412.invokeRemoteMethodAfter("loginByAlias", null, argsNames_1426, argsValues_1427);
                FastMeta.META_UUID.serialize(sCtx_1412, alias, dataOut_1424);
                LoginStream.META.serialize(sCtx_1412, data, dataOut_1424);
                sCtx_1412.sendToRemote(dataOut_1424.toArray());
                
            }
            , getMyIp: (): ARFuture<IpInfo> =>  {
                const dataOut_1429 = new DataInOut();
                dataOut_1429.writeByte(6);
                const argsNames_1431: string[] = [];
                const argsValues_1432: any[] = [];
                const result_1430 = ARFuture.of<IpInfo>();
                sCtx_1412.invokeRemoteMethodAfter("getMyIp", result_1430, argsNames_1431, argsValues_1432);
                const reqId_1428 = sCtx_1412.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1430 as ARFuture<IpInfo>).tryDone(IpInfo.META.deserialize(sCtx_1412, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1430.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1429.writeInt(reqId_1428);
                sCtx_1412.sendToRemote(dataOut_1429.toArray());
                return result_1430;
                
            }
            , openLoginByUID(uid: UUID, factory: (api: AuthorizedApiRemote) => any, converter: BytesConverter, ...keys: any[]): AuthorizedApiRemote  {
                return sCtx_1412.findContext(ctx =>  {
                    ctx.onFlushData(data => this.loginByUID(uid, LoginStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((AuthorizedApi as any).META));
                    
                }
                , ...keys).makeRemote((AuthorizedApi as any).META) as AuthorizedApiRemote;
                
            }
            , openLoginByAlias(alias: UUID, factory: (api: AuthorizedApiRemote) => any, converter: BytesConverter, ...keys: any[]): AuthorizedApiRemote  {
                return sCtx_1412.findContext(ctx =>  {
                    ctx.onFlushData(data => this.loginByAlias(alias, LoginStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((AuthorizedApi as any).META));
                    
                }
                , ...keys).makeRemote((AuthorizedApi as any).META) as AuthorizedApiRemote;
                
            }
            , 
        };
        return remoteApiImpl as LoginApiRemote;
        
    }
    isValidCommand(commandId: number): boolean  {
        switch(commandId)  {
            case 0: // META_RESULT
            case 1: // META_ERROR
            case 3: // getTimeUTC
            case 4: // loginByUID
            case 5: // loginByAlias
            case 6: // getMyIp
            return true;
            default: return false;
            
        }
        
    }
    
}
export class ServerApiByUidClientMetaImpl implements FastMetaApi<ServerApiByUidClient, ServerApiByUidClientRemote>  {
    makeLocal_fromDataIn(ctx: MetaContext, dataIn: DataIn, _localApi: ServerApiByUidClient): void  {
        while(dataIn.isReadable())  {
            const commandId = dataIn.readUByte();
            switch(commandId)  {
                case 0:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onDone(dataIn);
                    break;
                    
                }
                case 1:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onError(dataIn);
                    break;
                    
                }
                default: throw new Error(`Unknown command ID: $ {
                    commandId
                }
                `);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ServerApiByUidClient): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1433: MetaContext): ServerApiByUidClientRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1433.flush();
                
            }
            , getFastMetaContext: () => sCtx_1433, 
        };
        return remoteApiImpl as ServerApiByUidClientRemote;
        
    }
    isValidCommand(commandId: number): boolean  {
        switch(commandId)  {
            case 0: // META_RESULT
            case 1: // META_ERROR
            return true;
            default: return false;
            
        }
        
    }
    
}
export class ServerApiByUidMetaImpl implements FastMetaApi<ServerApiByUid, ServerApiByUidRemote>  {
    makeLocal_fromDataIn(ctx: MetaContext, dataIn: DataIn, localApi: ServerApiByUid): void  {
        while(dataIn.isReadable())  {
            const commandId = dataIn.readUByte();
            switch(commandId)  {
                case 0:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onDone(dataIn);
                    break;
                    
                }
                case 1:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onError(dataIn);
                    break;
                    
                }
                case 3:  {
                    const reqId_1434 = dataIn.readInt();
                    const argsNames_1435: string[] = [];
                    const argsValues_1436: any[] = [];
                    ctx.invokeLocalMethodBefore("getBalance", argsNames_1435, argsValues_1436);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBalance();
                    ctx.invokeLocalMethodAfter("getBalance", resultFuture, argsNames_1435, argsValues_1436);
                    resultFuture.to((v_1438: bigint) =>  {
                        const data_1437 = new DataInOut();
                        data_1437.writeLong(v_1438);
                        ctx.sendResultToRemote(reqId_1434, data_1437.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    const reqId_1439 = dataIn.readInt();
                    let uid_1440: UUID;
                    uid_1440 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1441: string[] = ["uid"];
                    const argsValues_1442: any[] = [uid_1440];
                    ctx.invokeLocalMethodBefore("setParent", argsNames_1441, argsValues_1442);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.setParent(uid_1440);
                    ctx.invokeLocalMethodAfter("setParent", resultFuture, argsNames_1441, argsValues_1442);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1439);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_1443 = dataIn.readInt();
                    const argsNames_1444: string[] = [];
                    const argsValues_1445: any[] = [];
                    ctx.invokeLocalMethodBefore("block", argsNames_1444, argsValues_1445);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.block();
                    ctx.invokeLocalMethodAfter("block", resultFuture, argsNames_1444, argsValues_1445);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1443);
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    const reqId_1446 = dataIn.readInt();
                    const argsNames_1447: string[] = [];
                    const argsValues_1448: any[] = [];
                    ctx.invokeLocalMethodBefore("getPosition", argsNames_1447, argsValues_1448);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getPosition();
                    ctx.invokeLocalMethodAfter("getPosition", resultFuture, argsNames_1447, argsValues_1448);
                    resultFuture.to((v_1450: Cloud) =>  {
                        const data_1449 = new DataInOut();
                        Cloud.META.serialize(ctx, v_1450, data_1449);
                        ctx.sendResultToRemote(reqId_1446, data_1449.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 7:  {
                    const reqId_1451 = dataIn.readInt();
                    const argsNames_1452: string[] = [];
                    const argsValues_1453: any[] = [];
                    ctx.invokeLocalMethodBefore("getParent", argsNames_1452, argsValues_1453);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getParent();
                    ctx.invokeLocalMethodAfter("getParent", resultFuture, argsNames_1452, argsValues_1453);
                    resultFuture.to((v_1455: UUID) =>  {
                        const data_1454 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_1455, data_1454);
                        ctx.sendResultToRemote(reqId_1451, data_1454.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 8:  {
                    const reqId_1456 = dataIn.readInt();
                    const argsNames_1457: string[] = [];
                    const argsValues_1458: any[] = [];
                    ctx.invokeLocalMethodBefore("getBeneficiary", argsNames_1457, argsValues_1458);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBeneficiary();
                    ctx.invokeLocalMethodAfter("getBeneficiary", resultFuture, argsNames_1457, argsValues_1458);
                    resultFuture.to((v_1460: UUID) =>  {
                        const data_1459 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_1460, data_1459);
                        ctx.sendResultToRemote(reqId_1456, data_1459.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_1461 = dataIn.readInt();
                    let uid_1462: UUID;
                    uid_1462 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1463: string[] = ["uid"];
                    const argsValues_1464: any[] = [uid_1462];
                    ctx.invokeLocalMethodBefore("setBeneficiary", argsNames_1463, argsValues_1464);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.setBeneficiary(uid_1462);
                    ctx.invokeLocalMethodAfter("setBeneficiary", resultFuture, argsNames_1463, argsValues_1464);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1461);
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_1465 = dataIn.readInt();
                    const argsNames_1466: string[] = [];
                    const argsValues_1467: any[] = [];
                    ctx.invokeLocalMethodBefore("getBlockTime", argsNames_1466, argsValues_1467);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBlockTime();
                    ctx.invokeLocalMethodAfter("getBlockTime", resultFuture, argsNames_1466, argsValues_1467);
                    resultFuture.to((v_1469: Date) =>  {
                        const data_1468 = new DataInOut();
                        data_1468.writeLong(v_1469.getTime());
                        ctx.sendResultToRemote(reqId_1465, data_1468.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_1470 = dataIn.readInt();
                    const argsNames_1471: string[] = [];
                    const argsValues_1472: any[] = [];
                    ctx.invokeLocalMethodBefore("unblock", argsNames_1471, argsValues_1472);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.unblock();
                    ctx.invokeLocalMethodAfter("unblock", resultFuture, argsNames_1471, argsValues_1472);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1470);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    const reqId_1473 = dataIn.readInt();
                    const argsNames_1474: string[] = [];
                    const argsValues_1475: any[] = [];
                    ctx.invokeLocalMethodBefore("createTime", argsNames_1474, argsValues_1475);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.createTime();
                    ctx.invokeLocalMethodAfter("createTime", resultFuture, argsNames_1474, argsValues_1475);
                    resultFuture.to((v_1477: Date) =>  {
                        const data_1476 = new DataInOut();
                        data_1476.writeLong(v_1477.getTime());
                        ctx.sendResultToRemote(reqId_1473, data_1476.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 13:  {
                    const reqId_1478 = dataIn.readInt();
                    const argsNames_1479: string[] = [];
                    const argsValues_1480: any[] = [];
                    ctx.invokeLocalMethodBefore("onlineTime", argsNames_1479, argsValues_1480);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.onlineTime();
                    ctx.invokeLocalMethodAfter("onlineTime", resultFuture, argsNames_1479, argsValues_1480);
                    resultFuture.to((v_1482: Date) =>  {
                        const data_1481 = new DataInOut();
                        data_1481.writeLong(v_1482.getTime());
                        ctx.sendResultToRemote(reqId_1478, data_1481.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 14:  {
                    const reqId_1483 = dataIn.readInt();
                    let groupId_1484: bigint;
                    groupId_1484 = dataIn.readLong();
                    const argsNames_1485: string[] = ["groupId"];
                    const argsValues_1486: any[] = [groupId_1484];
                    ctx.invokeLocalMethodBefore("addAccessGroup", argsNames_1485, argsValues_1486);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.addAccessGroup(groupId_1484);
                    ctx.invokeLocalMethodAfter("addAccessGroup", resultFuture, argsNames_1485, argsValues_1486);
                    resultFuture.to((v_1488: boolean) =>  {
                        const data_1487 = new DataInOut();
                        data_1487.writeBoolean(v_1488);
                        ctx.sendResultToRemote(reqId_1483, data_1487.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_1489 = dataIn.readInt();
                    let groupId_1490: bigint;
                    groupId_1490 = dataIn.readLong();
                    const argsNames_1491: string[] = ["groupId"];
                    const argsValues_1492: any[] = [groupId_1490];
                    ctx.invokeLocalMethodBefore("removeAccessGroup", argsNames_1491, argsValues_1492);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.removeAccessGroup(groupId_1490);
                    ctx.invokeLocalMethodAfter("removeAccessGroup", resultFuture, argsNames_1491, argsValues_1492);
                    resultFuture.to((v_1494: boolean) =>  {
                        const data_1493 = new DataInOut();
                        data_1493.writeBoolean(v_1494);
                        ctx.sendResultToRemote(reqId_1489, data_1493.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 16:  {
                    const reqId_1495 = dataIn.readInt();
                    let limit_1496: number;
                    limit_1496 = dataIn.readInt();
                    const argsNames_1497: string[] = ["limit"];
                    const argsValues_1498: any[] = [limit_1496];
                    ctx.invokeLocalMethodBefore("setMsgQueueLimit", argsNames_1497, argsValues_1498);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.setMsgQueueLimit(limit_1496);
                    ctx.invokeLocalMethodAfter("setMsgQueueLimit", resultFuture, argsNames_1497, argsValues_1498);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1495);
                        
                    }
                    );
                    break;
                    
                }
                case 17:  {
                    const reqId_1499 = dataIn.readInt();
                    let seconds_1500: number;
                    seconds_1500 = dataIn.readInt();
                    const argsNames_1501: string[] = ["seconds"];
                    const argsValues_1502: any[] = [seconds_1500];
                    ctx.invokeLocalMethodBefore("setMsgTimeLimit", argsNames_1501, argsValues_1502);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.setMsgTimeLimit(seconds_1500);
                    ctx.invokeLocalMethodAfter("setMsgTimeLimit", resultFuture, argsNames_1501, argsValues_1502);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1499);
                        
                    }
                    );
                    break;
                    
                }
                default: throw new Error(`Unknown command ID: $ {
                    commandId
                }
                `);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ServerApiByUid): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1503: MetaContext): ServerApiByUidRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1503.flush();
                
            }
            , getFastMetaContext: () => sCtx_1503, getBalance: (): ARFuture<bigint> =>  {
                const dataOut_1505 = new DataInOut();
                dataOut_1505.writeByte(3);
                const argsNames_1507: string[] = [];
                const argsValues_1508: any[] = [];
                const result_1506 = ARFuture.of<bigint>();
                sCtx_1503.invokeRemoteMethodAfter("getBalance", result_1506, argsNames_1507, argsValues_1508);
                const reqId_1504 = sCtx_1503.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1506 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_1503, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1506.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1505.writeInt(reqId_1504);
                sCtx_1503.sendToRemote(dataOut_1505.toArray());
                return result_1506;
                
            }
            , setParent: (uid: UUID): AFuture =>  {
                const dataOut_1510 = new DataInOut();
                dataOut_1510.writeByte(4);
                const argsNames_1512: string[] = ["uid"];
                const argsValues_1513: any[] = [uid];
                const result_1511 = AFuture.make();
                sCtx_1503.invokeRemoteMethodAfter("setParent", result_1511, argsNames_1512, argsValues_1513);
                const reqId_1509 = sCtx_1503.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1511 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1511.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1510.writeInt(reqId_1509);
                FastMeta.META_UUID.serialize(sCtx_1503, uid, dataOut_1510);
                sCtx_1503.sendToRemote(dataOut_1510.toArray());
                return result_1511;
                
            }
            , block: (): AFuture =>  {
                const dataOut_1515 = new DataInOut();
                dataOut_1515.writeByte(5);
                const argsNames_1517: string[] = [];
                const argsValues_1518: any[] = [];
                const result_1516 = AFuture.make();
                sCtx_1503.invokeRemoteMethodAfter("block", result_1516, argsNames_1517, argsValues_1518);
                const reqId_1514 = sCtx_1503.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1516 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1516.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1515.writeInt(reqId_1514);
                sCtx_1503.sendToRemote(dataOut_1515.toArray());
                return result_1516;
                
            }
            , getPosition: (): ARFuture<Cloud> =>  {
                const dataOut_1520 = new DataInOut();
                dataOut_1520.writeByte(6);
                const argsNames_1522: string[] = [];
                const argsValues_1523: any[] = [];
                const result_1521 = ARFuture.of<Cloud>();
                sCtx_1503.invokeRemoteMethodAfter("getPosition", result_1521, argsNames_1522, argsValues_1523);
                const reqId_1519 = sCtx_1503.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1521 as ARFuture<Cloud>).tryDone(Cloud.META.deserialize(sCtx_1503, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1521.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1520.writeInt(reqId_1519);
                sCtx_1503.sendToRemote(dataOut_1520.toArray());
                return result_1521;
                
            }
            , getParent: (): ARFuture<UUID> =>  {
                const dataOut_1525 = new DataInOut();
                dataOut_1525.writeByte(7);
                const argsNames_1527: string[] = [];
                const argsValues_1528: any[] = [];
                const result_1526 = ARFuture.of<UUID>();
                sCtx_1503.invokeRemoteMethodAfter("getParent", result_1526, argsNames_1527, argsValues_1528);
                const reqId_1524 = sCtx_1503.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1526 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_1503, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1526.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1525.writeInt(reqId_1524);
                sCtx_1503.sendToRemote(dataOut_1525.toArray());
                return result_1526;
                
            }
            , getBeneficiary: (): ARFuture<UUID> =>  {
                const dataOut_1530 = new DataInOut();
                dataOut_1530.writeByte(8);
                const argsNames_1532: string[] = [];
                const argsValues_1533: any[] = [];
                const result_1531 = ARFuture.of<UUID>();
                sCtx_1503.invokeRemoteMethodAfter("getBeneficiary", result_1531, argsNames_1532, argsValues_1533);
                const reqId_1529 = sCtx_1503.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1531 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_1503, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1531.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1530.writeInt(reqId_1529);
                sCtx_1503.sendToRemote(dataOut_1530.toArray());
                return result_1531;
                
            }
            , setBeneficiary: (uid: UUID): AFuture =>  {
                const dataOut_1535 = new DataInOut();
                dataOut_1535.writeByte(9);
                const argsNames_1537: string[] = ["uid"];
                const argsValues_1538: any[] = [uid];
                const result_1536 = AFuture.make();
                sCtx_1503.invokeRemoteMethodAfter("setBeneficiary", result_1536, argsNames_1537, argsValues_1538);
                const reqId_1534 = sCtx_1503.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1536 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1536.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1535.writeInt(reqId_1534);
                FastMeta.META_UUID.serialize(sCtx_1503, uid, dataOut_1535);
                sCtx_1503.sendToRemote(dataOut_1535.toArray());
                return result_1536;
                
            }
            , getBlockTime: (): ARFuture<Date> =>  {
                const dataOut_1540 = new DataInOut();
                dataOut_1540.writeByte(10);
                const argsNames_1542: string[] = [];
                const argsValues_1543: any[] = [];
                const result_1541 = ARFuture.of<Date>();
                sCtx_1503.invokeRemoteMethodAfter("getBlockTime", result_1541, argsNames_1542, argsValues_1543);
                const reqId_1539 = sCtx_1503.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1541 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1503, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1541.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1540.writeInt(reqId_1539);
                sCtx_1503.sendToRemote(dataOut_1540.toArray());
                return result_1541;
                
            }
            , unblock: (): AFuture =>  {
                const dataOut_1545 = new DataInOut();
                dataOut_1545.writeByte(11);
                const argsNames_1547: string[] = [];
                const argsValues_1548: any[] = [];
                const result_1546 = AFuture.make();
                sCtx_1503.invokeRemoteMethodAfter("unblock", result_1546, argsNames_1547, argsValues_1548);
                const reqId_1544 = sCtx_1503.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1546 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1546.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1545.writeInt(reqId_1544);
                sCtx_1503.sendToRemote(dataOut_1545.toArray());
                return result_1546;
                
            }
            , createTime: (): ARFuture<Date> =>  {
                const dataOut_1550 = new DataInOut();
                dataOut_1550.writeByte(12);
                const argsNames_1552: string[] = [];
                const argsValues_1553: any[] = [];
                const result_1551 = ARFuture.of<Date>();
                sCtx_1503.invokeRemoteMethodAfter("createTime", result_1551, argsNames_1552, argsValues_1553);
                const reqId_1549 = sCtx_1503.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1551 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1503, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1551.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1550.writeInt(reqId_1549);
                sCtx_1503.sendToRemote(dataOut_1550.toArray());
                return result_1551;
                
            }
            , onlineTime: (): ARFuture<Date> =>  {
                const dataOut_1555 = new DataInOut();
                dataOut_1555.writeByte(13);
                const argsNames_1557: string[] = [];
                const argsValues_1558: any[] = [];
                const result_1556 = ARFuture.of<Date>();
                sCtx_1503.invokeRemoteMethodAfter("onlineTime", result_1556, argsNames_1557, argsValues_1558);
                const reqId_1554 = sCtx_1503.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1556 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1503, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1556.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1555.writeInt(reqId_1554);
                sCtx_1503.sendToRemote(dataOut_1555.toArray());
                return result_1556;
                
            }
            , addAccessGroup: (groupId: bigint): ARFuture<boolean> =>  {
                const dataOut_1560 = new DataInOut();
                dataOut_1560.writeByte(14);
                const argsNames_1562: string[] = ["groupId"];
                const argsValues_1563: any[] = [groupId];
                const result_1561 = ARFuture.of<boolean>();
                sCtx_1503.invokeRemoteMethodAfter("addAccessGroup", result_1561, argsNames_1562, argsValues_1563);
                const reqId_1559 = sCtx_1503.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1561 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1503, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1561.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1560.writeInt(reqId_1559);
                dataOut_1560.writeLong(groupId);
                sCtx_1503.sendToRemote(dataOut_1560.toArray());
                return result_1561;
                
            }
            , removeAccessGroup: (groupId: bigint): ARFuture<boolean> =>  {
                const dataOut_1565 = new DataInOut();
                dataOut_1565.writeByte(15);
                const argsNames_1567: string[] = ["groupId"];
                const argsValues_1568: any[] = [groupId];
                const result_1566 = ARFuture.of<boolean>();
                sCtx_1503.invokeRemoteMethodAfter("removeAccessGroup", result_1566, argsNames_1567, argsValues_1568);
                const reqId_1564 = sCtx_1503.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1566 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1503, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1566.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1565.writeInt(reqId_1564);
                dataOut_1565.writeLong(groupId);
                sCtx_1503.sendToRemote(dataOut_1565.toArray());
                return result_1566;
                
            }
            , setMsgQueueLimit: (limit: number): AFuture =>  {
                const dataOut_1570 = new DataInOut();
                dataOut_1570.writeByte(16);
                const argsNames_1572: string[] = ["limit"];
                const argsValues_1573: any[] = [limit];
                const result_1571 = AFuture.make();
                sCtx_1503.invokeRemoteMethodAfter("setMsgQueueLimit", result_1571, argsNames_1572, argsValues_1573);
                const reqId_1569 = sCtx_1503.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1571 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1571.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1570.writeInt(reqId_1569);
                dataOut_1570.writeInt(limit);
                sCtx_1503.sendToRemote(dataOut_1570.toArray());
                return result_1571;
                
            }
            , setMsgTimeLimit: (seconds: number): AFuture =>  {
                const dataOut_1575 = new DataInOut();
                dataOut_1575.writeByte(17);
                const argsNames_1577: string[] = ["seconds"];
                const argsValues_1578: any[] = [seconds];
                const result_1576 = AFuture.make();
                sCtx_1503.invokeRemoteMethodAfter("setMsgTimeLimit", result_1576, argsNames_1577, argsValues_1578);
                const reqId_1574 = sCtx_1503.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1576 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1576.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1575.writeInt(reqId_1574);
                dataOut_1575.writeInt(seconds);
                sCtx_1503.sendToRemote(dataOut_1575.toArray());
                return result_1576;
                
            }
            , 
        };
        return remoteApiImpl as ServerApiByUidRemote;
        
    }
    isValidCommand(commandId: number): boolean  {
        switch(commandId)  {
            case 0: // META_RESULT
            case 1: // META_ERROR
            case 3: // getBalance
            case 4: // setParent
            case 5: // block
            case 6: // getPosition
            case 7: // getParent
            case 8: // getBeneficiary
            case 9: // setBeneficiary
            case 10: // getBlockTime
            case 11: // unblock
            case 12: // createTime
            case 13: // onlineTime
            case 14: // addAccessGroup
            case 15: // removeAccessGroup
            case 16: // setMsgQueueLimit
            case 17: // setMsgTimeLimit
            return true;
            default: return false;
            
        }
        
    }
    
}
export class ClientApiRegSafeMetaImpl implements FastMetaApi<ClientApiRegSafe, ClientApiRegSafeRemote>  {
    makeLocal_fromDataIn(ctx: MetaContext, dataIn: DataIn, _localApi: ClientApiRegSafe): void  {
        while(dataIn.isReadable())  {
            const commandId = dataIn.readUByte();
            switch(commandId)  {
                case 0:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onDone(dataIn);
                    break;
                    
                }
                case 1:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onError(dataIn);
                    break;
                    
                }
                default: throw new Error(`Unknown command ID: $ {
                    commandId
                }
                `);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ClientApiRegSafe): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1579: MetaContext): ClientApiRegSafeRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1579.flush();
                
            }
            , getFastMetaContext: () => sCtx_1579, 
        };
        return remoteApiImpl as ClientApiRegSafeRemote;
        
    }
    isValidCommand(commandId: number): boolean  {
        switch(commandId)  {
            case 0: // META_RESULT
            case 1: // META_ERROR
            return true;
            default: return false;
            
        }
        
    }
    
}
export class GlobalRegClientApiMetaImpl implements FastMetaApi<GlobalRegClientApi, GlobalRegClientApiRemote>  {
    makeLocal_fromDataIn(ctx: MetaContext, dataIn: DataIn, _localApi: GlobalRegClientApi): void  {
        while(dataIn.isReadable())  {
            const commandId = dataIn.readUByte();
            switch(commandId)  {
                case 0:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onDone(dataIn);
                    break;
                    
                }
                case 1:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onError(dataIn);
                    break;
                    
                }
                default: throw new Error(`Unknown command ID: $ {
                    commandId
                }
                `);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: GlobalRegClientApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1580: MetaContext): GlobalRegClientApiRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1580.flush();
                
            }
            , getFastMetaContext: () => sCtx_1580, 
        };
        return remoteApiImpl as GlobalRegClientApiRemote;
        
    }
    isValidCommand(commandId: number): boolean  {
        switch(commandId)  {
            case 0: // META_RESULT
            case 1: // META_ERROR
            return true;
            default: return false;
            
        }
        
    }
    
}
export class ClientApiRegUnsafeMetaImpl implements FastMetaApi<ClientApiRegUnsafe, ClientApiRegUnsafeRemote>  {
    makeLocal_fromDataIn(ctx: MetaContext, dataIn: DataIn, localApi: ClientApiRegUnsafe): void  {
        while(dataIn.isReadable())  {
            const commandId = dataIn.readUByte();
            switch(commandId)  {
                case 0:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onDone(dataIn);
                    break;
                    
                }
                case 1:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onError(dataIn);
                    break;
                    
                }
                case 3:  {
                    let stream_1582: ClientApiRegSafeStream;
                    stream_1582 = ClientApiRegSafeStream.META.deserialize(ctx, dataIn);
                    const argsNames_1583: string[] = ["stream"];
                    const argsValues_1584: any[] = [stream_1582];
                    ctx.invokeLocalMethodBefore("enter", argsNames_1583, argsValues_1584);
                    localApi.enter(stream_1582);
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_1583, argsValues_1584);
                    break;
                    
                }
                case 4:  {
                    let stream_1586: GlobalRegClientApiStream;
                    stream_1586 = GlobalRegClientApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_1587: string[] = ["stream"];
                    const argsValues_1588: any[] = [stream_1586];
                    ctx.invokeLocalMethodBefore("enterGlobal", argsNames_1587, argsValues_1588);
                    localApi.enterGlobal(stream_1586);
                    ctx.invokeLocalMethodAfter("enterGlobal", null, argsNames_1587, argsValues_1588);
                    break;
                    
                }
                default: throw new Error(`Unknown command ID: $ {
                    commandId
                }
                `);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ClientApiRegUnsafe): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1589: MetaContext): ClientApiRegUnsafeRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1589.flush();
                
            }
            , getFastMetaContext: () => sCtx_1589, enter: (stream: ClientApiRegSafeStream): void =>  {
                const dataOut_1591 = new DataInOut();
                dataOut_1591.writeByte(3);
                const argsNames_1593: string[] = ["stream"];
                const argsValues_1594: any[] = [stream];
                sCtx_1589.invokeRemoteMethodAfter("enter", null, argsNames_1593, argsValues_1594);
                ClientApiRegSafeStream.META.serialize(sCtx_1589, stream, dataOut_1591);
                sCtx_1589.sendToRemote(dataOut_1591.toArray());
                
            }
            , enterGlobal: (stream: GlobalRegClientApiStream): void =>  {
                const dataOut_1596 = new DataInOut();
                dataOut_1596.writeByte(4);
                const argsNames_1598: string[] = ["stream"];
                const argsValues_1599: any[] = [stream];
                sCtx_1589.invokeRemoteMethodAfter("enterGlobal", null, argsNames_1598, argsValues_1599);
                GlobalRegClientApiStream.META.serialize(sCtx_1589, stream, dataOut_1596);
                sCtx_1589.sendToRemote(dataOut_1596.toArray());
                
            }
            , openEnter(factory: (api: ClientApiRegSafeRemote) => any, converter: BytesConverter, ...keys: any[]): ClientApiRegSafeRemote  {
                return sCtx_1589.findContext(ctx =>  {
                    ctx.onFlushData(data => this.enter(ClientApiRegSafeStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((ClientApiRegSafe as any).META));
                    
                }
                , ...keys).makeRemote((ClientApiRegSafe as any).META) as ClientApiRegSafeRemote;
                
            }
            , openEnterGlobal(factory: (api: GlobalRegClientApiRemote) => any, converter: BytesConverter, ...keys: any[]): GlobalRegClientApiRemote  {
                return sCtx_1589.findContext(ctx =>  {
                    ctx.onFlushData(data => this.enterGlobal(GlobalRegClientApiStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((GlobalRegClientApi as any).META));
                    
                }
                , ...keys).makeRemote((GlobalRegClientApi as any).META) as GlobalRegClientApiRemote;
                
            }
            , 
        };
        return remoteApiImpl as ClientApiRegUnsafeRemote;
        
    }
    isValidCommand(commandId: number): boolean  {
        switch(commandId)  {
            case 0: // META_RESULT
            case 1: // META_ERROR
            case 3: // enter
            case 4: // enterGlobal
            return true;
            default: return false;
            
        }
        
    }
    
}
export class GlobalRegServerApiMetaImpl implements FastMetaApi<GlobalRegServerApi, GlobalRegServerApiRemote>  {
    makeLocal_fromDataIn(ctx: MetaContext, dataIn: DataIn, localApi: GlobalRegServerApi): void  {
        while(dataIn.isReadable())  {
            const commandId = dataIn.readUByte();
            switch(commandId)  {
                case 0:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onDone(dataIn);
                    break;
                    
                }
                case 1:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onError(dataIn);
                    break;
                    
                }
                case 3:  {
                    let _key_1601: Key;
                    _key_1601 = Key.META.deserialize(ctx, dataIn);
                    const argsNames_1602: string[] = ["key"];
                    const argsValues_1603: any[] = [_key_1601];
                    ctx.invokeLocalMethodBefore("setMasterKey", argsNames_1602, argsValues_1603);
                    localApi.setMasterKey(_key_1601);
                    ctx.invokeLocalMethodAfter("setMasterKey", null, argsNames_1602, argsValues_1603);
                    break;
                    
                }
                case 4:  {
                    const reqId_1604 = dataIn.readInt();
                    const argsNames_1605: string[] = [];
                    const argsValues_1606: any[] = [];
                    ctx.invokeLocalMethodBefore("finish", argsNames_1605, argsValues_1606);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.finish();
                    ctx.invokeLocalMethodAfter("finish", resultFuture, argsNames_1605, argsValues_1606);
                    resultFuture.to((v_1608: FinishResult) =>  {
                        const data_1607 = new DataInOut();
                        FinishResult.META.serialize(ctx, v_1608, data_1607);
                        ctx.sendResultToRemote(reqId_1604, data_1607.toArray());
                        
                    }
                    );
                    break;
                    
                }
                default: throw new Error(`Unknown command ID: $ {
                    commandId
                }
                `);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: GlobalRegServerApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1609: MetaContext): GlobalRegServerApiRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1609.flush();
                
            }
            , getFastMetaContext: () => sCtx_1609, setMasterKey: (key: Key): void =>  {
                const dataOut_1611 = new DataInOut();
                dataOut_1611.writeByte(3);
                const argsNames_1613: string[] = ["key"];
                const argsValues_1614: any[] = [key];
                sCtx_1609.invokeRemoteMethodAfter("setMasterKey", null, argsNames_1613, argsValues_1614);
                Key.META.serialize(sCtx_1609, key, dataOut_1611);
                sCtx_1609.sendToRemote(dataOut_1611.toArray());
                
            }
            , finish: (): ARFuture<FinishResult> =>  {
                const dataOut_1616 = new DataInOut();
                dataOut_1616.writeByte(4);
                const argsNames_1618: string[] = [];
                const argsValues_1619: any[] = [];
                const result_1617 = ARFuture.of<FinishResult>();
                sCtx_1609.invokeRemoteMethodAfter("finish", result_1617, argsNames_1618, argsValues_1619);
                const reqId_1615 = sCtx_1609.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1617 as ARFuture<FinishResult>).tryDone(FinishResult.META.deserialize(sCtx_1609, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1617.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1616.writeInt(reqId_1615);
                sCtx_1609.sendToRemote(dataOut_1616.toArray());
                return result_1617;
                
            }
            , 
        };
        return remoteApiImpl as GlobalRegServerApiRemote;
        
    }
    isValidCommand(commandId: number): boolean  {
        switch(commandId)  {
            case 0: // META_RESULT
            case 1: // META_ERROR
            case 3: // setMasterKey
            case 4: // finish
            return true;
            default: return false;
            
        }
        
    }
    
}
export class ServerRegistrationApiMetaImpl implements FastMetaApi<ServerRegistrationApi, ServerRegistrationApiRemote>  {
    makeLocal_fromDataIn(ctx: MetaContext, dataIn: DataIn, localApi: ServerRegistrationApi): void  {
        while(dataIn.isReadable())  {
            const commandId = dataIn.readUByte();
            switch(commandId)  {
                case 0:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onDone(dataIn);
                    break;
                    
                }
                case 1:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onError(dataIn);
                    break;
                    
                }
                case 3:  {
                    let salt_1621: string;
                    let suffix_1622: string;
                    let passwords_1623: number[];
                    let parent_1624: UUID;
                    let globalApi_1625: GlobalApiStream;
                    let stringBytes_1626: Uint8Array;
                    const len_1628 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1629 = dataIn.readBytes(len_1628);
                    stringBytes_1626 = bytes_1629;
                    salt_1621 = new TextDecoder('utf-8').decode(stringBytes_1626);
                    let stringBytes_1630: Uint8Array;
                    const len_1632 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1633 = dataIn.readBytes(len_1632);
                    stringBytes_1630 = bytes_1633;
                    suffix_1622 = new TextDecoder('utf-8').decode(stringBytes_1630);
                    const len_1635 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    passwords_1623 = new Array<number>(len_1635);
                    for (let idx_1634 = 0;
                    idx_1634 < len_1635;
                    idx_1634++)  {
                        passwords_1623[idx_1634] = dataIn.readInt();
                        
                    }
                    parent_1624 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    globalApi_1625 = GlobalApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_1636: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                    const argsValues_1637: any[] = [salt_1621, suffix_1622, passwords_1623, parent_1624, globalApi_1625];
                    ctx.invokeLocalMethodBefore("registration", argsNames_1636, argsValues_1637);
                    localApi.registration(salt_1621, suffix_1622, passwords_1623, parent_1624, globalApi_1625);
                    ctx.invokeLocalMethodAfter("registration", null, argsNames_1636, argsValues_1637);
                    break;
                    
                }
                case 4:  {
                    const reqId_1638 = dataIn.readInt();
                    let parent_1639: UUID;
                    let powMethods_1640: PowMethod;
                    parent_1639 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    powMethods_1640 = PowMethod.META.deserialize(ctx, dataIn);
                    const argsNames_1641: string[] = ["parent", "powMethods"];
                    const argsValues_1642: any[] = [parent_1639, powMethods_1640];
                    ctx.invokeLocalMethodBefore("requestWorkProofData", argsNames_1641, argsValues_1642);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.requestWorkProofData(parent_1639, powMethods_1640);
                    ctx.invokeLocalMethodAfter("requestWorkProofData", resultFuture, argsNames_1641, argsValues_1642);
                    resultFuture.to((v_1644: WorkProofDTO) =>  {
                        const data_1643 = new DataInOut();
                        WorkProofDTO.META.serialize(ctx, v_1644, data_1643);
                        ctx.sendResultToRemote(reqId_1638, data_1643.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_1645 = dataIn.readInt();
                    let serverIds_1646: Cloud;
                    serverIds_1646 = Cloud.META.deserialize(ctx, dataIn);
                    const argsNames_1647: string[] = ["serverIds"];
                    const argsValues_1648: any[] = [serverIds_1646];
                    ctx.invokeLocalMethodBefore("resolveServers", argsNames_1647, argsValues_1648);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.resolveServers(serverIds_1646);
                    ctx.invokeLocalMethodAfter("resolveServers", resultFuture, argsNames_1647, argsValues_1648);
                    resultFuture.to((v_1650: ServerDescriptor[]) =>  {
                        const data_1649 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1649, v_1650.length);
                        for (const el_1651 of v_1650)  {
                            ServerDescriptor.META.serialize(ctx, el_1651, data_1649);
                            
                        }
                        ctx.sendResultToRemote(reqId_1645, data_1649.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    let _key_1653: Key;
                    _key_1653 = Key.META.deserialize(ctx, dataIn);
                    const argsNames_1654: string[] = ["key"];
                    const argsValues_1655: any[] = [_key_1653];
                    ctx.invokeLocalMethodBefore("setReturnKey", argsNames_1654, argsValues_1655);
                    localApi.setReturnKey(_key_1653);
                    ctx.invokeLocalMethodAfter("setReturnKey", null, argsNames_1654, argsValues_1655);
                    break;
                    
                }
                default: throw new Error(`Unknown command ID: $ {
                    commandId
                }
                `);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ServerRegistrationApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1656: MetaContext): ServerRegistrationApiRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1656.flush();
                
            }
            , getFastMetaContext: () => sCtx_1656, registration: (salt: string, suffix: string, passwords: number[], parent: UUID, globalApi: GlobalApiStream): void =>  {
                const dataOut_1658 = new DataInOut();
                dataOut_1658.writeByte(3);
                const argsNames_1660: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                const argsValues_1661: any[] = [salt, suffix, passwords, parent, globalApi];
                sCtx_1656.invokeRemoteMethodAfter("registration", null, argsNames_1660, argsValues_1661);
                const stringBytes_1662 = new TextEncoder().encode(salt);
                SerializerPackNumber.INSTANCE.put(dataOut_1658, stringBytes_1662.length);
                dataOut_1658.write(stringBytes_1662);
                const stringBytes_1664 = new TextEncoder().encode(suffix);
                SerializerPackNumber.INSTANCE.put(dataOut_1658, stringBytes_1664.length);
                dataOut_1658.write(stringBytes_1664);
                SerializerPackNumber.INSTANCE.put(dataOut_1658, passwords.length);
                for (const el_1666 of passwords)  {
                    dataOut_1658.writeInt(el_1666);
                    
                }
                FastMeta.META_UUID.serialize(sCtx_1656, parent, dataOut_1658);
                GlobalApiStream.META.serialize(sCtx_1656, globalApi, dataOut_1658);
                sCtx_1656.sendToRemote(dataOut_1658.toArray());
                
            }
            , requestWorkProofData: (parent: UUID, powMethods: PowMethod): ARFuture<WorkProofDTO> =>  {
                const dataOut_1668 = new DataInOut();
                dataOut_1668.writeByte(4);
                const argsNames_1670: string[] = ["parent", "powMethods"];
                const argsValues_1671: any[] = [parent, powMethods];
                const result_1669 = ARFuture.of<WorkProofDTO>();
                sCtx_1656.invokeRemoteMethodAfter("requestWorkProofData", result_1669, argsNames_1670, argsValues_1671);
                const reqId_1667 = sCtx_1656.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1669 as ARFuture<WorkProofDTO>).tryDone(WorkProofDTO.META.deserialize(sCtx_1656, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1669.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1668.writeInt(reqId_1667);
                FastMeta.META_UUID.serialize(sCtx_1656, parent, dataOut_1668);
                PowMethod.META.serialize(sCtx_1656, powMethods, dataOut_1668);
                sCtx_1656.sendToRemote(dataOut_1668.toArray());
                return result_1669;
                
            }
            , resolveServers: (serverIds: Cloud): ARFuture<ServerDescriptor[]> =>  {
                const dataOut_1673 = new DataInOut();
                dataOut_1673.writeByte(5);
                const argsNames_1675: string[] = ["serverIds"];
                const argsValues_1676: any[] = [serverIds];
                const result_1674 = ARFuture.of<ServerDescriptor[]>();
                sCtx_1656.invokeRemoteMethodAfter("resolveServers", result_1674, argsNames_1675, argsValues_1676);
                const reqId_1672 = sCtx_1656.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1674 as ARFuture<ServerDescriptor[]>).tryDone(FastMeta.getMetaArray(ServerDescriptor.META).deserialize(sCtx_1656, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1674.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1673.writeInt(reqId_1672);
                Cloud.META.serialize(sCtx_1656, serverIds, dataOut_1673);
                sCtx_1656.sendToRemote(dataOut_1673.toArray());
                return result_1674;
                
            }
            , setReturnKey: (key: Key): void =>  {
                const dataOut_1678 = new DataInOut();
                dataOut_1678.writeByte(6);
                const argsNames_1680: string[] = ["key"];
                const argsValues_1681: any[] = [key];
                sCtx_1656.invokeRemoteMethodAfter("setReturnKey", null, argsNames_1680, argsValues_1681);
                Key.META.serialize(sCtx_1656, key, dataOut_1678);
                sCtx_1656.sendToRemote(dataOut_1678.toArray());
                
            }
            , openRegistration(salt: string, suffix: string, passwords: number[], parent: UUID, factory: (api: GlobalRegServerApiRemote) => any, converter: BytesConverter, ...keys: any[]): GlobalRegServerApiRemote  {
                return sCtx_1656.findContext(ctx =>  {
                    ctx.onFlushData(data => this.registration(salt, suffix, passwords, parent, GlobalApiStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((GlobalRegServerApi as any).META));
                    
                }
                , ...keys).makeRemote((GlobalRegServerApi as any).META) as GlobalRegServerApiRemote;
                
            }
            , 
        };
        return remoteApiImpl as ServerRegistrationApiRemote;
        
    }
    isValidCommand(commandId: number): boolean  {
        switch(commandId)  {
            case 0: // META_RESULT
            case 1: // META_ERROR
            case 3: // registration
            case 4: // requestWorkProofData
            case 5: // resolveServers
            case 6: // setReturnKey
            return true;
            default: return false;
            
        }
        
    }
    
}
export class RegistrationRootApiMetaImpl implements FastMetaApi<RegistrationRootApi, RegistrationRootApiRemote>  {
    makeLocal_fromDataIn(ctx: MetaContext, dataIn: DataIn, localApi: RegistrationRootApi): void  {
        while(dataIn.isReadable())  {
            const commandId = dataIn.readUByte();
            switch(commandId)  {
                case 0:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onDone(dataIn);
                    break;
                    
                }
                case 1:  {
                    const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn);
                    const futureRec = ctx.getFuture(reqId);
                    if (futureRec) futureRec.onError(dataIn);
                    break;
                    
                }
                case 3:  {
                    const reqId_1682 = dataIn.readInt();
                    let cryptoLib_1683: CryptoLib;
                    cryptoLib_1683 = CryptoLib.META.deserialize(ctx, dataIn);
                    const argsNames_1684: string[] = ["cryptoLib"];
                    const argsValues_1685: any[] = [cryptoLib_1683];
                    ctx.invokeLocalMethodBefore("getAsymmetricPublicKey", argsNames_1684, argsValues_1685);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAsymmetricPublicKey(cryptoLib_1683);
                    ctx.invokeLocalMethodAfter("getAsymmetricPublicKey", resultFuture, argsNames_1684, argsValues_1685);
                    resultFuture.to((v_1687: SignedKey) =>  {
                        const data_1686 = new DataInOut();
                        SignedKey.META.serialize(ctx, v_1687, data_1686);
                        ctx.sendResultToRemote(reqId_1682, data_1686.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let cryptoLib_1689: CryptoLib;
                    let stream_1690: ServerRegistrationApiStream;
                    cryptoLib_1689 = CryptoLib.META.deserialize(ctx, dataIn);
                    stream_1690 = ServerRegistrationApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_1691: string[] = ["cryptoLib", "stream"];
                    const argsValues_1692: any[] = [cryptoLib_1689, stream_1690];
                    ctx.invokeLocalMethodBefore("enter", argsNames_1691, argsValues_1692);
                    localApi.enter(cryptoLib_1689, stream_1690);
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_1691, argsValues_1692);
                    break;
                    
                }
                case 6:  {
                    const reqId_1693 = dataIn.readInt();
                    const argsNames_1694: string[] = [];
                    const argsValues_1695: any[] = [];
                    ctx.invokeLocalMethodBefore("getMyIp", argsNames_1694, argsValues_1695);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getMyIp();
                    ctx.invokeLocalMethodAfter("getMyIp", resultFuture, argsNames_1694, argsValues_1695);
                    resultFuture.to((v_1697: IpInfo) =>  {
                        const data_1696 = new DataInOut();
                        IpInfo.META.serialize(ctx, v_1697, data_1696);
                        ctx.sendResultToRemote(reqId_1693, data_1696.toArray());
                        
                    }
                    );
                    break;
                    
                }
                default: throw new Error(`Unknown command ID: $ {
                    commandId
                }
                `);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: RegistrationRootApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1698: MetaContext): RegistrationRootApiRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1698.flush();
                
            }
            , getFastMetaContext: () => sCtx_1698, getAsymmetricPublicKey: (cryptoLib: CryptoLib): ARFuture<SignedKey> =>  {
                const dataOut_1700 = new DataInOut();
                dataOut_1700.writeByte(3);
                const argsNames_1702: string[] = ["cryptoLib"];
                const argsValues_1703: any[] = [cryptoLib];
                const result_1701 = ARFuture.of<SignedKey>();
                sCtx_1698.invokeRemoteMethodAfter("getAsymmetricPublicKey", result_1701, argsNames_1702, argsValues_1703);
                const reqId_1699 = sCtx_1698.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1701 as ARFuture<SignedKey>).tryDone(SignedKey.META.deserialize(sCtx_1698, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1701.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1700.writeInt(reqId_1699);
                CryptoLib.META.serialize(sCtx_1698, cryptoLib, dataOut_1700);
                sCtx_1698.sendToRemote(dataOut_1700.toArray());
                return result_1701;
                
            }
            , enter: (cryptoLib: CryptoLib, stream: ServerRegistrationApiStream): void =>  {
                const dataOut_1705 = new DataInOut();
                dataOut_1705.writeByte(4);
                const argsNames_1707: string[] = ["cryptoLib", "stream"];
                const argsValues_1708: any[] = [cryptoLib, stream];
                sCtx_1698.invokeRemoteMethodAfter("enter", null, argsNames_1707, argsValues_1708);
                CryptoLib.META.serialize(sCtx_1698, cryptoLib, dataOut_1705);
                ServerRegistrationApiStream.META.serialize(sCtx_1698, stream, dataOut_1705);
                sCtx_1698.sendToRemote(dataOut_1705.toArray());
                
            }
            , getMyIp: (): ARFuture<IpInfo> =>  {
                const dataOut_1710 = new DataInOut();
                dataOut_1710.writeByte(6);
                const argsNames_1712: string[] = [];
                const argsValues_1713: any[] = [];
                const result_1711 = ARFuture.of<IpInfo>();
                sCtx_1698.invokeRemoteMethodAfter("getMyIp", result_1711, argsNames_1712, argsValues_1713);
                const reqId_1709 = sCtx_1698.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1711 as ARFuture<IpInfo>).tryDone(IpInfo.META.deserialize(sCtx_1698, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1711.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1710.writeInt(reqId_1709);
                sCtx_1698.sendToRemote(dataOut_1710.toArray());
                return result_1711;
                
            }
            , openEnter(cryptoLib: CryptoLib, factory: (api: ServerRegistrationApiRemote) => any, converter: BytesConverter, ...keys: any[]): ServerRegistrationApiRemote  {
                return sCtx_1698.findContext(ctx =>  {
                    ctx.onFlushData(data => this.enter(cryptoLib, ServerRegistrationApiStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((ServerRegistrationApi as any).META));
                    
                }
                , ...keys).makeRemote((ServerRegistrationApi as any).META) as ServerRegistrationApiRemote;
                
            }
            , 
        };
        return remoteApiImpl as RegistrationRootApiRemote;
        
    }
    isValidCommand(commandId: number): boolean  {
        switch(commandId)  {
            case 0: // META_RESULT
            case 1: // META_ERROR
            case 3: // getAsymmetricPublicKey
            case 4: // enter
            case 6: // getMyIp
            return true;
            default: return false;
            
        }
        
    }
    
}
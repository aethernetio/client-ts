import  {
    AFuture, ARFuture, DataIn, DataOut, DataInOut, DataInOutStatic, FastMetaType, FastFutureContext, RemoteApi, FastMeta, SerializerPackNumber, DeserializerPackNumber, FastApiContextLocal, FastMetaApi, BytesConverter, RemoteApiFuture, FastFutureContextStub, UUID, URI, AConsumer, ToString, AString
}
from './aether_client';
import  {
    AetherCodec, CryptoLib, PowMethod, Status, AetherTypeDescriptor, IPAddress, Key, KeyAsymmetric, KeyAsymmetricPrivate, KeyAsymmetricPublic, KeySign, KeySignPrivate, KeySignPublic, KeySymmetric, PairKeys, Sign, Telemetry, WorkProofConfig, AccessCheckPair, AccessCheckResult, AccessGroup, AetherApiDefinition, AetherArgumentDescriptor, AetherArrayType, AetherBaseType, AetherFieldDescriptor, AetherMethodDescriptor, AetherModuleDescriptor, AetherNullableType, AetherStreamType, AetherStructDescriptor, ClientInfo, ClientStateForSave, Cloud, CoderAndPort, FinishResult, HydrogenCurvePrivate, HydrogenCurvePublic, HydrogenSecretBox, HydrogenSignPrivate, HydrogenSignPublic, IPAddressAndPorts, IPAddressAndPortsList, IPAddressV4, IPAddressV6, IPAddressWeb, Message, MoneyOperation, PairKeysAsym, PairKeysAsymSigned, PairKeysSign, ServerDescriptor, SignAE_ED25519, SignedKey, SignHYDROGEN, SodiumChacha20Poly1305, SodiumCurvePrivate, SodiumCurvePublic, SodiumSignPrivate, SodiumSignPublic, TelemetryCPP, UUIDAndCloud, WorkProofBCrypt, WorkProofDTO, ClientApiRegSafeStream, ClientApiStream, ClientInteractionClientStream, GlobalApi, GlobalRegClientApiStream, LoginClientStream, LoginStream, ServerRegistrationApiStream, ClientApiUnsafe, ClientApiSafe, AuthorizedApi, LoginApi, ServerApiByUidClient, ServerApiByUid, ClientApiRegSafe, GlobalRegClientApi, ClientApiRegUnsafe, GlobalRegServerApi, ServerRegistrationApi, RegistrationRootApi, ClientApiUnsafeRemote, ClientApiSafeRemote, AuthorizedApiRemote, LoginApiRemote, ServerApiByUidClientRemote, ServerApiByUidRemote, ClientApiRegSafeRemote, GlobalRegClientApiRemote, ClientApiRegUnsafeRemote, GlobalRegServerApiRemote, ServerRegistrationApiRemote, RegistrationRootApiRemote
}
from './aether_api';
// This is always relative
export class AetherCodecMetaImpl implements FastMetaType<AetherCodec>  {
    serialize(_sCtx: FastFutureContext, obj: AetherCodec, out: DataOut): void  {
        const values = Object.keys(AetherCodec).filter(k => isNaN(parseInt(k)));
        out.writeByte(values.indexOf(obj as string));
        
    }
    deserialize(_sCtx: FastFutureContext, in_: DataIn): AetherCodec  {
        const ordinal = in_.readUByte();
        const keys = Object.keys(AetherCodec).filter(k => isNaN(parseInt(k)));
        if (ordinal < 0 || ordinal >= keys.length) throw new Error(`Invalid ordinal $ {
            ordinal
        }
        for enum AetherCodec`);
        return AetherCodec[keys[ordinal] as keyof typeof AetherCodec] as AetherCodec;
        
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
export class CryptoLibMetaImpl implements FastMetaType<CryptoLib>  {
    serialize(_sCtx: FastFutureContext, obj: CryptoLib, out: DataOut): void  {
        const values = Object.keys(CryptoLib).filter(k => isNaN(parseInt(k)));
        out.writeByte(values.indexOf(obj as string));
        
    }
    deserialize(_sCtx: FastFutureContext, in_: DataIn): CryptoLib  {
        const ordinal = in_.readUByte();
        const keys = Object.keys(CryptoLib).filter(k => isNaN(parseInt(k)));
        if (ordinal < 0 || ordinal >= keys.length) throw new Error(`Invalid ordinal $ {
            ordinal
        }
        for enum CryptoLib`);
        return CryptoLib[keys[ordinal] as keyof typeof CryptoLib] as CryptoLib;
        
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
    serialize(_sCtx: FastFutureContext, obj: PowMethod, out: DataOut): void  {
        const values = Object.keys(PowMethod).filter(k => isNaN(parseInt(k)));
        out.writeByte(values.indexOf(obj as string));
        
    }
    deserialize(_sCtx: FastFutureContext, in_: DataIn): PowMethod  {
        const ordinal = in_.readUByte();
        const keys = Object.keys(PowMethod).filter(k => isNaN(parseInt(k)));
        if (ordinal < 0 || ordinal >= keys.length) throw new Error(`Invalid ordinal $ {
            ordinal
        }
        for enum PowMethod`);
        return PowMethod[keys[ordinal] as keyof typeof PowMethod] as PowMethod;
        
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
    serialize(_sCtx: FastFutureContext, obj: Status, out: DataOut): void  {
        const values = Object.keys(Status).filter(k => isNaN(parseInt(k)));
        out.writeByte(values.indexOf(obj as string));
        
    }
    deserialize(_sCtx: FastFutureContext, in_: DataIn): Status  {
        const ordinal = in_.readUByte();
        const keys = Object.keys(Status).filter(k => isNaN(parseInt(k)));
        if (ordinal < 0 || ordinal >= keys.length) throw new Error(`Invalid ordinal $ {
            ordinal
        }
        for enum Status`);
        return Status[keys[ordinal] as keyof typeof Status] as Status;
        
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
    serialize(sCtx_0: FastFutureContext, obj_1: AetherTypeDescriptor, _out_2: DataOut): void  {
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
    deserialize(sCtx_0: FastFutureContext, in__3: DataIn): AetherTypeDescriptor  {
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
    serialize(sCtx_4: FastFutureContext, obj_5: IPAddress, _out_6: DataOut): void  {
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
    deserialize(sCtx_4: FastFutureContext, in__7: DataIn): IPAddress  {
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
    serialize(sCtx_8: FastFutureContext, obj_9: Key, _out_10: DataOut): void  {
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
    deserialize(sCtx_8: FastFutureContext, in__11: DataIn): Key  {
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
    serialize(sCtx_12: FastFutureContext, obj_14: KeyAsymmetric, _out_15: DataOut): void  {
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
    deserialize(sCtx_13: FastFutureContext, in__16: DataIn): KeyAsymmetric  {
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
    serialize(sCtx_17: FastFutureContext, obj_19: KeyAsymmetricPrivate, _out_20: DataOut): void  {
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
    deserialize(sCtx_18: FastFutureContext, in__21: DataIn): KeyAsymmetricPrivate  {
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
    serialize(sCtx_22: FastFutureContext, obj_24: KeyAsymmetricPublic, _out_25: DataOut): void  {
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
    deserialize(sCtx_23: FastFutureContext, in__26: DataIn): KeyAsymmetricPublic  {
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
    serialize(sCtx_27: FastFutureContext, obj_29: KeySign, _out_30: DataOut): void  {
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
    deserialize(sCtx_28: FastFutureContext, in__31: DataIn): KeySign  {
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
    serialize(sCtx_32: FastFutureContext, obj_34: KeySignPrivate, _out_35: DataOut): void  {
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
    deserialize(sCtx_33: FastFutureContext, in__36: DataIn): KeySignPrivate  {
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
    serialize(sCtx_37: FastFutureContext, obj_39: KeySignPublic, _out_40: DataOut): void  {
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
    deserialize(sCtx_38: FastFutureContext, in__41: DataIn): KeySignPublic  {
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
    serialize(sCtx_42: FastFutureContext, obj_44: KeySymmetric, _out_45: DataOut): void  {
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
    deserialize(sCtx_43: FastFutureContext, in__46: DataIn): KeySymmetric  {
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
    serialize(sCtx_47: FastFutureContext, obj_48: PairKeys, _out_49: DataOut): void  {
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
    deserialize(sCtx_47: FastFutureContext, in__50: DataIn): PairKeys  {
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
    serialize(sCtx_51: FastFutureContext, obj_52: Sign, _out_53: DataOut): void  {
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
    deserialize(sCtx_51: FastFutureContext, in__54: DataIn): Sign  {
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
    serialize(sCtx_55: FastFutureContext, obj_56: Telemetry, _out_57: DataOut): void  {
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
    deserialize(sCtx_55: FastFutureContext, in__58: DataIn): Telemetry  {
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
    serialize(sCtx_59: FastFutureContext, obj_60: WorkProofConfig, _out_61: DataOut): void  {
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
    deserialize(sCtx_59: FastFutureContext, in__62: DataIn): WorkProofConfig  {
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
    serialize(sCtx_63: FastFutureContext, obj_64: AccessCheckPair, _out_65: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_63, obj_64.sourceUid, _out_65);
        FastMeta.META_UUID.serialize(sCtx_63, obj_64.targetUid, _out_65);
        
    }
    deserialize(sCtx_63: FastFutureContext, in__66: DataIn): AccessCheckPair  {
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
    serialize(sCtx_69: FastFutureContext, obj_70: AccessCheckResult, _out_71: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_69, obj_70.sourceUid, _out_71);
        FastMeta.META_UUID.serialize(sCtx_69, obj_70.targetUid, _out_71);
        _out_71.writeBoolean(obj_70.hasAccess);
        
    }
    deserialize(sCtx_69: FastFutureContext, in__72: DataIn): AccessCheckResult  {
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
    serialize(sCtx_76: FastFutureContext, obj_77: AccessGroup, _out_78: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_76, obj_77.owner, _out_78);
        _out_78.writeLong(obj_77.id);
        SerializerPackNumber.INSTANCE.put(_out_78, obj_77.data.length);
        for (const el_80 of obj_77.data)  {
            FastMeta.META_UUID.serialize(sCtx_76, el_80, _out_78);
            
        }
        
    }
    deserialize(sCtx_76: FastFutureContext, in__79: DataIn): AccessGroup  {
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
    serialize(sCtx_86: FastFutureContext, obj_87: AetherApiDefinition, _out_88: DataOut): void  {
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
    deserialize(sCtx_86: FastFutureContext, in__89: DataIn): AetherApiDefinition  {
        let id_91: bigint;
        let nameId_92: bigint;
        let methods_93: AetherMethodDescriptor[];
        let docId_94: bigint;
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
    serialize(sCtx_97: FastFutureContext, obj_98: AetherArgumentDescriptor, _out_99: DataOut): void  {
        let _mask: number = 0;
        if (obj_98.docId === null) _mask |= 1;
        _out_99.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_99, obj_98.nameId);
        SerializerPackNumber.INSTANCE.put(_out_99, obj_98.typeId);
        if (obj_98.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_99, obj_98.docId);
            
        }
        
    }
    deserialize(sCtx_97: FastFutureContext, in__100: DataIn): AetherArgumentDescriptor  {
        let nameId_101: bigint;
        let typeId_102: bigint;
        let docId_103: bigint;
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
    serialize(sCtx_104: FastFutureContext, obj_105: AetherArrayType, _out_106: DataOut): void  {
        let _mask: number = 0;
        if (obj_105.docId === null) _mask |= 1;
        _out_106.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_106, obj_105.id);
        if (obj_105.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_106, obj_105.docId);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_106, obj_105.elementTypeId);
        
    }
    deserialize(sCtx_104: FastFutureContext, in__107: DataIn): AetherArrayType  {
        let id_108: bigint;
        let docId_109: bigint;
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
    serialize(sCtx_111: FastFutureContext, obj_112: AetherArrayType, _out_113: DataOut): void  {
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
    deserialize(sCtx_111: FastFutureContext, in__114: DataIn): AetherArrayType  {
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
    serialize(sCtx_115: FastFutureContext, obj_116: AetherBaseType, _out_117: DataOut): void  {
        let _mask: number = 0;
        if (obj_116.docId === null) _mask |= 1;
        _out_117.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_117, obj_116.id);
        if (obj_116.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_117, obj_116.docId);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_117, obj_116.nameId);
        
    }
    deserialize(sCtx_115: FastFutureContext, in__118: DataIn): AetherBaseType  {
        let id_119: bigint;
        let docId_120: bigint;
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
    serialize(sCtx_122: FastFutureContext, obj_123: AetherBaseType, _out_124: DataOut): void  {
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
    deserialize(sCtx_122: FastFutureContext, in__125: DataIn): AetherBaseType  {
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
    serialize(sCtx_126: FastFutureContext, obj_127: AetherFieldDescriptor, _out_128: DataOut): void  {
        let _mask: number = 0;
        if (obj_127.docId === null) _mask |= 1;
        _out_128.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_128, obj_127.nameId);
        SerializerPackNumber.INSTANCE.put(_out_128, obj_127.typeId);
        if (obj_127.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_128, obj_127.docId);
            
        }
        
    }
    deserialize(sCtx_126: FastFutureContext, in__129: DataIn): AetherFieldDescriptor  {
        let nameId_130: bigint;
        let typeId_131: bigint;
        let docId_132: bigint;
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
    serialize(sCtx_133: FastFutureContext, obj_134: AetherMethodDescriptor, _out_135: DataOut): void  {
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
    deserialize(sCtx_133: FastFutureContext, in__136: DataIn): AetherMethodDescriptor  {
        let nameId_138: bigint;
        let args_139: AetherArgumentDescriptor[];
        let returnTypeId_140: bigint;
        let docId_141: bigint;
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
    serialize(sCtx_144: FastFutureContext, obj_145: AetherModuleDescriptor, _out_146: DataOut): void  {
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
    deserialize(sCtx_144: FastFutureContext, in__147: DataIn): AetherModuleDescriptor  {
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
    serialize(sCtx_170: FastFutureContext, obj_171: AetherNullableType, _out_172: DataOut): void  {
        let _mask: number = 0;
        if (obj_171.docId === null) _mask |= 1;
        _out_172.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_172, obj_171.id);
        if (obj_171.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_172, obj_171.docId);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_172, obj_171.wrappedTypeId);
        
    }
    deserialize(sCtx_170: FastFutureContext, in__173: DataIn): AetherNullableType  {
        let id_174: bigint;
        let docId_175: bigint;
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
    serialize(sCtx_177: FastFutureContext, obj_178: AetherNullableType, _out_179: DataOut): void  {
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
    deserialize(sCtx_177: FastFutureContext, in__180: DataIn): AetherNullableType  {
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
    serialize(sCtx_181: FastFutureContext, obj_182: AetherStreamType, _out_183: DataOut): void  {
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
    deserialize(sCtx_181: FastFutureContext, in__184: DataIn): AetherStreamType  {
        let id_185: bigint;
        let docId_186: bigint;
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
    serialize(sCtx_189: FastFutureContext, obj_190: AetherStreamType, _out_191: DataOut): void  {
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
    deserialize(sCtx_189: FastFutureContext, in__192: DataIn): AetherStreamType  {
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
    serialize(sCtx_193: FastFutureContext, obj_194: AetherStructDescriptor, _out_195: DataOut): void  {
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
    deserialize(sCtx_193: FastFutureContext, in__196: DataIn): AetherStructDescriptor  {
        let baseTypeId_198: bigint;
        let parentTypeId_199: bigint;
        let fields_200: AetherFieldDescriptor[];
        let docId_201: bigint;
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
export class ClientInfoMetaBodyImpl implements FastMetaType<ClientInfo>  {
    serialize(sCtx_204: FastFutureContext, obj_205: ClientInfo, _out_206: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_204, obj_205.uid, _out_206);
        Cloud.META.serialize(sCtx_204, obj_205.cloud, _out_206);
        
    }
    deserialize(sCtx_204: FastFutureContext, in__207: DataIn): ClientInfo  {
        let uid_208: UUID;
        let cloud_209: Cloud;
        uid_208 = FastMeta.META_UUID.deserialize(sCtx_204, in__207);
        cloud_209 = Cloud.META.deserialize(sCtx_204, in__207);
        return new ClientInfo(uid_208, cloud_209);
        
    }
    metaHashCode(obj: ClientInfo | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + Cloud.META.metaHashCode(obj.cloud);
        return hash | 0;
        
    }
    metaEquals(v1: ClientInfo | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientInfo)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!Cloud.META.metaEquals(v1.cloud, v2.cloud)) return false;
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
export class ClientStateForSaveMetaBodyImpl implements FastMetaType<ClientStateForSave>  {
    serialize(sCtx_210: FastFutureContext, obj_211: ClientStateForSave, _out_212: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_212, obj_211.registrationUri.length);
        for (const el_214 of obj_211.registrationUri)  {
            FastMeta.META_URI.serialize(sCtx_210, el_214, _out_212);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_212, obj_211.servers.length);
        for (const el_215 of obj_211.servers)  {
            ServerDescriptor.META.serialize(sCtx_210, el_215, _out_212);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_212, obj_211.clients.length);
        for (const el_216 of obj_211.clients)  {
            ClientInfo.META.serialize(sCtx_210, el_216, _out_212);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_212, obj_211.rootSigners.length);
        for (const el_217 of obj_211.rootSigners)  {
            Key.META.serialize(sCtx_210, el_217, _out_212);
            
        }
        CryptoLib.META.serialize(sCtx_210, obj_211.cryptoLib, _out_212);
        _out_212.writeLong(obj_211.pingDuration);
        FastMeta.META_UUID.serialize(sCtx_210, obj_211.parentUid, _out_212);
        _out_212.writeInt(obj_211.countServersForRegistration);
        _out_212.writeLong(obj_211.timeoutForConnectToRegistrationServer);
        FastMeta.META_UUID.serialize(sCtx_210, obj_211.uid, _out_212);
        FastMeta.META_UUID.serialize(sCtx_210, obj_211.alias, _out_212);
        Key.META.serialize(sCtx_210, obj_211.masterKey, _out_212);
        
    }
    deserialize(sCtx_210: FastFutureContext, in__213: DataIn): ClientStateForSave  {
        let registrationUri_218: URI[];
        let servers_219: ServerDescriptor[];
        let clients_220: ClientInfo[];
        let rootSigners_221: Key[];
        let cryptoLib_222: CryptoLib;
        let pingDuration_223: bigint;
        let parentUid_224: UUID;
        let countServersForRegistration_225: number;
        let timeoutForConnectToRegistrationServer_226: bigint;
        let uid_227: UUID;
        let alias_228: UUID;
        let masterKey_229: Key;
        const len_231 = Number(DeserializerPackNumber.INSTANCE.put(in__213));
        registrationUri_218 = new Array<URI>(len_231);
        for (let idx_230 = 0;
        idx_230 < len_231;
        idx_230++)  {
            registrationUri_218[idx_230] = FastMeta.META_URI.deserialize(sCtx_210, in__213);
            
        }
        const len_233 = Number(DeserializerPackNumber.INSTANCE.put(in__213));
        servers_219 = new Array<ServerDescriptor>(len_233);
        for (let idx_232 = 0;
        idx_232 < len_233;
        idx_232++)  {
            servers_219[idx_232] = ServerDescriptor.META.deserialize(sCtx_210, in__213);
            
        }
        const len_235 = Number(DeserializerPackNumber.INSTANCE.put(in__213));
        clients_220 = new Array<ClientInfo>(len_235);
        for (let idx_234 = 0;
        idx_234 < len_235;
        idx_234++)  {
            clients_220[idx_234] = ClientInfo.META.deserialize(sCtx_210, in__213);
            
        }
        const len_237 = Number(DeserializerPackNumber.INSTANCE.put(in__213));
        rootSigners_221 = new Array<Key>(len_237);
        for (let idx_236 = 0;
        idx_236 < len_237;
        idx_236++)  {
            rootSigners_221[idx_236] = Key.META.deserialize(sCtx_210, in__213);
            
        }
        cryptoLib_222 = CryptoLib.META.deserialize(sCtx_210, in__213);
        pingDuration_223 = in__213.readLong();
        parentUid_224 = FastMeta.META_UUID.deserialize(sCtx_210, in__213);
        countServersForRegistration_225 = in__213.readInt();
        timeoutForConnectToRegistrationServer_226 = in__213.readLong();
        uid_227 = FastMeta.META_UUID.deserialize(sCtx_210, in__213);
        alias_228 = FastMeta.META_UUID.deserialize(sCtx_210, in__213);
        masterKey_229 = Key.META.deserialize(sCtx_210, in__213);
        return new ClientStateForSave(registrationUri_218, servers_219, clients_220, rootSigners_221, cryptoLib_222, pingDuration_223, parentUid_224, countServersForRegistration_225, timeoutForConnectToRegistrationServer_226, uid_227, alias_228, masterKey_229);
        
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
    serialize(sCtx_238: FastFutureContext, obj_239: Cloud, _out_240: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_240, obj_239.data.length);
        for (const el_242 of obj_239.data)  {
            _out_240.writeShort(el_242);
            
        }
        
    }
    deserialize(sCtx_238: FastFutureContext, in__241: DataIn): Cloud  {
        let data_243: number[];
        const len_245 = Number(DeserializerPackNumber.INSTANCE.put(in__241));
        data_243 = new Array<number>(len_245);
        for (let idx_244 = 0;
        idx_244 < len_245;
        idx_244++)  {
            data_243[idx_244] = in__241.readShort();
            
        }
        return new Cloud(data_243);
        
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
export class CoderAndPortMetaBodyImpl implements FastMetaType<CoderAndPort>  {
    serialize(sCtx_246: FastFutureContext, obj_247: CoderAndPort, _out_248: DataOut): void  {
        AetherCodec.META.serialize(sCtx_246, obj_247.codec, _out_248);
        _out_248.writeShort(obj_247.port);
        
    }
    deserialize(sCtx_246: FastFutureContext, in__249: DataIn): CoderAndPort  {
        let codec_250: AetherCodec;
        let port_251: number;
        codec_250 = AetherCodec.META.deserialize(sCtx_246, in__249);
        port_251 = in__249.readShort();
        return new CoderAndPort(codec_250, port_251);
        
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
    serialize(sCtx_252: FastFutureContext, obj_253: FinishResult, _out_254: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_252, obj_253.alias, _out_254);
        FastMeta.META_UUID.serialize(sCtx_252, obj_253.uid, _out_254);
        Cloud.META.serialize(sCtx_252, obj_253.cloud, _out_254);
        
    }
    deserialize(sCtx_252: FastFutureContext, in__255: DataIn): FinishResult  {
        let alias_256: UUID;
        let uid_257: UUID;
        let cloud_258: Cloud;
        alias_256 = FastMeta.META_UUID.deserialize(sCtx_252, in__255);
        uid_257 = FastMeta.META_UUID.deserialize(sCtx_252, in__255);
        cloud_258 = Cloud.META.deserialize(sCtx_252, in__255);
        return new FinishResult(alias_256, uid_257, cloud_258);
        
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
    serialize(sCtx_259: FastFutureContext, obj_260: HydrogenCurvePrivate, _out_261: DataOut): void  {
        if (obj_260.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_260.data must be 32 but was $ {
            obj_260.data.length
        }
        `);
        _out_261.write(obj_260.data);
        
    }
    deserialize(sCtx_259: FastFutureContext, in__262: DataIn): HydrogenCurvePrivate  {
        let data_264: Uint8Array;
        const len_266 = 32;
        const bytes_267 = in__262.readBytes(len_266);
        data_264 = bytes_267;
        return new HydrogenCurvePrivate(data_264);
        
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
    serialize(sCtx_268: FastFutureContext, obj_269: HydrogenCurvePrivate, _out_270: DataOut): void  {
        const typeId = typeof (obj_269 as any).getAetherTypeId === 'function' ? obj_269.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenCurvePrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_270.writeByte(typeId);
        switch(typeId)  {
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_268, obj_269 as any as HydrogenCurvePrivate, _out_270);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_268, obj_269 as any as SodiumChacha20Poly1305, _out_270);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_268, obj_269 as any as HydrogenSecretBox, _out_270);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_268, obj_269 as any as HydrogenCurvePublic, _out_270);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_268, obj_269 as any as SodiumCurvePublic, _out_270);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_268, obj_269 as any as SodiumCurvePrivate, _out_270);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_268, obj_269 as any as SodiumSignPublic, _out_270);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_268, obj_269 as any as HydrogenSignPublic, _out_270);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_268, obj_269 as any as SodiumSignPrivate, _out_270);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_268, obj_269 as any as HydrogenSignPrivate, _out_270);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenCurvePrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_268: FastFutureContext, in__271: DataIn): HydrogenCurvePrivate  {
        const typeId = in__271.readUByte();
        switch(typeId)  {
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_268, in__271) as any as HydrogenCurvePrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_268, in__271) as any as HydrogenCurvePrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_268, in__271) as any as HydrogenCurvePrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_268, in__271) as any as HydrogenCurvePrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_268, in__271) as any as HydrogenCurvePrivate;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_268, in__271) as any as HydrogenCurvePrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_268, in__271) as any as HydrogenCurvePrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_268, in__271) as any as HydrogenCurvePrivate;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_268, in__271) as any as HydrogenCurvePrivate;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_268, in__271) as any as HydrogenCurvePrivate;
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
    serialize(sCtx_272: FastFutureContext, obj_273: HydrogenCurvePublic, _out_274: DataOut): void  {
        if (obj_273.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_273.data must be 32 but was $ {
            obj_273.data.length
        }
        `);
        _out_274.write(obj_273.data);
        
    }
    deserialize(sCtx_272: FastFutureContext, in__275: DataIn): HydrogenCurvePublic  {
        let data_277: Uint8Array;
        const len_279 = 32;
        const bytes_280 = in__275.readBytes(len_279);
        data_277 = bytes_280;
        return new HydrogenCurvePublic(data_277);
        
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
    serialize(sCtx_281: FastFutureContext, obj_282: HydrogenCurvePublic, _out_283: DataOut): void  {
        const typeId = typeof (obj_282 as any).getAetherTypeId === 'function' ? obj_282.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenCurvePublic' with invalid type id $ {
            typeId
        }
        `);
        _out_283.writeByte(typeId);
        switch(typeId)  {
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_281, obj_282 as any as HydrogenCurvePublic, _out_283);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_281, obj_282 as any as SodiumChacha20Poly1305, _out_283);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_281, obj_282 as any as HydrogenSecretBox, _out_283);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_281, obj_282 as any as SodiumCurvePublic, _out_283);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_281, obj_282 as any as HydrogenCurvePrivate, _out_283);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_281, obj_282 as any as SodiumCurvePrivate, _out_283);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_281, obj_282 as any as SodiumSignPublic, _out_283);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_281, obj_282 as any as HydrogenSignPublic, _out_283);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_281, obj_282 as any as SodiumSignPrivate, _out_283);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_281, obj_282 as any as HydrogenSignPrivate, _out_283);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenCurvePublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_281: FastFutureContext, in__284: DataIn): HydrogenCurvePublic  {
        const typeId = in__284.readUByte();
        switch(typeId)  {
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_281, in__284) as any as HydrogenCurvePublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_281, in__284) as any as HydrogenCurvePublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_281, in__284) as any as HydrogenCurvePublic;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_281, in__284) as any as HydrogenCurvePublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_281, in__284) as any as HydrogenCurvePublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_281, in__284) as any as HydrogenCurvePublic;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_281, in__284) as any as HydrogenCurvePublic;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_281, in__284) as any as HydrogenCurvePublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_281, in__284) as any as HydrogenCurvePublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_281, in__284) as any as HydrogenCurvePublic;
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
    serialize(sCtx_285: FastFutureContext, obj_286: HydrogenSecretBox, _out_287: DataOut): void  {
        if (obj_286.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_286.data must be 32 but was $ {
            obj_286.data.length
        }
        `);
        _out_287.write(obj_286.data);
        
    }
    deserialize(sCtx_285: FastFutureContext, in__288: DataIn): HydrogenSecretBox  {
        let data_290: Uint8Array;
        const len_292 = 32;
        const bytes_293 = in__288.readBytes(len_292);
        data_290 = bytes_293;
        return new HydrogenSecretBox(data_290);
        
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
    serialize(sCtx_294: FastFutureContext, obj_295: HydrogenSecretBox, _out_296: DataOut): void  {
        const typeId = typeof (obj_295 as any).getAetherTypeId === 'function' ? obj_295.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenSecretBox' with invalid type id $ {
            typeId
        }
        `);
        _out_296.writeByte(typeId);
        switch(typeId)  {
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_294, obj_295 as any as HydrogenSecretBox, _out_296);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_294, obj_295 as any as SodiumChacha20Poly1305, _out_296);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_294, obj_295 as any as HydrogenCurvePublic, _out_296);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_294, obj_295 as any as SodiumCurvePublic, _out_296);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_294, obj_295 as any as HydrogenCurvePrivate, _out_296);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_294, obj_295 as any as SodiumCurvePrivate, _out_296);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_294, obj_295 as any as SodiumSignPublic, _out_296);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_294, obj_295 as any as HydrogenSignPublic, _out_296);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_294, obj_295 as any as SodiumSignPrivate, _out_296);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_294, obj_295 as any as HydrogenSignPrivate, _out_296);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenSecretBox' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_294: FastFutureContext, in__297: DataIn): HydrogenSecretBox  {
        const typeId = in__297.readUByte();
        switch(typeId)  {
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_294, in__297) as any as HydrogenSecretBox;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_294, in__297) as any as HydrogenSecretBox;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_294, in__297) as any as HydrogenSecretBox;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_294, in__297) as any as HydrogenSecretBox;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_294, in__297) as any as HydrogenSecretBox;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_294, in__297) as any as HydrogenSecretBox;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_294, in__297) as any as HydrogenSecretBox;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_294, in__297) as any as HydrogenSecretBox;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_294, in__297) as any as HydrogenSecretBox;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_294, in__297) as any as HydrogenSecretBox;
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
    serialize(sCtx_298: FastFutureContext, obj_299: HydrogenSignPrivate, _out_300: DataOut): void  {
        if (obj_299.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_299.data must be 64 but was $ {
            obj_299.data.length
        }
        `);
        _out_300.write(obj_299.data);
        
    }
    deserialize(sCtx_298: FastFutureContext, in__301: DataIn): HydrogenSignPrivate  {
        let data_303: Uint8Array;
        const len_305 = 64;
        const bytes_306 = in__301.readBytes(len_305);
        data_303 = bytes_306;
        return new HydrogenSignPrivate(data_303);
        
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
    serialize(sCtx_307: FastFutureContext, obj_308: HydrogenSignPrivate, _out_309: DataOut): void  {
        const typeId = typeof (obj_308 as any).getAetherTypeId === 'function' ? obj_308.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenSignPrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_309.writeByte(typeId);
        switch(typeId)  {
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_307, obj_308 as any as HydrogenSignPrivate, _out_309);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_307, obj_308 as any as SodiumChacha20Poly1305, _out_309);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_307, obj_308 as any as HydrogenSecretBox, _out_309);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_307, obj_308 as any as HydrogenCurvePublic, _out_309);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_307, obj_308 as any as SodiumCurvePublic, _out_309);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_307, obj_308 as any as HydrogenCurvePrivate, _out_309);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_307, obj_308 as any as SodiumCurvePrivate, _out_309);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_307, obj_308 as any as SodiumSignPublic, _out_309);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_307, obj_308 as any as HydrogenSignPublic, _out_309);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_307, obj_308 as any as SodiumSignPrivate, _out_309);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenSignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_307: FastFutureContext, in__310: DataIn): HydrogenSignPrivate  {
        const typeId = in__310.readUByte();
        switch(typeId)  {
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_307, in__310) as any as HydrogenSignPrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_307, in__310) as any as HydrogenSignPrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_307, in__310) as any as HydrogenSignPrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_307, in__310) as any as HydrogenSignPrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_307, in__310) as any as HydrogenSignPrivate;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_307, in__310) as any as HydrogenSignPrivate;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_307, in__310) as any as HydrogenSignPrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_307, in__310) as any as HydrogenSignPrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_307, in__310) as any as HydrogenSignPrivate;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_307, in__310) as any as HydrogenSignPrivate;
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
    serialize(sCtx_311: FastFutureContext, obj_312: HydrogenSignPublic, _out_313: DataOut): void  {
        if (obj_312.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_312.data must be 32 but was $ {
            obj_312.data.length
        }
        `);
        _out_313.write(obj_312.data);
        
    }
    deserialize(sCtx_311: FastFutureContext, in__314: DataIn): HydrogenSignPublic  {
        let data_316: Uint8Array;
        const len_318 = 32;
        const bytes_319 = in__314.readBytes(len_318);
        data_316 = bytes_319;
        return new HydrogenSignPublic(data_316);
        
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
    serialize(sCtx_320: FastFutureContext, obj_321: HydrogenSignPublic, _out_322: DataOut): void  {
        const typeId = typeof (obj_321 as any).getAetherTypeId === 'function' ? obj_321.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenSignPublic' with invalid type id $ {
            typeId
        }
        `);
        _out_322.writeByte(typeId);
        switch(typeId)  {
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_320, obj_321 as any as HydrogenSignPublic, _out_322);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_320, obj_321 as any as SodiumChacha20Poly1305, _out_322);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_320, obj_321 as any as HydrogenSecretBox, _out_322);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_320, obj_321 as any as HydrogenCurvePublic, _out_322);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_320, obj_321 as any as SodiumCurvePublic, _out_322);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_320, obj_321 as any as HydrogenCurvePrivate, _out_322);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_320, obj_321 as any as SodiumCurvePrivate, _out_322);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_320, obj_321 as any as SodiumSignPublic, _out_322);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_320, obj_321 as any as SodiumSignPrivate, _out_322);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_320, obj_321 as any as HydrogenSignPrivate, _out_322);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenSignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_320: FastFutureContext, in__323: DataIn): HydrogenSignPublic  {
        const typeId = in__323.readUByte();
        switch(typeId)  {
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_320, in__323) as any as HydrogenSignPublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_320, in__323) as any as HydrogenSignPublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_320, in__323) as any as HydrogenSignPublic;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_320, in__323) as any as HydrogenSignPublic;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_320, in__323) as any as HydrogenSignPublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_320, in__323) as any as HydrogenSignPublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_320, in__323) as any as HydrogenSignPublic;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_320, in__323) as any as HydrogenSignPublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_320, in__323) as any as HydrogenSignPublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_320, in__323) as any as HydrogenSignPublic;
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
    serialize(sCtx_324: FastFutureContext, obj_325: IPAddressAndPorts, _out_326: DataOut): void  {
        IPAddress.META.serialize(sCtx_324, obj_325.address, _out_326);
        SerializerPackNumber.INSTANCE.put(_out_326, obj_325.coderAndPorts.length);
        for (const el_328 of obj_325.coderAndPorts)  {
            CoderAndPort.META.serialize(sCtx_324, el_328, _out_326);
            
        }
        
    }
    deserialize(sCtx_324: FastFutureContext, in__327: DataIn): IPAddressAndPorts  {
        let address_329: IPAddress;
        let coderAndPorts_330: CoderAndPort[];
        address_329 = IPAddress.META.deserialize(sCtx_324, in__327);
        const len_332 = Number(DeserializerPackNumber.INSTANCE.put(in__327));
        coderAndPorts_330 = new Array<CoderAndPort>(len_332);
        for (let idx_331 = 0;
        idx_331 < len_332;
        idx_331++)  {
            coderAndPorts_330[idx_331] = CoderAndPort.META.deserialize(sCtx_324, in__327);
            
        }
        return new IPAddressAndPorts(address_329, coderAndPorts_330);
        
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
    serialize(sCtx_333: FastFutureContext, obj_334: IPAddressAndPortsList, _out_335: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_335, obj_334.addresses.length);
        for (const el_337 of obj_334.addresses)  {
            IPAddressAndPorts.META.serialize(sCtx_333, el_337, _out_335);
            
        }
        
    }
    deserialize(sCtx_333: FastFutureContext, in__336: DataIn): IPAddressAndPortsList  {
        let addresses_338: IPAddressAndPorts[];
        const len_340 = Number(DeserializerPackNumber.INSTANCE.put(in__336));
        addresses_338 = new Array<IPAddressAndPorts>(len_340);
        for (let idx_339 = 0;
        idx_339 < len_340;
        idx_339++)  {
            addresses_338[idx_339] = IPAddressAndPorts.META.deserialize(sCtx_333, in__336);
            
        }
        return new IPAddressAndPortsList(addresses_338);
        
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
    serialize(sCtx_341: FastFutureContext, obj_342: IPAddressV4, _out_343: DataOut): void  {
        if (obj_342.data.length !== 4) throw new Error(`IllegalStateException: Array length for obj_342.data must be 4 but was $ {
            obj_342.data.length
        }
        `);
        _out_343.write(obj_342.data);
        
    }
    deserialize(sCtx_341: FastFutureContext, in__344: DataIn): IPAddressV4  {
        let data_346: Uint8Array;
        const len_348 = 4;
        const bytes_349 = in__344.readBytes(len_348);
        data_346 = bytes_349;
        return new IPAddressV4(data_346);
        
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
    serialize(sCtx_350: FastFutureContext, obj_351: IPAddressV4, _out_352: DataOut): void  {
        const typeId = typeof (obj_351 as any).getAetherTypeId === 'function' ? obj_351.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'IPAddressV4' with invalid type id $ {
            typeId
        }
        `);
        _out_352.writeByte(typeId);
        switch(typeId)  {
            case 1: (IPAddressV4 as any).META_BODY.serialize(sCtx_350, obj_351 as any as IPAddressV4, _out_352);
            break;
            case 2: (IPAddressV6 as any).META_BODY.serialize(sCtx_350, obj_351 as any as IPAddressV6, _out_352);
            break;
            case 3: (IPAddressWeb as any).META_BODY.serialize(sCtx_350, obj_351 as any as IPAddressWeb, _out_352);
            break;
            default: throw new Error(`Cannot serialize 'IPAddressV4' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_350: FastFutureContext, in__353: DataIn): IPAddressV4  {
        const typeId = in__353.readUByte();
        switch(typeId)  {
            case 1: return (IPAddressV4 as any).META_BODY.deserialize(sCtx_350, in__353) as any as IPAddressV4;
            case 2: return (IPAddressV6 as any).META_BODY.deserialize(sCtx_350, in__353) as any as IPAddressV4;
            case 3: return (IPAddressWeb as any).META_BODY.deserialize(sCtx_350, in__353) as any as IPAddressV4;
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
    serialize(sCtx_354: FastFutureContext, obj_355: IPAddressV6, _out_356: DataOut): void  {
        if (obj_355.data.length !== 6) throw new Error(`IllegalStateException: Array length for obj_355.data must be 6 but was $ {
            obj_355.data.length
        }
        `);
        _out_356.write(obj_355.data);
        
    }
    deserialize(sCtx_354: FastFutureContext, in__357: DataIn): IPAddressV6  {
        let data_359: Uint8Array;
        const len_361 = 6;
        const bytes_362 = in__357.readBytes(len_361);
        data_359 = bytes_362;
        return new IPAddressV6(data_359);
        
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
    serialize(sCtx_363: FastFutureContext, obj_364: IPAddressV6, _out_365: DataOut): void  {
        const typeId = typeof (obj_364 as any).getAetherTypeId === 'function' ? obj_364.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'IPAddressV6' with invalid type id $ {
            typeId
        }
        `);
        _out_365.writeByte(typeId);
        switch(typeId)  {
            case 2: (IPAddressV6 as any).META_BODY.serialize(sCtx_363, obj_364 as any as IPAddressV6, _out_365);
            break;
            case 1: (IPAddressV4 as any).META_BODY.serialize(sCtx_363, obj_364 as any as IPAddressV4, _out_365);
            break;
            case 3: (IPAddressWeb as any).META_BODY.serialize(sCtx_363, obj_364 as any as IPAddressWeb, _out_365);
            break;
            default: throw new Error(`Cannot serialize 'IPAddressV6' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_363: FastFutureContext, in__366: DataIn): IPAddressV6  {
        const typeId = in__366.readUByte();
        switch(typeId)  {
            case 2: return (IPAddressV6 as any).META_BODY.deserialize(sCtx_363, in__366) as any as IPAddressV6;
            case 1: return (IPAddressV4 as any).META_BODY.deserialize(sCtx_363, in__366) as any as IPAddressV6;
            case 3: return (IPAddressWeb as any).META_BODY.deserialize(sCtx_363, in__366) as any as IPAddressV6;
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
    serialize(sCtx_367: FastFutureContext, obj_368: IPAddressWeb, _out_369: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_369, obj_368.data.length);
        _out_369.write(obj_368.data);
        
    }
    deserialize(sCtx_367: FastFutureContext, in__370: DataIn): IPAddressWeb  {
        let data_372: Uint8Array;
        const len_374 = Number(DeserializerPackNumber.INSTANCE.put(in__370));
        const bytes_375 = in__370.readBytes(len_374);
        data_372 = bytes_375;
        return new IPAddressWeb(data_372);
        
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
    serialize(sCtx_376: FastFutureContext, obj_377: IPAddressWeb, _out_378: DataOut): void  {
        const typeId = typeof (obj_377 as any).getAetherTypeId === 'function' ? obj_377.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'IPAddressWeb' with invalid type id $ {
            typeId
        }
        `);
        _out_378.writeByte(typeId);
        switch(typeId)  {
            case 3: (IPAddressWeb as any).META_BODY.serialize(sCtx_376, obj_377 as any as IPAddressWeb, _out_378);
            break;
            case 1: (IPAddressV4 as any).META_BODY.serialize(sCtx_376, obj_377 as any as IPAddressV4, _out_378);
            break;
            case 2: (IPAddressV6 as any).META_BODY.serialize(sCtx_376, obj_377 as any as IPAddressV6, _out_378);
            break;
            default: throw new Error(`Cannot serialize 'IPAddressWeb' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_376: FastFutureContext, in__379: DataIn): IPAddressWeb  {
        const typeId = in__379.readUByte();
        switch(typeId)  {
            case 3: return (IPAddressWeb as any).META_BODY.deserialize(sCtx_376, in__379) as any as IPAddressWeb;
            case 1: return (IPAddressV4 as any).META_BODY.deserialize(sCtx_376, in__379) as any as IPAddressWeb;
            case 2: return (IPAddressV6 as any).META_BODY.deserialize(sCtx_376, in__379) as any as IPAddressWeb;
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
export class MessageMetaBodyImpl implements FastMetaType<Message>  {
    serialize(sCtx_380: FastFutureContext, obj_381: Message, _out_382: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_380, obj_381.uid, _out_382);
        SerializerPackNumber.INSTANCE.put(_out_382, obj_381.data.length);
        _out_382.write(obj_381.data);
        
    }
    deserialize(sCtx_380: FastFutureContext, in__383: DataIn): Message  {
        let uid_385: UUID;
        let data_386: Uint8Array;
        uid_385 = FastMeta.META_UUID.deserialize(sCtx_380, in__383);
        const len_388 = Number(DeserializerPackNumber.INSTANCE.put(in__383));
        const bytes_389 = in__383.readBytes(len_388);
        data_386 = bytes_389;
        return new Message(uid_385, data_386);
        
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
export class MoneyOperationMetaBodyImpl implements FastMetaType<MoneyOperation>  {
    serialize(sCtx_390: FastFutureContext, obj_391: MoneyOperation, _out_392: DataOut): void  {
        _out_392.writeLong(obj_391.id);
        FastMeta.META_UUID.serialize(sCtx_390, obj_391.from, _out_392);
        FastMeta.META_UUID.serialize(sCtx_390, obj_391.to, _out_392);
        _out_392.writeLong(obj_391.amount);
        _out_392.writeLong(obj_391.time);
        _out_392.writeBoolean(obj_391.credit);
        Status.META.serialize(sCtx_390, obj_391.status, _out_392);
        
    }
    deserialize(sCtx_390: FastFutureContext, in__393: DataIn): MoneyOperation  {
        let id_394: bigint;
        let from_395: UUID;
        let to_396: UUID;
        let amount_397: bigint;
        let time_398: bigint;
        let credit_399: boolean;
        let status_400: Status;
        id_394 = in__393.readLong();
        from_395 = FastMeta.META_UUID.deserialize(sCtx_390, in__393);
        to_396 = FastMeta.META_UUID.deserialize(sCtx_390, in__393);
        amount_397 = in__393.readLong();
        time_398 = in__393.readLong();
        credit_399 = in__393.readBoolean();
        status_400 = Status.META.deserialize(sCtx_390, in__393);
        return new MoneyOperation(id_394, from_395, to_396, amount_397, time_398, credit_399, status_400);
        
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
    serialize(sCtx_401: FastFutureContext, obj_402: PairKeysAsym, _out_403: DataOut): void  {
        Key.META.serialize(sCtx_401, obj_402.privateKey, _out_403);
        Key.META.serialize(sCtx_401, obj_402.publicKey, _out_403);
        
    }
    deserialize(sCtx_401: FastFutureContext, in__404: DataIn): PairKeysAsym  {
        let privateKey_405: Key;
        let publicKey_406: Key;
        privateKey_405 = Key.META.deserialize(sCtx_401, in__404);
        publicKey_406 = Key.META.deserialize(sCtx_401, in__404);
        return new PairKeysAsym(privateKey_405, publicKey_406);
        
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
    serialize(sCtx_407: FastFutureContext, obj_408: PairKeysAsym, _out_409: DataOut): void  {
        const typeId = typeof (obj_408 as any).getAetherTypeId === 'function' ? obj_408.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeysAsym' with invalid type id $ {
            typeId
        }
        `);
        _out_409.writeByte(typeId);
        switch(typeId)  {
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_407, obj_408 as any as PairKeysAsym, _out_409);
            break;
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_407, obj_408 as any as PairKeysSign, _out_409);
            break;
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_407, obj_408 as any as PairKeysAsymSigned, _out_409);
            break;
            default: throw new Error(`Cannot serialize 'PairKeysAsym' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_407: FastFutureContext, in__410: DataIn): PairKeysAsym  {
        const typeId = in__410.readUByte();
        switch(typeId)  {
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_407, in__410) as any as PairKeysAsym;
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_407, in__410) as any as PairKeysAsym;
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_407, in__410) as any as PairKeysAsym;
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
    serialize(sCtx_411: FastFutureContext, obj_412: PairKeysAsymSigned, _out_413: DataOut): void  {
        Key.META.serialize(sCtx_411, obj_412.privateKey, _out_413);
        SignedKey.META.serialize(sCtx_411, obj_412.publicKey, _out_413);
        
    }
    deserialize(sCtx_411: FastFutureContext, in__414: DataIn): PairKeysAsymSigned  {
        let privateKey_415: Key;
        let publicKey_416: SignedKey;
        privateKey_415 = Key.META.deserialize(sCtx_411, in__414);
        publicKey_416 = SignedKey.META.deserialize(sCtx_411, in__414);
        return new PairKeysAsymSigned(privateKey_415, publicKey_416);
        
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
    serialize(sCtx_417: FastFutureContext, obj_418: PairKeysAsymSigned, _out_419: DataOut): void  {
        const typeId = typeof (obj_418 as any).getAetherTypeId === 'function' ? obj_418.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeysAsymSigned' with invalid type id $ {
            typeId
        }
        `);
        _out_419.writeByte(typeId);
        switch(typeId)  {
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_417, obj_418 as any as PairKeysAsymSigned, _out_419);
            break;
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_417, obj_418 as any as PairKeysSign, _out_419);
            break;
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_417, obj_418 as any as PairKeysAsym, _out_419);
            break;
            default: throw new Error(`Cannot serialize 'PairKeysAsymSigned' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_417: FastFutureContext, in__420: DataIn): PairKeysAsymSigned  {
        const typeId = in__420.readUByte();
        switch(typeId)  {
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_417, in__420) as any as PairKeysAsymSigned;
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_417, in__420) as any as PairKeysAsymSigned;
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_417, in__420) as any as PairKeysAsymSigned;
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
    serialize(sCtx_421: FastFutureContext, obj_422: PairKeysSign, _out_423: DataOut): void  {
        Key.META.serialize(sCtx_421, obj_422.privateKey, _out_423);
        Key.META.serialize(sCtx_421, obj_422.publicKey, _out_423);
        
    }
    deserialize(sCtx_421: FastFutureContext, in__424: DataIn): PairKeysSign  {
        let privateKey_425: Key;
        let publicKey_426: Key;
        privateKey_425 = Key.META.deserialize(sCtx_421, in__424);
        publicKey_426 = Key.META.deserialize(sCtx_421, in__424);
        return new PairKeysSign(privateKey_425, publicKey_426);
        
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
    serialize(sCtx_427: FastFutureContext, obj_428: PairKeysSign, _out_429: DataOut): void  {
        const typeId = typeof (obj_428 as any).getAetherTypeId === 'function' ? obj_428.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeysSign' with invalid type id $ {
            typeId
        }
        `);
        _out_429.writeByte(typeId);
        switch(typeId)  {
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_427, obj_428 as any as PairKeysSign, _out_429);
            break;
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_427, obj_428 as any as PairKeysAsym, _out_429);
            break;
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_427, obj_428 as any as PairKeysAsymSigned, _out_429);
            break;
            default: throw new Error(`Cannot serialize 'PairKeysSign' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_427: FastFutureContext, in__430: DataIn): PairKeysSign  {
        const typeId = in__430.readUByte();
        switch(typeId)  {
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_427, in__430) as any as PairKeysSign;
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_427, in__430) as any as PairKeysSign;
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_427, in__430) as any as PairKeysSign;
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
    serialize(sCtx_431: FastFutureContext, obj_432: ServerDescriptor, _out_433: DataOut): void  {
        _out_433.writeShort(obj_432.id);
        IPAddressAndPortsList.META.serialize(sCtx_431, obj_432.ipAddress, _out_433);
        
    }
    deserialize(sCtx_431: FastFutureContext, in__434: DataIn): ServerDescriptor  {
        let id_435: number;
        let ipAddress_436: IPAddressAndPortsList;
        id_435 = in__434.readShort();
        ipAddress_436 = IPAddressAndPortsList.META.deserialize(sCtx_431, in__434);
        return new ServerDescriptor(id_435, ipAddress_436);
        
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
export class SignAE_ED25519MetaBodyImpl implements FastMetaType<SignAE_ED25519>  {
    serialize(sCtx_437: FastFutureContext, obj_438: SignAE_ED25519, _out_439: DataOut): void  {
        if (obj_438.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_438.data must be 64 but was $ {
            obj_438.data.length
        }
        `);
        _out_439.write(obj_438.data);
        
    }
    deserialize(sCtx_437: FastFutureContext, in__440: DataIn): SignAE_ED25519  {
        let data_442: Uint8Array;
        const len_444 = 64;
        const bytes_445 = in__440.readBytes(len_444);
        data_442 = bytes_445;
        return new SignAE_ED25519(data_442);
        
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
    serialize(sCtx_446: FastFutureContext, obj_447: SignAE_ED25519, _out_448: DataOut): void  {
        const typeId = typeof (obj_447 as any).getAetherTypeId === 'function' ? obj_447.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SignAE_ED25519' with invalid type id $ {
            typeId
        }
        `);
        _out_448.writeByte(typeId);
        switch(typeId)  {
            case 1: (SignAE_ED25519 as any).META_BODY.serialize(sCtx_446, obj_447 as any as SignAE_ED25519, _out_448);
            break;
            case 2: (SignHYDROGEN as any).META_BODY.serialize(sCtx_446, obj_447 as any as SignHYDROGEN, _out_448);
            break;
            default: throw new Error(`Cannot serialize 'SignAE_ED25519' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_446: FastFutureContext, in__449: DataIn): SignAE_ED25519  {
        const typeId = in__449.readUByte();
        switch(typeId)  {
            case 1: return (SignAE_ED25519 as any).META_BODY.deserialize(sCtx_446, in__449) as any as SignAE_ED25519;
            case 2: return (SignHYDROGEN as any).META_BODY.deserialize(sCtx_446, in__449) as any as SignAE_ED25519;
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
    serialize(sCtx_450: FastFutureContext, obj_451: SignedKey, _out_452: DataOut): void  {
        Key.META.serialize(sCtx_450, obj_451.key, _out_452);
        Sign.META.serialize(sCtx_450, obj_451.sign, _out_452);
        
    }
    deserialize(sCtx_450: FastFutureContext, in__453: DataIn): SignedKey  {
        let _key_454: Key;
        let sign_455: Sign;
        _key_454 = Key.META.deserialize(sCtx_450, in__453);
        sign_455 = Sign.META.deserialize(sCtx_450, in__453);
        return new SignedKey(_key_454, sign_455);
        
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
    serialize(sCtx_456: FastFutureContext, obj_457: SignHYDROGEN, _out_458: DataOut): void  {
        if (obj_457.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_457.data must be 64 but was $ {
            obj_457.data.length
        }
        `);
        _out_458.write(obj_457.data);
        
    }
    deserialize(sCtx_456: FastFutureContext, in__459: DataIn): SignHYDROGEN  {
        let data_461: Uint8Array;
        const len_463 = 64;
        const bytes_464 = in__459.readBytes(len_463);
        data_461 = bytes_464;
        return new SignHYDROGEN(data_461);
        
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
    serialize(sCtx_465: FastFutureContext, obj_466: SignHYDROGEN, _out_467: DataOut): void  {
        const typeId = typeof (obj_466 as any).getAetherTypeId === 'function' ? obj_466.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SignHYDROGEN' with invalid type id $ {
            typeId
        }
        `);
        _out_467.writeByte(typeId);
        switch(typeId)  {
            case 2: (SignHYDROGEN as any).META_BODY.serialize(sCtx_465, obj_466 as any as SignHYDROGEN, _out_467);
            break;
            case 1: (SignAE_ED25519 as any).META_BODY.serialize(sCtx_465, obj_466 as any as SignAE_ED25519, _out_467);
            break;
            default: throw new Error(`Cannot serialize 'SignHYDROGEN' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_465: FastFutureContext, in__468: DataIn): SignHYDROGEN  {
        const typeId = in__468.readUByte();
        switch(typeId)  {
            case 2: return (SignHYDROGEN as any).META_BODY.deserialize(sCtx_465, in__468) as any as SignHYDROGEN;
            case 1: return (SignAE_ED25519 as any).META_BODY.deserialize(sCtx_465, in__468) as any as SignHYDROGEN;
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
    serialize(sCtx_469: FastFutureContext, obj_470: SodiumChacha20Poly1305, _out_471: DataOut): void  {
        if (obj_470.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_470.data must be 32 but was $ {
            obj_470.data.length
        }
        `);
        _out_471.write(obj_470.data);
        
    }
    deserialize(sCtx_469: FastFutureContext, in__472: DataIn): SodiumChacha20Poly1305  {
        let data_474: Uint8Array;
        const len_476 = 32;
        const bytes_477 = in__472.readBytes(len_476);
        data_474 = bytes_477;
        return new SodiumChacha20Poly1305(data_474);
        
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
    serialize(sCtx_478: FastFutureContext, obj_479: SodiumChacha20Poly1305, _out_480: DataOut): void  {
        const typeId = typeof (obj_479 as any).getAetherTypeId === 'function' ? obj_479.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumChacha20Poly1305' with invalid type id $ {
            typeId
        }
        `);
        _out_480.writeByte(typeId);
        switch(typeId)  {
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_478, obj_479 as any as SodiumChacha20Poly1305, _out_480);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_478, obj_479 as any as HydrogenSecretBox, _out_480);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_478, obj_479 as any as HydrogenCurvePublic, _out_480);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_478, obj_479 as any as SodiumCurvePublic, _out_480);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_478, obj_479 as any as HydrogenCurvePrivate, _out_480);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_478, obj_479 as any as SodiumCurvePrivate, _out_480);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_478, obj_479 as any as SodiumSignPublic, _out_480);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_478, obj_479 as any as HydrogenSignPublic, _out_480);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_478, obj_479 as any as SodiumSignPrivate, _out_480);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_478, obj_479 as any as HydrogenSignPrivate, _out_480);
            break;
            default: throw new Error(`Cannot serialize 'SodiumChacha20Poly1305' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_478: FastFutureContext, in__481: DataIn): SodiumChacha20Poly1305  {
        const typeId = in__481.readUByte();
        switch(typeId)  {
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_478, in__481) as any as SodiumChacha20Poly1305;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_478, in__481) as any as SodiumChacha20Poly1305;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_478, in__481) as any as SodiumChacha20Poly1305;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_478, in__481) as any as SodiumChacha20Poly1305;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_478, in__481) as any as SodiumChacha20Poly1305;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_478, in__481) as any as SodiumChacha20Poly1305;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_478, in__481) as any as SodiumChacha20Poly1305;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_478, in__481) as any as SodiumChacha20Poly1305;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_478, in__481) as any as SodiumChacha20Poly1305;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_478, in__481) as any as SodiumChacha20Poly1305;
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
    serialize(sCtx_482: FastFutureContext, obj_483: SodiumCurvePrivate, _out_484: DataOut): void  {
        if (obj_483.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_483.data must be 32 but was $ {
            obj_483.data.length
        }
        `);
        _out_484.write(obj_483.data);
        
    }
    deserialize(sCtx_482: FastFutureContext, in__485: DataIn): SodiumCurvePrivate  {
        let data_487: Uint8Array;
        const len_489 = 32;
        const bytes_490 = in__485.readBytes(len_489);
        data_487 = bytes_490;
        return new SodiumCurvePrivate(data_487);
        
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
    serialize(sCtx_491: FastFutureContext, obj_492: SodiumCurvePrivate, _out_493: DataOut): void  {
        const typeId = typeof (obj_492 as any).getAetherTypeId === 'function' ? obj_492.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumCurvePrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_493.writeByte(typeId);
        switch(typeId)  {
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_491, obj_492 as any as SodiumCurvePrivate, _out_493);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_491, obj_492 as any as SodiumChacha20Poly1305, _out_493);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_491, obj_492 as any as HydrogenSecretBox, _out_493);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_491, obj_492 as any as HydrogenCurvePublic, _out_493);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_491, obj_492 as any as SodiumCurvePublic, _out_493);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_491, obj_492 as any as HydrogenCurvePrivate, _out_493);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_491, obj_492 as any as SodiumSignPublic, _out_493);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_491, obj_492 as any as HydrogenSignPublic, _out_493);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_491, obj_492 as any as SodiumSignPrivate, _out_493);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_491, obj_492 as any as HydrogenSignPrivate, _out_493);
            break;
            default: throw new Error(`Cannot serialize 'SodiumCurvePrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_491: FastFutureContext, in__494: DataIn): SodiumCurvePrivate  {
        const typeId = in__494.readUByte();
        switch(typeId)  {
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_491, in__494) as any as SodiumCurvePrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_491, in__494) as any as SodiumCurvePrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_491, in__494) as any as SodiumCurvePrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_491, in__494) as any as SodiumCurvePrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_491, in__494) as any as SodiumCurvePrivate;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_491, in__494) as any as SodiumCurvePrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_491, in__494) as any as SodiumCurvePrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_491, in__494) as any as SodiumCurvePrivate;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_491, in__494) as any as SodiumCurvePrivate;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_491, in__494) as any as SodiumCurvePrivate;
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
    serialize(sCtx_495: FastFutureContext, obj_496: SodiumCurvePublic, _out_497: DataOut): void  {
        if (obj_496.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_496.data must be 32 but was $ {
            obj_496.data.length
        }
        `);
        _out_497.write(obj_496.data);
        
    }
    deserialize(sCtx_495: FastFutureContext, in__498: DataIn): SodiumCurvePublic  {
        let data_500: Uint8Array;
        const len_502 = 32;
        const bytes_503 = in__498.readBytes(len_502);
        data_500 = bytes_503;
        return new SodiumCurvePublic(data_500);
        
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
    serialize(sCtx_504: FastFutureContext, obj_505: SodiumCurvePublic, _out_506: DataOut): void  {
        const typeId = typeof (obj_505 as any).getAetherTypeId === 'function' ? obj_505.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumCurvePublic' with invalid type id $ {
            typeId
        }
        `);
        _out_506.writeByte(typeId);
        switch(typeId)  {
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_504, obj_505 as any as SodiumCurvePublic, _out_506);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_504, obj_505 as any as SodiumChacha20Poly1305, _out_506);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_504, obj_505 as any as HydrogenSecretBox, _out_506);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_504, obj_505 as any as HydrogenCurvePublic, _out_506);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_504, obj_505 as any as HydrogenCurvePrivate, _out_506);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_504, obj_505 as any as SodiumCurvePrivate, _out_506);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_504, obj_505 as any as SodiumSignPublic, _out_506);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_504, obj_505 as any as HydrogenSignPublic, _out_506);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_504, obj_505 as any as SodiumSignPrivate, _out_506);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_504, obj_505 as any as HydrogenSignPrivate, _out_506);
            break;
            default: throw new Error(`Cannot serialize 'SodiumCurvePublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_504: FastFutureContext, in__507: DataIn): SodiumCurvePublic  {
        const typeId = in__507.readUByte();
        switch(typeId)  {
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_504, in__507) as any as SodiumCurvePublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_504, in__507) as any as SodiumCurvePublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_504, in__507) as any as SodiumCurvePublic;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_504, in__507) as any as SodiumCurvePublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_504, in__507) as any as SodiumCurvePublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_504, in__507) as any as SodiumCurvePublic;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_504, in__507) as any as SodiumCurvePublic;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_504, in__507) as any as SodiumCurvePublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_504, in__507) as any as SodiumCurvePublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_504, in__507) as any as SodiumCurvePublic;
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
    serialize(sCtx_508: FastFutureContext, obj_509: SodiumSignPrivate, _out_510: DataOut): void  {
        if (obj_509.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_509.data must be 64 but was $ {
            obj_509.data.length
        }
        `);
        _out_510.write(obj_509.data);
        
    }
    deserialize(sCtx_508: FastFutureContext, in__511: DataIn): SodiumSignPrivate  {
        let data_513: Uint8Array;
        const len_515 = 64;
        const bytes_516 = in__511.readBytes(len_515);
        data_513 = bytes_516;
        return new SodiumSignPrivate(data_513);
        
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
    serialize(sCtx_517: FastFutureContext, obj_518: SodiumSignPrivate, _out_519: DataOut): void  {
        const typeId = typeof (obj_518 as any).getAetherTypeId === 'function' ? obj_518.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumSignPrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_519.writeByte(typeId);
        switch(typeId)  {
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_517, obj_518 as any as SodiumSignPrivate, _out_519);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_517, obj_518 as any as SodiumChacha20Poly1305, _out_519);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_517, obj_518 as any as HydrogenSecretBox, _out_519);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_517, obj_518 as any as HydrogenCurvePublic, _out_519);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_517, obj_518 as any as SodiumCurvePublic, _out_519);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_517, obj_518 as any as HydrogenCurvePrivate, _out_519);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_517, obj_518 as any as SodiumCurvePrivate, _out_519);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_517, obj_518 as any as SodiumSignPublic, _out_519);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_517, obj_518 as any as HydrogenSignPublic, _out_519);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_517, obj_518 as any as HydrogenSignPrivate, _out_519);
            break;
            default: throw new Error(`Cannot serialize 'SodiumSignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_517: FastFutureContext, in__520: DataIn): SodiumSignPrivate  {
        const typeId = in__520.readUByte();
        switch(typeId)  {
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_517, in__520) as any as SodiumSignPrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_517, in__520) as any as SodiumSignPrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_517, in__520) as any as SodiumSignPrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_517, in__520) as any as SodiumSignPrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_517, in__520) as any as SodiumSignPrivate;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_517, in__520) as any as SodiumSignPrivate;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_517, in__520) as any as SodiumSignPrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_517, in__520) as any as SodiumSignPrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_517, in__520) as any as SodiumSignPrivate;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_517, in__520) as any as SodiumSignPrivate;
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
    serialize(sCtx_521: FastFutureContext, obj_522: SodiumSignPublic, _out_523: DataOut): void  {
        if (obj_522.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_522.data must be 32 but was $ {
            obj_522.data.length
        }
        `);
        _out_523.write(obj_522.data);
        
    }
    deserialize(sCtx_521: FastFutureContext, in__524: DataIn): SodiumSignPublic  {
        let data_526: Uint8Array;
        const len_528 = 32;
        const bytes_529 = in__524.readBytes(len_528);
        data_526 = bytes_529;
        return new SodiumSignPublic(data_526);
        
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
    serialize(sCtx_530: FastFutureContext, obj_531: SodiumSignPublic, _out_532: DataOut): void  {
        const typeId = typeof (obj_531 as any).getAetherTypeId === 'function' ? obj_531.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumSignPublic' with invalid type id $ {
            typeId
        }
        `);
        _out_532.writeByte(typeId);
        switch(typeId)  {
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_530, obj_531 as any as SodiumSignPublic, _out_532);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_530, obj_531 as any as SodiumChacha20Poly1305, _out_532);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_530, obj_531 as any as HydrogenSecretBox, _out_532);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_530, obj_531 as any as HydrogenCurvePublic, _out_532);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_530, obj_531 as any as SodiumCurvePublic, _out_532);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_530, obj_531 as any as HydrogenCurvePrivate, _out_532);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_530, obj_531 as any as SodiumCurvePrivate, _out_532);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_530, obj_531 as any as HydrogenSignPublic, _out_532);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_530, obj_531 as any as SodiumSignPrivate, _out_532);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_530, obj_531 as any as HydrogenSignPrivate, _out_532);
            break;
            default: throw new Error(`Cannot serialize 'SodiumSignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_530: FastFutureContext, in__533: DataIn): SodiumSignPublic  {
        const typeId = in__533.readUByte();
        switch(typeId)  {
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_530, in__533) as any as SodiumSignPublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_530, in__533) as any as SodiumSignPublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_530, in__533) as any as SodiumSignPublic;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_530, in__533) as any as SodiumSignPublic;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_530, in__533) as any as SodiumSignPublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_530, in__533) as any as SodiumSignPublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_530, in__533) as any as SodiumSignPublic;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_530, in__533) as any as SodiumSignPublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_530, in__533) as any as SodiumSignPublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_530, in__533) as any as SodiumSignPublic;
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
    serialize(sCtx_534: FastFutureContext, obj_535: TelemetryCPP, _out_536: DataOut): void  {
        _out_536.writeInt(obj_535.utm_id);
        SerializerPackNumber.INSTANCE.put(_out_536, obj_535.blob.length);
        _out_536.write(obj_535.blob);
        const stringBytes_539 = new TextEncoder().encode(obj_535.lib_version);
        SerializerPackNumber.INSTANCE.put(_out_536, stringBytes_539.length);
        _out_536.write(stringBytes_539);
        const stringBytes_541 = new TextEncoder().encode(obj_535.os);
        SerializerPackNumber.INSTANCE.put(_out_536, stringBytes_541.length);
        _out_536.write(stringBytes_541);
        const stringBytes_543 = new TextEncoder().encode(obj_535.compiler);
        SerializerPackNumber.INSTANCE.put(_out_536, stringBytes_543.length);
        _out_536.write(stringBytes_543);
        
    }
    deserialize(sCtx_534: FastFutureContext, in__537: DataIn): TelemetryCPP  {
        let utm_id_545: number;
        let blob_546: Uint8Array;
        let lib_version_547: string;
        let os_548: string;
        let compiler_549: string;
        utm_id_545 = in__537.readInt();
        const len_551 = Number(DeserializerPackNumber.INSTANCE.put(in__537));
        const bytes_552 = in__537.readBytes(len_551);
        blob_546 = bytes_552;
        let stringBytes_553: Uint8Array;
        const len_555 = Number(DeserializerPackNumber.INSTANCE.put(in__537));
        const bytes_556 = in__537.readBytes(len_555);
        stringBytes_553 = bytes_556;
        lib_version_547 = new TextDecoder('utf-8').decode(stringBytes_553);
        let stringBytes_557: Uint8Array;
        const len_559 = Number(DeserializerPackNumber.INSTANCE.put(in__537));
        const bytes_560 = in__537.readBytes(len_559);
        stringBytes_557 = bytes_560;
        os_548 = new TextDecoder('utf-8').decode(stringBytes_557);
        let stringBytes_561: Uint8Array;
        const len_563 = Number(DeserializerPackNumber.INSTANCE.put(in__537));
        const bytes_564 = in__537.readBytes(len_563);
        stringBytes_561 = bytes_564;
        compiler_549 = new TextDecoder('utf-8').decode(stringBytes_561);
        return new TelemetryCPP(utm_id_545, blob_546, lib_version_547, os_548, compiler_549);
        
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
    serialize(sCtx_565: FastFutureContext, obj_566: TelemetryCPP, _out_567: DataOut): void  {
        const typeId = typeof (obj_566 as any).getAetherTypeId === 'function' ? obj_566.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'TelemetryCPP' with invalid type id $ {
            typeId
        }
        `);
        _out_567.writeByte(typeId);
        switch(typeId)  {
            case 1: (TelemetryCPP as any).META_BODY.serialize(sCtx_565, obj_566 as any as TelemetryCPP, _out_567);
            break;
            default: throw new Error(`Cannot serialize 'TelemetryCPP' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_565: FastFutureContext, in__568: DataIn): TelemetryCPP  {
        const typeId = in__568.readUByte();
        switch(typeId)  {
            case 1: return (TelemetryCPP as any).META_BODY.deserialize(sCtx_565, in__568) as any as TelemetryCPP;
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
export class UUIDAndCloudMetaBodyImpl implements FastMetaType<UUIDAndCloud>  {
    serialize(sCtx_569: FastFutureContext, obj_570: UUIDAndCloud, _out_571: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_569, obj_570.uid, _out_571);
        Cloud.META.serialize(sCtx_569, obj_570.cloud, _out_571);
        
    }
    deserialize(sCtx_569: FastFutureContext, in__572: DataIn): UUIDAndCloud  {
        let uid_573: UUID;
        let cloud_574: Cloud;
        uid_573 = FastMeta.META_UUID.deserialize(sCtx_569, in__572);
        cloud_574 = Cloud.META.deserialize(sCtx_569, in__572);
        return new UUIDAndCloud(uid_573, cloud_574);
        
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
    serialize(sCtx_575: FastFutureContext, obj_576: WorkProofBCrypt, _out_577: DataOut): void  {
        _out_577.writeByte(obj_576.costBCrypt);
        _out_577.writeByte(obj_576.poolSize);
        _out_577.writeInt(obj_576.maxHashVal);
        
    }
    deserialize(sCtx_575: FastFutureContext, in__578: DataIn): WorkProofBCrypt  {
        let costBCrypt_579: number;
        let poolSize_580: number;
        let maxHashVal_581: number;
        costBCrypt_579 = in__578.readByte();
        poolSize_580 = in__578.readByte();
        maxHashVal_581 = in__578.readInt();
        return new WorkProofBCrypt(costBCrypt_579, poolSize_580, maxHashVal_581);
        
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
    serialize(sCtx_582: FastFutureContext, obj_583: WorkProofBCrypt, _out_584: DataOut): void  {
        const typeId = typeof (obj_583 as any).getAetherTypeId === 'function' ? obj_583.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'WorkProofBCrypt' with invalid type id $ {
            typeId
        }
        `);
        _out_584.writeByte(typeId);
        switch(typeId)  {
            case 1: (WorkProofBCrypt as any).META_BODY.serialize(sCtx_582, obj_583 as any as WorkProofBCrypt, _out_584);
            break;
            default: throw new Error(`Cannot serialize 'WorkProofBCrypt' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_582: FastFutureContext, in__585: DataIn): WorkProofBCrypt  {
        const typeId = in__585.readUByte();
        switch(typeId)  {
            case 1: return (WorkProofBCrypt as any).META_BODY.deserialize(sCtx_582, in__585) as any as WorkProofBCrypt;
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
    serialize(sCtx_586: FastFutureContext, obj_587: WorkProofDTO, _out_588: DataOut): void  {
        const stringBytes_590 = new TextEncoder().encode(obj_587.salt);
        SerializerPackNumber.INSTANCE.put(_out_588, stringBytes_590.length);
        _out_588.write(stringBytes_590);
        const stringBytes_592 = new TextEncoder().encode(obj_587.suffix);
        SerializerPackNumber.INSTANCE.put(_out_588, stringBytes_592.length);
        _out_588.write(stringBytes_592);
        _out_588.writeByte(obj_587.poolSize);
        _out_588.writeInt(obj_587.maxHashVal);
        SignedKey.META.serialize(sCtx_586, obj_587.globalKey, _out_588);
        
    }
    deserialize(sCtx_586: FastFutureContext, in__589: DataIn): WorkProofDTO  {
        let salt_594: string;
        let suffix_595: string;
        let poolSize_596: number;
        let maxHashVal_597: number;
        let globalKey_598: SignedKey;
        let stringBytes_599: Uint8Array;
        const len_601 = Number(DeserializerPackNumber.INSTANCE.put(in__589));
        const bytes_602 = in__589.readBytes(len_601);
        stringBytes_599 = bytes_602;
        salt_594 = new TextDecoder('utf-8').decode(stringBytes_599);
        let stringBytes_603: Uint8Array;
        const len_605 = Number(DeserializerPackNumber.INSTANCE.put(in__589));
        const bytes_606 = in__589.readBytes(len_605);
        stringBytes_603 = bytes_606;
        suffix_595 = new TextDecoder('utf-8').decode(stringBytes_603);
        poolSize_596 = in__589.readByte();
        maxHashVal_597 = in__589.readInt();
        globalKey_598 = SignedKey.META.deserialize(sCtx_586, in__589);
        return new WorkProofDTO(salt_594, suffix_595, poolSize_596, maxHashVal_597, globalKey_598);
        
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
    serialize(ctx: FastFutureContext, obj: ClientApiRegSafeStream, out: DataOut): void  {
        FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out);
        
    }
    deserialize(ctx: FastFutureContext, in_: DataIn): ClientApiRegSafeStream  {
        return new ClientApiRegSafeStream(FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_));
        
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
    serialize(ctx: FastFutureContext, obj: ClientApiStream, out: DataOut): void  {
        FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out);
        
    }
    deserialize(ctx: FastFutureContext, in_: DataIn): ClientApiStream  {
        return new ClientApiStream(FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_));
        
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
    serialize(ctx: FastFutureContext, obj: ClientInteractionClientStream, out: DataOut): void  {
        FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out);
        
    }
    deserialize(ctx: FastFutureContext, in_: DataIn): ClientInteractionClientStream  {
        return new ClientInteractionClientStream(FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_));
        
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
export class GlobalApiMetaImpl implements FastMetaType<GlobalApi>  {
    serialize(ctx: FastFutureContext, obj: GlobalApi, out: DataOut): void  {
        FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out);
        
    }
    deserialize(ctx: FastFutureContext, in_: DataIn): GlobalApi  {
        return new GlobalApi(FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_));
        
    }
    metaHashCode(obj: GlobalApi | null | undefined): number  {
        return FastMeta.META_ARRAY_BYTE.metaHashCode(obj?.data);
        
    }
    metaEquals(v1: GlobalApi | null | undefined, v2: any | null | undefined): boolean  {
        return FastMeta.META_ARRAY_BYTE.metaEquals(v1?.data, (v2 instanceof GlobalApi) ? v2.data : v2);
        
    }
    metaToString(obj: GlobalApi | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('GlobalApi(').add('data:').add(obj.data).add(')');
        
    }
    public serializeToBytes(obj: GlobalApi): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): GlobalApi  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): GlobalApi  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class GlobalRegClientApiStreamMetaImpl implements FastMetaType<GlobalRegClientApiStream>  {
    serialize(ctx: FastFutureContext, obj: GlobalRegClientApiStream, out: DataOut): void  {
        FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out);
        
    }
    deserialize(ctx: FastFutureContext, in_: DataIn): GlobalRegClientApiStream  {
        return new GlobalRegClientApiStream(FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_));
        
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
    serialize(ctx: FastFutureContext, obj: LoginClientStream, out: DataOut): void  {
        FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out);
        
    }
    deserialize(ctx: FastFutureContext, in_: DataIn): LoginClientStream  {
        return new LoginClientStream(FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_));
        
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
    serialize(ctx: FastFutureContext, obj: LoginStream, out: DataOut): void  {
        FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out);
        
    }
    deserialize(ctx: FastFutureContext, in_: DataIn): LoginStream  {
        return new LoginStream(FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_));
        
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
    serialize(ctx: FastFutureContext, obj: ServerRegistrationApiStream, out: DataOut): void  {
        FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out);
        
    }
    deserialize(ctx: FastFutureContext, in_: DataIn): ServerRegistrationApiStream  {
        return new ServerRegistrationApiStream(FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_));
        
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
    makeLocal_fromDataIn(ctx: FastFutureContext, dataIn: DataIn, localApi: ClientApiUnsafe): void  {
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
                    let backId_608: number;
                    let data_609: LoginClientStream;
                    backId_608 = dataIn.readByte();
                    data_609 = LoginClientStream.META.deserialize(ctx, dataIn);
                    const argsNames_610: string[] = ["backId", "data"];
                    const argsValues_611: any[] = [backId_608, data_609];
                    ctx.invokeLocalMethodBefore("sendSafeApiDataMulti", argsNames_610, argsValues_611);
                    localApi.sendSafeApiDataMulti(backId_608, data_609);
                    ctx.invokeLocalMethodAfter("sendSafeApiDataMulti", null, argsNames_610, argsValues_611);
                    break;
                    
                }
                case 4:  {
                    let data_613: LoginClientStream;
                    data_613 = LoginClientStream.META.deserialize(ctx, dataIn);
                    const argsNames_614: string[] = ["data"];
                    const argsValues_615: any[] = [data_613];
                    ctx.invokeLocalMethodBefore("sendSafeApiData", argsNames_614, argsValues_615);
                    localApi.sendSafeApiData(data_613);
                    ctx.invokeLocalMethodAfter("sendSafeApiData", null, argsNames_614, argsValues_615);
                    break;
                    
                }
                default: throw new Error(`Unknown command ID: $ {
                    commandId
                }
                `);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: FastApiContextLocal<ClientApiUnsafe>, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.localApi);
        
    }
    makeLocal_fromBytes_ctx(ctx: FastFutureContext, data: Uint8Array, localApi: ClientApiUnsafe): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_616: FastFutureContext): ClientApiUnsafeRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_616.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_616, sendSafeApiDataMulti: (backId: number, data: LoginClientStream): void =>  {
                const dataOut_618 = new DataInOut();
                dataOut_618.writeByte(3);
                const argsNames_620: string[] = ["backId", "data"];
                const argsValues_621: any[] = [backId, data];
                sCtx_616.invokeRemoteMethodAfter("sendSafeApiDataMulti", null, argsNames_620, argsValues_621);
                dataOut_618.writeByte(backId);
                LoginClientStream.META.serialize(sCtx_616, data, dataOut_618);
                sCtx_616.sendToRemote(dataOut_618.toArray());
                
            }
            , sendSafeApiData: (data: LoginClientStream): void =>  {
                const dataOut_623 = new DataInOut();
                dataOut_623.writeByte(4);
                const argsNames_625: string[] = ["data"];
                const argsValues_626: any[] = [data];
                sCtx_616.invokeRemoteMethodAfter("sendSafeApiData", null, argsNames_625, argsValues_626);
                LoginClientStream.META.serialize(sCtx_616, data, dataOut_623);
                sCtx_616.sendToRemote(dataOut_623.toArray());
                
            }
            , 
        };
        return remoteApiImpl as ClientApiUnsafeRemote;
        
    }
    
}
export class ClientApiSafeMetaImpl implements FastMetaApi<ClientApiSafe, ClientApiSafeRemote>  {
    makeLocal_fromDataIn(ctx: FastFutureContext, dataIn: DataIn, localApi: ClientApiSafe): void  {
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
                    let uid_628: UUID;
                    uid_628 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_629: string[] = ["uid"];
                    const argsValues_630: any[] = [uid_628];
                    ctx.invokeLocalMethodBefore("changeParent", argsNames_629, argsValues_630);
                    localApi.changeParent(uid_628);
                    ctx.invokeLocalMethodAfter("changeParent", null, argsNames_629, argsValues_630);
                    break;
                    
                }
                case 4:  {
                    let alias_632: UUID;
                    alias_632 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_633: string[] = ["alias"];
                    const argsValues_634: any[] = [alias_632];
                    ctx.invokeLocalMethodBefore("changeAlias", argsNames_633, argsValues_634);
                    localApi.changeAlias(alias_632);
                    ctx.invokeLocalMethodAfter("changeAlias", null, argsNames_633, argsValues_634);
                    break;
                    
                }
                case 5:  {
                    let uid_636: UUID;
                    uid_636 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_637: string[] = ["uid"];
                    const argsValues_638: any[] = [uid_636];
                    ctx.invokeLocalMethodBefore("newChild", argsNames_637, argsValues_638);
                    localApi.newChild(uid_636);
                    ctx.invokeLocalMethodAfter("newChild", null, argsNames_637, argsValues_638);
                    break;
                    
                }
                case 6:  {
                    let msg_640: Message[];
                    const len_642 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_640 = new Array<Message>(len_642);
                    for (let idx_641 = 0;
                    idx_641 < len_642;
                    idx_641++)  {
                        msg_640[idx_641] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_643: string[] = ["msg"];
                    const argsValues_644: any[] = [msg_640];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_643, argsValues_644);
                    localApi.sendMessages(msg_640);
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_643, argsValues_644);
                    break;
                    
                }
                case 7:  {
                    let serverDescriptor_646: ServerDescriptor;
                    serverDescriptor_646 = ServerDescriptor.META.deserialize(ctx, dataIn);
                    const argsNames_647: string[] = ["serverDescriptor"];
                    const argsValues_648: any[] = [serverDescriptor_646];
                    ctx.invokeLocalMethodBefore("sendServerDescriptor", argsNames_647, argsValues_648);
                    localApi.sendServerDescriptor(serverDescriptor_646);
                    ctx.invokeLocalMethodAfter("sendServerDescriptor", null, argsNames_647, argsValues_648);
                    break;
                    
                }
                case 8:  {
                    let serverDescriptors_650: ServerDescriptor[];
                    const len_652 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    serverDescriptors_650 = new Array<ServerDescriptor>(len_652);
                    for (let idx_651 = 0;
                    idx_651 < len_652;
                    idx_651++)  {
                        serverDescriptors_650[idx_651] = ServerDescriptor.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_653: string[] = ["serverDescriptors"];
                    const argsValues_654: any[] = [serverDescriptors_650];
                    ctx.invokeLocalMethodBefore("sendServerDescriptors", argsNames_653, argsValues_654);
                    localApi.sendServerDescriptors(serverDescriptors_650);
                    ctx.invokeLocalMethodAfter("sendServerDescriptors", null, argsNames_653, argsValues_654);
                    break;
                    
                }
                case 9:  {
                    let uid_656: UUID;
                    let cloud_657: Cloud;
                    uid_656 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    cloud_657 = Cloud.META.deserialize(ctx, dataIn);
                    const argsNames_658: string[] = ["uid", "cloud"];
                    const argsValues_659: any[] = [uid_656, cloud_657];
                    ctx.invokeLocalMethodBefore("sendCloud", argsNames_658, argsValues_659);
                    localApi.sendCloud(uid_656, cloud_657);
                    ctx.invokeLocalMethodAfter("sendCloud", null, argsNames_658, argsValues_659);
                    break;
                    
                }
                case 10:  {
                    let clouds_661: UUIDAndCloud[];
                    const len_663 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    clouds_661 = new Array<UUIDAndCloud>(len_663);
                    for (let idx_662 = 0;
                    idx_662 < len_663;
                    idx_662++)  {
                        clouds_661[idx_662] = UUIDAndCloud.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_664: string[] = ["clouds"];
                    const argsValues_665: any[] = [clouds_661];
                    ctx.invokeLocalMethodBefore("sendClouds", argsNames_664, argsValues_665);
                    localApi.sendClouds(clouds_661);
                    ctx.invokeLocalMethodAfter("sendClouds", null, argsNames_664, argsValues_665);
                    break;
                    
                }
                case 11:  {
                    const argsNames_667: string[] = [];
                    const argsValues_668: any[] = [];
                    ctx.invokeLocalMethodBefore("requestTelemetry", argsNames_667, argsValues_668);
                    localApi.requestTelemetry();
                    ctx.invokeLocalMethodAfter("requestTelemetry", null, argsNames_667, argsValues_668);
                    break;
                    
                }
                case 12:  {
                    let groups_670: AccessGroup[];
                    const len_672 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_670 = new Array<AccessGroup>(len_672);
                    for (let idx_671 = 0;
                    idx_671 < len_672;
                    idx_671++)  {
                        groups_670[idx_671] = AccessGroup.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_673: string[] = ["groups"];
                    const argsValues_674: any[] = [groups_670];
                    ctx.invokeLocalMethodBefore("sendAccessGroups", argsNames_673, argsValues_674);
                    localApi.sendAccessGroups(groups_670);
                    ctx.invokeLocalMethodAfter("sendAccessGroups", null, argsNames_673, argsValues_674);
                    break;
                    
                }
                case 13:  {
                    let uid_676: UUID;
                    let groups_677: bigint[];
                    uid_676 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_679 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_677 = new Array<bigint>(len_679);
                    for (let idx_678 = 0;
                    idx_678 < len_679;
                    idx_678++)  {
                        groups_677[idx_678] = dataIn.readLong();
                        
                    }
                    const argsNames_680: string[] = ["uid", "groups"];
                    const argsValues_681: any[] = [uid_676, groups_677];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_680, argsValues_681);
                    localApi.sendAccessGroupForClient(uid_676, groups_677);
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_680, argsValues_681);
                    break;
                    
                }
                case 14:  {
                    let id_683: bigint;
                    let groups_684: UUID[];
                    id_683 = dataIn.readLong();
                    const len_686 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_684 = new Array<UUID>(len_686);
                    for (let idx_685 = 0;
                    idx_685 < len_686;
                    idx_685++)  {
                        groups_684[idx_685] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_687: string[] = ["id", "groups"];
                    const argsValues_688: any[] = [id_683, groups_684];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_687, argsValues_688);
                    localApi.addItemsToAccessGroup(id_683, groups_684);
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_687, argsValues_688);
                    break;
                    
                }
                case 15:  {
                    let id_690: bigint;
                    let groups_691: UUID[];
                    id_690 = dataIn.readLong();
                    const len_693 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_691 = new Array<UUID>(len_693);
                    for (let idx_692 = 0;
                    idx_692 < len_693;
                    idx_692++)  {
                        groups_691[idx_692] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_694: string[] = ["id", "groups"];
                    const argsValues_695: any[] = [id_690, groups_691];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_694, argsValues_695);
                    localApi.removeItemsFromAccessGroup(id_690, groups_691);
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_694, argsValues_695);
                    break;
                    
                }
                case 16:  {
                    let uid_697: UUID;
                    let groups_698: bigint[];
                    uid_697 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_700 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_698 = new Array<bigint>(len_700);
                    for (let idx_699 = 0;
                    idx_699 < len_700;
                    idx_699++)  {
                        groups_698[idx_699] = dataIn.readLong();
                        
                    }
                    const argsNames_701: string[] = ["uid", "groups"];
                    const argsValues_702: any[] = [uid_697, groups_698];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_701, argsValues_702);
                    localApi.addAccessGroupsToClient(uid_697, groups_698);
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_701, argsValues_702);
                    break;
                    
                }
                case 17:  {
                    let uid_704: UUID;
                    let groups_705: bigint[];
                    uid_704 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_707 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_705 = new Array<bigint>(len_707);
                    for (let idx_706 = 0;
                    idx_706 < len_707;
                    idx_706++)  {
                        groups_705[idx_706] = dataIn.readLong();
                        
                    }
                    const argsNames_708: string[] = ["uid", "groups"];
                    const argsValues_709: any[] = [uid_704, groups_705];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_708, argsValues_709);
                    localApi.removeAccessGroupsFromClient(uid_704, groups_705);
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_708, argsValues_709);
                    break;
                    
                }
                case 18:  {
                    let uid_711: UUID;
                    let accessedClients_712: UUID[];
                    uid_711 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_714 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    accessedClients_712 = new Array<UUID>(len_714);
                    for (let idx_713 = 0;
                    idx_713 < len_714;
                    idx_713++)  {
                        accessedClients_712[idx_713] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_715: string[] = ["uid", "accessedClients"];
                    const argsValues_716: any[] = [uid_711, accessedClients_712];
                    ctx.invokeLocalMethodBefore("sendAllAccessedClients", argsNames_715, argsValues_716);
                    localApi.sendAllAccessedClients(uid_711, accessedClients_712);
                    ctx.invokeLocalMethodAfter("sendAllAccessedClients", null, argsNames_715, argsValues_716);
                    break;
                    
                }
                case 19:  {
                    let results_718: AccessCheckResult[];
                    const len_720 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    results_718 = new Array<AccessCheckResult>(len_720);
                    for (let idx_719 = 0;
                    idx_719 < len_720;
                    idx_719++)  {
                        results_718[idx_719] = AccessCheckResult.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_721: string[] = ["results"];
                    const argsValues_722: any[] = [results_718];
                    ctx.invokeLocalMethodBefore("sendAccessCheckResults", argsNames_721, argsValues_722);
                    localApi.sendAccessCheckResults(results_718);
                    ctx.invokeLocalMethodAfter("sendAccessCheckResults", null, argsNames_721, argsValues_722);
                    break;
                    
                }
                default: throw new Error(`Unknown command ID: $ {
                    commandId
                }
                `);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: FastApiContextLocal<ClientApiSafe>, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.localApi);
        
    }
    makeLocal_fromBytes_ctx(ctx: FastFutureContext, data: Uint8Array, localApi: ClientApiSafe): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_723: FastFutureContext): ClientApiSafeRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_723.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_723, changeParent: (uid: UUID): void =>  {
                const dataOut_725 = new DataInOut();
                dataOut_725.writeByte(3);
                const argsNames_727: string[] = ["uid"];
                const argsValues_728: any[] = [uid];
                sCtx_723.invokeRemoteMethodAfter("changeParent", null, argsNames_727, argsValues_728);
                FastMeta.META_UUID.serialize(sCtx_723, uid, dataOut_725);
                sCtx_723.sendToRemote(dataOut_725.toArray());
                
            }
            , changeAlias: (alias: UUID): void =>  {
                const dataOut_730 = new DataInOut();
                dataOut_730.writeByte(4);
                const argsNames_732: string[] = ["alias"];
                const argsValues_733: any[] = [alias];
                sCtx_723.invokeRemoteMethodAfter("changeAlias", null, argsNames_732, argsValues_733);
                FastMeta.META_UUID.serialize(sCtx_723, alias, dataOut_730);
                sCtx_723.sendToRemote(dataOut_730.toArray());
                
            }
            , newChild: (uid: UUID): void =>  {
                const dataOut_735 = new DataInOut();
                dataOut_735.writeByte(5);
                const argsNames_737: string[] = ["uid"];
                const argsValues_738: any[] = [uid];
                sCtx_723.invokeRemoteMethodAfter("newChild", null, argsNames_737, argsValues_738);
                FastMeta.META_UUID.serialize(sCtx_723, uid, dataOut_735);
                sCtx_723.sendToRemote(dataOut_735.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_740 = new DataInOut();
                dataOut_740.writeByte(6);
                const argsNames_742: string[] = ["msg"];
                const argsValues_743: any[] = [msg];
                sCtx_723.invokeRemoteMethodAfter("sendMessages", null, argsNames_742, argsValues_743);
                SerializerPackNumber.INSTANCE.put(dataOut_740, msg.length);
                for (const el_744 of msg)  {
                    Message.META.serialize(sCtx_723, el_744, dataOut_740);
                    
                }
                sCtx_723.sendToRemote(dataOut_740.toArray());
                
            }
            , sendServerDescriptor: (serverDescriptor: ServerDescriptor): void =>  {
                const dataOut_746 = new DataInOut();
                dataOut_746.writeByte(7);
                const argsNames_748: string[] = ["serverDescriptor"];
                const argsValues_749: any[] = [serverDescriptor];
                sCtx_723.invokeRemoteMethodAfter("sendServerDescriptor", null, argsNames_748, argsValues_749);
                ServerDescriptor.META.serialize(sCtx_723, serverDescriptor, dataOut_746);
                sCtx_723.sendToRemote(dataOut_746.toArray());
                
            }
            , sendServerDescriptors: (serverDescriptors: ServerDescriptor[]): void =>  {
                const dataOut_751 = new DataInOut();
                dataOut_751.writeByte(8);
                const argsNames_753: string[] = ["serverDescriptors"];
                const argsValues_754: any[] = [serverDescriptors];
                sCtx_723.invokeRemoteMethodAfter("sendServerDescriptors", null, argsNames_753, argsValues_754);
                SerializerPackNumber.INSTANCE.put(dataOut_751, serverDescriptors.length);
                for (const el_755 of serverDescriptors)  {
                    ServerDescriptor.META.serialize(sCtx_723, el_755, dataOut_751);
                    
                }
                sCtx_723.sendToRemote(dataOut_751.toArray());
                
            }
            , sendCloud: (uid: UUID, cloud: Cloud): void =>  {
                const dataOut_757 = new DataInOut();
                dataOut_757.writeByte(9);
                const argsNames_759: string[] = ["uid", "cloud"];
                const argsValues_760: any[] = [uid, cloud];
                sCtx_723.invokeRemoteMethodAfter("sendCloud", null, argsNames_759, argsValues_760);
                FastMeta.META_UUID.serialize(sCtx_723, uid, dataOut_757);
                Cloud.META.serialize(sCtx_723, cloud, dataOut_757);
                sCtx_723.sendToRemote(dataOut_757.toArray());
                
            }
            , sendClouds: (clouds: UUIDAndCloud[]): void =>  {
                const dataOut_762 = new DataInOut();
                dataOut_762.writeByte(10);
                const argsNames_764: string[] = ["clouds"];
                const argsValues_765: any[] = [clouds];
                sCtx_723.invokeRemoteMethodAfter("sendClouds", null, argsNames_764, argsValues_765);
                SerializerPackNumber.INSTANCE.put(dataOut_762, clouds.length);
                for (const el_766 of clouds)  {
                    UUIDAndCloud.META.serialize(sCtx_723, el_766, dataOut_762);
                    
                }
                sCtx_723.sendToRemote(dataOut_762.toArray());
                
            }
            , requestTelemetry: (): void =>  {
                const dataOut_768 = new DataInOut();
                dataOut_768.writeByte(11);
                const argsNames_770: string[] = [];
                const argsValues_771: any[] = [];
                sCtx_723.invokeRemoteMethodAfter("requestTelemetry", null, argsNames_770, argsValues_771);
                sCtx_723.sendToRemote(dataOut_768.toArray());
                
            }
            , sendAccessGroups: (groups: AccessGroup[]): void =>  {
                const dataOut_773 = new DataInOut();
                dataOut_773.writeByte(12);
                const argsNames_775: string[] = ["groups"];
                const argsValues_776: any[] = [groups];
                sCtx_723.invokeRemoteMethodAfter("sendAccessGroups", null, argsNames_775, argsValues_776);
                SerializerPackNumber.INSTANCE.put(dataOut_773, groups.length);
                for (const el_777 of groups)  {
                    AccessGroup.META.serialize(sCtx_723, el_777, dataOut_773);
                    
                }
                sCtx_723.sendToRemote(dataOut_773.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_779 = new DataInOut();
                dataOut_779.writeByte(13);
                const argsNames_781: string[] = ["uid", "groups"];
                const argsValues_782: any[] = [uid, groups];
                sCtx_723.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_781, argsValues_782);
                FastMeta.META_UUID.serialize(sCtx_723, uid, dataOut_779);
                SerializerPackNumber.INSTANCE.put(dataOut_779, groups.length);
                for (const el_783 of groups)  {
                    dataOut_779.writeLong(el_783);
                    
                }
                sCtx_723.sendToRemote(dataOut_779.toArray());
                
            }
            , addItemsToAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_785 = new DataInOut();
                dataOut_785.writeByte(14);
                const argsNames_787: string[] = ["id", "groups"];
                const argsValues_788: any[] = [id, groups];
                sCtx_723.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_787, argsValues_788);
                dataOut_785.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_785, groups.length);
                for (const el_789 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_723, el_789, dataOut_785);
                    
                }
                sCtx_723.sendToRemote(dataOut_785.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_791 = new DataInOut();
                dataOut_791.writeByte(15);
                const argsNames_793: string[] = ["id", "groups"];
                const argsValues_794: any[] = [id, groups];
                sCtx_723.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_793, argsValues_794);
                dataOut_791.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_791, groups.length);
                for (const el_795 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_723, el_795, dataOut_791);
                    
                }
                sCtx_723.sendToRemote(dataOut_791.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_797 = new DataInOut();
                dataOut_797.writeByte(16);
                const argsNames_799: string[] = ["uid", "groups"];
                const argsValues_800: any[] = [uid, groups];
                sCtx_723.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_799, argsValues_800);
                FastMeta.META_UUID.serialize(sCtx_723, uid, dataOut_797);
                SerializerPackNumber.INSTANCE.put(dataOut_797, groups.length);
                for (const el_801 of groups)  {
                    dataOut_797.writeLong(el_801);
                    
                }
                sCtx_723.sendToRemote(dataOut_797.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_803 = new DataInOut();
                dataOut_803.writeByte(17);
                const argsNames_805: string[] = ["uid", "groups"];
                const argsValues_806: any[] = [uid, groups];
                sCtx_723.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_805, argsValues_806);
                FastMeta.META_UUID.serialize(sCtx_723, uid, dataOut_803);
                SerializerPackNumber.INSTANCE.put(dataOut_803, groups.length);
                for (const el_807 of groups)  {
                    dataOut_803.writeLong(el_807);
                    
                }
                sCtx_723.sendToRemote(dataOut_803.toArray());
                
            }
            , sendAllAccessedClients: (uid: UUID, accessedClients: UUID[]): void =>  {
                const dataOut_809 = new DataInOut();
                dataOut_809.writeByte(18);
                const argsNames_811: string[] = ["uid", "accessedClients"];
                const argsValues_812: any[] = [uid, accessedClients];
                sCtx_723.invokeRemoteMethodAfter("sendAllAccessedClients", null, argsNames_811, argsValues_812);
                FastMeta.META_UUID.serialize(sCtx_723, uid, dataOut_809);
                SerializerPackNumber.INSTANCE.put(dataOut_809, accessedClients.length);
                for (const el_813 of accessedClients)  {
                    FastMeta.META_UUID.serialize(sCtx_723, el_813, dataOut_809);
                    
                }
                sCtx_723.sendToRemote(dataOut_809.toArray());
                
            }
            , sendAccessCheckResults: (results: AccessCheckResult[]): void =>  {
                const dataOut_815 = new DataInOut();
                dataOut_815.writeByte(19);
                const argsNames_817: string[] = ["results"];
                const argsValues_818: any[] = [results];
                sCtx_723.invokeRemoteMethodAfter("sendAccessCheckResults", null, argsNames_817, argsValues_818);
                SerializerPackNumber.INSTANCE.put(dataOut_815, results.length);
                for (const el_819 of results)  {
                    AccessCheckResult.META.serialize(sCtx_723, el_819, dataOut_815);
                    
                }
                sCtx_723.sendToRemote(dataOut_815.toArray());
                
            }
            , 
        };
        return remoteApiImpl as ClientApiSafeRemote;
        
    }
    
}
export class AuthorizedApiMetaImpl implements FastMetaApi<AuthorizedApi, AuthorizedApiRemote>  {
    makeLocal_fromDataIn(ctx: FastFutureContext, dataIn: DataIn, localApi: AuthorizedApi): void  {
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
                    let id_821: number;
                    id_821 = dataIn.readByte();
                    const argsNames_822: string[] = ["id"];
                    const argsValues_823: any[] = [id_821];
                    ctx.invokeLocalMethodBefore("backId", argsNames_822, argsValues_823);
                    localApi.backId(id_821);
                    ctx.invokeLocalMethodAfter("backId", null, argsNames_822, argsValues_823);
                    break;
                    
                }
                case 4:  {
                    const reqId_824 = dataIn.readInt();
                    let nextConnectMsDuration_825: bigint;
                    nextConnectMsDuration_825 = dataIn.readLong();
                    const argsNames_826: string[] = ["nextConnectMsDuration"];
                    const argsValues_827: any[] = [nextConnectMsDuration_825];
                    ctx.invokeLocalMethodBefore("ping", argsNames_826, argsValues_827);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.ping(nextConnectMsDuration_825);
                    ctx.invokeLocalMethodAfter("ping", resultFuture, argsNames_826, argsValues_827);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_824);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    let uid_829: UUID;
                    let stream_830: ClientApiStream;
                    uid_829 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    stream_830 = ClientApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_831: string[] = ["uid", "stream"];
                    const argsValues_832: any[] = [uid_829, stream_830];
                    ctx.invokeLocalMethodBefore("client", argsNames_831, argsValues_832);
                    localApi.client(uid_829, stream_830);
                    ctx.invokeLocalMethodAfter("client", null, argsNames_831, argsValues_832);
                    break;
                    
                }
                case 6:  {
                    let msg_834: Message;
                    msg_834 = Message.META.deserialize(ctx, dataIn);
                    const argsNames_835: string[] = ["msg"];
                    const argsValues_836: any[] = [msg_834];
                    ctx.invokeLocalMethodBefore("sendMessage", argsNames_835, argsValues_836);
                    localApi.sendMessage(msg_834);
                    ctx.invokeLocalMethodAfter("sendMessage", null, argsNames_835, argsValues_836);
                    break;
                    
                }
                case 7:  {
                    let msg_838: Message[];
                    const len_840 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_838 = new Array<Message>(len_840);
                    for (let idx_839 = 0;
                    idx_839 < len_840;
                    idx_839++)  {
                        msg_838[idx_839] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_841: string[] = ["msg"];
                    const argsValues_842: any[] = [msg_838];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_841, argsValues_842);
                    localApi.sendMessages(msg_838);
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_841, argsValues_842);
                    break;
                    
                }
                case 8:  {
                    const reqId_843 = dataIn.readInt();
                    let owner_844: UUID;
                    let uids_845: UUID[];
                    owner_844 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_847 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_845 = new Array<UUID>(len_847);
                    for (let idx_846 = 0;
                    idx_846 < len_847;
                    idx_846++)  {
                        uids_845[idx_846] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_848: string[] = ["owner", "uids"];
                    const argsValues_849: any[] = [owner_844, uids_845];
                    ctx.invokeLocalMethodBefore("createAccessGroup", argsNames_848, argsValues_849);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.createAccessGroup(owner_844, uids_845);
                    ctx.invokeLocalMethodAfter("createAccessGroup", resultFuture, argsNames_848, argsValues_849);
                    resultFuture.to((v_851: bigint) =>  {
                        const data_850 = new DataInOut();
                        data_850.writeLong(v_851);
                        ctx.sendResultToRemote(reqId_843, data_850.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_852 = dataIn.readInt();
                    let groupId_853: bigint;
                    let uid_854: UUID;
                    groupId_853 = dataIn.readLong();
                    uid_854 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_855: string[] = ["groupId", "uid"];
                    const argsValues_856: any[] = [groupId_853, uid_854];
                    ctx.invokeLocalMethodBefore("addToAccessGroup", argsNames_855, argsValues_856);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.addToAccessGroup(groupId_853, uid_854);
                    ctx.invokeLocalMethodAfter("addToAccessGroup", resultFuture, argsNames_855, argsValues_856);
                    resultFuture.to((v_858: boolean) =>  {
                        const data_857 = new DataInOut();
                        data_857.writeBoolean(v_858);
                        ctx.sendResultToRemote(reqId_852, data_857.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_859 = dataIn.readInt();
                    let groupId_860: bigint;
                    let uid_861: UUID;
                    groupId_860 = dataIn.readLong();
                    uid_861 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_862: string[] = ["groupId", "uid"];
                    const argsValues_863: any[] = [groupId_860, uid_861];
                    ctx.invokeLocalMethodBefore("removeFromAccessGroup", argsNames_862, argsValues_863);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.removeFromAccessGroup(groupId_860, uid_861);
                    ctx.invokeLocalMethodAfter("removeFromAccessGroup", resultFuture, argsNames_862, argsValues_863);
                    resultFuture.to((v_865: boolean) =>  {
                        const data_864 = new DataInOut();
                        data_864.writeBoolean(v_865);
                        ctx.sendResultToRemote(reqId_859, data_864.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_866 = dataIn.readInt();
                    let uid_867: UUID;
                    uid_867 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_868: string[] = ["uid"];
                    const argsValues_869: any[] = [uid_867];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage", argsNames_868, argsValues_869);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.checkAccessForSendMessage(uid_867);
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage", resultFuture, argsNames_868, argsValues_869);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_866);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    let sid_871: number[];
                    const len_873 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    sid_871 = new Array<number>(len_873);
                    for (let idx_872 = 0;
                    idx_872 < len_873;
                    idx_872++)  {
                        sid_871[idx_872] = dataIn.readShort();
                        
                    }
                    const argsNames_874: string[] = ["sid"];
                    const argsValues_875: any[] = [sid_871];
                    ctx.invokeLocalMethodBefore("resolverServers", argsNames_874, argsValues_875);
                    localApi.resolverServers(sid_871);
                    ctx.invokeLocalMethodAfter("resolverServers", null, argsNames_874, argsValues_875);
                    break;
                    
                }
                case 13:  {
                    let uids_877: UUID[];
                    const len_879 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_877 = new Array<UUID>(len_879);
                    for (let idx_878 = 0;
                    idx_878 < len_879;
                    idx_878++)  {
                        uids_877[idx_878] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_880: string[] = ["uids"];
                    const argsValues_881: any[] = [uids_877];
                    ctx.invokeLocalMethodBefore("resolverClouds", argsNames_880, argsValues_881);
                    localApi.resolverClouds(uids_877);
                    ctx.invokeLocalMethodAfter("resolverClouds", null, argsNames_880, argsValues_881);
                    break;
                    
                }
                case 14:  {
                    const reqId_882 = dataIn.readInt();
                    let uid_883: UUID;
                    uid_883 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_884: string[] = ["uid"];
                    const argsValues_885: any[] = [uid_883];
                    ctx.invokeLocalMethodBefore("getAccessGroups", argsNames_884, argsValues_885);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAccessGroups(uid_883);
                    ctx.invokeLocalMethodAfter("getAccessGroups", resultFuture, argsNames_884, argsValues_885);
                    resultFuture.to((v_887: bigint[]) =>  {
                        const data_886 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_886, v_887.length);
                        for (const el_888 of v_887)  {
                            data_886.writeLong(el_888);
                            
                        }
                        ctx.sendResultToRemote(reqId_882, data_886.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_889 = dataIn.readInt();
                    let groupId_890: bigint;
                    groupId_890 = dataIn.readLong();
                    const argsNames_891: string[] = ["groupId"];
                    const argsValues_892: any[] = [groupId_890];
                    ctx.invokeLocalMethodBefore("getAccessGroup", argsNames_891, argsValues_892);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAccessGroup(groupId_890);
                    ctx.invokeLocalMethodAfter("getAccessGroup", resultFuture, argsNames_891, argsValues_892);
                    resultFuture.to((v_894: AccessGroup) =>  {
                        const data_893 = new DataInOut();
                        AccessGroup.META.serialize(ctx, v_894, data_893);
                        ctx.sendResultToRemote(reqId_889, data_893.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 16:  {
                    const reqId_895 = dataIn.readInt();
                    let uid_896: UUID;
                    uid_896 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_897: string[] = ["uid"];
                    const argsValues_898: any[] = [uid_896];
                    ctx.invokeLocalMethodBefore("getAllAccessedClients", argsNames_897, argsValues_898);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAllAccessedClients(uid_896);
                    ctx.invokeLocalMethodAfter("getAllAccessedClients", resultFuture, argsNames_897, argsValues_898);
                    resultFuture.to((v_900: UUID[]) =>  {
                        const data_899 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_899, v_900.length);
                        for (const el_901 of v_900)  {
                            FastMeta.META_UUID.serialize(ctx, el_901, data_899);
                            
                        }
                        ctx.sendResultToRemote(reqId_895, data_899.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 17:  {
                    const reqId_902 = dataIn.readInt();
                    let uid1_903: UUID;
                    let uid2_904: UUID;
                    uid1_903 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid2_904 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_905: string[] = ["uid1", "uid2"];
                    const argsValues_906: any[] = [uid1_903, uid2_904];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage2", argsNames_905, argsValues_906);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.checkAccessForSendMessage2(uid1_903, uid2_904);
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage2", resultFuture, argsNames_905, argsValues_906);
                    resultFuture.to((v_908: boolean) =>  {
                        const data_907 = new DataInOut();
                        data_907.writeBoolean(v_908);
                        ctx.sendResultToRemote(reqId_902, data_907.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 18:  {
                    let telemetry_910: Telemetry;
                    telemetry_910 = Telemetry.META.deserialize(ctx, dataIn);
                    const argsNames_911: string[] = ["telemetry"];
                    const argsValues_912: any[] = [telemetry_910];
                    ctx.invokeLocalMethodBefore("sendTelemetry", argsNames_911, argsValues_912);
                    localApi.sendTelemetry(telemetry_910);
                    ctx.invokeLocalMethodAfter("sendTelemetry", null, argsNames_911, argsValues_912);
                    break;
                    
                }
                case 19:  {
                    let uids_914: UUID[];
                    const len_916 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_914 = new Array<UUID>(len_916);
                    for (let idx_915 = 0;
                    idx_915 < len_916;
                    idx_915++)  {
                        uids_914[idx_915] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_917: string[] = ["uids"];
                    const argsValues_918: any[] = [uids_914];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsForClients", argsNames_917, argsValues_918);
                    localApi.requestAccessGroupsForClients(uids_914);
                    ctx.invokeLocalMethodAfter("requestAccessGroupsForClients", null, argsNames_917, argsValues_918);
                    break;
                    
                }
                case 20:  {
                    let ids_920: bigint[];
                    const len_922 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    ids_920 = new Array<bigint>(len_922);
                    for (let idx_921 = 0;
                    idx_921 < len_922;
                    idx_921++)  {
                        ids_920[idx_921] = dataIn.readLong();
                        
                    }
                    const argsNames_923: string[] = ["ids"];
                    const argsValues_924: any[] = [ids_920];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsItems", argsNames_923, argsValues_924);
                    localApi.requestAccessGroupsItems(ids_920);
                    ctx.invokeLocalMethodAfter("requestAccessGroupsItems", null, argsNames_923, argsValues_924);
                    break;
                    
                }
                case 22:  {
                    let uid_926: UUID;
                    let groups_927: bigint[];
                    uid_926 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_929 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_927 = new Array<bigint>(len_929);
                    for (let idx_928 = 0;
                    idx_928 < len_929;
                    idx_928++)  {
                        groups_927[idx_928] = dataIn.readLong();
                        
                    }
                    const argsNames_930: string[] = ["uid", "groups"];
                    const argsValues_931: any[] = [uid_926, groups_927];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_930, argsValues_931);
                    localApi.sendAccessGroupForClient(uid_926, groups_927);
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_930, argsValues_931);
                    break;
                    
                }
                case 23:  {
                    let id_933: bigint;
                    let groups_934: UUID[];
                    id_933 = dataIn.readLong();
                    const len_936 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_934 = new Array<UUID>(len_936);
                    for (let idx_935 = 0;
                    idx_935 < len_936;
                    idx_935++)  {
                        groups_934[idx_935] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_937: string[] = ["id", "groups"];
                    const argsValues_938: any[] = [id_933, groups_934];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_937, argsValues_938);
                    localApi.addItemsToAccessGroup(id_933, groups_934);
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_937, argsValues_938);
                    break;
                    
                }
                case 24:  {
                    let id_940: bigint;
                    let groups_941: UUID[];
                    id_940 = dataIn.readLong();
                    const len_943 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_941 = new Array<UUID>(len_943);
                    for (let idx_942 = 0;
                    idx_942 < len_943;
                    idx_942++)  {
                        groups_941[idx_942] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_944: string[] = ["id", "groups"];
                    const argsValues_945: any[] = [id_940, groups_941];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_944, argsValues_945);
                    localApi.removeItemsFromAccessGroup(id_940, groups_941);
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_944, argsValues_945);
                    break;
                    
                }
                case 25:  {
                    let uid_947: UUID;
                    let groups_948: bigint[];
                    uid_947 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_950 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_948 = new Array<bigint>(len_950);
                    for (let idx_949 = 0;
                    idx_949 < len_950;
                    idx_949++)  {
                        groups_948[idx_949] = dataIn.readLong();
                        
                    }
                    const argsNames_951: string[] = ["uid", "groups"];
                    const argsValues_952: any[] = [uid_947, groups_948];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_951, argsValues_952);
                    localApi.addAccessGroupsToClient(uid_947, groups_948);
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_951, argsValues_952);
                    break;
                    
                }
                case 26:  {
                    let uid_954: UUID;
                    let groups_955: bigint[];
                    uid_954 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_957 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_955 = new Array<bigint>(len_957);
                    for (let idx_956 = 0;
                    idx_956 < len_957;
                    idx_956++)  {
                        groups_955[idx_956] = dataIn.readLong();
                        
                    }
                    const argsNames_958: string[] = ["uid", "groups"];
                    const argsValues_959: any[] = [uid_954, groups_955];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_958, argsValues_959);
                    localApi.removeAccessGroupsFromClient(uid_954, groups_955);
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_958, argsValues_959);
                    break;
                    
                }
                case 27:  {
                    let uids_961: UUID[];
                    const len_963 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_961 = new Array<UUID>(len_963);
                    for (let idx_962 = 0;
                    idx_962 < len_963;
                    idx_962++)  {
                        uids_961[idx_962] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_964: string[] = ["uids"];
                    const argsValues_965: any[] = [uids_961];
                    ctx.invokeLocalMethodBefore("requestAllAccessedClients", argsNames_964, argsValues_965);
                    localApi.requestAllAccessedClients(uids_961);
                    ctx.invokeLocalMethodAfter("requestAllAccessedClients", null, argsNames_964, argsValues_965);
                    break;
                    
                }
                case 28:  {
                    let requests_967: AccessCheckPair[];
                    const len_969 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    requests_967 = new Array<AccessCheckPair>(len_969);
                    for (let idx_968 = 0;
                    idx_968 < len_969;
                    idx_968++)  {
                        requests_967[idx_968] = AccessCheckPair.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_970: string[] = ["requests"];
                    const argsValues_971: any[] = [requests_967];
                    ctx.invokeLocalMethodBefore("requestAccessCheck", argsNames_970, argsValues_971);
                    localApi.requestAccessCheck(requests_967);
                    ctx.invokeLocalMethodAfter("requestAccessCheck", null, argsNames_970, argsValues_971);
                    break;
                    
                }
                default: throw new Error(`Unknown command ID: $ {
                    commandId
                }
                `);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: FastApiContextLocal<AuthorizedApi>, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.localApi);
        
    }
    makeLocal_fromBytes_ctx(ctx: FastFutureContext, data: Uint8Array, localApi: AuthorizedApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_972: FastFutureContext): AuthorizedApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_972.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_972, backId: (id: number): void =>  {
                const dataOut_974 = new DataInOut();
                dataOut_974.writeByte(3);
                const argsNames_976: string[] = ["id"];
                const argsValues_977: any[] = [id];
                sCtx_972.invokeRemoteMethodAfter("backId", null, argsNames_976, argsValues_977);
                dataOut_974.writeByte(id);
                sCtx_972.sendToRemote(dataOut_974.toArray());
                
            }
            , ping: (nextConnectMsDuration: bigint): AFuture =>  {
                const dataOut_979 = new DataInOut();
                dataOut_979.writeByte(4);
                const argsNames_981: string[] = ["nextConnectMsDuration"];
                const argsValues_982: any[] = [nextConnectMsDuration];
                const result_980 = AFuture.make();
                sCtx_972.invokeRemoteMethodAfter("ping", result_980, argsNames_981, argsValues_982);
                const reqId_978 = sCtx_972.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_980 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_980.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_979.writeInt(reqId_978);
                dataOut_979.writeLong(nextConnectMsDuration);
                sCtx_972.sendToRemote(dataOut_979.toArray());
                return result_980;
                
            }
            , client: (uid: UUID, stream: ClientApiStream): void =>  {
                const dataOut_984 = new DataInOut();
                dataOut_984.writeByte(5);
                const argsNames_986: string[] = ["uid", "stream"];
                const argsValues_987: any[] = [uid, stream];
                sCtx_972.invokeRemoteMethodAfter("client", null, argsNames_986, argsValues_987);
                FastMeta.META_UUID.serialize(sCtx_972, uid, dataOut_984);
                ClientApiStream.META.serialize(sCtx_972, stream, dataOut_984);
                sCtx_972.sendToRemote(dataOut_984.toArray());
                
            }
            , sendMessage: (msg: Message): void =>  {
                const dataOut_989 = new DataInOut();
                dataOut_989.writeByte(6);
                const argsNames_991: string[] = ["msg"];
                const argsValues_992: any[] = [msg];
                sCtx_972.invokeRemoteMethodAfter("sendMessage", null, argsNames_991, argsValues_992);
                Message.META.serialize(sCtx_972, msg, dataOut_989);
                sCtx_972.sendToRemote(dataOut_989.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_994 = new DataInOut();
                dataOut_994.writeByte(7);
                const argsNames_996: string[] = ["msg"];
                const argsValues_997: any[] = [msg];
                sCtx_972.invokeRemoteMethodAfter("sendMessages", null, argsNames_996, argsValues_997);
                SerializerPackNumber.INSTANCE.put(dataOut_994, msg.length);
                for (const el_998 of msg)  {
                    Message.META.serialize(sCtx_972, el_998, dataOut_994);
                    
                }
                sCtx_972.sendToRemote(dataOut_994.toArray());
                
            }
            , createAccessGroup: (owner: UUID, uids: UUID[]): ARFuture<bigint> =>  {
                const dataOut_1000 = new DataInOut();
                dataOut_1000.writeByte(8);
                const argsNames_1002: string[] = ["owner", "uids"];
                const argsValues_1003: any[] = [owner, uids];
                const result_1001 = ARFuture.of<bigint>();
                sCtx_972.invokeRemoteMethodAfter("createAccessGroup", result_1001, argsNames_1002, argsValues_1003);
                const reqId_999 = sCtx_972.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1001 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_972, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1001.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1000.writeInt(reqId_999);
                FastMeta.META_UUID.serialize(sCtx_972, owner, dataOut_1000);
                SerializerPackNumber.INSTANCE.put(dataOut_1000, uids.length);
                for (const el_1004 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_972, el_1004, dataOut_1000);
                    
                }
                sCtx_972.sendToRemote(dataOut_1000.toArray());
                return result_1001;
                
            }
            , addToAccessGroup: (groupId: bigint, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_1006 = new DataInOut();
                dataOut_1006.writeByte(9);
                const argsNames_1008: string[] = ["groupId", "uid"];
                const argsValues_1009: any[] = [groupId, uid];
                const result_1007 = ARFuture.of<boolean>();
                sCtx_972.invokeRemoteMethodAfter("addToAccessGroup", result_1007, argsNames_1008, argsValues_1009);
                const reqId_1005 = sCtx_972.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1007 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_972, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1007.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1006.writeInt(reqId_1005);
                dataOut_1006.writeLong(groupId);
                FastMeta.META_UUID.serialize(sCtx_972, uid, dataOut_1006);
                sCtx_972.sendToRemote(dataOut_1006.toArray());
                return result_1007;
                
            }
            , removeFromAccessGroup: (groupId: bigint, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_1011 = new DataInOut();
                dataOut_1011.writeByte(10);
                const argsNames_1013: string[] = ["groupId", "uid"];
                const argsValues_1014: any[] = [groupId, uid];
                const result_1012 = ARFuture.of<boolean>();
                sCtx_972.invokeRemoteMethodAfter("removeFromAccessGroup", result_1012, argsNames_1013, argsValues_1014);
                const reqId_1010 = sCtx_972.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1012 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_972, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1012.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1011.writeInt(reqId_1010);
                dataOut_1011.writeLong(groupId);
                FastMeta.META_UUID.serialize(sCtx_972, uid, dataOut_1011);
                sCtx_972.sendToRemote(dataOut_1011.toArray());
                return result_1012;
                
            }
            , checkAccessForSendMessage: (uid: UUID): AFuture =>  {
                const dataOut_1016 = new DataInOut();
                dataOut_1016.writeByte(11);
                const argsNames_1018: string[] = ["uid"];
                const argsValues_1019: any[] = [uid];
                const result_1017 = AFuture.make();
                sCtx_972.invokeRemoteMethodAfter("checkAccessForSendMessage", result_1017, argsNames_1018, argsValues_1019);
                const reqId_1015 = sCtx_972.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1017 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1017.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1016.writeInt(reqId_1015);
                FastMeta.META_UUID.serialize(sCtx_972, uid, dataOut_1016);
                sCtx_972.sendToRemote(dataOut_1016.toArray());
                return result_1017;
                
            }
            , resolverServers: (sid: number[]): void =>  {
                const dataOut_1021 = new DataInOut();
                dataOut_1021.writeByte(12);
                const argsNames_1023: string[] = ["sid"];
                const argsValues_1024: any[] = [sid];
                sCtx_972.invokeRemoteMethodAfter("resolverServers", null, argsNames_1023, argsValues_1024);
                SerializerPackNumber.INSTANCE.put(dataOut_1021, sid.length);
                for (const el_1025 of sid)  {
                    dataOut_1021.writeShort(el_1025);
                    
                }
                sCtx_972.sendToRemote(dataOut_1021.toArray());
                
            }
            , resolverClouds: (uids: UUID[]): void =>  {
                const dataOut_1027 = new DataInOut();
                dataOut_1027.writeByte(13);
                const argsNames_1029: string[] = ["uids"];
                const argsValues_1030: any[] = [uids];
                sCtx_972.invokeRemoteMethodAfter("resolverClouds", null, argsNames_1029, argsValues_1030);
                SerializerPackNumber.INSTANCE.put(dataOut_1027, uids.length);
                for (const el_1031 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_972, el_1031, dataOut_1027);
                    
                }
                sCtx_972.sendToRemote(dataOut_1027.toArray());
                
            }
            , getAccessGroups: (uid: UUID): ARFuture<bigint[]> =>  {
                const dataOut_1033 = new DataInOut();
                dataOut_1033.writeByte(14);
                const argsNames_1035: string[] = ["uid"];
                const argsValues_1036: any[] = [uid];
                const result_1034 = ARFuture.of<bigint[]>();
                sCtx_972.invokeRemoteMethodAfter("getAccessGroups", result_1034, argsNames_1035, argsValues_1036);
                const reqId_1032 = sCtx_972.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1034 as ARFuture<bigint[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_LONG).deserialize(sCtx_972, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1034.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1033.writeInt(reqId_1032);
                FastMeta.META_UUID.serialize(sCtx_972, uid, dataOut_1033);
                sCtx_972.sendToRemote(dataOut_1033.toArray());
                return result_1034;
                
            }
            , getAccessGroup: (groupId: bigint): ARFuture<AccessGroup> =>  {
                const dataOut_1038 = new DataInOut();
                dataOut_1038.writeByte(15);
                const argsNames_1040: string[] = ["groupId"];
                const argsValues_1041: any[] = [groupId];
                const result_1039 = ARFuture.of<AccessGroup>();
                sCtx_972.invokeRemoteMethodAfter("getAccessGroup", result_1039, argsNames_1040, argsValues_1041);
                const reqId_1037 = sCtx_972.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1039 as ARFuture<AccessGroup>).tryDone(AccessGroup.META.deserialize(sCtx_972, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1039.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1038.writeInt(reqId_1037);
                dataOut_1038.writeLong(groupId);
                sCtx_972.sendToRemote(dataOut_1038.toArray());
                return result_1039;
                
            }
            , getAllAccessedClients: (uid: UUID): ARFuture<UUID[]> =>  {
                const dataOut_1043 = new DataInOut();
                dataOut_1043.writeByte(16);
                const argsNames_1045: string[] = ["uid"];
                const argsValues_1046: any[] = [uid];
                const result_1044 = ARFuture.of<UUID[]>();
                sCtx_972.invokeRemoteMethodAfter("getAllAccessedClients", result_1044, argsNames_1045, argsValues_1046);
                const reqId_1042 = sCtx_972.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1044 as ARFuture<UUID[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_UUID).deserialize(sCtx_972, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1044.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1043.writeInt(reqId_1042);
                FastMeta.META_UUID.serialize(sCtx_972, uid, dataOut_1043);
                sCtx_972.sendToRemote(dataOut_1043.toArray());
                return result_1044;
                
            }
            , checkAccessForSendMessage2: (uid1: UUID, uid2: UUID): ARFuture<boolean> =>  {
                const dataOut_1048 = new DataInOut();
                dataOut_1048.writeByte(17);
                const argsNames_1050: string[] = ["uid1", "uid2"];
                const argsValues_1051: any[] = [uid1, uid2];
                const result_1049 = ARFuture.of<boolean>();
                sCtx_972.invokeRemoteMethodAfter("checkAccessForSendMessage2", result_1049, argsNames_1050, argsValues_1051);
                const reqId_1047 = sCtx_972.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1049 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_972, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1049.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1048.writeInt(reqId_1047);
                FastMeta.META_UUID.serialize(sCtx_972, uid1, dataOut_1048);
                FastMeta.META_UUID.serialize(sCtx_972, uid2, dataOut_1048);
                sCtx_972.sendToRemote(dataOut_1048.toArray());
                return result_1049;
                
            }
            , sendTelemetry: (telemetry: Telemetry): void =>  {
                const dataOut_1053 = new DataInOut();
                dataOut_1053.writeByte(18);
                const argsNames_1055: string[] = ["telemetry"];
                const argsValues_1056: any[] = [telemetry];
                sCtx_972.invokeRemoteMethodAfter("sendTelemetry", null, argsNames_1055, argsValues_1056);
                Telemetry.META.serialize(sCtx_972, telemetry, dataOut_1053);
                sCtx_972.sendToRemote(dataOut_1053.toArray());
                
            }
            , requestAccessGroupsForClients: (uids: UUID[]): void =>  {
                const dataOut_1058 = new DataInOut();
                dataOut_1058.writeByte(19);
                const argsNames_1060: string[] = ["uids"];
                const argsValues_1061: any[] = [uids];
                sCtx_972.invokeRemoteMethodAfter("requestAccessGroupsForClients", null, argsNames_1060, argsValues_1061);
                SerializerPackNumber.INSTANCE.put(dataOut_1058, uids.length);
                for (const el_1062 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_972, el_1062, dataOut_1058);
                    
                }
                sCtx_972.sendToRemote(dataOut_1058.toArray());
                
            }
            , requestAccessGroupsItems: (ids: bigint[]): void =>  {
                const dataOut_1064 = new DataInOut();
                dataOut_1064.writeByte(20);
                const argsNames_1066: string[] = ["ids"];
                const argsValues_1067: any[] = [ids];
                sCtx_972.invokeRemoteMethodAfter("requestAccessGroupsItems", null, argsNames_1066, argsValues_1067);
                SerializerPackNumber.INSTANCE.put(dataOut_1064, ids.length);
                for (const el_1068 of ids)  {
                    dataOut_1064.writeLong(el_1068);
                    
                }
                sCtx_972.sendToRemote(dataOut_1064.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_1070 = new DataInOut();
                dataOut_1070.writeByte(22);
                const argsNames_1072: string[] = ["uid", "groups"];
                const argsValues_1073: any[] = [uid, groups];
                sCtx_972.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_1072, argsValues_1073);
                FastMeta.META_UUID.serialize(sCtx_972, uid, dataOut_1070);
                SerializerPackNumber.INSTANCE.put(dataOut_1070, groups.length);
                for (const el_1074 of groups)  {
                    dataOut_1070.writeLong(el_1074);
                    
                }
                sCtx_972.sendToRemote(dataOut_1070.toArray());
                
            }
            , addItemsToAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_1076 = new DataInOut();
                dataOut_1076.writeByte(23);
                const argsNames_1078: string[] = ["id", "groups"];
                const argsValues_1079: any[] = [id, groups];
                sCtx_972.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_1078, argsValues_1079);
                dataOut_1076.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_1076, groups.length);
                for (const el_1080 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_972, el_1080, dataOut_1076);
                    
                }
                sCtx_972.sendToRemote(dataOut_1076.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_1082 = new DataInOut();
                dataOut_1082.writeByte(24);
                const argsNames_1084: string[] = ["id", "groups"];
                const argsValues_1085: any[] = [id, groups];
                sCtx_972.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_1084, argsValues_1085);
                dataOut_1082.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_1082, groups.length);
                for (const el_1086 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_972, el_1086, dataOut_1082);
                    
                }
                sCtx_972.sendToRemote(dataOut_1082.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_1088 = new DataInOut();
                dataOut_1088.writeByte(25);
                const argsNames_1090: string[] = ["uid", "groups"];
                const argsValues_1091: any[] = [uid, groups];
                sCtx_972.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_1090, argsValues_1091);
                FastMeta.META_UUID.serialize(sCtx_972, uid, dataOut_1088);
                SerializerPackNumber.INSTANCE.put(dataOut_1088, groups.length);
                for (const el_1092 of groups)  {
                    dataOut_1088.writeLong(el_1092);
                    
                }
                sCtx_972.sendToRemote(dataOut_1088.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_1094 = new DataInOut();
                dataOut_1094.writeByte(26);
                const argsNames_1096: string[] = ["uid", "groups"];
                const argsValues_1097: any[] = [uid, groups];
                sCtx_972.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_1096, argsValues_1097);
                FastMeta.META_UUID.serialize(sCtx_972, uid, dataOut_1094);
                SerializerPackNumber.INSTANCE.put(dataOut_1094, groups.length);
                for (const el_1098 of groups)  {
                    dataOut_1094.writeLong(el_1098);
                    
                }
                sCtx_972.sendToRemote(dataOut_1094.toArray());
                
            }
            , requestAllAccessedClients: (uids: UUID[]): void =>  {
                const dataOut_1100 = new DataInOut();
                dataOut_1100.writeByte(27);
                const argsNames_1102: string[] = ["uids"];
                const argsValues_1103: any[] = [uids];
                sCtx_972.invokeRemoteMethodAfter("requestAllAccessedClients", null, argsNames_1102, argsValues_1103);
                SerializerPackNumber.INSTANCE.put(dataOut_1100, uids.length);
                for (const el_1104 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_972, el_1104, dataOut_1100);
                    
                }
                sCtx_972.sendToRemote(dataOut_1100.toArray());
                
            }
            , requestAccessCheck: (requests: AccessCheckPair[]): void =>  {
                const dataOut_1106 = new DataInOut();
                dataOut_1106.writeByte(28);
                const argsNames_1108: string[] = ["requests"];
                const argsValues_1109: any[] = [requests];
                sCtx_972.invokeRemoteMethodAfter("requestAccessCheck", null, argsNames_1108, argsValues_1109);
                SerializerPackNumber.INSTANCE.put(dataOut_1106, requests.length);
                for (const el_1110 of requests)  {
                    AccessCheckPair.META.serialize(sCtx_972, el_1110, dataOut_1106);
                    
                }
                sCtx_972.sendToRemote(dataOut_1106.toArray());
                
            }
            , 
        };
        return remoteApiImpl as AuthorizedApiRemote;
        
    }
    
}
export class LoginApiMetaImpl implements FastMetaApi<LoginApi, LoginApiRemote>  {
    makeLocal_fromDataIn(ctx: FastFutureContext, dataIn: DataIn, localApi: LoginApi): void  {
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
                    const reqId_1111 = dataIn.readInt();
                    const argsNames_1112: string[] = [];
                    const argsValues_1113: any[] = [];
                    ctx.invokeLocalMethodBefore("getTimeUTC", argsNames_1112, argsValues_1113);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getTimeUTC();
                    ctx.invokeLocalMethodAfter("getTimeUTC", resultFuture, argsNames_1112, argsValues_1113);
                    resultFuture.to((v_1115: bigint) =>  {
                        const data_1114 = new DataInOut();
                        data_1114.writeLong(v_1115);
                        ctx.sendResultToRemote(reqId_1111, data_1114.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let uid_1117: UUID;
                    let data_1118: LoginStream;
                    uid_1117 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_1118 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsNames_1119: string[] = ["uid", "data"];
                    const argsValues_1120: any[] = [uid_1117, data_1118];
                    ctx.invokeLocalMethodBefore("loginByUID", argsNames_1119, argsValues_1120);
                    localApi.loginByUID(uid_1117, data_1118);
                    ctx.invokeLocalMethodAfter("loginByUID", null, argsNames_1119, argsValues_1120);
                    break;
                    
                }
                case 5:  {
                    let alias_1122: UUID;
                    let data_1123: LoginStream;
                    alias_1122 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_1123 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsNames_1124: string[] = ["alias", "data"];
                    const argsValues_1125: any[] = [alias_1122, data_1123];
                    ctx.invokeLocalMethodBefore("loginByAlias", argsNames_1124, argsValues_1125);
                    localApi.loginByAlias(alias_1122, data_1123);
                    ctx.invokeLocalMethodAfter("loginByAlias", null, argsNames_1124, argsValues_1125);
                    break;
                    
                }
                default: throw new Error(`Unknown command ID: $ {
                    commandId
                }
                `);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: FastApiContextLocal<LoginApi>, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.localApi);
        
    }
    makeLocal_fromBytes_ctx(ctx: FastFutureContext, data: Uint8Array, localApi: LoginApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1126: FastFutureContext): LoginApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_1126.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_1126, getTimeUTC: (): ARFuture<bigint> =>  {
                const dataOut_1128 = new DataInOut();
                dataOut_1128.writeByte(3);
                const argsNames_1130: string[] = [];
                const argsValues_1131: any[] = [];
                const result_1129 = ARFuture.of<bigint>();
                sCtx_1126.invokeRemoteMethodAfter("getTimeUTC", result_1129, argsNames_1130, argsValues_1131);
                const reqId_1127 = sCtx_1126.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1129 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_1126, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1129.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1128.writeInt(reqId_1127);
                sCtx_1126.sendToRemote(dataOut_1128.toArray());
                return result_1129;
                
            }
            , loginByUID: (uid: UUID, data: LoginStream): void =>  {
                const dataOut_1133 = new DataInOut();
                dataOut_1133.writeByte(4);
                const argsNames_1135: string[] = ["uid", "data"];
                const argsValues_1136: any[] = [uid, data];
                sCtx_1126.invokeRemoteMethodAfter("loginByUID", null, argsNames_1135, argsValues_1136);
                FastMeta.META_UUID.serialize(sCtx_1126, uid, dataOut_1133);
                LoginStream.META.serialize(sCtx_1126, data, dataOut_1133);
                sCtx_1126.sendToRemote(dataOut_1133.toArray());
                
            }
            , loginByAlias: (alias: UUID, data: LoginStream): void =>  {
                const dataOut_1138 = new DataInOut();
                dataOut_1138.writeByte(5);
                const argsNames_1140: string[] = ["alias", "data"];
                const argsValues_1141: any[] = [alias, data];
                sCtx_1126.invokeRemoteMethodAfter("loginByAlias", null, argsNames_1140, argsValues_1141);
                FastMeta.META_UUID.serialize(sCtx_1126, alias, dataOut_1138);
                LoginStream.META.serialize(sCtx_1126, data, dataOut_1138);
                sCtx_1126.sendToRemote(dataOut_1138.toArray());
                
            }
            , 
        };
        return remoteApiImpl as LoginApiRemote;
        
    }
    
}
export class ServerApiByUidClientMetaImpl implements FastMetaApi<ServerApiByUidClient, ServerApiByUidClientRemote>  {
    makeLocal_fromDataIn(ctx: FastFutureContext, dataIn: DataIn, _localApi: ServerApiByUidClient): void  {
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
    makeLocal_fromBytes_ctxLocal(ctx: FastApiContextLocal<ServerApiByUidClient>, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.localApi);
        
    }
    makeLocal_fromBytes_ctx(ctx: FastFutureContext, data: Uint8Array, localApi: ServerApiByUidClient): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1142: FastFutureContext): ServerApiByUidClientRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_1142.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_1142, 
        };
        return remoteApiImpl as ServerApiByUidClientRemote;
        
    }
    
}
export class ServerApiByUidMetaImpl implements FastMetaApi<ServerApiByUid, ServerApiByUidRemote>  {
    makeLocal_fromDataIn(ctx: FastFutureContext, dataIn: DataIn, localApi: ServerApiByUid): void  {
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
                    const reqId_1143 = dataIn.readInt();
                    const argsNames_1144: string[] = [];
                    const argsValues_1145: any[] = [];
                    ctx.invokeLocalMethodBefore("getBalance", argsNames_1144, argsValues_1145);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBalance();
                    ctx.invokeLocalMethodAfter("getBalance", resultFuture, argsNames_1144, argsValues_1145);
                    resultFuture.to((v_1147: bigint) =>  {
                        const data_1146 = new DataInOut();
                        data_1146.writeLong(v_1147);
                        ctx.sendResultToRemote(reqId_1143, data_1146.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    const reqId_1148 = dataIn.readInt();
                    let uid_1149: UUID;
                    uid_1149 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1150: string[] = ["uid"];
                    const argsValues_1151: any[] = [uid_1149];
                    ctx.invokeLocalMethodBefore("setParent", argsNames_1150, argsValues_1151);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.setParent(uid_1149);
                    ctx.invokeLocalMethodAfter("setParent", resultFuture, argsNames_1150, argsValues_1151);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1148);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_1152 = dataIn.readInt();
                    const argsNames_1153: string[] = [];
                    const argsValues_1154: any[] = [];
                    ctx.invokeLocalMethodBefore("block", argsNames_1153, argsValues_1154);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.block();
                    ctx.invokeLocalMethodAfter("block", resultFuture, argsNames_1153, argsValues_1154);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1152);
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    const reqId_1155 = dataIn.readInt();
                    const argsNames_1156: string[] = [];
                    const argsValues_1157: any[] = [];
                    ctx.invokeLocalMethodBefore("getPosition", argsNames_1156, argsValues_1157);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getPosition();
                    ctx.invokeLocalMethodAfter("getPosition", resultFuture, argsNames_1156, argsValues_1157);
                    resultFuture.to((v_1159: Cloud) =>  {
                        const data_1158 = new DataInOut();
                        Cloud.META.serialize(ctx, v_1159, data_1158);
                        ctx.sendResultToRemote(reqId_1155, data_1158.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 7:  {
                    const reqId_1160 = dataIn.readInt();
                    const argsNames_1161: string[] = [];
                    const argsValues_1162: any[] = [];
                    ctx.invokeLocalMethodBefore("getParent", argsNames_1161, argsValues_1162);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getParent();
                    ctx.invokeLocalMethodAfter("getParent", resultFuture, argsNames_1161, argsValues_1162);
                    resultFuture.to((v_1164: UUID) =>  {
                        const data_1163 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_1164, data_1163);
                        ctx.sendResultToRemote(reqId_1160, data_1163.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 8:  {
                    const reqId_1165 = dataIn.readInt();
                    const argsNames_1166: string[] = [];
                    const argsValues_1167: any[] = [];
                    ctx.invokeLocalMethodBefore("getBeneficiary", argsNames_1166, argsValues_1167);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBeneficiary();
                    ctx.invokeLocalMethodAfter("getBeneficiary", resultFuture, argsNames_1166, argsValues_1167);
                    resultFuture.to((v_1169: UUID) =>  {
                        const data_1168 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_1169, data_1168);
                        ctx.sendResultToRemote(reqId_1165, data_1168.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_1170 = dataIn.readInt();
                    let uid_1171: UUID;
                    uid_1171 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1172: string[] = ["uid"];
                    const argsValues_1173: any[] = [uid_1171];
                    ctx.invokeLocalMethodBefore("setBeneficiary", argsNames_1172, argsValues_1173);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.setBeneficiary(uid_1171);
                    ctx.invokeLocalMethodAfter("setBeneficiary", resultFuture, argsNames_1172, argsValues_1173);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1170);
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_1174 = dataIn.readInt();
                    const argsNames_1175: string[] = [];
                    const argsValues_1176: any[] = [];
                    ctx.invokeLocalMethodBefore("getBlockTime", argsNames_1175, argsValues_1176);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBlockTime();
                    ctx.invokeLocalMethodAfter("getBlockTime", resultFuture, argsNames_1175, argsValues_1176);
                    resultFuture.to((v_1178: Date) =>  {
                        const data_1177 = new DataInOut();
                        data_1177.writeLong(v_1178.getTime());
                        ctx.sendResultToRemote(reqId_1174, data_1177.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_1179 = dataIn.readInt();
                    const argsNames_1180: string[] = [];
                    const argsValues_1181: any[] = [];
                    ctx.invokeLocalMethodBefore("unblock", argsNames_1180, argsValues_1181);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.unblock();
                    ctx.invokeLocalMethodAfter("unblock", resultFuture, argsNames_1180, argsValues_1181);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1179);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    const reqId_1182 = dataIn.readInt();
                    const argsNames_1183: string[] = [];
                    const argsValues_1184: any[] = [];
                    ctx.invokeLocalMethodBefore("createTime", argsNames_1183, argsValues_1184);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.createTime();
                    ctx.invokeLocalMethodAfter("createTime", resultFuture, argsNames_1183, argsValues_1184);
                    resultFuture.to((v_1186: Date) =>  {
                        const data_1185 = new DataInOut();
                        data_1185.writeLong(v_1186.getTime());
                        ctx.sendResultToRemote(reqId_1182, data_1185.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 13:  {
                    const reqId_1187 = dataIn.readInt();
                    const argsNames_1188: string[] = [];
                    const argsValues_1189: any[] = [];
                    ctx.invokeLocalMethodBefore("onlineTime", argsNames_1188, argsValues_1189);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.onlineTime();
                    ctx.invokeLocalMethodAfter("onlineTime", resultFuture, argsNames_1188, argsValues_1189);
                    resultFuture.to((v_1191: Date) =>  {
                        const data_1190 = new DataInOut();
                        data_1190.writeLong(v_1191.getTime());
                        ctx.sendResultToRemote(reqId_1187, data_1190.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 14:  {
                    const reqId_1192 = dataIn.readInt();
                    let groupId_1193: bigint;
                    groupId_1193 = dataIn.readLong();
                    const argsNames_1194: string[] = ["groupId"];
                    const argsValues_1195: any[] = [groupId_1193];
                    ctx.invokeLocalMethodBefore("addAccessGroup", argsNames_1194, argsValues_1195);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.addAccessGroup(groupId_1193);
                    ctx.invokeLocalMethodAfter("addAccessGroup", resultFuture, argsNames_1194, argsValues_1195);
                    resultFuture.to((v_1197: boolean) =>  {
                        const data_1196 = new DataInOut();
                        data_1196.writeBoolean(v_1197);
                        ctx.sendResultToRemote(reqId_1192, data_1196.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_1198 = dataIn.readInt();
                    let groupId_1199: bigint;
                    groupId_1199 = dataIn.readLong();
                    const argsNames_1200: string[] = ["groupId"];
                    const argsValues_1201: any[] = [groupId_1199];
                    ctx.invokeLocalMethodBefore("removeAccessGroup", argsNames_1200, argsValues_1201);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.removeAccessGroup(groupId_1199);
                    ctx.invokeLocalMethodAfter("removeAccessGroup", resultFuture, argsNames_1200, argsValues_1201);
                    resultFuture.to((v_1203: boolean) =>  {
                        const data_1202 = new DataInOut();
                        data_1202.writeBoolean(v_1203);
                        ctx.sendResultToRemote(reqId_1198, data_1202.toArray());
                        
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
    makeLocal_fromBytes_ctxLocal(ctx: FastApiContextLocal<ServerApiByUid>, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.localApi);
        
    }
    makeLocal_fromBytes_ctx(ctx: FastFutureContext, data: Uint8Array, localApi: ServerApiByUid): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1204: FastFutureContext): ServerApiByUidRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_1204.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_1204, getBalance: (): ARFuture<bigint> =>  {
                const dataOut_1206 = new DataInOut();
                dataOut_1206.writeByte(3);
                const argsNames_1208: string[] = [];
                const argsValues_1209: any[] = [];
                const result_1207 = ARFuture.of<bigint>();
                sCtx_1204.invokeRemoteMethodAfter("getBalance", result_1207, argsNames_1208, argsValues_1209);
                const reqId_1205 = sCtx_1204.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1207 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_1204, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1207.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1206.writeInt(reqId_1205);
                sCtx_1204.sendToRemote(dataOut_1206.toArray());
                return result_1207;
                
            }
            , setParent: (uid: UUID): AFuture =>  {
                const dataOut_1211 = new DataInOut();
                dataOut_1211.writeByte(4);
                const argsNames_1213: string[] = ["uid"];
                const argsValues_1214: any[] = [uid];
                const result_1212 = AFuture.make();
                sCtx_1204.invokeRemoteMethodAfter("setParent", result_1212, argsNames_1213, argsValues_1214);
                const reqId_1210 = sCtx_1204.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1212 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1212.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1211.writeInt(reqId_1210);
                FastMeta.META_UUID.serialize(sCtx_1204, uid, dataOut_1211);
                sCtx_1204.sendToRemote(dataOut_1211.toArray());
                return result_1212;
                
            }
            , block: (): AFuture =>  {
                const dataOut_1216 = new DataInOut();
                dataOut_1216.writeByte(5);
                const argsNames_1218: string[] = [];
                const argsValues_1219: any[] = [];
                const result_1217 = AFuture.make();
                sCtx_1204.invokeRemoteMethodAfter("block", result_1217, argsNames_1218, argsValues_1219);
                const reqId_1215 = sCtx_1204.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1217 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1217.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1216.writeInt(reqId_1215);
                sCtx_1204.sendToRemote(dataOut_1216.toArray());
                return result_1217;
                
            }
            , getPosition: (): ARFuture<Cloud> =>  {
                const dataOut_1221 = new DataInOut();
                dataOut_1221.writeByte(6);
                const argsNames_1223: string[] = [];
                const argsValues_1224: any[] = [];
                const result_1222 = ARFuture.of<Cloud>();
                sCtx_1204.invokeRemoteMethodAfter("getPosition", result_1222, argsNames_1223, argsValues_1224);
                const reqId_1220 = sCtx_1204.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1222 as ARFuture<Cloud>).tryDone(Cloud.META.deserialize(sCtx_1204, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1222.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1221.writeInt(reqId_1220);
                sCtx_1204.sendToRemote(dataOut_1221.toArray());
                return result_1222;
                
            }
            , getParent: (): ARFuture<UUID> =>  {
                const dataOut_1226 = new DataInOut();
                dataOut_1226.writeByte(7);
                const argsNames_1228: string[] = [];
                const argsValues_1229: any[] = [];
                const result_1227 = ARFuture.of<UUID>();
                sCtx_1204.invokeRemoteMethodAfter("getParent", result_1227, argsNames_1228, argsValues_1229);
                const reqId_1225 = sCtx_1204.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1227 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_1204, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1227.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1226.writeInt(reqId_1225);
                sCtx_1204.sendToRemote(dataOut_1226.toArray());
                return result_1227;
                
            }
            , getBeneficiary: (): ARFuture<UUID> =>  {
                const dataOut_1231 = new DataInOut();
                dataOut_1231.writeByte(8);
                const argsNames_1233: string[] = [];
                const argsValues_1234: any[] = [];
                const result_1232 = ARFuture.of<UUID>();
                sCtx_1204.invokeRemoteMethodAfter("getBeneficiary", result_1232, argsNames_1233, argsValues_1234);
                const reqId_1230 = sCtx_1204.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1232 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_1204, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1232.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1231.writeInt(reqId_1230);
                sCtx_1204.sendToRemote(dataOut_1231.toArray());
                return result_1232;
                
            }
            , setBeneficiary: (uid: UUID): AFuture =>  {
                const dataOut_1236 = new DataInOut();
                dataOut_1236.writeByte(9);
                const argsNames_1238: string[] = ["uid"];
                const argsValues_1239: any[] = [uid];
                const result_1237 = AFuture.make();
                sCtx_1204.invokeRemoteMethodAfter("setBeneficiary", result_1237, argsNames_1238, argsValues_1239);
                const reqId_1235 = sCtx_1204.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1237 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1237.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1236.writeInt(reqId_1235);
                FastMeta.META_UUID.serialize(sCtx_1204, uid, dataOut_1236);
                sCtx_1204.sendToRemote(dataOut_1236.toArray());
                return result_1237;
                
            }
            , getBlockTime: (): ARFuture<Date> =>  {
                const dataOut_1241 = new DataInOut();
                dataOut_1241.writeByte(10);
                const argsNames_1243: string[] = [];
                const argsValues_1244: any[] = [];
                const result_1242 = ARFuture.of<Date>();
                sCtx_1204.invokeRemoteMethodAfter("getBlockTime", result_1242, argsNames_1243, argsValues_1244);
                const reqId_1240 = sCtx_1204.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1242 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1204, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1242.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1241.writeInt(reqId_1240);
                sCtx_1204.sendToRemote(dataOut_1241.toArray());
                return result_1242;
                
            }
            , unblock: (): AFuture =>  {
                const dataOut_1246 = new DataInOut();
                dataOut_1246.writeByte(11);
                const argsNames_1248: string[] = [];
                const argsValues_1249: any[] = [];
                const result_1247 = AFuture.make();
                sCtx_1204.invokeRemoteMethodAfter("unblock", result_1247, argsNames_1248, argsValues_1249);
                const reqId_1245 = sCtx_1204.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1247 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1247.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1246.writeInt(reqId_1245);
                sCtx_1204.sendToRemote(dataOut_1246.toArray());
                return result_1247;
                
            }
            , createTime: (): ARFuture<Date> =>  {
                const dataOut_1251 = new DataInOut();
                dataOut_1251.writeByte(12);
                const argsNames_1253: string[] = [];
                const argsValues_1254: any[] = [];
                const result_1252 = ARFuture.of<Date>();
                sCtx_1204.invokeRemoteMethodAfter("createTime", result_1252, argsNames_1253, argsValues_1254);
                const reqId_1250 = sCtx_1204.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1252 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1204, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1252.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1251.writeInt(reqId_1250);
                sCtx_1204.sendToRemote(dataOut_1251.toArray());
                return result_1252;
                
            }
            , onlineTime: (): ARFuture<Date> =>  {
                const dataOut_1256 = new DataInOut();
                dataOut_1256.writeByte(13);
                const argsNames_1258: string[] = [];
                const argsValues_1259: any[] = [];
                const result_1257 = ARFuture.of<Date>();
                sCtx_1204.invokeRemoteMethodAfter("onlineTime", result_1257, argsNames_1258, argsValues_1259);
                const reqId_1255 = sCtx_1204.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1257 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1204, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1257.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1256.writeInt(reqId_1255);
                sCtx_1204.sendToRemote(dataOut_1256.toArray());
                return result_1257;
                
            }
            , addAccessGroup: (groupId: bigint): ARFuture<boolean> =>  {
                const dataOut_1261 = new DataInOut();
                dataOut_1261.writeByte(14);
                const argsNames_1263: string[] = ["groupId"];
                const argsValues_1264: any[] = [groupId];
                const result_1262 = ARFuture.of<boolean>();
                sCtx_1204.invokeRemoteMethodAfter("addAccessGroup", result_1262, argsNames_1263, argsValues_1264);
                const reqId_1260 = sCtx_1204.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1262 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1204, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1262.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1261.writeInt(reqId_1260);
                dataOut_1261.writeLong(groupId);
                sCtx_1204.sendToRemote(dataOut_1261.toArray());
                return result_1262;
                
            }
            , removeAccessGroup: (groupId: bigint): ARFuture<boolean> =>  {
                const dataOut_1266 = new DataInOut();
                dataOut_1266.writeByte(15);
                const argsNames_1268: string[] = ["groupId"];
                const argsValues_1269: any[] = [groupId];
                const result_1267 = ARFuture.of<boolean>();
                sCtx_1204.invokeRemoteMethodAfter("removeAccessGroup", result_1267, argsNames_1268, argsValues_1269);
                const reqId_1265 = sCtx_1204.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1267 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1204, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1267.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1266.writeInt(reqId_1265);
                dataOut_1266.writeLong(groupId);
                sCtx_1204.sendToRemote(dataOut_1266.toArray());
                return result_1267;
                
            }
            , 
        };
        return remoteApiImpl as ServerApiByUidRemote;
        
    }
    
}
export class ClientApiRegSafeMetaImpl implements FastMetaApi<ClientApiRegSafe, ClientApiRegSafeRemote>  {
    makeLocal_fromDataIn(ctx: FastFutureContext, dataIn: DataIn, _localApi: ClientApiRegSafe): void  {
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
    makeLocal_fromBytes_ctxLocal(ctx: FastApiContextLocal<ClientApiRegSafe>, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.localApi);
        
    }
    makeLocal_fromBytes_ctx(ctx: FastFutureContext, data: Uint8Array, localApi: ClientApiRegSafe): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1270: FastFutureContext): ClientApiRegSafeRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_1270.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_1270, 
        };
        return remoteApiImpl as ClientApiRegSafeRemote;
        
    }
    
}
export class GlobalRegClientApiMetaImpl implements FastMetaApi<GlobalRegClientApi, GlobalRegClientApiRemote>  {
    makeLocal_fromDataIn(ctx: FastFutureContext, dataIn: DataIn, _localApi: GlobalRegClientApi): void  {
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
    makeLocal_fromBytes_ctxLocal(ctx: FastApiContextLocal<GlobalRegClientApi>, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.localApi);
        
    }
    makeLocal_fromBytes_ctx(ctx: FastFutureContext, data: Uint8Array, localApi: GlobalRegClientApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1271: FastFutureContext): GlobalRegClientApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_1271.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_1271, 
        };
        return remoteApiImpl as GlobalRegClientApiRemote;
        
    }
    
}
export class ClientApiRegUnsafeMetaImpl implements FastMetaApi<ClientApiRegUnsafe, ClientApiRegUnsafeRemote>  {
    makeLocal_fromDataIn(ctx: FastFutureContext, dataIn: DataIn, localApi: ClientApiRegUnsafe): void  {
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
                    let stream_1273: ClientApiRegSafeStream;
                    stream_1273 = ClientApiRegSafeStream.META.deserialize(ctx, dataIn);
                    const argsNames_1274: string[] = ["stream"];
                    const argsValues_1275: any[] = [stream_1273];
                    ctx.invokeLocalMethodBefore("enter", argsNames_1274, argsValues_1275);
                    localApi.enter(stream_1273);
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_1274, argsValues_1275);
                    break;
                    
                }
                case 4:  {
                    let stream_1277: GlobalRegClientApiStream;
                    stream_1277 = GlobalRegClientApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_1278: string[] = ["stream"];
                    const argsValues_1279: any[] = [stream_1277];
                    ctx.invokeLocalMethodBefore("enterGlobal", argsNames_1278, argsValues_1279);
                    localApi.enterGlobal(stream_1277);
                    ctx.invokeLocalMethodAfter("enterGlobal", null, argsNames_1278, argsValues_1279);
                    break;
                    
                }
                default: throw new Error(`Unknown command ID: $ {
                    commandId
                }
                `);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: FastApiContextLocal<ClientApiRegUnsafe>, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.localApi);
        
    }
    makeLocal_fromBytes_ctx(ctx: FastFutureContext, data: Uint8Array, localApi: ClientApiRegUnsafe): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1280: FastFutureContext): ClientApiRegUnsafeRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_1280.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_1280, enter: (stream: ClientApiRegSafeStream): void =>  {
                const dataOut_1282 = new DataInOut();
                dataOut_1282.writeByte(3);
                const argsNames_1284: string[] = ["stream"];
                const argsValues_1285: any[] = [stream];
                sCtx_1280.invokeRemoteMethodAfter("enter", null, argsNames_1284, argsValues_1285);
                ClientApiRegSafeStream.META.serialize(sCtx_1280, stream, dataOut_1282);
                sCtx_1280.sendToRemote(dataOut_1282.toArray());
                
            }
            , enterGlobal: (stream: GlobalRegClientApiStream): void =>  {
                const dataOut_1287 = new DataInOut();
                dataOut_1287.writeByte(4);
                const argsNames_1289: string[] = ["stream"];
                const argsValues_1290: any[] = [stream];
                sCtx_1280.invokeRemoteMethodAfter("enterGlobal", null, argsNames_1289, argsValues_1290);
                GlobalRegClientApiStream.META.serialize(sCtx_1280, stream, dataOut_1287);
                sCtx_1280.sendToRemote(dataOut_1287.toArray());
                
            }
            , 
        };
        return remoteApiImpl as ClientApiRegUnsafeRemote;
        
    }
    
}
export class GlobalRegServerApiMetaImpl implements FastMetaApi<GlobalRegServerApi, GlobalRegServerApiRemote>  {
    makeLocal_fromDataIn(ctx: FastFutureContext, dataIn: DataIn, localApi: GlobalRegServerApi): void  {
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
                    let _key_1292: Key;
                    _key_1292 = Key.META.deserialize(ctx, dataIn);
                    const argsNames_1293: string[] = ["key"];
                    const argsValues_1294: any[] = [_key_1292];
                    ctx.invokeLocalMethodBefore("setMasterKey", argsNames_1293, argsValues_1294);
                    localApi.setMasterKey(_key_1292);
                    ctx.invokeLocalMethodAfter("setMasterKey", null, argsNames_1293, argsValues_1294);
                    break;
                    
                }
                case 4:  {
                    const reqId_1295 = dataIn.readInt();
                    const argsNames_1296: string[] = [];
                    const argsValues_1297: any[] = [];
                    ctx.invokeLocalMethodBefore("finish", argsNames_1296, argsValues_1297);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.finish();
                    ctx.invokeLocalMethodAfter("finish", resultFuture, argsNames_1296, argsValues_1297);
                    resultFuture.to((v_1299: FinishResult) =>  {
                        const data_1298 = new DataInOut();
                        FinishResult.META.serialize(ctx, v_1299, data_1298);
                        ctx.sendResultToRemote(reqId_1295, data_1298.toArray());
                        
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
    makeLocal_fromBytes_ctxLocal(ctx: FastApiContextLocal<GlobalRegServerApi>, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.localApi);
        
    }
    makeLocal_fromBytes_ctx(ctx: FastFutureContext, data: Uint8Array, localApi: GlobalRegServerApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1300: FastFutureContext): GlobalRegServerApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_1300.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_1300, setMasterKey: (key: Key): void =>  {
                const dataOut_1302 = new DataInOut();
                dataOut_1302.writeByte(3);
                const argsNames_1304: string[] = ["key"];
                const argsValues_1305: any[] = [key];
                sCtx_1300.invokeRemoteMethodAfter("setMasterKey", null, argsNames_1304, argsValues_1305);
                Key.META.serialize(sCtx_1300, key, dataOut_1302);
                sCtx_1300.sendToRemote(dataOut_1302.toArray());
                
            }
            , finish: (): ARFuture<FinishResult> =>  {
                const dataOut_1307 = new DataInOut();
                dataOut_1307.writeByte(4);
                const argsNames_1309: string[] = [];
                const argsValues_1310: any[] = [];
                const result_1308 = ARFuture.of<FinishResult>();
                sCtx_1300.invokeRemoteMethodAfter("finish", result_1308, argsNames_1309, argsValues_1310);
                const reqId_1306 = sCtx_1300.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1308 as ARFuture<FinishResult>).tryDone(FinishResult.META.deserialize(sCtx_1300, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1308.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1307.writeInt(reqId_1306);
                sCtx_1300.sendToRemote(dataOut_1307.toArray());
                return result_1308;
                
            }
            , 
        };
        return remoteApiImpl as GlobalRegServerApiRemote;
        
    }
    
}
export class ServerRegistrationApiMetaImpl implements FastMetaApi<ServerRegistrationApi, ServerRegistrationApiRemote>  {
    makeLocal_fromDataIn(ctx: FastFutureContext, dataIn: DataIn, localApi: ServerRegistrationApi): void  {
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
                    let salt_1312: string;
                    let suffix_1313: string;
                    let passwords_1314: number[];
                    let parent_1315: UUID;
                    let globalApi_1316: GlobalApi;
                    let stringBytes_1317: Uint8Array;
                    const len_1319 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1320 = dataIn.readBytes(len_1319);
                    stringBytes_1317 = bytes_1320;
                    salt_1312 = new TextDecoder('utf-8').decode(stringBytes_1317);
                    let stringBytes_1321: Uint8Array;
                    const len_1323 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1324 = dataIn.readBytes(len_1323);
                    stringBytes_1321 = bytes_1324;
                    suffix_1313 = new TextDecoder('utf-8').decode(stringBytes_1321);
                    const len_1326 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    passwords_1314 = new Array<number>(len_1326);
                    for (let idx_1325 = 0;
                    idx_1325 < len_1326;
                    idx_1325++)  {
                        passwords_1314[idx_1325] = dataIn.readInt();
                        
                    }
                    parent_1315 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    globalApi_1316 = GlobalApi.META.deserialize(ctx, dataIn);
                    const argsNames_1327: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                    const argsValues_1328: any[] = [salt_1312, suffix_1313, passwords_1314, parent_1315, globalApi_1316];
                    ctx.invokeLocalMethodBefore("registration", argsNames_1327, argsValues_1328);
                    localApi.registration(salt_1312, suffix_1313, passwords_1314, parent_1315, globalApi_1316);
                    ctx.invokeLocalMethodAfter("registration", null, argsNames_1327, argsValues_1328);
                    break;
                    
                }
                case 4:  {
                    const reqId_1329 = dataIn.readInt();
                    let parent_1330: UUID;
                    let powMethods_1331: PowMethod;
                    parent_1330 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    powMethods_1331 = PowMethod.META.deserialize(ctx, dataIn);
                    const argsNames_1332: string[] = ["parent", "powMethods"];
                    const argsValues_1333: any[] = [parent_1330, powMethods_1331];
                    ctx.invokeLocalMethodBefore("requestWorkProofData", argsNames_1332, argsValues_1333);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.requestWorkProofData(parent_1330, powMethods_1331);
                    ctx.invokeLocalMethodAfter("requestWorkProofData", resultFuture, argsNames_1332, argsValues_1333);
                    resultFuture.to((v_1335: WorkProofDTO) =>  {
                        const data_1334 = new DataInOut();
                        WorkProofDTO.META.serialize(ctx, v_1335, data_1334);
                        ctx.sendResultToRemote(reqId_1329, data_1334.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_1336 = dataIn.readInt();
                    let serverIds_1337: Cloud;
                    serverIds_1337 = Cloud.META.deserialize(ctx, dataIn);
                    const argsNames_1338: string[] = ["serverIds"];
                    const argsValues_1339: any[] = [serverIds_1337];
                    ctx.invokeLocalMethodBefore("resolveServers", argsNames_1338, argsValues_1339);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.resolveServers(serverIds_1337);
                    ctx.invokeLocalMethodAfter("resolveServers", resultFuture, argsNames_1338, argsValues_1339);
                    resultFuture.to((v_1341: ServerDescriptor[]) =>  {
                        const data_1340 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1340, v_1341.length);
                        for (const el_1342 of v_1341)  {
                            ServerDescriptor.META.serialize(ctx, el_1342, data_1340);
                            
                        }
                        ctx.sendResultToRemote(reqId_1336, data_1340.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    let _key_1344: Key;
                    _key_1344 = Key.META.deserialize(ctx, dataIn);
                    const argsNames_1345: string[] = ["key"];
                    const argsValues_1346: any[] = [_key_1344];
                    ctx.invokeLocalMethodBefore("setReturnKey", argsNames_1345, argsValues_1346);
                    localApi.setReturnKey(_key_1344);
                    ctx.invokeLocalMethodAfter("setReturnKey", null, argsNames_1345, argsValues_1346);
                    break;
                    
                }
                default: throw new Error(`Unknown command ID: $ {
                    commandId
                }
                `);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: FastApiContextLocal<ServerRegistrationApi>, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.localApi);
        
    }
    makeLocal_fromBytes_ctx(ctx: FastFutureContext, data: Uint8Array, localApi: ServerRegistrationApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1347: FastFutureContext): ServerRegistrationApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_1347.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_1347, registration: (salt: string, suffix: string, passwords: number[], parent: UUID, globalApi: GlobalApi): void =>  {
                const dataOut_1349 = new DataInOut();
                dataOut_1349.writeByte(3);
                const argsNames_1351: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                const argsValues_1352: any[] = [salt, suffix, passwords, parent, globalApi];
                sCtx_1347.invokeRemoteMethodAfter("registration", null, argsNames_1351, argsValues_1352);
                const stringBytes_1353 = new TextEncoder().encode(salt);
                SerializerPackNumber.INSTANCE.put(dataOut_1349, stringBytes_1353.length);
                dataOut_1349.write(stringBytes_1353);
                const stringBytes_1355 = new TextEncoder().encode(suffix);
                SerializerPackNumber.INSTANCE.put(dataOut_1349, stringBytes_1355.length);
                dataOut_1349.write(stringBytes_1355);
                SerializerPackNumber.INSTANCE.put(dataOut_1349, passwords.length);
                for (const el_1357 of passwords)  {
                    dataOut_1349.writeInt(el_1357);
                    
                }
                FastMeta.META_UUID.serialize(sCtx_1347, parent, dataOut_1349);
                GlobalApi.META.serialize(sCtx_1347, globalApi, dataOut_1349);
                sCtx_1347.sendToRemote(dataOut_1349.toArray());
                
            }
            , requestWorkProofData: (parent: UUID, powMethods: PowMethod): ARFuture<WorkProofDTO> =>  {
                const dataOut_1359 = new DataInOut();
                dataOut_1359.writeByte(4);
                const argsNames_1361: string[] = ["parent", "powMethods"];
                const argsValues_1362: any[] = [parent, powMethods];
                const result_1360 = ARFuture.of<WorkProofDTO>();
                sCtx_1347.invokeRemoteMethodAfter("requestWorkProofData", result_1360, argsNames_1361, argsValues_1362);
                const reqId_1358 = sCtx_1347.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1360 as ARFuture<WorkProofDTO>).tryDone(WorkProofDTO.META.deserialize(sCtx_1347, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1360.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1359.writeInt(reqId_1358);
                FastMeta.META_UUID.serialize(sCtx_1347, parent, dataOut_1359);
                PowMethod.META.serialize(sCtx_1347, powMethods, dataOut_1359);
                sCtx_1347.sendToRemote(dataOut_1359.toArray());
                return result_1360;
                
            }
            , resolveServers: (serverIds: Cloud): ARFuture<ServerDescriptor[]> =>  {
                const dataOut_1364 = new DataInOut();
                dataOut_1364.writeByte(5);
                const argsNames_1366: string[] = ["serverIds"];
                const argsValues_1367: any[] = [serverIds];
                const result_1365 = ARFuture.of<ServerDescriptor[]>();
                sCtx_1347.invokeRemoteMethodAfter("resolveServers", result_1365, argsNames_1366, argsValues_1367);
                const reqId_1363 = sCtx_1347.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1365 as ARFuture<ServerDescriptor[]>).tryDone(FastMeta.getMetaArray(ServerDescriptor.META).deserialize(sCtx_1347, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1365.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1364.writeInt(reqId_1363);
                Cloud.META.serialize(sCtx_1347, serverIds, dataOut_1364);
                sCtx_1347.sendToRemote(dataOut_1364.toArray());
                return result_1365;
                
            }
            , setReturnKey: (key: Key): void =>  {
                const dataOut_1369 = new DataInOut();
                dataOut_1369.writeByte(6);
                const argsNames_1371: string[] = ["key"];
                const argsValues_1372: any[] = [key];
                sCtx_1347.invokeRemoteMethodAfter("setReturnKey", null, argsNames_1371, argsValues_1372);
                Key.META.serialize(sCtx_1347, key, dataOut_1369);
                sCtx_1347.sendToRemote(dataOut_1369.toArray());
                
            }
            , 
        };
        return remoteApiImpl as ServerRegistrationApiRemote;
        
    }
    
}
export class RegistrationRootApiMetaImpl implements FastMetaApi<RegistrationRootApi, RegistrationRootApiRemote>  {
    makeLocal_fromDataIn(ctx: FastFutureContext, dataIn: DataIn, localApi: RegistrationRootApi): void  {
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
                    const reqId_1373 = dataIn.readInt();
                    let cryptoLib_1374: CryptoLib;
                    cryptoLib_1374 = CryptoLib.META.deserialize(ctx, dataIn);
                    const argsNames_1375: string[] = ["cryptoLib"];
                    const argsValues_1376: any[] = [cryptoLib_1374];
                    ctx.invokeLocalMethodBefore("getAsymmetricPublicKey", argsNames_1375, argsValues_1376);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAsymmetricPublicKey(cryptoLib_1374);
                    ctx.invokeLocalMethodAfter("getAsymmetricPublicKey", resultFuture, argsNames_1375, argsValues_1376);
                    resultFuture.to((v_1378: SignedKey) =>  {
                        const data_1377 = new DataInOut();
                        SignedKey.META.serialize(ctx, v_1378, data_1377);
                        ctx.sendResultToRemote(reqId_1373, data_1377.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let cryptoLib_1380: CryptoLib;
                    let stream_1381: ServerRegistrationApiStream;
                    cryptoLib_1380 = CryptoLib.META.deserialize(ctx, dataIn);
                    stream_1381 = ServerRegistrationApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_1382: string[] = ["cryptoLib", "stream"];
                    const argsValues_1383: any[] = [cryptoLib_1380, stream_1381];
                    ctx.invokeLocalMethodBefore("enter", argsNames_1382, argsValues_1383);
                    localApi.enter(cryptoLib_1380, stream_1381);
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_1382, argsValues_1383);
                    break;
                    
                }
                default: throw new Error(`Unknown command ID: $ {
                    commandId
                }
                `);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: FastApiContextLocal<RegistrationRootApi>, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.localApi);
        
    }
    makeLocal_fromBytes_ctx(ctx: FastFutureContext, data: Uint8Array, localApi: RegistrationRootApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1384: FastFutureContext): RegistrationRootApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_1384.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_1384, getAsymmetricPublicKey: (cryptoLib: CryptoLib): ARFuture<SignedKey> =>  {
                const dataOut_1386 = new DataInOut();
                dataOut_1386.writeByte(3);
                const argsNames_1388: string[] = ["cryptoLib"];
                const argsValues_1389: any[] = [cryptoLib];
                const result_1387 = ARFuture.of<SignedKey>();
                sCtx_1384.invokeRemoteMethodAfter("getAsymmetricPublicKey", result_1387, argsNames_1388, argsValues_1389);
                const reqId_1385 = sCtx_1384.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1387 as ARFuture<SignedKey>).tryDone(SignedKey.META.deserialize(sCtx_1384, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1387.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1386.writeInt(reqId_1385);
                CryptoLib.META.serialize(sCtx_1384, cryptoLib, dataOut_1386);
                sCtx_1384.sendToRemote(dataOut_1386.toArray());
                return result_1387;
                
            }
            , enter: (cryptoLib: CryptoLib, stream: ServerRegistrationApiStream): void =>  {
                const dataOut_1391 = new DataInOut();
                dataOut_1391.writeByte(4);
                const argsNames_1393: string[] = ["cryptoLib", "stream"];
                const argsValues_1394: any[] = [cryptoLib, stream];
                sCtx_1384.invokeRemoteMethodAfter("enter", null, argsNames_1393, argsValues_1394);
                CryptoLib.META.serialize(sCtx_1384, cryptoLib, dataOut_1391);
                ServerRegistrationApiStream.META.serialize(sCtx_1384, stream, dataOut_1391);
                sCtx_1384.sendToRemote(dataOut_1391.toArray());
                
            }
            , 
        };
        return remoteApiImpl as RegistrationRootApiRemote;
        
    }
    
}
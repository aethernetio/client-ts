import  {
    AFuture, ARFuture, DataIn, DataOut, DataInOut, DataInOutStatic, FastMetaType, FastFutureContext, RemoteApi, FastMeta, SerializerPackNumber, DeserializerPackNumber, FastApiContextLocal, FastMetaApi, BytesConverter, RemoteApiFuture, FastFutureContextStub, UUID, URI, AConsumer, ToString, AString
}
from './aether_client';
import  {
    AetherCodec, ClientActivityType, CryptoLib, PowMethod, Status, AetherTypeDescriptor, IPAddress, Key, KeyAsymmetric, KeyAsymmetricPrivate, KeyAsymmetricPublic, KeySign, KeySignPrivate, KeySignPublic, KeySymmetric, PairKeys, Sign, Telemetry, WorkProofConfig, AccessCheckPair, AccessCheckResult, AccessGroup, AetherApiDefinition, AetherArgumentDescriptor, AetherArrayType, AetherBaseType, AetherFieldDescriptor, AetherMethodDescriptor, AetherModuleDescriptor, AetherNullableType, AetherStreamType, AetherStructDescriptor, ClientActivity, ClientConnectionInfo, ClientInfo, ClientLogEntry, ClientStateForSave, Cloud, CloudWeight, CoderAndPort, FinishResult, HydrogenCurvePrivate, HydrogenCurvePublic, HydrogenSecretBox, HydrogenSignPrivate, HydrogenSignPublic, IPAddressAndPorts, IPAddressAndPortsList, IPAddressV4, IPAddressV6, IPAddressWeb, KeyValuePair, Message, MessageInfo, MoneyOperation, PairKeysAsym, PairKeysAsymSigned, PairKeysSign, ServerDescriptor, ServerDescriptorWithGeo, SignAE_ED25519, SignedKey, SignHYDROGEN, SodiumChacha20Poly1305, SodiumCurvePrivate, SodiumCurvePublic, SodiumSignPrivate, SodiumSignPublic, TelemetryCPP, UUIDAndCloud, WorkProofBCrypt, WorkProofDTO, ClientApiRegSafeStream, ClientApiStream, ClientInteractionClientStream, GlobalApi, GlobalRegClientApiStream, LoginClientStream, LoginStream, ServerRegistrationApiStream, ClientApiUnsafe, ClientApiSafe, AuthorizedApi, LoginApi, ServerApiByUidClient, ServerApiByUid, ClientApiRegSafe, GlobalRegClientApi, ClientApiRegUnsafe, GlobalRegServerApi, ServerRegistrationApi, RegistrationRootApi, ClientApiUnsafeRemote, ClientApiSafeRemote, AuthorizedApiRemote, LoginApiRemote, ServerApiByUidClientRemote, ServerApiByUidRemote, ClientApiRegSafeRemote, GlobalRegClientApiRemote, ClientApiRegUnsafeRemote, GlobalRegServerApiRemote, ServerRegistrationApiRemote, RegistrationRootApiRemote
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
export class ClientActivityTypeMetaImpl implements FastMetaType<ClientActivityType>  {
    serialize(_sCtx: FastFutureContext, obj: ClientActivityType, out: DataOut): void  {
        const values = Object.keys(ClientActivityType).filter(k => isNaN(parseInt(k)));
        out.writeByte(values.indexOf(obj as string));
        
    }
    deserialize(_sCtx: FastFutureContext, in_: DataIn): ClientActivityType  {
        const ordinal = in_.readUByte();
        const keys = Object.keys(ClientActivityType).filter(k => isNaN(parseInt(k)));
        if (ordinal < 0 || ordinal >= keys.length) throw new Error(`Invalid ordinal $ {
            ordinal
        }
        for enum ClientActivityType`);
        return ClientActivityType[keys[ordinal] as keyof typeof ClientActivityType] as ClientActivityType;
        
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
export class ClientActivityMetaBodyImpl implements FastMetaType<ClientActivity>  {
    serialize(sCtx_204: FastFutureContext, obj_205: ClientActivity, _out_206: DataOut): void  {
        let _mask: number = 0;
        if (obj_205.serverId === null) _mask |= 1;
        _out_206.writeByte(_mask);
        _out_206.writeLong(obj_205.timestamp);
        ClientActivityType.META.serialize(sCtx_204, obj_205.type, _out_206);
        FastMeta.META_UUID.serialize(sCtx_204, obj_205.clientUid, _out_206);
        const stringBytes_208 = new TextEncoder().encode(obj_205.details);
        SerializerPackNumber.INSTANCE.put(_out_206, stringBytes_208.length);
        _out_206.write(stringBytes_208);
        if (obj_205.serverId !== null)  {
            _out_206.writeShort(obj_205.serverId);
            
        }
        
    }
    deserialize(sCtx_204: FastFutureContext, in__207: DataIn): ClientActivity  {
        let timestamp_210: bigint;
        let type_211: ClientActivityType;
        let clientUid_212: UUID;
        let details_213: string;
        let serverId_214: number;
        const _mask = in__207.readByte();
        timestamp_210 = in__207.readLong();
        type_211 = ClientActivityType.META.deserialize(sCtx_204, in__207);
        clientUid_212 = FastMeta.META_UUID.deserialize(sCtx_204, in__207);
        let stringBytes_215: Uint8Array;
        const len_217 = Number(DeserializerPackNumber.INSTANCE.put(in__207));
        const bytes_218 = in__207.readBytes(len_217);
        stringBytes_215 = bytes_218;
        details_213 = new TextDecoder('utf-8').decode(stringBytes_215);
        if (((_mask & 1) === 0))  {
            serverId_214 = in__207.readShort();
            
        }
        else  {
            serverId_214 = null;
            
        }
        return new ClientActivity(timestamp_210, type_211, clientUid_212, details_213, serverId_214);
        
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
    serialize(sCtx_219: FastFutureContext, obj_220: ClientConnectionInfo, _out_221: DataOut): void  {
        let _mask: number = 0;
        if (obj_220.disconnectedAt === null) _mask |= 1;
        _out_221.writeByte(_mask);
        _out_221.writeLong(obj_220.connectedAt);
        if (obj_220.disconnectedAt !== null)  {
            _out_221.writeLong(obj_220.disconnectedAt);
            
        }
        _out_221.writeShort(obj_220.serverId);
        SerializerPackNumber.INSTANCE.put(_out_221, obj_220.context.length);
        for (const el_223 of obj_220.context)  {
            KeyValuePair.META.serialize(sCtx_219, el_223, _out_221);
            
        }
        const stringBytes_224 = new TextEncoder().encode(obj_220.protocol);
        SerializerPackNumber.INSTANCE.put(_out_221, stringBytes_224.length);
        _out_221.write(stringBytes_224);
        
    }
    deserialize(sCtx_219: FastFutureContext, in__222: DataIn): ClientConnectionInfo  {
        let connectedAt_226: bigint;
        let disconnectedAt_227: bigint;
        let serverId_228: number;
        let context_229: KeyValuePair[];
        let protocol_230: string;
        const _mask = in__222.readByte();
        connectedAt_226 = in__222.readLong();
        if (((_mask & 1) === 0))  {
            disconnectedAt_227 = in__222.readLong();
            
        }
        else  {
            disconnectedAt_227 = null;
            
        }
        serverId_228 = in__222.readShort();
        const len_232 = Number(DeserializerPackNumber.INSTANCE.put(in__222));
        context_229 = new Array<KeyValuePair>(len_232);
        for (let idx_231 = 0;
        idx_231 < len_232;
        idx_231++)  {
            context_229[idx_231] = KeyValuePair.META.deserialize(sCtx_219, in__222);
            
        }
        let stringBytes_233: Uint8Array;
        const len_235 = Number(DeserializerPackNumber.INSTANCE.put(in__222));
        const bytes_236 = in__222.readBytes(len_235);
        stringBytes_233 = bytes_236;
        protocol_230 = new TextDecoder('utf-8').decode(stringBytes_233);
        return new ClientConnectionInfo(connectedAt_226, disconnectedAt_227, serverId_228, context_229, protocol_230);
        
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
    serialize(sCtx_237: FastFutureContext, obj_238: ClientInfo, _out_239: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_237, obj_238.uid, _out_239);
        Cloud.META.serialize(sCtx_237, obj_238.cloud, _out_239);
        SerializerPackNumber.INSTANCE.put(_out_239, obj_238.weights.length);
        for (const el_241 of obj_238.weights)  {
            CloudWeight.META.serialize(sCtx_237, el_241, _out_239);
            
        }
        
    }
    deserialize(sCtx_237: FastFutureContext, in__240: DataIn): ClientInfo  {
        let uid_242: UUID;
        let cloud_243: Cloud;
        let weights_244: CloudWeight[];
        uid_242 = FastMeta.META_UUID.deserialize(sCtx_237, in__240);
        cloud_243 = Cloud.META.deserialize(sCtx_237, in__240);
        const len_246 = Number(DeserializerPackNumber.INSTANCE.put(in__240));
        weights_244 = new Array<CloudWeight>(len_246);
        for (let idx_245 = 0;
        idx_245 < len_246;
        idx_245++)  {
            weights_244[idx_245] = CloudWeight.META.deserialize(sCtx_237, in__240);
            
        }
        return new ClientInfo(uid_242, cloud_243, weights_244);
        
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
    serialize(sCtx_247: FastFutureContext, obj_248: ClientLogEntry, _out_249: DataOut): void  {
        _out_249.writeLong(obj_248.timestamp);
        const stringBytes_251 = new TextEncoder().encode(obj_248.level);
        SerializerPackNumber.INSTANCE.put(_out_249, stringBytes_251.length);
        _out_249.write(stringBytes_251);
        const stringBytes_253 = new TextEncoder().encode(obj_248.message);
        SerializerPackNumber.INSTANCE.put(_out_249, stringBytes_253.length);
        _out_249.write(stringBytes_253);
        SerializerPackNumber.INSTANCE.put(_out_249, obj_248.context.length);
        for (const el_255 of obj_248.context)  {
            KeyValuePair.META.serialize(sCtx_247, el_255, _out_249);
            
        }
        
    }
    deserialize(sCtx_247: FastFutureContext, in__250: DataIn): ClientLogEntry  {
        let timestamp_256: bigint;
        let level_257: string;
        let message_258: string;
        let context_259: KeyValuePair[];
        timestamp_256 = in__250.readLong();
        let stringBytes_260: Uint8Array;
        const len_262 = Number(DeserializerPackNumber.INSTANCE.put(in__250));
        const bytes_263 = in__250.readBytes(len_262);
        stringBytes_260 = bytes_263;
        level_257 = new TextDecoder('utf-8').decode(stringBytes_260);
        let stringBytes_264: Uint8Array;
        const len_266 = Number(DeserializerPackNumber.INSTANCE.put(in__250));
        const bytes_267 = in__250.readBytes(len_266);
        stringBytes_264 = bytes_267;
        message_258 = new TextDecoder('utf-8').decode(stringBytes_264);
        const len_269 = Number(DeserializerPackNumber.INSTANCE.put(in__250));
        context_259 = new Array<KeyValuePair>(len_269);
        for (let idx_268 = 0;
        idx_268 < len_269;
        idx_268++)  {
            context_259[idx_268] = KeyValuePair.META.deserialize(sCtx_247, in__250);
            
        }
        return new ClientLogEntry(timestamp_256, level_257, message_258, context_259);
        
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
    serialize(sCtx_270: FastFutureContext, obj_271: ClientStateForSave, _out_272: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_272, obj_271.registrationUri.length);
        for (const el_274 of obj_271.registrationUri)  {
            FastMeta.META_URI.serialize(sCtx_270, el_274, _out_272);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_272, obj_271.servers.length);
        for (const el_275 of obj_271.servers)  {
            ServerDescriptor.META.serialize(sCtx_270, el_275, _out_272);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_272, obj_271.clients.length);
        for (const el_276 of obj_271.clients)  {
            ClientInfo.META.serialize(sCtx_270, el_276, _out_272);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_272, obj_271.rootSigners.length);
        for (const el_277 of obj_271.rootSigners)  {
            Key.META.serialize(sCtx_270, el_277, _out_272);
            
        }
        CryptoLib.META.serialize(sCtx_270, obj_271.cryptoLib, _out_272);
        _out_272.writeLong(obj_271.pingDuration);
        FastMeta.META_UUID.serialize(sCtx_270, obj_271.parentUid, _out_272);
        _out_272.writeInt(obj_271.countServersForRegistration);
        _out_272.writeLong(obj_271.timeoutForConnectToRegistrationServer);
        FastMeta.META_UUID.serialize(sCtx_270, obj_271.uid, _out_272);
        FastMeta.META_UUID.serialize(sCtx_270, obj_271.alias, _out_272);
        Key.META.serialize(sCtx_270, obj_271.masterKey, _out_272);
        
    }
    deserialize(sCtx_270: FastFutureContext, in__273: DataIn): ClientStateForSave  {
        let registrationUri_278: URI[];
        let servers_279: ServerDescriptor[];
        let clients_280: ClientInfo[];
        let rootSigners_281: Key[];
        let cryptoLib_282: CryptoLib;
        let pingDuration_283: bigint;
        let parentUid_284: UUID;
        let countServersForRegistration_285: number;
        let timeoutForConnectToRegistrationServer_286: bigint;
        let uid_287: UUID;
        let alias_288: UUID;
        let masterKey_289: Key;
        const len_291 = Number(DeserializerPackNumber.INSTANCE.put(in__273));
        registrationUri_278 = new Array<URI>(len_291);
        for (let idx_290 = 0;
        idx_290 < len_291;
        idx_290++)  {
            registrationUri_278[idx_290] = FastMeta.META_URI.deserialize(sCtx_270, in__273);
            
        }
        const len_293 = Number(DeserializerPackNumber.INSTANCE.put(in__273));
        servers_279 = new Array<ServerDescriptor>(len_293);
        for (let idx_292 = 0;
        idx_292 < len_293;
        idx_292++)  {
            servers_279[idx_292] = ServerDescriptor.META.deserialize(sCtx_270, in__273);
            
        }
        const len_295 = Number(DeserializerPackNumber.INSTANCE.put(in__273));
        clients_280 = new Array<ClientInfo>(len_295);
        for (let idx_294 = 0;
        idx_294 < len_295;
        idx_294++)  {
            clients_280[idx_294] = ClientInfo.META.deserialize(sCtx_270, in__273);
            
        }
        const len_297 = Number(DeserializerPackNumber.INSTANCE.put(in__273));
        rootSigners_281 = new Array<Key>(len_297);
        for (let idx_296 = 0;
        idx_296 < len_297;
        idx_296++)  {
            rootSigners_281[idx_296] = Key.META.deserialize(sCtx_270, in__273);
            
        }
        cryptoLib_282 = CryptoLib.META.deserialize(sCtx_270, in__273);
        pingDuration_283 = in__273.readLong();
        parentUid_284 = FastMeta.META_UUID.deserialize(sCtx_270, in__273);
        countServersForRegistration_285 = in__273.readInt();
        timeoutForConnectToRegistrationServer_286 = in__273.readLong();
        uid_287 = FastMeta.META_UUID.deserialize(sCtx_270, in__273);
        alias_288 = FastMeta.META_UUID.deserialize(sCtx_270, in__273);
        masterKey_289 = Key.META.deserialize(sCtx_270, in__273);
        return new ClientStateForSave(registrationUri_278, servers_279, clients_280, rootSigners_281, cryptoLib_282, pingDuration_283, parentUid_284, countServersForRegistration_285, timeoutForConnectToRegistrationServer_286, uid_287, alias_288, masterKey_289);
        
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
    serialize(sCtx_298: FastFutureContext, obj_299: Cloud, _out_300: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_300, obj_299.data.length);
        for (const el_302 of obj_299.data)  {
            _out_300.writeShort(el_302);
            
        }
        
    }
    deserialize(sCtx_298: FastFutureContext, in__301: DataIn): Cloud  {
        let data_303: number[];
        const len_305 = Number(DeserializerPackNumber.INSTANCE.put(in__301));
        data_303 = new Array<number>(len_305);
        for (let idx_304 = 0;
        idx_304 < len_305;
        idx_304++)  {
            data_303[idx_304] = in__301.readShort();
            
        }
        return new Cloud(data_303);
        
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
export class CloudWeightMetaBodyImpl implements FastMetaType<CloudWeight>  {
    serialize(sCtx_306: FastFutureContext, obj_307: CloudWeight, _out_308: DataOut): void  {
        _out_308.writeShort(obj_307.sid);
        _out_308.writeLong(obj_307.weight);
        
    }
    deserialize(sCtx_306: FastFutureContext, in__309: DataIn): CloudWeight  {
        let sid_310: number;
        let weight_311: bigint;
        sid_310 = in__309.readShort();
        weight_311 = in__309.readLong();
        return new CloudWeight(sid_310, weight_311);
        
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
    serialize(sCtx_312: FastFutureContext, obj_313: CoderAndPort, _out_314: DataOut): void  {
        AetherCodec.META.serialize(sCtx_312, obj_313.codec, _out_314);
        _out_314.writeShort(obj_313.port);
        
    }
    deserialize(sCtx_312: FastFutureContext, in__315: DataIn): CoderAndPort  {
        let codec_316: AetherCodec;
        let port_317: number;
        codec_316 = AetherCodec.META.deserialize(sCtx_312, in__315);
        port_317 = in__315.readShort();
        return new CoderAndPort(codec_316, port_317);
        
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
    serialize(sCtx_318: FastFutureContext, obj_319: FinishResult, _out_320: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_318, obj_319.alias, _out_320);
        FastMeta.META_UUID.serialize(sCtx_318, obj_319.uid, _out_320);
        Cloud.META.serialize(sCtx_318, obj_319.cloud, _out_320);
        
    }
    deserialize(sCtx_318: FastFutureContext, in__321: DataIn): FinishResult  {
        let alias_322: UUID;
        let uid_323: UUID;
        let cloud_324: Cloud;
        alias_322 = FastMeta.META_UUID.deserialize(sCtx_318, in__321);
        uid_323 = FastMeta.META_UUID.deserialize(sCtx_318, in__321);
        cloud_324 = Cloud.META.deserialize(sCtx_318, in__321);
        return new FinishResult(alias_322, uid_323, cloud_324);
        
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
    serialize(sCtx_325: FastFutureContext, obj_326: HydrogenCurvePrivate, _out_327: DataOut): void  {
        if (obj_326.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_326.data must be 32 but was $ {
            obj_326.data.length
        }
        `);
        _out_327.write(obj_326.data);
        
    }
    deserialize(sCtx_325: FastFutureContext, in__328: DataIn): HydrogenCurvePrivate  {
        let data_330: Uint8Array;
        const len_332 = 32;
        const bytes_333 = in__328.readBytes(len_332);
        data_330 = bytes_333;
        return new HydrogenCurvePrivate(data_330);
        
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
    serialize(sCtx_334: FastFutureContext, obj_335: HydrogenCurvePrivate, _out_336: DataOut): void  {
        const typeId = typeof (obj_335 as any).getAetherTypeId === 'function' ? obj_335.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenCurvePrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_336.writeByte(typeId);
        switch(typeId)  {
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_334, obj_335 as any as HydrogenCurvePrivate, _out_336);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_334, obj_335 as any as SodiumChacha20Poly1305, _out_336);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_334, obj_335 as any as HydrogenSecretBox, _out_336);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_334, obj_335 as any as HydrogenCurvePublic, _out_336);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_334, obj_335 as any as SodiumCurvePublic, _out_336);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_334, obj_335 as any as SodiumCurvePrivate, _out_336);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_334, obj_335 as any as SodiumSignPublic, _out_336);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_334, obj_335 as any as HydrogenSignPublic, _out_336);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_334, obj_335 as any as SodiumSignPrivate, _out_336);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_334, obj_335 as any as HydrogenSignPrivate, _out_336);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenCurvePrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_334: FastFutureContext, in__337: DataIn): HydrogenCurvePrivate  {
        const typeId = in__337.readUByte();
        switch(typeId)  {
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_334, in__337) as any as HydrogenCurvePrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_334, in__337) as any as HydrogenCurvePrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_334, in__337) as any as HydrogenCurvePrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_334, in__337) as any as HydrogenCurvePrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_334, in__337) as any as HydrogenCurvePrivate;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_334, in__337) as any as HydrogenCurvePrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_334, in__337) as any as HydrogenCurvePrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_334, in__337) as any as HydrogenCurvePrivate;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_334, in__337) as any as HydrogenCurvePrivate;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_334, in__337) as any as HydrogenCurvePrivate;
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
    serialize(sCtx_338: FastFutureContext, obj_339: HydrogenCurvePublic, _out_340: DataOut): void  {
        if (obj_339.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_339.data must be 32 but was $ {
            obj_339.data.length
        }
        `);
        _out_340.write(obj_339.data);
        
    }
    deserialize(sCtx_338: FastFutureContext, in__341: DataIn): HydrogenCurvePublic  {
        let data_343: Uint8Array;
        const len_345 = 32;
        const bytes_346 = in__341.readBytes(len_345);
        data_343 = bytes_346;
        return new HydrogenCurvePublic(data_343);
        
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
    serialize(sCtx_347: FastFutureContext, obj_348: HydrogenCurvePublic, _out_349: DataOut): void  {
        const typeId = typeof (obj_348 as any).getAetherTypeId === 'function' ? obj_348.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenCurvePublic' with invalid type id $ {
            typeId
        }
        `);
        _out_349.writeByte(typeId);
        switch(typeId)  {
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_347, obj_348 as any as HydrogenCurvePublic, _out_349);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_347, obj_348 as any as SodiumChacha20Poly1305, _out_349);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_347, obj_348 as any as HydrogenSecretBox, _out_349);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_347, obj_348 as any as SodiumCurvePublic, _out_349);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_347, obj_348 as any as HydrogenCurvePrivate, _out_349);
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
            default: throw new Error(`Cannot serialize 'HydrogenCurvePublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_347: FastFutureContext, in__350: DataIn): HydrogenCurvePublic  {
        const typeId = in__350.readUByte();
        switch(typeId)  {
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePublic;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePublic;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePublic;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_347, in__350) as any as HydrogenCurvePublic;
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
    serialize(sCtx_351: FastFutureContext, obj_352: HydrogenSecretBox, _out_353: DataOut): void  {
        if (obj_352.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_352.data must be 32 but was $ {
            obj_352.data.length
        }
        `);
        _out_353.write(obj_352.data);
        
    }
    deserialize(sCtx_351: FastFutureContext, in__354: DataIn): HydrogenSecretBox  {
        let data_356: Uint8Array;
        const len_358 = 32;
        const bytes_359 = in__354.readBytes(len_358);
        data_356 = bytes_359;
        return new HydrogenSecretBox(data_356);
        
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
    serialize(sCtx_360: FastFutureContext, obj_361: HydrogenSecretBox, _out_362: DataOut): void  {
        const typeId = typeof (obj_361 as any).getAetherTypeId === 'function' ? obj_361.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenSecretBox' with invalid type id $ {
            typeId
        }
        `);
        _out_362.writeByte(typeId);
        switch(typeId)  {
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_360, obj_361 as any as HydrogenSecretBox, _out_362);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_360, obj_361 as any as SodiumChacha20Poly1305, _out_362);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_360, obj_361 as any as HydrogenCurvePublic, _out_362);
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
            default: throw new Error(`Cannot serialize 'HydrogenSecretBox' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_360: FastFutureContext, in__363: DataIn): HydrogenSecretBox  {
        const typeId = in__363.readUByte();
        switch(typeId)  {
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenSecretBox;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenSecretBox;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenSecretBox;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenSecretBox;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenSecretBox;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenSecretBox;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenSecretBox;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenSecretBox;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenSecretBox;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_360, in__363) as any as HydrogenSecretBox;
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
    serialize(sCtx_364: FastFutureContext, obj_365: HydrogenSignPrivate, _out_366: DataOut): void  {
        if (obj_365.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_365.data must be 64 but was $ {
            obj_365.data.length
        }
        `);
        _out_366.write(obj_365.data);
        
    }
    deserialize(sCtx_364: FastFutureContext, in__367: DataIn): HydrogenSignPrivate  {
        let data_369: Uint8Array;
        const len_371 = 64;
        const bytes_372 = in__367.readBytes(len_371);
        data_369 = bytes_372;
        return new HydrogenSignPrivate(data_369);
        
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
    serialize(sCtx_373: FastFutureContext, obj_374: HydrogenSignPrivate, _out_375: DataOut): void  {
        const typeId = typeof (obj_374 as any).getAetherTypeId === 'function' ? obj_374.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenSignPrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_375.writeByte(typeId);
        switch(typeId)  {
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_373, obj_374 as any as HydrogenSignPrivate, _out_375);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_373, obj_374 as any as SodiumChacha20Poly1305, _out_375);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_373, obj_374 as any as HydrogenSecretBox, _out_375);
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
            default: throw new Error(`Cannot serialize 'HydrogenSignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_373: FastFutureContext, in__376: DataIn): HydrogenSignPrivate  {
        const typeId = in__376.readUByte();
        switch(typeId)  {
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSignPrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSignPrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSignPrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSignPrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSignPrivate;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSignPrivate;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSignPrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSignPrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSignPrivate;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_373, in__376) as any as HydrogenSignPrivate;
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
    serialize(sCtx_377: FastFutureContext, obj_378: HydrogenSignPublic, _out_379: DataOut): void  {
        if (obj_378.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_378.data must be 32 but was $ {
            obj_378.data.length
        }
        `);
        _out_379.write(obj_378.data);
        
    }
    deserialize(sCtx_377: FastFutureContext, in__380: DataIn): HydrogenSignPublic  {
        let data_382: Uint8Array;
        const len_384 = 32;
        const bytes_385 = in__380.readBytes(len_384);
        data_382 = bytes_385;
        return new HydrogenSignPublic(data_382);
        
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
    serialize(sCtx_386: FastFutureContext, obj_387: HydrogenSignPublic, _out_388: DataOut): void  {
        const typeId = typeof (obj_387 as any).getAetherTypeId === 'function' ? obj_387.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenSignPublic' with invalid type id $ {
            typeId
        }
        `);
        _out_388.writeByte(typeId);
        switch(typeId)  {
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_386, obj_387 as any as HydrogenSignPublic, _out_388);
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
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_386, obj_387 as any as SodiumSignPrivate, _out_388);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_386, obj_387 as any as HydrogenSignPrivate, _out_388);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenSignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_386: FastFutureContext, in__389: DataIn): HydrogenSignPublic  {
        const typeId = in__389.readUByte();
        switch(typeId)  {
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPublic;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPublic;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPublic;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_386, in__389) as any as HydrogenSignPublic;
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
    serialize(sCtx_390: FastFutureContext, obj_391: IPAddressAndPorts, _out_392: DataOut): void  {
        IPAddress.META.serialize(sCtx_390, obj_391.address, _out_392);
        SerializerPackNumber.INSTANCE.put(_out_392, obj_391.coderAndPorts.length);
        for (const el_394 of obj_391.coderAndPorts)  {
            CoderAndPort.META.serialize(sCtx_390, el_394, _out_392);
            
        }
        
    }
    deserialize(sCtx_390: FastFutureContext, in__393: DataIn): IPAddressAndPorts  {
        let address_395: IPAddress;
        let coderAndPorts_396: CoderAndPort[];
        address_395 = IPAddress.META.deserialize(sCtx_390, in__393);
        const len_398 = Number(DeserializerPackNumber.INSTANCE.put(in__393));
        coderAndPorts_396 = new Array<CoderAndPort>(len_398);
        for (let idx_397 = 0;
        idx_397 < len_398;
        idx_397++)  {
            coderAndPorts_396[idx_397] = CoderAndPort.META.deserialize(sCtx_390, in__393);
            
        }
        return new IPAddressAndPorts(address_395, coderAndPorts_396);
        
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
    serialize(sCtx_399: FastFutureContext, obj_400: IPAddressAndPortsList, _out_401: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_401, obj_400.addresses.length);
        for (const el_403 of obj_400.addresses)  {
            IPAddressAndPorts.META.serialize(sCtx_399, el_403, _out_401);
            
        }
        
    }
    deserialize(sCtx_399: FastFutureContext, in__402: DataIn): IPAddressAndPortsList  {
        let addresses_404: IPAddressAndPorts[];
        const len_406 = Number(DeserializerPackNumber.INSTANCE.put(in__402));
        addresses_404 = new Array<IPAddressAndPorts>(len_406);
        for (let idx_405 = 0;
        idx_405 < len_406;
        idx_405++)  {
            addresses_404[idx_405] = IPAddressAndPorts.META.deserialize(sCtx_399, in__402);
            
        }
        return new IPAddressAndPortsList(addresses_404);
        
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
    serialize(sCtx_407: FastFutureContext, obj_408: IPAddressV4, _out_409: DataOut): void  {
        if (obj_408.data.length !== 4) throw new Error(`IllegalStateException: Array length for obj_408.data must be 4 but was $ {
            obj_408.data.length
        }
        `);
        _out_409.write(obj_408.data);
        
    }
    deserialize(sCtx_407: FastFutureContext, in__410: DataIn): IPAddressV4  {
        let data_412: Uint8Array;
        const len_414 = 4;
        const bytes_415 = in__410.readBytes(len_414);
        data_412 = bytes_415;
        return new IPAddressV4(data_412);
        
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
    serialize(sCtx_416: FastFutureContext, obj_417: IPAddressV4, _out_418: DataOut): void  {
        const typeId = typeof (obj_417 as any).getAetherTypeId === 'function' ? obj_417.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'IPAddressV4' with invalid type id $ {
            typeId
        }
        `);
        _out_418.writeByte(typeId);
        switch(typeId)  {
            case 1: (IPAddressV4 as any).META_BODY.serialize(sCtx_416, obj_417 as any as IPAddressV4, _out_418);
            break;
            case 2: (IPAddressV6 as any).META_BODY.serialize(sCtx_416, obj_417 as any as IPAddressV6, _out_418);
            break;
            case 3: (IPAddressWeb as any).META_BODY.serialize(sCtx_416, obj_417 as any as IPAddressWeb, _out_418);
            break;
            default: throw new Error(`Cannot serialize 'IPAddressV4' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_416: FastFutureContext, in__419: DataIn): IPAddressV4  {
        const typeId = in__419.readUByte();
        switch(typeId)  {
            case 1: return (IPAddressV4 as any).META_BODY.deserialize(sCtx_416, in__419) as any as IPAddressV4;
            case 2: return (IPAddressV6 as any).META_BODY.deserialize(sCtx_416, in__419) as any as IPAddressV4;
            case 3: return (IPAddressWeb as any).META_BODY.deserialize(sCtx_416, in__419) as any as IPAddressV4;
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
    serialize(sCtx_420: FastFutureContext, obj_421: IPAddressV6, _out_422: DataOut): void  {
        if (obj_421.data.length !== 6) throw new Error(`IllegalStateException: Array length for obj_421.data must be 6 but was $ {
            obj_421.data.length
        }
        `);
        _out_422.write(obj_421.data);
        
    }
    deserialize(sCtx_420: FastFutureContext, in__423: DataIn): IPAddressV6  {
        let data_425: Uint8Array;
        const len_427 = 6;
        const bytes_428 = in__423.readBytes(len_427);
        data_425 = bytes_428;
        return new IPAddressV6(data_425);
        
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
    serialize(sCtx_429: FastFutureContext, obj_430: IPAddressV6, _out_431: DataOut): void  {
        const typeId = typeof (obj_430 as any).getAetherTypeId === 'function' ? obj_430.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'IPAddressV6' with invalid type id $ {
            typeId
        }
        `);
        _out_431.writeByte(typeId);
        switch(typeId)  {
            case 2: (IPAddressV6 as any).META_BODY.serialize(sCtx_429, obj_430 as any as IPAddressV6, _out_431);
            break;
            case 1: (IPAddressV4 as any).META_BODY.serialize(sCtx_429, obj_430 as any as IPAddressV4, _out_431);
            break;
            case 3: (IPAddressWeb as any).META_BODY.serialize(sCtx_429, obj_430 as any as IPAddressWeb, _out_431);
            break;
            default: throw new Error(`Cannot serialize 'IPAddressV6' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_429: FastFutureContext, in__432: DataIn): IPAddressV6  {
        const typeId = in__432.readUByte();
        switch(typeId)  {
            case 2: return (IPAddressV6 as any).META_BODY.deserialize(sCtx_429, in__432) as any as IPAddressV6;
            case 1: return (IPAddressV4 as any).META_BODY.deserialize(sCtx_429, in__432) as any as IPAddressV6;
            case 3: return (IPAddressWeb as any).META_BODY.deserialize(sCtx_429, in__432) as any as IPAddressV6;
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
    serialize(sCtx_433: FastFutureContext, obj_434: IPAddressWeb, _out_435: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_435, obj_434.data.length);
        _out_435.write(obj_434.data);
        
    }
    deserialize(sCtx_433: FastFutureContext, in__436: DataIn): IPAddressWeb  {
        let data_438: Uint8Array;
        const len_440 = Number(DeserializerPackNumber.INSTANCE.put(in__436));
        const bytes_441 = in__436.readBytes(len_440);
        data_438 = bytes_441;
        return new IPAddressWeb(data_438);
        
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
    serialize(sCtx_442: FastFutureContext, obj_443: IPAddressWeb, _out_444: DataOut): void  {
        const typeId = typeof (obj_443 as any).getAetherTypeId === 'function' ? obj_443.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'IPAddressWeb' with invalid type id $ {
            typeId
        }
        `);
        _out_444.writeByte(typeId);
        switch(typeId)  {
            case 3: (IPAddressWeb as any).META_BODY.serialize(sCtx_442, obj_443 as any as IPAddressWeb, _out_444);
            break;
            case 1: (IPAddressV4 as any).META_BODY.serialize(sCtx_442, obj_443 as any as IPAddressV4, _out_444);
            break;
            case 2: (IPAddressV6 as any).META_BODY.serialize(sCtx_442, obj_443 as any as IPAddressV6, _out_444);
            break;
            default: throw new Error(`Cannot serialize 'IPAddressWeb' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_442: FastFutureContext, in__445: DataIn): IPAddressWeb  {
        const typeId = in__445.readUByte();
        switch(typeId)  {
            case 3: return (IPAddressWeb as any).META_BODY.deserialize(sCtx_442, in__445) as any as IPAddressWeb;
            case 1: return (IPAddressV4 as any).META_BODY.deserialize(sCtx_442, in__445) as any as IPAddressWeb;
            case 2: return (IPAddressV6 as any).META_BODY.deserialize(sCtx_442, in__445) as any as IPAddressWeb;
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
export class KeyValuePairMetaBodyImpl implements FastMetaType<KeyValuePair>  {
    serialize(sCtx_446: FastFutureContext, obj_447: KeyValuePair, _out_448: DataOut): void  {
        const stringBytes_450 = new TextEncoder().encode(obj_447.key);
        SerializerPackNumber.INSTANCE.put(_out_448, stringBytes_450.length);
        _out_448.write(stringBytes_450);
        const stringBytes_452 = new TextEncoder().encode(obj_447.value);
        SerializerPackNumber.INSTANCE.put(_out_448, stringBytes_452.length);
        _out_448.write(stringBytes_452);
        
    }
    deserialize(sCtx_446: FastFutureContext, in__449: DataIn): KeyValuePair  {
        let _key_454: string;
        let value_455: string;
        let stringBytes_456: Uint8Array;
        const len_458 = Number(DeserializerPackNumber.INSTANCE.put(in__449));
        const bytes_459 = in__449.readBytes(len_458);
        stringBytes_456 = bytes_459;
        _key_454 = new TextDecoder('utf-8').decode(stringBytes_456);
        let stringBytes_460: Uint8Array;
        const len_462 = Number(DeserializerPackNumber.INSTANCE.put(in__449));
        const bytes_463 = in__449.readBytes(len_462);
        stringBytes_460 = bytes_463;
        value_455 = new TextDecoder('utf-8').decode(stringBytes_460);
        return new KeyValuePair(_key_454, value_455);
        
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
    serialize(sCtx_464: FastFutureContext, obj_465: Message, _out_466: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_464, obj_465.uid, _out_466);
        SerializerPackNumber.INSTANCE.put(_out_466, obj_465.data.length);
        _out_466.write(obj_465.data);
        
    }
    deserialize(sCtx_464: FastFutureContext, in__467: DataIn): Message  {
        let uid_469: UUID;
        let data_470: Uint8Array;
        uid_469 = FastMeta.META_UUID.deserialize(sCtx_464, in__467);
        const len_472 = Number(DeserializerPackNumber.INSTANCE.put(in__467));
        const bytes_473 = in__467.readBytes(len_472);
        data_470 = bytes_473;
        return new Message(uid_469, data_470);
        
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
    serialize(sCtx_474: FastFutureContext, obj_475: MessageInfo, _out_476: DataOut): void  {
        _out_476.writeLong(obj_475.timestamp);
        FastMeta.META_UUID.serialize(sCtx_474, obj_475.fromUid, _out_476);
        FastMeta.META_UUID.serialize(sCtx_474, obj_475.toUid, _out_476);
        _out_476.writeInt(obj_475.size);
        FastMeta.META_UUID.serialize(sCtx_474, obj_475.messageId, _out_476);
        
    }
    deserialize(sCtx_474: FastFutureContext, in__477: DataIn): MessageInfo  {
        let timestamp_478: bigint;
        let fromUid_479: UUID;
        let toUid_480: UUID;
        let size_481: number;
        let messageId_482: UUID;
        timestamp_478 = in__477.readLong();
        fromUid_479 = FastMeta.META_UUID.deserialize(sCtx_474, in__477);
        toUid_480 = FastMeta.META_UUID.deserialize(sCtx_474, in__477);
        size_481 = in__477.readInt();
        messageId_482 = FastMeta.META_UUID.deserialize(sCtx_474, in__477);
        return new MessageInfo(timestamp_478, fromUid_479, toUid_480, size_481, messageId_482);
        
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
    serialize(sCtx_483: FastFutureContext, obj_484: MoneyOperation, _out_485: DataOut): void  {
        _out_485.writeLong(obj_484.id);
        FastMeta.META_UUID.serialize(sCtx_483, obj_484.from, _out_485);
        FastMeta.META_UUID.serialize(sCtx_483, obj_484.to, _out_485);
        _out_485.writeLong(obj_484.amount);
        _out_485.writeLong(obj_484.time);
        _out_485.writeBoolean(obj_484.credit);
        Status.META.serialize(sCtx_483, obj_484.status, _out_485);
        
    }
    deserialize(sCtx_483: FastFutureContext, in__486: DataIn): MoneyOperation  {
        let id_487: bigint;
        let from_488: UUID;
        let to_489: UUID;
        let amount_490: bigint;
        let time_491: bigint;
        let credit_492: boolean;
        let status_493: Status;
        id_487 = in__486.readLong();
        from_488 = FastMeta.META_UUID.deserialize(sCtx_483, in__486);
        to_489 = FastMeta.META_UUID.deserialize(sCtx_483, in__486);
        amount_490 = in__486.readLong();
        time_491 = in__486.readLong();
        credit_492 = in__486.readBoolean();
        status_493 = Status.META.deserialize(sCtx_483, in__486);
        return new MoneyOperation(id_487, from_488, to_489, amount_490, time_491, credit_492, status_493);
        
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
    serialize(sCtx_494: FastFutureContext, obj_495: PairKeysAsym, _out_496: DataOut): void  {
        Key.META.serialize(sCtx_494, obj_495.privateKey, _out_496);
        Key.META.serialize(sCtx_494, obj_495.publicKey, _out_496);
        
    }
    deserialize(sCtx_494: FastFutureContext, in__497: DataIn): PairKeysAsym  {
        let privateKey_498: Key;
        let publicKey_499: Key;
        privateKey_498 = Key.META.deserialize(sCtx_494, in__497);
        publicKey_499 = Key.META.deserialize(sCtx_494, in__497);
        return new PairKeysAsym(privateKey_498, publicKey_499);
        
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
    serialize(sCtx_500: FastFutureContext, obj_501: PairKeysAsym, _out_502: DataOut): void  {
        const typeId = typeof (obj_501 as any).getAetherTypeId === 'function' ? obj_501.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeysAsym' with invalid type id $ {
            typeId
        }
        `);
        _out_502.writeByte(typeId);
        switch(typeId)  {
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_500, obj_501 as any as PairKeysAsym, _out_502);
            break;
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_500, obj_501 as any as PairKeysSign, _out_502);
            break;
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_500, obj_501 as any as PairKeysAsymSigned, _out_502);
            break;
            default: throw new Error(`Cannot serialize 'PairKeysAsym' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_500: FastFutureContext, in__503: DataIn): PairKeysAsym  {
        const typeId = in__503.readUByte();
        switch(typeId)  {
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_500, in__503) as any as PairKeysAsym;
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_500, in__503) as any as PairKeysAsym;
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_500, in__503) as any as PairKeysAsym;
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
    serialize(sCtx_504: FastFutureContext, obj_505: PairKeysAsymSigned, _out_506: DataOut): void  {
        Key.META.serialize(sCtx_504, obj_505.privateKey, _out_506);
        SignedKey.META.serialize(sCtx_504, obj_505.publicKey, _out_506);
        
    }
    deserialize(sCtx_504: FastFutureContext, in__507: DataIn): PairKeysAsymSigned  {
        let privateKey_508: Key;
        let publicKey_509: SignedKey;
        privateKey_508 = Key.META.deserialize(sCtx_504, in__507);
        publicKey_509 = SignedKey.META.deserialize(sCtx_504, in__507);
        return new PairKeysAsymSigned(privateKey_508, publicKey_509);
        
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
    serialize(sCtx_510: FastFutureContext, obj_511: PairKeysAsymSigned, _out_512: DataOut): void  {
        const typeId = typeof (obj_511 as any).getAetherTypeId === 'function' ? obj_511.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeysAsymSigned' with invalid type id $ {
            typeId
        }
        `);
        _out_512.writeByte(typeId);
        switch(typeId)  {
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_510, obj_511 as any as PairKeysAsymSigned, _out_512);
            break;
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_510, obj_511 as any as PairKeysSign, _out_512);
            break;
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_510, obj_511 as any as PairKeysAsym, _out_512);
            break;
            default: throw new Error(`Cannot serialize 'PairKeysAsymSigned' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_510: FastFutureContext, in__513: DataIn): PairKeysAsymSigned  {
        const typeId = in__513.readUByte();
        switch(typeId)  {
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_510, in__513) as any as PairKeysAsymSigned;
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_510, in__513) as any as PairKeysAsymSigned;
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_510, in__513) as any as PairKeysAsymSigned;
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
    serialize(sCtx_514: FastFutureContext, obj_515: PairKeysSign, _out_516: DataOut): void  {
        Key.META.serialize(sCtx_514, obj_515.privateKey, _out_516);
        Key.META.serialize(sCtx_514, obj_515.publicKey, _out_516);
        
    }
    deserialize(sCtx_514: FastFutureContext, in__517: DataIn): PairKeysSign  {
        let privateKey_518: Key;
        let publicKey_519: Key;
        privateKey_518 = Key.META.deserialize(sCtx_514, in__517);
        publicKey_519 = Key.META.deserialize(sCtx_514, in__517);
        return new PairKeysSign(privateKey_518, publicKey_519);
        
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
    serialize(sCtx_520: FastFutureContext, obj_521: PairKeysSign, _out_522: DataOut): void  {
        const typeId = typeof (obj_521 as any).getAetherTypeId === 'function' ? obj_521.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeysSign' with invalid type id $ {
            typeId
        }
        `);
        _out_522.writeByte(typeId);
        switch(typeId)  {
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_520, obj_521 as any as PairKeysSign, _out_522);
            break;
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_520, obj_521 as any as PairKeysAsym, _out_522);
            break;
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_520, obj_521 as any as PairKeysAsymSigned, _out_522);
            break;
            default: throw new Error(`Cannot serialize 'PairKeysSign' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_520: FastFutureContext, in__523: DataIn): PairKeysSign  {
        const typeId = in__523.readUByte();
        switch(typeId)  {
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_520, in__523) as any as PairKeysSign;
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_520, in__523) as any as PairKeysSign;
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_520, in__523) as any as PairKeysSign;
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
    serialize(sCtx_524: FastFutureContext, obj_525: ServerDescriptor, _out_526: DataOut): void  {
        _out_526.writeShort(obj_525.id);
        IPAddressAndPortsList.META.serialize(sCtx_524, obj_525.ipAddress, _out_526);
        
    }
    deserialize(sCtx_524: FastFutureContext, in__527: DataIn): ServerDescriptor  {
        let id_528: number;
        let ipAddress_529: IPAddressAndPortsList;
        id_528 = in__527.readShort();
        ipAddress_529 = IPAddressAndPortsList.META.deserialize(sCtx_524, in__527);
        return new ServerDescriptor(id_528, ipAddress_529);
        
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
    serialize(sCtx_530: FastFutureContext, obj_531: ServerDescriptorWithGeo, _out_532: DataOut): void  {
        _out_532.writeShort(obj_531.id);
        IPAddressAndPortsList.META.serialize(sCtx_530, obj_531.ipAddress, _out_532);
        _out_532.writeDouble(obj_531.latitude);
        _out_532.writeDouble(obj_531.longitude);
        
    }
    deserialize(sCtx_530: FastFutureContext, in__533: DataIn): ServerDescriptorWithGeo  {
        let id_534: number;
        let ipAddress_535: IPAddressAndPortsList;
        let latitude_536: number;
        let longitude_537: number;
        id_534 = in__533.readShort();
        ipAddress_535 = IPAddressAndPortsList.META.deserialize(sCtx_530, in__533);
        latitude_536 = in__533.readDouble();
        longitude_537 = in__533.readDouble();
        return new ServerDescriptorWithGeo(id_534, ipAddress_535, latitude_536, longitude_537);
        
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
    serialize(sCtx_538: FastFutureContext, obj_539: SignAE_ED25519, _out_540: DataOut): void  {
        if (obj_539.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_539.data must be 64 but was $ {
            obj_539.data.length
        }
        `);
        _out_540.write(obj_539.data);
        
    }
    deserialize(sCtx_538: FastFutureContext, in__541: DataIn): SignAE_ED25519  {
        let data_543: Uint8Array;
        const len_545 = 64;
        const bytes_546 = in__541.readBytes(len_545);
        data_543 = bytes_546;
        return new SignAE_ED25519(data_543);
        
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
    serialize(sCtx_547: FastFutureContext, obj_548: SignAE_ED25519, _out_549: DataOut): void  {
        const typeId = typeof (obj_548 as any).getAetherTypeId === 'function' ? obj_548.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SignAE_ED25519' with invalid type id $ {
            typeId
        }
        `);
        _out_549.writeByte(typeId);
        switch(typeId)  {
            case 1: (SignAE_ED25519 as any).META_BODY.serialize(sCtx_547, obj_548 as any as SignAE_ED25519, _out_549);
            break;
            case 2: (SignHYDROGEN as any).META_BODY.serialize(sCtx_547, obj_548 as any as SignHYDROGEN, _out_549);
            break;
            default: throw new Error(`Cannot serialize 'SignAE_ED25519' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_547: FastFutureContext, in__550: DataIn): SignAE_ED25519  {
        const typeId = in__550.readUByte();
        switch(typeId)  {
            case 1: return (SignAE_ED25519 as any).META_BODY.deserialize(sCtx_547, in__550) as any as SignAE_ED25519;
            case 2: return (SignHYDROGEN as any).META_BODY.deserialize(sCtx_547, in__550) as any as SignAE_ED25519;
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
    serialize(sCtx_551: FastFutureContext, obj_552: SignedKey, _out_553: DataOut): void  {
        Key.META.serialize(sCtx_551, obj_552.key, _out_553);
        Sign.META.serialize(sCtx_551, obj_552.sign, _out_553);
        
    }
    deserialize(sCtx_551: FastFutureContext, in__554: DataIn): SignedKey  {
        let _key_555: Key;
        let sign_556: Sign;
        _key_555 = Key.META.deserialize(sCtx_551, in__554);
        sign_556 = Sign.META.deserialize(sCtx_551, in__554);
        return new SignedKey(_key_555, sign_556);
        
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
    serialize(sCtx_557: FastFutureContext, obj_558: SignHYDROGEN, _out_559: DataOut): void  {
        if (obj_558.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_558.data must be 64 but was $ {
            obj_558.data.length
        }
        `);
        _out_559.write(obj_558.data);
        
    }
    deserialize(sCtx_557: FastFutureContext, in__560: DataIn): SignHYDROGEN  {
        let data_562: Uint8Array;
        const len_564 = 64;
        const bytes_565 = in__560.readBytes(len_564);
        data_562 = bytes_565;
        return new SignHYDROGEN(data_562);
        
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
    serialize(sCtx_566: FastFutureContext, obj_567: SignHYDROGEN, _out_568: DataOut): void  {
        const typeId = typeof (obj_567 as any).getAetherTypeId === 'function' ? obj_567.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SignHYDROGEN' with invalid type id $ {
            typeId
        }
        `);
        _out_568.writeByte(typeId);
        switch(typeId)  {
            case 2: (SignHYDROGEN as any).META_BODY.serialize(sCtx_566, obj_567 as any as SignHYDROGEN, _out_568);
            break;
            case 1: (SignAE_ED25519 as any).META_BODY.serialize(sCtx_566, obj_567 as any as SignAE_ED25519, _out_568);
            break;
            default: throw new Error(`Cannot serialize 'SignHYDROGEN' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_566: FastFutureContext, in__569: DataIn): SignHYDROGEN  {
        const typeId = in__569.readUByte();
        switch(typeId)  {
            case 2: return (SignHYDROGEN as any).META_BODY.deserialize(sCtx_566, in__569) as any as SignHYDROGEN;
            case 1: return (SignAE_ED25519 as any).META_BODY.deserialize(sCtx_566, in__569) as any as SignHYDROGEN;
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
    serialize(sCtx_570: FastFutureContext, obj_571: SodiumChacha20Poly1305, _out_572: DataOut): void  {
        if (obj_571.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_571.data must be 32 but was $ {
            obj_571.data.length
        }
        `);
        _out_572.write(obj_571.data);
        
    }
    deserialize(sCtx_570: FastFutureContext, in__573: DataIn): SodiumChacha20Poly1305  {
        let data_575: Uint8Array;
        const len_577 = 32;
        const bytes_578 = in__573.readBytes(len_577);
        data_575 = bytes_578;
        return new SodiumChacha20Poly1305(data_575);
        
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
    serialize(sCtx_579: FastFutureContext, obj_580: SodiumChacha20Poly1305, _out_581: DataOut): void  {
        const typeId = typeof (obj_580 as any).getAetherTypeId === 'function' ? obj_580.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumChacha20Poly1305' with invalid type id $ {
            typeId
        }
        `);
        _out_581.writeByte(typeId);
        switch(typeId)  {
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_579, obj_580 as any as SodiumChacha20Poly1305, _out_581);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_579, obj_580 as any as HydrogenSecretBox, _out_581);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_579, obj_580 as any as HydrogenCurvePublic, _out_581);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_579, obj_580 as any as SodiumCurvePublic, _out_581);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_579, obj_580 as any as HydrogenCurvePrivate, _out_581);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_579, obj_580 as any as SodiumCurvePrivate, _out_581);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_579, obj_580 as any as SodiumSignPublic, _out_581);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_579, obj_580 as any as HydrogenSignPublic, _out_581);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_579, obj_580 as any as SodiumSignPrivate, _out_581);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_579, obj_580 as any as HydrogenSignPrivate, _out_581);
            break;
            default: throw new Error(`Cannot serialize 'SodiumChacha20Poly1305' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_579: FastFutureContext, in__582: DataIn): SodiumChacha20Poly1305  {
        const typeId = in__582.readUByte();
        switch(typeId)  {
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_579, in__582) as any as SodiumChacha20Poly1305;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_579, in__582) as any as SodiumChacha20Poly1305;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_579, in__582) as any as SodiumChacha20Poly1305;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_579, in__582) as any as SodiumChacha20Poly1305;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_579, in__582) as any as SodiumChacha20Poly1305;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_579, in__582) as any as SodiumChacha20Poly1305;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_579, in__582) as any as SodiumChacha20Poly1305;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_579, in__582) as any as SodiumChacha20Poly1305;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_579, in__582) as any as SodiumChacha20Poly1305;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_579, in__582) as any as SodiumChacha20Poly1305;
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
    serialize(sCtx_583: FastFutureContext, obj_584: SodiumCurvePrivate, _out_585: DataOut): void  {
        if (obj_584.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_584.data must be 32 but was $ {
            obj_584.data.length
        }
        `);
        _out_585.write(obj_584.data);
        
    }
    deserialize(sCtx_583: FastFutureContext, in__586: DataIn): SodiumCurvePrivate  {
        let data_588: Uint8Array;
        const len_590 = 32;
        const bytes_591 = in__586.readBytes(len_590);
        data_588 = bytes_591;
        return new SodiumCurvePrivate(data_588);
        
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
    serialize(sCtx_592: FastFutureContext, obj_593: SodiumCurvePrivate, _out_594: DataOut): void  {
        const typeId = typeof (obj_593 as any).getAetherTypeId === 'function' ? obj_593.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumCurvePrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_594.writeByte(typeId);
        switch(typeId)  {
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_592, obj_593 as any as SodiumCurvePrivate, _out_594);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_592, obj_593 as any as SodiumChacha20Poly1305, _out_594);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_592, obj_593 as any as HydrogenSecretBox, _out_594);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_592, obj_593 as any as HydrogenCurvePublic, _out_594);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_592, obj_593 as any as SodiumCurvePublic, _out_594);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_592, obj_593 as any as HydrogenCurvePrivate, _out_594);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_592, obj_593 as any as SodiumSignPublic, _out_594);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_592, obj_593 as any as HydrogenSignPublic, _out_594);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_592, obj_593 as any as SodiumSignPrivate, _out_594);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_592, obj_593 as any as HydrogenSignPrivate, _out_594);
            break;
            default: throw new Error(`Cannot serialize 'SodiumCurvePrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_592: FastFutureContext, in__595: DataIn): SodiumCurvePrivate  {
        const typeId = in__595.readUByte();
        switch(typeId)  {
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_592, in__595) as any as SodiumCurvePrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_592, in__595) as any as SodiumCurvePrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_592, in__595) as any as SodiumCurvePrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_592, in__595) as any as SodiumCurvePrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_592, in__595) as any as SodiumCurvePrivate;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_592, in__595) as any as SodiumCurvePrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_592, in__595) as any as SodiumCurvePrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_592, in__595) as any as SodiumCurvePrivate;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_592, in__595) as any as SodiumCurvePrivate;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_592, in__595) as any as SodiumCurvePrivate;
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
    serialize(sCtx_596: FastFutureContext, obj_597: SodiumCurvePublic, _out_598: DataOut): void  {
        if (obj_597.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_597.data must be 32 but was $ {
            obj_597.data.length
        }
        `);
        _out_598.write(obj_597.data);
        
    }
    deserialize(sCtx_596: FastFutureContext, in__599: DataIn): SodiumCurvePublic  {
        let data_601: Uint8Array;
        const len_603 = 32;
        const bytes_604 = in__599.readBytes(len_603);
        data_601 = bytes_604;
        return new SodiumCurvePublic(data_601);
        
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
    serialize(sCtx_605: FastFutureContext, obj_606: SodiumCurvePublic, _out_607: DataOut): void  {
        const typeId = typeof (obj_606 as any).getAetherTypeId === 'function' ? obj_606.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumCurvePublic' with invalid type id $ {
            typeId
        }
        `);
        _out_607.writeByte(typeId);
        switch(typeId)  {
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_605, obj_606 as any as SodiumCurvePublic, _out_607);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_605, obj_606 as any as SodiumChacha20Poly1305, _out_607);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_605, obj_606 as any as HydrogenSecretBox, _out_607);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_605, obj_606 as any as HydrogenCurvePublic, _out_607);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_605, obj_606 as any as HydrogenCurvePrivate, _out_607);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_605, obj_606 as any as SodiumCurvePrivate, _out_607);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_605, obj_606 as any as SodiumSignPublic, _out_607);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_605, obj_606 as any as HydrogenSignPublic, _out_607);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_605, obj_606 as any as SodiumSignPrivate, _out_607);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_605, obj_606 as any as HydrogenSignPrivate, _out_607);
            break;
            default: throw new Error(`Cannot serialize 'SodiumCurvePublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_605: FastFutureContext, in__608: DataIn): SodiumCurvePublic  {
        const typeId = in__608.readUByte();
        switch(typeId)  {
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_605, in__608) as any as SodiumCurvePublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_605, in__608) as any as SodiumCurvePublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_605, in__608) as any as SodiumCurvePublic;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_605, in__608) as any as SodiumCurvePublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_605, in__608) as any as SodiumCurvePublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_605, in__608) as any as SodiumCurvePublic;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_605, in__608) as any as SodiumCurvePublic;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_605, in__608) as any as SodiumCurvePublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_605, in__608) as any as SodiumCurvePublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_605, in__608) as any as SodiumCurvePublic;
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
    serialize(sCtx_609: FastFutureContext, obj_610: SodiumSignPrivate, _out_611: DataOut): void  {
        if (obj_610.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_610.data must be 64 but was $ {
            obj_610.data.length
        }
        `);
        _out_611.write(obj_610.data);
        
    }
    deserialize(sCtx_609: FastFutureContext, in__612: DataIn): SodiumSignPrivate  {
        let data_614: Uint8Array;
        const len_616 = 64;
        const bytes_617 = in__612.readBytes(len_616);
        data_614 = bytes_617;
        return new SodiumSignPrivate(data_614);
        
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
    serialize(sCtx_618: FastFutureContext, obj_619: SodiumSignPrivate, _out_620: DataOut): void  {
        const typeId = typeof (obj_619 as any).getAetherTypeId === 'function' ? obj_619.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumSignPrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_620.writeByte(typeId);
        switch(typeId)  {
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_618, obj_619 as any as SodiumSignPrivate, _out_620);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_618, obj_619 as any as SodiumChacha20Poly1305, _out_620);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_618, obj_619 as any as HydrogenSecretBox, _out_620);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_618, obj_619 as any as HydrogenCurvePublic, _out_620);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_618, obj_619 as any as SodiumCurvePublic, _out_620);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_618, obj_619 as any as HydrogenCurvePrivate, _out_620);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_618, obj_619 as any as SodiumCurvePrivate, _out_620);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_618, obj_619 as any as SodiumSignPublic, _out_620);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_618, obj_619 as any as HydrogenSignPublic, _out_620);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_618, obj_619 as any as HydrogenSignPrivate, _out_620);
            break;
            default: throw new Error(`Cannot serialize 'SodiumSignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_618: FastFutureContext, in__621: DataIn): SodiumSignPrivate  {
        const typeId = in__621.readUByte();
        switch(typeId)  {
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_618, in__621) as any as SodiumSignPrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_618, in__621) as any as SodiumSignPrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_618, in__621) as any as SodiumSignPrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_618, in__621) as any as SodiumSignPrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_618, in__621) as any as SodiumSignPrivate;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_618, in__621) as any as SodiumSignPrivate;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_618, in__621) as any as SodiumSignPrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_618, in__621) as any as SodiumSignPrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_618, in__621) as any as SodiumSignPrivate;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_618, in__621) as any as SodiumSignPrivate;
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
    serialize(sCtx_622: FastFutureContext, obj_623: SodiumSignPublic, _out_624: DataOut): void  {
        if (obj_623.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_623.data must be 32 but was $ {
            obj_623.data.length
        }
        `);
        _out_624.write(obj_623.data);
        
    }
    deserialize(sCtx_622: FastFutureContext, in__625: DataIn): SodiumSignPublic  {
        let data_627: Uint8Array;
        const len_629 = 32;
        const bytes_630 = in__625.readBytes(len_629);
        data_627 = bytes_630;
        return new SodiumSignPublic(data_627);
        
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
    serialize(sCtx_631: FastFutureContext, obj_632: SodiumSignPublic, _out_633: DataOut): void  {
        const typeId = typeof (obj_632 as any).getAetherTypeId === 'function' ? obj_632.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumSignPublic' with invalid type id $ {
            typeId
        }
        `);
        _out_633.writeByte(typeId);
        switch(typeId)  {
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_631, obj_632 as any as SodiumSignPublic, _out_633);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_631, obj_632 as any as SodiumChacha20Poly1305, _out_633);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_631, obj_632 as any as HydrogenSecretBox, _out_633);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_631, obj_632 as any as HydrogenCurvePublic, _out_633);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_631, obj_632 as any as SodiumCurvePublic, _out_633);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_631, obj_632 as any as HydrogenCurvePrivate, _out_633);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_631, obj_632 as any as SodiumCurvePrivate, _out_633);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_631, obj_632 as any as HydrogenSignPublic, _out_633);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_631, obj_632 as any as SodiumSignPrivate, _out_633);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_631, obj_632 as any as HydrogenSignPrivate, _out_633);
            break;
            default: throw new Error(`Cannot serialize 'SodiumSignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_631: FastFutureContext, in__634: DataIn): SodiumSignPublic  {
        const typeId = in__634.readUByte();
        switch(typeId)  {
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_631, in__634) as any as SodiumSignPublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_631, in__634) as any as SodiumSignPublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_631, in__634) as any as SodiumSignPublic;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_631, in__634) as any as SodiumSignPublic;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_631, in__634) as any as SodiumSignPublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_631, in__634) as any as SodiumSignPublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_631, in__634) as any as SodiumSignPublic;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_631, in__634) as any as SodiumSignPublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_631, in__634) as any as SodiumSignPublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_631, in__634) as any as SodiumSignPublic;
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
    serialize(sCtx_635: FastFutureContext, obj_636: TelemetryCPP, _out_637: DataOut): void  {
        _out_637.writeInt(obj_636.utm_id);
        SerializerPackNumber.INSTANCE.put(_out_637, obj_636.blob.length);
        _out_637.write(obj_636.blob);
        const stringBytes_640 = new TextEncoder().encode(obj_636.lib_version);
        SerializerPackNumber.INSTANCE.put(_out_637, stringBytes_640.length);
        _out_637.write(stringBytes_640);
        const stringBytes_642 = new TextEncoder().encode(obj_636.os);
        SerializerPackNumber.INSTANCE.put(_out_637, stringBytes_642.length);
        _out_637.write(stringBytes_642);
        const stringBytes_644 = new TextEncoder().encode(obj_636.compiler);
        SerializerPackNumber.INSTANCE.put(_out_637, stringBytes_644.length);
        _out_637.write(stringBytes_644);
        
    }
    deserialize(sCtx_635: FastFutureContext, in__638: DataIn): TelemetryCPP  {
        let utm_id_646: number;
        let blob_647: Uint8Array;
        let lib_version_648: string;
        let os_649: string;
        let compiler_650: string;
        utm_id_646 = in__638.readInt();
        const len_652 = Number(DeserializerPackNumber.INSTANCE.put(in__638));
        const bytes_653 = in__638.readBytes(len_652);
        blob_647 = bytes_653;
        let stringBytes_654: Uint8Array;
        const len_656 = Number(DeserializerPackNumber.INSTANCE.put(in__638));
        const bytes_657 = in__638.readBytes(len_656);
        stringBytes_654 = bytes_657;
        lib_version_648 = new TextDecoder('utf-8').decode(stringBytes_654);
        let stringBytes_658: Uint8Array;
        const len_660 = Number(DeserializerPackNumber.INSTANCE.put(in__638));
        const bytes_661 = in__638.readBytes(len_660);
        stringBytes_658 = bytes_661;
        os_649 = new TextDecoder('utf-8').decode(stringBytes_658);
        let stringBytes_662: Uint8Array;
        const len_664 = Number(DeserializerPackNumber.INSTANCE.put(in__638));
        const bytes_665 = in__638.readBytes(len_664);
        stringBytes_662 = bytes_665;
        compiler_650 = new TextDecoder('utf-8').decode(stringBytes_662);
        return new TelemetryCPP(utm_id_646, blob_647, lib_version_648, os_649, compiler_650);
        
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
    serialize(sCtx_666: FastFutureContext, obj_667: TelemetryCPP, _out_668: DataOut): void  {
        const typeId = typeof (obj_667 as any).getAetherTypeId === 'function' ? obj_667.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'TelemetryCPP' with invalid type id $ {
            typeId
        }
        `);
        _out_668.writeByte(typeId);
        switch(typeId)  {
            case 1: (TelemetryCPP as any).META_BODY.serialize(sCtx_666, obj_667 as any as TelemetryCPP, _out_668);
            break;
            default: throw new Error(`Cannot serialize 'TelemetryCPP' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_666: FastFutureContext, in__669: DataIn): TelemetryCPP  {
        const typeId = in__669.readUByte();
        switch(typeId)  {
            case 1: return (TelemetryCPP as any).META_BODY.deserialize(sCtx_666, in__669) as any as TelemetryCPP;
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
    serialize(sCtx_670: FastFutureContext, obj_671: UUIDAndCloud, _out_672: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_670, obj_671.uid, _out_672);
        Cloud.META.serialize(sCtx_670, obj_671.cloud, _out_672);
        
    }
    deserialize(sCtx_670: FastFutureContext, in__673: DataIn): UUIDAndCloud  {
        let uid_674: UUID;
        let cloud_675: Cloud;
        uid_674 = FastMeta.META_UUID.deserialize(sCtx_670, in__673);
        cloud_675 = Cloud.META.deserialize(sCtx_670, in__673);
        return new UUIDAndCloud(uid_674, cloud_675);
        
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
    serialize(sCtx_676: FastFutureContext, obj_677: WorkProofBCrypt, _out_678: DataOut): void  {
        _out_678.writeByte(obj_677.costBCrypt);
        _out_678.writeByte(obj_677.poolSize);
        _out_678.writeInt(obj_677.maxHashVal);
        
    }
    deserialize(sCtx_676: FastFutureContext, in__679: DataIn): WorkProofBCrypt  {
        let costBCrypt_680: number;
        let poolSize_681: number;
        let maxHashVal_682: number;
        costBCrypt_680 = in__679.readByte();
        poolSize_681 = in__679.readByte();
        maxHashVal_682 = in__679.readInt();
        return new WorkProofBCrypt(costBCrypt_680, poolSize_681, maxHashVal_682);
        
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
    serialize(sCtx_683: FastFutureContext, obj_684: WorkProofBCrypt, _out_685: DataOut): void  {
        const typeId = typeof (obj_684 as any).getAetherTypeId === 'function' ? obj_684.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'WorkProofBCrypt' with invalid type id $ {
            typeId
        }
        `);
        _out_685.writeByte(typeId);
        switch(typeId)  {
            case 1: (WorkProofBCrypt as any).META_BODY.serialize(sCtx_683, obj_684 as any as WorkProofBCrypt, _out_685);
            break;
            default: throw new Error(`Cannot serialize 'WorkProofBCrypt' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_683: FastFutureContext, in__686: DataIn): WorkProofBCrypt  {
        const typeId = in__686.readUByte();
        switch(typeId)  {
            case 1: return (WorkProofBCrypt as any).META_BODY.deserialize(sCtx_683, in__686) as any as WorkProofBCrypt;
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
    serialize(sCtx_687: FastFutureContext, obj_688: WorkProofDTO, _out_689: DataOut): void  {
        const stringBytes_691 = new TextEncoder().encode(obj_688.salt);
        SerializerPackNumber.INSTANCE.put(_out_689, stringBytes_691.length);
        _out_689.write(stringBytes_691);
        const stringBytes_693 = new TextEncoder().encode(obj_688.suffix);
        SerializerPackNumber.INSTANCE.put(_out_689, stringBytes_693.length);
        _out_689.write(stringBytes_693);
        _out_689.writeByte(obj_688.poolSize);
        _out_689.writeInt(obj_688.maxHashVal);
        SignedKey.META.serialize(sCtx_687, obj_688.globalKey, _out_689);
        
    }
    deserialize(sCtx_687: FastFutureContext, in__690: DataIn): WorkProofDTO  {
        let salt_695: string;
        let suffix_696: string;
        let poolSize_697: number;
        let maxHashVal_698: number;
        let globalKey_699: SignedKey;
        let stringBytes_700: Uint8Array;
        const len_702 = Number(DeserializerPackNumber.INSTANCE.put(in__690));
        const bytes_703 = in__690.readBytes(len_702);
        stringBytes_700 = bytes_703;
        salt_695 = new TextDecoder('utf-8').decode(stringBytes_700);
        let stringBytes_704: Uint8Array;
        const len_706 = Number(DeserializerPackNumber.INSTANCE.put(in__690));
        const bytes_707 = in__690.readBytes(len_706);
        stringBytes_704 = bytes_707;
        suffix_696 = new TextDecoder('utf-8').decode(stringBytes_704);
        poolSize_697 = in__690.readByte();
        maxHashVal_698 = in__690.readInt();
        globalKey_699 = SignedKey.META.deserialize(sCtx_687, in__690);
        return new WorkProofDTO(salt_695, suffix_696, poolSize_697, maxHashVal_698, globalKey_699);
        
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
                    let backId_709: number;
                    let data_710: LoginClientStream;
                    backId_709 = dataIn.readByte();
                    data_710 = LoginClientStream.META.deserialize(ctx, dataIn);
                    const argsNames_711: string[] = ["backId", "data"];
                    const argsValues_712: any[] = [backId_709, data_710];
                    ctx.invokeLocalMethodBefore("sendSafeApiDataMulti", argsNames_711, argsValues_712);
                    localApi.sendSafeApiDataMulti(backId_709, data_710);
                    ctx.invokeLocalMethodAfter("sendSafeApiDataMulti", null, argsNames_711, argsValues_712);
                    break;
                    
                }
                case 4:  {
                    let data_714: LoginClientStream;
                    data_714 = LoginClientStream.META.deserialize(ctx, dataIn);
                    const argsNames_715: string[] = ["data"];
                    const argsValues_716: any[] = [data_714];
                    ctx.invokeLocalMethodBefore("sendSafeApiData", argsNames_715, argsValues_716);
                    localApi.sendSafeApiData(data_714);
                    ctx.invokeLocalMethodAfter("sendSafeApiData", null, argsNames_715, argsValues_716);
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
    makeRemote(sCtx_717: FastFutureContext): ClientApiUnsafeRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_717.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_717, sendSafeApiDataMulti: (backId: number, data: LoginClientStream): void =>  {
                const dataOut_719 = new DataInOut();
                dataOut_719.writeByte(3);
                const argsNames_721: string[] = ["backId", "data"];
                const argsValues_722: any[] = [backId, data];
                sCtx_717.invokeRemoteMethodAfter("sendSafeApiDataMulti", null, argsNames_721, argsValues_722);
                dataOut_719.writeByte(backId);
                LoginClientStream.META.serialize(sCtx_717, data, dataOut_719);
                sCtx_717.sendToRemote(dataOut_719.toArray());
                
            }
            , sendSafeApiData: (data: LoginClientStream): void =>  {
                const dataOut_724 = new DataInOut();
                dataOut_724.writeByte(4);
                const argsNames_726: string[] = ["data"];
                const argsValues_727: any[] = [data];
                sCtx_717.invokeRemoteMethodAfter("sendSafeApiData", null, argsNames_726, argsValues_727);
                LoginClientStream.META.serialize(sCtx_717, data, dataOut_724);
                sCtx_717.sendToRemote(dataOut_724.toArray());
                
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
                    let uid_729: UUID;
                    uid_729 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_730: string[] = ["uid"];
                    const argsValues_731: any[] = [uid_729];
                    ctx.invokeLocalMethodBefore("changeParent", argsNames_730, argsValues_731);
                    localApi.changeParent(uid_729);
                    ctx.invokeLocalMethodAfter("changeParent", null, argsNames_730, argsValues_731);
                    break;
                    
                }
                case 4:  {
                    let alias_733: UUID;
                    alias_733 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_734: string[] = ["alias"];
                    const argsValues_735: any[] = [alias_733];
                    ctx.invokeLocalMethodBefore("changeAlias", argsNames_734, argsValues_735);
                    localApi.changeAlias(alias_733);
                    ctx.invokeLocalMethodAfter("changeAlias", null, argsNames_734, argsValues_735);
                    break;
                    
                }
                case 5:  {
                    let uid_737: UUID;
                    uid_737 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_738: string[] = ["uid"];
                    const argsValues_739: any[] = [uid_737];
                    ctx.invokeLocalMethodBefore("newChild", argsNames_738, argsValues_739);
                    localApi.newChild(uid_737);
                    ctx.invokeLocalMethodAfter("newChild", null, argsNames_738, argsValues_739);
                    break;
                    
                }
                case 6:  {
                    let msg_741: Message[];
                    const len_743 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_741 = new Array<Message>(len_743);
                    for (let idx_742 = 0;
                    idx_742 < len_743;
                    idx_742++)  {
                        msg_741[idx_742] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_744: string[] = ["msg"];
                    const argsValues_745: any[] = [msg_741];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_744, argsValues_745);
                    localApi.sendMessages(msg_741);
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_744, argsValues_745);
                    break;
                    
                }
                case 7:  {
                    let serverDescriptor_747: ServerDescriptor;
                    serverDescriptor_747 = ServerDescriptor.META.deserialize(ctx, dataIn);
                    const argsNames_748: string[] = ["serverDescriptor"];
                    const argsValues_749: any[] = [serverDescriptor_747];
                    ctx.invokeLocalMethodBefore("sendServerDescriptor", argsNames_748, argsValues_749);
                    localApi.sendServerDescriptor(serverDescriptor_747);
                    ctx.invokeLocalMethodAfter("sendServerDescriptor", null, argsNames_748, argsValues_749);
                    break;
                    
                }
                case 8:  {
                    let serverDescriptors_751: ServerDescriptor[];
                    const len_753 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    serverDescriptors_751 = new Array<ServerDescriptor>(len_753);
                    for (let idx_752 = 0;
                    idx_752 < len_753;
                    idx_752++)  {
                        serverDescriptors_751[idx_752] = ServerDescriptor.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_754: string[] = ["serverDescriptors"];
                    const argsValues_755: any[] = [serverDescriptors_751];
                    ctx.invokeLocalMethodBefore("sendServerDescriptors", argsNames_754, argsValues_755);
                    localApi.sendServerDescriptors(serverDescriptors_751);
                    ctx.invokeLocalMethodAfter("sendServerDescriptors", null, argsNames_754, argsValues_755);
                    break;
                    
                }
                case 9:  {
                    let uid_757: UUID;
                    let cloud_758: Cloud;
                    uid_757 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    cloud_758 = Cloud.META.deserialize(ctx, dataIn);
                    const argsNames_759: string[] = ["uid", "cloud"];
                    const argsValues_760: any[] = [uid_757, cloud_758];
                    ctx.invokeLocalMethodBefore("sendCloud", argsNames_759, argsValues_760);
                    localApi.sendCloud(uid_757, cloud_758);
                    ctx.invokeLocalMethodAfter("sendCloud", null, argsNames_759, argsValues_760);
                    break;
                    
                }
                case 10:  {
                    let clouds_762: UUIDAndCloud[];
                    const len_764 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    clouds_762 = new Array<UUIDAndCloud>(len_764);
                    for (let idx_763 = 0;
                    idx_763 < len_764;
                    idx_763++)  {
                        clouds_762[idx_763] = UUIDAndCloud.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_765: string[] = ["clouds"];
                    const argsValues_766: any[] = [clouds_762];
                    ctx.invokeLocalMethodBefore("sendClouds", argsNames_765, argsValues_766);
                    localApi.sendClouds(clouds_762);
                    ctx.invokeLocalMethodAfter("sendClouds", null, argsNames_765, argsValues_766);
                    break;
                    
                }
                case 11:  {
                    const argsNames_768: string[] = [];
                    const argsValues_769: any[] = [];
                    ctx.invokeLocalMethodBefore("requestTelemetry", argsNames_768, argsValues_769);
                    localApi.requestTelemetry();
                    ctx.invokeLocalMethodAfter("requestTelemetry", null, argsNames_768, argsValues_769);
                    break;
                    
                }
                case 12:  {
                    let groups_771: AccessGroup[];
                    const len_773 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_771 = new Array<AccessGroup>(len_773);
                    for (let idx_772 = 0;
                    idx_772 < len_773;
                    idx_772++)  {
                        groups_771[idx_772] = AccessGroup.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_774: string[] = ["groups"];
                    const argsValues_775: any[] = [groups_771];
                    ctx.invokeLocalMethodBefore("sendAccessGroups", argsNames_774, argsValues_775);
                    localApi.sendAccessGroups(groups_771);
                    ctx.invokeLocalMethodAfter("sendAccessGroups", null, argsNames_774, argsValues_775);
                    break;
                    
                }
                case 13:  {
                    let uid_777: UUID;
                    let groups_778: bigint[];
                    uid_777 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_780 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_778 = new Array<bigint>(len_780);
                    for (let idx_779 = 0;
                    idx_779 < len_780;
                    idx_779++)  {
                        groups_778[idx_779] = dataIn.readLong();
                        
                    }
                    const argsNames_781: string[] = ["uid", "groups"];
                    const argsValues_782: any[] = [uid_777, groups_778];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_781, argsValues_782);
                    localApi.sendAccessGroupForClient(uid_777, groups_778);
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_781, argsValues_782);
                    break;
                    
                }
                case 14:  {
                    let id_784: bigint;
                    let groups_785: UUID[];
                    id_784 = dataIn.readLong();
                    const len_787 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_785 = new Array<UUID>(len_787);
                    for (let idx_786 = 0;
                    idx_786 < len_787;
                    idx_786++)  {
                        groups_785[idx_786] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_788: string[] = ["id", "groups"];
                    const argsValues_789: any[] = [id_784, groups_785];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_788, argsValues_789);
                    localApi.addItemsToAccessGroup(id_784, groups_785);
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_788, argsValues_789);
                    break;
                    
                }
                case 15:  {
                    let id_791: bigint;
                    let groups_792: UUID[];
                    id_791 = dataIn.readLong();
                    const len_794 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_792 = new Array<UUID>(len_794);
                    for (let idx_793 = 0;
                    idx_793 < len_794;
                    idx_793++)  {
                        groups_792[idx_793] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_795: string[] = ["id", "groups"];
                    const argsValues_796: any[] = [id_791, groups_792];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_795, argsValues_796);
                    localApi.removeItemsFromAccessGroup(id_791, groups_792);
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_795, argsValues_796);
                    break;
                    
                }
                case 16:  {
                    let uid_798: UUID;
                    let groups_799: bigint[];
                    uid_798 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_801 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_799 = new Array<bigint>(len_801);
                    for (let idx_800 = 0;
                    idx_800 < len_801;
                    idx_800++)  {
                        groups_799[idx_800] = dataIn.readLong();
                        
                    }
                    const argsNames_802: string[] = ["uid", "groups"];
                    const argsValues_803: any[] = [uid_798, groups_799];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_802, argsValues_803);
                    localApi.addAccessGroupsToClient(uid_798, groups_799);
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_802, argsValues_803);
                    break;
                    
                }
                case 17:  {
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
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_809, argsValues_810);
                    localApi.removeAccessGroupsFromClient(uid_805, groups_806);
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_809, argsValues_810);
                    break;
                    
                }
                case 18:  {
                    let uid_812: UUID;
                    let accessedClients_813: UUID[];
                    uid_812 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_815 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    accessedClients_813 = new Array<UUID>(len_815);
                    for (let idx_814 = 0;
                    idx_814 < len_815;
                    idx_814++)  {
                        accessedClients_813[idx_814] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_816: string[] = ["uid", "accessedClients"];
                    const argsValues_817: any[] = [uid_812, accessedClients_813];
                    ctx.invokeLocalMethodBefore("sendAllAccessedClients", argsNames_816, argsValues_817);
                    localApi.sendAllAccessedClients(uid_812, accessedClients_813);
                    ctx.invokeLocalMethodAfter("sendAllAccessedClients", null, argsNames_816, argsValues_817);
                    break;
                    
                }
                case 19:  {
                    let results_819: AccessCheckResult[];
                    const len_821 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    results_819 = new Array<AccessCheckResult>(len_821);
                    for (let idx_820 = 0;
                    idx_820 < len_821;
                    idx_820++)  {
                        results_819[idx_820] = AccessCheckResult.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_822: string[] = ["results"];
                    const argsValues_823: any[] = [results_819];
                    ctx.invokeLocalMethodBefore("sendAccessCheckResults", argsNames_822, argsValues_823);
                    localApi.sendAccessCheckResults(results_819);
                    ctx.invokeLocalMethodAfter("sendAccessCheckResults", null, argsNames_822, argsValues_823);
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
    makeRemote(sCtx_824: FastFutureContext): ClientApiSafeRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_824.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_824, changeParent: (uid: UUID): void =>  {
                const dataOut_826 = new DataInOut();
                dataOut_826.writeByte(3);
                const argsNames_828: string[] = ["uid"];
                const argsValues_829: any[] = [uid];
                sCtx_824.invokeRemoteMethodAfter("changeParent", null, argsNames_828, argsValues_829);
                FastMeta.META_UUID.serialize(sCtx_824, uid, dataOut_826);
                sCtx_824.sendToRemote(dataOut_826.toArray());
                
            }
            , changeAlias: (alias: UUID): void =>  {
                const dataOut_831 = new DataInOut();
                dataOut_831.writeByte(4);
                const argsNames_833: string[] = ["alias"];
                const argsValues_834: any[] = [alias];
                sCtx_824.invokeRemoteMethodAfter("changeAlias", null, argsNames_833, argsValues_834);
                FastMeta.META_UUID.serialize(sCtx_824, alias, dataOut_831);
                sCtx_824.sendToRemote(dataOut_831.toArray());
                
            }
            , newChild: (uid: UUID): void =>  {
                const dataOut_836 = new DataInOut();
                dataOut_836.writeByte(5);
                const argsNames_838: string[] = ["uid"];
                const argsValues_839: any[] = [uid];
                sCtx_824.invokeRemoteMethodAfter("newChild", null, argsNames_838, argsValues_839);
                FastMeta.META_UUID.serialize(sCtx_824, uid, dataOut_836);
                sCtx_824.sendToRemote(dataOut_836.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_841 = new DataInOut();
                dataOut_841.writeByte(6);
                const argsNames_843: string[] = ["msg"];
                const argsValues_844: any[] = [msg];
                sCtx_824.invokeRemoteMethodAfter("sendMessages", null, argsNames_843, argsValues_844);
                SerializerPackNumber.INSTANCE.put(dataOut_841, msg.length);
                for (const el_845 of msg)  {
                    Message.META.serialize(sCtx_824, el_845, dataOut_841);
                    
                }
                sCtx_824.sendToRemote(dataOut_841.toArray());
                
            }
            , sendServerDescriptor: (serverDescriptor: ServerDescriptor): void =>  {
                const dataOut_847 = new DataInOut();
                dataOut_847.writeByte(7);
                const argsNames_849: string[] = ["serverDescriptor"];
                const argsValues_850: any[] = [serverDescriptor];
                sCtx_824.invokeRemoteMethodAfter("sendServerDescriptor", null, argsNames_849, argsValues_850);
                ServerDescriptor.META.serialize(sCtx_824, serverDescriptor, dataOut_847);
                sCtx_824.sendToRemote(dataOut_847.toArray());
                
            }
            , sendServerDescriptors: (serverDescriptors: ServerDescriptor[]): void =>  {
                const dataOut_852 = new DataInOut();
                dataOut_852.writeByte(8);
                const argsNames_854: string[] = ["serverDescriptors"];
                const argsValues_855: any[] = [serverDescriptors];
                sCtx_824.invokeRemoteMethodAfter("sendServerDescriptors", null, argsNames_854, argsValues_855);
                SerializerPackNumber.INSTANCE.put(dataOut_852, serverDescriptors.length);
                for (const el_856 of serverDescriptors)  {
                    ServerDescriptor.META.serialize(sCtx_824, el_856, dataOut_852);
                    
                }
                sCtx_824.sendToRemote(dataOut_852.toArray());
                
            }
            , sendCloud: (uid: UUID, cloud: Cloud): void =>  {
                const dataOut_858 = new DataInOut();
                dataOut_858.writeByte(9);
                const argsNames_860: string[] = ["uid", "cloud"];
                const argsValues_861: any[] = [uid, cloud];
                sCtx_824.invokeRemoteMethodAfter("sendCloud", null, argsNames_860, argsValues_861);
                FastMeta.META_UUID.serialize(sCtx_824, uid, dataOut_858);
                Cloud.META.serialize(sCtx_824, cloud, dataOut_858);
                sCtx_824.sendToRemote(dataOut_858.toArray());
                
            }
            , sendClouds: (clouds: UUIDAndCloud[]): void =>  {
                const dataOut_863 = new DataInOut();
                dataOut_863.writeByte(10);
                const argsNames_865: string[] = ["clouds"];
                const argsValues_866: any[] = [clouds];
                sCtx_824.invokeRemoteMethodAfter("sendClouds", null, argsNames_865, argsValues_866);
                SerializerPackNumber.INSTANCE.put(dataOut_863, clouds.length);
                for (const el_867 of clouds)  {
                    UUIDAndCloud.META.serialize(sCtx_824, el_867, dataOut_863);
                    
                }
                sCtx_824.sendToRemote(dataOut_863.toArray());
                
            }
            , requestTelemetry: (): void =>  {
                const dataOut_869 = new DataInOut();
                dataOut_869.writeByte(11);
                const argsNames_871: string[] = [];
                const argsValues_872: any[] = [];
                sCtx_824.invokeRemoteMethodAfter("requestTelemetry", null, argsNames_871, argsValues_872);
                sCtx_824.sendToRemote(dataOut_869.toArray());
                
            }
            , sendAccessGroups: (groups: AccessGroup[]): void =>  {
                const dataOut_874 = new DataInOut();
                dataOut_874.writeByte(12);
                const argsNames_876: string[] = ["groups"];
                const argsValues_877: any[] = [groups];
                sCtx_824.invokeRemoteMethodAfter("sendAccessGroups", null, argsNames_876, argsValues_877);
                SerializerPackNumber.INSTANCE.put(dataOut_874, groups.length);
                for (const el_878 of groups)  {
                    AccessGroup.META.serialize(sCtx_824, el_878, dataOut_874);
                    
                }
                sCtx_824.sendToRemote(dataOut_874.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_880 = new DataInOut();
                dataOut_880.writeByte(13);
                const argsNames_882: string[] = ["uid", "groups"];
                const argsValues_883: any[] = [uid, groups];
                sCtx_824.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_882, argsValues_883);
                FastMeta.META_UUID.serialize(sCtx_824, uid, dataOut_880);
                SerializerPackNumber.INSTANCE.put(dataOut_880, groups.length);
                for (const el_884 of groups)  {
                    dataOut_880.writeLong(el_884);
                    
                }
                sCtx_824.sendToRemote(dataOut_880.toArray());
                
            }
            , addItemsToAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_886 = new DataInOut();
                dataOut_886.writeByte(14);
                const argsNames_888: string[] = ["id", "groups"];
                const argsValues_889: any[] = [id, groups];
                sCtx_824.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_888, argsValues_889);
                dataOut_886.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_886, groups.length);
                for (const el_890 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_824, el_890, dataOut_886);
                    
                }
                sCtx_824.sendToRemote(dataOut_886.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_892 = new DataInOut();
                dataOut_892.writeByte(15);
                const argsNames_894: string[] = ["id", "groups"];
                const argsValues_895: any[] = [id, groups];
                sCtx_824.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_894, argsValues_895);
                dataOut_892.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_892, groups.length);
                for (const el_896 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_824, el_896, dataOut_892);
                    
                }
                sCtx_824.sendToRemote(dataOut_892.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_898 = new DataInOut();
                dataOut_898.writeByte(16);
                const argsNames_900: string[] = ["uid", "groups"];
                const argsValues_901: any[] = [uid, groups];
                sCtx_824.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_900, argsValues_901);
                FastMeta.META_UUID.serialize(sCtx_824, uid, dataOut_898);
                SerializerPackNumber.INSTANCE.put(dataOut_898, groups.length);
                for (const el_902 of groups)  {
                    dataOut_898.writeLong(el_902);
                    
                }
                sCtx_824.sendToRemote(dataOut_898.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_904 = new DataInOut();
                dataOut_904.writeByte(17);
                const argsNames_906: string[] = ["uid", "groups"];
                const argsValues_907: any[] = [uid, groups];
                sCtx_824.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_906, argsValues_907);
                FastMeta.META_UUID.serialize(sCtx_824, uid, dataOut_904);
                SerializerPackNumber.INSTANCE.put(dataOut_904, groups.length);
                for (const el_908 of groups)  {
                    dataOut_904.writeLong(el_908);
                    
                }
                sCtx_824.sendToRemote(dataOut_904.toArray());
                
            }
            , sendAllAccessedClients: (uid: UUID, accessedClients: UUID[]): void =>  {
                const dataOut_910 = new DataInOut();
                dataOut_910.writeByte(18);
                const argsNames_912: string[] = ["uid", "accessedClients"];
                const argsValues_913: any[] = [uid, accessedClients];
                sCtx_824.invokeRemoteMethodAfter("sendAllAccessedClients", null, argsNames_912, argsValues_913);
                FastMeta.META_UUID.serialize(sCtx_824, uid, dataOut_910);
                SerializerPackNumber.INSTANCE.put(dataOut_910, accessedClients.length);
                for (const el_914 of accessedClients)  {
                    FastMeta.META_UUID.serialize(sCtx_824, el_914, dataOut_910);
                    
                }
                sCtx_824.sendToRemote(dataOut_910.toArray());
                
            }
            , sendAccessCheckResults: (results: AccessCheckResult[]): void =>  {
                const dataOut_916 = new DataInOut();
                dataOut_916.writeByte(19);
                const argsNames_918: string[] = ["results"];
                const argsValues_919: any[] = [results];
                sCtx_824.invokeRemoteMethodAfter("sendAccessCheckResults", null, argsNames_918, argsValues_919);
                SerializerPackNumber.INSTANCE.put(dataOut_916, results.length);
                for (const el_920 of results)  {
                    AccessCheckResult.META.serialize(sCtx_824, el_920, dataOut_916);
                    
                }
                sCtx_824.sendToRemote(dataOut_916.toArray());
                
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
                    let id_922: number;
                    id_922 = dataIn.readByte();
                    const argsNames_923: string[] = ["id"];
                    const argsValues_924: any[] = [id_922];
                    ctx.invokeLocalMethodBefore("backId", argsNames_923, argsValues_924);
                    localApi.backId(id_922);
                    ctx.invokeLocalMethodAfter("backId", null, argsNames_923, argsValues_924);
                    break;
                    
                }
                case 4:  {
                    const reqId_925 = dataIn.readInt();
                    let nextConnectMsDuration_926: bigint;
                    nextConnectMsDuration_926 = dataIn.readLong();
                    const argsNames_927: string[] = ["nextConnectMsDuration"];
                    const argsValues_928: any[] = [nextConnectMsDuration_926];
                    ctx.invokeLocalMethodBefore("ping", argsNames_927, argsValues_928);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.ping(nextConnectMsDuration_926);
                    ctx.invokeLocalMethodAfter("ping", resultFuture, argsNames_927, argsValues_928);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_925);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    let uid_930: UUID;
                    let stream_931: ClientApiStream;
                    uid_930 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    stream_931 = ClientApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_932: string[] = ["uid", "stream"];
                    const argsValues_933: any[] = [uid_930, stream_931];
                    ctx.invokeLocalMethodBefore("client", argsNames_932, argsValues_933);
                    localApi.client(uid_930, stream_931);
                    ctx.invokeLocalMethodAfter("client", null, argsNames_932, argsValues_933);
                    break;
                    
                }
                case 6:  {
                    let msg_935: Message;
                    msg_935 = Message.META.deserialize(ctx, dataIn);
                    const argsNames_936: string[] = ["msg"];
                    const argsValues_937: any[] = [msg_935];
                    ctx.invokeLocalMethodBefore("sendMessage", argsNames_936, argsValues_937);
                    localApi.sendMessage(msg_935);
                    ctx.invokeLocalMethodAfter("sendMessage", null, argsNames_936, argsValues_937);
                    break;
                    
                }
                case 7:  {
                    let msg_939: Message[];
                    const len_941 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_939 = new Array<Message>(len_941);
                    for (let idx_940 = 0;
                    idx_940 < len_941;
                    idx_940++)  {
                        msg_939[idx_940] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_942: string[] = ["msg"];
                    const argsValues_943: any[] = [msg_939];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_942, argsValues_943);
                    localApi.sendMessages(msg_939);
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_942, argsValues_943);
                    break;
                    
                }
                case 8:  {
                    const reqId_944 = dataIn.readInt();
                    let owner_945: UUID;
                    let uids_946: UUID[];
                    owner_945 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_948 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_946 = new Array<UUID>(len_948);
                    for (let idx_947 = 0;
                    idx_947 < len_948;
                    idx_947++)  {
                        uids_946[idx_947] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_949: string[] = ["owner", "uids"];
                    const argsValues_950: any[] = [owner_945, uids_946];
                    ctx.invokeLocalMethodBefore("createAccessGroup", argsNames_949, argsValues_950);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.createAccessGroup(owner_945, uids_946);
                    ctx.invokeLocalMethodAfter("createAccessGroup", resultFuture, argsNames_949, argsValues_950);
                    resultFuture.to((v_952: bigint) =>  {
                        const data_951 = new DataInOut();
                        data_951.writeLong(v_952);
                        ctx.sendResultToRemote(reqId_944, data_951.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_953 = dataIn.readInt();
                    let groupId_954: bigint;
                    let uid_955: UUID;
                    groupId_954 = dataIn.readLong();
                    uid_955 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_956: string[] = ["groupId", "uid"];
                    const argsValues_957: any[] = [groupId_954, uid_955];
                    ctx.invokeLocalMethodBefore("addToAccessGroup", argsNames_956, argsValues_957);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.addToAccessGroup(groupId_954, uid_955);
                    ctx.invokeLocalMethodAfter("addToAccessGroup", resultFuture, argsNames_956, argsValues_957);
                    resultFuture.to((v_959: boolean) =>  {
                        const data_958 = new DataInOut();
                        data_958.writeBoolean(v_959);
                        ctx.sendResultToRemote(reqId_953, data_958.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_960 = dataIn.readInt();
                    let groupId_961: bigint;
                    let uid_962: UUID;
                    groupId_961 = dataIn.readLong();
                    uid_962 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_963: string[] = ["groupId", "uid"];
                    const argsValues_964: any[] = [groupId_961, uid_962];
                    ctx.invokeLocalMethodBefore("removeFromAccessGroup", argsNames_963, argsValues_964);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.removeFromAccessGroup(groupId_961, uid_962);
                    ctx.invokeLocalMethodAfter("removeFromAccessGroup", resultFuture, argsNames_963, argsValues_964);
                    resultFuture.to((v_966: boolean) =>  {
                        const data_965 = new DataInOut();
                        data_965.writeBoolean(v_966);
                        ctx.sendResultToRemote(reqId_960, data_965.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_967 = dataIn.readInt();
                    let uid_968: UUID;
                    uid_968 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_969: string[] = ["uid"];
                    const argsValues_970: any[] = [uid_968];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage", argsNames_969, argsValues_970);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.checkAccessForSendMessage(uid_968);
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage", resultFuture, argsNames_969, argsValues_970);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_967);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    let sid_972: number[];
                    const len_974 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    sid_972 = new Array<number>(len_974);
                    for (let idx_973 = 0;
                    idx_973 < len_974;
                    idx_973++)  {
                        sid_972[idx_973] = dataIn.readShort();
                        
                    }
                    const argsNames_975: string[] = ["sid"];
                    const argsValues_976: any[] = [sid_972];
                    ctx.invokeLocalMethodBefore("resolverServers", argsNames_975, argsValues_976);
                    localApi.resolverServers(sid_972);
                    ctx.invokeLocalMethodAfter("resolverServers", null, argsNames_975, argsValues_976);
                    break;
                    
                }
                case 13:  {
                    let uids_978: UUID[];
                    const len_980 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_978 = new Array<UUID>(len_980);
                    for (let idx_979 = 0;
                    idx_979 < len_980;
                    idx_979++)  {
                        uids_978[idx_979] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_981: string[] = ["uids"];
                    const argsValues_982: any[] = [uids_978];
                    ctx.invokeLocalMethodBefore("resolveClouds", argsNames_981, argsValues_982);
                    localApi.resolveClouds(uids_978);
                    ctx.invokeLocalMethodAfter("resolveClouds", null, argsNames_981, argsValues_982);
                    break;
                    
                }
                case 14:  {
                    const reqId_983 = dataIn.readInt();
                    let uid_984: UUID;
                    uid_984 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_985: string[] = ["uid"];
                    const argsValues_986: any[] = [uid_984];
                    ctx.invokeLocalMethodBefore("getAccessGroups", argsNames_985, argsValues_986);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAccessGroups(uid_984);
                    ctx.invokeLocalMethodAfter("getAccessGroups", resultFuture, argsNames_985, argsValues_986);
                    resultFuture.to((v_988: bigint[]) =>  {
                        const data_987 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_987, v_988.length);
                        for (const el_989 of v_988)  {
                            data_987.writeLong(el_989);
                            
                        }
                        ctx.sendResultToRemote(reqId_983, data_987.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_990 = dataIn.readInt();
                    let groupId_991: bigint;
                    groupId_991 = dataIn.readLong();
                    const argsNames_992: string[] = ["groupId"];
                    const argsValues_993: any[] = [groupId_991];
                    ctx.invokeLocalMethodBefore("getAccessGroup", argsNames_992, argsValues_993);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAccessGroup(groupId_991);
                    ctx.invokeLocalMethodAfter("getAccessGroup", resultFuture, argsNames_992, argsValues_993);
                    resultFuture.to((v_995: AccessGroup) =>  {
                        const data_994 = new DataInOut();
                        AccessGroup.META.serialize(ctx, v_995, data_994);
                        ctx.sendResultToRemote(reqId_990, data_994.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 16:  {
                    const reqId_996 = dataIn.readInt();
                    let uid_997: UUID;
                    uid_997 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_998: string[] = ["uid"];
                    const argsValues_999: any[] = [uid_997];
                    ctx.invokeLocalMethodBefore("getAllAccessedClients", argsNames_998, argsValues_999);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAllAccessedClients(uid_997);
                    ctx.invokeLocalMethodAfter("getAllAccessedClients", resultFuture, argsNames_998, argsValues_999);
                    resultFuture.to((v_1001: UUID[]) =>  {
                        const data_1000 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1000, v_1001.length);
                        for (const el_1002 of v_1001)  {
                            FastMeta.META_UUID.serialize(ctx, el_1002, data_1000);
                            
                        }
                        ctx.sendResultToRemote(reqId_996, data_1000.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 17:  {
                    const reqId_1003 = dataIn.readInt();
                    let uid1_1004: UUID;
                    let uid2_1005: UUID;
                    uid1_1004 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid2_1005 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1006: string[] = ["uid1", "uid2"];
                    const argsValues_1007: any[] = [uid1_1004, uid2_1005];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage2", argsNames_1006, argsValues_1007);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.checkAccessForSendMessage2(uid1_1004, uid2_1005);
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage2", resultFuture, argsNames_1006, argsValues_1007);
                    resultFuture.to((v_1009: boolean) =>  {
                        const data_1008 = new DataInOut();
                        data_1008.writeBoolean(v_1009);
                        ctx.sendResultToRemote(reqId_1003, data_1008.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 18:  {
                    let telemetry_1011: Telemetry;
                    telemetry_1011 = Telemetry.META.deserialize(ctx, dataIn);
                    const argsNames_1012: string[] = ["telemetry"];
                    const argsValues_1013: any[] = [telemetry_1011];
                    ctx.invokeLocalMethodBefore("sendTelemetry", argsNames_1012, argsValues_1013);
                    localApi.sendTelemetry(telemetry_1011);
                    ctx.invokeLocalMethodAfter("sendTelemetry", null, argsNames_1012, argsValues_1013);
                    break;
                    
                }
                case 19:  {
                    let uids_1015: UUID[];
                    const len_1017 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1015 = new Array<UUID>(len_1017);
                    for (let idx_1016 = 0;
                    idx_1016 < len_1017;
                    idx_1016++)  {
                        uids_1015[idx_1016] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1018: string[] = ["uids"];
                    const argsValues_1019: any[] = [uids_1015];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsForClients", argsNames_1018, argsValues_1019);
                    localApi.requestAccessGroupsForClients(uids_1015);
                    ctx.invokeLocalMethodAfter("requestAccessGroupsForClients", null, argsNames_1018, argsValues_1019);
                    break;
                    
                }
                case 20:  {
                    let ids_1021: bigint[];
                    const len_1023 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    ids_1021 = new Array<bigint>(len_1023);
                    for (let idx_1022 = 0;
                    idx_1022 < len_1023;
                    idx_1022++)  {
                        ids_1021[idx_1022] = dataIn.readLong();
                        
                    }
                    const argsNames_1024: string[] = ["ids"];
                    const argsValues_1025: any[] = [ids_1021];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsItems", argsNames_1024, argsValues_1025);
                    localApi.requestAccessGroupsItems(ids_1021);
                    ctx.invokeLocalMethodAfter("requestAccessGroupsItems", null, argsNames_1024, argsValues_1025);
                    break;
                    
                }
                case 22:  {
                    let uid_1027: UUID;
                    let groups_1028: bigint[];
                    uid_1027 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1030 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1028 = new Array<bigint>(len_1030);
                    for (let idx_1029 = 0;
                    idx_1029 < len_1030;
                    idx_1029++)  {
                        groups_1028[idx_1029] = dataIn.readLong();
                        
                    }
                    const argsNames_1031: string[] = ["uid", "groups"];
                    const argsValues_1032: any[] = [uid_1027, groups_1028];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_1031, argsValues_1032);
                    localApi.sendAccessGroupForClient(uid_1027, groups_1028);
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_1031, argsValues_1032);
                    break;
                    
                }
                case 23:  {
                    let id_1034: bigint;
                    let groups_1035: UUID[];
                    id_1034 = dataIn.readLong();
                    const len_1037 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1035 = new Array<UUID>(len_1037);
                    for (let idx_1036 = 0;
                    idx_1036 < len_1037;
                    idx_1036++)  {
                        groups_1035[idx_1036] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1038: string[] = ["id", "groups"];
                    const argsValues_1039: any[] = [id_1034, groups_1035];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_1038, argsValues_1039);
                    localApi.addItemsToAccessGroup(id_1034, groups_1035);
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_1038, argsValues_1039);
                    break;
                    
                }
                case 24:  {
                    let id_1041: bigint;
                    let groups_1042: UUID[];
                    id_1041 = dataIn.readLong();
                    const len_1044 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1042 = new Array<UUID>(len_1044);
                    for (let idx_1043 = 0;
                    idx_1043 < len_1044;
                    idx_1043++)  {
                        groups_1042[idx_1043] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1045: string[] = ["id", "groups"];
                    const argsValues_1046: any[] = [id_1041, groups_1042];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_1045, argsValues_1046);
                    localApi.removeItemsFromAccessGroup(id_1041, groups_1042);
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_1045, argsValues_1046);
                    break;
                    
                }
                case 25:  {
                    let uid_1048: UUID;
                    let groups_1049: bigint[];
                    uid_1048 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1051 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1049 = new Array<bigint>(len_1051);
                    for (let idx_1050 = 0;
                    idx_1050 < len_1051;
                    idx_1050++)  {
                        groups_1049[idx_1050] = dataIn.readLong();
                        
                    }
                    const argsNames_1052: string[] = ["uid", "groups"];
                    const argsValues_1053: any[] = [uid_1048, groups_1049];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_1052, argsValues_1053);
                    localApi.addAccessGroupsToClient(uid_1048, groups_1049);
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_1052, argsValues_1053);
                    break;
                    
                }
                case 26:  {
                    let uid_1055: UUID;
                    let groups_1056: bigint[];
                    uid_1055 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1058 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1056 = new Array<bigint>(len_1058);
                    for (let idx_1057 = 0;
                    idx_1057 < len_1058;
                    idx_1057++)  {
                        groups_1056[idx_1057] = dataIn.readLong();
                        
                    }
                    const argsNames_1059: string[] = ["uid", "groups"];
                    const argsValues_1060: any[] = [uid_1055, groups_1056];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_1059, argsValues_1060);
                    localApi.removeAccessGroupsFromClient(uid_1055, groups_1056);
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_1059, argsValues_1060);
                    break;
                    
                }
                case 27:  {
                    let uids_1062: UUID[];
                    const len_1064 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1062 = new Array<UUID>(len_1064);
                    for (let idx_1063 = 0;
                    idx_1063 < len_1064;
                    idx_1063++)  {
                        uids_1062[idx_1063] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1065: string[] = ["uids"];
                    const argsValues_1066: any[] = [uids_1062];
                    ctx.invokeLocalMethodBefore("requestAllAccessedClients", argsNames_1065, argsValues_1066);
                    localApi.requestAllAccessedClients(uids_1062);
                    ctx.invokeLocalMethodAfter("requestAllAccessedClients", null, argsNames_1065, argsValues_1066);
                    break;
                    
                }
                case 28:  {
                    let requests_1068: AccessCheckPair[];
                    const len_1070 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    requests_1068 = new Array<AccessCheckPair>(len_1070);
                    for (let idx_1069 = 0;
                    idx_1069 < len_1070;
                    idx_1069++)  {
                        requests_1068[idx_1069] = AccessCheckPair.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1071: string[] = ["requests"];
                    const argsValues_1072: any[] = [requests_1068];
                    ctx.invokeLocalMethodBefore("requestAccessCheck", argsNames_1071, argsValues_1072);
                    localApi.requestAccessCheck(requests_1068);
                    ctx.invokeLocalMethodAfter("requestAccessCheck", null, argsNames_1071, argsValues_1072);
                    break;
                    
                }
                case 29:  {
                    const reqId_1073 = dataIn.readInt();
                    let uid_1074: UUID;
                    let fromTime_1075: bigint;
                    let toTime_1076: bigint;
                    let limit_1077: number;
                    uid_1074 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    fromTime_1075 = dataIn.readLong();
                    toTime_1076 = dataIn.readLong();
                    limit_1077 = dataIn.readInt();
                    const argsNames_1078: string[] = ["uid", "fromTime", "toTime", "limit"];
                    const argsValues_1079: any[] = [uid_1074, fromTime_1075, toTime_1076, limit_1077];
                    ctx.invokeLocalMethodBefore("getClientActivity", argsNames_1078, argsValues_1079);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getClientActivity(uid_1074, fromTime_1075, toTime_1076, limit_1077);
                    ctx.invokeLocalMethodAfter("getClientActivity", resultFuture, argsNames_1078, argsValues_1079);
                    resultFuture.to((v_1081: ClientActivity[]) =>  {
                        const data_1080 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1080, v_1081.length);
                        for (const el_1082 of v_1081)  {
                            ClientActivity.META.serialize(ctx, el_1082, data_1080);
                            
                        }
                        ctx.sendResultToRemote(reqId_1073, data_1080.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 30:  {
                    const reqId_1083 = dataIn.readInt();
                    let uid_1084: UUID;
                    let query_1085: string;
                    let limit_1086: number;
                    uid_1084 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    let stringBytes_1087: Uint8Array;
                    const len_1089 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1090 = dataIn.readBytes(len_1089);
                    stringBytes_1087 = bytes_1090;
                    query_1085 = new TextDecoder('utf-8').decode(stringBytes_1087);
                    limit_1086 = dataIn.readInt();
                    const argsNames_1091: string[] = ["uid", "query", "limit"];
                    const argsValues_1092: any[] = [uid_1084, query_1085, limit_1086];
                    ctx.invokeLocalMethodBefore("searchClientLogs", argsNames_1091, argsValues_1092);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.searchClientLogs(uid_1084, query_1085, limit_1086);
                    ctx.invokeLocalMethodAfter("searchClientLogs", resultFuture, argsNames_1091, argsValues_1092);
                    resultFuture.to((v_1094: ClientLogEntry[]) =>  {
                        const data_1093 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1093, v_1094.length);
                        for (const el_1095 of v_1094)  {
                            ClientLogEntry.META.serialize(ctx, el_1095, data_1093);
                            
                        }
                        ctx.sendResultToRemote(reqId_1083, data_1093.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 31:  {
                    const reqId_1096 = dataIn.readInt();
                    let uid_1097: UUID;
                    let limit_1098: number;
                    uid_1097 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    limit_1098 = dataIn.readInt();
                    const argsNames_1099: string[] = ["uid", "limit"];
                    const argsValues_1100: any[] = [uid_1097, limit_1098];
                    ctx.invokeLocalMethodBefore("getClientConnections", argsNames_1099, argsValues_1100);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getClientConnections(uid_1097, limit_1098);
                    ctx.invokeLocalMethodAfter("getClientConnections", resultFuture, argsNames_1099, argsValues_1100);
                    resultFuture.to((v_1102: ClientConnectionInfo[]) =>  {
                        const data_1101 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1101, v_1102.length);
                        for (const el_1103 of v_1102)  {
                            ClientConnectionInfo.META.serialize(ctx, el_1103, data_1101);
                            
                        }
                        ctx.sendResultToRemote(reqId_1096, data_1101.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 32:  {
                    const reqId_1104 = dataIn.readInt();
                    let uid_1105: UUID;
                    let fromTime_1106: bigint;
                    let toTime_1107: bigint;
                    let limit_1108: number;
                    uid_1105 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    fromTime_1106 = dataIn.readLong();
                    toTime_1107 = dataIn.readLong();
                    limit_1108 = dataIn.readInt();
                    const argsNames_1109: string[] = ["uid", "fromTime", "toTime", "limit"];
                    const argsValues_1110: any[] = [uid_1105, fromTime_1106, toTime_1107, limit_1108];
                    ctx.invokeLocalMethodBefore("getClientMessages", argsNames_1109, argsValues_1110);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getClientMessages(uid_1105, fromTime_1106, toTime_1107, limit_1108);
                    ctx.invokeLocalMethodAfter("getClientMessages", resultFuture, argsNames_1109, argsValues_1110);
                    resultFuture.to((v_1112: MessageInfo[]) =>  {
                        const data_1111 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1111, v_1112.length);
                        for (const el_1113 of v_1112)  {
                            MessageInfo.META.serialize(ctx, el_1113, data_1111);
                            
                        }
                        ctx.sendResultToRemote(reqId_1104, data_1111.toArray());
                        
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
    makeLocal_fromBytes_ctxLocal(ctx: FastApiContextLocal<AuthorizedApi>, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.localApi);
        
    }
    makeLocal_fromBytes_ctx(ctx: FastFutureContext, data: Uint8Array, localApi: AuthorizedApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1114: FastFutureContext): AuthorizedApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_1114.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_1114, backId: (id: number): void =>  {
                const dataOut_1116 = new DataInOut();
                dataOut_1116.writeByte(3);
                const argsNames_1118: string[] = ["id"];
                const argsValues_1119: any[] = [id];
                sCtx_1114.invokeRemoteMethodAfter("backId", null, argsNames_1118, argsValues_1119);
                dataOut_1116.writeByte(id);
                sCtx_1114.sendToRemote(dataOut_1116.toArray());
                
            }
            , ping: (nextConnectMsDuration: bigint): AFuture =>  {
                const dataOut_1121 = new DataInOut();
                dataOut_1121.writeByte(4);
                const argsNames_1123: string[] = ["nextConnectMsDuration"];
                const argsValues_1124: any[] = [nextConnectMsDuration];
                const result_1122 = AFuture.make();
                sCtx_1114.invokeRemoteMethodAfter("ping", result_1122, argsNames_1123, argsValues_1124);
                const reqId_1120 = sCtx_1114.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1122 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1122.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1121.writeInt(reqId_1120);
                dataOut_1121.writeLong(nextConnectMsDuration);
                sCtx_1114.sendToRemote(dataOut_1121.toArray());
                return result_1122;
                
            }
            , client: (uid: UUID, stream: ClientApiStream): void =>  {
                const dataOut_1126 = new DataInOut();
                dataOut_1126.writeByte(5);
                const argsNames_1128: string[] = ["uid", "stream"];
                const argsValues_1129: any[] = [uid, stream];
                sCtx_1114.invokeRemoteMethodAfter("client", null, argsNames_1128, argsValues_1129);
                FastMeta.META_UUID.serialize(sCtx_1114, uid, dataOut_1126);
                ClientApiStream.META.serialize(sCtx_1114, stream, dataOut_1126);
                sCtx_1114.sendToRemote(dataOut_1126.toArray());
                
            }
            , sendMessage: (msg: Message): void =>  {
                const dataOut_1131 = new DataInOut();
                dataOut_1131.writeByte(6);
                const argsNames_1133: string[] = ["msg"];
                const argsValues_1134: any[] = [msg];
                sCtx_1114.invokeRemoteMethodAfter("sendMessage", null, argsNames_1133, argsValues_1134);
                Message.META.serialize(sCtx_1114, msg, dataOut_1131);
                sCtx_1114.sendToRemote(dataOut_1131.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_1136 = new DataInOut();
                dataOut_1136.writeByte(7);
                const argsNames_1138: string[] = ["msg"];
                const argsValues_1139: any[] = [msg];
                sCtx_1114.invokeRemoteMethodAfter("sendMessages", null, argsNames_1138, argsValues_1139);
                SerializerPackNumber.INSTANCE.put(dataOut_1136, msg.length);
                for (const el_1140 of msg)  {
                    Message.META.serialize(sCtx_1114, el_1140, dataOut_1136);
                    
                }
                sCtx_1114.sendToRemote(dataOut_1136.toArray());
                
            }
            , createAccessGroup: (owner: UUID, uids: UUID[]): ARFuture<bigint> =>  {
                const dataOut_1142 = new DataInOut();
                dataOut_1142.writeByte(8);
                const argsNames_1144: string[] = ["owner", "uids"];
                const argsValues_1145: any[] = [owner, uids];
                const result_1143 = ARFuture.of<bigint>();
                sCtx_1114.invokeRemoteMethodAfter("createAccessGroup", result_1143, argsNames_1144, argsValues_1145);
                const reqId_1141 = sCtx_1114.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1143 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_1114, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1143.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1142.writeInt(reqId_1141);
                FastMeta.META_UUID.serialize(sCtx_1114, owner, dataOut_1142);
                SerializerPackNumber.INSTANCE.put(dataOut_1142, uids.length);
                for (const el_1146 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1114, el_1146, dataOut_1142);
                    
                }
                sCtx_1114.sendToRemote(dataOut_1142.toArray());
                return result_1143;
                
            }
            , addToAccessGroup: (groupId: bigint, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_1148 = new DataInOut();
                dataOut_1148.writeByte(9);
                const argsNames_1150: string[] = ["groupId", "uid"];
                const argsValues_1151: any[] = [groupId, uid];
                const result_1149 = ARFuture.of<boolean>();
                sCtx_1114.invokeRemoteMethodAfter("addToAccessGroup", result_1149, argsNames_1150, argsValues_1151);
                const reqId_1147 = sCtx_1114.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1149 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1114, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1149.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1148.writeInt(reqId_1147);
                dataOut_1148.writeLong(groupId);
                FastMeta.META_UUID.serialize(sCtx_1114, uid, dataOut_1148);
                sCtx_1114.sendToRemote(dataOut_1148.toArray());
                return result_1149;
                
            }
            , removeFromAccessGroup: (groupId: bigint, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_1153 = new DataInOut();
                dataOut_1153.writeByte(10);
                const argsNames_1155: string[] = ["groupId", "uid"];
                const argsValues_1156: any[] = [groupId, uid];
                const result_1154 = ARFuture.of<boolean>();
                sCtx_1114.invokeRemoteMethodAfter("removeFromAccessGroup", result_1154, argsNames_1155, argsValues_1156);
                const reqId_1152 = sCtx_1114.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1154 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1114, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1154.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1153.writeInt(reqId_1152);
                dataOut_1153.writeLong(groupId);
                FastMeta.META_UUID.serialize(sCtx_1114, uid, dataOut_1153);
                sCtx_1114.sendToRemote(dataOut_1153.toArray());
                return result_1154;
                
            }
            , checkAccessForSendMessage: (uid: UUID): AFuture =>  {
                const dataOut_1158 = new DataInOut();
                dataOut_1158.writeByte(11);
                const argsNames_1160: string[] = ["uid"];
                const argsValues_1161: any[] = [uid];
                const result_1159 = AFuture.make();
                sCtx_1114.invokeRemoteMethodAfter("checkAccessForSendMessage", result_1159, argsNames_1160, argsValues_1161);
                const reqId_1157 = sCtx_1114.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1159 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1159.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1158.writeInt(reqId_1157);
                FastMeta.META_UUID.serialize(sCtx_1114, uid, dataOut_1158);
                sCtx_1114.sendToRemote(dataOut_1158.toArray());
                return result_1159;
                
            }
            , resolverServers: (sid: number[]): void =>  {
                const dataOut_1163 = new DataInOut();
                dataOut_1163.writeByte(12);
                const argsNames_1165: string[] = ["sid"];
                const argsValues_1166: any[] = [sid];
                sCtx_1114.invokeRemoteMethodAfter("resolverServers", null, argsNames_1165, argsValues_1166);
                SerializerPackNumber.INSTANCE.put(dataOut_1163, sid.length);
                for (const el_1167 of sid)  {
                    dataOut_1163.writeShort(el_1167);
                    
                }
                sCtx_1114.sendToRemote(dataOut_1163.toArray());
                
            }
            , resolveClouds: (uids: UUID[]): void =>  {
                const dataOut_1169 = new DataInOut();
                dataOut_1169.writeByte(13);
                const argsNames_1171: string[] = ["uids"];
                const argsValues_1172: any[] = [uids];
                sCtx_1114.invokeRemoteMethodAfter("resolveClouds", null, argsNames_1171, argsValues_1172);
                SerializerPackNumber.INSTANCE.put(dataOut_1169, uids.length);
                for (const el_1173 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1114, el_1173, dataOut_1169);
                    
                }
                sCtx_1114.sendToRemote(dataOut_1169.toArray());
                
            }
            , getAccessGroups: (uid: UUID): ARFuture<bigint[]> =>  {
                const dataOut_1175 = new DataInOut();
                dataOut_1175.writeByte(14);
                const argsNames_1177: string[] = ["uid"];
                const argsValues_1178: any[] = [uid];
                const result_1176 = ARFuture.of<bigint[]>();
                sCtx_1114.invokeRemoteMethodAfter("getAccessGroups", result_1176, argsNames_1177, argsValues_1178);
                const reqId_1174 = sCtx_1114.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1176 as ARFuture<bigint[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_LONG).deserialize(sCtx_1114, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1176.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1175.writeInt(reqId_1174);
                FastMeta.META_UUID.serialize(sCtx_1114, uid, dataOut_1175);
                sCtx_1114.sendToRemote(dataOut_1175.toArray());
                return result_1176;
                
            }
            , getAccessGroup: (groupId: bigint): ARFuture<AccessGroup> =>  {
                const dataOut_1180 = new DataInOut();
                dataOut_1180.writeByte(15);
                const argsNames_1182: string[] = ["groupId"];
                const argsValues_1183: any[] = [groupId];
                const result_1181 = ARFuture.of<AccessGroup>();
                sCtx_1114.invokeRemoteMethodAfter("getAccessGroup", result_1181, argsNames_1182, argsValues_1183);
                const reqId_1179 = sCtx_1114.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1181 as ARFuture<AccessGroup>).tryDone(AccessGroup.META.deserialize(sCtx_1114, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1181.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1180.writeInt(reqId_1179);
                dataOut_1180.writeLong(groupId);
                sCtx_1114.sendToRemote(dataOut_1180.toArray());
                return result_1181;
                
            }
            , getAllAccessedClients: (uid: UUID): ARFuture<UUID[]> =>  {
                const dataOut_1185 = new DataInOut();
                dataOut_1185.writeByte(16);
                const argsNames_1187: string[] = ["uid"];
                const argsValues_1188: any[] = [uid];
                const result_1186 = ARFuture.of<UUID[]>();
                sCtx_1114.invokeRemoteMethodAfter("getAllAccessedClients", result_1186, argsNames_1187, argsValues_1188);
                const reqId_1184 = sCtx_1114.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1186 as ARFuture<UUID[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_UUID).deserialize(sCtx_1114, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1186.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1185.writeInt(reqId_1184);
                FastMeta.META_UUID.serialize(sCtx_1114, uid, dataOut_1185);
                sCtx_1114.sendToRemote(dataOut_1185.toArray());
                return result_1186;
                
            }
            , checkAccessForSendMessage2: (uid1: UUID, uid2: UUID): ARFuture<boolean> =>  {
                const dataOut_1190 = new DataInOut();
                dataOut_1190.writeByte(17);
                const argsNames_1192: string[] = ["uid1", "uid2"];
                const argsValues_1193: any[] = [uid1, uid2];
                const result_1191 = ARFuture.of<boolean>();
                sCtx_1114.invokeRemoteMethodAfter("checkAccessForSendMessage2", result_1191, argsNames_1192, argsValues_1193);
                const reqId_1189 = sCtx_1114.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1191 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1114, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1191.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1190.writeInt(reqId_1189);
                FastMeta.META_UUID.serialize(sCtx_1114, uid1, dataOut_1190);
                FastMeta.META_UUID.serialize(sCtx_1114, uid2, dataOut_1190);
                sCtx_1114.sendToRemote(dataOut_1190.toArray());
                return result_1191;
                
            }
            , sendTelemetry: (telemetry: Telemetry): void =>  {
                const dataOut_1195 = new DataInOut();
                dataOut_1195.writeByte(18);
                const argsNames_1197: string[] = ["telemetry"];
                const argsValues_1198: any[] = [telemetry];
                sCtx_1114.invokeRemoteMethodAfter("sendTelemetry", null, argsNames_1197, argsValues_1198);
                Telemetry.META.serialize(sCtx_1114, telemetry, dataOut_1195);
                sCtx_1114.sendToRemote(dataOut_1195.toArray());
                
            }
            , requestAccessGroupsForClients: (uids: UUID[]): void =>  {
                const dataOut_1200 = new DataInOut();
                dataOut_1200.writeByte(19);
                const argsNames_1202: string[] = ["uids"];
                const argsValues_1203: any[] = [uids];
                sCtx_1114.invokeRemoteMethodAfter("requestAccessGroupsForClients", null, argsNames_1202, argsValues_1203);
                SerializerPackNumber.INSTANCE.put(dataOut_1200, uids.length);
                for (const el_1204 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1114, el_1204, dataOut_1200);
                    
                }
                sCtx_1114.sendToRemote(dataOut_1200.toArray());
                
            }
            , requestAccessGroupsItems: (ids: bigint[]): void =>  {
                const dataOut_1206 = new DataInOut();
                dataOut_1206.writeByte(20);
                const argsNames_1208: string[] = ["ids"];
                const argsValues_1209: any[] = [ids];
                sCtx_1114.invokeRemoteMethodAfter("requestAccessGroupsItems", null, argsNames_1208, argsValues_1209);
                SerializerPackNumber.INSTANCE.put(dataOut_1206, ids.length);
                for (const el_1210 of ids)  {
                    dataOut_1206.writeLong(el_1210);
                    
                }
                sCtx_1114.sendToRemote(dataOut_1206.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_1212 = new DataInOut();
                dataOut_1212.writeByte(22);
                const argsNames_1214: string[] = ["uid", "groups"];
                const argsValues_1215: any[] = [uid, groups];
                sCtx_1114.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_1214, argsValues_1215);
                FastMeta.META_UUID.serialize(sCtx_1114, uid, dataOut_1212);
                SerializerPackNumber.INSTANCE.put(dataOut_1212, groups.length);
                for (const el_1216 of groups)  {
                    dataOut_1212.writeLong(el_1216);
                    
                }
                sCtx_1114.sendToRemote(dataOut_1212.toArray());
                
            }
            , addItemsToAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_1218 = new DataInOut();
                dataOut_1218.writeByte(23);
                const argsNames_1220: string[] = ["id", "groups"];
                const argsValues_1221: any[] = [id, groups];
                sCtx_1114.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_1220, argsValues_1221);
                dataOut_1218.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_1218, groups.length);
                for (const el_1222 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1114, el_1222, dataOut_1218);
                    
                }
                sCtx_1114.sendToRemote(dataOut_1218.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_1224 = new DataInOut();
                dataOut_1224.writeByte(24);
                const argsNames_1226: string[] = ["id", "groups"];
                const argsValues_1227: any[] = [id, groups];
                sCtx_1114.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_1226, argsValues_1227);
                dataOut_1224.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_1224, groups.length);
                for (const el_1228 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1114, el_1228, dataOut_1224);
                    
                }
                sCtx_1114.sendToRemote(dataOut_1224.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_1230 = new DataInOut();
                dataOut_1230.writeByte(25);
                const argsNames_1232: string[] = ["uid", "groups"];
                const argsValues_1233: any[] = [uid, groups];
                sCtx_1114.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_1232, argsValues_1233);
                FastMeta.META_UUID.serialize(sCtx_1114, uid, dataOut_1230);
                SerializerPackNumber.INSTANCE.put(dataOut_1230, groups.length);
                for (const el_1234 of groups)  {
                    dataOut_1230.writeLong(el_1234);
                    
                }
                sCtx_1114.sendToRemote(dataOut_1230.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_1236 = new DataInOut();
                dataOut_1236.writeByte(26);
                const argsNames_1238: string[] = ["uid", "groups"];
                const argsValues_1239: any[] = [uid, groups];
                sCtx_1114.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_1238, argsValues_1239);
                FastMeta.META_UUID.serialize(sCtx_1114, uid, dataOut_1236);
                SerializerPackNumber.INSTANCE.put(dataOut_1236, groups.length);
                for (const el_1240 of groups)  {
                    dataOut_1236.writeLong(el_1240);
                    
                }
                sCtx_1114.sendToRemote(dataOut_1236.toArray());
                
            }
            , requestAllAccessedClients: (uids: UUID[]): void =>  {
                const dataOut_1242 = new DataInOut();
                dataOut_1242.writeByte(27);
                const argsNames_1244: string[] = ["uids"];
                const argsValues_1245: any[] = [uids];
                sCtx_1114.invokeRemoteMethodAfter("requestAllAccessedClients", null, argsNames_1244, argsValues_1245);
                SerializerPackNumber.INSTANCE.put(dataOut_1242, uids.length);
                for (const el_1246 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1114, el_1246, dataOut_1242);
                    
                }
                sCtx_1114.sendToRemote(dataOut_1242.toArray());
                
            }
            , requestAccessCheck: (requests: AccessCheckPair[]): void =>  {
                const dataOut_1248 = new DataInOut();
                dataOut_1248.writeByte(28);
                const argsNames_1250: string[] = ["requests"];
                const argsValues_1251: any[] = [requests];
                sCtx_1114.invokeRemoteMethodAfter("requestAccessCheck", null, argsNames_1250, argsValues_1251);
                SerializerPackNumber.INSTANCE.put(dataOut_1248, requests.length);
                for (const el_1252 of requests)  {
                    AccessCheckPair.META.serialize(sCtx_1114, el_1252, dataOut_1248);
                    
                }
                sCtx_1114.sendToRemote(dataOut_1248.toArray());
                
            }
            , getClientActivity: (uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<ClientActivity[]> =>  {
                const dataOut_1254 = new DataInOut();
                dataOut_1254.writeByte(29);
                const argsNames_1256: string[] = ["uid", "fromTime", "toTime", "limit"];
                const argsValues_1257: any[] = [uid, fromTime, toTime, limit];
                const result_1255 = ARFuture.of<ClientActivity[]>();
                sCtx_1114.invokeRemoteMethodAfter("getClientActivity", result_1255, argsNames_1256, argsValues_1257);
                const reqId_1253 = sCtx_1114.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1255 as ARFuture<ClientActivity[]>).tryDone(FastMeta.getMetaArray(ClientActivity.META).deserialize(sCtx_1114, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1255.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1254.writeInt(reqId_1253);
                FastMeta.META_UUID.serialize(sCtx_1114, uid, dataOut_1254);
                dataOut_1254.writeLong(fromTime);
                dataOut_1254.writeLong(toTime);
                dataOut_1254.writeInt(limit);
                sCtx_1114.sendToRemote(dataOut_1254.toArray());
                return result_1255;
                
            }
            , searchClientLogs: (uid: UUID, query: string, limit: number): ARFuture<ClientLogEntry[]> =>  {
                const dataOut_1259 = new DataInOut();
                dataOut_1259.writeByte(30);
                const argsNames_1261: string[] = ["uid", "query", "limit"];
                const argsValues_1262: any[] = [uid, query, limit];
                const result_1260 = ARFuture.of<ClientLogEntry[]>();
                sCtx_1114.invokeRemoteMethodAfter("searchClientLogs", result_1260, argsNames_1261, argsValues_1262);
                const reqId_1258 = sCtx_1114.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1260 as ARFuture<ClientLogEntry[]>).tryDone(FastMeta.getMetaArray(ClientLogEntry.META).deserialize(sCtx_1114, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1260.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1259.writeInt(reqId_1258);
                FastMeta.META_UUID.serialize(sCtx_1114, uid, dataOut_1259);
                const stringBytes_1263 = new TextEncoder().encode(query);
                SerializerPackNumber.INSTANCE.put(dataOut_1259, stringBytes_1263.length);
                dataOut_1259.write(stringBytes_1263);
                dataOut_1259.writeInt(limit);
                sCtx_1114.sendToRemote(dataOut_1259.toArray());
                return result_1260;
                
            }
            , getClientConnections: (uid: UUID, limit: number): ARFuture<ClientConnectionInfo[]> =>  {
                const dataOut_1266 = new DataInOut();
                dataOut_1266.writeByte(31);
                const argsNames_1268: string[] = ["uid", "limit"];
                const argsValues_1269: any[] = [uid, limit];
                const result_1267 = ARFuture.of<ClientConnectionInfo[]>();
                sCtx_1114.invokeRemoteMethodAfter("getClientConnections", result_1267, argsNames_1268, argsValues_1269);
                const reqId_1265 = sCtx_1114.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1267 as ARFuture<ClientConnectionInfo[]>).tryDone(FastMeta.getMetaArray(ClientConnectionInfo.META).deserialize(sCtx_1114, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1267.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1266.writeInt(reqId_1265);
                FastMeta.META_UUID.serialize(sCtx_1114, uid, dataOut_1266);
                dataOut_1266.writeInt(limit);
                sCtx_1114.sendToRemote(dataOut_1266.toArray());
                return result_1267;
                
            }
            , getClientMessages: (uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<MessageInfo[]> =>  {
                const dataOut_1271 = new DataInOut();
                dataOut_1271.writeByte(32);
                const argsNames_1273: string[] = ["uid", "fromTime", "toTime", "limit"];
                const argsValues_1274: any[] = [uid, fromTime, toTime, limit];
                const result_1272 = ARFuture.of<MessageInfo[]>();
                sCtx_1114.invokeRemoteMethodAfter("getClientMessages", result_1272, argsNames_1273, argsValues_1274);
                const reqId_1270 = sCtx_1114.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1272 as ARFuture<MessageInfo[]>).tryDone(FastMeta.getMetaArray(MessageInfo.META).deserialize(sCtx_1114, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1272.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1271.writeInt(reqId_1270);
                FastMeta.META_UUID.serialize(sCtx_1114, uid, dataOut_1271);
                dataOut_1271.writeLong(fromTime);
                dataOut_1271.writeLong(toTime);
                dataOut_1271.writeInt(limit);
                sCtx_1114.sendToRemote(dataOut_1271.toArray());
                return result_1272;
                
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
                    const reqId_1275 = dataIn.readInt();
                    const argsNames_1276: string[] = [];
                    const argsValues_1277: any[] = [];
                    ctx.invokeLocalMethodBefore("getTimeUTC", argsNames_1276, argsValues_1277);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getTimeUTC();
                    ctx.invokeLocalMethodAfter("getTimeUTC", resultFuture, argsNames_1276, argsValues_1277);
                    resultFuture.to((v_1279: bigint) =>  {
                        const data_1278 = new DataInOut();
                        data_1278.writeLong(v_1279);
                        ctx.sendResultToRemote(reqId_1275, data_1278.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let uid_1281: UUID;
                    let data_1282: LoginStream;
                    uid_1281 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_1282 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsNames_1283: string[] = ["uid", "data"];
                    const argsValues_1284: any[] = [uid_1281, data_1282];
                    ctx.invokeLocalMethodBefore("loginByUID", argsNames_1283, argsValues_1284);
                    localApi.loginByUID(uid_1281, data_1282);
                    ctx.invokeLocalMethodAfter("loginByUID", null, argsNames_1283, argsValues_1284);
                    break;
                    
                }
                case 5:  {
                    let alias_1286: UUID;
                    let data_1287: LoginStream;
                    alias_1286 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_1287 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsNames_1288: string[] = ["alias", "data"];
                    const argsValues_1289: any[] = [alias_1286, data_1287];
                    ctx.invokeLocalMethodBefore("loginByAlias", argsNames_1288, argsValues_1289);
                    localApi.loginByAlias(alias_1286, data_1287);
                    ctx.invokeLocalMethodAfter("loginByAlias", null, argsNames_1288, argsValues_1289);
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
    makeRemote(sCtx_1290: FastFutureContext): LoginApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_1290.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_1290, getTimeUTC: (): ARFuture<bigint> =>  {
                const dataOut_1292 = new DataInOut();
                dataOut_1292.writeByte(3);
                const argsNames_1294: string[] = [];
                const argsValues_1295: any[] = [];
                const result_1293 = ARFuture.of<bigint>();
                sCtx_1290.invokeRemoteMethodAfter("getTimeUTC", result_1293, argsNames_1294, argsValues_1295);
                const reqId_1291 = sCtx_1290.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1293 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_1290, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1293.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1292.writeInt(reqId_1291);
                sCtx_1290.sendToRemote(dataOut_1292.toArray());
                return result_1293;
                
            }
            , loginByUID: (uid: UUID, data: LoginStream): void =>  {
                const dataOut_1297 = new DataInOut();
                dataOut_1297.writeByte(4);
                const argsNames_1299: string[] = ["uid", "data"];
                const argsValues_1300: any[] = [uid, data];
                sCtx_1290.invokeRemoteMethodAfter("loginByUID", null, argsNames_1299, argsValues_1300);
                FastMeta.META_UUID.serialize(sCtx_1290, uid, dataOut_1297);
                LoginStream.META.serialize(sCtx_1290, data, dataOut_1297);
                sCtx_1290.sendToRemote(dataOut_1297.toArray());
                
            }
            , loginByAlias: (alias: UUID, data: LoginStream): void =>  {
                const dataOut_1302 = new DataInOut();
                dataOut_1302.writeByte(5);
                const argsNames_1304: string[] = ["alias", "data"];
                const argsValues_1305: any[] = [alias, data];
                sCtx_1290.invokeRemoteMethodAfter("loginByAlias", null, argsNames_1304, argsValues_1305);
                FastMeta.META_UUID.serialize(sCtx_1290, alias, dataOut_1302);
                LoginStream.META.serialize(sCtx_1290, data, dataOut_1302);
                sCtx_1290.sendToRemote(dataOut_1302.toArray());
                
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
    makeRemote(sCtx_1306: FastFutureContext): ServerApiByUidClientRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_1306.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_1306, 
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
                    const reqId_1307 = dataIn.readInt();
                    const argsNames_1308: string[] = [];
                    const argsValues_1309: any[] = [];
                    ctx.invokeLocalMethodBefore("getBalance", argsNames_1308, argsValues_1309);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBalance();
                    ctx.invokeLocalMethodAfter("getBalance", resultFuture, argsNames_1308, argsValues_1309);
                    resultFuture.to((v_1311: bigint) =>  {
                        const data_1310 = new DataInOut();
                        data_1310.writeLong(v_1311);
                        ctx.sendResultToRemote(reqId_1307, data_1310.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    const reqId_1312 = dataIn.readInt();
                    let uid_1313: UUID;
                    uid_1313 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1314: string[] = ["uid"];
                    const argsValues_1315: any[] = [uid_1313];
                    ctx.invokeLocalMethodBefore("setParent", argsNames_1314, argsValues_1315);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.setParent(uid_1313);
                    ctx.invokeLocalMethodAfter("setParent", resultFuture, argsNames_1314, argsValues_1315);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1312);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_1316 = dataIn.readInt();
                    const argsNames_1317: string[] = [];
                    const argsValues_1318: any[] = [];
                    ctx.invokeLocalMethodBefore("block", argsNames_1317, argsValues_1318);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.block();
                    ctx.invokeLocalMethodAfter("block", resultFuture, argsNames_1317, argsValues_1318);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1316);
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    const reqId_1319 = dataIn.readInt();
                    const argsNames_1320: string[] = [];
                    const argsValues_1321: any[] = [];
                    ctx.invokeLocalMethodBefore("getPosition", argsNames_1320, argsValues_1321);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getPosition();
                    ctx.invokeLocalMethodAfter("getPosition", resultFuture, argsNames_1320, argsValues_1321);
                    resultFuture.to((v_1323: Cloud) =>  {
                        const data_1322 = new DataInOut();
                        Cloud.META.serialize(ctx, v_1323, data_1322);
                        ctx.sendResultToRemote(reqId_1319, data_1322.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 7:  {
                    const reqId_1324 = dataIn.readInt();
                    const argsNames_1325: string[] = [];
                    const argsValues_1326: any[] = [];
                    ctx.invokeLocalMethodBefore("getParent", argsNames_1325, argsValues_1326);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getParent();
                    ctx.invokeLocalMethodAfter("getParent", resultFuture, argsNames_1325, argsValues_1326);
                    resultFuture.to((v_1328: UUID) =>  {
                        const data_1327 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_1328, data_1327);
                        ctx.sendResultToRemote(reqId_1324, data_1327.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 8:  {
                    const reqId_1329 = dataIn.readInt();
                    const argsNames_1330: string[] = [];
                    const argsValues_1331: any[] = [];
                    ctx.invokeLocalMethodBefore("getBeneficiary", argsNames_1330, argsValues_1331);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBeneficiary();
                    ctx.invokeLocalMethodAfter("getBeneficiary", resultFuture, argsNames_1330, argsValues_1331);
                    resultFuture.to((v_1333: UUID) =>  {
                        const data_1332 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_1333, data_1332);
                        ctx.sendResultToRemote(reqId_1329, data_1332.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_1334 = dataIn.readInt();
                    let uid_1335: UUID;
                    uid_1335 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1336: string[] = ["uid"];
                    const argsValues_1337: any[] = [uid_1335];
                    ctx.invokeLocalMethodBefore("setBeneficiary", argsNames_1336, argsValues_1337);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.setBeneficiary(uid_1335);
                    ctx.invokeLocalMethodAfter("setBeneficiary", resultFuture, argsNames_1336, argsValues_1337);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1334);
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_1338 = dataIn.readInt();
                    const argsNames_1339: string[] = [];
                    const argsValues_1340: any[] = [];
                    ctx.invokeLocalMethodBefore("getBlockTime", argsNames_1339, argsValues_1340);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBlockTime();
                    ctx.invokeLocalMethodAfter("getBlockTime", resultFuture, argsNames_1339, argsValues_1340);
                    resultFuture.to((v_1342: Date) =>  {
                        const data_1341 = new DataInOut();
                        data_1341.writeLong(v_1342.getTime());
                        ctx.sendResultToRemote(reqId_1338, data_1341.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_1343 = dataIn.readInt();
                    const argsNames_1344: string[] = [];
                    const argsValues_1345: any[] = [];
                    ctx.invokeLocalMethodBefore("unblock", argsNames_1344, argsValues_1345);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.unblock();
                    ctx.invokeLocalMethodAfter("unblock", resultFuture, argsNames_1344, argsValues_1345);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1343);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    const reqId_1346 = dataIn.readInt();
                    const argsNames_1347: string[] = [];
                    const argsValues_1348: any[] = [];
                    ctx.invokeLocalMethodBefore("createTime", argsNames_1347, argsValues_1348);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.createTime();
                    ctx.invokeLocalMethodAfter("createTime", resultFuture, argsNames_1347, argsValues_1348);
                    resultFuture.to((v_1350: Date) =>  {
                        const data_1349 = new DataInOut();
                        data_1349.writeLong(v_1350.getTime());
                        ctx.sendResultToRemote(reqId_1346, data_1349.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 13:  {
                    const reqId_1351 = dataIn.readInt();
                    const argsNames_1352: string[] = [];
                    const argsValues_1353: any[] = [];
                    ctx.invokeLocalMethodBefore("onlineTime", argsNames_1352, argsValues_1353);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.onlineTime();
                    ctx.invokeLocalMethodAfter("onlineTime", resultFuture, argsNames_1352, argsValues_1353);
                    resultFuture.to((v_1355: Date) =>  {
                        const data_1354 = new DataInOut();
                        data_1354.writeLong(v_1355.getTime());
                        ctx.sendResultToRemote(reqId_1351, data_1354.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 14:  {
                    const reqId_1356 = dataIn.readInt();
                    let groupId_1357: bigint;
                    groupId_1357 = dataIn.readLong();
                    const argsNames_1358: string[] = ["groupId"];
                    const argsValues_1359: any[] = [groupId_1357];
                    ctx.invokeLocalMethodBefore("addAccessGroup", argsNames_1358, argsValues_1359);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.addAccessGroup(groupId_1357);
                    ctx.invokeLocalMethodAfter("addAccessGroup", resultFuture, argsNames_1358, argsValues_1359);
                    resultFuture.to((v_1361: boolean) =>  {
                        const data_1360 = new DataInOut();
                        data_1360.writeBoolean(v_1361);
                        ctx.sendResultToRemote(reqId_1356, data_1360.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_1362 = dataIn.readInt();
                    let groupId_1363: bigint;
                    groupId_1363 = dataIn.readLong();
                    const argsNames_1364: string[] = ["groupId"];
                    const argsValues_1365: any[] = [groupId_1363];
                    ctx.invokeLocalMethodBefore("removeAccessGroup", argsNames_1364, argsValues_1365);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.removeAccessGroup(groupId_1363);
                    ctx.invokeLocalMethodAfter("removeAccessGroup", resultFuture, argsNames_1364, argsValues_1365);
                    resultFuture.to((v_1367: boolean) =>  {
                        const data_1366 = new DataInOut();
                        data_1366.writeBoolean(v_1367);
                        ctx.sendResultToRemote(reqId_1362, data_1366.toArray());
                        
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
    makeRemote(sCtx_1368: FastFutureContext): ServerApiByUidRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_1368.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_1368, getBalance: (): ARFuture<bigint> =>  {
                const dataOut_1370 = new DataInOut();
                dataOut_1370.writeByte(3);
                const argsNames_1372: string[] = [];
                const argsValues_1373: any[] = [];
                const result_1371 = ARFuture.of<bigint>();
                sCtx_1368.invokeRemoteMethodAfter("getBalance", result_1371, argsNames_1372, argsValues_1373);
                const reqId_1369 = sCtx_1368.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1371 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_1368, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1371.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1370.writeInt(reqId_1369);
                sCtx_1368.sendToRemote(dataOut_1370.toArray());
                return result_1371;
                
            }
            , setParent: (uid: UUID): AFuture =>  {
                const dataOut_1375 = new DataInOut();
                dataOut_1375.writeByte(4);
                const argsNames_1377: string[] = ["uid"];
                const argsValues_1378: any[] = [uid];
                const result_1376 = AFuture.make();
                sCtx_1368.invokeRemoteMethodAfter("setParent", result_1376, argsNames_1377, argsValues_1378);
                const reqId_1374 = sCtx_1368.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1376 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1376.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1375.writeInt(reqId_1374);
                FastMeta.META_UUID.serialize(sCtx_1368, uid, dataOut_1375);
                sCtx_1368.sendToRemote(dataOut_1375.toArray());
                return result_1376;
                
            }
            , block: (): AFuture =>  {
                const dataOut_1380 = new DataInOut();
                dataOut_1380.writeByte(5);
                const argsNames_1382: string[] = [];
                const argsValues_1383: any[] = [];
                const result_1381 = AFuture.make();
                sCtx_1368.invokeRemoteMethodAfter("block", result_1381, argsNames_1382, argsValues_1383);
                const reqId_1379 = sCtx_1368.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1381 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1381.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1380.writeInt(reqId_1379);
                sCtx_1368.sendToRemote(dataOut_1380.toArray());
                return result_1381;
                
            }
            , getPosition: (): ARFuture<Cloud> =>  {
                const dataOut_1385 = new DataInOut();
                dataOut_1385.writeByte(6);
                const argsNames_1387: string[] = [];
                const argsValues_1388: any[] = [];
                const result_1386 = ARFuture.of<Cloud>();
                sCtx_1368.invokeRemoteMethodAfter("getPosition", result_1386, argsNames_1387, argsValues_1388);
                const reqId_1384 = sCtx_1368.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1386 as ARFuture<Cloud>).tryDone(Cloud.META.deserialize(sCtx_1368, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1386.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1385.writeInt(reqId_1384);
                sCtx_1368.sendToRemote(dataOut_1385.toArray());
                return result_1386;
                
            }
            , getParent: (): ARFuture<UUID> =>  {
                const dataOut_1390 = new DataInOut();
                dataOut_1390.writeByte(7);
                const argsNames_1392: string[] = [];
                const argsValues_1393: any[] = [];
                const result_1391 = ARFuture.of<UUID>();
                sCtx_1368.invokeRemoteMethodAfter("getParent", result_1391, argsNames_1392, argsValues_1393);
                const reqId_1389 = sCtx_1368.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1391 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_1368, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1391.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1390.writeInt(reqId_1389);
                sCtx_1368.sendToRemote(dataOut_1390.toArray());
                return result_1391;
                
            }
            , getBeneficiary: (): ARFuture<UUID> =>  {
                const dataOut_1395 = new DataInOut();
                dataOut_1395.writeByte(8);
                const argsNames_1397: string[] = [];
                const argsValues_1398: any[] = [];
                const result_1396 = ARFuture.of<UUID>();
                sCtx_1368.invokeRemoteMethodAfter("getBeneficiary", result_1396, argsNames_1397, argsValues_1398);
                const reqId_1394 = sCtx_1368.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1396 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_1368, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1396.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1395.writeInt(reqId_1394);
                sCtx_1368.sendToRemote(dataOut_1395.toArray());
                return result_1396;
                
            }
            , setBeneficiary: (uid: UUID): AFuture =>  {
                const dataOut_1400 = new DataInOut();
                dataOut_1400.writeByte(9);
                const argsNames_1402: string[] = ["uid"];
                const argsValues_1403: any[] = [uid];
                const result_1401 = AFuture.make();
                sCtx_1368.invokeRemoteMethodAfter("setBeneficiary", result_1401, argsNames_1402, argsValues_1403);
                const reqId_1399 = sCtx_1368.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1401 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1401.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1400.writeInt(reqId_1399);
                FastMeta.META_UUID.serialize(sCtx_1368, uid, dataOut_1400);
                sCtx_1368.sendToRemote(dataOut_1400.toArray());
                return result_1401;
                
            }
            , getBlockTime: (): ARFuture<Date> =>  {
                const dataOut_1405 = new DataInOut();
                dataOut_1405.writeByte(10);
                const argsNames_1407: string[] = [];
                const argsValues_1408: any[] = [];
                const result_1406 = ARFuture.of<Date>();
                sCtx_1368.invokeRemoteMethodAfter("getBlockTime", result_1406, argsNames_1407, argsValues_1408);
                const reqId_1404 = sCtx_1368.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1406 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1368, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1406.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1405.writeInt(reqId_1404);
                sCtx_1368.sendToRemote(dataOut_1405.toArray());
                return result_1406;
                
            }
            , unblock: (): AFuture =>  {
                const dataOut_1410 = new DataInOut();
                dataOut_1410.writeByte(11);
                const argsNames_1412: string[] = [];
                const argsValues_1413: any[] = [];
                const result_1411 = AFuture.make();
                sCtx_1368.invokeRemoteMethodAfter("unblock", result_1411, argsNames_1412, argsValues_1413);
                const reqId_1409 = sCtx_1368.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1411 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1411.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1410.writeInt(reqId_1409);
                sCtx_1368.sendToRemote(dataOut_1410.toArray());
                return result_1411;
                
            }
            , createTime: (): ARFuture<Date> =>  {
                const dataOut_1415 = new DataInOut();
                dataOut_1415.writeByte(12);
                const argsNames_1417: string[] = [];
                const argsValues_1418: any[] = [];
                const result_1416 = ARFuture.of<Date>();
                sCtx_1368.invokeRemoteMethodAfter("createTime", result_1416, argsNames_1417, argsValues_1418);
                const reqId_1414 = sCtx_1368.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1416 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1368, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1416.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1415.writeInt(reqId_1414);
                sCtx_1368.sendToRemote(dataOut_1415.toArray());
                return result_1416;
                
            }
            , onlineTime: (): ARFuture<Date> =>  {
                const dataOut_1420 = new DataInOut();
                dataOut_1420.writeByte(13);
                const argsNames_1422: string[] = [];
                const argsValues_1423: any[] = [];
                const result_1421 = ARFuture.of<Date>();
                sCtx_1368.invokeRemoteMethodAfter("onlineTime", result_1421, argsNames_1422, argsValues_1423);
                const reqId_1419 = sCtx_1368.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1421 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1368, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1421.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1420.writeInt(reqId_1419);
                sCtx_1368.sendToRemote(dataOut_1420.toArray());
                return result_1421;
                
            }
            , addAccessGroup: (groupId: bigint): ARFuture<boolean> =>  {
                const dataOut_1425 = new DataInOut();
                dataOut_1425.writeByte(14);
                const argsNames_1427: string[] = ["groupId"];
                const argsValues_1428: any[] = [groupId];
                const result_1426 = ARFuture.of<boolean>();
                sCtx_1368.invokeRemoteMethodAfter("addAccessGroup", result_1426, argsNames_1427, argsValues_1428);
                const reqId_1424 = sCtx_1368.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1426 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1368, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1426.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1425.writeInt(reqId_1424);
                dataOut_1425.writeLong(groupId);
                sCtx_1368.sendToRemote(dataOut_1425.toArray());
                return result_1426;
                
            }
            , removeAccessGroup: (groupId: bigint): ARFuture<boolean> =>  {
                const dataOut_1430 = new DataInOut();
                dataOut_1430.writeByte(15);
                const argsNames_1432: string[] = ["groupId"];
                const argsValues_1433: any[] = [groupId];
                const result_1431 = ARFuture.of<boolean>();
                sCtx_1368.invokeRemoteMethodAfter("removeAccessGroup", result_1431, argsNames_1432, argsValues_1433);
                const reqId_1429 = sCtx_1368.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1431 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1368, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1431.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1430.writeInt(reqId_1429);
                dataOut_1430.writeLong(groupId);
                sCtx_1368.sendToRemote(dataOut_1430.toArray());
                return result_1431;
                
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
    makeRemote(sCtx_1434: FastFutureContext): ClientApiRegSafeRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_1434.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_1434, 
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
    makeRemote(sCtx_1435: FastFutureContext): GlobalRegClientApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_1435.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_1435, 
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
                    let stream_1437: ClientApiRegSafeStream;
                    stream_1437 = ClientApiRegSafeStream.META.deserialize(ctx, dataIn);
                    const argsNames_1438: string[] = ["stream"];
                    const argsValues_1439: any[] = [stream_1437];
                    ctx.invokeLocalMethodBefore("enter", argsNames_1438, argsValues_1439);
                    localApi.enter(stream_1437);
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_1438, argsValues_1439);
                    break;
                    
                }
                case 4:  {
                    let stream_1441: GlobalRegClientApiStream;
                    stream_1441 = GlobalRegClientApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_1442: string[] = ["stream"];
                    const argsValues_1443: any[] = [stream_1441];
                    ctx.invokeLocalMethodBefore("enterGlobal", argsNames_1442, argsValues_1443);
                    localApi.enterGlobal(stream_1441);
                    ctx.invokeLocalMethodAfter("enterGlobal", null, argsNames_1442, argsValues_1443);
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
    makeRemote(sCtx_1444: FastFutureContext): ClientApiRegUnsafeRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_1444.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_1444, enter: (stream: ClientApiRegSafeStream): void =>  {
                const dataOut_1446 = new DataInOut();
                dataOut_1446.writeByte(3);
                const argsNames_1448: string[] = ["stream"];
                const argsValues_1449: any[] = [stream];
                sCtx_1444.invokeRemoteMethodAfter("enter", null, argsNames_1448, argsValues_1449);
                ClientApiRegSafeStream.META.serialize(sCtx_1444, stream, dataOut_1446);
                sCtx_1444.sendToRemote(dataOut_1446.toArray());
                
            }
            , enterGlobal: (stream: GlobalRegClientApiStream): void =>  {
                const dataOut_1451 = new DataInOut();
                dataOut_1451.writeByte(4);
                const argsNames_1453: string[] = ["stream"];
                const argsValues_1454: any[] = [stream];
                sCtx_1444.invokeRemoteMethodAfter("enterGlobal", null, argsNames_1453, argsValues_1454);
                GlobalRegClientApiStream.META.serialize(sCtx_1444, stream, dataOut_1451);
                sCtx_1444.sendToRemote(dataOut_1451.toArray());
                
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
                    let _key_1456: Key;
                    _key_1456 = Key.META.deserialize(ctx, dataIn);
                    const argsNames_1457: string[] = ["key"];
                    const argsValues_1458: any[] = [_key_1456];
                    ctx.invokeLocalMethodBefore("setMasterKey", argsNames_1457, argsValues_1458);
                    localApi.setMasterKey(_key_1456);
                    ctx.invokeLocalMethodAfter("setMasterKey", null, argsNames_1457, argsValues_1458);
                    break;
                    
                }
                case 4:  {
                    const reqId_1459 = dataIn.readInt();
                    const argsNames_1460: string[] = [];
                    const argsValues_1461: any[] = [];
                    ctx.invokeLocalMethodBefore("finish", argsNames_1460, argsValues_1461);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.finish();
                    ctx.invokeLocalMethodAfter("finish", resultFuture, argsNames_1460, argsValues_1461);
                    resultFuture.to((v_1463: FinishResult) =>  {
                        const data_1462 = new DataInOut();
                        FinishResult.META.serialize(ctx, v_1463, data_1462);
                        ctx.sendResultToRemote(reqId_1459, data_1462.toArray());
                        
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
    makeRemote(sCtx_1464: FastFutureContext): GlobalRegServerApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_1464.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_1464, setMasterKey: (key: Key): void =>  {
                const dataOut_1466 = new DataInOut();
                dataOut_1466.writeByte(3);
                const argsNames_1468: string[] = ["key"];
                const argsValues_1469: any[] = [key];
                sCtx_1464.invokeRemoteMethodAfter("setMasterKey", null, argsNames_1468, argsValues_1469);
                Key.META.serialize(sCtx_1464, key, dataOut_1466);
                sCtx_1464.sendToRemote(dataOut_1466.toArray());
                
            }
            , finish: (): ARFuture<FinishResult> =>  {
                const dataOut_1471 = new DataInOut();
                dataOut_1471.writeByte(4);
                const argsNames_1473: string[] = [];
                const argsValues_1474: any[] = [];
                const result_1472 = ARFuture.of<FinishResult>();
                sCtx_1464.invokeRemoteMethodAfter("finish", result_1472, argsNames_1473, argsValues_1474);
                const reqId_1470 = sCtx_1464.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1472 as ARFuture<FinishResult>).tryDone(FinishResult.META.deserialize(sCtx_1464, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1472.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1471.writeInt(reqId_1470);
                sCtx_1464.sendToRemote(dataOut_1471.toArray());
                return result_1472;
                
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
                    let salt_1476: string;
                    let suffix_1477: string;
                    let passwords_1478: number[];
                    let parent_1479: UUID;
                    let globalApi_1480: GlobalApi;
                    let stringBytes_1481: Uint8Array;
                    const len_1483 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1484 = dataIn.readBytes(len_1483);
                    stringBytes_1481 = bytes_1484;
                    salt_1476 = new TextDecoder('utf-8').decode(stringBytes_1481);
                    let stringBytes_1485: Uint8Array;
                    const len_1487 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1488 = dataIn.readBytes(len_1487);
                    stringBytes_1485 = bytes_1488;
                    suffix_1477 = new TextDecoder('utf-8').decode(stringBytes_1485);
                    const len_1490 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    passwords_1478 = new Array<number>(len_1490);
                    for (let idx_1489 = 0;
                    idx_1489 < len_1490;
                    idx_1489++)  {
                        passwords_1478[idx_1489] = dataIn.readInt();
                        
                    }
                    parent_1479 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    globalApi_1480 = GlobalApi.META.deserialize(ctx, dataIn);
                    const argsNames_1491: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                    const argsValues_1492: any[] = [salt_1476, suffix_1477, passwords_1478, parent_1479, globalApi_1480];
                    ctx.invokeLocalMethodBefore("registration", argsNames_1491, argsValues_1492);
                    localApi.registration(salt_1476, suffix_1477, passwords_1478, parent_1479, globalApi_1480);
                    ctx.invokeLocalMethodAfter("registration", null, argsNames_1491, argsValues_1492);
                    break;
                    
                }
                case 4:  {
                    const reqId_1493 = dataIn.readInt();
                    let parent_1494: UUID;
                    let powMethods_1495: PowMethod;
                    parent_1494 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    powMethods_1495 = PowMethod.META.deserialize(ctx, dataIn);
                    const argsNames_1496: string[] = ["parent", "powMethods"];
                    const argsValues_1497: any[] = [parent_1494, powMethods_1495];
                    ctx.invokeLocalMethodBefore("requestWorkProofData", argsNames_1496, argsValues_1497);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.requestWorkProofData(parent_1494, powMethods_1495);
                    ctx.invokeLocalMethodAfter("requestWorkProofData", resultFuture, argsNames_1496, argsValues_1497);
                    resultFuture.to((v_1499: WorkProofDTO) =>  {
                        const data_1498 = new DataInOut();
                        WorkProofDTO.META.serialize(ctx, v_1499, data_1498);
                        ctx.sendResultToRemote(reqId_1493, data_1498.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_1500 = dataIn.readInt();
                    let serverIds_1501: Cloud;
                    serverIds_1501 = Cloud.META.deserialize(ctx, dataIn);
                    const argsNames_1502: string[] = ["serverIds"];
                    const argsValues_1503: any[] = [serverIds_1501];
                    ctx.invokeLocalMethodBefore("resolveServers", argsNames_1502, argsValues_1503);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.resolveServers(serverIds_1501);
                    ctx.invokeLocalMethodAfter("resolveServers", resultFuture, argsNames_1502, argsValues_1503);
                    resultFuture.to((v_1505: ServerDescriptor[]) =>  {
                        const data_1504 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1504, v_1505.length);
                        for (const el_1506 of v_1505)  {
                            ServerDescriptor.META.serialize(ctx, el_1506, data_1504);
                            
                        }
                        ctx.sendResultToRemote(reqId_1500, data_1504.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    let _key_1508: Key;
                    _key_1508 = Key.META.deserialize(ctx, dataIn);
                    const argsNames_1509: string[] = ["key"];
                    const argsValues_1510: any[] = [_key_1508];
                    ctx.invokeLocalMethodBefore("setReturnKey", argsNames_1509, argsValues_1510);
                    localApi.setReturnKey(_key_1508);
                    ctx.invokeLocalMethodAfter("setReturnKey", null, argsNames_1509, argsValues_1510);
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
    makeRemote(sCtx_1511: FastFutureContext): ServerRegistrationApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_1511.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_1511, registration: (salt: string, suffix: string, passwords: number[], parent: UUID, globalApi: GlobalApi): void =>  {
                const dataOut_1513 = new DataInOut();
                dataOut_1513.writeByte(3);
                const argsNames_1515: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                const argsValues_1516: any[] = [salt, suffix, passwords, parent, globalApi];
                sCtx_1511.invokeRemoteMethodAfter("registration", null, argsNames_1515, argsValues_1516);
                const stringBytes_1517 = new TextEncoder().encode(salt);
                SerializerPackNumber.INSTANCE.put(dataOut_1513, stringBytes_1517.length);
                dataOut_1513.write(stringBytes_1517);
                const stringBytes_1519 = new TextEncoder().encode(suffix);
                SerializerPackNumber.INSTANCE.put(dataOut_1513, stringBytes_1519.length);
                dataOut_1513.write(stringBytes_1519);
                SerializerPackNumber.INSTANCE.put(dataOut_1513, passwords.length);
                for (const el_1521 of passwords)  {
                    dataOut_1513.writeInt(el_1521);
                    
                }
                FastMeta.META_UUID.serialize(sCtx_1511, parent, dataOut_1513);
                GlobalApi.META.serialize(sCtx_1511, globalApi, dataOut_1513);
                sCtx_1511.sendToRemote(dataOut_1513.toArray());
                
            }
            , requestWorkProofData: (parent: UUID, powMethods: PowMethod): ARFuture<WorkProofDTO> =>  {
                const dataOut_1523 = new DataInOut();
                dataOut_1523.writeByte(4);
                const argsNames_1525: string[] = ["parent", "powMethods"];
                const argsValues_1526: any[] = [parent, powMethods];
                const result_1524 = ARFuture.of<WorkProofDTO>();
                sCtx_1511.invokeRemoteMethodAfter("requestWorkProofData", result_1524, argsNames_1525, argsValues_1526);
                const reqId_1522 = sCtx_1511.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1524 as ARFuture<WorkProofDTO>).tryDone(WorkProofDTO.META.deserialize(sCtx_1511, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1524.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1523.writeInt(reqId_1522);
                FastMeta.META_UUID.serialize(sCtx_1511, parent, dataOut_1523);
                PowMethod.META.serialize(sCtx_1511, powMethods, dataOut_1523);
                sCtx_1511.sendToRemote(dataOut_1523.toArray());
                return result_1524;
                
            }
            , resolveServers: (serverIds: Cloud): ARFuture<ServerDescriptor[]> =>  {
                const dataOut_1528 = new DataInOut();
                dataOut_1528.writeByte(5);
                const argsNames_1530: string[] = ["serverIds"];
                const argsValues_1531: any[] = [serverIds];
                const result_1529 = ARFuture.of<ServerDescriptor[]>();
                sCtx_1511.invokeRemoteMethodAfter("resolveServers", result_1529, argsNames_1530, argsValues_1531);
                const reqId_1527 = sCtx_1511.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1529 as ARFuture<ServerDescriptor[]>).tryDone(FastMeta.getMetaArray(ServerDescriptor.META).deserialize(sCtx_1511, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1529.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1528.writeInt(reqId_1527);
                Cloud.META.serialize(sCtx_1511, serverIds, dataOut_1528);
                sCtx_1511.sendToRemote(dataOut_1528.toArray());
                return result_1529;
                
            }
            , setReturnKey: (key: Key): void =>  {
                const dataOut_1533 = new DataInOut();
                dataOut_1533.writeByte(6);
                const argsNames_1535: string[] = ["key"];
                const argsValues_1536: any[] = [key];
                sCtx_1511.invokeRemoteMethodAfter("setReturnKey", null, argsNames_1535, argsValues_1536);
                Key.META.serialize(sCtx_1511, key, dataOut_1533);
                sCtx_1511.sendToRemote(dataOut_1533.toArray());
                
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
                    const reqId_1537 = dataIn.readInt();
                    let cryptoLib_1538: CryptoLib;
                    cryptoLib_1538 = CryptoLib.META.deserialize(ctx, dataIn);
                    const argsNames_1539: string[] = ["cryptoLib"];
                    const argsValues_1540: any[] = [cryptoLib_1538];
                    ctx.invokeLocalMethodBefore("getAsymmetricPublicKey", argsNames_1539, argsValues_1540);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAsymmetricPublicKey(cryptoLib_1538);
                    ctx.invokeLocalMethodAfter("getAsymmetricPublicKey", resultFuture, argsNames_1539, argsValues_1540);
                    resultFuture.to((v_1542: SignedKey) =>  {
                        const data_1541 = new DataInOut();
                        SignedKey.META.serialize(ctx, v_1542, data_1541);
                        ctx.sendResultToRemote(reqId_1537, data_1541.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let cryptoLib_1544: CryptoLib;
                    let stream_1545: ServerRegistrationApiStream;
                    cryptoLib_1544 = CryptoLib.META.deserialize(ctx, dataIn);
                    stream_1545 = ServerRegistrationApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_1546: string[] = ["cryptoLib", "stream"];
                    const argsValues_1547: any[] = [cryptoLib_1544, stream_1545];
                    ctx.invokeLocalMethodBefore("enter", argsNames_1546, argsValues_1547);
                    localApi.enter(cryptoLib_1544, stream_1545);
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_1546, argsValues_1547);
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
    makeRemote(sCtx_1548: FastFutureContext): RegistrationRootApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture): AFuture =>  {
                const futureToUse = sendFuture || AFuture.make();
                sCtx_1548.flush(futureToUse);
                return futureToUse;
                
            }
            , getFastMetaContext: () => sCtx_1548, getAsymmetricPublicKey: (cryptoLib: CryptoLib): ARFuture<SignedKey> =>  {
                const dataOut_1550 = new DataInOut();
                dataOut_1550.writeByte(3);
                const argsNames_1552: string[] = ["cryptoLib"];
                const argsValues_1553: any[] = [cryptoLib];
                const result_1551 = ARFuture.of<SignedKey>();
                sCtx_1548.invokeRemoteMethodAfter("getAsymmetricPublicKey", result_1551, argsNames_1552, argsValues_1553);
                const reqId_1549 = sCtx_1548.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1551 as ARFuture<SignedKey>).tryDone(SignedKey.META.deserialize(sCtx_1548, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1551.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1550.writeInt(reqId_1549);
                CryptoLib.META.serialize(sCtx_1548, cryptoLib, dataOut_1550);
                sCtx_1548.sendToRemote(dataOut_1550.toArray());
                return result_1551;
                
            }
            , enter: (cryptoLib: CryptoLib, stream: ServerRegistrationApiStream): void =>  {
                const dataOut_1555 = new DataInOut();
                dataOut_1555.writeByte(4);
                const argsNames_1557: string[] = ["cryptoLib", "stream"];
                const argsValues_1558: any[] = [cryptoLib, stream];
                sCtx_1548.invokeRemoteMethodAfter("enter", null, argsNames_1557, argsValues_1558);
                CryptoLib.META.serialize(sCtx_1548, cryptoLib, dataOut_1555);
                ServerRegistrationApiStream.META.serialize(sCtx_1548, stream, dataOut_1555);
                sCtx_1548.sendToRemote(dataOut_1555.toArray());
                
            }
            , 
        };
        return remoteApiImpl as RegistrationRootApiRemote;
        
    }
    
}
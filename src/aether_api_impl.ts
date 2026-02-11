import  {
    AFuture, ARFuture, DataIn, DataOut, DataInOut, DataInOutStatic, FastMetaType, FastFutureContext, RemoteApi, FastMeta, SerializerPackNumber, DeserializerPackNumber, FastApiContextLocal, FastMetaApi, BytesConverter, RemoteApiFuture, FastFutureContextStub, UUID, URI, AConsumer, ToString, AString, FlushReport
}
from './aether_client';
import  {
    AetherCodec, ClientActivityType, CryptoLib, PowMethod, Status, AetherTypeDescriptor, IPAddress, Key, KeyAsymmetric, KeyAsymmetricPrivate, KeyAsymmetricPublic, KeySign, KeySignPrivate, KeySignPublic, KeySymmetric, PairKeys, Sign, Telemetry, WorkProofConfig, AccessCheckPair, AccessCheckResult, AccessGroup, AetherApiDefinition, AetherArgumentDescriptor, AetherArrayType, AetherBaseType, AetherFieldDescriptor, AetherMethodDescriptor, AetherModuleDescriptor, AetherNullableType, AetherStreamType, AetherStructDescriptor, ClientActivity, ClientConnectionInfo, ClientInfo, ClientLogEntry, ClientStateForSave, Cloud, CloudWeight, CoderAndPort, FinishResult, HydrogenCurvePrivate, HydrogenCurvePublic, HydrogenSecretBox, HydrogenSignPrivate, HydrogenSignPublic, IPAddressAndPorts, IPAddressAndPortsList, IPAddressV4, IPAddressV6, IPAddressWeb, KeyValuePair, Message, MessageInfo, MoneyOperation, PairKeysAsym, PairKeysAsymSigned, PairKeysSign, ServerDescriptor, ServerDescriptorWithGeo, SignAE_ED25519, SignedKey, SignHYDROGEN, SodiumChacha20Poly1305, SodiumCurvePrivate, SodiumCurvePublic, SodiumSignPrivate, SodiumSignPublic, TelemetryCPP, UUIDAndCloud, WorkProofBCrypt, WorkProofDTO, ClientApiRegSafeStream, ClientApiStream, ClientInteractionClientStream, GlobalApiStream, GlobalRegClientApiStream, LoginClientStream, LoginStream, ServerRegistrationApiStream, ClientApiUnsafe, ClientApiSafe, AuthorizedApi, LoginApi, ServerApiByUidClient, ServerApiByUid, ClientApiRegSafe, GlobalRegClientApi, ClientApiRegUnsafe, GlobalRegServerApi, ServerRegistrationApi, RegistrationRootApi, ClientApiUnsafeRemote, ClientApiSafeRemote, AuthorizedApiRemote, LoginApiRemote, ServerApiByUidClientRemote, ServerApiByUidRemote, ClientApiRegSafeRemote, GlobalRegClientApiRemote, ClientApiRegUnsafeRemote, GlobalRegServerApiRemote, ServerRegistrationApiRemote, RegistrationRootApiRemote
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
export class GlobalApiStreamMetaImpl implements FastMetaType<GlobalApiStream>  {
    serialize(ctx: FastFutureContext, obj: GlobalApiStream, out: DataOut): void  {
        FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out);
        
    }
    deserialize(ctx: FastFutureContext, in_: DataIn): GlobalApiStream  {
        return new GlobalApiStream(FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_));
        
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
            flush: (sendFuture: FlushReport): void =>  {
                sCtx_717.flush(sendFuture);
                
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
                    let uids_737: UUID[];
                    const len_739 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_737 = new Array<UUID>(len_739);
                    for (let idx_738 = 0;
                    idx_738 < len_739;
                    idx_738++)  {
                        uids_737[idx_738] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_740: string[] = ["uids"];
                    const argsValues_741: any[] = [uids_737];
                    ctx.invokeLocalMethodBefore("newChildren", argsNames_740, argsValues_741);
                    localApi.newChildren(uids_737);
                    ctx.invokeLocalMethodAfter("newChildren", null, argsNames_740, argsValues_741);
                    break;
                    
                }
                case 6:  {
                    let msg_743: Message[];
                    const len_745 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_743 = new Array<Message>(len_745);
                    for (let idx_744 = 0;
                    idx_744 < len_745;
                    idx_744++)  {
                        msg_743[idx_744] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_746: string[] = ["msg"];
                    const argsValues_747: any[] = [msg_743];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_746, argsValues_747);
                    localApi.sendMessages(msg_743);
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_746, argsValues_747);
                    break;
                    
                }
                case 7:  {
                    let serverDescriptor_749: ServerDescriptor;
                    serverDescriptor_749 = ServerDescriptor.META.deserialize(ctx, dataIn);
                    const argsNames_750: string[] = ["serverDescriptor"];
                    const argsValues_751: any[] = [serverDescriptor_749];
                    ctx.invokeLocalMethodBefore("sendServerDescriptor", argsNames_750, argsValues_751);
                    localApi.sendServerDescriptor(serverDescriptor_749);
                    ctx.invokeLocalMethodAfter("sendServerDescriptor", null, argsNames_750, argsValues_751);
                    break;
                    
                }
                case 8:  {
                    let serverDescriptors_753: ServerDescriptor[];
                    const len_755 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    serverDescriptors_753 = new Array<ServerDescriptor>(len_755);
                    for (let idx_754 = 0;
                    idx_754 < len_755;
                    idx_754++)  {
                        serverDescriptors_753[idx_754] = ServerDescriptor.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_756: string[] = ["serverDescriptors"];
                    const argsValues_757: any[] = [serverDescriptors_753];
                    ctx.invokeLocalMethodBefore("sendServerDescriptors", argsNames_756, argsValues_757);
                    localApi.sendServerDescriptors(serverDescriptors_753);
                    ctx.invokeLocalMethodAfter("sendServerDescriptors", null, argsNames_756, argsValues_757);
                    break;
                    
                }
                case 9:  {
                    let uid_759: UUID;
                    let cloud_760: Cloud;
                    uid_759 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    cloud_760 = Cloud.META.deserialize(ctx, dataIn);
                    const argsNames_761: string[] = ["uid", "cloud"];
                    const argsValues_762: any[] = [uid_759, cloud_760];
                    ctx.invokeLocalMethodBefore("sendCloud", argsNames_761, argsValues_762);
                    localApi.sendCloud(uid_759, cloud_760);
                    ctx.invokeLocalMethodAfter("sendCloud", null, argsNames_761, argsValues_762);
                    break;
                    
                }
                case 10:  {
                    let clouds_764: UUIDAndCloud[];
                    const len_766 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    clouds_764 = new Array<UUIDAndCloud>(len_766);
                    for (let idx_765 = 0;
                    idx_765 < len_766;
                    idx_765++)  {
                        clouds_764[idx_765] = UUIDAndCloud.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_767: string[] = ["clouds"];
                    const argsValues_768: any[] = [clouds_764];
                    ctx.invokeLocalMethodBefore("sendClouds", argsNames_767, argsValues_768);
                    localApi.sendClouds(clouds_764);
                    ctx.invokeLocalMethodAfter("sendClouds", null, argsNames_767, argsValues_768);
                    break;
                    
                }
                case 11:  {
                    const argsNames_770: string[] = [];
                    const argsValues_771: any[] = [];
                    ctx.invokeLocalMethodBefore("requestTelemetry", argsNames_770, argsValues_771);
                    localApi.requestTelemetry();
                    ctx.invokeLocalMethodAfter("requestTelemetry", null, argsNames_770, argsValues_771);
                    break;
                    
                }
                case 12:  {
                    let groups_773: AccessGroup[];
                    const len_775 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_773 = new Array<AccessGroup>(len_775);
                    for (let idx_774 = 0;
                    idx_774 < len_775;
                    idx_774++)  {
                        groups_773[idx_774] = AccessGroup.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_776: string[] = ["groups"];
                    const argsValues_777: any[] = [groups_773];
                    ctx.invokeLocalMethodBefore("sendAccessGroups", argsNames_776, argsValues_777);
                    localApi.sendAccessGroups(groups_773);
                    ctx.invokeLocalMethodAfter("sendAccessGroups", null, argsNames_776, argsValues_777);
                    break;
                    
                }
                case 13:  {
                    let uid_779: UUID;
                    let groups_780: bigint[];
                    uid_779 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_782 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_780 = new Array<bigint>(len_782);
                    for (let idx_781 = 0;
                    idx_781 < len_782;
                    idx_781++)  {
                        groups_780[idx_781] = dataIn.readLong();
                        
                    }
                    const argsNames_783: string[] = ["uid", "groups"];
                    const argsValues_784: any[] = [uid_779, groups_780];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_783, argsValues_784);
                    localApi.sendAccessGroupForClient(uid_779, groups_780);
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_783, argsValues_784);
                    break;
                    
                }
                case 14:  {
                    let id_786: bigint;
                    let groups_787: UUID[];
                    id_786 = dataIn.readLong();
                    const len_789 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_787 = new Array<UUID>(len_789);
                    for (let idx_788 = 0;
                    idx_788 < len_789;
                    idx_788++)  {
                        groups_787[idx_788] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_790: string[] = ["id", "groups"];
                    const argsValues_791: any[] = [id_786, groups_787];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_790, argsValues_791);
                    localApi.addItemsToAccessGroup(id_786, groups_787);
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_790, argsValues_791);
                    break;
                    
                }
                case 15:  {
                    let id_793: bigint;
                    let groups_794: UUID[];
                    id_793 = dataIn.readLong();
                    const len_796 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_794 = new Array<UUID>(len_796);
                    for (let idx_795 = 0;
                    idx_795 < len_796;
                    idx_795++)  {
                        groups_794[idx_795] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_797: string[] = ["id", "groups"];
                    const argsValues_798: any[] = [id_793, groups_794];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_797, argsValues_798);
                    localApi.removeItemsFromAccessGroup(id_793, groups_794);
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_797, argsValues_798);
                    break;
                    
                }
                case 16:  {
                    let uid_800: UUID;
                    let groups_801: bigint[];
                    uid_800 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_803 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_801 = new Array<bigint>(len_803);
                    for (let idx_802 = 0;
                    idx_802 < len_803;
                    idx_802++)  {
                        groups_801[idx_802] = dataIn.readLong();
                        
                    }
                    const argsNames_804: string[] = ["uid", "groups"];
                    const argsValues_805: any[] = [uid_800, groups_801];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_804, argsValues_805);
                    localApi.addAccessGroupsToClient(uid_800, groups_801);
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_804, argsValues_805);
                    break;
                    
                }
                case 17:  {
                    let uid_807: UUID;
                    let groups_808: bigint[];
                    uid_807 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_810 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_808 = new Array<bigint>(len_810);
                    for (let idx_809 = 0;
                    idx_809 < len_810;
                    idx_809++)  {
                        groups_808[idx_809] = dataIn.readLong();
                        
                    }
                    const argsNames_811: string[] = ["uid", "groups"];
                    const argsValues_812: any[] = [uid_807, groups_808];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_811, argsValues_812);
                    localApi.removeAccessGroupsFromClient(uid_807, groups_808);
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_811, argsValues_812);
                    break;
                    
                }
                case 18:  {
                    let uid_814: UUID;
                    let accessedClients_815: UUID[];
                    uid_814 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_817 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    accessedClients_815 = new Array<UUID>(len_817);
                    for (let idx_816 = 0;
                    idx_816 < len_817;
                    idx_816++)  {
                        accessedClients_815[idx_816] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_818: string[] = ["uid", "accessedClients"];
                    const argsValues_819: any[] = [uid_814, accessedClients_815];
                    ctx.invokeLocalMethodBefore("sendAllAccessedClients", argsNames_818, argsValues_819);
                    localApi.sendAllAccessedClients(uid_814, accessedClients_815);
                    ctx.invokeLocalMethodAfter("sendAllAccessedClients", null, argsNames_818, argsValues_819);
                    break;
                    
                }
                case 19:  {
                    let results_821: AccessCheckResult[];
                    const len_823 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    results_821 = new Array<AccessCheckResult>(len_823);
                    for (let idx_822 = 0;
                    idx_822 < len_823;
                    idx_822++)  {
                        results_821[idx_822] = AccessCheckResult.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_824: string[] = ["results"];
                    const argsValues_825: any[] = [results_821];
                    ctx.invokeLocalMethodBefore("sendAccessCheckResults", argsNames_824, argsValues_825);
                    localApi.sendAccessCheckResults(results_821);
                    ctx.invokeLocalMethodAfter("sendAccessCheckResults", null, argsNames_824, argsValues_825);
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
    makeRemote(sCtx_826: FastFutureContext): ClientApiSafeRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture: FlushReport): void =>  {
                sCtx_826.flush(sendFuture);
                
            }
            , getFastMetaContext: () => sCtx_826, changeParent: (uid: UUID): void =>  {
                const dataOut_828 = new DataInOut();
                dataOut_828.writeByte(3);
                const argsNames_830: string[] = ["uid"];
                const argsValues_831: any[] = [uid];
                sCtx_826.invokeRemoteMethodAfter("changeParent", null, argsNames_830, argsValues_831);
                FastMeta.META_UUID.serialize(sCtx_826, uid, dataOut_828);
                sCtx_826.sendToRemote(dataOut_828.toArray());
                
            }
            , changeAlias: (alias: UUID): void =>  {
                const dataOut_833 = new DataInOut();
                dataOut_833.writeByte(4);
                const argsNames_835: string[] = ["alias"];
                const argsValues_836: any[] = [alias];
                sCtx_826.invokeRemoteMethodAfter("changeAlias", null, argsNames_835, argsValues_836);
                FastMeta.META_UUID.serialize(sCtx_826, alias, dataOut_833);
                sCtx_826.sendToRemote(dataOut_833.toArray());
                
            }
            , newChildren: (uids: UUID[]): void =>  {
                const dataOut_838 = new DataInOut();
                dataOut_838.writeByte(5);
                const argsNames_840: string[] = ["uids"];
                const argsValues_841: any[] = [uids];
                sCtx_826.invokeRemoteMethodAfter("newChildren", null, argsNames_840, argsValues_841);
                SerializerPackNumber.INSTANCE.put(dataOut_838, uids.length);
                for (const el_842 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_826, el_842, dataOut_838);
                    
                }
                sCtx_826.sendToRemote(dataOut_838.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_844 = new DataInOut();
                dataOut_844.writeByte(6);
                const argsNames_846: string[] = ["msg"];
                const argsValues_847: any[] = [msg];
                sCtx_826.invokeRemoteMethodAfter("sendMessages", null, argsNames_846, argsValues_847);
                SerializerPackNumber.INSTANCE.put(dataOut_844, msg.length);
                for (const el_848 of msg)  {
                    Message.META.serialize(sCtx_826, el_848, dataOut_844);
                    
                }
                sCtx_826.sendToRemote(dataOut_844.toArray());
                
            }
            , sendServerDescriptor: (serverDescriptor: ServerDescriptor): void =>  {
                const dataOut_850 = new DataInOut();
                dataOut_850.writeByte(7);
                const argsNames_852: string[] = ["serverDescriptor"];
                const argsValues_853: any[] = [serverDescriptor];
                sCtx_826.invokeRemoteMethodAfter("sendServerDescriptor", null, argsNames_852, argsValues_853);
                ServerDescriptor.META.serialize(sCtx_826, serverDescriptor, dataOut_850);
                sCtx_826.sendToRemote(dataOut_850.toArray());
                
            }
            , sendServerDescriptors: (serverDescriptors: ServerDescriptor[]): void =>  {
                const dataOut_855 = new DataInOut();
                dataOut_855.writeByte(8);
                const argsNames_857: string[] = ["serverDescriptors"];
                const argsValues_858: any[] = [serverDescriptors];
                sCtx_826.invokeRemoteMethodAfter("sendServerDescriptors", null, argsNames_857, argsValues_858);
                SerializerPackNumber.INSTANCE.put(dataOut_855, serverDescriptors.length);
                for (const el_859 of serverDescriptors)  {
                    ServerDescriptor.META.serialize(sCtx_826, el_859, dataOut_855);
                    
                }
                sCtx_826.sendToRemote(dataOut_855.toArray());
                
            }
            , sendCloud: (uid: UUID, cloud: Cloud): void =>  {
                const dataOut_861 = new DataInOut();
                dataOut_861.writeByte(9);
                const argsNames_863: string[] = ["uid", "cloud"];
                const argsValues_864: any[] = [uid, cloud];
                sCtx_826.invokeRemoteMethodAfter("sendCloud", null, argsNames_863, argsValues_864);
                FastMeta.META_UUID.serialize(sCtx_826, uid, dataOut_861);
                Cloud.META.serialize(sCtx_826, cloud, dataOut_861);
                sCtx_826.sendToRemote(dataOut_861.toArray());
                
            }
            , sendClouds: (clouds: UUIDAndCloud[]): void =>  {
                const dataOut_866 = new DataInOut();
                dataOut_866.writeByte(10);
                const argsNames_868: string[] = ["clouds"];
                const argsValues_869: any[] = [clouds];
                sCtx_826.invokeRemoteMethodAfter("sendClouds", null, argsNames_868, argsValues_869);
                SerializerPackNumber.INSTANCE.put(dataOut_866, clouds.length);
                for (const el_870 of clouds)  {
                    UUIDAndCloud.META.serialize(sCtx_826, el_870, dataOut_866);
                    
                }
                sCtx_826.sendToRemote(dataOut_866.toArray());
                
            }
            , requestTelemetry: (): void =>  {
                const dataOut_872 = new DataInOut();
                dataOut_872.writeByte(11);
                const argsNames_874: string[] = [];
                const argsValues_875: any[] = [];
                sCtx_826.invokeRemoteMethodAfter("requestTelemetry", null, argsNames_874, argsValues_875);
                sCtx_826.sendToRemote(dataOut_872.toArray());
                
            }
            , sendAccessGroups: (groups: AccessGroup[]): void =>  {
                const dataOut_877 = new DataInOut();
                dataOut_877.writeByte(12);
                const argsNames_879: string[] = ["groups"];
                const argsValues_880: any[] = [groups];
                sCtx_826.invokeRemoteMethodAfter("sendAccessGroups", null, argsNames_879, argsValues_880);
                SerializerPackNumber.INSTANCE.put(dataOut_877, groups.length);
                for (const el_881 of groups)  {
                    AccessGroup.META.serialize(sCtx_826, el_881, dataOut_877);
                    
                }
                sCtx_826.sendToRemote(dataOut_877.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_883 = new DataInOut();
                dataOut_883.writeByte(13);
                const argsNames_885: string[] = ["uid", "groups"];
                const argsValues_886: any[] = [uid, groups];
                sCtx_826.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_885, argsValues_886);
                FastMeta.META_UUID.serialize(sCtx_826, uid, dataOut_883);
                SerializerPackNumber.INSTANCE.put(dataOut_883, groups.length);
                for (const el_887 of groups)  {
                    dataOut_883.writeLong(el_887);
                    
                }
                sCtx_826.sendToRemote(dataOut_883.toArray());
                
            }
            , addItemsToAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_889 = new DataInOut();
                dataOut_889.writeByte(14);
                const argsNames_891: string[] = ["id", "groups"];
                const argsValues_892: any[] = [id, groups];
                sCtx_826.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_891, argsValues_892);
                dataOut_889.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_889, groups.length);
                for (const el_893 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_826, el_893, dataOut_889);
                    
                }
                sCtx_826.sendToRemote(dataOut_889.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_895 = new DataInOut();
                dataOut_895.writeByte(15);
                const argsNames_897: string[] = ["id", "groups"];
                const argsValues_898: any[] = [id, groups];
                sCtx_826.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_897, argsValues_898);
                dataOut_895.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_895, groups.length);
                for (const el_899 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_826, el_899, dataOut_895);
                    
                }
                sCtx_826.sendToRemote(dataOut_895.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_901 = new DataInOut();
                dataOut_901.writeByte(16);
                const argsNames_903: string[] = ["uid", "groups"];
                const argsValues_904: any[] = [uid, groups];
                sCtx_826.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_903, argsValues_904);
                FastMeta.META_UUID.serialize(sCtx_826, uid, dataOut_901);
                SerializerPackNumber.INSTANCE.put(dataOut_901, groups.length);
                for (const el_905 of groups)  {
                    dataOut_901.writeLong(el_905);
                    
                }
                sCtx_826.sendToRemote(dataOut_901.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_907 = new DataInOut();
                dataOut_907.writeByte(17);
                const argsNames_909: string[] = ["uid", "groups"];
                const argsValues_910: any[] = [uid, groups];
                sCtx_826.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_909, argsValues_910);
                FastMeta.META_UUID.serialize(sCtx_826, uid, dataOut_907);
                SerializerPackNumber.INSTANCE.put(dataOut_907, groups.length);
                for (const el_911 of groups)  {
                    dataOut_907.writeLong(el_911);
                    
                }
                sCtx_826.sendToRemote(dataOut_907.toArray());
                
            }
            , sendAllAccessedClients: (uid: UUID, accessedClients: UUID[]): void =>  {
                const dataOut_913 = new DataInOut();
                dataOut_913.writeByte(18);
                const argsNames_915: string[] = ["uid", "accessedClients"];
                const argsValues_916: any[] = [uid, accessedClients];
                sCtx_826.invokeRemoteMethodAfter("sendAllAccessedClients", null, argsNames_915, argsValues_916);
                FastMeta.META_UUID.serialize(sCtx_826, uid, dataOut_913);
                SerializerPackNumber.INSTANCE.put(dataOut_913, accessedClients.length);
                for (const el_917 of accessedClients)  {
                    FastMeta.META_UUID.serialize(sCtx_826, el_917, dataOut_913);
                    
                }
                sCtx_826.sendToRemote(dataOut_913.toArray());
                
            }
            , sendAccessCheckResults: (results: AccessCheckResult[]): void =>  {
                const dataOut_919 = new DataInOut();
                dataOut_919.writeByte(19);
                const argsNames_921: string[] = ["results"];
                const argsValues_922: any[] = [results];
                sCtx_826.invokeRemoteMethodAfter("sendAccessCheckResults", null, argsNames_921, argsValues_922);
                SerializerPackNumber.INSTANCE.put(dataOut_919, results.length);
                for (const el_923 of results)  {
                    AccessCheckResult.META.serialize(sCtx_826, el_923, dataOut_919);
                    
                }
                sCtx_826.sendToRemote(dataOut_919.toArray());
                
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
                    let id_925: number;
                    id_925 = dataIn.readByte();
                    const argsNames_926: string[] = ["id"];
                    const argsValues_927: any[] = [id_925];
                    ctx.invokeLocalMethodBefore("backId", argsNames_926, argsValues_927);
                    localApi.backId(id_925);
                    ctx.invokeLocalMethodAfter("backId", null, argsNames_926, argsValues_927);
                    break;
                    
                }
                case 4:  {
                    const reqId_928 = dataIn.readInt();
                    let nextConnectMsDuration_929: bigint;
                    nextConnectMsDuration_929 = dataIn.readLong();
                    const argsNames_930: string[] = ["nextConnectMsDuration"];
                    const argsValues_931: any[] = [nextConnectMsDuration_929];
                    ctx.invokeLocalMethodBefore("ping", argsNames_930, argsValues_931);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.ping(nextConnectMsDuration_929);
                    ctx.invokeLocalMethodAfter("ping", resultFuture, argsNames_930, argsValues_931);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_928);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    let uid_933: UUID;
                    let stream_934: ClientApiStream;
                    uid_933 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    stream_934 = ClientApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_935: string[] = ["uid", "stream"];
                    const argsValues_936: any[] = [uid_933, stream_934];
                    ctx.invokeLocalMethodBefore("client", argsNames_935, argsValues_936);
                    localApi.client(uid_933, stream_934);
                    ctx.invokeLocalMethodAfter("client", null, argsNames_935, argsValues_936);
                    break;
                    
                }
                case 6:  {
                    let msg_938: Message;
                    msg_938 = Message.META.deserialize(ctx, dataIn);
                    const argsNames_939: string[] = ["msg"];
                    const argsValues_940: any[] = [msg_938];
                    ctx.invokeLocalMethodBefore("sendMessage", argsNames_939, argsValues_940);
                    localApi.sendMessage(msg_938);
                    ctx.invokeLocalMethodAfter("sendMessage", null, argsNames_939, argsValues_940);
                    break;
                    
                }
                case 7:  {
                    let msg_942: Message[];
                    const len_944 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_942 = new Array<Message>(len_944);
                    for (let idx_943 = 0;
                    idx_943 < len_944;
                    idx_943++)  {
                        msg_942[idx_943] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_945: string[] = ["msg"];
                    const argsValues_946: any[] = [msg_942];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_945, argsValues_946);
                    localApi.sendMessages(msg_942);
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_945, argsValues_946);
                    break;
                    
                }
                case 8:  {
                    const reqId_947 = dataIn.readInt();
                    let owner_948: UUID;
                    let uids_949: UUID[];
                    owner_948 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_951 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_949 = new Array<UUID>(len_951);
                    for (let idx_950 = 0;
                    idx_950 < len_951;
                    idx_950++)  {
                        uids_949[idx_950] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_952: string[] = ["owner", "uids"];
                    const argsValues_953: any[] = [owner_948, uids_949];
                    ctx.invokeLocalMethodBefore("createAccessGroup", argsNames_952, argsValues_953);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.createAccessGroup(owner_948, uids_949);
                    ctx.invokeLocalMethodAfter("createAccessGroup", resultFuture, argsNames_952, argsValues_953);
                    resultFuture.to((v_955: bigint) =>  {
                        const data_954 = new DataInOut();
                        data_954.writeLong(v_955);
                        ctx.sendResultToRemote(reqId_947, data_954.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_956 = dataIn.readInt();
                    let groupId_957: bigint;
                    let uid_958: UUID;
                    groupId_957 = dataIn.readLong();
                    uid_958 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_959: string[] = ["groupId", "uid"];
                    const argsValues_960: any[] = [groupId_957, uid_958];
                    ctx.invokeLocalMethodBefore("addToAccessGroup", argsNames_959, argsValues_960);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.addToAccessGroup(groupId_957, uid_958);
                    ctx.invokeLocalMethodAfter("addToAccessGroup", resultFuture, argsNames_959, argsValues_960);
                    resultFuture.to((v_962: boolean) =>  {
                        const data_961 = new DataInOut();
                        data_961.writeBoolean(v_962);
                        ctx.sendResultToRemote(reqId_956, data_961.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_963 = dataIn.readInt();
                    let groupId_964: bigint;
                    let uid_965: UUID;
                    groupId_964 = dataIn.readLong();
                    uid_965 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_966: string[] = ["groupId", "uid"];
                    const argsValues_967: any[] = [groupId_964, uid_965];
                    ctx.invokeLocalMethodBefore("removeFromAccessGroup", argsNames_966, argsValues_967);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.removeFromAccessGroup(groupId_964, uid_965);
                    ctx.invokeLocalMethodAfter("removeFromAccessGroup", resultFuture, argsNames_966, argsValues_967);
                    resultFuture.to((v_969: boolean) =>  {
                        const data_968 = new DataInOut();
                        data_968.writeBoolean(v_969);
                        ctx.sendResultToRemote(reqId_963, data_968.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_970 = dataIn.readInt();
                    let uid_971: UUID;
                    uid_971 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_972: string[] = ["uid"];
                    const argsValues_973: any[] = [uid_971];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage", argsNames_972, argsValues_973);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.checkAccessForSendMessage(uid_971);
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage", resultFuture, argsNames_972, argsValues_973);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_970);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    let sid_975: number[];
                    const len_977 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    sid_975 = new Array<number>(len_977);
                    for (let idx_976 = 0;
                    idx_976 < len_977;
                    idx_976++)  {
                        sid_975[idx_976] = dataIn.readShort();
                        
                    }
                    const argsNames_978: string[] = ["sid"];
                    const argsValues_979: any[] = [sid_975];
                    ctx.invokeLocalMethodBefore("resolverServers", argsNames_978, argsValues_979);
                    localApi.resolverServers(sid_975);
                    ctx.invokeLocalMethodAfter("resolverServers", null, argsNames_978, argsValues_979);
                    break;
                    
                }
                case 13:  {
                    let uids_981: UUID[];
                    const len_983 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_981 = new Array<UUID>(len_983);
                    for (let idx_982 = 0;
                    idx_982 < len_983;
                    idx_982++)  {
                        uids_981[idx_982] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_984: string[] = ["uids"];
                    const argsValues_985: any[] = [uids_981];
                    ctx.invokeLocalMethodBefore("resolveClouds", argsNames_984, argsValues_985);
                    localApi.resolveClouds(uids_981);
                    ctx.invokeLocalMethodAfter("resolveClouds", null, argsNames_984, argsValues_985);
                    break;
                    
                }
                case 14:  {
                    const reqId_986 = dataIn.readInt();
                    let uid_987: UUID;
                    uid_987 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_988: string[] = ["uid"];
                    const argsValues_989: any[] = [uid_987];
                    ctx.invokeLocalMethodBefore("getAccessGroups", argsNames_988, argsValues_989);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAccessGroups(uid_987);
                    ctx.invokeLocalMethodAfter("getAccessGroups", resultFuture, argsNames_988, argsValues_989);
                    resultFuture.to((v_991: bigint[]) =>  {
                        const data_990 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_990, v_991.length);
                        for (const el_992 of v_991)  {
                            data_990.writeLong(el_992);
                            
                        }
                        ctx.sendResultToRemote(reqId_986, data_990.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_993 = dataIn.readInt();
                    let groupId_994: bigint;
                    groupId_994 = dataIn.readLong();
                    const argsNames_995: string[] = ["groupId"];
                    const argsValues_996: any[] = [groupId_994];
                    ctx.invokeLocalMethodBefore("getAccessGroup", argsNames_995, argsValues_996);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAccessGroup(groupId_994);
                    ctx.invokeLocalMethodAfter("getAccessGroup", resultFuture, argsNames_995, argsValues_996);
                    resultFuture.to((v_998: AccessGroup) =>  {
                        const data_997 = new DataInOut();
                        AccessGroup.META.serialize(ctx, v_998, data_997);
                        ctx.sendResultToRemote(reqId_993, data_997.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 16:  {
                    const reqId_999 = dataIn.readInt();
                    let uid_1000: UUID;
                    uid_1000 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1001: string[] = ["uid"];
                    const argsValues_1002: any[] = [uid_1000];
                    ctx.invokeLocalMethodBefore("getAllAccessedClients", argsNames_1001, argsValues_1002);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAllAccessedClients(uid_1000);
                    ctx.invokeLocalMethodAfter("getAllAccessedClients", resultFuture, argsNames_1001, argsValues_1002);
                    resultFuture.to((v_1004: UUID[]) =>  {
                        const data_1003 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1003, v_1004.length);
                        for (const el_1005 of v_1004)  {
                            FastMeta.META_UUID.serialize(ctx, el_1005, data_1003);
                            
                        }
                        ctx.sendResultToRemote(reqId_999, data_1003.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 17:  {
                    const reqId_1006 = dataIn.readInt();
                    let uid1_1007: UUID;
                    let uid2_1008: UUID;
                    uid1_1007 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid2_1008 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1009: string[] = ["uid1", "uid2"];
                    const argsValues_1010: any[] = [uid1_1007, uid2_1008];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage2", argsNames_1009, argsValues_1010);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.checkAccessForSendMessage2(uid1_1007, uid2_1008);
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage2", resultFuture, argsNames_1009, argsValues_1010);
                    resultFuture.to((v_1012: boolean) =>  {
                        const data_1011 = new DataInOut();
                        data_1011.writeBoolean(v_1012);
                        ctx.sendResultToRemote(reqId_1006, data_1011.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 18:  {
                    let telemetry_1014: Telemetry;
                    telemetry_1014 = Telemetry.META.deserialize(ctx, dataIn);
                    const argsNames_1015: string[] = ["telemetry"];
                    const argsValues_1016: any[] = [telemetry_1014];
                    ctx.invokeLocalMethodBefore("sendTelemetry", argsNames_1015, argsValues_1016);
                    localApi.sendTelemetry(telemetry_1014);
                    ctx.invokeLocalMethodAfter("sendTelemetry", null, argsNames_1015, argsValues_1016);
                    break;
                    
                }
                case 19:  {
                    let uids_1018: UUID[];
                    const len_1020 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1018 = new Array<UUID>(len_1020);
                    for (let idx_1019 = 0;
                    idx_1019 < len_1020;
                    idx_1019++)  {
                        uids_1018[idx_1019] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1021: string[] = ["uids"];
                    const argsValues_1022: any[] = [uids_1018];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsForClients", argsNames_1021, argsValues_1022);
                    localApi.requestAccessGroupsForClients(uids_1018);
                    ctx.invokeLocalMethodAfter("requestAccessGroupsForClients", null, argsNames_1021, argsValues_1022);
                    break;
                    
                }
                case 20:  {
                    let ids_1024: bigint[];
                    const len_1026 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    ids_1024 = new Array<bigint>(len_1026);
                    for (let idx_1025 = 0;
                    idx_1025 < len_1026;
                    idx_1025++)  {
                        ids_1024[idx_1025] = dataIn.readLong();
                        
                    }
                    const argsNames_1027: string[] = ["ids"];
                    const argsValues_1028: any[] = [ids_1024];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsItems", argsNames_1027, argsValues_1028);
                    localApi.requestAccessGroupsItems(ids_1024);
                    ctx.invokeLocalMethodAfter("requestAccessGroupsItems", null, argsNames_1027, argsValues_1028);
                    break;
                    
                }
                case 22:  {
                    let uid_1030: UUID;
                    let groups_1031: bigint[];
                    uid_1030 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1033 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1031 = new Array<bigint>(len_1033);
                    for (let idx_1032 = 0;
                    idx_1032 < len_1033;
                    idx_1032++)  {
                        groups_1031[idx_1032] = dataIn.readLong();
                        
                    }
                    const argsNames_1034: string[] = ["uid", "groups"];
                    const argsValues_1035: any[] = [uid_1030, groups_1031];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_1034, argsValues_1035);
                    localApi.sendAccessGroupForClient(uid_1030, groups_1031);
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_1034, argsValues_1035);
                    break;
                    
                }
                case 23:  {
                    let id_1037: bigint;
                    let groups_1038: UUID[];
                    id_1037 = dataIn.readLong();
                    const len_1040 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1038 = new Array<UUID>(len_1040);
                    for (let idx_1039 = 0;
                    idx_1039 < len_1040;
                    idx_1039++)  {
                        groups_1038[idx_1039] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1041: string[] = ["id", "groups"];
                    const argsValues_1042: any[] = [id_1037, groups_1038];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_1041, argsValues_1042);
                    localApi.addItemsToAccessGroup(id_1037, groups_1038);
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_1041, argsValues_1042);
                    break;
                    
                }
                case 24:  {
                    let id_1044: bigint;
                    let groups_1045: UUID[];
                    id_1044 = dataIn.readLong();
                    const len_1047 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1045 = new Array<UUID>(len_1047);
                    for (let idx_1046 = 0;
                    idx_1046 < len_1047;
                    idx_1046++)  {
                        groups_1045[idx_1046] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1048: string[] = ["id", "groups"];
                    const argsValues_1049: any[] = [id_1044, groups_1045];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_1048, argsValues_1049);
                    localApi.removeItemsFromAccessGroup(id_1044, groups_1045);
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_1048, argsValues_1049);
                    break;
                    
                }
                case 25:  {
                    let uid_1051: UUID;
                    let groups_1052: bigint[];
                    uid_1051 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1054 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1052 = new Array<bigint>(len_1054);
                    for (let idx_1053 = 0;
                    idx_1053 < len_1054;
                    idx_1053++)  {
                        groups_1052[idx_1053] = dataIn.readLong();
                        
                    }
                    const argsNames_1055: string[] = ["uid", "groups"];
                    const argsValues_1056: any[] = [uid_1051, groups_1052];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_1055, argsValues_1056);
                    localApi.addAccessGroupsToClient(uid_1051, groups_1052);
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_1055, argsValues_1056);
                    break;
                    
                }
                case 26:  {
                    let uid_1058: UUID;
                    let groups_1059: bigint[];
                    uid_1058 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1061 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1059 = new Array<bigint>(len_1061);
                    for (let idx_1060 = 0;
                    idx_1060 < len_1061;
                    idx_1060++)  {
                        groups_1059[idx_1060] = dataIn.readLong();
                        
                    }
                    const argsNames_1062: string[] = ["uid", "groups"];
                    const argsValues_1063: any[] = [uid_1058, groups_1059];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_1062, argsValues_1063);
                    localApi.removeAccessGroupsFromClient(uid_1058, groups_1059);
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_1062, argsValues_1063);
                    break;
                    
                }
                case 27:  {
                    let uids_1065: UUID[];
                    const len_1067 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1065 = new Array<UUID>(len_1067);
                    for (let idx_1066 = 0;
                    idx_1066 < len_1067;
                    idx_1066++)  {
                        uids_1065[idx_1066] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1068: string[] = ["uids"];
                    const argsValues_1069: any[] = [uids_1065];
                    ctx.invokeLocalMethodBefore("requestAllAccessedClients", argsNames_1068, argsValues_1069);
                    localApi.requestAllAccessedClients(uids_1065);
                    ctx.invokeLocalMethodAfter("requestAllAccessedClients", null, argsNames_1068, argsValues_1069);
                    break;
                    
                }
                case 28:  {
                    let requests_1071: AccessCheckPair[];
                    const len_1073 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    requests_1071 = new Array<AccessCheckPair>(len_1073);
                    for (let idx_1072 = 0;
                    idx_1072 < len_1073;
                    idx_1072++)  {
                        requests_1071[idx_1072] = AccessCheckPair.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1074: string[] = ["requests"];
                    const argsValues_1075: any[] = [requests_1071];
                    ctx.invokeLocalMethodBefore("requestAccessCheck", argsNames_1074, argsValues_1075);
                    localApi.requestAccessCheck(requests_1071);
                    ctx.invokeLocalMethodAfter("requestAccessCheck", null, argsNames_1074, argsValues_1075);
                    break;
                    
                }
                case 29:  {
                    const reqId_1076 = dataIn.readInt();
                    let uid_1077: UUID;
                    let fromTime_1078: bigint;
                    let toTime_1079: bigint;
                    let limit_1080: number;
                    uid_1077 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    fromTime_1078 = dataIn.readLong();
                    toTime_1079 = dataIn.readLong();
                    limit_1080 = dataIn.readInt();
                    const argsNames_1081: string[] = ["uid", "fromTime", "toTime", "limit"];
                    const argsValues_1082: any[] = [uid_1077, fromTime_1078, toTime_1079, limit_1080];
                    ctx.invokeLocalMethodBefore("getClientActivity", argsNames_1081, argsValues_1082);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getClientActivity(uid_1077, fromTime_1078, toTime_1079, limit_1080);
                    ctx.invokeLocalMethodAfter("getClientActivity", resultFuture, argsNames_1081, argsValues_1082);
                    resultFuture.to((v_1084: ClientActivity[]) =>  {
                        const data_1083 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1083, v_1084.length);
                        for (const el_1085 of v_1084)  {
                            ClientActivity.META.serialize(ctx, el_1085, data_1083);
                            
                        }
                        ctx.sendResultToRemote(reqId_1076, data_1083.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 30:  {
                    const reqId_1086 = dataIn.readInt();
                    let uid_1087: UUID;
                    let query_1088: string;
                    let limit_1089: number;
                    uid_1087 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    let stringBytes_1090: Uint8Array;
                    const len_1092 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1093 = dataIn.readBytes(len_1092);
                    stringBytes_1090 = bytes_1093;
                    query_1088 = new TextDecoder('utf-8').decode(stringBytes_1090);
                    limit_1089 = dataIn.readInt();
                    const argsNames_1094: string[] = ["uid", "query", "limit"];
                    const argsValues_1095: any[] = [uid_1087, query_1088, limit_1089];
                    ctx.invokeLocalMethodBefore("searchClientLogs", argsNames_1094, argsValues_1095);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.searchClientLogs(uid_1087, query_1088, limit_1089);
                    ctx.invokeLocalMethodAfter("searchClientLogs", resultFuture, argsNames_1094, argsValues_1095);
                    resultFuture.to((v_1097: ClientLogEntry[]) =>  {
                        const data_1096 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1096, v_1097.length);
                        for (const el_1098 of v_1097)  {
                            ClientLogEntry.META.serialize(ctx, el_1098, data_1096);
                            
                        }
                        ctx.sendResultToRemote(reqId_1086, data_1096.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 31:  {
                    const reqId_1099 = dataIn.readInt();
                    let uid_1100: UUID;
                    let limit_1101: number;
                    uid_1100 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    limit_1101 = dataIn.readInt();
                    const argsNames_1102: string[] = ["uid", "limit"];
                    const argsValues_1103: any[] = [uid_1100, limit_1101];
                    ctx.invokeLocalMethodBefore("getClientConnections", argsNames_1102, argsValues_1103);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getClientConnections(uid_1100, limit_1101);
                    ctx.invokeLocalMethodAfter("getClientConnections", resultFuture, argsNames_1102, argsValues_1103);
                    resultFuture.to((v_1105: ClientConnectionInfo[]) =>  {
                        const data_1104 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1104, v_1105.length);
                        for (const el_1106 of v_1105)  {
                            ClientConnectionInfo.META.serialize(ctx, el_1106, data_1104);
                            
                        }
                        ctx.sendResultToRemote(reqId_1099, data_1104.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 32:  {
                    const reqId_1107 = dataIn.readInt();
                    let uid_1108: UUID;
                    let fromTime_1109: bigint;
                    let toTime_1110: bigint;
                    let limit_1111: number;
                    uid_1108 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    fromTime_1109 = dataIn.readLong();
                    toTime_1110 = dataIn.readLong();
                    limit_1111 = dataIn.readInt();
                    const argsNames_1112: string[] = ["uid", "fromTime", "toTime", "limit"];
                    const argsValues_1113: any[] = [uid_1108, fromTime_1109, toTime_1110, limit_1111];
                    ctx.invokeLocalMethodBefore("getClientMessages", argsNames_1112, argsValues_1113);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getClientMessages(uid_1108, fromTime_1109, toTime_1110, limit_1111);
                    ctx.invokeLocalMethodAfter("getClientMessages", resultFuture, argsNames_1112, argsValues_1113);
                    resultFuture.to((v_1115: MessageInfo[]) =>  {
                        const data_1114 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1114, v_1115.length);
                        for (const el_1116 of v_1115)  {
                            MessageInfo.META.serialize(ctx, el_1116, data_1114);
                            
                        }
                        ctx.sendResultToRemote(reqId_1107, data_1114.toArray());
                        
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
    makeRemote(sCtx_1117: FastFutureContext): AuthorizedApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture: FlushReport): void =>  {
                sCtx_1117.flush(sendFuture);
                
            }
            , getFastMetaContext: () => sCtx_1117, backId: (id: number): void =>  {
                const dataOut_1119 = new DataInOut();
                dataOut_1119.writeByte(3);
                const argsNames_1121: string[] = ["id"];
                const argsValues_1122: any[] = [id];
                sCtx_1117.invokeRemoteMethodAfter("backId", null, argsNames_1121, argsValues_1122);
                dataOut_1119.writeByte(id);
                sCtx_1117.sendToRemote(dataOut_1119.toArray());
                
            }
            , ping: (nextConnectMsDuration: bigint): AFuture =>  {
                const dataOut_1124 = new DataInOut();
                dataOut_1124.writeByte(4);
                const argsNames_1126: string[] = ["nextConnectMsDuration"];
                const argsValues_1127: any[] = [nextConnectMsDuration];
                const result_1125 = AFuture.make();
                sCtx_1117.invokeRemoteMethodAfter("ping", result_1125, argsNames_1126, argsValues_1127);
                const reqId_1123 = sCtx_1117.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1125 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1125.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1124.writeInt(reqId_1123);
                dataOut_1124.writeLong(nextConnectMsDuration);
                sCtx_1117.sendToRemote(dataOut_1124.toArray());
                return result_1125;
                
            }
            , client: (uid: UUID, stream: ClientApiStream): void =>  {
                const dataOut_1129 = new DataInOut();
                dataOut_1129.writeByte(5);
                const argsNames_1131: string[] = ["uid", "stream"];
                const argsValues_1132: any[] = [uid, stream];
                sCtx_1117.invokeRemoteMethodAfter("client", null, argsNames_1131, argsValues_1132);
                FastMeta.META_UUID.serialize(sCtx_1117, uid, dataOut_1129);
                ClientApiStream.META.serialize(sCtx_1117, stream, dataOut_1129);
                sCtx_1117.sendToRemote(dataOut_1129.toArray());
                
            }
            , sendMessage: (msg: Message): void =>  {
                const dataOut_1134 = new DataInOut();
                dataOut_1134.writeByte(6);
                const argsNames_1136: string[] = ["msg"];
                const argsValues_1137: any[] = [msg];
                sCtx_1117.invokeRemoteMethodAfter("sendMessage", null, argsNames_1136, argsValues_1137);
                Message.META.serialize(sCtx_1117, msg, dataOut_1134);
                sCtx_1117.sendToRemote(dataOut_1134.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_1139 = new DataInOut();
                dataOut_1139.writeByte(7);
                const argsNames_1141: string[] = ["msg"];
                const argsValues_1142: any[] = [msg];
                sCtx_1117.invokeRemoteMethodAfter("sendMessages", null, argsNames_1141, argsValues_1142);
                SerializerPackNumber.INSTANCE.put(dataOut_1139, msg.length);
                for (const el_1143 of msg)  {
                    Message.META.serialize(sCtx_1117, el_1143, dataOut_1139);
                    
                }
                sCtx_1117.sendToRemote(dataOut_1139.toArray());
                
            }
            , createAccessGroup: (owner: UUID, uids: UUID[]): ARFuture<bigint> =>  {
                const dataOut_1145 = new DataInOut();
                dataOut_1145.writeByte(8);
                const argsNames_1147: string[] = ["owner", "uids"];
                const argsValues_1148: any[] = [owner, uids];
                const result_1146 = ARFuture.of<bigint>();
                sCtx_1117.invokeRemoteMethodAfter("createAccessGroup", result_1146, argsNames_1147, argsValues_1148);
                const reqId_1144 = sCtx_1117.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1146 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_1117, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1146.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1145.writeInt(reqId_1144);
                FastMeta.META_UUID.serialize(sCtx_1117, owner, dataOut_1145);
                SerializerPackNumber.INSTANCE.put(dataOut_1145, uids.length);
                for (const el_1149 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1117, el_1149, dataOut_1145);
                    
                }
                sCtx_1117.sendToRemote(dataOut_1145.toArray());
                return result_1146;
                
            }
            , addToAccessGroup: (groupId: bigint, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_1151 = new DataInOut();
                dataOut_1151.writeByte(9);
                const argsNames_1153: string[] = ["groupId", "uid"];
                const argsValues_1154: any[] = [groupId, uid];
                const result_1152 = ARFuture.of<boolean>();
                sCtx_1117.invokeRemoteMethodAfter("addToAccessGroup", result_1152, argsNames_1153, argsValues_1154);
                const reqId_1150 = sCtx_1117.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1152 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1117, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1152.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1151.writeInt(reqId_1150);
                dataOut_1151.writeLong(groupId);
                FastMeta.META_UUID.serialize(sCtx_1117, uid, dataOut_1151);
                sCtx_1117.sendToRemote(dataOut_1151.toArray());
                return result_1152;
                
            }
            , removeFromAccessGroup: (groupId: bigint, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_1156 = new DataInOut();
                dataOut_1156.writeByte(10);
                const argsNames_1158: string[] = ["groupId", "uid"];
                const argsValues_1159: any[] = [groupId, uid];
                const result_1157 = ARFuture.of<boolean>();
                sCtx_1117.invokeRemoteMethodAfter("removeFromAccessGroup", result_1157, argsNames_1158, argsValues_1159);
                const reqId_1155 = sCtx_1117.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1157 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1117, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1157.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1156.writeInt(reqId_1155);
                dataOut_1156.writeLong(groupId);
                FastMeta.META_UUID.serialize(sCtx_1117, uid, dataOut_1156);
                sCtx_1117.sendToRemote(dataOut_1156.toArray());
                return result_1157;
                
            }
            , checkAccessForSendMessage: (uid: UUID): AFuture =>  {
                const dataOut_1161 = new DataInOut();
                dataOut_1161.writeByte(11);
                const argsNames_1163: string[] = ["uid"];
                const argsValues_1164: any[] = [uid];
                const result_1162 = AFuture.make();
                sCtx_1117.invokeRemoteMethodAfter("checkAccessForSendMessage", result_1162, argsNames_1163, argsValues_1164);
                const reqId_1160 = sCtx_1117.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1162 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1162.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1161.writeInt(reqId_1160);
                FastMeta.META_UUID.serialize(sCtx_1117, uid, dataOut_1161);
                sCtx_1117.sendToRemote(dataOut_1161.toArray());
                return result_1162;
                
            }
            , resolverServers: (sid: number[]): void =>  {
                const dataOut_1166 = new DataInOut();
                dataOut_1166.writeByte(12);
                const argsNames_1168: string[] = ["sid"];
                const argsValues_1169: any[] = [sid];
                sCtx_1117.invokeRemoteMethodAfter("resolverServers", null, argsNames_1168, argsValues_1169);
                SerializerPackNumber.INSTANCE.put(dataOut_1166, sid.length);
                for (const el_1170 of sid)  {
                    dataOut_1166.writeShort(el_1170);
                    
                }
                sCtx_1117.sendToRemote(dataOut_1166.toArray());
                
            }
            , resolveClouds: (uids: UUID[]): void =>  {
                const dataOut_1172 = new DataInOut();
                dataOut_1172.writeByte(13);
                const argsNames_1174: string[] = ["uids"];
                const argsValues_1175: any[] = [uids];
                sCtx_1117.invokeRemoteMethodAfter("resolveClouds", null, argsNames_1174, argsValues_1175);
                SerializerPackNumber.INSTANCE.put(dataOut_1172, uids.length);
                for (const el_1176 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1117, el_1176, dataOut_1172);
                    
                }
                sCtx_1117.sendToRemote(dataOut_1172.toArray());
                
            }
            , getAccessGroups: (uid: UUID): ARFuture<bigint[]> =>  {
                const dataOut_1178 = new DataInOut();
                dataOut_1178.writeByte(14);
                const argsNames_1180: string[] = ["uid"];
                const argsValues_1181: any[] = [uid];
                const result_1179 = ARFuture.of<bigint[]>();
                sCtx_1117.invokeRemoteMethodAfter("getAccessGroups", result_1179, argsNames_1180, argsValues_1181);
                const reqId_1177 = sCtx_1117.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1179 as ARFuture<bigint[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_LONG).deserialize(sCtx_1117, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1179.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1178.writeInt(reqId_1177);
                FastMeta.META_UUID.serialize(sCtx_1117, uid, dataOut_1178);
                sCtx_1117.sendToRemote(dataOut_1178.toArray());
                return result_1179;
                
            }
            , getAccessGroup: (groupId: bigint): ARFuture<AccessGroup> =>  {
                const dataOut_1183 = new DataInOut();
                dataOut_1183.writeByte(15);
                const argsNames_1185: string[] = ["groupId"];
                const argsValues_1186: any[] = [groupId];
                const result_1184 = ARFuture.of<AccessGroup>();
                sCtx_1117.invokeRemoteMethodAfter("getAccessGroup", result_1184, argsNames_1185, argsValues_1186);
                const reqId_1182 = sCtx_1117.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1184 as ARFuture<AccessGroup>).tryDone(AccessGroup.META.deserialize(sCtx_1117, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1184.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1183.writeInt(reqId_1182);
                dataOut_1183.writeLong(groupId);
                sCtx_1117.sendToRemote(dataOut_1183.toArray());
                return result_1184;
                
            }
            , getAllAccessedClients: (uid: UUID): ARFuture<UUID[]> =>  {
                const dataOut_1188 = new DataInOut();
                dataOut_1188.writeByte(16);
                const argsNames_1190: string[] = ["uid"];
                const argsValues_1191: any[] = [uid];
                const result_1189 = ARFuture.of<UUID[]>();
                sCtx_1117.invokeRemoteMethodAfter("getAllAccessedClients", result_1189, argsNames_1190, argsValues_1191);
                const reqId_1187 = sCtx_1117.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1189 as ARFuture<UUID[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_UUID).deserialize(sCtx_1117, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1189.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1188.writeInt(reqId_1187);
                FastMeta.META_UUID.serialize(sCtx_1117, uid, dataOut_1188);
                sCtx_1117.sendToRemote(dataOut_1188.toArray());
                return result_1189;
                
            }
            , checkAccessForSendMessage2: (uid1: UUID, uid2: UUID): ARFuture<boolean> =>  {
                const dataOut_1193 = new DataInOut();
                dataOut_1193.writeByte(17);
                const argsNames_1195: string[] = ["uid1", "uid2"];
                const argsValues_1196: any[] = [uid1, uid2];
                const result_1194 = ARFuture.of<boolean>();
                sCtx_1117.invokeRemoteMethodAfter("checkAccessForSendMessage2", result_1194, argsNames_1195, argsValues_1196);
                const reqId_1192 = sCtx_1117.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1194 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1117, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1194.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1193.writeInt(reqId_1192);
                FastMeta.META_UUID.serialize(sCtx_1117, uid1, dataOut_1193);
                FastMeta.META_UUID.serialize(sCtx_1117, uid2, dataOut_1193);
                sCtx_1117.sendToRemote(dataOut_1193.toArray());
                return result_1194;
                
            }
            , sendTelemetry: (telemetry: Telemetry): void =>  {
                const dataOut_1198 = new DataInOut();
                dataOut_1198.writeByte(18);
                const argsNames_1200: string[] = ["telemetry"];
                const argsValues_1201: any[] = [telemetry];
                sCtx_1117.invokeRemoteMethodAfter("sendTelemetry", null, argsNames_1200, argsValues_1201);
                Telemetry.META.serialize(sCtx_1117, telemetry, dataOut_1198);
                sCtx_1117.sendToRemote(dataOut_1198.toArray());
                
            }
            , requestAccessGroupsForClients: (uids: UUID[]): void =>  {
                const dataOut_1203 = new DataInOut();
                dataOut_1203.writeByte(19);
                const argsNames_1205: string[] = ["uids"];
                const argsValues_1206: any[] = [uids];
                sCtx_1117.invokeRemoteMethodAfter("requestAccessGroupsForClients", null, argsNames_1205, argsValues_1206);
                SerializerPackNumber.INSTANCE.put(dataOut_1203, uids.length);
                for (const el_1207 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1117, el_1207, dataOut_1203);
                    
                }
                sCtx_1117.sendToRemote(dataOut_1203.toArray());
                
            }
            , requestAccessGroupsItems: (ids: bigint[]): void =>  {
                const dataOut_1209 = new DataInOut();
                dataOut_1209.writeByte(20);
                const argsNames_1211: string[] = ["ids"];
                const argsValues_1212: any[] = [ids];
                sCtx_1117.invokeRemoteMethodAfter("requestAccessGroupsItems", null, argsNames_1211, argsValues_1212);
                SerializerPackNumber.INSTANCE.put(dataOut_1209, ids.length);
                for (const el_1213 of ids)  {
                    dataOut_1209.writeLong(el_1213);
                    
                }
                sCtx_1117.sendToRemote(dataOut_1209.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_1215 = new DataInOut();
                dataOut_1215.writeByte(22);
                const argsNames_1217: string[] = ["uid", "groups"];
                const argsValues_1218: any[] = [uid, groups];
                sCtx_1117.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_1217, argsValues_1218);
                FastMeta.META_UUID.serialize(sCtx_1117, uid, dataOut_1215);
                SerializerPackNumber.INSTANCE.put(dataOut_1215, groups.length);
                for (const el_1219 of groups)  {
                    dataOut_1215.writeLong(el_1219);
                    
                }
                sCtx_1117.sendToRemote(dataOut_1215.toArray());
                
            }
            , addItemsToAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_1221 = new DataInOut();
                dataOut_1221.writeByte(23);
                const argsNames_1223: string[] = ["id", "groups"];
                const argsValues_1224: any[] = [id, groups];
                sCtx_1117.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_1223, argsValues_1224);
                dataOut_1221.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_1221, groups.length);
                for (const el_1225 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1117, el_1225, dataOut_1221);
                    
                }
                sCtx_1117.sendToRemote(dataOut_1221.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_1227 = new DataInOut();
                dataOut_1227.writeByte(24);
                const argsNames_1229: string[] = ["id", "groups"];
                const argsValues_1230: any[] = [id, groups];
                sCtx_1117.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_1229, argsValues_1230);
                dataOut_1227.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_1227, groups.length);
                for (const el_1231 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1117, el_1231, dataOut_1227);
                    
                }
                sCtx_1117.sendToRemote(dataOut_1227.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_1233 = new DataInOut();
                dataOut_1233.writeByte(25);
                const argsNames_1235: string[] = ["uid", "groups"];
                const argsValues_1236: any[] = [uid, groups];
                sCtx_1117.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_1235, argsValues_1236);
                FastMeta.META_UUID.serialize(sCtx_1117, uid, dataOut_1233);
                SerializerPackNumber.INSTANCE.put(dataOut_1233, groups.length);
                for (const el_1237 of groups)  {
                    dataOut_1233.writeLong(el_1237);
                    
                }
                sCtx_1117.sendToRemote(dataOut_1233.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_1239 = new DataInOut();
                dataOut_1239.writeByte(26);
                const argsNames_1241: string[] = ["uid", "groups"];
                const argsValues_1242: any[] = [uid, groups];
                sCtx_1117.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_1241, argsValues_1242);
                FastMeta.META_UUID.serialize(sCtx_1117, uid, dataOut_1239);
                SerializerPackNumber.INSTANCE.put(dataOut_1239, groups.length);
                for (const el_1243 of groups)  {
                    dataOut_1239.writeLong(el_1243);
                    
                }
                sCtx_1117.sendToRemote(dataOut_1239.toArray());
                
            }
            , requestAllAccessedClients: (uids: UUID[]): void =>  {
                const dataOut_1245 = new DataInOut();
                dataOut_1245.writeByte(27);
                const argsNames_1247: string[] = ["uids"];
                const argsValues_1248: any[] = [uids];
                sCtx_1117.invokeRemoteMethodAfter("requestAllAccessedClients", null, argsNames_1247, argsValues_1248);
                SerializerPackNumber.INSTANCE.put(dataOut_1245, uids.length);
                for (const el_1249 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1117, el_1249, dataOut_1245);
                    
                }
                sCtx_1117.sendToRemote(dataOut_1245.toArray());
                
            }
            , requestAccessCheck: (requests: AccessCheckPair[]): void =>  {
                const dataOut_1251 = new DataInOut();
                dataOut_1251.writeByte(28);
                const argsNames_1253: string[] = ["requests"];
                const argsValues_1254: any[] = [requests];
                sCtx_1117.invokeRemoteMethodAfter("requestAccessCheck", null, argsNames_1253, argsValues_1254);
                SerializerPackNumber.INSTANCE.put(dataOut_1251, requests.length);
                for (const el_1255 of requests)  {
                    AccessCheckPair.META.serialize(sCtx_1117, el_1255, dataOut_1251);
                    
                }
                sCtx_1117.sendToRemote(dataOut_1251.toArray());
                
            }
            , getClientActivity: (uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<ClientActivity[]> =>  {
                const dataOut_1257 = new DataInOut();
                dataOut_1257.writeByte(29);
                const argsNames_1259: string[] = ["uid", "fromTime", "toTime", "limit"];
                const argsValues_1260: any[] = [uid, fromTime, toTime, limit];
                const result_1258 = ARFuture.of<ClientActivity[]>();
                sCtx_1117.invokeRemoteMethodAfter("getClientActivity", result_1258, argsNames_1259, argsValues_1260);
                const reqId_1256 = sCtx_1117.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1258 as ARFuture<ClientActivity[]>).tryDone(FastMeta.getMetaArray(ClientActivity.META).deserialize(sCtx_1117, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1258.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1257.writeInt(reqId_1256);
                FastMeta.META_UUID.serialize(sCtx_1117, uid, dataOut_1257);
                dataOut_1257.writeLong(fromTime);
                dataOut_1257.writeLong(toTime);
                dataOut_1257.writeInt(limit);
                sCtx_1117.sendToRemote(dataOut_1257.toArray());
                return result_1258;
                
            }
            , searchClientLogs: (uid: UUID, query: string, limit: number): ARFuture<ClientLogEntry[]> =>  {
                const dataOut_1262 = new DataInOut();
                dataOut_1262.writeByte(30);
                const argsNames_1264: string[] = ["uid", "query", "limit"];
                const argsValues_1265: any[] = [uid, query, limit];
                const result_1263 = ARFuture.of<ClientLogEntry[]>();
                sCtx_1117.invokeRemoteMethodAfter("searchClientLogs", result_1263, argsNames_1264, argsValues_1265);
                const reqId_1261 = sCtx_1117.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1263 as ARFuture<ClientLogEntry[]>).tryDone(FastMeta.getMetaArray(ClientLogEntry.META).deserialize(sCtx_1117, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1263.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1262.writeInt(reqId_1261);
                FastMeta.META_UUID.serialize(sCtx_1117, uid, dataOut_1262);
                const stringBytes_1266 = new TextEncoder().encode(query);
                SerializerPackNumber.INSTANCE.put(dataOut_1262, stringBytes_1266.length);
                dataOut_1262.write(stringBytes_1266);
                dataOut_1262.writeInt(limit);
                sCtx_1117.sendToRemote(dataOut_1262.toArray());
                return result_1263;
                
            }
            , getClientConnections: (uid: UUID, limit: number): ARFuture<ClientConnectionInfo[]> =>  {
                const dataOut_1269 = new DataInOut();
                dataOut_1269.writeByte(31);
                const argsNames_1271: string[] = ["uid", "limit"];
                const argsValues_1272: any[] = [uid, limit];
                const result_1270 = ARFuture.of<ClientConnectionInfo[]>();
                sCtx_1117.invokeRemoteMethodAfter("getClientConnections", result_1270, argsNames_1271, argsValues_1272);
                const reqId_1268 = sCtx_1117.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1270 as ARFuture<ClientConnectionInfo[]>).tryDone(FastMeta.getMetaArray(ClientConnectionInfo.META).deserialize(sCtx_1117, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1270.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1269.writeInt(reqId_1268);
                FastMeta.META_UUID.serialize(sCtx_1117, uid, dataOut_1269);
                dataOut_1269.writeInt(limit);
                sCtx_1117.sendToRemote(dataOut_1269.toArray());
                return result_1270;
                
            }
            , getClientMessages: (uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<MessageInfo[]> =>  {
                const dataOut_1274 = new DataInOut();
                dataOut_1274.writeByte(32);
                const argsNames_1276: string[] = ["uid", "fromTime", "toTime", "limit"];
                const argsValues_1277: any[] = [uid, fromTime, toTime, limit];
                const result_1275 = ARFuture.of<MessageInfo[]>();
                sCtx_1117.invokeRemoteMethodAfter("getClientMessages", result_1275, argsNames_1276, argsValues_1277);
                const reqId_1273 = sCtx_1117.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1275 as ARFuture<MessageInfo[]>).tryDone(FastMeta.getMetaArray(MessageInfo.META).deserialize(sCtx_1117, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1275.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1274.writeInt(reqId_1273);
                FastMeta.META_UUID.serialize(sCtx_1117, uid, dataOut_1274);
                dataOut_1274.writeLong(fromTime);
                dataOut_1274.writeLong(toTime);
                dataOut_1274.writeInt(limit);
                sCtx_1117.sendToRemote(dataOut_1274.toArray());
                return result_1275;
                
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
                    const reqId_1278 = dataIn.readInt();
                    const argsNames_1279: string[] = [];
                    const argsValues_1280: any[] = [];
                    ctx.invokeLocalMethodBefore("getTimeUTC", argsNames_1279, argsValues_1280);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getTimeUTC();
                    ctx.invokeLocalMethodAfter("getTimeUTC", resultFuture, argsNames_1279, argsValues_1280);
                    resultFuture.to((v_1282: bigint) =>  {
                        const data_1281 = new DataInOut();
                        data_1281.writeLong(v_1282);
                        ctx.sendResultToRemote(reqId_1278, data_1281.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let uid_1284: UUID;
                    let data_1285: LoginStream;
                    uid_1284 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_1285 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsNames_1286: string[] = ["uid", "data"];
                    const argsValues_1287: any[] = [uid_1284, data_1285];
                    ctx.invokeLocalMethodBefore("loginByUID", argsNames_1286, argsValues_1287);
                    localApi.loginByUID(uid_1284, data_1285);
                    ctx.invokeLocalMethodAfter("loginByUID", null, argsNames_1286, argsValues_1287);
                    break;
                    
                }
                case 5:  {
                    let alias_1289: UUID;
                    let data_1290: LoginStream;
                    alias_1289 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_1290 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsNames_1291: string[] = ["alias", "data"];
                    const argsValues_1292: any[] = [alias_1289, data_1290];
                    ctx.invokeLocalMethodBefore("loginByAlias", argsNames_1291, argsValues_1292);
                    localApi.loginByAlias(alias_1289, data_1290);
                    ctx.invokeLocalMethodAfter("loginByAlias", null, argsNames_1291, argsValues_1292);
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
    makeRemote(sCtx_1293: FastFutureContext): LoginApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture: FlushReport): void =>  {
                sCtx_1293.flush(sendFuture);
                
            }
            , getFastMetaContext: () => sCtx_1293, getTimeUTC: (): ARFuture<bigint> =>  {
                const dataOut_1295 = new DataInOut();
                dataOut_1295.writeByte(3);
                const argsNames_1297: string[] = [];
                const argsValues_1298: any[] = [];
                const result_1296 = ARFuture.of<bigint>();
                sCtx_1293.invokeRemoteMethodAfter("getTimeUTC", result_1296, argsNames_1297, argsValues_1298);
                const reqId_1294 = sCtx_1293.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1296 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_1293, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1296.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1295.writeInt(reqId_1294);
                sCtx_1293.sendToRemote(dataOut_1295.toArray());
                return result_1296;
                
            }
            , loginByUID: (uid: UUID, data: LoginStream): void =>  {
                const dataOut_1300 = new DataInOut();
                dataOut_1300.writeByte(4);
                const argsNames_1302: string[] = ["uid", "data"];
                const argsValues_1303: any[] = [uid, data];
                sCtx_1293.invokeRemoteMethodAfter("loginByUID", null, argsNames_1302, argsValues_1303);
                FastMeta.META_UUID.serialize(sCtx_1293, uid, dataOut_1300);
                LoginStream.META.serialize(sCtx_1293, data, dataOut_1300);
                sCtx_1293.sendToRemote(dataOut_1300.toArray());
                
            }
            , loginByAlias: (alias: UUID, data: LoginStream): void =>  {
                const dataOut_1305 = new DataInOut();
                dataOut_1305.writeByte(5);
                const argsNames_1307: string[] = ["alias", "data"];
                const argsValues_1308: any[] = [alias, data];
                sCtx_1293.invokeRemoteMethodAfter("loginByAlias", null, argsNames_1307, argsValues_1308);
                FastMeta.META_UUID.serialize(sCtx_1293, alias, dataOut_1305);
                LoginStream.META.serialize(sCtx_1293, data, dataOut_1305);
                sCtx_1293.sendToRemote(dataOut_1305.toArray());
                
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
    makeRemote(sCtx_1309: FastFutureContext): ServerApiByUidClientRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture: FlushReport): void =>  {
                sCtx_1309.flush(sendFuture);
                
            }
            , getFastMetaContext: () => sCtx_1309, 
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
                    const reqId_1310 = dataIn.readInt();
                    const argsNames_1311: string[] = [];
                    const argsValues_1312: any[] = [];
                    ctx.invokeLocalMethodBefore("getBalance", argsNames_1311, argsValues_1312);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBalance();
                    ctx.invokeLocalMethodAfter("getBalance", resultFuture, argsNames_1311, argsValues_1312);
                    resultFuture.to((v_1314: bigint) =>  {
                        const data_1313 = new DataInOut();
                        data_1313.writeLong(v_1314);
                        ctx.sendResultToRemote(reqId_1310, data_1313.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    const reqId_1315 = dataIn.readInt();
                    let uid_1316: UUID;
                    uid_1316 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1317: string[] = ["uid"];
                    const argsValues_1318: any[] = [uid_1316];
                    ctx.invokeLocalMethodBefore("setParent", argsNames_1317, argsValues_1318);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.setParent(uid_1316);
                    ctx.invokeLocalMethodAfter("setParent", resultFuture, argsNames_1317, argsValues_1318);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1315);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_1319 = dataIn.readInt();
                    const argsNames_1320: string[] = [];
                    const argsValues_1321: any[] = [];
                    ctx.invokeLocalMethodBefore("block", argsNames_1320, argsValues_1321);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.block();
                    ctx.invokeLocalMethodAfter("block", resultFuture, argsNames_1320, argsValues_1321);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1319);
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    const reqId_1322 = dataIn.readInt();
                    const argsNames_1323: string[] = [];
                    const argsValues_1324: any[] = [];
                    ctx.invokeLocalMethodBefore("getPosition", argsNames_1323, argsValues_1324);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getPosition();
                    ctx.invokeLocalMethodAfter("getPosition", resultFuture, argsNames_1323, argsValues_1324);
                    resultFuture.to((v_1326: Cloud) =>  {
                        const data_1325 = new DataInOut();
                        Cloud.META.serialize(ctx, v_1326, data_1325);
                        ctx.sendResultToRemote(reqId_1322, data_1325.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 7:  {
                    const reqId_1327 = dataIn.readInt();
                    const argsNames_1328: string[] = [];
                    const argsValues_1329: any[] = [];
                    ctx.invokeLocalMethodBefore("getParent", argsNames_1328, argsValues_1329);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getParent();
                    ctx.invokeLocalMethodAfter("getParent", resultFuture, argsNames_1328, argsValues_1329);
                    resultFuture.to((v_1331: UUID) =>  {
                        const data_1330 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_1331, data_1330);
                        ctx.sendResultToRemote(reqId_1327, data_1330.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 8:  {
                    const reqId_1332 = dataIn.readInt();
                    const argsNames_1333: string[] = [];
                    const argsValues_1334: any[] = [];
                    ctx.invokeLocalMethodBefore("getBeneficiary", argsNames_1333, argsValues_1334);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBeneficiary();
                    ctx.invokeLocalMethodAfter("getBeneficiary", resultFuture, argsNames_1333, argsValues_1334);
                    resultFuture.to((v_1336: UUID) =>  {
                        const data_1335 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_1336, data_1335);
                        ctx.sendResultToRemote(reqId_1332, data_1335.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_1337 = dataIn.readInt();
                    let uid_1338: UUID;
                    uid_1338 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1339: string[] = ["uid"];
                    const argsValues_1340: any[] = [uid_1338];
                    ctx.invokeLocalMethodBefore("setBeneficiary", argsNames_1339, argsValues_1340);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.setBeneficiary(uid_1338);
                    ctx.invokeLocalMethodAfter("setBeneficiary", resultFuture, argsNames_1339, argsValues_1340);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1337);
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_1341 = dataIn.readInt();
                    const argsNames_1342: string[] = [];
                    const argsValues_1343: any[] = [];
                    ctx.invokeLocalMethodBefore("getBlockTime", argsNames_1342, argsValues_1343);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBlockTime();
                    ctx.invokeLocalMethodAfter("getBlockTime", resultFuture, argsNames_1342, argsValues_1343);
                    resultFuture.to((v_1345: Date) =>  {
                        const data_1344 = new DataInOut();
                        data_1344.writeLong(v_1345.getTime());
                        ctx.sendResultToRemote(reqId_1341, data_1344.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_1346 = dataIn.readInt();
                    const argsNames_1347: string[] = [];
                    const argsValues_1348: any[] = [];
                    ctx.invokeLocalMethodBefore("unblock", argsNames_1347, argsValues_1348);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.unblock();
                    ctx.invokeLocalMethodAfter("unblock", resultFuture, argsNames_1347, argsValues_1348);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1346);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    const reqId_1349 = dataIn.readInt();
                    const argsNames_1350: string[] = [];
                    const argsValues_1351: any[] = [];
                    ctx.invokeLocalMethodBefore("createTime", argsNames_1350, argsValues_1351);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.createTime();
                    ctx.invokeLocalMethodAfter("createTime", resultFuture, argsNames_1350, argsValues_1351);
                    resultFuture.to((v_1353: Date) =>  {
                        const data_1352 = new DataInOut();
                        data_1352.writeLong(v_1353.getTime());
                        ctx.sendResultToRemote(reqId_1349, data_1352.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 13:  {
                    const reqId_1354 = dataIn.readInt();
                    const argsNames_1355: string[] = [];
                    const argsValues_1356: any[] = [];
                    ctx.invokeLocalMethodBefore("onlineTime", argsNames_1355, argsValues_1356);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.onlineTime();
                    ctx.invokeLocalMethodAfter("onlineTime", resultFuture, argsNames_1355, argsValues_1356);
                    resultFuture.to((v_1358: Date) =>  {
                        const data_1357 = new DataInOut();
                        data_1357.writeLong(v_1358.getTime());
                        ctx.sendResultToRemote(reqId_1354, data_1357.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 14:  {
                    const reqId_1359 = dataIn.readInt();
                    let groupId_1360: bigint;
                    groupId_1360 = dataIn.readLong();
                    const argsNames_1361: string[] = ["groupId"];
                    const argsValues_1362: any[] = [groupId_1360];
                    ctx.invokeLocalMethodBefore("addAccessGroup", argsNames_1361, argsValues_1362);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.addAccessGroup(groupId_1360);
                    ctx.invokeLocalMethodAfter("addAccessGroup", resultFuture, argsNames_1361, argsValues_1362);
                    resultFuture.to((v_1364: boolean) =>  {
                        const data_1363 = new DataInOut();
                        data_1363.writeBoolean(v_1364);
                        ctx.sendResultToRemote(reqId_1359, data_1363.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_1365 = dataIn.readInt();
                    let groupId_1366: bigint;
                    groupId_1366 = dataIn.readLong();
                    const argsNames_1367: string[] = ["groupId"];
                    const argsValues_1368: any[] = [groupId_1366];
                    ctx.invokeLocalMethodBefore("removeAccessGroup", argsNames_1367, argsValues_1368);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.removeAccessGroup(groupId_1366);
                    ctx.invokeLocalMethodAfter("removeAccessGroup", resultFuture, argsNames_1367, argsValues_1368);
                    resultFuture.to((v_1370: boolean) =>  {
                        const data_1369 = new DataInOut();
                        data_1369.writeBoolean(v_1370);
                        ctx.sendResultToRemote(reqId_1365, data_1369.toArray());
                        
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
    makeRemote(sCtx_1371: FastFutureContext): ServerApiByUidRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture: FlushReport): void =>  {
                sCtx_1371.flush(sendFuture);
                
            }
            , getFastMetaContext: () => sCtx_1371, getBalance: (): ARFuture<bigint> =>  {
                const dataOut_1373 = new DataInOut();
                dataOut_1373.writeByte(3);
                const argsNames_1375: string[] = [];
                const argsValues_1376: any[] = [];
                const result_1374 = ARFuture.of<bigint>();
                sCtx_1371.invokeRemoteMethodAfter("getBalance", result_1374, argsNames_1375, argsValues_1376);
                const reqId_1372 = sCtx_1371.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1374 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_1371, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1374.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1373.writeInt(reqId_1372);
                sCtx_1371.sendToRemote(dataOut_1373.toArray());
                return result_1374;
                
            }
            , setParent: (uid: UUID): AFuture =>  {
                const dataOut_1378 = new DataInOut();
                dataOut_1378.writeByte(4);
                const argsNames_1380: string[] = ["uid"];
                const argsValues_1381: any[] = [uid];
                const result_1379 = AFuture.make();
                sCtx_1371.invokeRemoteMethodAfter("setParent", result_1379, argsNames_1380, argsValues_1381);
                const reqId_1377 = sCtx_1371.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1379 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1379.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1378.writeInt(reqId_1377);
                FastMeta.META_UUID.serialize(sCtx_1371, uid, dataOut_1378);
                sCtx_1371.sendToRemote(dataOut_1378.toArray());
                return result_1379;
                
            }
            , block: (): AFuture =>  {
                const dataOut_1383 = new DataInOut();
                dataOut_1383.writeByte(5);
                const argsNames_1385: string[] = [];
                const argsValues_1386: any[] = [];
                const result_1384 = AFuture.make();
                sCtx_1371.invokeRemoteMethodAfter("block", result_1384, argsNames_1385, argsValues_1386);
                const reqId_1382 = sCtx_1371.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1384 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1384.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1383.writeInt(reqId_1382);
                sCtx_1371.sendToRemote(dataOut_1383.toArray());
                return result_1384;
                
            }
            , getPosition: (): ARFuture<Cloud> =>  {
                const dataOut_1388 = new DataInOut();
                dataOut_1388.writeByte(6);
                const argsNames_1390: string[] = [];
                const argsValues_1391: any[] = [];
                const result_1389 = ARFuture.of<Cloud>();
                sCtx_1371.invokeRemoteMethodAfter("getPosition", result_1389, argsNames_1390, argsValues_1391);
                const reqId_1387 = sCtx_1371.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1389 as ARFuture<Cloud>).tryDone(Cloud.META.deserialize(sCtx_1371, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1389.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1388.writeInt(reqId_1387);
                sCtx_1371.sendToRemote(dataOut_1388.toArray());
                return result_1389;
                
            }
            , getParent: (): ARFuture<UUID> =>  {
                const dataOut_1393 = new DataInOut();
                dataOut_1393.writeByte(7);
                const argsNames_1395: string[] = [];
                const argsValues_1396: any[] = [];
                const result_1394 = ARFuture.of<UUID>();
                sCtx_1371.invokeRemoteMethodAfter("getParent", result_1394, argsNames_1395, argsValues_1396);
                const reqId_1392 = sCtx_1371.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1394 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_1371, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1394.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1393.writeInt(reqId_1392);
                sCtx_1371.sendToRemote(dataOut_1393.toArray());
                return result_1394;
                
            }
            , getBeneficiary: (): ARFuture<UUID> =>  {
                const dataOut_1398 = new DataInOut();
                dataOut_1398.writeByte(8);
                const argsNames_1400: string[] = [];
                const argsValues_1401: any[] = [];
                const result_1399 = ARFuture.of<UUID>();
                sCtx_1371.invokeRemoteMethodAfter("getBeneficiary", result_1399, argsNames_1400, argsValues_1401);
                const reqId_1397 = sCtx_1371.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1399 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_1371, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1399.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1398.writeInt(reqId_1397);
                sCtx_1371.sendToRemote(dataOut_1398.toArray());
                return result_1399;
                
            }
            , setBeneficiary: (uid: UUID): AFuture =>  {
                const dataOut_1403 = new DataInOut();
                dataOut_1403.writeByte(9);
                const argsNames_1405: string[] = ["uid"];
                const argsValues_1406: any[] = [uid];
                const result_1404 = AFuture.make();
                sCtx_1371.invokeRemoteMethodAfter("setBeneficiary", result_1404, argsNames_1405, argsValues_1406);
                const reqId_1402 = sCtx_1371.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1404 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1404.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1403.writeInt(reqId_1402);
                FastMeta.META_UUID.serialize(sCtx_1371, uid, dataOut_1403);
                sCtx_1371.sendToRemote(dataOut_1403.toArray());
                return result_1404;
                
            }
            , getBlockTime: (): ARFuture<Date> =>  {
                const dataOut_1408 = new DataInOut();
                dataOut_1408.writeByte(10);
                const argsNames_1410: string[] = [];
                const argsValues_1411: any[] = [];
                const result_1409 = ARFuture.of<Date>();
                sCtx_1371.invokeRemoteMethodAfter("getBlockTime", result_1409, argsNames_1410, argsValues_1411);
                const reqId_1407 = sCtx_1371.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1409 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1371, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1409.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1408.writeInt(reqId_1407);
                sCtx_1371.sendToRemote(dataOut_1408.toArray());
                return result_1409;
                
            }
            , unblock: (): AFuture =>  {
                const dataOut_1413 = new DataInOut();
                dataOut_1413.writeByte(11);
                const argsNames_1415: string[] = [];
                const argsValues_1416: any[] = [];
                const result_1414 = AFuture.make();
                sCtx_1371.invokeRemoteMethodAfter("unblock", result_1414, argsNames_1415, argsValues_1416);
                const reqId_1412 = sCtx_1371.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1414 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1414.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1413.writeInt(reqId_1412);
                sCtx_1371.sendToRemote(dataOut_1413.toArray());
                return result_1414;
                
            }
            , createTime: (): ARFuture<Date> =>  {
                const dataOut_1418 = new DataInOut();
                dataOut_1418.writeByte(12);
                const argsNames_1420: string[] = [];
                const argsValues_1421: any[] = [];
                const result_1419 = ARFuture.of<Date>();
                sCtx_1371.invokeRemoteMethodAfter("createTime", result_1419, argsNames_1420, argsValues_1421);
                const reqId_1417 = sCtx_1371.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1419 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1371, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1419.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1418.writeInt(reqId_1417);
                sCtx_1371.sendToRemote(dataOut_1418.toArray());
                return result_1419;
                
            }
            , onlineTime: (): ARFuture<Date> =>  {
                const dataOut_1423 = new DataInOut();
                dataOut_1423.writeByte(13);
                const argsNames_1425: string[] = [];
                const argsValues_1426: any[] = [];
                const result_1424 = ARFuture.of<Date>();
                sCtx_1371.invokeRemoteMethodAfter("onlineTime", result_1424, argsNames_1425, argsValues_1426);
                const reqId_1422 = sCtx_1371.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1424 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1371, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1424.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1423.writeInt(reqId_1422);
                sCtx_1371.sendToRemote(dataOut_1423.toArray());
                return result_1424;
                
            }
            , addAccessGroup: (groupId: bigint): ARFuture<boolean> =>  {
                const dataOut_1428 = new DataInOut();
                dataOut_1428.writeByte(14);
                const argsNames_1430: string[] = ["groupId"];
                const argsValues_1431: any[] = [groupId];
                const result_1429 = ARFuture.of<boolean>();
                sCtx_1371.invokeRemoteMethodAfter("addAccessGroup", result_1429, argsNames_1430, argsValues_1431);
                const reqId_1427 = sCtx_1371.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1429 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1371, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1429.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1428.writeInt(reqId_1427);
                dataOut_1428.writeLong(groupId);
                sCtx_1371.sendToRemote(dataOut_1428.toArray());
                return result_1429;
                
            }
            , removeAccessGroup: (groupId: bigint): ARFuture<boolean> =>  {
                const dataOut_1433 = new DataInOut();
                dataOut_1433.writeByte(15);
                const argsNames_1435: string[] = ["groupId"];
                const argsValues_1436: any[] = [groupId];
                const result_1434 = ARFuture.of<boolean>();
                sCtx_1371.invokeRemoteMethodAfter("removeAccessGroup", result_1434, argsNames_1435, argsValues_1436);
                const reqId_1432 = sCtx_1371.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1434 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1371, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1434.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1433.writeInt(reqId_1432);
                dataOut_1433.writeLong(groupId);
                sCtx_1371.sendToRemote(dataOut_1433.toArray());
                return result_1434;
                
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
    makeRemote(sCtx_1437: FastFutureContext): ClientApiRegSafeRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture: FlushReport): void =>  {
                sCtx_1437.flush(sendFuture);
                
            }
            , getFastMetaContext: () => sCtx_1437, 
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
    makeRemote(sCtx_1438: FastFutureContext): GlobalRegClientApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture: FlushReport): void =>  {
                sCtx_1438.flush(sendFuture);
                
            }
            , getFastMetaContext: () => sCtx_1438, 
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
                    let stream_1440: ClientApiRegSafeStream;
                    stream_1440 = ClientApiRegSafeStream.META.deserialize(ctx, dataIn);
                    const argsNames_1441: string[] = ["stream"];
                    const argsValues_1442: any[] = [stream_1440];
                    ctx.invokeLocalMethodBefore("enter", argsNames_1441, argsValues_1442);
                    localApi.enter(stream_1440);
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_1441, argsValues_1442);
                    break;
                    
                }
                case 4:  {
                    let stream_1444: GlobalRegClientApiStream;
                    stream_1444 = GlobalRegClientApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_1445: string[] = ["stream"];
                    const argsValues_1446: any[] = [stream_1444];
                    ctx.invokeLocalMethodBefore("enterGlobal", argsNames_1445, argsValues_1446);
                    localApi.enterGlobal(stream_1444);
                    ctx.invokeLocalMethodAfter("enterGlobal", null, argsNames_1445, argsValues_1446);
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
    makeRemote(sCtx_1447: FastFutureContext): ClientApiRegUnsafeRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture: FlushReport): void =>  {
                sCtx_1447.flush(sendFuture);
                
            }
            , getFastMetaContext: () => sCtx_1447, enter: (stream: ClientApiRegSafeStream): void =>  {
                const dataOut_1449 = new DataInOut();
                dataOut_1449.writeByte(3);
                const argsNames_1451: string[] = ["stream"];
                const argsValues_1452: any[] = [stream];
                sCtx_1447.invokeRemoteMethodAfter("enter", null, argsNames_1451, argsValues_1452);
                ClientApiRegSafeStream.META.serialize(sCtx_1447, stream, dataOut_1449);
                sCtx_1447.sendToRemote(dataOut_1449.toArray());
                
            }
            , enterGlobal: (stream: GlobalRegClientApiStream): void =>  {
                const dataOut_1454 = new DataInOut();
                dataOut_1454.writeByte(4);
                const argsNames_1456: string[] = ["stream"];
                const argsValues_1457: any[] = [stream];
                sCtx_1447.invokeRemoteMethodAfter("enterGlobal", null, argsNames_1456, argsValues_1457);
                GlobalRegClientApiStream.META.serialize(sCtx_1447, stream, dataOut_1454);
                sCtx_1447.sendToRemote(dataOut_1454.toArray());
                
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
                    let _key_1459: Key;
                    _key_1459 = Key.META.deserialize(ctx, dataIn);
                    const argsNames_1460: string[] = ["key"];
                    const argsValues_1461: any[] = [_key_1459];
                    ctx.invokeLocalMethodBefore("setMasterKey", argsNames_1460, argsValues_1461);
                    localApi.setMasterKey(_key_1459);
                    ctx.invokeLocalMethodAfter("setMasterKey", null, argsNames_1460, argsValues_1461);
                    break;
                    
                }
                case 4:  {
                    const reqId_1462 = dataIn.readInt();
                    const argsNames_1463: string[] = [];
                    const argsValues_1464: any[] = [];
                    ctx.invokeLocalMethodBefore("finish", argsNames_1463, argsValues_1464);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.finish();
                    ctx.invokeLocalMethodAfter("finish", resultFuture, argsNames_1463, argsValues_1464);
                    resultFuture.to((v_1466: FinishResult) =>  {
                        const data_1465 = new DataInOut();
                        FinishResult.META.serialize(ctx, v_1466, data_1465);
                        ctx.sendResultToRemote(reqId_1462, data_1465.toArray());
                        
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
    makeRemote(sCtx_1467: FastFutureContext): GlobalRegServerApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture: FlushReport): void =>  {
                sCtx_1467.flush(sendFuture);
                
            }
            , getFastMetaContext: () => sCtx_1467, setMasterKey: (key: Key): void =>  {
                const dataOut_1469 = new DataInOut();
                dataOut_1469.writeByte(3);
                const argsNames_1471: string[] = ["key"];
                const argsValues_1472: any[] = [key];
                sCtx_1467.invokeRemoteMethodAfter("setMasterKey", null, argsNames_1471, argsValues_1472);
                Key.META.serialize(sCtx_1467, key, dataOut_1469);
                sCtx_1467.sendToRemote(dataOut_1469.toArray());
                
            }
            , finish: (): ARFuture<FinishResult> =>  {
                const dataOut_1474 = new DataInOut();
                dataOut_1474.writeByte(4);
                const argsNames_1476: string[] = [];
                const argsValues_1477: any[] = [];
                const result_1475 = ARFuture.of<FinishResult>();
                sCtx_1467.invokeRemoteMethodAfter("finish", result_1475, argsNames_1476, argsValues_1477);
                const reqId_1473 = sCtx_1467.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1475 as ARFuture<FinishResult>).tryDone(FinishResult.META.deserialize(sCtx_1467, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1475.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1474.writeInt(reqId_1473);
                sCtx_1467.sendToRemote(dataOut_1474.toArray());
                return result_1475;
                
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
                    let salt_1479: string;
                    let suffix_1480: string;
                    let passwords_1481: number[];
                    let parent_1482: UUID;
                    let globalApi_1483: GlobalApiStream;
                    let stringBytes_1484: Uint8Array;
                    const len_1486 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1487 = dataIn.readBytes(len_1486);
                    stringBytes_1484 = bytes_1487;
                    salt_1479 = new TextDecoder('utf-8').decode(stringBytes_1484);
                    let stringBytes_1488: Uint8Array;
                    const len_1490 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1491 = dataIn.readBytes(len_1490);
                    stringBytes_1488 = bytes_1491;
                    suffix_1480 = new TextDecoder('utf-8').decode(stringBytes_1488);
                    const len_1493 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    passwords_1481 = new Array<number>(len_1493);
                    for (let idx_1492 = 0;
                    idx_1492 < len_1493;
                    idx_1492++)  {
                        passwords_1481[idx_1492] = dataIn.readInt();
                        
                    }
                    parent_1482 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    globalApi_1483 = GlobalApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_1494: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                    const argsValues_1495: any[] = [salt_1479, suffix_1480, passwords_1481, parent_1482, globalApi_1483];
                    ctx.invokeLocalMethodBefore("registration", argsNames_1494, argsValues_1495);
                    localApi.registration(salt_1479, suffix_1480, passwords_1481, parent_1482, globalApi_1483);
                    ctx.invokeLocalMethodAfter("registration", null, argsNames_1494, argsValues_1495);
                    break;
                    
                }
                case 4:  {
                    const reqId_1496 = dataIn.readInt();
                    let parent_1497: UUID;
                    let powMethods_1498: PowMethod;
                    parent_1497 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    powMethods_1498 = PowMethod.META.deserialize(ctx, dataIn);
                    const argsNames_1499: string[] = ["parent", "powMethods"];
                    const argsValues_1500: any[] = [parent_1497, powMethods_1498];
                    ctx.invokeLocalMethodBefore("requestWorkProofData", argsNames_1499, argsValues_1500);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.requestWorkProofData(parent_1497, powMethods_1498);
                    ctx.invokeLocalMethodAfter("requestWorkProofData", resultFuture, argsNames_1499, argsValues_1500);
                    resultFuture.to((v_1502: WorkProofDTO) =>  {
                        const data_1501 = new DataInOut();
                        WorkProofDTO.META.serialize(ctx, v_1502, data_1501);
                        ctx.sendResultToRemote(reqId_1496, data_1501.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_1503 = dataIn.readInt();
                    let serverIds_1504: Cloud;
                    serverIds_1504 = Cloud.META.deserialize(ctx, dataIn);
                    const argsNames_1505: string[] = ["serverIds"];
                    const argsValues_1506: any[] = [serverIds_1504];
                    ctx.invokeLocalMethodBefore("resolveServers", argsNames_1505, argsValues_1506);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.resolveServers(serverIds_1504);
                    ctx.invokeLocalMethodAfter("resolveServers", resultFuture, argsNames_1505, argsValues_1506);
                    resultFuture.to((v_1508: ServerDescriptor[]) =>  {
                        const data_1507 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1507, v_1508.length);
                        for (const el_1509 of v_1508)  {
                            ServerDescriptor.META.serialize(ctx, el_1509, data_1507);
                            
                        }
                        ctx.sendResultToRemote(reqId_1503, data_1507.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    let _key_1511: Key;
                    _key_1511 = Key.META.deserialize(ctx, dataIn);
                    const argsNames_1512: string[] = ["key"];
                    const argsValues_1513: any[] = [_key_1511];
                    ctx.invokeLocalMethodBefore("setReturnKey", argsNames_1512, argsValues_1513);
                    localApi.setReturnKey(_key_1511);
                    ctx.invokeLocalMethodAfter("setReturnKey", null, argsNames_1512, argsValues_1513);
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
    makeRemote(sCtx_1514: FastFutureContext): ServerRegistrationApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture: FlushReport): void =>  {
                sCtx_1514.flush(sendFuture);
                
            }
            , getFastMetaContext: () => sCtx_1514, registration: (salt: string, suffix: string, passwords: number[], parent: UUID, globalApi: GlobalApiStream): void =>  {
                const dataOut_1516 = new DataInOut();
                dataOut_1516.writeByte(3);
                const argsNames_1518: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                const argsValues_1519: any[] = [salt, suffix, passwords, parent, globalApi];
                sCtx_1514.invokeRemoteMethodAfter("registration", null, argsNames_1518, argsValues_1519);
                const stringBytes_1520 = new TextEncoder().encode(salt);
                SerializerPackNumber.INSTANCE.put(dataOut_1516, stringBytes_1520.length);
                dataOut_1516.write(stringBytes_1520);
                const stringBytes_1522 = new TextEncoder().encode(suffix);
                SerializerPackNumber.INSTANCE.put(dataOut_1516, stringBytes_1522.length);
                dataOut_1516.write(stringBytes_1522);
                SerializerPackNumber.INSTANCE.put(dataOut_1516, passwords.length);
                for (const el_1524 of passwords)  {
                    dataOut_1516.writeInt(el_1524);
                    
                }
                FastMeta.META_UUID.serialize(sCtx_1514, parent, dataOut_1516);
                GlobalApiStream.META.serialize(sCtx_1514, globalApi, dataOut_1516);
                sCtx_1514.sendToRemote(dataOut_1516.toArray());
                
            }
            , requestWorkProofData: (parent: UUID, powMethods: PowMethod): ARFuture<WorkProofDTO> =>  {
                const dataOut_1526 = new DataInOut();
                dataOut_1526.writeByte(4);
                const argsNames_1528: string[] = ["parent", "powMethods"];
                const argsValues_1529: any[] = [parent, powMethods];
                const result_1527 = ARFuture.of<WorkProofDTO>();
                sCtx_1514.invokeRemoteMethodAfter("requestWorkProofData", result_1527, argsNames_1528, argsValues_1529);
                const reqId_1525 = sCtx_1514.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1527 as ARFuture<WorkProofDTO>).tryDone(WorkProofDTO.META.deserialize(sCtx_1514, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1527.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1526.writeInt(reqId_1525);
                FastMeta.META_UUID.serialize(sCtx_1514, parent, dataOut_1526);
                PowMethod.META.serialize(sCtx_1514, powMethods, dataOut_1526);
                sCtx_1514.sendToRemote(dataOut_1526.toArray());
                return result_1527;
                
            }
            , resolveServers: (serverIds: Cloud): ARFuture<ServerDescriptor[]> =>  {
                const dataOut_1531 = new DataInOut();
                dataOut_1531.writeByte(5);
                const argsNames_1533: string[] = ["serverIds"];
                const argsValues_1534: any[] = [serverIds];
                const result_1532 = ARFuture.of<ServerDescriptor[]>();
                sCtx_1514.invokeRemoteMethodAfter("resolveServers", result_1532, argsNames_1533, argsValues_1534);
                const reqId_1530 = sCtx_1514.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1532 as ARFuture<ServerDescriptor[]>).tryDone(FastMeta.getMetaArray(ServerDescriptor.META).deserialize(sCtx_1514, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1532.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1531.writeInt(reqId_1530);
                Cloud.META.serialize(sCtx_1514, serverIds, dataOut_1531);
                sCtx_1514.sendToRemote(dataOut_1531.toArray());
                return result_1532;
                
            }
            , setReturnKey: (key: Key): void =>  {
                const dataOut_1536 = new DataInOut();
                dataOut_1536.writeByte(6);
                const argsNames_1538: string[] = ["key"];
                const argsValues_1539: any[] = [key];
                sCtx_1514.invokeRemoteMethodAfter("setReturnKey", null, argsNames_1538, argsValues_1539);
                Key.META.serialize(sCtx_1514, key, dataOut_1536);
                sCtx_1514.sendToRemote(dataOut_1536.toArray());
                
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
                    const reqId_1540 = dataIn.readInt();
                    let cryptoLib_1541: CryptoLib;
                    cryptoLib_1541 = CryptoLib.META.deserialize(ctx, dataIn);
                    const argsNames_1542: string[] = ["cryptoLib"];
                    const argsValues_1543: any[] = [cryptoLib_1541];
                    ctx.invokeLocalMethodBefore("getAsymmetricPublicKey", argsNames_1542, argsValues_1543);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAsymmetricPublicKey(cryptoLib_1541);
                    ctx.invokeLocalMethodAfter("getAsymmetricPublicKey", resultFuture, argsNames_1542, argsValues_1543);
                    resultFuture.to((v_1545: SignedKey) =>  {
                        const data_1544 = new DataInOut();
                        SignedKey.META.serialize(ctx, v_1545, data_1544);
                        ctx.sendResultToRemote(reqId_1540, data_1544.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let cryptoLib_1547: CryptoLib;
                    let stream_1548: ServerRegistrationApiStream;
                    cryptoLib_1547 = CryptoLib.META.deserialize(ctx, dataIn);
                    stream_1548 = ServerRegistrationApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_1549: string[] = ["cryptoLib", "stream"];
                    const argsValues_1550: any[] = [cryptoLib_1547, stream_1548];
                    ctx.invokeLocalMethodBefore("enter", argsNames_1549, argsValues_1550);
                    localApi.enter(cryptoLib_1547, stream_1548);
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_1549, argsValues_1550);
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
    makeRemote(sCtx_1551: FastFutureContext): RegistrationRootApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture: FlushReport): void =>  {
                sCtx_1551.flush(sendFuture);
                
            }
            , getFastMetaContext: () => sCtx_1551, getAsymmetricPublicKey: (cryptoLib: CryptoLib): ARFuture<SignedKey> =>  {
                const dataOut_1553 = new DataInOut();
                dataOut_1553.writeByte(3);
                const argsNames_1555: string[] = ["cryptoLib"];
                const argsValues_1556: any[] = [cryptoLib];
                const result_1554 = ARFuture.of<SignedKey>();
                sCtx_1551.invokeRemoteMethodAfter("getAsymmetricPublicKey", result_1554, argsNames_1555, argsValues_1556);
                const reqId_1552 = sCtx_1551.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1554 as ARFuture<SignedKey>).tryDone(SignedKey.META.deserialize(sCtx_1551, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1554.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1553.writeInt(reqId_1552);
                CryptoLib.META.serialize(sCtx_1551, cryptoLib, dataOut_1553);
                sCtx_1551.sendToRemote(dataOut_1553.toArray());
                return result_1554;
                
            }
            , enter: (cryptoLib: CryptoLib, stream: ServerRegistrationApiStream): void =>  {
                const dataOut_1558 = new DataInOut();
                dataOut_1558.writeByte(4);
                const argsNames_1560: string[] = ["cryptoLib", "stream"];
                const argsValues_1561: any[] = [cryptoLib, stream];
                sCtx_1551.invokeRemoteMethodAfter("enter", null, argsNames_1560, argsValues_1561);
                CryptoLib.META.serialize(sCtx_1551, cryptoLib, dataOut_1558);
                ServerRegistrationApiStream.META.serialize(sCtx_1551, stream, dataOut_1558);
                sCtx_1551.sendToRemote(dataOut_1558.toArray());
                
            }
            , 
        };
        return remoteApiImpl as RegistrationRootApiRemote;
        
    }
    
}
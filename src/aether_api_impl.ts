import  {
    AFuture, ARFuture, DataIn, DataOut, DataInOut, DataInOutStatic, FastMetaType, FastFutureContext, RemoteApi, FastMeta, SerializerPackNumber, DeserializerPackNumber, FastApiContextLocal, FastMetaApi, BytesConverter, RemoteApiFuture, FastFutureContextStub, UUID, URI, AConsumer, ToString, AString
}
from './aether_client';
import  {
    AetherCodec, CryptoLib, PowMethod, Status, AetherTypeDescriptor, IPAddress, Key, KeyAsymmetric, KeyAsymmetricPrivate, KeyAsymmetricPublic, KeySign, KeySignPrivate, KeySignPublic, KeySymmetric, PairKeys, Sign, Telemetry, WorkProofConfig, AccessCheckPair, AccessCheckResult, AccessGroup, AetherApiDefinition, AetherArgumentDescriptor, AetherArrayType, AetherBaseType, AetherFieldDescriptor, AetherMethodDescriptor, AetherModuleDescriptor, AetherNullableType, AetherStreamType, AetherStructDescriptor, ClientInfo, ClientStateForSave, Cloud, CoderAndPort, FinishResult, HydrogenCurvePrivate, HydrogenCurvePublic, HydrogenSecretBox, HydrogenSignPrivate, HydrogenSignPublic, IPAddressAndPorts, IPAddressAndPortsList, IPAddressV4, IPAddressV6, Message, MoneyOperation, PairKeysAsym, PairKeysAsymSigned, PairKeysSign, ServerDescriptor, SignAE_ED25519, SignedKey, SignHYDROGEN, SodiumChacha20Poly1305, SodiumCurvePrivate, SodiumCurvePublic, SodiumSignPrivate, SodiumSignPublic, TelemetryCPP, UUIDAndCloud, WorkProofBCrypt, WorkProofDTO, ClientApiRegSafeStream, ClientApiStream, ClientInteractionClientStream, GlobalApi, GlobalRegClientApiStream, LoginClientStream, LoginStream, ServerRegistrationApiStream, ClientApiUnsafe, ClientApiSafe, AuthorizedApi, LoginApi, ServerApiByUidClient, ServerApiByUid, ClientApiRegSafe, GlobalRegClientApi, ClientApiRegUnsafe, GlobalRegServerApi, ServerRegistrationApi, RegistrationRootApi, ClientApiUnsafeRemote, ClientApiSafeRemote, AuthorizedApiRemote, LoginApiRemote, ServerApiByUidClientRemote, ServerApiByUidRemote, ClientApiRegSafeRemote, GlobalRegClientApiRemote, ClientApiRegUnsafeRemote, GlobalRegServerApiRemote, ServerRegistrationApiRemote, RegistrationRootApiRemote
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
            default: throw new Error(`Cannot serialize 'AetherTypeDescriptor' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_0: FastFutureContext, in__3: DataIn): AetherTypeDescriptor  {
        const typeId = in__3.readUByte();
        switch(typeId)  {
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
export class AetherBaseTypeMetaBodyImpl implements FastMetaType<AetherBaseType>  {
    serialize(sCtx_111: FastFutureContext, obj_112: AetherBaseType, _out_113: DataOut): void  {
        let _mask: number = 0;
        if (obj_112.docId === null) _mask |= 1;
        _out_113.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_113, obj_112.id);
        if (obj_112.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_113, obj_112.docId);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_113, obj_112.nameId);
        
    }
    deserialize(sCtx_111: FastFutureContext, in__114: DataIn): AetherBaseType  {
        let id_115: bigint;
        let docId_116: bigint;
        let nameId_117: bigint;
        const _mask = in__114.readByte();
        id_115 = DeserializerPackNumber.INSTANCE.put(in__114);
        if (((_mask & 1) === 0))  {
            docId_116 = DeserializerPackNumber.INSTANCE.put(in__114);
            
        }
        else  {
            docId_116 = null;
            
        }
        nameId_117 = DeserializerPackNumber.INSTANCE.put(in__114);
        return new AetherBaseType(id_115, docId_116, nameId_117);
        
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
export class AetherFieldDescriptorMetaBodyImpl implements FastMetaType<AetherFieldDescriptor>  {
    serialize(sCtx_118: FastFutureContext, obj_119: AetherFieldDescriptor, _out_120: DataOut): void  {
        let _mask: number = 0;
        if (obj_119.docId === null) _mask |= 1;
        _out_120.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_120, obj_119.nameId);
        SerializerPackNumber.INSTANCE.put(_out_120, obj_119.typeId);
        if (obj_119.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_120, obj_119.docId);
            
        }
        
    }
    deserialize(sCtx_118: FastFutureContext, in__121: DataIn): AetherFieldDescriptor  {
        let nameId_122: bigint;
        let typeId_123: bigint;
        let docId_124: bigint;
        const _mask = in__121.readByte();
        nameId_122 = DeserializerPackNumber.INSTANCE.put(in__121);
        typeId_123 = DeserializerPackNumber.INSTANCE.put(in__121);
        if (((_mask & 1) === 0))  {
            docId_124 = DeserializerPackNumber.INSTANCE.put(in__121);
            
        }
        else  {
            docId_124 = null;
            
        }
        return new AetherFieldDescriptor(nameId_122, typeId_123, docId_124);
        
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
    serialize(sCtx_125: FastFutureContext, obj_126: AetherMethodDescriptor, _out_127: DataOut): void  {
        let _mask: number = 0;
        if (obj_126.docId === null) _mask |= 1;
        _out_127.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_127, obj_126.nameId);
        SerializerPackNumber.INSTANCE.put(_out_127, obj_126.args.length);
        for (const el_129 of obj_126.args)  {
            AetherArgumentDescriptor.META.serialize(sCtx_125, el_129, _out_127);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_127, obj_126.returnTypeId);
        if (obj_126.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_127, obj_126.docId);
            
        }
        
    }
    deserialize(sCtx_125: FastFutureContext, in__128: DataIn): AetherMethodDescriptor  {
        let nameId_130: bigint;
        let args_131: AetherArgumentDescriptor[];
        let returnTypeId_132: bigint;
        let docId_133: bigint;
        const _mask = in__128.readByte();
        nameId_130 = DeserializerPackNumber.INSTANCE.put(in__128);
        const len_135 = Number(DeserializerPackNumber.INSTANCE.put(in__128));
        args_131 = new Array<AetherArgumentDescriptor>(len_135);
        for (let idx_134 = 0;
        idx_134 < len_135;
        idx_134++)  {
            args_131[idx_134] = AetherArgumentDescriptor.META.deserialize(sCtx_125, in__128);
            
        }
        returnTypeId_132 = DeserializerPackNumber.INSTANCE.put(in__128);
        if (((_mask & 1) === 0))  {
            docId_133 = DeserializerPackNumber.INSTANCE.put(in__128);
            
        }
        else  {
            docId_133 = null;
            
        }
        return new AetherMethodDescriptor(nameId_130, args_131, returnTypeId_132, docId_133);
        
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
    serialize(sCtx_136: FastFutureContext, obj_137: AetherModuleDescriptor, _out_138: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_138, obj_137.stringPool.length);
        for (const el_140 of obj_137.stringPool)  {
            const stringBytes_141 = new TextEncoder().encode(el_140);
            SerializerPackNumber.INSTANCE.put(_out_138, stringBytes_141.length);
            _out_138.write(stringBytes_141);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_138, obj_137.typeRegistry.length);
        for (const el_143 of obj_137.typeRegistry)  {
            AetherTypeDescriptor.META.serialize(sCtx_136, el_143, _out_138);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_138, obj_137.structs.length);
        for (const el_144 of obj_137.structs)  {
            AetherStructDescriptor.META.serialize(sCtx_136, el_144, _out_138);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_138, obj_137.apis.length);
        for (const el_145 of obj_137.apis)  {
            AetherApiDefinition.META.serialize(sCtx_136, el_145, _out_138);
            
        }
        
    }
    deserialize(sCtx_136: FastFutureContext, in__139: DataIn): AetherModuleDescriptor  {
        let stringPool_146: string[];
        let typeRegistry_147: AetherTypeDescriptor[];
        let structs_148: AetherStructDescriptor[];
        let apis_149: AetherApiDefinition[];
        const len_151 = Number(DeserializerPackNumber.INSTANCE.put(in__139));
        stringPool_146 = new Array<string>(len_151);
        for (let idx_150 = 0;
        idx_150 < len_151;
        idx_150++)  {
            let stringBytes_152: Uint8Array;
            const len_154 = Number(DeserializerPackNumber.INSTANCE.put(in__139));
            const bytes_155 = in__139.readBytes(len_154);
            stringBytes_152 = bytes_155;
            stringPool_146[idx_150] = new TextDecoder('utf-8').decode(stringBytes_152);
            
        }
        const len_157 = Number(DeserializerPackNumber.INSTANCE.put(in__139));
        typeRegistry_147 = new Array<AetherTypeDescriptor>(len_157);
        for (let idx_156 = 0;
        idx_156 < len_157;
        idx_156++)  {
            typeRegistry_147[idx_156] = AetherTypeDescriptor.META.deserialize(sCtx_136, in__139);
            
        }
        const len_159 = Number(DeserializerPackNumber.INSTANCE.put(in__139));
        structs_148 = new Array<AetherStructDescriptor>(len_159);
        for (let idx_158 = 0;
        idx_158 < len_159;
        idx_158++)  {
            structs_148[idx_158] = AetherStructDescriptor.META.deserialize(sCtx_136, in__139);
            
        }
        const len_161 = Number(DeserializerPackNumber.INSTANCE.put(in__139));
        apis_149 = new Array<AetherApiDefinition>(len_161);
        for (let idx_160 = 0;
        idx_160 < len_161;
        idx_160++)  {
            apis_149[idx_160] = AetherApiDefinition.META.deserialize(sCtx_136, in__139);
            
        }
        return new AetherModuleDescriptor(stringPool_146, typeRegistry_147, structs_148, apis_149);
        
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
    serialize(sCtx_162: FastFutureContext, obj_163: AetherNullableType, _out_164: DataOut): void  {
        let _mask: number = 0;
        if (obj_163.docId === null) _mask |= 1;
        _out_164.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_164, obj_163.id);
        if (obj_163.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_164, obj_163.docId);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_164, obj_163.wrappedTypeId);
        
    }
    deserialize(sCtx_162: FastFutureContext, in__165: DataIn): AetherNullableType  {
        let id_166: bigint;
        let docId_167: bigint;
        let wrappedTypeId_168: bigint;
        const _mask = in__165.readByte();
        id_166 = DeserializerPackNumber.INSTANCE.put(in__165);
        if (((_mask & 1) === 0))  {
            docId_167 = DeserializerPackNumber.INSTANCE.put(in__165);
            
        }
        else  {
            docId_167 = null;
            
        }
        wrappedTypeId_168 = DeserializerPackNumber.INSTANCE.put(in__165);
        return new AetherNullableType(id_166, docId_167, wrappedTypeId_168);
        
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
export class AetherStreamTypeMetaBodyImpl implements FastMetaType<AetherStreamType>  {
    serialize(sCtx_169: FastFutureContext, obj_170: AetherStreamType, _out_171: DataOut): void  {
        let _mask: number = 0;
        if (obj_170.docId === null) _mask |= 1;
        _out_171.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_171, obj_170.id);
        if (obj_170.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_171, obj_170.docId);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_171, obj_170.apiId);
        _out_171.writeBoolean(obj_170.isCrypto);
        
    }
    deserialize(sCtx_169: FastFutureContext, in__172: DataIn): AetherStreamType  {
        let id_173: bigint;
        let docId_174: bigint;
        let apiId_175: bigint;
        let isCrypto_176: boolean;
        const _mask = in__172.readByte();
        id_173 = DeserializerPackNumber.INSTANCE.put(in__172);
        if (((_mask & 1) === 0))  {
            docId_174 = DeserializerPackNumber.INSTANCE.put(in__172);
            
        }
        else  {
            docId_174 = null;
            
        }
        apiId_175 = DeserializerPackNumber.INSTANCE.put(in__172);
        isCrypto_176 = in__172.readBoolean();
        return new AetherStreamType(id_173, docId_174, apiId_175, isCrypto_176);
        
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
export class AetherStructDescriptorMetaBodyImpl implements FastMetaType<AetherStructDescriptor>  {
    serialize(sCtx_177: FastFutureContext, obj_178: AetherStructDescriptor, _out_179: DataOut): void  {
        let _mask: number = 0;
        if (obj_178.parentTypeId === null) _mask |= 1;
        if (obj_178.docId === null) _mask |= (1 << 1);
        _out_179.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_179, obj_178.baseTypeId);
        if (obj_178.parentTypeId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_179, obj_178.parentTypeId);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_179, obj_178.fields.length);
        for (const el_181 of obj_178.fields)  {
            AetherFieldDescriptor.META.serialize(sCtx_177, el_181, _out_179);
            
        }
        if (obj_178.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_179, obj_178.docId);
            
        }
        
    }
    deserialize(sCtx_177: FastFutureContext, in__180: DataIn): AetherStructDescriptor  {
        let baseTypeId_182: bigint;
        let parentTypeId_183: bigint;
        let fields_184: AetherFieldDescriptor[];
        let docId_185: bigint;
        const _mask = in__180.readByte();
        baseTypeId_182 = DeserializerPackNumber.INSTANCE.put(in__180);
        if (((_mask & 1) === 0))  {
            parentTypeId_183 = DeserializerPackNumber.INSTANCE.put(in__180);
            
        }
        else  {
            parentTypeId_183 = null;
            
        }
        const len_187 = Number(DeserializerPackNumber.INSTANCE.put(in__180));
        fields_184 = new Array<AetherFieldDescriptor>(len_187);
        for (let idx_186 = 0;
        idx_186 < len_187;
        idx_186++)  {
            fields_184[idx_186] = AetherFieldDescriptor.META.deserialize(sCtx_177, in__180);
            
        }
        if (((_mask & (1 << 1)) === 0))  {
            docId_185 = DeserializerPackNumber.INSTANCE.put(in__180);
            
        }
        else  {
            docId_185 = null;
            
        }
        return new AetherStructDescriptor(baseTypeId_182, parentTypeId_183, fields_184, docId_185);
        
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
    serialize(sCtx_188: FastFutureContext, obj_189: ClientInfo, _out_190: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_188, obj_189.uid, _out_190);
        Cloud.META.serialize(sCtx_188, obj_189.cloud, _out_190);
        
    }
    deserialize(sCtx_188: FastFutureContext, in__191: DataIn): ClientInfo  {
        let uid_192: UUID;
        let cloud_193: Cloud;
        uid_192 = FastMeta.META_UUID.deserialize(sCtx_188, in__191);
        cloud_193 = Cloud.META.deserialize(sCtx_188, in__191);
        return new ClientInfo(uid_192, cloud_193);
        
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
    serialize(sCtx_194: FastFutureContext, obj_195: ClientStateForSave, _out_196: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_196, obj_195.registrationUri.length);
        for (const el_198 of obj_195.registrationUri)  {
            FastMeta.META_URI.serialize(sCtx_194, el_198, _out_196);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_196, obj_195.servers.length);
        for (const el_199 of obj_195.servers)  {
            ServerDescriptor.META.serialize(sCtx_194, el_199, _out_196);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_196, obj_195.clients.length);
        for (const el_200 of obj_195.clients)  {
            ClientInfo.META.serialize(sCtx_194, el_200, _out_196);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_196, obj_195.rootSigners.length);
        for (const el_201 of obj_195.rootSigners)  {
            Key.META.serialize(sCtx_194, el_201, _out_196);
            
        }
        CryptoLib.META.serialize(sCtx_194, obj_195.cryptoLib, _out_196);
        _out_196.writeLong(obj_195.pingDuration);
        FastMeta.META_UUID.serialize(sCtx_194, obj_195.parentUid, _out_196);
        _out_196.writeInt(obj_195.countServersForRegistration);
        _out_196.writeLong(obj_195.timeoutForConnectToRegistrationServer);
        FastMeta.META_UUID.serialize(sCtx_194, obj_195.uid, _out_196);
        FastMeta.META_UUID.serialize(sCtx_194, obj_195.alias, _out_196);
        Key.META.serialize(sCtx_194, obj_195.masterKey, _out_196);
        
    }
    deserialize(sCtx_194: FastFutureContext, in__197: DataIn): ClientStateForSave  {
        let registrationUri_202: URI[];
        let servers_203: ServerDescriptor[];
        let clients_204: ClientInfo[];
        let rootSigners_205: Key[];
        let cryptoLib_206: CryptoLib;
        let pingDuration_207: bigint;
        let parentUid_208: UUID;
        let countServersForRegistration_209: number;
        let timeoutForConnectToRegistrationServer_210: bigint;
        let uid_211: UUID;
        let alias_212: UUID;
        let masterKey_213: Key;
        const len_215 = Number(DeserializerPackNumber.INSTANCE.put(in__197));
        registrationUri_202 = new Array<URI>(len_215);
        for (let idx_214 = 0;
        idx_214 < len_215;
        idx_214++)  {
            registrationUri_202[idx_214] = FastMeta.META_URI.deserialize(sCtx_194, in__197);
            
        }
        const len_217 = Number(DeserializerPackNumber.INSTANCE.put(in__197));
        servers_203 = new Array<ServerDescriptor>(len_217);
        for (let idx_216 = 0;
        idx_216 < len_217;
        idx_216++)  {
            servers_203[idx_216] = ServerDescriptor.META.deserialize(sCtx_194, in__197);
            
        }
        const len_219 = Number(DeserializerPackNumber.INSTANCE.put(in__197));
        clients_204 = new Array<ClientInfo>(len_219);
        for (let idx_218 = 0;
        idx_218 < len_219;
        idx_218++)  {
            clients_204[idx_218] = ClientInfo.META.deserialize(sCtx_194, in__197);
            
        }
        const len_221 = Number(DeserializerPackNumber.INSTANCE.put(in__197));
        rootSigners_205 = new Array<Key>(len_221);
        for (let idx_220 = 0;
        idx_220 < len_221;
        idx_220++)  {
            rootSigners_205[idx_220] = Key.META.deserialize(sCtx_194, in__197);
            
        }
        cryptoLib_206 = CryptoLib.META.deserialize(sCtx_194, in__197);
        pingDuration_207 = in__197.readLong();
        parentUid_208 = FastMeta.META_UUID.deserialize(sCtx_194, in__197);
        countServersForRegistration_209 = in__197.readInt();
        timeoutForConnectToRegistrationServer_210 = in__197.readLong();
        uid_211 = FastMeta.META_UUID.deserialize(sCtx_194, in__197);
        alias_212 = FastMeta.META_UUID.deserialize(sCtx_194, in__197);
        masterKey_213 = Key.META.deserialize(sCtx_194, in__197);
        return new ClientStateForSave(registrationUri_202, servers_203, clients_204, rootSigners_205, cryptoLib_206, pingDuration_207, parentUid_208, countServersForRegistration_209, timeoutForConnectToRegistrationServer_210, uid_211, alias_212, masterKey_213);
        
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
    serialize(sCtx_222: FastFutureContext, obj_223: Cloud, _out_224: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_224, obj_223.data.length);
        for (const el_226 of obj_223.data)  {
            _out_224.writeShort(el_226);
            
        }
        
    }
    deserialize(sCtx_222: FastFutureContext, in__225: DataIn): Cloud  {
        let data_227: number[];
        const len_229 = Number(DeserializerPackNumber.INSTANCE.put(in__225));
        data_227 = new Array<number>(len_229);
        for (let idx_228 = 0;
        idx_228 < len_229;
        idx_228++)  {
            data_227[idx_228] = in__225.readShort();
            
        }
        return new Cloud(data_227);
        
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
    serialize(sCtx_230: FastFutureContext, obj_231: CoderAndPort, _out_232: DataOut): void  {
        AetherCodec.META.serialize(sCtx_230, obj_231.codec, _out_232);
        _out_232.writeShort(obj_231.port);
        
    }
    deserialize(sCtx_230: FastFutureContext, in__233: DataIn): CoderAndPort  {
        let codec_234: AetherCodec;
        let port_235: number;
        codec_234 = AetherCodec.META.deserialize(sCtx_230, in__233);
        port_235 = in__233.readShort();
        return new CoderAndPort(codec_234, port_235);
        
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
    serialize(sCtx_236: FastFutureContext, obj_237: FinishResult, _out_238: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_236, obj_237.alias, _out_238);
        FastMeta.META_UUID.serialize(sCtx_236, obj_237.uid, _out_238);
        Cloud.META.serialize(sCtx_236, obj_237.cloud, _out_238);
        
    }
    deserialize(sCtx_236: FastFutureContext, in__239: DataIn): FinishResult  {
        let alias_240: UUID;
        let uid_241: UUID;
        let cloud_242: Cloud;
        alias_240 = FastMeta.META_UUID.deserialize(sCtx_236, in__239);
        uid_241 = FastMeta.META_UUID.deserialize(sCtx_236, in__239);
        cloud_242 = Cloud.META.deserialize(sCtx_236, in__239);
        return new FinishResult(alias_240, uid_241, cloud_242);
        
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
    serialize(sCtx_243: FastFutureContext, obj_244: HydrogenCurvePrivate, _out_245: DataOut): void  {
        if (obj_244.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_244.data must be 32 but was $ {
            obj_244.data.length
        }
        `);
        _out_245.write(obj_244.data);
        
    }
    deserialize(sCtx_243: FastFutureContext, in__246: DataIn): HydrogenCurvePrivate  {
        let data_248: Uint8Array;
        const len_250 = 32;
        const bytes_251 = in__246.readBytes(len_250);
        data_248 = bytes_251;
        return new HydrogenCurvePrivate(data_248);
        
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
    serialize(sCtx_252: FastFutureContext, obj_253: HydrogenCurvePrivate, _out_254: DataOut): void  {
        const typeId = typeof (obj_253 as any).getAetherTypeId === 'function' ? obj_253.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenCurvePrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_254.writeByte(typeId);
        switch(typeId)  {
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_252, obj_253 as any as HydrogenCurvePrivate, _out_254);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_252, obj_253 as any as SodiumChacha20Poly1305, _out_254);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_252, obj_253 as any as HydrogenSecretBox, _out_254);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_252, obj_253 as any as HydrogenCurvePublic, _out_254);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_252, obj_253 as any as SodiumCurvePublic, _out_254);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_252, obj_253 as any as SodiumCurvePrivate, _out_254);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_252, obj_253 as any as SodiumSignPublic, _out_254);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_252, obj_253 as any as HydrogenSignPublic, _out_254);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_252, obj_253 as any as SodiumSignPrivate, _out_254);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_252, obj_253 as any as HydrogenSignPrivate, _out_254);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenCurvePrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_252: FastFutureContext, in__255: DataIn): HydrogenCurvePrivate  {
        const typeId = in__255.readUByte();
        switch(typeId)  {
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_252, in__255) as any as HydrogenCurvePrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_252, in__255) as any as HydrogenCurvePrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_252, in__255) as any as HydrogenCurvePrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_252, in__255) as any as HydrogenCurvePrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_252, in__255) as any as HydrogenCurvePrivate;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_252, in__255) as any as HydrogenCurvePrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_252, in__255) as any as HydrogenCurvePrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_252, in__255) as any as HydrogenCurvePrivate;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_252, in__255) as any as HydrogenCurvePrivate;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_252, in__255) as any as HydrogenCurvePrivate;
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
    serialize(sCtx_256: FastFutureContext, obj_257: HydrogenCurvePublic, _out_258: DataOut): void  {
        if (obj_257.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_257.data must be 32 but was $ {
            obj_257.data.length
        }
        `);
        _out_258.write(obj_257.data);
        
    }
    deserialize(sCtx_256: FastFutureContext, in__259: DataIn): HydrogenCurvePublic  {
        let data_261: Uint8Array;
        const len_263 = 32;
        const bytes_264 = in__259.readBytes(len_263);
        data_261 = bytes_264;
        return new HydrogenCurvePublic(data_261);
        
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
    serialize(sCtx_265: FastFutureContext, obj_266: HydrogenCurvePublic, _out_267: DataOut): void  {
        const typeId = typeof (obj_266 as any).getAetherTypeId === 'function' ? obj_266.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenCurvePublic' with invalid type id $ {
            typeId
        }
        `);
        _out_267.writeByte(typeId);
        switch(typeId)  {
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_265, obj_266 as any as HydrogenCurvePublic, _out_267);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_265, obj_266 as any as SodiumChacha20Poly1305, _out_267);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_265, obj_266 as any as HydrogenSecretBox, _out_267);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_265, obj_266 as any as SodiumCurvePublic, _out_267);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_265, obj_266 as any as HydrogenCurvePrivate, _out_267);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_265, obj_266 as any as SodiumCurvePrivate, _out_267);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_265, obj_266 as any as SodiumSignPublic, _out_267);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_265, obj_266 as any as HydrogenSignPublic, _out_267);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_265, obj_266 as any as SodiumSignPrivate, _out_267);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_265, obj_266 as any as HydrogenSignPrivate, _out_267);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenCurvePublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_265: FastFutureContext, in__268: DataIn): HydrogenCurvePublic  {
        const typeId = in__268.readUByte();
        switch(typeId)  {
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_265, in__268) as any as HydrogenCurvePublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_265, in__268) as any as HydrogenCurvePublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_265, in__268) as any as HydrogenCurvePublic;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_265, in__268) as any as HydrogenCurvePublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_265, in__268) as any as HydrogenCurvePublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_265, in__268) as any as HydrogenCurvePublic;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_265, in__268) as any as HydrogenCurvePublic;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_265, in__268) as any as HydrogenCurvePublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_265, in__268) as any as HydrogenCurvePublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_265, in__268) as any as HydrogenCurvePublic;
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
    serialize(sCtx_269: FastFutureContext, obj_270: HydrogenSecretBox, _out_271: DataOut): void  {
        if (obj_270.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_270.data must be 32 but was $ {
            obj_270.data.length
        }
        `);
        _out_271.write(obj_270.data);
        
    }
    deserialize(sCtx_269: FastFutureContext, in__272: DataIn): HydrogenSecretBox  {
        let data_274: Uint8Array;
        const len_276 = 32;
        const bytes_277 = in__272.readBytes(len_276);
        data_274 = bytes_277;
        return new HydrogenSecretBox(data_274);
        
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
    serialize(sCtx_278: FastFutureContext, obj_279: HydrogenSecretBox, _out_280: DataOut): void  {
        const typeId = typeof (obj_279 as any).getAetherTypeId === 'function' ? obj_279.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenSecretBox' with invalid type id $ {
            typeId
        }
        `);
        _out_280.writeByte(typeId);
        switch(typeId)  {
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_278, obj_279 as any as HydrogenSecretBox, _out_280);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_278, obj_279 as any as SodiumChacha20Poly1305, _out_280);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_278, obj_279 as any as HydrogenCurvePublic, _out_280);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_278, obj_279 as any as SodiumCurvePublic, _out_280);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_278, obj_279 as any as HydrogenCurvePrivate, _out_280);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_278, obj_279 as any as SodiumCurvePrivate, _out_280);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_278, obj_279 as any as SodiumSignPublic, _out_280);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_278, obj_279 as any as HydrogenSignPublic, _out_280);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_278, obj_279 as any as SodiumSignPrivate, _out_280);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_278, obj_279 as any as HydrogenSignPrivate, _out_280);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenSecretBox' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_278: FastFutureContext, in__281: DataIn): HydrogenSecretBox  {
        const typeId = in__281.readUByte();
        switch(typeId)  {
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_278, in__281) as any as HydrogenSecretBox;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_278, in__281) as any as HydrogenSecretBox;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_278, in__281) as any as HydrogenSecretBox;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_278, in__281) as any as HydrogenSecretBox;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_278, in__281) as any as HydrogenSecretBox;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_278, in__281) as any as HydrogenSecretBox;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_278, in__281) as any as HydrogenSecretBox;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_278, in__281) as any as HydrogenSecretBox;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_278, in__281) as any as HydrogenSecretBox;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_278, in__281) as any as HydrogenSecretBox;
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
    serialize(sCtx_282: FastFutureContext, obj_283: HydrogenSignPrivate, _out_284: DataOut): void  {
        if (obj_283.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_283.data must be 64 but was $ {
            obj_283.data.length
        }
        `);
        _out_284.write(obj_283.data);
        
    }
    deserialize(sCtx_282: FastFutureContext, in__285: DataIn): HydrogenSignPrivate  {
        let data_287: Uint8Array;
        const len_289 = 64;
        const bytes_290 = in__285.readBytes(len_289);
        data_287 = bytes_290;
        return new HydrogenSignPrivate(data_287);
        
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
    serialize(sCtx_291: FastFutureContext, obj_292: HydrogenSignPrivate, _out_293: DataOut): void  {
        const typeId = typeof (obj_292 as any).getAetherTypeId === 'function' ? obj_292.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenSignPrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_293.writeByte(typeId);
        switch(typeId)  {
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_291, obj_292 as any as HydrogenSignPrivate, _out_293);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_291, obj_292 as any as SodiumChacha20Poly1305, _out_293);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_291, obj_292 as any as HydrogenSecretBox, _out_293);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_291, obj_292 as any as HydrogenCurvePublic, _out_293);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_291, obj_292 as any as SodiumCurvePublic, _out_293);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_291, obj_292 as any as HydrogenCurvePrivate, _out_293);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_291, obj_292 as any as SodiumCurvePrivate, _out_293);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_291, obj_292 as any as SodiumSignPublic, _out_293);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_291, obj_292 as any as HydrogenSignPublic, _out_293);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_291, obj_292 as any as SodiumSignPrivate, _out_293);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenSignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_291: FastFutureContext, in__294: DataIn): HydrogenSignPrivate  {
        const typeId = in__294.readUByte();
        switch(typeId)  {
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_291, in__294) as any as HydrogenSignPrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_291, in__294) as any as HydrogenSignPrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_291, in__294) as any as HydrogenSignPrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_291, in__294) as any as HydrogenSignPrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_291, in__294) as any as HydrogenSignPrivate;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_291, in__294) as any as HydrogenSignPrivate;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_291, in__294) as any as HydrogenSignPrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_291, in__294) as any as HydrogenSignPrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_291, in__294) as any as HydrogenSignPrivate;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_291, in__294) as any as HydrogenSignPrivate;
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
    serialize(sCtx_295: FastFutureContext, obj_296: HydrogenSignPublic, _out_297: DataOut): void  {
        if (obj_296.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_296.data must be 32 but was $ {
            obj_296.data.length
        }
        `);
        _out_297.write(obj_296.data);
        
    }
    deserialize(sCtx_295: FastFutureContext, in__298: DataIn): HydrogenSignPublic  {
        let data_300: Uint8Array;
        const len_302 = 32;
        const bytes_303 = in__298.readBytes(len_302);
        data_300 = bytes_303;
        return new HydrogenSignPublic(data_300);
        
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
    serialize(sCtx_304: FastFutureContext, obj_305: HydrogenSignPublic, _out_306: DataOut): void  {
        const typeId = typeof (obj_305 as any).getAetherTypeId === 'function' ? obj_305.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenSignPublic' with invalid type id $ {
            typeId
        }
        `);
        _out_306.writeByte(typeId);
        switch(typeId)  {
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_304, obj_305 as any as HydrogenSignPublic, _out_306);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_304, obj_305 as any as SodiumChacha20Poly1305, _out_306);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_304, obj_305 as any as HydrogenSecretBox, _out_306);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_304, obj_305 as any as HydrogenCurvePublic, _out_306);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_304, obj_305 as any as SodiumCurvePublic, _out_306);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_304, obj_305 as any as HydrogenCurvePrivate, _out_306);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_304, obj_305 as any as SodiumCurvePrivate, _out_306);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_304, obj_305 as any as SodiumSignPublic, _out_306);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_304, obj_305 as any as SodiumSignPrivate, _out_306);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_304, obj_305 as any as HydrogenSignPrivate, _out_306);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenSignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_304: FastFutureContext, in__307: DataIn): HydrogenSignPublic  {
        const typeId = in__307.readUByte();
        switch(typeId)  {
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_304, in__307) as any as HydrogenSignPublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_304, in__307) as any as HydrogenSignPublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_304, in__307) as any as HydrogenSignPublic;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_304, in__307) as any as HydrogenSignPublic;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_304, in__307) as any as HydrogenSignPublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_304, in__307) as any as HydrogenSignPublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_304, in__307) as any as HydrogenSignPublic;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_304, in__307) as any as HydrogenSignPublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_304, in__307) as any as HydrogenSignPublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_304, in__307) as any as HydrogenSignPublic;
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
    serialize(sCtx_308: FastFutureContext, obj_309: IPAddressAndPorts, _out_310: DataOut): void  {
        IPAddress.META.serialize(sCtx_308, obj_309.address, _out_310);
        SerializerPackNumber.INSTANCE.put(_out_310, obj_309.coderAndPorts.length);
        for (const el_312 of obj_309.coderAndPorts)  {
            CoderAndPort.META.serialize(sCtx_308, el_312, _out_310);
            
        }
        
    }
    deserialize(sCtx_308: FastFutureContext, in__311: DataIn): IPAddressAndPorts  {
        let address_313: IPAddress;
        let coderAndPorts_314: CoderAndPort[];
        address_313 = IPAddress.META.deserialize(sCtx_308, in__311);
        const len_316 = Number(DeserializerPackNumber.INSTANCE.put(in__311));
        coderAndPorts_314 = new Array<CoderAndPort>(len_316);
        for (let idx_315 = 0;
        idx_315 < len_316;
        idx_315++)  {
            coderAndPorts_314[idx_315] = CoderAndPort.META.deserialize(sCtx_308, in__311);
            
        }
        return new IPAddressAndPorts(address_313, coderAndPorts_314);
        
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
    serialize(sCtx_317: FastFutureContext, obj_318: IPAddressAndPortsList, _out_319: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_319, obj_318.addresses.length);
        for (const el_321 of obj_318.addresses)  {
            IPAddressAndPorts.META.serialize(sCtx_317, el_321, _out_319);
            
        }
        
    }
    deserialize(sCtx_317: FastFutureContext, in__320: DataIn): IPAddressAndPortsList  {
        let addresses_322: IPAddressAndPorts[];
        const len_324 = Number(DeserializerPackNumber.INSTANCE.put(in__320));
        addresses_322 = new Array<IPAddressAndPorts>(len_324);
        for (let idx_323 = 0;
        idx_323 < len_324;
        idx_323++)  {
            addresses_322[idx_323] = IPAddressAndPorts.META.deserialize(sCtx_317, in__320);
            
        }
        return new IPAddressAndPortsList(addresses_322);
        
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
    serialize(sCtx_325: FastFutureContext, obj_326: IPAddressV4, _out_327: DataOut): void  {
        if (obj_326.data.length !== 4) throw new Error(`IllegalStateException: Array length for obj_326.data must be 4 but was $ {
            obj_326.data.length
        }
        `);
        _out_327.write(obj_326.data);
        
    }
    deserialize(sCtx_325: FastFutureContext, in__328: DataIn): IPAddressV4  {
        let data_330: Uint8Array;
        const len_332 = 4;
        const bytes_333 = in__328.readBytes(len_332);
        data_330 = bytes_333;
        return new IPAddressV4(data_330);
        
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
    serialize(sCtx_334: FastFutureContext, obj_335: IPAddressV4, _out_336: DataOut): void  {
        const typeId = typeof (obj_335 as any).getAetherTypeId === 'function' ? obj_335.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'IPAddressV4' with invalid type id $ {
            typeId
        }
        `);
        _out_336.writeByte(typeId);
        switch(typeId)  {
            case 1: (IPAddressV4 as any).META_BODY.serialize(sCtx_334, obj_335 as any as IPAddressV4, _out_336);
            break;
            case 2: (IPAddressV6 as any).META_BODY.serialize(sCtx_334, obj_335 as any as IPAddressV6, _out_336);
            break;
            default: throw new Error(`Cannot serialize 'IPAddressV4' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_334: FastFutureContext, in__337: DataIn): IPAddressV4  {
        const typeId = in__337.readUByte();
        switch(typeId)  {
            case 1: return (IPAddressV4 as any).META_BODY.deserialize(sCtx_334, in__337) as any as IPAddressV4;
            case 2: return (IPAddressV6 as any).META_BODY.deserialize(sCtx_334, in__337) as any as IPAddressV4;
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
    serialize(sCtx_338: FastFutureContext, obj_339: IPAddressV6, _out_340: DataOut): void  {
        if (obj_339.data.length !== 6) throw new Error(`IllegalStateException: Array length for obj_339.data must be 6 but was $ {
            obj_339.data.length
        }
        `);
        _out_340.write(obj_339.data);
        
    }
    deserialize(sCtx_338: FastFutureContext, in__341: DataIn): IPAddressV6  {
        let data_343: Uint8Array;
        const len_345 = 6;
        const bytes_346 = in__341.readBytes(len_345);
        data_343 = bytes_346;
        return new IPAddressV6(data_343);
        
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
    serialize(sCtx_347: FastFutureContext, obj_348: IPAddressV6, _out_349: DataOut): void  {
        const typeId = typeof (obj_348 as any).getAetherTypeId === 'function' ? obj_348.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'IPAddressV6' with invalid type id $ {
            typeId
        }
        `);
        _out_349.writeByte(typeId);
        switch(typeId)  {
            case 2: (IPAddressV6 as any).META_BODY.serialize(sCtx_347, obj_348 as any as IPAddressV6, _out_349);
            break;
            case 1: (IPAddressV4 as any).META_BODY.serialize(sCtx_347, obj_348 as any as IPAddressV4, _out_349);
            break;
            default: throw new Error(`Cannot serialize 'IPAddressV6' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_347: FastFutureContext, in__350: DataIn): IPAddressV6  {
        const typeId = in__350.readUByte();
        switch(typeId)  {
            case 2: return (IPAddressV6 as any).META_BODY.deserialize(sCtx_347, in__350) as any as IPAddressV6;
            case 1: return (IPAddressV4 as any).META_BODY.deserialize(sCtx_347, in__350) as any as IPAddressV6;
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
export class MessageMetaBodyImpl implements FastMetaType<Message>  {
    serialize(sCtx_351: FastFutureContext, obj_352: Message, _out_353: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_351, obj_352.uid, _out_353);
        SerializerPackNumber.INSTANCE.put(_out_353, obj_352.data.length);
        _out_353.write(obj_352.data);
        
    }
    deserialize(sCtx_351: FastFutureContext, in__354: DataIn): Message  {
        let uid_356: UUID;
        let data_357: Uint8Array;
        uid_356 = FastMeta.META_UUID.deserialize(sCtx_351, in__354);
        const len_359 = Number(DeserializerPackNumber.INSTANCE.put(in__354));
        const bytes_360 = in__354.readBytes(len_359);
        data_357 = bytes_360;
        return new Message(uid_356, data_357);
        
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
    serialize(sCtx_361: FastFutureContext, obj_362: MoneyOperation, _out_363: DataOut): void  {
        _out_363.writeLong(obj_362.id);
        FastMeta.META_UUID.serialize(sCtx_361, obj_362.from, _out_363);
        FastMeta.META_UUID.serialize(sCtx_361, obj_362.to, _out_363);
        _out_363.writeLong(obj_362.amount);
        _out_363.writeLong(obj_362.time);
        _out_363.writeBoolean(obj_362.credit);
        Status.META.serialize(sCtx_361, obj_362.status, _out_363);
        
    }
    deserialize(sCtx_361: FastFutureContext, in__364: DataIn): MoneyOperation  {
        let id_365: bigint;
        let from_366: UUID;
        let to_367: UUID;
        let amount_368: bigint;
        let time_369: bigint;
        let credit_370: boolean;
        let status_371: Status;
        id_365 = in__364.readLong();
        from_366 = FastMeta.META_UUID.deserialize(sCtx_361, in__364);
        to_367 = FastMeta.META_UUID.deserialize(sCtx_361, in__364);
        amount_368 = in__364.readLong();
        time_369 = in__364.readLong();
        credit_370 = in__364.readBoolean();
        status_371 = Status.META.deserialize(sCtx_361, in__364);
        return new MoneyOperation(id_365, from_366, to_367, amount_368, time_369, credit_370, status_371);
        
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
    serialize(sCtx_372: FastFutureContext, obj_373: PairKeysAsym, _out_374: DataOut): void  {
        Key.META.serialize(sCtx_372, obj_373.privateKey, _out_374);
        Key.META.serialize(sCtx_372, obj_373.publicKey, _out_374);
        
    }
    deserialize(sCtx_372: FastFutureContext, in__375: DataIn): PairKeysAsym  {
        let privateKey_376: Key;
        let publicKey_377: Key;
        privateKey_376 = Key.META.deserialize(sCtx_372, in__375);
        publicKey_377 = Key.META.deserialize(sCtx_372, in__375);
        return new PairKeysAsym(privateKey_376, publicKey_377);
        
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
    serialize(sCtx_378: FastFutureContext, obj_379: PairKeysAsym, _out_380: DataOut): void  {
        const typeId = typeof (obj_379 as any).getAetherTypeId === 'function' ? obj_379.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeysAsym' with invalid type id $ {
            typeId
        }
        `);
        _out_380.writeByte(typeId);
        switch(typeId)  {
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_378, obj_379 as any as PairKeysAsym, _out_380);
            break;
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_378, obj_379 as any as PairKeysSign, _out_380);
            break;
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_378, obj_379 as any as PairKeysAsymSigned, _out_380);
            break;
            default: throw new Error(`Cannot serialize 'PairKeysAsym' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_378: FastFutureContext, in__381: DataIn): PairKeysAsym  {
        const typeId = in__381.readUByte();
        switch(typeId)  {
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_378, in__381) as any as PairKeysAsym;
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_378, in__381) as any as PairKeysAsym;
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_378, in__381) as any as PairKeysAsym;
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
    serialize(sCtx_382: FastFutureContext, obj_383: PairKeysAsymSigned, _out_384: DataOut): void  {
        Key.META.serialize(sCtx_382, obj_383.privateKey, _out_384);
        SignedKey.META.serialize(sCtx_382, obj_383.publicKey, _out_384);
        
    }
    deserialize(sCtx_382: FastFutureContext, in__385: DataIn): PairKeysAsymSigned  {
        let privateKey_386: Key;
        let publicKey_387: SignedKey;
        privateKey_386 = Key.META.deserialize(sCtx_382, in__385);
        publicKey_387 = SignedKey.META.deserialize(sCtx_382, in__385);
        return new PairKeysAsymSigned(privateKey_386, publicKey_387);
        
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
    serialize(sCtx_388: FastFutureContext, obj_389: PairKeysAsymSigned, _out_390: DataOut): void  {
        const typeId = typeof (obj_389 as any).getAetherTypeId === 'function' ? obj_389.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeysAsymSigned' with invalid type id $ {
            typeId
        }
        `);
        _out_390.writeByte(typeId);
        switch(typeId)  {
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_388, obj_389 as any as PairKeysAsymSigned, _out_390);
            break;
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_388, obj_389 as any as PairKeysSign, _out_390);
            break;
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_388, obj_389 as any as PairKeysAsym, _out_390);
            break;
            default: throw new Error(`Cannot serialize 'PairKeysAsymSigned' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_388: FastFutureContext, in__391: DataIn): PairKeysAsymSigned  {
        const typeId = in__391.readUByte();
        switch(typeId)  {
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_388, in__391) as any as PairKeysAsymSigned;
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_388, in__391) as any as PairKeysAsymSigned;
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_388, in__391) as any as PairKeysAsymSigned;
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
    serialize(sCtx_392: FastFutureContext, obj_393: PairKeysSign, _out_394: DataOut): void  {
        Key.META.serialize(sCtx_392, obj_393.privateKey, _out_394);
        Key.META.serialize(sCtx_392, obj_393.publicKey, _out_394);
        
    }
    deserialize(sCtx_392: FastFutureContext, in__395: DataIn): PairKeysSign  {
        let privateKey_396: Key;
        let publicKey_397: Key;
        privateKey_396 = Key.META.deserialize(sCtx_392, in__395);
        publicKey_397 = Key.META.deserialize(sCtx_392, in__395);
        return new PairKeysSign(privateKey_396, publicKey_397);
        
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
    serialize(sCtx_398: FastFutureContext, obj_399: PairKeysSign, _out_400: DataOut): void  {
        const typeId = typeof (obj_399 as any).getAetherTypeId === 'function' ? obj_399.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeysSign' with invalid type id $ {
            typeId
        }
        `);
        _out_400.writeByte(typeId);
        switch(typeId)  {
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_398, obj_399 as any as PairKeysSign, _out_400);
            break;
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_398, obj_399 as any as PairKeysAsym, _out_400);
            break;
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_398, obj_399 as any as PairKeysAsymSigned, _out_400);
            break;
            default: throw new Error(`Cannot serialize 'PairKeysSign' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_398: FastFutureContext, in__401: DataIn): PairKeysSign  {
        const typeId = in__401.readUByte();
        switch(typeId)  {
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_398, in__401) as any as PairKeysSign;
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_398, in__401) as any as PairKeysSign;
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_398, in__401) as any as PairKeysSign;
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
    serialize(sCtx_402: FastFutureContext, obj_403: ServerDescriptor, _out_404: DataOut): void  {
        _out_404.writeShort(obj_403.id);
        IPAddressAndPortsList.META.serialize(sCtx_402, obj_403.ipAddress, _out_404);
        
    }
    deserialize(sCtx_402: FastFutureContext, in__405: DataIn): ServerDescriptor  {
        let id_406: number;
        let ipAddress_407: IPAddressAndPortsList;
        id_406 = in__405.readShort();
        ipAddress_407 = IPAddressAndPortsList.META.deserialize(sCtx_402, in__405);
        return new ServerDescriptor(id_406, ipAddress_407);
        
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
    serialize(sCtx_408: FastFutureContext, obj_409: SignAE_ED25519, _out_410: DataOut): void  {
        if (obj_409.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_409.data must be 64 but was $ {
            obj_409.data.length
        }
        `);
        _out_410.write(obj_409.data);
        
    }
    deserialize(sCtx_408: FastFutureContext, in__411: DataIn): SignAE_ED25519  {
        let data_413: Uint8Array;
        const len_415 = 64;
        const bytes_416 = in__411.readBytes(len_415);
        data_413 = bytes_416;
        return new SignAE_ED25519(data_413);
        
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
    serialize(sCtx_417: FastFutureContext, obj_418: SignAE_ED25519, _out_419: DataOut): void  {
        const typeId = typeof (obj_418 as any).getAetherTypeId === 'function' ? obj_418.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SignAE_ED25519' with invalid type id $ {
            typeId
        }
        `);
        _out_419.writeByte(typeId);
        switch(typeId)  {
            case 1: (SignAE_ED25519 as any).META_BODY.serialize(sCtx_417, obj_418 as any as SignAE_ED25519, _out_419);
            break;
            case 2: (SignHYDROGEN as any).META_BODY.serialize(sCtx_417, obj_418 as any as SignHYDROGEN, _out_419);
            break;
            default: throw new Error(`Cannot serialize 'SignAE_ED25519' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_417: FastFutureContext, in__420: DataIn): SignAE_ED25519  {
        const typeId = in__420.readUByte();
        switch(typeId)  {
            case 1: return (SignAE_ED25519 as any).META_BODY.deserialize(sCtx_417, in__420) as any as SignAE_ED25519;
            case 2: return (SignHYDROGEN as any).META_BODY.deserialize(sCtx_417, in__420) as any as SignAE_ED25519;
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
    serialize(sCtx_421: FastFutureContext, obj_422: SignedKey, _out_423: DataOut): void  {
        Key.META.serialize(sCtx_421, obj_422.key, _out_423);
        Sign.META.serialize(sCtx_421, obj_422.sign, _out_423);
        
    }
    deserialize(sCtx_421: FastFutureContext, in__424: DataIn): SignedKey  {
        let _key_425: Key;
        let sign_426: Sign;
        _key_425 = Key.META.deserialize(sCtx_421, in__424);
        sign_426 = Sign.META.deserialize(sCtx_421, in__424);
        return new SignedKey(_key_425, sign_426);
        
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
    serialize(sCtx_427: FastFutureContext, obj_428: SignHYDROGEN, _out_429: DataOut): void  {
        if (obj_428.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_428.data must be 64 but was $ {
            obj_428.data.length
        }
        `);
        _out_429.write(obj_428.data);
        
    }
    deserialize(sCtx_427: FastFutureContext, in__430: DataIn): SignHYDROGEN  {
        let data_432: Uint8Array;
        const len_434 = 64;
        const bytes_435 = in__430.readBytes(len_434);
        data_432 = bytes_435;
        return new SignHYDROGEN(data_432);
        
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
    serialize(sCtx_436: FastFutureContext, obj_437: SignHYDROGEN, _out_438: DataOut): void  {
        const typeId = typeof (obj_437 as any).getAetherTypeId === 'function' ? obj_437.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SignHYDROGEN' with invalid type id $ {
            typeId
        }
        `);
        _out_438.writeByte(typeId);
        switch(typeId)  {
            case 2: (SignHYDROGEN as any).META_BODY.serialize(sCtx_436, obj_437 as any as SignHYDROGEN, _out_438);
            break;
            case 1: (SignAE_ED25519 as any).META_BODY.serialize(sCtx_436, obj_437 as any as SignAE_ED25519, _out_438);
            break;
            default: throw new Error(`Cannot serialize 'SignHYDROGEN' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_436: FastFutureContext, in__439: DataIn): SignHYDROGEN  {
        const typeId = in__439.readUByte();
        switch(typeId)  {
            case 2: return (SignHYDROGEN as any).META_BODY.deserialize(sCtx_436, in__439) as any as SignHYDROGEN;
            case 1: return (SignAE_ED25519 as any).META_BODY.deserialize(sCtx_436, in__439) as any as SignHYDROGEN;
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
    serialize(sCtx_440: FastFutureContext, obj_441: SodiumChacha20Poly1305, _out_442: DataOut): void  {
        if (obj_441.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_441.data must be 32 but was $ {
            obj_441.data.length
        }
        `);
        _out_442.write(obj_441.data);
        
    }
    deserialize(sCtx_440: FastFutureContext, in__443: DataIn): SodiumChacha20Poly1305  {
        let data_445: Uint8Array;
        const len_447 = 32;
        const bytes_448 = in__443.readBytes(len_447);
        data_445 = bytes_448;
        return new SodiumChacha20Poly1305(data_445);
        
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
    serialize(sCtx_449: FastFutureContext, obj_450: SodiumChacha20Poly1305, _out_451: DataOut): void  {
        const typeId = typeof (obj_450 as any).getAetherTypeId === 'function' ? obj_450.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumChacha20Poly1305' with invalid type id $ {
            typeId
        }
        `);
        _out_451.writeByte(typeId);
        switch(typeId)  {
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_449, obj_450 as any as SodiumChacha20Poly1305, _out_451);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_449, obj_450 as any as HydrogenSecretBox, _out_451);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_449, obj_450 as any as HydrogenCurvePublic, _out_451);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_449, obj_450 as any as SodiumCurvePublic, _out_451);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_449, obj_450 as any as HydrogenCurvePrivate, _out_451);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_449, obj_450 as any as SodiumCurvePrivate, _out_451);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_449, obj_450 as any as SodiumSignPublic, _out_451);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_449, obj_450 as any as HydrogenSignPublic, _out_451);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_449, obj_450 as any as SodiumSignPrivate, _out_451);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_449, obj_450 as any as HydrogenSignPrivate, _out_451);
            break;
            default: throw new Error(`Cannot serialize 'SodiumChacha20Poly1305' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_449: FastFutureContext, in__452: DataIn): SodiumChacha20Poly1305  {
        const typeId = in__452.readUByte();
        switch(typeId)  {
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_449, in__452) as any as SodiumChacha20Poly1305;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_449, in__452) as any as SodiumChacha20Poly1305;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_449, in__452) as any as SodiumChacha20Poly1305;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_449, in__452) as any as SodiumChacha20Poly1305;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_449, in__452) as any as SodiumChacha20Poly1305;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_449, in__452) as any as SodiumChacha20Poly1305;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_449, in__452) as any as SodiumChacha20Poly1305;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_449, in__452) as any as SodiumChacha20Poly1305;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_449, in__452) as any as SodiumChacha20Poly1305;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_449, in__452) as any as SodiumChacha20Poly1305;
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
    serialize(sCtx_453: FastFutureContext, obj_454: SodiumCurvePrivate, _out_455: DataOut): void  {
        if (obj_454.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_454.data must be 32 but was $ {
            obj_454.data.length
        }
        `);
        _out_455.write(obj_454.data);
        
    }
    deserialize(sCtx_453: FastFutureContext, in__456: DataIn): SodiumCurvePrivate  {
        let data_458: Uint8Array;
        const len_460 = 32;
        const bytes_461 = in__456.readBytes(len_460);
        data_458 = bytes_461;
        return new SodiumCurvePrivate(data_458);
        
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
    serialize(sCtx_462: FastFutureContext, obj_463: SodiumCurvePrivate, _out_464: DataOut): void  {
        const typeId = typeof (obj_463 as any).getAetherTypeId === 'function' ? obj_463.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumCurvePrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_464.writeByte(typeId);
        switch(typeId)  {
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_462, obj_463 as any as SodiumCurvePrivate, _out_464);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_462, obj_463 as any as SodiumChacha20Poly1305, _out_464);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_462, obj_463 as any as HydrogenSecretBox, _out_464);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_462, obj_463 as any as HydrogenCurvePublic, _out_464);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_462, obj_463 as any as SodiumCurvePublic, _out_464);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_462, obj_463 as any as HydrogenCurvePrivate, _out_464);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_462, obj_463 as any as SodiumSignPublic, _out_464);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_462, obj_463 as any as HydrogenSignPublic, _out_464);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_462, obj_463 as any as SodiumSignPrivate, _out_464);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_462, obj_463 as any as HydrogenSignPrivate, _out_464);
            break;
            default: throw new Error(`Cannot serialize 'SodiumCurvePrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_462: FastFutureContext, in__465: DataIn): SodiumCurvePrivate  {
        const typeId = in__465.readUByte();
        switch(typeId)  {
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_462, in__465) as any as SodiumCurvePrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_462, in__465) as any as SodiumCurvePrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_462, in__465) as any as SodiumCurvePrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_462, in__465) as any as SodiumCurvePrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_462, in__465) as any as SodiumCurvePrivate;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_462, in__465) as any as SodiumCurvePrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_462, in__465) as any as SodiumCurvePrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_462, in__465) as any as SodiumCurvePrivate;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_462, in__465) as any as SodiumCurvePrivate;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_462, in__465) as any as SodiumCurvePrivate;
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
    serialize(sCtx_466: FastFutureContext, obj_467: SodiumCurvePublic, _out_468: DataOut): void  {
        if (obj_467.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_467.data must be 32 but was $ {
            obj_467.data.length
        }
        `);
        _out_468.write(obj_467.data);
        
    }
    deserialize(sCtx_466: FastFutureContext, in__469: DataIn): SodiumCurvePublic  {
        let data_471: Uint8Array;
        const len_473 = 32;
        const bytes_474 = in__469.readBytes(len_473);
        data_471 = bytes_474;
        return new SodiumCurvePublic(data_471);
        
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
    serialize(sCtx_475: FastFutureContext, obj_476: SodiumCurvePublic, _out_477: DataOut): void  {
        const typeId = typeof (obj_476 as any).getAetherTypeId === 'function' ? obj_476.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumCurvePublic' with invalid type id $ {
            typeId
        }
        `);
        _out_477.writeByte(typeId);
        switch(typeId)  {
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_475, obj_476 as any as SodiumCurvePublic, _out_477);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_475, obj_476 as any as SodiumChacha20Poly1305, _out_477);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_475, obj_476 as any as HydrogenSecretBox, _out_477);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_475, obj_476 as any as HydrogenCurvePublic, _out_477);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_475, obj_476 as any as HydrogenCurvePrivate, _out_477);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_475, obj_476 as any as SodiumCurvePrivate, _out_477);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_475, obj_476 as any as SodiumSignPublic, _out_477);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_475, obj_476 as any as HydrogenSignPublic, _out_477);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_475, obj_476 as any as SodiumSignPrivate, _out_477);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_475, obj_476 as any as HydrogenSignPrivate, _out_477);
            break;
            default: throw new Error(`Cannot serialize 'SodiumCurvePublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_475: FastFutureContext, in__478: DataIn): SodiumCurvePublic  {
        const typeId = in__478.readUByte();
        switch(typeId)  {
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_475, in__478) as any as SodiumCurvePublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_475, in__478) as any as SodiumCurvePublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_475, in__478) as any as SodiumCurvePublic;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_475, in__478) as any as SodiumCurvePublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_475, in__478) as any as SodiumCurvePublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_475, in__478) as any as SodiumCurvePublic;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_475, in__478) as any as SodiumCurvePublic;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_475, in__478) as any as SodiumCurvePublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_475, in__478) as any as SodiumCurvePublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_475, in__478) as any as SodiumCurvePublic;
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
    serialize(sCtx_479: FastFutureContext, obj_480: SodiumSignPrivate, _out_481: DataOut): void  {
        if (obj_480.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_480.data must be 64 but was $ {
            obj_480.data.length
        }
        `);
        _out_481.write(obj_480.data);
        
    }
    deserialize(sCtx_479: FastFutureContext, in__482: DataIn): SodiumSignPrivate  {
        let data_484: Uint8Array;
        const len_486 = 64;
        const bytes_487 = in__482.readBytes(len_486);
        data_484 = bytes_487;
        return new SodiumSignPrivate(data_484);
        
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
    serialize(sCtx_488: FastFutureContext, obj_489: SodiumSignPrivate, _out_490: DataOut): void  {
        const typeId = typeof (obj_489 as any).getAetherTypeId === 'function' ? obj_489.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumSignPrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_490.writeByte(typeId);
        switch(typeId)  {
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_488, obj_489 as any as SodiumSignPrivate, _out_490);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_488, obj_489 as any as SodiumChacha20Poly1305, _out_490);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_488, obj_489 as any as HydrogenSecretBox, _out_490);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_488, obj_489 as any as HydrogenCurvePublic, _out_490);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_488, obj_489 as any as SodiumCurvePublic, _out_490);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_488, obj_489 as any as HydrogenCurvePrivate, _out_490);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_488, obj_489 as any as SodiumCurvePrivate, _out_490);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_488, obj_489 as any as SodiumSignPublic, _out_490);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_488, obj_489 as any as HydrogenSignPublic, _out_490);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_488, obj_489 as any as HydrogenSignPrivate, _out_490);
            break;
            default: throw new Error(`Cannot serialize 'SodiumSignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_488: FastFutureContext, in__491: DataIn): SodiumSignPrivate  {
        const typeId = in__491.readUByte();
        switch(typeId)  {
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_488, in__491) as any as SodiumSignPrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_488, in__491) as any as SodiumSignPrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_488, in__491) as any as SodiumSignPrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_488, in__491) as any as SodiumSignPrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_488, in__491) as any as SodiumSignPrivate;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_488, in__491) as any as SodiumSignPrivate;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_488, in__491) as any as SodiumSignPrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_488, in__491) as any as SodiumSignPrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_488, in__491) as any as SodiumSignPrivate;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_488, in__491) as any as SodiumSignPrivate;
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
    serialize(sCtx_492: FastFutureContext, obj_493: SodiumSignPublic, _out_494: DataOut): void  {
        if (obj_493.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_493.data must be 32 but was $ {
            obj_493.data.length
        }
        `);
        _out_494.write(obj_493.data);
        
    }
    deserialize(sCtx_492: FastFutureContext, in__495: DataIn): SodiumSignPublic  {
        let data_497: Uint8Array;
        const len_499 = 32;
        const bytes_500 = in__495.readBytes(len_499);
        data_497 = bytes_500;
        return new SodiumSignPublic(data_497);
        
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
    serialize(sCtx_501: FastFutureContext, obj_502: SodiumSignPublic, _out_503: DataOut): void  {
        const typeId = typeof (obj_502 as any).getAetherTypeId === 'function' ? obj_502.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumSignPublic' with invalid type id $ {
            typeId
        }
        `);
        _out_503.writeByte(typeId);
        switch(typeId)  {
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_501, obj_502 as any as SodiumSignPublic, _out_503);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_501, obj_502 as any as SodiumChacha20Poly1305, _out_503);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_501, obj_502 as any as HydrogenSecretBox, _out_503);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_501, obj_502 as any as HydrogenCurvePublic, _out_503);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_501, obj_502 as any as SodiumCurvePublic, _out_503);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_501, obj_502 as any as HydrogenCurvePrivate, _out_503);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_501, obj_502 as any as SodiumCurvePrivate, _out_503);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_501, obj_502 as any as HydrogenSignPublic, _out_503);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_501, obj_502 as any as SodiumSignPrivate, _out_503);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_501, obj_502 as any as HydrogenSignPrivate, _out_503);
            break;
            default: throw new Error(`Cannot serialize 'SodiumSignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_501: FastFutureContext, in__504: DataIn): SodiumSignPublic  {
        const typeId = in__504.readUByte();
        switch(typeId)  {
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_501, in__504) as any as SodiumSignPublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_501, in__504) as any as SodiumSignPublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_501, in__504) as any as SodiumSignPublic;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_501, in__504) as any as SodiumSignPublic;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_501, in__504) as any as SodiumSignPublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_501, in__504) as any as SodiumSignPublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_501, in__504) as any as SodiumSignPublic;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_501, in__504) as any as SodiumSignPublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_501, in__504) as any as SodiumSignPublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_501, in__504) as any as SodiumSignPublic;
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
    serialize(sCtx_505: FastFutureContext, obj_506: TelemetryCPP, _out_507: DataOut): void  {
        _out_507.writeInt(obj_506.utm_id);
        SerializerPackNumber.INSTANCE.put(_out_507, obj_506.blob.length);
        _out_507.write(obj_506.blob);
        const stringBytes_510 = new TextEncoder().encode(obj_506.lib_version);
        SerializerPackNumber.INSTANCE.put(_out_507, stringBytes_510.length);
        _out_507.write(stringBytes_510);
        const stringBytes_512 = new TextEncoder().encode(obj_506.os);
        SerializerPackNumber.INSTANCE.put(_out_507, stringBytes_512.length);
        _out_507.write(stringBytes_512);
        const stringBytes_514 = new TextEncoder().encode(obj_506.compiler);
        SerializerPackNumber.INSTANCE.put(_out_507, stringBytes_514.length);
        _out_507.write(stringBytes_514);
        
    }
    deserialize(sCtx_505: FastFutureContext, in__508: DataIn): TelemetryCPP  {
        let utm_id_516: number;
        let blob_517: Uint8Array;
        let lib_version_518: string;
        let os_519: string;
        let compiler_520: string;
        utm_id_516 = in__508.readInt();
        const len_522 = Number(DeserializerPackNumber.INSTANCE.put(in__508));
        const bytes_523 = in__508.readBytes(len_522);
        blob_517 = bytes_523;
        let stringBytes_524: Uint8Array;
        const len_526 = Number(DeserializerPackNumber.INSTANCE.put(in__508));
        const bytes_527 = in__508.readBytes(len_526);
        stringBytes_524 = bytes_527;
        lib_version_518 = new TextDecoder('utf-8').decode(stringBytes_524);
        let stringBytes_528: Uint8Array;
        const len_530 = Number(DeserializerPackNumber.INSTANCE.put(in__508));
        const bytes_531 = in__508.readBytes(len_530);
        stringBytes_528 = bytes_531;
        os_519 = new TextDecoder('utf-8').decode(stringBytes_528);
        let stringBytes_532: Uint8Array;
        const len_534 = Number(DeserializerPackNumber.INSTANCE.put(in__508));
        const bytes_535 = in__508.readBytes(len_534);
        stringBytes_532 = bytes_535;
        compiler_520 = new TextDecoder('utf-8').decode(stringBytes_532);
        return new TelemetryCPP(utm_id_516, blob_517, lib_version_518, os_519, compiler_520);
        
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
    serialize(sCtx_536: FastFutureContext, obj_537: TelemetryCPP, _out_538: DataOut): void  {
        const typeId = typeof (obj_537 as any).getAetherTypeId === 'function' ? obj_537.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'TelemetryCPP' with invalid type id $ {
            typeId
        }
        `);
        _out_538.writeByte(typeId);
        switch(typeId)  {
            case 1: (TelemetryCPP as any).META_BODY.serialize(sCtx_536, obj_537 as any as TelemetryCPP, _out_538);
            break;
            default: throw new Error(`Cannot serialize 'TelemetryCPP' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_536: FastFutureContext, in__539: DataIn): TelemetryCPP  {
        const typeId = in__539.readUByte();
        switch(typeId)  {
            case 1: return (TelemetryCPP as any).META_BODY.deserialize(sCtx_536, in__539) as any as TelemetryCPP;
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
    serialize(sCtx_540: FastFutureContext, obj_541: UUIDAndCloud, _out_542: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_540, obj_541.uid, _out_542);
        Cloud.META.serialize(sCtx_540, obj_541.cloud, _out_542);
        
    }
    deserialize(sCtx_540: FastFutureContext, in__543: DataIn): UUIDAndCloud  {
        let uid_544: UUID;
        let cloud_545: Cloud;
        uid_544 = FastMeta.META_UUID.deserialize(sCtx_540, in__543);
        cloud_545 = Cloud.META.deserialize(sCtx_540, in__543);
        return new UUIDAndCloud(uid_544, cloud_545);
        
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
    serialize(sCtx_546: FastFutureContext, obj_547: WorkProofBCrypt, _out_548: DataOut): void  {
        _out_548.writeByte(obj_547.costBCrypt);
        _out_548.writeByte(obj_547.poolSize);
        _out_548.writeInt(obj_547.maxHashVal);
        
    }
    deserialize(sCtx_546: FastFutureContext, in__549: DataIn): WorkProofBCrypt  {
        let costBCrypt_550: number;
        let poolSize_551: number;
        let maxHashVal_552: number;
        costBCrypt_550 = in__549.readByte();
        poolSize_551 = in__549.readByte();
        maxHashVal_552 = in__549.readInt();
        return new WorkProofBCrypt(costBCrypt_550, poolSize_551, maxHashVal_552);
        
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
    serialize(sCtx_553: FastFutureContext, obj_554: WorkProofBCrypt, _out_555: DataOut): void  {
        const typeId = typeof (obj_554 as any).getAetherTypeId === 'function' ? obj_554.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'WorkProofBCrypt' with invalid type id $ {
            typeId
        }
        `);
        _out_555.writeByte(typeId);
        switch(typeId)  {
            case 1: (WorkProofBCrypt as any).META_BODY.serialize(sCtx_553, obj_554 as any as WorkProofBCrypt, _out_555);
            break;
            default: throw new Error(`Cannot serialize 'WorkProofBCrypt' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_553: FastFutureContext, in__556: DataIn): WorkProofBCrypt  {
        const typeId = in__556.readUByte();
        switch(typeId)  {
            case 1: return (WorkProofBCrypt as any).META_BODY.deserialize(sCtx_553, in__556) as any as WorkProofBCrypt;
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
    serialize(sCtx_557: FastFutureContext, obj_558: WorkProofDTO, _out_559: DataOut): void  {
        const stringBytes_561 = new TextEncoder().encode(obj_558.salt);
        SerializerPackNumber.INSTANCE.put(_out_559, stringBytes_561.length);
        _out_559.write(stringBytes_561);
        const stringBytes_563 = new TextEncoder().encode(obj_558.suffix);
        SerializerPackNumber.INSTANCE.put(_out_559, stringBytes_563.length);
        _out_559.write(stringBytes_563);
        _out_559.writeByte(obj_558.poolSize);
        _out_559.writeInt(obj_558.maxHashVal);
        SignedKey.META.serialize(sCtx_557, obj_558.globalKey, _out_559);
        
    }
    deserialize(sCtx_557: FastFutureContext, in__560: DataIn): WorkProofDTO  {
        let salt_565: string;
        let suffix_566: string;
        let poolSize_567: number;
        let maxHashVal_568: number;
        let globalKey_569: SignedKey;
        let stringBytes_570: Uint8Array;
        const len_572 = Number(DeserializerPackNumber.INSTANCE.put(in__560));
        const bytes_573 = in__560.readBytes(len_572);
        stringBytes_570 = bytes_573;
        salt_565 = new TextDecoder('utf-8').decode(stringBytes_570);
        let stringBytes_574: Uint8Array;
        const len_576 = Number(DeserializerPackNumber.INSTANCE.put(in__560));
        const bytes_577 = in__560.readBytes(len_576);
        stringBytes_574 = bytes_577;
        suffix_566 = new TextDecoder('utf-8').decode(stringBytes_574);
        poolSize_567 = in__560.readByte();
        maxHashVal_568 = in__560.readInt();
        globalKey_569 = SignedKey.META.deserialize(sCtx_557, in__560);
        return new WorkProofDTO(salt_565, suffix_566, poolSize_567, maxHashVal_568, globalKey_569);
        
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
                    let backId_579: number;
                    let data_580: LoginClientStream;
                    backId_579 = dataIn.readByte();
                    data_580 = LoginClientStream.META.deserialize(ctx, dataIn);
                    const argsNames_581: string[] = ["backId", "data"];
                    const argsValues_582: any[] = [backId_579, data_580];
                    ctx.invokeLocalMethodBefore("sendSafeApiDataMulti", argsNames_581, argsValues_582);
                    localApi.sendSafeApiDataMulti(backId_579, data_580);
                    ctx.invokeLocalMethodAfter("sendSafeApiDataMulti", null, argsNames_581, argsValues_582);
                    break;
                    
                }
                case 4:  {
                    let data_584: LoginClientStream;
                    data_584 = LoginClientStream.META.deserialize(ctx, dataIn);
                    const argsNames_585: string[] = ["data"];
                    const argsValues_586: any[] = [data_584];
                    ctx.invokeLocalMethodBefore("sendSafeApiData", argsNames_585, argsValues_586);
                    localApi.sendSafeApiData(data_584);
                    ctx.invokeLocalMethodAfter("sendSafeApiData", null, argsNames_585, argsValues_586);
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
    makeRemote(sCtx_587: FastFutureContext): ClientApiUnsafeRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_587.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_587, sendSafeApiDataMulti: (backId: number, data: LoginClientStream): void =>  {
                const dataOut_589 = new DataInOut();
                dataOut_589.writeByte(3);
                const argsNames_591: string[] = ["backId", "data"];
                const argsValues_592: any[] = [backId, data];
                sCtx_587.invokeRemoteMethodAfter("sendSafeApiDataMulti", null, argsNames_591, argsValues_592);
                dataOut_589.writeByte(backId);
                LoginClientStream.META.serialize(sCtx_587, data, dataOut_589);
                sCtx_587.sendToRemote(dataOut_589.toArray());
                
            }
            , sendSafeApiData: (data: LoginClientStream): void =>  {
                const dataOut_594 = new DataInOut();
                dataOut_594.writeByte(4);
                const argsNames_596: string[] = ["data"];
                const argsValues_597: any[] = [data];
                sCtx_587.invokeRemoteMethodAfter("sendSafeApiData", null, argsNames_596, argsValues_597);
                LoginClientStream.META.serialize(sCtx_587, data, dataOut_594);
                sCtx_587.sendToRemote(dataOut_594.toArray());
                
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
                    let uid_599: UUID;
                    uid_599 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_600: string[] = ["uid"];
                    const argsValues_601: any[] = [uid_599];
                    ctx.invokeLocalMethodBefore("changeParent", argsNames_600, argsValues_601);
                    localApi.changeParent(uid_599);
                    ctx.invokeLocalMethodAfter("changeParent", null, argsNames_600, argsValues_601);
                    break;
                    
                }
                case 4:  {
                    let alias_603: UUID;
                    alias_603 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_604: string[] = ["alias"];
                    const argsValues_605: any[] = [alias_603];
                    ctx.invokeLocalMethodBefore("changeAlias", argsNames_604, argsValues_605);
                    localApi.changeAlias(alias_603);
                    ctx.invokeLocalMethodAfter("changeAlias", null, argsNames_604, argsValues_605);
                    break;
                    
                }
                case 5:  {
                    let uid_607: UUID;
                    uid_607 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_608: string[] = ["uid"];
                    const argsValues_609: any[] = [uid_607];
                    ctx.invokeLocalMethodBefore("newChild", argsNames_608, argsValues_609);
                    localApi.newChild(uid_607);
                    ctx.invokeLocalMethodAfter("newChild", null, argsNames_608, argsValues_609);
                    break;
                    
                }
                case 6:  {
                    let msg_611: Message[];
                    const len_613 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_611 = new Array<Message>(len_613);
                    for (let idx_612 = 0;
                    idx_612 < len_613;
                    idx_612++)  {
                        msg_611[idx_612] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_614: string[] = ["msg"];
                    const argsValues_615: any[] = [msg_611];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_614, argsValues_615);
                    localApi.sendMessages(msg_611);
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_614, argsValues_615);
                    break;
                    
                }
                case 7:  {
                    let serverDescriptor_617: ServerDescriptor;
                    serverDescriptor_617 = ServerDescriptor.META.deserialize(ctx, dataIn);
                    const argsNames_618: string[] = ["serverDescriptor"];
                    const argsValues_619: any[] = [serverDescriptor_617];
                    ctx.invokeLocalMethodBefore("sendServerDescriptor", argsNames_618, argsValues_619);
                    localApi.sendServerDescriptor(serverDescriptor_617);
                    ctx.invokeLocalMethodAfter("sendServerDescriptor", null, argsNames_618, argsValues_619);
                    break;
                    
                }
                case 8:  {
                    let serverDescriptors_621: ServerDescriptor[];
                    const len_623 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    serverDescriptors_621 = new Array<ServerDescriptor>(len_623);
                    for (let idx_622 = 0;
                    idx_622 < len_623;
                    idx_622++)  {
                        serverDescriptors_621[idx_622] = ServerDescriptor.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_624: string[] = ["serverDescriptors"];
                    const argsValues_625: any[] = [serverDescriptors_621];
                    ctx.invokeLocalMethodBefore("sendServerDescriptors", argsNames_624, argsValues_625);
                    localApi.sendServerDescriptors(serverDescriptors_621);
                    ctx.invokeLocalMethodAfter("sendServerDescriptors", null, argsNames_624, argsValues_625);
                    break;
                    
                }
                case 9:  {
                    let uid_627: UUID;
                    let cloud_628: Cloud;
                    uid_627 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    cloud_628 = Cloud.META.deserialize(ctx, dataIn);
                    const argsNames_629: string[] = ["uid", "cloud"];
                    const argsValues_630: any[] = [uid_627, cloud_628];
                    ctx.invokeLocalMethodBefore("sendCloud", argsNames_629, argsValues_630);
                    localApi.sendCloud(uid_627, cloud_628);
                    ctx.invokeLocalMethodAfter("sendCloud", null, argsNames_629, argsValues_630);
                    break;
                    
                }
                case 10:  {
                    let clouds_632: UUIDAndCloud[];
                    const len_634 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    clouds_632 = new Array<UUIDAndCloud>(len_634);
                    for (let idx_633 = 0;
                    idx_633 < len_634;
                    idx_633++)  {
                        clouds_632[idx_633] = UUIDAndCloud.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_635: string[] = ["clouds"];
                    const argsValues_636: any[] = [clouds_632];
                    ctx.invokeLocalMethodBefore("sendClouds", argsNames_635, argsValues_636);
                    localApi.sendClouds(clouds_632);
                    ctx.invokeLocalMethodAfter("sendClouds", null, argsNames_635, argsValues_636);
                    break;
                    
                }
                case 11:  {
                    const argsNames_638: string[] = [];
                    const argsValues_639: any[] = [];
                    ctx.invokeLocalMethodBefore("requestTelemetry", argsNames_638, argsValues_639);
                    localApi.requestTelemetry();
                    ctx.invokeLocalMethodAfter("requestTelemetry", null, argsNames_638, argsValues_639);
                    break;
                    
                }
                case 12:  {
                    let groups_641: AccessGroup[];
                    const len_643 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_641 = new Array<AccessGroup>(len_643);
                    for (let idx_642 = 0;
                    idx_642 < len_643;
                    idx_642++)  {
                        groups_641[idx_642] = AccessGroup.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_644: string[] = ["groups"];
                    const argsValues_645: any[] = [groups_641];
                    ctx.invokeLocalMethodBefore("sendAccessGroups", argsNames_644, argsValues_645);
                    localApi.sendAccessGroups(groups_641);
                    ctx.invokeLocalMethodAfter("sendAccessGroups", null, argsNames_644, argsValues_645);
                    break;
                    
                }
                case 13:  {
                    let uid_647: UUID;
                    let groups_648: bigint[];
                    uid_647 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_650 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_648 = new Array<bigint>(len_650);
                    for (let idx_649 = 0;
                    idx_649 < len_650;
                    idx_649++)  {
                        groups_648[idx_649] = dataIn.readLong();
                        
                    }
                    const argsNames_651: string[] = ["uid", "groups"];
                    const argsValues_652: any[] = [uid_647, groups_648];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_651, argsValues_652);
                    localApi.sendAccessGroupForClient(uid_647, groups_648);
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_651, argsValues_652);
                    break;
                    
                }
                case 14:  {
                    let id_654: bigint;
                    let groups_655: UUID[];
                    id_654 = dataIn.readLong();
                    const len_657 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_655 = new Array<UUID>(len_657);
                    for (let idx_656 = 0;
                    idx_656 < len_657;
                    idx_656++)  {
                        groups_655[idx_656] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_658: string[] = ["id", "groups"];
                    const argsValues_659: any[] = [id_654, groups_655];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_658, argsValues_659);
                    localApi.addItemsToAccessGroup(id_654, groups_655);
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_658, argsValues_659);
                    break;
                    
                }
                case 15:  {
                    let id_661: bigint;
                    let groups_662: UUID[];
                    id_661 = dataIn.readLong();
                    const len_664 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_662 = new Array<UUID>(len_664);
                    for (let idx_663 = 0;
                    idx_663 < len_664;
                    idx_663++)  {
                        groups_662[idx_663] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_665: string[] = ["id", "groups"];
                    const argsValues_666: any[] = [id_661, groups_662];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_665, argsValues_666);
                    localApi.removeItemsFromAccessGroup(id_661, groups_662);
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_665, argsValues_666);
                    break;
                    
                }
                case 16:  {
                    let uid_668: UUID;
                    let groups_669: bigint[];
                    uid_668 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_671 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_669 = new Array<bigint>(len_671);
                    for (let idx_670 = 0;
                    idx_670 < len_671;
                    idx_670++)  {
                        groups_669[idx_670] = dataIn.readLong();
                        
                    }
                    const argsNames_672: string[] = ["uid", "groups"];
                    const argsValues_673: any[] = [uid_668, groups_669];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_672, argsValues_673);
                    localApi.addAccessGroupsToClient(uid_668, groups_669);
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_672, argsValues_673);
                    break;
                    
                }
                case 17:  {
                    let uid_675: UUID;
                    let groups_676: bigint[];
                    uid_675 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_678 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_676 = new Array<bigint>(len_678);
                    for (let idx_677 = 0;
                    idx_677 < len_678;
                    idx_677++)  {
                        groups_676[idx_677] = dataIn.readLong();
                        
                    }
                    const argsNames_679: string[] = ["uid", "groups"];
                    const argsValues_680: any[] = [uid_675, groups_676];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_679, argsValues_680);
                    localApi.removeAccessGroupsFromClient(uid_675, groups_676);
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_679, argsValues_680);
                    break;
                    
                }
                case 18:  {
                    let uid_682: UUID;
                    let accessedClients_683: UUID[];
                    uid_682 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_685 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    accessedClients_683 = new Array<UUID>(len_685);
                    for (let idx_684 = 0;
                    idx_684 < len_685;
                    idx_684++)  {
                        accessedClients_683[idx_684] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_686: string[] = ["uid", "accessedClients"];
                    const argsValues_687: any[] = [uid_682, accessedClients_683];
                    ctx.invokeLocalMethodBefore("sendAllAccessedClients", argsNames_686, argsValues_687);
                    localApi.sendAllAccessedClients(uid_682, accessedClients_683);
                    ctx.invokeLocalMethodAfter("sendAllAccessedClients", null, argsNames_686, argsValues_687);
                    break;
                    
                }
                case 19:  {
                    let results_689: AccessCheckResult[];
                    const len_691 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    results_689 = new Array<AccessCheckResult>(len_691);
                    for (let idx_690 = 0;
                    idx_690 < len_691;
                    idx_690++)  {
                        results_689[idx_690] = AccessCheckResult.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_692: string[] = ["results"];
                    const argsValues_693: any[] = [results_689];
                    ctx.invokeLocalMethodBefore("sendAccessCheckResults", argsNames_692, argsValues_693);
                    localApi.sendAccessCheckResults(results_689);
                    ctx.invokeLocalMethodAfter("sendAccessCheckResults", null, argsNames_692, argsValues_693);
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
    makeRemote(sCtx_694: FastFutureContext): ClientApiSafeRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_694.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_694, changeParent: (uid: UUID): void =>  {
                const dataOut_696 = new DataInOut();
                dataOut_696.writeByte(3);
                const argsNames_698: string[] = ["uid"];
                const argsValues_699: any[] = [uid];
                sCtx_694.invokeRemoteMethodAfter("changeParent", null, argsNames_698, argsValues_699);
                FastMeta.META_UUID.serialize(sCtx_694, uid, dataOut_696);
                sCtx_694.sendToRemote(dataOut_696.toArray());
                
            }
            , changeAlias: (alias: UUID): void =>  {
                const dataOut_701 = new DataInOut();
                dataOut_701.writeByte(4);
                const argsNames_703: string[] = ["alias"];
                const argsValues_704: any[] = [alias];
                sCtx_694.invokeRemoteMethodAfter("changeAlias", null, argsNames_703, argsValues_704);
                FastMeta.META_UUID.serialize(sCtx_694, alias, dataOut_701);
                sCtx_694.sendToRemote(dataOut_701.toArray());
                
            }
            , newChild: (uid: UUID): void =>  {
                const dataOut_706 = new DataInOut();
                dataOut_706.writeByte(5);
                const argsNames_708: string[] = ["uid"];
                const argsValues_709: any[] = [uid];
                sCtx_694.invokeRemoteMethodAfter("newChild", null, argsNames_708, argsValues_709);
                FastMeta.META_UUID.serialize(sCtx_694, uid, dataOut_706);
                sCtx_694.sendToRemote(dataOut_706.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_711 = new DataInOut();
                dataOut_711.writeByte(6);
                const argsNames_713: string[] = ["msg"];
                const argsValues_714: any[] = [msg];
                sCtx_694.invokeRemoteMethodAfter("sendMessages", null, argsNames_713, argsValues_714);
                SerializerPackNumber.INSTANCE.put(dataOut_711, msg.length);
                for (const el_715 of msg)  {
                    Message.META.serialize(sCtx_694, el_715, dataOut_711);
                    
                }
                sCtx_694.sendToRemote(dataOut_711.toArray());
                
            }
            , sendServerDescriptor: (serverDescriptor: ServerDescriptor): void =>  {
                const dataOut_717 = new DataInOut();
                dataOut_717.writeByte(7);
                const argsNames_719: string[] = ["serverDescriptor"];
                const argsValues_720: any[] = [serverDescriptor];
                sCtx_694.invokeRemoteMethodAfter("sendServerDescriptor", null, argsNames_719, argsValues_720);
                ServerDescriptor.META.serialize(sCtx_694, serverDescriptor, dataOut_717);
                sCtx_694.sendToRemote(dataOut_717.toArray());
                
            }
            , sendServerDescriptors: (serverDescriptors: ServerDescriptor[]): void =>  {
                const dataOut_722 = new DataInOut();
                dataOut_722.writeByte(8);
                const argsNames_724: string[] = ["serverDescriptors"];
                const argsValues_725: any[] = [serverDescriptors];
                sCtx_694.invokeRemoteMethodAfter("sendServerDescriptors", null, argsNames_724, argsValues_725);
                SerializerPackNumber.INSTANCE.put(dataOut_722, serverDescriptors.length);
                for (const el_726 of serverDescriptors)  {
                    ServerDescriptor.META.serialize(sCtx_694, el_726, dataOut_722);
                    
                }
                sCtx_694.sendToRemote(dataOut_722.toArray());
                
            }
            , sendCloud: (uid: UUID, cloud: Cloud): void =>  {
                const dataOut_728 = new DataInOut();
                dataOut_728.writeByte(9);
                const argsNames_730: string[] = ["uid", "cloud"];
                const argsValues_731: any[] = [uid, cloud];
                sCtx_694.invokeRemoteMethodAfter("sendCloud", null, argsNames_730, argsValues_731);
                FastMeta.META_UUID.serialize(sCtx_694, uid, dataOut_728);
                Cloud.META.serialize(sCtx_694, cloud, dataOut_728);
                sCtx_694.sendToRemote(dataOut_728.toArray());
                
            }
            , sendClouds: (clouds: UUIDAndCloud[]): void =>  {
                const dataOut_733 = new DataInOut();
                dataOut_733.writeByte(10);
                const argsNames_735: string[] = ["clouds"];
                const argsValues_736: any[] = [clouds];
                sCtx_694.invokeRemoteMethodAfter("sendClouds", null, argsNames_735, argsValues_736);
                SerializerPackNumber.INSTANCE.put(dataOut_733, clouds.length);
                for (const el_737 of clouds)  {
                    UUIDAndCloud.META.serialize(sCtx_694, el_737, dataOut_733);
                    
                }
                sCtx_694.sendToRemote(dataOut_733.toArray());
                
            }
            , requestTelemetry: (): void =>  {
                const dataOut_739 = new DataInOut();
                dataOut_739.writeByte(11);
                const argsNames_741: string[] = [];
                const argsValues_742: any[] = [];
                sCtx_694.invokeRemoteMethodAfter("requestTelemetry", null, argsNames_741, argsValues_742);
                sCtx_694.sendToRemote(dataOut_739.toArray());
                
            }
            , sendAccessGroups: (groups: AccessGroup[]): void =>  {
                const dataOut_744 = new DataInOut();
                dataOut_744.writeByte(12);
                const argsNames_746: string[] = ["groups"];
                const argsValues_747: any[] = [groups];
                sCtx_694.invokeRemoteMethodAfter("sendAccessGroups", null, argsNames_746, argsValues_747);
                SerializerPackNumber.INSTANCE.put(dataOut_744, groups.length);
                for (const el_748 of groups)  {
                    AccessGroup.META.serialize(sCtx_694, el_748, dataOut_744);
                    
                }
                sCtx_694.sendToRemote(dataOut_744.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_750 = new DataInOut();
                dataOut_750.writeByte(13);
                const argsNames_752: string[] = ["uid", "groups"];
                const argsValues_753: any[] = [uid, groups];
                sCtx_694.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_752, argsValues_753);
                FastMeta.META_UUID.serialize(sCtx_694, uid, dataOut_750);
                SerializerPackNumber.INSTANCE.put(dataOut_750, groups.length);
                for (const el_754 of groups)  {
                    dataOut_750.writeLong(el_754);
                    
                }
                sCtx_694.sendToRemote(dataOut_750.toArray());
                
            }
            , addItemsToAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_756 = new DataInOut();
                dataOut_756.writeByte(14);
                const argsNames_758: string[] = ["id", "groups"];
                const argsValues_759: any[] = [id, groups];
                sCtx_694.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_758, argsValues_759);
                dataOut_756.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_756, groups.length);
                for (const el_760 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_694, el_760, dataOut_756);
                    
                }
                sCtx_694.sendToRemote(dataOut_756.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_762 = new DataInOut();
                dataOut_762.writeByte(15);
                const argsNames_764: string[] = ["id", "groups"];
                const argsValues_765: any[] = [id, groups];
                sCtx_694.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_764, argsValues_765);
                dataOut_762.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_762, groups.length);
                for (const el_766 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_694, el_766, dataOut_762);
                    
                }
                sCtx_694.sendToRemote(dataOut_762.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_768 = new DataInOut();
                dataOut_768.writeByte(16);
                const argsNames_770: string[] = ["uid", "groups"];
                const argsValues_771: any[] = [uid, groups];
                sCtx_694.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_770, argsValues_771);
                FastMeta.META_UUID.serialize(sCtx_694, uid, dataOut_768);
                SerializerPackNumber.INSTANCE.put(dataOut_768, groups.length);
                for (const el_772 of groups)  {
                    dataOut_768.writeLong(el_772);
                    
                }
                sCtx_694.sendToRemote(dataOut_768.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_774 = new DataInOut();
                dataOut_774.writeByte(17);
                const argsNames_776: string[] = ["uid", "groups"];
                const argsValues_777: any[] = [uid, groups];
                sCtx_694.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_776, argsValues_777);
                FastMeta.META_UUID.serialize(sCtx_694, uid, dataOut_774);
                SerializerPackNumber.INSTANCE.put(dataOut_774, groups.length);
                for (const el_778 of groups)  {
                    dataOut_774.writeLong(el_778);
                    
                }
                sCtx_694.sendToRemote(dataOut_774.toArray());
                
            }
            , sendAllAccessedClients: (uid: UUID, accessedClients: UUID[]): void =>  {
                const dataOut_780 = new DataInOut();
                dataOut_780.writeByte(18);
                const argsNames_782: string[] = ["uid", "accessedClients"];
                const argsValues_783: any[] = [uid, accessedClients];
                sCtx_694.invokeRemoteMethodAfter("sendAllAccessedClients", null, argsNames_782, argsValues_783);
                FastMeta.META_UUID.serialize(sCtx_694, uid, dataOut_780);
                SerializerPackNumber.INSTANCE.put(dataOut_780, accessedClients.length);
                for (const el_784 of accessedClients)  {
                    FastMeta.META_UUID.serialize(sCtx_694, el_784, dataOut_780);
                    
                }
                sCtx_694.sendToRemote(dataOut_780.toArray());
                
            }
            , sendAccessCheckResults: (results: AccessCheckResult[]): void =>  {
                const dataOut_786 = new DataInOut();
                dataOut_786.writeByte(19);
                const argsNames_788: string[] = ["results"];
                const argsValues_789: any[] = [results];
                sCtx_694.invokeRemoteMethodAfter("sendAccessCheckResults", null, argsNames_788, argsValues_789);
                SerializerPackNumber.INSTANCE.put(dataOut_786, results.length);
                for (const el_790 of results)  {
                    AccessCheckResult.META.serialize(sCtx_694, el_790, dataOut_786);
                    
                }
                sCtx_694.sendToRemote(dataOut_786.toArray());
                
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
                    let id_792: number;
                    id_792 = dataIn.readByte();
                    const argsNames_793: string[] = ["id"];
                    const argsValues_794: any[] = [id_792];
                    ctx.invokeLocalMethodBefore("backId", argsNames_793, argsValues_794);
                    localApi.backId(id_792);
                    ctx.invokeLocalMethodAfter("backId", null, argsNames_793, argsValues_794);
                    break;
                    
                }
                case 4:  {
                    const reqId_795 = dataIn.readInt();
                    let nextConnectMsDuration_796: bigint;
                    nextConnectMsDuration_796 = dataIn.readLong();
                    const argsNames_797: string[] = ["nextConnectMsDuration"];
                    const argsValues_798: any[] = [nextConnectMsDuration_796];
                    ctx.invokeLocalMethodBefore("ping", argsNames_797, argsValues_798);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.ping(nextConnectMsDuration_796);
                    ctx.invokeLocalMethodAfter("ping", resultFuture, argsNames_797, argsValues_798);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_795);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    let uid_800: UUID;
                    let stream_801: ClientApiStream;
                    uid_800 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    stream_801 = ClientApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_802: string[] = ["uid", "stream"];
                    const argsValues_803: any[] = [uid_800, stream_801];
                    ctx.invokeLocalMethodBefore("client", argsNames_802, argsValues_803);
                    localApi.client(uid_800, stream_801);
                    ctx.invokeLocalMethodAfter("client", null, argsNames_802, argsValues_803);
                    break;
                    
                }
                case 6:  {
                    let msg_805: Message;
                    msg_805 = Message.META.deserialize(ctx, dataIn);
                    const argsNames_806: string[] = ["msg"];
                    const argsValues_807: any[] = [msg_805];
                    ctx.invokeLocalMethodBefore("sendMessage", argsNames_806, argsValues_807);
                    localApi.sendMessage(msg_805);
                    ctx.invokeLocalMethodAfter("sendMessage", null, argsNames_806, argsValues_807);
                    break;
                    
                }
                case 7:  {
                    let msg_809: Message[];
                    const len_811 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_809 = new Array<Message>(len_811);
                    for (let idx_810 = 0;
                    idx_810 < len_811;
                    idx_810++)  {
                        msg_809[idx_810] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_812: string[] = ["msg"];
                    const argsValues_813: any[] = [msg_809];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_812, argsValues_813);
                    localApi.sendMessages(msg_809);
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_812, argsValues_813);
                    break;
                    
                }
                case 8:  {
                    const reqId_814 = dataIn.readInt();
                    let owner_815: UUID;
                    let uids_816: UUID[];
                    owner_815 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_818 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_816 = new Array<UUID>(len_818);
                    for (let idx_817 = 0;
                    idx_817 < len_818;
                    idx_817++)  {
                        uids_816[idx_817] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_819: string[] = ["owner", "uids"];
                    const argsValues_820: any[] = [owner_815, uids_816];
                    ctx.invokeLocalMethodBefore("createAccessGroup", argsNames_819, argsValues_820);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.createAccessGroup(owner_815, uids_816);
                    ctx.invokeLocalMethodAfter("createAccessGroup", resultFuture, argsNames_819, argsValues_820);
                    resultFuture.to((v_822: bigint) =>  {
                        const data_821 = new DataInOut();
                        data_821.writeLong(v_822);
                        ctx.sendResultToRemote(reqId_814, data_821.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_823 = dataIn.readInt();
                    let groupId_824: bigint;
                    let uid_825: UUID;
                    groupId_824 = dataIn.readLong();
                    uid_825 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_826: string[] = ["groupId", "uid"];
                    const argsValues_827: any[] = [groupId_824, uid_825];
                    ctx.invokeLocalMethodBefore("addToAccessGroup", argsNames_826, argsValues_827);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.addToAccessGroup(groupId_824, uid_825);
                    ctx.invokeLocalMethodAfter("addToAccessGroup", resultFuture, argsNames_826, argsValues_827);
                    resultFuture.to((v_829: boolean) =>  {
                        const data_828 = new DataInOut();
                        data_828.writeBoolean(v_829);
                        ctx.sendResultToRemote(reqId_823, data_828.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_830 = dataIn.readInt();
                    let groupId_831: bigint;
                    let uid_832: UUID;
                    groupId_831 = dataIn.readLong();
                    uid_832 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_833: string[] = ["groupId", "uid"];
                    const argsValues_834: any[] = [groupId_831, uid_832];
                    ctx.invokeLocalMethodBefore("removeFromAccessGroup", argsNames_833, argsValues_834);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.removeFromAccessGroup(groupId_831, uid_832);
                    ctx.invokeLocalMethodAfter("removeFromAccessGroup", resultFuture, argsNames_833, argsValues_834);
                    resultFuture.to((v_836: boolean) =>  {
                        const data_835 = new DataInOut();
                        data_835.writeBoolean(v_836);
                        ctx.sendResultToRemote(reqId_830, data_835.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_837 = dataIn.readInt();
                    let uid_838: UUID;
                    uid_838 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_839: string[] = ["uid"];
                    const argsValues_840: any[] = [uid_838];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage", argsNames_839, argsValues_840);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.checkAccessForSendMessage(uid_838);
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage", resultFuture, argsNames_839, argsValues_840);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_837);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    let sid_842: number[];
                    const len_844 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    sid_842 = new Array<number>(len_844);
                    for (let idx_843 = 0;
                    idx_843 < len_844;
                    idx_843++)  {
                        sid_842[idx_843] = dataIn.readShort();
                        
                    }
                    const argsNames_845: string[] = ["sid"];
                    const argsValues_846: any[] = [sid_842];
                    ctx.invokeLocalMethodBefore("resolverServers", argsNames_845, argsValues_846);
                    localApi.resolverServers(sid_842);
                    ctx.invokeLocalMethodAfter("resolverServers", null, argsNames_845, argsValues_846);
                    break;
                    
                }
                case 13:  {
                    let uids_848: UUID[];
                    const len_850 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_848 = new Array<UUID>(len_850);
                    for (let idx_849 = 0;
                    idx_849 < len_850;
                    idx_849++)  {
                        uids_848[idx_849] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_851: string[] = ["uids"];
                    const argsValues_852: any[] = [uids_848];
                    ctx.invokeLocalMethodBefore("resolverClouds", argsNames_851, argsValues_852);
                    localApi.resolverClouds(uids_848);
                    ctx.invokeLocalMethodAfter("resolverClouds", null, argsNames_851, argsValues_852);
                    break;
                    
                }
                case 14:  {
                    const reqId_853 = dataIn.readInt();
                    let uid_854: UUID;
                    uid_854 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_855: string[] = ["uid"];
                    const argsValues_856: any[] = [uid_854];
                    ctx.invokeLocalMethodBefore("getAccessGroups", argsNames_855, argsValues_856);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAccessGroups(uid_854);
                    ctx.invokeLocalMethodAfter("getAccessGroups", resultFuture, argsNames_855, argsValues_856);
                    resultFuture.to((v_858: bigint[]) =>  {
                        const data_857 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_857, v_858.length);
                        for (const el_859 of v_858)  {
                            data_857.writeLong(el_859);
                            
                        }
                        ctx.sendResultToRemote(reqId_853, data_857.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_860 = dataIn.readInt();
                    let groupId_861: bigint;
                    groupId_861 = dataIn.readLong();
                    const argsNames_862: string[] = ["groupId"];
                    const argsValues_863: any[] = [groupId_861];
                    ctx.invokeLocalMethodBefore("getAccessGroup", argsNames_862, argsValues_863);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAccessGroup(groupId_861);
                    ctx.invokeLocalMethodAfter("getAccessGroup", resultFuture, argsNames_862, argsValues_863);
                    resultFuture.to((v_865: AccessGroup) =>  {
                        const data_864 = new DataInOut();
                        AccessGroup.META.serialize(ctx, v_865, data_864);
                        ctx.sendResultToRemote(reqId_860, data_864.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 16:  {
                    const reqId_866 = dataIn.readInt();
                    let uid_867: UUID;
                    uid_867 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_868: string[] = ["uid"];
                    const argsValues_869: any[] = [uid_867];
                    ctx.invokeLocalMethodBefore("getAllAccessedClients", argsNames_868, argsValues_869);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAllAccessedClients(uid_867);
                    ctx.invokeLocalMethodAfter("getAllAccessedClients", resultFuture, argsNames_868, argsValues_869);
                    resultFuture.to((v_871: UUID[]) =>  {
                        const data_870 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_870, v_871.length);
                        for (const el_872 of v_871)  {
                            FastMeta.META_UUID.serialize(ctx, el_872, data_870);
                            
                        }
                        ctx.sendResultToRemote(reqId_866, data_870.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 17:  {
                    const reqId_873 = dataIn.readInt();
                    let uid1_874: UUID;
                    let uid2_875: UUID;
                    uid1_874 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid2_875 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_876: string[] = ["uid1", "uid2"];
                    const argsValues_877: any[] = [uid1_874, uid2_875];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage2", argsNames_876, argsValues_877);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.checkAccessForSendMessage2(uid1_874, uid2_875);
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage2", resultFuture, argsNames_876, argsValues_877);
                    resultFuture.to((v_879: boolean) =>  {
                        const data_878 = new DataInOut();
                        data_878.writeBoolean(v_879);
                        ctx.sendResultToRemote(reqId_873, data_878.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 18:  {
                    let telemetry_881: Telemetry;
                    telemetry_881 = Telemetry.META.deserialize(ctx, dataIn);
                    const argsNames_882: string[] = ["telemetry"];
                    const argsValues_883: any[] = [telemetry_881];
                    ctx.invokeLocalMethodBefore("sendTelemetry", argsNames_882, argsValues_883);
                    localApi.sendTelemetry(telemetry_881);
                    ctx.invokeLocalMethodAfter("sendTelemetry", null, argsNames_882, argsValues_883);
                    break;
                    
                }
                case 19:  {
                    let uids_885: UUID[];
                    const len_887 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_885 = new Array<UUID>(len_887);
                    for (let idx_886 = 0;
                    idx_886 < len_887;
                    idx_886++)  {
                        uids_885[idx_886] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_888: string[] = ["uids"];
                    const argsValues_889: any[] = [uids_885];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsForClients", argsNames_888, argsValues_889);
                    localApi.requestAccessGroupsForClients(uids_885);
                    ctx.invokeLocalMethodAfter("requestAccessGroupsForClients", null, argsNames_888, argsValues_889);
                    break;
                    
                }
                case 20:  {
                    let ids_891: bigint[];
                    const len_893 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    ids_891 = new Array<bigint>(len_893);
                    for (let idx_892 = 0;
                    idx_892 < len_893;
                    idx_892++)  {
                        ids_891[idx_892] = dataIn.readLong();
                        
                    }
                    const argsNames_894: string[] = ["ids"];
                    const argsValues_895: any[] = [ids_891];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsItems", argsNames_894, argsValues_895);
                    localApi.requestAccessGroupsItems(ids_891);
                    ctx.invokeLocalMethodAfter("requestAccessGroupsItems", null, argsNames_894, argsValues_895);
                    break;
                    
                }
                case 22:  {
                    let uid_897: UUID;
                    let groups_898: bigint[];
                    uid_897 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_900 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_898 = new Array<bigint>(len_900);
                    for (let idx_899 = 0;
                    idx_899 < len_900;
                    idx_899++)  {
                        groups_898[idx_899] = dataIn.readLong();
                        
                    }
                    const argsNames_901: string[] = ["uid", "groups"];
                    const argsValues_902: any[] = [uid_897, groups_898];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_901, argsValues_902);
                    localApi.sendAccessGroupForClient(uid_897, groups_898);
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_901, argsValues_902);
                    break;
                    
                }
                case 23:  {
                    let id_904: bigint;
                    let groups_905: UUID[];
                    id_904 = dataIn.readLong();
                    const len_907 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_905 = new Array<UUID>(len_907);
                    for (let idx_906 = 0;
                    idx_906 < len_907;
                    idx_906++)  {
                        groups_905[idx_906] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_908: string[] = ["id", "groups"];
                    const argsValues_909: any[] = [id_904, groups_905];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_908, argsValues_909);
                    localApi.addItemsToAccessGroup(id_904, groups_905);
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_908, argsValues_909);
                    break;
                    
                }
                case 24:  {
                    let id_911: bigint;
                    let groups_912: UUID[];
                    id_911 = dataIn.readLong();
                    const len_914 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_912 = new Array<UUID>(len_914);
                    for (let idx_913 = 0;
                    idx_913 < len_914;
                    idx_913++)  {
                        groups_912[idx_913] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_915: string[] = ["id", "groups"];
                    const argsValues_916: any[] = [id_911, groups_912];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_915, argsValues_916);
                    localApi.removeItemsFromAccessGroup(id_911, groups_912);
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_915, argsValues_916);
                    break;
                    
                }
                case 25:  {
                    let uid_918: UUID;
                    let groups_919: bigint[];
                    uid_918 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_921 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_919 = new Array<bigint>(len_921);
                    for (let idx_920 = 0;
                    idx_920 < len_921;
                    idx_920++)  {
                        groups_919[idx_920] = dataIn.readLong();
                        
                    }
                    const argsNames_922: string[] = ["uid", "groups"];
                    const argsValues_923: any[] = [uid_918, groups_919];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_922, argsValues_923);
                    localApi.addAccessGroupsToClient(uid_918, groups_919);
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_922, argsValues_923);
                    break;
                    
                }
                case 26:  {
                    let uid_925: UUID;
                    let groups_926: bigint[];
                    uid_925 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_928 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_926 = new Array<bigint>(len_928);
                    for (let idx_927 = 0;
                    idx_927 < len_928;
                    idx_927++)  {
                        groups_926[idx_927] = dataIn.readLong();
                        
                    }
                    const argsNames_929: string[] = ["uid", "groups"];
                    const argsValues_930: any[] = [uid_925, groups_926];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_929, argsValues_930);
                    localApi.removeAccessGroupsFromClient(uid_925, groups_926);
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_929, argsValues_930);
                    break;
                    
                }
                case 27:  {
                    let uids_932: UUID[];
                    const len_934 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_932 = new Array<UUID>(len_934);
                    for (let idx_933 = 0;
                    idx_933 < len_934;
                    idx_933++)  {
                        uids_932[idx_933] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_935: string[] = ["uids"];
                    const argsValues_936: any[] = [uids_932];
                    ctx.invokeLocalMethodBefore("requestAllAccessedClients", argsNames_935, argsValues_936);
                    localApi.requestAllAccessedClients(uids_932);
                    ctx.invokeLocalMethodAfter("requestAllAccessedClients", null, argsNames_935, argsValues_936);
                    break;
                    
                }
                case 28:  {
                    let requests_938: AccessCheckPair[];
                    const len_940 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    requests_938 = new Array<AccessCheckPair>(len_940);
                    for (let idx_939 = 0;
                    idx_939 < len_940;
                    idx_939++)  {
                        requests_938[idx_939] = AccessCheckPair.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_941: string[] = ["requests"];
                    const argsValues_942: any[] = [requests_938];
                    ctx.invokeLocalMethodBefore("requestAccessCheck", argsNames_941, argsValues_942);
                    localApi.requestAccessCheck(requests_938);
                    ctx.invokeLocalMethodAfter("requestAccessCheck", null, argsNames_941, argsValues_942);
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
    makeRemote(sCtx_943: FastFutureContext): AuthorizedApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_943.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_943, backId: (id: number): void =>  {
                const dataOut_945 = new DataInOut();
                dataOut_945.writeByte(3);
                const argsNames_947: string[] = ["id"];
                const argsValues_948: any[] = [id];
                sCtx_943.invokeRemoteMethodAfter("backId", null, argsNames_947, argsValues_948);
                dataOut_945.writeByte(id);
                sCtx_943.sendToRemote(dataOut_945.toArray());
                
            }
            , ping: (nextConnectMsDuration: bigint): AFuture =>  {
                const dataOut_950 = new DataInOut();
                dataOut_950.writeByte(4);
                const argsNames_952: string[] = ["nextConnectMsDuration"];
                const argsValues_953: any[] = [nextConnectMsDuration];
                const result_951 = AFuture.make();
                sCtx_943.invokeRemoteMethodAfter("ping", result_951, argsNames_952, argsValues_953);
                const reqId_949 = sCtx_943.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_951 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_951.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_950.writeInt(reqId_949);
                dataOut_950.writeLong(nextConnectMsDuration);
                sCtx_943.sendToRemote(dataOut_950.toArray());
                return result_951;
                
            }
            , client: (uid: UUID, stream: ClientApiStream): void =>  {
                const dataOut_955 = new DataInOut();
                dataOut_955.writeByte(5);
                const argsNames_957: string[] = ["uid", "stream"];
                const argsValues_958: any[] = [uid, stream];
                sCtx_943.invokeRemoteMethodAfter("client", null, argsNames_957, argsValues_958);
                FastMeta.META_UUID.serialize(sCtx_943, uid, dataOut_955);
                ClientApiStream.META.serialize(sCtx_943, stream, dataOut_955);
                sCtx_943.sendToRemote(dataOut_955.toArray());
                
            }
            , sendMessage: (msg: Message): void =>  {
                const dataOut_960 = new DataInOut();
                dataOut_960.writeByte(6);
                const argsNames_962: string[] = ["msg"];
                const argsValues_963: any[] = [msg];
                sCtx_943.invokeRemoteMethodAfter("sendMessage", null, argsNames_962, argsValues_963);
                Message.META.serialize(sCtx_943, msg, dataOut_960);
                sCtx_943.sendToRemote(dataOut_960.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_965 = new DataInOut();
                dataOut_965.writeByte(7);
                const argsNames_967: string[] = ["msg"];
                const argsValues_968: any[] = [msg];
                sCtx_943.invokeRemoteMethodAfter("sendMessages", null, argsNames_967, argsValues_968);
                SerializerPackNumber.INSTANCE.put(dataOut_965, msg.length);
                for (const el_969 of msg)  {
                    Message.META.serialize(sCtx_943, el_969, dataOut_965);
                    
                }
                sCtx_943.sendToRemote(dataOut_965.toArray());
                
            }
            , createAccessGroup: (owner: UUID, uids: UUID[]): ARFuture<bigint> =>  {
                const dataOut_971 = new DataInOut();
                dataOut_971.writeByte(8);
                const argsNames_973: string[] = ["owner", "uids"];
                const argsValues_974: any[] = [owner, uids];
                const result_972 = ARFuture.of<bigint>();
                sCtx_943.invokeRemoteMethodAfter("createAccessGroup", result_972, argsNames_973, argsValues_974);
                const reqId_970 = sCtx_943.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_972 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_943, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_972.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_971.writeInt(reqId_970);
                FastMeta.META_UUID.serialize(sCtx_943, owner, dataOut_971);
                SerializerPackNumber.INSTANCE.put(dataOut_971, uids.length);
                for (const el_975 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_943, el_975, dataOut_971);
                    
                }
                sCtx_943.sendToRemote(dataOut_971.toArray());
                return result_972;
                
            }
            , addToAccessGroup: (groupId: bigint, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_977 = new DataInOut();
                dataOut_977.writeByte(9);
                const argsNames_979: string[] = ["groupId", "uid"];
                const argsValues_980: any[] = [groupId, uid];
                const result_978 = ARFuture.of<boolean>();
                sCtx_943.invokeRemoteMethodAfter("addToAccessGroup", result_978, argsNames_979, argsValues_980);
                const reqId_976 = sCtx_943.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_978 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_943, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_978.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_977.writeInt(reqId_976);
                dataOut_977.writeLong(groupId);
                FastMeta.META_UUID.serialize(sCtx_943, uid, dataOut_977);
                sCtx_943.sendToRemote(dataOut_977.toArray());
                return result_978;
                
            }
            , removeFromAccessGroup: (groupId: bigint, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_982 = new DataInOut();
                dataOut_982.writeByte(10);
                const argsNames_984: string[] = ["groupId", "uid"];
                const argsValues_985: any[] = [groupId, uid];
                const result_983 = ARFuture.of<boolean>();
                sCtx_943.invokeRemoteMethodAfter("removeFromAccessGroup", result_983, argsNames_984, argsValues_985);
                const reqId_981 = sCtx_943.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_983 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_943, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_983.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_982.writeInt(reqId_981);
                dataOut_982.writeLong(groupId);
                FastMeta.META_UUID.serialize(sCtx_943, uid, dataOut_982);
                sCtx_943.sendToRemote(dataOut_982.toArray());
                return result_983;
                
            }
            , checkAccessForSendMessage: (uid: UUID): AFuture =>  {
                const dataOut_987 = new DataInOut();
                dataOut_987.writeByte(11);
                const argsNames_989: string[] = ["uid"];
                const argsValues_990: any[] = [uid];
                const result_988 = AFuture.make();
                sCtx_943.invokeRemoteMethodAfter("checkAccessForSendMessage", result_988, argsNames_989, argsValues_990);
                const reqId_986 = sCtx_943.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_988 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_988.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_987.writeInt(reqId_986);
                FastMeta.META_UUID.serialize(sCtx_943, uid, dataOut_987);
                sCtx_943.sendToRemote(dataOut_987.toArray());
                return result_988;
                
            }
            , resolverServers: (sid: number[]): void =>  {
                const dataOut_992 = new DataInOut();
                dataOut_992.writeByte(12);
                const argsNames_994: string[] = ["sid"];
                const argsValues_995: any[] = [sid];
                sCtx_943.invokeRemoteMethodAfter("resolverServers", null, argsNames_994, argsValues_995);
                SerializerPackNumber.INSTANCE.put(dataOut_992, sid.length);
                for (const el_996 of sid)  {
                    dataOut_992.writeShort(el_996);
                    
                }
                sCtx_943.sendToRemote(dataOut_992.toArray());
                
            }
            , resolverClouds: (uids: UUID[]): void =>  {
                const dataOut_998 = new DataInOut();
                dataOut_998.writeByte(13);
                const argsNames_1000: string[] = ["uids"];
                const argsValues_1001: any[] = [uids];
                sCtx_943.invokeRemoteMethodAfter("resolverClouds", null, argsNames_1000, argsValues_1001);
                SerializerPackNumber.INSTANCE.put(dataOut_998, uids.length);
                for (const el_1002 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_943, el_1002, dataOut_998);
                    
                }
                sCtx_943.sendToRemote(dataOut_998.toArray());
                
            }
            , getAccessGroups: (uid: UUID): ARFuture<bigint[]> =>  {
                const dataOut_1004 = new DataInOut();
                dataOut_1004.writeByte(14);
                const argsNames_1006: string[] = ["uid"];
                const argsValues_1007: any[] = [uid];
                const result_1005 = ARFuture.of<bigint[]>();
                sCtx_943.invokeRemoteMethodAfter("getAccessGroups", result_1005, argsNames_1006, argsValues_1007);
                const reqId_1003 = sCtx_943.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1005 as ARFuture<bigint[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_LONG).deserialize(sCtx_943, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1005.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1004.writeInt(reqId_1003);
                FastMeta.META_UUID.serialize(sCtx_943, uid, dataOut_1004);
                sCtx_943.sendToRemote(dataOut_1004.toArray());
                return result_1005;
                
            }
            , getAccessGroup: (groupId: bigint): ARFuture<AccessGroup> =>  {
                const dataOut_1009 = new DataInOut();
                dataOut_1009.writeByte(15);
                const argsNames_1011: string[] = ["groupId"];
                const argsValues_1012: any[] = [groupId];
                const result_1010 = ARFuture.of<AccessGroup>();
                sCtx_943.invokeRemoteMethodAfter("getAccessGroup", result_1010, argsNames_1011, argsValues_1012);
                const reqId_1008 = sCtx_943.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1010 as ARFuture<AccessGroup>).tryDone(AccessGroup.META.deserialize(sCtx_943, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1010.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1009.writeInt(reqId_1008);
                dataOut_1009.writeLong(groupId);
                sCtx_943.sendToRemote(dataOut_1009.toArray());
                return result_1010;
                
            }
            , getAllAccessedClients: (uid: UUID): ARFuture<UUID[]> =>  {
                const dataOut_1014 = new DataInOut();
                dataOut_1014.writeByte(16);
                const argsNames_1016: string[] = ["uid"];
                const argsValues_1017: any[] = [uid];
                const result_1015 = ARFuture.of<UUID[]>();
                sCtx_943.invokeRemoteMethodAfter("getAllAccessedClients", result_1015, argsNames_1016, argsValues_1017);
                const reqId_1013 = sCtx_943.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1015 as ARFuture<UUID[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_UUID).deserialize(sCtx_943, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1015.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1014.writeInt(reqId_1013);
                FastMeta.META_UUID.serialize(sCtx_943, uid, dataOut_1014);
                sCtx_943.sendToRemote(dataOut_1014.toArray());
                return result_1015;
                
            }
            , checkAccessForSendMessage2: (uid1: UUID, uid2: UUID): ARFuture<boolean> =>  {
                const dataOut_1019 = new DataInOut();
                dataOut_1019.writeByte(17);
                const argsNames_1021: string[] = ["uid1", "uid2"];
                const argsValues_1022: any[] = [uid1, uid2];
                const result_1020 = ARFuture.of<boolean>();
                sCtx_943.invokeRemoteMethodAfter("checkAccessForSendMessage2", result_1020, argsNames_1021, argsValues_1022);
                const reqId_1018 = sCtx_943.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1020 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_943, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1020.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1019.writeInt(reqId_1018);
                FastMeta.META_UUID.serialize(sCtx_943, uid1, dataOut_1019);
                FastMeta.META_UUID.serialize(sCtx_943, uid2, dataOut_1019);
                sCtx_943.sendToRemote(dataOut_1019.toArray());
                return result_1020;
                
            }
            , sendTelemetry: (telemetry: Telemetry): void =>  {
                const dataOut_1024 = new DataInOut();
                dataOut_1024.writeByte(18);
                const argsNames_1026: string[] = ["telemetry"];
                const argsValues_1027: any[] = [telemetry];
                sCtx_943.invokeRemoteMethodAfter("sendTelemetry", null, argsNames_1026, argsValues_1027);
                Telemetry.META.serialize(sCtx_943, telemetry, dataOut_1024);
                sCtx_943.sendToRemote(dataOut_1024.toArray());
                
            }
            , requestAccessGroupsForClients: (uids: UUID[]): void =>  {
                const dataOut_1029 = new DataInOut();
                dataOut_1029.writeByte(19);
                const argsNames_1031: string[] = ["uids"];
                const argsValues_1032: any[] = [uids];
                sCtx_943.invokeRemoteMethodAfter("requestAccessGroupsForClients", null, argsNames_1031, argsValues_1032);
                SerializerPackNumber.INSTANCE.put(dataOut_1029, uids.length);
                for (const el_1033 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_943, el_1033, dataOut_1029);
                    
                }
                sCtx_943.sendToRemote(dataOut_1029.toArray());
                
            }
            , requestAccessGroupsItems: (ids: bigint[]): void =>  {
                const dataOut_1035 = new DataInOut();
                dataOut_1035.writeByte(20);
                const argsNames_1037: string[] = ["ids"];
                const argsValues_1038: any[] = [ids];
                sCtx_943.invokeRemoteMethodAfter("requestAccessGroupsItems", null, argsNames_1037, argsValues_1038);
                SerializerPackNumber.INSTANCE.put(dataOut_1035, ids.length);
                for (const el_1039 of ids)  {
                    dataOut_1035.writeLong(el_1039);
                    
                }
                sCtx_943.sendToRemote(dataOut_1035.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_1041 = new DataInOut();
                dataOut_1041.writeByte(22);
                const argsNames_1043: string[] = ["uid", "groups"];
                const argsValues_1044: any[] = [uid, groups];
                sCtx_943.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_1043, argsValues_1044);
                FastMeta.META_UUID.serialize(sCtx_943, uid, dataOut_1041);
                SerializerPackNumber.INSTANCE.put(dataOut_1041, groups.length);
                for (const el_1045 of groups)  {
                    dataOut_1041.writeLong(el_1045);
                    
                }
                sCtx_943.sendToRemote(dataOut_1041.toArray());
                
            }
            , addItemsToAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_1047 = new DataInOut();
                dataOut_1047.writeByte(23);
                const argsNames_1049: string[] = ["id", "groups"];
                const argsValues_1050: any[] = [id, groups];
                sCtx_943.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_1049, argsValues_1050);
                dataOut_1047.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_1047, groups.length);
                for (const el_1051 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_943, el_1051, dataOut_1047);
                    
                }
                sCtx_943.sendToRemote(dataOut_1047.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_1053 = new DataInOut();
                dataOut_1053.writeByte(24);
                const argsNames_1055: string[] = ["id", "groups"];
                const argsValues_1056: any[] = [id, groups];
                sCtx_943.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_1055, argsValues_1056);
                dataOut_1053.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_1053, groups.length);
                for (const el_1057 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_943, el_1057, dataOut_1053);
                    
                }
                sCtx_943.sendToRemote(dataOut_1053.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_1059 = new DataInOut();
                dataOut_1059.writeByte(25);
                const argsNames_1061: string[] = ["uid", "groups"];
                const argsValues_1062: any[] = [uid, groups];
                sCtx_943.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_1061, argsValues_1062);
                FastMeta.META_UUID.serialize(sCtx_943, uid, dataOut_1059);
                SerializerPackNumber.INSTANCE.put(dataOut_1059, groups.length);
                for (const el_1063 of groups)  {
                    dataOut_1059.writeLong(el_1063);
                    
                }
                sCtx_943.sendToRemote(dataOut_1059.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_1065 = new DataInOut();
                dataOut_1065.writeByte(26);
                const argsNames_1067: string[] = ["uid", "groups"];
                const argsValues_1068: any[] = [uid, groups];
                sCtx_943.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_1067, argsValues_1068);
                FastMeta.META_UUID.serialize(sCtx_943, uid, dataOut_1065);
                SerializerPackNumber.INSTANCE.put(dataOut_1065, groups.length);
                for (const el_1069 of groups)  {
                    dataOut_1065.writeLong(el_1069);
                    
                }
                sCtx_943.sendToRemote(dataOut_1065.toArray());
                
            }
            , requestAllAccessedClients: (uids: UUID[]): void =>  {
                const dataOut_1071 = new DataInOut();
                dataOut_1071.writeByte(27);
                const argsNames_1073: string[] = ["uids"];
                const argsValues_1074: any[] = [uids];
                sCtx_943.invokeRemoteMethodAfter("requestAllAccessedClients", null, argsNames_1073, argsValues_1074);
                SerializerPackNumber.INSTANCE.put(dataOut_1071, uids.length);
                for (const el_1075 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_943, el_1075, dataOut_1071);
                    
                }
                sCtx_943.sendToRemote(dataOut_1071.toArray());
                
            }
            , requestAccessCheck: (requests: AccessCheckPair[]): void =>  {
                const dataOut_1077 = new DataInOut();
                dataOut_1077.writeByte(28);
                const argsNames_1079: string[] = ["requests"];
                const argsValues_1080: any[] = [requests];
                sCtx_943.invokeRemoteMethodAfter("requestAccessCheck", null, argsNames_1079, argsValues_1080);
                SerializerPackNumber.INSTANCE.put(dataOut_1077, requests.length);
                for (const el_1081 of requests)  {
                    AccessCheckPair.META.serialize(sCtx_943, el_1081, dataOut_1077);
                    
                }
                sCtx_943.sendToRemote(dataOut_1077.toArray());
                
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
                    const reqId_1082 = dataIn.readInt();
                    const argsNames_1083: string[] = [];
                    const argsValues_1084: any[] = [];
                    ctx.invokeLocalMethodBefore("getTimeUTC", argsNames_1083, argsValues_1084);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getTimeUTC();
                    ctx.invokeLocalMethodAfter("getTimeUTC", resultFuture, argsNames_1083, argsValues_1084);
                    resultFuture.to((v_1086: bigint) =>  {
                        const data_1085 = new DataInOut();
                        data_1085.writeLong(v_1086);
                        ctx.sendResultToRemote(reqId_1082, data_1085.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let uid_1088: UUID;
                    let data_1089: LoginStream;
                    uid_1088 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_1089 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsNames_1090: string[] = ["uid", "data"];
                    const argsValues_1091: any[] = [uid_1088, data_1089];
                    ctx.invokeLocalMethodBefore("loginByUID", argsNames_1090, argsValues_1091);
                    localApi.loginByUID(uid_1088, data_1089);
                    ctx.invokeLocalMethodAfter("loginByUID", null, argsNames_1090, argsValues_1091);
                    break;
                    
                }
                case 5:  {
                    let alias_1093: UUID;
                    let data_1094: LoginStream;
                    alias_1093 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_1094 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsNames_1095: string[] = ["alias", "data"];
                    const argsValues_1096: any[] = [alias_1093, data_1094];
                    ctx.invokeLocalMethodBefore("loginByAlias", argsNames_1095, argsValues_1096);
                    localApi.loginByAlias(alias_1093, data_1094);
                    ctx.invokeLocalMethodAfter("loginByAlias", null, argsNames_1095, argsValues_1096);
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
    makeRemote(sCtx_1097: FastFutureContext): LoginApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_1097.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_1097, getTimeUTC: (): ARFuture<bigint> =>  {
                const dataOut_1099 = new DataInOut();
                dataOut_1099.writeByte(3);
                const argsNames_1101: string[] = [];
                const argsValues_1102: any[] = [];
                const result_1100 = ARFuture.of<bigint>();
                sCtx_1097.invokeRemoteMethodAfter("getTimeUTC", result_1100, argsNames_1101, argsValues_1102);
                const reqId_1098 = sCtx_1097.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1100 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_1097, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1100.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1099.writeInt(reqId_1098);
                sCtx_1097.sendToRemote(dataOut_1099.toArray());
                return result_1100;
                
            }
            , loginByUID: (uid: UUID, data: LoginStream): void =>  {
                const dataOut_1104 = new DataInOut();
                dataOut_1104.writeByte(4);
                const argsNames_1106: string[] = ["uid", "data"];
                const argsValues_1107: any[] = [uid, data];
                sCtx_1097.invokeRemoteMethodAfter("loginByUID", null, argsNames_1106, argsValues_1107);
                FastMeta.META_UUID.serialize(sCtx_1097, uid, dataOut_1104);
                LoginStream.META.serialize(sCtx_1097, data, dataOut_1104);
                sCtx_1097.sendToRemote(dataOut_1104.toArray());
                
            }
            , loginByAlias: (alias: UUID, data: LoginStream): void =>  {
                const dataOut_1109 = new DataInOut();
                dataOut_1109.writeByte(5);
                const argsNames_1111: string[] = ["alias", "data"];
                const argsValues_1112: any[] = [alias, data];
                sCtx_1097.invokeRemoteMethodAfter("loginByAlias", null, argsNames_1111, argsValues_1112);
                FastMeta.META_UUID.serialize(sCtx_1097, alias, dataOut_1109);
                LoginStream.META.serialize(sCtx_1097, data, dataOut_1109);
                sCtx_1097.sendToRemote(dataOut_1109.toArray());
                
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
    makeRemote(sCtx_1113: FastFutureContext): ServerApiByUidClientRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_1113.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_1113, 
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
                    const reqId_1114 = dataIn.readInt();
                    const argsNames_1115: string[] = [];
                    const argsValues_1116: any[] = [];
                    ctx.invokeLocalMethodBefore("getBalance", argsNames_1115, argsValues_1116);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBalance();
                    ctx.invokeLocalMethodAfter("getBalance", resultFuture, argsNames_1115, argsValues_1116);
                    resultFuture.to((v_1118: bigint) =>  {
                        const data_1117 = new DataInOut();
                        data_1117.writeLong(v_1118);
                        ctx.sendResultToRemote(reqId_1114, data_1117.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    const reqId_1119 = dataIn.readInt();
                    let uid_1120: UUID;
                    uid_1120 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1121: string[] = ["uid"];
                    const argsValues_1122: any[] = [uid_1120];
                    ctx.invokeLocalMethodBefore("setParent", argsNames_1121, argsValues_1122);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.setParent(uid_1120);
                    ctx.invokeLocalMethodAfter("setParent", resultFuture, argsNames_1121, argsValues_1122);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1119);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_1123 = dataIn.readInt();
                    const argsNames_1124: string[] = [];
                    const argsValues_1125: any[] = [];
                    ctx.invokeLocalMethodBefore("block", argsNames_1124, argsValues_1125);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.block();
                    ctx.invokeLocalMethodAfter("block", resultFuture, argsNames_1124, argsValues_1125);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1123);
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    const reqId_1126 = dataIn.readInt();
                    const argsNames_1127: string[] = [];
                    const argsValues_1128: any[] = [];
                    ctx.invokeLocalMethodBefore("getPosition", argsNames_1127, argsValues_1128);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getPosition();
                    ctx.invokeLocalMethodAfter("getPosition", resultFuture, argsNames_1127, argsValues_1128);
                    resultFuture.to((v_1130: Cloud) =>  {
                        const data_1129 = new DataInOut();
                        Cloud.META.serialize(ctx, v_1130, data_1129);
                        ctx.sendResultToRemote(reqId_1126, data_1129.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 7:  {
                    const reqId_1131 = dataIn.readInt();
                    const argsNames_1132: string[] = [];
                    const argsValues_1133: any[] = [];
                    ctx.invokeLocalMethodBefore("getParent", argsNames_1132, argsValues_1133);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getParent();
                    ctx.invokeLocalMethodAfter("getParent", resultFuture, argsNames_1132, argsValues_1133);
                    resultFuture.to((v_1135: UUID) =>  {
                        const data_1134 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_1135, data_1134);
                        ctx.sendResultToRemote(reqId_1131, data_1134.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 8:  {
                    const reqId_1136 = dataIn.readInt();
                    const argsNames_1137: string[] = [];
                    const argsValues_1138: any[] = [];
                    ctx.invokeLocalMethodBefore("getBeneficiary", argsNames_1137, argsValues_1138);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBeneficiary();
                    ctx.invokeLocalMethodAfter("getBeneficiary", resultFuture, argsNames_1137, argsValues_1138);
                    resultFuture.to((v_1140: UUID) =>  {
                        const data_1139 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_1140, data_1139);
                        ctx.sendResultToRemote(reqId_1136, data_1139.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_1141 = dataIn.readInt();
                    let uid_1142: UUID;
                    uid_1142 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1143: string[] = ["uid"];
                    const argsValues_1144: any[] = [uid_1142];
                    ctx.invokeLocalMethodBefore("setBeneficiary", argsNames_1143, argsValues_1144);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.setBeneficiary(uid_1142);
                    ctx.invokeLocalMethodAfter("setBeneficiary", resultFuture, argsNames_1143, argsValues_1144);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1141);
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_1145 = dataIn.readInt();
                    const argsNames_1146: string[] = [];
                    const argsValues_1147: any[] = [];
                    ctx.invokeLocalMethodBefore("getBlockTime", argsNames_1146, argsValues_1147);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBlockTime();
                    ctx.invokeLocalMethodAfter("getBlockTime", resultFuture, argsNames_1146, argsValues_1147);
                    resultFuture.to((v_1149: Date) =>  {
                        const data_1148 = new DataInOut();
                        data_1148.writeLong(v_1149.getTime());
                        ctx.sendResultToRemote(reqId_1145, data_1148.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_1150 = dataIn.readInt();
                    const argsNames_1151: string[] = [];
                    const argsValues_1152: any[] = [];
                    ctx.invokeLocalMethodBefore("unblock", argsNames_1151, argsValues_1152);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.unblock();
                    ctx.invokeLocalMethodAfter("unblock", resultFuture, argsNames_1151, argsValues_1152);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1150);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    const reqId_1153 = dataIn.readInt();
                    const argsNames_1154: string[] = [];
                    const argsValues_1155: any[] = [];
                    ctx.invokeLocalMethodBefore("createTime", argsNames_1154, argsValues_1155);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.createTime();
                    ctx.invokeLocalMethodAfter("createTime", resultFuture, argsNames_1154, argsValues_1155);
                    resultFuture.to((v_1157: Date) =>  {
                        const data_1156 = new DataInOut();
                        data_1156.writeLong(v_1157.getTime());
                        ctx.sendResultToRemote(reqId_1153, data_1156.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 13:  {
                    const reqId_1158 = dataIn.readInt();
                    const argsNames_1159: string[] = [];
                    const argsValues_1160: any[] = [];
                    ctx.invokeLocalMethodBefore("onlineTime", argsNames_1159, argsValues_1160);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.onlineTime();
                    ctx.invokeLocalMethodAfter("onlineTime", resultFuture, argsNames_1159, argsValues_1160);
                    resultFuture.to((v_1162: Date) =>  {
                        const data_1161 = new DataInOut();
                        data_1161.writeLong(v_1162.getTime());
                        ctx.sendResultToRemote(reqId_1158, data_1161.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 14:  {
                    const reqId_1163 = dataIn.readInt();
                    let groupId_1164: bigint;
                    groupId_1164 = dataIn.readLong();
                    const argsNames_1165: string[] = ["groupId"];
                    const argsValues_1166: any[] = [groupId_1164];
                    ctx.invokeLocalMethodBefore("addAccessGroup", argsNames_1165, argsValues_1166);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.addAccessGroup(groupId_1164);
                    ctx.invokeLocalMethodAfter("addAccessGroup", resultFuture, argsNames_1165, argsValues_1166);
                    resultFuture.to((v_1168: boolean) =>  {
                        const data_1167 = new DataInOut();
                        data_1167.writeBoolean(v_1168);
                        ctx.sendResultToRemote(reqId_1163, data_1167.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_1169 = dataIn.readInt();
                    let groupId_1170: bigint;
                    groupId_1170 = dataIn.readLong();
                    const argsNames_1171: string[] = ["groupId"];
                    const argsValues_1172: any[] = [groupId_1170];
                    ctx.invokeLocalMethodBefore("removeAccessGroup", argsNames_1171, argsValues_1172);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.removeAccessGroup(groupId_1170);
                    ctx.invokeLocalMethodAfter("removeAccessGroup", resultFuture, argsNames_1171, argsValues_1172);
                    resultFuture.to((v_1174: boolean) =>  {
                        const data_1173 = new DataInOut();
                        data_1173.writeBoolean(v_1174);
                        ctx.sendResultToRemote(reqId_1169, data_1173.toArray());
                        
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
    makeRemote(sCtx_1175: FastFutureContext): ServerApiByUidRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_1175.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_1175, getBalance: (): ARFuture<bigint> =>  {
                const dataOut_1177 = new DataInOut();
                dataOut_1177.writeByte(3);
                const argsNames_1179: string[] = [];
                const argsValues_1180: any[] = [];
                const result_1178 = ARFuture.of<bigint>();
                sCtx_1175.invokeRemoteMethodAfter("getBalance", result_1178, argsNames_1179, argsValues_1180);
                const reqId_1176 = sCtx_1175.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1178 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_1175, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1178.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1177.writeInt(reqId_1176);
                sCtx_1175.sendToRemote(dataOut_1177.toArray());
                return result_1178;
                
            }
            , setParent: (uid: UUID): AFuture =>  {
                const dataOut_1182 = new DataInOut();
                dataOut_1182.writeByte(4);
                const argsNames_1184: string[] = ["uid"];
                const argsValues_1185: any[] = [uid];
                const result_1183 = AFuture.make();
                sCtx_1175.invokeRemoteMethodAfter("setParent", result_1183, argsNames_1184, argsValues_1185);
                const reqId_1181 = sCtx_1175.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1183 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1183.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1182.writeInt(reqId_1181);
                FastMeta.META_UUID.serialize(sCtx_1175, uid, dataOut_1182);
                sCtx_1175.sendToRemote(dataOut_1182.toArray());
                return result_1183;
                
            }
            , block: (): AFuture =>  {
                const dataOut_1187 = new DataInOut();
                dataOut_1187.writeByte(5);
                const argsNames_1189: string[] = [];
                const argsValues_1190: any[] = [];
                const result_1188 = AFuture.make();
                sCtx_1175.invokeRemoteMethodAfter("block", result_1188, argsNames_1189, argsValues_1190);
                const reqId_1186 = sCtx_1175.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1188 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1188.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1187.writeInt(reqId_1186);
                sCtx_1175.sendToRemote(dataOut_1187.toArray());
                return result_1188;
                
            }
            , getPosition: (): ARFuture<Cloud> =>  {
                const dataOut_1192 = new DataInOut();
                dataOut_1192.writeByte(6);
                const argsNames_1194: string[] = [];
                const argsValues_1195: any[] = [];
                const result_1193 = ARFuture.of<Cloud>();
                sCtx_1175.invokeRemoteMethodAfter("getPosition", result_1193, argsNames_1194, argsValues_1195);
                const reqId_1191 = sCtx_1175.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1193 as ARFuture<Cloud>).tryDone(Cloud.META.deserialize(sCtx_1175, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1193.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1192.writeInt(reqId_1191);
                sCtx_1175.sendToRemote(dataOut_1192.toArray());
                return result_1193;
                
            }
            , getParent: (): ARFuture<UUID> =>  {
                const dataOut_1197 = new DataInOut();
                dataOut_1197.writeByte(7);
                const argsNames_1199: string[] = [];
                const argsValues_1200: any[] = [];
                const result_1198 = ARFuture.of<UUID>();
                sCtx_1175.invokeRemoteMethodAfter("getParent", result_1198, argsNames_1199, argsValues_1200);
                const reqId_1196 = sCtx_1175.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1198 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_1175, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1198.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1197.writeInt(reqId_1196);
                sCtx_1175.sendToRemote(dataOut_1197.toArray());
                return result_1198;
                
            }
            , getBeneficiary: (): ARFuture<UUID> =>  {
                const dataOut_1202 = new DataInOut();
                dataOut_1202.writeByte(8);
                const argsNames_1204: string[] = [];
                const argsValues_1205: any[] = [];
                const result_1203 = ARFuture.of<UUID>();
                sCtx_1175.invokeRemoteMethodAfter("getBeneficiary", result_1203, argsNames_1204, argsValues_1205);
                const reqId_1201 = sCtx_1175.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1203 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_1175, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1203.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1202.writeInt(reqId_1201);
                sCtx_1175.sendToRemote(dataOut_1202.toArray());
                return result_1203;
                
            }
            , setBeneficiary: (uid: UUID): AFuture =>  {
                const dataOut_1207 = new DataInOut();
                dataOut_1207.writeByte(9);
                const argsNames_1209: string[] = ["uid"];
                const argsValues_1210: any[] = [uid];
                const result_1208 = AFuture.make();
                sCtx_1175.invokeRemoteMethodAfter("setBeneficiary", result_1208, argsNames_1209, argsValues_1210);
                const reqId_1206 = sCtx_1175.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1208 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1208.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1207.writeInt(reqId_1206);
                FastMeta.META_UUID.serialize(sCtx_1175, uid, dataOut_1207);
                sCtx_1175.sendToRemote(dataOut_1207.toArray());
                return result_1208;
                
            }
            , getBlockTime: (): ARFuture<Date> =>  {
                const dataOut_1212 = new DataInOut();
                dataOut_1212.writeByte(10);
                const argsNames_1214: string[] = [];
                const argsValues_1215: any[] = [];
                const result_1213 = ARFuture.of<Date>();
                sCtx_1175.invokeRemoteMethodAfter("getBlockTime", result_1213, argsNames_1214, argsValues_1215);
                const reqId_1211 = sCtx_1175.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1213 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1175, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1213.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1212.writeInt(reqId_1211);
                sCtx_1175.sendToRemote(dataOut_1212.toArray());
                return result_1213;
                
            }
            , unblock: (): AFuture =>  {
                const dataOut_1217 = new DataInOut();
                dataOut_1217.writeByte(11);
                const argsNames_1219: string[] = [];
                const argsValues_1220: any[] = [];
                const result_1218 = AFuture.make();
                sCtx_1175.invokeRemoteMethodAfter("unblock", result_1218, argsNames_1219, argsValues_1220);
                const reqId_1216 = sCtx_1175.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1218 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1218.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1217.writeInt(reqId_1216);
                sCtx_1175.sendToRemote(dataOut_1217.toArray());
                return result_1218;
                
            }
            , createTime: (): ARFuture<Date> =>  {
                const dataOut_1222 = new DataInOut();
                dataOut_1222.writeByte(12);
                const argsNames_1224: string[] = [];
                const argsValues_1225: any[] = [];
                const result_1223 = ARFuture.of<Date>();
                sCtx_1175.invokeRemoteMethodAfter("createTime", result_1223, argsNames_1224, argsValues_1225);
                const reqId_1221 = sCtx_1175.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1223 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1175, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1223.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1222.writeInt(reqId_1221);
                sCtx_1175.sendToRemote(dataOut_1222.toArray());
                return result_1223;
                
            }
            , onlineTime: (): ARFuture<Date> =>  {
                const dataOut_1227 = new DataInOut();
                dataOut_1227.writeByte(13);
                const argsNames_1229: string[] = [];
                const argsValues_1230: any[] = [];
                const result_1228 = ARFuture.of<Date>();
                sCtx_1175.invokeRemoteMethodAfter("onlineTime", result_1228, argsNames_1229, argsValues_1230);
                const reqId_1226 = sCtx_1175.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1228 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1175, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1228.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1227.writeInt(reqId_1226);
                sCtx_1175.sendToRemote(dataOut_1227.toArray());
                return result_1228;
                
            }
            , addAccessGroup: (groupId: bigint): ARFuture<boolean> =>  {
                const dataOut_1232 = new DataInOut();
                dataOut_1232.writeByte(14);
                const argsNames_1234: string[] = ["groupId"];
                const argsValues_1235: any[] = [groupId];
                const result_1233 = ARFuture.of<boolean>();
                sCtx_1175.invokeRemoteMethodAfter("addAccessGroup", result_1233, argsNames_1234, argsValues_1235);
                const reqId_1231 = sCtx_1175.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1233 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1175, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1233.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1232.writeInt(reqId_1231);
                dataOut_1232.writeLong(groupId);
                sCtx_1175.sendToRemote(dataOut_1232.toArray());
                return result_1233;
                
            }
            , removeAccessGroup: (groupId: bigint): ARFuture<boolean> =>  {
                const dataOut_1237 = new DataInOut();
                dataOut_1237.writeByte(15);
                const argsNames_1239: string[] = ["groupId"];
                const argsValues_1240: any[] = [groupId];
                const result_1238 = ARFuture.of<boolean>();
                sCtx_1175.invokeRemoteMethodAfter("removeAccessGroup", result_1238, argsNames_1239, argsValues_1240);
                const reqId_1236 = sCtx_1175.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1238 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1175, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1238.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1237.writeInt(reqId_1236);
                dataOut_1237.writeLong(groupId);
                sCtx_1175.sendToRemote(dataOut_1237.toArray());
                return result_1238;
                
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
    makeRemote(sCtx_1241: FastFutureContext): ClientApiRegSafeRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_1241.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_1241, 
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
    makeRemote(sCtx_1242: FastFutureContext): GlobalRegClientApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_1242.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_1242, 
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
                    let stream_1244: ClientApiRegSafeStream;
                    stream_1244 = ClientApiRegSafeStream.META.deserialize(ctx, dataIn);
                    const argsNames_1245: string[] = ["stream"];
                    const argsValues_1246: any[] = [stream_1244];
                    ctx.invokeLocalMethodBefore("enter", argsNames_1245, argsValues_1246);
                    localApi.enter(stream_1244);
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_1245, argsValues_1246);
                    break;
                    
                }
                case 4:  {
                    let stream_1248: GlobalRegClientApiStream;
                    stream_1248 = GlobalRegClientApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_1249: string[] = ["stream"];
                    const argsValues_1250: any[] = [stream_1248];
                    ctx.invokeLocalMethodBefore("enterGlobal", argsNames_1249, argsValues_1250);
                    localApi.enterGlobal(stream_1248);
                    ctx.invokeLocalMethodAfter("enterGlobal", null, argsNames_1249, argsValues_1250);
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
    makeRemote(sCtx_1251: FastFutureContext): ClientApiRegUnsafeRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_1251.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_1251, enter: (stream: ClientApiRegSafeStream): void =>  {
                const dataOut_1253 = new DataInOut();
                dataOut_1253.writeByte(3);
                const argsNames_1255: string[] = ["stream"];
                const argsValues_1256: any[] = [stream];
                sCtx_1251.invokeRemoteMethodAfter("enter", null, argsNames_1255, argsValues_1256);
                ClientApiRegSafeStream.META.serialize(sCtx_1251, stream, dataOut_1253);
                sCtx_1251.sendToRemote(dataOut_1253.toArray());
                
            }
            , enterGlobal: (stream: GlobalRegClientApiStream): void =>  {
                const dataOut_1258 = new DataInOut();
                dataOut_1258.writeByte(4);
                const argsNames_1260: string[] = ["stream"];
                const argsValues_1261: any[] = [stream];
                sCtx_1251.invokeRemoteMethodAfter("enterGlobal", null, argsNames_1260, argsValues_1261);
                GlobalRegClientApiStream.META.serialize(sCtx_1251, stream, dataOut_1258);
                sCtx_1251.sendToRemote(dataOut_1258.toArray());
                
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
                    let _key_1263: Key;
                    _key_1263 = Key.META.deserialize(ctx, dataIn);
                    const argsNames_1264: string[] = ["key"];
                    const argsValues_1265: any[] = [_key_1263];
                    ctx.invokeLocalMethodBefore("setMasterKey", argsNames_1264, argsValues_1265);
                    localApi.setMasterKey(_key_1263);
                    ctx.invokeLocalMethodAfter("setMasterKey", null, argsNames_1264, argsValues_1265);
                    break;
                    
                }
                case 4:  {
                    const reqId_1266 = dataIn.readInt();
                    const argsNames_1267: string[] = [];
                    const argsValues_1268: any[] = [];
                    ctx.invokeLocalMethodBefore("finish", argsNames_1267, argsValues_1268);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.finish();
                    ctx.invokeLocalMethodAfter("finish", resultFuture, argsNames_1267, argsValues_1268);
                    resultFuture.to((v_1270: FinishResult) =>  {
                        const data_1269 = new DataInOut();
                        FinishResult.META.serialize(ctx, v_1270, data_1269);
                        ctx.sendResultToRemote(reqId_1266, data_1269.toArray());
                        
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
    makeRemote(sCtx_1271: FastFutureContext): GlobalRegServerApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_1271.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_1271, setMasterKey: (key: Key): void =>  {
                const dataOut_1273 = new DataInOut();
                dataOut_1273.writeByte(3);
                const argsNames_1275: string[] = ["key"];
                const argsValues_1276: any[] = [key];
                sCtx_1271.invokeRemoteMethodAfter("setMasterKey", null, argsNames_1275, argsValues_1276);
                Key.META.serialize(sCtx_1271, key, dataOut_1273);
                sCtx_1271.sendToRemote(dataOut_1273.toArray());
                
            }
            , finish: (): ARFuture<FinishResult> =>  {
                const dataOut_1278 = new DataInOut();
                dataOut_1278.writeByte(4);
                const argsNames_1280: string[] = [];
                const argsValues_1281: any[] = [];
                const result_1279 = ARFuture.of<FinishResult>();
                sCtx_1271.invokeRemoteMethodAfter("finish", result_1279, argsNames_1280, argsValues_1281);
                const reqId_1277 = sCtx_1271.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1279 as ARFuture<FinishResult>).tryDone(FinishResult.META.deserialize(sCtx_1271, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1279.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1278.writeInt(reqId_1277);
                sCtx_1271.sendToRemote(dataOut_1278.toArray());
                return result_1279;
                
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
                    let salt_1283: string;
                    let suffix_1284: string;
                    let passwords_1285: number[];
                    let parent_1286: UUID;
                    let globalApi_1287: GlobalApi;
                    let stringBytes_1288: Uint8Array;
                    const len_1290 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1291 = dataIn.readBytes(len_1290);
                    stringBytes_1288 = bytes_1291;
                    salt_1283 = new TextDecoder('utf-8').decode(stringBytes_1288);
                    let stringBytes_1292: Uint8Array;
                    const len_1294 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1295 = dataIn.readBytes(len_1294);
                    stringBytes_1292 = bytes_1295;
                    suffix_1284 = new TextDecoder('utf-8').decode(stringBytes_1292);
                    const len_1297 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    passwords_1285 = new Array<number>(len_1297);
                    for (let idx_1296 = 0;
                    idx_1296 < len_1297;
                    idx_1296++)  {
                        passwords_1285[idx_1296] = dataIn.readInt();
                        
                    }
                    parent_1286 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    globalApi_1287 = GlobalApi.META.deserialize(ctx, dataIn);
                    const argsNames_1298: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                    const argsValues_1299: any[] = [salt_1283, suffix_1284, passwords_1285, parent_1286, globalApi_1287];
                    ctx.invokeLocalMethodBefore("registration", argsNames_1298, argsValues_1299);
                    localApi.registration(salt_1283, suffix_1284, passwords_1285, parent_1286, globalApi_1287);
                    ctx.invokeLocalMethodAfter("registration", null, argsNames_1298, argsValues_1299);
                    break;
                    
                }
                case 4:  {
                    const reqId_1300 = dataIn.readInt();
                    let parent_1301: UUID;
                    let powMethods_1302: PowMethod;
                    parent_1301 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    powMethods_1302 = PowMethod.META.deserialize(ctx, dataIn);
                    const argsNames_1303: string[] = ["parent", "powMethods"];
                    const argsValues_1304: any[] = [parent_1301, powMethods_1302];
                    ctx.invokeLocalMethodBefore("requestWorkProofData", argsNames_1303, argsValues_1304);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.requestWorkProofData(parent_1301, powMethods_1302);
                    ctx.invokeLocalMethodAfter("requestWorkProofData", resultFuture, argsNames_1303, argsValues_1304);
                    resultFuture.to((v_1306: WorkProofDTO) =>  {
                        const data_1305 = new DataInOut();
                        WorkProofDTO.META.serialize(ctx, v_1306, data_1305);
                        ctx.sendResultToRemote(reqId_1300, data_1305.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_1307 = dataIn.readInt();
                    let serverIds_1308: Cloud;
                    serverIds_1308 = Cloud.META.deserialize(ctx, dataIn);
                    const argsNames_1309: string[] = ["serverIds"];
                    const argsValues_1310: any[] = [serverIds_1308];
                    ctx.invokeLocalMethodBefore("resolveServers", argsNames_1309, argsValues_1310);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.resolveServers(serverIds_1308);
                    ctx.invokeLocalMethodAfter("resolveServers", resultFuture, argsNames_1309, argsValues_1310);
                    resultFuture.to((v_1312: ServerDescriptor[]) =>  {
                        const data_1311 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1311, v_1312.length);
                        for (const el_1313 of v_1312)  {
                            ServerDescriptor.META.serialize(ctx, el_1313, data_1311);
                            
                        }
                        ctx.sendResultToRemote(reqId_1307, data_1311.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    let _key_1315: Key;
                    _key_1315 = Key.META.deserialize(ctx, dataIn);
                    const argsNames_1316: string[] = ["key"];
                    const argsValues_1317: any[] = [_key_1315];
                    ctx.invokeLocalMethodBefore("setReturnKey", argsNames_1316, argsValues_1317);
                    localApi.setReturnKey(_key_1315);
                    ctx.invokeLocalMethodAfter("setReturnKey", null, argsNames_1316, argsValues_1317);
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
    makeRemote(sCtx_1318: FastFutureContext): ServerRegistrationApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_1318.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_1318, registration: (salt: string, suffix: string, passwords: number[], parent: UUID, globalApi: GlobalApi): void =>  {
                const dataOut_1320 = new DataInOut();
                dataOut_1320.writeByte(3);
                const argsNames_1322: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                const argsValues_1323: any[] = [salt, suffix, passwords, parent, globalApi];
                sCtx_1318.invokeRemoteMethodAfter("registration", null, argsNames_1322, argsValues_1323);
                const stringBytes_1324 = new TextEncoder().encode(salt);
                SerializerPackNumber.INSTANCE.put(dataOut_1320, stringBytes_1324.length);
                dataOut_1320.write(stringBytes_1324);
                const stringBytes_1326 = new TextEncoder().encode(suffix);
                SerializerPackNumber.INSTANCE.put(dataOut_1320, stringBytes_1326.length);
                dataOut_1320.write(stringBytes_1326);
                SerializerPackNumber.INSTANCE.put(dataOut_1320, passwords.length);
                for (const el_1328 of passwords)  {
                    dataOut_1320.writeInt(el_1328);
                    
                }
                FastMeta.META_UUID.serialize(sCtx_1318, parent, dataOut_1320);
                GlobalApi.META.serialize(sCtx_1318, globalApi, dataOut_1320);
                sCtx_1318.sendToRemote(dataOut_1320.toArray());
                
            }
            , requestWorkProofData: (parent: UUID, powMethods: PowMethod): ARFuture<WorkProofDTO> =>  {
                const dataOut_1330 = new DataInOut();
                dataOut_1330.writeByte(4);
                const argsNames_1332: string[] = ["parent", "powMethods"];
                const argsValues_1333: any[] = [parent, powMethods];
                const result_1331 = ARFuture.of<WorkProofDTO>();
                sCtx_1318.invokeRemoteMethodAfter("requestWorkProofData", result_1331, argsNames_1332, argsValues_1333);
                const reqId_1329 = sCtx_1318.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1331 as ARFuture<WorkProofDTO>).tryDone(WorkProofDTO.META.deserialize(sCtx_1318, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1331.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1330.writeInt(reqId_1329);
                FastMeta.META_UUID.serialize(sCtx_1318, parent, dataOut_1330);
                PowMethod.META.serialize(sCtx_1318, powMethods, dataOut_1330);
                sCtx_1318.sendToRemote(dataOut_1330.toArray());
                return result_1331;
                
            }
            , resolveServers: (serverIds: Cloud): ARFuture<ServerDescriptor[]> =>  {
                const dataOut_1335 = new DataInOut();
                dataOut_1335.writeByte(5);
                const argsNames_1337: string[] = ["serverIds"];
                const argsValues_1338: any[] = [serverIds];
                const result_1336 = ARFuture.of<ServerDescriptor[]>();
                sCtx_1318.invokeRemoteMethodAfter("resolveServers", result_1336, argsNames_1337, argsValues_1338);
                const reqId_1334 = sCtx_1318.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1336 as ARFuture<ServerDescriptor[]>).tryDone(FastMeta.getMetaArray(ServerDescriptor.META).deserialize(sCtx_1318, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1336.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1335.writeInt(reqId_1334);
                Cloud.META.serialize(sCtx_1318, serverIds, dataOut_1335);
                sCtx_1318.sendToRemote(dataOut_1335.toArray());
                return result_1336;
                
            }
            , setReturnKey: (key: Key): void =>  {
                const dataOut_1340 = new DataInOut();
                dataOut_1340.writeByte(6);
                const argsNames_1342: string[] = ["key"];
                const argsValues_1343: any[] = [key];
                sCtx_1318.invokeRemoteMethodAfter("setReturnKey", null, argsNames_1342, argsValues_1343);
                Key.META.serialize(sCtx_1318, key, dataOut_1340);
                sCtx_1318.sendToRemote(dataOut_1340.toArray());
                
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
                    const reqId_1344 = dataIn.readInt();
                    let cryptoLib_1345: CryptoLib;
                    cryptoLib_1345 = CryptoLib.META.deserialize(ctx, dataIn);
                    const argsNames_1346: string[] = ["cryptoLib"];
                    const argsValues_1347: any[] = [cryptoLib_1345];
                    ctx.invokeLocalMethodBefore("getAsymmetricPublicKey", argsNames_1346, argsValues_1347);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAsymmetricPublicKey(cryptoLib_1345);
                    ctx.invokeLocalMethodAfter("getAsymmetricPublicKey", resultFuture, argsNames_1346, argsValues_1347);
                    resultFuture.to((v_1349: SignedKey) =>  {
                        const data_1348 = new DataInOut();
                        SignedKey.META.serialize(ctx, v_1349, data_1348);
                        ctx.sendResultToRemote(reqId_1344, data_1348.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let cryptoLib_1351: CryptoLib;
                    let stream_1352: ServerRegistrationApiStream;
                    cryptoLib_1351 = CryptoLib.META.deserialize(ctx, dataIn);
                    stream_1352 = ServerRegistrationApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_1353: string[] = ["cryptoLib", "stream"];
                    const argsValues_1354: any[] = [cryptoLib_1351, stream_1352];
                    ctx.invokeLocalMethodBefore("enter", argsNames_1353, argsValues_1354);
                    localApi.enter(cryptoLib_1351, stream_1352);
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_1353, argsValues_1354);
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
    makeRemote(sCtx_1355: FastFutureContext): RegistrationRootApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_1355.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_1355, getAsymmetricPublicKey: (cryptoLib: CryptoLib): ARFuture<SignedKey> =>  {
                const dataOut_1357 = new DataInOut();
                dataOut_1357.writeByte(3);
                const argsNames_1359: string[] = ["cryptoLib"];
                const argsValues_1360: any[] = [cryptoLib];
                const result_1358 = ARFuture.of<SignedKey>();
                sCtx_1355.invokeRemoteMethodAfter("getAsymmetricPublicKey", result_1358, argsNames_1359, argsValues_1360);
                const reqId_1356 = sCtx_1355.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1358 as ARFuture<SignedKey>).tryDone(SignedKey.META.deserialize(sCtx_1355, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1358.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1357.writeInt(reqId_1356);
                CryptoLib.META.serialize(sCtx_1355, cryptoLib, dataOut_1357);
                sCtx_1355.sendToRemote(dataOut_1357.toArray());
                return result_1358;
                
            }
            , enter: (cryptoLib: CryptoLib, stream: ServerRegistrationApiStream): void =>  {
                const dataOut_1362 = new DataInOut();
                dataOut_1362.writeByte(4);
                const argsNames_1364: string[] = ["cryptoLib", "stream"];
                const argsValues_1365: any[] = [cryptoLib, stream];
                sCtx_1355.invokeRemoteMethodAfter("enter", null, argsNames_1364, argsValues_1365);
                CryptoLib.META.serialize(sCtx_1355, cryptoLib, dataOut_1362);
                ServerRegistrationApiStream.META.serialize(sCtx_1355, stream, dataOut_1362);
                sCtx_1355.sendToRemote(dataOut_1362.toArray());
                
            }
            , 
        };
        return remoteApiImpl as RegistrationRootApiRemote;
        
    }
    
}
import  {
    AFuture, ARFuture 
}
from './aether_future';
import  {
    DataIn, DataOut, DataInOut, DataInOutStatic 
}
from './aether_datainout';
import  {
    FastMetaType, FastFutureContext, RemoteApi, FastMeta, SerializerPackNumber, DeserializerPackNumber, FastApiContextLocal, FastMetaApi, BytesConverter, RemoteApiFuture, FastFutureContextStub 
}
from './aether_fastmeta';
import  {
    UUID, URI, Uint8Array, AConsumer 
}
from './aether_types';
import  {
    ToString, AString 
}
from './aether_astring';
import  {
    AetherCodec, CryptoLib, PowMethod, Status, IPAddress, Key, KeyAsymmetric, KeyAsymmetricPrivate, KeyAsymmetricPublic, KeySign, KeySignPrivate, KeySignPublic, KeySymmetric, PairKeys, Sign, Telemetry, WorkProofConfig, AccessCheckPair, AccessCheckResult, AccessGroup, ClientInfo, ClientStateForSave, Cloud, CoderAndPort, FinishResultGlobalRegServerApi, HydrogenCurvePrivate, HydrogenCurvePublic, HydrogenSecretBox, HydrogenSignPrivate, HydrogenSignPublic, IPAddressAndPorts, IPAddressAndPortsList, IPAddressV4, IPAddressV6, Message, MoneyOperation, PairKeysAsym, PairKeysAsymSigned, PairKeysSign, ServerDescriptor, SignAE_ED25519, SignedKey, SignHYDROGEN, SodiumChacha20Poly1305, SodiumCurvePrivate, SodiumCurvePublic, SodiumSignPrivate, SodiumSignPublic, TelemetryCPP, UUIDAndCloud, WorkProofBCrypt, WorkProofDTO, ClientApiRegSafeStream, ClientApiStream, ClientInteractionClientStream, GlobalApiRegistrationServerRegistrationApi, GlobalRegClientApiStream, LoginClientStream, LoginStream, ServerRegistrationApiStream, ClientApiUnsafe, ClientApiSafe, AuthorizedApi, LoginApi, ServerApiByUidClient, ServerApiByUid, ClientApiRegSafe, GlobalRegClientApi, ClientApiRegUnsafe, GlobalRegServerApi, ServerRegistrationApi, RegistrationRootApi, ClientApiUnsafeRemote, ClientApiSafeRemote, AuthorizedApiRemote, LoginApiRemote, ServerApiByUidClientRemote, ServerApiByUidRemote, ClientApiRegSafeRemote, GlobalRegClientApiRemote, ClientApiRegUnsafeRemote, GlobalRegServerApiRemote, ServerRegistrationApiRemote, RegistrationRootApiRemote
}
from './aether_api';
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AetherCodec  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): CryptoLib  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): PowMethod  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): Status  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): Status  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class IPAddressMetaImpl implements FastMetaType<IPAddress>  {
    serialize(sCtx_0: FastFutureContext, obj_1: IPAddress, _out_2: DataOut): void  {
        const typeId = typeof (obj_1 as any).getAetherTypeId === 'function' ? obj_1.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'IPAddress' with invalid type id $ {
            typeId
        }
        `);
        _out_2.writeByte(typeId);
        switch(typeId)  {
            case 1: (IPAddressV4 as any).META_BODY.serialize(sCtx_0, obj_1 as any as IPAddressV4, _out_2);
            break;
            case 2: (IPAddressV6 as any).META_BODY.serialize(sCtx_0, obj_1 as any as IPAddressV6, _out_2);
            break;
            default: throw new Error(`Cannot serialize 'IPAddress' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_0: FastFutureContext, in__3: DataIn): IPAddress  {
        const typeId = in__3.readUByte();
        switch(typeId)  {
            case 1: return (IPAddressV4 as any).META_BODY.deserialize(sCtx_0, in__3) as any as IPAddress;
            case 2: return (IPAddressV6 as any).META_BODY.deserialize(sCtx_0, in__3) as any as IPAddress;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): IPAddress  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): IPAddress  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class KeyMetaImpl implements FastMetaType<Key>  {
    serialize(sCtx_4: FastFutureContext, obj_5: Key, _out_6: DataOut): void  {
        const typeId = typeof (obj_5 as any).getAetherTypeId === 'function' ? obj_5.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'Key' with invalid type id $ {
            typeId
        }
        `);
        _out_6.writeByte(typeId);
        switch(typeId)  {
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_4, obj_5 as any as SodiumChacha20Poly1305, _out_6);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_4, obj_5 as any as HydrogenSecretBox, _out_6);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_4, obj_5 as any as HydrogenCurvePublic, _out_6);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_4, obj_5 as any as SodiumCurvePublic, _out_6);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_4, obj_5 as any as HydrogenCurvePrivate, _out_6);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_4, obj_5 as any as SodiumCurvePrivate, _out_6);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_4, obj_5 as any as SodiumSignPublic, _out_6);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_4, obj_5 as any as HydrogenSignPublic, _out_6);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_4, obj_5 as any as SodiumSignPrivate, _out_6);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_4, obj_5 as any as HydrogenSignPrivate, _out_6);
            break;
            default: throw new Error(`Cannot serialize 'Key' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_4: FastFutureContext, in__7: DataIn): Key  {
        const typeId = in__7.readUByte();
        switch(typeId)  {
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_4, in__7) as any as Key;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_4, in__7) as any as Key;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_4, in__7) as any as Key;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_4, in__7) as any as Key;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_4, in__7) as any as Key;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_4, in__7) as any as Key;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_4, in__7) as any as Key;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_4, in__7) as any as Key;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_4, in__7) as any as Key;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_4, in__7) as any as Key;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): Key  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): Key  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class KeyAsymmetricMetaImpl implements FastMetaType<KeyAsymmetric>  {
    serialize(sCtx_8: FastFutureContext, obj_10: KeyAsymmetric, _out_11: DataOut): void  {
        const typeId = typeof (obj_10 as any).getAetherTypeId === 'function' ? obj_10.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeyAsymmetric' with invalid type id $ {
            typeId
        }
        `);
        _out_11.writeByte(typeId);
        switch(typeId)  {
            default: throw new Error(`Cannot serialize 'KeyAsymmetric' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_9: FastFutureContext, in__12: DataIn): KeyAsymmetric  {
        const typeId = in__12.readUByte();
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): KeyAsymmetric  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): KeyAsymmetric  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class KeyAsymmetricPrivateMetaImpl implements FastMetaType<KeyAsymmetricPrivate>  {
    serialize(sCtx_13: FastFutureContext, obj_15: KeyAsymmetricPrivate, _out_16: DataOut): void  {
        const typeId = typeof (obj_15 as any).getAetherTypeId === 'function' ? obj_15.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeyAsymmetricPrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_16.writeByte(typeId);
        switch(typeId)  {
            default: throw new Error(`Cannot serialize 'KeyAsymmetricPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_14: FastFutureContext, in__17: DataIn): KeyAsymmetricPrivate  {
        const typeId = in__17.readUByte();
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): KeyAsymmetricPrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): KeyAsymmetricPrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class KeyAsymmetricPublicMetaImpl implements FastMetaType<KeyAsymmetricPublic>  {
    serialize(sCtx_18: FastFutureContext, obj_20: KeyAsymmetricPublic, _out_21: DataOut): void  {
        const typeId = typeof (obj_20 as any).getAetherTypeId === 'function' ? obj_20.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeyAsymmetricPublic' with invalid type id $ {
            typeId
        }
        `);
        _out_21.writeByte(typeId);
        switch(typeId)  {
            default: throw new Error(`Cannot serialize 'KeyAsymmetricPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_19: FastFutureContext, in__22: DataIn): KeyAsymmetricPublic  {
        const typeId = in__22.readUByte();
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): KeyAsymmetricPublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): KeyAsymmetricPublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class KeySignMetaImpl implements FastMetaType<KeySign>  {
    serialize(sCtx_23: FastFutureContext, obj_25: KeySign, _out_26: DataOut): void  {
        const typeId = typeof (obj_25 as any).getAetherTypeId === 'function' ? obj_25.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeySign' with invalid type id $ {
            typeId
        }
        `);
        _out_26.writeByte(typeId);
        switch(typeId)  {
            default: throw new Error(`Cannot serialize 'KeySign' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_24: FastFutureContext, in__27: DataIn): KeySign  {
        const typeId = in__27.readUByte();
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): KeySign  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): KeySign  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class KeySignPrivateMetaImpl implements FastMetaType<KeySignPrivate>  {
    serialize(sCtx_28: FastFutureContext, obj_30: KeySignPrivate, _out_31: DataOut): void  {
        const typeId = typeof (obj_30 as any).getAetherTypeId === 'function' ? obj_30.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeySignPrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_31.writeByte(typeId);
        switch(typeId)  {
            default: throw new Error(`Cannot serialize 'KeySignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_29: FastFutureContext, in__32: DataIn): KeySignPrivate  {
        const typeId = in__32.readUByte();
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): KeySignPrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): KeySignPrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class KeySignPublicMetaImpl implements FastMetaType<KeySignPublic>  {
    serialize(sCtx_33: FastFutureContext, obj_35: KeySignPublic, _out_36: DataOut): void  {
        const typeId = typeof (obj_35 as any).getAetherTypeId === 'function' ? obj_35.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeySignPublic' with invalid type id $ {
            typeId
        }
        `);
        _out_36.writeByte(typeId);
        switch(typeId)  {
            default: throw new Error(`Cannot serialize 'KeySignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_34: FastFutureContext, in__37: DataIn): KeySignPublic  {
        const typeId = in__37.readUByte();
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): KeySignPublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): KeySignPublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class KeySymmetricMetaImpl implements FastMetaType<KeySymmetric>  {
    serialize(sCtx_38: FastFutureContext, obj_40: KeySymmetric, _out_41: DataOut): void  {
        const typeId = typeof (obj_40 as any).getAetherTypeId === 'function' ? obj_40.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeySymmetric' with invalid type id $ {
            typeId
        }
        `);
        _out_41.writeByte(typeId);
        switch(typeId)  {
            default: throw new Error(`Cannot serialize 'KeySymmetric' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_39: FastFutureContext, in__42: DataIn): KeySymmetric  {
        const typeId = in__42.readUByte();
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): KeySymmetric  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): KeySymmetric  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class PairKeysMetaImpl implements FastMetaType<PairKeys>  {
    serialize(sCtx_43: FastFutureContext, obj_44: PairKeys, _out_45: DataOut): void  {
        const typeId = typeof (obj_44 as any).getAetherTypeId === 'function' ? obj_44.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeys' with invalid type id $ {
            typeId
        }
        `);
        _out_45.writeByte(typeId);
        switch(typeId)  {
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_43, obj_44 as any as PairKeysSign, _out_45);
            break;
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_43, obj_44 as any as PairKeysAsym, _out_45);
            break;
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_43, obj_44 as any as PairKeysAsymSigned, _out_45);
            break;
            default: throw new Error(`Cannot serialize 'PairKeys' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_43: FastFutureContext, in__46: DataIn): PairKeys  {
        const typeId = in__46.readUByte();
        switch(typeId)  {
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_43, in__46) as any as PairKeys;
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_43, in__46) as any as PairKeys;
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_43, in__46) as any as PairKeys;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): PairKeys  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): PairKeys  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SignMetaImpl implements FastMetaType<Sign>  {
    serialize(sCtx_47: FastFutureContext, obj_48: Sign, _out_49: DataOut): void  {
        const typeId = typeof (obj_48 as any).getAetherTypeId === 'function' ? obj_48.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'Sign' with invalid type id $ {
            typeId
        }
        `);
        _out_49.writeByte(typeId);
        switch(typeId)  {
            case 1: (SignAE_ED25519 as any).META_BODY.serialize(sCtx_47, obj_48 as any as SignAE_ED25519, _out_49);
            break;
            case 2: (SignHYDROGEN as any).META_BODY.serialize(sCtx_47, obj_48 as any as SignHYDROGEN, _out_49);
            break;
            default: throw new Error(`Cannot serialize 'Sign' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_47: FastFutureContext, in__50: DataIn): Sign  {
        const typeId = in__50.readUByte();
        switch(typeId)  {
            case 1: return (SignAE_ED25519 as any).META_BODY.deserialize(sCtx_47, in__50) as any as Sign;
            case 2: return (SignHYDROGEN as any).META_BODY.deserialize(sCtx_47, in__50) as any as Sign;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): Sign  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): Sign  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class TelemetryMetaImpl implements FastMetaType<Telemetry>  {
    serialize(sCtx_51: FastFutureContext, obj_52: Telemetry, _out_53: DataOut): void  {
        const typeId = typeof (obj_52 as any).getAetherTypeId === 'function' ? obj_52.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'Telemetry' with invalid type id $ {
            typeId
        }
        `);
        _out_53.writeByte(typeId);
        switch(typeId)  {
            case 1: (TelemetryCPP as any).META_BODY.serialize(sCtx_51, obj_52 as any as TelemetryCPP, _out_53);
            break;
            default: throw new Error(`Cannot serialize 'Telemetry' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_51: FastFutureContext, in__54: DataIn): Telemetry  {
        const typeId = in__54.readUByte();
        switch(typeId)  {
            case 1: return (TelemetryCPP as any).META_BODY.deserialize(sCtx_51, in__54) as any as Telemetry;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): Telemetry  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): Telemetry  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class WorkProofConfigMetaImpl implements FastMetaType<WorkProofConfig>  {
    serialize(sCtx_55: FastFutureContext, obj_56: WorkProofConfig, _out_57: DataOut): void  {
        const typeId = typeof (obj_56 as any).getAetherTypeId === 'function' ? obj_56.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'WorkProofConfig' with invalid type id $ {
            typeId
        }
        `);
        _out_57.writeByte(typeId);
        switch(typeId)  {
            case 1: (WorkProofBCrypt as any).META_BODY.serialize(sCtx_55, obj_56 as any as WorkProofBCrypt, _out_57);
            break;
            default: throw new Error(`Cannot serialize 'WorkProofConfig' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_55: FastFutureContext, in__58: DataIn): WorkProofConfig  {
        const typeId = in__58.readUByte();
        switch(typeId)  {
            case 1: return (WorkProofBCrypt as any).META_BODY.deserialize(sCtx_55, in__58) as any as WorkProofConfig;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): WorkProofConfig  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): WorkProofConfig  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AccessCheckPairMetaBodyImpl implements FastMetaType<AccessCheckPair>  {
    serialize(sCtx_59: FastFutureContext, obj_60: AccessCheckPair, _out_61: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_59, obj_60.sourceUid, _out_61);
        FastMeta.META_UUID.serialize(sCtx_59, obj_60.targetUid, _out_61);
        
    }
    deserialize(sCtx_59: FastFutureContext, in__62: DataIn): AccessCheckPair  {
        let sourceUid_63: UUID;
        let targetUid_64: UUID;
        sourceUid_63 = FastMeta.META_UUID.deserialize(sCtx_59, in__62);
        targetUid_64 = FastMeta.META_UUID.deserialize(sCtx_59, in__62);
        return new AccessCheckPair(sourceUid_63, targetUid_64);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AccessCheckPair  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AccessCheckPair  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AccessCheckResultMetaBodyImpl implements FastMetaType<AccessCheckResult>  {
    serialize(sCtx_65: FastFutureContext, obj_66: AccessCheckResult, _out_67: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_65, obj_66.sourceUid, _out_67);
        FastMeta.META_UUID.serialize(sCtx_65, obj_66.targetUid, _out_67);
        _out_67.writeBoolean(obj_66.hasAccess);
        
    }
    deserialize(sCtx_65: FastFutureContext, in__68: DataIn): AccessCheckResult  {
        let sourceUid_69: UUID;
        let targetUid_70: UUID;
        let hasAccess_71: boolean;
        sourceUid_69 = FastMeta.META_UUID.deserialize(sCtx_65, in__68);
        targetUid_70 = FastMeta.META_UUID.deserialize(sCtx_65, in__68);
        hasAccess_71 = in__68.readBoolean();
        return new AccessCheckResult(sourceUid_69, targetUid_70, hasAccess_71);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AccessCheckResult  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AccessCheckResult  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AccessGroupMetaBodyImpl implements FastMetaType<AccessGroup>  {
    serialize(sCtx_72: FastFutureContext, obj_73: AccessGroup, _out_74: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_72, obj_73.owner, _out_74);
        _out_74.writeLong(obj_73.id);
        SerializerPackNumber.INSTANCE.put(_out_74, obj_73.data.length);
        for (const el_76 of obj_73.data)  {
            FastMeta.META_UUID.serialize(sCtx_72, el_76, _out_74);
            
        }
        
    }
    deserialize(sCtx_72: FastFutureContext, in__75: DataIn): AccessGroup  {
        let owner_77: UUID;
        let id_78: bigint;
        let data_79: UUID[];
        owner_77 = FastMeta.META_UUID.deserialize(sCtx_72, in__75);
        id_78 = in__75.readLong();
        const len_81 = Number(DeserializerPackNumber.INSTANCE.put(in__75).valueOf());
        data_79 = new Array<UUID>(len_81);
        for (let idx_80 = 0;
        idx_80 < len_81;
        idx_80++)  {
            data_79[idx_80] = FastMeta.META_UUID.deserialize(sCtx_72, in__75);
            
        }
        return new AccessGroup(owner_77, id_78, data_79);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AccessGroup  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AccessGroup  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientInfoMetaBodyImpl implements FastMetaType<ClientInfo>  {
    serialize(sCtx_82: FastFutureContext, obj_83: ClientInfo, _out_84: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_82, obj_83.uid, _out_84);
        Cloud.META.serialize(sCtx_82, obj_83.cloud, _out_84);
        
    }
    deserialize(sCtx_82: FastFutureContext, in__85: DataIn): ClientInfo  {
        let uid_86: UUID;
        let cloud_87: Cloud;
        uid_86 = FastMeta.META_UUID.deserialize(sCtx_82, in__85);
        cloud_87 = Cloud.META.deserialize(sCtx_82, in__85);
        return new ClientInfo(uid_86, cloud_87);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientInfo  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientInfo  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientStateForSaveMetaBodyImpl implements FastMetaType<ClientStateForSave>  {
    serialize(sCtx_88: FastFutureContext, obj_89: ClientStateForSave, _out_90: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_90, obj_89.registrationUri.length);
        for (const el_92 of obj_89.registrationUri)  {
            FastMeta.META_URI.serialize(sCtx_88, el_92, _out_90);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_90, obj_89.servers.length);
        for (const el_93 of obj_89.servers)  {
            ServerDescriptor.META.serialize(sCtx_88, el_93, _out_90);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_90, obj_89.clients.length);
        for (const el_94 of obj_89.clients)  {
            ClientInfo.META.serialize(sCtx_88, el_94, _out_90);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_90, obj_89.rootSigners.length);
        for (const el_95 of obj_89.rootSigners)  {
            Key.META.serialize(sCtx_88, el_95, _out_90);
            
        }
        CryptoLib.META.serialize(sCtx_88, obj_89.cryptoLib, _out_90);
        _out_90.writeLong(obj_89.pingDuration);
        FastMeta.META_UUID.serialize(sCtx_88, obj_89.parentUid, _out_90);
        _out_90.writeInt(obj_89.countServersForRegistration);
        _out_90.writeLong(obj_89.timeoutForConnectToRegistrationServer);
        FastMeta.META_UUID.serialize(sCtx_88, obj_89.uid, _out_90);
        FastMeta.META_UUID.serialize(sCtx_88, obj_89.alias, _out_90);
        Key.META.serialize(sCtx_88, obj_89.masterKey, _out_90);
        
    }
    deserialize(sCtx_88: FastFutureContext, in__91: DataIn): ClientStateForSave  {
        let registrationUri_96: URI[];
        let servers_97: ServerDescriptor[];
        let clients_98: ClientInfo[];
        let rootSigners_99: Key[];
        let cryptoLib_100: CryptoLib;
        let pingDuration_101: bigint;
        let parentUid_102: UUID;
        let countServersForRegistration_103: number;
        let timeoutForConnectToRegistrationServer_104: bigint;
        let uid_105: UUID;
        let alias_106: UUID;
        let masterKey_107: Key;
        const len_109 = Number(DeserializerPackNumber.INSTANCE.put(in__91).valueOf());
        registrationUri_96 = new Array<URI>(len_109);
        for (let idx_108 = 0;
        idx_108 < len_109;
        idx_108++)  {
            registrationUri_96[idx_108] = FastMeta.META_URI.deserialize(sCtx_88, in__91);
            
        }
        const len_111 = Number(DeserializerPackNumber.INSTANCE.put(in__91).valueOf());
        servers_97 = new Array<ServerDescriptor>(len_111);
        for (let idx_110 = 0;
        idx_110 < len_111;
        idx_110++)  {
            servers_97[idx_110] = ServerDescriptor.META.deserialize(sCtx_88, in__91);
            
        }
        const len_113 = Number(DeserializerPackNumber.INSTANCE.put(in__91).valueOf());
        clients_98 = new Array<ClientInfo>(len_113);
        for (let idx_112 = 0;
        idx_112 < len_113;
        idx_112++)  {
            clients_98[idx_112] = ClientInfo.META.deserialize(sCtx_88, in__91);
            
        }
        const len_115 = Number(DeserializerPackNumber.INSTANCE.put(in__91).valueOf());
        rootSigners_99 = new Array<Key>(len_115);
        for (let idx_114 = 0;
        idx_114 < len_115;
        idx_114++)  {
            rootSigners_99[idx_114] = Key.META.deserialize(sCtx_88, in__91);
            
        }
        cryptoLib_100 = CryptoLib.META.deserialize(sCtx_88, in__91);
        pingDuration_101 = in__91.readLong();
        parentUid_102 = FastMeta.META_UUID.deserialize(sCtx_88, in__91);
        countServersForRegistration_103 = in__91.readInt();
        timeoutForConnectToRegistrationServer_104 = in__91.readLong();
        uid_105 = FastMeta.META_UUID.deserialize(sCtx_88, in__91);
        alias_106 = FastMeta.META_UUID.deserialize(sCtx_88, in__91);
        masterKey_107 = Key.META.deserialize(sCtx_88, in__91);
        return new ClientStateForSave(registrationUri_96, servers_97, clients_98, rootSigners_99, cryptoLib_100, pingDuration_101, parentUid_102, countServersForRegistration_103, timeoutForConnectToRegistrationServer_104, uid_105, alias_106, masterKey_107);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientStateForSave  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientStateForSave  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class CloudMetaBodyImpl implements FastMetaType<Cloud>  {
    serialize(sCtx_116: FastFutureContext, obj_117: Cloud, _out_118: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_118, obj_117.data.length);
        for (const el_120 of obj_117.data)  {
            _out_118.writeShort(el_120);
            
        }
        
    }
    deserialize(sCtx_116: FastFutureContext, in__119: DataIn): Cloud  {
        let data_121: number[];
        const len_123 = Number(DeserializerPackNumber.INSTANCE.put(in__119).valueOf());
        data_121 = new Array<number>(len_123);
        for (let idx_122 = 0;
        idx_122 < len_123;
        idx_122++)  {
            data_121[idx_122] = in__119.readShort();
            
        }
        return new Cloud(data_121);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): Cloud  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): Cloud  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class CoderAndPortMetaBodyImpl implements FastMetaType<CoderAndPort>  {
    serialize(sCtx_124: FastFutureContext, obj_125: CoderAndPort, _out_126: DataOut): void  {
        AetherCodec.META.serialize(sCtx_124, obj_125.codec, _out_126);
        _out_126.writeShort(obj_125.port);
        
    }
    deserialize(sCtx_124: FastFutureContext, in__127: DataIn): CoderAndPort  {
        let codec_128: AetherCodec;
        let port_129: number;
        codec_128 = AetherCodec.META.deserialize(sCtx_124, in__127);
        port_129 = in__127.readShort();
        return new CoderAndPort(codec_128, port_129);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): CoderAndPort  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): CoderAndPort  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class FinishResultGlobalRegServerApiMetaBodyImpl implements FastMetaType<FinishResultGlobalRegServerApi>  {
    serialize(sCtx_130: FastFutureContext, obj_131: FinishResultGlobalRegServerApi, _out_132: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_130, obj_131.alias, _out_132);
        FastMeta.META_UUID.serialize(sCtx_130, obj_131.uid, _out_132);
        Cloud.META.serialize(sCtx_130, obj_131.cloud, _out_132);
        
    }
    deserialize(sCtx_130: FastFutureContext, in__133: DataIn): FinishResultGlobalRegServerApi  {
        let alias_134: UUID;
        let uid_135: UUID;
        let cloud_136: Cloud;
        alias_134 = FastMeta.META_UUID.deserialize(sCtx_130, in__133);
        uid_135 = FastMeta.META_UUID.deserialize(sCtx_130, in__133);
        cloud_136 = Cloud.META.deserialize(sCtx_130, in__133);
        return new FinishResultGlobalRegServerApi(alias_134, uid_135, cloud_136);
        
    }
    metaHashCode(obj: FinishResultGlobalRegServerApi | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.alias);
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + Cloud.META.metaHashCode(obj.cloud);
        return hash | 0;
        
    }
    metaEquals(v1: FinishResultGlobalRegServerApi | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof FinishResultGlobalRegServerApi)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.alias, v2.alias)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!Cloud.META.metaEquals(v1.cloud, v2.cloud)) return false;
        return true;
        
    }
    metaToString(obj: FinishResultGlobalRegServerApi | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('FinishResultGlobalRegServerApi(');
        res.add('alias:').add(obj.alias);
        res.add(', ');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('cloud:').add(obj.cloud);
        res.add(')');
        
    }
    public serializeToBytes(obj: FinishResultGlobalRegServerApi): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): FinishResultGlobalRegServerApi  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): FinishResultGlobalRegServerApi  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenCurvePrivateMetaBodyImpl implements FastMetaType<HydrogenCurvePrivate>  {
    serialize(sCtx_137: FastFutureContext, obj_138: HydrogenCurvePrivate, _out_139: DataOut): void  {
        if (obj_138.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_138.data must be 32 but was $ {
            obj_138.data.length
        }
        `);
        _out_139.write(obj_138.data);
        
    }
    deserialize(sCtx_137: FastFutureContext, in__140: DataIn): HydrogenCurvePrivate  {
        let data_142: Uint8Array;
        const len_144 = 32;
        const bytes_145 = in__140.readBytes(len_144);
        data_142 = bytes_145;
        return new HydrogenCurvePrivate(data_142);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenCurvePrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenCurvePrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenCurvePrivateMetaImpl implements FastMetaType<HydrogenCurvePrivate>  {
    serialize(sCtx_146: FastFutureContext, obj_147: HydrogenCurvePrivate, _out_148: DataOut): void  {
        const typeId = typeof (obj_147 as any).getAetherTypeId === 'function' ? obj_147.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenCurvePrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_148.writeByte(typeId);
        switch(typeId)  {
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_146, obj_147 as any as HydrogenCurvePrivate, _out_148);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_146, obj_147 as any as SodiumChacha20Poly1305, _out_148);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_146, obj_147 as any as HydrogenSecretBox, _out_148);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_146, obj_147 as any as HydrogenCurvePublic, _out_148);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_146, obj_147 as any as SodiumCurvePublic, _out_148);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_146, obj_147 as any as SodiumCurvePrivate, _out_148);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_146, obj_147 as any as SodiumSignPublic, _out_148);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_146, obj_147 as any as HydrogenSignPublic, _out_148);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_146, obj_147 as any as SodiumSignPrivate, _out_148);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_146, obj_147 as any as HydrogenSignPrivate, _out_148);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenCurvePrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_146: FastFutureContext, in__149: DataIn): HydrogenCurvePrivate  {
        const typeId = in__149.readUByte();
        switch(typeId)  {
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_146, in__149) as any as HydrogenCurvePrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_146, in__149) as any as HydrogenCurvePrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_146, in__149) as any as HydrogenCurvePrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_146, in__149) as any as HydrogenCurvePrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_146, in__149) as any as HydrogenCurvePrivate;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_146, in__149) as any as HydrogenCurvePrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_146, in__149) as any as HydrogenCurvePrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_146, in__149) as any as HydrogenCurvePrivate;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_146, in__149) as any as HydrogenCurvePrivate;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_146, in__149) as any as HydrogenCurvePrivate;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenCurvePrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenCurvePrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenCurvePublicMetaBodyImpl implements FastMetaType<HydrogenCurvePublic>  {
    serialize(sCtx_150: FastFutureContext, obj_151: HydrogenCurvePublic, _out_152: DataOut): void  {
        if (obj_151.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_151.data must be 32 but was $ {
            obj_151.data.length
        }
        `);
        _out_152.write(obj_151.data);
        
    }
    deserialize(sCtx_150: FastFutureContext, in__153: DataIn): HydrogenCurvePublic  {
        let data_155: Uint8Array;
        const len_157 = 32;
        const bytes_158 = in__153.readBytes(len_157);
        data_155 = bytes_158;
        return new HydrogenCurvePublic(data_155);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenCurvePublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenCurvePublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenCurvePublicMetaImpl implements FastMetaType<HydrogenCurvePublic>  {
    serialize(sCtx_159: FastFutureContext, obj_160: HydrogenCurvePublic, _out_161: DataOut): void  {
        const typeId = typeof (obj_160 as any).getAetherTypeId === 'function' ? obj_160.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenCurvePublic' with invalid type id $ {
            typeId
        }
        `);
        _out_161.writeByte(typeId);
        switch(typeId)  {
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_159, obj_160 as any as HydrogenCurvePublic, _out_161);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_159, obj_160 as any as SodiumChacha20Poly1305, _out_161);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_159, obj_160 as any as HydrogenSecretBox, _out_161);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_159, obj_160 as any as SodiumCurvePublic, _out_161);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_159, obj_160 as any as HydrogenCurvePrivate, _out_161);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_159, obj_160 as any as SodiumCurvePrivate, _out_161);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_159, obj_160 as any as SodiumSignPublic, _out_161);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_159, obj_160 as any as HydrogenSignPublic, _out_161);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_159, obj_160 as any as SodiumSignPrivate, _out_161);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_159, obj_160 as any as HydrogenSignPrivate, _out_161);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenCurvePublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_159: FastFutureContext, in__162: DataIn): HydrogenCurvePublic  {
        const typeId = in__162.readUByte();
        switch(typeId)  {
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_159, in__162) as any as HydrogenCurvePublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_159, in__162) as any as HydrogenCurvePublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_159, in__162) as any as HydrogenCurvePublic;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_159, in__162) as any as HydrogenCurvePublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_159, in__162) as any as HydrogenCurvePublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_159, in__162) as any as HydrogenCurvePublic;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_159, in__162) as any as HydrogenCurvePublic;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_159, in__162) as any as HydrogenCurvePublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_159, in__162) as any as HydrogenCurvePublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_159, in__162) as any as HydrogenCurvePublic;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenCurvePublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenCurvePublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenSecretBoxMetaBodyImpl implements FastMetaType<HydrogenSecretBox>  {
    serialize(sCtx_163: FastFutureContext, obj_164: HydrogenSecretBox, _out_165: DataOut): void  {
        if (obj_164.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_164.data must be 32 but was $ {
            obj_164.data.length
        }
        `);
        _out_165.write(obj_164.data);
        
    }
    deserialize(sCtx_163: FastFutureContext, in__166: DataIn): HydrogenSecretBox  {
        let data_168: Uint8Array;
        const len_170 = 32;
        const bytes_171 = in__166.readBytes(len_170);
        data_168 = bytes_171;
        return new HydrogenSecretBox(data_168);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenSecretBox  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenSecretBox  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenSecretBoxMetaImpl implements FastMetaType<HydrogenSecretBox>  {
    serialize(sCtx_172: FastFutureContext, obj_173: HydrogenSecretBox, _out_174: DataOut): void  {
        const typeId = typeof (obj_173 as any).getAetherTypeId === 'function' ? obj_173.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenSecretBox' with invalid type id $ {
            typeId
        }
        `);
        _out_174.writeByte(typeId);
        switch(typeId)  {
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_172, obj_173 as any as HydrogenSecretBox, _out_174);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_172, obj_173 as any as SodiumChacha20Poly1305, _out_174);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_172, obj_173 as any as HydrogenCurvePublic, _out_174);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_172, obj_173 as any as SodiumCurvePublic, _out_174);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_172, obj_173 as any as HydrogenCurvePrivate, _out_174);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_172, obj_173 as any as SodiumCurvePrivate, _out_174);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_172, obj_173 as any as SodiumSignPublic, _out_174);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_172, obj_173 as any as HydrogenSignPublic, _out_174);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_172, obj_173 as any as SodiumSignPrivate, _out_174);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_172, obj_173 as any as HydrogenSignPrivate, _out_174);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenSecretBox' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_172: FastFutureContext, in__175: DataIn): HydrogenSecretBox  {
        const typeId = in__175.readUByte();
        switch(typeId)  {
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_172, in__175) as any as HydrogenSecretBox;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_172, in__175) as any as HydrogenSecretBox;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_172, in__175) as any as HydrogenSecretBox;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_172, in__175) as any as HydrogenSecretBox;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_172, in__175) as any as HydrogenSecretBox;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_172, in__175) as any as HydrogenSecretBox;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_172, in__175) as any as HydrogenSecretBox;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_172, in__175) as any as HydrogenSecretBox;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_172, in__175) as any as HydrogenSecretBox;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_172, in__175) as any as HydrogenSecretBox;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenSecretBox  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenSecretBox  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenSignPrivateMetaBodyImpl implements FastMetaType<HydrogenSignPrivate>  {
    serialize(sCtx_176: FastFutureContext, obj_177: HydrogenSignPrivate, _out_178: DataOut): void  {
        if (obj_177.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_177.data must be 64 but was $ {
            obj_177.data.length
        }
        `);
        _out_178.write(obj_177.data);
        
    }
    deserialize(sCtx_176: FastFutureContext, in__179: DataIn): HydrogenSignPrivate  {
        let data_181: Uint8Array;
        const len_183 = 64;
        const bytes_184 = in__179.readBytes(len_183);
        data_181 = bytes_184;
        return new HydrogenSignPrivate(data_181);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenSignPrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenSignPrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenSignPrivateMetaImpl implements FastMetaType<HydrogenSignPrivate>  {
    serialize(sCtx_185: FastFutureContext, obj_186: HydrogenSignPrivate, _out_187: DataOut): void  {
        const typeId = typeof (obj_186 as any).getAetherTypeId === 'function' ? obj_186.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenSignPrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_187.writeByte(typeId);
        switch(typeId)  {
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_185, obj_186 as any as HydrogenSignPrivate, _out_187);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_185, obj_186 as any as SodiumChacha20Poly1305, _out_187);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_185, obj_186 as any as HydrogenSecretBox, _out_187);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_185, obj_186 as any as HydrogenCurvePublic, _out_187);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_185, obj_186 as any as SodiumCurvePublic, _out_187);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_185, obj_186 as any as HydrogenCurvePrivate, _out_187);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_185, obj_186 as any as SodiumCurvePrivate, _out_187);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_185, obj_186 as any as SodiumSignPublic, _out_187);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_185, obj_186 as any as HydrogenSignPublic, _out_187);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_185, obj_186 as any as SodiumSignPrivate, _out_187);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenSignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_185: FastFutureContext, in__188: DataIn): HydrogenSignPrivate  {
        const typeId = in__188.readUByte();
        switch(typeId)  {
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_185, in__188) as any as HydrogenSignPrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_185, in__188) as any as HydrogenSignPrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_185, in__188) as any as HydrogenSignPrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_185, in__188) as any as HydrogenSignPrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_185, in__188) as any as HydrogenSignPrivate;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_185, in__188) as any as HydrogenSignPrivate;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_185, in__188) as any as HydrogenSignPrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_185, in__188) as any as HydrogenSignPrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_185, in__188) as any as HydrogenSignPrivate;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_185, in__188) as any as HydrogenSignPrivate;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenSignPrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenSignPrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenSignPublicMetaBodyImpl implements FastMetaType<HydrogenSignPublic>  {
    serialize(sCtx_189: FastFutureContext, obj_190: HydrogenSignPublic, _out_191: DataOut): void  {
        if (obj_190.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_190.data must be 32 but was $ {
            obj_190.data.length
        }
        `);
        _out_191.write(obj_190.data);
        
    }
    deserialize(sCtx_189: FastFutureContext, in__192: DataIn): HydrogenSignPublic  {
        let data_194: Uint8Array;
        const len_196 = 32;
        const bytes_197 = in__192.readBytes(len_196);
        data_194 = bytes_197;
        return new HydrogenSignPublic(data_194);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenSignPublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenSignPublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenSignPublicMetaImpl implements FastMetaType<HydrogenSignPublic>  {
    serialize(sCtx_198: FastFutureContext, obj_199: HydrogenSignPublic, _out_200: DataOut): void  {
        const typeId = typeof (obj_199 as any).getAetherTypeId === 'function' ? obj_199.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenSignPublic' with invalid type id $ {
            typeId
        }
        `);
        _out_200.writeByte(typeId);
        switch(typeId)  {
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_198, obj_199 as any as HydrogenSignPublic, _out_200);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_198, obj_199 as any as SodiumChacha20Poly1305, _out_200);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_198, obj_199 as any as HydrogenSecretBox, _out_200);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_198, obj_199 as any as HydrogenCurvePublic, _out_200);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_198, obj_199 as any as SodiumCurvePublic, _out_200);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_198, obj_199 as any as HydrogenCurvePrivate, _out_200);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_198, obj_199 as any as SodiumCurvePrivate, _out_200);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_198, obj_199 as any as SodiumSignPublic, _out_200);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_198, obj_199 as any as SodiumSignPrivate, _out_200);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_198, obj_199 as any as HydrogenSignPrivate, _out_200);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenSignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_198: FastFutureContext, in__201: DataIn): HydrogenSignPublic  {
        const typeId = in__201.readUByte();
        switch(typeId)  {
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_198, in__201) as any as HydrogenSignPublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_198, in__201) as any as HydrogenSignPublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_198, in__201) as any as HydrogenSignPublic;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_198, in__201) as any as HydrogenSignPublic;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_198, in__201) as any as HydrogenSignPublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_198, in__201) as any as HydrogenSignPublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_198, in__201) as any as HydrogenSignPublic;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_198, in__201) as any as HydrogenSignPublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_198, in__201) as any as HydrogenSignPublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_198, in__201) as any as HydrogenSignPublic;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): HydrogenSignPublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): HydrogenSignPublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class IPAddressAndPortsMetaBodyImpl implements FastMetaType<IPAddressAndPorts>  {
    serialize(sCtx_202: FastFutureContext, obj_203: IPAddressAndPorts, _out_204: DataOut): void  {
        IPAddress.META.serialize(sCtx_202, obj_203.address, _out_204);
        SerializerPackNumber.INSTANCE.put(_out_204, obj_203.coderAndPorts.length);
        for (const el_206 of obj_203.coderAndPorts)  {
            CoderAndPort.META.serialize(sCtx_202, el_206, _out_204);
            
        }
        
    }
    deserialize(sCtx_202: FastFutureContext, in__205: DataIn): IPAddressAndPorts  {
        let address_207: IPAddress;
        let coderAndPorts_208: CoderAndPort[];
        address_207 = IPAddress.META.deserialize(sCtx_202, in__205);
        const len_210 = Number(DeserializerPackNumber.INSTANCE.put(in__205).valueOf());
        coderAndPorts_208 = new Array<CoderAndPort>(len_210);
        for (let idx_209 = 0;
        idx_209 < len_210;
        idx_209++)  {
            coderAndPorts_208[idx_209] = CoderAndPort.META.deserialize(sCtx_202, in__205);
            
        }
        return new IPAddressAndPorts(address_207, coderAndPorts_208);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): IPAddressAndPorts  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): IPAddressAndPorts  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class IPAddressAndPortsListMetaBodyImpl implements FastMetaType<IPAddressAndPortsList>  {
    serialize(sCtx_211: FastFutureContext, obj_212: IPAddressAndPortsList, _out_213: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_213, obj_212.addresses.length);
        for (const el_215 of obj_212.addresses)  {
            IPAddressAndPorts.META.serialize(sCtx_211, el_215, _out_213);
            
        }
        
    }
    deserialize(sCtx_211: FastFutureContext, in__214: DataIn): IPAddressAndPortsList  {
        let addresses_216: IPAddressAndPorts[];
        const len_218 = Number(DeserializerPackNumber.INSTANCE.put(in__214).valueOf());
        addresses_216 = new Array<IPAddressAndPorts>(len_218);
        for (let idx_217 = 0;
        idx_217 < len_218;
        idx_217++)  {
            addresses_216[idx_217] = IPAddressAndPorts.META.deserialize(sCtx_211, in__214);
            
        }
        return new IPAddressAndPortsList(addresses_216);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): IPAddressAndPortsList  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): IPAddressAndPortsList  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class IPAddressV4MetaBodyImpl implements FastMetaType<IPAddressV4>  {
    serialize(sCtx_219: FastFutureContext, obj_220: IPAddressV4, _out_221: DataOut): void  {
        if (obj_220.data.length !== 4) throw new Error(`IllegalStateException: Array length for obj_220.data must be 4 but was $ {
            obj_220.data.length
        }
        `);
        _out_221.write(obj_220.data);
        
    }
    deserialize(sCtx_219: FastFutureContext, in__222: DataIn): IPAddressV4  {
        let data_224: Uint8Array;
        const len_226 = 4;
        const bytes_227 = in__222.readBytes(len_226);
        data_224 = bytes_227;
        return new IPAddressV4(data_224);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): IPAddressV4  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): IPAddressV4  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class IPAddressV4MetaImpl implements FastMetaType<IPAddressV4>  {
    serialize(sCtx_228: FastFutureContext, obj_229: IPAddressV4, _out_230: DataOut): void  {
        const typeId = typeof (obj_229 as any).getAetherTypeId === 'function' ? obj_229.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'IPAddressV4' with invalid type id $ {
            typeId
        }
        `);
        _out_230.writeByte(typeId);
        switch(typeId)  {
            case 1: (IPAddressV4 as any).META_BODY.serialize(sCtx_228, obj_229 as any as IPAddressV4, _out_230);
            break;
            case 2: (IPAddressV6 as any).META_BODY.serialize(sCtx_228, obj_229 as any as IPAddressV6, _out_230);
            break;
            default: throw new Error(`Cannot serialize 'IPAddressV4' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_228: FastFutureContext, in__231: DataIn): IPAddressV4  {
        const typeId = in__231.readUByte();
        switch(typeId)  {
            case 1: return (IPAddressV4 as any).META_BODY.deserialize(sCtx_228, in__231) as any as IPAddressV4;
            case 2: return (IPAddressV6 as any).META_BODY.deserialize(sCtx_228, in__231) as any as IPAddressV4;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): IPAddressV4  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): IPAddressV4  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class IPAddressV6MetaBodyImpl implements FastMetaType<IPAddressV6>  {
    serialize(sCtx_232: FastFutureContext, obj_233: IPAddressV6, _out_234: DataOut): void  {
        if (obj_233.data.length !== 6) throw new Error(`IllegalStateException: Array length for obj_233.data must be 6 but was $ {
            obj_233.data.length
        }
        `);
        _out_234.write(obj_233.data);
        
    }
    deserialize(sCtx_232: FastFutureContext, in__235: DataIn): IPAddressV6  {
        let data_237: Uint8Array;
        const len_239 = 6;
        const bytes_240 = in__235.readBytes(len_239);
        data_237 = bytes_240;
        return new IPAddressV6(data_237);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): IPAddressV6  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): IPAddressV6  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class IPAddressV6MetaImpl implements FastMetaType<IPAddressV6>  {
    serialize(sCtx_241: FastFutureContext, obj_242: IPAddressV6, _out_243: DataOut): void  {
        const typeId = typeof (obj_242 as any).getAetherTypeId === 'function' ? obj_242.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'IPAddressV6' with invalid type id $ {
            typeId
        }
        `);
        _out_243.writeByte(typeId);
        switch(typeId)  {
            case 2: (IPAddressV6 as any).META_BODY.serialize(sCtx_241, obj_242 as any as IPAddressV6, _out_243);
            break;
            case 1: (IPAddressV4 as any).META_BODY.serialize(sCtx_241, obj_242 as any as IPAddressV4, _out_243);
            break;
            default: throw new Error(`Cannot serialize 'IPAddressV6' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_241: FastFutureContext, in__244: DataIn): IPAddressV6  {
        const typeId = in__244.readUByte();
        switch(typeId)  {
            case 2: return (IPAddressV6 as any).META_BODY.deserialize(sCtx_241, in__244) as any as IPAddressV6;
            case 1: return (IPAddressV4 as any).META_BODY.deserialize(sCtx_241, in__244) as any as IPAddressV6;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): IPAddressV6  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): IPAddressV6  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class MessageMetaBodyImpl implements FastMetaType<Message>  {
    serialize(sCtx_245: FastFutureContext, obj_246: Message, _out_247: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_245, obj_246.uid, _out_247);
        SerializerPackNumber.INSTANCE.put(_out_247, obj_246.data.length);
        _out_247.write(obj_246.data);
        
    }
    deserialize(sCtx_245: FastFutureContext, in__248: DataIn): Message  {
        let uid_250: UUID;
        let data_251: Uint8Array;
        uid_250 = FastMeta.META_UUID.deserialize(sCtx_245, in__248);
        const len_253 = Number(DeserializerPackNumber.INSTANCE.put(in__248).valueOf());
        const bytes_254 = in__248.readBytes(len_253);
        data_251 = bytes_254;
        return new Message(uid_250, data_251);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): Message  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): Message  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class MoneyOperationMetaBodyImpl implements FastMetaType<MoneyOperation>  {
    serialize(sCtx_255: FastFutureContext, obj_256: MoneyOperation, _out_257: DataOut): void  {
        _out_257.writeLong(obj_256.id);
        FastMeta.META_UUID.serialize(sCtx_255, obj_256.from, _out_257);
        FastMeta.META_UUID.serialize(sCtx_255, obj_256.to, _out_257);
        _out_257.writeLong(obj_256.amount);
        _out_257.writeLong(obj_256.time);
        _out_257.writeBoolean(obj_256.credit);
        Status.META.serialize(sCtx_255, obj_256.status, _out_257);
        
    }
    deserialize(sCtx_255: FastFutureContext, in__258: DataIn): MoneyOperation  {
        let id_259: bigint;
        let from_260: UUID;
        let to_261: UUID;
        let amount_262: bigint;
        let time_263: bigint;
        let credit_264: boolean;
        let status_265: Status;
        id_259 = in__258.readLong();
        from_260 = FastMeta.META_UUID.deserialize(sCtx_255, in__258);
        to_261 = FastMeta.META_UUID.deserialize(sCtx_255, in__258);
        amount_262 = in__258.readLong();
        time_263 = in__258.readLong();
        credit_264 = in__258.readBoolean();
        status_265 = Status.META.deserialize(sCtx_255, in__258);
        return new MoneyOperation(id_259, from_260, to_261, amount_262, time_263, credit_264, status_265);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): MoneyOperation  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): MoneyOperation  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class PairKeysAsymMetaBodyImpl implements FastMetaType<PairKeysAsym>  {
    serialize(sCtx_266: FastFutureContext, obj_267: PairKeysAsym, _out_268: DataOut): void  {
        Key.META.serialize(sCtx_266, obj_267.privateKey, _out_268);
        Key.META.serialize(sCtx_266, obj_267.publicKey, _out_268);
        
    }
    deserialize(sCtx_266: FastFutureContext, in__269: DataIn): PairKeysAsym  {
        let privateKey_270: Key;
        let publicKey_271: Key;
        privateKey_270 = Key.META.deserialize(sCtx_266, in__269);
        publicKey_271 = Key.META.deserialize(sCtx_266, in__269);
        return new PairKeysAsym(privateKey_270, publicKey_271);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): PairKeysAsym  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): PairKeysAsym  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class PairKeysAsymMetaImpl implements FastMetaType<PairKeysAsym>  {
    serialize(sCtx_272: FastFutureContext, obj_273: PairKeysAsym, _out_274: DataOut): void  {
        const typeId = typeof (obj_273 as any).getAetherTypeId === 'function' ? obj_273.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeysAsym' with invalid type id $ {
            typeId
        }
        `);
        _out_274.writeByte(typeId);
        switch(typeId)  {
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_272, obj_273 as any as PairKeysAsym, _out_274);
            break;
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_272, obj_273 as any as PairKeysSign, _out_274);
            break;
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_272, obj_273 as any as PairKeysAsymSigned, _out_274);
            break;
            default: throw new Error(`Cannot serialize 'PairKeysAsym' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_272: FastFutureContext, in__275: DataIn): PairKeysAsym  {
        const typeId = in__275.readUByte();
        switch(typeId)  {
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_272, in__275) as any as PairKeysAsym;
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_272, in__275) as any as PairKeysAsym;
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_272, in__275) as any as PairKeysAsym;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): PairKeysAsym  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): PairKeysAsym  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class PairKeysAsymSignedMetaBodyImpl implements FastMetaType<PairKeysAsymSigned>  {
    serialize(sCtx_276: FastFutureContext, obj_277: PairKeysAsymSigned, _out_278: DataOut): void  {
        Key.META.serialize(sCtx_276, obj_277.privateKey, _out_278);
        SignedKey.META.serialize(sCtx_276, obj_277.publicKey, _out_278);
        
    }
    deserialize(sCtx_276: FastFutureContext, in__279: DataIn): PairKeysAsymSigned  {
        let privateKey_280: Key;
        let publicKey_281: SignedKey;
        privateKey_280 = Key.META.deserialize(sCtx_276, in__279);
        publicKey_281 = SignedKey.META.deserialize(sCtx_276, in__279);
        return new PairKeysAsymSigned(privateKey_280, publicKey_281);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): PairKeysAsymSigned  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): PairKeysAsymSigned  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class PairKeysAsymSignedMetaImpl implements FastMetaType<PairKeysAsymSigned>  {
    serialize(sCtx_282: FastFutureContext, obj_283: PairKeysAsymSigned, _out_284: DataOut): void  {
        const typeId = typeof (obj_283 as any).getAetherTypeId === 'function' ? obj_283.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeysAsymSigned' with invalid type id $ {
            typeId
        }
        `);
        _out_284.writeByte(typeId);
        switch(typeId)  {
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_282, obj_283 as any as PairKeysAsymSigned, _out_284);
            break;
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_282, obj_283 as any as PairKeysSign, _out_284);
            break;
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_282, obj_283 as any as PairKeysAsym, _out_284);
            break;
            default: throw new Error(`Cannot serialize 'PairKeysAsymSigned' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_282: FastFutureContext, in__285: DataIn): PairKeysAsymSigned  {
        const typeId = in__285.readUByte();
        switch(typeId)  {
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_282, in__285) as any as PairKeysAsymSigned;
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_282, in__285) as any as PairKeysAsymSigned;
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_282, in__285) as any as PairKeysAsymSigned;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): PairKeysAsymSigned  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): PairKeysAsymSigned  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class PairKeysSignMetaBodyImpl implements FastMetaType<PairKeysSign>  {
    serialize(sCtx_286: FastFutureContext, obj_287: PairKeysSign, _out_288: DataOut): void  {
        Key.META.serialize(sCtx_286, obj_287.privateKey, _out_288);
        Key.META.serialize(sCtx_286, obj_287.publicKey, _out_288);
        
    }
    deserialize(sCtx_286: FastFutureContext, in__289: DataIn): PairKeysSign  {
        let privateKey_290: Key;
        let publicKey_291: Key;
        privateKey_290 = Key.META.deserialize(sCtx_286, in__289);
        publicKey_291 = Key.META.deserialize(sCtx_286, in__289);
        return new PairKeysSign(privateKey_290, publicKey_291);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): PairKeysSign  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): PairKeysSign  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class PairKeysSignMetaImpl implements FastMetaType<PairKeysSign>  {
    serialize(sCtx_292: FastFutureContext, obj_293: PairKeysSign, _out_294: DataOut): void  {
        const typeId = typeof (obj_293 as any).getAetherTypeId === 'function' ? obj_293.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeysSign' with invalid type id $ {
            typeId
        }
        `);
        _out_294.writeByte(typeId);
        switch(typeId)  {
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_292, obj_293 as any as PairKeysSign, _out_294);
            break;
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_292, obj_293 as any as PairKeysAsym, _out_294);
            break;
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_292, obj_293 as any as PairKeysAsymSigned, _out_294);
            break;
            default: throw new Error(`Cannot serialize 'PairKeysSign' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_292: FastFutureContext, in__295: DataIn): PairKeysSign  {
        const typeId = in__295.readUByte();
        switch(typeId)  {
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_292, in__295) as any as PairKeysSign;
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_292, in__295) as any as PairKeysSign;
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_292, in__295) as any as PairKeysSign;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): PairKeysSign  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): PairKeysSign  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerDescriptorMetaBodyImpl implements FastMetaType<ServerDescriptor>  {
    serialize(sCtx_296: FastFutureContext, obj_297: ServerDescriptor, _out_298: DataOut): void  {
        _out_298.writeShort(obj_297.id);
        IPAddressAndPortsList.META.serialize(sCtx_296, obj_297.ipAddress, _out_298);
        
    }
    deserialize(sCtx_296: FastFutureContext, in__299: DataIn): ServerDescriptor  {
        let id_300: number;
        let ipAddress_301: IPAddressAndPortsList;
        id_300 = in__299.readShort();
        ipAddress_301 = IPAddressAndPortsList.META.deserialize(sCtx_296, in__299);
        return new ServerDescriptor(id_300, ipAddress_301);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerDescriptor  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerDescriptor  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SignAE_ED25519MetaBodyImpl implements FastMetaType<SignAE_ED25519>  {
    serialize(sCtx_302: FastFutureContext, obj_303: SignAE_ED25519, _out_304: DataOut): void  {
        if (obj_303.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_303.data must be 64 but was $ {
            obj_303.data.length
        }
        `);
        _out_304.write(obj_303.data);
        
    }
    deserialize(sCtx_302: FastFutureContext, in__305: DataIn): SignAE_ED25519  {
        let data_307: Uint8Array;
        const len_309 = 64;
        const bytes_310 = in__305.readBytes(len_309);
        data_307 = bytes_310;
        return new SignAE_ED25519(data_307);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SignAE_ED25519  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SignAE_ED25519  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SignAE_ED25519MetaImpl implements FastMetaType<SignAE_ED25519>  {
    serialize(sCtx_311: FastFutureContext, obj_312: SignAE_ED25519, _out_313: DataOut): void  {
        const typeId = typeof (obj_312 as any).getAetherTypeId === 'function' ? obj_312.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SignAE_ED25519' with invalid type id $ {
            typeId
        }
        `);
        _out_313.writeByte(typeId);
        switch(typeId)  {
            case 1: (SignAE_ED25519 as any).META_BODY.serialize(sCtx_311, obj_312 as any as SignAE_ED25519, _out_313);
            break;
            case 2: (SignHYDROGEN as any).META_BODY.serialize(sCtx_311, obj_312 as any as SignHYDROGEN, _out_313);
            break;
            default: throw new Error(`Cannot serialize 'SignAE_ED25519' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_311: FastFutureContext, in__314: DataIn): SignAE_ED25519  {
        const typeId = in__314.readUByte();
        switch(typeId)  {
            case 1: return (SignAE_ED25519 as any).META_BODY.deserialize(sCtx_311, in__314) as any as SignAE_ED25519;
            case 2: return (SignHYDROGEN as any).META_BODY.deserialize(sCtx_311, in__314) as any as SignAE_ED25519;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SignAE_ED25519  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SignAE_ED25519  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SignedKeyMetaBodyImpl implements FastMetaType<SignedKey>  {
    serialize(sCtx_315: FastFutureContext, obj_316: SignedKey, _out_317: DataOut): void  {
        Key.META.serialize(sCtx_315, obj_316.key, _out_317);
        Sign.META.serialize(sCtx_315, obj_316.sign, _out_317);
        
    }
    deserialize(sCtx_315: FastFutureContext, in__318: DataIn): SignedKey  {
        let _key_319: Key;
        let sign_320: Sign;
        _key_319 = Key.META.deserialize(sCtx_315, in__318);
        sign_320 = Sign.META.deserialize(sCtx_315, in__318);
        return new SignedKey(_key_319, sign_320);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SignedKey  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SignedKey  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SignHYDROGENMetaBodyImpl implements FastMetaType<SignHYDROGEN>  {
    serialize(sCtx_321: FastFutureContext, obj_322: SignHYDROGEN, _out_323: DataOut): void  {
        if (obj_322.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_322.data must be 64 but was $ {
            obj_322.data.length
        }
        `);
        _out_323.write(obj_322.data);
        
    }
    deserialize(sCtx_321: FastFutureContext, in__324: DataIn): SignHYDROGEN  {
        let data_326: Uint8Array;
        const len_328 = 64;
        const bytes_329 = in__324.readBytes(len_328);
        data_326 = bytes_329;
        return new SignHYDROGEN(data_326);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SignHYDROGEN  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SignHYDROGEN  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SignHYDROGENMetaImpl implements FastMetaType<SignHYDROGEN>  {
    serialize(sCtx_330: FastFutureContext, obj_331: SignHYDROGEN, _out_332: DataOut): void  {
        const typeId = typeof (obj_331 as any).getAetherTypeId === 'function' ? obj_331.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SignHYDROGEN' with invalid type id $ {
            typeId
        }
        `);
        _out_332.writeByte(typeId);
        switch(typeId)  {
            case 2: (SignHYDROGEN as any).META_BODY.serialize(sCtx_330, obj_331 as any as SignHYDROGEN, _out_332);
            break;
            case 1: (SignAE_ED25519 as any).META_BODY.serialize(sCtx_330, obj_331 as any as SignAE_ED25519, _out_332);
            break;
            default: throw new Error(`Cannot serialize 'SignHYDROGEN' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_330: FastFutureContext, in__333: DataIn): SignHYDROGEN  {
        const typeId = in__333.readUByte();
        switch(typeId)  {
            case 2: return (SignHYDROGEN as any).META_BODY.deserialize(sCtx_330, in__333) as any as SignHYDROGEN;
            case 1: return (SignAE_ED25519 as any).META_BODY.deserialize(sCtx_330, in__333) as any as SignHYDROGEN;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SignHYDROGEN  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SignHYDROGEN  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumChacha20Poly1305MetaBodyImpl implements FastMetaType<SodiumChacha20Poly1305>  {
    serialize(sCtx_334: FastFutureContext, obj_335: SodiumChacha20Poly1305, _out_336: DataOut): void  {
        if (obj_335.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_335.data must be 32 but was $ {
            obj_335.data.length
        }
        `);
        _out_336.write(obj_335.data);
        
    }
    deserialize(sCtx_334: FastFutureContext, in__337: DataIn): SodiumChacha20Poly1305  {
        let data_339: Uint8Array;
        const len_341 = 32;
        const bytes_342 = in__337.readBytes(len_341);
        data_339 = bytes_342;
        return new SodiumChacha20Poly1305(data_339);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumChacha20Poly1305  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumChacha20Poly1305  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumChacha20Poly1305MetaImpl implements FastMetaType<SodiumChacha20Poly1305>  {
    serialize(sCtx_343: FastFutureContext, obj_344: SodiumChacha20Poly1305, _out_345: DataOut): void  {
        const typeId = typeof (obj_344 as any).getAetherTypeId === 'function' ? obj_344.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumChacha20Poly1305' with invalid type id $ {
            typeId
        }
        `);
        _out_345.writeByte(typeId);
        switch(typeId)  {
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_343, obj_344 as any as SodiumChacha20Poly1305, _out_345);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_343, obj_344 as any as HydrogenSecretBox, _out_345);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_343, obj_344 as any as HydrogenCurvePublic, _out_345);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_343, obj_344 as any as SodiumCurvePublic, _out_345);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_343, obj_344 as any as HydrogenCurvePrivate, _out_345);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_343, obj_344 as any as SodiumCurvePrivate, _out_345);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_343, obj_344 as any as SodiumSignPublic, _out_345);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_343, obj_344 as any as HydrogenSignPublic, _out_345);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_343, obj_344 as any as SodiumSignPrivate, _out_345);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_343, obj_344 as any as HydrogenSignPrivate, _out_345);
            break;
            default: throw new Error(`Cannot serialize 'SodiumChacha20Poly1305' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_343: FastFutureContext, in__346: DataIn): SodiumChacha20Poly1305  {
        const typeId = in__346.readUByte();
        switch(typeId)  {
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_343, in__346) as any as SodiumChacha20Poly1305;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_343, in__346) as any as SodiumChacha20Poly1305;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_343, in__346) as any as SodiumChacha20Poly1305;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_343, in__346) as any as SodiumChacha20Poly1305;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_343, in__346) as any as SodiumChacha20Poly1305;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_343, in__346) as any as SodiumChacha20Poly1305;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_343, in__346) as any as SodiumChacha20Poly1305;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_343, in__346) as any as SodiumChacha20Poly1305;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_343, in__346) as any as SodiumChacha20Poly1305;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_343, in__346) as any as SodiumChacha20Poly1305;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumChacha20Poly1305  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumChacha20Poly1305  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumCurvePrivateMetaBodyImpl implements FastMetaType<SodiumCurvePrivate>  {
    serialize(sCtx_347: FastFutureContext, obj_348: SodiumCurvePrivate, _out_349: DataOut): void  {
        if (obj_348.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_348.data must be 32 but was $ {
            obj_348.data.length
        }
        `);
        _out_349.write(obj_348.data);
        
    }
    deserialize(sCtx_347: FastFutureContext, in__350: DataIn): SodiumCurvePrivate  {
        let data_352: Uint8Array;
        const len_354 = 32;
        const bytes_355 = in__350.readBytes(len_354);
        data_352 = bytes_355;
        return new SodiumCurvePrivate(data_352);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumCurvePrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumCurvePrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumCurvePrivateMetaImpl implements FastMetaType<SodiumCurvePrivate>  {
    serialize(sCtx_356: FastFutureContext, obj_357: SodiumCurvePrivate, _out_358: DataOut): void  {
        const typeId = typeof (obj_357 as any).getAetherTypeId === 'function' ? obj_357.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumCurvePrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_358.writeByte(typeId);
        switch(typeId)  {
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_356, obj_357 as any as SodiumCurvePrivate, _out_358);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_356, obj_357 as any as SodiumChacha20Poly1305, _out_358);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_356, obj_357 as any as HydrogenSecretBox, _out_358);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_356, obj_357 as any as HydrogenCurvePublic, _out_358);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_356, obj_357 as any as SodiumCurvePublic, _out_358);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_356, obj_357 as any as HydrogenCurvePrivate, _out_358);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_356, obj_357 as any as SodiumSignPublic, _out_358);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_356, obj_357 as any as HydrogenSignPublic, _out_358);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_356, obj_357 as any as SodiumSignPrivate, _out_358);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_356, obj_357 as any as HydrogenSignPrivate, _out_358);
            break;
            default: throw new Error(`Cannot serialize 'SodiumCurvePrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_356: FastFutureContext, in__359: DataIn): SodiumCurvePrivate  {
        const typeId = in__359.readUByte();
        switch(typeId)  {
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_356, in__359) as any as SodiumCurvePrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_356, in__359) as any as SodiumCurvePrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_356, in__359) as any as SodiumCurvePrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_356, in__359) as any as SodiumCurvePrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_356, in__359) as any as SodiumCurvePrivate;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_356, in__359) as any as SodiumCurvePrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_356, in__359) as any as SodiumCurvePrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_356, in__359) as any as SodiumCurvePrivate;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_356, in__359) as any as SodiumCurvePrivate;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_356, in__359) as any as SodiumCurvePrivate;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumCurvePrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumCurvePrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumCurvePublicMetaBodyImpl implements FastMetaType<SodiumCurvePublic>  {
    serialize(sCtx_360: FastFutureContext, obj_361: SodiumCurvePublic, _out_362: DataOut): void  {
        if (obj_361.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_361.data must be 32 but was $ {
            obj_361.data.length
        }
        `);
        _out_362.write(obj_361.data);
        
    }
    deserialize(sCtx_360: FastFutureContext, in__363: DataIn): SodiumCurvePublic  {
        let data_365: Uint8Array;
        const len_367 = 32;
        const bytes_368 = in__363.readBytes(len_367);
        data_365 = bytes_368;
        return new SodiumCurvePublic(data_365);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumCurvePublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumCurvePublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumCurvePublicMetaImpl implements FastMetaType<SodiumCurvePublic>  {
    serialize(sCtx_369: FastFutureContext, obj_370: SodiumCurvePublic, _out_371: DataOut): void  {
        const typeId = typeof (obj_370 as any).getAetherTypeId === 'function' ? obj_370.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumCurvePublic' with invalid type id $ {
            typeId
        }
        `);
        _out_371.writeByte(typeId);
        switch(typeId)  {
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_369, obj_370 as any as SodiumCurvePublic, _out_371);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_369, obj_370 as any as SodiumChacha20Poly1305, _out_371);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_369, obj_370 as any as HydrogenSecretBox, _out_371);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_369, obj_370 as any as HydrogenCurvePublic, _out_371);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_369, obj_370 as any as HydrogenCurvePrivate, _out_371);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_369, obj_370 as any as SodiumCurvePrivate, _out_371);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_369, obj_370 as any as SodiumSignPublic, _out_371);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_369, obj_370 as any as HydrogenSignPublic, _out_371);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_369, obj_370 as any as SodiumSignPrivate, _out_371);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_369, obj_370 as any as HydrogenSignPrivate, _out_371);
            break;
            default: throw new Error(`Cannot serialize 'SodiumCurvePublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_369: FastFutureContext, in__372: DataIn): SodiumCurvePublic  {
        const typeId = in__372.readUByte();
        switch(typeId)  {
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_369, in__372) as any as SodiumCurvePublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_369, in__372) as any as SodiumCurvePublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_369, in__372) as any as SodiumCurvePublic;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_369, in__372) as any as SodiumCurvePublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_369, in__372) as any as SodiumCurvePublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_369, in__372) as any as SodiumCurvePublic;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_369, in__372) as any as SodiumCurvePublic;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_369, in__372) as any as SodiumCurvePublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_369, in__372) as any as SodiumCurvePublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_369, in__372) as any as SodiumCurvePublic;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumCurvePublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumCurvePublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumSignPrivateMetaBodyImpl implements FastMetaType<SodiumSignPrivate>  {
    serialize(sCtx_373: FastFutureContext, obj_374: SodiumSignPrivate, _out_375: DataOut): void  {
        if (obj_374.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_374.data must be 64 but was $ {
            obj_374.data.length
        }
        `);
        _out_375.write(obj_374.data);
        
    }
    deserialize(sCtx_373: FastFutureContext, in__376: DataIn): SodiumSignPrivate  {
        let data_378: Uint8Array;
        const len_380 = 64;
        const bytes_381 = in__376.readBytes(len_380);
        data_378 = bytes_381;
        return new SodiumSignPrivate(data_378);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumSignPrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumSignPrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumSignPrivateMetaImpl implements FastMetaType<SodiumSignPrivate>  {
    serialize(sCtx_382: FastFutureContext, obj_383: SodiumSignPrivate, _out_384: DataOut): void  {
        const typeId = typeof (obj_383 as any).getAetherTypeId === 'function' ? obj_383.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumSignPrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_384.writeByte(typeId);
        switch(typeId)  {
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_382, obj_383 as any as SodiumSignPrivate, _out_384);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_382, obj_383 as any as SodiumChacha20Poly1305, _out_384);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_382, obj_383 as any as HydrogenSecretBox, _out_384);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_382, obj_383 as any as HydrogenCurvePublic, _out_384);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_382, obj_383 as any as SodiumCurvePublic, _out_384);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_382, obj_383 as any as HydrogenCurvePrivate, _out_384);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_382, obj_383 as any as SodiumCurvePrivate, _out_384);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_382, obj_383 as any as SodiumSignPublic, _out_384);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_382, obj_383 as any as HydrogenSignPublic, _out_384);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_382, obj_383 as any as HydrogenSignPrivate, _out_384);
            break;
            default: throw new Error(`Cannot serialize 'SodiumSignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_382: FastFutureContext, in__385: DataIn): SodiumSignPrivate  {
        const typeId = in__385.readUByte();
        switch(typeId)  {
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_382, in__385) as any as SodiumSignPrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_382, in__385) as any as SodiumSignPrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_382, in__385) as any as SodiumSignPrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_382, in__385) as any as SodiumSignPrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_382, in__385) as any as SodiumSignPrivate;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_382, in__385) as any as SodiumSignPrivate;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_382, in__385) as any as SodiumSignPrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_382, in__385) as any as SodiumSignPrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_382, in__385) as any as SodiumSignPrivate;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_382, in__385) as any as SodiumSignPrivate;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumSignPrivate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumSignPrivate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumSignPublicMetaBodyImpl implements FastMetaType<SodiumSignPublic>  {
    serialize(sCtx_386: FastFutureContext, obj_387: SodiumSignPublic, _out_388: DataOut): void  {
        if (obj_387.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_387.data must be 32 but was $ {
            obj_387.data.length
        }
        `);
        _out_388.write(obj_387.data);
        
    }
    deserialize(sCtx_386: FastFutureContext, in__389: DataIn): SodiumSignPublic  {
        let data_391: Uint8Array;
        const len_393 = 32;
        const bytes_394 = in__389.readBytes(len_393);
        data_391 = bytes_394;
        return new SodiumSignPublic(data_391);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumSignPublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumSignPublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class SodiumSignPublicMetaImpl implements FastMetaType<SodiumSignPublic>  {
    serialize(sCtx_395: FastFutureContext, obj_396: SodiumSignPublic, _out_397: DataOut): void  {
        const typeId = typeof (obj_396 as any).getAetherTypeId === 'function' ? obj_396.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumSignPublic' with invalid type id $ {
            typeId
        }
        `);
        _out_397.writeByte(typeId);
        switch(typeId)  {
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_395, obj_396 as any as SodiumSignPublic, _out_397);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_395, obj_396 as any as SodiumChacha20Poly1305, _out_397);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_395, obj_396 as any as HydrogenSecretBox, _out_397);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_395, obj_396 as any as HydrogenCurvePublic, _out_397);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_395, obj_396 as any as SodiumCurvePublic, _out_397);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_395, obj_396 as any as HydrogenCurvePrivate, _out_397);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_395, obj_396 as any as SodiumCurvePrivate, _out_397);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_395, obj_396 as any as HydrogenSignPublic, _out_397);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_395, obj_396 as any as SodiumSignPrivate, _out_397);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_395, obj_396 as any as HydrogenSignPrivate, _out_397);
            break;
            default: throw new Error(`Cannot serialize 'SodiumSignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_395: FastFutureContext, in__398: DataIn): SodiumSignPublic  {
        const typeId = in__398.readUByte();
        switch(typeId)  {
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_395, in__398) as any as SodiumSignPublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_395, in__398) as any as SodiumSignPublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_395, in__398) as any as SodiumSignPublic;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_395, in__398) as any as SodiumSignPublic;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_395, in__398) as any as SodiumSignPublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_395, in__398) as any as SodiumSignPublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_395, in__398) as any as SodiumSignPublic;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_395, in__398) as any as SodiumSignPublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_395, in__398) as any as SodiumSignPublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_395, in__398) as any as SodiumSignPublic;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): SodiumSignPublic  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): SodiumSignPublic  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class TelemetryCPPMetaBodyImpl implements FastMetaType<TelemetryCPP>  {
    serialize(sCtx_399: FastFutureContext, obj_400: TelemetryCPP, _out_401: DataOut): void  {
        _out_401.writeInt(obj_400.utm_id);
        SerializerPackNumber.INSTANCE.put(_out_401, obj_400.blob.length);
        _out_401.write(obj_400.blob);
        const stringBytes_404 = new TextEncoder().encode(obj_400.lib_version);
        SerializerPackNumber.INSTANCE.put(_out_401, stringBytes_404.length);
        _out_401.write(stringBytes_404);
        const stringBytes_406 = new TextEncoder().encode(obj_400.os);
        SerializerPackNumber.INSTANCE.put(_out_401, stringBytes_406.length);
        _out_401.write(stringBytes_406);
        const stringBytes_408 = new TextEncoder().encode(obj_400.compiler);
        SerializerPackNumber.INSTANCE.put(_out_401, stringBytes_408.length);
        _out_401.write(stringBytes_408);
        
    }
    deserialize(sCtx_399: FastFutureContext, in__402: DataIn): TelemetryCPP  {
        let utm_id_410: number;
        let blob_411: Uint8Array;
        let lib_version_412: string;
        let os_413: string;
        let compiler_414: string;
        utm_id_410 = in__402.readInt();
        const len_416 = Number(DeserializerPackNumber.INSTANCE.put(in__402).valueOf());
        const bytes_417 = in__402.readBytes(len_416);
        blob_411 = bytes_417;
        let stringBytes_418: Uint8Array;
        const len_420 = Number(DeserializerPackNumber.INSTANCE.put(in__402).valueOf());
        const bytes_421 = in__402.readBytes(len_420);
        stringBytes_418 = bytes_421;
        lib_version_412 = new TextDecoder('utf-8').decode(stringBytes_418);
        let stringBytes_422: Uint8Array;
        const len_424 = Number(DeserializerPackNumber.INSTANCE.put(in__402).valueOf());
        const bytes_425 = in__402.readBytes(len_424);
        stringBytes_422 = bytes_425;
        os_413 = new TextDecoder('utf-8').decode(stringBytes_422);
        let stringBytes_426: Uint8Array;
        const len_428 = Number(DeserializerPackNumber.INSTANCE.put(in__402).valueOf());
        const bytes_429 = in__402.readBytes(len_428);
        stringBytes_426 = bytes_429;
        compiler_414 = new TextDecoder('utf-8').decode(stringBytes_426);
        return new TelemetryCPP(utm_id_410, blob_411, lib_version_412, os_413, compiler_414);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): TelemetryCPP  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): TelemetryCPP  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class TelemetryCPPMetaImpl implements FastMetaType<TelemetryCPP>  {
    serialize(sCtx_430: FastFutureContext, obj_431: TelemetryCPP, _out_432: DataOut): void  {
        const typeId = typeof (obj_431 as any).getAetherTypeId === 'function' ? obj_431.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'TelemetryCPP' with invalid type id $ {
            typeId
        }
        `);
        _out_432.writeByte(typeId);
        switch(typeId)  {
            case 1: (TelemetryCPP as any).META_BODY.serialize(sCtx_430, obj_431 as any as TelemetryCPP, _out_432);
            break;
            default: throw new Error(`Cannot serialize 'TelemetryCPP' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_430: FastFutureContext, in__433: DataIn): TelemetryCPP  {
        const typeId = in__433.readUByte();
        switch(typeId)  {
            case 1: return (TelemetryCPP as any).META_BODY.deserialize(sCtx_430, in__433) as any as TelemetryCPP;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): TelemetryCPP  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): TelemetryCPP  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class UUIDAndCloudMetaBodyImpl implements FastMetaType<UUIDAndCloud>  {
    serialize(sCtx_434: FastFutureContext, obj_435: UUIDAndCloud, _out_436: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_434, obj_435.uid, _out_436);
        Cloud.META.serialize(sCtx_434, obj_435.cloud, _out_436);
        
    }
    deserialize(sCtx_434: FastFutureContext, in__437: DataIn): UUIDAndCloud  {
        let uid_438: UUID;
        let cloud_439: Cloud;
        uid_438 = FastMeta.META_UUID.deserialize(sCtx_434, in__437);
        cloud_439 = Cloud.META.deserialize(sCtx_434, in__437);
        return new UUIDAndCloud(uid_438, cloud_439);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): UUIDAndCloud  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): UUIDAndCloud  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class WorkProofBCryptMetaBodyImpl implements FastMetaType<WorkProofBCrypt>  {
    serialize(sCtx_440: FastFutureContext, obj_441: WorkProofBCrypt, _out_442: DataOut): void  {
        _out_442.writeByte(obj_441.costBCrypt);
        _out_442.writeByte(obj_441.poolSize);
        _out_442.writeInt(obj_441.maxHashVal);
        
    }
    deserialize(sCtx_440: FastFutureContext, in__443: DataIn): WorkProofBCrypt  {
        let costBCrypt_444: number;
        let poolSize_445: number;
        let maxHashVal_446: number;
        costBCrypt_444 = in__443.readByte();
        poolSize_445 = in__443.readByte();
        maxHashVal_446 = in__443.readInt();
        return new WorkProofBCrypt(costBCrypt_444, poolSize_445, maxHashVal_446);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): WorkProofBCrypt  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): WorkProofBCrypt  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class WorkProofBCryptMetaImpl implements FastMetaType<WorkProofBCrypt>  {
    serialize(sCtx_447: FastFutureContext, obj_448: WorkProofBCrypt, _out_449: DataOut): void  {
        const typeId = typeof (obj_448 as any).getAetherTypeId === 'function' ? obj_448.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'WorkProofBCrypt' with invalid type id $ {
            typeId
        }
        `);
        _out_449.writeByte(typeId);
        switch(typeId)  {
            case 1: (WorkProofBCrypt as any).META_BODY.serialize(sCtx_447, obj_448 as any as WorkProofBCrypt, _out_449);
            break;
            default: throw new Error(`Cannot serialize 'WorkProofBCrypt' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_447: FastFutureContext, in__450: DataIn): WorkProofBCrypt  {
        const typeId = in__450.readUByte();
        switch(typeId)  {
            case 1: return (WorkProofBCrypt as any).META_BODY.deserialize(sCtx_447, in__450) as any as WorkProofBCrypt;
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): WorkProofBCrypt  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): WorkProofBCrypt  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class WorkProofDTOMetaBodyImpl implements FastMetaType<WorkProofDTO>  {
    serialize(sCtx_451: FastFutureContext, obj_452: WorkProofDTO, _out_453: DataOut): void  {
        const stringBytes_455 = new TextEncoder().encode(obj_452.salt);
        SerializerPackNumber.INSTANCE.put(_out_453, stringBytes_455.length);
        _out_453.write(stringBytes_455);
        const stringBytes_457 = new TextEncoder().encode(obj_452.suffix);
        SerializerPackNumber.INSTANCE.put(_out_453, stringBytes_457.length);
        _out_453.write(stringBytes_457);
        _out_453.writeByte(obj_452.poolSize);
        _out_453.writeInt(obj_452.maxHashVal);
        SignedKey.META.serialize(sCtx_451, obj_452.globalKey, _out_453);
        
    }
    deserialize(sCtx_451: FastFutureContext, in__454: DataIn): WorkProofDTO  {
        let salt_459: string;
        let suffix_460: string;
        let poolSize_461: number;
        let maxHashVal_462: number;
        let globalKey_463: SignedKey;
        let stringBytes_464: Uint8Array;
        const len_466 = Number(DeserializerPackNumber.INSTANCE.put(in__454).valueOf());
        const bytes_467 = in__454.readBytes(len_466);
        stringBytes_464 = bytes_467;
        salt_459 = new TextDecoder('utf-8').decode(stringBytes_464);
        let stringBytes_468: Uint8Array;
        const len_470 = Number(DeserializerPackNumber.INSTANCE.put(in__454).valueOf());
        const bytes_471 = in__454.readBytes(len_470);
        stringBytes_468 = bytes_471;
        suffix_460 = new TextDecoder('utf-8').decode(stringBytes_468);
        poolSize_461 = in__454.readByte();
        maxHashVal_462 = in__454.readInt();
        globalKey_463 = SignedKey.META.deserialize(sCtx_451, in__454);
        return new WorkProofDTO(salt_459, suffix_460, poolSize_461, maxHashVal_462, globalKey_463);
        
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): WorkProofDTO  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiRegSafeStream  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiStream  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientInteractionClientStream  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientInteractionClientStream  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class GlobalApiRegistrationServerRegistrationApiMetaImpl implements FastMetaType<GlobalApiRegistrationServerRegistrationApi>  {
    serialize(ctx: FastFutureContext, obj: GlobalApiRegistrationServerRegistrationApi, out: DataOut): void  {
        FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out);
        
    }
    deserialize(ctx: FastFutureContext, in_: DataIn): GlobalApiRegistrationServerRegistrationApi  {
        return new GlobalApiRegistrationServerRegistrationApi(FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_));
        
    }
    metaHashCode(obj: GlobalApiRegistrationServerRegistrationApi | null | undefined): number  {
        return FastMeta.META_ARRAY_BYTE.metaHashCode(obj?.data);
        
    }
    metaEquals(v1: GlobalApiRegistrationServerRegistrationApi | null | undefined, v2: any | null | undefined): boolean  {
        return FastMeta.META_ARRAY_BYTE.metaEquals(v1?.data, (v2 instanceof GlobalApiRegistrationServerRegistrationApi) ? v2.data : v2);
        
    }
    metaToString(obj: GlobalApiRegistrationServerRegistrationApi | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('GlobalApiRegistrationServerRegistrationApi(').add('data:').add(obj.data).add(')');
        
    }
    public serializeToBytes(obj: GlobalApiRegistrationServerRegistrationApi): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): GlobalApiRegistrationServerRegistrationApi  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): GlobalApiRegistrationServerRegistrationApi  {
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): GlobalRegClientApiStream  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): LoginClientStream  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): LoginStream  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
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
        // FastFutureContextStub импортируется в aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerRegistrationApiStream  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub импортируется в aether_api_impl.ts
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
                    let backId_473: number;
                    let data_474: LoginClientStream;
                    backId_473 = dataIn.readByte();
                    data_474 = LoginClientStream.META.deserialize(ctx, dataIn);
                    const argsNames_475: string[] = ["backId", "data"];
                    const argsValues_476: any[] = [backId_473, data_474];
                    ctx.invokeLocalMethodBefore("sendSafeApiDataMulti", argsNames_475, argsValues_476);
                    localApi.sendSafeApiDataMulti(backId_473, data_474);
                    ctx.invokeLocalMethodAfter("sendSafeApiDataMulti", null, argsNames_475, argsValues_476);
                    break;
                    
                }
                case 4:  {
                    let data_478: LoginClientStream;
                    data_478 = LoginClientStream.META.deserialize(ctx, dataIn);
                    const argsNames_479: string[] = ["data"];
                    const argsValues_480: any[] = [data_478];
                    ctx.invokeLocalMethodBefore("sendSafeApiData", argsNames_479, argsValues_480);
                    localApi.sendSafeApiData(data_478);
                    ctx.invokeLocalMethodAfter("sendSafeApiData", null, argsNames_479, argsValues_480);
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
    makeRemote(sCtx_481: FastFutureContext): ClientApiUnsafeRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_481.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_481, sendSafeApiDataMulti: (backId: number, data: LoginClientStream): void =>  {
                const dataOut_483 = new DataInOut();
                dataOut_483.writeByte(3);
                const argsNames_485: string[] = ["backId", "data"];
                const argsValues_486: any[] = [backId, data];
                sCtx_481.invokeRemoteMethodAfter("sendSafeApiDataMulti", null, argsNames_485, argsValues_486);
                dataOut_483.writeByte(backId);
                LoginClientStream.META.serialize(sCtx_481, data, dataOut_483);
                sCtx_481.sendToRemote(dataOut_483.toArray());
                
            }
            , sendSafeApiData: (data: LoginClientStream): void =>  {
                const dataOut_488 = new DataInOut();
                dataOut_488.writeByte(4);
                const argsNames_490: string[] = ["data"];
                const argsValues_491: any[] = [data];
                sCtx_481.invokeRemoteMethodAfter("sendSafeApiData", null, argsNames_490, argsValues_491);
                LoginClientStream.META.serialize(sCtx_481, data, dataOut_488);
                sCtx_481.sendToRemote(dataOut_488.toArray());
                
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
                    let uid_493: UUID;
                    uid_493 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_494: string[] = ["uid"];
                    const argsValues_495: any[] = [uid_493];
                    ctx.invokeLocalMethodBefore("changeParent", argsNames_494, argsValues_495);
                    localApi.changeParent(uid_493);
                    ctx.invokeLocalMethodAfter("changeParent", null, argsNames_494, argsValues_495);
                    break;
                    
                }
                case 4:  {
                    let alias_497: UUID;
                    alias_497 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_498: string[] = ["alias"];
                    const argsValues_499: any[] = [alias_497];
                    ctx.invokeLocalMethodBefore("changeAlias", argsNames_498, argsValues_499);
                    localApi.changeAlias(alias_497);
                    ctx.invokeLocalMethodAfter("changeAlias", null, argsNames_498, argsValues_499);
                    break;
                    
                }
                case 5:  {
                    let uid_501: UUID;
                    uid_501 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_502: string[] = ["uid"];
                    const argsValues_503: any[] = [uid_501];
                    ctx.invokeLocalMethodBefore("newChild", argsNames_502, argsValues_503);
                    localApi.newChild(uid_501);
                    ctx.invokeLocalMethodAfter("newChild", null, argsNames_502, argsValues_503);
                    break;
                    
                }
                case 6:  {
                    let msg_505: Message[];
                    const len_507 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    msg_505 = new Array<Message>(len_507);
                    for (let idx_506 = 0;
                    idx_506 < len_507;
                    idx_506++)  {
                        msg_505[idx_506] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_508: string[] = ["msg"];
                    const argsValues_509: any[] = [msg_505];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_508, argsValues_509);
                    localApi.sendMessages(msg_505);
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_508, argsValues_509);
                    break;
                    
                }
                case 7:  {
                    let serverDescriptor_511: ServerDescriptor;
                    serverDescriptor_511 = ServerDescriptor.META.deserialize(ctx, dataIn);
                    const argsNames_512: string[] = ["serverDescriptor"];
                    const argsValues_513: any[] = [serverDescriptor_511];
                    ctx.invokeLocalMethodBefore("sendServerDescriptor", argsNames_512, argsValues_513);
                    localApi.sendServerDescriptor(serverDescriptor_511);
                    ctx.invokeLocalMethodAfter("sendServerDescriptor", null, argsNames_512, argsValues_513);
                    break;
                    
                }
                case 8:  {
                    let serverDescriptors_515: ServerDescriptor[];
                    const len_517 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    serverDescriptors_515 = new Array<ServerDescriptor>(len_517);
                    for (let idx_516 = 0;
                    idx_516 < len_517;
                    idx_516++)  {
                        serverDescriptors_515[idx_516] = ServerDescriptor.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_518: string[] = ["serverDescriptors"];
                    const argsValues_519: any[] = [serverDescriptors_515];
                    ctx.invokeLocalMethodBefore("sendServerDescriptors", argsNames_518, argsValues_519);
                    localApi.sendServerDescriptors(serverDescriptors_515);
                    ctx.invokeLocalMethodAfter("sendServerDescriptors", null, argsNames_518, argsValues_519);
                    break;
                    
                }
                case 9:  {
                    let uid_521: UUID;
                    let cloud_522: Cloud;
                    uid_521 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    cloud_522 = Cloud.META.deserialize(ctx, dataIn);
                    const argsNames_523: string[] = ["uid", "cloud"];
                    const argsValues_524: any[] = [uid_521, cloud_522];
                    ctx.invokeLocalMethodBefore("sendCloud", argsNames_523, argsValues_524);
                    localApi.sendCloud(uid_521, cloud_522);
                    ctx.invokeLocalMethodAfter("sendCloud", null, argsNames_523, argsValues_524);
                    break;
                    
                }
                case 10:  {
                    let clouds_526: UUIDAndCloud[];
                    const len_528 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    clouds_526 = new Array<UUIDAndCloud>(len_528);
                    for (let idx_527 = 0;
                    idx_527 < len_528;
                    idx_527++)  {
                        clouds_526[idx_527] = UUIDAndCloud.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_529: string[] = ["clouds"];
                    const argsValues_530: any[] = [clouds_526];
                    ctx.invokeLocalMethodBefore("sendClouds", argsNames_529, argsValues_530);
                    localApi.sendClouds(clouds_526);
                    ctx.invokeLocalMethodAfter("sendClouds", null, argsNames_529, argsValues_530);
                    break;
                    
                }
                case 11:  {
                    const argsNames_532: string[] = [];
                    const argsValues_533: any[] = [];
                    ctx.invokeLocalMethodBefore("requestTelemetry", argsNames_532, argsValues_533);
                    localApi.requestTelemetry();
                    ctx.invokeLocalMethodAfter("requestTelemetry", null, argsNames_532, argsValues_533);
                    break;
                    
                }
                case 12:  {
                    let groups_535: AccessGroup[];
                    const len_537 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    groups_535 = new Array<AccessGroup>(len_537);
                    for (let idx_536 = 0;
                    idx_536 < len_537;
                    idx_536++)  {
                        groups_535[idx_536] = AccessGroup.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_538: string[] = ["groups"];
                    const argsValues_539: any[] = [groups_535];
                    ctx.invokeLocalMethodBefore("sendAccessGroups", argsNames_538, argsValues_539);
                    localApi.sendAccessGroups(groups_535);
                    ctx.invokeLocalMethodAfter("sendAccessGroups", null, argsNames_538, argsValues_539);
                    break;
                    
                }
                case 13:  {
                    let uid_541: UUID;
                    let groups_542: bigint[];
                    uid_541 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_544 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    groups_542 = new Array<bigint>(len_544);
                    for (let idx_543 = 0;
                    idx_543 < len_544;
                    idx_543++)  {
                        groups_542[idx_543] = dataIn.readLong();
                        
                    }
                    const argsNames_545: string[] = ["uid", "groups"];
                    const argsValues_546: any[] = [uid_541, groups_542];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_545, argsValues_546);
                    localApi.sendAccessGroupForClient(uid_541, groups_542);
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_545, argsValues_546);
                    break;
                    
                }
                case 14:  {
                    let id_548: bigint;
                    let groups_549: UUID[];
                    id_548 = dataIn.readLong();
                    const len_551 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    groups_549 = new Array<UUID>(len_551);
                    for (let idx_550 = 0;
                    idx_550 < len_551;
                    idx_550++)  {
                        groups_549[idx_550] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_552: string[] = ["id", "groups"];
                    const argsValues_553: any[] = [id_548, groups_549];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_552, argsValues_553);
                    localApi.addItemsToAccessGroup(id_548, groups_549);
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_552, argsValues_553);
                    break;
                    
                }
                case 15:  {
                    let id_555: bigint;
                    let groups_556: UUID[];
                    id_555 = dataIn.readLong();
                    const len_558 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    groups_556 = new Array<UUID>(len_558);
                    for (let idx_557 = 0;
                    idx_557 < len_558;
                    idx_557++)  {
                        groups_556[idx_557] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_559: string[] = ["id", "groups"];
                    const argsValues_560: any[] = [id_555, groups_556];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_559, argsValues_560);
                    localApi.removeItemsFromAccessGroup(id_555, groups_556);
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_559, argsValues_560);
                    break;
                    
                }
                case 16:  {
                    let uid_562: UUID;
                    let groups_563: bigint[];
                    uid_562 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_565 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    groups_563 = new Array<bigint>(len_565);
                    for (let idx_564 = 0;
                    idx_564 < len_565;
                    idx_564++)  {
                        groups_563[idx_564] = dataIn.readLong();
                        
                    }
                    const argsNames_566: string[] = ["uid", "groups"];
                    const argsValues_567: any[] = [uid_562, groups_563];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_566, argsValues_567);
                    localApi.addAccessGroupsToClient(uid_562, groups_563);
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_566, argsValues_567);
                    break;
                    
                }
                case 17:  {
                    let uid_569: UUID;
                    let groups_570: bigint[];
                    uid_569 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_572 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    groups_570 = new Array<bigint>(len_572);
                    for (let idx_571 = 0;
                    idx_571 < len_572;
                    idx_571++)  {
                        groups_570[idx_571] = dataIn.readLong();
                        
                    }
                    const argsNames_573: string[] = ["uid", "groups"];
                    const argsValues_574: any[] = [uid_569, groups_570];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_573, argsValues_574);
                    localApi.removeAccessGroupsFromClient(uid_569, groups_570);
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_573, argsValues_574);
                    break;
                    
                }
                case 18:  {
                    let uid_576: UUID;
                    let accessedClients_577: UUID[];
                    uid_576 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_579 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    accessedClients_577 = new Array<UUID>(len_579);
                    for (let idx_578 = 0;
                    idx_578 < len_579;
                    idx_578++)  {
                        accessedClients_577[idx_578] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_580: string[] = ["uid", "accessedClients"];
                    const argsValues_581: any[] = [uid_576, accessedClients_577];
                    ctx.invokeLocalMethodBefore("sendAllAccessedClients", argsNames_580, argsValues_581);
                    localApi.sendAllAccessedClients(uid_576, accessedClients_577);
                    ctx.invokeLocalMethodAfter("sendAllAccessedClients", null, argsNames_580, argsValues_581);
                    break;
                    
                }
                case 19:  {
                    let results_583: AccessCheckResult[];
                    const len_585 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    results_583 = new Array<AccessCheckResult>(len_585);
                    for (let idx_584 = 0;
                    idx_584 < len_585;
                    idx_584++)  {
                        results_583[idx_584] = AccessCheckResult.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_586: string[] = ["results"];
                    const argsValues_587: any[] = [results_583];
                    ctx.invokeLocalMethodBefore("sendAccessCheckResults", argsNames_586, argsValues_587);
                    localApi.sendAccessCheckResults(results_583);
                    ctx.invokeLocalMethodAfter("sendAccessCheckResults", null, argsNames_586, argsValues_587);
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
    makeRemote(sCtx_588: FastFutureContext): ClientApiSafeRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_588.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_588, changeParent: (uid: UUID): void =>  {
                const dataOut_590 = new DataInOut();
                dataOut_590.writeByte(3);
                const argsNames_592: string[] = ["uid"];
                const argsValues_593: any[] = [uid];
                sCtx_588.invokeRemoteMethodAfter("changeParent", null, argsNames_592, argsValues_593);
                FastMeta.META_UUID.serialize(sCtx_588, uid, dataOut_590);
                sCtx_588.sendToRemote(dataOut_590.toArray());
                
            }
            , changeAlias: (alias: UUID): void =>  {
                const dataOut_595 = new DataInOut();
                dataOut_595.writeByte(4);
                const argsNames_597: string[] = ["alias"];
                const argsValues_598: any[] = [alias];
                sCtx_588.invokeRemoteMethodAfter("changeAlias", null, argsNames_597, argsValues_598);
                FastMeta.META_UUID.serialize(sCtx_588, alias, dataOut_595);
                sCtx_588.sendToRemote(dataOut_595.toArray());
                
            }
            , newChild: (uid: UUID): void =>  {
                const dataOut_600 = new DataInOut();
                dataOut_600.writeByte(5);
                const argsNames_602: string[] = ["uid"];
                const argsValues_603: any[] = [uid];
                sCtx_588.invokeRemoteMethodAfter("newChild", null, argsNames_602, argsValues_603);
                FastMeta.META_UUID.serialize(sCtx_588, uid, dataOut_600);
                sCtx_588.sendToRemote(dataOut_600.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_605 = new DataInOut();
                dataOut_605.writeByte(6);
                const argsNames_607: string[] = ["msg"];
                const argsValues_608: any[] = [msg];
                sCtx_588.invokeRemoteMethodAfter("sendMessages", null, argsNames_607, argsValues_608);
                SerializerPackNumber.INSTANCE.put(dataOut_605, msg.length);
                for (const el_609 of msg)  {
                    Message.META.serialize(sCtx_588, el_609, dataOut_605);
                    
                }
                sCtx_588.sendToRemote(dataOut_605.toArray());
                
            }
            , sendServerDescriptor: (serverDescriptor: ServerDescriptor): void =>  {
                const dataOut_611 = new DataInOut();
                dataOut_611.writeByte(7);
                const argsNames_613: string[] = ["serverDescriptor"];
                const argsValues_614: any[] = [serverDescriptor];
                sCtx_588.invokeRemoteMethodAfter("sendServerDescriptor", null, argsNames_613, argsValues_614);
                ServerDescriptor.META.serialize(sCtx_588, serverDescriptor, dataOut_611);
                sCtx_588.sendToRemote(dataOut_611.toArray());
                
            }
            , sendServerDescriptors: (serverDescriptors: ServerDescriptor[]): void =>  {
                const dataOut_616 = new DataInOut();
                dataOut_616.writeByte(8);
                const argsNames_618: string[] = ["serverDescriptors"];
                const argsValues_619: any[] = [serverDescriptors];
                sCtx_588.invokeRemoteMethodAfter("sendServerDescriptors", null, argsNames_618, argsValues_619);
                SerializerPackNumber.INSTANCE.put(dataOut_616, serverDescriptors.length);
                for (const el_620 of serverDescriptors)  {
                    ServerDescriptor.META.serialize(sCtx_588, el_620, dataOut_616);
                    
                }
                sCtx_588.sendToRemote(dataOut_616.toArray());
                
            }
            , sendCloud: (uid: UUID, cloud: Cloud): void =>  {
                const dataOut_622 = new DataInOut();
                dataOut_622.writeByte(9);
                const argsNames_624: string[] = ["uid", "cloud"];
                const argsValues_625: any[] = [uid, cloud];
                sCtx_588.invokeRemoteMethodAfter("sendCloud", null, argsNames_624, argsValues_625);
                FastMeta.META_UUID.serialize(sCtx_588, uid, dataOut_622);
                Cloud.META.serialize(sCtx_588, cloud, dataOut_622);
                sCtx_588.sendToRemote(dataOut_622.toArray());
                
            }
            , sendClouds: (clouds: UUIDAndCloud[]): void =>  {
                const dataOut_627 = new DataInOut();
                dataOut_627.writeByte(10);
                const argsNames_629: string[] = ["clouds"];
                const argsValues_630: any[] = [clouds];
                sCtx_588.invokeRemoteMethodAfter("sendClouds", null, argsNames_629, argsValues_630);
                SerializerPackNumber.INSTANCE.put(dataOut_627, clouds.length);
                for (const el_631 of clouds)  {
                    UUIDAndCloud.META.serialize(sCtx_588, el_631, dataOut_627);
                    
                }
                sCtx_588.sendToRemote(dataOut_627.toArray());
                
            }
            , requestTelemetry: (): void =>  {
                const dataOut_633 = new DataInOut();
                dataOut_633.writeByte(11);
                const argsNames_635: string[] = [];
                const argsValues_636: any[] = [];
                sCtx_588.invokeRemoteMethodAfter("requestTelemetry", null, argsNames_635, argsValues_636);
                sCtx_588.sendToRemote(dataOut_633.toArray());
                
            }
            , sendAccessGroups: (groups: AccessGroup[]): void =>  {
                const dataOut_638 = new DataInOut();
                dataOut_638.writeByte(12);
                const argsNames_640: string[] = ["groups"];
                const argsValues_641: any[] = [groups];
                sCtx_588.invokeRemoteMethodAfter("sendAccessGroups", null, argsNames_640, argsValues_641);
                SerializerPackNumber.INSTANCE.put(dataOut_638, groups.length);
                for (const el_642 of groups)  {
                    AccessGroup.META.serialize(sCtx_588, el_642, dataOut_638);
                    
                }
                sCtx_588.sendToRemote(dataOut_638.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_644 = new DataInOut();
                dataOut_644.writeByte(13);
                const argsNames_646: string[] = ["uid", "groups"];
                const argsValues_647: any[] = [uid, groups];
                sCtx_588.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_646, argsValues_647);
                FastMeta.META_UUID.serialize(sCtx_588, uid, dataOut_644);
                SerializerPackNumber.INSTANCE.put(dataOut_644, groups.length);
                for (const el_648 of groups)  {
                    dataOut_644.writeLong(el_648);
                    
                }
                sCtx_588.sendToRemote(dataOut_644.toArray());
                
            }
            , addItemsToAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_650 = new DataInOut();
                dataOut_650.writeByte(14);
                const argsNames_652: string[] = ["id", "groups"];
                const argsValues_653: any[] = [id, groups];
                sCtx_588.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_652, argsValues_653);
                dataOut_650.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_650, groups.length);
                for (const el_654 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_588, el_654, dataOut_650);
                    
                }
                sCtx_588.sendToRemote(dataOut_650.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_656 = new DataInOut();
                dataOut_656.writeByte(15);
                const argsNames_658: string[] = ["id", "groups"];
                const argsValues_659: any[] = [id, groups];
                sCtx_588.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_658, argsValues_659);
                dataOut_656.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_656, groups.length);
                for (const el_660 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_588, el_660, dataOut_656);
                    
                }
                sCtx_588.sendToRemote(dataOut_656.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_662 = new DataInOut();
                dataOut_662.writeByte(16);
                const argsNames_664: string[] = ["uid", "groups"];
                const argsValues_665: any[] = [uid, groups];
                sCtx_588.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_664, argsValues_665);
                FastMeta.META_UUID.serialize(sCtx_588, uid, dataOut_662);
                SerializerPackNumber.INSTANCE.put(dataOut_662, groups.length);
                for (const el_666 of groups)  {
                    dataOut_662.writeLong(el_666);
                    
                }
                sCtx_588.sendToRemote(dataOut_662.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_668 = new DataInOut();
                dataOut_668.writeByte(17);
                const argsNames_670: string[] = ["uid", "groups"];
                const argsValues_671: any[] = [uid, groups];
                sCtx_588.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_670, argsValues_671);
                FastMeta.META_UUID.serialize(sCtx_588, uid, dataOut_668);
                SerializerPackNumber.INSTANCE.put(dataOut_668, groups.length);
                for (const el_672 of groups)  {
                    dataOut_668.writeLong(el_672);
                    
                }
                sCtx_588.sendToRemote(dataOut_668.toArray());
                
            }
            , sendAllAccessedClients: (uid: UUID, accessedClients: UUID[]): void =>  {
                const dataOut_674 = new DataInOut();
                dataOut_674.writeByte(18);
                const argsNames_676: string[] = ["uid", "accessedClients"];
                const argsValues_677: any[] = [uid, accessedClients];
                sCtx_588.invokeRemoteMethodAfter("sendAllAccessedClients", null, argsNames_676, argsValues_677);
                FastMeta.META_UUID.serialize(sCtx_588, uid, dataOut_674);
                SerializerPackNumber.INSTANCE.put(dataOut_674, accessedClients.length);
                for (const el_678 of accessedClients)  {
                    FastMeta.META_UUID.serialize(sCtx_588, el_678, dataOut_674);
                    
                }
                sCtx_588.sendToRemote(dataOut_674.toArray());
                
            }
            , sendAccessCheckResults: (results: AccessCheckResult[]): void =>  {
                const dataOut_680 = new DataInOut();
                dataOut_680.writeByte(19);
                const argsNames_682: string[] = ["results"];
                const argsValues_683: any[] = [results];
                sCtx_588.invokeRemoteMethodAfter("sendAccessCheckResults", null, argsNames_682, argsValues_683);
                SerializerPackNumber.INSTANCE.put(dataOut_680, results.length);
                for (const el_684 of results)  {
                    AccessCheckResult.META.serialize(sCtx_588, el_684, dataOut_680);
                    
                }
                sCtx_588.sendToRemote(dataOut_680.toArray());
                
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
                    let id_686: number;
                    id_686 = dataIn.readByte();
                    const argsNames_687: string[] = ["id"];
                    const argsValues_688: any[] = [id_686];
                    ctx.invokeLocalMethodBefore("backId", argsNames_687, argsValues_688);
                    localApi.backId(id_686);
                    ctx.invokeLocalMethodAfter("backId", null, argsNames_687, argsValues_688);
                    break;
                    
                }
                case 4:  {
                    const reqId_689 = dataIn.readInt();
                    let nextConnectMsDuration_690: bigint;
                    nextConnectMsDuration_690 = dataIn.readLong();
                    const argsNames_691: string[] = ["nextConnectMsDuration"];
                    const argsValues_692: any[] = [nextConnectMsDuration_690];
                    ctx.invokeLocalMethodBefore("ping", argsNames_691, argsValues_692);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.ping(nextConnectMsDuration_690);
                    ctx.invokeLocalMethodAfter("ping", resultFuture, argsNames_691, argsValues_692);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_689);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    let uid_694: UUID;
                    let stream_695: ClientApiStream;
                    uid_694 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    stream_695 = ClientApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_696: string[] = ["uid", "stream"];
                    const argsValues_697: any[] = [uid_694, stream_695];
                    ctx.invokeLocalMethodBefore("client", argsNames_696, argsValues_697);
                    localApi.client(uid_694, stream_695);
                    ctx.invokeLocalMethodAfter("client", null, argsNames_696, argsValues_697);
                    break;
                    
                }
                case 6:  {
                    let msg_699: Message;
                    msg_699 = Message.META.deserialize(ctx, dataIn);
                    const argsNames_700: string[] = ["msg"];
                    const argsValues_701: any[] = [msg_699];
                    ctx.invokeLocalMethodBefore("sendMessage", argsNames_700, argsValues_701);
                    localApi.sendMessage(msg_699);
                    ctx.invokeLocalMethodAfter("sendMessage", null, argsNames_700, argsValues_701);
                    break;
                    
                }
                case 7:  {
                    let msg_703: Message[];
                    const len_705 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    msg_703 = new Array<Message>(len_705);
                    for (let idx_704 = 0;
                    idx_704 < len_705;
                    idx_704++)  {
                        msg_703[idx_704] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_706: string[] = ["msg"];
                    const argsValues_707: any[] = [msg_703];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_706, argsValues_707);
                    localApi.sendMessages(msg_703);
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_706, argsValues_707);
                    break;
                    
                }
                case 8:  {
                    const reqId_708 = dataIn.readInt();
                    let owner_709: UUID;
                    let uids_710: UUID[];
                    owner_709 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_712 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    uids_710 = new Array<UUID>(len_712);
                    for (let idx_711 = 0;
                    idx_711 < len_712;
                    idx_711++)  {
                        uids_710[idx_711] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_713: string[] = ["owner", "uids"];
                    const argsValues_714: any[] = [owner_709, uids_710];
                    ctx.invokeLocalMethodBefore("createAccessGroup", argsNames_713, argsValues_714);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.createAccessGroup(owner_709, uids_710);
                    ctx.invokeLocalMethodAfter("createAccessGroup", resultFuture, argsNames_713, argsValues_714);
                    resultFuture.to((v_716: bigint) =>  {
                        const data_715 = new DataInOut();
                        data_715.writeLong(v_716);
                        ctx.sendResultToRemote(reqId_708, data_715.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_717 = dataIn.readInt();
                    let groupId_718: bigint;
                    let uid_719: UUID;
                    groupId_718 = dataIn.readLong();
                    uid_719 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_720: string[] = ["groupId", "uid"];
                    const argsValues_721: any[] = [groupId_718, uid_719];
                    ctx.invokeLocalMethodBefore("addToAccessGroup", argsNames_720, argsValues_721);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.addToAccessGroup(groupId_718, uid_719);
                    ctx.invokeLocalMethodAfter("addToAccessGroup", resultFuture, argsNames_720, argsValues_721);
                    resultFuture.to((v_723: boolean) =>  {
                        const data_722 = new DataInOut();
                        data_722.writeBoolean(v_723);
                        ctx.sendResultToRemote(reqId_717, data_722.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_724 = dataIn.readInt();
                    let groupId_725: bigint;
                    let uid_726: UUID;
                    groupId_725 = dataIn.readLong();
                    uid_726 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_727: string[] = ["groupId", "uid"];
                    const argsValues_728: any[] = [groupId_725, uid_726];
                    ctx.invokeLocalMethodBefore("removeFromAccessGroup", argsNames_727, argsValues_728);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.removeFromAccessGroup(groupId_725, uid_726);
                    ctx.invokeLocalMethodAfter("removeFromAccessGroup", resultFuture, argsNames_727, argsValues_728);
                    resultFuture.to((v_730: boolean) =>  {
                        const data_729 = new DataInOut();
                        data_729.writeBoolean(v_730);
                        ctx.sendResultToRemote(reqId_724, data_729.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_731 = dataIn.readInt();
                    let uid_732: UUID;
                    uid_732 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_733: string[] = ["uid"];
                    const argsValues_734: any[] = [uid_732];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage", argsNames_733, argsValues_734);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.checkAccessForSendMessage(uid_732);
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage", resultFuture, argsNames_733, argsValues_734);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_731);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    let sid_736: number[];
                    const len_738 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    sid_736 = new Array<number>(len_738);
                    for (let idx_737 = 0;
                    idx_737 < len_738;
                    idx_737++)  {
                        sid_736[idx_737] = dataIn.readShort();
                        
                    }
                    const argsNames_739: string[] = ["sid"];
                    const argsValues_740: any[] = [sid_736];
                    ctx.invokeLocalMethodBefore("resolverServers", argsNames_739, argsValues_740);
                    localApi.resolverServers(sid_736);
                    ctx.invokeLocalMethodAfter("resolverServers", null, argsNames_739, argsValues_740);
                    break;
                    
                }
                case 13:  {
                    let uids_742: UUID[];
                    const len_744 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    uids_742 = new Array<UUID>(len_744);
                    for (let idx_743 = 0;
                    idx_743 < len_744;
                    idx_743++)  {
                        uids_742[idx_743] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_745: string[] = ["uids"];
                    const argsValues_746: any[] = [uids_742];
                    ctx.invokeLocalMethodBefore("resolverClouds", argsNames_745, argsValues_746);
                    localApi.resolverClouds(uids_742);
                    ctx.invokeLocalMethodAfter("resolverClouds", null, argsNames_745, argsValues_746);
                    break;
                    
                }
                case 14:  {
                    const reqId_747 = dataIn.readInt();
                    let uid_748: UUID;
                    uid_748 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_749: string[] = ["uid"];
                    const argsValues_750: any[] = [uid_748];
                    ctx.invokeLocalMethodBefore("getAccessGroups", argsNames_749, argsValues_750);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAccessGroups(uid_748);
                    ctx.invokeLocalMethodAfter("getAccessGroups", resultFuture, argsNames_749, argsValues_750);
                    resultFuture.to((v_752: bigint[]) =>  {
                        const data_751 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_751, v_752.length);
                        for (const el_753 of v_752)  {
                            data_751.writeLong(el_753);
                            
                        }
                        ctx.sendResultToRemote(reqId_747, data_751.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_754 = dataIn.readInt();
                    let groupId_755: bigint;
                    groupId_755 = dataIn.readLong();
                    const argsNames_756: string[] = ["groupId"];
                    const argsValues_757: any[] = [groupId_755];
                    ctx.invokeLocalMethodBefore("getAccessGroup", argsNames_756, argsValues_757);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAccessGroup(groupId_755);
                    ctx.invokeLocalMethodAfter("getAccessGroup", resultFuture, argsNames_756, argsValues_757);
                    resultFuture.to((v_759: AccessGroup) =>  {
                        const data_758 = new DataInOut();
                        AccessGroup.META.serialize(ctx, v_759, data_758);
                        ctx.sendResultToRemote(reqId_754, data_758.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 16:  {
                    const reqId_760 = dataIn.readInt();
                    let uid_761: UUID;
                    uid_761 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_762: string[] = ["uid"];
                    const argsValues_763: any[] = [uid_761];
                    ctx.invokeLocalMethodBefore("getAllAccessedClients", argsNames_762, argsValues_763);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAllAccessedClients(uid_761);
                    ctx.invokeLocalMethodAfter("getAllAccessedClients", resultFuture, argsNames_762, argsValues_763);
                    resultFuture.to((v_765: UUID[]) =>  {
                        const data_764 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_764, v_765.length);
                        for (const el_766 of v_765)  {
                            FastMeta.META_UUID.serialize(ctx, el_766, data_764);
                            
                        }
                        ctx.sendResultToRemote(reqId_760, data_764.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 17:  {
                    const reqId_767 = dataIn.readInt();
                    let uid1_768: UUID;
                    let uid2_769: UUID;
                    uid1_768 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid2_769 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_770: string[] = ["uid1", "uid2"];
                    const argsValues_771: any[] = [uid1_768, uid2_769];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage2", argsNames_770, argsValues_771);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.checkAccessForSendMessage2(uid1_768, uid2_769);
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage2", resultFuture, argsNames_770, argsValues_771);
                    resultFuture.to((v_773: boolean) =>  {
                        const data_772 = new DataInOut();
                        data_772.writeBoolean(v_773);
                        ctx.sendResultToRemote(reqId_767, data_772.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 18:  {
                    let telemetry_775: Telemetry;
                    telemetry_775 = Telemetry.META.deserialize(ctx, dataIn);
                    const argsNames_776: string[] = ["telemetry"];
                    const argsValues_777: any[] = [telemetry_775];
                    ctx.invokeLocalMethodBefore("sendTelemetry", argsNames_776, argsValues_777);
                    localApi.sendTelemetry(telemetry_775);
                    ctx.invokeLocalMethodAfter("sendTelemetry", null, argsNames_776, argsValues_777);
                    break;
                    
                }
                case 19:  {
                    let uids_779: UUID[];
                    const len_781 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    uids_779 = new Array<UUID>(len_781);
                    for (let idx_780 = 0;
                    idx_780 < len_781;
                    idx_780++)  {
                        uids_779[idx_780] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_782: string[] = ["uids"];
                    const argsValues_783: any[] = [uids_779];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsForClients", argsNames_782, argsValues_783);
                    localApi.requestAccessGroupsForClients(uids_779);
                    ctx.invokeLocalMethodAfter("requestAccessGroupsForClients", null, argsNames_782, argsValues_783);
                    break;
                    
                }
                case 20:  {
                    let ids_785: bigint[];
                    const len_787 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    ids_785 = new Array<bigint>(len_787);
                    for (let idx_786 = 0;
                    idx_786 < len_787;
                    idx_786++)  {
                        ids_785[idx_786] = dataIn.readLong();
                        
                    }
                    const argsNames_788: string[] = ["ids"];
                    const argsValues_789: any[] = [ids_785];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsItems", argsNames_788, argsValues_789);
                    localApi.requestAccessGroupsItems(ids_785);
                    ctx.invokeLocalMethodAfter("requestAccessGroupsItems", null, argsNames_788, argsValues_789);
                    break;
                    
                }
                case 22:  {
                    let uid_791: UUID;
                    let groups_792: bigint[];
                    uid_791 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_794 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    groups_792 = new Array<bigint>(len_794);
                    for (let idx_793 = 0;
                    idx_793 < len_794;
                    idx_793++)  {
                        groups_792[idx_793] = dataIn.readLong();
                        
                    }
                    const argsNames_795: string[] = ["uid", "groups"];
                    const argsValues_796: any[] = [uid_791, groups_792];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_795, argsValues_796);
                    localApi.sendAccessGroupForClient(uid_791, groups_792);
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_795, argsValues_796);
                    break;
                    
                }
                case 23:  {
                    let id_798: bigint;
                    let groups_799: UUID[];
                    id_798 = dataIn.readLong();
                    const len_801 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    groups_799 = new Array<UUID>(len_801);
                    for (let idx_800 = 0;
                    idx_800 < len_801;
                    idx_800++)  {
                        groups_799[idx_800] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_802: string[] = ["id", "groups"];
                    const argsValues_803: any[] = [id_798, groups_799];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_802, argsValues_803);
                    localApi.addItemsToAccessGroup(id_798, groups_799);
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_802, argsValues_803);
                    break;
                    
                }
                case 24:  {
                    let id_805: bigint;
                    let groups_806: UUID[];
                    id_805 = dataIn.readLong();
                    const len_808 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    groups_806 = new Array<UUID>(len_808);
                    for (let idx_807 = 0;
                    idx_807 < len_808;
                    idx_807++)  {
                        groups_806[idx_807] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_809: string[] = ["id", "groups"];
                    const argsValues_810: any[] = [id_805, groups_806];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_809, argsValues_810);
                    localApi.removeItemsFromAccessGroup(id_805, groups_806);
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_809, argsValues_810);
                    break;
                    
                }
                case 25:  {
                    let uid_812: UUID;
                    let groups_813: bigint[];
                    uid_812 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_815 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    groups_813 = new Array<bigint>(len_815);
                    for (let idx_814 = 0;
                    idx_814 < len_815;
                    idx_814++)  {
                        groups_813[idx_814] = dataIn.readLong();
                        
                    }
                    const argsNames_816: string[] = ["uid", "groups"];
                    const argsValues_817: any[] = [uid_812, groups_813];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_816, argsValues_817);
                    localApi.addAccessGroupsToClient(uid_812, groups_813);
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_816, argsValues_817);
                    break;
                    
                }
                case 26:  {
                    let uid_819: UUID;
                    let groups_820: bigint[];
                    uid_819 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_822 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    groups_820 = new Array<bigint>(len_822);
                    for (let idx_821 = 0;
                    idx_821 < len_822;
                    idx_821++)  {
                        groups_820[idx_821] = dataIn.readLong();
                        
                    }
                    const argsNames_823: string[] = ["uid", "groups"];
                    const argsValues_824: any[] = [uid_819, groups_820];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_823, argsValues_824);
                    localApi.removeAccessGroupsFromClient(uid_819, groups_820);
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_823, argsValues_824);
                    break;
                    
                }
                case 27:  {
                    let uids_826: UUID[];
                    const len_828 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    uids_826 = new Array<UUID>(len_828);
                    for (let idx_827 = 0;
                    idx_827 < len_828;
                    idx_827++)  {
                        uids_826[idx_827] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_829: string[] = ["uids"];
                    const argsValues_830: any[] = [uids_826];
                    ctx.invokeLocalMethodBefore("requestAllAccessedClients", argsNames_829, argsValues_830);
                    localApi.requestAllAccessedClients(uids_826);
                    ctx.invokeLocalMethodAfter("requestAllAccessedClients", null, argsNames_829, argsValues_830);
                    break;
                    
                }
                case 28:  {
                    let requests_832: AccessCheckPair[];
                    const len_834 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    requests_832 = new Array<AccessCheckPair>(len_834);
                    for (let idx_833 = 0;
                    idx_833 < len_834;
                    idx_833++)  {
                        requests_832[idx_833] = AccessCheckPair.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_835: string[] = ["requests"];
                    const argsValues_836: any[] = [requests_832];
                    ctx.invokeLocalMethodBefore("requestAccessCheck", argsNames_835, argsValues_836);
                    localApi.requestAccessCheck(requests_832);
                    ctx.invokeLocalMethodAfter("requestAccessCheck", null, argsNames_835, argsValues_836);
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
    makeRemote(sCtx_837: FastFutureContext): AuthorizedApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_837.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_837, backId: (id: number): void =>  {
                const dataOut_839 = new DataInOut();
                dataOut_839.writeByte(3);
                const argsNames_841: string[] = ["id"];
                const argsValues_842: any[] = [id];
                sCtx_837.invokeRemoteMethodAfter("backId", null, argsNames_841, argsValues_842);
                dataOut_839.writeByte(id);
                sCtx_837.sendToRemote(dataOut_839.toArray());
                
            }
            , ping: (nextConnectMsDuration: bigint): AFuture =>  {
                const dataOut_844 = new DataInOut();
                dataOut_844.writeByte(4);
                const argsNames_846: string[] = ["nextConnectMsDuration"];
                const argsValues_847: any[] = [nextConnectMsDuration];
                const result_845 = AFuture.make();
                sCtx_837.invokeRemoteMethodAfter("ping", result_845, argsNames_846, argsValues_847);
                const reqId_843 = sCtx_837.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_845 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_845.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_844.writeInt(reqId_843);
                dataOut_844.writeLong(nextConnectMsDuration);
                sCtx_837.sendToRemote(dataOut_844.toArray());
                return result_845;
                
            }
            , client: (uid: UUID, stream: ClientApiStream): void =>  {
                const dataOut_849 = new DataInOut();
                dataOut_849.writeByte(5);
                const argsNames_851: string[] = ["uid", "stream"];
                const argsValues_852: any[] = [uid, stream];
                sCtx_837.invokeRemoteMethodAfter("client", null, argsNames_851, argsValues_852);
                FastMeta.META_UUID.serialize(sCtx_837, uid, dataOut_849);
                ClientApiStream.META.serialize(sCtx_837, stream, dataOut_849);
                sCtx_837.sendToRemote(dataOut_849.toArray());
                
            }
            , sendMessage: (msg: Message): void =>  {
                const dataOut_854 = new DataInOut();
                dataOut_854.writeByte(6);
                const argsNames_856: string[] = ["msg"];
                const argsValues_857: any[] = [msg];
                sCtx_837.invokeRemoteMethodAfter("sendMessage", null, argsNames_856, argsValues_857);
                Message.META.serialize(sCtx_837, msg, dataOut_854);
                sCtx_837.sendToRemote(dataOut_854.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_859 = new DataInOut();
                dataOut_859.writeByte(7);
                const argsNames_861: string[] = ["msg"];
                const argsValues_862: any[] = [msg];
                sCtx_837.invokeRemoteMethodAfter("sendMessages", null, argsNames_861, argsValues_862);
                SerializerPackNumber.INSTANCE.put(dataOut_859, msg.length);
                for (const el_863 of msg)  {
                    Message.META.serialize(sCtx_837, el_863, dataOut_859);
                    
                }
                sCtx_837.sendToRemote(dataOut_859.toArray());
                
            }
            , createAccessGroup: (owner: UUID, uids: UUID[]): ARFuture<bigint> =>  {
                const dataOut_865 = new DataInOut();
                dataOut_865.writeByte(8);
                const argsNames_867: string[] = ["owner", "uids"];
                const argsValues_868: any[] = [owner, uids];
                const result_866 = ARFuture.of<bigint>();
                sCtx_837.invokeRemoteMethodAfter("createAccessGroup", result_866, argsNames_867, argsValues_868);
                const reqId_864 = sCtx_837.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_866 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_837, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_866.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_865.writeInt(reqId_864);
                FastMeta.META_UUID.serialize(sCtx_837, owner, dataOut_865);
                SerializerPackNumber.INSTANCE.put(dataOut_865, uids.length);
                for (const el_869 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_837, el_869, dataOut_865);
                    
                }
                sCtx_837.sendToRemote(dataOut_865.toArray());
                return result_866;
                
            }
            , addToAccessGroup: (groupId: bigint, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_871 = new DataInOut();
                dataOut_871.writeByte(9);
                const argsNames_873: string[] = ["groupId", "uid"];
                const argsValues_874: any[] = [groupId, uid];
                const result_872 = ARFuture.of<boolean>();
                sCtx_837.invokeRemoteMethodAfter("addToAccessGroup", result_872, argsNames_873, argsValues_874);
                const reqId_870 = sCtx_837.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_872 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_837, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_872.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_871.writeInt(reqId_870);
                dataOut_871.writeLong(groupId);
                FastMeta.META_UUID.serialize(sCtx_837, uid, dataOut_871);
                sCtx_837.sendToRemote(dataOut_871.toArray());
                return result_872;
                
            }
            , removeFromAccessGroup: (groupId: bigint, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_876 = new DataInOut();
                dataOut_876.writeByte(10);
                const argsNames_878: string[] = ["groupId", "uid"];
                const argsValues_879: any[] = [groupId, uid];
                const result_877 = ARFuture.of<boolean>();
                sCtx_837.invokeRemoteMethodAfter("removeFromAccessGroup", result_877, argsNames_878, argsValues_879);
                const reqId_875 = sCtx_837.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_877 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_837, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_877.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_876.writeInt(reqId_875);
                dataOut_876.writeLong(groupId);
                FastMeta.META_UUID.serialize(sCtx_837, uid, dataOut_876);
                sCtx_837.sendToRemote(dataOut_876.toArray());
                return result_877;
                
            }
            , checkAccessForSendMessage: (uid: UUID): AFuture =>  {
                const dataOut_881 = new DataInOut();
                dataOut_881.writeByte(11);
                const argsNames_883: string[] = ["uid"];
                const argsValues_884: any[] = [uid];
                const result_882 = AFuture.make();
                sCtx_837.invokeRemoteMethodAfter("checkAccessForSendMessage", result_882, argsNames_883, argsValues_884);
                const reqId_880 = sCtx_837.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_882 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_882.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_881.writeInt(reqId_880);
                FastMeta.META_UUID.serialize(sCtx_837, uid, dataOut_881);
                sCtx_837.sendToRemote(dataOut_881.toArray());
                return result_882;
                
            }
            , resolverServers: (sid: number[]): void =>  {
                const dataOut_886 = new DataInOut();
                dataOut_886.writeByte(12);
                const argsNames_888: string[] = ["sid"];
                const argsValues_889: any[] = [sid];
                sCtx_837.invokeRemoteMethodAfter("resolverServers", null, argsNames_888, argsValues_889);
                SerializerPackNumber.INSTANCE.put(dataOut_886, sid.length);
                for (const el_890 of sid)  {
                    dataOut_886.writeShort(el_890);
                    
                }
                sCtx_837.sendToRemote(dataOut_886.toArray());
                
            }
            , resolverClouds: (uids: UUID[]): void =>  {
                const dataOut_892 = new DataInOut();
                dataOut_892.writeByte(13);
                const argsNames_894: string[] = ["uids"];
                const argsValues_895: any[] = [uids];
                sCtx_837.invokeRemoteMethodAfter("resolverClouds", null, argsNames_894, argsValues_895);
                SerializerPackNumber.INSTANCE.put(dataOut_892, uids.length);
                for (const el_896 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_837, el_896, dataOut_892);
                    
                }
                sCtx_837.sendToRemote(dataOut_892.toArray());
                
            }
            , getAccessGroups: (uid: UUID): ARFuture<bigint[]> =>  {
                const dataOut_898 = new DataInOut();
                dataOut_898.writeByte(14);
                const argsNames_900: string[] = ["uid"];
                const argsValues_901: any[] = [uid];
                const result_899 = ARFuture.of<bigint[]>();
                sCtx_837.invokeRemoteMethodAfter("getAccessGroups", result_899, argsNames_900, argsValues_901);
                const reqId_897 = sCtx_837.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_899 as ARFuture<bigint[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_LONG).deserialize(sCtx_837, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_899.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_898.writeInt(reqId_897);
                FastMeta.META_UUID.serialize(sCtx_837, uid, dataOut_898);
                sCtx_837.sendToRemote(dataOut_898.toArray());
                return result_899;
                
            }
            , getAccessGroup: (groupId: bigint): ARFuture<AccessGroup> =>  {
                const dataOut_903 = new DataInOut();
                dataOut_903.writeByte(15);
                const argsNames_905: string[] = ["groupId"];
                const argsValues_906: any[] = [groupId];
                const result_904 = ARFuture.of<AccessGroup>();
                sCtx_837.invokeRemoteMethodAfter("getAccessGroup", result_904, argsNames_905, argsValues_906);
                const reqId_902 = sCtx_837.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_904 as ARFuture<AccessGroup>).tryDone(AccessGroup.META.deserialize(sCtx_837, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_904.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_903.writeInt(reqId_902);
                dataOut_903.writeLong(groupId);
                sCtx_837.sendToRemote(dataOut_903.toArray());
                return result_904;
                
            }
            , getAllAccessedClients: (uid: UUID): ARFuture<UUID[]> =>  {
                const dataOut_908 = new DataInOut();
                dataOut_908.writeByte(16);
                const argsNames_910: string[] = ["uid"];
                const argsValues_911: any[] = [uid];
                const result_909 = ARFuture.of<UUID[]>();
                sCtx_837.invokeRemoteMethodAfter("getAllAccessedClients", result_909, argsNames_910, argsValues_911);
                const reqId_907 = sCtx_837.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_909 as ARFuture<UUID[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_UUID).deserialize(sCtx_837, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_909.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_908.writeInt(reqId_907);
                FastMeta.META_UUID.serialize(sCtx_837, uid, dataOut_908);
                sCtx_837.sendToRemote(dataOut_908.toArray());
                return result_909;
                
            }
            , checkAccessForSendMessage2: (uid1: UUID, uid2: UUID): ARFuture<boolean> =>  {
                const dataOut_913 = new DataInOut();
                dataOut_913.writeByte(17);
                const argsNames_915: string[] = ["uid1", "uid2"];
                const argsValues_916: any[] = [uid1, uid2];
                const result_914 = ARFuture.of<boolean>();
                sCtx_837.invokeRemoteMethodAfter("checkAccessForSendMessage2", result_914, argsNames_915, argsValues_916);
                const reqId_912 = sCtx_837.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_914 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_837, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_914.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_913.writeInt(reqId_912);
                FastMeta.META_UUID.serialize(sCtx_837, uid1, dataOut_913);
                FastMeta.META_UUID.serialize(sCtx_837, uid2, dataOut_913);
                sCtx_837.sendToRemote(dataOut_913.toArray());
                return result_914;
                
            }
            , sendTelemetry: (telemetry: Telemetry): void =>  {
                const dataOut_918 = new DataInOut();
                dataOut_918.writeByte(18);
                const argsNames_920: string[] = ["telemetry"];
                const argsValues_921: any[] = [telemetry];
                sCtx_837.invokeRemoteMethodAfter("sendTelemetry", null, argsNames_920, argsValues_921);
                Telemetry.META.serialize(sCtx_837, telemetry, dataOut_918);
                sCtx_837.sendToRemote(dataOut_918.toArray());
                
            }
            , requestAccessGroupsForClients: (uids: UUID[]): void =>  {
                const dataOut_923 = new DataInOut();
                dataOut_923.writeByte(19);
                const argsNames_925: string[] = ["uids"];
                const argsValues_926: any[] = [uids];
                sCtx_837.invokeRemoteMethodAfter("requestAccessGroupsForClients", null, argsNames_925, argsValues_926);
                SerializerPackNumber.INSTANCE.put(dataOut_923, uids.length);
                for (const el_927 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_837, el_927, dataOut_923);
                    
                }
                sCtx_837.sendToRemote(dataOut_923.toArray());
                
            }
            , requestAccessGroupsItems: (ids: bigint[]): void =>  {
                const dataOut_929 = new DataInOut();
                dataOut_929.writeByte(20);
                const argsNames_931: string[] = ["ids"];
                const argsValues_932: any[] = [ids];
                sCtx_837.invokeRemoteMethodAfter("requestAccessGroupsItems", null, argsNames_931, argsValues_932);
                SerializerPackNumber.INSTANCE.put(dataOut_929, ids.length);
                for (const el_933 of ids)  {
                    dataOut_929.writeLong(el_933);
                    
                }
                sCtx_837.sendToRemote(dataOut_929.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_935 = new DataInOut();
                dataOut_935.writeByte(22);
                const argsNames_937: string[] = ["uid", "groups"];
                const argsValues_938: any[] = [uid, groups];
                sCtx_837.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_937, argsValues_938);
                FastMeta.META_UUID.serialize(sCtx_837, uid, dataOut_935);
                SerializerPackNumber.INSTANCE.put(dataOut_935, groups.length);
                for (const el_939 of groups)  {
                    dataOut_935.writeLong(el_939);
                    
                }
                sCtx_837.sendToRemote(dataOut_935.toArray());
                
            }
            , addItemsToAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_941 = new DataInOut();
                dataOut_941.writeByte(23);
                const argsNames_943: string[] = ["id", "groups"];
                const argsValues_944: any[] = [id, groups];
                sCtx_837.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_943, argsValues_944);
                dataOut_941.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_941, groups.length);
                for (const el_945 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_837, el_945, dataOut_941);
                    
                }
                sCtx_837.sendToRemote(dataOut_941.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_947 = new DataInOut();
                dataOut_947.writeByte(24);
                const argsNames_949: string[] = ["id", "groups"];
                const argsValues_950: any[] = [id, groups];
                sCtx_837.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_949, argsValues_950);
                dataOut_947.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_947, groups.length);
                for (const el_951 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_837, el_951, dataOut_947);
                    
                }
                sCtx_837.sendToRemote(dataOut_947.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_953 = new DataInOut();
                dataOut_953.writeByte(25);
                const argsNames_955: string[] = ["uid", "groups"];
                const argsValues_956: any[] = [uid, groups];
                sCtx_837.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_955, argsValues_956);
                FastMeta.META_UUID.serialize(sCtx_837, uid, dataOut_953);
                SerializerPackNumber.INSTANCE.put(dataOut_953, groups.length);
                for (const el_957 of groups)  {
                    dataOut_953.writeLong(el_957);
                    
                }
                sCtx_837.sendToRemote(dataOut_953.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_959 = new DataInOut();
                dataOut_959.writeByte(26);
                const argsNames_961: string[] = ["uid", "groups"];
                const argsValues_962: any[] = [uid, groups];
                sCtx_837.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_961, argsValues_962);
                FastMeta.META_UUID.serialize(sCtx_837, uid, dataOut_959);
                SerializerPackNumber.INSTANCE.put(dataOut_959, groups.length);
                for (const el_963 of groups)  {
                    dataOut_959.writeLong(el_963);
                    
                }
                sCtx_837.sendToRemote(dataOut_959.toArray());
                
            }
            , requestAllAccessedClients: (uids: UUID[]): void =>  {
                const dataOut_965 = new DataInOut();
                dataOut_965.writeByte(27);
                const argsNames_967: string[] = ["uids"];
                const argsValues_968: any[] = [uids];
                sCtx_837.invokeRemoteMethodAfter("requestAllAccessedClients", null, argsNames_967, argsValues_968);
                SerializerPackNumber.INSTANCE.put(dataOut_965, uids.length);
                for (const el_969 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_837, el_969, dataOut_965);
                    
                }
                sCtx_837.sendToRemote(dataOut_965.toArray());
                
            }
            , requestAccessCheck: (requests: AccessCheckPair[]): void =>  {
                const dataOut_971 = new DataInOut();
                dataOut_971.writeByte(28);
                const argsNames_973: string[] = ["requests"];
                const argsValues_974: any[] = [requests];
                sCtx_837.invokeRemoteMethodAfter("requestAccessCheck", null, argsNames_973, argsValues_974);
                SerializerPackNumber.INSTANCE.put(dataOut_971, requests.length);
                for (const el_975 of requests)  {
                    AccessCheckPair.META.serialize(sCtx_837, el_975, dataOut_971);
                    
                }
                sCtx_837.sendToRemote(dataOut_971.toArray());
                
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
                    const reqId_976 = dataIn.readInt();
                    const argsNames_977: string[] = [];
                    const argsValues_978: any[] = [];
                    ctx.invokeLocalMethodBefore("getTimeUTC", argsNames_977, argsValues_978);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getTimeUTC();
                    ctx.invokeLocalMethodAfter("getTimeUTC", resultFuture, argsNames_977, argsValues_978);
                    resultFuture.to((v_980: bigint) =>  {
                        const data_979 = new DataInOut();
                        data_979.writeLong(v_980);
                        ctx.sendResultToRemote(reqId_976, data_979.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let uid_982: UUID;
                    let data_983: LoginStream;
                    uid_982 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_983 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsNames_984: string[] = ["uid", "data"];
                    const argsValues_985: any[] = [uid_982, data_983];
                    ctx.invokeLocalMethodBefore("loginByUID", argsNames_984, argsValues_985);
                    localApi.loginByUID(uid_982, data_983);
                    ctx.invokeLocalMethodAfter("loginByUID", null, argsNames_984, argsValues_985);
                    break;
                    
                }
                case 5:  {
                    let alias_987: UUID;
                    let data_988: LoginStream;
                    alias_987 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_988 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsNames_989: string[] = ["alias", "data"];
                    const argsValues_990: any[] = [alias_987, data_988];
                    ctx.invokeLocalMethodBefore("loginByAlias", argsNames_989, argsValues_990);
                    localApi.loginByAlias(alias_987, data_988);
                    ctx.invokeLocalMethodAfter("loginByAlias", null, argsNames_989, argsValues_990);
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
    makeRemote(sCtx_991: FastFutureContext): LoginApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_991.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_991, getTimeUTC: (): ARFuture<bigint> =>  {
                const dataOut_993 = new DataInOut();
                dataOut_993.writeByte(3);
                const argsNames_995: string[] = [];
                const argsValues_996: any[] = [];
                const result_994 = ARFuture.of<bigint>();
                sCtx_991.invokeRemoteMethodAfter("getTimeUTC", result_994, argsNames_995, argsValues_996);
                const reqId_992 = sCtx_991.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_994 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_991, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_994.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_993.writeInt(reqId_992);
                sCtx_991.sendToRemote(dataOut_993.toArray());
                return result_994;
                
            }
            , loginByUID: (uid: UUID, data: LoginStream): void =>  {
                const dataOut_998 = new DataInOut();
                dataOut_998.writeByte(4);
                const argsNames_1000: string[] = ["uid", "data"];
                const argsValues_1001: any[] = [uid, data];
                sCtx_991.invokeRemoteMethodAfter("loginByUID", null, argsNames_1000, argsValues_1001);
                FastMeta.META_UUID.serialize(sCtx_991, uid, dataOut_998);
                LoginStream.META.serialize(sCtx_991, data, dataOut_998);
                sCtx_991.sendToRemote(dataOut_998.toArray());
                
            }
            , loginByAlias: (alias: UUID, data: LoginStream): void =>  {
                const dataOut_1003 = new DataInOut();
                dataOut_1003.writeByte(5);
                const argsNames_1005: string[] = ["alias", "data"];
                const argsValues_1006: any[] = [alias, data];
                sCtx_991.invokeRemoteMethodAfter("loginByAlias", null, argsNames_1005, argsValues_1006);
                FastMeta.META_UUID.serialize(sCtx_991, alias, dataOut_1003);
                LoginStream.META.serialize(sCtx_991, data, dataOut_1003);
                sCtx_991.sendToRemote(dataOut_1003.toArray());
                
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
    makeRemote(sCtx_1007: FastFutureContext): ServerApiByUidClientRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_1007.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_1007, 
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
                    const reqId_1008 = dataIn.readInt();
                    const argsNames_1009: string[] = [];
                    const argsValues_1010: any[] = [];
                    ctx.invokeLocalMethodBefore("getBalance", argsNames_1009, argsValues_1010);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBalance();
                    ctx.invokeLocalMethodAfter("getBalance", resultFuture, argsNames_1009, argsValues_1010);
                    resultFuture.to((v_1012: bigint) =>  {
                        const data_1011 = new DataInOut();
                        data_1011.writeLong(v_1012);
                        ctx.sendResultToRemote(reqId_1008, data_1011.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    const reqId_1013 = dataIn.readInt();
                    let uid_1014: UUID;
                    uid_1014 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1015: string[] = ["uid"];
                    const argsValues_1016: any[] = [uid_1014];
                    ctx.invokeLocalMethodBefore("setParent", argsNames_1015, argsValues_1016);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.setParent(uid_1014);
                    ctx.invokeLocalMethodAfter("setParent", resultFuture, argsNames_1015, argsValues_1016);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1013);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_1017 = dataIn.readInt();
                    const argsNames_1018: string[] = [];
                    const argsValues_1019: any[] = [];
                    ctx.invokeLocalMethodBefore("block", argsNames_1018, argsValues_1019);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.block();
                    ctx.invokeLocalMethodAfter("block", resultFuture, argsNames_1018, argsValues_1019);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1017);
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    const reqId_1020 = dataIn.readInt();
                    const argsNames_1021: string[] = [];
                    const argsValues_1022: any[] = [];
                    ctx.invokeLocalMethodBefore("getPosition", argsNames_1021, argsValues_1022);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getPosition();
                    ctx.invokeLocalMethodAfter("getPosition", resultFuture, argsNames_1021, argsValues_1022);
                    resultFuture.to((v_1024: Cloud) =>  {
                        const data_1023 = new DataInOut();
                        Cloud.META.serialize(ctx, v_1024, data_1023);
                        ctx.sendResultToRemote(reqId_1020, data_1023.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 7:  {
                    const reqId_1025 = dataIn.readInt();
                    const argsNames_1026: string[] = [];
                    const argsValues_1027: any[] = [];
                    ctx.invokeLocalMethodBefore("getParent", argsNames_1026, argsValues_1027);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getParent();
                    ctx.invokeLocalMethodAfter("getParent", resultFuture, argsNames_1026, argsValues_1027);
                    resultFuture.to((v_1029: UUID) =>  {
                        const data_1028 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_1029, data_1028);
                        ctx.sendResultToRemote(reqId_1025, data_1028.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 8:  {
                    const reqId_1030 = dataIn.readInt();
                    const argsNames_1031: string[] = [];
                    const argsValues_1032: any[] = [];
                    ctx.invokeLocalMethodBefore("getBeneficiary", argsNames_1031, argsValues_1032);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBeneficiary();
                    ctx.invokeLocalMethodAfter("getBeneficiary", resultFuture, argsNames_1031, argsValues_1032);
                    resultFuture.to((v_1034: UUID) =>  {
                        const data_1033 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_1034, data_1033);
                        ctx.sendResultToRemote(reqId_1030, data_1033.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_1035 = dataIn.readInt();
                    let uid_1036: UUID;
                    uid_1036 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1037: string[] = ["uid"];
                    const argsValues_1038: any[] = [uid_1036];
                    ctx.invokeLocalMethodBefore("setBeneficiary", argsNames_1037, argsValues_1038);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.setBeneficiary(uid_1036);
                    ctx.invokeLocalMethodAfter("setBeneficiary", resultFuture, argsNames_1037, argsValues_1038);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1035);
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_1039 = dataIn.readInt();
                    const argsNames_1040: string[] = [];
                    const argsValues_1041: any[] = [];
                    ctx.invokeLocalMethodBefore("getBlockTime", argsNames_1040, argsValues_1041);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBlockTime();
                    ctx.invokeLocalMethodAfter("getBlockTime", resultFuture, argsNames_1040, argsValues_1041);
                    resultFuture.to((v_1043: Date) =>  {
                        const data_1042 = new DataInOut();
                        data_1042.writeLong(v_1043.getTime());
                        ctx.sendResultToRemote(reqId_1039, data_1042.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_1044 = dataIn.readInt();
                    const argsNames_1045: string[] = [];
                    const argsValues_1046: any[] = [];
                    ctx.invokeLocalMethodBefore("unblock", argsNames_1045, argsValues_1046);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.unblock();
                    ctx.invokeLocalMethodAfter("unblock", resultFuture, argsNames_1045, argsValues_1046);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1044);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    const reqId_1047 = dataIn.readInt();
                    const argsNames_1048: string[] = [];
                    const argsValues_1049: any[] = [];
                    ctx.invokeLocalMethodBefore("createTime", argsNames_1048, argsValues_1049);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.createTime();
                    ctx.invokeLocalMethodAfter("createTime", resultFuture, argsNames_1048, argsValues_1049);
                    resultFuture.to((v_1051: Date) =>  {
                        const data_1050 = new DataInOut();
                        data_1050.writeLong(v_1051.getTime());
                        ctx.sendResultToRemote(reqId_1047, data_1050.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 13:  {
                    const reqId_1052 = dataIn.readInt();
                    const argsNames_1053: string[] = [];
                    const argsValues_1054: any[] = [];
                    ctx.invokeLocalMethodBefore("onlineTime", argsNames_1053, argsValues_1054);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.onlineTime();
                    ctx.invokeLocalMethodAfter("onlineTime", resultFuture, argsNames_1053, argsValues_1054);
                    resultFuture.to((v_1056: Date) =>  {
                        const data_1055 = new DataInOut();
                        data_1055.writeLong(v_1056.getTime());
                        ctx.sendResultToRemote(reqId_1052, data_1055.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 14:  {
                    const reqId_1057 = dataIn.readInt();
                    let groupId_1058: bigint;
                    groupId_1058 = dataIn.readLong();
                    const argsNames_1059: string[] = ["groupId"];
                    const argsValues_1060: any[] = [groupId_1058];
                    ctx.invokeLocalMethodBefore("addAccessGroup", argsNames_1059, argsValues_1060);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.addAccessGroup(groupId_1058);
                    ctx.invokeLocalMethodAfter("addAccessGroup", resultFuture, argsNames_1059, argsValues_1060);
                    resultFuture.to((v_1062: boolean) =>  {
                        const data_1061 = new DataInOut();
                        data_1061.writeBoolean(v_1062);
                        ctx.sendResultToRemote(reqId_1057, data_1061.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_1063 = dataIn.readInt();
                    let groupId_1064: bigint;
                    groupId_1064 = dataIn.readLong();
                    const argsNames_1065: string[] = ["groupId"];
                    const argsValues_1066: any[] = [groupId_1064];
                    ctx.invokeLocalMethodBefore("removeAccessGroup", argsNames_1065, argsValues_1066);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.removeAccessGroup(groupId_1064);
                    ctx.invokeLocalMethodAfter("removeAccessGroup", resultFuture, argsNames_1065, argsValues_1066);
                    resultFuture.to((v_1068: boolean) =>  {
                        const data_1067 = new DataInOut();
                        data_1067.writeBoolean(v_1068);
                        ctx.sendResultToRemote(reqId_1063, data_1067.toArray());
                        
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
    makeRemote(sCtx_1069: FastFutureContext): ServerApiByUidRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_1069.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_1069, getBalance: (): ARFuture<bigint> =>  {
                const dataOut_1071 = new DataInOut();
                dataOut_1071.writeByte(3);
                const argsNames_1073: string[] = [];
                const argsValues_1074: any[] = [];
                const result_1072 = ARFuture.of<bigint>();
                sCtx_1069.invokeRemoteMethodAfter("getBalance", result_1072, argsNames_1073, argsValues_1074);
                const reqId_1070 = sCtx_1069.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1072 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_1069, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1072.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1071.writeInt(reqId_1070);
                sCtx_1069.sendToRemote(dataOut_1071.toArray());
                return result_1072;
                
            }
            , setParent: (uid: UUID): AFuture =>  {
                const dataOut_1076 = new DataInOut();
                dataOut_1076.writeByte(4);
                const argsNames_1078: string[] = ["uid"];
                const argsValues_1079: any[] = [uid];
                const result_1077 = AFuture.make();
                sCtx_1069.invokeRemoteMethodAfter("setParent", result_1077, argsNames_1078, argsValues_1079);
                const reqId_1075 = sCtx_1069.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1077 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1077.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1076.writeInt(reqId_1075);
                FastMeta.META_UUID.serialize(sCtx_1069, uid, dataOut_1076);
                sCtx_1069.sendToRemote(dataOut_1076.toArray());
                return result_1077;
                
            }
            , block: (): AFuture =>  {
                const dataOut_1081 = new DataInOut();
                dataOut_1081.writeByte(5);
                const argsNames_1083: string[] = [];
                const argsValues_1084: any[] = [];
                const result_1082 = AFuture.make();
                sCtx_1069.invokeRemoteMethodAfter("block", result_1082, argsNames_1083, argsValues_1084);
                const reqId_1080 = sCtx_1069.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1082 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1082.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1081.writeInt(reqId_1080);
                sCtx_1069.sendToRemote(dataOut_1081.toArray());
                return result_1082;
                
            }
            , getPosition: (): ARFuture<Cloud> =>  {
                const dataOut_1086 = new DataInOut();
                dataOut_1086.writeByte(6);
                const argsNames_1088: string[] = [];
                const argsValues_1089: any[] = [];
                const result_1087 = ARFuture.of<Cloud>();
                sCtx_1069.invokeRemoteMethodAfter("getPosition", result_1087, argsNames_1088, argsValues_1089);
                const reqId_1085 = sCtx_1069.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1087 as ARFuture<Cloud>).tryDone(Cloud.META.deserialize(sCtx_1069, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1087.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1086.writeInt(reqId_1085);
                sCtx_1069.sendToRemote(dataOut_1086.toArray());
                return result_1087;
                
            }
            , getParent: (): ARFuture<UUID> =>  {
                const dataOut_1091 = new DataInOut();
                dataOut_1091.writeByte(7);
                const argsNames_1093: string[] = [];
                const argsValues_1094: any[] = [];
                const result_1092 = ARFuture.of<UUID>();
                sCtx_1069.invokeRemoteMethodAfter("getParent", result_1092, argsNames_1093, argsValues_1094);
                const reqId_1090 = sCtx_1069.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1092 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_1069, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1092.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1091.writeInt(reqId_1090);
                sCtx_1069.sendToRemote(dataOut_1091.toArray());
                return result_1092;
                
            }
            , getBeneficiary: (): ARFuture<UUID> =>  {
                const dataOut_1096 = new DataInOut();
                dataOut_1096.writeByte(8);
                const argsNames_1098: string[] = [];
                const argsValues_1099: any[] = [];
                const result_1097 = ARFuture.of<UUID>();
                sCtx_1069.invokeRemoteMethodAfter("getBeneficiary", result_1097, argsNames_1098, argsValues_1099);
                const reqId_1095 = sCtx_1069.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1097 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_1069, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1097.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1096.writeInt(reqId_1095);
                sCtx_1069.sendToRemote(dataOut_1096.toArray());
                return result_1097;
                
            }
            , setBeneficiary: (uid: UUID): AFuture =>  {
                const dataOut_1101 = new DataInOut();
                dataOut_1101.writeByte(9);
                const argsNames_1103: string[] = ["uid"];
                const argsValues_1104: any[] = [uid];
                const result_1102 = AFuture.make();
                sCtx_1069.invokeRemoteMethodAfter("setBeneficiary", result_1102, argsNames_1103, argsValues_1104);
                const reqId_1100 = sCtx_1069.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1102 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1102.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1101.writeInt(reqId_1100);
                FastMeta.META_UUID.serialize(sCtx_1069, uid, dataOut_1101);
                sCtx_1069.sendToRemote(dataOut_1101.toArray());
                return result_1102;
                
            }
            , getBlockTime: (): ARFuture<Date> =>  {
                const dataOut_1106 = new DataInOut();
                dataOut_1106.writeByte(10);
                const argsNames_1108: string[] = [];
                const argsValues_1109: any[] = [];
                const result_1107 = ARFuture.of<Date>();
                sCtx_1069.invokeRemoteMethodAfter("getBlockTime", result_1107, argsNames_1108, argsValues_1109);
                const reqId_1105 = sCtx_1069.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1107 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1069, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1107.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1106.writeInt(reqId_1105);
                sCtx_1069.sendToRemote(dataOut_1106.toArray());
                return result_1107;
                
            }
            , unblock: (): AFuture =>  {
                const dataOut_1111 = new DataInOut();
                dataOut_1111.writeByte(11);
                const argsNames_1113: string[] = [];
                const argsValues_1114: any[] = [];
                const result_1112 = AFuture.make();
                sCtx_1069.invokeRemoteMethodAfter("unblock", result_1112, argsNames_1113, argsValues_1114);
                const reqId_1110 = sCtx_1069.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1112 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1112.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1111.writeInt(reqId_1110);
                sCtx_1069.sendToRemote(dataOut_1111.toArray());
                return result_1112;
                
            }
            , createTime: (): ARFuture<Date> =>  {
                const dataOut_1116 = new DataInOut();
                dataOut_1116.writeByte(12);
                const argsNames_1118: string[] = [];
                const argsValues_1119: any[] = [];
                const result_1117 = ARFuture.of<Date>();
                sCtx_1069.invokeRemoteMethodAfter("createTime", result_1117, argsNames_1118, argsValues_1119);
                const reqId_1115 = sCtx_1069.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1117 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1069, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1117.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1116.writeInt(reqId_1115);
                sCtx_1069.sendToRemote(dataOut_1116.toArray());
                return result_1117;
                
            }
            , onlineTime: (): ARFuture<Date> =>  {
                const dataOut_1121 = new DataInOut();
                dataOut_1121.writeByte(13);
                const argsNames_1123: string[] = [];
                const argsValues_1124: any[] = [];
                const result_1122 = ARFuture.of<Date>();
                sCtx_1069.invokeRemoteMethodAfter("onlineTime", result_1122, argsNames_1123, argsValues_1124);
                const reqId_1120 = sCtx_1069.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1122 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1069, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1122.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1121.writeInt(reqId_1120);
                sCtx_1069.sendToRemote(dataOut_1121.toArray());
                return result_1122;
                
            }
            , addAccessGroup: (groupId: bigint): ARFuture<boolean> =>  {
                const dataOut_1126 = new DataInOut();
                dataOut_1126.writeByte(14);
                const argsNames_1128: string[] = ["groupId"];
                const argsValues_1129: any[] = [groupId];
                const result_1127 = ARFuture.of<boolean>();
                sCtx_1069.invokeRemoteMethodAfter("addAccessGroup", result_1127, argsNames_1128, argsValues_1129);
                const reqId_1125 = sCtx_1069.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1127 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1069, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1127.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1126.writeInt(reqId_1125);
                dataOut_1126.writeLong(groupId);
                sCtx_1069.sendToRemote(dataOut_1126.toArray());
                return result_1127;
                
            }
            , removeAccessGroup: (groupId: bigint): ARFuture<boolean> =>  {
                const dataOut_1131 = new DataInOut();
                dataOut_1131.writeByte(15);
                const argsNames_1133: string[] = ["groupId"];
                const argsValues_1134: any[] = [groupId];
                const result_1132 = ARFuture.of<boolean>();
                sCtx_1069.invokeRemoteMethodAfter("removeAccessGroup", result_1132, argsNames_1133, argsValues_1134);
                const reqId_1130 = sCtx_1069.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1132 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1069, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1132.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1131.writeInt(reqId_1130);
                dataOut_1131.writeLong(groupId);
                sCtx_1069.sendToRemote(dataOut_1131.toArray());
                return result_1132;
                
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
    makeRemote(sCtx_1135: FastFutureContext): ClientApiRegSafeRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_1135.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_1135, 
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
    makeRemote(sCtx_1136: FastFutureContext): GlobalRegClientApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_1136.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_1136, 
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
                    let stream_1138: ClientApiRegSafeStream;
                    stream_1138 = ClientApiRegSafeStream.META.deserialize(ctx, dataIn);
                    const argsNames_1139: string[] = ["stream"];
                    const argsValues_1140: any[] = [stream_1138];
                    ctx.invokeLocalMethodBefore("enter", argsNames_1139, argsValues_1140);
                    localApi.enter(stream_1138);
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_1139, argsValues_1140);
                    break;
                    
                }
                case 4:  {
                    let stream_1142: GlobalRegClientApiStream;
                    stream_1142 = GlobalRegClientApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_1143: string[] = ["stream"];
                    const argsValues_1144: any[] = [stream_1142];
                    ctx.invokeLocalMethodBefore("enterGlobal", argsNames_1143, argsValues_1144);
                    localApi.enterGlobal(stream_1142);
                    ctx.invokeLocalMethodAfter("enterGlobal", null, argsNames_1143, argsValues_1144);
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
    makeRemote(sCtx_1145: FastFutureContext): ClientApiRegUnsafeRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_1145.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_1145, enter: (stream: ClientApiRegSafeStream): void =>  {
                const dataOut_1147 = new DataInOut();
                dataOut_1147.writeByte(3);
                const argsNames_1149: string[] = ["stream"];
                const argsValues_1150: any[] = [stream];
                sCtx_1145.invokeRemoteMethodAfter("enter", null, argsNames_1149, argsValues_1150);
                ClientApiRegSafeStream.META.serialize(sCtx_1145, stream, dataOut_1147);
                sCtx_1145.sendToRemote(dataOut_1147.toArray());
                
            }
            , enterGlobal: (stream: GlobalRegClientApiStream): void =>  {
                const dataOut_1152 = new DataInOut();
                dataOut_1152.writeByte(4);
                const argsNames_1154: string[] = ["stream"];
                const argsValues_1155: any[] = [stream];
                sCtx_1145.invokeRemoteMethodAfter("enterGlobal", null, argsNames_1154, argsValues_1155);
                GlobalRegClientApiStream.META.serialize(sCtx_1145, stream, dataOut_1152);
                sCtx_1145.sendToRemote(dataOut_1152.toArray());
                
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
                    let _key_1157: Key;
                    _key_1157 = Key.META.deserialize(ctx, dataIn);
                    const argsNames_1158: string[] = ["key"];
                    const argsValues_1159: any[] = [_key_1157];
                    ctx.invokeLocalMethodBefore("setMasterKey", argsNames_1158, argsValues_1159);
                    localApi.setMasterKey(_key_1157);
                    ctx.invokeLocalMethodAfter("setMasterKey", null, argsNames_1158, argsValues_1159);
                    break;
                    
                }
                case 4:  {
                    const reqId_1160 = dataIn.readInt();
                    const argsNames_1161: string[] = [];
                    const argsValues_1162: any[] = [];
                    ctx.invokeLocalMethodBefore("finish", argsNames_1161, argsValues_1162);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.finish();
                    ctx.invokeLocalMethodAfter("finish", resultFuture, argsNames_1161, argsValues_1162);
                    resultFuture.to((v_1164: FinishResultGlobalRegServerApi) =>  {
                        const data_1163 = new DataInOut();
                        FinishResultGlobalRegServerApi.META.serialize(ctx, v_1164, data_1163);
                        ctx.sendResultToRemote(reqId_1160, data_1163.toArray());
                        
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
    makeRemote(sCtx_1165: FastFutureContext): GlobalRegServerApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_1165.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_1165, setMasterKey: (key: Key): void =>  {
                const dataOut_1167 = new DataInOut();
                dataOut_1167.writeByte(3);
                const argsNames_1169: string[] = ["key"];
                const argsValues_1170: any[] = [key];
                sCtx_1165.invokeRemoteMethodAfter("setMasterKey", null, argsNames_1169, argsValues_1170);
                Key.META.serialize(sCtx_1165, key, dataOut_1167);
                sCtx_1165.sendToRemote(dataOut_1167.toArray());
                
            }
            , finish: (): ARFuture<FinishResultGlobalRegServerApi> =>  {
                const dataOut_1172 = new DataInOut();
                dataOut_1172.writeByte(4);
                const argsNames_1174: string[] = [];
                const argsValues_1175: any[] = [];
                const result_1173 = ARFuture.of<FinishResultGlobalRegServerApi>();
                sCtx_1165.invokeRemoteMethodAfter("finish", result_1173, argsNames_1174, argsValues_1175);
                const reqId_1171 = sCtx_1165.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1173 as ARFuture<FinishResultGlobalRegServerApi>).tryDone(FinishResultGlobalRegServerApi.META.deserialize(sCtx_1165, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1173.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1172.writeInt(reqId_1171);
                sCtx_1165.sendToRemote(dataOut_1172.toArray());
                return result_1173;
                
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
                    let salt_1177: string;
                    let suffix_1178: string;
                    let passwords_1179: number[];
                    let parent_1180: UUID;
                    let globalApi_1181: GlobalApiRegistrationServerRegistrationApi;
                    let stringBytes_1182: Uint8Array;
                    const len_1184 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    const bytes_1185 = dataIn.readBytes(len_1184);
                    stringBytes_1182 = bytes_1185;
                    salt_1177 = new TextDecoder('utf-8').decode(stringBytes_1182);
                    let stringBytes_1186: Uint8Array;
                    const len_1188 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    const bytes_1189 = dataIn.readBytes(len_1188);
                    stringBytes_1186 = bytes_1189;
                    suffix_1178 = new TextDecoder('utf-8').decode(stringBytes_1186);
                    const len_1191 = Number(DeserializerPackNumber.INSTANCE.put(dataIn).valueOf());
                    passwords_1179 = new Array<number>(len_1191);
                    for (let idx_1190 = 0;
                    idx_1190 < len_1191;
                    idx_1190++)  {
                        passwords_1179[idx_1190] = dataIn.readInt();
                        
                    }
                    parent_1180 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    globalApi_1181 = GlobalApiRegistrationServerRegistrationApi.META.deserialize(ctx, dataIn);
                    const argsNames_1192: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                    const argsValues_1193: any[] = [salt_1177, suffix_1178, passwords_1179, parent_1180, globalApi_1181];
                    ctx.invokeLocalMethodBefore("registration", argsNames_1192, argsValues_1193);
                    localApi.registration(salt_1177, suffix_1178, passwords_1179, parent_1180, globalApi_1181);
                    ctx.invokeLocalMethodAfter("registration", null, argsNames_1192, argsValues_1193);
                    break;
                    
                }
                case 4:  {
                    const reqId_1194 = dataIn.readInt();
                    let parent_1195: UUID;
                    let powMethods_1196: PowMethod;
                    parent_1195 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    powMethods_1196 = PowMethod.META.deserialize(ctx, dataIn);
                    const argsNames_1197: string[] = ["parent", "powMethods"];
                    const argsValues_1198: any[] = [parent_1195, powMethods_1196];
                    ctx.invokeLocalMethodBefore("requestWorkProofData", argsNames_1197, argsValues_1198);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.requestWorkProofData(parent_1195, powMethods_1196);
                    ctx.invokeLocalMethodAfter("requestWorkProofData", resultFuture, argsNames_1197, argsValues_1198);
                    resultFuture.to((v_1200: WorkProofDTO) =>  {
                        const data_1199 = new DataInOut();
                        WorkProofDTO.META.serialize(ctx, v_1200, data_1199);
                        ctx.sendResultToRemote(reqId_1194, data_1199.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_1201 = dataIn.readInt();
                    let serverIds_1202: Cloud;
                    serverIds_1202 = Cloud.META.deserialize(ctx, dataIn);
                    const argsNames_1203: string[] = ["serverIds"];
                    const argsValues_1204: any[] = [serverIds_1202];
                    ctx.invokeLocalMethodBefore("resolveServers", argsNames_1203, argsValues_1204);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.resolveServers(serverIds_1202);
                    ctx.invokeLocalMethodAfter("resolveServers", resultFuture, argsNames_1203, argsValues_1204);
                    resultFuture.to((v_1206: ServerDescriptor[]) =>  {
                        const data_1205 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1205, v_1206.length);
                        for (const el_1207 of v_1206)  {
                            ServerDescriptor.META.serialize(ctx, el_1207, data_1205);
                            
                        }
                        ctx.sendResultToRemote(reqId_1201, data_1205.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    let _key_1209: Key;
                    _key_1209 = Key.META.deserialize(ctx, dataIn);
                    const argsNames_1210: string[] = ["key"];
                    const argsValues_1211: any[] = [_key_1209];
                    ctx.invokeLocalMethodBefore("setReturnKey", argsNames_1210, argsValues_1211);
                    localApi.setReturnKey(_key_1209);
                    ctx.invokeLocalMethodAfter("setReturnKey", null, argsNames_1210, argsValues_1211);
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
    makeRemote(sCtx_1212: FastFutureContext): ServerRegistrationApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_1212.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_1212, registration: (salt: string, suffix: string, passwords: number[], parent: UUID, globalApi: GlobalApiRegistrationServerRegistrationApi): void =>  {
                const dataOut_1214 = new DataInOut();
                dataOut_1214.writeByte(3);
                const argsNames_1216: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                const argsValues_1217: any[] = [salt, suffix, passwords, parent, globalApi];
                sCtx_1212.invokeRemoteMethodAfter("registration", null, argsNames_1216, argsValues_1217);
                const stringBytes_1218 = new TextEncoder().encode(salt);
                SerializerPackNumber.INSTANCE.put(dataOut_1214, stringBytes_1218.length);
                dataOut_1214.write(stringBytes_1218);
                const stringBytes_1220 = new TextEncoder().encode(suffix);
                SerializerPackNumber.INSTANCE.put(dataOut_1214, stringBytes_1220.length);
                dataOut_1214.write(stringBytes_1220);
                SerializerPackNumber.INSTANCE.put(dataOut_1214, passwords.length);
                for (const el_1222 of passwords)  {
                    dataOut_1214.writeInt(el_1222);
                    
                }
                FastMeta.META_UUID.serialize(sCtx_1212, parent, dataOut_1214);
                GlobalApiRegistrationServerRegistrationApi.META.serialize(sCtx_1212, globalApi, dataOut_1214);
                sCtx_1212.sendToRemote(dataOut_1214.toArray());
                
            }
            , requestWorkProofData: (parent: UUID, powMethods: PowMethod): ARFuture<WorkProofDTO> =>  {
                const dataOut_1224 = new DataInOut();
                dataOut_1224.writeByte(4);
                const argsNames_1226: string[] = ["parent", "powMethods"];
                const argsValues_1227: any[] = [parent, powMethods];
                const result_1225 = ARFuture.of<WorkProofDTO>();
                sCtx_1212.invokeRemoteMethodAfter("requestWorkProofData", result_1225, argsNames_1226, argsValues_1227);
                const reqId_1223 = sCtx_1212.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1225 as ARFuture<WorkProofDTO>).tryDone(WorkProofDTO.META.deserialize(sCtx_1212, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1225.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1224.writeInt(reqId_1223);
                FastMeta.META_UUID.serialize(sCtx_1212, parent, dataOut_1224);
                PowMethod.META.serialize(sCtx_1212, powMethods, dataOut_1224);
                sCtx_1212.sendToRemote(dataOut_1224.toArray());
                return result_1225;
                
            }
            , resolveServers: (serverIds: Cloud): ARFuture<ServerDescriptor[]> =>  {
                const dataOut_1229 = new DataInOut();
                dataOut_1229.writeByte(5);
                const argsNames_1231: string[] = ["serverIds"];
                const argsValues_1232: any[] = [serverIds];
                const result_1230 = ARFuture.of<ServerDescriptor[]>();
                sCtx_1212.invokeRemoteMethodAfter("resolveServers", result_1230, argsNames_1231, argsValues_1232);
                const reqId_1228 = sCtx_1212.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1230 as ARFuture<ServerDescriptor[]>).tryDone(FastMeta.getMetaArray(ServerDescriptor.META).deserialize(sCtx_1212, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1230.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1229.writeInt(reqId_1228);
                Cloud.META.serialize(sCtx_1212, serverIds, dataOut_1229);
                sCtx_1212.sendToRemote(dataOut_1229.toArray());
                return result_1230;
                
            }
            , setReturnKey: (key: Key): void =>  {
                const dataOut_1234 = new DataInOut();
                dataOut_1234.writeByte(6);
                const argsNames_1236: string[] = ["key"];
                const argsValues_1237: any[] = [key];
                sCtx_1212.invokeRemoteMethodAfter("setReturnKey", null, argsNames_1236, argsValues_1237);
                Key.META.serialize(sCtx_1212, key, dataOut_1234);
                sCtx_1212.sendToRemote(dataOut_1234.toArray());
                
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
                    const reqId_1238 = dataIn.readInt();
                    let cryptoLib_1239: CryptoLib;
                    cryptoLib_1239 = CryptoLib.META.deserialize(ctx, dataIn);
                    const argsNames_1240: string[] = ["cryptoLib"];
                    const argsValues_1241: any[] = [cryptoLib_1239];
                    ctx.invokeLocalMethodBefore("getAsymmetricPublicKey", argsNames_1240, argsValues_1241);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAsymmetricPublicKey(cryptoLib_1239);
                    ctx.invokeLocalMethodAfter("getAsymmetricPublicKey", resultFuture, argsNames_1240, argsValues_1241);
                    resultFuture.to((v_1243: SignedKey) =>  {
                        const data_1242 = new DataInOut();
                        SignedKey.META.serialize(ctx, v_1243, data_1242);
                        ctx.sendResultToRemote(reqId_1238, data_1242.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let cryptoLib_1245: CryptoLib;
                    let stream_1246: ServerRegistrationApiStream;
                    cryptoLib_1245 = CryptoLib.META.deserialize(ctx, dataIn);
                    stream_1246 = ServerRegistrationApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_1247: string[] = ["cryptoLib", "stream"];
                    const argsValues_1248: any[] = [cryptoLib_1245, stream_1246];
                    ctx.invokeLocalMethodBefore("enter", argsNames_1247, argsValues_1248);
                    localApi.enter(cryptoLib_1245, stream_1246);
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_1247, argsValues_1248);
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
    makeRemote(sCtx_1249: FastFutureContext): RegistrationRootApiRemote  {
        const remoteApiImpl =  {
            flush: (sendFuture?: AFuture) =>  {
                sCtx_1249.flush(sendFuture || AFuture.make());
                
            }
            , getFastMetaContext: () => sCtx_1249, getAsymmetricPublicKey: (cryptoLib: CryptoLib): ARFuture<SignedKey> =>  {
                const dataOut_1251 = new DataInOut();
                dataOut_1251.writeByte(3);
                const argsNames_1253: string[] = ["cryptoLib"];
                const argsValues_1254: any[] = [cryptoLib];
                const result_1252 = ARFuture.of<SignedKey>();
                sCtx_1249.invokeRemoteMethodAfter("getAsymmetricPublicKey", result_1252, argsNames_1253, argsValues_1254);
                const reqId_1250 = sCtx_1249.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1252 as ARFuture<SignedKey>).tryDone(SignedKey.META.deserialize(sCtx_1249, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1252.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1251.writeInt(reqId_1250);
                CryptoLib.META.serialize(sCtx_1249, cryptoLib, dataOut_1251);
                sCtx_1249.sendToRemote(dataOut_1251.toArray());
                return result_1252;
                
            }
            , enter: (cryptoLib: CryptoLib, stream: ServerRegistrationApiStream): void =>  {
                const dataOut_1256 = new DataInOut();
                dataOut_1256.writeByte(4);
                const argsNames_1258: string[] = ["cryptoLib", "stream"];
                const argsValues_1259: any[] = [cryptoLib, stream];
                sCtx_1249.invokeRemoteMethodAfter("enter", null, argsNames_1258, argsValues_1259);
                CryptoLib.META.serialize(sCtx_1249, cryptoLib, dataOut_1256);
                ServerRegistrationApiStream.META.serialize(sCtx_1249, stream, dataOut_1256);
                sCtx_1249.sendToRemote(dataOut_1256.toArray());
                
            }
            , 
        };
        return remoteApiImpl as RegistrationRootApiRemote;
        
    }
    
}
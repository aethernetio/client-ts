import  {
    AFuture, ARFuture, DataIn, DataOut, DataInOut, DataInOutStatic, FastMetaType, MetaContext, FastMeta, SerializerPackNumber, DeserializerPackNumber, RemoteApi, FastMetaApi, FastFutureContextStub, UUID, URI, AString, BytesConverter,
}
from './aether_client';
import  {
    AetherCodec, ClientActivityType, CryptoLib, PowMethod, ServerType, Status, AetherTypeDescriptor, IPAddress, Key, KeyAsymmetric, KeyAsymmetricPrivate, KeyAsymmetricPublic, KeySign, KeySignPrivate, KeySignPublic, KeySymmetric, PairKeys, Sign, Telemetry, WorkProofConfig, AccessCheckPair, AccessCheckResult, AccessGroup, AetherApiDefinition, AetherArgumentDescriptor, AetherArrayType, AetherBaseType, AetherFieldDescriptor, AetherMethodDescriptor, AetherModuleDescriptor, AetherNullableType, AetherStreamType, AetherStructDescriptor, AppliedConfig, ClientActivity, ClientConnectionInfo, ClientInfo, ClientLogEntry, ClientStateForSave, Cloud, CloudConfig, CloudWeight, CoderAndPort, FinishResult, FinishResultGlobalRegServerApi, HydrogenCurvePrivate, HydrogenCurvePublic, HydrogenSecretBox, HydrogenSignPrivate, HydrogenSignPublic, IceCandidate, IPAddressAndPorts, IPAddressAndPortsList, IPAddressV4, IPAddressV6, IPAddressWeb, IpInfo, KeyValuePair, Message, MessageInfo, MoneyOperation, PairKeysAsym, PairKeysAsymSigned, PairKeysSign, ServerDescriptor, ServerDescriptorWithGeo, SignAE_ED25519, SignedKey, SignHYDROGEN, SodiumChacha20Poly1305, SodiumCurvePrivate, SodiumCurvePublic, SodiumSignPrivate, SodiumSignPublic, TelemetryCPP, Uap, UUIDAndCloud, WebRtcSession, WorkProofBCrypt, WorkProofDTO, ClientApiRegSafeStream, ClientApiStream, ClientInteractionClientStream, GlobalApiStream, GlobalRegClientApiStream, LoginClientStream, LoginStream, ServerRegistrationApiStream, ClientApiUnsafe, ClientApiSafe, AuthorizedApi, LoginApi, ServerApiByUidClient, ServerApiByUid, ClientApiRegUnsafe, GlobalRegServerApi, ServerRegistrationApi, RegistrationRootApi, ClientApiRegSafe, GlobalRegClientApi, ClientApiUnsafeRemote, ClientApiSafeRemote, AuthorizedApiRemote, LoginApiRemote, ServerApiByUidClientRemote, ServerApiByUidRemote, ClientApiRegUnsafeRemote, GlobalRegServerApiRemote, ServerRegistrationApiRemote, RegistrationRootApiRemote, ClientApiRegSafeRemote, GlobalRegClientApiRemote
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
export class ServerTypeMetaImpl implements FastMetaType<ServerType>  {
    private readonly values = ['REG', 'WORK'];
    serialize(_sCtx: MetaContext, obj: ServerType, out: DataOut): void  {
        out.writeByte(this.values.indexOf(obj as string));
        
    }
    deserialize(_sCtx: MetaContext, in_: DataIn): ServerType  {
        const ordinal = in_.readUByte();
        if (ordinal < 0 || ordinal >= this.values.length) throw new Error(`Invalid ordinal $ {
            ordinal
        }
        for enum ServerType`);
        return this.values[ordinal] as ServerType;
        
    }
    metaHashCode(obj: ServerType | null | undefined): number  {
        return FastMeta.META_STRING.metaHashCode(obj as string);
        
    }
    metaEquals(v1: ServerType | null | undefined, v2: any | null | undefined): boolean  {
        return FastMeta.META_STRING.metaEquals(v1 as string, v2);
        
    }
    metaToString(obj: ServerType | null | undefined, res: AString): void  {
        res.add(obj as string);
        
    }
    public serializeToBytes(obj: ServerType): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerType  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerType  {
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
export class FinishResultGlobalRegServerApiMetaBodyImpl implements FastMetaType<FinishResultGlobalRegServerApi>  {
    serialize(sCtx_338: MetaContext, obj_339: FinishResultGlobalRegServerApi, _out_340: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_338, obj_339.alias, _out_340);
        FastMeta.META_UUID.serialize(sCtx_338, obj_339.uid, _out_340);
        Cloud.META.serialize(sCtx_338, obj_339.cloud, _out_340);
        
    }
    deserialize(sCtx_338: MetaContext, in__341: DataIn): FinishResultGlobalRegServerApi  {
        let alias_342: UUID;
        let uid_343: UUID;
        let cloud_344: Cloud;
        alias_342 = FastMeta.META_UUID.deserialize(sCtx_338, in__341);
        uid_343 = FastMeta.META_UUID.deserialize(sCtx_338, in__341);
        cloud_344 = Cloud.META.deserialize(sCtx_338, in__341);
        return new FinishResultGlobalRegServerApi(alias_342, uid_343, cloud_344);
        
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
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): FinishResultGlobalRegServerApi  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): FinishResultGlobalRegServerApi  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class HydrogenCurvePrivateMetaBodyImpl implements FastMetaType<HydrogenCurvePrivate>  {
    serialize(sCtx_345: MetaContext, obj_346: HydrogenCurvePrivate, _out_347: DataOut): void  {
        if (obj_346.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_346.data must be 32 but was $ {
            obj_346.data.length
        }
        `);
        _out_347.write(obj_346.data);
        
    }
    deserialize(sCtx_345: MetaContext, in__348: DataIn): HydrogenCurvePrivate  {
        let data_350: Uint8Array;
        const len_352 = 32;
        const bytes_353 = in__348.readBytes(len_352);
        data_350 = bytes_353;
        return new HydrogenCurvePrivate(data_350);
        
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
    serialize(sCtx_354: MetaContext, obj_355: HydrogenCurvePrivate, _out_356: DataOut): void  {
        const typeId = typeof (obj_355 as any).getAetherTypeId === 'function' ? obj_355.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenCurvePrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_356.writeByte(typeId);
        switch(typeId)  {
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_354, obj_355 as any as HydrogenCurvePrivate, _out_356);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_354, obj_355 as any as SodiumChacha20Poly1305, _out_356);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_354, obj_355 as any as HydrogenSecretBox, _out_356);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_354, obj_355 as any as HydrogenCurvePublic, _out_356);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_354, obj_355 as any as SodiumCurvePublic, _out_356);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_354, obj_355 as any as SodiumCurvePrivate, _out_356);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_354, obj_355 as any as SodiumSignPublic, _out_356);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_354, obj_355 as any as HydrogenSignPublic, _out_356);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_354, obj_355 as any as SodiumSignPrivate, _out_356);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_354, obj_355 as any as HydrogenSignPrivate, _out_356);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenCurvePrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_354: MetaContext, in__357: DataIn): HydrogenCurvePrivate  {
        const typeId = in__357.readUByte();
        switch(typeId)  {
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_354, in__357) as any as HydrogenCurvePrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_354, in__357) as any as HydrogenCurvePrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_354, in__357) as any as HydrogenCurvePrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_354, in__357) as any as HydrogenCurvePrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_354, in__357) as any as HydrogenCurvePrivate;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_354, in__357) as any as HydrogenCurvePrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_354, in__357) as any as HydrogenCurvePrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_354, in__357) as any as HydrogenCurvePrivate;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_354, in__357) as any as HydrogenCurvePrivate;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_354, in__357) as any as HydrogenCurvePrivate;
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
    serialize(sCtx_358: MetaContext, obj_359: HydrogenCurvePublic, _out_360: DataOut): void  {
        if (obj_359.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_359.data must be 32 but was $ {
            obj_359.data.length
        }
        `);
        _out_360.write(obj_359.data);
        
    }
    deserialize(sCtx_358: MetaContext, in__361: DataIn): HydrogenCurvePublic  {
        let data_363: Uint8Array;
        const len_365 = 32;
        const bytes_366 = in__361.readBytes(len_365);
        data_363 = bytes_366;
        return new HydrogenCurvePublic(data_363);
        
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
    serialize(sCtx_367: MetaContext, obj_368: HydrogenCurvePublic, _out_369: DataOut): void  {
        const typeId = typeof (obj_368 as any).getAetherTypeId === 'function' ? obj_368.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenCurvePublic' with invalid type id $ {
            typeId
        }
        `);
        _out_369.writeByte(typeId);
        switch(typeId)  {
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_367, obj_368 as any as HydrogenCurvePublic, _out_369);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_367, obj_368 as any as SodiumChacha20Poly1305, _out_369);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_367, obj_368 as any as HydrogenSecretBox, _out_369);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_367, obj_368 as any as SodiumCurvePublic, _out_369);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_367, obj_368 as any as HydrogenCurvePrivate, _out_369);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_367, obj_368 as any as SodiumCurvePrivate, _out_369);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_367, obj_368 as any as SodiumSignPublic, _out_369);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_367, obj_368 as any as HydrogenSignPublic, _out_369);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_367, obj_368 as any as SodiumSignPrivate, _out_369);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_367, obj_368 as any as HydrogenSignPrivate, _out_369);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenCurvePublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_367: MetaContext, in__370: DataIn): HydrogenCurvePublic  {
        const typeId = in__370.readUByte();
        switch(typeId)  {
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_367, in__370) as any as HydrogenCurvePublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_367, in__370) as any as HydrogenCurvePublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_367, in__370) as any as HydrogenCurvePublic;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_367, in__370) as any as HydrogenCurvePublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_367, in__370) as any as HydrogenCurvePublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_367, in__370) as any as HydrogenCurvePublic;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_367, in__370) as any as HydrogenCurvePublic;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_367, in__370) as any as HydrogenCurvePublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_367, in__370) as any as HydrogenCurvePublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_367, in__370) as any as HydrogenCurvePublic;
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
    serialize(sCtx_371: MetaContext, obj_372: HydrogenSecretBox, _out_373: DataOut): void  {
        if (obj_372.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_372.data must be 32 but was $ {
            obj_372.data.length
        }
        `);
        _out_373.write(obj_372.data);
        
    }
    deserialize(sCtx_371: MetaContext, in__374: DataIn): HydrogenSecretBox  {
        let data_376: Uint8Array;
        const len_378 = 32;
        const bytes_379 = in__374.readBytes(len_378);
        data_376 = bytes_379;
        return new HydrogenSecretBox(data_376);
        
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
    serialize(sCtx_380: MetaContext, obj_381: HydrogenSecretBox, _out_382: DataOut): void  {
        const typeId = typeof (obj_381 as any).getAetherTypeId === 'function' ? obj_381.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenSecretBox' with invalid type id $ {
            typeId
        }
        `);
        _out_382.writeByte(typeId);
        switch(typeId)  {
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_380, obj_381 as any as HydrogenSecretBox, _out_382);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_380, obj_381 as any as SodiumChacha20Poly1305, _out_382);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_380, obj_381 as any as HydrogenCurvePublic, _out_382);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_380, obj_381 as any as SodiumCurvePublic, _out_382);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_380, obj_381 as any as HydrogenCurvePrivate, _out_382);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_380, obj_381 as any as SodiumCurvePrivate, _out_382);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_380, obj_381 as any as SodiumSignPublic, _out_382);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_380, obj_381 as any as HydrogenSignPublic, _out_382);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_380, obj_381 as any as SodiumSignPrivate, _out_382);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_380, obj_381 as any as HydrogenSignPrivate, _out_382);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenSecretBox' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_380: MetaContext, in__383: DataIn): HydrogenSecretBox  {
        const typeId = in__383.readUByte();
        switch(typeId)  {
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_380, in__383) as any as HydrogenSecretBox;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_380, in__383) as any as HydrogenSecretBox;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_380, in__383) as any as HydrogenSecretBox;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_380, in__383) as any as HydrogenSecretBox;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_380, in__383) as any as HydrogenSecretBox;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_380, in__383) as any as HydrogenSecretBox;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_380, in__383) as any as HydrogenSecretBox;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_380, in__383) as any as HydrogenSecretBox;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_380, in__383) as any as HydrogenSecretBox;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_380, in__383) as any as HydrogenSecretBox;
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
    serialize(sCtx_384: MetaContext, obj_385: HydrogenSignPrivate, _out_386: DataOut): void  {
        if (obj_385.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_385.data must be 64 but was $ {
            obj_385.data.length
        }
        `);
        _out_386.write(obj_385.data);
        
    }
    deserialize(sCtx_384: MetaContext, in__387: DataIn): HydrogenSignPrivate  {
        let data_389: Uint8Array;
        const len_391 = 64;
        const bytes_392 = in__387.readBytes(len_391);
        data_389 = bytes_392;
        return new HydrogenSignPrivate(data_389);
        
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
    serialize(sCtx_393: MetaContext, obj_394: HydrogenSignPrivate, _out_395: DataOut): void  {
        const typeId = typeof (obj_394 as any).getAetherTypeId === 'function' ? obj_394.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenSignPrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_395.writeByte(typeId);
        switch(typeId)  {
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_393, obj_394 as any as HydrogenSignPrivate, _out_395);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_393, obj_394 as any as SodiumChacha20Poly1305, _out_395);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_393, obj_394 as any as HydrogenSecretBox, _out_395);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_393, obj_394 as any as HydrogenCurvePublic, _out_395);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_393, obj_394 as any as SodiumCurvePublic, _out_395);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_393, obj_394 as any as HydrogenCurvePrivate, _out_395);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_393, obj_394 as any as SodiumCurvePrivate, _out_395);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_393, obj_394 as any as SodiumSignPublic, _out_395);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_393, obj_394 as any as HydrogenSignPublic, _out_395);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_393, obj_394 as any as SodiumSignPrivate, _out_395);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenSignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_393: MetaContext, in__396: DataIn): HydrogenSignPrivate  {
        const typeId = in__396.readUByte();
        switch(typeId)  {
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_393, in__396) as any as HydrogenSignPrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_393, in__396) as any as HydrogenSignPrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_393, in__396) as any as HydrogenSignPrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_393, in__396) as any as HydrogenSignPrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_393, in__396) as any as HydrogenSignPrivate;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_393, in__396) as any as HydrogenSignPrivate;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_393, in__396) as any as HydrogenSignPrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_393, in__396) as any as HydrogenSignPrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_393, in__396) as any as HydrogenSignPrivate;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_393, in__396) as any as HydrogenSignPrivate;
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
    serialize(sCtx_397: MetaContext, obj_398: HydrogenSignPublic, _out_399: DataOut): void  {
        if (obj_398.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_398.data must be 32 but was $ {
            obj_398.data.length
        }
        `);
        _out_399.write(obj_398.data);
        
    }
    deserialize(sCtx_397: MetaContext, in__400: DataIn): HydrogenSignPublic  {
        let data_402: Uint8Array;
        const len_404 = 32;
        const bytes_405 = in__400.readBytes(len_404);
        data_402 = bytes_405;
        return new HydrogenSignPublic(data_402);
        
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
    serialize(sCtx_406: MetaContext, obj_407: HydrogenSignPublic, _out_408: DataOut): void  {
        const typeId = typeof (obj_407 as any).getAetherTypeId === 'function' ? obj_407.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'HydrogenSignPublic' with invalid type id $ {
            typeId
        }
        `);
        _out_408.writeByte(typeId);
        switch(typeId)  {
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_406, obj_407 as any as HydrogenSignPublic, _out_408);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_406, obj_407 as any as SodiumChacha20Poly1305, _out_408);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_406, obj_407 as any as HydrogenSecretBox, _out_408);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_406, obj_407 as any as HydrogenCurvePublic, _out_408);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_406, obj_407 as any as SodiumCurvePublic, _out_408);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_406, obj_407 as any as HydrogenCurvePrivate, _out_408);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_406, obj_407 as any as SodiumCurvePrivate, _out_408);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_406, obj_407 as any as SodiumSignPublic, _out_408);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_406, obj_407 as any as SodiumSignPrivate, _out_408);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_406, obj_407 as any as HydrogenSignPrivate, _out_408);
            break;
            default: throw new Error(`Cannot serialize 'HydrogenSignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_406: MetaContext, in__409: DataIn): HydrogenSignPublic  {
        const typeId = in__409.readUByte();
        switch(typeId)  {
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_406, in__409) as any as HydrogenSignPublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_406, in__409) as any as HydrogenSignPublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_406, in__409) as any as HydrogenSignPublic;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_406, in__409) as any as HydrogenSignPublic;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_406, in__409) as any as HydrogenSignPublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_406, in__409) as any as HydrogenSignPublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_406, in__409) as any as HydrogenSignPublic;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_406, in__409) as any as HydrogenSignPublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_406, in__409) as any as HydrogenSignPublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_406, in__409) as any as HydrogenSignPublic;
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
export class IceCandidateMetaBodyImpl implements FastMetaType<IceCandidate>  {
    serialize(sCtx_410: MetaContext, obj_411: IceCandidate, _out_412: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_412, obj_411.data.length);
        _out_412.write(obj_411.data);
        
    }
    deserialize(sCtx_410: MetaContext, in__413: DataIn): IceCandidate  {
        let data_415: Uint8Array;
        const len_417 = Number(DeserializerPackNumber.INSTANCE.put(in__413));
        const bytes_418 = in__413.readBytes(len_417);
        data_415 = bytes_418;
        return new IceCandidate(data_415);
        
    }
    metaHashCode(obj: IceCandidate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: IceCandidate | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof IceCandidate)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: IceCandidate | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('IceCandidate(');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: IceCandidate): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): IceCandidate  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): IceCandidate  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class IPAddressAndPortsMetaBodyImpl implements FastMetaType<IPAddressAndPorts>  {
    serialize(sCtx_419: MetaContext, obj_420: IPAddressAndPorts, _out_421: DataOut): void  {
        IPAddress.META.serialize(sCtx_419, obj_420.address, _out_421);
        SerializerPackNumber.INSTANCE.put(_out_421, obj_420.coderAndPorts.length);
        for (const el_423 of obj_420.coderAndPorts)  {
            CoderAndPort.META.serialize(sCtx_419, el_423, _out_421);
            
        }
        
    }
    deserialize(sCtx_419: MetaContext, in__422: DataIn): IPAddressAndPorts  {
        let address_424: IPAddress;
        let coderAndPorts_425: CoderAndPort[];
        address_424 = IPAddress.META.deserialize(sCtx_419, in__422);
        const len_427 = Number(DeserializerPackNumber.INSTANCE.put(in__422));
        coderAndPorts_425 = new Array<CoderAndPort>(len_427);
        for (let idx_426 = 0;
        idx_426 < len_427;
        idx_426++)  {
            coderAndPorts_425[idx_426] = CoderAndPort.META.deserialize(sCtx_419, in__422);
            
        }
        return new IPAddressAndPorts(address_424, coderAndPorts_425);
        
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
    serialize(sCtx_428: MetaContext, obj_429: IPAddressAndPortsList, _out_430: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_430, obj_429.addresses.length);
        for (const el_432 of obj_429.addresses)  {
            IPAddressAndPorts.META.serialize(sCtx_428, el_432, _out_430);
            
        }
        
    }
    deserialize(sCtx_428: MetaContext, in__431: DataIn): IPAddressAndPortsList  {
        let addresses_433: IPAddressAndPorts[];
        const len_435 = Number(DeserializerPackNumber.INSTANCE.put(in__431));
        addresses_433 = new Array<IPAddressAndPorts>(len_435);
        for (let idx_434 = 0;
        idx_434 < len_435;
        idx_434++)  {
            addresses_433[idx_434] = IPAddressAndPorts.META.deserialize(sCtx_428, in__431);
            
        }
        return new IPAddressAndPortsList(addresses_433);
        
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
    serialize(sCtx_436: MetaContext, obj_437: IPAddressV4, _out_438: DataOut): void  {
        if (obj_437.data.length !== 4) throw new Error(`IllegalStateException: Array length for obj_437.data must be 4 but was $ {
            obj_437.data.length
        }
        `);
        _out_438.write(obj_437.data);
        
    }
    deserialize(sCtx_436: MetaContext, in__439: DataIn): IPAddressV4  {
        let data_441: Uint8Array;
        const len_443 = 4;
        const bytes_444 = in__439.readBytes(len_443);
        data_441 = bytes_444;
        return new IPAddressV4(data_441);
        
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
    serialize(sCtx_445: MetaContext, obj_446: IPAddressV4, _out_447: DataOut): void  {
        const typeId = typeof (obj_446 as any).getAetherTypeId === 'function' ? obj_446.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'IPAddressV4' with invalid type id $ {
            typeId
        }
        `);
        _out_447.writeByte(typeId);
        switch(typeId)  {
            case 1: (IPAddressV4 as any).META_BODY.serialize(sCtx_445, obj_446 as any as IPAddressV4, _out_447);
            break;
            case 2: (IPAddressV6 as any).META_BODY.serialize(sCtx_445, obj_446 as any as IPAddressV6, _out_447);
            break;
            case 3: (IPAddressWeb as any).META_BODY.serialize(sCtx_445, obj_446 as any as IPAddressWeb, _out_447);
            break;
            default: throw new Error(`Cannot serialize 'IPAddressV4' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_445: MetaContext, in__448: DataIn): IPAddressV4  {
        const typeId = in__448.readUByte();
        switch(typeId)  {
            case 1: return (IPAddressV4 as any).META_BODY.deserialize(sCtx_445, in__448) as any as IPAddressV4;
            case 2: return (IPAddressV6 as any).META_BODY.deserialize(sCtx_445, in__448) as any as IPAddressV4;
            case 3: return (IPAddressWeb as any).META_BODY.deserialize(sCtx_445, in__448) as any as IPAddressV4;
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
    serialize(sCtx_449: MetaContext, obj_450: IPAddressV6, _out_451: DataOut): void  {
        if (obj_450.data.length !== 16) throw new Error(`IllegalStateException: Array length for obj_450.data must be 16 but was $ {
            obj_450.data.length
        }
        `);
        _out_451.write(obj_450.data);
        
    }
    deserialize(sCtx_449: MetaContext, in__452: DataIn): IPAddressV6  {
        let data_454: Uint8Array;
        const len_456 = 16;
        const bytes_457 = in__452.readBytes(len_456);
        data_454 = bytes_457;
        return new IPAddressV6(data_454);
        
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
    serialize(sCtx_458: MetaContext, obj_459: IPAddressV6, _out_460: DataOut): void  {
        const typeId = typeof (obj_459 as any).getAetherTypeId === 'function' ? obj_459.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'IPAddressV6' with invalid type id $ {
            typeId
        }
        `);
        _out_460.writeByte(typeId);
        switch(typeId)  {
            case 2: (IPAddressV6 as any).META_BODY.serialize(sCtx_458, obj_459 as any as IPAddressV6, _out_460);
            break;
            case 1: (IPAddressV4 as any).META_BODY.serialize(sCtx_458, obj_459 as any as IPAddressV4, _out_460);
            break;
            case 3: (IPAddressWeb as any).META_BODY.serialize(sCtx_458, obj_459 as any as IPAddressWeb, _out_460);
            break;
            default: throw new Error(`Cannot serialize 'IPAddressV6' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_458: MetaContext, in__461: DataIn): IPAddressV6  {
        const typeId = in__461.readUByte();
        switch(typeId)  {
            case 2: return (IPAddressV6 as any).META_BODY.deserialize(sCtx_458, in__461) as any as IPAddressV6;
            case 1: return (IPAddressV4 as any).META_BODY.deserialize(sCtx_458, in__461) as any as IPAddressV6;
            case 3: return (IPAddressWeb as any).META_BODY.deserialize(sCtx_458, in__461) as any as IPAddressV6;
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
    serialize(sCtx_462: MetaContext, obj_463: IPAddressWeb, _out_464: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_464, obj_463.data.length);
        _out_464.write(obj_463.data);
        
    }
    deserialize(sCtx_462: MetaContext, in__465: DataIn): IPAddressWeb  {
        let data_467: Uint8Array;
        const len_469 = Number(DeserializerPackNumber.INSTANCE.put(in__465));
        const bytes_470 = in__465.readBytes(len_469);
        data_467 = bytes_470;
        return new IPAddressWeb(data_467);
        
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
    serialize(sCtx_471: MetaContext, obj_472: IPAddressWeb, _out_473: DataOut): void  {
        const typeId = typeof (obj_472 as any).getAetherTypeId === 'function' ? obj_472.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'IPAddressWeb' with invalid type id $ {
            typeId
        }
        `);
        _out_473.writeByte(typeId);
        switch(typeId)  {
            case 3: (IPAddressWeb as any).META_BODY.serialize(sCtx_471, obj_472 as any as IPAddressWeb, _out_473);
            break;
            case 1: (IPAddressV4 as any).META_BODY.serialize(sCtx_471, obj_472 as any as IPAddressV4, _out_473);
            break;
            case 2: (IPAddressV6 as any).META_BODY.serialize(sCtx_471, obj_472 as any as IPAddressV6, _out_473);
            break;
            default: throw new Error(`Cannot serialize 'IPAddressWeb' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_471: MetaContext, in__474: DataIn): IPAddressWeb  {
        const typeId = in__474.readUByte();
        switch(typeId)  {
            case 3: return (IPAddressWeb as any).META_BODY.deserialize(sCtx_471, in__474) as any as IPAddressWeb;
            case 1: return (IPAddressV4 as any).META_BODY.deserialize(sCtx_471, in__474) as any as IPAddressWeb;
            case 2: return (IPAddressV6 as any).META_BODY.deserialize(sCtx_471, in__474) as any as IPAddressWeb;
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
    serialize(sCtx_475: MetaContext, obj_476: IpInfo, _out_477: DataOut): void  {
        IPAddress.META.serialize(sCtx_475, obj_476.ip, _out_477);
        _out_477.writeShort(obj_476.port);
        _out_477.writeDouble(obj_476.latitude);
        _out_477.writeDouble(obj_476.longitude);
        
    }
    deserialize(sCtx_475: MetaContext, in__478: DataIn): IpInfo  {
        let ip_479: IPAddress;
        let port_480: number;
        let latitude_481: number;
        let longitude_482: number;
        ip_479 = IPAddress.META.deserialize(sCtx_475, in__478);
        port_480 = in__478.readShort();
        latitude_481 = in__478.readDouble();
        longitude_482 = in__478.readDouble();
        return new IpInfo(ip_479, port_480, latitude_481, longitude_482);
        
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
    serialize(sCtx_483: MetaContext, obj_484: KeyValuePair, _out_485: DataOut): void  {
        const stringBytes_487 = new TextEncoder().encode(obj_484.key);
        SerializerPackNumber.INSTANCE.put(_out_485, stringBytes_487.length);
        _out_485.write(stringBytes_487);
        const stringBytes_489 = new TextEncoder().encode(obj_484.value);
        SerializerPackNumber.INSTANCE.put(_out_485, stringBytes_489.length);
        _out_485.write(stringBytes_489);
        
    }
    deserialize(sCtx_483: MetaContext, in__486: DataIn): KeyValuePair  {
        let _key_491: string;
        let value_492: string;
        let stringBytes_493: Uint8Array;
        const len_495 = Number(DeserializerPackNumber.INSTANCE.put(in__486));
        const bytes_496 = in__486.readBytes(len_495);
        stringBytes_493 = bytes_496;
        _key_491 = new TextDecoder('utf-8').decode(stringBytes_493);
        let stringBytes_497: Uint8Array;
        const len_499 = Number(DeserializerPackNumber.INSTANCE.put(in__486));
        const bytes_500 = in__486.readBytes(len_499);
        stringBytes_497 = bytes_500;
        value_492 = new TextDecoder('utf-8').decode(stringBytes_497);
        return new KeyValuePair(_key_491, value_492);
        
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
    serialize(sCtx_501: MetaContext, obj_502: Message, _out_503: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_501, obj_502.uid, _out_503);
        SerializerPackNumber.INSTANCE.put(_out_503, obj_502.data.length);
        _out_503.write(obj_502.data);
        
    }
    deserialize(sCtx_501: MetaContext, in__504: DataIn): Message  {
        let uid_506: UUID;
        let data_507: Uint8Array;
        uid_506 = FastMeta.META_UUID.deserialize(sCtx_501, in__504);
        const len_509 = Number(DeserializerPackNumber.INSTANCE.put(in__504));
        const bytes_510 = in__504.readBytes(len_509);
        data_507 = bytes_510;
        return new Message(uid_506, data_507);
        
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
    serialize(sCtx_511: MetaContext, obj_512: MessageInfo, _out_513: DataOut): void  {
        _out_513.writeLong(obj_512.timestamp);
        FastMeta.META_UUID.serialize(sCtx_511, obj_512.fromUid, _out_513);
        FastMeta.META_UUID.serialize(sCtx_511, obj_512.toUid, _out_513);
        _out_513.writeInt(obj_512.size);
        FastMeta.META_UUID.serialize(sCtx_511, obj_512.messageId, _out_513);
        
    }
    deserialize(sCtx_511: MetaContext, in__514: DataIn): MessageInfo  {
        let timestamp_515: bigint;
        let fromUid_516: UUID;
        let toUid_517: UUID;
        let size_518: number;
        let messageId_519: UUID;
        timestamp_515 = in__514.readLong();
        fromUid_516 = FastMeta.META_UUID.deserialize(sCtx_511, in__514);
        toUid_517 = FastMeta.META_UUID.deserialize(sCtx_511, in__514);
        size_518 = in__514.readInt();
        messageId_519 = FastMeta.META_UUID.deserialize(sCtx_511, in__514);
        return new MessageInfo(timestamp_515, fromUid_516, toUid_517, size_518, messageId_519);
        
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
    serialize(sCtx_520: MetaContext, obj_521: MoneyOperation, _out_522: DataOut): void  {
        _out_522.writeLong(obj_521.id);
        FastMeta.META_UUID.serialize(sCtx_520, obj_521.from, _out_522);
        FastMeta.META_UUID.serialize(sCtx_520, obj_521.to, _out_522);
        _out_522.writeLong(obj_521.amount);
        _out_522.writeLong(obj_521.time);
        _out_522.writeBoolean(obj_521.credit);
        Status.META.serialize(sCtx_520, obj_521.status, _out_522);
        
    }
    deserialize(sCtx_520: MetaContext, in__523: DataIn): MoneyOperation  {
        let id_524: bigint;
        let from_525: UUID;
        let to_526: UUID;
        let amount_527: bigint;
        let time_528: bigint;
        let credit_529: boolean;
        let status_530: Status;
        id_524 = in__523.readLong();
        from_525 = FastMeta.META_UUID.deserialize(sCtx_520, in__523);
        to_526 = FastMeta.META_UUID.deserialize(sCtx_520, in__523);
        amount_527 = in__523.readLong();
        time_528 = in__523.readLong();
        credit_529 = in__523.readBoolean();
        status_530 = Status.META.deserialize(sCtx_520, in__523);
        return new MoneyOperation(id_524, from_525, to_526, amount_527, time_528, credit_529, status_530);
        
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
    serialize(sCtx_531: MetaContext, obj_532: PairKeysAsym, _out_533: DataOut): void  {
        Key.META.serialize(sCtx_531, obj_532.privateKey, _out_533);
        Key.META.serialize(sCtx_531, obj_532.publicKey, _out_533);
        
    }
    deserialize(sCtx_531: MetaContext, in__534: DataIn): PairKeysAsym  {
        let privateKey_535: Key;
        let publicKey_536: Key;
        privateKey_535 = Key.META.deserialize(sCtx_531, in__534);
        publicKey_536 = Key.META.deserialize(sCtx_531, in__534);
        return new PairKeysAsym(privateKey_535, publicKey_536);
        
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
    serialize(sCtx_537: MetaContext, obj_538: PairKeysAsym, _out_539: DataOut): void  {
        const typeId = typeof (obj_538 as any).getAetherTypeId === 'function' ? obj_538.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeysAsym' with invalid type id $ {
            typeId
        }
        `);
        _out_539.writeByte(typeId);
        switch(typeId)  {
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_537, obj_538 as any as PairKeysAsym, _out_539);
            break;
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_537, obj_538 as any as PairKeysSign, _out_539);
            break;
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_537, obj_538 as any as PairKeysAsymSigned, _out_539);
            break;
            default: throw new Error(`Cannot serialize 'PairKeysAsym' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_537: MetaContext, in__540: DataIn): PairKeysAsym  {
        const typeId = in__540.readUByte();
        switch(typeId)  {
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_537, in__540) as any as PairKeysAsym;
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_537, in__540) as any as PairKeysAsym;
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_537, in__540) as any as PairKeysAsym;
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
    serialize(sCtx_541: MetaContext, obj_542: PairKeysAsymSigned, _out_543: DataOut): void  {
        Key.META.serialize(sCtx_541, obj_542.privateKey, _out_543);
        SignedKey.META.serialize(sCtx_541, obj_542.publicKey, _out_543);
        
    }
    deserialize(sCtx_541: MetaContext, in__544: DataIn): PairKeysAsymSigned  {
        let privateKey_545: Key;
        let publicKey_546: SignedKey;
        privateKey_545 = Key.META.deserialize(sCtx_541, in__544);
        publicKey_546 = SignedKey.META.deserialize(sCtx_541, in__544);
        return new PairKeysAsymSigned(privateKey_545, publicKey_546);
        
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
    serialize(sCtx_547: MetaContext, obj_548: PairKeysAsymSigned, _out_549: DataOut): void  {
        const typeId = typeof (obj_548 as any).getAetherTypeId === 'function' ? obj_548.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeysAsymSigned' with invalid type id $ {
            typeId
        }
        `);
        _out_549.writeByte(typeId);
        switch(typeId)  {
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_547, obj_548 as any as PairKeysAsymSigned, _out_549);
            break;
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_547, obj_548 as any as PairKeysSign, _out_549);
            break;
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_547, obj_548 as any as PairKeysAsym, _out_549);
            break;
            default: throw new Error(`Cannot serialize 'PairKeysAsymSigned' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_547: MetaContext, in__550: DataIn): PairKeysAsymSigned  {
        const typeId = in__550.readUByte();
        switch(typeId)  {
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_547, in__550) as any as PairKeysAsymSigned;
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_547, in__550) as any as PairKeysAsymSigned;
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_547, in__550) as any as PairKeysAsymSigned;
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
    serialize(sCtx_551: MetaContext, obj_552: PairKeysSign, _out_553: DataOut): void  {
        Key.META.serialize(sCtx_551, obj_552.privateKey, _out_553);
        Key.META.serialize(sCtx_551, obj_552.publicKey, _out_553);
        
    }
    deserialize(sCtx_551: MetaContext, in__554: DataIn): PairKeysSign  {
        let privateKey_555: Key;
        let publicKey_556: Key;
        privateKey_555 = Key.META.deserialize(sCtx_551, in__554);
        publicKey_556 = Key.META.deserialize(sCtx_551, in__554);
        return new PairKeysSign(privateKey_555, publicKey_556);
        
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
    serialize(sCtx_557: MetaContext, obj_558: PairKeysSign, _out_559: DataOut): void  {
        const typeId = typeof (obj_558 as any).getAetherTypeId === 'function' ? obj_558.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeysSign' with invalid type id $ {
            typeId
        }
        `);
        _out_559.writeByte(typeId);
        switch(typeId)  {
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_557, obj_558 as any as PairKeysSign, _out_559);
            break;
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_557, obj_558 as any as PairKeysAsym, _out_559);
            break;
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_557, obj_558 as any as PairKeysAsymSigned, _out_559);
            break;
            default: throw new Error(`Cannot serialize 'PairKeysSign' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_557: MetaContext, in__560: DataIn): PairKeysSign  {
        const typeId = in__560.readUByte();
        switch(typeId)  {
            case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_557, in__560) as any as PairKeysSign;
            case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_557, in__560) as any as PairKeysSign;
            case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_557, in__560) as any as PairKeysSign;
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
    serialize(sCtx_561: MetaContext, obj_562: ServerDescriptor, _out_563: DataOut): void  {
        _out_563.writeShort(obj_562.id);
        IPAddressAndPortsList.META.serialize(sCtx_561, obj_562.ipAddress, _out_563);
        
    }
    deserialize(sCtx_561: MetaContext, in__564: DataIn): ServerDescriptor  {
        let id_565: number;
        let ipAddress_566: IPAddressAndPortsList;
        id_565 = in__564.readShort();
        ipAddress_566 = IPAddressAndPortsList.META.deserialize(sCtx_561, in__564);
        return new ServerDescriptor(id_565, ipAddress_566);
        
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
    serialize(sCtx_567: MetaContext, obj_568: ServerDescriptorWithGeo, _out_569: DataOut): void  {
        _out_569.writeShort(obj_568.id);
        IPAddressAndPortsList.META.serialize(sCtx_567, obj_568.ipAddress, _out_569);
        _out_569.writeDouble(obj_568.latitude);
        _out_569.writeDouble(obj_568.longitude);
        ServerType.META.serialize(sCtx_567, obj_568.type, _out_569);
        
    }
    deserialize(sCtx_567: MetaContext, in__570: DataIn): ServerDescriptorWithGeo  {
        let id_571: number;
        let ipAddress_572: IPAddressAndPortsList;
        let latitude_573: number;
        let longitude_574: number;
        let type_575: ServerType;
        id_571 = in__570.readShort();
        ipAddress_572 = IPAddressAndPortsList.META.deserialize(sCtx_567, in__570);
        latitude_573 = in__570.readDouble();
        longitude_574 = in__570.readDouble();
        type_575 = ServerType.META.deserialize(sCtx_567, in__570);
        return new ServerDescriptorWithGeo(id_571, ipAddress_572, latitude_573, longitude_574, type_575);
        
    }
    metaHashCode(obj: ServerDescriptorWithGeo | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_SHORT.metaHashCode(obj.id);
        hash = 37 * hash + IPAddressAndPortsList.META.metaHashCode(obj.ipAddress);
        hash = 37 * hash + FastMeta.META_DOUBLE.metaHashCode(obj.latitude);
        hash = 37 * hash + FastMeta.META_DOUBLE.metaHashCode(obj.longitude);
        hash = 37 * hash + ServerType.META.metaHashCode(obj.type);
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
        if (!ServerType.META.metaEquals(v1.type, v2.type)) return false;
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
        res.add(', ');
        res.add('type:').add(obj.type);
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
    serialize(sCtx_576: MetaContext, obj_577: SignAE_ED25519, _out_578: DataOut): void  {
        if (obj_577.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_577.data must be 64 but was $ {
            obj_577.data.length
        }
        `);
        _out_578.write(obj_577.data);
        
    }
    deserialize(sCtx_576: MetaContext, in__579: DataIn): SignAE_ED25519  {
        let data_581: Uint8Array;
        const len_583 = 64;
        const bytes_584 = in__579.readBytes(len_583);
        data_581 = bytes_584;
        return new SignAE_ED25519(data_581);
        
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
    serialize(sCtx_585: MetaContext, obj_586: SignAE_ED25519, _out_587: DataOut): void  {
        const typeId = typeof (obj_586 as any).getAetherTypeId === 'function' ? obj_586.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SignAE_ED25519' with invalid type id $ {
            typeId
        }
        `);
        _out_587.writeByte(typeId);
        switch(typeId)  {
            case 1: (SignAE_ED25519 as any).META_BODY.serialize(sCtx_585, obj_586 as any as SignAE_ED25519, _out_587);
            break;
            case 2: (SignHYDROGEN as any).META_BODY.serialize(sCtx_585, obj_586 as any as SignHYDROGEN, _out_587);
            break;
            default: throw new Error(`Cannot serialize 'SignAE_ED25519' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_585: MetaContext, in__588: DataIn): SignAE_ED25519  {
        const typeId = in__588.readUByte();
        switch(typeId)  {
            case 1: return (SignAE_ED25519 as any).META_BODY.deserialize(sCtx_585, in__588) as any as SignAE_ED25519;
            case 2: return (SignHYDROGEN as any).META_BODY.deserialize(sCtx_585, in__588) as any as SignAE_ED25519;
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
    serialize(sCtx_589: MetaContext, obj_590: SignedKey, _out_591: DataOut): void  {
        Key.META.serialize(sCtx_589, obj_590.key, _out_591);
        Sign.META.serialize(sCtx_589, obj_590.sign, _out_591);
        
    }
    deserialize(sCtx_589: MetaContext, in__592: DataIn): SignedKey  {
        let _key_593: Key;
        let sign_594: Sign;
        _key_593 = Key.META.deserialize(sCtx_589, in__592);
        sign_594 = Sign.META.deserialize(sCtx_589, in__592);
        return new SignedKey(_key_593, sign_594);
        
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
    serialize(sCtx_595: MetaContext, obj_596: SignHYDROGEN, _out_597: DataOut): void  {
        if (obj_596.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_596.data must be 64 but was $ {
            obj_596.data.length
        }
        `);
        _out_597.write(obj_596.data);
        
    }
    deserialize(sCtx_595: MetaContext, in__598: DataIn): SignHYDROGEN  {
        let data_600: Uint8Array;
        const len_602 = 64;
        const bytes_603 = in__598.readBytes(len_602);
        data_600 = bytes_603;
        return new SignHYDROGEN(data_600);
        
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
    serialize(sCtx_604: MetaContext, obj_605: SignHYDROGEN, _out_606: DataOut): void  {
        const typeId = typeof (obj_605 as any).getAetherTypeId === 'function' ? obj_605.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SignHYDROGEN' with invalid type id $ {
            typeId
        }
        `);
        _out_606.writeByte(typeId);
        switch(typeId)  {
            case 2: (SignHYDROGEN as any).META_BODY.serialize(sCtx_604, obj_605 as any as SignHYDROGEN, _out_606);
            break;
            case 1: (SignAE_ED25519 as any).META_BODY.serialize(sCtx_604, obj_605 as any as SignAE_ED25519, _out_606);
            break;
            default: throw new Error(`Cannot serialize 'SignHYDROGEN' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_604: MetaContext, in__607: DataIn): SignHYDROGEN  {
        const typeId = in__607.readUByte();
        switch(typeId)  {
            case 2: return (SignHYDROGEN as any).META_BODY.deserialize(sCtx_604, in__607) as any as SignHYDROGEN;
            case 1: return (SignAE_ED25519 as any).META_BODY.deserialize(sCtx_604, in__607) as any as SignHYDROGEN;
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
    serialize(sCtx_608: MetaContext, obj_609: SodiumChacha20Poly1305, _out_610: DataOut): void  {
        if (obj_609.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_609.data must be 32 but was $ {
            obj_609.data.length
        }
        `);
        _out_610.write(obj_609.data);
        
    }
    deserialize(sCtx_608: MetaContext, in__611: DataIn): SodiumChacha20Poly1305  {
        let data_613: Uint8Array;
        const len_615 = 32;
        const bytes_616 = in__611.readBytes(len_615);
        data_613 = bytes_616;
        return new SodiumChacha20Poly1305(data_613);
        
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
    serialize(sCtx_617: MetaContext, obj_618: SodiumChacha20Poly1305, _out_619: DataOut): void  {
        const typeId = typeof (obj_618 as any).getAetherTypeId === 'function' ? obj_618.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumChacha20Poly1305' with invalid type id $ {
            typeId
        }
        `);
        _out_619.writeByte(typeId);
        switch(typeId)  {
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_617, obj_618 as any as SodiumChacha20Poly1305, _out_619);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_617, obj_618 as any as HydrogenSecretBox, _out_619);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_617, obj_618 as any as HydrogenCurvePublic, _out_619);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_617, obj_618 as any as SodiumCurvePublic, _out_619);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_617, obj_618 as any as HydrogenCurvePrivate, _out_619);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_617, obj_618 as any as SodiumCurvePrivate, _out_619);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_617, obj_618 as any as SodiumSignPublic, _out_619);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_617, obj_618 as any as HydrogenSignPublic, _out_619);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_617, obj_618 as any as SodiumSignPrivate, _out_619);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_617, obj_618 as any as HydrogenSignPrivate, _out_619);
            break;
            default: throw new Error(`Cannot serialize 'SodiumChacha20Poly1305' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_617: MetaContext, in__620: DataIn): SodiumChacha20Poly1305  {
        const typeId = in__620.readUByte();
        switch(typeId)  {
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_617, in__620) as any as SodiumChacha20Poly1305;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_617, in__620) as any as SodiumChacha20Poly1305;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_617, in__620) as any as SodiumChacha20Poly1305;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_617, in__620) as any as SodiumChacha20Poly1305;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_617, in__620) as any as SodiumChacha20Poly1305;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_617, in__620) as any as SodiumChacha20Poly1305;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_617, in__620) as any as SodiumChacha20Poly1305;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_617, in__620) as any as SodiumChacha20Poly1305;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_617, in__620) as any as SodiumChacha20Poly1305;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_617, in__620) as any as SodiumChacha20Poly1305;
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
    serialize(sCtx_621: MetaContext, obj_622: SodiumCurvePrivate, _out_623: DataOut): void  {
        if (obj_622.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_622.data must be 32 but was $ {
            obj_622.data.length
        }
        `);
        _out_623.write(obj_622.data);
        
    }
    deserialize(sCtx_621: MetaContext, in__624: DataIn): SodiumCurvePrivate  {
        let data_626: Uint8Array;
        const len_628 = 32;
        const bytes_629 = in__624.readBytes(len_628);
        data_626 = bytes_629;
        return new SodiumCurvePrivate(data_626);
        
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
    serialize(sCtx_630: MetaContext, obj_631: SodiumCurvePrivate, _out_632: DataOut): void  {
        const typeId = typeof (obj_631 as any).getAetherTypeId === 'function' ? obj_631.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumCurvePrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_632.writeByte(typeId);
        switch(typeId)  {
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_630, obj_631 as any as SodiumCurvePrivate, _out_632);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_630, obj_631 as any as SodiumChacha20Poly1305, _out_632);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_630, obj_631 as any as HydrogenSecretBox, _out_632);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_630, obj_631 as any as HydrogenCurvePublic, _out_632);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_630, obj_631 as any as SodiumCurvePublic, _out_632);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_630, obj_631 as any as HydrogenCurvePrivate, _out_632);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_630, obj_631 as any as SodiumSignPublic, _out_632);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_630, obj_631 as any as HydrogenSignPublic, _out_632);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_630, obj_631 as any as SodiumSignPrivate, _out_632);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_630, obj_631 as any as HydrogenSignPrivate, _out_632);
            break;
            default: throw new Error(`Cannot serialize 'SodiumCurvePrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_630: MetaContext, in__633: DataIn): SodiumCurvePrivate  {
        const typeId = in__633.readUByte();
        switch(typeId)  {
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_630, in__633) as any as SodiumCurvePrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_630, in__633) as any as SodiumCurvePrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_630, in__633) as any as SodiumCurvePrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_630, in__633) as any as SodiumCurvePrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_630, in__633) as any as SodiumCurvePrivate;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_630, in__633) as any as SodiumCurvePrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_630, in__633) as any as SodiumCurvePrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_630, in__633) as any as SodiumCurvePrivate;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_630, in__633) as any as SodiumCurvePrivate;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_630, in__633) as any as SodiumCurvePrivate;
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
    serialize(sCtx_634: MetaContext, obj_635: SodiumCurvePublic, _out_636: DataOut): void  {
        if (obj_635.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_635.data must be 32 but was $ {
            obj_635.data.length
        }
        `);
        _out_636.write(obj_635.data);
        
    }
    deserialize(sCtx_634: MetaContext, in__637: DataIn): SodiumCurvePublic  {
        let data_639: Uint8Array;
        const len_641 = 32;
        const bytes_642 = in__637.readBytes(len_641);
        data_639 = bytes_642;
        return new SodiumCurvePublic(data_639);
        
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
    serialize(sCtx_643: MetaContext, obj_644: SodiumCurvePublic, _out_645: DataOut): void  {
        const typeId = typeof (obj_644 as any).getAetherTypeId === 'function' ? obj_644.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumCurvePublic' with invalid type id $ {
            typeId
        }
        `);
        _out_645.writeByte(typeId);
        switch(typeId)  {
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_643, obj_644 as any as SodiumCurvePublic, _out_645);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_643, obj_644 as any as SodiumChacha20Poly1305, _out_645);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_643, obj_644 as any as HydrogenSecretBox, _out_645);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_643, obj_644 as any as HydrogenCurvePublic, _out_645);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_643, obj_644 as any as HydrogenCurvePrivate, _out_645);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_643, obj_644 as any as SodiumCurvePrivate, _out_645);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_643, obj_644 as any as SodiumSignPublic, _out_645);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_643, obj_644 as any as HydrogenSignPublic, _out_645);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_643, obj_644 as any as SodiumSignPrivate, _out_645);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_643, obj_644 as any as HydrogenSignPrivate, _out_645);
            break;
            default: throw new Error(`Cannot serialize 'SodiumCurvePublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_643: MetaContext, in__646: DataIn): SodiumCurvePublic  {
        const typeId = in__646.readUByte();
        switch(typeId)  {
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_643, in__646) as any as SodiumCurvePublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_643, in__646) as any as SodiumCurvePublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_643, in__646) as any as SodiumCurvePublic;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_643, in__646) as any as SodiumCurvePublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_643, in__646) as any as SodiumCurvePublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_643, in__646) as any as SodiumCurvePublic;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_643, in__646) as any as SodiumCurvePublic;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_643, in__646) as any as SodiumCurvePublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_643, in__646) as any as SodiumCurvePublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_643, in__646) as any as SodiumCurvePublic;
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
    serialize(sCtx_647: MetaContext, obj_648: SodiumSignPrivate, _out_649: DataOut): void  {
        if (obj_648.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_648.data must be 64 but was $ {
            obj_648.data.length
        }
        `);
        _out_649.write(obj_648.data);
        
    }
    deserialize(sCtx_647: MetaContext, in__650: DataIn): SodiumSignPrivate  {
        let data_652: Uint8Array;
        const len_654 = 64;
        const bytes_655 = in__650.readBytes(len_654);
        data_652 = bytes_655;
        return new SodiumSignPrivate(data_652);
        
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
    serialize(sCtx_656: MetaContext, obj_657: SodiumSignPrivate, _out_658: DataOut): void  {
        const typeId = typeof (obj_657 as any).getAetherTypeId === 'function' ? obj_657.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumSignPrivate' with invalid type id $ {
            typeId
        }
        `);
        _out_658.writeByte(typeId);
        switch(typeId)  {
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_656, obj_657 as any as SodiumSignPrivate, _out_658);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_656, obj_657 as any as SodiumChacha20Poly1305, _out_658);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_656, obj_657 as any as HydrogenSecretBox, _out_658);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_656, obj_657 as any as HydrogenCurvePublic, _out_658);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_656, obj_657 as any as SodiumCurvePublic, _out_658);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_656, obj_657 as any as HydrogenCurvePrivate, _out_658);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_656, obj_657 as any as SodiumCurvePrivate, _out_658);
            break;
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_656, obj_657 as any as SodiumSignPublic, _out_658);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_656, obj_657 as any as HydrogenSignPublic, _out_658);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_656, obj_657 as any as HydrogenSignPrivate, _out_658);
            break;
            default: throw new Error(`Cannot serialize 'SodiumSignPrivate' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_656: MetaContext, in__659: DataIn): SodiumSignPrivate  {
        const typeId = in__659.readUByte();
        switch(typeId)  {
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_656, in__659) as any as SodiumSignPrivate;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_656, in__659) as any as SodiumSignPrivate;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_656, in__659) as any as SodiumSignPrivate;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_656, in__659) as any as SodiumSignPrivate;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_656, in__659) as any as SodiumSignPrivate;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_656, in__659) as any as SodiumSignPrivate;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_656, in__659) as any as SodiumSignPrivate;
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_656, in__659) as any as SodiumSignPrivate;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_656, in__659) as any as SodiumSignPrivate;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_656, in__659) as any as SodiumSignPrivate;
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
    serialize(sCtx_660: MetaContext, obj_661: SodiumSignPublic, _out_662: DataOut): void  {
        if (obj_661.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_661.data must be 32 but was $ {
            obj_661.data.length
        }
        `);
        _out_662.write(obj_661.data);
        
    }
    deserialize(sCtx_660: MetaContext, in__663: DataIn): SodiumSignPublic  {
        let data_665: Uint8Array;
        const len_667 = 32;
        const bytes_668 = in__663.readBytes(len_667);
        data_665 = bytes_668;
        return new SodiumSignPublic(data_665);
        
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
    serialize(sCtx_669: MetaContext, obj_670: SodiumSignPublic, _out_671: DataOut): void  {
        const typeId = typeof (obj_670 as any).getAetherTypeId === 'function' ? obj_670.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'SodiumSignPublic' with invalid type id $ {
            typeId
        }
        `);
        _out_671.writeByte(typeId);
        switch(typeId)  {
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_669, obj_670 as any as SodiumSignPublic, _out_671);
            break;
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_669, obj_670 as any as SodiumChacha20Poly1305, _out_671);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_669, obj_670 as any as HydrogenSecretBox, _out_671);
            break;
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_669, obj_670 as any as HydrogenCurvePublic, _out_671);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_669, obj_670 as any as SodiumCurvePublic, _out_671);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_669, obj_670 as any as HydrogenCurvePrivate, _out_671);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_669, obj_670 as any as SodiumCurvePrivate, _out_671);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_669, obj_670 as any as HydrogenSignPublic, _out_671);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_669, obj_670 as any as SodiumSignPrivate, _out_671);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_669, obj_670 as any as HydrogenSignPrivate, _out_671);
            break;
            default: throw new Error(`Cannot serialize 'SodiumSignPublic' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_669: MetaContext, in__672: DataIn): SodiumSignPublic  {
        const typeId = in__672.readUByte();
        switch(typeId)  {
            case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_669, in__672) as any as SodiumSignPublic;
            case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_669, in__672) as any as SodiumSignPublic;
            case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_669, in__672) as any as SodiumSignPublic;
            case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_669, in__672) as any as SodiumSignPublic;
            case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_669, in__672) as any as SodiumSignPublic;
            case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_669, in__672) as any as SodiumSignPublic;
            case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_669, in__672) as any as SodiumSignPublic;
            case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_669, in__672) as any as SodiumSignPublic;
            case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_669, in__672) as any as SodiumSignPublic;
            case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_669, in__672) as any as SodiumSignPublic;
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
    serialize(sCtx_673: MetaContext, obj_674: TelemetryCPP, _out_675: DataOut): void  {
        _out_675.writeInt(obj_674.utm_id);
        SerializerPackNumber.INSTANCE.put(_out_675, obj_674.blob.length);
        _out_675.write(obj_674.blob);
        const stringBytes_678 = new TextEncoder().encode(obj_674.lib_version);
        SerializerPackNumber.INSTANCE.put(_out_675, stringBytes_678.length);
        _out_675.write(stringBytes_678);
        const stringBytes_680 = new TextEncoder().encode(obj_674.os);
        SerializerPackNumber.INSTANCE.put(_out_675, stringBytes_680.length);
        _out_675.write(stringBytes_680);
        const stringBytes_682 = new TextEncoder().encode(obj_674.compiler);
        SerializerPackNumber.INSTANCE.put(_out_675, stringBytes_682.length);
        _out_675.write(stringBytes_682);
        
    }
    deserialize(sCtx_673: MetaContext, in__676: DataIn): TelemetryCPP  {
        let utm_id_684: number;
        let blob_685: Uint8Array;
        let lib_version_686: string;
        let os_687: string;
        let compiler_688: string;
        utm_id_684 = in__676.readInt();
        const len_690 = Number(DeserializerPackNumber.INSTANCE.put(in__676));
        const bytes_691 = in__676.readBytes(len_690);
        blob_685 = bytes_691;
        let stringBytes_692: Uint8Array;
        const len_694 = Number(DeserializerPackNumber.INSTANCE.put(in__676));
        const bytes_695 = in__676.readBytes(len_694);
        stringBytes_692 = bytes_695;
        lib_version_686 = new TextDecoder('utf-8').decode(stringBytes_692);
        let stringBytes_696: Uint8Array;
        const len_698 = Number(DeserializerPackNumber.INSTANCE.put(in__676));
        const bytes_699 = in__676.readBytes(len_698);
        stringBytes_696 = bytes_699;
        os_687 = new TextDecoder('utf-8').decode(stringBytes_696);
        let stringBytes_700: Uint8Array;
        const len_702 = Number(DeserializerPackNumber.INSTANCE.put(in__676));
        const bytes_703 = in__676.readBytes(len_702);
        stringBytes_700 = bytes_703;
        compiler_688 = new TextDecoder('utf-8').decode(stringBytes_700);
        return new TelemetryCPP(utm_id_684, blob_685, lib_version_686, os_687, compiler_688);
        
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
    serialize(sCtx_704: MetaContext, obj_705: TelemetryCPP, _out_706: DataOut): void  {
        const typeId = typeof (obj_705 as any).getAetherTypeId === 'function' ? obj_705.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'TelemetryCPP' with invalid type id $ {
            typeId
        }
        `);
        _out_706.writeByte(typeId);
        switch(typeId)  {
            case 1: (TelemetryCPP as any).META_BODY.serialize(sCtx_704, obj_705 as any as TelemetryCPP, _out_706);
            break;
            default: throw new Error(`Cannot serialize 'TelemetryCPP' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_704: MetaContext, in__707: DataIn): TelemetryCPP  {
        const typeId = in__707.readUByte();
        switch(typeId)  {
            case 1: return (TelemetryCPP as any).META_BODY.deserialize(sCtx_704, in__707) as any as TelemetryCPP;
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
    serialize(sCtx_708: MetaContext, obj_709: Uap, _out_710: DataOut): void  {
        _out_710.writeLong(obj_709.deltaMs);
        _out_710.writeLong(obj_709.lastReadTimestamp);
        
    }
    deserialize(sCtx_708: MetaContext, in__711: DataIn): Uap  {
        let deltaMs_712: bigint;
        let lastReadTimestamp_713: bigint;
        deltaMs_712 = in__711.readLong();
        lastReadTimestamp_713 = in__711.readLong();
        return new Uap(deltaMs_712, lastReadTimestamp_713);
        
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
    serialize(sCtx_714: MetaContext, obj_715: UUIDAndCloud, _out_716: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_714, obj_715.uid, _out_716);
        Cloud.META.serialize(sCtx_714, obj_715.cloud, _out_716);
        
    }
    deserialize(sCtx_714: MetaContext, in__717: DataIn): UUIDAndCloud  {
        let uid_718: UUID;
        let cloud_719: Cloud;
        uid_718 = FastMeta.META_UUID.deserialize(sCtx_714, in__717);
        cloud_719 = Cloud.META.deserialize(sCtx_714, in__717);
        return new UUIDAndCloud(uid_718, cloud_719);
        
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
export class WebRtcSessionMetaBodyImpl implements FastMetaType<WebRtcSession>  {
    serialize(sCtx_720: MetaContext, obj_721: WebRtcSession, _out_722: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_722, obj_721.sdp.length);
        _out_722.write(obj_721.sdp);
        SerializerPackNumber.INSTANCE.put(_out_722, obj_721.candidates.length);
        for (const el_725 of obj_721.candidates)  {
            IceCandidate.META.serialize(sCtx_720, el_725, _out_722);
            
        }
        
    }
    deserialize(sCtx_720: MetaContext, in__723: DataIn): WebRtcSession  {
        let sdp_726: Uint8Array;
        let candidates_727: IceCandidate[];
        const len_729 = Number(DeserializerPackNumber.INSTANCE.put(in__723));
        const bytes_730 = in__723.readBytes(len_729);
        sdp_726 = bytes_730;
        const len_732 = Number(DeserializerPackNumber.INSTANCE.put(in__723));
        candidates_727 = new Array<IceCandidate>(len_732);
        for (let idx_731 = 0;
        idx_731 < len_732;
        idx_731++)  {
            candidates_727[idx_731] = IceCandidate.META.deserialize(sCtx_720, in__723);
            
        }
        return new WebRtcSession(sdp_726, candidates_727);
        
    }
    metaHashCode(obj: WebRtcSession | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.sdp);
        hash = 37 * hash + FastMeta.getMetaArray(IceCandidate.META).metaHashCode(obj.candidates);
        return hash | 0;
        
    }
    metaEquals(v1: WebRtcSession | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof WebRtcSession)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.sdp, v2.sdp)) return false;
        if (!FastMeta.getMetaArray(IceCandidate.META).metaEquals(v1.candidates, v2.candidates)) return false;
        return true;
        
    }
    metaToString(obj: WebRtcSession | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('WebRtcSession(');
        res.add('sdp:').add(obj.sdp);
        res.add(', ');
        res.add('candidates:').add(obj.candidates);
        res.add(')');
        
    }
    public serializeToBytes(obj: WebRtcSession): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): WebRtcSession  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): WebRtcSession  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class WorkProofBCryptMetaBodyImpl implements FastMetaType<WorkProofBCrypt>  {
    serialize(sCtx_733: MetaContext, obj_734: WorkProofBCrypt, _out_735: DataOut): void  {
        _out_735.writeByte(obj_734.costBCrypt);
        _out_735.writeByte(obj_734.poolSize);
        _out_735.writeInt(obj_734.maxHashVal);
        
    }
    deserialize(sCtx_733: MetaContext, in__736: DataIn): WorkProofBCrypt  {
        let costBCrypt_737: number;
        let poolSize_738: number;
        let maxHashVal_739: number;
        costBCrypt_737 = in__736.readByte();
        poolSize_738 = in__736.readByte();
        maxHashVal_739 = in__736.readInt();
        return new WorkProofBCrypt(costBCrypt_737, poolSize_738, maxHashVal_739);
        
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
    serialize(sCtx_740: MetaContext, obj_741: WorkProofBCrypt, _out_742: DataOut): void  {
        const typeId = typeof (obj_741 as any).getAetherTypeId === 'function' ? obj_741.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'WorkProofBCrypt' with invalid type id $ {
            typeId
        }
        `);
        _out_742.writeByte(typeId);
        switch(typeId)  {
            case 1: (WorkProofBCrypt as any).META_BODY.serialize(sCtx_740, obj_741 as any as WorkProofBCrypt, _out_742);
            break;
            default: throw new Error(`Cannot serialize 'WorkProofBCrypt' with unknown type id $ {
                typeId
            }
            `);
            
        }
        
    }
    deserialize(sCtx_740: MetaContext, in__743: DataIn): WorkProofBCrypt  {
        const typeId = in__743.readUByte();
        switch(typeId)  {
            case 1: return (WorkProofBCrypt as any).META_BODY.deserialize(sCtx_740, in__743) as any as WorkProofBCrypt;
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
    serialize(sCtx_744: MetaContext, obj_745: WorkProofDTO, _out_746: DataOut): void  {
        const stringBytes_748 = new TextEncoder().encode(obj_745.salt);
        SerializerPackNumber.INSTANCE.put(_out_746, stringBytes_748.length);
        _out_746.write(stringBytes_748);
        const stringBytes_750 = new TextEncoder().encode(obj_745.suffix);
        SerializerPackNumber.INSTANCE.put(_out_746, stringBytes_750.length);
        _out_746.write(stringBytes_750);
        _out_746.writeByte(obj_745.poolSize);
        _out_746.writeInt(obj_745.maxHashVal);
        SignedKey.META.serialize(sCtx_744, obj_745.globalKey, _out_746);
        
    }
    deserialize(sCtx_744: MetaContext, in__747: DataIn): WorkProofDTO  {
        let salt_752: string;
        let suffix_753: string;
        let poolSize_754: number;
        let maxHashVal_755: number;
        let globalKey_756: SignedKey;
        let stringBytes_757: Uint8Array;
        const len_759 = Number(DeserializerPackNumber.INSTANCE.put(in__747));
        const bytes_760 = in__747.readBytes(len_759);
        stringBytes_757 = bytes_760;
        salt_752 = new TextDecoder('utf-8').decode(stringBytes_757);
        let stringBytes_761: Uint8Array;
        const len_763 = Number(DeserializerPackNumber.INSTANCE.put(in__747));
        const bytes_764 = in__747.readBytes(len_763);
        stringBytes_761 = bytes_764;
        suffix_753 = new TextDecoder('utf-8').decode(stringBytes_761);
        poolSize_754 = in__747.readByte();
        maxHashVal_755 = in__747.readInt();
        globalKey_756 = SignedKey.META.deserialize(sCtx_744, in__747);
        return new WorkProofDTO(salt_752, suffix_753, poolSize_754, maxHashVal_755, globalKey_756);
        
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
                    let backId_766: number;
                    let data_767: LoginClientStream;
                    backId_766 = dataIn.readByte();
                    data_767 = LoginClientStream.META.deserialize(ctx, dataIn);
                    const argsNames_768: string[] = ["backId", "data"];
                    const argsValues_769: any[] = [backId_766, data_767];
                    ctx.invokeLocalMethodBefore("sendSafeApiDataMulti", argsNames_768, argsValues_769);
                    localApi.sendSafeApiDataMulti(backId_766, data_767);
                    ctx.invokeLocalMethodAfter("sendSafeApiDataMulti", null, argsNames_768, argsValues_769);
                    break;
                    
                }
                case 4:  {
                    let data_771: LoginClientStream;
                    data_771 = LoginClientStream.META.deserialize(ctx, dataIn);
                    const argsNames_772: string[] = ["data"];
                    const argsValues_773: any[] = [data_771];
                    ctx.invokeLocalMethodBefore("sendSafeApiData", argsNames_772, argsValues_773);
                    localApi.sendSafeApiData(data_771);
                    ctx.invokeLocalMethodAfter("sendSafeApiData", null, argsNames_772, argsValues_773);
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
    makeRemote(sCtx_774: MetaContext): ClientApiUnsafeRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_774.flush();
                
            }
            , getFastMetaContext: () => sCtx_774, sendSafeApiDataMulti: (backId: number, data: LoginClientStream): void =>  {
                const dataOut_776 = new DataInOut();
                dataOut_776.writeByte(3);
                const argsNames_778: string[] = ["backId", "data"];
                const argsValues_779: any[] = [backId, data];
                sCtx_774.invokeRemoteMethodAfter("sendSafeApiDataMulti", null, argsNames_778, argsValues_779);
                dataOut_776.writeByte(backId);
                LoginClientStream.META.serialize(sCtx_774, data, dataOut_776);
                sCtx_774.sendToRemote(dataOut_776.toArray());
                
            }
            , sendSafeApiData: (data: LoginClientStream): void =>  {
                const dataOut_781 = new DataInOut();
                dataOut_781.writeByte(4);
                const argsNames_783: string[] = ["data"];
                const argsValues_784: any[] = [data];
                sCtx_774.invokeRemoteMethodAfter("sendSafeApiData", null, argsNames_783, argsValues_784);
                LoginClientStream.META.serialize(sCtx_774, data, dataOut_781);
                sCtx_774.sendToRemote(dataOut_781.toArray());
                
            }
            , openSendSafeApiDataMulti(backId: number, factory: (api: ClientApiSafeRemote) => any, converter: BytesConverter, ...keys: any[]): ClientApiSafeRemote  {
                return sCtx_774.findContext(ctx =>  {
                    ctx.onFlushData(data => this.sendSafeApiDataMulti(backId, LoginClientStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((ClientApiSafe as any).META));
                    
                }
                , ...keys).makeRemote((ClientApiSafe as any).META) as ClientApiSafeRemote;
                
            }
            , openSendSafeApiData(factory: (api: ClientApiSafeRemote) => any, converter: BytesConverter, ...keys: any[]): ClientApiSafeRemote  {
                return sCtx_774.findContext(ctx =>  {
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
                    let uid_786: UUID;
                    uid_786 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_787: string[] = ["uid"];
                    const argsValues_788: any[] = [uid_786];
                    ctx.invokeLocalMethodBefore("changeParent", argsNames_787, argsValues_788);
                    localApi.changeParent(uid_786);
                    ctx.invokeLocalMethodAfter("changeParent", null, argsNames_787, argsValues_788);
                    break;
                    
                }
                case 4:  {
                    let alias_790: UUID;
                    alias_790 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_791: string[] = ["alias"];
                    const argsValues_792: any[] = [alias_790];
                    ctx.invokeLocalMethodBefore("changeAlias", argsNames_791, argsValues_792);
                    localApi.changeAlias(alias_790);
                    ctx.invokeLocalMethodAfter("changeAlias", null, argsNames_791, argsValues_792);
                    break;
                    
                }
                case 5:  {
                    let uids_794: UUID[];
                    const len_796 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_794 = new Array<UUID>(len_796);
                    for (let idx_795 = 0;
                    idx_795 < len_796;
                    idx_795++)  {
                        uids_794[idx_795] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_797: string[] = ["uids"];
                    const argsValues_798: any[] = [uids_794];
                    ctx.invokeLocalMethodBefore("newChildren", argsNames_797, argsValues_798);
                    localApi.newChildren(uids_794);
                    ctx.invokeLocalMethodAfter("newChildren", null, argsNames_797, argsValues_798);
                    break;
                    
                }
                case 6:  {
                    let msg_800: Message[];
                    const len_802 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_800 = new Array<Message>(len_802);
                    for (let idx_801 = 0;
                    idx_801 < len_802;
                    idx_801++)  {
                        msg_800[idx_801] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_803: string[] = ["msg"];
                    const argsValues_804: any[] = [msg_800];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_803, argsValues_804);
                    localApi.sendMessages(msg_800);
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_803, argsValues_804);
                    break;
                    
                }
                case 7:  {
                    let serverDescriptor_806: ServerDescriptor;
                    serverDescriptor_806 = ServerDescriptor.META.deserialize(ctx, dataIn);
                    const argsNames_807: string[] = ["serverDescriptor"];
                    const argsValues_808: any[] = [serverDescriptor_806];
                    ctx.invokeLocalMethodBefore("sendServerDescriptor", argsNames_807, argsValues_808);
                    localApi.sendServerDescriptor(serverDescriptor_806);
                    ctx.invokeLocalMethodAfter("sendServerDescriptor", null, argsNames_807, argsValues_808);
                    break;
                    
                }
                case 8:  {
                    let serverDescriptors_810: ServerDescriptor[];
                    const len_812 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    serverDescriptors_810 = new Array<ServerDescriptor>(len_812);
                    for (let idx_811 = 0;
                    idx_811 < len_812;
                    idx_811++)  {
                        serverDescriptors_810[idx_811] = ServerDescriptor.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_813: string[] = ["serverDescriptors"];
                    const argsValues_814: any[] = [serverDescriptors_810];
                    ctx.invokeLocalMethodBefore("sendServerDescriptors", argsNames_813, argsValues_814);
                    localApi.sendServerDescriptors(serverDescriptors_810);
                    ctx.invokeLocalMethodAfter("sendServerDescriptors", null, argsNames_813, argsValues_814);
                    break;
                    
                }
                case 9:  {
                    let uidAndCloud_816: UUIDAndCloud;
                    uidAndCloud_816 = UUIDAndCloud.META.deserialize(ctx, dataIn);
                    const argsNames_817: string[] = ["uidAndCloud"];
                    const argsValues_818: any[] = [uidAndCloud_816];
                    ctx.invokeLocalMethodBefore("sendCloud", argsNames_817, argsValues_818);
                    localApi.sendCloud(uidAndCloud_816);
                    ctx.invokeLocalMethodAfter("sendCloud", null, argsNames_817, argsValues_818);
                    break;
                    
                }
                case 10:  {
                    let clouds_820: UUIDAndCloud[];
                    const len_822 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    clouds_820 = new Array<UUIDAndCloud>(len_822);
                    for (let idx_821 = 0;
                    idx_821 < len_822;
                    idx_821++)  {
                        clouds_820[idx_821] = UUIDAndCloud.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_823: string[] = ["clouds"];
                    const argsValues_824: any[] = [clouds_820];
                    ctx.invokeLocalMethodBefore("sendClouds", argsNames_823, argsValues_824);
                    localApi.sendClouds(clouds_820);
                    ctx.invokeLocalMethodAfter("sendClouds", null, argsNames_823, argsValues_824);
                    break;
                    
                }
                case 11:  {
                    const argsNames_826: string[] = [];
                    const argsValues_827: any[] = [];
                    ctx.invokeLocalMethodBefore("requestTelemetry", argsNames_826, argsValues_827);
                    localApi.requestTelemetry();
                    ctx.invokeLocalMethodAfter("requestTelemetry", null, argsNames_826, argsValues_827);
                    break;
                    
                }
                case 12:  {
                    let groups_829: AccessGroup[];
                    const len_831 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_829 = new Array<AccessGroup>(len_831);
                    for (let idx_830 = 0;
                    idx_830 < len_831;
                    idx_830++)  {
                        groups_829[idx_830] = AccessGroup.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_832: string[] = ["groups"];
                    const argsValues_833: any[] = [groups_829];
                    ctx.invokeLocalMethodBefore("sendAccessGroups", argsNames_832, argsValues_833);
                    localApi.sendAccessGroups(groups_829);
                    ctx.invokeLocalMethodAfter("sendAccessGroups", null, argsNames_832, argsValues_833);
                    break;
                    
                }
                case 13:  {
                    let uid_835: UUID;
                    let groups_836: bigint[];
                    uid_835 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_838 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_836 = new Array<bigint>(len_838);
                    for (let idx_837 = 0;
                    idx_837 < len_838;
                    idx_837++)  {
                        groups_836[idx_837] = dataIn.readLong();
                        
                    }
                    const argsNames_839: string[] = ["uid", "groups"];
                    const argsValues_840: any[] = [uid_835, groups_836];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_839, argsValues_840);
                    localApi.sendAccessGroupForClient(uid_835, groups_836);
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_839, argsValues_840);
                    break;
                    
                }
                case 14:  {
                    let id_842: bigint;
                    let groups_843: UUID[];
                    id_842 = dataIn.readLong();
                    const len_845 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_843 = new Array<UUID>(len_845);
                    for (let idx_844 = 0;
                    idx_844 < len_845;
                    idx_844++)  {
                        groups_843[idx_844] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_846: string[] = ["id", "groups"];
                    const argsValues_847: any[] = [id_842, groups_843];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_846, argsValues_847);
                    localApi.addItemsToAccessGroup(id_842, groups_843);
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_846, argsValues_847);
                    break;
                    
                }
                case 15:  {
                    let id_849: bigint;
                    let groups_850: UUID[];
                    id_849 = dataIn.readLong();
                    const len_852 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_850 = new Array<UUID>(len_852);
                    for (let idx_851 = 0;
                    idx_851 < len_852;
                    idx_851++)  {
                        groups_850[idx_851] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_853: string[] = ["id", "groups"];
                    const argsValues_854: any[] = [id_849, groups_850];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_853, argsValues_854);
                    localApi.removeItemsFromAccessGroup(id_849, groups_850);
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_853, argsValues_854);
                    break;
                    
                }
                case 16:  {
                    let uid_856: UUID;
                    let groups_857: bigint[];
                    uid_856 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_859 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_857 = new Array<bigint>(len_859);
                    for (let idx_858 = 0;
                    idx_858 < len_859;
                    idx_858++)  {
                        groups_857[idx_858] = dataIn.readLong();
                        
                    }
                    const argsNames_860: string[] = ["uid", "groups"];
                    const argsValues_861: any[] = [uid_856, groups_857];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_860, argsValues_861);
                    localApi.addAccessGroupsToClient(uid_856, groups_857);
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_860, argsValues_861);
                    break;
                    
                }
                case 17:  {
                    let uid_863: UUID;
                    let groups_864: bigint[];
                    uid_863 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_866 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_864 = new Array<bigint>(len_866);
                    for (let idx_865 = 0;
                    idx_865 < len_866;
                    idx_865++)  {
                        groups_864[idx_865] = dataIn.readLong();
                        
                    }
                    const argsNames_867: string[] = ["uid", "groups"];
                    const argsValues_868: any[] = [uid_863, groups_864];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_867, argsValues_868);
                    localApi.removeAccessGroupsFromClient(uid_863, groups_864);
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_867, argsValues_868);
                    break;
                    
                }
                case 18:  {
                    let uid_870: UUID;
                    let accessedClients_871: UUID[];
                    uid_870 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_873 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    accessedClients_871 = new Array<UUID>(len_873);
                    for (let idx_872 = 0;
                    idx_872 < len_873;
                    idx_872++)  {
                        accessedClients_871[idx_872] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_874: string[] = ["uid", "accessedClients"];
                    const argsValues_875: any[] = [uid_870, accessedClients_871];
                    ctx.invokeLocalMethodBefore("sendAllAccessedClients", argsNames_874, argsValues_875);
                    localApi.sendAllAccessedClients(uid_870, accessedClients_871);
                    ctx.invokeLocalMethodAfter("sendAllAccessedClients", null, argsNames_874, argsValues_875);
                    break;
                    
                }
                case 19:  {
                    let results_877: AccessCheckResult[];
                    const len_879 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    results_877 = new Array<AccessCheckResult>(len_879);
                    for (let idx_878 = 0;
                    idx_878 < len_879;
                    idx_878++)  {
                        results_877[idx_878] = AccessCheckResult.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_880: string[] = ["results"];
                    const argsValues_881: any[] = [results_877];
                    ctx.invokeLocalMethodBefore("sendAccessCheckResults", argsNames_880, argsValues_881);
                    localApi.sendAccessCheckResults(results_877);
                    ctx.invokeLocalMethodAfter("sendAccessCheckResults", null, argsNames_880, argsValues_881);
                    break;
                    
                }
                case 20:  {
                    let msg_883: Message;
                    msg_883 = Message.META.deserialize(ctx, dataIn);
                    const argsNames_884: string[] = ["msg"];
                    const argsValues_885: any[] = [msg_883];
                    ctx.invokeLocalMethodBefore("sendMessage", argsNames_884, argsValues_885);
                    localApi.sendMessage(msg_883);
                    ctx.invokeLocalMethodAfter("sendMessage", null, argsNames_884, argsValues_885);
                    break;
                    
                }
                case 21:  {
                    let configs_887: CloudConfig[];
                    const len_889 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    configs_887 = new Array<CloudConfig>(len_889);
                    for (let idx_888 = 0;
                    idx_888 < len_889;
                    idx_888++)  {
                        configs_887[idx_888] = CloudConfig.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_890: string[] = ["configs"];
                    const argsValues_891: any[] = [configs_887];
                    ctx.invokeLocalMethodBefore("sendCloudConfigs", argsNames_890, argsValues_891);
                    localApi.sendCloudConfigs(configs_887);
                    ctx.invokeLocalMethodAfter("sendCloudConfigs", null, argsNames_890, argsValues_891);
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
    makeRemote(sCtx_892: MetaContext): ClientApiSafeRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_892.flush();
                
            }
            , getFastMetaContext: () => sCtx_892, changeParent: (uid: UUID): void =>  {
                const dataOut_894 = new DataInOut();
                dataOut_894.writeByte(3);
                const argsNames_896: string[] = ["uid"];
                const argsValues_897: any[] = [uid];
                sCtx_892.invokeRemoteMethodAfter("changeParent", null, argsNames_896, argsValues_897);
                FastMeta.META_UUID.serialize(sCtx_892, uid, dataOut_894);
                sCtx_892.sendToRemote(dataOut_894.toArray());
                
            }
            , changeAlias: (alias: UUID): void =>  {
                const dataOut_899 = new DataInOut();
                dataOut_899.writeByte(4);
                const argsNames_901: string[] = ["alias"];
                const argsValues_902: any[] = [alias];
                sCtx_892.invokeRemoteMethodAfter("changeAlias", null, argsNames_901, argsValues_902);
                FastMeta.META_UUID.serialize(sCtx_892, alias, dataOut_899);
                sCtx_892.sendToRemote(dataOut_899.toArray());
                
            }
            , newChildren: (uids: UUID[]): void =>  {
                const dataOut_904 = new DataInOut();
                dataOut_904.writeByte(5);
                const argsNames_906: string[] = ["uids"];
                const argsValues_907: any[] = [uids];
                sCtx_892.invokeRemoteMethodAfter("newChildren", null, argsNames_906, argsValues_907);
                SerializerPackNumber.INSTANCE.put(dataOut_904, uids.length);
                for (const el_908 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_892, el_908, dataOut_904);
                    
                }
                sCtx_892.sendToRemote(dataOut_904.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_910 = new DataInOut();
                dataOut_910.writeByte(6);
                const argsNames_912: string[] = ["msg"];
                const argsValues_913: any[] = [msg];
                sCtx_892.invokeRemoteMethodAfter("sendMessages", null, argsNames_912, argsValues_913);
                SerializerPackNumber.INSTANCE.put(dataOut_910, msg.length);
                for (const el_914 of msg)  {
                    Message.META.serialize(sCtx_892, el_914, dataOut_910);
                    
                }
                sCtx_892.sendToRemote(dataOut_910.toArray());
                
            }
            , sendServerDescriptor: (serverDescriptor: ServerDescriptor): void =>  {
                const dataOut_916 = new DataInOut();
                dataOut_916.writeByte(7);
                const argsNames_918: string[] = ["serverDescriptor"];
                const argsValues_919: any[] = [serverDescriptor];
                sCtx_892.invokeRemoteMethodAfter("sendServerDescriptor", null, argsNames_918, argsValues_919);
                ServerDescriptor.META.serialize(sCtx_892, serverDescriptor, dataOut_916);
                sCtx_892.sendToRemote(dataOut_916.toArray());
                
            }
            , sendServerDescriptors: (serverDescriptors: ServerDescriptor[]): void =>  {
                const dataOut_921 = new DataInOut();
                dataOut_921.writeByte(8);
                const argsNames_923: string[] = ["serverDescriptors"];
                const argsValues_924: any[] = [serverDescriptors];
                sCtx_892.invokeRemoteMethodAfter("sendServerDescriptors", null, argsNames_923, argsValues_924);
                SerializerPackNumber.INSTANCE.put(dataOut_921, serverDescriptors.length);
                for (const el_925 of serverDescriptors)  {
                    ServerDescriptor.META.serialize(sCtx_892, el_925, dataOut_921);
                    
                }
                sCtx_892.sendToRemote(dataOut_921.toArray());
                
            }
            , sendCloud: (uidAndCloud: UUIDAndCloud): void =>  {
                const dataOut_927 = new DataInOut();
                dataOut_927.writeByte(9);
                const argsNames_929: string[] = ["uidAndCloud"];
                const argsValues_930: any[] = [uidAndCloud];
                sCtx_892.invokeRemoteMethodAfter("sendCloud", null, argsNames_929, argsValues_930);
                UUIDAndCloud.META.serialize(sCtx_892, uidAndCloud, dataOut_927);
                sCtx_892.sendToRemote(dataOut_927.toArray());
                
            }
            , sendClouds: (clouds: UUIDAndCloud[]): void =>  {
                const dataOut_932 = new DataInOut();
                dataOut_932.writeByte(10);
                const argsNames_934: string[] = ["clouds"];
                const argsValues_935: any[] = [clouds];
                sCtx_892.invokeRemoteMethodAfter("sendClouds", null, argsNames_934, argsValues_935);
                SerializerPackNumber.INSTANCE.put(dataOut_932, clouds.length);
                for (const el_936 of clouds)  {
                    UUIDAndCloud.META.serialize(sCtx_892, el_936, dataOut_932);
                    
                }
                sCtx_892.sendToRemote(dataOut_932.toArray());
                
            }
            , requestTelemetry: (): void =>  {
                const dataOut_938 = new DataInOut();
                dataOut_938.writeByte(11);
                const argsNames_940: string[] = [];
                const argsValues_941: any[] = [];
                sCtx_892.invokeRemoteMethodAfter("requestTelemetry", null, argsNames_940, argsValues_941);
                sCtx_892.sendToRemote(dataOut_938.toArray());
                
            }
            , sendAccessGroups: (groups: AccessGroup[]): void =>  {
                const dataOut_943 = new DataInOut();
                dataOut_943.writeByte(12);
                const argsNames_945: string[] = ["groups"];
                const argsValues_946: any[] = [groups];
                sCtx_892.invokeRemoteMethodAfter("sendAccessGroups", null, argsNames_945, argsValues_946);
                SerializerPackNumber.INSTANCE.put(dataOut_943, groups.length);
                for (const el_947 of groups)  {
                    AccessGroup.META.serialize(sCtx_892, el_947, dataOut_943);
                    
                }
                sCtx_892.sendToRemote(dataOut_943.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_949 = new DataInOut();
                dataOut_949.writeByte(13);
                const argsNames_951: string[] = ["uid", "groups"];
                const argsValues_952: any[] = [uid, groups];
                sCtx_892.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_951, argsValues_952);
                FastMeta.META_UUID.serialize(sCtx_892, uid, dataOut_949);
                SerializerPackNumber.INSTANCE.put(dataOut_949, groups.length);
                for (const el_953 of groups)  {
                    dataOut_949.writeLong(el_953);
                    
                }
                sCtx_892.sendToRemote(dataOut_949.toArray());
                
            }
            , addItemsToAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_955 = new DataInOut();
                dataOut_955.writeByte(14);
                const argsNames_957: string[] = ["id", "groups"];
                const argsValues_958: any[] = [id, groups];
                sCtx_892.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_957, argsValues_958);
                dataOut_955.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_955, groups.length);
                for (const el_959 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_892, el_959, dataOut_955);
                    
                }
                sCtx_892.sendToRemote(dataOut_955.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_961 = new DataInOut();
                dataOut_961.writeByte(15);
                const argsNames_963: string[] = ["id", "groups"];
                const argsValues_964: any[] = [id, groups];
                sCtx_892.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_963, argsValues_964);
                dataOut_961.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_961, groups.length);
                for (const el_965 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_892, el_965, dataOut_961);
                    
                }
                sCtx_892.sendToRemote(dataOut_961.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_967 = new DataInOut();
                dataOut_967.writeByte(16);
                const argsNames_969: string[] = ["uid", "groups"];
                const argsValues_970: any[] = [uid, groups];
                sCtx_892.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_969, argsValues_970);
                FastMeta.META_UUID.serialize(sCtx_892, uid, dataOut_967);
                SerializerPackNumber.INSTANCE.put(dataOut_967, groups.length);
                for (const el_971 of groups)  {
                    dataOut_967.writeLong(el_971);
                    
                }
                sCtx_892.sendToRemote(dataOut_967.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_973 = new DataInOut();
                dataOut_973.writeByte(17);
                const argsNames_975: string[] = ["uid", "groups"];
                const argsValues_976: any[] = [uid, groups];
                sCtx_892.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_975, argsValues_976);
                FastMeta.META_UUID.serialize(sCtx_892, uid, dataOut_973);
                SerializerPackNumber.INSTANCE.put(dataOut_973, groups.length);
                for (const el_977 of groups)  {
                    dataOut_973.writeLong(el_977);
                    
                }
                sCtx_892.sendToRemote(dataOut_973.toArray());
                
            }
            , sendAllAccessedClients: (uid: UUID, accessedClients: UUID[]): void =>  {
                const dataOut_979 = new DataInOut();
                dataOut_979.writeByte(18);
                const argsNames_981: string[] = ["uid", "accessedClients"];
                const argsValues_982: any[] = [uid, accessedClients];
                sCtx_892.invokeRemoteMethodAfter("sendAllAccessedClients", null, argsNames_981, argsValues_982);
                FastMeta.META_UUID.serialize(sCtx_892, uid, dataOut_979);
                SerializerPackNumber.INSTANCE.put(dataOut_979, accessedClients.length);
                for (const el_983 of accessedClients)  {
                    FastMeta.META_UUID.serialize(sCtx_892, el_983, dataOut_979);
                    
                }
                sCtx_892.sendToRemote(dataOut_979.toArray());
                
            }
            , sendAccessCheckResults: (results: AccessCheckResult[]): void =>  {
                const dataOut_985 = new DataInOut();
                dataOut_985.writeByte(19);
                const argsNames_987: string[] = ["results"];
                const argsValues_988: any[] = [results];
                sCtx_892.invokeRemoteMethodAfter("sendAccessCheckResults", null, argsNames_987, argsValues_988);
                SerializerPackNumber.INSTANCE.put(dataOut_985, results.length);
                for (const el_989 of results)  {
                    AccessCheckResult.META.serialize(sCtx_892, el_989, dataOut_985);
                    
                }
                sCtx_892.sendToRemote(dataOut_985.toArray());
                
            }
            , sendMessage: (msg: Message): void =>  {
                const dataOut_991 = new DataInOut();
                dataOut_991.writeByte(20);
                const argsNames_993: string[] = ["msg"];
                const argsValues_994: any[] = [msg];
                sCtx_892.invokeRemoteMethodAfter("sendMessage", null, argsNames_993, argsValues_994);
                Message.META.serialize(sCtx_892, msg, dataOut_991);
                sCtx_892.sendToRemote(dataOut_991.toArray());
                
            }
            , sendCloudConfigs: (configs: CloudConfig[]): void =>  {
                const dataOut_996 = new DataInOut();
                dataOut_996.writeByte(21);
                const argsNames_998: string[] = ["configs"];
                const argsValues_999: any[] = [configs];
                sCtx_892.invokeRemoteMethodAfter("sendCloudConfigs", null, argsNames_998, argsValues_999);
                SerializerPackNumber.INSTANCE.put(dataOut_996, configs.length);
                for (const el_1000 of configs)  {
                    CloudConfig.META.serialize(sCtx_892, el_1000, dataOut_996);
                    
                }
                sCtx_892.sendToRemote(dataOut_996.toArray());
                
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
                    let id_1002: number;
                    id_1002 = dataIn.readByte();
                    const argsNames_1003: string[] = ["id"];
                    const argsValues_1004: any[] = [id_1002];
                    ctx.invokeLocalMethodBefore("backId", argsNames_1003, argsValues_1004);
                    localApi.backId(id_1002);
                    ctx.invokeLocalMethodAfter("backId", null, argsNames_1003, argsValues_1004);
                    break;
                    
                }
                case 4:  {
                    const reqId_1005 = dataIn.readInt();
                    let nextConnectMsDuration_1006: bigint;
                    let rxWindowMs_1007: bigint;
                    nextConnectMsDuration_1006 = dataIn.readLong();
                    rxWindowMs_1007 = dataIn.readLong();
                    const argsNames_1008: string[] = ["nextConnectMsDuration", "rxWindowMs"];
                    const argsValues_1009: any[] = [nextConnectMsDuration_1006, rxWindowMs_1007];
                    ctx.invokeLocalMethodBefore("ping", argsNames_1008, argsValues_1009);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.ping(nextConnectMsDuration_1006, rxWindowMs_1007);
                    ctx.invokeLocalMethodAfter("ping", resultFuture, argsNames_1008, argsValues_1009);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1005);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    let uid_1011: UUID;
                    let stream_1012: ClientApiStream;
                    uid_1011 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    stream_1012 = ClientApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_1013: string[] = ["uid", "stream"];
                    const argsValues_1014: any[] = [uid_1011, stream_1012];
                    ctx.invokeLocalMethodBefore("client", argsNames_1013, argsValues_1014);
                    localApi.client(uid_1011, stream_1012);
                    ctx.invokeLocalMethodAfter("client", null, argsNames_1013, argsValues_1014);
                    break;
                    
                }
                case 6:  {
                    let msg_1016: Message;
                    msg_1016 = Message.META.deserialize(ctx, dataIn);
                    const argsNames_1017: string[] = ["msg"];
                    const argsValues_1018: any[] = [msg_1016];
                    ctx.invokeLocalMethodBefore("sendMessage", argsNames_1017, argsValues_1018);
                    localApi.sendMessage(msg_1016);
                    ctx.invokeLocalMethodAfter("sendMessage", null, argsNames_1017, argsValues_1018);
                    break;
                    
                }
                case 7:  {
                    let msg_1020: Message[];
                    const len_1022 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_1020 = new Array<Message>(len_1022);
                    for (let idx_1021 = 0;
                    idx_1021 < len_1022;
                    idx_1021++)  {
                        msg_1020[idx_1021] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1023: string[] = ["msg"];
                    const argsValues_1024: any[] = [msg_1020];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_1023, argsValues_1024);
                    localApi.sendMessages(msg_1020);
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_1023, argsValues_1024);
                    break;
                    
                }
                case 37:  {
                    let uids_1026: UUID[];
                    let data_1027: Uint8Array;
                    const len_1029 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1026 = new Array<UUID>(len_1029);
                    for (let idx_1028 = 0;
                    idx_1028 < len_1029;
                    idx_1028++)  {
                        uids_1026[idx_1028] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const len_1031 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1032 = dataIn.readBytes(len_1031);
                    data_1027 = bytes_1032;
                    const argsNames_1033: string[] = ["uids", "data"];
                    const argsValues_1034: any[] = [uids_1026, data_1027];
                    ctx.invokeLocalMethodBefore("sendMulticast", argsNames_1033, argsValues_1034);
                    localApi.sendMulticast(uids_1026, data_1027);
                    ctx.invokeLocalMethodAfter("sendMulticast", null, argsNames_1033, argsValues_1034);
                    break;
                    
                }
                case 39:  {
                    const reqId_1035 = dataIn.readInt();
                    let msg_1036: Message;
                    msg_1036 = Message.META.deserialize(ctx, dataIn);
                    const argsNames_1037: string[] = ["msg"];
                    const argsValues_1038: any[] = [msg_1036];
                    ctx.invokeLocalMethodBefore("sendMessageWithResult", argsNames_1037, argsValues_1038);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.sendMessageWithResult(msg_1036);
                    ctx.invokeLocalMethodAfter("sendMessageWithResult", resultFuture, argsNames_1037, argsValues_1038);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1035);
                        
                    }
                    );
                    break;
                    
                }
                case 8:  {
                    const reqId_1039 = dataIn.readInt();
                    let owner_1040: UUID;
                    let uids_1041: UUID[];
                    owner_1040 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1043 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1041 = new Array<UUID>(len_1043);
                    for (let idx_1042 = 0;
                    idx_1042 < len_1043;
                    idx_1042++)  {
                        uids_1041[idx_1042] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1044: string[] = ["owner", "uids"];
                    const argsValues_1045: any[] = [owner_1040, uids_1041];
                    ctx.invokeLocalMethodBefore("createAccessGroup", argsNames_1044, argsValues_1045);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.createAccessGroup(owner_1040, uids_1041);
                    ctx.invokeLocalMethodAfter("createAccessGroup", resultFuture, argsNames_1044, argsValues_1045);
                    resultFuture.to((v_1047: bigint) =>  {
                        const data_1046 = new DataInOut();
                        data_1046.writeLong(v_1047);
                        ctx.sendResultToRemote(reqId_1039, data_1046.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_1048 = dataIn.readInt();
                    let groupId_1049: bigint;
                    let uid_1050: UUID;
                    groupId_1049 = dataIn.readLong();
                    uid_1050 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1051: string[] = ["groupId", "uid"];
                    const argsValues_1052: any[] = [groupId_1049, uid_1050];
                    ctx.invokeLocalMethodBefore("addToAccessGroup", argsNames_1051, argsValues_1052);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.addToAccessGroup(groupId_1049, uid_1050);
                    ctx.invokeLocalMethodAfter("addToAccessGroup", resultFuture, argsNames_1051, argsValues_1052);
                    resultFuture.to((v_1054: boolean) =>  {
                        const data_1053 = new DataInOut();
                        data_1053.writeBoolean(v_1054);
                        ctx.sendResultToRemote(reqId_1048, data_1053.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_1055 = dataIn.readInt();
                    let groupId_1056: bigint;
                    let uid_1057: UUID;
                    groupId_1056 = dataIn.readLong();
                    uid_1057 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1058: string[] = ["groupId", "uid"];
                    const argsValues_1059: any[] = [groupId_1056, uid_1057];
                    ctx.invokeLocalMethodBefore("removeFromAccessGroup", argsNames_1058, argsValues_1059);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.removeFromAccessGroup(groupId_1056, uid_1057);
                    ctx.invokeLocalMethodAfter("removeFromAccessGroup", resultFuture, argsNames_1058, argsValues_1059);
                    resultFuture.to((v_1061: boolean) =>  {
                        const data_1060 = new DataInOut();
                        data_1060.writeBoolean(v_1061);
                        ctx.sendResultToRemote(reqId_1055, data_1060.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_1062 = dataIn.readInt();
                    let uid_1063: UUID;
                    uid_1063 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1064: string[] = ["uid"];
                    const argsValues_1065: any[] = [uid_1063];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage", argsNames_1064, argsValues_1065);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.checkAccessForSendMessage(uid_1063);
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage", resultFuture, argsNames_1064, argsValues_1065);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1062);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    let sid_1067: number[];
                    const len_1069 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    sid_1067 = new Array<number>(len_1069);
                    for (let idx_1068 = 0;
                    idx_1068 < len_1069;
                    idx_1068++)  {
                        sid_1067[idx_1068] = dataIn.readShort();
                        
                    }
                    const argsNames_1070: string[] = ["sid"];
                    const argsValues_1071: any[] = [sid_1067];
                    ctx.invokeLocalMethodBefore("resolverServers", argsNames_1070, argsValues_1071);
                    localApi.resolverServers(sid_1067);
                    ctx.invokeLocalMethodAfter("resolverServers", null, argsNames_1070, argsValues_1071);
                    break;
                    
                }
                case 13:  {
                    let uids_1073: UUID[];
                    const len_1075 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1073 = new Array<UUID>(len_1075);
                    for (let idx_1074 = 0;
                    idx_1074 < len_1075;
                    idx_1074++)  {
                        uids_1073[idx_1074] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1076: string[] = ["uids"];
                    const argsValues_1077: any[] = [uids_1073];
                    ctx.invokeLocalMethodBefore("resolveClouds", argsNames_1076, argsValues_1077);
                    localApi.resolveClouds(uids_1073);
                    ctx.invokeLocalMethodAfter("resolveClouds", null, argsNames_1076, argsValues_1077);
                    break;
                    
                }
                case 38:  {
                    let configs_1079: AppliedConfig[];
                    const len_1081 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    configs_1079 = new Array<AppliedConfig>(len_1081);
                    for (let idx_1080 = 0;
                    idx_1080 < len_1081;
                    idx_1080++)  {
                        configs_1079[idx_1080] = AppliedConfig.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1082: string[] = ["configs"];
                    const argsValues_1083: any[] = [configs_1079];
                    ctx.invokeLocalMethodBefore("reportAppliedConfig", argsNames_1082, argsValues_1083);
                    localApi.reportAppliedConfig(configs_1079);
                    ctx.invokeLocalMethodAfter("reportAppliedConfig", null, argsNames_1082, argsValues_1083);
                    break;
                    
                }
                case 14:  {
                    const reqId_1084 = dataIn.readInt();
                    let uid_1085: UUID;
                    uid_1085 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1086: string[] = ["uid"];
                    const argsValues_1087: any[] = [uid_1085];
                    ctx.invokeLocalMethodBefore("getAccessGroups", argsNames_1086, argsValues_1087);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAccessGroups(uid_1085);
                    ctx.invokeLocalMethodAfter("getAccessGroups", resultFuture, argsNames_1086, argsValues_1087);
                    resultFuture.to((v_1089: bigint[]) =>  {
                        const data_1088 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1088, v_1089.length);
                        for (const el_1090 of v_1089)  {
                            data_1088.writeLong(el_1090);
                            
                        }
                        ctx.sendResultToRemote(reqId_1084, data_1088.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_1091 = dataIn.readInt();
                    let groupId_1092: bigint;
                    groupId_1092 = dataIn.readLong();
                    const argsNames_1093: string[] = ["groupId"];
                    const argsValues_1094: any[] = [groupId_1092];
                    ctx.invokeLocalMethodBefore("getAccessGroup", argsNames_1093, argsValues_1094);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAccessGroup(groupId_1092);
                    ctx.invokeLocalMethodAfter("getAccessGroup", resultFuture, argsNames_1093, argsValues_1094);
                    resultFuture.to((v_1096: AccessGroup) =>  {
                        const data_1095 = new DataInOut();
                        AccessGroup.META.serialize(ctx, v_1096, data_1095);
                        ctx.sendResultToRemote(reqId_1091, data_1095.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 16:  {
                    const reqId_1097 = dataIn.readInt();
                    let uid_1098: UUID;
                    uid_1098 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1099: string[] = ["uid"];
                    const argsValues_1100: any[] = [uid_1098];
                    ctx.invokeLocalMethodBefore("getAllAccessedClients", argsNames_1099, argsValues_1100);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAllAccessedClients(uid_1098);
                    ctx.invokeLocalMethodAfter("getAllAccessedClients", resultFuture, argsNames_1099, argsValues_1100);
                    resultFuture.to((v_1102: UUID[]) =>  {
                        const data_1101 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1101, v_1102.length);
                        for (const el_1103 of v_1102)  {
                            FastMeta.META_UUID.serialize(ctx, el_1103, data_1101);
                            
                        }
                        ctx.sendResultToRemote(reqId_1097, data_1101.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 17:  {
                    const reqId_1104 = dataIn.readInt();
                    let uid1_1105: UUID;
                    let uid2_1106: UUID;
                    uid1_1105 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid2_1106 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1107: string[] = ["uid1", "uid2"];
                    const argsValues_1108: any[] = [uid1_1105, uid2_1106];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage2", argsNames_1107, argsValues_1108);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.checkAccessForSendMessage2(uid1_1105, uid2_1106);
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage2", resultFuture, argsNames_1107, argsValues_1108);
                    resultFuture.to((v_1110: boolean) =>  {
                        const data_1109 = new DataInOut();
                        data_1109.writeBoolean(v_1110);
                        ctx.sendResultToRemote(reqId_1104, data_1109.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 18:  {
                    let telemetry_1112: Telemetry;
                    telemetry_1112 = Telemetry.META.deserialize(ctx, dataIn);
                    const argsNames_1113: string[] = ["telemetry"];
                    const argsValues_1114: any[] = [telemetry_1112];
                    ctx.invokeLocalMethodBefore("sendTelemetry", argsNames_1113, argsValues_1114);
                    localApi.sendTelemetry(telemetry_1112);
                    ctx.invokeLocalMethodAfter("sendTelemetry", null, argsNames_1113, argsValues_1114);
                    break;
                    
                }
                case 19:  {
                    let uids_1116: UUID[];
                    const len_1118 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1116 = new Array<UUID>(len_1118);
                    for (let idx_1117 = 0;
                    idx_1117 < len_1118;
                    idx_1117++)  {
                        uids_1116[idx_1117] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1119: string[] = ["uids"];
                    const argsValues_1120: any[] = [uids_1116];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsForClients", argsNames_1119, argsValues_1120);
                    localApi.requestAccessGroupsForClients(uids_1116);
                    ctx.invokeLocalMethodAfter("requestAccessGroupsForClients", null, argsNames_1119, argsValues_1120);
                    break;
                    
                }
                case 20:  {
                    let ids_1122: bigint[];
                    const len_1124 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    ids_1122 = new Array<bigint>(len_1124);
                    for (let idx_1123 = 0;
                    idx_1123 < len_1124;
                    idx_1123++)  {
                        ids_1122[idx_1123] = dataIn.readLong();
                        
                    }
                    const argsNames_1125: string[] = ["ids"];
                    const argsValues_1126: any[] = [ids_1122];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsItems", argsNames_1125, argsValues_1126);
                    localApi.requestAccessGroupsItems(ids_1122);
                    ctx.invokeLocalMethodAfter("requestAccessGroupsItems", null, argsNames_1125, argsValues_1126);
                    break;
                    
                }
                case 22:  {
                    let uid_1128: UUID;
                    let groups_1129: bigint[];
                    uid_1128 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1131 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1129 = new Array<bigint>(len_1131);
                    for (let idx_1130 = 0;
                    idx_1130 < len_1131;
                    idx_1130++)  {
                        groups_1129[idx_1130] = dataIn.readLong();
                        
                    }
                    const argsNames_1132: string[] = ["uid", "groups"];
                    const argsValues_1133: any[] = [uid_1128, groups_1129];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_1132, argsValues_1133);
                    localApi.sendAccessGroupForClient(uid_1128, groups_1129);
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_1132, argsValues_1133);
                    break;
                    
                }
                case 23:  {
                    let id_1135: bigint;
                    let groups_1136: UUID[];
                    id_1135 = dataIn.readLong();
                    const len_1138 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1136 = new Array<UUID>(len_1138);
                    for (let idx_1137 = 0;
                    idx_1137 < len_1138;
                    idx_1137++)  {
                        groups_1136[idx_1137] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1139: string[] = ["id", "groups"];
                    const argsValues_1140: any[] = [id_1135, groups_1136];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_1139, argsValues_1140);
                    localApi.addItemsToAccessGroup(id_1135, groups_1136);
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_1139, argsValues_1140);
                    break;
                    
                }
                case 24:  {
                    let id_1142: bigint;
                    let groups_1143: UUID[];
                    id_1142 = dataIn.readLong();
                    const len_1145 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1143 = new Array<UUID>(len_1145);
                    for (let idx_1144 = 0;
                    idx_1144 < len_1145;
                    idx_1144++)  {
                        groups_1143[idx_1144] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1146: string[] = ["id", "groups"];
                    const argsValues_1147: any[] = [id_1142, groups_1143];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_1146, argsValues_1147);
                    localApi.removeItemsFromAccessGroup(id_1142, groups_1143);
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_1146, argsValues_1147);
                    break;
                    
                }
                case 25:  {
                    let uid_1149: UUID;
                    let groups_1150: bigint[];
                    uid_1149 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1152 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1150 = new Array<bigint>(len_1152);
                    for (let idx_1151 = 0;
                    idx_1151 < len_1152;
                    idx_1151++)  {
                        groups_1150[idx_1151] = dataIn.readLong();
                        
                    }
                    const argsNames_1153: string[] = ["uid", "groups"];
                    const argsValues_1154: any[] = [uid_1149, groups_1150];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_1153, argsValues_1154);
                    localApi.addAccessGroupsToClient(uid_1149, groups_1150);
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_1153, argsValues_1154);
                    break;
                    
                }
                case 26:  {
                    let uid_1156: UUID;
                    let groups_1157: bigint[];
                    uid_1156 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1159 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1157 = new Array<bigint>(len_1159);
                    for (let idx_1158 = 0;
                    idx_1158 < len_1159;
                    idx_1158++)  {
                        groups_1157[idx_1158] = dataIn.readLong();
                        
                    }
                    const argsNames_1160: string[] = ["uid", "groups"];
                    const argsValues_1161: any[] = [uid_1156, groups_1157];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_1160, argsValues_1161);
                    localApi.removeAccessGroupsFromClient(uid_1156, groups_1157);
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_1160, argsValues_1161);
                    break;
                    
                }
                case 27:  {
                    let uids_1163: UUID[];
                    const len_1165 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1163 = new Array<UUID>(len_1165);
                    for (let idx_1164 = 0;
                    idx_1164 < len_1165;
                    idx_1164++)  {
                        uids_1163[idx_1164] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1166: string[] = ["uids"];
                    const argsValues_1167: any[] = [uids_1163];
                    ctx.invokeLocalMethodBefore("requestAllAccessedClients", argsNames_1166, argsValues_1167);
                    localApi.requestAllAccessedClients(uids_1163);
                    ctx.invokeLocalMethodAfter("requestAllAccessedClients", null, argsNames_1166, argsValues_1167);
                    break;
                    
                }
                case 28:  {
                    let requests_1169: AccessCheckPair[];
                    const len_1171 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    requests_1169 = new Array<AccessCheckPair>(len_1171);
                    for (let idx_1170 = 0;
                    idx_1170 < len_1171;
                    idx_1170++)  {
                        requests_1169[idx_1170] = AccessCheckPair.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsNames_1172: string[] = ["requests"];
                    const argsValues_1173: any[] = [requests_1169];
                    ctx.invokeLocalMethodBefore("requestAccessCheck", argsNames_1172, argsValues_1173);
                    localApi.requestAccessCheck(requests_1169);
                    ctx.invokeLocalMethodAfter("requestAccessCheck", null, argsNames_1172, argsValues_1173);
                    break;
                    
                }
                case 29:  {
                    const reqId_1174 = dataIn.readInt();
                    let uid_1175: UUID;
                    let fromTime_1176: bigint;
                    let toTime_1177: bigint;
                    let limit_1178: number;
                    uid_1175 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    fromTime_1176 = dataIn.readLong();
                    toTime_1177 = dataIn.readLong();
                    limit_1178 = dataIn.readInt();
                    const argsNames_1179: string[] = ["uid", "fromTime", "toTime", "limit"];
                    const argsValues_1180: any[] = [uid_1175, fromTime_1176, toTime_1177, limit_1178];
                    ctx.invokeLocalMethodBefore("getClientActivity", argsNames_1179, argsValues_1180);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getClientActivity(uid_1175, fromTime_1176, toTime_1177, limit_1178);
                    ctx.invokeLocalMethodAfter("getClientActivity", resultFuture, argsNames_1179, argsValues_1180);
                    resultFuture.to((v_1182: ClientActivity[]) =>  {
                        const data_1181 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1181, v_1182.length);
                        for (const el_1183 of v_1182)  {
                            ClientActivity.META.serialize(ctx, el_1183, data_1181);
                            
                        }
                        ctx.sendResultToRemote(reqId_1174, data_1181.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 30:  {
                    const reqId_1184 = dataIn.readInt();
                    let uid_1185: UUID;
                    let query_1186: string;
                    let limit_1187: number;
                    uid_1185 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    let stringBytes_1188: Uint8Array;
                    const len_1190 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1191 = dataIn.readBytes(len_1190);
                    stringBytes_1188 = bytes_1191;
                    query_1186 = new TextDecoder('utf-8').decode(stringBytes_1188);
                    limit_1187 = dataIn.readInt();
                    const argsNames_1192: string[] = ["uid", "query", "limit"];
                    const argsValues_1193: any[] = [uid_1185, query_1186, limit_1187];
                    ctx.invokeLocalMethodBefore("searchClientLogs", argsNames_1192, argsValues_1193);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.searchClientLogs(uid_1185, query_1186, limit_1187);
                    ctx.invokeLocalMethodAfter("searchClientLogs", resultFuture, argsNames_1192, argsValues_1193);
                    resultFuture.to((v_1195: ClientLogEntry[]) =>  {
                        const data_1194 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1194, v_1195.length);
                        for (const el_1196 of v_1195)  {
                            ClientLogEntry.META.serialize(ctx, el_1196, data_1194);
                            
                        }
                        ctx.sendResultToRemote(reqId_1184, data_1194.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 31:  {
                    const reqId_1197 = dataIn.readInt();
                    let uid_1198: UUID;
                    let limit_1199: number;
                    uid_1198 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    limit_1199 = dataIn.readInt();
                    const argsNames_1200: string[] = ["uid", "limit"];
                    const argsValues_1201: any[] = [uid_1198, limit_1199];
                    ctx.invokeLocalMethodBefore("getClientConnections", argsNames_1200, argsValues_1201);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getClientConnections(uid_1198, limit_1199);
                    ctx.invokeLocalMethodAfter("getClientConnections", resultFuture, argsNames_1200, argsValues_1201);
                    resultFuture.to((v_1203: ClientConnectionInfo[]) =>  {
                        const data_1202 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1202, v_1203.length);
                        for (const el_1204 of v_1203)  {
                            ClientConnectionInfo.META.serialize(ctx, el_1204, data_1202);
                            
                        }
                        ctx.sendResultToRemote(reqId_1197, data_1202.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 32:  {
                    const reqId_1205 = dataIn.readInt();
                    let uid_1206: UUID;
                    let fromTime_1207: bigint;
                    let toTime_1208: bigint;
                    let limit_1209: number;
                    uid_1206 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    fromTime_1207 = dataIn.readLong();
                    toTime_1208 = dataIn.readLong();
                    limit_1209 = dataIn.readInt();
                    const argsNames_1210: string[] = ["uid", "fromTime", "toTime", "limit"];
                    const argsValues_1211: any[] = [uid_1206, fromTime_1207, toTime_1208, limit_1209];
                    ctx.invokeLocalMethodBefore("getClientMessages", argsNames_1210, argsValues_1211);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getClientMessages(uid_1206, fromTime_1207, toTime_1208, limit_1209);
                    ctx.invokeLocalMethodAfter("getClientMessages", resultFuture, argsNames_1210, argsValues_1211);
                    resultFuture.to((v_1213: MessageInfo[]) =>  {
                        const data_1212 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1212, v_1213.length);
                        for (const el_1214 of v_1213)  {
                            MessageInfo.META.serialize(ctx, el_1214, data_1212);
                            
                        }
                        ctx.sendResultToRemote(reqId_1205, data_1212.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 33:  {
                    let delayMillis_1216: bigint;
                    delayMillis_1216 = dataIn.readLong();
                    const argsNames_1217: string[] = ["delayMillis"];
                    const argsValues_1218: any[] = [delayMillis_1216];
                    ctx.invokeLocalMethodBefore("setNextReadDelay", argsNames_1217, argsValues_1218);
                    localApi.setNextReadDelay(delayMillis_1216);
                    ctx.invokeLocalMethodAfter("setNextReadDelay", null, argsNames_1217, argsValues_1218);
                    break;
                    
                }
                case 34:  {
                    const reqId_1219 = dataIn.readInt();
                    let uid_1220: UUID;
                    uid_1220 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1221: string[] = ["uid"];
                    const argsValues_1222: any[] = [uid_1220];
                    ctx.invokeLocalMethodBefore("getUap", argsNames_1221, argsValues_1222);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getUap(uid_1220);
                    ctx.invokeLocalMethodAfter("getUap", resultFuture, argsNames_1221, argsValues_1222);
                    resultFuture.to((v_1224: Uap) =>  {
                        const data_1223 = new DataInOut();
                        Uap.META.serialize(ctx, v_1224, data_1223);
                        ctx.sendResultToRemote(reqId_1219, data_1223.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 36:  {
                    const argsNames_1226: string[] = [];
                    const argsValues_1227: any[] = [];
                    ctx.invokeLocalMethodBefore("pullMessages", argsNames_1226, argsValues_1227);
                    localApi.pullMessages();
                    ctx.invokeLocalMethodAfter("pullMessages", null, argsNames_1226, argsValues_1227);
                    break;
                    
                }
                case 40:  {
                    const reqId_1228 = dataIn.readInt();
                    let uid_1229: UUID;
                    uid_1229 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1230: string[] = ["uid"];
                    const argsValues_1231: any[] = [uid_1229];
                    ctx.invokeLocalMethodBefore("requestWebRtcSession", argsNames_1230, argsValues_1231);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.requestWebRtcSession(uid_1229);
                    ctx.invokeLocalMethodAfter("requestWebRtcSession", resultFuture, argsNames_1230, argsValues_1231);
                    resultFuture.to((v_1233: WebRtcSession) =>  {
                        const data_1232 = new DataInOut();
                        WebRtcSession.META.serialize(ctx, v_1233, data_1232);
                        ctx.sendResultToRemote(reqId_1228, data_1232.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 41:  {
                    let session_1235: WebRtcSession;
                    session_1235 = WebRtcSession.META.deserialize(ctx, dataIn);
                    const argsNames_1236: string[] = ["session"];
                    const argsValues_1237: any[] = [session_1235];
                    ctx.invokeLocalMethodBefore("publishWebRtcSession", argsNames_1236, argsValues_1237);
                    localApi.publishWebRtcSession(session_1235);
                    ctx.invokeLocalMethodAfter("publishWebRtcSession", null, argsNames_1236, argsValues_1237);
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
    makeRemote(sCtx_1238: MetaContext): AuthorizedApiRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1238.flush();
                
            }
            , getFastMetaContext: () => sCtx_1238, backId: (id: number): void =>  {
                const dataOut_1240 = new DataInOut();
                dataOut_1240.writeByte(3);
                const argsNames_1242: string[] = ["id"];
                const argsValues_1243: any[] = [id];
                sCtx_1238.invokeRemoteMethodAfter("backId", null, argsNames_1242, argsValues_1243);
                dataOut_1240.writeByte(id);
                sCtx_1238.sendToRemote(dataOut_1240.toArray());
                
            }
            , ping: (nextConnectMsDuration: bigint, rxWindowMs: bigint): AFuture =>  {
                const dataOut_1245 = new DataInOut();
                dataOut_1245.writeByte(4);
                const argsNames_1247: string[] = ["nextConnectMsDuration", "rxWindowMs"];
                const argsValues_1248: any[] = [nextConnectMsDuration, rxWindowMs];
                const result_1246 = AFuture.make();
                sCtx_1238.invokeRemoteMethodAfter("ping", result_1246, argsNames_1247, argsValues_1248);
                const reqId_1244 = sCtx_1238.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1246 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1246.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1245.writeInt(reqId_1244);
                dataOut_1245.writeLong(nextConnectMsDuration);
                dataOut_1245.writeLong(rxWindowMs);
                sCtx_1238.sendToRemote(dataOut_1245.toArray());
                return result_1246;
                
            }
            , client: (uid: UUID, stream: ClientApiStream): void =>  {
                const dataOut_1250 = new DataInOut();
                dataOut_1250.writeByte(5);
                const argsNames_1252: string[] = ["uid", "stream"];
                const argsValues_1253: any[] = [uid, stream];
                sCtx_1238.invokeRemoteMethodAfter("client", null, argsNames_1252, argsValues_1253);
                FastMeta.META_UUID.serialize(sCtx_1238, uid, dataOut_1250);
                ClientApiStream.META.serialize(sCtx_1238, stream, dataOut_1250);
                sCtx_1238.sendToRemote(dataOut_1250.toArray());
                
            }
            , sendMessage: (msg: Message): void =>  {
                const dataOut_1255 = new DataInOut();
                dataOut_1255.writeByte(6);
                const argsNames_1257: string[] = ["msg"];
                const argsValues_1258: any[] = [msg];
                sCtx_1238.invokeRemoteMethodAfter("sendMessage", null, argsNames_1257, argsValues_1258);
                Message.META.serialize(sCtx_1238, msg, dataOut_1255);
                sCtx_1238.sendToRemote(dataOut_1255.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_1260 = new DataInOut();
                dataOut_1260.writeByte(7);
                const argsNames_1262: string[] = ["msg"];
                const argsValues_1263: any[] = [msg];
                sCtx_1238.invokeRemoteMethodAfter("sendMessages", null, argsNames_1262, argsValues_1263);
                SerializerPackNumber.INSTANCE.put(dataOut_1260, msg.length);
                for (const el_1264 of msg)  {
                    Message.META.serialize(sCtx_1238, el_1264, dataOut_1260);
                    
                }
                sCtx_1238.sendToRemote(dataOut_1260.toArray());
                
            }
            , sendMulticast: (uids: UUID[], data: Uint8Array): void =>  {
                const dataOut_1266 = new DataInOut();
                dataOut_1266.writeByte(37);
                const argsNames_1268: string[] = ["uids", "data"];
                const argsValues_1269: any[] = [uids, data];
                sCtx_1238.invokeRemoteMethodAfter("sendMulticast", null, argsNames_1268, argsValues_1269);
                SerializerPackNumber.INSTANCE.put(dataOut_1266, uids.length);
                for (const el_1270 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1238, el_1270, dataOut_1266);
                    
                }
                SerializerPackNumber.INSTANCE.put(dataOut_1266, data.length);
                dataOut_1266.write(data);
                sCtx_1238.sendToRemote(dataOut_1266.toArray());
                
            }
            , sendMessageWithResult: (msg: Message): AFuture =>  {
                const dataOut_1273 = new DataInOut();
                dataOut_1273.writeByte(39);
                const argsNames_1275: string[] = ["msg"];
                const argsValues_1276: any[] = [msg];
                const result_1274 = AFuture.make();
                sCtx_1238.invokeRemoteMethodAfter("sendMessageWithResult", result_1274, argsNames_1275, argsValues_1276);
                const reqId_1272 = sCtx_1238.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1274 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1274.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1273.writeInt(reqId_1272);
                Message.META.serialize(sCtx_1238, msg, dataOut_1273);
                sCtx_1238.sendToRemote(dataOut_1273.toArray());
                return result_1274;
                
            }
            , createAccessGroup: (owner: UUID, uids: UUID[]): ARFuture<bigint> =>  {
                const dataOut_1278 = new DataInOut();
                dataOut_1278.writeByte(8);
                const argsNames_1280: string[] = ["owner", "uids"];
                const argsValues_1281: any[] = [owner, uids];
                const result_1279 = ARFuture.of<bigint>();
                sCtx_1238.invokeRemoteMethodAfter("createAccessGroup", result_1279, argsNames_1280, argsValues_1281);
                const reqId_1277 = sCtx_1238.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1279 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_1238, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1279.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1278.writeInt(reqId_1277);
                FastMeta.META_UUID.serialize(sCtx_1238, owner, dataOut_1278);
                SerializerPackNumber.INSTANCE.put(dataOut_1278, uids.length);
                for (const el_1282 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1238, el_1282, dataOut_1278);
                    
                }
                sCtx_1238.sendToRemote(dataOut_1278.toArray());
                return result_1279;
                
            }
            , addToAccessGroup: (groupId: bigint, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_1284 = new DataInOut();
                dataOut_1284.writeByte(9);
                const argsNames_1286: string[] = ["groupId", "uid"];
                const argsValues_1287: any[] = [groupId, uid];
                const result_1285 = ARFuture.of<boolean>();
                sCtx_1238.invokeRemoteMethodAfter("addToAccessGroup", result_1285, argsNames_1286, argsValues_1287);
                const reqId_1283 = sCtx_1238.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1285 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1238, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1285.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1284.writeInt(reqId_1283);
                dataOut_1284.writeLong(groupId);
                FastMeta.META_UUID.serialize(sCtx_1238, uid, dataOut_1284);
                sCtx_1238.sendToRemote(dataOut_1284.toArray());
                return result_1285;
                
            }
            , removeFromAccessGroup: (groupId: bigint, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_1289 = new DataInOut();
                dataOut_1289.writeByte(10);
                const argsNames_1291: string[] = ["groupId", "uid"];
                const argsValues_1292: any[] = [groupId, uid];
                const result_1290 = ARFuture.of<boolean>();
                sCtx_1238.invokeRemoteMethodAfter("removeFromAccessGroup", result_1290, argsNames_1291, argsValues_1292);
                const reqId_1288 = sCtx_1238.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1290 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1238, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1290.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1289.writeInt(reqId_1288);
                dataOut_1289.writeLong(groupId);
                FastMeta.META_UUID.serialize(sCtx_1238, uid, dataOut_1289);
                sCtx_1238.sendToRemote(dataOut_1289.toArray());
                return result_1290;
                
            }
            , checkAccessForSendMessage: (uid: UUID): AFuture =>  {
                const dataOut_1294 = new DataInOut();
                dataOut_1294.writeByte(11);
                const argsNames_1296: string[] = ["uid"];
                const argsValues_1297: any[] = [uid];
                const result_1295 = AFuture.make();
                sCtx_1238.invokeRemoteMethodAfter("checkAccessForSendMessage", result_1295, argsNames_1296, argsValues_1297);
                const reqId_1293 = sCtx_1238.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1295 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1295.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1294.writeInt(reqId_1293);
                FastMeta.META_UUID.serialize(sCtx_1238, uid, dataOut_1294);
                sCtx_1238.sendToRemote(dataOut_1294.toArray());
                return result_1295;
                
            }
            , resolverServers: (sid: number[]): void =>  {
                const dataOut_1299 = new DataInOut();
                dataOut_1299.writeByte(12);
                const argsNames_1301: string[] = ["sid"];
                const argsValues_1302: any[] = [sid];
                sCtx_1238.invokeRemoteMethodAfter("resolverServers", null, argsNames_1301, argsValues_1302);
                SerializerPackNumber.INSTANCE.put(dataOut_1299, sid.length);
                for (const el_1303 of sid)  {
                    dataOut_1299.writeShort(el_1303);
                    
                }
                sCtx_1238.sendToRemote(dataOut_1299.toArray());
                
            }
            , resolveClouds: (uids: UUID[]): void =>  {
                const dataOut_1305 = new DataInOut();
                dataOut_1305.writeByte(13);
                const argsNames_1307: string[] = ["uids"];
                const argsValues_1308: any[] = [uids];
                sCtx_1238.invokeRemoteMethodAfter("resolveClouds", null, argsNames_1307, argsValues_1308);
                SerializerPackNumber.INSTANCE.put(dataOut_1305, uids.length);
                for (const el_1309 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1238, el_1309, dataOut_1305);
                    
                }
                sCtx_1238.sendToRemote(dataOut_1305.toArray());
                
            }
            , reportAppliedConfig: (configs: AppliedConfig[]): void =>  {
                const dataOut_1311 = new DataInOut();
                dataOut_1311.writeByte(38);
                const argsNames_1313: string[] = ["configs"];
                const argsValues_1314: any[] = [configs];
                sCtx_1238.invokeRemoteMethodAfter("reportAppliedConfig", null, argsNames_1313, argsValues_1314);
                SerializerPackNumber.INSTANCE.put(dataOut_1311, configs.length);
                for (const el_1315 of configs)  {
                    AppliedConfig.META.serialize(sCtx_1238, el_1315, dataOut_1311);
                    
                }
                sCtx_1238.sendToRemote(dataOut_1311.toArray());
                
            }
            , getAccessGroups: (uid: UUID): ARFuture<bigint[]> =>  {
                const dataOut_1317 = new DataInOut();
                dataOut_1317.writeByte(14);
                const argsNames_1319: string[] = ["uid"];
                const argsValues_1320: any[] = [uid];
                const result_1318 = ARFuture.of<bigint[]>();
                sCtx_1238.invokeRemoteMethodAfter("getAccessGroups", result_1318, argsNames_1319, argsValues_1320);
                const reqId_1316 = sCtx_1238.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1318 as ARFuture<bigint[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_LONG).deserialize(sCtx_1238, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1318.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1317.writeInt(reqId_1316);
                FastMeta.META_UUID.serialize(sCtx_1238, uid, dataOut_1317);
                sCtx_1238.sendToRemote(dataOut_1317.toArray());
                return result_1318;
                
            }
            , getAccessGroup: (groupId: bigint): ARFuture<AccessGroup> =>  {
                const dataOut_1322 = new DataInOut();
                dataOut_1322.writeByte(15);
                const argsNames_1324: string[] = ["groupId"];
                const argsValues_1325: any[] = [groupId];
                const result_1323 = ARFuture.of<AccessGroup>();
                sCtx_1238.invokeRemoteMethodAfter("getAccessGroup", result_1323, argsNames_1324, argsValues_1325);
                const reqId_1321 = sCtx_1238.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1323 as ARFuture<AccessGroup>).tryDone(AccessGroup.META.deserialize(sCtx_1238, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1323.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1322.writeInt(reqId_1321);
                dataOut_1322.writeLong(groupId);
                sCtx_1238.sendToRemote(dataOut_1322.toArray());
                return result_1323;
                
            }
            , getAllAccessedClients: (uid: UUID): ARFuture<UUID[]> =>  {
                const dataOut_1327 = new DataInOut();
                dataOut_1327.writeByte(16);
                const argsNames_1329: string[] = ["uid"];
                const argsValues_1330: any[] = [uid];
                const result_1328 = ARFuture.of<UUID[]>();
                sCtx_1238.invokeRemoteMethodAfter("getAllAccessedClients", result_1328, argsNames_1329, argsValues_1330);
                const reqId_1326 = sCtx_1238.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1328 as ARFuture<UUID[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_UUID).deserialize(sCtx_1238, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1328.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1327.writeInt(reqId_1326);
                FastMeta.META_UUID.serialize(sCtx_1238, uid, dataOut_1327);
                sCtx_1238.sendToRemote(dataOut_1327.toArray());
                return result_1328;
                
            }
            , checkAccessForSendMessage2: (uid1: UUID, uid2: UUID): ARFuture<boolean> =>  {
                const dataOut_1332 = new DataInOut();
                dataOut_1332.writeByte(17);
                const argsNames_1334: string[] = ["uid1", "uid2"];
                const argsValues_1335: any[] = [uid1, uid2];
                const result_1333 = ARFuture.of<boolean>();
                sCtx_1238.invokeRemoteMethodAfter("checkAccessForSendMessage2", result_1333, argsNames_1334, argsValues_1335);
                const reqId_1331 = sCtx_1238.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1333 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1238, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1333.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1332.writeInt(reqId_1331);
                FastMeta.META_UUID.serialize(sCtx_1238, uid1, dataOut_1332);
                FastMeta.META_UUID.serialize(sCtx_1238, uid2, dataOut_1332);
                sCtx_1238.sendToRemote(dataOut_1332.toArray());
                return result_1333;
                
            }
            , sendTelemetry: (telemetry: Telemetry): void =>  {
                const dataOut_1337 = new DataInOut();
                dataOut_1337.writeByte(18);
                const argsNames_1339: string[] = ["telemetry"];
                const argsValues_1340: any[] = [telemetry];
                sCtx_1238.invokeRemoteMethodAfter("sendTelemetry", null, argsNames_1339, argsValues_1340);
                Telemetry.META.serialize(sCtx_1238, telemetry, dataOut_1337);
                sCtx_1238.sendToRemote(dataOut_1337.toArray());
                
            }
            , requestAccessGroupsForClients: (uids: UUID[]): void =>  {
                const dataOut_1342 = new DataInOut();
                dataOut_1342.writeByte(19);
                const argsNames_1344: string[] = ["uids"];
                const argsValues_1345: any[] = [uids];
                sCtx_1238.invokeRemoteMethodAfter("requestAccessGroupsForClients", null, argsNames_1344, argsValues_1345);
                SerializerPackNumber.INSTANCE.put(dataOut_1342, uids.length);
                for (const el_1346 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1238, el_1346, dataOut_1342);
                    
                }
                sCtx_1238.sendToRemote(dataOut_1342.toArray());
                
            }
            , requestAccessGroupsItems: (ids: bigint[]): void =>  {
                const dataOut_1348 = new DataInOut();
                dataOut_1348.writeByte(20);
                const argsNames_1350: string[] = ["ids"];
                const argsValues_1351: any[] = [ids];
                sCtx_1238.invokeRemoteMethodAfter("requestAccessGroupsItems", null, argsNames_1350, argsValues_1351);
                SerializerPackNumber.INSTANCE.put(dataOut_1348, ids.length);
                for (const el_1352 of ids)  {
                    dataOut_1348.writeLong(el_1352);
                    
                }
                sCtx_1238.sendToRemote(dataOut_1348.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_1354 = new DataInOut();
                dataOut_1354.writeByte(22);
                const argsNames_1356: string[] = ["uid", "groups"];
                const argsValues_1357: any[] = [uid, groups];
                sCtx_1238.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_1356, argsValues_1357);
                FastMeta.META_UUID.serialize(sCtx_1238, uid, dataOut_1354);
                SerializerPackNumber.INSTANCE.put(dataOut_1354, groups.length);
                for (const el_1358 of groups)  {
                    dataOut_1354.writeLong(el_1358);
                    
                }
                sCtx_1238.sendToRemote(dataOut_1354.toArray());
                
            }
            , addItemsToAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_1360 = new DataInOut();
                dataOut_1360.writeByte(23);
                const argsNames_1362: string[] = ["id", "groups"];
                const argsValues_1363: any[] = [id, groups];
                sCtx_1238.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_1362, argsValues_1363);
                dataOut_1360.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_1360, groups.length);
                for (const el_1364 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1238, el_1364, dataOut_1360);
                    
                }
                sCtx_1238.sendToRemote(dataOut_1360.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: bigint, groups: UUID[]): void =>  {
                const dataOut_1366 = new DataInOut();
                dataOut_1366.writeByte(24);
                const argsNames_1368: string[] = ["id", "groups"];
                const argsValues_1369: any[] = [id, groups];
                sCtx_1238.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_1368, argsValues_1369);
                dataOut_1366.writeLong(id);
                SerializerPackNumber.INSTANCE.put(dataOut_1366, groups.length);
                for (const el_1370 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1238, el_1370, dataOut_1366);
                    
                }
                sCtx_1238.sendToRemote(dataOut_1366.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_1372 = new DataInOut();
                dataOut_1372.writeByte(25);
                const argsNames_1374: string[] = ["uid", "groups"];
                const argsValues_1375: any[] = [uid, groups];
                sCtx_1238.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_1374, argsValues_1375);
                FastMeta.META_UUID.serialize(sCtx_1238, uid, dataOut_1372);
                SerializerPackNumber.INSTANCE.put(dataOut_1372, groups.length);
                for (const el_1376 of groups)  {
                    dataOut_1372.writeLong(el_1376);
                    
                }
                sCtx_1238.sendToRemote(dataOut_1372.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: bigint[]): void =>  {
                const dataOut_1378 = new DataInOut();
                dataOut_1378.writeByte(26);
                const argsNames_1380: string[] = ["uid", "groups"];
                const argsValues_1381: any[] = [uid, groups];
                sCtx_1238.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_1380, argsValues_1381);
                FastMeta.META_UUID.serialize(sCtx_1238, uid, dataOut_1378);
                SerializerPackNumber.INSTANCE.put(dataOut_1378, groups.length);
                for (const el_1382 of groups)  {
                    dataOut_1378.writeLong(el_1382);
                    
                }
                sCtx_1238.sendToRemote(dataOut_1378.toArray());
                
            }
            , requestAllAccessedClients: (uids: UUID[]): void =>  {
                const dataOut_1384 = new DataInOut();
                dataOut_1384.writeByte(27);
                const argsNames_1386: string[] = ["uids"];
                const argsValues_1387: any[] = [uids];
                sCtx_1238.invokeRemoteMethodAfter("requestAllAccessedClients", null, argsNames_1386, argsValues_1387);
                SerializerPackNumber.INSTANCE.put(dataOut_1384, uids.length);
                for (const el_1388 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1238, el_1388, dataOut_1384);
                    
                }
                sCtx_1238.sendToRemote(dataOut_1384.toArray());
                
            }
            , requestAccessCheck: (requests: AccessCheckPair[]): void =>  {
                const dataOut_1390 = new DataInOut();
                dataOut_1390.writeByte(28);
                const argsNames_1392: string[] = ["requests"];
                const argsValues_1393: any[] = [requests];
                sCtx_1238.invokeRemoteMethodAfter("requestAccessCheck", null, argsNames_1392, argsValues_1393);
                SerializerPackNumber.INSTANCE.put(dataOut_1390, requests.length);
                for (const el_1394 of requests)  {
                    AccessCheckPair.META.serialize(sCtx_1238, el_1394, dataOut_1390);
                    
                }
                sCtx_1238.sendToRemote(dataOut_1390.toArray());
                
            }
            , getClientActivity: (uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<ClientActivity[]> =>  {
                const dataOut_1396 = new DataInOut();
                dataOut_1396.writeByte(29);
                const argsNames_1398: string[] = ["uid", "fromTime", "toTime", "limit"];
                const argsValues_1399: any[] = [uid, fromTime, toTime, limit];
                const result_1397 = ARFuture.of<ClientActivity[]>();
                sCtx_1238.invokeRemoteMethodAfter("getClientActivity", result_1397, argsNames_1398, argsValues_1399);
                const reqId_1395 = sCtx_1238.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1397 as ARFuture<ClientActivity[]>).tryDone(FastMeta.getMetaArray(ClientActivity.META).deserialize(sCtx_1238, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1397.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1396.writeInt(reqId_1395);
                FastMeta.META_UUID.serialize(sCtx_1238, uid, dataOut_1396);
                dataOut_1396.writeLong(fromTime);
                dataOut_1396.writeLong(toTime);
                dataOut_1396.writeInt(limit);
                sCtx_1238.sendToRemote(dataOut_1396.toArray());
                return result_1397;
                
            }
            , searchClientLogs: (uid: UUID, query: string, limit: number): ARFuture<ClientLogEntry[]> =>  {
                const dataOut_1401 = new DataInOut();
                dataOut_1401.writeByte(30);
                const argsNames_1403: string[] = ["uid", "query", "limit"];
                const argsValues_1404: any[] = [uid, query, limit];
                const result_1402 = ARFuture.of<ClientLogEntry[]>();
                sCtx_1238.invokeRemoteMethodAfter("searchClientLogs", result_1402, argsNames_1403, argsValues_1404);
                const reqId_1400 = sCtx_1238.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1402 as ARFuture<ClientLogEntry[]>).tryDone(FastMeta.getMetaArray(ClientLogEntry.META).deserialize(sCtx_1238, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1402.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1401.writeInt(reqId_1400);
                FastMeta.META_UUID.serialize(sCtx_1238, uid, dataOut_1401);
                const stringBytes_1405 = new TextEncoder().encode(query);
                SerializerPackNumber.INSTANCE.put(dataOut_1401, stringBytes_1405.length);
                dataOut_1401.write(stringBytes_1405);
                dataOut_1401.writeInt(limit);
                sCtx_1238.sendToRemote(dataOut_1401.toArray());
                return result_1402;
                
            }
            , getClientConnections: (uid: UUID, limit: number): ARFuture<ClientConnectionInfo[]> =>  {
                const dataOut_1408 = new DataInOut();
                dataOut_1408.writeByte(31);
                const argsNames_1410: string[] = ["uid", "limit"];
                const argsValues_1411: any[] = [uid, limit];
                const result_1409 = ARFuture.of<ClientConnectionInfo[]>();
                sCtx_1238.invokeRemoteMethodAfter("getClientConnections", result_1409, argsNames_1410, argsValues_1411);
                const reqId_1407 = sCtx_1238.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1409 as ARFuture<ClientConnectionInfo[]>).tryDone(FastMeta.getMetaArray(ClientConnectionInfo.META).deserialize(sCtx_1238, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1409.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1408.writeInt(reqId_1407);
                FastMeta.META_UUID.serialize(sCtx_1238, uid, dataOut_1408);
                dataOut_1408.writeInt(limit);
                sCtx_1238.sendToRemote(dataOut_1408.toArray());
                return result_1409;
                
            }
            , getClientMessages: (uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<MessageInfo[]> =>  {
                const dataOut_1413 = new DataInOut();
                dataOut_1413.writeByte(32);
                const argsNames_1415: string[] = ["uid", "fromTime", "toTime", "limit"];
                const argsValues_1416: any[] = [uid, fromTime, toTime, limit];
                const result_1414 = ARFuture.of<MessageInfo[]>();
                sCtx_1238.invokeRemoteMethodAfter("getClientMessages", result_1414, argsNames_1415, argsValues_1416);
                const reqId_1412 = sCtx_1238.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1414 as ARFuture<MessageInfo[]>).tryDone(FastMeta.getMetaArray(MessageInfo.META).deserialize(sCtx_1238, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1414.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1413.writeInt(reqId_1412);
                FastMeta.META_UUID.serialize(sCtx_1238, uid, dataOut_1413);
                dataOut_1413.writeLong(fromTime);
                dataOut_1413.writeLong(toTime);
                dataOut_1413.writeInt(limit);
                sCtx_1238.sendToRemote(dataOut_1413.toArray());
                return result_1414;
                
            }
            , setNextReadDelay: (delayMillis: bigint): void =>  {
                const dataOut_1418 = new DataInOut();
                dataOut_1418.writeByte(33);
                const argsNames_1420: string[] = ["delayMillis"];
                const argsValues_1421: any[] = [delayMillis];
                sCtx_1238.invokeRemoteMethodAfter("setNextReadDelay", null, argsNames_1420, argsValues_1421);
                dataOut_1418.writeLong(delayMillis);
                sCtx_1238.sendToRemote(dataOut_1418.toArray());
                
            }
            , getUap: (uid: UUID): ARFuture<Uap> =>  {
                const dataOut_1423 = new DataInOut();
                dataOut_1423.writeByte(34);
                const argsNames_1425: string[] = ["uid"];
                const argsValues_1426: any[] = [uid];
                const result_1424 = ARFuture.of<Uap>();
                sCtx_1238.invokeRemoteMethodAfter("getUap", result_1424, argsNames_1425, argsValues_1426);
                const reqId_1422 = sCtx_1238.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1424 as ARFuture<Uap>).tryDone(Uap.META.deserialize(sCtx_1238, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1424.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1423.writeInt(reqId_1422);
                FastMeta.META_UUID.serialize(sCtx_1238, uid, dataOut_1423);
                sCtx_1238.sendToRemote(dataOut_1423.toArray());
                return result_1424;
                
            }
            , pullMessages: (): void =>  {
                const dataOut_1428 = new DataInOut();
                dataOut_1428.writeByte(36);
                const argsNames_1430: string[] = [];
                const argsValues_1431: any[] = [];
                sCtx_1238.invokeRemoteMethodAfter("pullMessages", null, argsNames_1430, argsValues_1431);
                sCtx_1238.sendToRemote(dataOut_1428.toArray());
                
            }
            , requestWebRtcSession: (uid: UUID): ARFuture<WebRtcSession> =>  {
                const dataOut_1433 = new DataInOut();
                dataOut_1433.writeByte(40);
                const argsNames_1435: string[] = ["uid"];
                const argsValues_1436: any[] = [uid];
                const result_1434 = ARFuture.of<WebRtcSession>();
                sCtx_1238.invokeRemoteMethodAfter("requestWebRtcSession", result_1434, argsNames_1435, argsValues_1436);
                const reqId_1432 = sCtx_1238.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1434 as ARFuture<WebRtcSession>).tryDone(WebRtcSession.META.deserialize(sCtx_1238, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1434.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1433.writeInt(reqId_1432);
                FastMeta.META_UUID.serialize(sCtx_1238, uid, dataOut_1433);
                sCtx_1238.sendToRemote(dataOut_1433.toArray());
                return result_1434;
                
            }
            , publishWebRtcSession: (session: WebRtcSession): void =>  {
                const dataOut_1438 = new DataInOut();
                dataOut_1438.writeByte(41);
                const argsNames_1440: string[] = ["session"];
                const argsValues_1441: any[] = [session];
                sCtx_1238.invokeRemoteMethodAfter("publishWebRtcSession", null, argsNames_1440, argsValues_1441);
                WebRtcSession.META.serialize(sCtx_1238, session, dataOut_1438);
                sCtx_1238.sendToRemote(dataOut_1438.toArray());
                
            }
            , openClient(uid: UUID, factory: (api: ServerApiByUidRemote) => any, converter: BytesConverter, ...keys: any[]): ServerApiByUidRemote  {
                return sCtx_1238.findContext(ctx =>  {
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
            case 40: // requestWebRtcSession
            case 41: // publishWebRtcSession
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
                    const reqId_1442 = dataIn.readInt();
                    const argsNames_1443: string[] = [];
                    const argsValues_1444: any[] = [];
                    ctx.invokeLocalMethodBefore("getTimeUTC", argsNames_1443, argsValues_1444);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getTimeUTC();
                    ctx.invokeLocalMethodAfter("getTimeUTC", resultFuture, argsNames_1443, argsValues_1444);
                    resultFuture.to((v_1446: bigint) =>  {
                        const data_1445 = new DataInOut();
                        data_1445.writeLong(v_1446);
                        ctx.sendResultToRemote(reqId_1442, data_1445.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let uid_1448: UUID;
                    let data_1449: LoginStream;
                    uid_1448 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_1449 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsNames_1450: string[] = ["uid", "data"];
                    const argsValues_1451: any[] = [uid_1448, data_1449];
                    ctx.invokeLocalMethodBefore("loginByUID", argsNames_1450, argsValues_1451);
                    localApi.loginByUID(uid_1448, data_1449);
                    ctx.invokeLocalMethodAfter("loginByUID", null, argsNames_1450, argsValues_1451);
                    break;
                    
                }
                case 5:  {
                    let alias_1453: UUID;
                    let data_1454: LoginStream;
                    alias_1453 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_1454 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsNames_1455: string[] = ["alias", "data"];
                    const argsValues_1456: any[] = [alias_1453, data_1454];
                    ctx.invokeLocalMethodBefore("loginByAlias", argsNames_1455, argsValues_1456);
                    localApi.loginByAlias(alias_1453, data_1454);
                    ctx.invokeLocalMethodAfter("loginByAlias", null, argsNames_1455, argsValues_1456);
                    break;
                    
                }
                case 6:  {
                    const reqId_1457 = dataIn.readInt();
                    const argsNames_1458: string[] = [];
                    const argsValues_1459: any[] = [];
                    ctx.invokeLocalMethodBefore("getMyIp", argsNames_1458, argsValues_1459);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getMyIp();
                    ctx.invokeLocalMethodAfter("getMyIp", resultFuture, argsNames_1458, argsValues_1459);
                    resultFuture.to((v_1461: IpInfo) =>  {
                        const data_1460 = new DataInOut();
                        IpInfo.META.serialize(ctx, v_1461, data_1460);
                        ctx.sendResultToRemote(reqId_1457, data_1460.toArray());
                        
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
    makeRemote(sCtx_1462: MetaContext): LoginApiRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1462.flush();
                
            }
            , getFastMetaContext: () => sCtx_1462, getTimeUTC: (): ARFuture<bigint> =>  {
                const dataOut_1464 = new DataInOut();
                dataOut_1464.writeByte(3);
                const argsNames_1466: string[] = [];
                const argsValues_1467: any[] = [];
                const result_1465 = ARFuture.of<bigint>();
                sCtx_1462.invokeRemoteMethodAfter("getTimeUTC", result_1465, argsNames_1466, argsValues_1467);
                const reqId_1463 = sCtx_1462.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1465 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_1462, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1465.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1464.writeInt(reqId_1463);
                sCtx_1462.sendToRemote(dataOut_1464.toArray());
                return result_1465;
                
            }
            , loginByUID: (uid: UUID, data: LoginStream): void =>  {
                const dataOut_1469 = new DataInOut();
                dataOut_1469.writeByte(4);
                const argsNames_1471: string[] = ["uid", "data"];
                const argsValues_1472: any[] = [uid, data];
                sCtx_1462.invokeRemoteMethodAfter("loginByUID", null, argsNames_1471, argsValues_1472);
                FastMeta.META_UUID.serialize(sCtx_1462, uid, dataOut_1469);
                LoginStream.META.serialize(sCtx_1462, data, dataOut_1469);
                sCtx_1462.sendToRemote(dataOut_1469.toArray());
                
            }
            , loginByAlias: (alias: UUID, data: LoginStream): void =>  {
                const dataOut_1474 = new DataInOut();
                dataOut_1474.writeByte(5);
                const argsNames_1476: string[] = ["alias", "data"];
                const argsValues_1477: any[] = [alias, data];
                sCtx_1462.invokeRemoteMethodAfter("loginByAlias", null, argsNames_1476, argsValues_1477);
                FastMeta.META_UUID.serialize(sCtx_1462, alias, dataOut_1474);
                LoginStream.META.serialize(sCtx_1462, data, dataOut_1474);
                sCtx_1462.sendToRemote(dataOut_1474.toArray());
                
            }
            , getMyIp: (): ARFuture<IpInfo> =>  {
                const dataOut_1479 = new DataInOut();
                dataOut_1479.writeByte(6);
                const argsNames_1481: string[] = [];
                const argsValues_1482: any[] = [];
                const result_1480 = ARFuture.of<IpInfo>();
                sCtx_1462.invokeRemoteMethodAfter("getMyIp", result_1480, argsNames_1481, argsValues_1482);
                const reqId_1478 = sCtx_1462.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1480 as ARFuture<IpInfo>).tryDone(IpInfo.META.deserialize(sCtx_1462, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1480.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1479.writeInt(reqId_1478);
                sCtx_1462.sendToRemote(dataOut_1479.toArray());
                return result_1480;
                
            }
            , openLoginByUID(uid: UUID, factory: (api: AuthorizedApiRemote) => ClientApiSafe, converter: BytesConverter, ...keys: any[]): AuthorizedApiRemote  {
                return sCtx_1462.findContext(ctx =>  {
                    ctx.onFlushData(data => this.loginByUID(uid, LoginStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((AuthorizedApi as any).META));
                    
                }
                , ...keys).makeRemote((AuthorizedApi as any).META) as AuthorizedApiRemote;
                
            }
            , openLoginByAlias(alias: UUID, factory: (api: AuthorizedApiRemote) => ClientApiSafe, converter: BytesConverter, ...keys: any[]): AuthorizedApiRemote  {
                return sCtx_1462.findContext(ctx =>  {
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
    makeRemote(sCtx_1483: MetaContext): ServerApiByUidClientRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1483.flush();
                
            }
            , getFastMetaContext: () => sCtx_1483, 
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
                    const reqId_1484 = dataIn.readInt();
                    const argsNames_1485: string[] = [];
                    const argsValues_1486: any[] = [];
                    ctx.invokeLocalMethodBefore("getBalance", argsNames_1485, argsValues_1486);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBalance();
                    ctx.invokeLocalMethodAfter("getBalance", resultFuture, argsNames_1485, argsValues_1486);
                    resultFuture.to((v_1488: bigint) =>  {
                        const data_1487 = new DataInOut();
                        data_1487.writeLong(v_1488);
                        ctx.sendResultToRemote(reqId_1484, data_1487.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    const reqId_1489 = dataIn.readInt();
                    let uid_1490: UUID;
                    uid_1490 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1491: string[] = ["uid"];
                    const argsValues_1492: any[] = [uid_1490];
                    ctx.invokeLocalMethodBefore("setParent", argsNames_1491, argsValues_1492);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.setParent(uid_1490);
                    ctx.invokeLocalMethodAfter("setParent", resultFuture, argsNames_1491, argsValues_1492);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1489);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_1493 = dataIn.readInt();
                    const argsNames_1494: string[] = [];
                    const argsValues_1495: any[] = [];
                    ctx.invokeLocalMethodBefore("block", argsNames_1494, argsValues_1495);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.block();
                    ctx.invokeLocalMethodAfter("block", resultFuture, argsNames_1494, argsValues_1495);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1493);
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    const reqId_1496 = dataIn.readInt();
                    const argsNames_1497: string[] = [];
                    const argsValues_1498: any[] = [];
                    ctx.invokeLocalMethodBefore("getPosition", argsNames_1497, argsValues_1498);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getPosition();
                    ctx.invokeLocalMethodAfter("getPosition", resultFuture, argsNames_1497, argsValues_1498);
                    resultFuture.to((v_1500: Cloud) =>  {
                        const data_1499 = new DataInOut();
                        Cloud.META.serialize(ctx, v_1500, data_1499);
                        ctx.sendResultToRemote(reqId_1496, data_1499.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 7:  {
                    const reqId_1501 = dataIn.readInt();
                    const argsNames_1502: string[] = [];
                    const argsValues_1503: any[] = [];
                    ctx.invokeLocalMethodBefore("getParent", argsNames_1502, argsValues_1503);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getParent();
                    ctx.invokeLocalMethodAfter("getParent", resultFuture, argsNames_1502, argsValues_1503);
                    resultFuture.to((v_1505: UUID) =>  {
                        const data_1504 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_1505, data_1504);
                        ctx.sendResultToRemote(reqId_1501, data_1504.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 8:  {
                    const reqId_1506 = dataIn.readInt();
                    const argsNames_1507: string[] = [];
                    const argsValues_1508: any[] = [];
                    ctx.invokeLocalMethodBefore("getBeneficiary", argsNames_1507, argsValues_1508);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBeneficiary();
                    ctx.invokeLocalMethodAfter("getBeneficiary", resultFuture, argsNames_1507, argsValues_1508);
                    resultFuture.to((v_1510: UUID) =>  {
                        const data_1509 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_1510, data_1509);
                        ctx.sendResultToRemote(reqId_1506, data_1509.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_1511 = dataIn.readInt();
                    let uid_1512: UUID;
                    uid_1512 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsNames_1513: string[] = ["uid"];
                    const argsValues_1514: any[] = [uid_1512];
                    ctx.invokeLocalMethodBefore("setBeneficiary", argsNames_1513, argsValues_1514);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.setBeneficiary(uid_1512);
                    ctx.invokeLocalMethodAfter("setBeneficiary", resultFuture, argsNames_1513, argsValues_1514);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1511);
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_1515 = dataIn.readInt();
                    const argsNames_1516: string[] = [];
                    const argsValues_1517: any[] = [];
                    ctx.invokeLocalMethodBefore("getBlockTime", argsNames_1516, argsValues_1517);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getBlockTime();
                    ctx.invokeLocalMethodAfter("getBlockTime", resultFuture, argsNames_1516, argsValues_1517);
                    resultFuture.to((v_1519: Date) =>  {
                        const data_1518 = new DataInOut();
                        data_1518.writeLong(v_1519.getTime());
                        ctx.sendResultToRemote(reqId_1515, data_1518.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_1520 = dataIn.readInt();
                    const argsNames_1521: string[] = [];
                    const argsValues_1522: any[] = [];
                    ctx.invokeLocalMethodBefore("unblock", argsNames_1521, argsValues_1522);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.unblock();
                    ctx.invokeLocalMethodAfter("unblock", resultFuture, argsNames_1521, argsValues_1522);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1520);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    const reqId_1523 = dataIn.readInt();
                    const argsNames_1524: string[] = [];
                    const argsValues_1525: any[] = [];
                    ctx.invokeLocalMethodBefore("createTime", argsNames_1524, argsValues_1525);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.createTime();
                    ctx.invokeLocalMethodAfter("createTime", resultFuture, argsNames_1524, argsValues_1525);
                    resultFuture.to((v_1527: Date) =>  {
                        const data_1526 = new DataInOut();
                        data_1526.writeLong(v_1527.getTime());
                        ctx.sendResultToRemote(reqId_1523, data_1526.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 13:  {
                    const reqId_1528 = dataIn.readInt();
                    const argsNames_1529: string[] = [];
                    const argsValues_1530: any[] = [];
                    ctx.invokeLocalMethodBefore("onlineTime", argsNames_1529, argsValues_1530);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.onlineTime();
                    ctx.invokeLocalMethodAfter("onlineTime", resultFuture, argsNames_1529, argsValues_1530);
                    resultFuture.to((v_1532: Date) =>  {
                        const data_1531 = new DataInOut();
                        data_1531.writeLong(v_1532.getTime());
                        ctx.sendResultToRemote(reqId_1528, data_1531.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 14:  {
                    const reqId_1533 = dataIn.readInt();
                    let groupId_1534: bigint;
                    groupId_1534 = dataIn.readLong();
                    const argsNames_1535: string[] = ["groupId"];
                    const argsValues_1536: any[] = [groupId_1534];
                    ctx.invokeLocalMethodBefore("addAccessGroup", argsNames_1535, argsValues_1536);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.addAccessGroup(groupId_1534);
                    ctx.invokeLocalMethodAfter("addAccessGroup", resultFuture, argsNames_1535, argsValues_1536);
                    resultFuture.to((v_1538: boolean) =>  {
                        const data_1537 = new DataInOut();
                        data_1537.writeBoolean(v_1538);
                        ctx.sendResultToRemote(reqId_1533, data_1537.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_1539 = dataIn.readInt();
                    let groupId_1540: bigint;
                    groupId_1540 = dataIn.readLong();
                    const argsNames_1541: string[] = ["groupId"];
                    const argsValues_1542: any[] = [groupId_1540];
                    ctx.invokeLocalMethodBefore("removeAccessGroup", argsNames_1541, argsValues_1542);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.removeAccessGroup(groupId_1540);
                    ctx.invokeLocalMethodAfter("removeAccessGroup", resultFuture, argsNames_1541, argsValues_1542);
                    resultFuture.to((v_1544: boolean) =>  {
                        const data_1543 = new DataInOut();
                        data_1543.writeBoolean(v_1544);
                        ctx.sendResultToRemote(reqId_1539, data_1543.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 16:  {
                    const reqId_1545 = dataIn.readInt();
                    let limit_1546: number;
                    limit_1546 = dataIn.readInt();
                    const argsNames_1547: string[] = ["limit"];
                    const argsValues_1548: any[] = [limit_1546];
                    ctx.invokeLocalMethodBefore("setMsgQueueLimit", argsNames_1547, argsValues_1548);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.setMsgQueueLimit(limit_1546);
                    ctx.invokeLocalMethodAfter("setMsgQueueLimit", resultFuture, argsNames_1547, argsValues_1548);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1545);
                        
                    }
                    );
                    break;
                    
                }
                case 17:  {
                    const reqId_1549 = dataIn.readInt();
                    let seconds_1550: number;
                    seconds_1550 = dataIn.readInt();
                    const argsNames_1551: string[] = ["seconds"];
                    const argsValues_1552: any[] = [seconds_1550];
                    ctx.invokeLocalMethodBefore("setMsgTimeLimit", argsNames_1551, argsValues_1552);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.setMsgTimeLimit(seconds_1550);
                    ctx.invokeLocalMethodAfter("setMsgTimeLimit", resultFuture, argsNames_1551, argsValues_1552);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1549);
                        
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
    makeRemote(sCtx_1553: MetaContext): ServerApiByUidRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1553.flush();
                
            }
            , getFastMetaContext: () => sCtx_1553, getBalance: (): ARFuture<bigint> =>  {
                const dataOut_1555 = new DataInOut();
                dataOut_1555.writeByte(3);
                const argsNames_1557: string[] = [];
                const argsValues_1558: any[] = [];
                const result_1556 = ARFuture.of<bigint>();
                sCtx_1553.invokeRemoteMethodAfter("getBalance", result_1556, argsNames_1557, argsValues_1558);
                const reqId_1554 = sCtx_1553.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1556 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_1553, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1556.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1555.writeInt(reqId_1554);
                sCtx_1553.sendToRemote(dataOut_1555.toArray());
                return result_1556;
                
            }
            , setParent: (uid: UUID): AFuture =>  {
                const dataOut_1560 = new DataInOut();
                dataOut_1560.writeByte(4);
                const argsNames_1562: string[] = ["uid"];
                const argsValues_1563: any[] = [uid];
                const result_1561 = AFuture.make();
                sCtx_1553.invokeRemoteMethodAfter("setParent", result_1561, argsNames_1562, argsValues_1563);
                const reqId_1559 = sCtx_1553.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1561 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1561.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1560.writeInt(reqId_1559);
                FastMeta.META_UUID.serialize(sCtx_1553, uid, dataOut_1560);
                sCtx_1553.sendToRemote(dataOut_1560.toArray());
                return result_1561;
                
            }
            , block: (): AFuture =>  {
                const dataOut_1565 = new DataInOut();
                dataOut_1565.writeByte(5);
                const argsNames_1567: string[] = [];
                const argsValues_1568: any[] = [];
                const result_1566 = AFuture.make();
                sCtx_1553.invokeRemoteMethodAfter("block", result_1566, argsNames_1567, argsValues_1568);
                const reqId_1564 = sCtx_1553.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1566 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1566.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1565.writeInt(reqId_1564);
                sCtx_1553.sendToRemote(dataOut_1565.toArray());
                return result_1566;
                
            }
            , getPosition: (): ARFuture<Cloud> =>  {
                const dataOut_1570 = new DataInOut();
                dataOut_1570.writeByte(6);
                const argsNames_1572: string[] = [];
                const argsValues_1573: any[] = [];
                const result_1571 = ARFuture.of<Cloud>();
                sCtx_1553.invokeRemoteMethodAfter("getPosition", result_1571, argsNames_1572, argsValues_1573);
                const reqId_1569 = sCtx_1553.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1571 as ARFuture<Cloud>).tryDone(Cloud.META.deserialize(sCtx_1553, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1571.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1570.writeInt(reqId_1569);
                sCtx_1553.sendToRemote(dataOut_1570.toArray());
                return result_1571;
                
            }
            , getParent: (): ARFuture<UUID> =>  {
                const dataOut_1575 = new DataInOut();
                dataOut_1575.writeByte(7);
                const argsNames_1577: string[] = [];
                const argsValues_1578: any[] = [];
                const result_1576 = ARFuture.of<UUID>();
                sCtx_1553.invokeRemoteMethodAfter("getParent", result_1576, argsNames_1577, argsValues_1578);
                const reqId_1574 = sCtx_1553.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1576 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_1553, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1576.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1575.writeInt(reqId_1574);
                sCtx_1553.sendToRemote(dataOut_1575.toArray());
                return result_1576;
                
            }
            , getBeneficiary: (): ARFuture<UUID> =>  {
                const dataOut_1580 = new DataInOut();
                dataOut_1580.writeByte(8);
                const argsNames_1582: string[] = [];
                const argsValues_1583: any[] = [];
                const result_1581 = ARFuture.of<UUID>();
                sCtx_1553.invokeRemoteMethodAfter("getBeneficiary", result_1581, argsNames_1582, argsValues_1583);
                const reqId_1579 = sCtx_1553.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1581 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_1553, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1581.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1580.writeInt(reqId_1579);
                sCtx_1553.sendToRemote(dataOut_1580.toArray());
                return result_1581;
                
            }
            , setBeneficiary: (uid: UUID): AFuture =>  {
                const dataOut_1585 = new DataInOut();
                dataOut_1585.writeByte(9);
                const argsNames_1587: string[] = ["uid"];
                const argsValues_1588: any[] = [uid];
                const result_1586 = AFuture.make();
                sCtx_1553.invokeRemoteMethodAfter("setBeneficiary", result_1586, argsNames_1587, argsValues_1588);
                const reqId_1584 = sCtx_1553.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1586 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1586.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1585.writeInt(reqId_1584);
                FastMeta.META_UUID.serialize(sCtx_1553, uid, dataOut_1585);
                sCtx_1553.sendToRemote(dataOut_1585.toArray());
                return result_1586;
                
            }
            , getBlockTime: (): ARFuture<Date> =>  {
                const dataOut_1590 = new DataInOut();
                dataOut_1590.writeByte(10);
                const argsNames_1592: string[] = [];
                const argsValues_1593: any[] = [];
                const result_1591 = ARFuture.of<Date>();
                sCtx_1553.invokeRemoteMethodAfter("getBlockTime", result_1591, argsNames_1592, argsValues_1593);
                const reqId_1589 = sCtx_1553.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1591 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1553, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1591.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1590.writeInt(reqId_1589);
                sCtx_1553.sendToRemote(dataOut_1590.toArray());
                return result_1591;
                
            }
            , unblock: (): AFuture =>  {
                const dataOut_1595 = new DataInOut();
                dataOut_1595.writeByte(11);
                const argsNames_1597: string[] = [];
                const argsValues_1598: any[] = [];
                const result_1596 = AFuture.make();
                sCtx_1553.invokeRemoteMethodAfter("unblock", result_1596, argsNames_1597, argsValues_1598);
                const reqId_1594 = sCtx_1553.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1596 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1596.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1595.writeInt(reqId_1594);
                sCtx_1553.sendToRemote(dataOut_1595.toArray());
                return result_1596;
                
            }
            , createTime: (): ARFuture<Date> =>  {
                const dataOut_1600 = new DataInOut();
                dataOut_1600.writeByte(12);
                const argsNames_1602: string[] = [];
                const argsValues_1603: any[] = [];
                const result_1601 = ARFuture.of<Date>();
                sCtx_1553.invokeRemoteMethodAfter("createTime", result_1601, argsNames_1602, argsValues_1603);
                const reqId_1599 = sCtx_1553.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1601 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1553, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1601.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1600.writeInt(reqId_1599);
                sCtx_1553.sendToRemote(dataOut_1600.toArray());
                return result_1601;
                
            }
            , onlineTime: (): ARFuture<Date> =>  {
                const dataOut_1605 = new DataInOut();
                dataOut_1605.writeByte(13);
                const argsNames_1607: string[] = [];
                const argsValues_1608: any[] = [];
                const result_1606 = ARFuture.of<Date>();
                sCtx_1553.invokeRemoteMethodAfter("onlineTime", result_1606, argsNames_1607, argsValues_1608);
                const reqId_1604 = sCtx_1553.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1606 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_1553, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1606.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1605.writeInt(reqId_1604);
                sCtx_1553.sendToRemote(dataOut_1605.toArray());
                return result_1606;
                
            }
            , addAccessGroup: (groupId: bigint): ARFuture<boolean> =>  {
                const dataOut_1610 = new DataInOut();
                dataOut_1610.writeByte(14);
                const argsNames_1612: string[] = ["groupId"];
                const argsValues_1613: any[] = [groupId];
                const result_1611 = ARFuture.of<boolean>();
                sCtx_1553.invokeRemoteMethodAfter("addAccessGroup", result_1611, argsNames_1612, argsValues_1613);
                const reqId_1609 = sCtx_1553.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1611 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1553, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1611.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1610.writeInt(reqId_1609);
                dataOut_1610.writeLong(groupId);
                sCtx_1553.sendToRemote(dataOut_1610.toArray());
                return result_1611;
                
            }
            , removeAccessGroup: (groupId: bigint): ARFuture<boolean> =>  {
                const dataOut_1615 = new DataInOut();
                dataOut_1615.writeByte(15);
                const argsNames_1617: string[] = ["groupId"];
                const argsValues_1618: any[] = [groupId];
                const result_1616 = ARFuture.of<boolean>();
                sCtx_1553.invokeRemoteMethodAfter("removeAccessGroup", result_1616, argsNames_1617, argsValues_1618);
                const reqId_1614 = sCtx_1553.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1616 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1553, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1616.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1615.writeInt(reqId_1614);
                dataOut_1615.writeLong(groupId);
                sCtx_1553.sendToRemote(dataOut_1615.toArray());
                return result_1616;
                
            }
            , setMsgQueueLimit: (limit: number): AFuture =>  {
                const dataOut_1620 = new DataInOut();
                dataOut_1620.writeByte(16);
                const argsNames_1622: string[] = ["limit"];
                const argsValues_1623: any[] = [limit];
                const result_1621 = AFuture.make();
                sCtx_1553.invokeRemoteMethodAfter("setMsgQueueLimit", result_1621, argsNames_1622, argsValues_1623);
                const reqId_1619 = sCtx_1553.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1621 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1621.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1620.writeInt(reqId_1619);
                dataOut_1620.writeInt(limit);
                sCtx_1553.sendToRemote(dataOut_1620.toArray());
                return result_1621;
                
            }
            , setMsgTimeLimit: (seconds: number): AFuture =>  {
                const dataOut_1625 = new DataInOut();
                dataOut_1625.writeByte(17);
                const argsNames_1627: string[] = ["seconds"];
                const argsValues_1628: any[] = [seconds];
                const result_1626 = AFuture.make();
                sCtx_1553.invokeRemoteMethodAfter("setMsgTimeLimit", result_1626, argsNames_1627, argsValues_1628);
                const reqId_1624 = sCtx_1553.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1626 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1626.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1625.writeInt(reqId_1624);
                dataOut_1625.writeInt(seconds);
                sCtx_1553.sendToRemote(dataOut_1625.toArray());
                return result_1626;
                
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
                    let stream_1630: ClientApiRegSafeStream;
                    stream_1630 = ClientApiRegSafeStream.META.deserialize(ctx, dataIn);
                    const argsNames_1631: string[] = ["stream"];
                    const argsValues_1632: any[] = [stream_1630];
                    ctx.invokeLocalMethodBefore("enter", argsNames_1631, argsValues_1632);
                    localApi.enter(stream_1630);
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_1631, argsValues_1632);
                    break;
                    
                }
                case 4:  {
                    let stream_1634: GlobalRegClientApiStream;
                    stream_1634 = GlobalRegClientApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_1635: string[] = ["stream"];
                    const argsValues_1636: any[] = [stream_1634];
                    ctx.invokeLocalMethodBefore("enterGlobal", argsNames_1635, argsValues_1636);
                    localApi.enterGlobal(stream_1634);
                    ctx.invokeLocalMethodAfter("enterGlobal", null, argsNames_1635, argsValues_1636);
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
    makeRemote(sCtx_1637: MetaContext): ClientApiRegUnsafeRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1637.flush();
                
            }
            , getFastMetaContext: () => sCtx_1637, enter: (stream: ClientApiRegSafeStream): void =>  {
                const dataOut_1639 = new DataInOut();
                dataOut_1639.writeByte(3);
                const argsNames_1641: string[] = ["stream"];
                const argsValues_1642: any[] = [stream];
                sCtx_1637.invokeRemoteMethodAfter("enter", null, argsNames_1641, argsValues_1642);
                ClientApiRegSafeStream.META.serialize(sCtx_1637, stream, dataOut_1639);
                sCtx_1637.sendToRemote(dataOut_1639.toArray());
                
            }
            , enterGlobal: (stream: GlobalRegClientApiStream): void =>  {
                const dataOut_1644 = new DataInOut();
                dataOut_1644.writeByte(4);
                const argsNames_1646: string[] = ["stream"];
                const argsValues_1647: any[] = [stream];
                sCtx_1637.invokeRemoteMethodAfter("enterGlobal", null, argsNames_1646, argsValues_1647);
                GlobalRegClientApiStream.META.serialize(sCtx_1637, stream, dataOut_1644);
                sCtx_1637.sendToRemote(dataOut_1644.toArray());
                
            }
            , openEnter(factory: (api: ClientApiRegSafeRemote) => any, converter: BytesConverter, ...keys: any[]): ClientApiRegSafeRemote  {
                return sCtx_1637.findContext(ctx =>  {
                    ctx.onFlushData(data => this.enter(ClientApiRegSafeStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((ClientApiRegSafe as any).META));
                    
                }
                , ...keys).makeRemote((ClientApiRegSafe as any).META) as ClientApiRegSafeRemote;
                
            }
            , openEnterGlobal(factory: (api: GlobalRegClientApiRemote) => any, converter: BytesConverter, ...keys: any[]): GlobalRegClientApiRemote  {
                return sCtx_1637.findContext(ctx =>  {
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
                    let _key_1649: Key;
                    _key_1649 = Key.META.deserialize(ctx, dataIn);
                    const argsNames_1650: string[] = ["key"];
                    const argsValues_1651: any[] = [_key_1649];
                    ctx.invokeLocalMethodBefore("setMasterKey", argsNames_1650, argsValues_1651);
                    localApi.setMasterKey(_key_1649);
                    ctx.invokeLocalMethodAfter("setMasterKey", null, argsNames_1650, argsValues_1651);
                    break;
                    
                }
                case 4:  {
                    const reqId_1652 = dataIn.readInt();
                    const argsNames_1653: string[] = [];
                    const argsValues_1654: any[] = [];
                    ctx.invokeLocalMethodBefore("finish", argsNames_1653, argsValues_1654);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.finish();
                    ctx.invokeLocalMethodAfter("finish", resultFuture, argsNames_1653, argsValues_1654);
                    resultFuture.to((v_1656: FinishResultGlobalRegServerApi) =>  {
                        const data_1655 = new DataInOut();
                        FinishResultGlobalRegServerApi.META.serialize(ctx, v_1656, data_1655);
                        ctx.sendResultToRemote(reqId_1652, data_1655.toArray());
                        
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
    makeRemote(sCtx_1657: MetaContext): GlobalRegServerApiRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1657.flush();
                
            }
            , getFastMetaContext: () => sCtx_1657, setMasterKey: (key: Key): void =>  {
                const dataOut_1659 = new DataInOut();
                dataOut_1659.writeByte(3);
                const argsNames_1661: string[] = ["key"];
                const argsValues_1662: any[] = [key];
                sCtx_1657.invokeRemoteMethodAfter("setMasterKey", null, argsNames_1661, argsValues_1662);
                Key.META.serialize(sCtx_1657, key, dataOut_1659);
                sCtx_1657.sendToRemote(dataOut_1659.toArray());
                
            }
            , finish: (): ARFuture<FinishResultGlobalRegServerApi> =>  {
                const dataOut_1664 = new DataInOut();
                dataOut_1664.writeByte(4);
                const argsNames_1666: string[] = [];
                const argsValues_1667: any[] = [];
                const result_1665 = ARFuture.of<FinishResultGlobalRegServerApi>();
                sCtx_1657.invokeRemoteMethodAfter("finish", result_1665, argsNames_1666, argsValues_1667);
                const reqId_1663 = sCtx_1657.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1665 as ARFuture<FinishResultGlobalRegServerApi>).tryDone(FinishResultGlobalRegServerApi.META.deserialize(sCtx_1657, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1665.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1664.writeInt(reqId_1663);
                sCtx_1657.sendToRemote(dataOut_1664.toArray());
                return result_1665;
                
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
                    let salt_1669: string;
                    let suffix_1670: string;
                    let passwords_1671: number[];
                    let parent_1672: UUID;
                    let globalApi_1673: GlobalApiStream;
                    let stringBytes_1674: Uint8Array;
                    const len_1676 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1677 = dataIn.readBytes(len_1676);
                    stringBytes_1674 = bytes_1677;
                    salt_1669 = new TextDecoder('utf-8').decode(stringBytes_1674);
                    let stringBytes_1678: Uint8Array;
                    const len_1680 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1681 = dataIn.readBytes(len_1680);
                    stringBytes_1678 = bytes_1681;
                    suffix_1670 = new TextDecoder('utf-8').decode(stringBytes_1678);
                    const len_1683 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    passwords_1671 = new Array<number>(len_1683);
                    for (let idx_1682 = 0;
                    idx_1682 < len_1683;
                    idx_1682++)  {
                        passwords_1671[idx_1682] = dataIn.readInt();
                        
                    }
                    parent_1672 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    globalApi_1673 = GlobalApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_1684: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                    const argsValues_1685: any[] = [salt_1669, suffix_1670, passwords_1671, parent_1672, globalApi_1673];
                    ctx.invokeLocalMethodBefore("registration", argsNames_1684, argsValues_1685);
                    localApi.registration(salt_1669, suffix_1670, passwords_1671, parent_1672, globalApi_1673);
                    ctx.invokeLocalMethodAfter("registration", null, argsNames_1684, argsValues_1685);
                    break;
                    
                }
                case 4:  {
                    const reqId_1686 = dataIn.readInt();
                    let parent_1687: UUID;
                    let powMethods_1688: PowMethod;
                    parent_1687 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    powMethods_1688 = PowMethod.META.deserialize(ctx, dataIn);
                    const argsNames_1689: string[] = ["parent", "powMethods"];
                    const argsValues_1690: any[] = [parent_1687, powMethods_1688];
                    ctx.invokeLocalMethodBefore("requestWorkProofData", argsNames_1689, argsValues_1690);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.requestWorkProofData(parent_1687, powMethods_1688);
                    ctx.invokeLocalMethodAfter("requestWorkProofData", resultFuture, argsNames_1689, argsValues_1690);
                    resultFuture.to((v_1692: WorkProofDTO) =>  {
                        const data_1691 = new DataInOut();
                        WorkProofDTO.META.serialize(ctx, v_1692, data_1691);
                        ctx.sendResultToRemote(reqId_1686, data_1691.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_1693 = dataIn.readInt();
                    let serverIds_1694: Cloud;
                    serverIds_1694 = Cloud.META.deserialize(ctx, dataIn);
                    const argsNames_1695: string[] = ["serverIds"];
                    const argsValues_1696: any[] = [serverIds_1694];
                    ctx.invokeLocalMethodBefore("resolveServers", argsNames_1695, argsValues_1696);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.resolveServers(serverIds_1694);
                    ctx.invokeLocalMethodAfter("resolveServers", resultFuture, argsNames_1695, argsValues_1696);
                    resultFuture.to((v_1698: ServerDescriptor[]) =>  {
                        const data_1697 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1697, v_1698.length);
                        for (const el_1699 of v_1698)  {
                            ServerDescriptor.META.serialize(ctx, el_1699, data_1697);
                            
                        }
                        ctx.sendResultToRemote(reqId_1693, data_1697.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    let _key_1701: Key;
                    _key_1701 = Key.META.deserialize(ctx, dataIn);
                    const argsNames_1702: string[] = ["key"];
                    const argsValues_1703: any[] = [_key_1701];
                    ctx.invokeLocalMethodBefore("setReturnKey", argsNames_1702, argsValues_1703);
                    localApi.setReturnKey(_key_1701);
                    ctx.invokeLocalMethodAfter("setReturnKey", null, argsNames_1702, argsValues_1703);
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
    makeRemote(sCtx_1704: MetaContext): ServerRegistrationApiRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1704.flush();
                
            }
            , getFastMetaContext: () => sCtx_1704, registration: (salt: string, suffix: string, passwords: number[], parent: UUID, globalApi: GlobalApiStream): void =>  {
                const dataOut_1706 = new DataInOut();
                dataOut_1706.writeByte(3);
                const argsNames_1708: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                const argsValues_1709: any[] = [salt, suffix, passwords, parent, globalApi];
                sCtx_1704.invokeRemoteMethodAfter("registration", null, argsNames_1708, argsValues_1709);
                const stringBytes_1710 = new TextEncoder().encode(salt);
                SerializerPackNumber.INSTANCE.put(dataOut_1706, stringBytes_1710.length);
                dataOut_1706.write(stringBytes_1710);
                const stringBytes_1712 = new TextEncoder().encode(suffix);
                SerializerPackNumber.INSTANCE.put(dataOut_1706, stringBytes_1712.length);
                dataOut_1706.write(stringBytes_1712);
                SerializerPackNumber.INSTANCE.put(dataOut_1706, passwords.length);
                for (const el_1714 of passwords)  {
                    dataOut_1706.writeInt(el_1714);
                    
                }
                FastMeta.META_UUID.serialize(sCtx_1704, parent, dataOut_1706);
                GlobalApiStream.META.serialize(sCtx_1704, globalApi, dataOut_1706);
                sCtx_1704.sendToRemote(dataOut_1706.toArray());
                
            }
            , requestWorkProofData: (parent: UUID, powMethods: PowMethod): ARFuture<WorkProofDTO> =>  {
                const dataOut_1716 = new DataInOut();
                dataOut_1716.writeByte(4);
                const argsNames_1718: string[] = ["parent", "powMethods"];
                const argsValues_1719: any[] = [parent, powMethods];
                const result_1717 = ARFuture.of<WorkProofDTO>();
                sCtx_1704.invokeRemoteMethodAfter("requestWorkProofData", result_1717, argsNames_1718, argsValues_1719);
                const reqId_1715 = sCtx_1704.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1717 as ARFuture<WorkProofDTO>).tryDone(WorkProofDTO.META.deserialize(sCtx_1704, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1717.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1716.writeInt(reqId_1715);
                FastMeta.META_UUID.serialize(sCtx_1704, parent, dataOut_1716);
                PowMethod.META.serialize(sCtx_1704, powMethods, dataOut_1716);
                sCtx_1704.sendToRemote(dataOut_1716.toArray());
                return result_1717;
                
            }
            , resolveServers: (serverIds: Cloud): ARFuture<ServerDescriptor[]> =>  {
                const dataOut_1721 = new DataInOut();
                dataOut_1721.writeByte(5);
                const argsNames_1723: string[] = ["serverIds"];
                const argsValues_1724: any[] = [serverIds];
                const result_1722 = ARFuture.of<ServerDescriptor[]>();
                sCtx_1704.invokeRemoteMethodAfter("resolveServers", result_1722, argsNames_1723, argsValues_1724);
                const reqId_1720 = sCtx_1704.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1722 as ARFuture<ServerDescriptor[]>).tryDone(FastMeta.getMetaArray(ServerDescriptor.META).deserialize(sCtx_1704, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1722.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1721.writeInt(reqId_1720);
                Cloud.META.serialize(sCtx_1704, serverIds, dataOut_1721);
                sCtx_1704.sendToRemote(dataOut_1721.toArray());
                return result_1722;
                
            }
            , setReturnKey: (key: Key): void =>  {
                const dataOut_1726 = new DataInOut();
                dataOut_1726.writeByte(6);
                const argsNames_1728: string[] = ["key"];
                const argsValues_1729: any[] = [key];
                sCtx_1704.invokeRemoteMethodAfter("setReturnKey", null, argsNames_1728, argsValues_1729);
                Key.META.serialize(sCtx_1704, key, dataOut_1726);
                sCtx_1704.sendToRemote(dataOut_1726.toArray());
                
            }
            , openRegistration(salt: string, suffix: string, passwords: number[], parent: UUID, factory: (api: GlobalRegServerApiRemote) => any, converter: BytesConverter, ...keys: any[]): GlobalRegServerApiRemote  {
                return sCtx_1704.findContext(ctx =>  {
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
                    const reqId_1730 = dataIn.readInt();
                    let cryptoLib_1731: CryptoLib;
                    cryptoLib_1731 = CryptoLib.META.deserialize(ctx, dataIn);
                    const argsNames_1732: string[] = ["cryptoLib"];
                    const argsValues_1733: any[] = [cryptoLib_1731];
                    ctx.invokeLocalMethodBefore("getAsymmetricPublicKey", argsNames_1732, argsValues_1733);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getAsymmetricPublicKey(cryptoLib_1731);
                    ctx.invokeLocalMethodAfter("getAsymmetricPublicKey", resultFuture, argsNames_1732, argsValues_1733);
                    resultFuture.to((v_1735: SignedKey) =>  {
                        const data_1734 = new DataInOut();
                        SignedKey.META.serialize(ctx, v_1735, data_1734);
                        ctx.sendResultToRemote(reqId_1730, data_1734.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let cryptoLib_1737: CryptoLib;
                    let stream_1738: ServerRegistrationApiStream;
                    cryptoLib_1737 = CryptoLib.META.deserialize(ctx, dataIn);
                    stream_1738 = ServerRegistrationApiStream.META.deserialize(ctx, dataIn);
                    const argsNames_1739: string[] = ["cryptoLib", "stream"];
                    const argsValues_1740: any[] = [cryptoLib_1737, stream_1738];
                    ctx.invokeLocalMethodBefore("enter", argsNames_1739, argsValues_1740);
                    localApi.enter(cryptoLib_1737, stream_1738);
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_1739, argsValues_1740);
                    break;
                    
                }
                case 6:  {
                    const reqId_1741 = dataIn.readInt();
                    const argsNames_1742: string[] = [];
                    const argsValues_1743: any[] = [];
                    ctx.invokeLocalMethodBefore("getMyIp", argsNames_1742, argsValues_1743);
                    ctx.regLocalFuture();
                    const resultFuture = localApi.getMyIp();
                    ctx.invokeLocalMethodAfter("getMyIp", resultFuture, argsNames_1742, argsValues_1743);
                    resultFuture.to((v_1745: IpInfo) =>  {
                        const data_1744 = new DataInOut();
                        IpInfo.META.serialize(ctx, v_1745, data_1744);
                        ctx.sendResultToRemote(reqId_1741, data_1744.toArray());
                        
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
    makeRemote(sCtx_1746: MetaContext): RegistrationRootApiRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1746.flush();
                
            }
            , getFastMetaContext: () => sCtx_1746, getAsymmetricPublicKey: (cryptoLib: CryptoLib): ARFuture<SignedKey> =>  {
                const dataOut_1748 = new DataInOut();
                dataOut_1748.writeByte(3);
                const argsNames_1750: string[] = ["cryptoLib"];
                const argsValues_1751: any[] = [cryptoLib];
                const result_1749 = ARFuture.of<SignedKey>();
                sCtx_1746.invokeRemoteMethodAfter("getAsymmetricPublicKey", result_1749, argsNames_1750, argsValues_1751);
                const reqId_1747 = sCtx_1746.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1749 as ARFuture<SignedKey>).tryDone(SignedKey.META.deserialize(sCtx_1746, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1749.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1748.writeInt(reqId_1747);
                CryptoLib.META.serialize(sCtx_1746, cryptoLib, dataOut_1748);
                sCtx_1746.sendToRemote(dataOut_1748.toArray());
                return result_1749;
                
            }
            , enter: (cryptoLib: CryptoLib, stream: ServerRegistrationApiStream): void =>  {
                const dataOut_1753 = new DataInOut();
                dataOut_1753.writeByte(4);
                const argsNames_1755: string[] = ["cryptoLib", "stream"];
                const argsValues_1756: any[] = [cryptoLib, stream];
                sCtx_1746.invokeRemoteMethodAfter("enter", null, argsNames_1755, argsValues_1756);
                CryptoLib.META.serialize(sCtx_1746, cryptoLib, dataOut_1753);
                ServerRegistrationApiStream.META.serialize(sCtx_1746, stream, dataOut_1753);
                sCtx_1746.sendToRemote(dataOut_1753.toArray());
                
            }
            , getMyIp: (): ARFuture<IpInfo> =>  {
                const dataOut_1758 = new DataInOut();
                dataOut_1758.writeByte(6);
                const argsNames_1760: string[] = [];
                const argsValues_1761: any[] = [];
                const result_1759 = ARFuture.of<IpInfo>();
                sCtx_1746.invokeRemoteMethodAfter("getMyIp", result_1759, argsNames_1760, argsValues_1761);
                const reqId_1757 = sCtx_1746.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1759 as ARFuture<IpInfo>).tryDone(IpInfo.META.deserialize(sCtx_1746, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1759.error(new Error("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1758.writeInt(reqId_1757);
                sCtx_1746.sendToRemote(dataOut_1758.toArray());
                return result_1759;
                
            }
            , openEnter(cryptoLib: CryptoLib, factory: (api: ServerRegistrationApiRemote) => any, converter: BytesConverter, ...keys: any[]): ServerRegistrationApiRemote  {
                return sCtx_1746.findContext(ctx =>  {
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
    makeRemote(sCtx_1762: MetaContext): ClientApiRegSafeRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1762.flush();
                
            }
            , getFastMetaContext: () => sCtx_1762, 
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
    makeRemote(sCtx_1763: MetaContext): GlobalRegClientApiRemote  {
        const remoteApiImpl =  {
            flush: (): void =>  {
                sCtx_1763.flush();
                
            }
            , getFastMetaContext: () => sCtx_1763, 
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
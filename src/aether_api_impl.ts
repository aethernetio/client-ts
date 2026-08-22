import  {
    AFuture, ARFuture, DataIn, DataOut, DataInOut, DataInOutStatic, FastMetaType, MetaContext, FastMeta, SerializerPackNumber, DeserializerPackNumber, RemoteApi, FastMetaApi, FastFutureContextStub, SecurityConnectionDropException, AetherException, UUID, URI, AString, BytesConverter,
}
from './aether_client';
import  {
    AetherCodec, ClientActivityType, CryptoLib, PowMethod, ServerType, Status, AetherTypeDescriptor, IPAddress, Key, KeyAsymmetric, KeyAsymmetricPrivate, KeyAsymmetricPublic, KeySign, KeySignPrivate, KeySignPublic, KeySymmetric, PairKeys, Sign, Telemetry, WorkProofConfig, AccessCheckPair, AccessCheckResult, AccessGroup, AetherApiDefinition, AetherArgumentDescriptor, AetherArrayType, AetherBaseType, AetherFieldDescriptor, AetherMethodDescriptor, AetherModuleDescriptor, AetherNullableType, AetherStreamType, AetherStructDescriptor, AppliedConfig, ClientActivity, ClientConnectionInfo, ClientInfo, ClientLogEntry, ClientStateForSave, Cloud, CloudConfig, CloudWeight, CoderAndPort, FinishResult, FinishResultGlobalRegServerApi, HydrogenCurvePrivate, HydrogenCurvePublic, HydrogenSecretBox, HydrogenSignPrivate, HydrogenSignPublic, IceCandidate, IPAddressAndPorts, IPAddressAndPortsList, IPAddressV4, IPAddressV6, IPAddressWeb, IpInfo, KeyValuePair, Message, MessageInfo, MoneyOperation, PairKeysAsym, PairKeysAsymSigned, PairKeysSign, PairKeysSym, ServerDescriptor, ServerDescriptorWithGeo, SignAE_ED25519, SignedKey, SignHYDROGEN, SodiumChacha20Poly1305, SodiumCurvePrivate, SodiumCurvePublic, SodiumSignPrivate, SodiumSignPublic, TelemetryCPP, Uap, UUIDAndCloud, WebRtcSession, WorkProofBCrypt, WorkProofDTO, ClientApiRegSafeStream, ClientApiStream, ClientInteractionClientStream, GlobalApiStream, GlobalRegClientApiStream, LoginClientStream, LoginStream, ServerRegistrationApiStream, ClientApiUnsafeSendSafeApiDataMultiArguments, ClientApiUnsafeSendSafeApiDataArguments, ClientApiSafeChangeParentArguments, ClientApiSafeChangeAliasArguments, ClientApiSafeNewChildrenArguments, ClientApiSafeSendMessagesArguments, ClientApiSafeSendServerDescriptorArguments, ClientApiSafeSendServerDescriptorsArguments, ClientApiSafeSendCloudArguments, ClientApiSafeSendCloudsArguments, ClientApiSafeRequestTelemetryArguments, ClientApiSafeSendAccessGroupsArguments, ClientApiSafeSendAccessGroupForClientArguments, ClientApiSafeAddItemsToAccessGroupArguments, ClientApiSafeRemoveItemsFromAccessGroupArguments, ClientApiSafeAddAccessGroupsToClientArguments, ClientApiSafeRemoveAccessGroupsFromClientArguments, ClientApiSafeSendAllAccessedClientsArguments, ClientApiSafeSendAccessCheckResultsArguments, ClientApiSafeSendMessageArguments, ClientApiSafeSendCloudConfigsArguments, ClientApiSafeClientInteractionArguments, AuthorizedApiBackIdArguments, AuthorizedApiPingArguments, AuthorizedApiClientArguments, AuthorizedApiSendMessageArguments, AuthorizedApiSendMessagesArguments, AuthorizedApiSendMulticastArguments, AuthorizedApiSendMessageWithResultArguments, AuthorizedApiCreateAccessGroupArguments, AuthorizedApiAddToAccessGroupArguments, AuthorizedApiRemoveFromAccessGroupArguments, AuthorizedApiCheckAccessForSendMessageArguments, AuthorizedApiResolverServersArguments, AuthorizedApiResolveCloudsArguments, AuthorizedApiReportAppliedConfigArguments, AuthorizedApiGetAccessGroupsArguments, AuthorizedApiGetAccessGroupArguments, AuthorizedApiGetAllAccessedClientsArguments, AuthorizedApiCheckAccessForSendMessage2Arguments, AuthorizedApiSendTelemetryArguments, AuthorizedApiRequestAccessGroupsForClientsArguments, AuthorizedApiRequestAccessGroupsItemsArguments, AuthorizedApiSendAccessGroupForClientArguments, AuthorizedApiAddItemsToAccessGroupArguments, AuthorizedApiRemoveItemsFromAccessGroupArguments, AuthorizedApiAddAccessGroupsToClientArguments, AuthorizedApiRemoveAccessGroupsFromClientArguments, AuthorizedApiRequestAllAccessedClientsArguments, AuthorizedApiRequestAccessCheckArguments, AuthorizedApiGetClientActivityArguments, AuthorizedApiSearchClientLogsArguments, AuthorizedApiGetClientConnectionsArguments, AuthorizedApiGetClientMessagesArguments, AuthorizedApiSetNextReadDelayArguments, AuthorizedApiGetUapArguments, AuthorizedApiRequestWebRtcSessionArguments, AuthorizedApiPublishWebRtcSessionArguments, AuthorizedApiSelfDestructArguments, AuthorizedApiGetServersArguments, LoginApiGetTimeUTCArguments, LoginApiLoginByUIDArguments, LoginApiLoginByAliasArguments, LoginApiGetMyIpArguments, ServerApiByUidGetBalanceArguments, ServerApiByUidSetParentArguments, ServerApiByUidBlockArguments, ServerApiByUidGetPositionArguments, ServerApiByUidGetParentArguments, ServerApiByUidGetBeneficiaryArguments, ServerApiByUidSetBeneficiaryArguments, ServerApiByUidGetBlockTimeArguments, ServerApiByUidUnblockArguments, ServerApiByUidCreateTimeArguments, ServerApiByUidOnlineTimeArguments, ServerApiByUidAddAccessGroupArguments, ServerApiByUidRemoveAccessGroupArguments, ServerApiByUidSetMsgQueueLimitArguments, ServerApiByUidSetMsgTimeLimitArguments, ServerApiByUidAddServersToCloudArguments, ServerApiByUidRemoveServersFromCloudArguments, ClientApiRegUnsafeEnterArguments, ClientApiRegUnsafeEnterGlobalArguments, GlobalRegServerApiSetMasterKeyArguments, GlobalRegServerApiFinishArguments, ServerRegistrationApiRegistrationArguments, ServerRegistrationApiRequestWorkProofDataArguments, ServerRegistrationApiResolveServersArguments, ServerRegistrationApiSetReturnKeyArguments, RegistrationRootApiGetAsymmetricPublicKeyArguments, RegistrationRootApiEnterArguments, RegistrationRootApiGetMyIpArguments, ClientApiUnsafe, ClientApiSafe, AuthorizedApi, LoginApi, ServerApiByUidClient, ServerApiByUid, ClientApiRegUnsafe, GlobalRegServerApi, ServerRegistrationApi, RegistrationRootApi, ClientApiRegSafe, GlobalRegClientApi, ClientApiUnsafeRemote, ClientApiSafeRemote, AuthorizedApiRemote, LoginApiRemote, ServerApiByUidClientRemote, ServerApiByUidRemote, ClientApiRegUnsafeRemote, GlobalRegServerApiRemote, ServerRegistrationApiRemote, RegistrationRootApiRemote, ClientApiRegSafeRemote, GlobalRegClientApiRemote
}
from './aether_api';
// This is always relative
export class AetherCodecMetaImpl implements FastMetaType<AetherCodec>  {
    private readonly values = ['TCP', 'UDP', 'WS', 'WSS'];
    serialize(_sCtx: MetaContext, obj: AetherCodec, out: DataOut): void  {
        out.writeByte(this.values.indexOf(obj as string));
        
    }
    deserialize(_sCtx: MetaContext, in_: DataIn): AetherCodec  {
        try  {
            const ordinal = in_.readUByte();
            if (ordinal < 0 || ordinal >= this.values.length) throw new Error(`Invalid ordinal ${ordinal} for enum AetherCodec`);
            return this.values[ordinal] as AetherCodec;
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Enum error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
        try  {
            const ordinal = in_.readUByte();
            if (ordinal < 0 || ordinal >= this.values.length) throw new Error(`Invalid ordinal ${ordinal} for enum ClientActivityType`);
            return this.values[ordinal] as ClientActivityType;
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Enum error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
        try  {
            const ordinal = in_.readUByte();
            if (ordinal < 0 || ordinal >= this.values.length) throw new Error(`Invalid ordinal ${ordinal} for enum CryptoLib`);
            return this.values[ordinal] as CryptoLib;
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Enum error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
        try  {
            const ordinal = in_.readUByte();
            if (ordinal < 0 || ordinal >= this.values.length) throw new Error(`Invalid ordinal ${ordinal} for enum PowMethod`);
            return this.values[ordinal] as PowMethod;
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Enum error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
        try  {
            const ordinal = in_.readUByte();
            if (ordinal < 0 || ordinal >= this.values.length) throw new Error(`Invalid ordinal ${ordinal} for enum ServerType`);
            return this.values[ordinal] as ServerType;
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Enum error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
        try  {
            const ordinal = in_.readUByte();
            if (ordinal < 0 || ordinal >= this.values.length) throw new Error(`Invalid ordinal ${ordinal} for enum Status`);
            return this.values[ordinal] as Status;
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Enum error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'AetherTypeDescriptor' with invalid type id ${typeId}`);
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
            default: throw new Error(`Cannot serialize 'AetherTypeDescriptor' with unknown type id ${typeId}`);
            
        }
        
    }
    deserialize(sCtx_0: MetaContext, in__3: DataIn): AetherTypeDescriptor  {
        try  {
            const typeId = in__3.readUByte();
            switch(typeId)  {
                case 1: return (AetherBaseType as any).META_BODY.deserialize(sCtx_0, in__3) as any as AetherTypeDescriptor;
                case 2: return (AetherArrayType as any).META_BODY.deserialize(sCtx_0, in__3) as any as AetherTypeDescriptor;
                case 3: return (AetherStreamType as any).META_BODY.deserialize(sCtx_0, in__3) as any as AetherTypeDescriptor;
                case 4: return (AetherNullableType as any).META_BODY.deserialize(sCtx_0, in__3) as any as AetherTypeDescriptor;
                default: throw new Error(`Bad type id ${typeId} for type 'AetherTypeDescriptor'`);
                
            }
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
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
            default: throw new Error(`Cannot hashCode 'AetherTypeDescriptor' with unknown type id ${typeId}`);
            
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
            default: throw new Error(`Cannot equals 'AetherTypeDescriptor' with unknown type id ${typeId1}`);
            
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
            default: throw new Error(`Cannot toString 'AetherTypeDescriptor' with unknown type id ${typeId}`);
            
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
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'IPAddress' with invalid type id ${typeId}`);
        _out_6.writeByte(typeId);
        switch(typeId)  {
            case 1: (IPAddressV4 as any).META_BODY.serialize(sCtx_4, obj_5 as any as IPAddressV4, _out_6);
            break;
            case 2: (IPAddressV6 as any).META_BODY.serialize(sCtx_4, obj_5 as any as IPAddressV6, _out_6);
            break;
            case 3: (IPAddressWeb as any).META_BODY.serialize(sCtx_4, obj_5 as any as IPAddressWeb, _out_6);
            break;
            default: throw new Error(`Cannot serialize 'IPAddress' with unknown type id ${typeId}`);
            
        }
        
    }
    deserialize(sCtx_4: MetaContext, in__7: DataIn): IPAddress  {
        try  {
            const typeId = in__7.readUByte();
            switch(typeId)  {
                case 1: return (IPAddressV4 as any).META_BODY.deserialize(sCtx_4, in__7) as any as IPAddress;
                case 2: return (IPAddressV6 as any).META_BODY.deserialize(sCtx_4, in__7) as any as IPAddress;
                case 3: return (IPAddressWeb as any).META_BODY.deserialize(sCtx_4, in__7) as any as IPAddress;
                default: throw new Error(`Bad type id ${typeId} for type 'IPAddress'`);
                
            }
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: IPAddress | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: return (IPAddressV4 as any).META.metaHashCode(obj as any as IPAddressV4);
            case 2: return (IPAddressV6 as any).META.metaHashCode(obj as any as IPAddressV6);
            case 3: return (IPAddressWeb as any).META.metaHashCode(obj as any as IPAddressWeb);
            default: throw new Error(`Cannot hashCode 'IPAddress' with unknown type id ${typeId}`);
            
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
            default: throw new Error(`Cannot equals 'IPAddress' with unknown type id ${typeId1}`);
            
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
            default: throw new Error(`Cannot toString 'IPAddress' with unknown type id ${typeId}`);
            
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
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'Key' with invalid type id ${typeId}`);
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
            default: throw new Error(`Cannot serialize 'Key' with unknown type id ${typeId}`);
            
        }
        
    }
    deserialize(sCtx_8: MetaContext, in__11: DataIn): Key  {
        try  {
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
                default: throw new Error(`Bad type id ${typeId} for type 'Key'`);
                
            }
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
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
            default: throw new Error(`Cannot hashCode 'Key' with unknown type id ${typeId}`);
            
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
            default: throw new Error(`Cannot equals 'Key' with unknown type id ${typeId1}`);
            
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
            default: throw new Error(`Cannot toString 'Key' with unknown type id ${typeId}`);
            
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
    serialize(sCtx_12: MetaContext, obj_13: KeyAsymmetric, _out_14: DataOut): void  {
        const typeId = typeof (obj_13 as any).getAetherTypeId === 'function' ? obj_13.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeyAsymmetric' with invalid type id ${typeId}`);
        _out_14.writeByte(typeId);
        switch(typeId)  {
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_12, obj_13 as any as HydrogenCurvePublic, _out_14);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_12, obj_13 as any as SodiumCurvePublic, _out_14);
            break;
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_12, obj_13 as any as HydrogenCurvePrivate, _out_14);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_12, obj_13 as any as SodiumCurvePrivate, _out_14);
            break;
            default: throw new Error(`Cannot serialize 'KeyAsymmetric' with unknown type id ${typeId}`);
            
        }
        
    }
    deserialize(sCtx_12: MetaContext, in__15: DataIn): KeyAsymmetric  {
        try  {
            const typeId = in__15.readUByte();
            switch(typeId)  {
                case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_12, in__15) as any as KeyAsymmetric;
                case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_12, in__15) as any as KeyAsymmetric;
                case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_12, in__15) as any as KeyAsymmetric;
                case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_12, in__15) as any as KeyAsymmetric;
                default: throw new Error(`Bad type id ${typeId} for type 'KeyAsymmetric'`);
                
            }
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: KeyAsymmetric | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 2: return (HydrogenCurvePublic as any).META.metaHashCode(obj as any as HydrogenCurvePublic);
            case 8: return (SodiumCurvePublic as any).META.metaHashCode(obj as any as SodiumCurvePublic);
            case 1: return (HydrogenCurvePrivate as any).META.metaHashCode(obj as any as HydrogenCurvePrivate);
            case 7: return (SodiumCurvePrivate as any).META.metaHashCode(obj as any as SodiumCurvePrivate);
            default: throw new Error(`Cannot hashCode 'KeyAsymmetric' with unknown type id ${typeId}`);
            
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
            case 2: return (HydrogenCurvePublic as any).META.metaEquals(v1 as any as HydrogenCurvePublic, v2);
            case 8: return (SodiumCurvePublic as any).META.metaEquals(v1 as any as SodiumCurvePublic, v2);
            case 1: return (HydrogenCurvePrivate as any).META.metaEquals(v1 as any as HydrogenCurvePrivate, v2);
            case 7: return (SodiumCurvePrivate as any).META.metaEquals(v1 as any as SodiumCurvePrivate, v2);
            default: throw new Error(`Cannot equals 'KeyAsymmetric' with unknown type id ${typeId1}`);
            
        }
        
    }
    metaToString(obj: KeyAsymmetric | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 2: (HydrogenCurvePublic as any).META.metaToString(obj as any as HydrogenCurvePublic, res);
            break;
            case 8: (SodiumCurvePublic as any).META.metaToString(obj as any as SodiumCurvePublic, res);
            break;
            case 1: (HydrogenCurvePrivate as any).META.metaToString(obj as any as HydrogenCurvePrivate, res);
            break;
            case 7: (SodiumCurvePrivate as any).META.metaToString(obj as any as SodiumCurvePrivate, res);
            break;
            default: throw new Error(`Cannot toString 'KeyAsymmetric' with unknown type id ${typeId}`);
            
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
    serialize(sCtx_16: MetaContext, obj_17: KeyAsymmetricPrivate, _out_18: DataOut): void  {
        const typeId = typeof (obj_17 as any).getAetherTypeId === 'function' ? obj_17.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeyAsymmetricPrivate' with invalid type id ${typeId}`);
        _out_18.writeByte(typeId);
        switch(typeId)  {
            case 1: (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_16, obj_17 as any as HydrogenCurvePrivate, _out_18);
            break;
            case 7: (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_16, obj_17 as any as SodiumCurvePrivate, _out_18);
            break;
            default: throw new Error(`Cannot serialize 'KeyAsymmetricPrivate' with unknown type id ${typeId}`);
            
        }
        
    }
    deserialize(sCtx_16: MetaContext, in__19: DataIn): KeyAsymmetricPrivate  {
        try  {
            const typeId = in__19.readUByte();
            switch(typeId)  {
                case 1: return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_16, in__19) as any as KeyAsymmetricPrivate;
                case 7: return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_16, in__19) as any as KeyAsymmetricPrivate;
                default: throw new Error(`Bad type id ${typeId} for type 'KeyAsymmetricPrivate'`);
                
            }
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: KeyAsymmetricPrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: return (HydrogenCurvePrivate as any).META.metaHashCode(obj as any as HydrogenCurvePrivate);
            case 7: return (SodiumCurvePrivate as any).META.metaHashCode(obj as any as SodiumCurvePrivate);
            default: throw new Error(`Cannot hashCode 'KeyAsymmetricPrivate' with unknown type id ${typeId}`);
            
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
            case 1: return (HydrogenCurvePrivate as any).META.metaEquals(v1 as any as HydrogenCurvePrivate, v2);
            case 7: return (SodiumCurvePrivate as any).META.metaEquals(v1 as any as SodiumCurvePrivate, v2);
            default: throw new Error(`Cannot equals 'KeyAsymmetricPrivate' with unknown type id ${typeId1}`);
            
        }
        
    }
    metaToString(obj: KeyAsymmetricPrivate | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: (HydrogenCurvePrivate as any).META.metaToString(obj as any as HydrogenCurvePrivate, res);
            break;
            case 7: (SodiumCurvePrivate as any).META.metaToString(obj as any as SodiumCurvePrivate, res);
            break;
            default: throw new Error(`Cannot toString 'KeyAsymmetricPrivate' with unknown type id ${typeId}`);
            
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
    serialize(sCtx_20: MetaContext, obj_21: KeyAsymmetricPublic, _out_22: DataOut): void  {
        const typeId = typeof (obj_21 as any).getAetherTypeId === 'function' ? obj_21.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeyAsymmetricPublic' with invalid type id ${typeId}`);
        _out_22.writeByte(typeId);
        switch(typeId)  {
            case 2: (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_20, obj_21 as any as HydrogenCurvePublic, _out_22);
            break;
            case 8: (SodiumCurvePublic as any).META_BODY.serialize(sCtx_20, obj_21 as any as SodiumCurvePublic, _out_22);
            break;
            default: throw new Error(`Cannot serialize 'KeyAsymmetricPublic' with unknown type id ${typeId}`);
            
        }
        
    }
    deserialize(sCtx_20: MetaContext, in__23: DataIn): KeyAsymmetricPublic  {
        try  {
            const typeId = in__23.readUByte();
            switch(typeId)  {
                case 2: return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_20, in__23) as any as KeyAsymmetricPublic;
                case 8: return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_20, in__23) as any as KeyAsymmetricPublic;
                default: throw new Error(`Bad type id ${typeId} for type 'KeyAsymmetricPublic'`);
                
            }
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: KeyAsymmetricPublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 2: return (HydrogenCurvePublic as any).META.metaHashCode(obj as any as HydrogenCurvePublic);
            case 8: return (SodiumCurvePublic as any).META.metaHashCode(obj as any as SodiumCurvePublic);
            default: throw new Error(`Cannot hashCode 'KeyAsymmetricPublic' with unknown type id ${typeId}`);
            
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
            case 2: return (HydrogenCurvePublic as any).META.metaEquals(v1 as any as HydrogenCurvePublic, v2);
            case 8: return (SodiumCurvePublic as any).META.metaEquals(v1 as any as SodiumCurvePublic, v2);
            default: throw new Error(`Cannot equals 'KeyAsymmetricPublic' with unknown type id ${typeId1}`);
            
        }
        
    }
    metaToString(obj: KeyAsymmetricPublic | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 2: (HydrogenCurvePublic as any).META.metaToString(obj as any as HydrogenCurvePublic, res);
            break;
            case 8: (SodiumCurvePublic as any).META.metaToString(obj as any as SodiumCurvePublic, res);
            break;
            default: throw new Error(`Cannot toString 'KeyAsymmetricPublic' with unknown type id ${typeId}`);
            
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
    serialize(sCtx_24: MetaContext, obj_25: KeySign, _out_26: DataOut): void  {
        const typeId = typeof (obj_25 as any).getAetherTypeId === 'function' ? obj_25.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeySign' with invalid type id ${typeId}`);
        _out_26.writeByte(typeId);
        switch(typeId)  {
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_24, obj_25 as any as SodiumSignPublic, _out_26);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_24, obj_25 as any as HydrogenSignPublic, _out_26);
            break;
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_24, obj_25 as any as SodiumSignPrivate, _out_26);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_24, obj_25 as any as HydrogenSignPrivate, _out_26);
            break;
            default: throw new Error(`Cannot serialize 'KeySign' with unknown type id ${typeId}`);
            
        }
        
    }
    deserialize(sCtx_24: MetaContext, in__27: DataIn): KeySign  {
        try  {
            const typeId = in__27.readUByte();
            switch(typeId)  {
                case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_24, in__27) as any as KeySign;
                case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_24, in__27) as any as KeySign;
                case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_24, in__27) as any as KeySign;
                case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_24, in__27) as any as KeySign;
                default: throw new Error(`Bad type id ${typeId} for type 'KeySign'`);
                
            }
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: KeySign | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 10: return (SodiumSignPublic as any).META.metaHashCode(obj as any as SodiumSignPublic);
            case 5: return (HydrogenSignPublic as any).META.metaHashCode(obj as any as HydrogenSignPublic);
            case 9: return (SodiumSignPrivate as any).META.metaHashCode(obj as any as SodiumSignPrivate);
            case 4: return (HydrogenSignPrivate as any).META.metaHashCode(obj as any as HydrogenSignPrivate);
            default: throw new Error(`Cannot hashCode 'KeySign' with unknown type id ${typeId}`);
            
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
            case 10: return (SodiumSignPublic as any).META.metaEquals(v1 as any as SodiumSignPublic, v2);
            case 5: return (HydrogenSignPublic as any).META.metaEquals(v1 as any as HydrogenSignPublic, v2);
            case 9: return (SodiumSignPrivate as any).META.metaEquals(v1 as any as SodiumSignPrivate, v2);
            case 4: return (HydrogenSignPrivate as any).META.metaEquals(v1 as any as HydrogenSignPrivate, v2);
            default: throw new Error(`Cannot equals 'KeySign' with unknown type id ${typeId1}`);
            
        }
        
    }
    metaToString(obj: KeySign | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 10: (SodiumSignPublic as any).META.metaToString(obj as any as SodiumSignPublic, res);
            break;
            case 5: (HydrogenSignPublic as any).META.metaToString(obj as any as HydrogenSignPublic, res);
            break;
            case 9: (SodiumSignPrivate as any).META.metaToString(obj as any as SodiumSignPrivate, res);
            break;
            case 4: (HydrogenSignPrivate as any).META.metaToString(obj as any as HydrogenSignPrivate, res);
            break;
            default: throw new Error(`Cannot toString 'KeySign' with unknown type id ${typeId}`);
            
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
    serialize(sCtx_28: MetaContext, obj_29: KeySignPrivate, _out_30: DataOut): void  {
        const typeId = typeof (obj_29 as any).getAetherTypeId === 'function' ? obj_29.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeySignPrivate' with invalid type id ${typeId}`);
        _out_30.writeByte(typeId);
        switch(typeId)  {
            case 9: (SodiumSignPrivate as any).META_BODY.serialize(sCtx_28, obj_29 as any as SodiumSignPrivate, _out_30);
            break;
            case 4: (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_28, obj_29 as any as HydrogenSignPrivate, _out_30);
            break;
            default: throw new Error(`Cannot serialize 'KeySignPrivate' with unknown type id ${typeId}`);
            
        }
        
    }
    deserialize(sCtx_28: MetaContext, in__31: DataIn): KeySignPrivate  {
        try  {
            const typeId = in__31.readUByte();
            switch(typeId)  {
                case 9: return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_28, in__31) as any as KeySignPrivate;
                case 4: return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_28, in__31) as any as KeySignPrivate;
                default: throw new Error(`Bad type id ${typeId} for type 'KeySignPrivate'`);
                
            }
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: KeySignPrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 9: return (SodiumSignPrivate as any).META.metaHashCode(obj as any as SodiumSignPrivate);
            case 4: return (HydrogenSignPrivate as any).META.metaHashCode(obj as any as HydrogenSignPrivate);
            default: throw new Error(`Cannot hashCode 'KeySignPrivate' with unknown type id ${typeId}`);
            
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
            case 9: return (SodiumSignPrivate as any).META.metaEquals(v1 as any as SodiumSignPrivate, v2);
            case 4: return (HydrogenSignPrivate as any).META.metaEquals(v1 as any as HydrogenSignPrivate, v2);
            default: throw new Error(`Cannot equals 'KeySignPrivate' with unknown type id ${typeId1}`);
            
        }
        
    }
    metaToString(obj: KeySignPrivate | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 9: (SodiumSignPrivate as any).META.metaToString(obj as any as SodiumSignPrivate, res);
            break;
            case 4: (HydrogenSignPrivate as any).META.metaToString(obj as any as HydrogenSignPrivate, res);
            break;
            default: throw new Error(`Cannot toString 'KeySignPrivate' with unknown type id ${typeId}`);
            
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
    serialize(sCtx_32: MetaContext, obj_33: KeySignPublic, _out_34: DataOut): void  {
        const typeId = typeof (obj_33 as any).getAetherTypeId === 'function' ? obj_33.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeySignPublic' with invalid type id ${typeId}`);
        _out_34.writeByte(typeId);
        switch(typeId)  {
            case 10: (SodiumSignPublic as any).META_BODY.serialize(sCtx_32, obj_33 as any as SodiumSignPublic, _out_34);
            break;
            case 5: (HydrogenSignPublic as any).META_BODY.serialize(sCtx_32, obj_33 as any as HydrogenSignPublic, _out_34);
            break;
            default: throw new Error(`Cannot serialize 'KeySignPublic' with unknown type id ${typeId}`);
            
        }
        
    }
    deserialize(sCtx_32: MetaContext, in__35: DataIn): KeySignPublic  {
        try  {
            const typeId = in__35.readUByte();
            switch(typeId)  {
                case 10: return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_32, in__35) as any as KeySignPublic;
                case 5: return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_32, in__35) as any as KeySignPublic;
                default: throw new Error(`Bad type id ${typeId} for type 'KeySignPublic'`);
                
            }
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: KeySignPublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 10: return (SodiumSignPublic as any).META.metaHashCode(obj as any as SodiumSignPublic);
            case 5: return (HydrogenSignPublic as any).META.metaHashCode(obj as any as HydrogenSignPublic);
            default: throw new Error(`Cannot hashCode 'KeySignPublic' with unknown type id ${typeId}`);
            
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
            case 10: return (SodiumSignPublic as any).META.metaEquals(v1 as any as SodiumSignPublic, v2);
            case 5: return (HydrogenSignPublic as any).META.metaEquals(v1 as any as HydrogenSignPublic, v2);
            default: throw new Error(`Cannot equals 'KeySignPublic' with unknown type id ${typeId1}`);
            
        }
        
    }
    metaToString(obj: KeySignPublic | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return ;
            
        }
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 10: (SodiumSignPublic as any).META.metaToString(obj as any as SodiumSignPublic, res);
            break;
            case 5: (HydrogenSignPublic as any).META.metaToString(obj as any as HydrogenSignPublic, res);
            break;
            default: throw new Error(`Cannot toString 'KeySignPublic' with unknown type id ${typeId}`);
            
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
    serialize(sCtx_36: MetaContext, obj_37: KeySymmetric, _out_38: DataOut): void  {
        const typeId = typeof (obj_37 as any).getAetherTypeId === 'function' ? obj_37.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'KeySymmetric' with invalid type id ${typeId}`);
        _out_38.writeByte(typeId);
        switch(typeId)  {
            case 6: (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_36, obj_37 as any as SodiumChacha20Poly1305, _out_38);
            break;
            case 3: (HydrogenSecretBox as any).META_BODY.serialize(sCtx_36, obj_37 as any as HydrogenSecretBox, _out_38);
            break;
            default: throw new Error(`Cannot serialize 'KeySymmetric' with unknown type id ${typeId}`);
            
        }
        
    }
    deserialize(sCtx_36: MetaContext, in__39: DataIn): KeySymmetric  {
        try  {
            const typeId = in__39.readUByte();
            switch(typeId)  {
                case 6: return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_36, in__39) as any as KeySymmetric;
                case 3: return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_36, in__39) as any as KeySymmetric;
                default: throw new Error(`Bad type id ${typeId} for type 'KeySymmetric'`);
                
            }
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: KeySymmetric | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 6: return (SodiumChacha20Poly1305 as any).META.metaHashCode(obj as any as SodiumChacha20Poly1305);
            case 3: return (HydrogenSecretBox as any).META.metaHashCode(obj as any as HydrogenSecretBox);
            default: throw new Error(`Cannot hashCode 'KeySymmetric' with unknown type id ${typeId}`);
            
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
            case 6: return (SodiumChacha20Poly1305 as any).META.metaEquals(v1 as any as SodiumChacha20Poly1305, v2);
            case 3: return (HydrogenSecretBox as any).META.metaEquals(v1 as any as HydrogenSecretBox, v2);
            default: throw new Error(`Cannot equals 'KeySymmetric' with unknown type id ${typeId1}`);
            
        }
        
    }
    metaToString(obj: KeySymmetric | null | undefined, res: AString): void  {
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
            default: throw new Error(`Cannot toString 'KeySymmetric' with unknown type id ${typeId}`);
            
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
    serialize(sCtx_40: MetaContext, obj_41: PairKeys, _out_42: DataOut): void  {
        const typeId = typeof (obj_41 as any).getAetherTypeId === 'function' ? obj_41.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'PairKeys' with invalid type id ${typeId}`);
        _out_42.writeByte(typeId);
        switch(typeId)  {
            case 3: (PairKeysSign as any).META_BODY.serialize(sCtx_40, obj_41 as any as PairKeysSign, _out_42);
            break;
            case 1: (PairKeysAsym as any).META_BODY.serialize(sCtx_40, obj_41 as any as PairKeysAsym, _out_42);
            break;
            case 2: (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_40, obj_41 as any as PairKeysAsymSigned, _out_42);
            break;
            case 4: (PairKeysSym as any).META_BODY.serialize(sCtx_40, obj_41 as any as PairKeysSym, _out_42);
            break;
            default: throw new Error(`Cannot serialize 'PairKeys' with unknown type id ${typeId}`);
            
        }
        
    }
    deserialize(sCtx_40: MetaContext, in__43: DataIn): PairKeys  {
        try  {
            const typeId = in__43.readUByte();
            switch(typeId)  {
                case 3: return (PairKeysSign as any).META_BODY.deserialize(sCtx_40, in__43) as any as PairKeys;
                case 1: return (PairKeysAsym as any).META_BODY.deserialize(sCtx_40, in__43) as any as PairKeys;
                case 2: return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_40, in__43) as any as PairKeys;
                case 4: return (PairKeysSym as any).META_BODY.deserialize(sCtx_40, in__43) as any as PairKeys;
                default: throw new Error(`Bad type id ${typeId} for type 'PairKeys'`);
                
            }
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: PairKeys | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 3: return (PairKeysSign as any).META.metaHashCode(obj as any as PairKeysSign);
            case 1: return (PairKeysAsym as any).META.metaHashCode(obj as any as PairKeysAsym);
            case 2: return (PairKeysAsymSigned as any).META.metaHashCode(obj as any as PairKeysAsymSigned);
            case 4: return (PairKeysSym as any).META.metaHashCode(obj as any as PairKeysSym);
            default: throw new Error(`Cannot hashCode 'PairKeys' with unknown type id ${typeId}`);
            
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
            case 4: return (PairKeysSym as any).META.metaEquals(v1 as any as PairKeysSym, v2);
            default: throw new Error(`Cannot equals 'PairKeys' with unknown type id ${typeId1}`);
            
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
            case 4: (PairKeysSym as any).META.metaToString(obj as any as PairKeysSym, res);
            break;
            default: throw new Error(`Cannot toString 'PairKeys' with unknown type id ${typeId}`);
            
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
    serialize(sCtx_44: MetaContext, obj_45: Sign, _out_46: DataOut): void  {
        const typeId = typeof (obj_45 as any).getAetherTypeId === 'function' ? obj_45.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'Sign' with invalid type id ${typeId}`);
        _out_46.writeByte(typeId);
        switch(typeId)  {
            case 1: (SignAE_ED25519 as any).META_BODY.serialize(sCtx_44, obj_45 as any as SignAE_ED25519, _out_46);
            break;
            case 2: (SignHYDROGEN as any).META_BODY.serialize(sCtx_44, obj_45 as any as SignHYDROGEN, _out_46);
            break;
            default: throw new Error(`Cannot serialize 'Sign' with unknown type id ${typeId}`);
            
        }
        
    }
    deserialize(sCtx_44: MetaContext, in__47: DataIn): Sign  {
        try  {
            const typeId = in__47.readUByte();
            switch(typeId)  {
                case 1: return (SignAE_ED25519 as any).META_BODY.deserialize(sCtx_44, in__47) as any as Sign;
                case 2: return (SignHYDROGEN as any).META_BODY.deserialize(sCtx_44, in__47) as any as Sign;
                default: throw new Error(`Bad type id ${typeId} for type 'Sign'`);
                
            }
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: Sign | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: return (SignAE_ED25519 as any).META.metaHashCode(obj as any as SignAE_ED25519);
            case 2: return (SignHYDROGEN as any).META.metaHashCode(obj as any as SignHYDROGEN);
            default: throw new Error(`Cannot hashCode 'Sign' with unknown type id ${typeId}`);
            
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
            default: throw new Error(`Cannot equals 'Sign' with unknown type id ${typeId1}`);
            
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
            default: throw new Error(`Cannot toString 'Sign' with unknown type id ${typeId}`);
            
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
    serialize(sCtx_48: MetaContext, obj_49: Telemetry, _out_50: DataOut): void  {
        const typeId = typeof (obj_49 as any).getAetherTypeId === 'function' ? obj_49.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'Telemetry' with invalid type id ${typeId}`);
        _out_50.writeByte(typeId);
        switch(typeId)  {
            case 1: (TelemetryCPP as any).META_BODY.serialize(sCtx_48, obj_49 as any as TelemetryCPP, _out_50);
            break;
            default: throw new Error(`Cannot serialize 'Telemetry' with unknown type id ${typeId}`);
            
        }
        
    }
    deserialize(sCtx_48: MetaContext, in__51: DataIn): Telemetry  {
        try  {
            const typeId = in__51.readUByte();
            switch(typeId)  {
                case 1: return (TelemetryCPP as any).META_BODY.deserialize(sCtx_48, in__51) as any as Telemetry;
                default: throw new Error(`Bad type id ${typeId} for type 'Telemetry'`);
                
            }
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: Telemetry | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: return (TelemetryCPP as any).META.metaHashCode(obj as any as TelemetryCPP);
            default: throw new Error(`Cannot hashCode 'Telemetry' with unknown type id ${typeId}`);
            
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
            default: throw new Error(`Cannot equals 'Telemetry' with unknown type id ${typeId1}`);
            
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
            default: throw new Error(`Cannot toString 'Telemetry' with unknown type id ${typeId}`);
            
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
    serialize(sCtx_52: MetaContext, obj_53: WorkProofConfig, _out_54: DataOut): void  {
        const typeId = typeof (obj_53 as any).getAetherTypeId === 'function' ? obj_53.getAetherTypeId() : -1;
        if (typeId === undefined || typeId < 0) throw new Error(`Cannot serialize 'WorkProofConfig' with invalid type id ${typeId}`);
        _out_54.writeByte(typeId);
        switch(typeId)  {
            case 1: (WorkProofBCrypt as any).META_BODY.serialize(sCtx_52, obj_53 as any as WorkProofBCrypt, _out_54);
            break;
            default: throw new Error(`Cannot serialize 'WorkProofConfig' with unknown type id ${typeId}`);
            
        }
        
    }
    deserialize(sCtx_52: MetaContext, in__55: DataIn): WorkProofConfig  {
        try  {
            const typeId = in__55.readUByte();
            switch(typeId)  {
                case 1: return (WorkProofBCrypt as any).META_BODY.deserialize(sCtx_52, in__55) as any as WorkProofConfig;
                default: throw new Error(`Bad type id ${typeId} for type 'WorkProofConfig'`);
                
            }
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: WorkProofConfig | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;
        switch(typeId)  {
            case 1: return (WorkProofBCrypt as any).META.metaHashCode(obj as any as WorkProofBCrypt);
            default: throw new Error(`Cannot hashCode 'WorkProofConfig' with unknown type id ${typeId}`);
            
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
            default: throw new Error(`Cannot equals 'WorkProofConfig' with unknown type id ${typeId1}`);
            
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
            default: throw new Error(`Cannot toString 'WorkProofConfig' with unknown type id ${typeId}`);
            
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
    serialize(sCtx_56: MetaContext, obj_57: AccessCheckPair, _out_58: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_56, obj_57.sourceUid, _out_58);
        FastMeta.META_UUID.serialize(sCtx_56, obj_57.targetUid, _out_58);
        
    }
    deserialize(sCtx_56: MetaContext, in__59: DataIn): AccessCheckPair  {
        try  {
            let sourceUid_60: UUID;
            let targetUid_61: UUID;
            sourceUid_60 = FastMeta.META_UUID.deserialize(sCtx_56, in__59);
            targetUid_61 = FastMeta.META_UUID.deserialize(sCtx_56, in__59);
            return new AccessCheckPair(sourceUid_60, targetUid_61);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_62: MetaContext, obj_63: AccessCheckResult, _out_64: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_62, obj_63.sourceUid, _out_64);
        FastMeta.META_UUID.serialize(sCtx_62, obj_63.targetUid, _out_64);
        _out_64.writeBoolean(obj_63.hasAccess);
        
    }
    deserialize(sCtx_62: MetaContext, in__65: DataIn): AccessCheckResult  {
        try  {
            let sourceUid_66: UUID;
            let targetUid_67: UUID;
            let hasAccess_68: boolean;
            sourceUid_66 = FastMeta.META_UUID.deserialize(sCtx_62, in__65);
            targetUid_67 = FastMeta.META_UUID.deserialize(sCtx_62, in__65);
            hasAccess_68 = in__65.readBoolean();
            return new AccessCheckResult(sourceUid_66, targetUid_67, hasAccess_68);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_69: MetaContext, obj_70: AccessGroup, _out_71: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_69, obj_70.id, _out_71);
        _out_71.writeInt(obj_70.time);
        FastMeta.META_UUID.serialize(sCtx_69, obj_70.owner, _out_71);
        SerializerPackNumber.INSTANCE.put(_out_71, obj_70.data.length);
        for (const el_73 of obj_70.data)  {
            FastMeta.META_UUID.serialize(sCtx_69, el_73, _out_71);
            
        }
        
    }
    deserialize(sCtx_69: MetaContext, in__72: DataIn): AccessGroup  {
        try  {
            let id_74: UUID;
            let time_75: number;
            let owner_76: UUID;
            let data_77: UUID[];
            id_74 = FastMeta.META_UUID.deserialize(sCtx_69, in__72);
            time_75 = in__72.readInt();
            owner_76 = FastMeta.META_UUID.deserialize(sCtx_69, in__72);
            const len_79 = Number(DeserializerPackNumber.INSTANCE.put(in__72));
            data_77 = new Array<UUID>(len_79);
            for (let idx_78 = 0;
            idx_78 < len_79;
            idx_78++)  {
                data_77[idx_78] = FastMeta.META_UUID.deserialize(sCtx_69, in__72);
                
            }
            return new AccessGroup(id_74, time_75, owner_76, data_77);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AccessGroup | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.id);
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.time);
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.owner);
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: AccessGroup | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AccessGroup)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.id, v2.id)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.time, v2.time)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.owner, v2.owner)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: AccessGroup | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AccessGroup(');
        res.add('id:').add(obj.id);
        res.add(', ');
        res.add('time:').add(obj.time);
        res.add(', ');
        res.add('owner:').add(obj.owner);
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
    serialize(sCtx_80: MetaContext, obj_81: AetherApiDefinition, _out_82: DataOut): void  {
        let _mask: number = 0;
        if (obj_81.docId === null) _mask |= 1;
        _out_82.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_82, obj_81.id);
        SerializerPackNumber.INSTANCE.put(_out_82, obj_81.nameId);
        SerializerPackNumber.INSTANCE.put(_out_82, obj_81.methods.length);
        for (const el_84 of obj_81.methods)  {
            AetherMethodDescriptor.META.serialize(sCtx_80, el_84, _out_82);
            
        }
        if (obj_81.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_82, obj_81.docId);
            
        }
        
    }
    deserialize(sCtx_80: MetaContext, in__83: DataIn): AetherApiDefinition  {
        try  {
            let id_85: bigint;
            let nameId_86: bigint;
            let methods_87: AetherMethodDescriptor[];
            let docId_88: bigint | null;
            const _mask = in__83.readByte();
            id_85 = DeserializerPackNumber.INSTANCE.put(in__83);
            nameId_86 = DeserializerPackNumber.INSTANCE.put(in__83);
            const len_90 = Number(DeserializerPackNumber.INSTANCE.put(in__83));
            methods_87 = new Array<AetherMethodDescriptor>(len_90);
            for (let idx_89 = 0;
            idx_89 < len_90;
            idx_89++)  {
                methods_87[idx_89] = AetherMethodDescriptor.META.deserialize(sCtx_80, in__83);
                
            }
            if (((_mask & 1) === 0))  {
                docId_88 = DeserializerPackNumber.INSTANCE.put(in__83);
                
            }
            else  {
                docId_88 = null;
                
            }
            return new AetherApiDefinition(id_85, nameId_86, methods_87, docId_88);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_91: MetaContext, obj_92: AetherArgumentDescriptor, _out_93: DataOut): void  {
        let _mask: number = 0;
        if (obj_92.docId === null) _mask |= 1;
        _out_93.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_93, obj_92.nameId);
        SerializerPackNumber.INSTANCE.put(_out_93, obj_92.typeId);
        if (obj_92.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_93, obj_92.docId);
            
        }
        
    }
    deserialize(sCtx_91: MetaContext, in__94: DataIn): AetherArgumentDescriptor  {
        try  {
            let nameId_95: bigint;
            let typeId_96: bigint;
            let docId_97: bigint | null;
            const _mask = in__94.readByte();
            nameId_95 = DeserializerPackNumber.INSTANCE.put(in__94);
            typeId_96 = DeserializerPackNumber.INSTANCE.put(in__94);
            if (((_mask & 1) === 0))  {
                docId_97 = DeserializerPackNumber.INSTANCE.put(in__94);
                
            }
            else  {
                docId_97 = null;
                
            }
            return new AetherArgumentDescriptor(nameId_95, typeId_96, docId_97);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_98: MetaContext, obj_99: AetherArrayType, _out_100: DataOut): void  {
        let _mask: number = 0;
        if (obj_99.docId === null) _mask |= 1;
        _out_100.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_100, obj_99.id);
        if (obj_99.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_100, obj_99.docId);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_100, obj_99.elementTypeId);
        
    }
    deserialize(sCtx_98: MetaContext, in__101: DataIn): AetherArrayType  {
        try  {
            let id_102: bigint;
            let docId_103: bigint | null;
            let elementTypeId_104: bigint;
            const _mask = in__101.readByte();
            id_102 = DeserializerPackNumber.INSTANCE.put(in__101);
            if (((_mask & 1) === 0))  {
                docId_103 = DeserializerPackNumber.INSTANCE.put(in__101);
                
            }
            else  {
                docId_103 = null;
                
            }
            elementTypeId_104 = DeserializerPackNumber.INSTANCE.put(in__101);
            return new AetherArrayType(id_102, docId_103, elementTypeId_104);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_105: MetaContext, obj_107: AetherArrayType, _out_108: DataOut): void  {
        (AetherArrayType as any).META_BODY.serialize(sCtx_105, obj_107, _out_108);
        
    }
    deserialize(sCtx_106: MetaContext, in__109: DataIn): AetherArrayType  {
        try  {
            return (AetherArrayType as any).META_BODY.deserialize(sCtx_106, in__109);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AetherArrayType | null | undefined): number  {
        return (AetherArrayType as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: AetherArrayType | null | undefined, v2: any | null | undefined): boolean  {
        return (AetherArrayType as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: AetherArrayType | null | undefined, res: AString): void  {
        (AetherArrayType as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_110: MetaContext, obj_111: AetherBaseType, _out_112: DataOut): void  {
        let _mask: number = 0;
        if (obj_111.docId === null) _mask |= 1;
        _out_112.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_112, obj_111.id);
        if (obj_111.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_112, obj_111.docId);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_112, obj_111.nameId);
        
    }
    deserialize(sCtx_110: MetaContext, in__113: DataIn): AetherBaseType  {
        try  {
            let id_114: bigint;
            let docId_115: bigint | null;
            let nameId_116: bigint;
            const _mask = in__113.readByte();
            id_114 = DeserializerPackNumber.INSTANCE.put(in__113);
            if (((_mask & 1) === 0))  {
                docId_115 = DeserializerPackNumber.INSTANCE.put(in__113);
                
            }
            else  {
                docId_115 = null;
                
            }
            nameId_116 = DeserializerPackNumber.INSTANCE.put(in__113);
            return new AetherBaseType(id_114, docId_115, nameId_116);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_117: MetaContext, obj_119: AetherBaseType, _out_120: DataOut): void  {
        (AetherBaseType as any).META_BODY.serialize(sCtx_117, obj_119, _out_120);
        
    }
    deserialize(sCtx_118: MetaContext, in__121: DataIn): AetherBaseType  {
        try  {
            return (AetherBaseType as any).META_BODY.deserialize(sCtx_118, in__121);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AetherBaseType | null | undefined): number  {
        return (AetherBaseType as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: AetherBaseType | null | undefined, v2: any | null | undefined): boolean  {
        return (AetherBaseType as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: AetherBaseType | null | undefined, res: AString): void  {
        (AetherBaseType as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_122: MetaContext, obj_123: AetherFieldDescriptor, _out_124: DataOut): void  {
        let _mask: number = 0;
        if (obj_123.docId === null) _mask |= 1;
        _out_124.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_124, obj_123.nameId);
        SerializerPackNumber.INSTANCE.put(_out_124, obj_123.typeId);
        if (obj_123.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_124, obj_123.docId);
            
        }
        
    }
    deserialize(sCtx_122: MetaContext, in__125: DataIn): AetherFieldDescriptor  {
        try  {
            let nameId_126: bigint;
            let typeId_127: bigint;
            let docId_128: bigint | null;
            const _mask = in__125.readByte();
            nameId_126 = DeserializerPackNumber.INSTANCE.put(in__125);
            typeId_127 = DeserializerPackNumber.INSTANCE.put(in__125);
            if (((_mask & 1) === 0))  {
                docId_128 = DeserializerPackNumber.INSTANCE.put(in__125);
                
            }
            else  {
                docId_128 = null;
                
            }
            return new AetherFieldDescriptor(nameId_126, typeId_127, docId_128);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_129: MetaContext, obj_130: AetherMethodDescriptor, _out_131: DataOut): void  {
        let _mask: number = 0;
        if (obj_130.docId === null) _mask |= 1;
        _out_131.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_131, obj_130.nameId);
        SerializerPackNumber.INSTANCE.put(_out_131, obj_130.args.length);
        for (const el_133 of obj_130.args)  {
            AetherArgumentDescriptor.META.serialize(sCtx_129, el_133, _out_131);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_131, obj_130.returnTypeId);
        if (obj_130.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_131, obj_130.docId);
            
        }
        
    }
    deserialize(sCtx_129: MetaContext, in__132: DataIn): AetherMethodDescriptor  {
        try  {
            let nameId_134: bigint;
            let args_135: AetherArgumentDescriptor[];
            let returnTypeId_136: bigint;
            let docId_137: bigint | null;
            const _mask = in__132.readByte();
            nameId_134 = DeserializerPackNumber.INSTANCE.put(in__132);
            const len_139 = Number(DeserializerPackNumber.INSTANCE.put(in__132));
            args_135 = new Array<AetherArgumentDescriptor>(len_139);
            for (let idx_138 = 0;
            idx_138 < len_139;
            idx_138++)  {
                args_135[idx_138] = AetherArgumentDescriptor.META.deserialize(sCtx_129, in__132);
                
            }
            returnTypeId_136 = DeserializerPackNumber.INSTANCE.put(in__132);
            if (((_mask & 1) === 0))  {
                docId_137 = DeserializerPackNumber.INSTANCE.put(in__132);
                
            }
            else  {
                docId_137 = null;
                
            }
            return new AetherMethodDescriptor(nameId_134, args_135, returnTypeId_136, docId_137);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_140: MetaContext, obj_141: AetherModuleDescriptor, _out_142: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_142, obj_141.stringPool.length);
        for (const el_144 of obj_141.stringPool)  {
            const stringBytes_145 = new TextEncoder().encode(el_144);
            SerializerPackNumber.INSTANCE.put(_out_142, stringBytes_145.length);
            _out_142.write(stringBytes_145);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_142, obj_141.typeRegistry.length);
        for (const el_147 of obj_141.typeRegistry)  {
            AetherTypeDescriptor.META.serialize(sCtx_140, el_147, _out_142);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_142, obj_141.structs.length);
        for (const el_148 of obj_141.structs)  {
            AetherStructDescriptor.META.serialize(sCtx_140, el_148, _out_142);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_142, obj_141.apis.length);
        for (const el_149 of obj_141.apis)  {
            AetherApiDefinition.META.serialize(sCtx_140, el_149, _out_142);
            
        }
        
    }
    deserialize(sCtx_140: MetaContext, in__143: DataIn): AetherModuleDescriptor  {
        try  {
            let stringPool_150: string[];
            let typeRegistry_151: AetherTypeDescriptor[];
            let structs_152: AetherStructDescriptor[];
            let apis_153: AetherApiDefinition[];
            const len_155 = Number(DeserializerPackNumber.INSTANCE.put(in__143));
            stringPool_150 = new Array<string>(len_155);
            for (let idx_154 = 0;
            idx_154 < len_155;
            idx_154++)  {
                let stringBytes_156: Uint8Array;
                const len_158 = Number(DeserializerPackNumber.INSTANCE.put(in__143));
                const bytes_159 = in__143.readBytes(len_158);
                stringBytes_156 = bytes_159;
                stringPool_150[idx_154] = new TextDecoder('utf-8').decode(stringBytes_156);
                
            }
            const len_161 = Number(DeserializerPackNumber.INSTANCE.put(in__143));
            typeRegistry_151 = new Array<AetherTypeDescriptor>(len_161);
            for (let idx_160 = 0;
            idx_160 < len_161;
            idx_160++)  {
                typeRegistry_151[idx_160] = AetherTypeDescriptor.META.deserialize(sCtx_140, in__143);
                
            }
            const len_163 = Number(DeserializerPackNumber.INSTANCE.put(in__143));
            structs_152 = new Array<AetherStructDescriptor>(len_163);
            for (let idx_162 = 0;
            idx_162 < len_163;
            idx_162++)  {
                structs_152[idx_162] = AetherStructDescriptor.META.deserialize(sCtx_140, in__143);
                
            }
            const len_165 = Number(DeserializerPackNumber.INSTANCE.put(in__143));
            apis_153 = new Array<AetherApiDefinition>(len_165);
            for (let idx_164 = 0;
            idx_164 < len_165;
            idx_164++)  {
                apis_153[idx_164] = AetherApiDefinition.META.deserialize(sCtx_140, in__143);
                
            }
            return new AetherModuleDescriptor(stringPool_150, typeRegistry_151, structs_152, apis_153);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_166: MetaContext, obj_167: AetherNullableType, _out_168: DataOut): void  {
        let _mask: number = 0;
        if (obj_167.docId === null) _mask |= 1;
        _out_168.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_168, obj_167.id);
        if (obj_167.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_168, obj_167.docId);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_168, obj_167.wrappedTypeId);
        
    }
    deserialize(sCtx_166: MetaContext, in__169: DataIn): AetherNullableType  {
        try  {
            let id_170: bigint;
            let docId_171: bigint | null;
            let wrappedTypeId_172: bigint;
            const _mask = in__169.readByte();
            id_170 = DeserializerPackNumber.INSTANCE.put(in__169);
            if (((_mask & 1) === 0))  {
                docId_171 = DeserializerPackNumber.INSTANCE.put(in__169);
                
            }
            else  {
                docId_171 = null;
                
            }
            wrappedTypeId_172 = DeserializerPackNumber.INSTANCE.put(in__169);
            return new AetherNullableType(id_170, docId_171, wrappedTypeId_172);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_173: MetaContext, obj_175: AetherNullableType, _out_176: DataOut): void  {
        (AetherNullableType as any).META_BODY.serialize(sCtx_173, obj_175, _out_176);
        
    }
    deserialize(sCtx_174: MetaContext, in__177: DataIn): AetherNullableType  {
        try  {
            return (AetherNullableType as any).META_BODY.deserialize(sCtx_174, in__177);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AetherNullableType | null | undefined): number  {
        return (AetherNullableType as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: AetherNullableType | null | undefined, v2: any | null | undefined): boolean  {
        return (AetherNullableType as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: AetherNullableType | null | undefined, res: AString): void  {
        (AetherNullableType as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_178: MetaContext, obj_179: AetherStreamType, _out_180: DataOut): void  {
        let _mask: number = 0;
        if (obj_179.docId === null) _mask |= 1;
        _out_180.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_180, obj_179.id);
        if (obj_179.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_180, obj_179.docId);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_180, obj_179.apiId);
        _out_180.writeBoolean(obj_179.isCrypto);
        
    }
    deserialize(sCtx_178: MetaContext, in__181: DataIn): AetherStreamType  {
        try  {
            let id_182: bigint;
            let docId_183: bigint | null;
            let apiId_184: bigint;
            let isCrypto_185: boolean;
            const _mask = in__181.readByte();
            id_182 = DeserializerPackNumber.INSTANCE.put(in__181);
            if (((_mask & 1) === 0))  {
                docId_183 = DeserializerPackNumber.INSTANCE.put(in__181);
                
            }
            else  {
                docId_183 = null;
                
            }
            apiId_184 = DeserializerPackNumber.INSTANCE.put(in__181);
            isCrypto_185 = in__181.readBoolean();
            return new AetherStreamType(id_182, docId_183, apiId_184, isCrypto_185);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_186: MetaContext, obj_188: AetherStreamType, _out_189: DataOut): void  {
        (AetherStreamType as any).META_BODY.serialize(sCtx_186, obj_188, _out_189);
        
    }
    deserialize(sCtx_187: MetaContext, in__190: DataIn): AetherStreamType  {
        try  {
            return (AetherStreamType as any).META_BODY.deserialize(sCtx_187, in__190);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AetherStreamType | null | undefined): number  {
        return (AetherStreamType as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: AetherStreamType | null | undefined, v2: any | null | undefined): boolean  {
        return (AetherStreamType as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: AetherStreamType | null | undefined, res: AString): void  {
        (AetherStreamType as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_191: MetaContext, obj_192: AetherStructDescriptor, _out_193: DataOut): void  {
        let _mask: number = 0;
        if (obj_192.parentTypeId === null) _mask |= 1;
        if (obj_192.docId === null) _mask |= (1 << 1);
        _out_193.writeByte(_mask);
        SerializerPackNumber.INSTANCE.put(_out_193, obj_192.baseTypeId);
        if (obj_192.parentTypeId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_193, obj_192.parentTypeId);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_193, obj_192.fields.length);
        for (const el_195 of obj_192.fields)  {
            AetherFieldDescriptor.META.serialize(sCtx_191, el_195, _out_193);
            
        }
        if (obj_192.docId !== null)  {
            SerializerPackNumber.INSTANCE.put(_out_193, obj_192.docId);
            
        }
        
    }
    deserialize(sCtx_191: MetaContext, in__194: DataIn): AetherStructDescriptor  {
        try  {
            let baseTypeId_196: bigint;
            let parentTypeId_197: bigint | null;
            let fields_198: AetherFieldDescriptor[];
            let docId_199: bigint | null;
            const _mask = in__194.readByte();
            baseTypeId_196 = DeserializerPackNumber.INSTANCE.put(in__194);
            if (((_mask & 1) === 0))  {
                parentTypeId_197 = DeserializerPackNumber.INSTANCE.put(in__194);
                
            }
            else  {
                parentTypeId_197 = null;
                
            }
            const len_201 = Number(DeserializerPackNumber.INSTANCE.put(in__194));
            fields_198 = new Array<AetherFieldDescriptor>(len_201);
            for (let idx_200 = 0;
            idx_200 < len_201;
            idx_200++)  {
                fields_198[idx_200] = AetherFieldDescriptor.META.deserialize(sCtx_191, in__194);
                
            }
            if (((_mask & (1 << 1)) === 0))  {
                docId_199 = DeserializerPackNumber.INSTANCE.put(in__194);
                
            }
            else  {
                docId_199 = null;
                
            }
            return new AetherStructDescriptor(baseTypeId_196, parentTypeId_197, fields_198, docId_199);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_202: MetaContext, obj_203: AppliedConfig, _out_204: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_202, obj_203.subjectUid, _out_204);
        _out_204.writeLong(obj_203.configVersion);
        
    }
    deserialize(sCtx_202: MetaContext, in__205: DataIn): AppliedConfig  {
        try  {
            let subjectUid_206: UUID;
            let configVersion_207: bigint;
            subjectUid_206 = FastMeta.META_UUID.deserialize(sCtx_202, in__205);
            configVersion_207 = in__205.readLong();
            return new AppliedConfig(subjectUid_206, configVersion_207);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_208: MetaContext, obj_209: ClientActivity, _out_210: DataOut): void  {
        let _mask: number = 0;
        if (obj_209.serverId === null) _mask |= 1;
        _out_210.writeByte(_mask);
        _out_210.writeLong(obj_209.timestamp);
        ClientActivityType.META.serialize(sCtx_208, obj_209.type, _out_210);
        FastMeta.META_UUID.serialize(sCtx_208, obj_209.clientUid, _out_210);
        const stringBytes_212 = new TextEncoder().encode(obj_209.details);
        SerializerPackNumber.INSTANCE.put(_out_210, stringBytes_212.length);
        _out_210.write(stringBytes_212);
        if (obj_209.serverId !== null)  {
            _out_210.writeShort(obj_209.serverId);
            
        }
        
    }
    deserialize(sCtx_208: MetaContext, in__211: DataIn): ClientActivity  {
        try  {
            let timestamp_214: bigint;
            let type_215: ClientActivityType;
            let clientUid_216: UUID;
            let details_217: string;
            let serverId_218: number | null;
            const _mask = in__211.readByte();
            timestamp_214 = in__211.readLong();
            type_215 = ClientActivityType.META.deserialize(sCtx_208, in__211);
            clientUid_216 = FastMeta.META_UUID.deserialize(sCtx_208, in__211);
            let stringBytes_219: Uint8Array;
            const len_221 = Number(DeserializerPackNumber.INSTANCE.put(in__211));
            const bytes_222 = in__211.readBytes(len_221);
            stringBytes_219 = bytes_222;
            details_217 = new TextDecoder('utf-8').decode(stringBytes_219);
            if (((_mask & 1) === 0))  {
                serverId_218 = in__211.readShort();
                
            }
            else  {
                serverId_218 = null;
                
            }
            return new ClientActivity(timestamp_214, type_215, clientUid_216, details_217, serverId_218);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_223: MetaContext, obj_224: ClientConnectionInfo, _out_225: DataOut): void  {
        let _mask: number = 0;
        if (obj_224.disconnectedAt === null) _mask |= 1;
        _out_225.writeByte(_mask);
        _out_225.writeLong(obj_224.connectedAt);
        if (obj_224.disconnectedAt !== null)  {
            _out_225.writeLong(obj_224.disconnectedAt);
            
        }
        _out_225.writeShort(obj_224.serverId);
        SerializerPackNumber.INSTANCE.put(_out_225, obj_224.context.length);
        for (const el_227 of obj_224.context)  {
            KeyValuePair.META.serialize(sCtx_223, el_227, _out_225);
            
        }
        const stringBytes_228 = new TextEncoder().encode(obj_224.protocol);
        SerializerPackNumber.INSTANCE.put(_out_225, stringBytes_228.length);
        _out_225.write(stringBytes_228);
        
    }
    deserialize(sCtx_223: MetaContext, in__226: DataIn): ClientConnectionInfo  {
        try  {
            let connectedAt_230: bigint;
            let disconnectedAt_231: bigint | null;
            let serverId_232: number;
            let context_233: KeyValuePair[];
            let protocol_234: string;
            const _mask = in__226.readByte();
            connectedAt_230 = in__226.readLong();
            if (((_mask & 1) === 0))  {
                disconnectedAt_231 = in__226.readLong();
                
            }
            else  {
                disconnectedAt_231 = null;
                
            }
            serverId_232 = in__226.readShort();
            const len_236 = Number(DeserializerPackNumber.INSTANCE.put(in__226));
            context_233 = new Array<KeyValuePair>(len_236);
            for (let idx_235 = 0;
            idx_235 < len_236;
            idx_235++)  {
                context_233[idx_235] = KeyValuePair.META.deserialize(sCtx_223, in__226);
                
            }
            let stringBytes_237: Uint8Array;
            const len_239 = Number(DeserializerPackNumber.INSTANCE.put(in__226));
            const bytes_240 = in__226.readBytes(len_239);
            stringBytes_237 = bytes_240;
            protocol_234 = new TextDecoder('utf-8').decode(stringBytes_237);
            return new ClientConnectionInfo(connectedAt_230, disconnectedAt_231, serverId_232, context_233, protocol_234);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_241: MetaContext, obj_242: ClientInfo, _out_243: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_241, obj_242.uid, _out_243);
        Cloud.META.serialize(sCtx_241, obj_242.cloud, _out_243);
        SerializerPackNumber.INSTANCE.put(_out_243, obj_242.weights.length);
        for (const el_245 of obj_242.weights)  {
            CloudWeight.META.serialize(sCtx_241, el_245, _out_243);
            
        }
        
    }
    deserialize(sCtx_241: MetaContext, in__244: DataIn): ClientInfo  {
        try  {
            let uid_246: UUID;
            let cloud_247: Cloud;
            let weights_248: CloudWeight[];
            uid_246 = FastMeta.META_UUID.deserialize(sCtx_241, in__244);
            cloud_247 = Cloud.META.deserialize(sCtx_241, in__244);
            const len_250 = Number(DeserializerPackNumber.INSTANCE.put(in__244));
            weights_248 = new Array<CloudWeight>(len_250);
            for (let idx_249 = 0;
            idx_249 < len_250;
            idx_249++)  {
                weights_248[idx_249] = CloudWeight.META.deserialize(sCtx_241, in__244);
                
            }
            return new ClientInfo(uid_246, cloud_247, weights_248);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_251: MetaContext, obj_252: ClientLogEntry, _out_253: DataOut): void  {
        _out_253.writeLong(obj_252.timestamp);
        const stringBytes_255 = new TextEncoder().encode(obj_252.level);
        SerializerPackNumber.INSTANCE.put(_out_253, stringBytes_255.length);
        _out_253.write(stringBytes_255);
        const stringBytes_257 = new TextEncoder().encode(obj_252.message);
        SerializerPackNumber.INSTANCE.put(_out_253, stringBytes_257.length);
        _out_253.write(stringBytes_257);
        SerializerPackNumber.INSTANCE.put(_out_253, obj_252.context.length);
        for (const el_259 of obj_252.context)  {
            KeyValuePair.META.serialize(sCtx_251, el_259, _out_253);
            
        }
        
    }
    deserialize(sCtx_251: MetaContext, in__254: DataIn): ClientLogEntry  {
        try  {
            let timestamp_260: bigint;
            let level_261: string;
            let message_262: string;
            let context_263: KeyValuePair[];
            timestamp_260 = in__254.readLong();
            let stringBytes_264: Uint8Array;
            const len_266 = Number(DeserializerPackNumber.INSTANCE.put(in__254));
            const bytes_267 = in__254.readBytes(len_266);
            stringBytes_264 = bytes_267;
            level_261 = new TextDecoder('utf-8').decode(stringBytes_264);
            let stringBytes_268: Uint8Array;
            const len_270 = Number(DeserializerPackNumber.INSTANCE.put(in__254));
            const bytes_271 = in__254.readBytes(len_270);
            stringBytes_268 = bytes_271;
            message_262 = new TextDecoder('utf-8').decode(stringBytes_268);
            const len_273 = Number(DeserializerPackNumber.INSTANCE.put(in__254));
            context_263 = new Array<KeyValuePair>(len_273);
            for (let idx_272 = 0;
            idx_272 < len_273;
            idx_272++)  {
                context_263[idx_272] = KeyValuePair.META.deserialize(sCtx_251, in__254);
                
            }
            return new ClientLogEntry(timestamp_260, level_261, message_262, context_263);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_274: MetaContext, obj_275: ClientStateForSave, _out_276: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_276, obj_275.registrationUri.length);
        for (const el_278 of obj_275.registrationUri)  {
            FastMeta.META_URI.serialize(sCtx_274, el_278, _out_276);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_276, obj_275.servers.length);
        for (const el_279 of obj_275.servers)  {
            ServerDescriptor.META.serialize(sCtx_274, el_279, _out_276);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_276, obj_275.clients.length);
        for (const el_280 of obj_275.clients)  {
            ClientInfo.META.serialize(sCtx_274, el_280, _out_276);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_276, obj_275.rootSigners.length);
        for (const el_281 of obj_275.rootSigners)  {
            Key.META.serialize(sCtx_274, el_281, _out_276);
            
        }
        CryptoLib.META.serialize(sCtx_274, obj_275.cryptoLib, _out_276);
        _out_276.writeLong(obj_275.pingDuration);
        FastMeta.META_UUID.serialize(sCtx_274, obj_275.parentUid, _out_276);
        _out_276.writeInt(obj_275.countServersForRegistration);
        _out_276.writeLong(obj_275.timeoutForConnectToRegistrationServer);
        FastMeta.META_UUID.serialize(sCtx_274, obj_275.uid, _out_276);
        FastMeta.META_UUID.serialize(sCtx_274, obj_275.alias, _out_276);
        Key.META.serialize(sCtx_274, obj_275.masterKey, _out_276);
        
    }
    deserialize(sCtx_274: MetaContext, in__277: DataIn): ClientStateForSave  {
        try  {
            let registrationUri_282: URI[];
            let servers_283: ServerDescriptor[];
            let clients_284: ClientInfo[];
            let rootSigners_285: Key[];
            let cryptoLib_286: CryptoLib;
            let pingDuration_287: bigint;
            let parentUid_288: UUID;
            let countServersForRegistration_289: number;
            let timeoutForConnectToRegistrationServer_290: bigint;
            let uid_291: UUID;
            let alias_292: UUID;
            let masterKey_293: Key;
            const len_295 = Number(DeserializerPackNumber.INSTANCE.put(in__277));
            registrationUri_282 = new Array<URI>(len_295);
            for (let idx_294 = 0;
            idx_294 < len_295;
            idx_294++)  {
                registrationUri_282[idx_294] = FastMeta.META_URI.deserialize(sCtx_274, in__277);
                
            }
            const len_297 = Number(DeserializerPackNumber.INSTANCE.put(in__277));
            servers_283 = new Array<ServerDescriptor>(len_297);
            for (let idx_296 = 0;
            idx_296 < len_297;
            idx_296++)  {
                servers_283[idx_296] = ServerDescriptor.META.deserialize(sCtx_274, in__277);
                
            }
            const len_299 = Number(DeserializerPackNumber.INSTANCE.put(in__277));
            clients_284 = new Array<ClientInfo>(len_299);
            for (let idx_298 = 0;
            idx_298 < len_299;
            idx_298++)  {
                clients_284[idx_298] = ClientInfo.META.deserialize(sCtx_274, in__277);
                
            }
            const len_301 = Number(DeserializerPackNumber.INSTANCE.put(in__277));
            rootSigners_285 = new Array<Key>(len_301);
            for (let idx_300 = 0;
            idx_300 < len_301;
            idx_300++)  {
                rootSigners_285[idx_300] = Key.META.deserialize(sCtx_274, in__277);
                
            }
            cryptoLib_286 = CryptoLib.META.deserialize(sCtx_274, in__277);
            pingDuration_287 = in__277.readLong();
            parentUid_288 = FastMeta.META_UUID.deserialize(sCtx_274, in__277);
            countServersForRegistration_289 = in__277.readInt();
            timeoutForConnectToRegistrationServer_290 = in__277.readLong();
            uid_291 = FastMeta.META_UUID.deserialize(sCtx_274, in__277);
            alias_292 = FastMeta.META_UUID.deserialize(sCtx_274, in__277);
            masterKey_293 = Key.META.deserialize(sCtx_274, in__277);
            return new ClientStateForSave(registrationUri_282, servers_283, clients_284, rootSigners_285, cryptoLib_286, pingDuration_287, parentUid_288, countServersForRegistration_289, timeoutForConnectToRegistrationServer_290, uid_291, alias_292, masterKey_293);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_302: MetaContext, obj_303: Cloud, _out_304: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_304, obj_303.data.length);
        for (const el_306 of obj_303.data)  {
            _out_304.writeShort(el_306);
            
        }
        
    }
    deserialize(sCtx_302: MetaContext, in__305: DataIn): Cloud  {
        try  {
            let data_307: number[];
            const len_309 = Number(DeserializerPackNumber.INSTANCE.put(in__305));
            data_307 = new Array<number>(len_309);
            for (let idx_308 = 0;
            idx_308 < len_309;
            idx_308++)  {
                data_307[idx_308] = in__305.readShort();
                
            }
            return new Cloud(data_307);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_310: MetaContext, obj_311: CloudConfig, _out_312: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_310, obj_311.subjectUid, _out_312);
        _out_312.writeLong(obj_311.configVersion);
        Cloud.META.serialize(sCtx_310, obj_311.cloud, _out_312);
        
    }
    deserialize(sCtx_310: MetaContext, in__313: DataIn): CloudConfig  {
        try  {
            let subjectUid_314: UUID;
            let configVersion_315: bigint;
            let cloud_316: Cloud;
            subjectUid_314 = FastMeta.META_UUID.deserialize(sCtx_310, in__313);
            configVersion_315 = in__313.readLong();
            cloud_316 = Cloud.META.deserialize(sCtx_310, in__313);
            return new CloudConfig(subjectUid_314, configVersion_315, cloud_316);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_317: MetaContext, obj_318: CloudWeight, _out_319: DataOut): void  {
        _out_319.writeShort(obj_318.sid);
        _out_319.writeLong(obj_318.weight);
        
    }
    deserialize(sCtx_317: MetaContext, in__320: DataIn): CloudWeight  {
        try  {
            let sid_321: number;
            let weight_322: bigint;
            sid_321 = in__320.readShort();
            weight_322 = in__320.readLong();
            return new CloudWeight(sid_321, weight_322);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_323: MetaContext, obj_324: CoderAndPort, _out_325: DataOut): void  {
        AetherCodec.META.serialize(sCtx_323, obj_324.codec, _out_325);
        _out_325.writeShort(obj_324.port);
        
    }
    deserialize(sCtx_323: MetaContext, in__326: DataIn): CoderAndPort  {
        try  {
            let codec_327: AetherCodec;
            let port_328: number;
            codec_327 = AetherCodec.META.deserialize(sCtx_323, in__326);
            port_328 = in__326.readShort();
            return new CoderAndPort(codec_327, port_328);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_329: MetaContext, obj_330: FinishResult, _out_331: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_329, obj_330.alias, _out_331);
        FastMeta.META_UUID.serialize(sCtx_329, obj_330.uid, _out_331);
        Cloud.META.serialize(sCtx_329, obj_330.cloud, _out_331);
        
    }
    deserialize(sCtx_329: MetaContext, in__332: DataIn): FinishResult  {
        try  {
            let alias_333: UUID;
            let uid_334: UUID;
            let cloud_335: Cloud;
            alias_333 = FastMeta.META_UUID.deserialize(sCtx_329, in__332);
            uid_334 = FastMeta.META_UUID.deserialize(sCtx_329, in__332);
            cloud_335 = Cloud.META.deserialize(sCtx_329, in__332);
            return new FinishResult(alias_333, uid_334, cloud_335);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_336: MetaContext, obj_337: FinishResultGlobalRegServerApi, _out_338: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_336, obj_337.alias, _out_338);
        FastMeta.META_UUID.serialize(sCtx_336, obj_337.uid, _out_338);
        Cloud.META.serialize(sCtx_336, obj_337.cloud, _out_338);
        
    }
    deserialize(sCtx_336: MetaContext, in__339: DataIn): FinishResultGlobalRegServerApi  {
        try  {
            let alias_340: UUID;
            let uid_341: UUID;
            let cloud_342: Cloud;
            alias_340 = FastMeta.META_UUID.deserialize(sCtx_336, in__339);
            uid_341 = FastMeta.META_UUID.deserialize(sCtx_336, in__339);
            cloud_342 = Cloud.META.deserialize(sCtx_336, in__339);
            return new FinishResultGlobalRegServerApi(alias_340, uid_341, cloud_342);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_343: MetaContext, obj_344: HydrogenCurvePrivate, _out_345: DataOut): void  {
        if (obj_344.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_344.data must be 32 but was ${obj_344.data.length}`);
        _out_345.write(obj_344.data);
        
    }
    deserialize(sCtx_343: MetaContext, in__346: DataIn): HydrogenCurvePrivate  {
        try  {
            let data_348: Uint8Array;
            const len_350 = 32;
            const bytes_351 = in__346.readBytes(len_350);
            data_348 = bytes_351;
            return new HydrogenCurvePrivate(data_348);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_352: MetaContext, obj_354: HydrogenCurvePrivate, _out_355: DataOut): void  {
        (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_352, obj_354, _out_355);
        
    }
    deserialize(sCtx_353: MetaContext, in__356: DataIn): HydrogenCurvePrivate  {
        try  {
            return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_353, in__356);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: HydrogenCurvePrivate | null | undefined): number  {
        return (HydrogenCurvePrivate as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: HydrogenCurvePrivate | null | undefined, v2: any | null | undefined): boolean  {
        return (HydrogenCurvePrivate as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: HydrogenCurvePrivate | null | undefined, res: AString): void  {
        (HydrogenCurvePrivate as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_357: MetaContext, obj_358: HydrogenCurvePublic, _out_359: DataOut): void  {
        if (obj_358.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_358.data must be 32 but was ${obj_358.data.length}`);
        _out_359.write(obj_358.data);
        
    }
    deserialize(sCtx_357: MetaContext, in__360: DataIn): HydrogenCurvePublic  {
        try  {
            let data_362: Uint8Array;
            const len_364 = 32;
            const bytes_365 = in__360.readBytes(len_364);
            data_362 = bytes_365;
            return new HydrogenCurvePublic(data_362);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_366: MetaContext, obj_368: HydrogenCurvePublic, _out_369: DataOut): void  {
        (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_366, obj_368, _out_369);
        
    }
    deserialize(sCtx_367: MetaContext, in__370: DataIn): HydrogenCurvePublic  {
        try  {
            return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_367, in__370);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: HydrogenCurvePublic | null | undefined): number  {
        return (HydrogenCurvePublic as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: HydrogenCurvePublic | null | undefined, v2: any | null | undefined): boolean  {
        return (HydrogenCurvePublic as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: HydrogenCurvePublic | null | undefined, res: AString): void  {
        (HydrogenCurvePublic as any).META_BODY.metaToString(obj, res);
        
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
        if (obj_372.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_372.data must be 32 but was ${obj_372.data.length}`);
        _out_373.write(obj_372.data);
        
    }
    deserialize(sCtx_371: MetaContext, in__374: DataIn): HydrogenSecretBox  {
        try  {
            let data_376: Uint8Array;
            const len_378 = 32;
            const bytes_379 = in__374.readBytes(len_378);
            data_376 = bytes_379;
            return new HydrogenSecretBox(data_376);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_380: MetaContext, obj_382: HydrogenSecretBox, _out_383: DataOut): void  {
        (HydrogenSecretBox as any).META_BODY.serialize(sCtx_380, obj_382, _out_383);
        
    }
    deserialize(sCtx_381: MetaContext, in__384: DataIn): HydrogenSecretBox  {
        try  {
            return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_381, in__384);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: HydrogenSecretBox | null | undefined): number  {
        return (HydrogenSecretBox as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: HydrogenSecretBox | null | undefined, v2: any | null | undefined): boolean  {
        return (HydrogenSecretBox as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: HydrogenSecretBox | null | undefined, res: AString): void  {
        (HydrogenSecretBox as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_385: MetaContext, obj_386: HydrogenSignPrivate, _out_387: DataOut): void  {
        if (obj_386.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_386.data must be 64 but was ${obj_386.data.length}`);
        _out_387.write(obj_386.data);
        
    }
    deserialize(sCtx_385: MetaContext, in__388: DataIn): HydrogenSignPrivate  {
        try  {
            let data_390: Uint8Array;
            const len_392 = 64;
            const bytes_393 = in__388.readBytes(len_392);
            data_390 = bytes_393;
            return new HydrogenSignPrivate(data_390);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_394: MetaContext, obj_396: HydrogenSignPrivate, _out_397: DataOut): void  {
        (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_394, obj_396, _out_397);
        
    }
    deserialize(sCtx_395: MetaContext, in__398: DataIn): HydrogenSignPrivate  {
        try  {
            return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_395, in__398);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: HydrogenSignPrivate | null | undefined): number  {
        return (HydrogenSignPrivate as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: HydrogenSignPrivate | null | undefined, v2: any | null | undefined): boolean  {
        return (HydrogenSignPrivate as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: HydrogenSignPrivate | null | undefined, res: AString): void  {
        (HydrogenSignPrivate as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_399: MetaContext, obj_400: HydrogenSignPublic, _out_401: DataOut): void  {
        if (obj_400.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_400.data must be 32 but was ${obj_400.data.length}`);
        _out_401.write(obj_400.data);
        
    }
    deserialize(sCtx_399: MetaContext, in__402: DataIn): HydrogenSignPublic  {
        try  {
            let data_404: Uint8Array;
            const len_406 = 32;
            const bytes_407 = in__402.readBytes(len_406);
            data_404 = bytes_407;
            return new HydrogenSignPublic(data_404);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_408: MetaContext, obj_410: HydrogenSignPublic, _out_411: DataOut): void  {
        (HydrogenSignPublic as any).META_BODY.serialize(sCtx_408, obj_410, _out_411);
        
    }
    deserialize(sCtx_409: MetaContext, in__412: DataIn): HydrogenSignPublic  {
        try  {
            return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_409, in__412);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: HydrogenSignPublic | null | undefined): number  {
        return (HydrogenSignPublic as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: HydrogenSignPublic | null | undefined, v2: any | null | undefined): boolean  {
        return (HydrogenSignPublic as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: HydrogenSignPublic | null | undefined, res: AString): void  {
        (HydrogenSignPublic as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_413: MetaContext, obj_414: IceCandidate, _out_415: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_415, obj_414.data.length);
        _out_415.write(obj_414.data);
        
    }
    deserialize(sCtx_413: MetaContext, in__416: DataIn): IceCandidate  {
        try  {
            let data_418: Uint8Array;
            const len_420 = Number(DeserializerPackNumber.INSTANCE.put(in__416));
            const bytes_421 = in__416.readBytes(len_420);
            data_418 = bytes_421;
            return new IceCandidate(data_418);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_422: MetaContext, obj_423: IPAddressAndPorts, _out_424: DataOut): void  {
        IPAddress.META.serialize(sCtx_422, obj_423.address, _out_424);
        SerializerPackNumber.INSTANCE.put(_out_424, obj_423.coderAndPorts.length);
        for (const el_426 of obj_423.coderAndPorts)  {
            CoderAndPort.META.serialize(sCtx_422, el_426, _out_424);
            
        }
        
    }
    deserialize(sCtx_422: MetaContext, in__425: DataIn): IPAddressAndPorts  {
        try  {
            let address_427: IPAddress;
            let coderAndPorts_428: CoderAndPort[];
            address_427 = IPAddress.META.deserialize(sCtx_422, in__425);
            const len_430 = Number(DeserializerPackNumber.INSTANCE.put(in__425));
            coderAndPorts_428 = new Array<CoderAndPort>(len_430);
            for (let idx_429 = 0;
            idx_429 < len_430;
            idx_429++)  {
                coderAndPorts_428[idx_429] = CoderAndPort.META.deserialize(sCtx_422, in__425);
                
            }
            return new IPAddressAndPorts(address_427, coderAndPorts_428);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_431: MetaContext, obj_432: IPAddressAndPortsList, _out_433: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_433, obj_432.addresses.length);
        for (const el_435 of obj_432.addresses)  {
            IPAddressAndPorts.META.serialize(sCtx_431, el_435, _out_433);
            
        }
        
    }
    deserialize(sCtx_431: MetaContext, in__434: DataIn): IPAddressAndPortsList  {
        try  {
            let addresses_436: IPAddressAndPorts[];
            const len_438 = Number(DeserializerPackNumber.INSTANCE.put(in__434));
            addresses_436 = new Array<IPAddressAndPorts>(len_438);
            for (let idx_437 = 0;
            idx_437 < len_438;
            idx_437++)  {
                addresses_436[idx_437] = IPAddressAndPorts.META.deserialize(sCtx_431, in__434);
                
            }
            return new IPAddressAndPortsList(addresses_436);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_439: MetaContext, obj_440: IPAddressV4, _out_441: DataOut): void  {
        if (obj_440.data.length !== 4) throw new Error(`IllegalStateException: Array length for obj_440.data must be 4 but was ${obj_440.data.length}`);
        _out_441.write(obj_440.data);
        
    }
    deserialize(sCtx_439: MetaContext, in__442: DataIn): IPAddressV4  {
        try  {
            let data_444: Uint8Array;
            const len_446 = 4;
            const bytes_447 = in__442.readBytes(len_446);
            data_444 = bytes_447;
            return new IPAddressV4(data_444);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_448: MetaContext, obj_450: IPAddressV4, _out_451: DataOut): void  {
        (IPAddressV4 as any).META_BODY.serialize(sCtx_448, obj_450, _out_451);
        
    }
    deserialize(sCtx_449: MetaContext, in__452: DataIn): IPAddressV4  {
        try  {
            return (IPAddressV4 as any).META_BODY.deserialize(sCtx_449, in__452);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: IPAddressV4 | null | undefined): number  {
        return (IPAddressV4 as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: IPAddressV4 | null | undefined, v2: any | null | undefined): boolean  {
        return (IPAddressV4 as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: IPAddressV4 | null | undefined, res: AString): void  {
        (IPAddressV4 as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_453: MetaContext, obj_454: IPAddressV6, _out_455: DataOut): void  {
        if (obj_454.data.length !== 16) throw new Error(`IllegalStateException: Array length for obj_454.data must be 16 but was ${obj_454.data.length}`);
        _out_455.write(obj_454.data);
        
    }
    deserialize(sCtx_453: MetaContext, in__456: DataIn): IPAddressV6  {
        try  {
            let data_458: Uint8Array;
            const len_460 = 16;
            const bytes_461 = in__456.readBytes(len_460);
            data_458 = bytes_461;
            return new IPAddressV6(data_458);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_462: MetaContext, obj_464: IPAddressV6, _out_465: DataOut): void  {
        (IPAddressV6 as any).META_BODY.serialize(sCtx_462, obj_464, _out_465);
        
    }
    deserialize(sCtx_463: MetaContext, in__466: DataIn): IPAddressV6  {
        try  {
            return (IPAddressV6 as any).META_BODY.deserialize(sCtx_463, in__466);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: IPAddressV6 | null | undefined): number  {
        return (IPAddressV6 as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: IPAddressV6 | null | undefined, v2: any | null | undefined): boolean  {
        return (IPAddressV6 as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: IPAddressV6 | null | undefined, res: AString): void  {
        (IPAddressV6 as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_467: MetaContext, obj_468: IPAddressWeb, _out_469: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_469, obj_468.data.length);
        _out_469.write(obj_468.data);
        
    }
    deserialize(sCtx_467: MetaContext, in__470: DataIn): IPAddressWeb  {
        try  {
            let data_472: Uint8Array;
            const len_474 = Number(DeserializerPackNumber.INSTANCE.put(in__470));
            const bytes_475 = in__470.readBytes(len_474);
            data_472 = bytes_475;
            return new IPAddressWeb(data_472);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_476: MetaContext, obj_478: IPAddressWeb, _out_479: DataOut): void  {
        (IPAddressWeb as any).META_BODY.serialize(sCtx_476, obj_478, _out_479);
        
    }
    deserialize(sCtx_477: MetaContext, in__480: DataIn): IPAddressWeb  {
        try  {
            return (IPAddressWeb as any).META_BODY.deserialize(sCtx_477, in__480);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: IPAddressWeb | null | undefined): number  {
        return (IPAddressWeb as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: IPAddressWeb | null | undefined, v2: any | null | undefined): boolean  {
        return (IPAddressWeb as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: IPAddressWeb | null | undefined, res: AString): void  {
        (IPAddressWeb as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_481: MetaContext, obj_482: IpInfo, _out_483: DataOut): void  {
        IPAddress.META.serialize(sCtx_481, obj_482.ip, _out_483);
        _out_483.writeShort(obj_482.port);
        _out_483.writeDouble(obj_482.latitude);
        _out_483.writeDouble(obj_482.longitude);
        
    }
    deserialize(sCtx_481: MetaContext, in__484: DataIn): IpInfo  {
        try  {
            let ip_485: IPAddress;
            let port_486: number;
            let latitude_487: number;
            let longitude_488: number;
            ip_485 = IPAddress.META.deserialize(sCtx_481, in__484);
            port_486 = in__484.readShort();
            latitude_487 = in__484.readDouble();
            longitude_488 = in__484.readDouble();
            return new IpInfo(ip_485, port_486, latitude_487, longitude_488);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_489: MetaContext, obj_490: KeyValuePair, _out_491: DataOut): void  {
        const stringBytes_493 = new TextEncoder().encode(obj_490.key);
        SerializerPackNumber.INSTANCE.put(_out_491, stringBytes_493.length);
        _out_491.write(stringBytes_493);
        const stringBytes_495 = new TextEncoder().encode(obj_490.value);
        SerializerPackNumber.INSTANCE.put(_out_491, stringBytes_495.length);
        _out_491.write(stringBytes_495);
        
    }
    deserialize(sCtx_489: MetaContext, in__492: DataIn): KeyValuePair  {
        try  {
            let _key_497: string;
            let value_498: string;
            let stringBytes_499: Uint8Array;
            const len_501 = Number(DeserializerPackNumber.INSTANCE.put(in__492));
            const bytes_502 = in__492.readBytes(len_501);
            stringBytes_499 = bytes_502;
            _key_497 = new TextDecoder('utf-8').decode(stringBytes_499);
            let stringBytes_503: Uint8Array;
            const len_505 = Number(DeserializerPackNumber.INSTANCE.put(in__492));
            const bytes_506 = in__492.readBytes(len_505);
            stringBytes_503 = bytes_506;
            value_498 = new TextDecoder('utf-8').decode(stringBytes_503);
            return new KeyValuePair(_key_497, value_498);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_507: MetaContext, obj_508: Message, _out_509: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_507, obj_508.uid, _out_509);
        SerializerPackNumber.INSTANCE.put(_out_509, obj_508.data.length);
        _out_509.write(obj_508.data);
        
    }
    deserialize(sCtx_507: MetaContext, in__510: DataIn): Message  {
        try  {
            let uid_512: UUID;
            let data_513: Uint8Array;
            uid_512 = FastMeta.META_UUID.deserialize(sCtx_507, in__510);
            const len_515 = Number(DeserializerPackNumber.INSTANCE.put(in__510));
            const bytes_516 = in__510.readBytes(len_515);
            data_513 = bytes_516;
            return new Message(uid_512, data_513);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_517: MetaContext, obj_518: MessageInfo, _out_519: DataOut): void  {
        _out_519.writeLong(obj_518.timestamp);
        FastMeta.META_UUID.serialize(sCtx_517, obj_518.fromUid, _out_519);
        FastMeta.META_UUID.serialize(sCtx_517, obj_518.toUid, _out_519);
        _out_519.writeInt(obj_518.size);
        FastMeta.META_UUID.serialize(sCtx_517, obj_518.messageId, _out_519);
        
    }
    deserialize(sCtx_517: MetaContext, in__520: DataIn): MessageInfo  {
        try  {
            let timestamp_521: bigint;
            let fromUid_522: UUID;
            let toUid_523: UUID;
            let size_524: number;
            let messageId_525: UUID;
            timestamp_521 = in__520.readLong();
            fromUid_522 = FastMeta.META_UUID.deserialize(sCtx_517, in__520);
            toUid_523 = FastMeta.META_UUID.deserialize(sCtx_517, in__520);
            size_524 = in__520.readInt();
            messageId_525 = FastMeta.META_UUID.deserialize(sCtx_517, in__520);
            return new MessageInfo(timestamp_521, fromUid_522, toUid_523, size_524, messageId_525);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_526: MetaContext, obj_527: MoneyOperation, _out_528: DataOut): void  {
        _out_528.writeLong(obj_527.id);
        FastMeta.META_UUID.serialize(sCtx_526, obj_527.from, _out_528);
        FastMeta.META_UUID.serialize(sCtx_526, obj_527.to, _out_528);
        _out_528.writeLong(obj_527.amount);
        _out_528.writeLong(obj_527.time);
        _out_528.writeBoolean(obj_527.credit);
        Status.META.serialize(sCtx_526, obj_527.status, _out_528);
        
    }
    deserialize(sCtx_526: MetaContext, in__529: DataIn): MoneyOperation  {
        try  {
            let id_530: bigint;
            let from_531: UUID;
            let to_532: UUID;
            let amount_533: bigint;
            let time_534: bigint;
            let credit_535: boolean;
            let status_536: Status;
            id_530 = in__529.readLong();
            from_531 = FastMeta.META_UUID.deserialize(sCtx_526, in__529);
            to_532 = FastMeta.META_UUID.deserialize(sCtx_526, in__529);
            amount_533 = in__529.readLong();
            time_534 = in__529.readLong();
            credit_535 = in__529.readBoolean();
            status_536 = Status.META.deserialize(sCtx_526, in__529);
            return new MoneyOperation(id_530, from_531, to_532, amount_533, time_534, credit_535, status_536);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_537: MetaContext, obj_538: PairKeysAsym, _out_539: DataOut): void  {
        Key.META.serialize(sCtx_537, obj_538.privateKey, _out_539);
        Key.META.serialize(sCtx_537, obj_538.publicKey, _out_539);
        
    }
    deserialize(sCtx_537: MetaContext, in__540: DataIn): PairKeysAsym  {
        try  {
            let privateKey_541: Key;
            let publicKey_542: Key;
            privateKey_541 = Key.META.deserialize(sCtx_537, in__540);
            publicKey_542 = Key.META.deserialize(sCtx_537, in__540);
            return new PairKeysAsym(privateKey_541, publicKey_542);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_543: MetaContext, obj_545: PairKeysAsym, _out_546: DataOut): void  {
        (PairKeysAsym as any).META_BODY.serialize(sCtx_543, obj_545, _out_546);
        
    }
    deserialize(sCtx_544: MetaContext, in__547: DataIn): PairKeysAsym  {
        try  {
            return (PairKeysAsym as any).META_BODY.deserialize(sCtx_544, in__547);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: PairKeysAsym | null | undefined): number  {
        return (PairKeysAsym as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: PairKeysAsym | null | undefined, v2: any | null | undefined): boolean  {
        return (PairKeysAsym as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: PairKeysAsym | null | undefined, res: AString): void  {
        (PairKeysAsym as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_548: MetaContext, obj_549: PairKeysAsymSigned, _out_550: DataOut): void  {
        Key.META.serialize(sCtx_548, obj_549.privateKey, _out_550);
        SignedKey.META.serialize(sCtx_548, obj_549.publicKey, _out_550);
        
    }
    deserialize(sCtx_548: MetaContext, in__551: DataIn): PairKeysAsymSigned  {
        try  {
            let privateKey_552: Key;
            let publicKey_553: SignedKey;
            privateKey_552 = Key.META.deserialize(sCtx_548, in__551);
            publicKey_553 = SignedKey.META.deserialize(sCtx_548, in__551);
            return new PairKeysAsymSigned(privateKey_552, publicKey_553);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_554: MetaContext, obj_556: PairKeysAsymSigned, _out_557: DataOut): void  {
        (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_554, obj_556, _out_557);
        
    }
    deserialize(sCtx_555: MetaContext, in__558: DataIn): PairKeysAsymSigned  {
        try  {
            return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_555, in__558);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: PairKeysAsymSigned | null | undefined): number  {
        return (PairKeysAsymSigned as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: PairKeysAsymSigned | null | undefined, v2: any | null | undefined): boolean  {
        return (PairKeysAsymSigned as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: PairKeysAsymSigned | null | undefined, res: AString): void  {
        (PairKeysAsymSigned as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_559: MetaContext, obj_560: PairKeysSign, _out_561: DataOut): void  {
        Key.META.serialize(sCtx_559, obj_560.privateKey, _out_561);
        Key.META.serialize(sCtx_559, obj_560.publicKey, _out_561);
        
    }
    deserialize(sCtx_559: MetaContext, in__562: DataIn): PairKeysSign  {
        try  {
            let privateKey_563: Key;
            let publicKey_564: Key;
            privateKey_563 = Key.META.deserialize(sCtx_559, in__562);
            publicKey_564 = Key.META.deserialize(sCtx_559, in__562);
            return new PairKeysSign(privateKey_563, publicKey_564);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_565: MetaContext, obj_567: PairKeysSign, _out_568: DataOut): void  {
        (PairKeysSign as any).META_BODY.serialize(sCtx_565, obj_567, _out_568);
        
    }
    deserialize(sCtx_566: MetaContext, in__569: DataIn): PairKeysSign  {
        try  {
            return (PairKeysSign as any).META_BODY.deserialize(sCtx_566, in__569);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: PairKeysSign | null | undefined): number  {
        return (PairKeysSign as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: PairKeysSign | null | undefined, v2: any | null | undefined): boolean  {
        return (PairKeysSign as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: PairKeysSign | null | undefined, res: AString): void  {
        (PairKeysSign as any).META_BODY.metaToString(obj, res);
        
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
export class PairKeysSymMetaBodyImpl implements FastMetaType<PairKeysSym>  {
    serialize(sCtx_570: MetaContext, obj_571: PairKeysSym, _out_572: DataOut): void  {
        KeySymmetric.META.serialize(sCtx_570, obj_571.clientToServer, _out_572);
        KeySymmetric.META.serialize(sCtx_570, obj_571.serverToClient, _out_572);
        
    }
    deserialize(sCtx_570: MetaContext, in__573: DataIn): PairKeysSym  {
        try  {
            let clientToServer_574: KeySymmetric;
            let serverToClient_575: KeySymmetric;
            clientToServer_574 = KeySymmetric.META.deserialize(sCtx_570, in__573);
            serverToClient_575 = KeySymmetric.META.deserialize(sCtx_570, in__573);
            return new PairKeysSym(clientToServer_574, serverToClient_575);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: PairKeysSym | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + KeySymmetric.META.metaHashCode(obj.clientToServer);
        hash = 37 * hash + KeySymmetric.META.metaHashCode(obj.serverToClient);
        return hash | 0;
        
    }
    metaEquals(v1: PairKeysSym | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof PairKeysSym)) return false;
        if (!KeySymmetric.META.metaEquals(v1.clientToServer, v2.clientToServer)) return false;
        if (!KeySymmetric.META.metaEquals(v1.serverToClient, v2.serverToClient)) return false;
        return true;
        
    }
    metaToString(obj: PairKeysSym | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('PairKeysSym(');
        res.add('clientToServer:').add(obj.clientToServer);
        res.add(', ');
        res.add('serverToClient:').add(obj.serverToClient);
        res.add(')');
        
    }
    public serializeToBytes(obj: PairKeysSym): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): PairKeysSym  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): PairKeysSym  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class PairKeysSymMetaImpl implements FastMetaType<PairKeysSym>  {
    serialize(sCtx_576: MetaContext, obj_578: PairKeysSym, _out_579: DataOut): void  {
        (PairKeysSym as any).META_BODY.serialize(sCtx_576, obj_578, _out_579);
        
    }
    deserialize(sCtx_577: MetaContext, in__580: DataIn): PairKeysSym  {
        try  {
            return (PairKeysSym as any).META_BODY.deserialize(sCtx_577, in__580);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: PairKeysSym | null | undefined): number  {
        return (PairKeysSym as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: PairKeysSym | null | undefined, v2: any | null | undefined): boolean  {
        return (PairKeysSym as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: PairKeysSym | null | undefined, res: AString): void  {
        (PairKeysSym as any).META_BODY.metaToString(obj, res);
        
    }
    public serializeToBytes(obj: PairKeysSym): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): PairKeysSym  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): PairKeysSym  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerDescriptorMetaBodyImpl implements FastMetaType<ServerDescriptor>  {
    serialize(sCtx_581: MetaContext, obj_582: ServerDescriptor, _out_583: DataOut): void  {
        _out_583.writeShort(obj_582.id);
        IPAddressAndPortsList.META.serialize(sCtx_581, obj_582.ipAddress, _out_583);
        
    }
    deserialize(sCtx_581: MetaContext, in__584: DataIn): ServerDescriptor  {
        try  {
            let id_585: number;
            let ipAddress_586: IPAddressAndPortsList;
            id_585 = in__584.readShort();
            ipAddress_586 = IPAddressAndPortsList.META.deserialize(sCtx_581, in__584);
            return new ServerDescriptor(id_585, ipAddress_586);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_587: MetaContext, obj_588: ServerDescriptorWithGeo, _out_589: DataOut): void  {
        _out_589.writeShort(obj_588.id);
        _out_589.writeInt(obj_588.time);
        IPAddressAndPortsList.META.serialize(sCtx_587, obj_588.ipAddress, _out_589);
        _out_589.writeDouble(obj_588.latitude);
        _out_589.writeDouble(obj_588.longitude);
        ServerType.META.serialize(sCtx_587, obj_588.type, _out_589);
        
    }
    deserialize(sCtx_587: MetaContext, in__590: DataIn): ServerDescriptorWithGeo  {
        try  {
            let id_591: number;
            let time_592: number;
            let ipAddress_593: IPAddressAndPortsList;
            let latitude_594: number;
            let longitude_595: number;
            let type_596: ServerType;
            id_591 = in__590.readShort();
            time_592 = in__590.readInt();
            ipAddress_593 = IPAddressAndPortsList.META.deserialize(sCtx_587, in__590);
            latitude_594 = in__590.readDouble();
            longitude_595 = in__590.readDouble();
            type_596 = ServerType.META.deserialize(sCtx_587, in__590);
            return new ServerDescriptorWithGeo(id_591, time_592, ipAddress_593, latitude_594, longitude_595, type_596);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerDescriptorWithGeo | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_SHORT.metaHashCode(obj.id);
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.time);
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
        if (!FastMeta.META_INT.metaEquals(v1.time, v2.time)) return false;
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
        res.add('time:').add(obj.time);
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
    serialize(sCtx_597: MetaContext, obj_598: SignAE_ED25519, _out_599: DataOut): void  {
        if (obj_598.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_598.data must be 64 but was ${obj_598.data.length}`);
        _out_599.write(obj_598.data);
        
    }
    deserialize(sCtx_597: MetaContext, in__600: DataIn): SignAE_ED25519  {
        try  {
            let data_602: Uint8Array;
            const len_604 = 64;
            const bytes_605 = in__600.readBytes(len_604);
            data_602 = bytes_605;
            return new SignAE_ED25519(data_602);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_606: MetaContext, obj_608: SignAE_ED25519, _out_609: DataOut): void  {
        (SignAE_ED25519 as any).META_BODY.serialize(sCtx_606, obj_608, _out_609);
        
    }
    deserialize(sCtx_607: MetaContext, in__610: DataIn): SignAE_ED25519  {
        try  {
            return (SignAE_ED25519 as any).META_BODY.deserialize(sCtx_607, in__610);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: SignAE_ED25519 | null | undefined): number  {
        return (SignAE_ED25519 as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: SignAE_ED25519 | null | undefined, v2: any | null | undefined): boolean  {
        return (SignAE_ED25519 as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: SignAE_ED25519 | null | undefined, res: AString): void  {
        (SignAE_ED25519 as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_611: MetaContext, obj_612: SignedKey, _out_613: DataOut): void  {
        Key.META.serialize(sCtx_611, obj_612.key, _out_613);
        Sign.META.serialize(sCtx_611, obj_612.sign, _out_613);
        
    }
    deserialize(sCtx_611: MetaContext, in__614: DataIn): SignedKey  {
        try  {
            let _key_615: Key;
            let sign_616: Sign;
            _key_615 = Key.META.deserialize(sCtx_611, in__614);
            sign_616 = Sign.META.deserialize(sCtx_611, in__614);
            return new SignedKey(_key_615, sign_616);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_617: MetaContext, obj_618: SignHYDROGEN, _out_619: DataOut): void  {
        if (obj_618.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_618.data must be 64 but was ${obj_618.data.length}`);
        _out_619.write(obj_618.data);
        
    }
    deserialize(sCtx_617: MetaContext, in__620: DataIn): SignHYDROGEN  {
        try  {
            let data_622: Uint8Array;
            const len_624 = 64;
            const bytes_625 = in__620.readBytes(len_624);
            data_622 = bytes_625;
            return new SignHYDROGEN(data_622);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_626: MetaContext, obj_628: SignHYDROGEN, _out_629: DataOut): void  {
        (SignHYDROGEN as any).META_BODY.serialize(sCtx_626, obj_628, _out_629);
        
    }
    deserialize(sCtx_627: MetaContext, in__630: DataIn): SignHYDROGEN  {
        try  {
            return (SignHYDROGEN as any).META_BODY.deserialize(sCtx_627, in__630);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: SignHYDROGEN | null | undefined): number  {
        return (SignHYDROGEN as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: SignHYDROGEN | null | undefined, v2: any | null | undefined): boolean  {
        return (SignHYDROGEN as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: SignHYDROGEN | null | undefined, res: AString): void  {
        (SignHYDROGEN as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_631: MetaContext, obj_632: SodiumChacha20Poly1305, _out_633: DataOut): void  {
        if (obj_632.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_632.data must be 32 but was ${obj_632.data.length}`);
        _out_633.write(obj_632.data);
        
    }
    deserialize(sCtx_631: MetaContext, in__634: DataIn): SodiumChacha20Poly1305  {
        try  {
            let data_636: Uint8Array;
            const len_638 = 32;
            const bytes_639 = in__634.readBytes(len_638);
            data_636 = bytes_639;
            return new SodiumChacha20Poly1305(data_636);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_640: MetaContext, obj_642: SodiumChacha20Poly1305, _out_643: DataOut): void  {
        (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_640, obj_642, _out_643);
        
    }
    deserialize(sCtx_641: MetaContext, in__644: DataIn): SodiumChacha20Poly1305  {
        try  {
            return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_641, in__644);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: SodiumChacha20Poly1305 | null | undefined): number  {
        return (SodiumChacha20Poly1305 as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: SodiumChacha20Poly1305 | null | undefined, v2: any | null | undefined): boolean  {
        return (SodiumChacha20Poly1305 as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: SodiumChacha20Poly1305 | null | undefined, res: AString): void  {
        (SodiumChacha20Poly1305 as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_645: MetaContext, obj_646: SodiumCurvePrivate, _out_647: DataOut): void  {
        if (obj_646.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_646.data must be 32 but was ${obj_646.data.length}`);
        _out_647.write(obj_646.data);
        
    }
    deserialize(sCtx_645: MetaContext, in__648: DataIn): SodiumCurvePrivate  {
        try  {
            let data_650: Uint8Array;
            const len_652 = 32;
            const bytes_653 = in__648.readBytes(len_652);
            data_650 = bytes_653;
            return new SodiumCurvePrivate(data_650);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_654: MetaContext, obj_656: SodiumCurvePrivate, _out_657: DataOut): void  {
        (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_654, obj_656, _out_657);
        
    }
    deserialize(sCtx_655: MetaContext, in__658: DataIn): SodiumCurvePrivate  {
        try  {
            return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_655, in__658);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: SodiumCurvePrivate | null | undefined): number  {
        return (SodiumCurvePrivate as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: SodiumCurvePrivate | null | undefined, v2: any | null | undefined): boolean  {
        return (SodiumCurvePrivate as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: SodiumCurvePrivate | null | undefined, res: AString): void  {
        (SodiumCurvePrivate as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_659: MetaContext, obj_660: SodiumCurvePublic, _out_661: DataOut): void  {
        if (obj_660.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_660.data must be 32 but was ${obj_660.data.length}`);
        _out_661.write(obj_660.data);
        
    }
    deserialize(sCtx_659: MetaContext, in__662: DataIn): SodiumCurvePublic  {
        try  {
            let data_664: Uint8Array;
            const len_666 = 32;
            const bytes_667 = in__662.readBytes(len_666);
            data_664 = bytes_667;
            return new SodiumCurvePublic(data_664);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_668: MetaContext, obj_670: SodiumCurvePublic, _out_671: DataOut): void  {
        (SodiumCurvePublic as any).META_BODY.serialize(sCtx_668, obj_670, _out_671);
        
    }
    deserialize(sCtx_669: MetaContext, in__672: DataIn): SodiumCurvePublic  {
        try  {
            return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_669, in__672);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: SodiumCurvePublic | null | undefined): number  {
        return (SodiumCurvePublic as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: SodiumCurvePublic | null | undefined, v2: any | null | undefined): boolean  {
        return (SodiumCurvePublic as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: SodiumCurvePublic | null | undefined, res: AString): void  {
        (SodiumCurvePublic as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_673: MetaContext, obj_674: SodiumSignPrivate, _out_675: DataOut): void  {
        if (obj_674.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_674.data must be 64 but was ${obj_674.data.length}`);
        _out_675.write(obj_674.data);
        
    }
    deserialize(sCtx_673: MetaContext, in__676: DataIn): SodiumSignPrivate  {
        try  {
            let data_678: Uint8Array;
            const len_680 = 64;
            const bytes_681 = in__676.readBytes(len_680);
            data_678 = bytes_681;
            return new SodiumSignPrivate(data_678);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_682: MetaContext, obj_684: SodiumSignPrivate, _out_685: DataOut): void  {
        (SodiumSignPrivate as any).META_BODY.serialize(sCtx_682, obj_684, _out_685);
        
    }
    deserialize(sCtx_683: MetaContext, in__686: DataIn): SodiumSignPrivate  {
        try  {
            return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_683, in__686);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: SodiumSignPrivate | null | undefined): number  {
        return (SodiumSignPrivate as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: SodiumSignPrivate | null | undefined, v2: any | null | undefined): boolean  {
        return (SodiumSignPrivate as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: SodiumSignPrivate | null | undefined, res: AString): void  {
        (SodiumSignPrivate as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_687: MetaContext, obj_688: SodiumSignPublic, _out_689: DataOut): void  {
        if (obj_688.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_688.data must be 32 but was ${obj_688.data.length}`);
        _out_689.write(obj_688.data);
        
    }
    deserialize(sCtx_687: MetaContext, in__690: DataIn): SodiumSignPublic  {
        try  {
            let data_692: Uint8Array;
            const len_694 = 32;
            const bytes_695 = in__690.readBytes(len_694);
            data_692 = bytes_695;
            return new SodiumSignPublic(data_692);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_696: MetaContext, obj_698: SodiumSignPublic, _out_699: DataOut): void  {
        (SodiumSignPublic as any).META_BODY.serialize(sCtx_696, obj_698, _out_699);
        
    }
    deserialize(sCtx_697: MetaContext, in__700: DataIn): SodiumSignPublic  {
        try  {
            return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_697, in__700);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: SodiumSignPublic | null | undefined): number  {
        return (SodiumSignPublic as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: SodiumSignPublic | null | undefined, v2: any | null | undefined): boolean  {
        return (SodiumSignPublic as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: SodiumSignPublic | null | undefined, res: AString): void  {
        (SodiumSignPublic as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_701: MetaContext, obj_702: TelemetryCPP, _out_703: DataOut): void  {
        _out_703.writeInt(obj_702.utm_id);
        SerializerPackNumber.INSTANCE.put(_out_703, obj_702.blob.length);
        _out_703.write(obj_702.blob);
        const stringBytes_706 = new TextEncoder().encode(obj_702.lib_version);
        SerializerPackNumber.INSTANCE.put(_out_703, stringBytes_706.length);
        _out_703.write(stringBytes_706);
        const stringBytes_708 = new TextEncoder().encode(obj_702.os);
        SerializerPackNumber.INSTANCE.put(_out_703, stringBytes_708.length);
        _out_703.write(stringBytes_708);
        const stringBytes_710 = new TextEncoder().encode(obj_702.compiler);
        SerializerPackNumber.INSTANCE.put(_out_703, stringBytes_710.length);
        _out_703.write(stringBytes_710);
        
    }
    deserialize(sCtx_701: MetaContext, in__704: DataIn): TelemetryCPP  {
        try  {
            let utm_id_712: number;
            let blob_713: Uint8Array;
            let lib_version_714: string;
            let os_715: string;
            let compiler_716: string;
            utm_id_712 = in__704.readInt();
            const len_718 = Number(DeserializerPackNumber.INSTANCE.put(in__704));
            const bytes_719 = in__704.readBytes(len_718);
            blob_713 = bytes_719;
            let stringBytes_720: Uint8Array;
            const len_722 = Number(DeserializerPackNumber.INSTANCE.put(in__704));
            const bytes_723 = in__704.readBytes(len_722);
            stringBytes_720 = bytes_723;
            lib_version_714 = new TextDecoder('utf-8').decode(stringBytes_720);
            let stringBytes_724: Uint8Array;
            const len_726 = Number(DeserializerPackNumber.INSTANCE.put(in__704));
            const bytes_727 = in__704.readBytes(len_726);
            stringBytes_724 = bytes_727;
            os_715 = new TextDecoder('utf-8').decode(stringBytes_724);
            let stringBytes_728: Uint8Array;
            const len_730 = Number(DeserializerPackNumber.INSTANCE.put(in__704));
            const bytes_731 = in__704.readBytes(len_730);
            stringBytes_728 = bytes_731;
            compiler_716 = new TextDecoder('utf-8').decode(stringBytes_728);
            return new TelemetryCPP(utm_id_712, blob_713, lib_version_714, os_715, compiler_716);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_732: MetaContext, obj_734: TelemetryCPP, _out_735: DataOut): void  {
        (TelemetryCPP as any).META_BODY.serialize(sCtx_732, obj_734, _out_735);
        
    }
    deserialize(sCtx_733: MetaContext, in__736: DataIn): TelemetryCPP  {
        try  {
            return (TelemetryCPP as any).META_BODY.deserialize(sCtx_733, in__736);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: TelemetryCPP | null | undefined): number  {
        return (TelemetryCPP as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: TelemetryCPP | null | undefined, v2: any | null | undefined): boolean  {
        return (TelemetryCPP as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: TelemetryCPP | null | undefined, res: AString): void  {
        (TelemetryCPP as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_737: MetaContext, obj_738: Uap, _out_739: DataOut): void  {
        _out_739.writeLong(obj_738.deltaMs);
        _out_739.writeLong(obj_738.lastReadTimestamp);
        
    }
    deserialize(sCtx_737: MetaContext, in__740: DataIn): Uap  {
        try  {
            let deltaMs_741: bigint;
            let lastReadTimestamp_742: bigint;
            deltaMs_741 = in__740.readLong();
            lastReadTimestamp_742 = in__740.readLong();
            return new Uap(deltaMs_741, lastReadTimestamp_742);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_743: MetaContext, obj_744: UUIDAndCloud, _out_745: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_743, obj_744.uid, _out_745);
        Cloud.META.serialize(sCtx_743, obj_744.cloud, _out_745);
        
    }
    deserialize(sCtx_743: MetaContext, in__746: DataIn): UUIDAndCloud  {
        try  {
            let uid_747: UUID;
            let cloud_748: Cloud;
            uid_747 = FastMeta.META_UUID.deserialize(sCtx_743, in__746);
            cloud_748 = Cloud.META.deserialize(sCtx_743, in__746);
            return new UUIDAndCloud(uid_747, cloud_748);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_749: MetaContext, obj_750: WebRtcSession, _out_751: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_751, obj_750.sdp.length);
        _out_751.write(obj_750.sdp);
        SerializerPackNumber.INSTANCE.put(_out_751, obj_750.candidates.length);
        for (const el_754 of obj_750.candidates)  {
            IceCandidate.META.serialize(sCtx_749, el_754, _out_751);
            
        }
        
    }
    deserialize(sCtx_749: MetaContext, in__752: DataIn): WebRtcSession  {
        try  {
            let sdp_755: Uint8Array;
            let candidates_756: IceCandidate[];
            const len_758 = Number(DeserializerPackNumber.INSTANCE.put(in__752));
            const bytes_759 = in__752.readBytes(len_758);
            sdp_755 = bytes_759;
            const len_761 = Number(DeserializerPackNumber.INSTANCE.put(in__752));
            candidates_756 = new Array<IceCandidate>(len_761);
            for (let idx_760 = 0;
            idx_760 < len_761;
            idx_760++)  {
                candidates_756[idx_760] = IceCandidate.META.deserialize(sCtx_749, in__752);
                
            }
            return new WebRtcSession(sdp_755, candidates_756);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_762: MetaContext, obj_763: WorkProofBCrypt, _out_764: DataOut): void  {
        _out_764.writeByte(obj_763.costBCrypt);
        _out_764.writeByte(obj_763.poolSize);
        _out_764.writeInt(obj_763.maxHashVal);
        
    }
    deserialize(sCtx_762: MetaContext, in__765: DataIn): WorkProofBCrypt  {
        try  {
            let costBCrypt_766: number;
            let poolSize_767: number;
            let maxHashVal_768: number;
            costBCrypt_766 = in__765.readByte();
            poolSize_767 = in__765.readByte();
            maxHashVal_768 = in__765.readInt();
            return new WorkProofBCrypt(costBCrypt_766, poolSize_767, maxHashVal_768);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
    serialize(sCtx_769: MetaContext, obj_771: WorkProofBCrypt, _out_772: DataOut): void  {
        (WorkProofBCrypt as any).META_BODY.serialize(sCtx_769, obj_771, _out_772);
        
    }
    deserialize(sCtx_770: MetaContext, in__773: DataIn): WorkProofBCrypt  {
        try  {
            return (WorkProofBCrypt as any).META_BODY.deserialize(sCtx_770, in__773);
            
        }
        catch (e)  {
            if (e instanceof SecurityConnectionDropException) throw e;
            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: WorkProofBCrypt | null | undefined): number  {
        return (WorkProofBCrypt as any).META_BODY.metaHashCode(obj);
        
    }
    metaEquals(v1: WorkProofBCrypt | null | undefined, v2: any | null | undefined): boolean  {
        return (WorkProofBCrypt as any).META_BODY.metaEquals(v1, v2);
        
    }
    metaToString(obj: WorkProofBCrypt | null | undefined, res: AString): void  {
        (WorkProofBCrypt as any).META_BODY.metaToString(obj, res);
        
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
    serialize(sCtx_774: MetaContext, obj_775: WorkProofDTO, _out_776: DataOut): void  {
        const stringBytes_778 = new TextEncoder().encode(obj_775.salt);
        SerializerPackNumber.INSTANCE.put(_out_776, stringBytes_778.length);
        _out_776.write(stringBytes_778);
        const stringBytes_780 = new TextEncoder().encode(obj_775.suffix);
        SerializerPackNumber.INSTANCE.put(_out_776, stringBytes_780.length);
        _out_776.write(stringBytes_780);
        _out_776.writeByte(obj_775.poolSize);
        _out_776.writeInt(obj_775.maxHashVal);
        SignedKey.META.serialize(sCtx_774, obj_775.globalKey, _out_776);
        
    }
    deserialize(sCtx_774: MetaContext, in__777: DataIn): WorkProofDTO  {
        try  {
            let salt_782: string;
            let suffix_783: string;
            let poolSize_784: number;
            let maxHashVal_785: number;
            let globalKey_786: SignedKey;
            let stringBytes_787: Uint8Array;
            const len_789 = Number(DeserializerPackNumber.INSTANCE.put(in__777));
            const bytes_790 = in__777.readBytes(len_789);
            stringBytes_787 = bytes_790;
            salt_782 = new TextDecoder('utf-8').decode(stringBytes_787);
            let stringBytes_791: Uint8Array;
            const len_793 = Number(DeserializerPackNumber.INSTANCE.put(in__777));
            const bytes_794 = in__777.readBytes(len_793);
            stringBytes_791 = bytes_794;
            suffix_783 = new TextDecoder('utf-8').decode(stringBytes_791);
            poolSize_784 = in__777.readByte();
            maxHashVal_785 = in__777.readInt();
            globalKey_786 = SignedKey.META.deserialize(sCtx_774, in__777);
            return new WorkProofDTO(salt_782, suffix_783, poolSize_784, maxHashVal_785, globalKey_786);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
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
                const childCtx = ctx.findContext(outObj.deferredFactory, ...(outObj.deferredKeys || []));
                const childLock = childCtx.lock();
                try  {
                    const remoteApi = childCtx.makeRemote((ClientApiRegSafe as any).META);
                    outObj.deferredRemoteGenerator(remoteApi);
                    const raw = childCtx.remoteDataToArrayAsArray();
                    outObj.data = outObj.cryptoConverter ? outObj.cryptoConverter(raw) : raw;
                    
                }
                finally  {
                    childLock?.close();
                    
                }
                
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
            throw new SecurityConnectionDropException("Stream error: " + (e instanceof Error ? e.message : String(e)));
            
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
                const childCtx = ctx.findContext(outObj.deferredFactory, ...(outObj.deferredKeys || []));
                const childLock = childCtx.lock();
                try  {
                    const remoteApi = childCtx.makeRemote((ServerApiByUid as any).META);
                    outObj.deferredRemoteGenerator(remoteApi);
                    outObj.data = childCtx.remoteDataToArrayAsArray();
                    
                }
                finally  {
                    childLock?.close();
                    
                }
                
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
            throw new SecurityConnectionDropException("Stream error: " + (e instanceof Error ? e.message : String(e)));
            
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
                const childCtx = ctx.findContext(outObj.deferredFactory, ...(outObj.deferredKeys || []));
                const childLock = childCtx.lock();
                try  {
                    const remoteApi = childCtx.makeRemote((ServerApiByUidClient as any).META);
                    outObj.deferredRemoteGenerator(remoteApi);
                    outObj.data = childCtx.remoteDataToArrayAsArray();
                    
                }
                finally  {
                    childLock?.close();
                    
                }
                
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
            throw new SecurityConnectionDropException("Stream error: " + (e instanceof Error ? e.message : String(e)));
            
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
                const childCtx = ctx.findContext(outObj.deferredFactory, ...(outObj.deferredKeys || []));
                const childLock = childCtx.lock();
                try  {
                    const remoteApi = childCtx.makeRemote((GlobalRegServerApi as any).META);
                    outObj.deferredRemoteGenerator(remoteApi);
                    const raw = childCtx.remoteDataToArrayAsArray();
                    outObj.data = outObj.cryptoConverter ? outObj.cryptoConverter(raw) : raw;
                    
                }
                finally  {
                    childLock?.close();
                    
                }
                
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
            throw new SecurityConnectionDropException("Stream error: " + (e instanceof Error ? e.message : String(e)));
            
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
                const childCtx = ctx.findContext(outObj.deferredFactory, ...(outObj.deferredKeys || []));
                const childLock = childCtx.lock();
                try  {
                    const remoteApi = childCtx.makeRemote((GlobalRegClientApi as any).META);
                    outObj.deferredRemoteGenerator(remoteApi);
                    const raw = childCtx.remoteDataToArrayAsArray();
                    outObj.data = outObj.cryptoConverter ? outObj.cryptoConverter(raw) : raw;
                    
                }
                finally  {
                    childLock?.close();
                    
                }
                
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
            throw new SecurityConnectionDropException("Stream error: " + (e instanceof Error ? e.message : String(e)));
            
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
                const childCtx = ctx.findContext(outObj.deferredFactory, ...(outObj.deferredKeys || []));
                const childLock = childCtx.lock();
                try  {
                    const remoteApi = childCtx.makeRemote((ClientApiSafe as any).META);
                    outObj.deferredRemoteGenerator(remoteApi);
                    const raw = childCtx.remoteDataToArrayAsArray();
                    outObj.data = outObj.cryptoConverter ? outObj.cryptoConverter(raw) : raw;
                    
                }
                finally  {
                    childLock?.close();
                    
                }
                
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
            throw new SecurityConnectionDropException("Stream error: " + (e instanceof Error ? e.message : String(e)));
            
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
                const childCtx = ctx.findContext(outObj.deferredFactory, ...(outObj.deferredKeys || []));
                const childLock = childCtx.lock();
                try  {
                    const remoteApi = childCtx.makeRemote((AuthorizedApi as any).META);
                    outObj.deferredRemoteGenerator(remoteApi);
                    const raw = childCtx.remoteDataToArrayAsArray();
                    outObj.data = outObj.cryptoConverter ? outObj.cryptoConverter(raw) : raw;
                    
                }
                finally  {
                    childLock?.close();
                    
                }
                
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
            throw new SecurityConnectionDropException("Stream error: " + (e instanceof Error ? e.message : String(e)));
            
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
                const childCtx = ctx.findContext(outObj.deferredFactory, ...(outObj.deferredKeys || []));
                const childLock = childCtx.lock();
                try  {
                    const remoteApi = childCtx.makeRemote((ServerRegistrationApi as any).META);
                    outObj.deferredRemoteGenerator(remoteApi);
                    const raw = childCtx.remoteDataToArrayAsArray();
                    outObj.data = outObj.cryptoConverter ? outObj.cryptoConverter(raw) : raw;
                    
                }
                finally  {
                    childLock?.close();
                    
                }
                
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
            throw new SecurityConnectionDropException("Stream error: " + (e instanceof Error ? e.message : String(e)));
            
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
export class ClientApiUnsafeSendSafeApiDataMultiArgumentsMetaBodyImpl implements FastMetaType<ClientApiUnsafeSendSafeApiDataMultiArguments>  {
    serialize(sCtx_795: MetaContext, obj_796: ClientApiUnsafeSendSafeApiDataMultiArguments, _out_797: DataOut): void  {
        _out_797.writeByte(obj_796.backId);
        LoginClientStream.META.serialize(sCtx_795, obj_796.data, _out_797);
        
    }
    deserialize(sCtx_795: MetaContext, in__798: DataIn): ClientApiUnsafeSendSafeApiDataMultiArguments  {
        try  {
            let backId_799: number;
            let data_800: LoginClientStream;
            backId_799 = in__798.readByte();
            data_800 = LoginClientStream.META.deserialize(sCtx_795, in__798);
            return new ClientApiUnsafeSendSafeApiDataMultiArguments(backId_799, data_800);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiUnsafeSendSafeApiDataMultiArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_BYTE.metaHashCode(obj.backId);
        hash = 37 * hash + LoginClientStream.META.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiUnsafeSendSafeApiDataMultiArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiUnsafeSendSafeApiDataMultiArguments)) return false;
        if (!FastMeta.META_BYTE.metaEquals(v1.backId, v2.backId)) return false;
        if (!LoginClientStream.META.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiUnsafeSendSafeApiDataMultiArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiUnsafeSendSafeApiDataMultiArguments(');
        res.add('backId:').add(obj.backId);
        res.add(', ');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiUnsafeSendSafeApiDataMultiArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiUnsafeSendSafeApiDataMultiArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiUnsafeSendSafeApiDataMultiArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiUnsafeSendSafeApiDataArgumentsMetaBodyImpl implements FastMetaType<ClientApiUnsafeSendSafeApiDataArguments>  {
    serialize(sCtx_801: MetaContext, obj_802: ClientApiUnsafeSendSafeApiDataArguments, _out_803: DataOut): void  {
        LoginClientStream.META.serialize(sCtx_801, obj_802.data, _out_803);
        
    }
    deserialize(sCtx_801: MetaContext, in__804: DataIn): ClientApiUnsafeSendSafeApiDataArguments  {
        try  {
            let data_805: LoginClientStream;
            data_805 = LoginClientStream.META.deserialize(sCtx_801, in__804);
            return new ClientApiUnsafeSendSafeApiDataArguments(data_805);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiUnsafeSendSafeApiDataArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + LoginClientStream.META.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiUnsafeSendSafeApiDataArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiUnsafeSendSafeApiDataArguments)) return false;
        if (!LoginClientStream.META.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiUnsafeSendSafeApiDataArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiUnsafeSendSafeApiDataArguments(');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiUnsafeSendSafeApiDataArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiUnsafeSendSafeApiDataArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiUnsafeSendSafeApiDataArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiUnsafeMetaImpl implements FastMetaApi<ClientApiUnsafe, ClientApiUnsafeRemote>  {
    makeLocal(ctx: MetaContext, dataIn: DataIn): void  {
        this.makeLocal_fromDataIn(ctx, dataIn, ctx.getLocalApi() as ClientApiUnsafe);
        
    }
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
                    let backId_807: number;
                    let data_808: LoginClientStream;
                    backId_807 = dataIn.readByte();
                    data_808 = LoginClientStream.META.deserialize(ctx, dataIn);
                    const argsObject_809 = new ClientApiUnsafeSendSafeApiDataMultiArguments(backId_807, data_808);
                    const argsNames_810: string[] = ["backId", "data"];
                    const argsValues_811: any[] = [backId_807, data_808];
                    ctx.invokeLocalMethodBefore("sendSafeApiDataMulti", argsNames_810, argsValues_811);
                    (typeof (localApi as any).sendSafeApiDataMultiArguments === "function" ? (localApi as any).sendSafeApiDataMultiArguments(argsObject_809) : localApi.sendSafeApiDataMulti(backId_807, data_808));
                    ctx.invokeLocalMethodAfter("sendSafeApiDataMulti", null, argsNames_810, argsValues_811);
                    break;
                    
                }
                case 4:  {
                    let data_813: LoginClientStream;
                    data_813 = LoginClientStream.META.deserialize(ctx, dataIn);
                    const argsObject_814 = new ClientApiUnsafeSendSafeApiDataArguments(data_813);
                    const argsNames_815: string[] = ["data"];
                    const argsValues_816: any[] = [data_813];
                    ctx.invokeLocalMethodBefore("sendSafeApiData", argsNames_815, argsValues_816);
                    (typeof (localApi as any).sendSafeApiDataArguments === "function" ? (localApi as any).sendSafeApiDataArguments(argsObject_814) : localApi.sendSafeApiData(data_813));
                    ctx.invokeLocalMethodAfter("sendSafeApiData", null, argsNames_815, argsValues_816);
                    break;
                    
                }
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ClientApiUnsafe): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_817: MetaContext): ClientApiUnsafeRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_817.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_817.flush();
                
            }
            , getFastMetaContext: () => sCtx_817, sendSafeApiDataMulti: (backId: number, data: LoginClientStream): void =>  {
                const dataOut_819 = new DataInOut();
                dataOut_819.writeByte(3);
                const argsNames_821: string[] = ["backId", "data"];
                const argsValues_822: any[] = [backId, data];
                sCtx_817.invokeRemoteMethodAfter("sendSafeApiDataMulti", null, argsNames_821, argsValues_822);
                dataOut_819.writeByte(backId);
                LoginClientStream.META.serialize(sCtx_817, data, dataOut_819);
                sCtx_817.sendToRemote(dataOut_819.toArray());
                
            }
            , sendSafeApiData: (data: LoginClientStream): void =>  {
                const dataOut_824 = new DataInOut();
                dataOut_824.writeByte(4);
                const argsNames_826: string[] = ["data"];
                const argsValues_827: any[] = [data];
                sCtx_817.invokeRemoteMethodAfter("sendSafeApiData", null, argsNames_826, argsValues_827);
                LoginClientStream.META.serialize(sCtx_817, data, dataOut_824);
                sCtx_817.sendToRemote(dataOut_824.toArray());
                
            }
            , openSendSafeApiDataMulti(backId: number, factory: (api: ClientApiSafeRemote) => any, converter: BytesConverter, ...keys: any[]): ClientApiSafeRemote  {
                return sCtx_817.findContext(ctx =>  {
                    ctx.onFlushData(data => this.sendSafeApiDataMulti(backId, LoginClientStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((ClientApiSafe as any).META));
                    
                }
                , ...keys).makeRemote((ClientApiSafe as any).META) as ClientApiSafeRemote;
                
            }
            , openSendSafeApiData(factory: (api: ClientApiSafeRemote) => any, converter: BytesConverter, ...keys: any[]): ClientApiSafeRemote  {
                return sCtx_817.findContext(ctx =>  {
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
export class ClientApiSafeChangeParentArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeChangeParentArguments>  {
    serialize(sCtx_828: MetaContext, obj_829: ClientApiSafeChangeParentArguments, _out_830: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_828, obj_829.uid, _out_830);
        
    }
    deserialize(sCtx_828: MetaContext, in__831: DataIn): ClientApiSafeChangeParentArguments  {
        try  {
            let uid_832: UUID;
            uid_832 = FastMeta.META_UUID.deserialize(sCtx_828, in__831);
            return new ClientApiSafeChangeParentArguments(uid_832);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeChangeParentArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeChangeParentArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeChangeParentArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeChangeParentArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeChangeParentArguments(');
        res.add('uid:').add(obj.uid);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeChangeParentArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeChangeParentArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeChangeParentArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeChangeAliasArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeChangeAliasArguments>  {
    serialize(sCtx_833: MetaContext, obj_834: ClientApiSafeChangeAliasArguments, _out_835: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_833, obj_834.alias, _out_835);
        
    }
    deserialize(sCtx_833: MetaContext, in__836: DataIn): ClientApiSafeChangeAliasArguments  {
        try  {
            let alias_837: UUID;
            alias_837 = FastMeta.META_UUID.deserialize(sCtx_833, in__836);
            return new ClientApiSafeChangeAliasArguments(alias_837);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeChangeAliasArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.alias);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeChangeAliasArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeChangeAliasArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.alias, v2.alias)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeChangeAliasArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeChangeAliasArguments(');
        res.add('alias:').add(obj.alias);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeChangeAliasArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeChangeAliasArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeChangeAliasArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeNewChildrenArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeNewChildrenArguments>  {
    serialize(sCtx_838: MetaContext, obj_839: ClientApiSafeNewChildrenArguments, _out_840: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_840, obj_839.uids.length);
        for (const el_842 of obj_839.uids)  {
            FastMeta.META_UUID.serialize(sCtx_838, el_842, _out_840);
            
        }
        
    }
    deserialize(sCtx_838: MetaContext, in__841: DataIn): ClientApiSafeNewChildrenArguments  {
        try  {
            let uids_843: UUID[];
            const len_845 = Number(DeserializerPackNumber.INSTANCE.put(in__841));
            uids_843 = new Array<UUID>(len_845);
            for (let idx_844 = 0;
            idx_844 < len_845;
            idx_844++)  {
                uids_843[idx_844] = FastMeta.META_UUID.deserialize(sCtx_838, in__841);
                
            }
            return new ClientApiSafeNewChildrenArguments(uids_843);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeNewChildrenArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.uids);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeNewChildrenArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeNewChildrenArguments)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.uids, v2.uids)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeNewChildrenArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeNewChildrenArguments(');
        res.add('uids:').add(obj.uids);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeNewChildrenArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeNewChildrenArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeNewChildrenArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeSendMessagesArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeSendMessagesArguments>  {
    serialize(sCtx_846: MetaContext, obj_847: ClientApiSafeSendMessagesArguments, _out_848: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_848, obj_847.msg.length);
        for (const el_850 of obj_847.msg)  {
            Message.META.serialize(sCtx_846, el_850, _out_848);
            
        }
        
    }
    deserialize(sCtx_846: MetaContext, in__849: DataIn): ClientApiSafeSendMessagesArguments  {
        try  {
            let msg_851: Message[];
            const len_853 = Number(DeserializerPackNumber.INSTANCE.put(in__849));
            msg_851 = new Array<Message>(len_853);
            for (let idx_852 = 0;
            idx_852 < len_853;
            idx_852++)  {
                msg_851[idx_852] = Message.META.deserialize(sCtx_846, in__849);
                
            }
            return new ClientApiSafeSendMessagesArguments(msg_851);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeSendMessagesArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(Message.META).metaHashCode(obj.msg);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeSendMessagesArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeSendMessagesArguments)) return false;
        if (!FastMeta.getMetaArray(Message.META).metaEquals(v1.msg, v2.msg)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeSendMessagesArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeSendMessagesArguments(');
        res.add('msg:').add(obj.msg);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeSendMessagesArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeSendMessagesArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeSendMessagesArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeSendServerDescriptorArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeSendServerDescriptorArguments>  {
    serialize(sCtx_854: MetaContext, obj_855: ClientApiSafeSendServerDescriptorArguments, _out_856: DataOut): void  {
        ServerDescriptor.META.serialize(sCtx_854, obj_855.serverDescriptor, _out_856);
        
    }
    deserialize(sCtx_854: MetaContext, in__857: DataIn): ClientApiSafeSendServerDescriptorArguments  {
        try  {
            let serverDescriptor_858: ServerDescriptor;
            serverDescriptor_858 = ServerDescriptor.META.deserialize(sCtx_854, in__857);
            return new ClientApiSafeSendServerDescriptorArguments(serverDescriptor_858);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeSendServerDescriptorArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + ServerDescriptor.META.metaHashCode(obj.serverDescriptor);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeSendServerDescriptorArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeSendServerDescriptorArguments)) return false;
        if (!ServerDescriptor.META.metaEquals(v1.serverDescriptor, v2.serverDescriptor)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeSendServerDescriptorArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeSendServerDescriptorArguments(');
        res.add('serverDescriptor:').add(obj.serverDescriptor);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeSendServerDescriptorArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeSendServerDescriptorArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeSendServerDescriptorArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeSendServerDescriptorsArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeSendServerDescriptorsArguments>  {
    serialize(sCtx_859: MetaContext, obj_860: ClientApiSafeSendServerDescriptorsArguments, _out_861: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_861, obj_860.serverDescriptors.length);
        for (const el_863 of obj_860.serverDescriptors)  {
            ServerDescriptor.META.serialize(sCtx_859, el_863, _out_861);
            
        }
        
    }
    deserialize(sCtx_859: MetaContext, in__862: DataIn): ClientApiSafeSendServerDescriptorsArguments  {
        try  {
            let serverDescriptors_864: ServerDescriptor[];
            const len_866 = Number(DeserializerPackNumber.INSTANCE.put(in__862));
            serverDescriptors_864 = new Array<ServerDescriptor>(len_866);
            for (let idx_865 = 0;
            idx_865 < len_866;
            idx_865++)  {
                serverDescriptors_864[idx_865] = ServerDescriptor.META.deserialize(sCtx_859, in__862);
                
            }
            return new ClientApiSafeSendServerDescriptorsArguments(serverDescriptors_864);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeSendServerDescriptorsArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(ServerDescriptor.META).metaHashCode(obj.serverDescriptors);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeSendServerDescriptorsArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeSendServerDescriptorsArguments)) return false;
        if (!FastMeta.getMetaArray(ServerDescriptor.META).metaEquals(v1.serverDescriptors, v2.serverDescriptors)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeSendServerDescriptorsArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeSendServerDescriptorsArguments(');
        res.add('serverDescriptors:').add(obj.serverDescriptors);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeSendServerDescriptorsArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeSendServerDescriptorsArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeSendServerDescriptorsArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeSendCloudArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeSendCloudArguments>  {
    serialize(sCtx_867: MetaContext, obj_868: ClientApiSafeSendCloudArguments, _out_869: DataOut): void  {
        UUIDAndCloud.META.serialize(sCtx_867, obj_868.uidAndCloud, _out_869);
        
    }
    deserialize(sCtx_867: MetaContext, in__870: DataIn): ClientApiSafeSendCloudArguments  {
        try  {
            let uidAndCloud_871: UUIDAndCloud;
            uidAndCloud_871 = UUIDAndCloud.META.deserialize(sCtx_867, in__870);
            return new ClientApiSafeSendCloudArguments(uidAndCloud_871);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeSendCloudArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + UUIDAndCloud.META.metaHashCode(obj.uidAndCloud);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeSendCloudArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeSendCloudArguments)) return false;
        if (!UUIDAndCloud.META.metaEquals(v1.uidAndCloud, v2.uidAndCloud)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeSendCloudArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeSendCloudArguments(');
        res.add('uidAndCloud:').add(obj.uidAndCloud);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeSendCloudArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeSendCloudArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeSendCloudArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeSendCloudsArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeSendCloudsArguments>  {
    serialize(sCtx_872: MetaContext, obj_873: ClientApiSafeSendCloudsArguments, _out_874: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_874, obj_873.clouds.length);
        for (const el_876 of obj_873.clouds)  {
            UUIDAndCloud.META.serialize(sCtx_872, el_876, _out_874);
            
        }
        
    }
    deserialize(sCtx_872: MetaContext, in__875: DataIn): ClientApiSafeSendCloudsArguments  {
        try  {
            let clouds_877: UUIDAndCloud[];
            const len_879 = Number(DeserializerPackNumber.INSTANCE.put(in__875));
            clouds_877 = new Array<UUIDAndCloud>(len_879);
            for (let idx_878 = 0;
            idx_878 < len_879;
            idx_878++)  {
                clouds_877[idx_878] = UUIDAndCloud.META.deserialize(sCtx_872, in__875);
                
            }
            return new ClientApiSafeSendCloudsArguments(clouds_877);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeSendCloudsArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(UUIDAndCloud.META).metaHashCode(obj.clouds);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeSendCloudsArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeSendCloudsArguments)) return false;
        if (!FastMeta.getMetaArray(UUIDAndCloud.META).metaEquals(v1.clouds, v2.clouds)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeSendCloudsArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeSendCloudsArguments(');
        res.add('clouds:').add(obj.clouds);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeSendCloudsArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeSendCloudsArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeSendCloudsArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeRequestTelemetryArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeRequestTelemetryArguments>  {
    serialize(sCtx_880: MetaContext, obj_882: ClientApiSafeRequestTelemetryArguments, _out_883: DataOut): void  {
        
    }
    deserialize(sCtx_881: MetaContext, in__884: DataIn): ClientApiSafeRequestTelemetryArguments  {
        try  {
            return new ClientApiSafeRequestTelemetryArguments();
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeRequestTelemetryArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeRequestTelemetryArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeRequestTelemetryArguments)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeRequestTelemetryArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeRequestTelemetryArguments(');
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeRequestTelemetryArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeRequestTelemetryArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeRequestTelemetryArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeSendAccessGroupsArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeSendAccessGroupsArguments>  {
    serialize(sCtx_885: MetaContext, obj_886: ClientApiSafeSendAccessGroupsArguments, _out_887: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_887, obj_886.groups.length);
        for (const el_889 of obj_886.groups)  {
            AccessGroup.META.serialize(sCtx_885, el_889, _out_887);
            
        }
        
    }
    deserialize(sCtx_885: MetaContext, in__888: DataIn): ClientApiSafeSendAccessGroupsArguments  {
        try  {
            let groups_890: AccessGroup[];
            const len_892 = Number(DeserializerPackNumber.INSTANCE.put(in__888));
            groups_890 = new Array<AccessGroup>(len_892);
            for (let idx_891 = 0;
            idx_891 < len_892;
            idx_891++)  {
                groups_890[idx_891] = AccessGroup.META.deserialize(sCtx_885, in__888);
                
            }
            return new ClientApiSafeSendAccessGroupsArguments(groups_890);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeSendAccessGroupsArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(AccessGroup.META).metaHashCode(obj.groups);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeSendAccessGroupsArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeSendAccessGroupsArguments)) return false;
        if (!FastMeta.getMetaArray(AccessGroup.META).metaEquals(v1.groups, v2.groups)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeSendAccessGroupsArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeSendAccessGroupsArguments(');
        res.add('groups:').add(obj.groups);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeSendAccessGroupsArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeSendAccessGroupsArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeSendAccessGroupsArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeSendAccessGroupForClientArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeSendAccessGroupForClientArguments>  {
    serialize(sCtx_893: MetaContext, obj_894: ClientApiSafeSendAccessGroupForClientArguments, _out_895: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_893, obj_894.uid, _out_895);
        SerializerPackNumber.INSTANCE.put(_out_895, obj_894.groups.length);
        for (const el_897 of obj_894.groups)  {
            FastMeta.META_UUID.serialize(sCtx_893, el_897, _out_895);
            
        }
        
    }
    deserialize(sCtx_893: MetaContext, in__896: DataIn): ClientApiSafeSendAccessGroupForClientArguments  {
        try  {
            let uid_898: UUID;
            let groups_899: UUID[];
            uid_898 = FastMeta.META_UUID.deserialize(sCtx_893, in__896);
            const len_901 = Number(DeserializerPackNumber.INSTANCE.put(in__896));
            groups_899 = new Array<UUID>(len_901);
            for (let idx_900 = 0;
            idx_900 < len_901;
            idx_900++)  {
                groups_899[idx_900] = FastMeta.META_UUID.deserialize(sCtx_893, in__896);
                
            }
            return new ClientApiSafeSendAccessGroupForClientArguments(uid_898, groups_899);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeSendAccessGroupForClientArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.groups);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeSendAccessGroupForClientArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeSendAccessGroupForClientArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.groups, v2.groups)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeSendAccessGroupForClientArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeSendAccessGroupForClientArguments(');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('groups:').add(obj.groups);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeSendAccessGroupForClientArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeSendAccessGroupForClientArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeSendAccessGroupForClientArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeAddItemsToAccessGroupArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeAddItemsToAccessGroupArguments>  {
    serialize(sCtx_902: MetaContext, obj_903: ClientApiSafeAddItemsToAccessGroupArguments, _out_904: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_902, obj_903.id, _out_904);
        SerializerPackNumber.INSTANCE.put(_out_904, obj_903.groups.length);
        for (const el_906 of obj_903.groups)  {
            FastMeta.META_UUID.serialize(sCtx_902, el_906, _out_904);
            
        }
        
    }
    deserialize(sCtx_902: MetaContext, in__905: DataIn): ClientApiSafeAddItemsToAccessGroupArguments  {
        try  {
            let id_907: UUID;
            let groups_908: UUID[];
            id_907 = FastMeta.META_UUID.deserialize(sCtx_902, in__905);
            const len_910 = Number(DeserializerPackNumber.INSTANCE.put(in__905));
            groups_908 = new Array<UUID>(len_910);
            for (let idx_909 = 0;
            idx_909 < len_910;
            idx_909++)  {
                groups_908[idx_909] = FastMeta.META_UUID.deserialize(sCtx_902, in__905);
                
            }
            return new ClientApiSafeAddItemsToAccessGroupArguments(id_907, groups_908);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeAddItemsToAccessGroupArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.id);
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.groups);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeAddItemsToAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeAddItemsToAccessGroupArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.id, v2.id)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.groups, v2.groups)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeAddItemsToAccessGroupArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeAddItemsToAccessGroupArguments(');
        res.add('id:').add(obj.id);
        res.add(', ');
        res.add('groups:').add(obj.groups);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeAddItemsToAccessGroupArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeAddItemsToAccessGroupArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeAddItemsToAccessGroupArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeRemoveItemsFromAccessGroupArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeRemoveItemsFromAccessGroupArguments>  {
    serialize(sCtx_911: MetaContext, obj_912: ClientApiSafeRemoveItemsFromAccessGroupArguments, _out_913: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_911, obj_912.id, _out_913);
        SerializerPackNumber.INSTANCE.put(_out_913, obj_912.groups.length);
        for (const el_915 of obj_912.groups)  {
            FastMeta.META_UUID.serialize(sCtx_911, el_915, _out_913);
            
        }
        
    }
    deserialize(sCtx_911: MetaContext, in__914: DataIn): ClientApiSafeRemoveItemsFromAccessGroupArguments  {
        try  {
            let id_916: UUID;
            let groups_917: UUID[];
            id_916 = FastMeta.META_UUID.deserialize(sCtx_911, in__914);
            const len_919 = Number(DeserializerPackNumber.INSTANCE.put(in__914));
            groups_917 = new Array<UUID>(len_919);
            for (let idx_918 = 0;
            idx_918 < len_919;
            idx_918++)  {
                groups_917[idx_918] = FastMeta.META_UUID.deserialize(sCtx_911, in__914);
                
            }
            return new ClientApiSafeRemoveItemsFromAccessGroupArguments(id_916, groups_917);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeRemoveItemsFromAccessGroupArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.id);
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.groups);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeRemoveItemsFromAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeRemoveItemsFromAccessGroupArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.id, v2.id)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.groups, v2.groups)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeRemoveItemsFromAccessGroupArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeRemoveItemsFromAccessGroupArguments(');
        res.add('id:').add(obj.id);
        res.add(', ');
        res.add('groups:').add(obj.groups);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeRemoveItemsFromAccessGroupArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeRemoveItemsFromAccessGroupArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeRemoveItemsFromAccessGroupArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeAddAccessGroupsToClientArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeAddAccessGroupsToClientArguments>  {
    serialize(sCtx_920: MetaContext, obj_921: ClientApiSafeAddAccessGroupsToClientArguments, _out_922: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_920, obj_921.uid, _out_922);
        SerializerPackNumber.INSTANCE.put(_out_922, obj_921.groups.length);
        for (const el_924 of obj_921.groups)  {
            FastMeta.META_UUID.serialize(sCtx_920, el_924, _out_922);
            
        }
        
    }
    deserialize(sCtx_920: MetaContext, in__923: DataIn): ClientApiSafeAddAccessGroupsToClientArguments  {
        try  {
            let uid_925: UUID;
            let groups_926: UUID[];
            uid_925 = FastMeta.META_UUID.deserialize(sCtx_920, in__923);
            const len_928 = Number(DeserializerPackNumber.INSTANCE.put(in__923));
            groups_926 = new Array<UUID>(len_928);
            for (let idx_927 = 0;
            idx_927 < len_928;
            idx_927++)  {
                groups_926[idx_927] = FastMeta.META_UUID.deserialize(sCtx_920, in__923);
                
            }
            return new ClientApiSafeAddAccessGroupsToClientArguments(uid_925, groups_926);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeAddAccessGroupsToClientArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.groups);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeAddAccessGroupsToClientArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeAddAccessGroupsToClientArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.groups, v2.groups)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeAddAccessGroupsToClientArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeAddAccessGroupsToClientArguments(');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('groups:').add(obj.groups);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeAddAccessGroupsToClientArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeAddAccessGroupsToClientArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeAddAccessGroupsToClientArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeRemoveAccessGroupsFromClientArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeRemoveAccessGroupsFromClientArguments>  {
    serialize(sCtx_929: MetaContext, obj_930: ClientApiSafeRemoveAccessGroupsFromClientArguments, _out_931: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_929, obj_930.uid, _out_931);
        SerializerPackNumber.INSTANCE.put(_out_931, obj_930.groups.length);
        for (const el_933 of obj_930.groups)  {
            FastMeta.META_UUID.serialize(sCtx_929, el_933, _out_931);
            
        }
        
    }
    deserialize(sCtx_929: MetaContext, in__932: DataIn): ClientApiSafeRemoveAccessGroupsFromClientArguments  {
        try  {
            let uid_934: UUID;
            let groups_935: UUID[];
            uid_934 = FastMeta.META_UUID.deserialize(sCtx_929, in__932);
            const len_937 = Number(DeserializerPackNumber.INSTANCE.put(in__932));
            groups_935 = new Array<UUID>(len_937);
            for (let idx_936 = 0;
            idx_936 < len_937;
            idx_936++)  {
                groups_935[idx_936] = FastMeta.META_UUID.deserialize(sCtx_929, in__932);
                
            }
            return new ClientApiSafeRemoveAccessGroupsFromClientArguments(uid_934, groups_935);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeRemoveAccessGroupsFromClientArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.groups);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeRemoveAccessGroupsFromClientArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeRemoveAccessGroupsFromClientArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.groups, v2.groups)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeRemoveAccessGroupsFromClientArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeRemoveAccessGroupsFromClientArguments(');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('groups:').add(obj.groups);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeRemoveAccessGroupsFromClientArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeRemoveAccessGroupsFromClientArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeRemoveAccessGroupsFromClientArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeSendAllAccessedClientsArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeSendAllAccessedClientsArguments>  {
    serialize(sCtx_938: MetaContext, obj_939: ClientApiSafeSendAllAccessedClientsArguments, _out_940: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_938, obj_939.uid, _out_940);
        SerializerPackNumber.INSTANCE.put(_out_940, obj_939.accessedClients.length);
        for (const el_942 of obj_939.accessedClients)  {
            FastMeta.META_UUID.serialize(sCtx_938, el_942, _out_940);
            
        }
        
    }
    deserialize(sCtx_938: MetaContext, in__941: DataIn): ClientApiSafeSendAllAccessedClientsArguments  {
        try  {
            let uid_943: UUID;
            let accessedClients_944: UUID[];
            uid_943 = FastMeta.META_UUID.deserialize(sCtx_938, in__941);
            const len_946 = Number(DeserializerPackNumber.INSTANCE.put(in__941));
            accessedClients_944 = new Array<UUID>(len_946);
            for (let idx_945 = 0;
            idx_945 < len_946;
            idx_945++)  {
                accessedClients_944[idx_945] = FastMeta.META_UUID.deserialize(sCtx_938, in__941);
                
            }
            return new ClientApiSafeSendAllAccessedClientsArguments(uid_943, accessedClients_944);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeSendAllAccessedClientsArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.accessedClients);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeSendAllAccessedClientsArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeSendAllAccessedClientsArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.accessedClients, v2.accessedClients)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeSendAllAccessedClientsArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeSendAllAccessedClientsArguments(');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('accessedClients:').add(obj.accessedClients);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeSendAllAccessedClientsArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeSendAllAccessedClientsArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeSendAllAccessedClientsArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeSendAccessCheckResultsArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeSendAccessCheckResultsArguments>  {
    serialize(sCtx_947: MetaContext, obj_948: ClientApiSafeSendAccessCheckResultsArguments, _out_949: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_949, obj_948.results.length);
        for (const el_951 of obj_948.results)  {
            AccessCheckResult.META.serialize(sCtx_947, el_951, _out_949);
            
        }
        
    }
    deserialize(sCtx_947: MetaContext, in__950: DataIn): ClientApiSafeSendAccessCheckResultsArguments  {
        try  {
            let results_952: AccessCheckResult[];
            const len_954 = Number(DeserializerPackNumber.INSTANCE.put(in__950));
            results_952 = new Array<AccessCheckResult>(len_954);
            for (let idx_953 = 0;
            idx_953 < len_954;
            idx_953++)  {
                results_952[idx_953] = AccessCheckResult.META.deserialize(sCtx_947, in__950);
                
            }
            return new ClientApiSafeSendAccessCheckResultsArguments(results_952);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeSendAccessCheckResultsArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(AccessCheckResult.META).metaHashCode(obj.results);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeSendAccessCheckResultsArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeSendAccessCheckResultsArguments)) return false;
        if (!FastMeta.getMetaArray(AccessCheckResult.META).metaEquals(v1.results, v2.results)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeSendAccessCheckResultsArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeSendAccessCheckResultsArguments(');
        res.add('results:').add(obj.results);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeSendAccessCheckResultsArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeSendAccessCheckResultsArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeSendAccessCheckResultsArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeSendMessageArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeSendMessageArguments>  {
    serialize(sCtx_955: MetaContext, obj_956: ClientApiSafeSendMessageArguments, _out_957: DataOut): void  {
        Message.META.serialize(sCtx_955, obj_956.msg, _out_957);
        
    }
    deserialize(sCtx_955: MetaContext, in__958: DataIn): ClientApiSafeSendMessageArguments  {
        try  {
            let msg_959: Message;
            msg_959 = Message.META.deserialize(sCtx_955, in__958);
            return new ClientApiSafeSendMessageArguments(msg_959);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeSendMessageArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + Message.META.metaHashCode(obj.msg);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeSendMessageArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeSendMessageArguments)) return false;
        if (!Message.META.metaEquals(v1.msg, v2.msg)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeSendMessageArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeSendMessageArguments(');
        res.add('msg:').add(obj.msg);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeSendMessageArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeSendMessageArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeSendMessageArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeSendCloudConfigsArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeSendCloudConfigsArguments>  {
    serialize(sCtx_960: MetaContext, obj_961: ClientApiSafeSendCloudConfigsArguments, _out_962: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_962, obj_961.configs.length);
        for (const el_964 of obj_961.configs)  {
            CloudConfig.META.serialize(sCtx_960, el_964, _out_962);
            
        }
        
    }
    deserialize(sCtx_960: MetaContext, in__963: DataIn): ClientApiSafeSendCloudConfigsArguments  {
        try  {
            let configs_965: CloudConfig[];
            const len_967 = Number(DeserializerPackNumber.INSTANCE.put(in__963));
            configs_965 = new Array<CloudConfig>(len_967);
            for (let idx_966 = 0;
            idx_966 < len_967;
            idx_966++)  {
                configs_965[idx_966] = CloudConfig.META.deserialize(sCtx_960, in__963);
                
            }
            return new ClientApiSafeSendCloudConfigsArguments(configs_965);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeSendCloudConfigsArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(CloudConfig.META).metaHashCode(obj.configs);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeSendCloudConfigsArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeSendCloudConfigsArguments)) return false;
        if (!FastMeta.getMetaArray(CloudConfig.META).metaEquals(v1.configs, v2.configs)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeSendCloudConfigsArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeSendCloudConfigsArguments(');
        res.add('configs:').add(obj.configs);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeSendCloudConfigsArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeSendCloudConfigsArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeSendCloudConfigsArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeClientInteractionArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeClientInteractionArguments>  {
    serialize(sCtx_968: MetaContext, obj_969: ClientApiSafeClientInteractionArguments, _out_970: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_968, obj_969.uid, _out_970);
        ClientInteractionClientStream.META.serialize(sCtx_968, obj_969.stream, _out_970);
        
    }
    deserialize(sCtx_968: MetaContext, in__971: DataIn): ClientApiSafeClientInteractionArguments  {
        try  {
            let uid_972: UUID;
            let stream_973: ClientInteractionClientStream;
            uid_972 = FastMeta.META_UUID.deserialize(sCtx_968, in__971);
            stream_973 = ClientInteractionClientStream.META.deserialize(sCtx_968, in__971);
            return new ClientApiSafeClientInteractionArguments(uid_972, stream_973);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeClientInteractionArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + ClientInteractionClientStream.META.metaHashCode(obj.stream);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeClientInteractionArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeClientInteractionArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!ClientInteractionClientStream.META.metaEquals(v1.stream, v2.stream)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeClientInteractionArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeClientInteractionArguments(');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('stream:').add(obj.stream);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeClientInteractionArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeClientInteractionArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeClientInteractionArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiSafeMetaImpl implements FastMetaApi<ClientApiSafe, ClientApiSafeRemote>  {
    makeLocal(ctx: MetaContext, dataIn: DataIn): void  {
        this.makeLocal_fromDataIn(ctx, dataIn, ctx.getLocalApi() as ClientApiSafe);
        
    }
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
                    let uid_975: UUID;
                    uid_975 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_976 = new ClientApiSafeChangeParentArguments(uid_975);
                    const argsNames_977: string[] = ["uid"];
                    const argsValues_978: any[] = [uid_975];
                    ctx.invokeLocalMethodBefore("changeParent", argsNames_977, argsValues_978);
                    (typeof (localApi as any).changeParentArguments === "function" ? (localApi as any).changeParentArguments(argsObject_976) : localApi.changeParent(uid_975));
                    ctx.invokeLocalMethodAfter("changeParent", null, argsNames_977, argsValues_978);
                    break;
                    
                }
                case 4:  {
                    let alias_980: UUID;
                    alias_980 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_981 = new ClientApiSafeChangeAliasArguments(alias_980);
                    const argsNames_982: string[] = ["alias"];
                    const argsValues_983: any[] = [alias_980];
                    ctx.invokeLocalMethodBefore("changeAlias", argsNames_982, argsValues_983);
                    (typeof (localApi as any).changeAliasArguments === "function" ? (localApi as any).changeAliasArguments(argsObject_981) : localApi.changeAlias(alias_980));
                    ctx.invokeLocalMethodAfter("changeAlias", null, argsNames_982, argsValues_983);
                    break;
                    
                }
                case 5:  {
                    let uids_985: UUID[];
                    const len_987 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_985 = new Array<UUID>(len_987);
                    for (let idx_986 = 0;
                    idx_986 < len_987;
                    idx_986++)  {
                        uids_985[idx_986] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_988 = new ClientApiSafeNewChildrenArguments(uids_985);
                    const argsNames_989: string[] = ["uids"];
                    const argsValues_990: any[] = [uids_985];
                    ctx.invokeLocalMethodBefore("newChildren", argsNames_989, argsValues_990);
                    (typeof (localApi as any).newChildrenArguments === "function" ? (localApi as any).newChildrenArguments(argsObject_988) : localApi.newChildren(uids_985));
                    ctx.invokeLocalMethodAfter("newChildren", null, argsNames_989, argsValues_990);
                    break;
                    
                }
                case 6:  {
                    let msg_992: Message[];
                    const len_994 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_992 = new Array<Message>(len_994);
                    for (let idx_993 = 0;
                    idx_993 < len_994;
                    idx_993++)  {
                        msg_992[idx_993] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_995 = new ClientApiSafeSendMessagesArguments(msg_992);
                    const argsNames_996: string[] = ["msg"];
                    const argsValues_997: any[] = [msg_992];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_996, argsValues_997);
                    (typeof (localApi as any).sendMessagesArguments === "function" ? (localApi as any).sendMessagesArguments(argsObject_995) : localApi.sendMessages(msg_992));
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_996, argsValues_997);
                    break;
                    
                }
                case 7:  {
                    let serverDescriptor_999: ServerDescriptor;
                    serverDescriptor_999 = ServerDescriptor.META.deserialize(ctx, dataIn);
                    const argsObject_1000 = new ClientApiSafeSendServerDescriptorArguments(serverDescriptor_999);
                    const argsNames_1001: string[] = ["serverDescriptor"];
                    const argsValues_1002: any[] = [serverDescriptor_999];
                    ctx.invokeLocalMethodBefore("sendServerDescriptor", argsNames_1001, argsValues_1002);
                    (typeof (localApi as any).sendServerDescriptorArguments === "function" ? (localApi as any).sendServerDescriptorArguments(argsObject_1000) : localApi.sendServerDescriptor(serverDescriptor_999));
                    ctx.invokeLocalMethodAfter("sendServerDescriptor", null, argsNames_1001, argsValues_1002);
                    break;
                    
                }
                case 8:  {
                    let serverDescriptors_1004: ServerDescriptor[];
                    const len_1006 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    serverDescriptors_1004 = new Array<ServerDescriptor>(len_1006);
                    for (let idx_1005 = 0;
                    idx_1005 < len_1006;
                    idx_1005++)  {
                        serverDescriptors_1004[idx_1005] = ServerDescriptor.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1007 = new ClientApiSafeSendServerDescriptorsArguments(serverDescriptors_1004);
                    const argsNames_1008: string[] = ["serverDescriptors"];
                    const argsValues_1009: any[] = [serverDescriptors_1004];
                    ctx.invokeLocalMethodBefore("sendServerDescriptors", argsNames_1008, argsValues_1009);
                    (typeof (localApi as any).sendServerDescriptorsArguments === "function" ? (localApi as any).sendServerDescriptorsArguments(argsObject_1007) : localApi.sendServerDescriptors(serverDescriptors_1004));
                    ctx.invokeLocalMethodAfter("sendServerDescriptors", null, argsNames_1008, argsValues_1009);
                    break;
                    
                }
                case 9:  {
                    let uidAndCloud_1011: UUIDAndCloud;
                    uidAndCloud_1011 = UUIDAndCloud.META.deserialize(ctx, dataIn);
                    const argsObject_1012 = new ClientApiSafeSendCloudArguments(uidAndCloud_1011);
                    const argsNames_1013: string[] = ["uidAndCloud"];
                    const argsValues_1014: any[] = [uidAndCloud_1011];
                    ctx.invokeLocalMethodBefore("sendCloud", argsNames_1013, argsValues_1014);
                    (typeof (localApi as any).sendCloudArguments === "function" ? (localApi as any).sendCloudArguments(argsObject_1012) : localApi.sendCloud(uidAndCloud_1011));
                    ctx.invokeLocalMethodAfter("sendCloud", null, argsNames_1013, argsValues_1014);
                    break;
                    
                }
                case 10:  {
                    let clouds_1016: UUIDAndCloud[];
                    const len_1018 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    clouds_1016 = new Array<UUIDAndCloud>(len_1018);
                    for (let idx_1017 = 0;
                    idx_1017 < len_1018;
                    idx_1017++)  {
                        clouds_1016[idx_1017] = UUIDAndCloud.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1019 = new ClientApiSafeSendCloudsArguments(clouds_1016);
                    const argsNames_1020: string[] = ["clouds"];
                    const argsValues_1021: any[] = [clouds_1016];
                    ctx.invokeLocalMethodBefore("sendClouds", argsNames_1020, argsValues_1021);
                    (typeof (localApi as any).sendCloudsArguments === "function" ? (localApi as any).sendCloudsArguments(argsObject_1019) : localApi.sendClouds(clouds_1016));
                    ctx.invokeLocalMethodAfter("sendClouds", null, argsNames_1020, argsValues_1021);
                    break;
                    
                }
                case 11:  {
                    const argsObject_1023 = new ClientApiSafeRequestTelemetryArguments();
                    const argsNames_1024: string[] = [];
                    const argsValues_1025: any[] = [];
                    ctx.invokeLocalMethodBefore("requestTelemetry", argsNames_1024, argsValues_1025);
                    (typeof (localApi as any).requestTelemetryArguments === "function" ? (localApi as any).requestTelemetryArguments(argsObject_1023) : localApi.requestTelemetry());
                    ctx.invokeLocalMethodAfter("requestTelemetry", null, argsNames_1024, argsValues_1025);
                    break;
                    
                }
                case 12:  {
                    let groups_1027: AccessGroup[];
                    const len_1029 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1027 = new Array<AccessGroup>(len_1029);
                    for (let idx_1028 = 0;
                    idx_1028 < len_1029;
                    idx_1028++)  {
                        groups_1027[idx_1028] = AccessGroup.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1030 = new ClientApiSafeSendAccessGroupsArguments(groups_1027);
                    const argsNames_1031: string[] = ["groups"];
                    const argsValues_1032: any[] = [groups_1027];
                    ctx.invokeLocalMethodBefore("sendAccessGroups", argsNames_1031, argsValues_1032);
                    (typeof (localApi as any).sendAccessGroupsArguments === "function" ? (localApi as any).sendAccessGroupsArguments(argsObject_1030) : localApi.sendAccessGroups(groups_1027));
                    ctx.invokeLocalMethodAfter("sendAccessGroups", null, argsNames_1031, argsValues_1032);
                    break;
                    
                }
                case 13:  {
                    let uid_1034: UUID;
                    let groups_1035: UUID[];
                    uid_1034 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1037 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1035 = new Array<UUID>(len_1037);
                    for (let idx_1036 = 0;
                    idx_1036 < len_1037;
                    idx_1036++)  {
                        groups_1035[idx_1036] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1038 = new ClientApiSafeSendAccessGroupForClientArguments(uid_1034, groups_1035);
                    const argsNames_1039: string[] = ["uid", "groups"];
                    const argsValues_1040: any[] = [uid_1034, groups_1035];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_1039, argsValues_1040);
                    (typeof (localApi as any).sendAccessGroupForClientArguments === "function" ? (localApi as any).sendAccessGroupForClientArguments(argsObject_1038) : localApi.sendAccessGroupForClient(uid_1034, groups_1035));
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_1039, argsValues_1040);
                    break;
                    
                }
                case 14:  {
                    let id_1042: UUID;
                    let groups_1043: UUID[];
                    id_1042 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1045 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1043 = new Array<UUID>(len_1045);
                    for (let idx_1044 = 0;
                    idx_1044 < len_1045;
                    idx_1044++)  {
                        groups_1043[idx_1044] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1046 = new ClientApiSafeAddItemsToAccessGroupArguments(id_1042, groups_1043);
                    const argsNames_1047: string[] = ["id", "groups"];
                    const argsValues_1048: any[] = [id_1042, groups_1043];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_1047, argsValues_1048);
                    (typeof (localApi as any).addItemsToAccessGroupArguments === "function" ? (localApi as any).addItemsToAccessGroupArguments(argsObject_1046) : localApi.addItemsToAccessGroup(id_1042, groups_1043));
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_1047, argsValues_1048);
                    break;
                    
                }
                case 15:  {
                    let id_1050: UUID;
                    let groups_1051: UUID[];
                    id_1050 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1053 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1051 = new Array<UUID>(len_1053);
                    for (let idx_1052 = 0;
                    idx_1052 < len_1053;
                    idx_1052++)  {
                        groups_1051[idx_1052] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1054 = new ClientApiSafeRemoveItemsFromAccessGroupArguments(id_1050, groups_1051);
                    const argsNames_1055: string[] = ["id", "groups"];
                    const argsValues_1056: any[] = [id_1050, groups_1051];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_1055, argsValues_1056);
                    (typeof (localApi as any).removeItemsFromAccessGroupArguments === "function" ? (localApi as any).removeItemsFromAccessGroupArguments(argsObject_1054) : localApi.removeItemsFromAccessGroup(id_1050, groups_1051));
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_1055, argsValues_1056);
                    break;
                    
                }
                case 16:  {
                    let uid_1058: UUID;
                    let groups_1059: UUID[];
                    uid_1058 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1061 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1059 = new Array<UUID>(len_1061);
                    for (let idx_1060 = 0;
                    idx_1060 < len_1061;
                    idx_1060++)  {
                        groups_1059[idx_1060] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1062 = new ClientApiSafeAddAccessGroupsToClientArguments(uid_1058, groups_1059);
                    const argsNames_1063: string[] = ["uid", "groups"];
                    const argsValues_1064: any[] = [uid_1058, groups_1059];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_1063, argsValues_1064);
                    (typeof (localApi as any).addAccessGroupsToClientArguments === "function" ? (localApi as any).addAccessGroupsToClientArguments(argsObject_1062) : localApi.addAccessGroupsToClient(uid_1058, groups_1059));
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_1063, argsValues_1064);
                    break;
                    
                }
                case 17:  {
                    let uid_1066: UUID;
                    let groups_1067: UUID[];
                    uid_1066 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1069 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1067 = new Array<UUID>(len_1069);
                    for (let idx_1068 = 0;
                    idx_1068 < len_1069;
                    idx_1068++)  {
                        groups_1067[idx_1068] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1070 = new ClientApiSafeRemoveAccessGroupsFromClientArguments(uid_1066, groups_1067);
                    const argsNames_1071: string[] = ["uid", "groups"];
                    const argsValues_1072: any[] = [uid_1066, groups_1067];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_1071, argsValues_1072);
                    (typeof (localApi as any).removeAccessGroupsFromClientArguments === "function" ? (localApi as any).removeAccessGroupsFromClientArguments(argsObject_1070) : localApi.removeAccessGroupsFromClient(uid_1066, groups_1067));
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_1071, argsValues_1072);
                    break;
                    
                }
                case 18:  {
                    let uid_1074: UUID;
                    let accessedClients_1075: UUID[];
                    uid_1074 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1077 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    accessedClients_1075 = new Array<UUID>(len_1077);
                    for (let idx_1076 = 0;
                    idx_1076 < len_1077;
                    idx_1076++)  {
                        accessedClients_1075[idx_1076] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1078 = new ClientApiSafeSendAllAccessedClientsArguments(uid_1074, accessedClients_1075);
                    const argsNames_1079: string[] = ["uid", "accessedClients"];
                    const argsValues_1080: any[] = [uid_1074, accessedClients_1075];
                    ctx.invokeLocalMethodBefore("sendAllAccessedClients", argsNames_1079, argsValues_1080);
                    (typeof (localApi as any).sendAllAccessedClientsArguments === "function" ? (localApi as any).sendAllAccessedClientsArguments(argsObject_1078) : localApi.sendAllAccessedClients(uid_1074, accessedClients_1075));
                    ctx.invokeLocalMethodAfter("sendAllAccessedClients", null, argsNames_1079, argsValues_1080);
                    break;
                    
                }
                case 19:  {
                    let results_1082: AccessCheckResult[];
                    const len_1084 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    results_1082 = new Array<AccessCheckResult>(len_1084);
                    for (let idx_1083 = 0;
                    idx_1083 < len_1084;
                    idx_1083++)  {
                        results_1082[idx_1083] = AccessCheckResult.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1085 = new ClientApiSafeSendAccessCheckResultsArguments(results_1082);
                    const argsNames_1086: string[] = ["results"];
                    const argsValues_1087: any[] = [results_1082];
                    ctx.invokeLocalMethodBefore("sendAccessCheckResults", argsNames_1086, argsValues_1087);
                    (typeof (localApi as any).sendAccessCheckResultsArguments === "function" ? (localApi as any).sendAccessCheckResultsArguments(argsObject_1085) : localApi.sendAccessCheckResults(results_1082));
                    ctx.invokeLocalMethodAfter("sendAccessCheckResults", null, argsNames_1086, argsValues_1087);
                    break;
                    
                }
                case 20:  {
                    let msg_1089: Message;
                    msg_1089 = Message.META.deserialize(ctx, dataIn);
                    const argsObject_1090 = new ClientApiSafeSendMessageArguments(msg_1089);
                    const argsNames_1091: string[] = ["msg"];
                    const argsValues_1092: any[] = [msg_1089];
                    ctx.invokeLocalMethodBefore("sendMessage", argsNames_1091, argsValues_1092);
                    (typeof (localApi as any).sendMessageArguments === "function" ? (localApi as any).sendMessageArguments(argsObject_1090) : localApi.sendMessage(msg_1089));
                    ctx.invokeLocalMethodAfter("sendMessage", null, argsNames_1091, argsValues_1092);
                    break;
                    
                }
                case 21:  {
                    let configs_1094: CloudConfig[];
                    const len_1096 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    configs_1094 = new Array<CloudConfig>(len_1096);
                    for (let idx_1095 = 0;
                    idx_1095 < len_1096;
                    idx_1095++)  {
                        configs_1094[idx_1095] = CloudConfig.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1097 = new ClientApiSafeSendCloudConfigsArguments(configs_1094);
                    const argsNames_1098: string[] = ["configs"];
                    const argsValues_1099: any[] = [configs_1094];
                    ctx.invokeLocalMethodBefore("sendCloudConfigs", argsNames_1098, argsValues_1099);
                    (typeof (localApi as any).sendCloudConfigsArguments === "function" ? (localApi as any).sendCloudConfigsArguments(argsObject_1097) : localApi.sendCloudConfigs(configs_1094));
                    ctx.invokeLocalMethodAfter("sendCloudConfigs", null, argsNames_1098, argsValues_1099);
                    break;
                    
                }
                case 22:  {
                    let uid_1101: UUID;
                    let stream_1102: ClientInteractionClientStream;
                    uid_1101 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    stream_1102 = ClientInteractionClientStream.META.deserialize(ctx, dataIn);
                    const argsObject_1103 = new ClientApiSafeClientInteractionArguments(uid_1101, stream_1102);
                    const argsNames_1104: string[] = ["uid", "stream"];
                    const argsValues_1105: any[] = [uid_1101, stream_1102];
                    ctx.invokeLocalMethodBefore("clientInteraction", argsNames_1104, argsValues_1105);
                    (typeof (localApi as any).clientInteractionArguments === "function" ? (localApi as any).clientInteractionArguments(argsObject_1103) : localApi.clientInteraction(uid_1101, stream_1102));
                    ctx.invokeLocalMethodAfter("clientInteraction", null, argsNames_1104, argsValues_1105);
                    break;
                    
                }
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ClientApiSafe): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1106: MetaContext): ClientApiSafeRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_1106.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_1106.flush();
                
            }
            , getFastMetaContext: () => sCtx_1106, changeParent: (uid: UUID): void =>  {
                const dataOut_1108 = new DataInOut();
                dataOut_1108.writeByte(3);
                const argsNames_1110: string[] = ["uid"];
                const argsValues_1111: any[] = [uid];
                sCtx_1106.invokeRemoteMethodAfter("changeParent", null, argsNames_1110, argsValues_1111);
                FastMeta.META_UUID.serialize(sCtx_1106, uid, dataOut_1108);
                sCtx_1106.sendToRemote(dataOut_1108.toArray());
                
            }
            , changeAlias: (alias: UUID): void =>  {
                const dataOut_1113 = new DataInOut();
                dataOut_1113.writeByte(4);
                const argsNames_1115: string[] = ["alias"];
                const argsValues_1116: any[] = [alias];
                sCtx_1106.invokeRemoteMethodAfter("changeAlias", null, argsNames_1115, argsValues_1116);
                FastMeta.META_UUID.serialize(sCtx_1106, alias, dataOut_1113);
                sCtx_1106.sendToRemote(dataOut_1113.toArray());
                
            }
            , newChildren: (uids: UUID[]): void =>  {
                const dataOut_1118 = new DataInOut();
                dataOut_1118.writeByte(5);
                const argsNames_1120: string[] = ["uids"];
                const argsValues_1121: any[] = [uids];
                sCtx_1106.invokeRemoteMethodAfter("newChildren", null, argsNames_1120, argsValues_1121);
                SerializerPackNumber.INSTANCE.put(dataOut_1118, uids.length);
                for (const el_1122 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1106, el_1122, dataOut_1118);
                    
                }
                sCtx_1106.sendToRemote(dataOut_1118.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_1124 = new DataInOut();
                dataOut_1124.writeByte(6);
                const argsNames_1126: string[] = ["msg"];
                const argsValues_1127: any[] = [msg];
                sCtx_1106.invokeRemoteMethodAfter("sendMessages", null, argsNames_1126, argsValues_1127);
                SerializerPackNumber.INSTANCE.put(dataOut_1124, msg.length);
                for (const el_1128 of msg)  {
                    Message.META.serialize(sCtx_1106, el_1128, dataOut_1124);
                    
                }
                sCtx_1106.sendToRemote(dataOut_1124.toArray());
                
            }
            , sendServerDescriptor: (serverDescriptor: ServerDescriptor): void =>  {
                const dataOut_1130 = new DataInOut();
                dataOut_1130.writeByte(7);
                const argsNames_1132: string[] = ["serverDescriptor"];
                const argsValues_1133: any[] = [serverDescriptor];
                sCtx_1106.invokeRemoteMethodAfter("sendServerDescriptor", null, argsNames_1132, argsValues_1133);
                ServerDescriptor.META.serialize(sCtx_1106, serverDescriptor, dataOut_1130);
                sCtx_1106.sendToRemote(dataOut_1130.toArray());
                
            }
            , sendServerDescriptors: (serverDescriptors: ServerDescriptor[]): void =>  {
                const dataOut_1135 = new DataInOut();
                dataOut_1135.writeByte(8);
                const argsNames_1137: string[] = ["serverDescriptors"];
                const argsValues_1138: any[] = [serverDescriptors];
                sCtx_1106.invokeRemoteMethodAfter("sendServerDescriptors", null, argsNames_1137, argsValues_1138);
                SerializerPackNumber.INSTANCE.put(dataOut_1135, serverDescriptors.length);
                for (const el_1139 of serverDescriptors)  {
                    ServerDescriptor.META.serialize(sCtx_1106, el_1139, dataOut_1135);
                    
                }
                sCtx_1106.sendToRemote(dataOut_1135.toArray());
                
            }
            , sendCloud: (uidAndCloud: UUIDAndCloud): void =>  {
                const dataOut_1141 = new DataInOut();
                dataOut_1141.writeByte(9);
                const argsNames_1143: string[] = ["uidAndCloud"];
                const argsValues_1144: any[] = [uidAndCloud];
                sCtx_1106.invokeRemoteMethodAfter("sendCloud", null, argsNames_1143, argsValues_1144);
                UUIDAndCloud.META.serialize(sCtx_1106, uidAndCloud, dataOut_1141);
                sCtx_1106.sendToRemote(dataOut_1141.toArray());
                
            }
            , sendClouds: (clouds: UUIDAndCloud[]): void =>  {
                const dataOut_1146 = new DataInOut();
                dataOut_1146.writeByte(10);
                const argsNames_1148: string[] = ["clouds"];
                const argsValues_1149: any[] = [clouds];
                sCtx_1106.invokeRemoteMethodAfter("sendClouds", null, argsNames_1148, argsValues_1149);
                SerializerPackNumber.INSTANCE.put(dataOut_1146, clouds.length);
                for (const el_1150 of clouds)  {
                    UUIDAndCloud.META.serialize(sCtx_1106, el_1150, dataOut_1146);
                    
                }
                sCtx_1106.sendToRemote(dataOut_1146.toArray());
                
            }
            , requestTelemetry: (): void =>  {
                const dataOut_1152 = new DataInOut();
                dataOut_1152.writeByte(11);
                const argsNames_1154: string[] = [];
                const argsValues_1155: any[] = [];
                sCtx_1106.invokeRemoteMethodAfter("requestTelemetry", null, argsNames_1154, argsValues_1155);
                sCtx_1106.sendToRemote(dataOut_1152.toArray());
                
            }
            , sendAccessGroups: (groups: AccessGroup[]): void =>  {
                const dataOut_1157 = new DataInOut();
                dataOut_1157.writeByte(12);
                const argsNames_1159: string[] = ["groups"];
                const argsValues_1160: any[] = [groups];
                sCtx_1106.invokeRemoteMethodAfter("sendAccessGroups", null, argsNames_1159, argsValues_1160);
                SerializerPackNumber.INSTANCE.put(dataOut_1157, groups.length);
                for (const el_1161 of groups)  {
                    AccessGroup.META.serialize(sCtx_1106, el_1161, dataOut_1157);
                    
                }
                sCtx_1106.sendToRemote(dataOut_1157.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_1163 = new DataInOut();
                dataOut_1163.writeByte(13);
                const argsNames_1165: string[] = ["uid", "groups"];
                const argsValues_1166: any[] = [uid, groups];
                sCtx_1106.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_1165, argsValues_1166);
                FastMeta.META_UUID.serialize(sCtx_1106, uid, dataOut_1163);
                SerializerPackNumber.INSTANCE.put(dataOut_1163, groups.length);
                for (const el_1167 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1106, el_1167, dataOut_1163);
                    
                }
                sCtx_1106.sendToRemote(dataOut_1163.toArray());
                
            }
            , addItemsToAccessGroup: (id: UUID, groups: UUID[]): void =>  {
                const dataOut_1169 = new DataInOut();
                dataOut_1169.writeByte(14);
                const argsNames_1171: string[] = ["id", "groups"];
                const argsValues_1172: any[] = [id, groups];
                sCtx_1106.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_1171, argsValues_1172);
                FastMeta.META_UUID.serialize(sCtx_1106, id, dataOut_1169);
                SerializerPackNumber.INSTANCE.put(dataOut_1169, groups.length);
                for (const el_1173 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1106, el_1173, dataOut_1169);
                    
                }
                sCtx_1106.sendToRemote(dataOut_1169.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: UUID, groups: UUID[]): void =>  {
                const dataOut_1175 = new DataInOut();
                dataOut_1175.writeByte(15);
                const argsNames_1177: string[] = ["id", "groups"];
                const argsValues_1178: any[] = [id, groups];
                sCtx_1106.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_1177, argsValues_1178);
                FastMeta.META_UUID.serialize(sCtx_1106, id, dataOut_1175);
                SerializerPackNumber.INSTANCE.put(dataOut_1175, groups.length);
                for (const el_1179 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1106, el_1179, dataOut_1175);
                    
                }
                sCtx_1106.sendToRemote(dataOut_1175.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_1181 = new DataInOut();
                dataOut_1181.writeByte(16);
                const argsNames_1183: string[] = ["uid", "groups"];
                const argsValues_1184: any[] = [uid, groups];
                sCtx_1106.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_1183, argsValues_1184);
                FastMeta.META_UUID.serialize(sCtx_1106, uid, dataOut_1181);
                SerializerPackNumber.INSTANCE.put(dataOut_1181, groups.length);
                for (const el_1185 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1106, el_1185, dataOut_1181);
                    
                }
                sCtx_1106.sendToRemote(dataOut_1181.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_1187 = new DataInOut();
                dataOut_1187.writeByte(17);
                const argsNames_1189: string[] = ["uid", "groups"];
                const argsValues_1190: any[] = [uid, groups];
                sCtx_1106.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_1189, argsValues_1190);
                FastMeta.META_UUID.serialize(sCtx_1106, uid, dataOut_1187);
                SerializerPackNumber.INSTANCE.put(dataOut_1187, groups.length);
                for (const el_1191 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1106, el_1191, dataOut_1187);
                    
                }
                sCtx_1106.sendToRemote(dataOut_1187.toArray());
                
            }
            , sendAllAccessedClients: (uid: UUID, accessedClients: UUID[]): void =>  {
                const dataOut_1193 = new DataInOut();
                dataOut_1193.writeByte(18);
                const argsNames_1195: string[] = ["uid", "accessedClients"];
                const argsValues_1196: any[] = [uid, accessedClients];
                sCtx_1106.invokeRemoteMethodAfter("sendAllAccessedClients", null, argsNames_1195, argsValues_1196);
                FastMeta.META_UUID.serialize(sCtx_1106, uid, dataOut_1193);
                SerializerPackNumber.INSTANCE.put(dataOut_1193, accessedClients.length);
                for (const el_1197 of accessedClients)  {
                    FastMeta.META_UUID.serialize(sCtx_1106, el_1197, dataOut_1193);
                    
                }
                sCtx_1106.sendToRemote(dataOut_1193.toArray());
                
            }
            , sendAccessCheckResults: (results: AccessCheckResult[]): void =>  {
                const dataOut_1199 = new DataInOut();
                dataOut_1199.writeByte(19);
                const argsNames_1201: string[] = ["results"];
                const argsValues_1202: any[] = [results];
                sCtx_1106.invokeRemoteMethodAfter("sendAccessCheckResults", null, argsNames_1201, argsValues_1202);
                SerializerPackNumber.INSTANCE.put(dataOut_1199, results.length);
                for (const el_1203 of results)  {
                    AccessCheckResult.META.serialize(sCtx_1106, el_1203, dataOut_1199);
                    
                }
                sCtx_1106.sendToRemote(dataOut_1199.toArray());
                
            }
            , sendMessage: (msg: Message): void =>  {
                const dataOut_1205 = new DataInOut();
                dataOut_1205.writeByte(20);
                const argsNames_1207: string[] = ["msg"];
                const argsValues_1208: any[] = [msg];
                sCtx_1106.invokeRemoteMethodAfter("sendMessage", null, argsNames_1207, argsValues_1208);
                Message.META.serialize(sCtx_1106, msg, dataOut_1205);
                sCtx_1106.sendToRemote(dataOut_1205.toArray());
                
            }
            , sendCloudConfigs: (configs: CloudConfig[]): void =>  {
                const dataOut_1210 = new DataInOut();
                dataOut_1210.writeByte(21);
                const argsNames_1212: string[] = ["configs"];
                const argsValues_1213: any[] = [configs];
                sCtx_1106.invokeRemoteMethodAfter("sendCloudConfigs", null, argsNames_1212, argsValues_1213);
                SerializerPackNumber.INSTANCE.put(dataOut_1210, configs.length);
                for (const el_1214 of configs)  {
                    CloudConfig.META.serialize(sCtx_1106, el_1214, dataOut_1210);
                    
                }
                sCtx_1106.sendToRemote(dataOut_1210.toArray());
                
            }
            , clientInteraction: (uid: UUID, stream: ClientInteractionClientStream): void =>  {
                const dataOut_1216 = new DataInOut();
                dataOut_1216.writeByte(22);
                const argsNames_1218: string[] = ["uid", "stream"];
                const argsValues_1219: any[] = [uid, stream];
                sCtx_1106.invokeRemoteMethodAfter("clientInteraction", null, argsNames_1218, argsValues_1219);
                FastMeta.META_UUID.serialize(sCtx_1106, uid, dataOut_1216);
                ClientInteractionClientStream.META.serialize(sCtx_1106, stream, dataOut_1216);
                sCtx_1106.sendToRemote(dataOut_1216.toArray());
                
            }
            , openClientInteraction(uid: UUID, factory: (api: ServerApiByUidClientRemote) => any, converter: BytesConverter, ...keys: any[]): ServerApiByUidClientRemote  {
                return sCtx_1106.findContext(ctx =>  {
                    ctx.onFlushData(data => this.clientInteraction(uid, ClientInteractionClientStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((ServerApiByUidClient as any).META));
                    
                }
                , ...keys).makeRemote((ServerApiByUidClient as any).META) as ServerApiByUidClientRemote;
                
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
            case 22: // clientInteraction
            return true;
            default: return false;
            
        }
        
    }
    
}
export class AuthorizedApiBackIdArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiBackIdArguments>  {
    serialize(sCtx_1220: MetaContext, obj_1221: AuthorizedApiBackIdArguments, _out_1222: DataOut): void  {
        _out_1222.writeByte(obj_1221.id);
        
    }
    deserialize(sCtx_1220: MetaContext, in__1223: DataIn): AuthorizedApiBackIdArguments  {
        try  {
            let id_1224: number;
            id_1224 = in__1223.readByte();
            return new AuthorizedApiBackIdArguments(id_1224);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiBackIdArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_BYTE.metaHashCode(obj.id);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiBackIdArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiBackIdArguments)) return false;
        if (!FastMeta.META_BYTE.metaEquals(v1.id, v2.id)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiBackIdArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiBackIdArguments(');
        res.add('id:').add(obj.id);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiBackIdArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiBackIdArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiBackIdArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiPingArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiPingArguments>  {
    serialize(sCtx_1225: MetaContext, obj_1226: AuthorizedApiPingArguments, _out_1227: DataOut): void  {
        _out_1227.writeLong(obj_1226.nextConnectMsDuration);
        _out_1227.writeLong(obj_1226.rxWindowMs);
        
    }
    deserialize(sCtx_1225: MetaContext, in__1228: DataIn): AuthorizedApiPingArguments  {
        try  {
            let nextConnectMsDuration_1229: bigint;
            let rxWindowMs_1230: bigint;
            nextConnectMsDuration_1229 = in__1228.readLong();
            rxWindowMs_1230 = in__1228.readLong();
            return new AuthorizedApiPingArguments(nextConnectMsDuration_1229, rxWindowMs_1230);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiPingArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.nextConnectMsDuration);
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.rxWindowMs);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiPingArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiPingArguments)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.nextConnectMsDuration, v2.nextConnectMsDuration)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.rxWindowMs, v2.rxWindowMs)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiPingArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiPingArguments(');
        res.add('nextConnectMsDuration:').add(obj.nextConnectMsDuration);
        res.add(', ');
        res.add('rxWindowMs:').add(obj.rxWindowMs);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiPingArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiPingArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiPingArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiClientArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiClientArguments>  {
    serialize(sCtx_1231: MetaContext, obj_1232: AuthorizedApiClientArguments, _out_1233: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1231, obj_1232.uid, _out_1233);
        ClientApiStream.META.serialize(sCtx_1231, obj_1232.stream, _out_1233);
        
    }
    deserialize(sCtx_1231: MetaContext, in__1234: DataIn): AuthorizedApiClientArguments  {
        try  {
            let uid_1235: UUID;
            let stream_1236: ClientApiStream;
            uid_1235 = FastMeta.META_UUID.deserialize(sCtx_1231, in__1234);
            stream_1236 = ClientApiStream.META.deserialize(sCtx_1231, in__1234);
            return new AuthorizedApiClientArguments(uid_1235, stream_1236);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiClientArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + ClientApiStream.META.metaHashCode(obj.stream);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiClientArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiClientArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!ClientApiStream.META.metaEquals(v1.stream, v2.stream)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiClientArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiClientArguments(');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('stream:').add(obj.stream);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiClientArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiClientArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiClientArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiSendMessageArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiSendMessageArguments>  {
    serialize(sCtx_1237: MetaContext, obj_1238: AuthorizedApiSendMessageArguments, _out_1239: DataOut): void  {
        Message.META.serialize(sCtx_1237, obj_1238.msg, _out_1239);
        
    }
    deserialize(sCtx_1237: MetaContext, in__1240: DataIn): AuthorizedApiSendMessageArguments  {
        try  {
            let msg_1241: Message;
            msg_1241 = Message.META.deserialize(sCtx_1237, in__1240);
            return new AuthorizedApiSendMessageArguments(msg_1241);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiSendMessageArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + Message.META.metaHashCode(obj.msg);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiSendMessageArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiSendMessageArguments)) return false;
        if (!Message.META.metaEquals(v1.msg, v2.msg)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiSendMessageArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiSendMessageArguments(');
        res.add('msg:').add(obj.msg);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiSendMessageArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiSendMessageArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiSendMessageArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiSendMessagesArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiSendMessagesArguments>  {
    serialize(sCtx_1242: MetaContext, obj_1243: AuthorizedApiSendMessagesArguments, _out_1244: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1244, obj_1243.msg.length);
        for (const el_1246 of obj_1243.msg)  {
            Message.META.serialize(sCtx_1242, el_1246, _out_1244);
            
        }
        
    }
    deserialize(sCtx_1242: MetaContext, in__1245: DataIn): AuthorizedApiSendMessagesArguments  {
        try  {
            let msg_1247: Message[];
            const len_1249 = Number(DeserializerPackNumber.INSTANCE.put(in__1245));
            msg_1247 = new Array<Message>(len_1249);
            for (let idx_1248 = 0;
            idx_1248 < len_1249;
            idx_1248++)  {
                msg_1247[idx_1248] = Message.META.deserialize(sCtx_1242, in__1245);
                
            }
            return new AuthorizedApiSendMessagesArguments(msg_1247);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiSendMessagesArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(Message.META).metaHashCode(obj.msg);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiSendMessagesArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiSendMessagesArguments)) return false;
        if (!FastMeta.getMetaArray(Message.META).metaEquals(v1.msg, v2.msg)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiSendMessagesArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiSendMessagesArguments(');
        res.add('msg:').add(obj.msg);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiSendMessagesArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiSendMessagesArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiSendMessagesArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiSendMulticastArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiSendMulticastArguments>  {
    serialize(sCtx_1250: MetaContext, obj_1251: AuthorizedApiSendMulticastArguments, _out_1252: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1252, obj_1251.uids.length);
        for (const el_1254 of obj_1251.uids)  {
            FastMeta.META_UUID.serialize(sCtx_1250, el_1254, _out_1252);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_1252, obj_1251.data.length);
        _out_1252.write(obj_1251.data);
        
    }
    deserialize(sCtx_1250: MetaContext, in__1253: DataIn): AuthorizedApiSendMulticastArguments  {
        try  {
            let uids_1256: UUID[];
            let data_1257: Uint8Array;
            const len_1259 = Number(DeserializerPackNumber.INSTANCE.put(in__1253));
            uids_1256 = new Array<UUID>(len_1259);
            for (let idx_1258 = 0;
            idx_1258 < len_1259;
            idx_1258++)  {
                uids_1256[idx_1258] = FastMeta.META_UUID.deserialize(sCtx_1250, in__1253);
                
            }
            const len_1261 = Number(DeserializerPackNumber.INSTANCE.put(in__1253));
            const bytes_1262 = in__1253.readBytes(len_1261);
            data_1257 = bytes_1262;
            return new AuthorizedApiSendMulticastArguments(uids_1256, data_1257);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiSendMulticastArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.uids);
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiSendMulticastArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiSendMulticastArguments)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.uids, v2.uids)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiSendMulticastArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiSendMulticastArguments(');
        res.add('uids:').add(obj.uids);
        res.add(', ');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiSendMulticastArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiSendMulticastArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiSendMulticastArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiSendMessageWithResultArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiSendMessageWithResultArguments>  {
    serialize(sCtx_1263: MetaContext, obj_1264: AuthorizedApiSendMessageWithResultArguments, _out_1265: DataOut): void  {
        Message.META.serialize(sCtx_1263, obj_1264.msg, _out_1265);
        
    }
    deserialize(sCtx_1263: MetaContext, in__1266: DataIn): AuthorizedApiSendMessageWithResultArguments  {
        try  {
            let msg_1267: Message;
            msg_1267 = Message.META.deserialize(sCtx_1263, in__1266);
            return new AuthorizedApiSendMessageWithResultArguments(msg_1267);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiSendMessageWithResultArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + Message.META.metaHashCode(obj.msg);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiSendMessageWithResultArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiSendMessageWithResultArguments)) return false;
        if (!Message.META.metaEquals(v1.msg, v2.msg)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiSendMessageWithResultArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiSendMessageWithResultArguments(');
        res.add('msg:').add(obj.msg);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiSendMessageWithResultArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiSendMessageWithResultArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiSendMessageWithResultArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiCreateAccessGroupArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiCreateAccessGroupArguments>  {
    serialize(sCtx_1268: MetaContext, obj_1269: AuthorizedApiCreateAccessGroupArguments, _out_1270: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1268, obj_1269.owner, _out_1270);
        SerializerPackNumber.INSTANCE.put(_out_1270, obj_1269.uids.length);
        for (const el_1272 of obj_1269.uids)  {
            FastMeta.META_UUID.serialize(sCtx_1268, el_1272, _out_1270);
            
        }
        
    }
    deserialize(sCtx_1268: MetaContext, in__1271: DataIn): AuthorizedApiCreateAccessGroupArguments  {
        try  {
            let owner_1273: UUID;
            let uids_1274: UUID[];
            owner_1273 = FastMeta.META_UUID.deserialize(sCtx_1268, in__1271);
            const len_1276 = Number(DeserializerPackNumber.INSTANCE.put(in__1271));
            uids_1274 = new Array<UUID>(len_1276);
            for (let idx_1275 = 0;
            idx_1275 < len_1276;
            idx_1275++)  {
                uids_1274[idx_1275] = FastMeta.META_UUID.deserialize(sCtx_1268, in__1271);
                
            }
            return new AuthorizedApiCreateAccessGroupArguments(owner_1273, uids_1274);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiCreateAccessGroupArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.owner);
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.uids);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiCreateAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiCreateAccessGroupArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.owner, v2.owner)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.uids, v2.uids)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiCreateAccessGroupArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiCreateAccessGroupArguments(');
        res.add('owner:').add(obj.owner);
        res.add(', ');
        res.add('uids:').add(obj.uids);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiCreateAccessGroupArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiCreateAccessGroupArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiCreateAccessGroupArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiAddToAccessGroupArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiAddToAccessGroupArguments>  {
    serialize(sCtx_1277: MetaContext, obj_1278: AuthorizedApiAddToAccessGroupArguments, _out_1279: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1277, obj_1278.groupId, _out_1279);
        FastMeta.META_UUID.serialize(sCtx_1277, obj_1278.uid, _out_1279);
        
    }
    deserialize(sCtx_1277: MetaContext, in__1280: DataIn): AuthorizedApiAddToAccessGroupArguments  {
        try  {
            let groupId_1281: UUID;
            let uid_1282: UUID;
            groupId_1281 = FastMeta.META_UUID.deserialize(sCtx_1277, in__1280);
            uid_1282 = FastMeta.META_UUID.deserialize(sCtx_1277, in__1280);
            return new AuthorizedApiAddToAccessGroupArguments(groupId_1281, uid_1282);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiAddToAccessGroupArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.groupId);
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiAddToAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiAddToAccessGroupArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.groupId, v2.groupId)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiAddToAccessGroupArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiAddToAccessGroupArguments(');
        res.add('groupId:').add(obj.groupId);
        res.add(', ');
        res.add('uid:').add(obj.uid);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiAddToAccessGroupArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiAddToAccessGroupArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiAddToAccessGroupArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiRemoveFromAccessGroupArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiRemoveFromAccessGroupArguments>  {
    serialize(sCtx_1283: MetaContext, obj_1284: AuthorizedApiRemoveFromAccessGroupArguments, _out_1285: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1283, obj_1284.groupId, _out_1285);
        FastMeta.META_UUID.serialize(sCtx_1283, obj_1284.uid, _out_1285);
        
    }
    deserialize(sCtx_1283: MetaContext, in__1286: DataIn): AuthorizedApiRemoveFromAccessGroupArguments  {
        try  {
            let groupId_1287: UUID;
            let uid_1288: UUID;
            groupId_1287 = FastMeta.META_UUID.deserialize(sCtx_1283, in__1286);
            uid_1288 = FastMeta.META_UUID.deserialize(sCtx_1283, in__1286);
            return new AuthorizedApiRemoveFromAccessGroupArguments(groupId_1287, uid_1288);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiRemoveFromAccessGroupArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.groupId);
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiRemoveFromAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiRemoveFromAccessGroupArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.groupId, v2.groupId)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiRemoveFromAccessGroupArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiRemoveFromAccessGroupArguments(');
        res.add('groupId:').add(obj.groupId);
        res.add(', ');
        res.add('uid:').add(obj.uid);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiRemoveFromAccessGroupArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiRemoveFromAccessGroupArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiRemoveFromAccessGroupArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiCheckAccessForSendMessageArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiCheckAccessForSendMessageArguments>  {
    serialize(sCtx_1289: MetaContext, obj_1290: AuthorizedApiCheckAccessForSendMessageArguments, _out_1291: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1289, obj_1290.uid, _out_1291);
        
    }
    deserialize(sCtx_1289: MetaContext, in__1292: DataIn): AuthorizedApiCheckAccessForSendMessageArguments  {
        try  {
            let uid_1293: UUID;
            uid_1293 = FastMeta.META_UUID.deserialize(sCtx_1289, in__1292);
            return new AuthorizedApiCheckAccessForSendMessageArguments(uid_1293);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiCheckAccessForSendMessageArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiCheckAccessForSendMessageArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiCheckAccessForSendMessageArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiCheckAccessForSendMessageArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiCheckAccessForSendMessageArguments(');
        res.add('uid:').add(obj.uid);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiCheckAccessForSendMessageArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiCheckAccessForSendMessageArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiCheckAccessForSendMessageArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiResolverServersArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiResolverServersArguments>  {
    serialize(sCtx_1294: MetaContext, obj_1295: AuthorizedApiResolverServersArguments, _out_1296: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1296, obj_1295.sid.length);
        for (const el_1298 of obj_1295.sid)  {
            _out_1296.writeShort(el_1298);
            
        }
        
    }
    deserialize(sCtx_1294: MetaContext, in__1297: DataIn): AuthorizedApiResolverServersArguments  {
        try  {
            let sid_1299: number[];
            const len_1301 = Number(DeserializerPackNumber.INSTANCE.put(in__1297));
            sid_1299 = new Array<number>(len_1301);
            for (let idx_1300 = 0;
            idx_1300 < len_1301;
            idx_1300++)  {
                sid_1299[idx_1300] = in__1297.readShort();
                
            }
            return new AuthorizedApiResolverServersArguments(sid_1299);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiResolverServersArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_SHORT).metaHashCode(obj.sid);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiResolverServersArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiResolverServersArguments)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_SHORT).metaEquals(v1.sid, v2.sid)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiResolverServersArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiResolverServersArguments(');
        res.add('sid:').add(obj.sid);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiResolverServersArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiResolverServersArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiResolverServersArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiResolveCloudsArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiResolveCloudsArguments>  {
    serialize(sCtx_1302: MetaContext, obj_1303: AuthorizedApiResolveCloudsArguments, _out_1304: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1304, obj_1303.uids.length);
        for (const el_1306 of obj_1303.uids)  {
            FastMeta.META_UUID.serialize(sCtx_1302, el_1306, _out_1304);
            
        }
        
    }
    deserialize(sCtx_1302: MetaContext, in__1305: DataIn): AuthorizedApiResolveCloudsArguments  {
        try  {
            let uids_1307: UUID[];
            const len_1309 = Number(DeserializerPackNumber.INSTANCE.put(in__1305));
            uids_1307 = new Array<UUID>(len_1309);
            for (let idx_1308 = 0;
            idx_1308 < len_1309;
            idx_1308++)  {
                uids_1307[idx_1308] = FastMeta.META_UUID.deserialize(sCtx_1302, in__1305);
                
            }
            return new AuthorizedApiResolveCloudsArguments(uids_1307);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiResolveCloudsArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.uids);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiResolveCloudsArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiResolveCloudsArguments)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.uids, v2.uids)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiResolveCloudsArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiResolveCloudsArguments(');
        res.add('uids:').add(obj.uids);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiResolveCloudsArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiResolveCloudsArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiResolveCloudsArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiReportAppliedConfigArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiReportAppliedConfigArguments>  {
    serialize(sCtx_1310: MetaContext, obj_1311: AuthorizedApiReportAppliedConfigArguments, _out_1312: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1312, obj_1311.configs.length);
        for (const el_1314 of obj_1311.configs)  {
            AppliedConfig.META.serialize(sCtx_1310, el_1314, _out_1312);
            
        }
        
    }
    deserialize(sCtx_1310: MetaContext, in__1313: DataIn): AuthorizedApiReportAppliedConfigArguments  {
        try  {
            let configs_1315: AppliedConfig[];
            const len_1317 = Number(DeserializerPackNumber.INSTANCE.put(in__1313));
            configs_1315 = new Array<AppliedConfig>(len_1317);
            for (let idx_1316 = 0;
            idx_1316 < len_1317;
            idx_1316++)  {
                configs_1315[idx_1316] = AppliedConfig.META.deserialize(sCtx_1310, in__1313);
                
            }
            return new AuthorizedApiReportAppliedConfigArguments(configs_1315);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiReportAppliedConfigArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(AppliedConfig.META).metaHashCode(obj.configs);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiReportAppliedConfigArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiReportAppliedConfigArguments)) return false;
        if (!FastMeta.getMetaArray(AppliedConfig.META).metaEquals(v1.configs, v2.configs)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiReportAppliedConfigArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiReportAppliedConfigArguments(');
        res.add('configs:').add(obj.configs);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiReportAppliedConfigArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiReportAppliedConfigArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiReportAppliedConfigArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiGetAccessGroupsArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiGetAccessGroupsArguments>  {
    serialize(sCtx_1318: MetaContext, obj_1319: AuthorizedApiGetAccessGroupsArguments, _out_1320: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1318, obj_1319.uid, _out_1320);
        
    }
    deserialize(sCtx_1318: MetaContext, in__1321: DataIn): AuthorizedApiGetAccessGroupsArguments  {
        try  {
            let uid_1322: UUID;
            uid_1322 = FastMeta.META_UUID.deserialize(sCtx_1318, in__1321);
            return new AuthorizedApiGetAccessGroupsArguments(uid_1322);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiGetAccessGroupsArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiGetAccessGroupsArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiGetAccessGroupsArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiGetAccessGroupsArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiGetAccessGroupsArguments(');
        res.add('uid:').add(obj.uid);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiGetAccessGroupsArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiGetAccessGroupsArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiGetAccessGroupsArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiGetAccessGroupArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiGetAccessGroupArguments>  {
    serialize(sCtx_1323: MetaContext, obj_1324: AuthorizedApiGetAccessGroupArguments, _out_1325: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1323, obj_1324.groupId, _out_1325);
        
    }
    deserialize(sCtx_1323: MetaContext, in__1326: DataIn): AuthorizedApiGetAccessGroupArguments  {
        try  {
            let groupId_1327: UUID;
            groupId_1327 = FastMeta.META_UUID.deserialize(sCtx_1323, in__1326);
            return new AuthorizedApiGetAccessGroupArguments(groupId_1327);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiGetAccessGroupArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.groupId);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiGetAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiGetAccessGroupArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.groupId, v2.groupId)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiGetAccessGroupArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiGetAccessGroupArguments(');
        res.add('groupId:').add(obj.groupId);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiGetAccessGroupArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiGetAccessGroupArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiGetAccessGroupArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiGetAllAccessedClientsArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiGetAllAccessedClientsArguments>  {
    serialize(sCtx_1328: MetaContext, obj_1329: AuthorizedApiGetAllAccessedClientsArguments, _out_1330: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1328, obj_1329.uid, _out_1330);
        
    }
    deserialize(sCtx_1328: MetaContext, in__1331: DataIn): AuthorizedApiGetAllAccessedClientsArguments  {
        try  {
            let uid_1332: UUID;
            uid_1332 = FastMeta.META_UUID.deserialize(sCtx_1328, in__1331);
            return new AuthorizedApiGetAllAccessedClientsArguments(uid_1332);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiGetAllAccessedClientsArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiGetAllAccessedClientsArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiGetAllAccessedClientsArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiGetAllAccessedClientsArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiGetAllAccessedClientsArguments(');
        res.add('uid:').add(obj.uid);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiGetAllAccessedClientsArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiGetAllAccessedClientsArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiGetAllAccessedClientsArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiCheckAccessForSendMessage2ArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiCheckAccessForSendMessage2Arguments>  {
    serialize(sCtx_1333: MetaContext, obj_1334: AuthorizedApiCheckAccessForSendMessage2Arguments, _out_1335: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1333, obj_1334.uid1, _out_1335);
        FastMeta.META_UUID.serialize(sCtx_1333, obj_1334.uid2, _out_1335);
        
    }
    deserialize(sCtx_1333: MetaContext, in__1336: DataIn): AuthorizedApiCheckAccessForSendMessage2Arguments  {
        try  {
            let uid1_1337: UUID;
            let uid2_1338: UUID;
            uid1_1337 = FastMeta.META_UUID.deserialize(sCtx_1333, in__1336);
            uid2_1338 = FastMeta.META_UUID.deserialize(sCtx_1333, in__1336);
            return new AuthorizedApiCheckAccessForSendMessage2Arguments(uid1_1337, uid2_1338);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiCheckAccessForSendMessage2Arguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid1);
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid2);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiCheckAccessForSendMessage2Arguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiCheckAccessForSendMessage2Arguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid1, v2.uid1)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid2, v2.uid2)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiCheckAccessForSendMessage2Arguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiCheckAccessForSendMessage2Arguments(');
        res.add('uid1:').add(obj.uid1);
        res.add(', ');
        res.add('uid2:').add(obj.uid2);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiCheckAccessForSendMessage2Arguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiCheckAccessForSendMessage2Arguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiCheckAccessForSendMessage2Arguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiSendTelemetryArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiSendTelemetryArguments>  {
    serialize(sCtx_1339: MetaContext, obj_1340: AuthorizedApiSendTelemetryArguments, _out_1341: DataOut): void  {
        Telemetry.META.serialize(sCtx_1339, obj_1340.telemetry, _out_1341);
        
    }
    deserialize(sCtx_1339: MetaContext, in__1342: DataIn): AuthorizedApiSendTelemetryArguments  {
        try  {
            let telemetry_1343: Telemetry;
            telemetry_1343 = Telemetry.META.deserialize(sCtx_1339, in__1342);
            return new AuthorizedApiSendTelemetryArguments(telemetry_1343);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiSendTelemetryArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + Telemetry.META.metaHashCode(obj.telemetry);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiSendTelemetryArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiSendTelemetryArguments)) return false;
        if (!Telemetry.META.metaEquals(v1.telemetry, v2.telemetry)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiSendTelemetryArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiSendTelemetryArguments(');
        res.add('telemetry:').add(obj.telemetry);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiSendTelemetryArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiSendTelemetryArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiSendTelemetryArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiRequestAccessGroupsForClientsArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiRequestAccessGroupsForClientsArguments>  {
    serialize(sCtx_1344: MetaContext, obj_1345: AuthorizedApiRequestAccessGroupsForClientsArguments, _out_1346: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1346, obj_1345.uids.length);
        for (const el_1348 of obj_1345.uids)  {
            FastMeta.META_UUID.serialize(sCtx_1344, el_1348, _out_1346);
            
        }
        
    }
    deserialize(sCtx_1344: MetaContext, in__1347: DataIn): AuthorizedApiRequestAccessGroupsForClientsArguments  {
        try  {
            let uids_1349: UUID[];
            const len_1351 = Number(DeserializerPackNumber.INSTANCE.put(in__1347));
            uids_1349 = new Array<UUID>(len_1351);
            for (let idx_1350 = 0;
            idx_1350 < len_1351;
            idx_1350++)  {
                uids_1349[idx_1350] = FastMeta.META_UUID.deserialize(sCtx_1344, in__1347);
                
            }
            return new AuthorizedApiRequestAccessGroupsForClientsArguments(uids_1349);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiRequestAccessGroupsForClientsArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.uids);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiRequestAccessGroupsForClientsArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiRequestAccessGroupsForClientsArguments)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.uids, v2.uids)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiRequestAccessGroupsForClientsArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiRequestAccessGroupsForClientsArguments(');
        res.add('uids:').add(obj.uids);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiRequestAccessGroupsForClientsArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiRequestAccessGroupsForClientsArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiRequestAccessGroupsForClientsArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiRequestAccessGroupsItemsArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiRequestAccessGroupsItemsArguments>  {
    serialize(sCtx_1352: MetaContext, obj_1353: AuthorizedApiRequestAccessGroupsItemsArguments, _out_1354: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1354, obj_1353.ids.length);
        for (const el_1356 of obj_1353.ids)  {
            FastMeta.META_UUID.serialize(sCtx_1352, el_1356, _out_1354);
            
        }
        
    }
    deserialize(sCtx_1352: MetaContext, in__1355: DataIn): AuthorizedApiRequestAccessGroupsItemsArguments  {
        try  {
            let ids_1357: UUID[];
            const len_1359 = Number(DeserializerPackNumber.INSTANCE.put(in__1355));
            ids_1357 = new Array<UUID>(len_1359);
            for (let idx_1358 = 0;
            idx_1358 < len_1359;
            idx_1358++)  {
                ids_1357[idx_1358] = FastMeta.META_UUID.deserialize(sCtx_1352, in__1355);
                
            }
            return new AuthorizedApiRequestAccessGroupsItemsArguments(ids_1357);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiRequestAccessGroupsItemsArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.ids);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiRequestAccessGroupsItemsArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiRequestAccessGroupsItemsArguments)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.ids, v2.ids)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiRequestAccessGroupsItemsArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiRequestAccessGroupsItemsArguments(');
        res.add('ids:').add(obj.ids);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiRequestAccessGroupsItemsArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiRequestAccessGroupsItemsArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiRequestAccessGroupsItemsArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiSendAccessGroupForClientArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiSendAccessGroupForClientArguments>  {
    serialize(sCtx_1360: MetaContext, obj_1361: AuthorizedApiSendAccessGroupForClientArguments, _out_1362: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1360, obj_1361.uid, _out_1362);
        SerializerPackNumber.INSTANCE.put(_out_1362, obj_1361.groups.length);
        for (const el_1364 of obj_1361.groups)  {
            FastMeta.META_UUID.serialize(sCtx_1360, el_1364, _out_1362);
            
        }
        
    }
    deserialize(sCtx_1360: MetaContext, in__1363: DataIn): AuthorizedApiSendAccessGroupForClientArguments  {
        try  {
            let uid_1365: UUID;
            let groups_1366: UUID[];
            uid_1365 = FastMeta.META_UUID.deserialize(sCtx_1360, in__1363);
            const len_1368 = Number(DeserializerPackNumber.INSTANCE.put(in__1363));
            groups_1366 = new Array<UUID>(len_1368);
            for (let idx_1367 = 0;
            idx_1367 < len_1368;
            idx_1367++)  {
                groups_1366[idx_1367] = FastMeta.META_UUID.deserialize(sCtx_1360, in__1363);
                
            }
            return new AuthorizedApiSendAccessGroupForClientArguments(uid_1365, groups_1366);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiSendAccessGroupForClientArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.groups);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiSendAccessGroupForClientArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiSendAccessGroupForClientArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.groups, v2.groups)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiSendAccessGroupForClientArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiSendAccessGroupForClientArguments(');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('groups:').add(obj.groups);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiSendAccessGroupForClientArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiSendAccessGroupForClientArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiSendAccessGroupForClientArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiAddItemsToAccessGroupArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiAddItemsToAccessGroupArguments>  {
    serialize(sCtx_1369: MetaContext, obj_1370: AuthorizedApiAddItemsToAccessGroupArguments, _out_1371: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1369, obj_1370.id, _out_1371);
        SerializerPackNumber.INSTANCE.put(_out_1371, obj_1370.groups.length);
        for (const el_1373 of obj_1370.groups)  {
            FastMeta.META_UUID.serialize(sCtx_1369, el_1373, _out_1371);
            
        }
        
    }
    deserialize(sCtx_1369: MetaContext, in__1372: DataIn): AuthorizedApiAddItemsToAccessGroupArguments  {
        try  {
            let id_1374: UUID;
            let groups_1375: UUID[];
            id_1374 = FastMeta.META_UUID.deserialize(sCtx_1369, in__1372);
            const len_1377 = Number(DeserializerPackNumber.INSTANCE.put(in__1372));
            groups_1375 = new Array<UUID>(len_1377);
            for (let idx_1376 = 0;
            idx_1376 < len_1377;
            idx_1376++)  {
                groups_1375[idx_1376] = FastMeta.META_UUID.deserialize(sCtx_1369, in__1372);
                
            }
            return new AuthorizedApiAddItemsToAccessGroupArguments(id_1374, groups_1375);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiAddItemsToAccessGroupArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.id);
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.groups);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiAddItemsToAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiAddItemsToAccessGroupArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.id, v2.id)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.groups, v2.groups)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiAddItemsToAccessGroupArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiAddItemsToAccessGroupArguments(');
        res.add('id:').add(obj.id);
        res.add(', ');
        res.add('groups:').add(obj.groups);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiAddItemsToAccessGroupArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiAddItemsToAccessGroupArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiAddItemsToAccessGroupArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiRemoveItemsFromAccessGroupArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiRemoveItemsFromAccessGroupArguments>  {
    serialize(sCtx_1378: MetaContext, obj_1379: AuthorizedApiRemoveItemsFromAccessGroupArguments, _out_1380: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1378, obj_1379.id, _out_1380);
        SerializerPackNumber.INSTANCE.put(_out_1380, obj_1379.groups.length);
        for (const el_1382 of obj_1379.groups)  {
            FastMeta.META_UUID.serialize(sCtx_1378, el_1382, _out_1380);
            
        }
        
    }
    deserialize(sCtx_1378: MetaContext, in__1381: DataIn): AuthorizedApiRemoveItemsFromAccessGroupArguments  {
        try  {
            let id_1383: UUID;
            let groups_1384: UUID[];
            id_1383 = FastMeta.META_UUID.deserialize(sCtx_1378, in__1381);
            const len_1386 = Number(DeserializerPackNumber.INSTANCE.put(in__1381));
            groups_1384 = new Array<UUID>(len_1386);
            for (let idx_1385 = 0;
            idx_1385 < len_1386;
            idx_1385++)  {
                groups_1384[idx_1385] = FastMeta.META_UUID.deserialize(sCtx_1378, in__1381);
                
            }
            return new AuthorizedApiRemoveItemsFromAccessGroupArguments(id_1383, groups_1384);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiRemoveItemsFromAccessGroupArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.id);
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.groups);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiRemoveItemsFromAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiRemoveItemsFromAccessGroupArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.id, v2.id)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.groups, v2.groups)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiRemoveItemsFromAccessGroupArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiRemoveItemsFromAccessGroupArguments(');
        res.add('id:').add(obj.id);
        res.add(', ');
        res.add('groups:').add(obj.groups);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiRemoveItemsFromAccessGroupArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiRemoveItemsFromAccessGroupArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiRemoveItemsFromAccessGroupArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiAddAccessGroupsToClientArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiAddAccessGroupsToClientArguments>  {
    serialize(sCtx_1387: MetaContext, obj_1388: AuthorizedApiAddAccessGroupsToClientArguments, _out_1389: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1387, obj_1388.uid, _out_1389);
        SerializerPackNumber.INSTANCE.put(_out_1389, obj_1388.groups.length);
        for (const el_1391 of obj_1388.groups)  {
            FastMeta.META_UUID.serialize(sCtx_1387, el_1391, _out_1389);
            
        }
        
    }
    deserialize(sCtx_1387: MetaContext, in__1390: DataIn): AuthorizedApiAddAccessGroupsToClientArguments  {
        try  {
            let uid_1392: UUID;
            let groups_1393: UUID[];
            uid_1392 = FastMeta.META_UUID.deserialize(sCtx_1387, in__1390);
            const len_1395 = Number(DeserializerPackNumber.INSTANCE.put(in__1390));
            groups_1393 = new Array<UUID>(len_1395);
            for (let idx_1394 = 0;
            idx_1394 < len_1395;
            idx_1394++)  {
                groups_1393[idx_1394] = FastMeta.META_UUID.deserialize(sCtx_1387, in__1390);
                
            }
            return new AuthorizedApiAddAccessGroupsToClientArguments(uid_1392, groups_1393);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiAddAccessGroupsToClientArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.groups);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiAddAccessGroupsToClientArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiAddAccessGroupsToClientArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.groups, v2.groups)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiAddAccessGroupsToClientArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiAddAccessGroupsToClientArguments(');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('groups:').add(obj.groups);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiAddAccessGroupsToClientArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiAddAccessGroupsToClientArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiAddAccessGroupsToClientArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiRemoveAccessGroupsFromClientArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiRemoveAccessGroupsFromClientArguments>  {
    serialize(sCtx_1396: MetaContext, obj_1397: AuthorizedApiRemoveAccessGroupsFromClientArguments, _out_1398: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1396, obj_1397.uid, _out_1398);
        SerializerPackNumber.INSTANCE.put(_out_1398, obj_1397.groups.length);
        for (const el_1400 of obj_1397.groups)  {
            FastMeta.META_UUID.serialize(sCtx_1396, el_1400, _out_1398);
            
        }
        
    }
    deserialize(sCtx_1396: MetaContext, in__1399: DataIn): AuthorizedApiRemoveAccessGroupsFromClientArguments  {
        try  {
            let uid_1401: UUID;
            let groups_1402: UUID[];
            uid_1401 = FastMeta.META_UUID.deserialize(sCtx_1396, in__1399);
            const len_1404 = Number(DeserializerPackNumber.INSTANCE.put(in__1399));
            groups_1402 = new Array<UUID>(len_1404);
            for (let idx_1403 = 0;
            idx_1403 < len_1404;
            idx_1403++)  {
                groups_1402[idx_1403] = FastMeta.META_UUID.deserialize(sCtx_1396, in__1399);
                
            }
            return new AuthorizedApiRemoveAccessGroupsFromClientArguments(uid_1401, groups_1402);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiRemoveAccessGroupsFromClientArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.groups);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiRemoveAccessGroupsFromClientArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiRemoveAccessGroupsFromClientArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.groups, v2.groups)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiRemoveAccessGroupsFromClientArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiRemoveAccessGroupsFromClientArguments(');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('groups:').add(obj.groups);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiRemoveAccessGroupsFromClientArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiRemoveAccessGroupsFromClientArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiRemoveAccessGroupsFromClientArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiRequestAllAccessedClientsArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiRequestAllAccessedClientsArguments>  {
    serialize(sCtx_1405: MetaContext, obj_1406: AuthorizedApiRequestAllAccessedClientsArguments, _out_1407: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1407, obj_1406.uids.length);
        for (const el_1409 of obj_1406.uids)  {
            FastMeta.META_UUID.serialize(sCtx_1405, el_1409, _out_1407);
            
        }
        
    }
    deserialize(sCtx_1405: MetaContext, in__1408: DataIn): AuthorizedApiRequestAllAccessedClientsArguments  {
        try  {
            let uids_1410: UUID[];
            const len_1412 = Number(DeserializerPackNumber.INSTANCE.put(in__1408));
            uids_1410 = new Array<UUID>(len_1412);
            for (let idx_1411 = 0;
            idx_1411 < len_1412;
            idx_1411++)  {
                uids_1410[idx_1411] = FastMeta.META_UUID.deserialize(sCtx_1405, in__1408);
                
            }
            return new AuthorizedApiRequestAllAccessedClientsArguments(uids_1410);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiRequestAllAccessedClientsArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_UUID).metaHashCode(obj.uids);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiRequestAllAccessedClientsArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiRequestAllAccessedClientsArguments)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_UUID).metaEquals(v1.uids, v2.uids)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiRequestAllAccessedClientsArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiRequestAllAccessedClientsArguments(');
        res.add('uids:').add(obj.uids);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiRequestAllAccessedClientsArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiRequestAllAccessedClientsArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiRequestAllAccessedClientsArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiRequestAccessCheckArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiRequestAccessCheckArguments>  {
    serialize(sCtx_1413: MetaContext, obj_1414: AuthorizedApiRequestAccessCheckArguments, _out_1415: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1415, obj_1414.requests.length);
        for (const el_1417 of obj_1414.requests)  {
            AccessCheckPair.META.serialize(sCtx_1413, el_1417, _out_1415);
            
        }
        
    }
    deserialize(sCtx_1413: MetaContext, in__1416: DataIn): AuthorizedApiRequestAccessCheckArguments  {
        try  {
            let requests_1418: AccessCheckPair[];
            const len_1420 = Number(DeserializerPackNumber.INSTANCE.put(in__1416));
            requests_1418 = new Array<AccessCheckPair>(len_1420);
            for (let idx_1419 = 0;
            idx_1419 < len_1420;
            idx_1419++)  {
                requests_1418[idx_1419] = AccessCheckPair.META.deserialize(sCtx_1413, in__1416);
                
            }
            return new AuthorizedApiRequestAccessCheckArguments(requests_1418);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiRequestAccessCheckArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(AccessCheckPair.META).metaHashCode(obj.requests);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiRequestAccessCheckArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiRequestAccessCheckArguments)) return false;
        if (!FastMeta.getMetaArray(AccessCheckPair.META).metaEquals(v1.requests, v2.requests)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiRequestAccessCheckArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiRequestAccessCheckArguments(');
        res.add('requests:').add(obj.requests);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiRequestAccessCheckArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiRequestAccessCheckArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiRequestAccessCheckArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiGetClientActivityArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiGetClientActivityArguments>  {
    serialize(sCtx_1421: MetaContext, obj_1422: AuthorizedApiGetClientActivityArguments, _out_1423: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1421, obj_1422.uid, _out_1423);
        _out_1423.writeLong(obj_1422.fromTime);
        _out_1423.writeLong(obj_1422.toTime);
        _out_1423.writeInt(obj_1422.limit);
        
    }
    deserialize(sCtx_1421: MetaContext, in__1424: DataIn): AuthorizedApiGetClientActivityArguments  {
        try  {
            let uid_1425: UUID;
            let fromTime_1426: bigint;
            let toTime_1427: bigint;
            let limit_1428: number;
            uid_1425 = FastMeta.META_UUID.deserialize(sCtx_1421, in__1424);
            fromTime_1426 = in__1424.readLong();
            toTime_1427 = in__1424.readLong();
            limit_1428 = in__1424.readInt();
            return new AuthorizedApiGetClientActivityArguments(uid_1425, fromTime_1426, toTime_1427, limit_1428);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiGetClientActivityArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.fromTime);
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.toTime);
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.limit);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiGetClientActivityArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiGetClientActivityArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.fromTime, v2.fromTime)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.toTime, v2.toTime)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.limit, v2.limit)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiGetClientActivityArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiGetClientActivityArguments(');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('fromTime:').add(obj.fromTime);
        res.add(', ');
        res.add('toTime:').add(obj.toTime);
        res.add(', ');
        res.add('limit:').add(obj.limit);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiGetClientActivityArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiGetClientActivityArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiGetClientActivityArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiSearchClientLogsArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiSearchClientLogsArguments>  {
    serialize(sCtx_1429: MetaContext, obj_1430: AuthorizedApiSearchClientLogsArguments, _out_1431: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1429, obj_1430.uid, _out_1431);
        const stringBytes_1433 = new TextEncoder().encode(obj_1430.query);
        SerializerPackNumber.INSTANCE.put(_out_1431, stringBytes_1433.length);
        _out_1431.write(stringBytes_1433);
        _out_1431.writeInt(obj_1430.limit);
        
    }
    deserialize(sCtx_1429: MetaContext, in__1432: DataIn): AuthorizedApiSearchClientLogsArguments  {
        try  {
            let uid_1435: UUID;
            let query_1436: string;
            let limit_1437: number;
            uid_1435 = FastMeta.META_UUID.deserialize(sCtx_1429, in__1432);
            let stringBytes_1438: Uint8Array;
            const len_1440 = Number(DeserializerPackNumber.INSTANCE.put(in__1432));
            const bytes_1441 = in__1432.readBytes(len_1440);
            stringBytes_1438 = bytes_1441;
            query_1436 = new TextDecoder('utf-8').decode(stringBytes_1438);
            limit_1437 = in__1432.readInt();
            return new AuthorizedApiSearchClientLogsArguments(uid_1435, query_1436, limit_1437);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiSearchClientLogsArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + FastMeta.META_STRING.metaHashCode(obj.query);
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.limit);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiSearchClientLogsArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiSearchClientLogsArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!FastMeta.META_STRING.metaEquals(v1.query, v2.query)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.limit, v2.limit)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiSearchClientLogsArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiSearchClientLogsArguments(');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('query:').add(obj.query);
        res.add(', ');
        res.add('limit:').add(obj.limit);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiSearchClientLogsArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiSearchClientLogsArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiSearchClientLogsArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiGetClientConnectionsArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiGetClientConnectionsArguments>  {
    serialize(sCtx_1442: MetaContext, obj_1443: AuthorizedApiGetClientConnectionsArguments, _out_1444: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1442, obj_1443.uid, _out_1444);
        _out_1444.writeInt(obj_1443.limit);
        
    }
    deserialize(sCtx_1442: MetaContext, in__1445: DataIn): AuthorizedApiGetClientConnectionsArguments  {
        try  {
            let uid_1446: UUID;
            let limit_1447: number;
            uid_1446 = FastMeta.META_UUID.deserialize(sCtx_1442, in__1445);
            limit_1447 = in__1445.readInt();
            return new AuthorizedApiGetClientConnectionsArguments(uid_1446, limit_1447);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiGetClientConnectionsArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.limit);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiGetClientConnectionsArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiGetClientConnectionsArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.limit, v2.limit)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiGetClientConnectionsArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiGetClientConnectionsArguments(');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('limit:').add(obj.limit);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiGetClientConnectionsArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiGetClientConnectionsArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiGetClientConnectionsArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiGetClientMessagesArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiGetClientMessagesArguments>  {
    serialize(sCtx_1448: MetaContext, obj_1449: AuthorizedApiGetClientMessagesArguments, _out_1450: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1448, obj_1449.uid, _out_1450);
        _out_1450.writeLong(obj_1449.fromTime);
        _out_1450.writeLong(obj_1449.toTime);
        _out_1450.writeInt(obj_1449.limit);
        
    }
    deserialize(sCtx_1448: MetaContext, in__1451: DataIn): AuthorizedApiGetClientMessagesArguments  {
        try  {
            let uid_1452: UUID;
            let fromTime_1453: bigint;
            let toTime_1454: bigint;
            let limit_1455: number;
            uid_1452 = FastMeta.META_UUID.deserialize(sCtx_1448, in__1451);
            fromTime_1453 = in__1451.readLong();
            toTime_1454 = in__1451.readLong();
            limit_1455 = in__1451.readInt();
            return new AuthorizedApiGetClientMessagesArguments(uid_1452, fromTime_1453, toTime_1454, limit_1455);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiGetClientMessagesArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.fromTime);
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.toTime);
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.limit);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiGetClientMessagesArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiGetClientMessagesArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.fromTime, v2.fromTime)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.toTime, v2.toTime)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.limit, v2.limit)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiGetClientMessagesArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiGetClientMessagesArguments(');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('fromTime:').add(obj.fromTime);
        res.add(', ');
        res.add('toTime:').add(obj.toTime);
        res.add(', ');
        res.add('limit:').add(obj.limit);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiGetClientMessagesArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiGetClientMessagesArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiGetClientMessagesArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiSetNextReadDelayArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiSetNextReadDelayArguments>  {
    serialize(sCtx_1456: MetaContext, obj_1457: AuthorizedApiSetNextReadDelayArguments, _out_1458: DataOut): void  {
        _out_1458.writeLong(obj_1457.delayMillis);
        
    }
    deserialize(sCtx_1456: MetaContext, in__1459: DataIn): AuthorizedApiSetNextReadDelayArguments  {
        try  {
            let delayMillis_1460: bigint;
            delayMillis_1460 = in__1459.readLong();
            return new AuthorizedApiSetNextReadDelayArguments(delayMillis_1460);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiSetNextReadDelayArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.delayMillis);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiSetNextReadDelayArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiSetNextReadDelayArguments)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.delayMillis, v2.delayMillis)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiSetNextReadDelayArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiSetNextReadDelayArguments(');
        res.add('delayMillis:').add(obj.delayMillis);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiSetNextReadDelayArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiSetNextReadDelayArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiSetNextReadDelayArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiGetUapArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiGetUapArguments>  {
    serialize(sCtx_1461: MetaContext, obj_1462: AuthorizedApiGetUapArguments, _out_1463: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1461, obj_1462.uid, _out_1463);
        
    }
    deserialize(sCtx_1461: MetaContext, in__1464: DataIn): AuthorizedApiGetUapArguments  {
        try  {
            let uid_1465: UUID;
            uid_1465 = FastMeta.META_UUID.deserialize(sCtx_1461, in__1464);
            return new AuthorizedApiGetUapArguments(uid_1465);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiGetUapArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiGetUapArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiGetUapArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiGetUapArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiGetUapArguments(');
        res.add('uid:').add(obj.uid);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiGetUapArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiGetUapArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiGetUapArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiRequestWebRtcSessionArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiRequestWebRtcSessionArguments>  {
    serialize(sCtx_1466: MetaContext, obj_1467: AuthorizedApiRequestWebRtcSessionArguments, _out_1468: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1466, obj_1467.uid, _out_1468);
        
    }
    deserialize(sCtx_1466: MetaContext, in__1469: DataIn): AuthorizedApiRequestWebRtcSessionArguments  {
        try  {
            let uid_1470: UUID;
            uid_1470 = FastMeta.META_UUID.deserialize(sCtx_1466, in__1469);
            return new AuthorizedApiRequestWebRtcSessionArguments(uid_1470);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiRequestWebRtcSessionArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiRequestWebRtcSessionArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiRequestWebRtcSessionArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiRequestWebRtcSessionArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiRequestWebRtcSessionArguments(');
        res.add('uid:').add(obj.uid);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiRequestWebRtcSessionArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiRequestWebRtcSessionArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiRequestWebRtcSessionArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiPublishWebRtcSessionArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiPublishWebRtcSessionArguments>  {
    serialize(sCtx_1471: MetaContext, obj_1472: AuthorizedApiPublishWebRtcSessionArguments, _out_1473: DataOut): void  {
        WebRtcSession.META.serialize(sCtx_1471, obj_1472.session, _out_1473);
        
    }
    deserialize(sCtx_1471: MetaContext, in__1474: DataIn): AuthorizedApiPublishWebRtcSessionArguments  {
        try  {
            let session_1475: WebRtcSession;
            session_1475 = WebRtcSession.META.deserialize(sCtx_1471, in__1474);
            return new AuthorizedApiPublishWebRtcSessionArguments(session_1475);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiPublishWebRtcSessionArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + WebRtcSession.META.metaHashCode(obj.session);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiPublishWebRtcSessionArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiPublishWebRtcSessionArguments)) return false;
        if (!WebRtcSession.META.metaEquals(v1.session, v2.session)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiPublishWebRtcSessionArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiPublishWebRtcSessionArguments(');
        res.add('session:').add(obj.session);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiPublishWebRtcSessionArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiPublishWebRtcSessionArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiPublishWebRtcSessionArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiSelfDestructArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiSelfDestructArguments>  {
    serialize(sCtx_1476: MetaContext, obj_1478: AuthorizedApiSelfDestructArguments, _out_1479: DataOut): void  {
        
    }
    deserialize(sCtx_1477: MetaContext, in__1480: DataIn): AuthorizedApiSelfDestructArguments  {
        try  {
            return new AuthorizedApiSelfDestructArguments();
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiSelfDestructArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiSelfDestructArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiSelfDestructArguments)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiSelfDestructArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiSelfDestructArguments(');
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiSelfDestructArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiSelfDestructArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiSelfDestructArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiGetServersArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiGetServersArguments>  {
    serialize(sCtx_1481: MetaContext, obj_1483: AuthorizedApiGetServersArguments, _out_1484: DataOut): void  {
        
    }
    deserialize(sCtx_1482: MetaContext, in__1485: DataIn): AuthorizedApiGetServersArguments  {
        try  {
            return new AuthorizedApiGetServersArguments();
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiGetServersArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiGetServersArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiGetServersArguments)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiGetServersArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiGetServersArguments(');
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiGetServersArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiGetServersArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiGetServersArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiMetaImpl implements FastMetaApi<AuthorizedApi, AuthorizedApiRemote>  {
    makeLocal(ctx: MetaContext, dataIn: DataIn): void  {
        this.makeLocal_fromDataIn(ctx, dataIn, ctx.getLocalApi() as AuthorizedApi);
        
    }
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
                    let id_1487: number;
                    id_1487 = dataIn.readByte();
                    const argsObject_1488 = new AuthorizedApiBackIdArguments(id_1487);
                    const argsNames_1489: string[] = ["id"];
                    const argsValues_1490: any[] = [id_1487];
                    ctx.invokeLocalMethodBefore("backId", argsNames_1489, argsValues_1490);
                    (typeof (localApi as any).backIdArguments === "function" ? (localApi as any).backIdArguments(argsObject_1488) : localApi.backId(id_1487));
                    ctx.invokeLocalMethodAfter("backId", null, argsNames_1489, argsValues_1490);
                    break;
                    
                }
                case 4:  {
                    const reqId_1491 = dataIn.readInt();
                    let nextConnectMsDuration_1492: bigint;
                    let rxWindowMs_1493: bigint;
                    nextConnectMsDuration_1492 = dataIn.readLong();
                    rxWindowMs_1493 = dataIn.readLong();
                    const argsObject_1494 = new AuthorizedApiPingArguments(nextConnectMsDuration_1492, rxWindowMs_1493);
                    const argsNames_1495: string[] = ["nextConnectMsDuration", "rxWindowMs"];
                    const argsValues_1496: any[] = [nextConnectMsDuration_1492, rxWindowMs_1493];
                    ctx.invokeLocalMethodBefore("ping", argsNames_1495, argsValues_1496);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).pingArguments === "function" ? (localApi as any).pingArguments(argsObject_1494) : localApi.ping(nextConnectMsDuration_1492, rxWindowMs_1493));
                    ctx.invokeLocalMethodAfter("ping", resultFuture, argsNames_1495, argsValues_1496);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1491);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    let uid_1498: UUID;
                    let stream_1499: ClientApiStream;
                    uid_1498 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    stream_1499 = ClientApiStream.META.deserialize(ctx, dataIn);
                    const argsObject_1500 = new AuthorizedApiClientArguments(uid_1498, stream_1499);
                    const argsNames_1501: string[] = ["uid", "stream"];
                    const argsValues_1502: any[] = [uid_1498, stream_1499];
                    ctx.invokeLocalMethodBefore("client", argsNames_1501, argsValues_1502);
                    (typeof (localApi as any).clientArguments === "function" ? (localApi as any).clientArguments(argsObject_1500) : localApi.client(uid_1498, stream_1499));
                    ctx.invokeLocalMethodAfter("client", null, argsNames_1501, argsValues_1502);
                    break;
                    
                }
                case 6:  {
                    let msg_1504: Message;
                    msg_1504 = Message.META.deserialize(ctx, dataIn);
                    const argsObject_1505 = new AuthorizedApiSendMessageArguments(msg_1504);
                    const argsNames_1506: string[] = ["msg"];
                    const argsValues_1507: any[] = [msg_1504];
                    ctx.invokeLocalMethodBefore("sendMessage", argsNames_1506, argsValues_1507);
                    (typeof (localApi as any).sendMessageArguments === "function" ? (localApi as any).sendMessageArguments(argsObject_1505) : localApi.sendMessage(msg_1504));
                    ctx.invokeLocalMethodAfter("sendMessage", null, argsNames_1506, argsValues_1507);
                    break;
                    
                }
                case 7:  {
                    let msg_1509: Message[];
                    const len_1511 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_1509 = new Array<Message>(len_1511);
                    for (let idx_1510 = 0;
                    idx_1510 < len_1511;
                    idx_1510++)  {
                        msg_1509[idx_1510] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1512 = new AuthorizedApiSendMessagesArguments(msg_1509);
                    const argsNames_1513: string[] = ["msg"];
                    const argsValues_1514: any[] = [msg_1509];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_1513, argsValues_1514);
                    (typeof (localApi as any).sendMessagesArguments === "function" ? (localApi as any).sendMessagesArguments(argsObject_1512) : localApi.sendMessages(msg_1509));
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_1513, argsValues_1514);
                    break;
                    
                }
                case 37:  {
                    let uids_1516: UUID[];
                    let data_1517: Uint8Array;
                    const len_1519 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1516 = new Array<UUID>(len_1519);
                    for (let idx_1518 = 0;
                    idx_1518 < len_1519;
                    idx_1518++)  {
                        uids_1516[idx_1518] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const len_1521 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1522 = dataIn.readBytes(len_1521);
                    data_1517 = bytes_1522;
                    const argsObject_1523 = new AuthorizedApiSendMulticastArguments(uids_1516, data_1517);
                    const argsNames_1524: string[] = ["uids", "data"];
                    const argsValues_1525: any[] = [uids_1516, data_1517];
                    ctx.invokeLocalMethodBefore("sendMulticast", argsNames_1524, argsValues_1525);
                    (typeof (localApi as any).sendMulticastArguments === "function" ? (localApi as any).sendMulticastArguments(argsObject_1523) : localApi.sendMulticast(uids_1516, data_1517));
                    ctx.invokeLocalMethodAfter("sendMulticast", null, argsNames_1524, argsValues_1525);
                    break;
                    
                }
                case 39:  {
                    const reqId_1526 = dataIn.readInt();
                    let msg_1527: Message;
                    msg_1527 = Message.META.deserialize(ctx, dataIn);
                    const argsObject_1528 = new AuthorizedApiSendMessageWithResultArguments(msg_1527);
                    const argsNames_1529: string[] = ["msg"];
                    const argsValues_1530: any[] = [msg_1527];
                    ctx.invokeLocalMethodBefore("sendMessageWithResult", argsNames_1529, argsValues_1530);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).sendMessageWithResultArguments === "function" ? (localApi as any).sendMessageWithResultArguments(argsObject_1528) : localApi.sendMessageWithResult(msg_1527));
                    ctx.invokeLocalMethodAfter("sendMessageWithResult", resultFuture, argsNames_1529, argsValues_1530);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1526);
                        
                    }
                    );
                    break;
                    
                }
                case 8:  {
                    const reqId_1531 = dataIn.readInt();
                    let owner_1532: UUID;
                    let uids_1533: UUID[];
                    owner_1532 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1535 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1533 = new Array<UUID>(len_1535);
                    for (let idx_1534 = 0;
                    idx_1534 < len_1535;
                    idx_1534++)  {
                        uids_1533[idx_1534] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1536 = new AuthorizedApiCreateAccessGroupArguments(owner_1532, uids_1533);
                    const argsNames_1537: string[] = ["owner", "uids"];
                    const argsValues_1538: any[] = [owner_1532, uids_1533];
                    ctx.invokeLocalMethodBefore("createAccessGroup", argsNames_1537, argsValues_1538);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).createAccessGroupArguments === "function" ? (localApi as any).createAccessGroupArguments(argsObject_1536) : localApi.createAccessGroup(owner_1532, uids_1533));
                    ctx.invokeLocalMethodAfter("createAccessGroup", resultFuture, argsNames_1537, argsValues_1538);
                    resultFuture.to((v_1540: UUID) =>  {
                        const data_1539 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_1540, data_1539);
                        ctx.sendResultToRemote(reqId_1531, data_1539.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_1541 = dataIn.readInt();
                    let groupId_1542: UUID;
                    let uid_1543: UUID;
                    groupId_1542 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid_1543 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1544 = new AuthorizedApiAddToAccessGroupArguments(groupId_1542, uid_1543);
                    const argsNames_1545: string[] = ["groupId", "uid"];
                    const argsValues_1546: any[] = [groupId_1542, uid_1543];
                    ctx.invokeLocalMethodBefore("addToAccessGroup", argsNames_1545, argsValues_1546);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).addToAccessGroupArguments === "function" ? (localApi as any).addToAccessGroupArguments(argsObject_1544) : localApi.addToAccessGroup(groupId_1542, uid_1543));
                    ctx.invokeLocalMethodAfter("addToAccessGroup", resultFuture, argsNames_1545, argsValues_1546);
                    resultFuture.to((v_1548: boolean) =>  {
                        const data_1547 = new DataInOut();
                        data_1547.writeBoolean(v_1548);
                        ctx.sendResultToRemote(reqId_1541, data_1547.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_1549 = dataIn.readInt();
                    let groupId_1550: UUID;
                    let uid_1551: UUID;
                    groupId_1550 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid_1551 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1552 = new AuthorizedApiRemoveFromAccessGroupArguments(groupId_1550, uid_1551);
                    const argsNames_1553: string[] = ["groupId", "uid"];
                    const argsValues_1554: any[] = [groupId_1550, uid_1551];
                    ctx.invokeLocalMethodBefore("removeFromAccessGroup", argsNames_1553, argsValues_1554);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).removeFromAccessGroupArguments === "function" ? (localApi as any).removeFromAccessGroupArguments(argsObject_1552) : localApi.removeFromAccessGroup(groupId_1550, uid_1551));
                    ctx.invokeLocalMethodAfter("removeFromAccessGroup", resultFuture, argsNames_1553, argsValues_1554);
                    resultFuture.to((v_1556: boolean) =>  {
                        const data_1555 = new DataInOut();
                        data_1555.writeBoolean(v_1556);
                        ctx.sendResultToRemote(reqId_1549, data_1555.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_1557 = dataIn.readInt();
                    let uid_1558: UUID;
                    uid_1558 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1559 = new AuthorizedApiCheckAccessForSendMessageArguments(uid_1558);
                    const argsNames_1560: string[] = ["uid"];
                    const argsValues_1561: any[] = [uid_1558];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage", argsNames_1560, argsValues_1561);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).checkAccessForSendMessageArguments === "function" ? (localApi as any).checkAccessForSendMessageArguments(argsObject_1559) : localApi.checkAccessForSendMessage(uid_1558));
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage", resultFuture, argsNames_1560, argsValues_1561);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1557);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    let sid_1563: number[];
                    const len_1565 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    sid_1563 = new Array<number>(len_1565);
                    for (let idx_1564 = 0;
                    idx_1564 < len_1565;
                    idx_1564++)  {
                        sid_1563[idx_1564] = dataIn.readShort();
                        
                    }
                    const argsObject_1566 = new AuthorizedApiResolverServersArguments(sid_1563);
                    const argsNames_1567: string[] = ["sid"];
                    const argsValues_1568: any[] = [sid_1563];
                    ctx.invokeLocalMethodBefore("resolverServers", argsNames_1567, argsValues_1568);
                    (typeof (localApi as any).resolverServersArguments === "function" ? (localApi as any).resolverServersArguments(argsObject_1566) : localApi.resolverServers(sid_1563));
                    ctx.invokeLocalMethodAfter("resolverServers", null, argsNames_1567, argsValues_1568);
                    break;
                    
                }
                case 13:  {
                    let uids_1570: UUID[];
                    const len_1572 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1570 = new Array<UUID>(len_1572);
                    for (let idx_1571 = 0;
                    idx_1571 < len_1572;
                    idx_1571++)  {
                        uids_1570[idx_1571] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1573 = new AuthorizedApiResolveCloudsArguments(uids_1570);
                    const argsNames_1574: string[] = ["uids"];
                    const argsValues_1575: any[] = [uids_1570];
                    ctx.invokeLocalMethodBefore("resolveClouds", argsNames_1574, argsValues_1575);
                    (typeof (localApi as any).resolveCloudsArguments === "function" ? (localApi as any).resolveCloudsArguments(argsObject_1573) : localApi.resolveClouds(uids_1570));
                    ctx.invokeLocalMethodAfter("resolveClouds", null, argsNames_1574, argsValues_1575);
                    break;
                    
                }
                case 38:  {
                    let configs_1577: AppliedConfig[];
                    const len_1579 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    configs_1577 = new Array<AppliedConfig>(len_1579);
                    for (let idx_1578 = 0;
                    idx_1578 < len_1579;
                    idx_1578++)  {
                        configs_1577[idx_1578] = AppliedConfig.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1580 = new AuthorizedApiReportAppliedConfigArguments(configs_1577);
                    const argsNames_1581: string[] = ["configs"];
                    const argsValues_1582: any[] = [configs_1577];
                    ctx.invokeLocalMethodBefore("reportAppliedConfig", argsNames_1581, argsValues_1582);
                    (typeof (localApi as any).reportAppliedConfigArguments === "function" ? (localApi as any).reportAppliedConfigArguments(argsObject_1580) : localApi.reportAppliedConfig(configs_1577));
                    ctx.invokeLocalMethodAfter("reportAppliedConfig", null, argsNames_1581, argsValues_1582);
                    break;
                    
                }
                case 14:  {
                    const reqId_1583 = dataIn.readInt();
                    let uid_1584: UUID;
                    uid_1584 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1585 = new AuthorizedApiGetAccessGroupsArguments(uid_1584);
                    const argsNames_1586: string[] = ["uid"];
                    const argsValues_1587: any[] = [uid_1584];
                    ctx.invokeLocalMethodBefore("getAccessGroups", argsNames_1586, argsValues_1587);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getAccessGroupsArguments === "function" ? (localApi as any).getAccessGroupsArguments(argsObject_1585) : localApi.getAccessGroups(uid_1584));
                    ctx.invokeLocalMethodAfter("getAccessGroups", resultFuture, argsNames_1586, argsValues_1587);
                    resultFuture.to((v_1589: UUID[]) =>  {
                        const data_1588 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1588, v_1589.length);
                        for (const el_1590 of v_1589)  {
                            FastMeta.META_UUID.serialize(ctx, el_1590, data_1588);
                            
                        }
                        ctx.sendResultToRemote(reqId_1583, data_1588.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_1591 = dataIn.readInt();
                    let groupId_1592: UUID;
                    groupId_1592 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1593 = new AuthorizedApiGetAccessGroupArguments(groupId_1592);
                    const argsNames_1594: string[] = ["groupId"];
                    const argsValues_1595: any[] = [groupId_1592];
                    ctx.invokeLocalMethodBefore("getAccessGroup", argsNames_1594, argsValues_1595);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getAccessGroupArguments === "function" ? (localApi as any).getAccessGroupArguments(argsObject_1593) : localApi.getAccessGroup(groupId_1592));
                    ctx.invokeLocalMethodAfter("getAccessGroup", resultFuture, argsNames_1594, argsValues_1595);
                    resultFuture.to((v_1597: AccessGroup) =>  {
                        const data_1596 = new DataInOut();
                        AccessGroup.META.serialize(ctx, v_1597, data_1596);
                        ctx.sendResultToRemote(reqId_1591, data_1596.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 16:  {
                    const reqId_1598 = dataIn.readInt();
                    let uid_1599: UUID;
                    uid_1599 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1600 = new AuthorizedApiGetAllAccessedClientsArguments(uid_1599);
                    const argsNames_1601: string[] = ["uid"];
                    const argsValues_1602: any[] = [uid_1599];
                    ctx.invokeLocalMethodBefore("getAllAccessedClients", argsNames_1601, argsValues_1602);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getAllAccessedClientsArguments === "function" ? (localApi as any).getAllAccessedClientsArguments(argsObject_1600) : localApi.getAllAccessedClients(uid_1599));
                    ctx.invokeLocalMethodAfter("getAllAccessedClients", resultFuture, argsNames_1601, argsValues_1602);
                    resultFuture.to((v_1604: UUID[]) =>  {
                        const data_1603 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1603, v_1604.length);
                        for (const el_1605 of v_1604)  {
                            FastMeta.META_UUID.serialize(ctx, el_1605, data_1603);
                            
                        }
                        ctx.sendResultToRemote(reqId_1598, data_1603.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 17:  {
                    const reqId_1606 = dataIn.readInt();
                    let uid1_1607: UUID;
                    let uid2_1608: UUID;
                    uid1_1607 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid2_1608 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1609 = new AuthorizedApiCheckAccessForSendMessage2Arguments(uid1_1607, uid2_1608);
                    const argsNames_1610: string[] = ["uid1", "uid2"];
                    const argsValues_1611: any[] = [uid1_1607, uid2_1608];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage2", argsNames_1610, argsValues_1611);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).checkAccessForSendMessage2Arguments === "function" ? (localApi as any).checkAccessForSendMessage2Arguments(argsObject_1609) : localApi.checkAccessForSendMessage2(uid1_1607, uid2_1608));
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage2", resultFuture, argsNames_1610, argsValues_1611);
                    resultFuture.to((v_1613: boolean) =>  {
                        const data_1612 = new DataInOut();
                        data_1612.writeBoolean(v_1613);
                        ctx.sendResultToRemote(reqId_1606, data_1612.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 18:  {
                    let telemetry_1615: Telemetry;
                    telemetry_1615 = Telemetry.META.deserialize(ctx, dataIn);
                    const argsObject_1616 = new AuthorizedApiSendTelemetryArguments(telemetry_1615);
                    const argsNames_1617: string[] = ["telemetry"];
                    const argsValues_1618: any[] = [telemetry_1615];
                    ctx.invokeLocalMethodBefore("sendTelemetry", argsNames_1617, argsValues_1618);
                    (typeof (localApi as any).sendTelemetryArguments === "function" ? (localApi as any).sendTelemetryArguments(argsObject_1616) : localApi.sendTelemetry(telemetry_1615));
                    ctx.invokeLocalMethodAfter("sendTelemetry", null, argsNames_1617, argsValues_1618);
                    break;
                    
                }
                case 19:  {
                    let uids_1620: UUID[];
                    const len_1622 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1620 = new Array<UUID>(len_1622);
                    for (let idx_1621 = 0;
                    idx_1621 < len_1622;
                    idx_1621++)  {
                        uids_1620[idx_1621] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1623 = new AuthorizedApiRequestAccessGroupsForClientsArguments(uids_1620);
                    const argsNames_1624: string[] = ["uids"];
                    const argsValues_1625: any[] = [uids_1620];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsForClients", argsNames_1624, argsValues_1625);
                    (typeof (localApi as any).requestAccessGroupsForClientsArguments === "function" ? (localApi as any).requestAccessGroupsForClientsArguments(argsObject_1623) : localApi.requestAccessGroupsForClients(uids_1620));
                    ctx.invokeLocalMethodAfter("requestAccessGroupsForClients", null, argsNames_1624, argsValues_1625);
                    break;
                    
                }
                case 20:  {
                    let ids_1627: UUID[];
                    const len_1629 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    ids_1627 = new Array<UUID>(len_1629);
                    for (let idx_1628 = 0;
                    idx_1628 < len_1629;
                    idx_1628++)  {
                        ids_1627[idx_1628] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1630 = new AuthorizedApiRequestAccessGroupsItemsArguments(ids_1627);
                    const argsNames_1631: string[] = ["ids"];
                    const argsValues_1632: any[] = [ids_1627];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsItems", argsNames_1631, argsValues_1632);
                    (typeof (localApi as any).requestAccessGroupsItemsArguments === "function" ? (localApi as any).requestAccessGroupsItemsArguments(argsObject_1630) : localApi.requestAccessGroupsItems(ids_1627));
                    ctx.invokeLocalMethodAfter("requestAccessGroupsItems", null, argsNames_1631, argsValues_1632);
                    break;
                    
                }
                case 22:  {
                    let uid_1634: UUID;
                    let groups_1635: UUID[];
                    uid_1634 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1637 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1635 = new Array<UUID>(len_1637);
                    for (let idx_1636 = 0;
                    idx_1636 < len_1637;
                    idx_1636++)  {
                        groups_1635[idx_1636] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1638 = new AuthorizedApiSendAccessGroupForClientArguments(uid_1634, groups_1635);
                    const argsNames_1639: string[] = ["uid", "groups"];
                    const argsValues_1640: any[] = [uid_1634, groups_1635];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_1639, argsValues_1640);
                    (typeof (localApi as any).sendAccessGroupForClientArguments === "function" ? (localApi as any).sendAccessGroupForClientArguments(argsObject_1638) : localApi.sendAccessGroupForClient(uid_1634, groups_1635));
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_1639, argsValues_1640);
                    break;
                    
                }
                case 23:  {
                    let id_1642: UUID;
                    let groups_1643: UUID[];
                    id_1642 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1645 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1643 = new Array<UUID>(len_1645);
                    for (let idx_1644 = 0;
                    idx_1644 < len_1645;
                    idx_1644++)  {
                        groups_1643[idx_1644] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1646 = new AuthorizedApiAddItemsToAccessGroupArguments(id_1642, groups_1643);
                    const argsNames_1647: string[] = ["id", "groups"];
                    const argsValues_1648: any[] = [id_1642, groups_1643];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_1647, argsValues_1648);
                    (typeof (localApi as any).addItemsToAccessGroupArguments === "function" ? (localApi as any).addItemsToAccessGroupArguments(argsObject_1646) : localApi.addItemsToAccessGroup(id_1642, groups_1643));
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_1647, argsValues_1648);
                    break;
                    
                }
                case 24:  {
                    let id_1650: UUID;
                    let groups_1651: UUID[];
                    id_1650 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1653 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1651 = new Array<UUID>(len_1653);
                    for (let idx_1652 = 0;
                    idx_1652 < len_1653;
                    idx_1652++)  {
                        groups_1651[idx_1652] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1654 = new AuthorizedApiRemoveItemsFromAccessGroupArguments(id_1650, groups_1651);
                    const argsNames_1655: string[] = ["id", "groups"];
                    const argsValues_1656: any[] = [id_1650, groups_1651];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_1655, argsValues_1656);
                    (typeof (localApi as any).removeItemsFromAccessGroupArguments === "function" ? (localApi as any).removeItemsFromAccessGroupArguments(argsObject_1654) : localApi.removeItemsFromAccessGroup(id_1650, groups_1651));
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_1655, argsValues_1656);
                    break;
                    
                }
                case 25:  {
                    let uid_1658: UUID;
                    let groups_1659: UUID[];
                    uid_1658 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1661 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1659 = new Array<UUID>(len_1661);
                    for (let idx_1660 = 0;
                    idx_1660 < len_1661;
                    idx_1660++)  {
                        groups_1659[idx_1660] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1662 = new AuthorizedApiAddAccessGroupsToClientArguments(uid_1658, groups_1659);
                    const argsNames_1663: string[] = ["uid", "groups"];
                    const argsValues_1664: any[] = [uid_1658, groups_1659];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_1663, argsValues_1664);
                    (typeof (localApi as any).addAccessGroupsToClientArguments === "function" ? (localApi as any).addAccessGroupsToClientArguments(argsObject_1662) : localApi.addAccessGroupsToClient(uid_1658, groups_1659));
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_1663, argsValues_1664);
                    break;
                    
                }
                case 26:  {
                    let uid_1666: UUID;
                    let groups_1667: UUID[];
                    uid_1666 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1669 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1667 = new Array<UUID>(len_1669);
                    for (let idx_1668 = 0;
                    idx_1668 < len_1669;
                    idx_1668++)  {
                        groups_1667[idx_1668] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1670 = new AuthorizedApiRemoveAccessGroupsFromClientArguments(uid_1666, groups_1667);
                    const argsNames_1671: string[] = ["uid", "groups"];
                    const argsValues_1672: any[] = [uid_1666, groups_1667];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_1671, argsValues_1672);
                    (typeof (localApi as any).removeAccessGroupsFromClientArguments === "function" ? (localApi as any).removeAccessGroupsFromClientArguments(argsObject_1670) : localApi.removeAccessGroupsFromClient(uid_1666, groups_1667));
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_1671, argsValues_1672);
                    break;
                    
                }
                case 27:  {
                    let uids_1674: UUID[];
                    const len_1676 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1674 = new Array<UUID>(len_1676);
                    for (let idx_1675 = 0;
                    idx_1675 < len_1676;
                    idx_1675++)  {
                        uids_1674[idx_1675] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1677 = new AuthorizedApiRequestAllAccessedClientsArguments(uids_1674);
                    const argsNames_1678: string[] = ["uids"];
                    const argsValues_1679: any[] = [uids_1674];
                    ctx.invokeLocalMethodBefore("requestAllAccessedClients", argsNames_1678, argsValues_1679);
                    (typeof (localApi as any).requestAllAccessedClientsArguments === "function" ? (localApi as any).requestAllAccessedClientsArguments(argsObject_1677) : localApi.requestAllAccessedClients(uids_1674));
                    ctx.invokeLocalMethodAfter("requestAllAccessedClients", null, argsNames_1678, argsValues_1679);
                    break;
                    
                }
                case 28:  {
                    let requests_1681: AccessCheckPair[];
                    const len_1683 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    requests_1681 = new Array<AccessCheckPair>(len_1683);
                    for (let idx_1682 = 0;
                    idx_1682 < len_1683;
                    idx_1682++)  {
                        requests_1681[idx_1682] = AccessCheckPair.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1684 = new AuthorizedApiRequestAccessCheckArguments(requests_1681);
                    const argsNames_1685: string[] = ["requests"];
                    const argsValues_1686: any[] = [requests_1681];
                    ctx.invokeLocalMethodBefore("requestAccessCheck", argsNames_1685, argsValues_1686);
                    (typeof (localApi as any).requestAccessCheckArguments === "function" ? (localApi as any).requestAccessCheckArguments(argsObject_1684) : localApi.requestAccessCheck(requests_1681));
                    ctx.invokeLocalMethodAfter("requestAccessCheck", null, argsNames_1685, argsValues_1686);
                    break;
                    
                }
                case 29:  {
                    const reqId_1687 = dataIn.readInt();
                    let uid_1688: UUID;
                    let fromTime_1689: bigint;
                    let toTime_1690: bigint;
                    let limit_1691: number;
                    uid_1688 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    fromTime_1689 = dataIn.readLong();
                    toTime_1690 = dataIn.readLong();
                    limit_1691 = dataIn.readInt();
                    const argsObject_1692 = new AuthorizedApiGetClientActivityArguments(uid_1688, fromTime_1689, toTime_1690, limit_1691);
                    const argsNames_1693: string[] = ["uid", "fromTime", "toTime", "limit"];
                    const argsValues_1694: any[] = [uid_1688, fromTime_1689, toTime_1690, limit_1691];
                    ctx.invokeLocalMethodBefore("getClientActivity", argsNames_1693, argsValues_1694);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getClientActivityArguments === "function" ? (localApi as any).getClientActivityArguments(argsObject_1692) : localApi.getClientActivity(uid_1688, fromTime_1689, toTime_1690, limit_1691));
                    ctx.invokeLocalMethodAfter("getClientActivity", resultFuture, argsNames_1693, argsValues_1694);
                    resultFuture.to((v_1696: ClientActivity[]) =>  {
                        const data_1695 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1695, v_1696.length);
                        for (const el_1697 of v_1696)  {
                            ClientActivity.META.serialize(ctx, el_1697, data_1695);
                            
                        }
                        ctx.sendResultToRemote(reqId_1687, data_1695.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 30:  {
                    const reqId_1698 = dataIn.readInt();
                    let uid_1699: UUID;
                    let query_1700: string;
                    let limit_1701: number;
                    uid_1699 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    let stringBytes_1702: Uint8Array;
                    const len_1704 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1705 = dataIn.readBytes(len_1704);
                    stringBytes_1702 = bytes_1705;
                    query_1700 = new TextDecoder('utf-8').decode(stringBytes_1702);
                    limit_1701 = dataIn.readInt();
                    const argsObject_1706 = new AuthorizedApiSearchClientLogsArguments(uid_1699, query_1700, limit_1701);
                    const argsNames_1707: string[] = ["uid", "query", "limit"];
                    const argsValues_1708: any[] = [uid_1699, query_1700, limit_1701];
                    ctx.invokeLocalMethodBefore("searchClientLogs", argsNames_1707, argsValues_1708);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).searchClientLogsArguments === "function" ? (localApi as any).searchClientLogsArguments(argsObject_1706) : localApi.searchClientLogs(uid_1699, query_1700, limit_1701));
                    ctx.invokeLocalMethodAfter("searchClientLogs", resultFuture, argsNames_1707, argsValues_1708);
                    resultFuture.to((v_1710: ClientLogEntry[]) =>  {
                        const data_1709 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1709, v_1710.length);
                        for (const el_1711 of v_1710)  {
                            ClientLogEntry.META.serialize(ctx, el_1711, data_1709);
                            
                        }
                        ctx.sendResultToRemote(reqId_1698, data_1709.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 31:  {
                    const reqId_1712 = dataIn.readInt();
                    let uid_1713: UUID;
                    let limit_1714: number;
                    uid_1713 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    limit_1714 = dataIn.readInt();
                    const argsObject_1715 = new AuthorizedApiGetClientConnectionsArguments(uid_1713, limit_1714);
                    const argsNames_1716: string[] = ["uid", "limit"];
                    const argsValues_1717: any[] = [uid_1713, limit_1714];
                    ctx.invokeLocalMethodBefore("getClientConnections", argsNames_1716, argsValues_1717);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getClientConnectionsArguments === "function" ? (localApi as any).getClientConnectionsArguments(argsObject_1715) : localApi.getClientConnections(uid_1713, limit_1714));
                    ctx.invokeLocalMethodAfter("getClientConnections", resultFuture, argsNames_1716, argsValues_1717);
                    resultFuture.to((v_1719: ClientConnectionInfo[]) =>  {
                        const data_1718 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1718, v_1719.length);
                        for (const el_1720 of v_1719)  {
                            ClientConnectionInfo.META.serialize(ctx, el_1720, data_1718);
                            
                        }
                        ctx.sendResultToRemote(reqId_1712, data_1718.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 32:  {
                    const reqId_1721 = dataIn.readInt();
                    let uid_1722: UUID;
                    let fromTime_1723: bigint;
                    let toTime_1724: bigint;
                    let limit_1725: number;
                    uid_1722 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    fromTime_1723 = dataIn.readLong();
                    toTime_1724 = dataIn.readLong();
                    limit_1725 = dataIn.readInt();
                    const argsObject_1726 = new AuthorizedApiGetClientMessagesArguments(uid_1722, fromTime_1723, toTime_1724, limit_1725);
                    const argsNames_1727: string[] = ["uid", "fromTime", "toTime", "limit"];
                    const argsValues_1728: any[] = [uid_1722, fromTime_1723, toTime_1724, limit_1725];
                    ctx.invokeLocalMethodBefore("getClientMessages", argsNames_1727, argsValues_1728);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getClientMessagesArguments === "function" ? (localApi as any).getClientMessagesArguments(argsObject_1726) : localApi.getClientMessages(uid_1722, fromTime_1723, toTime_1724, limit_1725));
                    ctx.invokeLocalMethodAfter("getClientMessages", resultFuture, argsNames_1727, argsValues_1728);
                    resultFuture.to((v_1730: MessageInfo[]) =>  {
                        const data_1729 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1729, v_1730.length);
                        for (const el_1731 of v_1730)  {
                            MessageInfo.META.serialize(ctx, el_1731, data_1729);
                            
                        }
                        ctx.sendResultToRemote(reqId_1721, data_1729.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 33:  {
                    let delayMillis_1733: bigint;
                    delayMillis_1733 = dataIn.readLong();
                    const argsObject_1734 = new AuthorizedApiSetNextReadDelayArguments(delayMillis_1733);
                    const argsNames_1735: string[] = ["delayMillis"];
                    const argsValues_1736: any[] = [delayMillis_1733];
                    ctx.invokeLocalMethodBefore("setNextReadDelay", argsNames_1735, argsValues_1736);
                    (typeof (localApi as any).setNextReadDelayArguments === "function" ? (localApi as any).setNextReadDelayArguments(argsObject_1734) : localApi.setNextReadDelay(delayMillis_1733));
                    ctx.invokeLocalMethodAfter("setNextReadDelay", null, argsNames_1735, argsValues_1736);
                    break;
                    
                }
                case 34:  {
                    const reqId_1737 = dataIn.readInt();
                    let uid_1738: UUID;
                    uid_1738 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1739 = new AuthorizedApiGetUapArguments(uid_1738);
                    const argsNames_1740: string[] = ["uid"];
                    const argsValues_1741: any[] = [uid_1738];
                    ctx.invokeLocalMethodBefore("getUap", argsNames_1740, argsValues_1741);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getUapArguments === "function" ? (localApi as any).getUapArguments(argsObject_1739) : localApi.getUap(uid_1738));
                    ctx.invokeLocalMethodAfter("getUap", resultFuture, argsNames_1740, argsValues_1741);
                    resultFuture.to((v_1743: Uap) =>  {
                        const data_1742 = new DataInOut();
                        Uap.META.serialize(ctx, v_1743, data_1742);
                        ctx.sendResultToRemote(reqId_1737, data_1742.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 40:  {
                    const reqId_1744 = dataIn.readInt();
                    let uid_1745: UUID;
                    uid_1745 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1746 = new AuthorizedApiRequestWebRtcSessionArguments(uid_1745);
                    const argsNames_1747: string[] = ["uid"];
                    const argsValues_1748: any[] = [uid_1745];
                    ctx.invokeLocalMethodBefore("requestWebRtcSession", argsNames_1747, argsValues_1748);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).requestWebRtcSessionArguments === "function" ? (localApi as any).requestWebRtcSessionArguments(argsObject_1746) : localApi.requestWebRtcSession(uid_1745));
                    ctx.invokeLocalMethodAfter("requestWebRtcSession", resultFuture, argsNames_1747, argsValues_1748);
                    resultFuture.to((v_1750: WebRtcSession) =>  {
                        const data_1749 = new DataInOut();
                        WebRtcSession.META.serialize(ctx, v_1750, data_1749);
                        ctx.sendResultToRemote(reqId_1744, data_1749.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 41:  {
                    let session_1752: WebRtcSession;
                    session_1752 = WebRtcSession.META.deserialize(ctx, dataIn);
                    const argsObject_1753 = new AuthorizedApiPublishWebRtcSessionArguments(session_1752);
                    const argsNames_1754: string[] = ["session"];
                    const argsValues_1755: any[] = [session_1752];
                    ctx.invokeLocalMethodBefore("publishWebRtcSession", argsNames_1754, argsValues_1755);
                    (typeof (localApi as any).publishWebRtcSessionArguments === "function" ? (localApi as any).publishWebRtcSessionArguments(argsObject_1753) : localApi.publishWebRtcSession(session_1752));
                    ctx.invokeLocalMethodAfter("publishWebRtcSession", null, argsNames_1754, argsValues_1755);
                    break;
                    
                }
                case 42:  {
                    const reqId_1756 = dataIn.readInt();
                    const argsObject_1757 = new AuthorizedApiSelfDestructArguments();
                    const argsNames_1758: string[] = [];
                    const argsValues_1759: any[] = [];
                    ctx.invokeLocalMethodBefore("selfDestruct", argsNames_1758, argsValues_1759);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).selfDestructArguments === "function" ? (localApi as any).selfDestructArguments(argsObject_1757) : localApi.selfDestruct());
                    ctx.invokeLocalMethodAfter("selfDestruct", resultFuture, argsNames_1758, argsValues_1759);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1756);
                        
                    }
                    );
                    break;
                    
                }
                case 43:  {
                    const reqId_1760 = dataIn.readInt();
                    const argsObject_1761 = new AuthorizedApiGetServersArguments();
                    const argsNames_1762: string[] = [];
                    const argsValues_1763: any[] = [];
                    ctx.invokeLocalMethodBefore("getServers", argsNames_1762, argsValues_1763);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getServersArguments === "function" ? (localApi as any).getServersArguments(argsObject_1761) : localApi.getServers());
                    ctx.invokeLocalMethodAfter("getServers", resultFuture, argsNames_1762, argsValues_1763);
                    resultFuture.to((v_1765: ServerDescriptorWithGeo[]) =>  {
                        const data_1764 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1764, v_1765.length);
                        for (const el_1766 of v_1765)  {
                            ServerDescriptorWithGeo.META.serialize(ctx, el_1766, data_1764);
                            
                        }
                        ctx.sendResultToRemote(reqId_1760, data_1764.toArray());
                        
                    }
                    );
                    break;
                    
                }
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: AuthorizedApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1767: MetaContext): AuthorizedApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_1767.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_1767.flush();
                
            }
            , getFastMetaContext: () => sCtx_1767, backId: (id: number): void =>  {
                const dataOut_1769 = new DataInOut();
                dataOut_1769.writeByte(3);
                const argsNames_1771: string[] = ["id"];
                const argsValues_1772: any[] = [id];
                sCtx_1767.invokeRemoteMethodAfter("backId", null, argsNames_1771, argsValues_1772);
                dataOut_1769.writeByte(id);
                sCtx_1767.sendToRemote(dataOut_1769.toArray());
                
            }
            , ping: (nextConnectMsDuration: bigint, rxWindowMs: bigint): AFuture =>  {
                const dataOut_1774 = new DataInOut();
                dataOut_1774.writeByte(4);
                const argsNames_1776: string[] = ["nextConnectMsDuration", "rxWindowMs"];
                const argsValues_1777: any[] = [nextConnectMsDuration, rxWindowMs];
                const result_1775 = AFuture.make();
                sCtx_1767.invokeRemoteMethodAfter("ping", result_1775, argsNames_1776, argsValues_1777);
                const reqId_1773 = sCtx_1767.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1775 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1775.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1774.writeInt(reqId_1773);
                dataOut_1774.writeLong(nextConnectMsDuration);
                dataOut_1774.writeLong(rxWindowMs);
                sCtx_1767.sendToRemote(dataOut_1774.toArray());
                return result_1775;
                
            }
            , client: (uid: UUID, stream: ClientApiStream): void =>  {
                const dataOut_1779 = new DataInOut();
                dataOut_1779.writeByte(5);
                const argsNames_1781: string[] = ["uid", "stream"];
                const argsValues_1782: any[] = [uid, stream];
                sCtx_1767.invokeRemoteMethodAfter("client", null, argsNames_1781, argsValues_1782);
                FastMeta.META_UUID.serialize(sCtx_1767, uid, dataOut_1779);
                ClientApiStream.META.serialize(sCtx_1767, stream, dataOut_1779);
                sCtx_1767.sendToRemote(dataOut_1779.toArray());
                
            }
            , sendMessage: (msg: Message): void =>  {
                const dataOut_1784 = new DataInOut();
                dataOut_1784.writeByte(6);
                const argsNames_1786: string[] = ["msg"];
                const argsValues_1787: any[] = [msg];
                sCtx_1767.invokeRemoteMethodAfter("sendMessage", null, argsNames_1786, argsValues_1787);
                Message.META.serialize(sCtx_1767, msg, dataOut_1784);
                sCtx_1767.sendToRemote(dataOut_1784.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_1789 = new DataInOut();
                dataOut_1789.writeByte(7);
                const argsNames_1791: string[] = ["msg"];
                const argsValues_1792: any[] = [msg];
                sCtx_1767.invokeRemoteMethodAfter("sendMessages", null, argsNames_1791, argsValues_1792);
                SerializerPackNumber.INSTANCE.put(dataOut_1789, msg.length);
                for (const el_1793 of msg)  {
                    Message.META.serialize(sCtx_1767, el_1793, dataOut_1789);
                    
                }
                sCtx_1767.sendToRemote(dataOut_1789.toArray());
                
            }
            , sendMulticast: (uids: UUID[], data: Uint8Array): void =>  {
                const dataOut_1795 = new DataInOut();
                dataOut_1795.writeByte(37);
                const argsNames_1797: string[] = ["uids", "data"];
                const argsValues_1798: any[] = [uids, data];
                sCtx_1767.invokeRemoteMethodAfter("sendMulticast", null, argsNames_1797, argsValues_1798);
                SerializerPackNumber.INSTANCE.put(dataOut_1795, uids.length);
                for (const el_1799 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1767, el_1799, dataOut_1795);
                    
                }
                SerializerPackNumber.INSTANCE.put(dataOut_1795, data.length);
                dataOut_1795.write(data);
                sCtx_1767.sendToRemote(dataOut_1795.toArray());
                
            }
            , sendMessageWithResult: (msg: Message): AFuture =>  {
                const dataOut_1802 = new DataInOut();
                dataOut_1802.writeByte(39);
                const argsNames_1804: string[] = ["msg"];
                const argsValues_1805: any[] = [msg];
                const result_1803 = AFuture.make();
                sCtx_1767.invokeRemoteMethodAfter("sendMessageWithResult", result_1803, argsNames_1804, argsValues_1805);
                const reqId_1801 = sCtx_1767.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1803 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1803.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1802.writeInt(reqId_1801);
                Message.META.serialize(sCtx_1767, msg, dataOut_1802);
                sCtx_1767.sendToRemote(dataOut_1802.toArray());
                return result_1803;
                
            }
            , createAccessGroup: (owner: UUID, uids: UUID[]): ARFuture<UUID> =>  {
                const dataOut_1807 = new DataInOut();
                dataOut_1807.writeByte(8);
                const argsNames_1809: string[] = ["owner", "uids"];
                const argsValues_1810: any[] = [owner, uids];
                const result_1808 = ARFuture.of<UUID>();
                sCtx_1767.invokeRemoteMethodAfter("createAccessGroup", result_1808, argsNames_1809, argsValues_1810);
                const reqId_1806 = sCtx_1767.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1808 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_1767, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1808.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1807.writeInt(reqId_1806);
                FastMeta.META_UUID.serialize(sCtx_1767, owner, dataOut_1807);
                SerializerPackNumber.INSTANCE.put(dataOut_1807, uids.length);
                for (const el_1811 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1767, el_1811, dataOut_1807);
                    
                }
                sCtx_1767.sendToRemote(dataOut_1807.toArray());
                return result_1808;
                
            }
            , addToAccessGroup: (groupId: UUID, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_1813 = new DataInOut();
                dataOut_1813.writeByte(9);
                const argsNames_1815: string[] = ["groupId", "uid"];
                const argsValues_1816: any[] = [groupId, uid];
                const result_1814 = ARFuture.of<boolean>();
                sCtx_1767.invokeRemoteMethodAfter("addToAccessGroup", result_1814, argsNames_1815, argsValues_1816);
                const reqId_1812 = sCtx_1767.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1814 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1767, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1814.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1813.writeInt(reqId_1812);
                FastMeta.META_UUID.serialize(sCtx_1767, groupId, dataOut_1813);
                FastMeta.META_UUID.serialize(sCtx_1767, uid, dataOut_1813);
                sCtx_1767.sendToRemote(dataOut_1813.toArray());
                return result_1814;
                
            }
            , removeFromAccessGroup: (groupId: UUID, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_1818 = new DataInOut();
                dataOut_1818.writeByte(10);
                const argsNames_1820: string[] = ["groupId", "uid"];
                const argsValues_1821: any[] = [groupId, uid];
                const result_1819 = ARFuture.of<boolean>();
                sCtx_1767.invokeRemoteMethodAfter("removeFromAccessGroup", result_1819, argsNames_1820, argsValues_1821);
                const reqId_1817 = sCtx_1767.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1819 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1767, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1819.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1818.writeInt(reqId_1817);
                FastMeta.META_UUID.serialize(sCtx_1767, groupId, dataOut_1818);
                FastMeta.META_UUID.serialize(sCtx_1767, uid, dataOut_1818);
                sCtx_1767.sendToRemote(dataOut_1818.toArray());
                return result_1819;
                
            }
            , checkAccessForSendMessage: (uid: UUID): AFuture =>  {
                const dataOut_1823 = new DataInOut();
                dataOut_1823.writeByte(11);
                const argsNames_1825: string[] = ["uid"];
                const argsValues_1826: any[] = [uid];
                const result_1824 = AFuture.make();
                sCtx_1767.invokeRemoteMethodAfter("checkAccessForSendMessage", result_1824, argsNames_1825, argsValues_1826);
                const reqId_1822 = sCtx_1767.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1824 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1824.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1823.writeInt(reqId_1822);
                FastMeta.META_UUID.serialize(sCtx_1767, uid, dataOut_1823);
                sCtx_1767.sendToRemote(dataOut_1823.toArray());
                return result_1824;
                
            }
            , resolverServers: (sid: number[]): void =>  {
                const dataOut_1828 = new DataInOut();
                dataOut_1828.writeByte(12);
                const argsNames_1830: string[] = ["sid"];
                const argsValues_1831: any[] = [sid];
                sCtx_1767.invokeRemoteMethodAfter("resolverServers", null, argsNames_1830, argsValues_1831);
                SerializerPackNumber.INSTANCE.put(dataOut_1828, sid.length);
                for (const el_1832 of sid)  {
                    dataOut_1828.writeShort(el_1832);
                    
                }
                sCtx_1767.sendToRemote(dataOut_1828.toArray());
                
            }
            , resolveClouds: (uids: UUID[]): void =>  {
                const dataOut_1834 = new DataInOut();
                dataOut_1834.writeByte(13);
                const argsNames_1836: string[] = ["uids"];
                const argsValues_1837: any[] = [uids];
                sCtx_1767.invokeRemoteMethodAfter("resolveClouds", null, argsNames_1836, argsValues_1837);
                SerializerPackNumber.INSTANCE.put(dataOut_1834, uids.length);
                for (const el_1838 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1767, el_1838, dataOut_1834);
                    
                }
                sCtx_1767.sendToRemote(dataOut_1834.toArray());
                
            }
            , reportAppliedConfig: (configs: AppliedConfig[]): void =>  {
                const dataOut_1840 = new DataInOut();
                dataOut_1840.writeByte(38);
                const argsNames_1842: string[] = ["configs"];
                const argsValues_1843: any[] = [configs];
                sCtx_1767.invokeRemoteMethodAfter("reportAppliedConfig", null, argsNames_1842, argsValues_1843);
                SerializerPackNumber.INSTANCE.put(dataOut_1840, configs.length);
                for (const el_1844 of configs)  {
                    AppliedConfig.META.serialize(sCtx_1767, el_1844, dataOut_1840);
                    
                }
                sCtx_1767.sendToRemote(dataOut_1840.toArray());
                
            }
            , getAccessGroups: (uid: UUID): ARFuture<UUID[]> =>  {
                const dataOut_1846 = new DataInOut();
                dataOut_1846.writeByte(14);
                const argsNames_1848: string[] = ["uid"];
                const argsValues_1849: any[] = [uid];
                const result_1847 = ARFuture.of<UUID[]>();
                sCtx_1767.invokeRemoteMethodAfter("getAccessGroups", result_1847, argsNames_1848, argsValues_1849);
                const reqId_1845 = sCtx_1767.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1847 as ARFuture<UUID[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_UUID).deserialize(sCtx_1767, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1847.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1846.writeInt(reqId_1845);
                FastMeta.META_UUID.serialize(sCtx_1767, uid, dataOut_1846);
                sCtx_1767.sendToRemote(dataOut_1846.toArray());
                return result_1847;
                
            }
            , getAccessGroup: (groupId: UUID): ARFuture<AccessGroup> =>  {
                const dataOut_1851 = new DataInOut();
                dataOut_1851.writeByte(15);
                const argsNames_1853: string[] = ["groupId"];
                const argsValues_1854: any[] = [groupId];
                const result_1852 = ARFuture.of<AccessGroup>();
                sCtx_1767.invokeRemoteMethodAfter("getAccessGroup", result_1852, argsNames_1853, argsValues_1854);
                const reqId_1850 = sCtx_1767.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1852 as ARFuture<AccessGroup>).tryDone(AccessGroup.META.deserialize(sCtx_1767, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1852.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1851.writeInt(reqId_1850);
                FastMeta.META_UUID.serialize(sCtx_1767, groupId, dataOut_1851);
                sCtx_1767.sendToRemote(dataOut_1851.toArray());
                return result_1852;
                
            }
            , getAllAccessedClients: (uid: UUID): ARFuture<UUID[]> =>  {
                const dataOut_1856 = new DataInOut();
                dataOut_1856.writeByte(16);
                const argsNames_1858: string[] = ["uid"];
                const argsValues_1859: any[] = [uid];
                const result_1857 = ARFuture.of<UUID[]>();
                sCtx_1767.invokeRemoteMethodAfter("getAllAccessedClients", result_1857, argsNames_1858, argsValues_1859);
                const reqId_1855 = sCtx_1767.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1857 as ARFuture<UUID[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_UUID).deserialize(sCtx_1767, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1857.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1856.writeInt(reqId_1855);
                FastMeta.META_UUID.serialize(sCtx_1767, uid, dataOut_1856);
                sCtx_1767.sendToRemote(dataOut_1856.toArray());
                return result_1857;
                
            }
            , checkAccessForSendMessage2: (uid1: UUID, uid2: UUID): ARFuture<boolean> =>  {
                const dataOut_1861 = new DataInOut();
                dataOut_1861.writeByte(17);
                const argsNames_1863: string[] = ["uid1", "uid2"];
                const argsValues_1864: any[] = [uid1, uid2];
                const result_1862 = ARFuture.of<boolean>();
                sCtx_1767.invokeRemoteMethodAfter("checkAccessForSendMessage2", result_1862, argsNames_1863, argsValues_1864);
                const reqId_1860 = sCtx_1767.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1862 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1767, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1862.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1861.writeInt(reqId_1860);
                FastMeta.META_UUID.serialize(sCtx_1767, uid1, dataOut_1861);
                FastMeta.META_UUID.serialize(sCtx_1767, uid2, dataOut_1861);
                sCtx_1767.sendToRemote(dataOut_1861.toArray());
                return result_1862;
                
            }
            , sendTelemetry: (telemetry: Telemetry): void =>  {
                const dataOut_1866 = new DataInOut();
                dataOut_1866.writeByte(18);
                const argsNames_1868: string[] = ["telemetry"];
                const argsValues_1869: any[] = [telemetry];
                sCtx_1767.invokeRemoteMethodAfter("sendTelemetry", null, argsNames_1868, argsValues_1869);
                Telemetry.META.serialize(sCtx_1767, telemetry, dataOut_1866);
                sCtx_1767.sendToRemote(dataOut_1866.toArray());
                
            }
            , requestAccessGroupsForClients: (uids: UUID[]): void =>  {
                const dataOut_1871 = new DataInOut();
                dataOut_1871.writeByte(19);
                const argsNames_1873: string[] = ["uids"];
                const argsValues_1874: any[] = [uids];
                sCtx_1767.invokeRemoteMethodAfter("requestAccessGroupsForClients", null, argsNames_1873, argsValues_1874);
                SerializerPackNumber.INSTANCE.put(dataOut_1871, uids.length);
                for (const el_1875 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1767, el_1875, dataOut_1871);
                    
                }
                sCtx_1767.sendToRemote(dataOut_1871.toArray());
                
            }
            , requestAccessGroupsItems: (ids: UUID[]): void =>  {
                const dataOut_1877 = new DataInOut();
                dataOut_1877.writeByte(20);
                const argsNames_1879: string[] = ["ids"];
                const argsValues_1880: any[] = [ids];
                sCtx_1767.invokeRemoteMethodAfter("requestAccessGroupsItems", null, argsNames_1879, argsValues_1880);
                SerializerPackNumber.INSTANCE.put(dataOut_1877, ids.length);
                for (const el_1881 of ids)  {
                    FastMeta.META_UUID.serialize(sCtx_1767, el_1881, dataOut_1877);
                    
                }
                sCtx_1767.sendToRemote(dataOut_1877.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_1883 = new DataInOut();
                dataOut_1883.writeByte(22);
                const argsNames_1885: string[] = ["uid", "groups"];
                const argsValues_1886: any[] = [uid, groups];
                sCtx_1767.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_1885, argsValues_1886);
                FastMeta.META_UUID.serialize(sCtx_1767, uid, dataOut_1883);
                SerializerPackNumber.INSTANCE.put(dataOut_1883, groups.length);
                for (const el_1887 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1767, el_1887, dataOut_1883);
                    
                }
                sCtx_1767.sendToRemote(dataOut_1883.toArray());
                
            }
            , addItemsToAccessGroup: (id: UUID, groups: UUID[]): void =>  {
                const dataOut_1889 = new DataInOut();
                dataOut_1889.writeByte(23);
                const argsNames_1891: string[] = ["id", "groups"];
                const argsValues_1892: any[] = [id, groups];
                sCtx_1767.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_1891, argsValues_1892);
                FastMeta.META_UUID.serialize(sCtx_1767, id, dataOut_1889);
                SerializerPackNumber.INSTANCE.put(dataOut_1889, groups.length);
                for (const el_1893 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1767, el_1893, dataOut_1889);
                    
                }
                sCtx_1767.sendToRemote(dataOut_1889.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: UUID, groups: UUID[]): void =>  {
                const dataOut_1895 = new DataInOut();
                dataOut_1895.writeByte(24);
                const argsNames_1897: string[] = ["id", "groups"];
                const argsValues_1898: any[] = [id, groups];
                sCtx_1767.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_1897, argsValues_1898);
                FastMeta.META_UUID.serialize(sCtx_1767, id, dataOut_1895);
                SerializerPackNumber.INSTANCE.put(dataOut_1895, groups.length);
                for (const el_1899 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1767, el_1899, dataOut_1895);
                    
                }
                sCtx_1767.sendToRemote(dataOut_1895.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_1901 = new DataInOut();
                dataOut_1901.writeByte(25);
                const argsNames_1903: string[] = ["uid", "groups"];
                const argsValues_1904: any[] = [uid, groups];
                sCtx_1767.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_1903, argsValues_1904);
                FastMeta.META_UUID.serialize(sCtx_1767, uid, dataOut_1901);
                SerializerPackNumber.INSTANCE.put(dataOut_1901, groups.length);
                for (const el_1905 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1767, el_1905, dataOut_1901);
                    
                }
                sCtx_1767.sendToRemote(dataOut_1901.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_1907 = new DataInOut();
                dataOut_1907.writeByte(26);
                const argsNames_1909: string[] = ["uid", "groups"];
                const argsValues_1910: any[] = [uid, groups];
                sCtx_1767.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_1909, argsValues_1910);
                FastMeta.META_UUID.serialize(sCtx_1767, uid, dataOut_1907);
                SerializerPackNumber.INSTANCE.put(dataOut_1907, groups.length);
                for (const el_1911 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1767, el_1911, dataOut_1907);
                    
                }
                sCtx_1767.sendToRemote(dataOut_1907.toArray());
                
            }
            , requestAllAccessedClients: (uids: UUID[]): void =>  {
                const dataOut_1913 = new DataInOut();
                dataOut_1913.writeByte(27);
                const argsNames_1915: string[] = ["uids"];
                const argsValues_1916: any[] = [uids];
                sCtx_1767.invokeRemoteMethodAfter("requestAllAccessedClients", null, argsNames_1915, argsValues_1916);
                SerializerPackNumber.INSTANCE.put(dataOut_1913, uids.length);
                for (const el_1917 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1767, el_1917, dataOut_1913);
                    
                }
                sCtx_1767.sendToRemote(dataOut_1913.toArray());
                
            }
            , requestAccessCheck: (requests: AccessCheckPair[]): void =>  {
                const dataOut_1919 = new DataInOut();
                dataOut_1919.writeByte(28);
                const argsNames_1921: string[] = ["requests"];
                const argsValues_1922: any[] = [requests];
                sCtx_1767.invokeRemoteMethodAfter("requestAccessCheck", null, argsNames_1921, argsValues_1922);
                SerializerPackNumber.INSTANCE.put(dataOut_1919, requests.length);
                for (const el_1923 of requests)  {
                    AccessCheckPair.META.serialize(sCtx_1767, el_1923, dataOut_1919);
                    
                }
                sCtx_1767.sendToRemote(dataOut_1919.toArray());
                
            }
            , getClientActivity: (uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<ClientActivity[]> =>  {
                const dataOut_1925 = new DataInOut();
                dataOut_1925.writeByte(29);
                const argsNames_1927: string[] = ["uid", "fromTime", "toTime", "limit"];
                const argsValues_1928: any[] = [uid, fromTime, toTime, limit];
                const result_1926 = ARFuture.of<ClientActivity[]>();
                sCtx_1767.invokeRemoteMethodAfter("getClientActivity", result_1926, argsNames_1927, argsValues_1928);
                const reqId_1924 = sCtx_1767.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1926 as ARFuture<ClientActivity[]>).tryDone(FastMeta.getMetaArray(ClientActivity.META).deserialize(sCtx_1767, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1926.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1925.writeInt(reqId_1924);
                FastMeta.META_UUID.serialize(sCtx_1767, uid, dataOut_1925);
                dataOut_1925.writeLong(fromTime);
                dataOut_1925.writeLong(toTime);
                dataOut_1925.writeInt(limit);
                sCtx_1767.sendToRemote(dataOut_1925.toArray());
                return result_1926;
                
            }
            , searchClientLogs: (uid: UUID, query: string, limit: number): ARFuture<ClientLogEntry[]> =>  {
                const dataOut_1930 = new DataInOut();
                dataOut_1930.writeByte(30);
                const argsNames_1932: string[] = ["uid", "query", "limit"];
                const argsValues_1933: any[] = [uid, query, limit];
                const result_1931 = ARFuture.of<ClientLogEntry[]>();
                sCtx_1767.invokeRemoteMethodAfter("searchClientLogs", result_1931, argsNames_1932, argsValues_1933);
                const reqId_1929 = sCtx_1767.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1931 as ARFuture<ClientLogEntry[]>).tryDone(FastMeta.getMetaArray(ClientLogEntry.META).deserialize(sCtx_1767, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1931.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1930.writeInt(reqId_1929);
                FastMeta.META_UUID.serialize(sCtx_1767, uid, dataOut_1930);
                const stringBytes_1934 = new TextEncoder().encode(query);
                SerializerPackNumber.INSTANCE.put(dataOut_1930, stringBytes_1934.length);
                dataOut_1930.write(stringBytes_1934);
                dataOut_1930.writeInt(limit);
                sCtx_1767.sendToRemote(dataOut_1930.toArray());
                return result_1931;
                
            }
            , getClientConnections: (uid: UUID, limit: number): ARFuture<ClientConnectionInfo[]> =>  {
                const dataOut_1937 = new DataInOut();
                dataOut_1937.writeByte(31);
                const argsNames_1939: string[] = ["uid", "limit"];
                const argsValues_1940: any[] = [uid, limit];
                const result_1938 = ARFuture.of<ClientConnectionInfo[]>();
                sCtx_1767.invokeRemoteMethodAfter("getClientConnections", result_1938, argsNames_1939, argsValues_1940);
                const reqId_1936 = sCtx_1767.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1938 as ARFuture<ClientConnectionInfo[]>).tryDone(FastMeta.getMetaArray(ClientConnectionInfo.META).deserialize(sCtx_1767, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1938.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1937.writeInt(reqId_1936);
                FastMeta.META_UUID.serialize(sCtx_1767, uid, dataOut_1937);
                dataOut_1937.writeInt(limit);
                sCtx_1767.sendToRemote(dataOut_1937.toArray());
                return result_1938;
                
            }
            , getClientMessages: (uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<MessageInfo[]> =>  {
                const dataOut_1942 = new DataInOut();
                dataOut_1942.writeByte(32);
                const argsNames_1944: string[] = ["uid", "fromTime", "toTime", "limit"];
                const argsValues_1945: any[] = [uid, fromTime, toTime, limit];
                const result_1943 = ARFuture.of<MessageInfo[]>();
                sCtx_1767.invokeRemoteMethodAfter("getClientMessages", result_1943, argsNames_1944, argsValues_1945);
                const reqId_1941 = sCtx_1767.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1943 as ARFuture<MessageInfo[]>).tryDone(FastMeta.getMetaArray(MessageInfo.META).deserialize(sCtx_1767, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1943.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1942.writeInt(reqId_1941);
                FastMeta.META_UUID.serialize(sCtx_1767, uid, dataOut_1942);
                dataOut_1942.writeLong(fromTime);
                dataOut_1942.writeLong(toTime);
                dataOut_1942.writeInt(limit);
                sCtx_1767.sendToRemote(dataOut_1942.toArray());
                return result_1943;
                
            }
            , setNextReadDelay: (delayMillis: bigint): void =>  {
                const dataOut_1947 = new DataInOut();
                dataOut_1947.writeByte(33);
                const argsNames_1949: string[] = ["delayMillis"];
                const argsValues_1950: any[] = [delayMillis];
                sCtx_1767.invokeRemoteMethodAfter("setNextReadDelay", null, argsNames_1949, argsValues_1950);
                dataOut_1947.writeLong(delayMillis);
                sCtx_1767.sendToRemote(dataOut_1947.toArray());
                
            }
            , getUap: (uid: UUID): ARFuture<Uap> =>  {
                const dataOut_1952 = new DataInOut();
                dataOut_1952.writeByte(34);
                const argsNames_1954: string[] = ["uid"];
                const argsValues_1955: any[] = [uid];
                const result_1953 = ARFuture.of<Uap>();
                sCtx_1767.invokeRemoteMethodAfter("getUap", result_1953, argsNames_1954, argsValues_1955);
                const reqId_1951 = sCtx_1767.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1953 as ARFuture<Uap>).tryDone(Uap.META.deserialize(sCtx_1767, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1953.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1952.writeInt(reqId_1951);
                FastMeta.META_UUID.serialize(sCtx_1767, uid, dataOut_1952);
                sCtx_1767.sendToRemote(dataOut_1952.toArray());
                return result_1953;
                
            }
            , requestWebRtcSession: (uid: UUID): ARFuture<WebRtcSession> =>  {
                const dataOut_1957 = new DataInOut();
                dataOut_1957.writeByte(40);
                const argsNames_1959: string[] = ["uid"];
                const argsValues_1960: any[] = [uid];
                const result_1958 = ARFuture.of<WebRtcSession>();
                sCtx_1767.invokeRemoteMethodAfter("requestWebRtcSession", result_1958, argsNames_1959, argsValues_1960);
                const reqId_1956 = sCtx_1767.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1958 as ARFuture<WebRtcSession>).tryDone(WebRtcSession.META.deserialize(sCtx_1767, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1958.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1957.writeInt(reqId_1956);
                FastMeta.META_UUID.serialize(sCtx_1767, uid, dataOut_1957);
                sCtx_1767.sendToRemote(dataOut_1957.toArray());
                return result_1958;
                
            }
            , publishWebRtcSession: (session: WebRtcSession): void =>  {
                const dataOut_1962 = new DataInOut();
                dataOut_1962.writeByte(41);
                const argsNames_1964: string[] = ["session"];
                const argsValues_1965: any[] = [session];
                sCtx_1767.invokeRemoteMethodAfter("publishWebRtcSession", null, argsNames_1964, argsValues_1965);
                WebRtcSession.META.serialize(sCtx_1767, session, dataOut_1962);
                sCtx_1767.sendToRemote(dataOut_1962.toArray());
                
            }
            , selfDestruct: (): AFuture =>  {
                const dataOut_1967 = new DataInOut();
                dataOut_1967.writeByte(42);
                const argsNames_1969: string[] = [];
                const argsValues_1970: any[] = [];
                const result_1968 = AFuture.make();
                sCtx_1767.invokeRemoteMethodAfter("selfDestruct", result_1968, argsNames_1969, argsValues_1970);
                const reqId_1966 = sCtx_1767.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1968 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1968.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1967.writeInt(reqId_1966);
                sCtx_1767.sendToRemote(dataOut_1967.toArray());
                return result_1968;
                
            }
            , getServers: (): ARFuture<ServerDescriptorWithGeo[]> =>  {
                const dataOut_1972 = new DataInOut();
                dataOut_1972.writeByte(43);
                const argsNames_1974: string[] = [];
                const argsValues_1975: any[] = [];
                const result_1973 = ARFuture.of<ServerDescriptorWithGeo[]>();
                sCtx_1767.invokeRemoteMethodAfter("getServers", result_1973, argsNames_1974, argsValues_1975);
                const reqId_1971 = sCtx_1767.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1973 as ARFuture<ServerDescriptorWithGeo[]>).tryDone(FastMeta.getMetaArray(ServerDescriptorWithGeo.META).deserialize(sCtx_1767, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1973.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1972.writeInt(reqId_1971);
                sCtx_1767.sendToRemote(dataOut_1972.toArray());
                return result_1973;
                
            }
            , openClient(uid: UUID, factory: (api: ServerApiByUidRemote) => any, converter: BytesConverter, ...keys: any[]): ServerApiByUidRemote  {
                return sCtx_1767.findContext(ctx =>  {
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
            case 40: // requestWebRtcSession
            case 41: // publishWebRtcSession
            case 42: // selfDestruct
            case 43: // getServers
            return true;
            default: return false;
            
        }
        
    }
    
}
export class LoginApiGetTimeUTCArgumentsMetaBodyImpl implements FastMetaType<LoginApiGetTimeUTCArguments>  {
    serialize(sCtx_1976: MetaContext, obj_1978: LoginApiGetTimeUTCArguments, _out_1979: DataOut): void  {
        
    }
    deserialize(sCtx_1977: MetaContext, in__1980: DataIn): LoginApiGetTimeUTCArguments  {
        try  {
            return new LoginApiGetTimeUTCArguments();
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: LoginApiGetTimeUTCArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        return hash | 0;
        
    }
    metaEquals(v1: LoginApiGetTimeUTCArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof LoginApiGetTimeUTCArguments)) return false;
        return true;
        
    }
    metaToString(obj: LoginApiGetTimeUTCArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('LoginApiGetTimeUTCArguments(');
        res.add(')');
        
    }
    public serializeToBytes(obj: LoginApiGetTimeUTCArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): LoginApiGetTimeUTCArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): LoginApiGetTimeUTCArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class LoginApiLoginByUIDArgumentsMetaBodyImpl implements FastMetaType<LoginApiLoginByUIDArguments>  {
    serialize(sCtx_1981: MetaContext, obj_1982: LoginApiLoginByUIDArguments, _out_1983: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1981, obj_1982.uid, _out_1983);
        LoginStream.META.serialize(sCtx_1981, obj_1982.data, _out_1983);
        
    }
    deserialize(sCtx_1981: MetaContext, in__1984: DataIn): LoginApiLoginByUIDArguments  {
        try  {
            let uid_1985: UUID;
            let data_1986: LoginStream;
            uid_1985 = FastMeta.META_UUID.deserialize(sCtx_1981, in__1984);
            data_1986 = LoginStream.META.deserialize(sCtx_1981, in__1984);
            return new LoginApiLoginByUIDArguments(uid_1985, data_1986);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: LoginApiLoginByUIDArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        hash = 37 * hash + LoginStream.META.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: LoginApiLoginByUIDArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof LoginApiLoginByUIDArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        if (!LoginStream.META.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: LoginApiLoginByUIDArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('LoginApiLoginByUIDArguments(');
        res.add('uid:').add(obj.uid);
        res.add(', ');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: LoginApiLoginByUIDArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): LoginApiLoginByUIDArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): LoginApiLoginByUIDArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class LoginApiLoginByAliasArgumentsMetaBodyImpl implements FastMetaType<LoginApiLoginByAliasArguments>  {
    serialize(sCtx_1987: MetaContext, obj_1988: LoginApiLoginByAliasArguments, _out_1989: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1987, obj_1988.alias, _out_1989);
        LoginStream.META.serialize(sCtx_1987, obj_1988.data, _out_1989);
        
    }
    deserialize(sCtx_1987: MetaContext, in__1990: DataIn): LoginApiLoginByAliasArguments  {
        try  {
            let alias_1991: UUID;
            let data_1992: LoginStream;
            alias_1991 = FastMeta.META_UUID.deserialize(sCtx_1987, in__1990);
            data_1992 = LoginStream.META.deserialize(sCtx_1987, in__1990);
            return new LoginApiLoginByAliasArguments(alias_1991, data_1992);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: LoginApiLoginByAliasArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.alias);
        hash = 37 * hash + LoginStream.META.metaHashCode(obj.data);
        return hash | 0;
        
    }
    metaEquals(v1: LoginApiLoginByAliasArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof LoginApiLoginByAliasArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.alias, v2.alias)) return false;
        if (!LoginStream.META.metaEquals(v1.data, v2.data)) return false;
        return true;
        
    }
    metaToString(obj: LoginApiLoginByAliasArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('LoginApiLoginByAliasArguments(');
        res.add('alias:').add(obj.alias);
        res.add(', ');
        res.add('data:').add(obj.data);
        res.add(')');
        
    }
    public serializeToBytes(obj: LoginApiLoginByAliasArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): LoginApiLoginByAliasArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): LoginApiLoginByAliasArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class LoginApiGetMyIpArgumentsMetaBodyImpl implements FastMetaType<LoginApiGetMyIpArguments>  {
    serialize(sCtx_1993: MetaContext, obj_1995: LoginApiGetMyIpArguments, _out_1996: DataOut): void  {
        
    }
    deserialize(sCtx_1994: MetaContext, in__1997: DataIn): LoginApiGetMyIpArguments  {
        try  {
            return new LoginApiGetMyIpArguments();
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: LoginApiGetMyIpArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        return hash | 0;
        
    }
    metaEquals(v1: LoginApiGetMyIpArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof LoginApiGetMyIpArguments)) return false;
        return true;
        
    }
    metaToString(obj: LoginApiGetMyIpArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('LoginApiGetMyIpArguments(');
        res.add(')');
        
    }
    public serializeToBytes(obj: LoginApiGetMyIpArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): LoginApiGetMyIpArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): LoginApiGetMyIpArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class LoginApiMetaImpl implements FastMetaApi<LoginApi, LoginApiRemote>  {
    makeLocal(ctx: MetaContext, dataIn: DataIn): void  {
        this.makeLocal_fromDataIn(ctx, dataIn, ctx.getLocalApi() as LoginApi);
        
    }
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
                    const reqId_1998 = dataIn.readInt();
                    const argsObject_1999 = new LoginApiGetTimeUTCArguments();
                    const argsNames_2000: string[] = [];
                    const argsValues_2001: any[] = [];
                    ctx.invokeLocalMethodBefore("getTimeUTC", argsNames_2000, argsValues_2001);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getTimeUTCArguments === "function" ? (localApi as any).getTimeUTCArguments(argsObject_1999) : localApi.getTimeUTC());
                    ctx.invokeLocalMethodAfter("getTimeUTC", resultFuture, argsNames_2000, argsValues_2001);
                    resultFuture.to((v_2003: bigint) =>  {
                        const data_2002 = new DataInOut();
                        data_2002.writeLong(v_2003);
                        ctx.sendResultToRemote(reqId_1998, data_2002.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let uid_2005: UUID;
                    let data_2006: LoginStream;
                    uid_2005 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_2006 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsObject_2007 = new LoginApiLoginByUIDArguments(uid_2005, data_2006);
                    const argsNames_2008: string[] = ["uid", "data"];
                    const argsValues_2009: any[] = [uid_2005, data_2006];
                    ctx.invokeLocalMethodBefore("loginByUID", argsNames_2008, argsValues_2009);
                    (typeof (localApi as any).loginByUIDArguments === "function" ? (localApi as any).loginByUIDArguments(argsObject_2007) : localApi.loginByUID(uid_2005, data_2006));
                    ctx.invokeLocalMethodAfter("loginByUID", null, argsNames_2008, argsValues_2009);
                    break;
                    
                }
                case 5:  {
                    let alias_2011: UUID;
                    let data_2012: LoginStream;
                    alias_2011 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_2012 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsObject_2013 = new LoginApiLoginByAliasArguments(alias_2011, data_2012);
                    const argsNames_2014: string[] = ["alias", "data"];
                    const argsValues_2015: any[] = [alias_2011, data_2012];
                    ctx.invokeLocalMethodBefore("loginByAlias", argsNames_2014, argsValues_2015);
                    (typeof (localApi as any).loginByAliasArguments === "function" ? (localApi as any).loginByAliasArguments(argsObject_2013) : localApi.loginByAlias(alias_2011, data_2012));
                    ctx.invokeLocalMethodAfter("loginByAlias", null, argsNames_2014, argsValues_2015);
                    break;
                    
                }
                case 6:  {
                    const reqId_2016 = dataIn.readInt();
                    const argsObject_2017 = new LoginApiGetMyIpArguments();
                    const argsNames_2018: string[] = [];
                    const argsValues_2019: any[] = [];
                    ctx.invokeLocalMethodBefore("getMyIp", argsNames_2018, argsValues_2019);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getMyIpArguments === "function" ? (localApi as any).getMyIpArguments(argsObject_2017) : localApi.getMyIp());
                    ctx.invokeLocalMethodAfter("getMyIp", resultFuture, argsNames_2018, argsValues_2019);
                    resultFuture.to((v_2021: IpInfo) =>  {
                        const data_2020 = new DataInOut();
                        IpInfo.META.serialize(ctx, v_2021, data_2020);
                        ctx.sendResultToRemote(reqId_2016, data_2020.toArray());
                        
                    }
                    );
                    break;
                    
                }
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: LoginApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_2022: MetaContext): LoginApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2022.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2022.flush();
                
            }
            , getFastMetaContext: () => sCtx_2022, getTimeUTC: (): ARFuture<bigint> =>  {
                const dataOut_2024 = new DataInOut();
                dataOut_2024.writeByte(3);
                const argsNames_2026: string[] = [];
                const argsValues_2027: any[] = [];
                const result_2025 = ARFuture.of<bigint>();
                sCtx_2022.invokeRemoteMethodAfter("getTimeUTC", result_2025, argsNames_2026, argsValues_2027);
                const reqId_2023 = sCtx_2022.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2025 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_2022, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2025.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2024.writeInt(reqId_2023);
                sCtx_2022.sendToRemote(dataOut_2024.toArray());
                return result_2025;
                
            }
            , loginByUID: (uid: UUID, data: LoginStream): void =>  {
                const dataOut_2029 = new DataInOut();
                dataOut_2029.writeByte(4);
                const argsNames_2031: string[] = ["uid", "data"];
                const argsValues_2032: any[] = [uid, data];
                sCtx_2022.invokeRemoteMethodAfter("loginByUID", null, argsNames_2031, argsValues_2032);
                FastMeta.META_UUID.serialize(sCtx_2022, uid, dataOut_2029);
                LoginStream.META.serialize(sCtx_2022, data, dataOut_2029);
                sCtx_2022.sendToRemote(dataOut_2029.toArray());
                
            }
            , loginByAlias: (alias: UUID, data: LoginStream): void =>  {
                const dataOut_2034 = new DataInOut();
                dataOut_2034.writeByte(5);
                const argsNames_2036: string[] = ["alias", "data"];
                const argsValues_2037: any[] = [alias, data];
                sCtx_2022.invokeRemoteMethodAfter("loginByAlias", null, argsNames_2036, argsValues_2037);
                FastMeta.META_UUID.serialize(sCtx_2022, alias, dataOut_2034);
                LoginStream.META.serialize(sCtx_2022, data, dataOut_2034);
                sCtx_2022.sendToRemote(dataOut_2034.toArray());
                
            }
            , getMyIp: (): ARFuture<IpInfo> =>  {
                const dataOut_2039 = new DataInOut();
                dataOut_2039.writeByte(6);
                const argsNames_2041: string[] = [];
                const argsValues_2042: any[] = [];
                const result_2040 = ARFuture.of<IpInfo>();
                sCtx_2022.invokeRemoteMethodAfter("getMyIp", result_2040, argsNames_2041, argsValues_2042);
                const reqId_2038 = sCtx_2022.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2040 as ARFuture<IpInfo>).tryDone(IpInfo.META.deserialize(sCtx_2022, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2040.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2039.writeInt(reqId_2038);
                sCtx_2022.sendToRemote(dataOut_2039.toArray());
                return result_2040;
                
            }
            , openLoginByUID(uid: UUID, factory: (api: AuthorizedApiRemote) => ClientApiSafe, converter: BytesConverter, ...keys: any[]): AuthorizedApiRemote  {
                return sCtx_2022.findContext(ctx =>  {
                    ctx.onFlushData(data => this.loginByUID(uid, LoginStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((AuthorizedApi as any).META));
                    
                }
                , ...keys).makeRemote((AuthorizedApi as any).META) as AuthorizedApiRemote;
                
            }
            , openLoginByAlias(alias: UUID, factory: (api: AuthorizedApiRemote) => ClientApiSafe, converter: BytesConverter, ...keys: any[]): AuthorizedApiRemote  {
                return sCtx_2022.findContext(ctx =>  {
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
    makeLocal(ctx: MetaContext, dataIn: DataIn): void  {
        this.makeLocal_fromDataIn(ctx, dataIn, ctx.getLocalApi() as ServerApiByUidClient);
        
    }
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
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ServerApiByUidClient): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_2043: MetaContext): ServerApiByUidClientRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2043.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2043.flush();
                
            }
            , getFastMetaContext: () => sCtx_2043, 
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
export class ServerApiByUidGetBalanceArgumentsMetaBodyImpl implements FastMetaType<ServerApiByUidGetBalanceArguments>  {
    serialize(sCtx_2044: MetaContext, obj_2046: ServerApiByUidGetBalanceArguments, _out_2047: DataOut): void  {
        
    }
    deserialize(sCtx_2045: MetaContext, in__2048: DataIn): ServerApiByUidGetBalanceArguments  {
        try  {
            return new ServerApiByUidGetBalanceArguments();
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerApiByUidGetBalanceArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        return hash | 0;
        
    }
    metaEquals(v1: ServerApiByUidGetBalanceArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerApiByUidGetBalanceArguments)) return false;
        return true;
        
    }
    metaToString(obj: ServerApiByUidGetBalanceArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerApiByUidGetBalanceArguments(');
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerApiByUidGetBalanceArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerApiByUidGetBalanceArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerApiByUidGetBalanceArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerApiByUidSetParentArgumentsMetaBodyImpl implements FastMetaType<ServerApiByUidSetParentArguments>  {
    serialize(sCtx_2049: MetaContext, obj_2050: ServerApiByUidSetParentArguments, _out_2051: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2049, obj_2050.uid, _out_2051);
        
    }
    deserialize(sCtx_2049: MetaContext, in__2052: DataIn): ServerApiByUidSetParentArguments  {
        try  {
            let uid_2053: UUID;
            uid_2053 = FastMeta.META_UUID.deserialize(sCtx_2049, in__2052);
            return new ServerApiByUidSetParentArguments(uid_2053);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerApiByUidSetParentArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        return hash | 0;
        
    }
    metaEquals(v1: ServerApiByUidSetParentArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerApiByUidSetParentArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        return true;
        
    }
    metaToString(obj: ServerApiByUidSetParentArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerApiByUidSetParentArguments(');
        res.add('uid:').add(obj.uid);
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerApiByUidSetParentArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerApiByUidSetParentArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerApiByUidSetParentArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerApiByUidBlockArgumentsMetaBodyImpl implements FastMetaType<ServerApiByUidBlockArguments>  {
    serialize(sCtx_2054: MetaContext, obj_2056: ServerApiByUidBlockArguments, _out_2057: DataOut): void  {
        
    }
    deserialize(sCtx_2055: MetaContext, in__2058: DataIn): ServerApiByUidBlockArguments  {
        try  {
            return new ServerApiByUidBlockArguments();
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerApiByUidBlockArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        return hash | 0;
        
    }
    metaEquals(v1: ServerApiByUidBlockArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerApiByUidBlockArguments)) return false;
        return true;
        
    }
    metaToString(obj: ServerApiByUidBlockArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerApiByUidBlockArguments(');
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerApiByUidBlockArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerApiByUidBlockArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerApiByUidBlockArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerApiByUidGetPositionArgumentsMetaBodyImpl implements FastMetaType<ServerApiByUidGetPositionArguments>  {
    serialize(sCtx_2059: MetaContext, obj_2061: ServerApiByUidGetPositionArguments, _out_2062: DataOut): void  {
        
    }
    deserialize(sCtx_2060: MetaContext, in__2063: DataIn): ServerApiByUidGetPositionArguments  {
        try  {
            return new ServerApiByUidGetPositionArguments();
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerApiByUidGetPositionArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        return hash | 0;
        
    }
    metaEquals(v1: ServerApiByUidGetPositionArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerApiByUidGetPositionArguments)) return false;
        return true;
        
    }
    metaToString(obj: ServerApiByUidGetPositionArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerApiByUidGetPositionArguments(');
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerApiByUidGetPositionArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerApiByUidGetPositionArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerApiByUidGetPositionArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerApiByUidGetParentArgumentsMetaBodyImpl implements FastMetaType<ServerApiByUidGetParentArguments>  {
    serialize(sCtx_2064: MetaContext, obj_2066: ServerApiByUidGetParentArguments, _out_2067: DataOut): void  {
        
    }
    deserialize(sCtx_2065: MetaContext, in__2068: DataIn): ServerApiByUidGetParentArguments  {
        try  {
            return new ServerApiByUidGetParentArguments();
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerApiByUidGetParentArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        return hash | 0;
        
    }
    metaEquals(v1: ServerApiByUidGetParentArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerApiByUidGetParentArguments)) return false;
        return true;
        
    }
    metaToString(obj: ServerApiByUidGetParentArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerApiByUidGetParentArguments(');
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerApiByUidGetParentArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerApiByUidGetParentArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerApiByUidGetParentArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerApiByUidGetBeneficiaryArgumentsMetaBodyImpl implements FastMetaType<ServerApiByUidGetBeneficiaryArguments>  {
    serialize(sCtx_2069: MetaContext, obj_2071: ServerApiByUidGetBeneficiaryArguments, _out_2072: DataOut): void  {
        
    }
    deserialize(sCtx_2070: MetaContext, in__2073: DataIn): ServerApiByUidGetBeneficiaryArguments  {
        try  {
            return new ServerApiByUidGetBeneficiaryArguments();
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerApiByUidGetBeneficiaryArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        return hash | 0;
        
    }
    metaEquals(v1: ServerApiByUidGetBeneficiaryArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerApiByUidGetBeneficiaryArguments)) return false;
        return true;
        
    }
    metaToString(obj: ServerApiByUidGetBeneficiaryArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerApiByUidGetBeneficiaryArguments(');
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerApiByUidGetBeneficiaryArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerApiByUidGetBeneficiaryArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerApiByUidGetBeneficiaryArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerApiByUidSetBeneficiaryArgumentsMetaBodyImpl implements FastMetaType<ServerApiByUidSetBeneficiaryArguments>  {
    serialize(sCtx_2074: MetaContext, obj_2075: ServerApiByUidSetBeneficiaryArguments, _out_2076: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2074, obj_2075.uid, _out_2076);
        
    }
    deserialize(sCtx_2074: MetaContext, in__2077: DataIn): ServerApiByUidSetBeneficiaryArguments  {
        try  {
            let uid_2078: UUID;
            uid_2078 = FastMeta.META_UUID.deserialize(sCtx_2074, in__2077);
            return new ServerApiByUidSetBeneficiaryArguments(uid_2078);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerApiByUidSetBeneficiaryArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        return hash | 0;
        
    }
    metaEquals(v1: ServerApiByUidSetBeneficiaryArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerApiByUidSetBeneficiaryArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        return true;
        
    }
    metaToString(obj: ServerApiByUidSetBeneficiaryArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerApiByUidSetBeneficiaryArguments(');
        res.add('uid:').add(obj.uid);
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerApiByUidSetBeneficiaryArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerApiByUidSetBeneficiaryArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerApiByUidSetBeneficiaryArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerApiByUidGetBlockTimeArgumentsMetaBodyImpl implements FastMetaType<ServerApiByUidGetBlockTimeArguments>  {
    serialize(sCtx_2079: MetaContext, obj_2081: ServerApiByUidGetBlockTimeArguments, _out_2082: DataOut): void  {
        
    }
    deserialize(sCtx_2080: MetaContext, in__2083: DataIn): ServerApiByUidGetBlockTimeArguments  {
        try  {
            return new ServerApiByUidGetBlockTimeArguments();
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerApiByUidGetBlockTimeArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        return hash | 0;
        
    }
    metaEquals(v1: ServerApiByUidGetBlockTimeArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerApiByUidGetBlockTimeArguments)) return false;
        return true;
        
    }
    metaToString(obj: ServerApiByUidGetBlockTimeArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerApiByUidGetBlockTimeArguments(');
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerApiByUidGetBlockTimeArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerApiByUidGetBlockTimeArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerApiByUidGetBlockTimeArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerApiByUidUnblockArgumentsMetaBodyImpl implements FastMetaType<ServerApiByUidUnblockArguments>  {
    serialize(sCtx_2084: MetaContext, obj_2086: ServerApiByUidUnblockArguments, _out_2087: DataOut): void  {
        
    }
    deserialize(sCtx_2085: MetaContext, in__2088: DataIn): ServerApiByUidUnblockArguments  {
        try  {
            return new ServerApiByUidUnblockArguments();
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerApiByUidUnblockArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        return hash | 0;
        
    }
    metaEquals(v1: ServerApiByUidUnblockArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerApiByUidUnblockArguments)) return false;
        return true;
        
    }
    metaToString(obj: ServerApiByUidUnblockArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerApiByUidUnblockArguments(');
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerApiByUidUnblockArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerApiByUidUnblockArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerApiByUidUnblockArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerApiByUidCreateTimeArgumentsMetaBodyImpl implements FastMetaType<ServerApiByUidCreateTimeArguments>  {
    serialize(sCtx_2089: MetaContext, obj_2091: ServerApiByUidCreateTimeArguments, _out_2092: DataOut): void  {
        
    }
    deserialize(sCtx_2090: MetaContext, in__2093: DataIn): ServerApiByUidCreateTimeArguments  {
        try  {
            return new ServerApiByUidCreateTimeArguments();
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerApiByUidCreateTimeArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        return hash | 0;
        
    }
    metaEquals(v1: ServerApiByUidCreateTimeArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerApiByUidCreateTimeArguments)) return false;
        return true;
        
    }
    metaToString(obj: ServerApiByUidCreateTimeArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerApiByUidCreateTimeArguments(');
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerApiByUidCreateTimeArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerApiByUidCreateTimeArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerApiByUidCreateTimeArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerApiByUidOnlineTimeArgumentsMetaBodyImpl implements FastMetaType<ServerApiByUidOnlineTimeArguments>  {
    serialize(sCtx_2094: MetaContext, obj_2096: ServerApiByUidOnlineTimeArguments, _out_2097: DataOut): void  {
        
    }
    deserialize(sCtx_2095: MetaContext, in__2098: DataIn): ServerApiByUidOnlineTimeArguments  {
        try  {
            return new ServerApiByUidOnlineTimeArguments();
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerApiByUidOnlineTimeArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        return hash | 0;
        
    }
    metaEquals(v1: ServerApiByUidOnlineTimeArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerApiByUidOnlineTimeArguments)) return false;
        return true;
        
    }
    metaToString(obj: ServerApiByUidOnlineTimeArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerApiByUidOnlineTimeArguments(');
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerApiByUidOnlineTimeArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerApiByUidOnlineTimeArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerApiByUidOnlineTimeArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerApiByUidAddAccessGroupArgumentsMetaBodyImpl implements FastMetaType<ServerApiByUidAddAccessGroupArguments>  {
    serialize(sCtx_2099: MetaContext, obj_2100: ServerApiByUidAddAccessGroupArguments, _out_2101: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2099, obj_2100.groupId, _out_2101);
        
    }
    deserialize(sCtx_2099: MetaContext, in__2102: DataIn): ServerApiByUidAddAccessGroupArguments  {
        try  {
            let groupId_2103: UUID;
            groupId_2103 = FastMeta.META_UUID.deserialize(sCtx_2099, in__2102);
            return new ServerApiByUidAddAccessGroupArguments(groupId_2103);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerApiByUidAddAccessGroupArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.groupId);
        return hash | 0;
        
    }
    metaEquals(v1: ServerApiByUidAddAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerApiByUidAddAccessGroupArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.groupId, v2.groupId)) return false;
        return true;
        
    }
    metaToString(obj: ServerApiByUidAddAccessGroupArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerApiByUidAddAccessGroupArguments(');
        res.add('groupId:').add(obj.groupId);
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerApiByUidAddAccessGroupArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerApiByUidAddAccessGroupArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerApiByUidAddAccessGroupArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerApiByUidRemoveAccessGroupArgumentsMetaBodyImpl implements FastMetaType<ServerApiByUidRemoveAccessGroupArguments>  {
    serialize(sCtx_2104: MetaContext, obj_2105: ServerApiByUidRemoveAccessGroupArguments, _out_2106: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2104, obj_2105.groupId, _out_2106);
        
    }
    deserialize(sCtx_2104: MetaContext, in__2107: DataIn): ServerApiByUidRemoveAccessGroupArguments  {
        try  {
            let groupId_2108: UUID;
            groupId_2108 = FastMeta.META_UUID.deserialize(sCtx_2104, in__2107);
            return new ServerApiByUidRemoveAccessGroupArguments(groupId_2108);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerApiByUidRemoveAccessGroupArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.groupId);
        return hash | 0;
        
    }
    metaEquals(v1: ServerApiByUidRemoveAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerApiByUidRemoveAccessGroupArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.groupId, v2.groupId)) return false;
        return true;
        
    }
    metaToString(obj: ServerApiByUidRemoveAccessGroupArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerApiByUidRemoveAccessGroupArguments(');
        res.add('groupId:').add(obj.groupId);
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerApiByUidRemoveAccessGroupArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerApiByUidRemoveAccessGroupArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerApiByUidRemoveAccessGroupArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerApiByUidSetMsgQueueLimitArgumentsMetaBodyImpl implements FastMetaType<ServerApiByUidSetMsgQueueLimitArguments>  {
    serialize(sCtx_2109: MetaContext, obj_2110: ServerApiByUidSetMsgQueueLimitArguments, _out_2111: DataOut): void  {
        _out_2111.writeInt(obj_2110.limit);
        
    }
    deserialize(sCtx_2109: MetaContext, in__2112: DataIn): ServerApiByUidSetMsgQueueLimitArguments  {
        try  {
            let limit_2113: number;
            limit_2113 = in__2112.readInt();
            return new ServerApiByUidSetMsgQueueLimitArguments(limit_2113);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerApiByUidSetMsgQueueLimitArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.limit);
        return hash | 0;
        
    }
    metaEquals(v1: ServerApiByUidSetMsgQueueLimitArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerApiByUidSetMsgQueueLimitArguments)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.limit, v2.limit)) return false;
        return true;
        
    }
    metaToString(obj: ServerApiByUidSetMsgQueueLimitArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerApiByUidSetMsgQueueLimitArguments(');
        res.add('limit:').add(obj.limit);
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerApiByUidSetMsgQueueLimitArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerApiByUidSetMsgQueueLimitArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerApiByUidSetMsgQueueLimitArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerApiByUidSetMsgTimeLimitArgumentsMetaBodyImpl implements FastMetaType<ServerApiByUidSetMsgTimeLimitArguments>  {
    serialize(sCtx_2114: MetaContext, obj_2115: ServerApiByUidSetMsgTimeLimitArguments, _out_2116: DataOut): void  {
        _out_2116.writeInt(obj_2115.seconds);
        
    }
    deserialize(sCtx_2114: MetaContext, in__2117: DataIn): ServerApiByUidSetMsgTimeLimitArguments  {
        try  {
            let seconds_2118: number;
            seconds_2118 = in__2117.readInt();
            return new ServerApiByUidSetMsgTimeLimitArguments(seconds_2118);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerApiByUidSetMsgTimeLimitArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.seconds);
        return hash | 0;
        
    }
    metaEquals(v1: ServerApiByUidSetMsgTimeLimitArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerApiByUidSetMsgTimeLimitArguments)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.seconds, v2.seconds)) return false;
        return true;
        
    }
    metaToString(obj: ServerApiByUidSetMsgTimeLimitArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerApiByUidSetMsgTimeLimitArguments(');
        res.add('seconds:').add(obj.seconds);
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerApiByUidSetMsgTimeLimitArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerApiByUidSetMsgTimeLimitArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerApiByUidSetMsgTimeLimitArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerApiByUidAddServersToCloudArgumentsMetaBodyImpl implements FastMetaType<ServerApiByUidAddServersToCloudArguments>  {
    serialize(sCtx_2119: MetaContext, obj_2120: ServerApiByUidAddServersToCloudArguments, _out_2121: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_2121, obj_2120.sids.length);
        for (const el_2123 of obj_2120.sids)  {
            _out_2121.writeShort(el_2123);
            
        }
        
    }
    deserialize(sCtx_2119: MetaContext, in__2122: DataIn): ServerApiByUidAddServersToCloudArguments  {
        try  {
            let sids_2124: number[];
            const len_2126 = Number(DeserializerPackNumber.INSTANCE.put(in__2122));
            sids_2124 = new Array<number>(len_2126);
            for (let idx_2125 = 0;
            idx_2125 < len_2126;
            idx_2125++)  {
                sids_2124[idx_2125] = in__2122.readShort();
                
            }
            return new ServerApiByUidAddServersToCloudArguments(sids_2124);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerApiByUidAddServersToCloudArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_SHORT).metaHashCode(obj.sids);
        return hash | 0;
        
    }
    metaEquals(v1: ServerApiByUidAddServersToCloudArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerApiByUidAddServersToCloudArguments)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_SHORT).metaEquals(v1.sids, v2.sids)) return false;
        return true;
        
    }
    metaToString(obj: ServerApiByUidAddServersToCloudArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerApiByUidAddServersToCloudArguments(');
        res.add('sids:').add(obj.sids);
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerApiByUidAddServersToCloudArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerApiByUidAddServersToCloudArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerApiByUidAddServersToCloudArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerApiByUidRemoveServersFromCloudArgumentsMetaBodyImpl implements FastMetaType<ServerApiByUidRemoveServersFromCloudArguments>  {
    serialize(sCtx_2127: MetaContext, obj_2128: ServerApiByUidRemoveServersFromCloudArguments, _out_2129: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_2129, obj_2128.sids.length);
        for (const el_2131 of obj_2128.sids)  {
            _out_2129.writeShort(el_2131);
            
        }
        
    }
    deserialize(sCtx_2127: MetaContext, in__2130: DataIn): ServerApiByUidRemoveServersFromCloudArguments  {
        try  {
            let sids_2132: number[];
            const len_2134 = Number(DeserializerPackNumber.INSTANCE.put(in__2130));
            sids_2132 = new Array<number>(len_2134);
            for (let idx_2133 = 0;
            idx_2133 < len_2134;
            idx_2133++)  {
                sids_2132[idx_2133] = in__2130.readShort();
                
            }
            return new ServerApiByUidRemoveServersFromCloudArguments(sids_2132);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerApiByUidRemoveServersFromCloudArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_SHORT).metaHashCode(obj.sids);
        return hash | 0;
        
    }
    metaEquals(v1: ServerApiByUidRemoveServersFromCloudArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerApiByUidRemoveServersFromCloudArguments)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_SHORT).metaEquals(v1.sids, v2.sids)) return false;
        return true;
        
    }
    metaToString(obj: ServerApiByUidRemoveServersFromCloudArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerApiByUidRemoveServersFromCloudArguments(');
        res.add('sids:').add(obj.sids);
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerApiByUidRemoveServersFromCloudArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerApiByUidRemoveServersFromCloudArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerApiByUidRemoveServersFromCloudArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerApiByUidMetaImpl implements FastMetaApi<ServerApiByUid, ServerApiByUidRemote>  {
    makeLocal(ctx: MetaContext, dataIn: DataIn): void  {
        this.makeLocal_fromDataIn(ctx, dataIn, ctx.getLocalApi() as ServerApiByUid);
        
    }
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
                    const reqId_2135 = dataIn.readInt();
                    const argsObject_2136 = new ServerApiByUidGetBalanceArguments();
                    const argsNames_2137: string[] = [];
                    const argsValues_2138: any[] = [];
                    ctx.invokeLocalMethodBefore("getBalance", argsNames_2137, argsValues_2138);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getBalanceArguments === "function" ? (localApi as any).getBalanceArguments(argsObject_2136) : localApi.getBalance());
                    ctx.invokeLocalMethodAfter("getBalance", resultFuture, argsNames_2137, argsValues_2138);
                    resultFuture.to((v_2140: bigint) =>  {
                        const data_2139 = new DataInOut();
                        data_2139.writeLong(v_2140);
                        ctx.sendResultToRemote(reqId_2135, data_2139.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    const reqId_2141 = dataIn.readInt();
                    let uid_2142: UUID;
                    uid_2142 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2143 = new ServerApiByUidSetParentArguments(uid_2142);
                    const argsNames_2144: string[] = ["uid"];
                    const argsValues_2145: any[] = [uid_2142];
                    ctx.invokeLocalMethodBefore("setParent", argsNames_2144, argsValues_2145);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).setParentArguments === "function" ? (localApi as any).setParentArguments(argsObject_2143) : localApi.setParent(uid_2142));
                    ctx.invokeLocalMethodAfter("setParent", resultFuture, argsNames_2144, argsValues_2145);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2141);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_2146 = dataIn.readInt();
                    const argsObject_2147 = new ServerApiByUidBlockArguments();
                    const argsNames_2148: string[] = [];
                    const argsValues_2149: any[] = [];
                    ctx.invokeLocalMethodBefore("block", argsNames_2148, argsValues_2149);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).blockArguments === "function" ? (localApi as any).blockArguments(argsObject_2147) : localApi.block());
                    ctx.invokeLocalMethodAfter("block", resultFuture, argsNames_2148, argsValues_2149);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2146);
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    const reqId_2150 = dataIn.readInt();
                    const argsObject_2151 = new ServerApiByUidGetPositionArguments();
                    const argsNames_2152: string[] = [];
                    const argsValues_2153: any[] = [];
                    ctx.invokeLocalMethodBefore("getPosition", argsNames_2152, argsValues_2153);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getPositionArguments === "function" ? (localApi as any).getPositionArguments(argsObject_2151) : localApi.getPosition());
                    ctx.invokeLocalMethodAfter("getPosition", resultFuture, argsNames_2152, argsValues_2153);
                    resultFuture.to((v_2155: CloudConfig) =>  {
                        const data_2154 = new DataInOut();
                        CloudConfig.META.serialize(ctx, v_2155, data_2154);
                        ctx.sendResultToRemote(reqId_2150, data_2154.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 7:  {
                    const reqId_2156 = dataIn.readInt();
                    const argsObject_2157 = new ServerApiByUidGetParentArguments();
                    const argsNames_2158: string[] = [];
                    const argsValues_2159: any[] = [];
                    ctx.invokeLocalMethodBefore("getParent", argsNames_2158, argsValues_2159);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getParentArguments === "function" ? (localApi as any).getParentArguments(argsObject_2157) : localApi.getParent());
                    ctx.invokeLocalMethodAfter("getParent", resultFuture, argsNames_2158, argsValues_2159);
                    resultFuture.to((v_2161: UUID) =>  {
                        const data_2160 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_2161, data_2160);
                        ctx.sendResultToRemote(reqId_2156, data_2160.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 8:  {
                    const reqId_2162 = dataIn.readInt();
                    const argsObject_2163 = new ServerApiByUidGetBeneficiaryArguments();
                    const argsNames_2164: string[] = [];
                    const argsValues_2165: any[] = [];
                    ctx.invokeLocalMethodBefore("getBeneficiary", argsNames_2164, argsValues_2165);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getBeneficiaryArguments === "function" ? (localApi as any).getBeneficiaryArguments(argsObject_2163) : localApi.getBeneficiary());
                    ctx.invokeLocalMethodAfter("getBeneficiary", resultFuture, argsNames_2164, argsValues_2165);
                    resultFuture.to((v_2167: UUID) =>  {
                        const data_2166 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_2167, data_2166);
                        ctx.sendResultToRemote(reqId_2162, data_2166.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_2168 = dataIn.readInt();
                    let uid_2169: UUID;
                    uid_2169 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2170 = new ServerApiByUidSetBeneficiaryArguments(uid_2169);
                    const argsNames_2171: string[] = ["uid"];
                    const argsValues_2172: any[] = [uid_2169];
                    ctx.invokeLocalMethodBefore("setBeneficiary", argsNames_2171, argsValues_2172);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).setBeneficiaryArguments === "function" ? (localApi as any).setBeneficiaryArguments(argsObject_2170) : localApi.setBeneficiary(uid_2169));
                    ctx.invokeLocalMethodAfter("setBeneficiary", resultFuture, argsNames_2171, argsValues_2172);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2168);
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_2173 = dataIn.readInt();
                    const argsObject_2174 = new ServerApiByUidGetBlockTimeArguments();
                    const argsNames_2175: string[] = [];
                    const argsValues_2176: any[] = [];
                    ctx.invokeLocalMethodBefore("getBlockTime", argsNames_2175, argsValues_2176);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getBlockTimeArguments === "function" ? (localApi as any).getBlockTimeArguments(argsObject_2174) : localApi.getBlockTime());
                    ctx.invokeLocalMethodAfter("getBlockTime", resultFuture, argsNames_2175, argsValues_2176);
                    resultFuture.to((v_2178: Date) =>  {
                        const data_2177 = new DataInOut();
                        data_2177.writeLong(v_2178.getTime());
                        ctx.sendResultToRemote(reqId_2173, data_2177.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_2179 = dataIn.readInt();
                    const argsObject_2180 = new ServerApiByUidUnblockArguments();
                    const argsNames_2181: string[] = [];
                    const argsValues_2182: any[] = [];
                    ctx.invokeLocalMethodBefore("unblock", argsNames_2181, argsValues_2182);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).unblockArguments === "function" ? (localApi as any).unblockArguments(argsObject_2180) : localApi.unblock());
                    ctx.invokeLocalMethodAfter("unblock", resultFuture, argsNames_2181, argsValues_2182);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2179);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    const reqId_2183 = dataIn.readInt();
                    const argsObject_2184 = new ServerApiByUidCreateTimeArguments();
                    const argsNames_2185: string[] = [];
                    const argsValues_2186: any[] = [];
                    ctx.invokeLocalMethodBefore("createTime", argsNames_2185, argsValues_2186);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).createTimeArguments === "function" ? (localApi as any).createTimeArguments(argsObject_2184) : localApi.createTime());
                    ctx.invokeLocalMethodAfter("createTime", resultFuture, argsNames_2185, argsValues_2186);
                    resultFuture.to((v_2188: Date) =>  {
                        const data_2187 = new DataInOut();
                        data_2187.writeLong(v_2188.getTime());
                        ctx.sendResultToRemote(reqId_2183, data_2187.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 13:  {
                    const reqId_2189 = dataIn.readInt();
                    const argsObject_2190 = new ServerApiByUidOnlineTimeArguments();
                    const argsNames_2191: string[] = [];
                    const argsValues_2192: any[] = [];
                    ctx.invokeLocalMethodBefore("onlineTime", argsNames_2191, argsValues_2192);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).onlineTimeArguments === "function" ? (localApi as any).onlineTimeArguments(argsObject_2190) : localApi.onlineTime());
                    ctx.invokeLocalMethodAfter("onlineTime", resultFuture, argsNames_2191, argsValues_2192);
                    resultFuture.to((v_2194: Date) =>  {
                        const data_2193 = new DataInOut();
                        data_2193.writeLong(v_2194.getTime());
                        ctx.sendResultToRemote(reqId_2189, data_2193.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 14:  {
                    const reqId_2195 = dataIn.readInt();
                    let groupId_2196: UUID;
                    groupId_2196 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2197 = new ServerApiByUidAddAccessGroupArguments(groupId_2196);
                    const argsNames_2198: string[] = ["groupId"];
                    const argsValues_2199: any[] = [groupId_2196];
                    ctx.invokeLocalMethodBefore("addAccessGroup", argsNames_2198, argsValues_2199);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).addAccessGroupArguments === "function" ? (localApi as any).addAccessGroupArguments(argsObject_2197) : localApi.addAccessGroup(groupId_2196));
                    ctx.invokeLocalMethodAfter("addAccessGroup", resultFuture, argsNames_2198, argsValues_2199);
                    resultFuture.to((v_2201: boolean) =>  {
                        const data_2200 = new DataInOut();
                        data_2200.writeBoolean(v_2201);
                        ctx.sendResultToRemote(reqId_2195, data_2200.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_2202 = dataIn.readInt();
                    let groupId_2203: UUID;
                    groupId_2203 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2204 = new ServerApiByUidRemoveAccessGroupArguments(groupId_2203);
                    const argsNames_2205: string[] = ["groupId"];
                    const argsValues_2206: any[] = [groupId_2203];
                    ctx.invokeLocalMethodBefore("removeAccessGroup", argsNames_2205, argsValues_2206);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).removeAccessGroupArguments === "function" ? (localApi as any).removeAccessGroupArguments(argsObject_2204) : localApi.removeAccessGroup(groupId_2203));
                    ctx.invokeLocalMethodAfter("removeAccessGroup", resultFuture, argsNames_2205, argsValues_2206);
                    resultFuture.to((v_2208: boolean) =>  {
                        const data_2207 = new DataInOut();
                        data_2207.writeBoolean(v_2208);
                        ctx.sendResultToRemote(reqId_2202, data_2207.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 16:  {
                    const reqId_2209 = dataIn.readInt();
                    let limit_2210: number;
                    limit_2210 = dataIn.readInt();
                    const argsObject_2211 = new ServerApiByUidSetMsgQueueLimitArguments(limit_2210);
                    const argsNames_2212: string[] = ["limit"];
                    const argsValues_2213: any[] = [limit_2210];
                    ctx.invokeLocalMethodBefore("setMsgQueueLimit", argsNames_2212, argsValues_2213);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).setMsgQueueLimitArguments === "function" ? (localApi as any).setMsgQueueLimitArguments(argsObject_2211) : localApi.setMsgQueueLimit(limit_2210));
                    ctx.invokeLocalMethodAfter("setMsgQueueLimit", resultFuture, argsNames_2212, argsValues_2213);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2209);
                        
                    }
                    );
                    break;
                    
                }
                case 17:  {
                    const reqId_2214 = dataIn.readInt();
                    let seconds_2215: number;
                    seconds_2215 = dataIn.readInt();
                    const argsObject_2216 = new ServerApiByUidSetMsgTimeLimitArguments(seconds_2215);
                    const argsNames_2217: string[] = ["seconds"];
                    const argsValues_2218: any[] = [seconds_2215];
                    ctx.invokeLocalMethodBefore("setMsgTimeLimit", argsNames_2217, argsValues_2218);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).setMsgTimeLimitArguments === "function" ? (localApi as any).setMsgTimeLimitArguments(argsObject_2216) : localApi.setMsgTimeLimit(seconds_2215));
                    ctx.invokeLocalMethodAfter("setMsgTimeLimit", resultFuture, argsNames_2217, argsValues_2218);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2214);
                        
                    }
                    );
                    break;
                    
                }
                case 18:  {
                    const reqId_2219 = dataIn.readInt();
                    let sids_2220: number[];
                    const len_2222 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    sids_2220 = new Array<number>(len_2222);
                    for (let idx_2221 = 0;
                    idx_2221 < len_2222;
                    idx_2221++)  {
                        sids_2220[idx_2221] = dataIn.readShort();
                        
                    }
                    const argsObject_2223 = new ServerApiByUidAddServersToCloudArguments(sids_2220);
                    const argsNames_2224: string[] = ["sids"];
                    const argsValues_2225: any[] = [sids_2220];
                    ctx.invokeLocalMethodBefore("addServersToCloud", argsNames_2224, argsValues_2225);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).addServersToCloudArguments === "function" ? (localApi as any).addServersToCloudArguments(argsObject_2223) : localApi.addServersToCloud(sids_2220));
                    ctx.invokeLocalMethodAfter("addServersToCloud", resultFuture, argsNames_2224, argsValues_2225);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2219);
                        
                    }
                    );
                    break;
                    
                }
                case 19:  {
                    const reqId_2226 = dataIn.readInt();
                    let sids_2227: number[];
                    const len_2229 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    sids_2227 = new Array<number>(len_2229);
                    for (let idx_2228 = 0;
                    idx_2228 < len_2229;
                    idx_2228++)  {
                        sids_2227[idx_2228] = dataIn.readShort();
                        
                    }
                    const argsObject_2230 = new ServerApiByUidRemoveServersFromCloudArguments(sids_2227);
                    const argsNames_2231: string[] = ["sids"];
                    const argsValues_2232: any[] = [sids_2227];
                    ctx.invokeLocalMethodBefore("removeServersFromCloud", argsNames_2231, argsValues_2232);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).removeServersFromCloudArguments === "function" ? (localApi as any).removeServersFromCloudArguments(argsObject_2230) : localApi.removeServersFromCloud(sids_2227));
                    ctx.invokeLocalMethodAfter("removeServersFromCloud", resultFuture, argsNames_2231, argsValues_2232);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2226);
                        
                    }
                    );
                    break;
                    
                }
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ServerApiByUid): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_2233: MetaContext): ServerApiByUidRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2233.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2233.flush();
                
            }
            , getFastMetaContext: () => sCtx_2233, getBalance: (): ARFuture<bigint> =>  {
                const dataOut_2235 = new DataInOut();
                dataOut_2235.writeByte(3);
                const argsNames_2237: string[] = [];
                const argsValues_2238: any[] = [];
                const result_2236 = ARFuture.of<bigint>();
                sCtx_2233.invokeRemoteMethodAfter("getBalance", result_2236, argsNames_2237, argsValues_2238);
                const reqId_2234 = sCtx_2233.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2236 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_2233, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2236.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2235.writeInt(reqId_2234);
                sCtx_2233.sendToRemote(dataOut_2235.toArray());
                return result_2236;
                
            }
            , setParent: (uid: UUID): AFuture =>  {
                const dataOut_2240 = new DataInOut();
                dataOut_2240.writeByte(4);
                const argsNames_2242: string[] = ["uid"];
                const argsValues_2243: any[] = [uid];
                const result_2241 = AFuture.make();
                sCtx_2233.invokeRemoteMethodAfter("setParent", result_2241, argsNames_2242, argsValues_2243);
                const reqId_2239 = sCtx_2233.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2241 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2241.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2240.writeInt(reqId_2239);
                FastMeta.META_UUID.serialize(sCtx_2233, uid, dataOut_2240);
                sCtx_2233.sendToRemote(dataOut_2240.toArray());
                return result_2241;
                
            }
            , block: (): AFuture =>  {
                const dataOut_2245 = new DataInOut();
                dataOut_2245.writeByte(5);
                const argsNames_2247: string[] = [];
                const argsValues_2248: any[] = [];
                const result_2246 = AFuture.make();
                sCtx_2233.invokeRemoteMethodAfter("block", result_2246, argsNames_2247, argsValues_2248);
                const reqId_2244 = sCtx_2233.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2246 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2246.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2245.writeInt(reqId_2244);
                sCtx_2233.sendToRemote(dataOut_2245.toArray());
                return result_2246;
                
            }
            , getPosition: (): ARFuture<CloudConfig> =>  {
                const dataOut_2250 = new DataInOut();
                dataOut_2250.writeByte(6);
                const argsNames_2252: string[] = [];
                const argsValues_2253: any[] = [];
                const result_2251 = ARFuture.of<CloudConfig>();
                sCtx_2233.invokeRemoteMethodAfter("getPosition", result_2251, argsNames_2252, argsValues_2253);
                const reqId_2249 = sCtx_2233.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2251 as ARFuture<CloudConfig>).tryDone(CloudConfig.META.deserialize(sCtx_2233, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2251.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2250.writeInt(reqId_2249);
                sCtx_2233.sendToRemote(dataOut_2250.toArray());
                return result_2251;
                
            }
            , getParent: (): ARFuture<UUID> =>  {
                const dataOut_2255 = new DataInOut();
                dataOut_2255.writeByte(7);
                const argsNames_2257: string[] = [];
                const argsValues_2258: any[] = [];
                const result_2256 = ARFuture.of<UUID>();
                sCtx_2233.invokeRemoteMethodAfter("getParent", result_2256, argsNames_2257, argsValues_2258);
                const reqId_2254 = sCtx_2233.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2256 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_2233, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2256.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2255.writeInt(reqId_2254);
                sCtx_2233.sendToRemote(dataOut_2255.toArray());
                return result_2256;
                
            }
            , getBeneficiary: (): ARFuture<UUID> =>  {
                const dataOut_2260 = new DataInOut();
                dataOut_2260.writeByte(8);
                const argsNames_2262: string[] = [];
                const argsValues_2263: any[] = [];
                const result_2261 = ARFuture.of<UUID>();
                sCtx_2233.invokeRemoteMethodAfter("getBeneficiary", result_2261, argsNames_2262, argsValues_2263);
                const reqId_2259 = sCtx_2233.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2261 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_2233, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2261.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2260.writeInt(reqId_2259);
                sCtx_2233.sendToRemote(dataOut_2260.toArray());
                return result_2261;
                
            }
            , setBeneficiary: (uid: UUID): AFuture =>  {
                const dataOut_2265 = new DataInOut();
                dataOut_2265.writeByte(9);
                const argsNames_2267: string[] = ["uid"];
                const argsValues_2268: any[] = [uid];
                const result_2266 = AFuture.make();
                sCtx_2233.invokeRemoteMethodAfter("setBeneficiary", result_2266, argsNames_2267, argsValues_2268);
                const reqId_2264 = sCtx_2233.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2266 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2266.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2265.writeInt(reqId_2264);
                FastMeta.META_UUID.serialize(sCtx_2233, uid, dataOut_2265);
                sCtx_2233.sendToRemote(dataOut_2265.toArray());
                return result_2266;
                
            }
            , getBlockTime: (): ARFuture<Date> =>  {
                const dataOut_2270 = new DataInOut();
                dataOut_2270.writeByte(10);
                const argsNames_2272: string[] = [];
                const argsValues_2273: any[] = [];
                const result_2271 = ARFuture.of<Date>();
                sCtx_2233.invokeRemoteMethodAfter("getBlockTime", result_2271, argsNames_2272, argsValues_2273);
                const reqId_2269 = sCtx_2233.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2271 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_2233, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2271.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2270.writeInt(reqId_2269);
                sCtx_2233.sendToRemote(dataOut_2270.toArray());
                return result_2271;
                
            }
            , unblock: (): AFuture =>  {
                const dataOut_2275 = new DataInOut();
                dataOut_2275.writeByte(11);
                const argsNames_2277: string[] = [];
                const argsValues_2278: any[] = [];
                const result_2276 = AFuture.make();
                sCtx_2233.invokeRemoteMethodAfter("unblock", result_2276, argsNames_2277, argsValues_2278);
                const reqId_2274 = sCtx_2233.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2276 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2276.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2275.writeInt(reqId_2274);
                sCtx_2233.sendToRemote(dataOut_2275.toArray());
                return result_2276;
                
            }
            , createTime: (): ARFuture<Date> =>  {
                const dataOut_2280 = new DataInOut();
                dataOut_2280.writeByte(12);
                const argsNames_2282: string[] = [];
                const argsValues_2283: any[] = [];
                const result_2281 = ARFuture.of<Date>();
                sCtx_2233.invokeRemoteMethodAfter("createTime", result_2281, argsNames_2282, argsValues_2283);
                const reqId_2279 = sCtx_2233.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2281 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_2233, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2281.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2280.writeInt(reqId_2279);
                sCtx_2233.sendToRemote(dataOut_2280.toArray());
                return result_2281;
                
            }
            , onlineTime: (): ARFuture<Date> =>  {
                const dataOut_2285 = new DataInOut();
                dataOut_2285.writeByte(13);
                const argsNames_2287: string[] = [];
                const argsValues_2288: any[] = [];
                const result_2286 = ARFuture.of<Date>();
                sCtx_2233.invokeRemoteMethodAfter("onlineTime", result_2286, argsNames_2287, argsValues_2288);
                const reqId_2284 = sCtx_2233.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2286 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_2233, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2286.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2285.writeInt(reqId_2284);
                sCtx_2233.sendToRemote(dataOut_2285.toArray());
                return result_2286;
                
            }
            , addAccessGroup: (groupId: UUID): ARFuture<boolean> =>  {
                const dataOut_2290 = new DataInOut();
                dataOut_2290.writeByte(14);
                const argsNames_2292: string[] = ["groupId"];
                const argsValues_2293: any[] = [groupId];
                const result_2291 = ARFuture.of<boolean>();
                sCtx_2233.invokeRemoteMethodAfter("addAccessGroup", result_2291, argsNames_2292, argsValues_2293);
                const reqId_2289 = sCtx_2233.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2291 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_2233, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2291.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2290.writeInt(reqId_2289);
                FastMeta.META_UUID.serialize(sCtx_2233, groupId, dataOut_2290);
                sCtx_2233.sendToRemote(dataOut_2290.toArray());
                return result_2291;
                
            }
            , removeAccessGroup: (groupId: UUID): ARFuture<boolean> =>  {
                const dataOut_2295 = new DataInOut();
                dataOut_2295.writeByte(15);
                const argsNames_2297: string[] = ["groupId"];
                const argsValues_2298: any[] = [groupId];
                const result_2296 = ARFuture.of<boolean>();
                sCtx_2233.invokeRemoteMethodAfter("removeAccessGroup", result_2296, argsNames_2297, argsValues_2298);
                const reqId_2294 = sCtx_2233.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2296 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_2233, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2296.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2295.writeInt(reqId_2294);
                FastMeta.META_UUID.serialize(sCtx_2233, groupId, dataOut_2295);
                sCtx_2233.sendToRemote(dataOut_2295.toArray());
                return result_2296;
                
            }
            , setMsgQueueLimit: (limit: number): AFuture =>  {
                const dataOut_2300 = new DataInOut();
                dataOut_2300.writeByte(16);
                const argsNames_2302: string[] = ["limit"];
                const argsValues_2303: any[] = [limit];
                const result_2301 = AFuture.make();
                sCtx_2233.invokeRemoteMethodAfter("setMsgQueueLimit", result_2301, argsNames_2302, argsValues_2303);
                const reqId_2299 = sCtx_2233.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2301 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2301.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2300.writeInt(reqId_2299);
                dataOut_2300.writeInt(limit);
                sCtx_2233.sendToRemote(dataOut_2300.toArray());
                return result_2301;
                
            }
            , setMsgTimeLimit: (seconds: number): AFuture =>  {
                const dataOut_2305 = new DataInOut();
                dataOut_2305.writeByte(17);
                const argsNames_2307: string[] = ["seconds"];
                const argsValues_2308: any[] = [seconds];
                const result_2306 = AFuture.make();
                sCtx_2233.invokeRemoteMethodAfter("setMsgTimeLimit", result_2306, argsNames_2307, argsValues_2308);
                const reqId_2304 = sCtx_2233.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2306 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2306.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2305.writeInt(reqId_2304);
                dataOut_2305.writeInt(seconds);
                sCtx_2233.sendToRemote(dataOut_2305.toArray());
                return result_2306;
                
            }
            , addServersToCloud: (sids: number[]): AFuture =>  {
                const dataOut_2310 = new DataInOut();
                dataOut_2310.writeByte(18);
                const argsNames_2312: string[] = ["sids"];
                const argsValues_2313: any[] = [sids];
                const result_2311 = AFuture.make();
                sCtx_2233.invokeRemoteMethodAfter("addServersToCloud", result_2311, argsNames_2312, argsValues_2313);
                const reqId_2309 = sCtx_2233.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2311 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2311.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2310.writeInt(reqId_2309);
                SerializerPackNumber.INSTANCE.put(dataOut_2310, sids.length);
                for (const el_2314 of sids)  {
                    dataOut_2310.writeShort(el_2314);
                    
                }
                sCtx_2233.sendToRemote(dataOut_2310.toArray());
                return result_2311;
                
            }
            , removeServersFromCloud: (sids: number[]): AFuture =>  {
                const dataOut_2316 = new DataInOut();
                dataOut_2316.writeByte(19);
                const argsNames_2318: string[] = ["sids"];
                const argsValues_2319: any[] = [sids];
                const result_2317 = AFuture.make();
                sCtx_2233.invokeRemoteMethodAfter("removeServersFromCloud", result_2317, argsNames_2318, argsValues_2319);
                const reqId_2315 = sCtx_2233.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2317 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2317.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2316.writeInt(reqId_2315);
                SerializerPackNumber.INSTANCE.put(dataOut_2316, sids.length);
                for (const el_2320 of sids)  {
                    dataOut_2316.writeShort(el_2320);
                    
                }
                sCtx_2233.sendToRemote(dataOut_2316.toArray());
                return result_2317;
                
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
            case 18: // addServersToCloud
            case 19: // removeServersFromCloud
            return true;
            default: return false;
            
        }
        
    }
    
}
export class ClientApiRegUnsafeEnterArgumentsMetaBodyImpl implements FastMetaType<ClientApiRegUnsafeEnterArguments>  {
    serialize(sCtx_2321: MetaContext, obj_2322: ClientApiRegUnsafeEnterArguments, _out_2323: DataOut): void  {
        ClientApiRegSafeStream.META.serialize(sCtx_2321, obj_2322.stream, _out_2323);
        
    }
    deserialize(sCtx_2321: MetaContext, in__2324: DataIn): ClientApiRegUnsafeEnterArguments  {
        try  {
            let stream_2325: ClientApiRegSafeStream;
            stream_2325 = ClientApiRegSafeStream.META.deserialize(sCtx_2321, in__2324);
            return new ClientApiRegUnsafeEnterArguments(stream_2325);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiRegUnsafeEnterArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + ClientApiRegSafeStream.META.metaHashCode(obj.stream);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiRegUnsafeEnterArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiRegUnsafeEnterArguments)) return false;
        if (!ClientApiRegSafeStream.META.metaEquals(v1.stream, v2.stream)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiRegUnsafeEnterArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiRegUnsafeEnterArguments(');
        res.add('stream:').add(obj.stream);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiRegUnsafeEnterArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiRegUnsafeEnterArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiRegUnsafeEnterArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiRegUnsafeEnterGlobalArgumentsMetaBodyImpl implements FastMetaType<ClientApiRegUnsafeEnterGlobalArguments>  {
    serialize(sCtx_2326: MetaContext, obj_2327: ClientApiRegUnsafeEnterGlobalArguments, _out_2328: DataOut): void  {
        GlobalRegClientApiStream.META.serialize(sCtx_2326, obj_2327.stream, _out_2328);
        
    }
    deserialize(sCtx_2326: MetaContext, in__2329: DataIn): ClientApiRegUnsafeEnterGlobalArguments  {
        try  {
            let stream_2330: GlobalRegClientApiStream;
            stream_2330 = GlobalRegClientApiStream.META.deserialize(sCtx_2326, in__2329);
            return new ClientApiRegUnsafeEnterGlobalArguments(stream_2330);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiRegUnsafeEnterGlobalArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + GlobalRegClientApiStream.META.metaHashCode(obj.stream);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiRegUnsafeEnterGlobalArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiRegUnsafeEnterGlobalArguments)) return false;
        if (!GlobalRegClientApiStream.META.metaEquals(v1.stream, v2.stream)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiRegUnsafeEnterGlobalArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiRegUnsafeEnterGlobalArguments(');
        res.add('stream:').add(obj.stream);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiRegUnsafeEnterGlobalArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiRegUnsafeEnterGlobalArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiRegUnsafeEnterGlobalArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ClientApiRegUnsafeMetaImpl implements FastMetaApi<ClientApiRegUnsafe, ClientApiRegUnsafeRemote>  {
    makeLocal(ctx: MetaContext, dataIn: DataIn): void  {
        this.makeLocal_fromDataIn(ctx, dataIn, ctx.getLocalApi() as ClientApiRegUnsafe);
        
    }
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
                    let stream_2332: ClientApiRegSafeStream;
                    stream_2332 = ClientApiRegSafeStream.META.deserialize(ctx, dataIn);
                    const argsObject_2333 = new ClientApiRegUnsafeEnterArguments(stream_2332);
                    const argsNames_2334: string[] = ["stream"];
                    const argsValues_2335: any[] = [stream_2332];
                    ctx.invokeLocalMethodBefore("enter", argsNames_2334, argsValues_2335);
                    (typeof (localApi as any).enterArguments === "function" ? (localApi as any).enterArguments(argsObject_2333) : localApi.enter(stream_2332));
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_2334, argsValues_2335);
                    break;
                    
                }
                case 4:  {
                    let stream_2337: GlobalRegClientApiStream;
                    stream_2337 = GlobalRegClientApiStream.META.deserialize(ctx, dataIn);
                    const argsObject_2338 = new ClientApiRegUnsafeEnterGlobalArguments(stream_2337);
                    const argsNames_2339: string[] = ["stream"];
                    const argsValues_2340: any[] = [stream_2337];
                    ctx.invokeLocalMethodBefore("enterGlobal", argsNames_2339, argsValues_2340);
                    (typeof (localApi as any).enterGlobalArguments === "function" ? (localApi as any).enterGlobalArguments(argsObject_2338) : localApi.enterGlobal(stream_2337));
                    ctx.invokeLocalMethodAfter("enterGlobal", null, argsNames_2339, argsValues_2340);
                    break;
                    
                }
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ClientApiRegUnsafe): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_2341: MetaContext): ClientApiRegUnsafeRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2341.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2341.flush();
                
            }
            , getFastMetaContext: () => sCtx_2341, enter: (stream: ClientApiRegSafeStream): void =>  {
                const dataOut_2343 = new DataInOut();
                dataOut_2343.writeByte(3);
                const argsNames_2345: string[] = ["stream"];
                const argsValues_2346: any[] = [stream];
                sCtx_2341.invokeRemoteMethodAfter("enter", null, argsNames_2345, argsValues_2346);
                ClientApiRegSafeStream.META.serialize(sCtx_2341, stream, dataOut_2343);
                sCtx_2341.sendToRemote(dataOut_2343.toArray());
                
            }
            , enterGlobal: (stream: GlobalRegClientApiStream): void =>  {
                const dataOut_2348 = new DataInOut();
                dataOut_2348.writeByte(4);
                const argsNames_2350: string[] = ["stream"];
                const argsValues_2351: any[] = [stream];
                sCtx_2341.invokeRemoteMethodAfter("enterGlobal", null, argsNames_2350, argsValues_2351);
                GlobalRegClientApiStream.META.serialize(sCtx_2341, stream, dataOut_2348);
                sCtx_2341.sendToRemote(dataOut_2348.toArray());
                
            }
            , openEnter(factory: (api: ClientApiRegSafeRemote) => any, converter: BytesConverter, ...keys: any[]): ClientApiRegSafeRemote  {
                return sCtx_2341.findContext(ctx =>  {
                    ctx.onFlushData(data => this.enter(ClientApiRegSafeStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((ClientApiRegSafe as any).META));
                    
                }
                , ...keys).makeRemote((ClientApiRegSafe as any).META) as ClientApiRegSafeRemote;
                
            }
            , openEnterGlobal(factory: (api: GlobalRegClientApiRemote) => any, converter: BytesConverter, ...keys: any[]): GlobalRegClientApiRemote  {
                return sCtx_2341.findContext(ctx =>  {
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
export class GlobalRegServerApiSetMasterKeyArgumentsMetaBodyImpl implements FastMetaType<GlobalRegServerApiSetMasterKeyArguments>  {
    serialize(sCtx_2352: MetaContext, obj_2353: GlobalRegServerApiSetMasterKeyArguments, _out_2354: DataOut): void  {
        Key.META.serialize(sCtx_2352, obj_2353.key, _out_2354);
        
    }
    deserialize(sCtx_2352: MetaContext, in__2355: DataIn): GlobalRegServerApiSetMasterKeyArguments  {
        try  {
            let _key_2356: Key;
            _key_2356 = Key.META.deserialize(sCtx_2352, in__2355);
            return new GlobalRegServerApiSetMasterKeyArguments(_key_2356);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: GlobalRegServerApiSetMasterKeyArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + Key.META.metaHashCode(obj.key);
        return hash | 0;
        
    }
    metaEquals(v1: GlobalRegServerApiSetMasterKeyArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof GlobalRegServerApiSetMasterKeyArguments)) return false;
        if (!Key.META.metaEquals(v1.key, v2.key)) return false;
        return true;
        
    }
    metaToString(obj: GlobalRegServerApiSetMasterKeyArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('GlobalRegServerApiSetMasterKeyArguments(');
        res.add('key:').add(obj.key);
        res.add(')');
        
    }
    public serializeToBytes(obj: GlobalRegServerApiSetMasterKeyArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): GlobalRegServerApiSetMasterKeyArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): GlobalRegServerApiSetMasterKeyArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class GlobalRegServerApiFinishArgumentsMetaBodyImpl implements FastMetaType<GlobalRegServerApiFinishArguments>  {
    serialize(sCtx_2357: MetaContext, obj_2359: GlobalRegServerApiFinishArguments, _out_2360: DataOut): void  {
        
    }
    deserialize(sCtx_2358: MetaContext, in__2361: DataIn): GlobalRegServerApiFinishArguments  {
        try  {
            return new GlobalRegServerApiFinishArguments();
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: GlobalRegServerApiFinishArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        return hash | 0;
        
    }
    metaEquals(v1: GlobalRegServerApiFinishArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof GlobalRegServerApiFinishArguments)) return false;
        return true;
        
    }
    metaToString(obj: GlobalRegServerApiFinishArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('GlobalRegServerApiFinishArguments(');
        res.add(')');
        
    }
    public serializeToBytes(obj: GlobalRegServerApiFinishArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): GlobalRegServerApiFinishArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): GlobalRegServerApiFinishArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class GlobalRegServerApiMetaImpl implements FastMetaApi<GlobalRegServerApi, GlobalRegServerApiRemote>  {
    makeLocal(ctx: MetaContext, dataIn: DataIn): void  {
        this.makeLocal_fromDataIn(ctx, dataIn, ctx.getLocalApi() as GlobalRegServerApi);
        
    }
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
                    let _key_2363: Key;
                    _key_2363 = Key.META.deserialize(ctx, dataIn);
                    const argsObject_2364 = new GlobalRegServerApiSetMasterKeyArguments(_key_2363);
                    const argsNames_2365: string[] = ["key"];
                    const argsValues_2366: any[] = [_key_2363];
                    ctx.invokeLocalMethodBefore("setMasterKey", argsNames_2365, argsValues_2366);
                    (typeof (localApi as any).setMasterKeyArguments === "function" ? (localApi as any).setMasterKeyArguments(argsObject_2364) : localApi.setMasterKey(_key_2363));
                    ctx.invokeLocalMethodAfter("setMasterKey", null, argsNames_2365, argsValues_2366);
                    break;
                    
                }
                case 4:  {
                    const reqId_2367 = dataIn.readInt();
                    const argsObject_2368 = new GlobalRegServerApiFinishArguments();
                    const argsNames_2369: string[] = [];
                    const argsValues_2370: any[] = [];
                    ctx.invokeLocalMethodBefore("finish", argsNames_2369, argsValues_2370);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).finishArguments === "function" ? (localApi as any).finishArguments(argsObject_2368) : localApi.finish());
                    ctx.invokeLocalMethodAfter("finish", resultFuture, argsNames_2369, argsValues_2370);
                    resultFuture.to((v_2372: FinishResultGlobalRegServerApi) =>  {
                        const data_2371 = new DataInOut();
                        FinishResultGlobalRegServerApi.META.serialize(ctx, v_2372, data_2371);
                        ctx.sendResultToRemote(reqId_2367, data_2371.toArray());
                        
                    }
                    );
                    break;
                    
                }
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: GlobalRegServerApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_2373: MetaContext): GlobalRegServerApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2373.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2373.flush();
                
            }
            , getFastMetaContext: () => sCtx_2373, setMasterKey: (key: Key): void =>  {
                const dataOut_2375 = new DataInOut();
                dataOut_2375.writeByte(3);
                const argsNames_2377: string[] = ["key"];
                const argsValues_2378: any[] = [key];
                sCtx_2373.invokeRemoteMethodAfter("setMasterKey", null, argsNames_2377, argsValues_2378);
                Key.META.serialize(sCtx_2373, key, dataOut_2375);
                sCtx_2373.sendToRemote(dataOut_2375.toArray());
                
            }
            , finish: (): ARFuture<FinishResultGlobalRegServerApi> =>  {
                const dataOut_2380 = new DataInOut();
                dataOut_2380.writeByte(4);
                const argsNames_2382: string[] = [];
                const argsValues_2383: any[] = [];
                const result_2381 = ARFuture.of<FinishResultGlobalRegServerApi>();
                sCtx_2373.invokeRemoteMethodAfter("finish", result_2381, argsNames_2382, argsValues_2383);
                const reqId_2379 = sCtx_2373.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2381 as ARFuture<FinishResultGlobalRegServerApi>).tryDone(FinishResultGlobalRegServerApi.META.deserialize(sCtx_2373, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2381.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2380.writeInt(reqId_2379);
                sCtx_2373.sendToRemote(dataOut_2380.toArray());
                return result_2381;
                
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
export class ServerRegistrationApiRegistrationArgumentsMetaBodyImpl implements FastMetaType<ServerRegistrationApiRegistrationArguments>  {
    serialize(sCtx_2384: MetaContext, obj_2385: ServerRegistrationApiRegistrationArguments, _out_2386: DataOut): void  {
        const stringBytes_2388 = new TextEncoder().encode(obj_2385.salt);
        SerializerPackNumber.INSTANCE.put(_out_2386, stringBytes_2388.length);
        _out_2386.write(stringBytes_2388);
        const stringBytes_2390 = new TextEncoder().encode(obj_2385.suffix);
        SerializerPackNumber.INSTANCE.put(_out_2386, stringBytes_2390.length);
        _out_2386.write(stringBytes_2390);
        SerializerPackNumber.INSTANCE.put(_out_2386, obj_2385.passwords.length);
        for (const el_2392 of obj_2385.passwords)  {
            _out_2386.writeInt(el_2392);
            
        }
        FastMeta.META_UUID.serialize(sCtx_2384, obj_2385.parent, _out_2386);
        GlobalApiStream.META.serialize(sCtx_2384, obj_2385.globalApi, _out_2386);
        
    }
    deserialize(sCtx_2384: MetaContext, in__2387: DataIn): ServerRegistrationApiRegistrationArguments  {
        try  {
            let salt_2393: string;
            let suffix_2394: string;
            let passwords_2395: number[];
            let parent_2396: UUID;
            let globalApi_2397: GlobalApiStream;
            let stringBytes_2398: Uint8Array;
            const len_2400 = Number(DeserializerPackNumber.INSTANCE.put(in__2387));
            const bytes_2401 = in__2387.readBytes(len_2400);
            stringBytes_2398 = bytes_2401;
            salt_2393 = new TextDecoder('utf-8').decode(stringBytes_2398);
            let stringBytes_2402: Uint8Array;
            const len_2404 = Number(DeserializerPackNumber.INSTANCE.put(in__2387));
            const bytes_2405 = in__2387.readBytes(len_2404);
            stringBytes_2402 = bytes_2405;
            suffix_2394 = new TextDecoder('utf-8').decode(stringBytes_2402);
            const len_2407 = Number(DeserializerPackNumber.INSTANCE.put(in__2387));
            passwords_2395 = new Array<number>(len_2407);
            for (let idx_2406 = 0;
            idx_2406 < len_2407;
            idx_2406++)  {
                passwords_2395[idx_2406] = in__2387.readInt();
                
            }
            parent_2396 = FastMeta.META_UUID.deserialize(sCtx_2384, in__2387);
            globalApi_2397 = GlobalApiStream.META.deserialize(sCtx_2384, in__2387);
            return new ServerRegistrationApiRegistrationArguments(salt_2393, suffix_2394, passwords_2395, parent_2396, globalApi_2397);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerRegistrationApiRegistrationArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_STRING.metaHashCode(obj.salt);
        hash = 37 * hash + FastMeta.META_STRING.metaHashCode(obj.suffix);
        hash = 37 * hash + FastMeta.getMetaArray(FastMeta.META_INT).metaHashCode(obj.passwords);
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.parent);
        hash = 37 * hash + GlobalApiStream.META.metaHashCode(obj.globalApi);
        return hash | 0;
        
    }
    metaEquals(v1: ServerRegistrationApiRegistrationArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerRegistrationApiRegistrationArguments)) return false;
        if (!FastMeta.META_STRING.metaEquals(v1.salt, v2.salt)) return false;
        if (!FastMeta.META_STRING.metaEquals(v1.suffix, v2.suffix)) return false;
        if (!FastMeta.getMetaArray(FastMeta.META_INT).metaEquals(v1.passwords, v2.passwords)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.parent, v2.parent)) return false;
        if (!GlobalApiStream.META.metaEquals(v1.globalApi, v2.globalApi)) return false;
        return true;
        
    }
    metaToString(obj: ServerRegistrationApiRegistrationArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerRegistrationApiRegistrationArguments(');
        res.add('salt:').add(obj.salt);
        res.add(', ');
        res.add('suffix:').add(obj.suffix);
        res.add(', ');
        res.add('passwords:').add(obj.passwords);
        res.add(', ');
        res.add('parent:').add(obj.parent);
        res.add(', ');
        res.add('globalApi:').add(obj.globalApi);
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerRegistrationApiRegistrationArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerRegistrationApiRegistrationArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerRegistrationApiRegistrationArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerRegistrationApiRequestWorkProofDataArgumentsMetaBodyImpl implements FastMetaType<ServerRegistrationApiRequestWorkProofDataArguments>  {
    serialize(sCtx_2408: MetaContext, obj_2409: ServerRegistrationApiRequestWorkProofDataArguments, _out_2410: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2408, obj_2409.parent, _out_2410);
        PowMethod.META.serialize(sCtx_2408, obj_2409.powMethods, _out_2410);
        
    }
    deserialize(sCtx_2408: MetaContext, in__2411: DataIn): ServerRegistrationApiRequestWorkProofDataArguments  {
        try  {
            let parent_2412: UUID;
            let powMethods_2413: PowMethod;
            parent_2412 = FastMeta.META_UUID.deserialize(sCtx_2408, in__2411);
            powMethods_2413 = PowMethod.META.deserialize(sCtx_2408, in__2411);
            return new ServerRegistrationApiRequestWorkProofDataArguments(parent_2412, powMethods_2413);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerRegistrationApiRequestWorkProofDataArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.parent);
        hash = 37 * hash + PowMethod.META.metaHashCode(obj.powMethods);
        return hash | 0;
        
    }
    metaEquals(v1: ServerRegistrationApiRequestWorkProofDataArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerRegistrationApiRequestWorkProofDataArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.parent, v2.parent)) return false;
        if (!PowMethod.META.metaEquals(v1.powMethods, v2.powMethods)) return false;
        return true;
        
    }
    metaToString(obj: ServerRegistrationApiRequestWorkProofDataArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerRegistrationApiRequestWorkProofDataArguments(');
        res.add('parent:').add(obj.parent);
        res.add(', ');
        res.add('powMethods:').add(obj.powMethods);
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerRegistrationApiRequestWorkProofDataArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerRegistrationApiRequestWorkProofDataArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerRegistrationApiRequestWorkProofDataArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerRegistrationApiResolveServersArgumentsMetaBodyImpl implements FastMetaType<ServerRegistrationApiResolveServersArguments>  {
    serialize(sCtx_2414: MetaContext, obj_2415: ServerRegistrationApiResolveServersArguments, _out_2416: DataOut): void  {
        Cloud.META.serialize(sCtx_2414, obj_2415.serverIds, _out_2416);
        
    }
    deserialize(sCtx_2414: MetaContext, in__2417: DataIn): ServerRegistrationApiResolveServersArguments  {
        try  {
            let serverIds_2418: Cloud;
            serverIds_2418 = Cloud.META.deserialize(sCtx_2414, in__2417);
            return new ServerRegistrationApiResolveServersArguments(serverIds_2418);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerRegistrationApiResolveServersArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + Cloud.META.metaHashCode(obj.serverIds);
        return hash | 0;
        
    }
    metaEquals(v1: ServerRegistrationApiResolveServersArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerRegistrationApiResolveServersArguments)) return false;
        if (!Cloud.META.metaEquals(v1.serverIds, v2.serverIds)) return false;
        return true;
        
    }
    metaToString(obj: ServerRegistrationApiResolveServersArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerRegistrationApiResolveServersArguments(');
        res.add('serverIds:').add(obj.serverIds);
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerRegistrationApiResolveServersArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerRegistrationApiResolveServersArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerRegistrationApiResolveServersArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerRegistrationApiSetReturnKeyArgumentsMetaBodyImpl implements FastMetaType<ServerRegistrationApiSetReturnKeyArguments>  {
    serialize(sCtx_2419: MetaContext, obj_2420: ServerRegistrationApiSetReturnKeyArguments, _out_2421: DataOut): void  {
        Key.META.serialize(sCtx_2419, obj_2420.key, _out_2421);
        
    }
    deserialize(sCtx_2419: MetaContext, in__2422: DataIn): ServerRegistrationApiSetReturnKeyArguments  {
        try  {
            let _key_2423: Key;
            _key_2423 = Key.META.deserialize(sCtx_2419, in__2422);
            return new ServerRegistrationApiSetReturnKeyArguments(_key_2423);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ServerRegistrationApiSetReturnKeyArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + Key.META.metaHashCode(obj.key);
        return hash | 0;
        
    }
    metaEquals(v1: ServerRegistrationApiSetReturnKeyArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerRegistrationApiSetReturnKeyArguments)) return false;
        if (!Key.META.metaEquals(v1.key, v2.key)) return false;
        return true;
        
    }
    metaToString(obj: ServerRegistrationApiSetReturnKeyArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ServerRegistrationApiSetReturnKeyArguments(');
        res.add('key:').add(obj.key);
        res.add(')');
        
    }
    public serializeToBytes(obj: ServerRegistrationApiSetReturnKeyArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ServerRegistrationApiSetReturnKeyArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ServerRegistrationApiSetReturnKeyArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerRegistrationApiMetaImpl implements FastMetaApi<ServerRegistrationApi, ServerRegistrationApiRemote>  {
    makeLocal(ctx: MetaContext, dataIn: DataIn): void  {
        this.makeLocal_fromDataIn(ctx, dataIn, ctx.getLocalApi() as ServerRegistrationApi);
        
    }
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
                    let salt_2425: string;
                    let suffix_2426: string;
                    let passwords_2427: number[];
                    let parent_2428: UUID;
                    let globalApi_2429: GlobalApiStream;
                    let stringBytes_2430: Uint8Array;
                    const len_2432 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_2433 = dataIn.readBytes(len_2432);
                    stringBytes_2430 = bytes_2433;
                    salt_2425 = new TextDecoder('utf-8').decode(stringBytes_2430);
                    let stringBytes_2434: Uint8Array;
                    const len_2436 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_2437 = dataIn.readBytes(len_2436);
                    stringBytes_2434 = bytes_2437;
                    suffix_2426 = new TextDecoder('utf-8').decode(stringBytes_2434);
                    const len_2439 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    passwords_2427 = new Array<number>(len_2439);
                    for (let idx_2438 = 0;
                    idx_2438 < len_2439;
                    idx_2438++)  {
                        passwords_2427[idx_2438] = dataIn.readInt();
                        
                    }
                    parent_2428 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    globalApi_2429 = GlobalApiStream.META.deserialize(ctx, dataIn);
                    const argsObject_2440 = new ServerRegistrationApiRegistrationArguments(salt_2425, suffix_2426, passwords_2427, parent_2428, globalApi_2429);
                    const argsNames_2441: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                    const argsValues_2442: any[] = [salt_2425, suffix_2426, passwords_2427, parent_2428, globalApi_2429];
                    ctx.invokeLocalMethodBefore("registration", argsNames_2441, argsValues_2442);
                    (typeof (localApi as any).registrationArguments === "function" ? (localApi as any).registrationArguments(argsObject_2440) : localApi.registration(salt_2425, suffix_2426, passwords_2427, parent_2428, globalApi_2429));
                    ctx.invokeLocalMethodAfter("registration", null, argsNames_2441, argsValues_2442);
                    break;
                    
                }
                case 4:  {
                    const reqId_2443 = dataIn.readInt();
                    let parent_2444: UUID;
                    let powMethods_2445: PowMethod;
                    parent_2444 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    powMethods_2445 = PowMethod.META.deserialize(ctx, dataIn);
                    const argsObject_2446 = new ServerRegistrationApiRequestWorkProofDataArguments(parent_2444, powMethods_2445);
                    const argsNames_2447: string[] = ["parent", "powMethods"];
                    const argsValues_2448: any[] = [parent_2444, powMethods_2445];
                    ctx.invokeLocalMethodBefore("requestWorkProofData", argsNames_2447, argsValues_2448);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).requestWorkProofDataArguments === "function" ? (localApi as any).requestWorkProofDataArguments(argsObject_2446) : localApi.requestWorkProofData(parent_2444, powMethods_2445));
                    ctx.invokeLocalMethodAfter("requestWorkProofData", resultFuture, argsNames_2447, argsValues_2448);
                    resultFuture.to((v_2450: WorkProofDTO) =>  {
                        const data_2449 = new DataInOut();
                        WorkProofDTO.META.serialize(ctx, v_2450, data_2449);
                        ctx.sendResultToRemote(reqId_2443, data_2449.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_2451 = dataIn.readInt();
                    let serverIds_2452: Cloud;
                    serverIds_2452 = Cloud.META.deserialize(ctx, dataIn);
                    const argsObject_2453 = new ServerRegistrationApiResolveServersArguments(serverIds_2452);
                    const argsNames_2454: string[] = ["serverIds"];
                    const argsValues_2455: any[] = [serverIds_2452];
                    ctx.invokeLocalMethodBefore("resolveServers", argsNames_2454, argsValues_2455);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).resolveServersArguments === "function" ? (localApi as any).resolveServersArguments(argsObject_2453) : localApi.resolveServers(serverIds_2452));
                    ctx.invokeLocalMethodAfter("resolveServers", resultFuture, argsNames_2454, argsValues_2455);
                    resultFuture.to((v_2457: ServerDescriptor[]) =>  {
                        const data_2456 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_2456, v_2457.length);
                        for (const el_2458 of v_2457)  {
                            ServerDescriptor.META.serialize(ctx, el_2458, data_2456);
                            
                        }
                        ctx.sendResultToRemote(reqId_2451, data_2456.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    let _key_2460: Key;
                    _key_2460 = Key.META.deserialize(ctx, dataIn);
                    const argsObject_2461 = new ServerRegistrationApiSetReturnKeyArguments(_key_2460);
                    const argsNames_2462: string[] = ["key"];
                    const argsValues_2463: any[] = [_key_2460];
                    ctx.invokeLocalMethodBefore("setReturnKey", argsNames_2462, argsValues_2463);
                    (typeof (localApi as any).setReturnKeyArguments === "function" ? (localApi as any).setReturnKeyArguments(argsObject_2461) : localApi.setReturnKey(_key_2460));
                    ctx.invokeLocalMethodAfter("setReturnKey", null, argsNames_2462, argsValues_2463);
                    break;
                    
                }
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ServerRegistrationApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_2464: MetaContext): ServerRegistrationApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2464.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2464.flush();
                
            }
            , getFastMetaContext: () => sCtx_2464, registration: (salt: string, suffix: string, passwords: number[], parent: UUID, globalApi: GlobalApiStream): void =>  {
                const dataOut_2466 = new DataInOut();
                dataOut_2466.writeByte(3);
                const argsNames_2468: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                const argsValues_2469: any[] = [salt, suffix, passwords, parent, globalApi];
                sCtx_2464.invokeRemoteMethodAfter("registration", null, argsNames_2468, argsValues_2469);
                const stringBytes_2470 = new TextEncoder().encode(salt);
                SerializerPackNumber.INSTANCE.put(dataOut_2466, stringBytes_2470.length);
                dataOut_2466.write(stringBytes_2470);
                const stringBytes_2472 = new TextEncoder().encode(suffix);
                SerializerPackNumber.INSTANCE.put(dataOut_2466, stringBytes_2472.length);
                dataOut_2466.write(stringBytes_2472);
                SerializerPackNumber.INSTANCE.put(dataOut_2466, passwords.length);
                for (const el_2474 of passwords)  {
                    dataOut_2466.writeInt(el_2474);
                    
                }
                FastMeta.META_UUID.serialize(sCtx_2464, parent, dataOut_2466);
                GlobalApiStream.META.serialize(sCtx_2464, globalApi, dataOut_2466);
                sCtx_2464.sendToRemote(dataOut_2466.toArray());
                
            }
            , requestWorkProofData: (parent: UUID, powMethods: PowMethod): ARFuture<WorkProofDTO> =>  {
                const dataOut_2476 = new DataInOut();
                dataOut_2476.writeByte(4);
                const argsNames_2478: string[] = ["parent", "powMethods"];
                const argsValues_2479: any[] = [parent, powMethods];
                const result_2477 = ARFuture.of<WorkProofDTO>();
                sCtx_2464.invokeRemoteMethodAfter("requestWorkProofData", result_2477, argsNames_2478, argsValues_2479);
                const reqId_2475 = sCtx_2464.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2477 as ARFuture<WorkProofDTO>).tryDone(WorkProofDTO.META.deserialize(sCtx_2464, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2477.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2476.writeInt(reqId_2475);
                FastMeta.META_UUID.serialize(sCtx_2464, parent, dataOut_2476);
                PowMethod.META.serialize(sCtx_2464, powMethods, dataOut_2476);
                sCtx_2464.sendToRemote(dataOut_2476.toArray());
                return result_2477;
                
            }
            , resolveServers: (serverIds: Cloud): ARFuture<ServerDescriptor[]> =>  {
                const dataOut_2481 = new DataInOut();
                dataOut_2481.writeByte(5);
                const argsNames_2483: string[] = ["serverIds"];
                const argsValues_2484: any[] = [serverIds];
                const result_2482 = ARFuture.of<ServerDescriptor[]>();
                sCtx_2464.invokeRemoteMethodAfter("resolveServers", result_2482, argsNames_2483, argsValues_2484);
                const reqId_2480 = sCtx_2464.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2482 as ARFuture<ServerDescriptor[]>).tryDone(FastMeta.getMetaArray(ServerDescriptor.META).deserialize(sCtx_2464, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2482.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2481.writeInt(reqId_2480);
                Cloud.META.serialize(sCtx_2464, serverIds, dataOut_2481);
                sCtx_2464.sendToRemote(dataOut_2481.toArray());
                return result_2482;
                
            }
            , setReturnKey: (key: Key): void =>  {
                const dataOut_2486 = new DataInOut();
                dataOut_2486.writeByte(6);
                const argsNames_2488: string[] = ["key"];
                const argsValues_2489: any[] = [key];
                sCtx_2464.invokeRemoteMethodAfter("setReturnKey", null, argsNames_2488, argsValues_2489);
                Key.META.serialize(sCtx_2464, key, dataOut_2486);
                sCtx_2464.sendToRemote(dataOut_2486.toArray());
                
            }
            , openRegistration(salt: string, suffix: string, passwords: number[], parent: UUID, factory: (api: GlobalRegServerApiRemote) => any, converter: BytesConverter, ...keys: any[]): GlobalRegServerApiRemote  {
                return sCtx_2464.findContext(ctx =>  {
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
export class RegistrationRootApiGetAsymmetricPublicKeyArgumentsMetaBodyImpl implements FastMetaType<RegistrationRootApiGetAsymmetricPublicKeyArguments>  {
    serialize(sCtx_2490: MetaContext, obj_2491: RegistrationRootApiGetAsymmetricPublicKeyArguments, _out_2492: DataOut): void  {
        CryptoLib.META.serialize(sCtx_2490, obj_2491.cryptoLib, _out_2492);
        
    }
    deserialize(sCtx_2490: MetaContext, in__2493: DataIn): RegistrationRootApiGetAsymmetricPublicKeyArguments  {
        try  {
            let cryptoLib_2494: CryptoLib;
            cryptoLib_2494 = CryptoLib.META.deserialize(sCtx_2490, in__2493);
            return new RegistrationRootApiGetAsymmetricPublicKeyArguments(cryptoLib_2494);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: RegistrationRootApiGetAsymmetricPublicKeyArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + CryptoLib.META.metaHashCode(obj.cryptoLib);
        return hash | 0;
        
    }
    metaEquals(v1: RegistrationRootApiGetAsymmetricPublicKeyArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof RegistrationRootApiGetAsymmetricPublicKeyArguments)) return false;
        if (!CryptoLib.META.metaEquals(v1.cryptoLib, v2.cryptoLib)) return false;
        return true;
        
    }
    metaToString(obj: RegistrationRootApiGetAsymmetricPublicKeyArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('RegistrationRootApiGetAsymmetricPublicKeyArguments(');
        res.add('cryptoLib:').add(obj.cryptoLib);
        res.add(')');
        
    }
    public serializeToBytes(obj: RegistrationRootApiGetAsymmetricPublicKeyArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): RegistrationRootApiGetAsymmetricPublicKeyArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): RegistrationRootApiGetAsymmetricPublicKeyArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class RegistrationRootApiEnterArgumentsMetaBodyImpl implements FastMetaType<RegistrationRootApiEnterArguments>  {
    serialize(sCtx_2495: MetaContext, obj_2496: RegistrationRootApiEnterArguments, _out_2497: DataOut): void  {
        CryptoLib.META.serialize(sCtx_2495, obj_2496.cryptoLib, _out_2497);
        ServerRegistrationApiStream.META.serialize(sCtx_2495, obj_2496.stream, _out_2497);
        
    }
    deserialize(sCtx_2495: MetaContext, in__2498: DataIn): RegistrationRootApiEnterArguments  {
        try  {
            let cryptoLib_2499: CryptoLib;
            let stream_2500: ServerRegistrationApiStream;
            cryptoLib_2499 = CryptoLib.META.deserialize(sCtx_2495, in__2498);
            stream_2500 = ServerRegistrationApiStream.META.deserialize(sCtx_2495, in__2498);
            return new RegistrationRootApiEnterArguments(cryptoLib_2499, stream_2500);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: RegistrationRootApiEnterArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + CryptoLib.META.metaHashCode(obj.cryptoLib);
        hash = 37 * hash + ServerRegistrationApiStream.META.metaHashCode(obj.stream);
        return hash | 0;
        
    }
    metaEquals(v1: RegistrationRootApiEnterArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof RegistrationRootApiEnterArguments)) return false;
        if (!CryptoLib.META.metaEquals(v1.cryptoLib, v2.cryptoLib)) return false;
        if (!ServerRegistrationApiStream.META.metaEquals(v1.stream, v2.stream)) return false;
        return true;
        
    }
    metaToString(obj: RegistrationRootApiEnterArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('RegistrationRootApiEnterArguments(');
        res.add('cryptoLib:').add(obj.cryptoLib);
        res.add(', ');
        res.add('stream:').add(obj.stream);
        res.add(')');
        
    }
    public serializeToBytes(obj: RegistrationRootApiEnterArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): RegistrationRootApiEnterArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): RegistrationRootApiEnterArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class RegistrationRootApiGetMyIpArgumentsMetaBodyImpl implements FastMetaType<RegistrationRootApiGetMyIpArguments>  {
    serialize(sCtx_2501: MetaContext, obj_2503: RegistrationRootApiGetMyIpArguments, _out_2504: DataOut): void  {
        
    }
    deserialize(sCtx_2502: MetaContext, in__2505: DataIn): RegistrationRootApiGetMyIpArguments  {
        try  {
            return new RegistrationRootApiGetMyIpArguments();
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: RegistrationRootApiGetMyIpArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        return hash | 0;
        
    }
    metaEquals(v1: RegistrationRootApiGetMyIpArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof RegistrationRootApiGetMyIpArguments)) return false;
        return true;
        
    }
    metaToString(obj: RegistrationRootApiGetMyIpArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('RegistrationRootApiGetMyIpArguments(');
        res.add(')');
        
    }
    public serializeToBytes(obj: RegistrationRootApiGetMyIpArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): RegistrationRootApiGetMyIpArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): RegistrationRootApiGetMyIpArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class RegistrationRootApiMetaImpl implements FastMetaApi<RegistrationRootApi, RegistrationRootApiRemote>  {
    makeLocal(ctx: MetaContext, dataIn: DataIn): void  {
        this.makeLocal_fromDataIn(ctx, dataIn, ctx.getLocalApi() as RegistrationRootApi);
        
    }
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
                    const reqId_2506 = dataIn.readInt();
                    let cryptoLib_2507: CryptoLib;
                    cryptoLib_2507 = CryptoLib.META.deserialize(ctx, dataIn);
                    const argsObject_2508 = new RegistrationRootApiGetAsymmetricPublicKeyArguments(cryptoLib_2507);
                    const argsNames_2509: string[] = ["cryptoLib"];
                    const argsValues_2510: any[] = [cryptoLib_2507];
                    ctx.invokeLocalMethodBefore("getAsymmetricPublicKey", argsNames_2509, argsValues_2510);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getAsymmetricPublicKeyArguments === "function" ? (localApi as any).getAsymmetricPublicKeyArguments(argsObject_2508) : localApi.getAsymmetricPublicKey(cryptoLib_2507));
                    ctx.invokeLocalMethodAfter("getAsymmetricPublicKey", resultFuture, argsNames_2509, argsValues_2510);
                    resultFuture.to((v_2512: SignedKey) =>  {
                        const data_2511 = new DataInOut();
                        SignedKey.META.serialize(ctx, v_2512, data_2511);
                        ctx.sendResultToRemote(reqId_2506, data_2511.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let cryptoLib_2514: CryptoLib;
                    let stream_2515: ServerRegistrationApiStream;
                    cryptoLib_2514 = CryptoLib.META.deserialize(ctx, dataIn);
                    stream_2515 = ServerRegistrationApiStream.META.deserialize(ctx, dataIn);
                    const argsObject_2516 = new RegistrationRootApiEnterArguments(cryptoLib_2514, stream_2515);
                    const argsNames_2517: string[] = ["cryptoLib", "stream"];
                    const argsValues_2518: any[] = [cryptoLib_2514, stream_2515];
                    ctx.invokeLocalMethodBefore("enter", argsNames_2517, argsValues_2518);
                    (typeof (localApi as any).enterArguments === "function" ? (localApi as any).enterArguments(argsObject_2516) : localApi.enter(cryptoLib_2514, stream_2515));
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_2517, argsValues_2518);
                    break;
                    
                }
                case 6:  {
                    const reqId_2519 = dataIn.readInt();
                    const argsObject_2520 = new RegistrationRootApiGetMyIpArguments();
                    const argsNames_2521: string[] = [];
                    const argsValues_2522: any[] = [];
                    ctx.invokeLocalMethodBefore("getMyIp", argsNames_2521, argsValues_2522);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getMyIpArguments === "function" ? (localApi as any).getMyIpArguments(argsObject_2520) : localApi.getMyIp());
                    ctx.invokeLocalMethodAfter("getMyIp", resultFuture, argsNames_2521, argsValues_2522);
                    resultFuture.to((v_2524: IpInfo) =>  {
                        const data_2523 = new DataInOut();
                        IpInfo.META.serialize(ctx, v_2524, data_2523);
                        ctx.sendResultToRemote(reqId_2519, data_2523.toArray());
                        
                    }
                    );
                    break;
                    
                }
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: RegistrationRootApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_2525: MetaContext): RegistrationRootApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2525.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2525.flush();
                
            }
            , getFastMetaContext: () => sCtx_2525, getAsymmetricPublicKey: (cryptoLib: CryptoLib): ARFuture<SignedKey> =>  {
                const dataOut_2527 = new DataInOut();
                dataOut_2527.writeByte(3);
                const argsNames_2529: string[] = ["cryptoLib"];
                const argsValues_2530: any[] = [cryptoLib];
                const result_2528 = ARFuture.of<SignedKey>();
                sCtx_2525.invokeRemoteMethodAfter("getAsymmetricPublicKey", result_2528, argsNames_2529, argsValues_2530);
                const reqId_2526 = sCtx_2525.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2528 as ARFuture<SignedKey>).tryDone(SignedKey.META.deserialize(sCtx_2525, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2528.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2527.writeInt(reqId_2526);
                CryptoLib.META.serialize(sCtx_2525, cryptoLib, dataOut_2527);
                sCtx_2525.sendToRemote(dataOut_2527.toArray());
                return result_2528;
                
            }
            , enter: (cryptoLib: CryptoLib, stream: ServerRegistrationApiStream): void =>  {
                const dataOut_2532 = new DataInOut();
                dataOut_2532.writeByte(4);
                const argsNames_2534: string[] = ["cryptoLib", "stream"];
                const argsValues_2535: any[] = [cryptoLib, stream];
                sCtx_2525.invokeRemoteMethodAfter("enter", null, argsNames_2534, argsValues_2535);
                CryptoLib.META.serialize(sCtx_2525, cryptoLib, dataOut_2532);
                ServerRegistrationApiStream.META.serialize(sCtx_2525, stream, dataOut_2532);
                sCtx_2525.sendToRemote(dataOut_2532.toArray());
                
            }
            , getMyIp: (): ARFuture<IpInfo> =>  {
                const dataOut_2537 = new DataInOut();
                dataOut_2537.writeByte(6);
                const argsNames_2539: string[] = [];
                const argsValues_2540: any[] = [];
                const result_2538 = ARFuture.of<IpInfo>();
                sCtx_2525.invokeRemoteMethodAfter("getMyIp", result_2538, argsNames_2539, argsValues_2540);
                const reqId_2536 = sCtx_2525.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2538 as ARFuture<IpInfo>).tryDone(IpInfo.META.deserialize(sCtx_2525, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2538.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2537.writeInt(reqId_2536);
                sCtx_2525.sendToRemote(dataOut_2537.toArray());
                return result_2538;
                
            }
            , openEnter(cryptoLib: CryptoLib, factory: (api: ServerRegistrationApiRemote) => any, converter: BytesConverter, ...keys: any[]): ServerRegistrationApiRemote  {
                return sCtx_2525.findContext(ctx =>  {
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
    makeLocal(ctx: MetaContext, dataIn: DataIn): void  {
        this.makeLocal_fromDataIn(ctx, dataIn, ctx.getLocalApi() as ClientApiRegSafe);
        
    }
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
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ClientApiRegSafe): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_2541: MetaContext): ClientApiRegSafeRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2541.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2541.flush();
                
            }
            , getFastMetaContext: () => sCtx_2541, 
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
    makeLocal(ctx: MetaContext, dataIn: DataIn): void  {
        this.makeLocal_fromDataIn(ctx, dataIn, ctx.getLocalApi() as GlobalRegClientApi);
        
    }
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
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: GlobalRegClientApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_2542: MetaContext): GlobalRegClientApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2542.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2542.flush();
                
            }
            , getFastMetaContext: () => sCtx_2542, 
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
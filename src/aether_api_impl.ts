import  {
    AFuture, ARFuture, DataIn, DataOut, DataInOut, DataInOutStatic, FastMetaType, MetaContext, FastMeta, SerializerPackNumber, DeserializerPackNumber, RemoteApi, FastMetaApi, FastFutureContextStub, SecurityConnectionDropException, AetherException, UUID, URI, AString, BytesConverter,
}
from './aether_client';
import  {
    AetherCodec, ClientActivityType, CryptoLib, PowMethod, ServerType, Status, AetherTypeDescriptor, IPAddress, Key, KeyAsymmetric, KeyAsymmetricPrivate, KeyAsymmetricPublic, KeySign, KeySignPrivate, KeySignPublic, KeySymmetric, PairKeys, Sign, Telemetry, WorkProofConfig, AccessCheckPair, AccessCheckResult, AccessGroup, AetherApiDefinition, AetherArgumentDescriptor, AetherArrayType, AetherBaseType, AetherFieldDescriptor, AetherMethodDescriptor, AetherModuleDescriptor, AetherNullableType, AetherStreamType, AetherStructDescriptor, AppliedConfig, ClientActivity, ClientConnectionInfo, ClientInfo, ClientLogEntry, ClientStateForSave, Cloud, CloudConfig, CloudWeight, CoderAndPort, FinishResult, FinishResultGlobalRegServerApi, HydrogenCurvePrivate, HydrogenCurvePublic, HydrogenSecretBox, HydrogenSignPrivate, HydrogenSignPublic, IceCandidate, IPAddressAndPorts, IPAddressAndPortsList, IPAddressV4, IPAddressV6, IPAddressWeb, IpInfo, KeyValuePair, Message, MessageInfo, MoneyOperation, PairKeysAsym, PairKeysAsymSigned, PairKeysSign, PairKeysSym, ServerDescriptor, ServerDescriptorWithGeo, SignAE_ED25519, SignedKey, SignHYDROGEN, SodiumChacha20Poly1305, SodiumCurvePrivate, SodiumCurvePublic, SodiumSignPrivate, SodiumSignPublic, TelemetryCPP, Uap, UUIDAndCloud, WebRtcSession, WorkProofBCrypt, WorkProofDTO, ClientApiRegSafeStream, ClientApiStream, ClientInteractionClientStream, GlobalApiStream, GlobalRegClientApiStream, LoginClientStream, LoginStream, ServerRegistrationApiStream, ClientApiUnsafeSendSafeApiDataMultiArguments, ClientApiUnsafeSendSafeApiDataArguments, ClientApiSafeChangeParentArguments, ClientApiSafeChangeAliasArguments, ClientApiSafeNewChildrenArguments, ClientApiSafeSendMessagesArguments, ClientApiSafeSendServerDescriptorArguments, ClientApiSafeSendServerDescriptorsArguments, ClientApiSafeSendCloudArguments, ClientApiSafeSendCloudsArguments, ClientApiSafeRequestTelemetryArguments, ClientApiSafeSendAccessGroupsArguments, ClientApiSafeSendAccessGroupForClientArguments, ClientApiSafeAddItemsToAccessGroupArguments, ClientApiSafeRemoveItemsFromAccessGroupArguments, ClientApiSafeAddAccessGroupsToClientArguments, ClientApiSafeRemoveAccessGroupsFromClientArguments, ClientApiSafeSendAllAccessedClientsArguments, ClientApiSafeSendAccessCheckResultsArguments, ClientApiSafeSendMessageArguments, ClientApiSafeSendCloudConfigsArguments, AuthorizedApiBackIdArguments, AuthorizedApiPingArguments, AuthorizedApiClientArguments, AuthorizedApiSendMessageArguments, AuthorizedApiSendMessagesArguments, AuthorizedApiSendMulticastArguments, AuthorizedApiSendMessageWithResultArguments, AuthorizedApiCreateAccessGroupArguments, AuthorizedApiAddToAccessGroupArguments, AuthorizedApiRemoveFromAccessGroupArguments, AuthorizedApiCheckAccessForSendMessageArguments, AuthorizedApiResolverServersArguments, AuthorizedApiResolveCloudsArguments, AuthorizedApiReportAppliedConfigArguments, AuthorizedApiGetAccessGroupsArguments, AuthorizedApiGetAccessGroupArguments, AuthorizedApiGetAllAccessedClientsArguments, AuthorizedApiCheckAccessForSendMessage2Arguments, AuthorizedApiSendTelemetryArguments, AuthorizedApiRequestAccessGroupsForClientsArguments, AuthorizedApiRequestAccessGroupsItemsArguments, AuthorizedApiSendAccessGroupForClientArguments, AuthorizedApiAddItemsToAccessGroupArguments, AuthorizedApiRemoveItemsFromAccessGroupArguments, AuthorizedApiAddAccessGroupsToClientArguments, AuthorizedApiRemoveAccessGroupsFromClientArguments, AuthorizedApiRequestAllAccessedClientsArguments, AuthorizedApiRequestAccessCheckArguments, AuthorizedApiGetClientActivityArguments, AuthorizedApiSearchClientLogsArguments, AuthorizedApiGetClientConnectionsArguments, AuthorizedApiGetClientMessagesArguments, AuthorizedApiSetNextReadDelayArguments, AuthorizedApiGetUapArguments, AuthorizedApiPullMessagesArguments, AuthorizedApiRequestWebRtcSessionArguments, AuthorizedApiPublishWebRtcSessionArguments, AuthorizedApiSelfDestructArguments, LoginApiGetTimeUTCArguments, LoginApiLoginByUIDArguments, LoginApiLoginByAliasArguments, LoginApiGetMyIpArguments, ServerApiByUidGetBalanceArguments, ServerApiByUidSetParentArguments, ServerApiByUidBlockArguments, ServerApiByUidGetPositionArguments, ServerApiByUidGetParentArguments, ServerApiByUidGetBeneficiaryArguments, ServerApiByUidSetBeneficiaryArguments, ServerApiByUidGetBlockTimeArguments, ServerApiByUidUnblockArguments, ServerApiByUidCreateTimeArguments, ServerApiByUidOnlineTimeArguments, ServerApiByUidAddAccessGroupArguments, ServerApiByUidRemoveAccessGroupArguments, ServerApiByUidSetMsgQueueLimitArguments, ServerApiByUidSetMsgTimeLimitArguments, ClientApiRegUnsafeEnterArguments, ClientApiRegUnsafeEnterGlobalArguments, GlobalRegServerApiSetMasterKeyArguments, GlobalRegServerApiFinishArguments, ServerRegistrationApiRegistrationArguments, ServerRegistrationApiRequestWorkProofDataArguments, ServerRegistrationApiResolveServersArguments, ServerRegistrationApiSetReturnKeyArguments, RegistrationRootApiGetAsymmetricPublicKeyArguments, RegistrationRootApiEnterArguments, RegistrationRootApiGetMyIpArguments, ClientApiUnsafe, ClientApiSafe, AuthorizedApi, LoginApi, ServerApiByUidClient, ServerApiByUid, ClientApiRegUnsafe, GlobalRegServerApi, ServerRegistrationApi, RegistrationRootApi, ClientApiRegSafe, GlobalRegClientApi, ClientApiUnsafeRemote, ClientApiSafeRemote, AuthorizedApiRemote, LoginApiRemote, ServerApiByUidClientRemote, ServerApiByUidRemote, ClientApiRegUnsafeRemote, GlobalRegServerApiRemote, ServerRegistrationApiRemote, RegistrationRootApiRemote, ClientApiRegSafeRemote, GlobalRegClientApiRemote
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
                    let uid_969: UUID;
                    uid_969 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_970 = new ClientApiSafeChangeParentArguments(uid_969);
                    const argsNames_971: string[] = ["uid"];
                    const argsValues_972: any[] = [uid_969];
                    ctx.invokeLocalMethodBefore("changeParent", argsNames_971, argsValues_972);
                    (typeof (localApi as any).changeParentArguments === "function" ? (localApi as any).changeParentArguments(argsObject_970) : localApi.changeParent(uid_969));
                    ctx.invokeLocalMethodAfter("changeParent", null, argsNames_971, argsValues_972);
                    break;
                    
                }
                case 4:  {
                    let alias_974: UUID;
                    alias_974 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_975 = new ClientApiSafeChangeAliasArguments(alias_974);
                    const argsNames_976: string[] = ["alias"];
                    const argsValues_977: any[] = [alias_974];
                    ctx.invokeLocalMethodBefore("changeAlias", argsNames_976, argsValues_977);
                    (typeof (localApi as any).changeAliasArguments === "function" ? (localApi as any).changeAliasArguments(argsObject_975) : localApi.changeAlias(alias_974));
                    ctx.invokeLocalMethodAfter("changeAlias", null, argsNames_976, argsValues_977);
                    break;
                    
                }
                case 5:  {
                    let uids_979: UUID[];
                    const len_981 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_979 = new Array<UUID>(len_981);
                    for (let idx_980 = 0;
                    idx_980 < len_981;
                    idx_980++)  {
                        uids_979[idx_980] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_982 = new ClientApiSafeNewChildrenArguments(uids_979);
                    const argsNames_983: string[] = ["uids"];
                    const argsValues_984: any[] = [uids_979];
                    ctx.invokeLocalMethodBefore("newChildren", argsNames_983, argsValues_984);
                    (typeof (localApi as any).newChildrenArguments === "function" ? (localApi as any).newChildrenArguments(argsObject_982) : localApi.newChildren(uids_979));
                    ctx.invokeLocalMethodAfter("newChildren", null, argsNames_983, argsValues_984);
                    break;
                    
                }
                case 6:  {
                    let msg_986: Message[];
                    const len_988 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_986 = new Array<Message>(len_988);
                    for (let idx_987 = 0;
                    idx_987 < len_988;
                    idx_987++)  {
                        msg_986[idx_987] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_989 = new ClientApiSafeSendMessagesArguments(msg_986);
                    const argsNames_990: string[] = ["msg"];
                    const argsValues_991: any[] = [msg_986];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_990, argsValues_991);
                    (typeof (localApi as any).sendMessagesArguments === "function" ? (localApi as any).sendMessagesArguments(argsObject_989) : localApi.sendMessages(msg_986));
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_990, argsValues_991);
                    break;
                    
                }
                case 7:  {
                    let serverDescriptor_993: ServerDescriptor;
                    serverDescriptor_993 = ServerDescriptor.META.deserialize(ctx, dataIn);
                    const argsObject_994 = new ClientApiSafeSendServerDescriptorArguments(serverDescriptor_993);
                    const argsNames_995: string[] = ["serverDescriptor"];
                    const argsValues_996: any[] = [serverDescriptor_993];
                    ctx.invokeLocalMethodBefore("sendServerDescriptor", argsNames_995, argsValues_996);
                    (typeof (localApi as any).sendServerDescriptorArguments === "function" ? (localApi as any).sendServerDescriptorArguments(argsObject_994) : localApi.sendServerDescriptor(serverDescriptor_993));
                    ctx.invokeLocalMethodAfter("sendServerDescriptor", null, argsNames_995, argsValues_996);
                    break;
                    
                }
                case 8:  {
                    let serverDescriptors_998: ServerDescriptor[];
                    const len_1000 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    serverDescriptors_998 = new Array<ServerDescriptor>(len_1000);
                    for (let idx_999 = 0;
                    idx_999 < len_1000;
                    idx_999++)  {
                        serverDescriptors_998[idx_999] = ServerDescriptor.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1001 = new ClientApiSafeSendServerDescriptorsArguments(serverDescriptors_998);
                    const argsNames_1002: string[] = ["serverDescriptors"];
                    const argsValues_1003: any[] = [serverDescriptors_998];
                    ctx.invokeLocalMethodBefore("sendServerDescriptors", argsNames_1002, argsValues_1003);
                    (typeof (localApi as any).sendServerDescriptorsArguments === "function" ? (localApi as any).sendServerDescriptorsArguments(argsObject_1001) : localApi.sendServerDescriptors(serverDescriptors_998));
                    ctx.invokeLocalMethodAfter("sendServerDescriptors", null, argsNames_1002, argsValues_1003);
                    break;
                    
                }
                case 9:  {
                    let uidAndCloud_1005: UUIDAndCloud;
                    uidAndCloud_1005 = UUIDAndCloud.META.deserialize(ctx, dataIn);
                    const argsObject_1006 = new ClientApiSafeSendCloudArguments(uidAndCloud_1005);
                    const argsNames_1007: string[] = ["uidAndCloud"];
                    const argsValues_1008: any[] = [uidAndCloud_1005];
                    ctx.invokeLocalMethodBefore("sendCloud", argsNames_1007, argsValues_1008);
                    (typeof (localApi as any).sendCloudArguments === "function" ? (localApi as any).sendCloudArguments(argsObject_1006) : localApi.sendCloud(uidAndCloud_1005));
                    ctx.invokeLocalMethodAfter("sendCloud", null, argsNames_1007, argsValues_1008);
                    break;
                    
                }
                case 10:  {
                    let clouds_1010: UUIDAndCloud[];
                    const len_1012 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    clouds_1010 = new Array<UUIDAndCloud>(len_1012);
                    for (let idx_1011 = 0;
                    idx_1011 < len_1012;
                    idx_1011++)  {
                        clouds_1010[idx_1011] = UUIDAndCloud.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1013 = new ClientApiSafeSendCloudsArguments(clouds_1010);
                    const argsNames_1014: string[] = ["clouds"];
                    const argsValues_1015: any[] = [clouds_1010];
                    ctx.invokeLocalMethodBefore("sendClouds", argsNames_1014, argsValues_1015);
                    (typeof (localApi as any).sendCloudsArguments === "function" ? (localApi as any).sendCloudsArguments(argsObject_1013) : localApi.sendClouds(clouds_1010));
                    ctx.invokeLocalMethodAfter("sendClouds", null, argsNames_1014, argsValues_1015);
                    break;
                    
                }
                case 11:  {
                    const argsObject_1017 = new ClientApiSafeRequestTelemetryArguments();
                    const argsNames_1018: string[] = [];
                    const argsValues_1019: any[] = [];
                    ctx.invokeLocalMethodBefore("requestTelemetry", argsNames_1018, argsValues_1019);
                    (typeof (localApi as any).requestTelemetryArguments === "function" ? (localApi as any).requestTelemetryArguments(argsObject_1017) : localApi.requestTelemetry());
                    ctx.invokeLocalMethodAfter("requestTelemetry", null, argsNames_1018, argsValues_1019);
                    break;
                    
                }
                case 12:  {
                    let groups_1021: AccessGroup[];
                    const len_1023 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1021 = new Array<AccessGroup>(len_1023);
                    for (let idx_1022 = 0;
                    idx_1022 < len_1023;
                    idx_1022++)  {
                        groups_1021[idx_1022] = AccessGroup.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1024 = new ClientApiSafeSendAccessGroupsArguments(groups_1021);
                    const argsNames_1025: string[] = ["groups"];
                    const argsValues_1026: any[] = [groups_1021];
                    ctx.invokeLocalMethodBefore("sendAccessGroups", argsNames_1025, argsValues_1026);
                    (typeof (localApi as any).sendAccessGroupsArguments === "function" ? (localApi as any).sendAccessGroupsArguments(argsObject_1024) : localApi.sendAccessGroups(groups_1021));
                    ctx.invokeLocalMethodAfter("sendAccessGroups", null, argsNames_1025, argsValues_1026);
                    break;
                    
                }
                case 13:  {
                    let uid_1028: UUID;
                    let groups_1029: UUID[];
                    uid_1028 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1031 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1029 = new Array<UUID>(len_1031);
                    for (let idx_1030 = 0;
                    idx_1030 < len_1031;
                    idx_1030++)  {
                        groups_1029[idx_1030] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1032 = new ClientApiSafeSendAccessGroupForClientArguments(uid_1028, groups_1029);
                    const argsNames_1033: string[] = ["uid", "groups"];
                    const argsValues_1034: any[] = [uid_1028, groups_1029];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_1033, argsValues_1034);
                    (typeof (localApi as any).sendAccessGroupForClientArguments === "function" ? (localApi as any).sendAccessGroupForClientArguments(argsObject_1032) : localApi.sendAccessGroupForClient(uid_1028, groups_1029));
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_1033, argsValues_1034);
                    break;
                    
                }
                case 14:  {
                    let id_1036: UUID;
                    let groups_1037: UUID[];
                    id_1036 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1039 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1037 = new Array<UUID>(len_1039);
                    for (let idx_1038 = 0;
                    idx_1038 < len_1039;
                    idx_1038++)  {
                        groups_1037[idx_1038] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1040 = new ClientApiSafeAddItemsToAccessGroupArguments(id_1036, groups_1037);
                    const argsNames_1041: string[] = ["id", "groups"];
                    const argsValues_1042: any[] = [id_1036, groups_1037];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_1041, argsValues_1042);
                    (typeof (localApi as any).addItemsToAccessGroupArguments === "function" ? (localApi as any).addItemsToAccessGroupArguments(argsObject_1040) : localApi.addItemsToAccessGroup(id_1036, groups_1037));
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_1041, argsValues_1042);
                    break;
                    
                }
                case 15:  {
                    let id_1044: UUID;
                    let groups_1045: UUID[];
                    id_1044 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1047 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1045 = new Array<UUID>(len_1047);
                    for (let idx_1046 = 0;
                    idx_1046 < len_1047;
                    idx_1046++)  {
                        groups_1045[idx_1046] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1048 = new ClientApiSafeRemoveItemsFromAccessGroupArguments(id_1044, groups_1045);
                    const argsNames_1049: string[] = ["id", "groups"];
                    const argsValues_1050: any[] = [id_1044, groups_1045];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_1049, argsValues_1050);
                    (typeof (localApi as any).removeItemsFromAccessGroupArguments === "function" ? (localApi as any).removeItemsFromAccessGroupArguments(argsObject_1048) : localApi.removeItemsFromAccessGroup(id_1044, groups_1045));
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_1049, argsValues_1050);
                    break;
                    
                }
                case 16:  {
                    let uid_1052: UUID;
                    let groups_1053: UUID[];
                    uid_1052 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1055 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1053 = new Array<UUID>(len_1055);
                    for (let idx_1054 = 0;
                    idx_1054 < len_1055;
                    idx_1054++)  {
                        groups_1053[idx_1054] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1056 = new ClientApiSafeAddAccessGroupsToClientArguments(uid_1052, groups_1053);
                    const argsNames_1057: string[] = ["uid", "groups"];
                    const argsValues_1058: any[] = [uid_1052, groups_1053];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_1057, argsValues_1058);
                    (typeof (localApi as any).addAccessGroupsToClientArguments === "function" ? (localApi as any).addAccessGroupsToClientArguments(argsObject_1056) : localApi.addAccessGroupsToClient(uid_1052, groups_1053));
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_1057, argsValues_1058);
                    break;
                    
                }
                case 17:  {
                    let uid_1060: UUID;
                    let groups_1061: UUID[];
                    uid_1060 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1063 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1061 = new Array<UUID>(len_1063);
                    for (let idx_1062 = 0;
                    idx_1062 < len_1063;
                    idx_1062++)  {
                        groups_1061[idx_1062] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1064 = new ClientApiSafeRemoveAccessGroupsFromClientArguments(uid_1060, groups_1061);
                    const argsNames_1065: string[] = ["uid", "groups"];
                    const argsValues_1066: any[] = [uid_1060, groups_1061];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_1065, argsValues_1066);
                    (typeof (localApi as any).removeAccessGroupsFromClientArguments === "function" ? (localApi as any).removeAccessGroupsFromClientArguments(argsObject_1064) : localApi.removeAccessGroupsFromClient(uid_1060, groups_1061));
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_1065, argsValues_1066);
                    break;
                    
                }
                case 18:  {
                    let uid_1068: UUID;
                    let accessedClients_1069: UUID[];
                    uid_1068 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1071 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    accessedClients_1069 = new Array<UUID>(len_1071);
                    for (let idx_1070 = 0;
                    idx_1070 < len_1071;
                    idx_1070++)  {
                        accessedClients_1069[idx_1070] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1072 = new ClientApiSafeSendAllAccessedClientsArguments(uid_1068, accessedClients_1069);
                    const argsNames_1073: string[] = ["uid", "accessedClients"];
                    const argsValues_1074: any[] = [uid_1068, accessedClients_1069];
                    ctx.invokeLocalMethodBefore("sendAllAccessedClients", argsNames_1073, argsValues_1074);
                    (typeof (localApi as any).sendAllAccessedClientsArguments === "function" ? (localApi as any).sendAllAccessedClientsArguments(argsObject_1072) : localApi.sendAllAccessedClients(uid_1068, accessedClients_1069));
                    ctx.invokeLocalMethodAfter("sendAllAccessedClients", null, argsNames_1073, argsValues_1074);
                    break;
                    
                }
                case 19:  {
                    let results_1076: AccessCheckResult[];
                    const len_1078 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    results_1076 = new Array<AccessCheckResult>(len_1078);
                    for (let idx_1077 = 0;
                    idx_1077 < len_1078;
                    idx_1077++)  {
                        results_1076[idx_1077] = AccessCheckResult.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1079 = new ClientApiSafeSendAccessCheckResultsArguments(results_1076);
                    const argsNames_1080: string[] = ["results"];
                    const argsValues_1081: any[] = [results_1076];
                    ctx.invokeLocalMethodBefore("sendAccessCheckResults", argsNames_1080, argsValues_1081);
                    (typeof (localApi as any).sendAccessCheckResultsArguments === "function" ? (localApi as any).sendAccessCheckResultsArguments(argsObject_1079) : localApi.sendAccessCheckResults(results_1076));
                    ctx.invokeLocalMethodAfter("sendAccessCheckResults", null, argsNames_1080, argsValues_1081);
                    break;
                    
                }
                case 20:  {
                    let msg_1083: Message;
                    msg_1083 = Message.META.deserialize(ctx, dataIn);
                    const argsObject_1084 = new ClientApiSafeSendMessageArguments(msg_1083);
                    const argsNames_1085: string[] = ["msg"];
                    const argsValues_1086: any[] = [msg_1083];
                    ctx.invokeLocalMethodBefore("sendMessage", argsNames_1085, argsValues_1086);
                    (typeof (localApi as any).sendMessageArguments === "function" ? (localApi as any).sendMessageArguments(argsObject_1084) : localApi.sendMessage(msg_1083));
                    ctx.invokeLocalMethodAfter("sendMessage", null, argsNames_1085, argsValues_1086);
                    break;
                    
                }
                case 21:  {
                    let configs_1088: CloudConfig[];
                    const len_1090 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    configs_1088 = new Array<CloudConfig>(len_1090);
                    for (let idx_1089 = 0;
                    idx_1089 < len_1090;
                    idx_1089++)  {
                        configs_1088[idx_1089] = CloudConfig.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1091 = new ClientApiSafeSendCloudConfigsArguments(configs_1088);
                    const argsNames_1092: string[] = ["configs"];
                    const argsValues_1093: any[] = [configs_1088];
                    ctx.invokeLocalMethodBefore("sendCloudConfigs", argsNames_1092, argsValues_1093);
                    (typeof (localApi as any).sendCloudConfigsArguments === "function" ? (localApi as any).sendCloudConfigsArguments(argsObject_1091) : localApi.sendCloudConfigs(configs_1088));
                    ctx.invokeLocalMethodAfter("sendCloudConfigs", null, argsNames_1092, argsValues_1093);
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
    makeRemote(sCtx_1094: MetaContext): ClientApiSafeRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_1094.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_1094.flush();
                
            }
            , getFastMetaContext: () => sCtx_1094, changeParent: (uid: UUID): void =>  {
                const dataOut_1096 = new DataInOut();
                dataOut_1096.writeByte(3);
                const argsNames_1098: string[] = ["uid"];
                const argsValues_1099: any[] = [uid];
                sCtx_1094.invokeRemoteMethodAfter("changeParent", null, argsNames_1098, argsValues_1099);
                FastMeta.META_UUID.serialize(sCtx_1094, uid, dataOut_1096);
                sCtx_1094.sendToRemote(dataOut_1096.toArray());
                
            }
            , changeAlias: (alias: UUID): void =>  {
                const dataOut_1101 = new DataInOut();
                dataOut_1101.writeByte(4);
                const argsNames_1103: string[] = ["alias"];
                const argsValues_1104: any[] = [alias];
                sCtx_1094.invokeRemoteMethodAfter("changeAlias", null, argsNames_1103, argsValues_1104);
                FastMeta.META_UUID.serialize(sCtx_1094, alias, dataOut_1101);
                sCtx_1094.sendToRemote(dataOut_1101.toArray());
                
            }
            , newChildren: (uids: UUID[]): void =>  {
                const dataOut_1106 = new DataInOut();
                dataOut_1106.writeByte(5);
                const argsNames_1108: string[] = ["uids"];
                const argsValues_1109: any[] = [uids];
                sCtx_1094.invokeRemoteMethodAfter("newChildren", null, argsNames_1108, argsValues_1109);
                SerializerPackNumber.INSTANCE.put(dataOut_1106, uids.length);
                for (const el_1110 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1094, el_1110, dataOut_1106);
                    
                }
                sCtx_1094.sendToRemote(dataOut_1106.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_1112 = new DataInOut();
                dataOut_1112.writeByte(6);
                const argsNames_1114: string[] = ["msg"];
                const argsValues_1115: any[] = [msg];
                sCtx_1094.invokeRemoteMethodAfter("sendMessages", null, argsNames_1114, argsValues_1115);
                SerializerPackNumber.INSTANCE.put(dataOut_1112, msg.length);
                for (const el_1116 of msg)  {
                    Message.META.serialize(sCtx_1094, el_1116, dataOut_1112);
                    
                }
                sCtx_1094.sendToRemote(dataOut_1112.toArray());
                
            }
            , sendServerDescriptor: (serverDescriptor: ServerDescriptor): void =>  {
                const dataOut_1118 = new DataInOut();
                dataOut_1118.writeByte(7);
                const argsNames_1120: string[] = ["serverDescriptor"];
                const argsValues_1121: any[] = [serverDescriptor];
                sCtx_1094.invokeRemoteMethodAfter("sendServerDescriptor", null, argsNames_1120, argsValues_1121);
                ServerDescriptor.META.serialize(sCtx_1094, serverDescriptor, dataOut_1118);
                sCtx_1094.sendToRemote(dataOut_1118.toArray());
                
            }
            , sendServerDescriptors: (serverDescriptors: ServerDescriptor[]): void =>  {
                const dataOut_1123 = new DataInOut();
                dataOut_1123.writeByte(8);
                const argsNames_1125: string[] = ["serverDescriptors"];
                const argsValues_1126: any[] = [serverDescriptors];
                sCtx_1094.invokeRemoteMethodAfter("sendServerDescriptors", null, argsNames_1125, argsValues_1126);
                SerializerPackNumber.INSTANCE.put(dataOut_1123, serverDescriptors.length);
                for (const el_1127 of serverDescriptors)  {
                    ServerDescriptor.META.serialize(sCtx_1094, el_1127, dataOut_1123);
                    
                }
                sCtx_1094.sendToRemote(dataOut_1123.toArray());
                
            }
            , sendCloud: (uidAndCloud: UUIDAndCloud): void =>  {
                const dataOut_1129 = new DataInOut();
                dataOut_1129.writeByte(9);
                const argsNames_1131: string[] = ["uidAndCloud"];
                const argsValues_1132: any[] = [uidAndCloud];
                sCtx_1094.invokeRemoteMethodAfter("sendCloud", null, argsNames_1131, argsValues_1132);
                UUIDAndCloud.META.serialize(sCtx_1094, uidAndCloud, dataOut_1129);
                sCtx_1094.sendToRemote(dataOut_1129.toArray());
                
            }
            , sendClouds: (clouds: UUIDAndCloud[]): void =>  {
                const dataOut_1134 = new DataInOut();
                dataOut_1134.writeByte(10);
                const argsNames_1136: string[] = ["clouds"];
                const argsValues_1137: any[] = [clouds];
                sCtx_1094.invokeRemoteMethodAfter("sendClouds", null, argsNames_1136, argsValues_1137);
                SerializerPackNumber.INSTANCE.put(dataOut_1134, clouds.length);
                for (const el_1138 of clouds)  {
                    UUIDAndCloud.META.serialize(sCtx_1094, el_1138, dataOut_1134);
                    
                }
                sCtx_1094.sendToRemote(dataOut_1134.toArray());
                
            }
            , requestTelemetry: (): void =>  {
                const dataOut_1140 = new DataInOut();
                dataOut_1140.writeByte(11);
                const argsNames_1142: string[] = [];
                const argsValues_1143: any[] = [];
                sCtx_1094.invokeRemoteMethodAfter("requestTelemetry", null, argsNames_1142, argsValues_1143);
                sCtx_1094.sendToRemote(dataOut_1140.toArray());
                
            }
            , sendAccessGroups: (groups: AccessGroup[]): void =>  {
                const dataOut_1145 = new DataInOut();
                dataOut_1145.writeByte(12);
                const argsNames_1147: string[] = ["groups"];
                const argsValues_1148: any[] = [groups];
                sCtx_1094.invokeRemoteMethodAfter("sendAccessGroups", null, argsNames_1147, argsValues_1148);
                SerializerPackNumber.INSTANCE.put(dataOut_1145, groups.length);
                for (const el_1149 of groups)  {
                    AccessGroup.META.serialize(sCtx_1094, el_1149, dataOut_1145);
                    
                }
                sCtx_1094.sendToRemote(dataOut_1145.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_1151 = new DataInOut();
                dataOut_1151.writeByte(13);
                const argsNames_1153: string[] = ["uid", "groups"];
                const argsValues_1154: any[] = [uid, groups];
                sCtx_1094.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_1153, argsValues_1154);
                FastMeta.META_UUID.serialize(sCtx_1094, uid, dataOut_1151);
                SerializerPackNumber.INSTANCE.put(dataOut_1151, groups.length);
                for (const el_1155 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1094, el_1155, dataOut_1151);
                    
                }
                sCtx_1094.sendToRemote(dataOut_1151.toArray());
                
            }
            , addItemsToAccessGroup: (id: UUID, groups: UUID[]): void =>  {
                const dataOut_1157 = new DataInOut();
                dataOut_1157.writeByte(14);
                const argsNames_1159: string[] = ["id", "groups"];
                const argsValues_1160: any[] = [id, groups];
                sCtx_1094.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_1159, argsValues_1160);
                FastMeta.META_UUID.serialize(sCtx_1094, id, dataOut_1157);
                SerializerPackNumber.INSTANCE.put(dataOut_1157, groups.length);
                for (const el_1161 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1094, el_1161, dataOut_1157);
                    
                }
                sCtx_1094.sendToRemote(dataOut_1157.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: UUID, groups: UUID[]): void =>  {
                const dataOut_1163 = new DataInOut();
                dataOut_1163.writeByte(15);
                const argsNames_1165: string[] = ["id", "groups"];
                const argsValues_1166: any[] = [id, groups];
                sCtx_1094.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_1165, argsValues_1166);
                FastMeta.META_UUID.serialize(sCtx_1094, id, dataOut_1163);
                SerializerPackNumber.INSTANCE.put(dataOut_1163, groups.length);
                for (const el_1167 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1094, el_1167, dataOut_1163);
                    
                }
                sCtx_1094.sendToRemote(dataOut_1163.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_1169 = new DataInOut();
                dataOut_1169.writeByte(16);
                const argsNames_1171: string[] = ["uid", "groups"];
                const argsValues_1172: any[] = [uid, groups];
                sCtx_1094.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_1171, argsValues_1172);
                FastMeta.META_UUID.serialize(sCtx_1094, uid, dataOut_1169);
                SerializerPackNumber.INSTANCE.put(dataOut_1169, groups.length);
                for (const el_1173 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1094, el_1173, dataOut_1169);
                    
                }
                sCtx_1094.sendToRemote(dataOut_1169.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_1175 = new DataInOut();
                dataOut_1175.writeByte(17);
                const argsNames_1177: string[] = ["uid", "groups"];
                const argsValues_1178: any[] = [uid, groups];
                sCtx_1094.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_1177, argsValues_1178);
                FastMeta.META_UUID.serialize(sCtx_1094, uid, dataOut_1175);
                SerializerPackNumber.INSTANCE.put(dataOut_1175, groups.length);
                for (const el_1179 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1094, el_1179, dataOut_1175);
                    
                }
                sCtx_1094.sendToRemote(dataOut_1175.toArray());
                
            }
            , sendAllAccessedClients: (uid: UUID, accessedClients: UUID[]): void =>  {
                const dataOut_1181 = new DataInOut();
                dataOut_1181.writeByte(18);
                const argsNames_1183: string[] = ["uid", "accessedClients"];
                const argsValues_1184: any[] = [uid, accessedClients];
                sCtx_1094.invokeRemoteMethodAfter("sendAllAccessedClients", null, argsNames_1183, argsValues_1184);
                FastMeta.META_UUID.serialize(sCtx_1094, uid, dataOut_1181);
                SerializerPackNumber.INSTANCE.put(dataOut_1181, accessedClients.length);
                for (const el_1185 of accessedClients)  {
                    FastMeta.META_UUID.serialize(sCtx_1094, el_1185, dataOut_1181);
                    
                }
                sCtx_1094.sendToRemote(dataOut_1181.toArray());
                
            }
            , sendAccessCheckResults: (results: AccessCheckResult[]): void =>  {
                const dataOut_1187 = new DataInOut();
                dataOut_1187.writeByte(19);
                const argsNames_1189: string[] = ["results"];
                const argsValues_1190: any[] = [results];
                sCtx_1094.invokeRemoteMethodAfter("sendAccessCheckResults", null, argsNames_1189, argsValues_1190);
                SerializerPackNumber.INSTANCE.put(dataOut_1187, results.length);
                for (const el_1191 of results)  {
                    AccessCheckResult.META.serialize(sCtx_1094, el_1191, dataOut_1187);
                    
                }
                sCtx_1094.sendToRemote(dataOut_1187.toArray());
                
            }
            , sendMessage: (msg: Message): void =>  {
                const dataOut_1193 = new DataInOut();
                dataOut_1193.writeByte(20);
                const argsNames_1195: string[] = ["msg"];
                const argsValues_1196: any[] = [msg];
                sCtx_1094.invokeRemoteMethodAfter("sendMessage", null, argsNames_1195, argsValues_1196);
                Message.META.serialize(sCtx_1094, msg, dataOut_1193);
                sCtx_1094.sendToRemote(dataOut_1193.toArray());
                
            }
            , sendCloudConfigs: (configs: CloudConfig[]): void =>  {
                const dataOut_1198 = new DataInOut();
                dataOut_1198.writeByte(21);
                const argsNames_1200: string[] = ["configs"];
                const argsValues_1201: any[] = [configs];
                sCtx_1094.invokeRemoteMethodAfter("sendCloudConfigs", null, argsNames_1200, argsValues_1201);
                SerializerPackNumber.INSTANCE.put(dataOut_1198, configs.length);
                for (const el_1202 of configs)  {
                    CloudConfig.META.serialize(sCtx_1094, el_1202, dataOut_1198);
                    
                }
                sCtx_1094.sendToRemote(dataOut_1198.toArray());
                
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
export class AuthorizedApiBackIdArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiBackIdArguments>  {
    serialize(sCtx_1203: MetaContext, obj_1204: AuthorizedApiBackIdArguments, _out_1205: DataOut): void  {
        _out_1205.writeByte(obj_1204.id);
        
    }
    deserialize(sCtx_1203: MetaContext, in__1206: DataIn): AuthorizedApiBackIdArguments  {
        try  {
            let id_1207: number;
            id_1207 = in__1206.readByte();
            return new AuthorizedApiBackIdArguments(id_1207);
            
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
    serialize(sCtx_1208: MetaContext, obj_1209: AuthorizedApiPingArguments, _out_1210: DataOut): void  {
        _out_1210.writeLong(obj_1209.nextConnectMsDuration);
        _out_1210.writeLong(obj_1209.rxWindowMs);
        
    }
    deserialize(sCtx_1208: MetaContext, in__1211: DataIn): AuthorizedApiPingArguments  {
        try  {
            let nextConnectMsDuration_1212: bigint;
            let rxWindowMs_1213: bigint;
            nextConnectMsDuration_1212 = in__1211.readLong();
            rxWindowMs_1213 = in__1211.readLong();
            return new AuthorizedApiPingArguments(nextConnectMsDuration_1212, rxWindowMs_1213);
            
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
    serialize(sCtx_1214: MetaContext, obj_1215: AuthorizedApiClientArguments, _out_1216: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1214, obj_1215.uid, _out_1216);
        ClientApiStream.META.serialize(sCtx_1214, obj_1215.stream, _out_1216);
        
    }
    deserialize(sCtx_1214: MetaContext, in__1217: DataIn): AuthorizedApiClientArguments  {
        try  {
            let uid_1218: UUID;
            let stream_1219: ClientApiStream;
            uid_1218 = FastMeta.META_UUID.deserialize(sCtx_1214, in__1217);
            stream_1219 = ClientApiStream.META.deserialize(sCtx_1214, in__1217);
            return new AuthorizedApiClientArguments(uid_1218, stream_1219);
            
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
    serialize(sCtx_1220: MetaContext, obj_1221: AuthorizedApiSendMessageArguments, _out_1222: DataOut): void  {
        Message.META.serialize(sCtx_1220, obj_1221.msg, _out_1222);
        
    }
    deserialize(sCtx_1220: MetaContext, in__1223: DataIn): AuthorizedApiSendMessageArguments  {
        try  {
            let msg_1224: Message;
            msg_1224 = Message.META.deserialize(sCtx_1220, in__1223);
            return new AuthorizedApiSendMessageArguments(msg_1224);
            
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
    serialize(sCtx_1225: MetaContext, obj_1226: AuthorizedApiSendMessagesArguments, _out_1227: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1227, obj_1226.msg.length);
        for (const el_1229 of obj_1226.msg)  {
            Message.META.serialize(sCtx_1225, el_1229, _out_1227);
            
        }
        
    }
    deserialize(sCtx_1225: MetaContext, in__1228: DataIn): AuthorizedApiSendMessagesArguments  {
        try  {
            let msg_1230: Message[];
            const len_1232 = Number(DeserializerPackNumber.INSTANCE.put(in__1228));
            msg_1230 = new Array<Message>(len_1232);
            for (let idx_1231 = 0;
            idx_1231 < len_1232;
            idx_1231++)  {
                msg_1230[idx_1231] = Message.META.deserialize(sCtx_1225, in__1228);
                
            }
            return new AuthorizedApiSendMessagesArguments(msg_1230);
            
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
    serialize(sCtx_1233: MetaContext, obj_1234: AuthorizedApiSendMulticastArguments, _out_1235: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1235, obj_1234.uids.length);
        for (const el_1237 of obj_1234.uids)  {
            FastMeta.META_UUID.serialize(sCtx_1233, el_1237, _out_1235);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_1235, obj_1234.data.length);
        _out_1235.write(obj_1234.data);
        
    }
    deserialize(sCtx_1233: MetaContext, in__1236: DataIn): AuthorizedApiSendMulticastArguments  {
        try  {
            let uids_1239: UUID[];
            let data_1240: Uint8Array;
            const len_1242 = Number(DeserializerPackNumber.INSTANCE.put(in__1236));
            uids_1239 = new Array<UUID>(len_1242);
            for (let idx_1241 = 0;
            idx_1241 < len_1242;
            idx_1241++)  {
                uids_1239[idx_1241] = FastMeta.META_UUID.deserialize(sCtx_1233, in__1236);
                
            }
            const len_1244 = Number(DeserializerPackNumber.INSTANCE.put(in__1236));
            const bytes_1245 = in__1236.readBytes(len_1244);
            data_1240 = bytes_1245;
            return new AuthorizedApiSendMulticastArguments(uids_1239, data_1240);
            
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
    serialize(sCtx_1246: MetaContext, obj_1247: AuthorizedApiSendMessageWithResultArguments, _out_1248: DataOut): void  {
        Message.META.serialize(sCtx_1246, obj_1247.msg, _out_1248);
        
    }
    deserialize(sCtx_1246: MetaContext, in__1249: DataIn): AuthorizedApiSendMessageWithResultArguments  {
        try  {
            let msg_1250: Message;
            msg_1250 = Message.META.deserialize(sCtx_1246, in__1249);
            return new AuthorizedApiSendMessageWithResultArguments(msg_1250);
            
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
    serialize(sCtx_1251: MetaContext, obj_1252: AuthorizedApiCreateAccessGroupArguments, _out_1253: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1251, obj_1252.owner, _out_1253);
        SerializerPackNumber.INSTANCE.put(_out_1253, obj_1252.uids.length);
        for (const el_1255 of obj_1252.uids)  {
            FastMeta.META_UUID.serialize(sCtx_1251, el_1255, _out_1253);
            
        }
        
    }
    deserialize(sCtx_1251: MetaContext, in__1254: DataIn): AuthorizedApiCreateAccessGroupArguments  {
        try  {
            let owner_1256: UUID;
            let uids_1257: UUID[];
            owner_1256 = FastMeta.META_UUID.deserialize(sCtx_1251, in__1254);
            const len_1259 = Number(DeserializerPackNumber.INSTANCE.put(in__1254));
            uids_1257 = new Array<UUID>(len_1259);
            for (let idx_1258 = 0;
            idx_1258 < len_1259;
            idx_1258++)  {
                uids_1257[idx_1258] = FastMeta.META_UUID.deserialize(sCtx_1251, in__1254);
                
            }
            return new AuthorizedApiCreateAccessGroupArguments(owner_1256, uids_1257);
            
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
    serialize(sCtx_1260: MetaContext, obj_1261: AuthorizedApiAddToAccessGroupArguments, _out_1262: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1260, obj_1261.groupId, _out_1262);
        FastMeta.META_UUID.serialize(sCtx_1260, obj_1261.uid, _out_1262);
        
    }
    deserialize(sCtx_1260: MetaContext, in__1263: DataIn): AuthorizedApiAddToAccessGroupArguments  {
        try  {
            let groupId_1264: UUID;
            let uid_1265: UUID;
            groupId_1264 = FastMeta.META_UUID.deserialize(sCtx_1260, in__1263);
            uid_1265 = FastMeta.META_UUID.deserialize(sCtx_1260, in__1263);
            return new AuthorizedApiAddToAccessGroupArguments(groupId_1264, uid_1265);
            
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
    serialize(sCtx_1266: MetaContext, obj_1267: AuthorizedApiRemoveFromAccessGroupArguments, _out_1268: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1266, obj_1267.groupId, _out_1268);
        FastMeta.META_UUID.serialize(sCtx_1266, obj_1267.uid, _out_1268);
        
    }
    deserialize(sCtx_1266: MetaContext, in__1269: DataIn): AuthorizedApiRemoveFromAccessGroupArguments  {
        try  {
            let groupId_1270: UUID;
            let uid_1271: UUID;
            groupId_1270 = FastMeta.META_UUID.deserialize(sCtx_1266, in__1269);
            uid_1271 = FastMeta.META_UUID.deserialize(sCtx_1266, in__1269);
            return new AuthorizedApiRemoveFromAccessGroupArguments(groupId_1270, uid_1271);
            
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
    serialize(sCtx_1272: MetaContext, obj_1273: AuthorizedApiCheckAccessForSendMessageArguments, _out_1274: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1272, obj_1273.uid, _out_1274);
        
    }
    deserialize(sCtx_1272: MetaContext, in__1275: DataIn): AuthorizedApiCheckAccessForSendMessageArguments  {
        try  {
            let uid_1276: UUID;
            uid_1276 = FastMeta.META_UUID.deserialize(sCtx_1272, in__1275);
            return new AuthorizedApiCheckAccessForSendMessageArguments(uid_1276);
            
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
    serialize(sCtx_1277: MetaContext, obj_1278: AuthorizedApiResolverServersArguments, _out_1279: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1279, obj_1278.sid.length);
        for (const el_1281 of obj_1278.sid)  {
            _out_1279.writeShort(el_1281);
            
        }
        
    }
    deserialize(sCtx_1277: MetaContext, in__1280: DataIn): AuthorizedApiResolverServersArguments  {
        try  {
            let sid_1282: number[];
            const len_1284 = Number(DeserializerPackNumber.INSTANCE.put(in__1280));
            sid_1282 = new Array<number>(len_1284);
            for (let idx_1283 = 0;
            idx_1283 < len_1284;
            idx_1283++)  {
                sid_1282[idx_1283] = in__1280.readShort();
                
            }
            return new AuthorizedApiResolverServersArguments(sid_1282);
            
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
    serialize(sCtx_1285: MetaContext, obj_1286: AuthorizedApiResolveCloudsArguments, _out_1287: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1287, obj_1286.uids.length);
        for (const el_1289 of obj_1286.uids)  {
            FastMeta.META_UUID.serialize(sCtx_1285, el_1289, _out_1287);
            
        }
        
    }
    deserialize(sCtx_1285: MetaContext, in__1288: DataIn): AuthorizedApiResolveCloudsArguments  {
        try  {
            let uids_1290: UUID[];
            const len_1292 = Number(DeserializerPackNumber.INSTANCE.put(in__1288));
            uids_1290 = new Array<UUID>(len_1292);
            for (let idx_1291 = 0;
            idx_1291 < len_1292;
            idx_1291++)  {
                uids_1290[idx_1291] = FastMeta.META_UUID.deserialize(sCtx_1285, in__1288);
                
            }
            return new AuthorizedApiResolveCloudsArguments(uids_1290);
            
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
    serialize(sCtx_1293: MetaContext, obj_1294: AuthorizedApiReportAppliedConfigArguments, _out_1295: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1295, obj_1294.configs.length);
        for (const el_1297 of obj_1294.configs)  {
            AppliedConfig.META.serialize(sCtx_1293, el_1297, _out_1295);
            
        }
        
    }
    deserialize(sCtx_1293: MetaContext, in__1296: DataIn): AuthorizedApiReportAppliedConfigArguments  {
        try  {
            let configs_1298: AppliedConfig[];
            const len_1300 = Number(DeserializerPackNumber.INSTANCE.put(in__1296));
            configs_1298 = new Array<AppliedConfig>(len_1300);
            for (let idx_1299 = 0;
            idx_1299 < len_1300;
            idx_1299++)  {
                configs_1298[idx_1299] = AppliedConfig.META.deserialize(sCtx_1293, in__1296);
                
            }
            return new AuthorizedApiReportAppliedConfigArguments(configs_1298);
            
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
    serialize(sCtx_1301: MetaContext, obj_1302: AuthorizedApiGetAccessGroupsArguments, _out_1303: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1301, obj_1302.uid, _out_1303);
        
    }
    deserialize(sCtx_1301: MetaContext, in__1304: DataIn): AuthorizedApiGetAccessGroupsArguments  {
        try  {
            let uid_1305: UUID;
            uid_1305 = FastMeta.META_UUID.deserialize(sCtx_1301, in__1304);
            return new AuthorizedApiGetAccessGroupsArguments(uid_1305);
            
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
    serialize(sCtx_1306: MetaContext, obj_1307: AuthorizedApiGetAccessGroupArguments, _out_1308: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1306, obj_1307.groupId, _out_1308);
        
    }
    deserialize(sCtx_1306: MetaContext, in__1309: DataIn): AuthorizedApiGetAccessGroupArguments  {
        try  {
            let groupId_1310: UUID;
            groupId_1310 = FastMeta.META_UUID.deserialize(sCtx_1306, in__1309);
            return new AuthorizedApiGetAccessGroupArguments(groupId_1310);
            
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
    serialize(sCtx_1311: MetaContext, obj_1312: AuthorizedApiGetAllAccessedClientsArguments, _out_1313: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1311, obj_1312.uid, _out_1313);
        
    }
    deserialize(sCtx_1311: MetaContext, in__1314: DataIn): AuthorizedApiGetAllAccessedClientsArguments  {
        try  {
            let uid_1315: UUID;
            uid_1315 = FastMeta.META_UUID.deserialize(sCtx_1311, in__1314);
            return new AuthorizedApiGetAllAccessedClientsArguments(uid_1315);
            
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
    serialize(sCtx_1316: MetaContext, obj_1317: AuthorizedApiCheckAccessForSendMessage2Arguments, _out_1318: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1316, obj_1317.uid1, _out_1318);
        FastMeta.META_UUID.serialize(sCtx_1316, obj_1317.uid2, _out_1318);
        
    }
    deserialize(sCtx_1316: MetaContext, in__1319: DataIn): AuthorizedApiCheckAccessForSendMessage2Arguments  {
        try  {
            let uid1_1320: UUID;
            let uid2_1321: UUID;
            uid1_1320 = FastMeta.META_UUID.deserialize(sCtx_1316, in__1319);
            uid2_1321 = FastMeta.META_UUID.deserialize(sCtx_1316, in__1319);
            return new AuthorizedApiCheckAccessForSendMessage2Arguments(uid1_1320, uid2_1321);
            
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
    serialize(sCtx_1322: MetaContext, obj_1323: AuthorizedApiSendTelemetryArguments, _out_1324: DataOut): void  {
        Telemetry.META.serialize(sCtx_1322, obj_1323.telemetry, _out_1324);
        
    }
    deserialize(sCtx_1322: MetaContext, in__1325: DataIn): AuthorizedApiSendTelemetryArguments  {
        try  {
            let telemetry_1326: Telemetry;
            telemetry_1326 = Telemetry.META.deserialize(sCtx_1322, in__1325);
            return new AuthorizedApiSendTelemetryArguments(telemetry_1326);
            
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
    serialize(sCtx_1327: MetaContext, obj_1328: AuthorizedApiRequestAccessGroupsForClientsArguments, _out_1329: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1329, obj_1328.uids.length);
        for (const el_1331 of obj_1328.uids)  {
            FastMeta.META_UUID.serialize(sCtx_1327, el_1331, _out_1329);
            
        }
        
    }
    deserialize(sCtx_1327: MetaContext, in__1330: DataIn): AuthorizedApiRequestAccessGroupsForClientsArguments  {
        try  {
            let uids_1332: UUID[];
            const len_1334 = Number(DeserializerPackNumber.INSTANCE.put(in__1330));
            uids_1332 = new Array<UUID>(len_1334);
            for (let idx_1333 = 0;
            idx_1333 < len_1334;
            idx_1333++)  {
                uids_1332[idx_1333] = FastMeta.META_UUID.deserialize(sCtx_1327, in__1330);
                
            }
            return new AuthorizedApiRequestAccessGroupsForClientsArguments(uids_1332);
            
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
    serialize(sCtx_1335: MetaContext, obj_1336: AuthorizedApiRequestAccessGroupsItemsArguments, _out_1337: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1337, obj_1336.ids.length);
        for (const el_1339 of obj_1336.ids)  {
            FastMeta.META_UUID.serialize(sCtx_1335, el_1339, _out_1337);
            
        }
        
    }
    deserialize(sCtx_1335: MetaContext, in__1338: DataIn): AuthorizedApiRequestAccessGroupsItemsArguments  {
        try  {
            let ids_1340: UUID[];
            const len_1342 = Number(DeserializerPackNumber.INSTANCE.put(in__1338));
            ids_1340 = new Array<UUID>(len_1342);
            for (let idx_1341 = 0;
            idx_1341 < len_1342;
            idx_1341++)  {
                ids_1340[idx_1341] = FastMeta.META_UUID.deserialize(sCtx_1335, in__1338);
                
            }
            return new AuthorizedApiRequestAccessGroupsItemsArguments(ids_1340);
            
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
    serialize(sCtx_1343: MetaContext, obj_1344: AuthorizedApiSendAccessGroupForClientArguments, _out_1345: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1343, obj_1344.uid, _out_1345);
        SerializerPackNumber.INSTANCE.put(_out_1345, obj_1344.groups.length);
        for (const el_1347 of obj_1344.groups)  {
            FastMeta.META_UUID.serialize(sCtx_1343, el_1347, _out_1345);
            
        }
        
    }
    deserialize(sCtx_1343: MetaContext, in__1346: DataIn): AuthorizedApiSendAccessGroupForClientArguments  {
        try  {
            let uid_1348: UUID;
            let groups_1349: UUID[];
            uid_1348 = FastMeta.META_UUID.deserialize(sCtx_1343, in__1346);
            const len_1351 = Number(DeserializerPackNumber.INSTANCE.put(in__1346));
            groups_1349 = new Array<UUID>(len_1351);
            for (let idx_1350 = 0;
            idx_1350 < len_1351;
            idx_1350++)  {
                groups_1349[idx_1350] = FastMeta.META_UUID.deserialize(sCtx_1343, in__1346);
                
            }
            return new AuthorizedApiSendAccessGroupForClientArguments(uid_1348, groups_1349);
            
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
    serialize(sCtx_1352: MetaContext, obj_1353: AuthorizedApiAddItemsToAccessGroupArguments, _out_1354: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1352, obj_1353.id, _out_1354);
        SerializerPackNumber.INSTANCE.put(_out_1354, obj_1353.groups.length);
        for (const el_1356 of obj_1353.groups)  {
            FastMeta.META_UUID.serialize(sCtx_1352, el_1356, _out_1354);
            
        }
        
    }
    deserialize(sCtx_1352: MetaContext, in__1355: DataIn): AuthorizedApiAddItemsToAccessGroupArguments  {
        try  {
            let id_1357: UUID;
            let groups_1358: UUID[];
            id_1357 = FastMeta.META_UUID.deserialize(sCtx_1352, in__1355);
            const len_1360 = Number(DeserializerPackNumber.INSTANCE.put(in__1355));
            groups_1358 = new Array<UUID>(len_1360);
            for (let idx_1359 = 0;
            idx_1359 < len_1360;
            idx_1359++)  {
                groups_1358[idx_1359] = FastMeta.META_UUID.deserialize(sCtx_1352, in__1355);
                
            }
            return new AuthorizedApiAddItemsToAccessGroupArguments(id_1357, groups_1358);
            
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
    serialize(sCtx_1361: MetaContext, obj_1362: AuthorizedApiRemoveItemsFromAccessGroupArguments, _out_1363: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1361, obj_1362.id, _out_1363);
        SerializerPackNumber.INSTANCE.put(_out_1363, obj_1362.groups.length);
        for (const el_1365 of obj_1362.groups)  {
            FastMeta.META_UUID.serialize(sCtx_1361, el_1365, _out_1363);
            
        }
        
    }
    deserialize(sCtx_1361: MetaContext, in__1364: DataIn): AuthorizedApiRemoveItemsFromAccessGroupArguments  {
        try  {
            let id_1366: UUID;
            let groups_1367: UUID[];
            id_1366 = FastMeta.META_UUID.deserialize(sCtx_1361, in__1364);
            const len_1369 = Number(DeserializerPackNumber.INSTANCE.put(in__1364));
            groups_1367 = new Array<UUID>(len_1369);
            for (let idx_1368 = 0;
            idx_1368 < len_1369;
            idx_1368++)  {
                groups_1367[idx_1368] = FastMeta.META_UUID.deserialize(sCtx_1361, in__1364);
                
            }
            return new AuthorizedApiRemoveItemsFromAccessGroupArguments(id_1366, groups_1367);
            
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
    serialize(sCtx_1370: MetaContext, obj_1371: AuthorizedApiAddAccessGroupsToClientArguments, _out_1372: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1370, obj_1371.uid, _out_1372);
        SerializerPackNumber.INSTANCE.put(_out_1372, obj_1371.groups.length);
        for (const el_1374 of obj_1371.groups)  {
            FastMeta.META_UUID.serialize(sCtx_1370, el_1374, _out_1372);
            
        }
        
    }
    deserialize(sCtx_1370: MetaContext, in__1373: DataIn): AuthorizedApiAddAccessGroupsToClientArguments  {
        try  {
            let uid_1375: UUID;
            let groups_1376: UUID[];
            uid_1375 = FastMeta.META_UUID.deserialize(sCtx_1370, in__1373);
            const len_1378 = Number(DeserializerPackNumber.INSTANCE.put(in__1373));
            groups_1376 = new Array<UUID>(len_1378);
            for (let idx_1377 = 0;
            idx_1377 < len_1378;
            idx_1377++)  {
                groups_1376[idx_1377] = FastMeta.META_UUID.deserialize(sCtx_1370, in__1373);
                
            }
            return new AuthorizedApiAddAccessGroupsToClientArguments(uid_1375, groups_1376);
            
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
    serialize(sCtx_1379: MetaContext, obj_1380: AuthorizedApiRemoveAccessGroupsFromClientArguments, _out_1381: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1379, obj_1380.uid, _out_1381);
        SerializerPackNumber.INSTANCE.put(_out_1381, obj_1380.groups.length);
        for (const el_1383 of obj_1380.groups)  {
            FastMeta.META_UUID.serialize(sCtx_1379, el_1383, _out_1381);
            
        }
        
    }
    deserialize(sCtx_1379: MetaContext, in__1382: DataIn): AuthorizedApiRemoveAccessGroupsFromClientArguments  {
        try  {
            let uid_1384: UUID;
            let groups_1385: UUID[];
            uid_1384 = FastMeta.META_UUID.deserialize(sCtx_1379, in__1382);
            const len_1387 = Number(DeserializerPackNumber.INSTANCE.put(in__1382));
            groups_1385 = new Array<UUID>(len_1387);
            for (let idx_1386 = 0;
            idx_1386 < len_1387;
            idx_1386++)  {
                groups_1385[idx_1386] = FastMeta.META_UUID.deserialize(sCtx_1379, in__1382);
                
            }
            return new AuthorizedApiRemoveAccessGroupsFromClientArguments(uid_1384, groups_1385);
            
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
    serialize(sCtx_1388: MetaContext, obj_1389: AuthorizedApiRequestAllAccessedClientsArguments, _out_1390: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1390, obj_1389.uids.length);
        for (const el_1392 of obj_1389.uids)  {
            FastMeta.META_UUID.serialize(sCtx_1388, el_1392, _out_1390);
            
        }
        
    }
    deserialize(sCtx_1388: MetaContext, in__1391: DataIn): AuthorizedApiRequestAllAccessedClientsArguments  {
        try  {
            let uids_1393: UUID[];
            const len_1395 = Number(DeserializerPackNumber.INSTANCE.put(in__1391));
            uids_1393 = new Array<UUID>(len_1395);
            for (let idx_1394 = 0;
            idx_1394 < len_1395;
            idx_1394++)  {
                uids_1393[idx_1394] = FastMeta.META_UUID.deserialize(sCtx_1388, in__1391);
                
            }
            return new AuthorizedApiRequestAllAccessedClientsArguments(uids_1393);
            
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
    serialize(sCtx_1396: MetaContext, obj_1397: AuthorizedApiRequestAccessCheckArguments, _out_1398: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1398, obj_1397.requests.length);
        for (const el_1400 of obj_1397.requests)  {
            AccessCheckPair.META.serialize(sCtx_1396, el_1400, _out_1398);
            
        }
        
    }
    deserialize(sCtx_1396: MetaContext, in__1399: DataIn): AuthorizedApiRequestAccessCheckArguments  {
        try  {
            let requests_1401: AccessCheckPair[];
            const len_1403 = Number(DeserializerPackNumber.INSTANCE.put(in__1399));
            requests_1401 = new Array<AccessCheckPair>(len_1403);
            for (let idx_1402 = 0;
            idx_1402 < len_1403;
            idx_1402++)  {
                requests_1401[idx_1402] = AccessCheckPair.META.deserialize(sCtx_1396, in__1399);
                
            }
            return new AuthorizedApiRequestAccessCheckArguments(requests_1401);
            
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
    serialize(sCtx_1404: MetaContext, obj_1405: AuthorizedApiGetClientActivityArguments, _out_1406: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1404, obj_1405.uid, _out_1406);
        _out_1406.writeLong(obj_1405.fromTime);
        _out_1406.writeLong(obj_1405.toTime);
        _out_1406.writeInt(obj_1405.limit);
        
    }
    deserialize(sCtx_1404: MetaContext, in__1407: DataIn): AuthorizedApiGetClientActivityArguments  {
        try  {
            let uid_1408: UUID;
            let fromTime_1409: bigint;
            let toTime_1410: bigint;
            let limit_1411: number;
            uid_1408 = FastMeta.META_UUID.deserialize(sCtx_1404, in__1407);
            fromTime_1409 = in__1407.readLong();
            toTime_1410 = in__1407.readLong();
            limit_1411 = in__1407.readInt();
            return new AuthorizedApiGetClientActivityArguments(uid_1408, fromTime_1409, toTime_1410, limit_1411);
            
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
    serialize(sCtx_1412: MetaContext, obj_1413: AuthorizedApiSearchClientLogsArguments, _out_1414: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1412, obj_1413.uid, _out_1414);
        const stringBytes_1416 = new TextEncoder().encode(obj_1413.query);
        SerializerPackNumber.INSTANCE.put(_out_1414, stringBytes_1416.length);
        _out_1414.write(stringBytes_1416);
        _out_1414.writeInt(obj_1413.limit);
        
    }
    deserialize(sCtx_1412: MetaContext, in__1415: DataIn): AuthorizedApiSearchClientLogsArguments  {
        try  {
            let uid_1418: UUID;
            let query_1419: string;
            let limit_1420: number;
            uid_1418 = FastMeta.META_UUID.deserialize(sCtx_1412, in__1415);
            let stringBytes_1421: Uint8Array;
            const len_1423 = Number(DeserializerPackNumber.INSTANCE.put(in__1415));
            const bytes_1424 = in__1415.readBytes(len_1423);
            stringBytes_1421 = bytes_1424;
            query_1419 = new TextDecoder('utf-8').decode(stringBytes_1421);
            limit_1420 = in__1415.readInt();
            return new AuthorizedApiSearchClientLogsArguments(uid_1418, query_1419, limit_1420);
            
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
    serialize(sCtx_1425: MetaContext, obj_1426: AuthorizedApiGetClientConnectionsArguments, _out_1427: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1425, obj_1426.uid, _out_1427);
        _out_1427.writeInt(obj_1426.limit);
        
    }
    deserialize(sCtx_1425: MetaContext, in__1428: DataIn): AuthorizedApiGetClientConnectionsArguments  {
        try  {
            let uid_1429: UUID;
            let limit_1430: number;
            uid_1429 = FastMeta.META_UUID.deserialize(sCtx_1425, in__1428);
            limit_1430 = in__1428.readInt();
            return new AuthorizedApiGetClientConnectionsArguments(uid_1429, limit_1430);
            
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
    serialize(sCtx_1431: MetaContext, obj_1432: AuthorizedApiGetClientMessagesArguments, _out_1433: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1431, obj_1432.uid, _out_1433);
        _out_1433.writeLong(obj_1432.fromTime);
        _out_1433.writeLong(obj_1432.toTime);
        _out_1433.writeInt(obj_1432.limit);
        
    }
    deserialize(sCtx_1431: MetaContext, in__1434: DataIn): AuthorizedApiGetClientMessagesArguments  {
        try  {
            let uid_1435: UUID;
            let fromTime_1436: bigint;
            let toTime_1437: bigint;
            let limit_1438: number;
            uid_1435 = FastMeta.META_UUID.deserialize(sCtx_1431, in__1434);
            fromTime_1436 = in__1434.readLong();
            toTime_1437 = in__1434.readLong();
            limit_1438 = in__1434.readInt();
            return new AuthorizedApiGetClientMessagesArguments(uid_1435, fromTime_1436, toTime_1437, limit_1438);
            
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
    serialize(sCtx_1439: MetaContext, obj_1440: AuthorizedApiSetNextReadDelayArguments, _out_1441: DataOut): void  {
        _out_1441.writeLong(obj_1440.delayMillis);
        
    }
    deserialize(sCtx_1439: MetaContext, in__1442: DataIn): AuthorizedApiSetNextReadDelayArguments  {
        try  {
            let delayMillis_1443: bigint;
            delayMillis_1443 = in__1442.readLong();
            return new AuthorizedApiSetNextReadDelayArguments(delayMillis_1443);
            
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
    serialize(sCtx_1444: MetaContext, obj_1445: AuthorizedApiGetUapArguments, _out_1446: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1444, obj_1445.uid, _out_1446);
        
    }
    deserialize(sCtx_1444: MetaContext, in__1447: DataIn): AuthorizedApiGetUapArguments  {
        try  {
            let uid_1448: UUID;
            uid_1448 = FastMeta.META_UUID.deserialize(sCtx_1444, in__1447);
            return new AuthorizedApiGetUapArguments(uid_1448);
            
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
export class AuthorizedApiPullMessagesArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiPullMessagesArguments>  {
    serialize(sCtx_1449: MetaContext, obj_1451: AuthorizedApiPullMessagesArguments, _out_1452: DataOut): void  {
        
    }
    deserialize(sCtx_1450: MetaContext, in__1453: DataIn): AuthorizedApiPullMessagesArguments  {
        try  {
            return new AuthorizedApiPullMessagesArguments();
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiPullMessagesArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiPullMessagesArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiPullMessagesArguments)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiPullMessagesArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiPullMessagesArguments(');
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiPullMessagesArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiPullMessagesArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiPullMessagesArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiRequestWebRtcSessionArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiRequestWebRtcSessionArguments>  {
    serialize(sCtx_1454: MetaContext, obj_1455: AuthorizedApiRequestWebRtcSessionArguments, _out_1456: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1454, obj_1455.uid, _out_1456);
        
    }
    deserialize(sCtx_1454: MetaContext, in__1457: DataIn): AuthorizedApiRequestWebRtcSessionArguments  {
        try  {
            let uid_1458: UUID;
            uid_1458 = FastMeta.META_UUID.deserialize(sCtx_1454, in__1457);
            return new AuthorizedApiRequestWebRtcSessionArguments(uid_1458);
            
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
    serialize(sCtx_1459: MetaContext, obj_1460: AuthorizedApiPublishWebRtcSessionArguments, _out_1461: DataOut): void  {
        WebRtcSession.META.serialize(sCtx_1459, obj_1460.session, _out_1461);
        
    }
    deserialize(sCtx_1459: MetaContext, in__1462: DataIn): AuthorizedApiPublishWebRtcSessionArguments  {
        try  {
            let session_1463: WebRtcSession;
            session_1463 = WebRtcSession.META.deserialize(sCtx_1459, in__1462);
            return new AuthorizedApiPublishWebRtcSessionArguments(session_1463);
            
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
    serialize(sCtx_1464: MetaContext, obj_1466: AuthorizedApiSelfDestructArguments, _out_1467: DataOut): void  {
        
    }
    deserialize(sCtx_1465: MetaContext, in__1468: DataIn): AuthorizedApiSelfDestructArguments  {
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
                    let id_1470: number;
                    id_1470 = dataIn.readByte();
                    const argsObject_1471 = new AuthorizedApiBackIdArguments(id_1470);
                    const argsNames_1472: string[] = ["id"];
                    const argsValues_1473: any[] = [id_1470];
                    ctx.invokeLocalMethodBefore("backId", argsNames_1472, argsValues_1473);
                    (typeof (localApi as any).backIdArguments === "function" ? (localApi as any).backIdArguments(argsObject_1471) : localApi.backId(id_1470));
                    ctx.invokeLocalMethodAfter("backId", null, argsNames_1472, argsValues_1473);
                    break;
                    
                }
                case 4:  {
                    const reqId_1474 = dataIn.readInt();
                    let nextConnectMsDuration_1475: bigint;
                    let rxWindowMs_1476: bigint;
                    nextConnectMsDuration_1475 = dataIn.readLong();
                    rxWindowMs_1476 = dataIn.readLong();
                    const argsObject_1477 = new AuthorizedApiPingArguments(nextConnectMsDuration_1475, rxWindowMs_1476);
                    const argsNames_1478: string[] = ["nextConnectMsDuration", "rxWindowMs"];
                    const argsValues_1479: any[] = [nextConnectMsDuration_1475, rxWindowMs_1476];
                    ctx.invokeLocalMethodBefore("ping", argsNames_1478, argsValues_1479);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).pingArguments === "function" ? (localApi as any).pingArguments(argsObject_1477) : localApi.ping(nextConnectMsDuration_1475, rxWindowMs_1476));
                    ctx.invokeLocalMethodAfter("ping", resultFuture, argsNames_1478, argsValues_1479);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1474);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    let uid_1481: UUID;
                    let stream_1482: ClientApiStream;
                    uid_1481 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    stream_1482 = ClientApiStream.META.deserialize(ctx, dataIn);
                    const argsObject_1483 = new AuthorizedApiClientArguments(uid_1481, stream_1482);
                    const argsNames_1484: string[] = ["uid", "stream"];
                    const argsValues_1485: any[] = [uid_1481, stream_1482];
                    ctx.invokeLocalMethodBefore("client", argsNames_1484, argsValues_1485);
                    (typeof (localApi as any).clientArguments === "function" ? (localApi as any).clientArguments(argsObject_1483) : localApi.client(uid_1481, stream_1482));
                    ctx.invokeLocalMethodAfter("client", null, argsNames_1484, argsValues_1485);
                    break;
                    
                }
                case 6:  {
                    let msg_1487: Message;
                    msg_1487 = Message.META.deserialize(ctx, dataIn);
                    const argsObject_1488 = new AuthorizedApiSendMessageArguments(msg_1487);
                    const argsNames_1489: string[] = ["msg"];
                    const argsValues_1490: any[] = [msg_1487];
                    ctx.invokeLocalMethodBefore("sendMessage", argsNames_1489, argsValues_1490);
                    (typeof (localApi as any).sendMessageArguments === "function" ? (localApi as any).sendMessageArguments(argsObject_1488) : localApi.sendMessage(msg_1487));
                    ctx.invokeLocalMethodAfter("sendMessage", null, argsNames_1489, argsValues_1490);
                    break;
                    
                }
                case 7:  {
                    let msg_1492: Message[];
                    const len_1494 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_1492 = new Array<Message>(len_1494);
                    for (let idx_1493 = 0;
                    idx_1493 < len_1494;
                    idx_1493++)  {
                        msg_1492[idx_1493] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1495 = new AuthorizedApiSendMessagesArguments(msg_1492);
                    const argsNames_1496: string[] = ["msg"];
                    const argsValues_1497: any[] = [msg_1492];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_1496, argsValues_1497);
                    (typeof (localApi as any).sendMessagesArguments === "function" ? (localApi as any).sendMessagesArguments(argsObject_1495) : localApi.sendMessages(msg_1492));
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_1496, argsValues_1497);
                    break;
                    
                }
                case 37:  {
                    let uids_1499: UUID[];
                    let data_1500: Uint8Array;
                    const len_1502 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1499 = new Array<UUID>(len_1502);
                    for (let idx_1501 = 0;
                    idx_1501 < len_1502;
                    idx_1501++)  {
                        uids_1499[idx_1501] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const len_1504 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1505 = dataIn.readBytes(len_1504);
                    data_1500 = bytes_1505;
                    const argsObject_1506 = new AuthorizedApiSendMulticastArguments(uids_1499, data_1500);
                    const argsNames_1507: string[] = ["uids", "data"];
                    const argsValues_1508: any[] = [uids_1499, data_1500];
                    ctx.invokeLocalMethodBefore("sendMulticast", argsNames_1507, argsValues_1508);
                    (typeof (localApi as any).sendMulticastArguments === "function" ? (localApi as any).sendMulticastArguments(argsObject_1506) : localApi.sendMulticast(uids_1499, data_1500));
                    ctx.invokeLocalMethodAfter("sendMulticast", null, argsNames_1507, argsValues_1508);
                    break;
                    
                }
                case 39:  {
                    const reqId_1509 = dataIn.readInt();
                    let msg_1510: Message;
                    msg_1510 = Message.META.deserialize(ctx, dataIn);
                    const argsObject_1511 = new AuthorizedApiSendMessageWithResultArguments(msg_1510);
                    const argsNames_1512: string[] = ["msg"];
                    const argsValues_1513: any[] = [msg_1510];
                    ctx.invokeLocalMethodBefore("sendMessageWithResult", argsNames_1512, argsValues_1513);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).sendMessageWithResultArguments === "function" ? (localApi as any).sendMessageWithResultArguments(argsObject_1511) : localApi.sendMessageWithResult(msg_1510));
                    ctx.invokeLocalMethodAfter("sendMessageWithResult", resultFuture, argsNames_1512, argsValues_1513);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1509);
                        
                    }
                    );
                    break;
                    
                }
                case 8:  {
                    const reqId_1514 = dataIn.readInt();
                    let owner_1515: UUID;
                    let uids_1516: UUID[];
                    owner_1515 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1518 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1516 = new Array<UUID>(len_1518);
                    for (let idx_1517 = 0;
                    idx_1517 < len_1518;
                    idx_1517++)  {
                        uids_1516[idx_1517] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1519 = new AuthorizedApiCreateAccessGroupArguments(owner_1515, uids_1516);
                    const argsNames_1520: string[] = ["owner", "uids"];
                    const argsValues_1521: any[] = [owner_1515, uids_1516];
                    ctx.invokeLocalMethodBefore("createAccessGroup", argsNames_1520, argsValues_1521);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).createAccessGroupArguments === "function" ? (localApi as any).createAccessGroupArguments(argsObject_1519) : localApi.createAccessGroup(owner_1515, uids_1516));
                    ctx.invokeLocalMethodAfter("createAccessGroup", resultFuture, argsNames_1520, argsValues_1521);
                    resultFuture.to((v_1523: UUID) =>  {
                        const data_1522 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_1523, data_1522);
                        ctx.sendResultToRemote(reqId_1514, data_1522.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_1524 = dataIn.readInt();
                    let groupId_1525: UUID;
                    let uid_1526: UUID;
                    groupId_1525 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid_1526 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1527 = new AuthorizedApiAddToAccessGroupArguments(groupId_1525, uid_1526);
                    const argsNames_1528: string[] = ["groupId", "uid"];
                    const argsValues_1529: any[] = [groupId_1525, uid_1526];
                    ctx.invokeLocalMethodBefore("addToAccessGroup", argsNames_1528, argsValues_1529);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).addToAccessGroupArguments === "function" ? (localApi as any).addToAccessGroupArguments(argsObject_1527) : localApi.addToAccessGroup(groupId_1525, uid_1526));
                    ctx.invokeLocalMethodAfter("addToAccessGroup", resultFuture, argsNames_1528, argsValues_1529);
                    resultFuture.to((v_1531: boolean) =>  {
                        const data_1530 = new DataInOut();
                        data_1530.writeBoolean(v_1531);
                        ctx.sendResultToRemote(reqId_1524, data_1530.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_1532 = dataIn.readInt();
                    let groupId_1533: UUID;
                    let uid_1534: UUID;
                    groupId_1533 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid_1534 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1535 = new AuthorizedApiRemoveFromAccessGroupArguments(groupId_1533, uid_1534);
                    const argsNames_1536: string[] = ["groupId", "uid"];
                    const argsValues_1537: any[] = [groupId_1533, uid_1534];
                    ctx.invokeLocalMethodBefore("removeFromAccessGroup", argsNames_1536, argsValues_1537);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).removeFromAccessGroupArguments === "function" ? (localApi as any).removeFromAccessGroupArguments(argsObject_1535) : localApi.removeFromAccessGroup(groupId_1533, uid_1534));
                    ctx.invokeLocalMethodAfter("removeFromAccessGroup", resultFuture, argsNames_1536, argsValues_1537);
                    resultFuture.to((v_1539: boolean) =>  {
                        const data_1538 = new DataInOut();
                        data_1538.writeBoolean(v_1539);
                        ctx.sendResultToRemote(reqId_1532, data_1538.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_1540 = dataIn.readInt();
                    let uid_1541: UUID;
                    uid_1541 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1542 = new AuthorizedApiCheckAccessForSendMessageArguments(uid_1541);
                    const argsNames_1543: string[] = ["uid"];
                    const argsValues_1544: any[] = [uid_1541];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage", argsNames_1543, argsValues_1544);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).checkAccessForSendMessageArguments === "function" ? (localApi as any).checkAccessForSendMessageArguments(argsObject_1542) : localApi.checkAccessForSendMessage(uid_1541));
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage", resultFuture, argsNames_1543, argsValues_1544);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1540);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    let sid_1546: number[];
                    const len_1548 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    sid_1546 = new Array<number>(len_1548);
                    for (let idx_1547 = 0;
                    idx_1547 < len_1548;
                    idx_1547++)  {
                        sid_1546[idx_1547] = dataIn.readShort();
                        
                    }
                    const argsObject_1549 = new AuthorizedApiResolverServersArguments(sid_1546);
                    const argsNames_1550: string[] = ["sid"];
                    const argsValues_1551: any[] = [sid_1546];
                    ctx.invokeLocalMethodBefore("resolverServers", argsNames_1550, argsValues_1551);
                    (typeof (localApi as any).resolverServersArguments === "function" ? (localApi as any).resolverServersArguments(argsObject_1549) : localApi.resolverServers(sid_1546));
                    ctx.invokeLocalMethodAfter("resolverServers", null, argsNames_1550, argsValues_1551);
                    break;
                    
                }
                case 13:  {
                    let uids_1553: UUID[];
                    const len_1555 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1553 = new Array<UUID>(len_1555);
                    for (let idx_1554 = 0;
                    idx_1554 < len_1555;
                    idx_1554++)  {
                        uids_1553[idx_1554] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1556 = new AuthorizedApiResolveCloudsArguments(uids_1553);
                    const argsNames_1557: string[] = ["uids"];
                    const argsValues_1558: any[] = [uids_1553];
                    ctx.invokeLocalMethodBefore("resolveClouds", argsNames_1557, argsValues_1558);
                    (typeof (localApi as any).resolveCloudsArguments === "function" ? (localApi as any).resolveCloudsArguments(argsObject_1556) : localApi.resolveClouds(uids_1553));
                    ctx.invokeLocalMethodAfter("resolveClouds", null, argsNames_1557, argsValues_1558);
                    break;
                    
                }
                case 38:  {
                    let configs_1560: AppliedConfig[];
                    const len_1562 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    configs_1560 = new Array<AppliedConfig>(len_1562);
                    for (let idx_1561 = 0;
                    idx_1561 < len_1562;
                    idx_1561++)  {
                        configs_1560[idx_1561] = AppliedConfig.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1563 = new AuthorizedApiReportAppliedConfigArguments(configs_1560);
                    const argsNames_1564: string[] = ["configs"];
                    const argsValues_1565: any[] = [configs_1560];
                    ctx.invokeLocalMethodBefore("reportAppliedConfig", argsNames_1564, argsValues_1565);
                    (typeof (localApi as any).reportAppliedConfigArguments === "function" ? (localApi as any).reportAppliedConfigArguments(argsObject_1563) : localApi.reportAppliedConfig(configs_1560));
                    ctx.invokeLocalMethodAfter("reportAppliedConfig", null, argsNames_1564, argsValues_1565);
                    break;
                    
                }
                case 14:  {
                    const reqId_1566 = dataIn.readInt();
                    let uid_1567: UUID;
                    uid_1567 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1568 = new AuthorizedApiGetAccessGroupsArguments(uid_1567);
                    const argsNames_1569: string[] = ["uid"];
                    const argsValues_1570: any[] = [uid_1567];
                    ctx.invokeLocalMethodBefore("getAccessGroups", argsNames_1569, argsValues_1570);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getAccessGroupsArguments === "function" ? (localApi as any).getAccessGroupsArguments(argsObject_1568) : localApi.getAccessGroups(uid_1567));
                    ctx.invokeLocalMethodAfter("getAccessGroups", resultFuture, argsNames_1569, argsValues_1570);
                    resultFuture.to((v_1572: UUID[]) =>  {
                        const data_1571 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1571, v_1572.length);
                        for (const el_1573 of v_1572)  {
                            FastMeta.META_UUID.serialize(ctx, el_1573, data_1571);
                            
                        }
                        ctx.sendResultToRemote(reqId_1566, data_1571.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_1574 = dataIn.readInt();
                    let groupId_1575: UUID;
                    groupId_1575 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1576 = new AuthorizedApiGetAccessGroupArguments(groupId_1575);
                    const argsNames_1577: string[] = ["groupId"];
                    const argsValues_1578: any[] = [groupId_1575];
                    ctx.invokeLocalMethodBefore("getAccessGroup", argsNames_1577, argsValues_1578);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getAccessGroupArguments === "function" ? (localApi as any).getAccessGroupArguments(argsObject_1576) : localApi.getAccessGroup(groupId_1575));
                    ctx.invokeLocalMethodAfter("getAccessGroup", resultFuture, argsNames_1577, argsValues_1578);
                    resultFuture.to((v_1580: AccessGroup) =>  {
                        const data_1579 = new DataInOut();
                        AccessGroup.META.serialize(ctx, v_1580, data_1579);
                        ctx.sendResultToRemote(reqId_1574, data_1579.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 16:  {
                    const reqId_1581 = dataIn.readInt();
                    let uid_1582: UUID;
                    uid_1582 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1583 = new AuthorizedApiGetAllAccessedClientsArguments(uid_1582);
                    const argsNames_1584: string[] = ["uid"];
                    const argsValues_1585: any[] = [uid_1582];
                    ctx.invokeLocalMethodBefore("getAllAccessedClients", argsNames_1584, argsValues_1585);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getAllAccessedClientsArguments === "function" ? (localApi as any).getAllAccessedClientsArguments(argsObject_1583) : localApi.getAllAccessedClients(uid_1582));
                    ctx.invokeLocalMethodAfter("getAllAccessedClients", resultFuture, argsNames_1584, argsValues_1585);
                    resultFuture.to((v_1587: UUID[]) =>  {
                        const data_1586 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1586, v_1587.length);
                        for (const el_1588 of v_1587)  {
                            FastMeta.META_UUID.serialize(ctx, el_1588, data_1586);
                            
                        }
                        ctx.sendResultToRemote(reqId_1581, data_1586.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 17:  {
                    const reqId_1589 = dataIn.readInt();
                    let uid1_1590: UUID;
                    let uid2_1591: UUID;
                    uid1_1590 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid2_1591 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1592 = new AuthorizedApiCheckAccessForSendMessage2Arguments(uid1_1590, uid2_1591);
                    const argsNames_1593: string[] = ["uid1", "uid2"];
                    const argsValues_1594: any[] = [uid1_1590, uid2_1591];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage2", argsNames_1593, argsValues_1594);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).checkAccessForSendMessage2Arguments === "function" ? (localApi as any).checkAccessForSendMessage2Arguments(argsObject_1592) : localApi.checkAccessForSendMessage2(uid1_1590, uid2_1591));
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage2", resultFuture, argsNames_1593, argsValues_1594);
                    resultFuture.to((v_1596: boolean) =>  {
                        const data_1595 = new DataInOut();
                        data_1595.writeBoolean(v_1596);
                        ctx.sendResultToRemote(reqId_1589, data_1595.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 18:  {
                    let telemetry_1598: Telemetry;
                    telemetry_1598 = Telemetry.META.deserialize(ctx, dataIn);
                    const argsObject_1599 = new AuthorizedApiSendTelemetryArguments(telemetry_1598);
                    const argsNames_1600: string[] = ["telemetry"];
                    const argsValues_1601: any[] = [telemetry_1598];
                    ctx.invokeLocalMethodBefore("sendTelemetry", argsNames_1600, argsValues_1601);
                    (typeof (localApi as any).sendTelemetryArguments === "function" ? (localApi as any).sendTelemetryArguments(argsObject_1599) : localApi.sendTelemetry(telemetry_1598));
                    ctx.invokeLocalMethodAfter("sendTelemetry", null, argsNames_1600, argsValues_1601);
                    break;
                    
                }
                case 19:  {
                    let uids_1603: UUID[];
                    const len_1605 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1603 = new Array<UUID>(len_1605);
                    for (let idx_1604 = 0;
                    idx_1604 < len_1605;
                    idx_1604++)  {
                        uids_1603[idx_1604] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1606 = new AuthorizedApiRequestAccessGroupsForClientsArguments(uids_1603);
                    const argsNames_1607: string[] = ["uids"];
                    const argsValues_1608: any[] = [uids_1603];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsForClients", argsNames_1607, argsValues_1608);
                    (typeof (localApi as any).requestAccessGroupsForClientsArguments === "function" ? (localApi as any).requestAccessGroupsForClientsArguments(argsObject_1606) : localApi.requestAccessGroupsForClients(uids_1603));
                    ctx.invokeLocalMethodAfter("requestAccessGroupsForClients", null, argsNames_1607, argsValues_1608);
                    break;
                    
                }
                case 20:  {
                    let ids_1610: UUID[];
                    const len_1612 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    ids_1610 = new Array<UUID>(len_1612);
                    for (let idx_1611 = 0;
                    idx_1611 < len_1612;
                    idx_1611++)  {
                        ids_1610[idx_1611] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1613 = new AuthorizedApiRequestAccessGroupsItemsArguments(ids_1610);
                    const argsNames_1614: string[] = ["ids"];
                    const argsValues_1615: any[] = [ids_1610];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsItems", argsNames_1614, argsValues_1615);
                    (typeof (localApi as any).requestAccessGroupsItemsArguments === "function" ? (localApi as any).requestAccessGroupsItemsArguments(argsObject_1613) : localApi.requestAccessGroupsItems(ids_1610));
                    ctx.invokeLocalMethodAfter("requestAccessGroupsItems", null, argsNames_1614, argsValues_1615);
                    break;
                    
                }
                case 22:  {
                    let uid_1617: UUID;
                    let groups_1618: UUID[];
                    uid_1617 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1620 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1618 = new Array<UUID>(len_1620);
                    for (let idx_1619 = 0;
                    idx_1619 < len_1620;
                    idx_1619++)  {
                        groups_1618[idx_1619] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1621 = new AuthorizedApiSendAccessGroupForClientArguments(uid_1617, groups_1618);
                    const argsNames_1622: string[] = ["uid", "groups"];
                    const argsValues_1623: any[] = [uid_1617, groups_1618];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_1622, argsValues_1623);
                    (typeof (localApi as any).sendAccessGroupForClientArguments === "function" ? (localApi as any).sendAccessGroupForClientArguments(argsObject_1621) : localApi.sendAccessGroupForClient(uid_1617, groups_1618));
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_1622, argsValues_1623);
                    break;
                    
                }
                case 23:  {
                    let id_1625: UUID;
                    let groups_1626: UUID[];
                    id_1625 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1628 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1626 = new Array<UUID>(len_1628);
                    for (let idx_1627 = 0;
                    idx_1627 < len_1628;
                    idx_1627++)  {
                        groups_1626[idx_1627] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1629 = new AuthorizedApiAddItemsToAccessGroupArguments(id_1625, groups_1626);
                    const argsNames_1630: string[] = ["id", "groups"];
                    const argsValues_1631: any[] = [id_1625, groups_1626];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_1630, argsValues_1631);
                    (typeof (localApi as any).addItemsToAccessGroupArguments === "function" ? (localApi as any).addItemsToAccessGroupArguments(argsObject_1629) : localApi.addItemsToAccessGroup(id_1625, groups_1626));
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_1630, argsValues_1631);
                    break;
                    
                }
                case 24:  {
                    let id_1633: UUID;
                    let groups_1634: UUID[];
                    id_1633 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1636 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1634 = new Array<UUID>(len_1636);
                    for (let idx_1635 = 0;
                    idx_1635 < len_1636;
                    idx_1635++)  {
                        groups_1634[idx_1635] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1637 = new AuthorizedApiRemoveItemsFromAccessGroupArguments(id_1633, groups_1634);
                    const argsNames_1638: string[] = ["id", "groups"];
                    const argsValues_1639: any[] = [id_1633, groups_1634];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_1638, argsValues_1639);
                    (typeof (localApi as any).removeItemsFromAccessGroupArguments === "function" ? (localApi as any).removeItemsFromAccessGroupArguments(argsObject_1637) : localApi.removeItemsFromAccessGroup(id_1633, groups_1634));
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_1638, argsValues_1639);
                    break;
                    
                }
                case 25:  {
                    let uid_1641: UUID;
                    let groups_1642: UUID[];
                    uid_1641 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1644 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1642 = new Array<UUID>(len_1644);
                    for (let idx_1643 = 0;
                    idx_1643 < len_1644;
                    idx_1643++)  {
                        groups_1642[idx_1643] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1645 = new AuthorizedApiAddAccessGroupsToClientArguments(uid_1641, groups_1642);
                    const argsNames_1646: string[] = ["uid", "groups"];
                    const argsValues_1647: any[] = [uid_1641, groups_1642];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_1646, argsValues_1647);
                    (typeof (localApi as any).addAccessGroupsToClientArguments === "function" ? (localApi as any).addAccessGroupsToClientArguments(argsObject_1645) : localApi.addAccessGroupsToClient(uid_1641, groups_1642));
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_1646, argsValues_1647);
                    break;
                    
                }
                case 26:  {
                    let uid_1649: UUID;
                    let groups_1650: UUID[];
                    uid_1649 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1652 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1650 = new Array<UUID>(len_1652);
                    for (let idx_1651 = 0;
                    idx_1651 < len_1652;
                    idx_1651++)  {
                        groups_1650[idx_1651] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1653 = new AuthorizedApiRemoveAccessGroupsFromClientArguments(uid_1649, groups_1650);
                    const argsNames_1654: string[] = ["uid", "groups"];
                    const argsValues_1655: any[] = [uid_1649, groups_1650];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_1654, argsValues_1655);
                    (typeof (localApi as any).removeAccessGroupsFromClientArguments === "function" ? (localApi as any).removeAccessGroupsFromClientArguments(argsObject_1653) : localApi.removeAccessGroupsFromClient(uid_1649, groups_1650));
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_1654, argsValues_1655);
                    break;
                    
                }
                case 27:  {
                    let uids_1657: UUID[];
                    const len_1659 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1657 = new Array<UUID>(len_1659);
                    for (let idx_1658 = 0;
                    idx_1658 < len_1659;
                    idx_1658++)  {
                        uids_1657[idx_1658] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1660 = new AuthorizedApiRequestAllAccessedClientsArguments(uids_1657);
                    const argsNames_1661: string[] = ["uids"];
                    const argsValues_1662: any[] = [uids_1657];
                    ctx.invokeLocalMethodBefore("requestAllAccessedClients", argsNames_1661, argsValues_1662);
                    (typeof (localApi as any).requestAllAccessedClientsArguments === "function" ? (localApi as any).requestAllAccessedClientsArguments(argsObject_1660) : localApi.requestAllAccessedClients(uids_1657));
                    ctx.invokeLocalMethodAfter("requestAllAccessedClients", null, argsNames_1661, argsValues_1662);
                    break;
                    
                }
                case 28:  {
                    let requests_1664: AccessCheckPair[];
                    const len_1666 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    requests_1664 = new Array<AccessCheckPair>(len_1666);
                    for (let idx_1665 = 0;
                    idx_1665 < len_1666;
                    idx_1665++)  {
                        requests_1664[idx_1665] = AccessCheckPair.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1667 = new AuthorizedApiRequestAccessCheckArguments(requests_1664);
                    const argsNames_1668: string[] = ["requests"];
                    const argsValues_1669: any[] = [requests_1664];
                    ctx.invokeLocalMethodBefore("requestAccessCheck", argsNames_1668, argsValues_1669);
                    (typeof (localApi as any).requestAccessCheckArguments === "function" ? (localApi as any).requestAccessCheckArguments(argsObject_1667) : localApi.requestAccessCheck(requests_1664));
                    ctx.invokeLocalMethodAfter("requestAccessCheck", null, argsNames_1668, argsValues_1669);
                    break;
                    
                }
                case 29:  {
                    const reqId_1670 = dataIn.readInt();
                    let uid_1671: UUID;
                    let fromTime_1672: bigint;
                    let toTime_1673: bigint;
                    let limit_1674: number;
                    uid_1671 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    fromTime_1672 = dataIn.readLong();
                    toTime_1673 = dataIn.readLong();
                    limit_1674 = dataIn.readInt();
                    const argsObject_1675 = new AuthorizedApiGetClientActivityArguments(uid_1671, fromTime_1672, toTime_1673, limit_1674);
                    const argsNames_1676: string[] = ["uid", "fromTime", "toTime", "limit"];
                    const argsValues_1677: any[] = [uid_1671, fromTime_1672, toTime_1673, limit_1674];
                    ctx.invokeLocalMethodBefore("getClientActivity", argsNames_1676, argsValues_1677);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getClientActivityArguments === "function" ? (localApi as any).getClientActivityArguments(argsObject_1675) : localApi.getClientActivity(uid_1671, fromTime_1672, toTime_1673, limit_1674));
                    ctx.invokeLocalMethodAfter("getClientActivity", resultFuture, argsNames_1676, argsValues_1677);
                    resultFuture.to((v_1679: ClientActivity[]) =>  {
                        const data_1678 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1678, v_1679.length);
                        for (const el_1680 of v_1679)  {
                            ClientActivity.META.serialize(ctx, el_1680, data_1678);
                            
                        }
                        ctx.sendResultToRemote(reqId_1670, data_1678.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 30:  {
                    const reqId_1681 = dataIn.readInt();
                    let uid_1682: UUID;
                    let query_1683: string;
                    let limit_1684: number;
                    uid_1682 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    let stringBytes_1685: Uint8Array;
                    const len_1687 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1688 = dataIn.readBytes(len_1687);
                    stringBytes_1685 = bytes_1688;
                    query_1683 = new TextDecoder('utf-8').decode(stringBytes_1685);
                    limit_1684 = dataIn.readInt();
                    const argsObject_1689 = new AuthorizedApiSearchClientLogsArguments(uid_1682, query_1683, limit_1684);
                    const argsNames_1690: string[] = ["uid", "query", "limit"];
                    const argsValues_1691: any[] = [uid_1682, query_1683, limit_1684];
                    ctx.invokeLocalMethodBefore("searchClientLogs", argsNames_1690, argsValues_1691);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).searchClientLogsArguments === "function" ? (localApi as any).searchClientLogsArguments(argsObject_1689) : localApi.searchClientLogs(uid_1682, query_1683, limit_1684));
                    ctx.invokeLocalMethodAfter("searchClientLogs", resultFuture, argsNames_1690, argsValues_1691);
                    resultFuture.to((v_1693: ClientLogEntry[]) =>  {
                        const data_1692 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1692, v_1693.length);
                        for (const el_1694 of v_1693)  {
                            ClientLogEntry.META.serialize(ctx, el_1694, data_1692);
                            
                        }
                        ctx.sendResultToRemote(reqId_1681, data_1692.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 31:  {
                    const reqId_1695 = dataIn.readInt();
                    let uid_1696: UUID;
                    let limit_1697: number;
                    uid_1696 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    limit_1697 = dataIn.readInt();
                    const argsObject_1698 = new AuthorizedApiGetClientConnectionsArguments(uid_1696, limit_1697);
                    const argsNames_1699: string[] = ["uid", "limit"];
                    const argsValues_1700: any[] = [uid_1696, limit_1697];
                    ctx.invokeLocalMethodBefore("getClientConnections", argsNames_1699, argsValues_1700);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getClientConnectionsArguments === "function" ? (localApi as any).getClientConnectionsArguments(argsObject_1698) : localApi.getClientConnections(uid_1696, limit_1697));
                    ctx.invokeLocalMethodAfter("getClientConnections", resultFuture, argsNames_1699, argsValues_1700);
                    resultFuture.to((v_1702: ClientConnectionInfo[]) =>  {
                        const data_1701 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1701, v_1702.length);
                        for (const el_1703 of v_1702)  {
                            ClientConnectionInfo.META.serialize(ctx, el_1703, data_1701);
                            
                        }
                        ctx.sendResultToRemote(reqId_1695, data_1701.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 32:  {
                    const reqId_1704 = dataIn.readInt();
                    let uid_1705: UUID;
                    let fromTime_1706: bigint;
                    let toTime_1707: bigint;
                    let limit_1708: number;
                    uid_1705 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    fromTime_1706 = dataIn.readLong();
                    toTime_1707 = dataIn.readLong();
                    limit_1708 = dataIn.readInt();
                    const argsObject_1709 = new AuthorizedApiGetClientMessagesArguments(uid_1705, fromTime_1706, toTime_1707, limit_1708);
                    const argsNames_1710: string[] = ["uid", "fromTime", "toTime", "limit"];
                    const argsValues_1711: any[] = [uid_1705, fromTime_1706, toTime_1707, limit_1708];
                    ctx.invokeLocalMethodBefore("getClientMessages", argsNames_1710, argsValues_1711);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getClientMessagesArguments === "function" ? (localApi as any).getClientMessagesArguments(argsObject_1709) : localApi.getClientMessages(uid_1705, fromTime_1706, toTime_1707, limit_1708));
                    ctx.invokeLocalMethodAfter("getClientMessages", resultFuture, argsNames_1710, argsValues_1711);
                    resultFuture.to((v_1713: MessageInfo[]) =>  {
                        const data_1712 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1712, v_1713.length);
                        for (const el_1714 of v_1713)  {
                            MessageInfo.META.serialize(ctx, el_1714, data_1712);
                            
                        }
                        ctx.sendResultToRemote(reqId_1704, data_1712.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 33:  {
                    let delayMillis_1716: bigint;
                    delayMillis_1716 = dataIn.readLong();
                    const argsObject_1717 = new AuthorizedApiSetNextReadDelayArguments(delayMillis_1716);
                    const argsNames_1718: string[] = ["delayMillis"];
                    const argsValues_1719: any[] = [delayMillis_1716];
                    ctx.invokeLocalMethodBefore("setNextReadDelay", argsNames_1718, argsValues_1719);
                    (typeof (localApi as any).setNextReadDelayArguments === "function" ? (localApi as any).setNextReadDelayArguments(argsObject_1717) : localApi.setNextReadDelay(delayMillis_1716));
                    ctx.invokeLocalMethodAfter("setNextReadDelay", null, argsNames_1718, argsValues_1719);
                    break;
                    
                }
                case 34:  {
                    const reqId_1720 = dataIn.readInt();
                    let uid_1721: UUID;
                    uid_1721 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1722 = new AuthorizedApiGetUapArguments(uid_1721);
                    const argsNames_1723: string[] = ["uid"];
                    const argsValues_1724: any[] = [uid_1721];
                    ctx.invokeLocalMethodBefore("getUap", argsNames_1723, argsValues_1724);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getUapArguments === "function" ? (localApi as any).getUapArguments(argsObject_1722) : localApi.getUap(uid_1721));
                    ctx.invokeLocalMethodAfter("getUap", resultFuture, argsNames_1723, argsValues_1724);
                    resultFuture.to((v_1726: Uap) =>  {
                        const data_1725 = new DataInOut();
                        Uap.META.serialize(ctx, v_1726, data_1725);
                        ctx.sendResultToRemote(reqId_1720, data_1725.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 36:  {
                    const argsObject_1728 = new AuthorizedApiPullMessagesArguments();
                    const argsNames_1729: string[] = [];
                    const argsValues_1730: any[] = [];
                    ctx.invokeLocalMethodBefore("pullMessages", argsNames_1729, argsValues_1730);
                    (typeof (localApi as any).pullMessagesArguments === "function" ? (localApi as any).pullMessagesArguments(argsObject_1728) : localApi.pullMessages());
                    ctx.invokeLocalMethodAfter("pullMessages", null, argsNames_1729, argsValues_1730);
                    break;
                    
                }
                case 40:  {
                    const reqId_1731 = dataIn.readInt();
                    let uid_1732: UUID;
                    uid_1732 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1733 = new AuthorizedApiRequestWebRtcSessionArguments(uid_1732);
                    const argsNames_1734: string[] = ["uid"];
                    const argsValues_1735: any[] = [uid_1732];
                    ctx.invokeLocalMethodBefore("requestWebRtcSession", argsNames_1734, argsValues_1735);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).requestWebRtcSessionArguments === "function" ? (localApi as any).requestWebRtcSessionArguments(argsObject_1733) : localApi.requestWebRtcSession(uid_1732));
                    ctx.invokeLocalMethodAfter("requestWebRtcSession", resultFuture, argsNames_1734, argsValues_1735);
                    resultFuture.to((v_1737: WebRtcSession) =>  {
                        const data_1736 = new DataInOut();
                        WebRtcSession.META.serialize(ctx, v_1737, data_1736);
                        ctx.sendResultToRemote(reqId_1731, data_1736.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 41:  {
                    let session_1739: WebRtcSession;
                    session_1739 = WebRtcSession.META.deserialize(ctx, dataIn);
                    const argsObject_1740 = new AuthorizedApiPublishWebRtcSessionArguments(session_1739);
                    const argsNames_1741: string[] = ["session"];
                    const argsValues_1742: any[] = [session_1739];
                    ctx.invokeLocalMethodBefore("publishWebRtcSession", argsNames_1741, argsValues_1742);
                    (typeof (localApi as any).publishWebRtcSessionArguments === "function" ? (localApi as any).publishWebRtcSessionArguments(argsObject_1740) : localApi.publishWebRtcSession(session_1739));
                    ctx.invokeLocalMethodAfter("publishWebRtcSession", null, argsNames_1741, argsValues_1742);
                    break;
                    
                }
                case 42:  {
                    const reqId_1743 = dataIn.readInt();
                    const argsObject_1744 = new AuthorizedApiSelfDestructArguments();
                    const argsNames_1745: string[] = [];
                    const argsValues_1746: any[] = [];
                    ctx.invokeLocalMethodBefore("selfDestruct", argsNames_1745, argsValues_1746);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).selfDestructArguments === "function" ? (localApi as any).selfDestructArguments(argsObject_1744) : localApi.selfDestruct());
                    ctx.invokeLocalMethodAfter("selfDestruct", resultFuture, argsNames_1745, argsValues_1746);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1743);
                        
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
    makeRemote(sCtx_1747: MetaContext): AuthorizedApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_1747.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_1747.flush();
                
            }
            , getFastMetaContext: () => sCtx_1747, backId: (id: number): void =>  {
                const dataOut_1749 = new DataInOut();
                dataOut_1749.writeByte(3);
                const argsNames_1751: string[] = ["id"];
                const argsValues_1752: any[] = [id];
                sCtx_1747.invokeRemoteMethodAfter("backId", null, argsNames_1751, argsValues_1752);
                dataOut_1749.writeByte(id);
                sCtx_1747.sendToRemote(dataOut_1749.toArray());
                
            }
            , ping: (nextConnectMsDuration: bigint, rxWindowMs: bigint): AFuture =>  {
                const dataOut_1754 = new DataInOut();
                dataOut_1754.writeByte(4);
                const argsNames_1756: string[] = ["nextConnectMsDuration", "rxWindowMs"];
                const argsValues_1757: any[] = [nextConnectMsDuration, rxWindowMs];
                const result_1755 = AFuture.make();
                sCtx_1747.invokeRemoteMethodAfter("ping", result_1755, argsNames_1756, argsValues_1757);
                const reqId_1753 = sCtx_1747.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1755 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1755.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1754.writeInt(reqId_1753);
                dataOut_1754.writeLong(nextConnectMsDuration);
                dataOut_1754.writeLong(rxWindowMs);
                sCtx_1747.sendToRemote(dataOut_1754.toArray());
                return result_1755;
                
            }
            , client: (uid: UUID, stream: ClientApiStream): void =>  {
                const dataOut_1759 = new DataInOut();
                dataOut_1759.writeByte(5);
                const argsNames_1761: string[] = ["uid", "stream"];
                const argsValues_1762: any[] = [uid, stream];
                sCtx_1747.invokeRemoteMethodAfter("client", null, argsNames_1761, argsValues_1762);
                FastMeta.META_UUID.serialize(sCtx_1747, uid, dataOut_1759);
                ClientApiStream.META.serialize(sCtx_1747, stream, dataOut_1759);
                sCtx_1747.sendToRemote(dataOut_1759.toArray());
                
            }
            , sendMessage: (msg: Message): void =>  {
                const dataOut_1764 = new DataInOut();
                dataOut_1764.writeByte(6);
                const argsNames_1766: string[] = ["msg"];
                const argsValues_1767: any[] = [msg];
                sCtx_1747.invokeRemoteMethodAfter("sendMessage", null, argsNames_1766, argsValues_1767);
                Message.META.serialize(sCtx_1747, msg, dataOut_1764);
                sCtx_1747.sendToRemote(dataOut_1764.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_1769 = new DataInOut();
                dataOut_1769.writeByte(7);
                const argsNames_1771: string[] = ["msg"];
                const argsValues_1772: any[] = [msg];
                sCtx_1747.invokeRemoteMethodAfter("sendMessages", null, argsNames_1771, argsValues_1772);
                SerializerPackNumber.INSTANCE.put(dataOut_1769, msg.length);
                for (const el_1773 of msg)  {
                    Message.META.serialize(sCtx_1747, el_1773, dataOut_1769);
                    
                }
                sCtx_1747.sendToRemote(dataOut_1769.toArray());
                
            }
            , sendMulticast: (uids: UUID[], data: Uint8Array): void =>  {
                const dataOut_1775 = new DataInOut();
                dataOut_1775.writeByte(37);
                const argsNames_1777: string[] = ["uids", "data"];
                const argsValues_1778: any[] = [uids, data];
                sCtx_1747.invokeRemoteMethodAfter("sendMulticast", null, argsNames_1777, argsValues_1778);
                SerializerPackNumber.INSTANCE.put(dataOut_1775, uids.length);
                for (const el_1779 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1747, el_1779, dataOut_1775);
                    
                }
                SerializerPackNumber.INSTANCE.put(dataOut_1775, data.length);
                dataOut_1775.write(data);
                sCtx_1747.sendToRemote(dataOut_1775.toArray());
                
            }
            , sendMessageWithResult: (msg: Message): AFuture =>  {
                const dataOut_1782 = new DataInOut();
                dataOut_1782.writeByte(39);
                const argsNames_1784: string[] = ["msg"];
                const argsValues_1785: any[] = [msg];
                const result_1783 = AFuture.make();
                sCtx_1747.invokeRemoteMethodAfter("sendMessageWithResult", result_1783, argsNames_1784, argsValues_1785);
                const reqId_1781 = sCtx_1747.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1783 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1783.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1782.writeInt(reqId_1781);
                Message.META.serialize(sCtx_1747, msg, dataOut_1782);
                sCtx_1747.sendToRemote(dataOut_1782.toArray());
                return result_1783;
                
            }
            , createAccessGroup: (owner: UUID, uids: UUID[]): ARFuture<UUID> =>  {
                const dataOut_1787 = new DataInOut();
                dataOut_1787.writeByte(8);
                const argsNames_1789: string[] = ["owner", "uids"];
                const argsValues_1790: any[] = [owner, uids];
                const result_1788 = ARFuture.of<UUID>();
                sCtx_1747.invokeRemoteMethodAfter("createAccessGroup", result_1788, argsNames_1789, argsValues_1790);
                const reqId_1786 = sCtx_1747.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1788 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_1747, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1788.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1787.writeInt(reqId_1786);
                FastMeta.META_UUID.serialize(sCtx_1747, owner, dataOut_1787);
                SerializerPackNumber.INSTANCE.put(dataOut_1787, uids.length);
                for (const el_1791 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1747, el_1791, dataOut_1787);
                    
                }
                sCtx_1747.sendToRemote(dataOut_1787.toArray());
                return result_1788;
                
            }
            , addToAccessGroup: (groupId: UUID, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_1793 = new DataInOut();
                dataOut_1793.writeByte(9);
                const argsNames_1795: string[] = ["groupId", "uid"];
                const argsValues_1796: any[] = [groupId, uid];
                const result_1794 = ARFuture.of<boolean>();
                sCtx_1747.invokeRemoteMethodAfter("addToAccessGroup", result_1794, argsNames_1795, argsValues_1796);
                const reqId_1792 = sCtx_1747.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1794 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1747, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1794.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1793.writeInt(reqId_1792);
                FastMeta.META_UUID.serialize(sCtx_1747, groupId, dataOut_1793);
                FastMeta.META_UUID.serialize(sCtx_1747, uid, dataOut_1793);
                sCtx_1747.sendToRemote(dataOut_1793.toArray());
                return result_1794;
                
            }
            , removeFromAccessGroup: (groupId: UUID, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_1798 = new DataInOut();
                dataOut_1798.writeByte(10);
                const argsNames_1800: string[] = ["groupId", "uid"];
                const argsValues_1801: any[] = [groupId, uid];
                const result_1799 = ARFuture.of<boolean>();
                sCtx_1747.invokeRemoteMethodAfter("removeFromAccessGroup", result_1799, argsNames_1800, argsValues_1801);
                const reqId_1797 = sCtx_1747.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1799 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1747, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1799.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1798.writeInt(reqId_1797);
                FastMeta.META_UUID.serialize(sCtx_1747, groupId, dataOut_1798);
                FastMeta.META_UUID.serialize(sCtx_1747, uid, dataOut_1798);
                sCtx_1747.sendToRemote(dataOut_1798.toArray());
                return result_1799;
                
            }
            , checkAccessForSendMessage: (uid: UUID): AFuture =>  {
                const dataOut_1803 = new DataInOut();
                dataOut_1803.writeByte(11);
                const argsNames_1805: string[] = ["uid"];
                const argsValues_1806: any[] = [uid];
                const result_1804 = AFuture.make();
                sCtx_1747.invokeRemoteMethodAfter("checkAccessForSendMessage", result_1804, argsNames_1805, argsValues_1806);
                const reqId_1802 = sCtx_1747.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1804 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1804.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1803.writeInt(reqId_1802);
                FastMeta.META_UUID.serialize(sCtx_1747, uid, dataOut_1803);
                sCtx_1747.sendToRemote(dataOut_1803.toArray());
                return result_1804;
                
            }
            , resolverServers: (sid: number[]): void =>  {
                const dataOut_1808 = new DataInOut();
                dataOut_1808.writeByte(12);
                const argsNames_1810: string[] = ["sid"];
                const argsValues_1811: any[] = [sid];
                sCtx_1747.invokeRemoteMethodAfter("resolverServers", null, argsNames_1810, argsValues_1811);
                SerializerPackNumber.INSTANCE.put(dataOut_1808, sid.length);
                for (const el_1812 of sid)  {
                    dataOut_1808.writeShort(el_1812);
                    
                }
                sCtx_1747.sendToRemote(dataOut_1808.toArray());
                
            }
            , resolveClouds: (uids: UUID[]): void =>  {
                const dataOut_1814 = new DataInOut();
                dataOut_1814.writeByte(13);
                const argsNames_1816: string[] = ["uids"];
                const argsValues_1817: any[] = [uids];
                sCtx_1747.invokeRemoteMethodAfter("resolveClouds", null, argsNames_1816, argsValues_1817);
                SerializerPackNumber.INSTANCE.put(dataOut_1814, uids.length);
                for (const el_1818 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1747, el_1818, dataOut_1814);
                    
                }
                sCtx_1747.sendToRemote(dataOut_1814.toArray());
                
            }
            , reportAppliedConfig: (configs: AppliedConfig[]): void =>  {
                const dataOut_1820 = new DataInOut();
                dataOut_1820.writeByte(38);
                const argsNames_1822: string[] = ["configs"];
                const argsValues_1823: any[] = [configs];
                sCtx_1747.invokeRemoteMethodAfter("reportAppliedConfig", null, argsNames_1822, argsValues_1823);
                SerializerPackNumber.INSTANCE.put(dataOut_1820, configs.length);
                for (const el_1824 of configs)  {
                    AppliedConfig.META.serialize(sCtx_1747, el_1824, dataOut_1820);
                    
                }
                sCtx_1747.sendToRemote(dataOut_1820.toArray());
                
            }
            , getAccessGroups: (uid: UUID): ARFuture<UUID[]> =>  {
                const dataOut_1826 = new DataInOut();
                dataOut_1826.writeByte(14);
                const argsNames_1828: string[] = ["uid"];
                const argsValues_1829: any[] = [uid];
                const result_1827 = ARFuture.of<UUID[]>();
                sCtx_1747.invokeRemoteMethodAfter("getAccessGroups", result_1827, argsNames_1828, argsValues_1829);
                const reqId_1825 = sCtx_1747.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1827 as ARFuture<UUID[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_UUID).deserialize(sCtx_1747, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1827.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1826.writeInt(reqId_1825);
                FastMeta.META_UUID.serialize(sCtx_1747, uid, dataOut_1826);
                sCtx_1747.sendToRemote(dataOut_1826.toArray());
                return result_1827;
                
            }
            , getAccessGroup: (groupId: UUID): ARFuture<AccessGroup> =>  {
                const dataOut_1831 = new DataInOut();
                dataOut_1831.writeByte(15);
                const argsNames_1833: string[] = ["groupId"];
                const argsValues_1834: any[] = [groupId];
                const result_1832 = ARFuture.of<AccessGroup>();
                sCtx_1747.invokeRemoteMethodAfter("getAccessGroup", result_1832, argsNames_1833, argsValues_1834);
                const reqId_1830 = sCtx_1747.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1832 as ARFuture<AccessGroup>).tryDone(AccessGroup.META.deserialize(sCtx_1747, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1832.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1831.writeInt(reqId_1830);
                FastMeta.META_UUID.serialize(sCtx_1747, groupId, dataOut_1831);
                sCtx_1747.sendToRemote(dataOut_1831.toArray());
                return result_1832;
                
            }
            , getAllAccessedClients: (uid: UUID): ARFuture<UUID[]> =>  {
                const dataOut_1836 = new DataInOut();
                dataOut_1836.writeByte(16);
                const argsNames_1838: string[] = ["uid"];
                const argsValues_1839: any[] = [uid];
                const result_1837 = ARFuture.of<UUID[]>();
                sCtx_1747.invokeRemoteMethodAfter("getAllAccessedClients", result_1837, argsNames_1838, argsValues_1839);
                const reqId_1835 = sCtx_1747.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1837 as ARFuture<UUID[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_UUID).deserialize(sCtx_1747, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1837.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1836.writeInt(reqId_1835);
                FastMeta.META_UUID.serialize(sCtx_1747, uid, dataOut_1836);
                sCtx_1747.sendToRemote(dataOut_1836.toArray());
                return result_1837;
                
            }
            , checkAccessForSendMessage2: (uid1: UUID, uid2: UUID): ARFuture<boolean> =>  {
                const dataOut_1841 = new DataInOut();
                dataOut_1841.writeByte(17);
                const argsNames_1843: string[] = ["uid1", "uid2"];
                const argsValues_1844: any[] = [uid1, uid2];
                const result_1842 = ARFuture.of<boolean>();
                sCtx_1747.invokeRemoteMethodAfter("checkAccessForSendMessage2", result_1842, argsNames_1843, argsValues_1844);
                const reqId_1840 = sCtx_1747.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1842 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1747, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1842.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1841.writeInt(reqId_1840);
                FastMeta.META_UUID.serialize(sCtx_1747, uid1, dataOut_1841);
                FastMeta.META_UUID.serialize(sCtx_1747, uid2, dataOut_1841);
                sCtx_1747.sendToRemote(dataOut_1841.toArray());
                return result_1842;
                
            }
            , sendTelemetry: (telemetry: Telemetry): void =>  {
                const dataOut_1846 = new DataInOut();
                dataOut_1846.writeByte(18);
                const argsNames_1848: string[] = ["telemetry"];
                const argsValues_1849: any[] = [telemetry];
                sCtx_1747.invokeRemoteMethodAfter("sendTelemetry", null, argsNames_1848, argsValues_1849);
                Telemetry.META.serialize(sCtx_1747, telemetry, dataOut_1846);
                sCtx_1747.sendToRemote(dataOut_1846.toArray());
                
            }
            , requestAccessGroupsForClients: (uids: UUID[]): void =>  {
                const dataOut_1851 = new DataInOut();
                dataOut_1851.writeByte(19);
                const argsNames_1853: string[] = ["uids"];
                const argsValues_1854: any[] = [uids];
                sCtx_1747.invokeRemoteMethodAfter("requestAccessGroupsForClients", null, argsNames_1853, argsValues_1854);
                SerializerPackNumber.INSTANCE.put(dataOut_1851, uids.length);
                for (const el_1855 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1747, el_1855, dataOut_1851);
                    
                }
                sCtx_1747.sendToRemote(dataOut_1851.toArray());
                
            }
            , requestAccessGroupsItems: (ids: UUID[]): void =>  {
                const dataOut_1857 = new DataInOut();
                dataOut_1857.writeByte(20);
                const argsNames_1859: string[] = ["ids"];
                const argsValues_1860: any[] = [ids];
                sCtx_1747.invokeRemoteMethodAfter("requestAccessGroupsItems", null, argsNames_1859, argsValues_1860);
                SerializerPackNumber.INSTANCE.put(dataOut_1857, ids.length);
                for (const el_1861 of ids)  {
                    FastMeta.META_UUID.serialize(sCtx_1747, el_1861, dataOut_1857);
                    
                }
                sCtx_1747.sendToRemote(dataOut_1857.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_1863 = new DataInOut();
                dataOut_1863.writeByte(22);
                const argsNames_1865: string[] = ["uid", "groups"];
                const argsValues_1866: any[] = [uid, groups];
                sCtx_1747.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_1865, argsValues_1866);
                FastMeta.META_UUID.serialize(sCtx_1747, uid, dataOut_1863);
                SerializerPackNumber.INSTANCE.put(dataOut_1863, groups.length);
                for (const el_1867 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1747, el_1867, dataOut_1863);
                    
                }
                sCtx_1747.sendToRemote(dataOut_1863.toArray());
                
            }
            , addItemsToAccessGroup: (id: UUID, groups: UUID[]): void =>  {
                const dataOut_1869 = new DataInOut();
                dataOut_1869.writeByte(23);
                const argsNames_1871: string[] = ["id", "groups"];
                const argsValues_1872: any[] = [id, groups];
                sCtx_1747.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_1871, argsValues_1872);
                FastMeta.META_UUID.serialize(sCtx_1747, id, dataOut_1869);
                SerializerPackNumber.INSTANCE.put(dataOut_1869, groups.length);
                for (const el_1873 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1747, el_1873, dataOut_1869);
                    
                }
                sCtx_1747.sendToRemote(dataOut_1869.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: UUID, groups: UUID[]): void =>  {
                const dataOut_1875 = new DataInOut();
                dataOut_1875.writeByte(24);
                const argsNames_1877: string[] = ["id", "groups"];
                const argsValues_1878: any[] = [id, groups];
                sCtx_1747.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_1877, argsValues_1878);
                FastMeta.META_UUID.serialize(sCtx_1747, id, dataOut_1875);
                SerializerPackNumber.INSTANCE.put(dataOut_1875, groups.length);
                for (const el_1879 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1747, el_1879, dataOut_1875);
                    
                }
                sCtx_1747.sendToRemote(dataOut_1875.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_1881 = new DataInOut();
                dataOut_1881.writeByte(25);
                const argsNames_1883: string[] = ["uid", "groups"];
                const argsValues_1884: any[] = [uid, groups];
                sCtx_1747.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_1883, argsValues_1884);
                FastMeta.META_UUID.serialize(sCtx_1747, uid, dataOut_1881);
                SerializerPackNumber.INSTANCE.put(dataOut_1881, groups.length);
                for (const el_1885 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1747, el_1885, dataOut_1881);
                    
                }
                sCtx_1747.sendToRemote(dataOut_1881.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_1887 = new DataInOut();
                dataOut_1887.writeByte(26);
                const argsNames_1889: string[] = ["uid", "groups"];
                const argsValues_1890: any[] = [uid, groups];
                sCtx_1747.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_1889, argsValues_1890);
                FastMeta.META_UUID.serialize(sCtx_1747, uid, dataOut_1887);
                SerializerPackNumber.INSTANCE.put(dataOut_1887, groups.length);
                for (const el_1891 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1747, el_1891, dataOut_1887);
                    
                }
                sCtx_1747.sendToRemote(dataOut_1887.toArray());
                
            }
            , requestAllAccessedClients: (uids: UUID[]): void =>  {
                const dataOut_1893 = new DataInOut();
                dataOut_1893.writeByte(27);
                const argsNames_1895: string[] = ["uids"];
                const argsValues_1896: any[] = [uids];
                sCtx_1747.invokeRemoteMethodAfter("requestAllAccessedClients", null, argsNames_1895, argsValues_1896);
                SerializerPackNumber.INSTANCE.put(dataOut_1893, uids.length);
                for (const el_1897 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1747, el_1897, dataOut_1893);
                    
                }
                sCtx_1747.sendToRemote(dataOut_1893.toArray());
                
            }
            , requestAccessCheck: (requests: AccessCheckPair[]): void =>  {
                const dataOut_1899 = new DataInOut();
                dataOut_1899.writeByte(28);
                const argsNames_1901: string[] = ["requests"];
                const argsValues_1902: any[] = [requests];
                sCtx_1747.invokeRemoteMethodAfter("requestAccessCheck", null, argsNames_1901, argsValues_1902);
                SerializerPackNumber.INSTANCE.put(dataOut_1899, requests.length);
                for (const el_1903 of requests)  {
                    AccessCheckPair.META.serialize(sCtx_1747, el_1903, dataOut_1899);
                    
                }
                sCtx_1747.sendToRemote(dataOut_1899.toArray());
                
            }
            , getClientActivity: (uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<ClientActivity[]> =>  {
                const dataOut_1905 = new DataInOut();
                dataOut_1905.writeByte(29);
                const argsNames_1907: string[] = ["uid", "fromTime", "toTime", "limit"];
                const argsValues_1908: any[] = [uid, fromTime, toTime, limit];
                const result_1906 = ARFuture.of<ClientActivity[]>();
                sCtx_1747.invokeRemoteMethodAfter("getClientActivity", result_1906, argsNames_1907, argsValues_1908);
                const reqId_1904 = sCtx_1747.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1906 as ARFuture<ClientActivity[]>).tryDone(FastMeta.getMetaArray(ClientActivity.META).deserialize(sCtx_1747, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1906.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1905.writeInt(reqId_1904);
                FastMeta.META_UUID.serialize(sCtx_1747, uid, dataOut_1905);
                dataOut_1905.writeLong(fromTime);
                dataOut_1905.writeLong(toTime);
                dataOut_1905.writeInt(limit);
                sCtx_1747.sendToRemote(dataOut_1905.toArray());
                return result_1906;
                
            }
            , searchClientLogs: (uid: UUID, query: string, limit: number): ARFuture<ClientLogEntry[]> =>  {
                const dataOut_1910 = new DataInOut();
                dataOut_1910.writeByte(30);
                const argsNames_1912: string[] = ["uid", "query", "limit"];
                const argsValues_1913: any[] = [uid, query, limit];
                const result_1911 = ARFuture.of<ClientLogEntry[]>();
                sCtx_1747.invokeRemoteMethodAfter("searchClientLogs", result_1911, argsNames_1912, argsValues_1913);
                const reqId_1909 = sCtx_1747.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1911 as ARFuture<ClientLogEntry[]>).tryDone(FastMeta.getMetaArray(ClientLogEntry.META).deserialize(sCtx_1747, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1911.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1910.writeInt(reqId_1909);
                FastMeta.META_UUID.serialize(sCtx_1747, uid, dataOut_1910);
                const stringBytes_1914 = new TextEncoder().encode(query);
                SerializerPackNumber.INSTANCE.put(dataOut_1910, stringBytes_1914.length);
                dataOut_1910.write(stringBytes_1914);
                dataOut_1910.writeInt(limit);
                sCtx_1747.sendToRemote(dataOut_1910.toArray());
                return result_1911;
                
            }
            , getClientConnections: (uid: UUID, limit: number): ARFuture<ClientConnectionInfo[]> =>  {
                const dataOut_1917 = new DataInOut();
                dataOut_1917.writeByte(31);
                const argsNames_1919: string[] = ["uid", "limit"];
                const argsValues_1920: any[] = [uid, limit];
                const result_1918 = ARFuture.of<ClientConnectionInfo[]>();
                sCtx_1747.invokeRemoteMethodAfter("getClientConnections", result_1918, argsNames_1919, argsValues_1920);
                const reqId_1916 = sCtx_1747.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1918 as ARFuture<ClientConnectionInfo[]>).tryDone(FastMeta.getMetaArray(ClientConnectionInfo.META).deserialize(sCtx_1747, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1918.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1917.writeInt(reqId_1916);
                FastMeta.META_UUID.serialize(sCtx_1747, uid, dataOut_1917);
                dataOut_1917.writeInt(limit);
                sCtx_1747.sendToRemote(dataOut_1917.toArray());
                return result_1918;
                
            }
            , getClientMessages: (uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<MessageInfo[]> =>  {
                const dataOut_1922 = new DataInOut();
                dataOut_1922.writeByte(32);
                const argsNames_1924: string[] = ["uid", "fromTime", "toTime", "limit"];
                const argsValues_1925: any[] = [uid, fromTime, toTime, limit];
                const result_1923 = ARFuture.of<MessageInfo[]>();
                sCtx_1747.invokeRemoteMethodAfter("getClientMessages", result_1923, argsNames_1924, argsValues_1925);
                const reqId_1921 = sCtx_1747.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1923 as ARFuture<MessageInfo[]>).tryDone(FastMeta.getMetaArray(MessageInfo.META).deserialize(sCtx_1747, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1923.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1922.writeInt(reqId_1921);
                FastMeta.META_UUID.serialize(sCtx_1747, uid, dataOut_1922);
                dataOut_1922.writeLong(fromTime);
                dataOut_1922.writeLong(toTime);
                dataOut_1922.writeInt(limit);
                sCtx_1747.sendToRemote(dataOut_1922.toArray());
                return result_1923;
                
            }
            , setNextReadDelay: (delayMillis: bigint): void =>  {
                const dataOut_1927 = new DataInOut();
                dataOut_1927.writeByte(33);
                const argsNames_1929: string[] = ["delayMillis"];
                const argsValues_1930: any[] = [delayMillis];
                sCtx_1747.invokeRemoteMethodAfter("setNextReadDelay", null, argsNames_1929, argsValues_1930);
                dataOut_1927.writeLong(delayMillis);
                sCtx_1747.sendToRemote(dataOut_1927.toArray());
                
            }
            , getUap: (uid: UUID): ARFuture<Uap> =>  {
                const dataOut_1932 = new DataInOut();
                dataOut_1932.writeByte(34);
                const argsNames_1934: string[] = ["uid"];
                const argsValues_1935: any[] = [uid];
                const result_1933 = ARFuture.of<Uap>();
                sCtx_1747.invokeRemoteMethodAfter("getUap", result_1933, argsNames_1934, argsValues_1935);
                const reqId_1931 = sCtx_1747.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1933 as ARFuture<Uap>).tryDone(Uap.META.deserialize(sCtx_1747, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1933.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1932.writeInt(reqId_1931);
                FastMeta.META_UUID.serialize(sCtx_1747, uid, dataOut_1932);
                sCtx_1747.sendToRemote(dataOut_1932.toArray());
                return result_1933;
                
            }
            , pullMessages: (): void =>  {
                const dataOut_1937 = new DataInOut();
                dataOut_1937.writeByte(36);
                const argsNames_1939: string[] = [];
                const argsValues_1940: any[] = [];
                sCtx_1747.invokeRemoteMethodAfter("pullMessages", null, argsNames_1939, argsValues_1940);
                sCtx_1747.sendToRemote(dataOut_1937.toArray());
                
            }
            , requestWebRtcSession: (uid: UUID): ARFuture<WebRtcSession> =>  {
                const dataOut_1942 = new DataInOut();
                dataOut_1942.writeByte(40);
                const argsNames_1944: string[] = ["uid"];
                const argsValues_1945: any[] = [uid];
                const result_1943 = ARFuture.of<WebRtcSession>();
                sCtx_1747.invokeRemoteMethodAfter("requestWebRtcSession", result_1943, argsNames_1944, argsValues_1945);
                const reqId_1941 = sCtx_1747.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1943 as ARFuture<WebRtcSession>).tryDone(WebRtcSession.META.deserialize(sCtx_1747, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1943.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1942.writeInt(reqId_1941);
                FastMeta.META_UUID.serialize(sCtx_1747, uid, dataOut_1942);
                sCtx_1747.sendToRemote(dataOut_1942.toArray());
                return result_1943;
                
            }
            , publishWebRtcSession: (session: WebRtcSession): void =>  {
                const dataOut_1947 = new DataInOut();
                dataOut_1947.writeByte(41);
                const argsNames_1949: string[] = ["session"];
                const argsValues_1950: any[] = [session];
                sCtx_1747.invokeRemoteMethodAfter("publishWebRtcSession", null, argsNames_1949, argsValues_1950);
                WebRtcSession.META.serialize(sCtx_1747, session, dataOut_1947);
                sCtx_1747.sendToRemote(dataOut_1947.toArray());
                
            }
            , selfDestruct: (): AFuture =>  {
                const dataOut_1952 = new DataInOut();
                dataOut_1952.writeByte(42);
                const argsNames_1954: string[] = [];
                const argsValues_1955: any[] = [];
                const result_1953 = AFuture.make();
                sCtx_1747.invokeRemoteMethodAfter("selfDestruct", result_1953, argsNames_1954, argsValues_1955);
                const reqId_1951 = sCtx_1747.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1953 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1953.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1952.writeInt(reqId_1951);
                sCtx_1747.sendToRemote(dataOut_1952.toArray());
                return result_1953;
                
            }
            , openClient(uid: UUID, factory: (api: ServerApiByUidRemote) => any, converter: BytesConverter, ...keys: any[]): ServerApiByUidRemote  {
                return sCtx_1747.findContext(ctx =>  {
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
            case 42: // selfDestruct
            return true;
            default: return false;
            
        }
        
    }
    
}
export class LoginApiGetTimeUTCArgumentsMetaBodyImpl implements FastMetaType<LoginApiGetTimeUTCArguments>  {
    serialize(sCtx_1956: MetaContext, obj_1958: LoginApiGetTimeUTCArguments, _out_1959: DataOut): void  {
        
    }
    deserialize(sCtx_1957: MetaContext, in__1960: DataIn): LoginApiGetTimeUTCArguments  {
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
    serialize(sCtx_1961: MetaContext, obj_1962: LoginApiLoginByUIDArguments, _out_1963: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1961, obj_1962.uid, _out_1963);
        LoginStream.META.serialize(sCtx_1961, obj_1962.data, _out_1963);
        
    }
    deserialize(sCtx_1961: MetaContext, in__1964: DataIn): LoginApiLoginByUIDArguments  {
        try  {
            let uid_1965: UUID;
            let data_1966: LoginStream;
            uid_1965 = FastMeta.META_UUID.deserialize(sCtx_1961, in__1964);
            data_1966 = LoginStream.META.deserialize(sCtx_1961, in__1964);
            return new LoginApiLoginByUIDArguments(uid_1965, data_1966);
            
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
    serialize(sCtx_1967: MetaContext, obj_1968: LoginApiLoginByAliasArguments, _out_1969: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1967, obj_1968.alias, _out_1969);
        LoginStream.META.serialize(sCtx_1967, obj_1968.data, _out_1969);
        
    }
    deserialize(sCtx_1967: MetaContext, in__1970: DataIn): LoginApiLoginByAliasArguments  {
        try  {
            let alias_1971: UUID;
            let data_1972: LoginStream;
            alias_1971 = FastMeta.META_UUID.deserialize(sCtx_1967, in__1970);
            data_1972 = LoginStream.META.deserialize(sCtx_1967, in__1970);
            return new LoginApiLoginByAliasArguments(alias_1971, data_1972);
            
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
    serialize(sCtx_1973: MetaContext, obj_1975: LoginApiGetMyIpArguments, _out_1976: DataOut): void  {
        
    }
    deserialize(sCtx_1974: MetaContext, in__1977: DataIn): LoginApiGetMyIpArguments  {
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
                    const reqId_1978 = dataIn.readInt();
                    const argsObject_1979 = new LoginApiGetTimeUTCArguments();
                    const argsNames_1980: string[] = [];
                    const argsValues_1981: any[] = [];
                    ctx.invokeLocalMethodBefore("getTimeUTC", argsNames_1980, argsValues_1981);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getTimeUTCArguments === "function" ? (localApi as any).getTimeUTCArguments(argsObject_1979) : localApi.getTimeUTC());
                    ctx.invokeLocalMethodAfter("getTimeUTC", resultFuture, argsNames_1980, argsValues_1981);
                    resultFuture.to((v_1983: bigint) =>  {
                        const data_1982 = new DataInOut();
                        data_1982.writeLong(v_1983);
                        ctx.sendResultToRemote(reqId_1978, data_1982.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let uid_1985: UUID;
                    let data_1986: LoginStream;
                    uid_1985 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_1986 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsObject_1987 = new LoginApiLoginByUIDArguments(uid_1985, data_1986);
                    const argsNames_1988: string[] = ["uid", "data"];
                    const argsValues_1989: any[] = [uid_1985, data_1986];
                    ctx.invokeLocalMethodBefore("loginByUID", argsNames_1988, argsValues_1989);
                    (typeof (localApi as any).loginByUIDArguments === "function" ? (localApi as any).loginByUIDArguments(argsObject_1987) : localApi.loginByUID(uid_1985, data_1986));
                    ctx.invokeLocalMethodAfter("loginByUID", null, argsNames_1988, argsValues_1989);
                    break;
                    
                }
                case 5:  {
                    let alias_1991: UUID;
                    let data_1992: LoginStream;
                    alias_1991 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_1992 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsObject_1993 = new LoginApiLoginByAliasArguments(alias_1991, data_1992);
                    const argsNames_1994: string[] = ["alias", "data"];
                    const argsValues_1995: any[] = [alias_1991, data_1992];
                    ctx.invokeLocalMethodBefore("loginByAlias", argsNames_1994, argsValues_1995);
                    (typeof (localApi as any).loginByAliasArguments === "function" ? (localApi as any).loginByAliasArguments(argsObject_1993) : localApi.loginByAlias(alias_1991, data_1992));
                    ctx.invokeLocalMethodAfter("loginByAlias", null, argsNames_1994, argsValues_1995);
                    break;
                    
                }
                case 6:  {
                    const reqId_1996 = dataIn.readInt();
                    const argsObject_1997 = new LoginApiGetMyIpArguments();
                    const argsNames_1998: string[] = [];
                    const argsValues_1999: any[] = [];
                    ctx.invokeLocalMethodBefore("getMyIp", argsNames_1998, argsValues_1999);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getMyIpArguments === "function" ? (localApi as any).getMyIpArguments(argsObject_1997) : localApi.getMyIp());
                    ctx.invokeLocalMethodAfter("getMyIp", resultFuture, argsNames_1998, argsValues_1999);
                    resultFuture.to((v_2001: IpInfo) =>  {
                        const data_2000 = new DataInOut();
                        IpInfo.META.serialize(ctx, v_2001, data_2000);
                        ctx.sendResultToRemote(reqId_1996, data_2000.toArray());
                        
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
    makeRemote(sCtx_2002: MetaContext): LoginApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2002.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2002.flush();
                
            }
            , getFastMetaContext: () => sCtx_2002, getTimeUTC: (): ARFuture<bigint> =>  {
                const dataOut_2004 = new DataInOut();
                dataOut_2004.writeByte(3);
                const argsNames_2006: string[] = [];
                const argsValues_2007: any[] = [];
                const result_2005 = ARFuture.of<bigint>();
                sCtx_2002.invokeRemoteMethodAfter("getTimeUTC", result_2005, argsNames_2006, argsValues_2007);
                const reqId_2003 = sCtx_2002.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2005 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_2002, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2005.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2004.writeInt(reqId_2003);
                sCtx_2002.sendToRemote(dataOut_2004.toArray());
                return result_2005;
                
            }
            , loginByUID: (uid: UUID, data: LoginStream): void =>  {
                const dataOut_2009 = new DataInOut();
                dataOut_2009.writeByte(4);
                const argsNames_2011: string[] = ["uid", "data"];
                const argsValues_2012: any[] = [uid, data];
                sCtx_2002.invokeRemoteMethodAfter("loginByUID", null, argsNames_2011, argsValues_2012);
                FastMeta.META_UUID.serialize(sCtx_2002, uid, dataOut_2009);
                LoginStream.META.serialize(sCtx_2002, data, dataOut_2009);
                sCtx_2002.sendToRemote(dataOut_2009.toArray());
                
            }
            , loginByAlias: (alias: UUID, data: LoginStream): void =>  {
                const dataOut_2014 = new DataInOut();
                dataOut_2014.writeByte(5);
                const argsNames_2016: string[] = ["alias", "data"];
                const argsValues_2017: any[] = [alias, data];
                sCtx_2002.invokeRemoteMethodAfter("loginByAlias", null, argsNames_2016, argsValues_2017);
                FastMeta.META_UUID.serialize(sCtx_2002, alias, dataOut_2014);
                LoginStream.META.serialize(sCtx_2002, data, dataOut_2014);
                sCtx_2002.sendToRemote(dataOut_2014.toArray());
                
            }
            , getMyIp: (): ARFuture<IpInfo> =>  {
                const dataOut_2019 = new DataInOut();
                dataOut_2019.writeByte(6);
                const argsNames_2021: string[] = [];
                const argsValues_2022: any[] = [];
                const result_2020 = ARFuture.of<IpInfo>();
                sCtx_2002.invokeRemoteMethodAfter("getMyIp", result_2020, argsNames_2021, argsValues_2022);
                const reqId_2018 = sCtx_2002.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2020 as ARFuture<IpInfo>).tryDone(IpInfo.META.deserialize(sCtx_2002, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2020.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2019.writeInt(reqId_2018);
                sCtx_2002.sendToRemote(dataOut_2019.toArray());
                return result_2020;
                
            }
            , openLoginByUID(uid: UUID, factory: (api: AuthorizedApiRemote) => ClientApiSafe, converter: BytesConverter, ...keys: any[]): AuthorizedApiRemote  {
                return sCtx_2002.findContext(ctx =>  {
                    ctx.onFlushData(data => this.loginByUID(uid, LoginStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((AuthorizedApi as any).META));
                    
                }
                , ...keys).makeRemote((AuthorizedApi as any).META) as AuthorizedApiRemote;
                
            }
            , openLoginByAlias(alias: UUID, factory: (api: AuthorizedApiRemote) => ClientApiSafe, converter: BytesConverter, ...keys: any[]): AuthorizedApiRemote  {
                return sCtx_2002.findContext(ctx =>  {
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
    makeRemote(sCtx_2023: MetaContext): ServerApiByUidClientRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2023.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2023.flush();
                
            }
            , getFastMetaContext: () => sCtx_2023, 
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
    serialize(sCtx_2024: MetaContext, obj_2026: ServerApiByUidGetBalanceArguments, _out_2027: DataOut): void  {
        
    }
    deserialize(sCtx_2025: MetaContext, in__2028: DataIn): ServerApiByUidGetBalanceArguments  {
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
    serialize(sCtx_2029: MetaContext, obj_2030: ServerApiByUidSetParentArguments, _out_2031: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2029, obj_2030.uid, _out_2031);
        
    }
    deserialize(sCtx_2029: MetaContext, in__2032: DataIn): ServerApiByUidSetParentArguments  {
        try  {
            let uid_2033: UUID;
            uid_2033 = FastMeta.META_UUID.deserialize(sCtx_2029, in__2032);
            return new ServerApiByUidSetParentArguments(uid_2033);
            
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
    serialize(sCtx_2034: MetaContext, obj_2036: ServerApiByUidBlockArguments, _out_2037: DataOut): void  {
        
    }
    deserialize(sCtx_2035: MetaContext, in__2038: DataIn): ServerApiByUidBlockArguments  {
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
    serialize(sCtx_2039: MetaContext, obj_2041: ServerApiByUidGetPositionArguments, _out_2042: DataOut): void  {
        
    }
    deserialize(sCtx_2040: MetaContext, in__2043: DataIn): ServerApiByUidGetPositionArguments  {
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
    serialize(sCtx_2044: MetaContext, obj_2046: ServerApiByUidGetParentArguments, _out_2047: DataOut): void  {
        
    }
    deserialize(sCtx_2045: MetaContext, in__2048: DataIn): ServerApiByUidGetParentArguments  {
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
    serialize(sCtx_2049: MetaContext, obj_2051: ServerApiByUidGetBeneficiaryArguments, _out_2052: DataOut): void  {
        
    }
    deserialize(sCtx_2050: MetaContext, in__2053: DataIn): ServerApiByUidGetBeneficiaryArguments  {
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
    serialize(sCtx_2054: MetaContext, obj_2055: ServerApiByUidSetBeneficiaryArguments, _out_2056: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2054, obj_2055.uid, _out_2056);
        
    }
    deserialize(sCtx_2054: MetaContext, in__2057: DataIn): ServerApiByUidSetBeneficiaryArguments  {
        try  {
            let uid_2058: UUID;
            uid_2058 = FastMeta.META_UUID.deserialize(sCtx_2054, in__2057);
            return new ServerApiByUidSetBeneficiaryArguments(uid_2058);
            
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
    serialize(sCtx_2059: MetaContext, obj_2061: ServerApiByUidGetBlockTimeArguments, _out_2062: DataOut): void  {
        
    }
    deserialize(sCtx_2060: MetaContext, in__2063: DataIn): ServerApiByUidGetBlockTimeArguments  {
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
    serialize(sCtx_2064: MetaContext, obj_2066: ServerApiByUidUnblockArguments, _out_2067: DataOut): void  {
        
    }
    deserialize(sCtx_2065: MetaContext, in__2068: DataIn): ServerApiByUidUnblockArguments  {
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
    serialize(sCtx_2069: MetaContext, obj_2071: ServerApiByUidCreateTimeArguments, _out_2072: DataOut): void  {
        
    }
    deserialize(sCtx_2070: MetaContext, in__2073: DataIn): ServerApiByUidCreateTimeArguments  {
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
    serialize(sCtx_2074: MetaContext, obj_2076: ServerApiByUidOnlineTimeArguments, _out_2077: DataOut): void  {
        
    }
    deserialize(sCtx_2075: MetaContext, in__2078: DataIn): ServerApiByUidOnlineTimeArguments  {
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
    serialize(sCtx_2079: MetaContext, obj_2080: ServerApiByUidAddAccessGroupArguments, _out_2081: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2079, obj_2080.groupId, _out_2081);
        
    }
    deserialize(sCtx_2079: MetaContext, in__2082: DataIn): ServerApiByUidAddAccessGroupArguments  {
        try  {
            let groupId_2083: UUID;
            groupId_2083 = FastMeta.META_UUID.deserialize(sCtx_2079, in__2082);
            return new ServerApiByUidAddAccessGroupArguments(groupId_2083);
            
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
    serialize(sCtx_2084: MetaContext, obj_2085: ServerApiByUidRemoveAccessGroupArguments, _out_2086: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2084, obj_2085.groupId, _out_2086);
        
    }
    deserialize(sCtx_2084: MetaContext, in__2087: DataIn): ServerApiByUidRemoveAccessGroupArguments  {
        try  {
            let groupId_2088: UUID;
            groupId_2088 = FastMeta.META_UUID.deserialize(sCtx_2084, in__2087);
            return new ServerApiByUidRemoveAccessGroupArguments(groupId_2088);
            
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
    serialize(sCtx_2089: MetaContext, obj_2090: ServerApiByUidSetMsgQueueLimitArguments, _out_2091: DataOut): void  {
        _out_2091.writeInt(obj_2090.limit);
        
    }
    deserialize(sCtx_2089: MetaContext, in__2092: DataIn): ServerApiByUidSetMsgQueueLimitArguments  {
        try  {
            let limit_2093: number;
            limit_2093 = in__2092.readInt();
            return new ServerApiByUidSetMsgQueueLimitArguments(limit_2093);
            
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
    serialize(sCtx_2094: MetaContext, obj_2095: ServerApiByUidSetMsgTimeLimitArguments, _out_2096: DataOut): void  {
        _out_2096.writeInt(obj_2095.seconds);
        
    }
    deserialize(sCtx_2094: MetaContext, in__2097: DataIn): ServerApiByUidSetMsgTimeLimitArguments  {
        try  {
            let seconds_2098: number;
            seconds_2098 = in__2097.readInt();
            return new ServerApiByUidSetMsgTimeLimitArguments(seconds_2098);
            
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
                    const reqId_2099 = dataIn.readInt();
                    const argsObject_2100 = new ServerApiByUidGetBalanceArguments();
                    const argsNames_2101: string[] = [];
                    const argsValues_2102: any[] = [];
                    ctx.invokeLocalMethodBefore("getBalance", argsNames_2101, argsValues_2102);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getBalanceArguments === "function" ? (localApi as any).getBalanceArguments(argsObject_2100) : localApi.getBalance());
                    ctx.invokeLocalMethodAfter("getBalance", resultFuture, argsNames_2101, argsValues_2102);
                    resultFuture.to((v_2104: bigint) =>  {
                        const data_2103 = new DataInOut();
                        data_2103.writeLong(v_2104);
                        ctx.sendResultToRemote(reqId_2099, data_2103.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    const reqId_2105 = dataIn.readInt();
                    let uid_2106: UUID;
                    uid_2106 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2107 = new ServerApiByUidSetParentArguments(uid_2106);
                    const argsNames_2108: string[] = ["uid"];
                    const argsValues_2109: any[] = [uid_2106];
                    ctx.invokeLocalMethodBefore("setParent", argsNames_2108, argsValues_2109);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).setParentArguments === "function" ? (localApi as any).setParentArguments(argsObject_2107) : localApi.setParent(uid_2106));
                    ctx.invokeLocalMethodAfter("setParent", resultFuture, argsNames_2108, argsValues_2109);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2105);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_2110 = dataIn.readInt();
                    const argsObject_2111 = new ServerApiByUidBlockArguments();
                    const argsNames_2112: string[] = [];
                    const argsValues_2113: any[] = [];
                    ctx.invokeLocalMethodBefore("block", argsNames_2112, argsValues_2113);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).blockArguments === "function" ? (localApi as any).blockArguments(argsObject_2111) : localApi.block());
                    ctx.invokeLocalMethodAfter("block", resultFuture, argsNames_2112, argsValues_2113);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2110);
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    const reqId_2114 = dataIn.readInt();
                    const argsObject_2115 = new ServerApiByUidGetPositionArguments();
                    const argsNames_2116: string[] = [];
                    const argsValues_2117: any[] = [];
                    ctx.invokeLocalMethodBefore("getPosition", argsNames_2116, argsValues_2117);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getPositionArguments === "function" ? (localApi as any).getPositionArguments(argsObject_2115) : localApi.getPosition());
                    ctx.invokeLocalMethodAfter("getPosition", resultFuture, argsNames_2116, argsValues_2117);
                    resultFuture.to((v_2119: CloudConfig) =>  {
                        const data_2118 = new DataInOut();
                        CloudConfig.META.serialize(ctx, v_2119, data_2118);
                        ctx.sendResultToRemote(reqId_2114, data_2118.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 7:  {
                    const reqId_2120 = dataIn.readInt();
                    const argsObject_2121 = new ServerApiByUidGetParentArguments();
                    const argsNames_2122: string[] = [];
                    const argsValues_2123: any[] = [];
                    ctx.invokeLocalMethodBefore("getParent", argsNames_2122, argsValues_2123);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getParentArguments === "function" ? (localApi as any).getParentArguments(argsObject_2121) : localApi.getParent());
                    ctx.invokeLocalMethodAfter("getParent", resultFuture, argsNames_2122, argsValues_2123);
                    resultFuture.to((v_2125: UUID) =>  {
                        const data_2124 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_2125, data_2124);
                        ctx.sendResultToRemote(reqId_2120, data_2124.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 8:  {
                    const reqId_2126 = dataIn.readInt();
                    const argsObject_2127 = new ServerApiByUidGetBeneficiaryArguments();
                    const argsNames_2128: string[] = [];
                    const argsValues_2129: any[] = [];
                    ctx.invokeLocalMethodBefore("getBeneficiary", argsNames_2128, argsValues_2129);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getBeneficiaryArguments === "function" ? (localApi as any).getBeneficiaryArguments(argsObject_2127) : localApi.getBeneficiary());
                    ctx.invokeLocalMethodAfter("getBeneficiary", resultFuture, argsNames_2128, argsValues_2129);
                    resultFuture.to((v_2131: UUID) =>  {
                        const data_2130 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_2131, data_2130);
                        ctx.sendResultToRemote(reqId_2126, data_2130.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_2132 = dataIn.readInt();
                    let uid_2133: UUID;
                    uid_2133 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2134 = new ServerApiByUidSetBeneficiaryArguments(uid_2133);
                    const argsNames_2135: string[] = ["uid"];
                    const argsValues_2136: any[] = [uid_2133];
                    ctx.invokeLocalMethodBefore("setBeneficiary", argsNames_2135, argsValues_2136);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).setBeneficiaryArguments === "function" ? (localApi as any).setBeneficiaryArguments(argsObject_2134) : localApi.setBeneficiary(uid_2133));
                    ctx.invokeLocalMethodAfter("setBeneficiary", resultFuture, argsNames_2135, argsValues_2136);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2132);
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_2137 = dataIn.readInt();
                    const argsObject_2138 = new ServerApiByUidGetBlockTimeArguments();
                    const argsNames_2139: string[] = [];
                    const argsValues_2140: any[] = [];
                    ctx.invokeLocalMethodBefore("getBlockTime", argsNames_2139, argsValues_2140);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getBlockTimeArguments === "function" ? (localApi as any).getBlockTimeArguments(argsObject_2138) : localApi.getBlockTime());
                    ctx.invokeLocalMethodAfter("getBlockTime", resultFuture, argsNames_2139, argsValues_2140);
                    resultFuture.to((v_2142: Date) =>  {
                        const data_2141 = new DataInOut();
                        data_2141.writeLong(v_2142.getTime());
                        ctx.sendResultToRemote(reqId_2137, data_2141.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_2143 = dataIn.readInt();
                    const argsObject_2144 = new ServerApiByUidUnblockArguments();
                    const argsNames_2145: string[] = [];
                    const argsValues_2146: any[] = [];
                    ctx.invokeLocalMethodBefore("unblock", argsNames_2145, argsValues_2146);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).unblockArguments === "function" ? (localApi as any).unblockArguments(argsObject_2144) : localApi.unblock());
                    ctx.invokeLocalMethodAfter("unblock", resultFuture, argsNames_2145, argsValues_2146);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2143);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    const reqId_2147 = dataIn.readInt();
                    const argsObject_2148 = new ServerApiByUidCreateTimeArguments();
                    const argsNames_2149: string[] = [];
                    const argsValues_2150: any[] = [];
                    ctx.invokeLocalMethodBefore("createTime", argsNames_2149, argsValues_2150);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).createTimeArguments === "function" ? (localApi as any).createTimeArguments(argsObject_2148) : localApi.createTime());
                    ctx.invokeLocalMethodAfter("createTime", resultFuture, argsNames_2149, argsValues_2150);
                    resultFuture.to((v_2152: Date) =>  {
                        const data_2151 = new DataInOut();
                        data_2151.writeLong(v_2152.getTime());
                        ctx.sendResultToRemote(reqId_2147, data_2151.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 13:  {
                    const reqId_2153 = dataIn.readInt();
                    const argsObject_2154 = new ServerApiByUidOnlineTimeArguments();
                    const argsNames_2155: string[] = [];
                    const argsValues_2156: any[] = [];
                    ctx.invokeLocalMethodBefore("onlineTime", argsNames_2155, argsValues_2156);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).onlineTimeArguments === "function" ? (localApi as any).onlineTimeArguments(argsObject_2154) : localApi.onlineTime());
                    ctx.invokeLocalMethodAfter("onlineTime", resultFuture, argsNames_2155, argsValues_2156);
                    resultFuture.to((v_2158: Date) =>  {
                        const data_2157 = new DataInOut();
                        data_2157.writeLong(v_2158.getTime());
                        ctx.sendResultToRemote(reqId_2153, data_2157.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 14:  {
                    const reqId_2159 = dataIn.readInt();
                    let groupId_2160: UUID;
                    groupId_2160 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2161 = new ServerApiByUidAddAccessGroupArguments(groupId_2160);
                    const argsNames_2162: string[] = ["groupId"];
                    const argsValues_2163: any[] = [groupId_2160];
                    ctx.invokeLocalMethodBefore("addAccessGroup", argsNames_2162, argsValues_2163);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).addAccessGroupArguments === "function" ? (localApi as any).addAccessGroupArguments(argsObject_2161) : localApi.addAccessGroup(groupId_2160));
                    ctx.invokeLocalMethodAfter("addAccessGroup", resultFuture, argsNames_2162, argsValues_2163);
                    resultFuture.to((v_2165: boolean) =>  {
                        const data_2164 = new DataInOut();
                        data_2164.writeBoolean(v_2165);
                        ctx.sendResultToRemote(reqId_2159, data_2164.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_2166 = dataIn.readInt();
                    let groupId_2167: UUID;
                    groupId_2167 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2168 = new ServerApiByUidRemoveAccessGroupArguments(groupId_2167);
                    const argsNames_2169: string[] = ["groupId"];
                    const argsValues_2170: any[] = [groupId_2167];
                    ctx.invokeLocalMethodBefore("removeAccessGroup", argsNames_2169, argsValues_2170);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).removeAccessGroupArguments === "function" ? (localApi as any).removeAccessGroupArguments(argsObject_2168) : localApi.removeAccessGroup(groupId_2167));
                    ctx.invokeLocalMethodAfter("removeAccessGroup", resultFuture, argsNames_2169, argsValues_2170);
                    resultFuture.to((v_2172: boolean) =>  {
                        const data_2171 = new DataInOut();
                        data_2171.writeBoolean(v_2172);
                        ctx.sendResultToRemote(reqId_2166, data_2171.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 16:  {
                    const reqId_2173 = dataIn.readInt();
                    let limit_2174: number;
                    limit_2174 = dataIn.readInt();
                    const argsObject_2175 = new ServerApiByUidSetMsgQueueLimitArguments(limit_2174);
                    const argsNames_2176: string[] = ["limit"];
                    const argsValues_2177: any[] = [limit_2174];
                    ctx.invokeLocalMethodBefore("setMsgQueueLimit", argsNames_2176, argsValues_2177);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).setMsgQueueLimitArguments === "function" ? (localApi as any).setMsgQueueLimitArguments(argsObject_2175) : localApi.setMsgQueueLimit(limit_2174));
                    ctx.invokeLocalMethodAfter("setMsgQueueLimit", resultFuture, argsNames_2176, argsValues_2177);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2173);
                        
                    }
                    );
                    break;
                    
                }
                case 17:  {
                    const reqId_2178 = dataIn.readInt();
                    let seconds_2179: number;
                    seconds_2179 = dataIn.readInt();
                    const argsObject_2180 = new ServerApiByUidSetMsgTimeLimitArguments(seconds_2179);
                    const argsNames_2181: string[] = ["seconds"];
                    const argsValues_2182: any[] = [seconds_2179];
                    ctx.invokeLocalMethodBefore("setMsgTimeLimit", argsNames_2181, argsValues_2182);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).setMsgTimeLimitArguments === "function" ? (localApi as any).setMsgTimeLimitArguments(argsObject_2180) : localApi.setMsgTimeLimit(seconds_2179));
                    ctx.invokeLocalMethodAfter("setMsgTimeLimit", resultFuture, argsNames_2181, argsValues_2182);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2178);
                        
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
    makeRemote(sCtx_2183: MetaContext): ServerApiByUidRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2183.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2183.flush();
                
            }
            , getFastMetaContext: () => sCtx_2183, getBalance: (): ARFuture<bigint> =>  {
                const dataOut_2185 = new DataInOut();
                dataOut_2185.writeByte(3);
                const argsNames_2187: string[] = [];
                const argsValues_2188: any[] = [];
                const result_2186 = ARFuture.of<bigint>();
                sCtx_2183.invokeRemoteMethodAfter("getBalance", result_2186, argsNames_2187, argsValues_2188);
                const reqId_2184 = sCtx_2183.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2186 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_2183, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2186.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2185.writeInt(reqId_2184);
                sCtx_2183.sendToRemote(dataOut_2185.toArray());
                return result_2186;
                
            }
            , setParent: (uid: UUID): AFuture =>  {
                const dataOut_2190 = new DataInOut();
                dataOut_2190.writeByte(4);
                const argsNames_2192: string[] = ["uid"];
                const argsValues_2193: any[] = [uid];
                const result_2191 = AFuture.make();
                sCtx_2183.invokeRemoteMethodAfter("setParent", result_2191, argsNames_2192, argsValues_2193);
                const reqId_2189 = sCtx_2183.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2191 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2191.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2190.writeInt(reqId_2189);
                FastMeta.META_UUID.serialize(sCtx_2183, uid, dataOut_2190);
                sCtx_2183.sendToRemote(dataOut_2190.toArray());
                return result_2191;
                
            }
            , block: (): AFuture =>  {
                const dataOut_2195 = new DataInOut();
                dataOut_2195.writeByte(5);
                const argsNames_2197: string[] = [];
                const argsValues_2198: any[] = [];
                const result_2196 = AFuture.make();
                sCtx_2183.invokeRemoteMethodAfter("block", result_2196, argsNames_2197, argsValues_2198);
                const reqId_2194 = sCtx_2183.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2196 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2196.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2195.writeInt(reqId_2194);
                sCtx_2183.sendToRemote(dataOut_2195.toArray());
                return result_2196;
                
            }
            , getPosition: (): ARFuture<CloudConfig> =>  {
                const dataOut_2200 = new DataInOut();
                dataOut_2200.writeByte(6);
                const argsNames_2202: string[] = [];
                const argsValues_2203: any[] = [];
                const result_2201 = ARFuture.of<CloudConfig>();
                sCtx_2183.invokeRemoteMethodAfter("getPosition", result_2201, argsNames_2202, argsValues_2203);
                const reqId_2199 = sCtx_2183.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2201 as ARFuture<CloudConfig>).tryDone(CloudConfig.META.deserialize(sCtx_2183, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2201.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2200.writeInt(reqId_2199);
                sCtx_2183.sendToRemote(dataOut_2200.toArray());
                return result_2201;
                
            }
            , getParent: (): ARFuture<UUID> =>  {
                const dataOut_2205 = new DataInOut();
                dataOut_2205.writeByte(7);
                const argsNames_2207: string[] = [];
                const argsValues_2208: any[] = [];
                const result_2206 = ARFuture.of<UUID>();
                sCtx_2183.invokeRemoteMethodAfter("getParent", result_2206, argsNames_2207, argsValues_2208);
                const reqId_2204 = sCtx_2183.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2206 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_2183, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2206.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2205.writeInt(reqId_2204);
                sCtx_2183.sendToRemote(dataOut_2205.toArray());
                return result_2206;
                
            }
            , getBeneficiary: (): ARFuture<UUID> =>  {
                const dataOut_2210 = new DataInOut();
                dataOut_2210.writeByte(8);
                const argsNames_2212: string[] = [];
                const argsValues_2213: any[] = [];
                const result_2211 = ARFuture.of<UUID>();
                sCtx_2183.invokeRemoteMethodAfter("getBeneficiary", result_2211, argsNames_2212, argsValues_2213);
                const reqId_2209 = sCtx_2183.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2211 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_2183, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2211.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2210.writeInt(reqId_2209);
                sCtx_2183.sendToRemote(dataOut_2210.toArray());
                return result_2211;
                
            }
            , setBeneficiary: (uid: UUID): AFuture =>  {
                const dataOut_2215 = new DataInOut();
                dataOut_2215.writeByte(9);
                const argsNames_2217: string[] = ["uid"];
                const argsValues_2218: any[] = [uid];
                const result_2216 = AFuture.make();
                sCtx_2183.invokeRemoteMethodAfter("setBeneficiary", result_2216, argsNames_2217, argsValues_2218);
                const reqId_2214 = sCtx_2183.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2216 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2216.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2215.writeInt(reqId_2214);
                FastMeta.META_UUID.serialize(sCtx_2183, uid, dataOut_2215);
                sCtx_2183.sendToRemote(dataOut_2215.toArray());
                return result_2216;
                
            }
            , getBlockTime: (): ARFuture<Date> =>  {
                const dataOut_2220 = new DataInOut();
                dataOut_2220.writeByte(10);
                const argsNames_2222: string[] = [];
                const argsValues_2223: any[] = [];
                const result_2221 = ARFuture.of<Date>();
                sCtx_2183.invokeRemoteMethodAfter("getBlockTime", result_2221, argsNames_2222, argsValues_2223);
                const reqId_2219 = sCtx_2183.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2221 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_2183, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2221.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2220.writeInt(reqId_2219);
                sCtx_2183.sendToRemote(dataOut_2220.toArray());
                return result_2221;
                
            }
            , unblock: (): AFuture =>  {
                const dataOut_2225 = new DataInOut();
                dataOut_2225.writeByte(11);
                const argsNames_2227: string[] = [];
                const argsValues_2228: any[] = [];
                const result_2226 = AFuture.make();
                sCtx_2183.invokeRemoteMethodAfter("unblock", result_2226, argsNames_2227, argsValues_2228);
                const reqId_2224 = sCtx_2183.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2226 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2226.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2225.writeInt(reqId_2224);
                sCtx_2183.sendToRemote(dataOut_2225.toArray());
                return result_2226;
                
            }
            , createTime: (): ARFuture<Date> =>  {
                const dataOut_2230 = new DataInOut();
                dataOut_2230.writeByte(12);
                const argsNames_2232: string[] = [];
                const argsValues_2233: any[] = [];
                const result_2231 = ARFuture.of<Date>();
                sCtx_2183.invokeRemoteMethodAfter("createTime", result_2231, argsNames_2232, argsValues_2233);
                const reqId_2229 = sCtx_2183.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2231 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_2183, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2231.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2230.writeInt(reqId_2229);
                sCtx_2183.sendToRemote(dataOut_2230.toArray());
                return result_2231;
                
            }
            , onlineTime: (): ARFuture<Date> =>  {
                const dataOut_2235 = new DataInOut();
                dataOut_2235.writeByte(13);
                const argsNames_2237: string[] = [];
                const argsValues_2238: any[] = [];
                const result_2236 = ARFuture.of<Date>();
                sCtx_2183.invokeRemoteMethodAfter("onlineTime", result_2236, argsNames_2237, argsValues_2238);
                const reqId_2234 = sCtx_2183.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2236 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_2183, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2236.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2235.writeInt(reqId_2234);
                sCtx_2183.sendToRemote(dataOut_2235.toArray());
                return result_2236;
                
            }
            , addAccessGroup: (groupId: UUID): ARFuture<boolean> =>  {
                const dataOut_2240 = new DataInOut();
                dataOut_2240.writeByte(14);
                const argsNames_2242: string[] = ["groupId"];
                const argsValues_2243: any[] = [groupId];
                const result_2241 = ARFuture.of<boolean>();
                sCtx_2183.invokeRemoteMethodAfter("addAccessGroup", result_2241, argsNames_2242, argsValues_2243);
                const reqId_2239 = sCtx_2183.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2241 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_2183, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2241.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2240.writeInt(reqId_2239);
                FastMeta.META_UUID.serialize(sCtx_2183, groupId, dataOut_2240);
                sCtx_2183.sendToRemote(dataOut_2240.toArray());
                return result_2241;
                
            }
            , removeAccessGroup: (groupId: UUID): ARFuture<boolean> =>  {
                const dataOut_2245 = new DataInOut();
                dataOut_2245.writeByte(15);
                const argsNames_2247: string[] = ["groupId"];
                const argsValues_2248: any[] = [groupId];
                const result_2246 = ARFuture.of<boolean>();
                sCtx_2183.invokeRemoteMethodAfter("removeAccessGroup", result_2246, argsNames_2247, argsValues_2248);
                const reqId_2244 = sCtx_2183.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2246 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_2183, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2246.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2245.writeInt(reqId_2244);
                FastMeta.META_UUID.serialize(sCtx_2183, groupId, dataOut_2245);
                sCtx_2183.sendToRemote(dataOut_2245.toArray());
                return result_2246;
                
            }
            , setMsgQueueLimit: (limit: number): AFuture =>  {
                const dataOut_2250 = new DataInOut();
                dataOut_2250.writeByte(16);
                const argsNames_2252: string[] = ["limit"];
                const argsValues_2253: any[] = [limit];
                const result_2251 = AFuture.make();
                sCtx_2183.invokeRemoteMethodAfter("setMsgQueueLimit", result_2251, argsNames_2252, argsValues_2253);
                const reqId_2249 = sCtx_2183.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2251 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2251.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2250.writeInt(reqId_2249);
                dataOut_2250.writeInt(limit);
                sCtx_2183.sendToRemote(dataOut_2250.toArray());
                return result_2251;
                
            }
            , setMsgTimeLimit: (seconds: number): AFuture =>  {
                const dataOut_2255 = new DataInOut();
                dataOut_2255.writeByte(17);
                const argsNames_2257: string[] = ["seconds"];
                const argsValues_2258: any[] = [seconds];
                const result_2256 = AFuture.make();
                sCtx_2183.invokeRemoteMethodAfter("setMsgTimeLimit", result_2256, argsNames_2257, argsValues_2258);
                const reqId_2254 = sCtx_2183.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2256 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2256.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2255.writeInt(reqId_2254);
                dataOut_2255.writeInt(seconds);
                sCtx_2183.sendToRemote(dataOut_2255.toArray());
                return result_2256;
                
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
export class ClientApiRegUnsafeEnterArgumentsMetaBodyImpl implements FastMetaType<ClientApiRegUnsafeEnterArguments>  {
    serialize(sCtx_2259: MetaContext, obj_2260: ClientApiRegUnsafeEnterArguments, _out_2261: DataOut): void  {
        ClientApiRegSafeStream.META.serialize(sCtx_2259, obj_2260.stream, _out_2261);
        
    }
    deserialize(sCtx_2259: MetaContext, in__2262: DataIn): ClientApiRegUnsafeEnterArguments  {
        try  {
            let stream_2263: ClientApiRegSafeStream;
            stream_2263 = ClientApiRegSafeStream.META.deserialize(sCtx_2259, in__2262);
            return new ClientApiRegUnsafeEnterArguments(stream_2263);
            
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
    serialize(sCtx_2264: MetaContext, obj_2265: ClientApiRegUnsafeEnterGlobalArguments, _out_2266: DataOut): void  {
        GlobalRegClientApiStream.META.serialize(sCtx_2264, obj_2265.stream, _out_2266);
        
    }
    deserialize(sCtx_2264: MetaContext, in__2267: DataIn): ClientApiRegUnsafeEnterGlobalArguments  {
        try  {
            let stream_2268: GlobalRegClientApiStream;
            stream_2268 = GlobalRegClientApiStream.META.deserialize(sCtx_2264, in__2267);
            return new ClientApiRegUnsafeEnterGlobalArguments(stream_2268);
            
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
                    let stream_2270: ClientApiRegSafeStream;
                    stream_2270 = ClientApiRegSafeStream.META.deserialize(ctx, dataIn);
                    const argsObject_2271 = new ClientApiRegUnsafeEnterArguments(stream_2270);
                    const argsNames_2272: string[] = ["stream"];
                    const argsValues_2273: any[] = [stream_2270];
                    ctx.invokeLocalMethodBefore("enter", argsNames_2272, argsValues_2273);
                    (typeof (localApi as any).enterArguments === "function" ? (localApi as any).enterArguments(argsObject_2271) : localApi.enter(stream_2270));
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_2272, argsValues_2273);
                    break;
                    
                }
                case 4:  {
                    let stream_2275: GlobalRegClientApiStream;
                    stream_2275 = GlobalRegClientApiStream.META.deserialize(ctx, dataIn);
                    const argsObject_2276 = new ClientApiRegUnsafeEnterGlobalArguments(stream_2275);
                    const argsNames_2277: string[] = ["stream"];
                    const argsValues_2278: any[] = [stream_2275];
                    ctx.invokeLocalMethodBefore("enterGlobal", argsNames_2277, argsValues_2278);
                    (typeof (localApi as any).enterGlobalArguments === "function" ? (localApi as any).enterGlobalArguments(argsObject_2276) : localApi.enterGlobal(stream_2275));
                    ctx.invokeLocalMethodAfter("enterGlobal", null, argsNames_2277, argsValues_2278);
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
    makeRemote(sCtx_2279: MetaContext): ClientApiRegUnsafeRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2279.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2279.flush();
                
            }
            , getFastMetaContext: () => sCtx_2279, enter: (stream: ClientApiRegSafeStream): void =>  {
                const dataOut_2281 = new DataInOut();
                dataOut_2281.writeByte(3);
                const argsNames_2283: string[] = ["stream"];
                const argsValues_2284: any[] = [stream];
                sCtx_2279.invokeRemoteMethodAfter("enter", null, argsNames_2283, argsValues_2284);
                ClientApiRegSafeStream.META.serialize(sCtx_2279, stream, dataOut_2281);
                sCtx_2279.sendToRemote(dataOut_2281.toArray());
                
            }
            , enterGlobal: (stream: GlobalRegClientApiStream): void =>  {
                const dataOut_2286 = new DataInOut();
                dataOut_2286.writeByte(4);
                const argsNames_2288: string[] = ["stream"];
                const argsValues_2289: any[] = [stream];
                sCtx_2279.invokeRemoteMethodAfter("enterGlobal", null, argsNames_2288, argsValues_2289);
                GlobalRegClientApiStream.META.serialize(sCtx_2279, stream, dataOut_2286);
                sCtx_2279.sendToRemote(dataOut_2286.toArray());
                
            }
            , openEnter(factory: (api: ClientApiRegSafeRemote) => any, converter: BytesConverter, ...keys: any[]): ClientApiRegSafeRemote  {
                return sCtx_2279.findContext(ctx =>  {
                    ctx.onFlushData(data => this.enter(ClientApiRegSafeStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((ClientApiRegSafe as any).META));
                    
                }
                , ...keys).makeRemote((ClientApiRegSafe as any).META) as ClientApiRegSafeRemote;
                
            }
            , openEnterGlobal(factory: (api: GlobalRegClientApiRemote) => any, converter: BytesConverter, ...keys: any[]): GlobalRegClientApiRemote  {
                return sCtx_2279.findContext(ctx =>  {
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
    serialize(sCtx_2290: MetaContext, obj_2291: GlobalRegServerApiSetMasterKeyArguments, _out_2292: DataOut): void  {
        Key.META.serialize(sCtx_2290, obj_2291.key, _out_2292);
        
    }
    deserialize(sCtx_2290: MetaContext, in__2293: DataIn): GlobalRegServerApiSetMasterKeyArguments  {
        try  {
            let _key_2294: Key;
            _key_2294 = Key.META.deserialize(sCtx_2290, in__2293);
            return new GlobalRegServerApiSetMasterKeyArguments(_key_2294);
            
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
    serialize(sCtx_2295: MetaContext, obj_2297: GlobalRegServerApiFinishArguments, _out_2298: DataOut): void  {
        
    }
    deserialize(sCtx_2296: MetaContext, in__2299: DataIn): GlobalRegServerApiFinishArguments  {
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
                    let _key_2301: Key;
                    _key_2301 = Key.META.deserialize(ctx, dataIn);
                    const argsObject_2302 = new GlobalRegServerApiSetMasterKeyArguments(_key_2301);
                    const argsNames_2303: string[] = ["key"];
                    const argsValues_2304: any[] = [_key_2301];
                    ctx.invokeLocalMethodBefore("setMasterKey", argsNames_2303, argsValues_2304);
                    (typeof (localApi as any).setMasterKeyArguments === "function" ? (localApi as any).setMasterKeyArguments(argsObject_2302) : localApi.setMasterKey(_key_2301));
                    ctx.invokeLocalMethodAfter("setMasterKey", null, argsNames_2303, argsValues_2304);
                    break;
                    
                }
                case 4:  {
                    const reqId_2305 = dataIn.readInt();
                    const argsObject_2306 = new GlobalRegServerApiFinishArguments();
                    const argsNames_2307: string[] = [];
                    const argsValues_2308: any[] = [];
                    ctx.invokeLocalMethodBefore("finish", argsNames_2307, argsValues_2308);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).finishArguments === "function" ? (localApi as any).finishArguments(argsObject_2306) : localApi.finish());
                    ctx.invokeLocalMethodAfter("finish", resultFuture, argsNames_2307, argsValues_2308);
                    resultFuture.to((v_2310: FinishResultGlobalRegServerApi) =>  {
                        const data_2309 = new DataInOut();
                        FinishResultGlobalRegServerApi.META.serialize(ctx, v_2310, data_2309);
                        ctx.sendResultToRemote(reqId_2305, data_2309.toArray());
                        
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
    makeRemote(sCtx_2311: MetaContext): GlobalRegServerApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2311.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2311.flush();
                
            }
            , getFastMetaContext: () => sCtx_2311, setMasterKey: (key: Key): void =>  {
                const dataOut_2313 = new DataInOut();
                dataOut_2313.writeByte(3);
                const argsNames_2315: string[] = ["key"];
                const argsValues_2316: any[] = [key];
                sCtx_2311.invokeRemoteMethodAfter("setMasterKey", null, argsNames_2315, argsValues_2316);
                Key.META.serialize(sCtx_2311, key, dataOut_2313);
                sCtx_2311.sendToRemote(dataOut_2313.toArray());
                
            }
            , finish: (): ARFuture<FinishResultGlobalRegServerApi> =>  {
                const dataOut_2318 = new DataInOut();
                dataOut_2318.writeByte(4);
                const argsNames_2320: string[] = [];
                const argsValues_2321: any[] = [];
                const result_2319 = ARFuture.of<FinishResultGlobalRegServerApi>();
                sCtx_2311.invokeRemoteMethodAfter("finish", result_2319, argsNames_2320, argsValues_2321);
                const reqId_2317 = sCtx_2311.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2319 as ARFuture<FinishResultGlobalRegServerApi>).tryDone(FinishResultGlobalRegServerApi.META.deserialize(sCtx_2311, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2319.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2318.writeInt(reqId_2317);
                sCtx_2311.sendToRemote(dataOut_2318.toArray());
                return result_2319;
                
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
    serialize(sCtx_2322: MetaContext, obj_2323: ServerRegistrationApiRegistrationArguments, _out_2324: DataOut): void  {
        const stringBytes_2326 = new TextEncoder().encode(obj_2323.salt);
        SerializerPackNumber.INSTANCE.put(_out_2324, stringBytes_2326.length);
        _out_2324.write(stringBytes_2326);
        const stringBytes_2328 = new TextEncoder().encode(obj_2323.suffix);
        SerializerPackNumber.INSTANCE.put(_out_2324, stringBytes_2328.length);
        _out_2324.write(stringBytes_2328);
        SerializerPackNumber.INSTANCE.put(_out_2324, obj_2323.passwords.length);
        for (const el_2330 of obj_2323.passwords)  {
            _out_2324.writeInt(el_2330);
            
        }
        FastMeta.META_UUID.serialize(sCtx_2322, obj_2323.parent, _out_2324);
        GlobalApiStream.META.serialize(sCtx_2322, obj_2323.globalApi, _out_2324);
        
    }
    deserialize(sCtx_2322: MetaContext, in__2325: DataIn): ServerRegistrationApiRegistrationArguments  {
        try  {
            let salt_2331: string;
            let suffix_2332: string;
            let passwords_2333: number[];
            let parent_2334: UUID;
            let globalApi_2335: GlobalApiStream;
            let stringBytes_2336: Uint8Array;
            const len_2338 = Number(DeserializerPackNumber.INSTANCE.put(in__2325));
            const bytes_2339 = in__2325.readBytes(len_2338);
            stringBytes_2336 = bytes_2339;
            salt_2331 = new TextDecoder('utf-8').decode(stringBytes_2336);
            let stringBytes_2340: Uint8Array;
            const len_2342 = Number(DeserializerPackNumber.INSTANCE.put(in__2325));
            const bytes_2343 = in__2325.readBytes(len_2342);
            stringBytes_2340 = bytes_2343;
            suffix_2332 = new TextDecoder('utf-8').decode(stringBytes_2340);
            const len_2345 = Number(DeserializerPackNumber.INSTANCE.put(in__2325));
            passwords_2333 = new Array<number>(len_2345);
            for (let idx_2344 = 0;
            idx_2344 < len_2345;
            idx_2344++)  {
                passwords_2333[idx_2344] = in__2325.readInt();
                
            }
            parent_2334 = FastMeta.META_UUID.deserialize(sCtx_2322, in__2325);
            globalApi_2335 = GlobalApiStream.META.deserialize(sCtx_2322, in__2325);
            return new ServerRegistrationApiRegistrationArguments(salt_2331, suffix_2332, passwords_2333, parent_2334, globalApi_2335);
            
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
    serialize(sCtx_2346: MetaContext, obj_2347: ServerRegistrationApiRequestWorkProofDataArguments, _out_2348: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2346, obj_2347.parent, _out_2348);
        PowMethod.META.serialize(sCtx_2346, obj_2347.powMethods, _out_2348);
        
    }
    deserialize(sCtx_2346: MetaContext, in__2349: DataIn): ServerRegistrationApiRequestWorkProofDataArguments  {
        try  {
            let parent_2350: UUID;
            let powMethods_2351: PowMethod;
            parent_2350 = FastMeta.META_UUID.deserialize(sCtx_2346, in__2349);
            powMethods_2351 = PowMethod.META.deserialize(sCtx_2346, in__2349);
            return new ServerRegistrationApiRequestWorkProofDataArguments(parent_2350, powMethods_2351);
            
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
    serialize(sCtx_2352: MetaContext, obj_2353: ServerRegistrationApiResolveServersArguments, _out_2354: DataOut): void  {
        Cloud.META.serialize(sCtx_2352, obj_2353.serverIds, _out_2354);
        
    }
    deserialize(sCtx_2352: MetaContext, in__2355: DataIn): ServerRegistrationApiResolveServersArguments  {
        try  {
            let serverIds_2356: Cloud;
            serverIds_2356 = Cloud.META.deserialize(sCtx_2352, in__2355);
            return new ServerRegistrationApiResolveServersArguments(serverIds_2356);
            
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
    serialize(sCtx_2357: MetaContext, obj_2358: ServerRegistrationApiSetReturnKeyArguments, _out_2359: DataOut): void  {
        Key.META.serialize(sCtx_2357, obj_2358.key, _out_2359);
        
    }
    deserialize(sCtx_2357: MetaContext, in__2360: DataIn): ServerRegistrationApiSetReturnKeyArguments  {
        try  {
            let _key_2361: Key;
            _key_2361 = Key.META.deserialize(sCtx_2357, in__2360);
            return new ServerRegistrationApiSetReturnKeyArguments(_key_2361);
            
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
                    let salt_2363: string;
                    let suffix_2364: string;
                    let passwords_2365: number[];
                    let parent_2366: UUID;
                    let globalApi_2367: GlobalApiStream;
                    let stringBytes_2368: Uint8Array;
                    const len_2370 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_2371 = dataIn.readBytes(len_2370);
                    stringBytes_2368 = bytes_2371;
                    salt_2363 = new TextDecoder('utf-8').decode(stringBytes_2368);
                    let stringBytes_2372: Uint8Array;
                    const len_2374 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_2375 = dataIn.readBytes(len_2374);
                    stringBytes_2372 = bytes_2375;
                    suffix_2364 = new TextDecoder('utf-8').decode(stringBytes_2372);
                    const len_2377 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    passwords_2365 = new Array<number>(len_2377);
                    for (let idx_2376 = 0;
                    idx_2376 < len_2377;
                    idx_2376++)  {
                        passwords_2365[idx_2376] = dataIn.readInt();
                        
                    }
                    parent_2366 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    globalApi_2367 = GlobalApiStream.META.deserialize(ctx, dataIn);
                    const argsObject_2378 = new ServerRegistrationApiRegistrationArguments(salt_2363, suffix_2364, passwords_2365, parent_2366, globalApi_2367);
                    const argsNames_2379: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                    const argsValues_2380: any[] = [salt_2363, suffix_2364, passwords_2365, parent_2366, globalApi_2367];
                    ctx.invokeLocalMethodBefore("registration", argsNames_2379, argsValues_2380);
                    (typeof (localApi as any).registrationArguments === "function" ? (localApi as any).registrationArguments(argsObject_2378) : localApi.registration(salt_2363, suffix_2364, passwords_2365, parent_2366, globalApi_2367));
                    ctx.invokeLocalMethodAfter("registration", null, argsNames_2379, argsValues_2380);
                    break;
                    
                }
                case 4:  {
                    const reqId_2381 = dataIn.readInt();
                    let parent_2382: UUID;
                    let powMethods_2383: PowMethod;
                    parent_2382 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    powMethods_2383 = PowMethod.META.deserialize(ctx, dataIn);
                    const argsObject_2384 = new ServerRegistrationApiRequestWorkProofDataArguments(parent_2382, powMethods_2383);
                    const argsNames_2385: string[] = ["parent", "powMethods"];
                    const argsValues_2386: any[] = [parent_2382, powMethods_2383];
                    ctx.invokeLocalMethodBefore("requestWorkProofData", argsNames_2385, argsValues_2386);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).requestWorkProofDataArguments === "function" ? (localApi as any).requestWorkProofDataArguments(argsObject_2384) : localApi.requestWorkProofData(parent_2382, powMethods_2383));
                    ctx.invokeLocalMethodAfter("requestWorkProofData", resultFuture, argsNames_2385, argsValues_2386);
                    resultFuture.to((v_2388: WorkProofDTO) =>  {
                        const data_2387 = new DataInOut();
                        WorkProofDTO.META.serialize(ctx, v_2388, data_2387);
                        ctx.sendResultToRemote(reqId_2381, data_2387.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_2389 = dataIn.readInt();
                    let serverIds_2390: Cloud;
                    serverIds_2390 = Cloud.META.deserialize(ctx, dataIn);
                    const argsObject_2391 = new ServerRegistrationApiResolveServersArguments(serverIds_2390);
                    const argsNames_2392: string[] = ["serverIds"];
                    const argsValues_2393: any[] = [serverIds_2390];
                    ctx.invokeLocalMethodBefore("resolveServers", argsNames_2392, argsValues_2393);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).resolveServersArguments === "function" ? (localApi as any).resolveServersArguments(argsObject_2391) : localApi.resolveServers(serverIds_2390));
                    ctx.invokeLocalMethodAfter("resolveServers", resultFuture, argsNames_2392, argsValues_2393);
                    resultFuture.to((v_2395: ServerDescriptor[]) =>  {
                        const data_2394 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_2394, v_2395.length);
                        for (const el_2396 of v_2395)  {
                            ServerDescriptor.META.serialize(ctx, el_2396, data_2394);
                            
                        }
                        ctx.sendResultToRemote(reqId_2389, data_2394.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    let _key_2398: Key;
                    _key_2398 = Key.META.deserialize(ctx, dataIn);
                    const argsObject_2399 = new ServerRegistrationApiSetReturnKeyArguments(_key_2398);
                    const argsNames_2400: string[] = ["key"];
                    const argsValues_2401: any[] = [_key_2398];
                    ctx.invokeLocalMethodBefore("setReturnKey", argsNames_2400, argsValues_2401);
                    (typeof (localApi as any).setReturnKeyArguments === "function" ? (localApi as any).setReturnKeyArguments(argsObject_2399) : localApi.setReturnKey(_key_2398));
                    ctx.invokeLocalMethodAfter("setReturnKey", null, argsNames_2400, argsValues_2401);
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
    makeRemote(sCtx_2402: MetaContext): ServerRegistrationApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2402.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2402.flush();
                
            }
            , getFastMetaContext: () => sCtx_2402, registration: (salt: string, suffix: string, passwords: number[], parent: UUID, globalApi: GlobalApiStream): void =>  {
                const dataOut_2404 = new DataInOut();
                dataOut_2404.writeByte(3);
                const argsNames_2406: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                const argsValues_2407: any[] = [salt, suffix, passwords, parent, globalApi];
                sCtx_2402.invokeRemoteMethodAfter("registration", null, argsNames_2406, argsValues_2407);
                const stringBytes_2408 = new TextEncoder().encode(salt);
                SerializerPackNumber.INSTANCE.put(dataOut_2404, stringBytes_2408.length);
                dataOut_2404.write(stringBytes_2408);
                const stringBytes_2410 = new TextEncoder().encode(suffix);
                SerializerPackNumber.INSTANCE.put(dataOut_2404, stringBytes_2410.length);
                dataOut_2404.write(stringBytes_2410);
                SerializerPackNumber.INSTANCE.put(dataOut_2404, passwords.length);
                for (const el_2412 of passwords)  {
                    dataOut_2404.writeInt(el_2412);
                    
                }
                FastMeta.META_UUID.serialize(sCtx_2402, parent, dataOut_2404);
                GlobalApiStream.META.serialize(sCtx_2402, globalApi, dataOut_2404);
                sCtx_2402.sendToRemote(dataOut_2404.toArray());
                
            }
            , requestWorkProofData: (parent: UUID, powMethods: PowMethod): ARFuture<WorkProofDTO> =>  {
                const dataOut_2414 = new DataInOut();
                dataOut_2414.writeByte(4);
                const argsNames_2416: string[] = ["parent", "powMethods"];
                const argsValues_2417: any[] = [parent, powMethods];
                const result_2415 = ARFuture.of<WorkProofDTO>();
                sCtx_2402.invokeRemoteMethodAfter("requestWorkProofData", result_2415, argsNames_2416, argsValues_2417);
                const reqId_2413 = sCtx_2402.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2415 as ARFuture<WorkProofDTO>).tryDone(WorkProofDTO.META.deserialize(sCtx_2402, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2415.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2414.writeInt(reqId_2413);
                FastMeta.META_UUID.serialize(sCtx_2402, parent, dataOut_2414);
                PowMethod.META.serialize(sCtx_2402, powMethods, dataOut_2414);
                sCtx_2402.sendToRemote(dataOut_2414.toArray());
                return result_2415;
                
            }
            , resolveServers: (serverIds: Cloud): ARFuture<ServerDescriptor[]> =>  {
                const dataOut_2419 = new DataInOut();
                dataOut_2419.writeByte(5);
                const argsNames_2421: string[] = ["serverIds"];
                const argsValues_2422: any[] = [serverIds];
                const result_2420 = ARFuture.of<ServerDescriptor[]>();
                sCtx_2402.invokeRemoteMethodAfter("resolveServers", result_2420, argsNames_2421, argsValues_2422);
                const reqId_2418 = sCtx_2402.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2420 as ARFuture<ServerDescriptor[]>).tryDone(FastMeta.getMetaArray(ServerDescriptor.META).deserialize(sCtx_2402, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2420.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2419.writeInt(reqId_2418);
                Cloud.META.serialize(sCtx_2402, serverIds, dataOut_2419);
                sCtx_2402.sendToRemote(dataOut_2419.toArray());
                return result_2420;
                
            }
            , setReturnKey: (key: Key): void =>  {
                const dataOut_2424 = new DataInOut();
                dataOut_2424.writeByte(6);
                const argsNames_2426: string[] = ["key"];
                const argsValues_2427: any[] = [key];
                sCtx_2402.invokeRemoteMethodAfter("setReturnKey", null, argsNames_2426, argsValues_2427);
                Key.META.serialize(sCtx_2402, key, dataOut_2424);
                sCtx_2402.sendToRemote(dataOut_2424.toArray());
                
            }
            , openRegistration(salt: string, suffix: string, passwords: number[], parent: UUID, factory: (api: GlobalRegServerApiRemote) => any, converter: BytesConverter, ...keys: any[]): GlobalRegServerApiRemote  {
                return sCtx_2402.findContext(ctx =>  {
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
    serialize(sCtx_2428: MetaContext, obj_2429: RegistrationRootApiGetAsymmetricPublicKeyArguments, _out_2430: DataOut): void  {
        CryptoLib.META.serialize(sCtx_2428, obj_2429.cryptoLib, _out_2430);
        
    }
    deserialize(sCtx_2428: MetaContext, in__2431: DataIn): RegistrationRootApiGetAsymmetricPublicKeyArguments  {
        try  {
            let cryptoLib_2432: CryptoLib;
            cryptoLib_2432 = CryptoLib.META.deserialize(sCtx_2428, in__2431);
            return new RegistrationRootApiGetAsymmetricPublicKeyArguments(cryptoLib_2432);
            
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
    serialize(sCtx_2433: MetaContext, obj_2434: RegistrationRootApiEnterArguments, _out_2435: DataOut): void  {
        CryptoLib.META.serialize(sCtx_2433, obj_2434.cryptoLib, _out_2435);
        ServerRegistrationApiStream.META.serialize(sCtx_2433, obj_2434.stream, _out_2435);
        
    }
    deserialize(sCtx_2433: MetaContext, in__2436: DataIn): RegistrationRootApiEnterArguments  {
        try  {
            let cryptoLib_2437: CryptoLib;
            let stream_2438: ServerRegistrationApiStream;
            cryptoLib_2437 = CryptoLib.META.deserialize(sCtx_2433, in__2436);
            stream_2438 = ServerRegistrationApiStream.META.deserialize(sCtx_2433, in__2436);
            return new RegistrationRootApiEnterArguments(cryptoLib_2437, stream_2438);
            
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
    serialize(sCtx_2439: MetaContext, obj_2441: RegistrationRootApiGetMyIpArguments, _out_2442: DataOut): void  {
        
    }
    deserialize(sCtx_2440: MetaContext, in__2443: DataIn): RegistrationRootApiGetMyIpArguments  {
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
                    const reqId_2444 = dataIn.readInt();
                    let cryptoLib_2445: CryptoLib;
                    cryptoLib_2445 = CryptoLib.META.deserialize(ctx, dataIn);
                    const argsObject_2446 = new RegistrationRootApiGetAsymmetricPublicKeyArguments(cryptoLib_2445);
                    const argsNames_2447: string[] = ["cryptoLib"];
                    const argsValues_2448: any[] = [cryptoLib_2445];
                    ctx.invokeLocalMethodBefore("getAsymmetricPublicKey", argsNames_2447, argsValues_2448);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getAsymmetricPublicKeyArguments === "function" ? (localApi as any).getAsymmetricPublicKeyArguments(argsObject_2446) : localApi.getAsymmetricPublicKey(cryptoLib_2445));
                    ctx.invokeLocalMethodAfter("getAsymmetricPublicKey", resultFuture, argsNames_2447, argsValues_2448);
                    resultFuture.to((v_2450: SignedKey) =>  {
                        const data_2449 = new DataInOut();
                        SignedKey.META.serialize(ctx, v_2450, data_2449);
                        ctx.sendResultToRemote(reqId_2444, data_2449.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let cryptoLib_2452: CryptoLib;
                    let stream_2453: ServerRegistrationApiStream;
                    cryptoLib_2452 = CryptoLib.META.deserialize(ctx, dataIn);
                    stream_2453 = ServerRegistrationApiStream.META.deserialize(ctx, dataIn);
                    const argsObject_2454 = new RegistrationRootApiEnterArguments(cryptoLib_2452, stream_2453);
                    const argsNames_2455: string[] = ["cryptoLib", "stream"];
                    const argsValues_2456: any[] = [cryptoLib_2452, stream_2453];
                    ctx.invokeLocalMethodBefore("enter", argsNames_2455, argsValues_2456);
                    (typeof (localApi as any).enterArguments === "function" ? (localApi as any).enterArguments(argsObject_2454) : localApi.enter(cryptoLib_2452, stream_2453));
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_2455, argsValues_2456);
                    break;
                    
                }
                case 6:  {
                    const reqId_2457 = dataIn.readInt();
                    const argsObject_2458 = new RegistrationRootApiGetMyIpArguments();
                    const argsNames_2459: string[] = [];
                    const argsValues_2460: any[] = [];
                    ctx.invokeLocalMethodBefore("getMyIp", argsNames_2459, argsValues_2460);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getMyIpArguments === "function" ? (localApi as any).getMyIpArguments(argsObject_2458) : localApi.getMyIp());
                    ctx.invokeLocalMethodAfter("getMyIp", resultFuture, argsNames_2459, argsValues_2460);
                    resultFuture.to((v_2462: IpInfo) =>  {
                        const data_2461 = new DataInOut();
                        IpInfo.META.serialize(ctx, v_2462, data_2461);
                        ctx.sendResultToRemote(reqId_2457, data_2461.toArray());
                        
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
    makeRemote(sCtx_2463: MetaContext): RegistrationRootApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2463.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2463.flush();
                
            }
            , getFastMetaContext: () => sCtx_2463, getAsymmetricPublicKey: (cryptoLib: CryptoLib): ARFuture<SignedKey> =>  {
                const dataOut_2465 = new DataInOut();
                dataOut_2465.writeByte(3);
                const argsNames_2467: string[] = ["cryptoLib"];
                const argsValues_2468: any[] = [cryptoLib];
                const result_2466 = ARFuture.of<SignedKey>();
                sCtx_2463.invokeRemoteMethodAfter("getAsymmetricPublicKey", result_2466, argsNames_2467, argsValues_2468);
                const reqId_2464 = sCtx_2463.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2466 as ARFuture<SignedKey>).tryDone(SignedKey.META.deserialize(sCtx_2463, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2466.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2465.writeInt(reqId_2464);
                CryptoLib.META.serialize(sCtx_2463, cryptoLib, dataOut_2465);
                sCtx_2463.sendToRemote(dataOut_2465.toArray());
                return result_2466;
                
            }
            , enter: (cryptoLib: CryptoLib, stream: ServerRegistrationApiStream): void =>  {
                const dataOut_2470 = new DataInOut();
                dataOut_2470.writeByte(4);
                const argsNames_2472: string[] = ["cryptoLib", "stream"];
                const argsValues_2473: any[] = [cryptoLib, stream];
                sCtx_2463.invokeRemoteMethodAfter("enter", null, argsNames_2472, argsValues_2473);
                CryptoLib.META.serialize(sCtx_2463, cryptoLib, dataOut_2470);
                ServerRegistrationApiStream.META.serialize(sCtx_2463, stream, dataOut_2470);
                sCtx_2463.sendToRemote(dataOut_2470.toArray());
                
            }
            , getMyIp: (): ARFuture<IpInfo> =>  {
                const dataOut_2475 = new DataInOut();
                dataOut_2475.writeByte(6);
                const argsNames_2477: string[] = [];
                const argsValues_2478: any[] = [];
                const result_2476 = ARFuture.of<IpInfo>();
                sCtx_2463.invokeRemoteMethodAfter("getMyIp", result_2476, argsNames_2477, argsValues_2478);
                const reqId_2474 = sCtx_2463.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2476 as ARFuture<IpInfo>).tryDone(IpInfo.META.deserialize(sCtx_2463, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2476.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2475.writeInt(reqId_2474);
                sCtx_2463.sendToRemote(dataOut_2475.toArray());
                return result_2476;
                
            }
            , openEnter(cryptoLib: CryptoLib, factory: (api: ServerRegistrationApiRemote) => any, converter: BytesConverter, ...keys: any[]): ServerRegistrationApiRemote  {
                return sCtx_2463.findContext(ctx =>  {
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
    makeRemote(sCtx_2479: MetaContext): ClientApiRegSafeRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2479.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2479.flush();
                
            }
            , getFastMetaContext: () => sCtx_2479, 
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
    makeRemote(sCtx_2480: MetaContext): GlobalRegClientApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2480.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2480.flush();
                
            }
            , getFastMetaContext: () => sCtx_2480, 
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
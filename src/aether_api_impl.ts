import  {
    AFuture, ARFuture, DataIn, DataOut, DataInOut, DataInOutStatic, FastMetaType, MetaContext, FastMeta, SerializerPackNumber, DeserializerPackNumber, RemoteApi, FastMetaApi, FastFutureContextStub, SecurityConnectionDropException, AetherException, UUID, URI, AString, BytesConverter,
}
from './aether_client';
import  {
    AetherCodec, ClientActivityType, CryptoLib, PowMethod, ServerType, Status, AetherTypeDescriptor, IPAddress, Key, KeyAsymmetric, KeyAsymmetricPrivate, KeyAsymmetricPublic, KeySign, KeySignPrivate, KeySignPublic, KeySymmetric, PairKeys, Sign, Telemetry, WorkProofConfig, AccessCheckPair, AccessCheckResult, AccessGroup, AetherApiDefinition, AetherArgumentDescriptor, AetherArrayType, AetherBaseType, AetherFieldDescriptor, AetherMethodDescriptor, AetherModuleDescriptor, AetherNullableType, AetherStreamType, AetherStructDescriptor, AppliedConfig, ClientActivity, ClientConnectionInfo, ClientInfo, ClientLogEntry, ClientStateForSave, ClientTiming, Cloud, CloudConfig, CloudWeight, CoderAndPort, FinishResult, FinishResultGlobalRegServerApi, HydrogenCurvePrivate, HydrogenCurvePublic, HydrogenSecretBox, HydrogenSignPrivate, HydrogenSignPublic, IceCandidate, IPAddressAndPorts, IPAddressAndPortsList, IPAddressV4, IPAddressV6, IPAddressWeb, IpInfo, KeyValuePair, Message, MessageInfo, MoneyOperation, PairKeysAsym, PairKeysAsymSigned, PairKeysSign, PairKeysSym, ProbeReport, ProbeSample, ServerDescriptor, ServerDescriptorWithGeo, SignAE_ED25519, SignedKey, SignHYDROGEN, SodiumChacha20Poly1305, SodiumCurvePrivate, SodiumCurvePublic, SodiumSignPrivate, SodiumSignPublic, TelemetryCPP, Uap, UUIDAndCloud, WebRtcSession, WorkProofBCrypt, WorkProofDTO, ClientApiRegSafeStream, ClientApiStream, ClientInteractionClientStream, GlobalApiStream, GlobalRegClientApiStream, LoginClientStream, LoginStream, ServerRegistrationApiStream, ClientApiUnsafeSendSafeApiDataMultiArguments, ClientApiUnsafeSendSafeApiDataArguments, ClientApiSafeChangeParentArguments, ClientApiSafeChangeAliasArguments, ClientApiSafeNewChildrenArguments, ClientApiSafeSendMessagesArguments, ClientApiSafeSendServerDescriptorArguments, ClientApiSafeSendServerDescriptorsArguments, ClientApiSafeSendCloudArguments, ClientApiSafeSendCloudsArguments, ClientApiSafeRequestTelemetryArguments, ClientApiSafeSendAccessGroupsArguments, ClientApiSafeSendAccessGroupForClientArguments, ClientApiSafeAddItemsToAccessGroupArguments, ClientApiSafeRemoveItemsFromAccessGroupArguments, ClientApiSafeAddAccessGroupsToClientArguments, ClientApiSafeRemoveAccessGroupsFromClientArguments, ClientApiSafeSendAllAccessedClientsArguments, ClientApiSafeSendAccessCheckResultsArguments, ClientApiSafeSendMessageArguments, ClientApiSafeSendCloudConfigsArguments, ClientApiSafeClientInteractionArguments, ClientApiSafeProbeReportArguments, AuthorizedApiBackIdArguments, AuthorizedApiPingArguments, AuthorizedApiClientArguments, AuthorizedApiSendMessageArguments, AuthorizedApiSendMessagesArguments, AuthorizedApiSendMulticastArguments, AuthorizedApiSendMessageWithResultArguments, AuthorizedApiCreateAccessGroupArguments, AuthorizedApiAddToAccessGroupArguments, AuthorizedApiRemoveFromAccessGroupArguments, AuthorizedApiCheckAccessForSendMessageArguments, AuthorizedApiResolverServersArguments, AuthorizedApiResolveCloudsArguments, AuthorizedApiReportAppliedConfigArguments, AuthorizedApiGetAccessGroupsArguments, AuthorizedApiGetAccessGroupArguments, AuthorizedApiGetAllAccessedClientsArguments, AuthorizedApiCheckAccessForSendMessage2Arguments, AuthorizedApiSendTelemetryArguments, AuthorizedApiRequestAccessGroupsForClientsArguments, AuthorizedApiRequestAccessGroupsItemsArguments, AuthorizedApiSendAccessGroupForClientArguments, AuthorizedApiAddItemsToAccessGroupArguments, AuthorizedApiRemoveItemsFromAccessGroupArguments, AuthorizedApiAddAccessGroupsToClientArguments, AuthorizedApiRemoveAccessGroupsFromClientArguments, AuthorizedApiRequestAllAccessedClientsArguments, AuthorizedApiRequestAccessCheckArguments, AuthorizedApiGetClientActivityArguments, AuthorizedApiSearchClientLogsArguments, AuthorizedApiGetClientConnectionsArguments, AuthorizedApiGetClientMessagesArguments, AuthorizedApiSetNextReadDelayArguments, AuthorizedApiGetUapArguments, AuthorizedApiRequestWebRtcSessionArguments, AuthorizedApiPublishWebRtcSessionArguments, AuthorizedApiSelfDestructArguments, AuthorizedApiGetServersArguments, AuthorizedApiGetClientTimingArguments, AuthorizedApiOpenReceiveWindowArguments, AuthorizedApiSwitchVersionArguments, AuthorizedApiSetReceiveWindowArguments, AuthorizedApiProbePacketArguments, AuthorizedApiRequestProbeReportArguments, LoginApiGetTimeUTCArguments, LoginApiLoginByUIDArguments, LoginApiLoginByAliasArguments, LoginApiGetMyIpArguments, ServerApiByUidGetBalanceArguments, ServerApiByUidSetParentArguments, ServerApiByUidBlockArguments, ServerApiByUidGetPositionArguments, ServerApiByUidGetParentArguments, ServerApiByUidGetBeneficiaryArguments, ServerApiByUidSetBeneficiaryArguments, ServerApiByUidGetBlockTimeArguments, ServerApiByUidUnblockArguments, ServerApiByUidCreateTimeArguments, ServerApiByUidOnlineTimeArguments, ServerApiByUidAddAccessGroupArguments, ServerApiByUidRemoveAccessGroupArguments, ServerApiByUidSetMsgQueueLimitArguments, ServerApiByUidSetMsgTimeLimitArguments, ServerApiByUidAddServersToCloudArguments, ServerApiByUidRemoveServersFromCloudArguments, ClientApiRegUnsafeEnterArguments, ClientApiRegUnsafeEnterGlobalArguments, GlobalRegServerApiSetMasterKeyArguments, GlobalRegServerApiFinishArguments, ServerRegistrationApiRegistrationArguments, ServerRegistrationApiRequestWorkProofDataArguments, ServerRegistrationApiResolveServersArguments, ServerRegistrationApiSetReturnKeyArguments, RegistrationRootApiGetAsymmetricPublicKeyArguments, RegistrationRootApiEnterArguments, RegistrationRootApiGetMyIpArguments, ClientApiUnsafe, ClientApiSafe, AuthorizedApi, LoginApi, ServerApiByUidClient, ServerApiByUid, ClientApiRegUnsafe, GlobalRegServerApi, ServerRegistrationApi, RegistrationRootApi, ClientApiRegSafe, GlobalRegClientApi, ClientApiUnsafeRemote, ClientApiSafeRemote, AuthorizedApiRemote, LoginApiRemote, ServerApiByUidClientRemote, ServerApiByUidRemote, ClientApiRegUnsafeRemote, GlobalRegServerApiRemote, ServerRegistrationApiRemote, RegistrationRootApiRemote, ClientApiRegSafeRemote, GlobalRegClientApiRemote
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
export class ClientTimingMetaBodyImpl implements FastMetaType<ClientTiming>  {
    serialize(sCtx_302: MetaContext, obj_303: ClientTiming, _out_304: DataOut): void  {
        _out_304.writeLong(obj_303.lastActivityDeltaMs);
        _out_304.writeLong(obj_303.nextPingDeltaMs);
        
    }
    deserialize(sCtx_302: MetaContext, in__305: DataIn): ClientTiming  {
        try  {
            let lastActivityDeltaMs_306: bigint;
            let nextPingDeltaMs_307: bigint;
            lastActivityDeltaMs_306 = in__305.readLong();
            nextPingDeltaMs_307 = in__305.readLong();
            return new ClientTiming(lastActivityDeltaMs_306, nextPingDeltaMs_307);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientTiming | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.lastActivityDeltaMs);
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.nextPingDeltaMs);
        return hash | 0;
        
    }
    metaEquals(v1: ClientTiming | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientTiming)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.lastActivityDeltaMs, v2.lastActivityDeltaMs)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.nextPingDeltaMs, v2.nextPingDeltaMs)) return false;
        return true;
        
    }
    metaToString(obj: ClientTiming | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientTiming(');
        res.add('lastActivityDeltaMs:').add(obj.lastActivityDeltaMs);
        res.add(', ');
        res.add('nextPingDeltaMs:').add(obj.nextPingDeltaMs);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientTiming): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientTiming  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientTiming  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class CloudMetaBodyImpl implements FastMetaType<Cloud>  {
    serialize(sCtx_308: MetaContext, obj_309: Cloud, _out_310: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_310, obj_309.data.length);
        for (const el_312 of obj_309.data)  {
            _out_310.writeShort(el_312);
            
        }
        
    }
    deserialize(sCtx_308: MetaContext, in__311: DataIn): Cloud  {
        try  {
            let data_313: number[];
            const len_315 = Number(DeserializerPackNumber.INSTANCE.put(in__311));
            data_313 = new Array<number>(len_315);
            for (let idx_314 = 0;
            idx_314 < len_315;
            idx_314++)  {
                data_313[idx_314] = in__311.readShort();
                
            }
            return new Cloud(data_313);
            
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
    serialize(sCtx_316: MetaContext, obj_317: CloudConfig, _out_318: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_316, obj_317.subjectUid, _out_318);
        _out_318.writeLong(obj_317.configVersion);
        Cloud.META.serialize(sCtx_316, obj_317.cloud, _out_318);
        
    }
    deserialize(sCtx_316: MetaContext, in__319: DataIn): CloudConfig  {
        try  {
            let subjectUid_320: UUID;
            let configVersion_321: bigint;
            let cloud_322: Cloud;
            subjectUid_320 = FastMeta.META_UUID.deserialize(sCtx_316, in__319);
            configVersion_321 = in__319.readLong();
            cloud_322 = Cloud.META.deserialize(sCtx_316, in__319);
            return new CloudConfig(subjectUid_320, configVersion_321, cloud_322);
            
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
    serialize(sCtx_323: MetaContext, obj_324: CloudWeight, _out_325: DataOut): void  {
        _out_325.writeShort(obj_324.sid);
        _out_325.writeLong(obj_324.weight);
        
    }
    deserialize(sCtx_323: MetaContext, in__326: DataIn): CloudWeight  {
        try  {
            let sid_327: number;
            let weight_328: bigint;
            sid_327 = in__326.readShort();
            weight_328 = in__326.readLong();
            return new CloudWeight(sid_327, weight_328);
            
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
    serialize(sCtx_329: MetaContext, obj_330: CoderAndPort, _out_331: DataOut): void  {
        AetherCodec.META.serialize(sCtx_329, obj_330.codec, _out_331);
        _out_331.writeShort(obj_330.port);
        
    }
    deserialize(sCtx_329: MetaContext, in__332: DataIn): CoderAndPort  {
        try  {
            let codec_333: AetherCodec;
            let port_334: number;
            codec_333 = AetherCodec.META.deserialize(sCtx_329, in__332);
            port_334 = in__332.readShort();
            return new CoderAndPort(codec_333, port_334);
            
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
    serialize(sCtx_335: MetaContext, obj_336: FinishResult, _out_337: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_335, obj_336.alias, _out_337);
        FastMeta.META_UUID.serialize(sCtx_335, obj_336.uid, _out_337);
        Cloud.META.serialize(sCtx_335, obj_336.cloud, _out_337);
        
    }
    deserialize(sCtx_335: MetaContext, in__338: DataIn): FinishResult  {
        try  {
            let alias_339: UUID;
            let uid_340: UUID;
            let cloud_341: Cloud;
            alias_339 = FastMeta.META_UUID.deserialize(sCtx_335, in__338);
            uid_340 = FastMeta.META_UUID.deserialize(sCtx_335, in__338);
            cloud_341 = Cloud.META.deserialize(sCtx_335, in__338);
            return new FinishResult(alias_339, uid_340, cloud_341);
            
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
    serialize(sCtx_342: MetaContext, obj_343: FinishResultGlobalRegServerApi, _out_344: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_342, obj_343.alias, _out_344);
        FastMeta.META_UUID.serialize(sCtx_342, obj_343.uid, _out_344);
        Cloud.META.serialize(sCtx_342, obj_343.cloud, _out_344);
        
    }
    deserialize(sCtx_342: MetaContext, in__345: DataIn): FinishResultGlobalRegServerApi  {
        try  {
            let alias_346: UUID;
            let uid_347: UUID;
            let cloud_348: Cloud;
            alias_346 = FastMeta.META_UUID.deserialize(sCtx_342, in__345);
            uid_347 = FastMeta.META_UUID.deserialize(sCtx_342, in__345);
            cloud_348 = Cloud.META.deserialize(sCtx_342, in__345);
            return new FinishResultGlobalRegServerApi(alias_346, uid_347, cloud_348);
            
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
    serialize(sCtx_349: MetaContext, obj_350: HydrogenCurvePrivate, _out_351: DataOut): void  {
        if (obj_350.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_350.data must be 32 but was ${obj_350.data.length}`);
        _out_351.write(obj_350.data);
        
    }
    deserialize(sCtx_349: MetaContext, in__352: DataIn): HydrogenCurvePrivate  {
        try  {
            let data_354: Uint8Array;
            const len_356 = 32;
            const bytes_357 = in__352.readBytes(len_356);
            data_354 = bytes_357;
            return new HydrogenCurvePrivate(data_354);
            
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
    serialize(sCtx_358: MetaContext, obj_360: HydrogenCurvePrivate, _out_361: DataOut): void  {
        (HydrogenCurvePrivate as any).META_BODY.serialize(sCtx_358, obj_360, _out_361);
        
    }
    deserialize(sCtx_359: MetaContext, in__362: DataIn): HydrogenCurvePrivate  {
        try  {
            return (HydrogenCurvePrivate as any).META_BODY.deserialize(sCtx_359, in__362);
            
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
    serialize(sCtx_363: MetaContext, obj_364: HydrogenCurvePublic, _out_365: DataOut): void  {
        if (obj_364.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_364.data must be 32 but was ${obj_364.data.length}`);
        _out_365.write(obj_364.data);
        
    }
    deserialize(sCtx_363: MetaContext, in__366: DataIn): HydrogenCurvePublic  {
        try  {
            let data_368: Uint8Array;
            const len_370 = 32;
            const bytes_371 = in__366.readBytes(len_370);
            data_368 = bytes_371;
            return new HydrogenCurvePublic(data_368);
            
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
    serialize(sCtx_372: MetaContext, obj_374: HydrogenCurvePublic, _out_375: DataOut): void  {
        (HydrogenCurvePublic as any).META_BODY.serialize(sCtx_372, obj_374, _out_375);
        
    }
    deserialize(sCtx_373: MetaContext, in__376: DataIn): HydrogenCurvePublic  {
        try  {
            return (HydrogenCurvePublic as any).META_BODY.deserialize(sCtx_373, in__376);
            
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
    serialize(sCtx_377: MetaContext, obj_378: HydrogenSecretBox, _out_379: DataOut): void  {
        if (obj_378.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_378.data must be 32 but was ${obj_378.data.length}`);
        _out_379.write(obj_378.data);
        
    }
    deserialize(sCtx_377: MetaContext, in__380: DataIn): HydrogenSecretBox  {
        try  {
            let data_382: Uint8Array;
            const len_384 = 32;
            const bytes_385 = in__380.readBytes(len_384);
            data_382 = bytes_385;
            return new HydrogenSecretBox(data_382);
            
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
    serialize(sCtx_386: MetaContext, obj_388: HydrogenSecretBox, _out_389: DataOut): void  {
        (HydrogenSecretBox as any).META_BODY.serialize(sCtx_386, obj_388, _out_389);
        
    }
    deserialize(sCtx_387: MetaContext, in__390: DataIn): HydrogenSecretBox  {
        try  {
            return (HydrogenSecretBox as any).META_BODY.deserialize(sCtx_387, in__390);
            
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
    serialize(sCtx_391: MetaContext, obj_392: HydrogenSignPrivate, _out_393: DataOut): void  {
        if (obj_392.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_392.data must be 64 but was ${obj_392.data.length}`);
        _out_393.write(obj_392.data);
        
    }
    deserialize(sCtx_391: MetaContext, in__394: DataIn): HydrogenSignPrivate  {
        try  {
            let data_396: Uint8Array;
            const len_398 = 64;
            const bytes_399 = in__394.readBytes(len_398);
            data_396 = bytes_399;
            return new HydrogenSignPrivate(data_396);
            
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
    serialize(sCtx_400: MetaContext, obj_402: HydrogenSignPrivate, _out_403: DataOut): void  {
        (HydrogenSignPrivate as any).META_BODY.serialize(sCtx_400, obj_402, _out_403);
        
    }
    deserialize(sCtx_401: MetaContext, in__404: DataIn): HydrogenSignPrivate  {
        try  {
            return (HydrogenSignPrivate as any).META_BODY.deserialize(sCtx_401, in__404);
            
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
    serialize(sCtx_405: MetaContext, obj_406: HydrogenSignPublic, _out_407: DataOut): void  {
        if (obj_406.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_406.data must be 32 but was ${obj_406.data.length}`);
        _out_407.write(obj_406.data);
        
    }
    deserialize(sCtx_405: MetaContext, in__408: DataIn): HydrogenSignPublic  {
        try  {
            let data_410: Uint8Array;
            const len_412 = 32;
            const bytes_413 = in__408.readBytes(len_412);
            data_410 = bytes_413;
            return new HydrogenSignPublic(data_410);
            
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
    serialize(sCtx_414: MetaContext, obj_416: HydrogenSignPublic, _out_417: DataOut): void  {
        (HydrogenSignPublic as any).META_BODY.serialize(sCtx_414, obj_416, _out_417);
        
    }
    deserialize(sCtx_415: MetaContext, in__418: DataIn): HydrogenSignPublic  {
        try  {
            return (HydrogenSignPublic as any).META_BODY.deserialize(sCtx_415, in__418);
            
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
    serialize(sCtx_419: MetaContext, obj_420: IceCandidate, _out_421: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_421, obj_420.data.length);
        _out_421.write(obj_420.data);
        
    }
    deserialize(sCtx_419: MetaContext, in__422: DataIn): IceCandidate  {
        try  {
            let data_424: Uint8Array;
            const len_426 = Number(DeserializerPackNumber.INSTANCE.put(in__422));
            const bytes_427 = in__422.readBytes(len_426);
            data_424 = bytes_427;
            return new IceCandidate(data_424);
            
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
    serialize(sCtx_428: MetaContext, obj_429: IPAddressAndPorts, _out_430: DataOut): void  {
        IPAddress.META.serialize(sCtx_428, obj_429.address, _out_430);
        SerializerPackNumber.INSTANCE.put(_out_430, obj_429.coderAndPorts.length);
        for (const el_432 of obj_429.coderAndPorts)  {
            CoderAndPort.META.serialize(sCtx_428, el_432, _out_430);
            
        }
        
    }
    deserialize(sCtx_428: MetaContext, in__431: DataIn): IPAddressAndPorts  {
        try  {
            let address_433: IPAddress;
            let coderAndPorts_434: CoderAndPort[];
            address_433 = IPAddress.META.deserialize(sCtx_428, in__431);
            const len_436 = Number(DeserializerPackNumber.INSTANCE.put(in__431));
            coderAndPorts_434 = new Array<CoderAndPort>(len_436);
            for (let idx_435 = 0;
            idx_435 < len_436;
            idx_435++)  {
                coderAndPorts_434[idx_435] = CoderAndPort.META.deserialize(sCtx_428, in__431);
                
            }
            return new IPAddressAndPorts(address_433, coderAndPorts_434);
            
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
    serialize(sCtx_437: MetaContext, obj_438: IPAddressAndPortsList, _out_439: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_439, obj_438.addresses.length);
        for (const el_441 of obj_438.addresses)  {
            IPAddressAndPorts.META.serialize(sCtx_437, el_441, _out_439);
            
        }
        
    }
    deserialize(sCtx_437: MetaContext, in__440: DataIn): IPAddressAndPortsList  {
        try  {
            let addresses_442: IPAddressAndPorts[];
            const len_444 = Number(DeserializerPackNumber.INSTANCE.put(in__440));
            addresses_442 = new Array<IPAddressAndPorts>(len_444);
            for (let idx_443 = 0;
            idx_443 < len_444;
            idx_443++)  {
                addresses_442[idx_443] = IPAddressAndPorts.META.deserialize(sCtx_437, in__440);
                
            }
            return new IPAddressAndPortsList(addresses_442);
            
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
    serialize(sCtx_445: MetaContext, obj_446: IPAddressV4, _out_447: DataOut): void  {
        if (obj_446.data.length !== 4) throw new Error(`IllegalStateException: Array length for obj_446.data must be 4 but was ${obj_446.data.length}`);
        _out_447.write(obj_446.data);
        
    }
    deserialize(sCtx_445: MetaContext, in__448: DataIn): IPAddressV4  {
        try  {
            let data_450: Uint8Array;
            const len_452 = 4;
            const bytes_453 = in__448.readBytes(len_452);
            data_450 = bytes_453;
            return new IPAddressV4(data_450);
            
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
    serialize(sCtx_454: MetaContext, obj_456: IPAddressV4, _out_457: DataOut): void  {
        (IPAddressV4 as any).META_BODY.serialize(sCtx_454, obj_456, _out_457);
        
    }
    deserialize(sCtx_455: MetaContext, in__458: DataIn): IPAddressV4  {
        try  {
            return (IPAddressV4 as any).META_BODY.deserialize(sCtx_455, in__458);
            
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
    serialize(sCtx_459: MetaContext, obj_460: IPAddressV6, _out_461: DataOut): void  {
        if (obj_460.data.length !== 16) throw new Error(`IllegalStateException: Array length for obj_460.data must be 16 but was ${obj_460.data.length}`);
        _out_461.write(obj_460.data);
        
    }
    deserialize(sCtx_459: MetaContext, in__462: DataIn): IPAddressV6  {
        try  {
            let data_464: Uint8Array;
            const len_466 = 16;
            const bytes_467 = in__462.readBytes(len_466);
            data_464 = bytes_467;
            return new IPAddressV6(data_464);
            
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
    serialize(sCtx_468: MetaContext, obj_470: IPAddressV6, _out_471: DataOut): void  {
        (IPAddressV6 as any).META_BODY.serialize(sCtx_468, obj_470, _out_471);
        
    }
    deserialize(sCtx_469: MetaContext, in__472: DataIn): IPAddressV6  {
        try  {
            return (IPAddressV6 as any).META_BODY.deserialize(sCtx_469, in__472);
            
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
    serialize(sCtx_473: MetaContext, obj_474: IPAddressWeb, _out_475: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_475, obj_474.data.length);
        _out_475.write(obj_474.data);
        
    }
    deserialize(sCtx_473: MetaContext, in__476: DataIn): IPAddressWeb  {
        try  {
            let data_478: Uint8Array;
            const len_480 = Number(DeserializerPackNumber.INSTANCE.put(in__476));
            const bytes_481 = in__476.readBytes(len_480);
            data_478 = bytes_481;
            return new IPAddressWeb(data_478);
            
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
    serialize(sCtx_482: MetaContext, obj_484: IPAddressWeb, _out_485: DataOut): void  {
        (IPAddressWeb as any).META_BODY.serialize(sCtx_482, obj_484, _out_485);
        
    }
    deserialize(sCtx_483: MetaContext, in__486: DataIn): IPAddressWeb  {
        try  {
            return (IPAddressWeb as any).META_BODY.deserialize(sCtx_483, in__486);
            
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
    serialize(sCtx_487: MetaContext, obj_488: IpInfo, _out_489: DataOut): void  {
        IPAddress.META.serialize(sCtx_487, obj_488.ip, _out_489);
        _out_489.writeShort(obj_488.port);
        _out_489.writeDouble(obj_488.latitude);
        _out_489.writeDouble(obj_488.longitude);
        
    }
    deserialize(sCtx_487: MetaContext, in__490: DataIn): IpInfo  {
        try  {
            let ip_491: IPAddress;
            let port_492: number;
            let latitude_493: number;
            let longitude_494: number;
            ip_491 = IPAddress.META.deserialize(sCtx_487, in__490);
            port_492 = in__490.readShort();
            latitude_493 = in__490.readDouble();
            longitude_494 = in__490.readDouble();
            return new IpInfo(ip_491, port_492, latitude_493, longitude_494);
            
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
    serialize(sCtx_495: MetaContext, obj_496: KeyValuePair, _out_497: DataOut): void  {
        const stringBytes_499 = new TextEncoder().encode(obj_496.key);
        SerializerPackNumber.INSTANCE.put(_out_497, stringBytes_499.length);
        _out_497.write(stringBytes_499);
        const stringBytes_501 = new TextEncoder().encode(obj_496.value);
        SerializerPackNumber.INSTANCE.put(_out_497, stringBytes_501.length);
        _out_497.write(stringBytes_501);
        
    }
    deserialize(sCtx_495: MetaContext, in__498: DataIn): KeyValuePair  {
        try  {
            let _key_503: string;
            let value_504: string;
            let stringBytes_505: Uint8Array;
            const len_507 = Number(DeserializerPackNumber.INSTANCE.put(in__498));
            const bytes_508 = in__498.readBytes(len_507);
            stringBytes_505 = bytes_508;
            _key_503 = new TextDecoder('utf-8').decode(stringBytes_505);
            let stringBytes_509: Uint8Array;
            const len_511 = Number(DeserializerPackNumber.INSTANCE.put(in__498));
            const bytes_512 = in__498.readBytes(len_511);
            stringBytes_509 = bytes_512;
            value_504 = new TextDecoder('utf-8').decode(stringBytes_509);
            return new KeyValuePair(_key_503, value_504);
            
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
    serialize(sCtx_513: MetaContext, obj_514: Message, _out_515: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_513, obj_514.uid, _out_515);
        SerializerPackNumber.INSTANCE.put(_out_515, obj_514.data.length);
        _out_515.write(obj_514.data);
        
    }
    deserialize(sCtx_513: MetaContext, in__516: DataIn): Message  {
        try  {
            let uid_518: UUID;
            let data_519: Uint8Array;
            uid_518 = FastMeta.META_UUID.deserialize(sCtx_513, in__516);
            const len_521 = Number(DeserializerPackNumber.INSTANCE.put(in__516));
            const bytes_522 = in__516.readBytes(len_521);
            data_519 = bytes_522;
            return new Message(uid_518, data_519);
            
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
    serialize(sCtx_523: MetaContext, obj_524: MessageInfo, _out_525: DataOut): void  {
        _out_525.writeLong(obj_524.timestamp);
        FastMeta.META_UUID.serialize(sCtx_523, obj_524.fromUid, _out_525);
        FastMeta.META_UUID.serialize(sCtx_523, obj_524.toUid, _out_525);
        _out_525.writeInt(obj_524.size);
        FastMeta.META_UUID.serialize(sCtx_523, obj_524.messageId, _out_525);
        
    }
    deserialize(sCtx_523: MetaContext, in__526: DataIn): MessageInfo  {
        try  {
            let timestamp_527: bigint;
            let fromUid_528: UUID;
            let toUid_529: UUID;
            let size_530: number;
            let messageId_531: UUID;
            timestamp_527 = in__526.readLong();
            fromUid_528 = FastMeta.META_UUID.deserialize(sCtx_523, in__526);
            toUid_529 = FastMeta.META_UUID.deserialize(sCtx_523, in__526);
            size_530 = in__526.readInt();
            messageId_531 = FastMeta.META_UUID.deserialize(sCtx_523, in__526);
            return new MessageInfo(timestamp_527, fromUid_528, toUid_529, size_530, messageId_531);
            
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
    serialize(sCtx_532: MetaContext, obj_533: MoneyOperation, _out_534: DataOut): void  {
        _out_534.writeLong(obj_533.id);
        FastMeta.META_UUID.serialize(sCtx_532, obj_533.from, _out_534);
        FastMeta.META_UUID.serialize(sCtx_532, obj_533.to, _out_534);
        _out_534.writeLong(obj_533.amount);
        _out_534.writeLong(obj_533.time);
        _out_534.writeBoolean(obj_533.credit);
        Status.META.serialize(sCtx_532, obj_533.status, _out_534);
        
    }
    deserialize(sCtx_532: MetaContext, in__535: DataIn): MoneyOperation  {
        try  {
            let id_536: bigint;
            let from_537: UUID;
            let to_538: UUID;
            let amount_539: bigint;
            let time_540: bigint;
            let credit_541: boolean;
            let status_542: Status;
            id_536 = in__535.readLong();
            from_537 = FastMeta.META_UUID.deserialize(sCtx_532, in__535);
            to_538 = FastMeta.META_UUID.deserialize(sCtx_532, in__535);
            amount_539 = in__535.readLong();
            time_540 = in__535.readLong();
            credit_541 = in__535.readBoolean();
            status_542 = Status.META.deserialize(sCtx_532, in__535);
            return new MoneyOperation(id_536, from_537, to_538, amount_539, time_540, credit_541, status_542);
            
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
    serialize(sCtx_543: MetaContext, obj_544: PairKeysAsym, _out_545: DataOut): void  {
        Key.META.serialize(sCtx_543, obj_544.privateKey, _out_545);
        Key.META.serialize(sCtx_543, obj_544.publicKey, _out_545);
        
    }
    deserialize(sCtx_543: MetaContext, in__546: DataIn): PairKeysAsym  {
        try  {
            let privateKey_547: Key;
            let publicKey_548: Key;
            privateKey_547 = Key.META.deserialize(sCtx_543, in__546);
            publicKey_548 = Key.META.deserialize(sCtx_543, in__546);
            return new PairKeysAsym(privateKey_547, publicKey_548);
            
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
    serialize(sCtx_549: MetaContext, obj_551: PairKeysAsym, _out_552: DataOut): void  {
        (PairKeysAsym as any).META_BODY.serialize(sCtx_549, obj_551, _out_552);
        
    }
    deserialize(sCtx_550: MetaContext, in__553: DataIn): PairKeysAsym  {
        try  {
            return (PairKeysAsym as any).META_BODY.deserialize(sCtx_550, in__553);
            
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
    serialize(sCtx_554: MetaContext, obj_555: PairKeysAsymSigned, _out_556: DataOut): void  {
        Key.META.serialize(sCtx_554, obj_555.privateKey, _out_556);
        SignedKey.META.serialize(sCtx_554, obj_555.publicKey, _out_556);
        
    }
    deserialize(sCtx_554: MetaContext, in__557: DataIn): PairKeysAsymSigned  {
        try  {
            let privateKey_558: Key;
            let publicKey_559: SignedKey;
            privateKey_558 = Key.META.deserialize(sCtx_554, in__557);
            publicKey_559 = SignedKey.META.deserialize(sCtx_554, in__557);
            return new PairKeysAsymSigned(privateKey_558, publicKey_559);
            
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
    serialize(sCtx_560: MetaContext, obj_562: PairKeysAsymSigned, _out_563: DataOut): void  {
        (PairKeysAsymSigned as any).META_BODY.serialize(sCtx_560, obj_562, _out_563);
        
    }
    deserialize(sCtx_561: MetaContext, in__564: DataIn): PairKeysAsymSigned  {
        try  {
            return (PairKeysAsymSigned as any).META_BODY.deserialize(sCtx_561, in__564);
            
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
    serialize(sCtx_565: MetaContext, obj_566: PairKeysSign, _out_567: DataOut): void  {
        Key.META.serialize(sCtx_565, obj_566.privateKey, _out_567);
        Key.META.serialize(sCtx_565, obj_566.publicKey, _out_567);
        
    }
    deserialize(sCtx_565: MetaContext, in__568: DataIn): PairKeysSign  {
        try  {
            let privateKey_569: Key;
            let publicKey_570: Key;
            privateKey_569 = Key.META.deserialize(sCtx_565, in__568);
            publicKey_570 = Key.META.deserialize(sCtx_565, in__568);
            return new PairKeysSign(privateKey_569, publicKey_570);
            
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
    serialize(sCtx_571: MetaContext, obj_573: PairKeysSign, _out_574: DataOut): void  {
        (PairKeysSign as any).META_BODY.serialize(sCtx_571, obj_573, _out_574);
        
    }
    deserialize(sCtx_572: MetaContext, in__575: DataIn): PairKeysSign  {
        try  {
            return (PairKeysSign as any).META_BODY.deserialize(sCtx_572, in__575);
            
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
    serialize(sCtx_576: MetaContext, obj_577: PairKeysSym, _out_578: DataOut): void  {
        KeySymmetric.META.serialize(sCtx_576, obj_577.clientToServer, _out_578);
        KeySymmetric.META.serialize(sCtx_576, obj_577.serverToClient, _out_578);
        
    }
    deserialize(sCtx_576: MetaContext, in__579: DataIn): PairKeysSym  {
        try  {
            let clientToServer_580: KeySymmetric;
            let serverToClient_581: KeySymmetric;
            clientToServer_580 = KeySymmetric.META.deserialize(sCtx_576, in__579);
            serverToClient_581 = KeySymmetric.META.deserialize(sCtx_576, in__579);
            return new PairKeysSym(clientToServer_580, serverToClient_581);
            
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
    serialize(sCtx_582: MetaContext, obj_584: PairKeysSym, _out_585: DataOut): void  {
        (PairKeysSym as any).META_BODY.serialize(sCtx_582, obj_584, _out_585);
        
    }
    deserialize(sCtx_583: MetaContext, in__586: DataIn): PairKeysSym  {
        try  {
            return (PairKeysSym as any).META_BODY.deserialize(sCtx_583, in__586);
            
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
export class ProbeReportMetaBodyImpl implements FastMetaType<ProbeReport>  {
    serialize(sCtx_587: MetaContext, obj_588: ProbeReport, _out_589: DataOut): void  {
        _out_589.writeInt(obj_588.testId);
        _out_589.writeInt(obj_588.firstSequence);
        _out_589.writeInt(obj_588.count);
        SerializerPackNumber.INSTANCE.put(_out_589, obj_588.samples.length);
        for (const el_591 of obj_588.samples)  {
            ProbeSample.META.serialize(sCtx_587, el_591, _out_589);
            
        }
        
    }
    deserialize(sCtx_587: MetaContext, in__590: DataIn): ProbeReport  {
        try  {
            let testId_592: number;
            let firstSequence_593: number;
            let count_594: number;
            let samples_595: ProbeSample[];
            testId_592 = in__590.readInt();
            firstSequence_593 = in__590.readInt();
            count_594 = in__590.readInt();
            const len_597 = Number(DeserializerPackNumber.INSTANCE.put(in__590));
            samples_595 = new Array<ProbeSample>(len_597);
            for (let idx_596 = 0;
            idx_596 < len_597;
            idx_596++)  {
                samples_595[idx_596] = ProbeSample.META.deserialize(sCtx_587, in__590);
                
            }
            return new ProbeReport(testId_592, firstSequence_593, count_594, samples_595);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ProbeReport | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.testId);
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.firstSequence);
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.count);
        hash = 37 * hash + FastMeta.getMetaArray(ProbeSample.META).metaHashCode(obj.samples);
        return hash | 0;
        
    }
    metaEquals(v1: ProbeReport | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ProbeReport)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.testId, v2.testId)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.firstSequence, v2.firstSequence)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.count, v2.count)) return false;
        if (!FastMeta.getMetaArray(ProbeSample.META).metaEquals(v1.samples, v2.samples)) return false;
        return true;
        
    }
    metaToString(obj: ProbeReport | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ProbeReport(');
        res.add('testId:').add(obj.testId);
        res.add(', ');
        res.add('firstSequence:').add(obj.firstSequence);
        res.add(', ');
        res.add('count:').add(obj.count);
        res.add(', ');
        res.add('samples:').add(obj.samples);
        res.add(')');
        
    }
    public serializeToBytes(obj: ProbeReport): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ProbeReport  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ProbeReport  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ProbeSampleMetaBodyImpl implements FastMetaType<ProbeSample>  {
    serialize(sCtx_598: MetaContext, obj_599: ProbeSample, _out_600: DataOut): void  {
        _out_600.writeInt(obj_599.sequence);
        _out_600.writeLong(obj_599.receivedAtMs);
        
    }
    deserialize(sCtx_598: MetaContext, in__601: DataIn): ProbeSample  {
        try  {
            let sequence_602: number;
            let receivedAtMs_603: bigint;
            sequence_602 = in__601.readInt();
            receivedAtMs_603 = in__601.readLong();
            return new ProbeSample(sequence_602, receivedAtMs_603);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ProbeSample | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.sequence);
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.receivedAtMs);
        return hash | 0;
        
    }
    metaEquals(v1: ProbeSample | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ProbeSample)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.sequence, v2.sequence)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.receivedAtMs, v2.receivedAtMs)) return false;
        return true;
        
    }
    metaToString(obj: ProbeSample | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ProbeSample(');
        res.add('sequence:').add(obj.sequence);
        res.add(', ');
        res.add('receivedAtMs:').add(obj.receivedAtMs);
        res.add(')');
        
    }
    public serializeToBytes(obj: ProbeSample): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ProbeSample  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ProbeSample  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class ServerDescriptorMetaBodyImpl implements FastMetaType<ServerDescriptor>  {
    serialize(sCtx_604: MetaContext, obj_605: ServerDescriptor, _out_606: DataOut): void  {
        _out_606.writeShort(obj_605.id);
        IPAddressAndPortsList.META.serialize(sCtx_604, obj_605.ipAddress, _out_606);
        
    }
    deserialize(sCtx_604: MetaContext, in__607: DataIn): ServerDescriptor  {
        try  {
            let id_608: number;
            let ipAddress_609: IPAddressAndPortsList;
            id_608 = in__607.readShort();
            ipAddress_609 = IPAddressAndPortsList.META.deserialize(sCtx_604, in__607);
            return new ServerDescriptor(id_608, ipAddress_609);
            
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
    serialize(sCtx_610: MetaContext, obj_611: ServerDescriptorWithGeo, _out_612: DataOut): void  {
        _out_612.writeShort(obj_611.id);
        _out_612.writeInt(obj_611.time);
        IPAddressAndPortsList.META.serialize(sCtx_610, obj_611.ipAddress, _out_612);
        _out_612.writeDouble(obj_611.latitude);
        _out_612.writeDouble(obj_611.longitude);
        ServerType.META.serialize(sCtx_610, obj_611.type, _out_612);
        
    }
    deserialize(sCtx_610: MetaContext, in__613: DataIn): ServerDescriptorWithGeo  {
        try  {
            let id_614: number;
            let time_615: number;
            let ipAddress_616: IPAddressAndPortsList;
            let latitude_617: number;
            let longitude_618: number;
            let type_619: ServerType;
            id_614 = in__613.readShort();
            time_615 = in__613.readInt();
            ipAddress_616 = IPAddressAndPortsList.META.deserialize(sCtx_610, in__613);
            latitude_617 = in__613.readDouble();
            longitude_618 = in__613.readDouble();
            type_619 = ServerType.META.deserialize(sCtx_610, in__613);
            return new ServerDescriptorWithGeo(id_614, time_615, ipAddress_616, latitude_617, longitude_618, type_619);
            
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
    serialize(sCtx_620: MetaContext, obj_621: SignAE_ED25519, _out_622: DataOut): void  {
        if (obj_621.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_621.data must be 64 but was ${obj_621.data.length}`);
        _out_622.write(obj_621.data);
        
    }
    deserialize(sCtx_620: MetaContext, in__623: DataIn): SignAE_ED25519  {
        try  {
            let data_625: Uint8Array;
            const len_627 = 64;
            const bytes_628 = in__623.readBytes(len_627);
            data_625 = bytes_628;
            return new SignAE_ED25519(data_625);
            
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
    serialize(sCtx_629: MetaContext, obj_631: SignAE_ED25519, _out_632: DataOut): void  {
        (SignAE_ED25519 as any).META_BODY.serialize(sCtx_629, obj_631, _out_632);
        
    }
    deserialize(sCtx_630: MetaContext, in__633: DataIn): SignAE_ED25519  {
        try  {
            return (SignAE_ED25519 as any).META_BODY.deserialize(sCtx_630, in__633);
            
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
    serialize(sCtx_634: MetaContext, obj_635: SignedKey, _out_636: DataOut): void  {
        Key.META.serialize(sCtx_634, obj_635.key, _out_636);
        Sign.META.serialize(sCtx_634, obj_635.sign, _out_636);
        
    }
    deserialize(sCtx_634: MetaContext, in__637: DataIn): SignedKey  {
        try  {
            let _key_638: Key;
            let sign_639: Sign;
            _key_638 = Key.META.deserialize(sCtx_634, in__637);
            sign_639 = Sign.META.deserialize(sCtx_634, in__637);
            return new SignedKey(_key_638, sign_639);
            
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
    serialize(sCtx_640: MetaContext, obj_641: SignHYDROGEN, _out_642: DataOut): void  {
        if (obj_641.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_641.data must be 64 but was ${obj_641.data.length}`);
        _out_642.write(obj_641.data);
        
    }
    deserialize(sCtx_640: MetaContext, in__643: DataIn): SignHYDROGEN  {
        try  {
            let data_645: Uint8Array;
            const len_647 = 64;
            const bytes_648 = in__643.readBytes(len_647);
            data_645 = bytes_648;
            return new SignHYDROGEN(data_645);
            
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
    serialize(sCtx_649: MetaContext, obj_651: SignHYDROGEN, _out_652: DataOut): void  {
        (SignHYDROGEN as any).META_BODY.serialize(sCtx_649, obj_651, _out_652);
        
    }
    deserialize(sCtx_650: MetaContext, in__653: DataIn): SignHYDROGEN  {
        try  {
            return (SignHYDROGEN as any).META_BODY.deserialize(sCtx_650, in__653);
            
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
    serialize(sCtx_654: MetaContext, obj_655: SodiumChacha20Poly1305, _out_656: DataOut): void  {
        if (obj_655.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_655.data must be 32 but was ${obj_655.data.length}`);
        _out_656.write(obj_655.data);
        
    }
    deserialize(sCtx_654: MetaContext, in__657: DataIn): SodiumChacha20Poly1305  {
        try  {
            let data_659: Uint8Array;
            const len_661 = 32;
            const bytes_662 = in__657.readBytes(len_661);
            data_659 = bytes_662;
            return new SodiumChacha20Poly1305(data_659);
            
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
    serialize(sCtx_663: MetaContext, obj_665: SodiumChacha20Poly1305, _out_666: DataOut): void  {
        (SodiumChacha20Poly1305 as any).META_BODY.serialize(sCtx_663, obj_665, _out_666);
        
    }
    deserialize(sCtx_664: MetaContext, in__667: DataIn): SodiumChacha20Poly1305  {
        try  {
            return (SodiumChacha20Poly1305 as any).META_BODY.deserialize(sCtx_664, in__667);
            
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
    serialize(sCtx_668: MetaContext, obj_669: SodiumCurvePrivate, _out_670: DataOut): void  {
        if (obj_669.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_669.data must be 32 but was ${obj_669.data.length}`);
        _out_670.write(obj_669.data);
        
    }
    deserialize(sCtx_668: MetaContext, in__671: DataIn): SodiumCurvePrivate  {
        try  {
            let data_673: Uint8Array;
            const len_675 = 32;
            const bytes_676 = in__671.readBytes(len_675);
            data_673 = bytes_676;
            return new SodiumCurvePrivate(data_673);
            
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
    serialize(sCtx_677: MetaContext, obj_679: SodiumCurvePrivate, _out_680: DataOut): void  {
        (SodiumCurvePrivate as any).META_BODY.serialize(sCtx_677, obj_679, _out_680);
        
    }
    deserialize(sCtx_678: MetaContext, in__681: DataIn): SodiumCurvePrivate  {
        try  {
            return (SodiumCurvePrivate as any).META_BODY.deserialize(sCtx_678, in__681);
            
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
    serialize(sCtx_682: MetaContext, obj_683: SodiumCurvePublic, _out_684: DataOut): void  {
        if (obj_683.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_683.data must be 32 but was ${obj_683.data.length}`);
        _out_684.write(obj_683.data);
        
    }
    deserialize(sCtx_682: MetaContext, in__685: DataIn): SodiumCurvePublic  {
        try  {
            let data_687: Uint8Array;
            const len_689 = 32;
            const bytes_690 = in__685.readBytes(len_689);
            data_687 = bytes_690;
            return new SodiumCurvePublic(data_687);
            
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
    serialize(sCtx_691: MetaContext, obj_693: SodiumCurvePublic, _out_694: DataOut): void  {
        (SodiumCurvePublic as any).META_BODY.serialize(sCtx_691, obj_693, _out_694);
        
    }
    deserialize(sCtx_692: MetaContext, in__695: DataIn): SodiumCurvePublic  {
        try  {
            return (SodiumCurvePublic as any).META_BODY.deserialize(sCtx_692, in__695);
            
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
    serialize(sCtx_696: MetaContext, obj_697: SodiumSignPrivate, _out_698: DataOut): void  {
        if (obj_697.data.length !== 64) throw new Error(`IllegalStateException: Array length for obj_697.data must be 64 but was ${obj_697.data.length}`);
        _out_698.write(obj_697.data);
        
    }
    deserialize(sCtx_696: MetaContext, in__699: DataIn): SodiumSignPrivate  {
        try  {
            let data_701: Uint8Array;
            const len_703 = 64;
            const bytes_704 = in__699.readBytes(len_703);
            data_701 = bytes_704;
            return new SodiumSignPrivate(data_701);
            
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
    serialize(sCtx_705: MetaContext, obj_707: SodiumSignPrivate, _out_708: DataOut): void  {
        (SodiumSignPrivate as any).META_BODY.serialize(sCtx_705, obj_707, _out_708);
        
    }
    deserialize(sCtx_706: MetaContext, in__709: DataIn): SodiumSignPrivate  {
        try  {
            return (SodiumSignPrivate as any).META_BODY.deserialize(sCtx_706, in__709);
            
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
    serialize(sCtx_710: MetaContext, obj_711: SodiumSignPublic, _out_712: DataOut): void  {
        if (obj_711.data.length !== 32) throw new Error(`IllegalStateException: Array length for obj_711.data must be 32 but was ${obj_711.data.length}`);
        _out_712.write(obj_711.data);
        
    }
    deserialize(sCtx_710: MetaContext, in__713: DataIn): SodiumSignPublic  {
        try  {
            let data_715: Uint8Array;
            const len_717 = 32;
            const bytes_718 = in__713.readBytes(len_717);
            data_715 = bytes_718;
            return new SodiumSignPublic(data_715);
            
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
    serialize(sCtx_719: MetaContext, obj_721: SodiumSignPublic, _out_722: DataOut): void  {
        (SodiumSignPublic as any).META_BODY.serialize(sCtx_719, obj_721, _out_722);
        
    }
    deserialize(sCtx_720: MetaContext, in__723: DataIn): SodiumSignPublic  {
        try  {
            return (SodiumSignPublic as any).META_BODY.deserialize(sCtx_720, in__723);
            
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
    serialize(sCtx_724: MetaContext, obj_725: TelemetryCPP, _out_726: DataOut): void  {
        _out_726.writeInt(obj_725.utm_id);
        SerializerPackNumber.INSTANCE.put(_out_726, obj_725.blob.length);
        _out_726.write(obj_725.blob);
        const stringBytes_729 = new TextEncoder().encode(obj_725.lib_version);
        SerializerPackNumber.INSTANCE.put(_out_726, stringBytes_729.length);
        _out_726.write(stringBytes_729);
        const stringBytes_731 = new TextEncoder().encode(obj_725.os);
        SerializerPackNumber.INSTANCE.put(_out_726, stringBytes_731.length);
        _out_726.write(stringBytes_731);
        const stringBytes_733 = new TextEncoder().encode(obj_725.compiler);
        SerializerPackNumber.INSTANCE.put(_out_726, stringBytes_733.length);
        _out_726.write(stringBytes_733);
        
    }
    deserialize(sCtx_724: MetaContext, in__727: DataIn): TelemetryCPP  {
        try  {
            let utm_id_735: number;
            let blob_736: Uint8Array;
            let lib_version_737: string;
            let os_738: string;
            let compiler_739: string;
            utm_id_735 = in__727.readInt();
            const len_741 = Number(DeserializerPackNumber.INSTANCE.put(in__727));
            const bytes_742 = in__727.readBytes(len_741);
            blob_736 = bytes_742;
            let stringBytes_743: Uint8Array;
            const len_745 = Number(DeserializerPackNumber.INSTANCE.put(in__727));
            const bytes_746 = in__727.readBytes(len_745);
            stringBytes_743 = bytes_746;
            lib_version_737 = new TextDecoder('utf-8').decode(stringBytes_743);
            let stringBytes_747: Uint8Array;
            const len_749 = Number(DeserializerPackNumber.INSTANCE.put(in__727));
            const bytes_750 = in__727.readBytes(len_749);
            stringBytes_747 = bytes_750;
            os_738 = new TextDecoder('utf-8').decode(stringBytes_747);
            let stringBytes_751: Uint8Array;
            const len_753 = Number(DeserializerPackNumber.INSTANCE.put(in__727));
            const bytes_754 = in__727.readBytes(len_753);
            stringBytes_751 = bytes_754;
            compiler_739 = new TextDecoder('utf-8').decode(stringBytes_751);
            return new TelemetryCPP(utm_id_735, blob_736, lib_version_737, os_738, compiler_739);
            
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
    serialize(sCtx_755: MetaContext, obj_757: TelemetryCPP, _out_758: DataOut): void  {
        (TelemetryCPP as any).META_BODY.serialize(sCtx_755, obj_757, _out_758);
        
    }
    deserialize(sCtx_756: MetaContext, in__759: DataIn): TelemetryCPP  {
        try  {
            return (TelemetryCPP as any).META_BODY.deserialize(sCtx_756, in__759);
            
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
    serialize(sCtx_760: MetaContext, obj_761: Uap, _out_762: DataOut): void  {
        _out_762.writeLong(obj_761.deltaMs);
        _out_762.writeLong(obj_761.lastReadTimestamp);
        
    }
    deserialize(sCtx_760: MetaContext, in__763: DataIn): Uap  {
        try  {
            let deltaMs_764: bigint;
            let lastReadTimestamp_765: bigint;
            deltaMs_764 = in__763.readLong();
            lastReadTimestamp_765 = in__763.readLong();
            return new Uap(deltaMs_764, lastReadTimestamp_765);
            
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
    serialize(sCtx_766: MetaContext, obj_767: UUIDAndCloud, _out_768: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_766, obj_767.uid, _out_768);
        Cloud.META.serialize(sCtx_766, obj_767.cloud, _out_768);
        
    }
    deserialize(sCtx_766: MetaContext, in__769: DataIn): UUIDAndCloud  {
        try  {
            let uid_770: UUID;
            let cloud_771: Cloud;
            uid_770 = FastMeta.META_UUID.deserialize(sCtx_766, in__769);
            cloud_771 = Cloud.META.deserialize(sCtx_766, in__769);
            return new UUIDAndCloud(uid_770, cloud_771);
            
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
    serialize(sCtx_772: MetaContext, obj_773: WebRtcSession, _out_774: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_774, obj_773.sdp.length);
        _out_774.write(obj_773.sdp);
        SerializerPackNumber.INSTANCE.put(_out_774, obj_773.candidates.length);
        for (const el_777 of obj_773.candidates)  {
            IceCandidate.META.serialize(sCtx_772, el_777, _out_774);
            
        }
        
    }
    deserialize(sCtx_772: MetaContext, in__775: DataIn): WebRtcSession  {
        try  {
            let sdp_778: Uint8Array;
            let candidates_779: IceCandidate[];
            const len_781 = Number(DeserializerPackNumber.INSTANCE.put(in__775));
            const bytes_782 = in__775.readBytes(len_781);
            sdp_778 = bytes_782;
            const len_784 = Number(DeserializerPackNumber.INSTANCE.put(in__775));
            candidates_779 = new Array<IceCandidate>(len_784);
            for (let idx_783 = 0;
            idx_783 < len_784;
            idx_783++)  {
                candidates_779[idx_783] = IceCandidate.META.deserialize(sCtx_772, in__775);
                
            }
            return new WebRtcSession(sdp_778, candidates_779);
            
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
    serialize(sCtx_785: MetaContext, obj_786: WorkProofBCrypt, _out_787: DataOut): void  {
        _out_787.writeByte(obj_786.costBCrypt);
        _out_787.writeByte(obj_786.poolSize);
        _out_787.writeInt(obj_786.maxHashVal);
        
    }
    deserialize(sCtx_785: MetaContext, in__788: DataIn): WorkProofBCrypt  {
        try  {
            let costBCrypt_789: number;
            let poolSize_790: number;
            let maxHashVal_791: number;
            costBCrypt_789 = in__788.readByte();
            poolSize_790 = in__788.readByte();
            maxHashVal_791 = in__788.readInt();
            return new WorkProofBCrypt(costBCrypt_789, poolSize_790, maxHashVal_791);
            
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
    serialize(sCtx_792: MetaContext, obj_794: WorkProofBCrypt, _out_795: DataOut): void  {
        (WorkProofBCrypt as any).META_BODY.serialize(sCtx_792, obj_794, _out_795);
        
    }
    deserialize(sCtx_793: MetaContext, in__796: DataIn): WorkProofBCrypt  {
        try  {
            return (WorkProofBCrypt as any).META_BODY.deserialize(sCtx_793, in__796);
            
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
    serialize(sCtx_797: MetaContext, obj_798: WorkProofDTO, _out_799: DataOut): void  {
        const stringBytes_801 = new TextEncoder().encode(obj_798.salt);
        SerializerPackNumber.INSTANCE.put(_out_799, stringBytes_801.length);
        _out_799.write(stringBytes_801);
        const stringBytes_803 = new TextEncoder().encode(obj_798.suffix);
        SerializerPackNumber.INSTANCE.put(_out_799, stringBytes_803.length);
        _out_799.write(stringBytes_803);
        _out_799.writeByte(obj_798.poolSize);
        _out_799.writeInt(obj_798.maxHashVal);
        SignedKey.META.serialize(sCtx_797, obj_798.globalKey, _out_799);
        
    }
    deserialize(sCtx_797: MetaContext, in__800: DataIn): WorkProofDTO  {
        try  {
            let salt_805: string;
            let suffix_806: string;
            let poolSize_807: number;
            let maxHashVal_808: number;
            let globalKey_809: SignedKey;
            let stringBytes_810: Uint8Array;
            const len_812 = Number(DeserializerPackNumber.INSTANCE.put(in__800));
            const bytes_813 = in__800.readBytes(len_812);
            stringBytes_810 = bytes_813;
            salt_805 = new TextDecoder('utf-8').decode(stringBytes_810);
            let stringBytes_814: Uint8Array;
            const len_816 = Number(DeserializerPackNumber.INSTANCE.put(in__800));
            const bytes_817 = in__800.readBytes(len_816);
            stringBytes_814 = bytes_817;
            suffix_806 = new TextDecoder('utf-8').decode(stringBytes_814);
            poolSize_807 = in__800.readByte();
            maxHashVal_808 = in__800.readInt();
            globalKey_809 = SignedKey.META.deserialize(sCtx_797, in__800);
            return new WorkProofDTO(salt_805, suffix_806, poolSize_807, maxHashVal_808, globalKey_809);
            
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
                    const remoteApi = outObj.deferredApiMeta.makeRemote(childCtx);
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
                    const remoteApi = outObj.deferredApiMeta.makeRemote(childCtx);
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
                    const remoteApi = outObj.deferredApiMeta.makeRemote(childCtx);
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
                    const remoteApi = outObj.deferredApiMeta.makeRemote(childCtx);
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
                    const remoteApi = outObj.deferredApiMeta.makeRemote(childCtx);
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
                    const remoteApi = outObj.deferredApiMeta.makeRemote(childCtx);
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
                    const remoteApi = outObj.deferredApiMeta.makeRemote(childCtx);
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
                    const remoteApi = outObj.deferredApiMeta.makeRemote(childCtx);
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
    serialize(sCtx_818: MetaContext, obj_819: ClientApiUnsafeSendSafeApiDataMultiArguments, _out_820: DataOut): void  {
        _out_820.writeByte(obj_819.backId);
        LoginClientStream.META.serialize(sCtx_818, obj_819.data, _out_820);
        
    }
    deserialize(sCtx_818: MetaContext, in__821: DataIn): ClientApiUnsafeSendSafeApiDataMultiArguments  {
        try  {
            let backId_822: number;
            let data_823: LoginClientStream;
            backId_822 = in__821.readByte();
            data_823 = LoginClientStream.META.deserialize(sCtx_818, in__821);
            return new ClientApiUnsafeSendSafeApiDataMultiArguments(backId_822, data_823);
            
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
    serialize(sCtx_824: MetaContext, obj_825: ClientApiUnsafeSendSafeApiDataArguments, _out_826: DataOut): void  {
        LoginClientStream.META.serialize(sCtx_824, obj_825.data, _out_826);
        
    }
    deserialize(sCtx_824: MetaContext, in__827: DataIn): ClientApiUnsafeSendSafeApiDataArguments  {
        try  {
            let data_828: LoginClientStream;
            data_828 = LoginClientStream.META.deserialize(sCtx_824, in__827);
            return new ClientApiUnsafeSendSafeApiDataArguments(data_828);
            
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
                    let backId_830: number;
                    let data_831: LoginClientStream;
                    backId_830 = dataIn.readByte();
                    data_831 = LoginClientStream.META.deserialize(ctx, dataIn);
                    const argsObject_832 = new ClientApiUnsafeSendSafeApiDataMultiArguments(backId_830, data_831);
                    const argsNames_833: string[] = ["backId", "data"];
                    const argsValues_834: any[] = [backId_830, data_831];
                    ctx.invokeLocalMethodBefore("sendSafeApiDataMulti", argsNames_833, argsValues_834);
                    (typeof (localApi as any).sendSafeApiDataMultiArguments === "function" ? (localApi as any).sendSafeApiDataMultiArguments(argsObject_832) : localApi.sendSafeApiDataMulti(backId_830, data_831));
                    ctx.invokeLocalMethodAfter("sendSafeApiDataMulti", null, argsNames_833, argsValues_834);
                    break;
                    
                }
                case 4:  {
                    let data_836: LoginClientStream;
                    data_836 = LoginClientStream.META.deserialize(ctx, dataIn);
                    const argsObject_837 = new ClientApiUnsafeSendSafeApiDataArguments(data_836);
                    const argsNames_838: string[] = ["data"];
                    const argsValues_839: any[] = [data_836];
                    ctx.invokeLocalMethodBefore("sendSafeApiData", argsNames_838, argsValues_839);
                    (typeof (localApi as any).sendSafeApiDataArguments === "function" ? (localApi as any).sendSafeApiDataArguments(argsObject_837) : localApi.sendSafeApiData(data_836));
                    ctx.invokeLocalMethodAfter("sendSafeApiData", null, argsNames_838, argsValues_839);
                    break;
                    
                }
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
            const switchedMeta = ctx.applyLocalApiSwitch();
            if (switchedMeta !== null)  {
                if (dataIn.isReadable())  {
                    switchedMeta.makeLocal(ctx, dataIn);
                    
                }
                return;
                
            }
            
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ClientApiUnsafe): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_840: MetaContext): ClientApiUnsafeRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_840.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_840.flush();
                
            }
            , getFastMetaContext: () => sCtx_840, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_840.makeRemote(meta), sendSafeApiDataMulti: (backId: number, data: LoginClientStream): void =>  {
                const dataOut_842 = new DataInOut();
                dataOut_842.writeByte(3);
                const argsNames_844: string[] = ["backId", "data"];
                const argsValues_845: any[] = [backId, data];
                sCtx_840.invokeRemoteMethodAfter("sendSafeApiDataMulti", null, argsNames_844, argsValues_845);
                dataOut_842.writeByte(backId);
                LoginClientStream.META.serialize(sCtx_840, data, dataOut_842);
                sCtx_840.sendToRemote(dataOut_842.toArray());
                
            }
            , sendSafeApiData: (data: LoginClientStream): void =>  {
                const dataOut_847 = new DataInOut();
                dataOut_847.writeByte(4);
                const argsNames_849: string[] = ["data"];
                const argsValues_850: any[] = [data];
                sCtx_840.invokeRemoteMethodAfter("sendSafeApiData", null, argsNames_849, argsValues_850);
                LoginClientStream.META.serialize(sCtx_840, data, dataOut_847);
                sCtx_840.sendToRemote(dataOut_847.toArray());
                
            }
            , openSendSafeApiDataMulti(backId: number, factory: (api: ClientApiSafeRemote) => any, converter: BytesConverter, ...keys: any[]): ClientApiSafeRemote  {
                return sCtx_840.findContext(ctx =>  {
                    ctx.onFlushData(data => this.sendSafeApiDataMulti(backId, LoginClientStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((ClientApiSafe as any).META));
                    
                }
                , ...keys).makeRemote((ClientApiSafe as any).META) as ClientApiSafeRemote;
                
            }
            , openSendSafeApiData(factory: (api: ClientApiSafeRemote) => any, converter: BytesConverter, ...keys: any[]): ClientApiSafeRemote  {
                return sCtx_840.findContext(ctx =>  {
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
    serialize(sCtx_851: MetaContext, obj_852: ClientApiSafeChangeParentArguments, _out_853: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_851, obj_852.uid, _out_853);
        
    }
    deserialize(sCtx_851: MetaContext, in__854: DataIn): ClientApiSafeChangeParentArguments  {
        try  {
            let uid_855: UUID;
            uid_855 = FastMeta.META_UUID.deserialize(sCtx_851, in__854);
            return new ClientApiSafeChangeParentArguments(uid_855);
            
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
    serialize(sCtx_856: MetaContext, obj_857: ClientApiSafeChangeAliasArguments, _out_858: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_856, obj_857.alias, _out_858);
        
    }
    deserialize(sCtx_856: MetaContext, in__859: DataIn): ClientApiSafeChangeAliasArguments  {
        try  {
            let alias_860: UUID;
            alias_860 = FastMeta.META_UUID.deserialize(sCtx_856, in__859);
            return new ClientApiSafeChangeAliasArguments(alias_860);
            
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
    serialize(sCtx_861: MetaContext, obj_862: ClientApiSafeNewChildrenArguments, _out_863: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_863, obj_862.uids.length);
        for (const el_865 of obj_862.uids)  {
            FastMeta.META_UUID.serialize(sCtx_861, el_865, _out_863);
            
        }
        
    }
    deserialize(sCtx_861: MetaContext, in__864: DataIn): ClientApiSafeNewChildrenArguments  {
        try  {
            let uids_866: UUID[];
            const len_868 = Number(DeserializerPackNumber.INSTANCE.put(in__864));
            uids_866 = new Array<UUID>(len_868);
            for (let idx_867 = 0;
            idx_867 < len_868;
            idx_867++)  {
                uids_866[idx_867] = FastMeta.META_UUID.deserialize(sCtx_861, in__864);
                
            }
            return new ClientApiSafeNewChildrenArguments(uids_866);
            
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
    serialize(sCtx_869: MetaContext, obj_870: ClientApiSafeSendMessagesArguments, _out_871: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_871, obj_870.msg.length);
        for (const el_873 of obj_870.msg)  {
            Message.META.serialize(sCtx_869, el_873, _out_871);
            
        }
        
    }
    deserialize(sCtx_869: MetaContext, in__872: DataIn): ClientApiSafeSendMessagesArguments  {
        try  {
            let msg_874: Message[];
            const len_876 = Number(DeserializerPackNumber.INSTANCE.put(in__872));
            msg_874 = new Array<Message>(len_876);
            for (let idx_875 = 0;
            idx_875 < len_876;
            idx_875++)  {
                msg_874[idx_875] = Message.META.deserialize(sCtx_869, in__872);
                
            }
            return new ClientApiSafeSendMessagesArguments(msg_874);
            
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
    serialize(sCtx_877: MetaContext, obj_878: ClientApiSafeSendServerDescriptorArguments, _out_879: DataOut): void  {
        ServerDescriptor.META.serialize(sCtx_877, obj_878.serverDescriptor, _out_879);
        
    }
    deserialize(sCtx_877: MetaContext, in__880: DataIn): ClientApiSafeSendServerDescriptorArguments  {
        try  {
            let serverDescriptor_881: ServerDescriptor;
            serverDescriptor_881 = ServerDescriptor.META.deserialize(sCtx_877, in__880);
            return new ClientApiSafeSendServerDescriptorArguments(serverDescriptor_881);
            
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
    serialize(sCtx_882: MetaContext, obj_883: ClientApiSafeSendServerDescriptorsArguments, _out_884: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_884, obj_883.serverDescriptors.length);
        for (const el_886 of obj_883.serverDescriptors)  {
            ServerDescriptor.META.serialize(sCtx_882, el_886, _out_884);
            
        }
        
    }
    deserialize(sCtx_882: MetaContext, in__885: DataIn): ClientApiSafeSendServerDescriptorsArguments  {
        try  {
            let serverDescriptors_887: ServerDescriptor[];
            const len_889 = Number(DeserializerPackNumber.INSTANCE.put(in__885));
            serverDescriptors_887 = new Array<ServerDescriptor>(len_889);
            for (let idx_888 = 0;
            idx_888 < len_889;
            idx_888++)  {
                serverDescriptors_887[idx_888] = ServerDescriptor.META.deserialize(sCtx_882, in__885);
                
            }
            return new ClientApiSafeSendServerDescriptorsArguments(serverDescriptors_887);
            
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
    serialize(sCtx_890: MetaContext, obj_891: ClientApiSafeSendCloudArguments, _out_892: DataOut): void  {
        UUIDAndCloud.META.serialize(sCtx_890, obj_891.uidAndCloud, _out_892);
        
    }
    deserialize(sCtx_890: MetaContext, in__893: DataIn): ClientApiSafeSendCloudArguments  {
        try  {
            let uidAndCloud_894: UUIDAndCloud;
            uidAndCloud_894 = UUIDAndCloud.META.deserialize(sCtx_890, in__893);
            return new ClientApiSafeSendCloudArguments(uidAndCloud_894);
            
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
    serialize(sCtx_895: MetaContext, obj_896: ClientApiSafeSendCloudsArguments, _out_897: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_897, obj_896.clouds.length);
        for (const el_899 of obj_896.clouds)  {
            UUIDAndCloud.META.serialize(sCtx_895, el_899, _out_897);
            
        }
        
    }
    deserialize(sCtx_895: MetaContext, in__898: DataIn): ClientApiSafeSendCloudsArguments  {
        try  {
            let clouds_900: UUIDAndCloud[];
            const len_902 = Number(DeserializerPackNumber.INSTANCE.put(in__898));
            clouds_900 = new Array<UUIDAndCloud>(len_902);
            for (let idx_901 = 0;
            idx_901 < len_902;
            idx_901++)  {
                clouds_900[idx_901] = UUIDAndCloud.META.deserialize(sCtx_895, in__898);
                
            }
            return new ClientApiSafeSendCloudsArguments(clouds_900);
            
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
    serialize(sCtx_903: MetaContext, obj_905: ClientApiSafeRequestTelemetryArguments, _out_906: DataOut): void  {
        
    }
    deserialize(sCtx_904: MetaContext, in__907: DataIn): ClientApiSafeRequestTelemetryArguments  {
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
    serialize(sCtx_908: MetaContext, obj_909: ClientApiSafeSendAccessGroupsArguments, _out_910: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_910, obj_909.groups.length);
        for (const el_912 of obj_909.groups)  {
            AccessGroup.META.serialize(sCtx_908, el_912, _out_910);
            
        }
        
    }
    deserialize(sCtx_908: MetaContext, in__911: DataIn): ClientApiSafeSendAccessGroupsArguments  {
        try  {
            let groups_913: AccessGroup[];
            const len_915 = Number(DeserializerPackNumber.INSTANCE.put(in__911));
            groups_913 = new Array<AccessGroup>(len_915);
            for (let idx_914 = 0;
            idx_914 < len_915;
            idx_914++)  {
                groups_913[idx_914] = AccessGroup.META.deserialize(sCtx_908, in__911);
                
            }
            return new ClientApiSafeSendAccessGroupsArguments(groups_913);
            
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
    serialize(sCtx_916: MetaContext, obj_917: ClientApiSafeSendAccessGroupForClientArguments, _out_918: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_916, obj_917.uid, _out_918);
        SerializerPackNumber.INSTANCE.put(_out_918, obj_917.groups.length);
        for (const el_920 of obj_917.groups)  {
            FastMeta.META_UUID.serialize(sCtx_916, el_920, _out_918);
            
        }
        
    }
    deserialize(sCtx_916: MetaContext, in__919: DataIn): ClientApiSafeSendAccessGroupForClientArguments  {
        try  {
            let uid_921: UUID;
            let groups_922: UUID[];
            uid_921 = FastMeta.META_UUID.deserialize(sCtx_916, in__919);
            const len_924 = Number(DeserializerPackNumber.INSTANCE.put(in__919));
            groups_922 = new Array<UUID>(len_924);
            for (let idx_923 = 0;
            idx_923 < len_924;
            idx_923++)  {
                groups_922[idx_923] = FastMeta.META_UUID.deserialize(sCtx_916, in__919);
                
            }
            return new ClientApiSafeSendAccessGroupForClientArguments(uid_921, groups_922);
            
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
    serialize(sCtx_925: MetaContext, obj_926: ClientApiSafeAddItemsToAccessGroupArguments, _out_927: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_925, obj_926.id, _out_927);
        SerializerPackNumber.INSTANCE.put(_out_927, obj_926.groups.length);
        for (const el_929 of obj_926.groups)  {
            FastMeta.META_UUID.serialize(sCtx_925, el_929, _out_927);
            
        }
        
    }
    deserialize(sCtx_925: MetaContext, in__928: DataIn): ClientApiSafeAddItemsToAccessGroupArguments  {
        try  {
            let id_930: UUID;
            let groups_931: UUID[];
            id_930 = FastMeta.META_UUID.deserialize(sCtx_925, in__928);
            const len_933 = Number(DeserializerPackNumber.INSTANCE.put(in__928));
            groups_931 = new Array<UUID>(len_933);
            for (let idx_932 = 0;
            idx_932 < len_933;
            idx_932++)  {
                groups_931[idx_932] = FastMeta.META_UUID.deserialize(sCtx_925, in__928);
                
            }
            return new ClientApiSafeAddItemsToAccessGroupArguments(id_930, groups_931);
            
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
    serialize(sCtx_934: MetaContext, obj_935: ClientApiSafeRemoveItemsFromAccessGroupArguments, _out_936: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_934, obj_935.id, _out_936);
        SerializerPackNumber.INSTANCE.put(_out_936, obj_935.groups.length);
        for (const el_938 of obj_935.groups)  {
            FastMeta.META_UUID.serialize(sCtx_934, el_938, _out_936);
            
        }
        
    }
    deserialize(sCtx_934: MetaContext, in__937: DataIn): ClientApiSafeRemoveItemsFromAccessGroupArguments  {
        try  {
            let id_939: UUID;
            let groups_940: UUID[];
            id_939 = FastMeta.META_UUID.deserialize(sCtx_934, in__937);
            const len_942 = Number(DeserializerPackNumber.INSTANCE.put(in__937));
            groups_940 = new Array<UUID>(len_942);
            for (let idx_941 = 0;
            idx_941 < len_942;
            idx_941++)  {
                groups_940[idx_941] = FastMeta.META_UUID.deserialize(sCtx_934, in__937);
                
            }
            return new ClientApiSafeRemoveItemsFromAccessGroupArguments(id_939, groups_940);
            
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
    serialize(sCtx_943: MetaContext, obj_944: ClientApiSafeAddAccessGroupsToClientArguments, _out_945: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_943, obj_944.uid, _out_945);
        SerializerPackNumber.INSTANCE.put(_out_945, obj_944.groups.length);
        for (const el_947 of obj_944.groups)  {
            FastMeta.META_UUID.serialize(sCtx_943, el_947, _out_945);
            
        }
        
    }
    deserialize(sCtx_943: MetaContext, in__946: DataIn): ClientApiSafeAddAccessGroupsToClientArguments  {
        try  {
            let uid_948: UUID;
            let groups_949: UUID[];
            uid_948 = FastMeta.META_UUID.deserialize(sCtx_943, in__946);
            const len_951 = Number(DeserializerPackNumber.INSTANCE.put(in__946));
            groups_949 = new Array<UUID>(len_951);
            for (let idx_950 = 0;
            idx_950 < len_951;
            idx_950++)  {
                groups_949[idx_950] = FastMeta.META_UUID.deserialize(sCtx_943, in__946);
                
            }
            return new ClientApiSafeAddAccessGroupsToClientArguments(uid_948, groups_949);
            
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
    serialize(sCtx_952: MetaContext, obj_953: ClientApiSafeRemoveAccessGroupsFromClientArguments, _out_954: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_952, obj_953.uid, _out_954);
        SerializerPackNumber.INSTANCE.put(_out_954, obj_953.groups.length);
        for (const el_956 of obj_953.groups)  {
            FastMeta.META_UUID.serialize(sCtx_952, el_956, _out_954);
            
        }
        
    }
    deserialize(sCtx_952: MetaContext, in__955: DataIn): ClientApiSafeRemoveAccessGroupsFromClientArguments  {
        try  {
            let uid_957: UUID;
            let groups_958: UUID[];
            uid_957 = FastMeta.META_UUID.deserialize(sCtx_952, in__955);
            const len_960 = Number(DeserializerPackNumber.INSTANCE.put(in__955));
            groups_958 = new Array<UUID>(len_960);
            for (let idx_959 = 0;
            idx_959 < len_960;
            idx_959++)  {
                groups_958[idx_959] = FastMeta.META_UUID.deserialize(sCtx_952, in__955);
                
            }
            return new ClientApiSafeRemoveAccessGroupsFromClientArguments(uid_957, groups_958);
            
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
    serialize(sCtx_961: MetaContext, obj_962: ClientApiSafeSendAllAccessedClientsArguments, _out_963: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_961, obj_962.uid, _out_963);
        SerializerPackNumber.INSTANCE.put(_out_963, obj_962.accessedClients.length);
        for (const el_965 of obj_962.accessedClients)  {
            FastMeta.META_UUID.serialize(sCtx_961, el_965, _out_963);
            
        }
        
    }
    deserialize(sCtx_961: MetaContext, in__964: DataIn): ClientApiSafeSendAllAccessedClientsArguments  {
        try  {
            let uid_966: UUID;
            let accessedClients_967: UUID[];
            uid_966 = FastMeta.META_UUID.deserialize(sCtx_961, in__964);
            const len_969 = Number(DeserializerPackNumber.INSTANCE.put(in__964));
            accessedClients_967 = new Array<UUID>(len_969);
            for (let idx_968 = 0;
            idx_968 < len_969;
            idx_968++)  {
                accessedClients_967[idx_968] = FastMeta.META_UUID.deserialize(sCtx_961, in__964);
                
            }
            return new ClientApiSafeSendAllAccessedClientsArguments(uid_966, accessedClients_967);
            
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
    serialize(sCtx_970: MetaContext, obj_971: ClientApiSafeSendAccessCheckResultsArguments, _out_972: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_972, obj_971.results.length);
        for (const el_974 of obj_971.results)  {
            AccessCheckResult.META.serialize(sCtx_970, el_974, _out_972);
            
        }
        
    }
    deserialize(sCtx_970: MetaContext, in__973: DataIn): ClientApiSafeSendAccessCheckResultsArguments  {
        try  {
            let results_975: AccessCheckResult[];
            const len_977 = Number(DeserializerPackNumber.INSTANCE.put(in__973));
            results_975 = new Array<AccessCheckResult>(len_977);
            for (let idx_976 = 0;
            idx_976 < len_977;
            idx_976++)  {
                results_975[idx_976] = AccessCheckResult.META.deserialize(sCtx_970, in__973);
                
            }
            return new ClientApiSafeSendAccessCheckResultsArguments(results_975);
            
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
    serialize(sCtx_978: MetaContext, obj_979: ClientApiSafeSendMessageArguments, _out_980: DataOut): void  {
        Message.META.serialize(sCtx_978, obj_979.msg, _out_980);
        
    }
    deserialize(sCtx_978: MetaContext, in__981: DataIn): ClientApiSafeSendMessageArguments  {
        try  {
            let msg_982: Message;
            msg_982 = Message.META.deserialize(sCtx_978, in__981);
            return new ClientApiSafeSendMessageArguments(msg_982);
            
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
    serialize(sCtx_983: MetaContext, obj_984: ClientApiSafeSendCloudConfigsArguments, _out_985: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_985, obj_984.configs.length);
        for (const el_987 of obj_984.configs)  {
            CloudConfig.META.serialize(sCtx_983, el_987, _out_985);
            
        }
        
    }
    deserialize(sCtx_983: MetaContext, in__986: DataIn): ClientApiSafeSendCloudConfigsArguments  {
        try  {
            let configs_988: CloudConfig[];
            const len_990 = Number(DeserializerPackNumber.INSTANCE.put(in__986));
            configs_988 = new Array<CloudConfig>(len_990);
            for (let idx_989 = 0;
            idx_989 < len_990;
            idx_989++)  {
                configs_988[idx_989] = CloudConfig.META.deserialize(sCtx_983, in__986);
                
            }
            return new ClientApiSafeSendCloudConfigsArguments(configs_988);
            
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
    serialize(sCtx_991: MetaContext, obj_992: ClientApiSafeClientInteractionArguments, _out_993: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_991, obj_992.uid, _out_993);
        ClientInteractionClientStream.META.serialize(sCtx_991, obj_992.stream, _out_993);
        
    }
    deserialize(sCtx_991: MetaContext, in__994: DataIn): ClientApiSafeClientInteractionArguments  {
        try  {
            let uid_995: UUID;
            let stream_996: ClientInteractionClientStream;
            uid_995 = FastMeta.META_UUID.deserialize(sCtx_991, in__994);
            stream_996 = ClientInteractionClientStream.META.deserialize(sCtx_991, in__994);
            return new ClientApiSafeClientInteractionArguments(uid_995, stream_996);
            
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
export class ClientApiSafeProbeReportArgumentsMetaBodyImpl implements FastMetaType<ClientApiSafeProbeReportArguments>  {
    serialize(sCtx_997: MetaContext, obj_998: ClientApiSafeProbeReportArguments, _out_999: DataOut): void  {
        ProbeReport.META.serialize(sCtx_997, obj_998.report, _out_999);
        
    }
    deserialize(sCtx_997: MetaContext, in__1000: DataIn): ClientApiSafeProbeReportArguments  {
        try  {
            let report_1001: ProbeReport;
            report_1001 = ProbeReport.META.deserialize(sCtx_997, in__1000);
            return new ClientApiSafeProbeReportArguments(report_1001);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: ClientApiSafeProbeReportArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + ProbeReport.META.metaHashCode(obj.report);
        return hash | 0;
        
    }
    metaEquals(v1: ClientApiSafeProbeReportArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientApiSafeProbeReportArguments)) return false;
        if (!ProbeReport.META.metaEquals(v1.report, v2.report)) return false;
        return true;
        
    }
    metaToString(obj: ClientApiSafeProbeReportArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('ClientApiSafeProbeReportArguments(');
        res.add('report:').add(obj.report);
        res.add(')');
        
    }
    public serializeToBytes(obj: ClientApiSafeProbeReportArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): ClientApiSafeProbeReportArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): ClientApiSafeProbeReportArguments  {
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
                    let uid_1003: UUID;
                    uid_1003 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1004 = new ClientApiSafeChangeParentArguments(uid_1003);
                    const argsNames_1005: string[] = ["uid"];
                    const argsValues_1006: any[] = [uid_1003];
                    ctx.invokeLocalMethodBefore("changeParent", argsNames_1005, argsValues_1006);
                    (typeof (localApi as any).changeParentArguments === "function" ? (localApi as any).changeParentArguments(argsObject_1004) : localApi.changeParent(uid_1003));
                    ctx.invokeLocalMethodAfter("changeParent", null, argsNames_1005, argsValues_1006);
                    break;
                    
                }
                case 4:  {
                    let alias_1008: UUID;
                    alias_1008 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1009 = new ClientApiSafeChangeAliasArguments(alias_1008);
                    const argsNames_1010: string[] = ["alias"];
                    const argsValues_1011: any[] = [alias_1008];
                    ctx.invokeLocalMethodBefore("changeAlias", argsNames_1010, argsValues_1011);
                    (typeof (localApi as any).changeAliasArguments === "function" ? (localApi as any).changeAliasArguments(argsObject_1009) : localApi.changeAlias(alias_1008));
                    ctx.invokeLocalMethodAfter("changeAlias", null, argsNames_1010, argsValues_1011);
                    break;
                    
                }
                case 5:  {
                    let uids_1013: UUID[];
                    const len_1015 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1013 = new Array<UUID>(len_1015);
                    for (let idx_1014 = 0;
                    idx_1014 < len_1015;
                    idx_1014++)  {
                        uids_1013[idx_1014] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1016 = new ClientApiSafeNewChildrenArguments(uids_1013);
                    const argsNames_1017: string[] = ["uids"];
                    const argsValues_1018: any[] = [uids_1013];
                    ctx.invokeLocalMethodBefore("newChildren", argsNames_1017, argsValues_1018);
                    (typeof (localApi as any).newChildrenArguments === "function" ? (localApi as any).newChildrenArguments(argsObject_1016) : localApi.newChildren(uids_1013));
                    ctx.invokeLocalMethodAfter("newChildren", null, argsNames_1017, argsValues_1018);
                    break;
                    
                }
                case 6:  {
                    let msg_1020: Message[];
                    const len_1022 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_1020 = new Array<Message>(len_1022);
                    for (let idx_1021 = 0;
                    idx_1021 < len_1022;
                    idx_1021++)  {
                        msg_1020[idx_1021] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1023 = new ClientApiSafeSendMessagesArguments(msg_1020);
                    const argsNames_1024: string[] = ["msg"];
                    const argsValues_1025: any[] = [msg_1020];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_1024, argsValues_1025);
                    (typeof (localApi as any).sendMessagesArguments === "function" ? (localApi as any).sendMessagesArguments(argsObject_1023) : localApi.sendMessages(msg_1020));
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_1024, argsValues_1025);
                    break;
                    
                }
                case 7:  {
                    let serverDescriptor_1027: ServerDescriptor;
                    serverDescriptor_1027 = ServerDescriptor.META.deserialize(ctx, dataIn);
                    const argsObject_1028 = new ClientApiSafeSendServerDescriptorArguments(serverDescriptor_1027);
                    const argsNames_1029: string[] = ["serverDescriptor"];
                    const argsValues_1030: any[] = [serverDescriptor_1027];
                    ctx.invokeLocalMethodBefore("sendServerDescriptor", argsNames_1029, argsValues_1030);
                    (typeof (localApi as any).sendServerDescriptorArguments === "function" ? (localApi as any).sendServerDescriptorArguments(argsObject_1028) : localApi.sendServerDescriptor(serverDescriptor_1027));
                    ctx.invokeLocalMethodAfter("sendServerDescriptor", null, argsNames_1029, argsValues_1030);
                    break;
                    
                }
                case 8:  {
                    let serverDescriptors_1032: ServerDescriptor[];
                    const len_1034 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    serverDescriptors_1032 = new Array<ServerDescriptor>(len_1034);
                    for (let idx_1033 = 0;
                    idx_1033 < len_1034;
                    idx_1033++)  {
                        serverDescriptors_1032[idx_1033] = ServerDescriptor.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1035 = new ClientApiSafeSendServerDescriptorsArguments(serverDescriptors_1032);
                    const argsNames_1036: string[] = ["serverDescriptors"];
                    const argsValues_1037: any[] = [serverDescriptors_1032];
                    ctx.invokeLocalMethodBefore("sendServerDescriptors", argsNames_1036, argsValues_1037);
                    (typeof (localApi as any).sendServerDescriptorsArguments === "function" ? (localApi as any).sendServerDescriptorsArguments(argsObject_1035) : localApi.sendServerDescriptors(serverDescriptors_1032));
                    ctx.invokeLocalMethodAfter("sendServerDescriptors", null, argsNames_1036, argsValues_1037);
                    break;
                    
                }
                case 9:  {
                    let uidAndCloud_1039: UUIDAndCloud;
                    uidAndCloud_1039 = UUIDAndCloud.META.deserialize(ctx, dataIn);
                    const argsObject_1040 = new ClientApiSafeSendCloudArguments(uidAndCloud_1039);
                    const argsNames_1041: string[] = ["uidAndCloud"];
                    const argsValues_1042: any[] = [uidAndCloud_1039];
                    ctx.invokeLocalMethodBefore("sendCloud", argsNames_1041, argsValues_1042);
                    (typeof (localApi as any).sendCloudArguments === "function" ? (localApi as any).sendCloudArguments(argsObject_1040) : localApi.sendCloud(uidAndCloud_1039));
                    ctx.invokeLocalMethodAfter("sendCloud", null, argsNames_1041, argsValues_1042);
                    break;
                    
                }
                case 10:  {
                    let clouds_1044: UUIDAndCloud[];
                    const len_1046 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    clouds_1044 = new Array<UUIDAndCloud>(len_1046);
                    for (let idx_1045 = 0;
                    idx_1045 < len_1046;
                    idx_1045++)  {
                        clouds_1044[idx_1045] = UUIDAndCloud.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1047 = new ClientApiSafeSendCloudsArguments(clouds_1044);
                    const argsNames_1048: string[] = ["clouds"];
                    const argsValues_1049: any[] = [clouds_1044];
                    ctx.invokeLocalMethodBefore("sendClouds", argsNames_1048, argsValues_1049);
                    (typeof (localApi as any).sendCloudsArguments === "function" ? (localApi as any).sendCloudsArguments(argsObject_1047) : localApi.sendClouds(clouds_1044));
                    ctx.invokeLocalMethodAfter("sendClouds", null, argsNames_1048, argsValues_1049);
                    break;
                    
                }
                case 11:  {
                    const argsObject_1051 = new ClientApiSafeRequestTelemetryArguments();
                    const argsNames_1052: string[] = [];
                    const argsValues_1053: any[] = [];
                    ctx.invokeLocalMethodBefore("requestTelemetry", argsNames_1052, argsValues_1053);
                    (typeof (localApi as any).requestTelemetryArguments === "function" ? (localApi as any).requestTelemetryArguments(argsObject_1051) : localApi.requestTelemetry());
                    ctx.invokeLocalMethodAfter("requestTelemetry", null, argsNames_1052, argsValues_1053);
                    break;
                    
                }
                case 12:  {
                    let groups_1055: AccessGroup[];
                    const len_1057 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1055 = new Array<AccessGroup>(len_1057);
                    for (let idx_1056 = 0;
                    idx_1056 < len_1057;
                    idx_1056++)  {
                        groups_1055[idx_1056] = AccessGroup.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1058 = new ClientApiSafeSendAccessGroupsArguments(groups_1055);
                    const argsNames_1059: string[] = ["groups"];
                    const argsValues_1060: any[] = [groups_1055];
                    ctx.invokeLocalMethodBefore("sendAccessGroups", argsNames_1059, argsValues_1060);
                    (typeof (localApi as any).sendAccessGroupsArguments === "function" ? (localApi as any).sendAccessGroupsArguments(argsObject_1058) : localApi.sendAccessGroups(groups_1055));
                    ctx.invokeLocalMethodAfter("sendAccessGroups", null, argsNames_1059, argsValues_1060);
                    break;
                    
                }
                case 13:  {
                    let uid_1062: UUID;
                    let groups_1063: UUID[];
                    uid_1062 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1065 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1063 = new Array<UUID>(len_1065);
                    for (let idx_1064 = 0;
                    idx_1064 < len_1065;
                    idx_1064++)  {
                        groups_1063[idx_1064] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1066 = new ClientApiSafeSendAccessGroupForClientArguments(uid_1062, groups_1063);
                    const argsNames_1067: string[] = ["uid", "groups"];
                    const argsValues_1068: any[] = [uid_1062, groups_1063];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_1067, argsValues_1068);
                    (typeof (localApi as any).sendAccessGroupForClientArguments === "function" ? (localApi as any).sendAccessGroupForClientArguments(argsObject_1066) : localApi.sendAccessGroupForClient(uid_1062, groups_1063));
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_1067, argsValues_1068);
                    break;
                    
                }
                case 14:  {
                    let id_1070: UUID;
                    let groups_1071: UUID[];
                    id_1070 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1073 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1071 = new Array<UUID>(len_1073);
                    for (let idx_1072 = 0;
                    idx_1072 < len_1073;
                    idx_1072++)  {
                        groups_1071[idx_1072] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1074 = new ClientApiSafeAddItemsToAccessGroupArguments(id_1070, groups_1071);
                    const argsNames_1075: string[] = ["id", "groups"];
                    const argsValues_1076: any[] = [id_1070, groups_1071];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_1075, argsValues_1076);
                    (typeof (localApi as any).addItemsToAccessGroupArguments === "function" ? (localApi as any).addItemsToAccessGroupArguments(argsObject_1074) : localApi.addItemsToAccessGroup(id_1070, groups_1071));
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_1075, argsValues_1076);
                    break;
                    
                }
                case 15:  {
                    let id_1078: UUID;
                    let groups_1079: UUID[];
                    id_1078 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1081 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1079 = new Array<UUID>(len_1081);
                    for (let idx_1080 = 0;
                    idx_1080 < len_1081;
                    idx_1080++)  {
                        groups_1079[idx_1080] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1082 = new ClientApiSafeRemoveItemsFromAccessGroupArguments(id_1078, groups_1079);
                    const argsNames_1083: string[] = ["id", "groups"];
                    const argsValues_1084: any[] = [id_1078, groups_1079];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_1083, argsValues_1084);
                    (typeof (localApi as any).removeItemsFromAccessGroupArguments === "function" ? (localApi as any).removeItemsFromAccessGroupArguments(argsObject_1082) : localApi.removeItemsFromAccessGroup(id_1078, groups_1079));
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_1083, argsValues_1084);
                    break;
                    
                }
                case 16:  {
                    let uid_1086: UUID;
                    let groups_1087: UUID[];
                    uid_1086 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1089 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1087 = new Array<UUID>(len_1089);
                    for (let idx_1088 = 0;
                    idx_1088 < len_1089;
                    idx_1088++)  {
                        groups_1087[idx_1088] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1090 = new ClientApiSafeAddAccessGroupsToClientArguments(uid_1086, groups_1087);
                    const argsNames_1091: string[] = ["uid", "groups"];
                    const argsValues_1092: any[] = [uid_1086, groups_1087];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_1091, argsValues_1092);
                    (typeof (localApi as any).addAccessGroupsToClientArguments === "function" ? (localApi as any).addAccessGroupsToClientArguments(argsObject_1090) : localApi.addAccessGroupsToClient(uid_1086, groups_1087));
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_1091, argsValues_1092);
                    break;
                    
                }
                case 17:  {
                    let uid_1094: UUID;
                    let groups_1095: UUID[];
                    uid_1094 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1097 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1095 = new Array<UUID>(len_1097);
                    for (let idx_1096 = 0;
                    idx_1096 < len_1097;
                    idx_1096++)  {
                        groups_1095[idx_1096] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1098 = new ClientApiSafeRemoveAccessGroupsFromClientArguments(uid_1094, groups_1095);
                    const argsNames_1099: string[] = ["uid", "groups"];
                    const argsValues_1100: any[] = [uid_1094, groups_1095];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_1099, argsValues_1100);
                    (typeof (localApi as any).removeAccessGroupsFromClientArguments === "function" ? (localApi as any).removeAccessGroupsFromClientArguments(argsObject_1098) : localApi.removeAccessGroupsFromClient(uid_1094, groups_1095));
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_1099, argsValues_1100);
                    break;
                    
                }
                case 18:  {
                    let uid_1102: UUID;
                    let accessedClients_1103: UUID[];
                    uid_1102 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1105 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    accessedClients_1103 = new Array<UUID>(len_1105);
                    for (let idx_1104 = 0;
                    idx_1104 < len_1105;
                    idx_1104++)  {
                        accessedClients_1103[idx_1104] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1106 = new ClientApiSafeSendAllAccessedClientsArguments(uid_1102, accessedClients_1103);
                    const argsNames_1107: string[] = ["uid", "accessedClients"];
                    const argsValues_1108: any[] = [uid_1102, accessedClients_1103];
                    ctx.invokeLocalMethodBefore("sendAllAccessedClients", argsNames_1107, argsValues_1108);
                    (typeof (localApi as any).sendAllAccessedClientsArguments === "function" ? (localApi as any).sendAllAccessedClientsArguments(argsObject_1106) : localApi.sendAllAccessedClients(uid_1102, accessedClients_1103));
                    ctx.invokeLocalMethodAfter("sendAllAccessedClients", null, argsNames_1107, argsValues_1108);
                    break;
                    
                }
                case 19:  {
                    let results_1110: AccessCheckResult[];
                    const len_1112 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    results_1110 = new Array<AccessCheckResult>(len_1112);
                    for (let idx_1111 = 0;
                    idx_1111 < len_1112;
                    idx_1111++)  {
                        results_1110[idx_1111] = AccessCheckResult.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1113 = new ClientApiSafeSendAccessCheckResultsArguments(results_1110);
                    const argsNames_1114: string[] = ["results"];
                    const argsValues_1115: any[] = [results_1110];
                    ctx.invokeLocalMethodBefore("sendAccessCheckResults", argsNames_1114, argsValues_1115);
                    (typeof (localApi as any).sendAccessCheckResultsArguments === "function" ? (localApi as any).sendAccessCheckResultsArguments(argsObject_1113) : localApi.sendAccessCheckResults(results_1110));
                    ctx.invokeLocalMethodAfter("sendAccessCheckResults", null, argsNames_1114, argsValues_1115);
                    break;
                    
                }
                case 20:  {
                    let msg_1117: Message;
                    msg_1117 = Message.META.deserialize(ctx, dataIn);
                    const argsObject_1118 = new ClientApiSafeSendMessageArguments(msg_1117);
                    const argsNames_1119: string[] = ["msg"];
                    const argsValues_1120: any[] = [msg_1117];
                    ctx.invokeLocalMethodBefore("sendMessage", argsNames_1119, argsValues_1120);
                    (typeof (localApi as any).sendMessageArguments === "function" ? (localApi as any).sendMessageArguments(argsObject_1118) : localApi.sendMessage(msg_1117));
                    ctx.invokeLocalMethodAfter("sendMessage", null, argsNames_1119, argsValues_1120);
                    break;
                    
                }
                case 21:  {
                    let configs_1122: CloudConfig[];
                    const len_1124 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    configs_1122 = new Array<CloudConfig>(len_1124);
                    for (let idx_1123 = 0;
                    idx_1123 < len_1124;
                    idx_1123++)  {
                        configs_1122[idx_1123] = CloudConfig.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1125 = new ClientApiSafeSendCloudConfigsArguments(configs_1122);
                    const argsNames_1126: string[] = ["configs"];
                    const argsValues_1127: any[] = [configs_1122];
                    ctx.invokeLocalMethodBefore("sendCloudConfigs", argsNames_1126, argsValues_1127);
                    (typeof (localApi as any).sendCloudConfigsArguments === "function" ? (localApi as any).sendCloudConfigsArguments(argsObject_1125) : localApi.sendCloudConfigs(configs_1122));
                    ctx.invokeLocalMethodAfter("sendCloudConfigs", null, argsNames_1126, argsValues_1127);
                    break;
                    
                }
                case 22:  {
                    let uid_1129: UUID;
                    let stream_1130: ClientInteractionClientStream;
                    uid_1129 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    stream_1130 = ClientInteractionClientStream.META.deserialize(ctx, dataIn);
                    const argsObject_1131 = new ClientApiSafeClientInteractionArguments(uid_1129, stream_1130);
                    const argsNames_1132: string[] = ["uid", "stream"];
                    const argsValues_1133: any[] = [uid_1129, stream_1130];
                    ctx.invokeLocalMethodBefore("clientInteraction", argsNames_1132, argsValues_1133);
                    (typeof (localApi as any).clientInteractionArguments === "function" ? (localApi as any).clientInteractionArguments(argsObject_1131) : localApi.clientInteraction(uid_1129, stream_1130));
                    ctx.invokeLocalMethodAfter("clientInteraction", null, argsNames_1132, argsValues_1133);
                    break;
                    
                }
                case 23:  {
                    let report_1135: ProbeReport;
                    report_1135 = ProbeReport.META.deserialize(ctx, dataIn);
                    const argsObject_1136 = new ClientApiSafeProbeReportArguments(report_1135);
                    const argsNames_1137: string[] = ["report"];
                    const argsValues_1138: any[] = [report_1135];
                    ctx.invokeLocalMethodBefore("probeReport", argsNames_1137, argsValues_1138);
                    (typeof (localApi as any).probeReportArguments === "function" ? (localApi as any).probeReportArguments(argsObject_1136) : localApi.probeReport(report_1135));
                    ctx.invokeLocalMethodAfter("probeReport", null, argsNames_1137, argsValues_1138);
                    break;
                    
                }
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
            const switchedMeta = ctx.applyLocalApiSwitch();
            if (switchedMeta !== null)  {
                if (dataIn.isReadable())  {
                    switchedMeta.makeLocal(ctx, dataIn);
                    
                }
                return;
                
            }
            
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ClientApiSafe): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1139: MetaContext): ClientApiSafeRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_1139.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_1139.flush();
                
            }
            , getFastMetaContext: () => sCtx_1139, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_1139.makeRemote(meta), changeParent: (uid: UUID): void =>  {
                const dataOut_1141 = new DataInOut();
                dataOut_1141.writeByte(3);
                const argsNames_1143: string[] = ["uid"];
                const argsValues_1144: any[] = [uid];
                sCtx_1139.invokeRemoteMethodAfter("changeParent", null, argsNames_1143, argsValues_1144);
                FastMeta.META_UUID.serialize(sCtx_1139, uid, dataOut_1141);
                sCtx_1139.sendToRemote(dataOut_1141.toArray());
                
            }
            , changeAlias: (alias: UUID): void =>  {
                const dataOut_1146 = new DataInOut();
                dataOut_1146.writeByte(4);
                const argsNames_1148: string[] = ["alias"];
                const argsValues_1149: any[] = [alias];
                sCtx_1139.invokeRemoteMethodAfter("changeAlias", null, argsNames_1148, argsValues_1149);
                FastMeta.META_UUID.serialize(sCtx_1139, alias, dataOut_1146);
                sCtx_1139.sendToRemote(dataOut_1146.toArray());
                
            }
            , newChildren: (uids: UUID[]): void =>  {
                const dataOut_1151 = new DataInOut();
                dataOut_1151.writeByte(5);
                const argsNames_1153: string[] = ["uids"];
                const argsValues_1154: any[] = [uids];
                sCtx_1139.invokeRemoteMethodAfter("newChildren", null, argsNames_1153, argsValues_1154);
                SerializerPackNumber.INSTANCE.put(dataOut_1151, uids.length);
                for (const el_1155 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1139, el_1155, dataOut_1151);
                    
                }
                sCtx_1139.sendToRemote(dataOut_1151.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_1157 = new DataInOut();
                dataOut_1157.writeByte(6);
                const argsNames_1159: string[] = ["msg"];
                const argsValues_1160: any[] = [msg];
                sCtx_1139.invokeRemoteMethodAfter("sendMessages", null, argsNames_1159, argsValues_1160);
                SerializerPackNumber.INSTANCE.put(dataOut_1157, msg.length);
                for (const el_1161 of msg)  {
                    Message.META.serialize(sCtx_1139, el_1161, dataOut_1157);
                    
                }
                sCtx_1139.sendToRemote(dataOut_1157.toArray());
                
            }
            , sendServerDescriptor: (serverDescriptor: ServerDescriptor): void =>  {
                const dataOut_1163 = new DataInOut();
                dataOut_1163.writeByte(7);
                const argsNames_1165: string[] = ["serverDescriptor"];
                const argsValues_1166: any[] = [serverDescriptor];
                sCtx_1139.invokeRemoteMethodAfter("sendServerDescriptor", null, argsNames_1165, argsValues_1166);
                ServerDescriptor.META.serialize(sCtx_1139, serverDescriptor, dataOut_1163);
                sCtx_1139.sendToRemote(dataOut_1163.toArray());
                
            }
            , sendServerDescriptors: (serverDescriptors: ServerDescriptor[]): void =>  {
                const dataOut_1168 = new DataInOut();
                dataOut_1168.writeByte(8);
                const argsNames_1170: string[] = ["serverDescriptors"];
                const argsValues_1171: any[] = [serverDescriptors];
                sCtx_1139.invokeRemoteMethodAfter("sendServerDescriptors", null, argsNames_1170, argsValues_1171);
                SerializerPackNumber.INSTANCE.put(dataOut_1168, serverDescriptors.length);
                for (const el_1172 of serverDescriptors)  {
                    ServerDescriptor.META.serialize(sCtx_1139, el_1172, dataOut_1168);
                    
                }
                sCtx_1139.sendToRemote(dataOut_1168.toArray());
                
            }
            , sendCloud: (uidAndCloud: UUIDAndCloud): void =>  {
                const dataOut_1174 = new DataInOut();
                dataOut_1174.writeByte(9);
                const argsNames_1176: string[] = ["uidAndCloud"];
                const argsValues_1177: any[] = [uidAndCloud];
                sCtx_1139.invokeRemoteMethodAfter("sendCloud", null, argsNames_1176, argsValues_1177);
                UUIDAndCloud.META.serialize(sCtx_1139, uidAndCloud, dataOut_1174);
                sCtx_1139.sendToRemote(dataOut_1174.toArray());
                
            }
            , sendClouds: (clouds: UUIDAndCloud[]): void =>  {
                const dataOut_1179 = new DataInOut();
                dataOut_1179.writeByte(10);
                const argsNames_1181: string[] = ["clouds"];
                const argsValues_1182: any[] = [clouds];
                sCtx_1139.invokeRemoteMethodAfter("sendClouds", null, argsNames_1181, argsValues_1182);
                SerializerPackNumber.INSTANCE.put(dataOut_1179, clouds.length);
                for (const el_1183 of clouds)  {
                    UUIDAndCloud.META.serialize(sCtx_1139, el_1183, dataOut_1179);
                    
                }
                sCtx_1139.sendToRemote(dataOut_1179.toArray());
                
            }
            , requestTelemetry: (): void =>  {
                const dataOut_1185 = new DataInOut();
                dataOut_1185.writeByte(11);
                const argsNames_1187: string[] = [];
                const argsValues_1188: any[] = [];
                sCtx_1139.invokeRemoteMethodAfter("requestTelemetry", null, argsNames_1187, argsValues_1188);
                sCtx_1139.sendToRemote(dataOut_1185.toArray());
                
            }
            , sendAccessGroups: (groups: AccessGroup[]): void =>  {
                const dataOut_1190 = new DataInOut();
                dataOut_1190.writeByte(12);
                const argsNames_1192: string[] = ["groups"];
                const argsValues_1193: any[] = [groups];
                sCtx_1139.invokeRemoteMethodAfter("sendAccessGroups", null, argsNames_1192, argsValues_1193);
                SerializerPackNumber.INSTANCE.put(dataOut_1190, groups.length);
                for (const el_1194 of groups)  {
                    AccessGroup.META.serialize(sCtx_1139, el_1194, dataOut_1190);
                    
                }
                sCtx_1139.sendToRemote(dataOut_1190.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_1196 = new DataInOut();
                dataOut_1196.writeByte(13);
                const argsNames_1198: string[] = ["uid", "groups"];
                const argsValues_1199: any[] = [uid, groups];
                sCtx_1139.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_1198, argsValues_1199);
                FastMeta.META_UUID.serialize(sCtx_1139, uid, dataOut_1196);
                SerializerPackNumber.INSTANCE.put(dataOut_1196, groups.length);
                for (const el_1200 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1139, el_1200, dataOut_1196);
                    
                }
                sCtx_1139.sendToRemote(dataOut_1196.toArray());
                
            }
            , addItemsToAccessGroup: (id: UUID, groups: UUID[]): void =>  {
                const dataOut_1202 = new DataInOut();
                dataOut_1202.writeByte(14);
                const argsNames_1204: string[] = ["id", "groups"];
                const argsValues_1205: any[] = [id, groups];
                sCtx_1139.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_1204, argsValues_1205);
                FastMeta.META_UUID.serialize(sCtx_1139, id, dataOut_1202);
                SerializerPackNumber.INSTANCE.put(dataOut_1202, groups.length);
                for (const el_1206 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1139, el_1206, dataOut_1202);
                    
                }
                sCtx_1139.sendToRemote(dataOut_1202.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: UUID, groups: UUID[]): void =>  {
                const dataOut_1208 = new DataInOut();
                dataOut_1208.writeByte(15);
                const argsNames_1210: string[] = ["id", "groups"];
                const argsValues_1211: any[] = [id, groups];
                sCtx_1139.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_1210, argsValues_1211);
                FastMeta.META_UUID.serialize(sCtx_1139, id, dataOut_1208);
                SerializerPackNumber.INSTANCE.put(dataOut_1208, groups.length);
                for (const el_1212 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1139, el_1212, dataOut_1208);
                    
                }
                sCtx_1139.sendToRemote(dataOut_1208.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_1214 = new DataInOut();
                dataOut_1214.writeByte(16);
                const argsNames_1216: string[] = ["uid", "groups"];
                const argsValues_1217: any[] = [uid, groups];
                sCtx_1139.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_1216, argsValues_1217);
                FastMeta.META_UUID.serialize(sCtx_1139, uid, dataOut_1214);
                SerializerPackNumber.INSTANCE.put(dataOut_1214, groups.length);
                for (const el_1218 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1139, el_1218, dataOut_1214);
                    
                }
                sCtx_1139.sendToRemote(dataOut_1214.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_1220 = new DataInOut();
                dataOut_1220.writeByte(17);
                const argsNames_1222: string[] = ["uid", "groups"];
                const argsValues_1223: any[] = [uid, groups];
                sCtx_1139.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_1222, argsValues_1223);
                FastMeta.META_UUID.serialize(sCtx_1139, uid, dataOut_1220);
                SerializerPackNumber.INSTANCE.put(dataOut_1220, groups.length);
                for (const el_1224 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1139, el_1224, dataOut_1220);
                    
                }
                sCtx_1139.sendToRemote(dataOut_1220.toArray());
                
            }
            , sendAllAccessedClients: (uid: UUID, accessedClients: UUID[]): void =>  {
                const dataOut_1226 = new DataInOut();
                dataOut_1226.writeByte(18);
                const argsNames_1228: string[] = ["uid", "accessedClients"];
                const argsValues_1229: any[] = [uid, accessedClients];
                sCtx_1139.invokeRemoteMethodAfter("sendAllAccessedClients", null, argsNames_1228, argsValues_1229);
                FastMeta.META_UUID.serialize(sCtx_1139, uid, dataOut_1226);
                SerializerPackNumber.INSTANCE.put(dataOut_1226, accessedClients.length);
                for (const el_1230 of accessedClients)  {
                    FastMeta.META_UUID.serialize(sCtx_1139, el_1230, dataOut_1226);
                    
                }
                sCtx_1139.sendToRemote(dataOut_1226.toArray());
                
            }
            , sendAccessCheckResults: (results: AccessCheckResult[]): void =>  {
                const dataOut_1232 = new DataInOut();
                dataOut_1232.writeByte(19);
                const argsNames_1234: string[] = ["results"];
                const argsValues_1235: any[] = [results];
                sCtx_1139.invokeRemoteMethodAfter("sendAccessCheckResults", null, argsNames_1234, argsValues_1235);
                SerializerPackNumber.INSTANCE.put(dataOut_1232, results.length);
                for (const el_1236 of results)  {
                    AccessCheckResult.META.serialize(sCtx_1139, el_1236, dataOut_1232);
                    
                }
                sCtx_1139.sendToRemote(dataOut_1232.toArray());
                
            }
            , sendMessage: (msg: Message): void =>  {
                const dataOut_1238 = new DataInOut();
                dataOut_1238.writeByte(20);
                const argsNames_1240: string[] = ["msg"];
                const argsValues_1241: any[] = [msg];
                sCtx_1139.invokeRemoteMethodAfter("sendMessage", null, argsNames_1240, argsValues_1241);
                Message.META.serialize(sCtx_1139, msg, dataOut_1238);
                sCtx_1139.sendToRemote(dataOut_1238.toArray());
                
            }
            , sendCloudConfigs: (configs: CloudConfig[]): void =>  {
                const dataOut_1243 = new DataInOut();
                dataOut_1243.writeByte(21);
                const argsNames_1245: string[] = ["configs"];
                const argsValues_1246: any[] = [configs];
                sCtx_1139.invokeRemoteMethodAfter("sendCloudConfigs", null, argsNames_1245, argsValues_1246);
                SerializerPackNumber.INSTANCE.put(dataOut_1243, configs.length);
                for (const el_1247 of configs)  {
                    CloudConfig.META.serialize(sCtx_1139, el_1247, dataOut_1243);
                    
                }
                sCtx_1139.sendToRemote(dataOut_1243.toArray());
                
            }
            , clientInteraction: (uid: UUID, stream: ClientInteractionClientStream): void =>  {
                const dataOut_1249 = new DataInOut();
                dataOut_1249.writeByte(22);
                const argsNames_1251: string[] = ["uid", "stream"];
                const argsValues_1252: any[] = [uid, stream];
                sCtx_1139.invokeRemoteMethodAfter("clientInteraction", null, argsNames_1251, argsValues_1252);
                FastMeta.META_UUID.serialize(sCtx_1139, uid, dataOut_1249);
                ClientInteractionClientStream.META.serialize(sCtx_1139, stream, dataOut_1249);
                sCtx_1139.sendToRemote(dataOut_1249.toArray());
                
            }
            , probeReport: (report: ProbeReport): void =>  {
                const dataOut_1254 = new DataInOut();
                dataOut_1254.writeByte(23);
                const argsNames_1256: string[] = ["report"];
                const argsValues_1257: any[] = [report];
                sCtx_1139.invokeRemoteMethodAfter("probeReport", null, argsNames_1256, argsValues_1257);
                ProbeReport.META.serialize(sCtx_1139, report, dataOut_1254);
                sCtx_1139.sendToRemote(dataOut_1254.toArray());
                
            }
            , openClientInteraction(uid: UUID, factory: (api: ServerApiByUidClientRemote) => any, converter: BytesConverter, ...keys: any[]): ServerApiByUidClientRemote  {
                return sCtx_1139.findContext(ctx =>  {
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
            case 23: // probeReport
            return true;
            default: return false;
            
        }
        
    }
    
}
export class AuthorizedApiBackIdArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiBackIdArguments>  {
    serialize(sCtx_1258: MetaContext, obj_1259: AuthorizedApiBackIdArguments, _out_1260: DataOut): void  {
        _out_1260.writeByte(obj_1259.id);
        
    }
    deserialize(sCtx_1258: MetaContext, in__1261: DataIn): AuthorizedApiBackIdArguments  {
        try  {
            let id_1262: number;
            id_1262 = in__1261.readByte();
            return new AuthorizedApiBackIdArguments(id_1262);
            
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
    serialize(sCtx_1263: MetaContext, obj_1264: AuthorizedApiPingArguments, _out_1265: DataOut): void  {
        _out_1265.writeLong(obj_1264.nextConnectMsDuration);
        _out_1265.writeLong(obj_1264.rxWindowMs);
        
    }
    deserialize(sCtx_1263: MetaContext, in__1266: DataIn): AuthorizedApiPingArguments  {
        try  {
            let nextConnectMsDuration_1267: bigint;
            let rxWindowMs_1268: bigint;
            nextConnectMsDuration_1267 = in__1266.readLong();
            rxWindowMs_1268 = in__1266.readLong();
            return new AuthorizedApiPingArguments(nextConnectMsDuration_1267, rxWindowMs_1268);
            
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
    serialize(sCtx_1269: MetaContext, obj_1270: AuthorizedApiClientArguments, _out_1271: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1269, obj_1270.uid, _out_1271);
        ClientApiStream.META.serialize(sCtx_1269, obj_1270.stream, _out_1271);
        
    }
    deserialize(sCtx_1269: MetaContext, in__1272: DataIn): AuthorizedApiClientArguments  {
        try  {
            let uid_1273: UUID;
            let stream_1274: ClientApiStream;
            uid_1273 = FastMeta.META_UUID.deserialize(sCtx_1269, in__1272);
            stream_1274 = ClientApiStream.META.deserialize(sCtx_1269, in__1272);
            return new AuthorizedApiClientArguments(uid_1273, stream_1274);
            
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
    serialize(sCtx_1275: MetaContext, obj_1276: AuthorizedApiSendMessageArguments, _out_1277: DataOut): void  {
        Message.META.serialize(sCtx_1275, obj_1276.msg, _out_1277);
        
    }
    deserialize(sCtx_1275: MetaContext, in__1278: DataIn): AuthorizedApiSendMessageArguments  {
        try  {
            let msg_1279: Message;
            msg_1279 = Message.META.deserialize(sCtx_1275, in__1278);
            return new AuthorizedApiSendMessageArguments(msg_1279);
            
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
    serialize(sCtx_1280: MetaContext, obj_1281: AuthorizedApiSendMessagesArguments, _out_1282: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1282, obj_1281.msg.length);
        for (const el_1284 of obj_1281.msg)  {
            Message.META.serialize(sCtx_1280, el_1284, _out_1282);
            
        }
        
    }
    deserialize(sCtx_1280: MetaContext, in__1283: DataIn): AuthorizedApiSendMessagesArguments  {
        try  {
            let msg_1285: Message[];
            const len_1287 = Number(DeserializerPackNumber.INSTANCE.put(in__1283));
            msg_1285 = new Array<Message>(len_1287);
            for (let idx_1286 = 0;
            idx_1286 < len_1287;
            idx_1286++)  {
                msg_1285[idx_1286] = Message.META.deserialize(sCtx_1280, in__1283);
                
            }
            return new AuthorizedApiSendMessagesArguments(msg_1285);
            
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
    serialize(sCtx_1288: MetaContext, obj_1289: AuthorizedApiSendMulticastArguments, _out_1290: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1290, obj_1289.uids.length);
        for (const el_1292 of obj_1289.uids)  {
            FastMeta.META_UUID.serialize(sCtx_1288, el_1292, _out_1290);
            
        }
        SerializerPackNumber.INSTANCE.put(_out_1290, obj_1289.data.length);
        _out_1290.write(obj_1289.data);
        
    }
    deserialize(sCtx_1288: MetaContext, in__1291: DataIn): AuthorizedApiSendMulticastArguments  {
        try  {
            let uids_1294: UUID[];
            let data_1295: Uint8Array;
            const len_1297 = Number(DeserializerPackNumber.INSTANCE.put(in__1291));
            uids_1294 = new Array<UUID>(len_1297);
            for (let idx_1296 = 0;
            idx_1296 < len_1297;
            idx_1296++)  {
                uids_1294[idx_1296] = FastMeta.META_UUID.deserialize(sCtx_1288, in__1291);
                
            }
            const len_1299 = Number(DeserializerPackNumber.INSTANCE.put(in__1291));
            const bytes_1300 = in__1291.readBytes(len_1299);
            data_1295 = bytes_1300;
            return new AuthorizedApiSendMulticastArguments(uids_1294, data_1295);
            
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
    serialize(sCtx_1301: MetaContext, obj_1302: AuthorizedApiSendMessageWithResultArguments, _out_1303: DataOut): void  {
        Message.META.serialize(sCtx_1301, obj_1302.msg, _out_1303);
        
    }
    deserialize(sCtx_1301: MetaContext, in__1304: DataIn): AuthorizedApiSendMessageWithResultArguments  {
        try  {
            let msg_1305: Message;
            msg_1305 = Message.META.deserialize(sCtx_1301, in__1304);
            return new AuthorizedApiSendMessageWithResultArguments(msg_1305);
            
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
    serialize(sCtx_1306: MetaContext, obj_1307: AuthorizedApiCreateAccessGroupArguments, _out_1308: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1306, obj_1307.owner, _out_1308);
        SerializerPackNumber.INSTANCE.put(_out_1308, obj_1307.uids.length);
        for (const el_1310 of obj_1307.uids)  {
            FastMeta.META_UUID.serialize(sCtx_1306, el_1310, _out_1308);
            
        }
        
    }
    deserialize(sCtx_1306: MetaContext, in__1309: DataIn): AuthorizedApiCreateAccessGroupArguments  {
        try  {
            let owner_1311: UUID;
            let uids_1312: UUID[];
            owner_1311 = FastMeta.META_UUID.deserialize(sCtx_1306, in__1309);
            const len_1314 = Number(DeserializerPackNumber.INSTANCE.put(in__1309));
            uids_1312 = new Array<UUID>(len_1314);
            for (let idx_1313 = 0;
            idx_1313 < len_1314;
            idx_1313++)  {
                uids_1312[idx_1313] = FastMeta.META_UUID.deserialize(sCtx_1306, in__1309);
                
            }
            return new AuthorizedApiCreateAccessGroupArguments(owner_1311, uids_1312);
            
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
    serialize(sCtx_1315: MetaContext, obj_1316: AuthorizedApiAddToAccessGroupArguments, _out_1317: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1315, obj_1316.groupId, _out_1317);
        FastMeta.META_UUID.serialize(sCtx_1315, obj_1316.uid, _out_1317);
        
    }
    deserialize(sCtx_1315: MetaContext, in__1318: DataIn): AuthorizedApiAddToAccessGroupArguments  {
        try  {
            let groupId_1319: UUID;
            let uid_1320: UUID;
            groupId_1319 = FastMeta.META_UUID.deserialize(sCtx_1315, in__1318);
            uid_1320 = FastMeta.META_UUID.deserialize(sCtx_1315, in__1318);
            return new AuthorizedApiAddToAccessGroupArguments(groupId_1319, uid_1320);
            
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
    serialize(sCtx_1321: MetaContext, obj_1322: AuthorizedApiRemoveFromAccessGroupArguments, _out_1323: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1321, obj_1322.groupId, _out_1323);
        FastMeta.META_UUID.serialize(sCtx_1321, obj_1322.uid, _out_1323);
        
    }
    deserialize(sCtx_1321: MetaContext, in__1324: DataIn): AuthorizedApiRemoveFromAccessGroupArguments  {
        try  {
            let groupId_1325: UUID;
            let uid_1326: UUID;
            groupId_1325 = FastMeta.META_UUID.deserialize(sCtx_1321, in__1324);
            uid_1326 = FastMeta.META_UUID.deserialize(sCtx_1321, in__1324);
            return new AuthorizedApiRemoveFromAccessGroupArguments(groupId_1325, uid_1326);
            
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
    serialize(sCtx_1327: MetaContext, obj_1328: AuthorizedApiCheckAccessForSendMessageArguments, _out_1329: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1327, obj_1328.uid, _out_1329);
        
    }
    deserialize(sCtx_1327: MetaContext, in__1330: DataIn): AuthorizedApiCheckAccessForSendMessageArguments  {
        try  {
            let uid_1331: UUID;
            uid_1331 = FastMeta.META_UUID.deserialize(sCtx_1327, in__1330);
            return new AuthorizedApiCheckAccessForSendMessageArguments(uid_1331);
            
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
    serialize(sCtx_1332: MetaContext, obj_1333: AuthorizedApiResolverServersArguments, _out_1334: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1334, obj_1333.sid.length);
        for (const el_1336 of obj_1333.sid)  {
            _out_1334.writeShort(el_1336);
            
        }
        
    }
    deserialize(sCtx_1332: MetaContext, in__1335: DataIn): AuthorizedApiResolverServersArguments  {
        try  {
            let sid_1337: number[];
            const len_1339 = Number(DeserializerPackNumber.INSTANCE.put(in__1335));
            sid_1337 = new Array<number>(len_1339);
            for (let idx_1338 = 0;
            idx_1338 < len_1339;
            idx_1338++)  {
                sid_1337[idx_1338] = in__1335.readShort();
                
            }
            return new AuthorizedApiResolverServersArguments(sid_1337);
            
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
    serialize(sCtx_1340: MetaContext, obj_1341: AuthorizedApiResolveCloudsArguments, _out_1342: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1342, obj_1341.uids.length);
        for (const el_1344 of obj_1341.uids)  {
            FastMeta.META_UUID.serialize(sCtx_1340, el_1344, _out_1342);
            
        }
        
    }
    deserialize(sCtx_1340: MetaContext, in__1343: DataIn): AuthorizedApiResolveCloudsArguments  {
        try  {
            let uids_1345: UUID[];
            const len_1347 = Number(DeserializerPackNumber.INSTANCE.put(in__1343));
            uids_1345 = new Array<UUID>(len_1347);
            for (let idx_1346 = 0;
            idx_1346 < len_1347;
            idx_1346++)  {
                uids_1345[idx_1346] = FastMeta.META_UUID.deserialize(sCtx_1340, in__1343);
                
            }
            return new AuthorizedApiResolveCloudsArguments(uids_1345);
            
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
    serialize(sCtx_1348: MetaContext, obj_1349: AuthorizedApiReportAppliedConfigArguments, _out_1350: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1350, obj_1349.configs.length);
        for (const el_1352 of obj_1349.configs)  {
            AppliedConfig.META.serialize(sCtx_1348, el_1352, _out_1350);
            
        }
        
    }
    deserialize(sCtx_1348: MetaContext, in__1351: DataIn): AuthorizedApiReportAppliedConfigArguments  {
        try  {
            let configs_1353: AppliedConfig[];
            const len_1355 = Number(DeserializerPackNumber.INSTANCE.put(in__1351));
            configs_1353 = new Array<AppliedConfig>(len_1355);
            for (let idx_1354 = 0;
            idx_1354 < len_1355;
            idx_1354++)  {
                configs_1353[idx_1354] = AppliedConfig.META.deserialize(sCtx_1348, in__1351);
                
            }
            return new AuthorizedApiReportAppliedConfigArguments(configs_1353);
            
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
    serialize(sCtx_1356: MetaContext, obj_1357: AuthorizedApiGetAccessGroupsArguments, _out_1358: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1356, obj_1357.uid, _out_1358);
        
    }
    deserialize(sCtx_1356: MetaContext, in__1359: DataIn): AuthorizedApiGetAccessGroupsArguments  {
        try  {
            let uid_1360: UUID;
            uid_1360 = FastMeta.META_UUID.deserialize(sCtx_1356, in__1359);
            return new AuthorizedApiGetAccessGroupsArguments(uid_1360);
            
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
    serialize(sCtx_1361: MetaContext, obj_1362: AuthorizedApiGetAccessGroupArguments, _out_1363: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1361, obj_1362.groupId, _out_1363);
        
    }
    deserialize(sCtx_1361: MetaContext, in__1364: DataIn): AuthorizedApiGetAccessGroupArguments  {
        try  {
            let groupId_1365: UUID;
            groupId_1365 = FastMeta.META_UUID.deserialize(sCtx_1361, in__1364);
            return new AuthorizedApiGetAccessGroupArguments(groupId_1365);
            
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
    serialize(sCtx_1366: MetaContext, obj_1367: AuthorizedApiGetAllAccessedClientsArguments, _out_1368: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1366, obj_1367.uid, _out_1368);
        
    }
    deserialize(sCtx_1366: MetaContext, in__1369: DataIn): AuthorizedApiGetAllAccessedClientsArguments  {
        try  {
            let uid_1370: UUID;
            uid_1370 = FastMeta.META_UUID.deserialize(sCtx_1366, in__1369);
            return new AuthorizedApiGetAllAccessedClientsArguments(uid_1370);
            
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
    serialize(sCtx_1371: MetaContext, obj_1372: AuthorizedApiCheckAccessForSendMessage2Arguments, _out_1373: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1371, obj_1372.uid1, _out_1373);
        FastMeta.META_UUID.serialize(sCtx_1371, obj_1372.uid2, _out_1373);
        
    }
    deserialize(sCtx_1371: MetaContext, in__1374: DataIn): AuthorizedApiCheckAccessForSendMessage2Arguments  {
        try  {
            let uid1_1375: UUID;
            let uid2_1376: UUID;
            uid1_1375 = FastMeta.META_UUID.deserialize(sCtx_1371, in__1374);
            uid2_1376 = FastMeta.META_UUID.deserialize(sCtx_1371, in__1374);
            return new AuthorizedApiCheckAccessForSendMessage2Arguments(uid1_1375, uid2_1376);
            
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
    serialize(sCtx_1377: MetaContext, obj_1378: AuthorizedApiSendTelemetryArguments, _out_1379: DataOut): void  {
        Telemetry.META.serialize(sCtx_1377, obj_1378.telemetry, _out_1379);
        
    }
    deserialize(sCtx_1377: MetaContext, in__1380: DataIn): AuthorizedApiSendTelemetryArguments  {
        try  {
            let telemetry_1381: Telemetry;
            telemetry_1381 = Telemetry.META.deserialize(sCtx_1377, in__1380);
            return new AuthorizedApiSendTelemetryArguments(telemetry_1381);
            
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
    serialize(sCtx_1382: MetaContext, obj_1383: AuthorizedApiRequestAccessGroupsForClientsArguments, _out_1384: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1384, obj_1383.uids.length);
        for (const el_1386 of obj_1383.uids)  {
            FastMeta.META_UUID.serialize(sCtx_1382, el_1386, _out_1384);
            
        }
        
    }
    deserialize(sCtx_1382: MetaContext, in__1385: DataIn): AuthorizedApiRequestAccessGroupsForClientsArguments  {
        try  {
            let uids_1387: UUID[];
            const len_1389 = Number(DeserializerPackNumber.INSTANCE.put(in__1385));
            uids_1387 = new Array<UUID>(len_1389);
            for (let idx_1388 = 0;
            idx_1388 < len_1389;
            idx_1388++)  {
                uids_1387[idx_1388] = FastMeta.META_UUID.deserialize(sCtx_1382, in__1385);
                
            }
            return new AuthorizedApiRequestAccessGroupsForClientsArguments(uids_1387);
            
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
    serialize(sCtx_1390: MetaContext, obj_1391: AuthorizedApiRequestAccessGroupsItemsArguments, _out_1392: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1392, obj_1391.ids.length);
        for (const el_1394 of obj_1391.ids)  {
            FastMeta.META_UUID.serialize(sCtx_1390, el_1394, _out_1392);
            
        }
        
    }
    deserialize(sCtx_1390: MetaContext, in__1393: DataIn): AuthorizedApiRequestAccessGroupsItemsArguments  {
        try  {
            let ids_1395: UUID[];
            const len_1397 = Number(DeserializerPackNumber.INSTANCE.put(in__1393));
            ids_1395 = new Array<UUID>(len_1397);
            for (let idx_1396 = 0;
            idx_1396 < len_1397;
            idx_1396++)  {
                ids_1395[idx_1396] = FastMeta.META_UUID.deserialize(sCtx_1390, in__1393);
                
            }
            return new AuthorizedApiRequestAccessGroupsItemsArguments(ids_1395);
            
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
    serialize(sCtx_1398: MetaContext, obj_1399: AuthorizedApiSendAccessGroupForClientArguments, _out_1400: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1398, obj_1399.uid, _out_1400);
        SerializerPackNumber.INSTANCE.put(_out_1400, obj_1399.groups.length);
        for (const el_1402 of obj_1399.groups)  {
            FastMeta.META_UUID.serialize(sCtx_1398, el_1402, _out_1400);
            
        }
        
    }
    deserialize(sCtx_1398: MetaContext, in__1401: DataIn): AuthorizedApiSendAccessGroupForClientArguments  {
        try  {
            let uid_1403: UUID;
            let groups_1404: UUID[];
            uid_1403 = FastMeta.META_UUID.deserialize(sCtx_1398, in__1401);
            const len_1406 = Number(DeserializerPackNumber.INSTANCE.put(in__1401));
            groups_1404 = new Array<UUID>(len_1406);
            for (let idx_1405 = 0;
            idx_1405 < len_1406;
            idx_1405++)  {
                groups_1404[idx_1405] = FastMeta.META_UUID.deserialize(sCtx_1398, in__1401);
                
            }
            return new AuthorizedApiSendAccessGroupForClientArguments(uid_1403, groups_1404);
            
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
    serialize(sCtx_1407: MetaContext, obj_1408: AuthorizedApiAddItemsToAccessGroupArguments, _out_1409: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1407, obj_1408.id, _out_1409);
        SerializerPackNumber.INSTANCE.put(_out_1409, obj_1408.groups.length);
        for (const el_1411 of obj_1408.groups)  {
            FastMeta.META_UUID.serialize(sCtx_1407, el_1411, _out_1409);
            
        }
        
    }
    deserialize(sCtx_1407: MetaContext, in__1410: DataIn): AuthorizedApiAddItemsToAccessGroupArguments  {
        try  {
            let id_1412: UUID;
            let groups_1413: UUID[];
            id_1412 = FastMeta.META_UUID.deserialize(sCtx_1407, in__1410);
            const len_1415 = Number(DeserializerPackNumber.INSTANCE.put(in__1410));
            groups_1413 = new Array<UUID>(len_1415);
            for (let idx_1414 = 0;
            idx_1414 < len_1415;
            idx_1414++)  {
                groups_1413[idx_1414] = FastMeta.META_UUID.deserialize(sCtx_1407, in__1410);
                
            }
            return new AuthorizedApiAddItemsToAccessGroupArguments(id_1412, groups_1413);
            
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
    serialize(sCtx_1416: MetaContext, obj_1417: AuthorizedApiRemoveItemsFromAccessGroupArguments, _out_1418: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1416, obj_1417.id, _out_1418);
        SerializerPackNumber.INSTANCE.put(_out_1418, obj_1417.groups.length);
        for (const el_1420 of obj_1417.groups)  {
            FastMeta.META_UUID.serialize(sCtx_1416, el_1420, _out_1418);
            
        }
        
    }
    deserialize(sCtx_1416: MetaContext, in__1419: DataIn): AuthorizedApiRemoveItemsFromAccessGroupArguments  {
        try  {
            let id_1421: UUID;
            let groups_1422: UUID[];
            id_1421 = FastMeta.META_UUID.deserialize(sCtx_1416, in__1419);
            const len_1424 = Number(DeserializerPackNumber.INSTANCE.put(in__1419));
            groups_1422 = new Array<UUID>(len_1424);
            for (let idx_1423 = 0;
            idx_1423 < len_1424;
            idx_1423++)  {
                groups_1422[idx_1423] = FastMeta.META_UUID.deserialize(sCtx_1416, in__1419);
                
            }
            return new AuthorizedApiRemoveItemsFromAccessGroupArguments(id_1421, groups_1422);
            
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
    serialize(sCtx_1425: MetaContext, obj_1426: AuthorizedApiAddAccessGroupsToClientArguments, _out_1427: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1425, obj_1426.uid, _out_1427);
        SerializerPackNumber.INSTANCE.put(_out_1427, obj_1426.groups.length);
        for (const el_1429 of obj_1426.groups)  {
            FastMeta.META_UUID.serialize(sCtx_1425, el_1429, _out_1427);
            
        }
        
    }
    deserialize(sCtx_1425: MetaContext, in__1428: DataIn): AuthorizedApiAddAccessGroupsToClientArguments  {
        try  {
            let uid_1430: UUID;
            let groups_1431: UUID[];
            uid_1430 = FastMeta.META_UUID.deserialize(sCtx_1425, in__1428);
            const len_1433 = Number(DeserializerPackNumber.INSTANCE.put(in__1428));
            groups_1431 = new Array<UUID>(len_1433);
            for (let idx_1432 = 0;
            idx_1432 < len_1433;
            idx_1432++)  {
                groups_1431[idx_1432] = FastMeta.META_UUID.deserialize(sCtx_1425, in__1428);
                
            }
            return new AuthorizedApiAddAccessGroupsToClientArguments(uid_1430, groups_1431);
            
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
    serialize(sCtx_1434: MetaContext, obj_1435: AuthorizedApiRemoveAccessGroupsFromClientArguments, _out_1436: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1434, obj_1435.uid, _out_1436);
        SerializerPackNumber.INSTANCE.put(_out_1436, obj_1435.groups.length);
        for (const el_1438 of obj_1435.groups)  {
            FastMeta.META_UUID.serialize(sCtx_1434, el_1438, _out_1436);
            
        }
        
    }
    deserialize(sCtx_1434: MetaContext, in__1437: DataIn): AuthorizedApiRemoveAccessGroupsFromClientArguments  {
        try  {
            let uid_1439: UUID;
            let groups_1440: UUID[];
            uid_1439 = FastMeta.META_UUID.deserialize(sCtx_1434, in__1437);
            const len_1442 = Number(DeserializerPackNumber.INSTANCE.put(in__1437));
            groups_1440 = new Array<UUID>(len_1442);
            for (let idx_1441 = 0;
            idx_1441 < len_1442;
            idx_1441++)  {
                groups_1440[idx_1441] = FastMeta.META_UUID.deserialize(sCtx_1434, in__1437);
                
            }
            return new AuthorizedApiRemoveAccessGroupsFromClientArguments(uid_1439, groups_1440);
            
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
    serialize(sCtx_1443: MetaContext, obj_1444: AuthorizedApiRequestAllAccessedClientsArguments, _out_1445: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1445, obj_1444.uids.length);
        for (const el_1447 of obj_1444.uids)  {
            FastMeta.META_UUID.serialize(sCtx_1443, el_1447, _out_1445);
            
        }
        
    }
    deserialize(sCtx_1443: MetaContext, in__1446: DataIn): AuthorizedApiRequestAllAccessedClientsArguments  {
        try  {
            let uids_1448: UUID[];
            const len_1450 = Number(DeserializerPackNumber.INSTANCE.put(in__1446));
            uids_1448 = new Array<UUID>(len_1450);
            for (let idx_1449 = 0;
            idx_1449 < len_1450;
            idx_1449++)  {
                uids_1448[idx_1449] = FastMeta.META_UUID.deserialize(sCtx_1443, in__1446);
                
            }
            return new AuthorizedApiRequestAllAccessedClientsArguments(uids_1448);
            
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
    serialize(sCtx_1451: MetaContext, obj_1452: AuthorizedApiRequestAccessCheckArguments, _out_1453: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_1453, obj_1452.requests.length);
        for (const el_1455 of obj_1452.requests)  {
            AccessCheckPair.META.serialize(sCtx_1451, el_1455, _out_1453);
            
        }
        
    }
    deserialize(sCtx_1451: MetaContext, in__1454: DataIn): AuthorizedApiRequestAccessCheckArguments  {
        try  {
            let requests_1456: AccessCheckPair[];
            const len_1458 = Number(DeserializerPackNumber.INSTANCE.put(in__1454));
            requests_1456 = new Array<AccessCheckPair>(len_1458);
            for (let idx_1457 = 0;
            idx_1457 < len_1458;
            idx_1457++)  {
                requests_1456[idx_1457] = AccessCheckPair.META.deserialize(sCtx_1451, in__1454);
                
            }
            return new AuthorizedApiRequestAccessCheckArguments(requests_1456);
            
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
    serialize(sCtx_1459: MetaContext, obj_1460: AuthorizedApiGetClientActivityArguments, _out_1461: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1459, obj_1460.uid, _out_1461);
        _out_1461.writeLong(obj_1460.fromTime);
        _out_1461.writeLong(obj_1460.toTime);
        _out_1461.writeInt(obj_1460.limit);
        
    }
    deserialize(sCtx_1459: MetaContext, in__1462: DataIn): AuthorizedApiGetClientActivityArguments  {
        try  {
            let uid_1463: UUID;
            let fromTime_1464: bigint;
            let toTime_1465: bigint;
            let limit_1466: number;
            uid_1463 = FastMeta.META_UUID.deserialize(sCtx_1459, in__1462);
            fromTime_1464 = in__1462.readLong();
            toTime_1465 = in__1462.readLong();
            limit_1466 = in__1462.readInt();
            return new AuthorizedApiGetClientActivityArguments(uid_1463, fromTime_1464, toTime_1465, limit_1466);
            
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
    serialize(sCtx_1467: MetaContext, obj_1468: AuthorizedApiSearchClientLogsArguments, _out_1469: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1467, obj_1468.uid, _out_1469);
        const stringBytes_1471 = new TextEncoder().encode(obj_1468.query);
        SerializerPackNumber.INSTANCE.put(_out_1469, stringBytes_1471.length);
        _out_1469.write(stringBytes_1471);
        _out_1469.writeInt(obj_1468.limit);
        
    }
    deserialize(sCtx_1467: MetaContext, in__1470: DataIn): AuthorizedApiSearchClientLogsArguments  {
        try  {
            let uid_1473: UUID;
            let query_1474: string;
            let limit_1475: number;
            uid_1473 = FastMeta.META_UUID.deserialize(sCtx_1467, in__1470);
            let stringBytes_1476: Uint8Array;
            const len_1478 = Number(DeserializerPackNumber.INSTANCE.put(in__1470));
            const bytes_1479 = in__1470.readBytes(len_1478);
            stringBytes_1476 = bytes_1479;
            query_1474 = new TextDecoder('utf-8').decode(stringBytes_1476);
            limit_1475 = in__1470.readInt();
            return new AuthorizedApiSearchClientLogsArguments(uid_1473, query_1474, limit_1475);
            
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
    serialize(sCtx_1480: MetaContext, obj_1481: AuthorizedApiGetClientConnectionsArguments, _out_1482: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1480, obj_1481.uid, _out_1482);
        _out_1482.writeInt(obj_1481.limit);
        
    }
    deserialize(sCtx_1480: MetaContext, in__1483: DataIn): AuthorizedApiGetClientConnectionsArguments  {
        try  {
            let uid_1484: UUID;
            let limit_1485: number;
            uid_1484 = FastMeta.META_UUID.deserialize(sCtx_1480, in__1483);
            limit_1485 = in__1483.readInt();
            return new AuthorizedApiGetClientConnectionsArguments(uid_1484, limit_1485);
            
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
    serialize(sCtx_1486: MetaContext, obj_1487: AuthorizedApiGetClientMessagesArguments, _out_1488: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1486, obj_1487.uid, _out_1488);
        _out_1488.writeLong(obj_1487.fromTime);
        _out_1488.writeLong(obj_1487.toTime);
        _out_1488.writeInt(obj_1487.limit);
        
    }
    deserialize(sCtx_1486: MetaContext, in__1489: DataIn): AuthorizedApiGetClientMessagesArguments  {
        try  {
            let uid_1490: UUID;
            let fromTime_1491: bigint;
            let toTime_1492: bigint;
            let limit_1493: number;
            uid_1490 = FastMeta.META_UUID.deserialize(sCtx_1486, in__1489);
            fromTime_1491 = in__1489.readLong();
            toTime_1492 = in__1489.readLong();
            limit_1493 = in__1489.readInt();
            return new AuthorizedApiGetClientMessagesArguments(uid_1490, fromTime_1491, toTime_1492, limit_1493);
            
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
    serialize(sCtx_1494: MetaContext, obj_1495: AuthorizedApiSetNextReadDelayArguments, _out_1496: DataOut): void  {
        _out_1496.writeLong(obj_1495.delayMillis);
        
    }
    deserialize(sCtx_1494: MetaContext, in__1497: DataIn): AuthorizedApiSetNextReadDelayArguments  {
        try  {
            let delayMillis_1498: bigint;
            delayMillis_1498 = in__1497.readLong();
            return new AuthorizedApiSetNextReadDelayArguments(delayMillis_1498);
            
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
    serialize(sCtx_1499: MetaContext, obj_1500: AuthorizedApiGetUapArguments, _out_1501: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1499, obj_1500.uid, _out_1501);
        
    }
    deserialize(sCtx_1499: MetaContext, in__1502: DataIn): AuthorizedApiGetUapArguments  {
        try  {
            let uid_1503: UUID;
            uid_1503 = FastMeta.META_UUID.deserialize(sCtx_1499, in__1502);
            return new AuthorizedApiGetUapArguments(uid_1503);
            
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
    serialize(sCtx_1504: MetaContext, obj_1505: AuthorizedApiRequestWebRtcSessionArguments, _out_1506: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1504, obj_1505.uid, _out_1506);
        
    }
    deserialize(sCtx_1504: MetaContext, in__1507: DataIn): AuthorizedApiRequestWebRtcSessionArguments  {
        try  {
            let uid_1508: UUID;
            uid_1508 = FastMeta.META_UUID.deserialize(sCtx_1504, in__1507);
            return new AuthorizedApiRequestWebRtcSessionArguments(uid_1508);
            
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
    serialize(sCtx_1509: MetaContext, obj_1510: AuthorizedApiPublishWebRtcSessionArguments, _out_1511: DataOut): void  {
        WebRtcSession.META.serialize(sCtx_1509, obj_1510.session, _out_1511);
        
    }
    deserialize(sCtx_1509: MetaContext, in__1512: DataIn): AuthorizedApiPublishWebRtcSessionArguments  {
        try  {
            let session_1513: WebRtcSession;
            session_1513 = WebRtcSession.META.deserialize(sCtx_1509, in__1512);
            return new AuthorizedApiPublishWebRtcSessionArguments(session_1513);
            
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
    serialize(sCtx_1514: MetaContext, obj_1516: AuthorizedApiSelfDestructArguments, _out_1517: DataOut): void  {
        
    }
    deserialize(sCtx_1515: MetaContext, in__1518: DataIn): AuthorizedApiSelfDestructArguments  {
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
    serialize(sCtx_1519: MetaContext, obj_1521: AuthorizedApiGetServersArguments, _out_1522: DataOut): void  {
        
    }
    deserialize(sCtx_1520: MetaContext, in__1523: DataIn): AuthorizedApiGetServersArguments  {
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
export class AuthorizedApiGetClientTimingArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiGetClientTimingArguments>  {
    serialize(sCtx_1524: MetaContext, obj_1525: AuthorizedApiGetClientTimingArguments, _out_1526: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_1524, obj_1525.uid, _out_1526);
        
    }
    deserialize(sCtx_1524: MetaContext, in__1527: DataIn): AuthorizedApiGetClientTimingArguments  {
        try  {
            let uid_1528: UUID;
            uid_1528 = FastMeta.META_UUID.deserialize(sCtx_1524, in__1527);
            return new AuthorizedApiGetClientTimingArguments(uid_1528);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiGetClientTimingArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_UUID.metaHashCode(obj.uid);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiGetClientTimingArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiGetClientTimingArguments)) return false;
        if (!FastMeta.META_UUID.metaEquals(v1.uid, v2.uid)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiGetClientTimingArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiGetClientTimingArguments(');
        res.add('uid:').add(obj.uid);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiGetClientTimingArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiGetClientTimingArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiGetClientTimingArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiOpenReceiveWindowArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiOpenReceiveWindowArguments>  {
    serialize(sCtx_1529: MetaContext, obj_1530: AuthorizedApiOpenReceiveWindowArguments, _out_1531: DataOut): void  {
        _out_1531.writeLong(obj_1530.durationMs);
        
    }
    deserialize(sCtx_1529: MetaContext, in__1532: DataIn): AuthorizedApiOpenReceiveWindowArguments  {
        try  {
            let durationMs_1533: bigint;
            durationMs_1533 = in__1532.readLong();
            return new AuthorizedApiOpenReceiveWindowArguments(durationMs_1533);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiOpenReceiveWindowArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.durationMs);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiOpenReceiveWindowArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiOpenReceiveWindowArguments)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.durationMs, v2.durationMs)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiOpenReceiveWindowArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiOpenReceiveWindowArguments(');
        res.add('durationMs:').add(obj.durationMs);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiOpenReceiveWindowArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiOpenReceiveWindowArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiOpenReceiveWindowArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiSwitchVersionArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiSwitchVersionArguments>  {
    serialize(sCtx_1534: MetaContext, obj_1535: AuthorizedApiSwitchVersionArguments, _out_1536: DataOut): void  {
        _out_1536.writeInt(obj_1535.version);
        
    }
    deserialize(sCtx_1534: MetaContext, in__1537: DataIn): AuthorizedApiSwitchVersionArguments  {
        try  {
            let version_1538: number;
            version_1538 = in__1537.readInt();
            return new AuthorizedApiSwitchVersionArguments(version_1538);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiSwitchVersionArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.version);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiSwitchVersionArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiSwitchVersionArguments)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.version, v2.version)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiSwitchVersionArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiSwitchVersionArguments(');
        res.add('version:').add(obj.version);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiSwitchVersionArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiSwitchVersionArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiSwitchVersionArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiSetReceiveWindowArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiSetReceiveWindowArguments>  {
    serialize(sCtx_1539: MetaContext, obj_1540: AuthorizedApiSetReceiveWindowArguments, _out_1541: DataOut): void  {
        _out_1541.writeLong(obj_1540.startsInMs);
        _out_1541.writeLong(obj_1540.durationMs);
        
    }
    deserialize(sCtx_1539: MetaContext, in__1542: DataIn): AuthorizedApiSetReceiveWindowArguments  {
        try  {
            let startsInMs_1543: bigint;
            let durationMs_1544: bigint;
            startsInMs_1543 = in__1542.readLong();
            durationMs_1544 = in__1542.readLong();
            return new AuthorizedApiSetReceiveWindowArguments(startsInMs_1543, durationMs_1544);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiSetReceiveWindowArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.startsInMs);
        hash = 37 * hash + FastMeta.META_LONG.metaHashCode(obj.durationMs);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiSetReceiveWindowArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiSetReceiveWindowArguments)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.startsInMs, v2.startsInMs)) return false;
        if (!FastMeta.META_LONG.metaEquals(v1.durationMs, v2.durationMs)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiSetReceiveWindowArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiSetReceiveWindowArguments(');
        res.add('startsInMs:').add(obj.startsInMs);
        res.add(', ');
        res.add('durationMs:').add(obj.durationMs);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiSetReceiveWindowArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiSetReceiveWindowArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiSetReceiveWindowArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiProbePacketArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiProbePacketArguments>  {
    serialize(sCtx_1545: MetaContext, obj_1546: AuthorizedApiProbePacketArguments, _out_1547: DataOut): void  {
        _out_1547.writeInt(obj_1546.testId);
        _out_1547.writeInt(obj_1546.sequence);
        SerializerPackNumber.INSTANCE.put(_out_1547, obj_1546.payload.length);
        _out_1547.write(obj_1546.payload);
        
    }
    deserialize(sCtx_1545: MetaContext, in__1548: DataIn): AuthorizedApiProbePacketArguments  {
        try  {
            let testId_1550: number;
            let sequence_1551: number;
            let payload_1552: Uint8Array;
            testId_1550 = in__1548.readInt();
            sequence_1551 = in__1548.readInt();
            const len_1554 = Number(DeserializerPackNumber.INSTANCE.put(in__1548));
            const bytes_1555 = in__1548.readBytes(len_1554);
            payload_1552 = bytes_1555;
            return new AuthorizedApiProbePacketArguments(testId_1550, sequence_1551, payload_1552);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiProbePacketArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.testId);
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.sequence);
        hash = 37 * hash + FastMeta.META_ARRAY_BYTE.metaHashCode(obj.payload);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiProbePacketArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiProbePacketArguments)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.testId, v2.testId)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.sequence, v2.sequence)) return false;
        if (!FastMeta.META_ARRAY_BYTE.metaEquals(v1.payload, v2.payload)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiProbePacketArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiProbePacketArguments(');
        res.add('testId:').add(obj.testId);
        res.add(', ');
        res.add('sequence:').add(obj.sequence);
        res.add(', ');
        res.add('payload:').add(obj.payload);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiProbePacketArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiProbePacketArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiProbePacketArguments  {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
        
    }
    
}
export class AuthorizedApiRequestProbeReportArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiRequestProbeReportArguments>  {
    serialize(sCtx_1556: MetaContext, obj_1557: AuthorizedApiRequestProbeReportArguments, _out_1558: DataOut): void  {
        _out_1558.writeInt(obj_1557.testId);
        _out_1558.writeInt(obj_1557.firstSequence);
        _out_1558.writeInt(obj_1557.count);
        
    }
    deserialize(sCtx_1556: MetaContext, in__1559: DataIn): AuthorizedApiRequestProbeReportArguments  {
        try  {
            let testId_1560: number;
            let firstSequence_1561: number;
            let count_1562: number;
            testId_1560 = in__1559.readInt();
            firstSequence_1561 = in__1559.readInt();
            count_1562 = in__1559.readInt();
            return new AuthorizedApiRequestProbeReportArguments(testId_1560, firstSequence_1561, count_1562);
            
        }
        catch (e)  {
            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));
            
        }
        
    }
    metaHashCode(obj: AuthorizedApiRequestProbeReportArguments | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.testId);
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.firstSequence);
        hash = 37 * hash + FastMeta.META_INT.metaHashCode(obj.count);
        return hash | 0;
        
    }
    metaEquals(v1: AuthorizedApiRequestProbeReportArguments | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AuthorizedApiRequestProbeReportArguments)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.testId, v2.testId)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.firstSequence, v2.firstSequence)) return false;
        if (!FastMeta.META_INT.metaEquals(v1.count, v2.count)) return false;
        return true;
        
    }
    metaToString(obj: AuthorizedApiRequestProbeReportArguments | null | undefined, res: AString): void  {
        if (obj === null || obj === undefined)  {
            res.add('null');
            return;
            
        }
        res.add('AuthorizedApiRequestProbeReportArguments(');
        res.add('testId:').add(obj.testId);
        res.add(', ');
        res.add('firstSequence:').add(obj.firstSequence);
        res.add(', ');
        res.add('count:').add(obj.count);
        res.add(')');
        
    }
    public serializeToBytes(obj: AuthorizedApiRequestProbeReportArguments): Uint8Array  {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
        
    }
    public deserializeFromBytes(data: Uint8Array): AuthorizedApiRequestProbeReportArguments  {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
        
    }
    public loadFromFile(file: string): AuthorizedApiRequestProbeReportArguments  {
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
                    let id_1564: number;
                    id_1564 = dataIn.readByte();
                    const argsObject_1565 = new AuthorizedApiBackIdArguments(id_1564);
                    const argsNames_1566: string[] = ["id"];
                    const argsValues_1567: any[] = [id_1564];
                    ctx.invokeLocalMethodBefore("backId", argsNames_1566, argsValues_1567);
                    (typeof (localApi as any).backIdArguments === "function" ? (localApi as any).backIdArguments(argsObject_1565) : localApi.backId(id_1564));
                    ctx.invokeLocalMethodAfter("backId", null, argsNames_1566, argsValues_1567);
                    break;
                    
                }
                case 4:  {
                    const reqId_1568 = dataIn.readInt();
                    let nextConnectMsDuration_1569: bigint;
                    let rxWindowMs_1570: bigint;
                    nextConnectMsDuration_1569 = dataIn.readLong();
                    rxWindowMs_1570 = dataIn.readLong();
                    const argsObject_1571 = new AuthorizedApiPingArguments(nextConnectMsDuration_1569, rxWindowMs_1570);
                    const argsNames_1572: string[] = ["nextConnectMsDuration", "rxWindowMs"];
                    const argsValues_1573: any[] = [nextConnectMsDuration_1569, rxWindowMs_1570];
                    ctx.invokeLocalMethodBefore("ping", argsNames_1572, argsValues_1573);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).pingArguments === "function" ? (localApi as any).pingArguments(argsObject_1571) : localApi.ping(nextConnectMsDuration_1569, rxWindowMs_1570));
                    ctx.invokeLocalMethodAfter("ping", resultFuture, argsNames_1572, argsValues_1573);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1568);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    let uid_1575: UUID;
                    let stream_1576: ClientApiStream;
                    uid_1575 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    stream_1576 = ClientApiStream.META.deserialize(ctx, dataIn);
                    const argsObject_1577 = new AuthorizedApiClientArguments(uid_1575, stream_1576);
                    const argsNames_1578: string[] = ["uid", "stream"];
                    const argsValues_1579: any[] = [uid_1575, stream_1576];
                    ctx.invokeLocalMethodBefore("client", argsNames_1578, argsValues_1579);
                    (typeof (localApi as any).clientArguments === "function" ? (localApi as any).clientArguments(argsObject_1577) : localApi.client(uid_1575, stream_1576));
                    ctx.invokeLocalMethodAfter("client", null, argsNames_1578, argsValues_1579);
                    break;
                    
                }
                case 6:  {
                    let msg_1581: Message;
                    msg_1581 = Message.META.deserialize(ctx, dataIn);
                    const argsObject_1582 = new AuthorizedApiSendMessageArguments(msg_1581);
                    const argsNames_1583: string[] = ["msg"];
                    const argsValues_1584: any[] = [msg_1581];
                    ctx.invokeLocalMethodBefore("sendMessage", argsNames_1583, argsValues_1584);
                    (typeof (localApi as any).sendMessageArguments === "function" ? (localApi as any).sendMessageArguments(argsObject_1582) : localApi.sendMessage(msg_1581));
                    ctx.invokeLocalMethodAfter("sendMessage", null, argsNames_1583, argsValues_1584);
                    break;
                    
                }
                case 7:  {
                    let msg_1586: Message[];
                    const len_1588 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_1586 = new Array<Message>(len_1588);
                    for (let idx_1587 = 0;
                    idx_1587 < len_1588;
                    idx_1587++)  {
                        msg_1586[idx_1587] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1589 = new AuthorizedApiSendMessagesArguments(msg_1586);
                    const argsNames_1590: string[] = ["msg"];
                    const argsValues_1591: any[] = [msg_1586];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_1590, argsValues_1591);
                    (typeof (localApi as any).sendMessagesArguments === "function" ? (localApi as any).sendMessagesArguments(argsObject_1589) : localApi.sendMessages(msg_1586));
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_1590, argsValues_1591);
                    break;
                    
                }
                case 37:  {
                    let uids_1593: UUID[];
                    let data_1594: Uint8Array;
                    const len_1596 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1593 = new Array<UUID>(len_1596);
                    for (let idx_1595 = 0;
                    idx_1595 < len_1596;
                    idx_1595++)  {
                        uids_1593[idx_1595] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const len_1598 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1599 = dataIn.readBytes(len_1598);
                    data_1594 = bytes_1599;
                    const argsObject_1600 = new AuthorizedApiSendMulticastArguments(uids_1593, data_1594);
                    const argsNames_1601: string[] = ["uids", "data"];
                    const argsValues_1602: any[] = [uids_1593, data_1594];
                    ctx.invokeLocalMethodBefore("sendMulticast", argsNames_1601, argsValues_1602);
                    (typeof (localApi as any).sendMulticastArguments === "function" ? (localApi as any).sendMulticastArguments(argsObject_1600) : localApi.sendMulticast(uids_1593, data_1594));
                    ctx.invokeLocalMethodAfter("sendMulticast", null, argsNames_1601, argsValues_1602);
                    break;
                    
                }
                case 39:  {
                    const reqId_1603 = dataIn.readInt();
                    let msg_1604: Message;
                    msg_1604 = Message.META.deserialize(ctx, dataIn);
                    const argsObject_1605 = new AuthorizedApiSendMessageWithResultArguments(msg_1604);
                    const argsNames_1606: string[] = ["msg"];
                    const argsValues_1607: any[] = [msg_1604];
                    ctx.invokeLocalMethodBefore("sendMessageWithResult", argsNames_1606, argsValues_1607);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).sendMessageWithResultArguments === "function" ? (localApi as any).sendMessageWithResultArguments(argsObject_1605) : localApi.sendMessageWithResult(msg_1604));
                    ctx.invokeLocalMethodAfter("sendMessageWithResult", resultFuture, argsNames_1606, argsValues_1607);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1603);
                        
                    }
                    );
                    break;
                    
                }
                case 8:  {
                    const reqId_1608 = dataIn.readInt();
                    let owner_1609: UUID;
                    let uids_1610: UUID[];
                    owner_1609 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1612 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1610 = new Array<UUID>(len_1612);
                    for (let idx_1611 = 0;
                    idx_1611 < len_1612;
                    idx_1611++)  {
                        uids_1610[idx_1611] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1613 = new AuthorizedApiCreateAccessGroupArguments(owner_1609, uids_1610);
                    const argsNames_1614: string[] = ["owner", "uids"];
                    const argsValues_1615: any[] = [owner_1609, uids_1610];
                    ctx.invokeLocalMethodBefore("createAccessGroup", argsNames_1614, argsValues_1615);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).createAccessGroupArguments === "function" ? (localApi as any).createAccessGroupArguments(argsObject_1613) : localApi.createAccessGroup(owner_1609, uids_1610));
                    ctx.invokeLocalMethodAfter("createAccessGroup", resultFuture, argsNames_1614, argsValues_1615);
                    resultFuture.to((v_1617: UUID) =>  {
                        const data_1616 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_1617, data_1616);
                        ctx.sendResultToRemote(reqId_1608, data_1616.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_1618 = dataIn.readInt();
                    let groupId_1619: UUID;
                    let uid_1620: UUID;
                    groupId_1619 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid_1620 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1621 = new AuthorizedApiAddToAccessGroupArguments(groupId_1619, uid_1620);
                    const argsNames_1622: string[] = ["groupId", "uid"];
                    const argsValues_1623: any[] = [groupId_1619, uid_1620];
                    ctx.invokeLocalMethodBefore("addToAccessGroup", argsNames_1622, argsValues_1623);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).addToAccessGroupArguments === "function" ? (localApi as any).addToAccessGroupArguments(argsObject_1621) : localApi.addToAccessGroup(groupId_1619, uid_1620));
                    ctx.invokeLocalMethodAfter("addToAccessGroup", resultFuture, argsNames_1622, argsValues_1623);
                    resultFuture.to((v_1625: boolean) =>  {
                        const data_1624 = new DataInOut();
                        data_1624.writeBoolean(v_1625);
                        ctx.sendResultToRemote(reqId_1618, data_1624.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_1626 = dataIn.readInt();
                    let groupId_1627: UUID;
                    let uid_1628: UUID;
                    groupId_1627 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid_1628 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1629 = new AuthorizedApiRemoveFromAccessGroupArguments(groupId_1627, uid_1628);
                    const argsNames_1630: string[] = ["groupId", "uid"];
                    const argsValues_1631: any[] = [groupId_1627, uid_1628];
                    ctx.invokeLocalMethodBefore("removeFromAccessGroup", argsNames_1630, argsValues_1631);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).removeFromAccessGroupArguments === "function" ? (localApi as any).removeFromAccessGroupArguments(argsObject_1629) : localApi.removeFromAccessGroup(groupId_1627, uid_1628));
                    ctx.invokeLocalMethodAfter("removeFromAccessGroup", resultFuture, argsNames_1630, argsValues_1631);
                    resultFuture.to((v_1633: boolean) =>  {
                        const data_1632 = new DataInOut();
                        data_1632.writeBoolean(v_1633);
                        ctx.sendResultToRemote(reqId_1626, data_1632.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_1634 = dataIn.readInt();
                    let uid_1635: UUID;
                    uid_1635 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1636 = new AuthorizedApiCheckAccessForSendMessageArguments(uid_1635);
                    const argsNames_1637: string[] = ["uid"];
                    const argsValues_1638: any[] = [uid_1635];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage", argsNames_1637, argsValues_1638);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).checkAccessForSendMessageArguments === "function" ? (localApi as any).checkAccessForSendMessageArguments(argsObject_1636) : localApi.checkAccessForSendMessage(uid_1635));
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage", resultFuture, argsNames_1637, argsValues_1638);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1634);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    let sid_1640: number[];
                    const len_1642 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    sid_1640 = new Array<number>(len_1642);
                    for (let idx_1641 = 0;
                    idx_1641 < len_1642;
                    idx_1641++)  {
                        sid_1640[idx_1641] = dataIn.readShort();
                        
                    }
                    const argsObject_1643 = new AuthorizedApiResolverServersArguments(sid_1640);
                    const argsNames_1644: string[] = ["sid"];
                    const argsValues_1645: any[] = [sid_1640];
                    ctx.invokeLocalMethodBefore("resolverServers", argsNames_1644, argsValues_1645);
                    (typeof (localApi as any).resolverServersArguments === "function" ? (localApi as any).resolverServersArguments(argsObject_1643) : localApi.resolverServers(sid_1640));
                    ctx.invokeLocalMethodAfter("resolverServers", null, argsNames_1644, argsValues_1645);
                    break;
                    
                }
                case 13:  {
                    let uids_1647: UUID[];
                    const len_1649 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1647 = new Array<UUID>(len_1649);
                    for (let idx_1648 = 0;
                    idx_1648 < len_1649;
                    idx_1648++)  {
                        uids_1647[idx_1648] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1650 = new AuthorizedApiResolveCloudsArguments(uids_1647);
                    const argsNames_1651: string[] = ["uids"];
                    const argsValues_1652: any[] = [uids_1647];
                    ctx.invokeLocalMethodBefore("resolveClouds", argsNames_1651, argsValues_1652);
                    (typeof (localApi as any).resolveCloudsArguments === "function" ? (localApi as any).resolveCloudsArguments(argsObject_1650) : localApi.resolveClouds(uids_1647));
                    ctx.invokeLocalMethodAfter("resolveClouds", null, argsNames_1651, argsValues_1652);
                    break;
                    
                }
                case 38:  {
                    let configs_1654: AppliedConfig[];
                    const len_1656 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    configs_1654 = new Array<AppliedConfig>(len_1656);
                    for (let idx_1655 = 0;
                    idx_1655 < len_1656;
                    idx_1655++)  {
                        configs_1654[idx_1655] = AppliedConfig.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1657 = new AuthorizedApiReportAppliedConfigArguments(configs_1654);
                    const argsNames_1658: string[] = ["configs"];
                    const argsValues_1659: any[] = [configs_1654];
                    ctx.invokeLocalMethodBefore("reportAppliedConfig", argsNames_1658, argsValues_1659);
                    (typeof (localApi as any).reportAppliedConfigArguments === "function" ? (localApi as any).reportAppliedConfigArguments(argsObject_1657) : localApi.reportAppliedConfig(configs_1654));
                    ctx.invokeLocalMethodAfter("reportAppliedConfig", null, argsNames_1658, argsValues_1659);
                    break;
                    
                }
                case 14:  {
                    const reqId_1660 = dataIn.readInt();
                    let uid_1661: UUID;
                    uid_1661 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1662 = new AuthorizedApiGetAccessGroupsArguments(uid_1661);
                    const argsNames_1663: string[] = ["uid"];
                    const argsValues_1664: any[] = [uid_1661];
                    ctx.invokeLocalMethodBefore("getAccessGroups", argsNames_1663, argsValues_1664);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getAccessGroupsArguments === "function" ? (localApi as any).getAccessGroupsArguments(argsObject_1662) : localApi.getAccessGroups(uid_1661));
                    ctx.invokeLocalMethodAfter("getAccessGroups", resultFuture, argsNames_1663, argsValues_1664);
                    resultFuture.to((v_1666: UUID[]) =>  {
                        const data_1665 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1665, v_1666.length);
                        for (const el_1667 of v_1666)  {
                            FastMeta.META_UUID.serialize(ctx, el_1667, data_1665);
                            
                        }
                        ctx.sendResultToRemote(reqId_1660, data_1665.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_1668 = dataIn.readInt();
                    let groupId_1669: UUID;
                    groupId_1669 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1670 = new AuthorizedApiGetAccessGroupArguments(groupId_1669);
                    const argsNames_1671: string[] = ["groupId"];
                    const argsValues_1672: any[] = [groupId_1669];
                    ctx.invokeLocalMethodBefore("getAccessGroup", argsNames_1671, argsValues_1672);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getAccessGroupArguments === "function" ? (localApi as any).getAccessGroupArguments(argsObject_1670) : localApi.getAccessGroup(groupId_1669));
                    ctx.invokeLocalMethodAfter("getAccessGroup", resultFuture, argsNames_1671, argsValues_1672);
                    resultFuture.to((v_1674: AccessGroup) =>  {
                        const data_1673 = new DataInOut();
                        AccessGroup.META.serialize(ctx, v_1674, data_1673);
                        ctx.sendResultToRemote(reqId_1668, data_1673.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 16:  {
                    const reqId_1675 = dataIn.readInt();
                    let uid_1676: UUID;
                    uid_1676 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1677 = new AuthorizedApiGetAllAccessedClientsArguments(uid_1676);
                    const argsNames_1678: string[] = ["uid"];
                    const argsValues_1679: any[] = [uid_1676];
                    ctx.invokeLocalMethodBefore("getAllAccessedClients", argsNames_1678, argsValues_1679);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getAllAccessedClientsArguments === "function" ? (localApi as any).getAllAccessedClientsArguments(argsObject_1677) : localApi.getAllAccessedClients(uid_1676));
                    ctx.invokeLocalMethodAfter("getAllAccessedClients", resultFuture, argsNames_1678, argsValues_1679);
                    resultFuture.to((v_1681: UUID[]) =>  {
                        const data_1680 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1680, v_1681.length);
                        for (const el_1682 of v_1681)  {
                            FastMeta.META_UUID.serialize(ctx, el_1682, data_1680);
                            
                        }
                        ctx.sendResultToRemote(reqId_1675, data_1680.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 17:  {
                    const reqId_1683 = dataIn.readInt();
                    let uid1_1684: UUID;
                    let uid2_1685: UUID;
                    uid1_1684 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid2_1685 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1686 = new AuthorizedApiCheckAccessForSendMessage2Arguments(uid1_1684, uid2_1685);
                    const argsNames_1687: string[] = ["uid1", "uid2"];
                    const argsValues_1688: any[] = [uid1_1684, uid2_1685];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage2", argsNames_1687, argsValues_1688);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).checkAccessForSendMessage2Arguments === "function" ? (localApi as any).checkAccessForSendMessage2Arguments(argsObject_1686) : localApi.checkAccessForSendMessage2(uid1_1684, uid2_1685));
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage2", resultFuture, argsNames_1687, argsValues_1688);
                    resultFuture.to((v_1690: boolean) =>  {
                        const data_1689 = new DataInOut();
                        data_1689.writeBoolean(v_1690);
                        ctx.sendResultToRemote(reqId_1683, data_1689.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 18:  {
                    let telemetry_1692: Telemetry;
                    telemetry_1692 = Telemetry.META.deserialize(ctx, dataIn);
                    const argsObject_1693 = new AuthorizedApiSendTelemetryArguments(telemetry_1692);
                    const argsNames_1694: string[] = ["telemetry"];
                    const argsValues_1695: any[] = [telemetry_1692];
                    ctx.invokeLocalMethodBefore("sendTelemetry", argsNames_1694, argsValues_1695);
                    (typeof (localApi as any).sendTelemetryArguments === "function" ? (localApi as any).sendTelemetryArguments(argsObject_1693) : localApi.sendTelemetry(telemetry_1692));
                    ctx.invokeLocalMethodAfter("sendTelemetry", null, argsNames_1694, argsValues_1695);
                    break;
                    
                }
                case 19:  {
                    let uids_1697: UUID[];
                    const len_1699 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1697 = new Array<UUID>(len_1699);
                    for (let idx_1698 = 0;
                    idx_1698 < len_1699;
                    idx_1698++)  {
                        uids_1697[idx_1698] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1700 = new AuthorizedApiRequestAccessGroupsForClientsArguments(uids_1697);
                    const argsNames_1701: string[] = ["uids"];
                    const argsValues_1702: any[] = [uids_1697];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsForClients", argsNames_1701, argsValues_1702);
                    (typeof (localApi as any).requestAccessGroupsForClientsArguments === "function" ? (localApi as any).requestAccessGroupsForClientsArguments(argsObject_1700) : localApi.requestAccessGroupsForClients(uids_1697));
                    ctx.invokeLocalMethodAfter("requestAccessGroupsForClients", null, argsNames_1701, argsValues_1702);
                    break;
                    
                }
                case 20:  {
                    let ids_1704: UUID[];
                    const len_1706 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    ids_1704 = new Array<UUID>(len_1706);
                    for (let idx_1705 = 0;
                    idx_1705 < len_1706;
                    idx_1705++)  {
                        ids_1704[idx_1705] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1707 = new AuthorizedApiRequestAccessGroupsItemsArguments(ids_1704);
                    const argsNames_1708: string[] = ["ids"];
                    const argsValues_1709: any[] = [ids_1704];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsItems", argsNames_1708, argsValues_1709);
                    (typeof (localApi as any).requestAccessGroupsItemsArguments === "function" ? (localApi as any).requestAccessGroupsItemsArguments(argsObject_1707) : localApi.requestAccessGroupsItems(ids_1704));
                    ctx.invokeLocalMethodAfter("requestAccessGroupsItems", null, argsNames_1708, argsValues_1709);
                    break;
                    
                }
                case 22:  {
                    let uid_1711: UUID;
                    let groups_1712: UUID[];
                    uid_1711 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1714 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1712 = new Array<UUID>(len_1714);
                    for (let idx_1713 = 0;
                    idx_1713 < len_1714;
                    idx_1713++)  {
                        groups_1712[idx_1713] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1715 = new AuthorizedApiSendAccessGroupForClientArguments(uid_1711, groups_1712);
                    const argsNames_1716: string[] = ["uid", "groups"];
                    const argsValues_1717: any[] = [uid_1711, groups_1712];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_1716, argsValues_1717);
                    (typeof (localApi as any).sendAccessGroupForClientArguments === "function" ? (localApi as any).sendAccessGroupForClientArguments(argsObject_1715) : localApi.sendAccessGroupForClient(uid_1711, groups_1712));
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_1716, argsValues_1717);
                    break;
                    
                }
                case 23:  {
                    let id_1719: UUID;
                    let groups_1720: UUID[];
                    id_1719 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1722 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1720 = new Array<UUID>(len_1722);
                    for (let idx_1721 = 0;
                    idx_1721 < len_1722;
                    idx_1721++)  {
                        groups_1720[idx_1721] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1723 = new AuthorizedApiAddItemsToAccessGroupArguments(id_1719, groups_1720);
                    const argsNames_1724: string[] = ["id", "groups"];
                    const argsValues_1725: any[] = [id_1719, groups_1720];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_1724, argsValues_1725);
                    (typeof (localApi as any).addItemsToAccessGroupArguments === "function" ? (localApi as any).addItemsToAccessGroupArguments(argsObject_1723) : localApi.addItemsToAccessGroup(id_1719, groups_1720));
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_1724, argsValues_1725);
                    break;
                    
                }
                case 24:  {
                    let id_1727: UUID;
                    let groups_1728: UUID[];
                    id_1727 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1730 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1728 = new Array<UUID>(len_1730);
                    for (let idx_1729 = 0;
                    idx_1729 < len_1730;
                    idx_1729++)  {
                        groups_1728[idx_1729] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1731 = new AuthorizedApiRemoveItemsFromAccessGroupArguments(id_1727, groups_1728);
                    const argsNames_1732: string[] = ["id", "groups"];
                    const argsValues_1733: any[] = [id_1727, groups_1728];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_1732, argsValues_1733);
                    (typeof (localApi as any).removeItemsFromAccessGroupArguments === "function" ? (localApi as any).removeItemsFromAccessGroupArguments(argsObject_1731) : localApi.removeItemsFromAccessGroup(id_1727, groups_1728));
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_1732, argsValues_1733);
                    break;
                    
                }
                case 25:  {
                    let uid_1735: UUID;
                    let groups_1736: UUID[];
                    uid_1735 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1738 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1736 = new Array<UUID>(len_1738);
                    for (let idx_1737 = 0;
                    idx_1737 < len_1738;
                    idx_1737++)  {
                        groups_1736[idx_1737] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1739 = new AuthorizedApiAddAccessGroupsToClientArguments(uid_1735, groups_1736);
                    const argsNames_1740: string[] = ["uid", "groups"];
                    const argsValues_1741: any[] = [uid_1735, groups_1736];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_1740, argsValues_1741);
                    (typeof (localApi as any).addAccessGroupsToClientArguments === "function" ? (localApi as any).addAccessGroupsToClientArguments(argsObject_1739) : localApi.addAccessGroupsToClient(uid_1735, groups_1736));
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_1740, argsValues_1741);
                    break;
                    
                }
                case 26:  {
                    let uid_1743: UUID;
                    let groups_1744: UUID[];
                    uid_1743 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1746 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1744 = new Array<UUID>(len_1746);
                    for (let idx_1745 = 0;
                    idx_1745 < len_1746;
                    idx_1745++)  {
                        groups_1744[idx_1745] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1747 = new AuthorizedApiRemoveAccessGroupsFromClientArguments(uid_1743, groups_1744);
                    const argsNames_1748: string[] = ["uid", "groups"];
                    const argsValues_1749: any[] = [uid_1743, groups_1744];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_1748, argsValues_1749);
                    (typeof (localApi as any).removeAccessGroupsFromClientArguments === "function" ? (localApi as any).removeAccessGroupsFromClientArguments(argsObject_1747) : localApi.removeAccessGroupsFromClient(uid_1743, groups_1744));
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_1748, argsValues_1749);
                    break;
                    
                }
                case 27:  {
                    let uids_1751: UUID[];
                    const len_1753 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1751 = new Array<UUID>(len_1753);
                    for (let idx_1752 = 0;
                    idx_1752 < len_1753;
                    idx_1752++)  {
                        uids_1751[idx_1752] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1754 = new AuthorizedApiRequestAllAccessedClientsArguments(uids_1751);
                    const argsNames_1755: string[] = ["uids"];
                    const argsValues_1756: any[] = [uids_1751];
                    ctx.invokeLocalMethodBefore("requestAllAccessedClients", argsNames_1755, argsValues_1756);
                    (typeof (localApi as any).requestAllAccessedClientsArguments === "function" ? (localApi as any).requestAllAccessedClientsArguments(argsObject_1754) : localApi.requestAllAccessedClients(uids_1751));
                    ctx.invokeLocalMethodAfter("requestAllAccessedClients", null, argsNames_1755, argsValues_1756);
                    break;
                    
                }
                case 28:  {
                    let requests_1758: AccessCheckPair[];
                    const len_1760 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    requests_1758 = new Array<AccessCheckPair>(len_1760);
                    for (let idx_1759 = 0;
                    idx_1759 < len_1760;
                    idx_1759++)  {
                        requests_1758[idx_1759] = AccessCheckPair.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1761 = new AuthorizedApiRequestAccessCheckArguments(requests_1758);
                    const argsNames_1762: string[] = ["requests"];
                    const argsValues_1763: any[] = [requests_1758];
                    ctx.invokeLocalMethodBefore("requestAccessCheck", argsNames_1762, argsValues_1763);
                    (typeof (localApi as any).requestAccessCheckArguments === "function" ? (localApi as any).requestAccessCheckArguments(argsObject_1761) : localApi.requestAccessCheck(requests_1758));
                    ctx.invokeLocalMethodAfter("requestAccessCheck", null, argsNames_1762, argsValues_1763);
                    break;
                    
                }
                case 29:  {
                    const reqId_1764 = dataIn.readInt();
                    let uid_1765: UUID;
                    let fromTime_1766: bigint;
                    let toTime_1767: bigint;
                    let limit_1768: number;
                    uid_1765 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    fromTime_1766 = dataIn.readLong();
                    toTime_1767 = dataIn.readLong();
                    limit_1768 = dataIn.readInt();
                    const argsObject_1769 = new AuthorizedApiGetClientActivityArguments(uid_1765, fromTime_1766, toTime_1767, limit_1768);
                    const argsNames_1770: string[] = ["uid", "fromTime", "toTime", "limit"];
                    const argsValues_1771: any[] = [uid_1765, fromTime_1766, toTime_1767, limit_1768];
                    ctx.invokeLocalMethodBefore("getClientActivity", argsNames_1770, argsValues_1771);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getClientActivityArguments === "function" ? (localApi as any).getClientActivityArguments(argsObject_1769) : localApi.getClientActivity(uid_1765, fromTime_1766, toTime_1767, limit_1768));
                    ctx.invokeLocalMethodAfter("getClientActivity", resultFuture, argsNames_1770, argsValues_1771);
                    resultFuture.to((v_1773: ClientActivity[]) =>  {
                        const data_1772 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1772, v_1773.length);
                        for (const el_1774 of v_1773)  {
                            ClientActivity.META.serialize(ctx, el_1774, data_1772);
                            
                        }
                        ctx.sendResultToRemote(reqId_1764, data_1772.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 30:  {
                    const reqId_1775 = dataIn.readInt();
                    let uid_1776: UUID;
                    let query_1777: string;
                    let limit_1778: number;
                    uid_1776 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    let stringBytes_1779: Uint8Array;
                    const len_1781 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1782 = dataIn.readBytes(len_1781);
                    stringBytes_1779 = bytes_1782;
                    query_1777 = new TextDecoder('utf-8').decode(stringBytes_1779);
                    limit_1778 = dataIn.readInt();
                    const argsObject_1783 = new AuthorizedApiSearchClientLogsArguments(uid_1776, query_1777, limit_1778);
                    const argsNames_1784: string[] = ["uid", "query", "limit"];
                    const argsValues_1785: any[] = [uid_1776, query_1777, limit_1778];
                    ctx.invokeLocalMethodBefore("searchClientLogs", argsNames_1784, argsValues_1785);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).searchClientLogsArguments === "function" ? (localApi as any).searchClientLogsArguments(argsObject_1783) : localApi.searchClientLogs(uid_1776, query_1777, limit_1778));
                    ctx.invokeLocalMethodAfter("searchClientLogs", resultFuture, argsNames_1784, argsValues_1785);
                    resultFuture.to((v_1787: ClientLogEntry[]) =>  {
                        const data_1786 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1786, v_1787.length);
                        for (const el_1788 of v_1787)  {
                            ClientLogEntry.META.serialize(ctx, el_1788, data_1786);
                            
                        }
                        ctx.sendResultToRemote(reqId_1775, data_1786.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 31:  {
                    const reqId_1789 = dataIn.readInt();
                    let uid_1790: UUID;
                    let limit_1791: number;
                    uid_1790 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    limit_1791 = dataIn.readInt();
                    const argsObject_1792 = new AuthorizedApiGetClientConnectionsArguments(uid_1790, limit_1791);
                    const argsNames_1793: string[] = ["uid", "limit"];
                    const argsValues_1794: any[] = [uid_1790, limit_1791];
                    ctx.invokeLocalMethodBefore("getClientConnections", argsNames_1793, argsValues_1794);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getClientConnectionsArguments === "function" ? (localApi as any).getClientConnectionsArguments(argsObject_1792) : localApi.getClientConnections(uid_1790, limit_1791));
                    ctx.invokeLocalMethodAfter("getClientConnections", resultFuture, argsNames_1793, argsValues_1794);
                    resultFuture.to((v_1796: ClientConnectionInfo[]) =>  {
                        const data_1795 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1795, v_1796.length);
                        for (const el_1797 of v_1796)  {
                            ClientConnectionInfo.META.serialize(ctx, el_1797, data_1795);
                            
                        }
                        ctx.sendResultToRemote(reqId_1789, data_1795.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 32:  {
                    const reqId_1798 = dataIn.readInt();
                    let uid_1799: UUID;
                    let fromTime_1800: bigint;
                    let toTime_1801: bigint;
                    let limit_1802: number;
                    uid_1799 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    fromTime_1800 = dataIn.readLong();
                    toTime_1801 = dataIn.readLong();
                    limit_1802 = dataIn.readInt();
                    const argsObject_1803 = new AuthorizedApiGetClientMessagesArguments(uid_1799, fromTime_1800, toTime_1801, limit_1802);
                    const argsNames_1804: string[] = ["uid", "fromTime", "toTime", "limit"];
                    const argsValues_1805: any[] = [uid_1799, fromTime_1800, toTime_1801, limit_1802];
                    ctx.invokeLocalMethodBefore("getClientMessages", argsNames_1804, argsValues_1805);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getClientMessagesArguments === "function" ? (localApi as any).getClientMessagesArguments(argsObject_1803) : localApi.getClientMessages(uid_1799, fromTime_1800, toTime_1801, limit_1802));
                    ctx.invokeLocalMethodAfter("getClientMessages", resultFuture, argsNames_1804, argsValues_1805);
                    resultFuture.to((v_1807: MessageInfo[]) =>  {
                        const data_1806 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1806, v_1807.length);
                        for (const el_1808 of v_1807)  {
                            MessageInfo.META.serialize(ctx, el_1808, data_1806);
                            
                        }
                        ctx.sendResultToRemote(reqId_1798, data_1806.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 33:  {
                    let delayMillis_1810: bigint;
                    delayMillis_1810 = dataIn.readLong();
                    const argsObject_1811 = new AuthorizedApiSetNextReadDelayArguments(delayMillis_1810);
                    const argsNames_1812: string[] = ["delayMillis"];
                    const argsValues_1813: any[] = [delayMillis_1810];
                    ctx.invokeLocalMethodBefore("setNextReadDelay", argsNames_1812, argsValues_1813);
                    (typeof (localApi as any).setNextReadDelayArguments === "function" ? (localApi as any).setNextReadDelayArguments(argsObject_1811) : localApi.setNextReadDelay(delayMillis_1810));
                    ctx.invokeLocalMethodAfter("setNextReadDelay", null, argsNames_1812, argsValues_1813);
                    break;
                    
                }
                case 34:  {
                    const reqId_1814 = dataIn.readInt();
                    let uid_1815: UUID;
                    uid_1815 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1816 = new AuthorizedApiGetUapArguments(uid_1815);
                    const argsNames_1817: string[] = ["uid"];
                    const argsValues_1818: any[] = [uid_1815];
                    ctx.invokeLocalMethodBefore("getUap", argsNames_1817, argsValues_1818);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getUapArguments === "function" ? (localApi as any).getUapArguments(argsObject_1816) : localApi.getUap(uid_1815));
                    ctx.invokeLocalMethodAfter("getUap", resultFuture, argsNames_1817, argsValues_1818);
                    resultFuture.to((v_1820: Uap) =>  {
                        const data_1819 = new DataInOut();
                        Uap.META.serialize(ctx, v_1820, data_1819);
                        ctx.sendResultToRemote(reqId_1814, data_1819.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 40:  {
                    const reqId_1821 = dataIn.readInt();
                    let uid_1822: UUID;
                    uid_1822 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1823 = new AuthorizedApiRequestWebRtcSessionArguments(uid_1822);
                    const argsNames_1824: string[] = ["uid"];
                    const argsValues_1825: any[] = [uid_1822];
                    ctx.invokeLocalMethodBefore("requestWebRtcSession", argsNames_1824, argsValues_1825);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).requestWebRtcSessionArguments === "function" ? (localApi as any).requestWebRtcSessionArguments(argsObject_1823) : localApi.requestWebRtcSession(uid_1822));
                    ctx.invokeLocalMethodAfter("requestWebRtcSession", resultFuture, argsNames_1824, argsValues_1825);
                    resultFuture.to((v_1827: WebRtcSession) =>  {
                        const data_1826 = new DataInOut();
                        WebRtcSession.META.serialize(ctx, v_1827, data_1826);
                        ctx.sendResultToRemote(reqId_1821, data_1826.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 41:  {
                    let session_1829: WebRtcSession;
                    session_1829 = WebRtcSession.META.deserialize(ctx, dataIn);
                    const argsObject_1830 = new AuthorizedApiPublishWebRtcSessionArguments(session_1829);
                    const argsNames_1831: string[] = ["session"];
                    const argsValues_1832: any[] = [session_1829];
                    ctx.invokeLocalMethodBefore("publishWebRtcSession", argsNames_1831, argsValues_1832);
                    (typeof (localApi as any).publishWebRtcSessionArguments === "function" ? (localApi as any).publishWebRtcSessionArguments(argsObject_1830) : localApi.publishWebRtcSession(session_1829));
                    ctx.invokeLocalMethodAfter("publishWebRtcSession", null, argsNames_1831, argsValues_1832);
                    break;
                    
                }
                case 42:  {
                    const reqId_1833 = dataIn.readInt();
                    const argsObject_1834 = new AuthorizedApiSelfDestructArguments();
                    const argsNames_1835: string[] = [];
                    const argsValues_1836: any[] = [];
                    ctx.invokeLocalMethodBefore("selfDestruct", argsNames_1835, argsValues_1836);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).selfDestructArguments === "function" ? (localApi as any).selfDestructArguments(argsObject_1834) : localApi.selfDestruct());
                    ctx.invokeLocalMethodAfter("selfDestruct", resultFuture, argsNames_1835, argsValues_1836);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1833);
                        
                    }
                    );
                    break;
                    
                }
                case 43:  {
                    const reqId_1837 = dataIn.readInt();
                    const argsObject_1838 = new AuthorizedApiGetServersArguments();
                    const argsNames_1839: string[] = [];
                    const argsValues_1840: any[] = [];
                    ctx.invokeLocalMethodBefore("getServers", argsNames_1839, argsValues_1840);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getServersArguments === "function" ? (localApi as any).getServersArguments(argsObject_1838) : localApi.getServers());
                    ctx.invokeLocalMethodAfter("getServers", resultFuture, argsNames_1839, argsValues_1840);
                    resultFuture.to((v_1842: ServerDescriptorWithGeo[]) =>  {
                        const data_1841 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1841, v_1842.length);
                        for (const el_1843 of v_1842)  {
                            ServerDescriptorWithGeo.META.serialize(ctx, el_1843, data_1841);
                            
                        }
                        ctx.sendResultToRemote(reqId_1837, data_1841.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 35:  {
                    const reqId_1844 = dataIn.readInt();
                    let uid_1845: UUID;
                    uid_1845 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1846 = new AuthorizedApiGetClientTimingArguments(uid_1845);
                    const argsNames_1847: string[] = ["uid"];
                    const argsValues_1848: any[] = [uid_1845];
                    ctx.invokeLocalMethodBefore("getClientTiming", argsNames_1847, argsValues_1848);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getClientTimingArguments === "function" ? (localApi as any).getClientTimingArguments(argsObject_1846) : localApi.getClientTiming(uid_1845));
                    ctx.invokeLocalMethodAfter("getClientTiming", resultFuture, argsNames_1847, argsValues_1848);
                    resultFuture.to((v_1850: ClientTiming) =>  {
                        const data_1849 = new DataInOut();
                        ClientTiming.META.serialize(ctx, v_1850, data_1849);
                        ctx.sendResultToRemote(reqId_1844, data_1849.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 36:  {
                    const reqId_1851 = dataIn.readInt();
                    let durationMs_1852: bigint;
                    durationMs_1852 = dataIn.readLong();
                    const argsObject_1853 = new AuthorizedApiOpenReceiveWindowArguments(durationMs_1852);
                    const argsNames_1854: string[] = ["durationMs"];
                    const argsValues_1855: any[] = [durationMs_1852];
                    ctx.invokeLocalMethodBefore("openReceiveWindow", argsNames_1854, argsValues_1855);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).openReceiveWindowArguments === "function" ? (localApi as any).openReceiveWindowArguments(argsObject_1853) : localApi.openReceiveWindow(durationMs_1852));
                    ctx.invokeLocalMethodAfter("openReceiveWindow", resultFuture, argsNames_1854, argsValues_1855);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1851);
                        
                    }
                    );
                    break;
                    
                }
                case 44:  {
                    let version_1857: number;
                    version_1857 = dataIn.readInt();
                    const argsObject_1858 = new AuthorizedApiSwitchVersionArguments(version_1857);
                    const argsNames_1859: string[] = ["version"];
                    const argsValues_1860: any[] = [version_1857];
                    ctx.invokeLocalMethodBefore("switchVersion", argsNames_1859, argsValues_1860);
                    (typeof (localApi as any).switchVersionArguments === "function" ? (localApi as any).switchVersionArguments(argsObject_1858) : localApi.switchVersion(version_1857));
                    ctx.invokeLocalMethodAfter("switchVersion", null, argsNames_1859, argsValues_1860);
                    break;
                    
                }
                case 45:  {
                    let startsInMs_1862: bigint;
                    let durationMs_1863: bigint;
                    startsInMs_1862 = dataIn.readLong();
                    durationMs_1863 = dataIn.readLong();
                    const argsObject_1864 = new AuthorizedApiSetReceiveWindowArguments(startsInMs_1862, durationMs_1863);
                    const argsNames_1865: string[] = ["startsInMs", "durationMs"];
                    const argsValues_1866: any[] = [startsInMs_1862, durationMs_1863];
                    ctx.invokeLocalMethodBefore("setReceiveWindow", argsNames_1865, argsValues_1866);
                    (typeof (localApi as any).setReceiveWindowArguments === "function" ? (localApi as any).setReceiveWindowArguments(argsObject_1864) : localApi.setReceiveWindow(startsInMs_1862, durationMs_1863));
                    ctx.invokeLocalMethodAfter("setReceiveWindow", null, argsNames_1865, argsValues_1866);
                    break;
                    
                }
                case 46:  {
                    let testId_1868: number;
                    let sequence_1869: number;
                    let payload_1870: Uint8Array;
                    testId_1868 = dataIn.readInt();
                    sequence_1869 = dataIn.readInt();
                    const len_1872 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1873 = dataIn.readBytes(len_1872);
                    payload_1870 = bytes_1873;
                    const argsObject_1874 = new AuthorizedApiProbePacketArguments(testId_1868, sequence_1869, payload_1870);
                    const argsNames_1875: string[] = ["testId", "sequence", "payload"];
                    const argsValues_1876: any[] = [testId_1868, sequence_1869, payload_1870];
                    ctx.invokeLocalMethodBefore("probePacket", argsNames_1875, argsValues_1876);
                    (typeof (localApi as any).probePacketArguments === "function" ? (localApi as any).probePacketArguments(argsObject_1874) : localApi.probePacket(testId_1868, sequence_1869, payload_1870));
                    ctx.invokeLocalMethodAfter("probePacket", null, argsNames_1875, argsValues_1876);
                    break;
                    
                }
                case 47:  {
                    let testId_1878: number;
                    let firstSequence_1879: number;
                    let count_1880: number;
                    testId_1878 = dataIn.readInt();
                    firstSequence_1879 = dataIn.readInt();
                    count_1880 = dataIn.readInt();
                    const argsObject_1881 = new AuthorizedApiRequestProbeReportArguments(testId_1878, firstSequence_1879, count_1880);
                    const argsNames_1882: string[] = ["testId", "firstSequence", "count"];
                    const argsValues_1883: any[] = [testId_1878, firstSequence_1879, count_1880];
                    ctx.invokeLocalMethodBefore("requestProbeReport", argsNames_1882, argsValues_1883);
                    (typeof (localApi as any).requestProbeReportArguments === "function" ? (localApi as any).requestProbeReportArguments(argsObject_1881) : localApi.requestProbeReport(testId_1878, firstSequence_1879, count_1880));
                    ctx.invokeLocalMethodAfter("requestProbeReport", null, argsNames_1882, argsValues_1883);
                    break;
                    
                }
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
            const switchedMeta = ctx.applyLocalApiSwitch();
            if (switchedMeta !== null)  {
                if (dataIn.isReadable())  {
                    switchedMeta.makeLocal(ctx, dataIn);
                    
                }
                return;
                
            }
            
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: AuthorizedApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_1884: MetaContext): AuthorizedApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_1884.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_1884.flush();
                
            }
            , getFastMetaContext: () => sCtx_1884, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_1884.makeRemote(meta), backId: (id: number): void =>  {
                const dataOut_1886 = new DataInOut();
                dataOut_1886.writeByte(3);
                const argsNames_1888: string[] = ["id"];
                const argsValues_1889: any[] = [id];
                sCtx_1884.invokeRemoteMethodAfter("backId", null, argsNames_1888, argsValues_1889);
                dataOut_1886.writeByte(id);
                sCtx_1884.sendToRemote(dataOut_1886.toArray());
                
            }
            , ping: (nextConnectMsDuration: bigint, rxWindowMs: bigint): AFuture =>  {
                const dataOut_1891 = new DataInOut();
                dataOut_1891.writeByte(4);
                const argsNames_1893: string[] = ["nextConnectMsDuration", "rxWindowMs"];
                const argsValues_1894: any[] = [nextConnectMsDuration, rxWindowMs];
                const result_1892 = AFuture.make();
                sCtx_1884.invokeRemoteMethodAfter("ping", result_1892, argsNames_1893, argsValues_1894);
                const reqId_1890 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1892 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1892.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1891.writeInt(reqId_1890);
                dataOut_1891.writeLong(nextConnectMsDuration);
                dataOut_1891.writeLong(rxWindowMs);
                sCtx_1884.sendToRemote(dataOut_1891.toArray());
                return result_1892;
                
            }
            , client: (uid: UUID, stream: ClientApiStream): void =>  {
                const dataOut_1896 = new DataInOut();
                dataOut_1896.writeByte(5);
                const argsNames_1898: string[] = ["uid", "stream"];
                const argsValues_1899: any[] = [uid, stream];
                sCtx_1884.invokeRemoteMethodAfter("client", null, argsNames_1898, argsValues_1899);
                FastMeta.META_UUID.serialize(sCtx_1884, uid, dataOut_1896);
                ClientApiStream.META.serialize(sCtx_1884, stream, dataOut_1896);
                sCtx_1884.sendToRemote(dataOut_1896.toArray());
                
            }
            , sendMessage: (msg: Message): void =>  {
                const dataOut_1901 = new DataInOut();
                dataOut_1901.writeByte(6);
                const argsNames_1903: string[] = ["msg"];
                const argsValues_1904: any[] = [msg];
                sCtx_1884.invokeRemoteMethodAfter("sendMessage", null, argsNames_1903, argsValues_1904);
                Message.META.serialize(sCtx_1884, msg, dataOut_1901);
                sCtx_1884.sendToRemote(dataOut_1901.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_1906 = new DataInOut();
                dataOut_1906.writeByte(7);
                const argsNames_1908: string[] = ["msg"];
                const argsValues_1909: any[] = [msg];
                sCtx_1884.invokeRemoteMethodAfter("sendMessages", null, argsNames_1908, argsValues_1909);
                SerializerPackNumber.INSTANCE.put(dataOut_1906, msg.length);
                for (const el_1910 of msg)  {
                    Message.META.serialize(sCtx_1884, el_1910, dataOut_1906);
                    
                }
                sCtx_1884.sendToRemote(dataOut_1906.toArray());
                
            }
            , sendMulticast: (uids: UUID[], data: Uint8Array): void =>  {
                const dataOut_1912 = new DataInOut();
                dataOut_1912.writeByte(37);
                const argsNames_1914: string[] = ["uids", "data"];
                const argsValues_1915: any[] = [uids, data];
                sCtx_1884.invokeRemoteMethodAfter("sendMulticast", null, argsNames_1914, argsValues_1915);
                SerializerPackNumber.INSTANCE.put(dataOut_1912, uids.length);
                for (const el_1916 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1884, el_1916, dataOut_1912);
                    
                }
                SerializerPackNumber.INSTANCE.put(dataOut_1912, data.length);
                dataOut_1912.write(data);
                sCtx_1884.sendToRemote(dataOut_1912.toArray());
                
            }
            , sendMessageWithResult: (msg: Message): AFuture =>  {
                const dataOut_1919 = new DataInOut();
                dataOut_1919.writeByte(39);
                const argsNames_1921: string[] = ["msg"];
                const argsValues_1922: any[] = [msg];
                const result_1920 = AFuture.make();
                sCtx_1884.invokeRemoteMethodAfter("sendMessageWithResult", result_1920, argsNames_1921, argsValues_1922);
                const reqId_1918 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1920 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1920.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1919.writeInt(reqId_1918);
                Message.META.serialize(sCtx_1884, msg, dataOut_1919);
                sCtx_1884.sendToRemote(dataOut_1919.toArray());
                return result_1920;
                
            }
            , createAccessGroup: (owner: UUID, uids: UUID[]): ARFuture<UUID> =>  {
                const dataOut_1924 = new DataInOut();
                dataOut_1924.writeByte(8);
                const argsNames_1926: string[] = ["owner", "uids"];
                const argsValues_1927: any[] = [owner, uids];
                const result_1925 = ARFuture.of<UUID>();
                sCtx_1884.invokeRemoteMethodAfter("createAccessGroup", result_1925, argsNames_1926, argsValues_1927);
                const reqId_1923 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1925 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_1884, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1925.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1924.writeInt(reqId_1923);
                FastMeta.META_UUID.serialize(sCtx_1884, owner, dataOut_1924);
                SerializerPackNumber.INSTANCE.put(dataOut_1924, uids.length);
                for (const el_1928 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1884, el_1928, dataOut_1924);
                    
                }
                sCtx_1884.sendToRemote(dataOut_1924.toArray());
                return result_1925;
                
            }
            , addToAccessGroup: (groupId: UUID, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_1930 = new DataInOut();
                dataOut_1930.writeByte(9);
                const argsNames_1932: string[] = ["groupId", "uid"];
                const argsValues_1933: any[] = [groupId, uid];
                const result_1931 = ARFuture.of<boolean>();
                sCtx_1884.invokeRemoteMethodAfter("addToAccessGroup", result_1931, argsNames_1932, argsValues_1933);
                const reqId_1929 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1931 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1884, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1931.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1930.writeInt(reqId_1929);
                FastMeta.META_UUID.serialize(sCtx_1884, groupId, dataOut_1930);
                FastMeta.META_UUID.serialize(sCtx_1884, uid, dataOut_1930);
                sCtx_1884.sendToRemote(dataOut_1930.toArray());
                return result_1931;
                
            }
            , removeFromAccessGroup: (groupId: UUID, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_1935 = new DataInOut();
                dataOut_1935.writeByte(10);
                const argsNames_1937: string[] = ["groupId", "uid"];
                const argsValues_1938: any[] = [groupId, uid];
                const result_1936 = ARFuture.of<boolean>();
                sCtx_1884.invokeRemoteMethodAfter("removeFromAccessGroup", result_1936, argsNames_1937, argsValues_1938);
                const reqId_1934 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1936 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1884, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1936.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1935.writeInt(reqId_1934);
                FastMeta.META_UUID.serialize(sCtx_1884, groupId, dataOut_1935);
                FastMeta.META_UUID.serialize(sCtx_1884, uid, dataOut_1935);
                sCtx_1884.sendToRemote(dataOut_1935.toArray());
                return result_1936;
                
            }
            , checkAccessForSendMessage: (uid: UUID): AFuture =>  {
                const dataOut_1940 = new DataInOut();
                dataOut_1940.writeByte(11);
                const argsNames_1942: string[] = ["uid"];
                const argsValues_1943: any[] = [uid];
                const result_1941 = AFuture.make();
                sCtx_1884.invokeRemoteMethodAfter("checkAccessForSendMessage", result_1941, argsNames_1942, argsValues_1943);
                const reqId_1939 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1941 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1941.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1940.writeInt(reqId_1939);
                FastMeta.META_UUID.serialize(sCtx_1884, uid, dataOut_1940);
                sCtx_1884.sendToRemote(dataOut_1940.toArray());
                return result_1941;
                
            }
            , resolverServers: (sid: number[]): void =>  {
                const dataOut_1945 = new DataInOut();
                dataOut_1945.writeByte(12);
                const argsNames_1947: string[] = ["sid"];
                const argsValues_1948: any[] = [sid];
                sCtx_1884.invokeRemoteMethodAfter("resolverServers", null, argsNames_1947, argsValues_1948);
                SerializerPackNumber.INSTANCE.put(dataOut_1945, sid.length);
                for (const el_1949 of sid)  {
                    dataOut_1945.writeShort(el_1949);
                    
                }
                sCtx_1884.sendToRemote(dataOut_1945.toArray());
                
            }
            , resolveClouds: (uids: UUID[]): void =>  {
                const dataOut_1951 = new DataInOut();
                dataOut_1951.writeByte(13);
                const argsNames_1953: string[] = ["uids"];
                const argsValues_1954: any[] = [uids];
                sCtx_1884.invokeRemoteMethodAfter("resolveClouds", null, argsNames_1953, argsValues_1954);
                SerializerPackNumber.INSTANCE.put(dataOut_1951, uids.length);
                for (const el_1955 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1884, el_1955, dataOut_1951);
                    
                }
                sCtx_1884.sendToRemote(dataOut_1951.toArray());
                
            }
            , reportAppliedConfig: (configs: AppliedConfig[]): void =>  {
                const dataOut_1957 = new DataInOut();
                dataOut_1957.writeByte(38);
                const argsNames_1959: string[] = ["configs"];
                const argsValues_1960: any[] = [configs];
                sCtx_1884.invokeRemoteMethodAfter("reportAppliedConfig", null, argsNames_1959, argsValues_1960);
                SerializerPackNumber.INSTANCE.put(dataOut_1957, configs.length);
                for (const el_1961 of configs)  {
                    AppliedConfig.META.serialize(sCtx_1884, el_1961, dataOut_1957);
                    
                }
                sCtx_1884.sendToRemote(dataOut_1957.toArray());
                
            }
            , getAccessGroups: (uid: UUID): ARFuture<UUID[]> =>  {
                const dataOut_1963 = new DataInOut();
                dataOut_1963.writeByte(14);
                const argsNames_1965: string[] = ["uid"];
                const argsValues_1966: any[] = [uid];
                const result_1964 = ARFuture.of<UUID[]>();
                sCtx_1884.invokeRemoteMethodAfter("getAccessGroups", result_1964, argsNames_1965, argsValues_1966);
                const reqId_1962 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1964 as ARFuture<UUID[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_UUID).deserialize(sCtx_1884, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1964.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1963.writeInt(reqId_1962);
                FastMeta.META_UUID.serialize(sCtx_1884, uid, dataOut_1963);
                sCtx_1884.sendToRemote(dataOut_1963.toArray());
                return result_1964;
                
            }
            , getAccessGroup: (groupId: UUID): ARFuture<AccessGroup> =>  {
                const dataOut_1968 = new DataInOut();
                dataOut_1968.writeByte(15);
                const argsNames_1970: string[] = ["groupId"];
                const argsValues_1971: any[] = [groupId];
                const result_1969 = ARFuture.of<AccessGroup>();
                sCtx_1884.invokeRemoteMethodAfter("getAccessGroup", result_1969, argsNames_1970, argsValues_1971);
                const reqId_1967 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1969 as ARFuture<AccessGroup>).tryDone(AccessGroup.META.deserialize(sCtx_1884, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1969.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1968.writeInt(reqId_1967);
                FastMeta.META_UUID.serialize(sCtx_1884, groupId, dataOut_1968);
                sCtx_1884.sendToRemote(dataOut_1968.toArray());
                return result_1969;
                
            }
            , getAllAccessedClients: (uid: UUID): ARFuture<UUID[]> =>  {
                const dataOut_1973 = new DataInOut();
                dataOut_1973.writeByte(16);
                const argsNames_1975: string[] = ["uid"];
                const argsValues_1976: any[] = [uid];
                const result_1974 = ARFuture.of<UUID[]>();
                sCtx_1884.invokeRemoteMethodAfter("getAllAccessedClients", result_1974, argsNames_1975, argsValues_1976);
                const reqId_1972 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1974 as ARFuture<UUID[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_UUID).deserialize(sCtx_1884, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1974.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1973.writeInt(reqId_1972);
                FastMeta.META_UUID.serialize(sCtx_1884, uid, dataOut_1973);
                sCtx_1884.sendToRemote(dataOut_1973.toArray());
                return result_1974;
                
            }
            , checkAccessForSendMessage2: (uid1: UUID, uid2: UUID): ARFuture<boolean> =>  {
                const dataOut_1978 = new DataInOut();
                dataOut_1978.writeByte(17);
                const argsNames_1980: string[] = ["uid1", "uid2"];
                const argsValues_1981: any[] = [uid1, uid2];
                const result_1979 = ARFuture.of<boolean>();
                sCtx_1884.invokeRemoteMethodAfter("checkAccessForSendMessage2", result_1979, argsNames_1980, argsValues_1981);
                const reqId_1977 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1979 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1884, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1979.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1978.writeInt(reqId_1977);
                FastMeta.META_UUID.serialize(sCtx_1884, uid1, dataOut_1978);
                FastMeta.META_UUID.serialize(sCtx_1884, uid2, dataOut_1978);
                sCtx_1884.sendToRemote(dataOut_1978.toArray());
                return result_1979;
                
            }
            , sendTelemetry: (telemetry: Telemetry): void =>  {
                const dataOut_1983 = new DataInOut();
                dataOut_1983.writeByte(18);
                const argsNames_1985: string[] = ["telemetry"];
                const argsValues_1986: any[] = [telemetry];
                sCtx_1884.invokeRemoteMethodAfter("sendTelemetry", null, argsNames_1985, argsValues_1986);
                Telemetry.META.serialize(sCtx_1884, telemetry, dataOut_1983);
                sCtx_1884.sendToRemote(dataOut_1983.toArray());
                
            }
            , requestAccessGroupsForClients: (uids: UUID[]): void =>  {
                const dataOut_1988 = new DataInOut();
                dataOut_1988.writeByte(19);
                const argsNames_1990: string[] = ["uids"];
                const argsValues_1991: any[] = [uids];
                sCtx_1884.invokeRemoteMethodAfter("requestAccessGroupsForClients", null, argsNames_1990, argsValues_1991);
                SerializerPackNumber.INSTANCE.put(dataOut_1988, uids.length);
                for (const el_1992 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1884, el_1992, dataOut_1988);
                    
                }
                sCtx_1884.sendToRemote(dataOut_1988.toArray());
                
            }
            , requestAccessGroupsItems: (ids: UUID[]): void =>  {
                const dataOut_1994 = new DataInOut();
                dataOut_1994.writeByte(20);
                const argsNames_1996: string[] = ["ids"];
                const argsValues_1997: any[] = [ids];
                sCtx_1884.invokeRemoteMethodAfter("requestAccessGroupsItems", null, argsNames_1996, argsValues_1997);
                SerializerPackNumber.INSTANCE.put(dataOut_1994, ids.length);
                for (const el_1998 of ids)  {
                    FastMeta.META_UUID.serialize(sCtx_1884, el_1998, dataOut_1994);
                    
                }
                sCtx_1884.sendToRemote(dataOut_1994.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_2000 = new DataInOut();
                dataOut_2000.writeByte(22);
                const argsNames_2002: string[] = ["uid", "groups"];
                const argsValues_2003: any[] = [uid, groups];
                sCtx_1884.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_2002, argsValues_2003);
                FastMeta.META_UUID.serialize(sCtx_1884, uid, dataOut_2000);
                SerializerPackNumber.INSTANCE.put(dataOut_2000, groups.length);
                for (const el_2004 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1884, el_2004, dataOut_2000);
                    
                }
                sCtx_1884.sendToRemote(dataOut_2000.toArray());
                
            }
            , addItemsToAccessGroup: (id: UUID, groups: UUID[]): void =>  {
                const dataOut_2006 = new DataInOut();
                dataOut_2006.writeByte(23);
                const argsNames_2008: string[] = ["id", "groups"];
                const argsValues_2009: any[] = [id, groups];
                sCtx_1884.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_2008, argsValues_2009);
                FastMeta.META_UUID.serialize(sCtx_1884, id, dataOut_2006);
                SerializerPackNumber.INSTANCE.put(dataOut_2006, groups.length);
                for (const el_2010 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1884, el_2010, dataOut_2006);
                    
                }
                sCtx_1884.sendToRemote(dataOut_2006.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: UUID, groups: UUID[]): void =>  {
                const dataOut_2012 = new DataInOut();
                dataOut_2012.writeByte(24);
                const argsNames_2014: string[] = ["id", "groups"];
                const argsValues_2015: any[] = [id, groups];
                sCtx_1884.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_2014, argsValues_2015);
                FastMeta.META_UUID.serialize(sCtx_1884, id, dataOut_2012);
                SerializerPackNumber.INSTANCE.put(dataOut_2012, groups.length);
                for (const el_2016 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1884, el_2016, dataOut_2012);
                    
                }
                sCtx_1884.sendToRemote(dataOut_2012.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_2018 = new DataInOut();
                dataOut_2018.writeByte(25);
                const argsNames_2020: string[] = ["uid", "groups"];
                const argsValues_2021: any[] = [uid, groups];
                sCtx_1884.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_2020, argsValues_2021);
                FastMeta.META_UUID.serialize(sCtx_1884, uid, dataOut_2018);
                SerializerPackNumber.INSTANCE.put(dataOut_2018, groups.length);
                for (const el_2022 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1884, el_2022, dataOut_2018);
                    
                }
                sCtx_1884.sendToRemote(dataOut_2018.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_2024 = new DataInOut();
                dataOut_2024.writeByte(26);
                const argsNames_2026: string[] = ["uid", "groups"];
                const argsValues_2027: any[] = [uid, groups];
                sCtx_1884.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_2026, argsValues_2027);
                FastMeta.META_UUID.serialize(sCtx_1884, uid, dataOut_2024);
                SerializerPackNumber.INSTANCE.put(dataOut_2024, groups.length);
                for (const el_2028 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1884, el_2028, dataOut_2024);
                    
                }
                sCtx_1884.sendToRemote(dataOut_2024.toArray());
                
            }
            , requestAllAccessedClients: (uids: UUID[]): void =>  {
                const dataOut_2030 = new DataInOut();
                dataOut_2030.writeByte(27);
                const argsNames_2032: string[] = ["uids"];
                const argsValues_2033: any[] = [uids];
                sCtx_1884.invokeRemoteMethodAfter("requestAllAccessedClients", null, argsNames_2032, argsValues_2033);
                SerializerPackNumber.INSTANCE.put(dataOut_2030, uids.length);
                for (const el_2034 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1884, el_2034, dataOut_2030);
                    
                }
                sCtx_1884.sendToRemote(dataOut_2030.toArray());
                
            }
            , requestAccessCheck: (requests: AccessCheckPair[]): void =>  {
                const dataOut_2036 = new DataInOut();
                dataOut_2036.writeByte(28);
                const argsNames_2038: string[] = ["requests"];
                const argsValues_2039: any[] = [requests];
                sCtx_1884.invokeRemoteMethodAfter("requestAccessCheck", null, argsNames_2038, argsValues_2039);
                SerializerPackNumber.INSTANCE.put(dataOut_2036, requests.length);
                for (const el_2040 of requests)  {
                    AccessCheckPair.META.serialize(sCtx_1884, el_2040, dataOut_2036);
                    
                }
                sCtx_1884.sendToRemote(dataOut_2036.toArray());
                
            }
            , getClientActivity: (uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<ClientActivity[]> =>  {
                const dataOut_2042 = new DataInOut();
                dataOut_2042.writeByte(29);
                const argsNames_2044: string[] = ["uid", "fromTime", "toTime", "limit"];
                const argsValues_2045: any[] = [uid, fromTime, toTime, limit];
                const result_2043 = ARFuture.of<ClientActivity[]>();
                sCtx_1884.invokeRemoteMethodAfter("getClientActivity", result_2043, argsNames_2044, argsValues_2045);
                const reqId_2041 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2043 as ARFuture<ClientActivity[]>).tryDone(FastMeta.getMetaArray(ClientActivity.META).deserialize(sCtx_1884, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2043.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2042.writeInt(reqId_2041);
                FastMeta.META_UUID.serialize(sCtx_1884, uid, dataOut_2042);
                dataOut_2042.writeLong(fromTime);
                dataOut_2042.writeLong(toTime);
                dataOut_2042.writeInt(limit);
                sCtx_1884.sendToRemote(dataOut_2042.toArray());
                return result_2043;
                
            }
            , searchClientLogs: (uid: UUID, query: string, limit: number): ARFuture<ClientLogEntry[]> =>  {
                const dataOut_2047 = new DataInOut();
                dataOut_2047.writeByte(30);
                const argsNames_2049: string[] = ["uid", "query", "limit"];
                const argsValues_2050: any[] = [uid, query, limit];
                const result_2048 = ARFuture.of<ClientLogEntry[]>();
                sCtx_1884.invokeRemoteMethodAfter("searchClientLogs", result_2048, argsNames_2049, argsValues_2050);
                const reqId_2046 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2048 as ARFuture<ClientLogEntry[]>).tryDone(FastMeta.getMetaArray(ClientLogEntry.META).deserialize(sCtx_1884, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2048.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2047.writeInt(reqId_2046);
                FastMeta.META_UUID.serialize(sCtx_1884, uid, dataOut_2047);
                const stringBytes_2051 = new TextEncoder().encode(query);
                SerializerPackNumber.INSTANCE.put(dataOut_2047, stringBytes_2051.length);
                dataOut_2047.write(stringBytes_2051);
                dataOut_2047.writeInt(limit);
                sCtx_1884.sendToRemote(dataOut_2047.toArray());
                return result_2048;
                
            }
            , getClientConnections: (uid: UUID, limit: number): ARFuture<ClientConnectionInfo[]> =>  {
                const dataOut_2054 = new DataInOut();
                dataOut_2054.writeByte(31);
                const argsNames_2056: string[] = ["uid", "limit"];
                const argsValues_2057: any[] = [uid, limit];
                const result_2055 = ARFuture.of<ClientConnectionInfo[]>();
                sCtx_1884.invokeRemoteMethodAfter("getClientConnections", result_2055, argsNames_2056, argsValues_2057);
                const reqId_2053 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2055 as ARFuture<ClientConnectionInfo[]>).tryDone(FastMeta.getMetaArray(ClientConnectionInfo.META).deserialize(sCtx_1884, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2055.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2054.writeInt(reqId_2053);
                FastMeta.META_UUID.serialize(sCtx_1884, uid, dataOut_2054);
                dataOut_2054.writeInt(limit);
                sCtx_1884.sendToRemote(dataOut_2054.toArray());
                return result_2055;
                
            }
            , getClientMessages: (uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<MessageInfo[]> =>  {
                const dataOut_2059 = new DataInOut();
                dataOut_2059.writeByte(32);
                const argsNames_2061: string[] = ["uid", "fromTime", "toTime", "limit"];
                const argsValues_2062: any[] = [uid, fromTime, toTime, limit];
                const result_2060 = ARFuture.of<MessageInfo[]>();
                sCtx_1884.invokeRemoteMethodAfter("getClientMessages", result_2060, argsNames_2061, argsValues_2062);
                const reqId_2058 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2060 as ARFuture<MessageInfo[]>).tryDone(FastMeta.getMetaArray(MessageInfo.META).deserialize(sCtx_1884, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2060.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2059.writeInt(reqId_2058);
                FastMeta.META_UUID.serialize(sCtx_1884, uid, dataOut_2059);
                dataOut_2059.writeLong(fromTime);
                dataOut_2059.writeLong(toTime);
                dataOut_2059.writeInt(limit);
                sCtx_1884.sendToRemote(dataOut_2059.toArray());
                return result_2060;
                
            }
            , setNextReadDelay: (delayMillis: bigint): void =>  {
                const dataOut_2064 = new DataInOut();
                dataOut_2064.writeByte(33);
                const argsNames_2066: string[] = ["delayMillis"];
                const argsValues_2067: any[] = [delayMillis];
                sCtx_1884.invokeRemoteMethodAfter("setNextReadDelay", null, argsNames_2066, argsValues_2067);
                dataOut_2064.writeLong(delayMillis);
                sCtx_1884.sendToRemote(dataOut_2064.toArray());
                
            }
            , getUap: (uid: UUID): ARFuture<Uap> =>  {
                const dataOut_2069 = new DataInOut();
                dataOut_2069.writeByte(34);
                const argsNames_2071: string[] = ["uid"];
                const argsValues_2072: any[] = [uid];
                const result_2070 = ARFuture.of<Uap>();
                sCtx_1884.invokeRemoteMethodAfter("getUap", result_2070, argsNames_2071, argsValues_2072);
                const reqId_2068 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2070 as ARFuture<Uap>).tryDone(Uap.META.deserialize(sCtx_1884, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2070.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2069.writeInt(reqId_2068);
                FastMeta.META_UUID.serialize(sCtx_1884, uid, dataOut_2069);
                sCtx_1884.sendToRemote(dataOut_2069.toArray());
                return result_2070;
                
            }
            , requestWebRtcSession: (uid: UUID): ARFuture<WebRtcSession> =>  {
                const dataOut_2074 = new DataInOut();
                dataOut_2074.writeByte(40);
                const argsNames_2076: string[] = ["uid"];
                const argsValues_2077: any[] = [uid];
                const result_2075 = ARFuture.of<WebRtcSession>();
                sCtx_1884.invokeRemoteMethodAfter("requestWebRtcSession", result_2075, argsNames_2076, argsValues_2077);
                const reqId_2073 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2075 as ARFuture<WebRtcSession>).tryDone(WebRtcSession.META.deserialize(sCtx_1884, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2075.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2074.writeInt(reqId_2073);
                FastMeta.META_UUID.serialize(sCtx_1884, uid, dataOut_2074);
                sCtx_1884.sendToRemote(dataOut_2074.toArray());
                return result_2075;
                
            }
            , publishWebRtcSession: (session: WebRtcSession): void =>  {
                const dataOut_2079 = new DataInOut();
                dataOut_2079.writeByte(41);
                const argsNames_2081: string[] = ["session"];
                const argsValues_2082: any[] = [session];
                sCtx_1884.invokeRemoteMethodAfter("publishWebRtcSession", null, argsNames_2081, argsValues_2082);
                WebRtcSession.META.serialize(sCtx_1884, session, dataOut_2079);
                sCtx_1884.sendToRemote(dataOut_2079.toArray());
                
            }
            , selfDestruct: (): AFuture =>  {
                const dataOut_2084 = new DataInOut();
                dataOut_2084.writeByte(42);
                const argsNames_2086: string[] = [];
                const argsValues_2087: any[] = [];
                const result_2085 = AFuture.make();
                sCtx_1884.invokeRemoteMethodAfter("selfDestruct", result_2085, argsNames_2086, argsValues_2087);
                const reqId_2083 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2085 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2085.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2084.writeInt(reqId_2083);
                sCtx_1884.sendToRemote(dataOut_2084.toArray());
                return result_2085;
                
            }
            , getServers: (): ARFuture<ServerDescriptorWithGeo[]> =>  {
                const dataOut_2089 = new DataInOut();
                dataOut_2089.writeByte(43);
                const argsNames_2091: string[] = [];
                const argsValues_2092: any[] = [];
                const result_2090 = ARFuture.of<ServerDescriptorWithGeo[]>();
                sCtx_1884.invokeRemoteMethodAfter("getServers", result_2090, argsNames_2091, argsValues_2092);
                const reqId_2088 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2090 as ARFuture<ServerDescriptorWithGeo[]>).tryDone(FastMeta.getMetaArray(ServerDescriptorWithGeo.META).deserialize(sCtx_1884, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2090.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2089.writeInt(reqId_2088);
                sCtx_1884.sendToRemote(dataOut_2089.toArray());
                return result_2090;
                
            }
            , getClientTiming: (uid: UUID): ARFuture<ClientTiming> =>  {
                const dataOut_2094 = new DataInOut();
                dataOut_2094.writeByte(35);
                const argsNames_2096: string[] = ["uid"];
                const argsValues_2097: any[] = [uid];
                const result_2095 = ARFuture.of<ClientTiming>();
                sCtx_1884.invokeRemoteMethodAfter("getClientTiming", result_2095, argsNames_2096, argsValues_2097);
                const reqId_2093 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2095 as ARFuture<ClientTiming>).tryDone(ClientTiming.META.deserialize(sCtx_1884, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2095.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2094.writeInt(reqId_2093);
                FastMeta.META_UUID.serialize(sCtx_1884, uid, dataOut_2094);
                sCtx_1884.sendToRemote(dataOut_2094.toArray());
                return result_2095;
                
            }
            , openReceiveWindow: (durationMs: bigint): AFuture =>  {
                const dataOut_2099 = new DataInOut();
                dataOut_2099.writeByte(36);
                const argsNames_2101: string[] = ["durationMs"];
                const argsValues_2102: any[] = [durationMs];
                const result_2100 = AFuture.make();
                sCtx_1884.invokeRemoteMethodAfter("openReceiveWindow", result_2100, argsNames_2101, argsValues_2102);
                const reqId_2098 = sCtx_1884.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2100 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2100.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2099.writeInt(reqId_2098);
                dataOut_2099.writeLong(durationMs);
                sCtx_1884.sendToRemote(dataOut_2099.toArray());
                return result_2100;
                
            }
            , switchVersion: (version: number): void =>  {
                const dataOut_2104 = new DataInOut();
                dataOut_2104.writeByte(44);
                const argsNames_2106: string[] = ["version"];
                const argsValues_2107: any[] = [version];
                sCtx_1884.invokeRemoteMethodAfter("switchVersion", null, argsNames_2106, argsValues_2107);
                dataOut_2104.writeInt(version);
                sCtx_1884.sendToRemote(dataOut_2104.toArray());
                
            }
            , setReceiveWindow: (startsInMs: bigint, durationMs: bigint): void =>  {
                const dataOut_2109 = new DataInOut();
                dataOut_2109.writeByte(45);
                const argsNames_2111: string[] = ["startsInMs", "durationMs"];
                const argsValues_2112: any[] = [startsInMs, durationMs];
                sCtx_1884.invokeRemoteMethodAfter("setReceiveWindow", null, argsNames_2111, argsValues_2112);
                dataOut_2109.writeLong(startsInMs);
                dataOut_2109.writeLong(durationMs);
                sCtx_1884.sendToRemote(dataOut_2109.toArray());
                
            }
            , probePacket: (testId: number, sequence: number, payload: Uint8Array): void =>  {
                const dataOut_2114 = new DataInOut();
                dataOut_2114.writeByte(46);
                const argsNames_2116: string[] = ["testId", "sequence", "payload"];
                const argsValues_2117: any[] = [testId, sequence, payload];
                sCtx_1884.invokeRemoteMethodAfter("probePacket", null, argsNames_2116, argsValues_2117);
                dataOut_2114.writeInt(testId);
                dataOut_2114.writeInt(sequence);
                SerializerPackNumber.INSTANCE.put(dataOut_2114, payload.length);
                dataOut_2114.write(payload);
                sCtx_1884.sendToRemote(dataOut_2114.toArray());
                
            }
            , requestProbeReport: (testId: number, firstSequence: number, count: number): void =>  {
                const dataOut_2120 = new DataInOut();
                dataOut_2120.writeByte(47);
                const argsNames_2122: string[] = ["testId", "firstSequence", "count"];
                const argsValues_2123: any[] = [testId, firstSequence, count];
                sCtx_1884.invokeRemoteMethodAfter("requestProbeReport", null, argsNames_2122, argsValues_2123);
                dataOut_2120.writeInt(testId);
                dataOut_2120.writeInt(firstSequence);
                dataOut_2120.writeInt(count);
                sCtx_1884.sendToRemote(dataOut_2120.toArray());
                
            }
            , openClient(uid: UUID, factory: (api: ServerApiByUidRemote) => any, converter: BytesConverter, ...keys: any[]): ServerApiByUidRemote  {
                return sCtx_1884.findContext(ctx =>  {
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
            case 35: // getClientTiming
            case 36: // openReceiveWindow
            case 44: // switchVersion
            case 45: // setReceiveWindow
            case 46: // probePacket
            case 47: // requestProbeReport
            return true;
            default: return false;
            
        }
        
    }
    
}
export class LoginApiGetTimeUTCArgumentsMetaBodyImpl implements FastMetaType<LoginApiGetTimeUTCArguments>  {
    serialize(sCtx_2124: MetaContext, obj_2126: LoginApiGetTimeUTCArguments, _out_2127: DataOut): void  {
        
    }
    deserialize(sCtx_2125: MetaContext, in__2128: DataIn): LoginApiGetTimeUTCArguments  {
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
    serialize(sCtx_2129: MetaContext, obj_2130: LoginApiLoginByUIDArguments, _out_2131: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2129, obj_2130.uid, _out_2131);
        LoginStream.META.serialize(sCtx_2129, obj_2130.data, _out_2131);
        
    }
    deserialize(sCtx_2129: MetaContext, in__2132: DataIn): LoginApiLoginByUIDArguments  {
        try  {
            let uid_2133: UUID;
            let data_2134: LoginStream;
            uid_2133 = FastMeta.META_UUID.deserialize(sCtx_2129, in__2132);
            data_2134 = LoginStream.META.deserialize(sCtx_2129, in__2132);
            return new LoginApiLoginByUIDArguments(uid_2133, data_2134);
            
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
    serialize(sCtx_2135: MetaContext, obj_2136: LoginApiLoginByAliasArguments, _out_2137: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2135, obj_2136.alias, _out_2137);
        LoginStream.META.serialize(sCtx_2135, obj_2136.data, _out_2137);
        
    }
    deserialize(sCtx_2135: MetaContext, in__2138: DataIn): LoginApiLoginByAliasArguments  {
        try  {
            let alias_2139: UUID;
            let data_2140: LoginStream;
            alias_2139 = FastMeta.META_UUID.deserialize(sCtx_2135, in__2138);
            data_2140 = LoginStream.META.deserialize(sCtx_2135, in__2138);
            return new LoginApiLoginByAliasArguments(alias_2139, data_2140);
            
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
    serialize(sCtx_2141: MetaContext, obj_2143: LoginApiGetMyIpArguments, _out_2144: DataOut): void  {
        
    }
    deserialize(sCtx_2142: MetaContext, in__2145: DataIn): LoginApiGetMyIpArguments  {
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
                    const reqId_2146 = dataIn.readInt();
                    const argsObject_2147 = new LoginApiGetTimeUTCArguments();
                    const argsNames_2148: string[] = [];
                    const argsValues_2149: any[] = [];
                    ctx.invokeLocalMethodBefore("getTimeUTC", argsNames_2148, argsValues_2149);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getTimeUTCArguments === "function" ? (localApi as any).getTimeUTCArguments(argsObject_2147) : localApi.getTimeUTC());
                    ctx.invokeLocalMethodAfter("getTimeUTC", resultFuture, argsNames_2148, argsValues_2149);
                    resultFuture.to((v_2151: bigint) =>  {
                        const data_2150 = new DataInOut();
                        data_2150.writeLong(v_2151);
                        ctx.sendResultToRemote(reqId_2146, data_2150.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let uid_2153: UUID;
                    let data_2154: LoginStream;
                    uid_2153 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_2154 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsObject_2155 = new LoginApiLoginByUIDArguments(uid_2153, data_2154);
                    const argsNames_2156: string[] = ["uid", "data"];
                    const argsValues_2157: any[] = [uid_2153, data_2154];
                    ctx.invokeLocalMethodBefore("loginByUID", argsNames_2156, argsValues_2157);
                    (typeof (localApi as any).loginByUIDArguments === "function" ? (localApi as any).loginByUIDArguments(argsObject_2155) : localApi.loginByUID(uid_2153, data_2154));
                    ctx.invokeLocalMethodAfter("loginByUID", null, argsNames_2156, argsValues_2157);
                    break;
                    
                }
                case 5:  {
                    let alias_2159: UUID;
                    let data_2160: LoginStream;
                    alias_2159 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_2160 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsObject_2161 = new LoginApiLoginByAliasArguments(alias_2159, data_2160);
                    const argsNames_2162: string[] = ["alias", "data"];
                    const argsValues_2163: any[] = [alias_2159, data_2160];
                    ctx.invokeLocalMethodBefore("loginByAlias", argsNames_2162, argsValues_2163);
                    (typeof (localApi as any).loginByAliasArguments === "function" ? (localApi as any).loginByAliasArguments(argsObject_2161) : localApi.loginByAlias(alias_2159, data_2160));
                    ctx.invokeLocalMethodAfter("loginByAlias", null, argsNames_2162, argsValues_2163);
                    break;
                    
                }
                case 6:  {
                    const reqId_2164 = dataIn.readInt();
                    const argsObject_2165 = new LoginApiGetMyIpArguments();
                    const argsNames_2166: string[] = [];
                    const argsValues_2167: any[] = [];
                    ctx.invokeLocalMethodBefore("getMyIp", argsNames_2166, argsValues_2167);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getMyIpArguments === "function" ? (localApi as any).getMyIpArguments(argsObject_2165) : localApi.getMyIp());
                    ctx.invokeLocalMethodAfter("getMyIp", resultFuture, argsNames_2166, argsValues_2167);
                    resultFuture.to((v_2169: IpInfo) =>  {
                        const data_2168 = new DataInOut();
                        IpInfo.META.serialize(ctx, v_2169, data_2168);
                        ctx.sendResultToRemote(reqId_2164, data_2168.toArray());
                        
                    }
                    );
                    break;
                    
                }
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
            const switchedMeta = ctx.applyLocalApiSwitch();
            if (switchedMeta !== null)  {
                if (dataIn.isReadable())  {
                    switchedMeta.makeLocal(ctx, dataIn);
                    
                }
                return;
                
            }
            
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: LoginApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_2170: MetaContext): LoginApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2170.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2170.flush();
                
            }
            , getFastMetaContext: () => sCtx_2170, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_2170.makeRemote(meta), getTimeUTC: (): ARFuture<bigint> =>  {
                const dataOut_2172 = new DataInOut();
                dataOut_2172.writeByte(3);
                const argsNames_2174: string[] = [];
                const argsValues_2175: any[] = [];
                const result_2173 = ARFuture.of<bigint>();
                sCtx_2170.invokeRemoteMethodAfter("getTimeUTC", result_2173, argsNames_2174, argsValues_2175);
                const reqId_2171 = sCtx_2170.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2173 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_2170, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2173.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2172.writeInt(reqId_2171);
                sCtx_2170.sendToRemote(dataOut_2172.toArray());
                return result_2173;
                
            }
            , loginByUID: (uid: UUID, data: LoginStream): void =>  {
                const dataOut_2177 = new DataInOut();
                dataOut_2177.writeByte(4);
                const argsNames_2179: string[] = ["uid", "data"];
                const argsValues_2180: any[] = [uid, data];
                sCtx_2170.invokeRemoteMethodAfter("loginByUID", null, argsNames_2179, argsValues_2180);
                FastMeta.META_UUID.serialize(sCtx_2170, uid, dataOut_2177);
                LoginStream.META.serialize(sCtx_2170, data, dataOut_2177);
                sCtx_2170.sendToRemote(dataOut_2177.toArray());
                
            }
            , loginByAlias: (alias: UUID, data: LoginStream): void =>  {
                const dataOut_2182 = new DataInOut();
                dataOut_2182.writeByte(5);
                const argsNames_2184: string[] = ["alias", "data"];
                const argsValues_2185: any[] = [alias, data];
                sCtx_2170.invokeRemoteMethodAfter("loginByAlias", null, argsNames_2184, argsValues_2185);
                FastMeta.META_UUID.serialize(sCtx_2170, alias, dataOut_2182);
                LoginStream.META.serialize(sCtx_2170, data, dataOut_2182);
                sCtx_2170.sendToRemote(dataOut_2182.toArray());
                
            }
            , getMyIp: (): ARFuture<IpInfo> =>  {
                const dataOut_2187 = new DataInOut();
                dataOut_2187.writeByte(6);
                const argsNames_2189: string[] = [];
                const argsValues_2190: any[] = [];
                const result_2188 = ARFuture.of<IpInfo>();
                sCtx_2170.invokeRemoteMethodAfter("getMyIp", result_2188, argsNames_2189, argsValues_2190);
                const reqId_2186 = sCtx_2170.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2188 as ARFuture<IpInfo>).tryDone(IpInfo.META.deserialize(sCtx_2170, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2188.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2187.writeInt(reqId_2186);
                sCtx_2170.sendToRemote(dataOut_2187.toArray());
                return result_2188;
                
            }
            , openLoginByUID(uid: UUID, factory: (api: AuthorizedApiRemote) => ClientApiSafe, converter: BytesConverter, ...keys: any[]): AuthorizedApiRemote  {
                return sCtx_2170.findContext(ctx =>  {
                    ctx.onFlushData(data => this.loginByUID(uid, LoginStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((AuthorizedApi as any).META));
                    
                }
                , ...keys).makeRemote((AuthorizedApi as any).META) as AuthorizedApiRemote;
                
            }
            , openLoginByAlias(alias: UUID, factory: (api: AuthorizedApiRemote) => ClientApiSafe, converter: BytesConverter, ...keys: any[]): AuthorizedApiRemote  {
                return sCtx_2170.findContext(ctx =>  {
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
            const switchedMeta = ctx.applyLocalApiSwitch();
            if (switchedMeta !== null)  {
                if (dataIn.isReadable())  {
                    switchedMeta.makeLocal(ctx, dataIn);
                    
                }
                return;
                
            }
            
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ServerApiByUidClient): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_2191: MetaContext): ServerApiByUidClientRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2191.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2191.flush();
                
            }
            , getFastMetaContext: () => sCtx_2191, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_2191.makeRemote(meta), 
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
    serialize(sCtx_2192: MetaContext, obj_2194: ServerApiByUidGetBalanceArguments, _out_2195: DataOut): void  {
        
    }
    deserialize(sCtx_2193: MetaContext, in__2196: DataIn): ServerApiByUidGetBalanceArguments  {
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
    serialize(sCtx_2197: MetaContext, obj_2198: ServerApiByUidSetParentArguments, _out_2199: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2197, obj_2198.uid, _out_2199);
        
    }
    deserialize(sCtx_2197: MetaContext, in__2200: DataIn): ServerApiByUidSetParentArguments  {
        try  {
            let uid_2201: UUID;
            uid_2201 = FastMeta.META_UUID.deserialize(sCtx_2197, in__2200);
            return new ServerApiByUidSetParentArguments(uid_2201);
            
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
    serialize(sCtx_2202: MetaContext, obj_2204: ServerApiByUidBlockArguments, _out_2205: DataOut): void  {
        
    }
    deserialize(sCtx_2203: MetaContext, in__2206: DataIn): ServerApiByUidBlockArguments  {
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
    serialize(sCtx_2207: MetaContext, obj_2209: ServerApiByUidGetPositionArguments, _out_2210: DataOut): void  {
        
    }
    deserialize(sCtx_2208: MetaContext, in__2211: DataIn): ServerApiByUidGetPositionArguments  {
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
    serialize(sCtx_2212: MetaContext, obj_2214: ServerApiByUidGetParentArguments, _out_2215: DataOut): void  {
        
    }
    deserialize(sCtx_2213: MetaContext, in__2216: DataIn): ServerApiByUidGetParentArguments  {
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
    serialize(sCtx_2217: MetaContext, obj_2219: ServerApiByUidGetBeneficiaryArguments, _out_2220: DataOut): void  {
        
    }
    deserialize(sCtx_2218: MetaContext, in__2221: DataIn): ServerApiByUidGetBeneficiaryArguments  {
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
    serialize(sCtx_2222: MetaContext, obj_2223: ServerApiByUidSetBeneficiaryArguments, _out_2224: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2222, obj_2223.uid, _out_2224);
        
    }
    deserialize(sCtx_2222: MetaContext, in__2225: DataIn): ServerApiByUidSetBeneficiaryArguments  {
        try  {
            let uid_2226: UUID;
            uid_2226 = FastMeta.META_UUID.deserialize(sCtx_2222, in__2225);
            return new ServerApiByUidSetBeneficiaryArguments(uid_2226);
            
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
    serialize(sCtx_2227: MetaContext, obj_2229: ServerApiByUidGetBlockTimeArguments, _out_2230: DataOut): void  {
        
    }
    deserialize(sCtx_2228: MetaContext, in__2231: DataIn): ServerApiByUidGetBlockTimeArguments  {
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
    serialize(sCtx_2232: MetaContext, obj_2234: ServerApiByUidUnblockArguments, _out_2235: DataOut): void  {
        
    }
    deserialize(sCtx_2233: MetaContext, in__2236: DataIn): ServerApiByUidUnblockArguments  {
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
    serialize(sCtx_2237: MetaContext, obj_2239: ServerApiByUidCreateTimeArguments, _out_2240: DataOut): void  {
        
    }
    deserialize(sCtx_2238: MetaContext, in__2241: DataIn): ServerApiByUidCreateTimeArguments  {
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
    serialize(sCtx_2242: MetaContext, obj_2244: ServerApiByUidOnlineTimeArguments, _out_2245: DataOut): void  {
        
    }
    deserialize(sCtx_2243: MetaContext, in__2246: DataIn): ServerApiByUidOnlineTimeArguments  {
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
    serialize(sCtx_2247: MetaContext, obj_2248: ServerApiByUidAddAccessGroupArguments, _out_2249: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2247, obj_2248.groupId, _out_2249);
        
    }
    deserialize(sCtx_2247: MetaContext, in__2250: DataIn): ServerApiByUidAddAccessGroupArguments  {
        try  {
            let groupId_2251: UUID;
            groupId_2251 = FastMeta.META_UUID.deserialize(sCtx_2247, in__2250);
            return new ServerApiByUidAddAccessGroupArguments(groupId_2251);
            
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
    serialize(sCtx_2252: MetaContext, obj_2253: ServerApiByUidRemoveAccessGroupArguments, _out_2254: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2252, obj_2253.groupId, _out_2254);
        
    }
    deserialize(sCtx_2252: MetaContext, in__2255: DataIn): ServerApiByUidRemoveAccessGroupArguments  {
        try  {
            let groupId_2256: UUID;
            groupId_2256 = FastMeta.META_UUID.deserialize(sCtx_2252, in__2255);
            return new ServerApiByUidRemoveAccessGroupArguments(groupId_2256);
            
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
    serialize(sCtx_2257: MetaContext, obj_2258: ServerApiByUidSetMsgQueueLimitArguments, _out_2259: DataOut): void  {
        _out_2259.writeInt(obj_2258.limit);
        
    }
    deserialize(sCtx_2257: MetaContext, in__2260: DataIn): ServerApiByUidSetMsgQueueLimitArguments  {
        try  {
            let limit_2261: number;
            limit_2261 = in__2260.readInt();
            return new ServerApiByUidSetMsgQueueLimitArguments(limit_2261);
            
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
    serialize(sCtx_2262: MetaContext, obj_2263: ServerApiByUidSetMsgTimeLimitArguments, _out_2264: DataOut): void  {
        _out_2264.writeInt(obj_2263.seconds);
        
    }
    deserialize(sCtx_2262: MetaContext, in__2265: DataIn): ServerApiByUidSetMsgTimeLimitArguments  {
        try  {
            let seconds_2266: number;
            seconds_2266 = in__2265.readInt();
            return new ServerApiByUidSetMsgTimeLimitArguments(seconds_2266);
            
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
    serialize(sCtx_2267: MetaContext, obj_2268: ServerApiByUidAddServersToCloudArguments, _out_2269: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_2269, obj_2268.sids.length);
        for (const el_2271 of obj_2268.sids)  {
            _out_2269.writeShort(el_2271);
            
        }
        
    }
    deserialize(sCtx_2267: MetaContext, in__2270: DataIn): ServerApiByUidAddServersToCloudArguments  {
        try  {
            let sids_2272: number[];
            const len_2274 = Number(DeserializerPackNumber.INSTANCE.put(in__2270));
            sids_2272 = new Array<number>(len_2274);
            for (let idx_2273 = 0;
            idx_2273 < len_2274;
            idx_2273++)  {
                sids_2272[idx_2273] = in__2270.readShort();
                
            }
            return new ServerApiByUidAddServersToCloudArguments(sids_2272);
            
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
    serialize(sCtx_2275: MetaContext, obj_2276: ServerApiByUidRemoveServersFromCloudArguments, _out_2277: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_2277, obj_2276.sids.length);
        for (const el_2279 of obj_2276.sids)  {
            _out_2277.writeShort(el_2279);
            
        }
        
    }
    deserialize(sCtx_2275: MetaContext, in__2278: DataIn): ServerApiByUidRemoveServersFromCloudArguments  {
        try  {
            let sids_2280: number[];
            const len_2282 = Number(DeserializerPackNumber.INSTANCE.put(in__2278));
            sids_2280 = new Array<number>(len_2282);
            for (let idx_2281 = 0;
            idx_2281 < len_2282;
            idx_2281++)  {
                sids_2280[idx_2281] = in__2278.readShort();
                
            }
            return new ServerApiByUidRemoveServersFromCloudArguments(sids_2280);
            
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
                    const reqId_2283 = dataIn.readInt();
                    const argsObject_2284 = new ServerApiByUidGetBalanceArguments();
                    const argsNames_2285: string[] = [];
                    const argsValues_2286: any[] = [];
                    ctx.invokeLocalMethodBefore("getBalance", argsNames_2285, argsValues_2286);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getBalanceArguments === "function" ? (localApi as any).getBalanceArguments(argsObject_2284) : localApi.getBalance());
                    ctx.invokeLocalMethodAfter("getBalance", resultFuture, argsNames_2285, argsValues_2286);
                    resultFuture.to((v_2288: bigint) =>  {
                        const data_2287 = new DataInOut();
                        data_2287.writeLong(v_2288);
                        ctx.sendResultToRemote(reqId_2283, data_2287.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    const reqId_2289 = dataIn.readInt();
                    let uid_2290: UUID;
                    uid_2290 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2291 = new ServerApiByUidSetParentArguments(uid_2290);
                    const argsNames_2292: string[] = ["uid"];
                    const argsValues_2293: any[] = [uid_2290];
                    ctx.invokeLocalMethodBefore("setParent", argsNames_2292, argsValues_2293);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).setParentArguments === "function" ? (localApi as any).setParentArguments(argsObject_2291) : localApi.setParent(uid_2290));
                    ctx.invokeLocalMethodAfter("setParent", resultFuture, argsNames_2292, argsValues_2293);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2289);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_2294 = dataIn.readInt();
                    const argsObject_2295 = new ServerApiByUidBlockArguments();
                    const argsNames_2296: string[] = [];
                    const argsValues_2297: any[] = [];
                    ctx.invokeLocalMethodBefore("block", argsNames_2296, argsValues_2297);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).blockArguments === "function" ? (localApi as any).blockArguments(argsObject_2295) : localApi.block());
                    ctx.invokeLocalMethodAfter("block", resultFuture, argsNames_2296, argsValues_2297);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2294);
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    const reqId_2298 = dataIn.readInt();
                    const argsObject_2299 = new ServerApiByUidGetPositionArguments();
                    const argsNames_2300: string[] = [];
                    const argsValues_2301: any[] = [];
                    ctx.invokeLocalMethodBefore("getPosition", argsNames_2300, argsValues_2301);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getPositionArguments === "function" ? (localApi as any).getPositionArguments(argsObject_2299) : localApi.getPosition());
                    ctx.invokeLocalMethodAfter("getPosition", resultFuture, argsNames_2300, argsValues_2301);
                    resultFuture.to((v_2303: CloudConfig) =>  {
                        const data_2302 = new DataInOut();
                        CloudConfig.META.serialize(ctx, v_2303, data_2302);
                        ctx.sendResultToRemote(reqId_2298, data_2302.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 7:  {
                    const reqId_2304 = dataIn.readInt();
                    const argsObject_2305 = new ServerApiByUidGetParentArguments();
                    const argsNames_2306: string[] = [];
                    const argsValues_2307: any[] = [];
                    ctx.invokeLocalMethodBefore("getParent", argsNames_2306, argsValues_2307);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getParentArguments === "function" ? (localApi as any).getParentArguments(argsObject_2305) : localApi.getParent());
                    ctx.invokeLocalMethodAfter("getParent", resultFuture, argsNames_2306, argsValues_2307);
                    resultFuture.to((v_2309: UUID) =>  {
                        const data_2308 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_2309, data_2308);
                        ctx.sendResultToRemote(reqId_2304, data_2308.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 8:  {
                    const reqId_2310 = dataIn.readInt();
                    const argsObject_2311 = new ServerApiByUidGetBeneficiaryArguments();
                    const argsNames_2312: string[] = [];
                    const argsValues_2313: any[] = [];
                    ctx.invokeLocalMethodBefore("getBeneficiary", argsNames_2312, argsValues_2313);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getBeneficiaryArguments === "function" ? (localApi as any).getBeneficiaryArguments(argsObject_2311) : localApi.getBeneficiary());
                    ctx.invokeLocalMethodAfter("getBeneficiary", resultFuture, argsNames_2312, argsValues_2313);
                    resultFuture.to((v_2315: UUID) =>  {
                        const data_2314 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_2315, data_2314);
                        ctx.sendResultToRemote(reqId_2310, data_2314.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_2316 = dataIn.readInt();
                    let uid_2317: UUID;
                    uid_2317 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2318 = new ServerApiByUidSetBeneficiaryArguments(uid_2317);
                    const argsNames_2319: string[] = ["uid"];
                    const argsValues_2320: any[] = [uid_2317];
                    ctx.invokeLocalMethodBefore("setBeneficiary", argsNames_2319, argsValues_2320);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).setBeneficiaryArguments === "function" ? (localApi as any).setBeneficiaryArguments(argsObject_2318) : localApi.setBeneficiary(uid_2317));
                    ctx.invokeLocalMethodAfter("setBeneficiary", resultFuture, argsNames_2319, argsValues_2320);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2316);
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_2321 = dataIn.readInt();
                    const argsObject_2322 = new ServerApiByUidGetBlockTimeArguments();
                    const argsNames_2323: string[] = [];
                    const argsValues_2324: any[] = [];
                    ctx.invokeLocalMethodBefore("getBlockTime", argsNames_2323, argsValues_2324);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getBlockTimeArguments === "function" ? (localApi as any).getBlockTimeArguments(argsObject_2322) : localApi.getBlockTime());
                    ctx.invokeLocalMethodAfter("getBlockTime", resultFuture, argsNames_2323, argsValues_2324);
                    resultFuture.to((v_2326: Date) =>  {
                        const data_2325 = new DataInOut();
                        data_2325.writeLong(v_2326.getTime());
                        ctx.sendResultToRemote(reqId_2321, data_2325.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_2327 = dataIn.readInt();
                    const argsObject_2328 = new ServerApiByUidUnblockArguments();
                    const argsNames_2329: string[] = [];
                    const argsValues_2330: any[] = [];
                    ctx.invokeLocalMethodBefore("unblock", argsNames_2329, argsValues_2330);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).unblockArguments === "function" ? (localApi as any).unblockArguments(argsObject_2328) : localApi.unblock());
                    ctx.invokeLocalMethodAfter("unblock", resultFuture, argsNames_2329, argsValues_2330);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2327);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    const reqId_2331 = dataIn.readInt();
                    const argsObject_2332 = new ServerApiByUidCreateTimeArguments();
                    const argsNames_2333: string[] = [];
                    const argsValues_2334: any[] = [];
                    ctx.invokeLocalMethodBefore("createTime", argsNames_2333, argsValues_2334);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).createTimeArguments === "function" ? (localApi as any).createTimeArguments(argsObject_2332) : localApi.createTime());
                    ctx.invokeLocalMethodAfter("createTime", resultFuture, argsNames_2333, argsValues_2334);
                    resultFuture.to((v_2336: Date) =>  {
                        const data_2335 = new DataInOut();
                        data_2335.writeLong(v_2336.getTime());
                        ctx.sendResultToRemote(reqId_2331, data_2335.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 13:  {
                    const reqId_2337 = dataIn.readInt();
                    const argsObject_2338 = new ServerApiByUidOnlineTimeArguments();
                    const argsNames_2339: string[] = [];
                    const argsValues_2340: any[] = [];
                    ctx.invokeLocalMethodBefore("onlineTime", argsNames_2339, argsValues_2340);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).onlineTimeArguments === "function" ? (localApi as any).onlineTimeArguments(argsObject_2338) : localApi.onlineTime());
                    ctx.invokeLocalMethodAfter("onlineTime", resultFuture, argsNames_2339, argsValues_2340);
                    resultFuture.to((v_2342: Date) =>  {
                        const data_2341 = new DataInOut();
                        data_2341.writeLong(v_2342.getTime());
                        ctx.sendResultToRemote(reqId_2337, data_2341.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 14:  {
                    const reqId_2343 = dataIn.readInt();
                    let groupId_2344: UUID;
                    groupId_2344 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2345 = new ServerApiByUidAddAccessGroupArguments(groupId_2344);
                    const argsNames_2346: string[] = ["groupId"];
                    const argsValues_2347: any[] = [groupId_2344];
                    ctx.invokeLocalMethodBefore("addAccessGroup", argsNames_2346, argsValues_2347);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).addAccessGroupArguments === "function" ? (localApi as any).addAccessGroupArguments(argsObject_2345) : localApi.addAccessGroup(groupId_2344));
                    ctx.invokeLocalMethodAfter("addAccessGroup", resultFuture, argsNames_2346, argsValues_2347);
                    resultFuture.to((v_2349: boolean) =>  {
                        const data_2348 = new DataInOut();
                        data_2348.writeBoolean(v_2349);
                        ctx.sendResultToRemote(reqId_2343, data_2348.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_2350 = dataIn.readInt();
                    let groupId_2351: UUID;
                    groupId_2351 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2352 = new ServerApiByUidRemoveAccessGroupArguments(groupId_2351);
                    const argsNames_2353: string[] = ["groupId"];
                    const argsValues_2354: any[] = [groupId_2351];
                    ctx.invokeLocalMethodBefore("removeAccessGroup", argsNames_2353, argsValues_2354);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).removeAccessGroupArguments === "function" ? (localApi as any).removeAccessGroupArguments(argsObject_2352) : localApi.removeAccessGroup(groupId_2351));
                    ctx.invokeLocalMethodAfter("removeAccessGroup", resultFuture, argsNames_2353, argsValues_2354);
                    resultFuture.to((v_2356: boolean) =>  {
                        const data_2355 = new DataInOut();
                        data_2355.writeBoolean(v_2356);
                        ctx.sendResultToRemote(reqId_2350, data_2355.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 16:  {
                    const reqId_2357 = dataIn.readInt();
                    let limit_2358: number;
                    limit_2358 = dataIn.readInt();
                    const argsObject_2359 = new ServerApiByUidSetMsgQueueLimitArguments(limit_2358);
                    const argsNames_2360: string[] = ["limit"];
                    const argsValues_2361: any[] = [limit_2358];
                    ctx.invokeLocalMethodBefore("setMsgQueueLimit", argsNames_2360, argsValues_2361);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).setMsgQueueLimitArguments === "function" ? (localApi as any).setMsgQueueLimitArguments(argsObject_2359) : localApi.setMsgQueueLimit(limit_2358));
                    ctx.invokeLocalMethodAfter("setMsgQueueLimit", resultFuture, argsNames_2360, argsValues_2361);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2357);
                        
                    }
                    );
                    break;
                    
                }
                case 17:  {
                    const reqId_2362 = dataIn.readInt();
                    let seconds_2363: number;
                    seconds_2363 = dataIn.readInt();
                    const argsObject_2364 = new ServerApiByUidSetMsgTimeLimitArguments(seconds_2363);
                    const argsNames_2365: string[] = ["seconds"];
                    const argsValues_2366: any[] = [seconds_2363];
                    ctx.invokeLocalMethodBefore("setMsgTimeLimit", argsNames_2365, argsValues_2366);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).setMsgTimeLimitArguments === "function" ? (localApi as any).setMsgTimeLimitArguments(argsObject_2364) : localApi.setMsgTimeLimit(seconds_2363));
                    ctx.invokeLocalMethodAfter("setMsgTimeLimit", resultFuture, argsNames_2365, argsValues_2366);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2362);
                        
                    }
                    );
                    break;
                    
                }
                case 18:  {
                    const reqId_2367 = dataIn.readInt();
                    let sids_2368: number[];
                    const len_2370 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    sids_2368 = new Array<number>(len_2370);
                    for (let idx_2369 = 0;
                    idx_2369 < len_2370;
                    idx_2369++)  {
                        sids_2368[idx_2369] = dataIn.readShort();
                        
                    }
                    const argsObject_2371 = new ServerApiByUidAddServersToCloudArguments(sids_2368);
                    const argsNames_2372: string[] = ["sids"];
                    const argsValues_2373: any[] = [sids_2368];
                    ctx.invokeLocalMethodBefore("addServersToCloud", argsNames_2372, argsValues_2373);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).addServersToCloudArguments === "function" ? (localApi as any).addServersToCloudArguments(argsObject_2371) : localApi.addServersToCloud(sids_2368));
                    ctx.invokeLocalMethodAfter("addServersToCloud", resultFuture, argsNames_2372, argsValues_2373);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2367);
                        
                    }
                    );
                    break;
                    
                }
                case 19:  {
                    const reqId_2374 = dataIn.readInt();
                    let sids_2375: number[];
                    const len_2377 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    sids_2375 = new Array<number>(len_2377);
                    for (let idx_2376 = 0;
                    idx_2376 < len_2377;
                    idx_2376++)  {
                        sids_2375[idx_2376] = dataIn.readShort();
                        
                    }
                    const argsObject_2378 = new ServerApiByUidRemoveServersFromCloudArguments(sids_2375);
                    const argsNames_2379: string[] = ["sids"];
                    const argsValues_2380: any[] = [sids_2375];
                    ctx.invokeLocalMethodBefore("removeServersFromCloud", argsNames_2379, argsValues_2380);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).removeServersFromCloudArguments === "function" ? (localApi as any).removeServersFromCloudArguments(argsObject_2378) : localApi.removeServersFromCloud(sids_2375));
                    ctx.invokeLocalMethodAfter("removeServersFromCloud", resultFuture, argsNames_2379, argsValues_2380);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2374);
                        
                    }
                    );
                    break;
                    
                }
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
            const switchedMeta = ctx.applyLocalApiSwitch();
            if (switchedMeta !== null)  {
                if (dataIn.isReadable())  {
                    switchedMeta.makeLocal(ctx, dataIn);
                    
                }
                return;
                
            }
            
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ServerApiByUid): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_2381: MetaContext): ServerApiByUidRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2381.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2381.flush();
                
            }
            , getFastMetaContext: () => sCtx_2381, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_2381.makeRemote(meta), getBalance: (): ARFuture<bigint> =>  {
                const dataOut_2383 = new DataInOut();
                dataOut_2383.writeByte(3);
                const argsNames_2385: string[] = [];
                const argsValues_2386: any[] = [];
                const result_2384 = ARFuture.of<bigint>();
                sCtx_2381.invokeRemoteMethodAfter("getBalance", result_2384, argsNames_2385, argsValues_2386);
                const reqId_2382 = sCtx_2381.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2384 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_2381, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2384.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2383.writeInt(reqId_2382);
                sCtx_2381.sendToRemote(dataOut_2383.toArray());
                return result_2384;
                
            }
            , setParent: (uid: UUID): AFuture =>  {
                const dataOut_2388 = new DataInOut();
                dataOut_2388.writeByte(4);
                const argsNames_2390: string[] = ["uid"];
                const argsValues_2391: any[] = [uid];
                const result_2389 = AFuture.make();
                sCtx_2381.invokeRemoteMethodAfter("setParent", result_2389, argsNames_2390, argsValues_2391);
                const reqId_2387 = sCtx_2381.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2389 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2389.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2388.writeInt(reqId_2387);
                FastMeta.META_UUID.serialize(sCtx_2381, uid, dataOut_2388);
                sCtx_2381.sendToRemote(dataOut_2388.toArray());
                return result_2389;
                
            }
            , block: (): AFuture =>  {
                const dataOut_2393 = new DataInOut();
                dataOut_2393.writeByte(5);
                const argsNames_2395: string[] = [];
                const argsValues_2396: any[] = [];
                const result_2394 = AFuture.make();
                sCtx_2381.invokeRemoteMethodAfter("block", result_2394, argsNames_2395, argsValues_2396);
                const reqId_2392 = sCtx_2381.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2394 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2394.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2393.writeInt(reqId_2392);
                sCtx_2381.sendToRemote(dataOut_2393.toArray());
                return result_2394;
                
            }
            , getPosition: (): ARFuture<CloudConfig> =>  {
                const dataOut_2398 = new DataInOut();
                dataOut_2398.writeByte(6);
                const argsNames_2400: string[] = [];
                const argsValues_2401: any[] = [];
                const result_2399 = ARFuture.of<CloudConfig>();
                sCtx_2381.invokeRemoteMethodAfter("getPosition", result_2399, argsNames_2400, argsValues_2401);
                const reqId_2397 = sCtx_2381.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2399 as ARFuture<CloudConfig>).tryDone(CloudConfig.META.deserialize(sCtx_2381, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2399.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2398.writeInt(reqId_2397);
                sCtx_2381.sendToRemote(dataOut_2398.toArray());
                return result_2399;
                
            }
            , getParent: (): ARFuture<UUID> =>  {
                const dataOut_2403 = new DataInOut();
                dataOut_2403.writeByte(7);
                const argsNames_2405: string[] = [];
                const argsValues_2406: any[] = [];
                const result_2404 = ARFuture.of<UUID>();
                sCtx_2381.invokeRemoteMethodAfter("getParent", result_2404, argsNames_2405, argsValues_2406);
                const reqId_2402 = sCtx_2381.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2404 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_2381, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2404.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2403.writeInt(reqId_2402);
                sCtx_2381.sendToRemote(dataOut_2403.toArray());
                return result_2404;
                
            }
            , getBeneficiary: (): ARFuture<UUID> =>  {
                const dataOut_2408 = new DataInOut();
                dataOut_2408.writeByte(8);
                const argsNames_2410: string[] = [];
                const argsValues_2411: any[] = [];
                const result_2409 = ARFuture.of<UUID>();
                sCtx_2381.invokeRemoteMethodAfter("getBeneficiary", result_2409, argsNames_2410, argsValues_2411);
                const reqId_2407 = sCtx_2381.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2409 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_2381, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2409.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2408.writeInt(reqId_2407);
                sCtx_2381.sendToRemote(dataOut_2408.toArray());
                return result_2409;
                
            }
            , setBeneficiary: (uid: UUID): AFuture =>  {
                const dataOut_2413 = new DataInOut();
                dataOut_2413.writeByte(9);
                const argsNames_2415: string[] = ["uid"];
                const argsValues_2416: any[] = [uid];
                const result_2414 = AFuture.make();
                sCtx_2381.invokeRemoteMethodAfter("setBeneficiary", result_2414, argsNames_2415, argsValues_2416);
                const reqId_2412 = sCtx_2381.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2414 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2414.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2413.writeInt(reqId_2412);
                FastMeta.META_UUID.serialize(sCtx_2381, uid, dataOut_2413);
                sCtx_2381.sendToRemote(dataOut_2413.toArray());
                return result_2414;
                
            }
            , getBlockTime: (): ARFuture<Date> =>  {
                const dataOut_2418 = new DataInOut();
                dataOut_2418.writeByte(10);
                const argsNames_2420: string[] = [];
                const argsValues_2421: any[] = [];
                const result_2419 = ARFuture.of<Date>();
                sCtx_2381.invokeRemoteMethodAfter("getBlockTime", result_2419, argsNames_2420, argsValues_2421);
                const reqId_2417 = sCtx_2381.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2419 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_2381, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2419.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2418.writeInt(reqId_2417);
                sCtx_2381.sendToRemote(dataOut_2418.toArray());
                return result_2419;
                
            }
            , unblock: (): AFuture =>  {
                const dataOut_2423 = new DataInOut();
                dataOut_2423.writeByte(11);
                const argsNames_2425: string[] = [];
                const argsValues_2426: any[] = [];
                const result_2424 = AFuture.make();
                sCtx_2381.invokeRemoteMethodAfter("unblock", result_2424, argsNames_2425, argsValues_2426);
                const reqId_2422 = sCtx_2381.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2424 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2424.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2423.writeInt(reqId_2422);
                sCtx_2381.sendToRemote(dataOut_2423.toArray());
                return result_2424;
                
            }
            , createTime: (): ARFuture<Date> =>  {
                const dataOut_2428 = new DataInOut();
                dataOut_2428.writeByte(12);
                const argsNames_2430: string[] = [];
                const argsValues_2431: any[] = [];
                const result_2429 = ARFuture.of<Date>();
                sCtx_2381.invokeRemoteMethodAfter("createTime", result_2429, argsNames_2430, argsValues_2431);
                const reqId_2427 = sCtx_2381.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2429 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_2381, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2429.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2428.writeInt(reqId_2427);
                sCtx_2381.sendToRemote(dataOut_2428.toArray());
                return result_2429;
                
            }
            , onlineTime: (): ARFuture<Date> =>  {
                const dataOut_2433 = new DataInOut();
                dataOut_2433.writeByte(13);
                const argsNames_2435: string[] = [];
                const argsValues_2436: any[] = [];
                const result_2434 = ARFuture.of<Date>();
                sCtx_2381.invokeRemoteMethodAfter("onlineTime", result_2434, argsNames_2435, argsValues_2436);
                const reqId_2432 = sCtx_2381.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2434 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_2381, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2434.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2433.writeInt(reqId_2432);
                sCtx_2381.sendToRemote(dataOut_2433.toArray());
                return result_2434;
                
            }
            , addAccessGroup: (groupId: UUID): ARFuture<boolean> =>  {
                const dataOut_2438 = new DataInOut();
                dataOut_2438.writeByte(14);
                const argsNames_2440: string[] = ["groupId"];
                const argsValues_2441: any[] = [groupId];
                const result_2439 = ARFuture.of<boolean>();
                sCtx_2381.invokeRemoteMethodAfter("addAccessGroup", result_2439, argsNames_2440, argsValues_2441);
                const reqId_2437 = sCtx_2381.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2439 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_2381, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2439.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2438.writeInt(reqId_2437);
                FastMeta.META_UUID.serialize(sCtx_2381, groupId, dataOut_2438);
                sCtx_2381.sendToRemote(dataOut_2438.toArray());
                return result_2439;
                
            }
            , removeAccessGroup: (groupId: UUID): ARFuture<boolean> =>  {
                const dataOut_2443 = new DataInOut();
                dataOut_2443.writeByte(15);
                const argsNames_2445: string[] = ["groupId"];
                const argsValues_2446: any[] = [groupId];
                const result_2444 = ARFuture.of<boolean>();
                sCtx_2381.invokeRemoteMethodAfter("removeAccessGroup", result_2444, argsNames_2445, argsValues_2446);
                const reqId_2442 = sCtx_2381.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2444 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_2381, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2444.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2443.writeInt(reqId_2442);
                FastMeta.META_UUID.serialize(sCtx_2381, groupId, dataOut_2443);
                sCtx_2381.sendToRemote(dataOut_2443.toArray());
                return result_2444;
                
            }
            , setMsgQueueLimit: (limit: number): AFuture =>  {
                const dataOut_2448 = new DataInOut();
                dataOut_2448.writeByte(16);
                const argsNames_2450: string[] = ["limit"];
                const argsValues_2451: any[] = [limit];
                const result_2449 = AFuture.make();
                sCtx_2381.invokeRemoteMethodAfter("setMsgQueueLimit", result_2449, argsNames_2450, argsValues_2451);
                const reqId_2447 = sCtx_2381.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2449 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2449.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2448.writeInt(reqId_2447);
                dataOut_2448.writeInt(limit);
                sCtx_2381.sendToRemote(dataOut_2448.toArray());
                return result_2449;
                
            }
            , setMsgTimeLimit: (seconds: number): AFuture =>  {
                const dataOut_2453 = new DataInOut();
                dataOut_2453.writeByte(17);
                const argsNames_2455: string[] = ["seconds"];
                const argsValues_2456: any[] = [seconds];
                const result_2454 = AFuture.make();
                sCtx_2381.invokeRemoteMethodAfter("setMsgTimeLimit", result_2454, argsNames_2455, argsValues_2456);
                const reqId_2452 = sCtx_2381.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2454 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2454.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2453.writeInt(reqId_2452);
                dataOut_2453.writeInt(seconds);
                sCtx_2381.sendToRemote(dataOut_2453.toArray());
                return result_2454;
                
            }
            , addServersToCloud: (sids: number[]): AFuture =>  {
                const dataOut_2458 = new DataInOut();
                dataOut_2458.writeByte(18);
                const argsNames_2460: string[] = ["sids"];
                const argsValues_2461: any[] = [sids];
                const result_2459 = AFuture.make();
                sCtx_2381.invokeRemoteMethodAfter("addServersToCloud", result_2459, argsNames_2460, argsValues_2461);
                const reqId_2457 = sCtx_2381.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2459 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2459.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2458.writeInt(reqId_2457);
                SerializerPackNumber.INSTANCE.put(dataOut_2458, sids.length);
                for (const el_2462 of sids)  {
                    dataOut_2458.writeShort(el_2462);
                    
                }
                sCtx_2381.sendToRemote(dataOut_2458.toArray());
                return result_2459;
                
            }
            , removeServersFromCloud: (sids: number[]): AFuture =>  {
                const dataOut_2464 = new DataInOut();
                dataOut_2464.writeByte(19);
                const argsNames_2466: string[] = ["sids"];
                const argsValues_2467: any[] = [sids];
                const result_2465 = AFuture.make();
                sCtx_2381.invokeRemoteMethodAfter("removeServersFromCloud", result_2465, argsNames_2466, argsValues_2467);
                const reqId_2463 = sCtx_2381.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2465 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2465.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2464.writeInt(reqId_2463);
                SerializerPackNumber.INSTANCE.put(dataOut_2464, sids.length);
                for (const el_2468 of sids)  {
                    dataOut_2464.writeShort(el_2468);
                    
                }
                sCtx_2381.sendToRemote(dataOut_2464.toArray());
                return result_2465;
                
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
    serialize(sCtx_2469: MetaContext, obj_2470: ClientApiRegUnsafeEnterArguments, _out_2471: DataOut): void  {
        ClientApiRegSafeStream.META.serialize(sCtx_2469, obj_2470.stream, _out_2471);
        
    }
    deserialize(sCtx_2469: MetaContext, in__2472: DataIn): ClientApiRegUnsafeEnterArguments  {
        try  {
            let stream_2473: ClientApiRegSafeStream;
            stream_2473 = ClientApiRegSafeStream.META.deserialize(sCtx_2469, in__2472);
            return new ClientApiRegUnsafeEnterArguments(stream_2473);
            
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
    serialize(sCtx_2474: MetaContext, obj_2475: ClientApiRegUnsafeEnterGlobalArguments, _out_2476: DataOut): void  {
        GlobalRegClientApiStream.META.serialize(sCtx_2474, obj_2475.stream, _out_2476);
        
    }
    deserialize(sCtx_2474: MetaContext, in__2477: DataIn): ClientApiRegUnsafeEnterGlobalArguments  {
        try  {
            let stream_2478: GlobalRegClientApiStream;
            stream_2478 = GlobalRegClientApiStream.META.deserialize(sCtx_2474, in__2477);
            return new ClientApiRegUnsafeEnterGlobalArguments(stream_2478);
            
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
                    let stream_2480: ClientApiRegSafeStream;
                    stream_2480 = ClientApiRegSafeStream.META.deserialize(ctx, dataIn);
                    const argsObject_2481 = new ClientApiRegUnsafeEnterArguments(stream_2480);
                    const argsNames_2482: string[] = ["stream"];
                    const argsValues_2483: any[] = [stream_2480];
                    ctx.invokeLocalMethodBefore("enter", argsNames_2482, argsValues_2483);
                    (typeof (localApi as any).enterArguments === "function" ? (localApi as any).enterArguments(argsObject_2481) : localApi.enter(stream_2480));
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_2482, argsValues_2483);
                    break;
                    
                }
                case 4:  {
                    let stream_2485: GlobalRegClientApiStream;
                    stream_2485 = GlobalRegClientApiStream.META.deserialize(ctx, dataIn);
                    const argsObject_2486 = new ClientApiRegUnsafeEnterGlobalArguments(stream_2485);
                    const argsNames_2487: string[] = ["stream"];
                    const argsValues_2488: any[] = [stream_2485];
                    ctx.invokeLocalMethodBefore("enterGlobal", argsNames_2487, argsValues_2488);
                    (typeof (localApi as any).enterGlobalArguments === "function" ? (localApi as any).enterGlobalArguments(argsObject_2486) : localApi.enterGlobal(stream_2485));
                    ctx.invokeLocalMethodAfter("enterGlobal", null, argsNames_2487, argsValues_2488);
                    break;
                    
                }
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
            const switchedMeta = ctx.applyLocalApiSwitch();
            if (switchedMeta !== null)  {
                if (dataIn.isReadable())  {
                    switchedMeta.makeLocal(ctx, dataIn);
                    
                }
                return;
                
            }
            
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ClientApiRegUnsafe): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_2489: MetaContext): ClientApiRegUnsafeRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2489.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2489.flush();
                
            }
            , getFastMetaContext: () => sCtx_2489, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_2489.makeRemote(meta), enter: (stream: ClientApiRegSafeStream): void =>  {
                const dataOut_2491 = new DataInOut();
                dataOut_2491.writeByte(3);
                const argsNames_2493: string[] = ["stream"];
                const argsValues_2494: any[] = [stream];
                sCtx_2489.invokeRemoteMethodAfter("enter", null, argsNames_2493, argsValues_2494);
                ClientApiRegSafeStream.META.serialize(sCtx_2489, stream, dataOut_2491);
                sCtx_2489.sendToRemote(dataOut_2491.toArray());
                
            }
            , enterGlobal: (stream: GlobalRegClientApiStream): void =>  {
                const dataOut_2496 = new DataInOut();
                dataOut_2496.writeByte(4);
                const argsNames_2498: string[] = ["stream"];
                const argsValues_2499: any[] = [stream];
                sCtx_2489.invokeRemoteMethodAfter("enterGlobal", null, argsNames_2498, argsValues_2499);
                GlobalRegClientApiStream.META.serialize(sCtx_2489, stream, dataOut_2496);
                sCtx_2489.sendToRemote(dataOut_2496.toArray());
                
            }
            , openEnter(factory: (api: ClientApiRegSafeRemote) => any, converter: BytesConverter, ...keys: any[]): ClientApiRegSafeRemote  {
                return sCtx_2489.findContext(ctx =>  {
                    ctx.onFlushData(data => this.enter(ClientApiRegSafeStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((ClientApiRegSafe as any).META));
                    
                }
                , ...keys).makeRemote((ClientApiRegSafe as any).META) as ClientApiRegSafeRemote;
                
            }
            , openEnterGlobal(factory: (api: GlobalRegClientApiRemote) => any, converter: BytesConverter, ...keys: any[]): GlobalRegClientApiRemote  {
                return sCtx_2489.findContext(ctx =>  {
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
    serialize(sCtx_2500: MetaContext, obj_2501: GlobalRegServerApiSetMasterKeyArguments, _out_2502: DataOut): void  {
        Key.META.serialize(sCtx_2500, obj_2501.key, _out_2502);
        
    }
    deserialize(sCtx_2500: MetaContext, in__2503: DataIn): GlobalRegServerApiSetMasterKeyArguments  {
        try  {
            let _key_2504: Key;
            _key_2504 = Key.META.deserialize(sCtx_2500, in__2503);
            return new GlobalRegServerApiSetMasterKeyArguments(_key_2504);
            
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
    serialize(sCtx_2505: MetaContext, obj_2507: GlobalRegServerApiFinishArguments, _out_2508: DataOut): void  {
        
    }
    deserialize(sCtx_2506: MetaContext, in__2509: DataIn): GlobalRegServerApiFinishArguments  {
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
                    let _key_2511: Key;
                    _key_2511 = Key.META.deserialize(ctx, dataIn);
                    const argsObject_2512 = new GlobalRegServerApiSetMasterKeyArguments(_key_2511);
                    const argsNames_2513: string[] = ["key"];
                    const argsValues_2514: any[] = [_key_2511];
                    ctx.invokeLocalMethodBefore("setMasterKey", argsNames_2513, argsValues_2514);
                    (typeof (localApi as any).setMasterKeyArguments === "function" ? (localApi as any).setMasterKeyArguments(argsObject_2512) : localApi.setMasterKey(_key_2511));
                    ctx.invokeLocalMethodAfter("setMasterKey", null, argsNames_2513, argsValues_2514);
                    break;
                    
                }
                case 4:  {
                    const reqId_2515 = dataIn.readInt();
                    const argsObject_2516 = new GlobalRegServerApiFinishArguments();
                    const argsNames_2517: string[] = [];
                    const argsValues_2518: any[] = [];
                    ctx.invokeLocalMethodBefore("finish", argsNames_2517, argsValues_2518);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).finishArguments === "function" ? (localApi as any).finishArguments(argsObject_2516) : localApi.finish());
                    ctx.invokeLocalMethodAfter("finish", resultFuture, argsNames_2517, argsValues_2518);
                    resultFuture.to((v_2520: FinishResultGlobalRegServerApi) =>  {
                        const data_2519 = new DataInOut();
                        FinishResultGlobalRegServerApi.META.serialize(ctx, v_2520, data_2519);
                        ctx.sendResultToRemote(reqId_2515, data_2519.toArray());
                        
                    }
                    );
                    break;
                    
                }
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
            const switchedMeta = ctx.applyLocalApiSwitch();
            if (switchedMeta !== null)  {
                if (dataIn.isReadable())  {
                    switchedMeta.makeLocal(ctx, dataIn);
                    
                }
                return;
                
            }
            
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: GlobalRegServerApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_2521: MetaContext): GlobalRegServerApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2521.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2521.flush();
                
            }
            , getFastMetaContext: () => sCtx_2521, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_2521.makeRemote(meta), setMasterKey: (key: Key): void =>  {
                const dataOut_2523 = new DataInOut();
                dataOut_2523.writeByte(3);
                const argsNames_2525: string[] = ["key"];
                const argsValues_2526: any[] = [key];
                sCtx_2521.invokeRemoteMethodAfter("setMasterKey", null, argsNames_2525, argsValues_2526);
                Key.META.serialize(sCtx_2521, key, dataOut_2523);
                sCtx_2521.sendToRemote(dataOut_2523.toArray());
                
            }
            , finish: (): ARFuture<FinishResultGlobalRegServerApi> =>  {
                const dataOut_2528 = new DataInOut();
                dataOut_2528.writeByte(4);
                const argsNames_2530: string[] = [];
                const argsValues_2531: any[] = [];
                const result_2529 = ARFuture.of<FinishResultGlobalRegServerApi>();
                sCtx_2521.invokeRemoteMethodAfter("finish", result_2529, argsNames_2530, argsValues_2531);
                const reqId_2527 = sCtx_2521.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2529 as ARFuture<FinishResultGlobalRegServerApi>).tryDone(FinishResultGlobalRegServerApi.META.deserialize(sCtx_2521, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2529.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2528.writeInt(reqId_2527);
                sCtx_2521.sendToRemote(dataOut_2528.toArray());
                return result_2529;
                
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
    serialize(sCtx_2532: MetaContext, obj_2533: ServerRegistrationApiRegistrationArguments, _out_2534: DataOut): void  {
        const stringBytes_2536 = new TextEncoder().encode(obj_2533.salt);
        SerializerPackNumber.INSTANCE.put(_out_2534, stringBytes_2536.length);
        _out_2534.write(stringBytes_2536);
        const stringBytes_2538 = new TextEncoder().encode(obj_2533.suffix);
        SerializerPackNumber.INSTANCE.put(_out_2534, stringBytes_2538.length);
        _out_2534.write(stringBytes_2538);
        SerializerPackNumber.INSTANCE.put(_out_2534, obj_2533.passwords.length);
        for (const el_2540 of obj_2533.passwords)  {
            _out_2534.writeInt(el_2540);
            
        }
        FastMeta.META_UUID.serialize(sCtx_2532, obj_2533.parent, _out_2534);
        GlobalApiStream.META.serialize(sCtx_2532, obj_2533.globalApi, _out_2534);
        
    }
    deserialize(sCtx_2532: MetaContext, in__2535: DataIn): ServerRegistrationApiRegistrationArguments  {
        try  {
            let salt_2541: string;
            let suffix_2542: string;
            let passwords_2543: number[];
            let parent_2544: UUID;
            let globalApi_2545: GlobalApiStream;
            let stringBytes_2546: Uint8Array;
            const len_2548 = Number(DeserializerPackNumber.INSTANCE.put(in__2535));
            const bytes_2549 = in__2535.readBytes(len_2548);
            stringBytes_2546 = bytes_2549;
            salt_2541 = new TextDecoder('utf-8').decode(stringBytes_2546);
            let stringBytes_2550: Uint8Array;
            const len_2552 = Number(DeserializerPackNumber.INSTANCE.put(in__2535));
            const bytes_2553 = in__2535.readBytes(len_2552);
            stringBytes_2550 = bytes_2553;
            suffix_2542 = new TextDecoder('utf-8').decode(stringBytes_2550);
            const len_2555 = Number(DeserializerPackNumber.INSTANCE.put(in__2535));
            passwords_2543 = new Array<number>(len_2555);
            for (let idx_2554 = 0;
            idx_2554 < len_2555;
            idx_2554++)  {
                passwords_2543[idx_2554] = in__2535.readInt();
                
            }
            parent_2544 = FastMeta.META_UUID.deserialize(sCtx_2532, in__2535);
            globalApi_2545 = GlobalApiStream.META.deserialize(sCtx_2532, in__2535);
            return new ServerRegistrationApiRegistrationArguments(salt_2541, suffix_2542, passwords_2543, parent_2544, globalApi_2545);
            
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
    serialize(sCtx_2556: MetaContext, obj_2557: ServerRegistrationApiRequestWorkProofDataArguments, _out_2558: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2556, obj_2557.parent, _out_2558);
        PowMethod.META.serialize(sCtx_2556, obj_2557.powMethods, _out_2558);
        
    }
    deserialize(sCtx_2556: MetaContext, in__2559: DataIn): ServerRegistrationApiRequestWorkProofDataArguments  {
        try  {
            let parent_2560: UUID;
            let powMethods_2561: PowMethod;
            parent_2560 = FastMeta.META_UUID.deserialize(sCtx_2556, in__2559);
            powMethods_2561 = PowMethod.META.deserialize(sCtx_2556, in__2559);
            return new ServerRegistrationApiRequestWorkProofDataArguments(parent_2560, powMethods_2561);
            
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
    serialize(sCtx_2562: MetaContext, obj_2563: ServerRegistrationApiResolveServersArguments, _out_2564: DataOut): void  {
        Cloud.META.serialize(sCtx_2562, obj_2563.serverIds, _out_2564);
        
    }
    deserialize(sCtx_2562: MetaContext, in__2565: DataIn): ServerRegistrationApiResolveServersArguments  {
        try  {
            let serverIds_2566: Cloud;
            serverIds_2566 = Cloud.META.deserialize(sCtx_2562, in__2565);
            return new ServerRegistrationApiResolveServersArguments(serverIds_2566);
            
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
    serialize(sCtx_2567: MetaContext, obj_2568: ServerRegistrationApiSetReturnKeyArguments, _out_2569: DataOut): void  {
        Key.META.serialize(sCtx_2567, obj_2568.key, _out_2569);
        
    }
    deserialize(sCtx_2567: MetaContext, in__2570: DataIn): ServerRegistrationApiSetReturnKeyArguments  {
        try  {
            let _key_2571: Key;
            _key_2571 = Key.META.deserialize(sCtx_2567, in__2570);
            return new ServerRegistrationApiSetReturnKeyArguments(_key_2571);
            
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
                    let salt_2573: string;
                    let suffix_2574: string;
                    let passwords_2575: number[];
                    let parent_2576: UUID;
                    let globalApi_2577: GlobalApiStream;
                    let stringBytes_2578: Uint8Array;
                    const len_2580 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_2581 = dataIn.readBytes(len_2580);
                    stringBytes_2578 = bytes_2581;
                    salt_2573 = new TextDecoder('utf-8').decode(stringBytes_2578);
                    let stringBytes_2582: Uint8Array;
                    const len_2584 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_2585 = dataIn.readBytes(len_2584);
                    stringBytes_2582 = bytes_2585;
                    suffix_2574 = new TextDecoder('utf-8').decode(stringBytes_2582);
                    const len_2587 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    passwords_2575 = new Array<number>(len_2587);
                    for (let idx_2586 = 0;
                    idx_2586 < len_2587;
                    idx_2586++)  {
                        passwords_2575[idx_2586] = dataIn.readInt();
                        
                    }
                    parent_2576 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    globalApi_2577 = GlobalApiStream.META.deserialize(ctx, dataIn);
                    const argsObject_2588 = new ServerRegistrationApiRegistrationArguments(salt_2573, suffix_2574, passwords_2575, parent_2576, globalApi_2577);
                    const argsNames_2589: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                    const argsValues_2590: any[] = [salt_2573, suffix_2574, passwords_2575, parent_2576, globalApi_2577];
                    ctx.invokeLocalMethodBefore("registration", argsNames_2589, argsValues_2590);
                    (typeof (localApi as any).registrationArguments === "function" ? (localApi as any).registrationArguments(argsObject_2588) : localApi.registration(salt_2573, suffix_2574, passwords_2575, parent_2576, globalApi_2577));
                    ctx.invokeLocalMethodAfter("registration", null, argsNames_2589, argsValues_2590);
                    break;
                    
                }
                case 4:  {
                    const reqId_2591 = dataIn.readInt();
                    let parent_2592: UUID;
                    let powMethods_2593: PowMethod;
                    parent_2592 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    powMethods_2593 = PowMethod.META.deserialize(ctx, dataIn);
                    const argsObject_2594 = new ServerRegistrationApiRequestWorkProofDataArguments(parent_2592, powMethods_2593);
                    const argsNames_2595: string[] = ["parent", "powMethods"];
                    const argsValues_2596: any[] = [parent_2592, powMethods_2593];
                    ctx.invokeLocalMethodBefore("requestWorkProofData", argsNames_2595, argsValues_2596);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).requestWorkProofDataArguments === "function" ? (localApi as any).requestWorkProofDataArguments(argsObject_2594) : localApi.requestWorkProofData(parent_2592, powMethods_2593));
                    ctx.invokeLocalMethodAfter("requestWorkProofData", resultFuture, argsNames_2595, argsValues_2596);
                    resultFuture.to((v_2598: WorkProofDTO) =>  {
                        const data_2597 = new DataInOut();
                        WorkProofDTO.META.serialize(ctx, v_2598, data_2597);
                        ctx.sendResultToRemote(reqId_2591, data_2597.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_2599 = dataIn.readInt();
                    let serverIds_2600: Cloud;
                    serverIds_2600 = Cloud.META.deserialize(ctx, dataIn);
                    const argsObject_2601 = new ServerRegistrationApiResolveServersArguments(serverIds_2600);
                    const argsNames_2602: string[] = ["serverIds"];
                    const argsValues_2603: any[] = [serverIds_2600];
                    ctx.invokeLocalMethodBefore("resolveServers", argsNames_2602, argsValues_2603);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).resolveServersArguments === "function" ? (localApi as any).resolveServersArguments(argsObject_2601) : localApi.resolveServers(serverIds_2600));
                    ctx.invokeLocalMethodAfter("resolveServers", resultFuture, argsNames_2602, argsValues_2603);
                    resultFuture.to((v_2605: ServerDescriptor[]) =>  {
                        const data_2604 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_2604, v_2605.length);
                        for (const el_2606 of v_2605)  {
                            ServerDescriptor.META.serialize(ctx, el_2606, data_2604);
                            
                        }
                        ctx.sendResultToRemote(reqId_2599, data_2604.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    let _key_2608: Key;
                    _key_2608 = Key.META.deserialize(ctx, dataIn);
                    const argsObject_2609 = new ServerRegistrationApiSetReturnKeyArguments(_key_2608);
                    const argsNames_2610: string[] = ["key"];
                    const argsValues_2611: any[] = [_key_2608];
                    ctx.invokeLocalMethodBefore("setReturnKey", argsNames_2610, argsValues_2611);
                    (typeof (localApi as any).setReturnKeyArguments === "function" ? (localApi as any).setReturnKeyArguments(argsObject_2609) : localApi.setReturnKey(_key_2608));
                    ctx.invokeLocalMethodAfter("setReturnKey", null, argsNames_2610, argsValues_2611);
                    break;
                    
                }
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
            const switchedMeta = ctx.applyLocalApiSwitch();
            if (switchedMeta !== null)  {
                if (dataIn.isReadable())  {
                    switchedMeta.makeLocal(ctx, dataIn);
                    
                }
                return;
                
            }
            
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ServerRegistrationApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_2612: MetaContext): ServerRegistrationApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2612.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2612.flush();
                
            }
            , getFastMetaContext: () => sCtx_2612, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_2612.makeRemote(meta), registration: (salt: string, suffix: string, passwords: number[], parent: UUID, globalApi: GlobalApiStream): void =>  {
                const dataOut_2614 = new DataInOut();
                dataOut_2614.writeByte(3);
                const argsNames_2616: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                const argsValues_2617: any[] = [salt, suffix, passwords, parent, globalApi];
                sCtx_2612.invokeRemoteMethodAfter("registration", null, argsNames_2616, argsValues_2617);
                const stringBytes_2618 = new TextEncoder().encode(salt);
                SerializerPackNumber.INSTANCE.put(dataOut_2614, stringBytes_2618.length);
                dataOut_2614.write(stringBytes_2618);
                const stringBytes_2620 = new TextEncoder().encode(suffix);
                SerializerPackNumber.INSTANCE.put(dataOut_2614, stringBytes_2620.length);
                dataOut_2614.write(stringBytes_2620);
                SerializerPackNumber.INSTANCE.put(dataOut_2614, passwords.length);
                for (const el_2622 of passwords)  {
                    dataOut_2614.writeInt(el_2622);
                    
                }
                FastMeta.META_UUID.serialize(sCtx_2612, parent, dataOut_2614);
                GlobalApiStream.META.serialize(sCtx_2612, globalApi, dataOut_2614);
                sCtx_2612.sendToRemote(dataOut_2614.toArray());
                
            }
            , requestWorkProofData: (parent: UUID, powMethods: PowMethod): ARFuture<WorkProofDTO> =>  {
                const dataOut_2624 = new DataInOut();
                dataOut_2624.writeByte(4);
                const argsNames_2626: string[] = ["parent", "powMethods"];
                const argsValues_2627: any[] = [parent, powMethods];
                const result_2625 = ARFuture.of<WorkProofDTO>();
                sCtx_2612.invokeRemoteMethodAfter("requestWorkProofData", result_2625, argsNames_2626, argsValues_2627);
                const reqId_2623 = sCtx_2612.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2625 as ARFuture<WorkProofDTO>).tryDone(WorkProofDTO.META.deserialize(sCtx_2612, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2625.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2624.writeInt(reqId_2623);
                FastMeta.META_UUID.serialize(sCtx_2612, parent, dataOut_2624);
                PowMethod.META.serialize(sCtx_2612, powMethods, dataOut_2624);
                sCtx_2612.sendToRemote(dataOut_2624.toArray());
                return result_2625;
                
            }
            , resolveServers: (serverIds: Cloud): ARFuture<ServerDescriptor[]> =>  {
                const dataOut_2629 = new DataInOut();
                dataOut_2629.writeByte(5);
                const argsNames_2631: string[] = ["serverIds"];
                const argsValues_2632: any[] = [serverIds];
                const result_2630 = ARFuture.of<ServerDescriptor[]>();
                sCtx_2612.invokeRemoteMethodAfter("resolveServers", result_2630, argsNames_2631, argsValues_2632);
                const reqId_2628 = sCtx_2612.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2630 as ARFuture<ServerDescriptor[]>).tryDone(FastMeta.getMetaArray(ServerDescriptor.META).deserialize(sCtx_2612, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2630.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2629.writeInt(reqId_2628);
                Cloud.META.serialize(sCtx_2612, serverIds, dataOut_2629);
                sCtx_2612.sendToRemote(dataOut_2629.toArray());
                return result_2630;
                
            }
            , setReturnKey: (key: Key): void =>  {
                const dataOut_2634 = new DataInOut();
                dataOut_2634.writeByte(6);
                const argsNames_2636: string[] = ["key"];
                const argsValues_2637: any[] = [key];
                sCtx_2612.invokeRemoteMethodAfter("setReturnKey", null, argsNames_2636, argsValues_2637);
                Key.META.serialize(sCtx_2612, key, dataOut_2634);
                sCtx_2612.sendToRemote(dataOut_2634.toArray());
                
            }
            , openRegistration(salt: string, suffix: string, passwords: number[], parent: UUID, factory: (api: GlobalRegServerApiRemote) => any, converter: BytesConverter, ...keys: any[]): GlobalRegServerApiRemote  {
                return sCtx_2612.findContext(ctx =>  {
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
    serialize(sCtx_2638: MetaContext, obj_2639: RegistrationRootApiGetAsymmetricPublicKeyArguments, _out_2640: DataOut): void  {
        CryptoLib.META.serialize(sCtx_2638, obj_2639.cryptoLib, _out_2640);
        
    }
    deserialize(sCtx_2638: MetaContext, in__2641: DataIn): RegistrationRootApiGetAsymmetricPublicKeyArguments  {
        try  {
            let cryptoLib_2642: CryptoLib;
            cryptoLib_2642 = CryptoLib.META.deserialize(sCtx_2638, in__2641);
            return new RegistrationRootApiGetAsymmetricPublicKeyArguments(cryptoLib_2642);
            
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
    serialize(sCtx_2643: MetaContext, obj_2644: RegistrationRootApiEnterArguments, _out_2645: DataOut): void  {
        CryptoLib.META.serialize(sCtx_2643, obj_2644.cryptoLib, _out_2645);
        ServerRegistrationApiStream.META.serialize(sCtx_2643, obj_2644.stream, _out_2645);
        
    }
    deserialize(sCtx_2643: MetaContext, in__2646: DataIn): RegistrationRootApiEnterArguments  {
        try  {
            let cryptoLib_2647: CryptoLib;
            let stream_2648: ServerRegistrationApiStream;
            cryptoLib_2647 = CryptoLib.META.deserialize(sCtx_2643, in__2646);
            stream_2648 = ServerRegistrationApiStream.META.deserialize(sCtx_2643, in__2646);
            return new RegistrationRootApiEnterArguments(cryptoLib_2647, stream_2648);
            
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
    serialize(sCtx_2649: MetaContext, obj_2651: RegistrationRootApiGetMyIpArguments, _out_2652: DataOut): void  {
        
    }
    deserialize(sCtx_2650: MetaContext, in__2653: DataIn): RegistrationRootApiGetMyIpArguments  {
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
                    const reqId_2654 = dataIn.readInt();
                    let cryptoLib_2655: CryptoLib;
                    cryptoLib_2655 = CryptoLib.META.deserialize(ctx, dataIn);
                    const argsObject_2656 = new RegistrationRootApiGetAsymmetricPublicKeyArguments(cryptoLib_2655);
                    const argsNames_2657: string[] = ["cryptoLib"];
                    const argsValues_2658: any[] = [cryptoLib_2655];
                    ctx.invokeLocalMethodBefore("getAsymmetricPublicKey", argsNames_2657, argsValues_2658);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getAsymmetricPublicKeyArguments === "function" ? (localApi as any).getAsymmetricPublicKeyArguments(argsObject_2656) : localApi.getAsymmetricPublicKey(cryptoLib_2655));
                    ctx.invokeLocalMethodAfter("getAsymmetricPublicKey", resultFuture, argsNames_2657, argsValues_2658);
                    resultFuture.to((v_2660: SignedKey) =>  {
                        const data_2659 = new DataInOut();
                        SignedKey.META.serialize(ctx, v_2660, data_2659);
                        ctx.sendResultToRemote(reqId_2654, data_2659.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let cryptoLib_2662: CryptoLib;
                    let stream_2663: ServerRegistrationApiStream;
                    cryptoLib_2662 = CryptoLib.META.deserialize(ctx, dataIn);
                    stream_2663 = ServerRegistrationApiStream.META.deserialize(ctx, dataIn);
                    const argsObject_2664 = new RegistrationRootApiEnterArguments(cryptoLib_2662, stream_2663);
                    const argsNames_2665: string[] = ["cryptoLib", "stream"];
                    const argsValues_2666: any[] = [cryptoLib_2662, stream_2663];
                    ctx.invokeLocalMethodBefore("enter", argsNames_2665, argsValues_2666);
                    (typeof (localApi as any).enterArguments === "function" ? (localApi as any).enterArguments(argsObject_2664) : localApi.enter(cryptoLib_2662, stream_2663));
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_2665, argsValues_2666);
                    break;
                    
                }
                case 6:  {
                    const reqId_2667 = dataIn.readInt();
                    const argsObject_2668 = new RegistrationRootApiGetMyIpArguments();
                    const argsNames_2669: string[] = [];
                    const argsValues_2670: any[] = [];
                    ctx.invokeLocalMethodBefore("getMyIp", argsNames_2669, argsValues_2670);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getMyIpArguments === "function" ? (localApi as any).getMyIpArguments(argsObject_2668) : localApi.getMyIp());
                    ctx.invokeLocalMethodAfter("getMyIp", resultFuture, argsNames_2669, argsValues_2670);
                    resultFuture.to((v_2672: IpInfo) =>  {
                        const data_2671 = new DataInOut();
                        IpInfo.META.serialize(ctx, v_2672, data_2671);
                        ctx.sendResultToRemote(reqId_2667, data_2671.toArray());
                        
                    }
                    );
                    break;
                    
                }
                default: throw new SecurityConnectionDropException(`Unknown command ID: ${commandId}`);
                
            }
            const switchedMeta = ctx.applyLocalApiSwitch();
            if (switchedMeta !== null)  {
                if (dataIn.isReadable())  {
                    switchedMeta.makeLocal(ctx, dataIn);
                    
                }
                return;
                
            }
            
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: RegistrationRootApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_2673: MetaContext): RegistrationRootApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2673.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2673.flush();
                
            }
            , getFastMetaContext: () => sCtx_2673, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_2673.makeRemote(meta), getAsymmetricPublicKey: (cryptoLib: CryptoLib): ARFuture<SignedKey> =>  {
                const dataOut_2675 = new DataInOut();
                dataOut_2675.writeByte(3);
                const argsNames_2677: string[] = ["cryptoLib"];
                const argsValues_2678: any[] = [cryptoLib];
                const result_2676 = ARFuture.of<SignedKey>();
                sCtx_2673.invokeRemoteMethodAfter("getAsymmetricPublicKey", result_2676, argsNames_2677, argsValues_2678);
                const reqId_2674 = sCtx_2673.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2676 as ARFuture<SignedKey>).tryDone(SignedKey.META.deserialize(sCtx_2673, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2676.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2675.writeInt(reqId_2674);
                CryptoLib.META.serialize(sCtx_2673, cryptoLib, dataOut_2675);
                sCtx_2673.sendToRemote(dataOut_2675.toArray());
                return result_2676;
                
            }
            , enter: (cryptoLib: CryptoLib, stream: ServerRegistrationApiStream): void =>  {
                const dataOut_2680 = new DataInOut();
                dataOut_2680.writeByte(4);
                const argsNames_2682: string[] = ["cryptoLib", "stream"];
                const argsValues_2683: any[] = [cryptoLib, stream];
                sCtx_2673.invokeRemoteMethodAfter("enter", null, argsNames_2682, argsValues_2683);
                CryptoLib.META.serialize(sCtx_2673, cryptoLib, dataOut_2680);
                ServerRegistrationApiStream.META.serialize(sCtx_2673, stream, dataOut_2680);
                sCtx_2673.sendToRemote(dataOut_2680.toArray());
                
            }
            , getMyIp: (): ARFuture<IpInfo> =>  {
                const dataOut_2685 = new DataInOut();
                dataOut_2685.writeByte(6);
                const argsNames_2687: string[] = [];
                const argsValues_2688: any[] = [];
                const result_2686 = ARFuture.of<IpInfo>();
                sCtx_2673.invokeRemoteMethodAfter("getMyIp", result_2686, argsNames_2687, argsValues_2688);
                const reqId_2684 = sCtx_2673.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2686 as ARFuture<IpInfo>).tryDone(IpInfo.META.deserialize(sCtx_2673, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2686.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2685.writeInt(reqId_2684);
                sCtx_2673.sendToRemote(dataOut_2685.toArray());
                return result_2686;
                
            }
            , openEnter(cryptoLib: CryptoLib, factory: (api: ServerRegistrationApiRemote) => any, converter: BytesConverter, ...keys: any[]): ServerRegistrationApiRemote  {
                return sCtx_2673.findContext(ctx =>  {
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
            const switchedMeta = ctx.applyLocalApiSwitch();
            if (switchedMeta !== null)  {
                if (dataIn.isReadable())  {
                    switchedMeta.makeLocal(ctx, dataIn);
                    
                }
                return;
                
            }
            
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: ClientApiRegSafe): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_2689: MetaContext): ClientApiRegSafeRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2689.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2689.flush();
                
            }
            , getFastMetaContext: () => sCtx_2689, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_2689.makeRemote(meta), 
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
            const switchedMeta = ctx.applyLocalApiSwitch();
            if (switchedMeta !== null)  {
                if (dataIn.isReadable())  {
                    switchedMeta.makeLocal(ctx, dataIn);
                    
                }
                return;
                
            }
            
        }
        
    }
    makeLocal_fromBytes_ctxLocal(ctx: MetaContext, data: Uint8Array): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.getLocalApi());
        
    }
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: GlobalRegClientApi): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_2690: MetaContext): GlobalRegClientApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2690.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2690.flush();
                
            }
            , getFastMetaContext: () => sCtx_2690, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_2690.makeRemote(meta), 
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
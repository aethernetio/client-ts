import  {
    AFuture, ARFuture, DataIn, DataOut, DataInOut, DataInOutStatic, FastMetaType, MetaContext, FastMeta, SerializerPackNumber, DeserializerPackNumber, RemoteApi, FastMetaApi, FastFutureContextStub, SecurityConnectionDropException, AetherException, UUID, URI, AString, BytesConverter,
}
from './aether_client';
import  {
    AetherCodec, ClientActivityType, CryptoLib, PowMethod, ServerType, Status, AetherTypeDescriptor, IPAddress, Key, KeyAsymmetric, KeyAsymmetricPrivate, KeyAsymmetricPublic, KeySign, KeySignPrivate, KeySignPublic, KeySymmetric, PairKeys, Sign, Telemetry, WorkProofConfig, AccessCheckPair, AccessCheckResult, AccessGroup, AetherApiDefinition, AetherArgumentDescriptor, AetherArrayType, AetherBaseType, AetherFieldDescriptor, AetherMethodDescriptor, AetherModuleDescriptor, AetherNullableType, AetherStreamType, AetherStructDescriptor, AppliedConfig, ClientActivity, ClientConnectionInfo, ClientInfo, ClientLogEntry, ClientStateForSave, Cloud, CloudConfig, CloudWeight, CoderAndPort, FinishResult, FinishResultGlobalRegServerApi, HydrogenCurvePrivate, HydrogenCurvePublic, HydrogenSecretBox, HydrogenSignPrivate, HydrogenSignPublic, IceCandidate, IPAddressAndPorts, IPAddressAndPortsList, IPAddressV4, IPAddressV6, IPAddressWeb, IpInfo, KeyValuePair, Message, MessageInfo, MoneyOperation, PairKeysAsym, PairKeysAsymSigned, PairKeysSign, PairKeysSym, ServerDescriptor, ServerDescriptorWithGeo, SignAE_ED25519, SignedKey, SignHYDROGEN, SodiumChacha20Poly1305, SodiumCurvePrivate, SodiumCurvePublic, SodiumSignPrivate, SodiumSignPublic, TelemetryCPP, Uap, UUIDAndCloud, WebRtcSession, WorkProofBCrypt, WorkProofDTO, ClientApiRegSafeStream, ClientApiStream, ClientInteractionClientStream, GlobalApiStream, GlobalRegClientApiStream, LoginClientStream, LoginStream, ServerRegistrationApiStream, ClientApiUnsafeSendSafeApiDataMultiArguments, ClientApiUnsafeSendSafeApiDataArguments, ClientApiSafeChangeParentArguments, ClientApiSafeChangeAliasArguments, ClientApiSafeNewChildrenArguments, ClientApiSafeSendMessagesArguments, ClientApiSafeSendServerDescriptorArguments, ClientApiSafeSendServerDescriptorsArguments, ClientApiSafeSendCloudArguments, ClientApiSafeSendCloudsArguments, ClientApiSafeRequestTelemetryArguments, ClientApiSafeSendAccessGroupsArguments, ClientApiSafeSendAccessGroupForClientArguments, ClientApiSafeAddItemsToAccessGroupArguments, ClientApiSafeRemoveItemsFromAccessGroupArguments, ClientApiSafeAddAccessGroupsToClientArguments, ClientApiSafeRemoveAccessGroupsFromClientArguments, ClientApiSafeSendAllAccessedClientsArguments, ClientApiSafeSendAccessCheckResultsArguments, ClientApiSafeSendMessageArguments, ClientApiSafeSendCloudConfigsArguments, ClientApiSafeClientInteractionArguments, AuthorizedApiBackIdArguments, AuthorizedApiPingArguments, AuthorizedApiClientArguments, AuthorizedApiSendMessageArguments, AuthorizedApiSendMessagesArguments, AuthorizedApiSendMulticastArguments, AuthorizedApiSendMessageWithResultArguments, AuthorizedApiCreateAccessGroupArguments, AuthorizedApiAddToAccessGroupArguments, AuthorizedApiRemoveFromAccessGroupArguments, AuthorizedApiCheckAccessForSendMessageArguments, AuthorizedApiResolverServersArguments, AuthorizedApiResolveCloudsArguments, AuthorizedApiReportAppliedConfigArguments, AuthorizedApiGetAccessGroupsArguments, AuthorizedApiGetAccessGroupArguments, AuthorizedApiGetAllAccessedClientsArguments, AuthorizedApiCheckAccessForSendMessage2Arguments, AuthorizedApiSendTelemetryArguments, AuthorizedApiRequestAccessGroupsForClientsArguments, AuthorizedApiRequestAccessGroupsItemsArguments, AuthorizedApiSendAccessGroupForClientArguments, AuthorizedApiAddItemsToAccessGroupArguments, AuthorizedApiRemoveItemsFromAccessGroupArguments, AuthorizedApiAddAccessGroupsToClientArguments, AuthorizedApiRemoveAccessGroupsFromClientArguments, AuthorizedApiRequestAllAccessedClientsArguments, AuthorizedApiRequestAccessCheckArguments, AuthorizedApiGetClientActivityArguments, AuthorizedApiSearchClientLogsArguments, AuthorizedApiGetClientConnectionsArguments, AuthorizedApiGetClientMessagesArguments, AuthorizedApiSetNextReadDelayArguments, AuthorizedApiGetUapArguments, AuthorizedApiRequestWebRtcSessionArguments, AuthorizedApiPublishWebRtcSessionArguments, AuthorizedApiSelfDestructArguments, AuthorizedApiGetServersArguments, AuthorizedApiSwitchVersionArguments, LoginApiGetTimeUTCArguments, LoginApiLoginByUIDArguments, LoginApiLoginByAliasArguments, LoginApiGetMyIpArguments, ServerApiByUidGetBalanceArguments, ServerApiByUidSetParentArguments, ServerApiByUidBlockArguments, ServerApiByUidGetPositionArguments, ServerApiByUidGetParentArguments, ServerApiByUidGetBeneficiaryArguments, ServerApiByUidSetBeneficiaryArguments, ServerApiByUidGetBlockTimeArguments, ServerApiByUidUnblockArguments, ServerApiByUidCreateTimeArguments, ServerApiByUidOnlineTimeArguments, ServerApiByUidAddAccessGroupArguments, ServerApiByUidRemoveAccessGroupArguments, ServerApiByUidSetMsgQueueLimitArguments, ServerApiByUidSetMsgTimeLimitArguments, ServerApiByUidAddServersToCloudArguments, ServerApiByUidRemoveServersFromCloudArguments, ClientApiRegUnsafeEnterArguments, ClientApiRegUnsafeEnterGlobalArguments, GlobalRegServerApiSetMasterKeyArguments, GlobalRegServerApiFinishArguments, ServerRegistrationApiRegistrationArguments, ServerRegistrationApiRequestWorkProofDataArguments, ServerRegistrationApiResolveServersArguments, ServerRegistrationApiSetReturnKeyArguments, RegistrationRootApiGetAsymmetricPublicKeyArguments, RegistrationRootApiEnterArguments, RegistrationRootApiGetMyIpArguments, ClientApiUnsafe, ClientApiSafe, AuthorizedApi, AuthorizedApiV2, LoginApi, ServerApiByUidClient, ServerApiByUid, ClientApiRegUnsafe, GlobalRegServerApi, ServerRegistrationApi, RegistrationRootApi, ClientApiRegSafe, GlobalRegClientApi, ClientApiUnsafeRemote, ClientApiSafeRemote, AuthorizedApiRemote, AuthorizedApiV2Remote, LoginApiRemote, ServerApiByUidClientRemote, ServerApiByUidRemote, ClientApiRegUnsafeRemote, GlobalRegServerApiRemote, ServerRegistrationApiRemote, RegistrationRootApiRemote, ClientApiRegSafeRemote, GlobalRegClientApiRemote
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
    makeRemote(sCtx_817: MetaContext): ClientApiUnsafeRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_817.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_817.flush();
                
            }
            , getFastMetaContext: () => sCtx_817, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_817.makeRemote(meta), sendSafeApiDataMulti: (backId: number, data: LoginClientStream): void =>  {
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
    makeRemote(sCtx_1106: MetaContext): ClientApiSafeRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_1106.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_1106.flush();
                
            }
            , getFastMetaContext: () => sCtx_1106, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_1106.makeRemote(meta), changeParent: (uid: UUID): void =>  {
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
export class AuthorizedApiSwitchVersionArgumentsMetaBodyImpl implements FastMetaType<AuthorizedApiSwitchVersionArguments>  {
    serialize(sCtx_1486: MetaContext, obj_1487: AuthorizedApiSwitchVersionArguments, _out_1488: DataOut): void  {
        _out_1488.writeInt(obj_1487.version);
        
    }
    deserialize(sCtx_1486: MetaContext, in__1489: DataIn): AuthorizedApiSwitchVersionArguments  {
        try  {
            let version_1490: number;
            version_1490 = in__1489.readInt();
            return new AuthorizedApiSwitchVersionArguments(version_1490);
            
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
                    let id_1492: number;
                    id_1492 = dataIn.readByte();
                    const argsObject_1493 = new AuthorizedApiBackIdArguments(id_1492);
                    const argsNames_1494: string[] = ["id"];
                    const argsValues_1495: any[] = [id_1492];
                    ctx.invokeLocalMethodBefore("backId", argsNames_1494, argsValues_1495);
                    (typeof (localApi as any).backIdArguments === "function" ? (localApi as any).backIdArguments(argsObject_1493) : localApi.backId(id_1492));
                    ctx.invokeLocalMethodAfter("backId", null, argsNames_1494, argsValues_1495);
                    break;
                    
                }
                case 4:  {
                    const reqId_1496 = dataIn.readInt();
                    let nextConnectMsDuration_1497: bigint;
                    let rxWindowMs_1498: bigint;
                    nextConnectMsDuration_1497 = dataIn.readLong();
                    rxWindowMs_1498 = dataIn.readLong();
                    const argsObject_1499 = new AuthorizedApiPingArguments(nextConnectMsDuration_1497, rxWindowMs_1498);
                    const argsNames_1500: string[] = ["nextConnectMsDuration", "rxWindowMs"];
                    const argsValues_1501: any[] = [nextConnectMsDuration_1497, rxWindowMs_1498];
                    ctx.invokeLocalMethodBefore("ping", argsNames_1500, argsValues_1501);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).pingArguments === "function" ? (localApi as any).pingArguments(argsObject_1499) : localApi.ping(nextConnectMsDuration_1497, rxWindowMs_1498));
                    ctx.invokeLocalMethodAfter("ping", resultFuture, argsNames_1500, argsValues_1501);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1496);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    let uid_1503: UUID;
                    let stream_1504: ClientApiStream;
                    uid_1503 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    stream_1504 = ClientApiStream.META.deserialize(ctx, dataIn);
                    const argsObject_1505 = new AuthorizedApiClientArguments(uid_1503, stream_1504);
                    const argsNames_1506: string[] = ["uid", "stream"];
                    const argsValues_1507: any[] = [uid_1503, stream_1504];
                    ctx.invokeLocalMethodBefore("client", argsNames_1506, argsValues_1507);
                    (typeof (localApi as any).clientArguments === "function" ? (localApi as any).clientArguments(argsObject_1505) : localApi.client(uid_1503, stream_1504));
                    ctx.invokeLocalMethodAfter("client", null, argsNames_1506, argsValues_1507);
                    break;
                    
                }
                case 6:  {
                    let msg_1509: Message;
                    msg_1509 = Message.META.deserialize(ctx, dataIn);
                    const argsObject_1510 = new AuthorizedApiSendMessageArguments(msg_1509);
                    const argsNames_1511: string[] = ["msg"];
                    const argsValues_1512: any[] = [msg_1509];
                    ctx.invokeLocalMethodBefore("sendMessage", argsNames_1511, argsValues_1512);
                    (typeof (localApi as any).sendMessageArguments === "function" ? (localApi as any).sendMessageArguments(argsObject_1510) : localApi.sendMessage(msg_1509));
                    ctx.invokeLocalMethodAfter("sendMessage", null, argsNames_1511, argsValues_1512);
                    break;
                    
                }
                case 7:  {
                    let msg_1514: Message[];
                    const len_1516 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_1514 = new Array<Message>(len_1516);
                    for (let idx_1515 = 0;
                    idx_1515 < len_1516;
                    idx_1515++)  {
                        msg_1514[idx_1515] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1517 = new AuthorizedApiSendMessagesArguments(msg_1514);
                    const argsNames_1518: string[] = ["msg"];
                    const argsValues_1519: any[] = [msg_1514];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_1518, argsValues_1519);
                    (typeof (localApi as any).sendMessagesArguments === "function" ? (localApi as any).sendMessagesArguments(argsObject_1517) : localApi.sendMessages(msg_1514));
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_1518, argsValues_1519);
                    break;
                    
                }
                case 37:  {
                    let uids_1521: UUID[];
                    let data_1522: Uint8Array;
                    const len_1524 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1521 = new Array<UUID>(len_1524);
                    for (let idx_1523 = 0;
                    idx_1523 < len_1524;
                    idx_1523++)  {
                        uids_1521[idx_1523] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const len_1526 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1527 = dataIn.readBytes(len_1526);
                    data_1522 = bytes_1527;
                    const argsObject_1528 = new AuthorizedApiSendMulticastArguments(uids_1521, data_1522);
                    const argsNames_1529: string[] = ["uids", "data"];
                    const argsValues_1530: any[] = [uids_1521, data_1522];
                    ctx.invokeLocalMethodBefore("sendMulticast", argsNames_1529, argsValues_1530);
                    (typeof (localApi as any).sendMulticastArguments === "function" ? (localApi as any).sendMulticastArguments(argsObject_1528) : localApi.sendMulticast(uids_1521, data_1522));
                    ctx.invokeLocalMethodAfter("sendMulticast", null, argsNames_1529, argsValues_1530);
                    break;
                    
                }
                case 39:  {
                    const reqId_1531 = dataIn.readInt();
                    let msg_1532: Message;
                    msg_1532 = Message.META.deserialize(ctx, dataIn);
                    const argsObject_1533 = new AuthorizedApiSendMessageWithResultArguments(msg_1532);
                    const argsNames_1534: string[] = ["msg"];
                    const argsValues_1535: any[] = [msg_1532];
                    ctx.invokeLocalMethodBefore("sendMessageWithResult", argsNames_1534, argsValues_1535);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).sendMessageWithResultArguments === "function" ? (localApi as any).sendMessageWithResultArguments(argsObject_1533) : localApi.sendMessageWithResult(msg_1532));
                    ctx.invokeLocalMethodAfter("sendMessageWithResult", resultFuture, argsNames_1534, argsValues_1535);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1531);
                        
                    }
                    );
                    break;
                    
                }
                case 8:  {
                    const reqId_1536 = dataIn.readInt();
                    let owner_1537: UUID;
                    let uids_1538: UUID[];
                    owner_1537 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1540 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1538 = new Array<UUID>(len_1540);
                    for (let idx_1539 = 0;
                    idx_1539 < len_1540;
                    idx_1539++)  {
                        uids_1538[idx_1539] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1541 = new AuthorizedApiCreateAccessGroupArguments(owner_1537, uids_1538);
                    const argsNames_1542: string[] = ["owner", "uids"];
                    const argsValues_1543: any[] = [owner_1537, uids_1538];
                    ctx.invokeLocalMethodBefore("createAccessGroup", argsNames_1542, argsValues_1543);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).createAccessGroupArguments === "function" ? (localApi as any).createAccessGroupArguments(argsObject_1541) : localApi.createAccessGroup(owner_1537, uids_1538));
                    ctx.invokeLocalMethodAfter("createAccessGroup", resultFuture, argsNames_1542, argsValues_1543);
                    resultFuture.to((v_1545: UUID) =>  {
                        const data_1544 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_1545, data_1544);
                        ctx.sendResultToRemote(reqId_1536, data_1544.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_1546 = dataIn.readInt();
                    let groupId_1547: UUID;
                    let uid_1548: UUID;
                    groupId_1547 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid_1548 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1549 = new AuthorizedApiAddToAccessGroupArguments(groupId_1547, uid_1548);
                    const argsNames_1550: string[] = ["groupId", "uid"];
                    const argsValues_1551: any[] = [groupId_1547, uid_1548];
                    ctx.invokeLocalMethodBefore("addToAccessGroup", argsNames_1550, argsValues_1551);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).addToAccessGroupArguments === "function" ? (localApi as any).addToAccessGroupArguments(argsObject_1549) : localApi.addToAccessGroup(groupId_1547, uid_1548));
                    ctx.invokeLocalMethodAfter("addToAccessGroup", resultFuture, argsNames_1550, argsValues_1551);
                    resultFuture.to((v_1553: boolean) =>  {
                        const data_1552 = new DataInOut();
                        data_1552.writeBoolean(v_1553);
                        ctx.sendResultToRemote(reqId_1546, data_1552.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_1554 = dataIn.readInt();
                    let groupId_1555: UUID;
                    let uid_1556: UUID;
                    groupId_1555 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid_1556 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1557 = new AuthorizedApiRemoveFromAccessGroupArguments(groupId_1555, uid_1556);
                    const argsNames_1558: string[] = ["groupId", "uid"];
                    const argsValues_1559: any[] = [groupId_1555, uid_1556];
                    ctx.invokeLocalMethodBefore("removeFromAccessGroup", argsNames_1558, argsValues_1559);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).removeFromAccessGroupArguments === "function" ? (localApi as any).removeFromAccessGroupArguments(argsObject_1557) : localApi.removeFromAccessGroup(groupId_1555, uid_1556));
                    ctx.invokeLocalMethodAfter("removeFromAccessGroup", resultFuture, argsNames_1558, argsValues_1559);
                    resultFuture.to((v_1561: boolean) =>  {
                        const data_1560 = new DataInOut();
                        data_1560.writeBoolean(v_1561);
                        ctx.sendResultToRemote(reqId_1554, data_1560.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_1562 = dataIn.readInt();
                    let uid_1563: UUID;
                    uid_1563 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1564 = new AuthorizedApiCheckAccessForSendMessageArguments(uid_1563);
                    const argsNames_1565: string[] = ["uid"];
                    const argsValues_1566: any[] = [uid_1563];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage", argsNames_1565, argsValues_1566);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).checkAccessForSendMessageArguments === "function" ? (localApi as any).checkAccessForSendMessageArguments(argsObject_1564) : localApi.checkAccessForSendMessage(uid_1563));
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage", resultFuture, argsNames_1565, argsValues_1566);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1562);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    let sid_1568: number[];
                    const len_1570 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    sid_1568 = new Array<number>(len_1570);
                    for (let idx_1569 = 0;
                    idx_1569 < len_1570;
                    idx_1569++)  {
                        sid_1568[idx_1569] = dataIn.readShort();
                        
                    }
                    const argsObject_1571 = new AuthorizedApiResolverServersArguments(sid_1568);
                    const argsNames_1572: string[] = ["sid"];
                    const argsValues_1573: any[] = [sid_1568];
                    ctx.invokeLocalMethodBefore("resolverServers", argsNames_1572, argsValues_1573);
                    (typeof (localApi as any).resolverServersArguments === "function" ? (localApi as any).resolverServersArguments(argsObject_1571) : localApi.resolverServers(sid_1568));
                    ctx.invokeLocalMethodAfter("resolverServers", null, argsNames_1572, argsValues_1573);
                    break;
                    
                }
                case 13:  {
                    let uids_1575: UUID[];
                    const len_1577 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1575 = new Array<UUID>(len_1577);
                    for (let idx_1576 = 0;
                    idx_1576 < len_1577;
                    idx_1576++)  {
                        uids_1575[idx_1576] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1578 = new AuthorizedApiResolveCloudsArguments(uids_1575);
                    const argsNames_1579: string[] = ["uids"];
                    const argsValues_1580: any[] = [uids_1575];
                    ctx.invokeLocalMethodBefore("resolveClouds", argsNames_1579, argsValues_1580);
                    (typeof (localApi as any).resolveCloudsArguments === "function" ? (localApi as any).resolveCloudsArguments(argsObject_1578) : localApi.resolveClouds(uids_1575));
                    ctx.invokeLocalMethodAfter("resolveClouds", null, argsNames_1579, argsValues_1580);
                    break;
                    
                }
                case 38:  {
                    let configs_1582: AppliedConfig[];
                    const len_1584 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    configs_1582 = new Array<AppliedConfig>(len_1584);
                    for (let idx_1583 = 0;
                    idx_1583 < len_1584;
                    idx_1583++)  {
                        configs_1582[idx_1583] = AppliedConfig.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1585 = new AuthorizedApiReportAppliedConfigArguments(configs_1582);
                    const argsNames_1586: string[] = ["configs"];
                    const argsValues_1587: any[] = [configs_1582];
                    ctx.invokeLocalMethodBefore("reportAppliedConfig", argsNames_1586, argsValues_1587);
                    (typeof (localApi as any).reportAppliedConfigArguments === "function" ? (localApi as any).reportAppliedConfigArguments(argsObject_1585) : localApi.reportAppliedConfig(configs_1582));
                    ctx.invokeLocalMethodAfter("reportAppliedConfig", null, argsNames_1586, argsValues_1587);
                    break;
                    
                }
                case 14:  {
                    const reqId_1588 = dataIn.readInt();
                    let uid_1589: UUID;
                    uid_1589 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1590 = new AuthorizedApiGetAccessGroupsArguments(uid_1589);
                    const argsNames_1591: string[] = ["uid"];
                    const argsValues_1592: any[] = [uid_1589];
                    ctx.invokeLocalMethodBefore("getAccessGroups", argsNames_1591, argsValues_1592);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getAccessGroupsArguments === "function" ? (localApi as any).getAccessGroupsArguments(argsObject_1590) : localApi.getAccessGroups(uid_1589));
                    ctx.invokeLocalMethodAfter("getAccessGroups", resultFuture, argsNames_1591, argsValues_1592);
                    resultFuture.to((v_1594: UUID[]) =>  {
                        const data_1593 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1593, v_1594.length);
                        for (const el_1595 of v_1594)  {
                            FastMeta.META_UUID.serialize(ctx, el_1595, data_1593);
                            
                        }
                        ctx.sendResultToRemote(reqId_1588, data_1593.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_1596 = dataIn.readInt();
                    let groupId_1597: UUID;
                    groupId_1597 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1598 = new AuthorizedApiGetAccessGroupArguments(groupId_1597);
                    const argsNames_1599: string[] = ["groupId"];
                    const argsValues_1600: any[] = [groupId_1597];
                    ctx.invokeLocalMethodBefore("getAccessGroup", argsNames_1599, argsValues_1600);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getAccessGroupArguments === "function" ? (localApi as any).getAccessGroupArguments(argsObject_1598) : localApi.getAccessGroup(groupId_1597));
                    ctx.invokeLocalMethodAfter("getAccessGroup", resultFuture, argsNames_1599, argsValues_1600);
                    resultFuture.to((v_1602: AccessGroup) =>  {
                        const data_1601 = new DataInOut();
                        AccessGroup.META.serialize(ctx, v_1602, data_1601);
                        ctx.sendResultToRemote(reqId_1596, data_1601.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 16:  {
                    const reqId_1603 = dataIn.readInt();
                    let uid_1604: UUID;
                    uid_1604 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1605 = new AuthorizedApiGetAllAccessedClientsArguments(uid_1604);
                    const argsNames_1606: string[] = ["uid"];
                    const argsValues_1607: any[] = [uid_1604];
                    ctx.invokeLocalMethodBefore("getAllAccessedClients", argsNames_1606, argsValues_1607);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getAllAccessedClientsArguments === "function" ? (localApi as any).getAllAccessedClientsArguments(argsObject_1605) : localApi.getAllAccessedClients(uid_1604));
                    ctx.invokeLocalMethodAfter("getAllAccessedClients", resultFuture, argsNames_1606, argsValues_1607);
                    resultFuture.to((v_1609: UUID[]) =>  {
                        const data_1608 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1608, v_1609.length);
                        for (const el_1610 of v_1609)  {
                            FastMeta.META_UUID.serialize(ctx, el_1610, data_1608);
                            
                        }
                        ctx.sendResultToRemote(reqId_1603, data_1608.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 17:  {
                    const reqId_1611 = dataIn.readInt();
                    let uid1_1612: UUID;
                    let uid2_1613: UUID;
                    uid1_1612 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid2_1613 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1614 = new AuthorizedApiCheckAccessForSendMessage2Arguments(uid1_1612, uid2_1613);
                    const argsNames_1615: string[] = ["uid1", "uid2"];
                    const argsValues_1616: any[] = [uid1_1612, uid2_1613];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage2", argsNames_1615, argsValues_1616);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).checkAccessForSendMessage2Arguments === "function" ? (localApi as any).checkAccessForSendMessage2Arguments(argsObject_1614) : localApi.checkAccessForSendMessage2(uid1_1612, uid2_1613));
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage2", resultFuture, argsNames_1615, argsValues_1616);
                    resultFuture.to((v_1618: boolean) =>  {
                        const data_1617 = new DataInOut();
                        data_1617.writeBoolean(v_1618);
                        ctx.sendResultToRemote(reqId_1611, data_1617.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 18:  {
                    let telemetry_1620: Telemetry;
                    telemetry_1620 = Telemetry.META.deserialize(ctx, dataIn);
                    const argsObject_1621 = new AuthorizedApiSendTelemetryArguments(telemetry_1620);
                    const argsNames_1622: string[] = ["telemetry"];
                    const argsValues_1623: any[] = [telemetry_1620];
                    ctx.invokeLocalMethodBefore("sendTelemetry", argsNames_1622, argsValues_1623);
                    (typeof (localApi as any).sendTelemetryArguments === "function" ? (localApi as any).sendTelemetryArguments(argsObject_1621) : localApi.sendTelemetry(telemetry_1620));
                    ctx.invokeLocalMethodAfter("sendTelemetry", null, argsNames_1622, argsValues_1623);
                    break;
                    
                }
                case 19:  {
                    let uids_1625: UUID[];
                    const len_1627 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1625 = new Array<UUID>(len_1627);
                    for (let idx_1626 = 0;
                    idx_1626 < len_1627;
                    idx_1626++)  {
                        uids_1625[idx_1626] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1628 = new AuthorizedApiRequestAccessGroupsForClientsArguments(uids_1625);
                    const argsNames_1629: string[] = ["uids"];
                    const argsValues_1630: any[] = [uids_1625];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsForClients", argsNames_1629, argsValues_1630);
                    (typeof (localApi as any).requestAccessGroupsForClientsArguments === "function" ? (localApi as any).requestAccessGroupsForClientsArguments(argsObject_1628) : localApi.requestAccessGroupsForClients(uids_1625));
                    ctx.invokeLocalMethodAfter("requestAccessGroupsForClients", null, argsNames_1629, argsValues_1630);
                    break;
                    
                }
                case 20:  {
                    let ids_1632: UUID[];
                    const len_1634 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    ids_1632 = new Array<UUID>(len_1634);
                    for (let idx_1633 = 0;
                    idx_1633 < len_1634;
                    idx_1633++)  {
                        ids_1632[idx_1633] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1635 = new AuthorizedApiRequestAccessGroupsItemsArguments(ids_1632);
                    const argsNames_1636: string[] = ["ids"];
                    const argsValues_1637: any[] = [ids_1632];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsItems", argsNames_1636, argsValues_1637);
                    (typeof (localApi as any).requestAccessGroupsItemsArguments === "function" ? (localApi as any).requestAccessGroupsItemsArguments(argsObject_1635) : localApi.requestAccessGroupsItems(ids_1632));
                    ctx.invokeLocalMethodAfter("requestAccessGroupsItems", null, argsNames_1636, argsValues_1637);
                    break;
                    
                }
                case 22:  {
                    let uid_1639: UUID;
                    let groups_1640: UUID[];
                    uid_1639 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1642 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1640 = new Array<UUID>(len_1642);
                    for (let idx_1641 = 0;
                    idx_1641 < len_1642;
                    idx_1641++)  {
                        groups_1640[idx_1641] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1643 = new AuthorizedApiSendAccessGroupForClientArguments(uid_1639, groups_1640);
                    const argsNames_1644: string[] = ["uid", "groups"];
                    const argsValues_1645: any[] = [uid_1639, groups_1640];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_1644, argsValues_1645);
                    (typeof (localApi as any).sendAccessGroupForClientArguments === "function" ? (localApi as any).sendAccessGroupForClientArguments(argsObject_1643) : localApi.sendAccessGroupForClient(uid_1639, groups_1640));
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_1644, argsValues_1645);
                    break;
                    
                }
                case 23:  {
                    let id_1647: UUID;
                    let groups_1648: UUID[];
                    id_1647 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1650 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1648 = new Array<UUID>(len_1650);
                    for (let idx_1649 = 0;
                    idx_1649 < len_1650;
                    idx_1649++)  {
                        groups_1648[idx_1649] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1651 = new AuthorizedApiAddItemsToAccessGroupArguments(id_1647, groups_1648);
                    const argsNames_1652: string[] = ["id", "groups"];
                    const argsValues_1653: any[] = [id_1647, groups_1648];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_1652, argsValues_1653);
                    (typeof (localApi as any).addItemsToAccessGroupArguments === "function" ? (localApi as any).addItemsToAccessGroupArguments(argsObject_1651) : localApi.addItemsToAccessGroup(id_1647, groups_1648));
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_1652, argsValues_1653);
                    break;
                    
                }
                case 24:  {
                    let id_1655: UUID;
                    let groups_1656: UUID[];
                    id_1655 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1658 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1656 = new Array<UUID>(len_1658);
                    for (let idx_1657 = 0;
                    idx_1657 < len_1658;
                    idx_1657++)  {
                        groups_1656[idx_1657] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1659 = new AuthorizedApiRemoveItemsFromAccessGroupArguments(id_1655, groups_1656);
                    const argsNames_1660: string[] = ["id", "groups"];
                    const argsValues_1661: any[] = [id_1655, groups_1656];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_1660, argsValues_1661);
                    (typeof (localApi as any).removeItemsFromAccessGroupArguments === "function" ? (localApi as any).removeItemsFromAccessGroupArguments(argsObject_1659) : localApi.removeItemsFromAccessGroup(id_1655, groups_1656));
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_1660, argsValues_1661);
                    break;
                    
                }
                case 25:  {
                    let uid_1663: UUID;
                    let groups_1664: UUID[];
                    uid_1663 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1666 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1664 = new Array<UUID>(len_1666);
                    for (let idx_1665 = 0;
                    idx_1665 < len_1666;
                    idx_1665++)  {
                        groups_1664[idx_1665] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1667 = new AuthorizedApiAddAccessGroupsToClientArguments(uid_1663, groups_1664);
                    const argsNames_1668: string[] = ["uid", "groups"];
                    const argsValues_1669: any[] = [uid_1663, groups_1664];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_1668, argsValues_1669);
                    (typeof (localApi as any).addAccessGroupsToClientArguments === "function" ? (localApi as any).addAccessGroupsToClientArguments(argsObject_1667) : localApi.addAccessGroupsToClient(uid_1663, groups_1664));
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_1668, argsValues_1669);
                    break;
                    
                }
                case 26:  {
                    let uid_1671: UUID;
                    let groups_1672: UUID[];
                    uid_1671 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_1674 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_1672 = new Array<UUID>(len_1674);
                    for (let idx_1673 = 0;
                    idx_1673 < len_1674;
                    idx_1673++)  {
                        groups_1672[idx_1673] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1675 = new AuthorizedApiRemoveAccessGroupsFromClientArguments(uid_1671, groups_1672);
                    const argsNames_1676: string[] = ["uid", "groups"];
                    const argsValues_1677: any[] = [uid_1671, groups_1672];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_1676, argsValues_1677);
                    (typeof (localApi as any).removeAccessGroupsFromClientArguments === "function" ? (localApi as any).removeAccessGroupsFromClientArguments(argsObject_1675) : localApi.removeAccessGroupsFromClient(uid_1671, groups_1672));
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_1676, argsValues_1677);
                    break;
                    
                }
                case 27:  {
                    let uids_1679: UUID[];
                    const len_1681 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_1679 = new Array<UUID>(len_1681);
                    for (let idx_1680 = 0;
                    idx_1680 < len_1681;
                    idx_1680++)  {
                        uids_1679[idx_1680] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1682 = new AuthorizedApiRequestAllAccessedClientsArguments(uids_1679);
                    const argsNames_1683: string[] = ["uids"];
                    const argsValues_1684: any[] = [uids_1679];
                    ctx.invokeLocalMethodBefore("requestAllAccessedClients", argsNames_1683, argsValues_1684);
                    (typeof (localApi as any).requestAllAccessedClientsArguments === "function" ? (localApi as any).requestAllAccessedClientsArguments(argsObject_1682) : localApi.requestAllAccessedClients(uids_1679));
                    ctx.invokeLocalMethodAfter("requestAllAccessedClients", null, argsNames_1683, argsValues_1684);
                    break;
                    
                }
                case 28:  {
                    let requests_1686: AccessCheckPair[];
                    const len_1688 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    requests_1686 = new Array<AccessCheckPair>(len_1688);
                    for (let idx_1687 = 0;
                    idx_1687 < len_1688;
                    idx_1687++)  {
                        requests_1686[idx_1687] = AccessCheckPair.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_1689 = new AuthorizedApiRequestAccessCheckArguments(requests_1686);
                    const argsNames_1690: string[] = ["requests"];
                    const argsValues_1691: any[] = [requests_1686];
                    ctx.invokeLocalMethodBefore("requestAccessCheck", argsNames_1690, argsValues_1691);
                    (typeof (localApi as any).requestAccessCheckArguments === "function" ? (localApi as any).requestAccessCheckArguments(argsObject_1689) : localApi.requestAccessCheck(requests_1686));
                    ctx.invokeLocalMethodAfter("requestAccessCheck", null, argsNames_1690, argsValues_1691);
                    break;
                    
                }
                case 29:  {
                    const reqId_1692 = dataIn.readInt();
                    let uid_1693: UUID;
                    let fromTime_1694: bigint;
                    let toTime_1695: bigint;
                    let limit_1696: number;
                    uid_1693 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    fromTime_1694 = dataIn.readLong();
                    toTime_1695 = dataIn.readLong();
                    limit_1696 = dataIn.readInt();
                    const argsObject_1697 = new AuthorizedApiGetClientActivityArguments(uid_1693, fromTime_1694, toTime_1695, limit_1696);
                    const argsNames_1698: string[] = ["uid", "fromTime", "toTime", "limit"];
                    const argsValues_1699: any[] = [uid_1693, fromTime_1694, toTime_1695, limit_1696];
                    ctx.invokeLocalMethodBefore("getClientActivity", argsNames_1698, argsValues_1699);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getClientActivityArguments === "function" ? (localApi as any).getClientActivityArguments(argsObject_1697) : localApi.getClientActivity(uid_1693, fromTime_1694, toTime_1695, limit_1696));
                    ctx.invokeLocalMethodAfter("getClientActivity", resultFuture, argsNames_1698, argsValues_1699);
                    resultFuture.to((v_1701: ClientActivity[]) =>  {
                        const data_1700 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1700, v_1701.length);
                        for (const el_1702 of v_1701)  {
                            ClientActivity.META.serialize(ctx, el_1702, data_1700);
                            
                        }
                        ctx.sendResultToRemote(reqId_1692, data_1700.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 30:  {
                    const reqId_1703 = dataIn.readInt();
                    let uid_1704: UUID;
                    let query_1705: string;
                    let limit_1706: number;
                    uid_1704 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    let stringBytes_1707: Uint8Array;
                    const len_1709 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_1710 = dataIn.readBytes(len_1709);
                    stringBytes_1707 = bytes_1710;
                    query_1705 = new TextDecoder('utf-8').decode(stringBytes_1707);
                    limit_1706 = dataIn.readInt();
                    const argsObject_1711 = new AuthorizedApiSearchClientLogsArguments(uid_1704, query_1705, limit_1706);
                    const argsNames_1712: string[] = ["uid", "query", "limit"];
                    const argsValues_1713: any[] = [uid_1704, query_1705, limit_1706];
                    ctx.invokeLocalMethodBefore("searchClientLogs", argsNames_1712, argsValues_1713);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).searchClientLogsArguments === "function" ? (localApi as any).searchClientLogsArguments(argsObject_1711) : localApi.searchClientLogs(uid_1704, query_1705, limit_1706));
                    ctx.invokeLocalMethodAfter("searchClientLogs", resultFuture, argsNames_1712, argsValues_1713);
                    resultFuture.to((v_1715: ClientLogEntry[]) =>  {
                        const data_1714 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1714, v_1715.length);
                        for (const el_1716 of v_1715)  {
                            ClientLogEntry.META.serialize(ctx, el_1716, data_1714);
                            
                        }
                        ctx.sendResultToRemote(reqId_1703, data_1714.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 31:  {
                    const reqId_1717 = dataIn.readInt();
                    let uid_1718: UUID;
                    let limit_1719: number;
                    uid_1718 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    limit_1719 = dataIn.readInt();
                    const argsObject_1720 = new AuthorizedApiGetClientConnectionsArguments(uid_1718, limit_1719);
                    const argsNames_1721: string[] = ["uid", "limit"];
                    const argsValues_1722: any[] = [uid_1718, limit_1719];
                    ctx.invokeLocalMethodBefore("getClientConnections", argsNames_1721, argsValues_1722);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getClientConnectionsArguments === "function" ? (localApi as any).getClientConnectionsArguments(argsObject_1720) : localApi.getClientConnections(uid_1718, limit_1719));
                    ctx.invokeLocalMethodAfter("getClientConnections", resultFuture, argsNames_1721, argsValues_1722);
                    resultFuture.to((v_1724: ClientConnectionInfo[]) =>  {
                        const data_1723 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1723, v_1724.length);
                        for (const el_1725 of v_1724)  {
                            ClientConnectionInfo.META.serialize(ctx, el_1725, data_1723);
                            
                        }
                        ctx.sendResultToRemote(reqId_1717, data_1723.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 32:  {
                    const reqId_1726 = dataIn.readInt();
                    let uid_1727: UUID;
                    let fromTime_1728: bigint;
                    let toTime_1729: bigint;
                    let limit_1730: number;
                    uid_1727 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    fromTime_1728 = dataIn.readLong();
                    toTime_1729 = dataIn.readLong();
                    limit_1730 = dataIn.readInt();
                    const argsObject_1731 = new AuthorizedApiGetClientMessagesArguments(uid_1727, fromTime_1728, toTime_1729, limit_1730);
                    const argsNames_1732: string[] = ["uid", "fromTime", "toTime", "limit"];
                    const argsValues_1733: any[] = [uid_1727, fromTime_1728, toTime_1729, limit_1730];
                    ctx.invokeLocalMethodBefore("getClientMessages", argsNames_1732, argsValues_1733);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getClientMessagesArguments === "function" ? (localApi as any).getClientMessagesArguments(argsObject_1731) : localApi.getClientMessages(uid_1727, fromTime_1728, toTime_1729, limit_1730));
                    ctx.invokeLocalMethodAfter("getClientMessages", resultFuture, argsNames_1732, argsValues_1733);
                    resultFuture.to((v_1735: MessageInfo[]) =>  {
                        const data_1734 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1734, v_1735.length);
                        for (const el_1736 of v_1735)  {
                            MessageInfo.META.serialize(ctx, el_1736, data_1734);
                            
                        }
                        ctx.sendResultToRemote(reqId_1726, data_1734.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 33:  {
                    let delayMillis_1738: bigint;
                    delayMillis_1738 = dataIn.readLong();
                    const argsObject_1739 = new AuthorizedApiSetNextReadDelayArguments(delayMillis_1738);
                    const argsNames_1740: string[] = ["delayMillis"];
                    const argsValues_1741: any[] = [delayMillis_1738];
                    ctx.invokeLocalMethodBefore("setNextReadDelay", argsNames_1740, argsValues_1741);
                    (typeof (localApi as any).setNextReadDelayArguments === "function" ? (localApi as any).setNextReadDelayArguments(argsObject_1739) : localApi.setNextReadDelay(delayMillis_1738));
                    ctx.invokeLocalMethodAfter("setNextReadDelay", null, argsNames_1740, argsValues_1741);
                    break;
                    
                }
                case 34:  {
                    const reqId_1742 = dataIn.readInt();
                    let uid_1743: UUID;
                    uid_1743 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1744 = new AuthorizedApiGetUapArguments(uid_1743);
                    const argsNames_1745: string[] = ["uid"];
                    const argsValues_1746: any[] = [uid_1743];
                    ctx.invokeLocalMethodBefore("getUap", argsNames_1745, argsValues_1746);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getUapArguments === "function" ? (localApi as any).getUapArguments(argsObject_1744) : localApi.getUap(uid_1743));
                    ctx.invokeLocalMethodAfter("getUap", resultFuture, argsNames_1745, argsValues_1746);
                    resultFuture.to((v_1748: Uap) =>  {
                        const data_1747 = new DataInOut();
                        Uap.META.serialize(ctx, v_1748, data_1747);
                        ctx.sendResultToRemote(reqId_1742, data_1747.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 40:  {
                    const reqId_1749 = dataIn.readInt();
                    let uid_1750: UUID;
                    uid_1750 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_1751 = new AuthorizedApiRequestWebRtcSessionArguments(uid_1750);
                    const argsNames_1752: string[] = ["uid"];
                    const argsValues_1753: any[] = [uid_1750];
                    ctx.invokeLocalMethodBefore("requestWebRtcSession", argsNames_1752, argsValues_1753);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).requestWebRtcSessionArguments === "function" ? (localApi as any).requestWebRtcSessionArguments(argsObject_1751) : localApi.requestWebRtcSession(uid_1750));
                    ctx.invokeLocalMethodAfter("requestWebRtcSession", resultFuture, argsNames_1752, argsValues_1753);
                    resultFuture.to((v_1755: WebRtcSession) =>  {
                        const data_1754 = new DataInOut();
                        WebRtcSession.META.serialize(ctx, v_1755, data_1754);
                        ctx.sendResultToRemote(reqId_1749, data_1754.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 41:  {
                    let session_1757: WebRtcSession;
                    session_1757 = WebRtcSession.META.deserialize(ctx, dataIn);
                    const argsObject_1758 = new AuthorizedApiPublishWebRtcSessionArguments(session_1757);
                    const argsNames_1759: string[] = ["session"];
                    const argsValues_1760: any[] = [session_1757];
                    ctx.invokeLocalMethodBefore("publishWebRtcSession", argsNames_1759, argsValues_1760);
                    (typeof (localApi as any).publishWebRtcSessionArguments === "function" ? (localApi as any).publishWebRtcSessionArguments(argsObject_1758) : localApi.publishWebRtcSession(session_1757));
                    ctx.invokeLocalMethodAfter("publishWebRtcSession", null, argsNames_1759, argsValues_1760);
                    break;
                    
                }
                case 42:  {
                    const reqId_1761 = dataIn.readInt();
                    const argsObject_1762 = new AuthorizedApiSelfDestructArguments();
                    const argsNames_1763: string[] = [];
                    const argsValues_1764: any[] = [];
                    ctx.invokeLocalMethodBefore("selfDestruct", argsNames_1763, argsValues_1764);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).selfDestructArguments === "function" ? (localApi as any).selfDestructArguments(argsObject_1762) : localApi.selfDestruct());
                    ctx.invokeLocalMethodAfter("selfDestruct", resultFuture, argsNames_1763, argsValues_1764);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1761);
                        
                    }
                    );
                    break;
                    
                }
                case 43:  {
                    const reqId_1765 = dataIn.readInt();
                    const argsObject_1766 = new AuthorizedApiGetServersArguments();
                    const argsNames_1767: string[] = [];
                    const argsValues_1768: any[] = [];
                    ctx.invokeLocalMethodBefore("getServers", argsNames_1767, argsValues_1768);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getServersArguments === "function" ? (localApi as any).getServersArguments(argsObject_1766) : localApi.getServers());
                    ctx.invokeLocalMethodAfter("getServers", resultFuture, argsNames_1767, argsValues_1768);
                    resultFuture.to((v_1770: ServerDescriptorWithGeo[]) =>  {
                        const data_1769 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_1769, v_1770.length);
                        for (const el_1771 of v_1770)  {
                            ServerDescriptorWithGeo.META.serialize(ctx, el_1771, data_1769);
                            
                        }
                        ctx.sendResultToRemote(reqId_1765, data_1769.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 44:  {
                    let version_1773: number;
                    version_1773 = dataIn.readInt();
                    const argsObject_1774 = new AuthorizedApiSwitchVersionArguments(version_1773);
                    const argsNames_1775: string[] = ["version"];
                    const argsValues_1776: any[] = [version_1773];
                    ctx.invokeLocalMethodBefore("switchVersion", argsNames_1775, argsValues_1776);
                    (typeof (localApi as any).switchVersionArguments === "function" ? (localApi as any).switchVersionArguments(argsObject_1774) : localApi.switchVersion(version_1773));
                    ctx.invokeLocalMethodAfter("switchVersion", null, argsNames_1775, argsValues_1776);
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
    makeRemote(sCtx_1777: MetaContext): AuthorizedApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_1777.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_1777.flush();
                
            }
            , getFastMetaContext: () => sCtx_1777, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_1777.makeRemote(meta), backId: (id: number): void =>  {
                const dataOut_1779 = new DataInOut();
                dataOut_1779.writeByte(3);
                const argsNames_1781: string[] = ["id"];
                const argsValues_1782: any[] = [id];
                sCtx_1777.invokeRemoteMethodAfter("backId", null, argsNames_1781, argsValues_1782);
                dataOut_1779.writeByte(id);
                sCtx_1777.sendToRemote(dataOut_1779.toArray());
                
            }
            , ping: (nextConnectMsDuration: bigint, rxWindowMs: bigint): AFuture =>  {
                const dataOut_1784 = new DataInOut();
                dataOut_1784.writeByte(4);
                const argsNames_1786: string[] = ["nextConnectMsDuration", "rxWindowMs"];
                const argsValues_1787: any[] = [nextConnectMsDuration, rxWindowMs];
                const result_1785 = AFuture.make();
                sCtx_1777.invokeRemoteMethodAfter("ping", result_1785, argsNames_1786, argsValues_1787);
                const reqId_1783 = sCtx_1777.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1785 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1785.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1784.writeInt(reqId_1783);
                dataOut_1784.writeLong(nextConnectMsDuration);
                dataOut_1784.writeLong(rxWindowMs);
                sCtx_1777.sendToRemote(dataOut_1784.toArray());
                return result_1785;
                
            }
            , client: (uid: UUID, stream: ClientApiStream): void =>  {
                const dataOut_1789 = new DataInOut();
                dataOut_1789.writeByte(5);
                const argsNames_1791: string[] = ["uid", "stream"];
                const argsValues_1792: any[] = [uid, stream];
                sCtx_1777.invokeRemoteMethodAfter("client", null, argsNames_1791, argsValues_1792);
                FastMeta.META_UUID.serialize(sCtx_1777, uid, dataOut_1789);
                ClientApiStream.META.serialize(sCtx_1777, stream, dataOut_1789);
                sCtx_1777.sendToRemote(dataOut_1789.toArray());
                
            }
            , sendMessage: (msg: Message): void =>  {
                const dataOut_1794 = new DataInOut();
                dataOut_1794.writeByte(6);
                const argsNames_1796: string[] = ["msg"];
                const argsValues_1797: any[] = [msg];
                sCtx_1777.invokeRemoteMethodAfter("sendMessage", null, argsNames_1796, argsValues_1797);
                Message.META.serialize(sCtx_1777, msg, dataOut_1794);
                sCtx_1777.sendToRemote(dataOut_1794.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_1799 = new DataInOut();
                dataOut_1799.writeByte(7);
                const argsNames_1801: string[] = ["msg"];
                const argsValues_1802: any[] = [msg];
                sCtx_1777.invokeRemoteMethodAfter("sendMessages", null, argsNames_1801, argsValues_1802);
                SerializerPackNumber.INSTANCE.put(dataOut_1799, msg.length);
                for (const el_1803 of msg)  {
                    Message.META.serialize(sCtx_1777, el_1803, dataOut_1799);
                    
                }
                sCtx_1777.sendToRemote(dataOut_1799.toArray());
                
            }
            , sendMulticast: (uids: UUID[], data: Uint8Array): void =>  {
                const dataOut_1805 = new DataInOut();
                dataOut_1805.writeByte(37);
                const argsNames_1807: string[] = ["uids", "data"];
                const argsValues_1808: any[] = [uids, data];
                sCtx_1777.invokeRemoteMethodAfter("sendMulticast", null, argsNames_1807, argsValues_1808);
                SerializerPackNumber.INSTANCE.put(dataOut_1805, uids.length);
                for (const el_1809 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1777, el_1809, dataOut_1805);
                    
                }
                SerializerPackNumber.INSTANCE.put(dataOut_1805, data.length);
                dataOut_1805.write(data);
                sCtx_1777.sendToRemote(dataOut_1805.toArray());
                
            }
            , sendMessageWithResult: (msg: Message): AFuture =>  {
                const dataOut_1812 = new DataInOut();
                dataOut_1812.writeByte(39);
                const argsNames_1814: string[] = ["msg"];
                const argsValues_1815: any[] = [msg];
                const result_1813 = AFuture.make();
                sCtx_1777.invokeRemoteMethodAfter("sendMessageWithResult", result_1813, argsNames_1814, argsValues_1815);
                const reqId_1811 = sCtx_1777.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1813 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1813.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1812.writeInt(reqId_1811);
                Message.META.serialize(sCtx_1777, msg, dataOut_1812);
                sCtx_1777.sendToRemote(dataOut_1812.toArray());
                return result_1813;
                
            }
            , createAccessGroup: (owner: UUID, uids: UUID[]): ARFuture<UUID> =>  {
                const dataOut_1817 = new DataInOut();
                dataOut_1817.writeByte(8);
                const argsNames_1819: string[] = ["owner", "uids"];
                const argsValues_1820: any[] = [owner, uids];
                const result_1818 = ARFuture.of<UUID>();
                sCtx_1777.invokeRemoteMethodAfter("createAccessGroup", result_1818, argsNames_1819, argsValues_1820);
                const reqId_1816 = sCtx_1777.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1818 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_1777, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1818.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1817.writeInt(reqId_1816);
                FastMeta.META_UUID.serialize(sCtx_1777, owner, dataOut_1817);
                SerializerPackNumber.INSTANCE.put(dataOut_1817, uids.length);
                for (const el_1821 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1777, el_1821, dataOut_1817);
                    
                }
                sCtx_1777.sendToRemote(dataOut_1817.toArray());
                return result_1818;
                
            }
            , addToAccessGroup: (groupId: UUID, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_1823 = new DataInOut();
                dataOut_1823.writeByte(9);
                const argsNames_1825: string[] = ["groupId", "uid"];
                const argsValues_1826: any[] = [groupId, uid];
                const result_1824 = ARFuture.of<boolean>();
                sCtx_1777.invokeRemoteMethodAfter("addToAccessGroup", result_1824, argsNames_1825, argsValues_1826);
                const reqId_1822 = sCtx_1777.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1824 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1777, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1824.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1823.writeInt(reqId_1822);
                FastMeta.META_UUID.serialize(sCtx_1777, groupId, dataOut_1823);
                FastMeta.META_UUID.serialize(sCtx_1777, uid, dataOut_1823);
                sCtx_1777.sendToRemote(dataOut_1823.toArray());
                return result_1824;
                
            }
            , removeFromAccessGroup: (groupId: UUID, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_1828 = new DataInOut();
                dataOut_1828.writeByte(10);
                const argsNames_1830: string[] = ["groupId", "uid"];
                const argsValues_1831: any[] = [groupId, uid];
                const result_1829 = ARFuture.of<boolean>();
                sCtx_1777.invokeRemoteMethodAfter("removeFromAccessGroup", result_1829, argsNames_1830, argsValues_1831);
                const reqId_1827 = sCtx_1777.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1829 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1777, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1829.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1828.writeInt(reqId_1827);
                FastMeta.META_UUID.serialize(sCtx_1777, groupId, dataOut_1828);
                FastMeta.META_UUID.serialize(sCtx_1777, uid, dataOut_1828);
                sCtx_1777.sendToRemote(dataOut_1828.toArray());
                return result_1829;
                
            }
            , checkAccessForSendMessage: (uid: UUID): AFuture =>  {
                const dataOut_1833 = new DataInOut();
                dataOut_1833.writeByte(11);
                const argsNames_1835: string[] = ["uid"];
                const argsValues_1836: any[] = [uid];
                const result_1834 = AFuture.make();
                sCtx_1777.invokeRemoteMethodAfter("checkAccessForSendMessage", result_1834, argsNames_1835, argsValues_1836);
                const reqId_1832 = sCtx_1777.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1834 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1834.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1833.writeInt(reqId_1832);
                FastMeta.META_UUID.serialize(sCtx_1777, uid, dataOut_1833);
                sCtx_1777.sendToRemote(dataOut_1833.toArray());
                return result_1834;
                
            }
            , resolverServers: (sid: number[]): void =>  {
                const dataOut_1838 = new DataInOut();
                dataOut_1838.writeByte(12);
                const argsNames_1840: string[] = ["sid"];
                const argsValues_1841: any[] = [sid];
                sCtx_1777.invokeRemoteMethodAfter("resolverServers", null, argsNames_1840, argsValues_1841);
                SerializerPackNumber.INSTANCE.put(dataOut_1838, sid.length);
                for (const el_1842 of sid)  {
                    dataOut_1838.writeShort(el_1842);
                    
                }
                sCtx_1777.sendToRemote(dataOut_1838.toArray());
                
            }
            , resolveClouds: (uids: UUID[]): void =>  {
                const dataOut_1844 = new DataInOut();
                dataOut_1844.writeByte(13);
                const argsNames_1846: string[] = ["uids"];
                const argsValues_1847: any[] = [uids];
                sCtx_1777.invokeRemoteMethodAfter("resolveClouds", null, argsNames_1846, argsValues_1847);
                SerializerPackNumber.INSTANCE.put(dataOut_1844, uids.length);
                for (const el_1848 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1777, el_1848, dataOut_1844);
                    
                }
                sCtx_1777.sendToRemote(dataOut_1844.toArray());
                
            }
            , reportAppliedConfig: (configs: AppliedConfig[]): void =>  {
                const dataOut_1850 = new DataInOut();
                dataOut_1850.writeByte(38);
                const argsNames_1852: string[] = ["configs"];
                const argsValues_1853: any[] = [configs];
                sCtx_1777.invokeRemoteMethodAfter("reportAppliedConfig", null, argsNames_1852, argsValues_1853);
                SerializerPackNumber.INSTANCE.put(dataOut_1850, configs.length);
                for (const el_1854 of configs)  {
                    AppliedConfig.META.serialize(sCtx_1777, el_1854, dataOut_1850);
                    
                }
                sCtx_1777.sendToRemote(dataOut_1850.toArray());
                
            }
            , getAccessGroups: (uid: UUID): ARFuture<UUID[]> =>  {
                const dataOut_1856 = new DataInOut();
                dataOut_1856.writeByte(14);
                const argsNames_1858: string[] = ["uid"];
                const argsValues_1859: any[] = [uid];
                const result_1857 = ARFuture.of<UUID[]>();
                sCtx_1777.invokeRemoteMethodAfter("getAccessGroups", result_1857, argsNames_1858, argsValues_1859);
                const reqId_1855 = sCtx_1777.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1857 as ARFuture<UUID[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_UUID).deserialize(sCtx_1777, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1857.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1856.writeInt(reqId_1855);
                FastMeta.META_UUID.serialize(sCtx_1777, uid, dataOut_1856);
                sCtx_1777.sendToRemote(dataOut_1856.toArray());
                return result_1857;
                
            }
            , getAccessGroup: (groupId: UUID): ARFuture<AccessGroup> =>  {
                const dataOut_1861 = new DataInOut();
                dataOut_1861.writeByte(15);
                const argsNames_1863: string[] = ["groupId"];
                const argsValues_1864: any[] = [groupId];
                const result_1862 = ARFuture.of<AccessGroup>();
                sCtx_1777.invokeRemoteMethodAfter("getAccessGroup", result_1862, argsNames_1863, argsValues_1864);
                const reqId_1860 = sCtx_1777.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1862 as ARFuture<AccessGroup>).tryDone(AccessGroup.META.deserialize(sCtx_1777, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1862.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1861.writeInt(reqId_1860);
                FastMeta.META_UUID.serialize(sCtx_1777, groupId, dataOut_1861);
                sCtx_1777.sendToRemote(dataOut_1861.toArray());
                return result_1862;
                
            }
            , getAllAccessedClients: (uid: UUID): ARFuture<UUID[]> =>  {
                const dataOut_1866 = new DataInOut();
                dataOut_1866.writeByte(16);
                const argsNames_1868: string[] = ["uid"];
                const argsValues_1869: any[] = [uid];
                const result_1867 = ARFuture.of<UUID[]>();
                sCtx_1777.invokeRemoteMethodAfter("getAllAccessedClients", result_1867, argsNames_1868, argsValues_1869);
                const reqId_1865 = sCtx_1777.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1867 as ARFuture<UUID[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_UUID).deserialize(sCtx_1777, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1867.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1866.writeInt(reqId_1865);
                FastMeta.META_UUID.serialize(sCtx_1777, uid, dataOut_1866);
                sCtx_1777.sendToRemote(dataOut_1866.toArray());
                return result_1867;
                
            }
            , checkAccessForSendMessage2: (uid1: UUID, uid2: UUID): ARFuture<boolean> =>  {
                const dataOut_1871 = new DataInOut();
                dataOut_1871.writeByte(17);
                const argsNames_1873: string[] = ["uid1", "uid2"];
                const argsValues_1874: any[] = [uid1, uid2];
                const result_1872 = ARFuture.of<boolean>();
                sCtx_1777.invokeRemoteMethodAfter("checkAccessForSendMessage2", result_1872, argsNames_1873, argsValues_1874);
                const reqId_1870 = sCtx_1777.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1872 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_1777, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1872.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1871.writeInt(reqId_1870);
                FastMeta.META_UUID.serialize(sCtx_1777, uid1, dataOut_1871);
                FastMeta.META_UUID.serialize(sCtx_1777, uid2, dataOut_1871);
                sCtx_1777.sendToRemote(dataOut_1871.toArray());
                return result_1872;
                
            }
            , sendTelemetry: (telemetry: Telemetry): void =>  {
                const dataOut_1876 = new DataInOut();
                dataOut_1876.writeByte(18);
                const argsNames_1878: string[] = ["telemetry"];
                const argsValues_1879: any[] = [telemetry];
                sCtx_1777.invokeRemoteMethodAfter("sendTelemetry", null, argsNames_1878, argsValues_1879);
                Telemetry.META.serialize(sCtx_1777, telemetry, dataOut_1876);
                sCtx_1777.sendToRemote(dataOut_1876.toArray());
                
            }
            , requestAccessGroupsForClients: (uids: UUID[]): void =>  {
                const dataOut_1881 = new DataInOut();
                dataOut_1881.writeByte(19);
                const argsNames_1883: string[] = ["uids"];
                const argsValues_1884: any[] = [uids];
                sCtx_1777.invokeRemoteMethodAfter("requestAccessGroupsForClients", null, argsNames_1883, argsValues_1884);
                SerializerPackNumber.INSTANCE.put(dataOut_1881, uids.length);
                for (const el_1885 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1777, el_1885, dataOut_1881);
                    
                }
                sCtx_1777.sendToRemote(dataOut_1881.toArray());
                
            }
            , requestAccessGroupsItems: (ids: UUID[]): void =>  {
                const dataOut_1887 = new DataInOut();
                dataOut_1887.writeByte(20);
                const argsNames_1889: string[] = ["ids"];
                const argsValues_1890: any[] = [ids];
                sCtx_1777.invokeRemoteMethodAfter("requestAccessGroupsItems", null, argsNames_1889, argsValues_1890);
                SerializerPackNumber.INSTANCE.put(dataOut_1887, ids.length);
                for (const el_1891 of ids)  {
                    FastMeta.META_UUID.serialize(sCtx_1777, el_1891, dataOut_1887);
                    
                }
                sCtx_1777.sendToRemote(dataOut_1887.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_1893 = new DataInOut();
                dataOut_1893.writeByte(22);
                const argsNames_1895: string[] = ["uid", "groups"];
                const argsValues_1896: any[] = [uid, groups];
                sCtx_1777.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_1895, argsValues_1896);
                FastMeta.META_UUID.serialize(sCtx_1777, uid, dataOut_1893);
                SerializerPackNumber.INSTANCE.put(dataOut_1893, groups.length);
                for (const el_1897 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1777, el_1897, dataOut_1893);
                    
                }
                sCtx_1777.sendToRemote(dataOut_1893.toArray());
                
            }
            , addItemsToAccessGroup: (id: UUID, groups: UUID[]): void =>  {
                const dataOut_1899 = new DataInOut();
                dataOut_1899.writeByte(23);
                const argsNames_1901: string[] = ["id", "groups"];
                const argsValues_1902: any[] = [id, groups];
                sCtx_1777.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_1901, argsValues_1902);
                FastMeta.META_UUID.serialize(sCtx_1777, id, dataOut_1899);
                SerializerPackNumber.INSTANCE.put(dataOut_1899, groups.length);
                for (const el_1903 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1777, el_1903, dataOut_1899);
                    
                }
                sCtx_1777.sendToRemote(dataOut_1899.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: UUID, groups: UUID[]): void =>  {
                const dataOut_1905 = new DataInOut();
                dataOut_1905.writeByte(24);
                const argsNames_1907: string[] = ["id", "groups"];
                const argsValues_1908: any[] = [id, groups];
                sCtx_1777.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_1907, argsValues_1908);
                FastMeta.META_UUID.serialize(sCtx_1777, id, dataOut_1905);
                SerializerPackNumber.INSTANCE.put(dataOut_1905, groups.length);
                for (const el_1909 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1777, el_1909, dataOut_1905);
                    
                }
                sCtx_1777.sendToRemote(dataOut_1905.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_1911 = new DataInOut();
                dataOut_1911.writeByte(25);
                const argsNames_1913: string[] = ["uid", "groups"];
                const argsValues_1914: any[] = [uid, groups];
                sCtx_1777.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_1913, argsValues_1914);
                FastMeta.META_UUID.serialize(sCtx_1777, uid, dataOut_1911);
                SerializerPackNumber.INSTANCE.put(dataOut_1911, groups.length);
                for (const el_1915 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1777, el_1915, dataOut_1911);
                    
                }
                sCtx_1777.sendToRemote(dataOut_1911.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_1917 = new DataInOut();
                dataOut_1917.writeByte(26);
                const argsNames_1919: string[] = ["uid", "groups"];
                const argsValues_1920: any[] = [uid, groups];
                sCtx_1777.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_1919, argsValues_1920);
                FastMeta.META_UUID.serialize(sCtx_1777, uid, dataOut_1917);
                SerializerPackNumber.INSTANCE.put(dataOut_1917, groups.length);
                for (const el_1921 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_1777, el_1921, dataOut_1917);
                    
                }
                sCtx_1777.sendToRemote(dataOut_1917.toArray());
                
            }
            , requestAllAccessedClients: (uids: UUID[]): void =>  {
                const dataOut_1923 = new DataInOut();
                dataOut_1923.writeByte(27);
                const argsNames_1925: string[] = ["uids"];
                const argsValues_1926: any[] = [uids];
                sCtx_1777.invokeRemoteMethodAfter("requestAllAccessedClients", null, argsNames_1925, argsValues_1926);
                SerializerPackNumber.INSTANCE.put(dataOut_1923, uids.length);
                for (const el_1927 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_1777, el_1927, dataOut_1923);
                    
                }
                sCtx_1777.sendToRemote(dataOut_1923.toArray());
                
            }
            , requestAccessCheck: (requests: AccessCheckPair[]): void =>  {
                const dataOut_1929 = new DataInOut();
                dataOut_1929.writeByte(28);
                const argsNames_1931: string[] = ["requests"];
                const argsValues_1932: any[] = [requests];
                sCtx_1777.invokeRemoteMethodAfter("requestAccessCheck", null, argsNames_1931, argsValues_1932);
                SerializerPackNumber.INSTANCE.put(dataOut_1929, requests.length);
                for (const el_1933 of requests)  {
                    AccessCheckPair.META.serialize(sCtx_1777, el_1933, dataOut_1929);
                    
                }
                sCtx_1777.sendToRemote(dataOut_1929.toArray());
                
            }
            , getClientActivity: (uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<ClientActivity[]> =>  {
                const dataOut_1935 = new DataInOut();
                dataOut_1935.writeByte(29);
                const argsNames_1937: string[] = ["uid", "fromTime", "toTime", "limit"];
                const argsValues_1938: any[] = [uid, fromTime, toTime, limit];
                const result_1936 = ARFuture.of<ClientActivity[]>();
                sCtx_1777.invokeRemoteMethodAfter("getClientActivity", result_1936, argsNames_1937, argsValues_1938);
                const reqId_1934 = sCtx_1777.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1936 as ARFuture<ClientActivity[]>).tryDone(FastMeta.getMetaArray(ClientActivity.META).deserialize(sCtx_1777, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1936.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1935.writeInt(reqId_1934);
                FastMeta.META_UUID.serialize(sCtx_1777, uid, dataOut_1935);
                dataOut_1935.writeLong(fromTime);
                dataOut_1935.writeLong(toTime);
                dataOut_1935.writeInt(limit);
                sCtx_1777.sendToRemote(dataOut_1935.toArray());
                return result_1936;
                
            }
            , searchClientLogs: (uid: UUID, query: string, limit: number): ARFuture<ClientLogEntry[]> =>  {
                const dataOut_1940 = new DataInOut();
                dataOut_1940.writeByte(30);
                const argsNames_1942: string[] = ["uid", "query", "limit"];
                const argsValues_1943: any[] = [uid, query, limit];
                const result_1941 = ARFuture.of<ClientLogEntry[]>();
                sCtx_1777.invokeRemoteMethodAfter("searchClientLogs", result_1941, argsNames_1942, argsValues_1943);
                const reqId_1939 = sCtx_1777.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1941 as ARFuture<ClientLogEntry[]>).tryDone(FastMeta.getMetaArray(ClientLogEntry.META).deserialize(sCtx_1777, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1941.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1940.writeInt(reqId_1939);
                FastMeta.META_UUID.serialize(sCtx_1777, uid, dataOut_1940);
                const stringBytes_1944 = new TextEncoder().encode(query);
                SerializerPackNumber.INSTANCE.put(dataOut_1940, stringBytes_1944.length);
                dataOut_1940.write(stringBytes_1944);
                dataOut_1940.writeInt(limit);
                sCtx_1777.sendToRemote(dataOut_1940.toArray());
                return result_1941;
                
            }
            , getClientConnections: (uid: UUID, limit: number): ARFuture<ClientConnectionInfo[]> =>  {
                const dataOut_1947 = new DataInOut();
                dataOut_1947.writeByte(31);
                const argsNames_1949: string[] = ["uid", "limit"];
                const argsValues_1950: any[] = [uid, limit];
                const result_1948 = ARFuture.of<ClientConnectionInfo[]>();
                sCtx_1777.invokeRemoteMethodAfter("getClientConnections", result_1948, argsNames_1949, argsValues_1950);
                const reqId_1946 = sCtx_1777.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1948 as ARFuture<ClientConnectionInfo[]>).tryDone(FastMeta.getMetaArray(ClientConnectionInfo.META).deserialize(sCtx_1777, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1948.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1947.writeInt(reqId_1946);
                FastMeta.META_UUID.serialize(sCtx_1777, uid, dataOut_1947);
                dataOut_1947.writeInt(limit);
                sCtx_1777.sendToRemote(dataOut_1947.toArray());
                return result_1948;
                
            }
            , getClientMessages: (uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<MessageInfo[]> =>  {
                const dataOut_1952 = new DataInOut();
                dataOut_1952.writeByte(32);
                const argsNames_1954: string[] = ["uid", "fromTime", "toTime", "limit"];
                const argsValues_1955: any[] = [uid, fromTime, toTime, limit];
                const result_1953 = ARFuture.of<MessageInfo[]>();
                sCtx_1777.invokeRemoteMethodAfter("getClientMessages", result_1953, argsNames_1954, argsValues_1955);
                const reqId_1951 = sCtx_1777.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1953 as ARFuture<MessageInfo[]>).tryDone(FastMeta.getMetaArray(MessageInfo.META).deserialize(sCtx_1777, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1953.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1952.writeInt(reqId_1951);
                FastMeta.META_UUID.serialize(sCtx_1777, uid, dataOut_1952);
                dataOut_1952.writeLong(fromTime);
                dataOut_1952.writeLong(toTime);
                dataOut_1952.writeInt(limit);
                sCtx_1777.sendToRemote(dataOut_1952.toArray());
                return result_1953;
                
            }
            , setNextReadDelay: (delayMillis: bigint): void =>  {
                const dataOut_1957 = new DataInOut();
                dataOut_1957.writeByte(33);
                const argsNames_1959: string[] = ["delayMillis"];
                const argsValues_1960: any[] = [delayMillis];
                sCtx_1777.invokeRemoteMethodAfter("setNextReadDelay", null, argsNames_1959, argsValues_1960);
                dataOut_1957.writeLong(delayMillis);
                sCtx_1777.sendToRemote(dataOut_1957.toArray());
                
            }
            , getUap: (uid: UUID): ARFuture<Uap> =>  {
                const dataOut_1962 = new DataInOut();
                dataOut_1962.writeByte(34);
                const argsNames_1964: string[] = ["uid"];
                const argsValues_1965: any[] = [uid];
                const result_1963 = ARFuture.of<Uap>();
                sCtx_1777.invokeRemoteMethodAfter("getUap", result_1963, argsNames_1964, argsValues_1965);
                const reqId_1961 = sCtx_1777.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1963 as ARFuture<Uap>).tryDone(Uap.META.deserialize(sCtx_1777, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1963.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1962.writeInt(reqId_1961);
                FastMeta.META_UUID.serialize(sCtx_1777, uid, dataOut_1962);
                sCtx_1777.sendToRemote(dataOut_1962.toArray());
                return result_1963;
                
            }
            , requestWebRtcSession: (uid: UUID): ARFuture<WebRtcSession> =>  {
                const dataOut_1967 = new DataInOut();
                dataOut_1967.writeByte(40);
                const argsNames_1969: string[] = ["uid"];
                const argsValues_1970: any[] = [uid];
                const result_1968 = ARFuture.of<WebRtcSession>();
                sCtx_1777.invokeRemoteMethodAfter("requestWebRtcSession", result_1968, argsNames_1969, argsValues_1970);
                const reqId_1966 = sCtx_1777.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1968 as ARFuture<WebRtcSession>).tryDone(WebRtcSession.META.deserialize(sCtx_1777, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1968.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1967.writeInt(reqId_1966);
                FastMeta.META_UUID.serialize(sCtx_1777, uid, dataOut_1967);
                sCtx_1777.sendToRemote(dataOut_1967.toArray());
                return result_1968;
                
            }
            , publishWebRtcSession: (session: WebRtcSession): void =>  {
                const dataOut_1972 = new DataInOut();
                dataOut_1972.writeByte(41);
                const argsNames_1974: string[] = ["session"];
                const argsValues_1975: any[] = [session];
                sCtx_1777.invokeRemoteMethodAfter("publishWebRtcSession", null, argsNames_1974, argsValues_1975);
                WebRtcSession.META.serialize(sCtx_1777, session, dataOut_1972);
                sCtx_1777.sendToRemote(dataOut_1972.toArray());
                
            }
            , selfDestruct: (): AFuture =>  {
                const dataOut_1977 = new DataInOut();
                dataOut_1977.writeByte(42);
                const argsNames_1979: string[] = [];
                const argsValues_1980: any[] = [];
                const result_1978 = AFuture.make();
                sCtx_1777.invokeRemoteMethodAfter("selfDestruct", result_1978, argsNames_1979, argsValues_1980);
                const reqId_1976 = sCtx_1777.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1978 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1978.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1977.writeInt(reqId_1976);
                sCtx_1777.sendToRemote(dataOut_1977.toArray());
                return result_1978;
                
            }
            , getServers: (): ARFuture<ServerDescriptorWithGeo[]> =>  {
                const dataOut_1982 = new DataInOut();
                dataOut_1982.writeByte(43);
                const argsNames_1984: string[] = [];
                const argsValues_1985: any[] = [];
                const result_1983 = ARFuture.of<ServerDescriptorWithGeo[]>();
                sCtx_1777.invokeRemoteMethodAfter("getServers", result_1983, argsNames_1984, argsValues_1985);
                const reqId_1981 = sCtx_1777.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_1983 as ARFuture<ServerDescriptorWithGeo[]>).tryDone(FastMeta.getMetaArray(ServerDescriptorWithGeo.META).deserialize(sCtx_1777, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_1983.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_1982.writeInt(reqId_1981);
                sCtx_1777.sendToRemote(dataOut_1982.toArray());
                return result_1983;
                
            }
            , switchVersion: (version: number): void =>  {
                const dataOut_1987 = new DataInOut();
                dataOut_1987.writeByte(44);
                const argsNames_1989: string[] = ["version"];
                const argsValues_1990: any[] = [version];
                sCtx_1777.invokeRemoteMethodAfter("switchVersion", null, argsNames_1989, argsValues_1990);
                dataOut_1987.writeInt(version);
                sCtx_1777.sendToRemote(dataOut_1987.toArray());
                
            }
            , openClient(uid: UUID, factory: (api: ServerApiByUidRemote) => any, converter: BytesConverter, ...keys: any[]): ServerApiByUidRemote  {
                return sCtx_1777.findContext(ctx =>  {
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
            case 44: // switchVersion
            return true;
            default: return false;
            
        }
        
    }
    
}
export class AuthorizedApiV2MetaImpl implements FastMetaApi<AuthorizedApiV2, AuthorizedApiV2Remote>  {
    makeLocal(ctx: MetaContext, dataIn: DataIn): void  {
        this.makeLocal_fromDataIn(ctx, dataIn, ctx.getLocalApi() as AuthorizedApiV2);
        
    }
    makeLocal_fromDataIn(ctx: MetaContext, dataIn: DataIn, localApi: AuthorizedApiV2): void  {
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
                    let id_1992: number;
                    id_1992 = dataIn.readByte();
                    const argsObject_1993 = new AuthorizedApiBackIdArguments(id_1992);
                    const argsNames_1994: string[] = ["id"];
                    const argsValues_1995: any[] = [id_1992];
                    ctx.invokeLocalMethodBefore("backId", argsNames_1994, argsValues_1995);
                    (typeof (localApi as any).backIdArguments === "function" ? (localApi as any).backIdArguments(argsObject_1993) : localApi.backId(id_1992));
                    ctx.invokeLocalMethodAfter("backId", null, argsNames_1994, argsValues_1995);
                    break;
                    
                }
                case 4:  {
                    const reqId_1996 = dataIn.readInt();
                    let nextConnectMsDuration_1997: bigint;
                    let rxWindowMs_1998: bigint;
                    nextConnectMsDuration_1997 = dataIn.readLong();
                    rxWindowMs_1998 = dataIn.readLong();
                    const argsObject_1999 = new AuthorizedApiPingArguments(nextConnectMsDuration_1997, rxWindowMs_1998);
                    const argsNames_2000: string[] = ["nextConnectMsDuration", "rxWindowMs"];
                    const argsValues_2001: any[] = [nextConnectMsDuration_1997, rxWindowMs_1998];
                    ctx.invokeLocalMethodBefore("ping", argsNames_2000, argsValues_2001);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).pingArguments === "function" ? (localApi as any).pingArguments(argsObject_1999) : localApi.ping(nextConnectMsDuration_1997, rxWindowMs_1998));
                    ctx.invokeLocalMethodAfter("ping", resultFuture, argsNames_2000, argsValues_2001);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_1996);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    let uid_2003: UUID;
                    let stream_2004: ClientApiStream;
                    uid_2003 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    stream_2004 = ClientApiStream.META.deserialize(ctx, dataIn);
                    const argsObject_2005 = new AuthorizedApiClientArguments(uid_2003, stream_2004);
                    const argsNames_2006: string[] = ["uid", "stream"];
                    const argsValues_2007: any[] = [uid_2003, stream_2004];
                    ctx.invokeLocalMethodBefore("client", argsNames_2006, argsValues_2007);
                    (typeof (localApi as any).clientArguments === "function" ? (localApi as any).clientArguments(argsObject_2005) : localApi.client(uid_2003, stream_2004));
                    ctx.invokeLocalMethodAfter("client", null, argsNames_2006, argsValues_2007);
                    break;
                    
                }
                case 6:  {
                    let msg_2009: Message;
                    msg_2009 = Message.META.deserialize(ctx, dataIn);
                    const argsObject_2010 = new AuthorizedApiSendMessageArguments(msg_2009);
                    const argsNames_2011: string[] = ["msg"];
                    const argsValues_2012: any[] = [msg_2009];
                    ctx.invokeLocalMethodBefore("sendMessage", argsNames_2011, argsValues_2012);
                    (typeof (localApi as any).sendMessageArguments === "function" ? (localApi as any).sendMessageArguments(argsObject_2010) : localApi.sendMessage(msg_2009));
                    ctx.invokeLocalMethodAfter("sendMessage", null, argsNames_2011, argsValues_2012);
                    break;
                    
                }
                case 7:  {
                    let msg_2014: Message[];
                    const len_2016 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    msg_2014 = new Array<Message>(len_2016);
                    for (let idx_2015 = 0;
                    idx_2015 < len_2016;
                    idx_2015++)  {
                        msg_2014[idx_2015] = Message.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_2017 = new AuthorizedApiSendMessagesArguments(msg_2014);
                    const argsNames_2018: string[] = ["msg"];
                    const argsValues_2019: any[] = [msg_2014];
                    ctx.invokeLocalMethodBefore("sendMessages", argsNames_2018, argsValues_2019);
                    (typeof (localApi as any).sendMessagesArguments === "function" ? (localApi as any).sendMessagesArguments(argsObject_2017) : localApi.sendMessages(msg_2014));
                    ctx.invokeLocalMethodAfter("sendMessages", null, argsNames_2018, argsValues_2019);
                    break;
                    
                }
                case 37:  {
                    let uids_2021: UUID[];
                    let data_2022: Uint8Array;
                    const len_2024 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_2021 = new Array<UUID>(len_2024);
                    for (let idx_2023 = 0;
                    idx_2023 < len_2024;
                    idx_2023++)  {
                        uids_2021[idx_2023] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const len_2026 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_2027 = dataIn.readBytes(len_2026);
                    data_2022 = bytes_2027;
                    const argsObject_2028 = new AuthorizedApiSendMulticastArguments(uids_2021, data_2022);
                    const argsNames_2029: string[] = ["uids", "data"];
                    const argsValues_2030: any[] = [uids_2021, data_2022];
                    ctx.invokeLocalMethodBefore("sendMulticast", argsNames_2029, argsValues_2030);
                    (typeof (localApi as any).sendMulticastArguments === "function" ? (localApi as any).sendMulticastArguments(argsObject_2028) : localApi.sendMulticast(uids_2021, data_2022));
                    ctx.invokeLocalMethodAfter("sendMulticast", null, argsNames_2029, argsValues_2030);
                    break;
                    
                }
                case 39:  {
                    const reqId_2031 = dataIn.readInt();
                    let msg_2032: Message;
                    msg_2032 = Message.META.deserialize(ctx, dataIn);
                    const argsObject_2033 = new AuthorizedApiSendMessageWithResultArguments(msg_2032);
                    const argsNames_2034: string[] = ["msg"];
                    const argsValues_2035: any[] = [msg_2032];
                    ctx.invokeLocalMethodBefore("sendMessageWithResult", argsNames_2034, argsValues_2035);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).sendMessageWithResultArguments === "function" ? (localApi as any).sendMessageWithResultArguments(argsObject_2033) : localApi.sendMessageWithResult(msg_2032));
                    ctx.invokeLocalMethodAfter("sendMessageWithResult", resultFuture, argsNames_2034, argsValues_2035);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2031);
                        
                    }
                    );
                    break;
                    
                }
                case 8:  {
                    const reqId_2036 = dataIn.readInt();
                    let owner_2037: UUID;
                    let uids_2038: UUID[];
                    owner_2037 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_2040 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_2038 = new Array<UUID>(len_2040);
                    for (let idx_2039 = 0;
                    idx_2039 < len_2040;
                    idx_2039++)  {
                        uids_2038[idx_2039] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_2041 = new AuthorizedApiCreateAccessGroupArguments(owner_2037, uids_2038);
                    const argsNames_2042: string[] = ["owner", "uids"];
                    const argsValues_2043: any[] = [owner_2037, uids_2038];
                    ctx.invokeLocalMethodBefore("createAccessGroup", argsNames_2042, argsValues_2043);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).createAccessGroupArguments === "function" ? (localApi as any).createAccessGroupArguments(argsObject_2041) : localApi.createAccessGroup(owner_2037, uids_2038));
                    ctx.invokeLocalMethodAfter("createAccessGroup", resultFuture, argsNames_2042, argsValues_2043);
                    resultFuture.to((v_2045: UUID) =>  {
                        const data_2044 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_2045, data_2044);
                        ctx.sendResultToRemote(reqId_2036, data_2044.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_2046 = dataIn.readInt();
                    let groupId_2047: UUID;
                    let uid_2048: UUID;
                    groupId_2047 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid_2048 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2049 = new AuthorizedApiAddToAccessGroupArguments(groupId_2047, uid_2048);
                    const argsNames_2050: string[] = ["groupId", "uid"];
                    const argsValues_2051: any[] = [groupId_2047, uid_2048];
                    ctx.invokeLocalMethodBefore("addToAccessGroup", argsNames_2050, argsValues_2051);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).addToAccessGroupArguments === "function" ? (localApi as any).addToAccessGroupArguments(argsObject_2049) : localApi.addToAccessGroup(groupId_2047, uid_2048));
                    ctx.invokeLocalMethodAfter("addToAccessGroup", resultFuture, argsNames_2050, argsValues_2051);
                    resultFuture.to((v_2053: boolean) =>  {
                        const data_2052 = new DataInOut();
                        data_2052.writeBoolean(v_2053);
                        ctx.sendResultToRemote(reqId_2046, data_2052.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_2054 = dataIn.readInt();
                    let groupId_2055: UUID;
                    let uid_2056: UUID;
                    groupId_2055 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid_2056 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2057 = new AuthorizedApiRemoveFromAccessGroupArguments(groupId_2055, uid_2056);
                    const argsNames_2058: string[] = ["groupId", "uid"];
                    const argsValues_2059: any[] = [groupId_2055, uid_2056];
                    ctx.invokeLocalMethodBefore("removeFromAccessGroup", argsNames_2058, argsValues_2059);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).removeFromAccessGroupArguments === "function" ? (localApi as any).removeFromAccessGroupArguments(argsObject_2057) : localApi.removeFromAccessGroup(groupId_2055, uid_2056));
                    ctx.invokeLocalMethodAfter("removeFromAccessGroup", resultFuture, argsNames_2058, argsValues_2059);
                    resultFuture.to((v_2061: boolean) =>  {
                        const data_2060 = new DataInOut();
                        data_2060.writeBoolean(v_2061);
                        ctx.sendResultToRemote(reqId_2054, data_2060.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_2062 = dataIn.readInt();
                    let uid_2063: UUID;
                    uid_2063 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2064 = new AuthorizedApiCheckAccessForSendMessageArguments(uid_2063);
                    const argsNames_2065: string[] = ["uid"];
                    const argsValues_2066: any[] = [uid_2063];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage", argsNames_2065, argsValues_2066);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).checkAccessForSendMessageArguments === "function" ? (localApi as any).checkAccessForSendMessageArguments(argsObject_2064) : localApi.checkAccessForSendMessage(uid_2063));
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage", resultFuture, argsNames_2065, argsValues_2066);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2062);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    let sid_2068: number[];
                    const len_2070 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    sid_2068 = new Array<number>(len_2070);
                    for (let idx_2069 = 0;
                    idx_2069 < len_2070;
                    idx_2069++)  {
                        sid_2068[idx_2069] = dataIn.readShort();
                        
                    }
                    const argsObject_2071 = new AuthorizedApiResolverServersArguments(sid_2068);
                    const argsNames_2072: string[] = ["sid"];
                    const argsValues_2073: any[] = [sid_2068];
                    ctx.invokeLocalMethodBefore("resolverServers", argsNames_2072, argsValues_2073);
                    (typeof (localApi as any).resolverServersArguments === "function" ? (localApi as any).resolverServersArguments(argsObject_2071) : localApi.resolverServers(sid_2068));
                    ctx.invokeLocalMethodAfter("resolverServers", null, argsNames_2072, argsValues_2073);
                    break;
                    
                }
                case 13:  {
                    let uids_2075: UUID[];
                    const len_2077 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_2075 = new Array<UUID>(len_2077);
                    for (let idx_2076 = 0;
                    idx_2076 < len_2077;
                    idx_2076++)  {
                        uids_2075[idx_2076] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_2078 = new AuthorizedApiResolveCloudsArguments(uids_2075);
                    const argsNames_2079: string[] = ["uids"];
                    const argsValues_2080: any[] = [uids_2075];
                    ctx.invokeLocalMethodBefore("resolveClouds", argsNames_2079, argsValues_2080);
                    (typeof (localApi as any).resolveCloudsArguments === "function" ? (localApi as any).resolveCloudsArguments(argsObject_2078) : localApi.resolveClouds(uids_2075));
                    ctx.invokeLocalMethodAfter("resolveClouds", null, argsNames_2079, argsValues_2080);
                    break;
                    
                }
                case 38:  {
                    let configs_2082: AppliedConfig[];
                    const len_2084 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    configs_2082 = new Array<AppliedConfig>(len_2084);
                    for (let idx_2083 = 0;
                    idx_2083 < len_2084;
                    idx_2083++)  {
                        configs_2082[idx_2083] = AppliedConfig.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_2085 = new AuthorizedApiReportAppliedConfigArguments(configs_2082);
                    const argsNames_2086: string[] = ["configs"];
                    const argsValues_2087: any[] = [configs_2082];
                    ctx.invokeLocalMethodBefore("reportAppliedConfig", argsNames_2086, argsValues_2087);
                    (typeof (localApi as any).reportAppliedConfigArguments === "function" ? (localApi as any).reportAppliedConfigArguments(argsObject_2085) : localApi.reportAppliedConfig(configs_2082));
                    ctx.invokeLocalMethodAfter("reportAppliedConfig", null, argsNames_2086, argsValues_2087);
                    break;
                    
                }
                case 14:  {
                    const reqId_2088 = dataIn.readInt();
                    let uid_2089: UUID;
                    uid_2089 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2090 = new AuthorizedApiGetAccessGroupsArguments(uid_2089);
                    const argsNames_2091: string[] = ["uid"];
                    const argsValues_2092: any[] = [uid_2089];
                    ctx.invokeLocalMethodBefore("getAccessGroups", argsNames_2091, argsValues_2092);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getAccessGroupsArguments === "function" ? (localApi as any).getAccessGroupsArguments(argsObject_2090) : localApi.getAccessGroups(uid_2089));
                    ctx.invokeLocalMethodAfter("getAccessGroups", resultFuture, argsNames_2091, argsValues_2092);
                    resultFuture.to((v_2094: UUID[]) =>  {
                        const data_2093 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_2093, v_2094.length);
                        for (const el_2095 of v_2094)  {
                            FastMeta.META_UUID.serialize(ctx, el_2095, data_2093);
                            
                        }
                        ctx.sendResultToRemote(reqId_2088, data_2093.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_2096 = dataIn.readInt();
                    let groupId_2097: UUID;
                    groupId_2097 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2098 = new AuthorizedApiGetAccessGroupArguments(groupId_2097);
                    const argsNames_2099: string[] = ["groupId"];
                    const argsValues_2100: any[] = [groupId_2097];
                    ctx.invokeLocalMethodBefore("getAccessGroup", argsNames_2099, argsValues_2100);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getAccessGroupArguments === "function" ? (localApi as any).getAccessGroupArguments(argsObject_2098) : localApi.getAccessGroup(groupId_2097));
                    ctx.invokeLocalMethodAfter("getAccessGroup", resultFuture, argsNames_2099, argsValues_2100);
                    resultFuture.to((v_2102: AccessGroup) =>  {
                        const data_2101 = new DataInOut();
                        AccessGroup.META.serialize(ctx, v_2102, data_2101);
                        ctx.sendResultToRemote(reqId_2096, data_2101.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 16:  {
                    const reqId_2103 = dataIn.readInt();
                    let uid_2104: UUID;
                    uid_2104 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2105 = new AuthorizedApiGetAllAccessedClientsArguments(uid_2104);
                    const argsNames_2106: string[] = ["uid"];
                    const argsValues_2107: any[] = [uid_2104];
                    ctx.invokeLocalMethodBefore("getAllAccessedClients", argsNames_2106, argsValues_2107);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getAllAccessedClientsArguments === "function" ? (localApi as any).getAllAccessedClientsArguments(argsObject_2105) : localApi.getAllAccessedClients(uid_2104));
                    ctx.invokeLocalMethodAfter("getAllAccessedClients", resultFuture, argsNames_2106, argsValues_2107);
                    resultFuture.to((v_2109: UUID[]) =>  {
                        const data_2108 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_2108, v_2109.length);
                        for (const el_2110 of v_2109)  {
                            FastMeta.META_UUID.serialize(ctx, el_2110, data_2108);
                            
                        }
                        ctx.sendResultToRemote(reqId_2103, data_2108.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 17:  {
                    const reqId_2111 = dataIn.readInt();
                    let uid1_2112: UUID;
                    let uid2_2113: UUID;
                    uid1_2112 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    uid2_2113 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2114 = new AuthorizedApiCheckAccessForSendMessage2Arguments(uid1_2112, uid2_2113);
                    const argsNames_2115: string[] = ["uid1", "uid2"];
                    const argsValues_2116: any[] = [uid1_2112, uid2_2113];
                    ctx.invokeLocalMethodBefore("checkAccessForSendMessage2", argsNames_2115, argsValues_2116);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).checkAccessForSendMessage2Arguments === "function" ? (localApi as any).checkAccessForSendMessage2Arguments(argsObject_2114) : localApi.checkAccessForSendMessage2(uid1_2112, uid2_2113));
                    ctx.invokeLocalMethodAfter("checkAccessForSendMessage2", resultFuture, argsNames_2115, argsValues_2116);
                    resultFuture.to((v_2118: boolean) =>  {
                        const data_2117 = new DataInOut();
                        data_2117.writeBoolean(v_2118);
                        ctx.sendResultToRemote(reqId_2111, data_2117.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 18:  {
                    let telemetry_2120: Telemetry;
                    telemetry_2120 = Telemetry.META.deserialize(ctx, dataIn);
                    const argsObject_2121 = new AuthorizedApiSendTelemetryArguments(telemetry_2120);
                    const argsNames_2122: string[] = ["telemetry"];
                    const argsValues_2123: any[] = [telemetry_2120];
                    ctx.invokeLocalMethodBefore("sendTelemetry", argsNames_2122, argsValues_2123);
                    (typeof (localApi as any).sendTelemetryArguments === "function" ? (localApi as any).sendTelemetryArguments(argsObject_2121) : localApi.sendTelemetry(telemetry_2120));
                    ctx.invokeLocalMethodAfter("sendTelemetry", null, argsNames_2122, argsValues_2123);
                    break;
                    
                }
                case 19:  {
                    let uids_2125: UUID[];
                    const len_2127 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_2125 = new Array<UUID>(len_2127);
                    for (let idx_2126 = 0;
                    idx_2126 < len_2127;
                    idx_2126++)  {
                        uids_2125[idx_2126] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_2128 = new AuthorizedApiRequestAccessGroupsForClientsArguments(uids_2125);
                    const argsNames_2129: string[] = ["uids"];
                    const argsValues_2130: any[] = [uids_2125];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsForClients", argsNames_2129, argsValues_2130);
                    (typeof (localApi as any).requestAccessGroupsForClientsArguments === "function" ? (localApi as any).requestAccessGroupsForClientsArguments(argsObject_2128) : localApi.requestAccessGroupsForClients(uids_2125));
                    ctx.invokeLocalMethodAfter("requestAccessGroupsForClients", null, argsNames_2129, argsValues_2130);
                    break;
                    
                }
                case 20:  {
                    let ids_2132: UUID[];
                    const len_2134 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    ids_2132 = new Array<UUID>(len_2134);
                    for (let idx_2133 = 0;
                    idx_2133 < len_2134;
                    idx_2133++)  {
                        ids_2132[idx_2133] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_2135 = new AuthorizedApiRequestAccessGroupsItemsArguments(ids_2132);
                    const argsNames_2136: string[] = ["ids"];
                    const argsValues_2137: any[] = [ids_2132];
                    ctx.invokeLocalMethodBefore("requestAccessGroupsItems", argsNames_2136, argsValues_2137);
                    (typeof (localApi as any).requestAccessGroupsItemsArguments === "function" ? (localApi as any).requestAccessGroupsItemsArguments(argsObject_2135) : localApi.requestAccessGroupsItems(ids_2132));
                    ctx.invokeLocalMethodAfter("requestAccessGroupsItems", null, argsNames_2136, argsValues_2137);
                    break;
                    
                }
                case 22:  {
                    let uid_2139: UUID;
                    let groups_2140: UUID[];
                    uid_2139 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_2142 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_2140 = new Array<UUID>(len_2142);
                    for (let idx_2141 = 0;
                    idx_2141 < len_2142;
                    idx_2141++)  {
                        groups_2140[idx_2141] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_2143 = new AuthorizedApiSendAccessGroupForClientArguments(uid_2139, groups_2140);
                    const argsNames_2144: string[] = ["uid", "groups"];
                    const argsValues_2145: any[] = [uid_2139, groups_2140];
                    ctx.invokeLocalMethodBefore("sendAccessGroupForClient", argsNames_2144, argsValues_2145);
                    (typeof (localApi as any).sendAccessGroupForClientArguments === "function" ? (localApi as any).sendAccessGroupForClientArguments(argsObject_2143) : localApi.sendAccessGroupForClient(uid_2139, groups_2140));
                    ctx.invokeLocalMethodAfter("sendAccessGroupForClient", null, argsNames_2144, argsValues_2145);
                    break;
                    
                }
                case 23:  {
                    let id_2147: UUID;
                    let groups_2148: UUID[];
                    id_2147 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_2150 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_2148 = new Array<UUID>(len_2150);
                    for (let idx_2149 = 0;
                    idx_2149 < len_2150;
                    idx_2149++)  {
                        groups_2148[idx_2149] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_2151 = new AuthorizedApiAddItemsToAccessGroupArguments(id_2147, groups_2148);
                    const argsNames_2152: string[] = ["id", "groups"];
                    const argsValues_2153: any[] = [id_2147, groups_2148];
                    ctx.invokeLocalMethodBefore("addItemsToAccessGroup", argsNames_2152, argsValues_2153);
                    (typeof (localApi as any).addItemsToAccessGroupArguments === "function" ? (localApi as any).addItemsToAccessGroupArguments(argsObject_2151) : localApi.addItemsToAccessGroup(id_2147, groups_2148));
                    ctx.invokeLocalMethodAfter("addItemsToAccessGroup", null, argsNames_2152, argsValues_2153);
                    break;
                    
                }
                case 24:  {
                    let id_2155: UUID;
                    let groups_2156: UUID[];
                    id_2155 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_2158 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_2156 = new Array<UUID>(len_2158);
                    for (let idx_2157 = 0;
                    idx_2157 < len_2158;
                    idx_2157++)  {
                        groups_2156[idx_2157] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_2159 = new AuthorizedApiRemoveItemsFromAccessGroupArguments(id_2155, groups_2156);
                    const argsNames_2160: string[] = ["id", "groups"];
                    const argsValues_2161: any[] = [id_2155, groups_2156];
                    ctx.invokeLocalMethodBefore("removeItemsFromAccessGroup", argsNames_2160, argsValues_2161);
                    (typeof (localApi as any).removeItemsFromAccessGroupArguments === "function" ? (localApi as any).removeItemsFromAccessGroupArguments(argsObject_2159) : localApi.removeItemsFromAccessGroup(id_2155, groups_2156));
                    ctx.invokeLocalMethodAfter("removeItemsFromAccessGroup", null, argsNames_2160, argsValues_2161);
                    break;
                    
                }
                case 25:  {
                    let uid_2163: UUID;
                    let groups_2164: UUID[];
                    uid_2163 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_2166 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_2164 = new Array<UUID>(len_2166);
                    for (let idx_2165 = 0;
                    idx_2165 < len_2166;
                    idx_2165++)  {
                        groups_2164[idx_2165] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_2167 = new AuthorizedApiAddAccessGroupsToClientArguments(uid_2163, groups_2164);
                    const argsNames_2168: string[] = ["uid", "groups"];
                    const argsValues_2169: any[] = [uid_2163, groups_2164];
                    ctx.invokeLocalMethodBefore("addAccessGroupsToClient", argsNames_2168, argsValues_2169);
                    (typeof (localApi as any).addAccessGroupsToClientArguments === "function" ? (localApi as any).addAccessGroupsToClientArguments(argsObject_2167) : localApi.addAccessGroupsToClient(uid_2163, groups_2164));
                    ctx.invokeLocalMethodAfter("addAccessGroupsToClient", null, argsNames_2168, argsValues_2169);
                    break;
                    
                }
                case 26:  {
                    let uid_2171: UUID;
                    let groups_2172: UUID[];
                    uid_2171 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const len_2174 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    groups_2172 = new Array<UUID>(len_2174);
                    for (let idx_2173 = 0;
                    idx_2173 < len_2174;
                    idx_2173++)  {
                        groups_2172[idx_2173] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_2175 = new AuthorizedApiRemoveAccessGroupsFromClientArguments(uid_2171, groups_2172);
                    const argsNames_2176: string[] = ["uid", "groups"];
                    const argsValues_2177: any[] = [uid_2171, groups_2172];
                    ctx.invokeLocalMethodBefore("removeAccessGroupsFromClient", argsNames_2176, argsValues_2177);
                    (typeof (localApi as any).removeAccessGroupsFromClientArguments === "function" ? (localApi as any).removeAccessGroupsFromClientArguments(argsObject_2175) : localApi.removeAccessGroupsFromClient(uid_2171, groups_2172));
                    ctx.invokeLocalMethodAfter("removeAccessGroupsFromClient", null, argsNames_2176, argsValues_2177);
                    break;
                    
                }
                case 27:  {
                    let uids_2179: UUID[];
                    const len_2181 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    uids_2179 = new Array<UUID>(len_2181);
                    for (let idx_2180 = 0;
                    idx_2180 < len_2181;
                    idx_2180++)  {
                        uids_2179[idx_2180] = FastMeta.META_UUID.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_2182 = new AuthorizedApiRequestAllAccessedClientsArguments(uids_2179);
                    const argsNames_2183: string[] = ["uids"];
                    const argsValues_2184: any[] = [uids_2179];
                    ctx.invokeLocalMethodBefore("requestAllAccessedClients", argsNames_2183, argsValues_2184);
                    (typeof (localApi as any).requestAllAccessedClientsArguments === "function" ? (localApi as any).requestAllAccessedClientsArguments(argsObject_2182) : localApi.requestAllAccessedClients(uids_2179));
                    ctx.invokeLocalMethodAfter("requestAllAccessedClients", null, argsNames_2183, argsValues_2184);
                    break;
                    
                }
                case 28:  {
                    let requests_2186: AccessCheckPair[];
                    const len_2188 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    requests_2186 = new Array<AccessCheckPair>(len_2188);
                    for (let idx_2187 = 0;
                    idx_2187 < len_2188;
                    idx_2187++)  {
                        requests_2186[idx_2187] = AccessCheckPair.META.deserialize(ctx, dataIn);
                        
                    }
                    const argsObject_2189 = new AuthorizedApiRequestAccessCheckArguments(requests_2186);
                    const argsNames_2190: string[] = ["requests"];
                    const argsValues_2191: any[] = [requests_2186];
                    ctx.invokeLocalMethodBefore("requestAccessCheck", argsNames_2190, argsValues_2191);
                    (typeof (localApi as any).requestAccessCheckArguments === "function" ? (localApi as any).requestAccessCheckArguments(argsObject_2189) : localApi.requestAccessCheck(requests_2186));
                    ctx.invokeLocalMethodAfter("requestAccessCheck", null, argsNames_2190, argsValues_2191);
                    break;
                    
                }
                case 29:  {
                    const reqId_2192 = dataIn.readInt();
                    let uid_2193: UUID;
                    let fromTime_2194: bigint;
                    let toTime_2195: bigint;
                    let limit_2196: number;
                    uid_2193 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    fromTime_2194 = dataIn.readLong();
                    toTime_2195 = dataIn.readLong();
                    limit_2196 = dataIn.readInt();
                    const argsObject_2197 = new AuthorizedApiGetClientActivityArguments(uid_2193, fromTime_2194, toTime_2195, limit_2196);
                    const argsNames_2198: string[] = ["uid", "fromTime", "toTime", "limit"];
                    const argsValues_2199: any[] = [uid_2193, fromTime_2194, toTime_2195, limit_2196];
                    ctx.invokeLocalMethodBefore("getClientActivity", argsNames_2198, argsValues_2199);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getClientActivityArguments === "function" ? (localApi as any).getClientActivityArguments(argsObject_2197) : localApi.getClientActivity(uid_2193, fromTime_2194, toTime_2195, limit_2196));
                    ctx.invokeLocalMethodAfter("getClientActivity", resultFuture, argsNames_2198, argsValues_2199);
                    resultFuture.to((v_2201: ClientActivity[]) =>  {
                        const data_2200 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_2200, v_2201.length);
                        for (const el_2202 of v_2201)  {
                            ClientActivity.META.serialize(ctx, el_2202, data_2200);
                            
                        }
                        ctx.sendResultToRemote(reqId_2192, data_2200.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 30:  {
                    const reqId_2203 = dataIn.readInt();
                    let uid_2204: UUID;
                    let query_2205: string;
                    let limit_2206: number;
                    uid_2204 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    let stringBytes_2207: Uint8Array;
                    const len_2209 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_2210 = dataIn.readBytes(len_2209);
                    stringBytes_2207 = bytes_2210;
                    query_2205 = new TextDecoder('utf-8').decode(stringBytes_2207);
                    limit_2206 = dataIn.readInt();
                    const argsObject_2211 = new AuthorizedApiSearchClientLogsArguments(uid_2204, query_2205, limit_2206);
                    const argsNames_2212: string[] = ["uid", "query", "limit"];
                    const argsValues_2213: any[] = [uid_2204, query_2205, limit_2206];
                    ctx.invokeLocalMethodBefore("searchClientLogs", argsNames_2212, argsValues_2213);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).searchClientLogsArguments === "function" ? (localApi as any).searchClientLogsArguments(argsObject_2211) : localApi.searchClientLogs(uid_2204, query_2205, limit_2206));
                    ctx.invokeLocalMethodAfter("searchClientLogs", resultFuture, argsNames_2212, argsValues_2213);
                    resultFuture.to((v_2215: ClientLogEntry[]) =>  {
                        const data_2214 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_2214, v_2215.length);
                        for (const el_2216 of v_2215)  {
                            ClientLogEntry.META.serialize(ctx, el_2216, data_2214);
                            
                        }
                        ctx.sendResultToRemote(reqId_2203, data_2214.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 31:  {
                    const reqId_2217 = dataIn.readInt();
                    let uid_2218: UUID;
                    let limit_2219: number;
                    uid_2218 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    limit_2219 = dataIn.readInt();
                    const argsObject_2220 = new AuthorizedApiGetClientConnectionsArguments(uid_2218, limit_2219);
                    const argsNames_2221: string[] = ["uid", "limit"];
                    const argsValues_2222: any[] = [uid_2218, limit_2219];
                    ctx.invokeLocalMethodBefore("getClientConnections", argsNames_2221, argsValues_2222);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getClientConnectionsArguments === "function" ? (localApi as any).getClientConnectionsArguments(argsObject_2220) : localApi.getClientConnections(uid_2218, limit_2219));
                    ctx.invokeLocalMethodAfter("getClientConnections", resultFuture, argsNames_2221, argsValues_2222);
                    resultFuture.to((v_2224: ClientConnectionInfo[]) =>  {
                        const data_2223 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_2223, v_2224.length);
                        for (const el_2225 of v_2224)  {
                            ClientConnectionInfo.META.serialize(ctx, el_2225, data_2223);
                            
                        }
                        ctx.sendResultToRemote(reqId_2217, data_2223.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 32:  {
                    const reqId_2226 = dataIn.readInt();
                    let uid_2227: UUID;
                    let fromTime_2228: bigint;
                    let toTime_2229: bigint;
                    let limit_2230: number;
                    uid_2227 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    fromTime_2228 = dataIn.readLong();
                    toTime_2229 = dataIn.readLong();
                    limit_2230 = dataIn.readInt();
                    const argsObject_2231 = new AuthorizedApiGetClientMessagesArguments(uid_2227, fromTime_2228, toTime_2229, limit_2230);
                    const argsNames_2232: string[] = ["uid", "fromTime", "toTime", "limit"];
                    const argsValues_2233: any[] = [uid_2227, fromTime_2228, toTime_2229, limit_2230];
                    ctx.invokeLocalMethodBefore("getClientMessages", argsNames_2232, argsValues_2233);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getClientMessagesArguments === "function" ? (localApi as any).getClientMessagesArguments(argsObject_2231) : localApi.getClientMessages(uid_2227, fromTime_2228, toTime_2229, limit_2230));
                    ctx.invokeLocalMethodAfter("getClientMessages", resultFuture, argsNames_2232, argsValues_2233);
                    resultFuture.to((v_2235: MessageInfo[]) =>  {
                        const data_2234 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_2234, v_2235.length);
                        for (const el_2236 of v_2235)  {
                            MessageInfo.META.serialize(ctx, el_2236, data_2234);
                            
                        }
                        ctx.sendResultToRemote(reqId_2226, data_2234.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 33:  {
                    let delayMillis_2238: bigint;
                    delayMillis_2238 = dataIn.readLong();
                    const argsObject_2239 = new AuthorizedApiSetNextReadDelayArguments(delayMillis_2238);
                    const argsNames_2240: string[] = ["delayMillis"];
                    const argsValues_2241: any[] = [delayMillis_2238];
                    ctx.invokeLocalMethodBefore("setNextReadDelay", argsNames_2240, argsValues_2241);
                    (typeof (localApi as any).setNextReadDelayArguments === "function" ? (localApi as any).setNextReadDelayArguments(argsObject_2239) : localApi.setNextReadDelay(delayMillis_2238));
                    ctx.invokeLocalMethodAfter("setNextReadDelay", null, argsNames_2240, argsValues_2241);
                    break;
                    
                }
                case 34:  {
                    const reqId_2242 = dataIn.readInt();
                    let uid_2243: UUID;
                    uid_2243 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2244 = new AuthorizedApiGetUapArguments(uid_2243);
                    const argsNames_2245: string[] = ["uid"];
                    const argsValues_2246: any[] = [uid_2243];
                    ctx.invokeLocalMethodBefore("getUap", argsNames_2245, argsValues_2246);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getUapArguments === "function" ? (localApi as any).getUapArguments(argsObject_2244) : localApi.getUap(uid_2243));
                    ctx.invokeLocalMethodAfter("getUap", resultFuture, argsNames_2245, argsValues_2246);
                    resultFuture.to((v_2248: Uap) =>  {
                        const data_2247 = new DataInOut();
                        Uap.META.serialize(ctx, v_2248, data_2247);
                        ctx.sendResultToRemote(reqId_2242, data_2247.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 40:  {
                    const reqId_2249 = dataIn.readInt();
                    let uid_2250: UUID;
                    uid_2250 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2251 = new AuthorizedApiRequestWebRtcSessionArguments(uid_2250);
                    const argsNames_2252: string[] = ["uid"];
                    const argsValues_2253: any[] = [uid_2250];
                    ctx.invokeLocalMethodBefore("requestWebRtcSession", argsNames_2252, argsValues_2253);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).requestWebRtcSessionArguments === "function" ? (localApi as any).requestWebRtcSessionArguments(argsObject_2251) : localApi.requestWebRtcSession(uid_2250));
                    ctx.invokeLocalMethodAfter("requestWebRtcSession", resultFuture, argsNames_2252, argsValues_2253);
                    resultFuture.to((v_2255: WebRtcSession) =>  {
                        const data_2254 = new DataInOut();
                        WebRtcSession.META.serialize(ctx, v_2255, data_2254);
                        ctx.sendResultToRemote(reqId_2249, data_2254.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 41:  {
                    let session_2257: WebRtcSession;
                    session_2257 = WebRtcSession.META.deserialize(ctx, dataIn);
                    const argsObject_2258 = new AuthorizedApiPublishWebRtcSessionArguments(session_2257);
                    const argsNames_2259: string[] = ["session"];
                    const argsValues_2260: any[] = [session_2257];
                    ctx.invokeLocalMethodBefore("publishWebRtcSession", argsNames_2259, argsValues_2260);
                    (typeof (localApi as any).publishWebRtcSessionArguments === "function" ? (localApi as any).publishWebRtcSessionArguments(argsObject_2258) : localApi.publishWebRtcSession(session_2257));
                    ctx.invokeLocalMethodAfter("publishWebRtcSession", null, argsNames_2259, argsValues_2260);
                    break;
                    
                }
                case 42:  {
                    const reqId_2261 = dataIn.readInt();
                    const argsObject_2262 = new AuthorizedApiSelfDestructArguments();
                    const argsNames_2263: string[] = [];
                    const argsValues_2264: any[] = [];
                    ctx.invokeLocalMethodBefore("selfDestruct", argsNames_2263, argsValues_2264);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).selfDestructArguments === "function" ? (localApi as any).selfDestructArguments(argsObject_2262) : localApi.selfDestruct());
                    ctx.invokeLocalMethodAfter("selfDestruct", resultFuture, argsNames_2263, argsValues_2264);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2261);
                        
                    }
                    );
                    break;
                    
                }
                case 43:  {
                    const reqId_2265 = dataIn.readInt();
                    const argsObject_2266 = new AuthorizedApiGetServersArguments();
                    const argsNames_2267: string[] = [];
                    const argsValues_2268: any[] = [];
                    ctx.invokeLocalMethodBefore("getServers", argsNames_2267, argsValues_2268);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getServersArguments === "function" ? (localApi as any).getServersArguments(argsObject_2266) : localApi.getServers());
                    ctx.invokeLocalMethodAfter("getServers", resultFuture, argsNames_2267, argsValues_2268);
                    resultFuture.to((v_2270: ServerDescriptorWithGeo[]) =>  {
                        const data_2269 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_2269, v_2270.length);
                        for (const el_2271 of v_2270)  {
                            ServerDescriptorWithGeo.META.serialize(ctx, el_2271, data_2269);
                            
                        }
                        ctx.sendResultToRemote(reqId_2265, data_2269.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 44:  {
                    let version_2273: number;
                    version_2273 = dataIn.readInt();
                    const argsObject_2274 = new AuthorizedApiSwitchVersionArguments(version_2273);
                    const argsNames_2275: string[] = ["version"];
                    const argsValues_2276: any[] = [version_2273];
                    ctx.invokeLocalMethodBefore("switchVersion", argsNames_2275, argsValues_2276);
                    (typeof (localApi as any).switchVersionArguments === "function" ? (localApi as any).switchVersionArguments(argsObject_2274) : localApi.switchVersion(version_2273));
                    ctx.invokeLocalMethodAfter("switchVersion", null, argsNames_2275, argsValues_2276);
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
    makeLocal_fromBytes_ctx(ctx: MetaContext, data: Uint8Array, localApi: AuthorizedApiV2): void  {
        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);
        
    }
    makeRemote(sCtx_2277: MetaContext): AuthorizedApiV2Remote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2277.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2277.flush();
                
            }
            , getFastMetaContext: () => sCtx_2277, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_2277.makeRemote(meta), backId: (id: number): void =>  {
                const dataOut_2279 = new DataInOut();
                dataOut_2279.writeByte(3);
                const argsNames_2281: string[] = ["id"];
                const argsValues_2282: any[] = [id];
                sCtx_2277.invokeRemoteMethodAfter("backId", null, argsNames_2281, argsValues_2282);
                dataOut_2279.writeByte(id);
                sCtx_2277.sendToRemote(dataOut_2279.toArray());
                
            }
            , ping: (nextConnectMsDuration: bigint, rxWindowMs: bigint): AFuture =>  {
                const dataOut_2284 = new DataInOut();
                dataOut_2284.writeByte(4);
                const argsNames_2286: string[] = ["nextConnectMsDuration", "rxWindowMs"];
                const argsValues_2287: any[] = [nextConnectMsDuration, rxWindowMs];
                const result_2285 = AFuture.make();
                sCtx_2277.invokeRemoteMethodAfter("ping", result_2285, argsNames_2286, argsValues_2287);
                const reqId_2283 = sCtx_2277.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2285 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2285.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2284.writeInt(reqId_2283);
                dataOut_2284.writeLong(nextConnectMsDuration);
                dataOut_2284.writeLong(rxWindowMs);
                sCtx_2277.sendToRemote(dataOut_2284.toArray());
                return result_2285;
                
            }
            , client: (uid: UUID, stream: ClientApiStream): void =>  {
                const dataOut_2289 = new DataInOut();
                dataOut_2289.writeByte(5);
                const argsNames_2291: string[] = ["uid", "stream"];
                const argsValues_2292: any[] = [uid, stream];
                sCtx_2277.invokeRemoteMethodAfter("client", null, argsNames_2291, argsValues_2292);
                FastMeta.META_UUID.serialize(sCtx_2277, uid, dataOut_2289);
                ClientApiStream.META.serialize(sCtx_2277, stream, dataOut_2289);
                sCtx_2277.sendToRemote(dataOut_2289.toArray());
                
            }
            , sendMessage: (msg: Message): void =>  {
                const dataOut_2294 = new DataInOut();
                dataOut_2294.writeByte(6);
                const argsNames_2296: string[] = ["msg"];
                const argsValues_2297: any[] = [msg];
                sCtx_2277.invokeRemoteMethodAfter("sendMessage", null, argsNames_2296, argsValues_2297);
                Message.META.serialize(sCtx_2277, msg, dataOut_2294);
                sCtx_2277.sendToRemote(dataOut_2294.toArray());
                
            }
            , sendMessages: (msg: Message[]): void =>  {
                const dataOut_2299 = new DataInOut();
                dataOut_2299.writeByte(7);
                const argsNames_2301: string[] = ["msg"];
                const argsValues_2302: any[] = [msg];
                sCtx_2277.invokeRemoteMethodAfter("sendMessages", null, argsNames_2301, argsValues_2302);
                SerializerPackNumber.INSTANCE.put(dataOut_2299, msg.length);
                for (const el_2303 of msg)  {
                    Message.META.serialize(sCtx_2277, el_2303, dataOut_2299);
                    
                }
                sCtx_2277.sendToRemote(dataOut_2299.toArray());
                
            }
            , sendMulticast: (uids: UUID[], data: Uint8Array): void =>  {
                const dataOut_2305 = new DataInOut();
                dataOut_2305.writeByte(37);
                const argsNames_2307: string[] = ["uids", "data"];
                const argsValues_2308: any[] = [uids, data];
                sCtx_2277.invokeRemoteMethodAfter("sendMulticast", null, argsNames_2307, argsValues_2308);
                SerializerPackNumber.INSTANCE.put(dataOut_2305, uids.length);
                for (const el_2309 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_2277, el_2309, dataOut_2305);
                    
                }
                SerializerPackNumber.INSTANCE.put(dataOut_2305, data.length);
                dataOut_2305.write(data);
                sCtx_2277.sendToRemote(dataOut_2305.toArray());
                
            }
            , sendMessageWithResult: (msg: Message): AFuture =>  {
                const dataOut_2312 = new DataInOut();
                dataOut_2312.writeByte(39);
                const argsNames_2314: string[] = ["msg"];
                const argsValues_2315: any[] = [msg];
                const result_2313 = AFuture.make();
                sCtx_2277.invokeRemoteMethodAfter("sendMessageWithResult", result_2313, argsNames_2314, argsValues_2315);
                const reqId_2311 = sCtx_2277.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2313 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2313.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2312.writeInt(reqId_2311);
                Message.META.serialize(sCtx_2277, msg, dataOut_2312);
                sCtx_2277.sendToRemote(dataOut_2312.toArray());
                return result_2313;
                
            }
            , createAccessGroup: (owner: UUID, uids: UUID[]): ARFuture<UUID> =>  {
                const dataOut_2317 = new DataInOut();
                dataOut_2317.writeByte(8);
                const argsNames_2319: string[] = ["owner", "uids"];
                const argsValues_2320: any[] = [owner, uids];
                const result_2318 = ARFuture.of<UUID>();
                sCtx_2277.invokeRemoteMethodAfter("createAccessGroup", result_2318, argsNames_2319, argsValues_2320);
                const reqId_2316 = sCtx_2277.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2318 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_2277, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2318.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2317.writeInt(reqId_2316);
                FastMeta.META_UUID.serialize(sCtx_2277, owner, dataOut_2317);
                SerializerPackNumber.INSTANCE.put(dataOut_2317, uids.length);
                for (const el_2321 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_2277, el_2321, dataOut_2317);
                    
                }
                sCtx_2277.sendToRemote(dataOut_2317.toArray());
                return result_2318;
                
            }
            , addToAccessGroup: (groupId: UUID, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_2323 = new DataInOut();
                dataOut_2323.writeByte(9);
                const argsNames_2325: string[] = ["groupId", "uid"];
                const argsValues_2326: any[] = [groupId, uid];
                const result_2324 = ARFuture.of<boolean>();
                sCtx_2277.invokeRemoteMethodAfter("addToAccessGroup", result_2324, argsNames_2325, argsValues_2326);
                const reqId_2322 = sCtx_2277.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2324 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_2277, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2324.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2323.writeInt(reqId_2322);
                FastMeta.META_UUID.serialize(sCtx_2277, groupId, dataOut_2323);
                FastMeta.META_UUID.serialize(sCtx_2277, uid, dataOut_2323);
                sCtx_2277.sendToRemote(dataOut_2323.toArray());
                return result_2324;
                
            }
            , removeFromAccessGroup: (groupId: UUID, uid: UUID): ARFuture<boolean> =>  {
                const dataOut_2328 = new DataInOut();
                dataOut_2328.writeByte(10);
                const argsNames_2330: string[] = ["groupId", "uid"];
                const argsValues_2331: any[] = [groupId, uid];
                const result_2329 = ARFuture.of<boolean>();
                sCtx_2277.invokeRemoteMethodAfter("removeFromAccessGroup", result_2329, argsNames_2330, argsValues_2331);
                const reqId_2327 = sCtx_2277.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2329 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_2277, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2329.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2328.writeInt(reqId_2327);
                FastMeta.META_UUID.serialize(sCtx_2277, groupId, dataOut_2328);
                FastMeta.META_UUID.serialize(sCtx_2277, uid, dataOut_2328);
                sCtx_2277.sendToRemote(dataOut_2328.toArray());
                return result_2329;
                
            }
            , checkAccessForSendMessage: (uid: UUID): AFuture =>  {
                const dataOut_2333 = new DataInOut();
                dataOut_2333.writeByte(11);
                const argsNames_2335: string[] = ["uid"];
                const argsValues_2336: any[] = [uid];
                const result_2334 = AFuture.make();
                sCtx_2277.invokeRemoteMethodAfter("checkAccessForSendMessage", result_2334, argsNames_2335, argsValues_2336);
                const reqId_2332 = sCtx_2277.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2334 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2334.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2333.writeInt(reqId_2332);
                FastMeta.META_UUID.serialize(sCtx_2277, uid, dataOut_2333);
                sCtx_2277.sendToRemote(dataOut_2333.toArray());
                return result_2334;
                
            }
            , resolverServers: (sid: number[]): void =>  {
                const dataOut_2338 = new DataInOut();
                dataOut_2338.writeByte(12);
                const argsNames_2340: string[] = ["sid"];
                const argsValues_2341: any[] = [sid];
                sCtx_2277.invokeRemoteMethodAfter("resolverServers", null, argsNames_2340, argsValues_2341);
                SerializerPackNumber.INSTANCE.put(dataOut_2338, sid.length);
                for (const el_2342 of sid)  {
                    dataOut_2338.writeShort(el_2342);
                    
                }
                sCtx_2277.sendToRemote(dataOut_2338.toArray());
                
            }
            , resolveClouds: (uids: UUID[]): void =>  {
                const dataOut_2344 = new DataInOut();
                dataOut_2344.writeByte(13);
                const argsNames_2346: string[] = ["uids"];
                const argsValues_2347: any[] = [uids];
                sCtx_2277.invokeRemoteMethodAfter("resolveClouds", null, argsNames_2346, argsValues_2347);
                SerializerPackNumber.INSTANCE.put(dataOut_2344, uids.length);
                for (const el_2348 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_2277, el_2348, dataOut_2344);
                    
                }
                sCtx_2277.sendToRemote(dataOut_2344.toArray());
                
            }
            , reportAppliedConfig: (configs: AppliedConfig[]): void =>  {
                const dataOut_2350 = new DataInOut();
                dataOut_2350.writeByte(38);
                const argsNames_2352: string[] = ["configs"];
                const argsValues_2353: any[] = [configs];
                sCtx_2277.invokeRemoteMethodAfter("reportAppliedConfig", null, argsNames_2352, argsValues_2353);
                SerializerPackNumber.INSTANCE.put(dataOut_2350, configs.length);
                for (const el_2354 of configs)  {
                    AppliedConfig.META.serialize(sCtx_2277, el_2354, dataOut_2350);
                    
                }
                sCtx_2277.sendToRemote(dataOut_2350.toArray());
                
            }
            , getAccessGroups: (uid: UUID): ARFuture<UUID[]> =>  {
                const dataOut_2356 = new DataInOut();
                dataOut_2356.writeByte(14);
                const argsNames_2358: string[] = ["uid"];
                const argsValues_2359: any[] = [uid];
                const result_2357 = ARFuture.of<UUID[]>();
                sCtx_2277.invokeRemoteMethodAfter("getAccessGroups", result_2357, argsNames_2358, argsValues_2359);
                const reqId_2355 = sCtx_2277.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2357 as ARFuture<UUID[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_UUID).deserialize(sCtx_2277, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2357.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2356.writeInt(reqId_2355);
                FastMeta.META_UUID.serialize(sCtx_2277, uid, dataOut_2356);
                sCtx_2277.sendToRemote(dataOut_2356.toArray());
                return result_2357;
                
            }
            , getAccessGroup: (groupId: UUID): ARFuture<AccessGroup> =>  {
                const dataOut_2361 = new DataInOut();
                dataOut_2361.writeByte(15);
                const argsNames_2363: string[] = ["groupId"];
                const argsValues_2364: any[] = [groupId];
                const result_2362 = ARFuture.of<AccessGroup>();
                sCtx_2277.invokeRemoteMethodAfter("getAccessGroup", result_2362, argsNames_2363, argsValues_2364);
                const reqId_2360 = sCtx_2277.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2362 as ARFuture<AccessGroup>).tryDone(AccessGroup.META.deserialize(sCtx_2277, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2362.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2361.writeInt(reqId_2360);
                FastMeta.META_UUID.serialize(sCtx_2277, groupId, dataOut_2361);
                sCtx_2277.sendToRemote(dataOut_2361.toArray());
                return result_2362;
                
            }
            , getAllAccessedClients: (uid: UUID): ARFuture<UUID[]> =>  {
                const dataOut_2366 = new DataInOut();
                dataOut_2366.writeByte(16);
                const argsNames_2368: string[] = ["uid"];
                const argsValues_2369: any[] = [uid];
                const result_2367 = ARFuture.of<UUID[]>();
                sCtx_2277.invokeRemoteMethodAfter("getAllAccessedClients", result_2367, argsNames_2368, argsValues_2369);
                const reqId_2365 = sCtx_2277.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2367 as ARFuture<UUID[]>).tryDone(FastMeta.getMetaArray(FastMeta.META_UUID).deserialize(sCtx_2277, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2367.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2366.writeInt(reqId_2365);
                FastMeta.META_UUID.serialize(sCtx_2277, uid, dataOut_2366);
                sCtx_2277.sendToRemote(dataOut_2366.toArray());
                return result_2367;
                
            }
            , checkAccessForSendMessage2: (uid1: UUID, uid2: UUID): ARFuture<boolean> =>  {
                const dataOut_2371 = new DataInOut();
                dataOut_2371.writeByte(17);
                const argsNames_2373: string[] = ["uid1", "uid2"];
                const argsValues_2374: any[] = [uid1, uid2];
                const result_2372 = ARFuture.of<boolean>();
                sCtx_2277.invokeRemoteMethodAfter("checkAccessForSendMessage2", result_2372, argsNames_2373, argsValues_2374);
                const reqId_2370 = sCtx_2277.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2372 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_2277, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2372.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2371.writeInt(reqId_2370);
                FastMeta.META_UUID.serialize(sCtx_2277, uid1, dataOut_2371);
                FastMeta.META_UUID.serialize(sCtx_2277, uid2, dataOut_2371);
                sCtx_2277.sendToRemote(dataOut_2371.toArray());
                return result_2372;
                
            }
            , sendTelemetry: (telemetry: Telemetry): void =>  {
                const dataOut_2376 = new DataInOut();
                dataOut_2376.writeByte(18);
                const argsNames_2378: string[] = ["telemetry"];
                const argsValues_2379: any[] = [telemetry];
                sCtx_2277.invokeRemoteMethodAfter("sendTelemetry", null, argsNames_2378, argsValues_2379);
                Telemetry.META.serialize(sCtx_2277, telemetry, dataOut_2376);
                sCtx_2277.sendToRemote(dataOut_2376.toArray());
                
            }
            , requestAccessGroupsForClients: (uids: UUID[]): void =>  {
                const dataOut_2381 = new DataInOut();
                dataOut_2381.writeByte(19);
                const argsNames_2383: string[] = ["uids"];
                const argsValues_2384: any[] = [uids];
                sCtx_2277.invokeRemoteMethodAfter("requestAccessGroupsForClients", null, argsNames_2383, argsValues_2384);
                SerializerPackNumber.INSTANCE.put(dataOut_2381, uids.length);
                for (const el_2385 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_2277, el_2385, dataOut_2381);
                    
                }
                sCtx_2277.sendToRemote(dataOut_2381.toArray());
                
            }
            , requestAccessGroupsItems: (ids: UUID[]): void =>  {
                const dataOut_2387 = new DataInOut();
                dataOut_2387.writeByte(20);
                const argsNames_2389: string[] = ["ids"];
                const argsValues_2390: any[] = [ids];
                sCtx_2277.invokeRemoteMethodAfter("requestAccessGroupsItems", null, argsNames_2389, argsValues_2390);
                SerializerPackNumber.INSTANCE.put(dataOut_2387, ids.length);
                for (const el_2391 of ids)  {
                    FastMeta.META_UUID.serialize(sCtx_2277, el_2391, dataOut_2387);
                    
                }
                sCtx_2277.sendToRemote(dataOut_2387.toArray());
                
            }
            , sendAccessGroupForClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_2393 = new DataInOut();
                dataOut_2393.writeByte(22);
                const argsNames_2395: string[] = ["uid", "groups"];
                const argsValues_2396: any[] = [uid, groups];
                sCtx_2277.invokeRemoteMethodAfter("sendAccessGroupForClient", null, argsNames_2395, argsValues_2396);
                FastMeta.META_UUID.serialize(sCtx_2277, uid, dataOut_2393);
                SerializerPackNumber.INSTANCE.put(dataOut_2393, groups.length);
                for (const el_2397 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_2277, el_2397, dataOut_2393);
                    
                }
                sCtx_2277.sendToRemote(dataOut_2393.toArray());
                
            }
            , addItemsToAccessGroup: (id: UUID, groups: UUID[]): void =>  {
                const dataOut_2399 = new DataInOut();
                dataOut_2399.writeByte(23);
                const argsNames_2401: string[] = ["id", "groups"];
                const argsValues_2402: any[] = [id, groups];
                sCtx_2277.invokeRemoteMethodAfter("addItemsToAccessGroup", null, argsNames_2401, argsValues_2402);
                FastMeta.META_UUID.serialize(sCtx_2277, id, dataOut_2399);
                SerializerPackNumber.INSTANCE.put(dataOut_2399, groups.length);
                for (const el_2403 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_2277, el_2403, dataOut_2399);
                    
                }
                sCtx_2277.sendToRemote(dataOut_2399.toArray());
                
            }
            , removeItemsFromAccessGroup: (id: UUID, groups: UUID[]): void =>  {
                const dataOut_2405 = new DataInOut();
                dataOut_2405.writeByte(24);
                const argsNames_2407: string[] = ["id", "groups"];
                const argsValues_2408: any[] = [id, groups];
                sCtx_2277.invokeRemoteMethodAfter("removeItemsFromAccessGroup", null, argsNames_2407, argsValues_2408);
                FastMeta.META_UUID.serialize(sCtx_2277, id, dataOut_2405);
                SerializerPackNumber.INSTANCE.put(dataOut_2405, groups.length);
                for (const el_2409 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_2277, el_2409, dataOut_2405);
                    
                }
                sCtx_2277.sendToRemote(dataOut_2405.toArray());
                
            }
            , addAccessGroupsToClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_2411 = new DataInOut();
                dataOut_2411.writeByte(25);
                const argsNames_2413: string[] = ["uid", "groups"];
                const argsValues_2414: any[] = [uid, groups];
                sCtx_2277.invokeRemoteMethodAfter("addAccessGroupsToClient", null, argsNames_2413, argsValues_2414);
                FastMeta.META_UUID.serialize(sCtx_2277, uid, dataOut_2411);
                SerializerPackNumber.INSTANCE.put(dataOut_2411, groups.length);
                for (const el_2415 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_2277, el_2415, dataOut_2411);
                    
                }
                sCtx_2277.sendToRemote(dataOut_2411.toArray());
                
            }
            , removeAccessGroupsFromClient: (uid: UUID, groups: UUID[]): void =>  {
                const dataOut_2417 = new DataInOut();
                dataOut_2417.writeByte(26);
                const argsNames_2419: string[] = ["uid", "groups"];
                const argsValues_2420: any[] = [uid, groups];
                sCtx_2277.invokeRemoteMethodAfter("removeAccessGroupsFromClient", null, argsNames_2419, argsValues_2420);
                FastMeta.META_UUID.serialize(sCtx_2277, uid, dataOut_2417);
                SerializerPackNumber.INSTANCE.put(dataOut_2417, groups.length);
                for (const el_2421 of groups)  {
                    FastMeta.META_UUID.serialize(sCtx_2277, el_2421, dataOut_2417);
                    
                }
                sCtx_2277.sendToRemote(dataOut_2417.toArray());
                
            }
            , requestAllAccessedClients: (uids: UUID[]): void =>  {
                const dataOut_2423 = new DataInOut();
                dataOut_2423.writeByte(27);
                const argsNames_2425: string[] = ["uids"];
                const argsValues_2426: any[] = [uids];
                sCtx_2277.invokeRemoteMethodAfter("requestAllAccessedClients", null, argsNames_2425, argsValues_2426);
                SerializerPackNumber.INSTANCE.put(dataOut_2423, uids.length);
                for (const el_2427 of uids)  {
                    FastMeta.META_UUID.serialize(sCtx_2277, el_2427, dataOut_2423);
                    
                }
                sCtx_2277.sendToRemote(dataOut_2423.toArray());
                
            }
            , requestAccessCheck: (requests: AccessCheckPair[]): void =>  {
                const dataOut_2429 = new DataInOut();
                dataOut_2429.writeByte(28);
                const argsNames_2431: string[] = ["requests"];
                const argsValues_2432: any[] = [requests];
                sCtx_2277.invokeRemoteMethodAfter("requestAccessCheck", null, argsNames_2431, argsValues_2432);
                SerializerPackNumber.INSTANCE.put(dataOut_2429, requests.length);
                for (const el_2433 of requests)  {
                    AccessCheckPair.META.serialize(sCtx_2277, el_2433, dataOut_2429);
                    
                }
                sCtx_2277.sendToRemote(dataOut_2429.toArray());
                
            }
            , getClientActivity: (uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<ClientActivity[]> =>  {
                const dataOut_2435 = new DataInOut();
                dataOut_2435.writeByte(29);
                const argsNames_2437: string[] = ["uid", "fromTime", "toTime", "limit"];
                const argsValues_2438: any[] = [uid, fromTime, toTime, limit];
                const result_2436 = ARFuture.of<ClientActivity[]>();
                sCtx_2277.invokeRemoteMethodAfter("getClientActivity", result_2436, argsNames_2437, argsValues_2438);
                const reqId_2434 = sCtx_2277.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2436 as ARFuture<ClientActivity[]>).tryDone(FastMeta.getMetaArray(ClientActivity.META).deserialize(sCtx_2277, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2436.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2435.writeInt(reqId_2434);
                FastMeta.META_UUID.serialize(sCtx_2277, uid, dataOut_2435);
                dataOut_2435.writeLong(fromTime);
                dataOut_2435.writeLong(toTime);
                dataOut_2435.writeInt(limit);
                sCtx_2277.sendToRemote(dataOut_2435.toArray());
                return result_2436;
                
            }
            , searchClientLogs: (uid: UUID, query: string, limit: number): ARFuture<ClientLogEntry[]> =>  {
                const dataOut_2440 = new DataInOut();
                dataOut_2440.writeByte(30);
                const argsNames_2442: string[] = ["uid", "query", "limit"];
                const argsValues_2443: any[] = [uid, query, limit];
                const result_2441 = ARFuture.of<ClientLogEntry[]>();
                sCtx_2277.invokeRemoteMethodAfter("searchClientLogs", result_2441, argsNames_2442, argsValues_2443);
                const reqId_2439 = sCtx_2277.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2441 as ARFuture<ClientLogEntry[]>).tryDone(FastMeta.getMetaArray(ClientLogEntry.META).deserialize(sCtx_2277, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2441.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2440.writeInt(reqId_2439);
                FastMeta.META_UUID.serialize(sCtx_2277, uid, dataOut_2440);
                const stringBytes_2444 = new TextEncoder().encode(query);
                SerializerPackNumber.INSTANCE.put(dataOut_2440, stringBytes_2444.length);
                dataOut_2440.write(stringBytes_2444);
                dataOut_2440.writeInt(limit);
                sCtx_2277.sendToRemote(dataOut_2440.toArray());
                return result_2441;
                
            }
            , getClientConnections: (uid: UUID, limit: number): ARFuture<ClientConnectionInfo[]> =>  {
                const dataOut_2447 = new DataInOut();
                dataOut_2447.writeByte(31);
                const argsNames_2449: string[] = ["uid", "limit"];
                const argsValues_2450: any[] = [uid, limit];
                const result_2448 = ARFuture.of<ClientConnectionInfo[]>();
                sCtx_2277.invokeRemoteMethodAfter("getClientConnections", result_2448, argsNames_2449, argsValues_2450);
                const reqId_2446 = sCtx_2277.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2448 as ARFuture<ClientConnectionInfo[]>).tryDone(FastMeta.getMetaArray(ClientConnectionInfo.META).deserialize(sCtx_2277, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2448.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2447.writeInt(reqId_2446);
                FastMeta.META_UUID.serialize(sCtx_2277, uid, dataOut_2447);
                dataOut_2447.writeInt(limit);
                sCtx_2277.sendToRemote(dataOut_2447.toArray());
                return result_2448;
                
            }
            , getClientMessages: (uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<MessageInfo[]> =>  {
                const dataOut_2452 = new DataInOut();
                dataOut_2452.writeByte(32);
                const argsNames_2454: string[] = ["uid", "fromTime", "toTime", "limit"];
                const argsValues_2455: any[] = [uid, fromTime, toTime, limit];
                const result_2453 = ARFuture.of<MessageInfo[]>();
                sCtx_2277.invokeRemoteMethodAfter("getClientMessages", result_2453, argsNames_2454, argsValues_2455);
                const reqId_2451 = sCtx_2277.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2453 as ARFuture<MessageInfo[]>).tryDone(FastMeta.getMetaArray(MessageInfo.META).deserialize(sCtx_2277, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2453.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2452.writeInt(reqId_2451);
                FastMeta.META_UUID.serialize(sCtx_2277, uid, dataOut_2452);
                dataOut_2452.writeLong(fromTime);
                dataOut_2452.writeLong(toTime);
                dataOut_2452.writeInt(limit);
                sCtx_2277.sendToRemote(dataOut_2452.toArray());
                return result_2453;
                
            }
            , setNextReadDelay: (delayMillis: bigint): void =>  {
                const dataOut_2457 = new DataInOut();
                dataOut_2457.writeByte(33);
                const argsNames_2459: string[] = ["delayMillis"];
                const argsValues_2460: any[] = [delayMillis];
                sCtx_2277.invokeRemoteMethodAfter("setNextReadDelay", null, argsNames_2459, argsValues_2460);
                dataOut_2457.writeLong(delayMillis);
                sCtx_2277.sendToRemote(dataOut_2457.toArray());
                
            }
            , getUap: (uid: UUID): ARFuture<Uap> =>  {
                const dataOut_2462 = new DataInOut();
                dataOut_2462.writeByte(34);
                const argsNames_2464: string[] = ["uid"];
                const argsValues_2465: any[] = [uid];
                const result_2463 = ARFuture.of<Uap>();
                sCtx_2277.invokeRemoteMethodAfter("getUap", result_2463, argsNames_2464, argsValues_2465);
                const reqId_2461 = sCtx_2277.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2463 as ARFuture<Uap>).tryDone(Uap.META.deserialize(sCtx_2277, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2463.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2462.writeInt(reqId_2461);
                FastMeta.META_UUID.serialize(sCtx_2277, uid, dataOut_2462);
                sCtx_2277.sendToRemote(dataOut_2462.toArray());
                return result_2463;
                
            }
            , requestWebRtcSession: (uid: UUID): ARFuture<WebRtcSession> =>  {
                const dataOut_2467 = new DataInOut();
                dataOut_2467.writeByte(40);
                const argsNames_2469: string[] = ["uid"];
                const argsValues_2470: any[] = [uid];
                const result_2468 = ARFuture.of<WebRtcSession>();
                sCtx_2277.invokeRemoteMethodAfter("requestWebRtcSession", result_2468, argsNames_2469, argsValues_2470);
                const reqId_2466 = sCtx_2277.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2468 as ARFuture<WebRtcSession>).tryDone(WebRtcSession.META.deserialize(sCtx_2277, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2468.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2467.writeInt(reqId_2466);
                FastMeta.META_UUID.serialize(sCtx_2277, uid, dataOut_2467);
                sCtx_2277.sendToRemote(dataOut_2467.toArray());
                return result_2468;
                
            }
            , publishWebRtcSession: (session: WebRtcSession): void =>  {
                const dataOut_2472 = new DataInOut();
                dataOut_2472.writeByte(41);
                const argsNames_2474: string[] = ["session"];
                const argsValues_2475: any[] = [session];
                sCtx_2277.invokeRemoteMethodAfter("publishWebRtcSession", null, argsNames_2474, argsValues_2475);
                WebRtcSession.META.serialize(sCtx_2277, session, dataOut_2472);
                sCtx_2277.sendToRemote(dataOut_2472.toArray());
                
            }
            , selfDestruct: (): AFuture =>  {
                const dataOut_2477 = new DataInOut();
                dataOut_2477.writeByte(42);
                const argsNames_2479: string[] = [];
                const argsValues_2480: any[] = [];
                const result_2478 = AFuture.make();
                sCtx_2277.invokeRemoteMethodAfter("selfDestruct", result_2478, argsNames_2479, argsValues_2480);
                const reqId_2476 = sCtx_2277.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2478 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2478.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2477.writeInt(reqId_2476);
                sCtx_2277.sendToRemote(dataOut_2477.toArray());
                return result_2478;
                
            }
            , getServers: (): ARFuture<ServerDescriptorWithGeo[]> =>  {
                const dataOut_2482 = new DataInOut();
                dataOut_2482.writeByte(43);
                const argsNames_2484: string[] = [];
                const argsValues_2485: any[] = [];
                const result_2483 = ARFuture.of<ServerDescriptorWithGeo[]>();
                sCtx_2277.invokeRemoteMethodAfter("getServers", result_2483, argsNames_2484, argsValues_2485);
                const reqId_2481 = sCtx_2277.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2483 as ARFuture<ServerDescriptorWithGeo[]>).tryDone(FastMeta.getMetaArray(ServerDescriptorWithGeo.META).deserialize(sCtx_2277, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2483.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2482.writeInt(reqId_2481);
                sCtx_2277.sendToRemote(dataOut_2482.toArray());
                return result_2483;
                
            }
            , switchVersion: (version: number): void =>  {
                const dataOut_2487 = new DataInOut();
                dataOut_2487.writeByte(44);
                const argsNames_2489: string[] = ["version"];
                const argsValues_2490: any[] = [version];
                sCtx_2277.invokeRemoteMethodAfter("switchVersion", null, argsNames_2489, argsValues_2490);
                dataOut_2487.writeInt(version);
                sCtx_2277.sendToRemote(dataOut_2487.toArray());
                
            }
            , 
        };
        return remoteApiImpl as AuthorizedApiV2Remote;
        
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
            case 44: // switchVersion
            return true;
            default: return false;
            
        }
        
    }
    
}
export class LoginApiGetTimeUTCArgumentsMetaBodyImpl implements FastMetaType<LoginApiGetTimeUTCArguments>  {
    serialize(sCtx_2491: MetaContext, obj_2493: LoginApiGetTimeUTCArguments, _out_2494: DataOut): void  {
        
    }
    deserialize(sCtx_2492: MetaContext, in__2495: DataIn): LoginApiGetTimeUTCArguments  {
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
    serialize(sCtx_2496: MetaContext, obj_2497: LoginApiLoginByUIDArguments, _out_2498: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2496, obj_2497.uid, _out_2498);
        LoginStream.META.serialize(sCtx_2496, obj_2497.data, _out_2498);
        
    }
    deserialize(sCtx_2496: MetaContext, in__2499: DataIn): LoginApiLoginByUIDArguments  {
        try  {
            let uid_2500: UUID;
            let data_2501: LoginStream;
            uid_2500 = FastMeta.META_UUID.deserialize(sCtx_2496, in__2499);
            data_2501 = LoginStream.META.deserialize(sCtx_2496, in__2499);
            return new LoginApiLoginByUIDArguments(uid_2500, data_2501);
            
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
    serialize(sCtx_2502: MetaContext, obj_2503: LoginApiLoginByAliasArguments, _out_2504: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2502, obj_2503.alias, _out_2504);
        LoginStream.META.serialize(sCtx_2502, obj_2503.data, _out_2504);
        
    }
    deserialize(sCtx_2502: MetaContext, in__2505: DataIn): LoginApiLoginByAliasArguments  {
        try  {
            let alias_2506: UUID;
            let data_2507: LoginStream;
            alias_2506 = FastMeta.META_UUID.deserialize(sCtx_2502, in__2505);
            data_2507 = LoginStream.META.deserialize(sCtx_2502, in__2505);
            return new LoginApiLoginByAliasArguments(alias_2506, data_2507);
            
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
    serialize(sCtx_2508: MetaContext, obj_2510: LoginApiGetMyIpArguments, _out_2511: DataOut): void  {
        
    }
    deserialize(sCtx_2509: MetaContext, in__2512: DataIn): LoginApiGetMyIpArguments  {
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
                    const reqId_2513 = dataIn.readInt();
                    const argsObject_2514 = new LoginApiGetTimeUTCArguments();
                    const argsNames_2515: string[] = [];
                    const argsValues_2516: any[] = [];
                    ctx.invokeLocalMethodBefore("getTimeUTC", argsNames_2515, argsValues_2516);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getTimeUTCArguments === "function" ? (localApi as any).getTimeUTCArguments(argsObject_2514) : localApi.getTimeUTC());
                    ctx.invokeLocalMethodAfter("getTimeUTC", resultFuture, argsNames_2515, argsValues_2516);
                    resultFuture.to((v_2518: bigint) =>  {
                        const data_2517 = new DataInOut();
                        data_2517.writeLong(v_2518);
                        ctx.sendResultToRemote(reqId_2513, data_2517.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let uid_2520: UUID;
                    let data_2521: LoginStream;
                    uid_2520 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_2521 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsObject_2522 = new LoginApiLoginByUIDArguments(uid_2520, data_2521);
                    const argsNames_2523: string[] = ["uid", "data"];
                    const argsValues_2524: any[] = [uid_2520, data_2521];
                    ctx.invokeLocalMethodBefore("loginByUID", argsNames_2523, argsValues_2524);
                    (typeof (localApi as any).loginByUIDArguments === "function" ? (localApi as any).loginByUIDArguments(argsObject_2522) : localApi.loginByUID(uid_2520, data_2521));
                    ctx.invokeLocalMethodAfter("loginByUID", null, argsNames_2523, argsValues_2524);
                    break;
                    
                }
                case 5:  {
                    let alias_2526: UUID;
                    let data_2527: LoginStream;
                    alias_2526 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    data_2527 = LoginStream.META.deserialize(ctx, dataIn);
                    const argsObject_2528 = new LoginApiLoginByAliasArguments(alias_2526, data_2527);
                    const argsNames_2529: string[] = ["alias", "data"];
                    const argsValues_2530: any[] = [alias_2526, data_2527];
                    ctx.invokeLocalMethodBefore("loginByAlias", argsNames_2529, argsValues_2530);
                    (typeof (localApi as any).loginByAliasArguments === "function" ? (localApi as any).loginByAliasArguments(argsObject_2528) : localApi.loginByAlias(alias_2526, data_2527));
                    ctx.invokeLocalMethodAfter("loginByAlias", null, argsNames_2529, argsValues_2530);
                    break;
                    
                }
                case 6:  {
                    const reqId_2531 = dataIn.readInt();
                    const argsObject_2532 = new LoginApiGetMyIpArguments();
                    const argsNames_2533: string[] = [];
                    const argsValues_2534: any[] = [];
                    ctx.invokeLocalMethodBefore("getMyIp", argsNames_2533, argsValues_2534);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getMyIpArguments === "function" ? (localApi as any).getMyIpArguments(argsObject_2532) : localApi.getMyIp());
                    ctx.invokeLocalMethodAfter("getMyIp", resultFuture, argsNames_2533, argsValues_2534);
                    resultFuture.to((v_2536: IpInfo) =>  {
                        const data_2535 = new DataInOut();
                        IpInfo.META.serialize(ctx, v_2536, data_2535);
                        ctx.sendResultToRemote(reqId_2531, data_2535.toArray());
                        
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
    makeRemote(sCtx_2537: MetaContext): LoginApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2537.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2537.flush();
                
            }
            , getFastMetaContext: () => sCtx_2537, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_2537.makeRemote(meta), getTimeUTC: (): ARFuture<bigint> =>  {
                const dataOut_2539 = new DataInOut();
                dataOut_2539.writeByte(3);
                const argsNames_2541: string[] = [];
                const argsValues_2542: any[] = [];
                const result_2540 = ARFuture.of<bigint>();
                sCtx_2537.invokeRemoteMethodAfter("getTimeUTC", result_2540, argsNames_2541, argsValues_2542);
                const reqId_2538 = sCtx_2537.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2540 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_2537, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2540.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2539.writeInt(reqId_2538);
                sCtx_2537.sendToRemote(dataOut_2539.toArray());
                return result_2540;
                
            }
            , loginByUID: (uid: UUID, data: LoginStream): void =>  {
                const dataOut_2544 = new DataInOut();
                dataOut_2544.writeByte(4);
                const argsNames_2546: string[] = ["uid", "data"];
                const argsValues_2547: any[] = [uid, data];
                sCtx_2537.invokeRemoteMethodAfter("loginByUID", null, argsNames_2546, argsValues_2547);
                FastMeta.META_UUID.serialize(sCtx_2537, uid, dataOut_2544);
                LoginStream.META.serialize(sCtx_2537, data, dataOut_2544);
                sCtx_2537.sendToRemote(dataOut_2544.toArray());
                
            }
            , loginByAlias: (alias: UUID, data: LoginStream): void =>  {
                const dataOut_2549 = new DataInOut();
                dataOut_2549.writeByte(5);
                const argsNames_2551: string[] = ["alias", "data"];
                const argsValues_2552: any[] = [alias, data];
                sCtx_2537.invokeRemoteMethodAfter("loginByAlias", null, argsNames_2551, argsValues_2552);
                FastMeta.META_UUID.serialize(sCtx_2537, alias, dataOut_2549);
                LoginStream.META.serialize(sCtx_2537, data, dataOut_2549);
                sCtx_2537.sendToRemote(dataOut_2549.toArray());
                
            }
            , getMyIp: (): ARFuture<IpInfo> =>  {
                const dataOut_2554 = new DataInOut();
                dataOut_2554.writeByte(6);
                const argsNames_2556: string[] = [];
                const argsValues_2557: any[] = [];
                const result_2555 = ARFuture.of<IpInfo>();
                sCtx_2537.invokeRemoteMethodAfter("getMyIp", result_2555, argsNames_2556, argsValues_2557);
                const reqId_2553 = sCtx_2537.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2555 as ARFuture<IpInfo>).tryDone(IpInfo.META.deserialize(sCtx_2537, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2555.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2554.writeInt(reqId_2553);
                sCtx_2537.sendToRemote(dataOut_2554.toArray());
                return result_2555;
                
            }
            , openLoginByUID(uid: UUID, factory: (api: AuthorizedApiRemote) => ClientApiSafe, converter: BytesConverter, ...keys: any[]): AuthorizedApiRemote  {
                return sCtx_2537.findContext(ctx =>  {
                    ctx.onFlushData(data => this.loginByUID(uid, LoginStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((AuthorizedApi as any).META));
                    
                }
                , ...keys).makeRemote((AuthorizedApi as any).META) as AuthorizedApiRemote;
                
            }
            , openLoginByAlias(alias: UUID, factory: (api: AuthorizedApiRemote) => ClientApiSafe, converter: BytesConverter, ...keys: any[]): AuthorizedApiRemote  {
                return sCtx_2537.findContext(ctx =>  {
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
    makeRemote(sCtx_2558: MetaContext): ServerApiByUidClientRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2558.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2558.flush();
                
            }
            , getFastMetaContext: () => sCtx_2558, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_2558.makeRemote(meta), 
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
    serialize(sCtx_2559: MetaContext, obj_2561: ServerApiByUidGetBalanceArguments, _out_2562: DataOut): void  {
        
    }
    deserialize(sCtx_2560: MetaContext, in__2563: DataIn): ServerApiByUidGetBalanceArguments  {
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
    serialize(sCtx_2564: MetaContext, obj_2565: ServerApiByUidSetParentArguments, _out_2566: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2564, obj_2565.uid, _out_2566);
        
    }
    deserialize(sCtx_2564: MetaContext, in__2567: DataIn): ServerApiByUidSetParentArguments  {
        try  {
            let uid_2568: UUID;
            uid_2568 = FastMeta.META_UUID.deserialize(sCtx_2564, in__2567);
            return new ServerApiByUidSetParentArguments(uid_2568);
            
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
    serialize(sCtx_2569: MetaContext, obj_2571: ServerApiByUidBlockArguments, _out_2572: DataOut): void  {
        
    }
    deserialize(sCtx_2570: MetaContext, in__2573: DataIn): ServerApiByUidBlockArguments  {
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
    serialize(sCtx_2574: MetaContext, obj_2576: ServerApiByUidGetPositionArguments, _out_2577: DataOut): void  {
        
    }
    deserialize(sCtx_2575: MetaContext, in__2578: DataIn): ServerApiByUidGetPositionArguments  {
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
    serialize(sCtx_2579: MetaContext, obj_2581: ServerApiByUidGetParentArguments, _out_2582: DataOut): void  {
        
    }
    deserialize(sCtx_2580: MetaContext, in__2583: DataIn): ServerApiByUidGetParentArguments  {
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
    serialize(sCtx_2584: MetaContext, obj_2586: ServerApiByUidGetBeneficiaryArguments, _out_2587: DataOut): void  {
        
    }
    deserialize(sCtx_2585: MetaContext, in__2588: DataIn): ServerApiByUidGetBeneficiaryArguments  {
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
    serialize(sCtx_2589: MetaContext, obj_2590: ServerApiByUidSetBeneficiaryArguments, _out_2591: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2589, obj_2590.uid, _out_2591);
        
    }
    deserialize(sCtx_2589: MetaContext, in__2592: DataIn): ServerApiByUidSetBeneficiaryArguments  {
        try  {
            let uid_2593: UUID;
            uid_2593 = FastMeta.META_UUID.deserialize(sCtx_2589, in__2592);
            return new ServerApiByUidSetBeneficiaryArguments(uid_2593);
            
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
    serialize(sCtx_2594: MetaContext, obj_2596: ServerApiByUidGetBlockTimeArguments, _out_2597: DataOut): void  {
        
    }
    deserialize(sCtx_2595: MetaContext, in__2598: DataIn): ServerApiByUidGetBlockTimeArguments  {
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
    serialize(sCtx_2599: MetaContext, obj_2601: ServerApiByUidUnblockArguments, _out_2602: DataOut): void  {
        
    }
    deserialize(sCtx_2600: MetaContext, in__2603: DataIn): ServerApiByUidUnblockArguments  {
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
    serialize(sCtx_2604: MetaContext, obj_2606: ServerApiByUidCreateTimeArguments, _out_2607: DataOut): void  {
        
    }
    deserialize(sCtx_2605: MetaContext, in__2608: DataIn): ServerApiByUidCreateTimeArguments  {
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
    serialize(sCtx_2609: MetaContext, obj_2611: ServerApiByUidOnlineTimeArguments, _out_2612: DataOut): void  {
        
    }
    deserialize(sCtx_2610: MetaContext, in__2613: DataIn): ServerApiByUidOnlineTimeArguments  {
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
    serialize(sCtx_2614: MetaContext, obj_2615: ServerApiByUidAddAccessGroupArguments, _out_2616: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2614, obj_2615.groupId, _out_2616);
        
    }
    deserialize(sCtx_2614: MetaContext, in__2617: DataIn): ServerApiByUidAddAccessGroupArguments  {
        try  {
            let groupId_2618: UUID;
            groupId_2618 = FastMeta.META_UUID.deserialize(sCtx_2614, in__2617);
            return new ServerApiByUidAddAccessGroupArguments(groupId_2618);
            
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
    serialize(sCtx_2619: MetaContext, obj_2620: ServerApiByUidRemoveAccessGroupArguments, _out_2621: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2619, obj_2620.groupId, _out_2621);
        
    }
    deserialize(sCtx_2619: MetaContext, in__2622: DataIn): ServerApiByUidRemoveAccessGroupArguments  {
        try  {
            let groupId_2623: UUID;
            groupId_2623 = FastMeta.META_UUID.deserialize(sCtx_2619, in__2622);
            return new ServerApiByUidRemoveAccessGroupArguments(groupId_2623);
            
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
    serialize(sCtx_2624: MetaContext, obj_2625: ServerApiByUidSetMsgQueueLimitArguments, _out_2626: DataOut): void  {
        _out_2626.writeInt(obj_2625.limit);
        
    }
    deserialize(sCtx_2624: MetaContext, in__2627: DataIn): ServerApiByUidSetMsgQueueLimitArguments  {
        try  {
            let limit_2628: number;
            limit_2628 = in__2627.readInt();
            return new ServerApiByUidSetMsgQueueLimitArguments(limit_2628);
            
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
    serialize(sCtx_2629: MetaContext, obj_2630: ServerApiByUidSetMsgTimeLimitArguments, _out_2631: DataOut): void  {
        _out_2631.writeInt(obj_2630.seconds);
        
    }
    deserialize(sCtx_2629: MetaContext, in__2632: DataIn): ServerApiByUidSetMsgTimeLimitArguments  {
        try  {
            let seconds_2633: number;
            seconds_2633 = in__2632.readInt();
            return new ServerApiByUidSetMsgTimeLimitArguments(seconds_2633);
            
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
    serialize(sCtx_2634: MetaContext, obj_2635: ServerApiByUidAddServersToCloudArguments, _out_2636: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_2636, obj_2635.sids.length);
        for (const el_2638 of obj_2635.sids)  {
            _out_2636.writeShort(el_2638);
            
        }
        
    }
    deserialize(sCtx_2634: MetaContext, in__2637: DataIn): ServerApiByUidAddServersToCloudArguments  {
        try  {
            let sids_2639: number[];
            const len_2641 = Number(DeserializerPackNumber.INSTANCE.put(in__2637));
            sids_2639 = new Array<number>(len_2641);
            for (let idx_2640 = 0;
            idx_2640 < len_2641;
            idx_2640++)  {
                sids_2639[idx_2640] = in__2637.readShort();
                
            }
            return new ServerApiByUidAddServersToCloudArguments(sids_2639);
            
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
    serialize(sCtx_2642: MetaContext, obj_2643: ServerApiByUidRemoveServersFromCloudArguments, _out_2644: DataOut): void  {
        SerializerPackNumber.INSTANCE.put(_out_2644, obj_2643.sids.length);
        for (const el_2646 of obj_2643.sids)  {
            _out_2644.writeShort(el_2646);
            
        }
        
    }
    deserialize(sCtx_2642: MetaContext, in__2645: DataIn): ServerApiByUidRemoveServersFromCloudArguments  {
        try  {
            let sids_2647: number[];
            const len_2649 = Number(DeserializerPackNumber.INSTANCE.put(in__2645));
            sids_2647 = new Array<number>(len_2649);
            for (let idx_2648 = 0;
            idx_2648 < len_2649;
            idx_2648++)  {
                sids_2647[idx_2648] = in__2645.readShort();
                
            }
            return new ServerApiByUidRemoveServersFromCloudArguments(sids_2647);
            
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
                    const reqId_2650 = dataIn.readInt();
                    const argsObject_2651 = new ServerApiByUidGetBalanceArguments();
                    const argsNames_2652: string[] = [];
                    const argsValues_2653: any[] = [];
                    ctx.invokeLocalMethodBefore("getBalance", argsNames_2652, argsValues_2653);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getBalanceArguments === "function" ? (localApi as any).getBalanceArguments(argsObject_2651) : localApi.getBalance());
                    ctx.invokeLocalMethodAfter("getBalance", resultFuture, argsNames_2652, argsValues_2653);
                    resultFuture.to((v_2655: bigint) =>  {
                        const data_2654 = new DataInOut();
                        data_2654.writeLong(v_2655);
                        ctx.sendResultToRemote(reqId_2650, data_2654.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    const reqId_2656 = dataIn.readInt();
                    let uid_2657: UUID;
                    uid_2657 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2658 = new ServerApiByUidSetParentArguments(uid_2657);
                    const argsNames_2659: string[] = ["uid"];
                    const argsValues_2660: any[] = [uid_2657];
                    ctx.invokeLocalMethodBefore("setParent", argsNames_2659, argsValues_2660);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).setParentArguments === "function" ? (localApi as any).setParentArguments(argsObject_2658) : localApi.setParent(uid_2657));
                    ctx.invokeLocalMethodAfter("setParent", resultFuture, argsNames_2659, argsValues_2660);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2656);
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_2661 = dataIn.readInt();
                    const argsObject_2662 = new ServerApiByUidBlockArguments();
                    const argsNames_2663: string[] = [];
                    const argsValues_2664: any[] = [];
                    ctx.invokeLocalMethodBefore("block", argsNames_2663, argsValues_2664);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).blockArguments === "function" ? (localApi as any).blockArguments(argsObject_2662) : localApi.block());
                    ctx.invokeLocalMethodAfter("block", resultFuture, argsNames_2663, argsValues_2664);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2661);
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    const reqId_2665 = dataIn.readInt();
                    const argsObject_2666 = new ServerApiByUidGetPositionArguments();
                    const argsNames_2667: string[] = [];
                    const argsValues_2668: any[] = [];
                    ctx.invokeLocalMethodBefore("getPosition", argsNames_2667, argsValues_2668);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getPositionArguments === "function" ? (localApi as any).getPositionArguments(argsObject_2666) : localApi.getPosition());
                    ctx.invokeLocalMethodAfter("getPosition", resultFuture, argsNames_2667, argsValues_2668);
                    resultFuture.to((v_2670: CloudConfig) =>  {
                        const data_2669 = new DataInOut();
                        CloudConfig.META.serialize(ctx, v_2670, data_2669);
                        ctx.sendResultToRemote(reqId_2665, data_2669.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 7:  {
                    const reqId_2671 = dataIn.readInt();
                    const argsObject_2672 = new ServerApiByUidGetParentArguments();
                    const argsNames_2673: string[] = [];
                    const argsValues_2674: any[] = [];
                    ctx.invokeLocalMethodBefore("getParent", argsNames_2673, argsValues_2674);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getParentArguments === "function" ? (localApi as any).getParentArguments(argsObject_2672) : localApi.getParent());
                    ctx.invokeLocalMethodAfter("getParent", resultFuture, argsNames_2673, argsValues_2674);
                    resultFuture.to((v_2676: UUID) =>  {
                        const data_2675 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_2676, data_2675);
                        ctx.sendResultToRemote(reqId_2671, data_2675.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 8:  {
                    const reqId_2677 = dataIn.readInt();
                    const argsObject_2678 = new ServerApiByUidGetBeneficiaryArguments();
                    const argsNames_2679: string[] = [];
                    const argsValues_2680: any[] = [];
                    ctx.invokeLocalMethodBefore("getBeneficiary", argsNames_2679, argsValues_2680);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getBeneficiaryArguments === "function" ? (localApi as any).getBeneficiaryArguments(argsObject_2678) : localApi.getBeneficiary());
                    ctx.invokeLocalMethodAfter("getBeneficiary", resultFuture, argsNames_2679, argsValues_2680);
                    resultFuture.to((v_2682: UUID) =>  {
                        const data_2681 = new DataInOut();
                        FastMeta.META_UUID.serialize(ctx, v_2682, data_2681);
                        ctx.sendResultToRemote(reqId_2677, data_2681.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 9:  {
                    const reqId_2683 = dataIn.readInt();
                    let uid_2684: UUID;
                    uid_2684 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2685 = new ServerApiByUidSetBeneficiaryArguments(uid_2684);
                    const argsNames_2686: string[] = ["uid"];
                    const argsValues_2687: any[] = [uid_2684];
                    ctx.invokeLocalMethodBefore("setBeneficiary", argsNames_2686, argsValues_2687);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).setBeneficiaryArguments === "function" ? (localApi as any).setBeneficiaryArguments(argsObject_2685) : localApi.setBeneficiary(uid_2684));
                    ctx.invokeLocalMethodAfter("setBeneficiary", resultFuture, argsNames_2686, argsValues_2687);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2683);
                        
                    }
                    );
                    break;
                    
                }
                case 10:  {
                    const reqId_2688 = dataIn.readInt();
                    const argsObject_2689 = new ServerApiByUidGetBlockTimeArguments();
                    const argsNames_2690: string[] = [];
                    const argsValues_2691: any[] = [];
                    ctx.invokeLocalMethodBefore("getBlockTime", argsNames_2690, argsValues_2691);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getBlockTimeArguments === "function" ? (localApi as any).getBlockTimeArguments(argsObject_2689) : localApi.getBlockTime());
                    ctx.invokeLocalMethodAfter("getBlockTime", resultFuture, argsNames_2690, argsValues_2691);
                    resultFuture.to((v_2693: Date) =>  {
                        const data_2692 = new DataInOut();
                        data_2692.writeLong(v_2693.getTime());
                        ctx.sendResultToRemote(reqId_2688, data_2692.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 11:  {
                    const reqId_2694 = dataIn.readInt();
                    const argsObject_2695 = new ServerApiByUidUnblockArguments();
                    const argsNames_2696: string[] = [];
                    const argsValues_2697: any[] = [];
                    ctx.invokeLocalMethodBefore("unblock", argsNames_2696, argsValues_2697);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).unblockArguments === "function" ? (localApi as any).unblockArguments(argsObject_2695) : localApi.unblock());
                    ctx.invokeLocalMethodAfter("unblock", resultFuture, argsNames_2696, argsValues_2697);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2694);
                        
                    }
                    );
                    break;
                    
                }
                case 12:  {
                    const reqId_2698 = dataIn.readInt();
                    const argsObject_2699 = new ServerApiByUidCreateTimeArguments();
                    const argsNames_2700: string[] = [];
                    const argsValues_2701: any[] = [];
                    ctx.invokeLocalMethodBefore("createTime", argsNames_2700, argsValues_2701);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).createTimeArguments === "function" ? (localApi as any).createTimeArguments(argsObject_2699) : localApi.createTime());
                    ctx.invokeLocalMethodAfter("createTime", resultFuture, argsNames_2700, argsValues_2701);
                    resultFuture.to((v_2703: Date) =>  {
                        const data_2702 = new DataInOut();
                        data_2702.writeLong(v_2703.getTime());
                        ctx.sendResultToRemote(reqId_2698, data_2702.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 13:  {
                    const reqId_2704 = dataIn.readInt();
                    const argsObject_2705 = new ServerApiByUidOnlineTimeArguments();
                    const argsNames_2706: string[] = [];
                    const argsValues_2707: any[] = [];
                    ctx.invokeLocalMethodBefore("onlineTime", argsNames_2706, argsValues_2707);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).onlineTimeArguments === "function" ? (localApi as any).onlineTimeArguments(argsObject_2705) : localApi.onlineTime());
                    ctx.invokeLocalMethodAfter("onlineTime", resultFuture, argsNames_2706, argsValues_2707);
                    resultFuture.to((v_2709: Date) =>  {
                        const data_2708 = new DataInOut();
                        data_2708.writeLong(v_2709.getTime());
                        ctx.sendResultToRemote(reqId_2704, data_2708.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 14:  {
                    const reqId_2710 = dataIn.readInt();
                    let groupId_2711: UUID;
                    groupId_2711 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2712 = new ServerApiByUidAddAccessGroupArguments(groupId_2711);
                    const argsNames_2713: string[] = ["groupId"];
                    const argsValues_2714: any[] = [groupId_2711];
                    ctx.invokeLocalMethodBefore("addAccessGroup", argsNames_2713, argsValues_2714);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).addAccessGroupArguments === "function" ? (localApi as any).addAccessGroupArguments(argsObject_2712) : localApi.addAccessGroup(groupId_2711));
                    ctx.invokeLocalMethodAfter("addAccessGroup", resultFuture, argsNames_2713, argsValues_2714);
                    resultFuture.to((v_2716: boolean) =>  {
                        const data_2715 = new DataInOut();
                        data_2715.writeBoolean(v_2716);
                        ctx.sendResultToRemote(reqId_2710, data_2715.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 15:  {
                    const reqId_2717 = dataIn.readInt();
                    let groupId_2718: UUID;
                    groupId_2718 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    const argsObject_2719 = new ServerApiByUidRemoveAccessGroupArguments(groupId_2718);
                    const argsNames_2720: string[] = ["groupId"];
                    const argsValues_2721: any[] = [groupId_2718];
                    ctx.invokeLocalMethodBefore("removeAccessGroup", argsNames_2720, argsValues_2721);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).removeAccessGroupArguments === "function" ? (localApi as any).removeAccessGroupArguments(argsObject_2719) : localApi.removeAccessGroup(groupId_2718));
                    ctx.invokeLocalMethodAfter("removeAccessGroup", resultFuture, argsNames_2720, argsValues_2721);
                    resultFuture.to((v_2723: boolean) =>  {
                        const data_2722 = new DataInOut();
                        data_2722.writeBoolean(v_2723);
                        ctx.sendResultToRemote(reqId_2717, data_2722.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 16:  {
                    const reqId_2724 = dataIn.readInt();
                    let limit_2725: number;
                    limit_2725 = dataIn.readInt();
                    const argsObject_2726 = new ServerApiByUidSetMsgQueueLimitArguments(limit_2725);
                    const argsNames_2727: string[] = ["limit"];
                    const argsValues_2728: any[] = [limit_2725];
                    ctx.invokeLocalMethodBefore("setMsgQueueLimit", argsNames_2727, argsValues_2728);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).setMsgQueueLimitArguments === "function" ? (localApi as any).setMsgQueueLimitArguments(argsObject_2726) : localApi.setMsgQueueLimit(limit_2725));
                    ctx.invokeLocalMethodAfter("setMsgQueueLimit", resultFuture, argsNames_2727, argsValues_2728);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2724);
                        
                    }
                    );
                    break;
                    
                }
                case 17:  {
                    const reqId_2729 = dataIn.readInt();
                    let seconds_2730: number;
                    seconds_2730 = dataIn.readInt();
                    const argsObject_2731 = new ServerApiByUidSetMsgTimeLimitArguments(seconds_2730);
                    const argsNames_2732: string[] = ["seconds"];
                    const argsValues_2733: any[] = [seconds_2730];
                    ctx.invokeLocalMethodBefore("setMsgTimeLimit", argsNames_2732, argsValues_2733);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).setMsgTimeLimitArguments === "function" ? (localApi as any).setMsgTimeLimitArguments(argsObject_2731) : localApi.setMsgTimeLimit(seconds_2730));
                    ctx.invokeLocalMethodAfter("setMsgTimeLimit", resultFuture, argsNames_2732, argsValues_2733);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2729);
                        
                    }
                    );
                    break;
                    
                }
                case 18:  {
                    const reqId_2734 = dataIn.readInt();
                    let sids_2735: number[];
                    const len_2737 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    sids_2735 = new Array<number>(len_2737);
                    for (let idx_2736 = 0;
                    idx_2736 < len_2737;
                    idx_2736++)  {
                        sids_2735[idx_2736] = dataIn.readShort();
                        
                    }
                    const argsObject_2738 = new ServerApiByUidAddServersToCloudArguments(sids_2735);
                    const argsNames_2739: string[] = ["sids"];
                    const argsValues_2740: any[] = [sids_2735];
                    ctx.invokeLocalMethodBefore("addServersToCloud", argsNames_2739, argsValues_2740);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).addServersToCloudArguments === "function" ? (localApi as any).addServersToCloudArguments(argsObject_2738) : localApi.addServersToCloud(sids_2735));
                    ctx.invokeLocalMethodAfter("addServersToCloud", resultFuture, argsNames_2739, argsValues_2740);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2734);
                        
                    }
                    );
                    break;
                    
                }
                case 19:  {
                    const reqId_2741 = dataIn.readInt();
                    let sids_2742: number[];
                    const len_2744 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    sids_2742 = new Array<number>(len_2744);
                    for (let idx_2743 = 0;
                    idx_2743 < len_2744;
                    idx_2743++)  {
                        sids_2742[idx_2743] = dataIn.readShort();
                        
                    }
                    const argsObject_2745 = new ServerApiByUidRemoveServersFromCloudArguments(sids_2742);
                    const argsNames_2746: string[] = ["sids"];
                    const argsValues_2747: any[] = [sids_2742];
                    ctx.invokeLocalMethodBefore("removeServersFromCloud", argsNames_2746, argsValues_2747);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).removeServersFromCloudArguments === "function" ? (localApi as any).removeServersFromCloudArguments(argsObject_2745) : localApi.removeServersFromCloud(sids_2742));
                    ctx.invokeLocalMethodAfter("removeServersFromCloud", resultFuture, argsNames_2746, argsValues_2747);
                    resultFuture.to(() =>  {
                        ctx.sendResultToRemoteNoData(reqId_2741);
                        
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
    makeRemote(sCtx_2748: MetaContext): ServerApiByUidRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2748.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2748.flush();
                
            }
            , getFastMetaContext: () => sCtx_2748, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_2748.makeRemote(meta), getBalance: (): ARFuture<bigint> =>  {
                const dataOut_2750 = new DataInOut();
                dataOut_2750.writeByte(3);
                const argsNames_2752: string[] = [];
                const argsValues_2753: any[] = [];
                const result_2751 = ARFuture.of<bigint>();
                sCtx_2748.invokeRemoteMethodAfter("getBalance", result_2751, argsNames_2752, argsValues_2753);
                const reqId_2749 = sCtx_2748.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2751 as ARFuture<bigint>).tryDone(FastMeta.META_LONG.deserialize(sCtx_2748, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2751.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2750.writeInt(reqId_2749);
                sCtx_2748.sendToRemote(dataOut_2750.toArray());
                return result_2751;
                
            }
            , setParent: (uid: UUID): AFuture =>  {
                const dataOut_2755 = new DataInOut();
                dataOut_2755.writeByte(4);
                const argsNames_2757: string[] = ["uid"];
                const argsValues_2758: any[] = [uid];
                const result_2756 = AFuture.make();
                sCtx_2748.invokeRemoteMethodAfter("setParent", result_2756, argsNames_2757, argsValues_2758);
                const reqId_2754 = sCtx_2748.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2756 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2756.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2755.writeInt(reqId_2754);
                FastMeta.META_UUID.serialize(sCtx_2748, uid, dataOut_2755);
                sCtx_2748.sendToRemote(dataOut_2755.toArray());
                return result_2756;
                
            }
            , block: (): AFuture =>  {
                const dataOut_2760 = new DataInOut();
                dataOut_2760.writeByte(5);
                const argsNames_2762: string[] = [];
                const argsValues_2763: any[] = [];
                const result_2761 = AFuture.make();
                sCtx_2748.invokeRemoteMethodAfter("block", result_2761, argsNames_2762, argsValues_2763);
                const reqId_2759 = sCtx_2748.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2761 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2761.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2760.writeInt(reqId_2759);
                sCtx_2748.sendToRemote(dataOut_2760.toArray());
                return result_2761;
                
            }
            , getPosition: (): ARFuture<CloudConfig> =>  {
                const dataOut_2765 = new DataInOut();
                dataOut_2765.writeByte(6);
                const argsNames_2767: string[] = [];
                const argsValues_2768: any[] = [];
                const result_2766 = ARFuture.of<CloudConfig>();
                sCtx_2748.invokeRemoteMethodAfter("getPosition", result_2766, argsNames_2767, argsValues_2768);
                const reqId_2764 = sCtx_2748.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2766 as ARFuture<CloudConfig>).tryDone(CloudConfig.META.deserialize(sCtx_2748, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2766.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2765.writeInt(reqId_2764);
                sCtx_2748.sendToRemote(dataOut_2765.toArray());
                return result_2766;
                
            }
            , getParent: (): ARFuture<UUID> =>  {
                const dataOut_2770 = new DataInOut();
                dataOut_2770.writeByte(7);
                const argsNames_2772: string[] = [];
                const argsValues_2773: any[] = [];
                const result_2771 = ARFuture.of<UUID>();
                sCtx_2748.invokeRemoteMethodAfter("getParent", result_2771, argsNames_2772, argsValues_2773);
                const reqId_2769 = sCtx_2748.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2771 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_2748, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2771.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2770.writeInt(reqId_2769);
                sCtx_2748.sendToRemote(dataOut_2770.toArray());
                return result_2771;
                
            }
            , getBeneficiary: (): ARFuture<UUID> =>  {
                const dataOut_2775 = new DataInOut();
                dataOut_2775.writeByte(8);
                const argsNames_2777: string[] = [];
                const argsValues_2778: any[] = [];
                const result_2776 = ARFuture.of<UUID>();
                sCtx_2748.invokeRemoteMethodAfter("getBeneficiary", result_2776, argsNames_2777, argsValues_2778);
                const reqId_2774 = sCtx_2748.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2776 as ARFuture<UUID>).tryDone(FastMeta.META_UUID.deserialize(sCtx_2748, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2776.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2775.writeInt(reqId_2774);
                sCtx_2748.sendToRemote(dataOut_2775.toArray());
                return result_2776;
                
            }
            , setBeneficiary: (uid: UUID): AFuture =>  {
                const dataOut_2780 = new DataInOut();
                dataOut_2780.writeByte(9);
                const argsNames_2782: string[] = ["uid"];
                const argsValues_2783: any[] = [uid];
                const result_2781 = AFuture.make();
                sCtx_2748.invokeRemoteMethodAfter("setBeneficiary", result_2781, argsNames_2782, argsValues_2783);
                const reqId_2779 = sCtx_2748.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2781 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2781.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2780.writeInt(reqId_2779);
                FastMeta.META_UUID.serialize(sCtx_2748, uid, dataOut_2780);
                sCtx_2748.sendToRemote(dataOut_2780.toArray());
                return result_2781;
                
            }
            , getBlockTime: (): ARFuture<Date> =>  {
                const dataOut_2785 = new DataInOut();
                dataOut_2785.writeByte(10);
                const argsNames_2787: string[] = [];
                const argsValues_2788: any[] = [];
                const result_2786 = ARFuture.of<Date>();
                sCtx_2748.invokeRemoteMethodAfter("getBlockTime", result_2786, argsNames_2787, argsValues_2788);
                const reqId_2784 = sCtx_2748.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2786 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_2748, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2786.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2785.writeInt(reqId_2784);
                sCtx_2748.sendToRemote(dataOut_2785.toArray());
                return result_2786;
                
            }
            , unblock: (): AFuture =>  {
                const dataOut_2790 = new DataInOut();
                dataOut_2790.writeByte(11);
                const argsNames_2792: string[] = [];
                const argsValues_2793: any[] = [];
                const result_2791 = AFuture.make();
                sCtx_2748.invokeRemoteMethodAfter("unblock", result_2791, argsNames_2792, argsValues_2793);
                const reqId_2789 = sCtx_2748.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2791 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2791.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2790.writeInt(reqId_2789);
                sCtx_2748.sendToRemote(dataOut_2790.toArray());
                return result_2791;
                
            }
            , createTime: (): ARFuture<Date> =>  {
                const dataOut_2795 = new DataInOut();
                dataOut_2795.writeByte(12);
                const argsNames_2797: string[] = [];
                const argsValues_2798: any[] = [];
                const result_2796 = ARFuture.of<Date>();
                sCtx_2748.invokeRemoteMethodAfter("createTime", result_2796, argsNames_2797, argsValues_2798);
                const reqId_2794 = sCtx_2748.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2796 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_2748, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2796.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2795.writeInt(reqId_2794);
                sCtx_2748.sendToRemote(dataOut_2795.toArray());
                return result_2796;
                
            }
            , onlineTime: (): ARFuture<Date> =>  {
                const dataOut_2800 = new DataInOut();
                dataOut_2800.writeByte(13);
                const argsNames_2802: string[] = [];
                const argsValues_2803: any[] = [];
                const result_2801 = ARFuture.of<Date>();
                sCtx_2748.invokeRemoteMethodAfter("onlineTime", result_2801, argsNames_2802, argsValues_2803);
                const reqId_2799 = sCtx_2748.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2801 as ARFuture<Date>).tryDone(FastMeta.META_DATE.deserialize(sCtx_2748, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2801.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2800.writeInt(reqId_2799);
                sCtx_2748.sendToRemote(dataOut_2800.toArray());
                return result_2801;
                
            }
            , addAccessGroup: (groupId: UUID): ARFuture<boolean> =>  {
                const dataOut_2805 = new DataInOut();
                dataOut_2805.writeByte(14);
                const argsNames_2807: string[] = ["groupId"];
                const argsValues_2808: any[] = [groupId];
                const result_2806 = ARFuture.of<boolean>();
                sCtx_2748.invokeRemoteMethodAfter("addAccessGroup", result_2806, argsNames_2807, argsValues_2808);
                const reqId_2804 = sCtx_2748.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2806 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_2748, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2806.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2805.writeInt(reqId_2804);
                FastMeta.META_UUID.serialize(sCtx_2748, groupId, dataOut_2805);
                sCtx_2748.sendToRemote(dataOut_2805.toArray());
                return result_2806;
                
            }
            , removeAccessGroup: (groupId: UUID): ARFuture<boolean> =>  {
                const dataOut_2810 = new DataInOut();
                dataOut_2810.writeByte(15);
                const argsNames_2812: string[] = ["groupId"];
                const argsValues_2813: any[] = [groupId];
                const result_2811 = ARFuture.of<boolean>();
                sCtx_2748.invokeRemoteMethodAfter("removeAccessGroup", result_2811, argsNames_2812, argsValues_2813);
                const reqId_2809 = sCtx_2748.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2811 as ARFuture<boolean>).tryDone(FastMeta.META_BOOLEAN.deserialize(sCtx_2748, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2811.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2810.writeInt(reqId_2809);
                FastMeta.META_UUID.serialize(sCtx_2748, groupId, dataOut_2810);
                sCtx_2748.sendToRemote(dataOut_2810.toArray());
                return result_2811;
                
            }
            , setMsgQueueLimit: (limit: number): AFuture =>  {
                const dataOut_2815 = new DataInOut();
                dataOut_2815.writeByte(16);
                const argsNames_2817: string[] = ["limit"];
                const argsValues_2818: any[] = [limit];
                const result_2816 = AFuture.make();
                sCtx_2748.invokeRemoteMethodAfter("setMsgQueueLimit", result_2816, argsNames_2817, argsValues_2818);
                const reqId_2814 = sCtx_2748.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2816 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2816.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2815.writeInt(reqId_2814);
                dataOut_2815.writeInt(limit);
                sCtx_2748.sendToRemote(dataOut_2815.toArray());
                return result_2816;
                
            }
            , setMsgTimeLimit: (seconds: number): AFuture =>  {
                const dataOut_2820 = new DataInOut();
                dataOut_2820.writeByte(17);
                const argsNames_2822: string[] = ["seconds"];
                const argsValues_2823: any[] = [seconds];
                const result_2821 = AFuture.make();
                sCtx_2748.invokeRemoteMethodAfter("setMsgTimeLimit", result_2821, argsNames_2822, argsValues_2823);
                const reqId_2819 = sCtx_2748.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2821 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2821.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2820.writeInt(reqId_2819);
                dataOut_2820.writeInt(seconds);
                sCtx_2748.sendToRemote(dataOut_2820.toArray());
                return result_2821;
                
            }
            , addServersToCloud: (sids: number[]): AFuture =>  {
                const dataOut_2825 = new DataInOut();
                dataOut_2825.writeByte(18);
                const argsNames_2827: string[] = ["sids"];
                const argsValues_2828: any[] = [sids];
                const result_2826 = AFuture.make();
                sCtx_2748.invokeRemoteMethodAfter("addServersToCloud", result_2826, argsNames_2827, argsValues_2828);
                const reqId_2824 = sCtx_2748.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2826 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2826.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2825.writeInt(reqId_2824);
                SerializerPackNumber.INSTANCE.put(dataOut_2825, sids.length);
                for (const el_2829 of sids)  {
                    dataOut_2825.writeShort(el_2829);
                    
                }
                sCtx_2748.sendToRemote(dataOut_2825.toArray());
                return result_2826;
                
            }
            , removeServersFromCloud: (sids: number[]): AFuture =>  {
                const dataOut_2831 = new DataInOut();
                dataOut_2831.writeByte(19);
                const argsNames_2833: string[] = ["sids"];
                const argsValues_2834: any[] = [sids];
                const result_2832 = AFuture.make();
                sCtx_2748.invokeRemoteMethodAfter("removeServersFromCloud", result_2832, argsNames_2833, argsValues_2834);
                const reqId_2830 = sCtx_2748.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2832 as AFuture).tryDone();
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2832.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2831.writeInt(reqId_2830);
                SerializerPackNumber.INSTANCE.put(dataOut_2831, sids.length);
                for (const el_2835 of sids)  {
                    dataOut_2831.writeShort(el_2835);
                    
                }
                sCtx_2748.sendToRemote(dataOut_2831.toArray());
                return result_2832;
                
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
    serialize(sCtx_2836: MetaContext, obj_2837: ClientApiRegUnsafeEnterArguments, _out_2838: DataOut): void  {
        ClientApiRegSafeStream.META.serialize(sCtx_2836, obj_2837.stream, _out_2838);
        
    }
    deserialize(sCtx_2836: MetaContext, in__2839: DataIn): ClientApiRegUnsafeEnterArguments  {
        try  {
            let stream_2840: ClientApiRegSafeStream;
            stream_2840 = ClientApiRegSafeStream.META.deserialize(sCtx_2836, in__2839);
            return new ClientApiRegUnsafeEnterArguments(stream_2840);
            
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
    serialize(sCtx_2841: MetaContext, obj_2842: ClientApiRegUnsafeEnterGlobalArguments, _out_2843: DataOut): void  {
        GlobalRegClientApiStream.META.serialize(sCtx_2841, obj_2842.stream, _out_2843);
        
    }
    deserialize(sCtx_2841: MetaContext, in__2844: DataIn): ClientApiRegUnsafeEnterGlobalArguments  {
        try  {
            let stream_2845: GlobalRegClientApiStream;
            stream_2845 = GlobalRegClientApiStream.META.deserialize(sCtx_2841, in__2844);
            return new ClientApiRegUnsafeEnterGlobalArguments(stream_2845);
            
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
                    let stream_2847: ClientApiRegSafeStream;
                    stream_2847 = ClientApiRegSafeStream.META.deserialize(ctx, dataIn);
                    const argsObject_2848 = new ClientApiRegUnsafeEnterArguments(stream_2847);
                    const argsNames_2849: string[] = ["stream"];
                    const argsValues_2850: any[] = [stream_2847];
                    ctx.invokeLocalMethodBefore("enter", argsNames_2849, argsValues_2850);
                    (typeof (localApi as any).enterArguments === "function" ? (localApi as any).enterArguments(argsObject_2848) : localApi.enter(stream_2847));
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_2849, argsValues_2850);
                    break;
                    
                }
                case 4:  {
                    let stream_2852: GlobalRegClientApiStream;
                    stream_2852 = GlobalRegClientApiStream.META.deserialize(ctx, dataIn);
                    const argsObject_2853 = new ClientApiRegUnsafeEnterGlobalArguments(stream_2852);
                    const argsNames_2854: string[] = ["stream"];
                    const argsValues_2855: any[] = [stream_2852];
                    ctx.invokeLocalMethodBefore("enterGlobal", argsNames_2854, argsValues_2855);
                    (typeof (localApi as any).enterGlobalArguments === "function" ? (localApi as any).enterGlobalArguments(argsObject_2853) : localApi.enterGlobal(stream_2852));
                    ctx.invokeLocalMethodAfter("enterGlobal", null, argsNames_2854, argsValues_2855);
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
    makeRemote(sCtx_2856: MetaContext): ClientApiRegUnsafeRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2856.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2856.flush();
                
            }
            , getFastMetaContext: () => sCtx_2856, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_2856.makeRemote(meta), enter: (stream: ClientApiRegSafeStream): void =>  {
                const dataOut_2858 = new DataInOut();
                dataOut_2858.writeByte(3);
                const argsNames_2860: string[] = ["stream"];
                const argsValues_2861: any[] = [stream];
                sCtx_2856.invokeRemoteMethodAfter("enter", null, argsNames_2860, argsValues_2861);
                ClientApiRegSafeStream.META.serialize(sCtx_2856, stream, dataOut_2858);
                sCtx_2856.sendToRemote(dataOut_2858.toArray());
                
            }
            , enterGlobal: (stream: GlobalRegClientApiStream): void =>  {
                const dataOut_2863 = new DataInOut();
                dataOut_2863.writeByte(4);
                const argsNames_2865: string[] = ["stream"];
                const argsValues_2866: any[] = [stream];
                sCtx_2856.invokeRemoteMethodAfter("enterGlobal", null, argsNames_2865, argsValues_2866);
                GlobalRegClientApiStream.META.serialize(sCtx_2856, stream, dataOut_2863);
                sCtx_2856.sendToRemote(dataOut_2863.toArray());
                
            }
            , openEnter(factory: (api: ClientApiRegSafeRemote) => any, converter: BytesConverter, ...keys: any[]): ClientApiRegSafeRemote  {
                return sCtx_2856.findContext(ctx =>  {
                    ctx.onFlushData(data => this.enter(ClientApiRegSafeStream.Out.send(converter(data))));
                    return factory(ctx.makeRemote((ClientApiRegSafe as any).META));
                    
                }
                , ...keys).makeRemote((ClientApiRegSafe as any).META) as ClientApiRegSafeRemote;
                
            }
            , openEnterGlobal(factory: (api: GlobalRegClientApiRemote) => any, converter: BytesConverter, ...keys: any[]): GlobalRegClientApiRemote  {
                return sCtx_2856.findContext(ctx =>  {
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
    serialize(sCtx_2867: MetaContext, obj_2868: GlobalRegServerApiSetMasterKeyArguments, _out_2869: DataOut): void  {
        Key.META.serialize(sCtx_2867, obj_2868.key, _out_2869);
        
    }
    deserialize(sCtx_2867: MetaContext, in__2870: DataIn): GlobalRegServerApiSetMasterKeyArguments  {
        try  {
            let _key_2871: Key;
            _key_2871 = Key.META.deserialize(sCtx_2867, in__2870);
            return new GlobalRegServerApiSetMasterKeyArguments(_key_2871);
            
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
    serialize(sCtx_2872: MetaContext, obj_2874: GlobalRegServerApiFinishArguments, _out_2875: DataOut): void  {
        
    }
    deserialize(sCtx_2873: MetaContext, in__2876: DataIn): GlobalRegServerApiFinishArguments  {
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
                    let _key_2878: Key;
                    _key_2878 = Key.META.deserialize(ctx, dataIn);
                    const argsObject_2879 = new GlobalRegServerApiSetMasterKeyArguments(_key_2878);
                    const argsNames_2880: string[] = ["key"];
                    const argsValues_2881: any[] = [_key_2878];
                    ctx.invokeLocalMethodBefore("setMasterKey", argsNames_2880, argsValues_2881);
                    (typeof (localApi as any).setMasterKeyArguments === "function" ? (localApi as any).setMasterKeyArguments(argsObject_2879) : localApi.setMasterKey(_key_2878));
                    ctx.invokeLocalMethodAfter("setMasterKey", null, argsNames_2880, argsValues_2881);
                    break;
                    
                }
                case 4:  {
                    const reqId_2882 = dataIn.readInt();
                    const argsObject_2883 = new GlobalRegServerApiFinishArguments();
                    const argsNames_2884: string[] = [];
                    const argsValues_2885: any[] = [];
                    ctx.invokeLocalMethodBefore("finish", argsNames_2884, argsValues_2885);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).finishArguments === "function" ? (localApi as any).finishArguments(argsObject_2883) : localApi.finish());
                    ctx.invokeLocalMethodAfter("finish", resultFuture, argsNames_2884, argsValues_2885);
                    resultFuture.to((v_2887: FinishResultGlobalRegServerApi) =>  {
                        const data_2886 = new DataInOut();
                        FinishResultGlobalRegServerApi.META.serialize(ctx, v_2887, data_2886);
                        ctx.sendResultToRemote(reqId_2882, data_2886.toArray());
                        
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
    makeRemote(sCtx_2888: MetaContext): GlobalRegServerApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2888.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2888.flush();
                
            }
            , getFastMetaContext: () => sCtx_2888, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_2888.makeRemote(meta), setMasterKey: (key: Key): void =>  {
                const dataOut_2890 = new DataInOut();
                dataOut_2890.writeByte(3);
                const argsNames_2892: string[] = ["key"];
                const argsValues_2893: any[] = [key];
                sCtx_2888.invokeRemoteMethodAfter("setMasterKey", null, argsNames_2892, argsValues_2893);
                Key.META.serialize(sCtx_2888, key, dataOut_2890);
                sCtx_2888.sendToRemote(dataOut_2890.toArray());
                
            }
            , finish: (): ARFuture<FinishResultGlobalRegServerApi> =>  {
                const dataOut_2895 = new DataInOut();
                dataOut_2895.writeByte(4);
                const argsNames_2897: string[] = [];
                const argsValues_2898: any[] = [];
                const result_2896 = ARFuture.of<FinishResultGlobalRegServerApi>();
                sCtx_2888.invokeRemoteMethodAfter("finish", result_2896, argsNames_2897, argsValues_2898);
                const reqId_2894 = sCtx_2888.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2896 as ARFuture<FinishResultGlobalRegServerApi>).tryDone(FinishResultGlobalRegServerApi.META.deserialize(sCtx_2888, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2896.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2895.writeInt(reqId_2894);
                sCtx_2888.sendToRemote(dataOut_2895.toArray());
                return result_2896;
                
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
    serialize(sCtx_2899: MetaContext, obj_2900: ServerRegistrationApiRegistrationArguments, _out_2901: DataOut): void  {
        const stringBytes_2903 = new TextEncoder().encode(obj_2900.salt);
        SerializerPackNumber.INSTANCE.put(_out_2901, stringBytes_2903.length);
        _out_2901.write(stringBytes_2903);
        const stringBytes_2905 = new TextEncoder().encode(obj_2900.suffix);
        SerializerPackNumber.INSTANCE.put(_out_2901, stringBytes_2905.length);
        _out_2901.write(stringBytes_2905);
        SerializerPackNumber.INSTANCE.put(_out_2901, obj_2900.passwords.length);
        for (const el_2907 of obj_2900.passwords)  {
            _out_2901.writeInt(el_2907);
            
        }
        FastMeta.META_UUID.serialize(sCtx_2899, obj_2900.parent, _out_2901);
        GlobalApiStream.META.serialize(sCtx_2899, obj_2900.globalApi, _out_2901);
        
    }
    deserialize(sCtx_2899: MetaContext, in__2902: DataIn): ServerRegistrationApiRegistrationArguments  {
        try  {
            let salt_2908: string;
            let suffix_2909: string;
            let passwords_2910: number[];
            let parent_2911: UUID;
            let globalApi_2912: GlobalApiStream;
            let stringBytes_2913: Uint8Array;
            const len_2915 = Number(DeserializerPackNumber.INSTANCE.put(in__2902));
            const bytes_2916 = in__2902.readBytes(len_2915);
            stringBytes_2913 = bytes_2916;
            salt_2908 = new TextDecoder('utf-8').decode(stringBytes_2913);
            let stringBytes_2917: Uint8Array;
            const len_2919 = Number(DeserializerPackNumber.INSTANCE.put(in__2902));
            const bytes_2920 = in__2902.readBytes(len_2919);
            stringBytes_2917 = bytes_2920;
            suffix_2909 = new TextDecoder('utf-8').decode(stringBytes_2917);
            const len_2922 = Number(DeserializerPackNumber.INSTANCE.put(in__2902));
            passwords_2910 = new Array<number>(len_2922);
            for (let idx_2921 = 0;
            idx_2921 < len_2922;
            idx_2921++)  {
                passwords_2910[idx_2921] = in__2902.readInt();
                
            }
            parent_2911 = FastMeta.META_UUID.deserialize(sCtx_2899, in__2902);
            globalApi_2912 = GlobalApiStream.META.deserialize(sCtx_2899, in__2902);
            return new ServerRegistrationApiRegistrationArguments(salt_2908, suffix_2909, passwords_2910, parent_2911, globalApi_2912);
            
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
    serialize(sCtx_2923: MetaContext, obj_2924: ServerRegistrationApiRequestWorkProofDataArguments, _out_2925: DataOut): void  {
        FastMeta.META_UUID.serialize(sCtx_2923, obj_2924.parent, _out_2925);
        PowMethod.META.serialize(sCtx_2923, obj_2924.powMethods, _out_2925);
        
    }
    deserialize(sCtx_2923: MetaContext, in__2926: DataIn): ServerRegistrationApiRequestWorkProofDataArguments  {
        try  {
            let parent_2927: UUID;
            let powMethods_2928: PowMethod;
            parent_2927 = FastMeta.META_UUID.deserialize(sCtx_2923, in__2926);
            powMethods_2928 = PowMethod.META.deserialize(sCtx_2923, in__2926);
            return new ServerRegistrationApiRequestWorkProofDataArguments(parent_2927, powMethods_2928);
            
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
    serialize(sCtx_2929: MetaContext, obj_2930: ServerRegistrationApiResolveServersArguments, _out_2931: DataOut): void  {
        Cloud.META.serialize(sCtx_2929, obj_2930.serverIds, _out_2931);
        
    }
    deserialize(sCtx_2929: MetaContext, in__2932: DataIn): ServerRegistrationApiResolveServersArguments  {
        try  {
            let serverIds_2933: Cloud;
            serverIds_2933 = Cloud.META.deserialize(sCtx_2929, in__2932);
            return new ServerRegistrationApiResolveServersArguments(serverIds_2933);
            
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
    serialize(sCtx_2934: MetaContext, obj_2935: ServerRegistrationApiSetReturnKeyArguments, _out_2936: DataOut): void  {
        Key.META.serialize(sCtx_2934, obj_2935.key, _out_2936);
        
    }
    deserialize(sCtx_2934: MetaContext, in__2937: DataIn): ServerRegistrationApiSetReturnKeyArguments  {
        try  {
            let _key_2938: Key;
            _key_2938 = Key.META.deserialize(sCtx_2934, in__2937);
            return new ServerRegistrationApiSetReturnKeyArguments(_key_2938);
            
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
                    let salt_2940: string;
                    let suffix_2941: string;
                    let passwords_2942: number[];
                    let parent_2943: UUID;
                    let globalApi_2944: GlobalApiStream;
                    let stringBytes_2945: Uint8Array;
                    const len_2947 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_2948 = dataIn.readBytes(len_2947);
                    stringBytes_2945 = bytes_2948;
                    salt_2940 = new TextDecoder('utf-8').decode(stringBytes_2945);
                    let stringBytes_2949: Uint8Array;
                    const len_2951 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    const bytes_2952 = dataIn.readBytes(len_2951);
                    stringBytes_2949 = bytes_2952;
                    suffix_2941 = new TextDecoder('utf-8').decode(stringBytes_2949);
                    const len_2954 = Number(DeserializerPackNumber.INSTANCE.put(dataIn));
                    passwords_2942 = new Array<number>(len_2954);
                    for (let idx_2953 = 0;
                    idx_2953 < len_2954;
                    idx_2953++)  {
                        passwords_2942[idx_2953] = dataIn.readInt();
                        
                    }
                    parent_2943 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    globalApi_2944 = GlobalApiStream.META.deserialize(ctx, dataIn);
                    const argsObject_2955 = new ServerRegistrationApiRegistrationArguments(salt_2940, suffix_2941, passwords_2942, parent_2943, globalApi_2944);
                    const argsNames_2956: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                    const argsValues_2957: any[] = [salt_2940, suffix_2941, passwords_2942, parent_2943, globalApi_2944];
                    ctx.invokeLocalMethodBefore("registration", argsNames_2956, argsValues_2957);
                    (typeof (localApi as any).registrationArguments === "function" ? (localApi as any).registrationArguments(argsObject_2955) : localApi.registration(salt_2940, suffix_2941, passwords_2942, parent_2943, globalApi_2944));
                    ctx.invokeLocalMethodAfter("registration", null, argsNames_2956, argsValues_2957);
                    break;
                    
                }
                case 4:  {
                    const reqId_2958 = dataIn.readInt();
                    let parent_2959: UUID;
                    let powMethods_2960: PowMethod;
                    parent_2959 = FastMeta.META_UUID.deserialize(ctx, dataIn);
                    powMethods_2960 = PowMethod.META.deserialize(ctx, dataIn);
                    const argsObject_2961 = new ServerRegistrationApiRequestWorkProofDataArguments(parent_2959, powMethods_2960);
                    const argsNames_2962: string[] = ["parent", "powMethods"];
                    const argsValues_2963: any[] = [parent_2959, powMethods_2960];
                    ctx.invokeLocalMethodBefore("requestWorkProofData", argsNames_2962, argsValues_2963);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).requestWorkProofDataArguments === "function" ? (localApi as any).requestWorkProofDataArguments(argsObject_2961) : localApi.requestWorkProofData(parent_2959, powMethods_2960));
                    ctx.invokeLocalMethodAfter("requestWorkProofData", resultFuture, argsNames_2962, argsValues_2963);
                    resultFuture.to((v_2965: WorkProofDTO) =>  {
                        const data_2964 = new DataInOut();
                        WorkProofDTO.META.serialize(ctx, v_2965, data_2964);
                        ctx.sendResultToRemote(reqId_2958, data_2964.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 5:  {
                    const reqId_2966 = dataIn.readInt();
                    let serverIds_2967: Cloud;
                    serverIds_2967 = Cloud.META.deserialize(ctx, dataIn);
                    const argsObject_2968 = new ServerRegistrationApiResolveServersArguments(serverIds_2967);
                    const argsNames_2969: string[] = ["serverIds"];
                    const argsValues_2970: any[] = [serverIds_2967];
                    ctx.invokeLocalMethodBefore("resolveServers", argsNames_2969, argsValues_2970);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).resolveServersArguments === "function" ? (localApi as any).resolveServersArguments(argsObject_2968) : localApi.resolveServers(serverIds_2967));
                    ctx.invokeLocalMethodAfter("resolveServers", resultFuture, argsNames_2969, argsValues_2970);
                    resultFuture.to((v_2972: ServerDescriptor[]) =>  {
                        const data_2971 = new DataInOut();
                        SerializerPackNumber.INSTANCE.put(data_2971, v_2972.length);
                        for (const el_2973 of v_2972)  {
                            ServerDescriptor.META.serialize(ctx, el_2973, data_2971);
                            
                        }
                        ctx.sendResultToRemote(reqId_2966, data_2971.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 6:  {
                    let _key_2975: Key;
                    _key_2975 = Key.META.deserialize(ctx, dataIn);
                    const argsObject_2976 = new ServerRegistrationApiSetReturnKeyArguments(_key_2975);
                    const argsNames_2977: string[] = ["key"];
                    const argsValues_2978: any[] = [_key_2975];
                    ctx.invokeLocalMethodBefore("setReturnKey", argsNames_2977, argsValues_2978);
                    (typeof (localApi as any).setReturnKeyArguments === "function" ? (localApi as any).setReturnKeyArguments(argsObject_2976) : localApi.setReturnKey(_key_2975));
                    ctx.invokeLocalMethodAfter("setReturnKey", null, argsNames_2977, argsValues_2978);
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
    makeRemote(sCtx_2979: MetaContext): ServerRegistrationApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_2979.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_2979.flush();
                
            }
            , getFastMetaContext: () => sCtx_2979, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_2979.makeRemote(meta), registration: (salt: string, suffix: string, passwords: number[], parent: UUID, globalApi: GlobalApiStream): void =>  {
                const dataOut_2981 = new DataInOut();
                dataOut_2981.writeByte(3);
                const argsNames_2983: string[] = ["salt", "suffix", "passwords", "parent", "globalApi"];
                const argsValues_2984: any[] = [salt, suffix, passwords, parent, globalApi];
                sCtx_2979.invokeRemoteMethodAfter("registration", null, argsNames_2983, argsValues_2984);
                const stringBytes_2985 = new TextEncoder().encode(salt);
                SerializerPackNumber.INSTANCE.put(dataOut_2981, stringBytes_2985.length);
                dataOut_2981.write(stringBytes_2985);
                const stringBytes_2987 = new TextEncoder().encode(suffix);
                SerializerPackNumber.INSTANCE.put(dataOut_2981, stringBytes_2987.length);
                dataOut_2981.write(stringBytes_2987);
                SerializerPackNumber.INSTANCE.put(dataOut_2981, passwords.length);
                for (const el_2989 of passwords)  {
                    dataOut_2981.writeInt(el_2989);
                    
                }
                FastMeta.META_UUID.serialize(sCtx_2979, parent, dataOut_2981);
                GlobalApiStream.META.serialize(sCtx_2979, globalApi, dataOut_2981);
                sCtx_2979.sendToRemote(dataOut_2981.toArray());
                
            }
            , requestWorkProofData: (parent: UUID, powMethods: PowMethod): ARFuture<WorkProofDTO> =>  {
                const dataOut_2991 = new DataInOut();
                dataOut_2991.writeByte(4);
                const argsNames_2993: string[] = ["parent", "powMethods"];
                const argsValues_2994: any[] = [parent, powMethods];
                const result_2992 = ARFuture.of<WorkProofDTO>();
                sCtx_2979.invokeRemoteMethodAfter("requestWorkProofData", result_2992, argsNames_2993, argsValues_2994);
                const reqId_2990 = sCtx_2979.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2992 as ARFuture<WorkProofDTO>).tryDone(WorkProofDTO.META.deserialize(sCtx_2979, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2992.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2991.writeInt(reqId_2990);
                FastMeta.META_UUID.serialize(sCtx_2979, parent, dataOut_2991);
                PowMethod.META.serialize(sCtx_2979, powMethods, dataOut_2991);
                sCtx_2979.sendToRemote(dataOut_2991.toArray());
                return result_2992;
                
            }
            , resolveServers: (serverIds: Cloud): ARFuture<ServerDescriptor[]> =>  {
                const dataOut_2996 = new DataInOut();
                dataOut_2996.writeByte(5);
                const argsNames_2998: string[] = ["serverIds"];
                const argsValues_2999: any[] = [serverIds];
                const result_2997 = ARFuture.of<ServerDescriptor[]>();
                sCtx_2979.invokeRemoteMethodAfter("resolveServers", result_2997, argsNames_2998, argsValues_2999);
                const reqId_2995 = sCtx_2979.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_2997 as ARFuture<ServerDescriptor[]>).tryDone(FastMeta.getMetaArray(ServerDescriptor.META).deserialize(sCtx_2979, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_2997.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_2996.writeInt(reqId_2995);
                Cloud.META.serialize(sCtx_2979, serverIds, dataOut_2996);
                sCtx_2979.sendToRemote(dataOut_2996.toArray());
                return result_2997;
                
            }
            , setReturnKey: (key: Key): void =>  {
                const dataOut_3001 = new DataInOut();
                dataOut_3001.writeByte(6);
                const argsNames_3003: string[] = ["key"];
                const argsValues_3004: any[] = [key];
                sCtx_2979.invokeRemoteMethodAfter("setReturnKey", null, argsNames_3003, argsValues_3004);
                Key.META.serialize(sCtx_2979, key, dataOut_3001);
                sCtx_2979.sendToRemote(dataOut_3001.toArray());
                
            }
            , openRegistration(salt: string, suffix: string, passwords: number[], parent: UUID, factory: (api: GlobalRegServerApiRemote) => any, converter: BytesConverter, ...keys: any[]): GlobalRegServerApiRemote  {
                return sCtx_2979.findContext(ctx =>  {
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
    serialize(sCtx_3005: MetaContext, obj_3006: RegistrationRootApiGetAsymmetricPublicKeyArguments, _out_3007: DataOut): void  {
        CryptoLib.META.serialize(sCtx_3005, obj_3006.cryptoLib, _out_3007);
        
    }
    deserialize(sCtx_3005: MetaContext, in__3008: DataIn): RegistrationRootApiGetAsymmetricPublicKeyArguments  {
        try  {
            let cryptoLib_3009: CryptoLib;
            cryptoLib_3009 = CryptoLib.META.deserialize(sCtx_3005, in__3008);
            return new RegistrationRootApiGetAsymmetricPublicKeyArguments(cryptoLib_3009);
            
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
    serialize(sCtx_3010: MetaContext, obj_3011: RegistrationRootApiEnterArguments, _out_3012: DataOut): void  {
        CryptoLib.META.serialize(sCtx_3010, obj_3011.cryptoLib, _out_3012);
        ServerRegistrationApiStream.META.serialize(sCtx_3010, obj_3011.stream, _out_3012);
        
    }
    deserialize(sCtx_3010: MetaContext, in__3013: DataIn): RegistrationRootApiEnterArguments  {
        try  {
            let cryptoLib_3014: CryptoLib;
            let stream_3015: ServerRegistrationApiStream;
            cryptoLib_3014 = CryptoLib.META.deserialize(sCtx_3010, in__3013);
            stream_3015 = ServerRegistrationApiStream.META.deserialize(sCtx_3010, in__3013);
            return new RegistrationRootApiEnterArguments(cryptoLib_3014, stream_3015);
            
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
    serialize(sCtx_3016: MetaContext, obj_3018: RegistrationRootApiGetMyIpArguments, _out_3019: DataOut): void  {
        
    }
    deserialize(sCtx_3017: MetaContext, in__3020: DataIn): RegistrationRootApiGetMyIpArguments  {
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
                    const reqId_3021 = dataIn.readInt();
                    let cryptoLib_3022: CryptoLib;
                    cryptoLib_3022 = CryptoLib.META.deserialize(ctx, dataIn);
                    const argsObject_3023 = new RegistrationRootApiGetAsymmetricPublicKeyArguments(cryptoLib_3022);
                    const argsNames_3024: string[] = ["cryptoLib"];
                    const argsValues_3025: any[] = [cryptoLib_3022];
                    ctx.invokeLocalMethodBefore("getAsymmetricPublicKey", argsNames_3024, argsValues_3025);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getAsymmetricPublicKeyArguments === "function" ? (localApi as any).getAsymmetricPublicKeyArguments(argsObject_3023) : localApi.getAsymmetricPublicKey(cryptoLib_3022));
                    ctx.invokeLocalMethodAfter("getAsymmetricPublicKey", resultFuture, argsNames_3024, argsValues_3025);
                    resultFuture.to((v_3027: SignedKey) =>  {
                        const data_3026 = new DataInOut();
                        SignedKey.META.serialize(ctx, v_3027, data_3026);
                        ctx.sendResultToRemote(reqId_3021, data_3026.toArray());
                        
                    }
                    );
                    break;
                    
                }
                case 4:  {
                    let cryptoLib_3029: CryptoLib;
                    let stream_3030: ServerRegistrationApiStream;
                    cryptoLib_3029 = CryptoLib.META.deserialize(ctx, dataIn);
                    stream_3030 = ServerRegistrationApiStream.META.deserialize(ctx, dataIn);
                    const argsObject_3031 = new RegistrationRootApiEnterArguments(cryptoLib_3029, stream_3030);
                    const argsNames_3032: string[] = ["cryptoLib", "stream"];
                    const argsValues_3033: any[] = [cryptoLib_3029, stream_3030];
                    ctx.invokeLocalMethodBefore("enter", argsNames_3032, argsValues_3033);
                    (typeof (localApi as any).enterArguments === "function" ? (localApi as any).enterArguments(argsObject_3031) : localApi.enter(cryptoLib_3029, stream_3030));
                    ctx.invokeLocalMethodAfter("enter", null, argsNames_3032, argsValues_3033);
                    break;
                    
                }
                case 6:  {
                    const reqId_3034 = dataIn.readInt();
                    const argsObject_3035 = new RegistrationRootApiGetMyIpArguments();
                    const argsNames_3036: string[] = [];
                    const argsValues_3037: any[] = [];
                    ctx.invokeLocalMethodBefore("getMyIp", argsNames_3036, argsValues_3037);
                    ctx.regLocalFuture();
                    const resultFuture = (typeof (localApi as any).getMyIpArguments === "function" ? (localApi as any).getMyIpArguments(argsObject_3035) : localApi.getMyIp());
                    ctx.invokeLocalMethodAfter("getMyIp", resultFuture, argsNames_3036, argsValues_3037);
                    resultFuture.to((v_3039: IpInfo) =>  {
                        const data_3038 = new DataInOut();
                        IpInfo.META.serialize(ctx, v_3039, data_3038);
                        ctx.sendResultToRemote(reqId_3034, data_3038.toArray());
                        
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
    makeRemote(sCtx_3040: MetaContext): RegistrationRootApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_3040.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_3040.flush();
                
            }
            , getFastMetaContext: () => sCtx_3040, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_3040.makeRemote(meta), getAsymmetricPublicKey: (cryptoLib: CryptoLib): ARFuture<SignedKey> =>  {
                const dataOut_3042 = new DataInOut();
                dataOut_3042.writeByte(3);
                const argsNames_3044: string[] = ["cryptoLib"];
                const argsValues_3045: any[] = [cryptoLib];
                const result_3043 = ARFuture.of<SignedKey>();
                sCtx_3040.invokeRemoteMethodAfter("getAsymmetricPublicKey", result_3043, argsNames_3044, argsValues_3045);
                const reqId_3041 = sCtx_3040.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_3043 as ARFuture<SignedKey>).tryDone(SignedKey.META.deserialize(sCtx_3040, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_3043.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_3042.writeInt(reqId_3041);
                CryptoLib.META.serialize(sCtx_3040, cryptoLib, dataOut_3042);
                sCtx_3040.sendToRemote(dataOut_3042.toArray());
                return result_3043;
                
            }
            , enter: (cryptoLib: CryptoLib, stream: ServerRegistrationApiStream): void =>  {
                const dataOut_3047 = new DataInOut();
                dataOut_3047.writeByte(4);
                const argsNames_3049: string[] = ["cryptoLib", "stream"];
                const argsValues_3050: any[] = [cryptoLib, stream];
                sCtx_3040.invokeRemoteMethodAfter("enter", null, argsNames_3049, argsValues_3050);
                CryptoLib.META.serialize(sCtx_3040, cryptoLib, dataOut_3047);
                ServerRegistrationApiStream.META.serialize(sCtx_3040, stream, dataOut_3047);
                sCtx_3040.sendToRemote(dataOut_3047.toArray());
                
            }
            , getMyIp: (): ARFuture<IpInfo> =>  {
                const dataOut_3052 = new DataInOut();
                dataOut_3052.writeByte(6);
                const argsNames_3054: string[] = [];
                const argsValues_3055: any[] = [];
                const result_3053 = ARFuture.of<IpInfo>();
                sCtx_3040.invokeRemoteMethodAfter("getMyIp", result_3053, argsNames_3054, argsValues_3055);
                const reqId_3051 = sCtx_3040.regFuture( {
                    onDone: (in_: DataIn) =>  {
                        (result_3053 as ARFuture<IpInfo>).tryDone(IpInfo.META.deserialize(sCtx_3040, in_));
                        
                    }
                    , onError: (_in_: DataIn) =>  {
                        result_3053.error(new AetherException("Remote call failed without a typed exception"));
                        
                    }
                    
                }
                );
                dataOut_3052.writeInt(reqId_3051);
                sCtx_3040.sendToRemote(dataOut_3052.toArray());
                return result_3053;
                
            }
            , openEnter(cryptoLib: CryptoLib, factory: (api: ServerRegistrationApiRemote) => any, converter: BytesConverter, ...keys: any[]): ServerRegistrationApiRemote  {
                return sCtx_3040.findContext(ctx =>  {
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
    makeRemote(sCtx_3056: MetaContext): ClientApiRegSafeRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_3056.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_3056.flush();
                
            }
            , getFastMetaContext: () => sCtx_3056, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_3056.makeRemote(meta), 
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
    makeRemote(sCtx_3057: MetaContext): GlobalRegClientApiRemote  {
        const remoteApiImpl =  {
            destroy: (_force: boolean): AFuture =>  {
                sCtx_3057.close();
                return AFuture.completed();
                
            }
            , flush: (): void =>  {
                sCtx_3057.flush();
                
            }
            , getFastMetaContext: () => sCtx_3057, as: <T, R extends RemoteApi>(meta: FastMetaApi<T, R>): R => sCtx_3057.makeRemote(meta), 
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
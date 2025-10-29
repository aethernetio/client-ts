// =============================================================================================
// FILE: aether_client_types.ts
// PURPOSE: Contains Client State interfaces, helper types/enums, and related implementations.
// DEPENDENCIES: aether_types.ts, aether_logging.ts, aether_utils.ts, aether_future.ts,
//               aether_rcollection.ts, aether_crypto.ts, aether_fastmeta.ts, aether_api.ts
// =============================================================================================

import {
    UUID as BaseUUID, URI as BaseURI, AtomicLong as BaseAtomicLong, AtomicInteger, ConcurrentLinkedQueue_C as BaseConcurrentLinkedQueue_C, Destroyable as BaseDestroyable, AConsumer, AFunction, ABiConsumer,
    ClientStartException as BaseClientStartException, ClientApiException as BaseClientApiException, ClientTimeoutException, ARunnable, Disposable, AtomicReference as BaseAtomicReference,
    Connection as BaseConnection
} from './aether_types';
import { Log, LNode } from './aether_logging';
import { RU, Destroyer, StandardUUIDsImpl, HexUtils } from './aether_utils';
import {
    AFuture, ARFuture, AMFuture, EventConsumer, EventBiConsumer, createAMFuture, ARFutureWithFlag
} from './aether_future';
import { BMap, RCol, RMap } from './aether_rcollection';
import {
    SignedKey as CryptoSignedKey,
    SignChecker,
    CryptoEngine,
    CryptoProviderFactory,
    AKey,
    KeyType,
    SignedKey,
    CryptoKey, // Interface from aether_crypto
    PairKeys as CryptoPairKeys,
    PairSymKeys
} from './aether_crypto';
import {
    FastMetaClient, FastMetaApi, FastApiContext, RemoteApi, RemoteApiFuture, FastApiContextLocal
} from './aether_fastmeta';
import {
    Key as DtoKey, CryptoLib, Cloud, ServerDescriptor, FinishResultGlobalRegServerApi as FinishResult_C, // DTO Key from aether_api
    WorkProofDTO, PowMethod, Message, AccessGroup, ClientInfo as ClientInfoDTO,
    SignedKey as DtoSignedKey,
    AetherCodec,
    UUIDAndCloud,
    ClientStateForSave,
    ClientApiUnsafe, LoginApi, LoginApiRemote, RegistrationRootApi, RegistrationRootApiRemote,
    ClientApiRegUnsafe,
    ServerRegistrationApi, ServerRegistrationApiStream, ServerRegistrationApiRemote,
    GlobalApiRegistrationServerRegistrationApi, GlobalRegClientApi,
    GlobalRegClientApiStream, GlobalRegServerApi, GlobalRegServerApiRemote,
    ClientApiRegSafe, ClientApiRegSafeStream,
    LoginStream, AuthorizedApi, AuthorizedApiRemote, ClientApiSafe,
    ClientApiStream, LoginClientStream,
    ServerApiByUid, ServerApiByUidRemote,
    IPAddressV4, IPAddressV6, IPAddress, AllCustomMeta
} from './aether_api';
import { DataInOut, DataInOutStatic } from './aether_datainout';
import { FastMetaClientWebSocket } from './aether_fastmeta_websocket';


// --- Re-export base types ---
export type UUID = BaseUUID;
export type URI = BaseURI;
export type Destroyable = BaseDestroyable;
export type Connection<LT, RT> = BaseConnection<LT, RT>;
export { BaseClientStartException as ClientStartException };
export { BaseAtomicLong as AtomicLong };
export { BaseAtomicReference as AtomicReference };
export { BaseClientApiException as ClientApiException };
// --- FIX: Ensure ConcurrentLinkedQueue_C export is explicit ---
export { BaseConcurrentLinkedQueue_C as ConcurrentLinkedQueue_C };


// =============================================================================================
// Helper Types / Enums
// =============================================================================================
export enum RegStatus { NO, BEGIN, CONFIRM }

// =============================================================================================
// Client State Interfaces
// =============================================================================================
export interface ClientState {
    getUid(): UUID | null;
    setUid(uid: UUID): void;
    getAlias(): UUID | null;
    setAlias(alias: UUID | null): void;
    setMasterKey(key: DtoKey): void;
    getMasterKey(): DtoKey | null;
    getServerInfo(sid: number): ClientState.ServerInfo;
    getServerDescriptor(serverId: number): ServerDescriptor | null;
    getClientInfo(uid: UUID): ClientState.ClientInfo;
    setCloud(uid: UUID, cloud: Cloud): void;
    getCloud(uid: UUID): Cloud | null;
    getRegistrationUri(): URI[];
    getPingDuration(): AMFuture<number>;
    getParentUid(): UUID;
    setParentUid(uid: UUID): void;
    getCryptoLib(): CryptoLib;
    getRootSigners(): Set<SignChecker>;
    getTimeoutForConnectToRegistrationServer(): number;
    getCountServersForRegistration(): number;
    save(): Uint8Array;
    load(data: Uint8Array): void;
}
export namespace ClientState {
    export interface ServerInfo {
        getServerId(): number;
        getDescriptor(): ServerDescriptor | null;
        setDescriptor(serverDescriptor: ServerDescriptor): void;
    }
    export interface ClientInfo {
        getUid(): UUID;
        getCloud(): Cloud | null;
        setCloud(cloud: Cloud): void;
    }
    export class ServerInfoImpl implements ClientState.ServerInfo {
        readonly sid: number;
        descriptor: ServerDescriptor | null = null;
        constructor(sidOrDescriptor: number | ServerDescriptor) {
            if (typeof sidOrDescriptor === 'number') {
                this.sid = sidOrDescriptor;
            } else {
                 this.sid = sidOrDescriptor.id;
                 this.descriptor = sidOrDescriptor;
            }
        }
        getServerId(): number { return this.sid; }
        getDescriptor(): ServerDescriptor | null { return this.descriptor; }
        setDescriptor(serverDescriptor: ServerDescriptor): void { this.descriptor = serverDescriptor; }
    }
    export class ClientInfoMutable implements ClientState.ClientInfo {
        readonly uid: UUID;
        cloud: Cloud | null = null;
        constructor(uidOrDto: UUID | ClientInfoDTO, cloud?: Cloud) {
             if (BaseUUID && uidOrDto instanceof BaseUUID) {
                this.uid = uidOrDto;
                this.cloud = cloud ?? null;
            } else { // DTO
                 this.uid = (uidOrDto as ClientInfoDTO).uid;
                 this.cloud = (uidOrDto as ClientInfoDTO).cloud;
            }
        }
        getUid(): UUID { return this.uid; }
        getCloud(): Cloud | null { return this.cloud; }
        setCloud(cloud: Cloud): void { this.cloud = cloud; }
    }
}

// --- Re-exports for convenience ---
export { FastMetaClientWebSocket };
export { CryptoSignedKey, SignChecker, CryptoEngine, SignedKey, KeyType, AKey, CryptoKey, CryptoProviderFactory, PairSymKeys };
export { AFuture, ARFuture, AMFuture, EventConsumer, EventBiConsumer, ARFutureWithFlag, createAMFuture };
export { BMap, RCol, RMap };
export { Log, LNode };
export { Destroyer, RU, StandardUUIDsImpl, HexUtils };
export { DataInOut, DataInOutStatic };
export { FastMetaClient, FastMetaApi, RemoteApi, RemoteApiFuture, FastApiContext, FastApiContextLocal };
export { DtoKey, CryptoLib, Cloud, ServerDescriptor, FinishResult_C, WorkProofDTO, PowMethod, Message, AccessGroup, ClientInfoDTO, DtoSignedKey, AetherCodec, UUIDAndCloud, ClientStateForSave, ClientApiUnsafe, LoginApi, LoginApiRemote, RegistrationRootApi, RegistrationRootApiRemote, ClientApiRegUnsafe, ServerRegistrationApi, ServerRegistrationApiStream, ServerRegistrationApiRemote, GlobalApiRegistrationServerRegistrationApi, GlobalRegClientApi, GlobalRegClientApiStream, GlobalRegServerApi, GlobalRegServerApiRemote, ClientApiRegSafe, ClientApiRegSafeStream, LoginStream, AuthorizedApi, AuthorizedApiRemote, ClientApiSafe, ClientApiStream, LoginClientStream, ServerApiByUid, ServerApiByUidRemote, IPAddressV4, IPAddressV6, IPAddress, AllCustomMeta };
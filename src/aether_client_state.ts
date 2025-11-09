// FILE: aether_client_state.ts
// PURPOSE: Contains the implementation of ClientStateInMemory.

import { ClientInfo, ClientStateForSave, Cloud, CryptoLib, Key, ServerDescriptor } from "./aether_api";
import {
    AString,
} from "./aether_astring";
import { AKey, KeyType, SignChecker } from "./aether_crypto";
import { CryptoUtils } from "./aether_crypto_utils";
import { DataInOut, DataInOutStatic } from "./aether_datainout";
import { AMFuture } from "./aether_future";
import { Log } from "./aether_logging";
import { URI, UUID } from "./aether_types";
import { StandardUUIDs } from "./aether_utils";

/**
 * @class ClientStateInMemory
 * @implements {ClientState}
 * @description In-memory implementation of ClientState for temporary storage of client configuration and data.
 */
export class ClientStateInMemory implements ClientState {

    /**
     * @private
     * @type {(UUID | null)}
     */
    private uid: UUID | null = null;

    /**
     * @private
     * @type {(UUID | null)}
     */
    private alias: UUID | null = null;

    /**
     * @private
     * @type {(Key | null)}
     */
    private masterKey: Key | null = null;

    /**
     * @private
     * @type {Map<number, ClientState.ServerInfo>}
     */
    private servers = new Map<number, ClientState.ServerInfo>();

    /**
     * @private
     * @type {Map<string, ClientState.ClientInfoMutable>}
     */
    private clients = new Map<string, ClientState.ClientInfoMutable>();

    /**
     * @private
     * @type {URI[]}
     */
    private registrationUris: URI[] = [];

    /**
     * @private
     * @type {AMFuture<number>}
     */
    private pingDuration = AMFuture.completed(1000);

    /**
     * @private
     * @type {UUID}
     */
    private parentUid: UUID;

    /**
     * @private
     * @type {CryptoLib}
     */
    private cryptoLib: CryptoLib =
        CryptoLib.HYDROGEN;

    /**
     * @private
     * @type {Map<string, SignChecker>}
     * @description A map used as a unique-by-content Set for trusted root signers.
     * The key is the uppercase string representation of the public key (provider:data),
     * which ensures proper uniqueness mirroring Java's hashCode/equals logic for keys.
     */
    private rootSigners = new Map<string, SignChecker>();

    /**
     * @private
     * @type {number}
     */
    private timeoutForConnectToRegistrationServer = 5000;

    /**
     * @private
     * @type {number}
     */
    private countServersForRegistration = 1;

    /**
     * @constructor
     * @param {UUID | Uint8Array | null} arg1 Parent UUID, loaded state data (Uint8Array), or null/undefined.
     * @param {URI[] | undefined} arg2 Registration URIs.
     * @param {Set<SignChecker> | undefined} arg3 Optional set of initial root signers.
     * @param {CryptoLib | undefined} arg4 Optional CryptoLib preference.
     */
    constructor(
        arg1: UUID | Uint8Array | null,
        arg2?: URI[],
        arg3?: Set<SignChecker>,
        arg4?: CryptoLib
    ) {
        const BaseUUID = StandardUUIDs.ROOT_UID.constructor;
        if (arg1 instanceof Uint8Array) {
            this.parentUid = StandardUUIDs.ANONYMOUS_UID;
            this.load(arg1);
        } else if (BaseUUID && arg1 instanceof BaseUUID && arg2 instanceof Array) {
            if (!arg1) throw new Error("Parent UID cannot be null");
            this.parentUid = arg1;
            this.registrationUris = arg2.slice();
            this.uid = null;
            this.cryptoLib = arg4 ?? CryptoLib.SODIUM;

            if (arg3) {
                for (const signer of arg3) {
                    this.addSigner(signer);
                }
            }
            this.addDefaultRootSigners();
        } else if (arg1 === null && arg2 instanceof Array) {
            this.parentUid = StandardUUIDs.ANONYMOUS_UID;
            this.registrationUris = arg2.slice();
            this.uid = null;
            this.cryptoLib = arg4 ?? CryptoLib.SODIUM;

            if (arg3) {
                for (const signer of arg3) {
                    this.addSigner(signer);
                }
            }
            this.addDefaultRootSigners();
        } else {
            if (
                arg1 &&
                typeof (arg1 as UUID).toString === "function" &&
                arg2 instanceof Array
            ) {
                Log.warn(
                    "ClientStateInMemory constructor: arg1 seems UUID-like but not instanceof BaseUUID."
                );
                this.parentUid = arg1 as UUID;
                this.registrationUris = arg2.slice();
                this.uid = null;
                this.cryptoLib = arg4 ?? CryptoLib.SODIUM;
                if (arg3) {
                    for (const signer of arg3) {
                        this.addSigner(signer);
                    }
                }
                this.addDefaultRootSigners();
            } else {
                throw new Error("Invalid ClientStateInMemory constructor arguments");
            }
        }
        if (!this.parentUid) {
            this.parentUid = StandardUUIDs.ANONYMOUS_UID;
        }
    }

    /**
     * @private
     * @description Adds default root signers if they are not already present.
     * The expected string format for SignChecker.of() is "PROVIDER:KEY_DATA" (e.g., SODIUM:HEX_DATA).
     * This format is necessary for the SignChecker parsing logic (via CryptoProviderFactory).
     */
    private addDefaultRootSigners(): void {
        const defaultSignerStrings = [
            "SODIUM:4F202A94AB729FE9B381613AE77A8A7D89EDAB9299C3320D1A0B994BA710CCEB",
        ];

        for (const keyString of defaultSignerStrings) {
            try {
                const checker = SignChecker.of(keyString);
                this.addSigner(checker);
            } catch
            (e) {
                Log.error("Failed to add default root signer", e as Error, {
                    keyString,
                });
            }
        }
    }

    /**
     * @private
     * @description Adds a SignChecker to the internal map, ensuring uniqueness based on the public key's string representation.
     * @param {SignChecker} signer The signer to add.
     */
    private addSigner(signer: SignChecker): void {
        const keyString = signer.getPublicKey().keyToString().toUpperCase();
        this.rootSigners.set(keyString,
            signer);
    }


    /** @inheritDoc */
    getUid(): UUID | null {
        return this.uid;
    }

    /** @inheritDoc */
    setUid(uid: UUID): void {
        this.uid = uid;
    }

    /** @inheritDoc */
    getAlias(): UUID | null {
        return this.alias;
    }

    /** @inheritDoc */
    setAlias(alias: UUID | null): void {
        this.alias = alias;
    }

    /** @inheritDoc */
    setMasterKey(key: AKey): void {
        this.masterKey = CryptoUtils.aKeyToDtoKey(key);
    }

    /** @inheritDoc */
    getMasterKey(): AKey | null {
        if(this.masterKey===null)return null;
        return CryptoUtils.dtoKeyToAKey(this.masterKey);
    }

    /** @inheritDoc */
    getServerInfo(sid: number): ClientState.ServerInfo {
        if
            (!this.servers.has(sid)) {
            this.servers.set(sid, new ClientState.ServerInfoImpl(sid));
        }
        return this.servers.get(sid)!;
    }

    /** @inheritDoc */
    getServerInfoAll(): Iterable<ClientState.ServerInfo> {
        return this.servers.values();
    }

    /** @inheritDoc */
    getServerDescriptor(serverId: number): ServerDescriptor | null {
        if (serverId <= 0) {
            Log.warn("getServerDescriptor invalid id", {
                serverId
            });
            return null;
        }
        return this.servers.get(serverId)?.getDescriptor() ?? null;
    }

    /** @inheritDoc */
    getClientInfo(uid: UUID): ClientState.ClientInfoMutable {
        const key = uid.toString().toString();
        if (!this.clients.has(key)) {
            this.clients.set(key, new ClientState.ClientInfoMutable(uid));
        }
        return this.clients.get(key)!;
    }

    /** @inheritDoc */
    getClientInfoAll(): Iterable<ClientState.ClientInfoMutable> {
        return this.clients.values();
    }

    /** @inheritDoc */
    setCloud(uid: UUID, cloud: Cloud):
        void {
        this.getClientInfo(uid).setCloud(cloud);
    }

    /** @inheritDoc */
    getCloud(uid: UUID): Cloud | null {
        if (!uid) {
            Log.warn("getCloud called with null/undefined UID");
            return null;
        }
        return this.getClientInfo(uid).getCloud();
    }

    /** @inheritDoc */
    getRegistrationUri(): URI[] {
        return [...this.registrationUris];
    }

    /** @inheritDoc */
    getPingDuration(): AMFuture<number> {
        return this.pingDuration;
    }

    /** @inheritDoc */
    getParentUid(): UUID {
        return this.parentUid;
    }

    /** @inheritDoc */
    setParentUid(uid: UUID): void {
        this.parentUid = uid;
    }

    /** @inheritDoc */
    getCryptoLib(): CryptoLib {
        return this.cryptoLib;
    }

    /** @inheritDoc */
    getRootSigners(): Set<SignChecker> {
        return new Set(this.rootSigners.values());
    }

    /** @inheritDoc */
    getTimeoutForConnectToRegistrationServer(): number {
        return this.timeoutForConnectToRegistrationServer;
    }

    /** @inheritDoc */
    getCountServersForRegistration(): number {
        return this.countServersForRegistration;
    }

    /** @inheritDoc */
    save(): Uint8Array {
        if (!this.uid || !this.alias || !this.masterKey || !this.parentUid) {
            throw new Error(`Client state incomplete`);
        }

        const dtoRootSigners: Key[] = [];
        for (const rs of this.rootSigners.values()) {
            try {
                const aKey: AKey.SignPublic = rs.getPublicKey();
                const dtoKey = CryptoUtils.aKeyToDtoKey(aKey);
                if (dtoKey) {
                    dtoRootSigners.push(dtoKey);
                } else {
                    Log.warn("Failed to convert root signer AKey to DTO Key structure", {
                        keyString: aKey.keyToString(),
                    });
                }
            } catch (e) {
                Log.error(
                    "Failed to convert root signer public key during save",
                    e as Error
                );
            }
        }

        const dto = new ClientStateForSave(
            this.registrationUris.slice(),
            Array.from(this.servers.values())
                .map((s) => s.getDescriptor())
                .filter((d): d is ServerDescriptor => d !== null),
            Array.from(this.clients.values())
                .filter((c) => c.getCloud() !== null)
                .map((c) => new ClientInfo(c.getUid(), c.getCloud()!)),
            dtoRootSigners,
            this.cryptoLib,
            BigInt(this.pingDuration.getNow() ?? 1000),
            this.parentUid,
            this.countServersForRegistration,
            BigInt(this.timeoutForConnectToRegistrationServer),
            this.uid,
            this.alias,
            this.masterKey
        );

        const d = new DataInOut();
        ClientStateForSave.META.serialize(null, dto, d);
        return d.toArray();
    }

    /** @inheritDoc */
    load(data: Uint8Array): void {
        try {
            const dto = ClientStateForSave.META.deserialize(
                null,
                new DataInOutStatic(data)
            );
            this.uid = dto.uid;
            this.alias = dto.alias;
            this.parentUid = dto.parentUid;
            this.masterKey = dto.masterKey;
            this.cryptoLib = dto.cryptoLib;
            this.countServersForRegistration = dto.countServersForRegistration;
            this.timeoutForConnectToRegistrationServer =
                Number(dto.timeoutForConnectToRegistrationServer);
            this.pingDuration.set(Number(dto.pingDuration));
            this.registrationUris = dto.registrationUri.slice();
            this.servers.clear();
            dto.servers.forEach((sd: ServerDescriptor) =>
                this.getServerInfo(sd.id).setDescriptor(sd)
            );
            this.clients.clear();
            dto.clients.forEach((ci: ClientInfo) =>
                this.getClientInfo(ci.uid).setCloud(ci.cloud)
            );

            this.rootSigners.clear();
            dto.rootSigners.forEach((k: Key) => {
                let keyStringForError = "unknown DTO Key";
                try {
                    if (typeof k.toString === "function" &&
                        k.toString.length === 1) {
                        const sb = AString.of();
                        k.toString(sb);
                        keyStringForError = sb.toString();
                    } else if (typeof k.toString === "function") {
                        let sb = AString.of();
                        (k.toString as (s: AString) => void)(sb);

                        keyStringForError = sb.toString();
                    }
                    else {
                        keyStringForError = `DTOKey(TypeID:${k.getAetherTypeId()})`;
                    }

                    const akey: AKey = CryptoUtils.dtoKeyToAKey(k);

                    if (akey && akey.getKeyType() === KeyType.SIGN_PUBLIC) {
                        const checker = akey.asSignPublicKey().toSignChecker();
                        if (checker) {
                            this.addSigner(checker);
                        } else {
                            Log.warn("Could not create SignChecker from loaded AKey", {
                                key: akey.keyToString(),
                            });
                        }
                    } else {
                        Log.warn("Loaded root signer is not SIGN_PUBLIC", {
                            key: akey?.keyToString() ?? keyStringForError,
                        });
                    }
                } catch (e) {
                    Log.error("Failed to load/convert root signer DTO Key", e as Error, {
                        key: keyStringForError,
                    });
                }
            });
            this.addDefaultRootSigners();
            if (!this.parentUid) {
                this.parentUid = StandardUUIDs.ANONYMOUS_UID;
            }
        } catch (e) {
            Log.error("Failed to load client state", e as Error);
            throw new Error(`Unparsable state: ${(e as Error).message}`);
        }
    }
}

/**
 * @interface ClientState
 * @description Defines the contract for managing client-side state, including identity, keys, server/client info, and persistence.
 */
export interface ClientState {
    /**
     * @description Gets the client's unique identifier (UID).
     * @returns {UUID | null} The client's UID, or null if not registered.
     */
    getUid(): UUID | null;

    /**
     * @description Sets the client's unique identifier (UID).
     * @param {UUID} uid The UID to set.
     */
    setUid(uid: UUID): void;

    /**
     * @description Gets the client's alias UID.
     * @returns {UUID | null} The client's alias, or null if not set.
     */
    getAlias(): UUID | null;

    /**
     * @description Sets the client's alias UID.
     * @param {UUID | null} alias The alias to set.
     */
    setAlias(alias: UUID | null): void;

    /**
     * @description Sets the client's master symmetric key.
     * @param {AKey} key The master key.
     */
    setMasterKey(key: AKey): void;

    /**
     * @description Gets the client's master symmetric key.
     * @returns {AKey | null} The master key, or null if not set.
     */
    getMasterKey(): AKey | null;

    /**
     * @description Gets or creates cached information for a specific server.
     * @param {number} sid The server's ID.
     * @returns {ClientState.ServerInfo} The server information object.
     */
    getServerInfo(sid: number): ClientState.ServerInfo;

    /**
     * @description Gets an iterable collection of all cached server information.
     * @returns {Iterable<ClientState.ServerInfo>} An iterable of all server info objects.
     */
    getServerInfoAll(): Iterable<ClientState.ServerInfo>;

    /**
     * @description Gets the ServerDescriptor for a specific server ID, if cached.
     * @param {number} serverId The server's ID.
     * @returns {ServerDescriptor | null} The descriptor, or null if not found.
     */
    getServerDescriptor(serverId: number): ServerDescriptor | null;

    /**
     * @description Gets or creates cached information for a specific client (peer).
     * @param {UUID} uid The client's UID.
     * @returns {ClientState.ClientInfo} The client information object.
     */
    getClientInfo(uid: UUID): ClientState.ClientInfo;

    /**
     * @description Gets an iterable collection of all cached client (peer) information.
     * @returns {Iterable<ClientState.ClientInfo>} An iterable of all client info objects.
     */
    getClientInfoAll(): Iterable<ClientState.ClientInfo>;

    /**
     * @description Caches the Cloud (server list) for a specific client (peer).
     * @param {UUID} uid The client's UID.
     * @param {Cloud} cloud The Cloud object to cache.
     */
    setCloud(uid: UUID, cloud: Cloud): void;

    /**
     * @description Gets the cached Cloud (server list) for a specific client (peer).
     * @param {UUID} uid The client's UID.
     * @returns {Cloud | null} The cached Cloud, or null if not found.
     */
    getCloud(uid: UUID): Cloud | null;

    /**
     * @description Gets the list of registration server URIs.
     * @returns {URI[]} An array of registration URIs.
     */
    getRegistrationUri(): URI[];

    /**
     * @description Gets the configured ping duration.
     * @returns {AMFuture<number>} A future containing the ping duration in milliseconds.
     */
    getPingDuration(): AMFuture<number>;

    /**
     * @description Gets the UID of the parent client.
     * @returns {UUID} The parent's UID.
     */
    getParentUid(): UUID;

    /**
     * @description Sets the UID of the parent client.
     * @param {UUID} uid The parent's UID.
     */
    setParentUid(uid: UUID): void;

    /**
     * @description Gets the preferred cryptographic library.
     * @returns {CryptoLib} The crypto library enum.
     */
    getCryptoLib(): CryptoLib;

    /**
     * @description Gets the set of trusted root signing keys.
     * @returns {Set<SignChecker>} A set of root SignCheckers.
     */
    getRootSigners(): Set<SignChecker>;

    /**
     * @description Gets the timeout for connecting to a registration server.
     * @returns {number} Timeout in milliseconds.
     */
    getTimeoutForConnectToRegistrationServer(): number;

    /**
     * @description Gets the number of registration servers to try connecting to.
     * @returns {number} The count of servers.
     */
    getCountServersForRegistration(): number;

    /**
     * @description Serializes the entire client state into a byte array.
     * @returns {Uint8Array} The serialized state.
     */
    save(): Uint8Array;

    /**
     * @description Loads and deserializes the client state from a byte array.
     * @param {Uint8Array} data The serialized state.
     */
    load(data: Uint8Array): void;
}

/**
 * @namespace ClientState
 * @description Contains nested interfaces and classes related to ClientState.
 */
export namespace ClientState {
    /**
     * @interface ServerInfo
     * @description Defines the contract for storing server-specific information.
     */
    export interface ServerInfo {
        /**
         * @description Gets the server's ID.
         * @returns {number} The server ID.
         */
        getServerId(): number;

        /**
         * @description Gets the server's descriptor.
         * @returns {ServerDescriptor | null} The descriptor, or null if not set.
         */
        getDescriptor(): ServerDescriptor | null;

        /**
         * @description Sets the server's descriptor.
         * @param {ServerDescriptor} serverDescriptor The descriptor to set.
         */
        setDescriptor(serverDescriptor: ServerDescriptor): void;
    }

    /**
     * @interface ClientInfo
     * @description Defines the contract for storing peer-specific information.
     */
    export interface ClientInfo {
        /**
         * @description Gets the peer's UID.
         * @returns {UUID} The peer's UID.
         */
        getUid(): UUID;

        /**
         * @description Gets the peer's Cloud object.
         * @returns {Cloud | null} The Cloud, or null if not set.
         */
        getCloud(): Cloud | null;

        /**
         * @description Sets the peer's Cloud object.
         * @param {Cloud} cloud The Cloud to set.
         */
        setCloud(cloud: Cloud): void;
    }

    /**
     * @class ServerInfoImpl
     * @implements {ClientState.ServerInfo}
     * @description Mutable implementation of ServerInfo.
     */
    export class ServerInfoImpl implements ClientState.ServerInfo {
        /**
         * @description The server's ID.
         */
        readonly sid: number;

        /**
         * @description The server's descriptor.
         */
        descriptor: ServerDescriptor | null = null;

        /**
         * @constructor
         * @param {number | ServerDescriptor} sidOrDescriptor Either the server ID or the full descriptor.
         */
        constructor(sidOrDescriptor: number | ServerDescriptor) {
            if (typeof sidOrDescriptor === 'number') {
                this.sid = sidOrDescriptor;
            } else {
                this.sid = sidOrDescriptor.id;
                this.descriptor = sidOrDescriptor;
            }
        }

        /** @inheritDoc */
        getServerId(): number { return this.sid; }

        /** @inheritDoc */
        getDescriptor(): ServerDescriptor | null { return this.descriptor; }

        /** @inheritDoc */
        setDescriptor(serverDescriptor: ServerDescriptor): void { this.descriptor = serverDescriptor; }
    }

    /**
     * @class ClientInfoMutable
     * @implements {ClientState.ClientInfo}
     * @description Mutable implementation of ClientInfo.
     */
    export class ClientInfoMutable implements ClientState.ClientInfo {
        /**
         * @description The peer's UID.
         */
        readonly uid: UUID;

        /**
         * @description The peer's Cloud object.
         */
        cloud: Cloud | null = null;

        /**
         * @constructor
         * @param {UUID | ClientInfo} uidOrDto Either the peer's UID or a DTO object.
         * @param {Cloud} [cloud] Optional cloud object if constructing with a UID.
         */
        constructor(uidOrDto: UUID | ClientInfo, cloud?: Cloud) {
            if (UUID && uidOrDto instanceof UUID) {
                this.uid = uidOrDto;
                this.cloud = cloud ?? null;
            } else {
                this.uid = (uidOrDto as ClientInfo).getUid();
                this.cloud = (uidOrDto as ClientInfo).getCloud();
            }
        }

        /** @inheritDoc */
        getUid(): UUID { return this.uid; }

        /** @inheritDoc */
        getCloud(): Cloud | null { return this.cloud; }

        /** @inheritDoc */
        setCloud(cloud: Cloud): void { this.cloud = cloud; }
    }
}
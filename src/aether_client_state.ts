// FILE: aether_client_state.ts
// PURPOSE: Contains the implementation of ClientStateInMemory.

import {
    UUID,
    URI,
    DtoKey,
    CryptoLib,
    SignChecker,
    ServerDescriptor,
    ClientInfoDTO,
    ClientStateForSave,
    ClientState,
    Log,
    StandardUUIDsImpl,
    AKey,
    KeyType,
    DataInOut,
    DataInOutStatic,
    createAMFuture,
    AMFuture,
    Cloud,
} from "./aether_client_types";
import {
    AString,
} from "./aether_astring";
import {
    dtoKeyToAKey,
    aKeyToDtoKey
} from './aether_key_util';

/**
 * @class ClientStateInMemory
 * @implements {ClientState}
 * @description In-memory implementation of ClientState for temporary storage of client configuration and data.
 */
export class ClientStateInMemory implements ClientState {

    private uid: UUID | null = null;
    private alias: UUID | null = null;
    private masterKey: DtoKey | null = null;
    private servers = new Map<number, ClientState.ServerInfo>();
    private clients = new Map<string, ClientState.ClientInfoMutable>();
    private registrationUris: URI[] = [];
    private pingDuration = createAMFuture<number>(1000);
    private parentUid: UUID;
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

    private timeoutForConnectToRegistrationServer = 5000;
    private countServersForRegistration = 1;

    /**
     * @constructor
     * @param {UUID | Uint8Array | null} arg1 Parent UUID, loaded state data (Uint8Array), or null/undefined.
     * @param {URI[] | undefined} arg2 Registration URIs.
     * @param {Set<SignChecker> | undefined} arg3 Optional set of
  initial root signers.
     * @param {CryptoLib | undefined} arg4 Optional CryptoLib preference.
     */
    constructor(
        arg1: UUID | Uint8Array | null,
        arg2?: URI[],
        arg3?: Set<SignChecker>,
        arg4?: CryptoLib
    ) {
        const BaseUUID = StandardUUIDsImpl.ROOT_UID.constructor;
        if (arg1 instanceof Uint8Array) {
            this.parentUid = StandardUUIDsImpl.ANONYMOUS_UID;
            this.load(arg1);
        } else if (BaseUUID && arg1 instanceof BaseUUID && arg2 instanceof Array) {
            if (!arg1) throw new Error("Parent UID cannot be null");
            this.parentUid = arg1;
            this.registrationUris = arg2.slice();
            this.uid = null;
            /** Set default cryptoLib to SODIUM */
            this.cryptoLib = arg4 ?? CryptoLib.SODIUM;

            if (arg3) {
                // Add initial signers from arguments, ensuring uniqueness via Map
                for (const signer of arg3) {
                    this.addSigner(signer);
                }
            }
            this.addDefaultRootSigners();
        } else if (arg1 === null && arg2 instanceof Array) {
            this.parentUid = StandardUUIDsImpl.ANONYMOUS_UID;
            this.registrationUris = arg2.slice();
            this.uid = null;
            /** Set default cryptoLib to SODIUM */
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
                /** Set default cryptoLib to SODIUM */
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
            this.parentUid = StandardUUIDsImpl.ANONYMOUS_UID;
        }
    }

    /**
     * @private
     * @description Adds default root signers if they are not already present.
     * The expected string format for SignChecker.of() is "PROVIDER:KEY_DATA" (e.g., SODIUM:HEX_DATA).
     * This format is necessary for the SignChecker parsing logic (via CryptoProviderFactory).
     */
    private addDefaultRootSigners(): void {
        // Expected format: PROVIDER:KEY_HEX_DATA
        const defaultSignerStrings = [
            /** Only keep SODIUM key, remove HYDROGEN and STUB keys */
            "SODIUM:4F202A94AB729FE9B381613AE77A8A7D89EDAB9299C3320D1A0B994BA710CCEB",
        ];

        for (const keyString of defaultSignerStrings) {
            try {
                const checker = SignChecker.of(keyString);
                this.addSigner(checker); // Add using helper method
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
        // Use the public key's full string representation as the unique map key
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
    setMasterKey(key: DtoKey): void {
        this.masterKey = key;
    }
    /** @inheritDoc */
    getMasterKey(): DtoKey | null {
        return this.masterKey;
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
        // Returns a Set of the values from the internal Map to match the interface contract.
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

        const dtoRootSigners: DtoKey[] = [];
        // Iterate through Map values
        for (const rs of this.rootSigners.values()) {
            try {
                const aKey: AKey.SignPublic = rs.getPublicKey();
                const dtoKey = aKeyToDtoKey<DtoKey>(aKey);
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
                .map((c) => new ClientInfoDTO(c.getUid(), c.getCloud()!)),
            dtoRootSigners,
            this.cryptoLib,
            this.pingDuration.getNow() ?? 1000,
            this.parentUid,
            this.countServersForRegistration,
            this.timeoutForConnectToRegistrationServer,
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
                dto.timeoutForConnectToRegistrationServer;
            this.pingDuration.set(dto.pingDuration);
            this.registrationUris = dto.registrationUri.slice();
            this.servers.clear();
            dto.servers.forEach((sd: ServerDescriptor) =>
                this.getServerInfo(sd.id).setDescriptor(sd)
            );
            this.clients.clear();
            dto.clients.forEach((ci: ClientInfoDTO) =>
                this.getClientInfo(ci.uid).setCloud(ci.cloud)
            );

            this.rootSigners.clear();
            dto.rootSigners.forEach((k: DtoKey) => {
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

                    const akey: AKey = dtoKeyToAKey(k);

                    if (akey && akey.getKeyType() === KeyType.SIGN_PUBLIC) {
                        const checker = akey.asSignPublicKey().toSignChecker();
                        if (checker) {
                            this.addSigner(checker); // Use helper to add to map
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
                this.parentUid = StandardUUIDsImpl.ANONYMOUS_UID;
            }
        } catch (e) {
            Log.error("Failed to load client state", e as Error);
            throw new Error(`Unparsable state: ${(e as Error).message}`);
        }
    }
}
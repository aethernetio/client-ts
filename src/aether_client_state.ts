// =============================================================================================
// FILE: aether_client_state.ts
// PURPOSE: Contains the implementation of ClientStateInMemory.
// DEPENDENCIES: aether_client_types.ts, aether_datainout.ts
// =============================================================================================
import {
  UUID,
  URI,
  DtoKey,
  CryptoLib,
  SignChecker,
  ServerDescriptor,
  UUIDAndCloud,
  ClientInfoDTO,
  ClientStateForSave,
  ClientState,
  Log,
  RU,
  Destroyer,
  StandardUUIDsImpl,
  AKey,
  KeyType,
  DataInOut,
  DataInOutStatic, // Removed KeyUtil
  createAMFuture,
  AMFuture,
  CryptoKey,
  Cloud,
  CryptoProviderFactory, // Added CryptoProviderFactory
} from "./aether_client_types";
import { AStringBase } from "./aether_astring";
// --- FIX: Import concrete DTO Key classes for instanceof checks ---
import {
  SodiumChacha20Poly1305,
  HydrogenSecretBox,
  SodiumCurvePublic,
  HydrogenCurvePublic,
  SodiumCurvePrivate,
  HydrogenCurvePrivate,
  SodiumSignPublic,
  HydrogenSignPublic,
  SodiumSignPrivate,
  HydrogenSignPrivate,
} from "./aether_api";
// --- End Fix ---

// --- Helper Function for DTO Key -> AKey Conversion (like KeyUtil.of(Key)) ---
function dtoKeyToAKey(key: DtoKey): AKey {
  let providerName: string | undefined = undefined;
  let keyType: KeyType | undefined = undefined;
  const data = (key as any).data as Uint8Array; // Assume data property exists

  if (!data || !(data instanceof Uint8Array)) {
    throw new Error(`DTO Key is missing valid data property.`);
  }

  // Determine Provider and KeyType using instanceof
  if (key instanceof SodiumChacha20Poly1305) {
    providerName = "SODIUM";
    keyType = KeyType.SYMMETRIC;
  } else if (key instanceof HydrogenSecretBox) {
    providerName = "HYDROGEN";
    keyType = KeyType.SYMMETRIC;
  } else if (key instanceof SodiumCurvePublic) {
    providerName = "SODIUM";
    keyType = KeyType.ASYMMETRIC_PUBLIC;
  } else if (key instanceof HydrogenCurvePublic) {
    providerName = "HYDROGEN";
    keyType = KeyType.ASYMMETRIC_PUBLIC;
  } else if (key instanceof SodiumCurvePrivate) {
    providerName = "SODIUM";
    keyType = KeyType.ASYMMETRIC_PRIVATE;
  } else if (key instanceof HydrogenCurvePrivate) {
    providerName = "HYDROGEN";
    keyType = KeyType.ASYMMETRIC_PRIVATE;
  } else if (key instanceof SodiumSignPublic) {
    providerName = "SODIUM";
    keyType = KeyType.SIGN_PUBLIC;
  } else if (key instanceof HydrogenSignPublic) {
    providerName = "HYDROGEN";
    keyType = KeyType.SIGN_PUBLIC;
  } else if (key instanceof SodiumSignPrivate) {
    providerName = "SODIUM";
    keyType = KeyType.SIGN_PRIVATE;
  } else if (key instanceof HydrogenSignPrivate) {
    providerName = "HYDROGEN";
    keyType = KeyType.SIGN_PRIVATE;
  }
  // Add STUB checks if needed

  if (providerName && keyType !== undefined) {
    const provider = CryptoProviderFactory.getProvider(providerName);
    return provider.createKey(keyType, data);
  } else {
    const className = (key.constructor as any).name;
    Log.error(`dtoKeyToAKey: Could not determine provider/type`, undefined, {
      className,
    });
    throw new Error(`Unsupported DTO Key type: ${className}`);
  }
}

// --- Helper Function for AKey -> DTO Key Conversion (like KeyUtil.of<DtoKey>(AKey)) ---
function aKeyToDtoKey<T extends DtoKey>(key: AKey): T {
  const providerName = key.getProviderName().toLowerCase();
  const keyType = key.getKeyType();
  const data = key.getData();

  // Use instanceof checks based on provider and type to construct DTO
  // This relies on the imported DTO constructors
  switch (providerName) {
    case "sodium":
      switch (keyType) {
        case KeyType.SYMMETRIC:
          return new SodiumChacha20Poly1305(data) as unknown as T;
        case KeyType.ASYMMETRIC_PUBLIC:
          return new SodiumCurvePublic(data) as unknown as T;
        case KeyType.ASYMMETRIC_PRIVATE:
          return new SodiumCurvePrivate(data) as unknown as T;
        case KeyType.SIGN_PUBLIC:
          return new SodiumSignPublic(data) as unknown as T;
        case KeyType.SIGN_PRIVATE:
          return new SodiumSignPrivate(data) as unknown as T;
      }
      break;
    case "hydrogen":
      switch (keyType) {
        case KeyType.SYMMETRIC:
          return new HydrogenSecretBox(data) as unknown as T;
        case KeyType.ASYMMETRIC_PUBLIC:
          return new HydrogenCurvePublic(data) as unknown as T;
        case KeyType.ASYMMETRIC_PRIVATE:
          return new HydrogenCurvePrivate(data) as unknown as T;
        case KeyType.SIGN_PUBLIC:
          return new HydrogenSignPublic(data) as unknown as T;
        case KeyType.SIGN_PRIVATE:
          return new HydrogenSignPrivate(data) as unknown as T;
      }
      break;
    case "stub": // Handle stub conversion if needed
      // Depending on how you want to handle stub DTOs, you might:
      // 1. Create specific Stub DTO classes (not recommended if avoiding dependencies)
      // 2. Return a generic object matching DtoKey structure (might fail runtime checks)
      // 3. Throw an error
      Log.warn("aKeyToDtoKey: Conversion for STUB provider is approximate.");
      // Return a placeholder structure
      const stubDto = {
        getAetherTypeId: () => -99,
        getData: () => data,
        getProviderName: () => "STUB",
        getCryptoProvider: () => key.getCryptoProvider(),
        toString: (r: any) => r.add(`StubDtoKey(${key.keyToString()})`),
      } as unknown as T;
      return stubDto;
  }
  throw new Error(
    `Unsupported AKey for DTO conversion: Provider ${providerName}, Type ${KeyType[keyType]}`
  );
}

// --- ClientStateInMemory Implementation ---
export class ClientStateInMemory implements ClientState {
  // <-- EXPORTED
  private uid: UUID | null = null;
  private alias: UUID | null = null;
  private masterKey: DtoKey | null = null;
  private servers = new Map<number, ClientState.ServerInfo>();
  private clients = new Map<string, ClientState.ClientInfoMutable>();
  private registrationUris: URI[] = [];
  private pingDuration = createAMFuture<number>(1000);
  private parentUid: UUID;
  private cryptoLib: CryptoLib = CryptoLib.HYDROGEN;
  private rootSigners: Set<SignChecker> = new Set();
  private timeoutForConnectToRegistrationServer = 5000;
  private countServersForRegistration = 1;

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
      this.cryptoLib = arg4 ?? CryptoLib.HYDROGEN;
      if (arg3) this.rootSigners = new Set(arg3);
      this.addDefaultRootSigners();
    } else if (arg1 === null && arg2 instanceof Array) {
      this.parentUid = StandardUUIDsImpl.ANONYMOUS_UID;
      this.registrationUris = arg2.slice();
      this.uid = null;
      this.cryptoLib = arg4 ?? CryptoLib.HYDROGEN;
      if (arg3) this.rootSigners = new Set(arg3);
      this.addDefaultRootSigners();
    } else {
      if (
        arg1 &&
        typeof (arg1 as any).toString === "function" &&
        arg2 instanceof Array
      ) {
        Log.warn(
          "ClientStateInMemory constructor: arg1 seems UUID-like but not instanceof BaseUUID."
        );
        this.parentUid = arg1 as UUID;
        this.registrationUris = arg2.slice();
        this.uid = null;
        this.cryptoLib = arg4 ?? CryptoLib.HYDROGEN;
        if (arg3) this.rootSigners = new Set(arg3);
        this.addDefaultRootSigners();
      } else {
        throw new Error("Invalid ClientStateInMemory constructor arguments");
      }
    }
    if (!this.parentUid) {
      this.parentUid = StandardUUIDsImpl.ANONYMOUS_UID;
    }
  }

  private addDefaultRootSigners(): void {
    const defaultSigners = [
      "SODIUM:SIGN_PUBLIC:4F202A94AB729FE9B381613AE77A8A7D89EDAB9299C3320D1A0B994BA710CCEB",
      "HYDROGEN:SIGN_PUBLIC:883B4D7E0FB04A38CA12B3A451B00942048858263EE6E6D61150F2EF15F40343",
      "STUB:SIGN_PUBLIC:04",
    ]; // Added KeyType for clarity
    const existingKeys = new Set(
      Array.from(this.rootSigners).map((s) =>
        s.getPublicKey().keyToString().toUpperCase()
      )
    ); // Store uppercase for comparison

    for (const keyString of defaultSigners) {
      // Compare full key string (case-insensitive)
      if (!existingKeys.has(keyString.toUpperCase())) {
        try {
          this.rootSigners.add(SignChecker.of(keyString));
        } catch (e) {
          Log.error("Failed to add default root signer", e as Error, {
            keyString,
          });
        }
      }
    }
  }

  getUid(): UUID | null {
    return this.uid;
  }
  setUid(uid: UUID): void {
    this.uid = uid;
  }
  getAlias(): UUID | null {
    return this.alias;
  }
  setAlias(alias: UUID | null): void {
    this.alias = alias;
  }
  setMasterKey(key: DtoKey): void {
    this.masterKey = key;
  }
  getMasterKey(): DtoKey | null {
    return this.masterKey;
  }
  getServerInfo(sid: number): ClientState.ServerInfo {
    if (!this.servers.has(sid)) {
      this.servers.set(sid, new ClientState.ServerInfoImpl(sid));
    }
    return this.servers.get(sid)!;
  }
  getServerDescriptor(serverId: number): ServerDescriptor | null {
    if (serverId <= 0) {
      Log.warn("getServerDescriptor invalid id", { serverId });
      return null;
    }
    return this.servers.get(serverId)?.getDescriptor() ?? null;
  }
  getClientInfo(uid: UUID): ClientState.ClientInfoMutable {
    const key = uid.toString();
    if (!this.clients.has(key)) {
      this.clients.set(key, new ClientState.ClientInfoMutable(uid));
    }
    return this.clients.get(key)!;
  }
  setCloud(uid: UUID, cloud: Cloud): void {
    this.getClientInfo(uid).setCloud(cloud);
  }
  getCloud(uid: UUID): Cloud | null {
    if (!uid) {
      Log.warn("getCloud called with null/undefined UID");
      return null;
    }
    return this.getClientInfo(uid).getCloud();
  }
  getRegistrationUri(): URI[] {
    return [...this.registrationUris];
  }
  getPingDuration(): AMFuture<number> {
    return this.pingDuration;
  }
  getParentUid(): UUID {
    return this.parentUid;
  }
  setParentUid(uid: UUID): void {
    this.parentUid = uid;
  }
  getCryptoLib(): CryptoLib {
    return this.cryptoLib;
  }
  getRootSigners(): Set<SignChecker> {
    return new Set(this.rootSigners);
  }
  getTimeoutForConnectToRegistrationServer(): number {
    return this.timeoutForConnectToRegistrationServer;
  }
  getCountServersForRegistration(): number {
    return this.countServersForRegistration;
  }

  save(): Uint8Array {
    if (!this.uid || !this.alias || !this.masterKey || !this.parentUid) {
      throw new Error(`Client state incomplete`);
    }

    const dtoRootSigners: DtoKey[] = [];
    for (const rs of this.rootSigners) {
      try {
        const aKey: AKey.SignPublic = rs.getPublicKey();
        // --- FIX: Use dedicated conversion function ---
        const dtoKey = aKeyToDtoKey<DtoKey>(aKey);
        // --- End Fix ---
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
    ClientStateForSave.META.serialize(null as any, dto, d);
    return d.toArray();
  }

  load(data: Uint8Array): void {
    try {
      const dto = ClientStateForSave.META.deserialize(
        null as any,
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
          // Use AStringBase to call DTO's toString
          if (typeof k.toString === "function" && k.toString.length === 1) {
            const sb = AStringBase.ofEmpty();
            k.toString(sb);
            keyStringForError = sb.toString();
          } else if (typeof k.toString === "function") {
            let sb=AStringBase.ofEmpty();
            k.toString(sb)
            keyStringForError =  sb.toString();
          } else {
            keyStringForError = `DTOKey(TypeID:${k.getAetherTypeId()})`;
          }

          // --- FIX: Use dedicated conversion function ---
          const akey: AKey = dtoKeyToAKey(k);
          // --- End Fix ---

          if (akey && akey.getKeyType() === KeyType.SIGN_PUBLIC) {
            const checker = akey.asSignPublicKey().toSignChecker();
            if (checker) {
              this.rootSigners.add(checker);
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

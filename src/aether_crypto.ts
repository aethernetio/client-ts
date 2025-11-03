// =============================================================================================
// FILE: aether.crypto.ts
// PURPOSE: Contains all Cryptographic INTERFACES and the FACTORY.
//          Conversion utilities (like KeyUtil) are REMOVED. Conversions should happen
//          at the point of use via instanceof checks and factory methods.
// DEPENDENCIES: aether.types.ts, aether.logging.ts, aether.utils.ts
// =============================================================================================

import {
    Uint8Array,
} from './aether_types';
import { Log } from './aether_logging';
import { HexUtils, RU } from './aether_utils';
// DTO Key type is used conceptually, but not directly referenced for conversion logic here
import type { Key as DtoKey } from './aether_api';

// =============================================================================================
// SECTION 9: CRYPTO INTERFACES & IMPLEMENTATION
// =============================================================================================

// --- Base Types ---

export interface CryptoProviderUnit { getProviderName(): string; getCryptoProvider(): CryptoProvider; }
/** CryptoKey is the INTERFACE for keys used within the crypto layer abstractly. */
export interface CryptoKey extends CryptoProviderUnit { getData(): Uint8Array; keyToString(): string; }

// --- Exceptions ---
export class EncryptException extends Error {
    constructor(message?: string, cause?: Error) { super(message); this.name = 'EncryptException'; if (cause) this.stack = `${this.stack}\nCaused by: ${cause.stack}`; }
}
export class DecryptException extends Error { constructor(message?: string, cause?: Error) { super(message); this.name = 'DecryptException'; if (cause) this.stack = `${this.stack}\nCaused by: ${cause.stack}`; } }

// --- Enum and Core Interfaces ---
export enum KeyType { SYMMETRIC, ASYMMETRIC_PUBLIC, ASYMMETRIC_PRIVATE, SIGN_PUBLIC, SIGN_PRIVATE }
export interface CryptoEngine extends CryptoProviderUnit { encrypt(data: Uint8Array): Uint8Array; decrypt(data: Uint8Array): Uint8Array; }
export namespace CryptoEngine {
    export function of(encoder: CryptoEngine, decoder: CryptoEngine): CryptoEngine {
        return new class implements CryptoEngine{
            getCryptoProvider(): CryptoProvider {
                return encoder.getCryptoProvider();
            }
            getProviderName(): string {
                return this.getCryptoProvider().getCryptoLibName();
            }
            decrypt(data: Uint8Array): Uint8Array {
                return decoder.decrypt(data);
            }
            encrypt(data: Uint8Array): Uint8Array {
                return encoder.encrypt(data);
            }

        };
    }
}

export interface Sign extends CryptoProviderUnit { getSignData(): Uint8Array; }
export interface SignChecker extends CryptoProviderUnit { checkSign(data: Uint8Array, sign: Sign): boolean; getPublicKey(): AKey.SignPublic; }
export namespace SignChecker { /** Factory moved */ }
export interface Signer extends SignChecker { sign(data: Uint8Array): Sign; sign(key: AKey): Sign; }

// AKey Interface (Abstract crypto layer key)
export interface AKey extends CryptoKey { // Inherits CryptoKey structure
    getKeyType(): KeyType;
    size(): number;
    toSignedKey(signer: Signer): SignedKey;
    toSignedKey(sign: Sign): SignedKey;
    // keyToString inherited from CryptoKey
    asSymmetric(): AKey.Symmetric;
    asAsymmetric(): AKey.AsymmetricPublic;
    asSignPublicKey(): AKey.SignPublic;
    asSignPrivateKey(): AKey.SignPrivate;
}
export namespace AKey {
    export interface Symmetric extends AKey { toCryptoEngine(): CryptoEngine; }
    export interface AsymmetricPublic extends AKey {
        toCryptoEngine(): CryptoEngine;
    }
    export interface AsymmetricPrivate extends AKey { /* No specific methods */ }
    export interface SignPublic extends AKey {
        toSignChecker():
            SignChecker;
    }
    export interface SignPrivate extends AKey { /* No specific methods */ }
    // Factory moved
}

// Pair Interfaces
export interface PairKeys extends CryptoProviderUnit { getPrivateKey(): AKey | null; getPublicKey(): AKey; }
export interface PairSignKeys extends PairKeys { getPublicKey(): AKey.SignPublic; getPrivateKey(): AKey.SignPrivate | null; toSigner(): Signer; }
export interface PairAsymKeys extends PairKeys { getPublicKey(): AKey.AsymmetricPublic; getPrivateKey(): AKey.AsymmetricPrivate; toCryptoEngine(): CryptoEngine; }
export interface PairSymKeys extends CryptoProviderUnit { clientKey: AKey.Symmetric; serverKey: AKey.Symmetric; }

// SignedKey Interface (Uses Abstract AKey/Sign)
export interface SignedKey extends CryptoProviderUnit { readonly key: AKey; readonly sign: Sign; check(signer: AKey.SignPublic): boolean; check(signChecker: SignChecker): boolean; toString(): string; }

// DTO structure for Asymmetrically Signed Key Pair (Uses DTO Key/Sign)
export type DtoPairKeysAsymSigned = {
    getKey(): { getKey(): DtoKey, getSign(): Sign }, getPrivateKey(): DtoKey | null
};

// CryptoProvider Interface
export interface CryptoProvider {
    /**
     * Gets the name of the cryptographic library provided by this implementation.
     */
    getCryptoLibName(): string;
    /**
     * Creates a new pair of asymmetric keys (Public and Private).
     */
    createAsymmetricKeys(): PairAsymKeys;
    /**
     * Creates a symmetric key, optionally initialized with specific bytes.
     * @param bytes Optional bytes to initialize the key with.
     */
    createSymmetricKey(): AKey.Symmetric; createSymmetricKey(bytes: Uint8Array): AKey.Symmetric;
    /**
     * Creates a new pair of signing keys, or from provided data.
     * @param publicKey Optional public key data (Uint8Array or hex string).
     * @param privateKey Optional private key data (Uint8Array or hex string).
     * @param text Optional combined key string.
     */
    createSignKeys(): PairSignKeys; createSignKeys(publicKey: Uint8Array, privateKey: Uint8Array): PairSignKeys; createSignKeys(publicKey: string, privateKey: string): PairSignKeys; createSignKeys(text: string): PairSignKeys;
    /**
     * Creates a SignedKey object from components or a string.
     * @param dataOrKeyTypeOrKey String representation, KeyType, or AKey object.
     * @param keyOrSign Optional key data or Sign object.
     * @param signData Optional signature data.
     */
    createSignedKey(data: string): SignedKey; createSignedKey(keyType: KeyType, key: Uint8Array, sign: Uint8Array): SignedKey; createSignedKey(key: AKey, sign: Sign): SignedKey;
    /**
     * Creates a Signer instance from a key pair or a public key.
     * @param keysOrPublicKey Optional key pair or public key.
     * @param privateKey Optional private key (if publicKey is provided).
     */
    createSigner(): Signer; createSigner(keys: PairSignKeys): Signer; createSigner(publicKey: AKey.SignPublic, privateKey: AKey.SignPrivate): Signer; createSigner(publicKey: AKey.SignPublic): Signer;
    /**
     * Creates a cryptographic engine for symmetric operations.
     * @param key The symmetric key.
     */
    createSymmetricEngine(key: AKey.Symmetric): CryptoEngine;
    /**
     * Creates a cryptographic engine for asymmetric operations (encryption/decryption).
     * @param keyOrPrivateKey The public key (for encryption only) or the private key (for decryption).
     * @param publicKey Optional public key (required if privateKey is provided).
     * @param keys Optional asymmetric key pair.
     */
    createAsymmetricEngine(key: AKey.AsymmetricPublic): CryptoEngine;
    createAsymmetricEngine(privateKey: AKey.AsymmetricPrivate, publicKey: AKey.AsymmetricPublic): CryptoEngine;
    createAsymmetricEngine(keys: PairAsymKeys): CryptoEngine;
    /**
     * Creates an AKey instance from type and data, or from a string representation.
     * @param keyTypeOrString The key type or key string.
     * @param dataOrHex Optional raw key data or hex string.
     */
    createKey<T extends AKey>(keyType: KeyType, data: Uint8Array): T; createKey<T extends AKey>(data: string): T; createKey<T extends AKey>(keyType: KeyType, publicKeyHex: string): T;
    /**
     * Creates a Sign object from raw data or a string representation.
     * @param data Raw signature data or signature string.
     */
    createSign(data: string): Sign; createSign(data: Uint8Array): Sign;
    /**
     * Derives symmetric key pair for server/client communication.
     * @param masterKey The master symmetric key.
     * @param sid The server ID.
     */
    createKeyForServer(masterKey: AKey.Symmetric,
        sid: number): PairSymKeys; createKeyForClient(masterKey: AKey.Symmetric, sid: number): PairSymKeys;
    /**
     * Creates a SignPublic key instance from raw data.
     * @param data Raw key data.
     */
    createSignPublicKey(data: Uint8Array): AKey.SignPublic;
    /**
     * Creates a SignPrivate key instance from raw data.
     * @param data Raw key data.
     */
    createSignPrivateKey(data: Uint8Array): AKey.SignPrivate;
    /**
     * Derives symmetric key pair based on master key, server ID, and a key number.
     * @param masterKey The master symmetric key.
     * @param serverId The server ID.
     * @param keyNumber A numerical index for the subkey derivation.
     */
    deriveSymmetricKeys(masterKey: AKey.Symmetric, serverId: number, keyNumber: number): PairSymKeys;
    // createDtoKey removed from interface
}

export interface Factory { getModuleName(): string; getFactoryType(): string; }

// --- Registry and Factory Implementation ---
const providers: Map<string, CryptoProvider> = new Map();

/**
 * Type guard function to check if an object implements the getProviderName method.
 * @param obj The object to check.
 * @returns True if the object has getProviderName, false otherwise.
 */
function hasGetProviderName(obj: unknown): obj is { getProviderName(): string } {
    return !!obj && typeof (obj as { getProviderName: unknown }).getProviderName === 'function';
}

/**
 * Factory class for managing and retrieving CryptoProvider implementations.
 */
export const CryptoProviderFactory = {
    /**
     * Registers a CryptoProvider instance.
     * @param provider The provider instance to register.
     */
    register: (provider: CryptoProvider): void => { const nameLower = provider.getCryptoLibName().toLowerCase(); if (providers.has(nameLower)) { Log.warn(`CryptoProvider already registered: ${nameLower}. Overwriting.`); } providers.set(nameLower, provider); Log.debug(`Registered CryptoProvider: ${provider.getCryptoLibName()}`); },
    /**
    * Retrieves a registered CryptoProvider by name.
    * @param libName The name of the cryptographic library.
    * @returns The registered CryptoProvider.
    * @throws {Error} If the provider is not registered.
    */
    getProvider: (libName: string): CryptoProvider => {
        const nameLower
            = libName.toLowerCase(); const res = providers.get(nameLower); if (res == null) { throw new Error(`Provider not registered: ${libName}`); } return res;
    },
    /**
     * Retrieves a registered CryptoProvider using a key object.
     * @param key The CryptoKey instance.
     * @returns The associated CryptoProvider.
     * @throws {Error} If the key object is invalid or the provider is not registered.
     */
    getProviderByKey: (key: CryptoKey): CryptoProvider => { // Expects CryptoKey interface
        if (!hasGetProviderName(key)) {
            let keyIdentifier = 'unknown key object';
            if (key && typeof key === 'object') { /* ... provide details ... */ keyIdentifier = `object with keys: ${Object.keys(key).join(', ')}`; }

            throw new Error(`Invalid key object passed to getProviderByKey: missing getProviderName method. Key: ${keyIdentifier}`);
        }
        return CryptoProviderFactory.getProvider(key.getProviderName());
    },
    /**
     * Retrieves a registered CryptoProvider using a Sign object.
     * @param sign The Sign instance.
     * @returns The associated CryptoProvider.
     */
    getProviderBySign: (sign: Sign): CryptoProvider => CryptoProviderFactory.getProvider(sign.getProviderName()),
    /**
     * Returns a set of all registered CryptoProviders.
     * @returns A Set of CryptoProvider instances.
     */
    all: (): Set<CryptoProvider> => new Set(providers.values()),
    /**
     * Returns an array of all registered CryptoProviders.
     * @returns An array of CryptoProvider instances.
     */
    allFlow: (): Array<CryptoProvider> => Array.from(providers.values()),
    /**
     * Creates an AKey instance from provider details or a key string.
     * @param providerNameOrString Provider name, or key string.
     * @param keyType Optional key type.
     * @param data Optional raw key data.
     * @returns The created AKey instance.
     */
    createKey<T extends AKey>(providerNameOrString: string, keyType?: KeyType, data?: Uint8Array): T {
        if (keyType !== undefined && data !== undefined) { const provider = CryptoProviderFactory.getProvider(providerNameOrString); return provider.createKey<T>(keyType, data); } else if (keyType === undefined && data === undefined) {
            const s = providerNameOrString; if (s == null || s.length === 0) { return RU.cast(null); } const parts = s.split(":"); if (parts.length !==
                3) { throw new Error(`Invalid key string format: ${s}`); } const providerName = parts[0]; const provider = CryptoProviderFactory.getProvider(providerName); return provider.createKey<T>(s);
        } throw new Error("Invalid arguments for CryptoProviderFactory.createKey");
    },
    /**
     * Creates a SignChecker instance from a key string.
     * @param s The key string (e.g., "PROVIDER:KEY_HEX").
     * @returns The created SignChecker.
     */
    createSignChecker: (s: string): SignChecker => { if (s == null || s.length === 0) { return RU.cast(null); } const i = s.indexOf(":"); if (i === -1 || s.indexOf(":", i + 1) !== -1) { throw new Error("Invalid SignChecker string format."); } const providerName = s.substring(0, i); const keyHex = s.substring(i + 1); const cp = CryptoProviderFactory.getProvider(providerName); const publicKey = cp.createSignPublicKey(HexUtils.hexToBytes(keyHex)); return cp.createSigner(publicKey); },
    /**
     * Creates a Signer from provider name and key hex strings.
     * @param providerName The name of the provider.
     * @param publicKeyHex The hex string of the public key.
     * @param privateKeyHex The hex string of the private key.
     * @returns The created Signer.
     */
    createSigner: (providerName: string, publicKeyHex: string, privateKeyHex: string): Signer => {
        const p = CryptoProviderFactory.getProvider(providerName); return p.createSigner(p.createSignKeys(publicKeyHex,
            privateKeyHex));
    },
    /**
     * Creates a Set of Signer instances, one for each registered provider.
     * @returns A Set of Signer instances.
     */
    makeSigners: (): Set<Signer> => {
        const res = new Set<Signer>();
        for (const p of CryptoProviderFactory.all()) {
            try {
                res.add(p.createSigner());
            } catch (e) {
                // Skip providers that can't create a default signer
                Log.warn(`Skipping crypto provider ${p.getCryptoLibName()} for signer creation: ${(e as Error).message}`);
            }
        }
        return res;
    }
};

// --- Add static 'of' methods that rely on the factory ---
export namespace SignChecker { export function of(s: string): SignChecker { return CryptoProviderFactory.createSignChecker(s); } }
export namespace AKey { export function of<T extends AKey>(v: string): T { return RU.cast(CryptoProviderFactory.createKey(v)); } }

// =============================================================================================
// UTILS: REMOVED - Conversions handled inline where needed
// =============================================================================================
// KeyUtil REMOVED
// KeySymmetricUtil REMOVED
// SignedKeyUtil REMOVED
// SignUtil REMOVED
// PairSignKeysUtils REMOVED
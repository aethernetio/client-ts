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
// CryptoKey is the INTERFACE for keys used within the crypto layer abstractly.
export interface CryptoKey extends CryptoProviderUnit { getData(): Uint8Array; keyToString(): string; }

// --- Exceptions ---
export class EncryptException extends Error { constructor(message?: string, cause?: Error) { super(message); this.name = 'EncryptException'; if (cause) this.stack = `${this.stack}\nCaused by: ${cause.stack}`; } }
export class DecryptException extends Error { constructor(message?: string, cause?: Error) { super(message); this.name = 'DecryptException'; if (cause) this.stack = `${this.stack}\nCaused by: ${cause.stack}`; } }

// --- Enum and Core Interfaces ---
export enum KeyType { SYMMETRIC, ASYMMETRIC_PUBLIC, ASYMMETRIC_PRIVATE, SIGN_PUBLIC, SIGN_PRIVATE }
export interface CryptoEngine extends CryptoProviderUnit { encrypt(data: Uint8Array): Uint8Array; decrypt(data: Uint8Array): Uint8Array; }
export namespace CryptoEngine { export function of(encoder: CryptoEngine, decoder: CryptoEngine): CryptoEngine { return { encrypt: encoder.encrypt, decrypt: decoder.decrypt, getProviderName: encoder.getProviderName, getCryptoProvider: encoder.getCryptoProvider }; } }
export interface Sign extends CryptoProviderUnit { getSignData(): Uint8Array; }
export interface SignChecker extends CryptoProviderUnit { checkSign(data: Uint8Array, sign: Sign): boolean; getPublicKey(): AKey.SignPublic; }
export namespace SignChecker { /* Factory moved */ }
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
    export interface AsymmetricPublic extends AKey { toCryptoEngine(): CryptoEngine; }
    export interface AsymmetricPrivate extends AKey { /* No specific methods */ }
    export interface SignPublic extends AKey { toSignChecker(): SignChecker; }
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
export type DtoPairKeysAsymSigned = { getPublicKey(): { getKey(): DtoKey, getSign(): Sign }, getPrivateKey(): DtoKey | null };

// CryptoProvider Interface
export interface CryptoProvider {
    getCryptoLibName(): string;
    createAsymmetricKeys(): PairAsymKeys;
    createSymmetricKey(): AKey.Symmetric; createSymmetricKey(bytes: Uint8Array): AKey.Symmetric;
    createSignKeys(): PairSignKeys; createSignKeys(publicKey: Uint8Array, privateKey: Uint8Array): PairSignKeys; createSignKeys(publicKey: string, privateKey: string): PairSignKeys; createSignKeys(text: string): PairSignKeys;
    createSignedKey(data: string): SignedKey; createSignedKey(keyType: KeyType, key: Uint8Array, sign: Uint8Array): SignedKey; createSignedKey(key: AKey, sign: Sign): SignedKey;
    createSigner(): Signer; createSigner(keys: PairSignKeys): Signer; createSigner(publicKey: AKey.SignPublic, privateKey: AKey.SignPrivate): Signer; createSigner(publicKey: AKey.SignPublic): Signer;
    createSymmetricEngine(key: AKey.Symmetric): CryptoEngine;
    createAsymmetricEngine(key: AKey.AsymmetricPublic): CryptoEngine; createAsymmetricEngine(privateKey: AKey.AsymmetricPrivate, publicKey: AKey.AsymmetricPublic): CryptoEngine; createAsymmetricEngine(keys: PairAsymKeys): CryptoEngine;
    createKey<T extends AKey>(keyType: KeyType, data: Uint8Array): T; createKey<T extends AKey>(data: string): T; createKey<T extends AKey>(keyType: KeyType, publicKeyHex: string): T;
    createSign(data: string): Sign; createSign(data: Uint8Array): Sign;
    createKeyForServer(masterKey: AKey.Symmetric, sid: number): PairSymKeys; createKeyForClient(masterKey: AKey.Symmetric, sid: number): PairSymKeys;
    createSignPublicKey(data: Uint8Array): AKey.SignPublic; createSignPrivateKey(data: Uint8Array): AKey.SignPrivate;
    deriveSymmetricKeys(masterKey: AKey.Symmetric, serverId: number, keyNumber: number): PairSymKeys;
    // createDtoKey removed from interface
}

export interface Factory { getModuleName(): string; getFactoryType(): string; }

// --- Registry and Factory Implementation ---
const providers: Map<string, CryptoProvider> = new Map();

// Helper type guard
function hasGetProviderName(obj: any): obj is { getProviderName(): string } {
    return obj && typeof obj.getProviderName === 'function';
}

export const CryptoProviderFactory = {
    register: (provider: CryptoProvider): void => { const nameLower = provider.getCryptoLibName().toLowerCase(); if (providers.has(nameLower)) { Log.warn(`CryptoProvider already registered: ${nameLower}. Overwriting.`); } providers.set(nameLower, provider); Log.debug(`Registered CryptoProvider: ${provider.getCryptoLibName()}`); },
    getProvider: (libName: string): CryptoProvider => { const nameLower = libName.toLowerCase(); const res = providers.get(nameLower); if (res == null) { throw new Error(`Provider not registered: ${libName}`); } return res; },
    // --- FIX: Simplify getProviderByKey signature ---
    getProviderByKey: (key: CryptoKey): CryptoProvider => { // Expects CryptoKey interface
    // --- End Fix ---
        if (!hasGetProviderName(key)) {
             let keyIdentifier = 'unknown key object';
             if (key && typeof key === 'object') { /* ... provide details ... */ keyIdentifier = `object with keys: ${Object.keys(key).join(', ')}`; }
            throw new Error(`Invalid key object passed to getProviderByKey: missing getProviderName method. Key: ${keyIdentifier}`);
        }
        return CryptoProviderFactory.getProvider(key.getProviderName());
    },
    getProviderBySign: (sign: Sign): CryptoProvider => CryptoProviderFactory.getProvider(sign.getProviderName()),
    all: (): Set<CryptoProvider> => new Set(providers.values()),
    allFlow: (): Array<CryptoProvider> => Array.from(providers.values()),
    createKey<T extends AKey>(providerNameOrString: string, keyType?: KeyType, data?: Uint8Array): T { if (keyType !== undefined && data !== undefined) { const provider = CryptoProviderFactory.getProvider(providerNameOrString); return provider.createKey<T>(keyType, data); } else if (keyType === undefined && data === undefined) { const s = providerNameOrString; if (s == null || s.length === 0) { return RU.cast(null); } const parts = s.split(":"); if (parts.length !== 3) { throw new Error(`Invalid key string format: ${s}`); } const providerName = parts[0]; const provider = CryptoProviderFactory.getProvider(providerName); return provider.createKey<T>(s); } throw new Error("Invalid arguments for CryptoProviderFactory.createKey"); },
    createSignChecker: (s: string): SignChecker => { if (s == null || s.length === 0) { return RU.cast(null); } const i = s.indexOf(":"); if (i === -1 || s.indexOf(":", i + 1) !== -1) { throw new Error("Invalid SignChecker string format."); } const providerName = s.substring(0, i); const keyHex = s.substring(i + 1); const cp = CryptoProviderFactory.getProvider(providerName); const publicKey = cp.createSignPublicKey(HexUtils.hexToBytes(keyHex)); return cp.createSigner(publicKey); },
    createSigner: (providerName: string, publicKeyHex: string, privateKeyHex: string): Signer => { const p = CryptoProviderFactory.getProvider(providerName); return p.createSigner(p.createSignKeys(publicKeyHex, privateKeyHex)); },
    makeSigners: (): Set<Signer> => { const res = new Set<Signer>(); for (const p of CryptoProviderFactory.all()) { res.add(p.createSigner()); } return res; }
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
// =============================================================================================
// FILE: aether.crypto.ts
// PURPOSE: Contains all Cryptographic interfaces and utility implementations.
// DEPENDENCIES: aether.types.ts, aether.logging.ts, aether.utils.ts, aether.rcollection.ts
// =============================================================================================

import {
    Uint8Array,
} from './aether_types';
import { Log } from './aether_logging';
import { HexUtils, RU } from './aether_utils';


// =============================================================================================
// SECTION 9: CRYPTO INTERFACES & IMPLEMENTATION
// =============================================================================================

// --- Base Types ---

export interface CryptoProviderUnit { getProviderName(): string; getCryptoProvider(): CryptoProvider; }
// Key is the type used by DTOs/concrete implementations (e.g. SodiumCurvePrivate)
export interface Key extends CryptoProviderUnit { getData(): Uint8Array; keyToString(): string; }

// --- Exceptions (Mapped from Java RuntimeException) ---

export class EncryptException extends Error {
    constructor(message?: string, cause?: Error) {
        super(message);
        this.name = 'EncryptException';
        if (cause) this.stack = `${this.stack}\nCaused by: ${cause.stack}`;
    }
}

export class DecryptException extends Error {
    constructor(message?: string, cause?: Error) {
        super(message);
        this.name = 'DecryptException';
        if (cause) this.stack = `${this.stack}\nCaused by: ${cause.stack}`;
    }
}

// --- Enum and Core Interfaces ---

export enum KeyType { SYMMETRIC, ASYMMETRIC_PUBLIC, ASYMMETRIC_PRIVATE, SIGN_PUBLIC, SIGN_PRIVATE }

export interface CryptoEngine extends CryptoProviderUnit {
    encrypt(data: Uint8Array): Uint8Array;
    decrypt(data: Uint8Array): Uint8Array;
}
export namespace CryptoEngine {
    export function of(encoder: CryptoEngine, decoder: CryptoEngine): CryptoEngine {
        return {
            encrypt: (data: Uint8Array) => encoder.encrypt(data),
            decrypt: (data: Uint8Array) => decoder.decrypt(data),
            getProviderName: () => encoder.getProviderName(),
            getCryptoProvider: () => encoder.getCryptoProvider(),
        };
    }
}

export interface Sign extends CryptoProviderUnit {
    getSignData(): Uint8Array;
}

export interface SignChecker extends CryptoProviderUnit {
    checkSign(data: Uint8Array, sign: Sign): boolean;
    getPublicKey(): AKey.SignPublic;
}
export namespace SignChecker {
    export function of(s: string): SignChecker {
        return CryptoProviderFactory.createSignChecker(s);
    }
}

export interface Signer extends SignChecker {
    sign(data: Uint8Array): Sign;
    sign(key: AKey): Sign;
}

export interface AKey extends CryptoProviderUnit {
    getData(): Uint8Array;
    getKeyType(): KeyType;
    size(): number;
    toSignedKey(signer: Signer): SignedKey;
    toSignedKey(sign: Sign): SignedKey;
    keyToString(): string;
    asSymmetric(): AKey.Symmetric;
    asAsymmetric(): AKey.AsymmetricPublic;
    asSignPublicKey(): AKey.SignPublic;
    asSignPrivateKey(): AKey.SignPrivate;
}
export namespace AKey {
    export interface Symmetric extends AKey { toCryptoEngine(): CryptoEngine; }
    export interface AsymmetricPublic extends AKey { toCryptoEngine(): CryptoEngine; }
    export interface AsymmetricPrivate extends AKey { }
    export interface SignPublic extends AKey { toSignChecker(): SignChecker; }
    export interface SignPrivate extends AKey { }
    export function of<T extends AKey>(v: string): T {
        return RU.cast(CryptoProviderFactory.createKey(v));
    }
}

// Interface for key pairs
export interface PairKeys extends CryptoProviderUnit {
    getPrivateKey(): AKey | null;
    getPublicKey(): AKey;
    toCryptoEngine(): CryptoEngine;
}
export interface PairSignKeys extends PairKeys {
    getPublicKey(): AKey.SignPublic;
    getPrivateKey(): AKey.SignPrivate | null;
    toSigner(): Signer;
}

export interface SignedKey extends CryptoProviderUnit {
    readonly key: AKey;
    readonly sign: Sign;
    check(signer: AKey.SignPublic): boolean;
    check(signChecker: SignChecker): boolean;
    toString(): string;
}

// DTO structure for Asymmetrically Signed Key Pair
export type PairKeysAsymSigned = {
    getPublicKey(): { getKey(): Key, getSign(): Sign },
    getPrivateKey(): Key | null
};


export interface CryptoProvider {
    getCryptoLibName(): string;
    createAsymmetricKeys(): PairAsymKeys;

    createSymmetricKey(): AKey.Symmetric;
    createSymmetricKey(bytes: Uint8Array): AKey.Symmetric;

    createSignKeys(): PairSignKeys;
    createSignKeys(publicKey: Uint8Array, privateKey: Uint8Array): PairSignKeys;
    createSignKeys(publicKey: string, privateKey: string): PairSignKeys;
    createSignKeys(text: string): PairSignKeys;

    createSignedKey(data: string): SignedKey;
    createSignedKey(keyType: KeyType, key: Uint8Array, sign: Uint8Array): SignedKey;

    createSigner(): Signer;
    createSigner(keys: PairSignKeys): Signer;
    createSigner(publicKey: AKey.SignPublic, privateKey: AKey.SignPrivate): Signer;
    createSigner(publicKey: AKey.SignPublic): Signer;

    createSymmetricEngine(key: AKey.Symmetric): CryptoEngine;
    createAsymmetricEngine(key: AKey.AsymmetricPublic): CryptoEngine;
    createAsymmetricEngine(privateKey: AKey.AsymmetricPrivate, publicKey: AKey.AsymmetricPublic): CryptoEngine;
    createAsymmetricEngine(keys: PairAsymKeys): CryptoEngine;

    createKey<T extends AKey>(keyType: KeyType, data: Uint8Array): T;
    createKey<T extends AKey>(data: string): T;
    createKey<T extends AKey>(keyType: KeyType, publicKey: string): T;

    createSign(data: string): Sign;
    createSign(data: Uint8Array): Sign;
    createKeyForServer(masterKey: AKey.Symmetric, sid: number): AKey.Symmetric;
    createKeyForClient(masterKey: AKey.Symmetric, sid: number): AKey.Symmetric;
    createSignPublicKey(data: Uint8Array): AKey.SignPublic;
    createSignPrivateKey(data: Uint8Array): AKey.SignPrivate;
}

export interface Factory { getModuleName(): string; getFactoryType(): string; }

// --- Concrete Key/Sign Types (Matching DTOs) ---
class BaseKeyImpl implements Key {
    protected readonly data: Uint8Array;
    protected readonly providerName: string;
    protected readonly keyTypeName: string;
    constructor(data: Uint8Array, providerName: string, keyTypeName: string) {
        this.data = data; this.providerName = providerName; this.keyTypeName = keyTypeName;
    }
    getData(): Uint8Array { return this.data; }
    getProviderName(): string { return this.providerName; }
    getCryptoProvider(): CryptoProvider { return CryptoProviderFactory.getProvider(this.providerName); }
    keyToString(): string { return `${this.providerName}:${this.keyTypeName}:${HexUtils.toHexString(this.data)}`; }
}

export class SodiumCurvePrivate extends BaseKeyImpl implements Key { constructor(data: Uint8Array) { super(data, "SODIUM", KeyType[KeyType.ASYMMETRIC_PRIVATE]); } }
export class SodiumSignPublic extends BaseKeyImpl implements Key { constructor(data: Uint8Array) { super(data, "SODIUM", KeyType[KeyType.SIGN_PUBLIC]); } }
export class SodiumSignPrivate extends BaseKeyImpl implements Key { constructor(data: Uint8Array) { super(data, "SODIUM", KeyType[KeyType.SIGN_PRIVATE]); } }
export class SodiumCurvePublic extends BaseKeyImpl implements Key { constructor(data: Uint8Array) { super(data, "SODIUM", KeyType[KeyType.ASYMMETRIC_PUBLIC]); } }
export class HydrogenCurvePrivate extends BaseKeyImpl implements Key { constructor(data: Uint8Array) { super(data, "HYDROGEN", KeyType[KeyType.ASYMMETRIC_PRIVATE]); } }
export class HydrogenCurvePublic extends BaseKeyImpl implements Key { constructor(data: Uint8Array) { super(data, "HYDROGEN", KeyType[KeyType.ASYMMETRIC_PUBLIC]); } }
export class HydrogenSignPublic extends BaseKeyImpl implements Key { constructor(data: Uint8Array) { super(data, "HYDROGEN", KeyType[KeyType.SIGN_PUBLIC]); } }
export class HydrogenSignPrivate extends BaseKeyImpl implements Key { constructor(data: Uint8Array) { super(data, "HYDROGEN", KeyType[KeyType.SIGN_PRIVATE]); } }
export class SodiumChacha20Poly1305 extends BaseKeyImpl implements Key { constructor(data: Uint8Array) { super(data, "SODIUM", KeyType[KeyType.SYMMETRIC]); } }
export class HydrogenSecretBox extends BaseKeyImpl implements Key { constructor(data: Uint8Array) { super(data, "HYDROGEN", KeyType[KeyType.SYMMETRIC]); } }

class BaseSignImpl implements Sign {
    protected readonly data: Uint8Array;
    protected readonly providerName: string;
    constructor(data: Uint8Array, providerName: string) { this.data = data; this.providerName = providerName; }
    getSignData(): Uint8Array { return this.data; }
    getProviderName(): string { return this.providerName; }
    getCryptoProvider(): CryptoProvider { return CryptoProviderFactory.getProvider(this.providerName); }
    toString(): string { return `${this.providerName}:${HexUtils.toHexString(this.data)}`; }
}
export class SignAE_ED25519 extends BaseSignImpl implements Sign { constructor(data: Uint8Array) { super(data, "SODIUM"); } }
export class SignHYDROGEN extends BaseSignImpl implements Sign { constructor(data: Uint8Array) { super(data, "HYDROGEN"); } }


// --- Crypto Implementations (Classes that were simple classes in Java) ---

export class PairAsymKeys implements PairKeys {
    public readonly publicKey: AKey.AsymmetricPublic;
    public readonly privateKey: AKey.AsymmetricPrivate;

    constructor(publicKey: AKey.AsymmetricPublic, privateKey: AKey.AsymmetricPrivate) {
        this.publicKey = publicKey;
        this.privateKey = privateKey;
    }
    getProviderName(): string { return this.publicKey.getProviderName(); }
    getCryptoProvider(): CryptoProvider { return this.publicKey.getCryptoProvider(); }
    getPrivateKey(): AKey.AsymmetricPrivate { return this.privateKey; }
    getPublicKey(): AKey.AsymmetricPublic { return this.publicKey; }
    toCryptoEngine(): CryptoEngine {
        return this.getCryptoProvider().createAsymmetricEngine(this.privateKey, this.publicKey);
    }
}

export class PairSignKeysImpl implements PairSignKeys {
    public readonly publicKey: AKey.SignPublic;
    public readonly privateKey: AKey.SignPrivate | null;

    constructor(publicKey: AKey.SignPublic, privateKey: AKey.SignPrivate | null) {
        this.publicKey = publicKey;
        this.privateKey = privateKey;
    }
    toSigner(): Signer { if (!this.privateKey) throw new Error("No private key for signing"); return this.getCryptoProvider().createSigner(this); }
    getProviderName(): string { return this.publicKey.getProviderName(); }
    getCryptoProvider(): CryptoProvider { return this.publicKey.getCryptoProvider(); }
    getPublicKey(): AKey.SignPublic { return this.publicKey; }
    getPrivateKey(): AKey.SignPrivate | null { return this.privateKey; }
    toCryptoEngine(): CryptoEngine { throw new Error("PairSignKeys cannot be used for encryption (only signing)."); }
}

export class SignedKeyImpl implements SignedKey {
    public readonly key: AKey;
    public readonly sign: Sign;

    constructor(key: AKey, signOrSigner: Sign | Signer) {
        if (!key || !signOrSigner) throw new Error("Key and Sign/Signer are required.");
        this.key = key;
        if (typeof (signOrSigner as Signer).sign === 'function') {
            this.sign = (signOrSigner as Signer).sign(key.getData());
        } else {
            this.sign = signOrSigner as Sign;
        }
    }
    getProviderName(): string { return this.key.getProviderName(); }
    getCryptoProvider(): CryptoProvider { return this.key.getCryptoProvider(); }
    check(soc: AKey.SignPublic | SignChecker): boolean {
        let checker: SignChecker = typeof (soc as AKey.SignPublic).toSignChecker === 'function' ? (soc as AKey.SignPublic).toSignChecker() : soc as SignChecker;
        try { return checker.checkSign(this.key.getData(), this.sign); } catch (e) { Log.error("Sign check error", e as Error); return false; }
    }
    toString(): string { return `${this.key.keyToString()}:${this.sign.toString()}`; }

    public static of(key: AKey, sign: Sign): SignedKey { return new SignedKeyImpl(key, sign); }
}

export class PairAsymKeysSigned implements PairKeys {
    public readonly publicKey: SignedKey;
    public readonly privateKey: AKey.AsymmetricPrivate | null;

    constructor(publicKey: SignedKey, privateKey: AKey.AsymmetricPrivate | null) {
        if (publicKey.key.getKeyType() !== KeyType.ASYMMETRIC_PUBLIC) {
            throw new Error(`Public key is bad: ${publicKey} (expected ASYMMETRIC_PUBLIC)`);
        }
        this.publicKey = publicKey;
        this.privateKey = privateKey;
    }

    getProviderName(): string { return this.publicKey.getProviderName(); }
    getCryptoProvider(): CryptoProvider { return this.publicKey.getCryptoProvider(); }
    getPrivateKey(): AKey.AsymmetricPrivate | null { return this.privateKey; }
    getPublicKey(): AKey.AsymmetricPublic { return this.publicKey.key.asAsymmetric(); }
    getPublicKeySigned(): SignedKey { return this.publicKey; }

    toCryptoEngine(): CryptoEngine {
        if (!this.privateKey) throw new Error("Cannot create CryptoEngine without private key.");
        return this.getCryptoProvider().createAsymmetricEngine(this.privateKey, this.getPublicKey());
    }

    // --- Corrected Static 'of' Method Implementation with Overloading ---
    public static of(k: PairKeysAsymSigned): PairAsymKeysSigned;
    public static of(k: string): PairAsymKeysSigned;
    public static of(k: PairKeysAsymSigned | string): PairAsymKeysSigned {
        if (typeof k === 'string') {
            // Logic for static of(k: string)
            try {
                const kk = k.split(":");
                if (kk.length < 3) {
                    throw new Error("Invalid key string format. Expected at least 3 parts (Provider:PublicKey:Signature)");
                }

                const cpName = kk[0];
                const cp = CryptoProviderFactory.getProvider(cpName);

                const publicKeyData = HexUtils.hexToBytes(kk[1]);
                const signatureData = HexUtils.hexToBytes(kk[2]);

                const signedKey = cp.createSignedKey(KeyType.ASYMMETRIC_PUBLIC, publicKeyData, signatureData);

                let privateKey: AKey.AsymmetricPrivate | null = null;
                if (kk.length > 3) {
                    const privateKeyData = HexUtils.hexToBytes(kk[3]);
                    privateKey = cp.createKey(KeyType.ASYMMETRIC_PRIVATE, privateKeyData);
                }

                return new PairAsymKeysSigned(signedKey, privateKey);
            } catch (e) {
                const error = e as Error;
                throw new Error(`Parse exception for: ${k} (${error.message})`);
            }
        } else {
            // Logic for static of(k: PairKeysAsymSigned)
            return new PairAsymKeysSigned(SignedKeyUtil.of(k.getPublicKey()), KeyUtil.of(k.getPrivateKey()));
        }
    }
    // --- End of Corrected Static 'of' Method Implementation ---
}


// --- Registry and Factory Implementation (Following Java CryptoProviderFactory.java) ---

const providers: Map<string, CryptoProvider> = new Map();

export const CryptoProviderFactory = {
    register: (provider: CryptoProvider): void => {
        providers.set(provider.getCryptoLibName().toLowerCase(), provider);
    },

    getProvider: (libName: string): CryptoProvider => {
        const res = providers.get(libName.toLowerCase());
        if (res == null) {
            throw new Error(`IllegalArgumentException: Provider not registered for library: ${libName}`);
        }
        return res;
    },

    getProviderByKey: (key: AKey): CryptoProvider => CryptoProviderFactory.getProvider(key.getProviderName()),

    getProviderBySign: (sign: Sign): CryptoProvider => CryptoProviderFactory.getProvider(sign.getProviderName()),

    all: (): Set<CryptoProvider> => new Set(providers.values()),

    allFlow: (): Array<CryptoProvider> => Array.from(providers.values()),

    createKey: <T extends AKey>(providerNameOrString: string, keyType?: KeyType, data?: Uint8Array): T => {
        if (keyType !== undefined && data !== undefined) {
            const provider = CryptoProviderFactory.getProvider(providerNameOrString);
            return provider.createKey<T>(keyType, data);
        } else if (keyType === undefined && data === undefined) {
            const s = providerNameOrString;
            if (s == null || s.length === 0) { return RU.cast(null); }
            const parts = s.split(":");
            if (parts.length !== 3) {
                throw new Error(`IllegalArgumentException: Invalid admin key string format. Expected 'PROVIDER_NAME:KEY_TYPE:DATA' actual: ${s}`);
            }
            const providerName = parts[0];
            const type = KeyType[parts[1] as keyof typeof KeyType];
            const keyData = HexUtils.hexToBytes(parts[2]);
            return CryptoProviderFactory.createKey(providerName, type, keyData);
        }
        throw new Error("Invalid arguments for CryptoProviderFactory.createKey");
    },

    createSignChecker: (s: string): SignChecker => {
        if (s == null || s.length === 0) { return RU.cast(null); }
        const i = s.indexOf(":");
        if (i === -1) throw new Error("Invalid SignChecker string format. Expected 'PROVIDER:KEY_HEX'");
        const providerName = s.substring(0, i);
        const keyHex = s.substring(i + 1);
        if (keyHex.includes(":")) throw new Error(`IllegalStateException: ${keyHex}`);

        const cp = CryptoProviderFactory.getProvider(providerName);
        const publicKey = cp.createSignPublicKey(HexUtils.hexToBytes(keyHex));
        return cp.createSigner(publicKey);
    },

    createSigner: (providerName: string, publicKeyHex: string, privateKeyHex: string): Signer => {
        const p = CryptoProviderFactory.getProvider(providerName);
        return p.createSigner(p.createSignKeys(publicKeyHex, privateKeyHex));
    },

    createPairKeysSigned: (providerName: string, publicKeyHex: string, privateKeyHex: string, signer: Signer): PairAsymKeysSigned => {
        const p = CryptoProviderFactory.getProvider(providerName);
        const pk = p.createKey(KeyType.ASYMMETRIC_PUBLIC, HexUtils.hexToBytes(publicKeyHex));
        const signedKey = new SignedKeyImpl(pk, signer);
        const privateKey = p.createKey(KeyType.ASYMMETRIC_PRIVATE, HexUtils.hexToBytes(privateKeyHex));
        return new PairAsymKeysSigned(signedKey, privateKey);
    },

    makeSigners: (): Set<Signer> => {
        const res = new Set<Signer>();
        for (const p of CryptoProviderFactory.all()) {
            res.add(p.createSigner());
        }
        return res;
    }
};


// =============================================================================================
// UTILS: KeyUtil, SignUtil, SignedKeyUtil (Adapted from io.aether.api.common)
// =============================================================================================

export namespace KeyUtil {
    // Overloads (Signatures)
    export function of(key: Key): AKey;
    export function of<T extends Key>(key: AKey): T;

    // Core Implementation (Handles all cases)
    export function of(key: AKey | Key): AKey | Key {
        if ((key as Key).getData && !((key as AKey).getKeyType)) {
            // Case 1: DTO/Concrete Key (Key) -> Abstract AKey (AKey)
            const k = key as Key;
            const data = k.getData();
            const providerName = k.getProviderName();

            if (k instanceof SodiumCurvePrivate) return CryptoProviderFactory.getProvider(providerName).createKey(KeyType.ASYMMETRIC_PRIVATE, data) as any;
            if (k instanceof SodiumSignPublic) return CryptoProviderFactory.getProvider(providerName).createKey(KeyType.SIGN_PUBLIC, data) as any;
            if (k instanceof SodiumSignPrivate) return CryptoProviderFactory.getProvider(providerName).createKey(KeyType.SIGN_PRIVATE, data) as any;
            if (k instanceof SodiumCurvePublic) return CryptoProviderFactory.getProvider(providerName).createKey(KeyType.ASYMMETRIC_PUBLIC, data) as any;
            if (k instanceof HydrogenCurvePrivate) return CryptoProviderFactory.getProvider(providerName).createKey(KeyType.ASYMMETRIC_PRIVATE, data) as any;
            if (k instanceof HydrogenCurvePublic) return CryptoProviderFactory.getProvider(providerName).createKey(KeyType.ASYMMETRIC_PUBLIC, data) as any;
            if (k instanceof HydrogenSignPublic) return CryptoProviderFactory.getProvider(providerName).createKey(KeyType.SIGN_PUBLIC, data) as any;
            if (k instanceof HydrogenSignPrivate) return CryptoProviderFactory.getProvider(providerName).createKey(KeyType.SIGN_PRIVATE, data) as any;
            if (k instanceof SodiumChacha20Poly1305) return CryptoProviderFactory.getProvider(providerName).createKey(KeyType.SYMMETRIC, data) as any;
            if (k instanceof HydrogenSecretBox) return CryptoProviderFactory.getProvider(providerName).createKey(KeyType.SYMMETRIC, data) as any;

            throw new Error("UnsupportedOperationException: Unknown concrete Key type");
        } else {
            // Case 2: Abstract AKey (AKey) -> DTO/Concrete Key (Key)
            const k = key as AKey;
            const cast = RU.cast;
            const providerName = k.getProviderName().toLowerCase();

            switch (providerName) {
                case "sodium":
                    switch (k.getKeyType()) {
                        case KeyType.SYMMETRIC: return cast(new SodiumChacha20Poly1305(k.getData()));
                        case KeyType.ASYMMETRIC_PRIVATE: return cast(new SodiumCurvePrivate(k.getData()));
                        case KeyType.ASYMMETRIC_PUBLIC: return cast(new SodiumCurvePublic(k.getData()));
                        case KeyType.SIGN_PRIVATE: return cast(new SodiumSignPrivate(k.getData()));
                        case KeyType.SIGN_PUBLIC: return cast(new SodiumSignPublic(k.getData()));
                        default: throw new Error("UnsupportedOperationException");
                    }
                case "hydrogen":
                    switch (k.getKeyType()) {
                        case KeyType.SYMMETRIC: return cast(new HydrogenSecretBox(k.getData()));
                        case KeyType.ASYMMETRIC_PRIVATE: return cast(new HydrogenCurvePrivate(k.getData()));
                        case KeyType.ASYMMETRIC_PUBLIC: return cast(new HydrogenCurvePublic(k.getData()));
                        case KeyType.SIGN_PRIVATE: return cast(new HydrogenSignPrivate(k.getData()));
                        case KeyType.SIGN_PUBLIC: return cast(new HydrogenSignPublic(k.getData()));
                        default: throw new Error("UnsupportedOperationException");
                    }
                default: throw new Error(`UnsupportedOperationException: Unknown AKey provider: ${providerName}`);
            }
        }
    }

    export function makeProvider(key: Key): CryptoEngine {
        const k = KeyUtil.of(key) as AKey;
        switch (k.getKeyType()) {
            case KeyType.ASYMMETRIC_PUBLIC:
                return (k as AKey.AsymmetricPublic).toCryptoEngine();
            case KeyType.SYMMETRIC:
                return (k as AKey.Symmetric).toCryptoEngine();
            default:
                throw new Error("UnsupportedOperationException");
        }
    }
}

export namespace KeySymmetricUtil {
    export function of(key: AKey): SodiumChacha20Poly1305 | HydrogenSecretBox {
        switch (key.getProviderName().toLowerCase()) {
            case "sodium":
                return RU.cast(new SodiumChacha20Poly1305(key.getData()));
            case "hydrogen":
                return RU.cast(new HydrogenSecretBox(key.getData()));
        }
        throw new Error("UnsupportedOperationException");
    }
}


export namespace SignedKeyUtil {
    export interface DtoSignedKey { getKey(): Key, getSign(): Sign }

    // Overloads
    export function of(key: DtoSignedKey): SignedKey; // DTO -> Abstract
    export function of(key: SignedKey): SignedKey; // Abstract -> DTO (Returning Abstract for TS simplicity)

    // Core Implementation
    export function of(key: DtoSignedKey | SignedKey): SignedKey {
        if ('key' in key) {
            // Abstract SignedKey -> DTO SignedKey (Returning Abstract SignedKey)
            return new SignedKeyImpl(KeyUtil.of(key.key), SignUtil.of(key.sign));
        } else {
            // DTO SignedKey -> Abstract SignedKey
            return new SignedKeyImpl(KeyUtil.of(key.getKey()), SignUtil.of(key.getSign()));
        }
    }

    export function verifySign(key: DtoSignedKey, checkers: Iterable<SignChecker>): boolean {
        const k = KeyUtil.of(key.getKey()) as AKey;
        const s = SignUtil.of(key.getSign()) as Sign;

        for (const c of checkers) {
            if (c.getCryptoProvider().getCryptoLibName() === k.getCryptoProvider().getCryptoLibName() && c.checkSign(k.getData(), s)) return true;
        }
        return false;
    }
}

export namespace SignUtil {
    // DTO class Sign is implicitly the generic Sign interface.
    // Abstract Sign is the Sign interface from this file.

    // Overloads
    export function of(sign: Sign): Sign; // DTO Sign -> Abstract Sign
    export function of(sign: SignAE_ED25519 | SignHYDROGEN): Sign; // Abstract Sign -> DTO Sign (concrete class)

    // Core Implementation
    export function of(sign: Sign | SignAE_ED25519 | SignHYDROGEN): Sign {
        if ('getSignData' in sign && 'getCryptoProvider' in sign && !((sign as any).constructor.name === 'BaseSignImpl')) {
            // Case 1: Abstract Sign -> DTO Sign (concrete class, e.g., SignAE_ED25519)
            const s = sign as Sign;
            const providerName = s.getProviderName().toLowerCase();
            const cast = RU.cast;

            switch (providerName) {
                case "sodium": return cast(new SignAE_ED25519(s.getSignData()));
                case "hydrogen": return cast(new SignHYDROGEN(s.getSignData()));
                default: throw new Error("UnsupportedOperationException");
            }
        } else {
            // Case 2: DTO Sign (implied) -> Abstract Sign
            const s = sign as any; // DTO Sign, assuming it has getData and getProviderName
            const providerName = s.getProviderName();

            // Check if it has the DTO properties (getData() instead of getSignData() if DTO is based on DTO Key)
            // Assuming DTO Sign conforms to the base Key/Sign structure:
            if ('getSignData' in s) {
                return CryptoProviderFactory.getProvider(providerName).createSign(s.getSignData());
            } else if ('getData' in s) { // Fallback if DTO uses Key structure
                return CryptoProviderFactory.getProvider(providerName).createSign(s.getData());
            }
            throw new Error("UnsupportedOperationException: Unknown DTO Sign type");
        }
    }
}

export namespace PairSignKeysUtils {
    export function of(t: string): PairSignKeys {
        const i = t.indexOf(":");
        if (i === -1) throw new Error("Invalid format for PairSignKeysUtils.of. Expected 'PROVIDER:DATA'");

        const cpName = t.substring(0, i);
        const cp = CryptoProviderFactory.getProvider(cpName);

        return cp.createSignKeys(t.substring(i + 1));
    }
}
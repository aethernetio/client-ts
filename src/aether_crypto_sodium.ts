// PURPOSE: Complete implementation of the SODIUM cryptographic provider.
// STATUS: ИСПРАВЛЕННАЯ ВЕРСИЯ С ПРОВЕРКАМИ АРГУМЕНТОВ

import {
    AKey,
    KeyType,
    CryptoProvider,
    PairAsymKeys,
    PairSignKeys,
    PairSymKeys,
    CryptoEngine,
    Signer,
    Sign,
    SignedKey,
    EncryptException,
    DecryptException,
    CryptoProviderFactory,
    SignChecker,
} from './aether_crypto';
import { HexUtils, RU, Arrays, Objects, DataUtils } from './aether_utils';
// @ts-ignore (AtomicLong не используется в исправленной версии Nonce)
import { AtomicLong } from './aether_client_types';
import sodium from 'libsodium-wrappers';
import { Log } from './aether_logging';

// =============================================================================
// 1. CONSTANTS (KeySize)
// =============================================================================

/** @namespace KeySize */
const KeySize = {
    SODIUM_CURVE25519_PUBLIC: 32,
    SODIUM_CURVE_PRIVATE: 32,
    SODIUM_CURVE_SEALBYTES: 48, // Java: 32 + 16
    SODIUM_CHACHA20POLY1305: 32,
    SODIUM_CHACHA20POLY1305_NONCE_LEN: 8, // Java: 8
    SODIUM_CHACHA20POLY1305_ABYTES: 16, // Java: 16
    SODIUM_SIGN_BYTES: 64, // Java: 64
};

// =============================================================================
// 2. SODIUM SIGNATURE & KEY IMPLEMENTATIONS (SodiumSign, SodiumKey)
// =============================================================================

/** @class SodiumSign */
class SodiumSign implements Sign {
    private readonly data: Uint8Array;

    constructor(data: Uint8Array) {
        if (!data) {
            throw new Error("Signature data cannot be null or undefined");
        }
        if (data.length !== KeySize.SODIUM_SIGN_BYTES) {
            throw new Error(`Invalid signature length: expected ${KeySize.SODIUM_SIGN_BYTES}, got ${data.length}`);
        }
        this.data = data;
    }

    getSignData(): Uint8Array { return this.data; }
    getProviderName(): string { return "SODIUM"; }
    getCryptoProvider(): CryptoProvider { return SodiumCryptoProvider.INSTANCE; }

    toString(): string {
        return `${this.getProviderName()}:${HexUtils.toHexString(this.getSignData())}`;
    }
}

/**
 * @abstract
 * @class SodiumKeyBase
 */
abstract class SodiumKeyBase implements AKey {
    protected readonly data: Uint8Array;
    protected readonly keyType: KeyType;
    protected readonly providerName = "SODIUM";

    protected constructor(data: Uint8Array, keyType: KeyType) {
        if (!data) {
            throw new Error("Key data cannot be null or undefined");
        }
        if (data.length === 0) {
            throw new Error("Key data cannot be empty");
        }
        this.data = data;
        this.keyType = keyType;
    }

    getData(): Uint8Array { return this.data; }
    getKeyType(): KeyType { return this.keyType; }
    getProviderName(): string { return this.providerName; }
    getCryptoProvider(): CryptoProvider { return SodiumCryptoProvider.INSTANCE; }

    size(): number {
        return this.data.length;
    }

    keyToString(): string {
        return `${this.getProviderName()}:${KeyType[this.getKeyType()]}:${HexUtils.toHexString(this.getData())}`;
    }

    toString(): string {
        return this.keyToString();
    }

    equals(obj: any): boolean {
        if (obj instanceof SodiumKeyBase) {
            return this.keyType === obj.keyType &&
                   this.providerName === obj.providerName &&
                   Arrays.equals(this.data, obj.data);
        }
        return false;
    }

    hashCode(): number {
        return Objects.hash(this.keyType, this.providerName, Arrays.hashCode(this.data));
    }

    asSymmetric(): AKey.Symmetric { return RU.cast(this); }
    asAsymmetric(): AKey.AsymmetricPublic { return RU.cast(this); }
    asSignPublicKey(): AKey.SignPublic { return RU.cast(this); }
    asSignPrivateKey(): AKey.SignPrivate { return RU.cast(this); }

    toSignedKey(signer: Signer | Sign): SignedKey {
        if ('sign' in signer) { // Signer
            return this.toSignedKey(signer.sign(this));
        }
        // Sign
        const asign = signer as Sign;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const akey = this;
        return {
            key: akey,
            sign: asign,
            check: (checker: SignChecker | AKey.SignPublic) => {
                const signChecker = 'checkSign' in checker ? checker : checker.toSignChecker();
                return signChecker.checkSign(akey.getData(), asign);
            },
            getProviderName: () => akey.getProviderName(),
            getCryptoProvider: () => akey.getCryptoProvider(),
            toString: () => `${akey.keyToString()}:${asign.toString()}`
        };
    }
}

/**
 * @class SodiumSymmetricKey
 */
class SodiumSymmetricKey extends SodiumKeyBase implements AKey.Symmetric {
    constructor(data: Uint8Array) {
        super(data, KeyType.SYMMETRIC);
        if (data.length !== KeySize.SODIUM_CHACHA20POLY1305) {
            throw new Error(`Invalid symmetric key length: expected ${KeySize.SODIUM_CHACHA20POLY1305}, got ${data.length}`);
        }
    }

    toCryptoEngine(): CryptoEngine {
        return CryptoProviderFactory.getProvider(this.getProviderName()).createSymmetricEngine(this);
    }
}

/**
 * @class SodiumAsymPrivateKey
 */
class SodiumAsymPrivateKey extends SodiumKeyBase implements AKey.AsymmetricPrivate {
    constructor(data: Uint8Array) {
        super(data, KeyType.ASYMMETRIC_PRIVATE);
        if (data.length !== KeySize.SODIUM_CURVE_PRIVATE) {
            throw new Error(`Invalid asymmetric private key length: expected ${KeySize.SODIUM_CURVE_PRIVATE}, got ${data.length}`);
        }
    }
}

/**
 * @class SodiumAsymPublicKey
 */
class SodiumAsymPublicKey extends SodiumKeyBase implements AKey.AsymmetricPublic {
    constructor(data: Uint8Array) {
        super(data, KeyType.ASYMMETRIC_PUBLIC);
        if (data.length !== KeySize.SODIUM_CURVE25519_PUBLIC) {
            throw new Error(`Invalid asymmetric public key length: expected ${KeySize.SODIUM_CURVE25519_PUBLIC}, got ${data.length}`);
        }
    }

    toCryptoEngine(): CryptoEngine {
        return SodiumCryptoProvider.INSTANCE.createAsymmetricEngine(this);
    }
}

/**
 * @class SodiumSignPrivateKey
 */
class SodiumSignPrivateKey extends SodiumKeyBase implements AKey.SignPrivate {
    constructor(data: Uint8Array) {
        super(data, KeyType.SIGN_PRIVATE);
        // Проверка размера для приватного ключа подписи
        if (data.length !== 64) { // Стандартный размер для Ed25519 приватного ключа
            throw new Error(`Invalid sign private key length: expected 64, got ${data.length}`);
        }
    }
}

/**
 * @class SodiumSignPublicKey
 */
class SodiumSignPublicKey extends SodiumKeyBase implements AKey.SignPublic {
    constructor(data: Uint8Array) {
        super(data, KeyType.SIGN_PUBLIC);
        if (data.length !== 32) { // Стандартный размер для Ed25519 публичного ключа
            throw new Error(`Invalid sign public key length: expected 32, got ${data.length}`);
        }
    }

    toSignChecker(): SignChecker {
        return CryptoProviderFactory.getProvider(this.getProviderName()).createSigner(this);
    }
}

// =============================================================================
// 3. SODIUM ENGINE & SIGNER IMPLEMENTATIONS
// =============================================================================

/**
 * @class Nonce
 * @description ИСПРАВЛЕНО: Использует 'bigint' для 64-битной совместимости с Java 'long'.
 */
class Nonce {
    private nonce: bigint;

    constructor() {
        this.nonce = 0n;
    }

    /**
     * @returns {bigint} 64-битный nonce
     */
    incAndGet(): bigint {
        this.nonce += 1n;
        return this.nonce;
    }
}

/** @class SodiumSymmetricEngine */
class SodiumSymmetricEngine implements CryptoEngine {
    private static readonly NONCE_LEN = KeySize.SODIUM_CHACHA20POLY1305_NONCE_LEN;
    private static readonly ABYTES = KeySize.SODIUM_CHACHA20POLY1305_ABYTES;
    private readonly key: AKey.Symmetric;
    private readonly nonce: Nonce;

    constructor(key: AKey.Symmetric) {
        if (!key) {
            throw new Error("Symmetric key cannot be null or undefined");
        }
        if (!(key instanceof SodiumSymmetricKey)) {
            throw new Error("Key must be a SodiumSymmetricKey instance");
        }
        this.key = key;
        this.nonce = new Nonce();
    }

    encrypt(data: Uint8Array): Uint8Array {
        if (!data) {
            throw new EncryptException("Data to encrypt cannot be null or undefined");
        }
        if (data.length === 0) {
            return new Uint8Array(0);
        }

        const currentNonce = this.nonce.incAndGet();
        const nonceBuf = new Uint8Array(SodiumSymmetricEngine.NONCE_LEN);
        DataUtils.writeLongLE(nonceBuf, 0, currentNonce);

        const encryptedAndTag = sodium.crypto_aead_chacha20poly1305_encrypt(
            data,
            new Uint8Array(0), // ad
            null,              // nsec
            nonceBuf,          // nonce (8 bytes)
            this.key.getData() // key
        );

        const output = new Uint8Array(encryptedAndTag.length + SodiumSymmetricEngine.NONCE_LEN);
        output.set(encryptedAndTag, 0);
        output.set(nonceBuf, encryptedAndTag.length);
        Log.trace("encrypt sym $data1 -> $data2",{data1:data,data2:output, key:this.key});
        return output;
    }

    decrypt(data: Uint8Array): Uint8Array {
        if (!data) {
            throw new DecryptException("Data to decrypt cannot be null or undefined");
        }
        if (data.length === 0) {
            return new Uint8Array(0);
        }

        const minSize = SodiumSymmetricEngine.ABYTES + SodiumSymmetricEngine.NONCE_LEN;
        if (data.length < minSize) {
            throw new DecryptException(`Ciphertext too short: ${data.length} < ${minSize}`);
        }

        const nonceStart = data.length - SodiumSymmetricEngine.NONCE_LEN;
        const nonceBuf = data.slice(nonceStart);
        const cipherTagBuf = data.slice(0, nonceStart);

        try {
            let res = sodium.crypto_aead_chacha20poly1305_decrypt(
                null, // nsec (должен быть null)
                cipherTagBuf,
                new Uint8Array(0), // ad
                nonceBuf,          // nonce (8 bytes)
                this.key.getData() // key
            );
            Log.trace("decrypt sym $data1 -> $data2",{data1:data,data2:res, key:this.key});
            return res;
        } catch (e) {
            console.error("Symmetric decryption failed:", {
                dataLength: data.length,
                cipherTagLength: cipherTagBuf.length,
                nonceLength: nonceBuf.length,
                nonceHex: HexUtils.toHexString(nonceBuf),
                keyLength: this.key.getData().length,
                keyHex: HexUtils.toHexString(this.key.getData())
            });
            throw new DecryptException("Decrypt exception", e as Error);
        }
    }

    getProviderName(): string { return "SODIUM"; }
    getCryptoProvider(): CryptoProvider { return SodiumCryptoProvider.INSTANCE; }
}

/** @class SodiumAsymmetricEngine */
class SodiumAsymmetricEngine implements CryptoEngine {
    private static readonly SEALBYTES = KeySize.SODIUM_CURVE_SEALBYTES;
    private readonly publicKey: AKey.AsymmetricPublic;
    private readonly privateKey: AKey.AsymmetricPrivate | null;

    // Конструктор для шифрования (только публичный ключ)
    constructor(publicKey: AKey.AsymmetricPublic);
    constructor(publicKey: AKey.AsymmetricPublic, privateKey: AKey.AsymmetricPrivate);
    constructor(publicKey: AKey.AsymmetricPublic, privateKey?: AKey.AsymmetricPrivate) {
        if (!publicKey) {
            throw new Error("Public key cannot be null or undefined");
        }
        if (!(publicKey instanceof SodiumAsymPublicKey)) {
            throw new Error("Public key must be a SodiumAsymPublicKey instance");
        }
        this.publicKey = publicKey;
        if (privateKey !== undefined) {
            // Конструктор с двумя аргументами (publicKey, privateKey) - для дешифрования
            if (!privateKey) {
                throw new Error("Private key cannot be null or undefined");
            }
            if (!(privateKey instanceof SodiumAsymPrivateKey)) {
                throw new Error("Second argument must be a SodiumAsymPrivateKey instance");
            }
            this.privateKey = privateKey;
        } else {
            // Конструктор с одним аргументом (publicKey) - только для шифрования
            this.privateKey = null;
        }
    }

    encrypt(dataBytes: Uint8Array): Uint8Array {
        if (!dataBytes) {
            throw new EncryptException("Data to encrypt cannot be null or undefined");
        }
        if (dataBytes.length === 0) {
            return new Uint8Array(0);
        }

        const publicKeyData = this.publicKey.getData();
        if (!publicKeyData || publicKeyData.length !== KeySize.SODIUM_CURVE25519_PUBLIC) {
            throw new EncryptException("Invalid public key data");
        }

        try {
            let result = sodium.crypto_box_seal(dataBytes, publicKeyData);
            Log.trace("encrypt asym $data1 -> $data2",{data1:dataBytes,data2:result, skey:this.privateKey,pkey:this.publicKey});
            return result;
        } catch (e) {
            console.error("Asymmetric encryption failed:", {
                dataLength: dataBytes.length,
                publicKeyLength: publicKeyData.length,
                publicKeyHex: HexUtils.toHexString(publicKeyData),
                error: e
            });
            throw new EncryptException("Encrypt exception", e as Error);
        }
    }

    decrypt(dataBytes: Uint8Array): Uint8Array {
        if (this.privateKey === null) {
            throw new Error("This engine is not configured with a private key for decryption");
        }
        if (!dataBytes) {
            throw new DecryptException("Data to decrypt cannot be null or undefined");
        }
        if (dataBytes.length === 0) {
            return new Uint8Array(0);
        }

        const publicKeyData = this.publicKey.getData();
        const privateKeyData = this.privateKey.getData();

        if (!publicKeyData || !privateKeyData) {
            throw new DecryptException("Invalid key data in asymmetric engine");
        }

        if (dataBytes.length < KeySize.SODIUM_CURVE_SEALBYTES) {
            throw new DecryptException(`Ciphertext too short for asymmetric decryption: ${dataBytes.length} < ${KeySize.SODIUM_CURVE_SEALBYTES}`);
        }

        try {
            let result = sodium.crypto_box_seal_open(dataBytes, publicKeyData, privateKeyData);
            Log.trace("decrypt asym $data1 -> $data2",{data1:dataBytes,data2:result, skey:this.privateKey,pkey:this.publicKey});
            return result;
        } catch (e) {
            console.error("Asymmetric decryption failed:", {
                dataLength: dataBytes.length,
                publicKeyLength: publicKeyData.length,
                privateKeyLength: privateKeyData.length,
                error: e
            });
            throw new DecryptException("Decrypt exception", e as Error);
        }
    }

    getProviderName(): string { return "SODIUM"; }
    getCryptoProvider(): CryptoProvider { return SodiumCryptoProvider.INSTANCE; }
}
/** @class SodiumSigner */
class SodiumSigner implements Signer {
    private readonly publicKey: AKey.SignPublic;
    private readonly privateKey: AKey.SignPrivate | null;

    constructor(publicKey: AKey.SignPublic, privateKey: AKey.SignPrivate | null) {
        if (!publicKey) {
            throw new Error("Public key cannot be null or undefined");
        }
        if (!(publicKey instanceof SodiumSignPublicKey)) {
            throw new Error("Public key must be an instance of SodiumSignPublicKey");
        }
        if (privateKey !== null && !(privateKey instanceof SodiumSignPrivateKey)) {
            throw new Error("Private key must be an instance of SodiumSignPrivateKey");
        }
        this.publicKey = publicKey;
        this.privateKey = privateKey;
    }

    sign(data: Uint8Array): Sign;
    sign(key: AKey): Sign;
    sign(dataOrKey: Uint8Array | AKey): Sign {
        if (this.privateKey === null) {
            throw new Error("This Signer instance is not configured with a private key for signing");
        }

        const data = (dataOrKey instanceof Uint8Array) ? dataOrKey : dataOrKey.getData();
        if (!data) {
            throw new Error("Data to sign cannot be null or undefined");
        }

        const signature = sodium.crypto_sign_detached(data, this.privateKey.getData());
        return new SodiumSign(signature);
    }

    checkSign(data: Uint8Array, sign: Sign): boolean {
        if (!data) {
            throw new Error("Data to verify cannot be null or undefined");
        }
        if (!sign) {
            throw new Error("Signature cannot be null or undefined");
        }
        if (!(sign instanceof SodiumSign)) {
            throw new Error("Sign must be a SodiumSign instance");
        }

        return sodium.crypto_sign_verify_detached(sign.getSignData(), data, this.publicKey.getData());
    }

    getPublicKey(): AKey.SignPublic { return this.publicKey; }
    getProviderName(): string { return "SODIUM"; }
    getCryptoProvider(): CryptoProvider { return SodiumCryptoProvider.INSTANCE; }
}

// =============================================================================
// 4. SODIUM PROVIDER IMPLEMENTATION (SodiumCryptoProvider)
// =============================================================================

/** @class SodiumCryptoProvider */
export class SodiumCryptoProvider implements CryptoProvider {
    public static INSTANCE: SodiumCryptoProvider;

    // [FIX] Определяем KDF_CONTEXT как строку и как байты
    private static readonly SODIUM_KDF_CONTEXT_STRING = "_aether_";

    public constructor() {
        // Конструктор оставляем пустым, инициализация через applySodium
    }

    getCryptoLibName(): string { return "SODIUM"; }

    createSignPublicKey(data: Uint8Array): AKey.SignPublic {
        if (!data) {
            throw new Error("Data for sign public key cannot be null or undefined");
        }
        return new SodiumSignPublicKey(data);
    }

    createSignPrivateKey(data: Uint8Array): AKey.SignPrivate {
        if (!data) {
            throw new Error("Data for sign private key cannot be null or undefined");
        }
        return new SodiumSignPrivateKey(data);
    }

    createAsymmetricKeys(): PairAsymKeys {
        const keypair = sodium.crypto_box_keypair();
        const pubKey = new SodiumAsymPublicKey(keypair.publicKey);
        const privKey = new SodiumAsymPrivateKey(keypair.privateKey);

        return {
            publicKey: pubKey,
            privateKey: privKey,
            getProviderName: () => "SODIUM",
            getCryptoProvider: () => SodiumCryptoProvider.INSTANCE,
            getPublicKey: () => pubKey,
            getPrivateKey: () => privKey,
            toCryptoEngine: () => SodiumCryptoProvider.INSTANCE.createAsymmetricEngine( pubKey,privKey)
        } as PairAsymKeys;
    }

    createSymmetricKey(): AKey.Symmetric;
    createSymmetricKey(bytes: Uint8Array): AKey.Symmetric;
    createSymmetricKey(bytes?: Uint8Array): AKey.Symmetric {
        const key = bytes ?? sodium.randombytes_buf(KeySize.SODIUM_CHACHA20POLY1305);
        if (!key) {
            throw new Error("Failed to generate symmetric key");
        }
        return new SodiumSymmetricKey(key);
    }

    createSignKeys(): PairSignKeys;
    createSignKeys(publicKey: Uint8Array, privateKey: Uint8Array): PairSignKeys;
    createSignKeys(publicKey: string, privateKey: string): PairSignKeys;
    createSignKeys(text: string): PairSignKeys;
    createSignKeys(arg1?: Uint8Array | string, arg2?: Uint8Array | string): PairSignKeys {
        try {
            // TODO: Реализовать перегрузки с аргументами
            const keys = sodium.crypto_sign_keypair();
            if (!keys.publicKey || !keys.privateKey) {
                throw new Error("Failed to generate sign key pair");
            }

            const pubKey = new SodiumSignPublicKey(keys.publicKey);
            const privKey = new SodiumSignPrivateKey(keys.privateKey);

            return {
                publicKey: pubKey,
                privateKey: privKey,
                getProviderName: () => "SODIUM",
                getCryptoProvider: () => SodiumCryptoProvider.INSTANCE,
                getPublicKey: () => pubKey,
                getPrivateKey: () => privKey,
                toSigner: () => SodiumCryptoProvider.INSTANCE.createSigner(pubKey, privKey)
            } as PairSignKeys;
        } catch (e) {
            throw new EncryptException("Failed to generate signing keys", e as Error);
        }
    }

    createSigner(keys: PairSignKeys): Signer;
    createSigner(publicKey: AKey.SignPublic, privateKey: AKey.SignPrivate | null): Signer;
    createSigner(publicKey: AKey.SignPublic): Signer;
    createSigner(): Signer;
    createSigner(arg1?: PairSignKeys | AKey.SignPublic, privateKey?: AKey.SignPrivate | null): Signer {
        let pub: AKey.SignPublic;
        let priv: AKey.SignPrivate | null = null;

        if (!arg1) {
            const keys = this.createSignKeys();
            pub = keys.getPublicKey();
            priv = keys.getPrivateKey();
        } else if (typeof (arg1 as PairSignKeys).getPublicKey === 'function') {
            const keys = arg1 as PairSignKeys;
            pub = keys.getPublicKey();
            priv = keys.getPrivateKey();
        } else {
            pub = arg1 as AKey.SignPublic;
            priv = privateKey ?? null;
        }

        if (!pub) {
            throw new Error("Public key cannot be null or undefined");
        }

        return new SodiumSigner(pub, priv);
    }

    createSymmetricEngine(key: AKey.Symmetric): CryptoEngine {
        if (!key) {
            throw new Error("Symmetric key cannot be null or undefined");
        }
        return new SodiumSymmetricEngine(key);
    }

    createAsymmetricEngine(publicKey: AKey.AsymmetricPublic): CryptoEngine;
    createAsymmetricEngine(publicKey: AKey.AsymmetricPublic, privateKey: AKey.AsymmetricPrivate): CryptoEngine;
    createAsymmetricEngine(keys: PairAsymKeys): CryptoEngine;
    createAsymmetricEngine(arg1: AKey.AsymmetricPublic | PairAsymKeys, arg2?: AKey.AsymmetricPrivate): CryptoEngine {
        if (!arg1) {
            throw new Error("First argument cannot be null or undefined");
        }

        if (typeof (arg1 as PairAsymKeys).getPublicKey === 'function') {
            // PairAsymKeys - для дешифрования (оба ключа)
            const keys = arg1 as PairAsymKeys;
            const publicKey = keys.getPublicKey();
            const privateKey = keys.getPrivateKey();

            if (!publicKey) {
                throw new Error("Public key from PairAsymKeys cannot be null");
            }
            if (!privateKey) {
                throw new Error("Private key from PairAsymKeys cannot be null");
            }

            return new SodiumAsymmetricEngine(publicKey, privateKey);
        } else if (arg2) {
            // (publicKey, privateKey) - для дешифрования
            const publicKey = arg1 as AKey.AsymmetricPublic;
            const privateKey = arg2;

            if (!(publicKey instanceof SodiumAsymPublicKey)) {
                throw new Error("First argument must be a SodiumAsymPublicKey instance");
            }
            if (!(privateKey instanceof SodiumAsymPrivateKey)) {
                throw new Error("Second argument must be a SodiumAsymPrivateKey instance");
            }

            return new SodiumAsymmetricEngine(publicKey, privateKey);
        } else {
            const publicKey = arg1 as AKey.AsymmetricPublic;

            if (!(publicKey instanceof SodiumAsymPublicKey)) {
                throw new Error("Argument must be a SodiumAsymPublicKey instance");
            }

            return new SodiumAsymmetricEngine(publicKey);
        }
    }
    createKey<T extends AKey>(keyType: KeyType, data: Uint8Array): T;
    createKey<T extends AKey>(data: string): T;
    createKey<T extends AKey>(keyType: KeyType, publicKeyHex: string): T;
    createKey<T extends AKey>(arg1: KeyType | string, arg2?: Uint8Array | string): T {
        let result: AKey;

        if (typeof arg1 === 'string') {
            const parts = arg1.split(":");
            if (parts.length !== 3 || parts[0] !== this.getCryptoLibName()) {
                throw new Error("Invalid key string for this provider");
            }
            const keyType = KeyType[parts[1] as keyof typeof KeyType];
            if (!keyType) {
                throw new Error(`Invalid key type: ${parts[1]}`);
            }
            const bytes = HexUtils.hexToBytes(parts[2]);
            return this.createKey(keyType, bytes) as T;
        } else {
            const keyType = arg1 as KeyType;
            if (!arg2) {
                throw new Error("Key data cannot be null or undefined");
            }
            const data = arg2 instanceof Uint8Array ? arg2 : HexUtils.hexToBytes(arg2 as string);

            switch (keyType) {
                case KeyType.SYMMETRIC:
                    result = new SodiumSymmetricKey(data);
                    break;
                case KeyType.ASYMMETRIC_PUBLIC:
                    result = new SodiumAsymPublicKey(data);
                    break;
                case KeyType.ASYMMETRIC_PRIVATE:
                    result = new SodiumAsymPrivateKey(data);
                    break;
                case KeyType.SIGN_PUBLIC:
                    result = new SodiumSignPublicKey(data);
                    break;
                case KeyType.SIGN_PRIVATE:
                    result = new SodiumSignPrivateKey(data);
                    break;
                default:
                    throw new Error(`Unsupported KeyType: ${KeyType[keyType]}`);
            }
        }
        return result as T;
    }

    createSign(data: string): Sign;
    createSign(data: Uint8Array): Sign;
    createSign(data: string | Uint8Array): Sign {
        if (!data) {
            throw new Error("Signature data cannot be null or undefined");
        }

        if (typeof data === 'string') {
            const parts = data.split(":");
            if (parts.length !== 2 || parts[0] !== this.getCryptoLibName()) {
                throw new Error("Invalid sign string for this provider");
            }
            return new SodiumSign(HexUtils.hexToBytes(parts[1]));
        } else {
            return new SodiumSign(data);
        }
    }

    deriveSymmetricKeys(masterKey: AKey.Symmetric, serverId: number, keyNumber: number): PairSymKeys {
        if (!masterKey) {
            throw new Error("Master key cannot be null or undefined");
        }
        if (!(masterKey instanceof SodiumSymmetricKey)) {
            throw new Error("Key must be a SodiumSymmetricKey instance");
        }

        const keySize = KeySize.SODIUM_CHACHA20POLY1305;
        const serverIdBig: bigint = BigInt(serverId);
        const keyNumberBig: bigint = BigInt(keyNumber) & 0xFFFFFFFFn;
        const subkeyId: bigint = (serverIdBig << 32n) | keyNumberBig;

        const derivedKey = sodium.crypto_kdf_derive_from_key(
            keySize * 2,
            subkeyId as any as number,
            SodiumCryptoProvider.SODIUM_KDF_CONTEXT_STRING,
            masterKey.getData()
        );

        if (!derivedKey || derivedKey.length !== keySize * 2) {
            throw new Error("Failed to derive symmetric keys");
        }

        const clientToServerKey = new SodiumSymmetricKey(derivedKey.slice(0, keySize));
        const serverToClientKey = new SodiumSymmetricKey(derivedKey.slice(keySize, derivedKey.length));

        return {
            clientKey: clientToServerKey,
            serverKey: serverToClientKey,
            getProviderName: () => "SODIUM",
            getCryptoProvider: () => SodiumCryptoProvider.INSTANCE
        } as PairSymKeys;
    }

    createSignedKey(data: string): SignedKey;
    createSignedKey(keyType: KeyType, key: Uint8Array, sign: Uint8Array): SignedKey;
    createSignedKey(key: AKey, sign: Sign): SignedKey;
    createSignedKey(arg1: string | KeyType | AKey, arg2?: Uint8Array | Sign, arg3?: Uint8Array): SignedKey {
        if (typeof arg1 === 'object' && arg1 !== null && 'getKeyType' in arg1 && arg2 && typeof (arg2 as Sign).getSignData === 'function') {
            const akey = arg1 as AKey;
            const asign = arg2 as Sign;
            return {
                key: akey,
                sign: asign,
                check: (checker: SignChecker | AKey.SignPublic) => {
                    const signChecker = 'checkSign' in checker ? checker : checker.toSignChecker();
                    return signChecker.checkSign(akey.getData(), asign);
                },
                getProviderName: () => akey.getProviderName(),
                getCryptoProvider: () => akey.getCryptoProvider(),
                toString: () => `${akey.keyToString()}:${asign.toString()}`
            };
        }
        throw new Error("createSignedKey overload not implemented");
    }

    createKeyForServer(masterKey: AKey.Symmetric, sid: number): PairSymKeys {
        if (!masterKey) {
            throw new Error("Master key cannot be null or undefined");
        }
        return this.deriveSymmetricKeys(masterKey, sid, 0);
    }

    createKeyForClient(masterKey: AKey.Symmetric, sid: number): PairSymKeys {
        if (!masterKey) {
            throw new Error("Master key cannot be null or undefined");
        }
        return this.deriveSymmetricKeys(masterKey, sid, 0);
    }
}

// =============================================================================
// 5. EXPORT FOR REGISTRATION
// =============================================================================

export function applySodium(): Promise<void> {
    return (sodium.ready as Promise<void>).then(() => {
        if (!SodiumCryptoProvider.INSTANCE) {
            SodiumCryptoProvider.INSTANCE = new SodiumCryptoProvider();
        }
        CryptoProviderFactory.register(SodiumCryptoProvider.INSTANCE);
        Log.info("Registered SODIUM CryptoProvider asynchronously.");
    }).catch(e => {
        Log.error("SODIUM library failed to initialize.", e as Error);
        throw e;
    });
}
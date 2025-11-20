// PURPOSE: Complete implementation of the SODIUM cryptographic provider.
// STATUS: ИСПРАВЛЕННАЯ ВЕРСИЯ (createAsymmetricEngine signatures fixed)

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
import sodium from 'libsodium-wrappers';
import { Log } from './aether_logging';

/** @namespace KeySize */
const KeySize = {
    SODIUM_CURVE25519_PUBLIC: 32,
    SODIUM_CURVE_PRIVATE: 32,
    SODIUM_CURVE_SEALBYTES: 48,
    SODIUM_CHACHA20POLY1305: 32,
    SODIUM_CHACHA20POLY1305_NONCE_LEN: 8,
    SODIUM_CHACHA20POLY1305_ABYTES: 16,
    SODIUM_SIGN_BYTES: 64,
};

/** @class SodiumSign */
class SodiumSign implements Sign {
    private readonly data: Uint8Array;

    constructor(data: Uint8Array) {
        if (!data) throw new Error("Signature data cannot be null");
        if (data.length !== KeySize.SODIUM_SIGN_BYTES) {
            throw new Error(`Invalid signature length: expected ${KeySize.SODIUM_SIGN_BYTES}, got ${data.length}`);
        }
        this.data = data;
    }

    getSignData(): Uint8Array { return this.data; }
    getProviderName(): string { return "SODIUM"; }
    getCryptoProvider(): CryptoProvider { return SodiumCryptoProvider.INSTANCE; }
    toString(): string { return `${this.getProviderName()}:${HexUtils.toHexString(this.getSignData())}`; }
}

abstract class SodiumKeyBase implements AKey {
    protected readonly data: Uint8Array;
    protected readonly keyType: KeyType;
    protected readonly providerName = "SODIUM";

    protected constructor(data: Uint8Array, keyType: KeyType) {
        if (!data || data.length === 0) throw new Error("Key data cannot be empty");
        this.data = data;
        this.keyType = keyType;
    }

    getData(): Uint8Array { return this.data; }
    getKeyType(): KeyType { return this.keyType; }
    getProviderName(): string { return this.providerName; }
    getCryptoProvider(): CryptoProvider { return SodiumCryptoProvider.INSTANCE; }
    size(): number { return this.data.length; }

    keyToString(): string {
        return `${this.getProviderName()}:${KeyType[this.getKeyType()]}:${HexUtils.toHexString(this.getData())}`;
    }
    toString(): string { return this.keyToString(); }

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
        if ('sign' in signer) return this.toSignedKey(signer.sign(this));
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

class SodiumSymmetricKey extends SodiumKeyBase implements AKey.Symmetric {
    constructor(data: Uint8Array) {
        super(data, KeyType.SYMMETRIC);
        if (data.length !== KeySize.SODIUM_CHACHA20POLY1305) {
            throw new Error(`Invalid symmetric key length: expected ${KeySize.SODIUM_CHACHA20POLY1305}, got ${data.length}`);
        }
    }
    toCryptoEngine(): CryptoEngine {
        return SodiumCryptoProvider.INSTANCE.createSymmetricEngine(this);
    }
}

class SodiumAsymPrivateKey extends SodiumKeyBase implements AKey.AsymmetricPrivate {
    constructor(data: Uint8Array) {
        super(data, KeyType.ASYMMETRIC_PRIVATE);
        if (data.length !== KeySize.SODIUM_CURVE_PRIVATE) {
            throw new Error(`Invalid asymmetric private key length: expected ${KeySize.SODIUM_CURVE_PRIVATE}, got ${data.length}`);
        }
    }
}

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

class SodiumSignPrivateKey extends SodiumKeyBase implements AKey.SignPrivate {
    constructor(data: Uint8Array) {
        super(data, KeyType.SIGN_PRIVATE);
        if (data.length !== 64) throw new Error(`Invalid sign private key length: expected 64, got ${data.length}`);
    }
}

class SodiumSignPublicKey extends SodiumKeyBase implements AKey.SignPublic {
    constructor(data: Uint8Array) {
        super(data, KeyType.SIGN_PUBLIC);
        if (data.length !== 32) throw new Error(`Invalid sign public key length: expected 32, got ${data.length}`);
    }
    toSignChecker(): SignChecker {
        return SodiumCryptoProvider.INSTANCE.createSigner(this);
    }
}

class Nonce {
    private nonce: bigint = 0n;
    incAndGet(): bigint {
        this.nonce += 1n;
        return this.nonce;
    }
}

class SodiumSymmetricEngine implements CryptoEngine {
    private static readonly NONCE_LEN = KeySize.SODIUM_CHACHA20POLY1305_NONCE_LEN;
    private static readonly ABYTES = KeySize.SODIUM_CHACHA20POLY1305_ABYTES;
    private readonly key: AKey.Symmetric;
    private readonly nonce: Nonce;

    constructor(key: AKey.Symmetric) {
        if (!key || !(key instanceof SodiumSymmetricKey)) throw new Error("Invalid SodiumSymmetricKey");
        this.key = key;
        this.nonce = new Nonce();
    }

    encrypt(data: Uint8Array): Uint8Array {
        if (!data) throw new EncryptException("Data cannot be null");
        if (data.length === 0) return new Uint8Array(0);

        const currentNonce = this.nonce.incAndGet();
        const nonceBuf = new Uint8Array(SodiumSymmetricEngine.NONCE_LEN);
        DataUtils.writeLongLE(nonceBuf, 0, currentNonce);

        const encryptedAndTag = sodium.crypto_aead_chacha20poly1305_encrypt(
            data,
            new Uint8Array(0),
            null,
            nonceBuf,
            this.key.getData()
        );

        const output = new Uint8Array(encryptedAndTag.length + SodiumSymmetricEngine.NONCE_LEN);
        output.set(encryptedAndTag, 0);
        output.set(nonceBuf, encryptedAndTag.length);
        Log.trace("encrypt sym $data1 -> $data2", { data1: data, data2: output, key: this.key });
        return output;
    }

    decrypt(data: Uint8Array): Uint8Array {
        if (!data) throw new DecryptException("Data cannot be null");
        if (data.length === 0) return new Uint8Array(0);

        const minSize = SodiumSymmetricEngine.ABYTES + SodiumSymmetricEngine.NONCE_LEN;
        if (data.length < minSize) throw new DecryptException("Ciphertext too short");

        const nonceStart = data.length - SodiumSymmetricEngine.NONCE_LEN;
        const nonceBuf = data.slice(nonceStart);
        const cipherTagBuf = data.slice(0, nonceStart);

        try {
            const res = sodium.crypto_aead_chacha20poly1305_decrypt(
                null,
                cipherTagBuf,
                new Uint8Array(0),
                nonceBuf,
                this.key.getData()
            );
            Log.trace("decrypt sym $data1 -> $data2", { data1: data, data2: res, key: this.key });
            return res;
        } catch (e) {
            throw new DecryptException("Decrypt exception", e as Error);
        }
    }

    getProviderName(): string { return "SODIUM"; }
    getCryptoProvider(): CryptoProvider { return SodiumCryptoProvider.INSTANCE; }
}

class SodiumAsymmetricEngine implements CryptoEngine {
    private readonly publicKey: AKey.AsymmetricPublic;
    private readonly privateKey: AKey.AsymmetricPrivate | null;

    constructor(publicKey: AKey.AsymmetricPublic, privateKey?: AKey.AsymmetricPrivate) {
        if (!publicKey || !(publicKey instanceof SodiumAsymPublicKey)) throw new Error("Invalid SodiumAsymPublicKey");
        this.publicKey = publicKey;
        if (privateKey) {
            if (!(privateKey instanceof SodiumAsymPrivateKey)) throw new Error("Invalid SodiumAsymPrivateKey");
            this.privateKey = privateKey;
        } else {
            this.privateKey = null;
        }
    }

    encrypt(dataBytes: Uint8Array): Uint8Array {
        if (!dataBytes) throw new EncryptException("Data cannot be null");
        if (dataBytes.length === 0) return new Uint8Array(0);

        try {
            const result = sodium.crypto_box_seal(dataBytes, this.publicKey.getData());
            Log.trace("encrypt asym $data1 -> $data2", { data1: dataBytes, data2: result, skey: this.privateKey, pkey: this.publicKey });
            return result;
        } catch (e) {
            throw new EncryptException("Encrypt exception", e as Error);
        }
    }

    decrypt(dataBytes: Uint8Array): Uint8Array {
        if (!this.privateKey) throw new Error("No private key for decryption");
        if (!dataBytes) throw new DecryptException("Data cannot be null");
        if (dataBytes.length === 0) return new Uint8Array(0);
        if (dataBytes.length < KeySize.SODIUM_CURVE_SEALBYTES) throw new DecryptException("Ciphertext too short");

        try {
            const result = sodium.crypto_box_seal_open(dataBytes, this.publicKey.getData(), this.privateKey.getData());
            Log.trace("decrypt asym $data1 -> $data2", { data1: dataBytes, data2: result, skey: this.privateKey, pkey: this.publicKey });
            return result;
        } catch (e) {
            throw new DecryptException("Decrypt exception", e as Error);
        }
    }

    getProviderName(): string { return "SODIUM"; }
    getCryptoProvider(): CryptoProvider { return SodiumCryptoProvider.INSTANCE; }
}

class SodiumSigner implements Signer {
    private readonly publicKey: AKey.SignPublic;
    private readonly privateKey: AKey.SignPrivate | null;

    constructor(publicKey: AKey.SignPublic, privateKey: AKey.SignPrivate | null) {
        if (!publicKey || !(publicKey instanceof SodiumSignPublicKey)) throw new Error("Invalid SodiumSignPublicKey");
        if (privateKey && !(privateKey instanceof SodiumSignPrivateKey)) throw new Error("Invalid SodiumSignPrivateKey");
        this.publicKey = publicKey;
        this.privateKey = privateKey;
    }

    sign(dataOrKey: Uint8Array | AKey): Sign {
        if (!this.privateKey) throw new Error("No private key for signing");
        const data = (dataOrKey instanceof Uint8Array) ? dataOrKey : dataOrKey.getData();
        if (!data) throw new Error("Data to sign cannot be null");

        const signature = sodium.crypto_sign_detached(data, this.privateKey.getData());
        return new SodiumSign(signature);
    }

    checkSign(data: Uint8Array, sign: Sign): boolean {
        if (!data || !sign) throw new Error("Invalid data or signature");
        if (!(sign instanceof SodiumSign)) throw new Error("Invalid SodiumSign");
        return sodium.crypto_sign_verify_detached(sign.getSignData(), data, this.publicKey.getData());
    }

    getPublicKey(): AKey.SignPublic { return this.publicKey; }
    getProviderName(): string { return "SODIUM"; }
    getCryptoProvider(): CryptoProvider { return SodiumCryptoProvider.INSTANCE; }
}

export class SodiumCryptoProvider implements CryptoProvider {
    public static INSTANCE: SodiumCryptoProvider;
    private static readonly SODIUM_KDF_CONTEXT_STRING = "_aether_";

    public constructor() { }

    getCryptoLibName(): string { return "SODIUM"; }

    createSignPublicKey(data: Uint8Array): AKey.SignPublic { return new SodiumSignPublicKey(data); }
    createSignPrivateKey(data: Uint8Array): AKey.SignPrivate { return new SodiumSignPrivateKey(data); }

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
            toCryptoEngine: () => SodiumCryptoProvider.INSTANCE.createAsymmetricEngine(pubKey, privKey)
        } as PairAsymKeys;
    }

    createSymmetricKey(bytes?: Uint8Array): AKey.Symmetric {
        const key = bytes ?? sodium.randombytes_buf(KeySize.SODIUM_CHACHA20POLY1305);
        return new SodiumSymmetricKey(key);
    }

    createSignKeys(arg1?: Uint8Array | string, arg2?: Uint8Array | string): PairSignKeys {
        try {
            let pub: Uint8Array;
            let priv: Uint8Array;

            if (arg1 && arg2) {
                pub = typeof arg1 === 'string' ? HexUtils.hexToBytes(arg1) : arg1;
                priv = typeof arg2 === 'string' ? HexUtils.hexToBytes(arg2) : arg2;
            } else {
                const keys = sodium.crypto_sign_keypair();
                pub = keys.publicKey;
                priv = keys.privateKey;
            }

            const pubKey = new SodiumSignPublicKey(pub);
            const privKey = new SodiumSignPrivateKey(priv);

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
            throw new EncryptException("Failed to create/load signing keys", e as Error);
        }
    }

    createSigner(arg1?: PairSignKeys | AKey.SignPublic, privateKey?: AKey.SignPrivate | null): Signer {
        if (!arg1) {
            const keys = this.createSignKeys();
            return new SodiumSigner(keys.getPublicKey(), keys.getPrivateKey());
        } else if ('getPublicKey' in arg1 && 'getPrivateKey' in arg1) {
            return new SodiumSigner(arg1.getPublicKey(), arg1.getPrivateKey());
        } else {
            return new SodiumSigner(arg1 as AKey.SignPublic, privateKey ?? null);
        }
    }

    createSymmetricEngine(key: AKey.Symmetric): CryptoEngine {
        return new SodiumSymmetricEngine(key);
    }

    // *** ИСПРАВЛЕННЫЙ МЕТОД: Поддерживает перегрузки интерфейса ***
    // 1. (key: Public) -> Encrypt only
    // 2. (privateKey: Private, publicKey: Public) -> Decrypt/Encrypt
    // 3. (keys: Pair) -> Decrypt/Encrypt
    createAsymmetricEngine(arg1: AKey.AsymmetricPublic | PairAsymKeys, arg2?: AKey.AsymmetricPrivate): CryptoEngine {
        if ('getPublicKey' in arg1) {
            // Передан PairAsymKeys
            const keys = arg1 as PairAsymKeys;
            return new SodiumAsymmetricEngine(keys.getPublicKey(), keys.getPrivateKey());
        } else if (arg1.getKeyType() === KeyType.ASYMMETRIC_PRIVATE) {
            // Передан (Private, Public)
            const priv = arg1 as AKey.AsymmetricPrivate;
            const pub = arg2 as AKey.AsymmetricPublic;
            if (!pub) {
                throw new Error("Public key is required when creating engine with private key as first argument.");
            }
            return new SodiumAsymmetricEngine(pub, priv);
        } else {
            // Передан (Public)
            const pub = arg1 as AKey.AsymmetricPublic;
            return new SodiumAsymmetricEngine(pub);
        }
    }

    createKey<T extends AKey>(arg1: KeyType | string, arg2?: Uint8Array | string): T {
        let result: AKey;
        if (typeof arg1 === 'string') {
            const parts = arg1.split(":");
            if (parts.length !== 3 || parts[0] !== this.getCryptoLibName()) throw new Error("Invalid key string");
            const keyType = KeyType[parts[1] as keyof typeof KeyType];
            const bytes = HexUtils.hexToBytes(parts[2]);
            return this.createKey(keyType, bytes) as T;
        } else {
            const keyType = arg1 as KeyType;
            if (!arg2) throw new Error("Key data required");
            const data = arg2 instanceof Uint8Array ? arg2 : HexUtils.hexToBytes(arg2 as string);
            switch (keyType) {
                case KeyType.SYMMETRIC: result = new SodiumSymmetricKey(data); break;
                case KeyType.ASYMMETRIC_PUBLIC: result = new SodiumAsymPublicKey(data); break;
                case KeyType.ASYMMETRIC_PRIVATE: result = new SodiumAsymPrivateKey(data); break;
                case KeyType.SIGN_PUBLIC: result = new SodiumSignPublicKey(data); break;
                case KeyType.SIGN_PRIVATE: result = new SodiumSignPrivateKey(data); break;
                default: throw new Error(`Unsupported KeyType: ${KeyType[keyType]}`);
            }
        }
        return result as T;
    }

    createSign(data: string | Uint8Array): Sign {
        if (typeof data === 'string') {
            const parts = data.split(":");
            if (parts.length !== 2 || parts[0] !== this.getCryptoLibName()) throw new Error("Invalid sign string");
            return new SodiumSign(HexUtils.hexToBytes(parts[1]));
        }
        return new SodiumSign(data);
    }

    deriveSymmetricKeys(masterKey: AKey.Symmetric, serverId: number, keyNumber: number): PairSymKeys {
        if (!masterKey || !(masterKey instanceof SodiumSymmetricKey)) throw new Error("Invalid master key");

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

        return {
            clientKey: new SodiumSymmetricKey(derivedKey.slice(0, keySize)),
            serverKey: new SodiumSymmetricKey(derivedKey.slice(keySize, derivedKey.length)),
            getProviderName: () => "SODIUM",
            getCryptoProvider: () => SodiumCryptoProvider.INSTANCE
        } as PairSymKeys;
    }

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
        return this.deriveSymmetricKeys(masterKey, sid, 0);
    }
}

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
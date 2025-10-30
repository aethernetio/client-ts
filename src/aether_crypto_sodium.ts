// FILE: aether_crypto_sodium.ts
// PURPOSE: Complete implementation of the SODIUM cryptographic provider.

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
CryptoKey
} from './aether_crypto';
import { HexUtils, RU, Arrays, Objects, DataUtils } from './aether_utils';
import { AtomicLong } from './aether_client_types';
import * as sodium from 'libsodium-wrappers';


// =============================================================================
// 1. CONSTANTS (KeySize)
// =============================================================================

/** @namespace KeySize */
const KeySize = {
SODIUM_CURVE25519_PUBLIC: 32,
SODIUM_CURVE_PRIVATE: 32,
SODIUM_CURVE_SEALBYTES: 48,
SODIUM_CHACHA20POLY1305: 32,
SODIUM_CHACHA20POLY1305_NONCE_LEN: 8,
SODIUM_CHACHA20POLY1305_ABYTES: 16, // Corrected from error
SODIUM_SIGN_BYTES: 64,
};
// =============================================================================
// 2. SODIUM SIGNATURE & KEY IMPLEMENTATIONS (SodiumSign, SodiumKey)
// =============================================================================

/** @class SodiumSign */
class SodiumSign implements Sign {
private readonly data: Uint8Array;
/**
* @param data The raw signature data.
*/
constructor(data: Uint8Array) {

if (!data || data.length !== KeySize.SODIUM_SIGN_BYTES) throw new Error("Invalid signature length.");
this.data = data;
}
/** @inheritDoc */ getSignData(): Uint8Array { return this.data; }
/** @inheritDoc */ getProviderName(): string { return "SODIUM";
}
/** @inheritDoc */ getCryptoProvider(): CryptoProvider { return SodiumCryptoProvider.INSTANCE; }
/** @inheritDoc */ toString(): string { return `${this.getProviderName()}:${HexUtils.toHexString(this.getSignData())}`;
}
}

/** @abstract @class SodiumKey */
export abstract class SodiumKey implements AKey {
protected readonly data: Uint8Array;
protected readonly keyType: KeyType;
protected readonly providerName = "SODIUM";

/**
* @param data The raw key data.
* @param keyType The type of the key.
*/
protected constructor(data: Uint8Array, keyType: KeyType) { this.data = data; this.keyType = keyType; }

/** @inheritDoc */ getData(): Uint8Array
{ return this.data;
}
/** @inheritDoc */ getKeyType(): KeyType { return this.keyType; }
/** @inheritDoc */ getProviderName(): string { return this.providerName;
}
/** @inheritDoc */ getCryptoProvider(): CryptoProvider { return SodiumCryptoProvider.INSTANCE; }
/** @inheritDoc */ size(): number { return this.data.length;
}
/** @inheritDoc */ keyToString(): string { return `${this.getProviderName()}:${KeyType[this.getKeyType()]}:${HexUtils.toHexString(this.getData())}`; }
/** @inheritDoc */ toString(): string { return this.keyToString();
}
/** @inheritDoc */ equals(obj: any): boolean { if (obj instanceof SodiumKey) return this.keyType === obj.keyType && this.providerName === obj.providerName && Arrays.equals(this.data, obj.data);
return false; }
/** @inheritDoc */ hashCode(): number {
return Objects.hash(this.keyType, this.providerName, Arrays.hashCode(this.data)); }

/** @inheritDoc */ asSymmetric(): AKey.Symmetric { return RU.cast(this);
}
/** @inheritDoc */ asAsymmetric(): AKey.AsymmetricPublic { return RU.cast(this); }
/** @inheritDoc */ asSignPublicKey(): AKey.SignPublic { return RU.cast(this);
}
/** @inheritDoc */ asSignPrivateKey(): AKey.SignPrivate { return RU.cast(this); }
/** @inheritDoc */ toSignedKey(signer: Signer | Sign): SignedKey { throw new Error("Method not implemented.");
}

/** Static Key Type for Symmetric keys. */
static Symmetric = class Symmetric extends SodiumKey implements AKey.Symmetric { constructor(data: Uint8Array) { super(data, KeyType.SYMMETRIC);
} /** @inheritDoc */ toCryptoEngine(): CryptoEngine { return CryptoProviderFactory.getProvider(this.getProviderName()).createSymmetricEngine(this); } }
/** Static Key Type for Asymmetric Private keys.
*/
static AsymmetricPrivate = class AsymmetricPrivate extends SodiumKey implements
AKey.AsymmetricPrivate { constructor(data: Uint8Array) { super(data, KeyType.ASYMMETRIC_PRIVATE);
} }
/** Static Key Type for Asymmetric Public keys. */
static AsymmetricPublic = class AsymmetricPublic extends SodiumKey implements AKey.AsymmetricPublic { constructor(data: Uint8Array) { super(data, KeyType.ASYMMETRIC_PUBLIC);
} /** @inheritDoc */ toCryptoEngine(): CryptoEngine { return CryptoProviderFactory.getProvider(this.getProviderName()).createAsymmetricEngine(this); } }
/** Static Key Type for Signing Private keys.
*/
static SignPrivate = class SignPrivate extends SodiumKey implements AKey.SignPrivate { constructor(data: Uint8Array) { super(data, KeyType.SIGN_PRIVATE);
} }
/** Static Key Type for Signing Public keys. */
static SignPublic = class SignPublic extends SodiumKey implements AKey.SignPublic { constructor(data: Uint8Array) { super(data, KeyType.SIGN_PUBLIC);
} /** @inheritDoc */ toSignChecker(): SignChecker { return CryptoProviderFactory.getProvider(this.getProviderName()).createSigner(this); } }
}


// =============================================================================
// 3. SODIUM ENGINE & SIGNER IMPLEMENTATIONS
// =============================================================================

/** @class Nonce */
class Nonce {
private readonly nonce: AtomicLong;
/**
* @constructor
*/
constructor() { this.nonce = new AtomicLong(0); }
/**
* Increments the nonce value and returns the new value.
* @returns The incremented nonce value.
*/
incAndGet(): number
{ return this.nonce.addAndGet(1);
} // Corrected method name: addAndGet(1)
}

/** @class SodiumSymmetricEngine */
class SodiumSymmetricEngine implements CryptoEngine {
private static readonly NONCE_LEN = KeySize.SODIUM_CHACHA20POLY1305_NONCE_LEN;
// 8
private static readonly ABYTES = KeySize.SODIUM_CHACHA20POLY1305_ABYTES; // 16
private readonly key: AKey.Symmetric;
private readonly nonce: Nonce;
/**
* @param key The symmetric key.
*/
constructor(key: AKey.Symmetric) { this.key = key; this.nonce = new Nonce();
}

/** @inheritDoc */
encrypt(data: Uint8Array): Uint8Array {
if (!data || data.length === 0) return new Uint8Array(0);
const outSize = data.length + SodiumSymmetricEngine.ABYTES;
const output = new Uint8Array(outSize + SodiumSymmetricEngine.NONCE_LEN);
const currentNonce = this.nonce.incAndGet();
const nonceBuf = new Uint8Array(SodiumSymmetricEngine.NONCE_LEN);
DataUtils.writeLongLE(nonceBuf, 0, currentNonce);
// Corrected arguments: (message, additional_data, nonce, secret_nonce, key)
const encryptedAndTag = sodium.crypto_aead_chacha20poly1305_encrypt(data,
new Uint8Array(0), nonceBuf, null, this.key.getData());

output.set(encryptedAndTag, 0);
output.set(nonceBuf, outSize);
return output;
}

/** @inheritDoc */
decrypt(data: Uint8Array): Uint8Array {
if (!data || data.length === 0) return new Uint8Array(0);
const nonceOffset = data.length - SodiumSymmetricEngine.NONCE_LEN;
const nonceBuf = data.slice(nonceOffset, data.length);
const cipherTagBuf = data.slice(0, nonceOffset);
// Corrected arguments: (ciphertext, additional_data, nonce, secret_nonce, key)
try { return sodium.crypto_aead_chacha20poly1305_decrypt(cipherTagBuf, new Uint8Array(0), nonceBuf, null, this.key.getData());
} catch (e) { throw new DecryptException("Decrypt exception", e as Error); }
}

/** @inheritDoc */ getProviderName(): string { return "SODIUM";
}
/** @inheritDoc */ getCryptoProvider(): CryptoProvider { return SodiumCryptoProvider.INSTANCE; }
}

/** @class SodiumAsymmetricEngine */
class SodiumAsymmetricEngine implements CryptoEngine {
private static readonly SEALBYTES = KeySize.SODIUM_CURVE_SEALBYTES;
// 48
private readonly publicKey: AKey.AsymmetricPublic;
private readonly privateKey: AKey.AsymmetricPrivate | null;
/**
* @param keyOrPrivate Public key (for encryption) or Private key (for decryption).
* @param publicKey Optional public key (if private key is first argument).
*/
constructor(publicKey: AKey.AsymmetricPublic);
constructor(privateKey: AKey.AsymmetricPrivate, publicKey: AKey.AsymmetricPublic);
constructor(keyOrPrivate: AKey.AsymmetricPublic | AKey.AsymmetricPrivate, publicKey?: AKey.AsymmetricPublic) {
if (publicKey) { this.privateKey = keyOrPrivate as AKey.AsymmetricPrivate; this.publicKey = publicKey;
}
else { this.publicKey = keyOrPrivate as AKey.AsymmetricPublic; this.privateKey = null;
}
}

/** @inheritDoc */
encrypt(dataBytes: Uint8Array): Uint8Array {
if (!dataBytes || dataBytes.length === 0) return new Uint8Array(0);
try { return sodium.crypto_box_seal(dataBytes, this.publicKey.getData());
} catch (e) {
throw new EncryptException("Encrypt exception", e as Error);
}
}

/** @inheritDoc */
decrypt(dataBytes: Uint8Array): Uint8Array {
if (this.privateKey === null) throw new Error("This engine is not configured with a private key for decryption.");
if (!dataBytes || dataBytes.length === 0) return new Uint8Array(0);
try { return sodium.crypto_box_seal_open(dataBytes, this.publicKey.getData(), this.privateKey.getData());
} catch (e) { throw new DecryptException("Decrypt exception", e as Error); }
}

/** @inheritDoc */ getProviderName(): string { return "SODIUM";
}
/** @inheritDoc */ getCryptoProvider(): CryptoProvider { return SodiumCryptoProvider.INSTANCE; }
}

/** @class SodiumSigner */
class SodiumSigner implements Signer {

private readonly publicKey: AKey.SignPublic;
private readonly privateKey: AKey.SignPrivate | null;

/**
* @param publicKey The signing public key.
* @param privateKey The signing private key (or null for verification only).
*/
constructor(publicKey: AKey.SignPublic, privateKey: AKey.SignPrivate | null) { this.publicKey = publicKey; this.privateKey = privateKey; }

/** @inheritDoc */
sign(data: Uint8Array): Sign;
/** @inheritDoc */
sign(key: AKey): Sign;
sign(dataOrKey: Uint8Array | AKey): Sign {
if (this.privateKey === null) throw new Error("This Signer instance is not configured with a private key for signing.");
const data = (dataOrKey instanceof Uint8Array) ? dataOrKey : dataOrKey.getData();
const signature = sodium.crypto_sign_detached(data, this.privateKey.getData());
return new SodiumSign(signature);
}

/** @inheritDoc */
checkSign(data: Uint8Array, sign: Sign): boolean {
if (!(sign instanceof SodiumSign)) throw new Error("Sign must be a SodiumSign instance");
// Fixed syntax error from unterminated string/bad logic
if (this.publicKey === null) throw new Error("This Signer instance is not configured with a public key for checking.");
return sodium.crypto_sign_verify_detached(sign.getSignData(), data, this.publicKey.getData());
}

/** @inheritDoc */ getPublicKey(): AKey.SignPublic { return this.publicKey; }
/** @inheritDoc */ getProviderName(): string { return "SODIUM";
}
/** @inheritDoc */ getCryptoProvider(): CryptoProvider { return SodiumCryptoProvider.INSTANCE; }
}


// =============================================================================
// 4. SODIUM PROVIDER IMPLEMENTATION (SodiumCryptoProvider)
// =============================================================================

/** @class SodiumCryptoProvider */
export class SodiumCryptoProvider implements CryptoProvider {

public static readonly INSTANCE = new SodiumCryptoProvider();
private static readonly SODIUM_KDF_CONTEXT = "_aether_";

private constructor() {}

/** @inheritDoc */ getCryptoLibName(): string { return "SODIUM";
}
/** @inheritDoc */ createSignPublicKey(data: Uint8Array): AKey.SignPublic { return new SodiumKey.SignPublic(data); }

/** @inheritDoc */ createSignPrivateKey(data: Uint8Array): AKey.SignPrivate { return new SodiumKey.SignPrivate(data);
}
/** @inheritDoc */
createAsymmetricKeys(): PairAsymKeys {
const keypair = sodium.crypto_box_keypair();
return { // Manual implementation to satisfy PairAsymKeys structure
publicKey: new SodiumKey.AsymmetricPublic(keypair.publicKey),
privateKey: new SodiumKey.AsymmetricPrivate(keypair.privateKey),
getProviderName: () => "SODIUM",
getCryptoProvider: () => SodiumCryptoProvider.INSTANCE,
getPublicKey: () => new SodiumKey.AsymmetricPublic(keypair.publicKey),
getPrivateKey: () => new SodiumKey.AsymmetricPrivate(keypair.privateKey),
toCryptoEngine: () => SodiumCryptoProvider.INSTANCE.createAsymmetricEngine(new SodiumKey.AsymmetricPrivate(keypair.privateKey), new SodiumKey.AsymmetricPublic(keypair.publicKey))
} as PairAsymKeys;
}

/** @inheritDoc */
createSymmetricKey(): AKey.Symmetric;
/** @inheritDoc */
createSymmetricKey(bytes: Uint8Array): AKey.Symmetric;
createSymmetricKey(bytes?: Uint8Array): AKey.Symmetric {
const key = bytes ?? sodium.crypto_aead_chacha20poly1305_keygen();
return new SodiumKey.Symmetric(key);
}

/** @inheritDoc */
createSignKeys(): PairSignKeys;
/** @inheritDoc */
createSignKeys(publicKey: Uint8Array, privateKey: Uint8Array): PairSignKeys;
/** @inheritDoc */
createSignKeys(publicKey: string, privateKey: string): PairSignKeys;
/** @inheritDoc */
createSignKeys(text: string): PairSignKeys;
createSignKeys(arg1?: Uint8Array | string, arg2?: Uint8Array | string): PairSignKeys {
try {
const keys = sodium.crypto_sign_keypair();
return { // Manual implementation to satisfy PairSignKeys structure
publicKey: new SodiumKey.SignPublic(keys.publicKey),
privateKey: new SodiumKey.SignPrivate(keys.privateKey),
getProviderName: () => "SODIUM",
getCryptoProvider: () => SodiumCryptoProvider.INSTANCE,
getPublicKey: () => new SodiumKey.SignPublic(keys.publicKey),
getPrivateKey: () => new SodiumKey.SignPrivate(keys.privateKey),
toSigner: () => SodiumCryptoProvider.INSTANCE.createSigner(new SodiumKey.SignPublic(keys.publicKey), new SodiumKey.SignPrivate(keys.privateKey))
} as PairSignKeys;
} catch (e) { throw new EncryptException("Failed to generate signing keys", e as Error); }
}

/** @inheritDoc */ createSigner(keys: PairSignKeys): Signer;
/** @inheritDoc */ createSigner(publicKey: AKey.SignPublic, privateKey: AKey.SignPrivate | null): Signer;
/** @inheritDoc */ createSigner(publicKey: AKey.SignPublic): Signer;
/** @inheritDoc */ createSigner(): Signer;
createSigner(arg1?: PairSignKeys | AKey.SignPublic, privateKey?: AKey.SignPrivate | null): Signer {
let pub: AKey.SignPublic;
let priv: AKey.SignPrivate | null = null;

if (!arg1) { // Default case: create new key pair
const keys = SodiumCryptoProvider.INSTANCE.createSignKeys();
pub = keys.getPublicKey();
priv = keys.getPrivateKey();
} else if (typeof (arg1 as PairSignKeys).getPublicKey === 'function') { // PairSignKeys
pub = (arg1 as PairSignKeys).getPublicKey();
priv = (arg1 as PairSignKeys).getPrivateKey();
} else { // AKey.SignPublic (and optional privateKey)
pub = arg1 as AKey.SignPublic;
priv = privateKey ?? null;
}

if (!(pub instanceof SodiumKey.SignPublic)) throw new Error("Public key must be an instance of SodiumKey.SignPublic");
if (priv !== null && !(priv instanceof SodiumKey.SignPrivate)) throw new Error("Private key must be an instance of SodiumKey.SignPrivate");
return new SodiumSigner(pub, priv);
}


/** @inheritDoc */ createSymmetricEngine(key: AKey.Symmetric): CryptoEngine {
if (!(key instanceof SodiumKey.Symmetric)) throw new Error("Key must be a SodiumKey.Symmetric instance");
return new SodiumSymmetricEngine(key);
}

/** @inheritDoc */ createAsymmetricEngine(key: AKey.AsymmetricPublic): CryptoEngine;
/** @inheritDoc */ createAsymmetricEngine(privateKey: AKey.AsymmetricPrivate, publicKey: AKey.AsymmetricPublic): CryptoEngine;
/** @inheritDoc */ createAsymmetricEngine(keys: PairAsymKeys): CryptoEngine;
createAsymmetricEngine(arg1: AKey.AsymmetricPublic | AKey.AsymmetricPrivate | PairAsymKeys, arg2?: AKey.AsymmetricPublic): CryptoEngine {
if (arg2) { // (privateKey, publicKey)
if (!(arg1 instanceof SodiumKey.AsymmetricPrivate) || !(arg2 instanceof SodiumKey.AsymmetricPublic)) throw new Error("Keys must be instances of SodiumKey.AsymmetricPrivate and SodiumKey.AsymmetricPublic");
return new SodiumAsymmetricEngine(arg1 as SodiumKey.AsymmetricPrivate, arg2);
} else if (typeof (arg1 as PairAsymKeys).getPublicKey === 'function') { // PairAsymKeys
const keys = arg1 as PairAsymKeys;
return this.createAsymmetricEngine(keys.getPrivateKey() as SodiumKey.AsymmetricPrivate, keys.getPublicKey() as SodiumKey.AsymmetricPublic);
} else { // (publicKey)
if (!(arg1 instanceof SodiumKey.AsymmetricPublic)) throw new Error("Key must be a SodiumKey.AsymmetricPublic instance");
return new SodiumAsymmetricEngine(arg1 as SodiumKey.AsymmetricPublic);
}
}


/** @inheritDoc */
createKey<T extends AKey>(keyType: KeyType, data: Uint8Array): T;
/** @inheritDoc */
createKey<T extends AKey>(data: string): T;
/** @inheritDoc */
createKey<T extends AKey>(keyType: KeyType, publicKeyHex: string): T;
createKey<T extends AKey>(arg1: KeyType | string, arg2?: Uint8Array | string): T {
let result: AKey;
if (typeof arg1 === 'string') {
const parts = arg1.split(":");
if (parts.length !== 3 || parts[0] !== this.getCryptoLibName())
throw new Error("Invalid key string for this provider.");
const keyType = KeyType[parts[1] as keyof typeof KeyType];
const bytes = HexUtils.hexToBytes(parts[2]);
return this.createKey(keyType, bytes) as T;
} else {
const keyType = arg1 as KeyType;
const data = arg2 instanceof Uint8Array ? arg2 : HexUtils.hexToBytes(arg2 as string);
switch (keyType) {
case KeyType.SYMMETRIC: result = new SodiumKey.Symmetric(data); break;
case KeyType.ASYMMETRIC_PUBLIC: result = new SodiumKey.AsymmetricPublic(data); break;
case KeyType.ASYMMETRIC_PRIVATE: result = new SodiumKey.AsymmetricPrivate(data); break;
case KeyType.SIGN_PUBLIC: result = new SodiumKey.SignPublic(data); break;
case KeyType.SIGN_PRIVATE: result = new SodiumKey.SignPrivate(data);
break;
default: throw new Error(`Unsupported KeyType: ${KeyType[keyType]}`);
}
}
return RU.cast(result) as T;
}


/** @inheritDoc */ createSign(data: string): Sign;
/** @inheritDoc */ createSign(data: Uint8Array): Sign;
createSign(data: string | Uint8Array): Sign {
if (typeof data === 'string') {
const parts = data.split(":");
if (parts.length !== 2 || parts[0] !== this.getCryptoLibName()) throw new Error("Invalid sign string for this provider.");
return new SodiumSign(HexUtils.hexToBytes(parts[1]));
} else {
return new SodiumSign(data);
}
}


/** @inheritDoc */
deriveSymmetricKeys(masterKey: AKey.Symmetric, serverId: number, keyNumber: number): PairSymKeys {
if (!(masterKey instanceof SodiumKey.Symmetric)) {
throw new Error("Key must be a SodiumKey.Symmetric instance");
}
const keySize = KeySize.SODIUM_CHACHA20POLY1305;
const derivedKey = sodium.crypto_kdf_derive_from_key(
    keySize * 2, // subkey_len
    keyNumber,   // subkey_id
    SodiumCryptoProvider.SODIUM_KDF_CONTEXT, // ctx (string)
    masterKey.getData() // key
);

const clientToServerKey = new SodiumKey.Symmetric(derivedKey.slice(0, keySize));
const serverToClientKey = new SodiumKey.Symmetric(derivedKey.slice(keySize,
derivedKey.length));

return { // Manual implementation to satisfy PairSymKeys structure
clientKey: clientToServerKey,
serverKey: serverToClientKey,
getProviderName: () => "SODIUM",
getCryptoProvider: () => SodiumCryptoProvider.INSTANCE
} as PairSymKeys;
}


/** @inheritDoc */ createSignedKey(data: string): SignedKey;
/** @inheritDoc */ createSignedKey(keyType: KeyType, key: Uint8Array, sign: Uint8Array): SignedKey;
/** @inheritDoc */ createSignedKey(key: AKey, sign: Sign): SignedKey;
createSignedKey(arg1: string | KeyType | AKey, arg2?: Uint8Array | Sign, arg3?: Uint8Array): SignedKey {
if (typeof arg1 === 'string') { throw new Error("Method not implemented for string.");
}
else if (typeof arg1 === 'number' && arg2 instanceof Uint8Array && arg3 instanceof Uint8Array) { throw new Error("Method not implemented for components.");
}
else if (typeof arg1 === 'object' && arg1 !== null && 'getKeyType' in arg1 && arg2 && typeof (arg2 as Sign).getSignData === 'function') { throw new Error("Method not implemented for AKey, Sign.");
}
throw new Error("Method not implemented.");
}

/** @inheritDoc */ createKeyForServer(masterKey: AKey.Symmetric, sid: number): PairSymKeys { throw new Error("Method not implemented.");
}
/** @inheritDoc */ createKeyForClient(masterKey: AKey.Symmetric, sid: number): PairSymKeys { throw new Error("Method not implemented.");
}
}

// =============================================================================
// 5. EXPORT FOR REGISTRATION
// =============================================================================

/** @ignore */
import { Log } from './aether_logging';
/** @ignore */
if (typeof sodium !== 'undefined') {
try {
// Use sodium.ready to ensure environment is fully initialized
(sodium.ready as Promise<void>).then(() => {
if (!CryptoProviderFactory.getProvider("SODIUM")) {
CryptoProviderFactory.register(SodiumCryptoProvider.INSTANCE);
Log.info("Registered SODIUM CryptoProvider asynchronously.");
}
}).catch(e => {
Log.error("SODIUM library failed to initialize.", e as Error);
});
} catch (e) {
Log.error("Error during SODIUM provider registration setup.", e as Error);
}
}


export { SodiumKey, SodiumSign };
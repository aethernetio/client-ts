import * as _sodium from 'libsodium-wrappers';
import {io} from "./aether-api";
import {assert} from "./aether";


export namespace sodium {
    import Key = io.aether.common.Key;
    await _sodium.ready;
    export const sodium = _sodium;

    export class PairKeys {
        publicKey: Key;
        privateKey: Key;

        constructor(publicKey: io.aether.common.Key, privateKey: io.aether.common.Key=null) {
            this.publicKey = publicKey;
            this.privateKey = privateKey;
        }
    }

    export class AsymCrypt {
        public static readonly crypto_box_PUBLICKEYBYTES = 32;
        private static readonly crypto_box_MACBYTES = 16;
        public static readonly crypto_box_SEALBYTES = (AsymCrypt.crypto_box_PUBLICKEYBYTES + AsymCrypt.crypto_box_MACBYTES);
        private readonly keys: PairKeys;

        public constructor(keys: PairKeys) {
            assert(keys.publicKey != null);
            assert(keys.publicKey.data != null);
            this.keys = keys;
        }

        public decode(dataBytes: Uint8Array): Uint8Array {
            if (dataBytes == null) return new Uint8Array(0);
            if (dataBytes.byteLength == 0) return dataBytes;
            let keys = this.keys;
            assert(keys.privateKey != null);
            assert(keys.privateKey.data != null);
            assert(keys.privateKey != null);
            assert(keys.privateKey.data != null);
            return sodium.crypto_box_seal_open(dataBytes, new Uint8Array(keys.publicKey.data), new Uint8Array(keys.privateKey.data));
        }

        public encode(dataBytes: Uint8Array): Uint8Array {
            if (dataBytes == null) return new Uint8Array(0);
            if (dataBytes.length == 0) return dataBytes;
            let key = this.keys.publicKey.data;
            assert(key != null);
            return sodium.crypto_box_seal(dataBytes, new Uint8Array(key));
        }
    }

    export function crypto_aead_chacha20poly1305_keygen() {
        return sodium.crypto_aead_chacha20poly1305_keygen();
    }

    export function asyncCrypt(data: (ArrayBuffer | Uint8Array)): ArrayBuffer {
        if (data instanceof ArrayBuffer) {
            data = new Uint8Array(data as ArrayBuffer);
        }
        assert(data instanceof Uint8Array && asyncPublicKey instanceof Uint8Array);
        let cdata = sodium.crypto_box_seal(data as Uint8Array, asyncPublicKey);
        return cdata;
    }

    export function syncCrypt(data: (ArrayBuffer | Uint8Array), key: (ArrayBuffer | Uint8Array), nonce: (ArrayBuffer | Uint8Array)) {
        if (data instanceof ArrayBuffer) {
            data = new Uint8Array(data as ArrayBuffer);
        }
        if (key instanceof ArrayBuffer) {
            key = new Uint8Array(key as ArrayBuffer);
        }
        if (nonce instanceof ArrayBuffer) {
            nonce = new Uint8Array(nonce as ArrayBuffer);
        }
        assert(data instanceof Uint8Array && key instanceof Uint8Array && nonce instanceof Uint8Array);
        return sodium.crypto_aead_chacha20poly1305_encrypt(data as Uint8Array, null, null, nonce as Uint8Array,
            key as Uint8Array)
    }

    export function syncDecrypt(data: (ArrayBuffer | Uint8Array), key: (ArrayBuffer | Uint8Array), nonce: (ArrayBuffer | Uint8Array)) {
        assert(!!nonce);
        if (data instanceof ArrayBuffer) {
            data = new Uint8Array(data);
        }
        if (key instanceof ArrayBuffer) {
            key = new Uint8Array(key);
        }
        if (nonce instanceof ArrayBuffer) {
            nonce = new Uint8Array(nonce);
        } else {
            throw new Error(nonce.toString());
        }
        assert(data instanceof Uint8Array && key instanceof Uint8Array);
        try {
            let res = sodium.crypto_aead_chacha20poly1305_decrypt(null, data as Uint8Array, null,
                nonce as Uint8Array, key as Uint8Array);
            return res;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}


let asyncPublicKey = new Uint8Array("345ea145288441bd9406dddc92fa65072f3785d43d9b9a707f1cfe1216010400".match(/[\da-f]{2}/gi).map(function (h) {
    return parseInt(h, 16);
}));




import * as _sodium from 'libsodium-wrappers';
import {aether as api} from "./aether-api";
import {aether as core} from "./aether-core";
import {aether as utils} from "./aether-utils";
import Key = api.crypt.Key;
import assert = utils.utils.assert;
import {realpathSync} from "fs";

// await _sodium.ready;
export namespace sodium {
    export const sodium = _sodium;
    const NONCE_LEN = 8;
    export class KeySize {
        static CHACHA20POLY1305: 32;
        static ENCODED_CHACHA20POLY1305: 80;
        static CRYPTO_BOX_PUBLIC: 32;
        static CRYPTO_BOX_PRIVATE: 32;
        static CRYPTO_SIGN_PUBLIC: 32;
        static CRYPTO_SIGN_PRIVATE: 64;
    }
    export class ChachaCryptoProvider implements core.CryptoProvider {
        key: Uint8Array;
        nonce: Uint8Array;

        constructor(key: Uint8Array, nonce?: Uint8Array) {
            this.key = key;
            this.nonce = nonce ? nonce : new Uint8Array(NONCE_LEN);
        }
        private incrementNonce0(i:number){
            if(this.nonce[i]==256){
                this.nonce[i]=0;
                this.incrementNonce0(i-1);
            }else{
                this.nonce[i]++;
            }
        }

        incrementNonce(){
            this.incrementNonce0(7);
        }
        decode(data: Uint8Array): Uint8Array {
            let remoteNonce = new Uint8Array(data.buffer, data.byteLength - NONCE_LEN);
            let data2 = new Uint8Array(data.buffer, 0, data.byteLength - NONCE_LEN);
            return syncDecrypt(data2, this.key, remoteNonce);
        }

        encode(data: Uint8Array): Uint8Array {
            let d = syncCrypt(data, this.key, this.nonce);
            let res = new Uint8Array(d.byteLength + NONCE_LEN);
            d.copyTo(res, 0)
            this.nonce.copyTo(res, d.byteLength);
            this.incrementNonce();
            return res;
        }

    }

    export class PairKeys {
        publicKey: Key;
        privateKey: Key;

        constructor(publicKey: Key, privateKey: Key = null) {
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
            this.keys = keys;
        }

        public decode(dataBytes: Uint8Array): Uint8Array {
            if (dataBytes == null) return new Uint8Array(0);
            if (dataBytes.byteLength == 0) return dataBytes;
            let keys = this.keys;
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

    export function asyncCrypt(data: (ArrayBuffer | Uint8Array)): Uint8Array {
        if (data instanceof ArrayBuffer) {
            data = new Uint8Array(data as ArrayBuffer);
        }
        assert(data instanceof Uint8Array && asyncPublicKey instanceof Uint8Array);
        let cdata = sodium.crypto_box_seal(data as Uint8Array, asyncPublicKey);
        return cdata;
    }

    export function syncCrypt(data: Uint8Array, key: Uint8Array, nonce: Uint8Array): Uint8Array {
        return sodium.crypto_aead_chacha20poly1305_encrypt(data, null, null, nonce, key)
    }

    export function syncDecrypt(data: Uint8Array, key: Uint8Array, nonce: Uint8Array): Uint8Array {
        assert(!!nonce);
        try {
            return sodium.crypto_aead_chacha20poly1305_decrypt(null, data as Uint8Array, null,
                nonce, key);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}


let asyncPublicKey = new Uint8Array("345ea145288441bd9406dddc92fa65072f3785d43d9b9a707f1cfe1216010400".match(/[\da-f]{2}/gi).map(function (h) {
    return parseInt(h, 16);
}));




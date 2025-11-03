import * as bcrypt from 'bcryptjs';
import * as crc32 from 'crc-32';
import { RU } from './aether_utils';

export namespace WorkProofUtil {

    function checkProofOfWorkHash(
        salt: string,
        password: string,
        max_hash_val: number
    ): boolean {
        const hash: string = bcrypt.hashSync(password, salt);

        const hashBytes = new Uint8Array(hash.length);
        for (let i = 0; i < hash.length; i++) {
            hashBytes[i] = hash.charCodeAt(i) & 0xFF;
        }

        const crc = crc32.buf(hashBytes);

        return Math.abs(crc) <= max_hash_val;
    }

    export function generateProofOfWorkPool(
        salt: string,
        suffix: string,
        max_hash_val: number,
        poolSize: number,
        timeout: number
    ): number[] {

        const result: number[] = new Array(poolSize);
        const startTime = RU.time();
        let prefix = 0;

        for (let e = 0; e < poolSize; e++) {
            while (true) {
                if (RU.time() - startTime > timeout) {
                    throw new Error(`TimeoutException: PoW calculation exceeded ${timeout}ms`);
                }

                const prefixHex = prefix.toString(16).padStart(8, '0');

                const password = prefixHex + suffix;

                if (checkProofOfWorkHash(salt, password, max_hash_val)) {
                    result[e] = prefix++;
                    break;
                }
                prefix++;
            }
        }
        return result;
    }

    export function checkProofOfWorkHashList(
        salt: string,
        suffix: string,
        passwords: number[],
        max_hash_val: number
    ): boolean {

        for (const p of passwords) {
            const prefixHex = p.toString(16).padStart(8, '0');
            const password = prefixHex + suffix;

            if (!checkProofOfWorkHash(salt, password, max_hash_val)) {
                return false;
            }
        }
        return true;
    }
}
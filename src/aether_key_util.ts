// FILE: aether_key_util.ts
// PURPOSE: Utility functions for converting between DTO Keys (aether_api) and Crypto Keys (aether_crypto).

import {
    AKey,
    KeyType,
    CryptoProviderFactory,
} from './aether_crypto';
import {
    Key as DtoKey,
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
} from './aether_api';
import {

Log
} from './aether_logging';
import {
    Uint8Array
} from './aether_types';

/**
 * Converts a DTO Key (transport layer) to an AKey (cryptographic layer interface).
 *
 * @param key The DTO Key instance from the generated aether_api.
 * @returns The corresponding AKey implementation.
 * @throws {Error} If the DTO Key type is unsupported or missing data.
 */
export function dtoKeyToAKey(key: DtoKey): AKey {
    let providerName: string | undefined = undefined;
    let keyType: KeyType | undefined = undefined;
    const data = (key as any).data as Uint8Array;

    if (!data || !(data instanceof Uint8Array)) {
        throw new Error(`DTO Key is missing valid data property.`);
    }


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

    if (providerName && keyType !== undefined) {
        const provider = CryptoProviderFactory.getProvider(providerName);
        return provider.createKey(keyType, data);
    } else
{
        const className = (key.constructor as any).name;
        Log.error(`dtoKeyToAKey: Could not determine provider/type`, undefined, {
            className,
        });
        throw new Error(`Unsupported DTO Key type: ${className}`);
    }
}

/**
 * Converts an AKey (cryptographic layer interface) back to its corresponding DTO Key (transport layer).
 *
 * @param key The AKey instance.
 * @returns The corresponding DTO Key instance.
 * @throws {Error} If the AKey type/provider combination is unsupported.
 */
export function aKeyToDtoKey<T extends DtoKey>(key: AKey): T {
    const providerName = key.getProviderName().toLowerCase();
    const keyType = key.getKeyType();
    const data = key.getData();

    switch (providerName)
{
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
        // Logic for "stub" removed
    }
    throw new Error(
        `Unsupported AKey for DTO conversion: Provider ${providerName}, Type ${KeyType[keyType]}`
    );
}
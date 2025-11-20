import {
    AKey,
    KeyType,
    CryptoProviderFactory,
    Sign as InternalSign,
    SignedKey as InternalSignedKey,
    SignChecker,
    CryptoEngine,
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
    Sign as DtoSign,
    SignAE_ED25519,
    SignHYDROGEN,
    SignedKey as DtoSignedKey,
} from './aether_api';
import { Log } from './aether_logging';
import { RU } from './aether_utils';

/**
 * Provides static utility methods for converting between DTO (aether_api)
 * transport types and internal (aether_crypto) types.
 */
export namespace CryptoUtils {

    export function dtoKeyToAKey<T extends AKey>(key: DtoKey): T {
        let providerName: string | undefined = undefined;
        let keyType: KeyType | undefined = undefined;
        const data = (key as any).data as Uint8Array;

        if (!data || !(data instanceof Uint8Array)) {
            const className = (key.constructor as any).name;
            if (className === "Key") {
                throw new Error(`DTO Key is abstract. Cannot convert abstract 'Key' to AKey.`);
            }
            throw new Error(`DTO Key (${className}) is missing valid 'data' property.`);
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
            return RU.cast(provider.createKey(keyType, data));
        } else {
            const className = (key.constructor as any).name;
            Log.error("dtoKeyToAKey: Could not determine provider/type", undefined, { className: className });
            throw new Error(`Unsupported DTO Key type: ${className}`);
        }
    }

    export function aKeyToDtoKey<T extends DtoKey>(key: AKey): T {
        const providerName = key.getProviderName().toLowerCase();
        const keyType = key.getKeyType();
        const data = key.getData();

        switch (providerName) {
            case "sodium":
                switch (keyType) {
                    case KeyType.SYMMETRIC:
                        return RU.cast(new SodiumChacha20Poly1305(data));
                    case KeyType.ASYMMETRIC_PRIVATE:
                        return RU.cast(new SodiumCurvePrivate(data));
                    case KeyType.ASYMMETRIC_PUBLIC:
                        return RU.cast(new SodiumCurvePublic(data));
                    case KeyType.SIGN_PRIVATE:
                        return RU.cast(new SodiumSignPrivate(data));
                    case KeyType.SIGN_PUBLIC:
                        return RU.cast(new SodiumSignPublic(data));
                    default:
                        throw new Error(`Unsupported AKey KeyType for provider ${providerName}: ${KeyType[keyType]}`);
                }

            case "hydrogen":
                switch (keyType) {
                    case KeyType.SYMMETRIC:
                        return RU.cast(new HydrogenSecretBox(data));
                    case KeyType.ASYMMETRIC_PRIVATE:
                        return RU.cast(new HydrogenCurvePrivate(data));
                    case KeyType.ASYMMETRIC_PUBLIC:
                        return RU.cast(new HydrogenCurvePublic(data));
                    case KeyType.SIGN_PRIVATE:
                        return RU.cast(new HydrogenSignPrivate(data));
                    case KeyType.SIGN_PUBLIC:
                        return RU.cast(new HydrogenSignPublic(data));
                    default:
                        throw new Error(`Unsupported AKey KeyType for provider ${providerName}: ${KeyType[keyType]}`);
                }

            default:
                throw new Error(
                    `Unsupported AKey for DTO conversion: Provider ${providerName}, Type ${KeyType[keyType]}`
                );
        }
    }

    export function dtoSignToInternal(sign: DtoSign): InternalSign {
        if (sign instanceof SignAE_ED25519) {
            return CryptoProviderFactory.getProvider("SODIUM").createSign(sign.getData());
        } else if (sign instanceof SignHYDROGEN) {
            return CryptoProviderFactory.getProvider("HYDROGEN").createSign(sign.getData());
        } else {
            throw new Error("UnsupportedOperationException: Unknown DTO Sign type");
        }
    }

    export function internalSignToDto(sign: InternalSign): DtoSign {
        switch (sign.getProviderName().toLowerCase()) {
            case "sodium":
                return new SignAE_ED25519(sign.getSignData());
            case "hydrogen":
                return new SignHYDROGEN(sign.getSignData());
            default:
                throw new Error("UnsupportedOperationException: Unknown internal Sign provider");
        }
    }

    export function dtoSignedKeyToInternal(key: DtoSignedKey): InternalSignedKey {
        const internalAKey = dtoKeyToAKey(key.getKey());
        const internalSign = dtoSignToInternal(key.getSign());
        const provider = CryptoProviderFactory.getProvider(internalAKey.getProviderName());
        return provider.createSignedKey(internalAKey, internalSign);
    }

    export function internalSignedKeyToDto(key: InternalSignedKey): DtoSignedKey {
        return new DtoSignedKey(aKeyToDtoKey(key.key), internalSignToDto(key.sign));
    }

    export function verifySign(key: DtoSignedKey, checkers: Iterable<SignChecker>): boolean {
        const k = dtoKeyToAKey(key.getKey());
        const s = dtoSignToInternal(key.getSign());
        for (const c of checkers) {
            if (c.getCryptoProvider() == k.getCryptoProvider() && c.checkSign(k.getData(), s)) {
                return true;
            }
        }
        return false;
    }

    export function makeProvider(key: DtoKey): CryptoEngine {
        const k = dtoKeyToAKey(key);
        switch (k.getKeyType()) {
            case KeyType.ASYMMETRIC_PUBLIC:
                return (k as AKey.AsymmetricPublic).toCryptoEngine();
            case KeyType.SYMMETRIC:
                return (k as AKey.Symmetric).toCryptoEngine();
            default:
                throw new Error("UnsupportedOperationException: Key type cannot be used to make an engine");
        }
    }
}